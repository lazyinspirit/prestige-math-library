---
id: ex-nrqm-intervals-contacts-separated-box-degeneracy
aliases: [nrqm-intervals-and-contacts-example-separated-box-degeneracy]
kind: example
domain: mathematics
title: "Separated-box degeneracy"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-intervals-robin-simple-complete-spectrum, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-nrqm-intervals-hilbert-sobolev-spaces, thm-nrqm-intervals-sine-on-completeness, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-tonelli-and-fubini-for-completed-product-measures, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-intervals-robin-simple-complete-spectrum: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011), Section 8.6, Theorem 8.22 and its example pp. 231-232 (one-dimensional Dirichlet sine basis); the product completeness and two-dimensional eigenspace are proved locally"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $0<L<\infty$ and on $L^2((0,L)^2;\mathbb C)$
(Lebesgue measure on the square) define the product functions
$e_{nm}(x,y):=\frac2L\sin\!\Bigl(\frac{n\pi x}{L}\Bigr)
\sin\!\Bigl(\frac{m\pi y}{L}\Bigr),\qquad n,m\ge1 .$
Then:

(a) $(e_{nm})_{n,m\ge1}$ is a complete orthonormal family of
$L^2((0,L)^2;\mathbb C)$;

(b) the diagonal operator $\Delta_D$ with respect to this family and the
eigenvalues
$\mu_{nm}:=\frac{\pi^2}{L^2}(n^2+m^2)$
is a self-adjoint operator on $L^2((0,L)^2)$ with
$\Delta_De_{nm}=\mu_{nm}e_{nm}$;

(c) the eigenvalue $\mu=5\pi^2/L^2$ of $\Delta_D$ has exactly the
two-dimensional eigenspace
$\ker(\Delta_D-\mu)=\mathbb Ce_{12}\oplus\mathbb Ce_{21};$
explicitly $e_{12}(x,y)=\frac2L\sin(\pi x/L)\sin(2\pi y/L)$ and
$e_{21}(x,y)=\frac2L\sin(2\pi x/L)\sin(\pi y/L)$ are orthonormal
eigenvectors with the same eigenvalue. Thus a box built from two separated
one-dimensional intervals has degenerate levels, in contrast with the
simple spectrum of the one-dimensional separated Robin realisation
[[thm-nrqm-intervals-robin-simple-complete-spectrum]]. Here, for any
$\alpha,\beta\in\mathbb R$ and $V\in C([0,L];\mathbb R)$, that realisation
is the operator $A$ on $L^2(0,L;\mathbb C)$ given by
$D(A)=\{u\in H^2(0,L):u^{*\prime}(0)=\alpha u^*(0),\ u^{*\prime}(L)=\beta u^*(L)\}$
and $Au=-D^2u+Vu$. The space $H^2$ and weak derivative $D$ are as in
[[def-nrqm-intervals-hilbert-sobolev-spaces]]; $u^*$ is the unique continuous
representative, with absolutely continuous first derivative, specified by the
Robin supplier. Both endpoint conditions use coordinate derivatives.
Simple spectrum here means that the spectrum consists of eigenvalues and every
eigenspace at an eigenvalue has complex dimension one.

## Verification

**Given:** $0<L<\infty$; $H=L^2((0,L)^2;\mathbb C)$ with pairing $\langle f,g\rangle=\int_{(0,L)^2}f\overline g$; the displayed functions $e_{nm}$ and real numbers $\mu_{nm}=\pi^2(n^2+m^2)/L^2$. Completeness of the product family and existence/self-adjointness of its diagonal operator are conclusions to be proved.

**Proof technique:** direct computation with the one-dimensional sine basis and Fubini; the diagonal operator is supplied by the diagonal lemma.

[F1] The one-dimensional sines $e_n(x)=\sqrt{2/L}\sin(n\pi x/L)$ form a complete orthonormal family of $L^2(0,L;\mathbb C)$ ([[thm-nrqm-intervals-sine-on-completeness]]). Fubini-Tonelli on the completed product of the two finite Lebesgue interval measures applies to nonnegative functions and, componentwise, absolutely integrable complex functions ([[thm-tonelli-and-fubini-for-completed-product-measures]]). The square's $L^2$ pairing makes $H$ a complex Hilbert space under Countable Choice ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]); Cauchy-Schwarz gives $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]). In a Hilbert space an orthonormal family is complete precisely when its common orthogonal complement is $\{0\}$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]). Product completeness is proved in step 1.1 without a tensor-product assumption.

[F2] The diagonal operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: for a complete orthonormal family and real numbers, the diagonal operator is self-adjoint with the displayed eigenvalue realisation, coefficient uniqueness from the complete orthonormal expansion gives the kernel characterization derived in step 2.1, including the zero vector.

[F3] Under the assumed Axiom of Choice and Countable Choice, for $0<L<\infty$, real $\alpha,\beta$ and real continuous $V$, the operator $A$ defined above is self-adjoint, its spectrum consists exactly of eigenvalues, and every eigenspace at an eigenvalue is one-dimensional ([[thm-nrqm-intervals-robin-simple-complete-spectrum]], Statement (a)-(b)).

1.1 [Orthonormality and completeness] For $n,m,n',m'$, $\langle e_{nm},e_{n'm'}\rangle =\Bigl(\int_0^Le_n\overline{e_{n'}}\Bigr) \Bigl(\int_0^Le_m\overline{e_{m'}}\Bigr) =\delta_{nn'}\delta_{mm'}$ by [F1] and Fubini. If $g\in L^2((0,L)^2)$ is orthogonal to all $e_{nm}$, then for every $n$ the function $h_n(y):=\int_0^Lg(x,y)e_n(x)dx$ (defined as zero on exceptional sections) is measurable and satisfies $|h_n(y)|^2\le\int_0^L|g(x,y)|^2dx$ a.e. by Cauchy-Schwarz, hence $h_n\in L^2(0,L)$ by Tonelli; moreover $g(x,y)e_n(x)e_m(y)$ is absolutely integrable by Cauchy-Schwarz on the square, so $\int_0^Lh_n\overline{e_m}=0$ for all $m$ by Fubini, so $h_n=0$ a.e. by completeness of $(e_m)$. Fubini also gives a full-measure set $Y_0$ on which $g(\cdot,y)\in L^2(0,L)$. For each $n$, choose a full-measure set $Y_n$ on which $h_n(y)=0$; Countable Choice permits choosing these sets simultaneously, and countable subadditivity makes $Y_0\cap\bigcap_nY_n$ full measure. For every $y$ in this intersection, all sine coefficients of $g(\cdot,y)$ vanish, so completeness of $(e_n)$ gives $g(\cdot,y)=0$ a.e. in $x$. Fubini then yields $g=0$ a.e. on the square. This is (a). [F1, choose, algebra]

2.1 [Diagonal operator and eigenspace] By [F2] applied to the complete orthonormal family $(e_{nm})$ and the real numbers $(\mu_{nm})$ (indexed by $\mathbb N^2$, which is countable), define $D(\Delta_D):=\{g\in H:\sum_{n,m\ge1}\mu_{nm}^2|\langle g,e_{nm}\rangle|^2<\infty\}$ and $\Delta_Dg:=\sum_{n,m\ge1}\mu_{nm}\langle g,e_{nm}\rangle e_{nm}$. To match the supplier's indexing by $\mathbb N=\{0,1,\ldots\}$, enumerate $(n,m)$ by increasing $n+m\ge2$, and within each sum by increasing $n$; this lists every positive pair once. The supplier proves convergence on this domain and self-adjointness, with $\Delta_De_{nm}=\mu_{nm}e_{nm}$; a vector $x=\sum_{n,m}c_{nm}e_{nm}\in D(\Delta_D)$ lies in $\ker(\Delta_D-\mu)$ exactly when $\sum_{n,m}(\mu_{nm}-\mu)c_{nm}e_{nm}=0$, which by uniqueness of coefficients forces $c_{nm}=0$ whenever $\mu_{nm}\ne\mu$. The equation $n^2+m^2=5$ with $n,m\ge1$ has exactly the solutions $(1,2)$ and $(2,1)$, so $\ker(\Delta_D-\mu)=\mathbb Ce_{12}\oplus\mathbb Ce_{21}$ is two-dimensional. This proves (b) and the displayed eigenspace assertion in (c). [step 1.1, F2, algebra]

3.1 [One-dimensional comparison] The operator $A$ in the comparison has precisely the domain and action required by [F3]; the hypotheses $L>0$, $\alpha,\beta\in\mathbb R$, $V\in C([0,L];\mathbb R)$ and both choice assumptions are explicit. Thus its spectrum consists of eigenvalues with one-dimensional eigenspaces. By step 2.1, the square operator instead has a two-dimensional eigenspace at $5\pi^2/L^2$. This establishes the stated contrast and completes (c). [step 2.1, F3, given] ∎
