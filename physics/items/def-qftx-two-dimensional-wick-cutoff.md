---
id: def-qftx-two-dimensional-wick-cutoff
kind: definition
title: Mollified massive two-dimensional Gaussian Wick powers
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qft-finite-wick-normal-powers
  - thm-qftx-tempered-massive-gaussian-field
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-finite-wick-normal-powers: mathematical-premise
  thm-qftx-tempered-massive-gaussian-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: Gaussian random variables, measure-dependent Wick powers, and their formal generating function. The continuum covariance and mollifier conventions are stated explicitly here."
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3 opening and §3.1"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF pp. 9–12: the centered massive two-dimensional Euclidean Gaussian field, covariance (−Δ+m²)⁻¹, and Wick ordering of the free field."
---

## Definition

Assume the Axiom of Choice, its countable-family consequence, and $m>0$. Let $\Phi$ be the real centered Gaussian random tempered distribution on $\mathbb R^2$ with covariance $C_m(f,g)=(2\pi)^{-2}\int_{\mathbb R^2}\overline{\widehat f(p)}\widehat g(p)(|p|^2+m^2)^{-1}\,d^2p$ for real Schwartz tests and $\widehat f(p)=\int e^{-ip\cdot x}f(x)\,d^2x$. Write $\mu_C$ for the Gaussian probability measure on the cylinder $\sigma$-algebra of $\mathcal S'_\mathbb R(\mathbb R^2)$ supplied by [[thm-qftx-tempered-massive-gaussian-field]], equivalently the law of $\Phi$; all expectations below are with respect to $\mu_C$. Fix one nonnegative $\rho\in C_c^\infty(\mathbb R^2)$ with $\int\rho(x)\,d^2x=1$, set $\rho_\epsilon(x)=\epsilon^{-2}\rho(x/\epsilon)$ for $\epsilon>0$, and define $\Phi_\epsilon(x)=\Phi(u\mapsto\rho_\epsilon(x-u))$. For each $n\ge0$, define the finite-cutoff Wick polynomial $:\!\Phi_\epsilon(x)^n\!:$ by

$$\exp\!\left(t\Phi_\epsilon(x)-\tfrac12t^2\mathbb E[\Phi_\epsilon(x)^2]\right)=\sum_{n=0}^{\infty}:\!\Phi_\epsilon(x)^n\!:\,\frac{t^n}{n!}$$

as an identity of formal power series. For a bounded measurable $f:\mathbb R^2\to\mathbb C$ that vanishes outside a bounded set, define its cutoff smearing by the samplewise Lebesgue integral $W_{\epsilon,n}(f)=\int f(x):\!\Phi_\epsilon(x)^n\!:\,d^2x$. Every tempered sample gives a smooth $x\mapsto\Phi_\epsilon(x)$, so this integral is finite for each sample; its $L^2(\mu_C)$ limit as $\epsilon\downarrow0$ is a separate theorem, not part of this definition.

## Definition references

[[thm-qftx-tempered-massive-gaussian-field]]

[[def-qft-finite-wick-normal-powers]]
