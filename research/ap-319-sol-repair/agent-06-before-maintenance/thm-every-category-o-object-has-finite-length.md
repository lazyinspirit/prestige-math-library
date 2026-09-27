---
id: "thm-every-category-o-object-has-finite-length"
kind: "theorem"
title: "Every object of O has finite length"
deps: ["lem-finite-dot-orbit-weight-spaces-detect-o-subquotients", "thm-category-o-decomposes-by-generalized-central-character", "prop-equivalent-support-description-of-category-o", "lem-n-plus-invariants-exist-in-every-nonzero-o-module", "lem-central-action-on-a-cyclic-highest-weight-module-is-scalar"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 6 §2 Theorem 2.4 and proof, pp.5–6"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Sum the finite detector bounds over central summands. Refine a chain until no refinement is possible; the bound forces finite termination and all factors are simple"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Every object of $\mathcal O$ has a finite composition series and is both Noetherian and Artinian. The length of zero is zero.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Suppose $M\in\mathcal O_{\chi_\lambda}$. Every nonzero subquotient $T$ of $M$ has $T_\mu\ne0$ for some $\mu\in W\cdot\lambda$. In particular the number of strict inclusions in any finite chain of submodules of $M$ is at most $$d_\lambda(M)=\sum_{\mu\in W\cdot\lambda}\dim M_\mu,$$ where distinct weights in the orbit are counted once. ([[lem-finite-dot-orbit-weight-spaces-detect-o-subquotients]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category is the categorical direct sum $\mathcal O=\bigoplus_\chi\mathcal O_\chi$: objects have finite support in the index $\chi$, morphisms between distinct components vanish, and the canonical component projections are exact. ([[thm-category-o-decomposes-by-generalized-central-character]])

[F3] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Let $M$ be a finitely generated $\mathfrak h$-semisimple $\mathfrak g$-module. Then $M\in\mathcal O$ if and only if $\operatorname{supp}M\subset\bigcup_{i=1}^r(\lambda_i-Q^+)$ for some finite list of weights. In either case every $M_\mu$ is finite dimensional. The list may be empty for $M=0$; finite generation is an independent hypothesis. ([[prop-equivalent-support-description-of-category-o]])

[F4] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every nonzero $M\in\mathcal O$ contains a nonzero weight vector killed by $\mathfrak n^+$. ([[lem-n-plus-invariants-exist-in-every-nonzero-o-module]])

[F5] Every central element acts on a cyclic highest-weight module by a scalar. In particular, each cyclic highest-weight module has a well-defined central character in the sense of def-central-character-of-a-lie-algebra-module. ([[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]])

## Proof

1.1 Split $M$ into its finitely many nonzero generalized central-character summands. Each such summand has a highest-weight vector: the finite-cone support of F3 has a maximal weight above any chosen weight, since simple-root coefficients in the interval are bounded. Central action on this highest line defines a character $\chi_\lambda$: a central element preserves the highest line of its cyclic module and commutes with the generator action. The generalized character on this summand must equal that scalar character, since a scalar with a zero power is zero. Thus each summand is indexed by some highest weight $\lambda$. [F5, F4, F2, F3, algebra]

2.1 Apply F1 to each summand and add the bounds. Character projections are exact by F2, so every strict submodule factor has a nonzero projection and contributes at least one to this sum of detectors. All finite strict submodule chains in $M$ consequently have a common finite integer bound. For $M=0$ the sum and bound are zero. [F1, F2, step 1.1]

3.1 Start with $0\subset M$, omitting the inclusion when $M=0$. If a nonzero factor is not simple, insert the inverse image of a nonzero proper submodule of that factor. Each insertion increases the number of strict inclusions. The bound forces termination and all resulting factors are simple. An infinite ascending or descending chain would have finite initial portions exceeding the same bound. Thus both chain conditions hold. [algebra, step 2.1] ∎
