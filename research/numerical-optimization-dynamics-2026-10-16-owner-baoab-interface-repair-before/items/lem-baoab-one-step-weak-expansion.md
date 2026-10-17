---
id: lem-baoab-one-step-weak-expansion
kind: lemma
title: "Symmetric BAOAB one-step weak expansion"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - alg-baoab-underdamped-langevin-splitting
  - lem-exact-ornstein-uhlenbeck-momentum-substep
  - def-axiom-of-choice
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - def-ito-sde-and-strong-solution
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-fatou-lemma
proof_strategy: direct
axiom_base: Full AC
axiom_use: "AC is inherited through the global SDE solution and Itô interfaces; the finite semigroup composition is deterministic algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Benedict Leimkuhler and Charles Matthews, Rational Construction of Stochastic Numerical Methods for Molecular Sampling, §§2–3 and Appendix"
      url: "https://arxiv.org/pdf/1203.5428"
    - title: "Adam Telatovich and Xiantao Li, Strong Convergence Analysis for Numerical Methods for the Langevin Dynamics Model and Higher-order Operator-splitting Schemes, §3.1 and Appendix §8"
      url: "https://arxiv.org/pdf/1706.04237v2"
    - title: "Jean-Noël Roux, Stéphane Rodts, and Gabriel Stoltz, Introduction à la physique statistique et à la physique quantique, §5.2.1"
      url: "https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf"
---

## Statement

Assume the underdamped model in [[def-underdamped-langevin-equation-and-canonical-gibbs-density]], with $V\in C^8$, $\nabla V$ of linear growth, and $D^jV$ globally bounded for $2\le j\le8$. Let $\phi\in C_P^6(\mathbb R^{2d})$ as defined in that item, and let $K_h$ be the one-step BAOAB transition operator and $P_h$ the exact SDE transition operator. For $0<h\le1$ there are $C,r<\infty$ such that
$$|K_h\phi(z)-P_h\phi(z)|\le Ch^3(1+|z|^r)\qquad(z\in\mathbb R^{2d}).$$
The exponent $r$ may depend on the polynomial-growth bounds for $\phi$ and its derivatives. This is a finite-time local weak estimate; it is not an invariant-measure bias statement.

## Facts & Assumptions

**Given:** AC, the smoothness and growth conditions in the statement, $0<h\le1$, and the BAOAB and exact SDE transition operators.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]]: the total generator is $L=A+B+O$, where $A=(M^{-1}p)\cdot\nabla_q$, $B=-\nabla V(q)\cdot\nabla_p$, and $O=-\gamma p\cdot\nabla_p+\gamma\beta^{-1}\operatorname{tr}(M D^2_{pp})$.

[F2] [[alg-baoab-underdamped-langevin-splitting]] and [[lem-exact-ornstein-uhlenbeck-momentum-substep]]: the one-step operator is the palindromic composition $K_h=P^B_{h/2}P^A_{h/2}P^O_hP^A_{h/2}P^B_{h/2}$, where each factor is the exact subflow transition.

[F3] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: repeated It\^o/Dynkin expansion of a smooth test function gives the exact SDE transition expansion through the $L^2$ term, with the integral remainder controlled by $L^3\phi$.

[F4] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: the globally Lipschitz, linearly growing drift gives a global strong solution and finite moments on bounded time intervals.

[F5] [[thm-fatou-lemma]]: the integral of a nonnegative pointwise limit is at most the limit inferior of the integrals.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F3]–[F5]; no further choice enters the operator expansion.

## Proof

**Given:** The assumptions above.

1.1 For each $C\in\{A,B,O\}$, let $P_s^C$ be the exact subflow operator. Its integral identity is $P_s^C\psi-\psi=\int_0^sP_u^C(C\psi)du$; for $A,B$ this follows by differentiating the explicit deterministic flow, and for $O$ it follows by taking expectations in [F3]. Applying the identity three times gives [A1, F1, F2, F3, F4, given, algebra]
$$P_s^C\psi=\psi+sC\psi+\frac{s^2}{2}C^2\psi+R_C(s),\qquad |R_C(s,z)|\le Cs^3(1+|z|^r),\quad0\le s\le1.$$
The remainder is $\int_0^s\frac{(s-u)^2}{2}P_u^C(C^3\psi)du$. The derivatives through order six and coefficient bounds make $C^3\psi$ polynomially bounded; exact A and B flows have linear growth on $[0,1]$, while the OU flow has finite Gaussian moments bounded by $C(1+|z|^r)$. Thus the remainder bound holds for $\psi=\phi$ and for intermediate compositions. [A1, F1, F2, F3, F4, given, algebra]

1.2 For the exact SDE semigroup, [F3] and its integral form give $P_h\phi=\phi+\int_0^hP_sL\phi\,ds$. Applying the identity to $L\phi$ and $L^2\phi$ gives
$$P_h\phi=\phi+hL\phi+\tfrac12h^2L^2\phi+\int_0^h\int_0^s\int_0^u P_vL^3\phi\,dv\,du\,ds.$$
It remains to bound this displayed remainder by $Ch^3(1+|z|^r)$. For this bound choose an integer $m$ larger than the polynomial growth degree of $L^3\phi$ and set $W_m(z)=(1+|z|^2)^m$. Linear growth of $b$ and constant $G$ imply $|LW_m|\le C_mW_m$. Itô’s formula [F3] on the solution stopped at radius $R$, followed by Gronwall and Fatou as $R\to\infty$, gives $\mathbb EW_m(Z_u)\le e^{C_mu}W_m(z)$ for $u\le1$. Hence $|P_vL^3\phi(z)|\le C(1+|z|^r)$ uniformly on $[0,1]$, and the three integral identities yield $P_h\phi=\phi+hL\phi+\tfrac12h^2L^2\phi+O(h^3(1+|z|^r))$. [A1, F3, F4, F5, given]

2.1 Multiply the five subflow expansions from step 1.1 in the palindromic order from [F2]. The coefficient of $h$ is $A+B+O=L$. The coefficient of $h^2$ is [F1, F2, step 1.1, algebra]
$$\frac12(A^2+B^2+O^2)+\frac12(AB+BA+AO+OA+BO+OB)=\frac12L^2.$$
The pure-square coefficients come from adding the two half-step contributions of A and B and the full O contribution. Each ordered product for a pair of distinct generators has coefficient $1/2$ because the mirrored factor positions contribute equally. Every omitted term has total degree at least three in the substep sizes; step 1.1 bounds their expectations by $Ch^3(1+|z|^r)$. Hence $K_h\phi=\phi+hL\phi+\tfrac12h^2L^2\phi+O(h^3(1+|z|^r))$. [F1, F2, step 1.1, algebra]

3.1 Steps 1.2 and 2.1 have identical terms through order $h^2$. Subtracting gives $|K_h\phi(z)-P_h\phi(z)|\le Ch^3(1+|z|^r)$ for $0<h\le1$. This is a finite-time local estimate and makes no invariant-law claim. [step 1.2, step 2.1] ∎
