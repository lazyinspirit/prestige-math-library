# Group d source-disposition audit: batches 18 and 19

Snapshot: 2026-09-30 UTC. Report-only review of every source row currently
marked out of scope in batches 18 and 19: six rows in batch 18 and thirteen in
batch 19. No coverage, item, manifest, plan, ledger, decision, receipt, or gate
file was changed. Recommendations below are for the owner to integrate.

## Current claims and source evidence

Batch 18’s manifest promises nine A-page items: the bounded finite-projective
model of perfect complexes, its triangulated K0, the comparison with split K0
of finite projectives, G0 versus K0 of the bounded derived category, the
finite-left-global-dimension comparison, and the induced Laurent-linear maps
from specified graded tensor equivalences. Its three examples are separate
computations. The proofs do not state weak-Serre-subcategory variants, a
biexact tensor-product pairing, the pseudo-coherent/finite-Tor-amplitude
criterion, thick closure, the regular-ring criterion, or the specific A_m
braid action/Burau representation.

Batch 19’s manifest promises eight A-page items: untwisted Hochschild
hyperhomology of bounded bimodule complexes, resolution independence,
termwise homology and its spectral sequence, and cyclicity under the stated
finite right-projectivity hypotheses. The proof uses double bars and the
ordinary q=1 rotation, and explicitly stops short of arbitrary Morita
invariance, twisted coefficients, or quantum trace claims. The three B-page
examples include the regular k–Mat_n(k) row/column pair; they do not prove
matrix extension for arbitrary coefficient bimodules.

Stored retrieval records were reused; no source was refetched to refresh a
date. Batch 18 records complete section/page retrieval for Stacks 13.28 (HTML,
5,590 text characters, hash prefix f781a3af16f0b07a), Stacks 15.76 (HTML,
17,996 text characters, be67cfced27a0bac), and Khovanov–Seidel (72 PDF pages,
34e747083f6229d6). Those three coverage entries do not include a separate
read_verification field. Batch 19 has full-text-read records for Beliakova–
Putyra–Wehrli (85 PDF pages, 3781e14d2bde557c), Weibel Ch. 9 (69,
5bf5c0971806b0ba), and Khovanov (19, 548a0eece08bd967); their read records
identify the inspected sections and proofs. The exact row titles and locators
below remain in the two batch coverage files.

Plan inventory check: the current Grothendieck Groups and Graded Cartan
Pairings page has fourteen items, including the projective-Hom K0×G0 pairing,
but no weak-Serre or biexact-tensor pairing. The current Graded Quiver
Algebras and Derived Tensor Functors page has eighteen items, including the
A_m twist complexes and their K0, but no braid relations or Burau calculation.
The current Hochschild Homology and Diagonal Koszul Resolutions page has
fourteen items and is restricted to the bar foundation and polynomial
diagonal/Koszul computations; it contains none of the declined tensor-algebra,
truncated-polynomial, or general-Morita statements. The current Type-A
Soergel page has thirty-two items, including the diagrammatic category and its
equivalence with bimodules. The more specialized categorical braid actions,
Burau representations, Rouquier relations, triply graded link homology,
oriented-link/Markov, and matrix-factorization/KR pages are planned, but have
zero item inventory at this snapshot.

## Batch 18: six current declines

| Source row and locator | Audit recommendation |
|---|---|
| Stacks, Derived Categories §13.28, Lemma 13.28.5, weak Serre subcategory variant (tag 0FCM) | **Stand out of scope for this pair.** The current G0 comparison is for an entire essentially small abelian category and its own bounded derived category; it proves no weak-Serre-subcategory statement. The existing Grothendieck Groups page is adjacent, but none of its fourteen items supplies this variant. Add it only as a separately named future result; do not infer it from the whole-category comparison. |
| Stacks §13.28, Lemma 13.28.6, biexact tensor induces a bilinear K0 pairing (tag 0FCM) | **Stand out of scope for this pair.** The graded-tensor theorem here induces one-variable maps from equivalences; it does not construct a biexact pairing between two triangulated categories. The current Grothendieck page’s projective-Hom K0×G0 pairing is a different pairing. A future tensor-product pairing would need its own named item and hypotheses. |
| Stacks, More on Algebra §15.76, Lemma 15.76.2, pseudo-coherence plus finite Tor dimension characterizes perfectness (tag 0656) | **Stand out of scope for this pair.** The manifest defines perfectness using bounded finite-projective representatives and compares their K0. It does not prove the pseudo-coherent/finite-Tor-amplitude characterization. No current plan item names that criterion. |
| Stacks §15.76, Lemma 15.76.5, direct summands of perfect objects remain perfect (tag 0656) | **Stand out of scope for this pair.** The claimed category is triangulated; the current proof does not assert thick or idempotent-complete closure. Keep this declined result separate unless an explicit summand-closure proof and claim are added. |
| Stacks §15.76, Lemma 15.76.14, finite coherent cohomology over a commutative regular ring characterizes perfectness (tag 0656) | **Stand out of scope for this pair.** The authored comparison assumes a left Noetherian ring of finite left global dimension. The source row has a different commutative-regular/coherent-cohomology hypothesis and no consumer in the current statements. |
| Khovanov–Seidel, “Quivers, Floer Cohomology, and Braid Group Actions,” Proposition 2.8, Burau representation for the specific A_m braid functors (author pp. 17–18) | **Reconcile as a deferral, not global out of scope.** This pair’s K0 theorem supplies a general decategorification mechanism, while the current A_m page defines twist complexes and computes K0 but does not prove their braid relations or calculate the Burau matrices. The plan has exact future destinations: Categorical Braid Actions and Decategorification, then The Burau Representations; both currently have zero items. Keep the statement pending for those pages rather than treating it as supplied here. |

## Batch 19: thirteen current declines

| Source row and locator | Audit recommendation |
|---|---|
| Beliakova–Putyra–Wehrli, §3.8.4, twisted Hochschild differential (3.40), p. 38 | **Stand out of scope.** The current pair uses untwisted Hochschild coefficients. A twisted coefficient action needs its own convention and is not supplied by the q=1 bar rotation. The source’s untwisted double-bar method is separately reflected in the current proof and included coverage rows. |
| Beliakova–Putyra–Wehrli, §3.8.5, quantum Hochschild differential and nonsymmetric rotation (3.41)–(3.43), p. 39 | **Stand out of scope.** The q-deformed coinvariant relation and non-involutive quantum rotation differ from the explicit involutive ordinary rotation proved here. The plan has quantum braid and link pages, but no current item specifically claims these formulas; do not count a title-level resemblance as a destination proof. |
| Beliakova–Putyra–Wehrli, Corollary 3.22, quantum Lefschetz trace formula, p. 39 | **Stand out of scope.** This is a q-weighted trace for endomorphisms, not the untwisted hyperhomology or cyclic-tensor theorem in the manifest. There is no exact planned trace-functor item; retain out of scope unless a future quantum-link scope names it. |
| Weibel, Ch. 9, Example 9.1.2, group-ring comparison, pp. 301–302 | **Stand out of scope.** The row is a group-homology application and is not a prerequisite or conclusion of the pair. The planned Group Cohomology as a Derived Functor page is not, by its current inventory, this Hochschild/group-homology comparison. |
| Weibel, Ch. 9, Proposition 9.1.6, Hochschild groups of a tensor algebra, pp. 303–304 | **Stand out of scope for batch 19.** Its universal-derivation resolution is not used by the bounded bimodule double-bar proof. The existing general Hochschild page has no tensor-algebra computation, so this could be proposed there as a separately named calculation but must not be called already covered. |
| Weibel, Ch. 9, Exercise 9.1.4, truncated-polynomial periodic resolution, p. 304 | **Stand out of scope.** The periodic resolution for a singular quotient is not the regular polynomial diagonal-Koszul calculation or the bounded cyclicity theorem. No exact planned item covers it. |
| Weibel, Ch. 9, Exercise 9.5.1, general properties of Morita equivalence, p. 327 | **Stand out of scope.** The current A-page assumes a displayed pair of bounded bimodule complexes with finite right projectivity; it does not develop Morita equivalence as a categorical equivalence relation. No exact Morita-theory destination is inventoried. |
| Weibel, Ch. 9, Corollary 9.5.3, matrix extension of arbitrary coefficient bimodules, p. 327 | **Stand out of scope.** The B example proves the regular k–Mat_n(k) row/column case and its trace; the general coefficient-bimodule extension is strictly broader. No current item claims it. |
| Weibel, Ch. 9, Exercise 9.5.2, endomorphism rings of Morita bimodules, p. 327 | **Stand out of scope.** No current claim characterizes Morita equivalence by endomorphism rings, and this is unused in the double-bar comparison. |
| Weibel, Ch. 9, Theorem 9.5.6, bisimplicial proof of Morita invariance, p. 328 | **Stand at the theorem-claim level; retain the source-method note.** The source theorem covers arbitrary coefficient bimodules under Morita equivalence. The authored cyclic-pair theorem requires finite right projectivity of both displayed factors and does not establish that general result. Its double-bar/bisimplicial method does inform the local proof, and Weibel is cited there, so the reason must not say the source is unused. The current general Hochschild page has no matching Morita theorem item. |
| Khovanov, “Triply-graded link homology and Hochschild homology of Soergel bimodules,” Proposition 1, p. 5, Rouquier complexes depend on the braid element | **Reconcile as a deferral.** The present pair does not prove braid relations or invariance of Rouquier complexes. The plan has the exact Rouquier Complexes and Categorical Braid Relations page, currently with zero items; the existing A_m page defines twist complexes but stops before this relation. |
| Khovanov, same source, p. 6, graphical presentation of Soergel bimodule tensor products | **Reconcile with the populated Type-A Soergel destination.** Batch 19 does not need the graphical presentation, but the plan already has a thirty-two-item Type-A Soergel page with an explicit diagrammatic category, its relations, and an equivalence with the bimodule category. Compare the exact source statement with those items and mark it inline/already covered only if it matches the stated finite Type-A scope; otherwise defer it to a separately named result there. It should not remain globally out of scope without this comparison. |
| Khovanov, same source, Theorem 1, p. 7, closure link invariant and comparison with reduced KR homology | **Split and reconcile as two deferrals.** Route the triply graded Hochschild link invariant/closure statement to the planned Hochschild Homology and Triply-Graded Link Homology page (and its Markov/closure dependency where needed). Route the comparison with reduced Khovanov–Rozansky homology to the planned Matrix-Factorizations and Khovanov–Rozansky Link Homology page. Both pages currently have zero items; the current cyclicity theorem alone establishes neither claim. |

## Handoff

The decisive reconciliations are the A_m Burau result, the Rouquier-complex
braid relation, the Soergel graphical presentation against the existing
Type-A destination, and splitting Khovanov’s bundled link-invariant/KR
comparison row across its two planned homes. The other declines are sound as
out-of-scope for these two pairs, subject to the specific future-page caveats
above. The source and plan evidence is retained in
research/frontier-37-owner-30-batch-18.coverage.json,
research/frontier-37-owner-30-batch-19.coverage.json,
research/frontier-37-owner-30-batch-18.pages.json,
research/frontier-37-owner-30-batch-19.pages.json, and research/plan-spec.json.
