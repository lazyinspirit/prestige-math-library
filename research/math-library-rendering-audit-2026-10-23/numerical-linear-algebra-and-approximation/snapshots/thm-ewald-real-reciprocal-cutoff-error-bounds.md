---
id: thm-ewald-real-reciprocal-cutoff-error-bounds
kind: theorem
title: "Explicit real and reciprocal Ewald potential, energy, and force tail bounds"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-countable-choice,
    def-ewald-three-dimensional-periodic-source-data,
    lem-ewald-lattice-shell-gaussian-tail-controllers,
    lem-ewald-screened-coulomb-kernel-and-self-limit,
    thm-chain-rule,
    thm-continuous-partial-derivatives-imply-total-differentiability,
    thm-ewald-alpha-independent-energy-and-potential,
    thm-sine-and-cosine-derivatives,
    thm-uniform-derivative-limit-on-a-closed-interval,
    thm-uniform-limit-continuous-real-functions
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a
        Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926\
        /lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§§4–6, printed pp. 4–7: Gaussian real-space and reciprocal-space decay
        and their differentiated force formulas."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture
        notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_No\
        tes.pdf"
      locator: "Chapter 7, printed pp. 85–90, equations (235)–(256): real and
        reciprocal cutoff terms and Ewald forces."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the neutral finite configuration and full-rank cell of
[[def-ewald-three-dimensional-periodic-source-data]]. Fix $\alpha>0$. Let
$Q=\sum_i|q_i|$, choose real and reciprocal cutoffs $R,K\ge1$, and put
$M_R=\lfloor R\rfloor$, $M_K=\lfloor K\rfloor$. Let $C_R=C_A$ be the shell
constant for $\Lambda=A\mathbb Z^3$ and $C_K=C_{2\pi A^{-T}}$ the shell constant
for the angular reciprocal lattice. For the real-space cutoff, retain all
$(i,j,\lambda)$ with $|x_i-x_j+\lambda|\le R$ except $(i,i,0)$. For the
reciprocal cutoff, retain all $k\ne0$ with $|\kappa_k|\le K$. Use the
$T_3(\beta,M)$ controller of
[[lem-ewald-lattice-shell-gaussian-tail-controllers]]. Then the omitted tails
in the exact Ewald potential, energy, and particle force satisfy
$$B_R^U=\frac{QC_R}{\sqrt\pi\alpha}T_3(\alpha^2,M_R),\qquad B_R^E=\frac{Q^2C_R}{2\sqrt\pi\alpha}T_3(\alpha^2,M_R),$$
$$B_R^{F,i}=\frac{|q_i|QC_R}{\sqrt\pi}(2\alpha+\alpha^{-1}) T_3(\alpha^2,M_R),$$
and
$$B_K^U=\frac{4\pi QC_K}{V}T_3((4\alpha^2)^{-1},M_K),\qquad B_K^E=\frac{2\pi Q^2C_K}{V}T_3((4\alpha^2)^{-1},M_K),$$
$$B_K^{F,i}=\frac{4\pi|q_i|QC_K}{V} T_3((4\alpha^2)^{-1},M_K).$$
For a certified finite value, replace each $T_3$ by the corresponding finite
upper controller $U_3$. The real force is evaluated only away from collisions;
no field bound is asserted at a point source.

The exact force is the negative gradient of the renormalized energy. With
$r_{ij\lambda}=|x_i-x_j+\lambda|$ and $a_k(t_i)=e^{-i\kappa_k\cdot x_i}$,
it is
$$F_i=-q_i\sum_{j=1}^n\sum_{\lambda\in\Lambda}'q_j\phi_s'(r_{ij\lambda})\frac{x_i-x_j+\lambda}{r_{ij\lambda}}-q_i\sum_{k\ne0}c_k\operatorname{Re}(\overline{\sigma_k}\nabla_xa_k(t_i)).$$
The prime excludes only $(j,\lambda)=(i,0)$; the absolutely convergent
reciprocal sum is real by pairing $k$ and $-k$.

## Facts & Assumptions

**Given:** Countable Choice, a neutral finite source configuration on $A\mathbb Z^3$, $\alpha>0$,
$R,K\ge1$, and the real/reciprocal Ewald formulas of
[[thm-ewald-alpha-independent-energy-and-potential]].

[A1] Countable Choice is part of the Ewald formulas' Gaussian Poisson and periodic distribution prerequisites ([[def-countable-choice]]).

[F1] $\phi_s(r)=\operatorname{erfc}(\alpha r)/r\le e^{-\alpha^2r^2}/(\sqrt\pi\alpha r^2)$ and $|\phi_s'(r)|\le(2\alpha/\sqrt\pi)e^{-\alpha^2r^2}/r+e^{-\alpha^2r^2}/(\sqrt\pi\alpha r^3)$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F2] Every translate of either lattice has at most $C_B(m+1)^3$ points in the shell $m\le|x|<m+1$, and the resulting Gaussian-polynomial tail is bounded by $T_3$ or its finite controller $U_3$ ([[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

[F3] The reciprocal coefficient is $c_k=4\pi e^{-|\kappa_k|^2/(4\alpha^2)}/(V|\kappa_k|^2)$ and $|\sigma_k|\le Q$ ([[thm-ewald-alpha-independent-energy-and-potential]]).

[F4] The off-source potential and renormalized energy have the absolutely convergent Ewald formulas displayed in [[thm-ewald-alpha-independent-energy-and-potential]].

[F5] Continuously differentiable partial sums whose derivatives converge uniformly on a closed interval and whose values converge at one point have a differentiable limit with the termwise derivative ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F6] Away from collisions, kernel and reciprocal summands are differentiable in the source coordinates by the chain rule and the sine/cosine derivatives ([[thm-chain-rule]], [[thm-sine-and-cosine-derivatives]]).

[F7] Uniform limits of continuous real functions are continuous, and a real map with continuous partial derivatives on a neighborhood is totally differentiable ([[thm-uniform-limit-continuous-real-functions]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Proof

**Proof technique:** direct.

1.1 Fix a collision-free configuration and choose a small closed product of coordinate balls around its source positions, using local torus lifts, that remains collision-free. Finitely many nearby nonself images then stay a positive distance from the singularity. For large real-space shell index $m$, [F1] bounds the kernel by a constant times $e^{-\alpha^2m^2}$ and its first position derivatives by $(2\alpha+\alpha^{-1})e^{-\alpha^2m^2}/\sqrt\pi$. [F2] bounds the shell count uniformly over every translate; since the source-difference vectors stay in a bounded set, $|\lambda|\to\infty$ forces the corresponding distance to infinity uniformly. Thus the real energy series and each first-derivative series converge uniformly on this product. Finite partial sums are continuously differentiable and their values converge at one point by [F4]. Under [A1], apply [F5] along each real coordinate line to justify termwise differentiation of the real energy. [A1, F1, F2, F4, F5]

1.2 For the reciprocal energy, [F3] gives $|\sigma_k|\le Q$ and Gaussian decay of $c_k$, while [F6] gives $|\nabla_{x_i}\sigma_k|=|q_i||\kappa_k|$. The derivative of each summand $\frac12c_k|\sigma_k|^2$ is bounded by $c_kQ|q_i||\kappa_k|$. All nonzero modes in shells $m\ge1$ therefore have a summable position-uniform majorant $C(m+1)^3e^{-m^2/(4\alpha^2)}$ by [F2]; the remaining bounded ball contains finitely many modes because the reciprocal lattice is full rank. The energy summands themselves are bounded by $Q^2c_k/2$, whose shell sum also converges by [F2]–[F3]. Thus the reciprocal energy and all its first-derivative series converge uniformly on the same product. Finite partial sums have values converging at one point by [F4], so [F5] gives their termwise derivatives along every coordinate line. [A1, F2, F3, F4, F5, F6]

1.3 Under Countable Choice [A1], use the Ewald representation [F4]. For $r>R$, the shell index $m$ is at least $M_R\ge1$. By [F1], each omitted real potential term is at most $e^{-\alpha^2m^2}/(\sqrt\pi\alpha m^2)$. The shell count [F2] and $m^{-2}\le1$ bound the total image tail for one source by $C_R(\sqrt\pi\alpha)^{-1}T_3(\alpha^2,M_R)$. Summing $|q_i|$ gives $B_R^U$. [given, A1, F1, F2, F4, algebra]

1.4 For a reciprocal mode in the omitted shell $m\le|\kappa_k|<m+1$, with $m\ge M_K\ge1$, [F3] gives the potential summand bound $(4\pi Q/V)e^{-m^2/(4\alpha^2)}/m^2$. Multiply by [F2], use $m^{-2}\le1$, and sum to obtain $B_K^U$. The energy summand is one half the coefficient times $|\sigma_k|^2\le Q^2$, so the same count yields $B_K^E$. [given, A1, F2, F3, algebra]

2.1 Each coordinate derivative obtained in steps 1.1–1.2 is a locally uniform limit of continuous finite-sum derivatives, hence is continuous by [F7]. The open collision-free configuration set is a finite-dimensional Euclidean open set in local lifts. Applying the continuous-partials clause of [F7] shows the Ewald energy is totally differentiable there, with the termwise derivatives computed below as its gradient. [step 1.1, step 1.2, F7]

2.2 In a finite real-space partial sum truncated by the symmetric condition $|\lambda|\le L$, differentiating terms with $x_i$ in the first position gives one half of $q_i\sum_{j,\lambda}'q_j\nabla\phi_s(|x_i-x_j+\lambda|)$. Terms with $x_i$ in the second position give $-\frac12q_i\sum_{j,\lambda}'q_j\nabla\phi_s(|x_j-x_i+\lambda|)$. By [F6] and the chain rule, $\nabla\phi_s(|y|)=\phi_s'(|y|)y/|y|$ for $y\ne0$, so this radial vector gradient is odd. Reindexing the second sum by $\lambda\mapsto-\lambda$ preserves the finite truncation and the excluded self term, and makes it equal to the first half. Passing to the limit is justified by step 1.1, so the full real energy gradient is $q_i\sum_{j,\lambda}'q_j\phi_s'(r_{ij\lambda})(x_i-x_j+\lambda)/r_{ij\lambda}$. [step 1.1, F1, F4, F6, algebra]

3.1 For each reciprocal mode, [F6] gives $\nabla_{x_i}\sigma_k=-iq_i\kappa_k a_k(t_i)$. In real and imaginary coordinates, $\nabla|\sigma_k|^2=2\operatorname{Re}(\overline{\sigma_k}\nabla\sigma_k)$, so differentiating a finite reciprocal partial energy gives $q_i\sum_kc_k\operatorname{Re}(\overline{\sigma_k}\nabla_xa_k(t_i))$. Step 1.2 justifies passage to the full sum. The constant self term has zero derivative. Negating the real gradient in step 2.2 and this reciprocal gradient gives the force formula in the Statement; opposite reciprocal modes are conjugate pairs, so their sum is real. [step 1.2, step 2.2, F3, F4, F6, algebra]

3.2 The real energy has the factor $1/2$ and charge-pair absolute sum at most $Q^2$, so the same shell estimate as in step 1.3 gives $B_R^E$. The radial derivative bound [F1] and $r\ge m\ge1$ imply $|\phi_s'(r)|\le(2\alpha+\alpha^{-1})e^{-\alpha^2m^2}/\sqrt\pi$. The real force formula proved in step 2.2, the shell count [F2], and $|q_i|\sum_j|q_j|=|q_i|Q$ give exactly $B_R^{F,i}$. [given, F1, F2, step 2.2, algebra]

4.1 By the reciprocal force formula in step 3.1, each omitted reciprocal force mode has magnitude at most $(4\pi|q_i|Q/V)e^{-|\kappa_k|^2/(4\alpha^2)}/|\kappa_k|$, using $|\nabla_xa_k|=|\kappa_k|$ from [F6]. Since $|\kappa_k|\ge m\ge1$, this is at most $(4\pi|q_i|Q/V)e^{-m^2/(4\alpha^2)}$. The shell count [F2] and sum over $m\ge M_K$ give $B_K^{F,i}$. [A1, step 3.1, F2, F3, F6, given, algebra]

5.1 The shell bounds are uniform in every translate, so no source-position dependence was introduced. Replacing $T_3$ by its finite upper controller preserves each inequality. Adding the real and reciprocal omitted terms by the triangle inequality gives the total Ewald cutoff error for potential, energy, and force. [step 1.3, step 3.2, step 1.4, step 4.1, F2, algebra] ∎

## Remarks

- The constants $C_R$ and $C_K$ depend on the cell shape through the two
  lattice bases. The estimate does not assume a cubic cell.
- If the reciprocal retained set is not the full ball $|\kappa_k|\le K$, every
  additional omitted mode, including omitted Nyquist modes, must be included in
  the reciprocal remainder.
