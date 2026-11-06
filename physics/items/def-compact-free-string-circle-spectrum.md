---
id: def-compact-free-string-circle-spectrum
kind: definition
title: Compact Free String Circle Spectrum
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - pthm-st-closed-classical-mode-expansion
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  pthm-st-closed-classical-mode-expansion: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Kinematic free closed-string compact-boson circle sector with a flat product worldsheet and target, no B-field, orbifold, interaction, defect, or backreaction; the graded free spectrum is defined, with no full CFT or interacting-string claim."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture I equation (1.4), oscillator algebra, and Lecture II §2.1, equations (2.1)–(2.10), PDF pp. 8–11: compact zero modes, integer momentum/winding and chiral conventions. The explicit Hilbert realization and occupation normalization are defined and verified locally here."
    - title: "A. Giveon, M. Porrati, and E. Rabinovici, Target Space Duality in String Theory, arXiv:hep-th/9401139v1"
      url: "https://arxiv.org/pdf/hep-th/9401139v1"
      locator: "§2.2, equations (2.2.1)–(2.2.10), PDF pp. 13–15: the circle action, compact zero modes, and left/right Virasoro weights."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a free closed-string coordinate $X^1$ with target circle $S_R^1:=\mathbb R/(2\pi R\mathbb Z)$, $R>0$, on the Lorentzian cylinder $\Sigma=\mathbb R_\tau\times(\mathbb R/2\pi\mathbb Z)_\sigma$, with dimensionless coordinates $\tau,\sigma$. The compact center-of-mass coordinate is $x_0\in S_R^1$. With $\hbar=1$, take its Hilbert space to be $L^2(S_R^1,dx_0/(2\pi R))$ and its momentum operator to be $P=-i\,d/dx_0$ on the periodic Sobolev domain $H^1(S_R^1)$. The normalized Fourier functions $\psi_n(x_0)=e^{inx_0/R}$, $n\in\mathbb Z$, satisfy $P\psi_n=(n/R)\psi_n$; thus the momentum eigenvalue is $p=n/R$.

For a $C^2$ closed-string map $X^1:\Sigma\to S_R^1$, define its winding number $w\in\mathbb Z$ by lifting $\sigma\mapsto X^1(\tau,\sigma)$ to $\widetilde X^1_\tau:\mathbb R\to\mathbb R$ and requiring $\widetilde X^1_\tau(\sigma+2\pi)-\widetilde X^1_\tau(\sigma)=2\pi Rw$. Choose a real representative $\widetilde x_0\in\mathbb R$ of $x_0\in S_R^1$. The zero-mode lift is
$$
\widetilde X^1_0(\tau,\sigma)=\widetilde x_0+\frac{\alpha'}2p_L(\tau+\sigma)+\frac{\alpha'}2p_R(\tau-\sigma),\qquad p_L:=\frac nR+\frac{wR}{\alpha'},\qquad p_R:=\frac nR-\frac{wR}{\alpha'},
$$
where $\alpha'>0$ has dimension length squared. This profile has center-of-mass momentum $n/R$ and winding $w$.

Use the mode convention of the supplied closed-string expansion: modes $\alpha_m$ multiply the $\tau-\sigma$ (right-moving) coordinate and modes $\widetilde\alpha_m$ multiply the $\tau+\sigma$ (left-moving) coordinate. Thus $\alpha_0=\sqrt{\alpha'/2}\,p_R$ and $\widetilde\alpha_0=\sqrt{\alpha'/2}\,p_L$. In the selected free compact-boson quantum sector, adopt the oscillator algebra $[\alpha_m,\alpha_n]=m\delta_{m+n,0}$, $[\widetilde\alpha_m,\widetilde\alpha_n]=m\delta_{m+n,0}$, and $[\alpha_m,\widetilde\alpha_n]=0$, with $\alpha_k$ and $\widetilde\alpha_k$ annihilating the vacuum for every $k\ge1$. To specify the Hilbert-space and adjoint data, put $\mathbb Z_{>0}:=\{1,2,\ldots\}$ and $\mathbb N_0:=\{0,1,2,\ldots\}$, and let $\mathscr K:=\{\mathbf r:\mathbb Z_{>0}\to\mathbb N_0:\{k:r_k\ne0\}\text{ is finite}\}$ be the set of finite-support nonnegative integer occupation sequences, and let $\mathscr I=\mathbb Z^2\times\mathscr K\times\mathscr K$. Define
$$\mathscr H_R:=\ell^2(\mathscr I),\qquad \langle c,d\rangle=\sum_{I\in\mathscr I}\overline{c_I}d_I.$$
This inner product is antilinear in the first argument. Write $e_{n,w;\mathbf r_L,\mathbf r_R}$ for the coordinate unit vectors, and $\mathscr D_R$ for their finite linear span. These vectors are an orthonormal basis by the definition of $\ell^2$; the Hilbert space is their completion. Identify $|n,w\rangle=e_{n,w;0,0}$, with the momentum wavefunction $\psi_n$ and winding label $w$ already specified. Thus different momentum or winding sectors are orthogonal and every oscillator vacuum has norm one.

Let $\mathbf e_k$ be the occupation sequence with entry one at $k$ and zero elsewhere. On $\mathscr D_R$ define the nonzero modes by
$$\begin{aligned}\alpha_{-k}e_{n,w;\mathbf r_L,\mathbf r_R}&=\sqrt{k(r_{R,k}+1)}\,e_{n,w;\mathbf r_L,\mathbf r_R+\mathbf e_k},&\alpha_ke_{n,w;\mathbf r_L,\mathbf r_R}&=\sqrt{kr_{R,k}}\,e_{n,w;\mathbf r_L,\mathbf r_R-\mathbf e_k},\\\widetilde\alpha_{-k}e_{n,w;\mathbf r_L,\mathbf r_R}&=\sqrt{k(r_{L,k}+1)}\,e_{n,w;\mathbf r_L+\mathbf e_k,\mathbf r_R},&\widetilde\alpha_ke_{n,w;\mathbf r_L,\mathbf r_R}&=\sqrt{kr_{L,k}}\,e_{n,w;\mathbf r_L-\mathbf e_k,\mathbf r_R},\qquad k\ge1.\end{aligned}$$
A lowering expression is zero when its indicated occupation is zero. Take their maximal closed extensions in $\mathscr H_R$. For each fixed $k$, both right-moving operators have domain $\{c:\sum_I kr_{R,k}|c_I|^2<\infty\}$ and both left-moving operators have the corresponding domain with $r_{L,k}$. The creation-domain condition with $k(r_{R,k}+1)$, or $k(r_{L,k}+1)$, is equivalent because $c\in\ell^2$ and $k$ is fixed. On these domains their Hilbert adjoints satisfy $\alpha_k^\dagger=\alpha_{-k}$ and $\widetilde\alpha_k^\dagger=\widetilde\alpha_{-k}$. The zero modes act diagonally by the real eigenvalues displayed above, with their maximal square-summability domains. The space $\mathscr D_R$ is a common invariant core for these oscillator modes. This is an explicit local Hilbert realization of the source's free spacelike oscillator convention, not an assertion about a BRST quotient or a full string Hilbert space. For finite-support sequences $\mathbf r_L=(r_{L,k})_{k\ge1},\mathbf r_R=(r_{R,k})_{k\ge1}\in\mathscr K$, define the normalized occupation state
$$
|n,w;\mathbf r_L,\mathbf r_R\rangle:=\prod_{k\ge1}\frac{(\widetilde\alpha_{-k})^{r_{L,k}}(\alpha_{-k})^{r_{R,k}}}{\sqrt{k^{r_{L,k}+r_{R,k}}r_{L,k}!r_{R,k}!}}|n,w\rangle.
$$
Here $|n,w\rangle$ is the zero-mode state with center-of-mass wavefunction $\psi_n$ and winding sector $w$. Thus $\widetilde\alpha_{-k}$ is a left-moving creation mode and $\alpha_{-k}$ a right-moving creation mode. Define the compact-coordinate oscillator grades $N_L:=\sum_{k\ge1}kr_{L,k}$ and $N_R:=\sum_{k\ge1}kr_{R,k}$. If a fixed spectator sector is included, let its prescribed nonnegative grades be $N_{\rm sp},\bar N_{\rm sp}$ and put $N:=N_L+N_{\rm sp}$ and $\bar N:=N_R+\bar N_{\rm sp}$; for the compact boson alone take both spectator grades to be zero. The conformal-weight labels in this selected free sector are $h=\alpha'p_L^2/4+N$ and $\bar h=\alpha'p_R^2/4+\bar N$. Their difference is $h-\bar h=nw+N-\bar N$, so level matching is $nw+N-\bar N=0$ when the chosen other sectors are included consistently. This is a definition of the kinematic free-circle graded spectrum; it does not assert BRST/GSO constraints, operator-product or cocycle equivalence, partition-function or sewing equivalence, or an interacting-worldsheet equivalence.

## Definition references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[pthm-st-closed-classical-mode-expansion]]

## Facts & Assumptions

**Given:** The flat tensile string conventions, $\alpha'>0$, a compact coordinate of period $2\pi R$, and the momentum Hilbert space and winding sectors defined above.

[F1] [[def-st-flat-bosonic-string-model]]: the closed worldsheet is a Lorentzian cylinder with dimensionless $\tau$ and $2\pi$-periodic $\sigma$, and $X^\mu$ has length dimension.

[F2] [[def-st-string-tension-alpha-prime]]: $\alpha'$ has length-squared dimension and is positive.

[F3] [[pthm-st-closed-classical-mode-expansion]]: in the $\tau-\sigma$/$\tau+\sigma$ convention, a noncompact zero mode has $\alpha_0=\widetilde\alpha_0=\sqrt{\alpha'/2}\,p$; its mode expansion fixes the right-moving $\alpha_m$ and left-moving $\widetilde\alpha_m$ names used here. The compact coordinate quantization and its oscillator labels are the free-circle data defined in this item.

## Verification

1.1 The periodic wavefunction satisfies $P\psi_n=-i\partial_{x_0}e^{inx_0/R}=(n/R)\psi_n$. Choose a lift $\widetilde x_0\in\mathbb R$ of its center-of-mass coordinate. The zero-mode profile $\widetilde X^1_0=\widetilde x_0+\alpha'(n/R)\tau+wR\sigma$ has the stated momentum and winding: its $\tau$ derivative is $\alpha'n/R$, and its increment under $\sigma\mapsto\sigma+2\pi$ is $2\pi wR$. Writing $\widetilde X^1_0=(\alpha'/2)p_L(\tau+\sigma)+(\alpha'/2)p_R(\tau-\sigma)+\widetilde x_0$ gives $p_L+p_R=2n/R$ and $p_L-p_R=2wR/\alpha'$, so it reproduces that profile. At $w=0$, [F3] gives $\alpha_0=\widetilde\alpha_0=\sqrt{\alpha'/2}\,n/R$, fixing the zero-mode normalization used in $h$ and $\bar h$. [given, F1, F2, F3, algebra]

2.1 Put $a=n/R$ and $b=wR/\alpha'$. Then $p_L=a+b$ and $p_R=a-b$, so $\frac{\alpha'}4(p_L^2-p_R^2)=\frac{\alpha'}4((a+b)^2-(a-b)^2)=\alpha'ab=nw$. Subtracting the defined weights gives $h-\bar h=nw+N-\bar N$; hence the displayed level-matching condition is exactly $h=\bar h$. [given, step 1.1, algebra]

3.1 For fixed $k$, applying the two right-moving mode formulas in either order gives $\alpha_k\alpha_{-k}e_I=k(r_{R,k}+1)e_I$ and $\alpha_{-k}\alpha_ke_I=kr_{R,k}e_I$, hence their commutator is $kI$; the left-moving calculation is identical, and modes on different occupation slots commute. The matrix elements of creation and annihilation are transposes and complex conjugates, so the adjoint identities hold on $\mathscr D_R$. Testing a Hilbert adjoint against each coordinate vector forces precisely these shifted coefficients; square summability of those coefficients is exactly the stated maximal domain. This proves the full Hilbert adjoint identities, and finite coordinate truncations converge in both norm and each mode graph norm, giving the asserted core. Repeated creation from $e_{n,w;0,0}$ has coefficient $\prod_k\sqrt{k^{r_{L,k}+r_{R,k}}r_{L,k}!r_{R,k}!}$, so the displayed normalized occupation state equals $e_{n,w;\mathbf r_L,\mathbf r_R}$. Its norm and mutual orthogonality are therefore exactly those of the defined coordinate basis. [given, algebra] ∎

## Remarks

The oscillator grade is the free-sector grading variable; this carrier does not claim that the displayed labels alone impose BRST, GSO, or full physical-state constraints. The cited sources use different $\alpha/\widetilde\alpha$ labels for their chiral sectors; this definition follows the local $\tau-\sigma$/$\tau+\sigma$ convention of [[pthm-st-closed-classical-mode-expansion]], so $\alpha$ is right-moving and $\widetilde\alpha$ is left-moving. The zero-mode weights are unchanged by relabeling the two conventions.
