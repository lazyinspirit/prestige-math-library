---
id: ex-geodesic-flow-as-a-hamiltonian-flow-on-the-cotangent-bundle
kind: example
title: Geodesic flow as a Hamiltonian flow on the cotangent bundle
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian", "thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians", "thm-fundamental-theorem-of-riemannian-geometry"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 3, Application to Geodesic Flow, pp. 24--25; Lecture 19, pp. 114--116
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For a supplied Riemannian manifold $(Q,g)$,
the Hamiltonian

$$H(q,p)=\frac12g_q^{-1}(p,p)$$

on $T^*Q$ generates geodesic flow: under $g^\flat:TQ\to T^*Q$, its
Hamiltonian trajectories are precisely the tangent lifts
$(q(t),\dot q(t))$ of affinely parametrized geodesics.

## Facts & Assumptions

**Given:** A smooth Riemannian metric $g$.

[F1] The metric has a unique Levi–Civita connection. [[thm-fundamental-theorem-of-riemannian-geometry]].

[F2] The natural Lagrangian with zero potential has Legendre map $g^\flat$ and the displayed Hamiltonian. [[prop-natural-mechanical-lagrangian-gives-kinetic-plus-potential-hamiltonian]].

[F3] Under the stated choice assumption, the Legendre map bijects Euler–Lagrange and Hamiltonian trajectories. [[thm-equivalence-of-euler-lagrange-and-hamilton-equations-for-hyperregular-lagrangians]].

## Verification

**Proof technique:** direct.

1.1 For $L(q,v)=\frac12g_q(v,v)$, [F2] gives $\mathbb FL=g^\flat$ and $H=\frac12g^{-1}(p,p)$. The Euler–Lagrange equation of this kinetic-energy Lagrangian is the coordinate equation $\ddot q^k+\Gamma^k_{ij}\dot q^i\dot q^j=0$ for the Levi–Civita connection in [F1], hence is $\nabla_{\dot q}\dot q=0$. [F1, F2, algebra]

2.1 By [F3], $(q,\dot q)$ solves that geodesic equation exactly when $(q,p)=(q,g^\flat\dot q)$ is a Hamiltonian trajectory of $H$. Thus the two flows correspond wherever their maximal trajectories exist; no completeness of $g$ is asserted. [F3, step 1.1] ∎
