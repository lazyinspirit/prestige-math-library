---
id: def-properly-discontinuous-group-action
kind: definition
title: "Free and properly discontinuous group actions"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-group-action
  - def-free-group-action
  - def-compact-space
  - def-homeomorphism-and-open-maps
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 16 printed pp. 146-147 for hyperbolic geometry; Ch. 17 printed p. 157 for uniformization statement only"
---

## Definition

Let $G$ be a group acting on a topological space $X$ by homeomorphisms, so
that for each $g\in G$ the map $x\mapsto g\cdot x$ is a homeomorphism of $X$
([[def-group-action]], [[def-homeomorphism-and-open-maps]]). The action is
**free** when
$$g\cdot x=x\quad\text{for some }x\in X\qquad\Longrightarrow\qquad g=e,$$
that is, when no nonidentity element of $G$ fixes a point ([[def-free-group-action]]).
The action is **properly discontinuous** when for every compact subset
$K\subseteq X$ ([[def-compact-space]]) the set of group elements that move $K$
to meet itself,
$$\{\,g\in G:g\cdot K\cap K\neq\varnothing\,\},$$
is finite. A group $G$ acting freely and properly discontinuously means that
both conditions hold; the two are independent in general. The same names are
used when $G$ is given as a subgroup of the homeomorphism group of $X$ acting
by evaluation.

For the plane, a subgroup $\Lambda\le(\mathbb C,+)$ acts on $\mathbb C$ by
the translations $z\mapsto z+\lambda$, which are biholomorphisms. Such a
$\Lambda$ is a **plane lattice of rank two**, or a rank-two lattice, when
$$\Lambda=\mathbb Z v+\mathbb Z w=\{mv+nw:m,n\in\mathbb Z\}$$
for some $v,w\in\mathbb C$ that are linearly independent over $\mathbb R$;
the pair $v,w$ is then a **basis** of the lattice. A subgroup
$\Lambda\le(\mathbb C,+)$ is **discrete** when every point of $\mathbb C$ has
a neighbourhood meeting $\Lambda$ in at most one point. Whether a given
translation group is discrete, free or properly discontinuous is a property
of the group, not part of this terminology, and is verified in the results
that use it.

## Remarks

**Finitely many translates meet a set contained in a compact set.** Let the
action of $G$ on $X$ be properly discontinuous, let $K\subseteq X$ be compact
and let $V\subseteq K$. If $g\cdot V\cap V\neq\varnothing$ for some $g\in G$,
then $g\cdot K\cap K\supseteq g\cdot V\cap V\neq\varnothing$, so $g$ lies in
the finite set $\{g\in G:g\cdot K\cap K\neq\varnothing\}$ of the definition.
Hence $g\cdot V\cap V=\varnothing$ for every $g$ outside that finite set. In
particular, on a locally compact space every point has a compact
neighbourhood $K$ with interior $V$, and only finitely many group elements map
$V$ to meet $V$. As a second special case, if $G$ is finite then the action is
automatically properly discontinuous, the displayed set being contained in
the finite group.
