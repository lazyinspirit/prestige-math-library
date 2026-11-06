---
id: lem-cft-r5-liouville-uppsilon-defining-integral-converges
kind: lemma
title: Absolute convergence of the Liouville Upsilon defining integral
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-r5-liouville-probabilistic-sphere-model
dependency_roles:
  def-cft-r5-liouville-probabilistic-sphere-model: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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
      locator: "Appendix A, equation (A.1), PDF p. 82."
---

## Statement

Let $0<\gamma<2$, $Q=2/\gamma+\gamma/2$, and $z\in\mathbb C$ satisfy $0<\operatorname{Re}z<Q$. Set $a=Q/2-z$. Then

$$J_\gamma(z):=\int_0^\infty\left(a^2e^{-t}-\frac{\sinh^2(at/2)}{\sinh(\gamma t/4)\sinh(t/\gamma)}\right)\frac{dt}{t}$$

converges absolutely. The convergence is uniform as $z$ ranges over any compact subset of the open strip $0<\operatorname{Re}z<Q$.

## Statement references

[[def-cft-r5-liouville-probabilistic-sphere-model]]

## Facts & Assumptions

**Given:** $0<\gamma<2$ and $z$ in the open strip $0<\operatorname{Re}z<Q$.

[F1] [[def-cft-r5-liouville-probabilistic-sphere-model]]: $Q=2/\gamma+\gamma/2$.

[A1] $a=Q/2-z$ and $D_\gamma(t)=\sinh(\gamma t/4)\sinh(t/\gamma)$ for $t>0$.

## Proof

1.1 Fix a compact subset $K$ of the strip. Uniformly for $z\in K$, Taylor expansions at $t=0$ give $D_\gamma(t)=t^2/4+O(t^4)$, $\sinh^2(at/2)=a^2t^2/4+O_K(t^4)$, and $a^2e^{-t}=a^2-a^2t+O_K(t^2)$. Hence $\sinh^2(at/2)/D_\gamma(t)=a^2+O_K(t^2)$ and the integrand of $J_\gamma$ is $-a^2+O_K(t)$; it is bounded uniformly near $0$. [given, F1, A1, algebra]

2.1 From [F1], $\gamma/4+1/\gamma=Q/2$. On $K$, compactness and the strict strip inequalities give $\eta:=\min_{z\in K}(Q/2-|\operatorname{Re}a|)>0$. For $t\ge1$, $D_\gamma(t)\ge c_\gamma e^{Qt/2}$ for a constant $c_\gamma>0$, while $|\sinh(at/2)|^2\le e^{|\operatorname{Re}a|t}$. Thus the second term inside parentheses is bounded by $C_K e^{-\eta t}$; the first is bounded by $C_K e^{-t}$. After division by $t$, these bounds are integrable on $[1,\infty)$ uniformly for $z\in K$. Combining with step 1.1 proves the asserted absolute and locally uniform convergence. [F1, A1, step 1.1, algebra] ∎

## Remarks

At either boundary $\operatorname{Re}z=0$ or $\operatorname{Re}z=Q$, $|\operatorname{Re}a|=Q/2$, the quotient $|\sinh(at/2)|^2/D_\gamma(t)$ tends to $1$, and $a^2e^{-t}$ tends to zero. The integrand is therefore asymptotic in magnitude to $1/t$, so the $dt/t$ tail is not absolutely integrable. The open-strip hypothesis is needed for this integral definition.
