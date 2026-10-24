---
id: cor-complex-trigonometric-and-hyperbolic-addition-formulas
kind: corollary
title: "The addition formulas for complex trigonometric and hyperbolic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-trigonometric-and-hyperbolic-functions, thm-complex-exponential-addition-and-real-extension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

For all $z,w\in\mathbb C$,
$$\sin(z+w)=\sin z\cos w+\cos z\sin w,$$
$$\cos(z+w)=\cos z\cos w-\sin z\sin w,$$
$$\sinh(z+w)=\sinh z\cosh w+\cosh z\sinh w,$$
$$\cosh(z+w)=\cosh z\cosh w+\sinh z\sinh w.$$

## Facts & Assumptions

**Given:** Complex numbers $z,w$.

[L1] The four functions are defined by their symmetric and antisymmetric exponential combinations ([[def-complex-trigonometric-and-hyperbolic-functions]]).

[L2] For all complex $u,v$, $\exp(u+v)=\exp u\exp v$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 Substitute $z+w$ into the four formulas in [L1] and factor every exponential using [L2]. [L1, L2]

2.1 Expanding the right-hand sides in the Statement with [L1] gives the same symmetric or antisymmetric combinations, so the four identities follow. [step 1.1, L1, algebra] ∎
