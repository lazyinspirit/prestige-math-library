---
id: thm-littlewood-paley-square-function-equivalence-on-lp
kind: theorem
title: "Littlewood-Paley square-function equivalence on Lp for 1<p<infinity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-khintchine-inequality-for-finite-rademacher-sums, def-inhomogeneous-dyadic-frequency-partition, lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded, def-littlewood-paley-square-function, lem-rademacher-randomisation-converts-square-functions-to-multipliers, lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds, lem-littlewood-paley-reproducing-formula-in-tempered-distributions, cor-l-p-norm-recovery-by-unit-l-q-pairings, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 5.3 (upper Littlewood-Paley inequality) and Corollary 5.4 (two-sided inequality), with the alternate Khintchine proof in §5.5, printed pp. 23-26"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.1.2 (Littlewood-Paley theorem) and Remark 6.1.3, printed pp. 420-425"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 5.5 and §5.3 (proof of the LP theorem via Khinchine and a multiplier theorem), printed pp. 17, 21-22"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$, fix the
partition and operators of [[def-inhomogeneous-dyadic-frequency-partition]],
and let $S$ be the square function of
[[def-littlewood-paley-square-function]].

1. For every $1<p<\infty$ there are constants $0<c_p\le C_p<\infty$,
   depending only on $n$, $p$ and the fixed cutoff, such that every
   $f\in\mathcal S(\mathbb R^n)$ satisfies
   $$c_p\|f\|_{L^p}\le\|Sf\|_{L^p}\le C_p\|f\|_{L^p};$$
   in particular $Sf\in L^p$ for Schwartz $f$.
2. (Extension to $L^p$.) For every $f\in L^p(\mathbb R^n;\mathbb C)$ and every
   sequence $f_k\in\mathcal S(\mathbb R^n)$ with $f_k\to f$ in $L^p$, the
   sequence $Sf_k$ is Cauchy in $L^p$; its limit, written $Sf$, is independent
   of the approximating sequence, satisfies the same two-sided estimate with
   the constants of part 1, and is the unique continuous extension of the
   Schwartz assignment. Moreover the increasing sequence
   $S_Nf=\bigl(\sum_{j<N}|\Delta_jf|^2\bigr)^{1/2}$ of convolution
   representatives converges to $Sf$ in $L^p$ and almost everywhere, so
   $Sf=\bigl(\sum_{j\ge0}|\Delta_jf|^2\bigr)^{1/2}$ almost everywhere.

Only $1<p<\infty$ is claimed.

## Facts & Assumptions

**Given:** the fixed partition, operators and kernels of [[def-inhomogeneous-dyadic-frequency-partition]]; the square function $S$ and its truncations $S_N$, $S_F$ of [[def-littlewood-paley-square-function]]; a real $1<p<\infty$ with conjugate $p'$; the finite partial symbols $m_{t,N}=\sum_{j<N}\varepsilon_j(t)\varphi_j$ for $t\in[0,1)$.

[F1] Rademacher randomisation: for every $0<q<\infty$ there are $0<c_q\le C_q<\infty$, depending only on $q$, such that for every finite $F$, every $f\in\mathcal S$ and every $x$, $c_qS_Ff(x)\le\bigl(\int_0^1|\sum_{j\in F}\varepsilon_j(t)\Delta_jf(x)|^qdt\bigr)^{1/q}\le C_qS_Ff(x)$, and for each $t$ the random sum equals $T_{m_{t,F}}f$; integrating in $x$ gives $c_q^q\|S_Ff\|_q^q\le\int_0^1\|T_{m_{t,F}}f\|_q^qdt\le C_q^q\|S_Ff\|_q^q$ ([[lem-rademacher-randomisation-converts-square-functions-to-multipliers]], [[thm-khintchine-inequality-for-finite-rademacher-sums]]).

[F2] Uniform signed-sum bounds: for every sequence $|c_j|\le1$ the symbol $\sum_jc_j\varphi_j$ is a Mihlin symbol with constants independent of the coefficients, and for $1<q<\infty$ one has $\|T_{\sum_jc_j\varphi_j}f\|_q\le C_{n,\psi}\max(q,(q-1)^{-1})\|f\|_q$; in particular the bound applies to every truncation symbol $m_{t,N}$ and is uniform in $t,N$ ([[lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds]], [[lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded]]).

[F3] Reproducing formula: for $f,g\in\mathcal S$ with $\|Sf\|_p<\infty$ and $\|\tilde Sg\|_{p'}<\infty$ the series $\sum_j\langle\Delta_jf,\tilde\Delta_jg\rangle$ converges absolutely to $\langle f,g\rangle$ and $\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|\le\int Sf\,\tilde Sg$ ([[lem-littlewood-paley-reproducing-formula-in-tempered-distributions]]).

[F4] Holder's inequality and the finite $\ell^2$ reverse-triangle inequality $|S_Nu-S_Nv|\le S_N(u-v)$; its limit gives $|Su-Sv|\le S(u-v)$ wherever $Su$ and $Sv$ are finite ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-littlewood-paley-square-function]]).

[F5] Integration and limit tools: Tonelli for nonnegative product-measurable integrands, monotone convergence for increasing sequences, dominated convergence in $L^p$, completeness of $L^p$ together with almost everywhere convergence of a subsequence, density of smooth compactly supported functions in $L^p$ for finite $p$, and the duality formula $\|h\|_p=\sup\{|\int hg|:\|g\|_{p'}\le1\}$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-monotone-convergence-for-the-integral]], [[thm-dominated-convergence]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]], [[cor-l-p-norm-recovery-by-unit-l-q-pairings]]).

## Proof

**Proof technique:** direct.

1.1 Upper bound for Schwartz functions. Let $f\in\mathcal S$ and $N\ge0$. The lower pointwise Khintchine bound of [F1] with $q=p$ gives $S_Nf(x)\le c_p^{-1}\bigl(\int_0^1|\sum_{j<N}\varepsilon_j(t)\Delta_jf(x)|^pdt\bigr)^{1/p}$; raising to the $p$-th power, integrating in $x$, and applying Tonelli (the integrand is nonnegative and product-measurable by [F1]) gives $\|S_Nf\|_p^p\le c_p^{-p}\int_0^1\|T_{m_{t,N}}f\|_p^pdt\le c_p^{-p}\bigl(C_{n,\psi}\max(p,(p-1)^{-1})\bigr)^p\|f\|_p^p$, where the last inequality is the uniform signed-sum bound [F2] applied at each $t$ to the truncation symbols. Since $S_Nf\uparrow Sf$ pointwise, monotone convergence [F5] gives $\|Sf\|_p\le C_p\|f\|_p$ with $C_p:=c_p^{-1}C_{n,\psi}\max(p,(p-1)^{-1})$; in particular $Sf\in L^p$. The same computation for any finite set $F$ in place of $\{0,\dots,N-1\}$ gives $\|S_Ff\|_p\le C_p\|f\|_p$. [F1, F2, F5, algebra]

2.1 Companion upper bound. Since $\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$ and the multiplier map is linear in the symbol, $\tilde\Delta_jf=\Delta_{j-1}f+\Delta_jf+\Delta_{j+1}f$ (with $\Delta_{-1}:=0$); hence $|\tilde\Delta_jf|^2\le3(|\Delta_{j-1}f|^2+|\Delta_jf|^2+|\Delta_{j+1}f|^2)$ pointwise, and summing over $j\in F$ gives $\tilde S_Ff\le3S_{F'}f$ with the finite set $F'=\{j-1,j,j+1:j\in F\}\cap\{0,1,2,\dots\}$. By step 1.1 applied to $F'$, $\|\tilde S_Ff\|_p\le3C_p\|f\|_p$; letting $F$ increase to all indices and using monotone convergence for $\tilde S_Ff\uparrow\tilde Sf$ gives $\|\tilde Sf\|_p\le3C_p\|f\|_p$. [F5, step 1.1, algebra]

2.2 Extension to $L^p$. For $u,v\in\mathcal S$ the pointwise inequality $|Su-Sv|\le S(u-v)$ of [F4] and step 1.1 give $\|Su-Sv\|_p\le C_p\|u-v\|_p$; hence $u\mapsto Su$ is Lipschitz on the dense subspace $\mathcal S$ of $L^p$, and for any $f\in L^p$ and any $f_k\in\mathcal S$ with $f_k\to f$ the sequence $Sf_k$ is Cauchy in $L^p$. By completeness of $L^p$ [F5] it has a limit $F$, which is independent of the approximating sequence: if $\tilde f_k$ is another such sequence, the interleaved sequence $f_1,\tilde f_1,f_2,\tilde f_2,\dots$ also converges to $f$ in $L^p$ and its image is Cauchy, so the two limits agree. This assignment is the unique continuous extension of the Schwartz square function, by the same Lipschitz bound. [F4, F5, step 1.1, algebra]

3.1 Lower bound for Schwartz functions. Let $f\in\mathcal S$. By steps 1.1 and 2.1, $\|Sf\|_p<\infty$ and, for every $g\in\mathcal S$, $\|\tilde Sg\|_{p'}<\infty$; the reproducing formula [F3] therefore gives $\langle f,g\rangle=\sum_j\langle\Delta_jf,\tilde\Delta_jg\rangle$ with $\sum_j|\langle\Delta_jf,\tilde\Delta_jg\rangle|\le\int Sf\,\tilde Sg$. By the pointwise Cauchy-Schwarz inequality and Holder [F4], $\int Sf\,\tilde Sg\le\|Sf\|_p\|\tilde Sg\|_{p'}\le3C_{p'}\|Sf\|_p\|g\|_{p'}$. Hence $|\langle f,g\rangle|\le3C_{p'}\|Sf\|_p\|g\|_{p'}$ first for all $g\in\mathcal S$ and then, by density of $\mathcal S$ in $L^{p'}$ and continuity of the pairing, for all $g\in L^{p'}$; taking the supremum over $\|g\|_{p'}\le1$ and using the duality formula [F5] gives $\|f\|_p\le3C_{p'}\|Sf\|_p$. This is the lower bound of part 1 with $c_p:=(3C_{p'})^{-1}$. [F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 Identification with the pointwise square function. For fixed $N$, [F2] and the finite reverse-triangle inequality give $\|S_Nu-S_Nv\|_p\le\sum_{j<N}\|\Delta_j(u-v)\|_p\le NB_p\|u-v\|_p$ for all $u,v\in L^p$, where $B_p$ is a uniform bound for the pieces. Therefore $S_N$ is continuous on $L^p$, and approximation by Schwartz functions passes the bound of step 1.1 to $\|S_Nf\|_p\le C_p\|f\|_p$ for every $f\in L^p$, uniformly in $N$. Monotone convergence [F5] gives $\|Sf\|_p\le C_p\|f\|_p$ for the increasing pointwise limit, so $Sf$ is finite almost everywhere. Since $|Sf-S_Nf|^p\le(Sf)^p$, dominated convergence [F5] gives $S_Nf\to Sf$ in $L^p$, as well as pointwise. Passing the finite reverse-triangle inequality to the limit gives $|Su-Sv|\le S(u-v)$ almost everywhere and hence $\|Su-Sv\|_p\le C_p\|u-v\|_p$ on all of $L^p$. In particular, for $f_k\in\mathcal S$ with $f_k\to f$, $Sf_k\to Sf$ in $L^p$, identifying this function with the extension of step 2.2. Taking limits in steps 1.1 and 3.1 gives the two-sided estimate for $f$. [F2, F4, F5, step 1.1, step 2.2, step 3.1, algebra]

5.1 Conclusion. Steps 1.1 and 3.1 prove part 1, and steps 2.2 and 4.1 prove part 2: the Cauchy property and independence of the approximating sequence, the identification of the extension with the increasing pointwise square function both in $L^p$ and almost everywhere, and the inherited two-sided estimate. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎
