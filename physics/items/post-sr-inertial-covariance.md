---
id: post-sr-inertial-covariance
kind: postulate
title: "Adopted inertial covariance of the model equations"
status: published
origin: session
domain: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-algebraic-dual-and-linear-functional, def-type-r-s-tensor-on-a-finite-dimensional-vector-space, thm-operator-invertible-iff-determinant-nonzero]
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-algebraic-dual-and-linear-functional: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  thm-operator-invertible-iff-determinant-nonzero: mathematical-premise
physical_scope: "Flat classical spacetime with ideal events; inertial descriptions related by affine maps preserving eta, orientation and the future cone. Excludes gravity (no curvature), global accelerated-frame structure, and quantum effects. Covariance is claimed only for the mechanical and electromagnetic model equations specified in this framework."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Postulate

Adopt as physical assumptions of the special-relativity framework the following
two statements.

**(i) Spacetime.** The oriented time-oriented affine Minkowski space
$(A,V,\eta,C^+)$ of [[def-sr-affine-minkowski-model]] is the spacetime of the
framework. Its points represent idealized physical events; the displacement
$q-p$ of two events represents an idealized spacetime separation of those
events; and the sign of $\eta(q-p,q-p)$ plus the chosen component $C^+$ is the
adopted causal structure: the timelike, null, spacelike, future-causal and
past-causal classifications of displacements are those of
[[def-causal-classification-of-lorentz-vectors]] and
[[def-time-orientation-and-future-causal-sets]].

**(ii) Inertial changes of description.** Write $F:A\to A$ for a map for which
there is a linear map $L:V\to V$ satisfying

$$F(q)-F(p)=L(q-p)\qquad\text{for all }p,q\in A .$$

Such an $L$ is unique when it exists: for each $v\in V$ and any fixed $p\in A$,
applying the display to the pair $(p,p+v)$ gives $Lv=F(p+v)-F(p)$, so the value
$Lv$ is determined by $F$. An **inertial change of description** is such a map
$F$ whose linear part $L$ satisfies

$$\eta(Lv,Lw)=\eta(v,w)\quad\text{for all }v,w\in V,\qquad \det L=+1\ \text{relative to the fixed orientation of }V,\qquad L(C^+)=C^+ .$$

The condition $\det L=1\ne0$ makes $L$ invertible by
[[thm-operator-invertible-iff-determinant-nonzero]]. Fix $p_0\in A$; then
$F(p)=F(p_0)+L(p-p_0)$ by the affine condition, and the map
$r\mapsto p_0+L^{-1}(r-F(p_0))$ is its inverse, so $F$ is a bijection.

For clarity, the induced transformation of tensors has the following precise
meaning. The **algebraic dual** $V^*$ is the vector space of linear maps
$\alpha:V\to\mathbb R$ ([[def-algebraic-dual-and-linear-functional]]).
For integers $r,s\ge0$, a **type $(r,s)$ tensor** is a map
$T:(V^*)^r\times V^s\to\mathbb R$ linear in each argument; write
$\mathcal T^r_s(V)$ for their vector space with pointwise operations
([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]). A **tensor
field** here is an assignment $T:A\to\mathcal T^r_s(V)$; each particular
model specifies its tensor types, domains and required regularity. Its
transformed field is defined by

$$(F_*T)_{F(p)}(\alpha_1,\ldots,\alpha_r,w_1,\ldots,w_s):=T_p(\alpha_1\circ L,\ldots,\alpha_r\circ L,L^{-1}w_1,\ldots,L^{-1}w_s).$$

This is well defined since $F$ is bijective and all slot maps are linear;
for a restricted domain $D\subseteq A$ the new domain is $F(D)$. In particular
scalar fields transform by composition with $F^{-1}$ and vector fields by
$v_p\mapsto Lv_p$ at $F(p)$, since $\alpha(Lv_p)=(\alpha\circ L)(v_p)$.

Adopt the assumption that every solution configuration of each specified
mechanical or electromagnetic model is carried to a solution of that same
model by relabelling events with $F$ and applying the displayed transformations
to its fields and displacements. This is the meaning of **covariance** here;
which equations and admissible configurations constitute a model is specified
when that model is introduced.

## Status, scope and limitations

- **Adopted, not deduced.** Both clauses are adopted assumptions of the
  framework. They are not deduced from experiment in this item, and they are
  not derived from the verbal postulates of Einstein; together with the
  ideal-clock and ideal-light assumptions of the companion postulate they fix
  the framework's physical interpretation.
- **What covariance is claimed for.** Clause (ii) asserts covariance only for
  the equations of the mechanical and electromagnetic models developed in this
  framework from the present primitives. It does not select a force law, a
  matter model or an equation of motion, and it does not assert that every
  conceivable equation written in the coordinates of the model is covariant;
  a previously adopted background structure would not be excluded by a purely
  syntactic covariance test. The formulation is a constraint on the form of the
  models, not a derivation of dynamics.
- **Scope.** The scope of the assumption is flat classical spacetime with
  idealized events and inertial descriptions only: gravitational effects (no
  curvature of the affine model is introduced), globally accelerated or
  rotating frame structure, and quantum effects are outside it. The companion
  item [[post-sr-ideal-clocks-and-light]] states the corresponding ideal-clock
  and ideal-light assumptions.
- **No claim about nature.** Covariance of the model equations under the maps
  above is a property of the specified model. It carries no claim that the
  physical world is exactly described by the model, and experimental agreement
  with a model prediction would be evidence about the specified model rather
  than a proof of this postulate.
