---
id: "cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality"
kind: "counterexample"
title: "Ordinary cohomology does not give noncompact Poincaré duality"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls","cor-contractible-nonempty-spaces-have-the-homology-of-a-point","def-singular-cohomology-with-coefficients","def-singular-cochain-complex-with-coefficients","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.35
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n>0$ and let $R$ be a nonzero commutative unital ring. Then
$$H^0(\mathbb R^n;R)\cong R\ne0=H_n(\mathbb R^n;R).$$
Consequently ordinary cohomology cannot replace compactly supported cohomology in noncompact Poincaré duality. The counterexample calculation is choice-free. Under AC, the correct compact-support cap map for the standard orientation is
$$H_c^n(\mathbb R^n;R)\xrightarrow{\sim}H_0(\mathbb R^n;R)\cong R,$$
sending a class normalized to evaluate as $1$ on the oriented supported class to the positive point class.

## Facts & Assumptions

[F1] [[lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls]] proves this normalized compact-support cap isomorphism, with AC only in its local universal-coefficient argument.

[F2] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] gives the homology of a point for nonempty contractible spaces.

[F3] [[def-singular-cohomology-with-coefficients]] defines cohomology and in particular $H^0=\ker\delta^0$, with no degree-zero coboundaries.

[F4] [[def-singular-cochain-complex-with-coefficients]] identifies zero-cochains with functions on points and gives $(\delta\varphi)(\gamma)=\varphi(\gamma(1))-\varphi(\gamma(0))$.

[F5] [[def-axiom-of-choice]] is assumed only for the positive compact-support conclusion through [F1].

## Proof

**Given:** $n>0$, $R\ne0$ as in the statement, and $X=\mathbb R^n$ with its standard coordinate orientation.

1.1 For any $x,y\in X$, the straight path $\gamma(t)=(1-t)x+ty$ joins them. By [F4], a degree-zero cocycle $\varphi$ must satisfy $\varphi(y)-\varphi(x)=0$, so it is constant. Conversely a constant function has zero endpoint difference on every path, so is a cocycle. There are no degree-zero coboundaries by [F3]. Evaluation at $0$ and the assignment of the constant function with value $a\in R$ are inverse $R$-linear maps between $H^0(X;R)$ and $R$. In particular the constant cocycle $1$ represents a nonzero class because $1\ne0$. [F3, F4, given]

1.2 The homotopy $H(x,t)=(1-t)x$ contracts nonempty $X$ to its origin, so [F2] identifies its homology with that of a point. At a point there is one singular simplex in each degree, and its boundary in degree $k>0$ is multiplication by $\sum_{j=0}^k(-1)^j$, equal to $1$ for even $k$ and $0$ for odd $k$. Therefore every positive-degree kernel equals the next boundary image, and $H_k(*;R)=0$ for $k>0$, while $H_0(*;R)=R$. Since $n>0$, this proves $H_n(X;R)=0$ and $H_0(X;R)=R$, the latter with the origin's point class as generator. [F2, given]

2.1 An isomorphism $H^0(X;R)\to H_n(X;R)$ cannot exist: by step 1.1 its domain contains the nonzero constant class $1$, while by step 1.2 every element of its codomain is zero, so every homomorphism has that nonzero class in its kernel. This is precisely the degree-zero failure of the proposed replacement of $H_c^p$ by $H^p$ in dimension $n$. The straight-path and point-chain computations used no AC. [step 1.1, step 1.2]

3.1 Assume now [F5]. The space $X$ is the oriented Euclidean coordinate ball of [F1], which therefore supplies $H_c^p(X;R)=0$ for $p\ne n$ and the stated normalized cap isomorphism in degree $n$. In particular $H_c^0(X;R)=0$ since $n>0$, so the correct degree-zero duality is $0\to0$, consistent with step 1.2. In degree $n$, evaluation equal to $1$ on the oriented relative class maps to the origin's generator of $H_0$ by [F1]. The AC use is the freeness/projection and free-comparison-lift selections in that lemma's local UCT proof; it is not needed for step 2.1. [F1, F5, step 1.2]

4.1 The hypotheses exclude both $n=0$ and $R=0$ for a reason: at $n=0$ the space is a point and both ordinary degree-zero groups equal $R$; over the zero ring both groups in the claimed mismatch are zero. The chosen witness space is nonempty, with the specified origin, and $n=1$ is already a counterexample with the same contraction. The contraction has endpoints the identity and the constant map; the straight paths have their stated endpoints. The point-chain calculation includes degenerate simplices in every positive degree. No infinite selection of points, paths or cocycle representatives is used: all paths and the constant cocycles are given by formulas. [F3, F4, step 1.1, step 1.2, step 2.1, step 3.1] ∎
