---
page: symmetric-collapse-and-ultrafilter-free-models
title: "Symmetric Collapse and Ultrafilter-Free Models"
status: published
items:
  - def-feferman-levy-symmetric-collapse-system
  - lem-feferman-levy-bounded-layer-support
  - lem-feferman-levy-fixed-boolean-values-come-from-initial-layers
  - def-feferman-levy-real-layers
  - lem-feferman-levy-real-layer-ground-cardinality-bound
  - lem-ground-aleph-n-is-countable-in-the-feferman-levy-model
  - lem-each-feferman-levy-real-layer-is-countable
  - thm-feferman-levy-reals-are-a-countable-union-of-countable-sets
  - thm-feferman-levy-reals-remain-uncountable
  - thm-feferman-levy-omega-one-is-ground-aleph-omega
  - cor-feferman-levy-omega-one-has-countable-cofinality
  - cor-countable-union-and-omega-one-regularity-fail-in-the-feferman-levy-model
  - lem-feferman-levy-symmetric-collapse-is-finitely-formalizable
  - cor-relative-consistency-of-feferman-levy-choice-failures-over-zf
  - def-feferman-tail-flip-definability-model
  - thm-feferman-definability-union-is-a-zf-model
  - lem-feferman-tail-complement-automorphism
  - thm-feferman-model-prime-ideals-on-p-omega-are-principal
  - cor-feferman-model-has-no-free-ultrafilter-on-omega
  - cor-feferman-model-refutes-bpi
  - lem-feferman-tail-flip-model-is-finitely-formalizable
  - cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf
  - cor-ultrafilter-lemma-and-bpi-are-not-theorems-of-zf
  - def-blass-finite-modification-classes-and-parameter-hod-model
  - lem-blass-paired-finite-modification-classes-form-a-russell-set
  - thm-small-forcing-does-not-create-measurable-cardinals
  - thm-blass-model-has-only-principal-ultrafilters
  - lem-blass-ultrafilter-free-model-is-finitely-formalizable
  - cor-relative-consistency-of-no-free-ultrafilters-on-any-set-over-zf
examples: []
---

The Feferman--Levy construction begins with the finite-support product of the
collapses of the ground-model cardinals $\aleph_n$. Its layer-preserving
automorphisms give every hereditarily symmetric name a bounded support. The
fixed Boolean algebra at that support comes from the corresponding initial
forcing layers, so the real line is the union of a canonical sequence
$\langle R_m:m<\omega\rangle$ of countable sets. The construction never
selects all their enumerations at once: the union remains uncountable.

The same layer analysis identifies the model's $\omega_1$ with the ground
$\aleph_\omega$. Its ground finite-aleph sequence is cofinal there, giving
$\operatorname{cf}(\omega_1)=\omega$. Hence countable unions of countable
sets need not be countable, $\omega_1$ need not be regular, and countable
Choice fails. The relative-consistency conclusion is obtained one externally
fixed finite fragment at a time; it does not infer a transitive model of full
ZF from bare consistency.

The second construction on this page uses the hereditary-symmetric model for
the bit-flip action on a countable Cohen sequence. Every individual HS name is
fixed by one bounded-coordinate subgroup, although the names in its transitive
closure need not share that bound. A condition can be fixed while the entire
unused tail of a coordinate outside the support is complemented. That
infinite-tail transformation, rather than a finite bit flip, forces every
prime ideal of $\mathcal P(\omega)$ and every ultrafilter on $\omega$ to be
principal. The Boolean Prime Ideal Theorem and the equivalent Ultrafilter
Lemma therefore fail in the model. Feferman's original source obtains its ZF
model from a ramified hierarchy; this page uses the library's general
hereditary-symmetric model theorem and does not identify that hierarchy with a
literal union of hereditary finite-predicate stages.

Blass's parameter-HOD construction replaces individual reals by their
finite-modification classes and packages the complementary classes into
canonical pairs. A fresh-coordinate tail flip proves that these pairs form a
Russell set: no choice function exists on an infinite subfamily. The stronger
endpoint reduces any alleged free ultrafilter to a complete uniform
ultrafilter on a least ordinal. Finite-coordinate homogeneity traces the
resulting measure to the constructible ground, while the small-forcing
preservation theorem and the constructible well-order rule it out. Closure of
the almost-well-orderable hierarchy under subsets, finite products,
surjective images, and well-ordered unions then carries the conclusion to
arbitrary sets.

Choice is used in the ambient constructible and forcing calculations exactly
where cardinal comparison and ultrapowers require it; none is attributed to
the final ZF models. The concluding results are one-way consistency
implications: relative to the consistency of ZF, it is consistent that every
ultrafilter on every set is principal.
