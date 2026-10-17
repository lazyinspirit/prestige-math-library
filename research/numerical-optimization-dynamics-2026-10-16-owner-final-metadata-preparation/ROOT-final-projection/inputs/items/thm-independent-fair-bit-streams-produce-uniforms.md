---
id: thm-independent-fair-bit-streams-produce-uniforms
kind: theorem
title: "Disjoint streams of independent fair bits produce independent uniform variables"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-rectangle-criterion-for-independent-random-elements
  - thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
  - thm-countable-product-of-probability-spaces
  - cor-coordinate-random-elements-on-a-countable-product-are-independent
  - def-coordinate-maps-and-cylinder-sigma-algebra
  - def-independent-random-elements
  - def-random-element-and-real-random-variable
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-continuity-from-above-for-measures
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter XV §1, The Random Bit Model"
      url: "https://luc.devroye.org/chapter_fifteen.pdf"
    - title: "Kajino, Probability Theory, Theorem 3.65 and Proposition 3.67"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\Omega=\{0,1\}^{\mathbb N}$ carry the countable product probability measure of fair bits. For any finite family of pairwise disjoint infinite coordinate sequences $j_{s,1},j_{s,2},\ldots$, define
$$B_{s,k}(\omega)=\omega_{j_{s,k}},\qquad U_s(\omega)=\sum_{k=1}^{\infty}B_{s,k}(\omega)2^{-k}.$$
Then each $U_s$ has the uniform Borel law on $[0,1]$, and the family $(U_s)$ is independent. No other choice principle is used.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the canonical countable product probability space of fair bits, and finitely many pairwise disjoint enumerated coordinate sequences.

[F1] Under Countable Choice and Dependent Choice, the countable product probability measure exists, is unique, and has every prescribed finite product marginal. [[thm-countable-product-of-probability-spaces]]

[F2] The coordinate maps of that product probability space are independent. [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]

[F3] Independence means independence of the generated sigma-algebras. The finite Borel-rectangle factorization criterion is equivalent to this definition. [[def-independent-random-elements]], [[thm-rectangle-criterion-for-independent-random-elements]]

[F4] For decreasing measurable sets with finite first-set measure, probability is continuous from above. [[thm-continuity-from-above-for-measures]]

[F5] Measures agreeing on a generating pi-system and on a finite-measure exhaustion agree on the generated sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F6] Finite-prefix sums of measurable coordinates are measurable, as are their pointwise increasing limits. [[def-coordinate-maps-and-cylinder-sigma-algebra]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[F7] Rational half-open boxes generate the Borel sigma-algebra of finite-dimensional real space. [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]

[A1] Countable Choice and Dependent Choice are the exact assumptions of [F1]; the construction below uses no arbitrary family of choices. [[def-countable-choice]], [[def-dependent-choice]]

## Proof

**Given:** As in the Statement. Write $K_{s,n}=\sum_{k=1}^n B_{s,k}2^{n-k}$, so $U_s=K_{s,n}2^{-n}+2^{-n}T_{s,n}$ with $T_{s,n}=\sum_{k=1}^{\infty}B_{s,n+k}2^{-k}\in[0,1]$.

1.1 By [F1], every specified pattern on $n$ distinct coordinates has probability $2^{-n}$. Thus $K_{s,n}$ is uniform on $\{0,\ldots,2^n-1\}$. The events that the first $m$ bits after position $n$ are all zero, or all one, decrease to the corresponding constant-tail events and have probabilities $2^{-m}$. By [F4], both constant-tail events have probability zero. The partial sums defining each $U_s$ are measurable and increase to $U_s$ by [F6]. [F1, F4, F6, A1]

2.1 Fix a dyadic threshold $t=k2^{-n}$ with $0\le k\le2^n$. If $K_{s,n}<k$, then $U_s\le t$; if $K_{s,n}>k$, then $U_s>t$; if $K_{s,n}=k$, then $U_s\le t$ only on the null event $T_{s,n}=0$. Hence $\mathbb P(U_s\le k2^{-n})=k2^{-n}$. For an arbitrary $t\in[0,1]$, dyadic lower and upper approximations differ by at most $2^{-n}$, so monotonicity of the CDF and passage to the limit give $\mathbb P(U_s\le t)=t$. Outside $[0,1]$ the CDF is $0$ or $1$. [step 1.1, algebra]

2.2 For finitely many streams and dyadic thresholds $t_s=k_s2^{-n}$, the joint event $\bigcap_s\{U_s\le t_s\}$ differs by a null set from the event that every prefix integer $K_{s,n}<k_s$. Pairwise disjointness makes all prefix coordinates distinct. By [F2] these coordinate bits are independent and by [F1] each is fair, so the probability that each stream's prefix integer is below $k_s$ is the product $\prod_s(k_s2^{-n})$. [F1, F2, F4, step 1.1]

3.1 For arbitrary thresholds $t_s\in[0,1]$, dyadic lower and upper approximations squeeze the joint probability between products converging to $\prod_s t_s$. Thus the joint CDF equals the product-uniform CDF. The lower rectangles $\prod_s[0,t_s]$, including the whole cube, are closed under intersections. They generate each coordinate slab $\{x:x_s\le t\}$ by taking the other thresholds to be $1$; complements and finite intersections then give the intersections of the cube with all rational half-open boxes (thresholds outside $[0,1]$ give empty or full slabs). By [F7] these generate the relative Borel sigma-algebra of the cube. Both laws have total mass one there, a finite-measure exhaustion. Thus [F5] identifies the joint law with the product-uniform law. In particular every Borel rectangle has the product of its marginal probabilities, so the rectangle criterion [F3] gives independence of the generated sigma-algebras. [F3, F5, F7, step 2.2] ∎
