---
page: symmetric-collapse-and-ultrafilter-free-models-examples
title: "Symmetric Collapse and Ultrafilter-Free Models: Examples and Counterexamples"
status: published
items: []
examples:
  - ex-first-feferman-levy-collapse-layers
  - fs-countable-unions-of-countable-sets-are-countable-in-zf
  - fs-omega-one-is-regular-in-zf
  - ex-feferman-tail-flip-turns-a-generic-real-into-its-complement-modulo-finite
  - cex-finite-bit-flips-cannot-defeat-a-free-ultrafilter
  - ex-blass-paired-finite-modification-classes
---

The first example writes out the supports and countability maps for
$R_0,R_1,R_2$. Each fixed layer is countable, but a sequence choosing all of
the enumerations would combine into an enumeration of the whole real line.
The false-statement examples use this same model to separate conditional
nonprovability over ZF from an unconditional model-existence claim: countable
unions of countable sets need not be countable, and $\omega_1$ need not be
regular.

The next two calculations isolate the exact ultrafilter mechanism. Flipping
all unused bits from a cutoff onward fixes a finite condition and turns one
Cohen real into its complement modulo a finite initial segment. By contrast,
membership in a free ultrafilter is invariant under every finite
modification, so a finite-bit flip cannot produce the contradiction.

The final example performs the analogous tail flip for Blass's paired
finite-modification classes. Choosing the least coordinate outside the finite
parameter support requires no Choice; the automorphism fixes the unordered
pair but swaps its two members. This rules out a choice function on every
infinite subfamily while leaving finite choices untouched.
