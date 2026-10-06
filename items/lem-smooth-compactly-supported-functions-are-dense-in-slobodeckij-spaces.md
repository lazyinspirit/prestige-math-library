---
id: lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces
kind: lemma
title: "Compactly supported smooth functions are dense in Slobodeckij spaces"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-fractional-slobodeckij-space-on-euclidean-space, lem-slobodeckij-seminorm-is-well-defined, thm-l-one-approximate-identities-converge-in-l-p, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, lem-complex-translation-and-approximate-identity-interfaces, thm-dominated-convergence, thm-tonelli-and-fubini-for-completed-product-measures, thm-integrals-are-invariant-under-measure-preserving-maps, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, thm-holder-inequality-for-integrals]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-4.md"
      - "research/frontier-38-owner-30-alpha-batch-4-5a.md"
      - "research/frontier-38-owner-30-step5-hash-4-post-5a.json"
    content_sha256: "41d53408b99acfb41cd1b2337ce48b0cc6fb397cf0a5eb8ffd7c38fbb3a0336e"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Lemma 26 and its proof, printed pp. 74-77: mollification $f_\\varepsilon=f*\\rho_\\varepsilon\\to f$ in $W^{s,p}$ for every $f\\in W^{s,p}$ and every $0<s<1$, $1\\le p<\\infty$."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Sections V.1-V.2, printed pp. 96-100: the space is defined on $L^p$ classes and used through density and scaling arguments."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 2, approximation steps in the proof of Teorema [1.I], printed pp. 290-300: smooth functions with compact support are used as the dense class."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 12, Lemma 26 and its complete proof (12.4)-(12.19), printed pp. 82-84."
---

## Statement

Assume Countable Choice. Let $d\ge1$, $0<s<1$ and $1\le p<\infty$. Then
$C_c^\infty(\mathbb R^d)$ is dense in $W^{s,p}(\mathbb R^d)$: for every
$g\in W^{s,p}(\mathbb R^d)$ and every $\varepsilon>0$ there is
$\varphi\in C_c^\infty(\mathbb R^d)$ with
$\|g-\varphi\|_{W^{s,p}(\mathbb R^d)}<\varepsilon$.

## Facts & Assumptions

**Given:** Countable Choice; $d\ge1$, $0<s<1$, $1\le p<\infty$; the space $W^{s,p}(\mathbb R^d)$ with $\|g\|_{W^{s,p}}=\|g\|_{L^p}+[g]_{s,p}$.

[F1] The seminorm is $[g]_{s,p}=(\int\int|g(x)-g(y)|^p|x-y|^{-d-sp}dx\,dy)^{1/p}$, read as $0$ on the diagonal, and $W^{s,p}$ consists of the $L^p$ classes with finite seminorm. ([[def-fractional-slobodeckij-space-on-euclidean-space]])

[F2] The extended quantity $[\cdot]_{s,p}$ satisfies the triangle inequality $[f+h]_{s,p}\le[f]_{s,p}+[h]_{s,p}$ and is homogeneous; representative independence holds. ([[lem-slobodeckij-seminorm-is-well-defined]])

[F3] Assume Countable Choice. For $1\le p<\infty$ and $f\in L^p(\mathbb R^d)$, $\|\tau_hf-f\|_p\to0$ as $h\to0$, where $\tau_hf=f(\cdot-h)$. ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]])

[F4] The Lebesgue integral is invariant under translations and under measure-preserving maps. ([[thm-integrals-are-invariant-under-measure-preserving-maps]])

[F5] Assume Countable Choice. For an $L^1$ approximate identity $(K_\varepsilon)$ and $f\in L^p$, $1\le p<\infty$, $\|f*K_\varepsilon-f\|_p\to0$. ([[thm-l-one-approximate-identities-converge-in-l-p]])

[F6] For $K\in L^1$ and $f\in L^p$ the convolution is measurable and $\|K*f\|_p\le\|K\|_1\|f\|_p$; for a mollifier $\rho_\varepsilon(x)=\varepsilon^{-d}\rho(x/\varepsilon)$ with $\rho\ge0$, $\int\rho=1$, the convolution $\rho_\varepsilon*f$ is smooth and $\int_{|y|\ge\delta}\rho_\varepsilon(y)dy\to0$ for every $\delta>0$; a compactly supported input gives a compactly supported output. ([[lem-complex-translation-and-approximate-identity-interfaces]])

[F7] Dominated convergence: if $f_n\to f$ a.e. and $|f_n|\le G$ a.e. with $\int G<\infty$, then $\int|f_n-f|\to0$. ([[thm-dominated-convergence]])

[F8] Assume Countable Choice. For nonnegative measurable functions on a product of sigma-finite spaces the double integral equals the iterated integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F9] Polar coordinates evaluate radial nonnegative integrals; in particular $\int_{\mathbb R^d}\min(1,L|h|)^p|h|^{-d-sp}dh<\infty$ when $0<s<1$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F10] Hölder's inequality gives $|\int a\,d\mu|^p\le\int|a|^p\,d\mu$ for a probability measure. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** direct.

1.1 Truncation. Choose $\eta\in C_c^\infty(\mathbb R^d)$ with $0\le\eta\le1$, equal to one on $B(0,1)$, and set $\eta_R(x)=\eta(x/R)$ and $A_R=(1-\eta_R)g$. Dominated convergence gives $\|A_R\|_p\to0$. Write $A_R(x)-A_R(y)=(1-\eta_R(x))(g(x)-g(y))+(\eta_R(y)-\eta_R(x))g(y)$. The weighted integral of the first term's $p$-th power tends to zero by dominated convergence, dominated by the defining seminorm integrand of $g$. For the second, $|\eta_R(x)-\eta_R(y)|\le\min(2,\|D\eta\|_\infty|x-y|/R)$; translating $h=x-y$ and scaling $h=Rz$ bounds its weighted integral by $C R^{-sp}\|g\|_p^p$, with $C<\infty$ by [F9]. The inequality $|a+b|^p\le2^{p-1}(|a|^p+|b|^p)$ now gives $[A_R]_{s,p}\to0$, so $\eta_Rg\to g$ in $W^{s,p}$. [F1, F7, F8, F9, algebra, given]

1.2 Translation continuity. For $\varphi\in W^{s,p}$ define $F(x,h)=(\varphi(x+h)-\varphi(x))|h|^{-(d+sp)/p}$ off $h=0$, and zero there. Tonelli and translation invariance give $F\in L^p(\mathbb R^{2d})$ with $\|F\|_p=[\varphi]_{s,p}$. Translating only its $x$ coordinate gives $[\varphi(\cdot-z)-\varphi]_{s,p}=\|F(\cdot-z,\cdot)-F\|_{L^p(\mathbb R^{2d})}\to0$ by [F3] in dimension $2d$. Also this seminorm is at most $2[\varphi]_{s,p}$ by [F2] and [F4]. [F1, F2, F3, F4, F8, algebra]

2.1 Mollification of a compactly supported class. Let $\varphi\in W^{s,p}$ be compactly supported and let $\rho_\varepsilon$ be a standard nonnegative mollifier as in [F6]. Since $\rho_\varepsilon$ has mass one, $(\rho_\varepsilon*\varphi-\varphi)(x)-(\rho_\varepsilon*\varphi-\varphi)(y)=\int\rho_\varepsilon(z)\bigl[\varphi(x-z)-\varphi(x)-\varphi(y-z)+\varphi(y)\bigr]dz$, and Holder's inequality in the probability measure $\rho_\varepsilon(z)dz$ gives $[\rho_\varepsilon*\varphi-\varphi]_{s,p}^p\le\int\rho_\varepsilon(z)[\varphi(\cdot-z)-\varphi]_{s,p}^pdz$ after integrating the pointwise $p$-th power estimate and exchanging the $z$- and $(x,y)$-integrals by Tonelli [F8]. By step 1.2 the integrand is bounded by $2^p[\varphi]_{s,p}^p$ and tends to $0$ as $z\to0$, while $\int_{|z|>\delta}\rho_\varepsilon(z)dz\to0$ for each $\delta>0$ by [F6]; hence $\int\rho_\varepsilon(z)[\varphi(\cdot-z)-\varphi]_{s,p}^pdz\to0$ as $\varepsilon\downarrow0$. Also $\|\rho_\varepsilon*\varphi-\varphi\|_p\to0$ by [F5]. Therefore $\rho_\varepsilon*\varphi\to\varphi$ in $W^{s,p}(\mathbb R^d)$, and each $\rho_\varepsilon*\varphi\in C_c^\infty(\mathbb R^d)$ by [F6]. [F5, F6, F8, F10, step 1.2, algebra]

3.1 Conclusion. Let $g\in W^{s,p}(\mathbb R^d)$ and $\varepsilon>0$. By step 1.1 choose $R$ with $\|\eta_Rg-g\|_{W^{s,p}}<\varepsilon/2$. The class $\varphi=\eta_Rg$ is compactly supported, and step 2.1 supplies a mollifier scale $\delta>0$ with $\|\rho_\delta*\varphi-\varphi\|_{W^{s,p}}<\varepsilon/2$. Then $\rho_\delta*\varphi\in C_c^\infty(\mathbb R^d)$ and $\|g-\rho_\delta*\varphi\|_{W^{s,p}}<\varepsilon$. [step 1.1, step 2.1, algebra, given] ∎

## Source notes

Mironescu's Lemma 26 (printed pp. 74-77) proves that mollification converges in $W^{s,p}$ for every element of the space; Schikorra's Sections V.1-V.2 (printed pp. 96-100) uses exactly this density, and Gagliardo's approximation steps (printed pp. 290-300) take smooth compactly supported functions as the dense class. The truncation uses the original difference integrand and the Lipschitz cutoff cancellation; translation continuity is applied to the weighted increment as an $L^p(\mathbb R^{2d})$ function. The singular weight alone is never treated as integrable at the origin.
