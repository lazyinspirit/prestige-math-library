---
id: thm-qa-32-promise-classical-containments
kind: theorem
title: PromiseP is contained in PromiseBPP and PromiseBPP in BQP
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 14
deps:
  - def-promise-problem
  - def-qa-32-promise-bpp
  - def-rp-corp-zpp-bpp-and-pp-classes
  - def-probabilistic-polynomial-time-machine-interface
  - def-qc-bqp-promise-class
  - lem-polynomial-time-computations-have-logspace-uniform-circuits
  - lem-qa-32-indexed-to-full-list-conversion
  - lem-qa-32-exact-clifford-t-boolean-circuit-embedding
  - def-qc-clifford-t-gate-library
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - def-qc-quantum-acceptance-probability
  - thm-qc-output-acceptance-law-normalizes
justified_by: []
proof_strategy: direct
axiom_use: "None; random tapes, circuit families, and compiler outputs are finite and explicitly encoded."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections IV.1 and IV.3"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For promise problems in the QC14 model,

$$ \mathrm{PromiseP}\subseteq\mathrm{PromiseBPP}\subseteq\mathrm{BQP}, \qquad \mathrm{BPP}\subseteq\mathrm{BQP}. $$

## Facts & Assumptions

**Given:** A binary-string promise pair, a polynomial-time randomized machine when needed, and the exact Boolean-to-QC14 compiler. Prove that all random-tape, gate, generator, and output costs remain polynomial.

[F1] [[def-promise-problem]]: a PromiseP machine is correct on $Y$ and $N$ and is unrestricted elsewhere.

[F2] [[def-qa-32-promise-bpp]]: one PTM with a fixed worst-case polynomial branch bound has acceptance probabilities at least $2/3$ on $Y$ and at most $1/3$ on $N$.

[F3] [[def-probabilistic-polynomial-time-machine-interface]]: a bounded-time PTM on inputs of length $n$ can be represented by one uniform finite tape of polynomially many independent fair bits; unused suffixes are ignored.

[F4] [[lem-polynomial-time-computations-have-logspace-uniform-circuits]]: a fixed deterministic polynomial-time computation has a polynomial-size logspace-uniform Boolean circuit family.

[F5] [[lem-qa-32-indexed-to-full-list-conversion]]: its indexed family has a polynomial-time full-list generator.

[F6] [[lem-qa-32-exact-clifford-t-boolean-circuit-embedding]]: a complete Boolean circuit list can be reversibly compiled into an exact QC14 list in polynomial time and size.

[F7] [[def-qc-bqp-promise-class]]: BQP uses the same QC14 family model and the $2/3,1/3$ acceptance thresholds.

[F8] [[def-qc-clifford-t-gate-library]]: $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2$; ordered tensor maps act factorwise on the registers ([[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]]).

[F9] [[thm-qc-computational-basis-orthonormal]]: the finite ordered computational basis is orthonormal.

[F10] [[def-qc-quantum-acceptance-probability]] and [[thm-qc-output-acceptance-law-normalizes]]: the designated target-bit outcome probability sums squared amplitudes over the unmeasured random and work registers.

## Proof

1.1 If $\Pi\in\mathrm{PromiseP}$, run its deterministic decider as a PTM that ignores all random bits. Its acceptance probability is $1$ on $Y$ and $0$ on $N$, so it satisfies [F2]. Thus $\mathrm{PromiseP}\subseteq\mathrm{PromiseBPP}$. [given, F1, F2, algebra]

1.2 Now let $\Pi\in\mathrm{PromiseBPP}$ be witnessed by a PTM $M$. Choose a strictly increasing positive integer polynomial $R(n)$ that bounds both its run time and the number of fair bits it can use on length-$n$ inputs. By [F3], using a uniform $R(n)$-bit string and ignoring its unused suffix preserves every acceptance probability. [given, F2, F3, construct]

2.1 For a binary word $w$ of length $m$, define one deterministic polynomial-time machine $M^\sharp$ as follows. Search for an $n$ with $m=n+R(n)$; strict increase makes it unique if it exists. If none exists, output $0$. If it exists, split $w=x\|r$ with $|x|=n$ and $|r|=R(n)$, simulate $M$ on $x$ using $r$ as its fair random tape, and output its accept bit. The search and simulation take polynomial time in $m$, since $n\le m$ and $R$ is a fixed polynomial. Whenever a fixed multitape stage in this construction or its later composition runs for at most $P(m)$ steps, a one-tape simulator stores its finitely many tape contents in aligned tracks of a finite product alphabet, with one head marker per tape. Each track uses at most $m+P(m)+O(1)$ cells, and a constant number of sweeps simulates each step in $O(m+P(m))$ time. Put the binary output on a designated track starting at cell $0$; a final cleanup sweep replaces each product symbol by its output-track component, leaving the exact output word followed by blanks on the final tape. Thus the construction has a one-tape polynomial-time implementation whenever that convention is needed. [given, F3, step 1.2, construct]

3.1 Apply [F4] to $M^\sharp$, then [F5] to emit the Boolean gate list at length $m(n)=n+R(n)$. Compose this generator with the polynomial-time map $n\mapsto m(n)$. Apply [F6] to that list. In the resulting QC14 family on input $x$, designate the next $R(n)$ auxiliary wires as the random register, apply $H$ to each from its initial zero state, and then run the reversible compiler on the $x$ and random registers with a zero target and clean work. Starting from the compiled list with $g$ gates, prefix Hadamard records on wire indices $n,\ldots,n+R(n)-1$, change the unary input-wire count to $n$, and rewrite the self-delimiting gate count to $g+R(n)$; retain the same total-wire count, target tuple and compiled gate records. The fixed composition of these list operations runs in polynomial time in $n$ because all intermediate Boolean and QC14 descriptions have polynomial length. The one-tape simulation described in step 2.1 therefore yields one fixed deterministic one-tape generator that leaves the complete QC14 description as its final tape word, as required for the full-list family. [given, F3, F4, F5, F6, step 2.1, construct]

4.1 By [F8]–[F9], the Hadamards prepare $2^{-R(n)/2}\sum_{r\in\{0,1\}^{R(n)}}|r\rangle$ on the zero-initialized random register. For each basis $r$, the reversible circuit writes exactly the bit $M(x;r)$ into the target and returns its work to zero. Distinct $r$ values remain in orthogonal computational-basis states of the unmeasured random register. The one-tape generator from step 3.1 satisfies the full-list uniformity condition in [F7]. Therefore, by [F10], the target's acceptance probability is $2^{-R(n)}\#\{r\in\{0,1\}^{R(n)}:M(x;r)\text{ accepts}\},$ which is exactly the PTM acceptance probability in [F3]. Its YES and NO bounds in [F2] are the BQP bounds in [F7]. Hence $\mathrm{PromiseBPP}\subseteq\mathrm{BQP}$. [F2, F3, F7, F8, F9, F10, step 3.1, algebra]

5.1 For an ordinary language $L\in\mathrm{BPP}$, use the total promise pair $(L,\{0,1\}^*\setminus L)$. Its BPP PTM satisfies the PromiseBPP definition [F2], so step 4.1 gives a BQP family for the language. Thus $\mathrm{BPP}\subseteq\mathrm{BQP}$. [given, F2, F7, step 4.1] ∎
