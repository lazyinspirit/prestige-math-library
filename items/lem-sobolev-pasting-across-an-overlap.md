---
id: lem-sobolev-pasting-across-an-overlap
kind: lemma
title: Sobolev functions paste across an overlap
status: draft
origin: pipeline
deps: [cor-additivity-of-the-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice, def-countable-choice, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-borel-and-lebesgue-measurable-function-on-rn, def-integral-over-a-measurable-set, def-essential-supremum-with-respect-to-a-measure, def-test-function-space-d-of-an-open-set, lem-weak-derivative-linearity-locality-and-commutation, lem-weak-derivatives-are-unique-almost-everywhere, lem-test-function-cutoffs-and-euclidean-localization, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-holder-inequality-for-integrals, thm-complex-holder-minkowski-and-the-quotient-norm]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapters 1–3, especially §§1.1–1.4, 2.2, 2.6 and 3.1–3.5
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.5
---

## Statement

Assume the Axiom of Choice, used only to invoke the cited Countable-Choice
interfaces for weak-derivative uniqueness and the Sobolev quotient norms. Let
$\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, $k\in\mathbb N_0$,
$1\le p\le\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Let
$U,V\subseteq\Omega$ be open with $U\cup V=\Omega$, and let
$u_U\in W^{k,p}(U;\mathbb K)$ and $u_V\in W^{k,p}(V;\mathbb K)$ agree almost
everywhere on $U\cap V$.

Then there is exactly one class $u\in W^{k,p}(\Omega;\mathbb K)$ whose
restrictions satisfy $u|_U=u_U$ and $u|_V=u_V$ almost everywhere, and for every
$|\alpha|\le k$ the weak derivative $D^\alpha u$ restricts to $D^\alpha u_U$
on $U$ and to $D^\alpha u_V$ on $V$ almost everywhere. Its global norm is
bounded by the two local norms: for $1\le p<\infty$
$$\|u\|_{W^{k,p}(\Omega)}^p\le\|u_U\|_{W^{k,p}(U)}^p+\|u_V\|_{W^{k,p}(V)}^p,$$
and for $p=\infty$
$$\|u\|_{W^{k,\infty}(\Omega)}\le\|u_U\|_{W^{k,\infty}(U)}+\|u_V\|_{W^{k,\infty}(V)}.$$

This is special to a two-set cover: no such bound is asserted for an
arbitrary infinite cover without a summability hypothesis. If
$\Omega=\varnothing$, then $U=V=\varnothing$ and the assertion concerns the
zero class alone.

## Facts & Assumptions

**Given:** AC, open $\Omega\subseteq\mathbb R^n$, $k\in\mathbb N_0$, $1\le p\le\infty$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, open $U,V\subseteq\Omega$ with $U\cup V=\Omega$, and classes $u_U\in W^{k,p}(U;\mathbb K)$, $u_V\in W^{k,p}(V;\mathbb K)$ that agree almost everywhere on $U\cap V$.

[F1] Every open cover of $\Omega$ has an at most countable locally finite smooth partition of unity with compact supports subordinate to its members ([[lem-test-function-cutoffs-and-euclidean-localization]]). For a fixed test $\varphi$, compactness of $K=\operatorname{supp}\varphi$ implies that only finitely many partition functions have supports meeting $K$. In this finite subfamily, assign each function to $U$ if its support is contained in $U$, and otherwise to $V$ (subordination then puts its support in $V$). Grouping this subfamily by assigned set gives finite sums $\eta_{U,\varphi},\eta_{V,\varphi}\in C_c^\infty(\Omega)$ supported in $U,V$ respectively and satisfying $\eta_{U,\varphi}+\eta_{V,\varphi}=1$ on $K$. The grouped functions depend on $\varphi$; no global two-function partition is asserted.

[F2] $W^{k,p}$ consists of the $L^p$ classes with $L^p$ weak-derivative classes $D^\alpha u$ for all $|\alpha|\le k$, and its norm is the finite $\ell^p$ sum of the derivative norms, or their maximum when $p=\infty$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] A weak derivative satisfies $\int_\Omega u\,D^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega v\varphi$ for every test function, and this identity determines it ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F4] Weak differentiation restricts to open subsets, and locally integrable weak derivatives of one class are unique almost everywhere under Countable Choice ([[lem-weak-derivative-linearity-locality-and-commutation]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F5] A function on $\Omega$ that is measurable on each of the two measurable sets $U$ and $V\setminus U$ is measurable, by the preimage definition of measurability and closure of the measurable sets under finite unions ([[def-borel-and-lebesgue-measurable-function-on-rn]]).

[F6] For nonnegative measurable functions, integration over $E$ means multiplication by $\mathbf 1_E$; the integral is monotone and additive over finite sums ([[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]). For integrable real or complex functions, the same restriction convention follows by applying this definition to positive and negative parts, then real and imaginary parts ([[def-integrable-real-and-complex-functions-and-their-integrals]]); addition of their integrals is licensed by [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F7] Integrals do not change when the integrand is altered on a null set ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F8] Hölder's inequality holds for real and complex measurable functions, including the endpoint pairs $(1,\infty)$ and $(\infty,1)$ ([[thm-holder-inequality-for-integrals]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F9] The essential supremum over a union of two measurable sets is at most the maximum of the two essential suprema: a set is null for the union exactly when each of its two traces is null, so every common essential bound of the two pieces bounds the union, and the defining infimum is therefore no larger ([[def-essential-supremum-with-respect-to-a-measure]]).

[F10] Products of a test function with a compactly supported smooth factor are again test functions supported in the support of that factor ([[def-test-function-space-d-of-an-open-set]]).

[F11] In ZF, AC implies Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** paste the two representatives, verify each test identity with a finite grouping of a locally finite partition of unity, and bound each global $L^p$ norm by the two local norms.

1.1 By [F11], AC gives Countable Choice, so the uniqueness interface [F4] applies. For $|\alpha|\le k$ the restricted classes $D^\alpha u_U|_{U\cap V}$ and $D^\alpha u_V|_{U\cap V}$ are both weak $\alpha$-derivatives of the common class $u_U=u_V$ on $U\cap V$: this is the restriction clause of [F4] applied in the open set $U\cap V$. Hence $$D^\alpha u_U=D^\alpha u_V\quad\text{almost everywhere on }U\cap V.$$ Define $g_\alpha$ on $\Omega$ by $g_\alpha=D^\alpha u_U$ on $U$ and $g_\alpha=D^\alpha u_V$ on $V\setminus U$; the two defining pieces agree almost everywhere on their overlap, so $g_\alpha$ is a well-defined member of $L^p(\Omega;\mathbb K)$ by [F5], [F6] and [F9]: it is measurable, its finite-$p$ integral is at most the sum of the two local $p$-th-power integrals, and its essential bound at $p=\infty$ is at most the maximum of the two local bounds. Write $g_0=:u$; restricting the defining identity shows that $u$ agrees with $u_U$ almost everywhere on $U$ and with $u_V$ almost everywhere on $V$. [F2, F4, F5, F6, F9, F11, given]

2.1 Fix a test $\varphi\in C_c^\infty(\Omega)$ and choose the finite grouped functions $\eta_{U,\varphi},\eta_{V,\varphi}$ of [F1]. Their supports lie in $U,V$, respectively, and $(\eta_{U,\varphi}+\eta_{V,\varphi})\varphi=\varphi$ on $\Omega$. For each $|\alpha|\le k$, the products $\eta_{U,\varphi}\varphi$ and $\eta_{V,\varphi}\varphi$ are tests supported in $U$ and $V$ by [F1] and [F10], so the weak identities of [F3] for $u_U$ on $U$ and $u_V$ on $V$ give $$\int_Uu_U\,D^\alpha(\eta_{U,\varphi}\varphi)=(-1)^{|\alpha|}\int_U(D^\alpha u_U)\eta_{U,\varphi}\varphi, \qquad \int_Vu_V\,D^\alpha(\eta_{V,\varphi}\varphi)=(-1)^{|\alpha|}\int_V(D^\alpha u_V)\eta_{V,\varphi}\varphi.$$ Since their sum times $\varphi$ equals $\varphi$, the derivatives satisfy $D^\alpha\varphi=D^\alpha\big((\eta_{U,\varphi}+\eta_{V,\varphi})\varphi\big)$ on $\Omega$. Inserting the definitions of $u$ and $g_\alpha$ from step 1.1 and using [F6] and [F7] to replace the integrals over $U$ and $V$ by integrals over $\Omega$, then adding the identities gives $$\int_\Omega u\,D^\alpha\varphi\,dx=(-1)^{|\alpha|}\int_\Omega g_\alpha\varphi\,dx.$$ [F1, F3, F6, F7, F10, step 1.1]

3.1 The test $\varphi$ in step 2.1 was arbitrary, so by [F3] each $g_\alpha$ is a weak $\alpha$-derivative of $u$ on $\Omega$; since $g_\alpha\in L^p(\Omega)$ and $|\alpha|\le k$ was arbitrary, [F2] gives $u\in W^{k,p}(\Omega;\mathbb K)$ with $D^\alpha u=g_\alpha$, restricting to $D^\alpha u_U$ on $U$ and $D^\alpha u_V$ on $V$ almost everywhere. If $\widetilde u$ is another class with the same two restrictions, then $\widetilde u=u$ almost everywhere on $U$ and on $V$, hence on $\Omega=U\cup V$; so the pasted class is unique. [F2, F3, step 2.1]

4.1 For the norm bound, fix $|\alpha|\le k$. For finite $p$, [F6] applied to $|g_\alpha|^p$ and the pointwise inequality $\mathbf 1_{U\cup V}\le\mathbf 1_U+\mathbf 1_V$ give $$\int_\Omega|g_\alpha|^p\le\int_U|D^\alpha u_U|^p+\int_V|D^\alpha u_V|^p,$$ and summing over the finitely many $|\alpha|\le k$ yields $\|u\|_{W^{k,p}(\Omega)}^p\le\|u_U\|_{W^{k,p}(U)}^p+\|u_V\|_{W^{k,p}(V)}^p$ by [F2]. For $p=\infty$, [F9] gives $\|g_\alpha\|_{L^\infty(\Omega)}\le\max\big(\|D^\alpha u_U\|_{L^\infty(U)},\,\|D^\alpha u_V\|_{L^\infty(V)}\big)$, and taking the maximum over the finitely many $|\alpha|\le k$ gives $\|u\|_{W^{k,\infty}(\Omega)}\le\|u_U\|_{W^{k,\infty}(U)}+\|u_V\|_{W^{k,\infty}(V)}$ by [F2]. [F2, F6, F9, step 3.1]

5.1 The interfaces [F8] and [F6] also show that every integrand above is integrable: the test derivatives are bounded with compact support, so they lie in every $L^{p'}$ on the relevant pieces, and the weak derivative classes lie in $L^p$. The bound is special to the two-set cover: the inequality used $\mathbf 1_{U\cup V}\le\mathbf 1_U+\mathbf 1_V$, whose analogue for an infinite cover would require summability. If $\Omega=\varnothing$, then $U=V=\varnothing$ and all classes are the zero class, so the identities are trivial. The Axiom of Choice is used only through [F11] to obtain Countable Choice for the uniqueness interface [F4] and the Sobolev and integral interfaces [F2], [F7], [F8]; the locally finite partition in [F1] is choice-free. $\square$ [F1, F2, F6, F8, F11, step 1.1, step 2.1, step 3.1, step 4.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, §§1.1–1.4, 2.2, 2.6, 3.1–3.5: Sobolev classes are local, weak derivatives restrict to open subsets, and a function whose restriction to each member of a finite open cover is a Sobolev class is itself a Sobolev class with the expected derivative restrictions.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §§3.1–3.5: the same localisation of weak derivatives on open covers.
