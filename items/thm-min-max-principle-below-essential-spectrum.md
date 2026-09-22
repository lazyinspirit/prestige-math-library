---
id: thm-min-max-principle-below-essential-spectrum
kind: theorem
title: "Min-max principle below the essential spectrum"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-discrete-and-essential-spectrum-of-a-self-adjoint-operator, lem-spectral-form-domain-and-core-of-a-semibounded-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthogonality-and-orthogonal-complement, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice, def-projection-valued-measure, thm-unbounded-borel-functional-calculus, thm-heine-borel-r, thm-cauchy-schwarz-in-an-inner-product-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 4.12 (max-min), Theorem 4.14 (min-max) and the preceding proof, pp.139-141; source trial-dimension typo corrected"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let A be a self-adjoint operator on a complex Hilbert space H, bounded below by c, with form domain Q(A) and form q_A of [[lem-spectral-form-domain-and-core-of-a-semibounded-operator]]. Put $\Lambda=\inf\sigma_{\rm ess}(A)$, with inf(empty)=+infinity. List the eigenvalues below Lambda in nondecreasing order with multiplicity as E_1,E_2,..., setting E_n=Lambda after the list is exhausted. Then for every integer n>=1,
$$E_n=\inf_{\substack{L\subseteq Q(A)\text{ linear}\\\dim L=n}}\ \sup_{\substack{x\in L\\\|x\|=1}}q_A[x]=\sup_{\substack{F\subseteq Q(A)\text{ linear}\\\dim F\le n-1}}\ \inf_{\substack{x\in Q(A)\cap F^\perp\\\|x\|=1}}q_A[x].$$
All infima over empty sets are +infinity. Finite dimensions here are ordinary linear dimensions, equivalently Hilbert dimensions for these finite-dimensional subspaces. The second outer family is always nonempty, since it contains {0}. Whenever Q(A) contains an (n-1)-dimensional subspace, the same value is obtained by requiring dim F=n-1. The at-most convention includes the exhausted finite-dimensional case for all n without taking a supremum over an empty outer family.

The first infimum is unchanged if its trial spaces L are restricted to D(A). If E_n<Lambda, both outer values are attained, respectively by spans of the first n and the first n-1 orthonormal eigenvectors (the latter span is {0} when n=1).

## Facts & Assumptions

[A1] The essential spectrum is closed, and a real v is in it exactly when every interval about v has infinite-rank spectral projection. A finite-rank interval contains only finitely many spectral points, and each such point is an isolated finite-multiplicity eigenvalue. The singleton projection is the eigenspace projection. The spectrum carries E. [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]

[A2] The spectral PVM has intersection products, orthogonal disjoint ranges and strong countable additivity. The spectral domain is $D(A)=\{x:\int v^2dE_x<\infty\}$. For a vector in the range of a bounded interval projection its scalar measure is carried by that interval, so it belongs to D(A). The calculus identifies spectral support with spectrum. [[def-projection-valued-measure]] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] [[thm-unbounded-borel-functional-calculus]]

[A3] $q_A[x]=\int v\,dE_x$ is finite on Q(A), $q_A[x]\ge c\|x\|^2$, and E is carried on [c,infinity). The form domain is a dense linear subspace containing D(A); its form is Hermitian with $q_A[x]=\langle Ax,x\rangle$ on D(A). Self-adjoint operators are symmetric. [[lem-spectral-form-domain-and-core-of-a-semibounded-operator]] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[A4] Orthogonality uses the first-variable-linear inner product; a finite orthonormal family is linearly independent and the squared norm of its linear combination is the sum of squared coefficient moduli. Pairings are continuous by Cauchy-Schwarz. A closed bounded real interval has the finite-open-subcover property. [[def-orthogonality-and-orthogonal-complement]] [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]] [[thm-cauchy-schwarz-in-an-inner-product-space]] [[thm-heine-borel-r]]

[A5] AC is declared for the spectral and form interfaces and, if the eigenvalue list is infinite, for choosing orthonormal bases in its countably many finite-dimensional eigenspaces. All variational subspace and kernel arguments below are finite-dimensional. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

**Given:** A>=c, its spectral measure E, and the variational quantities in the statement.

1.1 Suppose first H is nonzero. For any real r<Lambda with r>=c, each point of [c,r] has a finite-rank interval neighborhood by [A1]. Use the family of all such intervals and the finite subcover property [A4]. Each chosen interval contains finitely many spectral points, so sigma(A) intersect [c,r] is finite. These points are discrete eigenvalues of finite multiplicity by [A1]. Since E is carried by sigma(A) intersect [c,infinity), $E((-\infty,r])$ is the finite sum of their singleton projections. For r<c it is zero. In particular the total multiplicity below each r<Lambda is finite. The eigenvalues below Lambda can therefore be ordered from below: if any remain, choose one such u; the nonempty finite set of remaining values <=u has a smallest member, which is the smallest remaining value altogether. Repeat with its finite multiplicity. No value can be omitted forever, since only finitely many terms lie below any fixed u<Lambda. A countable increasing sequence of bounds r approaching Lambda (or infinity) covers all values; [A5] licenses the associated orthonormal eigenvector choices. [A1, A2, A3, A4, A5]

1.2 Write alpha_n for the first outer value over Q(A), beta_n for the second (dim F<=n-1), and alpha_n^D for the first over D(A). If dim L=n and dim F=r<=n-1, choose finite bases and impose the r equations $\langle x,f_j\rangle=0$ on x in L. Finite-dimensional elimination gives a nonzero solution, since there are fewer equations than unknowns. Normalize it to obtain a unit vector in L intersect F-perp. Thus the supremum on L is at least the infimum on Q(A) intersect F-perp. For each F take the infimum over L, then the supremum over F, giving beta_n<=alpha_n; this remains true when there is no L because alpha_n=+infinity. The trial-space inclusion gives alpha_n<=alpha_n^D. [A3, A4]

2.1 If Lambda is finite, it belongs to the essential spectrum: that set is nonempty in this case, bounded below by c, and closed; for every positive integer m choose a point between its infimum and Lambda+1/m and use closedness. Hence every interval around Lambda has infinite-rank projection by [A1]. If Lambda=+infinity and only k eigenvalues with multiplicity occur, there is no other spectrum: every finite spectral point lies below Lambda and is one of these eigenvalues. Support then makes their eigenspaces sum to all of H, so dim H=k and D(A)=Q(A)=H. The same last assertion holds directly with k=0 for H={0}. [A1, A2, A3, A5, step 1.1]

2.2 If E_n<Lambda, choose orthonormal eigenvectors phi_1,...,phi_n ordered with multiplicity as in step 1.1. Distinct eigenspaces are orthogonal because symmetry gives $(E_j-E_k)\langle\varphi_j,\varphi_k\rangle=0$; within each eigenspace choose an orthonormal basis by finite Gram-Schmidt. For $L_0=\operatorname{span}\{\varphi_1,\ldots,\varphi_n\}$, contained in D(A), $q_A[\sum_j a_j\varphi_j]=\sum_j E_j|a_j|^2$, so its unit-sphere supremum is E_n. For $F_0=\operatorname{span}\{\varphi_1,\ldots,\varphi_{n-1}\}$, all eigenspaces strictly below E_n are contained in F_0. The projection E((-infinity,E_n)) therefore annihilates every x in F_0-perp; repetitions of E_n need not be removed. Its scalar measure is carried on [E_n,infinity), so q_A[x]>=E_n for unit x in Q(A) intersect F_0-perp. Equality holds at phi_n. Consequently E_n<=beta_n<=alpha_n<=alpha_n^D<=E_n by step 1.2. This proves the formulas, the D(A) version and both attainments in this case. [A1, A2, A3, A4, step 1.1, step 1.2]

3.1 If E_n=Lambda is finite, exactly k<n eigenvalues occur below Lambda with multiplicity. Let F_0 be the span of all their orthonormal eigenvectors (zero if k=0). It is an admissible space of dimension k<=n-1. By support, vectors perpendicular to it have no spectral mass below Lambda, so the inner infimum is at least Lambda and beta_n>=Lambda. For any epsilon>0, the range of E((Lambda-epsilon,Lambda+epsilon)) is infinite dimensional by step 2.1. Choose n independent vectors there and use finite Gram-Schmidt to get an n-dimensional subspace L_epsilon in the same range. Bounded spectral support puts it in D(A) and gives q_A[x]<=Lambda+epsilon on its unit sphere. Hence alpha_n^D<=Lambda+epsilon. Let epsilon decrease to zero in the inequalities of step 1.2 to conclude beta_n=alpha_n=alpha_n^D=Lambda. No form-cross-term estimate or Weyl-sequence approximation is needed. [A1, A2, A3, A4, step 2.1, step 1.2]

3.2 If E_n=Lambda=+infinity, step 2.1 gives dim H=k<n, D(A)=Q(A)=H, with k the exhausted total multiplicity. There is no n-dimensional trial space, so alpha_n=alpha_n^D=+infinity. F=H has dimension k<=n-1 and is admissible for beta_n. Its orthogonal complement contains no unit vector, so its inner infimum is +infinity and beta_n=+infinity. This includes the zero Hilbert space for every n>=1. [A4, step 2.1, step 1.2]

4.1 Finally suppose Q(A) has a subspace of dimension n-1. Any finite-dimensional F contained in Q(A) with dim F<n-1 can be enlarged inside Q(A) to dimension n-1: as long as its dimension is smaller, choose a vector from the given (n-1)-dimensional subspace not in the current span and adjoin it. Enlarging F shrinks Q(A) intersect F-perp, so its inner infimum cannot decrease. Taking suprema shows that restricting the second outer family to exact dimension n-1 leaves beta_n unchanged; the reverse inequality is family inclusion. When n=1 the only space is F={0}. When H is finite dimensional and n exceeds dim H+1, the at-most convention remains necessary. The real lower bound c was never shifted away, so negative eigenvalues and threshold zero require no special argument. AC is used exactly in [A5] and the infimum-approaching sequence in step 2.1. [A4, A5, step 2.1, step 2.2, step 3.1, step 3.2] ∎


## Source notes

Teschl, Section 4.4, printed pp.139–141 (PDF pp.150–152), equations (4.37)–(4.41) and Theorem 4.12, gives the max-min argument using n-1 trial vectors, whose span can have smaller dimension. Theorem 4.14's min-max proof is assigned as Problem 4.11 and its printed trial count is inconsistent with (4.43). The full projection proof above supplies both formulas directly, with n-dimensional min-max spaces and explicit finite-dimensional exhaustion conventions.
