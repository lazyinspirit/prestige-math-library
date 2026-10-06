---
id: lem-stabilizer-dimension-semicontinuity
kind: lemma
title: Semicontinuity of stabilizer and orbit dimension
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-rational-action-on-affine-variety, lem-complex-algebraic-groups-are-smooth, def-dimension-classical-variety, lem-orbit-dimension-and-closed-orbits-for-complex-group-actions, lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness, lem-action-map-fibres-and-stabilizer-subscheme, def-relative-dimension-smooth-morphism, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.29.4 (tag 02FZ)"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the local fibre-dimension supplier.
Let $G$ be a complex affine algebraic group acting algebraically on a classical
variety $X$ ([[def-rational-action-on-affine-variety]]). For every integer $n$
the set $\{x\in X:\dim G_x\ge n\}$ is closed in $X$; equivalently
$x\mapsto\dim G_x$ is upper semicontinuous and $x\mapsto\dim Gx$ is lower
semicontinuous ([[def-dimension-classical-variety]]). In particular the set of
points with infinite stabilizer is closed, and if $X$ is nonempty, the points
with stabilizer of minimal dimension form a non-empty open subset.

## Facts & Assumptions

**Given:** AC; a complex affine algebraic group $G$ acting algebraically on a classical variety $X$, with stabilizers $G_x$ for $x\in X$ and the orbit map $\beta:G\times X\to X\times X$, $\beta(g,x)=(x,gx)$.

[F1] *Local fibre-dimension bound.* Let $A\to B$ be a finite-type ring map and let the scheme fibre at $\mathfrak q$ have local dimension $n$ at the corresponding point; then there is an open neighbourhood $V$ of $\mathfrak q$ in $\operatorname{Spec}B$ such that every fibre over $V$ has local dimension at most $n$ at the corresponding point ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]], clause 2). This is the affine-local form of openness of the locus where the fibre local dimension is at most $n$ for a morphism locally of finite type.

[F2] *Local dimension convention.* The local dimension $\dim_yY$ is the infimum of the Krull dimensions of open neighbourhoods of $y$, and for a scheme locally of finite type over a field it equals the largest dimension of an irreducible component through $y$ ([[def-relative-dimension-smooth-morphism]]).

[F3] *Fibres of the orbit map.* For a finite-type group scheme acting on a separated finite-type scheme, the fibre of the orbit map over a closed point $y=g_0x$ is the translate $g_0G_x$, and $G_{gx}=gG_xg^{-1}$ ([[lem-action-map-fibres-and-stabilizer-subscheme]], clauses (b) and (c), the target factors swapped to match $\beta(g,x)=(x,gx)$). Read classically, the fibres of $\beta$ over closed points are translates of closed subgroups.

[F4] *Pure dimension of closed subgroups.* A classical closed subgroup $H$ is itself a complex affine algebraic group, so it has pure dimension $\dim H$ ([[lem-complex-algebraic-groups-are-smooth]]). By [F2] its local dimension at every closed point is $\dim H$. Reduction does not change components or dimensions, so the same holds for the underlying stabilizer scheme.

[F5] *Orbit dimension.* For every $x$ in a classical variety with a complex affine algebraic group action, $\dim G=\dim G_x+\dim Gx$ ([[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]], (a)).

## Proof

**Proof technique:** direct.

1.1 The map $\beta:G\times X\to X\times X$, $\beta(g,x)=(x,gx)$, is a morphism of finite-type schemes over $\mathbf C$: its components are the second projection and the action morphism. For a closed point $(g,x)$ of the source, the scheme fibre $\beta^{-1}(x,gx)$ is the translate $gG_x$ of the stabilizer, a closed subgroup translate; this is the supplier statement read with the two target factors in the order used by $\beta$. [F3]

2.1 Fix a closed point $(g,x)$ and let $H=G_x$. By [F4] the reduction of $H$ has pure dimension $\dim H$, so [F2] makes its local dimension at every closed point equal to $\dim H=\dim G_x$. The underlying components and dimensions are unchanged by reduction or translation, so the same holds for $gH$. Hence the local dimension of the fibre of $\beta$ at $(g,x)$ equals $\dim G_x$. [F2, F4, step 1.1]

3.1 Let $n$ be an integer. Apply [F1] affine-locally to $\beta$ at every source point whose fibre has local dimension $d\le n$. Each such point has an open neighbourhood on which the fibre local dimension is at most $d\le n$, so this locus is open in $G\times X$. On complex closed points, step 2.1 identifies the condition with $\dim G_x\le n$. [F1, F2, step 2.1]

4.1 The identity section $s:X\to G\times X$, $x\mapsto(e,x)$, is a morphism; pulling back the open set of step 3.1 along $s$ gives that $\{x\in X:\dim G_x\le n\}$ is open in $X$. Taking the complement at level $n-1$ shows that $\{x\in X:\dim G_x\ge n\}$ is closed, so $x\mapsto\dim G_x$ is upper semicontinuous. [F3, step 3.1]

5.1 By the orbit dimension formula, $\dim Gx=\dim G-\dim G_x$; since a constant minus an upper semicontinuous function is lower semicontinuous, $x\mapsto\dim Gx$ is lower semicontinuous. A closed subgroup of the finite-type complex group $G$ is finite exactly when its dimension is zero, so the locus of points with infinite stabilizer is $\{x:\dim G_x\ge1\}$, closed by step 4.1. If $X$ is nonempty, the set of attained values $\{\dim G_x:x\in X\}$ is a nonempty subset of $\{0,1,\dots,\dim G\}$ and has a minimum $m$; then $\{x:\dim G_x\le m\}$ is nonempty, open by step 4.1, and is exactly the locus of stabilizers of minimal dimension. This proves all assertions. [F5, step 4.1] ∎

## Remarks

- This is Brion's Lemma 1.14 with the general local-fibre-dimension supplier of Stacks Morphisms, Lemma 29.29.4 (tag 02FZ), whose proof reduces to Stacks Algebra, Lemma 10.125.6; neither properness nor projectivity of the orbit map is used. The dimension used is the local dimension of the fibre in the component sense, not the dimension of a possibly nonreduced stabilizer scheme's local ring.
- All Axiom of Choice content is inherited from the published local fibre-dimension bound and from the orbit-dimension lemma.
