---
id: lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces
kind: lemma
title: Bounded restriction and cutoff localisation in Sobolev spaces
status: published
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-sobolev-norm-is-well-defined-and-definite, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-leibniz-rule-with-a-smooth-factor, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, def-integral-over-a-measurable-set, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-essential-supremum-with-respect-to-a-measure, def-complex-lp-and-euclidean-test-function-conventions, def-test-function-space-d-of-an-open-set, thm-extreme-value-metric, lem-complex-conjugation-and-modulus-laws, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §§1.2–1.3
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Lemma 1.14(4)–(5), printed pp. 9–11 (PDF pp. 11–13); restriction and smooth-factor Leibniz formula
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §§1.2–1.3, Lemma 1.14(4)–(5),
  printed pp. 9–11 (PDF pp. 11–13). The source states restriction to open
  subsets and the smooth-factor Leibniz formula. This item derives the
  contractive and bounded-operator norm estimates for the library's finite
  Sobolev norm, including both exponent endpoints and complex scalars.

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, $k\in\mathbb N_0$, $1\le p\le\infty$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. If $U\subseteq\Omega$ is open, then
restriction defines a contraction
$$W^{k,p}(\Omega;\mathbb K)\longrightarrow W^{k,p}(U;\mathbb K),\qquad u\longmapsto u|_U.$$ 
If $\eta\in C_c^\infty(\Omega;\mathbb K)$, multiplication defines a bounded
map $u\mapsto\eta u$ on $W^{k,p}(\Omega;\mathbb K)$. More precisely, for
$\alpha\in\mathbb N_0^n$ with $|\alpha|\le k$ put
$$C_\alpha(\eta):=\sum_{\beta\le\alpha}{\alpha\choose\beta}\|D^\beta\eta\|_{L^\infty(\Omega)}.$$
Then
$$\|\eta u\|_{W^{k,p}}\le\begin{cases}\left(\displaystyle\sum_{|\alpha|\le k}C_\alpha(\eta)^p\right)^{1/p}\|u\|_{W^{k,p}},&1\le p<\infty,\\\displaystyle\max_{|\alpha|\le k}C_\alpha(\eta)\,\|u\|_{W^{k,\infty}},&p=\infty.\end{cases}$$
The displayed constants involve only finitely many sup norms of derivatives of
$\eta$ through order $k$. AC is used only to invoke the Countable Choice
interfaces for weak-derivative uniqueness, the Sobolev quotient norm, and the
smooth-factor Leibniz rule.

If $\Omega=\varnothing$, then $U=\varnothing$ and both maps are the unique
maps on the zero Sobolev space.

## Facts & Assumptions

**Given:** AC, an open $\Omega\subseteq\mathbb R^n$, $n\ge1$, an open
$U\subseteq\Omega$, $k\in\mathbb N_0$, $1\le p\le\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, $u\in W^{k,p}(\Omega;\mathbb K)$,
and $\eta\in C_c^\infty(\Omega;\mathbb K)$.

[F1] $W^{k,p}$ consists of a.e. classes with each weak derivative of order at most $k$ in $L^p$, and its displayed norm is the finite-$p$ sum or the $p=\infty$ maximum ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The Sobolev formula is independent of representatives and is a definite norm under Countable Choice ([[lem-sobolev-norm-is-well-defined-and-definite]]).

[F3] A weak derivative restricts to every open subset, with its value class restricted there ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F4] If all derivatives of $u$ through order $k$ lie in $L^p$ and the derivatives of a smooth multiplier through order $k$ are bounded, then $\eta u\in W^{k,p}$ and
$$D^\alpha(\eta u)=\sum_{\beta\le\alpha}{\alpha\choose\beta}(D^\beta\eta)D^{\alpha-\beta}u$$
for every $|\alpha|\le k$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F5] The real $L^p$ quotient norm is well defined and satisfies the triangle inequality for all $1\le p\le\infty$ ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F6] The complex $L^p$ quotient norm is well defined and satisfies the triangle inequality for all $1\le p\le\infty$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F7] For a nonnegative measurable $h$ and measurable $E$, $\int_Eh=\int h\mathbf1_E$; the nonnegative integral is monotone ([[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] The essential supremum is the infimum of the almost-everywhere upper bounds; for complex classes the $L^\infty$ norm uses the modulus, and a bound on $\Omega$ remains a bound on measurable $U\subseteq\Omega$ ([[def-essential-supremum-with-respect-to-a-measure]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F9] A member of $C_c^\infty(\Omega)$ is smooth with compact support in $\Omega$ ([[def-test-function-space-d-of-an-open-set]]).

[F10] Continuous real functions are bounded on nonempty compact metric spaces; for a complex-valued function apply this to its real and imaginary parts, using $|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$ ([[thm-extreme-value-metric]], [[lem-complex-conjugation-and-modulus-laws]]).

[F11] AC supplies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** Restrict each weak derivative and estimate the finite Leibniz sum.

1.1 If $\Omega=\varnothing$ or $U=\varnothing$, restriction is the zero map on the zero domain or into the zero Sobolev space, respectively. Otherwise [F3] identifies each weak derivative of $u|_U$ with $(D^\alpha u)|_U$. For finite $p$, [F7] gives $\|f|_U\|_p^p=\int_\Omega |f|^p\mathbf1_U\,dx\le\int_\Omega|f|^p\,dx$; for $p=\infty$, every a.e. bound on $\Omega$ remains a bound on $U$, so [F8] gives $\|f|_U\|_\infty\le\|f\|_\infty$. Apply these estimates to all components in [F1]; [F2], [F5] and [F6] ensure these are well-defined class norms. AC is used by [F11] only to supply Countable Choice to the weak-derivative restriction and Sobolev norm interfaces [F2] and [F3]. [F1, F2, F3, F5, F6, F7, F8, F11, given]

1.2 If $\eta=0$, all its derivatives vanish. Otherwise its support $K$ is compact in $\Omega$ by [F9]; every derivative vanishes outside $K$ and is continuous on $K$, so the real and imaginary parts are bounded there by [F10]. Thus $\|D^\beta\eta\|_{L^\infty(\Omega)}<\infty$ for every $|\beta|\le k$. [F9, F10, given]

2.1 By step 1.2 and [F4], for every $|\alpha|\le k$ the weak derivative of $\eta u$ is the finite Leibniz sum. The product estimate $\|D^\beta\eta\,D^{\alpha-\beta}u\|_p\le\|D^\beta\eta\|_\infty\|D^{\alpha-\beta}u\|_p$ follows from [F7] when $p<\infty$ and [F8] when $p=\infty$ (with [F10] for complex moduli); the triangle inequalities [F5] and [F6] therefore give $\|D^\alpha(\eta u)\|_p\le C_\alpha(\eta)\|u\|_{W^{k,p}}$. Applying the finite-$p$ sum or the $p=\infty$ maximum in [F1] yields exactly the asserted operator bound. This includes the zero class, $k=0$, and both endpoints $p=1,\infty$. AC is used through [F11] only to supply Countable Choice for the Leibniz interface [F4]. [F1, F4, F5, F6, F7, F8, F10, F11, given, step 1.2] ∎
