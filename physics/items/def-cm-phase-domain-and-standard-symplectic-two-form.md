---
id: def-cm-phase-domain-and-standard-symplectic-two-form
kind: definition
title: "A phase domain, its canonical one-form and its standard symplectic two-form"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-smooth-differential-k-form, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-metric-topology, thm-local-coordinate-formula-for-the-exterior-derivative, def-tautological-one-form-on-a-cotangent-bundle]
dependency_roles:
  def-smooth-differential-k-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  def-tautological-one-form-on-a-cotangent-bundle: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.1 (Hamilton's equations and canonical coordinates: lambda = sum p_i dq^i, omega = sum dq^i wedge dp_i), printed pages 80-88"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2 (Hamiltonian mechanics in phase space and the symplectic structure)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$. A **phase domain** is a nonempty open set $U\subseteq\mathbb R^{2n}$
([[def-metric-topology]]). Its points are written $z=(q,p)$ with
$q=(q^1,\dots,q^n)\in\mathbb R^n$ and $p=(p_1,\dots,p_n)\in\mathbb R^n$; the coordinate functions
$q^i,p_i:U\to\mathbb R$ are smooth ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and
$\partial_{q^1},\dots,\partial_{q^n},\partial_{p_1},\dots,\partial_{p_n}$ is the coordinate frame
([[def-directional-and-partial-derivatives]]). On a phase domain:

1. the **canonical one-form** is the smooth one-form
   $\lambda_U:=\sum_{i=1}^n p_i\,dq^i\in\Omega^1(U)$;
2. the **standard symplectic two-form** is the smooth two-form
   $\omega_U:=\sum_{i=1}^n dq^i\wedge dp_i\in\Omega^2(U)$
   ([[def-smooth-differential-k-form]]);
3. the **standard symplectic matrix** is the block matrix
   $$J:=\begin{pmatrix}0_n&I_n\\-I_n&0_n\end{pmatrix}\in M_{2n}(\mathbb R),$$
   whose blocks are $n\times n$.

The identity $\omega_U=-d\lambda_U$ holds, because the coordinate formula for the exterior
derivative ([[thm-local-coordinate-formula-for-the-exterior-derivative]]) gives
$d\lambda_U=\sum_i dp_i\wedge dq^i=-\sum_i dq^i\wedge dp_i$. When $U$ is an induced chart domain of a
cotangent bundle, the published [[def-tautological-one-form-on-a-cotangent-bundle]] identifies
$\lambda_U$ and $\omega_U$ with the tautological one-form and the canonical cotangent two-form in
those coordinates; the present definition is the choice-free local coordinate model that the
canonical-calculus items of this page use.
