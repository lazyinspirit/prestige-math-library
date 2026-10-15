---
id: post-rpm-h-free-test-particle-action
kind: postulate
title: "Free massive test-particle action"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-cotangent-phase-space, post-sr-ideal-clocks-and-light]
dependency_roles:
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  def-rpm-h-cotangent-phase-space: formulation-prerequisite
physical_scope: "Classical spinless structureless point test body with fixed primitive mass m>0 on a prescribed background; excludes self-field, radiation reaction, finite size, spin and quantum effects."
sources:
  references:
    - title: "Andrew Hanson, Tullio Regge and Claudio Teitelboim, Constrained Hamiltonian Systems, 35-page repository PDF excerpt"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Repository PDF excerpt (35 pages); Chapter 2, printed pp. 27–30, relativistic spinless point-particle action. The linked file is an excerpt, not the complete monograph."
    - title: "W. F. Chagas-Filho, Free massless particles and extended space-time algebra, comparison for the distinct massive square-root action"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§1, pp. 1–2."
---

## Postulate

Let $I\subset\mathbb R$ be an open interval, and let $x:I\to M$ be a $C^2$ future-directed timelike worldline on a prescribed smooth, time-oriented Lorentzian background $(M,g,T)$ of signature $(-+++)$, with $m>0$ a fixed primitive mass in kg and $c>0$ in m/s. For any compact segment $[a,b]\subset I$ with $a<b$, adopt the stationary-action model on that segment

$$S_{m,[a,b]}[x]=-mc\int_a^b\sqrt{-g(x',x') }\,d\lambda.$$

Here $I\subset\mathbb R$ is an open interval, $\lambda$ is its real coordinate, and $x'$ denotes $dx/d\lambda$. The future-timelike condition makes $x'$ nowhere zero. On a neighborhood of $[a,b]$, $x$ is $C^2$ (so its tangent is $C^1$). If $\widetilde\lambda=f(\lambda)$ is an increasing $C^1$ reparametrization with $f'>0$, then $\sqrt{-g(dx/d\widetilde\lambda,dx/d\widetilde\lambda)}\,d\widetilde\lambda=\sqrt{-g(x',x')}\,d\lambda$ by the chain rule. An admissible variation is a family $x_\epsilon(\lambda)$ defined for $\epsilon\in(-\delta,\delta)$, $\delta>0$, and $\lambda$ in a common neighborhood of $[a,b]$, with $x_0=x$, that is $C^2$ jointly in $(\epsilon,\lambda)$, has fixed endpoint events $x_\epsilon(a)=x(a)$ and $x_\epsilon(b)=x(b)$, and remains future timelike for sufficiently small $|\epsilon|$. The adopted motion principle is that on every such segment $[a,b]$, the physical worldline $x$ satisfies $\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}S_{m,[a,b]}[x_\epsilon]=0$ for every admissible variation through $x$. The integrand is the proper-time length density, so $S_{m,[a,b]}=-mc^2\int_a^b d\tau$; its dimension is action (J s). The adopted premise concerns this ideal free test body only. It is neither a theorem about all matter nor an empirical report, and supplies no backreaction or completeness claim. The flat ideal-clock specialization agrees with [[post-sr-ideal-clocks-and-light]]; adopting this action on a curved background remains a separate premise.

The cotangent phase-space carrier convention assumes countable choice ACω only; full choice is not assumed.
