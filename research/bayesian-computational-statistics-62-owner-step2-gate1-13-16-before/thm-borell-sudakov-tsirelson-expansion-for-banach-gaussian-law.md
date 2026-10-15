---
dependency_level: 7
id: thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law
kind: theorem
title: Borell–Sudakov–Tsirelson expansion for a Banach Gaussian law
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - thm-finite-dimensional-gaussian-isoperimetric-expansion
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - lem-banach-gaussian-rkhs-unit-ball-is-compact
  - thm-borel-probability-measures-on-polish-spaces-are-inner-regular
  - thm-continuity-from-above-for-measures
  - def-axiom-of-choice
  - def-separable-space
  - def-countable-choice
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - cor-relative-hahn-banach-dual-norming
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: AC supplies HB for the point-separation step, while countable choice supplies the countable subcover. The finite-dimensional sharp expansion is proved by its local Gaussian-semigroup and finite-ball argument.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: C. Borell, The Brunn–Minkowski inequality in Gauss space (1975)
      url: https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf
      locator: Section 3, Theorem 3.1 and complete two-step proof, printed pp. 208–210.
    - title: M. Hairer, An Introduction to Stochastic PDEs
      url: https://www.hairer.org/notes/SPDEs_Course.pdf
      locator: Theorem 4.53 and the surrounding reduction to Gaussian isoperimetry; the source explicitly omits its proof.
---

## Statement

Assume AC and countable choice. Let $\mu$ be a centered tight Borel Gaussian law on a real separable Banach
space $B$, with covariance RKHS $H$ and unit ball $H_1$. For every Borel set
$A\subseteq B$ and $r\ge0$,
$$\mu_*(A+rH_1)\ge \Phi\!\left(\Phi^{-1}(\mu(A))+r\right),$$
where $\mu_*(S)=\sup\{\mu(K):K\subseteq S,\ K\text{ compact}\}$ is the inner
measure and $\Phi^{-1}(0)=-\infty$, $\Phi^{-1}(1)=+\infty$. When
$A+rH_1$ is Borel, its inner measure equals its ordinary $\mu$-measure.

## Facts & Assumptions


[A1] AC and countable choice are assumed by the finite-dimensional Gaussian and countable-cylinder interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]).

[A2] Under AC, the real dominated-extension theorem supplies HB for the Hahn–Banach dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] For Borel $E\subseteq\mathbb R^d$ and $r\ge0$, Gaussian inner measure satisfies
$\gamma_{d,*}(E+rB_2^d)\ge\Phi(\Phi^{-1}(\gamma_d(E))+r)$
([[thm-finite-dimensional-gaussian-isoperimetric-expansion]]). This supplier proves the sharp finite-dimensional expansion locally.

[F2] The covariance RKHS $H$ is a Hilbert space continuously and injectively embedded in $B$, with $\ell(ih)=\langle h,[\ell]\rangle_H$
([[def-banach-gaussian-covariance-operator-and-rkhs]], [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]).

[F3] The Hilbert unit ball $H_1$ is compact in the Banach norm
([[lem-banach-gaussian-rkhs-unit-ball-is-compact]]).

[F4] Borel probabilities on Polish spaces are inner regular
([[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]).

[F5] A separable metric space has a countable base, and countable choice selects one cover member for each relevant basis element ([[def-separable-space]], [[def-countable-choice]]).

[F6] Probability is continuous from above on decreasing measurable sets
([[thm-continuity-from-above-for-measures]]).

[F7] Under HB, distinct points in a normed space are separated by a continuous linear functional ([[cor-relative-hahn-banach-dual-norming]]).

## Proof


**Given:** AC, countable choice, a centered tight Borel Gaussian law $\mu$ on a real separable Banach space $B$, its covariance RKHS $H$, and $H_1=\{h\in H:\|h\|_H\le1\}$.

1.1 First let $F=T^{-1}(M)$ be a closed finite-coordinate cylinder, with $T=(\ell_1,\ldots,\ell_k):B\to\mathbb R^k$ continuous and $M$ closed. Let $Q=\operatorname{span}\{[\ell_i]:1\le i\le k\}\subset H$, choose an orthonormal basis $e_1,\ldots,e_m$, and choose representatives $\varphi_j\in B^*$ for $e_j$. Set $G=\sum_{j=1}^m\varphi_j(W)e_j$ and $S=T\circ i|_Q$. The vector of coefficients is standard Gaussian on $Q$ because its covariance matrix is the identity. For each $i$, $[\ell_i]=\sum_j\langle[\ell_i],e_j\rangle_H e_j$; by the covariance quotient and [F2], the residual $\ell_i(W)-\ell_i(iG)$ has variance $\|[\ell_i]-\sum_j\langle[\ell_i],e_j\rangle_H e_j\|_H^2=0$. Hence $T(W)=S(G)$ almost surely. The map $S$ is injective: if $S(q)=0$, then $\langle q,[\ell_i]\rangle_H=0$ for every $i$, and these classes span $Q$, so $q=0$. [F2, given, choose]

1.2 Now let $A\subseteq B$ be Borel with $0<\mu(A)<1$, and fix $\beta<\Phi^{-1}(\mu(A))$. By [F4] choose compact $K\subseteq A$ with $\mu(K)>\Phi(\beta)$. For each $x\notin K$ and $y\in K$, [F7] gives $\ell_y\in B^*$ with $\ell_y(x)\ne\ell_y(y)$. The open sets $U_y=\{z:|\ell_y(z)-\ell_y(y)|<|\ell_y(x)-\ell_y(y)|/3\}$ cover $K$; compactness gives a finite subcover $U_{y_1},\ldots,U_{y_q}$. For every $z\in K$, some $i$ has $z\in U_{y_i}$, which forces $\ell_{y_i}(z)\ne\ell_{y_i}(x)$. Thus the finite coordinate map $T_x=(\ell_{y_1},\ldots,\ell_{y_q})$ satisfies $T_x(x)\notin T_x(K)$. The cylinder $F_x=T_x^{-1}(T_x(K))$ is closed, contains $K$, and excludes $x$, since $T_x(K)$ is compact. The open complements $B\setminus F_x$ cover $B\setminus K$. By [F5] this cover has a countable subcover: for every basis element meeting $B\setminus K$ and contained in a cover member, countable choice selects one such member; every point is covered by one selected member. If the subcover is finite, repeat one member to index it by $j\ge1$. [A1, A2, F4, F5, F7, given, choose]

2.1 If $m=0$, then $T(W)=0$ almost surely, so $\mu(F)$ is zero or one; the endpoint convention, $0\in H_1$, and inner regularity [F4] give the claimed inequality. If $m>0$, define $E=S^{-1}(M)\subset Q$. It is closed and $\mu(F)=\gamma_Q(E)$. For $r\ge0$, $E_r=E+r(Q\cap H_1)$ is closed because its second summand is compact. Thus [F4] identifies its inner and ordinary Gaussian measures, and [F1] gives $\gamma_Q(E_r)\ge\Phi(\Phi^{-1}(\gamma_Q(E))+r)$. Let $C_r=T^{-1}(S(E_r))$, a closed finite-coordinate cylinder because $S$ is a linear isomorphism from finite-dimensional $Q$ onto the closed subspace $S(Q)$; injectivity of $S$ and $T(W)=S(G)$ give $\mu(C_r)=\gamma_Q(E_r)$. If $y\in C_r$, write $T(y)=S(u+v)$ with $u\in E$ and $v\in r(Q\cap H_1)$. Then $T(y-i(v))=S(u)\in M$, so $y-i(v)\in F$ and $y\in F+rH_1$. Hence $C_r\subseteq F+rH_1$, and inner regularity [F4] gives $\mu_*(F+rH_1)\ge\mu(C_r)\ge\Phi(\Phi^{-1}(\mu(F))+r)$. [A1, F1, F2, F4, step 1.1, algebra]

3.1 Let $G_n=\bigcap_{j\le n}F_{x_j}$ for the countable subcover in step 1.2. Each $G_n$ is a closed finite-coordinate cylinder because it is a finite intersection of such cylinders; the sequence decreases, $\bigcap_nG_n=K$, and $\mu(G_n)\ge\mu(K)>\Phi(\beta)$. Applying step 2.1 yields $\mu_*(G_n+rH_1)\ge\Phi(\beta+r)$. The set $G_n+rH_1$ is closed: if $a_j+h_j$ converges with $a_j\in G_n$ and $h_j\in rH_1$, compactness [F3] gives a convergent subsequence of $h_j$, after which closedness of $G_n$ gives a limit representation. Thus [F4] gives equality of its inner and ordinary measures. [F3, F4, step 2.1, step 1.2]

4.1 The closed sets $G_n+rH_1$ decrease and their intersection is $K+rH_1$. Indeed, if $x=a_n+h_n$ with $a_n\in G_n$ and $h_n\in rH_1$ for every $n$, compactness [F3] gives a subsequence $h_{n_j}\to h\in rH_1$; then $a_{n_j}\to x-h$, and for each fixed $N$ the tail belongs to the closed set $G_N$, so $x-h\in K$. The reverse inclusion is immediate. Continuity from above [F6] gives $\mu(K+rH_1)\ge\Phi(\beta+r)$. Since $K\subseteq A$, $\mu_*(A+rH_1)\ge\Phi(\beta+r)$. Letting $\beta\uparrow\Phi^{-1}(\mu(A))$ proves the interior-probability case. If $\mu(A)=0$ the right side is zero; if $\mu(A)=1$, inner regularity [F4] and $0\in H_1$ give $\mu_*(A+rH_1)=1$. [F3, F4, F6, step 3.1, algebra] ∎
