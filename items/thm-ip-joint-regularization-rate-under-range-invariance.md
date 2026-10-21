---
id: thm-ip-joint-regularization-rate-under-range-invariance
kind: theorem
title: Joint regularization rates under differential range invariance
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-differential-range-invariance
  - def-ip-relaxed-range-invariance-objective
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - lem-ip-index-function-young-conjugate-bound
  - lem-ip-joint-range-invariance-vsc-estimate
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility
  - lem-ip-logarithmic-index-conjugate-and-parameter-rates
  - lem-ip-logarithmic-endpoint-under-effective-noise-control
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance
        condition with application to electrical impedance tomography, Theorem 3
      url: https://arxiv.org/pdf/2403.18704
    - title: Frederic Weidling, Variational Source Conditions and Conditional
        Stability Estimates for Inverse Problems in PDEs, Theorem 2.20
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
    - title: Christian Clason, Regularization of Inverse Problems, Theorem 10.7
      url: https://arxiv.org/pdf/2001.00617v2
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

For the following three-dimensional EIT specialization, assume the Axiom of Choice, Countable Choice and Dependent Choice. Let $\Omega=B_1\subset\mathbb R^3$, let the known background be $1$ outside $B_\rho\Subset B_1$, and impose fixed bounds $0<m<1<M$ and $m\le\sigma\le M$. Let $s_1\in(5/2,7/2)$, use the intrinsic quadratic penalty $\frac12\|\sigma\|_{H^{s_1}(\Omega)}^2$ on this admissible class, and let $\sigma^\dagger\in B^{s_2}_{2,\infty}(\Omega)$ with $s_2\in(s_1,2s_1-1)$. The Sobolev norm is the exact intrinsic Hilbert norm in the EIT compatibility lemma. Use centered mean-zero Neumann voltage data $(\mathscr N_\sigma-\mathscr N_1)Y_{\ell k}$ in $Y=\ell^2(L^2(S^2))$, its observation-augmentation range coordinates, and admitted approximate joint minimizers in the set $U$ specified by that lemma. The artificial voltage is $z\in Y$ and the projection is $P(\sigma-\sigma_0,z)=(0,z)$. Put

$$\nu=\frac{(s_2-s_1)(2s_1-3)}{s_2-1},\qquad L_\delta=\log(1/\delta).$$

For fixed $\beta>0$, noise bounded by $\delta$, and $\eta_\delta=O(\delta^2)$, the balanced choice $\alpha\asymp\delta^2L_\delta^\nu$ gives

$$\|\sigma_\delta-\sigma^\dagger\|_{H^{s_1}(\Omega)}=O(L_\delta^{-\nu/2}),\qquad \|z_\delta\|_Y=O(\delta),\qquad S_\delta=O(\delta^2).$$

Every pure power $\alpha\asymp\delta^k$ with $0<k<2$ gives the same conductivity norm rate and $S_\delta=O(\delta^kL_\delta^{-\nu})$, hence $\|z_\delta\|_Y=O(\delta^{k/2}L_\delta^{-\nu/2})$. At the nominal endpoint $\alpha\asymp\delta^2$, the same conductivity norm rate holds under the explicit actual-noise and tolerance condition

$$2\|y^\delta-y\|_Y^2+\eta_\delta=O(\delta^2L_\delta^{-\nu});$$

then $S_\delta=O(\delta^2L_\delta^{-\nu})$ and $\|z_\delta\|_Y=O(\delta L_\delta^{-\nu/2})$. In each case the coupling distance and relaxed data residual have order $O(\sqrt{S_\delta}+\|y^\delta-y\|_Y)$. In particular the sum of the conductivity norm error and the artificial-voltage norm is $O(L_\delta^{-\nu/2})$ in all three stated regimes.

## Statement references

[[lem-ip-joint-range-invariance-vsc-estimate|Joint objective error inequality]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Theorem 3](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Christian Clason, *Regularization of Inverse Problems*, Theorem 10.7](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]]

[[lem-ip-logarithmic-index-conjugate-and-parameter-rates]]

[[lem-ip-logarithmic-endpoint-under-effective-noise-control]]

## Facts & Assumptions

**Given:** For the generic assertion, the joint estimate lemma and parameter-index bounds in the first part of the Statement apply. For each EIT regime, use that regime's own stated parameter and noise conditions in the same joint comparison.

[A1] For the generic assertion, the parameter coupling satisfies $c_-\delta^p\le\alpha\rho_\delta\le c_+\delta^p$.

[A2] For the generic assertion, the conjugate values at $1/(C_*\alpha)$ and $1/(2C_*\alpha)$ are finite, and $H(1/(2C_*\alpha))\le C_H\rho_\delta$.

[F1] [[lem-ip-joint-range-invariance-vsc-estimate]]: $S_\delta+(1-b)\alpha e_\delta\le(2+C_\eta)\delta^p+\alpha\psi(C_*S_\delta)$.

[F2] [[lem-ip-index-function-young-conjugate-bound]]: if $c_1r+c_2\alpha e\le d+\alpha\psi(C_3r)$, then $e\le c_2^{-1}(d/\alpha+H(c_1/(C_3\alpha)))$ and $r\le2c_1^{-1}(d+\alpha H(c_1/(2C_3\alpha)))$.

[F3] [[def-ip-differential-range-invariance]]: $F(x)-F(x_0)=Kr(x)$, so $K r(x^\dagger)+F(x_0)=F(x^\dagger)$.

[A3] The EIT clauses use the Axiom of Choice, Countable Choice and Dependent Choice only at their local elliptic, Fourier, trace and Hilbert suppliers; the generic implication above retains its original assumptions.

[F4] [[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]] verifies the centered EIT structural hypotheses with $p=2$, exact quadratic Bregman distance, $b=3/4$, and logarithmic source exponent $\nu$ displayed in the Statement.

[F5] [[lem-ip-logarithmic-index-conjugate-and-parameter-rates]] gives $H(q)\sim C(\log q)^{-\nu}$ and the balanced and strict-power scalar comparison rates.

[F6] [[lem-ip-logarithmic-endpoint-under-effective-noise-control]] gives the endpoint scalar rates with the explicitly strengthened actual noise and tolerance term.

## Proof

1.1 Apply [F2] to [F1] with $c_1=1$, $c_2=1-b$, $C_3=C_*$, $r=S_\delta$, $e=e_\delta$, and $d=(2+C_\eta)\delta^p$. The first bound gives $e_\delta\le\frac{1}{1-b}((2+C_\eta)\delta^p/\alpha+\rho_\delta)$. By [A1], $\delta^p/\alpha\le\rho_\delta/c_-$, hence $e_\delta=O(\rho_\delta)$. [A1, F1, F2]

1.2 The second bound from [F2] gives $S_\delta\le2((2+C_\eta)\delta^p+\alpha H(1/(2C_*\alpha)))$. By [A1]–[A2], $\alpha H(1/(2C_*\alpha))\le C_Hc_+\delta^p$, so $S_\delta=O(\delta^p)$. [A1, A2, F1, F2]

1.3 For the EIT clauses use [F4]. Every admitted projected coefficient is physical, the ambient indicator leaves the quadratic objective unchanged, and its Bregman error is $e_\delta=\frac12\|\widehat\sigma_\delta-\sigma^\dagger\|_{H^{s_1}}^2$, where $\widehat\sigma_\delta$ is the first range coordinate translated by $\sigma_0$. The first-coordinate identity of the range map gives $\|\sigma_\delta-\widehat\sigma_\delta\|_{H^{s_1}}\le Q(r(x_\delta),\widehat r_\delta)$. Thus a Bregman rate and the coupling rate control the actual physical conductivity, without confusing the relaxed coefficient with the admitted output coefficient. [A3, F4, given, algebra]

2.1 Each nonnegative summand defining $S_\delta$ is bounded by $S_\delta$. Since $\beta$ is fixed and positive, the definitions of $S_\delta$ and $p\ge1$ imply the three displayed $O(\delta)$ bounds. Moreover, $K\widehat r_\delta+F(x_0)-y^\delta=K(\widehat r_\delta-r(x^\dagger))+(F(x^\dagger)-y^\delta)$ by [F3]; the triangle inequality and the noise bound then give the $O(\delta)$ data-residual estimate. [given, F3, step 1.2]

2.2 For $\alpha\asymp\delta^k$ with $0<k<2$, apply the strict-power scalar conclusion of [F5] directly to the joint comparison [F1], with $d=(2+C_\eta)\delta^2$. This yields $e_\delta=O(L_\delta^{-\nu})$ and $S_\delta=O(\delta^kL_\delta^{-\nu})$. The fixed positive coupling coefficient and nonnegative summands of $S_\delta$ give the claimed artificial-voltage and coupling bounds. Step 1.3 then gives the same physical conductivity norm rate because $\delta^{k/2}L_\delta^{-\nu/2}=O(L_\delta^{-\nu/2})$. [F1, F4, F5, step 1.3, algebra]

3.1 By [F5], for $\alpha\asymp\delta^2L_\delta^\nu$ the values $H(1/(C_*\alpha))$ and $H(1/(2C_*\alpha))$ are both of order $L_\delta^{-\nu}$, their ratio is bounded, and $\alpha H(1/(C_*\alpha))\asymp\delta^2$. Hence the generic theorem assumptions apply and steps 1.1–2.1 give $e_\delta=O(L_\delta^{-\nu})$, $S_\delta=O(\delta^2)$, and the stated residual, coupling and projection bounds. Taking square roots in step 1.3 and using the coupling bound proves the physical conductivity norm rate. [F4, F5, step 1.1, step 1.2, step 2.1, step 1.3, algebra]

4.1 At the endpoint use the actual noise $\varepsilon_\delta=\|y^\delta-y\|$ in the approximate-minimum comparison, so its scalar right-side constant is $d=2\varepsilon_\delta^2+\eta_\delta$. The explicit endpoint assumption and [F6] give $e_\delta=O(L_\delta^{-\nu})$ and $S_\delta=O(\delta^2L_\delta^{-\nu})$. Nonnegativity of the projection and coupling terms and step 1.3 give all displayed norm bounds. In each regime the relaxed data residual is at most $\|K(\widehat r_\delta-r(x^\dagger))\|+\varepsilon_\delta=O(\sqrt{S_\delta}+\varepsilon_\delta)$, exactly as in step 2.1. This completes every stated EIT regime with its explicit noise assumptions. [F1, F3, F4, F6, step 2.1, step 1.3, algebra] ∎
