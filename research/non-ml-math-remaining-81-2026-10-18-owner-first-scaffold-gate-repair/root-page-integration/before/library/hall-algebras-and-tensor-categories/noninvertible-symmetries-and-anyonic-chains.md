---
page: noninvertible-symmetries-and-anyonic-chains
title: "Noninvertible Symmetries and Anyonic Chains"
status: draft
items:
  - def-anyonic-fusion-path-space
  - def-categorical-object-and-operator-invertibility
  - lem-anyonic-fusion-path-basis
  - thm-anyonic-path-space-is-hilbert-under-unitarity
  - def-anyonic-frobenius-schur-sign
  - def-anyonic-local-channel-projector
  - lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization
  - prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible
  - thm-anyonic-channel-projectors-are-reparenthesization-independent
  - thm-anyonic-local-channel-projectors-are-orthogonal
  - prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb
  - lem-ising-unitary-normal-data-and-ribbon-coherence
  - lem-ell-four-root-ising-gauge-and-chirality-conversion
  - thm-ising-periodic-two-sector-and-line-representation
examples: []
---

An anyonic path space is a fixed-boundary Hom space in a finite semisimple fusion category. Its basis records every intermediate simple label and every vertex multiplicity index; a local channel operator is obtained by changing to a tree where the selected neighboring pair fuses first, projecting to that channel, and changing back. Under unitary hypotheses these are orthogonal projections. For a self-dual simple with a one-dimensional vacuum channel, the cap/cup normalization carries its Frobenius–Schur sign into the Temperley–Lieb loop parameter.

The page distinguishes tensor-invertible objects, units of the Grothendieck fusion ring, and invertible linear operators. It makes no general physical symmetry claim: any Hamiltonian or symmetry operator requires a specified representation and model. The full Ising construction supplies every admissible F/R block and proves both coherence identities, the positive pivot and its precise FS/chirality conventions. The periodic representation keeps both sectors, evaluates every local projector and line map, and distinguishes the resulting doubled representation from the single-chain translated map.

## Reading prerequisites

The planned reading route includes [[temperley-lieb-jones-wenzl-traces-and-quotients]] and [[hopf-hecke-and-quantum-symmetry-interfaces]]. The first is the source of the root-of-unity quotient route; the second contributes only the rational spin-chain R-matrix interface and is not a logical supplier for the categorical Ising/Fibonacci F/R data authored here.

## Path spaces and local operators

The fixed-boundary space is $$\operatorname{Hom}_{\mathcal C}(c,(((b\otimes a)\otimes a)\cdots\otimes a)).$$ A path is a sequence of simple labels from $b$ to $c$, with a separate basis index at each split-space vertex. This space is generally not a tensor product of local sites. The path-basis lemma proves its dimension and completeness; the unitary theorem supplies the Hilbert-space interpretation only under the stated dagger and orthogonality hypotheses.

Each local channel projection uses a typed associator F-move, and the Mac Lane coherence result identifies composites for the same rebracketing. The three reusable Ising results supply the complete category independently of the earlier sector example: [[lem-ising-unitary-normal-data-and-ribbon-coherence]], [[lem-ell-four-root-ising-gauge-and-chirality-conversion]], and [[thm-ising-periodic-two-sector-and-line-representation]]. The root comparison uses the accepted ell-four signed TL/ribbon quotient with an explicit parity conversion; it does not identify different FS conventions by a vertex gauge.

## Noninvertibility distinctions

In the Fibonacci fusion ring, $[\tau]^2=[1]+[\tau]$ implies $[\tau]([\tau]-[1])=[1]$. The inverse has a negative coefficient and therefore is not the class of an object, since an object in a finite semisimple category is a finite direct sum of simple objects with nonnegative multiplicities. The B page also gives an explicit finite path-space projector and an invertible identity operator, keeping operator invertibility as a separate question.

Companion: [[noninvertible-symmetries-and-anyonic-chains-examples]].
