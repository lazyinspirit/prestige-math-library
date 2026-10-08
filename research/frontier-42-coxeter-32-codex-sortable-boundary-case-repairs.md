# Batch 29 focused boundary evidence repair

Updated 2026-10-07T21:01:51.576014+00:00. Same source-original reviewer; parent-authorized contract-only window.

The current five batch contracts and their current Statements and proof steps were checked for the exact assigned eight axes. This is a focused case-evidence review, not a new unchanged mathematical audit or a native gate attempt. No new mathematical gap was found in these dispositions.

Only the boundary arrays of the five subjects below changed: 32 generic evidence rows were replaced and the positive-span empty-family row was corrected from not_applicable to checked. The other seven positive-span dispositions remain unchanged, including its legitimate reverse-direction not_applicable row: the lemma asserts positivity and the consequent length increase, rather than a converse implication. There are now 40 selected boundary rows: 39 checked and one not_applicable.

The positive-span hypothesis s in S excludes empty ambient S; it does not exclude identity with an empty reduced word. The latter has empty prefix sum zero and transported simple root e_s. Rank-zero/identity instances of the other four lemmas remain checked. Unit root normalization excludes the zero root, while zero skew values, coefficients, lengths, wall pairings, and empty basis or inversion families are treated where applicable. All source Statements, Definitions, formulas, sortable hypotheses, citation quotations, derivation evidence, and nonselected contract rows were preserved. A structural comparison against the pre-edit JSON verifies that only these five boundary arrays differ.

## Actual current case evidence

### lem-cg-uniform-omega-positive-and-aligned-sortability

- **empty — checked:** Proof step 1.8 covers empty ambient generators and the empty reduced word: the sole rank-zero element is identity, its reflection and block sequences are empty, all pair inequalities are vacuous, and its empty inversion intersection is allowed by alignment.
- **zero — checked:** Proof steps 1.5-1.7 retain zero skew values: the endpoint coordinate sum vanishes precisely on support commuting with the endpoint, and swapping an adjacent commuting pair with zero skew preserves the inequalities. Step 6.1 treats zero subsystem skew by excluding a two-reflection segment, leaving empty or singleton intersections. Roots themselves have unit norm, so zero roots are excluded by F19.
- **one — checked:** In rank one the only reduced words are the empty word and the single generator. Proof step 1.8 supplies identity; steps 1.3 and 4.1 reduce the generator to the empty tail. Its sole diagonal skew value is zero and the reflection commutes with itself; there is no noncommutative rank-two test.
- **degenerate — checked:** The finite-type hypothesis gives positive definite B through F18, excluding singular ambient B. A vanishing alternating form is nevertheless permitted: proof step 6.1 handles zero endpoint skew separately, and steps 1.7 and 3.1 move only pairs whose skew value is zero, without inverting that form.
- **endpoints — checked:** Proof steps 1.5 and 1.6 give opposite initial/final endpoint signs with equality on commuting support. For parabolic endpoints, steps 2.7 and 7.2 allow J empty, giving identity and an empty subsequence, and J equal to S, giving the original scan and inversion sequence unchanged.
- **nonempty-choice — checked:** Proof step 1.8 handles rank zero before choosing an initial letter. At positive rank the fixed finite Coxeter word has a first letter; step 1.9 uses one reduced word of the fixed prefix and one of its fixed coset remainder. Step 8.1 records these individual finite or fixed witnesses and no family of choices.
- **iff-forward — checked:** For characterization condition (i) implies (ii), proof step 2.2 restricts when the initial letter is absent and steps 2.3, 3.1 and 4.1 construct zero-skew swaps and the shorter tail when present. For sortable implies aligned, step 6.1 rules out forbidden angular segments, including the zero-skew case.
- **iff-reverse — checked:** For characterization condition (ii) implies (i), proof step 3.2 moves the first initial letter across commuting letters with zero skew and transports the shorter tail. For aligned implies sortable, step 2.4 handles descent and steps 2.5-2.6, 3.3, 4.2 and 7.1 force parabolic membership in the non-descent branch.

### lem-cg-sortable-recursion-output-and-initial-choice-independence

- **empty — checked:** Proof step 1.2 returns identity on the empty sorting word and verifies all six clauses there. Empty ambient generators force identity, so the identity branch is taken before an initial letter is needed; the descent and two-distinct-initial-letter assertions then have no instances.
- **zero — checked:** Length zero is the explicit identity base in proof step 1.2: the projection is identity, equality below its input holds, and applying the projection again changes nothing. For positive length, step 1.1 decreases rank or length strictly; it never divides by length or requires a nonzero inversion count.
- **one — checked:** For a singleton generating set the two inputs are identity and its generator. Proof step 1.2 fixes identity; the descent branch in step 2.3 returns the generator times the identity tail. There is only one initial letter, the no-choice case stated in step 4.1.
- **degenerate — checked:** Multiple permissible initial letters cause no ambiguity: proof step 2.2 identifies the nested parabolic prefixes when neither is a descent, step 2.6 identifies the shorter recursive calls when both are descents, and step 3.1 uses the prefix identity from step 2.1 when exactly one is a descent. No membership of an arbitrary input in the smaller parabolic is assumed.
- **endpoints — checked:** Proof step 2.5 deletes generators to cover parabolic restriction at both endpoints: the empty parabolic has only identity, fixed in step 1.2, while restriction to the whole generating set changes neither input nor Coxeter element. At a non-descent endpoint step 2.4 uses the parabolic prefix, even when the input itself lies outside that parabolic.
- **nonempty-choice — checked:** Proof steps 1.1-1.3 stop at identity; otherwise a positive-rank finite Coxeter word supplies an initial letter and each recursive call has smaller lexicographic measure. Step 4.1 compares a single possible initial letter or each pair of distinct commuting initial letters, so no simultaneous choice over a family is required.
- **iff-forward — checked:** For equality implies sortable in Statement (2), proof steps 2.3 and 2.4 transfer equality to the shorter tail or require equality with the parabolic prefix, then use the local sorting recursion in step 1.5. For input descent implies output descent in Statement (4), step 3.3 multiplies a projected non-descent tail by the initial generator.
- **iff-reverse — checked:** For sortable implies equality in Statement (2), proof steps 2.3 and 2.4 apply the induction equality case to the sortable tail or prefix, using step 1.5. For output descent implies input descent in Statement (4), step 3.3 excludes output descent whenever the input is a non-descent because the output lies below its parabolic prefix.

### lem-cg-sortable-skips-basis-and-cover-decomposition

- **empty — checked:** Proof step 1.1 computes the empty sorting word: each generator is first omitted with root its simple root, there are no negative skips and no covers. At rank zero that family is empty and is a basis of the zero-dimensional space by step 2.1; all ordered-pair Euler assertions are vacuous.
- **zero — checked:** Proof step 2.2 proves the actual zero Euler pairings by transport or by adjoining the first simple root to subsystem roots, and checks the triangular simple-root base. Zero roots are not skips: step 1.2 identifies every skip as a signed unit positive root. A zero number of forced skips is allowed at identity in step 1.1.
- **one — checked:** With one generator, proof step 1.1 gives the single positive simple skip at identity; its descent transport gives the negative simple skip at the generator. Step 1.2 distinguishes unforced from forced, and steps 2.1 and 3.1 identify the singleton basis and the sole cover. There are no pairs for Euler orthogonality.
- **degenerate — checked:** Proof steps 2.6 and 3.1 separate the exceptional simple-root sign change according as the initial generator is or is not a cover; all other root signs survive transport. The commuting confinement case has t equal to sts in step 6.1, while the noncommuting case uses distinct canonical endpoints in step 5.1. Thus coincident commuting reflections do not enter the noncommuting angular argument.
- **endpoints — checked:** Proof step 1.3 checks initial and final root inequalities, including their commuting equality case. Step 2.5 gives the terminal simple cover, step 6.2 proves the cover decomposition, and steps 7.1 and 8.1 distinguish the final-letter unforced restriction from the initial-letter conjugated unforced restriction.
- **nonempty-choice — checked:** The fixed sorting scan supplies the first omitted occurrence of each generator in proof step 1.1; each exists because only finitely many positions are selected. Step 2.3 uses that particular prefix for insertion, and step 9.1 records individual finite witnesses rather than a choice of witnesses over arbitrary families.
- **iff-forward — checked:** Forced implies nonreduced prefix and negative root in Statement (1) follows from the root-length test in proof step 1.2. The resulting negative root is an inversion; steps 2.6 and 3.1 show it comes from a cover reflection, preserving the explicit root-to-reflection map in Statement (3).
- **iff-reverse — checked:** Negative root implies nonreduced prefix and hence forced skip by the same root-length equivalence in proof step 1.2. Conversely every cover has its negative skip root: step 2.6 adds the exceptional negative simple root when the initial generator is a cover, and step 3.1 transports all remaining covers or restricts them in the non-descent branch.

### lem-cg-sortable-cone-criterion-and-projection-monotonicity

- **empty — checked:** Proof step 1.2 fixes identity and proves its cone is the fundamental closed chamber, containing a whole chamber only for identity. With empty generators the ambient vector space is zero-dimensional, there is a single chamber and a single element, so this base applies and the empty collection of inequalities defines the whole zero-dimensional space.
- **zero — checked:** Proof step 1.1 computes strict interior signs and then extends them to closed chambers, admitting zero pairing on a boundary wall. In the mixed cover step 4.1 the changed inversion is exactly the simple root and the separating wall is its hyperplane. Zero normals cannot occur because F1 gives a skip-root basis and each root has unit norm.
- **one — checked:** In rank one recursion fixes both identity and the generator, by F3 and the descent branch. Proof step 1.2 gives the identity cone as the positive fundamental ray; root transport in step 2.2 gives the generator cone as the opposite ray. Their shared origin is allowed by the closed halfspace convention of step 1.1.
- **degenerate — checked:** Proof step 4.1 treats the mixed cover without confusing its shared wall with the image of a simple-root wall under the lower chamber label: the sole new inversion is the simple root. Boundary points may satisfy several inequalities with equality; step 1.1 derives whole-chamber containment from interior signs, so such intersections introduce no ambiguous chamber criterion.
- **endpoints — checked:** For comparable pairs proof steps 2.1, 2.2 and 3.1 cover neither descent, both descents and the mixed permitted branch; the opposite mixed branch is excluded by comparability. Proof step 6.1 handles that fourth branch for arbitrary pairs. Step 6.2 permits empty parabolic restriction, yielding identity on both sides, and full restriction, yielding the same projection on both sides.
- **nonempty-choice — checked:** Proof step 1.2 first discharges identity and rank zero; only positive rank needs the first letter of the finite Coxeter word. Step 2.3 uses the lattice join of two specified generators, and step 7.1 records only individual finite words, roots and chambers, without an arbitrary-family Choice principle.
- **iff-forward — checked:** Projection equality implies whole-chamber containment: proof steps 2.1 and 2.2 reduce comparable pairs by parabolic signs or root transport, while step 3.1 makes both assertions false in the permitted mixed case. Proof step 6.1 extends the same reductions to arbitrary inputs after monotonicity, with the fourth branch excluded by descent detection.
- **iff-reverse — checked:** Whole-chamber containment implies projection equality: proof step 1.1 translates containment into inversion membership for every signed skip root; steps 2.1-2.2 identify that condition with the smaller projection, and step 3.1 excludes a mismatched descent. Proof step 6.1 excludes the remaining arbitrary-pair mismatch using monotonicity and the shorter full criterion, without assuming comparability.

### lem-cg-positive-span-of-transported-simple-roots

- **empty — checked:** The requirement s in S excludes an empty ambient generating set, but does not exclude an empty prefix-root family. Proof step 1.2 checks w equal to identity with its empty reduced expression: the sum over prefix roots is zero and the transported simple root is e_s, whose s-coordinate is one. Proof step 7.1 retains that coefficient and the stated support containment.
- **zero — checked:** Proof 1.2 handles the empty sum for w=1, and Proof 2.2 allows c_1=0, for example when m(t,r1)=2; the conclusion requires only c_i>=0.
- **one — checked:** When S={s}, s notin S(w) forces w=1 by the support theorem, so the expansion is e_s with no prefix roots, as in Proof 1.2.
- **degenerate — checked:** Proofs 2.2, 3.1, 4.1 and 7.1 use the displayed B entries, root signs and parabolic root subsystem identity; no inverse of B or nondegeneracy assumption occurs.
- **endpoints — checked:** Proof 2.2 covers both off-diagonal endpoints: m(t,r1)=2 gives B(e_t,e_{r1})=0 and c_1=0, while m(t,r1)=infinity gives B(e_t,e_{r1})=-1 and c_1=2.
- **nonempty-choice — checked:** Proof 1.1 fixes an arbitrary reduced expression and the induction works for every such expression; the induction chooses no element from an arbitrary family and uses no Choice.
- **iff-forward — checked:** The only direction used is the positive-root to length-increase implication in the Statement (1), proved from the criterion in Proof 8.1.
- **iff-reverse — not_applicable:** The item does not assert or use the converse from length increase to positive root; Statement (1) records only the forward implication.

## Local verification and guard record

The focused temporary contract contains exactly these five subjects. `node tools/boundary-audit.mjs /tmp/sortable29-boundary-focused.json --items-dir items --json --fail-on-contradicted --fail-on-template` exited zero: 40 rows, zero template clusters, zero contradicted candidates, no invented template-review overrides. The strict selected contract command exited zero: five checked subjects, no errors or warnings. These local diagnostics do not certify the run or refresh the native merged carrier.

```json
{
  "boundary_audit": {
    "contracts_scanned": 1,
    "boundary_rows": 40,
    "not_applicable_rows": 1,
    "template_clusters": 0,
    "rows_in_template_clusters": 0,
    "contradicted_candidates": 0,
    "upheld_by_review": 0,
    "template_clusters_upheld_by_review": 0,
    "items_not_yet_authored": 0
  },
  "strict": {
    "ok": true,
    "errors": [],
    "warnings": [],
    "scope": [
      "lem-cg-positive-span-of-transported-simple-roots",
      "lem-cg-uniform-omega-positive-and-aligned-sortability",
      "lem-cg-sortable-recursion-output-and-initial-choice-independence",
      "lem-cg-sortable-skips-basis-and-cover-decomposition",
      "lem-cg-sortable-cone-criterion-and-projection-monotonicity"
    ],
    "checked": [
      "lem-cg-positive-span-of-transported-simple-roots",
      "lem-cg-uniform-omega-positive-and-aligned-sortability",
      "lem-cg-sortable-recursion-output-and-initial-choice-independence",
      "lem-cg-sortable-skips-basis-and-cover-decomposition",
      "lem-cg-sortable-cone-criterion-and-projection-monotonicity"
    ]
  },
  "contract_raw_sha256": "db12ea02b3dc2784d8acb660fb21fce2bc09a0616870c793ba4d3f1b5723584f",
  "current_source_raw_sha256": {
    "lem-cg-uniform-omega-positive-and-aligned-sortability": "d80c9a6ccb61d45fb87ce8b3302b2ac5eecb6552163896bc9a41e06f21dc2533",
    "lem-cg-sortable-recursion-output-and-initial-choice-independence": "46c110043706e93a9d61e70f2ae2c0ab8b0458f3284ed3f1d434630a793afcd5",
    "lem-cg-sortable-skips-basis-and-cover-decomposition": "43274c4c7d390ecfeecbdeceac72aba9c0a92ee87aa4d00aca5904797bf316e9",
    "lem-cg-sortable-cone-criterion-and-projection-monotonicity": "b133f9b968df186e56fc6a969a0ce5fc53cf6975f99ebb8457aa4af3ce040585",
    "lem-cg-positive-span-of-transported-simple-roots": "7bae6adbad76f5ab31b9d0a4b4e99ea68d7d0fc6e040ef5065477c5fb7344091"
  }
}
```

No source item was edited, so proof-layout and rendering are not applicable to this contract-only repair. No merged contracts, manifest, scope, owner decision, ledger, certificate, controls, or shared plan was written. All writes in this window have drained. Local READY is limited to these five current batch boundary arrays; the parent retains the full 304-subject stable pass and native gate retry.
