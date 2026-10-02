# Step 5a reader report — batch 20

Run: `frontier-37-owner-30`  
Role: reader  
Scope: batch 20 only

## Opened inventory

Read the current batch manifest `research/frontier-37-owner-30-batch-20.pages.json`, `briefs/reader.md`, and both assigned page files:

- A page: `library/braid-groups/punctured-disks-mapping-classes-and-point-pushing.md`
- B page: `library/braid-groups/punctured-disks-mapping-classes-and-point-pushing-examples.md`

Opened all 18 assigned item files:

- A items: `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`; `def-pure-mapping-class-group-of-a-punctured-disk`; `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group`; `lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections`; `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`; `lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration`; `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`; `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism`; `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk`; `lem-configuration-loops-admit-smooth-separated-point-motion-representatives`; `lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies`; `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`; `cor-pure-braids-are-pure-punctured-disk-mapping-classes`; `def-point-pushing-homomorphism-for-a-puncture`.
- B items: `ex-a-half-twist-as-a-punctured-disk-homeomorphism`; `ex-point-pushing-one-puncture-around-another`; `cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group`; `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group`.

Opened the load-bearing published dependency statements used for the topological and sign checks, including the ordered/unordered configuration definitions and covering theorem; the geometric braid/configuration and endpoint-monodromy results; the open-to-closed configuration equivalence; the half-twist and geometric braid group definitions; the fibration LES, relative lifting property, numerable bundle theorem, local bundle definition and metric partition result; the choice implications; compact-open/uniform topology and interval exponential law; Banach fixed point and Euclidean completeness; Weierstrass approximation and the smooth step; the time-dependent vector-field, vector-field extension, smooth cutoff, local and global flow results; and the circle fundamental group and quotient universal property. Also opened the loop-product, geometric braid-tracing, contractibility, homotopy, and group-isomorphism inputs needed for the endpoint and pure-subgroup comparisons.

For external source checks, the accessible Birman–Brendle survey, §1.3, printed pp. 5–6 (Theorem 1 and its evaluation-fibration/LES argument), supports the braid and pure mapping-class identifications; González-Meneses, §1.4, printed pp. 6–7, records the nontrivial disk full twist and its loss after passing to the punctured-plane convention, and §1.5, printed p. 7, describes the standard generators. The archived Farb–Margalit PDF returned an internal error in the web reader, and the Fadell–Neuwirth URL redirected to a login page; neither was needed to resolve an uncertainty in the current arguments.

## Review and page verdicts

### A page — pass

The page summary matches the current item statements: boundary fixing is pointwise, the pure subgroup is the pointwise stabilizer, the evaluation boundary uses the inverse endpoint, the braid identification applies inverse slicing and the open-to-closed isomorphism, and point pushing makes no injectivity claim. The half-twist sign and point-push sign agree with the explicit paths and endpoint convention.

One nonfatal proof-detail omission occurs in `lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration`: it calls `C_n(int D^2)` a metric space before applying the metric partition result, without displaying the finite-quotient metric. This is supplied by the standard formula `d([x],[y]) = min_{sigma in S_n} max_i |x_i-y_{sigma(i)}|`, which induces the quotient topology. A competent reader closes this elementary finite-quotient step immediately; it does not make the claim defective, so I made no edit.

### B page — nonfatal page-prose finding

The examples and counterexamples are otherwise supported by their item proofs. The B-page summary conflates the rigid full-rotation loop with the mapping class represented by the endpoint of its evaluation lift. The rotation path itself ends at the identity homeomorphism. In the assigned counterexample item, the nontrivial boundary-fixed mapping class is `f = P_1^{-1}`; the item proves `delta([rho_-]) = [f]` and separately constructs a setwise-boundary isotopy from the identity to `f`. The page wording should distinguish the nontrivial configuration-loop class from this lifted endpoint class.

## Edits

None. No assigned item or A-page prose needed repair. No proof contract or `verification.judge` record changed; no reflow or precheck was run.

## Uneditable defect

- Page `punctured-disks-mapping-classes-and-point-pushing-examples`, fourth prose paragraph (beginning “The two counterexamples isolate…”), second sentence and its concluding “class” clause: the phrase “a rigid rotation of the whole disk through 2π would be a nontrivial isotopy class with identity endpoint” is ill-formed as a mapping-class statement. The full rotation path ends at the identity map and is not itself a nontrivial path component. The nontrivial class is the inverse endpoint of its evaluation lift, as proved in `cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group`. Severity: nonfatal. The page is outside the authorized prose-edit scope.

## Blocker

None. The inaccessible source URLs noted above did not leave a mathematical uncertainty in the reviewed claims.
