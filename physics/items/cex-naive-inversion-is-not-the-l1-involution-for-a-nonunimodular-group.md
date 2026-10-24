---
id: cex-naive-inversion-is-not-the-l1-involution-for-a-nonunimodular-group
kind: counterexample
title: "Naive inversion is not the L1 involution on a nonunimodular group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [ex-modular-function-of-the-affine-group-of-the-line, lem-haar-change-of-variables-under-inversion, def-involution-on-l1-of-a-group, lem-the-l1-involution-is-isometric-and-reverses-convolution, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-left-haar-integral-and-left-haar-measure, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-unimodular-locally-compact-group, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B, printed pp. 115–118"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $G=\{(a,b):a>0,\ b\in\mathbb R\}$ be the affine group of
[[ex-modular-function-of-the-affine-group-of-the-line]], with the left Haar
measure $d\mu=a^{-2}\,da\,db$ and modular function $\Delta_G(a,b)=a^{-1}$. Then
the naive inversion formula
$$Jf(x):=\overline{f(x^{-1})},$$
without the modular factor fails to give an isometry of
$L^1(G)$, even on $C_c(G)$; consequently it is not the involution
$f^{*}(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$ of
[[def-involution-on-l1-of-a-group]], which is isometric
([[lem-the-l1-involution-is-isometric-and-reverses-convolution]]).

## Facts & Assumptions

**Given:** The affine group $G$ with $d\mu=a^{-2}\,da\,db$, $\Delta_G(a,b)=a^{-1}$, and a nonnegative compactly supported cutoff supported in the region $a>1$.

[F1] $G$ is an LCH group with left Haar measure $d\mu=a^{-2}da\,db$ and $\Delta_G(a,b)=a^{-1}$; inverses are $(a,b)^{-1}=(a^{-1},-b/a)$ and $\Delta_G\equiv1$ fails, so $G$ is nonunimodular ([[ex-modular-function-of-the-affine-group-of-the-line]], [[def-unimodular-locally-compact-group]]).

[F2] Haar change of variables under inversion: $\int_GH(x^{-1})\,d\mu(x)=\int_G\Delta_G(x^{-1})H(x)\,d\mu(x)$ for nonnegative Borel $H$ (with extended integrals), and for complex Borel $H$ whenever $\int_G\Delta_G(x^{-1})|H(x)|\,d\mu(x)<\infty$ ([[lem-haar-change-of-variables-under-inversion]]).

[F3] The L1 involution is $f^{*}(x)=\Delta_G(x^{-1})\overline{f(x^{-1})}$ and is isometric, $\|f^{*}\|_1=\|f\|_1$, for every $f\in L^1(G)$ ([[def-involution-on-l1-of-a-group]], [[lem-the-l1-involution-is-isometric-and-reverses-convolution]]).

[F4] $L^1(G)$ consists of the a.e. classes of integrable complex functions with $\|f\|_1=\int_G|f|\,d\mu$, and $C_c(G)$ functions lie in $L^1(G)$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-left-haar-integral-and-left-haar-measure]]).

[F5] Under Dependent Choice, for a compact $K$ inside an open $U$ there is $f\in C_c(G)$ with $\mathbf 1_K\le f\le\mathbf 1_U$ and $\operatorname{supp}f\subseteq U$ by the cited proof's construction; AC implies Dependent Choice ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

1.1 The modulus of $Jf$ and the inversion formula. For a nonnegative $f\in C_c(G)$, also $Jf\in C_c(G)$ because inversion is a homeomorphism, and $|Jf(x)|=f(x^{-1})$. Thus [F2] gives $\|Jf\|_1=\int_Gf(x^{-1})\,d\mu(x)=\int_G\Delta_G(x^{-1})f(x)\,d\mu(x)$, while $\|f\|_1=\int_Gf(x)\,d\mu(x)$; both integrals are finite by [F4]. [F2, F4]

1.2 A witness in the region $a>1$. Take the open rectangle $U:=(1,2)\times(0,1)$ and a compact rectangle $K:=[3/2,7/4]\times[1/4,3/4]\subseteq U$, and let $f\in C_c(G)$ be given by [F5] under the Dependent Choice derived from the assumed AC, with $\mathbf 1_K\le f\le\mathbf 1_U$. Then $f\ge0$, $f\not\equiv0$, and on $\operatorname{supp}f\subseteq U$ one has $a>1$, hence $a^{-1}>a^{-2}$ everywhere on $(1,2)$. [F5]

2.1 Comparison of norms. Since $f\ge0$ and $\operatorname{supp}f\subseteq\{a>1\}$, step 1.1 gives $\|Jf\|_1-\|f\|_1=\int_G(\Delta_G(x^{-1})-1)f(x)\,d\mu(x)=\int_G(a-1)f(a,b)\,a^{-2}\,da\,db$, where $a-1>0$ on the support of $f$ and $f>0$ on the nonempty open set where $f\ge\mathbf 1_K=1$, namely on the interior of $K$. The integrand is nonnegative continuous with a strictly positive value on an open subset of $G$, and $a^{-2}\,da\,db$ gives positive measure to every nonempty open set, so $\|Jf\|_1-\|f\|_1>0$: the norms differ. [F1, F4, step 1.1, step 1.2]

3.1 Since $J$ changes the $L^1$ norm of the nonzero compactly supported function $f$ of step 1.2, it cannot define an isometry of $L^1(G)$; the modular involution [F3], by contrast, is isometric. The naive inversion $f\mapsto\overline{f(x^{-1})}$ is therefore not the $L^1$ involution on this nonunimodular group. ∎ [F3, step 2.1]

## Counterexample notes

- **Where the failure comes from.** The discrepancy is the factor $\Delta_G(x^{-1})=a$ accumulated by the inversion substitution; on a unimodular group $\Delta_G\equiv1$ and the naive formula does define the involution.
- **Choice cost.** The single cutoff function uses the Dependent Choice of [F5]; the comparison computation itself is choice-free.
