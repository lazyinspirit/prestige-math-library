---
id: ex-boone-sharp-is-not-word-inversion
kind: example
title: "Boone sharp is not word inversion"
status: published
origin: pipeline
deps: ["def-boone-machine-semigroup-and-augmented-configurations", "def-boone-group-presentation-and-special-word"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Rotman, Chapter 12, pp.430\u2013431"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Example

Choose the distinct tape symbols $a=s_0$ and $b=h$ in $\bar S$. Then $(ab)^\#=a^{-1}b^{-1}$, whereas $(ab)^{-1}=b^{-1}a^{-1}$. These have different spellings.

## Facts & Assumptions

**Given:** Set $a=s_0$ and $b=h$.

[F1] The machine tape alphabet $S$ contains its blank $s_0$, while $h$ is a new symbol distinct from every member of $S$; the subsequent tape alphabet is $\bar S=S\cup\{h\}$. ([[def-boone-machine-semigroup-and-augmented-configurations]])

[F2] Sharp reverses each tape-letter sign in the same order; an inverse word reverses the whole order as well. ([[def-boone-group-presentation-and-special-word]])

## Verification

1.1 By [F1], $a,b$ are distinct letters of $\bar S$. Applying the defining letter substitution to the two positions gives $(ab)^\#=a^\#b^\#=a^{-1}b^{-1}$. [F1, F2, given, algebra]

1.2 The word $b^{-1}a^{-1}$ is the inverse spelling: $(ab)(b^{-1}a^{-1})$ cancels first $bb^{-1}$ and then $aa^{-1}$; the product in the other order cancels first $a^{-1}a$ and then $b^{-1}b$. Thus $(ab)^{-1}=b^{-1}a^{-1}$. [F2, given, algebra]

2.1 The two outputs start with different symbols and neither has adjacent inverse pairs, so their reduced spellings differ. For a single tape letter the two operations agree, and both send the empty word to the empty word. The length-two instance displays why sharp cannot be replaced by word inversion; no inequality in an arbitrary quotient group is inferred from spelling alone. [step 1.1, step 1.2] ∎ 
