---
id: def-qc-cyclotomic-bullet-automorphism
kind: definition
title: The nontrivial real-conjugation automorphism of the eighth cyclotomic field
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - cor-the-galois-group-of-a-rational-cyclotomic-field
justified_by: []
axiom_use: "None; the automorphism is the explicit Galois element indexed by 5 modulo 8."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 1
---

## Definition

Let $K=\mathbb Q(\omega)$, where $\omega=e^{i\pi/4}$. The class $[5]_8$ is a
unit modulo $8$, so the cyclotomic Galois group supplier
[[cor-the-galois-group-of-a-rational-cyclotomic-field]] gives the unique
$\mathbb Q$-automorphism $\bullet$ with
$\omega^\bullet=\omega^5=-\omega$. It fixes $i=\omega^2$ and sends
$\sqrt2=\omega-\omega^3$ to $-\sqrt2$. Complex conjugation and $\bullet$
commute, as is checked on the generator $\omega$. The four embeddings of $K$
are the identity, complex conjugation, $\bullet$, and their composite,
because the Galois group consists of the four maps $\omega\mapsto\omega^j$
for $j=1,3,5,7$. Since $\bullet$ fixes $1/2$ and maps $\omega$ into
$\mathbb Z[\omega]$, it preserves $D=\mathbb Z[\omega,1/2]$.

This is the nontrivial real-conjugation embedding used in the scaled-grid
conditions; it is distinct from complex conjugation.

