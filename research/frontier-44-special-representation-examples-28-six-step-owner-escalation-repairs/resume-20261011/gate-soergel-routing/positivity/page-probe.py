import pathlib,json,os,subprocess,shutil,tempfile,re
root=pathlib.Path.cwd();r='frontier-44-special-representation-examples-28-six-step';b=root/'research'/f'{r}-owner-escalation-repairs/resume-20261011/gate-soergel-routing/positivity';p=json.load(open(b/'proposal.json'));existing=json.load(open(root/'research'/f'{r}-owner-escalation-repairs/resume-20261011/integration/gate1-repair/rehome-probe-receipt.json'))['temporary_probe'];tmp=pathlib.Path(tempfile.mkdtemp(prefix='kl-positivity-page-probe-'))
# Mirror the prior current-901 native rehome resolver, preserving proposed six rehomes.
for d,dirs,files in os.walk(existing,followlinks=False):
 rel=pathlib.Path(d).relative_to(existing);(tmp/rel).mkdir(exist_ok=True)
 for x in files:
  src=pathlib.Path(d)/x;dst=tmp/rel/x
  if src.is_symlink():dst.symlink_to(src.resolve())
  else:shutil.copyfile(src,dst)
 for x in list(dirs):
  src=pathlib.Path(d)/x
  if src.is_symlink():(tmp/rel/x).symlink_to(src.resolve(),target_is_directory=True);dirs.remove(x)
for x in p['source_changes']:
 dst=tmp/x['path'];dst.unlink(missing_ok=True);dst.write_text((root/x['proposed_file']).read_text())
helper=p['helper_id'];scope=json.load(open(tmp/'scope.json'));scope.append(helper);json.dump(scope,open(tmp/'scope.json','w'))
results=[]
for home in ['soergel-intersection-forms-and-hodge-theory','type-a-hecke-specht-modules-and-cellular-bases','divided-powers-integral-forms-and-quantum-highest-weights']:
 file=next(x for x in (tmp/'library').rglob('*.md') if re.search(r'^page:\s*'+re.escape(home)+r'\s*$',x.read_text(),re.M));saved=file.read_text();live=root/file.relative_to(tmp);text=re.sub(r'^(items:\s*\[)',lambda m:m.group(1)+helper+', ',saved,count=1,flags=re.M)
 if text==saved:raise Exception('no pageitems '+home)
 file.unlink();file.write_text(text)
 log=b/(home+'.depcheck.json');handle=open(log,'w');z=subprocess.run(['node',str(tmp/'tools/depcheck.mjs'),'--items-file',str(tmp/'scope.json'),'--json'],cwd=root,stdout=handle,stderr=subprocess.PIPE,text=True);handle.close();doc=json.load(open(log));results.append({'home':home,'exit_code':z.returncode,'page_cycles':[e for e in doc.get('errors',[]) if e.get('code')=='page-cycle'],'errors_other':[e for e in doc.get('errors',[]) if e.get('code')!='page-cycle']});file.write_text(saved)
print(json.dumps([{'home':x['home'],'cycles':x['page_cycles']} for x in results],indent=2));json.dump({'resolver':str(tmp),'scope':len(scope),'results':results,'native_gate_attempt':False},open(b/'page-probe-results.json','w'),indent=2)
