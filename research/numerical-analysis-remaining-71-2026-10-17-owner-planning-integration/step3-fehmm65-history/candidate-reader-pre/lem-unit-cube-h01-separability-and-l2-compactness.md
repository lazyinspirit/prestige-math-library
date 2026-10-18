---
id: lem-unit-cube-h01-separability-and-l2-compactness
kind: lemma
title: Separable H1-zero space and compact L2 inclusion on a cube
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-w-one-two-is-a-hilbert-space
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-bolzano-weierstrass
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-holder-inequality-for-integrals
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-affine-pullback-weak-derivatives-and-scaling
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.1, printed pp. 3–8: H1-zero energy space, Poincaré
        control and bounded-solution compactness context."
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, PDF pp. 11–14: uniform H1-zero bounds and the compact L2
        subsequence used in homogenization."
verification:
  precheck: pass
---
## Statement

Assume Countable Choice and let $Q=(0,1)^d$, $d\ge1$. Then $H^1_0(Q;\mathbb R)$ is a separable real Hilbert space. It satisfies
$$\|v\|_{L^2(Q)}\le\|\partial_1v\|_{L^2(Q)}\le\|\nabla v\|_{L^2(Q)}\qquad(v\in H^1_0(Q)).$$
Moreover, every sequence bounded in $H^1_0(Q)$ has a subsequence converging in $L^2(Q)$. These conclusions use Countable Choice only; no Axiom of Choice or Dependent Choice is needed in the proof below.

## Facts & Assumptions

**Given:** Countable Choice, the unit cube $Q$, and the Sobolev-closure convention for $H^1_0(Q)$.

[F1] [[def-wkp-zero-as-a-sobolev-closure]]: $H^1_0(Q)$ is the $H^1$-norm closure of $C_c^\infty(Q)$, and [[def-sobolev-space-wkp-and-its-norm]] gives $\|v\|_{H^1}^2=\|v\|_2^2+\sum_i\|\partial_i v\|_2^2$.

[F2] [[lem-w-one-two-is-a-hilbert-space]]: under Countable Choice, $H^1(Q)$ is Hilbert and $H^1_0(Q)$ is its closed Hilbert subspace.

[F3] [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]: rational box-step functions give a countable dense family in $L^2(\mathbb R^d)$.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: on a finite torus, Fourier characters are a complete orthonormal basis and Parseval holds.

[F5] [[thm-bolzano-weierstrass]]: every bounded real sequence has a convergent subsequence.

[F6] [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-holder-inequality-for-integrals]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the coordinate fundamental theorem, Cauchy--Schwarz for integrals, and iterated integration apply to the smooth cube calculations.

[F7] [[lem-affine-pullback-weak-derivatives-and-scaling]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: affine rescaling preserves Sobolev membership, transforms weak derivatives by the affine chain rule, and changes $L^2$ integrals by its determinant.

## Proof




1.1 Let $v\in C_c^\infty(Q)$. For fixed $x'=(x_2,\ldots,x_d)$ and $0<t<1$, the one-dimensional fundamental theorem gives $v(t,x')=\int_0^t\partial_1v(s,x')\,ds$. Cauchy--Schwarz and $t\le1$ imply $|v(t,x')|^2\le\int_0^1|\partial_1v(s,x')|^2\,ds$. Integrating first in $t$ and then in $x'$ gives $\|v\|_2^2\le\|\partial_1v\|_2^2$. By [F1], approximating any $v\in H^1_0(Q)$ in $H^1$ and passing to the limit proves the displayed Poincaré bound. [F1, F6, algebra]

1.2 The map $J:H^1(Q)\to L^2(Q)^{d+1}$, $J(v)=(v,\partial_1v,\ldots,\partial_dv)$, is an isometry for the Sobolev norm by [F1]. The target is separable: extend each coordinate by zero to $\mathbb R^d$ and restrict the countable dense rational-box family [F3]. The image $J(H^1(Q))$ and its subset $J(H^1_0(Q))$ are separable subspaces of a second-countable metric space: intersect a countable base with the subspace and choose one point from each nonempty basic set, a countable selection allowed by Countable Choice. Thus $H^1_0(Q)$ is separable. [F1, F3, F2, algebra]

1.3 For $v\in C_c^\infty(Q)$, extend it by zero to $D=(-1,2)^d$ and identify opposite faces of $D$ to obtain a smooth function on the torus of side length $3$. The extension preserves the $H^1$ norms. By [F1], for every $v\in H^1_0(Q)$ choose test functions converging to $v$ in $H^1$; their periodic zero extensions are Cauchy in $H^1$ on this torus, so the extension is in periodic $H^1(D)$ and the same norm bound holds. [F1, F4, algebra]

2.1 Rescale $D$ affinely to the unit torus using [F7]; the characters on the side-length-$3$ torus are $e^{2\pi i k\cdot x/3}$. For a periodic $H^1(D)$ function $V$, integration by parts on smooth periodic approximants and passage in $H^1$ give $\widehat{\partial_jV}(k)=(2\pi i k_j/3)\widehat V(k)$. The zero extension in step 1.3 is supported away from the identified faces, so its weak derivatives on the torus are exactly its zero-extended weak derivatives on $Q$. Parseval [F4] therefore yields $\sum_{k\in\mathbb Z^d}(1+|k|^2)|\widehat V(k)|^2\le C_d\|V\|_{H^1(D)}^2$, with a fixed constant accounting for the side length $3$. Hence for every integer $N\ge1$, $\sum_{|k|>N}|\widehat V(k)|^2\le C_dN^{-2}\|V\|_{H^1(D)}^2$. [F4, F7, step 1.3, F1, algebra]

3.1 Let $(v_n)$ be bounded in $H^1_0(Q)$, and write $V_n$ for the periodic zero extensions from step 1.3. For each fixed Fourier mode $k$, the complex coefficients are bounded, so their real and imaginary parts are bounded real sequences. Enumerate $\mathbb Z^d$ and apply [F5] successively to these two real sequences, then take the diagonal subsequence; every fixed coefficient converges. If its terms are $V_{n_r},V_{n_s}$, then for fixed $N$ the sum of squared coefficient differences over $|k|\le N$ tends to zero as $r,s\to\infty$, while by step 2.1 the sum over $|k|>N$ is at most $C N^{-2}$ uniformly in $r,s$. First choose $N$ large, then $r,s$ large; Parseval shows $(V_{n_r})$ is Cauchy in $L^2(D)$. Completeness gives an $L^2(D)$ limit, and restriction to $Q$ gives the required $L^2(Q)$ convergence. [step 1.3, F5, step 2.1, F4, algebra] ∎
