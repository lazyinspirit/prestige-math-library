# frontier-33 batch-1 — scaffold evidence and checkpoint

Scope: only this batch's pages.json, coverage.json and notes.md. No content authoring, plan edits, workflow transitions, commits, or proof contracts in this dispatch.

## Design/spec receipt
Read CLAUDE.md and README.md in full, SCHEMA.md in full, assigned task and MT-21 at research/plan-measure-theory-track.md lines 3700–3785. Spec and batch agree on orders 288.041/288.042 and requires radon-measures-and-the-riesz-markov-kakutani-theorem-examples. Design gives MT-3, MT-4, MT-11, metric-spaces, cantor-set-baire-and-measure-zero, the-logarithm-and-general-powers instead, and gives no numeric order in MT-21. This prerequisite-list drift is recorded for stage-1 drift; spec retained unchanged.

## Decisions and conventions
Unnormalised diameter powers, arbitrary covering sets, diam(empty)=0, extended diameter infinity on unbounded sets. Existing def-metric-bounded-diameter only defines nonempty bounded diameter: extend explicitly, do not duplicate it. Covers are finite or countably infinite families of NONEMPTY sets, plus the empty family for the empty set. Each nonempty singleton costs 1 at s=0 (0^0=1); do not pad finite covers with empty sets. inf(empty family of covers)=infinity; sup empty subset of [0,infinity]=0. All dimension exponents are finite nonnegative reals; dim may be infinity. No claim about H^infinity. Countable Choice is assumed where selecting near-optimal countable covers is needed.

Metric outer measure implies Borel measurability by the existing theorem. Borel regular means equal-measure Borel hulls, not local finiteness or open outer regularity. General-metric hull proof uses closures; Euclidean G_delta refinement may use open enlargement for s>0, with finite sets handled separately for s=0.

Euclidean proportionality uses elementary cube bounds and existing Lebesgue uniqueness, never isodiametry. Its constant is not identified locally. Equality of chart measure and Hausdorff measure is NOT proved or used. Design's crossover prose is interpreted as rays away from the critical exponent, not complementary sets including it.

Dependency reads: existing metric diameter, metric Caratheodory criterion, Lebesgue uniqueness (normalisation is (0,1]^n), Cantor measure and its atomless probability proposition, Cantor ternary description and function properties, and fat Cantor definition and quantitative non-null theorem. The published infinite product probability theorem is at order 288.101: forbidden as a dependency here. Digit constructions instead use explicit Borel maps from Lebesgue [0,1), verifying their image measures and finite cylinder masses locally.

Sources read through the web PDF extraction: Fremlin chapter 26 (60 pages), Falconer chapter 1 (19 pages), Bishop–Peres full book (410 pages, author-hosted alternate). Exact ranges and source headings are in coverage. Shell curl fails DNS resolution; no source-fetch-check stamp is fabricated from web excerpts. Bishop original www.math URL timed out in web; commack.math alternate serves the same named 410-page book, so original_url is retained.

## Item checkpoints
Each entry below records the completed scaffold item, exact scope, dependencies, source and proposed proof. Mathematical proof bodies and independent reviews remain step-5+ work, not completed by this scaffold. Validators pending until the closing receipt.

### `def-extended-diameter-for-hausdorff-covers`

Claim/conventions: For a metric space, extend the existing diameter to all subsets: empty has diameter 0, an unbounded subset has diameter infinity, and nonempty bounded subsets retain their established diameter.

Dependencies: `def-metric-bounded-diameter`, `rem-extended-real-conventions`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264A, 264K.

Proof/dependency rationale: This is a scope extension of the existing real-valued diameter, not a competing definition.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `def-hausdorff-content-at-scale-delta`

Claim/conventions: For s>=0 and 0<delta<=infinity, H^s_delta(A) is the infimum of sums of diameter(U)^s over at most countable covers by nonempty arbitrary sets of diameter <=delta. Empty cover allowed; 0^0=1 for nonempty singleton cover sets; infinity^0=1. Define H^s_infinity as Hausdorff content.

Dependencies: `def-extended-diameter-for-hausdorff-covers`, `def-nonnegative-extended-series`, `def-real-power`, `lem-extended-reals-complete`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.2 pp.4–6; Fremlin 264A,D(b),K.

Proof/dependency rationale: Explicit empty-cover convention repairs the over-literal s=0 formula warned about in Fremlin.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `lem-hausdorff-scale-monotonicity-and-limit`

Claim/conventions: H^s_delta is monotone in A and nondecreasing as delta decreases; sup_delta>0 H^s_delta(A)=lim_k H^s_(2^-k)(A) in [0,infinity], including nonseparable spaces where some covers do not exist.

Dependencies: `def-hausdorff-content-at-scale-delta`, `lem-extended-reals-complete`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264D(d),264K.

Proof/dependency rationale: Nested admissible cover classes; extended supremum and cofinal dyadic scales establish well-definedness #33.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `def-hausdorff-measure`

Claim/conventions: H^s(A)=sup_delta>0 H^s_delta(A), equivalently its small-scale limit, for finite real s>=0. Initially an outer set function on all subsets; its measurable restriction is a measure.

Dependencies: `def-hausdorff-content-at-scale-delta`, `lem-hausdorff-scale-monotonicity-and-limit`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264A–C,K.

Proof/dependency rationale: Use the preceding existence lemma; no normalising volume factor.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-measure-is-an-outer-measure`

Claim/conventions: For any metric space and s>=0, H^s(empty)=0 and H^s is monotone and countably subadditive; each H^s_delta is also an outer measure.

Dependencies: `def-hausdorff-measure`, `def-outer-measure`, `def-countable-choice`, `def-nonnegative-extended-series`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264B and 264Xa.

Proof/dependency rationale: Prove subadditivity at fixed scale by epsilon*2^-j near-optimal covers, flatten the countable family, then bound by sum H^s(A_j) BEFORE taking the supremum. Infinite right sides are immediate.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-measure-is-metric-and-borel-measurable`

Claim/conventions: H^s(A union B)=H^s(A)+H^s(B) for positively separated sets. Thus all Borel sets are Caratheodory measurable, and the restriction to the Caratheodory sigma-algebra is complete.

Dependencies: `thm-hausdorff-measure-is-an-outer-measure`, `def-metric-outer-measure`, `thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures`, `thm-caratheodory-outer-measure-theorem`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264C,E; Bishop–Peres Theorem 1.2.4.

Proof/dependency rationale: At scale smaller than the separation no covering set meets both sets. Use the established metric criterion rather than re-proving its boundary-layer argument.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `prop-zero-dimensional-hausdorff-measure-counts`

Claim/conventions: H^0(A)=#A if A is finite, and infinity otherwise; all sets are H^0-measurable.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-measure-is-metric-and-borel-measurable`, `def-counting-measure`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264D(b),264G(a).

Proof/dependency rationale: Singleton upper cover; an N-point subset has positive minimum pair separation, forcing N cover sets at small scale. Arbitrary large finite subsets settle infinite A; counting measure is defined on the power set.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-measure-has-borel-hulls`

Claim/conventions: Every subset A of a metric space has a Borel superset G with H^s(G)=H^s(A). H^s agrees with the outer measure induced by its Borel restriction. In Euclidean spaces one can choose G_delta hulls.

Dependencies: `thm-hausdorff-measure-is-metric-and-borel-measurable`, `prop-zero-dimensional-hausdorff-measure-counts`, `def-countable-choice`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264F(a,b),264K,264Xd,264Ye; Falconer Theorem 1.6(a).

Proof/dependency rationale: Finite H: take closed-cover hulls at dyadic scales; closure preserves diameter by triangle inequality. Intersect countable unions of closures. Infinite H: whole space. Euclidean G_delta: enlarge cover sets with summable cost error for s>0; finite sets for s=0. This does not assert Radon local finiteness.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `prop-finite-hausdorff-measurable-sets-have-borel-cores`

Claim/conventions: If E is H^s-measurable and sigma-finite, there are Borel E_minus subset E subset E_plus with H^s(E_plus minus E_minus)=0. For finite-measure Euclidean E there is an F_sigma core of equal measure and closed subsets with arbitrarily small measure deficit.

Dependencies: `thm-hausdorff-measure-has-borel-hulls`, `thm-continuity-from-below-for-measures`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264F(c); Falconer Theorem 1.6(b).

Proof/dependency rationale: For finite E choose a Borel hull and a null hull of its excess; subtract, then take countable unions for sigma-finite E. For the Euclidean F_sigma refinement use G_delta hulls and exhaust open sets by closed sets, as Falconer 1.6(b).

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `prop-hausdorff-content-and-measure-have-the-same-null-sets`

Claim/conventions: For s>=0, H^s_infinity(A)=0 iff H^s_delta(A)=0 for every finite delta>0 iff H^s(A)=0. This is not equality of the set functions.

Dependencies: `def-hausdorff-measure`, `prop-zero-dimensional-hausdorff-measure-counts`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Proposition 1.2.6; Fremlin 264Xa.

Proof/dependency rationale: For s>0, covers of total cost <epsilon have every diameter <epsilon^(1/s). For s=0, total cost <1 forces the empty cover and A empty.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-measure-under-lipschitz-maps`

Claim/conventions: For f:D subset X ->Y that is L-Lipschitz with L>0, H^s(f(A))<=L^s H^s(A), A subset D. At L=0 treat the singleton/empty image directly: H^s(image)=0 for s>0 and H^0(image)<=H^0(A).

Dependencies: `def-hausdorff-measure`, `prop-zero-dimensional-hausdorff-measure-counts`, `def-lipschitz-holder-contraction`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264G,264Yj(i); Falconer Lemma 1.8.

Proof/dependency rationale: Map U intersect D, compare diameters and cover scales. State the zero-L case separately so no undefined infinity-times-zero appears.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cor-hausdorff-measure-under-similarities`

Claim/conventions: If f scales all distances by c>0, H^s(f(A))=c^s H^s(A). Includes isometries, Euclidean translations and dilations. Computing measure in a metric subspace or its ambient space gives the same outer value.

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264G,264Yf(i),264Yj(i).

Proof/dependency rationale: Apply Lipschitz inequality to f and its inverse on the image. For ambient/subspace agreement restrict ambient cover sets and regard subspace sets as ambient sets.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `lem-hausdorff-exponent-comparison`

Claim/conventions: If 0<=s<t and delta>0 finite, H^t_delta(A)<=delta^(t-s) H^s_delta(A). Consequently H^s(A)<infinity implies H^t(A)=0.

Dependencies: `def-hausdorff-measure`, `thm-real-power-laws`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Lemma 1.2.5; Fremlin 264Xe.

Proof/dependency rationale: Compare each diameter power, then use H^s_delta<=H^s before delta tends to zero.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `def-hausdorff-dimension`

Claim/conventions: dim_H A=inf{s>=0:H^s(A)=0} in [0,infinity], with inf empty=infinity. In particular dim_H empty=0.

Dependencies: `def-hausdorff-measure`, `lem-extended-reals-complete`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Definition 1.2.1 and Proposition 1.2.6.

Proof/dependency rationale: Use the extended infimum and do not define H raised to an infinite exponent.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-dimension-critical-exponent`

Claim/conventions: For d=dim_H A, H^s(A)=infinity for 0<=s<d and H^s(A)=0 for s>d. d also equals inf{s:H^s(A)<infinity} and sup{s:H^s(A)=infinity}, with sup empty=0. If 0<H^s(A)<infinity then d=s. At finite d the measure is not determined by d.

Dependencies: `def-hausdorff-dimension`, `lem-hausdorff-exponent-comparison`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Proposition 1.2.6; Fremlin 264Yk.

Proof/dependency rationale: Well-definedness #34 follows from exponent comparison and properties of infimum. Both endpoint cases d=0 and d=infinity must appear; no complementary-ray assertion at the crossover itself.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-dimension-is-countably-stable`

Claim/conventions: For arbitrary subsets A_k, dim_H(union_k A_k)=sup_k dim_H(A_k); inclusion implies monotonicity. Every countable set has dimension zero.

Dependencies: `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-measure-is-an-outer-measure`, `prop-zero-dimensional-hausdorff-measure-counts`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.1 closing paragraph (p.3), Example 1.2.7, Exercise 1.6.

Proof/dependency rationale: Monotonicity is one direction; for t larger than supremum every component is H^t-null and subadditivity gives the reverse direction. Singleton covers make countable sets H^t-null for t>0.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cor-lipschitz-maps-do-not-increase-hausdorff-dimension`

Claim/conventions: A Lipschitz map cannot increase Hausdorff dimension; a bi-Lipschitz bijection preserves it.

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`, `thm-hausdorff-dimension-critical-exponent`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264G,Yj(i),Yk; Falconer Lemma 1.8.

Proof/dependency rationale: Transfer each zero-measure exponent along f, and apply to inverse when bi-Lipschitz. Define the two-sided positive distance constants in the statement.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `lem-euclidean-cube-bounds-for-hausdorff-measure`

Claim/conventions: For n>=1, lambda_n^*(A)<=H^n(A) for all A subset R^n, and 1<=H^n((0,1]^n)<=n^(n/2).

Dependencies: `def-hausdorff-measure`, `def-lebesgue-outer-measure`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-real-power-laws`.

Support: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf — Falconer §1.2 p.8 cube upper estimate; §1.4 pp.12–13 volume covers; Fremlin 264H(b).

Proof/dependency rationale: Any bounded set of diameter d lies in its coordinate bounding box of side lengths <=d, giving volume <=d^n. Subadditivity gives lower bound for every cover; m^n cubes of side 1/m give upper cost n^(n/2). No isodiametric inequality.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`

Claim/conventions: For every A subset R, H^1(A)=lambda_1^*(A); the measurable domains and completed measures agree.

Dependencies: `lem-euclidean-cube-bounds-for-hausdorff-measure`, `def-lebesgue-outer-measure`, `def-hausdorff-measure`.

Support: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf — Falconer §1.4 p.12, immediately before Theorem 1.11.

Proof/dependency rationale: Lower bound from bounding intervals; subdivide arbitrary interval covers into lengths <=delta without increasing total length for upper bound, then infimise. Equality of outer measures gives equality of Caratheodory domains.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`

Claim/conventions: For n>=1 there is c_n in [1,n^(n/2)] with H^n(B)=c_n lambda_n(B) on Borel sets, and H^n(A)=c_n lambda_n^*(A) on all subsets. c_1=1. For n>=2 the exact c_n is not identified here.

Dependencies: `lem-euclidean-cube-bounds-for-hausdorff-measure`, `cor-hausdorff-measure-under-similarities`, `thm-hausdorff-measure-is-metric-and-borel-measurable`, `thm-hausdorff-measure-has-borel-hulls`, `thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure`, `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264I statement (weaker constant); design MT-21 prescribed uniqueness route.

Proof/dependency rationale: Set c_n=H^n((0,1]^n); divide the translation-invariant Borel measure by this finite positive value and invoke existing uniqueness. Equal Borel hulls extend equality to all subsets. The source proves more with isodiametry; this proof deliberately establishes only proportionality.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cor-euclidean-hausdorff-dimension`

Claim/conventions: dim_H R^n=n, and every subset of R^n has dimension <=n. Every set of positive Lebesgue outer measure has dimension n.

Dependencies: `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`, `thm-hausdorff-dimension-is-countably-stable`, `thm-hausdorff-dimension-critical-exponent`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.2 p.7 after Lemma 1.2.8; Falconer §1.2 p.8.

Proof/dependency rationale: Unit cube has finite positive H^n; exhaust R^n by cubes. Positive outer measure yields H^n>0 and dimension >=n.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-hausdorff-mass-distribution-principle`

Claim/conventions: Let mu be a finite Borel measure, mu^*(A)>0, s>=0, C>0. If mu^*(U)<=C diam(U)^s for every nonempty U of sufficiently small diameter, then H^s(A)>=mu^*(A)/C and dim_H A>=s. For Borel A replace mu^*(A) by mu(A). A small-ball bound mu(B(x,r))<=C r^s suffices with the corresponding radius-to-diameter comparison.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-dimension-critical-exponent`, `def-outer-measure`, `def-measure`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Lemma 1.2.8.

Proof/dependency rationale: Define mu^*(E)=inf{mu(B): E subset B, B Borel} inline and prove countable subadditivity using Borel near-hulls. Sum over arbitrary covering sets; never write mu(U) for a potentially nonmeasurable U. Balls with radius approaching diameter give the bound for s>0; singleton/zero exponent cases explicit.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `lem-cantor-cylinder-masses`

Claim/conventions: Every level-m basic interval in the middle-thirds Cantor construction has Cantor measure 2^-m.

Dependencies: `def-cantor-measure`, `prop-cantor-measure-is-a-singular-atomless-probability-measure`, `thm-cantor-function-properties`, `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`, `thm-cantor-set-ternary-description`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264J(a,d); Bishop–Peres Example 1.4.2 (uniform digits).

Proof/dependency rationale: Use the published Cantor-function binary values at both ternary endpoints; interval formula and atomlessness yield exactly 2^-m. Explicitly derive the endpoint difference rather than assuming symbolic probability.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `lem-sharp-cantor-interval-mass-bound`

Claim/conventions: With s=log(2)/log(3), every interval I satisfies mu_c(I)<=diam(I)^s; hence every bounded nonempty U subset R satisfies mu_c^*(U)<=diam(U)^s.

Dependencies: `lem-cantor-cylinder-masses`, `thm-real-power-continuity-and-derivatives`, `thm-continuity-from-below-for-measures`, `prop-cantor-measure-is-a-singular-atomless-probability-measure`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264J(c,d); Falconer Theorem 1.14 proof.

Proof/dependency rationale: First prove a^s+c^s <=(a+b+c)^s when max(a,c)<=b by decreasing power increments and 3^s=2. Induct over the smallest common construction interval to bound 2^-m times the number of full level-m intervals in I. For open I these full-cylinder unions exhaust C intersect I; extend to closed endpoints via atomlessness or open enlargement. Enclose arbitrary U in [inf U,sup U]. This supplies constant ONE, not an unspecified Frostman constant.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `thm-cantor-set-hausdorff-dimension-and-exact-measure`

Claim/conventions: For the middle-thirds Cantor set C and s=log(2)/log(3), H^s(C)=1 and dim_H C=s.

Dependencies: `lem-sharp-cantor-interval-mass-bound`, `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-cantor-set-ternary-description`, `thm-real-power-laws`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264J; Falconer Theorem 1.14.

Proof/dependency rationale: Level-m covers have total s-cost 2^m*(3^-m)^s=1; apply mass distribution with mu_c(C)=1 and sharp constant 1.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `def-binary-digit-restriction-set`

Claim/conventions: For S subset {1,2,...}, A_S={sum_(k in S) a_k 2^-k: a_k in {0,1}}. Digits outside S are zero; membership means some such expansion exists, so endpoint ambiguity is retained. Write a_S(n)=#(S intersect {1,...,n}).

Dependencies: `thm-geometric-series`, `def-series`, `def-countable`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.3.2 and Example 1.4.2.

Proof/dependency rationale: Use the convergent series definition, and explain the 1-based digit positions despite the library convention N contains zero.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `prop-binary-digit-restriction-hausdorff-dimension`

Claim/conventions: A_S is compact and dim_H A_S=liminf_n a_S(n)/n. If the complement of S is infinite, lambda_1(A_S)=0. If S is infinite with infinite complement, A_S is uncountable.

Dependencies: `def-binary-digit-restriction-set`, `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-geometric-series`, `thm-heine-borel-characterisation-r`, `thm-cantor-set-ternary-description`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Examples 1.3.2,1.4.2; §1.3 grid comparison.

Proof/dependency rationale: Upper: 2^a(n) closed intervals of length 2^-n; take a subsequence for any exponent above liminf. Lower: use canonical binary digits of Lebesgue u in [0,1), insert them successively at S positions, define image measure by Borel preimages, verify countable additivity. Prefix cylinders have mass 2^-a(n); dyadic boundaries have zero mass if S infinite. An interval of length between 2^-n and 2^(-n+1) meets <=3 level-n cells, hence for t<liminf its mass <=3*length^t once n large. Prove finite-S dimension zero separately. Nested finite unions give compactness; total length 2^(a(n)-n) gives nullity. Infinite complement forbids eventually-all-one tails, so first differing allowed digit proves injection and uncountability. This proves the selected result directly without importing Billingsley or the later product theorem.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `rem-critical-hausdorff-measure-can-be-zero-finite-or-infinite`

Claim/conventions: At dimension 1 the possible critical measures include zero, finite positive, and infinity: use A_S with S the nonsquare positions, [0,1], and R, respectively.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `cor-euclidean-hausdorff-dimension`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Proposition 1.2.6 and Example 1.4.2.

Proof/dependency rationale: There are floor(sqrt(n)) forbidden positions, so density is one but the complement is infinite. This A-page orientation depends only on proved A results; B-page witnesses do not become dependencies.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `rem-hausdorff-cover-conventions-and-normalisation`

Claim/conventions: Arbitrary covers are essential. Closed covers yield the same measure; ball-only spherical measure is comparable (H^s<=S^s<=2^s H^s for s>0) but need not equal it. H^s_infinity is content, not the small-scale measure. The Euclidean constant 2^n/lambda_n(B(0,1)) is a sourced identification not proved here and is not used.

Dependencies: `prop-hausdorff-content-and-measure-have-the-same-null-sets`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264D(a,b,d),264H,I; Bishop–Peres §1.2 p.4.

Proof/dependency rationale: Give the comparison by enclosing a set in a ball of at most twice its diameter, with epsilon enlargement for zero diameters. Identify the missing isodiametric theorem as the exact-normalisation scope denial. Avoid claiming the same fixed-scale values for all cover conventions.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `rem-hypersurface-chart-measure-and-hausdorff-measure-agreement`

Claim/conventions: Chartwise C^1 change of variables is available to PDE-5 and PDE-13, but equality of Riemannian hypersurface measure with appropriately normalised Hausdorff measure belongs to a future geometric-measure treatment. This page supplies no proof of that equality.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin chapter 26 introduction and 265A opening; design geometric-measure receipt.

Proof/dependency rationale: Pure orientation, not recorded theorem or prerequisite to an area formula. No external_dependency fallback and no hidden use of the equality.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `rem-hausdorff-dimension-orients-the-weierstrass-graph`

Claim/conventions: The existing rem-weierstrass-graph-hausdorff-dimension now has a defined notion of Hausdorff dimension to refer to. This page does not prove any Weierstrass graph dimension value.

Dependencies: `def-hausdorff-dimension`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.2 p.9 Weierstrass discussion; design forward-reference receipt.

Proof/dependency rationale: Mention the published orientation outside a proof; no logical dependency on its unproved value.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-cantor-critical-measure-computed`

Claim/conventions: For C, s=log(2)/log(3), the level-m covers cost exactly one and H^s(C)=1, whereas H^1(C)=0.

Dependencies: `thm-cantor-set-hausdorff-dimension-and-exact-measure`, `lem-hausdorff-exponent-comparison`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264J.

Proof/dependency rationale: Work the stage counts and exhibit both sides of the sharp bound with the A theorem.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-fat-cantor-hausdorff-measure-and-dimension`

Claim/conventions: For the published Smith–Volterra–Cantor set S, H^1(S)=lambda_1(S)=1/2 and dim_H S=1, unlike the ordinary Cantor set.

Dependencies: `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`, `thm-continuity-from-above-for-measures`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.2 p.7 positive-volume consequence; existing fat Cantor construction.

Proof/dependency rationale: Compute 2^n stage lengths ->1/2 from the published recursion; finite-measure continuity from above gives lambda(S)=1/2. Do not depend on any earlier B-page fat-Cantor example.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-line-segment-hausdorff-length`

Claim/conventions: For a segment [p,q] subset R^2, H^1([p,q])=|p-q|; if p!=q its dimension is one, and a degenerate segment has dimension zero.

Dependencies: `cor-hausdorff-measure-under-similarities`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-dimension-is-countably-stable`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264G; Falconer §1.4 p.12.

Proof/dependency rationale: Parametrise isometrically by [0,|p-q|]; handle p=q separately.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-lipschitz-graph-has-finite-hausdorff-length`

Claim/conventions: If f:[0,1]->R is L-Lipschitz, its graph Gamma satisfies 1<=H^1(Gamma)<=sqrt(1+L^2) and dim_H Gamma=1.

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264G and 264Xf(i) (specialised Lipschitz graph).

Proof/dependency rationale: The graph parametrisation is sqrt(1+L^2)-Lipschitz and the first coordinate projection is 1-Lipschitz. Neither rectifiable-curve measure equality nor an area formula is needed.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-countable-dense-set-has-zero-hausdorff-dimension`

Claim/conventions: Q intersect [0,1] is dense in [0,1] and has Hausdorff dimension zero; its closure has dimension one.

Dependencies: `thm-hausdorff-dimension-is-countably-stable`, `cor-euclidean-hausdorff-dimension`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.2.7 (countable nullity), specialised to Q.

Proof/dependency rationale: Countable singleton covers; density is the published rational-density result. Closure need not preserve Hausdorff dimension.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `ex-sierpinski-gasket-dimension-by-hand`

Claim/conventions: Let D={(0,0),(1,0),(0,1)} and K={sum_(j>=1)2^-j d_j:d_j in D} subset R^2. Then dim_H K=log(3)/log(2), and its critical Hausdorff measure is finite positive (no exact value claimed).

Dependencies: `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-geometric-series`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.3.4 pp.15–16.

Proof/dependency rationale: Construct the measure from canonical ternary digits of Lebesgue u in [0,1), mapping 0,1,2 to D, then summing in base 2. Verify Borel measurability and countable additivity directly; each code-prefix event has mass 3^-n. An arbitrary set of diameter r with 2^-n<=r<2^(-n+1) meets at most 4 by 4 level-n closed grid squares, including boundary contacts, so its outer mass <=16*3^-n<=16*r^s. There are 3^n squares of diameter sqrt(2)*2^-n, giving finite upper cost 2^(s/2). No separation theorem or open-set-condition theorem imported.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cex-dimension-one-binary-digit-set-with-zero-length`

Claim/conventions: With S the positive nonsquares, A_S is compact, dim_H A_S=1 and H^1(A_S)=lambda_1(A_S)=0. Thus dimension one does not imply positive length.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.4.2, nonsquare-position specialisation.

Proof/dependency rationale: a_S(n)=n-floor(sqrt(n)); use density one and infinitely many restrictions. This supplies the zero-critical-measure witness.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cex-uncountable-zero-dimensional-binary-digit-set`

Claim/conventions: With S={k^2:k>=1}, A_S is uncountable and compact but dim_H A_S=0 and H^t(A_S)=0 for every t>0.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`, `thm-hausdorff-dimension-critical-exponent`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.4.2, square-position specialisation.

Proof/dependency rationale: a_S(n)=floor(sqrt(n)); sparse binary digits give density zero and injectively encode every infinite bit sequence.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `cex-continuous-cantor-image-raises-hausdorff-dimension`

Claim/conventions: The restriction of the Cantor function to C continuously maps C onto [0,1], raising dimension from log(2)/log(3) to one.

Dependencies: `thm-cantor-function-properties`, `cor-cantor-function-is-continuous`, `thm-cantor-set-hausdorff-dimension-and-exact-measure`, `cor-euclidean-hausdorff-dimension`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264J; published Cantor-function ternary/binary formula.

Proof/dependency rationale: Surjectivity on C follows directly from the published binary coding, not just surjectivity on the full interval. No need to build a Peano curve; this is the simpler already-established continuous image allowed by the design.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-hausdorff-measure-is-countably-additive-on-all-subsets`

Claim/conventions: False: H^s is countably additive on arbitrary disjoint subsets of R^n. Counterexample already at n=s=1.

Dependencies: `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-a-vitali-set-is-not-lebesgue-measurable`, `def-caratheodory-measurable-set`.

Support: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf — Fremlin 264C,I; existing Vitali theorem.

Proof/dependency rationale: If H^1 were finitely additive on all disjoint subsets, every test set would split additively across a Vitali set; by equality with Lebesgue outer measure that makes it Caratheodory measurable, contradicting the published theorem. State its choice hypothesis.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-hausdorff-dimension-of-union-is-the-sum`

Claim/conventions: False: dim_H(A union B)=dim_H A+dim_H B. Take disjoint nondegenerate intervals.

Dependencies: `thm-hausdorff-dimension-is-countably-stable`, `cor-euclidean-hausdorff-dimension`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres §1.1 p.3 countable stability; Proposition 1.2.6.

Proof/dependency rationale: Two disjoint unit intervals each have dimension one, and their union also has dimension one.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-critical-hausdorff-measure-is-always-finite-positive`

Claim/conventions: False: a set of dimension s must satisfy 0<H^s(A)<infinity. The nonsquare-position set has critical measure zero; R has critical measure infinity.

Dependencies: `cex-dimension-one-binary-digit-set-with-zero-length`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `cor-euclidean-hausdorff-dimension`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Proposition 1.2.6 and Example 1.4.2.

Proof/dependency rationale: Use the preceding B witness and the line; keep infinity and zero failures explicit.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-continuous-injections-preserve-hausdorff-dimension`

Claim/conventions: False even for a homeomorphism between compact metric spaces: identity ([0,1],|x-y|)->([0,1],sqrt(|x-y|)) is a homeomorphism, but the dimensions are one and two.

Dependencies: `def-hausdorff-content-at-scale-delta`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`.

Support: https://arxiv.org/pdf/math/0302190 — Semmes §2.5 pp.31–32, snowflake topology, diameter and Hausdorff-measure identities; see the source-text qualification below.

Proof/dependency rationale: Verify triangle inequality sqrt(a+b)<=sqrt(a)+sqrt(b) and ball correspondence. At each scale diam_snow(U)=sqrt(diam(U)), so H_snow^t=H_Euclidean^(t/2); direct computation gives dimension two. This proof includes its metric construction, requiring no additional theorem.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-zero-hausdorff-dimension-implies-countability`

Claim/conventions: False: Hausdorff dimension zero implies that the set is countable.

Dependencies: `cex-uncountable-zero-dimensional-binary-digit-set`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.4.2, square-position specialisation.

Proof/dependency rationale: Use the already computed uncountable sparse-digit compact set.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

### `fs-vanishing-positive-hausdorff-measures-implies-countability`

Claim/conventions: False: if H^s(A)=0 for every s>0, then A is countable.

Dependencies: `cex-uncountable-zero-dimensional-binary-digit-set`.

Support: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf — Bishop–Peres Example 1.4.2, square-position specialisation.

Proof/dependency rationale: The same sparse-digit set refutes this logically equivalent formulation requested by the design. No second duplicate counterexample construction.

Checkpoint: scaffolded; proof authoring and validators pending. Next action: continue the dependency-ordered scaffold.

## Harvest completion and source qualifications

Coverage contains the source-owned headings over the explicitly selected ranges, with independent Fremlin, Falconer, Bishop–Peres and Semmes treatments. A heading's several substantive parts may have separate dispositions; these are not new named source theorems. item_support separately maps every scaffolded item to its precise backing and local application. No result was removed because a source failed to fetch.

Snowflake counterexample verification: https://arxiv.org/pdf/math/0302190, Semmes §2.5 pp.31–32, was fetched as a 108-page PDF and read completely. Its measure identity H_d^alpha=H_(d^a)^(alpha/a) supports dimension multiplication by 1/a. The final sentence in the extracted text appears to reverse the dimension ratio; use the preceding exact diameter and measure identities and the direct interval computation, not that sentence. Canonical batch source updated to Semmes for this item. This is a resolved source-text qualification, not an assumed numerical rule.

Proof checks still required at authoring: expand the sharp Cantor interval induction and endpoint exhaustion; verify canonical digit-map Borel measurability, probability axioms and dyadic-boundary nullity; give the gasket grid-contact bound including boundaries; spell out finite-S and exponent-zero branches. These are specified local proof steps, not imported unproved prerequisites. No infinite-product theorem, Frostman converse, Billingsley lemma, self-similar dimension formula, Peano construction, isodiametry or surface area formula is load-bearing.

Source normalisation: Falconer uses positive diameters and strict delta; Fremlin treats positive exponents then discusses counting; Bishop uses strict delta. Translate to the design's <=delta with dyadic/cofinal scale comparison and nonempty-cover convention. No author is claimed to use every convention verbatim.

Page decision: 31 A items and 15 B items. The source-independent prerequisite closure fits below 60; no page split is proposed. No structural plan changes are needed or authorised.

## Closing validation receipt

Scaffold complete: 31 A items, 15 B items, every item carrying an explicit deps array. Coverage: four independent source documents, 79 harvested heading/result dispositions and 46 item-support records. This receipt supersedes the earlier per-item pending-validator checkpoints; proof authoring remains future work.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-1.coverage.json`: PASS, 1 page, 79 harvested results, zero errors/warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-1.pages.json`: PASS, 46 items, zero errors/warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-*.pages.json`: PASS at the closing snapshot, 677 items, zero errors and zero normalisations.
- `node tools/validate-plan.mjs /tmp/frontier-33-batch-1-overlay.json`: PASS, exit 0. The temporary overlay replaces only these two pages in a copy of plan-spec.json. No item cycles, forward references, B-page dependencies or unresolved IDs; existing redundant-prerequisite advisories remain. The real plan was not modified.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL at the same snapshot, six missing-dependency errors outside batch 1: thm-kernel-range-annihilator-identities -> def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces; thm-regular-local-rings-are-domains-and-cohen-macaulay -> def-cohen-macaulay-module-and-ring; lem-polynomial-local-regularity-fibre-step -> thm-euclidean-domain-implies-pid; def-normal-noetherian-ring -> def-integrally-closed-domain; def-total-ring-of-fractions -> def-localisation-of-a-commutative-ring. These are other owners' artifacts and were not edited.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-1.coverage.json --stamp --timeout-sec 15`: FAIL, 0/4 verified; all four hosts returned EAI_AGAIN. No fetch stamps were written.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-1.coverage.json --out /tmp/frontier-33-batch-1-url-liveness.json --recover --fail-on-dead --timeout-ms 5000`: FAIL, 0/4 live, zero archive recoveries. Each reported curl error 6, could not resolve host. Under this DNS failure the archive result does not establish that archive copies are absent or that any document is dead. Web-tool successful reads remain recorded separately in coverage; they are not substituted for validator receipts.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-1.coverage.json --liveness /tmp/frontier-33-batch-1-url-liveness.json --require-verified`: FAIL, 24 included results have no openable source according to that failed liveness sweep. This is the downstream consequence of the DNS failure, not a reason to drop any harvest result or fabricate verification.

Readiness: NOT READY because the fetch/liveness/backing gates have not passed. The next action is to rerun those exact gates in an environment where the validator can resolve the source hosts, preserving the verified reading evidence and all harvested results. Whole-run content-policy failures also need their respective owners. No permissions requested, workflow transitions performed, or files outside this batch's three authorised artifacts modified (temporary validation files are under /tmp).

## Reharvest-2-b1 receipt (2026-09-07)

`research/frontier-33-reharvest-plan.json` was read directly. Its 15 `work[]`
rows belong only to batches 2, 13, 14, 15, and 20; it names no batch-1
coverage file, source, or orphaned result. Therefore no harvest disposition,
claim, dependency, item id, or page constraint was changed, and no source row
was deleted merely to clear a gate. The already-preserved provenance for the
Bishop--Peres alternate remains `original_url:
https://www.math.stonybrook.edu/~bishop/fractalbook.pdf` on the live commack
copy.

The batch-local source check found the previously unstamped Falconer chapter
URL (`https://www.ma.ic.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf`) to be the
only obstacle to a fresh all-source fetch receipt. A fresh validator fetch
twice returned `EAI_AGAIN`; a fresh recovery/liveness sweep returned DNS error
6 for all four batch hosts, with no archive result. This is a resolver-wide
failure, not evidence that Falconer's document or a particular harvested result
has disappeared. Independently, the complete 19-page PDF was readable through
the web PDF extractor on 2026-09-07, including §1.4, printed pp.12--13:
Theorem 1.12 gives the Hausdorff/Lebesgue comparison and explicitly records
the one-dimensional constant as 1. This confirms that its existing
`thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line` row remains
faithful. Fremlin 264I, printed p.41 (PDF p.40), independently gives equality
of the corresponding outer measures and measurable restrictions; at r=1 its
factor is 1. That is corroboration only: the planned local proof keeps the
design's elementary interval-cover route and does not import the source's
isodiametric proof.

No replacement treatment was selected: none is authorised by the reharvest
plan for this batch, and replacing a still-readable source during a global DNS
outage would not establish a superior URL. The dead-source/replacement/search
record for this batch is consequently: none / no replacement / resolver-wide
DNS and archive-recovery check recorded above / no affected claim constraint.

Reharvest validator receipt:

- `node tools/source-backing.mjs --coverage research/frontier-33-batch-1.coverage.json --liveness research/frontier-33-url-liveness.json`: PASS, 24 authored results backed by the current ledger.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-1.coverage.json`: PASS, 1 page and 79 harvested results, zero errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-1.coverage.json --stamp --timeout-sec 90`: FAIL, 3/4 fetch-verified; Falconer returned `EAI_AGAIN` and received no fabricated stamp. The unstamped gate check also fails for that one URL.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-1.coverage.json --out /tmp/frontier-33-batch-1-url-liveness.json --recover --fail-on-dead`: FAIL, 0/4 live because each hostname had curl DNS error 6; zero archive recoveries. The temporary receipt is not published state.
- With `--require-verified`, `source-backing` reports only `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line` as lacking a stamped source; this is the expected consequence of the Falconer fetch failure, not a mathematical or coverage deletion.

Open obligation: rerun the fetch stamp, liveness sweep, and verified-backing
gate after the validator's DNS resolver can reach the four already-recorded
full-text URLs. Do not amend the scaffold or remove the Falconer harvest rows
unless a source-specific failure, recovery, or re-source is actually verified.

## Falconer host recovery (2026-09-07)

The same 19-page Falconer chapter is available from Imperial College on its
current `www.ma.imperial.ac.uk` hostname. A fresh full-PDF download returned
HTTP 200, `application/pdf`, and 1,861,380 bytes, but Node's fetch stack timed
out on that host. The Internet Archive's 2025-01-18 snapshot passed the same
Node fetch used by `source-fetch-check`; its 1,861,380-byte body has the same
SHA-256 hash as the live Imperial copy. The coverage source now uses that
snapshot and preserves the live Imperial URL as `original_url`; its two
item-support references retain the live URL. The retired `www.ma.ic.ac.uk`
alias remains in the preceding reharvest receipt. The mathematical harvest,
locators, dispositions, claims, and proof plans are unchanged.

## Step-3 fix pass

Finding id: none for batch 1. The controlling review,
`research/frontier-33-alpha-a-step3-scaffold-review.md`, gives this pair the
`sufficient` verdict and identifies its sole licensed correction as the
batch-4 countable-choice hypothesis. It records no batch-1 finding to apply or
push back on.

Disposition: no scaffold repair. The existing 31 A-page and 15 B-page item
records remain the dependency-closed MT-21 route; no item id, claim,
convention, dependency, source disposition, page split, or proof strategy was
changed. The changed scaffold record is therefore this notes receipt only.

Evidence re-read and fetch-verified in this pass: Fremlin, 264A--I and the
selected 264J--K/264X/264Y range,
https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf; Falconer, §1.2,
Lemma 1.8, §1.4, and Theorem 1.14,
https://web.archive.org/web/20250118084044if_/https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
(with the live Imperial original retained in coverage); Bishop--Peres, §1.2,
§1.3, Examples 1.3.4 and 1.4.2, and Exercise 1.6,
https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf; and Semmes,
Lemma 2.40 and §2.5,
https://arxiv.org/pdf/math/0302190. The exact source-owned headings and every
one of the 79 resulting dispositions remain in the coverage ledger.

Current validators:

- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-1.coverage.json`: PASS, 4/4 fetch-verified sources.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-1.coverage.json`: PASS, 1 page, 79 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-33-batch-1.pages.json`: PASS, 46 items, 0 missing dependency arrays, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: PASS, 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs <temporary plan-spec overlay replacing only batch 1>`: PASS, exit 0; no cycles, forward references, B-page dependencies, or unresolved IDs. Repository-wide redundant-prerequisite notices are informational and not batch-1 changes.

## Step-5 authoring

Authoring in dependency order. All items/pages remain draft; validators pending. Current source passages read: Fremlin 264A–G,I–K; Falconer §§1.2,1.4 and Theorem 1.6(b); Bishop–Peres §1.2 and Examples 1.3.2,1.3.4,1.4.2; Semmes §2.5. Source URLs and locators remain those in the item checkpoints above. Web full relevant arguments were read; shell fetch failed DNS and is not claimed as verification.

Repair: replace the generated-statement dependency rem-extended-real-conventions with def-extended-reals in the extended-diameter item. Preserve the old published remark unchanged. Explicit countable-choice hypotheses are retained throughout measure-theoretic results; the Vitali refutation assumes full Choice.

### Authored `def-extended-diameter-for-hausdorff-covers`

Exact claim/conventions: For a metric space $(X,d)$ extend the diameter of [[def-metric-bounded-diameter]] to every subset $A\subseteq X$ by

$$\operatorname{diam}A=\begin{cases}0&A=\varnothing,\\ \sup\{d(x,y):x,y\in A\}&A\ne\varnothing\text{ and }A\text{ bounded},\\+\infty&A\text{ unbounded}.\end{cases}$$

The bounded nonempty branch is the existing real diameter; the infinite value belongs to [[def-extended-reals]]. A nonempty set has diameter zero exactly when it is a singleton: all its pairwise distances must be zero. No value of a point-to-empty-set distance is introduced.

Dependencies: `def-metric-bounded-diameter`, `def-extended-reals`.

Sources: Fremlin 264A, 264K — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `def-hausdorff-content-at-scale-delta`

Exact claim/conventions: Let $(X,d)$ be a metric space, $A\subseteq X$, $s\in[0,\infty)$ a finite real, and $0<\delta\le\infty$. A cover is a finite or countably infinite family $(U_j)$ of nonempty arbitrary subsets of $X$, with $A\subseteq\bigcup_jU_j$ and $\operatorname{diam}U_j\le\delta$. The empty family is permitted, and covers precisely the empty set. Define

$$\mathcal H^s_\delta(A)=\inf\left\{\sum_j(\operatorname{diam}U_j)^s:(U_j)\text{ is such a cover}\right\}.$$

Use [[def-extended-diameter-for-hausdorff-covers]] and the nonnegative extended sums of [[def-nonnegative-extended-series]]. For this covering cost only, define $r^0=1$ for every $r\in[0,\infty]$, including $0$ and $\infty$; for $s>0$, use [[def-real-power]] at finite bases and set $\infty^s=\infty$. Thus a nonempty singleton costs one when $s=0$, and zero when $s>0$. Finite covers are not padded with empty sets.

The infimum is in $[0,\infty]$, with $\inf\varnothing=\infty$ when there is no admissible cover; existence follows from [[lem-extended-reals-complete]]. The empty sum is zero. The value $\mathcal H^s_\infty$ is called **Hausdorff content**; $\mathcal H^s_\delta$ for finite $\delta$ is the scale approximation.

Dependencies: `def-extended-diameter-for-hausdorff-covers`, `def-nonnegative-extended-series`, `def-real-power`, `lem-extended-reals-complete`.

Sources: Bishop–Peres §1.2 pp.4–6; Fremlin 264A,D(b),K — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `lem-hausdorff-scale-monotonicity-and-limit`

Exact claim/conventions: For $A\subseteq B\subseteq X$ and $0<\eta\le\delta\le\infty$,

$$\mathcal H^s_\delta(A)\le\mathcal H^s_\delta(B),\qquad \mathcal H^s_\delta(A)\le\mathcal H^s_\eta(A).$$

For every metric space, every subset $A$, and every finite $s\ge0$,

$$\sup_{0<\delta<\infty}\mathcal H^s_\delta(A)=\lim_{k\to\infty}\mathcal H^s_{2^{-k}}(A)\in[0,\infty].$$

No separability or existence of a countable small-scale cover is assumed.

Dependencies: `def-hausdorff-content-at-scale-delta`, `lem-extended-reals-complete`.

Sources: Fremlin 264D(d),264K — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `def-hausdorff-measure`

Exact claim/conventions: For every subset $A$ of a metric space and finite real $s\ge0$, define the **unnormalised Hausdorff measure** by

$$\mathcal H^s(A)=\sup_{0<\delta<\infty}\mathcal H^s_\delta(A)=\lim_{k\to\infty}\mathcal H^s_{2^{-k}}(A).$$

The scale functions use [[def-hausdorff-content-at-scale-delta]] and the limit exists by [[lem-hausdorff-scale-monotonicity-and-limit]]. The name here initially denotes a set function on all subsets. Its outer-measure axioms and the measure on its Carathéodory measurable domain are established below; no measurability of an arbitrary subset is built into the notation. No volume normalising factor is inserted.

Dependencies: `def-hausdorff-content-at-scale-delta`, `lem-hausdorff-scale-monotonicity-and-limit`.

Sources: Fremlin 264A–C,K — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-measure-is-an-outer-measure`

Exact claim/conventions: Assume the Axiom of Countable Choice. For any metric space and finite $s\ge0$, each $\mathcal H^s_\delta$, $0<\delta\le\infty$, is an outer measure. So is $\mathcal H^s$: it vanishes at $\varnothing$, is monotone, and satisfies

$$\mathcal H^s\left(\bigcup_{j\ge0}A_j\right)\le\sum_{j\ge0}\mathcal H^s(A_j).$$

Dependencies: `def-hausdorff-measure`, `def-outer-measure`, `def-countable-choice`, `def-nonnegative-extended-series`.

Sources: Fremlin 264B and 264Xa — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-measure-is-metric-and-borel-measurable`

Exact claim/conventions: Assume the Axiom of Countable Choice. On every metric space, $\mathcal H^s$ is a metric outer measure for each finite $s\ge0$. In particular, if nonempty $A,B$ have $d(A,B)>0$,

$$\mathcal H^s(A\cup B)=\mathcal H^s(A)+\mathcal H^s(B).$$

The equality also holds if either set is empty. Every Borel set is Carathéodory measurable, and the restriction to the full Carathéodory sigma-algebra is a complete measure.

Dependencies: `thm-hausdorff-measure-is-an-outer-measure`, `def-metric-outer-measure`, `thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures`, `thm-caratheodory-outer-measure-theorem`.

Sources: Fremlin 264C,E; Bishop–Peres Theorem 1.2.4 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `prop-zero-dimensional-hausdorff-measure-counts`

Exact claim/conventions: Assume the Axiom of Countable Choice. For every subset $A$ of a metric space, $\mathcal H^0(A)=\#A$ when $A$ is finite and $\mathcal H^0(A)=\infty$ otherwise. Every subset is $\mathcal H^0$-measurable.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-measure-is-metric-and-borel-measurable`, `def-counting-measure`.

Sources: Fremlin 264D(b),264G(a) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-measure-has-borel-hulls`

Exact claim/conventions: Assume the Axiom of Countable Choice. For every subset $A$ of a metric space and every finite $s\ge0$ there is a Borel set $G\supseteq A$ with $\mathcal H^s(G)=\mathcal H^s(A)$. Consequently

$$\mathcal H^s(A)=\inf\{\mathcal H^s(B):A\subseteq B,\ B\text{ Borel}\},$$

so this is also the outer measure induced by the Borel restriction. In Euclidean spaces $G$ may be chosen $G_\delta$. This regularity assertion does not assert local finiteness.

Dependencies: `thm-hausdorff-measure-is-metric-and-borel-measurable`, `prop-zero-dimensional-hausdorff-measure-counts`, `def-countable-choice`.

Sources: Fremlin 264F(a,b),264K,264Xd,264Ye; Falconer Theorem 1.6(a) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `prop-finite-hausdorff-measurable-sets-have-borel-cores`

Exact claim/conventions: Assume the Axiom of Countable Choice. Let $E$ be $\mathcal H^s$-measurable and sigma-finite, where $s\ge0$ is finite. There are Borel sets $E_-\subseteq E\subseteq E_+$ such that $\mathcal H^s(E_+\setminus E_-)=0$. If $E\subseteq\mathbb R^n$ has finite measure, it contains an $F_\sigma$ set of equal measure; for every $\varepsilon>0$ it contains a closed set $F$ with $\mathcal H^s(E\setminus F)<\varepsilon$.

Dependencies: `thm-hausdorff-measure-has-borel-hulls`, `thm-continuity-from-below-for-measures`.

Sources: Fremlin 264F(c); Falconer Theorem 1.6(b) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `prop-hausdorff-content-and-measure-have-the-same-null-sets`

Exact claim/conventions: For a subset $A$ of any metric space and finite $s\ge0$,

$$\mathcal H^s_\infty(A)=0\quad\Longleftrightarrow\quad(\forall\delta\in(0,\infty))\ \mathcal H^s_\delta(A)=0\quad\Longleftrightarrow\quad\mathcal H^s(A)=0.$$

This is equality of null-set classes, not equality of the set functions.

Dependencies: `def-hausdorff-measure`, `prop-zero-dimensional-hausdorff-measure-counts`.

Sources: Bishop–Peres Proposition 1.2.6; Fremlin 264Xa — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-measure-under-lipschitz-maps`

Exact claim/conventions: Assume the Axiom of Countable Choice. Let $f:D\subseteq X\to Y$ be an $L$-Lipschitz map between metric spaces and $A\subseteq D$. For finite $s\ge0$ and $L>0$,

$$\mathcal H^s(f(A))\le L^s\mathcal H^s(A).$$

If $L=0$, the image is empty or a singleton: $\mathcal H^s(f(A))=0$ for $s>0$ and $\mathcal H^0(f(A))\le\mathcal H^0(A)$. No product $0\cdot\infty$ is used.

Dependencies: `def-hausdorff-measure`, `prop-zero-dimensional-hausdorff-measure-counts`, `def-lipschitz-holder-contraction`.

Sources: Fremlin 264G,264Yj(i); Falconer Lemma 1.8 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cor-hausdorff-measure-under-similarities`

Exact claim/conventions: Assume the Axiom of Countable Choice. If $f:D\subseteq X\to Y$ satisfies $d_Y(f(x),f(y))=c\,d_X(x,y)$ for a finite constant $c>0$, then for every $A\subseteq D$ and finite $s\ge0$,

$$\mathcal H^s(f(A))=c^s\mathcal H^s(A).$$

This includes isometries and Euclidean translations and dilations. The Hausdorff outer value of a subset of a metric subspace equals its value computed in the ambient metric space.

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`.

Sources: Fremlin 264G,264Yf(i),264Yj(i) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `lem-hausdorff-exponent-comparison`

Exact claim/conventions: For $0\le s<t<\infty$ and finite $\delta>0$,

$$\mathcal H^t_\delta(A)\le\delta^{t-s}\mathcal H^s_\delta(A).$$

Consequently $\mathcal H^s(A)<\infty$ implies $\mathcal H^t(A)=0$.

Dependencies: `def-hausdorff-measure`, `thm-real-power-laws`.

Sources: Bishop–Peres Lemma 1.2.5; Fremlin 264Xe — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `def-hausdorff-dimension`

Exact claim/conventions: For a subset $A$ of a metric space define

$$\dim_H A=\inf\{s\in[0,\infty):\mathcal H^s(A)=0\}\in[0,\infty].$$

Here $\mathcal H^s$ is [[def-hausdorff-measure]], $s$ always denotes a finite real exponent, and $\inf\varnothing=\infty$, in the extended order of [[lem-extended-reals-complete]]. Thus $\dim_H\varnothing=0$. Dimension itself may be infinite, but no measure with exponent $\infty$ is being defined. Any empty supremum over exponents below is taken in $[0,\infty]$ and equals zero, not the empty supremum in the whole extended real line.

Dependencies: `def-hausdorff-measure`, `lem-extended-reals-complete`.

Sources: Bishop–Peres Definition 1.2.1 and Proposition 1.2.6 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-dimension-critical-exponent`

Exact claim/conventions: Write $d=\dim_H A$. For finite exponents $s\ge0$,

$$s<d\implies\mathcal H^s(A)=\infty,\qquad s>d\implies\mathcal H^s(A)=0.$$

Moreover

$$d=\inf\{s\ge0:\mathcal H^s(A)<\infty\}=\sup\{s\ge0:\mathcal H^s(A)=\infty\},$$

where all tested exponents are finite, $\inf\varnothing=\infty$ and the supremum is in $[0,\infty]$, so $\sup\varnothing=0$. If $0<\mathcal H^s(A)<\infty$, then $d=s$. The ray assertions impose no value at a finite critical exponent itself.

Dependencies: `def-hausdorff-dimension`, `lem-hausdorff-exponent-comparison`.

Sources: Bishop–Peres Proposition 1.2.6; Fremlin 264Yk — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-dimension-is-countably-stable`

Exact claim/conventions: Assume the Axiom of Countable Choice. For any countable family of subsets of a metric space,

$$\dim_H\left(\bigcup_{k\ge0}A_k\right)=\sup_{k\ge0}\dim_H A_k.$$

Inclusion implies monotonicity of dimension. Every at most countable set, including the empty set, has dimension zero.

Dependencies: `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-measure-is-an-outer-measure`, `prop-zero-dimensional-hausdorff-measure-counts`.

Sources: Bishop–Peres §1.1 closing paragraph (p.3), Example 1.2.7, Exercise 1.6 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cor-lipschitz-maps-do-not-increase-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. A Lipschitz map $f:D\subseteq X\to Y$ satisfies $\dim_H f(A)\le\dim_H A$ for every $A\subseteq D$. If $f$ is a bijection from $D$ onto $f(D)$ and there exist $0<a\le b<\infty$ with

$$a\,d_X(x,y)\le d_Y(f(x),f(y))\le b\,d_X(x,y)\quad(x,y\in D),$$

then $\dim_H f(A)=\dim_H A$ (bi-Lipschitz invariance).

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`, `thm-hausdorff-dimension-critical-exponent`.

Sources: Fremlin 264G,Yj(i),Yk; Falconer Lemma 1.8 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `lem-euclidean-cube-bounds-for-hausdorff-measure`

Exact claim/conventions: Assume the Axiom of Countable Choice. For every integer $n\ge1$ and $A\subseteq\mathbb R^n$ in the Euclidean metric,

$$\lambda_n^*(A)\le\mathcal H^n(A),\qquad 1\le\mathcal H^n((0,1]^n)\le n^{n/2}.$$

Only coordinate boxes, not the isodiametric inequality, are needed.

Dependencies: `def-hausdorff-measure`, `def-lebesgue-outer-measure`, `thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-real-power-laws`.

Sources: Falconer §1.2 p.8 cube upper estimate; §1.4 pp.12–13 volume covers; Fremlin 264H(b) — https://www.ma.ic.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`

Exact claim/conventions: Assume the Axiom of Countable Choice. For every $A\subseteq\mathbb R$,

$$\mathcal H^1(A)=\lambda_1^*(A).$$

Consequently their Carathéodory measurable domains and completed measures agree.

Dependencies: `lem-euclidean-cube-bounds-for-hausdorff-measure`, `def-lebesgue-outer-measure`, `def-hausdorff-measure`.

Sources: Falconer §1.4 p.12, immediately before Theorem 1.11 — https://www.ma.ic.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`

Exact claim/conventions: Assume the Axiom of Countable Choice. For each integer $n\ge1$ there is a finite $c_n\in[1,n^{n/2}]$ such that

$$\mathcal H^n(B)=c_n\lambda_n(B)\quad(B\text{ Borel}),\qquad \mathcal H^n(A)=c_n\lambda_n^*(A)\quad(A\subseteq\mathbb R^n).$$

Here $c_n=\mathcal H^n((0,1]^n)$ and $c_1=1$. For $n\ge2$ no exact identification of $c_n$ is proved here.

Dependencies: `lem-euclidean-cube-bounds-for-hausdorff-measure`, `cor-hausdorff-measure-under-similarities`, `thm-hausdorff-measure-is-metric-and-borel-measurable`, `thm-hausdorff-measure-has-borel-hulls`, `thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure`, `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`.

Sources: Fremlin 264I statement (weaker constant); design MT-21 prescribed uniqueness route — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cor-euclidean-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. For each integer $n\ge1$, $\dim_H\mathbb R^n=n$ and every subset of $\mathbb R^n$ has dimension at most $n$. Every $A\subseteq\mathbb R^n$ with $\lambda_n^*(A)>0$ has dimension $n$.

Dependencies: `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`, `thm-hausdorff-dimension-is-countably-stable`, `thm-hausdorff-dimension-critical-exponent`.

Sources: Bishop–Peres §1.2 p.7 after Lemma 1.2.8; Falconer §1.2 p.8 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-hausdorff-mass-distribution-principle`

Exact claim/conventions: Assume the Axiom of Countable Choice. Let $\mu$ be a finite Borel measure on a metric space $X$ and define

$$\mu^*(E)=\inf\{\mu(B):E\subseteq B,\ B\text{ Borel}\}.$$

Let $A\subseteq X$ have $\mu^*(A)>0$, and let $s\ge0$ be finite. If $C>0$ and $r_0>0$ satisfy $\mu^*(U)\le C(\operatorname{diam}U)^s$ for every nonempty $U$ of diameter less than $r_0$, then

$$\mathcal H^s(A)\ge\mu^*(A)/C>0,\qquad\dim_H A\ge s.$$

For Borel $A$, $\mu^*(A)=\mu(A)$. A bound $\mu(B(x,r))\le Cr^s$ for every open ball with $0<r<r_0$ implies the same diameter bound (with the same $C$) for sets of diameter less than $r_0$. At exponent zero the nonempty-set cost is one.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-dimension-critical-exponent`, `def-outer-measure`, `def-measure`.

Sources: Bishop–Peres Lemma 1.2.8 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `lem-cantor-cylinder-masses`

Exact claim/conventions: Assume the Axiom of Countable Choice. For the middle-thirds Cantor set, a level-$m$ basic interval is

$$I_b=\left[\sum_{j=1}^m2b_j3^{-j},\ \sum_{j=1}^m2b_j3^{-j}+3^{-m}\right],\qquad b_j\in\{0,1\}.$$

Every such interval has Cantor measure $\mu_c(I_b)=2^{-m}$, including $m=0$, where the interval is $[0,1]$.

Dependencies: `def-cantor-measure`, `prop-cantor-measure-is-a-singular-atomless-probability-measure`, `thm-cantor-function-properties`, `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`, `thm-cantor-set-ternary-description`, `def-cantor-function`.

Sources: Fremlin 264J(a,d); Bishop–Peres Example 1.4.2 (uniform digits) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `lem-sharp-cantor-interval-mass-bound`

Exact claim/conventions: Assume the Axiom of Countable Choice. Set $s=\log 2/\log 3$. For every interval $I\subseteq\mathbb R$,

$$\mu_c(I)\le(\operatorname{diam}I)^s.$$

In particular, for every nonempty bounded $U\subseteq\mathbb R$, its induced Cantor outer measure satisfies $\mu_c^*(U)\le(\operatorname{diam}U)^s$.

Dependencies: `lem-cantor-cylinder-masses`, `thm-real-power-continuity-and-derivatives`, `thm-continuity-from-below-for-measures`, `prop-cantor-measure-is-a-singular-atomless-probability-measure`.

Sources: Fremlin 264J(c,d); Falconer Theorem 1.14 proof — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `thm-cantor-set-hausdorff-dimension-and-exact-measure`

Exact claim/conventions: Assume the Axiom of Countable Choice. For the middle-thirds Cantor set $C$ and $s=\log2/\log3$,

$$\mathcal H^s(C)=1,\qquad\dim_H C=s.$$

These values use the unnormalised diameter-power convention.

Dependencies: `lem-sharp-cantor-interval-mass-bound`, `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-cantor-set-ternary-description`, `thm-real-power-laws`.

Sources: Fremlin 264J; Falconer Theorem 1.14 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `def-binary-digit-restriction-set`

Exact claim/conventions: Let $\mathbb N_+=\{1,2,\ldots\}$ and $S\subseteq\mathbb N_+$. Define the **binary digit restriction set**

$$A_S=\left\{\sum_{k=1}^{\infty}a_k2^{-k}:a_k\in\{0,1\},\ a_k=0\text{ if }k\notin S\right\},\qquad a_S(n)=\#(S\cap\{1,\ldots,n\}).$$

Here $n\ge0$ and $a_S(0)=0$. The series is the positive-start-index series of [[def-series]], convergent since its tails are bounded by the geometric tails of [[thm-geometric-series]]. In particular $A_S\subseteq[0,1]$ and $0\in A_S$. The cardinality symbol uses [[def-countable]]. Membership requires the existence of an allowed expansion; points with two binary expansions are retained if either expansion is allowed. No choice of a preferred expansion is part of this definition.

Dependencies: `thm-geometric-series`, `def-series`, `def-countable`.

Sources: Bishop–Peres Example 1.3.2 and Example 1.4.2 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `prop-binary-digit-restriction-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. For every $S\subseteq\mathbb N_+$, the set $A_S$ is compact and

$$\dim_H A_S=\liminf_{n\to\infty}\frac{a_S(n)}n.$$

If $\mathbb N_+\setminus S$ is infinite, then $\mathcal H^1(A_S)=\lambda_1(A_S)=0$. If both $S$ and its complement are infinite, $A_S$ is uncountable. Finite $S$, including $S=\varnothing$, gives a finite set of dimension zero.

Dependencies: `def-binary-digit-restriction-set`, `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-geometric-series`, `thm-heine-borel-characterisation-r`, `thm-cantor-set-ternary-description`.

Sources: Bishop–Peres Examples 1.3.2,1.4.2; §1.3 grid comparison — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `rem-critical-hausdorff-measure-can-be-zero-finite-or-infinite`

Exact claim/conventions: Assume the Axiom of Countable Choice. Dimension one permits all three critical-measure behaviours. For $S$ the positive nonsquares, $a_S(n)=n-\lfloor\sqrt n\rfloor$, so [[prop-binary-digit-restriction-hausdorff-dimension]] gives $\dim_H A_S=1$ and $\mathcal H^1(A_S)=0$. On the other hand [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]] gives $\mathcal H^1([0,1])=1$ and $\mathcal H^1(\mathbb R)=\infty$. Both sets have dimension one by [[cor-euclidean-hausdorff-dimension]], since they have positive Lebesgue measure. The critical exponent alone therefore specifies none of zero, finite positive, or infinite critical measure.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `cor-euclidean-hausdorff-dimension`.

Sources: Bishop–Peres Proposition 1.2.6 and Example 1.4.2 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `rem-hausdorff-cover-conventions-and-normalisation`

Exact claim/conventions: Assume the Axiom of Countable Choice. The covering convention matters. For the diameter-power definition, replacing nonempty covering sets by their closures leaves diameters unchanged, hence gives the same infimum even at a fixed scale. Open enlargement gives the same limiting measure for positive exponents, with scale and cost slack. Finite-scale content should not be confused with the limiting measure: [[prop-hausdorff-content-and-measure-have-the-same-null-sets]] establishes only their common null sets.

If $\mathcal S^s$ denotes the analogous limiting infimum restricted to open metric balls, then for $s>0$,

$$\mathcal H^s(A)\le\mathcal S^s(A)\le2^s\mathcal H^s(A).$$

For the second inequality, enclose each nonempty cover member of diameter $d_j$ in a ball about one of its points, of radius slightly greater than $d_j$. Its diameter is at most twice that radius. Choose positive enlargements with summable cost error, including when $d_j=0$; the covering scale is increased by a factor tending to two and still tends to zero. Infimisation, vanishing cost error, and the small-scale limit give the inequality. The first inequality is inclusion of cover families. The ball-only convention is called spherical Hausdorff measure; equality with arbitrary-cover measure is not a general convention equivalence (Falconer §1.2).

**Recorded, not proved here.** The sharper Euclidean identification for this unnormalised convention is

$$c_n=\frac{2^n}{\lambda_n(B(0,1))}.$$

Fremlin 264H–I supplies the isodiametric argument and exact factor. The local theorem [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]] proves proportionality and elementary bounds only. No proof or example here uses the displayed exact identification for $n\ge2$.

Dependencies: `prop-hausdorff-content-and-measure-have-the-same-null-sets`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`.

Sources: Fremlin 264D(a,b,d),264H,I; Bishop–Peres §1.2 p.4 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `rem-hypersurface-chart-measure-and-hausdorff-measure-agreement`

Exact claim/conventions: The definition [[def-hausdorff-measure]] provides a metric notion of size, and [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]] relates its ambient-dimensional instance to Euclidean volume. The planned PDE applications may use chartwise $C^1$ change of variables already supplied by the integration track. Identifying chart-defined hypersurface measure with an appropriately normalised Hausdorff measure requires a further geometric-measure theorem. That identification belongs to a future treatment; it is not established or used here. Fremlin separates these topics between §§264 and 265.

Dependencies: `def-hausdorff-measure`, `thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure`.

Sources: Fremlin chapter 26 introduction and 265A opening; design geometric-measure receipt — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `rem-hausdorff-dimension-orients-the-weierstrass-graph`

Exact claim/conventions: The definition [[def-hausdorff-dimension]] now gives meaning to the dimension notation in the earlier orientation [[rem-weierstrass-graph-hausdorff-dimension]]. That external remark is mentioned only as a reading connection. No graph-dimension value, parameter range, or present state of the Weierstrass dimension problem is asserted or proved by this page.

Dependencies: `def-hausdorff-dimension`.

Sources: Bishop–Peres §1.2 p.9 Weierstrass discussion; design forward-reference receipt — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; definition or orientation; no proof verification claimed. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-cantor-critical-measure-computed`

Exact claim/conventions: Assume the Axiom of Countable Choice. Let $C$ be the middle-thirds Cantor set and $s=\log2/\log3$. Its level-$m$ basic cover has $s$-cost exactly one. In the small-scale limit,

$$\mathcal H^s(C)=1,\qquad\dim_H C=s,\qquad\mathcal H^1(C)=0.$$

Dependencies: `thm-cantor-set-hausdorff-dimension-and-exact-measure`, `lem-hausdorff-exponent-comparison`.

Sources: Fremlin 264J — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-fat-cantor-hausdorff-measure-and-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. For the Smith–Volterra–Cantor set $S$,

$$\mathcal H^1(S)=\lambda_1(S)=\tfrac12,\qquad\dim_H S=1.$$

Dependencies: `def-fat-cantor-set`, `thm-fat-cantor-set-has-positive-measure`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`, `thm-continuity-from-above-for-measures`.

Sources: Bishop–Peres §1.2 p.7 positive-volume consequence; existing fat Cantor construction — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-line-segment-hausdorff-length`

Exact claim/conventions: Assume the Axiom of Countable Choice. For $p,q\in\mathbb R^2$, the segment $[p,q]=\{(1-t)p+tq:0\le t\le1\}$ satisfies

$$\mathcal H^1([p,q])=|p-q|.$$

Its dimension is one when $p\ne q$ and zero when $p=q$.

Dependencies: `cor-hausdorff-measure-under-similarities`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`, `thm-hausdorff-dimension-is-countably-stable`.

Sources: Fremlin 264G; Falconer §1.4 p.12 — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-lipschitz-graph-has-finite-hausdorff-length`

Exact claim/conventions: Assume the Axiom of Countable Choice. If $f:[0,1]\to\mathbb R$ is $L$-Lipschitz, $0\le L<\infty$, its graph $\Gamma=\{(x,f(x)):0\le x\le1\}$ satisfies

$$1\le\mathcal H^1(\Gamma)\le\sqrt{1+L^2},\qquad\dim_H\Gamma=1.$$

Dependencies: `thm-hausdorff-measure-under-lipschitz-maps`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`.

Sources: Fremlin 264G and 264Xf(i) (specialised Lipschitz graph) — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-countable-dense-set-has-zero-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. The set $D=\mathbb Q\cap[0,1]$ has $\dim_H D=0$, although it is dense in $[0,1]$ and its closure has dimension one. Hausdorff dimension need not be preserved by taking closure.

Dependencies: `thm-hausdorff-dimension-is-countably-stable`, `cor-euclidean-hausdorff-dimension`, `lem-q-and-irrationals-dense-r`, `thm-rationals-countable`.

Sources: Bishop–Peres Example 1.2.7 (countable nullity), specialised to Q — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `ex-sierpinski-gasket-dimension-by-hand`

Exact claim/conventions: Assume the Axiom of Countable Choice. Let $D=\{(0,0),(1,0),(0,1)\}$ and

$$K=\left\{\sum_{j=1}^{\infty}2^{-j}d_j:d_j\in D\right\}\subseteq\mathbb R^2,\qquad s=\frac{\log3}{\log2}.$$

Then $0<\mathcal H^s(K)<\infty$ and $\dim_H K=s$. No exact critical measure is asserted.

Dependencies: `thm-hausdorff-mass-distribution-principle`, `thm-hausdorff-dimension-critical-exponent`, `thm-geometric-series`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`.

Sources: Bishop–Peres Example 1.3.4 pp.15–16 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cex-dimension-one-binary-digit-set-with-zero-length`

Exact claim/conventions: Assume the Axiom of Countable Choice. The implication “a compact subset of $\mathbb R$ of Hausdorff dimension one has positive length” is false. Let $S=\mathbb N_+\setminus\{k^2:k\ge1\}$. Then $A_S$ is compact, $\dim_H A_S=1$, and $\mathcal H^1(A_S)=\lambda_1(A_S)=0$.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`.

Sources: Bishop–Peres Example 1.4.2, nonsquare-position specialisation — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cex-uncountable-zero-dimensional-binary-digit-set`

Exact claim/conventions: Assume the Axiom of Countable Choice. The implication “Hausdorff dimension zero forces countability” is false. For $S=\{k^2:k\ge1\}$, $A_S$ is compact and uncountable, yet $\dim_H A_S=0$ and $\mathcal H^t(A_S)=0$ for every finite $t>0$.

Dependencies: `prop-binary-digit-restriction-hausdorff-dimension`, `thm-hausdorff-dimension-critical-exponent`.

Sources: Bishop–Peres Example 1.4.2, square-position specialisation — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `cex-continuous-cantor-image-raises-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. A continuous image can have strictly larger Hausdorff dimension than its domain. The Cantor function restricted to $C$ maps $C$ continuously onto $[0,1]$, raising dimension from $\log2/\log3$ to one.

Dependencies: `thm-cantor-function-properties`, `cor-cantor-function-is-continuous`, `thm-cantor-set-hausdorff-dimension-and-exact-measure`, `cor-euclidean-hausdorff-dimension`.

Sources: Fremlin 264J; published Cantor-function ternary/binary formula — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-hausdorff-measure-is-countably-additive-on-all-subsets`

Exact claim/conventions: Assume the Axiom of Choice. The assertion “$\mathcal H^s$ is countably additive on every disjoint family of arbitrary subsets of $\mathbb R^n$” is false, already for $n=s=1$.

Dependencies: `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-a-vitali-set-is-not-lebesgue-measurable`, `def-caratheodory-measurable-set`.

Sources: Fremlin 264C,I; existing Vitali theorem — https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-hausdorff-dimension-of-union-is-the-sum`

Exact claim/conventions: Assume the Axiom of Countable Choice. The assertion $\dim_H(A\cup B)=\dim_H A+\dim_H B$ for all subsets of a metric space is false, even for disjoint compact subsets of the line.

Dependencies: `thm-hausdorff-dimension-is-countably-stable`, `cor-euclidean-hausdorff-dimension`.

Sources: Bishop–Peres §1.1 p.3 countable stability; Proposition 1.2.6 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-critical-hausdorff-measure-is-always-finite-positive`

Exact claim/conventions: Assume the Axiom of Countable Choice. The assertion “if $\dim_H A=s<\infty$, then $0<\mathcal H^s(A)<\infty$” is false. Both the lower and upper strict inequalities can fail at dimension one.

Dependencies: `cex-dimension-one-binary-digit-set-with-zero-length`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `cor-euclidean-hausdorff-dimension`.

Sources: Bishop–Peres Proposition 1.2.6 and Example 1.4.2 — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-continuous-injections-preserve-hausdorff-dimension`

Exact claim/conventions: Assume the Axiom of Countable Choice. The assertion “continuous injections preserve Hausdorff dimension” is false even for a homeomorphism between compact metric spaces. On $I=[0,1]$, put $d(x,y)=|x-y|$ and $\rho(x,y)=\sqrt{|x-y|}$. The identity from $(I,d)$ to $(I,\rho)$ is a homeomorphism, but the dimensions are one and two respectively.

Dependencies: `def-hausdorff-content-at-scale-delta`, `thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, `thm-hausdorff-dimension-critical-exponent`.

Sources: Semmes §2.5 pp.31–32, snowflake metric and Hausdorff measure identity — https://arxiv.org/pdf/math/0302190.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-zero-hausdorff-dimension-implies-countability`

Exact claim/conventions: Assume the Axiom of Countable Choice. The assertion “every set of Hausdorff dimension zero is countable” is false.

Dependencies: `cex-uncountable-zero-dimensional-binary-digit-set`.

Sources: Bishop–Peres Example 1.4.2, square-position specialisation — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

### Authored `fs-vanishing-positive-hausdorff-measures-implies-countability`

Exact claim/conventions: Assume the Axiom of Countable Choice. The assertion “if $\mathcal H^s(A)=0$ for every finite $s>0$, then $A$ is countable” is false.

Dependencies: `cex-uncountable-zero-dimensional-binary-digit-set`.

Sources: Bishop–Peres Example 1.4.2, square-position specialisation — https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf.

Provenance: source-backed statement adapted to the stated conventions; local proof adapts the cited route, with exact citation/use and boundary contracts written. Draft saved; focused validators pending. No unresolved mathematical obligation for this item. Next: author the next assigned item, then run the batch checks.

All 46 assigned item bodies and both planned measure-theory pages now exist as drafts. Proof contracts cover all 37 proof-bearing items; definitions and remarks have no proof rows. Next action: run focused precheck, apply its canonical repair, verify exact contracts and content policy, and record global plan results without editing the plan.

### Authoring repair checkpoint

All 46 drafts authored. The first precheck run requested 37 canonical phase repairs; these were applied, including its reordering of independent steps. Contracts were matched to the actual step text and remapped (not merely assigned sequential numbers). The first content-policy runs exposed narrow frontmatter-parser requirements: nested provenance/source mappings now use indented YAML, while dependency arrays use inline form. Initial contract source-section casing was corrected. The repaired precheck, content policy and strict contracts passed; a focused rendercheck passed all 48 item/page files with real KaTeX and the renderer YAML parser.

Mathematical refinements: the Cantor induction now states the neither-child case; its increasing sequence is explicitly the intersection of the selected cylinders with C. Exact interval values are derived locally from the line-comparison theorem rather than inserted into that theorem’s fact row. Countable Choice is explicit in applicable fact restatements. Counting costs cite their actual scale-content definition. The Cantor endpoint computation additionally cites def-cantor-function, where the digit formula is defined. Mixed-book reference locators are separated into references with the matching URLs. No planned item or claim was dropped. Exact higher-dimensional normalisation remains recorded-not-proved, with structured external support and no incoming logical dependency.

The no-argument validate-plan invocation returned usage rather than validation; the required actual-plan invocation `node tools/validate-plan.mjs research/plan-spec.json` then passed. No plan or workflow state was edited. Final reruns are next; no mathematical blocker remains.

### Final Step-5 validation receipt

Completed the 46 item IDs listed in the authoring checkpoints above, the batch manifest `research/frontier-33-batch-1.pages.json`, and both planned pages directly at `library/measure-theory/hausdorff-measure-and-hausdorff-dimension.md` and `library/measure-theory/hausdorff-measure-and-hausdorff-dimension-examples.md`. All 48 item/page artifacts remain draft. The completed `research/frontier-33-batch-1.proof-contracts.json` contains 37 item-specific proof contracts, exact cited source sections, actual proof uses and boundary dispositions. No judge record or publication stamp was written.

Final checks after the citation and mathematical repairs:

- `node tools/tsx-run.mjs tools/precheck.mts` invoked with the explicit 46 `items/ID.md` arguments extracted from this batch's manifest: exit 0, 37 proof-bearing items checked, 0 failing. Canonical phase repairs from the initial run were applied before this final run.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared order and item dependencies pass for 892 pages with item lists. The validator reports redundant-prerequisite advisories and 463 planned pages without item lists. The earlier no-argument invocation returned usage and is not counted as a successful check.
- `node tools/content-policy.mjs research/frontier-33-batch-1.pages.json`: exit 0, 46 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-1.proof-contracts.json --strict`: exit 0, 37/37 items checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` with the explicit 46 item paths and two page paths: exit 0, all 48 files pass real KaTeX, math-delimiter, wikilink and renderer-YAML checks.
- Focused YAML/manifest audit: all item IDs stable; each authored item's dependency list matches the batch manifest; all 48 artifacts have draft status and no judge record.

Provenance remains source-backed and AI-altered for adapted statements and proofs, with the exact sources and locators recorded per item. No generated statement is a logical dependency target: the extended-real convention edge uses `def-extended-reals`, and exact higher-dimensional normalisation remains explicitly recorded-not-proved. Countable Choice hypotheses and the full-Choice Vitali refutation are explicit. No planned claim or item was dropped; no unresolved authoring blocker remains. No other batch, plan structure, workflow state, independent review or published content was changed by this authoring work. Next action belongs to the build driver; this report makes no judgment or publication decision.

### Gate repair checkpoint

`lem-cantor-cylinder-masses` keeps its claim and proof unchanged. Its stale `empty` contract row now credits steps 1.1 and 2.1, where `m=0` gives empty digit sums, cylinder `[0,1]`, and mass one. Batch-1 strict contract and the cross-batch boundary audit pass on the current record.

## Reharvest-4-b1 same-document recovery receipt (2026-09-07)

The assigned `research/frontier-33-reharvest-plan.json` was read before this
repair. Its current `work` array is empty, so it names no batch-1 source or
orphan. The required fresh backing check against the retained run liveness
receipt nevertheless identified one actual orphan: the archived Falconer
carrier
`https://web.archive.org/web/20250118084044if_/https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf`
has stored status 503 and returned an Internal Error to the full-text reader.
Its sole uncovered result was
`thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line`, carried by
the row `1.4 Lebesgue measure: opening through the H^1 comparison` at printed
p.12. No item, dependency, source-content disposition, or claim was dropped
to clear that gate.

**Same-document check and source reading.** Before considering another
treatment, I opened the preserved original Imperial URL
`https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf`. It is the
complete 19-page chapter 1 of Falconer's *The Geometry of Fractal Sets*, not a
landing page or extract. The source's selected headings and passages were
reread: `1.2 Hausdorff measure`, equations (1.12)--(1.14), printed pp.7--8;
Theorem 1.6(a,b), pp.8--9; Lemma 1.8, p.10; `1.4 Lebesgue measure`, p.12;
and `1.5 Calculation of Hausdorff dimensions and measures`, Theorem 1.14 and
its proof, pp.14--15. In §1.4 the direct PDF explicitly says that the
definitions of one-dimensional Lebesgue and Hausdorff outer measure on
`R^1` coincide; its immediately following Theorem 1.12 records the
one-dimensional constant as one. Thus the recovered direct text exactly
supports the retained affected-result row. The other nine Falconer contents
rows remain faithful to those same reread named results and passages.

**Coverage repair and provenance.** The reader-facing `url` is restored to
that verified same-document Imperial chapter URL. `original_url` remains the
Imperial URL, and the failed Wayback citation is retained verbatim as
`archived_fallback.snapshot`, with the preceding workflow-monitor recovery
metadata and this reversion's reason. The 19-page archived-byte stamp is kept
as a stamp for the same document; no byte count or hash for the direct URL was
invented. No different treatment was selected and no harvest rows were
rewritten.

The affected item's exact constraint is unchanged: assuming Countable Choice,
for every `A` contained in `R`, `H^1(A)=lambda_1^*(A)`, so the Caratheodory
measurable domains and completed measures agree. Its planned dependencies
remain `lem-euclidean-cube-bounds-for-hausdorff-measure`,
`def-lebesgue-outer-measure`, and `def-hausdorff-measure`; its local proof
continues to use the design-mandated interval-cover argument rather than
Falconer's isodiametric route.

**Validators and transport record.**

- `node tools/coverage-checklist.mjs --require-destination research/frontier-33-batch-1.coverage.json` — **PASS**: 1 page, 79 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-1.coverage.json --stamp --timeout-sec 30` — **PASS**: 4/4 full-text stamps present, 0 newly stamped.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-1.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified --reharvest-plan /tmp/frontier-33-batch-1-reharvest-4-plan.json` — **PASS**: 24 authored results across this file remain backed; the temporary recomputation has `items_checked: 24` and `work: []`.
- The forced current-byte attempt, `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-1.coverage.json --stamp --force --timeout-sec 60`, was **BLOCKED**: all four unrelated current hosts returned `EAI_AGAIN`. It wrote no new stamp and did not alter the retained same-document stamp.
- The post-recovery liveness/recovery sweep to `/tmp/frontier-33-batch-1-reharvest-4-after-recovery-liveness.json` was **BLOCKED**: curl DNS error 6 on all four current hosts, including the browser-readable Imperial URL, and consequently no archive probe could resolve. This runner-wide resolver failure is not evidence that any source or archive is absent and does not justify another re-source.

Current coverage SHA-256 after this recovery is
`440f2dc8297a335156255556436a8ba8da1b2dbb17c653014dc09954f061f759`.
The batch has no remaining source-backing orphan. A resolver-capable runner
may refresh direct-URL liveness and byte stamps; it must preserve this
same-document carrier and all 79 harvested results.
