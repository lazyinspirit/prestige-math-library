---
id: prop-adjoint-intertwines-the-exponential-map
kind: proposition
title: Adjoint intertwines the exponential map
status: published
origin: pipeline
deps: ["def-countable-choice", "def-conjugation-and-the-adjoint-representation-of-a-lie-group", "prop-exponential-map-is-natural-for-lie-group-homomorphisms"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Formula (1.88) and preceding definition, printed page 79
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.7(5) and proof, printed pages 30–31
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $G$ be a finite-dimensional real Lie group
with Lie algebra $\mathfrak g$. For every $g\in G$ and $X\in\mathfrak g$,

$$g\exp_G(X)g^{-1}=\exp_G(\operatorname{Ad}_gX).$$

The countable-choice assumption is inherited exactly from exponential
naturality.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$,
$g\in G$, and $X\in\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Conjugation $C_g(h)=ghg^{-1}$ is a Lie-group automorphism and
$d(C_g)_e=\operatorname{Ad}_g$.
[[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

[F3] Every Lie-group homomorphism $F$ satisfies
$F(\exp X)=\exp(dF_eX)$, assuming $\mathrm{AC}_\omega$.
[[prop-exponential-map-is-natural-for-lie-group-homomorphisms]].

## Proof

**Proof technique:** direct.

1.1 Apply exponential naturality [F3] to the conjugation automorphism $C_g$ from [F2]. Since $d(C_g)_e=\operatorname{Ad}_g$, it gives $C_g(\exp_GX)=\exp_G(\operatorname{Ad}_gX)$. Expanding the definition of $C_g$ is the claimed identity. [F2, F3]

2.1 A Lie group is nonempty and boundaryless. If $\dim G=0$, both sides equal the conjugate of the identity, and dimension one requires no change; $X=0$ gives $e$ on both sides. No metric, degeneracy, interval, endpoint, or biconditional occurs. The only choice use is the stated $\mathrm{AC}_\omega$ inherited through [F3]; fixing one $g$ and one $X$ adds no choice. [F1, F2, F3, step 1.1] ∎
