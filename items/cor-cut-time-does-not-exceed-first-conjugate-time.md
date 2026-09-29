---
id: cor-cut-time-does-not-exceed-first-conjugate-time
kind: corollary
title: Cut time does not exceed first conjugate time
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-cut-time-in-a-unit-tangent-direction
  - def-infimum
  - thm-characterization-of-a-cut-point
  - thm-infimum-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the cut point of a geodesic and the statement that it occurs at or before the first conjugate point."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, section 23.2, printed pp.163-170: the cut locus and its characterization; the corollary applies the converse direction."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried through the declared dependencies. Let $(M,g)$ be a complete,
connected, boundaryless, finite-dimensional Riemannian manifold, let $p\in M$,
let $v\in S_pM$ be a unit tangent vector, write $\gamma(t)=\exp_p(tv)$ for the
radial geodesic and let $c:=c_p(v)\in(0,+\infty]$ be its cut time.

(a) If $t>0$ and $\gamma(0)=p$ and $\gamma(t)$ are conjugate along
$\gamma|_{[0,t]}$, then $c\le t$.

(b) Consequently, if the set
$$C:=\{t>0:\gamma(0)\text{ and }\gamma(t)\text{ are conjugate along }\gamma|_{[0,t]}\}$$
of positive conjugate instants is nonempty, then $c\le\inf C$; the infimum
$\inf C$ is the **first conjugate time** of the geodesic $\gamma$, and
$c=+\infty$ is possible only when $C=\varnothing$.

The corollary asserts the inequality $c\le\inf C$ only; it does not assert
that $\inf C$ is attained, that is, that a first conjugate instant exists.
Dimension zero has no instance, since there is no unit tangent vector.

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian manifold, the point $p$, the unit vector $v$, the radial geodesic $\gamma(t)=\exp_p(tv)$, its cut time $c=c_p(v)$ and the set $C$ of positive conjugate instants.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited exactly through the declared Hopf-Rinow, cut-time and conjugacy interfaces. No full Axiom of Choice is used.

[F1] The cut time is $c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$, and $S_pM=\{w\in T_pM:|w|_g=1\}$ ([[def-cut-time-in-a-unit-tangent-direction]]).

[F2] **Converse for a conjugate instant.** If $t>0$ and $\gamma(0)$, $\gamma(t)$ are conjugate along $\gamma|_{[0,t]}$, then $c\le t$ ([[thm-characterization-of-a-cut-point]], clause (b)(1)).

[F3] The points $\gamma(a)$ and $\gamma(b)$ are conjugate along an affinely parametrized geodesic segment exactly when some nonzero Jacobi field along it vanishes at both endpoints ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]). In particular conjugacy pertains to the specified geodesic segment $\gamma|_{[0,t]}$.

[F4] If $S\subseteq\mathbb R$ is nonempty and bounded below, then $\inf S$ exists, and it is a greatest lower bound: it is a lower bound of $S$, and $\ell'\le\inf S$ for every lower bound $\ell'$ of $S$ ([[thm-infimum-property]], [[def-infimum]]).

## Proof

**Proof technique:** apply the converse direction of the cut-point characterization to each positive conjugate instant, then take the infimum.

1.1 Let $t>0$ and suppose that $\gamma(0)$ and $\gamma(t)$ are conjugate along $\gamma|_{[0,t]}$. By [F3] this is conjugacy along the specified radial segment, so clause (b)(1) of the characterization [F2] applies and gives $c\le t$. Since $t<+\infty$ and the order on $(0,+\infty]$ is the usual one, whenever $C$ is nonempty this exhibits $c<+\infty$: the cut time is finite as soon as some positive conjugate instant exists. [F1, F2, F3, given]

2.1 If $C=\varnothing$, statement (b) asserts nothing and there is nothing to prove; $c$ may be finite or $+\infty$ in that case. Suppose instead that $C\ne\varnothing$. Since $C\subseteq(0,\infty)$, the number $0$ is a lower bound of $C$ and $C$ is nonempty and bounded below, so [F4] provides $\inf C$. By step 1.1 every $t\in C$ satisfies $t\ge c$, that is, $c$ is a lower bound of $C$; the greatest-lower-bound property in [F4] then gives $c\le\inf C$. [F4, given, step 1.1]

3.1 Boundary and choice audit. The positive time constraint $t>0$ excludes the degenerate instant $0$, which lies outside the scope of the conjugacy definition [F3]: that definition is stated for a nondegenerate segment $a<b$, and a constant geodesic has no conjugate pairs at all. In dimension zero there is no unit tangent vector, so there is no instance; in dimension one the unit sphere $S_pM$ consists of the two unit vectors and the argument applies verbatim, while the radial geodesic is nonconstant because $|v|_g=1$ by [F1]. The empty manifold has no point $p$. When $C\ne\varnothing$ the set $C$ is a nonempty subset of $(0,\infty)$ and its infimum is a finite real number, while $c$ is then finite by step 1.1. No attainment of $\inf C$ is asserted: the corollary proves only the inequality, which is exactly the content of the statement. Exactly the inherited $\mathrm{AC}_\omega$ of [A1] is used, through the cut-time and characterization interfaces; the infimum of a nonempty bounded-below set of reals is supplied by [F4] and involves no choice. [A1, F1, F3, F4, step 1.1, step 2.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, states the cut-point criterion and that the cut point occurs at or before the first conjugate point; Datar, *Lectures on Riemannian Geometry*, Lemma 23.2.2 and proof, printed pp.167-169, supplies the converse direction of the characterization that is applied here at each conjugate instant. The infimum formulation and its boundary cases are carried out above; nothing is quoted.
