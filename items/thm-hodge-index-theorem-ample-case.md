---
id: thm-hodge-index-theorem-ample-case
kind: theorem
title: "The Hodge index theorem for an ample class"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-invertible-sheaf
  - def-numerical-equivalence-and-neron-severi-space
  - def-sheaf-tensor-product
  - def-section-zero-scheme-invertible-sheaf
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - lem-ample-twist-of-line-bundle-is-very-ample
  - lem-global-section-effective-divisor
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-positive-square-divisor-has-effective-multiple
  - lem-very-ample-implies-ample
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, let $H$ be an ample
invertible $\mathcal O_X$-module ([[def-ample-invertible-sheaf]]) and let $L$
be an invertible $\mathcal O_X$-module with
$$L\cdot H=0.$$
Then:

(a) $L\cdot L\le0$;
(b) $L\cdot L=0$ if and only if $L$ is numerically trivial
([[def-numerical-equivalence-and-neron-severi-space]]).

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, an ample invertible sheaf $H$, and an invertible sheaf $L$ with $L\cdot H=0$.

[F1] The intersection product is symmetric and $\mathbb Z$-bilinear, so $(L\otimes H^{\otimes m})\cdot(L\otimes H^{\otimes m})=L\cdot L+m^2(H\cdot H)$ because $L\cdot H=0$, and $(L\otimes H^{\otimes m})\cdot L=L\cdot L$; the product is trivial against the structure sheaf and depends only on isomorphism classes ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]], [[lem-invertible-sheaf-dual-tensor-inverse]]).

[F2] Large ample twists of $L$ are very ample: there is $m_0$ such that $L\otimes H^{\otimes m}$ is closed H-very ample, hence H-very ample and ample, for every $m\ge m_0$ ([[lem-ample-twist-of-line-bundle-is-very-ample]], [[lem-very-ample-implies-ample]], [[def-ample-invertible-sheaf]]). In particular $H\cdot H>0$ ([[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]]).

[F3] Positive square and positive ample intersection force an effective multiple: if $\mathcal A$ is ample and $\mathcal M$ is invertible with $\mathcal M\cdot\mathcal M>0$ and $\mathcal M\cdot\mathcal A>0$, then $H^0(X,\mathcal M^{\otimes n})\ne0$ for some $n\ge1$ ([[lem-positive-square-divisor-has-effective-multiple]]).

[F4] Sections and positivity: a nonzero global section of an invertible sheaf $\mathcal M$ on the integral $X$ is regular, its zero scheme $Z$ is an effective Cartier divisor with $\mathcal O_X(Z)\cong\mathcal M$, and if $Z=\varnothing$ then $\mathcal M\cong\mathcal O_X$ ([[lem-global-section-effective-divisor]], [[def-section-zero-scheme-invertible-sheaf]], [[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]]). A nonzero effective Cartier divisor $D$ satisfies $H\cdot D>0$, and $H\cdot D=\deg_D(H|_D)$ ([[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]], [[thm-intersection-with-curve-as-degree-of-restriction]]).

[F5] Numerical triviality: $L$ is numerically trivial exactly when $L\cdot N=0$ for every invertible $\mathcal N$; otherwise there is an invertible $Q$ with $Q\cdot L\ne0$ ([[def-numerical-equivalence-and-neron-severi-space]]).

[F6] The Axiom of Choice is inherited from the embedding, positive-square and positivity suppliers of [F2]–[F4]; the integer $m$ and the sign of $n$ below are chosen from finitely described data.



## Proof
**Proof technique:** direct: reduce part (a) to the positive-square lemma via a large ample twist, then handle the equality case of part (b) by a two-parameter perturbation.

1.1 Part (a), first reduction. Suppose $L\cdot L>0$. By [F2] choose $m\ge m_0$ and put $L':=L\otimes H^{\otimes m}$, an ample invertible sheaf. By [F1], $L'\cdot L'=L\cdot L+m^2(H\cdot H)>0$ and $L'\cdot L=L\cdot L>0$. Applying [F3] with the ample class $L'$ and the sheaf $L$, we obtain $n\ge1$ with $H^0(X,L^{\otimes n})\ne0$. [F1, F2, F3]

2.1 Part (a), contradiction. Let $n\ge1$ and let $s$ be a nonzero global section of $L^{\otimes n}$; by [F4] its zero scheme $Z$ is an effective Cartier divisor with $\mathcal O_X(Z)\cong L^{\otimes n}$, and $L^{\otimes n}\cdot H=n(L\cdot H)=0$ by [F1]. If $Z\ne\varnothing$, then $H\cdot Z>0$ by [F4], contradicting $H\cdot Z=L^{\otimes n}\cdot H=0$. Hence $Z=\varnothing$ and $L^{\otimes n}\cong\mathcal O_X$ by [F4]; then $L\cdot L=n^{-2}(L^{\otimes n}\cdot L^{\otimes n})=0$ by [F1], contradicting $L\cdot L>0$. Therefore $L\cdot L\le0$, proving (a). [F1, F4, step 1.1]

3.1 Part (b). If $L$ is numerically trivial then $L\cdot L=0$ by definition [F5]. Conversely assume $L\cdot L=0$ and suppose $L$ is not numerically trivial; by [F5] choose an invertible $Q$ with $Q\cdot L\ne0$. Put $R:=Q^{\otimes(H\cdot H)}\otimes H^{\otimes-(Q\cdot H)}$, an invertible sheaf with $$R\cdot H=(H\cdot H)(Q\cdot H)-(Q\cdot H)(H\cdot H)=0,\qquad R\cdot L=(H\cdot H)(Q\cdot L)-(Q\cdot H)(H\cdot L)=(H\cdot H)(Q\cdot L)\ne0,$$ using $H\cdot L=0$, $H\cdot H>0$ and bilinearity [F1, F2]. For an integer $n$ put $L':=L^{\otimes n}\otimes R$; then $L'\cdot H=n(L\cdot H)+R\cdot H=0$ and $L'\cdot L'=n^2(L\cdot L)+2n(L\cdot R)+R\cdot R=2n(L\cdot R)+R\cdot R$, which is positive for a suitable sign of $n$ because $L\cdot R\ne0$. Part (a) applied to $L'$ then gives $L'\cdot L'\le0$, a contradiction. Hence $L$ is numerically trivial, and part (b) follows in both directions. [F1, F2, F5, step 2.1]

4.1 Conclusion and choice accounting. Step 2.1 proves (a) and step 3.1 proves (b); the Axiom of Choice is inherited from the suppliers recorded in [F6]. [F6, step 2.1, step 3.1] ∎ 