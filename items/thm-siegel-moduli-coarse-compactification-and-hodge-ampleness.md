---
id: thm-siegel-moduli-coarse-compactification-and-hodge-ampleness
kind: theorem
title: "Coarse Siegel moduli and an ample Hodge line on a projective compactification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-polarization-of-an-abelian-variety
  - def-siegel-moduli-variety-of-polarized-abelian-varieties
  - thm-abelian-variety-dual-and-polarization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–357; the moduli and projective-height framework used for bounded-height finiteness."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Fix an integer $g\ge1$. Let $\mathscr A_g$ be the moduli stack of principally polarized abelian schemes of relative dimension $g$ over $\mathbb Q$, with universal abelian scheme $\pi:\mathcal X\to\mathscr A_g$ and identity section $e$. Its **Hodge line** is $\lambda_g=\det(e^*\Omega^1_{\mathcal X/\mathscr A_g})$. The stack has a quasi-projective coarse moduli space $\mathcal A_g$ and a projective Satake compactification $\mathcal A_g^*$. A positive tensor power of $\lambda_g$ descends to the coarse space and extends to an ample line bundle on $\mathcal A_g^*$.

## Statement references

[[def-siegel-moduli-variety-of-polarized-abelian-varieties]]

[Faltings 1983, §2](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §2](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC, an integer $g\ge1$, and the principally polarized abelian-scheme moduli problem.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-siegel-moduli-variety-of-polarized-abelian-varieties]]: the moduli problem assigns to each base scheme the groupoid of principally polarized abelian schemes of relative dimension $g$.

## Proof status

This theorem is retained as an explicit prerequisite. Its proof requires the construction of the coarse moduli space and Satake compactification and the ampleness theorem for the Hodge line. The current local library supplies neither the compactification construction nor the ampleness proof. The inspected height arguments use this moduli-theoretic input but do not prove it; escalate rather than treating the design interface as proof.

Unresolved proof prerequisite (not an accepted given): Representability, projective Satake compactification, and ampleness of a power of the Hodge line are substantive moduli-theoretic inputs; they are not proved by the definition of the moduli problem. Proposed supplier ID: `thm-siegel-coarse-moduli-satake-compactification-and-hodge-ampleness` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
