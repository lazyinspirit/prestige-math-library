---
id: pthm-cm14-regular-tori
kind: physics-theorem
title: "Compact connected regular fibres of a completely integrable datum of the
  presentation are Lagrangian tori with a full period lattice"
status: draft
origin: pipeline
domain: physics
dependency_level: 25
deps:
  [
    def-cm14-complete-integrability,
    def-cm14-involution,
    def-cm13-hamiltonian-field,
    def-cm13-poisson,
    def-cm13-two-form,
    pthm-cm13-two-form-is-symplectic,
    def-cm12-hamiltonian,
    def-cm07-action-and-mechanical-lagrangian,
    def-cm07-generalized-coordinates-and-forces,
    post-cm02-force-superposition,
    def-cm01-configuration,
    def-cm01-units,
    def-completely-integrable-hamiltonian-system,
    def-first-integral-and-poisson-commuting-functions,
    def-poisson-bracket-on-a-symplectic-manifold,
    def-symplectic-form-and-symplectic-manifold,
    def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds,
    def-hamiltonian-vector-field-and-hamiltonian-function,
    def-countable-choice,
    prop-regular-common-level-sets-are-lagrangian-submanifolds,
    prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action,
    lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice,
    thm-compact-connected-regular-fibres-are-tori,
    cor-every-smooth-vector-field-on-a-compact-manifold-is-complete,
    thm-a-regular-level-set-is-an-embedded-submanifold,
    def-differential-rank-and-constant-rank,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-metric-topology,
    pthm-cm13-observable-evolution
  ]
dependency_roles:
  def-cm14-complete-integrability: formulation-prerequisite
  def-cm14-involution: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-poisson: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
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
  def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-regular-common-level-sets-are-lagrangian-submanifolds: mathematical-premise
  prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action: mathematical-premise
  lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice: mathematical-premise
  thm-compact-connected-regular-fibres-are-tori: mathematical-premise
  cor-every-smooth-vector-field-on-a-compact-manifold-is-complete: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-differential-rank-and-constant-rank: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-topology: mathematical-premise
  pthm-cm13-observable-evolution: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The fibre structure of a completely integrable datum of a
  declared hyperregular potential presentation of the framework's force branch:
  a compact connected regular common fibre of the integral map is an embedded
  Lagrangian submanifold generically spanned by the datum's Hamiltonian fields,
  carries the commuting-field local action of the cited mathematics as a
  transitive complete action with a full stabilizer lattice, and is
  diffeomorphic to a torus. The conclusion is conditional on the datum's
  smoothness, involution, independence on the regular locus, the compactness,
  connectedness and regularity of the fibre, and on the Axiom of Countable
  Choice through the cited lattice lemma; it asserts no global fibration, no
  action-angle coordinates, no completeness of flows off the compact fibre and
  no empirical content."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January
        2006), Lecture 18, Definition 18.10, Lemma 18.11 and Theorem 18.12, pp.
        110-111: the Arnold-Liouville structure theorem for compact regular
        fibres of an integrable system"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:\
        80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry (University of Toronto lecture
        notes), Chapter 6, Sections 6.1-6.3, Propositions 6.10-6.11 and Theorem
        6.21, pp. 66-75: commuting Hamiltonian fields, full period lattices and
        the torus structure of compact connected regular fibres"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.c\
        a/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 4.5.2, printed pages 107-108 (PDF pages 113-114): the
        statement of Liouville integrability and the torus picture, with the
        author referring to Arnold rather than proving the theorem"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, second edition (MIT Press, 2014/2015), Section 4.4: the local
        angle-action ('twist') description of integrable systems whose n
        independent conserved quantities reduce the solution to quadratures; the
        source states no torus or involution theorem, which are supplied by the
        cited mathematics"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_{\omega}$
([[def-countable-choice]]). Adopt the force model with potential
presentation $(U,d)$ and mechanical Lagrangian $L=K-U$ of
[[def-cm07-action-and-mechanical-lagrangian]], with the momentum charts and
two-form datum of [[def-cm13-two-form]], the Hamiltonian fields of
[[def-cm13-hamiltonian-field]] and the branch Hamiltonian $H$ of
[[def-cm12-hamiltonian]]; by clauses 1–2 of
[[pthm-cm13-two-form-is-symplectic]] (clause 1 for Cartesian domains and
clause 2 for generalized-coordinate domains), each momentum phase domain is a
symplectic manifold for the presentation's two-form $\omega$
([[def-symplectic-form-and-symplectic-manifold]]). Let $W_{0}\subseteq W$
be a nonempty open phase domain of dimension $2n$ and let
$F=(F_{1}=H|_{W_{0}},\dots,F_{n})$ be a completely integrable datum of the
presentation on $W_{0}$ ([[def-cm14-complete-integrability]]). Let $b_{0}$
be a regular value of the integral map whose regular fibre
$N:=F^{-1}(b_{0})\subseteq W_{0}$ is nonempty, compact and connected, and
assume there are a saturated open neighbourhood $U\subseteq W_{0}$ of $N$
and a ball $B\subseteq\mathbb R^{n}$ of regular values with $F(U)=B$ such
that $\pi:=F|_{U}:U\to B$ is a proper submersion with connected fibres.
Then:

1. **(Lagrangian fibre)** $N$ is a compact connected embedded
   $n$-dimensional Lagrangian submanifold of $(W_{0},\omega)$, and for
   every $z\in N$
   $$T_{z}N=\operatorname{span}\{X_{F_{1}}(z),\dots,X_{F_{n}}(z)\},$$
   the fields being those of [[def-cm13-hamiltonian-field]].
2. **(commuting flows and period lattice)** The fields
   $X_{F_{1}},\dots,X_{F_{n}}$ have pairwise commuting flows; these flows
   combine into a local $\mathbb R^{n}$ action on $W_{\mathrm{reg}}$, and
   on the compact invariant fibre $N$ their restrictions are complete and
   generate a transitive action of $\mathbb R^{n}$ whose stabilizer at
   every point is one and the same full lattice $\Gamma\subseteq
   \mathbb R^{n}$, with $N\cong\mathbb R^{n}/\Gamma$.
3. **(torus)** $N$ is diffeomorphic to the torus
   $T^{n}=\mathbb R^{n}/\mathbb Z^{n}$.

The statement is conditional on the adopted force branch, the declared
presentation, the smooth completely integrable datum and the listed
hypotheses on the fibre; it asserts no global product structure of $U$, no
action-angle coordinates, no completeness of any flow outside the compact
fibre and no empirical content.

## Facts & Assumptions

**Given:** $\mathrm{AC}_{\omega}$, the presentation on its chart, the
completely integrable datum $F$ with $F_{1}=H$ on $W_{0}$, the regular
value $b_{0}$ and its compact connected fibre $N$, and the saturated
neighbourhood $U$ with the proper submersion $\pi=F|_{U}$ over the ball
$B$ with connected fibres.

[F1] The datum in the root-library sense ([[def-cm14-complete-integrability]],
[[def-completely-integrable-hamiltonian-system]],
[[def-first-integral-and-poisson-commuting-functions]]): the functions
$F_{1},\dots,F_{n}$ are $C^{\infty}$, pairwise Poisson-commuting, and
independent on the dense open regular locus $W_{\mathrm{reg}}$; by the
bracket criterion of the presentation ([[def-cm14-involution]] clause (c),
[[pthm-cm13-observable-evolution]] clause 2) each $F_{i}$ is a first
integral of the branch Hamiltonian $F_{1}=H$.

[F2] Presentation versus root library ([[def-cm13-hamiltonian-field]],
[[def-cm13-poisson]], [[def-poisson-bracket-on-a-symplectic-manifold]],
[[def-hamiltonian-vector-field-and-hamiltonian-function]],
[[def-symplectic-form-and-symplectic-manifold]]): on each momentum chart
the presentation's two-form is a symplectic form, its bracket $\{f,g\}$
is the root-library bracket of the form $\omega$, and the field
$X_{f}$ with $\iota_{X_{f}}\omega=df$ is the root-library Hamiltonian
field of $f$; hence the root-library structural propositions about
completely integrable systems apply verbatim to $(W_{0},\omega,F)$.

[F3] Regular-level structure
([[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[def-differential-rank-and-constant-rank]]): since $b_{0}$ is a regular
value, $dF$ has rank $n$ at every point of $N$; the regular-level-set
theorem represents $N$ as an embedded submanifold of dimension
$2n-n=n$.

[F4] Published structural results
([[prop-regular-common-level-sets-are-lagrangian-submanifolds]],
[[prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action]],
[[lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice]],
[[thm-compact-connected-regular-fibres-are-tori]],
[[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]]): for
a completely integrable system every nonempty regular common level is an
$n$-dimensional Lagrangian submanifold spanned pointwise by the
Hamiltonian fields; the fields pairwise commute, their flows combine into
a local $\mathbb R^{n}$ action, and on a compact connected regular fibre
the action is transitive with a full stabilizer lattice; every smooth
vector field on a compact manifold is complete; and every compact
connected regular fibre is diffeomorphic to $T^{n}$.

[A1] $\mathrm{AC}_{\omega}$ is [[def-countable-choice]]; it is used here
only through the lattice lemma of [F4], whose declared hypothesis it is.

## Proof

**Proof technique:** direct; establish the Lagrangian tangent-space equality directly, then apply the cited published structure results to
the presentation's symplectic chart and collect the fibre conclusions.

1.1 Clause 1: by [F3], $N$ is an embedded $n$-dimensional submanifold and $T_zN=\ker dF(z)$. With the bracket convention of [F2], $dF_j(X_{F_i})=\omega(X_{F_j},X_{F_i})=\{F_j,F_i\}=0$. Thus all $X_{F_i}(z)$ lie in $T_zN$. Nondegeneracy of $\omega$ and independence of the $dF_i(z)$ imply independence of these $n$ fields, so they span $T_zN$. Their pairwise symplectic products are zero by involution; bilinearity gives $\omega|_{T_zN}=0$. Since $\dim T_zN=n$, it is Lagrangian. Compactness and connectedness are hypotheses. This proves clause 1 directly with the stated sign convention. [F1, F2, F3, given]

2.1 Clause 2, commuting fields: clause 2 of [F4] gives that the fields $X_{F_{1}},\dots,X_{F_{n}}$ pairwise commute and that their flows combine into a local $\mathbb R^{n}$ action; each $X_{F_{i}}$ is tangent to $N$ because $dF_{j}(X_{F_{i}})=\{F_{j},F_{i}\}=0$ on $N$ for every $j$, and $N$ is a common level set. [F1, F2, F4, step 1.1]

3.1 Clause 2, completeness and lattice: $N$ is compact by hypothesis, so on it each restricted field is complete by the completeness result of [F4]; under $\mathrm{AC}_{\omega}$ from [A1], the lattice lemma of [F4] then states that the action on the compact connected regular fibre $N$ is transitive with the same full stabilizer lattice $\Gamma\subseteq\mathbb R^{n}$ at every point and that $N\cong\mathbb R^{n}/\Gamma$. [A1, F4, step 2.1]

4.1 Clause 3: the torus theorem of [F4] gives that the compact connected regular fibre $N$ is diffeomorphic to $T^{n}=\mathbb R^{n}/\mathbb Z^{n}$. [F4, step 3.1]

5.1 Collection: clause 1 is step 1.1, clause 2 is steps 2.1 and 3.1, and clause 3 is step 4.1; this proves the statement. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Where each hypothesis is used.** Compactness is used twice: for the
  completeness of the restricted fields and for the full-lattice and
  torus conclusions; connectedness is used for transitivity; regularity at
  the base value is used to make $N$ a submanifold and to make the fields
  independent along it; the proper-submersion neighbourhood with connected
  fibres is not used by this theorem but is exactly the hypothesis needed
  by [[pthm-cm14-action-angle]] to globalize the action coordinates over a
  base ball.

- **What is not claimed.** No statement is made about the topology of a
  neighbourhood of $N$ beyond the local action of clause 2; in particular
  no global trivialization $U\cong B\times T^{n}$, no global
  action-angle coordinates on a multiply connected phase domain and no
  statement about critical or noncompact fibres. The companion page
  exhibits a compact critical fibre and a noncompact regular fibre of
  explicit models, showing that compactness and regularity cannot be
  dropped, and cites the published monodromy obstruction to global
  action-angle coordinates.
