---
id: def-cm08-symmetry-of-the-mechanical-lagrangian
kind: definition
title: "Continuous symmetries of the model's mechanical Lagrangian: symmetry data, the Noether identity, the charge and its dimensions"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm-time-dependent-lagrangian-and-action, def-cm-infinitesimal-point-symmetry, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, post-cm01-spacetime, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  post-cm01-spacetime: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The symmetry vocabulary of the force model with a declared potential presentation in one inertial frame: symmetry data as triples (tau, xi, B) satisfying the model's Noether identity for the mechanical Lagrangian K - U, strict data and their exact relation to the chart-level infinitesimal point symmetries, the charge M v . xi - (K+U) tau - B together with its dimension and its behaviour under rescaling of the family parameter, and the status of the notion. The item defines only; it asserts no conservation law, no existence of any symmetry of a given model, and no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Noether's Theorem', printed pages 24-26 (PDF pages 30-32): a one-parameter family of maps q_i(t) -> Q_i(s,t) is a continuous symmetry when the s-derivative of the Lagrangian vanishes, and the conserved quantity is the momentum paired with the generator"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.4, chapter page 9 (PDF page 28): cyclic coordinates and the generalized momentum as an integral of motion, the Noether theorem named as the general statement"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.8.5 'Noether's Theorem': parametric coordinate transformations, invariance of the Lagrangian and the Noether integral as the product of the momentum with the generator"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3 'Symmetry and Conservation Laws', printed pages 12-15 (PDF pages 15-18): cyclic coordinates, conserved canonical momenta and the examples of centre-of-mass momentum and rotational angular momentum"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Definition

Adopt one force model of [[post-cm02-force-superposition]]: $N\ge1$ particle
labels with fixed masses $m_{1},\dots,m_{N}>0$ (clause (i)), an open
nondegenerate time window $I_{0}\subseteq\mathbb R$, an open configuration
domain $Q\subseteq\mathbb R^{3N}$ and a force map $F$ with the standing
continuity and state-local-Lipschitz hypotheses of clause (iii) of that
postulate, and fix one inertial frame with adapted coordinates $(t,x)$
([[def-cm01-configuration]]). Adopt in addition a potential presentation
$(U,d)$ of [[def-cm03-potential-and-mechanical-energy]]: a function
$U:I_{0}\times Q\to\mathbb R$ of class $C^{2}$ of dimension
$\mu\ell^{2}\tau^{-2}$ with $F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v)$,
with residual forces $d=(d_{1},\dots,d_{N})$ of the standing regularity. Let
$L=K-U$, $O:=I_{0}\times Q\times\mathbb R^{3N}$ and $\mathsf M$ be the
mechanical Lagrangian, the chart domain and the mass operator of
[[def-cm07-action-and-mechanical-lagrangian]], so that $L$ is of class $C^{2}$
on the open set $O$ and $(O,L)$ is a time-dependent Lagrangian chart over
every $[a,b]\times Q$ with $[a,b]\subseteq I_{0}$
([[def-cm-time-dependent-lagrangian-and-action]]). Dimensions are read by
[[def-cm01-units]], inner products and norms are Euclidean
([[def-euclidean-inner-product]]), and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. For a $C^{1}$ function
$\varphi$ on an open subset of $\mathbb R\times\mathbb R^{3N}$ and
$(t,x,v)\in O$ write

$$D_{t}\varphi(t,x,v):=\varphi_{t}(t,x)+\varphi_{x}(t,x)\cdot v,$$

the derivative of $s\mapsto\varphi(s,x+v(s-t))$ at $s=t$; the last two slots
of $L$ are $(x,v)$, and $L_{t}$, $L_{x}$, $L_{v}$ are the gradients of $L$ in
its three slots ([[def-jacobian-matrix-and-gradient]],
[[def-directional-and-partial-derivatives]]).

**(a) Symmetry datum.** A **symmetry datum of the model's mechanical
Lagrangian** is a triple $(\tau,\xi,B)$ of maps

$$\tau:I_{0}\times Q\to\mathbb R,\qquad \xi:I_{0}\times Q\to\mathbb R^{3N},\qquad B:I_{0}\times Q\to\mathbb R,$$

of class $C^{2}$, that satisfies for every $(t,x,v)\in O$ the **Noether
identity of the model**:

$$L_{t}(t,x,v)\,\tau(t,x)+L_{x}(t,x,v)\cdot\xi(t,x)+L_{v}(t,x,v)\cdot\bigl(D_{t}\xi(t,x,v)-v\,D_{t}\tau(t,x,v)\bigr)+L(t,x,v)\,D_{t}\tau(t,x,v)=D_{t}B(t,x,v).$$

Because $K(v)=\tfrac12 v\cdot\mathsf M v$ does not depend on $t$ or $x$ and
$U$ does not depend on $v$, the identity is the following identity among the
model's data:

$$-U_{t}(t,x)\tau(t,x)-\nabla_{x}U(t,x)\cdot\xi(t,x)+\bigl(\mathsf M v\bigr)\cdot\bigl(D_{t}\xi(t,x,v)-v\,D_{t}\tau(t,x,v)\bigr)+\bigl(K(v)-U(t,x)\bigr)D_{t}\tau(t,x,v)=D_{t}B(t,x,v).$$

It involves the declared potential $U$, the masses through $\mathsf M$, and
the boundary function $B$; it is an identity imposed on the model's declared
data on the whole state domain $O$.

**(b) Strict data and point symmetries.** A symmetry datum is **strict**
when $\tau\equiv0$; its identity reads
$L_{x}\cdot\xi+L_{v}\cdot D_{t}\xi=D_{t}B$. If a strict datum has $\xi$
independent of $t$, then the pair $(\xi,B)$ is an **infinitesimal point
symmetry of the chart $(O,L)$** in the sense of
[[def-cm-infinitesimal-point-symmetry]]: that definition's identity,
instantiated with $n=3N$ in the configuration slot, is verbatim
$L_{x}(t,x,v)\cdot\xi(x)+L_{v}(t,x,v)\cdot D\xi(x)v=B_{t}(t,x)+B_{x}(t,x)\cdot v$.
Conversely every infinitesimal point symmetry of the chart $(O,L)$ whose
boundary function is defined on $I_{0}\times Q$ is a strict datum with $\xi$
independent of $t$. A general datum is a **point symmetry with time
reparametrisation**: the family

$$x_{i}\longmapsto x_{i}+s\,\xi_{i}(t,x),\qquad t\longmapsto t+s\,\tau(t,x)$$

changes the coordinate velocity to first order by $D_{t}\xi-v\,D_{t}\tau$, and
the identity says that the infinitesimal variation of $L$ along the family is
the total time derivative $D_{t}B$ of the chart function $B$.

**(c) Charge.** The **charge of the datum** is the function

$$C:O\to\mathbb R,\qquad C(t,x,v):=L_{v}(t,x,v)\cdot\xi(t,x)-E(t,x,v)\,\tau(t,x)-B(t,x),$$

where

$$E(t,x,v):=L_{v}(t,x,v)\cdot v-L(t,x,v)=K(v)+U(t,x)$$

is the **mechanical energy function of the chart**
([[def-cm03-potential-and-mechanical-energy]]). Since $L_{v}=\mathsf M v$,

$$C(t,x,v)=\bigl(\mathsf M v\bigr)\cdot\xi(t,x)-\bigl(K(v)+U(t,x)\bigr)\tau(t,x)-B(t,x).$$

**(d) Dimensions and rescaling.** Read the family parameter $s$ as carrying a
declared unit $\sigma$ (for instance radians for a rotation family, seconds
for a time-reparametrisation family, or a dimensionless parameter). Then
$\tau$ has dimension $\tau\sigma^{-1}$, every component
$\xi_{i}$ has dimension $\ell\sigma^{-1}$, $B$ has dimension
$\mu\ell^{2}\tau^{-1}\sigma^{-1}$ (action per parameter unit) and
$C$ has the same dimension as $B$
([[def-cm01-units]]). Replacing $(\tau,\xi,B)$ by $(c\tau,c\xi,cB)$ with
a real constant $c\ne0$ — the same family reparametrised by $s\mapsto cs$ —
rescales $C$ by $c$.

**(e) Status.** This item fixes the model's symmetry vocabulary: which data
satisfy the model's Noether identity, and which function is their charge. It
asserts neither that a given model admits a nonzero symmetry datum, nor that
the charge of a datum is conserved. Conservation is proved under explicit
hypotheses by the theorems of this page, and the hypotheses must be verified
against the declared potential $U$ and the masses: a change of inertial frame,
the affine structure of the spacetime of [[post-cm01-spacetime]], or a
relabelling of the particle labels is a kinematic or descriptive operation and
is not by itself a symmetry datum of $L$. Every statement that uses a charge
names the potential representative used
([[def-cm03-potential-and-mechanical-energy]] clause (c)); the effect of
changing the representative is recorded in the general Noether theorem of this
page.

## Remarks

- **Generator convention.** The sign of $\xi$ is fixed by the family
  $x\mapsto x+s\xi$: with an inverse-family convention, in which the
  transformed coordinate is written as a function of the old one by
  $x\mapsto x-s\xi$, the same identity holds with $C$ replaced by $-C$. The
  mathematical items cited above and the sources use different parametrisation
  conventions; the present definition fixes one and every item of this page
  uses it. In particular the SICM Noether integral of Section 1.8.5 is the
  momentum paired with the derivative of the transformed coordinate with
  respect to the parameter, which for the rotation example equals minus the
  angular momentum with the convention fixed here.

- **Relation to the mathematical track.** The chart-level results
  [[def-cm-infinitesimal-point-symmetry]],
  [[thm-cm-point-symmetry-charge-is-conserved]] and
  [[thm-cm-point-noether-identity-with-time-reparametrization]] concern a
  general chart Lagrangian; this item only instantiates them at the mechanical
  Lagrangian of the declared presentation, and the identity above is exactly
  theirs written in model terms. The conservation theorems of this page are
  instances of those results, not independent postulates.

- **What a symmetry is not.** The identity constrains the potential: for the
  translation family with frozen generator $\xi=a$ and $B=0$ it fails at the
  state $(t,x,v)$ exactly where $a\cdot\nabla_{x}U(t,x)\ne0$, and for the
  quadratic potential $U=\tfrac{k}{2}\lvert x\rvert^{2}$ it fails at every
  nonzero state. A model may therefore possess the full kinematic group of
  Galilean frame changes and still admit no translation symmetry datum. The
  worked models of the companion page make this failure explicit.

- **Not asserted.** No converse is asserted: from the conservation of a
  quantity along the motions of a model it does not follow that the model has a
  symmetry datum producing it, and no claim is made that the conservation laws
  observed in nature are generated by symmetries. The item also does not treat
  discrete symmetries, gauge families whose generators are not $C^{2}$,
  field-theoretic actions, or global existence of the transformation families;
  only the identity and the charge are defined here.
