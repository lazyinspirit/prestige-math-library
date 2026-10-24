---
id: lem-weak-leibniz-rule-with-a-smooth-factor
kind: lemma
title: Weak Leibniz rule with a smooth factor
status: published
origin: pipeline
deps: [def-locally-integrable-function-as-a-regular-distribution, def-weak-derivative-of-a-locally-integrable-function, thm-leibniz-rule-for-distributions, def-multiplication-of-a-distribution-by-a-smooth-function, lem-weak-derivatives-are-unique-almost-everywhere, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
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
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3, Lemma 1.14(5), printed pp. 9–11; induction proof for compactly supported smooth multipliers in W^{k,p}
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.4, Proposition 3.16, printed p. 54; test-function proof of the first-order weak product rule
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open with
$n\ge1$, let $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$\eta\in C^\infty(\Omega;\mathbb K)$ and
$u\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$. For
$\alpha\in\mathbb N_0^n$, suppose that for every $\gamma\le\alpha$ there is
$v_\gamma\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$ with
$D^\gamma u=v_\gamma$ weakly. Then $\eta u$ has a weak $\alpha$-derivative,
and its almost-everywhere class is
$$D^\alpha(\eta u)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\eta)D^{\alpha-\beta}u\quad\text{in }L^1_{\mathrm{loc}}(\Omega;\mathbb K).$$
where $D^\beta\eta$ is the classical derivative and products are pointwise
products of representatives. The resulting class does not depend on the
representatives.

For $k\in\mathbb N_0$ and $1\le p\le\infty$, if
$u\in W^{k,p}(\Omega;\mathbb K)$ and $D^\beta\eta\in L^\infty(\Omega)$ for
every $|\beta|\le k$, then $\eta u\in W^{k,p}(\Omega;\mathbb K)$ and the same
formula holds in $L^p$ for every $|\alpha|\le k$. In particular,
$\eta\in C_c^\infty(\Omega;\mathbb K)$ is a sufficient condition on the
multiplier for this global conclusion.

For $\Omega=\varnothing$ all classes are zero and the identity holds. The
pairing convention is bilinear, with no complex conjugation.

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, a smooth multiplier $\eta$, a locally integrable $u$, and a multi-index $\alpha$ for which the weak derivatives through $\alpha$ have locally integrable values.

[F1] The regular-distribution pairing is complex bilinear and depends only on the almost-everywhere class ([[def-locally-integrable-function-as-a-regular-distribution]]).

[F2] A weak derivative is characterized by the signed test identity, which is the distributional derivative identity for the corresponding regular distributions ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] Distributional Leibniz holds for a smooth complex multiplier and every multi-index, in the bilinear convention and without a choice assumption ([[thm-leibniz-rule-for-distributions]]).

[F4] Multiplication of distributions by smooth functions is defined by $\langle aT,\varphi\rangle=\langle T,a\varphi\rangle$, with no conjugation, and is associative ([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

[F5] A locally integrable weak derivative, if it exists, is unique as an almost-everywhere class under Countable Choice ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F6] The class $u\in W^{k,p}$ has an $L^p$ class for each weak derivative of order at most $k$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F7] Real $L^p$ elements are almost-everywhere classes ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F8] Complex $L^p$ elements are almost-everywhere classes and use pointwise complex products ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F9] Countable Choice asserts that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

**Choice accounting:** Countable Choice is used only through [F5] to identify locally integrable derivative value classes, including at order zero; [F9] names this assumption. The test-identity transfers, distributional Leibniz identity, and finite algebraic expansion are choice-free. No full Axiom of Choice is assumed.

## Proof

**Proof technique:** transfer the distributional product identity to regular distributions and identify its locally integrable value.

1.1 For every $\gamma\le\alpha$, the weak identity and [F2] give $$\partial^\gamma T_u=T_{v_\gamma}.$$ In particular, the derivative on the left is represented by a locally integrable function for each such $\gamma$. [F2, given]

1.2 Set $$w_\alpha=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^\beta\eta)v_{\alpha-\beta}.$$ The sum is finite. On each compact subset of $\Omega$, every smooth $D^\beta\eta$ is bounded and every $v_{\alpha-\beta}$ is integrable, so $w_\alpha\in L^1_{\mathrm{loc}}(\Omega;\mathbb K)$. Changing any selected representative on a null set changes each product only on a null set; hence $w_\alpha$ defines a single almost-everywhere class. [F1, F7, F8, given]

2.1 Apply [F3] to $\eta$ and $T_u$, then substitute the identities of step 1.1. By [F4], the left side is the $\alpha$th distributional derivative of $T_{\eta u}$, while each term on the right is the regular distribution of the corresponding summand in $w_\alpha$. Thus $$\partial^\alpha T_{\eta u}=T_{w_\alpha}.$$ By the weak-derivative identity in [F2], $w_\alpha$ is a locally integrable weak $\alpha$-derivative of $\eta u$. By [F5] it is the unique value class, which proves the asserted local formula. [F1, F2, F3, F4, F5, F9, step 1.1, step 1.2]

3.1 Now suppose the global $W^{k,p}$ hypotheses hold. For each $|\alpha|\le k$, the local result applies because all weak derivatives $D^\gamma u$ with $\gamma\le\alpha$ are supplied by [F6]. For every $\beta\le\alpha$, the factor $D^\beta\eta$ is bounded, so $(D^\beta\eta)D^{\alpha-\beta}u$ is an $L^p$ class: for finite $p$ its modulus is bounded by $\|D^\beta\eta\|_\infty |D^{\alpha-\beta}u|$ almost everywhere, and for $p=\infty$ the same estimate bounds the essential supremum. The finite sum is therefore in $L^p$. Taking $\alpha=0$ also shows $\eta u\in L^p$; the local result for every $|\alpha|\le k$ now gives $\eta u\in W^{k,p}$ by its definition, and its weak derivative classes are exactly the displayed sums. [F6, F7, F8, step 2.1, given]

4.1 If $\eta\in C_c^\infty(\Omega;\mathbb K)$, its support is compact in $\Omega$. Each derivative is continuous and vanishes off that compact support, so every derivative through order $k$ is bounded. Thus the preceding global argument applies. For $k=0$ the formula has only $\beta=0$ and says $D^0(\eta u)=\eta u$. When $\alpha=0$ the same order-zero identity holds in the local assertion. For the zero input class, zero is a weak derivative at every order by the defining test identity, and [F5] makes each supplied derivative class zero; if $\eta=0$, every summand is zero. On the empty domain every term is the zero class. [F2, F5, F9, step 3.1, given]

The argument treats real and complex values uniformly because all pairings and multiplier products are bilinear; no conjugation or additional choice principle enters. $\square$
