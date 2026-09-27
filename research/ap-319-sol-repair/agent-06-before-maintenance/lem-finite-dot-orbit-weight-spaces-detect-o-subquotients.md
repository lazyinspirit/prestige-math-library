---
id: "lem-finite-dot-orbit-weight-spaces-detect-o-subquotients"
kind: "lemma"
title: "Finite weight-space detection of subquotients"
deps: ["thm-category-o-is-abelian-and-extension-closed", "lem-n-plus-invariants-exist-in-every-nonzero-o-module", "cor-central-characters-are-dot-weyl-orbits", "lem-central-action-on-a-cyclic-highest-weight-module-is-scalar", "lem-generalized-central-character-submodules-are-direct-summands", "prop-equivalent-support-description-of-category-o", "lem-harish-chandra-projection-computes-highest-weight-scalars"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Etingof, §15.1 Lemma 15.9, p.81: finite weight-space detector method"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Chen, Lecture 6 §2 Corollary 2.3 and Theorem 2.4 proof, pp.5–6: finite Weyl-orbit labels"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "A singular vector gives a highest-weight cyclic submodule with scalar character equal to chi_lambda. Harish-Chandra identifies its highest label in the finite orbit. Weight-space exactness forces a positive detector increment at every strict chain step"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Suppose $M\in\mathcal O_{\chi_\lambda}$. Every nonzero subquotient $T$ of $M$ has $T_\mu\ne0$ for some $\mu\in W\cdot\lambda$. In particular the number of strict inclusions in any finite chain of submodules of $M$ is at most

$$d_\lambda(M)=\sum_{\mu\in W\cdot\lambda}\dim M_\mu,$$

where distinct weights in the orbit are counted once.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

[F2] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every nonzero $M\in\mathcal O$ contains a nonzero weight vector killed by $\mathfrak n^+$. ([[lem-n-plus-invariants-exist-in-every-nonzero-o-module]])

[F3] Let $\chi_\lambda$ and $\chi_\mu$ be the central characters obtained from highest weights $\lambda$ and $\mu$. Then $$\chi_\lambda=\chi_\mu \quad \text{if and only if} \quad \mu\in W\cdot \lambda,$$ where $W\cdot \lambda:=\{w(\lambda+\rho)-\rho : w\in W\}$. ([[cor-central-characters-are-dot-weyl-orbits]])

[F4] Every central element acts on a cyclic highest-weight module by a scalar. In particular, each cyclic highest-weight module has a well-defined central character in the sense of def-central-character-of-a-lie-algebra-module. ([[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]])

[F5] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every $M\in\mathcal O$ decomposes canonically into finitely many nonzero generalized central-character submodules: $$M=\bigoplus_\chi M_\chi.$$ For each summand there is a single $N\geq1$ such that $\mathfrak m_\chi^NM_\chi=0$. The decomposition of zero is empty. ([[lem-generalized-central-character-submodules-are-direct-summands]])

[F6] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Let $M$ be a finitely generated $\mathfrak h$-semisimple $\mathfrak g$-module. Then $M\in\mathcal O$ if and only if $\operatorname{supp}M\subset\bigcup_{i=1}^r(\lambda_i-Q^+)$ for some finite list of weights. In either case every $M_\mu$ is finite dimensional. The list may be empty for $M=0$; finite generation is an independent hypothesis. ([[prop-equivalent-support-description-of-category-o]])

[F7] Let a cyclic highest-weight module have highest vector of weight $\mu$. Then every $z\in Z(U(\mathfrak g))$ acts by the scalar $\operatorname{pr}(z)(\mu)=\chi_\mu(z)$. ([[lem-harish-chandra-projection-computes-highest-weight-scalars]])

## Proof

1.1 By closure, a nonzero subquotient $T$ is in $\mathcal O$. Choose a nonzero highest-weight vector $v\in T_\mu$. A common power of $\mathfrak m_{\chi_\lambda}$ kills $M$ and hence $T$. On the cyclic highest-weight module $U(\mathfrak g)v$, F4 gives scalar central action and F7 identifies its scalar as $\chi_\mu(z)$. Thus $(z-\chi_\lambda(z))^Nv=0$ forces $\chi_\mu(z)=\chi_\lambda(z)$ for each $z\in Z$. [F1, F2, F4, F5, F7]

2.1 The exact central-character criterion now gives $\mu\in W\cdot\lambda$. The Weyl group is finite, and all weight spaces of an $\mathcal O$ object are finite dimensional, so the displayed detector is finite. For a short exact sequence of weight modules, taking any fixed weight is exact (decompose a lift into weight components). Thus $d_\lambda$ is additive on subquotients of $M$. [F6, F3, algebra, step 1.1]

3.1 Every nonzero factor of a strict chain has detector at least one by the first two steps. Additivity bounds the number of strict inclusions by $d_\lambda(M)$, whether the chain is written ascending or descending. If the detector is zero there is no nonzero subquotient; in particular $M=0$, with no strict inclusions. [algebra, step 2.1] ∎
