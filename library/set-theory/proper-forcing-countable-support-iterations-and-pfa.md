---
page: proper-forcing-countable-support-iterations-and-pfa
title: "Proper Forcing, Countable-Support Iterations, and PFA"
status: published
items:
  - def-countable-support-forcing-iteration
  - def-countable-model-generic-master-condition-and-proper-poset
  - lem-proper-master-condition-characterizations
  - thm-ccc-and-countably-closed-forcings-are-proper
  - thm-proper-forcing-preserves-stationary-subsets-of-omega-one
  - lem-proper-iteration-master-condition
  - thm-countable-support-iterations-preserve-properness
  - def-proper-forcing-axiom
  - cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis
  - def-p-ideals-pid-pseudointersection-number-and-s-spaces
  - thm-pfa-implies-p-ideal-dichotomy
  - lem-pfa-raises-the-pseudointersection-number
  - thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces
  - cor-pfa-implies-no-s-spaces
  - rem-laver-preparation-versus-pfa-bookkeeping
  - def-laver-guided-proper-bookkeeping-iteration
  - lem-laver-guided-iteration-size-collapse-and-factorization
  - thm-a-supercompact-cardinal-can-be-forced-to-give-pfa
  - lem-formal-pfa-iteration-verification-compiler
  - cor-formal-consistency-of-pfa-from-a-supercompact
examples: []
---

Properness is formulated through countable elementary submodels and master
conditions: every dense set in the model is required to be predense below the
master, not to contain the master itself. The equivalent forcing and
ground-model-capture formulations make that definition usable in proofs. Both
ccc and countably closed forcing are proper, while proper forcing preserves
stationary subsets of $\omega_1$ and therefore preserves $\omega_1$.

Countable-support iterations use two-step forcing at successors and inverse
limits with countable nontrivial support at limits. The master-condition lemma
handles a named tail condition while fixing an earlier master segment. At a
countable-cofinality limit its construction unions coherent initial segments,
not arbitrary descending coordinate values. Successor, countable-cofinality
and bounded-model limit cases then yield the preservation theorem: a
countable-support iteration whose iterands are forced proper is proper.

PFA is stated for a nonempty proper order and any family of at most
$\omega_1$ dense sets. Restriction to ccc orders gives
$\mathrm{MA}(\aleph_1)$ and hence the Suslin Hypothesis. Its combinatorial
consequences are developed through the P-ideal dichotomy and the inequality
$\mathfrak p>\omega_1$. The topology argument uses both hypotheses: PID
organizes the right-separated-neighborhood ideal, while the bound by
$\mathfrak p$ rules out the remaining obstruction. Thus regular Hausdorff
hereditarily separable spaces are Lindel&ouml;f under PFA, so PFA implies that
there are no S-spaces.

The consistency construction separates two uses of Laver anticipation.
Laver preparation makes supercompactness indestructible under a restricted
class of later forcings; the PFA construction instead uses the Laver function
as bookkeeping for arbitrary proper forcing names. The length-$\kappa$
countable-support iteration is proper and $\kappa$-cc, collapses precisely the
ground cardinals strictly between $\omega_1$ and $\kappa$, and forces
$\kappa=\omega_2$. When an embedding anticipates a requested proper order,
the image iteration factors through that order, and elementarity reflects the
required dense-set filter back to the original extension.

Finally, the semantic forcing proof is compiled into fixed finite-fragment
proof transformations. Primitive-recursive syntax operations translate each
certified ZFC+PFA refutation into a certified ZFC+supercompact refutation, and
PA verifies the resulting consistency implication. This is a formal relative
consistency result; it neither extracts a countable transitive model from bare
consistency nor asserts that an outer generic filter belongs to the ground
extension. Choice is declared at every elementary-model, simultaneous-choice,
cardinal-arithmetic and formalization step that uses it.
