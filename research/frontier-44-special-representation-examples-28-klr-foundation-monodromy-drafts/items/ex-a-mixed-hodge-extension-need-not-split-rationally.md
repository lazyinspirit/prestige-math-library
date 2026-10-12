---
id: ex-a-mixed-hodge-extension-need-not-split-rationally
kind: example
title: "A mixed Hodge extension without a rational splitting"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-mixed-hodge-structure]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Example

A mixed Hodge structure can be an extension of two pure structures without splitting over $\mathbb Q$. On $H=\mathbb Qe_0\oplus\mathbb Qe_1$, put $W_{-3}=0$, $W_{-2}=W_{-1}=\mathbb Qe_1$, $W_0=H$, and $F^1=0$, $F^0=\mathbb C(e_0+ie_1)$, $F^{-1}=H_{\mathbb C}$. This gives an exact sequence $0\to\mathbb Q(1)\to H\to\mathbb Q(0)\to0$ which has no rational Hodge splitting.

## Verification

**Given:** The displayed rational basis and filtrations, with mixed Hodge conventions from [[def-rational-mixed-hodge-structure]].

1.1 On $\operatorname{Gr}^W_{-2}$, $F^0=0$ and $F^{-1}$ is the whole space, so its type is $(-1,-1)$. On $\operatorname{Gr}^W_0$, $F^0$ maps onto the whole quotient and $F^1=0$, so its type is $(0,0)$. These are the required opposed filtrations and establish the mixed Hodge axioms and exact sequence. [given, algebra]

2.1 A rational splitting sends the rational generator of $\mathbb Q(0)$ to $e_0+qe_1$ with $q\in\mathbb Q$. Preservation of $F^0$ requires this vector to lie in $\mathbb C(e_0+ie_1)$, which forces $q=i$ by comparing the $e_0$ and $e_1$ coordinates. This is impossible for rational $q$. [step 1.1, algebra] ∎
