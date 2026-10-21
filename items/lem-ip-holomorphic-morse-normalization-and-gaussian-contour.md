---
id: lem-ip-holomorphic-morse-normalization-and-gaussian-contour
kind: lemma
title: "Holomorphic Morse normalization and Gaussian contour"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-real-analytic-germ-in-several-variables
  - def-multivariable-power-series
  - thm-power-series-define-holomorphic-functions-in-several-variables
  - thm-holomorphic-inverse-function-theorem-several-variables
  - thm-identity-theorem-in-several-complex-variables
  - thm-dominated-convergence
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-nonnegative-improper-multiple-integral-by-exhaustion
  - thm-gaussian-integral
  - thm-substitution-for-improper-integrals
  - thm-riemann-fubini-on-product-rectangles
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§2, Lemma 2.7 and Theorem 2.8, printed pp. 15–18."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "§5, Lemmas 5.8–5.11, printed pp. 31–35."
proof_strategy: direct
---

## Statement

Let $\phi$ be holomorphic on a neighborhood of $0\in\mathbb C^n$, with $d\phi(0)=0$ and complex Hessian $H=\phi''(0)$ invertible. There is a local biholomorphic coordinate map $w=\Psi(z)$ with $\Psi(0)=0$ such that
$$
\phi(z)=\phi(0)+\tfrac12\sum_{j=1}^n w_j^2.
$$
Its linear part satisfies $(\det D\Psi(0))^2=\det H$. For a continuous parameter family of invertible Hessians $H(p)$, near any fixed parameter $p_0$ the determinant remains in a disc avoiding $0$; choosing one square root at $p_0$ therefore fixes a continuous branch on that neighborhood. If $\operatorname{Re}H$ is positive definite, then
$$
\int_{\mathbb R^n}e^{-\lambda x^THx/2}\,dx =(2\pi/\lambda)^{n/2}(\det H)^{-1/2},\qquad \lambda>0,
$$
with the integral interpreted as an absolutely convergent improper integral and the branch analytically continued from real positive-definite matrices. Finally, deforming a holomorphic contour preserves the integral of a holomorphic top-degree form when the contours are homologous through a region of holomorphy and the swept boundary integrals tend to zero.

## Statement references

[[def-real-analytic-germ-in-several-variables|Analytic complexification]]

[[def-multivariable-power-series|Convergent multi-index series]]

[[thm-power-series-define-holomorphic-functions-in-several-variables|Holomorphic power-series sums]]

[[thm-holomorphic-inverse-function-theorem-several-variables|Local holomorphic inverse]]

[[thm-identity-theorem-in-several-complex-variables|Holomorphic identity theorem]]

[[thm-stokes-theorem-for-smooth-singular-chains|Stokes theorem]]

## Facts & Assumptions

**Given:** A holomorphic germ $\phi$ with a critical point at $0$ and invertible Hessian.

[F1] [[def-real-analytic-germ-in-several-variables]]: real-analytic germs complexify to holomorphic germs.

[F2] [[def-multivariable-power-series]]: the defining series converges absolutely on smaller polydiscs.

[F3] [[thm-power-series-define-holomorphic-functions-in-several-variables]]: holomorphic power series can be differentiated termwise.

[F4] [[thm-holomorphic-inverse-function-theorem-several-variables]]: an invertible complex derivative gives a local biholomorphism.

[F5] [[thm-identity-theorem-in-several-complex-variables]]: holomorphic functions agreeing on a nonempty open subset of a connected domain agree throughout it.

[F6] [[thm-dominated-convergence]]: pointwise convergence under a common integrable majorant permits passage of limits through integrals.

[F7] [[thm-stokes-theorem-for-smooth-singular-chains]]: the integral of a closed differential form over the boundary of a smooth chain is zero.

[F8] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: a real symmetric positive-definite matrix has a Cholesky factor with positive diagonal.

[F9] [[thm-determinant-of-a-triangular-matrix]]: the determinant of a triangular matrix is the product of its diagonal entries.

[F10] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$.

[F11] [[thm-change-of-variables-for-compact-jordan-sets]]: a $C^1$ diffeomorphism changes compact Jordan integrals by its absolute Jacobian.

[F12] [[thm-nonnegative-improper-multiple-integral-by-exhaustion]]: a compact Jordan exhaustion computes the nonnegative improper integral.

[F13] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-t^2}\,dt=\sqrt\pi$, by a proof that adds no choice axiom.

[F14] [[thm-substitution-for-improper-integrals]]: a monotone differentiable substitution preserves convergent improper integrals on corresponding truncations.

[F15] [[thm-riemann-fubini-on-product-rectangles]]: continuous functions on compact product rectangles have equal product and iterated Riemann integrals.

[F16] [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]: determinant is a polynomial in the matrix entries, with linear term $\operatorname{tr}(M)$ in $\det(I+tM)$ at $t=0$.

## Proof

**Given:** The function $\phi$ and Hessian $H$ in the statement.

1.1 Because $H$ is complex symmetric and invertible, some vector $v$ has $v^THv\ne0$: otherwise polarization would give $u^THv=0$ for every $u,v$, contradicting invertibility. Extend $v$ to a basis and use this as a complex linear coordinate change, so $H_{11}\ne0$. From now on, compose each coordinate change with the preceding ones; $\Psi$ denotes the final map from the original coordinates. The holomorphic equation $\partial_{z_1}\phi(z_1,z')=0$ has a unique holomorphic solution $z_1=\psi(z')$ near $0$ by [F3] and [F4], since $\partial_{z_1}\phi(0)=0$ and $\partial_{z_1}^2\phi(0)=H_{11}\ne0$. [given, F1, F3, F4, algebra]

2.1 Set $t=z_1-\psi(z')$. Taylor's formula in $t$, with the linear term zero, gives $ \phi(\psi(z')+t,z')=\phi(\psi(z'),z')+t^2a(t,z'),\quad a(t,z')=\int_0^1(1-s)\partial_{z_1}^2\phi(\psi(z')+st,z')\,ds. $ The integral is holomorphic by locally uniform convergence of the power series [F2]; $a(0, 0)=H_{11}/2\ne0$. Shrink the polydisc so $a=a(0, 0)(1+b)$ with $|b|<1$. The binomial series for $(1+b)^{1/2}$ converges absolutely by [F2], so $w_1=t\sqrt{2a(t, z')}$ is holomorphic and has nonzero $t$-derivative at $0$. [F1, F2, F3, step 1.1, construct]

3.1 By [F4], $(t, z')\mapsto(w_1, z')$ is biholomorphic near $0$, and the phase becomes $\phi(\psi(z'), z')+w_1^2/2$. The Hessian of the reduced phase in $z'$ is the Schur complement $H_{22}-H_{21}H_{11}^{-1}H_{12}$. It is invertible because the block determinant formula gives $\det H=H_{11}\det(H_{22}-H_{21}H_{11}^{-1}H_{12})$. [F4, step 2.1, algebra]

3.2 For real symmetric positive-definite $H$, [F8] gives $H=LL^*$ with $L$ lower triangular and positive diagonal. Since $H$ is real, $\overline L$ is another such factorization; uniqueness in [F8] gives $L=\overline L$, so $L$ is real and $H=LL^T$. On each ball $B_R$, the map $x\mapsto L^Tx$ sends a compact Jordan set to a compact Jordan set; [F11] changes variables by $|\det L|^{-1}$. Letting $R\to\infty$ and using [F12] gives the corresponding nonnegative improper-integral equality. Since $\det L>0$, [F9]–[F10] give $\det H=(\det L)^2$. Repeated compact-rectangle Fubini [F15] factors the standard Gaussian integral on $[-R, R]^n$ into one-dimensional integrals, and [F12] lets $R\to\infty$. By [F13] and the substitution $t=x/\sqrt2$ in [F14], each one-dimensional integral of $e^{-x^2/2}$ is $\sqrt{2\pi}$. Finally, $z=\sqrt\lambda w$ scales the integral by $\lambda^{-n/2}$, proving the formula for real positive-definite $H$ with the positive determinant root. [F8, F9, F10, F11, F12, F13, F14, F15, algebra, step 2.1]

4.1 Repeating steps 1.1–2.1 on the reduced phase proves the normal form by induction on $n$, with the constant phase as the $n=0$ case. Because $\Psi$ is the composite from the original coordinates, differentiating $\phi(z)=\phi(0)+\frac12\Psi(z)^T\Psi(z)$ twice at $0$ gives the original Hessian identity $H=(D\Psi(0))^TD\Psi(0)$; taking determinants gives the asserted square relation. For a continuous parameter family, continuity of $\det H$ lets one restrict to a neighborhood whose determinant image lies in a disc avoiding zero, where a square-root branch can be fixed from its base value. [step 3.1, induction, algebra, given]

4.2 For complex symmetric $H$ with positive-definite real part, the Gaussian integral is holomorphic in its entries: on each compact subset of this matrix domain, the integrand and its entry derivatives are bounded by a polynomial times $e^{-c|x|^2}$ for some $c>0$, so [F6] permits differentiation under the integral. This domain is convex, hence connected, and $\det H\ne0$ there because $Hv=0$ would imply $\operatorname{Re}(v^*Hv)=v^*(\operatorname{Re}H)v>0$ for $v\ne0$. For $H_t=I+t(H-I)$, [F16] and determinant multiplicativity give $\frac{d}{dt}\det H_t=(\det H_t)\operatorname{tr}(H_t^{-1}(H-I))$. Thus $ L(H)=\int_0^1\operatorname{tr}(H_t^{-1}(H-I))\,dt $ depends holomorphically on $H$, satisfies $e^{L(H)}=\det H$, and is zero at $I$. When $H$ is real positive definite, its segment $H_t$ is real positive definite, so $L(H)$ is real and the branch $e^{L(H)/2}$ is positive. The real Gaussian formula from step 3.2 and the complex integral formula agree on a real open set of positive-definite matrices. In a polydisc centered at any point of that set, apply the one-variable identity theorem successively in the independent entries of a complex symmetric matrix; then [F5] extends the identity from that polydisc to the connected matrix domain. [F5, F6, F10, F16, step 3.2, algebra]

5.1 The holomorphic $n$-form in the statement is closed: in complex coordinates its exterior derivative has repeated holomorphic differentials and no antiholomorphic coefficients. The difference of two homologous admissible contours is the boundary of the swept chain. By [F7], its integral is the boundary integral on the truncation of that chain; the stated decay makes this term tend to zero as the truncation expands. Therefore the contour integrals agree. [F7, given] ∎
