# Step 3a reader report — batch 3

Run: quantum-prerequisites-4-2026-10-15  
Role: reader  
Scope: batch 3 only

## Inventory opened

Assigned pages:

- library/complex-analysis/complex-coordinate-and-path-transport.md
- library/complex-analysis/complex-coordinate-and-path-transport-examples.md

Assigned items, reviewed in dependency order:

1. thm-complex-coordinate-map-preserves-real-scalar-multiplication
2. def-complex-path-polygonal-length-and-rectifiability
3. thm-complex-coordinate-isometry-and-topology-transport
4. thm-complex-coordinate-map-preserves-real-total-differentiability
5. thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
6. thm-complex-path-length-invariant-under-monotone-reparametrization
7. ex-complex-coordinate-and-path-transport

The assigned cross-batch dependency manifest is empty. Direct suppliers opened for the assigned arguments include:

- Complex coordinates and metric: def-complex-numbers-and-arithmetic; thm-complex-numbers-are-the-real-coordinate-plane; def-complex-conjugate-real-imaginary-part-and-modulus; def-complex-metric-convergence-and-continuity; def-p-norms-on-rn; def-isometry-and-metric-embedding; def-metric-ball; def-metric-topology; def-homeomorphism-and-open-maps; def-metric-interior-closure-boundary; def-metric-compactness; def-metric-bounded-diameter; thm-metric-open-set-algebra; thm-continuous-image-of-a-connected-space; thm-continuous-image-of-a-compact-space-is-compact.
- Path and interval conventions: def-interval; lem-real-line-is-a-metric-space; def-metric-continuity; def-partition-and-refinement; def-path-polygonal-length-and-rectifiability-in-rn; def-complex-path-polygonal-length-and-rectifiability; thm-rectifiable-iff-coordinate-functions-have-bounded-variation; cor-piecewise-c1-paths-have-additive-speed-integral-length; def-monotone-function; thm-arc-length-is-invariant-under-monotone-reparametrization.
- Derivatives: def-euclidean-linear-map; def-total-derivative-in-euclidean-space.
- Extended reals and sums: def-complete-ordered-field; def-extended-reals; lem-extended-reals-complete; def-finite-sum; lem-finite-sum-laws.
- Example arithmetic: def-abs-value; lem-of-abs-value; thm-of-square-roots; def-natural-numbers; thm-recursion; thm-induction-principle; def-nat-addition; lem-nat-add-identity; def-nat-order; thm-nat-linear-order; lem-nat-order-add-compatible; lem-of-naturals-positive; lem-of-inverse-positive; thm-of-archimedean.
- To check whether a non-circular natural-difference definition was available: def-nat-finite-sum-and-product and lem-nat-finite-sum-laws-and-the-canonical-embedding.

The current batch contracts and notes were used as navigation and evidence only. I reviewed the current page and item sources independently. No separate rendered reader bundle appeared in the active run state directory.

Sequencing note: I opened the A2 path-definition item before its external published suppliers. I checked the relevant supplier statements and proof clauses afterward and before reaching its verdict. The remaining assigned items were opened after their required suppliers.

## Review and verdicts

### A page: complex-coordinate-and-path-transport

The page summary matches its six assigned items. The scalar-coordinate calculation uses the canonical real embedding and the coordinate multiplication formula correctly. The topology theorem obtains exact ball correspondence from the isometry, proves openness in both directions, transfers interior and closure by the ball definitions, and transfers boundary by bijectivity. Its compactness and connectedness arguments apply the continuous-image results to the induced subspaces in both directions.

The total-derivative transport conjugates real-linear maps in both directions and identifies the remainder quotients by the exact isometry. The complex path-length theorem compares the same partition sums term by term, then applies the Euclidean bounded-variation and piecewise-speed results under their stated hypotheses. The reparametrization theorem checks composition continuity and applies the Euclidean theorem to coordinate paths, including singleton domains, pauses, and reversal.

No page-prose or assigned-item defect was found in these claims. The relevant uses of finite sums here are prefix sums and nonnegativity; they do not use the defective lower-index notation or the splitting clause reported below.

### B page: complex-coordinate-and-path-transport-examples

The page summary matches its example. The finite path calculations, coordinate map, ball image, conjugation derivative, singleton convention, pause, and reversal are correct. For the second path, the intervals are disjoint, the triangular formulas agree at their joins, the path is bounded, and the continuity estimates at positive parameters and at zero are sound.

The proof that its partition sums are unbounded uses harmonic partial sums, lower-index finite-sum notation, and the splitting clause of lem-finite-sum-laws. Those published prerequisites have the gaps below, so the nonrectifiability conclusion cannot be certified from the available dependency closure.

## Uneditable findings

1. Published item def-finite-sum, Definition / Notation paragraph (current source line 91), uses d = n + 1 - m for the number of terms in a lower-index sum under m ≤ n + 1. Its dependencies establish natural numbers and addition but do not define natural order or truncated natural subtraction. def-nat-order.md explicitly says the gap n - m is written that way “once subtraction is available.” The only local item found that defines truncated natural difference, def-nat-finite-sum-and-product, itself depends on def-finite-sum, so it cannot supply this definition upstream without a cycle. The lower-index notation used in the assigned example is therefore not well-defined by this published item’s available prerequisites. A standalone definition, or a witness-based definition from m + d = n with existence and uniqueness proved from natural order and cancellation, is needed. This is finding 1 in the JSON.

2. Published item lem-finite-sum-laws, Statement clause 3 and Proof step 1.3 (current source line 80), states and proves splitting by setting d = n - m and inducting on d. Its dependencies do not establish natural order or truncated subtraction, and def-finite-sum does not define the operation used. The cited order definition gives an existence witness when m ≤ n, but the lemma neither selects that witness nor proves the needed identification/uniqueness. The assigned example uses this splitting clause in Verification step 3.2 to pass from H(q_K) to H(q_(K+1)). The proof needs an explicit witness-based split with the natural-order and cancellation facts supplied, or a corrected finite-sum definition and corresponding dependency. This is finding 2 in the JSON.

Both findings are published dependencies and were not editable in this reader assignment. No item or page was edited. Because there were no item edits, no item formatter, reflow, or precheck was run.

## Source checks and limitations

- Lebl, Guide to Cultivating Complex Analysis: §1.1.1 gives the coordinate-plane model; §2.1.2 states the real first-order derivative remainder; §2.2.2 is the Wirtinger-operator discussion. URL: https://www.jirka.org/ca/ca.pdf
- Ahlfors, Complex Analysis, Ch. 4 §1.2 defines rectifiable arcs by suprema of inscribed polygonal sums and states the bounded-variation criterion for real and imaginary coordinate functions (PDF lines 3671–3688; printed pp. 104–105). URL: https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf
- Lang, Differential Geometry I, §1.1 defines length for continuous metric-space curves by partition sums and states invariance under continuous surjective monotone reparametrization (PDF lines 72–91). URL: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
- Stein and Shakarchi, Complex Analysis, Ch. 1 §3 treats smooth and piecewise-smooth curves and their integral length; it does not supply the general continuous-rectifiable-path result. The broader source support is Ahlfors and Lang, and the assigned transport arguments are proved locally. URL: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf

I checked the statements and relevant proof passages of the direct published suppliers used by the assigned arguments, not every transitive proof dependency of those suppliers. The unresolved finite-sum issues are confined to lower-index notation and splitting; no cross-batch source was needed.
