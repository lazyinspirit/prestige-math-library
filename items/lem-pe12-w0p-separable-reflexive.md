---
id: lem-pe12-w0p-separable-reflexive
kind: lemma
title: The zero-boundary W1p space is separable and reflexive
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-wkp-zero-as-a-sobolev-closure,
    def-sobolev-space-wkp-and-its-norm,
    lem-sobolev-norm-is-well-defined-and-definite,
    lem-weak-derivative-linearity-locality-and-commutation,
    thm-finite-products-of-banach-spaces-are-banach,
    thm-closed-subspaces-of-reflexive-spaces-are-reflexive,
    def-reflexive-banach-space,
    thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn,
    def-separable-space,
    def-countable,
    thm-product-of-countable,
    lem-subset-of-countable,
    def-metric-topology,
    thm-rationals-countable,
    lem-q-and-irrationals-dense-r,
    thm-riesz-fischer-completeness-of-l-p,
    thm-reflexivity-of-lp-for-one-less-p-less-infinity,
    cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence,
    thm-holder-inequality-for-integrals,
    prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
    thm-extreme-value-metric,
    def-countable-choice,
    lem-dependent-choice-implies-countable-choice,
    def-ultrafilter-extension-principle,
    def-dependent-choice,
    def-hahn-banach-extension-principle-relative
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential
        Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Proposition 9.1 and its pointer to the complete proof of Proposition
        8.1, printed pp. 204 and 263; $W^{1,p}$ is Banach, reflexive for
        $1<p<\infty$, and separable for finite $p$.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the ultrafilter lemma, Dependent Choice and Hahn–Banach. Let
$\Omega\subseteq\mathbb R^d$ be bounded and open, $d\ge1$, and let
$1<p<\infty$. Then $W_0^{1,p}(\Omega;\mathbb R)$, with the norm inherited
from $W^{1,p}(\Omega;\mathbb R)$, is a separable reflexive real Banach space.

## Facts & Assumptions

**Given:** The ultrafilter lemma, Dependent Choice and Hahn–Banach; a bounded open $\Omega\subseteq\mathbb R^d$, $d\ge1$; and $1<p<\infty$.

[F1] The displayed $W^{1,p}$ formula is a norm, and weak differentiation is linear; hence $\Phi(u)=(u,\partial_1u,\ldots,\partial_du)$ is a linear embedding of $W^{1,p}(\Omega;\mathbb R)$ into $Y:=L^p(\Omega;\mathbb R)^{d+1}$ with its maximum product norm. Moreover, $\|\Phi u\|_{\max}\le\|u\|_{W^{1,p}}\le(d+1)^{1/p}\|\Phi u\|_{\max}$ ([[def-sobolev-space-wkp-and-its-norm]], [[lem-sobolev-norm-is-well-defined-and-definite]], [[lem-weak-derivative-linearity-locality-and-commutation]]).

[F2] $W_0^{1,p}(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$ in $W^{1,p}(\Omega)$, so it is a closed linear subspace ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Under Hahn–Banach, a closed linear subspace of a reflexive Banach space is reflexive with its inherited norm; reflexive spaces are Banach spaces by definition ([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]], [[def-reflexive-banach-space]]).

[F4] Under Countable Choice, rational box-step functions form a countable dense subset of $L^p(\mathbb R^d)$ for $1\le p<\infty$ ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F5] A normed space is separable when it has a countable dense subset ([[def-separable-space]]).

[F6] Under Countable Choice, $L^p(\Omega;\mathbb R)$ is complete for every $1\le p\le\infty$ ([[thm-riesz-fischer-completeness-of-l-p]]).

[F7] A finite product of Banach spaces is Banach for its maximum product norm ([[thm-finite-products-of-banach-spaces-are-banach]]).

[F8] Under Countable Choice, $L^p(\Omega;\mathbb R)$ is reflexive when $1<p<\infty$ ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]]).

[F9] For conjugate exponents $p,p'$, Hölder's inequality bounds each test pairing by the product of the corresponding $L^p$ and $L^{p'}$ norms ([[thm-holder-inequality-for-integrals]]).

[F10] A compact subset of $\mathbb R^d$ has finite measure, and a continuous function on a compact metric space is bounded ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-extreme-value-metric]]).

[F11] Under the ultrafilter lemma, Dependent Choice and Hahn–Banach, a real Banach space is reflexive exactly when every bounded sequence has a weakly convergent subsequence ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).

[F12] $\mathbb Q$ is countable and dense in $\mathbb R$, subsets and finite products of countable sets are countable, and in a metric space balls centered at a countable dense set with positive rational radii form a countable base. Indeed, for $y\in B(x,r)$ let $\delta=r-d(x,y)>0$, choose a dense center $z$ with $d(y,z)<\delta/3$, and choose rational $q$ with $d(y,z)<q<\delta-d(y,z)$; then $y\in B(z,q)\subseteq B(x,r)$ ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]], [[lem-subset-of-countable]], [[thm-product-of-countable]], [[def-countable]], [[def-metric-topology]]).

[A1] The hypotheses include the ultrafilter lemma, Dependent Choice and Hahn–Banach ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). Dependent Choice implies Countable Choice, used by [F4], [F6], [F8] and [F10] ([[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]).

## Proof

1.1 Let $D$ be the countable rational box-step dense family in [F4]. Zero extension embeds $L^p(\Omega)$ isometrically in $L^p(\mathbb R^d)$. Given $g\in L^p(\Omega)$, choose $s\in D$ approximating its zero extension $\widetilde g$; then $\|s|_\Omega-g\|_{L^p(\Omega)}\le\|s-\widetilde g\|_{L^p(\mathbb R^d)}$. Thus the restrictions of $D$ are countable and dense in $L^p(\Omega)$. Their finite products give a countable dense subset of $Y$; balls centered there with rational radii form a countable base by [F12]. [A1, F4, F12, given, construct, choose]

1.2 Let $(u_j)$ be Cauchy in $W^{1,p}(\Omega)$. By [F1], the coordinate sequences $(u_j)$ and $(\partial_i u_j)$ are Cauchy in $L^p(\Omega)$ for each $i$. Countable Choice is available by [A1], so [F6] gives limits $u,g_i\in L^p(\Omega)$. Fix $\varphi\in C_c^\infty(\Omega)$ with compact support $K$. By [F10], $K$ has finite measure and $\varphi,\partial_i\varphi$ are bounded there; Hölder [F9] therefore lets both sides of $\int_\Omega u_j\partial_i\varphi=-\int_\Omega(\partial_i u_j)\varphi$ pass to the limits $u$ and $g_i$. Hence $g_i=\partial_i u$ weakly for each $i$, so $u\in W^{1,p}(\Omega)$ and $u_j\to u$ in its norm by coordinate convergence. Thus $W^{1,p}(\Omega)$ is Banach. [A1, F1, F6, F9, F10, given, algebra]

2.1 Each factor of $Y$ is Banach by [F6], so the finite product is Banach for its maximum norm by [F7]. Let $(y_j)$ be a bounded sequence in $Y$. Its finitely many coordinate sequences are bounded in $L^p(\Omega)$; by [F8] and the bounded-sequence criterion [F11], successive subsequence extractions give one subsequence weakly convergent in every coordinate. Every bounded linear functional on $Y$ is the sum of its restrictions to the coordinate factors, so this subsequence converges weakly in $Y$. Thus [F11] makes $Y$ reflexive. By [F1], $\Phi$ is a bounded linear isomorphism onto its image $S:=\Phi(W^{1,p}(\Omega))$. The image $S$ is closed in $Y$: a convergent sequence in $S$ has Cauchy preimages by the lower norm bound in [F1], and they converge by step 1.2. Hahn–Banach and [F3] make $S$ reflexive. The inverse isomorphism $\Phi^{-1}:S\to W^{1,p}(\Omega)$ preserves weak convergence, so [F11] shows that $W^{1,p}(\Omega)$ is reflexive. [A1, F1, F3, F6, F7, F8, F11, step 1.2, given, construct]

3.1 By [F2], $W_0^{1,p}(\Omega)$ is a closed linear subspace of the reflexive Banach space $W^{1,p}(\Omega)$ from step 2.1. Hahn–Banach and [F3] therefore make $W_0^{1,p}(\Omega)$ reflexive and Banach with its inherited norm. [A1, F2, F3, step 2.1]

4.1 Let $S_0=\Phi(W_0^{1,p}(\Omega))\subseteq Y$. The countable base from step 1.1 restricts to a countable base of $S_0$. By [A1], Countable Choice selects one point from each nonempty member of this relative base; the resulting countable set meets every nonempty relatively open set and is dense in $S_0$. Since $\Phi$ is an isomorphism with equivalent norms by [F1], $W_0^{1,p}(\Omega)$ is separable by [F5]. [A1, F1, F5, F12, step 1.1, step 3.1, choose]

5.1 Steps 3.1 and 4.1 establish that $W_0^{1,p}(\Omega;\mathbb R)$ is a separable reflexive real Banach space with its inherited norm, as claimed. [step 3.1, step 4.1] ∎
