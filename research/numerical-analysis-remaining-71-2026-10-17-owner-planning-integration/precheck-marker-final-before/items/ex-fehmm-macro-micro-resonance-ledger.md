---
id: ex-fehmm-macro-micro-resonance-ledger
kind: example
title: "FE-HMM energy error ledger with distinct components"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [thm-fehmm-macro-micro-resonance-error-decomposition, lem-fehmm-micro-tensor-approximation-error]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
---
## Example

Suppose a verified FE-HMM ledger has ellipticity bounds $\lambda=1$, $\Lambda=2$, macro best-approximation bound $\eta_H\le1/10$, micro tensor discrepancy bound $\Delta_{\rm micro}\le1/20$, sampling discrepancy bound $\Delta_{\rm res}\le1/20$, and homogenized energy norm $\|\nabla u_0\|_2\le1$. Then the macro theorem certifies
$$\|\nabla(U_H-u_0)\|_2\le\frac49.$$
These are conditional certified inputs for the ledger; the example makes no claim that they arise for every coefficient, scale ratio, or mesh.

## Facts & Assumptions

**Given:** The six rational bounds stated above, with the micro and sampling discrepancies measured against the exact sampled tensor and $A^*$ respectively.

[F1] [[thm-fehmm-macro-micro-resonance-error-decomposition]]: if $\Delta=\Delta_{\rm micro}+\Delta_{\rm res}<\lambda$, then
$$\|\nabla(U_H-u_0)\|_2\le\frac{\lambda+\Lambda}{\lambda-\Delta}\eta_H+\frac{\Delta}{\lambda-\Delta}\|\nabla u_0\|_2.$$

[F2] [[lem-fehmm-micro-tensor-approximation-error]]: the micro discrepancy can be bounded by the squared best periodic P1 gradient approximation error.

## Proof



1.1 Here $\Delta\le1/20+1/20=1/10<1=\lambda$, so the theorem applies. Its two contributions are bounded by $\frac{1+2}{1-1/10}\cdot\frac1{10}=\frac13,\qquad \frac{1/10}{1-1/10}\cdot1=\frac19.$ Their sum is $1/3+1/9=4/9$. The first contribution uses the macro best approximation; the second is the sum of the distinct micro and resonance discrepancy certificates. [F1, algebra]

2.1 The micro part may be justified by an upper bound $\max_K\eta_K^2\le1/20$ from [F2], while the resonance part is separately bounded by $1/20$; if every ratio is integer, the resonance part is exactly zero by the aligned-sampling lemma cited in [F1]. This illustrates the ledger’s distinct inputs without asserting an unconditional rate. [F2, F1, step 1.1, algebra] ∎
