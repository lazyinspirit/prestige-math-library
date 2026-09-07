---
id: "lem-n-plus-invariants-exist-in-every-nonzero-o-module"
kind: "lemma"
title: "A nonzero O-object has a highest-weight vector"
deps: ["prop-equivalent-support-description-of-category-o"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§15.1 p.79, paragraph after Definition 15.1"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "Take a maximal weight above any weight in the finite union of cones; bounded height ensures termination"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Every nonzero $M\in\mathcal O$ contains a nonzero weight vector killed by $\mathfrak n^+$.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Let $M$ be a finitely generated $\mathfrak h$-semisimple $\mathfrak g$-module. Then $M\in\mathcal O$ if and only if $\operatorname{supp}M\subset\bigcup_{i=1}^r(\lambda_i-Q^+)$ for some finite list of weights. In either case every $M_\mu$ is finite dimensional. The list may be empty for $M=0$; finite generation is an independent hypothesis. ([[prop-equivalent-support-description-of-category-o]])

## Proof

1.1 Choose a weight $\mu$ in the nonempty support. Above $\mu$, each containing cone $\lambda_i-Q^+$ has only finitely many possibilities: $\mu\leq\nu\leq\lambda_i$ implies $\nu-\mu,\lambda_i-\nu\in Q^+$ and their sum is fixed. Bounding simple-root coefficients makes this set finite. Thus the support above $\mu$ is a nonempty finite poset. [F1, choose]

2.1 Choose a maximal element $\nu$ of that poset and $0\ne v\in M_\nu$. Every positive-root operator sends $v$ to weight $\nu+\alpha$, which would still be above $\mu$ but is absent by maximality. All such operators kill $v$, hence $\mathfrak n^+v=0$. [choose, step 1.1] ∎
