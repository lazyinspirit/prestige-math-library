---
id: ex-em-pure-gauge-fields
kind: example
title: "Nonzero pure-gauge potentials representing the zero field pair"
domain: physics
status: published
origin: pipeline
dependency_level: 17
deps: [pthm-em-gauge-invariance, def-em-gauge-transformation, def-em-potential-gauge-and-field-conventions, def-em-fields, lem-em-joint-smooth-potentials, thm-the-curl-of-a-gradient-vanishes, def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-interval]
dependency_roles:
  pthm-em-gauge-invariance: physical-result
  def-em-gauge-transformation: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-fields: formulation-prerequisite
  lem-em-joint-smooth-potentials: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An example of gauge representations of the zero field pair: the full linear-generator family includes the zero potential pair at zero parameters and nonzero constant pairs at nonzero parameter tuples. An explicit nonzero witness demonstrates noninjectivity of the potential-to-field map. It asserts no source model, Maxwell equation, empirical situation or observable potential value."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§18 printed p. 50: the addition of constants to the vector and scalar potentials does not affect the field intensities, since E and H contain only derivatives of A and phi"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.3.1 printed pp. 105-106: the gauge transformation phi -> phi - dchi/dt, A -> A + grad chi with the fields unchanged"
verification:
  precheck: pass
---

## Example

Let $\Omega\subseteq\mathbb R^3$ be open and let $I\subseteq\mathbb R$ be an interval ([[def-interval]]); for a possibly non-open $I$, the joint classes below are read in the restriction convention of [[lem-em-joint-smooth-potentials]] (for open $I$ this is the ordinary class of [[def-ck-euclidean-maps-and-diffeomorphisms]]). Let $\chi:\Omega\times I\to\mathbb R$ be of class $C^2$ jointly. If $I$ is a singleton, choose one ambient $C^2$ extension as part of the data and define the potential pair and all its derivatives by the same ambient formulas before restriction; singleton values of $\chi$ alone do not determine these time derivatives. For an empty product all identities below are vacuous.

Then the pair

$$(\varphi,A):=T_\chi(0,0)=(-\partial_t\chi,\ \nabla\chi)$$

is a potential pair of class $C^1$ jointly on $\Omega\times I$ whose field pair is the zero field pair:

$$E(\varphi,A)=E(0,0)=0,\qquad B(\varphi,A)=\operatorname{curl}\nabla\chi=0\qquad\text{on }\Omega\times I$$

([[def-em-potential-gauge-and-field-conventions]]), the electric identity by the gauge invariance of [[pthm-em-gauge-invariance]] applied to the zero pair, whose field pair is $(0,0)$, and the magnetic identity also directly by [[thm-the-curl-of-a-gradient-vanishes]] for the $C^2$ function $\chi$.

All displayed quantities may be read as numerical SI components: $x$ in m, $t$ in s, $\chi$ in V s, $a$ in T m and $\beta$ in V, as in [[def-em-gauge-transformation]]; in particular $e_1$ below specifies a vector-potential component of one T m.

Explicit instance: for $a\in\mathbb R^3$, $\beta\in\mathbb R$ and $\chi(x,t)=a\cdot x-\beta t$ on $\mathbb R^3\times\mathbb R$, the pair is the constant pair $(\varphi,A)=(\beta,a)$, with $E=-\nabla\beta-\partial_t a=0$ and $B=\operatorname{curl}a=0$ by [[def-divergence-and-curl-of-a-c1-vector-field]] and the vanishing of all first derivatives of a constant ([[thm-algebra-of-total-derivatives]], [[def-directional-and-partial-derivatives]]). This pair is nonzero if and only if $(\beta,a)\ne(0,0)$; for $\beta=0$ and $a=0$ it is exactly the zero pair. To exhibit noninjectivity explicitly, take $\beta=0$ and $a=e_1=(1,0,0)$ on $\mathbb R^3\times\mathbb R$. Then $(\varphi,A)=(0,e_1)$ and $(0,0)$ are distinct potential pairs with the same zero field pair. Thus the map from potential pairs to field pairs of [[def-em-fields]] is not injective: nonzero potentials may represent the zero field pair (pure-gauge fields), and no nonzero value of $\varphi$ or $A$ alone is evidence for a nonzero field, consistently with [[pthm-em-gauge-invariance]] and [[def-em-gauge-transformation]]. The example is a statement about the representation of the zero field configuration; it asserts no Maxwell equation, no source configuration and no empirical situation.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^3$, an interval $I\subseteq\mathbb R$, a $C^2$ function $\chi$ on $\Omega\times I$ in the restriction convention, with a chosen ambient extension when $I$ is a singleton, the pair $(\varphi,A)=T_\chi(0,0)$, the parameters $a\in\mathbb R^3$, $\beta\in\mathbb R$ with $\chi(x,t)=a\cdot x-\beta t$ on $\mathbb R^3\times\mathbb R$, and the vector $e_1=(1,0,0)$.

[F1] Potential-pair vocabulary and gauge transform: the zero pair $(0,0)$ is a potential pair of class $C^m$ for every $m$; for a class $C^m$ pair and a class $C^m$ gauge function with $m\ge2$ the transform is $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$ and is a potential pair of class $C^{m-1}$; the field pair of a class $C^1$ pair $(\varphi,A)$ is $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$; the values of the potentials and of $\chi$ are auxiliary and no value is an observable ([[def-em-potential-gauge-and-field-conventions]], [[def-em-gauge-transformation]]).

[F2] Gauge invariance: on $\Omega\times I$ with $\Omega\subseteq\mathbb R^3$ open and $I$ an interval with at least two elements, in the stated restriction convention, if $(\varphi,A)$ is a potential pair of class $C^k$ jointly and $\chi$ a gauge function of class $C^k$ with $k\ge2$, then $T_\chi(\varphi,A)$ has the same field pair as $(\varphi,A)$ ([[pthm-em-gauge-invariance]]).

[F3] The curl of a gradient of a $C^2$ scalar function vanishes pointwise ([[thm-the-curl-of-a-gradient-vanishes]]).

[F4] Calculus of sums, constants and linear functions: partial derivatives are one-variable derivatives along coordinate lines, sums and scalar multiples of differentiable maps are differentiable with the corresponding derivatives, and every first partial derivative of a constant function or field is zero; for $\chi(x,t)=a\cdot x-\beta t$ the coordinate partial derivatives are $\partial_i\chi=a_i$ and $\partial_t\chi=-\beta$ ([[thm-algebra-of-total-derivatives]], [[def-directional-and-partial-derivatives]], [[def-divergence-and-curl-of-a-c1-vector-field]]).

[F5] Framework vocabulary: the electric and magnetic fields are the maps $\Omega\times I\to\mathbb R^3$ read in the frame basis with the stated regularity, and the potential-to-field assignment is that of the cited definitions ([[def-em-fields]]).

[F6] Restriction convention for a possibly non-open interval, and the classes it yields ([[lem-em-joint-smooth-potentials]]).

## Verification

**Proof technique:** direct; identify the transformed pair as the gauge transform of the zero pair, use gauge invariance for the zero field pair, recompute the constant instance, and exhibit the nonzero witness.

1.1 The general pure-gauge pair. The zero pair $(0,0)$ is a potential pair of class $C^2$ by [F1], and $\chi$ is a gauge function of class $C^2$, so the transform $T_\chi(0,0)=(-\partial_t\chi,\ \nabla\chi)$ is a potential pair of class $C^1$ by [F1]; its field pair is defined and, for a nondegenerate $I$, by [F2] with $k=2$ equals the field pair of $(0,0)$. For singleton $I$, apply [F2] on open spatial-time boxes in the chosen extension neighbourhood and then restrict the ambient pair and its jets to $\Omega\times I$; these local computations cover the singleton slice. For an empty product the identities are vacuous. That field pair is $E(0,0)=-\nabla0-\partial_t0=0$ and $B(0,0)=\operatorname{curl}0=0$ by [F1] and [F4], because all first derivatives of the constant zero pair vanish. Hence $E(\varphi,A)=0$; separately, $B(\varphi,A)=\operatorname{curl}\nabla\chi=0$ by [F3] applied to the $C^2$ function $\chi$. Thus every $C^2$ generator produces a pure-gauge pair, and the resulting field pair is the zero field pair of [F5]. [given, F1, F2, F3, F4, F6]

2.1 The constant instance. For $\chi(x,t)=a\cdot x-\beta t$ on $\mathbb R^3\times\mathbb R$, [F4] gives $\nabla\chi=a$ and $\partial_t\chi=-\beta$, so $(\varphi,A)=T_\chi(0,0)=(\beta,a)$ as constant maps on $\mathbb R^3\times\mathbb R$. For this constant pair, $E=-\nabla\beta-\partial_t a=0$ and $B=\operatorname{curl}a=0$ by [F1] and [F4]: the gradient of the constant scalar $\beta$ and the time derivative of the constant field $a$ vanish, and the curl of the constant field $a$ vanishes because each of its first partial derivatives is zero. [step 1.1, F1, F4]

3.1 The zero-parameter branch and the nonzero witness. The constant pair $(\beta,a)$ equals the zero pair $(0,0)$ if and only if $\beta=0$ and $a=0$, equality of maps on the nonempty set $\mathbb R^3\times\mathbb R$ being componentwise equality of the constants; at $\beta=0$, $a=0$ the generator is $\chi=0$ and $T_0$ is the identity by [F1], so the zero pair is recovered. Taking instead $\beta=0$ and $a=e_1$ gives a pair $(\varphi,A)=(0,e_1)$ that is not the zero pair, while by steps 1.1 and 2.1 its field pair is $(0,0)$: explicitly $\varphi=0$, $A=(1,0,0)$ are constant, so $E=-\nabla0-\partial_t e_1=0$ and $B=\operatorname{curl}e_1=0$ by [F4]. Two distinct potential pairs therefore have the same field pair, and the map from potential pairs to field pairs of [F5] is not injective. [step 1.1, step 2.1, F1, F4]

4.1 Conclusion and scope. Every $C^2$ gauge generator gives a potential pair with the zero field pair (step 1.1); the linear family $\chi(x,t)=a\cdot x-\beta t$ realizes the constant pairs $(\beta,a)$, with the zero pair exactly at the zero parameters and the witness $(0,e_1)$ distinct from $(0,0)$ while still representing the zero field pair (steps 2.1 and 3.1). No Maxwell equation, source configuration, choice principle or empirical situation is used, and no nonzero value of $\varphi$ or $A$ is asserted to be evidence for a nonzero field. [step 1.1, step 3.1, F1, F5] ∎

## Remarks

- **What the example shows about representations.** The construction sends every $C^2$ generator to a pure-gauge pair with the zero field pair, so the potential-to-field map is not injective; the witness $(0,e_1)$ uses the simplest constant family, and nothing beyond the displayed pure-gauge family is asserted about representatives of other field pairs.
