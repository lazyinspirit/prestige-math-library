---
id: def-deformation-to-the-normal-cone-and-specialization
kind: definition
title: "Deformation to the normal cone and specialization"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-blowup-scheme-along-ideal
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-rees-algebra-ideal-sheaf
  - lem-chow-localization-and-vector-bundle-homotopy
  - lem-smooth-immersion-normal-sequence-and-deformation-charts
  - lem-regular-sequence-associated-graded-polynomial
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Section 42.53 and Lemma 42.48.1 (deformation to the normal cone)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Section 42.53 and Lemma 42.48.1: deformation to the normal cone, the special fibre and specialization"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 14"
      url: "https://math.stanford.edu/~vakil/245/245class14.pdf"
      locator: "Class 14: deformation to the normal cone (comparison sketch)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the smooth
normal-sequence suppliers. For a closed immersion $i:X\hookrightarrow Y$ with
ideal $\mathcal I$, put
$C_XY=\operatorname{Spec}_X(\bigoplus_{n\ge0}\mathcal I^n/\mathcal I^{n+1})$
and $M=\operatorname{Bl}_{X\times\{\infty\}}(Y\times\mathbb P^1)$. Let
$B=\operatorname{Bl}_XY$ be the strict transform of $Y\times\{\infty\}$. The
fibre at infinity is the sum $M_\infty=B+\mathbb P(C_XY\oplus1)$ of effective
Cartier divisors, whose intersection is $\mathbb P(C_XY)$; this is a union with
a common boundary, not a disjoint union. Projectivized cones here use the lines
convention $\operatorname{Proj}(\operatorname{gr}_{\mathcal I}\mathcal O_Y[S])$.
Off infinity $M\cong Y\times\mathbb A^1$, and $D_i:=M\setminus B$ has special
fibre $C_XY$ and ordinary fibres $Y$. It is flat over $\mathbb P^1$. The
**specialization** $\sigma_i:A_m(Y)\to A_m(C_XY)$ is obtained by extending the
flat pullback of a cycle to $D_i$, then taking Cartier Gysin at infinity. It
sends an integral $[V]$ to the fundamental cycle $[C_{X\cap V}V]$ pushed to
$C_XY$. For a regular immersion of codimension $d$, the normal cone equals the
rank-$d$ normal bundle $N_{X/Y}$. The construction works for finite type
schemes over a field, with locally finite cycles in the locally finite type
case.

**Well-definedness.** The charts of $M$ near infinity are computed directly:
over an affine open $\operatorname{Spec}A\subseteq Y$ with
$X=\operatorname{Spec}(A/I)$ and $t$ the coordinate vanishing at infinity, the
$t$-chart of the blowup is the affine blowup algebra
$A[t,I/t]=\sum_{n\ge0}t^{-n}I^n[t]\subseteq A[t,t^{-1}]$, and multiplication by
$t$ is injective with quotient $\operatorname{gr}_IA$; in the chart of a
generator $a\in I$ the ring is $A[I/a][t/a]$, and $t=a(t/a)$ exhibits the fibre
at $t=0$ as the sum of the exceptional divisor $a=0$ and the strict transform
$t/a=0$, whose charts are $\operatorname{Bl}_XY$ and whose intersection is
$\operatorname{Proj}\operatorname{gr}_IA$. This identifies the fibre at
infinity as the stated union of effective Cartier divisors, without assuming
$Y$ integral or the centre Cartier, and shows that, away from infinity, $M\setminus B\cong Y\times\mathbb A^1$,
while its special fibre is $C_XY$; the charts are torsion-free over $k[t]$ (or polynomial
over the affine blowup algebras), and a torsion-free module over the principal
ideal domain $k[t]$ is flat, giving flatness of $M$ over $\mathbb P^1$
(compare the chart computation of
[[lem-smooth-immersion-normal-sequence-and-deformation-charts]]). Localization
for the pair $C_XY\hookrightarrow M\setminus B$ gives a lift of the pulled-back
cycle class to $D_i$, and two lifts differ by a class supported on $C_XY$; the
Cartier Gysin at infinity kills that difference because the normal line of the
infinity fibre is trivial, so $j^!j_*\gamma=c_1(\mathcal O)\cap\gamma=0$ by the
basic property $c_1(\mathcal O_X)=0$ of
[[def-intersection-with-a-cartier-divisor-and-first-chern-class]]; hence
$\sigma_i$ is well defined on Chow classes. On an integral cycle $[V]$ the
closure of $V\times\mathbb A^1$ in the $t$-chart is
$\operatorname{Spec}\mathcal O_V[t,I\mathcal O_V/t]$, and cutting by $t$
produces $\operatorname{gr}_{I\mathcal O_V}\mathcal O_V$, which is the
fundamental cycle of the normal cone $C_{X\cap V}V$ with its generic lengths;
for a regular sequence generating $I$,
[[lem-regular-sequence-associated-graded-polynomial]] identifies
$\operatorname{gr}_IA$ with $\operatorname{Sym}_{A/I}(I/I^2)$, so the cone is
the rank-$d$ normal bundle of
[[lem-smooth-immersion-normal-sequence-and-deformation-charts]].

## Remarks

The first diagram displays the open deformation family $D_i=M\setminus B$,
with structure map $p$ induced by $M\to\mathbb P^1$. Both squares are
Cartesian: $j$ includes the special fibre, while $u$ includes the complement
of that fibre. Here $\mathbb A^1=\mathbb P^1\setminus\{\infty\}$; the local
parameter $t$ used above vanishes at $\infty$, not at the origin of this
ordinary-fibre chart.

```tikzcd
C_XY \arrow[r, hook, "j"] \arrow[d] & D_i \arrow[d, "p"] & Y\times\mathbb A^1 \arrow[l, hook', "u"'] \arrow[d] \\
\{\infty\} \arrow[r, hook] & \mathbb P^1 & \mathbb A^1 \arrow[l, hook']
```

For the full blowup family, write $E=\mathbb P(C_XY\oplus1)$ and
$W=\mathbb P(C_XY)$. Its infinity fibre is the divisor $B+E$, with each
summand occurring once. The second diagram shows the closed inclusions into
that fibre and their common boundary $W=B\cap E$. Removing $B$ leaves
$E\setminus W=C_XY$, the special fibre of $D_i$.

```tikzcd
W \arrow[r, hook] \arrow[d, hook] & E \arrow[d, hook] \\
B \arrow[r, hook] & M_\infty
```

The projective completion $E$ is a projectivized cone in general; no regular
immersion is assumed in either diagram. Only under the regular-immersion
hypothesis stated above is $C_XY=N_{X/Y}$ a vector bundle. At the level of
cycles, flat pullback along $Y\times\mathbb A^1\to Y$ raises dimension from
$m$ to $m+1$; localization lifts this class to $A_{m+1}(D_i)$ and $j^!$
lowers dimension to $m$, yielding the stated $\sigma_i$. The chart and
localization arguments above establish these facts independently of the
figures.
