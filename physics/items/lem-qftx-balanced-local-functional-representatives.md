---
id: lem-qftx-balanced-local-functional-representatives
kind: lemma
title: Balanced jets give unique local functional representatives
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qftx-off-shell-local-polynomial-functionals
  - thm-fourier-inversion-on-schwartz-space
  - def-countable-choice
dependency_roles:
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael Duetsch and Klaus Fredenhagen, Causal perturbation theory in terms of retarded products, and a proof of the Action Ward Identity
      url: https://arxiv.org/pdf/hep-th/0403213
      locator: Section 3.2, printed pp. 24–25, equations (3.3)–(3.4), Proposition 2 and the following derivative-compatible extension construction; the uniqueness and support arguments are supplied locally.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Set $\eta=\operatorname{diag}(-1,1,1,1)$ and let $SO^+(1,3)$ consist of the matrices $\Lambda\in GL_4(\mathbb R)$ satisfying $\Lambda^{\mathsf T}\eta\Lambda=\eta$, $\det\Lambda=1$, and preserving the future cone $\{v\in\mathbb R^4:v^0\ge|\mathbf v|\}$. For $a\in\mathbb R^4$ and $\Lambda\in SO^+(1,3)$, let $\gamma$ be the affine map $x\mapsto\Lambda x+a$ and define
$$(\gamma\cdot\phi)(x)=\phi(\Lambda^{-1}(x-a)),\qquad (\gamma\cdot F)(\phi)=F(\gamma^{-1}\cdot\phi).$$
Complex conjugation is $F^*(\phi)=\overline{F(\phi)}$.

For field degree $r\ge1$, let $p_1,\ldots,p_r\in\mathbb R^4$ be formal commuting derivative variables, put $P=\sum_a p_a$ and $q_a=p_a-P/r$, and let $\mathcal B_r$ be the vector space of permutation-invariant polynomials in the $q_a$, subject to $\sum_aq_a=0$. A balanced degree-$r$ jet polynomial is
$$B_b(\phi)(x)=\left.b(\partial_{x_1},\ldots,\partial_{x_r})\prod_{a=1}^r\phi(x_a)\right|_{x_1=\cdots=x_r=x},\qquad b\in\mathcal B_r.$$
Thus only relative derivative combinations occur in $b$. Choose a real homogeneous basis of each finite-degree part of $\mathcal B_r$. Every off-shell compactly supported local polynomial functional has a unique expression
$$F(\phi)=c+\sum_{r\ge1}\sum_b\int f_{r,b}(x)B_b(\phi)(x)\,d^4x,$$
with $c\in\mathbb C$, $f_{r,b}\in C_c^\infty(\mathbb R^4;\mathbb C)$, and only finitely many nonzero coefficients. The union of the supports of these coefficient functions equals the functional support, apart from the constant $c$, whose support is empty. With each $p_a$ viewed as a column of coordinate derivative components, the induced Lorentz substitution is $p_a\mapsto\Lambda^{\mathsf T}p_a$, so $P$ and all $q_a$ transform by the same linear map. The balanced decomposition is equivariant for the translation/Lorentz action and complex conjugation specified above.

Distribution-valued multilinear coefficients prescribed linearly on balanced labels extend consistently to all polynomial jet labels by imposing, in each vertex entry,
$$K(\ldots,\partial_\mu A,\ldots)=\partial_{x_i^\mu}K(\ldots,A,\ldots).$$
After smearing, integration by parts therefore makes the resulting maps independent of the chosen local density presentation. Differentiation adds only a finite derivative order to any finite scaling upper bound.

## Statement references

[[def-qftx-off-shell-local-polynomial-functionals]]

[[thm-fourier-inversion-on-schwartz-space]]

## Facts & Assumptions

**Given:** The off-shell polynomial class and the derivative-variable conventions in the Statement.

[A1] Assume Countable Choice [[def-countable-choice]] for the Fourier inversion supplier.

[F1] [[def-qftx-off-shell-local-polynomial-functionals]] defines actual smooth off-shell configurations, finite polynomial jets, compact coefficient supports, functional support and intrinsic variational kernels.

[F2] [[thm-fourier-inversion-on-schwartz-space]] gives injectivity of the Fourier transform on compact smooth coefficient functions under [A1].

## Proof

**Given:** [A1], [F1]–[F2] and the Statement's conventions.

1.1 Polarize each homogeneous field-degree-$r$ jet polynomial into $r$ field slots. Commutativity of the scalar fields identifies it with a polynomial in the formal derivative variables $p_a$, invariant under slot permutations. The invertible linear change $p_a=q_a+P/r$ identifies the full polynomial algebra with $\mathbb C[P]\otimes\mathbb C[q_1,\ldots,q_r]/(\sum_aq_a)$. Slot permutations fix $P$ and act only on the relative factor. Expanding in the independent monomials of $P$, invariance holds if and only if every relative coefficient is invariant. Thus the invariant space is exactly $\mathbb C[P]\otimes\mathcal B_r$. In each finite degree choose a basis by ordinary finite Gaussian elimination on the real coefficient polynomials; the monomial ordering gives compatible choices across degrees. The Leibniz rule identifies multiplication by $P_\mu$ with the total derivative $\partial_\mu$ of the local field polynomial. This is a direct tensor decomposition, so has no hidden relations between total and balanced derivatives. [F1, algebra, construct]

2.1 Expand a density using step 1.1 as a finite sum $p(\partial)B_b$. In its integral against $f$, move $p(\partial)$ onto the compact coefficient by integration by parts, obtaining $p(-\partial)f$ multiplying $B_b$. This gives existence of the displayed representation and preserves compact support. Degree zero gives the scalar $c=F(0)$ and is separated from the positive field degrees. To prove uniqueness, suppose a balanced expression represents zero. Separate its field degrees by replacing $\phi$ by $t\phi$, polarize, and evaluate its $r$ slots on the smooth exponential fields $e^{2\pi i k_a\cdot x}$; complex exponentials are permitted by complex multilinear extension from real configurations. The resulting identity is a finite sum of $\widehat f_{r,b}(-\sum_a k_a)$ times the balanced polynomial $b(2\pi ik_1,\ldots,2\pi ik_r)$. For fixed total momentum, vary freely the relative momenta. Independence of the basis polynomials on $\sum_aq_a=0$ makes every coefficient Fourier transform zero at that total momentum. Since that momentum is arbitrary, [F2] gives every $f_{r,b}=0$; also $c=0$. [A1, F1, F2, step 1.1, algebra]

3.1 The same uniqueness is local. In center and relative coordinates for the polarized variational kernel on the thin diagonal, balanced differential operators differentiate only the relative delta variables; their coefficients are the $f_{r,b}$ in the center variable, up to fixed nonzero coordinate constants. Test with a center test times a relative monomial times a cutoff equal to one near the relative origin. Starting at the highest relative order and descending isolates every independent relative delta-jet coefficient. Thus vanishing of the kernel over an open center set forces each $f_{r,b}$ to vanish there. If $F$ is unchanged by all variations supported in an open set $U$, its polarized kernels vanish where any one field slot lies in $U$; near their thin diagonal this is precisely the preceding situation. Conversely, if every coefficient vanishes on $U$, no variation supported in $U$ changes $F$. This proves equality with the functional support. Under the action defined in the Statement, a Lorentz transformation substitutes $p_a\mapsto\Lambda^{\mathsf T}p_a$ and transforms each coefficient by $f(x)\mapsto f(\Lambda^{-1}(x-a))$; $\det\Lambda=1$ preserves $d^4x$. Thus $P$ and all $q_a$ transform by the same linear map and the tensor decomposition is preserved. Translations act on coefficients by the same formula with $\Lambda=I$, and, because the chosen basis is real, complex conjugation sends each coefficient to its complex conjugate. Hence the decomposition is equivariant as stated. [F1, step 1.1, step 2.1, algebra]

4.1 For a general polynomial label write its unique tensor decomposition as $\sum_{\beta,b}c_{\beta,b}\partial^\beta B_b$, and define its coefficient by $\sum_{\beta,b}c_{\beta,b}\partial_{x_i}^\beta K(\ldots,B_b,\ldots)$, independently in every entry. Commutativity of coordinate derivatives and the direct decomposition in step 1.1 make this consistent, linear, and the unique extension satisfying the displayed derivative identity. Smearing and integrating by parts gives exactly the coefficient normal form of step 2.1, so equivalent functional presentations yield the same map. The construction respects the equivariance and support statements of step 3.1. Finally, dilation of a distributional derivative gives $(\partial^\beta T)_\rho=\rho^{-|\beta|}\partial^\beta T_\rho$, so the added derivative increases a scaling upper bound by at most $|\beta|$. All sums and derivative orders here are finite. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
