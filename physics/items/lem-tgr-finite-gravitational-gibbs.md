---
id: lem-tgr-finite-gravitational-gibbs
kind: lemma
title: "Finite gravitational Gibbs normalization and differentiable moments"
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-gravitating-phase-reference
  - def-tgr-softened-gravity-finite-phase
  - lem-tgr-finite-gaussian-moment-envelope
  - thm-differentiation-under-the-integral-sign
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  def-tgr-softened-gravity-finite-phase: mathematical-premise
  lem-tgr-finite-gaussian-moment-envelope: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 2
---

## Statement

Use the box, mass $m$, integer $N\ge1$, regulator $a>0$, and Hamiltonian $H_{N,a}=K_N+U_a$ of [[def-tgr-softened-gravity-finite-phase]], with $K_N=\sum_i|p_i|^2/(2m)$. Put $C_N=Gm^2N(N-1)/(2a)$ and use the reference measure of [[def-tgr-gravitating-phase-reference]]. For every $\beta>0$,
$$0<\frac{|B|^N}{N!h_*^{3N}}\left(\frac{2\pi m}{\beta}\right)^{3N/2} \le Z_N(\beta) \le e^{\beta C_N}\frac{|B|^N}{N!h_*^{3N}}\left(\frac{2\pi m}{\beta}\right)^{3N/2}<\infty.$$
The density $p_\beta=Z_N^{-1}e^{-\beta H_{N,a}}$ is a positive probability density. For each integer $j\ge0$, $\int_{\Gamma_N}|H_{N,a}|^j e^{-\beta H_{N,a}}d\nu_N$ is finite, and $Z_N$ is $C^\infty$ on $(0,\infty)$ with
$$Z_N^{(j)}(\beta)=\int_{\Gamma_N}(-H_{N,a})^j e^{-\beta H_{N,a}}\,d\nu_N.$$
On every compact positive $\beta$ interval, one integrable majorant works for each fixed derivative order.

## Facts & Assumptions

**Given:** A bounded measurable box $B\subseteq\mathbb R^3$ with $0<|B|<\infty$, $N\ge1$, $m,G,a,\beta>0$, and the finite phase model.

[F1] The softened model has $H_{N,a}=K_N+U_a$ on $B^N\times\mathbb R^{3N}$, where each pair term in $U_a$ is $-Gm^2/\sqrt{|q_i-q_j|^2+a^2}$. ([[def-tgr-softened-gravity-finite-phase]])

[F2] For $d\ge1$, $m>0$, and a compact interval $[\beta_0,\beta_1]\subset(0,\infty)$, all Gaussian momentum moments $\int_{\mathbb R^d}(1+|p|^{2j})e^{-\beta|p|^2/(2m)}dp$ have a common finite bound. ([[lem-tgr-finite-gaussian-moment-envelope]])

[F3] If an integrable section is differentiable in a parameter and its derivative is dominated by one integrable majorant on an open interval, the derivative passes through the integral. ([[thm-differentiation-under-the-integral-sign]])

[F4] Tonelli factors nonnegative measurable integrals on finite products of Euclidean Lebesgue spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

1.1 Each pair denominator is at least $a$, so $-C_N\le U_a\le0$ and $K_N\ge0$. Consequently $e^{-\beta K_N}\le e^{-\beta H_{N,a}}\le e^{\beta C_N}e^{-\beta K_N}$. Tonelli [F4] and [F2] evaluate the momentum integral as $(2\pi m/\beta)^{3N/2}$; the position integral is $|B|^N$, so the stated positive lower and finite upper bounds follow after division by $N!h_*^{3N}$. [given, F1, F2, F4]

2.1 Fix a compact interval $[\beta_0,\beta_1]\subset(0,\infty)$. Since $|U_a|\le C_N$ and $K_N=|p|^2/(2m)$ in $d=3N$ momentum coordinates, for every fixed $j$ there is a finite $A_j$ such that
$$|H_{N,a}|^j e^{-\beta H_{N,a}}\le A_j(1+|p|^{2j})e^{-\beta_0|p|^2/(2m)}$$
for every $\beta\in[\beta_0,\beta_1]$ and every phase point. The right side is integrable by [F2] times the finite position volume $|B|^N$. This proves all absolute energy moments and supplies an integrable compact-parameter envelope. [F1, F2, step 1.1, algebra]

3.1 For each $j$, the parameter derivative of $(-H_{N,a})^j e^{-\beta H_{N,a}}$ is $(-H_{N,a})^{j+1}e^{-\beta H_{N,a}}$; its measurability and an integrable uniform bound are provided by step 2.1 at order $j+1$. Apply [F3] successively on compact subintervals of $(0,\infty)$, starting with $j=0$, to differentiate under the integral any finite number of times. The formula for $Z_N^{(j)}$ follows by induction, and the moment of order zero gives the positive normalized density. [F2, F3, step 2.1, algebra] ∎
