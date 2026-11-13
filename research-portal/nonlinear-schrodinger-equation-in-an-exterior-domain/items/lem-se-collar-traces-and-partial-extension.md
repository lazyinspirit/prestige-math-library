---
id: lem-se-collar-traces-and-partial-extension
kind: lemma
domain: mathematics
title: Collar traces and extension across an artificial boundary
status: draft
deps:
  - math:def-axiom-of-choice
  - lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives
  - lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly
  - lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing
  - lem-se-sobolev-extension-retraction
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives: mathematical-premise
  lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly: mathematical-premise
  lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing: mathematical-premise
  lem-se-sobolev-extension-retraction: mathematical-premise
  math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement

Assume AC, let $n\ge2$, and let $1\le s\le2$. Throughout, use complex Bessel-potential Sobolev spaces: for $d\ge1$ and $0\le t\le2$, $H^t(\mathbb R^d)$ consists of tempered distributions $U$ whose distributional product $(1+|\xi|^2)^{t/2}\widehat U$ is represented by an $L^2$ function, with norm equal to the $L^2$ norm of that function. The Fourier transform has negative sign and $2\pi$ normalization. For an open set $D\subset\mathbb R^d$, use the restriction space and quotient norm
$$H^t(D)=\{U|_D:U\in H^t(\mathbb R^d)\},\qquad \|u\|_{H^t(D)}=\inf_{U|_D=u}\|U\|_{H^t(\mathbb R^d)}.$$

For a compact smooth embedded hypersurface $S\subset\mathbb R^n$ without boundary, equip $S$ with its induced smooth structure and define $H^r(S)$, $1/2\le r\le3/2$, by a finite compatible smooth atlas $\kappa_i:U_i\to V_i\subset\mathbb R^{n-1}$ and a subordinate smooth partition $\chi_i$ supported compactly inside the chart domains. For $f\in L^2(S)$ let $f_i=(\chi_i f)\circ\kappa_i^{-1}$, extended by zero outside $V_i$, and set $\|f\|_{H^r(S)}^2=\sum_i\|f_i\|_{H^r(\mathbb R^{n-1})}^2$. These norms are independent of the chosen compatible finite atlas and partition up to equivalence. At order $3/2$ this squared norm is equivalent to $\sum_i(\|f_i\|_{H^{1/2}}^2+\sum_{a=1}^{n-1}\|\partial_a f_i\|_{H^{1/2}}^2)$. Thus the space is equivalently described by the lower-order norm and order-$1/2$ first tangential weak derivatives of localized representatives, without choosing a global tangent frame.

Let $G\subset\mathbb R^n$ be a bounded smooth domain and let $S$ be a smooth boundary component. Smooth restriction extends to a bounded linear trace $\gamma_S:H^s(G)\to H^{s-1/2}(S)$, agreeing in $L^2(S)$ with the first-order trace. For the interior version, let $U\subset\mathbb R^n$ be open, let $S\subset U$ be a compact smooth embedded hypersurface without boundary, and fix a bounded smooth collar/neighborhood $W\Subset U$ containing $S$. Restriction to $W$ followed by its interior trace gives a bounded linear map $H^s(U)\to H^{s-1/2}(S)$. The constants may depend on this fixed collar and its finite atlas. The traces are local, commute with smooth cutoffs, and are independent of extensions and local sides.

For the extension assertions, let $\Theta\subset\mathbb R^n$ be a compact smooth obstacle, with connected smooth exterior $\Omega=\mathbb R^n\setminus\Theta$. Write $B_L=\{x\in\mathbb R^n:|x|<L\}$, choose $L>0$ with $\Theta\Subset B_L$, and put $G_0=\Omega\cap B_L$; its artificial boundary is $\partial B_L$. If $v\in H^s(G_0)$ vanishes on a neighborhood of $\partial B_L$ inside $G_0$, define $\widehat v=v$ on $G_0$ and $\widehat v=0$ on $\Omega\setminus G_0$. Then $\widehat v\in H^s(\Omega)$. For each fixed outer gap and separating cutoff this partial zero extension is bounded, with constants allowed to depend on that gap/cutoff. No vanishing near $\partial\Theta$ is required, and no uniform bound for shrinking gaps is asserted. Here the hat on $v$ denotes partial zero extension, whereas the hat on $U$ in the Fourier convention above denotes Fourier transformation.

For bounded gluing, fix $0<\varepsilon<L/3$ with $\Theta\subset B_{L-3\varepsilon}$. Fix smooth cutoffs $\zeta,\widetilde\zeta$ with bounded derivatives, with $\zeta=0$ on $B_{L-2\varepsilon}$, $\zeta=1$ for $|x|\ge L-\varepsilon$, $\widetilde\zeta=0$ on $B_{L-3\varepsilon}$, and $\widetilde\zeta=1$ on $\operatorname{supp}\zeta$. Put $\mathcal A=\{L-3\varepsilon<|x|<L\}$ and fix one simultaneous bounded linear extension $E_{\mathcal A}:H^t(\mathcal A)\to H^t(\mathbb R^n)$, $0\le t\le2$, agreeing with its input on $\mathcal A$. Then
$$\mathcal G u=\widehat{(1-\zeta)u}+\left.\widetilde\zeta E_{\mathcal A}((\zeta u)|_{\mathcal A})\right|_\Omega$$
is a bounded linear map $H^s(G_0)\to H^s(\Omega)$ with $(\mathcal G u)|_{G_0}=u$ and $\gamma_{\partial\Theta}\mathcal G u=\gamma_{\partial\Theta}u$. In particular it preserves zero obstacle trace; it does not zero-extend across the obstacle. All gluing data are fixed.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [[math:def-axiom-of-choice]]; in particular its countable and dependent instances are available. The assumption is inherited in applying the norm, trace and extension suppliers below.

[F2] [[lem-se-author-8d28f6f38ee5-hypersurface-atlas-and-derivatives]] defines and proves the finite-atlas Sobolev norm, its independence, completeness and the order-$3/2$ local tangential-derivative description for compact smooth embedded hypersurfaces without boundary and compatible atlases.

[F3] [[lem-se-author-8d28f6f38ee5-smooth-collar-trace-assembly]] proves the asserted $H^s\to H^{s-1/2}$ boundary and compact interior trace bounds for $1\le s\le2$, with restriction-quotient domain spaces, canonical $L^2$ agreement with the first-order trace, locality and cutoff commutation. The interior assertion uses a fixed bounded smooth collar/neighborhood contained in the ambient open region.

[F4] [[lem-se-author-8d28f6f38ee5-artificial-sphere-extension-and-gluing]] proves partial zero extension for $v\in H^s(G_0)$ with an outer gap, and proves the displayed fixed-cutoff annular gluing formula, its restriction identity and preservation of the inner obstacle trace under the stated geometry. It never zero-extends a general $H^2$ function across the obstacle from its value trace alone.

[F5] [[lem-se-sobolev-extension-retraction]] supplies the restriction-quotient Bessel convention and simultaneous bounded extensions for bounded smooth domains, including $G$, $W$, $G_0$ and $\mathcal A$, and supplies the smooth exterior localization. In particular its annular extension can be chosen as $E_{\mathcal A}$ in the Statement.

[F6] [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] identifies the whole-space Bessel spaces with weighted Fourier tempered distributions with the stated norm and negative-sign $2\pi$ transform for all real orders and all positive dimensions. Its Countable Choice hypothesis is available under AC.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 The Fourier characterization gives precisely the whole-space spaces and norms fixed in the Statement. The restriction-quotient convention and simultaneous bounded extensions on the stated smooth domains are those of the extension/retraction supplier. In particular fix its extension for the smooth bounded annulus $\mathcal A$. AC supplies the choice hypotheses of these interfaces and of the following atlas and trace suppliers. [F1, F5, F6, given]

2.1 Apply the hypersurface atlas lemma to each compact smooth embedded hypersurface in the Statement, with its induced smooth structure and compatible finite atlas. It gives the stated norm, atlas independence and completeness. Its Fourier derivative calculation identifies the $H^{3/2}$ norm with the lower $H^{1/2}$ norm plus first local coordinate derivatives in $H^{1/2}$, and its transition argument makes this tangential description intrinsic without a global tangent frame. [F2, step 1.1, given]

2.2 The given compact-obstacle exterior, $\Theta\Subset B_L$, order $1\le s\le2$ and input $v\in H^s(G_0)$ with an outer vanishing neighborhood satisfy the partial-extension supplier's hypotheses. Its separating cutoff in a fixed outer gap represents $\widehat v$ as an ordinary whole-space extension multiplied by that cutoff and restricted to $\Omega$. Hence $\widehat v\in H^s(\Omega)$ with a bound for each fixed gap/cutoff. This restricts away the obstacle and requires no vanishing of $v$ near $\partial\Theta$. The supplier retains the gap dependence. [F4, F5, step 1.1, given]

3.1 Apply the collar trace theorem to the bounded smooth $G$ and its smooth boundary component. It gives the claimed bounded trace for $1\le s\le2$ with the finite-atlas target. For the interior case the given compact smooth hypersurface and fixed bounded smooth $W\Subset U$ meet the same supplier's interior hypotheses. Restriction $H^s(U)\to H^s(W)$ cannot increase the quotient norm, since each whole-space representative on $U$ is also a representative on $W$. Composing restriction with that fixed interior trace gives the claimed bound, with its allowed collar dependence. The supplier's canonical $L^2$ agreement and locality give consistency with the boundary trace from either local side and independence of extensions and charts, as well as cutoff commutation. [F3, F5, step 1.1, step 2.1, given]

4.1 The fixed $\varepsilon$, cutoffs, annulus and simultaneous $E_{\mathcal A}$ satisfy exactly the gluing hypotheses of the same supplier. Thus its gluing map is the displayed $\mathcal G$, bounded from $H^s(G_0)$ to $H^s(\Omega)$. On the annulus its second term restricts to $\widetilde\zeta\zeta u=\zeta u$, and below the annulus $\zeta=0$, so the sum restricts to $u$ on $G_0$. Near the obstacle, $\zeta=\widetilde\zeta=0$, so the first term equals $u$ there and the correction vanishes. Canonical trace locality therefore gives equality of the obstacle traces, including preservation of zero trace. These are partial extension and gluing across the artificial sphere with the fixed data of the Statement. [F3, F4, step 3.1, step 2.2, given, algebra] ∎

## Source notes

The restriction-quotient convention and simultaneous extensions are supplied by the Sobolev extension/retraction result, the whole-space Fourier model by the Fourier characterization, and the intrinsic hypersurface norm by the atlas lemma. The collar trace and artificial-sphere gluing lemmas supply the stated trace and extension conclusions for the specified geometry. Constants retain their fixed collar, atlas, gap and cutoff dependence.
