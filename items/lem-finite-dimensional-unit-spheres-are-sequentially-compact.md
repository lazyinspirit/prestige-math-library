---
id: lem-finite-dimensional-unit-spheres-are-sequentially-compact
kind: lemma
title: Unit spheres in finite-dimensional normed spaces are sequentially compact
status: draft
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-dimension
  - def-equinumerous
  - def-isometry-and-metric-embedding
  - def-linear-basis
  - def-metric-compactness-variants
  - def-metric-convergence
  - def-norm-and-normed-space
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-metric-and-riemannian-manifold
  - lem-reverse-triangle-inequality-in-a-normed-space
  - thm-closed-unit-ball-compact-iff-finite-dimensional
  - thm-compact-implies-the-other-compactness-forms
provenance:
  statement: ai-altered
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: "The closed unit ball of a finite-dimensional normed space is compact; this is the supplied library form of the argument."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lemma 23.2.2 proof, printed pp.167-168: the limiting-direction argument passes to a convergent subsequence of unit tangent vectors, which is the prerequisite supplied here."
---

## Statement

Let $V$ be a finite-dimensional real normed space with norm $\|\cdot\|$ and
unit sphere
$$S=\{v\in V:\|v\|=1\}.$$
Then $S$ is sequentially compact: every sequence $(v_k)$ in $S$ has a
subsequence $(v_{k_j})$ converging in the norm metric of $V$ to some $v\in S$.

Consequently, if $(M,g)$ is a finite-dimensional Riemannian manifold, $p\in M$
and
$$S_pM=\{v\in T_pM:|v|_g=1\},$$
then $S_pM$ is sequentially compact: every sequence of unit tangent vectors at
$p$ has a subsequence converging in the norm metric of $T_pM$ to a unit tangent
vector at $p$.

No choice principle is used. The empty sphere (dimension zero) and the
two-point sphere (dimension one) are included.

## Facts & Assumptions

**Given:** The finite-dimensional real normed space $(V,\|\cdot\|)$ with unit
sphere $S$, and the finite-dimensional Riemannian manifold $(M,g)$ with point
$p\in M$ for the consequence.

[F1] A normed space carries the metric $d_N(u,v)=N(u-v)$, and every metric
notion — convergence, compactness, the subspace metric — is available in it
with no second definition
([[def-norm-and-normed-space]], [[def-metric-convergence]]).

[F2] The closed unit ball $\overline B_X=\{x\in X:\|x\|\le1\}$ of a normed
space $X$ is compact in the norm metric if and only if $X$ admits an ordered
basis of finite length
([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[F3] A finite-dimensional $V$ has a basis $B$ with $B\approx n$ for some
$n\in\mathbb N$; an equinumerosity $B\approx n$ is a bijection $n\to B$, and an
ordered basis is a finite injective list whose image is a basis
([[def-dimension]], [[def-equinumerous]], [[def-linear-basis]]).

[F4] A compact metric space is countably compact, and a countably compact
metric space is sequentially compact; both implications are theorems of ZF
([[thm-compact-implies-the-other-compactness-forms]]).

[F5] Sequentially compact means that every sequence has a subsequence
converging to a point of the space
([[def-metric-compactness-variants]], [[def-metric-convergence]]).

[F6] For all $x,y$ in a normed space,
$\bigl|\|x\|-\|y\|\bigr|\le\|x-y\|$
([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[F7] For $A\subseteq X$ the subspace metric is the restriction
$d_A=d_X\restriction(A\times A)$, so convergence in $(A,d_A)$ is convergence in
$(X,d_X)$ with the limit in $A$
([[def-isometry-and-metric-embedding]], [[def-metric-convergence]]).

[F8] For a Riemannian metric $g$, each $g_p$ is a positive definite symmetric
bilinear form on $T_pM$; the pointwise norm is
$|v|_g=\sqrt{g(v,v)}$, and the length induced by an inner product is a norm
([[def-riemannian-metric-and-riemannian-manifold]],
[[def-pointwise-norm-and-angle-from-a-riemannian-metric]],
[[cor-inner-product-induces-a-norm]]).

[F9] If $M$ is a smooth $n$-manifold and $p\in M$, then $T_pM$ is an
$n$-dimensional real vector space
([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

## Proof

**Proof technique:** the closed unit ball is compact by finite dimensionality;
its compactness passes to subsequences of the sphere, and the limit stays on
the sphere because the norm is distance-controlling.

1.1 $\overline B_V=\{v\in V:\|v\|\le1\}$ is compact. [F2, F3]
Since $V$ is finite-dimensional, [F3] supplies a basis $B$ with $B\approx n$
for some $n\in\mathbb N$; the bijection $n\to B$ witnessing the equinumerosity
is an injective list whose image is a basis of $V$, that is, an ordered basis
of finite length $n$. The implication from clause 2 to clause 1 of [F2]
therefore gives compactness of $\overline B_V$ in the norm metric.

2.1 Let $(v_k)$ be a sequence in $S$. [F4, F5, F1, step 1.1]
Then $\|v_k\|=1\le1$, so $(v_k)$ is a sequence in $\overline B_V$. By the first
implication of [F4] the compact space $\overline B_V$ is countably compact, and
by the second it is sequentially compact; hence there are a strictly increasing
index map $k$ and a point $w\in\overline B_V$ with $v_{k_j}\to w$ in the norm
metric of $V$. Sequential compactness of the metric space $\overline B_V$ is
applied to the sequence $(v_k)$ read in that subspace; by [F7] the resulting
convergence is convergence in $V$ to the same limit $w$, which lies in
$\overline B_V$.

3.1 $w\in S$. [F6, step 2.1]
For every $j$ we have $\|v_{k_j}\|=1$, and [F6] gives
$\bigl|\|v_{k_j}\|-\|w\|\bigr|\le\|v_{k_j}-w\|$. Since
$v_{k_j}\to w$ in the norm metric $d(u,v)=\|u-v\|$, the right-hand side tends
to $0$, so $\|w\|=1$ and $w\in S$; moreover $v_{k_j}\to w$ with $w\in S$ is
convergence in the subspace $(S,d_S)$ by [F7].

4.1 $S$ is sequentially compact. [F5, F7, step 2.1, step 3.1]
Steps 2.1 and 3.1 take an arbitrary sequence in $S$ to a subsequence converging
in the norm metric to a point of $S$, which by [F7] is convergence in the
subspace metric $d_S$; that is exactly the condition defining sequential
compactness in [F5].

5.1 The Riemannian consequence holds. [F8, F9, step 4.1]
By [F8], $g_p$ is a positive definite symmetric bilinear form on the real
vector space $T_pM$, and $|v|_g=\sqrt{g(v,v)}$ is the norm it induces; by [F9],
$T_pM$ is $n$-dimensional for $n=\dim M$, hence finite-dimensional. So
$V=T_pM$ with $\|\cdot\|=|\cdot|_g$ is a finite-dimensional real normed space
and $S_pM$ is its unit sphere, so step 4.1 applies verbatim.

6.1 Boundary and choice audit. [F2, F4, F8, step 1.1, step 4.1, step 5.1]
In dimension zero, $V=\{0\}$ and $S=\varnothing$: the closed unit ball is the
singleton $\{0\}$, compact by step 1.1 with the empty ordered basis, and the
sequential-compactness condition holds vacuously because there is no sequence
into $S$. In dimension one, $S=\{\pm u\}$ for a unit vector $u$ and compactness
is immediate. The empty manifold carries no point $p$, so the Riemannian
consequence has no instance there. Finally, no choice principle is used: the
implication of [F2] that is applied is the direction from a finite ordered
basis to compactness of the ball, both implications of [F4] are theorems of
ZF, and the limit computation of step 3.1 uses only the inequality of [F6].
$\square$

## Source locator

The closed unit ball of a finite-dimensional normed space is compact; this is
the supplied library form of the Teschl argument, and the resulting sequential
compactness of the unit sphere is the prerequisite used by Datar, *Lectures on
Riemannian Geometry*, Lemma 23.2.2 proof, printed pp.167-168, where the
limiting-direction argument passes to a convergent subsequence of unit tangent
vectors without proving compactness. The tangent-space dimension is the
supplied smooth-manifold corollary. The derivation above combines these
library items and is carried out rather than quoted.
