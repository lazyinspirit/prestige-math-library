---
id: lem-convolution-is-independent-of-the-chosen-borel-representatives
kind: lemma
title: "Convolution on $L^1(\\mathbb{R}^n)$ is independent of the chosen Borel representatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-borel-representatives-make-the-convolution-integrand-borel-measurable, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-integrals-are-invariant-under-measure-preserving-maps, def-countable-choice]
landmark: false
proof_strategy: "Reflection and translation preserve the representative null sets under Countable Choice. Tonelli applied to the absolute product gives a common almost-everywhere domain of absolute convergence, and the two section integrals agree there."
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (lem-convolution-is-independent-of-the-chosen-borel-representatives). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Assume the Axiom of Countable Choice. Let $f,g \in L^1(\mathbb{R}^n)$. If $\tilde f_1,\tilde f_2$ are Borel
representatives of $f$ and $\tilde g_1,\tilde g_2$ are Borel representatives of
$g$, then for almost every $x \in \mathbb{R}^n$,

$$ \int \tilde f_1(x-y)\tilde g_1(y)\,dy = \int \tilde f_2(x-y)\tilde g_2(y)\,dy. $$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and two Borel representatives for each of the $L^1$ classes $f$ and $g$.

[L1] The integrands from Borel representatives are measurable ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[L2] The Lebesgue integral respects almost-everywhere equality ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[L3] Lebesgue measurability and null sets are translation invariant ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L4] Under Countable Choice, reflection $z\mapsto-z$ preserves Lebesgue null sets ([[thm-lebesgue-measure-under-dilations-and-reflections]], [[def-countable-choice]]).

[L5] Tonelli applies to nonnegative product-measurable functions, and integrals are unchanged by measure-preserving maps ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_f:=\{\tilde f_1\ne\tilde f_2\}$ and $N_g:=\{\tilde g_1\ne\tilde g_2\}$. These are Borel null sets. For every fixed $x$, the set where the first factors differ is $x-N_f$, null by reflection [L4] followed by translation [L3]. The second factors differ only on $N_g$, so the two section integrands agree for almost every $y$, outside $(x-N_f)\cup N_g$. [L3, L4, given, algebra]

2.1 By [L1], both section integrands are measurable, and step 1.1 says they agree almost everywhere in $y$. Thus [L2] gives equality of their integrals at every $x$ where either section product is absolutely integrable. [L1, L2, step 1.1]

3.1 For either choice of representatives, the nonnegative function $H(x,y):=|\tilde f_i(x-y)\tilde g_i(y)|$ is product-measurable by [L1]. Tonelli [L5] and translation invariance [L3] give $$\int_{\mathbb R^n}\!\int_{\mathbb R^n}H(x,y)\,dy\,dx=\int_{\mathbb R^n}|\tilde g_i(y)|\left(\int_{\mathbb R^n}|\tilde f_i(x-y)|\,dx\right)dy=\|f\|_1\|g\|_1<\infty.$$ The second equality uses [L5] for the measure-preserving translation $x\mapsto x-y$, and the representatives have the same $L^1$ norms as their classes. Hence each section product is absolutely integrable for almost every $x$; intersect the two full-measure sets. Step 2.1 gives equality there, proving the statement. [L1, L3, L5, step 2.1] ∎
