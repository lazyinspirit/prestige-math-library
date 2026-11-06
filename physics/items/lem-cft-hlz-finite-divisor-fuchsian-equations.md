---
id: lem-cft-hlz-finite-divisor-fuchsian-equations
kind: lemma
title: Pole bounds for the Jacobi quotient at a finite divisor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - thm-hilbert-basis-theorem
  - lem-cft-hlz-jacobi-quotient-finite-generation
  - thm-noetherian-ring-quotients-and-localisations
  - lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct
dependency_roles:
  thm-hilbert-basis-theorem: mathematical-premise
  lem-cft-hlz-jacobi-quotient-finite-generation: mathematical-premise
  thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct: mathematical-premise
sources:
  references:
    - title: "Huang, Differential equations and intertwining operators, Proposition 2.1, Lemma 2.2 and Theorem 2.3; the proof below spells out the finite-divisor multipoint extension"
      url: https://arxiv.org/pdf/math/0206206v1
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Use the modules, ring $R_n$, module $T$, and explicit submodule $J$ of the multipoint Jacobi-quotient lemma. Let $s$ be one of $z_a$ or $z_a-z_b$ with $a\ne b$, and put
$$D=\{z_i:1\leq i\leq n\}\cup\{z_i-z_j:1\leq i<j\leq n\},\qquad B_s=\mathbb C[z_1,\ldots,z_n][t^{-1}:t\in D,\ t\notin\mathbb C^\times s].$$
Thus the localization excludes every nonzero scalar multiple of $s$, including $-s$ when $a>b$, and $R_n=B_s[s^{-1}]$. Its geometric domain includes the smooth part of the divisor $s=0$ away from all other boundary divisors. Fix a homogeneous input tuple of total weight $\sigma$, and fix an insertion $l$ with $\partial_{z_l}s=1$ or $-1$. The associated formal scalar coefficient $f$ satisfies an equation
$$\partial_{z_l}^m f+\sum_{j=0}^{m-1}c_j s^{j-m}\partial_{z_l}^j f=0,\qquad c_j\in B_s,$$
for some $m\geq1$, with coefficients independent of the intertwiners. In particular, after fixing the other coordinates near a smooth point of this divisor, this equation is a Fuchsian scalar equation. This statement concerns one finite divisor at a time; it does not assert convergence of a formal solution or a simultaneous expansion at intersections of divisors.

## Statement references

[[lem-cft-hlz-jacobi-quotient-finite-generation]]

[[thm-hilbert-basis-theorem]]

[[thm-noetherian-ring-quotients-and-localisations]]

[[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]]

## Facts & Assumptions

**Given:** The homogeneous tuple, divisor and derivative direction in the statement. All pole orders below are along this one divisor.

[F1] [[lem-cft-hlz-jacobi-quotient-finite-generation]] gives the relations $A_i,C,D$, their finite expansions, terminating strict integral weight reduction to a fixed finite-dimensional tensor cutoff $E=(\bigotimes_iW_i)_{\leq M}$, annihilation of $J$ by the formal coefficient map, and the derivative identity.

[F2] Starting with the field $\mathbb C$, [[thm-hilbert-basis-theorem]] and [[thm-noetherian-ring-quotients-and-localisations]] give polynomial and localization Noetherianity, hence Noetherianity of $B_s$. Then [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]] makes every submodule of $B_s\otimes E$ finite.

## Proof

1.1 For real $r$ let $G_rT$ be the span of $s^{-p}b\mathbf v$ with $p\geq0$, $b\in B_s$, and homogeneous tensor $\mathbf v$ of weight $\tau$ satisfying $p+\tau\leq r$. We check the reduction in F1 preserves this filtration. For a relation obtained from a positive integral weight state $u\in V_d$ and a base tuple of weight $\tau$, its designated $u_{-1}$ term has weight $\tau+d$. Ordinary-mode terms have weight $\tau+d-k-1$; their coefficient has pole order at most $k+1$. Opposite-mode terms $u^*_{-1-k}$ have weight $\tau-d-k$ and their coefficients are regular at every finite divisor. These bounds cover every term of $A_i$ and $C$, including $z_a=0$ and $z_a=z_b$. Thus each has pole order plus tensor weight at most $\tau+d$. [given, F1, algebra]

2.1 In $D$, the last opposite-mode term has weight $\tau-d$. A term $L(1)^a u_k L(1)^b$ in $K_i(u_k)$ has weight shift $d-k-1-a-b$ and scalar factor a constant times $z_i^{2(d-k-1)-a-b}$. After multiplication by $z_i^{k+1}$ in $D$, its scalar power is $z_i^{2d-k-1-a-b}$. At a collision divisor, or a zero divisor other than $z_i=0$, this factor is regular. At $z_i=0$ its pole order is $\max(0,k+1+a+b-2d)$; adding its weight shift gives either $d-k-1-a-b\leq d$ or $-d\leq d$. All terms of $D$ therefore satisfy the same bound. Multiplication by an existing $s^{-p}b$ preserves the bound additively. Every non-designated term also has strictly smaller tensor weight, exactly as in F1. [F1, step 1.1, algebra]

3.1 Apply the terminating reductions of F1, keeping the scalar factors rather than discarding their poles. Steps 1.1–2.1 show that every element of $G_rT$ has a representative in $(R_n\otimes E)\cap G_rT$ modulo $J\cap G_rT$. Let $B$ be a common lower bound for the total tensor weights. Choose $S$ such that $\sigma+S$ is a nonnegative integer and $S+B\geq0$. Set $b_k=w_0\otimes\cdots\otimes L(-1)^k w_l\otimes\cdots\otimes w_{n+1}$ and choose a reduced representative $v_k\in(R_n\otimes E)\cap G_{\sigma+k}T$ with $b_k-v_k\in J$. In each term $s^{-p}b\mathbf v$ of $v_k$, the bound $p+\mathrm{wt}(\mathbf v)\leq\sigma+k$ implies $p\leq\sigma+k+S$. Consequently $q_k=s^{\sigma+k+S}v_k$ belongs to the finite $B_s$-module $B_s\otimes E$. The exponent is an integer for every $k$. [F1, step 1.1, step 2.1, choose, algebra]

4.1 The submodule generated by $q_0,q_1,\ldots$ is finite by F2. Express a finite generating set as finite combinations of these vectors; for some $m\geq1$ the initial segment $q_0,\ldots,q_{m-1}$ therefore generates the entire submodule. There are $c_j\in B_s$ such that $q_m+\sum_{j<m}c_jq_j=0$. Divide in $R_n\otimes E$ by $s^{\sigma+m+S}$ to get $v_m+\sum_{j<m}c_js^{j-m}v_j=0$. Subtracting the relations $b_k-v_k\in J$ gives the same identity for the classes $[b_k]\in T/J$. Applying F1's annihilating coefficient map and its derivative identity proves the displayed equation. No differentiation of the chosen representatives $v_k$ is used. [F1, F2, step 3.1, algebra]

5.1 Write $\epsilon=\partial_{z_l}s\in\{1,-1\}$ and keep the other coordinates fixed, so $\partial_{z_l}=\epsilon\partial_s$. After division by $\epsilon^m$ the equation has the same form in $\partial_s$, with coefficients $\widetilde c_j=\epsilon^{j-m}c_j$ holomorphic at the chosen smooth divisor point. Put $U_j=s^j\partial_s^jf$, $0\leq j<m$. Then $s\partial_sU_j=jU_j+U_{j+1}$ for $j<m-1$, and $s\partial_sU_{m-1}=(m-1)U_{m-1}-\sum_{j<m}\widetilde c_jU_j$. Hence $s\partial_sU=A(s)U$ with $A$ holomorphic there, the explicit Fuchsian first-order system. This proves precisely the asserted pole bound and its Fuchsian interpretation. [step 4.1, algebra] ∎
