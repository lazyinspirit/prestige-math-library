---
id: def-siegel-moduli-variety-of-polarized-abelian-varieties
kind: definition
title: "Siegel moduli problem for principally polarized abelian varieties"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-scheme
  - def-axiom-of-choice
  - def-dependent-choice
  - def-polarization-of-an-abelian-variety
  - thm-abelian-variety-dual-and-polarization
justified_by:
  - thm-siegel-moduli-coarse-compactification-and-hodge-ampleness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–357; moduli of principally polarized abelian varieties used in the height-finiteness argument."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Definition

Assume AC and DC. Fix an integer $g\ge1$. The **Siegel moduli problem** of dimension $g$ assigns to a scheme $S$ the groupoid of principally polarized abelian schemes of relative dimension $g$ over $S$, with morphisms the isomorphisms preserving the principal polarization. Its coarse moduli space, when supplied by the representability theorem below, is denoted $\mathcal A_g$; its geometric points classify isomorphism classes of principally polarized abelian varieties of dimension $g$.

## Definition references

[[def-abelian-scheme]]

[[def-polarization-of-an-abelian-variety]]

[[thm-siegel-moduli-coarse-compactification-and-hodge-ampleness]]

[Faltings 1983, §2](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** AC and DC, an integer $g\ge1$ and the groupoid of abelian schemes and principal polarizations over each base scheme.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-abelian-scheme]]: an abelian scheme is a proper smooth group scheme with geometrically connected fibers.

[F2] [[def-polarization-of-an-abelian-variety]]: a principal polarization is a polarization inducing an isomorphism to the dual abelian variety.
