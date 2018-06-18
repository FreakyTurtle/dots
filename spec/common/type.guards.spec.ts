import DigitalOcean from '../../';
import { IAccount } from '../../src/common/interfaces';
import {
  isAccount,
  isAction,
  isCertificate,
  isCollection,
  isDroplet,
  isImage,
  isRegion,
  isResource,
  isSize,
  isSnapshot,
  isSSHKey,
  isTag,
  isVolume,
} from '../../src/common/type.guards';

export default function(digitalOcean: DigitalOcean) {
  const shouldBeAFn = (key, fn) =>
    it(`\`${key}\` should be a function`, () => {
      expect(fn).toBeDefined();
      expect(typeof fn).toBe('function');
    });
  const shouldReturnFalse = (key, type, fn, value) =>
    it(`\`${key}\` should be \`${type}\` `, () => {
      expect(fn(value)).toBe(false);
    });
  const shouldReturnTrue = (key, fn, value) =>
    it(`\`${key}\` should return true`, () => {
      expect(fn(value)).toBe(true);
    });
  const copyObj = (obj) => JSON.parse(JSON.stringify(obj));

  describe('Type guards', () => {
    describe('IAccount', () => {
      shouldBeAFn('isAccount', isAccount);
      const account: Partial<IAccount> = {};
      shouldReturnFalse('droplet_limit', 'number', isAccount, copyObj(account));
      account.droplet_limit = 0;
      shouldReturnFalse('email', 'string', isAccount, copyObj(account));
      account.email = 'email@email.com';
      shouldReturnFalse('email_verified', 'boolean', isAccount, copyObj(account));
      account.email_verified = true;
      shouldReturnFalse('floating_ip_limit', 'number', isAccount, copyObj(account));
      account.floating_ip_limit = 0;
      shouldReturnFalse('status', 'string', isAccount, copyObj(account));
      account.status = 'status';
      shouldReturnFalse('status_message', 'string', isAccount, copyObj(account));
      account.status_message = 'statusMessage';
      shouldReturnFalse('uuid', 'string', isAccount, copyObj(account));
      account.uuid = 'uuid';
      shouldReturnTrue('isAccount', isAccount, copyObj(account));
    });
    describe('IAction', () => {
      shouldBeAFn('isAction', isAction);
    });
    describe('ICertificate', () => {
      shouldBeAFn('isCertificate', isCertificate);
    });
    describe('ICollection', () => {
      shouldBeAFn('isCollection', isCollection);
    });
    describe('IDroplet', () => {
      shouldBeAFn('isDroplet', isDroplet);
    });
    describe('IImage', () => {
      shouldBeAFn('isImage', isImage);
    });
    describe('IRegion', () => {
      shouldBeAFn('isRegion', isRegion);
    });
    describe('IResource', () => {
      shouldBeAFn('isResource', isResource);
    });
    describe('ISize', () => {
      shouldBeAFn('isSize', isSize);
    });
    describe('ISnapshot', () => {
      shouldBeAFn('isSnapshot', isSnapshot);
    });
    describe('ISSHKey', () => {
      shouldBeAFn('isSSHKey', isSSHKey);
    });
    describe('ITag', () => {
      shouldBeAFn('isTag', isTag);
    });
    describe('IVolume', () => {
      shouldBeAFn('isVolume', isVolume);
    });
  });
}
