---
id: lem-nrqm-composites-density-and-scalar-spectral-probability
aliases: [nrqm-composites-density-and-scalar-spectral-probability]
kind: lemma
domain: mathematics
title: "Density operators and scalar spectral probability"
status: published
origin: pipeline
dependency_level: 1
deps: [def-trace-class-operator, def-trace-of-a-trace-class-operator, lem-nrqm-composites-rank-one-operator-calculus, lem-nuclear-series-characterizes-trace-norm, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-self-adjoint-positive-unitary-and-normal-operator, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, thm-bounded-borel-pvm-integral, def-unbounded-integral-against-a-pvm, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-measure, def-probability-measure, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-measure: mathematical-premise
  def-probability-measure: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.1 pp. 87-98 (spectral calculus and scalar spectral measures), Section 6.2 pp. 136-138 (compact spectral expansions) and Section 6.3 pp. 139-144 (trace class, trace and ideal properties)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.3 pp. 121-128 (density operators)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]). Recall that $T_{u,v}\in\mathcal B(H)$ denotes the rank-one operator $T_{u,v}x=\langle x,v\rangle u$ ([[lem-nrqm-composites-rank-one-operator-calculus]]).

(a) A **density operator** on $H$ is a self-adjoint positive trace-class operator $\rho$ with $\operatorname{tr}\rho=1$ ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]). If $(u_n)_{n\in J}$ is a finite or countable orthonormal family, with $J$ a finite initial segment of the positive integers or all positive integers, and $w_n\ge0$ with $\sum_nw_n=1$, then the sum $\rho:=\sum_nw_nT_{u_n,u_n}$ converges in trace norm to a density operator with $\operatorname{tr}\rho=\sum_nw_n=1$. Conversely every density operator $\rho$ admits such an expansion whose weights are its positive eigenvalues counted with multiplicity and whose vectors are orthonormal eigenvectors; distinct expansions of the same $\rho$ exist when a positive eigenspace has dimension at least two.

(b) Let $E$ be a projection-valued measure on a measurable space $(X,\Sigma)$ acting on $H$ ([[def-projection-valued-measure]]). Then $\mu_\rho(B):=\operatorname{tr}(\rho E(B))$ is a well-defined probability measure on $(X,\Sigma)$ ([[def-measure]], [[def-probability-measure]]); it is given by the absolutely convergent series $\mu_\rho(B)=\sum_nw_n\|E(B)u_n\|^2$ in every expansion of (a), and reduces to $\mu_\rho(B)=\|E(B)u\|^2$ for a pure density operator $\rho=T_{u,u}$ with $\|u\|=1$.

(c) Assume in addition the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a self-adjoint operator with projection-valued measure $E_A$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]) and let $\psi\in H$ have $\|\psi\|=1$ and $\psi\in D(A)$. Here $|A|^{1/2}$ denotes the unbounded PVM integral $f(E_A)$ for $f(\lambda)=|\lambda|^{1/2}$, with domain $D(f(E_A))=\{\psi:\int |\lambda|\,dE_{A,\psi}<\infty\}$ as in [[def-unbounded-integral-against-a-pvm]]. Then

$$\int_{\mathbb R}\lambda\,dE_{A,\psi}(\lambda)=\langle A\psi,\psi\rangle,\qquad \int_{\mathbb R}\lambda^2\,dE_{A,\psi}(\lambda)=\|A\psi\|^2 ,$$

where $E_{A,\psi}(B)=\langle E_A(B)\psi,\psi\rangle$ ([[lem-scalar-and-complex-measures-from-a-pvm]]); moreover $\int_{\mathbb R}|\lambda|\,dE_{A,\psi}(\lambda)<\infty$ exactly when $\psi\in D(|A|^{1/2})$, and then the mean $\int\lambda\,dE_{A,\psi}$ is finite. No product $A\rho$ of an unbounded operator with a density operator is used, and no physical interpretation of $\mu_\rho$ or of the moments is asserted.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; orthonormal vectors $u_n$ and weights $w_n\ge0$; a density operator $\rho$; a PVM $E$ on $(X,\Sigma)$; in clause (c) a self-adjoint $A$ with PVM $E_A$ and a unit vector $\psi\in D(A)$.

[F1] $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\|T_{u,v}\|_1=\|u\|\,\|v\|$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$; $T$ is trace class iff it is a norm limit of a nuclear series $T=\sum_jT_{v_j,u_j}$ with $\sum_j\|v_j\|\,\|u_j\|<\infty$, and then $\|T\|_1=\inf\sum_j\|v_j\|\,\|u_j\|$ over such representations ([[lem-nrqm-composites-rank-one-operator-calculus]], [[lem-nuclear-series-characterizes-trace-norm]]).

[F2] Trace class is a two-sided Banach operator ideal: $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$, and the trace is linear on the trace-class operators with $|\operatorname{tr}T|\le\|T\|_1$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F3] If $T$ is compact and self-adjoint, its nonzero eigenvalues are real with finite multiplicity and accumulate only at $0$, the closed span of their eigenspaces is $(\ker T)^\perp=\overline{\operatorname{ran}T}$, and $Tx=\sum_\lambda\lambda P_\lambda x$ converges in norm, where $P_\lambda$ is the orthogonal projection onto the eigenspace of $\lambda$ ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F4] If $T\in\mathcal B(H)$ is self-adjoint and positive and trace class, then $s_n(T)=\lambda_n$ and $\operatorname{tr}T=\sum_{n\ge1}\lambda_n=\|T\|_1$, the sum running over the positive eigenvalues with multiplicity; in particular a positive trace-class operator is compact ([[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]], [[def-trace-class-operator]]).

[F5] A PVM $E$ is a map into orthogonal projections with $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$ and strong countable additivity; for every $x$ the set function $E_x(B)=\langle E(B)x,x\rangle$ is a positive measure with $E_x(X)=\|x\|^2\le\|x\|^2$ and $E(B)$ is an orthogonal projection, so $\langle E(B)x,x\rangle=\|E(B)x\|^2\ge0$ ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F6] Assume the Axiom of Choice. For a self-adjoint $A$ with PVM $E_A$, $D(A)=\{\psi:\int\lambda^2dE_{A,\psi}<\infty\}$ and $A\psi=\int\lambda\,dE_A(\lambda)\psi$; the integral against a PVM defines $f(A)$ on $D(f(A))=\{\psi:\int|f|^2dE_{A,\psi}<\infty\}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]]). For bounded $f$ and $x\in H$, $\langle\Phi_E(f)x,x\rangle=\int f\,dE_x$ and $\|\Phi_E(f)x\|^2=\int|f|^2dE_x$ ([[thm-bounded-borel-pvm-integral]]).

[F7] If nonnegative measurable $f_n$ increase pointwise to $f$, then $\int f_n\,d\mu\uparrow\int f\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]); if measurable complex-valued $f_n,f$ satisfy $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a nonnegative measurable integrable $g$, then $\int f_n\,d\mu\to\int f\,d\mu$ ([[thm-dominated-convergence]]).

## Proof

1.1 [Expansion of a density operator] Let $\rho$ be a density operator. By [F4] and [F1] it is compact, self-adjoint and positive, so [F3] applies: its positive eigenvalues $\mu_1>\mu_2>\cdots$ have finite multiplicities, accumulate only at $0$, and $\rho x=\sum_k\mu_kP_kx$ with $P_k$ the orthogonal projection onto $E_{\mu_k}(\rho)$. Each $E_{\mu_k}(\rho)$ is finite-dimensional, so it has an orthonormal basis by [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]; using Countable Choice to select the finite bases and listing their vectors in a finite or countable sequence $(u_n)$ with the corresponding eigenvalues $w_n>0$ indexed by a finite initial segment or the positive integers as appropriate and enumerated by [F3] (the multiset is finite or countably infinite) gives an orthonormal family with $\rho x=\sum_nw_n\langle x,u_n\rangle u_n$, that is, $\rho=\sum_nw_nT_{u_n,u_n}$ in operator norm, and [F4] gives $\operatorname{tr}\rho=\sum_nw_n=\|\rho\|_1=1$. Their rank-one trace norms sum to one by [F1], so the partial sums also converge in trace norm by completeness [F2]; that limit equals $\rho$ because both limits agree in operator norm. [given, F1, F2, F3, F4, choose, algebra]

1.2 [Weighted sums are density operators] Conversely let $(u_n)$ be orthonormal and $w_n\ge0$ with $\sum_nw_n=1$. The series $\sum_nw_nT_{u_n,u_n}$ is nuclear with $\sum_nw_n\|u_n\|\,\|u_n\|=\sum_nw_n<\infty$, and its trace norms sum to one by [F1]. Completeness of trace class [F2] therefore makes its partial sums converge in trace norm to a trace-class operator $\rho$ with $\|\rho\|_1\le1$; this also gives operator-norm convergence; it is self-adjoint, and $\langle\rho x,x\rangle=\sum_nw_n|\langle x,u_n\rangle|^2\ge0$ by continuity of the pairing and nonnegativity of each term, so $\rho$ is positive; [F1] and [F2] give $\operatorname{tr}\rho=\sum_nw_n\langle u_n,u_n\rangle=\sum_nw_n=1$ by linearity and absolute convergence. Hence $\rho$ is a density operator. Distinct orthonormal bases of a single positive eigenspace produce different families $(u_n)$ with the same sum, so expansions are not unique. [given, F1, F2, algebra]

2.1 [The scalar law of a PVM] Let $E$ be a PVM on $(X,\Sigma)$ and let $\rho=\sum_nw_nT_{u_n,u_n}$ be an expansion from step 1.1 (any expansion gives the same value below by step 1.2 and [F2]). For $B\in\Sigma$, $T_{u_n,u_n}E(B)=T_{u_n,E(B)u_n}$, so by linearity of the trace and trace-norm convergence of the series (traced against the bounded $E(B)$), $\operatorname{tr}(\rho E(B))=\sum_nw_n\operatorname{tr}(T_{u_n,E(B)u_n})=\sum_nw_n\langle u_n,E(B)u_n\rangle=\sum_nw_n\|E(B)u_n\|^2$, the series converging absolutely with value in $[0,1]$ because the finite subsums are bounded by $\sum w_n\|u_n\|^2=1$ by [F5]. Setting $B=X$ gives $\mu_\rho(X)=\sum_nw_n=1$. If $B_k$ are pairwise disjoint with union $B$, then for each $n$ the identity $\|E(B)u_n\|^2=\sum_k\|E(B_k)u_n\|^2$ holds by strong additivity of $E$ and continuity of the norm ([[def-projection-valued-measure]]); summing the resulting absolutely convergent nonnegative double series by [F7] gives $\mu_\rho(B)=\sum_k\mu_\rho(B_k)$. Thus $\mu_\rho$ is a probability measure; for $\rho=T_{u,u}$ with $\|u\|=1$ step 1.2 applies with $w_1=1$, giving $\mu_\rho(B)=\|E(B)u\|^2$. [step 1.1, step 1.2, F1, F2, F5, F7, algebra]

3.1 [Moments for a self-adjoint operator, under AC] Assume the Axiom of Choice and let $\psi\in D(A)$ with $\|\psi\|=1$ and $E_A$ the PVM of $A$. By [F6], $\int\lambda^2dE_{A,\psi}<\infty$ and, for the bounded measurable truncations $\lambda_n:=\lambda\mathbf 1_{\{|\lambda|\le n\}}$, $\Phi_{E_A}(\lambda_n)\psi\to A\psi$ in norm. The bounded quadratic identity gives $\|\Phi_{E_A}(\lambda_n)\psi\|^2=\int\lambda^2\mathbf 1_{\{|\lambda|\le n\}}dE_{A,\psi}$. These nonnegative measurable integrands increase to $\lambda^2$, so monotone convergence [F7] and norm continuity give $\int\lambda^2dE_{A,\psi}=\lim_n\|\Phi_{E_A}(\lambda_n)\psi\|^2=\|A\psi\|^2$. Since $\psi\in D(A)$ the integral $\int|\lambda|\,dE_{A,\psi}$ is finite, because $|\lambda|\le(1+\lambda^2)/2$ and $\int dE_{A,\psi}=1$; the same truncations $\lambda_n$ satisfy $|\lambda_n|\le|\lambda|$ and $\lambda_n\to\lambda$ pointwise, so [[thm-dominated-convergence]] applied to the finite measures $E_{A,\psi}$ gives $\int\lambda\,dE_{A,\psi}=\lim_n\int\lambda_n\,dE_{A,\psi}$. Pairing the identity $A\psi=\lim_n\Phi_{E_A}(\lambda_n)\psi$ (the defining truncation limit of [[def-unbounded-integral-against-a-pvm]]) with $\psi$ and using $\langle\Phi_{E_A}(\lambda_n)\psi,\psi\rangle=\int\lambda_n\,dE_{A,\psi}$ from [F6] yields $\langle A\psi,\psi\rangle=\int\lambda\,dE_{A,\psi}(\lambda)$. Finally [F6] applied to $f=|\lambda|^{1/2}$ gives $\int|\lambda|\,dE_{A,\psi}<\infty$ exactly when $\psi\in D(|A|^{1/2})$, and in that case the mean integral is finite. [given, F6, F7, algebra] ∎
