---
id: thm-ewald-total-pme-error-certificate
kind: theorem
title: "Total deterministic Ewald and particle-mesh error certificate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [alg-na-computed-fast-transforms-and-convolution, def-countable-choice, def-ewald-pme-cardinal-assignment-model, def-ewald-three-dimensional-periodic-source-data, def-full-rank-lattice-covolume-and-dual-lattice, lem-ewald-lattice-shell-gaussian-tail-controllers, lem-ewald-screened-coulomb-kernel-and-self-limit, thm-chain-rule, thm-ewald-alpha-independent-energy-and-potential, thm-ewald-pme-reciprocal-energy-force-error-bound, thm-ewald-real-reciprocal-cutoff-error-bounds, thm-na-arbitrary-length-fft-correctness-and-cost, thm-sine-and-cosine-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926/lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§§4–6, printed pp. 4–7: real and reciprocal cutoffs, forces, and the Ewald split."
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A theoretical and numerical comparison of various particle mesh routines (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§4 and Appendix D: explicitly statistical RMS force-error scope, distinguished here from the deterministic pointwise and per-particle certificate proved locally."
---

## Statement

Assume Countable Choice and a neutral finite point-source configuration on
$A\mathbb Z^3$ from [[def-ewald-three-dimensional-periodic-source-data]]. Fix
$\alpha>0$, real and reciprocal cutoffs $R,K_c\ge1$, a mesh with integers
$M_r\ge1$ and order $P\ge2$, and a finite symmetric retained set
$\mathcal K\subseteq\{k\in\mathbb Z^3\setminus\{0\}:|\kappa_k|\le K_c\}$
that is injective modulo $(M_1,M_2,M_3)$ and has $|k_r|<M_r/2$ and $D(k)\ne0$
for every $k\in\mathcal K$. Put $Q=\sum_i|q_i|$ and let
$$\mathcal B_{K_c}=\{k\in\mathbb Z^3\setminus\{0\}:|\kappa_k|\le K_c\},\qquad \mathcal M_{K_c}=\mathcal B_{K_c}\setminus\mathcal K.$$
This in-ball omitted set is finite. Write $M_R=\lfloor R\rfloor$,
$M_K=\lfloor K_c\rfloor$, $C_R=C_A$, and $C_K=C_{2\pi A^{-T}}$ for the shell
constants in [[lem-ewald-lattice-shell-gaussian-tail-controllers]]. Choose
integers $J_R\ge M_R$, $J_K\ge M_K$ such that
$2\alpha^2J_R(J_R+1)\ge3$ and
$\frac{1}{2\alpha^2}J_K(J_K+1)\ge3$. Let $U_3(\beta,M,J)$ be that supplier's
finite upper controller for $\sum_{m=M}^\infty(m+1)^3e^{-\beta m^2}$, and put
$$\begin{aligned} \overline B_R^U&=\frac{QC_R}{\sqrt\pi\alpha}U_3(\alpha^2,M_R,J_R),& \overline B_R^E&=\frac{Q^2C_R}{2\sqrt\pi\alpha}U_3(\alpha^2,M_R,J_R),& \overline B_R^{F,i}&=\frac{|q_i|QC_R}{\sqrt\pi}(2\alpha+\alpha^{-1})U_3(\alpha^2,M_R,J_R),\\ \overline B_K^U&=\frac{4\pi QC_K}{V}U_3((4\alpha^2)^{-1},M_K,J_K),& \overline B_K^E&=\frac{2\pi Q^2C_K}{V}U_3((4\alpha^2)^{-1},M_K,J_K),& \overline B_K^{F,i}&=\frac{4\pi|q_i|QC_K}{V}U_3((4\alpha^2)^{-1},M_K,J_K). \end{aligned}$$

For $\phi_s(r)=\operatorname{erfc}(\alpha r)/r$, define the finite real-space
potential at an off-source point by
$$S_R(x)=\sum_iq_i\sum_{\substack{\lambda\in\Lambda\\|x-x_i+\lambda|\le R}}\phi_s(|x-x_i+\lambda|),$$
and the finite real energy by
$$E_R=\frac12\sum_i\sum_j\sum_{\substack{\lambda\in\Lambda\\|x_i-x_j+\lambda|\le R}}'q_iq_j\phi_s(|x_i-x_j+\lambda|),$$
where the prime omits exactly $(j,\lambda)=(i,0)$. Let
$$F_{R,i}=-q_i\sum_{\substack{1\le j\le n,\ \lambda\in\Lambda\\(j,\lambda)\ne(i,0),\,|x_i-x_j+\lambda|\le R}}q_j\,\phi_s'(|x_i-x_j+\lambda|)\frac{x_i-x_j+\lambda}{|x_i-x_j+\lambda|}.$$
The cutoff index set is held fixed in this force sum; the cutoff indicator is
not differentiated. Set
$$\widetilde U(x)=S_R(x)+U_{M,\mathcal K}(x),$$
$$\widetilde E^\chi=E_R+E_{M,\mathcal K}^\chi-\frac{\alpha}{\sqrt\pi}\sum_iq_i^2,\qquad \widetilde F_i^\chi=F_{R,i}+F_{M,i}^\chi,$$
where $\chi=\mathrm{uncorr}$ uses the uncorrected energy and force of
[[thm-ewald-pme-reciprocal-energy-force-error-bound]], and $\chi=\mathrm{corr}$ uses
its optional diagonal self-corrected branch. For the uncorrected branch suppose
the derivative/gather residuals are $H_k$; the corrected branch uses the
energy-gradient gather, so $H_k=0$.

Suppose the computed finite outputs $\widehat U(x),\widehat E^\chi,\widehat
F_i^\chi$ have certified arithmetic radii $\varepsilon_U,\varepsilon_E,
\varepsilon_{F,i}\ge0$ relative to $\widetilde U,\widetilde E^\chi,
\widetilde F_i^\chi$, respectively. Define
$$\begin{aligned} \eta_U={}&\overline B_R^U+\overline B_K^U+Q\sum_{m\in\mathcal M_{K_c}}c_m+Q\sum_{k\in\mathcal K}c_kA_k(2+A_k)+\varepsilon_U,\\ \eta_E^{\mathrm{uncorr}}={}&\overline B_R^E+\overline B_K^E+\frac{Q^2}{2}\sum_{m\in\mathcal M_{K_c}}c_m+\frac{Q^2}{2}\sum_{k\in\mathcal K}c_kA_k(2+A_k)+\varepsilon_E,\\ \eta_E^{\mathrm{corr}}={}&\overline B_R^E+\overline B_K^E+\frac{Q^2}{2}\sum_{m\in\mathcal M_{K_c}}c_m+\frac{Q^2-\sum_iq_i^2}{2}\sum_{k\in\mathcal K}c_kA_k(2+A_k)+\varepsilon_E,\\ \eta_{F,i}^{\mathrm{uncorr}}={}&\overline B_R^{F,i}+\overline B_K^{F,i}+|q_i|Q\sum_{m\in\mathcal M_{K_c}}c_m|\kappa_m|+|q_i|Q\sum_{k\in\mathcal K}c_k[|\kappa_k|A_k+(1+A_k)B_k+(1+A_k)H_k]+\varepsilon_{F,i},\\ \eta_{F,i}^{\mathrm{corr}}={}&\overline B_R^{F,i}+\overline B_K^{F,i}+|q_i|Q\sum_{m\in\mathcal M_{K_c}}c_m|\kappa_m|+|q_i|(Q-|q_i|)\sum_{k\in\mathcal K}c_k[|\kappa_k|A_k+(1+A_k)B_k]+\varepsilon_{F,i}. \end{aligned}$$
Then, for every off-source $x$ and each particle $i$,
$$|\widehat U(x)-U_\alpha(x)|\le\eta_U,\qquad |\widehat E^\chi-E|\le\eta_E^\chi,\qquad \|\widehat F_i^\chi-F_i\|_2\le\eta_{F,i}^\chi.$$
Here $U_\alpha,E,F_i$ are the exact mean-zero periodic Ewald potential,
renormalized energy, and particle force. The finite omitted-mode sums
$\mathcal M_{K_c}$ explicitly charge every mode in the radial ball that the
mesh did not retain, including Nyquist modes. Missing arithmetic radii do not
produce a certificate; no RMS estimate is substituted for these deterministic
bounds.

For the formal exact-constant work count, let $\mathsf N_{\mathrm{img}}$ be
the total number of candidate real-image indices inspected in the finite
potential, energy, and force loops, and let $\mathsf N_{\mathrm{cert}}$ be the
total number of mode and finite controller entries inspected in constructing
the omitted-mode ledger and error certificate. Count each such outer-loop
inspection as one work unit and count the transform arithmetic in the formal
exact-constant model of [[thm-na-arbitrary-length-fft-correctness-and-cost]].
For fixed $P$, the finite evaluation uses
$$O\!\left(N_g\log(2N_g)+nP^3+\mathsf N_{\mathrm{img}}+\mathsf N_{\mathrm{cert}}\right)$$
work units, with at most three tensor transforms before optional
mesh-self correction. The correction adds
$$O\!\left(N_g\log(2N_g)+nP^6\right)$$
when its cyclic kernel is precomputed. These counts do not include interval
precision, elementary-function evaluation, memory traffic, bit complexity, or
the transform subroutine's integer factor search and phase evaluation; no
operation count is used as an accuracy bound.

## Facts & Assumptions

**Given:** Countable Choice; a neutral finite source configuration on a full-rank cell; $\alpha>0$, $R,K_c\ge1$, a finite admissible retained mode set $\mathcal K$; integer mesh dimensions and $P\ge2$; valid finite Gaussian tail-controller indices $J_R,J_K$; and actual arithmetic radii for the finite computations.

[A1] Countable Choice is required by the Gaussian periodization and mean-zero periodic Poisson theorem ([[def-countable-choice]]).

[F1] $\Lambda=A\mathbb Z^3$, $V=|\det A|$, $\kappa_k=2\pi A^{-T}k$, the data are neutral, and source positions are distinct ([[def-ewald-three-dimensional-periodic-source-data]]).

[F2] The exact off-source potential and renormalized energy are the absolutely convergent Ewald formulas with reciprocal coefficient $c_k$ and self term $-\alpha\sum_iq_i^2/\sqrt\pi$; the exact particle force differentiates the real and reciprocal Ewald terms under the collision-free convention ([[thm-ewald-alpha-independent-energy-and-potential]], [[thm-ewald-real-reciprocal-cutoff-error-bounds]]).

[F3] The finite real/reciprocal Ewald omissions are bounded by the displayed $B_R^U,B_R^E,B_R^{F,i},B_K^U,B_K^E,B_K^{F,i}$ formulas, and replacing each $T_3$ by $U_3$ gives a finite certified upper bound ([[thm-ewald-real-reciprocal-cutoff-error-bounds]]).

[F4] The reciprocal particle-mesh potential, energy, and force aliases have the deterministic pointwise/per-particle bounds in [[thm-ewald-pme-reciprocal-energy-force-error-bound]]; the optional self-corrected energy/force branch has its corresponding improved retained-mode bounds there.

[F5] A full-rank lattice has only finitely many points in a bounded ball; equivalently $|\kappa_k|\le K_c$ implies $|k|\le \|A^T\|_2K_c/(2\pi)$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]).

[F6] The radii $\varepsilon_U,\varepsilon_E,\varepsilon_{F,i}$ bound the actual finite arithmetic outputs' differences from the exact-real finite truncated expressions defined in the Statement (given arithmetic enclosure interface).

[F7] Differentiating the finite source coefficient gives $\nabla_{x_i}\rho_k=q_i\nabla_xa_k(t_i)=-iq_i\kappa_ka_k(t_i)$ by the chain rule and sine/cosine derivatives ([[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]], [[def-ewald-three-dimensional-periodic-source-data]]).

[F8] In the formal exact-constant model, an arbitrary-length one-dimensional DFT is exact and costs $O(M\log(2M))$ arithmetic operations at length $M$; integer factor search and interval/phase evaluation are excluded ([[alg-na-computed-fast-transforms-and-convolution]], [[thm-na-arbitrary-length-fft-correctness-and-cost]]).

## Proof

**Proof technique:** direct.

1.1 From [F1], $\kappa_k=2\pi A^{-T}k$, so $|\kappa_k|\le K_c$ implies $|k|\le\|A^T\|_2K_c/(2\pi)$. Only finitely many integer vectors lie in that bounded ball by [F5]. Therefore $\mathcal B_{K_c}$ and $\mathcal M_{K_c}$ are finite, and all missing in-ball sums in the Statement are finite. [F1, F5, algebra]

1.2 Choose $J_R,J_K$ as in the Statement. The finite Gaussian controllers $U_3$ bound the exact real and reciprocal shell tails by [F3], giving $\overline B_R^U,\overline B_R^E,\overline B_R^{F,i},\overline B_K^U,\overline B_K^E,\overline B_K^{F,i}$. [given, F3]

1.3 For each omitted in-ball mode $m\in\mathcal M_{K_c}$, $|\rho_m|\le Q$ and $|e^{i\kappa_m\cdot x}|=1$ give potential magnitude at most $c_mQ$. Its energy term is $\frac12c_m|\rho_m|^2\le\frac12c_mQ^2$. By [F7], differentiating its finite reciprocal energy term gives exact force $-q_ic_m\operatorname{Re}(\overline{\rho_m}\nabla_xa_m(t_i))$, whose magnitude is at most $|q_i|c_m|\rho_m||\kappa_m|\le|q_i|Qc_m|\kappa_m|$. Summing these inequalities over the finite omitted set accounts for every in-ball mode, including modes excluded by Nyquist restrictions. [A1, F1, F2, F5, F7, algebra]

1.4 The retained-mode mesh errors are bounded by [F4]. In the uncorrected energy branch this is $\frac12Q^2\sum_{k\in\mathcal K}c_kA_k(2+A_k)$; in the corrected branch it is $\frac12(Q^2-\sum_iq_i^2)\sum_{k\in\mathcal K}c_kA_k(2+A_k)$. The force contributions are the corresponding $|q_i|Q$ and $|q_i|(Q-|q_i|)$ sums in [F4], and the retained potential contribution is $Q\sum_{k\in\mathcal K}c_kA_k(2+A_k)$. [F4]

2.1 The exact Ewald series is the sum of the full real-space term, all retained reciprocal modes, all in-ball omitted reciprocal modes, and the reciprocal tail beyond $K_c$, with the exact self constant in the energy. The finite approximations include the real terms through $R$, the selected mesh approximation on $\mathcal K$, and that same self constant. Thus their exact-real differences split into the real cutoff tail, the reciprocal shell tail, the finite omitted in-ball terms, and the retained mesh alias/differentiation error. Step 1.2 bounds the real and reciprocal cutoff tails, step 1.3 accounts for every omitted in-ball mode, and step 1.4 bounds the retained mesh error. By [F3], [F4], and the triangle inequality, the absolute values or norms of these parts sum to the first terms displayed in each $\eta$. [A1, F2, F3, F4, step 1.2, step 1.3, step 1.4, algebra]

3.1 The arithmetic assumptions [F6] give $|\widehat U-\widetilde U|\le\varepsilon_U$, $|\widehat E^\chi-\widetilde E^\chi|\le\varepsilon_E$, and $\|\widehat F_i^\chi-\widetilde F_i^\chi\|_2\le\varepsilon_{F,i}$. Applying the triangle inequality to step 2.1 yields the three stated certificates. If an arithmetic radius is unavailable, the corresponding inequality has no supplied numerical right-hand side and no certificate is returned. [F6, step 2.1, algebra]

4.1 For fixed $P\ge2$, the finite support enclosure gives at most $P+2\le2P$ candidates per coordinate. Thus each particle's spread and potential/force gathers use $O(P^3)$ support tuples; grid initialization costs $O(N_g)$ and is absorbed by the transform count. A tensor transform along coordinate $r$ consists of $N_g/M_r$ one-dimensional transforms of length $M_r$. By [F8] this costs $O(N_g\log(2M_r))$, and summing over the three coordinates gives $O(N_g\log(2N_g))$. The uncorrected computation uses one forward transform and at most two inverse/gather transforms. The finite real-image and mode/controller loops contribute $\mathsf N_{\mathrm{img}}+\mathsf N_{\mathrm{cert}}$ by definition, proving the stated total count. The optional correction adds one transform to form its cyclic kernel and at most $(P+2)^6=O(P^6)$ support-pair products per particle, which gives its stated cost. The arithmetic radii are certified separately and do not follow from this operation count. [F8, algebra] ∎

