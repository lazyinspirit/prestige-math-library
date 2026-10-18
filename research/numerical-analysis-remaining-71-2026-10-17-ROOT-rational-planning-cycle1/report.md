# APP-RATIONAL planning resolution, cycle 1

Preauthor planning only. Run: numerical-analysis-remaining-71-2026-10-17. No item authoring, canonical edits, tests, gate action, owner direction, hash, or recertification is supplied. The batch-14 A/B manifests and plan-spec both have empty item arrays. This is mathematical planning evidence, not item or consumer proof acceptance.

## Disposition

The approved estimate with a constant depending only on d and the global mesh ratio, and only the seminorm of f^(d+1), is false for EVERY fixed d, already on uniform grids. The complete explicit counterexample is in proof.md, section 5. Consequently the defining rate interface needs an explicit correction; merely quoting a source with stronger smoothness would not justify that correction. The no-real-pole interface and the degree range 0 <= d < n remain unchanged.

Preserve as much of the approved smoothness as sound mathematics permits: retain f in C^(d+1), with the additional requirement that g=f^(d+1) have bounded variation V. Section 4 proves independently, for epsilon=1 when n-d is even and epsilon=0 otherwise:

- d >= 1: ||f-r_d|| <= h^(d+1) (V + epsilon ||g||)/(d+1).
- d = 0: ||f-r_0|| <= h(1+beta) (Var(f') + epsilon ||f'||).

The d=0 beta is the local mesh ratio defined in proof.md. Global quasi-uniformity h/h_min <= rho implies beta <= rho. No mesh-ratio restriction is needed for d>=1. These constants need not be sharp. This BV extension is an independently proved proposal, not a theorem attributed to Floater–Hormann. It preserves C^(d+1) regularity with an honest quantitative extra hypothesis and includes functions outside C^(d+2).

Also retain the sharper exact Floater–Hormann C^(d+2) branches from proof.md, section 3. Those constants and hypotheses were checked against the complete source argument. The original C^(d+1)-seminorm-only claim must not survive in examples, summaries, or future consumers. This is a confirmed false proposed estimate, not an open problem. The local missing suppliers are established authoring obligations.

## Evidence actually read

Read CLAUDE.md, README.md and SCHEMA.md fully. Read APP-RATIONAL's complete design in research/plan-numerical-linear-track.md (section beginning line 1285), the full specialist APP-RATIONAL section and residual hold in research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md (lines 221–225 and 407), alpha's genuine drift section and top escalation list, the APP-RATIONAL drift-evidence entry, batch-14 task/pages manifests, and the exact A/B plan-spec entries. General prose requests an error bound with mesh/smoothness constants; the specialist interface is the source of the false C(d,rho) h^(d+1)||f^(d+1)|| estimate. They must be reconciled explicitly.

Read the COMPLETE 17-page author-hosted preprint:

Michael S. Floater and Kai Hormann, *Barycentric rational interpolation with no poles and high rates of approximation*, https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf .

The source contains the full construction, Theorem 1 no-pole proof (printed pp. 4–6), Theorem 2 d>=1 error proof (pp. 6–8), Theorem 3 d=0 error proof (pp. 9–10), barycentric algebra (pp. 10–11), numerical discussion and references. The originally cited https://www.inf.usi.ch/hormann/papers/Floater.2007.BRI.pdf returned a one-page JavaScript/security challenge in this environment; it was NOT read as a paper. The author-hosted preprint was found through the author's university papers index. Its pagination differs from alpha's published-paper page references. No other source is represented as read.

Also read actual local bodies items/thm-lagrange-interpolation-remainder.md, items/def-bounded-variation-and-total-variation.md, items/thm-c1-lipschitz-ac-bv-hierarchy.md and the bounded-variation page. The pointwise interpolation remainder alone does not supply the paired divided-difference or BV argument.

## Local supplier plan on the existing A page

Before any rate consumer, author locally in this order: (1) FH blend/weight algebra, positive polynomial denominator and support interpolation; (2) denominator lower bounds, including beta's boundary cases; (3) divided differences with symmetry, Newton error and adjacent-window recurrence; (4) simplex/Hermite–Genocchi formula and its monotone-window variation lemma if adopting the BV extension; (5) the two rate branches and the explicit false-estimate counterexample. Put these on the existing A page in addition to the commissioned barycentric/AAA/Padé items. Do not add a new page or an external unproved fallback. The integral/variation suppliers lie in the declared closure; the full local simplex argument is reproduced in proof.md. Exact item identities and dependencies remain future authoring work; all current arrays remain empty.

AAA, general barycentric cancellation, and Padé are not changed by this FH rate correction. Preserve their scope and caveats verbatim except for any explicit FH cross-reference. In exact arithmetic, the FH denominator is nonzero away from supports; an implementation's zero/nonfinite denominator branch is an evaluation/failure branch, not a proof that an exact FH pole exists. This planning note creates no floating-point error theorem.

## Same-reviewer consumer disposition

A reverse-requires traversal of all plan-spec pages finds exactly one direct/indirect planned page consumer: barycentric-rational-and-aaa-approximation-examples (order 2583), with items=[]. It requires only the A page and has no further descendants. Both A/B duplicated descriptions contain the general rate wording; the specialist defining estimate is in linear-audit.md. No canonical A/B page or authored FH items currently exist at the declared library paths. Thus no current item-level consumer can be audited and none is claimed covered.

The same reviewer owns this supplier correction and B-page follow-through: every future FH accuracy example must use either the BV or the C^(d+2) quantitative theorem, with the d=0 mesh condition when applicable. The three commissioned examples concern AAA/off-grid/Padé; none may infer the rejected FH bound. The counterexample in proof.md may be placed on A as a necessary local scientific correction; it is not fabricated content in current manifests. The same reviewer must inspect any additional consumers discovered at authoring. No separate read-only reviewer is assigned and no coverage stamp is fabricated.

## Remaining uncertainty

No mathematical gap remains in the proposed no-pole, source-rate, BV-extension, or counterexample arguments in proof.md. The optimal general C^(d+1)-only replacement (for example a sharp logarithmic bound) was not proved or sourced here and is not asserted. Actual future item contracts, exact proof-format validation, and consumer checks remain unavailable until authoring. Root must decide/integrate the explicit scientific interface correction and bind the resulting current inputs; this report performs no such mutation.

## Cycle-1 focused completion: actual batch-14 author finding

This is a focused continuation of cycle 1 during native authoring, not a second review cycle. The earlier preauthor observations above (including empty item arrays and unavailable item-level consumers) describe their original observation state; the current batch-14 manifest now has 26 A items and three B examples. This append records only the actual author-raised ratio finding and associated dependency questions. No earlier evidence is rewritten.

**Confirmed packet error and current disposition.** The historical proof.md section 1 writes `mu_(i+1)/mu_i=-(x-x_i)/(x_(i+d+1)-x)` in its I3 paragraph. The leading minus is an algebraic error. Cancelling the common products gives `mu_(i+1)/mu_i=(x-x_i)/(x_(i+d+1)-x)`. On I3, numerator negative and denominator positive give a negative ratio; its absolute value is less than one because x_i<x_(i+d+1). The corrected argument is appended to proof.md. The intended sign-alternation, strictly decreasing magnitudes and positive-pair conclusion remain valid with that correction. The original report's statement that no mathematical gap remained must be read subject to this explicit correction.

Read the actual author notes, cross-batch dependency record, current batch-14 manifest, and full bodies of the current blend identity, gap-partial-sum lemma, no-pole theorem, denominator-lower-bound lemma, both error-rate theorems and the seminorm counterexample. The actual draft `lem-floater-hormann-gap-partial-sums-positive` step 1.2 uses the correct forward ratio, and step 1.3 uses the correct backward ratio `(x_(i+d)-x)/(x-x_(i-1))`. The no-pole theorem step 2.1 also uses the correct ratios in both exterior intervals. No correction to those current draft arguments is needed for the packet sign error.

The actual manifest's direct consumers of the gap lemma are `lem-floater-hormann-denominator-lower-bound` and `thm-floater-hormann-no-real-poles`; their affected descendants are `thm-floater-hormann-error-rate-BV`, `thm-floater-hormann-error-rate-C2` and `cex-floater-hormann-Cd1-seminorm-rate-fails`. Their relevant uses were read: denominator lower bounds use positive blocks/pairs, the rate theorems use those lower bounds and the no-pole/support values, and the counterexample uses denominator nonvanishing at the off-node query. All those uses remain sound under the corrected ratio; no statement or constant changes. None of the three B examples depends on this FH chain in the current manifest. This is focused mathematical disposition of the actual sign finding, not whole-item acceptance or an independent certification stamp.

**Minimax status.** The actual Minimax page currently exists with `status: draft` and a nonempty authored list of 19 items. Batch 14's required Minimax page edge is declared in the plan/spec/dispatch and remains an ordinary same-frontier completion/publication obligation for batch 4. The current batch-14 item dependencies contain no Minimax result, consistently with the author notes and current A-page prose. Consequently this is a pending page-edge/build-completion condition, not a newly discovered mathematical premise or a reason to weaken the FH theorem. This focused check does not certify the Minimax proofs or claim its handoff is complete.

**NA-10 conflict.** The actual polynomial interpolation page is published and lists `def-cardinal-polynomial-interpolation` and `thm-cardinal-polynomial-interpolant-exists-uniquely`. The current batch-14 manifest explicitly includes those two exact dependencies in the local divided-difference/Lagrange, window-interpolation and Newton-remainder lemmas. Their mathematical supplier is therefore present; there is no missing polynomial-interpolation theorem to author. The APP-RATIONAL prose design declares the NA-10 page edge, whereas the dispatch/spec/current A-page `requires` lists only SVD and Minimax. This is a real page-interface bookkeeping conflict for root reconciliation, not a mathematical prerequisite gap. The old design sentence that no external canonical item is consumed is also stale relative to actual reuse of the published polynomial and SVD suppliers. Preserve those exact item dependencies; root should align the page-level declarations and current descriptive sentence without duplicating proofs or changing the live writer's files through this research task.

**Before-drain repair signal.** The confirmed defect is in this historical research packet, now corrected explicitly by append. The actual canonical ratio and affected arguments already implement the correction. No additional mathematical defect requiring a canonical repair before the native writer drains was identified in this focused reading. Root retains integration and all checks. No canonical file, hash, certification, test or native control was changed.
