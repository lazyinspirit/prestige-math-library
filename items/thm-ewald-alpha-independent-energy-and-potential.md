---
id: thm-ewald-alpha-independent-energy-and-potential
kind: theorem
title: "The alpha-independent Ewald potential and renormalized energy"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-countable-choice,
    def-ewald-three-dimensional-periodic-source-data,
    lem-character-orthogonality-on-a-lattice-fundamental-domain,
    lem-ewald-gaussian-poisson-periodization,
    lem-ewald-lattice-shell-gaussian-tail-controllers,
    lem-ewald-screened-coulomb-kernel-and-self-limit,
    lem-lattice-fundamental-parallelotope-partitions-euclidean-space,
    lem-smooth-bump-between-concentric-euclidean-balls,
    thm-ewald-neutral-periodic-poisson-green-function,
    thm-gaussian-integral,
    thm-integration-by-parts,
    thm-tonelli-theorem-for-sigma-finite-product-spaces
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
      locator: "§§3–6, equations (13)–(39), printed pp. 3–7: the Gaussian split,
        reciprocal structure factor, zero mode, self term, and energy."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture
        notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_No\
        tes.pdf"
      locator: "Chapter 7, equations (229)–(251), printed pp. 85–87: reciprocal
        Poisson solve, self correction, and the real erfc sum."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and neutral finite point-source data
$(A,V,\Lambda,\kappa_k,(x_i,q_i)_{i=1}^n)$ from
[[def-ewald-three-dimensional-periodic-source-data]], with pairwise distinct
source positions in $\mathbb T_A$. For $\alpha>0$ put
$$\sigma_k=\sum_iq_i e^{-i\kappa_k\cdot x_i},\qquad c_k(\alpha)=\frac{4\pi}{V|\kappa_k|^2}e^{-|\kappa_k|^2/(4\alpha^2)}\quad(k\ne0).$$
For every off-source point $x\notin\bigcup_i(x_i+\Lambda)$, the absolutely
convergent Ewald potential
$$U_\alpha(x)=\sum_iq_i\sum_{\lambda\in\Lambda} \frac{\operatorname{erfc}(\alpha|x-x_i+\lambda|)}{|x-x_i+\lambda|} +\frac{4\pi}{V}\sum_{k\ne0}\frac{e^{-|\kappa_k|^2/(4\alpha^2)}}{|\kappa_k|^2} \sigma_k e^{i\kappa_k\cdot x}$$
is the off-source representative of the unique mean-zero periodic solution of
$-\Delta u=4\pi\rho$. Hence it is independent of $\alpha$.

Define the regular part at $x_i$ by
$$\operatorname{FP}_{x_i}U_\alpha= \lim_{x\to x_i}\left(U_\alpha(x)-\frac{q_i}{|x-x_i|}\right).$$
The limit exists, is independent of $\alpha$, and the renormalized energy is
$$E=\frac12\sum_iq_i\operatorname{FP}_{x_i}U_\alpha =\frac12\sum_i\sum_{(j,\lambda)\ne(i,0)}q_iq_j \frac{\operatorname{erfc}(\alpha|x_i-x_j+\lambda|)} {|x_i-x_j+\lambda|} +\frac12\sum_{k\ne0}c_k(\alpha)|\sigma_k|^2 -\frac{\alpha}{\sqrt\pi}\sum_iq_i^2.$$
The prime-exclusion written as $(j,\lambda)\ne(i,0)$ omits only each particle's
own zero-image singularity.

## Facts & Assumptions

**Given:** Countable Choice; an invertible cell matrix $A$, its covolume $V$,
the lattice $\Lambda$, and the angular reciprocal lattice $\kappa_k$; a finite
neutral source configuration with pairwise distinct torus positions; and
$\alpha>0$.

[A1] Countable Choice is used by Gaussian lattice Poisson summation and by the periodic distribution uniqueness interface ([[def-countable-choice]]).

[F1] For $\phi_s(r)=\operatorname{erfc}(\alpha r)/r$ and $g_\alpha=\alpha^3\pi^{-3/2}e^{-\alpha^2|x|^2}$, $-\Delta\phi_s=4\pi\delta_0-4\pi g_\alpha$, and $\phi_s(r)=r^{-1}-2\alpha/\sqrt\pi+O(r^2)$ ([[lem-ewald-screened-coulomb-kernel-and-self-limit]]).

[F2] The normalized Gaussian periodizes as $\sum_{\lambda\in\Lambda}g_\alpha(x+\lambda)=V^{-1}\sum_k e^{-|\kappa_k|^2/(4\alpha^2)}e^{i\kappa_k\cdot x}$ with absolute convergence ([[lem-ewald-gaussian-poisson-periodization]]).

[F3] The neutral source has a unique mean-zero periodic distribution solution of $-\Delta u=4\pi\rho$, with coefficients $\widehat u(k)=4\pi\sigma_k/(V|\kappa_k|^2)$ for $k\ne0$ and zero mode fixed to zero ([[thm-ewald-neutral-periodic-poisson-green-function]]).

[F4] The shell count and finite Gaussian controllers apply to both $\Lambda$ and the angular reciprocal lattice; $T_p(\beta,M)$ is finite and has the stated finite upper controller ([[lem-ewald-lattice-shell-gaussian-tail-controllers]]).

[F5] The real cell translates tile $\mathbb R^3$ and have volume $V$ ([[def-ewald-three-dimensional-periodic-source-data]], [[lem-lattice-fundamental-parallelotope-partitions-euclidean-space]]).

[F6] $\int_{-\infty}^{\infty}e^{-t^2}dt=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F7] Integration by parts applies on every finite interval to the smooth Gaussian integrand ([[thm-integration-by-parts]]).

[F8] A nonnegative integral over a product or countable partition may be evaluated by Tonelli's theorem ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] A compact ball contains a nonnegative smooth bump supported in any prescribed larger open ball ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F10] The mean of every nonconstant lattice character on the cell is zero: $V^{-1}\int_F e^{i\kappa_k\cdot x}\,dx=0$ for $k\ne0$ ([[lem-character-orthogonality-on-a-lattice-fundamental-domain]]).

## Proof

**Proof technique:** direct.

1.1 Write $Q=\sum_i|q_i|$. For $\alpha>0$ define the periodized Gaussian source $\gamma_\alpha(x)=\sum_iq_i\sum_{\lambda\in\Lambda} g_\alpha(x-x_i+\lambda).$ By [F2] applied to each translate and then summed over the finite source set, $\gamma_\alpha(x)=\frac1V\sum_{k\in\mathbb Z^3} e^{-|\kappa_k|^2/(4\alpha^2)}\sigma_k e^{i\kappa_k\cdot x}.$ Neutrality gives $\sigma_0=0$, so the $k=0$ term vanishes. Both series are absolutely convergent; [F4] supplies uniform Gaussian tails for the lattice sums and their derivatives. [given, A1, F2, F4, algebra]

1.2 Define $S_\alpha(x)=\sum_iq_i\sum_{\lambda\in\Lambda}\phi_s(|x-x_i+\lambda|)$ and $L_\alpha(x)=\frac{4\pi}{V}\sum_{k\ne0}\frac{e^{-|\kappa_k|^2/(4\alpha^2)}}{|\kappa_k|^2}\sigma_k e^{i\kappa_k\cdot x}$. The finitely many nonzero modes with $|\kappa_k|<1$ cause no difficulty, and [F4] bounds the remaining Gaussian shells; with $|\sigma_k|\le Q$, the reciprocal series is absolutely and uniformly convergent. Thus termwise integration over the finite-volume cell is valid, and [F10] gives $\frac1V\int_F L_\alpha(x)\,dx=\frac{4\pi}{V}\sum_{k\ne0}\frac{e^{-|\kappa_k|^2/(4\alpha^2)}}{|\kappa_k|^2}\sigma_k\left(\frac1V\int_F e^{i\kappa_k\cdot x}\,dx\right)=0$. For the real part, [F4], [F5], and Tonelli [F8] give $\int_F\sum_{\lambda\in\Lambda}\phi_s(|x-x_i+\lambda|)\,dx =\int_{\mathbb R^3}\frac{\operatorname{erfc}(\alpha|y|)}{|y|}\,dy =4\pi\int_0^\infty r\operatorname{erfc}(\alpha r)\,dr =\frac{\pi}{\alpha^2}.$ For the last equality, set $s=\alpha r$ and use the tail identity in [F1]. Tonelli [F8] gives $\int_0^\infty s\operatorname{erfc}(s)ds =\frac2{\sqrt\pi}\int_0^\infty e^{-t^2}\left(\int_0^t s\,ds\right)dt =\frac1{\sqrt\pi}\int_0^\infty t^2e^{-t^2}dt.$ Integration by parts [F7] on $[0,R]$ gives $\int_0^R t^2e^{-t^2}dt=-Re^{-R^2}/2+(1/2)\int_0^R e^{-t^2}dt$; the boundary term tends to zero since $e^{R^2}\ge R^4/2$ for $R>0$. Taking $R\to\infty$ and using [F6] yields $\int_0^\infty t^2e^{-t^2}dt=\sqrt\pi/4$, so $\int_0^\infty s\operatorname{erfc}(s)ds=1/4$. Multiplying by $4\pi\alpha^{-2}$ gives the displayed value. Hence $\int_FS_\alpha=(\pi/\alpha^2)\sum_iq_i=0$, and $S_\alpha+L_\alpha$ has mean zero. [given, F1, F4, F5, F6, F7, F8, F10, algebra]

2.1 On compact sets avoiding all source images, the real sum and each differentiated tail converge uniformly by the $\operatorname{erfc}$ bounds of [F1] and the shell controller [F4]. The reciprocal series and every derivative converge uniformly because each derivative adds only a fixed power of $|\kappa_k|$ to a Gaussian tail. Thus both are continuous off-source, periodic, and their Fourier operations below are legitimate. [F1, F4, step 1.1, step 1.2, algebra]

3.1 The distributional identity in [F1], summed over the locally finite source images, gives $-\Delta S_\alpha=4\pi\rho-4\pi\gamma_\alpha$. Absolute tail control from [F4] lets the distribution pairing pass through the image sum. Termwise differentiation of the uniformly convergent reciprocal series for $L_\alpha$ gives $-\Delta L_\alpha=\frac{4\pi}{V}\sum_{k\ne0} e^{-|\kappa_k|^2/(4\alpha^2)}\sigma_k e^{i\kappa_k\cdot x} =4\pi\gamma_\alpha,$ where the last equality is step 1.1 and $\sigma_0=0$. Therefore $-\Delta(S_\alpha+L_\alpha)=4\pi\rho$. [given, F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 The sum $U_\alpha=S_\alpha+L_\alpha$ is a mean-zero periodic distribution solution by steps 3.1 and 1.2. Uniqueness [F3] makes it equal to the same Fourier distribution $u$ for every $\alpha>0$. Its absolutely convergent representative is continuous off-source by step 2.1. If two such representatives differed at a point, one real or imaginary component of their difference would keep a strict sign on a small ball; choose a nonnegative smooth bump supported there using [F9]. Their distribution pairings with that bump would differ, contradicting equality to $u$. Thus the displayed potential is independent of $\alpha$. [A1, F3, F9, step 2.1, step 3.1, step 1.2]

5.1 Near $x_i$, the unique term with its own zero image is $q_i\phi_s(|x-x_i|)$. By [F1], subtracting $q_i/|x-x_i|$ leaves the finite limit $-2\alpha q_i/\sqrt\pi$ from that term; every other real term is continuous near $x_i$ because positions are distinct modulo $\Lambda$, and the reciprocal term is smooth. This proves existence and alpha-independence of the regular part by step 4.1. Multiplying those regular parts by $q_i/2$ gives the real-space sum with $(j,\lambda)\ne(i,0)$ and the self contribution $-\alpha\sum_iq_i^2/\sqrt\pi$. The reciprocal contribution is $\frac12\sum_iq_iL_\alpha(x_i)= \frac12\sum_{k\ne0}\frac{4\pi}{V|\kappa_k|^2} e^{-|\kappa_k|^2/(4\alpha^2)} \left(\sum_iq_ie^{i\kappa_k\cdot x_i}\right) \left(\sum_jq_je^{-i\kappa_k\cdot x_j}\right) =\frac12\sum_{k\ne0}c_k(\alpha)|\sigma_k|^2.$ All rearrangements are absolutely convergent by [F4]. This is exactly the stated renormalized energy. [F1, F4, step 2.1, step 4.1, algebra] ∎

## Remarks

- The cell shape enters through $V$ and $\kappa_k=2\pi A^{-T}k$; no cubic-cell assumption is made.
- Neutrality removes the $k=0$ obstruction. The theorem fixes the mean-zero convention and includes no surface term for another boundary convention.
- The real-space potential is singular at source images. The reciprocal series is smooth; any uniform field or potential error for the point-source model must exclude collisions or state a regularized source norm.
