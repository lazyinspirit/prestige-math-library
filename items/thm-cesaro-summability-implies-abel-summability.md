---
id: thm-cesaro-summability-implies-abel-summability
kind: theorem
title: "Cesaro summability implies Abel summability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

Let $f:\mathbb R\to\mathbb C$ be one-periodic with $f|_{[0,1]}\in L^1([0,1])$,
and let $x,s\in\mathbb R$. If

$$\sigma_Nf(x)\longrightarrow s \qquad (N\to\infty),$$

then

$$A_rf(x)\longrightarrow s \qquad (r\uparrow1).$$

## Facts & Assumptions

**Given:** A one-periodic integrable function $f$, a point $x\in\mathbb R$, and a scalar $s$ such that $\sigma_Nf(x)\to s$.

[L1] The Cesaro means and Abel means are defined in [[def-cesaro-and-abel-means-of-a-fourier-series]].

## Proof

**Proof technique:** direct.

1.1 Let $S_N:=S_Nf(x)$ and $\sigma_N:=\sigma_Nf(x)$. Since $$S_N=(N+1)\sigma_N-N\sigma_{N-1}\qquad(N\ge0,\ \sigma_{-1}:=0),$$ one has $$\sum_{N=0}^\infty r^NS_N=(1-r)\sum_{N=0}^\infty (N+1)r^N\sigma_N$$ for $0\le r<1$. On the other hand, the definition of $A_rf(x)$ in [L1] gives $$A_rf(x)=(1-r)\sum_{N=0}^\infty r^NS_N=(1-r)^2\sum_{N=0}^\infty (N+1)r^N\sigma_N.$$ [L1, algebra]

2.1 Put $$w_N(r):=(1-r)^2(N+1)r^N \qquad (N\ge0).$$ These weights are nonnegative, and $$\sum_{N=0}^\infty w_N(r)=(1-r)^2\sum_{N=0}^\infty (N+1)r^N=1.$$ Therefore step 1.1 rewrites the Abel mean as $$A_rf(x)-s=\sum_{N=0}^\infty w_N(r)\bigl(\sigma_N-s\bigr).$$ [step 1.1, algebra]

3.1 Let $\varepsilon>0$. Choose $N_0$ so large that $|\sigma_N-s|<\varepsilon/2$ for all $N\ge N_0$, and put $$M:=\max_{0\le N<N_0}|\sigma_N-s|.$$ By step 2.1, $$|A_rf(x)-s|\le M\sum_{N=0}^{N_0-1}w_N(r)+\frac{\varepsilon}{2}\sum_{N=N_0}^\infty w_N(r).$$ The tail sum is at most $\varepsilon/2$, and for each fixed $N$ one has $w_N(r)\to0$ as $r\uparrow1$, so the finite initial sum is $<\varepsilon/(2M)$ for $r$ close enough to $1$ when $M>0$, and is already $0$ when $M=0$. Hence $|A_rf(x)-s|<\varepsilon$ for all $r$ sufficiently close to $1$. Therefore $A_rf(x)\to s$. [step 2.1, given, choose, algebra] ∎
