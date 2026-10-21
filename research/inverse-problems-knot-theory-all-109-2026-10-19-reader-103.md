# Step 3a reader report — batch 103

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Reviewed: 2026-10-21 UTC

## Run state

The live autopilot run is still running. At the final status check, batch 103 was missing from `3a-read`, nothing was in flight, and the run listed the unrelated `3a-split` blocker for batch 83. There is no batch-103 blocker.

## Assigned inventory and page verdicts

| Page | Opened file | Verdict |
| --- | --- | --- |
| `terminating-computations-for-classical-knot-invariants` (A) | `library/knot-theory/terminating-computations-for-classical-knot-invariants.md` | Pass. Draft YAML frontmatter only; `page_layout: compact-v1`; inventory and prerequisites match the batch manifest. No page body or summary. |
| `terminating-computations-for-classical-knot-invariants-examples` (B) | `library/knot-theory/terminating-computations-for-classical-knot-invariants-examples.md` | Pass. Draft YAML frontmatter only; `page_layout: compact-v1`; companion prerequisite and example inventory match the batch manifest. No page body or summary. |

Opened all ten assigned items, in dependency order:

1. `def-encoded-diagram-size-and-exact-output`
2. `lem-dihedral-fox-coloring-count-is-reidemeister-invariant`
3. `thm-exact-bracket-output-bit-growth-bound`
4. `thm-knot-linking-number-and-fox-coloring-finite-complexity`
5. `thm-bracket-state-sum-exponential-bound`
6. `alg-reidemeister-move-neighbors-from-code`
7. `alg-breadth-first-reidemeister-search`
8. `thm-reidemeister-enumeration-is-only-a-semidecision`
9. `ex-knot-kt-48-worked-cases`
10. `cex-knot-kt-48-boundary-case`

## Dependency and source review

Opened every direct supplier named by the batch manifest and the relevant item interfaces: `def-regular-oriented-link-diagram`, `def-quandle-and-knot-coloring`, `def-kauffman-bracket-smoothing-and-loop-value`, `def-planar-diagram-gauss-and-dowker-codes`, `lem-dihedral-operation-is-a-quandle`, `def-oriented-reidemeister-moves`, `alg-kauffman-bracket-state-sum`, `thm-kauffman-bracket-state-sum-procedure-properties`, `alg-oriented-linking-number-from-diagram`, `thm-oriented-linking-number-scan-terminates-and-is-correct`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `alg-dihedral-fox-colorings`, `thm-dihedral-fox-colorings-terminate-and-are-correct`, `thm-oriented-reidemeister-equivalence-theorem`, `def-countable-choice`, `thm-normalized-bracket-is-an-oriented-link-invariant`, `alg-planar-code-validation-and-diagram-reconstruction`, `alg-enumerate-diagrams-up-to-crossing-bound`, `thm-planar-code-validation-and-diagram-reconstruction-procedure-properties`, `thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties`, and `thm-valid-code-reconstructs-the-declared-link-diagram`.

Also opened transitive suppliers used in the reviewed arguments: `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-mod-two-intersection-number`, `thm-mod-two-intersection-number-is-homotopy-invariant`, `lem-kauffman-bracket-r2-r3-identities`, `lem-kauffman-bracket-curl-and-writhe-correction`, `lem-planar-diagram-code-realizability-and-face-validation`, and `lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms`.

Relevant authoritative passages read:

- Danny Calegari, *Introduction to Knot Theory* (2025): §1.2, Reidemeister moves; §1.3, 3-colorings and the trefoil/unknot counts; §3.3, Definition 3.11 and Proposition 3.12 on linking number; §5.1, bracket skein rules, writhe correction, and state sum. [Author PDF](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf).
- Justin Roberts, *Knots Knotes* (1999): §2.3, Reidemeister moves and variants; §3.2, linking number and move invariance; §§3.3–3.4, coloring rules, counts, and move invariance; §§4.1–4.3, bracket conventions, writhe correction, and Proposition 4.3.4 state sum. [PDF](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf).
- J. Scott Carter, “A Survey of Quandle Ideas,” §2.3, pp. 8–9: the oriented overarc normal points from the source underarc to the target underarc, with target color obtained by the quandle operation. [arXiv PDF](https://arxiv.org/pdf/1002.4429).
- Louis H. Kauffman, “Combinatorial Knot Theory and the Jones Polynomial,” §2: bracket state summation and normalized bracket. [arXiv PDF](https://arxiv.org/pdf/2204.12104v2).
- Jeff Erickson, “Planar Graphs,” “Rotation systems,” lines 49–61: dart reversal, successor permutation, and face cycles. [Lecture notes](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html).
- Hass, Lagarias, and Pippenger, “The Computational Complexity of Knot and Link Problems,” §1, pp. 2–3: finite link-diagram representation and crossing data. [arXiv PDF](https://arxiv.org/pdf/math/9807016).

## Item review and edits

- `def-encoded-diagram-size-and-exact-output`: the arc count `a=c+q`, coefficient-bit convention, code-length caveat, and finite-field representation are consistent with the stated domains.
- `lem-dihedral-fox-coloring-count-is-reidemeister-invariant`: the involution, idempotency, R1/R2 extensions, and R3 self-distributivity argument establish the stated finite coloring bijections. Carter’s source confirms the source-to-target normal convention; the assigned quandle diagram agrees with it.
- `thm-exact-bracket-output-bit-growth-bound`: state-circle, exponent, coefficient, dense-array, and tape-scan bounds follow under the explicitly specified indexed input and bit-cost model.
- `thm-knot-linking-number-and-fox-coloring-finite-complexity`: the linking half-sum and finite-field operation bounds preserve the stated component, arc, and cost hypotheses. ACω is used for ambient-isotopy interpretation, not finite execution.
- `thm-bracket-state-sum-exponential-bound`: the normalized exponent shift is bounded by the writhe, coefficient size is unchanged by the monomial sign, and the output-array pass fits the stated bit bound.
- `alg-reidemeister-move-neighbors-from-code`: the `c+2` crossing bound covers R1/R2/R3; the finite relabeling and local-site searches cover the stated one-move candidates.
- `alg-breadth-first-reidemeister-search`: each layer is finite, predecessor records witness found paths, and the empty-layer loop correctly has no negative branch.
- `thm-reidemeister-enumeration-is-only-a-semidecision`: the finite neighbor completeness and Reidemeister theorem give eventual detection of an equivalent target; no finite failure is treated as inequivalence.
- `ex-knot-kt-48-worked-cases`: the eight-crossing state count is `2^8=256`; the displayed trefoil incidences give one nonzero row over `F_3`, hence nine colorings, versus three for the unknot. The TikZ diagram matches the stated crossing incidences. The former title “Eight-crossing bracket…” suggested an unevaluated bracket calculation, so I changed it to “Eight-crossing state count and trefoil Fox 3-colorings.”
- `cex-knot-kt-48-boundary-case`: for every `N`, adding `2N+1` R1 kinks gives an equivalent pair with crossing-count difference greater than `2N`; thus no path of at most `N` moves exists. The additional Fox-count distinction is also correct.

The only assigned edit was the example title. No proof-contract field changes: the batch contract contains the statement and derivation evidence but no item title, and the item had no `verification.judge` record to remove. `reflow.mts` reported the item unchanged; `precheck.mts` passed; the required final layout check reported one item, four proof steps, and zero defects.

## Uneditable finding

- `def-oriented-reidemeister-moves` is published and outside this batch’s write scope. Its Definition says the R1 over/under data are “as in the picture” and describes the R2/R3 forms as standard pictures, but the item contains no corresponding move diagrams. The missing local diagrams are needed to complete the promised diagram exposition for the variants used by `alg-reidemeister-move-neighbors-from-code`. Roberts, *Knots Knotes*, §2.3, printed pp. 10–12, supplies R1–R3 figures and discusses the additional sign and height variants. This is routed as a nonfatal `ill-formed` published-dependency finding; no published content was edited.

## Coverage limits and blockers

I checked every assigned item, both assigned pages, and all direct dependencies named by the batch manifest. I additionally checked the transitive suppliers listed above, but did not recursively audit the full foundational closure behind the published Reidemeister, transversality, mod-2 intersection, smooth-disk, and choice results. The direct statements used by this batch were opened; the full recursive closure is outside this report’s claimed coverage.

There is no batch-103 blocker. The active run still reports the unrelated batch-83 `3a-split` blocker.
