---
id: alg-qa-finite-cyclic-discrete-logarithm
kind: algorithm
title: Finite cyclic discrete logarithm by Fourier sampling
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - alg-qa-cyclic-group-power-evaluation
  - lem-qa-cyclic-dlp-hidden-subgroup
  - lem-qa-cyclic-dlp-annihilator-equation
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - def-qa-normalized-finite-abelian-fourier-transform
  - thm-qa-finite-abelian-fourier-transform-is-unitary
  - def-qc-dirac-notation-conversion
  - alg-qa-euclidean-modular-inverse
  - lem-group-power-laws
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
---

## Definition

Input a promised instance $(G,g,x,q)$ from [[def-qa-finite-cyclic-discrete-logarithm-problem]] and a rational confidence target $\delta=p/v$ supplied as binary positive integers $p<v$, together with supplied exact uniform-state preparation and product-QFT circuits for $\mathbb Z_q^2$, including their full-register extensions and declared costs as required by [[alg-qa-finite-abelian-hidden-subgroup-sample]]. If the direct coherent $f$ oracle is unavailable, first check that the supplied interfaces support profile 2 of [[alg-qa-cyclic-group-power-evaluation]], including classical repeated squaring and the forward and inverse-constant controlled multiplications. If they do not, return `UNSUPPORTED_ACCESS` before sampling. Otherwise construct that profile's explicit compute-XOR-uncompute oracle and precompute its repeated-squaring constants once for all samples.
Let $L=\lceil\log_2q\rceil$, computed as the bit length of $q-1$. Let $D$ be the least integer $d\ge0$ with $2^d\delta\ge1$, found by testing $d=0,1,\ldots$ using exact rational comparisons, and set $t=(1+L)D$.
Repeat the following $t$ times, with fresh registers and independent measurements:

1. Use [[alg-qa-finite-abelian-hidden-subgroup-sample]] once on $\mathbb Z_q\times\mathbb Z_q$ with hiding function $f(u,v)=g^ux^v$, obtaining a character label $(c,d)$.
2. Use [[alg-qa-euclidean-modular-inverse]] on $(q,c)$. If it returns `NO_INVERSE`, discard this sample and continue; otherwise its output is $c^{-1}\pmod q$.
3. Set $\widetilde a=d\,c^{-1}\pmod q$.
4. Compute $g^{\widetilde a}$ by binary repeated squaring using the supplied multiplication interface, then compare it with $x$ using the equality interface. Return $\widetilde a$ only if they agree.

If no iteration returns a verified value, return FAIL. A direct coherent oracle for $f$ costs one $f$ query per sample only when explicitly supplied; on the supported fallback branch, charge the controlled group operations, gates, and classical precomputation of [[alg-qa-cyclic-group-power-evaluation]]. The algorithm does not infer controlled access from an uncontrolled oracle.
