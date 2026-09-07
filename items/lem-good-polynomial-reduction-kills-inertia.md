---
id: lem-good-polynomial-reduction-kills-inertia
title: "Good polynomial reduction kills inertia"
kind: lemma
status: draft
origin: pipeline
deps: [def-discriminant-of-a-monic-polynomial, def-inertia-group-of-a-prime, cor-orders-of-decomposition-and-inertia-groups]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Proposition 8.21 and Theorem 8.23 proof, pp.144\u2013145"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

Let $F\in\mathbb Z[T]$ be monic separable with splitting field L. If a rational prime p does not divide $\operatorname{Disc}(F)$, the integral roots of F have distinct reductions at every $P\mid p$. The inertia group I(P/p) is trivial, so p is unramified in L.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[def-discriminant-of-a-monic-polynomial]]: By prop-vandermonde-square-is-symmetric and thm-fundamental-theorem-of-symmetric-polynomials, there is a unique polynomial $D_n\in\mathbb Z[T_1,\ldots,T_n]$ such that $\Delta_n(x_1,\ldots,x_n)^2=D_n(e_1,\ldots,e_n).$ For a monic polynomial $f(t)=t^n+a_1t^{n-1}+\cdots+a_n$ over a commutative ring, its **discriminant** is $\operatorname{Disc}(f):=D_n(-a_1,a_2,\ldots,(-1)^na_n).$ Equivalently, in any algebra in which $f$ splits with roots $\alpha_1,\ldots,\alpha_n$, this coefficient expression evaluates to $\Delta_n(\alpha_1,\ldots,\alpha_n)^2$. The definition therefore depends only on the coefficients and not on a choice or ordering of roots. For a monic constant polynomial, $\operatorname{Disc}(1)=1$.

[F2] [[def-inertia-group-of-a-prime]]: For finite Galois L/K and a chosen nonzero prime $P\mid p$, set $\kappa(P)=\mathcal O_L/P$ and $\kappa(p)=\mathcal O_K/p$. Each $\sigma\in D(P/p)$ induces a $\kappa(p)$-automorphism $\bar\sigma$ of $\kappa(P)$: the rule $\bar a\mapsto\overline{\sigma a}$ is independent of the representative because $\sigma P=P$. The **inertia group** is $I(P/p)=\ker\!\left(D(P/p)\longrightarrow\operatorname{Gal}(\kappa(P)/\kappa(p))\right).$ Equivalently, $\sigma\in I(P/p)$ exactly when $\sigma\in D(P/p)$ and $\sigma(a)-a\in P$ for every $a\in\mathcal O_L$. It is a normal subgroup of D.

[F3] [[cor-orders-of-decomposition-and-inertia-groups]]: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree, $|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$ The prime P is unramified over p if and only if its inertia group is trivial.

## Proof

1.1 List the distinct roots $\alpha_1,\ldots,\alpha_n$ in L. They are integral because F is monic. The discriminant is $\prod_{i<j}(\alpha_i-\alpha_j)^2$. Its integer value is not in P, since its contraction is (p). Therefore no difference is in P, giving distinct reductions. The constant and linear cases have an empty product equal to one. [F1]

2.1 Every inertia element permutes the roots and fixes each of their residue classes. Distinctness of those classes forces it to fix each root itself. Since these roots generate L over the rationals, the element is identity. Thus I=1 and the inertia order formula gives e=1, at every prime above p. [F2, F3, step 1.1] ∎
