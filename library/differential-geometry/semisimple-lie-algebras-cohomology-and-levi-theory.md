---
page: semisimple-lie-algebras-cohomology-and-levi-theory
title: Semisimple Lie Algebras, Cohomology, and Levi Theory
status: draft
items:
  - def-simple-semisimple-and-reductive-lie-algebras
  - def-trace-form-of-a-finite-dimensional-representation
  - def-killing-form-of-a-finite-dimensional-lie-algebra
  - prop-trace-forms-are-symmetric-and-invariant
  - lem-orthogonal-complements-under-invariant-forms-are-ideals
  - thm-cartans-solvability-criterion
  - thm-cartans-semisimplicity-criterion
  - cor-semisimple-lie-algebras-are-centerless-and-perfect
  - thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals
  - prop-ideals-and-quotients-of-semisimple-lie-algebras
  - def-casimir-operator-relative-to-an-invariant-form
  - lem-the-casimir-operator-is-basis-independent-and-intertwining
  - thm-weyls-complete-reducibility-theorem
  - thm-equivalent-characterizations-of-reductive-lie-algebras
  - cor-the-adjoint-representation-splits-into-simple-ideals
  - thm-every-derivation-of-a-semisimple-lie-algebra-is-inner
  - cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra
  - def-chevalley-eilenberg-cochains
  - def-chevalley-eilenberg-differential
  - thm-the-chevalley-eilenberg-differential-squares-to-zero
  - def-lie-algebra-cohomology
  - prop-zero-th-lie-algebra-cohomology-is-invariants
  - prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations
  - thm-second-lie-algebra-cohomology-classifies-abelian-extensions
  - thm-first-whitehead-lemma
  - thm-second-whitehead-lemma
  - thm-long-exact-sequence-in-lie-algebra-cohomology
  - def-levi-subalgebra-and-levi-decomposition
  - thm-levi-decomposition
  - thm-malcev-conjugacy-of-levi-subalgebras
  - cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy
  - thm-ado-faithful-representation-with-nilpotent-nilradical-action
  - cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra
  - thm-lie-second-fundamental-theorem
  - thm-lie-third-fundamental-theorem
  - thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras
  - thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations
  - thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism
  - cor-connected-nilpotent-lie-groups-are-discrete-central-quotients-of-bch-groups
  - cor-isomorphic-lie-algebras-give-locally-isomorphic-but-not-necessarily-isomorphic-connected-lie-groups
  - fs-centerless-implies-semisimple
  - fs-the-killing-form-is-nondegenerate-on-every-reductive-lie-algebra
  - fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible
  - fs-second-cohomology-classifies-all-nonabelian-extensions
  - fs-levi-subalgebras-are-literally-unique
  - fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups
examples: []
---

Invariant trace forms connect representation theory to structure theory.
Cartan's two criteria identify solvability and semisimplicity through trace
conditions, after which nondegenerate orthogonal complements yield the
decomposition into simple ideals. The Casimir construction then proves Weyl
complete reducibility. Reductive algebras are treated only after that supplier
is available: the page proves the equivalence between the central-plus-
semisimple decomposition, complete reducibility of the adjoint module, and
the usual derived-algebra characterization.

The Chevalley–Eilenberg differential is written with its full sign convention
and proved to square to zero. Its low degrees recover invariants and
derivations, while degree two classifies abelian extensions; finite
dimensionality of the quotient algebra is retained there so a section follows
by lifting a finite basis in ZF. The two Whitehead lemmas are proved from
complete reducibility and the Casimir homotopy, and the long exact sequence is
derived from the degreewise exact cochain complexes.

Levi existence and Malcev conjugacy follow in that order. Ado's strengthened
form is proved through the finite-codimensional enveloping-algebra ideal
construction, including nilpotent action by the nilradical and
restriction-of-scalars descent. Lie's second and third fundamental theorems
then relate finite-dimensional real Lie algebras to simply connected Lie
groups. Connected integrations are classified as discrete central quotients,
and nilpotent integrations acquire global polynomial BCH coordinates.

All algebraic structure and cohomology results on this page are proved in ZF.
The Lie-group results that use the library's closed-subgroup, covering, or
discrete-subgroup suppliers explicitly assume
$\mathsf{AC}_\omega$ via [[def-countable-choice]], and that assumption is
propagated to their dependent corollaries. The final false statements isolate
the missing hypotheses in centerlessness, reductive Killing forms, reductive
representations, extension classification, Levi uniqueness, and passage from
local to global Lie theory. Concrete calculations and witnesses appear on
[[semisimple-lie-algebras-cohomology-and-levi-theory-examples]].
