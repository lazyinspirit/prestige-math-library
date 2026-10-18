---
id: rem-preprojective-coha-and-nakajima-action-source-boundaries
kind: remark
title: "Source-reported preprojective CoHA actions and their type boundaries"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yaping Yang and Gufang Zhao, The cohomological Hall algebra of a preprojective algebra, §§0.1–0.4, 5.1–5.6, and 7–8"
      url: "https://arxiv.org/pdf/1407.7994v6"
    - title: "Hiraku Nakajima, Introduction to quiver varieties—for ring and representation theorists, §§2–4"
      url: "https://arxiv.org/pdf/1611.10000v1"
verification:
  precheck: n/a
---

## Source-reported scope

For a finite quiver $Q$, its **double** adds an opposite arrow $h^*$ for
each arrow $h$. The **preprojective algebra** is the path algebra of the
double modulo the vertex moment-map relations
$\sum_{h:\,t(h)=i}\epsilon(h)B_hB_{h^*}=0$, with the sign fixed by an
orientation of the original arrows. A **framed Nakajima variety**
$\mathfrak M(\mathbf v,\mathbf w)$ is the geometric quotient of the
stable locus of framed doubled-quiver representations satisfying the
corresponding moment-map equation; stability $\theta^+$, framing dimensions
$\mathbf w$, and the cohomology theory are part of the input.

Yang–Zhao report that for a finite quiver and an algebraic oriented cohomology
theory $A$ with the formal-group-law and torus-action hypotheses in their
§§1.1 and 3.1, the preprojective CoHA
$
P_A(Q)=\bigoplus_{\mathbf v}
A^*_{G_{\mathbf v}\times\mathbb G_m^2}
(\mu_{\mathbf v}^{-1}(0))
$
is associative and acts on the $A$-homology of
$\mathfrak M(\mathbf v,\mathbf w)$ with the fixed positive stability
$\theta^+$ (their Theorems A and B). This action statement is for arbitrary
finite $Q$ in their stated setup.

Their Yangian comparison is a narrower result. With Chow theory, no edge
loops, the Euler–Ringel sign twist
$
\widetilde m_{\mathbf v_1,\mathbf v_2}
=(-1)^{(\mathbf v_2,C\mathbf v_1)+1}m_{\mathbf v_1,\mathbf v_2},
\qquad C=I-A_D,
$
the spherical extension, specialization $t_1=t_2=\hbar/2$, and quotient by
the specified torsion, Yang–Zhao prove a surjection from the positive Borel
of the quiver Yangian; it is an isomorphism for simply-laced ADE quivers, and
the isomorphism intertwines the stated Nakajima-variety action (Theorems D
and 8.3). Here ADE means the underlying graph is a finite Dynkin diagram of
type $A,D,$ or $E$. The Yangian is the algebra defined in their §8.

Nakajima’s ordinary Kac–Moody action uses a finite quiver with no edge loops.
It acts on the Borel–Moore homology of the Lagrangian core of the framed
quiver variety and gives an integrable highest-weight representation with
highest weight $\mathbf w$ (Theorem 17 of the review, referring to the
original papers). The review omits the geometric proof of the Lagrangian
theorem and refers the action relations to those original papers.

These are source reports with their stated conventions and hypotheses. This
Remark supplies no local action theorem, Yangian comparison, or logical
supplier; no general CoHA–Yangian identification follows from the untwisted
associativity theorem.
