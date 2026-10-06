---
id: lem-unitary-intertwiners-preserve-fiber-multiplicity-over-a-standard-borel-base
kind: lemma
title: Unitary intertwiners preserve fibre multiplicity over a standard Borel base
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
proof_strategy: direct
deps:
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-measurable-and-decomposable-operator-fields
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - def-standard-borel-space
  - def-hilbert-space
  - def-separable-space
  - def-axiom-of-choice
  - thm-monotone-convergence-for-the-integral
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §10, Propositions 10.17-10.19 (multiplicity rigidity)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC. Let $X$ be a standard Borel space, $\mu$ a nonzero finite Borel
measure on $X$, and let $m,m':X\to\{1,2,\dots\}\cup\{\infty\}$ be Borel
multiplicity functions. If there is a unitary
$$U:L^2(X,\mu;m)\longrightarrow L^2(X,\mu;m')$$
with $UM_f=M_fU$ for every bounded Borel $f:X\to\mathbb C$, then $m=m'$
$\mu$-almost everywhere. Consequently a multiplicity model of a
projection-valued measure over a fixed base is unique in multiplicity, and a
unitary intertwiner of two such models is a decomposable operator whose fibres
are unitary almost everywhere.

## Facts & Assumptions

**Given:** AC, a standard Borel space $X$ with a nonzero finite Borel measure $\mu$, Borel multiplicity functions $m,m'$, and a unitary $U:L^2(X,\mu;m)\to L^2(X,\mu;m')$ with $UM_f=M_fU$ for all bounded Borel $f$.

[F1] For a Borel function $k:X\to\mathbb N\cup\{\infty\}$ the field with fibre $\mathbb C^{k(x)}$ and fundamental family $e_j(x)=$ the $j$-th coordinate vector for $j\le k(x)$ and $0$ otherwise has Borel Gram coefficients $x\mapsto\delta_{ij}\mathbf 1_{j\le k(x)}$ and spans a dense subspace of each fibre; its direct integral $L^2(X,\mu;k)$ is a Hilbert space of measurable square-integrable sections, and in the constant case $k\equiv r$ the fibre family $e_1,\dots,e_r$ is orthonormal and complete, so Parseval in each fibre makes $[\xi]\mapsto(\langle\xi,e_j\rangle)_{j\le r}$ an isometry onto the vector-valued $L^2$-space $\bigoplus_{j\le r}L^2(X,\mu)$ ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[lem-measurable-sections-have-measurable-pointwise-inner-products]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] For $f\in L^\infty(X,\mu)$ the multiplication $M_f$ is a bounded operator on $L^2(X,\mu;k)$, $\|M_f\|\le\|f\|_\infty$, and for a Borel $B$ the operator $M_{\mathbf 1_B}$ is the orthogonal projection onto the closed subspace of sections supported in $B$ ([[def-direct-integral-of-a-measurable-hilbert-field]], [[def-hilbert-space]]).

[F3] On a $\sigma$-finite standard Borel base with a measurable Hilbert field, the commutant of the diagonal multiplications $\mathcal D=\{M_f:f\in L^\infty\}$ is exactly the set of decomposable operators; an operator commuting with $\mathcal D$ is induced by a weakly measurable, essentially bounded field of fibre operators, and that field is unique up to a null set ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[def-measurable-and-decomposable-operator-fields]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F4] A unitary between complex inner product spaces is a bijective linear isometry, so it exists only between fibres of equal dimension $k=k'$ in $\mathbb N\cup\{\infty\}$: a finite-dimensional $\mathbb C^k$ cannot be linearly isomorphic to $\mathbb C^\infty$, and $\mathbb C^k\not\cong\mathbb C^{k'}$ for distinct finite $k,k'$ ([[def-hilbert-space]], [[def-separable-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F5] The sets $\{x:k(x)>j\}$ are Borel for a Borel $k$, and $X$ is the countable disjoint union of the Borel sets $B_{k,k'}=\{m=k\}\cap\{m'=k'\}$, so measures on $X$ are countably additive over this partition; the standard Borel base is $\sigma$-finite for the finite measure $\mu$ ([[def-standard-borel-space]], [[thm-monotone-convergence-for-the-integral]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the data and the unitary $U$ of the statement.

1.1 For each Borel set $B\subseteq X$, the identity $UM_{\mathbf 1_B}=M'_{\mathbf 1_B}U$ and unitarity of $U$ give $M'_{\mathbf 1_B}=UM_{\mathbf 1_B}U^{-1}$, so $U$ carries the range of the projection $M_{\mathbf 1_B}$ onto the range of $M'_{\mathbf 1_B}$; restricting to these closed subspaces yields a unitary $U_B$ from the sections of $L^2(X,\mu;m)$ supported in $B$ to the sections of $L^2(X,\mu;m')$ supported in $B$. [F2]

2.1 Fix $k,k'\in\mathbb N\cup\{\infty\}$ and put $B=B_{k,k'}$, a Borel set by [F5]. The supported subspace of $L^2(X,\mu;m)$ over $B$ is, by [F1], the direct integral over $(B,\mu|_B)$ of the constant field with fibre $\mathbb C^k$; similarly the target over $B$ is the constant field with fibre $\mathbb C^{k'}$. The unitary $U_B$ of [step 1.1] intertwines the multiplication operators for all bounded Borel $f$ on $B$, because $U_B$ is the restriction of $U$ and $M_f$ preserves the supported subspaces. [step 1.1, F1, F2]

3.1 Assume $\mu(B)>0$. Apply [F3] to the sum field $\mathbb C^k\oplus\mathbb C^{k\prime}$ and its block operator whose only nonzero block is $U_B$ from the first summand to the second. This operator commutes with all diagonal multiplications, so its off-diagonal block is decomposable: there is a weakly measurable, essentially bounded operator field $x\mapsto T_x\in\mathcal B(\mathbb C^k,\mathbb C^{k'})$ with $U_B$ acting by $T_x$ fibrewise; the same applies to $U_B^*=U_B^{-1}$, and since $U_B^*U_B=I$ and $U_BU_B^*=I$, the uniqueness of decomposable fields in [F3] gives $T_x^*T_x=I_k$ and $T_xT_x^*=I_{k'}$ for $\mu$-almost every $x\in B$. Thus for almost every $x$ the fibre map $T_x$ is a unitary between $\mathbb C^k$ and $\mathbb C^{k'}$. [step 2.1, F3]

4.1 Hence $k=k'$ whenever $\mu(B_{k,k'})>0$: by [step 3.1] a unitary $\mathbb C^k\to\mathbb C^{k'}$ exists for some $x$, and [F4] says this forces $k=k'$. [step 3.1, F4]

5.1 Therefore $\{m\ne m'\}=\bigcup_{k\ne k'}B_{k,k'}$ is a countable union of sets of $\mu$-measure zero, hence $\mu$-null by countable additivity; that is, $m=m'$ $\mu$-almost everywhere. [step 4.1, F5]

6.1 The intertwiner $U$ itself is decomposable: its block operator on the direct sum of the two fields commutes with all diagonal multiplications, so [F3] represents its off-diagonal block by a weakly measurable essentially bounded field. Applying the same to $U^{-1}=U^*$, whose field is the fibrewise adjoint up to a null set by the uniqueness clause of [F3], and using $U^*U=UU^*=I$ as in [step 3.1], its fibres are unitary almost everywhere. Thus every unitary intertwiner of two multiplicity models over the fixed base $(X,\mu)$ has unitary fibres a.e., and the multiplicity is unique, which is exactly the rigidity statement a multiplicity model of a projection-valued measure over a fixed base invokes. [step 5.1, F3] ∎ 