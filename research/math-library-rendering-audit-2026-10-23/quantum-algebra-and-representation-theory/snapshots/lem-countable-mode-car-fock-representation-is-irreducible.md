---
id: lem-countable-mode-car-fock-representation-is-irreducible
kind: lemma
title: The Countable-Mode CAR Fock Representation Is Irreducible
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 8
deps:
  - def-countable-mode-car-algebra
  - thm-countable-mode-car-has-universal-inductive-limit-norm
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Throughout this item, use the positive mode set $\mathbb N=\{1,2,\ldots\}$.

Let $\pi_F$ be the countable-mode occupation representation of $\mathsf{CAR}_{\mathbb N}$ on $\mathcal F_\infty=\ell^2(\mathcal P_{\mathrm{fin}}(\mathbb N))$ constructed in [[thm-countable-mode-car-has-universal-inductive-limit-norm]]. Then $\pi_F$ is irreducible: its only closed invariant subspaces are $\{0\}$ and $\mathcal F_\infty$. In addition, the common kernel of all annihilators $c_j$ is the vacuum line $\mathbb C e_\varnothing$, whereas the common kernel of all creators $c_j^\dagger$ is $\{0\}$.

## Facts & Assumptions
**Given:** The countable-mode CAR algebra, its occupation representation $\pi_F$, and the orthonormal basis $(e_S)_{S\in\mathcal P_{\mathrm{fin}}(\mathbb N)}$.

[F1] The operators $c_j,c_j^\dagger$ toggle membership of $j$ in $S$ with sign $(-1)^{|\{s\in S:s<j\}|}$, are adjoints, satisfy the CAR, and extend to $\pi_F$ ([[thm-countable-mode-car-has-universal-inductive-limit-norm]]).

[F2] The coordinate vectors $e_S$ form an orthonormal basis of $\mathcal F_\infty$, and their finite span is dense ([[thm-countable-mode-car-has-universal-inductive-limit-norm]]).

## Proof

1.1 Write $\xi=\sum_S\xi_Se_S\in\mathcal F_\infty$ and suppose $c_j\xi=0$ for every $j$. For any nonempty finite $S$, take its least element $j$. The coefficient of $e_{S\setminus\{j\}}$ in $c_j\xi$ is $(-1)^{|\{s\in S:s<j\}|}\xi_S=\xi_S$, and no other input subset maps to this output under $c_j$. Hence $\xi_S=0$ for every nonempty $S$, so $\xi=\xi_\varnothing e_\varnothing$. Conversely every annihilator kills $e_\varnothing$. [given, F1, F2, algebra]

1.2 If $\xi\ne0$, choose a finite subset $S$ with $\xi_S\ne0$ and let $j$ be the least positive integer not in $S$. The coefficient of $e_{S\cup\{j\}}$ in $c_j^\dagger\xi$ is $(-1)^{|\{s\in S:s<j\}|}\xi_S\ne0$, and this output has the unique input $S$. Thus $c_j^\dagger\xi\ne0$, proving that no nonzero vector is killed by every creator. [given, F1, F2, choose]

1.3 Let $K\subseteq\mathcal F_\infty$ be a nonzero closed subspace invariant under $\pi_F(\mathsf{CAR}_{\mathbb N})$. Choose $0\ne\xi\in K$ and, by [F2], a finite subset $S=\{j_1<\cdots<j_q\}$ with $\xi_S\ne0$. If $q=0$, put $\eta=\xi$; otherwise put $\eta=c_{j_q}\cdots c_{j_1}\xi$. In either case $\eta\in K$. The operator used is the identity when $q=0$ and the displayed annihilator product otherwise. On basis vectors it vanishes unless $S\subseteq U$, and then gives a sign times $e_{U\setminus S}$; hence only $U=S$ contributes to its empty-set coefficient, so $\eta_\varnothing=\pm\xi_S\ne0$. [given, F1, F2, choose]

2.1 Given $\varepsilon>0$, use [F2] to choose a finite-support vector $\zeta$ with $\|\eta-\zeta\|<\varepsilon/2$. For each $n$, put $N_j=c_j^\dagger c_j$ and $Q_n=\prod_{j=1}^n(I-N_j)$. By [F1], $N_j e_T=\mathbf 1_{j\in T}e_T$, so the factors commute and $Q_n$ is the diagonal projection that kills $e_T$ when $T\cap\{1,\ldots,n\}\ne\varnothing$; it belongs to $\pi_F(\mathsf{CAR}_{\mathbb N})$ and has norm at most one. Choose $n$ at least every element of every nonempty set in the finite support of $\zeta$ (take $n=1$ if there are none), so $Q_n\zeta=\zeta_\varnothing e_\varnothing$. Then $\|Q_n\eta-\eta_\varnothing e_\varnothing\|\le\|Q_n(\eta-\zeta)\|+|\zeta_\varnothing-\eta_\varnothing|<\varepsilon$: the first term is bounded by $\|\eta-\zeta\|$ since $Q_n$ is a contraction, and the second by the same norm since a coordinate functional on an orthonormal basis has norm one. Thus for every $\varepsilon>0$ there is $Q_n\eta\in K$ within $\varepsilon$ of $\eta_\varnothing e_\varnothing$. Closedness and $\eta_\varnothing\ne0$ give $e_\varnothing\in K$. [given, F1, F2, step 1.3, choose, algebra]

3.1 For every finite $S$, a finite creator product sends $e_\varnothing$ to $e_S$ up to a sign by [F1]. Invariance gives every basis vector in $K$, and their finite span is dense by [F2]; hence $K=\mathcal F_\infty$. This proves there is no nonzero proper closed invariant subspace, so $\pi_F$ is irreducible. [F1, F2, step 2.1, algebra] ∎

## Remarks

The mode choices are explicit (a nonzero coordinate in step 1.3 and least-index choices in steps 1.1–1.2). Step 2.1 uses finite-support density to approximate one vector at a time; it does not select projections onto arbitrary closed subspaces or invoke Riesz representation, orthogonal-projection existence, or a choice axiom.
