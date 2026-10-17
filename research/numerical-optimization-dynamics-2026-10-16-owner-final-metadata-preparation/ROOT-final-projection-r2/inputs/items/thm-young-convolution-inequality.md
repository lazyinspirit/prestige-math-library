---
id: thm-young-convolution-inequality
kind: theorem
title: "Young's convolution inequality under Countable Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-completion-measurable-functions-have-base-measurable-representatives, lem-borel-representatives-make-the-convolution-integrand-borel-measurable, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-holder-inequality-for-integrals, thm-generalized-holder-inequality-for-products, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections, thm-the-lebesgue-integral-respects-almost-everywhere-equality, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-conjugate-exponents]
landmark: true
proof_strategy: "Choose Borel representatives under Countable Choice, use Tonelli to establish section integrability, then apply Holder pointwise (three factors for finite r)."
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (thm-young-convolution-inequality). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Countable Choice. Let $1 \le p,q,r \le \infty$ satisfy

$$ \frac1r = \frac1p + \frac1q - 1. $$

If $f \in L^p(\mathbb{R}^n)$ and $g \in L^q(\mathbb{R}^n)$, then the
convolution $f*g$ is defined almost everywhere and satisfies

$$ \|f*g\|_r \le \|f\|_p\|g\|_q. $$

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), exponents $p,q,r$ as displayed, and $L^p$ classes $f,g$.

[L1] Under Countable Choice, Lebesgue measure is the completion of Borel measure and measurable functions have Borel representatives almost everywhere ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]).

[L2] Borel representatives make $(x,y)\mapsto\tilde f(x-y)\tilde g(y)$ and its sections measurable ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[L3] Tonelli applies on the sigma-finite Lebesgue product, and $\mathbb R^n$ has sigma-finite measure under Countable Choice ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[L4] Holder's inequality, its generalized product form, and the conjugate-exponent convention are available ([[thm-holder-inequality-for-integrals]], [[thm-generalized-holder-inequality-for-products]], [[def-conjugate-exponents]]).

[L5] Translation and reflection preserve Lebesgue measure and null sets; integrals respect almost-everywhere equality ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

1.1 Under the given Countable Choice premise, choose finite-valued Borel representatives $\tilde f,\tilde g$ using [L1], applying it to real and imaginary parts. Alter values on their Borel null exceptional sets to zero. By [L2], $H(x,y)=\tilde f(x-y)\tilde g(y)$ and $|H|$ are product-measurable. Translation and reflection preserve the $L^p$ norms of $\tilde f(x-\cdot)$ for every $x$, including essential suprema. If either norm is zero, the corresponding representative vanishes almost everywhere; for every $x$, $H(x,\cdot)=0$ almost everywhere by [L5]. Its integral and the claimed inequality are then zero. Hence assume both norms are positive. [L1, L2, L5, given]

1.2 Suppose $r<\infty$. The exponent identity implies $p,q<\infty$ and $r\ge p,q$. Tonelli and translation invariance give $$\int_x\int_y |\tilde f(x-y)|^p|\tilde g(y)|^q\,dy\,dx=\|f\|_p^p\|g\|_q^q<\infty.$$ Therefore $A_x:=\int_y|\tilde f(x-y)|^p|\tilde g(y)|^q\,dy$ is finite for almost every $x$. [L2, L3, L5, given]

2.1 If $r=\infty$, then $1/p+1/q=1$. For each $x$, [L4] applied to $\tilde f(x-\cdot)$ and $\tilde g$ gives $$\int|H(x,y)|\,dy\le\|f\|_p\|g\|_q<\infty.$$ Thus convolution exists for every $x$ for these representatives, is measurable as an integral of product-measurable sections, and its essential supremum obeys the bound. [L2, L4, L5, step 1.1]

2.2 Fix such an $x$. Factor $|H|$ as $A(y)B(y)C(y)$ with $$A=(|\tilde f(x-y)|^p|\tilde g(y)|^q)^{1/r},\quad B=|\tilde f(x-y)|^{1-p/r},\quad C=|\tilde g(y)|^{1-q/r}.$$ If $r=p$ or $r=q$, the corresponding zero-power factor means the constant $1$. The three Holder exponents are $r$, $pr/(r-p)$ and $qr/(r-q)$, with $\infty$ at a zero denominator; their reciprocal sum is $1$. Applying generalized Holder to $BC$ and then Holder to $A(BC)$ (including endpoint forms) yields $$\int|H(x,y)|\,dy\le A_x^{1/r}\|f\|_p^{1-p/r}\|g\|_q^{1-q/r}.$$ This proves absolute convergence for almost every $x$. Tonelli applied to the positive and negative parts of the real and imaginary components of $H$ makes $x\mapsto\int H(x,y)\,dy$ measurable on this full-measure domain; define it as zero elsewhere. Raise the inequality to the $r$th power, integrate in $x$, and use step 1.2 to obtain $$\|f*g\|_r^r\le\|f\|_p^{r-p}\|g\|_q^{r-q}\|f\|_p^p\|g\|_q^q=\|f\|_p^r\|g\|_q^r,$$ interpreting a zero exponent as a factor $1$. [L3, L4, step 1.1, step 1.2, algebra]

3.1 If another pair of Borel representatives is chosen, each differs from the first on a Borel null set. For every fixed $x$, the first-factor difference is confined to a reflected translate of that null set and the second-factor difference to its original null set. By [L5] the two section products agree almost everywhere in $y$. Both integrals exist on a common full-measure set by the preceding bounds, and [L5] makes them equal there. Thus $f*g$ is a well-defined $L^r$ class, and steps 2.1 and 2.2 prove the asserted bound. [L2, L5, step 2.1, step 2.2] ∎
