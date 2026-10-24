---
id: lem-qftx-coupled-penrose-operator-coefficient
kind: lemma
title: Round coupled Penrose correction gives the R-over-six operator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere
dependency_level: 4
axiom_base: "ZF + full AC inherited from the conditional analytic edge input."
deps:
  - def-axiom-of-choice
  - def-qftx-coupled-penrose-incidence-geometry
  - lem-qftx-coupled-penrose-fibre-dolbeault
  - lem-qftx-coupled-penrose-injective-edge
  - lem-qftx-coupled-penrose-positive-orientation-asd
  - lem-qftx-coupled-penrose-round-sphere-curvature
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-coupled-penrose-incidence-geometry: mathematical-premise
  lem-qftx-coupled-penrose-fibre-dolbeault: mathematical-premise
  lem-qftx-coupled-penrose-injective-edge: mathematical-premise
  lem-qftx-coupled-penrose-positive-orientation-asd: mathematical-premise
  lem-qftx-coupled-penrose-round-sphere-curvature: mathematical-premise
  thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§3, printed pp. 48–56: unique fibrewise correction, its local formulas, and the explicit D*D+2 identity."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§§3–4, printed pp. 488–498: conformal operator and compact Bochner argument."
verification:
  precheck: pass
---

## Statement

Assume the conditional analytic comparison and the hypotheses of the injective-edge lemma, with $A$ a smooth unitary anti-self-dual connection. For a cohomology class $\xi\in H^1(Z,F\otimes\mathcal O_Z(-2))$, let $s=\mathcal P_A(\xi)$ be its fibre-harmonic image. The unique correction of $s\sigma$ that removes the horizontal-vertical component of its Dolbeault differential has remaining component $(\nabla_A^*\nabla_A+2)s$ in a nonvanishing local frame. Consequently

$$\mathcal P_A\bigl(H^1(Z,F\otimes\mathcal O_Z(-2))\bigr)\subseteq\ker(\nabla_A^*\nabla_A+2).$$

The scalar term is $R/6$ for the specified unit round metric, where $R=12$.

## Statement references

[[lem-qftx-coupled-penrose-injective-edge]]

[[lem-qftx-coupled-penrose-positive-orientation-asd]]

[[lem-qftx-coupled-penrose-round-sphere-curvature]]

[Rawnsley, §3, pp. 48–56](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §§3–4, pp. 488–498](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** The incidence twistor geometry, the fibre-harmonic edge decomposition, a smooth unitary ASD connection, and its induced holomorphic bundle.

[A1] Full AC is assumed through the analytic edge and is the choice hypothesis of the compact Hodge-representative theorem used below. [[def-axiom-of-choice]]

[F1] The incidence chart has $u=z_1$, $v=\bar z_2$, fibre coordinate $t$, horizontal $(0,1)$ vectors as defined, and round metric $g=\Omega^2\sum dx_\mu^2$ with $\Omega=2/(1+r^2)$. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] Each closed representative decomposes as $\alpha=\alpha_H+s\sigma+\bar\partial_F\gamma$, where $s=\mathcal P_A[\alpha]$ and $\alpha_H$ is horizontal; the map is well defined. [[lem-qftx-coupled-penrose-injective-edge]]

[F3] Anti-self-duality in the positive incidence convention is exactly the vanishing of the three coefficients $F_{\bar1\bar2}$, $F_{1\bar1}+F_{2\bar2}$, and $F_{12}$ in $F_A(H_1,H_2)$. [[lem-qftx-coupled-penrose-positive-orientation-asd]]

[F4] On each fibre, $H^{0,0}_{\bar\partial}(\mathcal O(-1))=H^{0,1}_{\bar\partial}(\mathcal O(-1))=0$; also $H^{0,1}_{\bar\partial}(\mathcal O(-2))\cong\mathbb C$ with a nonzero harmonic generator $\sigma$. [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F5] Under full AC, on a compact complex manifold the Dolbeault Laplacian has smooth harmonic representatives and a smooth Green inverse; on a fibre with vanishing degree-zero and degree-one cohomology, $\bar\partial$ is an isomorphism from degree-zero sections to the orthogonal complement of harmonic degree-one forms. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[F6] The scalar curvature is $R=12$ in the chosen convention. [[lem-qftx-coupled-penrose-round-sphere-curvature]]

## Proof

**Given:** The data above and a closed global representative $\alpha$ of $\xi$.

1.1 On a fibre, the horizontal vector frames from [F1] are $H_1=\partial_{\bar z_1}-t\partial_{z_2}$ and $H_2=\partial_{\bar z_2}+t\partial_{z_1}$. On the second chart $u=1/t$, the regular frames are $\widetilde H_1=u\partial_{\bar z_1}-\partial_{z_2}=uH_1$ and $\widetilde H_2=u\partial_{\bar z_2}+\partial_{z_1}=uH_2$, so the horizontal vector bundle restricts to $\mathcal O(-1)^{\oplus2}$ and its cotangent to $\mathcal O(1)^{\oplus2}$. Hence $H^{0,1}_{\!H}\otimes\mathcal O(-2)$ restricts to $\mathcal O(-1)^{\oplus2}$. The mixed component $-\bar\partial_H(s\sigma)$ is vertically closed because $\bar\partial_F^2=0$ and $\bar\partial_V\sigma=0$. Its vertical cohomology class is zero by [F4], so it has a vertical primitive. The primitive is unique because the degree-zero kernel for $\mathcal O(-1)^{\oplus2}$ vanishes by [F4]; [F5] gives the bounded inverse on the orthogonal complement. In a local trivialization, these first-order operators depend smoothly on $x$, so the same Neumann-series argument as in the edge lemma gives a smooth family of primitives. Denote it by $\phi(s)$, so $\bar\partial_V\phi(s)=-\bar\partial_H(s\sigma)$. [A1, F1, F2, F4, F5, algebra]

2.1 The decomposition in [F2] and $\bar\partial_F\alpha=0$ imply that the horizontal-vertical part of $\bar\partial_F\alpha_H$ equals $-\bar\partial_H(s\sigma)$. By uniqueness of the solution in step 1.1, $\alpha_H=\phi(s)$. Thus $\psi(s)=s\sigma+\phi(s)$ is a global representative of $\xi$ modulo the exact term $\bar\partial_F\gamma$, and $\bar\partial_F\psi(s)$ has only horizontal degree two. The uniqueness on each fibre makes $\phi(s)$ agree on chart overlaps, so this residual is a global section of the horizontal top-form coefficient bundle. [F2, step 1.1, algebra]

3.1 In a local unitary frame write $D_\mu=\partial_{x_\mu}+A_\mu$, $D_u=(D_0-iD_1)/2$, and $D_v=(D_2+iD_3)/2$. On the chart $t=\lambda_2/\lambda_1$, direct differentiation of the following two horizontal coefficients verifies the vertical equation in step 1.1, and [F4] makes its solution unique: $f^1=(1+r^2)(1+|t|^2)^{-1}(D_vs+\bar tD_us)$ and $f^2=(1+r^2)(1+|t|^2)^{-1}(D_us-\bar tD_vs)$. Differentiating these coefficients and the incidence-frame factors in $\bar\partial_H(s\sigma)+\bar\partial_V\phi(s)+\bar\partial_H\phi(s)$, the coefficients of $1,t,\bar t,|t|^2$ involving antisymmetrized covariant derivatives are the three coefficients of $F_A(H_1,H_2)$ and their Hermitian conjugates; they vanish by [F3]. The remaining zero-fibre-weight terms after collecting the differentiated coefficients are $-\Omega^{-2}\sum_{\mu=0}^3D_\mu D_\mu-2\Omega^{-3}\sum_{\mu=0}^3(\partial_{x_\mu}\Omega)D_\mu+2$; substituting $\Omega=2/(1+r^2)$ gives exactly the following expression, with the displayed zeroth-order coefficient $2$. The remaining local expression is $\bar\partial_F\psi(s)=\tau[-\tfrac14(1+r^2)^2\sum_{\mu=0}^3D_\mu D_\mu+(1+r^2)\sum_{\mu=0}^3x_\mu D_\mu+2]s$, where $\tau$ is the local nonvanishing horizontal top-form frame. In particular the coefficient $2$ comes from differentiating the fibre weight and incidence-frame factors, not from an operator-uniqueness argument. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 For $g=\Omega^2\delta$ in four dimensions, $\sqrt{|g|}=\Omega^4$ and $g^{\mu\nu}=\Omega^{-2}\delta^{\mu\nu}$, so the connection Laplacian is $\nabla_A^*\nabla_As=-\Omega^{-4}\sum_{\mu=0}^3D_\mu(\Omega^2D_\mu s)$. Since $\Omega=2/(1+r^2)$ and $\partial_{x_\mu}\Omega=-4x_\mu/(1+r^2)^2$, expanding the divergence gives $-\tfrac14(1+r^2)^2\sum D_\mu D_\mu+(1+r^2)\sum x_\mu D_\mu$. The zeroth-order term in step 3.1 is $2=12/6=R/6$ by [F6]. The equality is tensorial on overlaps and extends smoothly across infinity. Thus its residual is exactly $\tau(\nabla_A^*\nabla_A+R/6)s=\tau(\nabla_A^*\nabla_A+2)s$. [F1, F6, step 3.1, algebra]

5.1 The form $\bar\partial_F\psi(s)$ is zero because $\psi(s)$ differs from the closed representative $\alpha$ by $\bar\partial_F\gamma$. A local frame $\tau$ is nonzero, so step 4.1 forces $(\nabla_A^*\nabla_A+2)s=0$. Every construction is unitary-gauge covariant: gauge transformations preserve the fibre metric and harmonic projection, and uniqueness transports $\phi(s)$; the differential operator is conjugated by the same gauge transformation. For the dual connection, $F_{A^\vee}=-F_A^{\mathsf T}$, so it remains ASD and the identical calculation applies. Therefore the asserted image inclusion holds for the bundle and its dual, with no irreducibility or nonflatness condition. [F2, F3, F5, F6, step 2.1, step 4.1, algebra] ∎
