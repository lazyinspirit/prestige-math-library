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
The exponent $r$ may depend on the polynomial-growth bounds for $\phi$ and its derivatives. If $\phi\in C_b^6$, one may take $r=3$; the constant is uniform over test families with a common bound on all derivatives of orders zero through six. This is a finite-time local weak estimate; it is not an invariant-measure bias statement.

## Facts & Assumptions

**Given:** AC, the smoothness and growth conditions in the statement, $0<h\le1$, and the BAOAB and exact SDE transition operators.

[F1] [[def-underdamped-langevin-equation-and-canonical-gibbs-density]] and [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: writing $F=-\nabla V$ and $S=\sqrt{2\gamma\beta^{-1}}M^{1/2}$, the SDE has drift $b(q,p)=(M^{-1}p,F(q)-\gamma p)$ and diffusion matrix $G=(0,S)^T$. It\^o's formula therefore gives its generator
$$L\psi=b\cdot\nabla\psi+\tfrac12(GG^T):D^2\psi=(M^{-1}p)\cdot\nabla_q\psi+(F(q)-\gamma p)\cdot\nabla_p\psi+\gamma\beta^{-1}\operatorname{tr}(M D^2_{pp}\psi).$$
Define $A\psi=(M^{-1}p)\cdot\nabla_q\psi$, $B\psi=F(q)\cdot\nabla_p\psi$, and $O\psi=-\gamma p\cdot\nabla_p\psi+\gamma\beta^{-1}\operatorname{tr}(M D^2_{pp}\psi)$. The deterministic A and B subflows have these first-order generators by the chain rule; the O subflow has generator O by It\^o's formula applied to the OU equation. Thus $L=A+B+O$ under the displayed model convention.

[F2] [[alg-baoab-underdamped-langevin-splitting]] and [[lem-exact-ornstein-uhlenbeck-momentum-substep]]: for $s\ge0$ and a test function $\psi$, define the exact subflow transition operators by
$$P_s^A\psi(q,p)=\psi(q+sM^{-1}p,p),\qquad P_s^B\psi(q,p)=\psi(q,p+sF(q)),$$
$$P_s^O\psi(q,p)=\mathbb E\,\psi\!\left(q,e^{-\gamma s}p+\sqrt{\beta^{-1}(1-e^{-2\gamma s})}\,M^{1/2}\xi\right),\quad \xi\sim N_d(0,I_d).$$
The A and B formulas are their deterministic subflow maps, and the O formula is the exact OU transition. Also write $P_s\psi(z)=\mathbb E_z\psi(Q_s,P_s)$ for the exact SDE transition. Operator products are in state-update order: the leftmost transition is applied first. Hence the BAOAB one-step operator is the palindromic composition $K_h=P^B_{h/2}P^A_{h/2}P^O_hP^A_{h/2}P^B_{h/2}$.

[F3] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: It\^o's formula holds for $C^2$ spatial test functions of the Brownian It\^o process, with localized stochastic integrals; expectation and repeated integral identities require the moment bounds established below.

[F4] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]: the globally Lipschitz, linearly growing drift gives a global strong solution with a finite second path moment; higher polynomial moments from deterministic starting states are proved below.

[F5] [[thm-fatou-lemma]]: the integral of a nonnegative pointwise limit is at most the limit inferior of the integrals.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F3]–[F5]; no further choice enters the operator expansion.

## Proof

**Given:** The assumptions above.

1.1 Choose an integer $p\ge0$ and $K<\infty$ such that $|D^j\phi(z)|\le K(1+|z|^p)$ for $0\le j\le6$, and put $W_r(z)=(1+|z|^2)^{r/2}$. For a bounded $C_b^6$ family choose $p=0$ and a common $K$. The explicit A and B maps are $(q,p_0)\mapsto(q+sM^{-1}p_0,p_0)$ and $(q,p_0)\mapsto(q,p_0+sF(q))$, where $F=-\nabla V$. They have linear growth and uniformly bounded spatial derivatives of orders one through six for $0\le s\le1$, because $D^jF$ is bounded for $1\le j\le6$. The O map is affine with centered Gaussian noise of uniformly bounded moments of every fixed order by [F2]. Differentiating these explicit maps and taking Gaussian expectations therefore shows that each $P_s^C$, $C\in\{A,B,O\}$, preserves bounds $|D^j\psi(z)|\le K_0W_r(z)$ through any stated order $k\le6$, uniformly for $s\le1$. Each generator maps such bounds through order $k$ to bounds through order $k-2$ with weight $W_{r+1}$: its drift coefficients grow at most linearly, their positive-order derivatives are bounded, and its second-order coefficients are constant. Thus a composition with at most three generator applications, even with subflow semigroups between them, uses at most six test derivatives and is bounded by $CW_{p+3}(z)$. [A1, F1, F2, F3, given, algebra]

2.1 For any $r\ge0$, direct differentiation of $W_r$ and the linear-growth drift and constant diffusion give $|LW_r|\le C_rW_r$. Itô's formula [F3] stopped on a ball, the integral Gronwall estimate, and Fatou [F5] as the stopping radius increases give $P_uW_r(z)\le C_rW_r(z)$ for $0\le u\le1$. These are estimates from a fixed deterministic starting point; higher weights can be used to justify the localization limits. In particular, $|L^3\phi(z)|\le CW_{p+3}(z)$ by the same coefficient and derivative count as in step 1.1, and $|P_uL^3\phi(z)|\le CW_{p+3}(z)$. For the bounded-test branch this is the cubic weight $W_3$, using the same Lyapunov function with exponent $3/2$, not a higher initial-moment assumption. [A1, F1, F3, F4, F5, given, step 1.1, algebra]

2.2 Put $(C_1,\ldots,C_5)=(B,A,O,A,B)$, $(c_1,\ldots,c_5)=(1/2,1/2,1,1/2,1/2)$, and $\Psi(u,z)=(P_{c_1u}^{C_1}\cdots P_{c_5u}^{C_5}\phi)(z)$. The subflow integral identity $P_s^C\psi-\psi=\int_0^sP_v^C C\psi\,dv$ follows from the explicit A/B maps and Itô's formula for O. It and the weighted derivative bounds in step 1.1 justify differentiating this five-factor product three times, with right derivatives at zero. Explicitly, its third derivative is the finite ordered sum. [F1, F2, F3, given, step 1.1, algebra]
$$\partial_u^3\Psi(u)=\sum_{\nu_1+\cdots+\nu_5=3}\frac{3!\prod_{i=1}^5c_i^{\nu_i}}{\prod_{i=1}^5\nu_i!}\bigl(P_{c_1u}^{C_1}C_1^{\nu_1}\cdots P_{c_5u}^{C_5}C_5^{\nu_5}\phi\bigr).$$
Every summand has total generator length three, so step 1.1 bounds it by $CW_{p+3}(z)$; no term with more than three generators is formed. The first derivative at zero is $L\phi$. Grouping the second derivative at zero gives the pure squares $A^2+B^2+O^2$ and each ordered mixed pair $AB,BA,AO,OA,BO,OB$ once, hence $\partial_u^2\Psi(0)=L^2\phi$. Taylor's formula with its third-derivative integral remainder now gives
$$K_h\phi=\phi+hL\phi+\tfrac12h^2L^2\phi+\tfrac12\int_0^h(h-u)^2\partial_u^3\Psi(u)\,du,$$
whose remainder is bounded by $Ch^3W_{p+3}(z)$. This is a second-order Taylor expansion of the product itself, rather than multiplication of five truncated polynomials with higher differential cross-products. [F1, F2, F3, given, step 1.1, algebra]

3.1 Applying the localized Itô integral identity successively to $\phi$, $L\phi$ and $L^2\phi$ in which the three test functions have respectively six, four and two continuous spatial derivatives, gives the following identity. [A1, F3, F4, F5, given, step 1.1, step 2.1, algebra]
$$P_h\phi=\phi+hL\phi+\tfrac12h^2L^2\phi+\tfrac12\int_0^h(h-u)^2P_uL^3\phi\,du.$$
The polynomial bounds from steps 1.1 and 2.1 justify taking expectations and removing the stopping times in these three identities. Step 2.1 bounds the remainder by $Ch^3W_{p+3}(z)$. [A1, F3, F4, F5, given, step 1.1, step 2.1, algebra]

4.1 Subtracting steps 2.2 and 3.1 cancels all terms through order two and gives $|K_h\phi(z)-P_h\phi(z)|\le Ch^3W_{p+3}(z)\le C'h^3(1+|z|^{p+3})$. This proves the original polynomial-growth claim with some finite exponent. When the test family has a common $C_b^6$ bound, $p=0$ in every preceding estimate, so the same argument proves the uniform cubic-growth bound $Ch^3(1+|z|^3)$. Neither conclusion is an invariant-measure statement. [step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
