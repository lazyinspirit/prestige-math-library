---
id: cex-infinite-mode-regular-weyl-representations-are-inequivalent
kind: counterexample
title: Infinitely many modes admit inequivalent irreducible regular Weyl representations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
  - def-incomplete-tensor-product-with-reference-vector
  - lem-one-mode-gaussian-weyl-average-is-rank-one
  - def-countable-choice
  - def-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-gaussian-integral
  - lem-product-rectangle-kernels-are-dense-in-complex-l-two
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the Hilbert completions and product-density supplier; the finite-support representation formulas and overlap limit are choice-free."
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---
## Statement



Let $V=c_{00}(\mathbb N;\mathbb R^2)$ be the real vector space of finitely
supported sequences $v=((q_j,p_j))_{j\ge1}$, with
$\omega(v,w)=\sum_j(q_jp'_j-p_jq'_j)$; this finite sum defines a nondegenerate
alternating form. For $a=1,2$, let $\mathcal H_a$ be the incomplete tensor
product of copies of $L^2(\mathbb R)$ with reference vector
$\Omega_a(x)=(a/\pi)^{1/4}e^{-ax^2/2}$. The finite-support operators

$$\mathcal W_a(v)=\bigotimes_{j\ge1}W_1(q_j,p_j),\qquad (W_1(q,p)f)(x)=e^{ip(x-q/2)}f(x-q),$$
where all but finitely many factors are the identity, define irreducible Weyl representations with phase $e^{-i\omega(v,w)/2}$ that are strongly continuous on every real line. They are inequivalent: a common local Gaussian average has expectation $1$ in the first reference vector and limiting expectation $2\sqrt2/3<1$ in every unit vector of the second representation.

## Facts & Assumptions

**Given:** The finite-support symplectic space $V$, the two Gaussian reference vectors, and the one-mode Schrödinger formula.

[F1] The one-mode operators $W_1(q,p)$ form a strongly continuous irreducible Weyl system with phase $e^{-i(qp'-pq')/2}$ ([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F2] The incomplete tensor product $\mathcal H_\Omega$ is the completion of the increasing finite-coordinate spaces, and for any unit $\Phi$ the local rank-one projection $P_j^\Phi$ is well-defined and orthogonal ([[def-incomplete-tensor-product-with-reference-vector]]).

[F3] For $a>0$, the Gaussian Weyl average equals the projection onto $\Omega_a$; it commutes through bounded intertwiners, acts as $P_j^{\Omega_a}$ on a tensor coordinate, and the orbit of $\Omega_a$ is total in $L^2(\mathbb R)$ ([[lem-one-mode-gaussian-weyl-average-is-rank-one]]).

[F4] Finite sums of rectangle indicators are dense in $L^2$ of a finite product of finite measure spaces; truncation to bounded cubes and induction give density of finite products in $L^2(\mathbb R^n)$ for each finite $n$ ([[lem-product-rectangle-kernels-are-dense-in-complex-l-two]]).

[F5] $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[A1] Countable Choice is assumed by the completion and density interfaces ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 The sum defining $\omega$ is finite for $v,w\in V$; each term is bilinear and alternating, so $\omega$ is bilinear and alternating. If $v\ne0$, choose $j$ with $q_j^2+p_j^2>0$ and let $w$ be supported only at $j$ with $(q'_j,p'_j)=(p_j,-q_j)$. Then $\omega(v,w)=-(q_j^2+p_j^2)\ne0$, proving nondegeneracy. For $a\in\{1,2\}$, rescaling [F5] gives $\|\Omega_a\|_2^2=(a/\pi)^{1/2}\int e^{-ax^2}\,dx=1$. Hence [F2] constructs the Hilbert space $\mathcal H_a$ and its unit reference vector $\Omega_a^\infty$. [A1, F2, F5, given, algebra, construct]

2.1 If $v$ has support in $\{1,\ldots,n\}$, define on $H_n=L^2(\mathbb R^n)$ the finite-coordinate operator $W_1(q_1,p_1)\otimes\cdots\otimes W_1(q_n,p_n)$. Each factor is unitary by [F1], so the product is unitary. Appending reference factors in the embeddings of [F2] commutes with this operator, because all acted-on coordinates are among the first $n$; the operators therefore define a unitary on the dense compatible union and extend to $\mathcal H_a$. Its inverse is the operator for $-v$. [F1, F2, step 1.1, construct]

3.1 At each of the finitely many coordinates in the union of the supports of $v$ and $w$, [F1] gives $W_1(q_j,p_j)W_1(q'_j,p'_j)=e^{-i(q_jp'_j-p_jq'_j)/2}W_1(q_j+q'_j,p_j+p'_j)$. Multiplication of these finite equations gives $\mathcal W_a(v)\mathcal W_a(w)=e^{-i\omega(v,w)/2}\mathcal W_a(v+w)$; outside that finite union every factor is the identity. For fixed finitely supported $v$, the map $t\mapsto\mathcal W_a(tv)$ is strongly continuous on each finite-coordinate space: it is continuous on elementary rectangle functions by [F1], finite products and the telescoping estimate; their finite span is dense by [F4], and the operators have norm $1$. Approximation by a vector in the dense compatible union and the same norm bound then gives strong continuity on the completion. [A1, F1, F4, step 2.1, algebra]

3.2 In $\mathcal H_a$, the one-coordinate average of [F3] is $P_j^{\Omega_a}$. Any bounded projection $Q$ commuting with all $\mathcal W_a(v)$ therefore commutes with each $P_j^{\Omega_a}$ by the intertwiner property in [F3]. The projections for distinct coordinates commute. [F2, F3, step 2.1]

3.3 The orbit of $\Omega_a^\infty$ under finite-support $\mathcal W_a(v)$ is total in $\mathcal H_a$. For each $m$, [F3] says the one-mode orbit span is dense in $L^2(\mathbb R)$, while [F4] says finite products of dense one-coordinate sets span a dense subspace of $H_m=L^2(\mathbb R^m)$: truncate to bounded cubes, approximate there by finite rectangle sums, and approximate each rectangle factor by the one-mode orbit span. Products of the approximants converge in $L^2$ by the finite telescoping estimate for elementary tensors. These product-orbit vectors are exactly the restrictions of $\mathcal W_a(v)\Omega_a^\infty$ to the first $m$ coordinates. Since the union of the $H_m$ is dense, the full orbit span is dense. [F2, F3, F4, step 2.1, algebra]

4.1 The joint fixed space $\bigcap_{j\ge1}\operatorname{ran}P_j^{\Omega_a}$ is exactly $\mathbb C\Omega_a^\infty$. Indeed, let $\eta$ lie in this intersection, and let $\xi$ lie in some finite-coordinate space $H_m$. For $n\ge m$, put $R_n=\prod_{j=1}^nP_j^{\Omega_a}$. Then $R_n\eta=\eta$ and $R_n\xi=\langle\xi,\Omega_a^{\otimes m}\rangle\Omega_a^\infty$, since it projects the first $m$ factors onto their reference vectors and the remaining factors of $\xi$ already equal $\Omega_a$. Thus $\|\eta-R_n\xi\|=\|R_n(\eta-\xi)\|\le\|\eta-\xi\|$. The finite-coordinate union is dense by [F2], so $\eta$ is a limit of scalar multiples of $\Omega_a^\infty$ and belongs to that closed one-dimensional space. Conversely every $P_j^{\Omega_a}$ fixes $\Omega_a^\infty$. [F2, step 3.2, algebra]

4.2 Let $P_j=P_j^{\Omega_1}$ act on $\mathcal H_2$. For a vector $\xi\in H_m$ embedded using reference $\Omega_2$ and any $j>m$, the $j$th coordinate is $\Omega_2$, so the local rank-one formula gives $\langle P_j\xi,\xi\rangle=|\langle\Omega_2,\Omega_1\rangle|^2\|\xi\|^2$. For arbitrary $\eta\in\mathcal H_2$, approximate by such a finite-coordinate $\xi$. Since $\|P_j\|\le1$, for every $j>m$ the difference between these expectations is at most $\|\eta-\xi\| (\|\eta\|+\|\xi\|)$, and the difference between the squared norm terms is bounded by the same quantity. Density therefore gives $\lim_{j\to\infty}\langle P_j\eta,\eta\rangle=|\langle\Omega_2,\Omega_1\rangle|^2\|\eta\|^2$. Direct substitution and [F5] give $\langle\Omega_2,\Omega_1\rangle=\frac{2^{1/4}}{\sqrt\pi}\int_{\mathbb R}e^{-3x^2/2}\,dx=2^{3/4}/\sqrt3$, so the limit coefficient is $2\sqrt2/3<1$. [F2, F5, step 1.1, step 3.2, algebra]

5.1 Let $M$ be a closed subspace invariant under every $\mathcal W_a(v)$. Because the operators are unitary and their inverses are also in the family, $M^\perp$ is invariant too; hence the orthogonal projection $Q_M$ commutes with every $\mathcal W_a(v)$. By step 3.2 it commutes with all $P_j^{\Omega_a}$. Since $P_j^{\Omega_a}\Omega_a^\infty=\Omega_a^\infty$, $Q_M\Omega_a^\infty$ lies in their joint fixed space, which is the reference line by step 4.1. Write $Q_M\Omega_a^\infty=c\Omega_a^\infty$. Commutation then gives $Q_M\mathcal W_a(v)\Omega_a^\infty=c\mathcal W_a(v)\Omega_a^\infty$ for every finitely supported $v$. Totality from step 3.3 and continuity imply $Q_M=cI$. Since $Q_M$ is a projection, $c\in\{0,1\}$, proving irreducibility of each representation. [F1, step 3.2, step 4.1, step 3.3, algebra]

6.1 If a unitary $U:\mathcal H_1\to\mathcal H_2$ intertwined the two Weyl representations, [F3] would make it intertwine the same averages $P_j$ for every $j$. Since $P_j^{\Omega_1}\Omega_1^\infty=\Omega_1^\infty$, the unit vector $\eta=U\Omega_1^\infty$ would satisfy $P_j\eta=\eta$ for all $j$ and hence $\langle P_j\eta,\eta\rangle=1$ for every $j$. Step 4.2 gives limit $2\sqrt2/3<1$, a contradiction. Thus the two irreducible line-regular Weyl representations are inequivalent. [F3, step 3.2, step 4.2, algebra] ∎

## Boundary cases



- Every vector of $V$ has finite support; the proof of line regularity uses
  this finite-support hypothesis essentially.
- The example fixes the nonzero central parameter $\lambda=1$; inequivalence
  arises from the two infinite tensor reference vectors, not from changing
  that parameter.
- The construction gives two representations and does not classify all
  infinite-dimensional Weyl representations.
