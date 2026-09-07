# Final adjudication: ex-a-generic-sl2-block-is-semisimple

Run frontier-33; group f; queue position 1 of 1; disposition **repaired**; source status **verified**.

## Independent review and decision

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the frozen FA queue; the current item and all eight direct dependency statements and proofs (the definition has no proof); the additional finite-length theorem and proof; both category-o-finiteness-duality-and-blocks pages; batch-14 manifest, relevant coverage and authoring notes; the item's proof contract including risk_review and boundaries; reader-14 and refute-14; Alpha's step8 report and exact adjudication; and both stored Terra rejections in frontier-33-judge.jsonl. The active state directory is .autopilot/frontier-33; historical resume claims were not used.

The original rejection (context 5ae868f759c51b6de0e2a287a6d67965ebdde7a17ee644247b12a23619531ed4) correctly required identification of all simple labels in the generalized central-character summand. Sol's repair supplies that identification using F5–F8. Its pre-FA guard hash was 7515a2e9bfc9af3d2563395fec3d7ebedf226e599e44f1e895cf2ed76c1d54f7.

The rejudge (context b3971069ff5f2db515c8bcab6c2e0f244c0399adf606bad1b41302f15c84cbda, at 2026-09-07T08:47:50.650Z) correctly objects that F1 does not state finite length. The stored reason ends at “licensed ba”; no missing continuation is assumed. Defining a block by its simple factors does not supply a finite composition series. This is a load-bearing citation gap in the induction, even though the requisite theorem is already on the owning A page.

Added thm-every-category-o-object-has-finite-length as direct dependency and F9. Step 2.1 now attributes existence of the finite series to F9 and identification of its factors to F1. Updated only this item's manifest entry and its batch and aggregate proof-contract entries, with exact F9 quotation and step inputs. The existing dependency itself was not edited. No new lemma, page inventory change, scope addition, prerequisite-repair licence, Sol adjudication, or judge verdict was needed.

## Mathematical basis and conventions

Use classical complex BGG O: finite generation, semisimple Cartan action and local positive-nilpotent finiteness. In rank one weights are evaluated on the standard coroot, with rho=1 and root lattice 2Z. The dot action sends lambda to -lambda-2. These labels are distinct for nonintegral lambda; coincidence would force -1. Their shifted root pairings are nonintegral, so their integral-reflection groups are trivial and both Vermas are simple. Generalized scalar nilpotence on a nonzero highest vector forces equality of central characters; the Harish-Chandra orbit criterion excludes every other simple label. F1 therefore gives precisely the two singleton blocks. The generalized character condition passes to subquotients, so this excludes other composition factors too.

F9 now supplies finite length explicitly. In a fixed singleton block put S=M(eta)=L(eta). F2 splits its self-extensions. In the displayed pushout E_i the map from its kernel S is injective: a relation (a,-a_i) with first component zero has a=0. Its quotient is S. Each chosen retraction E_i -> S, composed with E -> E_i, restricts to the ith coordinate on S^r. Collecting coordinates gives a module retraction E -> S^r. Pushouts are quotients of finite sums in the abelian category O, so F2 applies within its stated ambient category. Induction on the F9 composition series, starting at zero, gives finite sums of S. F3 identifies morphisms with matrices; the evaluation S tensor Hom(S,X) -> X is an isomorphism on these sums and is natural. The unit on finite-dimensional vector spaces is likewise an isomorphism. This proves the asserted equivalence and semisimplicity, including zero. The claim does not identify the two-block summand with one indecomposable block, and does not assert splitting in all Lie algebra modules.

The added finite-length dependency is proved by summing finite dot-orbit weight-space detector bounds over finitely many generalized-character summands. Every strict subquotient contributes to that integer bound, so refinement of a submodule chain terminates with simple factors. Its statement supplies exactly the missing finite-series premise without strengthening the block theorem.

## Authoritative verification

- https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf — Pavel Etingof, section 15.1, Exercise 15.6(i) and Corollary 15.7 (printed p.80), Example 15.8 and Lemma 15.9 (p.81). Read the complete relevant passage through the end of Lemma 15.9. It supports Verma self-extension vanishing in O, generalized-character decomposition, generic semisimplicity and finite length. Its orbit parameter is shifted: substitute lambda+rho for its parameter. For sl2 its genericity condition becomes -2(lambda+1) not in 2Z, precisely lambda not integral.
- https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf — Lin Chen, Lecture 6, section 2, Theorem 2.4, Remark 2.5 and the complete proof on printed pp.5–6; also Proposition 2.6 and Lemma 2.7. Read through the proof's end and the Hom conclusions. This independently verifies finite length via finitely many possible simple labels and finite weight multiplicities, and the Hom/endomorphism interfaces. Chen's use of “block” for central-character pieces in Proposition 2.1 is not adopted; the owning library explicitly distinguishes those pieces from linkage blocks.

## Validation and final state

All commands exited 0:

- Focused precheck: 1 item checked, no failures.
- Focused rendercheck: 1 file clean, including YAML and KaTeX.
- Focused citecheck: all recognized moves have stated suppliers.
- Strict proof-contract checks for this item in both batch-14 and aggregate contracts: each 1/1, zero errors and warnings.
- Batch-14 content-policy: 39 scoped items, zero errors and warnings.
- Repository depcheck --quiet: no errors; 475 repository warnings remain (not a claim that all repository warnings were resolved).

Final itemHashGuard: bda99252681821a3e21e83ec87d1956537b1cf4664347ebcb8a4514f7b72445e.

Mathematical obligations: none outstanding. Next action: record these exact final bytes with the prescribed terminal-resolution command, disposition repaired. This evidence is independent terminal review, not a pass stamp or a third judgment.
