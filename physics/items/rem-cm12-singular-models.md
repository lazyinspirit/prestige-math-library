---
id: rem-cm12-singular-models
kind: remark
title: "Scope of the Legendre transformation: singular velocity Hessians, regular versus hyperregular presentations, and the excluded constraint theory"
status: published
origin: session
domain: physics
dependency_level: 19
deps: [def-cm12-regularity, def-cm12-hyperregularity, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, def-cm07-generalized-coordinates-and-forces, lem-cm-legendre-map-local-invertibility, rem-cm-scope-of-the-legendre-map]
dependency_roles:
  def-cm12-regularity: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  rem-cm-scope-of-the-legendre-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A scope audit of the Legendre and Hamiltonian constructions of this page for a declared potential presentation of the force branch: which presentations are excluded by a singular velocity Hessian, why the mechanical branch of the framework is never singular, the separation between regular and hyperregular presentations, the fact that only eliminated holonomic constraints are covered, and the empirical status of the vocabulary. The remark asserts no new physical claim and reports no measurement."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 3.1.1: the Legendre transform cannot be implemented in general because it involves finding the functional inverse of an arbitrary function; only explicitly invertible cases are treated"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.1, printed pages 82-83 (PDF pages 88-89): the inversion of the velocity-momentum relation as a requirement of the Legendre transform, with the convexity discussion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed page 8 (PDF page 11): with respect to imposing constraints on Hamiltonians, the text refers the reader to Dirac's theory instead of treating it, and the course considers constraints imposed on Lagrangians"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3: the conversion of Lagrange's equations into Hamiltonian form hinges on the inversion of the generalized-momentum relation, and the canonical equations are stated with multiplier or generalized-force terms"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: n/a
---
## Remarks

- **Singular velocity Hessians are excluded.** The Legendre map of a
  presentation is invertible through a state only when its velocity Hessian
  there is nonsingular ([[lem-cm-legendre-map-local-invertibility]],
  [[def-cm12-regularity]]); when $\det L_{vv}=0$ at a state, no local inverse
  branch through that state exists, the momentum covector of the state belongs
  to the image of a map that cannot be inverted there, and the definition
  [[def-cm12-hamiltonian]] of the branch Hamiltonian has no input at that
  state. Nothing on this page assigns a Hamiltonian to such a state, and no
  theorem of this page is stated for a presentation that is not regular on
  the chart under discussion.

- **The mechanical branch is never singular.** For the presentations of the
  framework the velocity Hessian is the mass operator $\mathsf M$ in
  Cartesian data and the kinetic metric $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$
  in a generalized-coordinate chart
  ([[pthm-cm12-mechanical-hyperregularity]],
  [[def-cm07-generalized-coordinates-and-forces]]). Both are symmetric
  positive definite because the masses are positive and $DX(q)$ is
  injective, so both are nonsingular at every state and the fibre momentum
  maps are linear isomorphisms; the excluded degenerate case simply does not
  arise for the model's own Lagrangians. This is a property of the adopted
  force branch and its kinetic energy, not a general fact about Lagrangians.

- **Regular does not imply hyperregular.** Regularity is the pointwise
  nonsingularity of the velocity Hessian; hyperregularity additionally
  requires the fibre momentum map to be a bijection onto the whole momentum
  fibre with a globally defined inverse branch
  ([[def-cm12-hyperregularity]]). The two conditions are genuinely different:
  the Lagrangian $\mathcal L(v)=e^{v}$ is regular at every state, since
  $\mathcal L_{vv}=e^{v}>0$, yet its fibre Legendre map has image
  $(0,\infty)$ and no inverse at nonpositive momenta, so it admits no global
  branch Hamiltonian; [[rem-cm-scope-of-the-legendre-map]] records this
  separation and further witnesses. The companion page of this pair computes
  the branch $H(p)=p\ln p-p$ of that example on $p>0$.

- **Constraints are covered only by elimination.** The only constraint
  statement of this page is clause 4 of
  [[pthm-cm12-hamilton-equivalence]], in which a scleronomic regular
  holonomic constraint is eliminated by a parametrization and the reaction
  never appears in the reduced equations. Constraint theory in phase space —
  multipliers adjoined to a Hamiltonian system, primary and secondary
  constraints, or any generalised constraint algorithm — is not defined,
  proved, or claimed on this page; the cited treatments likewise either
  restrict themselves to constraints imposed on Lagrangians or refer that
  subject elsewhere. In particular, the Lagrange-multiplier function of an
  ideal-reaction representation has a singular velocity Hessian in the
  ambient variables and is not itself a hyperregular presentation of this
  page, as the constraint items of the earlier pair record.

- **Empirical status.** Every condition and conclusion above is a statement
  about the adopted model: the force branch, the declared potential
  presentation and the cited mathematics. No measurement is reported, no
  numerical value is asserted, and the vocabulary of regular, hyperregular
  and Hamiltonian presentations adds no empirical content to the model's
  equation of motion.
