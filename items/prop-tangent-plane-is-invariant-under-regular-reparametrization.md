---
id: prop-tangent-plane-is-invariant-under-regular-reparametrization
kind: proposition
title: 'The tangent plane is invariant under regular reparametrization'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tangent-plane-of-a-regular-surface-patch, def-surface-reparametrization-and-orientation, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Statement

Regular reparametrizations preserve the tangent plane at corresponding interior parameter points.

Precisely, if $\psi=\varphi\circ h$ and $(s,t)$ is interior, then
$$\operatorname{span}\{\psi_s,\psi_t\}=\operatorname{span}\{\varphi_u,\varphi_v\}\big|_{h(s,t)}.$$

## Facts & Assumptions

**Given:** A regular reparametrization $\psi=\varphi\circ h$ and an interior parameter point $(s,t)$.

[L1] The tangent plane is the span of the two parameter derivatives ([[def-tangent-plane-of-a-regular-surface-patch]]), and a regular reparametrization is induced by a parameter diffeomorphism ([[def-surface-reparametrization-and-orientation]]).

[L2] The chain rule gives $D\psi=D\varphi\circ Dh$, and total derivatives applied to standard basis vectors are the parameter partial derivatives ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], each of $\psi_s$ and $\psi_t$ is a linear combination of $\varphi_u$ and $\varphi_v$ at $h(s,t)$, so the new tangent span is contained in the old one. [given, L1, L2]

2.1 Apply the same argument to the inverse parameter diffeomorphism $h^{-1}$; it expresses $\varphi_u$ and $\varphi_v$ as linear combinations of $\psi_s$ and $\psi_t$, giving the reverse containment. [step 1.1, L1, L2]

3.1 The two spans are equal. Invertibility of $Dh$ ensures neither independent tangent pair loses rank. [step 1.1, step 2.1] ∎
