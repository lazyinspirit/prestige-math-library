---
id: thm-complex-bott-periodicity
kind: theorem
title: Complex Bott periodicity
status: draft
origin: pipeline
deps: [thm-fundamental-product-theorem-for-complex-k-theory, def-negative-degree-complex-k-groups, def-external-product-in-complex-k-theory, thm-reduced-k-theory-exact-sequence-of-a-cofibration, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 2.11"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Reduced product formulation of Bott periodicity, printed pp.54–55"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Complex Bott periodicity, printed pp.205–208"
---

## Statement

Assume AC. Reduced external product with
$\beta\in\widetilde K^0(S^2)=K^{-2}(*)$ is a natural isomorphism

$$\widetilde K^{-n}(X)\xrightarrow{\ \cong\ }\widetilde K^{-n-2}(X)$$

for every $n\geq0$ and based finite CW complex $X$, and likewise for compact
pairs in the stated category. It extends the grading uniquely to natural
isomorphisms $K^q(X)\cong K^{q-2}(X)$ for all $q\in\mathbb Z$.

## Facts & Assumptions

**Given:** AC, a based finite CW complex $X$, and
$\beta=[\gamma]-1\in\widetilde K^0(S^2)$.

[F1] The product theorem gives the unique decomposition
$K^0(X\times S^2)=K^0(X)\oplus K^0(X)\beta$
([[thm-fundamental-product-theorem-for-complex-k-theory]]).

[F2] Reduced external product is the unique class on the smash product whose
pullback is the unreduced product
([[def-external-product-in-complex-k-theory]]).

[F3] Negative groups are reduced groups of iterated suspensions
([[def-negative-degree-complex-k-groups]]).

[F4] The reduced cofibration sequence is natural and exact at every suspended
stage ([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]]).

[A1] AC is used through the product theorem and the reduced external-product
and exactness suppliers [F1], [F2], and [F4].

## Proof

**Proof technique:** direct.

1.1 The wedge inclusion $X\vee S^2\to X\times S^2$ has restriction map split by the two projections. Hence reduced exactness [F4] identifies $\widetilde K^0(X\wedge S^2)$ with the subgroup of classes on the product restricting to zero on both axes. In the normal form $a+b\beta$ from [F1], restriction to $X\times\{*\}$ is $a$, while restriction to $\{x_0\}\times S^2$ is $a(x_0)+b(x_0)\beta$. Both vanish exactly when $a=0$ and $b\in\widetilde K^0(X)$. [F1, F4, A1, algebra]

2.1 By [F2], the class corresponding to $b$ in step 1.1 is exactly the reduced external product $b\boxtimes\beta$. Therefore $b\mapsto b\boxtimes\beta$ is a natural isomorphism $\widetilde K^0(X)\to\widetilde K^0(X\wedge S^2)=\widetilde K^0(\Sigma^2X)$. Taking $X=S^0$ with one nonbasepoint sends its rank-difference generator to $\beta$ on $S^0\wedge S^2\cong S^2$. Since the unbased point has $*_+=S^0$, [F3] identifies this target with the coefficient group $K^{-2}(*)$. [F2, F3, A1, step 1.1]

3.1 Apply step 2.1 to $\Sigma^nX$. A suspension of a finite CW complex is again a compact based finite CW complex, and $S^2\wedge\Sigma^nX\cong\Sigma^{n+2}X$. Using [F3] gives the displayed isomorphism $\widetilde K^{-n}(X)\cong\widetilde K^{-n-2}(X)$ for every $n\geq0$. Replacing $X$ by the compact quotient $X/A$ gives the relative statement; naturality follows from naturality of external product and quotient maps. [F2, F3, step 2.1]

4.1 Define positive degrees by transporting the already defined nonpositive groups along the inverse of step 3.1: choose $r$ with $q-2r\leq0$ and set $K^q(X)=K^{q-2r}(X)$ using the canonical composite of inverse Bott maps. If a larger $r$ is used, the two composites differ by a Bott isomorphism followed by its inverse, so the identification is independent of $r$. This is the unique extension for which multiplication by $\beta$ gives $K^q\cong K^{q-2}$ in every degree. [step 3.1, algebra]

5.1 The maps in [F4] commute with external product by naturality, so the two-periodic identifications respect absolute, reduced, and relative maps and their exact sequences. This proves the stated natural periodic theory, including the zero group and the one-point boundary cases. [F2, F4, A1, step 3.1, step 4.1] ∎
