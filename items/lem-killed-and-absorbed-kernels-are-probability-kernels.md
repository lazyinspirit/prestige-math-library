---
id: lem-killed-and-absorbed-kernels-are-probability-kernels
kind: lemma
title: "Killed and absorbed kernels are probability kernels"
status: draft
origin: pipeline
deps: [def-killed-and-absorbed-transition-kernels, def-measure-kernel-and-probability-kernel]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Hitting-time and stopped-chain setting, printed pp. 279-283"
---

## Statement

For every probability kernel $K$ and measurable $D$, the absorbed kernel
$K_D^{\mathrm{abs}}$ and killed kernel $K_D^{\mathrm{kill}}$ of the preceding
definition are probability kernels on $(E,\mathcal E)$ and
$(E_\Delta,\mathcal E_\Delta)$ respectively.

## Facts & Assumptions

**Given:** A probability kernel $K$ and $D\in\mathcal E$.

[F1] The absorbed and killed candidates, including the cemetery sigma-algebra, are the formulas in [[def-killed-and-absorbed-transition-kernels]].

[F2] A probability kernel has probability-measure sections and measurable evaluation functions. ([[def-measure-kernel-and-probability-kernel]])

## Proof

1.1 Fix $x\in E$. If $x\in D$, the absorbed section in [F1] is $\delta_x$; if [F1, F2] $x\in D^c$, it is $K(x,\cdot)$. Hence every section is countably additive, has empty-set mass zero and total mass one. For fixed $A\in\mathcal E$, its evaluation is $$1_D(x)1_A(x)+1_{D^c}(x)K(x,A),$$ a measurable function by [F2]. Thus $K_D^{\mathrm{abs}}$ is a probability kernel. [F1, F2]

1.2 Fix $x\in D$. The killed section is the restriction [F1, F2] $A\mapsto K(x,A\cap D)$ on $E$, plus an atom of mass $K(x,D^c)$ at $\Delta$. It is countably additive and its total mass is $K(x,D)+K(x,D^c)=1$. If $x\in D^c\cup\{\Delta\}$, the section is $\delta_\Delta$. Thus all killed sections are probability measures, including $D=\varnothing$ and $D=E$. [F1, F2]

2.1 Fix $B\in\mathcal E_\Delta$, put $A=B\cap E$, and let [F1, F2, step 1.2] $\varepsilon=1_B(\Delta)$. On $E$ the killed evaluation is $$ 1_D(x)\{K(x,A\cap D)+\varepsilon K(x,D^c)\} +1_{D^c}(x)\varepsilon, $$ which is $\mathcal E$-measurable by [F2]. Its value at the measurable singleton $\{\Delta\}$ is $\varepsilon$, so the full evaluation is $\mathcal E_\Delta$-measurable. Therefore $K_D^{\mathrm{kill}}$ is a probability kernel. The empty and full target sets give respectively zero and one in every case. No choice principle is used. [F1, F2, step 1.2] ∎
