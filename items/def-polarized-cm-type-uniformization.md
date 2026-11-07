---
id: def-polarized-cm-type-uniformization
kind: definition
title: "Polarized CM type and uniformization data"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-complex-abelian-variety-with-cm-type
  - def-complex-vector-space-lattice-and-torus
  - def-fractional-ideal
  - def-polarization-of-an-abelian-variety
  - def-field-norm-and-trace
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the algebraic polarization interface and is stated explicitly."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §§2–3"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Riemann forms and the type of a polarized CM abelian variety, printed pp. 18–24."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §§3.4–3.5"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "Classification and polarized CM types, printed pp. 15–23."
verification: {}
---

## Definition

Assume AC. Let $E$ be a CM field with type $\Phi$. Identify $E\otimes_{\mathbb Q}\mathbb R$ with $\mathbb C^\Phi$ by $x\otimes r\mapsto(r\varphi(x))_{\varphi\in\Phi}$, and for a fractional $O_E$-ideal $\mathfrak a$ write $\Phi(\mathfrak a)=\{(\varphi(x))_{\varphi\in\Phi}:x\in\mathfrak a\}$. Let $t\in E^\times$ satisfy $\bar t=-t$, $\operatorname{Im}\varphi(t)>0$ for every $\varphi\in\Phi$, and $\operatorname{Tr}_{E/\mathbb Q}(t\mathfrak a\overline{\mathfrak a})\subseteq\mathbb Z$. The tuple $(E,\Phi;\mathfrak a,t)$ defines the complex torus $(E\otimes_{\mathbb Q}\mathbb R)/\Phi(\mathfrak a)$ with integral Riemann form
$$\psi(x,y)=\operatorname{Tr}_{E/\mathbb Q}(t x\bar y)\qquad(x,y\in\mathfrak a).$$
These are **polarized CM type uniformization data**. When represented using an $E$-basis $e$ of rational homology, replacing it by $e'=b^{-1}e$ for $b\in E^\times$ changes the coordinates to $(\mathfrak a b,t/(b\bar b))$ while preserving the same form on the underlying lattice; the tuple depends on the basis choice and is not canonical. The term “polarized” here refers to the integral positive Riemann form and does not by itself assert projectivity of a higher-dimensional torus.

## Definition references

[[def-complex-abelian-variety-with-cm-type]]

[[def-complex-vector-space-lattice-and-torus]]

[[def-fractional-ideal]]

[[def-polarization-of-an-abelian-variety]]

[[def-field-norm-and-trace]]

## Facts & Assumptions

**Given:** A CM field $E$, CM type $\Phi$, fractional ideal $\mathfrak a$, and coefficient $t$ satisfying the stated conditions.

[A1] AC is retained from the algebraic polarization convention in the dependency closure. [[def-axiom-of-choice]]

[F1] The standard CM torus has complex structure determined by the embeddings in $\Phi$. [[def-complex-vector-space-lattice-and-torus]]

## Proof

1.1 Since $\bar t=-t$, conjugating the trace shows $\psi(y,x)=-\psi(x,y)$; hence the form is alternating. The trace-integrality hypothesis makes it integral on the lattice. [A1, F1, given, algebra]

1.2 In the $\Phi$-coordinate $z=x+iy$, $w=u+iv$ for one embedding, the alternating form is $2\operatorname{Im}(\varphi(t))(xv-yu)$. Substituting $J_\Phi w=iw$ gives $\psi(z,J_\Phi w)=2\operatorname{Im}(\varphi(t))(xu+yv)$, a symmetric positive-definite real form. Summing over $\Phi$ proves positivity. Replacing $e$ by $b^{-1}e$ sends $\mathfrak a$ to $\mathfrak a b$ and the coefficient to $t/(b\bar b)$; substitution into the trace formula leaves $\psi$ unchanged. Thus the tuple gives the same polarized uniformization. [F1, step 1.1, given, algebra] ∎

