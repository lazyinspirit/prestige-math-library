---
id: prop-the-radical-is-characteristic-and-the-radical-quotient-has-zero-radical
kind: proposition
title: The radical is characteristic and its quotient has zero radical
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra, thm-sum-of-solvable-ideals-is-solvable, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras, def-quotient-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Etingof, Introduction to Representation Theory / Lie notes, Proposition 14.6"
      url: https://math.mit.edu/~etingof/lnlg.pdf
      locator: "Proposition 14.6, radical discussion"
---

## Statement

Every automorphism of a finite-dimensional Lie algebra $\mathfrak g$
preserves $\operatorname{rad}(\mathfrak g)$. Moreover,

$$\operatorname{rad}\bigl(\mathfrak g/\operatorname{rad}(\mathfrak g)\bigr)=0.$$

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$ and its radical $\mathfrak r=\operatorname{rad}(\mathfrak g)$.

[L1] The radical is the largest solvable ideal ([[def-radical-of-a-finite-dimensional-lie-algebra]]).

[L2] The sum theorem supplies existence and uniqueness of that largest ideal ([[thm-sum-of-solvable-ideals-is-solvable]]).

[L3] Solvability passes to quotients and is preserved by extensions ([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

[L4] Ideals define quotient Lie algebras and canonical projections ([[def-quotient-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is an automorphism of $\mathfrak g$, then $f(\mathfrak r)$ is an ideal and its derived series is the image of the derived series of $\mathfrak r$, so it is solvable. Maximality in [L1], justified by [L2], gives $f(\mathfrak r)\subseteq\mathfrak r$. Applying the same argument to $f^{-1}$ gives the reverse inclusion, hence equality. [given, L1, L2, algebra]

2.1 Let $\overline{\mathfrak a}$ be a solvable ideal of $\mathfrak g/\mathfrak r$, and let $\mathfrak a$ be its inverse image under the quotient map [L4]. Then $\mathfrak a$ is an ideal containing $\mathfrak r$ and $\mathfrak a/\mathfrak r=\overline{\mathfrak a}$ is solvable. Since $\mathfrak r$ is solvable, extension closure [L3] makes $\mathfrak a$ solvable. By [L1], $\mathfrak a\subseteq\mathfrak r$, so equality holds and $\overline{\mathfrak a}=0$. Thus the quotient's largest solvable ideal is zero. This includes $\mathfrak r=0$ and $\mathfrak r=\mathfrak g$. [L1, L3, L4, algebra] ∎
