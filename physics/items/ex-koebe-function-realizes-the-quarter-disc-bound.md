---
id: ex-koebe-function-realizes-the-quarter-disc-bound
kind: example
title: "The Koebe function realizes the quarter-disc bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-koebe-one-quarter-theorem, thm-koebe-growth-theorem]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Example 7.5.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Example

The Koebe function

$$k(z):=\frac{z}{(1-z)^2}$$

maps $\mathbb D$ biholomorphically onto
$\mathbb C\setminus(-\infty,-1/4]$, so the radius $1/4$ in Koebe's theorem is
sharp.

## Facts & Assumptions

**Given:** The function $k(z)=z/(1-z)^2$.

[L1] Every normalized univalent disc map contains $D(0,1/4)$ ([[thm-koebe-one-quarter-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The function $k$ is holomorphic on $\mathbb D$, with $k(0)=0$ and $k'(0)=1$. The value $w=0$ has the unique preimage $z=0$. If $w\ne0$, solving $w=z/(1-z)^2$ gives $$wz^2-(2w+1)z+w=0,$$ so $$z=\frac{2w+1\pm\sqrt{1+4w}}{2w}.$$ For $w\notin(-\infty,-1/4]$, choose the square-root branch that equals $1$ at $w=0$; then the minus sign gives the unique solution with $|z|<1$. Hence $k$ maps $\mathbb D$ bijectively onto $\mathbb C\setminus(-\infty,-1/4]$. [given, cases, algebra]

2.1 The omitted point closest to $0$ is $-1/4$, so no larger disc centered at $0$ can lie in $k(\mathbb D)$. Since [L1] guarantees the quarter disc for every normalized univalent map, the constant $1/4$ is sharp. [L1, step 1.1] ∎
