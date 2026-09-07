---
id: "thm-simple-objects-of-category-o-are-highest-weight-modules"
kind: "theorem"
title: "The simple objects of O"
deps: ["thm-category-o-is-abelian-and-extension-closed", "lem-n-plus-invariants-exist-in-every-nonzero-o-module", "thm-universal-property-of-verma-modules", "thm-verma-module-has-a-unique-simple-quotient", "prop-verma-and-finite-dimensional-modules-lie-in-category-o"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 6 §2 Proposition 2.2, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "A highest-weight vector gives a nonzero Verma surjection to a simple; highest weight uniqueness distinguishes the labels"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

The simple objects of $\mathcal O$ are exactly the modules $L(\lambda)$, $\lambda\in\mathfrak h^*$, and $L(\lambda)\cong L(\mu)$ if and only if $\lambda=\mu$. Simplicity here excludes zero.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every nonzero $M\in\mathcal O$ contains a nonzero weight vector killed by $\mathfrak n^+$. ([[lem-n-plus-invariants-exist-in-every-nonzero-o-module]])

[F3] For a $\mathfrak g$-module $V$, sending a homomorphism $T:M(\lambda)\to V$ to $T(v_\lambda)$ is a bijection onto the vectors $v\in V$ of weight $\lambda$ annihilated by $\mathfrak n^+$. Here $M(\lambda)$ is def-verma-module. The nonzero vectors in this target are precisely the highest-weight vectors of weight $\lambda$ from def-highest-weight-vector-and-cyclic-highest-weight-module; the zero vector corresponds to the zero homomorphism. ([[thm-universal-property-of-verma-modules]])

[F4] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F5] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every Verma module $M(\lambda)$, every quotient of it, and every finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module belongs to $\mathcal O$. ([[prop-verma-and-finite-dimensional-modules-lie-in-category-o]])

## Proof

1.1 For a nonzero simple object $S$, closure under submodules means simplicity in $\mathcal O$ is the same as module simplicity. Choose a highest-weight vector of weight $\lambda$ in $S$. The Verma universal property yields a nonzero map $M(\lambda)\to S$, necessarily surjective. Its unique simple quotient identifies $S$ with $L(\lambda)$. [F1, F2, F3, F4]

2.1 Conversely $L(\lambda)$ belongs to $\mathcal O$ and is simple as a module, hence as an object of this full subcategory. Its highest line survives the Verma quotient: killing that generator kills the whole quotient. Its other weights are below $\lambda$. These weight facts also follow directly from the induced Verma construction. [F4, F5, step 1.1]

3.1 An isomorphism $L(\lambda)\cong L(\mu)$ preserves weights, so the two highest weights give $\lambda\leq\mu$ and $\mu\leq\lambda$. The positive root cone is pointed, so $\lambda=\mu$. Conversely equal labels give the same quotient up to its defining isomorphism. [algebra, step 2.1] ∎
