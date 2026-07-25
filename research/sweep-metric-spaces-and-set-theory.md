Both TOC agents returned. Here is the deliverable.

---

# PART A — METRIC SPACES: FULL COURSE INVENTORY

## A.1 DEFINITIONS

### A.1.1 Distance structures and their weakenings
- **Metric** — `d: X×X → [0,∞)` with (i) `d(x,y)=0 ⟺ x=y`, (ii) symmetry, (iii) triangle inequality `d(x,z) ≤ d(x,y)+d(y,z)`.
- **Metric axioms, minimal form** — positivity is derivable from `d(x,x)=0`, symmetry and triangle inequality; worth an item since texts differ on the axiom list.
- **Pseudometric (semi-metric in some texts)** — drop `d(x,y)=0 ⟹ x=y`; distinct points may be at distance 0.
- **Quasi-metric** — drop symmetry; `d(x,y) ≠ d(y,x)` allowed (e.g. one-way-street metric, Sorgenfrey-like `max(y−x,0)`).
- **Metametric / partial metric** — drop `d(x,x)=0`; self-distance may be positive.
- **Semimetric (weakened triangle)** — drop the triangle inequality, keep symmetry and separation.
- **Premetric** — keep only `d ≥ 0` and `d(x,x)=0`.
- **Ultrametric** — strengthen the triangle inequality to `d(x,z) ≤ max{d(x,y), d(y,z)}`.
- **Extended metric** — allow `d: X×X → [0,∞]`.
- **Lawvere metric space** — extended quasi-pseudometric; equivalently a category enriched in `([0,∞], ≥, +)` (nLab/Lawvere 1973).
- **Metric induced by a norm** — `d(x,y) = ‖x−y‖`; conversely a translation-invariant absolutely homogeneous metric comes from a norm.
- **Metric induced by an inner product** — `‖x‖ = √⟨x,x⟩`; parallelogram law characterises these (Jordan–von Neumann).
- **Discrete metric** — `d(x,y)=1` for `x≠y`; the canonical "everything is open" example.
- **Bounded remetrisation** — `min(d,1)` and `d/(1+d)` are metrics inducing the same topology.

### A.1.2 Balls, diameter, distance functions
- **Open ball** `B_r(x) = {y : d(x,y) < r}`; **closed ball** `B̄_r(x) = {y : d(x,y) ≤ r}`.
- **Sphere** `S_r(x) = {y : d(x,y) = r}`.
- **Diameter** `diam(A) = sup{d(x,y) : x,y ∈ A}`, with `diam(∅) = 0` by convention.
- **Bounded set** — contained in some ball, equivalently finite diameter.
- **Distance from a point to a set** `d(x,A) = inf{d(x,a) : a ∈ A}`.
- **Distance between two sets** `d(A,B) = inf{d(a,b) : a∈A, b∈B}` (note: not a metric — fails the triangle inequality and separation).
- **Nearest-point (proximinal) set** — `A` such that every `x` has a nearest point in `A` (Searcóid §7.11–7.13).
- **ε-thickening / dilation** `A_ε = {x : d(x,A) ≤ ε} = ⋃_{a∈A} B̄_ε(a)`.
- **Isolated point / accumulation (limit) point of a set** — `d(x, A∖{x}) > 0` resp. `= 0`.
- **Perfect set** — closed with no isolated points.

### A.1.3 The metric topology
- **Metric topology** — `U` open iff every point of `U` has a ball inside `U`; open balls form a base.
- **Metrisable space** — a topological space admitting a metric inducing its topology.
- **Interior, closure, boundary** `A°`, `Ā`, `∂A = Ā ∖ A°`; and the metric characterisation `Ā = {x : d(x,A)=0}`.
- **Closed set** — complement of open; equivalently `Ā = A`; equivalently sequentially closed (in metric spaces).
- **Neighbourhood; neighbourhood base; first countable** — every metric space is first countable via `B_{1/n}(x)`.
- **Subspace metric** — restriction of `d`; the subspace topology agrees with it.
- **Relatively open / relatively closed** — open/closed in the subspace.

### A.1.4 Density, category, and the low Borel classes
- **Dense subset** `Ā = X`; **nowhere dense** `(Ā)° = ∅`.
- **Meagre (first category)** — countable union of nowhere dense sets; **non-meagre (second category)**.
- **Comeagre / residual** — complement of a meagre set.
- **Baire space** — countable intersections of dense open sets are dense; equivalently non-empty open sets are non-meagre.
- **`G_δ` set** — countable intersection of open sets; **`F_σ` set** — countable union of closed sets.
- **Generic property** — one holding on a comeagre set.
- **Polish space** — separable and completely metrisable.
- **Completely metrisable / topologically complete** — admits a complete metric.

### A.1.5 Sequences, Cauchy, completeness
- **Convergence** `x_n → x` iff `d(x_n,x) → 0`; limits are unique in metric spaces (Hausdorff).
- **Subsequence; cluster/limit point of a sequence.**
- **Cauchy sequence** — `∀ε>0 ∃N ∀m,n>N: d(x_m,x_n)<ε`.
- **Complete metric space** — every Cauchy sequence converges.
- **Totally bounded (precompact)** — for every `ε>0`, finitely many `ε`-balls cover `X`.
- **Relatively compact** — closure is compact (distinct from "precompact" in incomplete spaces).
- **Completion** — a complete space containing `X` as a dense isometric copy.
- **Cantor / nested-set property** — the property used to characterise completeness.
- **Banach space** — complete normed space; **Hilbert space** — complete inner-product space.

### A.1.6 Maps between metric spaces
- **Continuity at a point (ε–δ)**; **continuous map**; **sequentially continuous map**.
- **Homeomorphism** — continuous bijection with continuous inverse.
- **Uniformly continuous map** — one `δ` works for all points.
- **Modulus of continuity** `ω(δ) = sup{d(f(x),f(y)) : d(x,y) ≤ δ}`.
- **Lipschitz map** `d(f(x),f(y)) ≤ K d(x,y)`; **Lipschitz constant**; **short / non-expansive / metric map** (`K ≤ 1`); **contraction** (`K < 1`).
- **Hölder continuous of exponent α** `d(f(x),f(y)) ≤ C d(x,y)^α`, `0 < α ≤ 1`.
- **Weak contraction (contractive map)** `d(f(x),f(y)) < d(x,y)` for `x ≠ y`.
- **Meir–Keeler condition** — `∀ε>0 ∃δ>0: ε ≤ d(x,y) < ε+δ ⟹ d(Tx,Ty) < ε`.
- **Isometry / isometric embedding / global (surjective) isometry.**
- **Quasi-isometry** — `A⁻¹d₂(f x,f y) − B ≤ d₁(x,y) ≤ A d₂(f x,f y) + B`, plus quasi-surjectivity.
- **Open map, closed map** (Searcóid §8.4).
- **Equicontinuous family; uniformly equicontinuous family; pointwise bounded / uniformly bounded family.**
- **Uniform convergence** — convergence in the sup metric; **pointwise convergence**; **uniform Cauchy criterion**.

### A.1.7 Equivalence of metrics
- **Topologically equivalent metrics** — same open sets; `id` is a homeomorphism both ways.
- **Uniformly equivalent metrics** — `id` is uniformly continuous both ways.
- **Lipschitz (strongly / bilipschitz) equivalent metrics** — `α d₁ ≤ d₂ ≤ β d₁`.
- **Equivalent norms** — the norm analogue; on a vector space, topological equivalence of norm metrics coincides with Lipschitz equivalence.
- **Conserving metrics** — Searcóid §13.4's classification of which properties each equivalence preserves.

### A.1.8 Compactness family
- **Compact (open-cover)** — every open cover has a finite subcover.
- **Countably compact** — every countable open cover has a finite subcover.
- **Sequentially compact** — every sequence has a convergent subsequence.
- **Limit point (Bolzano–Weierstrass) compact** — every infinite subset has a limit point.
- **Lindelöf** — every open cover has a countable subcover.
- **σ-compact** — a countable union of compact sets.
- **Locally compact** — every point has a compact neighbourhood.
- **Finite intersection property (FIP)** for a family of closed sets.
- **Lebesgue number** of an open cover — `δ>0` such that every set of diameter `< δ` lies in one cover member.
- **Heine–Borel property** — closed + bounded ⟹ compact (a property of a specific space, not universal).

### A.1.9 Connectedness family
- **Connected / disconnected**; **separation** of a space.
- **Clopen set**; connectedness via "only `∅` and `X` are clopen"; via constant maps to `{0,1}`.
- **Connected component**; **quasi-component**.
- **Totally disconnected** — components are singletons.
- **Path; path-connected; path component; polygonally connected** (Searcóid §11.9).
- **Locally connected; locally path-connected.**

### A.1.10 Countability and separability
- **Separable** — has a countable dense subset.
- **Second countable** — has a countable base.
- **Density character** — least cardinality of a dense subset.
- **ε-separated (ε-discrete) set** — `d(x,y) ≥ ε` for distinct points; the standard non-separability witness.

### A.1.11 Constructions
- **Finite product metrics** — `d_1`, `d_2`, `d_∞` on `X₁×…×X_n`; all Lipschitz equivalent.
- **Countable product metric** — `D(x,y) = Σ 2^{-n} min(d_n(x_n,y_n),1)` (or `sup 2^{-n} d̄_n`); induces the product topology.
- **Hilbert cube** — `∏_{n≥1}[0,1/n] ⊂ ℓ²`, homeomorphic to `[0,1]^ℕ`.
- **Baire space `ℕ^ℕ`** — first-difference ultrametric `2^{-min{n : x_n ≠ y_n}}`.
- **Cantor space `{0,1}^ℕ`** — same ultrametric.
- **Quotient (pseudo)metric** — `d̂([x],[y]) = inf` over chains; generally only a pseudometric.
- **Disjoint union / coproduct metric.**
- **Cone / suspension / gluing metrics** (length-space constructions; statement level).
- **Length (intrinsic) metric; geodesic; geodesic space; rectifiable curve; induced length metric.**
- **Snowflake metric `d^α`** for `0 < α ≤ 1`.

### A.1.12 Hyperspaces and space-level metrics
- **Hausdorff distance** `d_H(A,B) = max{ sup_{a∈A} d(a,B), sup_{b∈B} d(A,b) }`; equivalently `inf{ε : A ⊆ B_ε and B ⊆ A_ε}`.
- **Hyperspace `K(X)`** — non-empty compact subsets with `d_H`.
- **Gromov–Hausdorff distance** — `inf` of `d_H(φ(X), ψ(Y))` over isometric embeddings into a common space.
- **ε-correspondence and distortion** — the combinatorial characterisation of `d_GH`.
- **Pointed Gromov–Hausdorff convergence** — for non-compact spaces.
- **Wasserstein / transport metric** (statement level, if the course goes there).

### A.1.13 Function and sequence spaces
- **`B(X,Y)`** — bounded functions with the sup metric `d_∞(f,g) = sup_x d(f(x),g(x))`.
- **`C(X)` / `C(X,Y)` / `C_b(X,Y)`** — continuous (bounded) functions with the sup metric.
- **`C₀(X)`** — continuous functions vanishing at infinity.
- **`ℓ^p`, `1 ≤ p ≤ ∞`** — `p`-summable sequences with `‖x‖_p`; `c`, `c₀`, `c₀₀`.
- **`L^p(μ)`, `1 ≤ p ≤ ∞`** — as a quotient by a.e. equality.
- **`L^p` for `0 < p < 1`** — `d(f,g) = ∫|f−g|^p` is a metric but not a norm (unit ball non-convex).
- **Compact-open topology** and the topology of compact convergence on `C(X,Y)`.
- **Sub-algebra, separating points, vanishing nowhere, self-adjoint sub-algebra, lattice** — the Stone–Weierstrass vocabulary.

---

## A.2 THEOREMS

### A.2.1 Basic metric geometry
- **Reverse triangle inequality** — `|d(x,z) − d(y,z)| ≤ d(x,y)`.
- **`x ↦ d(x,A)` is 1-Lipschitz** — `|d(x,A) − d(y,A)| ≤ d(x,y)`; the workhorse of metric-space proofs.
- **`d(x,A) = 0 ⟺ x ∈ Ā`**; `d(x,A) = d(x,Ā)`.
- **`d` is continuous as a map `X×X → ℝ`**, and 1-Lipschitz for the `d_1` product metric.
- **Diameter of a set equals the diameter of its closure.**
- **Balls are open, closed balls are closed**, and `B̄_r(x) ⊇ closure of B_r(x)` with equality failing in general (discrete metric).

### A.2.2 The metric topology
- **The metric topology is a topology**; open balls form a base.
- **Metric spaces are Hausdorff, first countable, and `T₆` (perfectly normal).**
- **Every metric space is normal** — explicit Urysohn function `f(x) = d(x,A)/(d(x,A)+d(x,B))`.
- **Urysohn's lemma for metric spaces** — the above `f` is continuous, `f|_A = 0`, `f|_B = 1`, and `0 < f < 1` off `A ∪ B` (hence *precise* separation, i.e. perfect normality).
- **Tietze extension theorem** for metric spaces (via Urysohn or directly).
- **Every closed set in a metric space is `G_δ`; every open set is `F_σ`.**
- **Kuratowski closure axioms hold**; `A ⊆ B ⟹ Ā ⊆ B̄`, `overline{A∪B} = Ā∪B̄`, `overline{A∩B} ⊆ Ā∩B̄` with strict inclusion possible.
- **Boundary characterisations** — `∂A = Ā ∩ overline{X∖A}`; `∂A = ∅ ⟺ A` clopen.
- **Sequential characterisation of closure** — `x ∈ Ā ⟺ ∃(a_n) ⊆ A, a_n → x`. *(Needs countable choice; see B.3.)*
- **Metrisability is topological; the metric is not** — homeomorphic spaces need not be isometric.
- **A. H. Stone's theorem** — every metric space is paracompact. *(Not provable in ZF+DC; see B.3.)*
- **Nagata–Smirnov and Bing metrisation theorems** — regular + σ-locally-finite (resp. σ-discrete) base ⟺ metrisable.
- **Urysohn metrisation theorem** — every second-countable regular (`T₃`) space is metrisable, and embeds in the Hilbert cube.

### A.2.3 Equivalence of metrics
- **Lipschitz ⟹ uniform ⟹ topological equivalence**, and both implications are strict.
- **`d`, `min(d,1)` and `d/(1+d)` are uniformly equivalent**, hence topologically equivalent; not Lipschitz equivalent on unbounded spaces.
- **All norms on a finite-dimensional real/complex vector space are equivalent**, hence induce the same topology and the same Cauchy sequences.
- **On a vector space, two norm metrics are topologically equivalent ⟺ Lipschitz equivalent.**
- **Uniform equivalence preserves completeness, total boundedness, uniform continuity and Cauchyness; topological equivalence preserves none of these.**

### A.2.4 Convergence, Cauchy, completeness
- **Limits are unique**; a convergent sequence is Cauchy and bounded.
- **A Cauchy sequence with a convergent subsequence converges.**
- **A subspace of a complete space is complete ⟺ it is closed.**
- **Finite and countable products of complete spaces are complete** (with the standard product metrics).
- **`B(X,Y)` and `C_b(X,Y)` with the sup metric are complete when `Y` is complete.**
- **Uniform limit theorem** — a uniform limit of continuous functions is continuous; hence `C_b(X,Y)` is closed in `B(X,Y)`.
- **Weierstrass M-test** — `‖f_n‖_∞ ≤ M_n`, `ΣM_n < ∞` ⟹ `Σf_n` converges uniformly and absolutely.
- **Dini's theorem** — a monotone pointwise-convergent sequence of continuous functions on a compact space converges uniformly.
- **Cantor's intersection theorem** — in a complete space, a decreasing sequence of non-empty closed sets with `diam → 0` has a one-point intersection; conversely this property implies completeness.
- **Completion: existence** — via equivalence classes of Cauchy sequences, or via the **Kuratowski embedding** `Φ(x)(y) = d(x,y) − d(x₀,y)` into `C_b(X)` followed by closure.
- **Completion: uniqueness** — unique up to a unique isometry fixing `X`, characterised by the universal property that uniformly continuous maps into complete spaces extend uniquely.
- **Uniformly continuous extension from a dense set** — a uniformly continuous `f: A → Y` with `A` dense in `X` and `Y` complete extends uniquely to a uniformly continuous `f̄: X → Y`; the extension is Lipschitz/isometric if `f` was.
- **Uniformly continuous maps send Cauchy sequences to Cauchy sequences** (false for merely continuous maps).
- **A metric space is totally bounded ⟺ its completion is compact ⟺ every sequence has a Cauchy subsequence.**
- **Mazurkiewicz/Alexandrov theorem** — a subspace of a complete metric space is completely metrisable ⟺ it is `G_δ`.
- **A completely metrisable space is a Baire space** (BCT1 below).

### A.2.5 Fixed-point theory
- **Banach fixed-point (contraction mapping) theorem** — a contraction on a non-empty complete space has a unique fixed point, obtained as `lim T^n x₀` from any start.
- **Error estimates** — a priori `d(x*,x_n) ≤ q^n d(x₁,x₀)/(1−q)`; a posteriori `d(x*,x_{n+1}) ≤ q d(x_{n+1},x_n)/(1−q)`.
- **Iterate variant** — if some `T^N` is a contraction, `T` has a unique fixed point.
- **Summable-coefficient variant** — if `d(T^n x,T^n y) ≤ c_n d(x,y)` with `Σc_n < ∞`, `T` has a unique fixed point.
- **Continuous dependence on parameters / stability of the fixed point.**
- **Edelstein's theorem** — on a *compact* metric space, `d(Tx,Ty) < d(x,y)` for `x ≠ y` gives a unique fixed point (completeness alone does not suffice).
- **Bessaga's converse (1959)** — if every iterate `f^n` has a unique fixed point, then for each `q ∈ (0,1)` there is a complete metric on `X` making `f` a `q`-contraction.
- **Weak converse** — a `T₁`-space self-map with a unique globally attracting fixed point admits a metric making it a `1/2`-contraction.
- **Meir–Keeler theorem (1969)** — the Meir–Keeler condition on a complete space gives a unique fixed point (generalises Boyd–Wong and Rakotch).
- **Boyd–Wong and Rakotch theorems** — `d(Tx,Ty) ≤ φ(d(x,y))` for suitable gauge `φ`.
- **Caristi's theorem** — `X` complete, `f: X → [0,∞)` lower semicontinuous, `d(x,Tx) ≤ f(x) − f(Tx)` ⟹ `T` has a fixed point (no continuity assumed on `T`).
- **Weston (1977)** — the conclusion of Caristi's theorem is *equivalent* to completeness of the metric.
- **Ekeland's variational principle** — `X` complete, `f` proper lsc bounded below, `f(x) ≤ inf f + ε`: there is `y` with `f(y) ≤ f(x)`, `d(x,y) ≤ λ`, and `f(z) > f(y) − (ε/λ)d(y,z)` for `z ≠ y`; equivalent to Caristi and to completeness.
- **Hutchinson's theorem** — a finite IFS of contractions induces a contraction on `(K(X), d_H)`, whose unique fixed point is the attractor (Sierpiński gasket, Cantor set, Barnsley fern).
- **Picard–Lindelöf theorem** — `f` continuous in `t`, Lipschitz in `y` ⟹ the IVP `y' = f(t,y)`, `y(t₀)=y₀` has a unique local solution; proved by Banach's theorem applied to the Picard operator `Γφ(t) = y₀ + ∫_{t₀}^{t} f(s,φ(s))ds` on a closed ball of `C(I)`.
- **Contrast: Peano existence theorem** — continuity alone gives existence but not uniqueness (`y' = y^{2/3}`); needs Arzelà–Ascoli, not Banach.
- **Inverse and implicit function theorems** — standard Banach-fixed-point proofs.

### A.2.6 Continuity
- **Four (five) equivalent characterisations of continuity** — (i) ε–δ at every point; (ii) preimages of open sets are open; (iii) preimages of closed sets are closed; (iv) sequential continuity; (v) `f(Ā) ⊆ overline{f(A)}`.
- **Compositions, restrictions, and pastings of continuous maps** (open cover / finite closed cover gluing lemmas).
- **A map into a product is continuous ⟺ each coordinate map is.**
- **Heine–Cantor theorem** — a continuous map on a compact metric space is uniformly continuous.
- **Lipschitz ⟹ Hölder-α (on bounded sets) ⟹ uniformly continuous ⟹ continuous**, all strict.
- **A uniformly continuous image of a totally bounded set is totally bounded** (false for continuous images).
- **A continuous image of a compact set is compact; of a connected set is connected.**
- **Extreme value theorem (EVT)** — a continuous real function on a non-empty compact space is bounded and attains its bounds.
- **Intermediate value theorem** — via connectedness.
- **A continuous bijection from a compact space to a Hausdorff space is a homeomorphism.**
- **Distance-preserving self-maps of a compact metric space are surjective** (hence global isometries); more generally, a non-expansive surjection of a compact metric space is an isometry.
- **Mazur–Ulam theorem** — a surjective isometry between real normed spaces fixing 0 is linear.
- **Isometries are injective, 1-Lipschitz-in-both-directions topological embeddings.**

### A.2.7 Compactness
- **Compact ⟺ sequentially compact ⟺ limit-point compact ⟺ countably compact ⟺ complete + totally bounded**, for metric spaces. *(Needs countable choice; see B.3.)*
- **Lebesgue number lemma** — every open cover of a compact metric space has a Lebesgue number; two standard proofs (via `x ↦ max_i d(x, X∖U_i)` + EVT; via contradiction and sequential compactness).
- **Compact ⟹ closed and bounded** (in any metric space); the converse is exactly the Heine–Borel property.
- **Heine–Borel theorem** — in `ℝ^n`, compact ⟺ closed and bounded; proofs by bisection and by least-upper-bound.
- **Bolzano–Weierstrass theorem** — every bounded sequence in `ℝ^n` has a convergent subsequence.
- **Compact subsets of a Hausdorff (hence metric) space are closed; closed subsets of compact spaces are compact.**
- **Finite intersection property** — `X` compact ⟺ every family of closed sets with the FIP has non-empty intersection.
- **A compact metric space is complete, separable, second countable and Lindelöf.**
- **Tychonoff's theorem** — arbitrary products of compact spaces are compact (see B.3 for the exact choice cost).
- **Countable products of compact metric spaces are compact** — in particular `{0,1}^ℕ` and the Hilbert cube.
- **Riesz's lemma** — for a closed proper subspace `Y ⊂ X` and `0 < α < 1` there is a unit `u` with `d(u,Y) ≥ α`; `α = 1` is attainable iff (sufficiently) reflexive.
- **Riesz's theorem** — a normed space is finite-dimensional ⟺ its closed unit ball is compact; equivalently the identity is a compact operator only in finite dimensions.
- **Local compactness of `ℝ^n`; a normed space is locally compact ⟺ finite-dimensional.**
- **Arzelà–Ascoli theorem** — for `X` compact metric (or compact Hausdorff) and `Y` complete metric, `F ⊆ C(X,Y)` is relatively compact in the sup metric ⟺ `F` is equicontinuous and pointwise relatively compact (pointwise bounded, for `Y = ℝ`).
- **Classical Arzelà–Ascoli** — a uniformly bounded, uniformly equicontinuous sequence in `C[a,b]` has a uniformly convergent subsequence; converse also holds.
- **Locally compact version** — `F ⊆ C(X,Y)` is relatively compact in the compact-open topology ⟺ equicontinuous and pointwise relatively compact.
- **Stone–Weierstrass theorem (real)** — a sub-algebra of `C(X,ℝ)`, `X` compact Hausdorff, containing the constants and separating points, is dense.
- **Stone–Weierstrass (lattice version)** — a lattice `L ⊆ C(X,ℝ)` that can interpolate any two values at any two points is dense.
- **Stone–Weierstrass (complex)** — the self-adjoint (`*`-closed) unital sub-algebra generated by a separating set is dense in `C(X,ℂ)`.
- **Stone–Weierstrass (locally compact)** — a sub-algebra of `C₀(X,ℝ)` separating points and vanishing nowhere is dense.
- **Weierstrass approximation theorem** — polynomials are dense in `C[a,b]`; constructive proof via Bernstein polynomials.
- **`C(X)` is separable for `X` compact metric** (a consequence of Stone–Weierstrass).

### A.2.8 Connectedness
- **The connected subsets of `ℝ` are exactly the intervals.**
- **Continuous images, closures, and unions-with-common-point of connected sets are connected.**
- **Products of connected spaces are connected.**
- **Path-connected ⟹ connected**; the converse fails.
- **Connected components are closed, partition the space, and need not be open** (they are open iff the space is locally connected).
- **A connected open subset of a normed space (or of `ℝ^n`) is path-connected, indeed polygonally connected.**
- **A connected, locally path-connected space is path-connected.**
- **Totally disconnected metric spaces** — `ℚ`, the Cantor set, the `p`-adics, ultrametric spaces in general.

### A.2.9 Separability, second countability, Lindelöf
- **For metric spaces: separable ⟺ second countable ⟺ Lindelöf.** *(Needs countable choice; see B.3.)*
- **Second countable ⟹ separable ⟹ ccc** (in general topological spaces, both strict).
- **Separability is hereditary for metric spaces** (false in general topological spaces).
- **A separable metric space has cardinality at most `𝔠` and embeds in the Hilbert cube.**
- **A metric space is separable ⟺ it has no uncountable `ε`-separated set for any `ε > 0`.**
- **Every compact metric space is separable; every totally bounded metric space is separable.**
- **Every second-countable regular space is metrisable (Urysohn) and hence Polish if complete.**
- **Cantor–Bendixson theorem** — every closed subset of a Polish space is the disjoint union of a perfect set and a countable set; hence the perfect set property.
- **Brouwer's characterisation** — every non-empty compact, perfect, totally disconnected metrisable space is homeomorphic to the Cantor set.
- **The irrationals are homeomorphic to the Baire space `ℕ^ℕ`.**
- **Every Polish space is a continuous image of `ℕ^ℕ`; every compact metric space is a continuous image of the Cantor set.**

### A.2.10 Baire category
- **BCT1** — every completely metrisable (indeed every complete pseudometric) space is a Baire space.
- **BCT2** — every locally compact Hausdorff (more generally locally compact regular) space is a Baire space.
- **Equivalent formulations** — countable unions of nowhere dense sets have empty interior; a non-empty complete metric space is non-meagre in itself; countable intersections of dense open sets are dense.
- **Two standard proofs of BCT1** — (i) nested closed balls with radii `→ 0` plus Cantor's intersection theorem; (ii) the "shrinking neighbourhood" recursion producing a Cauchy sequence.
- **A non-empty complete metric space with no isolated points is uncountable** — hence `ℝ` is uncountable, and no countable complete metric space is perfect.
- **`ℚ` is not completely metrisable; `ℚ` is not `G_δ` in `ℝ`.**
- **The set of continuity points of any function into a metric space is `G_δ`** — hence **there is no function `ℝ → ℝ` continuous exactly at the rationals**, while Thomae's function is continuous exactly at the irrationals.
- **Banach–Mazurkiewicz theorem (1931)** — the nowhere-differentiable functions are comeagre in `C([0,1])` with the sup metric; "most" continuous functions are nowhere differentiable.
- **Uniform boundedness principle / Banach–Steinhaus** — a pointwise-bounded family of bounded operators from a Banach space is uniformly norm-bounded.
- **Open mapping theorem and closed graph theorem** — both from BCT1.
- **A Banach space cannot have countably infinite Hamel dimension.**
- **Existence of a continuous function whose Fourier series diverges at a point** — Banach–Steinhaus, and the divergence set is comeagre.
- **Banach category theorem** — a union of any family of open first-category sets is first category.
- **Osgood's theorem** — a pointwise-convergent sequence of continuous functions is uniformly convergent on a comeagre set.

### A.2.11 Hyperspaces
- **`d_H` is a metric on the non-empty compact subsets** (only a pseudometric on arbitrary bounded subsets, since `d_H(A,Ā)=0`).
- **`X` complete ⟹ `(K(X), d_H)` complete.**
- **`X` compact ⟹ `(K(X), d_H)` compact** (Blaschke selection theorem).
- **`X` separable ⟹ `(K(X), d_H)` separable.**
- **`d_H(A,B) = inf{ε : A ⊆ B_ε, B ⊆ A_ε}`** — the thickening characterisation.
- **`d_GH` is a metric on isometry classes of compact metric spaces**; `d_GH(X,Y) = 0 ⟺ X ≅ Y` isometrically (compactness essential).
- **The Gromov–Hausdorff space is complete, separable, path-connected and geodesic.**
- **Gromov's compactness theorem** — a family of compact metric spaces is relatively compact in `d_GH` iff uniformly bounded diameter and uniformly totally bounded.
- **Correspondence formula** — `d_GH(X,Y) = ½ inf_R dis(R)` over correspondences `R ⊆ X×Y`.

### A.2.12 Function/sequence spaces as metric objects
- **Hölder's and Minkowski's inequalities**; Cauchy–Schwarz as the `p=2` case.
- **Riesz–Fischer theorem** — `L^p(μ)` and `ℓ^p` are complete for `1 ≤ p ≤ ∞`.
- **`ℓ^p` and `L^p[0,1]` are separable for `1 ≤ p < ∞`; `ℓ^∞`, `L^∞` are not.**
- **`ℓ²` is a Hilbert space; `L²` is a Hilbert space; every separable infinite-dimensional Hilbert space is isometrically isomorphic to `ℓ²`.**
- **`c₀` is a closed subspace of `ℓ^∞`; `c₀₀` is dense in `c₀` and in `ℓ^p` for `p < ∞`, not in `ℓ^∞`.**
- **For `0 < p < 1`, `d(f,g) = ∫|f−g|^p` is a translation-invariant metric that is not induced by a norm.**
- **`C[0,1]` with the sup metric is complete and separable; with the `L¹` metric it is neither complete nor closed.**
- **A linear map between normed spaces is continuous ⟺ bounded ⟺ Lipschitz.**
- **Every metric space isometrically embeds in `C_b(X)` (Kuratowski); every separable metric space isometrically embeds in `ℓ^∞`** (Fréchet).
- **Kuratowski–Wojdysławski** — every bounded metric space is isometric to a closed subset of a convex subset of a Banach space.

---

## A.3 EXAMPLES (metric-specific, good library items)

- **`ℝ^n` with `d_1`, `d_2`, `d_∞`** — Lipschitz equivalent, same topology, different balls (diamond / disc / square).
- **Discrete metric on any set** — every subset clopen, complete, bounded, totally bounded ⟺ finite, compact ⟺ finite.
- **`p`-adic metric on `ℚ`** — ultrametric; completion is `ℚ_p`; `ℤ_p` is compact, `ℚ_p` is locally compact and totally disconnected.
- **`ℚ` with the usual metric** — totally disconnected, not complete, not locally compact, meagre in itself, not Baire.
- **Cantor middle-thirds set `C`** — compact, perfect, totally disconnected, nowhere dense, uncountable (`|C| = 𝔠`), Lebesgue-null, Hausdorff dimension `log2/log3`, homeomorphic to `{0,1}^ℕ`, self-similar (IFS attractor).
- **Smith–Volterra–Cantor ("fat Cantor") set** — nowhere dense with positive Lebesgue measure; separates category from measure.
- **Baire space `ℕ^ℕ` with `2^{-min{n: x_n ≠ y_n}}`** — complete ultrametric, homeomorphic to the irrationals, Polish, not locally compact.
- **`C[0,1]` with the sup metric** — complete, separable, non-locally-compact, unit ball non-compact.
- **`ℓ^p`, `L^p`, `c₀`, `c`, `ℓ^∞`** — the canonical separable/non-separable, complete normed examples.
- **Hilbert cube `∏[0,1/n]`** — compact metric, infinite-dimensional, homogeneous (Keller), universal for separable metric spaces.
- **Hausdorff metric on `K(ℝ²)`** — complete; the Sierpiński gasket, Koch curve and Barnsley fern arise as Banach fixed points of Hutchinson operators here.
- **Graph shortest-path metric; word metric on a finitely generated group** — the source of quasi-isometry invariants.
- **Hamming distance on `{0,1}^n`** — finite metric space, coding theory.
- **French railway / SNCF metric** `d(x,y) = ‖x‖+‖y‖` for `x ≠ y` — a genuine metric with wildly non-Euclidean balls; the post-office metric variant.
- **British Rail metric, knight's-move metric on `ℤ²`.**
- **Bounded remetrisation `min(d,1)`** — same topology and same convergent sequences, different boundedness.
- **`d(x,y) = |arctan x − arctan y|` on `ℝ`** — homeomorphic to standard `ℝ`, bounded, not complete.
- **`x ↦ d(x,A)`** — the universal 1-Lipschitz function; underpins normality, Urysohn, Tietze, and Lebesgue number.
- **Thomae's function** — continuous exactly at the irrationals; realises the `G_δ` continuity-set theorem.
- **Weierstrass function `Σ a^n cos(b^n πx)`** — explicit continuous nowhere-differentiable function; contrast with the Baire genericity result.
- **Picard iteration for `y' = y`, `y(0)=1`** — iterates are the Taylor partial sums of `e^t`; a concrete Banach fixed point.
- **`ℓ^∞` with the `{0,1}^ℕ` family** — uncountable 1-separated set, witnessing non-separability.
- **Isometric embedding `X ↪ C_b(X)`, `x ↦ d(x,·) − d(x₀,·)`** — Kuratowski, gives the completion cheaply.

---

## A.4 COUNTEREXAMPLES (metric-specific)

- **Completeness is not topological** — `ℝ ≅ (0,1)` but `ℝ` is complete and `(0,1)` is not.
- **Cauchyness is not topological** — under `d(x,y)=|arctan x − arctan y|`, `(n)` is Cauchy in `ℝ` but not for the usual metric.
- **Boundedness/total boundedness are not topological** — `d` vs `min(d,1)` on `ℝ`.
- **Topologically equivalent but not uniformly equivalent** — `|x−y|` and `|tan x − tan y|` on `(−π/2, π/2)`; also `|x−y|` vs `|e^x−e^y|` on `ℝ`.
- **Uniformly but not Lipschitz equivalent** — `d` and `min(d,1)` on `ℝ`; `d` and `√d` on `ℝ`.
- **Continuous but not uniformly continuous** — `x ↦ x²` on `ℝ`; `x ↦ 1/x` on `(0,1)`; `x ↦ sin(1/x)` on `(0,1)`.
- **Uniformly continuous but not Lipschitz** — `x ↦ √x` on `[0,1]` (Hölder-`1/2` and sharp).
- **Continuous map destroying total boundedness** — `x ↦ 1/x` maps the totally bounded `(0,1)` onto the unbounded `(1,∞)`.
- **Continuous map not preserving Cauchyness** — same example: `(1/n)` is Cauchy, `(n)` is not.
- **Contraction with no fixed point on an incomplete space** — `f(x) = x/2` on `(0,1]`.
- **`d(fx,fy) < d(x,y)` with no fixed point on a complete non-compact space** — `f(x) = x + 1/x` on `[1,∞)`, or `f(x) = √(1+x²)` on `ℝ`; shows Edelstein needs compactness, not completeness.
- **Cantor's intersection fails without `diam → 0`** — `F_n = [n,∞)` in the complete space `ℝ` has empty intersection.
- **Cantor's intersection fails without completeness** — `F_n = (0,1/n]` in `(0,1)`.
- **Closed and bounded but not compact** — the closed unit ball of `ℓ²` (the `e_n` are `√2`-separated); any infinite set with the discrete metric; the unit ball of `C[0,1]`.
- **Bounded but not totally bounded** — an infinite discrete metric space; the unit ball of any infinite-dimensional normed space (Riesz).
- **Totally bounded but not complete** — `(0,1)`, `ℚ ∩ [0,1]`.
- **Complete but not totally bounded** — `ℝ`, `ℓ²`.
- **Baire category fails without completeness** — `ℚ = ⋃_{q} {q}` is meagre in itself.
- **`ℚ` is `F_σ` but not `G_δ` in `ℝ`** — so no `f: ℝ → ℝ` is continuous exactly on `ℚ`.
- **Meagre with full measure / null with second category** — a fat Cantor set is nowhere dense with positive measure; `ℝ∖(⋃ intervals around ℚ)` constructions separate the two ideals.
- **Pointwise but not uniform convergence** — `f_n(x)=x^n` on `[0,1]`, limit discontinuous.
- **Pointwise limit of continuous functions need not be Riemann integrable / limits do not commute** — `f_n(x)=n x e^{-nx²}` style examples.
- **Arzelà–Ascoli sharpness: bounded but not equicontinuous** — `f_n(x)=x^n` or `f_n(x)=sin(nx)` on `[0,1]`; no uniformly convergent subsequence.
- **Arzelà–Ascoli sharpness: equicontinuous and bounded but domain non-compact** — `f_n(x)=f(x−n)` on `ℝ` (translates of a bump).
- **Topologist's sine curve** — closed and connected in `ℝ²`, not path-connected, not locally connected.
- **Comb space / deleted comb space** — connected, path-connected but not locally path-connected (comb) / connected but not path-connected (deleted).
- **Non-separable metric space** — `ℓ^∞`; `B([0,1])` with the sup metric; any uncountable discrete space.
- **Isometric embedding of a space into itself that is not surjective** — the right shift on `ℓ²`; impossible on a compact metric space.
- **Homeomorphic but not uniformly homeomorphic / not bilipschitz** — `ℝ` and `(0,1)`; `ℝ` and `ℝ` under `d` vs `√d`.
- **`d_H` is only a pseudometric on general bounded sets** — `d_H((0,1),[0,1]) = 0`.
- **Gromov–Hausdorff `d_GH = 0` without isometry, for non-compact spaces** — motivates the pointed/compact restriction.
- **Sequential compactness ≠ compactness outside the metric world** — `ω₁` with the order topology is sequentially compact but not compact; `[0,1]^{[0,1]}` is compact but not sequentially compact. (Both non-metrisable, which is exactly the point.)
- **Closed ball ⊋ closure of the open ball** — in the discrete metric, `B̄_1(x) = X` but `overline{B_1(x)} = {x}`.
- **`d(A,B) = 0` for disjoint closed sets** — `A = ℤ`, `B = {n + 1/n : n ≥ 2}` in `ℝ`; shows `d(·,·)` on sets is not a metric and that "closed + disjoint" does not give positive separation without compactness.
- **A metric space where no two distinct points are joined by a geodesic** — `ℚ`, or any totally disconnected space; separates metric from length space.

---

## A.5 SOURCE NOTES — PART A

- **Sutherland, *Introduction to Metric and Topological Spaces*** (Oxford, 2nd ed.) — chapters: Introduction · Notation and terminology · More on sets and functions · Review of some real analysis · **Metric spaces** · More concepts in metric spaces · Topological spaces · Continuity in topological spaces; bases · Some concepts in topological spaces · Subspaces and product spaces · The Hausdorff condition · Connected spaces · Compact spaces · Sequential compactness · Quotient spaces and surfaces · Uniform convergence · **Complete metric spaces**. Note the deliberate split: metric spaces up front, completeness saved for the last chapter. This is the Cambridge IB set text.
- **Searcóid, *Metric Spaces* (Springer SUMS, 2007)** — the most granular source and the best skeleton for a library: Ch.1 Metrics (incl. §1.4 Isometries, §1.6 Metrics on Products, §1.7 Metrics and Norms) · Ch.2 Distance (diameter, distance point-to-set, distance set-to-set, isolated/accumulation points, nearest points) · Ch.3 Boundary (boundary before closure/interior) · Ch.4 Open, Closed and Dense Subsets (incl. §4.7 Nests of Closed Subsets) · Ch.5 Balls · Ch.6 Convergence (incl. §6.8–6.11 Cauchy sequences) · Ch.7 Bounds (incl. **§7.3 The Hausdorff Metric**, §7.7 Uniform/Pointwise Convergence, §7.8–7.10 Total Boundedness) · Ch.8 Continuity · Ch.9 Uniform Continuity (incl. §9.4 Lipschitz, §9.9 Strong Contractions) · Ch.10 Completeness (§10.7 Completeness of the Hausdorff Metric, §10.9 Extending Continuous Functions, §10.10 Banach, §10.11 Baire, §10.12 Completion) · Ch.11 Connectedness (incl. §11.9 Polygonal Connectedness) · Ch.12 Compactness (incl. §12.8 Compact Subsets of Function Spaces, §12.10 Finite-Dimensional Normed Linear Spaces) · **Ch.13 Equivalence (§13.1 topological / §13.2 uniform / §13.3 Lipschitz / §13.4 "The Truth about Conserving Metrics")**. Ch.13 is the cleanest published treatment of the three-tier equivalence hierarchy.
- **Rudin, *Principles of Mathematical Analysis* Ch.2 "Basic Topology"** — subheadings: Finite, Countable, and Uncountable Sets (2.1–2.14) · Metric Spaces (2.15–2.30) · Compact Sets (2.31–2.42) · Perfect Sets (2.43–2.44) · Connected Sets (2.45–2.47). Ch.7 "Sequences and Series of Functions": Discussion of Main Problem · Uniform Convergence · UC and Continuity · UC and Integration · UC and Differentiation · **Equicontinuous Families of Functions** (Arzelà–Ascoli lives here, with no separate heading) · **The Stone–Weierstrass Theorem**. Rudin does *not* do Baire category or Banach fixed point in Ch.2.
- **Munkres, *Topology* 2nd ed.** — Ch.2 (Topological Spaces and Continuous Functions): §12 Topological Spaces · §13 Basis · §14 Order Topology · §15 Product Topology on X×Y · §16 Subspace Topology · §17 Closed Sets and Limit Points · §18 Continuous Functions · §19 The Product Topology · **§20 The Metric Topology** · **§21 The Metric Topology (continued)** · §22 Quotient Topology. Ch.7 (Complete Metric Spaces and Function Spaces): **§43 Complete Metric Spaces** · §44 A Space-Filling Curve* · **§45 Compactness in Metric Spaces** · **§46 Pointwise and Compact Convergence** · **§47 Ascoli's Theorem** — the chapter ends at §47. Correction worth noting: **§48 Baire Spaces** and **§49 A Nowhere-Differentiable Function*** are in **Ch.8 (Baire Spaces and Dimension Theory)**, not Ch.7; §50 is Introduction to Dimension Theory. Munkres §43 contains the completion theorem via the Kuratowski-style embedding.
- **Pugh, *Real Mathematical Analysis* Ch.2 "A Taste of Topology"** — §1 Metric Space Concepts (continuity is inside this section, not separate) · §2 Compactness · §3 Connectedness · §4 Coverings · §5 Cantor Sets · §6* Cantor Set Lore · §7* Completion. The starred Cantor Set Lore section is an unusually rich source of metric counterexamples.
- **Lebl, *Basic Analysis*** — the metric-spaces material is **Ch.7 of Volume I** (`realanal.pdf`), not Volume II: 7.1 Metric spaces · 7.2 Open and closed sets (topology, connected sets, closure and boundary) · 7.3 Sequences and convergence · 7.4 Completeness and compactness · 7.5 Continuous functions. Freely licensed, so quotable.
- **Kaplansky, *Set Theory and Metric Spaces*** — based on Spanier's course notes; six numbered chapters plus "Examples of Metric Spaces" (p.117) and "The Transition to Topological Spaces" (p.127). Distinctive for doing the AC ⟺ Zorn ⟺ well-ordering equivalence *inside* a metric-spaces book, which is exactly the Part A / Part B bridge. Full TOC not machine-recoverable this session (all scans access-restricted).
- **Copson, *Metric Spaces* (Cambridge Tracts 57)** — 1 Introduction · 2 Metric Spaces · 3 Open and Closed Sets · 4 Complete Metric Spaces · 5 Connected Sets · 6 Compactness · 7 Functions and Mappings · 8 **Some Applications** · 9 Further Developments. Ch.8 is the applications chapter (integral equations, ODEs).
- **Bryant, *Metric Spaces: Iteration and Application*** — 1 Sequences by iteration · 2 Metric spaces · 3 **The three Cs** (completeness, compactness, connectedness) · 4 **The contraction mapping principle** · 5 What makes analysis work? Structured entirely around iteration/fixed points; the best source for Picard–Lindelöf, IFS and numerical applications.
- **Cambridge IB Metric and Topological Spaces** — Körner's notes (`dpmms.cam.ac.uk/~twk10/Top.pdf`): 2 What is a metric? · 3 Continuity and open sets for metric spaces · 4 Closed sets for metric spaces · 5 Topological spaces · 6 Interior and closure · 7 More on topological structures · 8 Hausdorff spaces · 9 Compactness · 10 Products of compact spaces · 11 Connectedness · **12 Compactness in metric spaces** · 13 The language of neighbourhoods · 19 Executive summary. Also Rasmussen's lecture notes (`dec41.user.srcf.net/notes/IB_E/metric_and_topological_spaces.pdf`).
- **Oxford A2.1 Metric Spaces (2025-26) official synopsis** — six blocks: (1) real differentiability in `ℝ²` and the inverse function theorem [4 lectures]; (2) metric spaces, norms, `ℓ¹/ℓ²/ℓ^∞`, product metrics, balls, limits, uniform continuity, **function spaces of continuous and of bounded real-valued functions**, isometries and homeomorphisms, open/closed sets, preimage characterisation, interiors/closures/limit points [3]; (3) **completeness (but explicitly not completion)**, completeness of bounded and of bounded-continuous function spaces, Lipschitz maps and contractions, contraction mapping theorem [2.5]; (4) connectedness and path-connectedness, closure of a connected set, unions, continuous images, connected open subsets of a normed space are path-connected [2]; (5) sequential compactness first, preservation under continuous maps, continuity ⟹ uniform continuity on sequentially compact sets, **sequential compactness ⟺ complete + totally bounded**, then the open-cover definition, Heine–Borel for `ℝ^n` stated, compact ⟹ sequentially compact proved and the converse only stated [2.5]; (6) Riemann sphere, stereographic projection, Möbius transformations [2]. Useful as a "minimum rigorous course" boundary.
- **nLab** — `metric space` gives the Lawvere-enriched view (`[0,∞]`-enriched categories, `Met` with short maps as the "correct" category, Cauchy completion as enriched Cauchy/Karoubi completion) and the full weakening lattice (pseudo / quasi / extended / Lawvere metric spaces).
- **Wikipedia** — `Metric space` for the generalisation lattice and the equivalence hierarchy; `Hausdorff distance`, `Gromov–Hausdorff convergence`, `Arzelà–Ascoli theorem`, `Stone–Weierstrass theorem`, `Banach fixed-point theorem` (Bessaga converse, Edelstein, Meir–Keeler, Boyd–Wong, Rakotch), `Caristi fixed-point theorem` (Weston's equivalence with completeness), `Riesz's lemma`, `Complete metric space`, `Baire category theorem`, `Meagre set`, `Gδ set`, `Polish space`, `Ultrametric space`, `Hilbert cube`, `Totally bounded space`, `Heine–Borel theorem`, `Lebesgue's number lemma`, `Kuratowski embedding`.

---
---

# PART B — SET-THEORETIC PREREQUISITES FOR A GENERAL TOPOLOGY TRACK

## B.1 DEFINITIONS

### B.1.1 The ambient axioms
- **ZF axioms** — extensionality, regularity/foundation, separation schema, pairing, union, replacement schema, infinity, power set.
- **ZFC** — ZF + AC (often stated as: every set admits a well-ordering).
- **Class, proper class, `V`, `Ord`** — needed to state transfinite recursion.
- **Cumulative hierarchy `V_α`, rank** — defined by transfinite recursion; requires replacement.
- **Definable class function `G: V → V`** — the input datum of transfinite recursion.

### B.1.2 Orders
- **Partial order** — reflexive, antisymmetric, transitive; **strict partial order** — irreflexive, transitive.
- **Total (linear) order** — partial order with comparability.
- **Chain; antichain; upper bound; maximal element; greatest element; least upper bound.**
- **Well-order** — a total order in which every non-empty subset has a least element.
- **Well-founded relation** — every non-empty subset has an `R`-minimal element.
- **Initial segment `pred(x) = {y : y < x}`; proper initial segment.**
- **Order-preserving map; order isomorphism; order type.**
- **Cofinal subset; cofinality `cf(α)`; regular vs singular ordinal/cardinal.**
- **Lexicographic order on a product; order topology on a linearly ordered set.**
- **Directed set; net** (needed for the topology track proper).
- **Filter; ultrafilter; principal vs free ultrafilter; filter base; Fréchet filter.**
- **Boolean algebra; ideal; prime ideal; maximal ideal** — the BPI vocabulary.
- **Finite character** — a family `F` such that `A ∈ F ⟺ every finite subset of A is in F`.

### B.1.3 Ordinals
- **Von Neumann ordinal** — a transitive set strictly well-ordered by `∈`.
- **Successor ordinal `α+1 = α ∪ {α}`; limit ordinal; `0`; `ω`.**
- **`α < β ⟺ α ∈ β`; every ordinal is the set of all smaller ordinals.**
- **Transfinite sequence** — a function with ordinal domain.
- **Ordinal addition, multiplication, exponentiation** — both order-theoretically (concatenation, lexicographic product, finite-support functions) and by transfinite recursion.
- **Cantor normal form** — `α = ω^{β₁}c₁ + … + ω^{β_k}c_k` with `β₁ > … > β_k ≥ 0` and `c_i ∈ ℕ∖{0}`.
- **Natural (Hessenberg) sum and product** — commutative/associative alternatives.
- **Epsilon numbers; `ε₀ = ω^{ω^{ω^{…}}}`.**
- **Initial ordinal / cardinal-as-ordinal; `ω_α`.**
- **`ω₁`** — the first uncountable ordinal, i.e. the set of all countable ordinals.
- **`[0,ω₁)` and `[0,ω₁]`** — the ordinal spaces with the order topology.
- **Closed unbounded (club) set; stationary set** (optional; needed for Tychonoff plank / pressing-down arguments).
- **Long ray `L⁺ = ω₁ × [0,1)`** with the lexicographic order topology, minus its least element for the open ray.
- **Long line** — two long rays glued at their origins, one reversed.
- **Extended long ray `L*`** — the one-point compactification.
- **Hartogs number `ℵ(X)`** — the least ordinal `α` with no injection `α ↪ X`.

### B.1.4 Cardinals
- **Equinumerosity `A ∼ B`** — existence of a bijection.
- **Cardinal (von Neumann assignment)** — the least ordinal equinumerous with the set; requires AC to assign one to every set.
- **Scott cardinal (Scott's trick)** — the equinumerosity class restricted to minimal rank; the choice-free substitute.
- **Cardinal assignment (weak/strong)** — `A ↦ |A|` with `A ∼ |A|`, and additionally `A ∼ B ⟺ |A| = |B|`.
- **Cardinal arithmetic** — `κ+μ = |X ⊔ Y|`, `κ·μ = |X × Y|`, `κ^μ = |X^Y|`.
- **Aleph numbers `ℵ₀, ℵ₁, …, ℵ_α`; beth numbers `ℶ_α`.**
- **Successor cardinal `κ⁺`; limit cardinal; inaccessible cardinal** (optional).
- **Finite, countable, countably infinite, uncountable.**
- **Dedekind-infinite** — in bijection with a proper subset; **Dedekind-finite**.
- **The continuum `𝔠 = 2^{ℵ₀}`; continuum hypothesis; generalised continuum hypothesis.**
- **Cofinality of a cardinal; regular/singular cardinal.**

### B.1.5 Choice principles
- **AC** — every family of non-empty sets has a choice function; equivalently non-empty products.
- **Choice function** — `f` on a family `F` with `f(S) ∈ S` for all `S ∈ F`.
- **AC_ω (countable choice, CC)** — AC restricted to countable families.
- **AC_ω(ℝ) / CC(ℝ)** — countable choice for families of sets of reals.
- **DC (dependent choice)** — for a total relation `R` on non-empty `X`, there is `(x_n)` with `x_n R x_{n+1}` for all `n` (and `x₀` may be prescribed).
- **DC_κ** — the `κ`-length generalisation.
- **BPI / Boolean prime ideal theorem** — every proper ideal in a Boolean algebra extends to a prime ideal.
- **UF / ultrafilter lemma** — every filter on a set extends to an ultrafilter; equivalent to BPI.
- **AC_fin** — choice for families of finite sets; **AC_n** — for families of `n`-element sets.
- **Zorn's lemma** — a non-empty poset in which every chain has an upper bound has a maximal element.
- **Hausdorff maximal principle** — every chain in a poset is contained in a maximal chain.
- **Teichmüller–Tukey lemma** — every non-empty family of finite character has an ⊆-maximal element.
- **Kuratowski's lemma** — the union-closed-family variant of the maximal chain principle.
- **Well-ordering theorem** — every set can be well-ordered.
- **Trichotomy / cardinal comparability** — for all `κ, μ`: `κ ≤ μ` or `μ ≤ κ`.
- **Every surjection splits** — every onto `f: S → T` has a right inverse.
- **Alexander subbase lemma** — if every cover by subbasic open sets has a finite subcover, the space is compact.

---

## B.2 THEOREMS

### B.2.1 Orders and well-orders
- **Every well-ordered set is order-isomorphic to a unique ordinal** (Mostowski collapse / representation theorem).
- **No well-ordered set is order-isomorphic to a proper initial segment of itself**; an order isomorphism between well-orders is unique.
- **Comparability of well-orders** — given two well-orders, exactly one of: they are isomorphic, or one is isomorphic to a proper initial segment of the other. *(ZF.)*
- **Burali-Forti** — `Ord` is not a set (the class of ordinals is proper).
- **Every set of ordinals has a supremum (its union) and, if non-empty, a least element.**
- **A total order is a well-order ⟺ it has no strictly decreasing `ω`-sequence.** *(The ⟸ direction needs DC.)*
- **Order topology basics** — every linearly ordered space is Hausdorff and normal; ordinal spaces `[0,α]` are compact, `[0,α)` is compact iff `α` is a successor.

### B.2.2 Ordinals, induction, recursion
- **Transfinite induction** — if `P(α)` holds whenever `P(β)` holds for all `β < α`, then `P` holds for all ordinals; the standard three-case packaging (zero / successor / limit).
- **Transfinite recursion theorem** — for a class function `G: V → V` there is a unique `F: Ord → V` with `F(α) = G(F↾α)` for all `α`. *(Uses replacement; needs no choice.)*
- **Recursion on a well-founded relation; `∈`-induction from foundation.**
- **Every ordinal is either `0`, a successor, or a limit.**
- **Ordinal arithmetic is associative; addition and multiplication are left-continuous and strictly monotone in the right argument.**
- **Ordinal arithmetic is not commutative** — `1 + ω = ω ≠ ω + 1`; `2 · ω = ω ≠ ω · 2 = ω + ω`.
- **Left distributivity holds `α(β+γ) = αβ + αγ`; right distributivity fails.**
- **Cantor normal form theorem** — every ordinal has a unique such representation.
- **Subtraction/division algorithms for ordinals; `ε₀` is the least fixed point of `α ↦ ω^α`.**
- **`ω₁` exists** — as the Hartogs number of `ℕ` (or of `ℝ`); provable in **ZF**, no choice.
- **`ω₁` is a limit ordinal, and every countable subset of `ω₁` is bounded.** *(This uses AC_ω; see B.3.)*
- **`[0,ω₁)` is sequentially compact, countably compact, first countable, normal — but not compact, not Lindelöf, not separable, not second countable, not metrisable.**
- **Long line: construction and properties** — `L⁺ = ω₁ × [0,1)` lexicographically; `L` is a non-metrisable 1-manifold, sequentially compact, first countable, normal, locally homeomorphic to `ℝ`, not paracompact, not Lindelöf, not second countable, admits no Riemannian metric; every continuous `L → ℝ` is eventually constant; `L*` (one-point compactification of the closed long ray) is compact but not path-connected.
- **Tychonoff plank `[0,ω₁] × [0,ω] ∖ {(ω₁,ω)}`** — the standard non-normal-subspace-of-compact-Hausdorff example, built from `ω₁`.

### B.2.3 Cardinals
- **Cantor–Schröder–Bernstein** — injections both ways give a bijection. **Provable in ZF, no choice** (König's proof).
- **Cantor's theorem** — `|X| < |P(X)| = |2^X|` for every set `X`. **ZF.**
- **`ℝ` is uncountable; `|ℝ| = 2^{ℵ₀}`.** **ZF.**
- **`ℚ` and `ℕ×ℕ` are countable; `ℕ^ℕ` and `2^ℕ` have cardinality `𝔠`.** **ZF.**
- **Hartogs's theorem** — `ℵ(X)` exists for every `X`, **without AC**; and trichotomy for cardinals implies the well-ordering theorem, hence AC (Hartogs 1915).
- **Cardinal arithmetic under AC** — for infinite `κ, μ`: `κ + μ = κ · μ = max{κ, μ}`.
- **Tarski (1924)** — `κ · κ = κ` for all infinite `κ` is *equivalent* to AC.
- **`κ^μ` computations; `2^{ℵ₀} = ℵ₀^{ℵ₀} = 𝔠`; `𝔠^{ℵ₀} = 𝔠`.**
- **König's theorem** — `κ < κ^{cf(κ)}`; hence `cf(2^{ℵ₀}) > ℵ₀`, so `2^{ℵ₀} ≠ ℵ_ω`.
- **CH and GCH are independent of ZFC** (Gödel 1938, Cohen 1963); **GCH implies AC** (Sierpiński).
- **Every infinite set has a countably infinite subset** ⟺ every infinite set is Dedekind-infinite. *(Not ZF; follows from AC_ω.)*
- **A countable union of countable sets is countable.** *(Not ZF; follows from AC_ω.)*
- **The cardinality of a separable metric space is at most `𝔠`; of a compact Hausdorff first-countable space at most `𝔠`.**

### B.2.4 AC and its equivalents
- **AC ⟺ Zorn's lemma ⟺ well-ordering theorem ⟺ Hausdorff maximal principle ⟺ Teichmüller–Tukey lemma ⟺ Kuratowski's lemma.**
- **AC ⟺ every surjection splits ⟺ every product of non-empty sets is non-empty ⟺ cardinal trichotomy.**
- **AC ⟺ every vector space has a basis** (Blass 1984) **⟺ every non-trivial unital ring has a maximal ideal** (Krull's theorem; Hodges 1979).
- **AC ⟺ Tychonoff's theorem** (Kelley 1950 for the ⟹ direction) **⟺ Alexander's subbase lemma.**
- **Zorn ⟹ AC** — order partial choice functions by extension; a maximal one has full domain.
- **AC ⟹ Zorn (proof sketch)** — fix a choice function `c`; define `f(x) = x` if `x` is maximal, else `f(x) = c({y : y > x})`; build a strictly increasing transfinite sequence by recursion (successor step `x_{α+1} = f(x_α)`, limit step an upper bound of the chain built so far); by Hartogs/replacement the sequence cannot be strictly increasing through all ordinals, so some `x_β = f(x_β)`, i.e. `x_β` is maximal. The Bourbaki–Witt fixed-point theorem is the choice-free skeleton of this argument.
- **Well-ordering ⟹ AC** — well-order the union and pick least elements.
- **AC ⟹ well-ordering** — via Zorn on partial well-orderings, or by transfinite recursion using a choice function.
- **Zermelo's two proofs (1904, 1908) of the well-ordering theorem.**
- **Standard topology applications of Zorn** — existence of ultrafilters, maximal filters/ideals, Tychonoff via Zorn on partial "convergence assignments" (Munkres), bases of vector spaces, Hamel bases, Hahn–Banach, maximal chains in the Alexander subbase argument.

### B.2.5 Strictly weaker principles
- **AC ⟹ BPI ⟹ AC_fin**, all strict; **BPI does not imply AC** (Halpern–Lévy).
- **BPI ⟺ ultrafilter lemma ⟺ Stone representation theorem ⟺ compactness theorem for propositional/first-order logic ⟺ Tychonoff for compact Hausdorff spaces ⟺ Stone–Čech compactification exists ⟺ Banach–Alaoglu ⟺ de Bruijn–Erdős colouring theorem ⟺ "any two bases of a vector space have the same cardinality".**
- **BPI ⟹ Hahn–Banach** (Luxemburg 1962); **Hahn–Banach is strictly weaker than BPI** (Pincus) and not provable in ZF (it implies non-measurable sets: Foreman–Wehrung 1991, Pawlikowski 1991).
- **BPI ⟹ existence of algebraic closures, existence of non-principal ultrafilters on `ℕ`, non-trivial ultraproducts, Vitali/non-measurable sets, Banach–Tarski.**
- **BPI does not imply AC_ω, and AC_ω does not imply BPI** — the two are incomparable.
- **AC ⟹ DC ⟹ AC_ω**, both strict.
- **DC ⟺ Baire category theorem for complete metric spaces** (Blair 1977) **⟺ downward Löwenheim–Skolem ⟺ every pruned tree of height `ω` has a branch.**
- **AC_ω ⟺ every second-countable space is separable ⟺ every σ-compact space is Lindelöf ⟺ every sequentially continuous real-valued function on a metric space is continuous ⟺ every accumulation point of a subset of a metric space is a sequential limit from that subset ⟺ Rasiowa–Sikorski lemma.**
- **AC_ω ⟹ countable unions of countable sets are countable**, and ⟹ every infinite set is Dedekind-infinite; both converses fail.
- **Solovay's model** — ZF + DC is consistent with "every set of reals is Lebesgue measurable and has the Baire property"; hence Vitali/Banach–Tarski need more than DC.
- **Feferman–Lévy model** — ZF where `ℝ` is a countable union of countable sets and `ℵ₁` is singular of cofinality `ω`; kills CUC, kills regularity of `ω₁`.
- **Cohen's first model** — ZF with an infinite Dedekind-finite set of reals; kills AC_ω(ℝ).

---

## B.3 TABLE — TOPOLOGY/ANALYSIS THEOREM → EXACT CHOICE PRINCIPLE

Legend: **⟺ P** = equivalent to P over ZF · **⟸ P** = follows from P, strictly weaker · **ZF** = choice-free · **[V]** = flagged, verify before publishing.

| Theorem | Exact principle | Status | Attribution / note |
|---|---|---|---|
| Tychonoff, arbitrary spaces | AC | ⟺ AC | Kelley 1950 (cofinite topology on `X ∪ {∞}`) |
| Tychonoff, `T₁` spaces | AC | ⟺ AC | Kelley's witnesses are `T₁` |
| Tychonoff, compact **Hausdorff** spaces | BPI / ultrafilter lemma | ⟺ BPI | Łoś–Ryll-Nardzewski 1954; Rubin–Scott 1954 |
| Tychonoff for **locales** (pointfree) | none | ZF, even constructive | nLab |
| Alexander subbase lemma | AC | ⟺ AC | implies Tychonoff, implied by Zorn |
| Tychonoff, finite products | none | ZF | |
| Compactness of `[0,1]`, `[a,b]`, `[0,1]^n`; Heine–Borel in `ℝ^n` | none | ZF | bisection / lub proof is explicit |
| Compactness of `2^ℕ` (Cantor space) and of `[0,1]^ℕ` (Hilbert cube) | none | ZF | binary tree has a canonical leftmost branch; Hilbert cube is a continuous image of `2^ℕ` |
| "Closed + bounded ⟹ sequentially compact" converse in `ℝ` | AC_ω(ℝ) | not ZF | there is a ZF model with a sequentially compact subset of `ℝ` that is neither closed nor bounded |
| Every filter extends to an ultrafilter | BPI | ⟺ BPI | Tarski 1930 |
| Free ultrafilters on `ℕ` exist | ⟸ BPI | not ZF | consistent with ZF+DC that none exist |
| Stone representation theorem | BPI | ⟺ BPI | |
| Stone–Čech compactification exists | BPI | ⟺ BPI | nLab |
| Banach–Alaoglu | BPI | ⟺ BPI | nLab |
| Compactness theorem, first-order/propositional logic | BPI | ⟺ BPI | |
| Hahn–Banach | ⟸ BPI | strictly weaker than BPI; not ZF | Luxemburg 1962; Pincus; implies non-measurable sets |
| **BCT1** — complete metric ⟹ Baire | DC | ⟺ DC | Blair 1977 |
| **BCT1 restricted** — *separable* complete metric (`ℝ`, `2^ω`, `ω^ω`, separable Hilbert) | none | ZF | canonical enumeration replaces the choices |
| **BCT2** — locally compact Hausdorff ⟹ Baire | ⟸ DC | not ZF in general | compact-Hausdorff sub-case: **[V]** — Herrlich reports a ZF proof; confirm before asserting |
| Uniform boundedness / Banach–Steinhaus, open mapping, closed graph | ⟸ DC | via BCT1 | separable-domain versions are ZF |
| "Generic continuous function is nowhere differentiable" | ⟸ DC | via BCT1 on `C[0,1]` (separable ⟹ ZF suffices) | Banach 1931, Mazurkiewicz 1931 |
| Metric: compact ⟺ sequentially compact ⟺ countably compact ⟺ limit-point compact | AC_ω | not ZF | the standard subsequence extraction |
| Metric: compact ⟺ complete + totally bounded | AC_ω | not ZF | same reason |
| Metric: sequential closure = closure (accumulation point is a sequential limit) | AC_ω | ⟺ AC_ω | |
| Metric: sequential continuity ⟹ continuity (real-valued) | AC_ω | ⟺ AC_ω | |
| Metric: separable ⟺ second countable ⟺ Lindelöf | AC_ω | ⟺ AC_ω ("2nd ctble ⟹ separable") | |
| σ-compact ⟹ Lindelöf | AC_ω | ⟺ AC_ω | |
| Cantor intersection theorem (nested closed, `diam → 0`) | ⟸ AC_ω | **[V]** — the usual proof picks `x_n ∈ F_n`; classify precisely before publishing | |
| Existence + uniqueness of the metric completion | none | ZF via Kuratowski embedding into `C_b(X)` — **[V]**, the Cauchy-sequence construction is the one that leans on AC_ω | |
| Every metric space is normal / perfectly normal / `T₆` | none | ZF | `f = d(·,A)/(d(·,A)+d(·,B))` is explicit |
| Urysohn's lemma, general normal spaces | ⟸ DC | the dyadic-rational recursion makes choices | metric case is ZF (previous row) |
| Urysohn metrisation theorem | ⟸ AC_ω | choosing Urysohn functions for countably many basis pairs — **[V]** | |
| A. H. Stone: every metric space is paracompact | AC | **not provable in ZF+DC** | Good–Tree–Watson 1998; M. E. Rudin's elementary proof uses a well-ordering |
| Arzelà–Ascoli | ⟸ AC_ω / DC | the diagonal argument — **[V]** for the exact classification | |
| Stone–Weierstrass on compact metric `X` | ⟸ DC at most | **[V]** — likely ZF for separable/compact metric | |
| Countable union of countable sets is countable | ⟸ AC_ω | **not ZF**; strictly weaker than AC_ω | Feferman–Lévy: `ℝ` can be a countable union of countable sets |
| `ℝ` is uncountable | none | ZF | Cantor diagonal |
| Every infinite set has a countably infinite subset | ⟸ AC_ω | not ZF; strictly weaker than AC_ω | Cohen's first model |
| `ω₁` exists | none | ZF | Hartogs number |
| `ω₁` is regular (countable subsets are bounded) | ⟸ AC_ω | fails in Feferman–Lévy (`cf(ω₁) = ω`) | |
| Cantor–Schröder–Bernstein | none | ZF | König's proof |
| Cantor's theorem `|X| < |2^X|` | none | ZF | |
| Cardinal trichotomy / comparability | AC | ⟺ AC | Hartogs 1915 |
| `κ · κ = κ` for infinite `κ` | AC | ⟺ AC | Tarski 1924 |
| Every vector space has a basis | AC | ⟺ AC | Blass 1984 |
| Every non-trivial unital ring has a maximal ideal (Krull) | AC | ⟺ AC | Hodges 1979 |
| Every surjection splits | AC | ⟺ AC | |
| Every field has an algebraic closure (existence) | ⟸ BPI | not ZF; *uniqueness* needs more than BPI | |
| Every Hilbert space has an orthonormal basis | AC | ⟺ AC (Bleicher) — **[V]** | trivially ⟸ Zorn |
| Existence of a non-measurable set / Vitali set | ⟸ BPI | not ZF+DC | Solovay 1970 |
| Banach–Tarski | ⟸ BPI | not ZF+DC | |
| Downward Löwenheim–Skolem | DC | ⟺ DC | |
| König's lemma (finitely branching trees) | ⟸ AC_ω | ZF for trees over a well-ordered alphabet (e.g. `2^{<ω}`) | |
| Nielsen–Schreier (subgroups of free groups are free) | ⟸ AC | not ZF | |

---

## B.4 EXAMPLES AND COUNTEREXAMPLES — PART B

### Examples
- **`ω`, `ω+1`, `ω·2`, `ω²`, `ω^ω`, `ε₀`** — the concrete small ordinals; `ω+1` as a compact space, `ω` as a discrete one.
- **`ω₁`** — the least uncountable ordinal; every proper initial segment is countable.
- **`[0,ω₁)` with the order topology** — sequentially compact, countably compact, first countable, normal, not compact, not Lindelöf, not separable, not metrisable.
- **`[0,ω₁]`** — compact Hausdorff, non-metrisable, non-first-countable at `ω₁`.
- **The long line and long ray** — `ω₁ × [0,1)` lexicographic; a non-metrisable 1-manifold; every continuous real function is eventually constant.
- **Tychonoff plank** — `[0,ω₁]×[0,ω] ∖ {(ω₁,ω)}`: compact Hausdorff space with a non-normal subspace.
- **`ℕ`, `ℚ`, the algebraic numbers** — countable; explicit bijections need no choice.
- **`ℝ`, `2^ℕ`, `ℕ^ℕ`, `P(ℕ)`** — cardinality `𝔠`, all in explicit bijection.
- **The Hartogs number of `ℝ`** — an explicit uncountable ordinal built without choice.
- **A finite family of non-empty sets always has a choice function** — ZF, by induction; the point where "obvious" stops.
- **A family of non-empty sets of *naturals* has a canonical choice function** (take the least element) — ZF; the reason `AC_ω(ℕ)` is free.
- **A family of non-empty *closed* subsets of `ℝ^n`** — no canonical choice in general, but `AC` for families of non-empty *open* intervals with rational endpoints is free.
- **`c: P(X)∖{∅} → X` from a well-ordering of `X`** — the "well-ordering ⟹ AC" example.
- **Bourbaki–Witt fixed point theorem** — a choice-free fixed-point theorem for progressive maps on chain-complete posets, the engine of the AC ⟹ Zorn proof.

### Counterexamples / independence phenomena
- **Russell's socks** — a countably infinite family of *pairs of socks* with no choice function is consistent with ZF (pairs of shoes are fine: "pick the left one" is a definable choice).
- **Cohen's first model** — an infinite Dedekind-finite set of reals: an infinite set of reals with no countably infinite subset, and no injection `ℕ ↪ A`.
- **Feferman–Lévy model** — `ℝ` is a countable union of countable sets, and `ℵ₁` is singular with `cf(ℵ₁) = ω`; so "countable union of countable sets is countable" is not a theorem of ZF, and neither is "`ω₁` is regular".
- **A ZF model in which `ℝ` has a sequentially compact subset that is neither closed nor bounded** — the failure of Heine–Borel's converse without choice.
- **A ZF model in which some metric space is not paracompact** — Good–Tree–Watson 1998, refuting Stone's theorem in ZF+DC.
- **Solovay's model (ZF+DC)** — every set of reals is Lebesgue measurable and has the Baire property; hence no Vitali set, no Banach–Tarski, and Hahn–Banach fails.
- **A model of ZF+BPI where AC fails** (Halpern–Lévy) — BPI is strictly weaker than AC; so Tychonoff-for-Hausdorff is strictly weaker than full Tychonoff.
- **`1 + ω = ω ≠ ω + 1`** and **`2·ω = ω ≠ ω·2`** — ordinal arithmetic is non-commutative.
- **Right distributivity fails: `(ω+1)·2 = ω+ω+1 ≠ ω·2 + 1·2`** — care needed when transcribing "obvious" algebra to ordinals.
- **The class `Ord` is not a set (Burali-Forti)** — why transfinite recursion is stated for class functions, not sets.
- **No definable well-ordering of `ℝ`** — a well-ordering exists under AC but is not definable in ZFC; the standard "AC is non-constructive" illustration.
- **CH and GCH independent; `2^{ℵ₀}` can consistently be `ℵ₁`, `ℵ₂`, `ℵ_{17}`, …** — but never `ℵ_ω`, by König's theorem.
- **`ω₁` is sequentially compact but not compact; `[0,1]^{[0,1]}` is compact but not sequentially compact** — the two ordinal/product witnesses that "compact = sequentially compact" is metric-only.
- **A vector space over `ℚ` with no basis, in a suitable ZF model** — the failure of "every vector space has a basis" without AC.
- **A ZF model with no non-principal ultrafilter on `ℕ`** — so `βℕ ∖ ℕ` can be empty.

---

## B.5 SOURCE NOTES — PART B

- **Munkres, *Topology* 2nd ed. Ch.1 "Set Theory and Logic"** — the intended prerequisite for the topology track: Fundamental Concepts (p.4) · Functions (p.15) · … · Countable and Uncountable Sets · Well-Ordered Sets · The Maximum Principle · **Supplementary Exercises: Well-Ordering** (listed on the contents page itself). The full §1–§11 ordering could not be machine-verified this session (Pearson PDF and archive.org scans blocked / no text layer); chapter-level TOC confirmed from the Pearson New International Edition front matter. Munkres also carries the long line in a §24 exercise, `ω₁` in §10, the Tychonoff plank in Ch.4, and the AC-heavy Tychonoff proof in Ch.5.
- **Enderton, *Elements of Set Theory*** — the cleanest match to the Part B inventory, TOC confirmed in full: Ch.3 Relations and Functions (partial orderings, ordering relations, infinite Cartesian products) · Ch.4 Natural Numbers (inductive sets, Peano, recursion on `ω`) · **Ch.6 Cardinal Numbers and the Axiom of Choice** (equinumerosity, finite sets, cardinal arithmetic, ordering cardinals, AC, countable sets, arithmetic of infinite cardinals, CH) · **Ch.7 Orderings and Ordinals** (partial orderings, well orderings, replacement axioms, epsilon-images, isomorphisms, ordinal numbers, rank) · **Ch.8 Ordinals and Order Types** (transfinite recursion again, alephs, ordinal operations, isomorphism types, arithmetic of order types, ordinal arithmetic) · Ch.9 Special Topics (well-founded relations, natural models, **cofinality**). Enderton is the best single citation for the ordinal/cardinal half.
- **Halmos, *Naive Set Theory*; Hrbáček–Jech, *Introduction to Set Theory*; Jech, *Set Theory* (3rd millennium ed.); Kunen, *Set Theory*** — TOCs **not recoverable this session**: Springer's IdP cookie redirect loop, Routledge/CRC 403s, archive.org lending restrictions, Wayback blocked, publisher pages behind anti-bot challenges. Their standard structure is well known but was **not independently sourced**, so I have deliberately not transcribed section lists for them. Jech is the reference for the AC/cardinal-arithmetic chapters and for the independence results; Kunen for the forcing models (Cohen, Feferman–Lévy, Solovay); Hrbáček–Jech for a gentler ordinal/cardinal development. Retrieve these from a library proxy if you want verbatim provenance in the library.
- **Kaplansky, *Set Theory and Metric Spaces*** — uniquely useful here because it proves AC ⟺ Zorn ⟺ well-ordering *inside* a metric-spaces text; that is precisely the Part A / Part B seam. TOC only partially recoverable.
- **Herrlich, *Axiom of Choice* (Springer LNM 1876)** — the definitive catalogue of "which topology theorem needs which choice principle" (the "disasters"/"hidden choice" chapters). Springer's page was unreachable this session (IdP redirect loop), so its section list is not transcribed. **This is the source to consult for the `[V]`-flagged rows in B.3.**
- **Howard & Rubin, *Consequences of the Axiom of Choice* (AMS Surveys 59) and its online database** — the exhaustive implication chart; the right citation for the strictness claims (BPI ⇏ AC, AC_ω ⇏ DC, CUC ⇏ AC_ω, etc.).
- **Wikipedia (verified this session)** — `Axiom of choice`, `Boolean prime ideal theorem`, `Axiom of countable choice`, `Axiom of dependent choice`, `Zorn's lemma`, `Tukey's lemma`, `Well-ordering theorem`, `Hartogs number`, `Ordinal number`, `Transfinite induction`, `Transfinite recursion`, `Ordinal arithmetic`, `First uncountable ordinal`, `Long line (topology)`, `Cardinal number`, `Cantor's theorem`, `Schröder–Bernstein theorem`, `Zermelo–Fraenkel set theory`, `Tychonoff's theorem`, `Baire category theorem`, `Paracompact space`, `Compact space`, `Sequentially compact space`, `Heine–Borel theorem`.
- **nLab** — `axiom of choice` (equivalents in `Set`, plus the weak-choice lattice: CC, DC, COSHEP/presentation axiom, WISC, SVC, AMC), `ultrafilter principle` (the BPI equivalence list, including Tychonoff-for-Hausdorff, Stone representation, Stone–Čech, Banach–Alaoglu), `dependent choice`, `countable choice`, `Tychonoff theorem` (the localic, choice-free version).
- **Caution on Wikipedia's `Axiom of choice` page** — its "Topology & Analysis Results by Strength" summary is wrong in at least two places: it lists Hahn–Banach and the Baire category theorem under "requiring full AC". Hahn–Banach follows from BPI (Luxemburg 1962) and BCT1 is exactly equivalent to DC (Blair 1977). Do not cite that page for strength claims; use the dedicated pages plus Herrlich / Howard–Rubin.

---

## FLAGGED FOR VERIFICATION BEFORE PUBLISHING

Six claims I could not pin to a primary source this session, all in B.3. Each is marked **[V]** in the table:

1. **BCT for compact Hausdorff spaces in ZF** — I believe Herrlich reports a choice-free proof for the compact (not merely locally compact) case; the locally-compact BCT2 clearly uses DC. Confirm before asserting either way.
2. **Cantor's intersection theorem** — the textbook proof picks `x_n ∈ F_n` (AC_ω), but the intersection point is unique, so a choice-free argument may exist. Classify precisely.
3. **Existence of the metric completion in ZF** — the Kuratowski-embedding route (`X ↪ C_b(X)`, take the closure) looks choice-free, since `C_b(X)` is complete in ZF and closed subspaces of complete spaces are complete. The Cauchy-sequence quotient construction is the one that leans on AC_ω. Worth an explicit item if it checks out; it is a genuinely nice observation.
4. **Urysohn metrisation theorem** — the embedding into the Hilbert cube needs a Urysohn function per countable basis pair, which reads like AC_ω. Confirm.
5. **Arzelà–Ascoli** — the diagonal extraction reads like AC_ω/DC; the exact classification (and whether the compact-metric case is ZF) needs a source.
6. **"Every Hilbert space has an orthonormal basis" ⟺ AC** — attributed to Bleicher; the ⟹ direction should be checked.

Also note one presentational correction that surfaced during research and matters for any page you build: **Munkres §48 (Baire Spaces) and §49 (A Nowhere-Differentiable Function) are in Chapter 8, not Chapter 7.** Chapter 7 ends at §47 (Ascoli's Theorem).
