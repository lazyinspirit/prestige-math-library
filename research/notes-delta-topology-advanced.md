# Plan amendments from the advanced-topology sweep
# (separation, Urysohn/Tietze, countability, metrization, nets/filters,
#  uniform spaces, function spaces)

Conventions: resolved by the owner's rule (most widely adopted; Wikipedia as
tiebreaker). See memory `math-convention-rule`. The sweep independently used the
T1-free Willard/Kelley/Steen-Seebach convention, which is also Wikipedia's, so
its statements transfer verbatim.

Correction to my own subagent brief: the third subnet notion is due to
**Aarnes and Andenaes** (1972), not "Aarts-Arnaud".

---

## 1. Page decomposition this forces (the topology track roughly doubles)

The advanced material alone is ~200 items. Short single-topic pages:

- T7a **Separation Axioms: the Hierarchy** (T0/R0/T1/R1/T2/T2.5/completely
  Hausdorff, regular/T3, completely regular/Tychonoff, normal/T4,
  completely normal/T5, perfectly normal/T6; the chain; T1 = T0 + R0 and
  T2 = T0 + R1)
- T7b **Hausdorff via the Diagonal** (Hausdorff iff the diagonal is closed, plus
  the equalizer/dense-agreement/closed-graph corollaries and the closed-graph
  CONVERSE for compact Hausdorff codomain)
- T7c **Hereditary and Productive Behaviour of the Separation Axioms**
  (the clean break at Tychonoff; Dowker's theorem; collectionwise normality)
- T8a **Urysohn's Lemma and the Tietze Extension Theorem**
- T8b **Partitions of Unity and Paracompactness**
- T8c **The Tychonoff Embedding and the Stone-Cech Compactification**
- T9a **Countability Axioms and Cardinal Functions**
- T9b **Metrization: Urysohn, Nagata-Smirnov, Bing, Smirnov**
- T9c **Complete Metrizability, Cech-Completeness, and Baire Category**
- T10a **Nets** · T10b **Filters and Ultrafilters** (or one page)
- T11a **Uniform Spaces: the Three Definitions** · T11b **Completeness,
  Completion, and the Samuel Compactification**
- T12a **Function Space Topologies and the Exponential Law**
- T12b **Ascoli-Arzela** · T12c **Stone-Weierstrass** · T12d **C(X) as an
  Algebra: Banach-Stone and Gelfand-Naimark** (statement level)

## 2. Content I did not have

### Separation
- **R0 (symmetric) and R1 (preregular)**, giving the clean decompositions
  **T1 = T0 + R0** and **T2 = T0 + R1**. This makes the hierarchy structural
  rather than a list.
- **Completely Hausdorff / functionally Hausdorff** as distinct from Urysohn
  (T2.5). Wikipedia and Willard: Urysohn = closed neighbourhoods, completely
  Hausdorff = a continuous function. Steen-Seebach swap the names.
- **Collectionwise normal**, **collectionwise Hausdorff**, **monotonically
  normal** (every LOTS is monotonically normal), **sober** (incomparable with T1;
  the Zariski topology is sober and not T1), **KC** (compact sets are closed) and
  **US** (unique sequential limits), with Hausdorff => KC => US => T1 all strict.
- **Hausdorff iff the diagonal is closed**, and FOUR corollaries: the equalizer
  {f = g} is closed; maps agreeing on a dense set are equal; the graph is closed;
  and the **closed-graph converse** (Y compact Hausdorff + closed graph =>
  continuous), which is almost always omitted.
- **Dowker's theorem**: for T4 X, TFAE X x [0,1] normal, X countably paracompact,
  X countably metacompact. Normality can die against the unit interval. Dowker
  spaces exist in ZFC (M. E. Rudin 1971; Balogh 1996 at cardinality c;
  Kojman-Shelah 1998).
- **Hanai-Morita-Stone**: a closed continuous image of a metric space is
  metrizable iff first countable iff every fibre boundary is compact. So
  **metrizability is NOT preserved by closed maps** (otherwise one gets only a
  Lasnev space).
- **Locally compact Hausdorff is Tychonoff but need NOT be normal** (deleted
  Tychonoff plank). Many courses assert normality here and are wrong.
- **Mysior's example (1981)**, a half-plane construction, is a far simpler
  regular-not-completely-regular witness than the Tychonoff corkscrew.
- Kolmogorov quotient / T0-reflection, and the Hausdorff reflection as a left
  adjoint, which is what makes "T_i = T0 + R_{i-1}" precise.

### Urysohn and Tietze
- **Urysohn's lemma is ZF + DC, not choice-free** (the dyadic recursion makes
  countably many arbitrary choices). Wikipedia asserts choice-free; state DC.
- **Precise separation (f inverse of 0 = A exactly) characterizes PERFECT
  normality.** So Urysohn's lemma cannot be strengthened in general, and the
  obstruction is exactly "closed sets are G-delta".
- **The Shrinking Lemma** (normal + point-finite open cover => shrinkable). The
  actual workhorse behind partitions of unity, and it yields partitions of unity
  on merely NORMAL spaces without paracompactness.
- **Tietze <=> Urysohn <=> normality** (the converse of Tietze holds).
- **Dugundji extension theorem**: over a metric domain into a locally convex TVS
  the extension operator can be chosen LINEAR with values in the convex hull.
  Strictly stronger than Tietze and the version analysts actually use.
- **Katetov-Tong insertion theorem**: normal iff every usc <= lsc pair admits a
  continuous function between them; **Michael's strict insertion** characterizes
  perfect normality; **Dowker's insertion** the normal + countably paracompact
  case. The functional face of normality.
- **Paracompact Hausdorff <=> every open cover admits a subordinate partition of
  unity.**
- **Tychonoff embedding theorem**: X is Tychonoff iff X embeds in a cube
  [0,1]^kappa iff X embeds in some compact Hausdorff space.
- **beta-X**: the universal property (left adjoint to CompHaus -> Tych); four
  equivalent constructions (cube closure, ultrafilters, Gelfand spectrum of
  C_b(X), Wallman); **C_b(X) isometrically isomorphic to C(beta-X)**;
  **Gelfand-Kolmogorov** (maximal ideals of C(X) correspond to beta-X);
  |beta-N| = 2^c and beta-N has NO nontrivial convergent sequences;
  **beta-X needs only BPI, not full AC**, because the cube is a product of
  compact HAUSDORFF factors. Companions: the Hewitt realcompactification and
  the Samuel compactification.

### Countability
- Cardinal functions and their ordering: c(X) <= d(X) <= nw(X) <= w(X),
  L(X) <= nw(X); character, weight, density, cellularity, network weight.
- **Arhangelskii's theorem** |X| <= 2^{chi(X) L(X)} for Hausdorff X. Corollary: a
  compact first-countable Hausdorff space has cardinality at most the continuum.
  Solved a 50-year-old problem and states in one line.
- **In metrizable spaces second countable, separable, Lindelof, hereditarily
  Lindelof, hereditarily separable and ccc ALL COLLAPSE** to one condition.
- **The Sorgenfrey line is separable, first countable, Lindelof, hereditarily
  Lindelof, hereditarily separable, ccc, perfectly normal and paracompact, and
  still not second countable and not metrizable.** One example kills six naive
  implications; make it a landmark example item.
- **ccc productivity is independent of ZFC**: productive under MA + not-CH,
  refuted by a Suslin line. The Suslin Hypothesis is independent.
- **L-spaces exist in ZFC (Justin Moore, 2005); S-spaces consistently do not
  (Todorcevic, under PFA).** A genuinely modern landmark, and the asymmetry is
  the point.
- "ccc" is an ANTICHAIN condition despite the name.

### Metrization and completeness
- **Urysohn's original theorem assumed NORMAL; Tychonoff (1926) weakened it to
  REGULAR.** Sources genuinely differ about what "Urysohn metrization" says;
  state both.
- **Nagata-Smirnov and Bing are CHARACTERIZATIONS** (sigma-locally-finite base /
  sigma-discrete base), unlike Urysohn's which is only sufficient. The necessity
  direction is A. H. Stone's theorem in disguise, hence uses AC.
- **Smirnov**: metrizable iff paracompact Hausdorff and locally metrizable.
- **The Alexandroff-Urysohn metrization lemma IS the uniform-space metrization
  lemma** (countable base of entourages => pseudometrizable). One theorem in two
  costumes; proving it once and citing it twice is a real economy.
- **Moore spaces**; **the Normal Moore Space Conjecture is independent of ZFC**:
  false under V = L (Fleissner) and under MA + not-CH, consistent from a strongly
  compact cardinal via PMEA (Nyikos). A point-set problem whose answer is a large
  cardinal.
- **Alexandroff's theorem**: a subspace of a completely metrizable space is
  completely metrizable iff it is G-delta. Hence Q is not completely metrizable
  and the irrationals are Polish and homeomorphic to N^N.
- **Lavrentiev's theorem** (a homeomorphism between subsets of completely
  metrizable spaces extends to G-delta sets) is the companion nobody states.
- **Cech-complete**: G-delta in some (equivalently every) Hausdorff
  compactification; completely metrizable = metrizable + Cech-complete.
- **Manifolds**: locally Euclidean Hausdorff M is metrizable iff paracompact iff
  every component is second countable iff (smooth case) M admits a Riemannian
  metric. The **long line** and the **Prufer manifold** are the witnesses;
  "manifolds are second countable by definition" hides a real theorem.
- **Birkhoff-Kakutani**: a Hausdorff topological group is metrizable iff first
  countable, and then carries a LEFT-INVARIANT compatible metric.
- **Three Baire category theorems with three different logical strengths**:
  BCT for complete metric spaces is EQUIVALENT TO DC over ZF; BCT for locally
  compact Hausdorff is CHOICE-FREE; BCT for SEPARABLE complete metric spaces is
  ZF-provable. Also BCT3 for Cech-complete spaces subsumes both.
- **Products of Baire spaces need not be Baire** (Oxtoby, consistently). Almost
  universally assumed otherwise.
- **Osgood's theorem**: the continuity points of a pointwise limit of continuous
  functions are comeagre (so a pointwise limit is Baire class 1 with comeagre
  continuity set). Cross-links to RA-14 and RA-23.

### Nets and filters
- **Three inequivalent subnet definitions**: Willard (monotone + cofinal) =>
  Kelley (final) => **Aarnes-Andenaes** (eventuality filter refines), all strict,
  and **all three give the same convergence theory** (Schechter, *Handbook*, §7).
  Author one as primary with the other two in a remark; no theorem changes.
- Filter convergence is **N(x) subset F** (the filter refines the neighbourhood
  filter). **Wikipedia's *Filter (set theory)* page renders this incorrectly**;
  do not copy it. This is a case where the owner's Wikipedia-tiebreaker rule must
  yield to a verified error, and the item should say so.
- **Kelley's theorem**: every net has a universal subnet, EQUIVALENT to the
  ultrafilter lemma.
- The concrete example that proves nets are necessary: in R^R with the product
  topology, let E be the set of functions equal to 1 off a finite set. Then
  0 is in the closure of E but **no sequence in E converges to 0**.
- Minimal Cauchy filters; the net-filter dictionary is mutually inverse up to
  convergence-equivalence, and ultrafilter corresponds to universal net.
- Analysis payoff: the weak topology on an infinite-dimensional Banach space is
  not first countable, so weak closures are not sequential closures (Mazur's
  lemma is the repair).

### Uniform spaces
- The three presentations with their **equivalence theorem** (Weil entourages /
  Tukey uniform covers / gauges of pseudometrics), including the explicit
  translations.
- **Star refinement and barycentric refinement**, and the combinatorial engine:
  a barycentric refinement of a barycentric refinement is a star refinement.
- **Uniformizable iff completely regular.** The exact topological shadow.
- **A compact Hausdorff space carries EXACTLY ONE compatible uniformity** (all
  neighbourhoods of the diagonal), simultaneously the fine and the coarse one.
  Hence **Heine-Cantor in its final form** is a corollary, and for compact
  Hausdorff spaces "uniform" adds nothing.
- **The extension theorem**: a uniformly continuous map from a dense subspace
  into a complete Hausdorff uniform space extends uniquely. Continuity alone does
  not suffice. This is why uniform structure exists at all, and it is the
  general form of what RA-13 needs for a^x.
- **Completion** with its universal property; complete Hausdorff uniform spaces
  are a reflective subcategory of Unif.
- **The Samuel compactification of the fine uniformity is beta-X**, and
  **proximities are exactly the totally bounded uniformities** (Smirnov), so
  proximities classify Hausdorff compactifications.
- **Fully normal iff paracompact** (A. H. Stone), the star-refinement
  characterization tying uniform covers to paracompactness.
- **A topological group carries FOUR canonical uniformities** (left, right,
  two-sided/Roelcke, upper), with Raikov completeness distinct from Weil
  completeness. Analysts routinely conflate these.
- Uniform invariants: completeness, total boundedness, uniform connectedness,
  the Lebesgue property, uniform local compactness. Compactness is BOTH
  topological and uniform.

### Function spaces
- The chain tau_p subset tau_co subset tau_k subset tau_u, and the
  **G-topology** framework that produces all of them from a family of subsets.
- **tau_co = tau_k on C(X,Y) for Y uniform, but NOT on Y^X**: the hypothesis
  "on the continuous functions" is load-bearing.
- **On an equicontinuous family tau_p = tau_co = tau_k.** The one-line reason
  Ascoli works.
- C_co(X,Y) is metrizable iff X is **hemicompact** and Y is metrizable;
  C_p(X) is metrizable iff X is countable.
- **Evaluation is continuous iff X is essentially locally compact Hausdorff**;
  the **exponential law** holds there; **Top is NOT cartesian closed**, which is
  exactly why compactly generated weak Hausdorff spaces exist.
- **Ascoli-Arzela in five forms**: classical; compact metric domain; Munkres'
  form with its converse for locally compact Hausdorff X; the Kelley/Bourbaki
  general uniform form; and **Kelley's EVEN CONTINUITY form**, the correct
  generalization when the target has only a topology. Even continuity is almost
  never taught.
- **Stone-Weierstrass in six forms**: real algebra with constants; real algebra
  vanishing nowhere; complex with self-adjointness (**the disc algebra is the
  counterexample showing self-adjointness is not a technicality**); **the LATTICE
  form, which is logically PRIOR to the algebra form** and generalizes to Riesz
  spaces (Kakutani-Krein); the locally compact C_0 form; and Bishop / Machado /
  Nachbin.
- **Banach-Stone** (an isometry of C(X) onto C(Y) forces X homeomorphic to Y),
  **commutative Gelfand-Naimark**, **Riesz-Markov-Kakutani**, **Stone duality**,
  and **Nagata's theorem** for C_p(X). Statement level with references; this is
  the "algebra equals topology" dictionary the whole track supports.

## 3. Choice bookkeeping additions for F1

- Urysohn's lemma and Tietze: **ZF + DC**.
- BCT complete metric: **equivalent to DC**. BCT locally compact Hausdorff:
  **choice-free**. BCT separable complete metric: **ZF**.
- beta-X and Tychonoff for Hausdorff factors: **BPI**, strictly weaker than AC.
- Every net has a universal subnet: **equivalent to BPI**.
- Tychonoff in general and A. H. Stone's theorem: **AC**.
- The Shrinking Lemma for uncountable index sets: **AC**.
- Free ultrafilters on N are not ZF-provable (Solovay).

## 4. Independence results to state as remarks (not prove)

Suslin Hypothesis; ccc productivity; the Normal Moore Space Conjecture (and its
large-cardinal consistency); existence of L-spaces (Moore 2005) versus the
consistent non-existence of S-spaces (Todorcevic); Dowker spaces in ZFC. These
belong in `rem-` items with references; they are what makes the subject feel
alive and none of them is provable at this level.
