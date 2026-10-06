---
id: lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal
kind: lemma
title: "The adjoint action preserves the associated graded of a two-sided ideal"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, def-left-right-and-two-sided-ideal, def-derivation-of-a-lie-algebra]
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
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 3.3, printed pp.10-11"
    - title: "D. A. Vogan, The orbit method and primitive ideals for semisimple Lie algebras (CMS Conf. Proc. 1986)"
      url: "https://math.mit.edu/~dav/vogan86CMS.pdf"
      locator: "Section 3"
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra with the PBW
filtration $F^nU(\mathfrak g)$, $n\ge0$, and the identification
$\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$. For every two-sided ideal
$I\subseteq U(\mathfrak g)$ the associated graded subspace

$$\operatorname{gr}I=\bigoplus_{n\ge0}\bigl(I\cap F^nU(\mathfrak g)\bigr)\big/\bigl(I\cap F^{n-1}U(\mathfrak g)\bigr)\subseteq S(\mathfrak g)$$

is a graded ideal of $S(\mathfrak g)$. Moreover, writing $D_x$ for the
derivation of $S(\mathfrak g)$ that extends the linear map
$\operatorname{ad}_x\colon\mathfrak g\to\mathfrak g$, $y\mapsto[x,y]$
([[def-derivation-of-a-lie-algebra]]), one has
$D_x(\operatorname{gr}I)\subseteq\operatorname{gr}I$ for every $x\in\mathfrak g$,
and, with $\sigma_n\colon F^nU(\mathfrak g)\to F^nU(\mathfrak g)/F^{n-1}U(\mathfrak g)$ the degree-$n$ quotient map, the induced derivation satisfies:

$$\sigma_n(\operatorname{ad}_xu)=D_x(\sigma_n(u)),\qquad \operatorname{ad}_xu=xu-ux,$$

for every $n\ge0$ and $u\in F^nU(\mathfrak g)$. If the commutator has degree less than $n$, its degree-$n$ symbol is zero.

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$, a two-sided ideal $I\mathrel{\trianglelefteq}U(\mathfrak g)$, and an element $x\in\mathfrak g$.

[F1] $F^\bullet U(\mathfrak g)$ is the PBW filtration by tensor degree with $F^{-1}=0$; multiplication in $U(\mathfrak g)$ induces a product on $\operatorname{gr}U(\mathfrak g)$ for which the symbol of a product of elements of $F^m$ and $F^n$ is the product of their symbols ([[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]]).

[F2] An ordered basis of $\mathfrak g$ has its ordered monomials as a basis of $U(\mathfrak g)$, and multiplication identifies $\operatorname{gr}U(\mathfrak g)$ with the symmetric algebra $S(\mathfrak g)$; in particular $F^1U(\mathfrak g)=\mathbb C\oplus\mathfrak g$ and the symbol of $y\in\mathfrak g$ is $y$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

[F3] $\operatorname{gr}U(\mathfrak g)$ is commutative: $[F^mU(\mathfrak g),F^nU(\mathfrak g)]\subseteq F^{m+n-1}U(\mathfrak g)$ ([[prop-associated-graded-of-the-pbw-filtration-is-commutative]]).

[F4] $I$ is an additive subgroup closed under left and right multiplication by $U(\mathfrak g)$ ([[def-left-right-and-two-sided-ideal]]); $\operatorname{ad}_x$ denotes the linear map $y\mapsto[x,y]$ of $\mathfrak g$ ([[def-derivation-of-a-lie-algebra]]). Any $\mathbb C$-linear map $\mathfrak g\to\mathfrak g$ extends uniquely to a derivation of the symmetric algebra $S(\mathfrak g)$, by declaring the Leibniz rule on monomials in a basis; this extension is $D_x$.

## Proof

**Proof technique:** direct.

1.1 $I\cap F^nU(\mathfrak g)$ defines an increasing filtration of $I$ with $I\cap F^{-1}U(\mathfrak g)=0$, so $\operatorname{gr}I$ is a graded subspace of $\operatorname{gr}U(\mathfrak g)$ by construction. It is an ideal: if $a\in I\cap F^mU(\mathfrak g)$ and $b\in F^nU(\mathfrak g)$, then $ab\in I\cap F^{m+n}U(\mathfrak g)$ by [F4], and $ba\in I\cap F^{m+n}U(\mathfrak g)$ likewise; passing to symbols with [F1] exhibits every product of a symbol of $I$ with a symbol of $U(\mathfrak g)$ as a symbol of an element of $I$. Since $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$ is commutative by [F3], one-sided closure suffices and $\operatorname{gr}I$ is a graded ideal. [F1, F3, F4, given]

1.2 The commutator map $\operatorname{ad}_x\colon U(\mathfrak g)\to U(\mathfrak g)$, $u\mapsto xu-ux$, is a derivation of $U(\mathfrak g)$: $\operatorname{ad}_x(uv)=(xu-ux)v+u(xv-vx)=\operatorname{ad}_x(u)v+u\operatorname{ad}_x(v)$. For a word $a_1\cdots a_m$ with $a_i\in\mathfrak g$, the derivation rule gives $[x,a_1\cdots a_m]=\sum_{i=1}^m a_1\cdots a_{i-1}[x,a_i]a_{i+1}\cdots a_m$, and each $[x,a_i]$ lies in $\mathfrak g$; hence every term still has PBW degree at most $m$, so $\operatorname{ad}_x(F^nU(\mathfrak g))\subseteq F^nU(\mathfrak g)$. It maps $I$ into itself because $I$ is two-sided. [F1, F4, given, algebra]

2.1 By step 1.2, $\operatorname{ad}_x$ preserves each $I\cap F^nU(\mathfrak g)$, so it induces a graded linear map $\operatorname{gr}(\operatorname{ad}_x)$ of $\operatorname{gr}U(\mathfrak g)$ that sends $\operatorname{gr}I$ into itself: the induced map is $\sigma_n(u)\mapsto\sigma_n(\operatorname{ad}_xu)$, well defined because $\operatorname{ad}_x(F^{n-1})\subseteq F^{n-1}$. The derivation identity of step 1.2 passes to symbols via [F1], so $\operatorname{gr}(\operatorname{ad}_x)$ is a derivation of $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$. [F1, step 1.1, step 1.2, algebra]

3.1 On degree one, $\operatorname{gr}(\operatorname{ad}_x)(y)=\operatorname{ad}_x(y)=[x,y]$ for $y\in\mathfrak g$, by [F2] and [F4]; that is, the induced derivation restricts on $\mathfrak g$ to the given linear map $\operatorname{ad}_x$. [F2, F4, step 2.1]

4.1 A derivation of $S(\mathfrak g)$ is determined by its values on $\mathfrak g$: on a monomial $y_1\cdots y_n$ the Leibniz rule forces $\sum_i y_1\cdots \operatorname{ad}_x(y_i)\cdots y_n$, and a monomial basis of $S(\mathfrak g)$ extends these values linearly. Hence the derivation $\operatorname{gr}(\operatorname{ad}_x)$ of step 2.1, whose degree-one restriction is the given map $\operatorname{ad}_x$ by step 3.1, equals $D_x$. Therefore $D_x(\operatorname{gr}I)=\operatorname{gr}(\operatorname{ad}_x)(\operatorname{gr}I)\subseteq\operatorname{gr}I$ and $\sigma_n(\operatorname{ad}_xu)=D_x(\sigma_n(u))$ for every $n\ge0$ and $u\in F^nU(\mathfrak g)$, which is the assertion. [F2, F4, step 2.1, step 3.1, algebra] ∎
