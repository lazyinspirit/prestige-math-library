---
id: ex-square-root-continuation-around-the-origin-changes-sign
kind: example
title: "Continuing a square root once around the origin changes its sign"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-analytic-continuation-along-a-path, thm-slit-plane-root-branch-biholomorphism-to-a-sector, thm-branch-discrepancies-for-logarithm-and-complex-powers]
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
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Let $\gamma(t)=e^{2\pi it}$ for $0 \le t \le 1$, and start with the principal
square-root germ at $1$. After one continuation around $\gamma$, the terminal
germ at $1$ is the negative of the initial one.

## Facts & Assumptions

**Given:** The loop $\gamma(t)=e^{2\pi it}$ and the principal square-root germ at $1$.

[L1] On the slit plane, the principal square-root branch is $R(z)=\exp(\operatorname{Log}z/2)$ ([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]]).

[L2] Different logarithm branches differ by integer multiples of $2\pi i$, so their square-root branches can differ by sign ([[thm-branch-discrepancies-for-logarithm-and-complex-powers]]).

## Verification

**Proof technique:** direct.

1.1 For $t \in [0,1]$, let $V_t:=e^{2\pi it}B(1,1/2)$ and define $L_t(u):=2\pi it+\operatorname{Log}(e^{-2\pi it}u)$ and $R_t(u):=\exp(L_t(u)/2)$. Because $e^{-2\pi it}V_t=B(1,1/2)$ lies in the slit plane, [L1] makes each $R_t$ a holomorphic square-root branch on $V_t$, and $R_t(\gamma(t))=e^{\pi it}$. [L1, algebra]

2.1 Use the subdivision $t_k:=k/16$ for $0\le k\le16$. For $t\in[t_k,t_{k+1}]$, $$|\gamma(t)-\gamma(t_k)|\le2\sin(\pi/16)<\frac12,$$ so the whole subpath lies in $V_{t_k}$. At the joining point, the argument increment is $\pi/8$, so the logarithm branches $L_{t_k}$ and $L_{t_{k+1}}$ agree there and hence define the same germ; therefore their square-root branches do as well. Thus the $R_{t_k}$ form an admissible continuation chain along $\gamma$. At $t=0$ the value at $1$ is $1$, while the terminal value is $e^{\pi i}=-1$. So the terminal germ is the negative of the initial square-root germ. [step 1.1, L2, algebra] ∎
