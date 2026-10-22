---
id: lem-emg-fx-conformal-constraints
kind: lemma
title: Exact conformal electrovacuum constraint transformation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-fx-conformal-seed
  - def-emg-constrained-electrovacuum-data
  - def-emg-geometric-scaling
  - thm-gr-constraint-equations-in-normal-frame
dependency_roles:
  def-emg-fx-conformal-seed: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009)"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Section III.A, equations (3.1)-(3.12), derives the source-free electric divergence weight and the flat-background Hamiltonian equation in Gaussian/geometric units. The proof here gives the general three-metric, magnetic, trace, and SI-to-geometric calculation."
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012), author preprint arXiv:gr-qc/0703035v1"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Sections 6.2.3-6.4.2, equations (6.14)-(6.52) and (6.81), derive the metric, divergence, scalar-curvature, and trace-free-curvature conformal identities."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Use the smooth conformal seed data defined in this development on an oriented smooth three-manifold, and let $D$ and $\bar D$ be the Levi-Civita connections of $h=\psi^4\bar h$ and $\bar h$. Define $\Delta_{\bar h}\psi:=\bar h^{ij}\bar D_i\partial_j\psi$, with the Euclidean convention $\Delta=\sum_i\partial_i^2$ in Cartesian coordinates. Use the spatial curvature sign and scalar-curvature contraction fixed for induced data in the preceding Gauss-Codazzi convention. Let $e=\alpha^{-1}\psi^{-6}\bar E$ and $b=\alpha^{-1}\psi^{-6}\bar B$ be the SI-convention vector fields associated with the inherited constrained electrovacuum initial-data convention. Then the two Maxwell divergence constraints are equivalent to

$$\bar D_i\bar E^i=0,\qquad \bar D_i\bar B^i=0,$$

and the SI Hamiltonian constraint in that definition is equivalent to

$$-8\Delta_{\bar h}\psi+\bar R\,\psi-|\bar A|_{\bar h}^2\psi^{-7}+\left(\frac{2}{3}\tau^2-2\Lambda\right)\psi^5-2\left(|\bar E|_{\bar h}^2+|\bar B|_{\bar h}^2\right)\psi^{-3}=0.$$

Here $\bar R$ is the scalar curvature of $\bar h$ in the stated convention, and the barred norms use $\bar h$ to raise and lower indices. The exact vector divergence identities are $D_iE^i=\psi^{-6}\bar D_i\bar E^i$ and $D_iB^i=\psi^{-6}\bar D_i\bar B^i$. The separate momentum constraint remains

$$D^jK_{ji}-D_i\tau=-2\psi^{-6}(\bar E\times_{\bar h}\bar B)_i,$$

where the cross product on the right is lowered with $\bar h$. In particular, if $K=0$ and $\bar E\times_{\bar h}\bar B=0$, the momentum equation holds. The transformed scalar equation alone does not impose the momentum constraint and gives no elliptic existence theorem.

## Statement references

[[def-emg-fx-conformal-seed]]

[[def-emg-constrained-electrovacuum-data]]

[[def-emg-geometric-scaling]]

[[thm-gr-constraint-equations-in-normal-frame]]

## Facts & Assumptions

**Given:** Smooth seed data as in the Statement, with $\psi>0$, $\alpha>0$, and the SI-convention constraint equations defined on the same three-manifold.

[F1] [[def-emg-fx-conformal-seed]]: $h=\psi^4\bar h$, $K=(\tau/3)h+\psi^{-2}\bar A$, $E=\psi^{-6}\bar E$, and $B=\psi^{-6}\bar B$, where $\bar A$ is $\bar h$-trace-free.

[F2] [[def-emg-constrained-electrovacuum-data]]: $D_ie^i=D_ib^i=0$ and $R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+(\kappa/\mu_0)(|e|_h^2+|b|_h^2)$; its momentum equation is $D^jK_{ji}-D_i\operatorname{tr}_hK=-(\kappa/\mu_0)(e\times_hb)_i$.

[F3] [[def-emg-geometric-scaling]]: $\alpha^2=\kappa/(2\mu_0)$, with $\alpha>0$ constant.

[F4] [[thm-gr-constraint-equations-in-normal-frame]]: the induced spatial scalar curvature is contracted from the curvature operator with the same sign convention as the ambient operator; the Hamiltonian constraint uses $R(h)+\tau^2-|K|_h^2$ for $K=+\tfrac12\mathcal L_nh$.

## Proof

1.1 In any positively oriented coordinate chart, $\det h=\psi^{12}\det\bar h$, so $\sqrt{\det h}=\psi^6\sqrt{\det\bar h}$. The Levi-Civita formula and the determinant derivative give $\Gamma^i{}_{ik}=\partial_k\log\sqrt{\det h}$, hence $D_iV^i=(\sqrt{\det h})^{-1}\partial_i(\sqrt{\det h}\,V^i)$ for every smooth vector field $V$. Substituting $V=E=\psi^{-6}\bar E$ and then $V=B=\psi^{-6}\bar B$ gives $D_iE^i=\psi^{-6}\bar D_i\bar E^i$ and $D_iB^i=\psi^{-6}\bar D_i\bar B^i$. Since $e=\alpha^{-1}E$, $b=\alpha^{-1}B$, and both factors are positive, the two SI divergence constraints are equivalent to the two barred divergence equations. [given, F1, F2, algebra]

1.2 The oriented volume forms satisfy $\operatorname{vol}_h=\psi^6\operatorname{vol}_{\bar h}$. In coordinates, $(E\times_hB)_i=(\operatorname{vol}_h)_{ijk}E^jB^k=\psi^{-6}(\bar E\times_{\bar h}\bar B)_i$. Also $|E|_h^2=\psi^{-8}|\bar E|_{\bar h}^2$ and $|B|_h^2=\psi^{-8}|\bar B|_{\bar h}^2$, by inserting $h_{ij}=\psi^4\bar h_{ij}$ and the two vector weights. Therefore $(\kappa/\mu_0)(|e|_h^2+|b|_h^2)=2\psi^{-8}(|\bar E|_{\bar h}^2+|\bar B|_{\bar h}^2)$ and $(\kappa/\mu_0)(e\times_hb)_i=2\psi^{-6}(\bar E\times_{\bar h}\bar B)_i$, using [F3]. [F1, F2, F3, algebra]

1.3 Taking the $h$-trace of $K=(\tau/3)h+\psi^{-2}\bar A$ gives $\operatorname{tr}_hK=\tau+\psi^{-6}\bar h^{ij}\bar A_{ij}=\tau$, because $\bar A$ is trace-free. In the squared norm, the cross term between $(\tau/3)h$ and $\psi^{-2}\bar A$ vanishes by the same trace condition; the pure trace term is $\tau^2/3$, and the trace-free term is $\psi^{-12}|\bar A|_{\bar h}^2$. Thus $|K|_h^2=\tau^2/3+\psi^{-12}|\bar A|_{\bar h}^2$. [F1, algebra]

1.4 Put $u=2\log\psi$, so $h=e^{2u}\bar h$. In a chart, metric compatibility and torsion-freeness give $\Gamma[h]^k{}_{ij}=\tfrac12h^{k\ell}(\partial_i h_{j\ell}+\partial_j h_{i\ell}-\partial_\ell h_{ij})$, hence $C^k{}_{ij}:=\Gamma[h]^k{}_{ij}-\Gamma[\bar h]^k{}_{ij}=\delta^k_i u_j+\delta^k_j u_i-\bar h_{ij}u^k$. Expanding the curvature definition and contracting gives $\operatorname{Ric}(h)_{ij}=\operatorname{Ric}(\bar h)_{ij}+\bar D_kC^k{}_{ij}-\bar D_iC^k{}_{kj}+C^k{}_{ij}C^\ell{}_{k\ell}-C^k{}_{i\ell}C^\ell{}_{kj}$. Here $C^k{}_{kj}=3u_j$, $\bar D_kC^k{}_{ij}=2\bar D_i u_j-\bar h_{ij}\bar\Delta u$, and $\bar D_iC^k{}_{kj}=3\bar D_i u_j$ because $du$ is closed. Expanding the products gives $C^k{}_{ij}C^\ell{}_{k\ell}=6u_i u_j-3\bar h_{ij}|du|_{\bar h}^2$ and $C^k{}_{i\ell}C^\ell{}_{kj}=5u_i u_j-2\bar h_{ij}|du|_{\bar h}^2$; tracing with $h^{ij}=\psi^{-4}\bar h^{ij}$ therefore yields $R(h)=\psi^{-4}(\bar R-4\bar\Delta u-2|du|_{\bar h}^2)$. Substitution of $u=2\log\psi$ and $\bar\Delta\log\psi=\psi^{-1}\Delta_{\bar h}\psi-\psi^{-2}|d\psi|_{\bar h}^2$ cancels the gradient-square terms and gives $R(h)=\psi^{-5}(\bar R\psi-8\Delta_{\bar h}\psi)$. [F1, F4, algebra]

2.1 Substituting steps 1.3 and 1.4 into the left side of the SI Hamiltonian constraint [F2], and step 1.2 into its right side, gives $\psi^{-5}(-8\Delta_{\bar h}\psi+\bar R\psi)-\psi^{-12}|\bar A|_{\bar h}^2+\frac{2}{3}\tau^2=2\Lambda+2\psi^{-8}(|\bar E|_{\bar h}^2+|\bar B|_{\bar h}^2)$. Multiplication by the positive $\psi^5$ is reversible and yields exactly the transformed scalar equation in the Statement; step 1.1 gives the two equivalent Maxwell constraints. [F2, step 1.1, step 1.2, step 1.3, step 1.4, algebra]

3.1 By step 1.2, the right side of the SI momentum constraint in [F2] is $-2\psi^{-6}(\bar E\times_{\bar h}\bar B)_i$, which proves the displayed retained momentum equation. If $K=0$, its left side vanishes; if also $\bar E\times_{\bar h}\bar B=0$, its right side vanishes. No step has inferred this vector equation from the scalar constraint. [F1, F2, step 1.2, algebra] ∎
