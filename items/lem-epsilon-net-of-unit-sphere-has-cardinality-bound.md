---
id: lem-epsilon-net-of-unit-sphere-has-cardinality-bound
kind: lemma
title: "Finite epsilon nets of the Euclidean sphere"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-jordan-content-finite-additivity
  - def-euclidean-spheres-and-closed-balls
  - def-jordan-inner-and-outer-content
  - def-multidimensional-darboux-integral
  - def-rational-power
  - lem-finite-set-has-max
  - lem-metrics-on-rn
  - lem-rational-power-monotone
  - thm-jordan-content-is-translation-invariant
  - thm-linear-images-scale-jordan-content-by-absolute-determinant
  - thm-multidimensional-integral-properties
  - thm-of-archimedean
  - thm-volume-recursion-for-closed-euclidean-balls
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, §1.4, Lemma 1.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John K. Hunter, Measure Theory, Jordan content and volume properties"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $d\ge1$ be an integer and $0<\epsilon<1$. There is a finite set $\mathcal N\subseteq S^{d-1}$ such that every $u\in S^{d-1}$ has some $v\in\mathcal N$ with $\|u-v\|_2\le\epsilon$, and
$$|\mathcal N|\le(1+2/\epsilon)^d.$$
Here $S^{d-1}=\{u\in\mathbb R^d:\|u\|_2=1\}$ by [[def-euclidean-spheres-and-closed-balls]]. Such a set is called an $\epsilon$-net of the sphere.

## Facts & Assumptions

**Given:** An integer $d\ge1$ and $0<\epsilon<1$.

[F1] The closed Euclidean ball and sphere are $\overline B_2(c,r)=\{x:\|x-c\|_2\le r\}$ and $S_2(c,r)=\{x:\|x-c\|_2=r\}$; the unit sphere is $S^{d-1}=S_2(0,1)$ ([[def-euclidean-spheres-and-closed-balls]]).

[F2] $d_2(x,y)=\|x-y\|_2$ is a metric, so it satisfies the triangle inequality ([[lem-metrics-on-rn]]).

[F3] Closed Euclidean balls are Jordan measurable, with $V_1(r)=2r$ and the stated slicing recursion for $V_d(r)$ ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F4] An invertible linear map scales Jordan content by the absolute determinant; in particular $\operatorname{cont}(r\overline B_2(0,1))=r^d\operatorname{cont}(\overline B_2(0,1))$ for $r>0$ ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[F5] Translation preserves Jordan content ([[thm-jordan-content-is-translation-invariant]]).

[F6] Jordan content is additive on finite disjoint families of bounded Jordan sets ([[cor-jordan-content-finite-additivity]]).

[F7] Jordan outer content is the infimum of volumes of finite rectangle covers, and the content of a Jordan set is its common inner/outer value ([[def-jordan-inner-and-outer-content]]).

[F8] The natural numbers are unbounded in $\mathbb R$ ([[thm-of-archimedean]]).

[F9] Every nonempty finite set of real numbers has a maximum ([[lem-finite-set-has-max]]).

[F10] For rational $\alpha>0$, rational powers preserve order on positive bases, and $0^\alpha=0$ ([[lem-rational-power-monotone]], [[def-rational-power]]).

[F11] The Riemann integral is monotone and additive across a cut, and the integral of a constant $c$ on an interval $[a,b]$ is $c(b-a)$ ([[thm-multidimensional-integral-properties]], [[def-multidimensional-darboux-integral]]).

## Proof

1.1 Put $V_d=\operatorname{cont}(\overline B_2(0,1))$. This number is finite by [F3] and positive by induction on $d$: $V_1=2$, and for $d\ge2$ set $\alpha=(d-1)/2>0$. On $[-1/2,1/2]$, $1-t^2\ge3/4$, so [F10] gives $(1-t^2)^\alpha\ge(3/4)^\alpha>0$; on all of $[-1,1]$ this integrand is nonnegative. By [F11], splitting the integral at $-1/2$ and $1/2$ and comparing the middle part with the constant $(3/4)^\alpha$ shows $\int_{-1}^{1}(1-t^2)^\alpha\,dt\ge(3/4)^\alpha>0$. The volume recursion [F3] then gives $V_d>0$ from $V_{d-1}>0$. [given, F3, F10, F11, algebra]

1.2 Let $E=\{x_1,\ldots,x_N\}\subseteq S^{d-1}$ have pairwise distances greater than $\epsilon$, and put $r=\epsilon/2$. The closed balls $\overline B_2(x_j,r)$ are pairwise disjoint: a point in two of them would, by the triangle inequality [F2], put the corresponding centers at distance at most $2r=\epsilon$, contrary to the separation. Each small ball lies in $\overline B_2(0,1+r)$, since $\|x_j\|_2=1$ and [F2] gives $\|y\|_2\le\|y-x_j\|_2+\|x_j\|_2\le r+1$. [given, F1, F2]

2.1 By scaling and translation invariance [F4, F5], every small ball in step 1.2 has content $r^dV_d$ and the large ball has content $(1+r)^dV_d$. Finite additivity [F6] and monotonicity of outer content from [F7] give $Nr^dV_d\le(1+r)^dV_d$. Step 1.1 gives $V_d>0$, so cancellation and $r=\epsilon/2$ yield $N\le((1+r)/r)^d=(1+2/\epsilon)^d$. This also holds when $E$ is empty, for which $N=0$. [F4, F5, F6, F7, step 1.1, step 1.2, algebra]

3.1 Choose an integer $M>(1+2/\epsilon)^d$ using [F8]. Let $K$ be the set of cardinalities of finite subsets of $S^{d-1}$ whose distinct points are more than $\epsilon$ apart. The first coordinate unit vector shows $K$ is nonempty, and step 2.1 shows every member of $K$ is at most $(1+2/\epsilon)^d<M$. Thus $K$ is a nonempty subset of $\{0,1,\ldots,M\}$; [F9] gives a largest member $k\in K$, attained by a finite set $\mathcal N$ by the definition of $K$. [given, F1, F8, F9, step 2.1, choose]

4.1 If some $u\in S^{d-1}$ were farther than $\epsilon$ from every point of $\mathcal N$, adjoining $u$ would produce a finite set with pairwise distances greater than $\epsilon$ and cardinality $k+1$, contradicting maximality in step 3.1. Thus $\mathcal N$ is an $\epsilon$-net; step 2.1 gives its stated cardinality bound. This construction uses only a maximum in a finite set of possible cardinalities, not an axiom of choice. [step 2.1, step 3.1, contradiction] ∎
