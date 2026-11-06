---
id: lem-cft-r5-liouville-zero-mode-integral
kind: lemma
title: The Liouville constant-mode integral and total-charge bound
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Colin Guillarmou, Antti Kupiainen, Rémi Rhodes, Vincent Vargas, Conformal Bootstrap in Liouville Theory, arXiv:2005.11530v1"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "§1.1, equations (1.3)–(1.10), PDF pp. 4–5."
---

## Statement

Let $\gamma>0$, $\mu>0$, an integer $n\ge0$, and $\alpha_1,\ldots,\alpha_n\in\mathbb R$ (with the empty sum $A=0$ when $n=0$). Let $R>0$. Put $Q=2/\gamma+\gamma/2$, $A=\sum_i\alpha_i$, and $s=(A-2Q)/\gamma$. Then

$$I:=\int_{\mathbb R}\exp\!\left((A-2Q)c-\mu R e^{\gamma c}\right)dc$$

is finite exactly when $A>2Q$; in that case

$$I=\frac{1}{\gamma}(\mu R)^{-s}\Gamma(s),\qquad \Gamma(s):=\int_0^\infty t^{s-1}e^{-t}dt.$$

## Facts & Assumptions

**Given:** $\gamma,\mu,R>0$ and real charges $\alpha_i$; $A$ and $s$ are the displayed sums.

[A1] $Q=2/\gamma+\gamma/2$, so $A-2Q=\gamma s$.

## Proof

1.1 With $t=\mu R e^{\gamma c}$, one has $dc=dt/(\gamma t)$ and $e^{(A-2Q)c}=(t/(\mu R))^s$. Therefore $I=\gamma^{-1}(\mu R)^{-s}\int_0^\infty t^{s-1}e^{-t}dt$ whenever this improper integral converges. [given, A1, algebra]

2.1 The tail at $t=\infty$ is integrable for every real $s$ because exponential decay dominates every power. At $t\downarrow0$, the integrand is comparable to $t^{s-1}$, whose integral is finite exactly for $s>0$; when $s=0$ it has a logarithmically divergent integral, and when $s<0$ it diverges more strongly. Hence $I<\infty$ exactly when $s>0$, equivalent to $A>2Q$ because $\gamma>0$. [given, step 1.1, algebra] ∎
