---
page: topological-quantum-algorithms-and-braid-compilation-examples
title: "Topological Quantum Algorithms and Braid Compilation — Examples"
status: draft
items: []
examples: ["ex-qa-37-fusion-measurement-branches", "cex-qa-37-projective-is-not-controlled", "ex-qa-37-approximate-b6-target", "ex-qa-37-fibonacci-budget"]
---

These examples instantiate the finite fusion and braid-compilation interfaces: fusion-measurement branches, the distinction between projective equivalence and a controlled operation, a joint six-strand target search, and a symbolic compilation-error budget. They use the exact encoding, spectator action and cost conventions of the companion page.

The examples keep mathematical approximation guarantees separate from the stated physical preparation, transport and measurement inputs. In particular a global phase on a fixed sector does not automatically remain irrelevant after adding coherent control.

The Ising braid model supplies a contrasting boundary: under the stated
Majorana–Ising interface, braid-only gates normalize the logical Pauli group,
their projective image is finite, and for at least two encoded qubits it is not
dense in the full projective unitary group
([[thm-qc-tqc-ising-braids-clifford-only]]). This limitation is conditional on
that interface and does not change the Fibonacci compilation claims.
