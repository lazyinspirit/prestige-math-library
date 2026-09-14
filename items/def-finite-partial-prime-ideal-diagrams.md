---
id: def-finite-partial-prime-ideal-diagrams
kind: definition
title: "Finite partial prime-ideal diagrams"
status: draft
origin: pipeline
deps: [def-boolean-ideals-filters-and-primality]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, §2.2, pp. 4–8; finite specialization"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $B$ be a Boolean algebra and let $A\subseteq B$ be a finite
Boolean subalgebra.  A **finite partial prime-ideal diagram on $A$** is a Boolean
homomorphism

$$e:A\longrightarrow\mathbf2=\{0,1\}.$$

Thus $e(0)=0$, $e(1)=1$, and $e$ preserves complements, binary meets, and
binary joins.  Its **partial ideal side** is $e^{-1}(0)$.  It is a proper prime
ideal of $A$: preservation gives ideal closure, while
$e(a\wedge b)=0$ in $\mathbf2$ implies $e(a)=0$ or $e(b)=0$.

For a finite list $F=(b_0,\ldots,b_{m-1})$ from $B$, write
$b_j^1=b_j$ and $b_j^0=\neg b_j$.  The nonzero **cells**

$$c_\varepsilon=\bigwedge_{j<m}b_j^{\varepsilon(j)} \qquad(\varepsilon\in\mathbf2^m)$$

are precisely the atoms of the finite subalgebra $\langle F\rangle$ generated
by $F$; every member of $\langle F\rangle$ is a join of some of these finitely
many cells.  Repetitions in $F$, zero cells, and the empty list cause no
ambiguity: zero cells are discarded, and $\langle\varnothing\rangle=\{0,1\}$.

A diagram **decides** a finite subset $F\subseteq B$ when its domain is the
whole finite subalgebra $\langle F\rangle$.  Requiring a homomorphism on that
whole domain records every Boolean consequence among the elements of $F$; an
arbitrary truth assignment merely consistent with some displayed equations is
not a partial prime-ideal diagram in this sense.
