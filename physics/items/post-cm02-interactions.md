---
id: post-cm02-interactions
kind: postulate
title: "Restricted interaction models: pair decompositions, antisymmetry and centrality options, potential forces and the gravitational branch"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [post-cm02-force-superposition, post-cm01-worldlines, def-cm01-configuration, def-cm01-units, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adoption of restricted interaction models inside the force branch of [[post-cm02-force-superposition]]: a decomposition of the total force into external single-label forces and pair forces, the optional pair assumptions of antisymmetry and centrality, the branch of force maps that come from a scalar potential with the Euclidean gradient, and the optional Newtonian gravitational pair-potential model with gravitational coupling parameters distinct from the inertial masses. The item asserts no law of nature, no measured value and no conservation law; the identification of gravitational and inertial mass is recorded as a further empirical assumption, not adopted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3 'Newtonian Mechanics: Many Particles', printed pages 5-9 (PDF pages 11-15): F_i = sum_j F_ij + F_i^ext, the weak and strong forms of Newton's third law, the caution that momentum exchange with an omitted field is not covered, and the centre-of-mass consequences"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter pages 3-4 (PDF pages 7-8): vector superposition of forces assumed separately (Eq. 1.13), and the gravity law (1.15) introduced as an additional law with the weak-equivalence footnote 11 recording the empirical support for identifying gravitational and inertial mass"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, chapter pages 5-8 (PDF pages 9-12): the internal forces assumed central for the total-torque statement, with the pairwise central form and its restricted character"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 12-15 (PDF pages 15-18): the total momentum balance with internal forces obeying Newton's third law F_i-to-j = -F_j-to-i and no total external force, and the centre-of-mass reduction"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt, whenever a model of the force branch [[post-cm02-force-superposition]]
invokes them, the following **restricted interaction assumptions**. Throughout,
the data $I_{0}$, $Q$, $m_{1},\dots,m_{N}$ and the force map $F$ are those of
[[post-cm02-force-superposition]], and a state writes $z=(x,v)$ with
$x=(x_{1},\dots,x_{N})\in Q$ and $v=(v_{1},\dots,v_{N})\in\mathbb R^{3N}$.

**(i) External-plus-pair decomposition.** The model's force map is presented as

$$F_{i}(t,z)=F_{i}^{\mathrm{ext}}(t,x_{i},v_{i})+\sum_{j\ne i}F_{ij}(t,x_{i},x_{j},v_{i},v_{j}) \qquad(i=1,\dots,N),$$

where each $F_{i}^{\mathrm{ext}}$ is a single-label **external** force map and
each $F_{ij}$ (for $i\ne j$, an ordered pair) is a **pair** force map, all
defined on their stated open domains and satisfying the standing continuity
and state-local-Lipschitz hypotheses of clause (iii) of
[[post-cm02-force-superposition]] with respect to the arguments they actually
depend on. This is a restriction of the model class: an arbitrary force map
$F$ of [[post-cm02-force-superposition]] need not admit such a decomposition,
and the decomposition is part of the model's declaration, not a theorem. It is
relative to the declared set of labels: for a subsystem, a pair force to a
label outside the declared set appears as an external force, and no
antisymmetry or pairing property of the full system restricts that external
force.

**(ii) Optional pair assumptions.** In addition, a model may adopt, separately
or together, the following assumptions about a pair force $F_{ij}$:

1. **Antisymmetry (strong form of the third law).**
   $F_{ij}(t,x_{i},x_{j},v_{i},v_{j})=-F_{ji}(t,x_{j},x_{i},v_{j},v_{i})$ for
   all arguments in the domain.
2. **Centrality.** $F_{ij}(t,x_{i},x_{j},v_{i},v_{j})$ is parallel to
   $x_{i}-x_{j}$, i.e. lies in the real line spanned by $x_{i}-x_{j}$,
   whenever $x_{i}\ne x_{j}$.

Each assumption is a further restriction of the model class and is adopted
only where invoked. Both are *sufficient* hypotheses used by later balance
statements, and neither is a consequence of the equation of motion: a
velocity-dependent pair force, or an interaction mediated by a field omitted
from the declared labels, need satisfy neither.

**(iii) Potential model.** A model may present its force map through a scalar
**potential** $U:I_{0}\times Q\to\mathbb R$ of class $C^{2}$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), of dimension
$\mu\ell^{2}\tau^{-2}$, read in joules ([[def-cm01-units]]), through the rule

$$F_{i}(t,z)=-\nabla_{x_{i}}U(t,x)\qquad(i=1,\dots,N),$$

the gradient being the Euclidean gradient in the position variable of each
label ([[def-jacobian-matrix-and-gradient]],
[[def-euclidean-inner-product]]). This is a restriction of the force class:
only force maps that are the negative gradient of such a potential belong to
it. The same force map arises from every potential of the form
$U(t,x)+c(t)$ with a differentiable function $c$ of $t$ alone whenever
the declared $C^{2}$ regularity is retained. More generally, for each connected
component $C$ of $Q$ (a maximal connected subset), two $C^{2}$ potentials
for the same force differ by an independently chosen $C^{2}$ function
$c_C(t)$ on $I_0\times C$. A single time function suffices when $Q$ is
connected; openness alone does not require the constants on different
components to agree. The chosen normalization is part of any later energy
statement and is recorded with it, and no energy statement is made on this page.

**(iv) Pair and external potentials are examples, not the general form.**
When $U$ has the form

$$U(t,x)=\sum_{i}u_{i}(t,x_{i})+\sum_{i<j}u_{ij}(t,x_{i},x_{j})$$

with $C^{2}$ scalar functions $u_{i}$, $u_{ij}$, the decomposition (i) holds
with $F_{i}^{\mathrm{ext}}=-\nabla_{x_{i}}u_{i}$ and
$F_{ij}=-\nabla_{x_{i}}u_{ij}$. Potentials of the still more special form
$u_{ij}=u_{ij}(t,\lvert x_{i}-x_{j}\rvert)$ are the **central pair
potentials**; these are examples, and no generality is claimed for any of
these subclasses. Velocity-dependent forces such as the drag model
[[post-cm02-drag]] lie outside every potential model of this clause.

**(v) Newtonian gravitational branch.** The model may adopt the pair potential

$$U_{ij}(x_{i},x_{j})=-\frac{G_{\mathrm N}\,m_{i}^{g}m_{j}^{g}}{\lvert x_{i}-x_{j}\rvert}$$

on the collision-excluded configuration domain ($x_{i}\ne x_{j}$ for all
$i\ne j$), where $G_{\mathrm N}>0$ is a constant of dimension
$\ell^{3}\mu^{-1}\tau^{-2}$ ([[def-cm01-units]]) and the numbers
$m_{1}^{g},\dots,m_{N}^{g}>0$ are **gravitational coupling parameters** of the
labels, primitive model data distinct from the inertial masses $m_{i}$ of the
equation of motion. By clause (iii) this potential supplies the attractive
inverse-square pair force
$F_{ij}=-G_{\mathrm N}m_{i}^{g}m_{j}^{g}\,(x_{i}-x_{j})/\lvert x_{i}-x_{j}\rvert^{3}$,
the content of the elementary differentiation
$\nabla_{x}\bigl(1/\lvert x-y\rvert\bigr)=-(x-y)/\lvert x-y\rvert^{3}$; a
concrete instance of that differentiation is verified on the companion page.
The adopted model satisfies the antisymmetry and centrality options of (ii)
where they are invoked.

**(vi) The mass identification is an empirical assumption.** The
identification

$$m_{i}^{g}=m_{i}\qquad(i=1,\dots,N)$$

of gravitational couplings with inertial masses is **not** part of clauses
(i)–(v) and is not a consequence of the equation of motion. It is an
additional empirical assumption, adopted only when a model states it, and it
is the subject of the weak equivalence principle; the sources record its
empirical support and its historical status, and this page records no
measurement. Likewise, the inverse-square form in (v) is an adopted law, not a
consequence of the force branch [[post-cm02-force-superposition]].

**(vii) Status.** Clauses (i)–(v) are adopted modelling assumptions that
restrict the force maps of [[post-cm02-force-superposition]]; they add no
dynamics beyond that postulate, and every theorem of this page remains
conditional on these adopted hypotheses. The balances of momentum, angular
momentum and energy, when asserted later, are theorems with their own
hypotheses on this structure and are not made here.

## Status and scope

- **Why the restrictions are separated.** Antisymmetry, centrality and the
  existence of a potential are independent properties; a model may have any
  combination. Keeping them optional prevents the later balance theorems from
  silently assuming more than their proofs use.

- **Open subsystems.** The pair form is declared for the labels of the model.
  If a physical system is described by a proper subset of its bodies,
  interactions with the remaining bodies are external forces in the sense of
  clause (i), and the pair properties of the full system say nothing about
  them.

- **No inverse-square from the second law.** The gravitational potential and
  the inverse-square force are additional adopted laws; the second law alone
  determines no force law, and this page proves no property of nature from the
  form of the equation of motion.

- **Dimensions of the gravitational couplings.** Assign each independent
  gravitational coupling the mass dimension $[m_i^{g}]=\mu$, read in
  kilograms. Then the potential in clause (v) has dimension

  $$[G_{\mathrm N}m_i^{g}m_j^{g}/|x_i-x_j|]=(\ell^{3}\mu^{-1}\tau^{-2})\mu^{2}\ell^{-1}=\mu\ell^{2}\tau^{-2}.$$

  as required for energy. If a model additionally
  adopts $m_i^{g}=m_i$, this assignment is dimensionally consistent with the
  inertial mass dimension $[m_i]=\mu$; dimensional agreement does not establish
  that empirical identification.
