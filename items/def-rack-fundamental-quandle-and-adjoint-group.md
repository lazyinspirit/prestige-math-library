---
id: def-rack-fundamental-quandle-and-adjoint-group
kind: definition
title: "Racks, diagram fundamental quandles, and adjoint groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-quandle-and-knot-coloring, def-regular-oriented-link-diagram, def-group-presentation ]
justified_by: [ thm-fundamental-quandle-and-adjoint-group-from-wirtinger ]
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §§5.1–5.2, printed pp. 49–55"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §§2.1 and 2.2, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
    - title: "Sam Nelson, Link invariants from finite racks, §§2.1–2.4, arXiv:0808.0029v3, pp. 2–6"
      url: "https://arxiv.org/pdf/0808.0029"
dependency_level: 1
---

## Definition

A **rack** is a set $R$ with a binary operation $*:R\times R\to R$ such
that for every $y\in R$ the right translation $R_y(x)=x*y$ is a bijection
and $(x*y)*z=(x*z)*(y*z)$ for all $x,y,z\in R$. A **quandle** is a rack
satisfying $x*x=x$ for every $x$. For either structure, write
$x\mathbin{\bar *}y=R_y^{-1}(x)$.

For a regular oriented link diagram $D$, let $A(D)$ be its finite set of
maximal under-arcs. Form the set of finite terms recursively: each symbol
$x_a$ for $a\in A(D)$ is a term, and if $s,t$ are terms then $s*t$ and
$s\mathbin{\bar *}t$ are terms. Let $\sim$ be the intersection of all
equivalence relations on these terms that are compatible with both operations
and contain the quandle identities: idempotency, right invertibility, and
right self-distributivity, together with the crossing relations.
At a crossing with source and target under-arcs $u,v$ and overarc $o$, the
crossing relation is $x_v=x_u*x_o$; reversing source and target gives the
equivalent relation with $\bar *$. The quotient term set $Q(D)$ is the
**diagram quandle**, or the diagram presentation of the **fundamental
quandle**. Its independence of diagram is proved in the Theorem.

For any quandle $Q$, its **adjoint group** $\operatorname{Adj}(Q)$ is the
group presentation with generators $e_q$ for all $q\in Q$ and relators
$e_{q*r}=e_r^{-1}e_qe_r$ for all $q,r\in Q$. A group presentation
$\langle X\mid S\rangle$ means the quotient of the free group on $X$ by the
normal closure of the relator words $S$.

The diagram presentation and the adjoint group are algebraic constructions;
this definition makes no completeness or knot-classification assertion.

## Definition references

[[def-quandle-and-knot-coloring]].

[[def-regular-oriented-link-diagram]].

[[def-group-presentation]].

[[thm-fundamental-quandle-and-adjoint-group-from-wirtinger]].

[Manturov, *Knot Theory*, Chapter 5](https://varf.ru/rudn/manturov/book.pdf).

[Carter, *A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429).

[Nelson, *Link invariants from finite racks*](https://arxiv.org/pdf/0808.0029).
