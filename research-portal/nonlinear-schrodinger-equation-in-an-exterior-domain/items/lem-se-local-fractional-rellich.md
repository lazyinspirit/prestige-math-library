---
id: lem-se-local-fractional-rellich
kind: lemma
domain: mathematics
title: Fractional compactness on bounded collar domains
status: published
deps:
  - lem-se-sobolev-extension-retraction
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-plancherel
  - math:thm-fourier-translation-modulation-dilation-and-reflection-laws
  - math:thm-frechet-kolmogorov-compactness-criterion-in-lp
  - math:lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:def-sobolev-space-wkp-and-its-norm
  - math:lem-complex-lp-completeness-density-and-inner-product
  - math:lem-fundamental-lemma-of-the-calculus-of-variations
  - math:def-axiom-of-choice
  - math:ex-zero-order-bessel-completion-is-ltwo
  - math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - math:lem-japanese-bracket-powers-preserve-schwartz-space
  - math:thm-tempered-distributions-embed-continuously-in-distributions
dependency_roles:
  lem-se-sobolev-extension-retraction: mathematical-premise
  math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces: mathematical-premise
  math:thm-plancherel: mathematical-premise
  math:thm-fourier-translation-modulation-dilation-and-reflection-laws: mathematical-premise
  math:thm-frechet-kolmogorov-compactness-criterion-in-lp: mathematical-premise
  math:lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:lem-complex-lp-completeness-density-and-inner-product: mathematical-premise
  math:lem-fundamental-lemma-of-the-calculus-of-variations: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:ex-zero-order-bessel-completion-is-ltwo: mathematical-premise
  math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms: mathematical-premise
  math:lem-japanese-bracket-powers-preserve-schwartz-space: mathematical-premise
  math:thm-tempered-distributions-embed-continuously-in-distributions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement

Assume the Axiom of Choice. Let $G\subset\mathbb R^n$ be a bounded smooth domain, $n\ge1$. Define $H^{1/2}(G)$ as the restrictions to $G$ of $H^{1/2}(\mathbb R^n)$, with the infimum norm over all extensions. Then the inclusion $H^{1/2}(G)\hookrightarrow L^2(G)$ is compact: it sends bounded sets to sets with compact closure.

Let $H^2_0(G)$ be the closure of $C_c^\infty(G)$ in the weak-derivative $W^{2,2}(G)$ norm. With complex scalars, write $(H^2_0(G))'$ for the continuous conjugate-linear functionals on $H^2_0(G)$. The pairing $f\mapsto[v\mapsto\int_G f\overline v\,dx]$ is a continuous injective linear map from $L^2(G)$ into $(H^2_0(G))'$. Thus the triple $H^{1/2}(G)\hookrightarrow L^2(G)\hookrightarrow(H^2_0(G))'$ has compact first and continuous injective second inclusion. For the convention in which the dual consists of linear functionals, conjugating this pairing gives the corresponding continuous injective conjugate-linear map.

## Statement references

[[lem-se-sobolev-extension-retraction]]

[[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]

[[math:def-wkp-zero-as-a-sobolev-closure]]

[[math:def-sobolev-space-wkp-and-its-norm]]

[[math:lem-complex-lp-completeness-density-and-inner-product]]

[[math:def-axiom-of-choice]]

[[math:ex-zero-order-bessel-completion-is-ltwo]]

[[math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]

[[math:lem-japanese-bracket-powers-preserve-schwartz-space]]

[[math:thm-tempered-distributions-embed-continuously-in-distributions]]

## Facts & Assumptions

**Given:** The hypotheses, spaces and pairing in the Statement.

[F1] The Axiom of Choice supplies the countable and dependent choice hypotheses of the cited Fourier and compactness results. [[math:def-axiom-of-choice]]

[F2] For bounded smooth $G$, there is a bounded linear extension $E:H^{1/2}(G)\to H^{1/2}(\mathbb R^n)$, agreeing with its input on $G$, whose outputs have support in one fixed compact set. The domain space uses the restriction-quotient convention. [[lem-se-sobolev-extension-retraction]]

[F3] Use the negative-sign $2\pi$ distributional Fourier transform $\mathcal F$ and $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$. For $s\in\{0,1/2\}$, the canonical embedding $\iota_s$ identifies $H^s(\mathbb R^n)$ bijectively with the tempered distributions $T$ such that $\langle\xi\rangle^s\mathcal FT=u_g$ for an $L^2$ density $g$, and the $H^s$ norm is $\|g\|_2$. Here $u_g$ is the regular distribution with bilinear test pairing $\varphi\mapsto\int g\varphi$. The Plancherel extension $\mathcal F_2$ is a complex-linear $L^2$ isometry. [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] [[math:thm-plancherel]]

[F4] For an $L^1$ function, translation $\tau_hU(x)=U(x-h)$ multiplies its Fourier transform by $e^{-2\pi i h\cdot\xi}$. [[math:thm-fourier-translation-modulation-dilation-and-reflection-laws]]

[F5] A uniformly bounded $L^2(\mathbb R^n)$ family with uniformly vanishing tails and uniformly small translation differences has compact closure in $L^2(\mathbb R^n)$. Uniform support in a bounded set supplies the tail condition. [[math:thm-frechet-kolmogorov-compactness-criterion-in-lp]] [[math:lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic]]

[F6] The $W^{2,2}$ norm dominates the $L^2$ norm, and $H^2_0(G)$ contains every smooth compactly supported test function. The $L^2$ pairing satisfies Cauchy–Schwarz. [[math:def-sobolev-space-wkp-and-its-norm]] [[math:def-wkp-zero-as-a-sobolev-closure]] [[math:lem-complex-lp-completeness-density-and-inner-product]]

[F7] A locally integrable function on an open set that pairs to zero with every smooth compactly supported test function vanishes almost everywhere. [[math:lem-fundamental-lemma-of-the-calculus-of-variations]]

[F8] There is a surjective linear isometry $I_0:H^0(\mathbb R^n)\to L^2(\mathbb R^n)$ with $\iota_0(V)=u_{I_0V}$. For $f\in L^2$, $\mathcal Fu_f=u_{\mathcal F_2f}$; for $f\in L^1$, $\mathcal Fu_f=u_{\widehat f}$ with $\widehat f$ the integral transform. All these distributional equalities use the same bilinear pairing and negative-sign $2\pi$ convention. [[math:ex-zero-order-bessel-completion-is-ltwo]] [[math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]

[F9] Multiplication by $\langle\xi\rangle^{1/2}$ and $\langle\xi\rangle^{-1/2}$ gives mutually inverse operators on $\mathcal S'$; by transposition, multiplying a regular distribution by either weight gives the regular distribution of the corresponding product whenever that product is used below. [[math:lem-japanese-bracket-powers-preserve-schwartz-space]]

[F10] Restriction to compactly supported tests is an injective map $\rho:\mathcal S'(\mathbb R^n)\to\mathcal D'(\mathbb R^n)$. For a regular tempered distribution $u_f$, its restriction acts by the same integral $\varphi\mapsto\int f\varphi$; further restriction to an open set uses tests supported in that set. [[math:thm-tempered-distributions-embed-continuously-in-distributions]]

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove compactness of the first inclusion and continuity and injectivity of the pairing into the conjugate dual.

1.1 Let $U\in H^{1/2}(\mathbb R^n)$, put $T=\iota_{1/2}U$, and choose its unique density $g$ from [F3], so $\langle\xi\rangle^{1/2}\mathcal FT=u_g$ and $\|g\|_2=\|U\|_{H^{1/2}}$. By [F9], $\mathcal FT=u_q$, where $q=\langle\xi\rangle^{-1/2}g\in L^2$ and $\|q\|_2\le\|g\|_2$. The $s=0$ case of [F3] therefore supplies $V\in H^0$ with $\iota_0V=T$. By [F8], $f=I_0V\in L^2$ satisfies $T=u_f$. The same fact gives $u_{\mathcal F_2f}=\mathcal FT=u_q$. Restricting this equality to compact tests by [F10] and applying [F7] to the locally integrable difference gives $\mathcal F_2f=q$ almost everywhere. Thus $\langle\xi\rangle^{1/2}\mathcal F_2f=g$ almost everywhere and $\|f\|_2=\|q\|_2\le\|U\|_{H^{1/2}}$, with $\|\langle\xi\rangle^{1/2}\mathcal F_2f\|_2=\|U\|_{H^{1/2}}$. This identification is linear and injective because the distribution embeddings and $I_0$ are linear and injective. [F1, F3, F7, F8, F9, F10, given]

1.2 For $f\in L^2(G)$ and $v\in H^2_0(G)$, [F6] gives $|\int_G f\overline v|\le\|f\|_2\|v\|_2\le\|f\|_2\|v\|_{W^{2,2}}$. Thus the displayed pairing is a well-defined continuous conjugate-linear functional of $v$, and its operator norm is at most $\|f\|_2$. It is linear in $f$. [F6, given]

2.1 Under [F10], the distributional restriction of $T=u_f$ to $G$ acts on every test in $C_c^\infty(G)$ by integration against $f|_G$. Two whole-space extensions of the same restriction class therefore give $L^2(G)$ functions whose difference pairs to zero with all these tests; [F7] makes them equal almost everywhere. This defines the claimed map $H^{1/2}(G)\to L^2(G)$. If its value is zero, its restricted distribution is zero, so its restriction class is zero, proving injectivity. For every whole-space extension $U$ of a class $u$, step 1.1 gives $\|u\|_{L^2(G)}\le\|U\|_{H^{1/2}(\mathbb R^n)}$; taking the infimum over extensions proves $\|u\|_{L^2(G)}\le\|u\|_{H^{1/2}(G)}$. Hence this inclusion is well-defined, linear and continuous in exactly the restriction-quotient convention of the Statement. [F2, F7, F10, step 1.1, given]

3.1 Let $B$ be bounded in $H^{1/2}(G)$ and identify $\mathcal F=E(B)$ with its $L^2$ classes by step 1.1. By [F2], $\sup_{U\in\mathcal F}\|U\|_{H^{1/2}}<\infty$, hence $\sup_{U\in\mathcal F}\|U\|_2<\infty$. The distributions of these extensions are supported in one fixed compact set $K$. By [F10] they pair to zero with all compact tests in $\mathbb R^n\setminus K$, and [F7] makes their $L^2$ representatives vanish almost everywhere there. Thus their $L^2$ tails vanish uniformly by [F5]. Cauchy–Schwarz on $K$ gives $\|U\|_1\le |K|^{1/2}\|U\|_2$, so each member also belongs to $L^1$. [F2, F5, F6, F7, F10, step 1.1, step 2.1, given]

4.1 For any $V\in L^1\cap L^2$, the two Fourier agreement identities in [F8] give $u_{\widehat V}=u_{\mathcal F_2V}$; by [F10] and [F7], $\widehat V=\mathcal F_2V$ almost everywhere. If $U\in\mathcal F$, both $U$ and $\tau_hU$ belong to $L^1\cap L^2$, since substituting $x-h$ for $x$ preserves both norms. Applying this agreement and [F4], and then the Plancherel identity [F3], gives $\|\tau_hU-U\|_2^2=\int |e^{-2\pi i h\cdot\xi}-1|^2|\mathcal F_2U(\xi)|^2\,d\xi$. The elementary estimate $|e^{-it}-1|^2\le\min\{t^2,4\}\le2|t|$ gives $|e^{-2\pi i h\cdot\xi}-1|^2\le4\pi|h|\langle\xi\rangle$. By step 1.1, $\|\tau_hU-U\|_2^2\le4\pi|h|\|U\|_{H^{1/2}}^2$, uniformly for $U\in\mathcal F$. [F3, F4, F7, F8, F10, step 1.1, step 3.1]

5.1 The boundedness, tail and translation hypotheses of [F5] now hold for $\mathcal F$, so its closure is compact in $L^2(\mathbb R^n)$. Restriction to $G$ is an $L^2$ contraction, and by [F2] and step 2.1 it restricts $Eu$ to the same $L^2(G)$ class as $u$ for every $u\in B$. Thus $B$ lies in the compact image of the closure of $\mathcal F$ under restriction, and its closure in $L^2(G)$ is compact. This proves compactness of the first inclusion. [F1, F2, F5, step 2.1, step 3.1, step 4.1]

6.1 If the functional in step 1.2 is zero, it vanishes on $C_c^\infty(G)$ by [F6]. Complex conjugation preserves the test space, so $\int_G f\varphi=0$ for every test function $\varphi$. Since $f\in L^2(G)$ is locally integrable by Cauchy–Schwarz on compact subsets, [F7] yields $f=0$ almost everywhere. Hence the second map is injective; together with steps 5.1 and 1.2 this proves the stated triple. Conjugating the scalar value of each functional gives the stated continuous injective conjugate-linear map into the scalar-linear dual, with the same norm bound. [F6, F7, step 5.1, step 1.2] ∎

## Remarks

The compactness assertion is local to a bounded domain; it does not assert compactness of the corresponding embedding on an unbounded exterior domain. No smoothing estimate is asserted.
