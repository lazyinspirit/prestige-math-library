---
id: pthm-em-gauge-invariance
kind: physics-theorem
title: "Gauge invariance of the electric and magnetic fields"
domain: physics
status: draft
origin: pipeline
dependency_level: 16
deps: [def-em-gauge-transformation, def-em-potential-gauge-and-field-conventions, def-em-fields, lem-em-joint-smooth-potentials, thm-the-curl-of-a-gradient-vanishes, thm-clairaut-schwarz-mixed-partials, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-algebra-of-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-interval]
dependency_roles:
  def-em-gauge-transformation: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-fields: formulation-prerequisite
  lem-em-joint-smooth-potentials: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The gauge invariance of the field pair of the classical vacuum electromagnetic framework on a laboratory region: gauge related potential representations of the framework's fields, in the conventions of [[def-em-potential-gauge-and-field-conventions]], define the same electric and magnetic fields. The statement is conditional on the joint regularity of the pair and the generator; it contains no claim about the existence of generators meeting prescribed data, no empirical claim, and no assertion that a particular gauge is convenient or available."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§3.2.2 printed p. 48 and §5.3.1 printed pp. 105-106: A -> A + grad chi and phi -> phi - dchi/dt leave B = curl A and E = -grad phi - dA/dt unchanged"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§18 printed pp. 49-50: the replacement (18.3) does not change the electric and magnetic fields determined from (17.3)-(17.4); only gauge-invariant quantities have physical meaning"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§10.1.2 printed pp. 419-420: E and B are unchanged when A -> A + grad lambda and V -> V - dlambda/dt"
verification:
  precheck: pass
---

## Statement

Let $c>0$, let $\Omega\subseteq\mathbb R^3$ be open, let $I\subseteq\mathbb R$ be an interval with at least two elements ([[def-interval]]), let $k\ge2$ be an integer, let $(\varphi,A)$ be a potential pair of class $C^k$ jointly on $\Omega\times I$ and let $\chi$ be a gauge function of class $C^k$ jointly on $\Omega\times I$, all in the conventions of [[def-em-potential-gauge-and-field-conventions]] and [[def-em-gauge-transformation]]: $E(\varphi,A)=-\nabla\varphi-\partial_tA$, $B(\varphi,A)=\operatorname{curl}A$ and $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$; for a non-open $I$ the joint $C^k$ classes are read in the open-neighbourhood restriction convention of [[lem-em-joint-smooth-potentials]] (for open $I$ this is the ordinary class of [[def-ck-euclidean-maps-and-diffeomorphisms]]).

Then $T_\chi(\varphi,A)$ is a potential pair of class $C^{k-1}$ jointly on $\Omega\times I$ and its field pair is the field pair of $(\varphi,A)$:

$$E(T_\chi(\varphi,A))=E(\varphi,A),\qquad B(T_\chi(\varphi,A))=B(\varphi,A)\qquad\text{on }\Omega\times I,$$

the common values being maps $\Omega\times I\to\mathbb R^3$ of class $C^{k-1}$ jointly, that is, fields of the framework in the sense of [[def-em-fields]]. In particular gauge related potential representations of one field pair have equal field pairs: the electric and magnetic fields are gauge invariants of the framework, and no value of $\varphi$, of $A$ or of $\chi$ is asserted to be observable.

The proof uses only the defining formulas, the vanishing of $\operatorname{curl}\nabla\chi$ for the $C^2$ function $\chi$ and the equality of the time-space mixed partials $\partial_t\partial_i\chi=\partial_i\partial_t\chi$; no Maxwell equation, no hypothesis on $\Omega$ beyond openness, and no choice principle is used.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^3$, an interval $I$ with at least two elements, $c>0$, an integer $k\ge2$, a jointly $C^k$ potential pair $(\varphi,A)$ and a jointly $C^k$ gauge function $\chi$ on $\Omega\times I$.

[F1] Potential-pair formulas: for a pair $(\varphi,A)$ of class $C^m$, $m\ge1$, $E(\varphi,A)=-\nabla\varphi-\partial_tA$ and $B(\varphi,A)=\operatorname{curl}A$ are of class $C^{m-1}$; for $m\ge2$, the transform of a $C^m$ pair by a $C^m$ gauge function is $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ and is of class $C^{m-1}$ ([[def-em-potential-gauge-and-field-conventions]]); for a non-open $I$ the joint classes and the componentwise computations are read in the open-neighbourhood restriction convention of [[lem-em-joint-smooth-potentials]], whose relative time derivatives at included endpoints reproduce the two identities below pointwise on $\Omega\times I$.

[F2] Framework vocabulary: a potential representation of a field pair is a potential pair with that field pair, a gauge function of class $C^m$ has $m\ge2$, two pairs are gauge related when one is the gauge transform of the other, and the field pair of a representation is its physical content ([[def-em-gauge-transformation]]).

[F3] Linearity of the curl: for $C^1$ fields $F,G$ and reals $\alpha,\beta$ one has $\operatorname{curl}(\alpha F+\beta G)=\alpha\operatorname{curl}F+\beta\operatorname{curl}G$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F4] For a $C^2$ scalar function $\chi$ the field $\nabla\chi$ is $C^1$ and $\operatorname{curl}\nabla\chi=0$ ([[thm-the-curl-of-a-gradient-vanishes]]).

[F5] For a $C^2$ function on an open subset of $\mathbb R^m$ the mixed coordinate partial derivatives commute, so $\partial_t\partial_i\chi=\partial_i\partial_t\chi$ for the jointly $C^2$ function $\chi$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] Differentiability and class bookkeeping: sums of totally differentiable maps are totally differentiable with the sum of the derivatives and a map is of class $C^m$ when all its componentwise iterated partial derivatives up to order $m$ exist and are continuous, partial derivatives being one-variable derivatives along coordinate lines ([[thm-algebra-of-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]).

[F7] The electric and magnetic fields of the framework are maps $\Omega\times I\to\mathbb R^3$ at fixed time, read in the frame basis with the stated regularity and polar/axial conventions ([[def-em-fields]]).

## Proof

**Proof technique:** direct; compute the two field formulas of the transformed pair and use the vanishing curl of a gradient and the commutativity of mixed partials.

1.1 The transformed pair and its class. The partial derivatives $\partial_t\chi$ and $\nabla\chi$ of the jointly $C^k$ function $\chi$ are jointly $C^{k-1}$, and the pair members $\varphi$ and $A$ are jointly $C^k$, hence jointly $C^{k-1}$; by the closure of the class under sums and the componentwise reading of [F6], the maps $\varphi-\partial_t\chi$ and $A+\nabla\chi$ are jointly $C^{k-1}$, so $T_\chi(\varphi,A)$ is a potential pair of class $C^{k-1}$ in the sense of [F1] and [F2]. Since $k-1\ge1$, its field pair is defined by [F1]. [given, F1, F2, F6]

1.2 Magnetic field. $\operatorname{curl}(A+\nabla\chi)=\operatorname{curl}A+\operatorname{curl}\nabla\chi$ by the linearity of the curl [F3]; the function $\chi$ is jointly $C^k$ with $k\ge2$, hence jointly $C^2$, so $\operatorname{curl}\nabla\chi=0$ by [F4]; therefore $B(T_\chi(\varphi,A))=\operatorname{curl}(A+\nabla\chi)=\operatorname{curl}A=B(\varphi,A)$ on $\Omega\times I$. [given, F1, F3, F4]

1.3 Electric field. Expanding with the definitions of [F1] and the componentwise linearity of the total derivative for sums [F6], $E(T_\chi(\varphi,A))=-\nabla(\varphi-\partial_t\chi)-\partial_t(A+\nabla\chi)=-\nabla\varphi-\partial_tA+\nabla\partial_t\chi-\partial_t\nabla\chi=E(\varphi,A)+(\nabla\partial_t\chi-\partial_t\nabla\chi)$. The bracket vanishes componentwise: its $i$-th component is $\partial_i\partial_t\chi-\partial_t\partial_i\chi$, and the jointly $C^2$ function $\chi$ has commuting mixed partials by [F5]. Hence $E(T_\chi(\varphi,A))=E(\varphi,A)$ on $\Omega\times I$. [given, F1, F5, F6]

2.1 Conclusion. Step 1.1 shows that the transform is a potential pair of class $C^{k-1}$; steps 1.2 and 1.3 show that its magnetic and electric fields equal those of $(\varphi,A)$, and by [F1] both are jointly $C^{k-1}$, hence framework fields of the shape recorded in [F7]. Gauge relatedness of two pairs means exactly that one is the transform of the other by some gauge function [F2], so gauge related representations have equal field pairs, and the only physical content attached to a representation in [F2] is its field pair. No Maxwell equation, domain hypothesis beyond openness, or choice principle was used. [step 1.1, step 1.2, step 1.3, F1, F2, F7] ∎

## Remarks

- **Why $k\ge2$ and not $k\ge1$.** The scalar identity uses $\operatorname{curl}\nabla\chi=0$, which needs $\chi$ to be $C^2$, and the electric identity uses the symmetry of the second mixed partial of $\chi$. For a merely $C^1$ generator the two field expressions are still formally equal, but the intermediate quantities $\operatorname{curl}\nabla\chi$ and the mixed partials are then not defined.
- **No converse.** The theorem says gauge transformations do not change the fields. Which potential pairs represent the same field pair, and which gauge conditions are reachable, are separate questions treated elsewhere on this page.
