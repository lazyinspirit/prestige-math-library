---
id: thm-global-cauchy-integral-formula-homology
kind: theorem
title: "Cauchy's integral formula for a null-homologous cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-dixon-entire-gluing, thm-liouville-bounded-entire-function, def-integration-and-index-of-complex-chain, def-null-homologous-and-homologous-complex-cycles, def-complex-chain-and-cycle, prop-linearity-of-complex-line-integrals, lem-holomorphic-difference-quotient-is-jointly-continuous, def-complex-differentiability-holomorphic-and-entire, def-finite-sum-in-a-commutative-monoid, thm-complex-numbers-form-a-field, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic,
and let $\Gamma$ be a complex chain which is a cycle, with trace in $\Omega$ and
null-homologous in $\Omega$. Then for every
$z\in\Omega\setminus\Gamma^\ast$

$$n(\Gamma,z)\,f(z)=\frac1{2\pi i}\int_\Gamma\frac{f(\zeta)}{\zeta-z}\,d\zeta.$$

No connectedness of $\Omega$ is assumed.

## Facts & Assumptions

**Given:** An open $\Omega$, a holomorphic $f:\Omega\to\mathbb C$, and a cycle $\Gamma$ with $\Gamma^\ast\subseteq\Omega$ which is null-homologous in $\Omega$.

[L1] With $g$ the filled difference quotient of $f$, the function $h$ equal to $(2\pi i)^{-1}\int_\Gamma g(\zeta,z)\,d\zeta$ on $\Omega$ and to $(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ on $\Omega_0=\{z\notin\Gamma^\ast:n(\Gamma,z)=0\}$ is a well-defined entire function; it is bounded, and for every $\varepsilon>0$ there is $R>0$ with $|h(z)|<\varepsilon$ whenever $|z|>R$ ([[lem-dixon-entire-gluing]]).

[L2] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[L3] If $f$ is continuous on the trace of a complex chain, then $\int_\Gamma f\,dz=\sum_{k<r,\,m_k\ne0}m_k\int_{\gamma_k}f\,dz$; and for $z\notin\Gamma^\ast$ one has $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma d\zeta/(\zeta-z)$ ([[def-integration-and-index-of-complex-chain]]). A chain is a finite list of integer-weighted contours with trace the union of the $\gamma_k^\ast$ having $m_k\ne0$ ([[def-complex-chain-and-cycle]]).

[L4] A cycle $\Gamma$ with trace in $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,p)=0$ for every $p\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L5] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]); finite sums in the additive commutative monoid of $\mathbb C$ are additive, and complex-field distributivity permits scaling term by term ([[def-finite-sum-in-a-commutative-monoid]], [[thm-complex-numbers-form-a-field]]).

[L6] The filled difference quotient $g$ of a holomorphic $f$ on $\Omega$ equals $(f(\zeta)-f(z))/(\zeta-z)$ off the diagonal and $f'(z)$ on it ([[lem-holomorphic-difference-quotient-is-jointly-continuous]]).

[L7] A function holomorphic on all of $\mathbb C$ is entire ([[def-complex-differentiability-holomorphic-and-entire]]).

[L8] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the glued function $h$ is entire and bounded, so [L2] makes it a constant $c$. [given, L1, L2, L7]

1.2 By [L1], for every $\varepsilon>0$ there is $R>0$ with $|h(z)|<\varepsilon$ for $|z|>R$; such $z$ exist, so $|c|<\varepsilon$ for every $\varepsilon>0$ and therefore $c=0$. [given, L1]

1.3 Let $z\in\Omega\setminus\Gamma^\ast$. Since $f$ is holomorphic on $\Omega$, [L8] makes it continuous on $\Omega$, hence on the trace of $\Gamma$. Then $\zeta\ne z$ for every $\zeta\in\Gamma^\ast$, so [L6] gives $g(\zeta,z)=(f(\zeta)-f(z))/(\zeta-z)$ on the trace, and [L3] with [L5] splits the defining integral into $h(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}d\zeta-f(z)\,n(\Gamma,z)$. [given, L3, L5, L6, L8]

2.1 Steps 1.1, 1.2 and 1.3 give $0=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}d\zeta-n(\Gamma,z)f(z)$, which is the stated formula; nothing in the argument used connectedness of $\Omega$, and the hypothesis that $\Gamma$ is null-homologous entered only through [L1] and [L4]. [step 1.1, step 1.2, step 1.3, L1, L4] ∎
