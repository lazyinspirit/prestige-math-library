---
id: def-qft-fock-and-test-spaces
kind: definition
title: Schwartz/distribution spaces and Hilbert Fock conventions
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-schwartz-space-and-its-seminorms
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-tempered-distribution
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-bounded-tensor-maps
  - lem-nrqm-composites-permutation-sector-projections
  - def-countable-choice
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-tempered-distribution: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, lecture notes, §§5.1–5.5 and 5.7–5.9 (Hilbert and Fock spaces)
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; PDF pp. 32–40.
    - title: Semyon Dyatlov, Lecture Notes for MIT 18.155, §§11.1.1 and 11.2.1 (Schwartz functions and tempered distributions)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Full 266-page lecture notes; printed pp. 120–126.
---

## Definition

For an integer $d\ge1$, let $\mathcal S(\mathbb R^d)$ be the complex Schwartz space with seminorms
$p_{\alpha\beta}(f)=\sup_{x\in\mathbb R^d}|x^\alpha\partial^\beta f(x)|$
for all multi-indices $\alpha,\beta$; this is exactly
[[def-schwartz-space-and-its-seminorms]]. Let
$\mathcal D(\mathbb R^d)=C_c^\infty(\mathbb R^d;\mathbb C)$ with the support convention of
[[def-test-function-space-d-of-an-open-set]] and the locally convex LF topology of
[[def-test-function-topology]]. The tempered-distribution space $\mathcal S'(\mathbb R^d)$
is the space of continuous complex-linear functionals on this topological
$\mathcal S(\mathbb R^d)$, paired bilinearly with test functions, as in
[[def-tempered-distribution]].

For every complex Hilbert space $H$, use the second-variable-linear pairing
$\langle u,v\rangle_2:=(v,u)_1$, where $(\cdot,\cdot)_1$ is the first-variable-linear
Hilbert pairing of [[def-real-and-complex-inner-product-space]]. Thus
$\langle u,v\rangle_2$ is linear in $v$ and conjugate-linear in $u$.
For each tensor product, use the same norm completion as
[[lem-nrqm-composites-hilbert-tensor-construction]], but equip it with the
second-variable-linear pairing obtained by conjugating that supplier's
first-variable-linear pairing. This leaves the norm and completion unchanged;
on elementary tensors it gives the product of the second-variable pairings.
Let $H^{\widehat\otimes n}$ be the iterated Hilbert tensor completion, with
$H^{\widehat\otimes0}:=\mathbb C$; the tensor inner product is the product of
the factor pairings. For $n\ge1$, let
$P_{s,n}=n!^{-1}\sum_{\pi\in S_n}U_\pi$ and
$P_{a,n}=n!^{-1}\sum_{\pi\in S_n}\operatorname{sgn}(\pi)U_\pi$, using the
permutation action and the orthogonal projections of
[[lem-nrqm-composites-permutation-sector-projections]]. Define
$H_s^{(n)}=\operatorname{ran}P_{s,n}$ and
$H_a^{(n)}=\operatorname{ran}P_{a,n}$, with
$H_s^{(0)}=H_a^{(0)}=\mathbb C$. These are the symmetric and antisymmetric
$n$-particle sectors.

The bosonic and fermionic Fock Hilbert spaces are the square-summable direct
sums
$\mathcal F_s(H)=\{(\Psi_n)_{n\ge0}:\Psi_n\in H_s^{(n)},\
\sum_n\|\Psi_n\|^2<\infty\}$ and
$\mathcal F_a(H)=\{(\Psi_n)_{n\ge0}:\Psi_n\in H_a^{(n)},\
\sum_n\|\Psi_n\|^2<\infty\}$, with the componentwise inner product.
Their vacuum is $\Omega=(1,0,0,\ldots)$. The finite-particle subspace
$\mathcal D_{\rm fin}$ consists of sequences with only finitely many nonzero
components.

For $n\ge0$, bosonic creation on sector $n$ is
$a_n^\dagger(h)\Psi_n=\sqrt{n+1}P_{s,n+1}(h\otimes\Psi_n)$; for $n\ge1$,
bosonic annihilation is
$a_n(h)\Psi_n=\sqrt n(C_h\otimes I^{\otimes(n-1)})\Psi_n$, where
$C_h(v)=\langle h,v\rangle_2$ and its tensor extension is the bounded map of
[[lem-nrqm-composites-bounded-tensor-maps]], and $a(h)\Omega=0$. Define fermionic creation
by $c_n^\dagger(h)\Psi_n=\sqrt{n+1}P_{a,n+1}(h\otimes\Psi_n)$; for $n\ge1$,
fermionic annihilation is the corresponding first-factor contraction
$c_n(h)\Psi_n=\sqrt n(C_h\otimes I^{\otimes(n-1)})\Psi_n$, and
$c(h)\Omega=0$. The annihilation maps are conjugate-linear in $h$; the
creation maps are linear in $h$. These formulas define sector maps on the
finite-particle subspace; their maximal closed domains and operator relations are proved in
[[lem-qft-fock-ccr-car]]. No physical statistics assignment or spin–statistics
theorem is part of these mathematical definitions.

## Remarks

**Foundational assumption for this construction.** Assume the Axiom of
Countable Choice [[def-countable-choice]]. The cited Hilbert tensor
construction, bounded tensor-map extension, and permutation-sector projection
results each state this hypothesis. Accordingly, the tensor completions,
sector projections, and Fock construction above are taken in this context.
This records the choice premise already listed among the dependencies; it does
not assign physical statistics to a species.
