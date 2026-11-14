---
title: Small-lift amplitude approximation and energy-scale scope
status: draft
research_item: pthm-qec-distinguishability-unchanged-jump-approximation
dependency_level: 14
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p.3, Eqs.(10)–(11) and following paragraph; p.4 Fig.2 caption and
        discussion; p.13 Eqs.(S3.17)–(S3.20); p.14 S4 paragraph before (S4.1)
      statement: The article retains unperturbed jumps for $J\Delta\ll\omega_0$,
        claims relative amplitude corrections of order $J\Delta/\omega_0$, and
        says results below are independent of $\omega_0$. It uses the cubic
        free-space vacuum law, fixed effective γ and f(J), and ηJ=J(J+1) in
        simulations. S4 explains that the unperturbed energy is a global phase
        within each J manifold. Fig.2 concerns the channel on all J≤2, generated
        by H_S+H_Δ.
      hypotheses: The original idealized downward angular-momentum model and its
        zero-temperature free-space spectrum; the corrected quantitative scopes
        are explicit in the generated Statement.
      reading_limits: For this adjudication, read the assigned current source, its
        direct coefficient, frequency-window, cubic-variation, weighted-shift,
        block-independence and cascade suppliers, and the existing finite Taylor
        supplier. Read the supplied extracted passages on PDF pp.3–4, p.13
        Eqs.(S3.17)–(S3.20), and the p.14 paragraph before (S4.1). This
        reference supplies article attribution only. The threshold certificate
        in Proof steps 4.2–4.3 is a new local rational calculation from the
        existing cascade and Taylor lemmas, replayed with exact rational
        arithmetic; it is not an imported certificate or a reproduction of the
        article simulation. No original-PDF image inspection, independent
        acceptance or final article-defect determination is claimed.
---

PDF p. 3: ` End of paragraph following Eq. (11) `

## Prerequisites

- [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)
- [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)
- [pthm-qec-distinguishability-spherical-jumps](item-pthm-qec-distinguishability-spherical-jumps)
- [pthm-qec-distinguishability-vacuum-density](item-pthm-qec-distinguishability-vacuum-density)
- [lem-qec-author-252014cb5616-lift-frequency-window](item-lem-qec-author-252014cb5616-lift-frequency-window)
- [lem-qec-author-252014cb5616-cubic-spectral-variation](item-lem-qec-author-252014cb5616-cubic-spectral-variation)
- [lem-qec-author-252014cb5616-weighted-shift-amplitude-bound](item-lem-qec-author-252014cb5616-weighted-shift-amplitude-bound)
- [lem-qec-author-252014cb5616-single-block-energy-independence](item-lem-qec-author-252014cb5616-single-block-energy-independence)
- [lem-qec-author-252014cb5616-cascade-choi-energy-dependence](item-lem-qec-author-252014cb5616-cascade-choi-energy-dependence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)


## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Use finitely many blocks in the article's fixed downward-branch effective emitter model, with the finite integer-spin blocks and rank-one dipole family of the atomic-jumps result. Let $P_J$ be the projection onto block $J$, put $H_0=\omega_0\sum_J\eta_JP_J$, and put $H^{(\Delta)}=H_0+H_\Delta$ with the stated diagonal lift. Adopt all hypotheses of the spherical-jumps result for both static Hamiltonians, with the same coupling scale $\gamma>0$, the same three Hermitian Cartesian dipole operators of norm at most one, and the same bath. In particular assume the centered stationary Gaussian bath, factorized remote-past preparation, weak-Markov regime $\Gamma\tau_B\ll1$, integrable correlations and frequency-domain spectral square root, finite nonzero zeroth and finite first time-domain kernel moments, pointwise Fourier identities at every required Bohr frequency, and existence of the required principal values in that supplier's conventions. Adopt its regulated isotropic photon-model hypotheses and the compatible vacuum-limit hypotheses of the vacuum-density result. Require a nonnegative scalar representative that matches the ordinary ULE spectral density pointwise at every required transition frequency for each Hamiltonian, not just almost everywhere. These are applicability assumptions for the ULE coefficients; small lift alone does not establish them.

Restrict each resulting spherical jump to its $J\to J-1$ matrix entries. This is the retained effective branch, not a claim that the full lifted microscopic jump has no other entries. Keep its dipole matrix elements and eigenvectors unchanged by the phenomenological diagonal lift, and use the unmodified free-space vacuum spectral representative $\mathcal J(\omega)=A\omega^3$, $A>0$, pointwise at every unperturbed and shifted retained transition frequency. No cubic-law condition is imposed at frequencies between those sampled points. The general cutoff-bath postulate alone does not assert this pointwise condition. For $\Omega_J=\omega_0h_J$ with fixed $h_J=\eta_J-\eta_{J-1}>0$, the shift is $s_{Jm\delta}=\Delta[m-(J-1)\delta]$. If $r_J=(2J-1)|\Delta|/(\omega_0h_J)\leq r<1$, then each nonzero downward jump coefficient changes by relative magnitude at most $(3+3r+r^2)r_J$. Zero fixed dipole coefficients remain zero. Thus the claimed $O(J|\Delta|/\omega_0)$ amplitude order holds on a fixed finite set of blocks with positive gaps held fixed. It is not guaranteed by small lift alone for an arbitrary spectral regulator, a zero reference spectrum, a changed dipole operator, or an omitted transition branch.

After replacing those coefficients by the unperturbed effective jumps, keep $\gamma,f(J),\Delta,\eta_J$ and physical observation times fixed. The effective noise restricted to matrices block diagonal in $J$, in particular any encoded input supported in one $J$ manifold and its reference-system extension, is independent of $\omega_0$; fixed recovery operations on those outputs inherit this independence. This explains the energy-scale independence relevant to the single-manifold code comparisons. It does not imply independence of the full channel's Choi weights on arbitrary inter-manifold inputs. The finite-cascade lemma gives an exact counterexample to that extension with $J\leq2$, $\eta_J=J(J+1)$, zero lift and the article's normalized fixed jumps. At fixed microscopic dipoles and vacuum normalization, varying $\omega_0$ also varies the physical rate through the cubic spectrum; holding the effective rates fixed is a comparison of effective models, not a claim of fixed microscopic parameters.

## Facts & Assumptions

[F1] The phenomenological lift changes diagonal energies without specifying a changed decay coupling. [post-qec-distinguishability-atomic-lift](item-post-qec-distinguishability-atomic-lift)

[F2] The atomic-jumps result supplies the unlifted downward coefficient and the identity $\langle J-1,m+\delta|X_\delta|J,m\rangle=R_JC^{J-1,m+\delta}_{1,\delta;J,m}$ with fixed $R_J$. It assumes degenerate energies within each unlifted block; its conclusion alone is not a jump formula for the lifted Hamiltonian. [pthm-qec-distinguishability-atomic-jumps](item-pthm-qec-distinguishability-atomic-jumps)

[F3] The independently derived unmodified free-space vacuum spectral law is cubic on the range where the field coupling has that form. [pthm-qec-distinguishability-vacuum-density](item-pthm-qec-distinguishability-vacuum-density)

[F4] The shift window is bounded by (2J−1)|Δ|. [lem-qec-author-252014cb5616-lift-frequency-window](item-lem-qec-author-252014cb5616-lift-frequency-window)

[F5] A nonzero cubic spectral jump factor has the stated relative variation. [lem-qec-author-252014cb5616-cubic-spectral-variation](item-lem-qec-author-252014cb5616-cubic-spectral-variation)

[F6] Coefficient-relative bounds imply the weighted-shift operator bound. [lem-qec-author-252014cb5616-weighted-shift-amplitude-bound](item-lem-qec-author-252014cb5616-weighted-shift-amplitude-bound)

[F7] With effective jumps held fixed, the block-diagonal channel is independent of the block-scalar unperturbed energy. [lem-qec-author-252014cb5616-single-block-energy-independence](item-lem-qec-author-252014cb5616-single-block-energy-independence)

[F8] The full J≤2 Choi spectrum can retain inter-block energy dependence. [lem-qec-author-252014cb5616-cascade-choi-energy-dependence](item-lem-qec-author-252014cb5616-cascade-choi-energy-dependence)

[F9] For any finite static Hamiltonian satisfying all its system, bath, preparation, weak-Markov, regularity and pointwise spectral-matching hypotheses, the spherical-jumps result gives $L_\delta=\sqrt{2\pi\gamma}\sum_{a,b}\sqrt{\mathcal J(E_b-E_a)}\langle a|X_\delta|b\rangle|a\rangle\langle b|$ in its energy eigenbasis. We assume those hypotheses for both $H_0$ and $H^{(\Delta)}$ as specified in the Statement, with the compatible photon-bath vacuum limit. [pthm-qec-distinguishability-spherical-jumps](item-pthm-qec-distinguishability-spherical-jumps)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice as inherited by the regulated photon and ULE suppliers used in [F1], [F2], [F3] and [F9]. Their use is in those supplied constructions, not in the finite coefficient arithmetic below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

[F10] For a complex scalar $z$, the finite Taylor lemma applied to its one-dimensional multiplication matrix gives $|e^z-\sum_{k=0}^{20}z^k/k!|\leq e^{|z|}|z|^{21}/21!$. This supplies the explicit rational remainder bound used for the threshold diagnostic, without any physical premise. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

## Proof

**Given:** The finite downward model, common fixed dipole operators and magnetic eigenbasis, pointwise cubic values at the retained frequencies, fixed positive gaps, choice assumptions, and all spherical-jumps applicability hypotheses for both static Hamiltonians in the Statement. **Goal:** Justify the amplitude estimate and its precise energy-scale scope.

1.1 By [F1] and [F4], the common magnetic basis diagonalizes both Hamiltonians, and each retained existing-state pair has unlifted frequency $\Omega_J$ and lifted frequency $\Omega_J+s_{Jm\delta}>0$, with $|s_{Jm\delta}|/\Omega_J\leq r_J$. Keeping the dipole operators fixed keeps their matrix elements fixed, even though the lifted energies need not be degenerate within a block. The identity in [F2] therefore remains the identity for these same matrix elements. This use does not reapply the degenerate-energy conclusion of [F2] to the lifted Hamiltonian. [given, F1, F2, F4, A1]

1.2 The retained jumps lower $J$ by one and the lift preserves each block. Apply [F7] with these fixed matrices to obtain the claimed restricted-channel independence at physical times. In the vacuum law of [F3], changing $\omega_0$ at fixed microscopic prefactors changes each unperturbed spectral factor as $\Omega_J^{3/2}$ and its rate as $\Omega_J^3$. Therefore the effective-rate comparison must hold those rate parameters fixed separately. [F1, F2, F3, F7]

2.1 Apply [F9] separately to the two static Hamiltonians under the stated applicability hypotheses, and select the retained $J\to J-1$ entries in the same spherical channel convention. With $d_{Jm\delta}=R_JC^{J-1,m+\delta}_{1,\delta;J,m}$, their coefficients are $q^{(0)}_{Jm\delta}=\sqrt{2\pi\gamma}\,d_{Jm\delta}\sqrt{\mathcal J(\Omega_J)}$ and $q^{(\Delta)}_{Jm\delta}=\sqrt{2\pi\gamma}\,d_{Jm\delta}\sqrt{\mathcal J(\Omega_J+s_{Jm\delta})}$. The only changed factor is thus the selected spectral square root evaluated at the shifted frequency. This retains the coherent sum of entries within each spherical jump and makes no assertion about omitted branches. By [F3] and the pointwise cubic-frequency assumption, the two spectral square roots have the same positive proportionality constant multiplying $\omega^{3/2}$. Consequently $q^{(0)}_{Jm\delta}\ne0$ whenever $d_{Jm\delta}\ne0$, and both coefficients vanish when $d_{Jm\delta}=0$. [given, F2, F3, F9, A1, step 1.1]

2.2 The unrestricted extension is not used: [F8] computes its full Choi spectrum for exactly the fixed normalized finite-cascade matrices. Its inter-block one-jump Gram term depends on $2\omega_0$. This distinguishes the valid single-manifold conclusion from the full-channel quantity and completes the stated correction in scope. [F8, step 1.2]

3.1 For $d_{Jm\delta}\ne0$, cancel the same fixed factor in step 2.1 to get $q^{(\Delta)}_{Jm\delta}/q^{(0)}_{Jm\delta}=\sqrt{\mathcal J(\Omega_J+s_{Jm\delta})}/\sqrt{\mathcal J(\Omega_J)}$. Put $I_J=[\Omega_J(1-r),\Omega_J(1+r)]$ and define the auxiliary function $\widetilde{\mathcal J}_J(\omega)=A\omega^3$ for every $\omega\in I_J$. Both sampled frequencies lie in $I_J$ by [F4]. Their actual spectral values equal the auxiliary values by hypothesis, so the displayed ratio equals the ratio for $\widetilde{\mathcal J}_J$. Apply [F5] to this auxiliary function on $I_J$, where its full pointwise cubic hypothesis holds by definition, to obtain $|q^{(\Delta)}_{Jm\delta}/q^{(0)}_{Jm\delta}-1|\leq(3+3r+r^2)r_J$. Zero fixed dipole coefficients stay zero by step 2.1. For a fixed spherical channel the destination labels are injective, so [F6] gives $\|L^{(\Delta)}_\delta-L^{(0)}_\delta\|\leq\epsilon\|L^{(0)}_\delta\|$ for the retained branch, with $\epsilon=(3+3r+r^2)\max_J r_J$. For a fixed finite block set and fixed positive gaps, the constants are uniform, giving $O(J|\Delta|/\omega_0)$. If a microscopic spectral or dipole factor is instead varied or lies outside the cubic band, this computation makes no such estimate. [given, F4, F5, F6, step 1.1, step 2.1]

3.2 Here is a rational certificate for the Source notes diagnostic. Set $t=1/1000$, $\gamma=1$, $\Delta=0$, and let $w=\omega_0\in\{1,100\}$. The threshold counts unnormalized Choi eigenvalues strictly larger than $\tau=10^{-8}$. Write $E=e^{-1/1000}$, $B=e^{-1/2000}$, $C_w=\cos(w/500)$, $a=1-E$, $b=E/600$, $T=a+b$, and $K_w=(5/3)E(1+E-2BC_w)/(1/4+4w^2)=|c|^2$, using [F8]. Define $P_{20}(x)=\sum_{k=0}^{20}x^k/k!$, $Q_{20}(x)=\sum_{j=0}^{10}(-1)^jx^{2j}/(2j)!$, and $\rho=10^{-30}$. For $|z|\leq1/5$, the nonnegative exponential series gives $e^{|z|}\leq\sum_{k\geq0}|z|^k\leq5/4<2$, so [F10] bounds the degree-20 remainder by $2(1/5)^{21}/21!<\rho$. Thus $E$, $B$, and $C_w=\operatorname{Re}e^{iw/500}$ lie respectively in the rational intervals $[P_{20}(-1/1000)-\rho,P_{20}(-1/1000)+\rho]$, $[P_{20}(-1/2000)-\rho,P_{20}(-1/2000)+\rho]$, and $[Q_{20}(w/500)-\rho,Q_{20}(w/500)+\rho]$. Propagate these intervals through the formulas for $a,b,T,K_w$, $p_2=1-(1001/1000)E$, $n_0=1+8E$, and $D_w=(a-\tau)(b-\tau)-K_w$. The rational endpoint rules are $[l,u]+[v,z]=[l+v,u+z]$, $-[l,u]=[-u,-l]$, and $[l,u][v,z]=[\min(lv,lz,uv,uz),\max(lv,lz,uv,uz)]$; subtraction uses negation and division here is only by the positive rational constant $1/4+4w^2$. Every input is rational and every operation preserves enclosure. Substitution of the finite sums gives the following strict rational bounds: $499/10^9<p_2<500/10^9$, $2664/10^6<T<2665/10^6$, $8992/1000<n_0<8993/1000$, $-27/10^{12}<D_1<-26/10^{12}$, and $55/10^{10}<D_{100}<56/10^{10}$. These bounds can be checked by rational additions and multiplications alone; they enclose the full Taylor-remainder intervals, rather than rounded evaluations of their centers. [F8, F10, step 2.2, construct, algebra]

4.1 In [F8], each of the three one-jump blocks has real eigenvalues $\lambda_+\geq\lambda_-$. Hence $D_w=(\lambda_+-\tau)(\lambda_--\tau)$ and $T=\lambda_++\lambda_-$. Step 3.2 gives $T>2\tau$. For $w=1$, $D_1<0$ therefore puts exactly one eigenvalue of each block above $\tau$. For $w=100$, $D_{100}>0$ puts both on the same side of $\tau$, and $T>2\tau$ forces both above it. The five weights $p_2$ and the single weight $n_0$ exceed $\tau$ at both parameters by step 3.2. All remaining weights vanish by [F8]. The effective ranks are consequently $1+3+5=9$ at $w=1$ and $1+6+5=12$ at $w=100$, with strict threshold separation. This establishes the retained diagnostic for the fixed finite effective model; it supplies neither new empirical data nor a certificate for the article's plotted simulations. [F8, step 3.2, algebra] ∎

## Source notes

Original attribution is preserved here: PDF p.3 says, “We retain the unperturbed jump operators because, for $J\Delta\ll\omega_0$, corrections to their amplitudes are only of relative order $J\Delta/\omega_0$, and the results below are independent of $\omega_0$.” The amplitude calculation above uses the article's unmodified cubic spectrum and fixed phenomenological coupling, with the spectral law supplied by the local vacuum-spectrum deduction and the shifted coefficient formula supplied by the spherical-jumps deduction under its hypotheses for both Hamiltonians; it does not infer smoothness for an arbitrary regularized bath. The parameter specification makes explicit that the normalized effective rates and f(J), rather than all microscopic dipoles and field factors, are fixed.

The energy-scale statement is retained on the single-J input sector for which it is sound. The broad reading that includes every full-channel Choi weight is corrected in the generated theorem, with its original attribution retained: p.4 Fig.2 specifies $H_S+H_\Delta$ and all $J\le2$, while p.14 S4 only invokes a global phase within each J manifold. The finite-cascade counterexample uses those exact fixed effective matrices, $\Delta=0$, $\eta_J=J(J+1)$, $\gamma=1$ and $t=1/1000$. At the article's threshold $10^{-8}$, the local rational interval certificate in Proof steps 3.2–4.3 for the displayed Gram formula gives effective rank 9 at $\omega_0=1$ and 12 at $\omega_0=100$. This diagnostic and its original-PDF attribution are retained internally for independent assessment rather than declaring a final article defect. Removing $H_S$ by a frame change transforms the cross-block jumps into time-dependent operators; discarding their unequal phases would be an additional approximation. No such approximation was located in the cited original passages.
