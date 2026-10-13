---
id: thm-nrqm-oscillator-multidimensional-oscillator-completeness
aliases: [nrqm-oscillator-multidimensional-oscillator-completeness]
kind: theorem
domain: mathematics
title: "Multidimensional oscillator completeness"
status: published
origin: pipeline
dependency_level: 4
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-nrqm-oscillator-diagonal-spectrum, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, thm-nrqm-oscillator-hermite-completeness, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-euclidean-l2-product-unitary, thm-stars-and-bars, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-oscillator-diagonal-spectrum: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  thm-nrqm-oscillator-hermite-completeness: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  thm-stars-and-bars: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (product eigenfunctions and Theorem 8.5 for R^3)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §1 (tensor products and product bases)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and let $d\ge1$. For each $j\in\{1,\dots,d\}$ put $K_j^y:=L^2(\mathbb R,dy_j)$ and take a copy $(g^{(j)}_n)_{n\in\mathbb N}$ of the Hermite family of [[thm-nrqm-oscillator-hermite-recurrence]] in $K_j^y$. Define the left-associated completed tensor products by $\mathcal K_1^y:=K_1^y$ and $\mathcal K_r^y:=\mathcal K_{r-1}^y\widehat\otimes K_r^y$ for $2\le r\le d$. Let $\Theta_y^{(1)}:K_1^y\to L^2(\mathbb R,dy_1)$ be the identity; recursively, for $2\le r\le d$, let

$$\Theta_y^{(r)}:=\Theta_{r-1,1}^y\circ\bigl(\Theta_y^{(r-1)}\otimes I_{K_r^y}\bigr):\mathcal K_r^y\longrightarrow L^2(\mathbb R^r,dy),$$

where $\Theta_{r-1,1}^y:L^2(\mathbb R^{r-1},dy)\widehat\otimes K_r^y\to L^2(\mathbb R^r,dy)$ is the two-factor Euclidean product unitary of [[lem-nrqm-composites-euclidean-l2-product-unitary]], and $\Theta_y^{(r-1)}\otimes I_{K_r^y}$ is the bounded tensor map of [[lem-nrqm-composites-bounded-tensor-maps]]. Thus $\Theta_y^{(r)}$ is a specified unitary, with $\Theta_y^{(r)}(u\otimes v)(y',y_r)=\Theta_y^{(r-1)}u(y')v(y_r)$ almost everywhere. For $N=(n_1,\dots,n_d)\in\mathbb N^d$, set $G_N^{y,1}:=g^{(1)}_{n_1}$ and recursively $G_N^{y,r}:=G_N^{y,r-1}\otimes g^{(r)}_{n_r}$; define $g_N:=\Theta_y^{(d)}G_N^{y,d}\in L^2(\mathbb R^d,dy)$.

Let $\varphi:\mathbb N\to\mathbb N^d$ list the multi-indices by increasing total degree $M=\sum_jn_j$ and, within each finite level, in lexicographic order. By [[thm-stars-and-bars]] each level is finite and the levels exhaust $\mathbb N^d$, so this specifies a bijection. All sums indexed by $\mathbb N^d$ below are taken in this order; nonnegative sums equivalently mean the supremum of finite subsums.

The functions $g_N$ have smooth product representatives from the recursive construction. These representatives are unique: a continuous difference that is nonzero at a point remains nonzero on a ball of positive Lebesgue measure. The coordinate derivatives in (b) and (c) are taken on these representatives and their scaled products.

Then:

(a) $(g_N)_{N\in\mathbb N^d}$ is a complete orthonormal family of $L^2(\mathbb R^d,dy)$: $\langle g_N,g_M\rangle=\delta_{NM}$ and every $f\in L^2(\mathbb R^d,dy)$ has $f=\sum_{N\in\mathbb N^d}\langle f,g_N\rangle g_N$ with $\|f\|^2=\sum_{N\in\mathbb N^d}|\langle f,g_N\rangle|^2$, the sum being the supremum over finite subfamilies ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]);

(b) with the eigenvalues $\lambda_N:=\sum_{j=1}^d(2n_j+1)=2M+d$, $M:=\sum_jn_j$, let $A_d$ be the diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] for the enumerated family $e_m:=g_{\varphi(m)}$ and eigenvalue sequence $\lambda_{\varphi(m)}$. Then $A_d$ is self-adjoint with

$$A_dg_N=\lambda_Ng_N,\qquad D(A_d)=\Bigl\{f:\sum_{N\in\mathbb N^d}\lambda_N^2|\langle f,g_N\rangle|^2<\infty\Bigr\},\qquad \sigma(A_d)=\{2M+d:M\in\mathbb N\}$$

(the spectrum by [[thm-nrqm-oscillator-diagonal-spectrum]]); the algebraic span of the $g_N$ is a core, and on that span

$$A_d=\sum_{j=1}^d\bigl(-\partial_{y_j}^2+y_j^2\bigr)$$

as operators, the $j$-th summand acting in the $j$-th coordinate;

(c) for real $m_j,\omega_j,\hbar>0$ put $\ell_j:=\sqrt{\hbar/(m_j\omega_j)}$ and let $D_j:K_j^y\to K_j^x:=L^2(\mathbb R,dx_j)$ be the one-dimensional unitary of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]. Define $\mathcal K_1^x:=K_1^x$ and $\mathcal K_r^x:=\mathcal K_{r-1}^x\widehat\otimes K_r^x$ for $2\le r\le d$, and define $\Theta_x^{(1)}$ and $\Theta_x^{(r)}$ by the same recursion as $\Theta_y^{(r)}$, using the two-factor Euclidean product unitaries on the $x$-coordinate spaces. Let $\mathcal D_1:=D_1$ and recursively $\mathcal D_r:=\mathcal D_{r-1}\otimes D_r:\mathcal K_r^y\to\mathcal K_r^x$; each $\mathcal D_r$ is unitary by [[lem-nrqm-composites-bounded-tensor-maps]]. Put $D_d:=\Theta_x^{(d)}\mathcal D_d(\Theta_y^{(d)})^{-1}:L^2(\mathbb R^d,dy)\to L^2(\mathbb R^d,dx)$. For $N\in\mathbb N^d$, define $G_N^{x,1}:=D_1g^{(1)}_{n_1}=:\psi^{(1)}_{n_1}$ and recursively $G_N^{x,r}:=G_N^{x,r-1}\otimes\psi^{(r)}_{n_r}$; then $\psi_N:=D_dg_N=\Theta_x^{(d)}G_N^{x,d}$. Let $H$ be the diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] for the enumerated family $\psi_{\varphi(m)}$ and eigenvalue sequence $E_{\varphi(m)}$, where $E_N:=\hbar\sum_{j=1}^d\omega_j(n_j+\frac12)$. Then $H$ is self-adjoint with

$$H\psi_N=E_N\psi_N,\qquad D(H)=\Bigl\{f:\sum_N E_N^2|\langle f,\psi_N\rangle|^2<\infty\Bigr\},\qquad \sigma(H)=\overline{\{E_N:N\in\mathbb N^d\}},$$

the span of the $\psi_N$ is a core, and on that core

$$H=\sum_{j=1}^d\Bigl(-\frac{\hbar^2}{2m_j}\partial_{x_j}^2+\frac{m_j\omega_j^2}{2}x_j^2\Bigr);$$

(d) if $\omega_1=\cdots=\omega_d=\omega$, then $\sigma(H)=\{\hbar\omega(M+\frac d2):M\in\mathbb N\}$, and the eigenvalue $\hbar\omega(M+\frac d2)$ has multiplicity

$$\bigl|\{(n_1,\dots,n_d)\in\mathbb N^d:n_1+\cdots+n_d=M\}\bigr|=\binom{M+d-1}{d-1};$$

in particular for $d=3$ the multiplicity is $(M+1)(M+2)/2$ ([[thm-stars-and-bars]]). All parameters are positive real numbers; no physical interpretation is asserted.

## Facts & Assumptions

**Given:** the dimension $d\ge1$; per-coordinate Hermite families $(g^{(j)}_n)$; the recursively defined left-associated tensor products and product unitaries $\Theta_y^{(r)},\Theta_x^{(r)}$; the eigenvalues $\lambda_N=2M+d$ and $E_N=\hbar\sum_j\omega_j(n_j+\frac12)$.

[F1] Each $(g^{(j)}_n)$ is a complete orthonormal family of $L^2(\mathbb R,dy_j)$ ([[thm-nrqm-oscillator-hermite-completeness]]), and $\bigl(-\partial_{y_j}^2+y_j^2\bigr)g^{(j)}_n=(2n+1)g^{(j)}_n$ ([[thm-nrqm-oscillator-hermite-orthogonality]](b)).

[F2] If $(e_a)_{a\in A}$ and $(f_b)_{b\in B}$ are orthonormal families whose closed linear spans are $H$ and $K$, then $(\kappa(e_a\otimes f_b))$ is a complete orthonormal family of the completed tensor product; the two-factor Euclidean maps $\Theta_{a,b}$ are surjective linear isometries with $\Theta_{a,b}(u\otimes v)(x,y)=u(x)v(y)$ a.e. ([[lem-nrqm-composites-hilbert-tensor-construction]](c),(d), [[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F3] The diagonal lemma and diagonal spectrum for a complete orthonormal family and real eigenvalues $\lambda_N$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]], [[thm-nrqm-oscillator-diagonal-spectrum]]).

[F4] The one-dimensional scaling operator $D_j$ is a bijective isometry with $D_jg^{(j)}_n=\psi^{(j)}_n$, and $H^{(j)}_{\mathrm{osc}}:=(\hbar\omega_j/2)D_jA_jD_j^{-1}$ satisfies $H^{(j)}_{\mathrm{osc}}\psi^{(j)}_n=\hbar\omega_j(n+\frac12)\psi^{(j)}_n$ and $H^{(j)}_{\mathrm{osc}}f=-\frac{\hbar^2}{2m_j}f''+\frac{m_j\omega_j^2}{2}x^2f$ for $f$ in the span of the $\psi^{(j)}_n$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F5] For each $M\in\mathbb N$ and $d\ge1$ the number of weak compositions of $M$ into $d$ parts is $\binom{M+d-1}{d-1}$; in particular each level $\{N:\sum_jn_j=M\}$ is finite and $\bigcup_M\{N:\sum_jn_j=M\}=\mathbb N^d$ ([[thm-stars-and-bars]]).

[F6] If $S$ and $T$ are unitary maps between Hilbert spaces, then their bounded tensor map $S\otimes T$ is unitary on the completed tensor products ([[lem-nrqm-composites-bounded-tensor-maps]]).

## Proof

1.1 [(a) product basis] For $d=1$, $\Theta_y^{(1)}$ is the identity and the claim is the one-dimensional Hermite basis theorem. Inductively, the product-basis conclusion of [F2] applied to $\mathcal K_{r-1}^y$ and $K_r^y$ makes $(G_N^{y,r})_{(n_1,\ldots,n_r)\in\mathbb N^r}$, indexed only by the first $r$ coordinates, a complete orthonormal family in $\mathcal K_r^y$; the unitary $\Theta_y^{(r)}$ transports it to the product family in $L^2(\mathbb R^r,dy)$. Thus $(g_N)$ is complete orthonormal. Applying [F3] gives the stated expansion and Parseval identity. [given, F1, F2, F3]

1.2 [(b) dimensionless operator] By [F5] each level $\{N:\sum_jn_j=M\}$ is finite and the levels exhaust $\mathbb N^d$. Order each level lexicographically and concatenate these finite lists in increasing $M$; this gives a bijection $\varphi:\mathbb N\to\mathbb N^d$. Apply [F3] to $e_m:=g_{\varphi(m)}$ and $\lambda_m:=\lambda_{\varphi(m)}$: the resulting operator $A_d$ is self-adjoint with the stated domain and $A_dg_N=\lambda_Ng_N$, and its spectrum is the closure of $\{\lambda_N:N\in\mathbb N^d\}=\{2M+d:M\in\mathbb N\}$, which is closed because it is a discrete set of reals and its only accumulation point would be $+\infty$; by the diagonal lemma the algebraic span of the $g_N$ is a core. This is (b), except the differential expression, proved in the next step. [given, F3, F5]

2.1 [(b) differential expression] Each one-dimensional Hermite class has its unique polynomial-Gaussian smooth representative by [[thm-nrqm-oscillator-hermite-recurrence]], and the recursive product maps represent $g_N$ almost everywhere by the smooth product $\prod_jg^{(j)}_{n_j}(y_j)$. Thus its coordinate derivatives are defined pointwise. For each $j$, $-\partial_{y_j}^2$ and multiplication by $y_j^2$ act only on the $j$-th factor: for $g_N=\prod_jg^{(j)}_{n_j}$ one has $(-\partial_{y_j}^2+y_j^2)g_N=\bigl((-\partial_{y_j}^2+y_j^2)g^{(j)}_{n_j}\bigr)\prod_{k\ne j}g^{(k)}_{n_k}=(2n_j+1)g_N$ by [F1]. Summing over $j$ gives $\sum_j(-\partial_{y_j}^2+y_j^2)g_N=\lambda_Ng_N=A_dg_N$; both sides are linear, so the identity extends to the span, which is the core of step 1.2. [step 1.2, F1]

2.2 [(c) anisotropic operator] By induction and [F6], every $\mathcal D_r=\mathcal D_{r-1}\otimes D_r$ is unitary; hence $D_d=\Theta_x^{(d)}\mathcal D_d(\Theta_y^{(d)})^{-1}$ is a composition of unitaries. The identity of the two-factor maps on elementary tensors gives $\psi_N=D_dg_N=\Theta_x^{(d)}G_N^{x,d}$, so $(\psi_N)$ is a complete orthonormal family by step 1.1 and unitarity. Apply [F3] to $(\psi_N)$ and $E_N$: $H$ is self-adjoint with the displayed domain and spectrum, $H\psi_N=E_N\psi_N$, and the span of the $\psi_N$ is a core. Each $\psi_N$ has the smooth product representative $\prod_j\psi^{(j)}_{n_j}(x_j)$ because the Hermite functions are polynomial-Gaussian and the one-dimensional scaling is explicit. Differentiating this product in coordinate $x_j$ and applying the one-dimensional identity [F4] to its $j$-th factor gives $\bigl(-\frac{\hbar^2}{2m_j}\partial_{x_j}^2+\frac{m_j\omega_j^2}{2}x_j^2\bigr)\psi_N=\hbar\omega_j(n_j+\frac12)\psi_N$. Summing over $j$ gives $\sum_j\bigl(-\frac{\hbar^2}{2m_j}\partial_{x_j}^2+\frac{m_j\omega_j^2}{2}x_j^2\bigr)\psi_N=E_N\psi_N=H\psi_N$, and linearity extends the identity to the core. [step 1.1, F3, F4, F6]

3.1 [(d) isotropic multiplicities] Set $\omega_j=\omega$. Then $E_N=\hbar\omega(M+\frac d2)$ with $M=\sum_jn_j$, so $\{E_N\}=\{\hbar\omega(M+\frac d2):M\in\mathbb N\}$, a closed discrete set; by step 2.2 the spectrum is its closure, which is itself. Since $(\psi_N)$ is an orthonormal family and $H\psi_N=E_N\psi_N$, the eigenspace for $\hbar\omega(M+\frac d2)$ contains the span of all $\psi_N$ with $\sum_jn_j=M$; conversely, any element of $D(H)$ orthogonal to that span has all its nonzero coefficients on $\psi_N$ with $\sum_jn_j\ne M$, so by the diagonal form $Hf=\sum_NE_N\langle f,\psi_N\rangle\psi_N$ of [F3] it lies in $\ker(H-\hbar\omega(M+\frac d2)I)$ only if those coefficients vanish. Hence the multiplicity is the number of $N\in\mathbb N^d$ with $\sum_jn_j=M$, which is $\binom{M+d-1}{d-1}$ by [F5]; for $d=3$ this reads $\binom{M+2}{2}=(M+1)(M+2)/2$. [step 2.2, F3, F5] ∎
