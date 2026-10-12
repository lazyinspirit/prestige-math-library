---
id: thm-nrqm-composites-infinite-schmidt-decomposition
aliases: [nrqm-composites-infinite-schmidt-decomposition]
kind: theorem
domain: mathematics
title: "Infinite Schmidt decomposition and the pure product criterion"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-cauchy-schwarz-in-an-inner-product-space, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-hilbert-adjoint-properties, thm-norm-limit-of-compact-operators-is-compact, lem-finite-rank-operators-are-compact, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-separable-partial-trace, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-spectral-theorem-for-compact-self-adjoint-operators, def-compact-linear-operator, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-separable-hilbert-space-has-a-countable-orthonormal-basis: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  thm-bessel-inequality-for-an-arbitrary-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §1.4 pp. 45-47 and Ch. 3 (compact operators and spectral decomposition)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §§1-3"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let $H,K$ be nonzero complex Hilbert spaces ([[def-hilbert-space]]) with $H\widehat\otimes K$ their completed tensor product ([[lem-nrqm-composites-hilbert-tensor-construction]]). Then for every $\Psi\in H\widehat\otimes K$ there are an at most countable index set $J$, orthonormal families $(v_r)_{r\in J}\subseteq H$ and $(u_r)_{r\in J}\subseteq K$, and numbers $s_r>0$ with

$$\Psi=\sum_{r\in J}s_r\,v_r\otimes u_r\qquad\text{(norm convergence in }H\widehat\otimes K),$$

and $\|\Psi\|^2=\sum_rs_r^2$. The $s_r$ are the positive square roots of the nonzero eigenvalues of $CC^*$, where $C:\overline{K_0}\to H_0$ is the linear coefficient operator on countable closed factor supports of $\Psi$, defined below; if $J$ is infinite then $s_r\to0$. For $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_KT_{\Psi,\Psi}$ has $\operatorname{tr}\rho^2=\sum_rs_r^4$, and $\operatorname{tr}\rho^2=1$ holds exactly when exactly one $s_r$ is nonzero, i.e. exactly when $\Psi$ is a product vector. Mixed-state separability is a different, explicitly defined property and is not decided here.

For clarity, choose finite algebraic tensors converging to $\Psi$ and let $H_0\subseteq H$, $K_0\subseteq K$ be the closed spans of their factor vectors. These supports have finite/countable orthonormal bases, and $\Psi\in H_0\widehat\otimes K_0$. The conjugate Hilbert space $\overline{K_0}$ consists of symbols $\bar z$, with $a\bar z:=\overline{\bar a z}$ and $\langle\bar z,\bar w\rangle_{\overline{K_0}}:=\langle w,z\rangle_{K_0}$. For an orthonormal basis $(f_j)$ of $K_0$, write $\Psi=\sum_jh_j\otimes f_j$ and set $C\bar f_j=h_j$, extending linearly and continuously. The positive singular values and the nonzero spectrum of $CC^*$ are independent of these supports and bases, as the reduced-state identity proved below shows.

## Facts & Assumptions

**Given:** Countable Choice, arbitrary nonzero complex Hilbert spaces $H,K$, and $\Psi\in H\widehat\otimes K$. The supports, bases and coefficient map are constructed in the proof; no countable basis of the ambient spaces is assumed.

[F1] Algebraic tensors are dense in their Hilbert completion, and orthogonal coordinates have the squared-norm sum formula. A given dense sequence in a Hilbert space yields a finite/countable orthonormal basis by Gram–Schmidt ([[lem-nrqm-composites-hilbert-tensor-construction]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F2] Bounded finite-rank operators are compact, and an operator-norm limit of compact operators into a Hilbert space is compact under Countable Choice. Hilbert adjoints satisfy the adjoint identity and $(C^*)^*=C$; Cauchy–Schwarz bounds coordinate sums ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[thm-hilbert-adjoint-properties]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F3] A compact positive self-adjoint operator has positive eigenvalues of finite multiplicity, accumulating only at zero, and its nonzero eigenspaces span the orthogonal complement of its kernel. A positive trace-class operator has trace and trace norm equal to the sum of its positive eigenvalues ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]).

[F4] Rank-one operators have trace norm $\|T_{u,v}\|_1=\|u\|\|v\|$ and trace $\langle u,v\rangle$. The partial trace is bounded in trace norm with the defining bounded-operator pairing and elementary rank-one formula. Bounded tensor maps extend with their norm and adjoint identities ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nrqm-composites-separable-partial-trace]], [[lem-nrqm-composites-bounded-tensor-maps]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

## Proof

1.1 [Countable supports and coefficients] By density and Countable Choice choose algebraic tensors $\Psi_n\to\Psi$ with finite factor decompositions. Their countably many factor vectors span closed subspaces $H_0,K_0$ with explicit dense sequences of finite rational complex combinations; [F1] supplies finite/countable orthonormal bases. The inclusion of $H_0\odot K_0$ in $H\widehat\otimes K$ is isometric and extends to its closed completion, which contains $\Psi$. Choose the basis $(f_j)$ of $K_0$. As in the orthogonal contraction construction of [[lem-nrqm-composites-separable-partial-trace]], coefficient contractions define $h_j\in H_0$ with $\Psi=\sum_jh_j\otimes f_j$ and $\sum_j\|h_j\|^2=\|\Psi\|^2$. All sums here may be finite or empty, including $\Psi=0$. [given, F1, F4, choose, construct, algebra]

2.1 [The typed compact coefficient operator] Define $C(\sum_jz_j\bar f_j):=\sum_jz_jh_j$ first on finite sums in $\overline{K_0}$. Cauchy–Schwarz gives $\|Cz\|\le(\sum_j\|h_j\|^2)^{1/2}\|z\|$, so it extends to all of $\overline{K_0}$ by continuity and completeness. The finite truncations $C_N$ have finite rank and $\|C-C_N\|\le(\sum_{j>N}\|h_j\|^2)^{1/2}\to0$, so [F2] makes $C$ compact. The adjoint has the correctly typed formula $C^*x=\sum_j\langle x,h_j\rangle\bar f_j$ for $x\in H_0$, hence $CC^*x=\sum_j\langle x,h_j\rangle h_j$. The finite sums $\sum_{j\le N}T_{h_j,h_j}$ converge in trace norm by [F4], with trace sum $\sum_j\|h_j\|^2$; their operator-norm limit is $CC^*$, so $CC^*$ is positive trace class with $\operatorname{tr}CC^*=\|\Psi\|^2$. [step 1.1, F1, F2, F4, construct, algebra]

3.1 [Reduced-state identity] Let $\Psi_N=\sum_{j\le N}h_j\otimes f_j$. The elementary partial-trace formula gives $\operatorname{Tr}_KT_{\Psi_N,\Psi_N}=\sum_{j\le N}T_{h_j,h_j}$, regarding the latter operators on $H$ as zero on $H_0^\perp$. Rank-one continuity and boundedness of the partial trace [F4] pass to the limit and give $\operatorname{Tr}_KT_{\Psi,\Psi}=CC^*$ extended by zero. Thus the nonzero eigenvalues of $CC^*$ are intrinsic to $\Psi$, independent of all auxiliary supports and bases. [step 1.1, step 2.1, F4, algebra]

4.1 [Singular vectors in the conjugate factor] By [F3] choose orthonormal eigenvectors $v_r\in H_0$ for the positive eigenvalues $s_r^2$ of $CC^*$, counted with multiplicity; finite-dimensional eigenspace bases are supplied by [F1] and their countable selection uses the stated Countable Choice. Define $\bar u_r:=s_r^{-1}C^*v_r\in\overline{K_0}$. Then $\langle\bar u_r,\bar u_t\rangle=s_r^{-1}s_t^{-1}\langle v_r,CC^*v_t\rangle=\delta_{rt}$, so the actual vectors $u_r\in K_0$ are orthonormal too. By step 2.1 their coefficients obey $u_r=\sum_js_r^{-1}\langle h_j,v_r\rangle f_j$. The trace formula [F3] gives $\sum_rs_r^2=\operatorname{tr}CC^*=\|\Psi\|^2$, and infinitely many positive eigenvalues tend to zero. [step 2.1, step 3.1, F1, F2, F3, choose, construct, algebra]

5.1 [Reconstruction] If $g\in\ker CC^*$ then $0=\langle CC^*g,g\rangle=\|C^*g\|^2$, so all $\langle g,h_j\rangle$ vanish. Thus every $h_j$ is in the closed span of the $v_r$ by [F3], and $h_j=\sum_r\langle h_j,v_r\rangle v_r$. The orthonormal series $\sum_rs_rv_r\otimes u_r$ converges in tensor norm because $\sum_rs_r^2<\infty$. Its $f_j$ coefficient is $\sum_rs_r\langle u_r,f_j\rangle v_r=\sum_r\langle h_j,v_r\rangle v_r=h_j$ by step 4.1. The orthogonal coefficient norm formula [F1] therefore identifies its sum with $\Psi$. If $\Psi=0$, the positive spectrum and the Schmidt family are empty, giving the zero expansion. [step 1.1, step 4.1, F1, F3, algebra]

6.1 [Purity and product criterion] For $\|\Psi\|=1$, steps 3.1–5.1 show that the reduced density has eigenvalues $s_r^2$ and $\sum_rs_r^2=1$, hence $\operatorname{tr}\rho^2=\sum_rs_r^4$. The difference $(\sum_rs_r^2)^2-\sum_rs_r^4=2\sum_{r<t}s_r^2s_t^2$ vanishes exactly when there is one positive coefficient. That case makes the expansion a product vector. Conversely for a nonzero product $a\otimes b$, its coefficients are $h_j=\langle b,f_j\rangle a$, so $C$ has rank one and $CC^*$ has one positive eigenvalue; for a unit product its reduced purity is one. All ambient Hilbert spaces remain arbitrary; only the supports of this particular vector were made countable. This establishes every claimed clause. [step 2.1, step 3.1, step 4.1, step 5.1, F3, F4, algebra] ∎
