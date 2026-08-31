---
id: ex-the-gaussian-family-is-an-l-one-approximate-identity
kind: example
title: "The Gaussian family is an $L^1$ approximate identity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-l-one-approximate-identity-on-rn]
landmark: false
proof_strategy: "Check directly that the normalized Gaussian has mass one, fixed $L^1$ norm, and vanishing tails after rescaling. This records the standard non-compactly-supported family the design wanted on the companion page."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---
## Example

For $\varepsilon > 0$, define the normalized Gaussian on $\mathbb{R}^n$ by

$$ G_\varepsilon(x) := (2\pi\varepsilon^2)^{-n/2} e^{-|x|^2/(2\varepsilon^2)}. $$

Then $(G_\varepsilon)_{\varepsilon>0}$ is an $L^1$ approximate identity.

## Facts & Assumptions

**Given:** The Gaussian family $(G_\varepsilon)$.

[L1] An $L^1$ approximate identity is defined in
[[def-l-one-approximate-identity-on-rn]].

## Verification

**Proof technique:** direct.

1.1 The change of variables $u=x/\varepsilon$ gives [L1, given, algebra]
$$ \int_{\mathbb{R}^n} G_\varepsilon(x)\,dx = \int_{\mathbb{R}^n} (2\pi)^{-n/2} e^{-|u|^2/2}\,du = 1, $$
so every kernel has mass one and $\|G_\varepsilon\|_1=1$. [L1, given, algebra]

2.1 For every $\delta > 0$, [step 1.1, algebra]
$$ \int_{|x|>\delta} G_\varepsilon(x)\,dx = \int_{|u|>\delta/\varepsilon} (2\pi)^{-n/2} e^{-|u|^2/2}\,du \longrightarrow 0 $$
as $\varepsilon \to 0^+$, because the integration region escapes to infinity
against an integrable Gaussian tail. [step 1.1, algebra]

3.1 Steps 1.1 and 2.1 verify the defining clauses of [L1], so the Gaussian [L1, step 1.1, step 2.1]
family is an $L^1$ approximate identity even though it is not compactly
supported. [L1, step 1.1, step 2.1] ∎