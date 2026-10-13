---
id: lem-nrqm-state-geometry-purity-criterion
kind: lemma
domain: mathematics
title: "Purity, spectral weights and the criterion for a pure state"
status: published
origin: pipeline
dependency_level: 4
deps: [def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-state-geometry-ray-to-rank-one-projection, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-hilbert-adjoint-properties, thm-hilbert-space-fourier-expansion, thm-cauchy-schwarz-in-an-inner-product-space, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-self-adjoint-positive-unitary-and-normal-operator, def-trace-class-operator, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice]
dependency_roles:
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-state-geometry-ray-to-rank-one-projection: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Section 2.3.1, printed page 20: a density operator is diagonalizable with nonnegative eigenvalues summing to one, and a pure state has a single nonzero eigenvalue equal to one"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.3, printed pages 139-142 (PDF pages 151-154): spectral decomposition and the eigenvalue sum of a positive trace-class operator"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017), Section 3.6, printed pages 96-100: the trace of a positive trace-class operator is the sum of its eigenvalues"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $H\ne\{0\}$ be a complex Hilbert space and let $\rho\in D(H)$ be a density operator ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]). Let
$$(\lambda_n)_{n\in J},\qquad J\ \text{a finite initial segment of}\ \mathbb N\ \text{or all of}\ \mathbb N,$$
be the positive eigenvalues of $\rho$ listed with multiplicity, so that $\rho=\sum_{n\in J}\lambda_nT_{u_n,u_n}$ for an orthonormal family $(u_n)_{n\in J}$ of eigenvectors, $\rho u_n=\lambda_nu_n$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). Then:

(a) $\lambda_n>0$ for every $n\in J$, $\sum_{n\in J}\lambda_n=1$, and $\lambda_n\le1$ for every $n\in J$.

(b) $\rho^{2}$ is a self-adjoint positive trace-class operator, and its positive eigenvalues, counted with multiplicity, are exactly the numbers $\lambda_n^{2}$ with $n\in J$; consequently
$$\operatorname{tr}(\rho^{2})=\sum_{n\in J}\lambda_n^{2}\in(0,1].$$

(c) The following four statements are equivalent: (i) $\operatorname{tr}(\rho^{2})=1$; (ii) $J=\{n_0\}$ for a single index $n_0$ and $\lambda_{n_0}=1$; (iii) $\rho$ is a pure state; (iv) $\rho^{2}=\rho$.

(d) If $\rho$ is not pure, then $\operatorname{tr}(\rho^{2})<1$ and $J$ contains at least two indices, so that $\rho$ has at least two positive eigenvalues counted with multiplicity.

## Facts & Assumptions

**Given:** The Hilbert space $H\ne\{0\}$; a density operator $\rho$; its positive eigenvalues $\lambda_n$ with orthonormal eigenvectors $u_n$, $n\in J$.

[F1] **Density operators and their spectral expansion** ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]): $\rho$ is self-adjoint, positive and trace class with $\operatorname{tr}\rho=1$; and $\rho$ admits the expansion $\rho=\sum_{n\in J}\lambda_nT_{u_n,u_n}$ with weights $\lambda_n\ge0$, $\sum_n\lambda_n=1$, and $(u_n)$ an orthonormal family of eigenvectors of $\rho$, the weights being its positive eigenvalues counted with multiplicity, and conversely every such expansion determines $\rho$.

[F2] **Spectral theorem for compact self-adjoint operators** ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]): the nonzero eigenvalues of the compact self-adjoint operator $\rho$ form a finite or countably infinite set of real numbers with finite-dimensional eigenspaces. Since $\rho$ is positive, each nonzero eigenvalue is positive. Let $\Sigma$ denote the set of distinct nonzero eigenvalues, let $E_{\lambda}:=\ker(\rho-\lambda I)$, and let $P_{\lambda}$ be the orthogonal projection onto $E_{\lambda}$ for $\lambda\in\Sigma$. The closed span $M$ of the union of these eigenspaces equals $(\ker\rho)^{\perp}=\overline{\operatorname{ran}\rho}$; $H=M\oplus\ker\rho$; and $\rho x=\sum_{\lambda\in\Sigma}\lambda P_{\lambda}x$ in norm, where this sum is indexed by distinct eigenvalues, not by eigenvalues repeated with multiplicity.

[F3] **Trace of a positive trace-class operator** ([[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]): for a self-adjoint positive trace-class operator its trace is the sum of its positive eigenvalues counted with multiplicity, and this sum equals its trace norm.

[F4] **Trace-class ideal and norm bound** ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]): $\rho^{2}=\rho\,\rho$ is trace class because $\rho$ is bounded and trace class, and $\|T\|\le\|T\|_1$ for trace-class $T$.

[F5] **Adjoints and positivity of $\rho^{2}$** ([[thm-hilbert-adjoint-properties]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-cauchy-schwarz-in-an-inner-product-space]]): $\rho^{2}$ is self-adjoint with $(\rho^{2})^{*}=(\rho^{*})^{2}=\rho^{2}$ and positive because $\langle\rho^{2}x,x\rangle=\langle\rho x,\rho x\rangle=\|\rho x\|^{2}\ge0$; and $|\langle y,x\rangle|\le\|y\|\,\|x\|$.

[F6] **Orthonormal expansions** ([[thm-hilbert-space-fourier-expansion]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]): for a complete orthonormal family $(e_i)$ of a closed subspace and $x$ in that subspace, $x=\sum_i\langle x,e_i\rangle e_i$ in norm, and the coefficients are unique: if $\sum_i a_ie_i=x$ in the finite-subset net, then $a_i=\langle x,e_i\rangle$ for all $i$.

[F7] **Pure states and rank-one operators** ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-state-geometry-ray-to-rank-one-projection]]): $\rho$ is pure exactly when $\rho=T_{u,u}$ for some $u\in S(H)$; and for such $u$ one has $T_{u,u}u=\|u\|^{2}u=u$ and $T_{u,u}^{2}=T_{u,u}$.

## Proof

1.1 [(a) the weights are positive and sum to one] By [F1] the $\lambda_n$ are exactly the positive eigenvalues with multiplicity, so $\lambda_n>0$ for $n\in J$; the identity $\sum_{n\in J}\lambda_n=\operatorname{tr}\rho=1$ is [F1] together with [F3] applied to the positive trace-class operator $\rho$; since all terms are nonnegative and their sum is $1$, each single term satisfies $\lambda_n\le1$. [given, F1, F3, algebra]

2.1 [(b) the eigenvalues of $\rho^{2}$] By [F4] and [F5] the operator $\rho^{2}$ is self-adjoint, positive and trace class. For each distinct positive eigenvalue $\lambda$ of $\rho$, [F1] lists exactly its finite multiplicity of orthonormal eigenvectors among $(u_n)$; since an orthonormal family is linearly independent and $E_\lambda$ has that finite dimension by [F2], those vectors form an orthonormal basis of $E_\lambda$. Their union is therefore a complete orthonormal family of $M$ by [F2]. If $\rho^{2}x=\mu x$ with $\mu>0$, then $x=\mu^{-1}\rho^{2}x\in\operatorname{ran}\rho\subseteq M$ by [F2], so [F6] gives the norm-convergent expansion $x=\sum_{n\in J}a_nu_n$, where $a_n=\langle x,u_n\rangle$. The expansion in [F1] gives $\rho u_n=\lambda_nu_n$; applying the bounded operator $\rho$ twice to the finite partial sums of the expansion of $x$ yields $\rho^{2}x=\sum_{n\in J}\lambda_n^{2}a_nu_n$ in norm. By uniqueness of coefficients in [F6], $(\lambda_n^{2}-\mu)a_n=0$ for every $n$. Thus the $\mu$-eigenspace of $\rho^{2}$ is exactly the closed span of those $u_n$ with $\lambda_n^{2}=\mu$: the reverse inclusion holds because each such $u_n$ is an eigenvector of $\rho^{2}$, and the forward inclusion follows from the coefficient identity and completeness. Since $\lambda_n>0$, the positive eigenvalues of $\rho^{2}$ are exactly the numbers $\lambda_n^{2}$ with multiplicity. By [F3], $\operatorname{tr}(\rho^{2})=\sum_{n\in J}\lambda_n^{2}$. The sum is positive because some $\lambda_n>0$ by $\sum\lambda_n=1$, and it is at most $1$ because $\lambda_n^{2}\le\lambda_n$ by step 1.1 and $\sum\lambda_n=1$. [given, step 1.1, F1, F2, F3, F4, F5, F6, algebra]

3.1 [(c) equivalences] Statement (i) holds, that is $\sum_n\lambda_n^{2}=1=\sum_n\lambda_n$, if and only if $\sum_n\lambda_n(1-\lambda_n)=0$; since $0\le\lambda_n\le1$ by step 1.1, each term is nonnegative, so this happens exactly when $\lambda_n\in\{0,1\}$ for every $n$, and because $\lambda_n>0$ on the index set $J$ and $\sum_{n\in J}\lambda_n=1$, exactly when $J$ consists of a single index $n_0$ with $\lambda_{n_0}=1$; this is (ii). If (ii) holds, then the expansion of [F1] reads $\rho=T_{u_{n_0},u_{n_0}}$ with $u_{n_0}$ a unit vector of the orthonormal family, so $\rho$ is pure, which is (iii), by [F7]. If $\rho$ is pure, say $\rho=T_{u,u}$ with $\|u\|=1$, then $\rho^{2}=\rho$ by the product rule $T_{u,u}T_{u,u}=T_{T_{u,u}u,u}=T_{u,u}$ recalled in [F7], giving (iv). Finally, if $\rho^{2}=\rho$ and $\rho x=\lambda x$, then $\lambda^{2}x=\rho^{2}x=\rho x=\lambda x$, so $\lambda\in\{0,1\}$ for the positive eigenvalues $n\in J$; since their sum is $1$ there is exactly one index $n_0$ with $\lambda_{n_0}=1$, which is (ii), and then $\operatorname{tr}(\rho^{2})=\operatorname{tr}\rho=1$ gives (i). The implications (i)$\Rightarrow$(ii)$\Rightarrow$(iii)$\Rightarrow$(iv)$\Rightarrow$(ii) show that all four statements are equivalent. [given, step 1.1, step 2.1, F1, F3, F7, algebra]

4.1 [(d) non-pure states have at least two positive eigenvalues] If $\rho$ is not pure, then $\operatorname{tr}(\rho^{2})\ne1$ by step 3.1, and $\operatorname{tr}(\rho^{2})\le1$ by step 2.1, so $\operatorname{tr}(\rho^{2})<1$. If $J$ had exactly one index $n_0$, then $\sum_{n\in J}\lambda_n=\lambda_{n_0}=1$ by step 1.1, and condition (ii) of step 3.1 would hold, making $\rho$ pure by that step, a contradiction; hence $J$ has at least two indices. This proves (a)-(d). [given, step 1.1, step 2.1, step 3.1, algebra] ∎
