---
id: ex-du-residual-skip-at-every-layer
kind: example
title: "The analyzed residual network skips at every layer"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-du-overparameterized-network-architectures-and-gram-kernels]
justified_by: []
proof_strategy: direct
axiom_use: "The finite recurrence check is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Du et al., residual architecture, equation (3)"
      url: "https://proceedings.mlr.press/v97/du19c.html"
---

## Example

For depth $H=3$, the analyzed residual recurrence is $x^{(1)}=\sqrt{c_\sigma/m}\,\sigma(W^{(1)}x)$, $x^{(2)}=x^{(1)}+\frac{c_{\rm res}}{3\sqrt m}\sigma(W^{(2)}x^{(1)})$, and $x^{(3)}=x^{(2)}+\frac{c_{\rm res}}{3\sqrt m}\sigma(W^{(3)}x^{(2)})$. Each layer after the first adds its nonlinear branch to the immediately preceding representation.

## Example references

[Du et al., residual architecture, equation (3)](https://proceedings.mlr.press/v97/du19c.html)

[[def-du-overparameterized-network-architectures-and-gram-kernels|Residual recurrence convention]]

## Facts & Assumptions

**Given:** The residual recurrence, depth $H=3$, and $0<c_{\rm res}<1$.

[F1] At every residual layer $h\ge2$, the new representation is the sum of the previous representation and a scaled activation branch. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

## Verification

**Given:** $H=3$ in the stated recurrence.

1.1 Substituting $h=2$ gives an identity contribution $x^{(1)}$ and nonlinear contribution $\frac{c_{\rm res}}{3\sqrt m}\sigma(W^{(2)}x^{(1)})$ in $x^{(2)}$. [F1, given, algebra]

2.1 Substituting $h=3$ gives an identity contribution $x^{(2)}$ and nonlinear contribution $\frac{c_{\rm res}}{3\sqrt m}\sigma(W^{(3)}x^{(2)})$ in $x^{(3)}$. Thus the recurrence contains the skip at both post-initial layers. [F1, given, algebra] ∎
