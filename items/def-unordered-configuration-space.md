---
id: def-unordered-configuration-space
kind: definition
title: "Unordered configuration spaces $C_n(X)$"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-quotient-topology, def-orbit-and-stabilizer, def-finite-cardinality,
       def-injection-surjection-bijection, def-topological-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1 and 1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Fadell-Neuwirth, Configuration Spaces, section II Theorem 1, printed pp. 111-114"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Let $n\in\mathbb N$ and let $X$ be a topological space
([[def-ordered-configuration-space]], [[def-topological-space]]). The label
permutation action

$$S_n\times F_n(X)\longrightarrow F_n(X),\qquad(\sigma,x)\longmapsto\sigma\cdot x,\qquad(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1},$$

is a continuous free left action
([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]). Its set of
orbits $S_n\cdot x=\{\sigma\cdot x:\sigma\in S_n\}$
([[def-orbit-and-stabilizer]]) is the **unordered configuration space** of $n$
points in $X$, written

$$C_n(X):=F_n(X)/S_n=\{S_n\cdot x:x\in F_n(X)\},$$

and it carries the **quotient topology** of the canonical projection

$$p_n:F_n(X)\longrightarrow C_n(X),\qquad p_n(x):=S_n\cdot x,$$

in the sense of [[def-quotient-topology]]: a subset $V\subseteq C_n(X)$ is open
exactly when $p_n^{-1}(V)$ is open in $F_n(X)$. This projection is a quotient
map, hence continuous and surjective, and points of $C_n(X)$ are written
$[x]:=p_n(x)$.

**Basepoint.** For a base configuration $q\in F_n(X)$ in the sense of
[[def-ordered-configuration-space]], the **basepoint** of $C_n(X)$ is the orbit

$$[q]=p_n(q)=S_n\cdot q,$$

and $C_n(X)$ is nonempty exactly when $F_n(X)$ is, in which case a basepoint can
be fixed. The unordered space is based by the orbit of the ordered base
configuration, and this is the basepoint used in every later construction on
this page.

**Elementary cases.** $C_0(X)$ is the quotient of the one-point space $F_0(X)$
by the trivial group $S_0$, hence is a one-point space. Since $S_1$ is trivial,
$p_1:F_1(X)\to C_1(X)$ is a bijective quotient map and hence a
homeomorphism: for every open $U\subseteq F_1(X)$, the equality
$p_1^{-1}(p_1(U))=U$ makes $p_1(U)$ open by the quotient topology.
Thus $C_1(X)$ is canonically homeomorphic to $X$ by $[(x)]\mapsto x$,
using the single-coordinate homeomorphism $F_1(X)\to X$.
These are canonical identifications, not literal equalities of the orbit set
with the original set.

**Elements are $n$-element subsets, as a set.** Because the coordinates of a
configuration are pairwise distinct, two ordered configurations $x,y\in F_n(X)$
lie in the same orbit exactly when their underlying sets of coordinates agree:
if $y=\sigma\cdot x$ then the coordinates of $y$ are those of $x$ in a different
order, and conversely, if $\{x_1,\dots,x_n\}=\{y_1,\dots,y_n\}$, then for every
label $i$ there is exactly one label $\sigma(i)$ with $y_i=x_{\sigma(i)}$, and
$i\mapsto\sigma(i)$ is a bijection of $\{1,\dots,n\}$
([[def-injection-surjection-bijection]]); composing with the identification
$\kappa(i)=i-1$ of labels with $n$, the permutation
$\tau=\kappa\circ\sigma^{-1}\circ\kappa^{-1}\in S_n$ takes $x$ to $y$:
$(\tau\cdot x)_i=x_{\tau^{-1}(i-1)+1}=x_{\sigma(i)}=y_i$. Hence

$$C_n(X)\longrightarrow\{\,S\subseteq X:S \text{ has exactly } n \text{ elements}\,\},\qquad [x]\longmapsto\{x_1,\dots,x_n\},$$

is a bijection of sets, the inverse sending an $n$-element subset $S$ to the
orbit of any enumeration of $S$ ([[def-finite-cardinality]]). This identifies
the *elements* of $C_n(X)$ with $n$-element subsets of $X$; the topology on
$C_n(X)$ is the quotient topology displayed above, and no topology on a set of
subsets is asserted here. In particular the quotient topology is not defined
through any metric or hyperspace structure.
