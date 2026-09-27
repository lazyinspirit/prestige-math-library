---
id: thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
kind: theorem
title: "L1 group algebras have a contractively bounded approximate identity"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-convolution-preserves-cc-and-is-associative, lem-haar-translations-are-strongly-continuous-on-lp-one-and-two, lem-l1-convolution-norm-inequality, def-convolution-on-cc-and-l1-of-a-group, lem-the-l1-involution-is-isometric-and-reverses-convolution, def-involution-on-l1-of-a-group, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, lem-compactly-supported-kernels-admit-commuting-radon-integrals, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-translations-preserve-compactly-supported-continuous-functions, thm-recursion, def-dependent-choice, def-axiom-of-choice, def-left-haar-integral-and-left-haar-measure, lem-topological-group-translations-and-inversion, def-compactly-supported-convolution-on-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$, and let
$\mathcal U$ be the directed set of identity neighbourhoods of $G$ ordered by
reverse inclusion. Then there is a net $(e_U)_{U\in\mathcal U}\subseteq C_c(G)$
with
$$e_U\ge0,\qquad \operatorname{supp}e_U\subseteq U,\qquad \|e_U\|_1=1,$$
such that $\|e_U\ast f-f\|_1\to0$ and $\|f\ast e_U-f\|_1\to0$ for **every**
$f\in L^1(G)$: for each $\epsilon>0$ there is $U_0\in\mathcal U$ with
$\|e_U\ast f-f\|_1<\epsilon$ and $\|f\ast e_U-f\|_1<\epsilon$ for every
$U\subseteq U_0$ in $\mathcal U$. Such a net is a **contractively bounded
approximate identity**: bounded by $1$ in norm, with two-sided convergence,
and no assumption that $G$ be discrete or first countable.

## Facts & Assumptions
**Given:** An LCH group $G$ with a fixed left Haar measure $\mu$, the algebra $L^1(G)$ with convolution $\ast$ and involution $*$, the directed set $\mathcal U$ of identity neighbourhoods, and AC.

[F1] If $K\subseteq U$ with $K$ compact, $U$ open and $G$ LCH, then under Dependent Choice there is $f\in C_c(G)$ with $\mathbf 1_K\le f\le \mathbf 1_U$; the construction in the cited proof gives $\operatorname{supp}f\subseteq U$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F2] AC implies Dependent Choice: a choice function on the family $\{R[x]:x\in X\}$ of a serial relation, composed with recursion ([[thm-recursion]]), produces the required sequence ([[def-dependent-choice]], [[def-axiom-of-choice]]).

[F3] A left Haar measure is nonzero, positive on every nonempty open set, and finite on compact sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-left-haar-integral-and-left-haar-measure]]).

[F4] $e\mapsto e$ is the identity of $G$; inversion $\operatorname{inv}(x)=x^{-1}$ is a homeomorphism, so $U^{-1}$ is an identity neighbourhood whenever $U$ is, and $U\mapsto U^{-1}$ is a bijection of $\mathcal U$ preserving inclusions ([[lem-topological-group-translations-and-inversion]]).

[F5] $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$ for $f,g\in C_c(G)$, and $f\ast g\in C_c(G)$ under AC ([[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F6] For a continuous compactly supported kernel on a product of LCH spaces the iterated integrals commute, in the real and in the complex case ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F7] Convolution on $L^1(G)$ is the unique bilinear extension of the $C_c$ convolution with $\|f\ast g\|_1\le\|f\|_1\|g\|_1$, hence jointly continuous ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-l1-convolution-norm-inequality]]).

[F8] The involution satisfies $(f\ast g)^{*}=g^{*}\ast f^{*}$, $(f^{*})^{*}=f$ and $\|f^{*}\|_1=\|f\|_1$; for real nonnegative $g\in C_c(G)$ one has $g^{*}(x)=\Delta_G(x^{-1})g(x^{-1})\ge0$ with $\operatorname{supp}g^{*}=(\operatorname{supp}g)^{-1}$ ([[lem-the-l1-involution-is-isometric-and-reverses-convolution]], [[def-involution-on-l1-of-a-group]], [[lem-translations-preserve-compactly-supported-continuous-functions]]).

[F9] $C_c(G)$ is dense in $L^1(G)$ ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F10] For $f\in C_c(G)$ and $\epsilon>0$ there is an identity neighbourhood $V$ with $\|L_gf-f\|_1<\epsilon$ for every $g\in V$, where $L_gf(x)=f(g^{-1}x)$ ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[A1] AC is assumed, in the choice-function form of the cited definition; it supplies both the cutoffs of [F1] through [F2] and the single selection of one cutoff for each identity neighbourhood in step 1.1 ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Construction of the net. Let $U\in\mathcal U$ be an identity neighbourhood and choose an open identity neighbourhood $W\subseteq U$. Applying [F1] with $K=\{e\}\subseteq W$ under the Dependent Choice of [F2] produces $f_U\in C_c(G)$ with $\mathbf 1_{\{e\}}\le f_U\le\mathbf 1_W$ and, by the cited construction, $\operatorname{supp}f_U\subseteq W\subseteq U$; in particular $f_U\ge0$ and $f_U(e)=1$. Since $f_U$ is continuous with $f_U(e)=1$, it exceeds $1/2$ on a neighbourhood of $e$, so $\int_Gf_U\,d\mu>0$ by [F3]; put $e_U:=f_U/\int_Gf_U\,d\mu$. Then $e_U\in C_c(G)$, $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$ and $\|e_U\|_1=1$. Choosing one such $e_U$ for each $U\in\mathcal U$ is a single application of [A1] to the family of nonempty sets of admissible normalised cutoffs, and the resulting family is indexed by the directed set $\mathcal U$; this is the net whose properties are claimed. [A1, F1, F2, F3]

1.2 Left convergence for compactly supported $f$. Let $f\in C_c(G)$ and let $U\in\mathcal U$. Since $\|e_U\|_1=1$ and $e_U\ge0$, the $C_c$ formula [F5] gives $(e_U\ast f)(x)-f(x)=\int_Ge_U(y)\bigl(f(y^{-1}x)-f(x)\bigr)\,d\mu(y)=\int_Ge_U(y)(L_yf-f)(x)\,d\mu(y)$ for the translate $L_yf$ of [F10]. The kernel $(y,x)\mapsto e_U(y)|(L_yf-f)(x)|$ is continuous with compact support: $y$ ranges in $\operatorname{supp}e_U\subseteq U$ and $L_yf-f$ is supported in a compact set depending on $\operatorname{supp}e_U$ and $\operatorname{supp}f$, as in [F5]. So [F6] applies to the complex kernel and, with $\int_Ge_U\,d\mu=1$,
$$\|e_U\ast f-f\|_1\le\int_G\!\!\int_Ge_U(y)|(L_yf-f)(x)|\,d\mu(x)\,d\mu(y)\le\sup_{y\in U}\|L_yf-f\|_1 .$$
By [F10], given $\epsilon>0$ there is $U_0\in\mathcal U$ with $\sup_{y\in U}\|L_yf-f\|_1<\epsilon$ whenever $U\subseteq U_0$; hence $\|e_U\ast f-f\|_1\to0$ along $\mathcal U$. [F5, F6, F10, step 1.1]

2.1 Left convergence for all of $L^1(G)$. Let $f\in L^1(G)$ and $\epsilon>0$. By [F9] choose $h\in C_c(G)$ with $\|f-h\|_1<\epsilon/3$, and by step 1.2 choose $U_0$ with $\|e_U\ast h-h\|_1<\epsilon/3$ for all $U\subseteq U_0$. For such $U$, bilinearity and the norm bound of [F7] give $\|e_U\ast f-f\|_1\le\|e_U\ast(f-h)\|_1+\|e_U\ast h-h\|_1+\|h-f\|_1\le2\|f-h\|_1+\epsilon/3<\epsilon$, since $\|e_U\|_1=1$. [F7, F9, step 1.1, step 1.2]

3.1 Right convergence. Let $f\in L^1(G)$ and $\epsilon>0$. For every identity neighbourhood $U$, [F8] gives $(f\ast e_U)^{*}=e_U^{*}\ast f^{*}$, with $e_U^{*}\in C_c(G)$, $e_U^{*}\ge0$, $\|e_U^{*}\|_1=\|e_U\|_1=1$ and $\operatorname{supp}e_U^{*}=(\operatorname{supp}e_U)^{-1}\subseteq U^{-1}$. The calculation in step 1.2 applies to *any* nonnegative unit-mass $C_c$ kernel supported in a neighbourhood: for $h\in C_c(G)$ it gives $\|e_U^{*}\ast h-h\|_1\le\sup_{y\in U^{-1}}\|L_yh-h\|_1$. By [F10] choose an identity neighbourhood $V$ on which $\|L_yh-h\|_1<\epsilon/3$, and put $U_0:=V^{-1}$; then this bound is below $\epsilon/3$ for all $U\subseteq U_0$. Given $f^{*}\in L^1(G)$, first choose $h\in C_c(G)$ with $\|f^{*}-h\|_1<\epsilon/3$ by [F9]. The estimate of step 2.1, now using $e_U^{*}$ and [F7], yields $\|e_U^{*}\ast f^{*}-f^{*}\|_1<\epsilon$ for all $U\subseteq U_0$. Since the involution is isometric and involutive by [F8], $\|f\ast e_U-f\|_1=\|(f\ast e_U)^{*}-f^{*}\|_1<\epsilon$. [F4, F7, F8, F9, F10, step 1.2, step 2.1]

4.1 The net $(e_U)_{U\in\mathcal U}$ of step 1.1 satisfies $e_U\ge0$, $\operatorname{supp}e_U\subseteq U$ and $\|e_U\|_1=1$ for every $U$, and steps 2.1 and 3.1 show $\|e_U\ast f-f\|_1\to0$ and $\|f\ast e_U-f\|_1\to0$ for every $f\in L^1(G)$ along the directed set of identity neighbourhoods ordered by reverse inclusion. ∎ [step 1.1, step 2.1, step 3.1]

## Remarks

- **Two-sidedness without discreteness.** The net converges to the identity operator in the strong operator sense. If $G$ is discrete, $\{e\}$ is an identity neighbourhood and all terms beyond it equal $\mu(\{e\})^{-1}\mathbf1_{\{e\}}$, the convolution unit. A unit need not exist in general, as characterised by [[prop-l1-group-algebra-has-a-unit-iff-g-is-discrete]].
- **Why the involution is needed.** Step 3.1 is the only place where the modular factor enters, through the nonnegativity of $e_U^{*}$ and the identity $(f\ast e_U)^{*}=e_U^{*}\ast f^{*}$; the left and right assertions of the statement are therefore not proved independently.
- **Choice cost.** [A1] is used twice: through [F1] (Dependent Choice, via [F2]) to obtain the cutoffs, and once to select a normalised cutoff for each identity neighbourhood. The convergence estimates themselves are choice-free.
