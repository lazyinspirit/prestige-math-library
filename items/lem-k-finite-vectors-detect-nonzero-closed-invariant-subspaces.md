---
id: lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces
kind: lemma
title: K-finite vectors detect nonzero closed invariant subspaces
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-iwasawa-decomposition-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - def-compact-group-isotypic-projection
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - thm-change-of-variables-for-oriented-manifold-diffeomorphisms
  - thm-extreme-value-metric
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Remark 2.2(i), printed p. 7; the smooth globalization and its K-finite Harish-Chandra module"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Proposition 5.4 and Example 5.5, printed pp. 29–30; §5.2, Proposition 5.10 and Exercise 5.11, printed pp. 30–31. These give the smooth/K-finite module facts; the local L² extension and K-type detection are proved here."
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$, and set $H=L^2_\varepsilon(K)$ with normalized Haar measure. The smooth compact-picture action of [[thm-compact-picture-of-the-sl2-principal-series]] extends uniquely to a strongly continuous representation on $H$; unitarity is not asserted when $\nu\notin i\mathbb R$. With this action:

- the $K$-finite vectors of $H$ are smooth for the action and are stable under the derived action, so $I^K_{\varepsilon,\nu}$ is a $(\mathfrak g,K)$-submodule of the smooth vectors;
- every nonzero closed subspace $W\subseteq H$ invariant under the $K$-action contains a nonzero $K$-finite vector: for $n\equiv\varepsilon\pmod2$, let $P_n$ be the isotypic projection onto the $K$-type $\mathbb Cf_n$ of [[lem-k-type-decomposition-of-the-sl2-principal-series]]. Then $P_n(W)\subseteq W$ for every such $n$, and $v=\sum_{n\equiv\varepsilon\ (2)}P_nv$ for every $v\in H$, so $v\neq0$ forces $P_nv\neq0$ for some $n$;
- consequently, for every closed $G$-invariant subspace $W$, the space $W\cap I^K_{\varepsilon,\nu}$ is a $(\mathfrak g,K)$-submodule of $I^K_{\varepsilon,\nu}$, and $W\neq\{0\}$ if and only if $W\cap I^K_{\varepsilon,\nu}\neq\{0\}$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, the compact-picture Hilbert space $H=L^2_\varepsilon(K)$, and a closed subspace $W\subseteq H$ when specified.

[F1] The compact-picture action is $(\Pi_\nu(g)f)(k)=|\alpha(p(k,g))|^{1+\nu}f(\kappa(k,g))$, where $kg=p(k,g)\kappa(k,g)$ is the unique $AN\times K$ factorization; both the cocycle and its coordinates are smooth in $(k,g)$. Its restriction to $K$ is right translation. The normalized inducing character fixes the positive-base complex-power convention and gives $\left||\alpha|^{1+\nu}\right|^2=|\alpha|^{2+2\operatorname{Re}\nu}$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F2] The unique Iwasawa coordinates are smooth ([[thm-iwasawa-decomposition-for-sl2-r]]); the subgroup $K=\{k_\theta:\theta\in\mathbb R/2\pi\mathbb Z\}$ is the compact circle ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]).

[F3] The vectors $f_n(k_\theta)=e^{in\theta}$ with $n\equiv\varepsilon\pmod2$ form an orthonormal basis of $H$, have $K$-character $e^{in\phi}$, and their finite linear combinations are exactly the $K$-finite vectors ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F4] The derived action has $L_Wf_n=nf_n$ and $L_{E_\pm}f_n=(1+\nu\pm n)f_{n\pm2}/2$, preserving finite Fourier sums ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F5] For a strongly continuous unitary $K$-representation and one-dimensional character $\sigma_n(k_\phi)=e^{in\phi}$, the compact-group definition constructs the bounded Bochner averaging map $P_nv=\int_K\overline{\sigma_n(k)}\,\Pi(k)v\,dk$; the integral is a norm limit of finite linear combinations of its range values ([[def-compact-group-isotypic-projection]]).

[F6] Under $k_\theta\leftrightarrow[\theta/(2\pi)]\in\mathbb R/\mathbb Z$, normalized Haar measure is $dk=d\theta/(2\pi)$: the torus integral is normalized translation-invariant Lebesgue measure, and its pushforward is the unique normalized Haar measure on compact $K$ ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[F7] An orientation-preserving diffeomorphism of the compact oriented circle changes a top-form integral by its positive angular Jacobian ([[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]).

[F8] A continuous real-valued function on compact metric $K$ is bounded and attains its maximum ([[thm-extreme-value-metric]]).

[A1] AC supplies normalized Haar measure on $K$ for the compact-picture and Fourier arguments. AC implies AC$_\omega$ through [[def-countable-choice]], used by the Fourier approximation in [F3], the Bochner-integral construction in [F5], and the one-parameter/exponential input in [F4]. The witness $v\in W\setminus\{0\}$ in step 6.1 follows from the stated nonzero hypothesis and uses no choice axiom ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** extend the smooth cocycle by a Jacobian bound, then use its compact-group Fourier averages and closedness.

1.1 Fix $g\in G$ and write $k_\theta g=a_{t(\theta)}n_{x(\theta)}k_{\psi(\theta)}$ in the unique smooth $ANK$ coordinates. In a local lift of the angle $\psi$, the bottom row is $v(\theta)=e^{-t(\theta)/2}(-\sin\psi(\theta),\cos\psi(\theta))$. It is also $(-\sin\theta,\cos\theta)g$, so $\det(v,v')=\det\!\begin{pmatrix}-\sin\theta&\cos\theta\\-\cos\theta&-\sin\theta\end{pmatrix}\det g=1$. The first expression gives $\det(v,v')=e^{-t}\psi'$, hence $\psi'=e^t=|\alpha(p(k_\theta,g))|^2>0$. Thus $\kappa(\cdot,g)$ is an orientation-preserving circle diffeomorphism; uniqueness of the $ANK$ factorization gives inverse $\kappa(\cdot,g^{-1})$. By [F6], $dk=d\theta/(2\pi)$, and the compactly supported top-form change of variables [F7] applies because $K$ is compact; it gives Haar Jacobian $dk'=|\alpha(p(k,g))|^2dk$. [A1, F1, F2, F6, F7, algebra]

2.1 For smooth $f$, [F1] and step 1.1 give $\|\Pi_\nu(g)f\|_2^2=\int_K|\alpha(p(k,g))|^{2+2\operatorname{Re}\nu}|f(\kappa(k,g))|^2\,dk=\int_K|\alpha(p(\kappa^{-1}(k'),g))|^{2\operatorname{Re}\nu}|f(k')|^2\,dk'\le C_g\|f\|_2^2$, where $C_g:=\max_{k\in K}|\alpha(p(k,g))|^{2\operatorname{Re}\nu}<\infty$ by [F8]; this is the same supremum because $\kappa(\cdot,g)$ is a diffeomorphism. Thus each smooth operator extends uniquely to a bounded operator on $H$, since smooth Fourier sums are dense by [F3]. [F1, F3, F8, step 1.1, algebra]

3.1 The bounded extensions satisfy the group law because the original smooth action does and smooth Fourier sums are dense by [F3]. The coefficient $|\alpha(p(k,g))|^{2\operatorname{Re}\nu}$ is jointly continuous in $(k,g)$; compactness of $K$ and a finite subcover near any fixed $g_0$ give a local uniform bound $M$ for the operator norms. For smooth $f$, [F1] gives a jointly smooth function $\Pi_\nu(g)f(k)$; compactness of $K$ makes every parameter derivative continuous uniformly in $k$, so its orbit map is smooth into $H$. For arbitrary $h\in H$, approximate by a smooth Fourier sum $f$ and use $\|\Pi_\nu(g)h-\Pi_\nu(g_0)h\|_2\le M\|h-f\|_2+\|\Pi_\nu(g)f-\Pi_\nu(g_0)f\|_2+\|\Pi_\nu(g_0)(f-h)\|_2$ near $g_0$; this proves strong continuity. For $\nu\notin i\mathbb R$ no unitarity of the $G$-action is asserted. [F1, F2, F3, step 2.1, algebra]

4.1 By [F1] and [F3], $\Pi_\nu(k_\phi)f_n=e^{in\phi}f_n$. Since these vectors are an orthonormal basis, the $K$-action extends to a unitary action on $H$; it is strongly continuous by step 3.1. Every $K$-finite vector is a finite Fourier sum by [F3]. Joint smoothness in [F1] and compactness of $K$ show that its orbit map is $C^\infty$ as an $H$-valued map. The formulas in [F4] preserve finite Fourier sums, and the $K$-action does too; hence $I^K_{\varepsilon,\nu}$ is a $(\mathfrak g,K)$-submodule of the smooth vectors. [F1, F3, F4, step 3.1, algebra]

5.1 For $n\equiv\varepsilon\pmod2$, let $\sigma_n(k_\phi)=e^{in\phi}$. By step 4.1 the representation of $K$ on $H$ is strongly continuous and unitary, so [F5] defines $P_n$. For each basis vector $f_m$, [F3] gives $P_nf_m=\left(\int_K e^{i(m-n)\phi}\,dk\right)f_m=\langle f_m,f_n\rangle f_m=\delta_{nm}f_m$. Boundedness of $P_n$ and the orthonormal-basis expansion in [F3] therefore give $P_nv=\langle v,f_n\rangle f_n$ and $v=\sum_{n\equiv\varepsilon\ (2)}P_nv$ in Hilbert norm. [A1, F3, F5, step 4.1, algebra]

6.1 If $W$ is $K$-invariant and $v\in W$, every value $\overline{\sigma_n(k)}\Pi(k)v$ in the integrand of [F5] belongs to $W$. The simple-function approximants to its Bochner integral are finite linear combinations of such values, and their norm limit lies in $W$ because $W$ is closed. Thus $P_nv\in W$ for every allowed $n$. If $W\ne\{0\}$, take any $v\in W\setminus\{0\}$; the expansion in step 5.1 has a nonzero term, so $P_nv\ne0$ for some $n$, and this vector is $K$-finite. For $W=\{0\}$ every projection is zero. This proves detection for closed $K$-invariant subspaces. [A1, F3, F5, step 5.1]

7.1 If $W$ is closed and $G$-invariant, then it is $K$-invariant, so step 6.1 proves $W\ne\{0\}$ iff $W\cap I^K_{\varepsilon,\nu}\ne\{0\}$, including $W=\{0\}$ where both sides are false. For $w\in W\cap I^K_{\varepsilon,\nu}$ and real $X\in\mathfrak g$, the difference quotients $(\Pi_\nu(\exp(tX))w-w)/t$ lie in $W$; their limit $L_Xw$ also lies in $W$ because $W$ is closed, and is $K$-finite by [F4]. The $K$-action preserves the intersection, so it is a $(\mathfrak g,K)$-submodule. [F1, F4, step 6.1, algebra] ∎
