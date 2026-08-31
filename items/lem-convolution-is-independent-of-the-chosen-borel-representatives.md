---
id: lem-convolution-is-independent-of-the-chosen-borel-representatives
kind: lemma
title: "Convolution on $L^1(\\mathbb{R}^n)$ is independent of the chosen Borel representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-borel-representatives-make-the-convolution-integrand-borel-measurable, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
landmark: false
proof_strategy: "If two Borel representatives agree almost everywhere, then after translating the null set they still agree almost everywhere in the integration variable. The integral of the difference therefore vanishes for every $x$ outside a fixed null exceptional set."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Let $f,g \in L^1(\mathbb{R}^n)$. If $\tilde f_1,\tilde f_2$ are Borel
representatives of $f$ and $\tilde g_1,\tilde g_2$ are Borel representatives of
$g$, then for almost every $x \in \mathbb{R}^n$,

$$ \int \tilde f_1(x-y)\tilde g_1(y)\,dy = \int \tilde f_2(x-y)\tilde g_2(y)\,dy. $$

## Facts & Assumptions

**Given:** Two Borel representatives for each of the $L^1$ classes $f$ and $g$.

[L1] The integrands from Borel representatives are measurable
([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[L2] The Lebesgue integral respects almost-everywhere equality
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[L3] Lebesgue measurability and null sets are translation invariant
([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_f := \{\tilde f_1 \neq \tilde f_2\}$ and $N_g := \{\tilde g_1 \neq \tilde g_2\}$. [L3, given, algebra]
These are null sets. For a fixed $x$, the set
$$ \{y : \tilde f_1(x-y) \neq \tilde f_2(x-y)\} = x-N_f $$
is also null by [L3]. Hence the two section integrands agree for almost every
$y$, outside the null set $(x-N_f) \cup N_g$. [L3, given, algebra]
2.1 By [L1], both section integrands are measurable, and step 1.1 says they are [L1, L2, step 1.1]
equal almost everywhere in $y$. Therefore [L2] gives equality of their
integrals whenever either side is defined as an absolutely convergent Lebesgue
integral. [L1, L2, step 1.1]
3.1 This holds for every fixed $x$, so in particular it holds for almost every [step 2.1]
$x$ on the domain where the $L^1$ convolution is defined. Thus the convolution
does not depend on the chosen Borel representatives. [step 2.1] ∎