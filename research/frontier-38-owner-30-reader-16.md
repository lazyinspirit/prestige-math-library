# Reader 16 — batch 16

Run: `frontier-38-owner-30`. Independent Step 5a review; no judgment or certification. Runtime state inspected: `5a-read`.

## Opened inventory

Pages: `library/braid-groups/lawrence-krammer-bigelow-and-linearity.md` (A), `library/braid-groups/lawrence-krammer-bigelow-and-linearity-examples.md` (B).

All 31 assigned items opened. The inventory below follows the manifest; the actual reading placed suppliers before their consumers:

- `items/def-two-point-configuration-space-of-a-punctured-disk.md`
- `items/def-lkb-two-variable-covering-homomorphism.md`
- `items/def-lawrence-krammer-bigelow-cover.md`
- `items/def-lkb-absolute-second-homology-module.md`
- `items/def-lkb-relative-pairing-modules.md`
- `items/def-forks-noodles-and-their-lkb-intersection-pairing.md`
- `items/lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement.md`
- `items/lem-lkb-small-end-neighbourhoods-stabilize-equivariantly.md`
- `items/lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model.md`
- `items/lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank.md`
- `items/lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion.md`
- `items/lem-the-fork-noodle-pairing-is-well-defined-and-equivariant.md`
- `items/def-lexicographic-order-on-fork-noodle-deck-monomials.md`
- `items/lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel.md`
- `items/lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions.md`
- `items/lem-the-fork-noodle-pairing-detects-essential-intersections.md`
- `items/lem-fork-detection-transports-to-arbitrary-boundary-crosscuts.md`
- `items/lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy.md`
- `items/lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power.md`
- `items/lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared.md`
- `items/def-lawrence-krammer-bigelow-representation.md`
- `items/lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly.md`
- `items/lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors.md`
- `items/lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials.md`
- `items/thm-the-integral-lkb-module-is-free-of-rank-n-choose-two.md`
- `items/thm-the-lawrence-krammer-bigelow-representation-is-faithful.md`
- `items/cor-every-classical-braid-group-is-linear.md`
- `items/ex-the-krammer-fraction-field-generator-matrices-for-b-three.md`
- `items/ex-a-fork-noodle-pairing-computation.md`
- `items/cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing.md`
- `items/cex-a-linear-representation-need-not-be-faithful.md`

## Review and repair log

Review complete. Item repairs and the remaining page-level handoff are recorded below.

- `def-lkb-two-variable-covering-homomorphism`: Corrected individual-generator exponent preservation to total exponent preservation (the adjacent Artin relation changes individual counts). Explained b′=2a+b by the squared mobile–puncture discriminant factors, rather than saying fixed punctures are adjoined in pairs.

- `def-lawrence-krammer-bigelow-cover`: Added the exact covering-classification supplier and verified its local contractibility hypotheses, including boundary configurations.

- `def-lexicographic-order-on-fork-noodle-deck-monomials`: Excluded k=k′, which would make the return pair collide at the basepoint. Corrected the misplaced 2002 source locator to the 2001 labelled-loop construction.

- `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly`: Replaced the noncomposable concatenation of returning labelled tracks with their closed integral one-cycle; stated boundary fixing and orientation preservation. Applied the lifting criterion to σ∘p, whose domain is the covering space. The definition of Φ already supplies the additive cycle winding.

- `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions`: Corrected the ambient space for puncture-ended arcs and made the common-boundary-endpoint disjointness convention consistent between statement and proof. Consumers use puncture-ended tines and boundary-ended crosscuts with no shared endpoints, so their conclusions retain literal disjointness.

- `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement`: Replaced an ill-typed per-intersection integer=polynomial equation by the correct finite deck convolution. The closing factor multiplies the complete Laurent sum (Bigelow 2001 p. 479). Corrected the 2002 locator.

- `lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel`: Added the essential l>0 hypothesis. Restored the nonembedded-projection/innermost-digon case omitted from Claim 3.4, corrected the winding difference to a_{i,k}−a_{i,i}, and removed the unrelated 2002 locator. Source: complete Claim 3.4 argument, Bigelow 2001 pp. 480–481.

- `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`: Corrected the displayed relative images and F2 to the end-relative group required as first argument of the primed pairing. This matches the surface supplier and Bigelow 2002 section 4.1; the basis and matrix comparison conclusions are unchanged.

- `lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared`: Corrected the named index pairs in the two applications of the half-twist formula; the displayed equations and scalar arithmetic were already correct.

- `cex-a-linear-representation-need-not-be-faithful`: Removed the purported refutation of a proposition that is actually true for braid groups (they are all linear), retaining the intended false claim that an exhibited representation is faithful. Added n≥2 before using σ1.

- A-page summary: identified the false kernel=deck-group claim; the correct formula is Deck(C-tilde/C)≅π1(C,c0)/ker Φ≅Z². The tentative prose repair was rolled back after discovering an out-of-scope metadata defect on the same page carrier. The split forbids findings on carriers changed by the reader. The page therefore remains byte-unchanged and both issues are handed to the Step 5b lead; only its unlicensed metadata defect is in findings JSON. The prose correction remains authorized mathematics, not a separate unlicensed finding.

- `ex-a-fork-noodle-pairing-computation`: Replaced the underdetermined two-crossing picture and parity-only exponent assertions by a fully specified rational polygonal four-crossing configuration. Exact ray-crossing arithmetic independently gives all 16 exponent pairs and signs; rows 2 and 3 cancel and the remaining polynomial is q^−5 t^−2(q−1)(1+qt). The revised example now actually exhibits the cancellations promised by the B-page prose. Exact arithmetic is recorded below in the report; the script was used as a check, not as a substitute for the displayed ray rule.

- `cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing`: Replaced unspecified minimal winding numbers with an exact two-crossing polygonal witness and rational ray-count rule. Corrected the actual deck exponents to (−5,−4,−4,−3) and (−2,−2,−1,−1); the polynomial is a Laurent-unit multiple of the previous claimed polynomial. Added a disjoint comparison configuration to establish that equal ordinary counts need not determine equal pairing values.

- Proof contracts: refreshed changed proof paragraphs and exact supplier quotations in affected consumers. Corrected stale boundary evidence claiming generation by closed fork classes, referring to wrong step numbers, or invoking minimal compatible winding numbers. Updated the two witnesses to their new tables, and the extremal packet to its positive-intersection hypothesis and full projection case. Existing author status labels are retained; this is evidence maintenance, not certification.

## Opened supplier interfaces

- `items/cor-polynomial-ring-over-a-domain-is-a-domain.md`
- `items/def-axiom-of-choice.md`
- `items/def-based-loops-and-fundamental-group.md`
- `items/def-boundary-fixed-mapping-class-group-of-a-punctured-disk.md`
- `items/def-braid-group-by-the-artin-presentation.md`
- `items/def-covering-map-and-evenly-covered-neighbourhoods.md`
- `items/def-garside-half-twist-and-simple-positive-braid.md`
- `items/def-induced-homomorphism-on-fundamental-groups.md`
- `items/def-multiplicative-subset-and-localisation.md`
- `items/def-relative-singular-homology.md`
- `items/def-singular-chain-complex-of-a-pair.md`
- `items/def-unordered-configuration-space.md`
- `items/lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints.md`
- `items/lem-int-cancellation.md`
- `items/lem-jordan-schoenflies-extension-for-plane-curves.md`
- `items/thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group.md`
- `items/thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk.md`
- `items/thm-brouwer-fixed-point-theorem.md`
- `items/thm-cellular-homology-computes-singular-homology.md`
- `items/thm-covering-space-lifting-criterion.md`
- `items/thm-homotopy-lifting-for-covering-maps.md`
- `items/thm-long-exact-sequence-of-a-pair-in-singular-homology.md`
- `items/thm-singular-chain-homotopy-formula.md`
- `items/thm-classification-of-connected-covering-spaces.md`

The listed direct suppliers were opened for their used definitions/statements. The general-arc supplier’s compact-normalization, actual-cover projection and supported-move argument was read; the Jordan–Schönflies supplier was read for its exact extension statement and selected construction, not audited in full. Elementary algebra/topology suppliers were checked at the interfaces used here. This is not an audit of their entire transitive dependency closures.

## Independent evidence

- [Bigelow 2001](https://web.math.ucsb.edu/~bigelow/publications/03.pdf): section 2, pp. 474–479, and complete Claim 3.4 / Key Lemma argument, pp. 480–481, read from the source PDF. Figure 1 fixes the parallel-tree convention; p. 475 specifies opposite return endpoints and the sign equation; p. 479 has the closing-factor identity for the full Laurent sum. The nonembedded projection case on p. 481 was restored.
- [Bigelow 2002](https://arxiv.org/pdf/math/0204057): sections 2.1–2.2 and 3.1–4.1, including the full Lemma 4.4 argument on pp. 11–12, were read. The source’s second exceptional “unit” assertion in Lemma 4.3 is already explicitly corrected in the assigned surface item; its two-point calculation gives a unit times (1−t), and the corrected triangular matrix remains invertible. I did not reinstate the source’s incorrect stronger assertion.
- [Paoluzzi–Paris](https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf): pp. 505–506 (collapsed attaching words), p. 509 (X13 and basis comparison), pp. 514–515 (cell images and seven-case E action) were opened. These agree with the corresponding assigned formulas. The fixed-parameter nonisomorphism proof in the assigned theorem uses the simple σ1 eigenline and an integral denominator calculation, including rank three; it does not borrow the source’s parameter-twisted rank-three omission.
- [Krammer](https://arxiv.org/pdf/math/0405198): section 3, p. 139, and the complete Lemma 3.2 argument, pp. 141–142, were read. An independent exact integer-polynomial computation verifies both B3 triple products and the full-twist square q^6 t^2 I3.
- The two revised polygonal pairing diagrams were checked with exact rational arithmetic, not just floating winding estimates. At each merged segment breakpoint, all mobile coordinates and differences are rational. For each of the 16 example pairs and four counterexample pairs, the applicable closed difference loop has signed ray count −1; returning labels give b=−2, exchanged labels give b=−1. Exact total puncture winding counts give the displayed a matrices (−5 at the lower diagonal, −4 for mixed pairs, −3 for upper pairs). Applying the sign formula gives the displayed matrices. The example’s rows two and three cancel entry by entry; the four survivors equal q^−5 t^−2(q−1)(1+qt). These coordinates and the exact crossing algorithm are preserved in the two item bodies, so the calculation is reproducible without a private diagram.

## Consumer checks

The corrected extremal statement is used by the detection lemma only with l≥1; its zero-intersection case is handled separately. The shared-boundary-endpoint convention in the arc lemma does not weaken tine/crosscut consumers, which have no common endpoints. The absolute-cycle and end-relative image correction preserves the primed pairing argument and the integral basis. I checked the resulting chain through boundary transport, kernel-edge fixing, the spine stabilizer, the full-twist scalar, faithfulness and linearity. No withdrawal is proposed.

## Remaining defects and page verdicts

- **A page — lead action required.** Frontmatter `items` lists 26 items, while the assigned manifest lists 27: `lem-fork-detection-transports-to-arbitrary-boundary-crosscuts` is omitted. The kernel-edge lemma depends on it, so this locally proved supplier should appear before that consumer. Placement metadata is outside the reader’s A-page-prose license. The findings JSON routes this existing page ID, with no invented obligation label.
- **A page — additional prose correction for the same lead.** Paragraph 1 identifies ker Φ with the deck group Z². This is false; the deck group is the quotient π1(C,c0)/ker Φ. The page was restored to its original bytes to avoid reporting an uneditable metadata finding on a modified carrier. The lead should make the quotient correction together with the missing placement. This is recorded here rather than misclassified as an unlicensed prose finding.
- **B page — no remaining defect found after item repairs.** Its promised cancellation is now demonstrated by the four-crossing example; its counterexample uses a completely specified diagram and a disjoint comparison. The B-page prose and metadata were not edited.

## Validation

For every one of the 12 changed items, ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. Nine proof-bearing items pass; the three definitions report zero checked / zero failing. The first checks requested canonical numbering in the expanded extremal proof and pairing example; that numbering was adopted and those checks rerun successfully. No changed item has a `verification.judge` record. No judge, audit, or certification was added.

`node tools/rendercheck.mjs` on the twelve changed items and the A-page prose yielded exit 0: all 13 files parsed under the real YAML/KaTeX renderer. This ran while the temporary prose correction was present; the A page was subsequently restored to its original bytes for the handoff described above.

After the last item edit and formatter, ran once:

```sh
node tools/proof-layout.mjs items/def-lkb-two-variable-covering-homomorphism.md items/def-lawrence-krammer-bigelow-cover.md items/def-lexicographic-order-on-fork-noodle-deck-monomials.md items/lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly.md items/lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions.md items/lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement.md items/lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel.md items/thm-the-integral-lkb-module-is-free-of-rank-n-choose-two.md items/lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared.md items/cex-a-linear-representation-need-not-be-faithful.md items/ex-a-fork-noodle-pairing-computation.md items/cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing.md
```

Result: `12 items, 46 steps, 0 defects`, exit 0. No item edit followed this check.

## Limitations and handoff

The cited Farb–Margalit Primer landing page returned 403; the archived URL was unavailable, and attempted direct/mirror downloads returned short documents rather than the book. I do not claim to have read that book’s complete arguments in this session. The local arc, graph and annulus arguments and their opened repository supplier interfaces were reviewed independently, with Bigelow’s complete extremal argument as the source check. I did not audit all foundational transitive closures. The unresolved placement/prose page carrier is the only handoff blocker.

The same A-page metadata also places the closed-basis-surface lemma (line 26) before its direct supplier, the well-defined-pairing lemma (line 27). The lead should place the pairing supplier first when correcting the page inventory. Both page files match their Step 5 pre-reader SHA-256 values exactly: A `0e184532c85d4a1ebce3100652da1f7953941b5a860fc827b10ebdd0c8257fe0`; B `37ff8cede1f5518c0849e379eff7ea66a2b3b4e5a67da1567abbf41bd6ed3a95`. Recent git history includes Frontier 37 publication (`8868806d9`); the active Frontier 38 state is the on-disk `5a-read` run, not a concluded RESUME file.
