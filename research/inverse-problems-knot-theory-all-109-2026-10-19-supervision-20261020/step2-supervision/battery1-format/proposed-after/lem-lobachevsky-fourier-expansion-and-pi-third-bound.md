---
id: lem-lobachevsky-fourier-expansion-and-pi-third-bound
kind: lemma
title: "Lobachevsky Fourier expansion and a certified π/3 value"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-lobachevsky-function
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§9.1, Lemma 9.5 and equation (9.3), printed pp.174–176"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/7.pdf"
      locator: "Chapter 7, Milnor's ideal tetrahedron volume formula and Fourier-series calculation"
---

## Statement

For every real $\theta$, $\Lambda$ is continuous, odd, and $\pi$-periodic, with $\Lambda(\pi/2)=0$ and
$$\Lambda(2\theta)=2\Lambda(\theta)+2\Lambda(\theta+\pi/2).$$
For $0\le\theta\le\pi$,
$$\Lambda(\theta)=\frac12\sum_{n=1}^{\infty}\frac{\sin(2n\theta)}{n^2}.$$
In particular,
$$\Lambda(\pi/3)=\frac{\sqrt3}{4}\sum_{k=0}^{\infty} \left(\frac1{(3k+1)^2}-\frac1{(3k+2)^2}\right).$$
For every integer $N\ge1$, the positive remainder after the terms $k=0,\ldots,N$ is at most $\sqrt3/(72N^2)$.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Lemma 9.5 and equation (9.3)](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Facts & Assumptions

**Given:** The function $\Lambda$ defined by the improper integral in the Lobachevsky definition.

[F1] [[def-lobachevsky-function]] defines $\Lambda(\theta)=-\int_0^\theta\log|2\sin u|\,du$; logarithmic singularities at integer multiples of $\pi$ are integrable.

## Proof

1.1 For $|w|<1$, integrating the uniformly convergent geometric series on compact subdisks gives $-\log(1-w)=\sum_{n\ge1}w^n/n$. Taking real parts at $w=re^{2iu}$, where $0<r<1$, yields $-\log|1-re^{2iu}|=\sum_{n\ge1}r^n\cos(2nu)/n$. This series is uniformly absolutely convergent in $u$ for fixed $r$, so integrating from $0$ to $\theta$ gives $-\int_0^\theta\log|1-re^{2iu}|\,du=\frac12\sum_{n\ge1}r^n\sin(2n\theta)/n^2$. [F1, algebra]

2.1 For $r\ge1/2$, $|1-re^{2iu}|^2=(1-r)^2+4r\sin^2u$, so $\sqrt2|\sin u|\le |1-re^{2iu}|\le2$. Therefore $|\log|1-re^{2iu}||$ is bounded by a constant plus $|\log|\sin u||$, which is integrable on bounded intervals. Dominated convergence sends the integral in step 1.1 to $\Lambda(\theta)$ as $r\uparrow1$; the series converges uniformly in $\theta$ because $\sum n^{-2}<\infty$. This proves the Fourier expansion on $[0,\pi]$ and continuity there. [F1, step 1.1, algebra]

3.1 The defining integrand is even, so $\Lambda$ is odd. Its derivative away from the integral's singularities is $-\log|2\sin\theta|$, a $\pi$-periodic function; the Fourier formula gives $\Lambda(0)=\Lambda(\pi)=0$, so the integral of this derivative over each period is zero. Hence $\Lambda(\theta+\pi)=\Lambda(\theta)$ for every real $\theta$. Substitution $\theta=\pi/2$ in the Fourier series gives $\Lambda(\pi/2)=0$. [F1, step 2.1, algebra]

4.1 The identity $|2\sin(2u)|=|2\sin u|\,|2\sin(u+\pi/2)|$ and substitution $v=2u$ in the defining integral give $\Lambda(2\theta)=2\Lambda(\theta)+2\Lambda(\theta+\pi/2)-2\Lambda(\pi/2)$. Step 3.1 gives the stated duplication identity. [F1, step 3.1, algebra]

5.1 In the Fourier series at $\theta=\pi/3$, $\sin(2n\pi/3)$ cycles through $\sqrt3/2,-\sqrt3/2,0$, so grouping successive triples gives the stated positive series. For $a=3k+1$, $a^{-2}-(a+1)^{-2}=(2a+1)/(a^2(a+1)^2)\le2/a^3\le2/(27k^3)$ for $k\ge1$. For $N\ge1$, the tail after $k=0,\ldots,N$ is at most $\frac{\sqrt3}{4}\frac2{27}\sum_{k>N}k^{-3}\le\frac{\sqrt3}{4}\frac2{27}\int_N^\infty x^{-3}\,dx=\frac{\sqrt3}{108N^2}\le\frac{\sqrt3}{72N^2}$. [F1, step 2.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §9.1](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
