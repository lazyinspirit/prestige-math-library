# Reader 28 — frontier-42-coxeter-32, batch 28

## Scope and opened inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the exact batch-28 page manifest, both assigned page carriers, all eleven assigned item carriers, and the batch-28 proof contracts. Author notes and cross-batch dependency records were consulted as historical evidence only; their open/verified labels and earlier author decisions did not determine this review. The initial combined manifest/notes output was truncated; no absence or completeness conclusion is based on those truncated parts. No rendered evidence bundle was identified in the exact batch artifacts searched.

Pages opened:

- `library/coxeter-groups/heaps-commutation-classes-and-fully-commutative-elements.md` (A).
- `library/coxeter-groups/heaps-commutation-classes-and-fully-commutative-elements-examples.md` (B).

Assigned items opened in full:

- `items/def-cg-linear-extension-of-a-finite-poset.md`.
- `items/def-cg-labeled-word-heap-and-fully-commutative-element.md`.
- `items/lem-cg-finite-poset-linear-extensions-and-connectivity.md`.
- `items/lem-cg-convex-chains-consecutive-in-a-linear-extension.md`.
- `items/thm-cg-heaps-classify-commutation-classes.md`.
- `items/thm-cg-fully-commutative-forbidden-chain-criterion.md`.
- `items/thm-cg-fully-commutative-weak-intervals-are-distributive.md`.
- `items/ex-cg-heap-of-one-three-two-in-a3.md`.
- `items/ex-cg-heap-of-one-two-one-in-a2-and-long-braid.md`.
- `items/ex-cg-distributive-weak-intervals-of-fully-commutative-elements.md`.
- `items/ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element.md`.

Outside suppliers opened in full (not edited):

- `items/def-partial-order.md`.
- `items/def-chain.md`.
- `items/def-maximal-element.md`.
- `items/def-lattice-distributive-lattice-and-order-ideal.md`.
- `items/def-graded-poset-and-rank.md`.
- `items/def-hh-coxeter-matrix-word-group-and-length.md`.
- `items/def-hh-geometric-coxeter-representation-and-roots.md`.
- `items/lem-hh-dihedral-root-recurrence-and-root-sign.md`.
- `items/thm-hh-coxeter-exchange-deletion-and-faithfulness.md`.
- `items/thm-hh-matsumoto-reduced-word-theorem.md`.
- `items/def-cg-left-right-weak-order-and-descents.md`.
- `items/lem-cg-weak-order-prefix-property-and-left-translation.md`.
- `items/lem-cg-weak-order-is-a-graded-partial-order.md`.
- `items/lem-order-ideals-form-a-distributive-lattice.md`.
- `items/cor-cardinality-of-the-power-set.md`.
- `items/thm-subset-of-a-finite-set.md`.

The assigned proof sequence followed the finite-poset lemmas, heap classification, forbidden-chain criterion, weak-interval theorem, and examples. Some additional transitive supplier proofs were expanded after their consumers had first been opened (notably the signed-action/dihedral supplier and the published finiteness suppliers). Thus a strictly supplier-first initial opening order throughout the transitive closure was not achieved. All arguments used from those opened suppliers were reconciled before completing the review. This is a review-order limitation, not an assertion of missing mathematical evidence.

## Mathematical checks and source evidence

The minimal-element recursion uses a fixed finite listing, so it needs no choice principle. Removing successive minima produces an extension, concatenation across an ideal cannot violate the order, and the maximal-element induction proves adjacent-swap connectivity. Contracting a nonempty convex chain produces an acyclic generating relation; expanding the contracted vertex gives the required consecutive block, including singleton and covering-pair cases.

For heap classification, consecutive commuting positions cannot be joined by a generating path with an intermediate vertex. Adjacent commuting interchanges transport the generating relation, same-label chains identify each occurrence uniquely, and a labeled isomorphism transports the identity extension back to an extension of the original heap. These arguments establish both directions and the empty-word case.

The braid-factor necessity uses invariance of the projected word on the two noncommuting labels; sufficiency uses Matsumoto connectivity. Under the heap alternating-chain condition, the first noncommuting braid move out of the commutation class is impossible. M-reducedness then supplies reducedness from the absence of equal-label covers. Both heap conditions are necessary, and infinite Coxeter entries impose no finite alternating-chain prohibition.

The opened Coxeter supplier proofs establish exact rank-two orders by the block computation, verify the signed-action relators, identify expression-independent prefix-reflection sign sets, and prove ambient reducedness of alternating words. Exchange and the explicit Matsumoto induction then provide the clauses actually consumed here. The proof of weak-order partiality, covers and cover chains uses the word-length identity and subadditivity; the inversion-set clauses of the weak-order supplier are not needed by this batch and their separate root-theoretic supplier closure was not independently audited.

For the interval theorem, completing any reduced word of x with a fixed reduced suffix gives a reduced word of w. Subtracting the common suffix multiplicities proves independence of I(x). Downward closure retains all generating paths in an ideal, and the heap of an ideal is its induced labeled poset. Products of ideal readings are independent of the reading; the two inverse identities, monotonicity, and the intersection/union formulas establish the asserted interval lattice. The proof constructs meets and joins inside the interval, as its statement specifies. Empty heaps, absent labels, empty/full ideals and endpoints are covered.

The examples were recomputed from their defining matrices. The A3 V has two linear extensions and five ideals; the commuting two-letter heap has four ideals. In A2 the word 121 is reduced, its two braid-related words occupy distinct singleton commutation classes, and its heap has four prefix ideals. The six-element right weak order has the six stated covers, the stated pentagon subposet, and the explicit distributive-identity failure. The examples establish their stated conclusions without a converse theorem or an identification with Bruhat order.

Authoritative sources actually opened and relevant complete arguments read:

- [Stembridge, *On the Fully Commutative Elements of Coxeter Groups*](https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf): §1.1, Proposition 1.1 and its full proof (PDF pp. 4–5); §1.2, Proposition 1.2 and its full proof/invariance remark (PDF pp. 5–6); Lemma 2.1 and its full proof, Theorem 2.2 and its full proof (PDF pp. 7–9); Proposition 2.3 and its full proof (PDF pp. 9–10). The last result requires both the forbidden alternating convex chains and the absence of equal-label covers. Theorem 2.2 distinguishes the distributive interval assertion (b) from the ideal-lattice identification (c).
- [Nadeau, *On the length of fully commutative elements*](https://arxiv.org/pdf/1511.08788): Definition 2.3 (PDF p. 5), §2.3 and Figure 1, and §2.4 conditions (h1)/(h2), Proposition 2.6 and its proof paragraph (PDF p. 6). Figure 1 uses the three-generator graph with edge labels 4 and 5 and words `ttusutst` and `stsuts`; it does not depict the assigned A3 word. The local proof, rather than the source figure, supplies the A3 calculation.
- [Krattenthaler, *The theory of heaps and the Cartier–Foata monoid*](https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf): the complete §3 explanation (PDF pp. 4–5), giving readings by linear extensions and equivalence under adjacent unrelated-letter interchanges.

Some PDF screenshot requests returned cache-miss errors. Textual source sections were available and supplied the evidence above. No claim is made to have read the remainder of these papers, Cartier–Foata's origin monograph, or the full Lusztig/Davis texts cited by outside suppliers. In particular this report does not certify every bibliographic locator in those outside suppliers or their entire foundational dependency closure.

## Repairs and evidence

1. `thm-cg-fully-commutative-weak-intervals-are-distributive`, Facts F8 and Proof 2.3: the published lattice definition defines ideals and lattice isomorphisms, but does not define a general order isomorphism. Kept its citation attached to the ideal vocabulary and stated the order-isomorphism convention locally. Step 2.3 used reduced prefixes of a labeled linear extension before explaining why that full reading was reduced. Added the equality L(P,s)=C(s)=R(w) from F5/F6 and the immediate shorter-prefix contradiction, with the corresponding tags. This was a nonfatal short proof omission; the theorem's statement was preserved.
2. `ex-cg-heap-of-one-three-two-in-a3`, Example (3) and Nadeau source locator: replaced the undefined group-element argument C(w) with C((s1,s3,s2)), consistent with the word-based definition. Corrected the locator's implication that Nadeau Figure 1 supplies this A3 heap, using the actual graph and words just identified. The two-word and five-ideal computations are unchanged.
3. `ex-cg-heap-of-one-two-one-in-a2-and-long-braid`, Facts F1/F2: distinguished the word q from an element x in the fully-commutative definition. Removed the unrestricted assertion that m(s,t)=2 is exactly equivalent to commutativity: it fails for s=t, since m(s,s)=1 although s commutes with itself. Recorded the implication used by the proof, with its elementary derivation from the relators. No distinct-pair converse or additional supplier is needed.
4. `ex-cg-distributive-weak-intervals-of-fully-commutative-elements`, Verification 1.1/1.2: replaced C(w) and C(u), where w,u are group elements, by commutation classes of the displayed words. All interval products, maps, meets and joins remain unchanged.
5. `research/frontier-42-coxeter-32-batch-28.proof-contracts.json`: synchronized the repaired derivations and tags, recorded the additional F1/F5/F6 uses in interval Proof 2.3, refreshed outdated quotations of the currently opened supplier sections, and aligned derivation input lists with the actual trailing tags. Corrected two boundary descriptions: when w=1 the heap is empty and only J(P) contains the empty ideal; the A2 example's empty prefix is an order ideal, not a previously asserted identity-product map. The additional stale Matsumoto quotations belonged to the forbidden-chain theorem and the nondistributive example. Their present carrier arguments already use the corrected supplier; neither item needed a proof or statement repair.

6. Corrected six additional Stembridge locator entries, using the PDF page labels returned by the source viewer: the finite-poset lemma now points to the full Proposition 1.2 proof on PDF pp. 5–6 and identifies contraction as the local argument; the convex-chain lemma and forbidden-chain theorem point to the complete Proposition 2.3 proof on PDF pp. 9–10; heap classification points to Proposition 1.2 and its invariance remark on PDF pp. 5–6 and attributes the decomposition paragraph to §1.1 before Proposition 1.1; the A2 heap example locates Figure 1(a) on PDF p. 9; the nondistributive example locates the Theorem 2.2 proof on PDF pp. 8–9 (and the Proposition 1.1 proof on pp. 4–5). These bibliography repairs add five item carriers to the original four changed items; the A2 heap example was already edited. No theorem or example conclusion changed.

All nine edited items are assigned drafts from this run. Their verification blocks had precheck records but no judge records to remove. No page prose, published item, another batch, plan specification, judgment or certification was edited. No statement was weakened or withdrawal proposed.

## Validation

For each of the nine changed items, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` followed by `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. All nine final reflow calls reported unchanged layout; all nine final prechecks passed, each with one checked proof and zero failures.

After the final item edits and formatters, ran once:

```text
node tools/proof-layout.mjs items/lem-cg-finite-poset-linear-extensions-and-connectivity.md items/lem-cg-convex-chains-consecutive-in-a-linear-extension.md items/thm-cg-heaps-classify-commutation-classes.md items/thm-cg-fully-commutative-forbidden-chain-criterion.md items/thm-cg-fully-commutative-weak-intervals-are-distributive.md items/ex-cg-heap-of-one-three-two-in-a3.md items/ex-cg-heap-of-one-two-one-in-a2-and-long-braid.md items/ex-cg-distributive-weak-intervals-of-fully-commutative-elements.md items/ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element.md
```

Result: `proof-layout: 9 items, 51 steps, 0 defects`, exit 0. A scoped `node tools/rendercheck.mjs` invocation on the same nine paths with `--quiet` passed: all math parsed under KaTeX and all frontmatter parsed under the renderer YAML parser. An earlier mistaken `rendercheck --help` invocation selected the entire corpus; it was not a frontier gate or a passing validation, and its unrelated errors are outside this review's dependency scope.

## Page verdicts, unresolved defects and blockers

- A page `heaps-commutation-classes-and-fully-commutative-elements`: mathematically supported after the interval proof/citation repairs; its prose accurately describes the now-checked local arguments. No page edit required.
- B page `heaps-commutation-classes-and-fully-commutative-elements-examples`: mathematically supported after the example fact, notation and source-locator repairs. Its pentagon claim is explicitly a subposet claim and its nondistributive identity is computed in the full interval. No B-page prose edit made. The final source-locator corrections also preserve all claims summarized by both pages.

No confirmed or suspected mathematical defect remains in an uneditable carrier reached by the reviewed claims. No mathematical blocker identified. Findings JSON therefore has an empty findings array. These are reader conclusions and local check results, not judge stamps, independent certification or engine gate approval.
