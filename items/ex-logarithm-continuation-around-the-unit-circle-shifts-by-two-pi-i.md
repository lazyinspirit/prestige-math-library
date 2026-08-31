---
id: ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i
kind: example
title: "Continuing the logarithm once around the unit circle adds 2 pi i"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-analytic-continuation-along-a-path, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 8 §1.4"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Let $\gamma(t)=e^{2\pi i t}$ for $0 \le t \le 1$, and start with the principal
logarithm germ at $1$. Continuation of that germ once around $\gamma$ ends at
the germ of $\operatorname{Log}+2\pi i$ at $1$. In particular one full turn
adds $2\pi i$.

## Facts & Assumptions

**Given:** The loop $\gamma(t)=e^{2\pi i t}$ and the principal logarithm germ at $1$.

[L1] The principal logarithm is holomorphic on the slit plane and satisfies $\exp(\operatorname{Log}z)=z$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[L2] Two exponential values are equal exactly when they differ by an element of $2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Verification

**Proof technique:** direct.

1.1 For $t \in [0,1]$, let $V_t:=e^{2\pi it}B(1,1/2)$ and define $L_t(u):=2\pi i t+\operatorname{Log}(e^{-2\pi it}u)$ for $u\in V_t$. By [L1], each $L_t$ is holomorphic on $V_t$ and satisfies $\exp(L_t(u))=u$ and $L_t(\gamma(t))=2\pi it$. [L1, algebra]

2.1 Use the subdivision $t_k:=k/16$ for $0\le k\le16$. For $t\in[t_k,t_{k+1}]$, $$|\gamma(t)-\gamma(t_k)|\le2\sin(\pi/16)<\frac12,$$ so the whole subpath lies in $V_{t_k}$. At the joining point one has $$L_{t_k}(\gamma(t_{k+1}))=2\pi i t_k+\operatorname{Log}(e^{2\pi i/16})=2\pi i t_{k+1}=L_{t_{k+1}}(\gamma(t_{k+1})),$$ because the argument increment is $\pi/8$. Thus the branches form an admissible continuation chain along $\gamma$. At $t=0$ this is the principal logarithm germ, while the terminal germ at $1$ has value $2\pi i$. By [L2], it is the germ of $\operatorname{Log}+2\pi i$ at $1$. [step 1.1, L2, algebra] ∎
