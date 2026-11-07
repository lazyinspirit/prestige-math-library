---
id: thm-faltings-height-comparison-with-modular-height
kind: theorem
title: "Comparison of stable Faltings height and modular height"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-modular-height-of-a-polarized-abelian-variety
  - def-stable-faltings-height-of-an-abelian-variety
  - lem-logarithmic-metric-height-retains-northcott
  - thm-siegel-moduli-coarse-compactification-and-hodge-ampleness
  - thm-stable-faltings-height-independent-of-semistable-extension
  - thm-arithmetic-chow-intersection-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–357; comparison between the moduli height and Faltings height."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC and DC. Fix a number field $K$ and an integer $g\ge1$. There are constants $a>0$ and $C\in\mathbb R$, depending only on $K$, $g$, and the fixed projective model used to define modular height, such that every principally polarized abelian variety $A/K$ of dimension $g$ satisfies
$$h_{\mathrm{mod}}(A)\le a\,h_F(A)+C.$$

## Statement references

[[def-modular-height-of-a-polarized-abelian-variety]]

[[def-stable-faltings-height-of-an-abelian-variety]]

[[lem-logarithmic-metric-height-retains-northcott]]

[[thm-siegel-moduli-coarse-compactification-and-hodge-ampleness]]

[[thm-stable-faltings-height-independent-of-semistable-extension]]

[Faltings 1983, §2, printed pp. 355–357](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter IV, §2](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC and DC; fixed $K,g$, a principally polarized abelian variety $A/K$, its stable Faltings height, and its moduli point.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-modular-height-of-a-polarized-abelian-variety]]: modular height is the projective Weil height of the moduli point under the fixed Satake embedding.

[F2] [[def-stable-faltings-height-of-an-abelian-variety]]: Faltings height is the normalized arithmetic degree of invariant differentials.

[L2] [[thm-arithmetic-chow-intersection-product]]: the arithmetic Chow product is the planned intersection-theoretic supplier, but its current draft explicitly leaves the rational supported product and several compatibility steps unproved.

## Proof status

Faltings's §2 argument compares the metric on the Hodge line over the moduli open with a projective height on the compactification; the resulting boundary logarithmic term is controlled sufficiently to obtain the stated one-sided inequality. The active items do not supply the metric comparison or compactification proof, and [[thm-arithmetic-chow-intersection-product]] remains proof:not-supplied for the needed intersection operations. The statement is retained with its fixed-field and fixed-dimension scope and escalated.

Unresolved proof prerequisite (not an accepted given): The comparison of the Faltings metric with a logarithmic metric near the Satake boundary is the substantive height-comparison input; the needed metric estimates are not supplied locally. Proposed supplier ID: `lem-faltings-hodge-metric-comparison-near-satake-boundary` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
