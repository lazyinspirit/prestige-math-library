---
id: lem-the-plane-or-disc-alternative-gives-contractibility
kind: lemma
title: "A plane domain homeomorphic to the plane or to the disc is contractible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-nullhomotopic-map-and-contractible-space,
       thm-composition-respects-homotopy,
       cor-convex-subsets-of-rn-are-contractible]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a topological space homeomorphic either to the
complex plane $\mathbb C$ or to the unit disc $\mathbb D$. Then $\Omega$ is
contractible.

## Facts & Assumptions

**Given:** A homeomorphism $h:\Omega\to E$, where $E$ is either $\mathbb C$ or $\mathbb D$.

[L1] A nonempty convex subset of $\mathbb R^n$ is contractible ([[cor-convex-subsets-of-rn-are-contractible]]).

[L2] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

[L3] A space is contractible when every continuous map from it is nullhomotopic ([[def-nullhomotopic-map-and-contractible-space]]).

## Proof

**Proof technique:** direct.

1.1 Both $\mathbb C\cong\mathbb R^2$ and the unit disc $\mathbb D$ are convex subsets of $\mathbb R^2$, so [L1] makes $E$ contractible. In particular, the identity map $\operatorname{id}_E$ is homotopic to a constant map $c_e$ for some $e\in E$. [L1, given]

2.1 Postcompose the homotopy from step 1.1 by $h^{-1}$ and precompose it by $h$. By [L2], this yields a homotopy from [step 1.1, L2, algebra]
$$h^{-1}\circ\operatorname{id}_E\circ h=\operatorname{id}_\Omega$$
to the constant map at $h^{-1}(e)$. Thus $\operatorname{id}_\Omega$ is nullhomotopic.

3.1 Let $f:\Omega\to Y$ be any continuous map into any topological space $Y$. Postcomposing the nullhomotopy from step 2.1 by $f$ and using [L2] again shows that [step 2.1, L2, L3]
$$f=f\circ\operatorname{id}_\Omega$$
is homotopic to the constant map at $f(h^{-1}(e))$. Hence every continuous map out of $\Omega$ is nullhomotopic, so [L3] makes $\Omega$ contractible. ∎
