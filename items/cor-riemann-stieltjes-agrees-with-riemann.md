---
id: cor-riemann-stieltjes-agrees-with-riemann
kind: corollary
title: "The identity integrator recovers the Riemann integral"
status: draft
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
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Definition 6.1"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

For the identity function $\operatorname{id}(x)=x$, a bounded $f:[a,b]\to\mathbb R$ is Riemann–Stieltjes integrable with respect to $\operatorname{id}$ exactly when it is Riemann integrable, and then

$$\int_a^b f\,d\operatorname{id}=\int_a^b f(x)\,dx.$$

The equality also holds for $a=b$ and for reversed endpoints under the oriented conventions.

## Facts & Assumptions

**Given:** A bounded function $f$ on the compact interval with endpoints $a,b$.

[L1] A Stieltjes sum is $\sum_i f(\xi_i)(\alpha(t_{i+1})-\alpha(t_i))$ ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] A Riemann sum is $\sum_i f(\xi_i)(t_{i+1}-t_i)$ ([[def-tagged-partition-and-riemann-sum]]).

[L3] Darboux and tagged-sum Riemann integrability agree ([[thm-darboux-equals-riemann]]).

[L4] Oriented integrals reverse sign when endpoints are interchanged ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 When $a<b$ and $\alpha=\operatorname{id}$, every increment $\alpha(t_{i+1})-\alpha(t_i)$ equals $t_{i+1}-t_i$. Thus [L1] and [L2] are termwise identical for every tagged partition.

2.1 Consequently the two mesh limits exist simultaneously and have the same value; [L3] identifies that tagged limit with the Darboux integral. For $a=b$ both conventions give zero, and [L4] handles $a>b$. [step 1.1, L3, L4] ∎
