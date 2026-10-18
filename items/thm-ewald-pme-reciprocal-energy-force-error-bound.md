---
id: thm-ewald-pme-reciprocal-energy-force-error-bound
kind: theorem
title: "Deterministic reciprocal particle-mesh Ewald potential, energy, and force bounds"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-countable-choice, def-ewald-three-dimensional-periodic-source-data, def-ewald-pme-cardinal-assignment-model, lem-ewald-pme-derivative-window-alias-bound, lem-ewald-pme-spline-alias-and-dft-normalization, thm-chain-rule, thm-ewald-alpha-independent-energy-and-potential, thm-sine-and-cosine-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A theoretical and numerical comparison of various particle mesh routines (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§§3–4, equations (21)–(42), Appendix E: mesh aliases, distinct differentiation choices, and the RMS scope of the paper's error model."
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926/lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§§5–6, equations (29)–(42), printed pp. 5–7: reciprocal energy and its force differentiation."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and neutral finite source data on the cell $A\mathbb Z^3$
from [[def-ewald-three-dimensional-periodic-source-data]]. Fix $\alpha>0$,
integers $M_r\ge1$, an order $P\ge2$, and a finite symmetric set
$\mathcal K\subset\mathbb Z^3\setminus\{0\}$ whose signed representatives are
injective modulo $(M_1,M_2,M_3)$ and satisfy $|k_r|<M_r/2$. Require $D(k)\ne0$
for every $k\in\mathcal K$, and let $c_k=4\pi e^{-|\kappa_k|^2/(4\alpha^2)}/(V|\kappa_k|^2)$ be the positive Ewald coefficient. Use the assignment factors $a_k,b_k,\rho_k,z_k$ of [[def-ewald-pme-cardinal-assignment-model]], and put $Q=\sum_j|q_j|$.

For a query point $x$ write $t=A^{-1}x$ modulo $\mathbb Z^3$ and define the retained exact and mesh reciprocal potentials by
$$U_{\mathcal K}(x)=\sum_{k\in\mathcal K}c_k\operatorname{Re}(\rho_k\overline{a_k(t)}),\qquad U_{M,\mathcal K}(x)=\sum_{k\in\mathcal K}c_k\operatorname{Re}(z_k\overline{b_k(t)}).$$
Define $E_{\mathcal K}=\frac12\sum_{k\in\mathcal K}c_k|\rho_k|^2$ and $E_{M,\mathcal K}=\frac12\sum_{k\in\mathcal K}c_k|z_k|^2$. For each mode let $A_k$ be the source-alias controller in [[lem-ewald-pme-spline-alias-and-dft-normalization]], and let $B_k$ be the derivative-alias controller in [[lem-ewald-pme-derivative-window-alias-bound]].

Let a complex-vector derivative/gather value $d_k(t)$ satisfy $\|d_k(t)-\mathfrak d_k(t)\|_2\le H_k$ for a stated $H_k\ge0$, where $\mathfrak d_k$ is the declared derivative branch of [[def-ewald-pme-cardinal-assignment-model]] and $\nabla_x=A^{-T}\nabla_t$. The uncorrected mesh and exact reciprocal forces are
$$F^d_{M,i}=-q_i\sum_{k\in\mathcal K}c_k\operatorname{Re}(\overline{z_k}d_k(t_i)),\qquad F_{\mathcal K,i}=-q_i\sum_{k\in\mathcal K}c_k\operatorname{Re}(\overline{\rho_k}\nabla_xa_k(t_i)).$$
Then for every query point $x$,
$$|U_{M,\mathcal K}(x)-U_{\mathcal K}(x)|\le Q\sum_{k\in\mathcal K}c_kA_k(2+A_k),\qquad |E_{M,\mathcal K}-E_{\mathcal K}|\le\frac{Q^2}{2}\sum_{k\in\mathcal K}c_kA_k(2+A_k),$$
and for every particle $i$,
$$\|F^d_{M,i}-F_{\mathcal K,i}\|_2\le |q_i|Q\sum_{k\in\mathcal K}c_k\bigl[|\kappa_k|A_k+(1+A_k)B_k+(1+A_k)H_k\bigr].$$

For the declared energy-gradient gather $d_k=\mathfrak d_k$ (so $H_k=0$), the mesh force is $-\nabla_{x_i}E_{M,\mathcal K}$ wherever the classical derivative exists. This holds everywhere for $P\ge3$ and off the assignment knots for $P=2$; at a $P=2$ knot the selected one-sided derivative or its average is a procedure value, with the same bound but without a differentiability claim.

The optional diagonal self correction is
$$C_M=\frac12\sum_iq_i^2\sum_{k\in\mathcal K}c_k(|b_k(t_i)|^2-1),\qquad E^{\rm corr}_{M,\mathcal K}=E_{M,\mathcal K}-C_M.$$
For its finite cyclic implementation, set $h_k=c_k/|D(k)|^2$ on $\mathcal K$,
$$\gamma_d=\sum_{k\in\mathcal K}h_ke^{-2\pi i\sum_rk_rd_r/M_r},\qquad S_i=\sum_{\ell,m\in\mathcal G}w_\ell(t_i)w_m(t_i)\gamma_{\ell-m}.$$
Then $\gamma$ is real and even, $S_i=\sum_{k\in\mathcal K}c_k|b_k(t_i)|^2$, and, on every differentiable branch (or as the same declared one-sided branch at a $P=2$ knot),
$$\nabla_{x_i}(S_i/2)=\sum_{\ell,m\in\mathcal G}w_\ell(t_i)\nabla_xw_m(t_i)\gamma_{\ell-m}.$$
Consequently this local cyclic-kernel expression computes $C_M$ and its derivative exactly in real arithmetic.
The finite tensor-transform gathers also have the exact real-arithmetic forms
$$U_{M,\mathcal K}(x)=\operatorname{Re}\sum_{\ell\in\mathcal G}w_\ell(t_x)u_\ell,\qquad u_\ell=\sum_{k\in\mathcal K}\frac{c_kz_k}{D(k)}e^{2\pi i\sum_rk_r\ell_r/M_r},$$
$$F_{M,i}=-q_i\operatorname{Re}\sum_{\ell\in\mathcal G}\lambda_\ell\nabla_xw_\ell(t_i),\qquad \lambda_\ell=\sum_{k\in\mathcal K}\frac{c_k\overline{z_k}}{\overline{D(k)}}e^{-2\pi i\sum_rk_r\ell_r/M_r}.$$
These identities hold with the declared derivative branch, including the selected one-sided $P=2$ knot value.
It satisfies
$$|E^{\rm corr}_{M,\mathcal K}-E_{\mathcal K}|\le\frac{Q^2-\sum_iq_i^2}{2}\sum_{k\in\mathcal K}c_kA_k(2+A_k).$$
In the energy-gradient branch its exactly differentiated force is
$$F^{\rm corr}_{M,i}=-q_i\sum_{k\in\mathcal K}c_k\operatorname{Re}\bigl(\overline{z_k-q_ib_k(t_i)}\,\mathfrak d_k(t_i)\bigr),$$
and
$$\|F^{\rm corr}_{M,i}-F_{\mathcal K,i}\|_2\le |q_i|(Q-|q_i|)\sum_{k\in\mathcal K}c_k\bigl[|\kappa_k|A_k+(1+A_k)B_k\bigr].$$
The corrected force is the negative classical energy gradient in the same differentiable cases; at a $P=2$ knot it is only the declared branch value. No pointwise error estimate here replaces an RMS estimate, and no claim is made that a different spectral differentiation rule is the gradient of the mesh energy.

## Facts & Assumptions

**Given:** Countable Choice; a neutral finite source configuration, $A,V$, $\kappa_k$, and $a_k(t)=e^{-i\kappa_k\cdot x}$; an order-$P$ periodic mesh assignment; a finite symmetric retained mode set with $D(k)\ne0$; and a derivative/gather residual $H_k$.

[A1] Countable Choice is assumed by the Gaussian Poisson and mean-zero periodic Ewald suppliers ([[def-countable-choice]]).

[F1] The cell coordinates obey $x=At$, $\kappa_k=2\pi A^{-T}k$, the source coefficient is $\rho_k=\sum_jq_je^{-i\kappa_k\cdot x_j}$, and the charges are real ([[def-ewald-three-dimensional-periodic-source-data]]).

[F2] The positive coefficient $c_k=4\pi e^{-|\kappa_k|^2/(4\alpha^2)}/(V|\kappa_k|^2)$ and exact retained reciprocal energy are those in the alpha-independent Ewald formula ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F3] For each retained mode, $|b_k-a_k|\le A_k$, $|b_k|\le1+A_k$, and $|z_k-\rho_k|\le QA_k$; $A_k$ has finite p-series remainder controllers ([[lem-ewald-pme-spline-alias-and-dft-normalization]]).

[F4] The declared derivative branch obeys $\|\mathfrak d_k-\nabla_xa_k\|_2\le B_k$, including the finite selected branch at $P=2$ knots ([[def-ewald-pme-cardinal-assignment-model]], [[lem-ewald-pme-derivative-window-alias-bound]]).

[F5] $\nabla_xa_k=-i\kappa_ka_k$; the derivative follows from the sine/cosine derivatives and the chain rule ([[def-ewald-three-dimensional-periodic-source-data]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[F6] The exact retained reciprocal potential is $\sum_{k\in\mathcal K}c_k\rho_k e^{i\kappa_k\cdot x}$, and the reciprocal energy is $\frac12\sum_{k\in\mathcal K}c_k|\rho_k|^2$ ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F7] The mesh factors are finite sums of the assignment weights, $\nabla_x=A^{-T}\nabla_t$, and the declared branch is classical wherever the derivative exists; the chain rule differentiates these factors componentwise there ([[def-ewald-pme-cardinal-assignment-model]], [[thm-chain-rule]]).

[F8] The periodic assignment weights are real, $b_k(t)=\bigl(\sum_{\ell\in\mathcal G}w_\ell(t)e^{-2\pi i\sum_rk_r\ell_r/M_r}\bigr)/\overline{D(k)}$, and $D(-k)=\overline{D(k)}$ ([[def-ewald-pme-cardinal-assignment-model]]).

## Proof

**Proof technique:** direct.

1.1 Under the Countable Choice assumption [A1], the Ewald supplier gives the reciprocal potential and energy formulas [F6]. Because the charges and assignment weights are real, $c_{-k}=c_k$, $\rho_{-k}=\overline{\rho_k}$, $a_{-k}=\overline{a_k}$, $D(-k)=\overline{D(k)}$, $b_{-k}=\overline{b_k}$, and $z_{-k}=\overline{z_k}$. Thus the sums over symmetric $\mathcal K$ are real and their displayed real-part forms agree with the reciprocal potentials. By [F3], $|\rho_k|\le Q$, $|z_k-\rho_k|\le QA_k$, and $|z_k|\le Q(1+A_k)$. Since $e^{i\kappa_k\cdot x}=\overline{a_k(t)}$, [F6] gives the exact reciprocal potential. For each mode, $|z_k\overline{b_k}-\rho_k\overline{a_k}|\le |z_k-\rho_k||a_k|+|z_k||b_k-a_k|\le QA_k+Q(1+A_k)A_k=QA_k(2+A_k)$ using $|a_k|=1$. Sum with $c_k>0$ to obtain the potential bound. [given, A1, F1, F2, F3, F6, algebra]


1.2 The identity $\bigl||z_k|^2-|\rho_k|^2\bigr|\le |z_k-\rho_k|(|z_k|+|\rho_k|)$ and [F3] give $\bigl||z_k|^2-|\rho_k|^2\bigr|\le QA_k\bigl(Q(1+A_k)+Q\bigr)=Q^2A_k(2+A_k)$. Multiplying by $c_k/2$ and summing proves the energy bound. [F2, F3, algebra]


1.3 The mode sums are finite. For $P\ge3$, and for $P=2$ off the assignment knots, [F4] supplies the classical derivatives. Since $z_k=\sum_jq_jb_k(t_j)$ by [F3], [F7] gives $\nabla_{x_i}z_k=q_i\nabla_xb_k(t_i)$. Differentiating $\frac12c_k|z_k|^2$ yields $q_ic_k\operatorname{Re}(\overline{z_k}\nabla_xb_k(t_i))$, so negating and summing proves $F^\nabla_{M,i}=-\nabla_{x_i}E_{M,\mathcal K}$ in those differentiable cases. Also $\nabla_{x_i}\rho_k=q_i\nabla_xa_k(t_i)$ by [F5]; differentiating $\frac12c_k|\rho_k|^2$ gives $q_ic_k\operatorname{Re}(\overline{\rho_k}\nabla_xa_k(t_i))$, so the negative derivative is exactly $F_{\mathcal K,i}$. At a $P=2$ knot the chosen derivative is a procedure value, not a classical derivative. [F3, F4, F5, F6, F7, algebra]


1.4 Decompose the force integrand as $\overline{z_k}d_k-\overline{\rho_k}\nabla_xa_k=\overline{(z_k-\rho_k)}\nabla_xa_k+\overline{z_k}(\mathfrak d_k-\nabla_xa_k)+\overline{z_k}(d_k-\mathfrak d_k)$. By [F3], [F4], the given residual bound $H_k$, and $\|\nabla_xa_k\|_2=|\kappa_k|$ from [F5], its norm is at most $Q[|\kappa_k|A_k+(1+A_k)B_k+(1+A_k)H_k]$. Multiply by $|q_i|c_k$ and sum to prove the uncorrected force bound. [given, F3, F4, F5, algebra]


1.5 Expanding $|z_k|^2$ with $z_k=\sum_jq_jb_k(t_j)$ shows that subtracting $C_M$ replaces the diagonal terms $q_i^2|b_k(t_i)|^2$ by $q_i^2$. In $|\rho_k|^2$, the diagonal terms are $q_i^2|a_k(t_i)|^2=q_i^2$. The remaining difference is a sum over $i\ne j$ of $q_iq_j(b_k(t_i)\overline{b_k(t_j)}-a_k(t_i)\overline{a_k(t_j)})/2$. Each parenthesized difference is bounded by $A_k(1+A_k)+A_k=A_k(2+A_k)$ using [F3]; and $\sum_{i\ne j}|q_iq_j|=Q^2-\sum_iq_i^2$. Multiplication by $c_k$ and summation proves the corrected energy estimate. [F2, F3, algebra]


1.6 Because $\mathcal K$ is symmetric and $h_{-k}=h_k$, the finite sum defining $\gamma$ is real and satisfies $\gamma_{-d}=\gamma_d$. Put $B_k(t)=\sum_{\ell\in\mathcal G}w_\ell(t)e^{-2\pi i\sum_rk_r\ell_r/M_r}$. Expanding the finite sums gives $S_i=\sum_{k\in\mathcal K}h_k|B_k(t_i)|^2=\sum_{k\in\mathcal K}c_k|b_k(t_i)|^2$ by [F8]. Subtracting $\frac12\sum_iq_i^2\sum_kc_k$ therefore gives exactly $C_M$. [F2, F8, algebra]


1.7 By [F8], $\overline{b_k(t)}=\sum_\ell w_\ell(t)e^{2\pi i\sum_rk_r\ell_r/M_r}/D(k)$. Also differentiating the finite sum for $b_k$ gives $\mathfrak d_k(t)=\sum_\ell\nabla_xw_\ell(t)e^{-2\pi i\sum_rk_r\ell_r/M_r}/\overline{D(k)}$ on a classical branch and on the declared one-sided branch. Substituting these identities into the finite mode formulas for $U_{M,\mathcal K}$ and $F_{M,i}$ and interchanging the finite mode and grid sums yields exactly the two tensor-transform gather forms in the Statement. [F7, F8, algebra]


2.1 Differentiate the finite sum $S_i$ on any declared derivative branch. Symmetry $\gamma_{\ell-m}=\gamma_{m-\ell}$ makes the two product-rule sums equal, so $\nabla_{x_i}(S_i/2)=\sum_{\ell,m}w_\ell(t_i)\nabla_xw_m(t_i)\gamma_{\ell-m}$. The identity is algebraic in the one-sided polynomial derivatives as well, so it holds for the declared $P=2$ knot branch values. [F7, step 1.6, algebra]


3.1 Where the energy-gradient derivative exists, [F7] gives $\nabla_{x_i}C_M=q_i^2\sum_kc_k\operatorname{Re}(\overline{b_k(t_i)}\nabla_xb_k(t_i))$. By step 2.1 this is also the finite cyclic-kernel expression displayed in the Statement. Subtracting this gradient from that of $E_M$ yields the displayed corrected force. At a $P=2$ knot the same algebra defines the selected corrected branch, without claiming it is a gradient. Put $Q_i=Q-|q_i|=\sum_{j\ne i}|q_j|$, $z'_k=z_k-q_ib_k(t_i)$, and $\rho'_k=\rho_k-q_ia_k(t_i)$. Since $\operatorname{Re}(\overline{a_k}\nabla_xa_k)=\operatorname{Re}(-i\kappa_k)=0$, the exact force is unchanged when $\rho_k$ is replaced by $\rho'_k$. The finite sums and [F3] give $|z'_k-\rho'_k|\le Q_iA_k$ and $|z'_k|\le Q_i(1+A_k)$. Repeating the force decomposition in step 1.4 with these primed coefficients and $H_k=0$ proves the corrected force bound. [F3, F4, F5, F7, step 1.3, step 1.4, step 2.1, algebra] ∎

