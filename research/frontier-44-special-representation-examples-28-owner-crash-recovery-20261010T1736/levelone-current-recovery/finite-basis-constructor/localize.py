from pathlib import Path
import json,hashlib
r=Path('research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/levelone-current-recovery/finite-basis-constructor');p=r/'proposals/thm-normally-ordered-q-wedges-form-a-basis.md';s=p.read_text()
s=s.replace('lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]\njustified_by:', 'lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,\n       lem-rank-one-tensor-strings-have-the-crystal-limit-rule]\njustified_by:')
before=r'''$A_0$-chart $W_0$ spanned by the normal wedges with $\mathbb Z[q]$ coefficients
is a crystal basis:'''
after=r'''local $A_0$-chart $L_0:=A_0W_0$, where $A_0=\mathbb Q[q]_{(q)}$ and $W_0$
is the separate $\mathbb Z[q]$-span of the normal wedges, is a crystal basis:'''
assert before in s;s=s.replace(before,after,1)
s=s.replace('its residues give a\ncrystal of', 'its residues give a\ncrystal of')
s=s.replace('the approved rank-one cube calculation then tests the precise positive-chart claim.', 'the approved rank-one cube calculation and local-ring tensor-string rule establish the complete localized crystal claim.')
pos=s.index('\n## Proof')
s=s[:pos]+r'''
[F5] Over the local ring $A_0=\mathbb Q[q]_{(q)}$, the tensor product of two divided-basis simple rank-one strings has a basis of divided highest-weight strings whose residues permute the tensor-basis residues; the normalized operators preserve its lattice and induce the crystal tensor rule and partial inverses ([[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]]).
'''+s[pos:]
a=s.index('3.2 The literal polynomial');b=s.index('\n## Remarks',a)
s=s[:a]+r'''3.2 Local crystal stability on every cube. Apply [F5] inductively to a cube with $r$ free pairs. For $r=0,1$ its divided-string basis is its ordinary basis. If the first $r-1$ factors have been written as a direct sum of simple divided strings with an $A_0$-basis whose residues permute the product basis, tensor each string with the final highest-weight-one factor. The finite calculation of [F5] produces a divided-string basis of each such tensor summand whose residues again permute its product residues. Its transition determinant is a unit of $A_0$, so the lattice remains exactly the $A_0$-span of the cube words, and the normalized operators act on these divided strings, preserve this lattice and permute its residues or send them to zero, with partial inverses. Induction proves these assertions for every finite cube. Step 3.1 identifies this lattice with the corresponding block of $L_0$; the block bases are subsets of the normal basis, and their direct sum covers every tuple. Consequently both normalized operators preserve $L_0$ and give the claimed crystal on its normal residues for every color. [F5, step 3.1, step 2.1, algebra]

3.3 The weight and integrability conditions. A normal wedge is a weight vector, since its raw tensor is one and the kernel is quantum-group stable by [F2]; thus the free local span decomposes by weights. It generates $W_N$ by step 2.1. For fixed color every tuple lies in the finite cube of step 3.1, a tensor product of finite rank-one modules; hence $E_i,F_i$ are locally nilpotent on all finite linear combinations. Together with the operator stability, residue basis and partial inverses of step 3.2, this proves that $L_0$ with the normal residues is a crystal basis of the integrable affine wedge module. [F2, step 2.1, step 3.1, step 3.2, given, algebra]

4.1 Conclusion. The normal wedges give the field and Laurent bases and the finite dominance termination profile; the exact rank-one cube action establishes the crystal basis on the separate local chart $L_0=A_0W_0$. The image of the positive tensor lattice is not identified with $W_0$ or $L_0$, and no triangularity of negative straightening powers at zero has been used. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, step 3.3] ∎
'''+s[b:]
s=s[:s.index('## Remarks')]+r'''## Remarks

This guarded successor is conditional on the parent integrating the corrected kernel and straightening suppliers; it confers no current acceptance or native review. The original approved local $A_0$ chart is restored while the positive integral chart $W_0$ remains separate. The necessary ring correction has a concrete two-bit witness: for $e=3,i=1,N=2$, set $h=u_4\wedge u_1$, $x=u_5\wedge u_1$, $y=u_4\wedge u_2$, $z=u_5\wedge u_2$. Then $F_1h=x+qy$, $F_1^{(2)}h=z$, and $s=x-q^{-1}y$ has $E_1s=F_1s=0$. The unique string decomposition is $x=(1+q^2)^{-1}F_1h+q^2(1+q^2)^{-1}s$, giving $\tilde f_1x=(1+q^2)^{-1}z$. This lies in $L_0$ but not in the polynomial span $W_0$; field independence proves the latter assertion. Thus the literal previous polynomial-lattice claim could not be retained.
'''
p.write_text(s)
g=json.loads((r/'guard-and-findings.json').read_text());g['full_statement_accepted']=False;g['construction_complete_conditional_on_supplier_integration']=True;g['statement_delta_authority']='Parent message: Root independently approved restore exact original A0 Statement within existing normal-basis FIRST1; original contract explicitly A0 direct sum; retain positive Z[q] chart separately';g['necessary_statement_delta']={'before':before,'after':after,'reason':g['new_exact_gap'],'approved_original_claim':'A0 normal-basis chart is crystal lattice; Z[q] chart retained separately'}
for row in g['items']:
 if row['id'].startswith('thm-'):
  row['claim_byte_identical']=False;row['claim_preserved_except_authorized_local_ring_correction']=True
  claim=s[s.index('## Statement'):s.index('## Facts & Assumptions')];row['after_claim_sha256']=hashlib.sha256(claim.encode()).hexdigest();row['proposal_raw_sha256']=hashlib.sha256(p.read_bytes()).hexdigest()
(r/'guard-and-findings.json').write_text(json.dumps(g,indent=2)+'\n')
