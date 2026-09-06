# frontier-31a reader report — batch 13

## Scope opened

- Manifest and proof contract: `research/frontier-31a-batch-13.pages.json` and `research/frontier-31a-batch-13.proof-contracts.json` (25 A items, 7 B items, and all 15 proof-bearing contracts).
- A page: `library/algebraic-geometry/projective-algebraic-sets-projective-morphisms-and-cones.md`.
- B page: `library/algebraic-geometry/projective-algebraic-sets-projective-morphisms-and-cones-examples.md`.
- A items: `def-projective-space-points`, `def-homogeneous-polynomial-and-homogeneous-ideal`, `lem-homogeneous-polynomial-zero-locus-well-defined`, `def-projective-algebraic-set`, `thm-projective-zariski-topology`, `lem-standard-projective-opens-are-affine-spaces`, `lem-homogenization-dehomogenization-correspondence`, `def-projective-closure-affine-set`, `def-homogeneous-ideal-saturation`, `thm-ideal-projective-closure-saturation`, `def-homogeneous-coordinate-ring`, `def-projective-variety-classical`, `lem-projective-irreducibility-homogeneous-prime`, `def-regular-function-projective-variety`, `lem-projective-regular-function-chart-compatibility`, `thm-global-regular-functions-projective-variety`, `def-morphism-to-projective-space-homogeneous-coordinates`, `lem-projective-coordinate-morphisms-well-defined`, `thm-closed-projective-embedding-by-homogeneous-generators`, `def-affine-cone-projective-set`, `lem-projective-variety-cone-irreducible`, `lem-projective-closure-dense-affine-chart`, `def-degree-projective-hypersurface`, `lem-projective-hypersurface-affine-pieces`, and `rem-projective-coordinate-ring-not-function-ring`.
- B items: `ex-projective-line-two-affine-charts`, `ex-projective-closure-parabola`, `cex-naive-homogenization-adds-component`, `ex-projective-conic-standard-charts`, `ex-affine-cone-over-conic`, `cex-inhomogeneous-equation-not-projectively-well-defined`, and `ex-morphism-projective-line-power-map`.
- Direct external dependency interfaces opened: `def-polynomial-ring-over-a-commutative-ring`, `def-graded-ring-and-graded-module`, `def-affine-algebraic-set`, `thm-affine-nullstellensatz-correspondence`, `def-quotient-ring`, `def-function-field-variety`, `def-regular-function-classical-variety`, `def-morphism-classical-varieties`, and `thm-affine-variety-prime-coordinate-ring`.
- Primary sources opened independently: Milne, *Algebraic Geometry*, Chapter 6, especially §§6.9, 6.15--6.18 and the regular-function discussion on PDF pp. 134, 138--140; and Artin, *Algebraic Geometry*, §§3.4.7--3.4.8 on PDF pp. 74--75. Their homogeneous-fraction, chart, closure, and projective-function statements agree with the current claims. Milne §7.9 was also opened only to check the standard global-functions conclusion.

## Repairs made

1. `cex-inhomogeneous-equation-not-projectively-well-defined`: the prior step 1.1 asserted that $x_0+1$ takes the values $2$ and $0$ at $(1,0)$ and $(-1,0)$ without excluding characteristic $2$. In characteristic $2$ those representatives and values coincide. Step 1.1 now explicitly assumes $\operatorname{char}k\ne2$; the existing separate characteristic-$2$ witness is retained; the conclusion now says “either characteristic”. The matching two proof-contract claims were updated.
2. `thm-ideal-projective-closure-saturation`: the displayed theorem used $I^h$ without defining the ideal. It now defines $I^h=(f^h:f\in I)$ both in the statement and given data, and the matching contract step records that interface. No `verification.judge` entry existed in either changed item.

## Mathematical review

- The closure computation, including saturation and the raw-generator counterexample, has the correct chosen chart $Z=x_0$ and the boundary point $[0:0:1]$ is genuinely spurious in the raw system.
- The projective-line, parabola, conic, cone, and power-map computations type-check in their declared fields and characteristics. The characteristic-not-2 cone diagnostic remains explicitly limited to the vertex derivative calculation.
- The homogeneous-coordinate, cone, irreducibility, regular-fraction, and closed-subset statements retain their nonempty/radical/homogeneous hypotheses. The global-functions theorem has the standard projective no-poles conclusion; its source support was checked independently.

## Uneditable defect

- `library/algebraic-geometry/projective-algebraic-sets-projective-morphisms-and-cones-examples.md:9` is B-page prose and cannot be edited by this role. It says that this examples page “fixes” and “develops” the full A-page infrastructure, and that its companion collects the computations. The page instead declares no `items`, declares precisely the seven computations in `examples`, and its A-page companion is the infrastructure page. The summary reverses the page roles.

## Verdict and checks

- A page: pass after the two in-flight repairs.
- B page: nonfatal summary defect reported in `research/frontier-31a-reader-findings-13.json`; no B-page body was modified.
- Focused validation passed: reflow and precheck on both changed items (2/2), strict proof-contract validation (15/15), content policy for all 32 scoped items (0 errors, 0 warnings), and `git diff --check`.
- Blockers: none.
