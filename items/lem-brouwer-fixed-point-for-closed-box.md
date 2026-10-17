---
id: lem-brouwer-fixed-point-for-closed-box
kind: lemma
title: A continuous self-map of a nonempty closed box has a fixed point
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-real-boxes-and-interval-jacobian-enclosures
  - thm-brouwer-fixed-point-theorem
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Statement

Let $X=\prod_{j=1}^n[a_j,b_j]\subset\mathbb R^n$ be a nonempty real box, allowing $a_j=b_j$. Every continuous map $f:X\to X$ has a fixed point.

## Facts & Assumptions

**Given:** A positive integer $n$, a nonempty real box $X$ as stated, and a continuous map $f:X\to X$.

[F1] Every continuous self-map of the closed Euclidean unit ball $D^m$ has a fixed point for every integer $m\ge0$ ([[thm-brouwer-fixed-point-theorem]]).

[F2] A real box is a product of closed coordinate intervals, and its interior is the product of the open coordinate intervals ([[def-real-boxes-and-interval-jacobian-enclosures]]).

## Proof

1.1 Let $J=\{j:a_j<b_j\}$ and $m=|J|$. If $m=0$, $X$ is a singleton, so its sole point is fixed. If $m>0$, deleting the fixed coordinates identifies $X$ with a box $X_J$ whose side lengths are positive. The coordinatewise affine map $T:[-1,1]^m\to X_J$, with $T(u)_j=(a_j+b_j)/2+(b_j-a_j)u_j/2$, is a homeomorphism. Reinserting the fixed coordinate values defines $\iota:X_J\to X$, and projection onto the free coordinates defines $\pi_J:X\to X_J$; since the fixed output coordinates of $f$ equal their singleton values, $f_J=\pi_J\circ f\circ\iota$ is a continuous self-map of $X_J$. [given, F2, construct]

2.1 Define $\|u\|_2=(\sum_j|u_j|^2)^{1/2}$ and $\|u\|_\infty=\max_j|u_j|$, let $D^m=\{u:\|u\|_2\le1\}$, and put $C_m=[-1,1]^m$. For $u\ne0$ set $h(u)=(\|u\|_2/\|u\|_\infty)u$, and set $h(0)=0$. Then $\|h(u)\|_\infty=\|u\|_2\le1$. For $y\ne0$ in $C_m$, set $h^{-1}(y)=(\|y\|_\infty/\|y\|_2)y$, and set $h^{-1}(0)=0$. For $u\ne0$, $\|h(u)\|_2=\|u\|_2^2/\|u\|_\infty$ and $\|h(u)\|_\infty=\|u\|_2$, so substituting in $h^{-1}$ gives $h^{-1}(h(u))=u$; the same norm calculation gives $h(h^{-1}(y))=y$ for $y\ne0$. Both maps are continuous away from zero. For any vector $v$, one coordinate attains $\|v\|_\infty$, so $\|v\|_\infty^2\le\sum_j|v_j|^2$; each of the $m$ summands is at most $\|v\|_\infty^2$, so $\|v\|_2^2\le m\|v\|_\infty^2$. Taking nonnegative square roots gives $\|v\|_\infty\le\|v\|_2\le\sqrt m\,\|v\|_\infty$. Therefore for nonzero $u$, $\|h(u)\|_2=\|u\|_2^2/\|u\|_\infty\le\sqrt m\,\|u\|_2$, and for nonzero $y$, $\|h^{-1}(y)\|_2=\|y\|_\infty\le\|y\|_2$. These inequalities also hold at zero and show both maps are continuous there. Thus $h$ is a homeomorphism $D^m\to C_m$. [step 1.1, algebra, construct]

3.1 For $m>0$, $T\circ h$ is a homeomorphism from $D^m$ to $X_J$. The conjugate map $g=(T\circ h)^{-1}\circ f_J\circ(T\circ h):D^m\to D^m$ is continuous. By [F1], $g$ has a fixed point; mapping it back gives a fixed point of $f_J$, and applying $\iota$ gives a fixed point of $f$ in $X$. [given, F1, step 1.1, step 2.1, construct] ∎
