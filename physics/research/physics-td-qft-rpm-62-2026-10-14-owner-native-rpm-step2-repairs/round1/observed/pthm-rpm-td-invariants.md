---
id: pthm-rpm-td-invariants
kind: physics-theorem
title: TD spin and momentum norms
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional local consequences of the adopted neutral TD pole-dipole truncation: constant momentum norm and spin-tensor norm on the admissible domain, including the zero-spin geodesic branch. No continuation beyond loss of invertibility or timelikeness, global existence, or empirical adequacy is asserted."
empirical_premises: []
deps:
  - def-rpm-body-moments
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
  - lem-rpm-td-local-closure
  - post-rpm-mpd-truncation
dependency_roles:
  def-rpm-body-moments: formulation-prerequisite
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-rpm-td-local-closure: mathematical-premise
  post-rpm-mpd-truncation: physical-assumption
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 3, pole-dipole equations and the TD momentum–velocity relation; the local admissible-domain and conserved-norm proof is given in the mathematical closure lemma.
    - title: David Tong, General Relativity, Cambridge Part III lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 1.2.1, proper-time timelike geodesic equation; the zero-spin limit is derived conditionally from the adopted MPD truncation here.
verification: {}
---

## Statement

Adopt the neutral pole-dipole equations and local body moments of [[post-rpm-mpd-truncation]] and [[def-rpm-body-moments]]. Suppose a solution satisfies the TD condition $S^{ab}p_b=0$, with future timelike $p$, and remains in the local admissible region of [[lem-rpm-td-local-closure]] where $K$ is invertible and $W=K^{-1}p$ is future timelike. Then, on its local interval of existence,
$$\mu:=\sqrt{-g(p,p)}\quad\text{and}\quad \frac12S_{ab}S^{ab}$$
are constant. If the initial spin tensor is zero, it remains zero and the solution obeys
$$p=\frac{\mu}{c}U,\qquad D_\tau p=0,\qquad D_\tau U=0,$$
so the representative curve is a timelike geodesic with constant rest mass $M=\mu/c$. The claims stop if the local TD admissible region ends; no global extension follows.

## Facts & Assumptions

**Given:** The adopted neutral pole-dipole system, a future timelike momentum satisfying the TD supplementary condition, and a solution within the open region where the algebraically determined tangent is future timelike.

[A2] The TD condition holds initially, $K$ remains invertible, $W=K^{-1}p$ remains future timelike, and the solution stays in the local admissible region stated in the Statement; for the spinless clause, $S(\tau_0)=0$.

[A1] The neutral test-body pole-dipole equations are adopted as a finite-dimensional truncation, not derived from arbitrary stress-energy moments. [[post-rpm-mpd-truncation]]

[F1] On the TD admissible region, the local closure lemma preserves the TD constraint, momentum norm and spin-tensor norm; at zero spin it gives $p=(\mu/c)U$, $D_\tau p=0$, and $D_\tau U=0$. [[lem-rpm-td-local-closure]]

[F2] The variables $p,S$ are the local body moments defined by the stated transport convention; the theorem adds the TD condition. [[def-rpm-body-moments]]

[F3] For a future unit observer $n$, the rest space $n^\perp$ is three-dimensional and positive definite, with spatial projection $h_n$. [[def-gr-observer-and-rest-space]]; [[lem-gr-observer-projection-decomposition]]

## Proof

**Proof technique:** direct.

1.1 The equations in [A1] act on the moment variables defined in [F2] and are exactly the pole-dipole system assumed in [F1]. On the region [A2], [F1] gives preservation of $S^{ab}p_b=0$ and constancy of $\mu$ and $S_{ab}S^{ab}/2$ on the local solution. This is a conditional deduction within the adopted truncation. [given, A1, A2, F1, F2]

2.1 Suppose also $S(\tau_0)=0$. Step 1.1 preserves $C^a=S^{ab}p_b=0$ and the scalar $\frac12S_{ab}S^{ab}$, while the admissible region keeps $p$ future timelike. At each $\tau$, set $\mu=\sqrt{-g(p,p)}>0$, $e_0=p/\mu$, and $E:=e_0^\perp$; [F3] says $E$ is a three-dimensional positive-definite inner-product space. Take any basis $v_1,v_2,v_3$ of $E$ and form
$$e_1:=\frac{v_1}{\sqrt{g(v_1,v_1)}},\quad w_2:=v_2-g(v_2,e_1)e_1,\quad e_2:=\frac{w_2}{\sqrt{g(w_2,w_2)}},\quad w_3:=v_3-g(v_3,e_1)e_1-g(v_3,e_2)e_2,\quad e_3:=\frac{w_3}{\sqrt{g(w_3,w_3)}}.$$
The denominators are positive: positive definiteness gives $g(v_1,v_1)>0$, and linear independence of the $v_i$ makes $w_2,w_3$ nonzero. These formulas give an orthonormal basis of $E$; with $e_0$ they give an orthonormal basis of $T_{z(\tau)}M$. The TD constraint says $S^{ab}p_b=0$; since $p_b=(-\mu,0,0,0)$ in this basis, it gives $S^{a0}=0$, and antisymmetry also gives $S^{0a}=0$. Therefore
$$\frac12S_{ab}S^{ab}=\frac12\sum_{i,j=1}^3(S^{ij})^2\ge0,$$
with equality if and only if every component $S^{ij}$ vanishes, that is, $S=0$. Its conserved value is initially zero, so $S$ remains zero throughout the local solution. The zero-spin branch in [F1] now yields $p=(\mu/c)U$ and $D_\tau p=0$. Since [F1] also gives constant $\mu>0$, covariant differentiation of $U=(c/\mu)p$ gives $D_\tau U=0$. Therefore $z$ is a timelike geodesic in proper-time parametrization and $M=\mu/c$ is constant. No continuation outside the admissible region is supplied. [given, A2, F1, F2, F3, step 1.1, algebra] ∎

## Remarks

The conserved quantity is the tensor norm $S_{ab}S^{ab}/2$ on the local TD branch. For nonzero spin, conservation of that scalar alone does not assert that the tensor components are constant. The zero-spin conclusion uses the separate zero-spin solution branch, not an inference from a vanishing norm.
