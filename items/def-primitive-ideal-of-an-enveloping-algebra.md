---
id: def-primitive-ideal-of-an-enveloping-algebra
kind: definition
title: "Primitive ideals of an enveloping algebra"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-annihilator-ideal-of-a-lie-algebra-module, def-simple-module, def-left-right-and-two-sided-ideal]
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, Definition 25.2, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
    - title: "A. Fadeev, Classification of primitive ideals of U(o(infinity)) and U(sp(infinity)), PhD thesis (Jacobs University)"
      url: "https://math.constructor.university/penkov/papers/PhD_Fadeev.pdf"
      locator: "Section 2.6, Definition 2.15, printed p.23"
---

## Definition

Let $\mathfrak g$ be a complex Lie algebra. A two-sided ideal
$I\mathrel{\trianglelefteq}U(\mathfrak g)$ ([[def-left-right-and-two-sided-ideal]])
is **primitive** if there exists a simple left $U(\mathfrak g)$-module $M$
([[def-simple-module]]) with

$$I=\operatorname{Ann}_{U(\mathfrak g)}(M)=\{u\in U(\mathfrak g):um=0\text{ for every }m\in M\}$$

([[def-annihilator-ideal-of-a-lie-algebra-module]]). Equivalently: a two-sided
ideal is primitive if it is the kernel of the action of $U(\mathfrak g)$ on some
simple module. Every primitive ideal is proper, and $U(\mathfrak g)/I$ admits the faithful
simple module $M$; no highest-weight hypothesis is imposed on $M$.

## Remarks

- **Properness.** The module $M$ is nonzero, and $1\in U(\mathfrak g)$ acts as
  the identity, so $1\notin\operatorname{Ann}_{U(\mathfrak g)}(M)$; a
  two-sided ideal containing $1$ is all of $U(\mathfrak g)$, so a primitive
  ideal is a proper ideal. This is the only place nonzero-ness of $M$ is used
  in the definitional consequences.
- **Faithfulness after quotienting.** By
  [[def-annihilator-ideal-of-a-lie-algebra-module]] the action of
  $U(\mathfrak g)/I$ on $M$ is faithful, so the equivalent kernel formulation
  and the quotient statement describe the same situation.
- **No highest-weight hypothesis.** The simple module $M$ in the definition is
  arbitrary; in particular a primitive ideal need not be realised by a highest
  weight module in the definition itself. For finite-dimensional complex semisimple $\mathfrak g$, realization by a
  simple highest-weight module is Duflo's theorem, not part of this definition.
