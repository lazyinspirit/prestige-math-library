---
id: ex-constant-vector-fields-and-translation-flows
kind: example
title: "Constant vector fields have translation flows"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-fundamental-theorem-on-flows, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Example

Let $v\in\mathbb R^n$ and consider the constant vector field $X(x)=v$. Its
integral curves are

$$ \gamma_{x_0}(t)=x_0+tv, $$

so the flow is the translation family $\Phi_t(x)=x+tv$.

## Facts & Assumptions

**Given:** A fixed vector $v\in\mathbb R^n$ and the vector field $X(x)=v$.

[L1] The flow of a vector field is global exactly when the field is complete ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma_{x_0}(t)=x_0+tv$ satisfies $\gamma_{x_0}(0)=x_0$ and $\gamma_{x_0}'(t)=v=X(\gamma_{x_0}(t))$, so it is an integral curve of $X$ through $x_0$. [given]

2.1 The formula is defined for every $t\in\mathbb R$, so the flow exists globally and [L1] shows that $X$ is complete. The time-$t$ map is the translation $\Phi_t(x)=x+tv$. [L1, step 1.1] ∎
