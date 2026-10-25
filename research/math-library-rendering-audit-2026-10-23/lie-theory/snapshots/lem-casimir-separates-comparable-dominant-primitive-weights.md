---
id: lem-casimir-separates-comparable-dominant-primitive-weights
kind: lemma
title: Casimir separates comparable dominant primitive weights
status: published
origin: pipeline
deps: [thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights, def-generalized-casimir-on-restricted-kac-moody-modules, def-kac-moody-category-o]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For a finite symmetrizable GCM, fix the invariant form, positive symmetrizer $D=\operatorname{diag}(d_i)$ and $\rho(h_i)=1$. Every integrable $V\in\mathcal O$ is the algebraic direct sum of its Casimir generalized eigenspaces
$$V^{(a)}=\{v\in V:(\Omega-a)^Nv=0\text{ for some }N\geq1\},\qquad V=\bigoplus_{a\in\mathbb C}V^{(a)}.$$
These are integrable $\mathcal O$ submodules. In each summand the primitive weights are dominant integral and form an antichain in the positive-root order. The argument is choice-free; it does not assume a positive-definite full Cartan form or a factorization theorem for arbitrary complex polynomials.

## Facts & Assumptions

**Given:** The stated symmetrizable data and integrable $\mathcal O$ module.

[F1] The restricted Casimir is central and acts on a highest vector of weight $\lambda$ by $c(\lambda)=(\lambda+2\rho,\lambda)$ ([[thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules]]).

[F2] The invariant form gives $\nu(h_i)=\alpha_i/d_i$ with $d_i>0$ ([[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

[F3] Primitive weights of an integrable $\mathcal O$ module are dominant integral ([[lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights]]).

[F4] The Casimir formula is pointwise finite, with $\rho(h_i)=1$ and positive-then-negative root factors $2\sum y_{\alpha,s}x_{\alpha,s}$ ([[def-generalized-casimir-on-restricted-kac-moody-modules]]).

[F5] Finite upper support sets make $\mathcal O$ modules restricted; submodules and quotients inherit the weight decomposition and $\mathcal O$ bounds ([[def-kac-moody-category-o]]).

## Proof

1.1 The formula F4 on $v\in V_\mu$ gives $(\Omega-c(\mu))v=2\sum_{\alpha>0,s}y_{\alpha,s}x_{\alpha,s}v$. It preserves the weight and the sum is finite by F5. Every nonzero $x_{\alpha,s}v$ lies at a strictly higher support weight. Induct on the finite number of support weights at or above $\mu$. At a maximal weight the displayed right side is zero, so $t-c(\mu)$ annihilates $v$ under $t=\Omega$. Inductively choose for each of the finitely many nonzero vectors on the right an annihilating polynomial that is a product of linear factors. Their product $q$ annihilates the right side because F1 commutes $\Omega$ through each $y_{\alpha,s}$. Thus $q(\Omega)(\Omega-c(\mu))v=0$. A general vector has finitely many weight components; the product of their annihilators works for it. Zero vectors allow the constant polynomial $1$. Therefore every vector has an annihilator already split into linear factors, without using the fundamental theorem of algebra. [F1, F4, F5, given]

2.1 Let $P(t)=\prod_{a\in E}(t-a)^{r_a}$ annihilate $v$, with distinct finite $E$ and $r_a\geq1$. Put $p_a=(t-a)^{r_a}$, $Q_a=P/p_a$, and $R_a=Q_a/Q_a(a)-1$. Since $Q_a(a)\ne0$ and $R_a$ is divisible by $t-a$, the polynomial $E_a=(Q_a/Q_a(a))\sum_{j=0}^{r_a-1}(-R_a)^j$ is $1$ modulo $p_a$ and zero modulo each $p_b$ for $b\ne a$. These congruences imply $\sum_a E_a-1$ is divisible by $P$: powers of distinct linear factors are coprime, as the same finite inverse construction shows, so divisibility by each factor can be combined successively. Set $v_a=E_a(\Omega)v$. Then $p_a E_a$ is divisible by $P$, hence $v_a\in V^{(a)}$, and $v=\sum_a v_a$. If a finite sum of generalized eigenvectors at distinct eigenvalues is zero, take a product with exponents large enough to annihilate every summand and apply its $E_a(\Omega)$ to that relation. It extracts precisely the $a$ summand, proving uniqueness and that the sum of all $V^{(a)}$ is direct. Uniqueness makes the components independent of the chosen annihilator. [step 1.1]

3.1 Each $V^{(a)}$ is a linear subspace: a maximum of two exponents annihilates a sum. Centrality F1 makes it stable under every generator. By F5 it is in $\mathcal O$ with its induced weights, and simple local nilpotence restricts from $V$. The same Casimir formula preserves every submodule and induces the identical operator on a quotient, because its terms are pointwise finite algebra actions. If a primitive vector of weight $\lambda$ in $V^{(a)}$ has nonzero highest class $\bar v$ in a quotient, F1 gives $\Omega\bar v=c(\lambda)\bar v$, while some power of $\Omega-a$ kills it. Therefore $(c(\lambda)-a)^N\bar v=0$ forces $c(\lambda)=a$. F3 gives dominant integrality of this weight. [F1, F3, F4, F5, step 2.1]

4.1 If two such dominant primitive weights satisfy $\lambda>\mu$, write $\lambda-\mu=\sum_i n_i\alpha_i$ with nonnegative integers $n_i$, at least one positive. Symmetry of the form and F2 give $$c(\lambda)-c(\mu)=(\lambda+\mu+2\rho,\lambda-\mu)=\sum_i n_i d_i\bigl(\lambda(h_i)+\mu(h_i)+2\bigr)>0.$$ Every summand is a nonnegative real number and at least one is strictly positive, although the separate Casimir eigenvalues may be complex. This contradicts their common value $a$ from 3.1. Hence the primitive weights form an antichain. For equal weights the difference is zero; zero simple labels still leave the positive $2d_i$ term. The zero module has the empty direct sum, a single eigenvalue requires only one projector, and all choices of annihilators or bounds in 1.1–2.1 are finite. No AC or positivity of the full bilinear form was used. [F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
