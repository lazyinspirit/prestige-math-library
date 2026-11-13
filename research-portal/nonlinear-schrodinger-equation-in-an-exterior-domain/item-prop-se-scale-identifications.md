---
title: Low-order identifications of the Dirichlet scale
status: draft
research_item: prop-se-scale-identifications
dependency_level: 11
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 4: ` paragraph after (1.8) `; PDF p. 6: ` footnote 2 `; PDF p. 16: ` Remark 5 `

## Prerequisites

- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [lem-se-exterior-fractional-identification](item-lem-se-exterior-fractional-identification)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [math:thm-extension-theorem-for-bounded-smooth-domains](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains)
- [math:def-bounded-c-k-domain-and-boundary-charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor)
- [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces)
- [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space)
- [math:thm-bessel-potential-completions-embed-in-tempered-distributions](https://alphabetamath.cc/item/thm-bessel-potential-completions-embed-in-tempered-distributions)
- [math:thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation](https://alphabetamath.cc/item/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation)


## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose that $\Omega=\mathbb R^n\setminus\Theta$ is connected. Let $\Delta_D$ be the Dirichlet Laplacian and put $A=I-\Delta_D$. For $s\ge0$, write $H_D^s(\Omega)=D(A^{s/2})$ with norm $\|A^{s/2}u\|_{L^2(\Omega)}$, and let $H_D^{-s}(\Omega)$ be the corresponding negative spectral-scale space.

Let $H^s(\Omega)$ denote restrictions to $\Omega$ of whole-space Bessel-potential $H^s(\mathbb R^n)$ functions, with the quotient norm. For integer $k\ge0$, this is the usual complex weak-derivative Sobolev space $H^k(\Omega)$; $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in $H^1(\Omega)$. Then, as spaces with equivalent norms,

$$H_D^s(\Omega)=H^s(\Omega)\quad(0\le s<1/2),\qquad H_D^s(\Omega)=H^s(\Omega)\cap H^1_0(\Omega)\quad(1\le s\le2).$$

In particular $H_D^1(\Omega)=H^1_0(\Omega)$ and $H_D^2(\Omega)=H^2(\Omega)\cap H^1_0(\Omega)$. For every $s\ge0$, $H_D^{-s}(\Omega)$ is isometrically the antidual of $H_D^s(\Omega)$ under the extended $L^2$ pairing, where antidual means bounded conjugate-linear scalar functionals.

## Statement references

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[lem-se-exterior-fractional-identification](item-lem-se-exterior-fractional-identification)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)

[math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space)

[math:thm-bessel-potential-completions-embed-in-tempered-distributions](https://alphabetamath.cc/item/thm-bessel-potential-completions-embed-in-tempered-distributions)

[math:thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation](https://alphabetamath.cc/item/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation)

## Facts & Assumptions

**Given:** The hypotheses and conventions in the Statement.

[F1] The spectral scale and pivot antidual are defined in [def-se-dirichlet-scale](item-def-se-dirichlet-scale), under the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] The exterior fractional-identification lemma [lem-se-exterior-fractional-identification](item-lem-se-exterior-fractional-identification) gives, with equivalent norms, $H_D^s=H^s$ for $0\le s<1/2$ and $H_D^s=H^s\cap H^1_0$ for $1\le s\le2$, with the restriction-space convention stated above.

[F3] The realization [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $D(A^{1/2})=H^1_0$ with the form norm and $D(A)=H^2\cap H^1_0$ with graph norm equivalent to the $H^2$ norm. The weak integer-order notation and closure are specified by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation).

[F4] Under Countable Choice, [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies the whole-space Bessel-potential $H^k(\mathbb R^n)$ with $W^{k,2}(\mathbb R^n;\mathbb C)$ for every integer $k\ge0$, with equivalent norms.

[F5] Under AC, [Bounded $C^k$ domains admit integer-order Sobolev extension](https://alphabetamath.cc/item/thm-extension-theorem-for-bounded-smooth-domains) gives a bounded linear extension $W^{k,2}(G;\mathbb C)\to W^{k,2}(\mathbb R^n;\mathbb C)$ for every fixed $k\ge1$ when $G$ is a bounded $C^k$ open set in the one-sided graph convention of [Bounded $C^k$ domains and boundary charts](https://alphabetamath.cc/item/def-bounded-c-k-domain-and-boundary-charts). Connectedness of $G$ is not required by that convention. For $k=0$, zero extension on any open set is an isometric $L^2$ extension. The operator and bounds may depend on $k$.

[F6] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) supplies smooth cutoffs equal to one near a compact set and supported in a prescribed open neighborhood. [math:lem-weak-leibniz-rule-with-a-smooth-factor](https://alphabetamath.cc/item/lem-weak-leibniz-rule-with-a-smooth-factor) supplies the weak product formula in every integer order and bounded multiplication on $W^{k,2}$ for smooth factors whose derivatives through order $k$ are bounded.

[F7] Under AC, [math:lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces](https://alphabetamath.cc/item/lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces) gives contractive restriction of $W^{k,2}$ to open subsets, preserving all weak derivatives. Weak derivative identities and complex Sobolev norms have the conventions in [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation). The assumed AC supplies the Countable Choice hypotheses of the Fourier and weak-product interfaces; its full strength is used in the bounded-domain extension interface, through selection of boundary charts.

[F8] Under Countable Choice, [math:def-real-order-bessel-potential-sobolev-space](https://alphabetamath.cc/item/def-real-order-bessel-potential-sobolev-space) defines $H^s(\mathbb R^n)$ for every real $s$ as the completion of Schwartz space in the norm $\|\langle\xi\rangle^s\widehat u\|_2$. [math:thm-bessel-potential-completions-embed-in-tempered-distributions](https://alphabetamath.cc/item/thm-bessel-potential-completions-embed-in-tempered-distributions) supplies the canonical injection $E_s:H^s\to\mathcal S'$ and surjective isometry $J_s:H^s\to L^2$, with $E_sU=\mathcal F^{-1}(u_{\langle\xi\rangle^{-s}J_sU})$, where $u_h$ denotes the regular tempered distribution of $h$. [math:thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation](https://alphabetamath.cc/item/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation) identifies this image and norm with the weighted Fourier distribution convention. The assumed AC supplies their Countable Choice hypothesis.

## Proof

**Given:** The hypotheses and conventions in the Statement, including AC.

**Goal:** Establish the all-integer restriction-space comparison, the stated Dirichlet-scale identifications, endpoint norm comparisons and antidual identification.

1.1 Fix an integer $k\ge0$ and write $W^{k,2}(\Omega)$ for the weak-derivative space to distinguish its norm from the restriction quotient norm. If $u=F|_\Omega$ for $F\in H^k(\mathbb R^n)$, the whole-space identification and contractive weak restriction give $u\in W^{k,2}(\Omega)$ and $\|u\|_{W^{k,2}(\Omega)}\le C_{n,k}\|F\|_{H^k(\mathbb R^n)}$. Taking the infimum over all extensions $F$ gives $\|u\|_{W^{k,2}(\Omega)}\le C_{n,k}\|u\|_{H^k(\Omega)}$. For $k=0$, conversely, zero extension is an $L^2$ extension and the whole-space order-zero identification supplies the reverse norm bound. It remains to prove that reverse inclusion and bound for each fixed $k\ge1$. [F3, F4, F5, F7, given]

1.2 Fix $k\ge1$ and $u\in W^{k,2}(\Omega)$. Choose $R>0$ with $\Theta\Subset B_R(0)$ and set $G=B_R(0)\setminus\Theta$. Its boundary is the disjoint union of the smooth obstacle boundary and the sphere, so it satisfies the bounded $C^k$ one-sided graph condition. Choose $\chi,\rho\in C_c^\infty(B_R(0))$ with $\chi=1$ on an open neighborhood $U$ of $\Theta$ and $\rho=1$ near $\operatorname{supp}\chi$. Treat these as ambient smooth functions extended by zero. The weak product and restriction estimates give $v=(\chi u)|_G\in W^{k,2}(G)$ and $\|v\|_{W^{k,2}(G)}\le C_k\|u\|_{W^{k,2}(\Omega)}$. Apply the bounded smooth-domain theorem with $p=2$, complex scalars and this fixed order to obtain $B_kv\in W^{k,2}(\mathbb R^n)$ extending $v$, with the corresponding bounded norm. [F5, F6, F7, given]

1.3 The stated exterior geometry and Choice assumption are those required by the fractional-identification lemma. The canonical realization in F8 is the weighted Fourier Bessel convention used by that lemma. For $s\ge0$, its inverse bracket weight is bounded, so $h=\langle\xi\rangle^{-s}J_sU$ belongs to $L^2$. Taking $V=J_0^{-1}h$ gives $E_sU=E_0V$ by the embedding formula, and the order-zero case of F4 identifies this with a regular $L^2$ class. Thus its ordinary restriction has precisely the meaning in the Statement. Applying the fractional-identification lemma on the two specified index ranges gives both displayed Dirichlet-scale equalities and the asserted norm equivalences, with exactly that restriction-space convention. [F2, F4, F8, given]

2.1 Let $w=(1-\chi)u\in W^{k,2}(\Omega)$ and let $Z$ denote extension of a measurable class by zero on $\Theta$. The weak Leibniz formula shows that $w$ and each $D^\alpha w$, $|\alpha|\le k$, vanish on $U\cap\Omega$ and have $L^2$ norms bounded by $C_k\|u\|_{W^{k,2}(\Omega)}$. Choose $\zeta\in C_c^\infty(U)$ equal to one near $\Theta$ and put $\vartheta=1-\zeta$. For any $\phi\in C_c^\infty(\mathbb R^n)$, $\vartheta\phi\in C_c^\infty(\Omega)$, and $\vartheta=1$ wherever $w$ or its indicated derivatives can be nonzero. Thus the weak test identity on $\Omega$ gives $\int_{\mathbb R^n}Zw\,D^\alpha\phi=\int_\Omega w\,D^\alpha(\vartheta\phi)=(-1)^{|\alpha|}\int_\Omega D^\alpha w\,\vartheta\phi=(-1)^{|\alpha|}\int_{\mathbb R^n}Z(D^\alpha w)\phi$. Consequently $D^\alpha(Zw)=Z(D^\alpha w)$ for every $|\alpha|\le k$, and $\|Zw\|_{W^{k,2}(\mathbb R^n)}\le C_k\|u\|_{W^{k,2}(\Omega)}$. This uses compact support only for the test functions, and allows an unbounded tail. [F3, F6, F7, step 1.2]

3.1 Set $\mathcal E_k u=\rho B_kv+Zw$. The product estimates and the previous bounds give $\mathcal E_k u\in W^{k,2}(\mathbb R^n)$ with norm at most $C_k\|u\|_{W^{k,2}(\Omega)}$. On $G$ its first summand equals $\rho\chi u=\chi u$; on $\Omega\setminus G$ both $\rho$ and $\chi$ vanish. Hence $(\mathcal E_k u)|_\Omega=\chi u+(1-\chi)u=u$ almost everywhere. The whole-space Fourier identification now makes $\mathcal E_k u$ an $H^k(\mathbb R^n)$ extension, so the quotient norm satisfies $\|u\|_{H^k(\Omega)}\le\|\mathcal E_k u\|_{H^k(\mathbb R^n)}\le C'_k\|u\|_{W^{k,2}(\Omega)}$. Together with step 1.1, this proves equality of the two spaces with equivalent norms for every integer $k\ge0$. In particular the two $H^1$ norms give the same closure of $C_c^\infty(\Omega)$, as used in the Statement. No extension operator common to all orders is asserted or needed. [F3, F4, F6, step 1.1, step 1.2, step 2.1]

4.1 At $s=1$ and $s=2$, the scale definition identifies the spaces with $D(A^{1/2})$ and $D(A)$ respectively. The realization supplies their weak Sobolev endpoint descriptions and norm comparisons, and step 3.1 identifies those weak spaces and their test-function closure with the restriction-space conventions here. The scale definition also identifies $H_D^{-s}$ isometrically with the antidual of $H_D^s$ through the extended pivot pairing for every $s\ge0$. These give all remaining assertions. [F1, F3, step 3.1, step 1.3] ∎

## Source notes

The original article is cited for attribution of its low-order scale statements. The all-integer restriction-space comparison is proved here by a bounded smooth collar and a free exterior tail, using the named published mathematical suppliers; it is not inferred from the article or from the low-order fractional statement. The remaining conclusions use the separately supplied realization, spectral scale and exterior fractional-identification results. The omitted range $1/2\le s<1$ is not asserted here.
