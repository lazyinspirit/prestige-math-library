---
id: def-interior-sphere-condition-and-sphere-normal
kind: definition
title: "Interior sphere condition and sphere normal"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Definition 2.19 and Lemma 2.21, p.29"
---

## Definition

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $p\in\partial\Omega$. An **interior tangent ball at $p$** is a ball $B_R(a)\subset\Omega$ with $R>0$ and $|p-a|=R$. Existence of such a ball is the **interior sphere condition**. Its supplied outward sphere direction is $\nu=(p-a)/R$.

For a real function defined on $B_R(a)\cup\{p\}$, the outward directional derivative, when the following finite limit exists, is
$$\partial_\nu u(p)=\lim_{t\downarrow0}\frac{u(p)-u(p-t\nu)}t.$$
The points $p-t\nu$ are in the ball for $0<t<2R$. This definition uses a specified sphere, without assuming a differentiable boundary or a normal field on all of $\partial\Omega$.
