---
id: def-riemann-map-extremal-family
kind: definition
title: "The extremal family of disc-valued univalent maps fixing a basepoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-univalent-holomorphic-function, def-unit-disc-upper-half-plane-and-blaschke-factor]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Definition

Let $\Omega\subsetneq\mathbb C$ be a homologically simply connected complex
domain and let $z_0\in\Omega$. The **Riemann extremal family** at $z_0$ is

$$\mathcal F(\Omega,z_0):=\{\,f:\Omega\to\mathbb D:f\text{ is holomorphic and univalent},\ f(z_0)=0,\ f'(z_0)>0\,\}.$$

The derivative condition fixes the rotational ambiguity after the basepoint
normalization.
