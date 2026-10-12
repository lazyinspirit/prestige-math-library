---
id: def-cm03-potential-and-mechanical-energy
kind: definition
title: "Potential presentations of a force model, potential and mechanical energy, closed versus exact force fields, local potentials and equipotential level sets"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm03-centre-of-mass-and-momenta, post-cm02-force-superposition, post-cm02-interactions, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-closed-and-exact-c1-vector-fields, thm-poincare-lemma-for-star-shaped-domains, def-star-shaped-open-subset-of-rn, thm-a-regular-level-set-is-an-embedded-submanifold, def-regular-and-critical-points-and-values, def-embedded-submanifold-and-slice-chart]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-regular-and-critical-points-and-values: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The potential branch of the force model: a scalar potential representing the force map through the Euclidean gradient, with or without declared residual forces; the potential and mechanical energy along a curve family; the non-uniqueness of the potential under addition of a function of time; the distinction between closed and exact time- and velocity-independent force fields, with local potentials on star-shaped subdomains and the failure of global exactness on a punctured domain; and equipotential level sets. The item defines the branch and records cited mathematical facts; it asserts no conservation law, no measured value and no global potential for an arbitrary closed field."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eqs. (1.22)-(1.27) and footnote 15, chapter pages 7-8 (PDF pages 11-12): the potential (conservative) force F = -nabla U, the work of potential forces as U(A) - U(B), mechanical energy E = T + U, and the additive constant in U"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, Eqs. (1.24)-(1.25) and the conservative-force conditions, printed page 8 (PDF page 14): conservative external and internal forces from potentials and the total potential energy V = sum_i V_i + sum_{i<j} V_ij"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "J. Lebl, Basic Analysis II, Section 9.3 Example 9.3.7 (path independence and the vortex field) and J.-B. Campesato, Poincare Lemma, sections 1-2: the closed field on the punctured plane with nonzero circulation is not exact, while closed fields on star-shaped domains are exact with the displayed radial potential"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
verification:
  precheck: n/a
---

## Definition

Adopt the force model and one inertial frame of
[[def-cm03-centre-of-mass-and-momenta]], with configuration domain $Q$, time
window $I_{0}$ and force map $F$. Dimensions are read by [[def-cm01-units]]
and gradients are Euclidean ([[def-jacobian-matrix-and-gradient]]); points of
$Q$ are written $x=(x_{1},\dots,x_{N})$ with $x_{i}\in\mathbb R^{3}$.

**(a) Potential representation of the force map.** A model **presents its
force map through a potential** when it declares a function
$$U:I_{0}\times Q\longrightarrow\mathbb R$$
of class $C^{2}$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), of
dimension $\mu\ell^{2}\tau^{-2}$ (read in joules), with
$$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)\qquad(i=1,\dots,N)$$
for every $(t,x,v)$ of the state domain; here $\nabla_{x_{i}}U$ is the
gradient of $u\mapsto U(t,x_{1},\dots,x_{i-1},u,x_{i+1},\dots,x_{N})$ at
$u=x_{i}$. More generally, a model may declare **residual forces**
$d_{i}:I_{0}\times Q\times(\mathbb R^{3})^{N}\to\mathbb R^{3}$ of the standing
regularity of clause (iii) of [[post-cm02-force-superposition]] and present
$$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v);$$
the pair $(U,d)$ is then the model's presentation and
$F_{i}^{\mathrm{p}}:=-\nabla_{x_{i}}U$ is its **potential part**. The scalar
$U$ is a **potential energy** for the model's potential part; the framework's
earlier admission of potentials in [[post-cm02-interactions]] clause (iii) is
the special case $d\equiv0$. A model that presents its whole force map this
way with $d\equiv0$ is a **global potential model** (the term "conservative
model" is used only in this sense).

**(b) Potential and mechanical energy along a curve family.** For a curve
family $x:J\to Q$ of the model ([[def-cm03-centre-of-mass-and-momenta]]
clause (a)) define the **potential energy along the family** and the
**mechanical energy** by
$$U_{x}(t):=U\bigl(t,x(t)\bigr),\qquad E(t):=K(t)+U_{x}(t)\qquad(t\in J),$$
with $K$ the kinetic energy of the definition. The potential part contributes
to the force field but not directly to $K$; $E$ is defined only along the
potential branch of the model, and along a motion it is the subject of the
energy balance of this page.

**(c) Normalization of the potential.** Let $c:I_{0}\to\mathbb R$ be
differentiable and let $\tilde U:=U+c(t)$. Since $\nabla_{x_{i}}\tilde
U=\nabla_{x_{i}}U$, the function $\tilde U$ presents the same potential part
$-∇_{x_{i}}\tilde U=-\nabla_{x_{i}}U$ with the same residual forces $d_{i}$;
conversely every $C^{2}$ potential presenting the same potential part differs
from $U$ by a function of $t$ alone, because the gradient in $x$ vanishes
exactly for such functions. Hence the potential of a presentation is
determined only up to an additive differentiable function $c(t)$ of the time
coordinate. The representative is part of the model's declaration, and every
energy statement of the framework names the representative it uses; the
derivative of $c$ enters the balance of the energy-balance item of this page.

**(d) Closed and exact force fields.** A **time- and velocity-independent
force field** is an external single-label contribution of the special form
$F_{i}^{\mathrm{ext}}(t,x,v)=\varphi_{i}(x)$, read as the map
$\varphi=(\varphi_{1},\dots,\varphi_{N}):Q\to\mathbb R^{3N}$. Such a field is
**closed** when $\partial_{k}\varphi_{j}=\partial_{j}\varphi_{k}$ at every
point of $Q$ (all partial derivatives continuous), and **exact with potential
energy $U$** when $\varphi=-\nabla U$ for a $C^{2}$ function $U:Q\to\mathbb
R$; equivalently, the field $-\varphi$ is exact in the sense of
[[def-closed-and-exact-c1-vector-fields]] with potential $U$. The following
mathematical facts are used, with their proofs at the cited items:

1. every exact field is closed, by equality of mixed partial derivatives
   ([[def-closed-and-exact-c1-vector-fields]]);
2. on a star-shaped open domain every closed $C^{1}$ field is exact, by the
   Poincaré lemma ([[thm-poincare-lemma-for-star-shaped-domains]]);
3. beyond item 2 this item asserts **no** implication from closedness to
   global exactness: on a general open domain a closed field need not have a
   potential energy, and the criterion used by the framework is exactness as
   defined above.

Consequently the existence of a global potential energy on the model's
configuration domain is a property of the field on that domain, and a model
whose potential part is a merely closed field on a non-star-shaped domain is
not thereby a global potential model. The distinction is sharp: the
companion examples page carries a model on an annular domain whose force
field is smooth and closed, has nonzero circulation around a closed loop, and
therefore admits no global potential and no global conserved energy of the
form $K+U$, while item 2 provides a local potential and a locally conserved
energy on every star-shaped subpart of that domain.

**(e) Local potentials.** Let $V\subseteq Q$ be open and star-shaped with
respect to one of its points ([[def-star-shaped-open-subset-of-rn]]) and let
$\varphi$ be closed on $V$. Then item 2 of (d) provides a $C^{2}$ potential
$U_{V}:V\to\mathbb R$ with $\varphi|_{V}=-\nabla U_{V}$: a **local potential**
of the field on $V$. On the restricted configuration domain $V$ the model
with force $-\nabla U_{V}$ is a global potential model, so the mechanical
energy $K+U_{V}$ is available along curve families in $V$; this is how a
potential is recovered from a merely closed field on a sufficiently small
star-shaped piece of the domain, with no claim of a global representative.

**(f) Equipotential level sets.** Let $U:Q\to\mathbb R$ be $C^{2}$, let
$c\in\mathbb R$ and suppose $U^{-1}(c)\neq\varnothing$ and $\nabla
U(x)\neq0$ for every $x\in U^{-1}(c)$; equivalently $c$ is a regular value of
$U$ and every point of the level set is a regular point
([[def-regular-and-critical-points-and-values]]). Then $U^{-1}(c)$ is an
embedded submanifold of $Q$ of dimension $3N-1$
([[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[def-embedded-submanifold-and-slice-chart]]). No such conclusion is made at a
level where $\nabla U$ vanishes somewhere on the level set, where the level
set may have singular points.

**(g) Status.** The potential, its normalization, the residual forces and the
declaration of a potential presentation are model data; the closed/exact
statements of (d)-(f) are cited mathematics about the declared field. This
item asserts no conservation law, no force law of nature and no measured
value.

## Remarks

- **The potential is not the force.** Only the spatial gradient of $U$ enters
  the force map; changing $U$ by $c(t)$ changes no acceleration and no
  trajectory, but it changes the numerical value of $E$ and its balance. This
  is why every energy statement records its representative.

- **Residual forces are ordinary model data.** In a presentation with
  $d\neq0$ the split into potential part and residual forces is a modelling
  declaration; two presentations with the same total force and different
  splits produce the same motions and the same total power, while the
  potential-energy balance distributes that power differently between
  $\partial_{t}U$ and the residual power ([[pthm-cm03-energy-balance]]).

- **The obstruction is not smoothness.** Fact 3 of (d) leaves closedness
  without a global conclusion on general domains; on a star-shaped subdomain
  the radial integral of the Poincaré lemma supplies the potential, and its
  value depends on the chosen centre. The companion counterexample records a
  smooth closed model field whose obstruction is its circulation around the
  removed axis, not any failure of regularity.
