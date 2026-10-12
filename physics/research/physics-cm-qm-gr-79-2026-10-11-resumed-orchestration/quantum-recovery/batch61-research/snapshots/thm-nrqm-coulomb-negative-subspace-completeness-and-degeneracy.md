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

[F2] $U$ is unitary and $\|\psi\|_{L^2}^2=\sum_{l,m}\|u_{lm}\|_2^2$ for $U\psi=(u_{lm})$; in particular the inverse image of a vector supported in one block $(l,m)$ with entry $u$ has norm $\|u\|_2$ ([[thm-nrqm-coulomb-angular-radial-unitary-reduction]] (a), (b)). If $u\in D(A_l)$ and $A_lu=Eu$, that one-block vector belongs to the direct-sum operator domain since $\|u\|_2^2+\|Eu\|_2^2<\infty$, so its inverse image $\psi(x)=u(r)Y_{lm}(\Omega)/r$ lies in $D(C)$ and $C\psi=E\psi$ for every allowed $m$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] (d)).

[F3] The negative spectral subspace $E_C((-\infty,0))L^2$ is the closed linear span of the eigenspaces of $C$ for its negative eigenvalues ([[thm-nrqm-coulomb-essential-spectrum]] (c)).

[F4] Eigenspaces of a self-adjoint operator for distinct eigenvalues are orthogonal; $E(\{\lambda\})$ is the orthogonal projection onto $\ker(C-\lambda)$; and $\lambda\in\sigma_{\mathrm{ess}}(C)$ iff $\operatorname{rank}E((\lambda-\varepsilon,\lambda+\varepsilon))=\infty$ for every $\varepsilon>0$ ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[def-projection-valued-measure]]).

[F5] For a complete orthonormal family $(e_i)$ of a closed subspace $S$ of a Hilbert space one has $x=\sum_i\langle x,e_i\rangle e_i$ and $\|x\|^2=\sum_i|\langle x,e_i\rangle|^2$ for $x\in S$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]]).


## Proof

1.1 [Eigenvectors, exact norms and orthogonality] For each label put $E_n=-\gamma^2/(4n^2)$. The Kummer termination and Laguerre exhaustion suppliers give a nonzero $u_{nl}\in D(A_l)$ with $A_lu_{nl}=E_nu_{nl}$; [F2] transports the vector supported in block $(l,m)$ to $\psi_{nlm}\in D(C)$ with $C\psi_{nlm}=E_n\psi_{nlm}$ and $\|\psi_{nlm}\|_2=\|u_{nl}\|_2>0$. For different $n$, the numbers $E_n$ are distinct and self-adjointness gives orthogonality by [F4]. For equal $n$ and different $(l,m)$, the direct-sum vectors have disjoint supports, hence their inner product is zero; unitarity transfers that orthogonality to $L^2(\mathbb R^3)$. Thus $e_{nlm}:=\psi_{nlm}/\|u_{nl}\|_2$ is an orthonormal family. [F1, F2, F4, given, algebra]

2.1 [The entire eigenspace and its dimension] Let $C\psi=E_n\psi$. The block-domain identity in [F2] and exhaustion in [F1] give $U\psi=(a_{lm}u_{nl})_{0\le l\le n-1,-l\le m\le l}$ with all other blocks zero. There are only $\sum_{l=0}^{n-1}(2l+1)$ such blocks, so inversion gives the finite sum $\psi=\sum_{l=0}^{n-1}\sum_{m=-l}^l a_{lm}\psi_{nlm}$; conversely each such sum belongs to the eigenspace by step 1.1. Its squared norm is $\sum_{l=0}^{n-1}\sum_{m=-l}^l |a_{lm}|^2\|u_{nl}\|_2^2$ by [F2]. If the sum is zero, every coefficient vanishes because each radial norm is positive; thus these vectors form a basis. Their number is $2\sum_{l=0}^{n-1}l+n=n(n-1)+n=n^2$, proving (a), including full $C$ degeneracy rather than only radial simplicity. [step 1.1, F1, F2, algebra]

3.1 [The bound orthonormal basis of the negative subspace] Let $S=E_C((-\infty,0))L^2$. By [F3], $S$ is the closed span of all negative eigenspaces, and by [F1] and step 2.1 these are exactly the finite-dimensional spaces spanned by $\psi_{nlm}$ for $n\ge1$. Each normalization scalar in step 1.1 is finite and nonzero, so the normalized and unnormalized families have exactly the same finite linear span, and therefore the same closed span $S$. The orthonormal family $(e_{nlm})$ is consequently complete in $S$. For $f\in S$, [F5] gives $f=\sum_{n,l,m}\langle f,e_{nlm}\rangle e_{nlm}$ in $L^2$ and $\|f\|_2^2=\sum_{n,l,m}|\langle f,e_{nlm}\rangle|^2$, with the declared first-entry-linear convention. This proves (b). [step 1.1, step 2.1, F1, F3, F5, algebra]

4.1 [An infinite-dimensional complementary subspace] Since $1/4\in\sigma_{\mathrm{ess}}(C)=[0,\infty)$, [F4] with radius $1/4$ gives infinite rank for $E_C((0,1/2))$. Its range is contained in $E_C([0,\infty))L^2$, because $(0,1/2)\subseteq[0,\infty)$ and nested spectral projections satisfy $E_C([0,\infty))E_C((0,1/2))=E_C((0,1/2))$. Thus the nonnegative subspace is infinite dimensional. Spectral projections for disjoint sets satisfy $E_C((-\infty,0))E_C([0,\infty))=0$, so this nonzero subspace is orthogonal to $S$. Step 3.1 identifies the closed span of the bound states with $S$, proving that family cannot be complete in all of $L^2$ and establishing (c). [step 3.1, F4, given, algebra]

5.1 [Conclusion] Step 1.1 proves domain membership and orthogonality; step 2.1 proves the full eigenspace and $n^2$ degeneracy in (a); step 3.1 proves (b); step 4.1 proves (c). [step 1.1, step 2.1, step 3.1, step 4.1] ∎
