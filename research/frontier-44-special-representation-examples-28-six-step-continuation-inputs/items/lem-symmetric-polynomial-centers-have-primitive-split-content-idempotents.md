---
id: lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents
kind: lemma
title: "Symmetric polynomial centers have primitive split content idempotents"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-algebra-over-a-commutative-ring, def-symmetric-polynomial,
       def-polynomial-ring-over-a-commutative-ring,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan, Centers of degenerate cyclotomic Hecke algebras and parabolic category O, arXiv:math/0607717v3"
      url: "https://arxiv.org/pdf/math/0607717"
      locator: "Actually read full center proof §2–§3 PDF pp. 4–12: colored-cycle centralizer, graded orbit sums and triangular center lifts; local proof below fills the power expansion and avoids the abbreviated Theorem 2.7 check."
---

## Statement

Let $A$ be a finite-dimensional unital algebra over a field $F$
([[def-algebra-over-a-commutative-ring]]), with commuting elements
$x_1,\dots,x_d$ and split joint regular-module generalized-eigenprojectors
$p_{\mathrm{word}}\in A$: the $p_{\mathrm{word}}$ are pairwise orthogonal,
sum to $1$, and $(x_r-\mathrm{word}_r)p_{\mathrm{word}}$ is nilpotent for every
$r$. For each finite multiset $\alpha$ of eigenvalues let
$e_\alpha:=\sum_{\mathrm{word}\ \text{of multiset}\ \alpha}p_{\mathrm{word}}$,
and assume each $e_\alpha$ is central. If $Z(A)$ is the image of the symmetric
polynomial ring in $x_1,\dots,x_d$
([[def-symmetric-polynomial]], [[def-polynomial-ring-over-a-commutative-ring]]),
then each $e_\alpha$ is zero or primitive central, and its nonzero terms are
exactly all primitive central idempotents of $A$
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).
No splitting-simple-module hypothesis and no algebraic-closure hypothesis on
$F$ is required. For $d=0$ the asserted symmetric-center hypothesis says
$Z(A)=F\cdot1$ and yields the same conclusion.

## Facts & Assumptions

**Given:** The finite commuting split-projector family
$(p_{\mathrm{word}})$, the content idempotents $e_\alpha$, and the
symmetric-center equality $Z(A)=F[\sigma_1(x),\dots,\sigma_d(x)]$, where
$\sigma_k$ is the $k$-th elementary symmetric polynomial.

[F1] The $p_{\mathrm{word}}$ are pairwise orthogonal idempotents with
$\sum p_{\mathrm{word}}=1$, and $(x_r-\mathrm{word}_r)p_{\mathrm{word}}$ is
nilpotent for every word and every $r$; each $e_\alpha$ is a sum of the
$p_{\mathrm{word}}$ over the words of multiset $\alpha$
([[def-polynomial-ring-over-a-commutative-ring]]).

[F2] Every symmetric polynomial in $d$ variables is a polynomial in
$\sigma_1,\dots,\sigma_d$ over the coefficient ring
([[def-symmetric-polynomial]]).

[F3] In a commutative ring, an element that is both idempotent and nilpotent is
zero; if $J$ is a nilpotent ideal of a commutative ring $R$ with $R/J\cong F$
and $Fe\cap J=0$ for the unit, then every idempotent of $R$ is $0$ or $1$
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).

## Proof

**Proof technique:** direct.

**Given:** The data of the Statement and [F1]–[F3]. If $d=0$ there is nothing

to prove beyond $Z(A)=F\cdot1$, whose only idempotents are $0$ and $1$; assume

$d\ge1$ and fix a content $\alpha$ with $e:=e_\alpha\ne0$.

1.1 The nilpotent ideal of the content summand. For $1\le k\le d$ let $a_k$ be the value of $\sigma_k$ on any word of content $\alpha$ (independent of the order of the word). On the summand $p_{\mathrm{word}}A$ inside $eA$ write $x_r=\mathrm{word}_r+N_r$ with commuting nilpotents $N_r$ by [F1]. Choose $M$ with $N_r^M=0$ for all $r$; then every product of more than $d(M-1)$ monomials of positive degree in the $N_r$ vanishes, because among more than $d(M-1)$ factors some $N_r$ occurs at least $M$ times (finite pigeonhole). Hence every polynomial in the $N_r$ with zero constant term is nilpotent, and in particular $N_k:=e\sigma_k(x)-a_ke$ is nilpotent on every $p_{\mathrm{word}}A$; since there are finitely many words, a common exponent makes $N_k$ nilpotent in $eA$. The $N_k$ commute, and the ideal $J$ they generate in the commutative ring $eZ(A)$ is nilpotent by the same degree count. [F1, algebra]

2.1 The center of the content summand is a local ring. By [F2] every symmetric polynomial is a polynomial in $\sigma_1,\dots,\sigma_d$ (the characteristic-free lexicographic reduction), so the symmetric-center hypothesis gives $eZ(A)=Fe+J .$ Since $e\ne0$ and $J$ is nilpotent, $Fe\cap J=0$: a nonzero element of the intersection is a scalar multiple of $e$ lying in every power of $J$, hence is $0$. Therefore $eZ(A)/J\cong F$, a field, and by [F3] every idempotent of $eZ(A)$ is $0$ or $e$. [F2, F3, step 1.1, algebra]

3.1 The nonzero content idempotents are exactly the primitive central idempotents. Step 2.1 shows that each $e_\alpha\ne0$ is a primitive idempotent of $Z(A)$, hence primitive central in $A$. Conversely, let $b$ be a primitive central idempotent of $A$. The $e_\alpha$ are central, pairwise orthogonal and sum to $1$, so $b=\sum_\alpha be_\alpha$; if two terms $be_\alpha$ were nonzero, they would be orthogonal nonzero idempotents summing to the primitive idempotent $b$, a contradiction, so exactly one term equals $b$, namely the $e_\alpha$ with $be_\alpha\ne0$. Hence the nonzero $e_\alpha$ are precisely the primitive central idempotents, and the blocks of $A$ are exactly the nonzero content summands. No algebraic closure, splitting-simple-module theorem, power-sum generation, division by $d!$, or level-one restriction is used. [F1, step 2.1] ∎

## Remarks

The proof is the local center argument: the content idempotents make the center
of each summand a local ring with nilpotent nilradical, so its idempotents can
only be $0$ and the unit. Everything is finite and choice-free.
