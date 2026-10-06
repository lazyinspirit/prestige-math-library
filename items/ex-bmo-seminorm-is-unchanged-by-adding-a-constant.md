---
id: ex-bmo-seminorm-is-unchanged-by-adding-a-constant
kind: example
title: "The BMO seminorm is unchanged by adding a constant"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Definition 3.1 and the sentence 'The BMO norm is the smallest constant M...', printed p. 35"
---

## Example

For $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$ and $c\in\mathbb C$ one has
$(b+c)_Q=b_Q+c$ for every cube $Q$ and hence
$\|b+c\|_{\mathrm{BMO}}=\|b\|_{\mathrm{BMO}}$; so the BMO seminorm descends to
the quotient $\mathrm{BMO}/\mathbb C$ and is a norm there.

## Facts & Assumptions

**Given:** $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$, a constant $c\in\mathbb C$ and a cube $Q$, with the mean, the seminorm and the quotient of [[def-bmo-seminorm-and-quotient-by-constants]].

[L1] The mean is $b_Q=|Q|^{-1}\int_Qb$, the seminorm is $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$, and $\|b\|_{\mathrm{BMO}}=0$ exactly when $b$ is constant almost everywhere ([[def-bmo-seminorm-and-quotient-by-constants]]).

## Verification

**Proof technique:** direct.

1.1 Linearity of the integral over the cube $Q$ gives $(b+c)_Q=|Q|^{-1}\int_Q(b+c)=|Q|^{-1}\int_Qb+|Q|^{-1}\int_Qc=b_Q+c$. [L1, algebra]

2.1 By step 1.1, $|(b+c)-(b+c)_Q|=|b-b_Q|$ pointwise on $Q$, so $|Q|^{-1}\int_Q|(b+c)-(b+c)_Q|=|Q|^{-1}\int_Q|b-b_Q|$ for every cube; taking the supremum over all cubes gives $\|b+c\|_{\mathrm{BMO}}=\|b\|_{\mathrm{BMO}}$, including the value $+\infty$. [step 1.1, L1]

3.1 The identity of step 2.1 shows that the seminorm is constant on each equivalence class modulo constants, so it descends to $\mathrm{BMO}(\mathbb R^n)/\mathbb C$; on classes it is a norm because $\|[b]\|=0$ holds exactly when $b$ is almost everywhere constant by [L1], that is exactly for the zero class. No choice principle is used. [step 2.1, L1] ∎ 