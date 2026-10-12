---
id: lem-nrqm-composites-euclidean-l2-product-unitary
aliases: [nrqm-composites-euclidean-l2-product-unitary]
kind: lemma
domain: mathematics
title: "Euclidean L² product unitary: L²(R^a)⊗̂L²(R^b) ≅ L²(R^{a+b})"
status: draft
origin: pipeline
dependency_level: 1
deps:
  [
    lem-nrqm-composites-hilbert-tensor-construction,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    thm-tonelli-theorem-for-sigma-finite-product-spaces,
    lem-finite-measure-uniqueness-on-a-pi-system,
    def-measure-with-density,
    def-l-p-space-as-a-quotient-by-null-functions,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-measurable-rectangle,
    def-pi-system,
    thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn,
    cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure,
    thm-completion-measurable-functions-have-base-measurable-representatives,
    thm-extension-of-a-bounded-map-from-a-dense-subspace,
    def-countable-choice,
  ]
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
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
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

[F3] Finite positive Borel measures agreeing on rational half-open boxes and on their total mass agree on the Borel $\sigma$-algebra; rational half-open boxes form a $\pi$-system generating it ([[lem-finite-measure-uniqueness-on-a-pi-system]], [[def-pi-system]], [[def-measurable-rectangle]], [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]], [[def-measure-with-density]]).

[F4] A bounded linear map on a dense subspace extends uniquely with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F5] Lebesgue measure on $\mathbb R^n$ is the completion of its restriction to the Borel sets, and every real Lebesgue-measurable function equals a Borel-measurable function almost everywhere under Countable Choice ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[thm-completion-measurable-functions-have-base-measurable-representatives]]).

## Proof

1.1 [Isometry on finite sums] Let $z=\sum_{i=1}^n\alpha_if_i\otimes g_i$ and $z'=\sum_{j=1}^m\beta_jf'_j\otimes g'_j$ be finite sums of elementary tensors. For each pair $(i,j)$, $f_i\overline{f'_j}\in L^1(\mathbb R^a)$ and $g_i\overline{g'_j}\in L^1(\mathbb R^b)$ by [F1], so the function $(x,y)\mapsto f_i(x)\overline{f'_j(x)}g_i(y)\overline{g'_j(y)}$ lies in $L^1(\mathbb R^{a+b})$, and Fubini [F2] gives $\int_{\mathbb R^{a+b}}f_i(x)\overline{f'_j(x)}g_i(y)\overline{g'_j(y)}\,dx\,dy=\langle f_i,f'_j\rangle\langle g_i,g'_j\rangle$. Summing with the coefficients $\alpha_i\overline{\beta_j}$ shows that the linear extension $\Theta_0$ of $f\otimes g\mapsto\bigl((x,y)\mapsto f(x)g(y)\bigr)$ satisfies $\langle\Theta_0z,\Theta_0z'\rangle=\langle z,z'\rangle$ for all finite sums, the right side being the tensor inner product of [F1]. Taking $z'=z$ gives $\Theta_0z=0\Rightarrow z=0$, so $\Theta_0$ is well defined and isometric on the dense algebraic tensor product. [given, F1, F2, algebra]

1.2 [Finite-positive-measure uniqueness in the first variable] Let $h\in L^2(\mathbb R^{a+b})$ be orthogonal to every product of bounded-box indicators, so $\int_{B\times C}h=0$ for all boxes $B,C$. For each bounded rational half-open box $B\subseteq\mathbb R^b$, define $h_B(x):=\int_Bh(x,y)dy$ for a.e. $x$. Cauchy-Schwarz gives $|h_B(x)|^2\le|B|\int_B|h(x,y)|^2dy$, and Tonelli [F2] shows $h_B\in L^2(\mathbb R^a)$. Fubini [F2] gives $\int_Ch_B=\int_{C\times B}h=0$ for every rational half-open box $C\subseteq\mathbb R^a$. Fix a bounded rational half-open box $K\subseteq\mathbb R^a$ and write $u=\operatorname{Re}h_B$, $v=\operatorname{Im}h_B$. By [F5], choose Borel representatives $\widetilde u,\widetilde v$ equal a.e. to $u,v$. The family $\mathcal P_K:=\{K\cap C:C\text{ is a rational half-open box in }\mathbb R^a\}$ is a $\pi$-system containing $K$ and generating the relative Borel $\sigma$-algebra of $K$ by [F3]. The positive and negative parts $\widetilde u_+,\widetilde u_-,\widetilde v_+,\widetilde v_-$ are integrable on $K$ because $K$ has finite measure and $h_B\in L^2$. The finite positive Borel measures $A\mapsto\int_A\widetilde u_+$ and $A\mapsto\int_A\widetilde u_-$ agree on $\mathcal P_K$, including the total mass at $K$, since $\int_Au=0$ there; likewise the measures from $\widetilde v_+$ and $\widetilde v_-$ agree. By [F3] these equalities hold for every Borel $A\subseteq K$. Taking the Borel sets where $\widetilde u>0$, $\widetilde u<0$, $\widetilde v>0$ and $\widetilde v<0$ shows $u=v=0$ a.e. on $K$. The countable rational half-open boxes $K$ cover $\mathbb R^a$, so $h_B=0$ a.e. on $\mathbb R^a$ for each rational half-open $B$. [given, F2, F3, F5, algebra]

2.1 [Zero orthogonal complement] There are countably many rational half-open boxes $B\subseteq\mathbb R^b$, and step 1.2 gives $h_B=0$ a.e. for each; Fubini [F2] also gives $h(x,\cdot)\in L^2(\mathbb R^b)$ for a.e. $x$. Intersecting these countably many full-measure sets, for a.e. $x$ the section is in $L^2$ and $\int_Bh(x,y)dy=0$ for every rational half-open $B$. Fix such an $x$. On each bounded rational half-open box $K\subseteq\mathbb R^b$, choose Borel representatives of the real and imaginary parts of $h(x,\cdot)$ by [F5]. The positive and negative parts of these representatives define finite positive Borel measures on $K$; as in step 1.2 they agree on the $\pi$-system of rational half-open subboxes, including $K$, so [F3] makes the positive and negative measures equal on every Borel subset of $K$. Their positive and negative level sets then show the real and imaginary parts vanish a.e. on $K$. The countably many $K$ cover $\mathbb R^b$, hence $h(x,\cdot)=0$ a.e. for a.e. $x$, and Tonelli [F2] gives $h=0$ a.e. Thus the orthogonal complement of the range of $\Theta_0$ is zero and its range is dense. [step 1.2, F2, F3, F5, algebra]

3.1 [Extension and surjectivity] By [F4] the isometry $\Theta_0$ on the dense algebraic tensor product extends uniquely to a linear isometry $\Theta$ of the completion. Its range is closed (isometries have closed range: if $\Theta z_n\to w$ then $(z_n)$ is Cauchy, so $z_n\to z$ and $w=\Theta z$) and dense by step 2.1, hence is all of $L^2(\mathbb R^{a+b})$. Thus $\Theta$ is a surjective linear isometry, i.e. unitary, with the stated action on elementary tensors. [step 1.1, step 2.1, F1, F4] ∎
