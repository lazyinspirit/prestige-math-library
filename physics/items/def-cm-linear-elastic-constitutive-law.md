---
id: def-cm-linear-elastic-constitutive-law
kind: definition
title: "The small-strain isotropic linear elastic constitutive law and its strain energy"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-material-region-and-density, def-cm-euclidean-spatial-calculus, def-ck-euclidean-maps-and-diffeomorphisms, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-matrix-space, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-trace-of-a-square-matrix, def-euclidean-inner-product]
dependency_roles:
  def-cm-material-region-and-density: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 (linearized elasticity: strain, stress-strain relations and the elastic moduli)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.3 (Hooke's law: the two elastic moduli of an isotropic medium)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Definition

Let $B\subseteq\mathbb R^3$ be a material region ([[def-cm-material-region-and-density]]) and let $O\subseteq\mathbb R^3$ be open with $\overline B\subseteq O$. A **displacement field** on $B$ is a map $\xi:O\to\mathbb R^3$ of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); its total derivative $D\xi(X):\mathbb R^3\to\mathbb R^3$ at $X\in O$ is linear ([[def-total-derivative-in-euclidean-space]]) and has matrix $\bigl(\partial_j\xi_i(X)\bigr)$ ([[def-jacobian-matrix-and-gradient]]).

Write $\operatorname{Sym}(3):=\{A\in M_3(\mathbb R):A^{\mathsf T}=A\}$ for the real symmetric $3\times3$ matrices ([[def-matrix-space]], [[def-transpose-of-a-matrix]]) and $I_3$ for the identity ([[def-matrix-product-and-identity-matrix]]). The **linear strain** of the displacement field is the symmetric-matrix field

$$e(X):=\frac{D\xi(X)+D\xi(X)^{\mathsf T}}{2}\in\operatorname{Sym}(3),\qquad e_{ij}(X)=\frac{\partial_j\xi_i(X)+\partial_i\xi_j(X)}{2},$$

the symmetric part of the Jacobian matrix, and its **trace** is $\operatorname{tr}e=\sum_i\partial_i\xi_i$ ([[def-trace-of-a-square-matrix]]). The **Frobenius inner product** of $A,C\in M_3(\mathbb R)$ is $\langle A,C\rangle_F:=\operatorname{tr}(A^{\mathsf T}C)=\sum_{i,j}A_{ij}C_{ij}$, with squared norm $|A|_F^2=\langle A,A\rangle_F$ ([[def-euclidean-inner-product]]); the **deviatoric part** of $e$ is

$$e_0:=e-\frac{\operatorname{tr}e}{3}I_3 .$$

An **isotropic linear elastic constitutive law** is a pair $(\lambda,\mu)\in\mathbb R\times\mathbb R$ of **Lamé parameters** with

$$\mu>0,\qquad \lambda+\frac{2\mu}{3}>0 .$$

Its **stress matrix field** is

$$\sigma(X):=\lambda(\operatorname{tr}e(X))I_3+2\mu\,e(X)\in\operatorname{Sym}(3),$$

and its **strain-energy density** is the real function of $e$

$$W(e):=\frac{\lambda}{2}(\operatorname{tr}e)^2+\mu\operatorname{tr}(e^2).$$

## Remarks

- These data are an **adopted constitutive model**, not a consequence of the balance laws of this collection. The pair $(\lambda,\mu)$ and the linear relation between $e$ and $\sigma$ are model parameters and model structure; no physical material is asserted to obey them, and no measurement of $\lambda$ or $\mu$ is asserted by this definition.

- The matrix $\sigma$ is symmetric for every displacement field because $e$ is symmetric; symmetry of the stress is thus automatic in this model branch and does not require the separate angular-momentum balance. This is a property of the model, not a general theorem about stress.

- The hypotheses $\mu>0$ and $\lambda+2\mu/3>0$ are exactly the positivity hypotheses proved sufficient for $W\ge0$ with equality only at $e=0$ in the companion item; the constitutive definition itself assumes only these inequalities and makes no further definiteness claim.

- Units are not part of the definition. A physical reading assigns length units to $\xi$ and hence dimensionless strain and a stress unit to $\sigma$; the mathematical statements below use the matrices alone, and any unit convention belongs to a consuming model.
