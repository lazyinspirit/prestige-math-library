---
id: lem-littlewood-paley-reproducing-formula-in-tempered-distributions
kind: lemma
title: "The Littlewood-Paley reproducing formula in tempered distributions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-inhomogeneous-dyadic-frequency-partition, lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-fourier-transform-of-a-tempered-distribution, lem-smooth-polynomially-bounded-multipliers-on-schwartz-space, thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions, thm-fourier-inversion-on-schwartz-space, thm-parseval-pairing-on-schwartz-space, def-schwartz-topology-and-convergence, thm-complex-holder-minkowski-and-the-quotient-norm, thm-monotone-convergence-for-the-integral, def-countable-choice, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, def-weak-and-strong-topologies-on-tempered-distributions, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "converse of Theorem 6.1.2: $\\sum_j\\Delta_j^*\\Delta_jf$ converges in $\\mathcal S'$ and the duality estimate (6.1.20), printed pp. 424-425"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 5.4 proof, the partition of unity $1=\\sum_j\\phi_j\\psi_j$ and $f=\\sum_j\\phi_j(D)\\psi_j(D)f$ for Schwartz $f$, printed p. 24"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.11)-(5.12), the reconstruction formula, printed p. 18"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). With the fixed partition
and companion operators of [[def-inhomogeneous-dyadic-frequency-partition]]:

1. for every $f\in\mathcal S'(\mathbb R^n)$ the partial sums
   $\sum_{j<N}\tilde\Delta_j\Delta_jf$ converge to $f$ in
   $\mathcal S'(\mathbb R^n)$ as $N\to\infty$, that is
   $f=\sum_{j\ge0}\tilde\Delta_j\Delta_jf$ in $\mathcal S'$;
2. for every $f,g\in\mathcal S(\mathbb R^n)$ and every $N\ge0$, with the
   Hermitian pairing $\langle u,v\rangle=\int_{\mathbb R^n}u\bar v$ one has
   $\langle\sum_{j<N}\tilde\Delta_j\Delta_jf,g\rangle=\sum_{j<N}\langle\Delta_jf,\tilde\Delta_jg\rangle$.
   If in addition $\|Sf\|_p<\infty$ and $\|\tilde Sg\|_{p'}<\infty$ for some
   $1<p<\infty$, with $p'$ conjugate to $p$, then the series
   $\sum_{j\ge0}\langle\Delta_jf,\tilde\Delta_jg\rangle$ converges absolutely
   to $\langle f,g\rangle$ and satisfies
   $\sum_{j\ge0}|\langle\Delta_jf,\tilde\Delta_jg\rangle|\le\int_{\mathbb R^n}Sf\,\tilde Sg$.

## Facts & Assumptions

**Given:** the fixed partition $(\varphi_j)$, companions $(\tilde\varphi_j)$ and operators of [[def-inhomogeneous-dyadic-frequency-partition]]; the partial symbols $\sigma_N:=\sum_{j<N}\tilde\varphi_j\varphi_j$ for $N\ge0$.

[F1] Each $\varphi_j,\tilde\varphi_j$ lies in $C_c^\infty(\mathbb R^n)$, $0\le\varphi_j\le1$, $0\le\tilde\varphi_j\le1$ and $|\partial^\alpha\varphi_j(\xi)|\le C_\alpha2^{-j|\alpha|}$, $|\partial^\alpha\tilde\varphi_j(\xi)|\le C'_\alpha2^{-j|\alpha|}$ for constants depending only on $n,\psi,\alpha$; the supports satisfy $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ for $j\ge1$ and $\operatorname{supp}\tilde\varphi_j\subset\{|\xi|\le2^{j+2}\}$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[F2] $\sum_{j\ge0}\tilde\varphi_j\varphi_j=1$ pointwise with a locally finite sum, and the operators satisfy $T_mT_n=T_{mn}$ on $\mathcal S$ for smooth polynomially bounded symbols; for $f\in\mathcal S'$ the products $\varphi_j\cdot\mathcal Ff$ are the transposed multiplications by smooth polynomially bounded symbols, and $\Delta_jf=\mathcal F^{-1}(\varphi_j\mathcal Ff)$ ([[def-inhomogeneous-dyadic-frequency-partition]], [[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

[F3] The distributional pairing is bilinear, with $\langle\mathcal Ff,g\rangle=\langle f,\mathcal Fg\rangle$ and $\langle\mathcal F^{-1}f,g\rangle=\langle f,\mathcal F^{-1}g\rangle$. $\mathcal F$ is an automorphism of $\mathcal S'(\mathbb R^n)$ and $\mathcal F^{-1}\mathcal F=\mathcal F\mathcal F^{-1}=\mathrm{id}$; for $f\in\mathcal S'$ the map $g\mapsto\langle f,g\rangle$ is a continuous linear functional on $\mathcal S$ ([[def-fourier-transform-of-a-tempered-distribution]], [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]], [[def-schwartz-topology-and-convergence]], [[def-weak-and-strong-topologies-on-tempered-distributions]]).

[F4] Parseval's pairing: for $u,v\in\mathcal S(\mathbb R^n)$, $\int\widehat u\,\overline{\widehat v}=\int u\bar v$; consequently, for a real symbol $m\in C_c^\infty$ and $u,v\in\mathcal S$, writing $\widehat{T_mu}=m\widehat u$, $\langle T_mu,v\rangle=\int\widehat{T_mu}\,\bar{\widehat v}=\int m\widehat u\,\bar{\widehat v}=\int\widehat u\,\overline{m\widehat v}=\langle u,T_mv\rangle$ ([[thm-parseval-pairing-on-schwartz-space]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[F5] For $h\in\mathcal S$ and $R>0$, $\sup_{|\xi|\ge R}|\xi^\alpha\partial^\beta h(\xi)|\le R^{-1}\sum_{l=1}^np_{\alpha+e_l,\beta}(h)$: multiply by $|\xi|\le\sum_l|\xi_l|$ and use the seminorm bounds. Thus the tail tends to $0$, uniformly when $h$ ranges over a bounded subset of $\mathcal S$; a sequence converges in $\mathcal S$ exactly when all seminorms tend to $0$ ([[def-schwartz-topology-and-convergence]]).

[F6] Holder's inequality and the monotone convergence theorem for nonnegative measurable functions; finite sums act termwise on integrals ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 The partial symbols. For every $N\ge0$ the function $\sigma_N=\sum_{j<N}\tilde\varphi_j\varphi_j$ lies in $C_c^\infty(\mathbb R^n)$ by [F1] and satisfies $0\le\sigma_N\le1$ with $1-\sigma_N=\sum_{j\ge N}\tilde\varphi_j\varphi_j\ge0$ by [F2]. For $N\ge1$ it equals $1$ on $\{|\xi|<2^{N-2}\}$: a term $\tilde\varphi_j\varphi_j$ with $j\ge N$ vanishes wherever $\varphi_j$ does, and $\varphi_j=0$ on $\{|\xi|\le2^{j-1}\}$, so every tail term vanishes on this ball. (For $N=0$, $\sigma_0=0$ and no plateau assertion is made.) Moreover, for every multi-index $\alpha$ there is $C_\alpha<\infty$, depending only on $n,\psi,\alpha$, with $|\partial^\alpha(1-\sigma_N)(\xi)|\le C_\alpha2^{-N|\alpha|}$ for all $\xi$ and $N$: by the Leibniz rule and [F1] each summand satisfies $|\partial^\alpha(\tilde\varphi_j\varphi_j)(\xi)|\le C_\alpha2^{-j|\alpha|}$, and $\sum_{j\ge N}2^{-j|\alpha|}\le2\cdot2^{-N|\alpha|}$ for $|\alpha|\ge1$, while for $\alpha=0$ the bound is just $0\le1-\sigma_N\le1$. [F1, F2, algebra]

1.2 The finite duality identity and absolute convergence. For $f,g\in\mathcal S$ and $N$, [F4] applied to the real symbol $\tilde\varphi_j$ gives $\langle\tilde\Delta_j\Delta_jf,g\rangle=\langle\Delta_jf,\tilde\Delta_jg\rangle$ for each $j<N$, and summing yields the first identity of part 2. For the series bound, the pointwise Cauchy-Schwarz inequality in $\ell^2$ gives $\sum_{j<N}|\Delta_jf(x)|\,|\tilde\Delta_jg(x)|\le Sf(x)\tilde Sg(x)$ for every $x$, and integrating the finite sum, which is legitimate termwise by [F6], gives $\sum_{j<N}\int|\Delta_jf||\tilde\Delta_jg|\le\int Sf\,\tilde Sg\le\|Sf\|_p\|\tilde Sg\|_{p'}<\infty$ by Holder; hence the nonnegative series $\sum_j\int|\Delta_jf||\tilde\Delta_jg|$ converges (its partial sums are increasing and bounded) and dominates $\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|$, so that series converges absolutely with the stated bound. [F4, F6, algebra]

2.1 The tail vanishes in $\mathcal S$. For every $h\in\mathcal S$ the products $(1-\sigma_N)h$ tend to $0$ in the Schwartz topology: for multi-indices $\alpha,\beta$, the Leibniz rule writes $\partial^\beta((1-\sigma_N)h)=\sum_{\gamma\le\beta}\binom{\beta}{\gamma}\partial^{\beta-\gamma}(1-\sigma_N)\,\partial^\gamma h$, and every term with $\gamma\ne\beta$ is bounded by $C_{\beta-\gamma}2^{-N|\beta-\gamma|}|\xi^\alpha\partial^\gamma h(\xi)|\le C2^{-N}p_{\alpha\gamma}(h)\to0$ uniformly in $\xi$, while, for $N\ge1$, the term with $\gamma=\beta$ satisfies $|\xi^\alpha(1-\sigma_N)\partial^\beta h(\xi)|\le\sup_{|\xi|\ge2^{N-2}}|\xi^\alpha\partial^\beta h(\xi)|\to0$ by [F5], since $1-\sigma_N$ vanishes for $|\xi|<2^{N-2}$. Hence $p_{\alpha\beta}((1-\sigma_N)h)\to0$ for every pair $\alpha,\beta$, which is convergence to $0$ in $\mathcal S$ by [F5], uniformly on bounded subsets because the finitely many seminorms in these estimates are uniformly bounded. [F1, F5, step 1.1, algebra]

3.1 Convergence in $\mathcal S'$ (part 1). The multiplier composition in [F2] gives $\sum_{j<N}\tilde\Delta_j\Delta_jf=\mathcal F^{-1}(\sigma_N\mathcal Ff)$ for every $f\in\mathcal S'$. For a Schwartz test $g$, the bilinear transposition convention [F3] gives $\langle\mathcal F^{-1}(\sigma_N\mathcal Ff)-f,g\rangle=\langle\mathcal Ff,(\sigma_N-1)\mathcal F^{-1}g\rangle$. By step 2.1 the test on the right tends to zero in $\mathcal S$, and continuity of $\mathcal Ff$ makes the pairing tend to zero. The same estimates are uniform for $g$ in any bounded subset: $\mathcal F^{-1}$ maps bounded sets to bounded sets, step 2.1 is uniform there, and a continuous functional is bounded by finitely many Schwartz seminorms. Hence the partial sums converge to $f$ in both the weak and strong dual topologies. [F2, F3, step 2.1, algebra]

4.1 Identification of the sum (part 2). Apply step 3.1 to the Schwartz test $\bar g$; the resulting distributional pairing is the Hermitian integral pairing of part 2. Thus $\langle\sum_{j<N}\tilde\Delta_j\Delta_jf,g\rangle\to\langle f,g\rangle$ in that convention. Step 1.2 identifies each partial sum with $\sum_{j<N}\langle\Delta_jf,\tilde\Delta_jg\rangle$ and proves absolute convergence with the stated bound, so the sum is $\langle f,g\rangle$. [step 1.2, step 3.1] ∎
