---
id: lem-bounded-separate-rationality-is-rational
kind: lemma
title: "Uniformly bounded separate rationality implies rationality"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-identity-theorem-in-several-complex-variables
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Guay, Opdam and Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "Sections 5.1–5.4, especially Proposition 5.7 and Theorems 5.13–5.15; elementary analytic details supplied locally."
---

## Statement

Let $U\subseteq\mathbb C^n$ be a nonempty Zariski open subset and let $f$ be a meromorphic function on $U$ (locally a quotient of holomorphic functions). Suppose that there is $D\ge0$ such that on the affine coordinate lines outside a fixed proper algebraic exceptional set in each coordinate direction, whenever its meromorphic restriction is defined, $f$ restricts to a rational function of numerator and denominator degrees at most $D$. Then $f$ is the restriction of an element of $\mathbb C(z_1,\ldots,z_n)$ wherever the latter is defined.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[thm-identity-theorem-in-several-complex-variables]]: holomorphic functions on a connected domain agreeing on a nonempty open subset agree everywhere. A nonempty Zariski open subset of complex affine space is connected: a generic broken complex line connects any two points while avoiding the finitely many intersections with its algebraic complement.

## Proof

**Proof technique:** direct.

**Given:** The stated data and Facts.

1.1 For $n=0$ the function is constant. For $n=1$ the hypothesis is the conclusion. For $n\ge2$, put $d=\lfloor D\rfloor$; since polynomial degrees are integers, every degree bound in the hypothesis is then at most $d$. Proceed by induction. Choose $2d+1$ distinct constants $a_i$ in the first coordinate such that the slices $U_i=U\cap\{z_1=a_i\}$ are nonempty Zariski open and inherit the coordinate-line hypotheses in the remaining variables. Require also that none of the slices is identically a polar slice of $f$, and that the generic first-coordinate restrictions are finite at all nodes. These additional choices are possible locally: represent $f=g/h$ near a point where $h\ne0$ and choose the nodes in that first-coordinate neighborhood; analytic uniqueness then prevents an entire chosen slice from being polar. Such constants exist: each exceptional algebraic set is defined by finitely many nonzero polynomials; a polynomial becomes identically zero after substituting $z_1=a$ for at most finitely many $a$, unless it was zero to start with. For the direction $z_1$, exclude also those $z'$ where the line is exceptional or any node lies outside $U$. The algebraic exclusions leave a nonempty Zariski open set, and the finitely many meromorphic pole exclusions still leave a nonempty analytic open subset. [given, induction, choose, algebra]

2.1 Induction makes $f_i(z')=f(a_i,z')$ rational functions. Over $L=\mathbb C(z')$, solve the $2d+1$ homogeneous linear equations $P(a_i)=f_i Q(a_i)$ for the $2d+2$ coefficients of two polynomials of degrees at most $d$. There is a nonzero solution. It has $Q\ne0$, because otherwise $P$ has $2d+1>d$ distinct roots and is zero, contradicting nonzeroness; this also covers $d=0$. [step 1.1, construct, algebra]

3.1 For generic fixed $z'$, write the actual line restriction as $P_*/Q_*$ with degrees at most $d$ and $Q_*(a_i)\ne0$. The polynomial $P Q_*-P_*Q$ has degree at most $2d$ and vanishes at every $a_i$, hence is zero. Possible zeros of $Q$ at nodes cause no problem for this cross-multiplied identity. Thus $f=P/Q$ on a nonempty open set. Clear the rational coefficients to write this as equality of meromorphic functions $f=P_0/Q_0$ on a nonempty open subset of $U$, with polynomials $P_0,Q_0$. Let $r=f-P_0/Q_0$, and let $A$ be the set of points of $U$ near which $r$ is the zero meromorphic function. This set is open and nonempty. If $p\in\overline A$, choose a connected ball $B\subset U$ around $p$ on which $r=g/h$ for holomorphic functions $g,h$ with $h$ not identically zero. The open set $B\cap A$ contains a point where $h\ne0$, so $g$ vanishes on a nonempty open subset of $B$. The holomorphic identity theorem [F1] gives $g=0$ on $B$, whence $r=0$ meromorphically on $B$ and $p\in A$. Thus $A$ is also closed; connectedness from [F1] gives $A=U$. This proves the meromorphic identity propagation needed here, and hence the induction and the assertion. [F1, step 2.1, algebra] ∎
