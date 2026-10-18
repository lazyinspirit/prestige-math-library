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
  - thm-box-step-functions-are-dense-in-l-p-of-rn
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
proof_strategy: direct
axiom_use: "Countable Choice is used for the L² Hilbert structures and Hilbert completions, finite box-step density, and one-mode Gaussian/L² density; the finite-support formulas and overlap limit require no further choice."
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---
## Statement



Assume the Axiom of Countable Choice.

Let $V=c_{00}(\mathbb N;\mathbb R^2)$ be the real vector space of finitely
supported sequences $v=((q_j,p_j))_{j\ge1}$, with
$\omega(v,w)=\sum_j(q_jp'_j-p_jq'_j)$; this finite sum defines a nondegenerate
alternating form. For $a=1,2$, let $\mathcal H_a$ be the incomplete tensor
product of copies of $L^2(\mathbb R)$ with reference vector
$\Omega_a(x)=(a/\pi)^{1/4}e^{-ax^2/2}$. The finite-support operators

$$\mathcal W_a(v)=\bigotimes_{j\ge1}W_1(q_j,p_j),\qquad (W_1(q,p)f)(x)=e^{ip(x-q/2)}f(x-q),$$
where all but finitely many factors are the identity, define irreducible Weyl representations with phase $e^{-i\omega(v,w)/2}$ that are strongly continuous on every real line. They are inequivalent: a common local Gaussian average has expectation $1$ in the first reference vector and limiting expectation $2\sqrt2/3<1$ in every unit vector of the second representation.

## Facts & Assumptions

**Given:** Countable Choice; the finite-support symplectic space $V$, the two Gaussian reference vectors, and the one-mode Schrödinger formula.

[F1] The one-mode operators $W_1(q,p)$ form a strongly continuous irreducible Weyl system with phase $e^{-i(qp'-pq')/2}$ ([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F2] The incomplete tensor product $\mathcal H_\Omega$ is the completion of the increasing finite-coordinate spaces, and for any unit $\Phi$ the local rank-one projection $P_j^\Phi$ is well-defined and orthogonal ([[def-incomplete-tensor-product-with-reference-vector]]).

[F3] For $a>0$, the Gaussian Weyl average equals the projection onto $\Omega_a$; it commutes through bounded intertwiners, acts as $P_j^{\Omega_a}$ on a tensor coordinate, and the orbit of $\Omega_a$ is total in $L^2(\mathbb R)$ ([[lem-one-mode-gaussian-weyl-average-is-rank-one]]).

[F4] Under Countable Choice, finite linear combinations of box indicators are dense in $L^2(\mathbb R^m)$ for each finite $m$ ([[thm-box-step-functions-are-dense-in-l-p-of-rn]]).

[F5] $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F6] Strongly continuous Hilbert-valued vector fields with integrable norm have Bochner integrals; their norm is bounded by the integral of the norm, and bounded linear maps commute with these integrals ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[A1] Countable Choice is assumed ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 The sum defining $\omega$ is finite for $v,w\in V$; each term is bilinear and alternating, so $\omega$ is bilinear and alternating. If $v\ne0$, choose $j$ with $q_j^2+p_j^2>0$ and let $w$ be supported only at $j$ with $(q'_j,p'_j)=(p_j,-q_j)$. Then $\omega(v,w)=-(q_j^2+p_j^2)\ne0$, proving nondegeneracy. For $a\in\{1,2\}$, rescaling [F5] gives $\|\Omega_a\|_2^2=(a/\pi)^{1/2}\int e^{-ax^2}\,dx=1$. Hence [F2] constructs the Hilbert space $\mathcal H_a$ and its unit reference vector $\Omega_a^\infty$. [A1, F2, F5, given, algebra, construct]

2.1 If $v$ has support in $\{1,\ldots,n\}$, define on $H_n=L^2(\mathbb R^n)$ the finite-coordinate operator $W_1(q_1,p_1)\otimes\cdots\otimes W_1(q_n,p_n)$. Each factor is unitary by [F1], so the product is unitary. Appending reference factors in the embeddings of [F2] commutes with this operator, because all acted-on coordinates are among the first $n$; the operators therefore define a unitary on the dense compatible union and extend to $\mathcal H_a$. Its inverse is the operator for $-v$. [F1, F2, step 1.1, construct]

3.1 For each finite $m\ge1$, the span of the vectors $\bigotimes_{j=1}^m W_1(q_j,p_j)\Omega_a$ is dense in $H_m=L^2(\mathbb R^m)$. By [F4], finite linear combinations of indicators of finite-measure boxes $B=I_1\times\cdots\times I_m$ are dense. A box of zero measure has zero $L^2$ class; for a positive finite-measure box, $\mathbf1_B=\bigotimes_{j=1}^m\mathbf1_{I_j}$. By [F3], each $\mathbf1_{I_j}$ can be approximated in $L^2(\mathbb R)$ by finite linear combinations of the one-mode orbit vectors $W_1(q,p)\Omega_a$. Fubini gives $\|\bigotimes_j h_j\|_2=\prod_j\|h_j\|_2$, and the finite telescoping estimate $\|\bigotimes_j h_j-\bigotimes_j k_j\|_2\le\sum_{r=1}^m(\prod_{j<r}\|h_j\|_2)\|h_r-k_r\|_2(\prod_{j>r}\|k_j\|_2)$ shows that products of these approximants converge to $\mathbf1_B$. Expanding the finite tensor sums gives finite linear combinations of the stated product-orbit vectors, each the restriction of $\mathcal W_a(v)\Omega_a^\infty$ for a finitely supported $v$ by step 2.1. Hence their span is dense in $H_m$. For $m=0$, $H_0=\mathbb C$ is spanned by $\Omega_a^\infty$. [A1, F2, F3, F4, step 2.1, algebra]

3.2 At each of the finitely many coordinates in the union of the supports of $v$ and $w$, [F1] gives $W_1(q_j,p_j)W_1(q'_j,p'_j)=e^{-i(q_jp'_j-p_jq'_j)/2}W_1(q_j+q'_j,p_j+p'_j)$. Multiplication of these finite equations gives $\mathcal W_a(v)\mathcal W_a(w)=e^{-i\omega(v,w)/2}\mathcal W_a(v+w)$; outside that finite union every factor is the identity. For fixed finitely supported $v$, choose $n$ containing its support. On each box indicator from $H_m$, embed into $H_r$ with $r=\max(m,n)$; the orbit $t\mapsto\mathcal W_a(tv)\mathbf1_B$ is then a finite tensor product of strongly continuous one-mode orbits, hence is continuous by the finite telescoping estimate. Linear combinations of box indicators are dense in each $H_m$ by [F4], and the operators have norm $1$, so continuity extends to every vector in the compatible union. That union is dense in $\mathcal H_a$ by [F2]; the same norm bound extends continuity to the completion. [A1, F1, F2, F4, step 2.1, algebra]

3.3 Fix a coordinate $j$ and a parameter $c>0$. The local family $\rho_{a,j}(q,p):=\mathcal W_a(v_j(q,p))$, where $v_j(q,p)$ is supported only at coordinate $j$, is a strongly continuous one-mode Weyl family on $\mathcal H_a$: this holds on finite-coordinate elementary tensors by [F1] and extends by density from box-step functions [F4] and the unitary norm bound. Thus for every vector $\xi$ the weighted vector field $e^{-cq^2/4-p^2/(4c)}\rho_{a,j}(q,p)\xi$ is Bochner integrable by [F6]. On a finite-coordinate elementary tensor, its normalized integral acts on coordinate $j$ by the one-mode average $A_c$ and leaves the other coordinates fixed; [F3] identifies $A_c$ with the projection onto $\Omega_c$. Therefore this coordinate average equals $P_j^{\Omega_c}$ on the dense compatible union and, by boundedness, on $\mathcal H_a$. If a bounded map $T$ intertwines two such local families, [F6] lets $T$ pass through the vector-valued integral, so it intertwines the corresponding $P_j^{\Omega_c}$. In particular, any bounded operator commuting with all global $\mathcal W_a(v)$ commutes with $P_j^{\Omega_a}$ by taking $c=a$. The projections for distinct coordinates commute by their finite-coordinate formulas. [F2, F3, F4, F6, step 2.1]

4.1 The orbit of $\Omega_a^\infty$ under finite-support $\mathcal W_a(v)$ is total in $\mathcal H_a$. For each $m$, step 3.1 gives density of its finite-coordinate product-orbit vectors in $H_m=L^2(\mathbb R^m)$; these are restrictions of the full finite-support orbit. Since the compatible union of the $H_m$ is dense by [F2], the full orbit span is dense. [F2, step 3.1]

4.2 The joint fixed space $\bigcap_{j\ge1}\operatorname{ran}P_j^{\Omega_a}$ is exactly $\mathbb C\Omega_a^\infty$. Let $Q_a\xi:=\langle\xi,\Omega_a^\infty\rangle\Omega_a^\infty$. For $\xi$ in a finite-coordinate space $H_m$ and $n\ge m$, $R_n:=\prod_{j=1}^nP_j^{\Omega_a}$ satisfies $R_n\xi=\langle\xi,\Omega_a^{\otimes m}\rangle\Omega_a^\infty=Q_a\xi$. Since the finite-coordinate union is dense and $R_n,Q_a$ are contractions, $R_n\to Q_a$ strongly on $\mathcal H_a$. Every vector fixed by all $P_j^{\Omega_a}$ is fixed by every $R_n$, hence by $Q_a$ and lies in the reference line; conversely each $P_j^{\Omega_a}$ fixes $\Omega_a^\infty$. [F2, step 3.3, algebra]

4.3 Let $P_j=P_j^{\Omega_1}$ act on $\mathcal H_2$. For a vector $\xi\in H_m$ embedded using reference $\Omega_2$ and any $j>m$, the $j$th coordinate is $\Omega_2$, so the local rank-one formula gives $\langle P_j\xi,\xi\rangle=|\langle\Omega_2,\Omega_1\rangle|^2\|\xi\|^2$. For arbitrary $\eta\in\mathcal H_2$, approximate by such a finite-coordinate $\xi$. Since $\|P_j\|\le1$, for every $j>m$ the difference between these expectations is at most $\|\eta-\xi\| (\|\eta\|+\|\xi\|)$, and the difference between the squared norm terms is bounded by the same quantity. Density therefore gives $\lim_{j\to\infty}\langle P_j\eta,\eta\rangle=|\langle\Omega_2,\Omega_1\rangle|^2\|\eta\|^2$. Direct substitution and [F5] give $\langle\Omega_2,\Omega_1\rangle=\frac{2^{1/4}}{\sqrt\pi}\int_{\mathbb R}e^{-3x^2/2}\,dx=2^{3/4}/\sqrt3$, so the limit coefficient is $2\sqrt2/3<1$. [F2, F5, step 1.1, step 3.3, algebra]

5.1 Let $M$ be a nonzero closed subspace invariant under every $\mathcal W_a(v)$. For $\xi\in M$, the vector field defining the local average in step 3.3 takes values in $M$; its Bochner integral also lies in $M$, since the Bochner approximants are $M$-valued and $M$ is closed. Thus every $P_j^{\Omega_a}$ and every $R_n$ maps $M$ into $M$. Choose $0\ne\eta\in M$. Totality in step 4.1 gives a finitely supported $v$ with $\langle\eta,\mathcal W_a(v)\Omega_a^\infty\rangle\ne0$. Then $\zeta:=\mathcal W_a(-v)\eta\in M$ satisfies $\langle\zeta,\Omega_a^\infty\rangle=\langle\eta,\mathcal W_a(v)\Omega_a^\infty\rangle\ne0$. By step 4.2, $R_n\zeta\to Q_a\zeta=\langle\zeta,\Omega_a^\infty\rangle\Omega_a^\infty$; closedness and linearity of $M$ give $\Omega_a^\infty\in M$. Its total Weyl orbit forces $M=\mathcal H_a$, proving irreducibility for each $a$. [F1, F6, step 3.3, step 4.2, step 4.1, algebra]

6.1 If a unitary $U:\mathcal H_1\to\mathcal H_2$ intertwined the two global Weyl representations, it would intertwine their local coordinate families for every $j$. By the Bochner-integral argument in step 3.3 with $c=1$, it therefore intertwines the common averages $P_j^{\Omega_1}$ on the two spaces. Since $P_j^{\Omega_1}\Omega_1^\infty=\Omega_1^\infty$, the unit vector $\eta=U\Omega_1^\infty$ would satisfy $P_j^{\Omega_1}\eta=\eta$ for all $j$ and hence $\langle P_j^{\Omega_1}\eta,\eta\rangle=1$ for every $j$. Step 4.3 gives limit $2\sqrt2/3<1$, a contradiction. Thus the two irreducible line-regular Weyl representations are inequivalent. [step 3.3, step 4.3, algebra] ∎

## Boundary cases



- Every vector of $V$ has finite support; the proof of line regularity uses this finite-support hypothesis essentially.
- The example fixes the nonzero central parameter $\lambda=1$; inequivalence arises from the two infinite tensor reference vectors, not from changing that parameter.
- The construction gives two representations and does not classify all infinite-dimensional Weyl representations.
