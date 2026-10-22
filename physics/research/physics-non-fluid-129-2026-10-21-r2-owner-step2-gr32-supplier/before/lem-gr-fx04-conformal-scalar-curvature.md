---
id: lem-gr-fx04-conformal-scalar-curvature
kind: lemma
title: "Scalar curvature of a conformally Euclidean three-metric"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: "A local differential-geometric identity for a Riemannian metric; it asserts no Einstein constraint or physical model."
deps:
  - thm-gr-constraint-equations-in-normal-frame
dependency_roles:
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), §§6.3.1–6.3.2, equations (6.48)–(6.52), PDF pp. 89–91."
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Sebastiano Bernuzzi, Lecture Notes on 3+1 Numerical Relativity, v0.1 (2021), §6.3, equation (6.17), PDF pp. 26–27."
      url: "https://www.ias.edu/sites/default/files/NR_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $E\subset\mathbb R^3$ be a nonempty open set with Cartesian coordinates $x^1,x^2,x^3$, standard Euclidean metric $\delta=\delta_{ij}\,dx^i dx^j$ with $\delta_{ij}=1$ for $i=j$ and $0$ otherwise, inverse components $\delta^{ij}$, and Laplacian $\Delta_\delta=\sum_{i=1}^3\partial_i^2$. Let $u\in C^\infty(E,(0,\infty))$ and set $h=u^4\delta$. Form the product Lorentzian manifold $\widehat M=\mathbb R_\tau\times E$ with metric $g=-d\tau^2+h$ and future orientation $\partial_\tau$; its slice $\Sigma=\{0\}\times E$ is a smooth spacelike hypersurface with induced metric $h$. Use the induced connection $D$ and curvature convention supplied for this slice by the earlier normal-decomposition theorem. In Cartesian coordinates define $R^\ell{}_{bcd}$ by $R(\partial_c,\partial_d)\partial_b=R^\ell{}_{bcd}\partial_\ell$, $\operatorname{Ric}^h_{ij}:=R^k{}_{ikj}$, and $S_h:=h^{ij}\operatorname{Ric}^h_{ij}$. For $f=2\log u$, write $|df|_\delta^2:=\delta^{ij}(\partial_i f)(\partial_j f)$. Then
$$S_h=-8u^{-5}\Delta_\delta u.$$

This statement concerns a smooth positive conformal metric and its induced scalar curvature. The product construction only fixes the geometric convention; no Einstein equation, energy condition, or completeness hypothesis is imposed.
## Statement references

[[thm-gr-constraint-equations-in-normal-frame]]

## Facts & Assumptions

**Given:** The open Euclidean coordinate domain $E$, its metric $\delta$, the positive smooth function $u$, and the metric $h=u^4\delta$ in the Statement.

[F1] For an induced Riemannian metric $h$ on a smooth spacelike hypersurface, $D$ is its Levi-Civita connection, $R^h$ has the ambient curvature operator convention, and $S_h$ is its scalar curvature ([[thm-gr-constraint-equations-in-normal-frame]], proof step 1.1 and Statement clause (c)).

[A1] $u$ is smooth and strictly positive, so $f:=2\log u$ is smooth and $h=e^{2f}\delta$ is a smooth Riemannian metric.

## Proof

**Given:** [F1], [A1], and the Cartesian coordinates in the Statement.

1.1 Write $\Gamma^k{}_{ij}$ for the Christoffel coefficients of $D$ in the coordinate frame. Torsion-freedom gives $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$, and metric compatibility gives $\partial_i h_{jk}=h_{ak}\Gamma^a{}_{ij}+h_{ja}\Gamma^a{}_{ik}$. Add this identity to the one with $i,j$ interchanged and subtract the one with $i,k$ interchanged; using symmetry of $h$ and $\Gamma$ yields $2h_{ka}\Gamma^a{}_{ij}=\partial_i h_{jk}+\partial_jh_{ik}-\partial_kh_{ij}$. Multiplying by $h^{\ell k}/2$ gives the coordinate Levi-Civita formula $\Gamma^\ell{}_{ij}=\frac12h^{\ell k}(\partial_i h_{jk}+\partial_j h_{ik}-\partial_kh_{ij})$. [F1, A1, algebra]

2.1 Since $h_{ij}=e^{2f}\delta_{ij}$ and $h^{ij}=e^{-2f}\delta^{ij}$, substitution into step 1.1 gives $\Gamma^k{}_{ij}=\delta^k_i f_j+\delta^k_j f_i-\delta_{ij}f^k$, where $f_i=\partial_i f$ and $f^k=\delta^{k\ell}f_\ell$. [step 1.1, A1, algebra]

3.1 In a coordinate frame the definition $R(X,Y)Z=D_XD_YZ-D_YD_XZ-D_{[X,Y]}Z$ gives $R^\ell{}_{bcd}=\partial_c\Gamma^\ell{}_{db}-\partial_d\Gamma^\ell{}_{cb}+\Gamma^\ell{}_{ce}\Gamma^e{}_{db}-\Gamma^\ell{}_{de}\Gamma^e{}_{cb}$; contraction in the first and third slots gives $({\rm Ric}_h)_{ij}=\partial_k\Gamma^k{}_{ij}-\partial_j\Gamma^k{}_{ki}+\Gamma^k{}_{k\ell}\Gamma^\ell{}_{ij}-\Gamma^k{}_{j\ell}\Gamma^\ell{}_{ki}$. Substituting step 2.1 and applying the product rule gives $\partial_k\Gamma^k{}_{ij}=2f_{ij}-\delta_{ij}\Delta_\delta f$, $\partial_j\Gamma^k{}_{ki}=3f_{ij}$, $\Gamma^k{}_{k\ell}\Gamma^\ell{}_{ij}=6f_if_j-3\delta_{ij}|df|_\delta^2$, and $\Gamma^k{}_{j\ell}\Gamma^\ell{}_{ki}=5f_if_j-2\delta_{ij}|df|_\delta^2$. Therefore $({\rm Ric}_h)_{ij}=-f_{ij}-\delta_{ij}\Delta_\delta f+f_if_j-\delta_{ij}|df|_\delta^2$. [F1, step 2.1, algebra]

4.1 Contract the Ricci tensor in step 3.1 with $h^{ij}=e^{-2f}\delta^{ij}$ to obtain $S_h=e^{-2f}(-4\Delta_\delta f-2|df|_\delta^2)$. For $f=2\log u$, the chain rule gives $\Delta_\delta f=2u^{-1}\Delta_\delta u-2u^{-2}|d u|_\delta^2$ and $|df|_\delta^2=4u^{-2}|du|_\delta^2$. The two $|du|_\delta^2$ contributions cancel, and $e^{-2f}=u^{-4}$, so $S_h=-8u^{-5}\Delta_\delta u$. [F1, A1, step 3.1, algebra] ∎

## Remarks

The identity is proved here from the library's curvature sign convention. It is used only for explicit smooth conformal metrics; no scalar-curvature sign condition or completeness assertion is assumed.
