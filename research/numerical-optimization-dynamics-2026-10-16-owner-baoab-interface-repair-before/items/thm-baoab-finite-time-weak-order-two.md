---
id: thm-baoab-finite-time-weak-order-two
kind: theorem
title: "Finite-time weak order two of BAOAB"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - alg-baoab-underdamped-langevin-splitting
  - lem-baoab-one-step-weak-expansion
  - def-axiom-of-choice
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-dominated-convergence
  - thm-fatou-lemma
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited through the SDE and Itô interfaces used by the local-expansion supplier; all telescoping and moment estimates are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §§2–3 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §§5.2.1–5.2.2"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
    - title: "Assyr Abdulle, Gilles Vilmart, and Konstantinos C. Zygalakis, Long time accuracy of Lie-Trotter splitting methods for Langevin dynamics, §§2.2–3.1"
      url: "https://www.unige.ch/~vilmart/paper_langevin_splitting.pdf"
---

## Statement

Assume the model data of [[def-underdamped-langevin-equation-and-canonical-gibbs-density]], $V\in C^8$, and $D^jV$ is globally bounded for $2\le j\le8$. Let $Z_0\in L^6(\mathbb R^{2d})$, let $T>0$, let $N\ge1$ and $h=T/N\le1$, and let $\phi\in C_b^8(\mathbb R^{2d})$. Run BAOAB with fresh independent standard Gaussian vectors. If $Z_N^B$ is its state after $N$ steps and $Z_T$ is the exact SDE state driven by the same Brownian motion, then
$$|\mathbb E\phi(Z_N^B)-\mathbb E\phi(Z_T)|\le C_{T,\phi,Z_0}h^2.$$
The order is a finite-time weak order statement under the displayed smoothness and moment assumptions; it gives no invariant-measure bias or ergodicity conclusion.

## Facts & Assumptions

**Given:** The hypotheses above and a uniform grid $t_n=nh$ on $[0,T]$.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: $C_b^8$ means bounded continuous derivatives through order eight, and the total generator is $L=A+B+O$ with the three operators in [[lem-baoab-one-step-weak-expansion]].

[F2] [[lem-baoab-one-step-weak-expansion]]: for smooth polynomial-growth test functions, $K_h\psi-P_h\psi$ is bounded by $Ch^3(1+|z|^3)$ under the stated derivative assumptions.

[F3] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: the exact solution exists uniquely and globally for the globally Lipschitz, linearly growing drift.

[F4] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: It\^o's formula supplies the generator moment estimate for smooth Lyapunov functions and the short-time semigroup expansion.

[F5] [[thm-dominated-convergence]]: dominated pointwise convergence permits differentiation limits and integral limits under the stated integrable bounds.

[F6] [[thm-fatou-lemma]]: the integral of a nonnegative pointwise limit is at most the limit inferior of the integrals.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F2]–[F6]; the finite-grid argument uses no further choice.

## Proof

**Given:** The assumptions above.

1.1 Put $W_s(z)=(1+|z|^2)^s$ for integer $s\ge1$. The drift $b$ has linear growth and bounded derivatives of positive order, and $G$ is constant, so $|LW_s(z)|\le C_sW_s(z)$. Applying [F4] to the solution stopped on radius $R$, taking expectations and applying Gronwall gives $\mathbb EW_s(Z_{t\wedge\tau_R})\le e^{C_st}\mathbb EW_s(Z_0)$; Fatou’s lemma [F6] as $R\to\infty$ gives uniformly bounded exact moments through order six on $[0,T]$. Each B or A stage has the form $z+h\delta(z)$ with $|\delta(z)|\le C(1+|z|)$, hence the mean-value formula and Young’s inequality give $W_s(z+h\delta(z))\le(1+Ch)W_s(z)+Ch$. In the O stage $p$ becomes $ap+\eta$; conditional terms linear in $\eta$ vanish and terms of degree $j\ge2$ have moments at most $C_jh^{j/2}$, so Young’s inequality gives the same stage bound. Composing five stages and iterating over $Nh=T$ yields $\max_{n\le N}\mathbb EW_s(Z_n^B)\le C_T$ for $s\le3$. [F1, F2, F3, F4, F6, given, algebra]

2.1 For $0\le t\le T$, the solution flow is differentiable through order six in its initial state. The first derivative solves $\dot J=Db(Z_t)J$; each higher derivative solves the same linear equation with forcing a finite sum of products of lower flow derivatives and bounded derivatives of $b$. Induction and Gronwall bound these derivatives uniformly. Differentiating $P_t\phi(z)=\mathbb E\phi(Z_t^z)$ under expectation is justified by bounded derivatives of $\phi$ and the flow bounds, so $P_t\phi$ has bounded derivatives through order six uniformly. Thus $\psi_n=P_{T-t_{n+1}}\phi$ satisfies the local-expansion hypotheses in [F2], uniformly in $n,N$. [F1, F2, F3, F5, step 1.1]

3.1 Let $K_h$ be the BAOAB transition and $P_h$ the exact transition. Inserting one exact transition at a time and using the Markov property gives [A1, F2, F3, F5, F6, step 1.1, step 2.1, algebra]
$$\mathbb E\phi(Z_N^B)-\mathbb E\phi(Z_T)=\sum_{n=0}^{N-1}\mathbb E\bigl[(K_h-P_h)P_{T-t_{n+1}}\phi(Z_n^B)\bigr].$$
By [F2] and step 2.1, each summand has absolute value at most $Ch^3\mathbb E(1+|Z_n^B|^3)\le C_T h^3$ using the $s=2$ moment bound in step 1.1. Summing $N=T/h$ terms gives $C_TNh^3=C_TTh^2$. The result is finite-time weak order two and says nothing about invariant bias. [A1, F2, F3, F5, F6, step 1.1, step 2.1, algebra] ∎
