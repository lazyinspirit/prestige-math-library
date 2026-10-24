---
id: def-noncharacteristic-first-order-cauchy-surface
kind: definition
title: "Noncharacteristic Cauchy surfaces for first-order transport"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-transport-equation-and-its-characteristic-flow]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John Andersson, First Order PDE: The Method of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Definition

Let $\Omega\subseteq\mathbb R^n\times\mathbb R$ be the domain of the transport
equation, and let $\sigma:U\subseteq\mathbb R^n\to\Omega$ be a $C^1$
parametrized hypersurface, written

$$\sigma(\eta)=(\gamma(\eta),\tau(\eta)).$$

For the transport equation $u_t+a(x,t)\cdot\nabla_xu+c(x,t)u=f(x,t)$, let the
space-time transport vector be

$$B(x,t):=(a(x,t),1)\in\mathbb R^{n+1}.$$

The surface $\sigma$ is **noncharacteristic at $\eta_0$** when the
$(n+1)\times(n+1)$ matrix whose columns are the $n$ tangent vectors
$\partial_{\eta_1}\sigma(\eta_0),\ldots,\partial_{\eta_n}\sigma(\eta_0)$ and
the vector $B(\sigma(\eta_0))$ has nonzero determinant. Equivalently,
$B(\sigma(\eta_0))$ is not tangent to the data surface.

A prescribed datum for the transport equation is a function
$g:U\to\mathbb R$, interpreted as the Cauchy condition
$u(\gamma(\eta),\tau(\eta))=g(\eta)$.
