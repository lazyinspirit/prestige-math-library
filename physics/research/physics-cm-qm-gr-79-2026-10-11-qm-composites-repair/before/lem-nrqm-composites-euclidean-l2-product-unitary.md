---
id: lem-nrqm-composites-euclidean-l2-product-unitary
kind: lemma
domain: mathematics
title: "Euclidean L² product unitary: L²(R^a)⊗̂L²(R^b) ≅ L²(R^{a+b})"
status: draft
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-composites-hilbert-tensor-construction, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-finite-measure-uniqueness-on-a-pi-system, def-measure-with-density, def-l-p-space-as-a-quotient-by-null-functions, cor-cauchy-schwarz-inequality-for-l-two, def-measurable-rectangle, def-pi-system, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-extension-of-a-bounded-map-from-a-dense-subspace, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-measurable-rectangle: mathematical-premise
  def-pi-system: mathematical-premise
  thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §1.4 pp. 45-47 (tensor products of L² spaces)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §1"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), let $a,b\ge1$ and identify $\mathbb R^{a+b}=\mathbb R^a\times\mathbb R^b$ with Lebesgue measure ([[def-l-p-space-as-a-quotient-by-null-functions]]); write $H_a=L^2(\mathbb R^a)$, $H_b=L^2(\mathbb R^b)$. Then there is a unique linear isometry

$$\Theta:H_a\widehat\otimes H_b\longrightarrow L^2(\mathbb R^{a+b})$$

with $\Theta(f\otimes g)(x,y)=f(x)g(y)$ for all $f\in H_a$, $g\in H_b$ and a.e. $(x,y)$, and $\Theta$ is onto: it is a surjective linear isometry, hence unitary. Vector-valued or spin factors follow by finite component sums. No identification of non-Euclidean product measures is asserted.

## Facts & Assumptions

**Given:** $a,b\ge1$; $f,g,f',g'$ in the respective $L^2$ spaces; the completed tensor product $H_a\widehat\otimes H_b$ of [[lem-nrqm-composites-hilbert-tensor-construction]].

[F1] $\|f\|_2=\bigl(\int|f|^2\bigr)^{1/2}$ and $\int|ff'|\le\|f\|_2\|f'\|_2$; the completed tensor product carries the inner product with $\langle f\otimes g,f'\otimes g'\rangle=\langle f,f'\rangle\langle g,g'\rangle$ and the elementary tensors span a dense subspace ([[def-l-p-space-as-a-quotient-by-null-functions]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F2] For $F\in L^1(\mathbb R^{a+b})$ the sections are integrable a.e. and the three iterated/double integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); for nonnegative product-measurable functions the iterated and double integrals agree ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Finite Borel measures agreeing on the rational boxes and having equal total mass agree on the Borel $\sigma$-algebra; the rational boxes form a $\pi$-system generating it ([[lem-finite-measure-uniqueness-on-a-pi-system]], [[def-pi-system]], [[def-measurable-rectangle]], [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]], [[def-measure-with-density]]).

[F4] A bounded linear map on a dense subspace extends uniquely with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

1.1 [Isometry on finite sums] Let $z=\sum_{i=1}^n\alpha_if_i\otimes g_i$ and $z'=\sum_{j=1}^m\beta_jf'_j\otimes g'_j$ be finite sums of elementary tensors. For each pair $(i,j)$, $f_i\overline{f'_j}\in L^1(\mathbb R^a)$ and $g_i\overline{g'_j}\in L^1(\mathbb R^b)$ by [F1], so the function $(x,y)\mapsto f_i(x)\overline{f'_j(x)}g_i(y)\overline{g'_j(y)}$ lies in $L^1(\mathbb R^{a+b})$, and Fubini [F2] gives $\int_{\mathbb R^{a+b}}f_i(x)\overline{f'_j(x)}g_i(y)\overline{g'_j(y)}\,dx\,dy=\langle f_i,f'_j\rangle\langle g_i,g'_j\rangle$. Summing with the coefficients $\alpha_i\overline{\beta_j}$ shows that the linear extension $\Theta_0$ of $f\otimes g\mapsto\bigl((x,y)\mapsto f(x)g(y)\bigr)$ satisfies $\langle\Theta_0z,\Theta_0z'\rangle=\langle z,z'\rangle$ for all finite sums, the right side being the tensor inner product of [F1]. Taking $z'=z$ gives $\Theta_0z=0\Rightarrow z=0$, so $\Theta_0$ is well defined and isometric on the dense algebraic tensor product. [given, F1, F2, algebra]

2.1 [Density of the range] Let $h\in L^2(\mathbb R^{a+b})$ be orthogonal to every product of indicator functions $\mathbf 1_B(x)\mathbf 1_C(y)$ with $B\subseteq\mathbb R^a$, $C\subseteq\mathbb R^b$ boxes: $\int_{B\times C}h=0$. For a fixed bounded box $B$ the section function $h_B(x):=\int_Bh(x,y)dy$ is defined for a.e. $x$ and lies in $L^2(\mathbb R^a)$: by Cauchy-Schwarz $|h_B(x)|^2\le|B|\int_B|h(x,y)|^2dy$, and Tonelli [F2] integrates this to $|B|\int_{\mathbb R^a\times B}|h|^2<\infty$. Moreover $\int_Ch_B=0$ for every box $C$ by Fubini [F2]; applying the uniqueness statement [F3] to the positive and negative parts of $h_B$ on a bounded box containing $C$ shows $h_B=0$ a.e. Taking the countably many rational boxes $B$ and intersecting the null exceptional sets, we get for a.e. $x$ that $\int_Bh(x,y)dy=0$ for every rational box $B$; applying [F3] in the second variable yields $h(x,\cdot)=0$ a.e. for a.e. $x$, and Tonelli [F2] then gives $h=0$ a.e. Hence the orthogonal complement of the range of $\Theta_0$ in $L^2(\mathbb R^{a+b})$ is trivial, i.e. the range is dense. [step 1.1, F2, F3, algebra]

3.1 [Extension and surjectivity] By [F4] the isometry $\Theta_0$ on the dense algebraic tensor product extends uniquely to a linear isometry $\Theta$ of the completion. Its range is closed (isometries have closed range: if $\Theta z_n\to w$ then $(z_n)$ is Cauchy, so $z_n\to z$ and $w=\Theta z$) and dense by step 2.1, hence is all of $L^2(\mathbb R^{a+b})$. Thus $\Theta$ is a surjective linear isometry, i.e. unitary, with the stated action on elementary tensors. [step 1.1, step 2.1, F1, F4] ∎
