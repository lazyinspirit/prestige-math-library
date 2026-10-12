exec(open('research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011/boundary-metadata-a/prepare.py').read())
import re,copy
id=ids[13];ip=pathlib.Path('items/'+id+'.md');before=ip.read_text()
step=r'''1.2 The empty-word case. For $\beta=0$, the presentation in [F2] gives $R(0)=k$ and $R(\alpha_j)=k[x_1]e(j)$, with $\deg x_1=2d_j$; there is no crossing. Restriction $E_i$ of a weight-zero module is zero: its defining corner consists of words ending in $i$, and the sole empty word has no such last strand. This is the zero restriction on the weight-graded category, not a negative-height algebra convention. For a graded $k$-module $M$, both append inductions are therefore $F_jM=\bar F_jM=k[x_1]e(j)\otimes_kM$. Orthogonality of the one-letter idempotents gives $E_iF_jM=E_i\bar F_jM=0$ if $i\ne j$, and $E_iF_iM=E_i\bar F_iM\cong M\otimes_kk[t_i]$ if $i=j$, by $x_1^a\otimes m\mapsto m\otimes t_i^a$. This map is degree zero since $\deg t_i=2d_i$, and is natural in $M$. Thus both isomorphisms in (a) are zero-to-zero at weight zero; (b) has zero first summand and the displayed polynomial summand with coefficient $1$. In (c), $\bar F_iE_iM=0$ and $q^{-(\alpha_i\mid0)}=1$, so the sequence is $0\to0\to M\otimes_kk[t_i]\xrightarrow{\mathrm{id}}M\otimes_kk[t_i]\to0$, naturally and degreewise exact. The source's $R_1(n-1)$ notation in the subsequent bimodule computation is used only for $n\ge1$; the vacuum case is the explicit functorial sequence just computed, without an $R(-1)$. [F2, F3, algebra]'''
after=before.replace('\n2.1 Corners', '\n'+step+'\n\n2.1 Corners',1).replace('2.1 Corners and the same-end structure. Multiply','2.1 Corners and the same-end structure. For $n\\ge1$, multiply',1).replace('2.2 The opposite-end exact sequence. By','2.2 The opposite-end exact sequence. For $n\\ge1$, by',1).replace('5.1 Conclusion. Steps 3.1 and 4.1 prove','5.1 Conclusion. Step 1.2 proves the empty-word case, and steps 3.1 and 4.1 prove',1).replace('[step 3.1, step 4.1] ∎','[step 1.2, step 3.1, step 4.1] ∎',1)
(out/(id+'.md')).write_text(after)
p,c=contracts[id];new=copy.deepcopy(c)
for row in new['derivations']:
 match=re.search(r'^'+re.escape(row['step'])+r' (.+?) \[([^\n]+)\](?: ∎)?$',after,re.M)
 if not match: raise ValueError(row['step'])
 row['claim']=match[1];row['inputs']=[x.strip() for x in match[2].split(',')]
new['derivations'].insert(1,{'id':'step-1-2','step':'1.2','claim':step.split(' ',1)[1].rsplit(' [',1)[0],'inputs':['F2','F3','algebra']})
for cit in new['citations']:
 if cit['source'] in ['def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum','def-klr-grading-and-diagrammatic-composition','def-klr-induction-and-restriction-bimodules']:
  cit['uses']=sorted(set(cit['uses']+['1.2']),key=lambda x:tuple(map(int,x.split('.'))))
idx=next(i for i,x in enumerate(new['boundaries']) if x['case']=='empty')
new['boundaries'][idx]={'case':'empty','status':'checked','evidence':'Step 1.2 explicitly proves the empty-word beta=0 case from R(0)=k and the one-letter polynomial corner: unequal-color restrictions vanish; equal-color compositions are M tensor k[t_i] in the actual degree 2d_i with coefficient 1, and the exact sequence has identity quotient and shift 0. Steps 2.1 and 2.2 use negative-index source notation only at n>=1.'}
fields=[]
for key in ['derivations','citations','boundaries']:
 if new[key]!=c[key]:fields.append({'json_pointer':'/contracts/'+id+'/'+key,'expected_value':c[key],'replacement_value':new[key]})
consumers=[]
for file in pathlib.Path('items').glob('*.md'):
 if file!=ip and id in file.read_text():consumers.append(str(file))
packet={'version':1,'run':run,'round':'FIRST1 round1; counters preserved','id':id,'defect':'The proof of the empty-word boundary beta=0 relied on expressions R(n-1) and R_1(n-1) at n=0 without a vacuum calculation.','smallest_prerequisite':'Separate one-strand polynomial-corner computation at beta=0; no negative-height algebra convention.','item_path':str(ip),'item_raw_sha256':sha(ip.read_bytes()),'proposal_path':str(out/(id+'.md')),'proposal_raw_sha256':sha(after.encode()),'statement_and_frontmatter_unchanged':before.split('## Proof')[0]==after.split('## Proof')[0],'contract_path':p,'contract_raw_sha256':sha(pathlib.Path(p).read_bytes()),'contract_field_operations':fields,'actual_direct_consumers':consumers,'consumer_duty':'No Statement, Definition or supplier interface changes; no consumer mathematical edits proposed. Any later interface change remains this reviewer responsibility.','assessment_by':'/root/boundary_metadata_a','assessment_scope':'Independent check of this boundary calculation only; not whole-item audit or new mathematical acceptance','manifest_operations':[],'manifest_reason':'No Statement, dependencies, source or scope change; current manifests inspected separately for any proof hash bindings.'}
json.dump(packet,open(out/'empty-word-proof-proposal.json','w'),indent=2)
