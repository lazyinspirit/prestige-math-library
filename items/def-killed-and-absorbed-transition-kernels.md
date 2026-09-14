---
id: def-killed-and-absorbed-transition-kernels
kind: definition
title: "Killed and absorbed transition kernels"
status: published
origin: pipeline
deps: [def-measure-kernel-and-probability-kernel]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Sections 5.1-5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Markov-chain and hitting-time conventions, printed pp. 268-283"
---

## Definition

Let $K$ be a probability kernel on $(E,\mathcal E)$ and $D\in\mathcal E$.
The **kernel absorbed on $D$** is the kernel candidate on $E$ defined by
$$ K_D^{\mathrm{abs}}(x,A) =1_D(x)1_A(x)+1_{D^c}(x)K(x,A), \qquad A\in\mathcal E. $$ Thus every $x\in D$ has the Dirac transition $\delta_x$, while transitions from $D^c$ are unchanged. For killing, adjoin a point $\Delta\notin E$ and equip $E_\Delta=E\sqcup\{\Delta\}$ with $$ \mathcal E_\Delta =\{A:A\in\mathcal E\}\cup\{A\cup\{\Delta\}:A\in\mathcal E\}. $$ The **kernel killed upon exiting $D$** is $$ K_D^{\mathrm{kill}}(x,B)= \begin{cases} K(x,B\cap D)+K(x,D^c)1_B(\Delta),&x\in D,\\ 1_B(\Delta),&x\in D^c\cup\{\Delta\}, \end{cases} \qquad B\in\mathcal E_\Delta. $$
In particular, a start outside $D$ is killed immediately and the cemetery is
absorbing. If $D=E$, killing never occurs from $E$; if $D=\varnothing$, every
start is sent to $\Delta$. These formulas are choice-free.

