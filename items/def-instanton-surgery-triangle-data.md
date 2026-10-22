---
id: def-instanton-surgery-triangle-data
kind: definition
title: "Candidate instanton surgery-triangle input data"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "The full Axiom of Choice is retained for the generic perturbation, regularity, and compactness constructions required by later theorems; no such existence or regularity conclusion is asserted by this definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), §§2–4"
      url: "https://people.math.harvard.edu/~kronheim/hrpthree.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §§7.1–7.8"
      url: "https://arxiv.org/pdf/0807.4891"
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 7–10"
      url: "https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K\subset S^3$ be a smooth knot with chosen exterior $E_K$ and ordered meridian-longitude basis $(\mu,\lambda)$. A **surgery triad** is a cyclically ordered triple of primitive unoriented slopes $s_0,s_1,s_\infty$ on $\partial E_K$ whose pairwise geometric intersection numbers are one, together with the oriented fillings $Y_j=E_K(s_j)$ and the three 2-handle surgery cobordisms in the cyclic order $Y_0\to Y_1\to Y_\infty\to Y_0$. Choose primitive representatives $v_j=(p_j,q_j)$ in the ordered basis $(\mu,\lambda)$ so that $\det(v_0,v_1)=\det(v_1,v_\infty)=\det(v_\infty,v_0)=1$; the cyclic order is the one for which this orientation convention holds. The geometric intersection number of $s_j$ and $s_k$ is $|p_jq_k-p_kq_j|$.

For a closed oriented Riemannian 3-manifold $Y$, a principal $SO(3)$-bundle $P\to Y$ is a locally trivial bundle with fiber $SO(3)$ and right structure-group action. A connection $A$ is a smooth right-$SO(3)$-invariant horizontal distribution on $P$ complementary to its vertical tangent spaces. In a local trivialization its curvature is $F_A=dA+\tfrac12[A\wedge A]$; it is **flat** when $F_A=0$. Let $\mathcal A(P)$ be the space of smooth connections and let $\mathcal G(P)$ be the group of bundle automorphisms covering the identity of $Y$. The configuration space is the quotient $\mathcal B(P)=\mathcal A(P)/\mathcal G(P)$. The associated oriented rank-three real vector bundle has second Stiefel–Whitney class $w_2(P)\in H^2(Y;\mathbb Z/2)$.

Fix an $SO(3)$-invariant inner product on $\mathfrak{so}(3)$ and normalize the Chern–Simons functional on its covering of $\mathcal B(P)$ so that its differential at $A$ in a connection variation $a$ is $d\mathrm{CS}_A(a)=\int_Y\langle a\wedge F_A\rangle$. A **holonomy perturbation** is a finite sum of gauge-invariant terms formed by integrating smooth class functions of holonomy around a finite family of embedded loops against compactly supported smooth weights. A critical point of a perturbed Chern–Simons functional is called a perturbed flat connection. At a nondegenerate critical point, the gauge-fixed Hessian is self-adjoint; the **spectral flow** along a path of such Hessians is the signed count of eigenvalues crossing zero and supplies the relative grading convention. Give $\mathbb R\times Y$ the product metric and orientation $dt\wedge\mathrm{or}(Y)$. Fix a holonomy perturbation $f_\pi$ and write $V_\pi(B)=\nabla_{L^2}f_\pi(B)$ for its gradient. A **finite-energy perturbed anti-self-dual trajectory** is a gauge-equivalence class with a temporal-gauge representative $A=B(t)$ on the pullback bundle satisfying
$$\frac{dB}{dt}=-\bigl(*_YF_B+V_\pi(B)\bigr)=-\nabla_{L^2}(\mathrm{CS}+f_\pi)(B),$$
with specified limiting critical points $\beta_-,\beta_+$ of that same perturbed functional at the two ends, and with finite flow energy
$$E_\pi(B):=\int_{\mathbb R}\left\|\frac{dB}{dt}\right\|_{L^2(Y)}^2\,dt=\int_{\mathbb R}\|*_YF_B+V_\pi(B)\|_{L^2(Y)}^2\,dt<\infty.$$
Equivalently, in this gauge its four-dimensional equation is $F_A^++\widehat V_\pi(A)=0$, where $\widehat V_\pi(A)=\tfrac12(dt\wedge V_\pi(B)+*_YV_\pi(B))$. When $\pi=0$ this reduces to the ordinary anti-self-duality equation. On a chosen real lift of the Chern–Simons functional along the trajectory, the chain rule gives $d(\mathrm{CS}+f_\pi)(B(t))/dt=-\|dB/dt\|_{L^2}^2$; whenever the functional has the specified endpoint limits, the energy is their difference. For nonzero perturbations those endpoints need not be flat, so no finiteness of the unperturbed curvature integral $\int_{\mathbb R\times Y}|F_A|^2$ is imposed. If the analytic Fredholm construction is established, the expected dimension is the index of the gauge-fixed linearization of the perturbed equation with the stated asymptotic conditions; translation decreases dimension by one for a nonconstant trajectory.

The **candidate instanton surgery-triangle input data** consist of a principal $SO(3)$-bundle on each $Y_j$, compatible bundle identifications on the three cobordisms, the invariant inner product and Chern–Simons normalization, the allowed perturbation class, and the grading convention. After separate proofs of analytic existence, regularity, compactness and gluing, these data may be used to define critical-point complexes and cobordism maps. Chain complexes, exactness of the three-term Floer sequence, and independence of the choices are separate theorem obligations. This definition asserts none of those analytic or Floer-theoretic conclusions.

## Definition references

[[def-oriented-slope-and-knot-dehn-filling|Slope coordinates, meridian-longitude basis and oriented fillings]]

[Kronheimer–Mrowka, *Dehn surgery, the fundamental group and SU(2)*, §§2–4](https://people.math.harvard.edu/~kronheim/hrpthree.pdf)

[Kronheimer–Mrowka, *Knots, sutures and excision*, §§7.1–7.8](https://arxiv.org/pdf/0807.4891)

[Motegi, *Dehn surgery on knots: survey*, pp. 7–10](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

## Remarks

The ordinary closed-manifold $SO(3)$ theory in this definition is distinct from the singular earring complex and sutured closure used for Khovanov detection. No Khovanov or singular-instanton rank detector is a logical input to Property P in the proof route considered here.

## Remarks references

[Kronheimer–Mrowka, *Dehn surgery, the fundamental group and SU(2)*, §2](https://people.math.harvard.edu/~kronheim/hrpthree.pdf)
