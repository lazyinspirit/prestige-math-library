---
id: cex-qsmx-bogoliubov-zero-mode
kind: counterexample
title: A zero-frequency Bose mode destroys trace normalization
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 6
deps:
  - thm-qsmx-finite-boson-stability
  - lem-qsm-models-diagonal-occupation-trace
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-qsmx-finite-boson-stability: mathematical-premise
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, §6.3"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices: A Concise Introduction, §3.4"
      url: "https://arxiv.org/pdf/1311.2717v2"
verification:
  precheck: pass
---

## Statement refuted

Assume the Axiom of Choice and Countable Choice. For a finite bosonic mode
list with $\omega_1=0$, $\omega_k>0$ for
$2\leq k\leq r$, $\hbar>0$, and $\beta>0$, the full occupation partition sum
for energies
$$E(\mathbf n):=\sum_{k=2}^{r}\hbar\omega_k(n_k+\tfrac12),\qquad \mathbf n\in\mathbb N_0^r,$$
is finite and equals
$$\prod_{k=2}^{r}\left[2\sinh\!\left(\frac{\beta\hbar\omega_k}{2}\right)\right]^{-1},$$
where the empty product is $1$ and $\sinh x:=(e^x-e^{-x})/2$.

## Statement references

[[thm-qsmx-finite-boson-stability]]

[[lem-qsm-models-diagonal-occupation-trace]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** An integer $r\geq1$, $\hbar>0$ in joule-seconds, $\beta>0$ in
inverse joules, and finite positive angular frequencies
$\omega_2,\ldots,\omega_r$ in inverse seconds. The first mode has energy
zero for every occupation.

[A1] [[def-axiom-of-choice]] and [[def-countable-choice]]: assume both Choice
principles as stated; Countable Choice is the hypothesis of the diagonal
occupation trace supplier.

[F1] [[thm-qsmx-finite-boson-stability]]: the finite diagonalization
partition formula assumes every normal frequency is strictly positive; it
does not include a zero-frequency mode.

[F2] [[lem-qsm-models-diagonal-occupation-trace]]: finite bosonic mode
occupations form the diagonal basis, and real diagonal energy multipliers
are self-adjoint on their maximal weighted $\ell^2$ domains under Countable
Choice. Its finite geometric trace formula requires
$q_j=e^{-\beta\epsilon_j}<1$ for every mode.

## Counterexample
For $\beta>0$, define the occupation partition sum
$$Z_\beta:=\sum_{\mathbf n\in\mathbb N_0^r}e^{-\beta E(\mathbf n)}\in[0,+\infty].$$
The first mode contributes no energy.

1.1 Apply [F2] to the reduced finite mode set $\{2,\ldots,r\}$ with $\epsilon_k=\hbar\omega_k$ . Its factors satisfy $q_k=e^{-\beta\epsilon_k}\in(0,1)$ , and the set is finite, so the hypotheses $q_*<1$ and $\sum_{k=2}^rq_k<\infty$ hold. Its occupation partition sum is $\prod_{k=2}^{r}(1-q_k)^{-1}$ ; adding each oscillator's zero-point energy $\hbar\omega_k/2$ multiplies this by $e^{-\beta\sum_{k=2}^r\hbar\omega_k/2}$ , giving $\prod_{k=2}^{r}[2\sinh(\beta\hbar\omega_k/2)]^{-1}$ . If $r=1$ , the reduced set is empty and its sum and product are both $1$ . [A1, F2, given, algebra]

2.1 For each $k\geq2$ , put $x_k=\beta\hbar\omega_k>0$ . Its one-mode occupation sum is $$\sum_{n_k=0}^{\infty}e^{-x_k(n_k+1/2)}=\frac{e^{-x_k/2}}{1-e^{-x_k}}=\left[2\sinh(x_k/2)\right]^{-1},$$ which is positive and finite. If the first occupation is restricted to $0\leq n_1\leq N$ and the remaining modes are summed, the resulting partial sum is $$(N+1)\prod_{k=2}^{r}\left[2\sinh(x_k/2)\right]^{-1}.$$ This tends to $+\infty$ as $N\to\infty$ ; when $r=1$ the product is empty and the same partial sum is $N+1$ . Hence $Z_\beta=+\infty$ . [A1, given, F1, F2, step 1.1, algebra]

3.1 Removing mode $1$ changes the occupation Hilbert space and leaves only the finite product over $k\geq2$ . The full system has an additional countably infinite zero-energy occupation degeneracy, so its positive Gibbs weights cannot be normalized. The finite positive-frequency theorem does not apply at $\omega_1=0$ , and the omitted-mode product is the partition sum of a different model. [F1, step 2.1, algebra] ∎

## Remarks

The counterexample is finite in mode count; the divergence comes from the
unbounded occupation of one zero-energy bosonic mode, not from an
infinite-mode limit.
