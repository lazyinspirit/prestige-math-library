# Batch 70 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-70`.

Scope: two touched obligations, no reader/refuter findings or page obligations. Current item bytes match all five post-reader hashes; Git HEAD reproduces all five pre-reader raw hashes. The two exact diffs only reorder or expand definitions, leaving conclusions and proof bodies unchanged.

## Completed dependency-level reviews

### Level 0 — finite-chart calculus

Independently checked all 14 steps and direct supplier statements: full AC covers countable choice/DC, Fourier normalization is rescaled consistently, Rellich is used on bounded smooth balls, and Atkinson has bounded two-sided inverses modulo compact operators. The weighted Fourier-kernel estimate needs 2N>n+|s-m|; the amplitude Taylor remainder retains arbitrary decay after output differentiation. Coordinate Jacobians cancel on the diagonal, the cutoff summation controls each fixed seminorm, and the positive Lambda has zero kernel and cokernel by symmetry/regularity. Essential-norm upper and lower bounds justify the compact-symbol quotient. For simultaneous closures, Fredholm openness at two levels and opposing kernel/cokernel monotonicities give smooth defects, without claiming a classical inverse. Haar averaging has seminorm-continuous classical orbits and preserves the common scalar symbol. Checked empty/zero-dimensional bases and zero bundles. Atiyah–Singer I pp. 514–520 and Haller III.3.1, III.3.11–19 were read; Haller defers estimates to Hörmander, so the local derivations, not those deferrals, supply them. No unresolved defect found.

### Level 1 — controlled realization

Independently checked all 12 steps with the reviewed finite-chart supplier and current AC, partition, Haar, Peter–Weyl, orthogonal-splitting and inverse statements. Finite orbit spans give the equivariant bundle embedding; spectral smoothing keeps rank by the <1/4 gap and projection restriction is invertible at distance <1. The complement is only used near the compact support: the displayed rotations glue stabilized maps globally, avoiding an extension assumption on the original exterior bundles. Radial ODE transport, uniform compact-parameter smoothing and exterior radial freezing give homogeneous representatives. The two nested cutoffs give exactly c as principal symbol and support the nonlocal kernel in L times L; kernel and transposed-kernel restriction prove ambient independence. Finite Fredholm blocks give R(G) homotopy invariance, and the exact first-order complex gives the Hodge decomposition by its elliptic matrix Laplacian. Checked elementary triples, parameter endpoints, point/empty/zero-rank cases; no arbitrary equivariant compactification is asserted. Atiyah–Singer I pp. 517–521 was read for the index framework; the finite-complement and two-cutoff arguments were checked locally. No unresolved defect found.

### Level 2 — Fourier–Hardy example

Checked all four Verification steps: Fejér completeness gives the actual closed Fourier range, with zero kernel and constant coefficient-representation cokernel, including V=0. The localized half-Fourier sum and its differentiated tails give the classical two-ray symbol. The periodic loop homotopy has matching endpoint derivatives. Its compact representative is 1 off a base interval and has all possible zeros in one compact rectangle. On the counterclockwise rectangle the top is traversed right-to-left, so the winding is -1, opposite to z=x+iξ. The explicit z plus conjugate-z matrix homotopy proves the inverse class without an unstated index theorem. The Hopf supplier fixes the clutching convention; the controlled supplier gives excision and coefficient tensoring. Reviewed the sole TikZ diagram: all four arrows are counterclockwise and its top/other-edge labels match the calculation; no addition is needed. Atiyah–Singer I pp. 525–526 and Haller III.5.10, III.6.1–2 were read. Reader definitions precede their uses and change no claim. No item consumer exists. No unresolved defect found.

### Level 2 — associated product

Checked all 13 steps with the current two analytic suppliers. For the shrinking cone, |vartheta|>=1/t and |ξ|<=2t|vartheta| imply <ξ><=sqrt(5)t|vartheta|; output derivatives preserve the O(t) bound. The Fourier Schur estimate converges at 2N>u+v+|s-1|, proving convergence at each integer level without frequency-derivative uniformity. Positive-level derivative estimates, passive-variable Fourier estimates at s=0 and adjoint duality give the genuine closure lift. Local H-equivariance and the invariant product density give all four exact typed commutations, preserved by T-averaging. The interpolated horizontal symbol is only required to equal a on vertical annihilators; the sum-of-positive-squares block calculation proves joint invertibility even where the horizontal interpolation is singular. Smoothness of closure defects precedes the energy calculation. Vertical projections commute exactly, so the four defects identify with those of C_K and C_L with the stated minus sign. External products on opens use controlled excision, not an unproved general compactification. Checked empty manifolds, zero ranks, zero-dimensional factors and disconnected H. Atiyah–Singer I pp. 514–516 and 527–529 was read; the local proof explicitly supplies and improves the horizontal-symbol homotopy detail. No unresolved defect found.

### Level 3 — orthogonal Bott normalization

Checked all ten steps against the reviewed calculus, controlled realization, product and exact Hopf/sphere/Stokes supplier statements. Exterior anticommutation gives k squared =|z| squared and the graded product sign. The independent Hardy calculation fixes index(z)=+1. The height-function deformation has common noninvertibility support in the compact zero section, localizes at two poles, and its stereographic formulas give z and conjugate-z, including the equivariant unit-scalar homotopies. The O(1) boundary matrix path is invertible and equivariant with domain 1 plus epsilon; its endpoint is a constant isomorphism, giving conjugate(b)=-epsilon b. Thus u-v=1 and u+v=1 determine the full line representation. For SO(2) the vertical rotation homotopy and Fourier-weight decomposition justify cancellation of 2. Every orthogonal matrix belongs to a product of line and rotation-plane blocks; product indices determine the character on all components, and Haar orthogonality then detects the representation. Checked n=0 separately at a point, reflections, zero coefficients and the (-1)^n cotangent orientation sign. Atiyah–Singer I Lemma 3.2, Proposition 4.4, Lemma 4.7 and pp. 524–526 were read in the archived text; the actual pole and character arguments are local. Reader expansion changes no class or conclusion. Direct consumer lem-equivariant-symbol-index-comparison uses exactly the unchanged trivial O(k) index in F4 and steps 1.2/5.1, so needs no repair or further-hop review. No unresolved defect found.

## Decisions and carrier changes

Both touched obligations receive `amended_repair`, confidence 1. The reader item bytes are retained exactly; Alpha synchronizes their manifest Statements and replaces author self-audits with independent, item-specific risk reviews, preserving each prior self-audit. The resulting composite carriers differ from both snapshots. Two closed nonfatal definition-order/explicitness ledger rows record the historical editorial defects. No reader/refuter finding is invented.

The pre-reader raw hashes are reproduced by Git HEAD `4c10de5be5ac5a35b63aa54e6e9d743a1894ffce`; every current raw item hash matches the post-reader snapshot. Exact diffs were examined. No historical preimage is missing.

## Consumer and page review

A search of every current item found only `lem-equivariant-symbol-index-comparison` as a direct dependency/reference consumer of the two touched items. Its F4 and Proof 1.2/5.1 use precisely the unchanged trivial O(k) representation and positive plane sign. No consumer repair is necessary, so no further propagation is triggered. The downstream character-formula L1 use remains the same analytic comparison. Both A/B pages are frontmatter-only, draft, retain compact-v1, and place the correct inventories in prerequisite order. No published item defect or outside repair is identified. The owning cross-batch input is correctly `[]`: all in-run dependencies of owned consumers stay within batch 70.

## Sources and reading limits

Primary: [Atiyah–Singer I](https://math.uchicago.edu/~shmuel/tom-readings/ASI.pdf), Lemma 3.2 (pp. 499–500), Proposition 4.4 (p. 505), Lemma 4.7 (pp. 507–508), positive-order lift pp. 514–516, analytic closure/index pp. 517–521, excision and normalization pp. 522–526, product pp. 527–529. Read the relevant archived searchable text at `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/step2-coverage57-70-v1/Atiyah-Index.txt`; this review did not newly inspect the scan visually. Local formulas were independently checked rather than accepting OCR as authoritative.

Supplementary: [Haller, The Atiyah–Singer Index Theorem](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf), III.3.1 and III.3.11–19, III.5.10 and III.6.1–2; read exact passages in the adjacent archived Haller-ASIT.txt and opened the live primary lecture PDF. These notes defer amplitude/composition/parametrix estimates, so they are not treated as complete proof suppliers. In particular the local Hermitian-adjoint derivation fixes the positive-frequency adjoint convention directly; no erroneous sign from a supplementary transcription is imported. All direct mathematical dependency Statements/Definition were opened, with their actual full-AC/countable-choice/DC hypotheses and published or draft status preserved. None is assumed proved merely because it is present.

## Focused checks

All commands below exited 0:

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-70.proof-contracts.json`: initial report, five CRITICAL items, zero errors. Reran the same command with `--require-reviewed`: five complete independent reviews, zero errors.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-70.proof-contracts.json --items lem-equivariant-finite-chart-symbol-calculus,lem-equivariant-controlled-symbol-realization,ex-equivariant-fourier-hardy-symbol-index,lem-equivariant-associated-symbol-product-index,lem-equivariant-compact-bott-index-normalization`: 5/5 checked, zero errors or warnings.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-equivariant-fourier-hardy-symbol-index.md items/lem-equivariant-compact-bott-index-normalization.md`: both pass.
- `node tools/physics-support/rendercheck.mjs` with the five explicit batch item paths and both explicit A/B page paths: all seven pass YAML/math checks.
- Final batched `node tools/physics-support/proof-layout.mjs items/ex-equivariant-fourier-hardy-symbol-index.md items/lem-equivariant-compact-bott-index-normalization.md`: 2 items, 14 steps, zero defects. No item edit or formatter followed this check.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/qft-batch70-ledger-rows.json`: appended both validated closed rows and regenerated the view under the native lock.
- Focused Python assertions confirm both manifest Statements equal the corresponding full current sections, both sections contain no hyperlinks, all five raw item hashes equal post-reader hashes, and the decisions file contains exactly the two routed obligations with confidence 1.

No new item edits required reflow. The reader had already reflowed and prechecked its exact retained bytes. No judge, hash stamping, engine transition or publication was performed.

## Blockers and owner handoff

None. Both routed decisions are complete; all five risk reviews are complete. No published-content repair, outside consumer repair, new item/page, withdrawal or empirical claim is introduced. The engine retains ownership of hash stamping, gates and stage transitions.
