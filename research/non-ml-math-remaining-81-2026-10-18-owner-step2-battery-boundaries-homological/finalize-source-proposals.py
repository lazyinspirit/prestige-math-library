import pathlib,json
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path('research/'+run+'-owner-step2-battery-boundaries-homological')
p=out/'proof-clarification-proposal.json';d=json.load(open(p));s=pathlib.Path(d['source']).read_text();a=d['exact_original_current_paragraph'];assert a in s
tag=' [F6, step 7.1, step 9.1, construct] ∎';assert a.endswith(tag)
addition=r' The any-field assertion about formal products and strict coordinate changes also has a direct argument independent of the characteristic-zero exponential and logarithm: expanding the consecutive-insertion square of the binary suspended product $b_m$ cancels the disjoint insertions in pairs, leaving exactly the signed associator. Thus $b_m^2=0$ is equivalent to associativity over every field, including characteristic two, without dividing by $2$. The degree argument in step 3.1 and deconcatenation in step 4.2 identify strict degree-zero coalgebra changes with $T^c(g)$, and step 8.1 computes their transport action without integer denominators. These product and strict-coordinate-change assertions therefore extend to any field. Their identification with differential graded Lie Maurer–Cartan and exponential gauge classes retains the characteristic-zero hypothesis of [F1], under which the required halves, factorials and logarithmic denominators are defined.'
b=a[:-len(tag)]+addition+' [F1, F6, step 2.1, step 3.1, step 4.2, step 7.1, step 8.1, step 9.1, construct, algebra] ∎'
d['proposed_full_paragraph']=b
stem=d['id'];before=out/(stem+'.before.md');after=out/(stem+'.proposed.md');before.write_text(s);after.write_text(s.replace(a,b,1));d.update(before_file=str(before),proposed_file=str(after),guard='Install only if current source raw bytes equal the before_file. This is not a final gate/hash seal.')
json.dump(d,open(p,'w'),indent=2)
p=out/'tensor-empty-product-clarification-proposal.json';d=json.load(open(p));s=pathlib.Path(d['source']).read_text();a=d['exact_original_current_paragraph'];assert a in s;b=a.replace('$J_{0,m}$','$J_{0,0}$');d['proposed_full_paragraph']=b
stem=d['id'];before=out/(stem+'.before.md');after=out/(stem+'.proposed.md');before.write_text(s);after.write_text(s.replace(a,b,1));d.update(before_file=str(before),proposed_file=str(after),guard='Install only if current source raw bytes equal the before_file. Minimal notation correction leaves Statement/Definition and dependencies unchanged.')
json.dump(d,open(p,'w'),indent=2)
print('Two isolated full-source proposals written; canonical sources untouched.')
