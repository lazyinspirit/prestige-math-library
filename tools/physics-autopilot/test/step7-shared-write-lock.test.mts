import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {sharedWriteLock} from '../../physics-support/step7-shared-write-lock.mjs';

test('shared metadata lock excludes other writers and rejects foreign release',()=>{
  const root=mkdtempSync(join(tmpdir(),'step7-lock-'));
  try{
    assert.equal(sharedWriteLock(root,'acquire','owner-1').acquired,true);
    assert.equal(sharedWriteLock(root,'acquire','owner-2').acquired,false);
    assert.throws(()=>sharedWriteLock(root,'release','owner-2'),/belongs to owner-1/);
    assert.equal(sharedWriteLock(root,'acquire','owner-3').acquired,false);
    assert.equal(sharedWriteLock(root,'release','owner-1').released,true);
    assert.equal(sharedWriteLock(root,'acquire','owner-2').acquired,true);
    assert.equal(sharedWriteLock(root,'release','owner-2').released,true);
  }finally{rmSync(root,{recursive:true,force:true});}
});
