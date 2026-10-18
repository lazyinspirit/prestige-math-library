---
id: ex-moyal-star-product-for-a-constant-poisson-tensor
kind: example
title: The Moyal product for a constant Poisson tensor
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-general-poisson-bivector-and-bracket
  - prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors
  - def-formal-associative-deformation-of-a-commutative-algebra
  - def-formal-star-product-on-a-poisson-manifold
  - def-poisson-bracket-on-a-symplectic-manifold
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - def-symplectic-form-and-symplectic-manifold
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.1.2, Definition 4.1.8 and Proposition 4.1.10 (PDF pp. 85–87)
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.4.1, Moyal product (PDF p. 3)
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Let $\Pi=(\Pi^{ij})$ be any constant real skew-symmetric matrix on
$\mathbb R^d$, with the Poisson bracket
$\{f,g\}_\Pi=\sum_{i,j}\Pi^{ij}(\partial_i f)(\partial_j g)$. Define
$$P_{12}:=\sum_{i,j}\Pi^{ij}\partial_{x^i}\otimes\partial_{y^j},\qquad f\star g:=\left.\mu\,\exp\!\left(\frac{\hbar}{2}P_{12}\right) (f(x)\otimes g(y))\right|_{y=x},$$
where $\mu$ is pointwise multiplication and the exponential means the
formal series $\sum_{r\geq0}(\hbar P_{12}/2)^r/r!$. No analytic convergence
is used. This is a differential star product quantizing $\Pi$, for
every rank of $\Pi$, including the zero and other degenerate cases.

For the standard symplectic form $\omega=\sum_i dq^i\wedge dp_i$, the
canonical bivector $\Pi=\sum_i\partial_{q^i}\wedge\partial_{p_i}$ has
$\{f,g\}=\sum_i(f_{q^i}g_{p_i}-f_{p_i}g_{q^i})$. The computation below
checks that this is the library's convention
$\iota_{X_H}\omega=dH$, $\{F,G\}=X_G(F)$, not its negative.

## Facts & Assumptions

**Given:** A constant real skew matrix $\Pi$, smooth functions on
$\mathbb R^d$, and the canonical symplectic plane when checking the sign
convention.

[F1] [[def-general-poisson-bivector-and-bracket]]: the bracket associated to
a bivector is $\Pi^{ij}(\partial_i f)(\partial_j g)$.

[F2] [[prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors]]:
the Jacobiator coefficients are $J^{ijk}=\Pi^{i\ell}\partial_\ell\Pi^{jk}
+\Pi^{j\ell}\partial_\ell\Pi^{ki}+\Pi^{k\ell}\partial_\ell\Pi^{ij}$.

[F3] [[def-formal-associative-deformation-of-a-commutative-algebra]]:
coefficientwise products of formal series use finite sums at each order.

[F4] [[def-formal-star-product-on-a-poisson-manifold]]: the unit is preserved,
each coefficient is bidifferential, and the first-order skew part equals the
chosen Poisson bracket.

[F5] [[def-hamiltonian-vector-field-and-hamiltonian-function]]:
$\iota_{X_H}\omega=dH$.

[F6] [[def-poisson-bracket-on-a-symplectic-manifold]]:
$\{F,G\}=X_G(F)$ in the library convention.

[F7] [[def-symplectic-form-and-symplectic-manifold]]: a symplectic form is
closed and nondegenerate at each point.

## Verification

1.1 Since $\Pi^{ij}$ is constant, every derivative in [F2] is zero, so its Jacobiator vanishes. Thus [F1] gives a Poisson bracket for every constant skew matrix, with no rank assumption. [given, F1, F2, algebra]

1.2 On $\mathbb R^{2n}$, $\omega=\sum_i dq^i\wedge dp_i$ is closed because $$d\omega=\sum_i d(dq^i\wedge dp_i)=\sum_i(d^2q^i\wedge dp_i-dq^i\wedge d^2p_i)=0.$$ For $X=\sum_i(a_i\partial_{q^i}+b_i\partial_{p_i})$, $\iota_X\omega=\sum_i(a_i\,dp_i-b_i\,dq^i)$; if this vanishes then every $a_i=b_i=0$, so it is pointwise nondegenerate and is symplectic by [F7]. Equating $\iota_{X_H}\omega$ with $dH=\sum_i(H_{q^i}\,dq^i+H_{p_i}\,dp_i)$, [F5] gives $X_H=\sum_i(H_{p_i}\partial_{q^i}-H_{q^i}\partial_{p_i})$. Therefore $X_G(F)=\sum_i(F_{q^i}G_{p_i}-F_{p_i}G_{q^i})$ by [F6], exactly the bracket of [F1] for $\Pi=\sum_i\partial_{q^i}\wedge\partial_{p_i}$. [given, F1, F5, F6, F7, algebra]

1.3 The zeroth exponential term is $fg$, so $B_0=m$. For $r\geq1$, expanding the formal exponential gives $$B_r(f,g)=\frac{1}{2^r r!}\sum_{i_1,j_1,\ldots,i_r,j_r} \Pi^{i_1j_1}\cdots\Pi^{i_rj_r} (\partial_{i_1}\cdots\partial_{i_r}f) (\partial_{j_1}\cdots\partial_{j_r}g).$$ Each coefficient is a finite bidifferential expression. If either input is $1$, every positive-order term vanishes, so the unit is preserved; the series is well-defined coefficientwise by [F3]. [given, F3, F4, construct]

2.1 On three independent tensor factors define $P_{ab}=\sum_{i,j}\Pi^{ij}\partial_{x_a^i}\otimes\partial_{x_b^j}$ for $1\leq a<b\leq3$, with each operator acting as the identity on the remaining factor, and define $\mu_3(f\otimes g\otimes h)=fgh$. These operators commute because they are sums of products of commuting partial derivatives with constant coefficients. The product rule says that differentiation of the first composite factor is $\partial^{(1)}+\partial^{(2)}$, so $$(f\star g)\star h= \mu_3 e^{\frac{\hbar}{2}(P_{13}+P_{23})} e^{\frac{\hbar}{2}P_{12}}(f\otimes g\otimes h),$$ while differentiating the second composite factor gives $$f\star(g\star h)= \mu_3 e^{\frac{\hbar}{2}(P_{12}+P_{13})} e^{\frac{\hbar}{2}P_{23}}(f\otimes g\otimes h).$$ For commuting operators $U,V$, the coefficient of $\hbar^n$ in $e^{\hbar U/2}e^{\hbar V/2}$ is $2^{-n}\sum_{r+s=n}U^rV^s/(r!s!)=2^{-n}(U+V)^n/n!$ by the binomial theorem. This is a finite identity at each order, so it applies coefficientwise to these formal exponentials. Commutativity of the three operators makes both expressions $\mu_3e^{\frac{\hbar}{2}(P_{12}+P_{13}+P_{23})} (f\otimes g\otimes h)$, proving associativity coefficientwise. [given, F3, step 1.3, construct, algebra]

3.1 The first coefficient is $B_1(f,g)=\tfrac12\sum_{i,j}\Pi^{ij}f_i g_j$. Skew-symmetry of $\Pi$ gives $B_1(f,g)-B_1(g,f)=\sum_{i,j}\Pi^{ij}f_i g_j=\{f,g\}_\Pi$. Hence the product in this example satisfies the first-order normalization in [F4]. When $\Pi=0$, every $P_{ab}=0$ and the product is the ordinary commutative product; no rank or nondegeneracy assumption is needed. [F1, F4, step 1.3, algebra] ∎
