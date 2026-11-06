---
id: def-cmp-kaluza-klein-reduction-ansatz-and-frames
kind: definition
title: Kaluza–Klein product and warped reduction data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 6
physical_scope: "Classical two-derivative metric reduction on smooth compact internal spaces, with separate unwarped fixed-background and warped Einstein-frame ansätze. Source, flux, dilaton, higher-derivative, loop, and retained-modulus effects are included only when explicitly declared."
deps:
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "Introduction, PDF pp. 2–3; §2, PDF pp. 4–7; §3.2, PDF pp. 11–13"
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2 warped compactification equations and §3 conifold throat, PDF pp. 8–16, 23–27"
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: "https://arxiv.org/pdf/2106.08343v2"
      locator: "§2 and §3.1: scale and source qualifications on reductions"
---

## Definition

Let $d,n\geq1$, $D=d+n$, let $M_d$ be a smooth Lorentzian $d$-manifold of signature $(-,+,\ldots,+)$, and let $(Y_n,\hat g_Y)$ be a smooth compact boundaryless Riemannian $n$-manifold. Write $\operatorname{Vol}_{\hat g}(Y)=\int_Y\sqrt{\det\hat g_Y}\,d^ny$. In coordinate expressions use $h_Y:=\hat g_Y$ and $h_{mn}(y):=\hat g_{mn}(y)$ for this same internal metric. The fixed unwarped product metric ansatz is
$$G_D=g_d\oplus h_Y,\qquad ds_D^2=g_{\mu\nu}(x)dx^\mu dx^\nu+h_{mn}(y)dy^m dy^n.$$
For an internal-only warped ansatz, let $A,B\in C^\infty(Y,\mathbb R)$ and set
$$G_D^{(E)}=e^{2A(y)}g_d+e^{2B(y)}\hat g_Y,\qquad ds_{D,E}^2=e^{2A(y)}g_{\mu\nu}(x)dx^\mu dx^\nu+e^{2B(y)}\hat g_{mn}(y)dy^m dy^n.$$
The metrics are required to be nondegenerate; their signatures are respectively Lorentzian on $M_d$ and Riemannian on $Y$. The symbols $h_Y$ and $h_{mn}$ are only coordinate aliases of the already specified $\hat g_Y$ and $\hat g_{mn}$; no second internal metric is introduced.

For the coefficient calculations below, additionally take the $D$-dimensional action to be
$$S_D[G]=\frac{1}{2\kappa_D^2}\int_{M_d\times Y_n}d^DX\,\sqrt{-\det G_D}\,R[G_D],$$
with $\kappa_D>0$ and, in $\hbar=c=1$ units, $[\kappa_D^2]=(\text{length})^{D-2}$. The coefficient calculation excludes other action terms. A variable-volume product ansatz, when used, is the block-diagonal metric
$$G_D(x,y)=g_J(x)\oplus\gamma_Y(x,y),$$
where $\gamma_Y(x,\cdot)$ is a smooth Riemannian metric on $Y$ for each $x$ and there are no mixed $dx^\mu dy^m$ components. Its Jordan-frame internal volume is
$$V_J(x):=\int_Yd^ny\,\sqrt{\det\gamma_Y(x,y)}.$$
When $d>2$ and $V_J>0$, the corresponding lower-dimensional Einstein metric is defined by $g_E=(V_J/V_*)^{2/(d-2)}g_J$, for a fixed reference volume $V_*>0$.

For a specified smooth finite-rank real or complex vector bundle $F\to Y$, write $\Gamma(F):=C^\infty(Y,F)$ for its space of smooth sections. For a specified linear internal kinetic operator $L_Y:\Gamma(F)\to\Gamma(F)$, an internal mode is a smooth section $u$ satisfying $L_Yu=\lambda u$ for a declared eigenvalue $\lambda$. A finite mode ansatz is a field expansion $\Psi(x,y)=\sum_{j\in J}q^j(x)u_j(y)$ for a declared finite index set $J$ and declared sections $u_j$. Here a **Laplace-type operator** is a second-order differential operator with smooth coefficients and principal symbol $\sigma_2(L_Y)(y,\xi)=|\xi|_{\hat g_Y}^2\operatorname{id}_{F_y}$, using the symbol convention $\partial_{y^a}\mapsto i\xi_a$. Equivalently, in a local frame its second-order part is $-\hat g_Y^{ab}\partial_{y^a}\partial_{y^b}\operatorname{id}$; the remaining terms have order at most one. This fixes the positive-principal-symbol sign; the scalar model is $-\operatorname{div}\operatorname{grad}$. Formal self-adjointness or nonnegativity is additional data when required, not part of the principal-symbol condition alone. For this operator a zero or harmonic mode means a section in $\ker L_Y$. This definition makes no claim that such a finite family is complete or that a finite mode ansatz is a consistent truncation.

These ansätze are declared data, not consequences of compactness, harmonicity, or the Einstein equations. Every reduction must also specify any coordinate periods, field normalizations, frame and dilaton convention, retained-modulus dependence, source localization or smearing, boundary conditions, and retained orders in $\alpha'$, the string coupling, derivatives, and field modes. In ten dimensions use the declared convention $G_E=e^{-\Phi/2}G_s$, with $g_{\mathrm{str}}=e^{\Phi_\infty}$ and $2\kappa_0^2=(2\pi)^7\alpha'^4$; when the constant asymptotic dilaton is absorbed into the physical coupling, $2\kappa_{10,\mathrm{phys}}^2=g_{\mathrm{str}}^2\,2\kappa_0^2$. These are the conventions of the supplied supergravity-definition item.

## Definition references

[[def-supergravity-conventions-and-normalizations]]

## Facts & Assumptions

**Given:** The manifold, metric, action, boundary conditions, frame, dilaton shift, and field dependence specified in the statement.

[F1] [[def-supergravity-conventions-and-normalizations]]: in natural units the item declares mostly-plus signature, $2\kappa_0^2=(2\pi)^7\alpha'^4$, $2\kappa_{10,\mathrm{phys}}^2=g_{\mathrm{str}}^2\,2\kappa_0^2$ when the constant asymptotic dilaton is absorbed, $G^{(E)}=e^{-\Phi/2}G^{(s)}$, and $M_P^{-2}=\kappa_4^2=8\pi G_N$. Here $G^{(s)}$ is a metric and $g_{\mathrm{str}}=e^{\Phi_\infty}$ is a dimensionless scalar; they are distinct objects.

[A1] $D=d+n$, $Y$ has no boundary, the metrics are smooth and nondegenerate, and the warp factors depend only on internal coordinates for the fixed-background warped calculation. For the ten-dimensional constant-dilaton comparison set $\Phi_0=\Phi_\infty$, so $g_s=g_{\mathrm{str}}=e^{\Phi_0}$ in the convention of [F1].

[A2] For the moduli Weyl calculation, $d>2$, the variable-volume metric is the declared $\gamma_Y(x,y)$, $V_J(x)>0$ is smooth, and external boundary terms vanish or are discarded under the declared boundary conditions.

[A3] For the ten-dimensional frame conversion in step 1.3, $D=10$, $d=4$, $n=6$, $\Phi=\Phi_0=\Phi_\infty$ is constant, the metric is an unwarped product, and $\kappa_{10,\mathrm{phys}}^2=e^{2\Phi_0}\kappa_0^2$.

## Proof

1.1  In the fixed product case the metric is block diagonal, so its determinant is $\det G_D=(\det g_d)(\det\hat g_Y)$; the Lorentzian square-root convention gives $\sqrt{-\det G_D}=\sqrt{-\det g_d}\sqrt{\det\hat g_Y}$. Thus internal and external volume factors separate in the stated Einstein–Hilbert action. [given, A1, algebra]

1.2  In the warped case the external block is multiplied by $e^{2A}$ in each of $d$ directions and the internal block by $e^{2B}$ in each of $n$ directions. Therefore $\sqrt{-\det G_D}=e^{dA+nB}\sqrt{-\det g_d}\sqrt{\det\hat g_Y}$. The part of the scalar curvature multiplying the external scalar curvature is $e^{-2A}R[g_d]$; terms containing derivatives of $A$ or $B$ contain no factor $R[g_d]$. Hence the coefficient of $\int_{M_d}\sqrt{-\det g_d}\,R[g_d]$ is $\int_Yd^ny\sqrt{\det\hat g_Y}\,e^{(d-2)A+nB}/(2\kappa_D^2)$. [given, A1, algebra]

1.3  Under [A3], $G_E=e^{-\Phi_0/2}G_s$ implies $G_s=e^{\Phi_0/2}G_E$. In four external dimensions a constant Weyl rescaling gives $\sqrt{-g_s}R[g_s]=e^{\Phi_0/2}\sqrt{-g_E}R[g_E]$. On six internal dimensions $V_s=e^{3\Phi_0/2}V_E$. Since $\kappa_{10,\mathrm{phys}}^2=e^{2\Phi_0}\kappa_0^2$, the string-frame coefficient $V_s e^{\Phi_0/2}/\kappa_{10,\mathrm{phys}}^2$ equals $V_E/\kappa_0^2$. This is only a constant-dilaton frame conversion; it makes no statement about terms involving derivatives or dynamics of $\Phi$. [given, F1, A3, algebra]

1.4  For the variable-volume ansatz in the Definition, the coefficient of $R[g_J]$ is $V_J(x)/(2\kappa_D^2)$. Under $g_E=\Omega^2g_J$ with $\Omega=(V_J/V_*)^{1/(d-2)}$, the curvature term transforms with coefficient $V_J\Omega^{2-d}/(2\kappa_D^2)=V_*/(2\kappa_D^2)$. The conformal transformation also produces derivatives of $\Omega$; they are modulus-derivative terms and are not removed by making the Einstein coefficient constant. [given, A2, algebra]

2.1  The identity $\int_Y\sqrt{\hat h}\,e^{(d-2)A+nB}$ is a coefficient calculation for the displayed ansatz and two-derivative Einstein term only. A varying warp factor, localized sources, flux constraints, dilaton dependence, higher-$\alpha'$ corrections, loops, or nonlinear mode couplings can change the equations and source omitted modes. Therefore harmonicity alone does not establish that the ansatz uplifts every reduced solution. [given, A1, F1, algebra] ∎
