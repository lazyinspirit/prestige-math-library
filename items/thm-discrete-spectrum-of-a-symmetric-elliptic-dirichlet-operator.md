---
id: thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator
kind: theorem
title: "Discrete spectrum of a symmetric elliptic Dirichlet operator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-axiom-of-choice, def-compact-linear-operator, def-countable-choice, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-shifted-elliptic-solution-operator, def-symmetric-elliptic-weak-eigenpair, lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, lem-shifted-elliptic-solution-operator-is-compact-on-ltwo, lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint, thm-garding-inequality-for-a-divergence-form-elliptic-operator, thm-lebesgue-measure-of-a-box-of-every-kind, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, Theorem 4.25 and its proof, printed pp. 108-109 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Sections 4.1-4.3, Theorem 4.2 and Corollary 4.8, printed pp. 83-96 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 9, Section 9.8, Theorem 9.31 and Remark 28, printed pp. 311-312 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.1, Theorem 10.5, printed p. 227 (read in full)'
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], let $\Omega\subseteq\mathbb R^n$ be nonempty, open and bounded, fix $\mu\ge\beta$, and let $K_\mu$ be the shifted solution operator of [[def-shifted-elliptic-solution-operator]] ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]]). Then the following hold.
1. There are real numbers $\lambda_1\le\lambda_2\le\cdots$ with $\lambda_j\to+\infty$, each eigenvalue repeated according to its finite multiplicity, and an orthonormal basis $\{e_j\}_{j\ge1}$ of $L^2(\Omega)$ with $e_j\in H^1_0(\Omega)$ and
$$a(e_j,v)=\lambda_j(e_j,v)_{L^2}\qquad\text{for every }v\in H^1_0(\Omega),$$
equivalently $e_j\in D(L)$ and $Le_j=\lambda_je_j$ in the sense of [[def-symmetric-elliptic-weak-eigenpair]]. Explicitly $\lambda_j=\nu_j^{-1}-\mu$, where $\nu_j>0$, $\nu_j\downarrow0$, are the nonzero eigenvalues of the compact self-adjoint positive operator $K_\mu$ with $K_\mu e_j=\nu_je_j$ ([[lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint]]).
2. Every weak eigenvalue of the Dirichlet problem occurs in the list, and each listed $\lambda_j$ is a weak eigenvalue with finite-dimensional eigenspace; eigenspaces belonging to distinct eigenvalues are $L^2$-orthogonal.
3. $\lambda_j>-\mu$ for every $j$, and $a(u,u)\ge-\beta\|u\|^2_{L^2}$ for every $u\in H^1_0(\Omega)$.
The proof applies the compact self-adjoint spectral theorem once to $K_\mu$; since $\ker K_\mu=\{0\}$, no Hilbert basis of the kernel is ever selected, and the union of orthonormal bases of the nonzero eigenspaces of $K_\mu$ is already a Hilbert basis of $L^2(\Omega)$.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a nonempty bounded open set $\Omega\subseteq\mathbb R^n$; the symmetric divergence-form case with constants $\theta,M_a,M_c$; a fixed $\mu\ge\beta$; the shifted solution operator $K_\mu$ and the operator $L$ of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]].

[F1] Spectral data: $K_\mu$, regarded on $L^2(\Omega)$, is compact, self-adjoint, positive and injective, with $\ker K_\mu=\{0\}$ ([[lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint]], [[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], [[def-compact-linear-operator]], [[def-axiom-of-choice]]). Since $\Omega$ contains a box of positive finite measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), it contains countably many disjoint positive-measure subboxes whose indicators give an infinite orthogonal family in $L^2(\Omega)$.

[F2] Compact self-adjoint spectral theorem: the nonzero eigenvalues of $K_\mu$ are real, of finite multiplicity and accumulate only at $0$; the eigenspaces for distinct eigenvalues are orthogonal; the closed span of their union is $(\ker K_\mu)^\perp$, so it is all of $L^2(\Omega)$ because $K_\mu$ is injective; and $K_\mu x=\sum_\nu\nu P_\nu x$ in norm, where $P_\nu$ is the orthogonal projection onto the eigenspace of $\nu$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-countable-choice]]).

[F3] Translation of eigenvectors: if $K_\mu e=\nu e$ with $e\ne0$ and $\nu>0$, then $e=\nu^{-1}K_\mu e\in H^1_0(\Omega)$ because $K_\mu$ maps $L^2$ into $H^1_0$; hence for every $v\in H^1_0(\Omega)$ one has $a(e,v)=a_\mu(e,v)-\mu(e,v)_{L^2}=(\nu^{-1}-\mu)(e,v)_{L^2}$. Conversely if $(\lambda,u)$ is a weak eigenpair of the symmetric case, then $a_\mu(u,v)=(\lambda+\mu)(u,v)_{L^2}$ for all $v$, so $K_\mu((\lambda+\mu)u)=u$ by uniqueness, and $\lambda+\mu>0$ because $0<a_\mu(u,u)=(\lambda+\mu)\|u\|_{L^2}^2$; hence $K_\mu u=\nu u$ with $\nu=(\lambda+\mu)^{-1}$ ([[def-shifted-elliptic-solution-operator]], [[def-symmetric-elliptic-weak-eigenpair]], [[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]], [[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]).

[F4] Finite-dimensional Hilbert spaces have orthonormal bases ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]), and Garding's inequality gives $a(u,u)\ge-\beta\|u\|_{L^2}^2$ for all $u\in H^1_0(\Omega)$, with $\beta$ the constant of [[thm-garding-inequality-for-a-divergence-form-elliptic-operator]].

## Proof

**Proof technique:** direct.

1.1 Spectral data of $K_\mu$. By [F1] and [F2] the nonzero eigenvalues $\nu$ of $K_\mu$ are real and of finite multiplicity; positivity gives $\nu>0$ for each of them, and they accumulate only at $0$. The eigenspaces $E_\nu$ are finite dimensional and pairwise orthogonal, and their union spans a dense subspace: its closed span is $(\ker K_\mu)^\perp=L^2(\Omega)$. [F1, F2, given]

2.1 Translation. Let $\nu>0$ be an eigenvalue of $K_\mu$ with eigenvector $e$. Since $K_\mu e\in H^1_0(\Omega)$ and $K_\mu e=\nu e$, we have $e\in H^1_0(\Omega)$; then [F3] shows $a(e,v)=(\nu^{-1}-\mu)(e,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, so $(\nu^{-1}-\mu,e)$ is a weak eigenpair with finite-dimensional eigenspace equal to the $\nu$-eigenspace of $K_\mu$; conversely every weak eigenpair $(\lambda,u)$ arises this way from $\nu=(\lambda+\mu)^{-1}$, and $\lambda=\nu^{-1}-\mu$. In particular the two eigenvalue lists correspond bijectively, and each weak eigenvalue is real and of finite multiplicity. [F3, step 1.1, given, algebra]

3.1 Enumeration. By [F2] the closed span of the nonzero eigenspaces is all of $L^2(\Omega)$, which is infinite dimensional by [F1]. Since each eigenspace is finite dimensional, there must be infinitely many nonzero eigenvalues; compactness gives at most countably many. By [F4], together with Countable Choice, choose an orthonormal basis of each eigenspace $E_\nu$; their union $\{e_j\}_{j\ge1}$ is an orthonormal family whose closed span is $L^2(\Omega)$ by step 1.1, hence a Hilbert basis of $L^2(\Omega)$ with $e_j\in H^1_0(\Omega)$ and $K_\mu e_j=\nu_je_j$, where the eigenvalues $\nu_j>0$ are listed in decreasing order with multiplicity, so that $\nu_j\downarrow0$. Set $\lambda_j:=\nu_j^{-1}-\mu$; then $\lambda_j$ is nondecreasing and tends to $+\infty$, and step 2.1 gives $a(e_j,v)=\lambda_j(e_j,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, equivalently $Le_j=\lambda_je_j$ by [[def-symmetric-elliptic-weak-eigenpair]]. [F1, F2, F4, step 1.1, step 2.1, given, choose]

4.1 Claim 2 and the lower bounds. Every weak eigenvalue occurs in the list $\{\lambda_j\}$ by step 2.1, and each listed $\lambda_j$ is a weak eigenvalue; eigenspaces for distinct eigenvalues are $L^2$-orthogonal by [F2], since they are eigenspaces of $K_\mu$ for distinct $\nu$. Finally $\lambda_j=\nu_j^{-1}-\mu>-\mu$ because $\nu_j>0$, and Garding's inequality gives $a(u,u)\ge-\beta\|u\|_{L^2}^2$ for every $u\in H^1_0(\Omega)$. [F2, F4, step 2.1, step 3.1, given, algebra]

5.1 Conclusion. Steps 3.1 and 4.1 establish all three assertions: the list $\{\lambda_j\}$, the orthonormal basis $\{e_j\}$ with the weak eigenrelations and the operator form $Le_j=\lambda_je_j$, the completeness of the eigenvalue list with finite multiplicities and orthogonality of distinct eigenspaces, and the lower bounds $\lambda_j>-\mu$ and $a(u,u)\ge-\beta\|u\|_{L^2}^2$. No Hilbert basis of $\ker K_\mu$ was selected, because $K_\mu$ is injective by [F1]; only orthonormal bases of the finite-dimensional nonzero eigenspaces were chosen. [F1, step 3.1, step 4.1, given] ∎ 
