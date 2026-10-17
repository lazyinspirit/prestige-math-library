---
id: lem-tgr-relative-shell-canonical-response
kind: lemma
title: "Exact relative-shell canonical normalization and response"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-regulated-kepler-shell-law
  - lem-tgr-annular-radial-integration
  - lem-tgr-finite-gaussian-moment-envelope
  - thm-differentiation-under-the-integral-sign
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tgr-regulated-kepler-shell-law: mathematical-premise
  lem-tgr-annular-radial-integration: mathematical-premise
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
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
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

Use the relative Kepler Hamiltonian and shell $Q=\{q\in\mathbb R^3:r_0\le|q|\le R\}$ from [[def-tgr-regulated-kepler-shell-law]], with $\mu,A,r_0>0$ and $R>16r_0$. For every $\beta>0$, define
$$Z_{\mathrm{rel}}(\beta)=\frac1{h_*^3}\int_Q\int_{\mathbb R^3}e^{-\beta h(q,p)}\,d^3p\,d^3q.$$
Then
$$0<\frac{|Q|e^{\beta A/R}}{h_*^3}\left(\frac{2\pi\mu}{\beta}\right)^{3/2} \le Z_{\mathrm{rel}}(\beta) \le \frac{|Q|e^{\beta A/r_0}}{h_*^3}\left(\frac{2\pi\mu}{\beta}\right)^{3/2}<\infty.$$
All energy moments are finite, and on every compact positive $\beta$ interval one integrable majorant justifies all derivatives of $Z_{\mathrm{rel}}$. Put $d\nu_{\mathrm{rel}}=h_*^{-3}d^3q\,d^3p$ on $Q\times\mathbb R^3$ and $p_\beta=Z_{\mathrm{rel}}(\beta)^{-1}e^{-\beta h}$. For a measurable observable $A:Q\times\mathbb R^3\to\mathbb R$ with finite second moment, define $\langle A\rangle_\beta:=\int A p_\beta\,d\nu_{\mathrm{rel}}$ and $\operatorname{Var}_\beta(A):=\int(A-\langle A\rangle_\beta)^2p_\beta\,d\nu_{\mathrm{rel}}$. The normalized canonical density has
$$\langle h\rangle_\beta=-\partial_\beta\log Z_{\mathrm{rel}},\qquad \frac{d\langle h\rangle_\beta}{d\beta}=-\operatorname{Var}_\beta(h),\qquad C_K:=\frac{d\langle h\rangle_\beta}{dT_K}=k_B\beta^2\operatorname{Var}_\beta(h)\ge0, \quad T_K=(k_B\beta)^{-1}.$$
This is the exact six-dimensional relative canonical preparation; center-of-mass degrees are absent.

## Facts & Assumptions

**Given:** The relative phase shell and Hamiltonian, $\beta>0$, $\mu,A,r_0>0$, and $R>16r_0$.

[F1] The relative shell is $Q=\{q:r_0\le|q|\le R\}$ and $h(q,p)=|p|^2/(2\mu)-A/|q|$, with measure $d^3q\,d^3p/h_*^3$. ([[def-tgr-regulated-kepler-shell-law]])

[F2] Radial integration gives $|Q|=4\pi\int_{r_0}^Rr^2dr=\frac{4\pi}{3}(R^3-r_0^3)$. ([[lem-tgr-annular-radial-integration]])

[F3] Gaussian momentum moments are finite and uniformly bounded on compact positive inverse-temperature intervals. ([[lem-tgr-finite-gaussian-moment-envelope]])

[F4] Differentiation under an integral is valid when the parameter derivative has an integrable uniform majorant. ([[thm-differentiation-under-the-integral-sign]])

[F5] Tonelli factors nonnegative measurable integrals on products of sigma-finite Lebesgue spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

1.1 On $Q$, $-A/r_0\le-A/|q|\le-A/R$. Therefore
$$e^{\beta A/R}e^{-\beta|p|^2/(2\mu)} \le e^{-\beta h(q,p)} \le e^{\beta A/r_0}e^{-\beta|p|^2/(2\mu)}.$$
The position volume is positive and finite by [F2]. Tonelli [F5] and the Gaussian formula [F3] integrate the momentum factor as $(2\pi\mu/\beta)^{3/2}$, proving both strict positivity and the stated finite bounds. [F1, F2, F3, F5, algebra]

1.2 Fix $[\beta_0,\beta_1]\subset(0,\infty)$. Since $|{-A/|q|}|\le A/r_0$, for every integer $j\ge0$ a finite constant $B_j$ gives
$$|h(q,p)|^je^{-\beta h(q,p)} \le B_j(1+|p|^{2j})e^{-\beta_0|p|^2/(2\mu)}.$$
This is integrable on $Q\times\mathbb R^3$ by [F2] and [F3], independently of $\beta$ in the compact interval. The integrand derivatives are $(-h)^j e^{-\beta h}$, so [F4] applied successively proves all moment and derivative formulas. [F1, F2, F3, F4, algebra]

2.1 The first two derivatives are $Z'_{\mathrm{rel}}=-\int h e^{-\beta h}d\nu$ and $Z''_{\mathrm{rel}}=\int h^2e^{-\beta h}d\nu$. Dividing by $Z_{\mathrm{rel}}>0$ and differentiating the quotient gives $d\langle h\rangle_\beta/d\beta=-\langle h^2\rangle_\beta+\langle h\rangle_\beta^2=-\operatorname{Var}_\beta(h)$. Since $dT_K/d\beta=-1/(k_B\beta^2)$, the chain rule yields the displayed $C_K\ge0$. [F3, F4, step 1.1, step 1.2, algebra] ∎
