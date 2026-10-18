import pathlib,json,subprocess,hashlib,datetime
run='numerical-analysis-remaining-71-2026-10-17';base=pathlib.Path('research/'+run+'-owner-planning-integration');p=json.loads((base/'step6-published-fragment-preparation-proposal.json').read_text())['immediate_addition_only_blocker'];path=pathlib.Path(p['path']);old=p['historical_record_from_actual_HEAD_and_index'];current=p['current_distinct_owned_record_to_preserve'];receipt=base/'step6-published-ledger-historical-record-restoration.json'
def git(*args):return subprocess.check_output(['git',*args])
def sha(b):return hashlib.sha256(b).hexdigest()
assert not receipt.exists()
head=git('rev-parse','HEAD').decode().strip();entry=git('ls-files','--stage','--',str(path)).decode().strip().split();assert len(entry)==4 and entry[2]=='0';blob=entry[1];headraw=git('show',head+':'+str(path));indexraw=git('cat-file','blob',blob)
for raw in [headraw,indexraw]:assert raw.decode().splitlines().count(old)==1
raw=path.read_bytes();text=raw.decode();assert text.splitlines().count(old)==0 and text.splitlines().count(current)==1
needle=(current+'\n').encode();assert raw.count(needle)==1;next=raw.replace(needle,(old+'\n').encode()+needle,1);assert next.replace((old+'\n').encode(),b'',1)==raw
assert git('rev-parse','HEAD').decode().strip()==head and git('ls-files','--stage','--',str(path)).decode().strip().split()[1]==blob and path.read_bytes()==raw
path.write_bytes(next)
receipt.write_text(json.dumps({'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'insertion-only-authentic-published-ledger-history-restoration','path':str(path),'original_head':head,'original_index_blob':blob,'restored_original_record':old,'retained_current_record':current,'before_raw_sha256':sha(raw),'after_raw_sha256':sha(next),'inverse_insertion_matches_all_previous_working_bytes':True,'foreign_working_bytes_preserved':True,'authority':'CLAUDE7/8/10 supervised owned prerequisite repair history and exact addition-only closeout; no source edit/publication/new review/wholeledger ownership.','future_fragment_authority_sealed':False},indent=2)+'\n')
print('Restored one authentic historical table record by literal insertion; all previous working bytes retained')
