---
id: def-cm14-complete-integrability
kind: definition
title: "Completely integrable data of a declared presentation: $n$ smooth phase functions with $F_1=H$, pairwise in involution and independent on the regular locus"
status: draft
origin: pipeline
domain: physics
dependency_level: 24
deps: [def-cm14-involution, def-cm13-poisson, def-cm13-hamiltonian-field, pthm-cm13-observable-evolution, pthm-cm13-two-form-is-symplectic, def-cm13-two-form, def-cm13-canonical-form, def-cm12-hamiltonian, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-completely-integrable-hamiltonian-system, def-first-integral-and-poisson-commuting-functions, def-poisson-bracket-on-a-symplectic-manifold, def-symplectic-form-and-symplectic-manifold, def-linear-independence, def-differential-rank-and-constant-rank, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-metric-topology]
dependency_roles:
  def-cm14-involution: formulation-prerequisite
  def-cm13-poisson: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-observable-evolution: physical-result
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-two-form: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-completely-integrable-hamiltonian-system: mathematical-premise
  def-first-integral-and-poisson-commuting-functions: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-linear-independence: mathematical-premise
  def-differential-rank-and-constant-rank: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Complete integrability of the Hamiltonian system of a declared hyperregular potential presentation: a datum of $n$ phase functions on an open phase domain of dimension $2n$, with first entry the autonomous branch Hamiltonian, pairwise in involution, independent on an open dense regular locus, and the attached integral map, regular values and regular fibres; the datum is a completely integrable Hamiltonian system for the presentation's two-form in the root-library sense. The item defines the datum class; it asserts no model of the force branch is completely integrable, no fibre structure, no action-angle coordinates and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.5.2, printed pages 107-108 (PDF pages 113-114): integrable systems as systems with n mutually Poisson-commuting constants of motion, the invariant tori, and the reference to Arnold's book for a proof"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January 2006), Lecture 18, Definition 18.10 and discussion, pp. 110-111: a completely integrable Hamiltonian system as $n$ independent integrals of motion $f_1=H,\\dots,f_n$ pairwise in involution"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 4.4 and Chapter 6: the local angle-action description of integrable systems, in which n independent conserved quantities reduce the solution to quadratures, and the Hamilton-Jacobi strategy of Chapter 6; the source states no involution hypothesis and no proof of Liouville integrability, which are supplied by the cited mathematics"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.2, chapter pages 5-8 (PDF pages 241-244): the action variable of one-dimensional periodic motion and the angle variable; the source defers the canonicity of the transformation to Landau-Lifshitz rather than proving it, and it is supplied here by the cited mathematics"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
the momentum charts and two-form datum of [[def-cm13-two-form]], the
canonical coordinates of [[def-cm13-canonical-form]], the bracket of
[[def-cm13-poisson]], the Hamiltonian fields of [[def-cm13-hamiltonian-field]] and the branch
Hamiltonian of [[def-cm12-hamiltonian]], assumed autonomous on the
chosen domain and hence written $H:W\to\mathbb R$;
by clause 1 of [[pthm-cm13-two-form-is-symplectic]] each momentum phase
domain is a symplectic manifold for $\omega$, with $\omega$ the standard
two-form in the chart's canonical coordinates
([[def-symplectic-form-and-symplectic-manifold]]). Dimensions are read by
[[def-cm01-units]] and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) The datum.** Let $W_{0}$ be a nonempty open subset of one momentum
phase domain of the presentation, of dimension $2n$, and let

$$F=(F_{1},\dots,F_{n}),\qquad F_{i}:W_{0}\longrightarrow\mathbb R,$$

be phase functions of class $C^{\infty}$ with $F_{1}=H|_{W_{0}}$. The
family $F$ is a **completely integrable datum of the presentation on
$W_{0}$** when

1. $F$ is in involution, $\{F_{i},F_{j}\}=0$ on $W_{0}$ for all $i,j$
   ([[def-cm14-involution]] clause (d)); and
2. the differentials $dF_{1},\dots,dF_{n}$ are linearly independent on a
   dense open subset of $W_{0}$ ([[def-linear-independence]],
   [[def-differential-rank-and-constant-rank]]).

**(b) Reading in the root library.** Since $(W_{0},\omega)$ is a
$2n$-dimensional symplectic manifold and the bracket of
[[def-cm13-poisson]] is the bracket of
[[def-poisson-bracket-on-a-symplectic-manifold]] for $\omega$, a datum
$F$ in the sense of clause (a), with $F_{1}=H$ and the autonomous
Hamiltonian $H$ of the presentation, is exactly a **completely integrable
Hamiltonian system** on $(W_{0},\omega)$ in the sense of
[[def-completely-integrable-hamiltonian-system]], with branches read
through the presentation's Hamiltonians; the root notion of
[[def-first-integral-and-poisson-commuting-functions]] is read through the
bracket criterion of [[pthm-cm13-observable-evolution]] clause 2.

**(c) Integral map, regular locus and fibres.** Attached to a datum $F$
are:

1. the **integral map** $F:W_{0}\to\mathbb R^{n}$;
2. the **regular locus** $W_{\mathrm{reg}}:=\{z\in W_{0}:
   \operatorname{rank}dF(z)=n\}$, which is open by continuity of the partial
   derivatives and dense in $W_{0}$ by clause (a) 2;
3. the **regular values**, namely the values $b\in F(W_{0})$ such that
   $\operatorname{rank}dF(z)=n$ at every $z\in F^{-1}(b)$;
   for such a value the **regular fibre** $N_{b}:=F^{-1}(b)$ is the
   common level set of $F_{1},\dots,F_{n}$ through $b$;
4. the **Hamiltonian fields** $X_{F_{1}},\dots,X_{F_{n}}$ of the family
   ([[def-cm13-hamiltonian-field]]).

**(d) Status.** The item defines a datum class and its attached objects.
It asserts that no particular model of the force branch is completely
integrable, that no fibre is compact, connected or a torus, that no
action-angle coordinates exist and no measured value is known; the
structural and motion statements are the torus theorem and the
action-angle theorem of this page (items `pthm-cm14-regular-tori` and
`pthm-cm14-action-angle`), conditional on the hypotheses stated there.

## Remarks

- **Involution and independence are separate requirements.** Poisson
  commuting alone does not give coordinates: Poisson-commuting phase
  functions with dependent differentials fail to form a datum of clause
  (a) and do not yield Liouville-Arnold coordinates; the companion page
  exhibits the failure in the model's own phase space.

- **Regularity of the datum.** The class $C^{\infty}$ is part of the
  datum: the branch Hamiltonian of a potential presentation with a $C^{2}$
  potential is only $C^{2}$ in general, so a completely integrable datum
  carrying $F_{1}=H$ requires a smoother presentation (for example
  $U$ of class $C^{\infty}$) or a smoothed integral family; this is a
  hypothesis on the datum, not a consequence of the model's regularity.
