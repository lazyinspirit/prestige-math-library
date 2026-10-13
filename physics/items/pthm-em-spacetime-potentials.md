---
id: pthm-em-spacetime-potentials
kind: physics-theorem
title: "Smooth scalar and vector potentials on a star-shaped space-time region"
domain: physics
status: published
origin: pipeline
dependency_level: 14
deps: [lem-em-joint-smooth-potentials, post-em-vacuum-maxwell, def-em-potential-gauge-and-field-conventions, def-em-fields, def-star-shaped-open-subset-of-rn, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-divergence-and-curl-of-a-c1-vector-field, def-directional-and-partial-derivatives, thm-clairaut-schwarz-mixed-partials, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-algebra-of-derivatives, thm-the-divergence-of-a-curl-vanishes, thm-the-curl-of-a-gradient-vanishes]
dependency_roles:
  lem-em-joint-smooth-potentials: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The fields and potentials of the classical vacuum electromagnetic framework of [[def-em-fields]], [[post-em-vacuum-maxwell]] and [[def-em-potential-gauge-and-field-conventions]] on a single inertial laboratory region over a star-shaped spatial region. The only physical hypothesis used is the pair of source-free Maxwell equations (absence of magnetic charge and Faraday's law) as adopted in the postulate; no source equation, no regularity beyond the stated joint class, and no assertion that the potentials are observable are included. The star-shaped hypothesis is a genuine restriction on the spatial region, and the companion examples exhibit a divergence-free field on a non-star-shaped region with no global vector potential."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§16 printed pp. 44-45 (the four-potential A_k and its relation to the scalar and vector potentials) and §17 printed pp. 46-48, equations (17.3)-(17.4): E = -grad phi - (1/c) dA/dt and H = curl A"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.3.1 printed pp. 105-106: the potential representation E = -grad phi - dA/dt, B = curl A as the general solution of the two source-free Maxwell equations"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§10.1.1 printed pp. 416-418: the potential formulation and the two inhomogeneous equations for V and A on which the potential representation rests"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $c>0$, let $k\ge2$ be an integer, let $\Omega\subseteq\mathbb R^3$ be an open set that is star-shaped with respect to a point $a\in\Omega$ ([[def-star-shaped-open-subset-of-rn]]), and let $I\subseteq\mathbb R$ be an interval with at least two elements ([[def-interval]]). Joint regularity on $\Omega\times I$ is read in the restriction convention of [[lem-em-joint-smooth-potentials]]: a map on $\Omega\times I$ is **jointly $C^m$** when it is the restriction of a $C^m$ map on some open neighbourhood of $\Omega\times I$ in $\mathbb R^4$. For open $I$ this is the ordinary open-domain class of [[def-ck-euclidean-maps-and-diffeomorphisms]] and agrees with the field class of [[def-em-fields]]; for non-open $I$ it is the convention that makes the statements below meaningful, and no time jet is asserted beyond the restricted values.

Let $E,B:\Omega\times I\to\mathbb R^3$ be jointly $C^k$ and satisfy the two source-free Maxwell equations of [[post-em-vacuum-maxwell]] pointwise on $\Omega\times I$:

$$\operatorname{div}B=0,\qquad\operatorname{curl}E=-\partial_tB,$$

with the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] and the partial derivative $\partial_t$ at fixed position of [[def-directional-and-partial-derivatives]] (at included endpoints of a non-open $I$, as relative derivatives in the restriction convention). Then there are a scalar potential $\varphi:\Omega\times I\to\mathbb R$ that is jointly $C^{k-1}$ and a vector potential $A:\Omega\times I\to\mathbb R^3$ that is jointly $C^k$, both in the restriction convention, with

$$B=\operatorname{curl}A,\qquad E=-\nabla\varphi-\partial_tA\qquad\text{on }\Omega\times I,$$

so that $(\varphi,A)$ is a potential pair whose field pair is $(E,B)$, in the vocabulary of [[def-em-potential-gauge-and-field-conventions]]. If $E$ and $B$ are jointly $C^\infty$, then $\varphi$ and $A$ may be chosen jointly $C^\infty$. Conversely, if $\varphi$ and $A$ are jointly $C^\infty$ on $\Omega\times I$ in the restriction convention and $E:=-\nabla\varphi-\partial_tA$, $B:=\operatorname{curl}A$ are their field pair, then $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ on $\Omega\times I$.

The theorem asserts existence on the stated star-shaped domain only: it claims no global potential on a general open set, no boundary, decay or growth condition on the potentials, and no uniqueness. Potentials are auxiliary objects of the framework and are not claimed to be observable.

## Facts & Assumptions

**Given:** A constant $c>0$, an integer $k\ge2$, an open set $\Omega\subseteq\mathbb R^3$ star-shaped with respect to $a\in\Omega$, an interval $I\subseteq\mathbb R$ with at least two elements, and fields $E,B:\Omega\times I\to\mathbb R^3$ that are jointly $C^k$ in the restriction convention and satisfy the two source-free equations of the Statement pointwise.

[F1] Joint regularity and radial witnesses: for an open star-shaped $U\subseteq\mathbb R^3$ with centre $a$ and a jointly $C^m$ field $B:U\times I\to\mathbb R^3$, $m\ge1$, with $\operatorname{div}B(\cdot,t)=0$ for every $t\in I$, the radial integral $A(x,t)=\int_0^1s\,B(a+s(x-a),t)\times(x-a)\,ds$ is jointly $C^m$ with $\operatorname{curl}A(\cdot,t)=B(\cdot,t)$ for every $t$; for a jointly $C^m$ field $C$ with $\operatorname{curl}C(\cdot,t)=0$ for every $t$ the negative radial scalar witness $\phi(x,t)=-\int_0^1\langle C(a+s(x-a),t),x-a\rangle\,ds$ is jointly $C^m$ with $\nabla\phi(\cdot,t)=-C(\cdot,t)$ for every $t$; jointly $C^\infty$ data give jointly $C^\infty$ witnesses; and the restriction convention carries the same conclusions at included endpoints of a non-open interval ([[lem-em-joint-smooth-potentials]]).

[F2] The smooth branch of the adopted vacuum Maxwell equations holds pointwise for jointly $C^1$ fields and contains, among its four equations, $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$; the postulate contains no magnetic charge ([[post-em-vacuum-maxwell]]).

[F3] Potential-pair vocabulary: for a potential pair $(\varphi,A)$ of class $C^m$, $m\ge1$, on an open set the electric and magnetic fields are $E(\varphi,A)=-\nabla\varphi-\partial_tA$ and $B(\varphi,A)=\operatorname{curl}A$, and both are of class $C^{m-1}$; the definition asserts no existence of potentials for a given field pair ([[def-em-potential-gauge-and-field-conventions]]).

[F4] Euclidean calculus: a map is of class $C^m$ when each component is, the class is closed under sums and compositions of class, and sums, scalar multiples and products of differentiable real functions obey the usual derivative rules ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-derivatives]]).

[F5] Linearity: for $C^1$ fields $F,G$ on an open $U\subseteq\mathbb R^3$ and reals $\alpha,\beta$, $\operatorname{curl}(\alpha F+\beta G)=\alpha\operatorname{curl}F+\beta\operatorname{curl}G$, and the divergence is likewise linear ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F6] Clairaut--Schwarz: for a $C^2$ function on an open subset of $\mathbb R^m$ mixed coordinate partial derivatives commute, so for a jointly $C^2$ field the time derivative of each spatial first partial derivative equals the spatial first partial derivative of the time derivative ([[thm-clairaut-schwarz-mixed-partials]]).

[F7] For a $C^2$ field on an open subset of $\mathbb R^3$ the divergence of its curl vanishes pointwise ([[thm-the-divergence-of-a-curl-vanishes]]).

[F8] For a $C^2$ scalar function on an open subset of $\mathbb R^3$ the curl of its gradient vanishes pointwise ([[thm-the-curl-of-a-gradient-vanishes]]).

[F9] The divergence of a $C^1$ field is $\operatorname{div}F=\sum_i\partial_iF_i$, the curl is $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$, the gradient is the tuple of first coordinate partial derivatives, and partial derivatives are one-variable derivatives along coordinate lines ([[def-divergence-and-curl-of-a-c1-vector-field]], [[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct; apply the radial vector witness to $B$, apply the radial scalar witness to the auxiliary field $E+\partial_tA$, and verify the converse by the standard curl and divergence identities.

1.1 Hypothesis check and vector step. The set $\Omega$ is open and star-shaped with centre $a$ and $I$ is an interval, and by [F2] the field $B$ is jointly $C^k$ with $\operatorname{div}B(\cdot,t)=0$ on $\Omega$ for every $t\in I$, the divergence being that of [F9]. Since $k\ge2\ge1$, the vector witness of [F1] applies and produces the field $A(x,t):=\int_0^1s\,B(a+s(x-a),t)\times(x-a)\,ds$, which is jointly $C^k$ on $\Omega\times I$ and satisfies $\operatorname{curl}A(\cdot,t)=B(\cdot,t)$ for every $t\in I$. [given, F1, F2, F9]

1.2 Converse. Let $\varphi$ and $A$ be jointly $C^\infty$ on $\Omega\times I$ and put $E:=-\nabla\varphi-\partial_tA$ and $B:=\operatorname{curl}A$. All functions are restrictions of $C^\infty$ maps on an open neighbourhood of $\Omega\times I$, so the identities below may be checked there and restricted. The field $A$ is $C^\infty$, hence $C^2$, and [F7] gives $\operatorname{div}B=\operatorname{div}\operatorname{curl}A=0$. For the curl of $E$, the linearity of the curl [F5] gives $\operatorname{curl}E=-\operatorname{curl}\nabla\varphi-\operatorname{curl}\partial_tA$; the first term vanishes by [F8] applied to the $C^2$ function $\varphi$, and for the second, the component formula of [F9] turns each coordinate of $\operatorname{curl}\partial_tA$ into a difference of mixed derivatives $\partial_t\partial_x$ and $\partial_x\partial_t$ of the $C^2$ components of $A$, which [F6] identifies, so $\operatorname{curl}\partial_tA=\partial_t\operatorname{curl}A=\partial_tB$. Hence $\operatorname{curl}E=-\partial_tB$ on $\Omega\times I$. [given, F5, F6, F7, F8, F9]

2.1 The auxiliary field $C:=E+\partial_tA$. The fields $E$ and $A$ are restrictions to $\Omega\times I$ of $C^k$ maps on a common open neighbourhood; the time partial derivative of each component of the $C^k$ map extending $A$ exists and is $C^{k-1}$ there by [F4] and [F9], and the class is closed under sums by [F4], so $C$ is jointly $C^{k-1}$ on $\Omega\times I$ in the restriction convention. [step 1.1, F1, F4, F9]

2.2 The auxiliary field is curl-free at every time. Fix $t\in I$. By linearity of the curl [F5] and the componentwise commutation of $\partial_t$ with the spatial partial derivatives of the jointly $C^2$ field $A$, which is [F6] applied to the component functions, $\operatorname{curl}C(\cdot,t)=\operatorname{curl}E(\cdot,t)+\partial_t(\operatorname{curl}A)(\cdot,t)$, the operators and the derivative being those of [F9]. By step 1.1, $\operatorname{curl}A(\cdot,t)=B(\cdot,t)$ as functions of the position variable, so $\partial_t(\operatorname{curl}A)(\cdot,t)=\partial_tB(\cdot,t)$; by [F2], $\operatorname{curl}E(\cdot,t)=-\partial_tB(\cdot,t)$. Substituting gives $\operatorname{curl}C(\cdot,t)=-\partial_tB(\cdot,t)+\partial_tB(\cdot,t)=0$. [step 1.1, F2, F5, F6, F9]

3.1 Scalar step and the pair identities. By step 2.1 the field $C$ is jointly $C^{k-1}$ with $k-1\ge1$, and by step 2.2 it satisfies $\operatorname{curl}C(\cdot,t)=0$ on $\Omega$ for every $t\in I$; the scalar witness of [F1] therefore gives the jointly $C^{k-1}$ function $\varphi(x,t):=-\int_0^1\langle C(a+s(x-a),t),x-a\rangle\,ds$ with $\nabla\varphi(\cdot,t)=-C(\cdot,t)$ for every $t\in I$. Since $C=E+\partial_tA$ by step 2.1, this reads $\nabla\varphi=-E-\partial_tA$, that is $E=-\nabla\varphi-\partial_tA$ on $\Omega\times I$; together with $\operatorname{curl}A=B$ from step 1.1 this exhibits $(\varphi,A)$ as a potential pair with field pair $(E,B)$ in the sense of [F3], with $\varphi$ jointly $C^{k-1}$ and $A$ jointly $C^k$. [step 1.1, step 2.1, step 2.2, F1, F3]

4.1 Smooth clause. If $E$ and $B$ are jointly $C^\infty$, the vector witness of [F1] applied to $B$ gives a jointly $C^\infty$ field $A$ with $\operatorname{curl}A=B$, the field $C=E+\partial_tA$ is jointly $C^\infty$ by the closure and differentiation rules of [F4], and the scalar witness of [F1] applied to $C$ gives a jointly $C^\infty$ scalar $\varphi$ with $\nabla\varphi=-C$; the identities of step 3.1 then hold with both potentials jointly $C^\infty$. [step 3.1, F1, F4]

5.1 Conclusion and bookkeeping. Steps 1.1 through 3.1 produce, for every integer $k\ge2$, a jointly $C^{k-1}$ scalar $\varphi$ and a jointly $C^k$ vector $A$ with $B=\operatorname{curl}A$ and $E=-\nabla\varphi-\partial_tA$ on $\Omega\times I$; step 4.1 supplies the jointly $C^\infty$ choice when the data are jointly $C^\infty$; and step 1.2 proves the converse implication. The construction used star-shapedness and the joint class only through the witnesses of [F1], used the source-free equations through [F2], and used the potential vocabulary of [F3]; no global potential on a general open set, no boundary or decay condition, no uniqueness and no observability claim is made, and at included endpoints of a non-open interval all conclusions are those of the restriction convention recorded in [F1]. [step 1.1, step 1.2, step 3.1, step 4.1, F1, F2, F3] ∎

## Remarks

- **The star-shaped hypothesis is substantive.** On a general open $\Omega$ the two source-free equations need not admit a global potential pair; the divergence-free radial witness of [F1] and its scalar companion both use the radial segments from the centre, and the companion examples page records the obstruction on a punctured region.
- **No uniqueness is claimed.** The witnesses of [F1] are single specimens. Gauge transformations preserving their fields and the domain hypotheses for a converse are analyzed later on this page; this existence theorem does not classify all representations of one field pair.
