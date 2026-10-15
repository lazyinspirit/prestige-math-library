---
id: lem-qft-fock-one-mode-splitting
kind: lemma
title: One-mode factorization of symmetric Fock space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-orthogonality-and-orthogonal-complement
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, lecture notes, §5.9 (the exponential law for Fock spaces)
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; §5.9, PDF pp. 39–40.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Let $H$ be a complex
Hilbert space, let $e\in H$ have norm one, and put
$K=e^\perp=\{v\in H:\langle e,v\rangle_2=0\}$. For
$\psi_m\in K_s^{(m)}$ and $k,m\ge0$, write
$|k\rangle:=e^{\otimes k}\in(\mathbb Ce)_s^{(k)}$ (with $|0\rangle=1$),
and define

$$J_{k,m}(|k\rangle\otimes\psi_m) =\sqrt{\binom{k+m}{k}}\, P_{s,k+m}(e^{\otimes k}\otimes\psi_m).$$

The map $J_{k,m}$ extends over the sector Hilbert tensor products and the
orthogonal direct sums to a unitary

$$J:\mathcal F_s(\mathbb Ce)\widehat\otimes\mathcal F_s(K) \longrightarrow\mathcal F_s(H).$$

Under this unitary, bosonic creation and annihilation by $e$ act on the first
factor as the one-mode ladder maps
$|k\rangle\mapsto\sqrt{k+1}|k+1\rangle$ and
$|k\rangle\mapsto\sqrt{k}|k-1\rangle$, respectively, tensored with the
identity on $\mathcal F_s(K)$, on finite-particle vectors.

## Facts & Assumptions

**Given:** Countable Choice; a complex Hilbert space $H$ with a unit vector
$e$; the closed orthogonal complement $K=e^\perp$; bosonic Fock sectors and
creation/annihilation maps as in
[[def-qft-fock-and-test-spaces]].

[A1] Assume the Axiom of Countable Choice for the Hilbert tensor constructions.
[[def-countable-choice]]

[F1] Completed Hilbert tensor products have product inner products and dense
elementary tensors. [[lem-nrqm-composites-hilbert-tensor-construction]]

[F2] $P_{s,n}$ is an orthogonal projection onto the symmetric sector; its
range is the set fixed by every permutation of tensor factors.
[[lem-nrqm-composites-permutation-sector-projections]]

[F3] The direct sum of square-summable sector sequences is the Fock space,
and creation on sector $n$ is $\sqrt{n+1}P_{s,n+1}(e\otimes\cdot)$.
[[def-qft-fock-and-test-spaces]]

## Proof

1.1 Fix $k,m\ge0$, write $n=k+m$, and let $\psi_m\in K_s^{(m)}$. Expanding
the permutation average and using symmetry of $\psi_m$ gives
$P_{s,n}(e^{\otimes k}\otimes\psi_m)=\binom nk^{-1}\sum_{\substack{I\subseteq\{1,\ldots,n\}\\|I|=k}}v_I$, where $v_I$ is the tensor with $e$ in the slots in $I$ and the $m$ factors of
$\psi_m$ in the remaining slots, symmetrized there. Indeed, for each fixed
placement $I$, the $k!m!$ permutations of the equal $e$ factors and the
symmetric $\psi_m$ give the same tensor, and
$k!m!/n!=\binom nk^{-1}$. [A1, F2, F3, construct, algebra]

2.1 Distinct placements $v_I$ are orthogonal: if $I\ne I'$, some slot contains $e$ in one tensor and a vector of $K$ in the other, and $e\perp K$. Each $v_I$ has norm $\|\psi_m\|$, so step 1.1 gives $\|P_{s,n}(e^{\otimes k}\otimes\psi_m)\|^2 =\binom nk^{-1}\|\psi_m\|^2$. The same orthogonality shows that the images for different $k$ in a fixed $n$ sector are orthogonal. Thus the factor $\sqrt{\binom nk}$ makes $J_{k,m}$ isometric and their sector ranges are orthogonal. [step 1.1, F1, F2, algebra]

3.1 Algebraic elementary tensors in $H^{\widehat\otimes n}$ are dense by [F1]. Expand each factor using $H=\mathbb Ce\oplus K$, distribute the finite tensor product, and apply $P_{s,n}$. Every resulting term has exactly $k$ factors $e$ and $m=n-k$ factors in $K$, so it lies in the range described in step 2.1. Since $P_{s,n}$ is bounded and algebraic elementary tensors are dense, their symmetrizations are dense in $H_s^{(n)}$; the range of the isometry is closed, hence it equals $H_s^{(n)}$. Taking the orthogonal direct sum over $n=k+m$ proves that $J$ is onto and unitary. [F1, F2, F3, step 2.1, algebra]

4.1 On a vector $e^{\otimes k}\otimes\psi_m$ with $n=k+m$, creation by $e$ acts by $\sqrt{n+1}P_{s,n+1}(e\otimes J_{k,m}(e^{\otimes k}\otimes\psi_m))$. Since $P_{s,n+1}$ averages over all permutations, symmetrizing the last $n$ slots first does not change the result. This equals $\sqrt{n+1}\sqrt{\binom nk}P_{s,n+1}(e^{\otimes(k+1)}\otimes\psi_m)$. The binomial identity $\binom{n+1}{k+1}=\frac{n+1}{k+1}\binom nk$ makes this exactly $J_{k+1,m}(\sqrt{k+1}\,e^{\otimes(k+1)}\otimes\psi_m)$. Thus creation becomes the stated one-mode raising map. Annihilation by $e$ is zero for $k=0$, because every first tensor factor lies in $K$. For $k\ge1$, the placement formula of step 1.1 shows that contraction keeps exactly the $\binom{n-1}{k-1}$ placements with $e$ in the contracted slot. Therefore $a(e)J_{k,m}\psi_m= \sqrt n\sqrt{\binom nk}\frac{\binom{n-1}{k-1}}{\binom nk} P_{s,n-1}(e^{\otimes(k-1)}\otimes\psi_m) =\sqrt k\,J_{k-1,m}\psi_m$, using $\binom nk=\frac nk\binom{n-1}{k-1}$. Thus annihilation becomes the stated one-mode lowering map and leaves the $K$ factor unchanged. [F3, step 1.1, step 2.1, algebra] ∎ 