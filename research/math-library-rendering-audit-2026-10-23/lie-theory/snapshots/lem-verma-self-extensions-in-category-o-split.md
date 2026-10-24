---
id: "lem-verma-self-extensions-in-category-o-split"
kind: "lemma"
title: "Verma self-extensions in O split"
deps: ["thm-category-o-is-abelian-and-extension-closed", "thm-universal-property-of-verma-modules", "prop-weights-of-a-verma-module-lie-below-lambda"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§15.1 Exercise 15.6(i), p.80"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Lift the top vector as an actual weight vector; E has no weights above lambda, so the lift is singular and induces a section"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Every short exact sequence $0\to M(\lambda)\to E\xrightarrow{p}M(\lambda)\to0$ in $\mathcal O$ splits.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

[F2] For a $\mathfrak g$-module $V$, sending a homomorphism $T:M(\lambda)\to V$ to $T(v_\lambda)$ is a bijection onto the vectors $v\in V$ of weight $\lambda$ annihilated by $\mathfrak n^+$. Here $M(\lambda)$ is def-verma-module. The nonzero vectors in this target are precisely the highest-weight vectors of weight $\lambda$ from def-highest-weight-vector-and-cyclic-highest-weight-module; the zero vector corresponds to the zero homomorphism. ([[thm-universal-property-of-verma-modules]])

[F3] The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for $\beta\in Q^+$; every weight space is finite dimensional, and $M(\lambda)_\lambda=\mathbb Cv_\lambda$. ([[prop-weights-of-a-verma-module-lie-below-lambda]])

## Proof

1.1 Weightwise exactness and the Verma support formula imply that $E$ has no weights outside $\lambda-Q^+$. Lift the highest vector to an actual vector $v\in E_\lambda$, using the surjection on that weight space. Every positive-root operator kills $v$ since its target weight is absent. [F1, F3, choose]

2.1 The universal property supplies $s:M(\lambda)\to E$ taking its highest vector to $v$. The composite $ps$ fixes the highest generator, hence equals the identity on the cyclic module. Thus $s$ is a section. No integrality or regularity condition on $\lambda$ was used. [F2, algebra, step 1.1] ∎
