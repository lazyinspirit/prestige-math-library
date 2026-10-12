---
id: thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy
aliases: [nrqm-coulomb-negative-subspace-completeness-and-degeneracy]
kind: theorem
domain: mathematics
title: "Negative-subspace completeness and degeneracy"
status: draft
origin: pipeline
dependency_level: 9
deps: [thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-kummer-recurrence-and-termination, def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-inner-product-space, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-inner-product-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (Theorem 10.9: the orthonormal basis psi_(n,l,m), |m| <= l <= n, of the eigenspace at E_n, of dimension (n+1)^2)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive), Section 8.1 pp. 182-189 (gross structure of hydrogen: the discrete levels |n,l,m>, the four-fold degeneracy of n=2, the n^2-fold degeneracy and the series limit)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$ and let
$C=-\Delta-\gamma/|\cdot|$ on $D(C)=H^2(\mathbb R^3;\mathbb C)$ be the
self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] with
essential spectrum $[0,\infty)$. For $n\ge1$, $0\le l\le n-1$ and
$-l\le m\le l$ let $u_{nl}$ be the regular solution of
[[thm-nrqm-coulomb-kummer-recurrence-and-termination]] at $k=\gamma/(2n)$
(the polynomial-exponential solution, unique up to a nonzero scalar), and put
$$\psi_{nlm}(x):=\frac{u_{nl}(r)}{r}Y_{lm}(\Omega)\qquad(x=r\Omega).$$
Then:

(a) each $\psi_{nlm}$ lies in $D(C)$ and $C\psi_{nlm}=-\frac{\gamma^2}{4n^2}\psi_{nlm}$; the vectors $\psi_{nlm}$ with distinct labels are pairwise orthogonal, and for fixed $n$ the eigenspace of $C$ at $-\gamma^2/(4n^2)$ is exactly their span; it has dimension $\sum_{l=0}^{n-1}(2l+1)=n^2$;

(b) after normalization, the family $(\psi_{nlm}/\|u_{nl}\|_2)_{n\ge1,0\le l\le n-1,-l\le m\le l}$ is a complete orthonormal family of the negative spectral subspace $E_C((-\infty,0))L^2(\mathbb R^3)$;

(c) the family is not complete in $L^2(\mathbb R^3)$: the nonnegative spectral subspace $E_C([0,\infty))L^2(\mathbb R^3)$ is nonzero (indeed infinite dimensional), so the bound states alone do not span $L^2$.

All claims concern the mathematical spectral decomposition of $C$; no physical
interpretation is asserted.

## Facts & Assumptions

**Given:** $\gamma>0$, the operator $C$ with essential spectrum $[0,\infty)$ and spectral measure $E$; the labels $n,l,m$; the functions $\psi_{nlm}$.

[F1] The negative eigenvalues of $C$ are exactly $-\gamma^2/(4n^2)$ ($n\ge1$), and every eigenfunction of $C$ with negative eigenvalue $E=-\gamma^2/(4n^2)$ has, in each block $(l,m)$ with $l\le n-1$, a scalar multiple of $u_{nl}$, while every block with $l\ge n$ vanishes (because $-\gamma^2/(4n^2)$ is not a negative eigenvalue of $A_l$ when $l\ge n$) ([[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]]).

[F2] $U$ is unitary and $\|u_{lm}\|_2=\|\psi\|_{L^2}$ for $U\psi=(u_{lm})$ ([[thm-nrqm-coulomb-angular-radial-unitary-reduction]]); for $u\in D(A_l)$ and $A_lu=Eu$ the transported $\psi(x)=u(r)Y_{lm}(\Omega)/r$ lies in $D(C)$ and $C\psi=E\psi$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]]).

[F3] The negative spectral subspace $E_C((-\infty,0))L^2$ is the closed linear span of the eigenspaces of $C$ for its negative eigenvalues ([[thm-nrqm-coulomb-essential-spectrum]] (c)).

[F4] Eigenspaces of a self-adjoint operator for distinct eigenvalues are orthogonal; $E(\{\lambda\})$ is the orthogonal projection onto $\ker(C-\lambda)$; and $\lambda\in\sigma_{\mathrm{ess}}(C)$ iff $\operatorname{rank}E((\lambda-\varepsilon,\lambda+\varepsilon))=\infty$ for every $\varepsilon>0$ ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[def-projection-valued-measure]]).

[F5] For a complete orthonormal family $(e_i)$ of a closed subspace $S$ of a Hilbert space one has $x=\sum_i\langle x,e_i\rangle e_i$ and $\|x\|^2=\sum_i|\langle x,e_i\rangle|^2$ for $x\in S$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]]).


## Proof

1.1 [The eigenvectors and their orthogonality] For each label, $u_{nl}$ is an eigenfunction of $A_l$ with eigenvalue $-\gamma^2/(4n^2)$ by [F1], so [F2] gives $\psi_{nlm}\in D(C)$ and $C\psi_{nlm}=-(\gamma^2/(4n^2))\psi_{nlm}$. Vectors with different $n$ have different eigenvalues and are orthogonal by [F4]; vectors with the same $n$ but different $(l,m)$ are orthogonal because $U$ is unitary and their coefficient vectors in $K$ have disjoint supports. [F1, F2, F4, given, algebra]

2.1 [The eigenspaces] By [F1] every eigenfunction of $C$ with eigenvalue $-\gamma^2/(4n^2)$ has every block with $l\le n-1$ equal to a scalar multiple of the corresponding $u_{nl}$ and every block with $l\ge n$ equal to $0$, hence lies in the span of the $\psi_{nlm}$ with that $n$; the reverse inclusion is step 1.1, so the eigenspace is exactly that span. Its dimension is $\sum_{l=0}^{n-1}(2l+1)=n^2$ because the angular functions $Y_{lm}$ for $0\le l\le n-1$, $-l\le m\le l$ are linearly independent (they are orthonormal). This is (a). [step 1.1, F1, F2, algebra]

3.1 [Completeness in the negative subspace] By [F3] the negative spectral subspace is the closed linear span of the negative eigenspaces, and by step 2.1 those eigenspaces are spanned by the $\psi_{nlm}$; hence the closed span of the family equals $E_C((-\infty,0))L^2$. Since each $\|u_{nl}\|_2$ is finite and nonzero by [F1] and [F2], normalizing each vector preserves orthogonality and the closed span, and the normalized family is complete in that subspace; the expansion and Parseval identities are those of [F5]. This is (b). [step 2.1, F1, F2, F3, F5, algebra]

4.1 [The negative family is not complete in $L^2$] Since $\sigma_{\mathrm{ess}}(C)=[0,\infty)$ contains $\lambda=1/4$, [F4] applied with $\varepsilon=1/4$ shows that the projection $E((0,1/2))$ has infinite rank. Its range is nonzero and orthogonal to $E_C((-\infty,0))L^2$ by [F4] (projections of disjoint Borel sets). Hence $E_C([0,\infty))L^2$ is nonzero (indeed infinite dimensional) and the closed span of the bound states is a proper subspace of $L^2(\mathbb R^3)$; this is (c). [step 3.1, F4, given, algebra]

5.1 [Conclusion] Clauses (a), (b), (c) are steps 1.1 and 2.1, 3.1, and 4.1. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
