---
id: "lem-simple-highest-weight-modules-are-restricted-self-dual"
kind: "lemma"
title: "Restricted self-duality of simple highest-weight modules"
deps: ["def-restricted-dual-of-a-weight-module", "thm-verma-module-has-a-unique-simple-quotient", "prop-weights-of-a-verma-module-lie-below-lambda", "thm-universal-property-of-verma-modules"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 8 §3 Proposition 3.10, p.5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
status: "draft"
origin: "pipeline"
proof_strategy: "On finite weight spaces annihilators turn a proper nonzero submodule of the dual into a proper nonzero submodule of L. Hence dual is simple. Its highest line has weight lambda, so the universal property identifies it with L(lambda)"
---

## Statement

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For every highest weight $\lambda$, $D(L(\lambda))\cong L(\lambda)$ as $\mathfrak g$-modules.

## Facts & Assumptions

**Given:** The setting above and the hypotheses in the statement.

[F1] Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$. For an $\mathfrak h$-semisimple module $M$ with finite-dimensional weight spaces, its **restricted Chevalley dual** is $$D(M)=\bigoplus_{\mu\in\mathfrak h^*}M_\mu^*,\qquad (x\varphi)(m)=\varphi(\tau(x)m)\quad(x\in U(\mathfrak g)).$$ Here each functional is extended by zero on the other weight spaces and $\tau$ is the fixed anti-involution of def-chevalley-contravariant-form. In particular $\tau(h)=h$ and $D(M)_\mu=M_\mu^*$. A map $f:M\to N$ induces $D(f):D(N)\to D(M)$ by precomposition. The action law follows from $\tau(xy)=\tau(y)\tau(x)$; a root vector of weight $\alpha$ sends $M_\mu^*$ to $M_{\mu+\alpha}^*$, so the restricted sum is stable. This is a complex-linear algebraic dual, with no conjugation. Ordinary Lie-module duality has a minus sign and reverses weights; twisting that dual by the Lie automorphism $x\mapsto-\tau(x)$ gives the convention used here. ([[def-restricted-dual-of-a-weight-module]])

[F2] The proper submodule $J(\lambda)$ which is the sum of all proper submodules is the unique maximal submodule of $M(\lambda)$. The quotient $L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple quotient. ([[thm-verma-module-has-a-unique-simple-quotient]])

[F3] The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for $\beta\in Q^+$; every weight space is finite dimensional, and $M(\lambda)_\lambda=\mathbb Cv_\lambda$. ([[prop-weights-of-a-verma-module-lie-below-lambda]])

[F4] For a $\mathfrak g$-module $V$, sending a homomorphism $T:M(\lambda)\to V$ to $T(v_\lambda)$ is a bijection onto the vectors $v\in V$ of weight $\lambda$ annihilated by $\mathfrak n^+$. Here $M(\lambda)$ is def-verma-module. The nonzero vectors in this target are precisely the highest-weight vectors of weight $\lambda$ from def-highest-weight-vector-and-cyclic-highest-weight-module; the zero vector corresponds to the zero homomorphism. ([[thm-universal-property-of-verma-modules]])

## Proof

1.1 The simple Verma quotient $L=L(\lambda)$ has finite-dimensional weight spaces, support in $\lambda-Q^+$, and a nonzero one-dimensional highest line. These follow from the Verma weight formula and the fact that a proper submodule cannot contain its generating top vector. Therefore $D(L)$ has the same weight dimensions, and its top line is killed by $\mathfrak n^+$. [F1, F2, F3]

2.1 If $S$ were a nonzero proper submodule of $D(L)$, it would be a weight submodule. Finite-dimensionality of each weight space implies that its annihilator $S^\perp\subset L$ is nonzero (some weight component of $S$ is proper) and proper (some functional in $S$ is nonzero). It is a $\mathfrak g$-submodule, since $\varphi(xm)=(\tau(x)\varphi)(m)$ and $S$ is stable. This contradicts simplicity of $L$. Hence $D(L)$ is simple without first presuming it is finitely generated. [F1, F2, algebra, step 1.1]

3.1 A nonzero vector of the top line gives a nonzero Verma map $M(\lambda)\to D(L)$ by the universal property. It is surjective by simplicity, and the unique simple quotient identifies its target with $L(\lambda)$. [F4, F2, step 2.1] ∎
