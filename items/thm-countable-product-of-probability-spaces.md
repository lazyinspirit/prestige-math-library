---
id: thm-countable-product-of-probability-spaces
kind: theorem
title: "Assuming countable and dependent choice, countable products of arbitrary probability spaces"
status: published
origin: pipeline
deps: [def-coordinate-maps-and-cylinder-sigma-algebra, lem-finite-coordinate-cylinders-form-a-pi-system, lem-countable-product-cylinder-premeasure-is-countably-additive, thm-caratheodory-extension-theorem, def-countable-choice, def-dependent-choice, thm-dynkin-pi-lambda]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

Assume countable choice and dependent choice. For probability spaces
$(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure
$\mu$ on $\mathcal C_{\mathbb N}$ such that, for every finite $F$, its
$F$-coordinate marginal is $\bigotimes_{n\in F}\mu_n$.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and a sequence of probability spaces.

[F1] Under the two stated choice principles, the cylinder law with the displayed finite product values is a premeasure. ([[lem-countable-product-cylinder-premeasure-is-countably-additive]])

[F2] Assuming countable choice, a premeasure extends to a measure on the sigma-algebra it generates. ([[thm-caratheodory-extension-theorem]])

[F3] A lambda-system containing a pi-system contains the sigma-algebra generated
by that pi-system. ([[thm-dynkin-pi-lambda]])

## Proof

1.1 Define $\mu_0(\pi_F^{-1}(A))=(\bigotimes_{n\in F}\mu_n)(A)$. The finite product marginals are consistent, so [F1] applies. [F1]

1.2 By [F2], $\mu_0$ extends to a measure $\mu$ on the generated cylinder sigma-algebra. Since the empty cylinder is $E$ and has value $1$, $\mu$ is a probability measure. [F2]

2.1 Let $\nu$ be another probability measure with the stated marginals. The family $\mathcal D=\{A\in\mathcal C_{\mathbb N}:\mu(A)=\nu(A)\}$ is a lambda-system: it contains the whole space because both measures have mass one, is closed under relative complements of nested members, and is closed under increasing countable unions by continuity from below. The two measures agree on every cylinder, and cylinders are a pi-system by [[lem-finite-coordinate-cylinders-form-a-pi-system]], so [F3] gives $\mathcal C_{\mathbb N}\subseteq\mathcal D$. Hence $\mu=\nu$. [F3] ∎
