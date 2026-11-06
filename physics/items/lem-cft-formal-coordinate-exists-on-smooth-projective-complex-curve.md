---
id: lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve
kind: lemma
title: A smooth curve has a formal coordinate at every point
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-cft-smooth-projective-complex-curve
  - thm-taylor-expansion-holomorphic-function
dependency_roles:
  def-cft-smooth-projective-complex-curve: mathematical-premise
  thm-taylor-expansion-holomorphic-function: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §10.1
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal coordinates as completed local parameters; the proof here uses the local Taylor expansion directly.
---

## Statement

Let $X$ be a nonempty compact connected Hausdorff second-countable topological $2$-manifold without boundary, equipped with a holomorphic atlas and a specified holomorphic projective embedding with the local smoothness presentation. For every $p\in X$, the completed local ring $\widehat{\mathcal O}_{X,p}$ is isomorphic as a complete local $\mathbb C$-algebra to $\mathbb C\llbracket t\rrbracket$. In particular, the formal-coordinate fiber at $p$ is nonempty.

## Statement references

[[def-cft-smooth-projective-complex-curve]]

## Facts & Assumptions

**Given:** A curve $X$ and a point $p\in X$.

[F1] [[def-cft-smooth-projective-complex-curve]]: $\mathcal O_{X,p}$ is the ring of germs of holomorphic functions at $p$, and its maximal ideal $\mathfrak m_p$ consists of germs vanishing at $p$; $\widehat{\mathcal O}_{X,p}=\varprojlim_{k\ge1}\mathcal O_{X,p}/\mathfrak m_p^k$.

[F2] [[thm-taylor-expansion-holomorphic-function]]: in a local holomorphic coordinate centered at $p$, every holomorphic germ has a convergent Taylor series, and a germ whose first $k$ coefficients vanish is divisible by the $k$th power of that coordinate.

## Proof

1.1 Choose a holomorphic chart $z$ centered at $p$, available by the smooth-curve hypothesis in [F1]. Then $\mathfrak m_p=(z)$. For each $k\ge1$, the Taylor truncation map $\mathcal O_{X,p}\to\mathbb C[z]/(z^k)$ is a surjective ring homomorphism: every polynomial of degree less than $k$ is a holomorphic germ, and [F2] says its kernel consists exactly of germs divisible by $z^k$, namely $\mathfrak m_p^k$. It therefore induces an isomorphism $\mathcal O_{X,p}/\mathfrak m_p^k\cong\mathbb C[z]/(z^k)$. [F1, F2, construct]

2.1 These isomorphisms commute with the quotient maps as $k$ increases. Their inverse limit is $\varprojlim_k\mathbb C[z]/(z^k)=\mathbb C\llbracket z\rrbracket$: a compatible family is exactly its sequence of Taylor coefficients, and a zero sequence has zero truncation at every $k$. Renaming $z$ as $t$ gives the required complete-local-ring isomorphism and hence a formal coordinate. [F1, step 1.1, construct] ∎
