---
id: ex-qa-simon-finite-rank-and-sampling
kind: example
title: "Finite Simon rank and sampling examples"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-simon-promise
  - def-qa-binary-dot-product
  - thm-qa-simon-postquery-coset-state
  - thm-qa-simon-hadamard-sampling-law
  - def-qa-simon-rank-process
  - thm-qa-simon-rank-growth-probability
  - alg-qa-f2-gaussian-elimination
  - thm-qa-f2-gaussian-elimination-correct-and-cost
  - alg-qa-simon-recovery-with-budget
  - thm-qa-simon-recovery-correctness-and-query-bound
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the examples enumerate finite strings, rows, and outcomes explicitly."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Example

### One address bit

Take $n=1$, hidden mask $s=1$, output width $m=0$, and the constant map from the two one-bit addresses to the unique empty output string. The two addresses are exactly the single coset $\{0,1\}$. Here $d=n-1=0$, the only sample row is $0$, and the recovery algorithm's zero-rank branch returns $1$ with no query.

### Two address bits

Take $n=2$, $m=1$, $s=11$, and define
$$
f(00)=f(11)=0,\qquad f(01)=f(10)=1.
$$
The fibers are the two cosets of $\{00,11\}$. The output measurement has two outcomes, each with probability $1/2$. Conditional on outcome $0$, the address state before the final Hadamards is $(|00\rangle+|11\rangle)/\sqrt2$; conditional on outcome $1$, it is $(|01\rangle+|10\rangle)/\sqrt2$.

The equation $s\cdot y=0$ gives $s^\perp=\{00,11\}$. Each sample is uniform on these two rows. At rank zero, the next row raises rank exactly when it is $11$, so the exact rank-rise probability is $1/2$. The matrix $Y=[11]$ has rank $1=n-1$; the row-reduction procedure chooses column $0$ as pivot, sets the sole free coordinate $x_1=1$, solves $x_0=1$, and returns $s=11$.

For failure tolerance $\delta=1/2$, the finite cap is $M=\lceil2(1)/(1/2)\rceil=4$. The cap fails precisely when all four rows are $00$, an event of probability $1/16$; hence this instance succeeds with probability $15/16$ and uses at most four queries.

## Facts & Assumptions
**Given:** The finite Simon instances displayed above.

[F1] [[def-qa-simon-promise]]: equal function values occur exactly on pairs whose addresses differ by the hidden mask.

[F2] [[def-qa-binary-dot-product]]: $s\cdot y$ is the parity of the coordinatewise products.

[F3] [[thm-qa-simon-postquery-coset-state]]: each target outcome has probability $2^{1-n}$ and leaves the address in its normalized two-address coset state.

[F4] [[thm-qa-simon-hadamard-sampling-law]] and [[def-qa-simon-rank-process]]: samples are uniform on $s^\perp$, and newly initialized runs are independent.

[F5] [[thm-qa-simon-rank-growth-probability]]: at rank $k<d$, the rise probability is $1-2^{k-d}$.

[F6] [[thm-qa-f2-gaussian-elimination-correct-and-cost]]: full-rank rows in $s^\perp$ yield the unique nonzero kernel vector $s$.

[F7] [[alg-qa-simon-recovery-with-budget]]: for $d=0$ return $1$ without queries; otherwise use $M=\lceil2d/\delta\rceil$ trials and return FAIL if rank remains incomplete.

[F8] [[thm-qa-simon-recovery-correctness-and-query-bound]]: the cap's failure probability is at most $\delta$ and its query count is at most $M$.

## Verification

1.1 At $n=1$, XOR with $s=1$ pairs the only two addresses, and the unique output string labels their single coset. Since $d=0$, [F7] returns $1$ before any sample; it is the only nonzero one-bit mask. [given, F1, F7, algebra]

1.2 At $n=2$, the table pairs exactly $00$ with $11$ and $01$ with $10$, so it obeys [F1] and has hidden mask $11$. The dot-product parity [F2] gives $11\cdot00=11\cdot11=0$ and $11\cdot01=11\cdot10=1$. By [F3], both output branches have probability $1/2$ and the address states are $(|00\rangle+|11\rangle)/\sqrt2$ and $(|01\rangle+|10\rangle)/\sqrt2$, as displayed. [given, F1, F2, F3, algebra]

1.3 By [F4], the two allowed rows are equiprobable; at rank zero only row $11$ is nonzero and outside the zero span, so the rank-rise probability is $1/2$, also the value $1-2^{0-1}$ from [F5]. [F4, F5, algebra]

1.4 Row $11$ has pivot column $0$; the row equation is $x_0\oplus x_1=0$. Setting the unique free coordinate $x_1=1$ gives $x_0=1$, so the nonzero kernel vector is $11$ by direct calculation, agreeing with [F6]. [F6, algebra]

2.1 For $\delta=1/2$, [F7] gives $M=4$. The cap fails exactly when its first four independent potential rows are all $00$, an event of probability $(1/2)^4=1/16$ by [F4]; therefore its success probability is $15/16$, consistent with the general lower bound [F8]. [F4, F7, F8, algebra] ∎

