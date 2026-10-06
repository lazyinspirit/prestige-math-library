---
id: thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation
kind: theorem
title: "The first positive Neumann eigenvalue has the mean-zero Rayleigh characterisation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-axiom-of-choice, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-compact-linear-operator, def-countable-choice, def-hilbert-space-adjoint, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, lem-classical-derivatives-are-weak-derivatives, lem-compositions-with-a-compact-operator-are-compact, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, lem-elliptic-form-is-well-defined-and-bounded, lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-cauchy-schwarz-in-an-inner-product-space, thm-hilbert-space-fourier-expansion, thm-lax-milgram, thm-orthogonal-decomposition-by-a-closed-subspace, thm-poincare-wirtinger-on-bounded-connected-extension-domains, thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-zero-weak-gradient-implies-componentwise-constancy, lem-w-one-two-is-a-hilbert-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-lebesgue-measure-of-a-box-of-every-kind]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.3, Corollary 4.9 (ONB of Neumann eigenfunctions and the mean-zero discussion), printed pp. 95-98 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 6, natural boundary conditions and the Neumann form, printed pp. 42-43 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, Remark 30 (general symmetric elliptic form), printed p. 312 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded connected extension domain ([[def-sobolev-extension-domain-and-extension-operator]]), put $V:=\{u\in H^1(\Omega):\int_\Omega u=0\}$ and $L^2_0(\Omega):=\{f\in L^2(\Omega):\int_\Omega f=0\}$, and let $a(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$ be the principal form with Hermitian uniformly elliptic coefficients $a^{ij}=\overline{a^{ji}}$ ([[def-uniformly-elliptic-divergence-form-operator]]); for $a^{ij}=\delta^{ij}$ this is the Neumann form of the Laplacian. Then
$$\mu_1:=\inf_{u\in V\setminus\{0\}}\frac{a(u,u)}{\|u\|^2_{L^2}}$$
satisfies $\mu_1>0$, the infimum is attained, and the minimisers are exactly the nonzero elements of the eigenspace $\{u\in V:a(u,v)=\mu_1(u,v)_{L^2}\ \forall v\in V\}$. Since both sides of that identity vanish on constants, it actually holds for every $v\in H^1(\Omega)$, so $\mu_1$ is the smallest positive weak Neumann eigenvalue on the mean-zero space and no Neumann eigenvalue of a mean-zero eigenfunction lies in $(0,\mu_1)$. Moreover $\mu_1=1/\|S\|$, where the norm is that of the $L^2_0\to L^2_0$ realization of the solution map $S:L^2_0(\Omega)\to V$, which is bounded, compact, self-adjoint and positive in that realization and is defined by $a(Sf,v)=(f,v)_{L^2}$ for all $v\in V$. Connectedness supplies Poincare--Wirtinger, and the extension-domain hypothesis supplies that inequality and Rellich compactness; the conclusions are not asserted for arbitrary bounded connected open sets.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded connected extension domain $\Omega\subseteq\mathbb R^n$; Hermitian uniformly elliptic coefficients $a^{ij}=\overline{a^{ji}}$ with ellipticity constant $\theta>0$; the principal form $a(u,v)=\int_\Omega a^{ij}D_ju\overline{D_iv}\,dx$; the mean-zero spaces $V\subseteq H^1(\Omega)$ and $L^2_0(\Omega)\subseteq L^2(\Omega)$.

[F1] Finiteness and closedness: boundedness of $\Omega$ gives $|\Omega|<\infty$ ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]), so $u\mapsto\int_\Omega u$ is a bounded linear functional on $H^1(\Omega)$ and on $L^2(\Omega)$, because $\bigl|\int_\Omega u\bigr|\le|\Omega|^{1/2}\|u\|_{L^2}\le|\Omega|^{1/2}\|u\|_{H^1}$ by Cauchy--Schwarz ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The Hilbert structures are supplied by [[lem-w-one-two-is-a-hilbert-space]] and [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. Hence $V$ and $L^2_0$ are closed Hilbert subspaces. The open nonempty set contains two disjoint positive-measure boxes by [[thm-lebesgue-measure-of-a-box-of-every-kind]]; subtracting appropriately weighted indicators gives a nonzero element of $L^2_0$.

[F2] Poincare--Wirtinger: there is $C_W=C_W(\Omega,2)$ with $\|u-u_\Omega\|_{L^2}\le C_W\|Du\|_{L^2}$ for all $u\in H^1(\Omega)$, so every $u\in V$ satisfies $\|u\|_{L^2}\le C_W\|Du\|_{L^2}$ ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]]).

[F3] The principal form: $a$ is sesquilinear on $H^1(\Omega)$ and bounded, $a(u,u)$ is real for every $u$, and $\operatorname{Re}a(u,u)=a(u,u)\ge\theta\|Du\|_{L^2}^2$ by uniform ellipticity; consequently, for $u\in V$, $$a(u,u)\ge\theta\|Du\|_{L^2}^2\ \ge\ \frac{\theta}{1+C_W^2}\|u\|_{H^1}^2,$$ and on the other hand $a(u,u)\le (nM_a)\|Du\|_{L^2}^2\le nM_a\|u\|_{H^1}^2$ ([[def-uniformly-elliptic-divergence-form-operator]], [[lem-elliptic-form-is-well-defined-and-bounded]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F4] Lax--Milgram and the solution operator: for $f\in L^2_0(\Omega)$ the functional $v\mapsto(f,v)_{L^2}$ is bounded and conjugate-linear on $V$, so by [F3] and [[thm-lax-milgram]] there is a unique $Sf\in V$ with $a(Sf,v)=(f,v)_{L^2}$ for all $v\in V$; the map $S$ is linear and $\|Sf\|_{H^1}\le(1+C_W^2)\theta^{-1}\|f\|_{L^2}$, using the coercivity constant $\alpha=\theta/(1+C_W^2)$ and $\|(f,\cdot)_{L^2}\|_{V^*}\le\|f\|_{L^2}$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F5] Self-adjointness, positivity, and injectivity: for $f,g\in L^2_0(\Omega)$, Hermitian symmetry and the defining identity give $a(Sf,Sg)=(f,Sg)_{L^2}$, while conjugating the identity for $a(Sg,Sf)$ gives $a(Sf,Sg)=(Sf,g)_{L^2}$; hence $(Sf,g)_{L^2}=(f,Sg)_{L^2}$ and $S$ is self-adjoint. Also $(Sf,f)_{L^2}=a(Sf,Sf)\ge0$. If $Sf=0$, then $(f,v)_{L^2}=0$ for every $v\in V$. The density of $C_c^\infty(\Omega)$ in $L^2(\Omega)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]) and boundedness of the mean imply that mean-zero $H^1$ functions are dense in $L^2_0$: approximate $f$ by smooth compactly supported $\varphi_j$ and replace each by $\varphi_j-(\varphi_j)_\Omega\mathbf1$. Thus $f=0$, so $S$ is injective and positive definite.

[F6] Compactness: the inclusion $H^1(\Omega)\hookrightarrow L^2(\Omega)$ is compact on the bounded extension domain $\Omega$ ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]), and $S:L^2_0(\Omega)\to H^1(\Omega)$ is bounded by [F4], so the composition $S:L^2_0(\Omega)\to L^2_0(\Omega)$ with the inclusion is compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]]).

[F7] Spectral data: for the compact self-adjoint operator $S$ the nonzero eigenvalues form a finite or countably infinite set of real numbers with finite multiplicities and no accumulation point other than $0$, eigenspaces for distinct eigenvalues are orthogonal, and with $P_\lambda$ the orthogonal projection onto $E_\lambda$ one has $\overline{\operatorname{span}}\bigcup_\lambda E_\lambda=(\ker S)^\perp=L^2_0(\Omega)$ and $Sx=\sum_\lambda\lambda P_\lambda x$ in norm ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]]); hence $f=\sum_\lambda P_\lambda f$ and $\|f\|_{L^2}^2=\sum_\lambda\|P_\lambda f\|_{L^2}^2$ for every $f\in L^2_0(\Omega)$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-hilbert-space-fourier-expansion]]).

[F8] Norm and eigenvalues: all eigenvalues of $S$ are positive, and $\|S\|$ is the largest eigenvalue of $S$ ([[lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign]], [[def-compact-linear-operator]]).

[F9] Constants: the constant function $1$ lies in $H^1(\Omega)$ with zero weak gradient, its classical derivative being the weak derivative, so $a(u,1)=0$ and the mean-zero condition reads $(u,1)_{L^2}=0$ for $u\in V$ ([[lem-classical-derivatives-are-weak-derivatives]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-zero-weak-gradient-implies-componentwise-constancy]]).

## Proof

**Proof technique:** direct.

1.1 The space $V$ is closed in $H^1(\Omega)$ and $L^2_0(\Omega)$ is closed in $L^2(\Omega)$ by [F1]; on $V$ the form $a$ is bounded and satisfies $a(u,u)\ge0$ for every $u\in V$ by [F3]. The estimate of [F3] is exactly the coercivity statement $$a(u,u)\ \ge\ \alpha\|u\|_{H^1}^2,\qquad \alpha:=\frac{\theta}{1+C_W^2}>0,$$ for all $u\in V$, obtained from Poincare--Wirtinger and ellipticity. [F1, F2, F3, given, algebra]

2.1 Solution operator. For each $f\in L^2_0(\Omega)$ the functional $v\mapsto(f,v)_{L^2}$ is bounded and conjugate-linear on $V$ by [F1], so by [F4] there is a unique $Sf\in V$ with $a(Sf,v)=(f,v)_{L^2}$ for every $v\in V$; the assignment $f\mapsto Sf$ is linear and bounded with the explicit estimate $\|Sf\|_{H^1}\le\alpha^{-1}\|f\|_{L^2}=(1+C_W^2)\theta^{-1}\|f\|_{L^2}$, obtained by testing the defining identity at $v=Sf$ and using [F1]. By [F5] the operator $S:L^2_0(\Omega)\to L^2_0(\Omega)$ is self-adjoint, positive definite and injective, and by [F6] it is compact. [F1, F4, F5, F6, step 1.1]

3.1 Spectral decomposition. By [F7] and [F8] the nonzero eigenvalues of $S$ are positive real numbers of finite multiplicity with no accumulation point except $0$; enumerate the distinct eigenvalues in decreasing order as $\nu_1>\nu_2>\cdots>0$ when the set is infinite (with $\nu_k\downarrow0$), and let $P_k$ be the orthogonal projection onto the eigenspace $E_{\nu_k}$. Since $S$ is injective, [F7] gives $L^2_0(\Omega)=\overline{\operatorname{span}}\bigcup_kE_{\nu_k}$ with orthogonal summands, so for every $f\in L^2_0(\Omega)$ the net of partial sums $f_n:=\sum_{k\le n}P_kf$ converges to $f$ in $L^2$ and $\|f\|_{L^2}^2=\sum_k\|P_kf\|_{L^2}^2$. Every eigenspace lies in $V$, because $Sg\in V$ and $g=\nu^{-1}Sg$ for an eigenvector. Finally, for $g\in E_{\nu_k}$ and every $v\in V$ one has $a(Sg,v)=(g,v)_{L^2}$ by definition of $S$, that is $a(g,v)=\nu_k^{-1}(g,v)_{L^2}$. [F7, F8, step 2.1, algebra]

4.1 Partial sums in the form. Fix $f\in V$ and put $f_n=\sum_{k\le n}P_kf$ as in step 3.1. Then step 3.1 gives, for every $v\in V$, $a(f_n,v)=\sum_{k\le n}\nu_k^{-1}(P_kf,v)_{L^2}$; taking $v=f_n$ and $v=f$ and using orthogonality of the projections, $$a(f_n,f_n)=\sum_{k\le n}\nu_k^{-1}\|P_kf\|_{L^2}^2=a(f_n,f),$$ where the last identity is real. Hence $a(f-f_n,f-f_n)=a(f,f)-a(f_n,f_n)\ge0$ by positivity of $a$ on $V$, and therefore $\sum_{k\le n}\nu_k^{-1}\|P_kf\|_{L^2}^2\le a(f,f)$ for every $n$. [F7, step 1.1, step 3.1, algebra]

5.1 Form-norm expansion. The increasing partial sums of $\sum_k\nu_k^{-1}\|P_kf\|_{L^2}^2$ are bounded by $a(f,f)$, so the series converges; consequently, for $m<n$, $$a(f_n-f_m,f_n-f_m)=\sum_{m<k\le n}\nu_k^{-1}\|P_kf\|_{L^2}^2\longrightarrow0,$$ so $(f_n)$ is Cauchy for the inner product $a$ on $V$. By the coercivity of step 1.1 it is Cauchy in $H^1(\Omega)$, hence converges in $H^1$ to some $u\in V$ (closedness of $V$). Since $H^1$ convergence implies $L^2$ convergence and $f_n\to f$ in $L^2$, we get $u=f$; continuity of $a$ in the $H^1$ norm then gives $$a(f,f)=\lim_{n}a(f_n,f_n)=\sum_{k}\nu_k^{-1}\|P_kf\|_{L^2}^2 .$$ [F7, step 1.1, step 4.1, algebra]

6.1 Rayleigh characterisation. Put $\mu_k:=\nu_k^{-1}$, so that by [F8] $\mu_1=\nu_1^{-1}=1/\|S\|$ is the smallest of the $\mu_k$ and $\mu_k>0$. For $f\in V\setminus\{0\}$ step 5.1 and $\|f\|_{L^2}^2=\sum_k\|P_kf\|_{L^2}^2$ give $$\frac{a(f,f)}{\|f\|_{L^2}^2}=\frac{\sum_k\mu_k\|P_kf\|_{L^2}^2}{\sum_k\|P_kf\|_{L^2}^2}\ \ge\ \mu_1,$$ with equality precisely when $P_kf=0$ for every $k$ with $\mu_k>\mu_1$, that is $f\in E_{\nu_1}$. Hence $\mu_1>0$ is attained and the minimisers are exactly the nonzero elements of $E_{\nu_1}$. Moreover $f\in E_{\nu_1}\setminus\{0\}$ satisfies $a(f,v)=\mu_1(f,v)_{L^2}$ for all $v\in V$ by step 3.1; conversely, if $0\ne f\in V$ satisfies $a(f,v)=\mu_1(f,v)_{L^2}$ for all $v\in V$, then the same expansion gives $\sum_k(\mu_k-\mu_1)\|P_kf\|_{L^2}^2=0$ with all coefficients nonnegative, so $P_kf=0$ whenever $\mu_k>\mu_1$ and $f\in E_{\nu_1}$. Thus the eigenspace $\{u\in V:a(u,v)=\mu_1(u,v)_{L^2}\ \forall v\in V\}$ equals $E_{\nu_1}$, and no mean-zero weak Neumann eigenvalue $\lambda\in(0,\mu_1)$ exists, since it would give the same identity with a nonnegative combination vanishing. [F8, step 3.1, step 5.1, algebra]

7.1 Extension to $H^1(\Omega)$ and conclusions. Let $e_1\in E_{\nu_1}\setminus\{0\}$. By [F9] the constant $1$ has $a(e_1,1)=0$ and $(e_1,1)_{L^2}=0$ because $e_1\in V$; writing an arbitrary $v\in H^1(\Omega)$ as $v=(v-v_\Omega)+v_\Omega$ with $v-v_\Omega\in V$, the identity $a(e_1,w)=\mu_1(e_1,w)_{L^2}$ for $w=v-v_\Omega$ therefore extends to all $v\in H^1(\Omega)$, which is the weak Neumann eigenequation; the same argument extends the eigenspace description of step 6.1, showing that $\mu_1$ is the smallest positive weak Neumann eigenvalue on the mean-zero space. Together with $\mu_1=1/\|S\|$ from step 6.1 this proves all the assertions; connectedness is used only through Poincare--Wirtinger [F2] (a disconnected domain admits the componentwise constants in $V$ with $a=0$, so the infimum would be $0$), and the extension-domain hypothesis is used only through [F2] and [F6]. [F2, F6, F9, step 6.1, given, algebra] ∎ 