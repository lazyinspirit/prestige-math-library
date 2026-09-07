---
id: "lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation"
kind: "lemma"
title: "Finite filtrations by highest-weight quotients"
deps: ["lem-finite-b-stable-generators-and-weight-flags-in-category-o", "thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra", "thm-universal-property-of-verma-modules", "thm-category-o-is-abelian-and-extension-closed"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chen, Lecture 2 §3 Proposition 3.6, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf"
    - title: "Sakellaridis, §2 Lemma 2.3, p.3"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: published
origin: "pipeline"
proof_strategy: "Induce the finite b-flag: PBW makes U(g) free as a right U(b)-module, so induction is exact. Map the resulting flag into M and delete repeated images. No truncation hypothesis or claim that M itself has a Verma flag"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Every $M\in\mathcal O$ is a quotient of a module with a finite Verma flag. Consequently it has a finite filtration whose nonzero factors are quotients of Verma modules, and is finitely generated over $U(\mathfrak n^-)$. The empty filtration is allowed for zero. No truncation hypothesis is needed, and a Verma flag of $M$ itself is not asserted.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Every $M\in\mathcal O$ has a finite-dimensional, $\mathfrak b$-stable, $\mathfrak h$-semisimple generating subspace $E$. There is a flag $0=E_0\subset E_1\subset\cdots\subset E_r=E$ of $\mathfrak b$-submodules whose quotients are one dimensional and annihilated by $\mathfrak n^+$. For $M=0$ take $E=0$ and the empty flag. ([[lem-finite-b-stable-generators-and-weight-flags-in-category-o]])

[F2] Let $x_1,\dots,x_r$ be an ordered basis of a finite-dimensional complex Lie algebra $\mathfrak g$. Then the monomials $$x_1^{a_1}x_2^{a_2}\cdots x_r^{a_r} \qquad (a_i\in \mathbb N_0)$$ form a basis of $U(\mathfrak g)$. In particular, multiplication identifies $\operatorname{gr}U(\mathfrak g)$ with the symmetric algebra $S(\mathfrak g)$ on the symbols of the $x_i$. ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]])

[F3] For a $\mathfrak g$-module $V$, sending a homomorphism $T:M(\lambda)\to V$ to $T(v_\lambda)$ is a bijection onto the vectors $v\in V$ of weight $\lambda$ annihilated by $\mathfrak n^+$. Here $M(\lambda)$ is def-verma-module. The nonzero vectors in this target are precisely the highest-weight vectors of weight $\lambda$ from def-highest-weight-vector-and-cyclic-highest-weight-module; the zero vector corresponds to the zero homomorphism. ([[thm-universal-property-of-verma-modules]])

[F4] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. The category $\mathcal O$ is closed under submodules, quotients and finite direct sums and is an abelian category. If $0\to A\to E\to B\to0$ is exact, $A,B\in\mathcal O$, and $E$ is $\mathfrak h$-semisimple, then $E\in\mathcal O$. The middle-term weight hypothesis is essential. ([[thm-category-o-is-abelian-and-extension-closed]])

## Proof

1.1 Choose the finite $\mathfrak b$-stable generating subspace $E$ and its one-dimensional weight flag. PBW, with negative roots ordered first, makes $U(\mathfrak g)$ free as a right $U(\mathfrak b)$-module. Tensoring with this right free module preserves injections and surjections, since it is a direct sum of copies of the input vector spaces. [F1, F2]

2.1 Inducing the flag therefore gives a filtration of $P=U(\mathfrak g)\otimes_{U(\mathfrak b)}E$ with factors $M(\lambda_i)$. The map $u\otimes e\mapsto ue$ is well defined and surjective onto $M$. Images of the flag give a filtration of $M$ whose factors are quotients of the corresponding Vermas; delete repeated images to retain only nonzero factors. These are subquotients in the abelian category. [F3, F4, construct, step 1.1]

3.1 PBW also identifies $P$ with $U(\mathfrak n^-)\otimes E$ as a left $U(\mathfrak n^-)$-module. A basis of $E$ is a finite generating set for this free module, and its image generates $M$ over $U(\mathfrak n^-)$. For $M=0$, choose $E=P=0$ and no factors. [F2, algebra, step 2.1] ∎
