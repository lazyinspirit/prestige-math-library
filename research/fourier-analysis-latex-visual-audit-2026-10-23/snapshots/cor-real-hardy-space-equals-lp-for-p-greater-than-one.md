---
id: cor-real-hardy-space-equals-lp-for-p-greater-than-one
kind: corollary
title: "$H^p$ equals $L^p$ with equivalent norms for $1<p<\\infty$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice, thm-maximal-function-characterisations-of-real-hardy-spaces, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, def-centered-and-uncentered-hardy-littlewood-maximal-functions, cor-separable-banach-dual-ball-is-weak-star-sequentially-compact, thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity, thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable, def-conjugate-exponents, thm-holder-inequality-for-integrals, lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions, def-schwartz-space-and-its-seminorms, def-axiom-of-choice, lem-complex-lp-duality-from-real-lp-duality, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-complex-holder-minkowski-and-the-quotient-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.1, printed p. 5: 'When $p>1$, $H^p=L^p$'"
    - title: "Martin Hiserote, A Characterization of Anisotropic H^1(R^N) by Smooth Homogeneous Multipliers (PhD dissertation, University of Oregon, 2019)"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content"
      locator: "the paragraph after Theorem 5, printed p. 5: the spaces $H^p(\\mathbb R^n)$ are isomorphic to $L^p(\\mathbb R^n)$ for $1<p<\\infty$"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Remark 2.1 and Corollary 2.2, printed pp. 15-17: domination of smooth dilations by the Hardy-Littlewood maximal function and the $L^p$ bound"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the ultrafilter lemma used in the $H^p\subseteq L^p$
part of the proof. Let $n\ge1$ and $1<p<\infty$, and fix an admissible kernel
$\varphi\in\mathcal S(\mathbb R^n)$ with $\int\varphi\ne0$ as in
[[def-real-hardy-space-by-a-radial-maximal-function]]. Then
$f\in H^p(\mathbb R^n)$ if and only if $f$ is (represented by) a function of
$L^p(\mathbb R^n)$, the two classes coincide, and
$$\|f\|_{H^p}\le C_1\|f\|_{L^p},\qquad \|f\|_{L^p}\le C_2\|f\|_{H^p}, \qquad f\in H^p,$$
with constants depending on $n,p$, finitely many Schwartz seminorms of $\varphi$, and $|\int\varphi|^{-1}$. One may take $C_2=|\int\varphi|^{-1}$. The proof of the inclusion $H^p\subseteq L^p$ assumes the ultrafilter
lemma (a consequence of the Axiom of Choice, [[def-axiom-of-choice]]) through
the weak-star sequential compactness of the dual ball; the inclusion
$L^p\subseteq H^p$ is choice-free beyond the published maximal-function
machinery. In particular the scale $H^p$ is new only for $0<p\le1$.

## Facts & Assumptions

**Given:** Countable Choice and the ultrafilter lemma, $n\ge1$, $1<p<\infty$, an admissible kernel $\varphi$, and $f\in\mathcal S'$.

[F2] If $0\le\Phi\in L^1(\mathbb R^n)$ is radially nonincreasing, then the associated maximal operator is dominated by the centered Hardy-Littlewood maximal operator: $(\Phi*|u|)(x)\le\|\Phi\|_1M u(x)$ ([[lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function]]).

[F3] The centered Hardy-Littlewood maximal operator satisfies the strong $L^p$ bound $\|Mu\|_{L^p}\le C_{n,p}\|u\|_{L^p}$, $1<p<\infty$ ([[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]], [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F4] Let $p_{\alpha,0}(\varphi)=\sup_x|x^\alpha\varphi(x)|$ be the Schwartz seminorms of [[def-schwartz-space-and-its-seminorms]], and set $C_\varphi:=2^n(1+\sqrt n)^{n+1}\bigl(p_{0,0}(\varphi)+\sum_{i=1}^n p_{(n+1)e_i,0}(\varphi)\bigr)<\infty$. Since $|x|\le\sqrt n\max_i|x_i|$, the elementary inequality $(1+r)^{n+1}\le2^n(1+r^{n+1})$ shows $(1+|x|)^{n+1}|\varphi(x)|\le C_\varphi$. Thus $G(x):=C_\varphi(1+|x|)^{-n-1}$ is a radially nonincreasing integrable pointwise majorant of $|\varphi|$. If $u\in L^p$, then $|(u*\varphi_t)(x)|\le(|u|*|\varphi|_t)(x)$; normalised dilations $G_t$ are radially nonincreasing with $\|G_t\|_1=\|G\|_1$, so $|u|*|\varphi|_t\le|u|*G_t\le\|G\|_1Mu$ ([[lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function]]).

[F5] For $1<p<\infty$ complex $L^p$ is the dual of complex $L^{p'}$ by [[lem-complex-lp-duality-from-real-lp-duality]]. Separability first applies to the Borel restriction: rational boxes countably generate it ([[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]), and bounded cubes give sigma-finiteness. Completion does not change $L^{p'}$: [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]] replaces each measurable set in a sequence of simple approximants by a Borel set modulo a null set; the countable union of these exceptions is null, yielding a Borel representative. Separability on the Borel restriction therefore gives separability of Lebesgue $L^{p'}$; hence the unit ball of $L^p$ is weak-star sequentially compact, the weak-star topology on norm-bounded sets is metrised by a countable dense set, and the dual norm is weak-star lower semicontinuous ([[thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]], [[thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable]], [[cor-separable-banach-dual-ball-is-weak-star-sequentially-compact]], [[def-conjugate-exponents]]).



**Proof technique:** direct domination by the Hardy-Littlewood maximal function, then weak-star sequential compactness for the reverse inclusion.

## Proof

**Proof technique:** direct.

1.1 $L^p\subset H^p$. Let $f\in L^p$ and use the radially nonincreasing integrable majorant $G$ from [F4]. For every $t>0$ the normalised kernel $G_t$ is again radially nonincreasing with $\|G_t\|_1=\|G\|_1$, and $|f*\varphi_t|\le|f|*|\varphi|_t\le|f|*G_t\le\|G\|_1Mf$ pointwise by [F2]. Hence $M^0_\varphi f\le\|G\|_1Mf$, and [F3] gives $\|f\|_{H^p}=\|M^0_\varphi f\|_{L^p}\le\|G\|_1C_{n,p}\|f\|_{L^p}$, so $f\in H^p$ with the stated bound. [F2, F3, F4, algebra]

1.2 $H^p\subset L^p$. Let $f\in H^p$ and set $\Phi=\varphi/\int\varphi$. Then $\int\Phi=1$ and $M^0_\Phi f=|\int\varphi|^{-1}M^0_\varphi f\in L^p$ exactly by linearity. The functions $u_t=f*\Phi_t$, $0<t<1$, satisfy $|u_t|\le M^0_\Phi f$ pointwise, hence form a bounded family in $L^p$. By [[lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions]], $u_t\to f$ in $\mathcal S'$ as $t\downarrow0$: for $\psi\in\mathcal S$, $\langle u_t,\psi\rangle=\langle f,\check\Phi_t*\psi\rangle\to\langle f,\psi\rangle$. The space $L^{p'}$ is separable for $1<p<\infty$, so the unit ball of its dual $L^p$ is weak-star sequentially compact, and the bounded sequence $u_{t_k}$ over a fixed sequence $t_k\downarrow0$ has a subsequence $(u_{t_{k_\ell}})$ converging weak-star to some $v\in L^p$. By weak-star lower semicontinuity of the norm, $\|v\|_{L^p}\le\liminf_\ell\|u_{t_{k_\ell}}\|_{L^p}\le\|M^0_\Phi f\|_{L^p}\le |\int\varphi|^{-1}\|f\|_{H^p}$. For every $\psi\in\mathcal S\subset L^{p'}$ one has $\langle v,\psi\rangle=\lim_\ell\langle u_{t_{k_\ell}},\psi\rangle=\langle f,\psi\rangle$, since $u_t\to f$ in $\mathcal S'$; since equality of tempered distributions is tested against $\mathcal S$, the distribution $f$ is represented by the $L^p$ function $v$. Hence $f\in L^p$ with $\|f\|_{L^p}\le |\int\varphi|^{-1}\|f\|_{H^p}$. [F5, given, algebra]

2.1 Conclusion. Steps 1.1 and 1.2 show that $H^p$ and $L^p$ have the same elements and equivalent (quasi-)norms for $1<p<\infty$. [step 1.1, step 1.2] ∎
