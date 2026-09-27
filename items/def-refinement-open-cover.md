---
id: "def-refinement-open-cover"
kind: "definition"
title: "Refinement map of ordered open covers"
status: draft
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, lem-increasing-cech-complex-extends-to-alternating-tuples, def-section-restriction-and-global-section, def-sheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Definition

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian groups
on $X$ ([[def-sheaf-on-topological-space]]), and let $\mathcal U=(U_i)_{i\in I}$
and $\mathcal V=(V_j)_{j\in J}$ be open covers of $X$ indexed by linearly ordered
sets, with ordered Čech cochains $C^\bullet(\mathcal U,\mathcal F)$ and
$C^\bullet(\mathcal V,\mathcal F)$ ([[def-cech-cochain-complex-open-cover]]) and
with the alternating models $\widetilde C^\bullet$ of both complexes
([[lem-increasing-cech-complex-extends-to-alternating-tuples]]).

A **refinement function from $\mathcal V$ to $\mathcal U$** is a map $c:J\to I$
of the index sets such that
$$V_j\subseteq U_{c(j)}\qquad\text{for every }j\in J.$$
When such a map exists one says that $\mathcal V$ **refines** $\mathcal U$ via
$c$, or that $\mathcal V$ is a **refinement** of $\mathcal U$. A refinement
function need not be injective, surjective or order preserving; only the
containments $V_j\subseteq U_{c(j)}$ are required, so the members of
$\mathcal V$ may be assigned to members of $\mathcal U$ in any order. A refinement
function with $\mathcal V=\mathcal U$ and $c=\operatorname{id}_I$ always exists,
so every cover refines itself.

Given a refinement function $c$, its **Čech cochain map** is the cochain map
$$c^\sharp:C^\bullet(\mathcal U,\mathcal F)\longrightarrow C^\bullet(\mathcal V,\mathcal F)$$
defined in the alternating model: for $s\in C^p(\mathcal U,\mathcal F)$ and a
tuple $(j_0,\dots,j_p)$ of indices in $J$ one puts
$$(c^\sharp s)_{j_0\cdots j_p}:=s_{c(j_0)\cdots c(j_p)}\big|_{V_{j_0}\cap\cdots\cap V_{j_p}},$$
that is, one evaluates the alternating family of $s$ at the tuple of $U$-indices
$c(j_0),\dots,c(j_p)$ and restricts along
$$V_{j_0}\cap\cdots\cap V_{j_p}\subseteq U_{c(j_0)}\cap\cdots\cap U_{c(j_p)},$$
an inclusion holding because $V_j\subseteq U_{c(j)}$ for every $j$
([[def-section-restriction-and-global-section]]).

The displayed families are again alternating cochains, now over $\mathcal V$:
deleting or permuting entries of $(j_0,\dots,j_p)$ deletes or permutes the entries
of $(c(j_0),\dots,c(j_p))$, so a repeated index makes the value $0$ by the first
alternating condition, while a permutation $\sigma$ of the positions multiplies
the value by $\operatorname{sgn}(\sigma)$ by the second condition
([[lem-increasing-cech-complex-extends-to-alternating-tuples]]). Hence $c^\sharp$
is a well-defined homomorphism of abelian groups
$C^p(\mathcal U,\mathcal F)\to C^p(\mathcal V,\mathcal F)$ for every $p$, and it
commutes with the Čech differentials,
$$c^\sharp\circ\delta^{\mathcal U}=\delta^{\mathcal V}\circ c^\sharp,$$
so that $c^\sharp$ is a map of cochain complexes. Indeed, deleting the $b$-th
entry from the tuple $c(j_0),\dots,c(j_p)$ gives the tuple
$c(j_0),\dots,\widehat{c(j_b)},\dots,c(j_p)$ obtained by applying $c$ to the
tuple with the $b$-th entry deleted, and the two sides of the identity are the
corresponding alternating sums of the sections
$s_{c(j_0)\cdots\widehat{c(j_b)}\cdots c(j_p)}$ restricted to
$V_{j_0}\cap\cdots\cap V_{j_p}$, which agree by the compatibility of
restrictions ([[def-section-restriction-and-global-section]]).
