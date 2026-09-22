---
id: thm-weyl-criterion-for-essential-spectrum
kind: theorem
title: "Weyl criterion for the essential spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-unbounded-borel-functional-calculus, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-weak-convergence-of-nets-and-sequences, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-dependent-choice, def-projection-valued-measure, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Lemma 6.17 with complete proof, pp.170-171"
---

## Statement

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator on a complex Hilbert space H and let
$\lambda\in\mathbb R$. Then $\lambda\in\sigma_{\mathrm{ess}}(A)$ if and only if
there is a sequence $x_n\in D(A)$ with $\|x_n\|=1$, $x_n\rightharpoonup0$ weakly
([[def-weak-convergence-of-nets-and-sequences]]) and
$\|(A-\lambda)x_n\|\to0$. The sequence may be chosen orthonormal; such a
sequence is called a singular Weyl sequence for $\lambda$.

Sequences below are indexed by all n in N={0,1,2,...}; the shrinking radii are 1/(n+1). Inner products are linear in the first variable.

## Facts & Assumptions

[A1] For every real lambda, membership in the essential spectrum is equivalent to infinite rank of every projection $P_\varepsilon=E((\lambda-\varepsilon,\lambda+\varepsilon))$, epsilon>0. This equivalence includes real resolvent points and isolated finite-multiplicity eigenvalues. On the zero Hilbert space the essential spectrum is empty. [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]

[A2] On nonzero H the spectral theorem gives the domain $D(A)=\{x:\int v^2dE_x<\infty\}$. Projections multiply by intersection and $E_x(C)=\|E(C)x\|^2$. The integral norm identity and Borel sum rule give $\|(A-\lambda)x\|^2=\int|v-\lambda|^2dE_x$ on D(A). [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] [[def-projection-valued-measure]] [[lem-unbounded-pvm-integral-is-well-defined-and-closed]] [[thm-unbounded-borel-functional-calculus]]

[A3] Weak convergence means convergence against every bounded linear functional. Under Countable Choice every such functional on a Hilbert space is $x\mapsto\langle x,y\rangle$; these pairings are bounded by Cauchy-Schwarz. Bessel bounds the sum of squared coefficients against an orthonormal family by the squared norm. [[def-weak-convergence-of-nets-and-sequences]] [[thm-riesz-representation-for-hilbert-space]] [[thm-cauchy-schwarz-in-an-inner-product-space]] [[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]] [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]

[A4] The declared AC supplies the spectral theorem and directly chooses a successor for every extendible finite orthonormal list; iterating that fixed choice function from the empty list gives the required sequence. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct.

**Given:** the self-adjoint A, real lambda and the hypotheses of the direction under consideration.

1.1 If H={0}, there is no unit vector and the essential spectrum is empty, so both sides are false. Otherwise use the PVM of [A2]. For any bounded interval J and x in ran E(J), the projection identity gives E_x(R\J)=0 and $\int v^2dE_x\le(\sup_{v\in J}|v|)^2\|x\|^2<\infty$, hence x belongs to D(A). For any x in D(A) and epsilon>0, [A2] gives $\|(I-P_\varepsilon)x\|^2=E_x(\{|v-\lambda|\ge\varepsilon\})\le\varepsilon^{-2}\int|v-\lambda|^2dE_x=\varepsilon^{-2}\|(A-\lambda)x\|^2$. The closed complement includes both interval endpoints. [A1, A2]

1.2 A finite-dimensional range of an orthogonal projection P has a finite orthonormal basis e_1,...,e_r: from a finite linear basis, successively subtract its projections onto the previously obtained vectors and normalize the nonzero residuals (nonzero follows from linear independence). Then $Px=\sum_{j=1}^r\langle x,e_j\rangle e_j$, since its difference from that sum lies in the range and is orthogonal to its basis. If x_n is weakly null, [A3] gives each coefficient tending to zero and $\|Px_n\|^2=\sum_{j=1}^r|\langle x_n,e_j\rangle|^2\to0$. For rank zero this is the empty sum and Px=0. [A2, A3]

1.3 Every orthonormal sequence is weakly null: Bessel gives $\sum_{n\ge0}|\langle y,x_n\rangle|^2\le\|y\|^2$ for each y. If infinitely many coefficients had modulus at least epsilon>0, finite partial sums of arbitrarily many such terms would exceed this bound. Thus their moduli tend to zero; conjugate symmetry gives $\langle x_n,y\rangle\to0$, and Riesz gives convergence against every bounded linear functional. [A3, A4]

2.1 Suppose a singular Weyl sequence exists. If any P_epsilon had finite rank, step 1.2 would give P_epsilon x_n to zero, while step 1.1 and the residual hypothesis would give (I-P_epsilon)x_n to zero. The triangle inequality would contradict norm x_n=1. Thus every P_epsilon has infinite rank, and [A1] proves lambda belongs to the essential spectrum. This proves the implication for all real lambda, including exclusion of real resolvent points, rather than merely excluding the discrete spectrum. [A1, step 1.1, step 1.2]

2.2 Suppose lambda is in the essential spectrum. For n>=0 write V_n=ran E((lambda-1/(n+1),lambda+1/(n+1))), infinite dimensional by [A1]. Given a finite list of n previously chosen orthonormal vectors x_0,...,x_(n-1), there is a nonzero vector in V_n orthogonal to them: choose n+1 linearly independent vectors in V_n and solve the n homogeneous linear equations for their pairings with the preceding vectors; a nonzero coefficient solution exists by finite-dimensional elimination, and independence makes its vector nonzero. Normalize it. For n=0 choose any nonzero vector in V_0 and normalize; there are no orthogonality equations. On the set of finite lists meeting these conditions, the relation of adjoining such a vector is entire. Apply DC from [A4] with the empty list as initial point; the compatible lists define x_n for every n>=0. The sequence is orthonormal and lies in D(A) by step 1.1. Its scalar measure is carried by the stated interval, so $\|(A-\lambda)x_n\|^2=\int|v-\lambda|^2dE_{x_n}\le(n+1)^{-2}\|x_n\|^2=(n+1)^{-2}$. Step 1.3 gives weak nullity. This constructs the required sequence and proves the converse. [A1, A2, A4, step 1.1, step 1.3]

3.1 The two implications are steps 2.1 and 2.2. Finite-dimensional H (including dimension one) has only finite-rank interval projections, so neither side holds there. Infinite multiplicity at an isolated point and spectral accumulation points are both covered by the same infinite-rank construction. Lambda=0 is allowed, since only the positive radii n+1 and epsilon are inverted. The empty initial list and the index-zero vector are included in step 2.2; the Choice use is [A4] and the spectral/Riesz interfaces, with no separability assumption. [A1, A4, step 2.1, step 2.2] ∎

## Source notes

Teschl, Lemma 6.17, printed pp.170–171 (PDF pp.181–182), gives the singular Weyl criterion and its complete projection-estimate proof. The present proof uses the infinite-rank characterization directly in both directions and a DC construction on shrinking interval ranges, with the library's zero-based indexing.
