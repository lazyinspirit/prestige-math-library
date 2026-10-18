import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { unchangedPublishedPageRelocation as rawAccepts } from './publication-baseline.mjs';
const accepts=(root,baseline,row,current)=>rawAccepts(root,baseline,row,Buffer.isBuffer(current)?current:Buffer.from(current));
const page = (id='prior-page', status='published') => `---\npage: ${id}\nstatus: ${status}\nitems: []\n---\n# Prior owner-published page\nExact body.\n`;
function fixture(t, setup=()=>{}) {
  const root=mkdtempSync(join(tmpdir(),'published-page-move-')); t.after(()=>rmSync(root,{recursive:true,force:true}));
  const put=(path,text)=>{mkdirSync(dirname(join(root,path)),{recursive:true});writeFileSync(join(root,path),text);};
  const git=(...args)=>{const r=spawnSync('git',args,{cwd:root,encoding:'utf8'});assert.equal(r.status,0,r.stderr);return r.stdout.trim();};
  git('init','-b','main');git('config','user.name','Publication fixture');git('config','user.email','fixture@example.invalid');
  const old='library/original/prior-page.md',row={id:'prior-page',file:'library/relocated/prior-page.md'},current=page();put(old,current);setup({root,put,git,old,row,current});git('add','.');git('commit','-m','actual prior owner publication');const baseline=git('rev-parse','HEAD');
  return {root,put,git,old,row,current,baseline,check(){return accepts(root,baseline,row,current);}};
}
test('exact published page relocation is admitted without altering source or creating publication credit',t=>{const f=fixture(t);assert.equal(f.check(),true);assert.equal(accepts(f.root,f.baseline,{...f.row,file:'items/prior-page.md'},f.current),false);});
for(const mode of ['draft','identity','body','metadata','status','same-path-draft','same-path-published','duplicate','missing','invalid-baseline','nonancestor','item','wrong-filename','symlink'])test(`relocation rejects ${mode}`,t=>{
  const f=fixture(t,({root,put,git,old,row,current})=>{
    if(mode==='draft')put(old,page('prior-page','draft'));
    if(mode==='identity')put(old,page('different-id'));
    if(mode==='same-path-draft')put(row.file,page('prior-page','draft'));
    if(mode==='same-path-published')put(row.file,current);
    if(mode==='duplicate')put('library/another/prior-page.md',current);
    if(mode==='missing')rmSync(join(root,old));
    if(mode==='symlink'){rmSync(join(root,old));symlinkSync(current,join(root,old));}
    put('anchor.txt','real original commit\n');
  });
  let baseline=f.baseline,row=f.row,current=f.current;
  if(mode==='body')current+='Altered body.\n';if(mode==='metadata')current=current.replace('items: []','items: [new-item]');if(mode==='status')current=page('prior-page','draft');if(mode==='invalid-baseline')baseline='HEAD';if(mode==='item')row={id:'prior-page',file:'items/prior-page.md'};if(mode==='wrong-filename')row={id:'prior-page',file:'library/relocated/other-page.md'};
  if(mode==='nonancestor'){f.git('checkout','--orphan','unrelated');f.git('rm','-rf','.');f.put('unrelated.txt','unrelated\n');f.git('add','.');f.git('commit','-m','unrelated history');}
  assert.equal(accepts(f.root,baseline,row,current),false);
});
test('quoted published scalar still requires full exact original bytes',t=>{const f=fixture(t,({put,old})=>put(old,page().replace('status: published','status: "published"')));const exact=page().replace('status: published','status: "published"');assert.equal(accepts(f.root,f.baseline,f.row,exact),true);assert.equal(f.check(),false);});

test('raw invalid UTF-8 cannot match decoded replacement-character bytes',t=>{const f=fixture(t,({put,old})=>put(old,page()+'\ufffd\n'));const invalid=Buffer.concat([Buffer.from(page()),Buffer.from([0xff,10])]);assert.equal(accepts(f.root,f.baseline,f.row,invalid),false);assert.equal(rawAccepts(f.root,f.baseline,f.row,page()+'\ufffd\n'),false,'API requires actual bytes');});
test('even identical invalid UTF-8 is not a valid published page source',t=>{const raw=Buffer.concat([Buffer.from(page()),Buffer.from([0xff])]);const f=fixture(t,({put,old})=>put(old,raw));assert.equal(accepts(f.root,f.baseline,f.row,raw),false);});
