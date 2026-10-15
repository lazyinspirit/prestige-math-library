---
id: cex-td-noncompact-phase-mixture-no-attained-maximum
kind: counterexample
title: A noncompact phase domain with no attained mixture maximum
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed continuous concave entropy functional on a noncompact phase-generator domain; it shows that the compactness hypothesis in the mixture-attainment result cannot simply be dropped.
dependency_level: 10
deps:
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-tdmath-measure-integral
  - pthm-td-compact-continuous-phase-mixture
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-probability-measure: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  pthm-td-compact-continuous-phase-mixture: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.4.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Counterexample

Let the one-dimensional phase-generator domain be $K=(-1,0)\cup(0,1)$, which is noncompact, and let its dimensionless coordinate be $x$. Assign entropy per mole
$$
s(x)=s_0-a|x|,\qquad a>0,
$$
where $s_0>a>0$ have units $\mathrm{J\,mol^{-1}K^{-1}}$. Consider all Borel probability mixtures on $K$ with fixed barycenter $\bar x=0$ and declare them feasible with entropy $\int_Ks\,dP$. This is a constructed mixture model, not a claim that a particular material has this phase domain.

## Facts & Assumptions

**Given:** The noncompact Borel domain $K$, the bounded positive continuous concave entropy function $s$, and the feasible probability mixtures with mean zero.

[F1] [[pthm-td-compact-continuous-phase-mixture]]: Its attainment claim requires a compact phase-generator domain; it makes no attainment assertion for this noncompact $K$.

[F2] [[def-borel-sigma-algebra]], [[def-probability-measure]], and [[def-tdmath-measure-integral]]: Mixtures are countably additive Borel probability measures of total mass one, and their integrals use the stated measure convention.

## Verification

1.1 Since $0< s_0-a\le s(x)\le s_0$, every feasible $s$ is nonnegative and bounded. For $n\ge2$, put $A_n:=\{x\in K:|x|\ge1/n\}$. Their union is $K$; since $P(K)=1$, countable additivity implies $P(A_n)>0$ for some $n$. On $A_n$, $s\le s_0-a/n$, and on its complement $s\le s_0$. For any nonnegative simple function $\varphi\le s$, the measure integral definition [F2] therefore gives
$$
\int_K\varphi\,dP\le (s_0-a/n)P(A_n)+s_0P(K\setminus A_n)=s_0-aP(A_n)/n<s_0.
$$
Indeed, refine the finitely many level sets of $\varphi$ by $A_n$ and its complement; each simple-function coefficient is bounded by the corresponding pointwise bound on that piece, so the simple-integral formula [F2] gives the inequality. The common strict upper bound is independent of $\varphi$, hence its supremum also satisfies $\int_Ks\,dP<s_0$. [given, F2, algebra]

2.1 For each $0<\epsilon<1$, the measure $P_\epsilon=\tfrac12\delta_{-\epsilon}+\tfrac12\delta_{\epsilon}$ is supported on $K$, has mean zero, and satisfies $\int s\,dP_\epsilon=s_0-a\epsilon$. Letting $\epsilon\downarrow0$ shows that the supremum is $s_0$. Step 1.1 shows that no feasible measure attains it. This lies outside the compactness hypothesis in [F1] and exhibits a finite supremum without a maximizing mixture. [given, F1, step 1.1, algebra] ∎
