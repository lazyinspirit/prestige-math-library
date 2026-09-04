---
id: ex-dirichlet-kernel-at-zero-and-away-from-zero
kind: example
title: "The Dirichlet kernel at zero and away from zero"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-dirichlet-and-fejer-kernels, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Example

For each $N\ge1$,

$$D_N(0)=2N+1,$$

while

$$D_N\!\left(\frac{1}{4N+2}\right)=\frac{1}{\sin(\pi/(4N+2))}>0, \qquad D_N\!\left(\frac{3}{4N+2}\right)=-\frac{1}{\sin(3\pi/(4N+2))}<0.$$

So the Dirichlet kernel has a removable peak at $0$ and already changes sign at
two explicit nearby points.

## Facts & Assumptions

**Given:** An integer $N \ge 1$.

[L1] The Dirichlet kernel is $D_N(t)=\sum_{|k|\le N}e_k(t)$ ([[def-dirichlet-and-fejer-kernels]]).

[L2] For $t\notin\mathbb Z$, $$D_N(t)=\frac{\sin((2N+1)\pi t)}{\sin(\pi t)},$$ and $D_N(0)=2N+1$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

## Verification

**Proof technique:** direct.

1.1 At $t=0$, [L1] gives $$D_N(0)=\sum_{|k|\le N} e_k(0)=\sum_{|k|\le N}1=2N+1,$$ which agrees with the removable value recorded in [L2]. [L1, L2, algebra]

2.1 The numbers $(4N+2)^{-1}$ and $3(4N+2)^{-1}$ are not integers, so [L2] applies. Since $(2N+1)\pi/(4N+2)=\pi/2$ and $3(2N+1)\pi/(4N+2)=3\pi/2$, the numerator is respectively $1$ and $-1$. The denominators are positive because their angles lie in $(0,\pi)$. Hence the two displayed signs follow. [L2, algebra] ∎
