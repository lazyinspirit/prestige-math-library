---
id: def-halpern-lauchli-finitistic-trees-density-and-matrices
kind: definition
title: "Finitistic trees, level products, density, and matrices"
status: published
origin: pipeline
deps: [def-natural-numbers, def-product-of-an-indexed-family]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), §1 and Theorem 1, pp. 360–361"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
    - title: "Monk, Set theory following Jech (2024), definitions preceding Theorem 29.28, p. 661"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

A **finitistic tree** is a partially ordered set $(T,\le_T)$ with a root
$r_T$ such that, for every $t\in T$, the strict predecessor set
$\{s:s<_Tt\}$ is finite and linearly ordered by $\le_T$.  Its cardinality is
the **height** $\operatorname{ht}_T(t)$ of $t$, and

$$T(n)=\{t\in T:\operatorname{ht}_T(t)=n\}$$

is its $n$th level.  We require every level to be finite and every node to have
a strict extension.  Thus every node extends to every greater finite height:
given $t$ and $m<\omega$, finite recursion chooses one successor at a time to
obtain an extension on level $\operatorname{ht}(t)+m$.  This is only a finite
sequence of existential instantiations, not a choice function on an infinite
family.

For $A\subseteq T$, say that $A$ **dominates** $t$ if $t\le_Ta$ for some
$a\in A$.  Given $h,k<\omega$, $A$ is **$(h,k)$-dense** if there is an
$x\in T(h)$ such that $A$ dominates every $t\in T(h+k)$ above $x$.  It is
**$k$-dense** when it is $(0,k)$-dense.  At $k=0$, $(h,0)$-density says exactly
that $A$ dominates some node of $T(h)$; at $h=k=0$, this is equivalent to
$A\ne\varnothing$.  The empty set is never $(h,k)$-dense.

Fix a positive integer $d$ and finitistic trees $T_1,\ldots,T_d$.  Their
**full product** is

$$\prod_{i=1}^dT_i,$$

whose coordinates may have different heights.  Their **level product** is

$$\bigcup_{n<\omega}\prod_{i=1}^dT_i(n),$$

whose coordinates have one common height.  If each $A_i\subseteq T_i$ is
$(h,k)$-dense, then $\prod_{i=1}^dA_i$ is an **$(h,k)$-matrix**.  A
**$k$-matrix** is a $(0,k)$-matrix.  A matrix is a subset of the full product;
it need not lie in the level product.  The convention excludes $d=0$; for
$d=1$ a matrix is simply a dense coordinate set.

Two elementary consequences will be used below.  First, if $A$ is
$(h,p-h)$-dense above $x\in T(h)$ and $h\le h'\le p$, then any extension
$x'\in T(h')$ of $x$ witnesses that

$$A\cap\{a:x'\le_Ta\}$$

is $(h',p-h')$-dense.  Indeed, every height-$p$ extension of $x'$ is already a
height-$p$ extension of $x$.  Second, for finitely many roots $x_i$ of possibly
different heights $n_i$, putting $h=\max_i n_i$ and extending each $x_i$ to
some $x_i'\in T_i(h)$ makes the preceding restriction available with one
common height.  Only finitely many extensions are selected.

