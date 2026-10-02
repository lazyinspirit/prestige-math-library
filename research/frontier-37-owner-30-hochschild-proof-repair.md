# Step 3b proof repair: Hochschild hyperhomology and cyclic tensor invariance

## Scope and disposition

This audit covers exactly the eleven item IDs in
frontier-37-owner-30-batch-19.pages.json. It updates those item proofs,
dependencies, source locators and proof-contract evidence, the selected batch
manifest and coverage rows, this note, and additive follow-ups in the batch
notes and Step-3b pair report. It does not edit page carriers, published items,
shared source-decline decisions, engine state, or Git history.

All eleven claims are retained. No item ID, title, or mathematical interface
changed after the selected manifest was synchronized. The selected A-page scope
hash is:

    999bde0bee0b75fc0545a17ff406fe716b7596e81f05fbd844deec02e156989a

No mathematical route remains unresolved. Final shared contract, manifest,
content-policy, and dependency-level checks remain to be refreshed after the
other live batch writers drain. The initial Step-3b review receipts for all
eleven items are now stale by their item-input hashes and must not be read as
current proof approval. The prior strict proof-contract run also predates the
metadata and citation-use repairs below.

## Independent proof audit

1. **Hochschild hyperhomology definition.** The convention is total cochain
   degree \(n=i-j\), with \(D=d_F+(-1)^i b\). If \(F\) is concentrated in
   cochain degree zero, then \(\mathrm{HH}^{\mathrm{hyper},-j}(A,F)=HH_j(A,F)\).
   When \(d_F=0\), the total complex is a direct sum of its fixed-\(i\)
   Hochschild columns, giving
   \[
   \mathrm{HH}^{\mathrm{hyper},n}(A,F)
   \cong \bigoplus_{i-j=n}HH_j(A,F^i).
   \]
   This decomposition is not claimed for nonzero \(d_F\); in general the
   cochain index only gives the stated finite filtration.

2. **Resolution independence.** Reindexing the homological bar resolution by
   cochain degree \(-p\) gives source differential \(b+(-1)^p d_F\), while
   the target convention is \(d_F+(-1)^i b\). The componentwise map is
   \((-1)^{ip}\Phi\): the coefficient differential agrees because
   \((-1)^{p+(i+1)p}=(-1)^{ip}\), and the bar differential agrees because
   \((-1)^{i(p-1)}=(-1)^i(-1)^{ip}\). Thus the sign is checked on both
   components. The bounded-above flat cone argument handles coefficient
   quasi-isomorphisms; projective-resolution comparison is taken over the
   opposite enveloping ring under AC/DC. Weibel §9.1 is cited for the bar
   model, not for the separate resolution-comparison argument.

3. **Termwise Hochschild definition.** The induced maps
   \(HH_j(A,d_F^i)\) form a cochain complex. In the single nonzero degree \(r\),
   its only nonzero cohomology is
   \(H^r(HH_j(A,F^\bullet))=HH_j(A,F^r)\). This remains distinct from
   hyperhomology except through the bounded-complex spectral sequence.

4. **Chain-homotopy invariance of termwise homology.** Additivity of
   \(C_j(A,-)\) transfers the bimodule homotopy identity to Hochschild-chain
   homotopies and then to the cochain homotopy on \(HH_j(A,F^\bullet)\).
   The result asserts homotopy invariance only, not invariance under arbitrary
   quasi-isomorphisms.

5. **Termwise spectral sequence.** The decreasing cochain-index filtration is
   finite, exhaustive, and separated in each total degree, even though there
   is no global filtration bound. Its pages are
   \(E_1^{i,-j}=HH_j(A,F^i)\) and
   \(E_2^{i,-j}=H^i(HH_j(A,F^\bullet))\); its differential has bidegree
   \((r,1-r)\), and it abuts to the image filtration on
   \(\mathrm{HH}^{\mathrm{hyper},i-j}(A,F)\). No degeneration or splitting is
   asserted in general.

6. **Double-bar comparison.** For
   \(X=M\otimes_BN\), the degree-\(p\) outer bar terms identify with
   \(A\otimes_k A^{\otimes p}\otimes_kX\). Double-bar bidegree \((p,q)\)
   identifies with \(A\otimes_kV_{p,q}\otimes_kN\), where
   \(V_{p,q}=A^{\otimes p}\otimes_kM\otimes_kB^{\otimes q}\); the middle
   \(M\)-factor is retained. The right \(A^e\)-action is
   \((a\otimes v\otimes z)\cdot(c\otimes d^{\mathrm{op}})
   =da\otimes v\otimes zc\). A basis of \(V_{p,q}\), the right
   \(A\)-projectivity of \(N\), and
   \(A\otimes_kA\cong A^e\) as a right \(A^e\)-module show these terms are
   projective; the exchanged proof uses the right \(B\)-projectivity of \(M\).
   No left-projectivity is used.

   Exactness uses \(U_p=\operatorname{Bar}_p(A)\otimes_AM\), which is a direct
   sum of copies of the right \(B\)-projective module \(M\), hence is right
   \(B\)-flat. Tensoring the left \(B\)-bar augmentation with \(U_p\) gives
   the required column quasi-isomorphisms; first-quadrant assembly gives the
   double-bar augmentation. Total homological degree \(s\) has only
   \(p+q=s\), so every diagonal is finite; the whole double-bar complex is
   not claimed bounded.

   The raw balanced tensor is not rotated. After enveloping coinvariants,
   the two relations are checked: a \(B\)-balance relation becomes equality
   in \(B\)-coinvariants, and an \(A\)-coinvariant relation becomes the
   \(A\)-balance relation. The rotation has sign \((-1)^{pq}\); with total
   differential \(d_A+(-1)^p d_B\), both boundary components commute with
   the swapped differential. The rotation squares to the identity. Outer
   projective-resolution comparisons give the asserted Hochschild
   chain-homotopy equivalence. The proof's final comparison now points to
   rotation step 2.2.

7. **Derived cyclicity.** The stated one-sided finite-projectivity
   hypotheses make the ordinary signed tensor totals valid derived tensor
   representatives. For the double bars, each term retains the middle
   vector-space factor and uses the appropriate outer projective module;
   \(Q_A\to P_A\) is a quasi-isomorphism by the bounded-above flat tensor
   argument. Since \(M,N\) are bounded and the bar degrees \(p,q\) are
   nonnegative, a fixed total degree has finitely many summands:
   \(p+q=i+l-n\). This is the needed finite-diagonal fact; no boundedness of
   the full double-bar complex is claimed.

   The cone of \(Q_A\to P_A\) is bounded above, acyclic, and termwise
   projective; recursive splittings and the cited bounded-above projective
   contractibility result make it contractible. Internal-degree-zero
   splittings are obtained by taking degree-zero components of splittings of
   homogeneous epimorphisms. The triple-model maps to the bar model and to
   coinvariants are quasi-isomorphisms by bounded-above flatness. Their cones
   are bounded-above acyclic \(k\)-vector-space complexes, hence have split
   cycle epimorphisms and are contractible under AC. This supplies the
   chain-homotopy equivalences claimed in the Statement, after coinvariants,
   and preserves internal degree.

   On coinvariant middle models, write block degrees \(r=i-p\) and \(s=l-q\).
   The rotation is multiplied by \((-1)^{rs}\). It is well-defined only after
   quotienting, with the \(A\)- and \(B\)-balance checks above; the grouped
   first- and second-block differential signs are respectively
   \((-1)^{(r+1)s}=(-1)^s(-1)^{rs}\) and
   \((-1)^r(-1)^{r(s+1)}=(-1)^{rs}\). The reverse rotation is its inverse.
   The proof therefore makes no arbitrary-projective-target derived-functor
   assertion.

8. **Termwise cyclicity.** At fixed coefficient degrees \((i,l)\), the
   double-bar rotation induces the Hochschild homology map. Twisting it by
   \((-1)^{il}\) intertwines the \(M\)-differential and the \(N\)-differential
   separately; boundedness makes each total-degree diagonal finite. Taking
   cohomology gives the claimed iterated-homology isomorphism directly,
   without deriving it from spectral-sequence convergence.

9. **Two-term polynomial example.** For \(R=k[x]\), \(\deg x=2\), and
   \(F^0=R,F^1=R\{4\},d_F=0\), the four termwise groups have internal shifts
   \(0,2,4,6\) and total degrees \(0,-1,1,0\). The degree-zero result is
   \(R\oplus R\{6\}\); its splitting follows from the actual direct sum of
   the two zero-differential columns, not from distinct internal degrees.

10. **Matrix Morita example.** For row vectors \(M=k^{1\times n}\),
    column vectors \(N=k^{n\times1}\), and \(B=M_n(k)\),
    \(e_ie_j^{\mathsf T}=\delta_{ij}\), while
    \(e_i^{\mathsf T}e_j=E_{ij}\). First-row projection splits by
    \(\sigma(v)=e_1^{\mathsf T}v\), the matrix with first row \(v\), so \(M\)
    is a direct summand of the free right \(B\)-module \(B\).
    The explicit balance identity
    \(e_i\otimes e_j^{\mathsf T}
    =e_1E_{1i}\otimes e_j^{\mathsf T}
    =e_1\otimes E_{1i}e_j^{\mathsf T}
    =\delta_{ij}e_1\otimes e_1^{\mathsf T}\)
    proves \(M\otimes_BN\cong k\); the basis tensors in
    \(N\otimes_kM\) map to the matrix-unit basis of \(B\). The trace-zero
    subspace is exactly the commutator span, using off-diagonal units and
    diagonal differences, with no division by \(n\). The rotated tensor maps
    to \(E_{ji}\), whose trace matches \(\delta_{ij}\). Weibel §§9.5.1–9.5.4
    and Def. 9.5.7/Cor. 9.5.8 are now cited for the row/column Morita pair,
    projectivity, and trace context.

11. **Odd-degree sign example.** With \(k=\mathbb Q\), both complexes
    concentrated in cochain degree one, and \(p=q=0\), the derived rotation
    sign is \((-1)^{(1-0)(1-0)}=-1\); the termwise sign is also
    \((-1)^{1\cdot1}=-1\). It squares to \(+1\), and only \(HH_0(k,k)\)
    contributes in total degree two.

## Synchronized evidence and refresh status

The selected manifest dependency arrays and source references were synchronized
from item frontmatter. Coverage explanations were corrected so the cited
sources support only their actual claims: Weibel §9.1 supplies the bar model,
while local proofs plus the cited projective-comparison and flatness suppliers
carry the resolution comparison; the derived-cyclicity source supplies the
module-level model while the bounded-complex totalization and signs are proved
locally. Matrix coverage now includes Weibel's §9.5 Morita results. The
proof-contract entries were regenerated and their citation-use and boundary
step references repaired after the earlier strict-contract failure.

New direct dependencies are recorded on the exact suppliers used:

- Resolution independence, double-bar comparison, derived cyclicity,
  termwise cyclicity, and termwise homotopy each use
  thm-chain-homotopic-maps-induce-the-same-map-on-homology.
- Double-bar comparison adds cor-every-vector-space-has-a-basis.
- Derived cyclicity adds
  cor-every-vector-space-has-a-basis,
  thm-a-direct-summand-of-a-projective-is-projective,
  thm-choice-implies-dependent-implies-countable-choice,
  thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split,
  def-opposite-ring, and
  def-two-sided-bar-resolution-of-an-associative-algebra.

The source audit used full texts of Beliakova–Putyra–Wehrli,
Quantum Link Homology via Trace Functor I, §§3.8.2 and 3.8.4–3.8.6;
Weibel, An Introduction to Homological Algebra, Chapter 9 §§9.1 and 9.5 and
Chapter 5 Theorem 5.5.1; and Khovanov, Triply-graded link homology and
Hochschild homology of Soergel bimodules, pp. 5–7. Recorded full-text hashes
are in the batch-19 coverage record.

The old Step-3b review receipts for all eleven IDs have stale item-input hashes.
Before these repairs, rendercheck, precheck, content-policy, manifest-deps and
batch-local dependency-level checks had passed at an earlier content snapshot;
an earlier strict proof-contract run failed on citation-use and boundary-step
metadata that has since been repaired. After the final proof edits, batch-local rendercheck passes 11/11 items and
precheck passes all 9 proof-bearing items (the two definitions have no phase
proof section). The selected proof-contract entries were regenerated for all 9
proof-bearing items; the two definitions were skipped as expected. Do not treat
the earlier strict proof-contract result as a final refresh. The shared final checks are intentionally pending until the
active writers drain, under the run's owner-held gate protocol.

## Additive final definition correction and current audit

The internal-grading sentence in `def-hochschild-hyperhomology-of-a-bimodule-complex`
now assigns a homogeneous tensor $f\otimes a_1\otimes\cdots\otimes a_j$ the
degree $\deg_{\mathrm{int}}(f)+\sum_t\deg_{\mathrm{int}}(a_t)$. It notes that
this is $\deg_{\mathrm{int}}(f)$ when $A$ is concentrated in internal degree
zero. The Hochschild boundary convention is unchanged. The definition's
proof-contract boundary cases concern zero/one/degenerate support and endpoint
finiteness, so none depends on the corrected grading sentence.

After that correction, the targeted rendercheck passed; batch-19
content-policy reported 11 items, 0 errors and 0 warnings; manifest-deps
reported 11 items, 0 normalized and 0 errors; and coverage-checklist reported
46 results, 0 errors and the existing single low-yield warning (Alpha
confirmation of the declines). The owner-run strict proof-contract check was
11/11 with 0 errors and 0 warnings before the sentence correction; the
correction does not affect any contract boundary evidence, and no shared gate
was rerun.

I then re-read all eleven current item texts and their used supplier statements
and audited the sign, module-action, projectivity, exactness, convergence,
coinvariant-balance, grading, and example computations. Each original claim
remains valid. Ordinary reviewer receipts were recorded for all eleven IDs at
confidence 1, with current item-input hashes and their current direct
dependencies; the current closed scan is 11/11. The selected A-page scope hash
remains `999bde0bee0b75fc0545a17ff406fe716b7596e81f05fbd844deec02e156989a`.
This is item-level audit status, not a shared final-gate or engine decision.
