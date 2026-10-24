---
id: cor-linfinity-embeds-continuously-into-bmo
kind: corollary
title: "L-infinity embeds continuously into BMO modulo constants"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "the sentence following Definition 7.1 ($|f|_{\\mathrm{BMO}}\\le2|f|_{L^\\infty}$), printed p. 29"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Examples 3.5(1), printed p. 37"
---

## Statement

Every $b\in L^\infty(\mathbb R^n)$ lies in $\mathrm{BMO}(\mathbb R^n)$ with
$\|b\|_{\mathrm{BMO}}\le2\|b\|_{L^\infty}$, so the class map
$L^\infty(\mathbb R^n)/\mathbb C\to\mathrm{BMO}(\mathbb R^n)/\mathbb C$ is a
continuous injection. Whether the injection is surjective is not claimed here;
the companion examples page records an unbounded BMO function, which exhibits
strictness independently.

## Facts & Assumptions

**Given:** A bounded function $b\in L^\infty(\mathbb R^n)$ and a cube $Q$, with the cube convention, the mean $b_Q$ and the seminorm and quotient of [[def-bmo-seminorm-and-quotient-by-constants]].

[F1] The mean is defined by $b_Q=|Q|^{-1}\int_Qb$, and the seminorm is $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$; the zero-seminorm class is exactly the class of functions constant almost everywhere ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F2] On a cube of finite volume, a bounded function is integrable and $|b_Q|\le\|b\|_{L^\infty}$ ([[def-bmo-seminorm-and-quotient-by-constants]]).

## Proof

**Proof technique:** direct.

1.1 For every cube $Q$ the triangle inequality and [F2] give $|Q|^{-1}\int_Q|b-b_Q|\le|Q|^{-1}\int_Q|b|+|b_Q|\le2\|b\|_{L^\infty}$, so $b$ is locally integrable and $\|b\|_{\mathrm{BMO}}\le2\|b\|_{L^\infty}$; in particular $L^\infty(\mathbb R^n)\subseteq\mathrm{BMO}(\mathbb R^n)$. [F1, F2, algebra]

1.2 Adding a constant $c$ to a representative gives $(b+c)_Q=b_Q+c$ by linearity of the integral, so the class map is well defined on $L^\infty(\mathbb R^n)/\mathbb C$: both quotients identify functions whose difference is almost everywhere constant. If two classes $b_1,b_2\in L^\infty(\mathbb R^n)/\mathbb C$ have the same image in $\mathrm{BMO}(\mathbb R^n)/\mathbb C$, then $b_1-b_2$ is almost everywhere constant by the definition of that quotient as the quotient of $\mathrm{BMO}$ by the constants, so $b_1$ and $b_2$ already represent the same class in $L^\infty(\mathbb R^n)/\mathbb C$; that is injectivity. [F1]

2.1 By invariance of the BMO seminorm under constants and step 1.1, for every $c\in\mathbb C$ one has $\|b\|_{\mathrm{BMO}}=\|b-c\|_{\mathrm{BMO}}\le2\|b-c\|_{L^\infty}$. Taking the infimum over $c$ gives $\|[b]\|_{\mathrm{BMO}/\mathbb C}\le2\|[b]\|_{L^\infty/\mathbb C}$ for the quotient norms, so the induced class map is continuous; step 1.2 gives injectivity. Both statements are choice-free: only linearity of the integral and the definition of the seminorm are used. [step 1.1, step 1.2] ∎
