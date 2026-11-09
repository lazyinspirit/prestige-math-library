---
id: lem-curve-support-divisor-complex
kind: lemma
title: Top cycles supported on an integral curve
status: draft
domain: mathematics
deps:
  - def-supported-higher-cycle-complex
  - lem-author-1437578267d2-supported-degrees
  - lem-author-1437578267d2-length-orders
  - lem-author-1437578267d2-graph-boundary
  - lem-author-1437578267d2-normalization-quotient
  - math:def-axiom-of-choice
dependency_roles:
  def-supported-higher-cycle-complex: mathematical-premise
  lem-author-1437578267d2-supported-degrees: mathematical-premise
  lem-author-1437578267d2-length-orders: mathematical-premise
  lem-author-1437578267d2-graph-boundary: mathematical-premise
  lem-author-1437578267d2-normalization-quotient: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
Assume AC. Let $k$ be algebraically closed, $U$ a smooth finite-type $k$-scheme of pure dimension three, and $T\subset U$ an integral closed curve. Put $K=k(T)$ and define
$$\operatorname{div}_T(f)=\sum_{x\in T\text{ closed}}\operatorname{ord}_{\mathcal O_{T,x}}(f)[x],\qquad \operatorname{ord}_{R}(a/b)=\ell_R(R/aR)-\ell_R(R/bR).$$
For the fixed-support Bloch complex with alternating face differential,
$$\mathrm{CH}^3_T(U)\cong\operatorname{coker}\!\left(K^\times\xrightarrow{\operatorname{div}_T}\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]\right).$$
When $T$ is affine, normalization $\nu:\widetilde T\to T$ induces a surjection
$$\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)\twoheadrightarrow\mathrm{CH}^3_T(U),$$
induced on point cycles by $[y]\mapsto[\nu(y)]$. For $f\in K^\times$, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and the displayed length orders downstairs. No normality or smoothness of $T$ is assumed.

## Facts & Assumptions
**Given:** AC and $k,U,T$ as stated; for the normalization assertion, also assume $T$ affine.

**Goal:** Identify the supported top Chow group and prove the normalization surjection and divisor compatibility.

[F1] The supported group is degree-zero homology of the fixed-support complex. Its relevant terms are $Z_0(T)$ and $B_1(T)$, and its boundary is the endpoint difference $b[W]=[W_1]-[W_0]$ with local length coefficients. [[def-supported-higher-cycle-complex]], [[lem-author-1437578267d2-supported-degrees]]

[F2] The displayed length formula defines a divisor homomorphism, and its image is precisely the endpoint-boundary subgroup. [[lem-author-1437578267d2-length-orders]], [[lem-author-1437578267d2-graph-boundary]]

[F3] For affine $T$, normalization induces the stated surjection from $\operatorname{Pic}(\widetilde T)=\mathrm{CH}^1(\widetilde T)$ to the divisor quotient and satisfies the displayed order formula. [[lem-author-1437578267d2-normalization-quotient]]

## Proof
1.1 By [F1], the outgoing differential from degree zero is zero and $\mathrm{CH}^3_T(U)=Z_0(T)/bB_1(T)$. The sign is $W_1-W_0$: with $s=t_1$, the zeroth face is $s=1$ and the first is $s=0$. [F1, given]

2.1 By [F2], the divisor map is well defined and its image is exactly $bB_1(T)$, with the stated multiplicities even at singular points. Substitution into step 1.1 proves the cokernel presentation. [F2, step 1.1]

3.1 If $T$ is affine, apply [F3] and the identification of step 2.1. This gives the normalization pushforward, its surjectivity and the displayed equality of local orders. [F3, step 2.1] ∎
