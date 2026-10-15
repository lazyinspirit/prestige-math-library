---
id: ex-td-infinite-mode-trace-divergence
kind: example
title: "Identical bosonic modes do not have a finite infinite-mode Gibbs trace"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: [def-axiom-of-choice, def-countable-choice, def-square-summable-family-on-an-arbitrary-index-set, def-td-si-quantities, def-tdmath-countable-canonical-model, def-trace-class-operator, lem-tdmath-diagonal-model-hilbert-and-domain, pthm-td-finite-mode-occupation-and-trace-formulas, post-td-canonical-sampling, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-countable-canonical-model: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-tdmath-diagonal-model-hilbert-and-domain: mathematical-premise
  pthm-td-finite-mode-occupation-and-trace-formulas: physical-result
  post-td-canonical-sampling: physical-assumption
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A countable family of independent identical bosonic modes at fixed positive excitation energy; the divergent positive trace rules out this particular normalized Gibbs density and says nothing about finite mode sets or renormalized models."
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§3.5–3.6
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§5.6–5.7
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Example

Assume AC and Countable Choice as required by [[pthm-td-finite-mode-occupation-and-trace-formulas]] and the trace-class suppliers. Take modes indexed by $j\in\mathbb N$, each with excitation energy $\varepsilon>0$ joules, and let $q=e^{-\beta\varepsilon}\in(0,1)$. Let $\mathcal F$ be the set of finite-support occupation sequences $n=(n_j)_{j\ge1}$ with $n_j\in\mathbb N_0$. Enumerate $\mathcal F$ by increasing $R(n)=\sum_{j:n_j>0}(j+n_j)$ and lexicographic order of the finite list of nonzero pairs $(j,n_j)$ within each level. Each level is finite because $j,n_j\le R(n)$ on its support, and every configuration occurs; skipping empty levels gives a bijection $\mathbb N\to\mathcal F$. Define
$$\ell^2(\mathcal F):=\Bigl\{c:\mathcal F\to\mathbb C:\sum_{n\in\mathcal F}|c(n)|^2<\infty\Bigr\},\qquad \langle c,d\rangle:=\sum_{n\in\mathcal F}c(n)\overline{d(n)}.$$
The vector $|n\rangle$ is the indicator of $\{n\}$; these canonical occupation vectors form an orthonormal basis. Relabeling by the displayed enumeration is an isometry with $\ell^2(\mathbb N,\mathbb C)$, whose completeness and dense finite-support subspace are supplied by [[lem-tdmath-diagonal-model-hilbert-and-domain]]; the coordinate pairing makes the displayed indicator vectors orthonormal, and their finite linear span is exactly that dense subspace, so they form an orthonormal basis; the definition of square-summable families and their inner product is [[def-square-summable-family-on-an-arbitrary-index-set]]. Define the bounded positive diagonal Gibbs weight $K_\beta|n\rangle=q^{\sum_jn_j}|n\rangle$. On the subspace with $n_j=0$ for every $j>M$, the corresponding finite-mode partition sum is the trace of that restriction.

## Facts & Assumptions

**Given:** The independent identical-mode Fock model, positive $\beta\varepsilon$, and the canonical trace convention.

[F1] [[pthm-td-finite-mode-occupation-and-trace-formulas]]: for each finite collection of independent bosonic modes the Gibbs trace is the product of the one-mode traces $(1-q)^{-1}$.

[F2] [[post-td-canonical-sampling]]: the A-page countable canonical law is adopted only for a specified countable model with a positive finite partition sum.

[F3] [[def-countable-choice]], [[def-trace-class-operator]], and [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: under Countable Choice, a positive trace-class operator has finite trace equal to the sum of its nonnegative eigenvalues with multiplicity.

[F4] [[def-tdmath-countable-canonical-model]]: the nonnegative countable partition sum is the supremum of its finite subsums, so a finite normalizer bounds the sum over every subset of the listed states.

[F5] [[def-td-si-quantities]]: $\varepsilon$ is in joules and $\beta$ in $\mathrm{J^{-1}}$, so $\beta\varepsilon$ is dimensionless.

[F6] [[def-square-summable-family-on-an-arbitrary-index-set]] defines $\ell^2(\mathcal F)$ and its inner product. The explicit enumeration identifies it isometrically with $\ell^2(\mathbb N,\mathbb C)$, which is complete with a dense finite-support subspace by [[lem-tdmath-diagonal-model-hilbert-and-domain]]. The indicator vectors are orthonormal by the coordinate pairing, and their finite linear span is that dense subspace, so they form an orthonormal basis.

[A1] The basis indices are all finite-support occupation sequences with physical energy $E_n=\varepsilon\sum_jn_j$ joules, so their Gibbs eigenvalues are $e^{-\beta E_n}=q^{\sum_jn_j}$; every finite-mode subset is a subset of this full basis.

[A2] AC and Countable Choice are assumed through the finite-mode Gibbs result and the trace-class definitions/theorems cited above.

## Verification

**Given:** $0<q<1$ and the finite-mode subspaces described above.

1.1 The trace contribution from states supported on the first $M$ modes is the finite product $Z_M=(1-q)^{-M}$ by [F1]. Since $c=(1-q)^{-1}>1$, $Z_M=c^M$ is unbounded: writing $c=1+r$ with $r>0$, induction gives $(1+r)^M\ge1+Mr$. The unit convention [F5] makes $\beta\varepsilon$ dimensionless. [F1, A1, F5, algebra]

2.1 If $K_\beta$ were trace class, [F3] would make its positive eigenvalue sum finite and equal to its trace. For each $M$, the configurations with $n_j=0$ for $j>M$ form a subset of the enumerated states [A1]; [F4] therefore makes their finite-mode partition sum $Z_M$ no larger than the full normalizer. [F1] identifies that subset sum as $Z_M$, and step 1.1 makes $Z_M$ unbounded, a contradiction. Hence $K_\beta$ is not trace class and the countable partition sum has no finite value. The preparation condition [F2] fails, so this model has no normalized countable canonical law of the stated form. [A1, F1, F2, F3, F4, F6, step 1.1, algebra] ∎
