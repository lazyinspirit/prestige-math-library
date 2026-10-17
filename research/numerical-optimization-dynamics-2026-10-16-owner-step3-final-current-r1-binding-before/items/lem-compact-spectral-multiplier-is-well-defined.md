---
id: lem-compact-spectral-multiplier-is-well-defined
kind: lemma
title: Bounded multipliers on compact self-adjoint eigenspaces define bounded operators
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 0
deps:
  - def-countable-choice
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-hilbert-space
  - def-inner-product-space
  - cor-inner-product-induces-a-norm
  - def-orthogonality-and-orthogonal-complement
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-operator-norm
  - def-square-summable-family-on-an-arbitrary-index-set
  - cor-cauchy-reals-lub-complete
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapters 2–3 and 5–6, compact spectral decomposition and spectral filters, PDF pp. 13–63.
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017"
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §3.2, Theorem 3.7 and Corollaries 3.8–3.9, printed pp. 74–78.
---

## Statement

Assume Countable Choice. Let $\mathbb F\in\{\mathbb R,\mathbb C\}$,
$H$ be an $\mathbb F$-Hilbert space, and let $S:H\to H$ be compact and
self-adjoint. Let $\Sigma$ be its set of nonzero
eigenvalues, $E_t=\ker(S-tI)$, $P_t$ the orthogonal projection onto $E_t$,
and $P_0$ the orthogonal projection onto $\ker S$. If
$q:\{0\}\cup\Sigma\to\mathbb F$ is bounded, then for every $x\in H$ the
finite-subset net
$$q(0)P_0x+\sum_{t\in F}q(t)P_tx,\qquad F\subseteq\Sigma\text{ finite},$$
converges in norm to a vector $Q_qx$. The map $Q_q:H\to H$ is bounded and
linear, with $\|Q_q\|\le\sup_{t\in\{0\}\cup\Sigma}|q(t)|$.

## Facts & Assumptions

**Given:** Countable Choice, a real or complex Hilbert space $H$, a compact self-adjoint $S$, its set $\Sigma$ of nonzero eigenvalues, their eigenspaces $E_t$, the orthogonal projections $P_t$ onto those spaces, and the orthogonal projection $P_0$ onto $\ker S$.

[A1] [[def-countable-choice]]: Countable Choice is the choice assumption in the compact self-adjoint spectral theorem; full Choice is not needed here.

[F1] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: The nonzero eigenspaces are mutually orthogonal, $\Sigma$ is at most countable, and $H=\overline{\operatorname{span}}\{E_t:t\in\Sigma\}\oplus\ker S$.

[F2] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: A closed subspace and its orthogonal complement give a unique orthogonal decomposition.

[F3] [[def-orthogonality-and-orthogonal-complement]]: Distinct vectors in orthogonal eigenspaces have zero inner product.

[F4] [[cor-inner-product-induces-a-norm]]: $\|z\|^2=\langle z,z\rangle$.

[F5] [[def-inner-product-space]]: The inner product is positive definite.

[F6] [[def-operator-norm]]: The operator norm is the supremum of $\|Tz\|$ over $\|z\|\le1$.

[F7] [[def-square-summable-family-on-an-arbitrary-index-set]]: For a nonnegative family, its sum is the supremum of its finite subsums; if this sum is finite, tails outside a suitable finite set have arbitrarily small sum.

[F8] [[cor-cauchy-reals-lub-complete]]: Every nonempty bounded-above set of real numbers has a supremum.

## Proof
1.1 Write $x=P_0x+m$ with $m\in(\ker S)^\perp$ using [F1]–[F2]. For a finite $F\subseteq\Sigma$, the vectors $P_tx$ are mutually orthogonal by [F1] and [F3]; their sum is the orthogonal projection of $m$ onto the finite orthogonal sum of the spaces $E_t$. Pythagoras therefore gives $\sum_{t\in F}\|P_tx\|^2\le\|m\|^2\le\|x\|^2$. [A1, F1, F2, F3, F4]

2.1 The set $\{|q(t)|:t\in\{0\}\cup\Sigma\}$ is nonempty and bounded, so [F8] gives its finite supremum $M_q$. For finite $F\subseteq\Sigma$, orthogonality and step 1.1 give $\|\sum_{t\in F}q(t)P_tx\|^2=\sum_{t\in F}|q(t)|^2\|P_tx\|^2\le M_q^2\|x\|^2$. Put $a_t=\|P_tx\|^2$. Step 1.1 bounds every finite subsum of $(a_t)$ by $\|x\|^2$, so [F7] gives a finite sum with tails arbitrarily small. If $M_q=0$, every weighted spectral term vanishes. Otherwise, for any $\varepsilon>0$, choose a finite $F_0\subseteq\Sigma$ with $\sum_{t\notin F_0}a_t<(\varepsilon/M_q)^2$. For finite $F,H\supseteq F_0$, orthogonality gives $\|\sum_{t\in F}q(t)P_tx-\sum_{t\in H}q(t)P_tx\|^2\le M_q^2\sum_{t\in F\triangle H}a_t<\varepsilon^2$. Thus the finite-subset net is Cauchy; completeness of $H$ makes it norm-convergent. [F1, F2, F4, F7, F8, step 1.1, algebra]

3.1 Finite partial sums are linear in $x$, so taking their norm limits shows that $x\mapsto q(0)P_0x+\sum_{t\in\Sigma}q(t)P_tx$ is linear. Orthogonality and convergence of the finite-subset net give $\|Q_qx\|^2=|q(0)|^2\|P_0x\|^2+\sum_{t\in\Sigma}|q(t)|^2\|P_tx\|^2\le M_q^2\|x\|^2$, with the nonnegative sum understood as in [F7]. Thus $Q_q$ is bounded and [F6] gives $\|Q_q\|\le M_q$. [F4, F5, F6, F7, step 2.1, algebra] ∎
