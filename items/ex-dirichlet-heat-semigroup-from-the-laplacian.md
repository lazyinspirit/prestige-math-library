---
id: ex-dirichlet-heat-semigroup-from-the-laplacian
kind: example
title: "The Dirichlet Laplacian generates the heat semigroup"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps:
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - thm-lumer-phillips-generation-theorem
  - thm-variation-of-constants-formula
  - def-classical-strong-and-mild-abstract-cauchy-solutions
  - def-ltwo-operator-associated-with-a-symmetric-elliptic-form
  - lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded
  - thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent
  - thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator
  - thm-poincare-inequality-for-w-one-p-zero
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - rem-semigroup-sign-and-generator-conventions
  - def-axiom-of-choice
  - def-countable-choice
  - def-dissipative-operator
  - def-strongly-continuous-semigroup
  - def-uniformly-elliptic-divergence-form-operator
  - thm-garding-inequality-for-a-divergence-form-elliptic-operator
  - def-unbounded-linear-operator-domain-and-graph
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - thm-exponential-beats-every-polynomial
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.4, The Laplacian and related operators, printed pp. 35-45"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 3.b, dissipative operators and contraction semigroups, printed pp. 82-89"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Universitext, Springer 2011 (complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 7 Sections 7.2-7.4, the heat equation as the model evolution problem, printed pp. 184-197"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]), as required by the batch-11 spectral and compactness suppliers used below. Let $\Omega\subseteq\mathbb R^n$ be nonempty, bounded and open, $H=L^2(\Omega)$, and let $L$ be the $L^2$ operator associated with the symmetric Dirichlet form $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$ on $H^1_0(\Omega)$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]), with $L$ densely defined, symmetric, lower bounded and self-adjoint with compact resolvent ([[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]], [[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]). Put $A:=-L=\Delta_D$ with $D(A)=D(L)$; this is the Dirichlet Laplacian with the sign convention of [[rem-semigroup-sign-and-generator-conventions]]. Then $A$ is closed, densely defined and dissipative, $I-A=I+L$ is bijective, and Lumer--Phillips makes $A$ the generator of a strongly continuous contraction semigroup $T$ on $H$. With the eigenvalues $0<\lambda_1\le\lambda_2\le\cdots\to\infty$ and orthonormal basis $(e_j)$ of $H$ furnished by [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], one has
$$T(t)f=\sum_{j\ge1}e^{-\lambda_jt}(f,e_j)_{L^2}\,e_j\qquad(f\in H),$$
the series converging in $H$. For every $f\in H$ and every $t>0$, $T(t)f\in D(A)$; the orbit is continuous in the graph norm on compact subintervals of $(0,\infty)$ and is a classical solution there, with $u_t=Au=\Delta_Du$. At $t=0$ the general initial datum is attained in the $L^2$ norm, $T(t)f\to f$ as $t\downarrow0$; no graph-norm trace at $0$ is asserted for general $f$. For $f\in D(A)$, the orbit is the classical solution also at $t=0$. In no case is $D(A)$ identified with a spatial $H^2$ space for the arbitrary bounded open set $\Omega$.

## Verification

**Given:** The Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a nonempty bounded open $\Omega\subseteq\mathbb R^n$; $H=L^2(\Omega)$ ([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]); the symmetric Dirichlet form $a(u,v)=\int_\Omega\nabla u\cdot\overline{\nabla v}\,dx$ on $H^1_0(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]); the associated operator $L$ with $D(L)=\{u\in H^1_0(\Omega):\exists f\in H,\ a(u,v)=(f,v)\ \forall v\in H^1_0(\Omega)\}$; and $A:=-L=\Delta_D$ with $D(A)=D(L)$ ([[rem-semigroup-sign-and-generator-conventions]]). The five in-run suppliers used for form and spectral facts are draft items of this run.

[F1] For $u\in D(L)$ the defining identity $a(u,v)=(Lu,v)$ holds for every $v\in H^1_0(\Omega)$; in particular $a(u,u)=(Lu,u)=\int_\Omega|\nabla u|^2$, and $a$ is symmetric and nonnegative ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

[F2] AC supplies DC by [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], meeting the choice hypothesis of the generation theorem. Lumer--Phillips: a densely defined dissipative operator $A$ with $\operatorname{Ran}(\lambda_0I-A)=X$ for some $\lambda_0>0$ generates a strongly continuous semigroup of contractions; in that case $A$ is closed ([[thm-lumer-phillips-generation-theorem]]).

[F3] On a Hilbert space, dissipativity is equivalent to $\operatorname{Re}\langle Au,u\rangle\le0$ for every $u\in D(A)$ ([[def-dissipative-operator]]).

[F4] For the homogeneous problem with initial value $x\in H$, the mild solution is $T(t)x$; if $x\in D(A)$, it is the unique classical solution as well ([[def-classical-strong-and-mild-abstract-cauchy-solutions]], [[thm-variation-of-constants-formula]]).

[F5] The discrete-spectrum theorem gives an orthonormal basis $(e_j)$ of $H$ with $e_j\in D(L)$ and $Le_j=\lambda_je_j$; the eigenvalues are real and repeated with multiplicity ([[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]]).

[F6] The graph norm of $A$ on $D(A)$ is $\|u\|_A=(\|u\|_H^2+\|Au\|_H^2)^{1/2}$; $A$ is closed exactly when its graph is closed ([[def-unbounded-linear-operator-domain-and-graph]]).

[F7] If $x\in D(A)$ then $T(s)x\in D(A)$ and $AT(s)x=T(s)Ax$; the orbit is differentiable at positive times with derivative $AT(s)x$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]).

[F8] The semigroup is strongly continuous at $0$, so $T(t)f\to f$ in $H$ as $t\downarrow0$ ([[def-strongly-continuous-semigroup]]).

[F9] For every $\delta>0$, the scalar factor $\lambda e^{-\delta\lambda}$ is bounded for $\lambda\ge0$, since the exponential dominates a fixed polynomial at infinity ([[thm-exponential-beats-every-polynomial]]).

[F10] Poincaré bounds the $L^2$ norm of a zero-trace Sobolev function by a finite constant times its gradient norm on a bounded open set ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F11] The symmetric form operator $L$ is densely defined, symmetric and lower bounded ([[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]]).

[F12] Under Countable Choice the symmetric form operator $L$ is self-adjoint; because $\Omega$ is bounded and the Axiom of Choice holds, the B11 theorem also gives compactness of $K_\mu=(L+\mu)^{-1}$ for $\mu\ge\beta$. Here the Gårding bound is $\beta=1/2$ and the chosen shift $\mu_0=1$ satisfies $\mu_0\ge\beta$, so $L+1$ is bijective with compact inverse and $L$ has compact resolvent ([[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]).

[F13] The Gårding inequality gives the lower-bound parameter $\beta=1/2$ for the principal form in this example ([[thm-garding-inequality-for-a-divergence-form-elliptic-operator]]).

**Proof technique:** identify the form operator, check dissipativity and bijectivity of $I-A$, apply Lumer--Phillips, and then use the eigen expansion to establish positive-time graph-norm smoothing.

1.1 **The operator $L$.** The $L^2$ operator associated with the symmetric Dirichlet form is the symmetric-case operator of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]] for coefficients $a^{ij}=\delta^{ij}$, $b\equiv0$, $c=0$ and ellipticity constant $\theta=1$ ([[def-uniformly-elliptic-divergence-form-operator]]); it is densely defined, symmetric and lower bounded ([[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]]), while $a(u,u)=\int_\Omega|\nabla u|^2\ge0$. The explicit Gårding constant of this form is $\beta=1/2$ ([[thm-garding-inequality-for-a-divergence-form-elliptic-operator]]); fix $\mu_0:=1\ge\beta$. Then $L$ is self-adjoint and $L+\mu_0:D(L)\to H$ is bijective with compact inverse ([[thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent]]). In particular $L$ is closed and $I+L=L+1$ is bijective. [F1, F11, F12, F13]

1.2 **Spectral basis and positive eigenvalues.** With $\mu_0=1$, [F5] gives eigenvalues $\lambda_1\le\lambda_2\le\cdots\to+\infty$ and an orthonormal basis $(e_j)$ with $Le_j=\lambda_je_j$. For an eigenvector $u\ne0$ of $\lambda_j$, [F1] gives $\lambda_j\|u\|^2=(Lu,u)=a(u,u)\ge0$. If $\lambda_j=0$, then $\|\nabla u\|_{L^2}=0$, and Poincaré on $H^1_0(\Omega)$ gives $\|u\|_{L^2}\le C_P\|\nabla u\|_{L^2}=0$ ([[thm-poincare-inequality-for-w-one-p-zero]]); this contradicts $u\ne0$. Thus $0<\lambda_1\le\lambda_2\le\cdots\to+\infty$, and $Ae_j=-\lambda_je_j$. [F1, F5, F10, algebra]

2.1 **Generation.** The operator $A=-L$ is densely defined, closed and dissipative: closedness and density follow from [step 1.1], while for $u\in D(A)$, [F1] and [F3] give $\operatorname{Re}\langle Au,u\rangle=-a(u,u)=-\int_\Omega|\nabla u|^2\le0$. Also $\operatorname{Ran}(I-A)=\operatorname{Ran}(I+L)=H$ by [step 1.1]. [F1, F3, step 1.1]

3.1 By [F2] with $\lambda_0=1$, $A$ generates a strongly continuous semigroup of contractions $T$ on $H$. [F2, step 2.1]

4.1 **Orbit of each eigenvector.** For fixed $j$, $v_j(t):=e^{-\lambda_jt}e_j$ belongs to $D(A)$, is $C^1$, has $v_j(0)=e_j$, and satisfies $v_j'(t)=-\lambda_jv_j(t)=Av_j(t)$. By uniqueness for the classical homogeneous problem in [F4], $T(t)e_j=e^{-\lambda_jt}e_j$. By linearity, if $f_N:=\sum_{j\le N}(f,e_j)e_j$, then $T(t)f_N=\sum_{j\le N}e^{-\lambda_jt}(f,e_j)e_j$. [F4, step 1.2, step 3.1, algebra]

5.1 **Arbitrary $L^2$ data and initial trace.** The finite sums $f_N$ converge to $f$ in $H$, so $c_j:=(f,e_j)_{L^2}$ is square-summable. Since $|e^{-\lambda_jt}|\le1$, the spectral series converges in $H$ for each $t\ge0$. For every $N$, contraction and orthonormality bound the distance between $T(t)f$ and this series by $\|f-f_N\|_H+(\sum_{j>N}|c_j|^2)^{1/2}$, uniformly in $t\ge0$. This tends to $0$, so the expansion holds in $H$; strong continuity also gives $T(t)f\to f$ in $H$ at $0$. [F2, F5, F8, step 4.1]

6.1 **Positive-time smoothing in graph norm.** Write $c_j=(f,e_j)_{L^2}$ and $u_N(t):=\sum_{j\le N}e^{-\lambda_jt}c_je_j$. Fix $0<\delta<T_0<\infty$. For $M<N$ and $t\in[\delta,T_0]$, orthonormality gives   $$\|u_N(t)-u_M(t)\|_H^2=\sum_{M<j\le N}e^{-2\lambda_jt}|c_j|^2\le\sum_{j>M}|c_j|^2.$$ Also $Au_N(t)=-\sum_{j\le N}\lambda_je^{-\lambda_jt}c_je_j$, so [F9] and continuity on bounded intervals give $$\|A(u_N(t)-u_M(t))\|_H^2=\sum_{M<j\le N}\lambda_j^2e^{-2\lambda_jt}|c_j|^2\le C_\delta^2\sum_{j>M}|c_j|^2,\qquad C_\delta:=\sup_{\lambda\ge0}\lambda e^{-\delta\lambda}<\infty.$$ Both tails tend to zero uniformly on $[\delta,T_0]$. Thus $(u_N,Au_N)$ converges uniformly there in $H\oplus H$. By [F2] the operator $A$ is closed; its graph is closed, so the limit pair is $(u(t),Au(t))$ for $u(t)=T(t)f$. Consequently $u(t)\in D(A)$ for every $t>0$, and $t\mapsto u(t)$ is continuous on every compact positive-time interval in the graph norm [F6]. [F2, F5, F6, F9, step 5.1]

7.1 **Classical evolution at positive times.** Fix $0<\delta<T_0$ and put $x_\delta:=u(\delta)\in D(A)$ by [step 6.1]. For $t\in[\delta,T_0]$, $u(t)=T(t-\delta)x_\delta$ by the semigroup law. By [F7], this orbit is differentiable for $t>\delta$ and satisfies $u'(t)=AT(t-\delta)x_\delta=Au(t)$; since $\delta$ can be chosen below any positive time, $u$ is a classical solution on $(0,T_0]$ (and on each closed interval bounded away from $0$). For general $f\in H$ no graph-norm trace at $0$ is asserted; if $f\in D(A)$, [F4] gives the classical solution on $[0,T_0]$. [F4, F7, step 6.1]

8.1 The semigroup orbit is the unique mild solution of the homogeneous abstract Cauchy problem by [F4], and its initial value is attained in $H$ by [step 5.1]. The positive-time graph-norm and differentiability conclusions are those of [steps 6.1 and 7.1]; no spatial $H^2$ identification of $D(A)$ is made for an arbitrary bounded open $\Omega$. [F4, step 5.1, step 6.1, step 7.1] ∎
