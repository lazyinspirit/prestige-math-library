---
id: thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation
kind: theorem
title: "Well-posedness of the abstract Cauchy problem is equivalent to generation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - lem-linearity-of-the-bochner-integral
  - lem-bochner-integral-norm-inequality
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-classical-strong-and-mild-abstract-cauchy-solutions
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - thm-generators-are-closed-and-densely-defined
  - lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
  - lem-strong-continuity-at-zero-implies-orbit-continuity
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - thm-closed-graph-theorem
  - thm-exponential-bound-for-a-c-zero-semigroup
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - def-normed-subspace
  - def-dependent-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 6, Proposition 6.6, Theorem 6.7 and Corollary 6.9, printed pp. 147-151"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Comments on Chapter 7, Theorem 7.8, printed p. 197"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 2 Section 2.1, Definition 2.1, Theorem 2.2 and Remark 2.3(b), printed pp. 46-47 (March 19, 2026 revision)"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $A:D(A)\subseteq X\to X$ be a closed linear operator on a Banach space $X$ and consider the homogeneous problem $u'(t)=Au(t)$, $u(0)=x$. Let (EU) be the statement that for every $x\in D(A)$ there exists exactly one classical solution $u(\cdot,x)$ on $[0,\infty)$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]]). Then the following conditions are equivalent: (a) $A$ generates a strongly continuous semigroup; (b) (EU) holds and $\rho(A)\ne\varnothing$; (c) (EU) holds and there is a sequence $\lambda_n\uparrow\infty$ with $(\lambda_nI-A)D(A)=X$ for every $n$; (d) (EU) holds, $D(A)$ is dense, and for every sequence $x_n\in D(A)$ with $x_n\to0$ one has $u(t,x_n)\to0$ uniformly for $t$ in compact subsets of $[0,\infty)$. Condition (d) is the definition of well-posedness of the abstract Cauchy problem; it is existence plus uniqueness plus continuous dependence on the initial datum in the uniform topology on compact time intervals. If any (hence all) holds, then $u(t,x)=T(t)x$ for the generated semigroup $T$.

## Facts & Assumptions

**Given:** A closed linear operator $A:D(A)\subseteq X\to X$ on a Banach space $X$ ([[def-unbounded-linear-operator-domain-and-graph]], [[def-densely-defined-closed-and-closable-operator]]), and the condition (EU) that for every $x\in D(A)$ there is exactly one classical solution $u(\cdot,x)$ of $u'=Au$, $u(0)=x$ on $[0,\infty)$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]]). Write $X_1:=(D(A),\|\cdot\|_A)$ for the graph-norm space, $A_1x:=Ax$ with $D(A_1):=D(A^2)=\{x\in D(A):Ax\in D(A)\}$, and $B$ for a generator when it exists. The proof assumes Dependent Choice ([[def-dependent-choice]]), carried by the closed graph theorem [[thm-closed-graph-theorem]] used in [F4]; the sequence selections in steps 1.3 and 1.4 are instances of Countable Choice, a consequence of DC.

[F1] Since $A$ is closed, its graph and the graph-norm space $X_1$ are Banach by the explicit Banach graph convention in [[def-infinitesimal-generator-of-a-c-zero-semigroup]]. The operator $A_1$ is closed on $X_1$: if $x_n\to x$ and $Ax_n\to y$ in $X_1$, convergence in $X$ and closedness of $A$ give $Ax=y$; then $x\in D(A^2)$ and $A_1x=y$. This uses the assumed closedness, not a generator theorem.

[F2] For a generator the following hold: local boundedness on compact time intervals, orbit continuity, the Laplace formula $R(\lambda,A)x=\int_0^\infty e^{-\lambda t}T(t)x\,dt$ for real $\lambda>\omega$ whenever $\|T(t)\|\le Me^{\omega t}$, hence $(\omega,\infty)\subseteq\rho(A)$, and $D(A)$ is dense with $A$ closed ([[thm-exponential-bound-for-a-c-zero-semigroup]], [[thm-laplace-transform-formula-for-the-semigroup-resolvent]], [[thm-generators-are-closed-and-densely-defined]], [[lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval]], [[lem-strong-continuity-at-zero-implies-orbit-continuity]]).

[F3] For a strongly continuous semigroup generated by $A$: $T(t)D(A)\subseteq D(A)$, $AT(t)x=T(t)Ax$ on $D(A)$, and $A\int_0^tT(s)x\,ds=T(t)x-x$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]], [[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]]).

[F4] Closed graph theorem: an everywhere defined linear map between Banach spaces with closed graph is bounded ([[thm-closed-graph-theorem]], under DC); consequently a closed operator whose graph-norm domain is complete has the properties used below.



## Proof

**Proof technique:** direct, following the standard reduction to the graph-norm space $X_1$: first an internal lemma identifying (EU) with generation on $X_1$, then the four implications.

1.1 **Internal lemma (reduction to $X_1$), part 1: (EU) gives a semigroup on $X_1$.** Put $T_1(t)x:=u(t,x)$ for $x\in X_1$. Uniqueness makes $T_1(t)$ linear and gives $T_1(0)=I$, $T_1(t+s)=T_1(t)T_1(s)$; the classical equation $u'=Au$ shows that $t\mapsto T_1(t)x$ is continuous into $X_1$ for each $x\in X_1$. [given]

1.2 **(a)$\Rightarrow$(b),(c),(d).** If $A$ generates a semigroup $T$ with $\|T(t)\|\le Me^{\omega t}$: for $x\in D(A)$ the orbit $T(\cdot)x$ is a classical solution and any classical solution $v$ satisfies $v\equiv T(\cdot)x$ by the rigidity computation $ \frac{d}{ds}[T(t-s)v(s)]=0$, so (EU) holds; [F2] gives $(\omega,\infty)\subseteq\rho(A)$ and $( \lambda_n-A)D(A)=X$ for any $\lambda_n\uparrow\infty$ in that half-line, so (c) holds and $\rho(A)\ne\varnothing$; density and the local bound $\sup_{0\le s\le t_0}\|T(s)\|$ give, for $x_n\to0$ in $D(A)$, $\sup_{0\le t\le t_0}\|u(t,x_n)\|\le\sup_{0\le s\le t_0}\|T(s)\|\,\|x_n\|\to0$, which is (d). [F2, F3]

1.3 **(d)$\Rightarrow$(a).** Define $T(t)x:=u(t,x)$ for $x\in D(A)$; uniqueness makes each $T(t)$ linear, and the semigroup law holds on $D(A)$ by uniqueness of solutions. The continuous-dependence hypothesis (d) transfers to a local bound: if no $\delta>0$ had $\|T(t)x\|\le1$ for all $x\in D(A)$ with $\|x\|\le\delta$ and all $t\in[0,1]$, then choosing $x_n$ with $\|x_n\|\le1/n$ and $\|T(t_n)x_n\|>1$ would give a sequence $x_n\to0$ with $u(t_n,x_n)\not\to0$ uniformly, contradicting (d); hence $\sup_{0\le t\le1}\|T(t)x\|\le\|x\|/\delta$ for all $x\in D(A)$. Since $D(A)$ is dense, each $T(t)$ extends uniquely to a bounded operator on $X$ with the same bound, and the semigroup law and strong continuity extend by density, using $\|T(t)\|\le(M_1)^{n+1}$ on $[0,n]$ with $M_1:=\max\{1,1/\delta\}$ from the semigroup law. The generator $B$ of the extension satisfies $A\subseteq B$, because on $D(A)$ the difference quotients are those of the classical solutions and converge to $Ax$. The extension leaves $D(A)$ invariant, so $D(A)$ is a core of $B$: for $x\in D(B)$ choose $x_j\in D(A)$ with $x_j\to x$; then $\frac1t\int_0^tT(s)x_j\,ds$ lies in the graph-norm closure of $D(A)$ (the integrand is $D(A)$-valued and graph-norm continuous) and the integrated-orbits identity $\frac1t\int_0^tT(s)x\,ds\to x$ in graph norm as $t\downarrow0$ together with $\frac1t\int_0^tT(s)x_j\,ds\to\frac1t\int_0^tT(s)x\,ds$ in graph norm shows $x\in\overline{D(A)}^{\|\cdot\|_B}$. Since $A$ is closed, $A\subseteq B$ and $D(A)$ is a core of $B$, every graph limit from $D(A)$ remains in $\Gamma(A)$, so $A=B$. [F1, F3, F4]

2.1 **Boundedness of $T_1(t)$.** For any Banach space $Z$, $C([0,t],Z)$ is Banach in the supremum norm: a uniformly Cauchy sequence converges pointwise by completeness, uniformly by its common Cauchy estimates, and its uniform limit is continuous by the three-term increment estimate. Fix $t>0$ and consider $\Phi:X_1\to C([0,t],X_1)$, $\Phi(x):=T_1(\cdot)x$. Its graph is closed: if $x_n\to x$ in $X_1$ and $\Phi(x_n)\to f$ uniformly in $X_1$, then the integral identity $T_1(s)x_n=x_n+\int_0^sAT_1(r)x_n\,dr$ passes to the limit in $X$ and gives $f(s)=x+\int_0^sAf(r)\,dr$ for $s\le t$; the extension $\widetilde f(s):=T_1(s-t)f(t)$ for $s>t$, $=f(s)$ for $s\le t$, then solves (ACP) with initial value $x$, so $\widetilde f=T_1(\cdot)x$ by uniqueness and $f=\Phi(x)$. By [F4] $\Phi$ is bounded on the Banach space $X_1$, hence $T_1(t)\in\mathcal B(X_1)$ and $T_1$ is a strongly continuous semigroup on $X_1$. [F1, F4, step 1.1]

3.1 **The generator of $T_1$ is $A_1$.** First $AT_1(t)x=T_1(t)Ax$ for $x\in D(A_1)$: the curve $f(t):=x+\int_0^tT_1(s)Ax\,ds$ is differentiable with $f'=T_1(t)Ax$ and satisfies $Af=f'$ (move $A$ inside the integral by the closed-graph argument in $X$), so $f=T_1(\cdot)x$ by uniqueness and $AT_1(t)x=T_1(t)Ax$. Hence for $x\in D(A_1)$ the quotient $\frac1t(T_1(t)x-x)$ converges to $Ax$ in $X$ and its $A$-image converges to $A^2x$ in $X$; that is, the convergence holds in $X_1$, so $A_1\subseteq B$. Conversely, if $x\in D(B)$, then $A\frac1t(T_1(t)x-x)$ converges in $X$ and $\frac1t(T_1(t)x-x)\to Ax$ in $X$; closedness of $A$ gives $Ax\in D(A)$, that is $x\in D(A_1)$. Thus $B=A_1$. [F1, F4, step 2.1]

4.1 **(b)$\Rightarrow$(a).** Let $\lambda\in\rho(A)$. For $x\in X$ one has $x\in D(A)$ iff $(\lambda-A)^{-1}x\in D(A_1)$, and $Ax=(\lambda-A)A_1(\lambda-A)^{-1}x$ for $x\in D(A)$: indeed $(\lambda-A)^{-1}x=R$ and $AR=\lambda R-x$, and $AR\in D(A)$ exactly when $x\in D(A)$. Thus $S:=(\lambda-A)^{-1}:X\to X_1$ is a bounded isomorphism with bounded inverse $\lambda-A:X_1\to X$, and $A=S^{-1}A_1S$ with $D(A)=S^{-1}D(A_1)$. By [step 3.1] and the internal lemma, $A_1$ generates $T_1$ on $X_1$; then $T(t):=S^{-1}T_1(t)S$ is a strongly continuous semigroup on $X$ whose generator is $S^{-1}A_1S=A$, because the difference quotients of $T$ are those of $T_1$ conjugated by the bounded isomorphism $S$. [given, step 3.1, F4]

4.2 **(c)$\Rightarrow$(b).** By [step 3.1] the operator $A_1$ generates $T_1$ on $X_1$ (via [step 1.1] and [step 2.1]), so by [F2] its resolvent set contains a half-line $(\omega_1,\infty)$; choose $\lambda=\lambda_n>\omega_1$ with $(\lambda-A)D(A)=X$. If $Ax=\lambda x$ for some $x\in D(A)$, then $Ax\in D(A)$, so $x\in D(A_1)$ and $A_1x=\lambda x$; since $\lambda\in\rho(A_1)$ this forces $x=0$. Hence $\lambda-A$ is injective and, by hypothesis, surjective, so it is bijective; being closed it has bounded inverse by [F4], and $\lambda\in\rho(A)$. [F1, F2, F4, step 1.1, step 2.1, step 3.1]

5.1 All implications are established, so (a)-(d) are equivalent; and in each direction the solution is $u(t,x)=T(t)x$ for the generated semigroup, as asserted. [step 1.2, step 4.1, step 4.2, step 1.3] ∎
