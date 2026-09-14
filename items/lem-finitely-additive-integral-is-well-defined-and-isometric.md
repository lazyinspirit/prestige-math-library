---
id: lem-finitely-additive-integral-is-well-defined-and-isometric
kind: lemma
title: "The finitely additive integral is well-defined and isometric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-additive-integral-on-ell-infinity, thm-reals-cauchy-complete, thm-complex-plane-is-complete]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorems B.17-B.18 and complete proofs, printed pp.191-193"
pipeline_run: phase-2-next-18
---

## Statement

For every $\nu\in ba(\mathcal P(\mathbb N))$, the finite-range formula
$I_\nu^0$ is representation-independent and has a unique bounded linear
extension $I_\nu\in(\ell^\infty)^*$. Moreover

$$\|I_\nu\|=|\nu|(\mathbb N).$$

Consequently $\nu\mapsto I_\nu$ is a linear isometry into
$(\ell^\infty)^*$.

## Facts & Assumptions

[L1] Finite-range sequences are uniformly dense in $\ell^\infty$, and the
finite-range integral is the partition formula
([[def-finitely-additive-integral-on-ell-infinity]]).

[L2] The scalar fields $\mathbb R$ and $\mathbb C$ are complete
([[thm-reals-cauchy-complete]], [[thm-complex-plane-is-complete]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Two partition representations of $s$ have the common refinement [given, L1]
$(A_j\cap B_k)_{j,k}$. Finite additivity replaces each original summand by its
sum over the refinement; because both coefficients equal $s_n$ on a nonempty
cell, the two refined sums agree. Thus $I_\nu^0$ is well-defined and linear.
[L1, finite additivity]

2.1 For a partition representation, [given, L1, step 1.1]

$$|I_\nu^0(s)|\le\sum_j|c_j||\nu(A_j)| \le\|s\|_\infty|\nu|(\mathbb N).$$

Hence $I_\nu^0$ is bounded with norm at most $|\nu|(\mathbb N)$. [L1,
definition of variation]

3.1 Use the fixed dyadic grid to define a finite-range quantization $q_k(x)$ [given, L2, step 2.1]
with $\|q_k(x)-x\|_\infty\le2^{-k}$ (coordinatewise in a square over
$\mathbb C$). Step 2.1 makes $(I_\nu^0(q_k(x)))_k$ Cauchy; [L2] supplies its
limit. The same estimate shows independence of any approximating finite-range
sequence, linearity, uniqueness, and the bound $\|I_\nu\|\le|\nu|(\mathbb N)$.
[L2, step 2.1, fixed quantizer]

4.1 Given $\varepsilon>0$, choose a finite partition $(A_j)$ with [given, step 3.1]
$\sum_j|\nu(A_j)|>|\nu|(\mathbb N)-\varepsilon$. Put $c_j=1$ when
$\nu(A_j)=0$ and otherwise
$c_j=\overline{\nu(A_j)}/|\nu(A_j)|$ (the same sign formula over $\mathbb R$).
Then $\|\sum_jc_j\mathbf1_{A_j}\|_\infty=1$ and its integral is
$\sum_j|\nu(A_j)|$. Thus $\|I_\nu\|\ge|\nu|(\mathbb N)-\varepsilon$; letting
$\varepsilon\downarrow0$ proves equality. Linearity in $\nu$ is immediate
from the formula. [steps 1.1, 3.1, variation supremum] ∎
