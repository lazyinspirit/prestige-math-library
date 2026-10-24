---
id: post-qftx-s3-cs-matter-localization-model
kind: postulate
title: Adopted ABJM localization model on the round three-sphere
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-s3-partition-functions
deps: []
dependency_roles: {}
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anton Kapustin, Brian Willett, and Itamar Yaakov, Exact Results for Wilson Loops in Superconformal Chern-Simons Theories with Matter"
      url: "https://arxiv.org/pdf/0909.4559"
      locator: "§2 Setup, especially §2.2, PDF pp. 3–8; §3.1–3.5, PDF pp. 7–20; §4, PDF pp. 20–22."
    - title: "Marcos Mariño, Lectures on Localization and Matrix Models in Supersymmetric Chern-Simons-Matter Theories"
      url: "https://arxiv.org/pdf/1104.0783"
      locator: "§§2.1–2.4 and 6.2–6.5, PDF pp. 6–46; in particular the ABJM superpotential in (2.43), chiral determinant in (6.67), and matrix integral in (6.81)."
physical_scope: "Adopted source-specific ABJM model in its three-dimensional N=2 description on the round Euclidean S3; no generic N=2 theory, rigorous continuum measure, regulator-removal theorem, or empirical claim is asserted."
verification:
  precheck: pending
---

## Postulate

Use natural units $c=\hbar=1$. Fix $r>0$ with units of length and the round oriented sphere
$$
\mathbb S^3_r=\{y\in\mathbb R^4:\textstyle\sum_{\alpha=1}^4 y_\alpha^2=r^2\}
$$
with its induced Riemannian metric, no boundary, and its unique spin structure. Adopt the source-specific ABJM model on this background, viewed through one chosen three-dimensional $\mathcal N=2$ subalgebra. Its gauge group is $G=U(N)\times U(N)$ with $N\in\mathbb Z_{\ge1}$ and supersymmetric Chern–Simons levels $k$ and $-k$, where $k\in\mathbb Z\setminus\{0\}$. The global group includes both central $U(1)$ factors. Write $\operatorname{tr}_N$ for the trace in the defining representation of either factor; in the Kapustin–Willett–Yaakov convention the level multiplies $\operatorname{tr}_N/(4\pi)$ in the supersymmetric Chern–Simons action.

Each $\mathcal N=2$ vector multiplet has a Hermitian matrix-valued connection $A_\mu$ (or $\widehat A_\mu$), a real Hermitian adjoint scalar $\sigma$ (or $\widehat\sigma$), a two-component complex gaugino $\lambda$ (or $\widehat\lambda$), and a real auxiliary scalar $D$ (or $\widehat D$). In an oriented coordinate chart the first factor's source-normalized action is
$$
S_{\mathrm{CS},k}=\frac{k}{4\pi}\int d^3x\,\operatorname{tr}_N\!\left(\epsilon^{\mu\nu\rho}\left(A_\mu\partial_\nu A_\rho+\frac{2i}{3}A_\mu A_\nu A_\rho\right)-\lambda^\dagger\lambda+2D\sigma\right);
$$
the second factor uses the same expression with $(A,\lambda,D,\sigma,k)$ replaced by $(\widehat A,\widehat\lambda,\widehat D,\widehat\sigma,-k)$. Here $\epsilon^{\mu\nu\rho}$ is the oriented Levi-Civita density.

The matter consists of two chiral multiplets $A_a$, $a=1,2$, in $(\mathbf N,\overline{\mathbf N})$ and two $B_{\dot a}$, $\dot a=1,2$, in $(\overline{\mathbf N},\mathbf N)$. A chiral multiplet means a complex scalar, a two-component complex spinor, and a complex auxiliary scalar in its stated representation. For $A_a$, for example, a gauge transformation $(U,\widehat U)\in G$ acts by $A_a\mapsto U A_a\widehat U^{-1}$; the $B_{\dot a}$ action is the reversed one. The covariant derivative on a bifundamental scalar is $D_\mu A_a=\partial_\mu A_a+iA_\mu A_a-iA_a\widehat A_\mu$; spinors also carry the Levi-Civita spin connection. The vector-multiplet fields act in that representation by left multiplication from the first factor minus right multiplication from the second.

The round-sphere component action for one chiral multiplet $(\phi,\psi,F)$ of $R$-charge $\Delta=\tfrac12$, in the representation determined by its bifundamental type, is
$$
S_{\mathrm{chiral}}=\int_{\mathbb S^3_r}d^3x\,\sqrt g\left((D_\mu\phi)^\dagger D^\mu\phi+\frac{3}{4r^2}\phi^\dagger\phi+i\psi^\dagger\gamma^\mu D_\mu\psi+F^\dagger F-\phi^\dagger\sigma^2\phi+\phi^\dagger D\phi-\psi^\dagger\sigma\psi+i\phi^\dagger\lambda^\dagger\psi-i\psi^\dagger\lambda\phi\right).
$$
The representation-valued $\sigma,D,\lambda$ in this expression act by the first-factor action minus the second-factor action. Sum this action over the four chiral multiplets.

The adopted $\mathcal N=2$ superpotential is
$$
W=\frac{2\pi}{k}\epsilon^{ab}\epsilon^{\dot a\dot b}\operatorname{tr}_N(A_aB_{\dot a}A_bB_{\dot b})=\frac{4\pi}{k}\operatorname{tr}_N(A_1B_1A_2B_2-A_1B_2A_2B_1),
$$
where $\epsilon^{12}=1=-\epsilon^{21}$ and all other components vanish. The superpotential is the holomorphic interaction that supplies the chiral auxiliary-field and Yukawa terms. This is the ABJM quartic interaction; the adopted quantum model has the enhanced $\mathcal N=6$ superconformal symmetry, while localization uses only the selected $\mathcal N=2$ subalgebra. The scalar component of each chiral multiplet has $U(1)_R$ charge and superconformal dimension $\Delta=\tfrac12$; its fermion and auxiliary component have charges $\Delta-1$ and $\Delta-2$. Set all real masses and Fayet–Iliopoulos parameters to zero. A real mass here is the constant scalar in a background flavor vector multiplet; a Fayet–Iliopoulos parameter is the coefficient of the auxiliary $D$ field for an abelian vector multiplet. The level $k$ is dimensionless, $r$ has units of length, $[A_\mu]=[\sigma]=[\lambda]=r^{-1}$, $[D]=r^{-2}$, $[\phi]=r^{-1/2}$, $[\psi]=r^{-1}$, and $[F]=r^{-3/2}$.

The smooth field domain consists of pairs of smooth connections and the listed smooth associated matter and auxiliary fields on the trivial $U(N)\times U(N)$ bundles. The smooth gauge group $C^\infty(\mathbb S^3_r,U(N)\times U(N))$ acts by the transformations just specified. The source gauge-fixes this quotient by the covariant Lorenz conditions $\nabla^\mu A_\mu=\nabla^\mu\widehat A_\mu=0$. Its Faddeev–Popov ghosts are anticommuting scalar fields representing the determinant of the derivative of these gauge conditions along gauge orbits. The Euclidean contour takes the vector connections and real scalars on their Hermitian/real slices, pairs each matter scalar with its Hermitian conjugate, and integrates the fermions as independent Grassmann variables. The diagonal Hermitian matrices form the Cartan subalgebras; the residual Weyl group $S_N\times S_N$, with $S_N$ the permutation group on $N$ entries, permutes their eigenvalues. The Cartan eigenvalues lie on real lines.

Choose a normalized conformal Killing spinor $\epsilon$ satisfying $\nabla_\mu\epsilon=\frac{i}{2r}\gamma_\mu\epsilon$ in an orthonormal frame, where $\gamma_\mu$ are Hermitian two-dimensional gamma matrices. Let $Q$ be its off-shell supersymmetry transformation and let $\delta_{\mathrm{FP}}$ be the Faddeev–Popov differential. In the source gauge-fixed complex, $Q_{\mathrm{gf}}=Q+\delta_{\mathrm{FP}}$ is odd and squares to zero on the gauge-fixed fields and ghosts. The source localization calculation adds a dimensionless parameter $t$ times a $Q_{\mathrm{gf}}$-exact Yang–Mills deformation. Its one-loop determinants are zeta-regularized, with $\log\det L=-\zeta_L'(0)$ when the source's spectral hypotheses apply; they are the Gaussian boson/fermion/ghost determinant ratios about the constant-Cartan locus.

The corresponding gauge-fixed functional integral is only the formal expression
$$
Z_{\mathrm{formal}}=\frac{1}{\operatorname{vol}(\mathcal G)}\int_{\mathcal C/\mathcal G}[D\Phi]\,e^{-S_E[\Phi]},
$$
where $\mathcal G=C^\infty(\mathbb S^3_r,U(N)\times U(N))$, $\mathcal C$ is the source Euclidean contour, and $S_E$ is the supersymmetric Chern–Simons, chiral-matter, and superpotential action specified above. The source calculation assumes that its gauge-fixed measure and contour are $Q_{\mathrm{gf}}$-invariant and that the deformation introduces no anomalous Jacobian (a multiplicative change of the formal measure under $Q_{\mathrm{gf}}$) or surface contribution at the boundary of field space. These are adopted formal field-theory inputs: this postulate does not construct an infinite-dimensional measure, prove convergence of the localization limit, or assert a theorem for arbitrary three-dimensional $\mathcal N=2$ models.

## Postulate references

[Kapustin, Willett, and Yaakov, §§2–4](https://arxiv.org/pdf/0909.4559)

[Mariño, §§2.1–2.4 and 6.2–6.5](https://arxiv.org/pdf/1104.0783)
