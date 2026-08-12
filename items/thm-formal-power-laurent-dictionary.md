---
id: thm-formal-power-laurent-dictionary
kind: theorem
title: "$K\\llbracket x\\rrbracket$ embeds in $K((x))$ as the nonnegative-order subring; every nonzero Laurent series is uniquely $x^{v_x(h)}u$ with $u\\in K\\llbracket x\\rrbracket^\\times$ and inverse $x^{-v_x(h)}u^{-1}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-formal-power-series-unit-criterion, def-formal-laurent-series-and-residue, thm-laurent-series-field, lem-laurent-valuation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Statement

For every field $K$, extending a power series by zero at negative exponents gives an injective unital ring homomorphism

$$K\llbracket x\rrbracket\hookrightarrow K((x))$$

whose image is $\{0\}\cup\{h:v_x(h)\ge0\}$. Every nonzero $h\in K((x))$ has a unique factorisation

$$h=x^{v_x(h)}u,\qquad u\in K\llbracket x\rrbracket^\times,$$

and

$$h^{-1}=x^{-v_x(h)}u^{-1}.$$

For $K=\mathbb R$, the substitution $x^n\mapsto t^{-n}$ identifies this description with the published real Laurent-series construction.

## Facts & Assumptions

**Given:** The power-series unit criterion [[thm-formal-power-series-unit-criterion]] and the Laurent definitions of [[def-formal-laurent-series-and-residue]].

The theorem [[thm-laurent-series-field]] states that the published real Laurent-series ring is a field and constructs inverses from the leading coefficient.

The lemma [[lem-laurent-valuation]] states for nonzero published real Laurent series that valuation is additive on products and at least the minimum on sums, with equality when the two valuations differ.

## Proof

**Proof technique:** extend and shift coefficient functions.

1.1 Extending coefficients by zero at negative integers preserves addition, $1$, and every finite convolution, and is injective. Its nonzero image has nonnegative least exponent; conversely every Laurent series of nonnegative order already has no negative coefficient and so comes from a unique power series. [given]

1.2 Let $m=v_x(h)$. Define $u=x^{-m}h$. Then $u\in K\llbracket x\rrbracket$ and its constant coefficient is the nonzero leading coefficient of $h$, so $u$ is a unit. This gives $h=x^mu$ and $x^{-m}u^{-1}$ is directly a two-sided inverse. If $h=x^av=x^bu$ with the two final factors constant-term units, least exponents give $a=b=m$ and coefficient extensionality gives $u=v$. [given]

2.1 Over $\mathbb R$, sending coefficient $a_nx^n$ to $a_nt^{-n}$ preserves finite convolution. The least $x$-exponent becomes the published least $t^{-1}$-exponent, so the order, factorisation, unit, and inverse formulas agree with the cited real theorem and valuation lemma. [step 1.1, step 1.2, given]

3.1 Steps 1.1-2.1 prove the embedding, image, unique factorisation, inverse formula, and real-coordinate dictionary. [step 1.1, step 1.2, step 2.1] ∎
