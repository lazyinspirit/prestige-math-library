---
id: thm-lca-plancherel-isometric-extension
kind: theorem
title: Plancherel isometric extension on LCA groups
dependency_level: 13
deps:
- lem-lca-parseval-pairing-on-the-integrable-core
- thm-lca-fourier-inversion-for-integrable-transform
- thm-compatible-dual-haar-normalisation
- lem-lca-positive-convolution-squares-form-an-inversion-core
- lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution
- lem-lca-translations-and-normalised-local-approximate-identities
- lem-character-evaluation-pairing-is-jointly-continuous
- def-fourier-transform-on-an-lca-group
- def-positive-definite-function-on-an-abelian-group
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-compact-space
- def-radon-measure-on-an-lch-space
- thm-extension-of-a-bounded-map-from-a-dense-subspace
- thm-riesz-fischer-completeness-of-l-p
- thm-c-c-is-dense-in-l-p-for-radon-measures
- thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
- thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- cor-cauchy-schwarz-inequality-for-l-two
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$ and dual $\widehat G$ carrying the compatible dual Haar normalisation. The Fourier transform restricts to a linear isometry
$$\mathcal F_0:L^1(G,m_G)\cap L^2(G,m_G)\longrightarrow L^2(\widehat G,m_{\widehat G}),\qquad \mathcal F_0 f:=\widehat f,$$
on the dense subspace $L^1\cap L^2(G)\subseteq L^2(G)$, and it has a unique linear isometric extension
$$\mathcal F:L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G}),\qquad \|\mathcal F f\|_2=\|f\|_2 .$$
Surjectivity of $\mathcal F$ (equivalently, unitarity) is not asserted here; the range is dense only after the biduality identification on the later Pontryagin duality pair.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$ and compatible dual Haar measure $m_{\widehat G}$ on $\widehat G$.

[F1] For $g\in C_c(G;\mathbb C)$ the function $h:=g*\widetilde g$ lies in the positive core $E$, is continuous positive definite with $h(0)=\int_G|g|^2\,dm_G=\|g\|_2^2$, and has $\widehat h=|\widehat g|^2$ ([[lem-lca-positive-convolution-squares-form-an-inversion-core]], [[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[def-fourier-transform-on-an-lca-group]], [[def-positive-definite-function-on-an-abelian-group]]).

[F2] For every $h\in E$ the compatible dual Haar measure satisfies $h(x)=\int_{\widehat G}\widehat h(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$ for $m_G$-almost every $x$, with $\widehat h\in L^1(\widehat G,m_{\widehat G})$ ([[thm-compatible-dual-haar-normalisation]]). This fact alone is an almost-everywhere identity; its pointwise value at $0$ is established in step 1.1.

[F3] On the integrable core, Parseval holds: for $f\in L^1\cap L^2$ with $\widehat f\in L^1(\widehat G,m_{\widehat G})$ one has $\|\widehat f\|_2=\|f\|_2$ ([[lem-lca-parseval-pairing-on-the-integrable-core]]); every $h\in E$ lies in $L^1\cap L^2$ and has $\widehat h\in L^1(\widehat G,m_{\widehat G})$ by [F2] ([[lem-lca-positive-convolution-squares-form-an-inversion-core]]).

[F4] Approximating real and imaginary parts separately by the real $C_c$ density theorem and adding the two errors shows that $C_c(G;\mathbb C)$ is dense in $L^p(G,m_G)$ for $1\le p<\infty$, in particular in $L^1$ and in $L^2$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]]); translations are norm continuous in $L^p$ and the normalized local approximate identities $u_U\in C_c(G;\mathbb R)$ satisfy $\|u_U*v-v\|_p\to0$ for $p=1,2$ ([[lem-lca-translations-and-normalised-local-approximate-identities]]); the measures $|f|\,dm_G$ and $|f|^2\,dm_G$ for $f\in L^1\cap L^2$ are finite Radon measures, hence inner regular ([[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F5] The Fourier transform is linear with $|\widehat f(\gamma)|\le\|f\|_1$, so $\|\widehat f_1-\widehat f_2\|_\infty\le\|f_1-f_2\|_1$ ([[def-fourier-transform-on-an-lca-group]]); Cauchy-Schwarz bounds $L^2$ products ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-integrable-real-and-complex-functions-and-their-integrals]]); $L^2(\widehat G,m_{\widehat G})$ is complete and norm convergence in $L^p$ implies almost everywhere convergence of a subsequence, with the complex conclusions obtained by applying the real conclusions to real and imaginary parts and taking successive subsequences ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F6] A bounded linear map on a dense subspace of a normed space into a Banach space has a unique bounded linear extension with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[def-dependent-choice]], [[def-axiom-of-choice]]).

[F7] If $g\in L^1(\widehat G)$, then $|g|m_{\widehat G}$ is a finite Radon measure and has arbitrarily small tails outside compact sets. Indeed, approximate $|g|$ in real $L^1$ by $g_n\in C_c(\widehat G;\mathbb R)$ using density; the measures $|g_n|m_{\widehat G}$ are finite Radon by Haar regularity and compact support, and $\||g|m_{\widehat G}-|g_n|m_{\widehat G}\|_{TV}\le\|g-g_n\|_1$, so outer and inner regularity pass to the limit. The character evaluation pairing $(\gamma,x)\mapsto\gamma(x)$ is jointly continuous, and every nonempty open subset of $G$ has positive Haar measure. ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-radon-measure-on-an-lch-space]], [[def-compact-space]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]])

## Proof

**Proof technique:** direct.

1.1 (Pointwise inversion and isometry on $C_c$.) For $h\in E$, set $H(x):=\int_{\widehat G}\widehat h(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)$, which is absolutely defined since $\widehat h\in L^1$ by [F2]. We first show $H$ is continuous without using sequential convergence: given $x_0\in G$ and $\varepsilon>0$, choose compact $C\subseteq\widehat G$ with $\int_{\widehat G\setminus C}|\widehat h|\,dm_{\widehat G}<\varepsilon/4$ by [F7]. Joint continuity of evaluation and compactness of $C$ give a neighbourhood $U$ of $x_0$ such that $|\gamma(x)-\gamma(x_0)|<\varepsilon/(2(1+\|\widehat h\|_1))$ for every $x\in U$ and $\gamma\in C$: take product neighbourhoods at each $(x_0,\gamma)$ and a finite subcover of $C$. Since characters have modulus one, for $x\in U$ we obtain $$|H(x)-H(x_0)|\le\frac{\varepsilon\|\widehat h\|_1}{2(1+\|\widehat h\|_1)}+2\int_{\widehat G\setminus C}|\widehat h|\,dm_{\widehat G}<\varepsilon.$$ Thus $H$ is continuous. By [F2], $h=H$ almost everywhere; both functions are continuous, so they agree everywhere, since a nonzero continuous difference would stay nonzero on a nonempty open set of positive Haar measure [F7]. In particular $h(0)=H(0)=\int_{\widehat G}\widehat h\,dm_{\widehat G}$. Parseval [F3] now gives $\|\widehat h\|_2=\|h\|_2$. For $g\in C_c(G;\mathbb C)$, take $h:=g*\widetilde g\in E$: by [F1] and the pointwise identity just proved, $$\|g\|_2^2=h(0)=\int_{\widehat G}\widehat h\,dm_{\widehat G}=\int_{\widehat G}|\widehat g|^2\,dm_{\widehat G}=\|\widehat g\|_2^2,$$ where the last equality uses $\widehat h=|\widehat g|^2$ from [F1]; hence the Fourier transform is isometric on $C_c(G;\mathbb C)$, and it is linear by [F5]. [F1, F2, F3, F5, F7]

1.2 (Simultaneous density of $C_c$ in $L^1\cap L^2$.) Let $f\in L^1(G,m_G)\cap L^2(G,m_G)$ and $\varepsilon>0$. Inner regularity of the finite Radon measures $|f|\,dm_G$ and $|f|^2\,dm_G$ [F4] gives a compact $K$ with $\int_{G\setminus K}|f|<\varepsilon/2$ and $\int_{G\setminus K}|f|^2<\varepsilon^2/4$; set $f_1:=f\mathbf 1_K$. Convolving with an approximate identity $u_U$ gives $\varphi:=f_1*u_U\in C_c(G;\mathbb C)$ with $\|\varphi-f_1\|_1<\varepsilon/2$ and $\|\varphi-f_1\|_2<\varepsilon/2$ for small identity neighbourhoods $U$, by norm continuity of translations and the approximate-identity limits in $L^1$ and $L^2$ [F4]. Here $f_1*u_U$ is continuous since its differences are bounded by $\|f_1\|_1\sup_t|u_U(t+z)-u_U(t)|$, which tends to zero by uniform continuity of $u_U\in C_c$; it vanishes outside the compact $K+\operatorname{supp}u_U$. Hence $\|f-\varphi\|_1<\varepsilon$ and $\|f-\varphi\|_2<\varepsilon$. [F4]

2.1 (The extension.) Step 1.1 makes the transform a linear isometry $T:C_c(G;\mathbb C)\to L^2(\widehat G,m_{\widehat G})$; $C_c(G;\mathbb C)$ is dense in $L^2(G,m_G)$ and $L^2(\widehat G,m_{\widehat G})$ is complete [F4, F5], so by [F6] $T$ has a unique linear isometric extension $\mathcal F:L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G})$ with $\|\mathcal F f\|_2=\|f\|_2$ for all $f$. [F4, F5, F6, step 1.1]

3.1 ($\mathcal F_0$ is the restriction of $\mathcal F$.) Let $f\in L^1\cap L^2$ and choose $\varphi_n\in C_c(G;\mathbb C)$ with $\|\varphi_n-f\|_1\to0$ and $\|\varphi_n-f\|_2\to0$ by step 1.2. Then $\|\widehat{\varphi_n}-\widehat f\|_\infty\le\|\varphi_n-f\|_1\to0$ by [F5], so $\widehat{\varphi_n}\to\widehat f$ pointwise everywhere; on the other hand $\widehat{\varphi_n}=\mathcal F\varphi_n\to\mathcal Ff$ in $L^2(\widehat G,m_{\widehat G})$ by step 2.1, so a subsequence of $(\widehat{\varphi_n})$ converges to $\mathcal Ff$ almost everywhere [F5]. Hence $\widehat f=\mathcal Ff$ $m_{\widehat G}$-almost everywhere; in particular $\widehat f\in L^2(\widehat G,m_{\widehat G})$ and, by step 2.1, $\|\widehat f\|_2=\|\mathcal Ff\|_2=\|f\|_2$. Thus the pointwise transform on $L^1\cap L^2$ is the restriction of $\mathcal F$ to that subspace, and $\mathcal F_0$ is a linear isometry. [F5, step 1.2, step 2.1]

4.1 (Density and uniqueness.) $C_c(G;\mathbb C)\subseteq L^1\cap L^2\subseteq L^2(G,m_G)$ and $C_c(G;\mathbb C)$ is dense in $L^2$ [F4], so $L^1\cap L^2$ is dense in $L^2$. If $\mathcal F'$ is another linear isometric extension of $\mathcal F_0$, then $\mathcal F-\mathcal F'$ is a bounded linear map vanishing on the dense subspace $L^1\cap L^2$, hence $\mathcal F'=\mathcal F$; the extension is unique. [F4, step 2.1, step 3.1]

5.1 Steps 2.1 and 3.1 exhibit the linear isometry $\mathcal F_0$ on the dense subspace $L^1\cap L^2$ and its unique linear isometric extension $\mathcal F$; no surjectivity of $\mathcal F$ is claimed, and no use of the biduality identification is made. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
