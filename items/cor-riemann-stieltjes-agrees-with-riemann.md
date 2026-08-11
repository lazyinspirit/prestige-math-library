---
id: cor-riemann-stieltjes-agrees-with-riemann
kind: corollary
title: "The identity integrator recovers the Riemann integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann,
       def-darboux-integral, def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Definition 6.1"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $a\le b$. For the identity function $\operatorname{id}(x)=x$, a bounded $f:[a,b]\to\mathbb R$ is Riemann–Stieltjes integrable with respect to $\operatorname{id}$ exactly when it is Riemann integrable, and then

$$\int_a^b f\,d\operatorname{id}=\int_a^b f(x)\,dx.$$

For $a=b$ both sides are $0$ by the singleton conventions. For reversed endpoints the statement is about a function defined on the sorted interval: if $a>b$ and $f$ is bounded on $[b,a]$, then both oriented conventions negate the corresponding sorted integral, so the equality is inherited from the case just proved. The hypothesis $a\le b$ is needed for the displayed clause itself, because $[a,b]$ is empty when $a>b$ and a function typed on it supplies no values to integrate.

## Facts & Assumptions

**Given:** A bounded function $f$ on the compact interval with endpoints $a,b$.

[L1] A Stieltjes sum is $\sum_i f(\xi_i)(\alpha(t_{i+1})-\alpha(t_i))$ ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] A Riemann sum is $\sum_i f(\xi_i)(t_{i+1}-t_i)$ ([[def-tagged-partition-and-riemann-sum]]).

[L3] Darboux and tagged-sum Riemann integrability agree ([[thm-darboux-equals-riemann]]).

[L4] Oriented integrals reverse sign when endpoints are interchanged ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 When $a<b$ and $\alpha=\operatorname{id}$, every increment $\alpha(t_{i+1})-\alpha(t_i)$ equals $t_{i+1}-t_i$. Thus [L1] and [L2] are termwise identical for every tagged partition. [L1, L2]

2.1 Consequently the two mesh limits exist simultaneously and have the same value; [L3] identifies that tagged limit with the Darboux integral. For $a=b$ both conventions give zero, and [L4] handles $a>b$. [step 1.1, L3, L4] ∎
