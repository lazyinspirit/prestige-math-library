---
id: thm-cm-parallel-axis-theorem
kind: theorem
title: "Parallel-axis theorem: the inertia tensor about a displaced point of a centred mass distribution"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-inertia-tensor-about-a-point, def-cm-mass-distribution-and-inertia-matrix, lem-cm-inertia-tensor-about-a-point-is-finite, lem-cm-mass-moments-are-finite, def-countable-choice, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-inertia-tensor-about-a-point-is-finite: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2.1, Eqs. (3.25)-(3.26), printed pp. 52-53: claim and proof that (I_c)_{ab}=(I_{c.o.m})_{ab}+M(c^2delta_{ab}-c_ac_b) when the linear terms vanish in the centre-of-mass frame"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 4 Section 4.2, Eqs. (4.27)-(4.29), printed pages 6-7 of Chapter 4 (PDF pages 60-61): the axis-shift theorem obtained by expanding the shifted inertia integral and using that the first moments vanish in the centre-of-mass frame"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only
to make the displayed integrals finite. Let $\nu$ be a mass distribution on $\mathbb R^3$ with
total mass $m=\nu(\mathbb R^3)\in(0,+\infty)$ that is **centred**, that is,
$\mu(\nu)=\int\rho\,d\nu(\rho)=0\in\mathbb R^3$
([[def-cm-mass-distribution-and-inertia-matrix]]), and let $I(\nu)$ be its inertia matrix. Then
for every $a\in\mathbb R^3$ the inertia tensor of $\nu$ about $a$
([[def-cm-inertia-tensor-about-a-point]]) satisfies

$$I_\nu(a)=I(\nu)+m\bigl(\lVert a\rVert_2^2I_3-aa^{\mathsf T}\bigr),$$

where $\lVert\cdot\rVert_2$ is the Euclidean norm, $I_3$ the identity matrix and
$aa^{\mathsf T}$ the matrix product of [[def-euclidean-inner-product]],
[[def-matrix-space]] and [[def-matrix-product-and-identity-matrix]]. Entrywise,

$$I_\nu(a)_{jk}=I(\nu)_{jk}+m\bigl(\lVert a\rVert_2^2\delta_{jk}-a_ja_k\bigr)\qquad(j,k\in\{1,2,3\}).$$

## Facts & Assumptions

**Given:** A centred mass distribution $\nu$ with total mass $m$, a point $a\in\mathbb R^3$, and
the notation of [[def-cm-mass-distribution-and-inertia-matrix]] and
[[def-cm-inertia-tensor-about-a-point]]: the first moment $\mu(\nu)$, the inertia matrix
$I(\nu)$ with $I(\nu)_{jk}=\int(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)\,d\nu$, and the
inertia tensor $I_\nu(a)$ with
$I_\nu(a)_{jk}=\int(\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k))\,d\nu$.

[L1] Finiteness and integrability
([[lem-cm-inertia-tensor-about-a-point-is-finite]], [[lem-cm-mass-moments-are-finite]],
[[def-cm-mass-distribution-and-inertia-matrix]]): the functions $\rho\mapsto\rho_j$,
$\rho\mapsto\rho_j\rho_k$, and the shifted polynomials
$\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)$ are $\nu$-integrable; the entries
$I_\nu(a)_{jk}$, $I(\nu)_{jk}$ and $\mu(\nu)_j$ are finite real numbers.

[L2] Linearity of the Lebesgue integral on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]],
[[def-integral-over-a-measurable-set]]): for real $\alpha,\beta$ and integrable real functions
$f,g$, the combination $\alpha f+\beta g$ is integrable and
$\int(\alpha f+\beta g)\,d\nu=\alpha\int f\,d\nu+\beta\int g\,d\nu$.

[L3] Centredness and total mass ([[def-cm-mass-distribution-and-inertia-matrix]],
[[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]]):
$\int\rho_j\,d\nu=\mu(\nu)_j=0$ for each $j$, and the constant function $1$ has
$\int1\,d\nu=\nu(\mathbb R^3)=m$.

[L4] Component algebra ([[def-euclidean-inner-product]],
[[def-matrix-product-and-identity-matrix]]): for all $\rho,a\in\mathbb R^3$ and all $j,k$,
$$\lVert\rho-a\rVert_2^2=\lVert\rho\rVert_2^2-2\langle\rho,a\rangle+\lVert a\rVert_2^2,\qquad(\rho_j-a_j)(\rho_k-a_k)=\rho_j\rho_k-\rho_ja_k-a_j\rho_k+a_ja_k,$$
and $\langle\rho,a\rangle=\sum_la_l\rho_l$.

## Proof

**Proof technique:** direct; expand the shifted integrand into the parent integrand plus constants
and linear terms, and integrate termwise, the linear terms vanishing by centredness.

1.1 Expansion of the integrand: for every $\rho\in\mathbb R^3$ and all $j,k$, [L4] gives $$\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)=\bigl[\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k\bigr]+\bigl[\lVert a\rVert_2^2\delta_{jk}-a_ja_k\bigr]+\bigl[-2\langle\rho,a\rangle\delta_{jk}+\rho_ja_k+a_j\rho_k\bigr].$$ [given, L4, algebra]

2.1 Integrability of the pieces: the first bracket is integrable by [L1]; the second bracket is a constant function and hence integrable because $\nu(\mathbb R^3)<+\infty$; the functions $\rho\mapsto\rho_j$ are integrable by [L1], so the third bracket is a finite real linear combination of integrable functions and is integrable by [L2]. [step 1.1, given, L1, L2]

3.1 Termwise integration: applying [L2] to the decomposition of step 1.1 and using the defining integrals of [L1] and the values of [L3], $$I_\nu(a)_{jk}=I(\nu)_{jk}+m\bigl(\lVert a\rVert_2^2\delta_{jk}-a_ja_k\bigr)-2\delta_{jk}\sum_l a_l\mu(\nu)_l+a_k\mu(\nu)_j+a_j\mu(\nu)_k,$$ and every term of the last group vanishes because $\mu(\nu)=0$. [step 1.1, step 2.1, L1, L2, L3, algebra]

4.1 Conclusion in matrix form: reading the entrywise identity of step 3.1 as a matrix identity gives $I_\nu(a)=I(\nu)+m(\lVert a\rVert_2^2I_3-aa^{\mathsf T})$, which is the statement. [step 3.1, L4, algebra] ∎

## Remarks

- **Centredness is exactly what is used.** The proof shows that for a general mass distribution
  the same expansion leaves the additional terms
  $-2(\langle a,\mu(\nu)\rangle)\delta_{jk}+a_k\mu(\nu)_j+a_j\mu(\nu)_k$; the centred case is the
  classical parallel-axis form, and the theorem asserts nothing about the non-centred case beyond
  this displayed expansion.

- **Shape independence.** The derivation uses only the finiteness of the first and second moments
  and the vanishing of the first moment, so the conclusion covers point masses, line, surface and
  volume distributions alike: $\nu$ is an arbitrary bounded finite Borel measure, as in
  [[def-cm-mass-distribution-and-inertia-matrix]].
