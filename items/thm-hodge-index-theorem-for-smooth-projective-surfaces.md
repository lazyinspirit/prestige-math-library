---
id: thm-hodge-index-theorem-for-smooth-projective-surfaces
kind: theorem
title: "The Hodge index theorem for smooth projective surfaces"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-invertible-sheaf
  - def-numerical-equivalence-and-neron-severi-space
  - def-very-ample-invertible-sheaf-relative
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - lem-very-ample-implies-ample
  - thm-hodge-index-theorem-ample-case
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
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, and let $H,L$ be
invertible $\mathcal O_X$-modules ([[def-invertible-sheaf]]) with
$$H\cdot H>0,\qquad L\cdot H=0.$$
Then:

(a) $L\cdot L\le0$;
(b) $L\cdot L=0$ if and only if $L$ is numerically trivial
([[def-numerical-equivalence-and-neron-severi-space]]).

No ampleness of $H$ is assumed, and the field $k$ is arbitrary; in particular
the statement applies to classes with positive self-intersection that are not
ample.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, and invertible sheaves $H,L$ with $H\cdot H>0$ and $L\cdot H=0$.

[F1] Ample classes exist on $X$: the projective hypothesis provides a closed immersion $X\hookrightarrow\mathbb P^n_k$ in the H-projective convention, and $\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n}(1)$ is closed H-very ample relative to $\operatorname{Spec}k$, hence H-very ample and ample ([[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]], [[def-ample-invertible-sheaf]]). Such an ample class $A$ satisfies $A\cdot A>0$ ([[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]]).

[F2] The ample case of the Hodge index theorem: for an ample invertible sheaf $A$ and an invertible sheaf $L'$ with $L'\cdot A=0$ one has $L'\cdot L'\le0$, with equality if and only if $L'$ is numerically trivial ([[thm-hodge-index-theorem-ample-case]]).

[F3] Bilinearity: the intersection product is symmetric and $\mathbb Z$-bilinear, and intersection numbers depend only on isomorphism classes, so expressions such as $(H^{\otimes a}\otimes L^{\otimes b})\cdot A=a(H\cdot A)+b(L\cdot A)$ and expansions of self-intersections of tensor products may be computed term by term ([[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-invertible-sheaf]]).

[F4] Numerical triviality is characterized by vanishing against every invertible sheaf ([[def-numerical-equivalence-and-neron-severi-space]]).

[F5] The Axiom of Choice is inherited from the ample-embedding and positivity suppliers of [F1]; all sheaves below are fixed tensor products of the given $H,L$ and of one ample class $A$.



## Proof
**Proof technique:** direct: fix an ample reference class and reduce to the ample case, once directly and once through a perturbation $M$ depending on $H$ and $L$.

1.1 The case $A\cdot L=0$. Let $A$ be an ample class as in [F1]. If $A\cdot L=0$, then [F2] applied to $A$ and $L$ gives $L\cdot L\le0$ with equality if and only if $L$ is numerically trivial; this is exactly (a) and (b) in this case. [F1, F2]

2.1 The case $A\cdot L\ne0$: a nonzero auxiliary class. Assume now $A\cdot L\ne0$. If $A\cdot H=0$, then [F2] applied to $A$ and $H$ gives $H\cdot H\le0$, contradicting $H\cdot H>0$; hence $A\cdot H\ne0$. Define $$M:=H^{\otimes(A\cdot L)}\otimes L^{\otimes-(A\cdot H)},$$ an invertible sheaf whose class is $(A\cdot L)[H]-(A\cdot H)[L]$. By [F3], $$M\cdot A=(A\cdot L)(H\cdot A)-(A\cdot H)(L\cdot A)=0,$$ so [F2] applies to $M$ and gives $M\cdot M\le0$. Expanding with [F3] and using $H\cdot L=0$, $$M\cdot M=(A\cdot L)^2(H\cdot H)+(A\cdot H)^2(L\cdot L).$$ Since $(A\cdot L)^2>0$ and $H\cdot H>0$, if $L\cdot L\ge0$ then $M\cdot M>0$, a contradiction. Hence $L\cdot L<0$ in this case; in particular $L$ is not numerically trivial. [F1, F2, F3, step 1.1]

3.1 Parts (a) and (b). In the case of step 1.1, (a) and (b) are proved there. In the case of step 2.1 we have $L\cdot L<0$, so (a) holds, and (b) holds because a numerically trivial $L$ would have $L\cdot L=0$ by definition, while conversely $L\cdot L=0$ is false here. More explicitly, for (b) in the mixed case: if $L$ is numerically trivial then $L\cdot L=0$ by [F4]; if $L\cdot L=0$ then step 2.1 forces $A\cdot L=0$, so step 1.1 gives that $L$ is numerically trivial. Thus (b) holds in all cases. The Axiom of Choice is inherited from [F5]. [F4, F5, step 1.1, step 2.1] ∎ 