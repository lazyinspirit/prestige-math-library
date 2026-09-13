---
id: prop-exponential-map-is-natural-for-lie-group-homomorphisms
kind: proposition
title: Exponential map is natural for Lie-group homomorphisms
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-one-parameter-subgroups-are-exactly-exponentials", "def-lie-group-homomorphism-isomorphism-and-automorphism", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.7(4) and complete uniqueness proof, printed pages 30–31
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $F:G\to H$ is a homomorphism of
finite-dimensional real Lie groups, then for every $X\in\mathfrak g=T_eG$,

$$F(\exp_GX)=\exp_H(dF_eX).$$

The countable-choice assumption is used exactly through the supplied
one-parameter-subgroup/exponential characterization.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie-group homomorphism $F:G\to H$, and
$X\in\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] A one-parameter subgroup with initial velocity $Y$ is uniquely the curve
$t\mapsto\exp(tY)$.
[[thm-one-parameter-subgroups-are-exactly-exponentials]].

[F3] The map $F$ is smooth, preserves identities, and satisfies
$F(gh)=F(g)F(h)$.
[[def-lie-group-homomorphism-isomorphism-and-automorphism]].

[F4] Differentials of smooth maps obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 By [F2], $a_X(t)=\exp_G(tX)$ is a one-parameter subgroup. Since [F3] makes $F$ a smooth group homomorphism, the composite $c(t)=F(a_X(t))$ is a one-parameter subgroup of $H$. [F2, F3]

2.1 The same characterization [F2] gives $a_X'(0)=X$. Hence the chain rule [F4] yields $$c'(0)=dF_e(a_X'(0))=dF_eX.$$ [F2, F3, F4, step 1.1]

3.1 Apply [F2] in $H$: the unique one-parameter subgroup with initial velocity $dF_eX$ is $t\mapsto\exp_H(t\,dF_eX)$. Steps 1.1--2.1 identify $c$ with this curve. Evaluating at $t=1$ gives $$F(\exp_GX)=\exp_H(dF_eX).$$ [F2, step 1.1, step 2.1]

4.1 Both Lie groups are nonempty and boundaryless. Zero-dimensional source or target Lie algebras and dimension one require no change, including $X=0$. The one-parameter curves are global, so no endpoint issue occurs. No metric or nondegeneracy condition occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F2]; composition with one supplied homomorphism and evaluation at one add no choice. No biconditional is asserted. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
