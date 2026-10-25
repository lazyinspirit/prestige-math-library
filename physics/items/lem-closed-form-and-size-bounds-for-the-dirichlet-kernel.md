---
id: lem-closed-form-and-size-bounds-for-the-dirichlet-kernel
kind: lemma
title: "Closed form and size bounds for the Dirichlet kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dirichlet-and-fejer-kernels]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

For every integer $N \ge 0$,

$$D_N(t) = 1 + 2\sum_{k=1}^N \cos(2\pi kt).$$

If $t \notin \mathbb Z$, then

$$D_N(t) = \frac{\sin((2N+1)\pi t)}{\sin(\pi t)}.$$

If $m \in \mathbb Z$, then $D_N(m)=2N+1$. In particular $D_N$ is even and

$$|D_N(t)| \le 2N+1 \qquad (t \in \mathbb R),$$

while for $t \notin \mathbb Z$,

$$|D_N(t)| \le \frac{1}{|\sin(\pi t)|}.$$

## Facts & Assumptions

**Given:** An integer $N \ge 0$ and a real $t$.

[L1] The Dirichlet kernel is $D_N(t)=\sum_{|k|\le N}e^{2\pi ikt}$ ([[def-dirichlet-and-fejer-kernels]]).

## Proof

**Proof technique:** direct.

1.1 Pair the terms with indices $k$ and $-k$ in [L1]. This gives $$D_N(t)=1+\sum_{k=1}^N \bigl(e^{2\pi ikt}+e^{-2\pi ikt}\bigr)=1+2\sum_{k=1}^N \cos(2\pi kt).$$ Hence $D_N$ is even. If $t=m \in \mathbb Z$, then every exponential equals $1$, so $D_N(m)=2N+1$. [L1, algebra]

1.2 Assume $t \notin \mathbb Z$ and put $z=e^{2\pi it} \ne 1$. Then [L1, algebra] $$D_N(t)=z^{-N}\sum_{j=0}^{2N} z^j = z^{-N}\frac{1-z^{2N+1}}{1-z}.$$ Rewriting numerator and denominator with half-angle factors yields $$D_N(t)=\frac{e^{-\pi i(2N+1)t}-e^{\pi i(2N+1)t}}{e^{-\pi it}-e^{\pi it}}=\frac{\sin((2N+1)\pi t)}{\sin(\pi t)}.$$ [L1, algebra]

2.1 The triangle inequality applied to [L1] gives $|D_N(t)|\le 2N+1$ for every $t$. If $t \notin \mathbb Z$, step 1.2 and $|\sin((2N+1)\pi t)|\le1$ give $$|D_N(t)| \le \frac{1}{|\sin(\pi t)|}.$$ [L1, step 1.2, algebra] ∎
