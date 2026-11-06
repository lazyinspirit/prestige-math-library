---
id: lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place
kind: lemma
title: "Fixed-resolution tie-breaking to one log canonical place"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
  - thm-bertini-smooth-hyperplane-section
  - thm-serre-criterion-ampleness
  - thm-ample-powers-very-ample-proper-base
  - def-relatively-ample-invertible-sheaf
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - def-axiom-of-choice
dependency_roles:
  lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  def-relatively-ample-invertible-sheaf: mathematical-premise
  lem-normal-noetherian-domain-intersection-of-height-one-localizations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, v1 Lemma 2.1
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place.md
dependency_level: 3
---

## Statement

Let X be either (i) smooth integral projective complex, or (ii) a normal integral projective Gorenstein terminal complex threefold with isolated singularities. In (ii), terminal means $K_{X}$ is Cartier and every exceptional prime on a smooth resolution has positive integral coefficient in $K_{Y}−μ^*K_{X}$. Let A be ample Cartier and $G_{0}$ an effective rational divisor numerically equivalent to γA. Assume $(X,G_{0})$ is lc and has exactly one reduced irreducible non-klt centre W, with codim W≥2. In (i), let μ:Y→X be a projective log resolution obtained by finitely many blowups in smooth centres. In (ii), fix an actual smooth projective log resolution with an effective exceptional rational divisor $T_*$ whose negative is μ-ample; this is an explicit model hypothesis and does not cover an arbitrary small resolution. Require the full exceptional divisor SNC together with the total transform of $G_{0}$ in both cases. Write

    K_Y+B_0=μ^*(K_X+G_0).

For every prescribed ε>0, there are an effective rational divisor $G_{1}≡γ_{1}A$ with |γ_1−γ|<ε and a log pullback on the SAME Y of the form

    K_Y+E+F=μ^*(K_X+G_1),

where E is a single smooth exceptional prime divisor dominating W, every coefficient of F is strictly below one, E∉Supp F, and the total support is SNC. The pair $(X,G_{1})$ is lc and E is its only lc place, not only its only coefficient-one divisor on this model. Negative coefficients of F are exceptional.


Assume the Axiom of Choice through the supplied projective-geometric interfaces. No nonnegative horizontal boundary after restricting F to E is included in this conclusion.

## Statement references

[[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]]

[[thm-bertini-smooth-hyperplane-section]]

[[thm-serre-criterion-ampleness]]

[[thm-ample-powers-very-ample-proper-base]]

[[def-relatively-ample-invertible-sheaf]]

[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] The initial lc pair and unique reduced non-klt centre, and the specified smooth-centre blowup model or normal-terminal model with supplied exceptional ample divisor, are exact hypotheses. Choice is inherited through ordinary projective ampleness and Bertini.

[F1] The exact suppliers are [[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]], [[thm-bertini-smooth-hyperplane-section]], [[thm-serre-criterion-ampleness]], [[thm-ample-powers-very-ample-proper-base]], [[def-relatively-ample-invertible-sheaf]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]], [[def-axiom-of-choice]]. The initial centre-only isolation is separate. This lemma constructs the stronger place-level perturbation by an independently variable finite exceptional ample cone. The final discrepancy inequality is derived from local differentials, not an imported valuation-extraction theorem.

## Proof

**Given:** Exactly the Statement data.

1.1 Write $K_{Y}−μ^*K_{X}=\sum $ $k_{j}$ $E_{j}$ for the exceptional primes. In the smooth branch each $k_{j}$ is a nonnegative integer: a smooth-centre blowup of codimension c has Jacobian factor of order c−1, and the composition adds pullbacks of these effective exceptional divisors. In the normal terminal branch each $k_{j}$ is a positive integer by the stated Cartier-terminal discrepancy hypothesis. [given, A1, F1, algebra]

2.1 There is a positive rational exceptional divisor $T_{0}$, supported on every exceptional prime, with $mμ^*A−T_{0}$ ample for some m. In the smooth branch the finite blowup construction is explicit. A single blowup has its tautological relatively ample $O(−E_{new})$. If a positive exceptional T has relatively ample negative for a previous stage, at the next blowup take a sufficiently large integral multiple of its pullback plus the new exceptional divisor. Its negative is relatively ample over the original base: the negative new exceptional is ample over the previous stage, and tensoring it with a sufficiently high pullback of the previously relatively ample negative gives a projective embedding over the original base. This is the ordinary relative Segre/Serre construction for two projective embeddings. All coefficients remain positive. Induct over the finite blowup sequence. [given, A1, F1, step 1.1, algebra]

3.1 For some positive integer m, $mμ^*A−T_{0}$ is ample on Y: a relatively ample line bundle tensored with a sufficiently high pullback of an ample line bundle is ample, by a relative projective embedding followed by Segre and Serre twisting. In the normal terminal branch first apply this to the SUPPLIED $T_*$; if any exceptional coefficients vanish, add sufficiently small positive rational coefficients on those primes, preserving the resulting absolute ample divisor by the finite cone argument below. This gives the claimed positive $T_{0}$ on the actual model without assuming a smooth-base blowup factorization there. [given, A1, F1, step 2.1, algebra]

4.1 The coefficients of $T_{0}$ can be varied independently in a rational neighbourhood while keeping positivity and mμ^*A−T ample. Here is a finite algebraic ample-cone argument. Put $H=mμ^*A−T_{0}$. For each of the finitely many Cartier primes $E_{j}$, choose $q_{j}$ such that $q_{j}H+E_{j}$ and $q_{j}H−E_{j}$ are ample. Such $q_{j}$ exist by ample twisting. Then H+Σ δ_j $E_{j}$ is a positive rational combination of H and those finitely many ample divisors whenever Σ $q_{j}|δ_{j}|<1$; hence is ample. Shrink further to retain positive coefficients of $T=T_{0}−\sum δ_{j}E_{j}$. [given, A1, F1, step 3.1, algebra]

5.1 Let $E_{1},...,E_{s}$ be the coefficient-one prime divisors of $B_{0}$. They are all exceptional and map to W: a nonexceptional coefficient-one divisor would give a divisorial non-klt centre, contrary to codim W≥2 and uniqueness of W. At such a divisor the order of $μ^*G_{0}$ is $k_{i}+1$. [given, A1, F1, step 4.1, algebra]

6.1 Choose a rational T inside the preceding positive ample neighbourhood so that the numbers $ρ_{i}=T_{i}/(k_{i}+1)$,   $i=1,...,s$, [given, A1, F1, step 5.1, algebra]

7.1 are pairwise distinct. There are finitely many forbidden affine hyperplanes $T_{i}/(k_{i}+1)=T_{j}/(k_{j}+1)$; none contains the open coefficient neighbourhood because those coefficients vary independently. Rational points are dense, so such a positive rational choice exists. Let $i_{0}$ be the unique index with maximal ρ_i. [given, A1, F1, step 6.1, algebra]

8.1 Take a sufficiently divisible N so that NT and N(mμ^*A−T) are Cartier and the latter is very ample. Choose a general smooth member $H_{Y}$ of |N(mμ^*A−T)| meeting the existing SNC divisor normally and containing none of its components. Bertini applied to that complete very ample system gives exactly this finite collection of transversality conditions. [given, A1, F1, step 7.1, algebra]

9.1 Multiplying its defining section by the canonical section of NT gives a section of $μ^*O_{X}(NmA)$. Since $μ_*O_{Y}=O_{X}$ by normality of X, this descends uniquely to a section of $O_{X}(NmA)$. Let D be its effective divisor. Its ACTUAL pullback is $μ^*D=NT+H_{Y}$. [given, A1, F1, step 8.1, algebra]

10.1 Thus on the fixed resolution the orders of D at the original $E_{i}$ are exactly $NT_{i}$, and no unrecorded resolution or new original coefficient-one divisors are introduced. [given, A1, F1, step 9.1, algebra]

11.1 For rational τ>0 put $c_τ=1/(1+τNρ_{i_{0}})$,     $G_τ=c_τ(G_{0}+τD)$. [given, A1, F1, step 10.1, algebra]

12.1 The coefficient of $E_{i}$ in its log pullback is $b_{i}(τ)=c_τ(k_{i}+1+τNT_{i})−k_{i}$. [given, A1, F1, step 11.1, algebra]

13.1 It equals one exactly for $i=i_{0}$, and is strictly below one for the other original coefficient-one divisors, because their ρ_i are smaller. Every original coefficient below one remains below one for all sufficiently small τ by continuity and the finite number of components. The new free member $H_{Y}$ has coefficient $c_ττ<1$ for sufficiently small τ. Its intersections with the existing boundary are normal crossing by construction. Every coefficient on the fixed SNC model is therefore at most one, with equality on exactly $E=E_{i_{0}}$. Negative coefficients can occur only on exceptional divisors, since the strict transform of the effective downstairs $G_τ$ is effective. [given, A1, F1, step 12.1, algebra]

14.1 The numerical coefficient is $γ_τ=c_τ(γ+τNm)$, [given, A1, F1, step 13.1, algebra]

15.1 and tends to γ as τ tends to zero. Choose a positive rational τ sufficiently small for all preceding strict inequalities and |γ_τ−γ|<ε. Set $G_{1}=G_τ$ and let F be its log boundary with E removed. This gives exactly the Statement form, with E mapping to the original W. No one-sided inequality γ_1≤γ is asserted. [given, A1, F1, step 14.1, algebra]

16.1 There is a direct differential calculation for every divisorial valuation v, avoiding an assumption about how it is extracted by boundary-compatible blowups. At the generic point of its centre on smooth Y, take regular parameters $x_{1},...,x_{c}$ for that centre, adapted to the SNC boundary components containing it, and complete them by parameters along the centre. On a smooth model carrying v, write $x_{i}=t^{a_{i}}u_{i}$ with $a_{i}=v(x_{i})>0$ and $u_{i}$ a unit along the valuation divisor. Expanding the pulled-back top differential shows its order is at least $\sum a_{i}−1$: at most one differentiated factor can supply the dt term reducing the total order by one. Therefore the log discrepancy satisfies $A_{Y}(v)≥\sum a_{i}$. [given, A1, F1, step 15.1, algebra]

17.1 Assign coefficient $b_{i}$ to a parameter defining a boundary component and coefficient zero to the remaining centre parameters. The log discrepancy for the pair is at least $\sum (1−b_{i})a_{i}$. If v is exceptional over Y, its centre has codimension at least two. At most one $b_{i}$ is one, and every other $b_{i}$ is strictly below one, so this sum is strictly positive. For a prime divisor already on Y, only E has coefficient one. Thus E is the sole lc place of $(X,G_{1})$, with no hidden additional place above this model. [given, A1, F1, step 16.1, algebra] ∎

## Remarks

The perturbation can raise γ slightly. In the fourfold index-two surface-centre case the nonvanishing construction only needs $a=2−γ_{1}>0$, so choose ε<2−γ, which is possible when the original γ≤1. No projective klt replacement is introduced.

For an index-one threefold curve centre, the subadjoint relation with effective discriminant and nef moduli gives 2g(W)−2≤(γ_1−1)deg(A|W). Because W is fixed before the perturbation, choose ε so small that (γ_1−1)deg(A|W)<2. The integer even number on the left is then less than $2$, forcing g(W)≤1. Curve RR gives h⁰(W,A)>0. This retains the γ=1 endpoint even if tie-breaking slightly increases γ; it does not falsely reuse a statement requiring γ_1≤1.

## Separate horizontal-positivity extraction supplier

The construction above does NOT prove that every horizontal coefficient of F|E over W is nonnegative. A negative coefficient on an exceptional divisor meeting E can restrict to a horizontal divisor, even though the downstairs $G_{1}$ is effective. Its exclusion cannot be inferred from SNC, uniqueness of E, residue pushforward or the inequality coeff $F<1$.

The companion curvette-extraction-and-effective-different.md now constructs the smooth transverse surface extraction, normalized curvette graph contraction, Q-Cartier index, cyclic-cover normality and effective different, including actual projective transverse surfaces. Those additional steps are not asserted by this unique-place lemma. Matching to the weighted rational marked model remains separately owned. This component supplies the exact unique-place perturbation and arbitrary numerical closeness used before that construction.

