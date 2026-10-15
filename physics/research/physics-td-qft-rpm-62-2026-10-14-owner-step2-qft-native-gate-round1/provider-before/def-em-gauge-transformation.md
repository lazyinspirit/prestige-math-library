---
id: def-em-gauge-transformation
kind: definition
title: "Potential representations, gauge transformations and the Lorenz and Coulomb conditions"
domain: physics
status: published
origin: pipeline
dependency_level: 15
deps: [def-em-potential-gauge-and-field-conventions, def-em-lab-geometry, def-em-fields, def-em-si-conventions, pthm-em-spacetime-potentials, lem-em-joint-smooth-potentials, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-derivatives]
dependency_roles:
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  pthm-em-spacetime-potentials: physical-result
  lem-em-joint-smooth-potentials: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The auxiliary potential vocabulary of the framework: potential representations of the adopted field pairs of [[def-em-fields]], their gauge transformations and the two named gauge conditions, in the single inertial laboratory chart. The item records that only the field pair is physical content and that the definition asserts no existence of representations (a separate theorem does, under its own hypotheses) and no reachability of a gauge condition (a separate PDE conclusion with its own domain and data hypotheses). No empirical claim is made and no convention of another unit system or framework is imported."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§3.2.2 printed pp. 48-49 (the gauge transformation A' = A + grad chi and the use of chi to adjust the divergence) and §5.3.1 printed pp. 105-106, eq. (5.13): phi -> phi - dchi/dt, A -> A + grad chi, with chi = chi(x,t)"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§18 printed pp. 49-50, eqs. (18.1) and (18.3): the four-potential transformation A'_k = A_k - df/dx^k, equivalently A' = A + grad f and phi' = phi - (1/c) df/dt, with f an arbitrary function of the coordinates and the time; the fields are unchanged and only gauge-invariant quantities have physical meaning"
verification:
  precheck: pass
---

## Definition

Let $c>0$, let $U\cong I\times\Omega$ be the laboratory region of [[def-em-lab-geometry]] with its restricted inertial chart, let fields and units be those of [[def-em-fields]] and [[def-em-si-conventions]], and let the scalar-vector potential vocabulary on that region be that of [[def-em-potential-gauge-and-field-conventions]]: a **potential pair** $(\varphi,A)$ of class $C^k$ on $\Omega\times I$ consists of $\varphi:\Omega\times I\to\mathbb R$ and $A:\Omega\times I\to\mathbb R^3$ of class $C^k$ jointly in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]], and for a non-open time interval $I$ the joint classes in this item are read in the open-neighbourhood restriction convention of [[lem-em-joint-smooth-potentials]] (for open $I$ this is the ordinary class of [[def-ck-euclidean-maps-and-diffeomorphisms]]); for $k\ge1$ the **field pair** is

$$E(\varphi,A):=-\nabla\varphi-\partial_tA,\qquad B(\varphi,A):=\operatorname{curl}A,$$

where $\nabla$ is the gradient, $\operatorname{div}$ and $\operatorname{curl}$ are those of [[def-divergence-and-curl-of-a-c1-vector-field]], and $\partial_t$ is the partial derivative at fixed position of [[def-directional-and-partial-derivatives]]. For $k\ge1$ the **Lorenz divergence** of the pair is $G(\varphi,A):=\operatorname{div}A+c^{-2}\partial_t\varphi$. The definitions in this item are stated on the laboratory region; the framework's fields are those of [[def-em-fields]]. No field equation is required to define the vocabulary; the existence theorem recalled in (a) has the additional hypotheses stated there.

(a) [Representations] Let $k\ge2$ be an integer and let $(E,B)$ be a field pair of class $C^{k-1}$ on $\Omega\times I$, meaning $E,B:\Omega\times I\to\mathbb R^3$ of class $C^{k-1}$ jointly as in [[def-em-fields]]. A **potential representation of class $C^k$** of $(E,B)$ is a potential pair $(\varphi,A)$ of class $C^k$ on $\Omega\times I$ whose field pair is $(E,B)$, that is, $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ on $\Omega\times I$. More generally, a potential pair of class $C^1$ represents a specified field pair whenever these two identities hold, even if the fields have greater regularity than the defining derivatives alone guarantee. This definition asserts neither existence nor uniqueness. When $\Omega$ is open and star-shaped, $I$ is an interval with at least two elements, and the jointly $C^r$ field data, $r\ge2$, satisfy $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ pointwise on $\Omega\times I$, [[pthm-em-spacetime-potentials]] supplies $\varphi\in C^{r-1}$ and $A\in C^r$ in the stated restriction convention, and smooth potentials for smooth data satisfying the same equations; it does not assert a $C^r$ scalar potential for merely $C^r$ data. Equality of field pairs does not by itself assert gauge relatedness on an arbitrary region; a converse needs its own domain and regularity hypotheses.

(b) [Gauge functions and gauge equivalence] A **gauge function** of class $C^m$, $m\ge2$, on $\Omega\times I$ is a function $\chi:\Omega\times I\to\mathbb R$ of class $C^m$ jointly; its **gauge transformation** sends a potential pair $(\varphi,A)$ of class $C^m$ to

$$T_\chi(\varphi,A):=(\varphi-\partial_t\chi,\ A+\nabla\chi),$$

a potential pair of class $C^{m-1}$. Two potential pairs are **gauge related** when one is the gauge transform of the other by some gauge function. On pairs and generators of class $C^\infty$, $T_0$ is the identity and $T_{\chi_1}\bigl(T_{\chi_2}(\varphi,A)\bigr)=T_{\chi_1+\chi_2}(\varphi,A)$ for all $C^\infty$ generators $\chi_1,\chi_2$; hence gauge relatedness is an equivalence relation on the $C^\infty$ potential pairs, the inverse of $T_\chi$ being $T_{-\chi}$. For a fixed finite class the transform drops one order, and relatedness is used only through the transform it records.

(c) [Conditions] A potential pair is **in Lorenz gauge** on $\Omega\times I$ when $G(\varphi,A)=\operatorname{div}A+c^{-2}\partial_t\varphi=0$ throughout $\Omega\times I$, and **in Coulomb gauge** in the chosen spatial chart when $\operatorname{div}A=0$ throughout $\Omega\times I$. These are properties of a pair in the stated conventions. The existence of a gauge function achieving either condition, with or without prescribed initial or boundary data, is a separate PDE conclusion with its own hypotheses and is not asserted by this definition.

(d) [Physical status] The physical content of a representation is its field pair $(E,B)$ of [[def-em-fields]]; the values of $\varphi$, of $A$ and of any gauge function are convention dependent and are auxiliary, and gauge related representations have the same field pair. The scalar potential $\varphi$ carries the volt, the vector potential $A$ carries the tesla metre, and a gauge function carries V s $=$ T m$^2$, so its time derivative and gradient have the units of $\varphi$ and $A$, respectively, consistently with [[def-em-si-conventions]]. No value of $\varphi$ or $A$ is by itself an observable or evidence for a field.

## Remarks

- **The composition identity is forced by linearity.** Componentwise, $\partial_t(\chi_1+\chi_2)=\partial_t\chi_1+\partial_t\chi_2$ and $\nabla(\chi_1+\chi_2)=\nabla\chi_1+\nabla\chi_2$, because partial derivatives are one-variable derivatives ([[def-directional-and-partial-derivatives]]) and differentiation is additive ([[thm-algebra-of-derivatives]]); substituting into $T_{\chi_1}(T_{\chi_2}(\varphi,A))$ gives $T_{\chi_1+\chi_2}(\varphi,A)$. Reflexivity is $T_0=\mathrm{id}$, and symmetry is the inverse $T_{-\chi}$, with $\chi$ and $-\chi$ of the same class. No choice principle is used by the composition computation.
- **What is deliberately absent.** This is a vocabulary and bookkeeping definition: it draws no conclusion that a pair can be put in either gauge, no statement about prescribed boundary or initial data, and no Maxwell equation. The two gauge conditions are recorded as properties, not as achievable normal forms.
- **Signs and spelling.** The signs $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$ and $\varphi-\partial_t\chi$ are the conventions of [[def-em-potential-gauge-and-field-conventions]]; a different sign convention would produce a different but equivalent calculus. *Lorenz* here refers to Ludvig Lorenz; the condition is the coordinate form of $\partial_\mu A^\mu=0$ under these conventions and is not a consequence of any field equation.
