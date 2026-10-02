---
id: cor-minkowski-convex-body-theorem-at-equality
kind: corollary
title: "Minkowski convex-body theorem at equality"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-convex-body-theorem
  - lem-full-lattice-fundamental-domain-and-bounded-points
  - thm-lebesgue-measure-under-dilations-and-reflections
  - def-convex-subset-of-euclidean-space
  - def-full-euclidean-lattice-and-covolume
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.19, p.76."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§28 pp.145-146."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let
$\Lambda\subseteq\mathbb R^n$ be a full lattice with
$\operatorname{covol}(\Lambda)>0$
([[def-full-euclidean-lattice-and-covolume]]), and let $C\subseteq\mathbb R^n$
be compact, convex and centrally symmetric
([[def-convex-subset-of-euclidean-space]]). If

$$\lambda_n(C)\ge2^n\operatorname{covol}(\Lambda),$$

then $C$ contains a nonzero point of $\Lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a full lattice $\Lambda$ with
$\operatorname{covol}(\Lambda)>0$, and a compact convex centrally symmetric
$C$ with $\lambda_n(C)\ge2^n\operatorname{covol}(\Lambda)$.

[A1] The Axiom of Choice gives the Axiom of Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]), which licenses the
countable selection of one nonzero lattice point $v_m$ from each of the sets
$S_m\cap\Lambda$ in step 2.1; the strict theorem [F1] and the tiling lemma
[F3] are applied under the Axiom of Choice assumed in the statement, and no
further choice is used.

[F1] Strict Minkowski: if a Lebesgue measurable convex centrally symmetric set
$S$ satisfies $\lambda_n(S)>2^n\operatorname{covol}(\Lambda)$, then $S$
contains a nonzero point of $\Lambda$ ([[thm-minkowski-convex-body-theorem]]).

[F2] For nonzero real $t$, $\lambda_n(tS)=|t|^n\lambda_n(S)$ for Lebesgue
measurable $S$ ([[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F3] Every bounded subset of $\mathbb R^n$ meets $\Lambda$ in finitely many
points ([[lem-full-lattice-fundamental-domain-and-bounded-points]]).

[F4] $C$ convex: $(1-t)x+ty\in C$ for $x,y\in C$, $t\in[0,1]$; $C$ compact,
hence closed; central symmetry gives $-C=C$, so $0\in C$ since $C$ is
nonempty; and for $c\in C$ the convexity relation $c/2=\frac12c+\frac12\cdot0$
gives $c/2\in C$ ([[def-convex-subset-of-euclidean-space]]).

## Proof

1.1 For every $m\ge1$ the dilate $S_m:=(1+1/m)C$ is compact, convex and centrally symmetric, and by [F2] $\lambda_n(S_m)=(1+1/m)^n\lambda_n(C)\ge(1+1/m)^n2^n\operatorname{covol}(\Lambda)>2^n\operatorname{covol}(\Lambda)$ because $\operatorname{covol}(\Lambda)>0$ and $(1+1/m)^n>1$. [F2, F4, given]
2.1 By [F1] each $S_m$ contains a nonzero lattice point; using [A1] choose one, say $0\ne v_m\in S_m\cap\Lambda$, for every $m\ge1$. [A1, F1, step 1.1]
3.1 Since $1+1/m\le2$ for $m\ge1$ and $0\in C$, convexity of $C$ gives $S_m\subseteq2C$, so every $v_m$ lies in the bounded set $2C$; by [F3] the set $2C\cap\Lambda$ is finite, so some $v\in2C\cap\Lambda$ equals $v_m$ for infinitely many $m$. [F3, F4, step 2.1]
4.1 Fix such an infinite set of indices $m$. For each of them $v\in(1+1/m)C$, hence $v/(1+1/m)\in C$; as $m\to\infty$ through those indices $v/(1+1/m)\to v$, and $C$ is closed by [F4], so $v\in C$. [F4, step 3.1]
5.1 The point $v$ is nonzero by step 2.1 and lies in $C\cap\Lambda$, so $C$ contains a nonzero lattice point. [step 4.1] ∎

## Remarks

Compactness is used twice: it makes $2C\cap\Lambda$ finite and it makes $C$
closed, so that the limit of the points $v/(1+1/m)$ stays in $C$. For
non-closed bodies the conclusion can fail: the open cube $(-1,1)^n$ has
$\lambda_n=2^n\operatorname{covol}(\mathbb Z^n)$ and meets $\mathbb Z^n$ only in
the origin.
