---
id: thm-ip-joint-regularization-rate-under-range-invariance
kind: theorem
title: Joint regularization rates under differential range invariance
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-differential-range-invariance
  - def-ip-relaxed-range-invariance-objective
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - lem-ip-index-function-young-conjugate-bound
  - lem-ip-joint-range-invariance-vsc-estimate
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Theorem 3"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 10.7"
      url: "https://arxiv.org/pdf/2001.00617v2"
---

## Statement

Assume the hypotheses of the joint range-invariance VSC estimate lemma, with the same notation, with fixed $\beta>0$, and with $R_P=0$ in the joint objective. Define

$$H(q):=\sup_{s\ge0}\bigl(\psi(s)-qs\bigr)\qquad(q>0),\quad \rho_\delta:=H\!\left(\frac{1}{C_*\alpha(\delta)}\right).$$

Assume $H(1/(C_*\alpha(\delta)))$ and $H(1/(2C_*\alpha(\delta)))$ are finite, $\alpha(\delta)\to0$, $\rho_\delta\to0$, $\eta_\delta\le C_\eta\delta^p$, and there are constants $c_-,c_+,C_H>0$ independent of $\delta$ such that

$$c_-\delta^p\le\alpha(\delta)\rho_\delta\le c_+\delta^p,\qquad H\!\left(\frac{1}{2C_*\alpha(\delta)}\right)\le C_H\rho_\delta.$$

Then the approximate joint reconstructions satisfy, as $\delta\downarrow0$,

$$D_{\check R}^{\xi^\dagger}(\check x_\delta,x^\dagger)=O(\rho_\delta),\qquad S_\delta=O(\delta^p),$$

where $S_\delta$ is the scalar residual, coupling, and projection error defined in the joint range-invariance VSC estimate lemma. In particular,

$$\|K(\widehat r_\delta-r(x^\dagger))\|_Y=O(\delta),\quad \|Px_\delta\|_X=O(\delta),\quad Q(r(x_\delta),\widehat r_\delta)=O(\delta),$$

and the data residual $\|K\widehat r_\delta+F(x_0)-y^\delta\|_Y$ is $O(\delta)$.

## Statement references

[[lem-ip-joint-range-invariance-vsc-estimate|Joint objective error inequality]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Theorem 3](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.7](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** The joint estimate lemma applies at noise level $\delta$, with $0\le\eta_\delta\le C_\eta\delta^p$ and the parameter-index bounds in the Statement.

[A1] The parameter coupling satisfies $c_-\delta^p\le\alpha\rho_\delta\le c_+\delta^p$.

[A2] The conjugate values at $1/(C_*\alpha)$ and $1/(2C_*\alpha)$ are finite, and $H(1/(2C_*\alpha))\le C_H\rho_\delta$.

[F1] [[lem-ip-joint-range-invariance-vsc-estimate]]: $S_\delta+(1-b)\alpha e_\delta\le(2+C_\eta)\delta^p+\alpha\psi(C_*S_\delta)$.

[F2] [[lem-ip-index-function-young-conjugate-bound]]: if $c_1r+c_2\alpha e\le d+\alpha\psi(C_3r)$, then $e\le c_2^{-1}(d/\alpha+H(c_1/(C_3\alpha)))$ and $r\le2c_1^{-1}(d+\alpha H(c_1/(2C_3\alpha)))$.

[F3] [[def-ip-differential-range-invariance]]: $F(x)-F(x_0)=Kr(x)$, so $K r(x^\dagger)+F(x_0)=F(x^\dagger)$.

## Proof

1.1 Apply [F2] to [F1] with $c_1=1$, $c_2=1-b$, $C_3=C_*$, $r=S_\delta$, $e=e_\delta$, and $d=(2+C_\eta)\delta^p$. The first bound gives $e_\delta\le\frac{1}{1-b}((2+C_\eta)\delta^p/\alpha+\rho_\delta)$. By [A1], $\delta^p/\alpha\le\rho_\delta/c_-$, hence $e_\delta=O(\rho_\delta)$. [A1, F1, F2]

1.2 The second bound from [F2] gives $S_\delta\le2((2+C_\eta)\delta^p+\alpha H(1/(2C_*\alpha)))$. By [A1]–[A2], $\alpha H(1/(2C_*\alpha))\le C_Hc_+\delta^p$, so $S_\delta=O(\delta^p)$. [A1, A2, F1, F2]

2.1 Each nonnegative summand defining $S_\delta$ is bounded by $S_\delta$. Since $\beta$ is fixed and positive, the definitions of $S_\delta$ and $p\ge1$ imply the three displayed $O(\delta)$ bounds. Moreover, $K\widehat r_\delta+F(x_0)-y^\delta=K(\widehat r_\delta-r(x^\dagger))+(F(x^\dagger)-y^\delta)$ by [F3]; the triangle inequality and the noise bound then give the $O(\delta)$ data-residual estimate. [given, F3, step 1.2] ∎
