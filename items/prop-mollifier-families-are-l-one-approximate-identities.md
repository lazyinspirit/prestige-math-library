---
id: prop-mollifier-families-are-l-one-approximate-identities
kind: proposition
title: "A unit-mass smooth bump generates an $L^1$ approximate identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-one-approximate-identity-on-rn, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, thm-linear-change-of-variables-for-lebesgue-measure, thm-linearity-of-the-lebesgue-integral-on-l-one]
landmark: false
proof_strategy: "Rescaling preserves total mass by the linear change of variables formula, keeps the $L^1$ norm fixed, and squeezes the support into a shrinking ball around the origin. This item is the whole reason the page does not mint a second bump example."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---
## Statement

Assume the Axiom of Countable Choice.

Let $\varphi \in C_c^\infty(\mathbb{R}^n)$ satisfy
$\int \varphi = 1$, and let
$\varphi_\varepsilon(x) = \varepsilon^{-n}\varphi(x/\varepsilon)$. Then
$(\varphi_\varepsilon)_{\varepsilon>0}$ is an $L^1$ approximate identity.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a unit-mass smooth bump, and its rescalings.

[L1] An $L^1$ approximate identity and a mollifier family are defined in [[def-l-one-approximate-identity-on-rn]] and [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]].

[L2] Linear change of variables preserves Lebesgue measure in the expected way, and the integral is linear on $L^1$ ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the change of variables $u = x/\varepsilon$ gives [L1, L2, given, algebra] $$ \int \varphi_\varepsilon(x)\,dx = \int \varphi(u)\,du = 1 $$ and likewise $$ \|\varphi_\varepsilon\|_1 = \int |\varphi_\varepsilon(x)|\,dx = \int |\varphi(u)|\,du = \|\varphi\|_1. $$ So the mass is $1$ and the $L^1$ norms are uniformly bounded. [L1, L2, given, algebra]

2.1 Let $R > 0$ satisfy $\operatorname{supp}(\varphi) \subseteq \overline{B(0,R)}$. [step 1.1, choose, algebra] Then $\operatorname{supp}(\varphi_\varepsilon) \subseteq \overline{B(0,\varepsilon R)}$. Hence for every $\delta > 0$ and every $\varepsilon < \delta/R$, $$ \int_{|x|>\delta} |\varphi_\varepsilon(x)|\,dx = 0. $$ So the tails concentrate at the origin. [step 1.1, choose, algebra]

3.1 Steps 1.1 and 2.1 verify the three defining clauses in [L1], so [L1, step 1.1, step 2.1] $(\varphi_\varepsilon)$ is an $L^1$ approximate identity. [L1, step 1.1, step 2.1] ∎
