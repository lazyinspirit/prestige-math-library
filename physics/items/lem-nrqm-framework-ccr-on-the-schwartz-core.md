---
id: lem-nrqm-framework-ccr-on-the-schwartz-core
kind: lemma
title: "Canonical commutation relations of position and momentum on the Schwartz core"
status: draft
origin: session
domain: mathematics
dependency_level: 1
deps:
  [
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-schwartz-space-and-its-seminorms,
    def-l-p-space-as-a-quotient-by-null-functions,
    lem-schwartz-functions-and-all-derivatives-are-integrable,
    lem-classical-derivatives-are-weak-derivatives,
    thm-algebra-of-derivatives,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    lem-schwartz-cutoffs-from-the-standard-smooth-step,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    lem-complex-translation-and-approximate-identity-interfaces,
    thm-dominated-convergence,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-schwartz-functions-and-all-derivatives-are-integrable: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-57 (PDF pages 67-69): position and
        momentum operators and the canonical commutation relation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear
        Algebra: Vector Spaces and Operators', printed pages 5-8 (PDF pages
        6-9): linear operators and the commutator [X,Y]=XY-YX"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349\
        e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
verification:
  precheck: pass
---

**Graph-core convention used in the Statement.** If $A:D(A)\subseteq H\to H$ is a densely defined linear operator, its graph norm on $D(A)$ is $\|f\|_{A}:=(\|f\|_{H}^{2}+\|Af\|_{H}^{2})^{1/2}$. A linear subspace $D_0\subseteq D(A)$ is a **core** for $A$ when it is dense in $D(A)$ in this graph norm; equivalently, the graph of $A|_{D_0}$ is dense in the graph of $A$ in $H\times H$. A **common core** for a family of operators is one subspace that is a core for each operator in the family.

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $d\ge1$ and $\hbar>0$, let $Q_{j},P_{k}$ be the position and momentum operators on $L^{2}(\mathbb R^{d};\mathbb C)$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], and let

$$\mathcal S:=\mathcal S(\mathbb R^{d};\mathbb C)$$

be the Schwartz space of [[def-schwartz-space-and-its-seminorms]]. Then:

In this operator statement, $\mathcal S$ denotes the image in $L^2(\mathbb R^d;\mathbb C)$ of the actual Schwartz functions under the quotient map by almost-everywhere equality ([[def-l-p-space-as-a-quotient-by-null-functions]]); the smooth representatives are used in the pointwise derivative calculations.

(a) $\mathcal S\subseteq D(Q_{j})\cap D(P_{k})$ for all $j,k$, and $Q_{j}f\in\mathcal S$ and $P_{k}f\in\mathcal S$ for every $f\in\mathcal S$.
(b) for every $f\in\mathcal S$ the products $Q_{j}P_{k}$ and $P_{k}Q_{j}$ are defined at $f$ and
$$(Q_{j}P_{k}-P_{k}Q_{j})f=i\hbar\,\delta_{jk}f,\qquad \delta_{jk}=\begin{cases}1,&j=k,\\0,&j\ne k;\end{cases}$$
that is, the canonical commutation relation holds on the common core $\mathcal S$.

No statement is made about products of $Q_{j}$ and $P_{k}$ outside $\mathcal S$: the relation is asserted on the Schwartz core only, not as an identity of unbounded products on all of $L^{2}$.

## Facts & Assumptions

**Given:** $d\ge1$, $\hbar>0$, the operators $Q_{j},P_{k}$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] with the domains $D(Q_{j})=\{f:x_{j}f\in L^{2}\}$ and $D(P_{k})=\{f:D_{k}f$ exists in $L^{2}\}$, and a class $f\in\mathcal S$.

[L1] Operator formulas and domains: $Q_jf=x_jf$ on $D(Q_j)=\{f\in L^2:x_jf\in L^2\}$ and $P_kf=-i\hbar D_kf$ on $D(P_k)=\{f\in L^2:D_kf\in L^2\}$; on a smooth Schwartz representative, $D_kf=\partial_kf$ as an $L^2$ class by the classical-to-weak derivative lemma ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[lem-classical-derivatives-are-weak-derivatives]]).

[L2] From the seminorm definition, $x_jf$ and $\partial_kf$ are Schwartz whenever $f$ is Schwartz, since the product rule gives $\partial^\beta(x_jf)=x_j\partial^\beta f+\beta_j\partial^{\beta-e_j}f$, so $p_{\alpha\beta}(x_jf)\le p_{\alpha+e_j,\beta}(f)+\beta_jp_{\alpha,\beta-e_j}(f)$, with the second term omitted in both formulas when $\beta_j=0$, while $p_{\alpha\beta}(\partial_kf)=p_{\alpha,\beta+e_k}(f)$. Every Schwartz function and each polynomial-times-derivative used here is in $L^2$ by [[lem-schwartz-functions-and-all-derivatives-are-integrable]]; every compactly supported smooth function belongs to $\mathcal S$ directly from the seminorm definition ([[def-schwartz-space-and-its-seminorms]]).

[L3] There is $\chi\in C_c^\infty(\mathbb R^d)$ with $0\le\chi\le1$, $\chi=1$ on $|x|\le1$ and $\chi=0$ on $|x|\ge2$. For $\chi_n(x)=\chi(x/n)$, $\operatorname{supp}\chi_n\subseteq\{|x|\le2n\}$ and $\|\partial_k\chi_n\|_\infty\le n^{-1}\|\partial_k\chi\|_\infty$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[L4] Normalize the nonnegative cutoff $\chi$ of [L3] to a real unit-mass bump $\rho=\chi/\int\chi$, and put $\rho_\epsilon(x)=\epsilon^{-d}\rho(x/\epsilon)$. For compactly supported $h\in L^2$, $\rho_\epsilon*h\in C_c^\infty$, its support lies in the sum of the compact supports of $h$ and $\rho_\epsilon$, and $\rho_\epsilon*h\to h$ in $L^2$ as $\epsilon\downarrow0$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[lem-complex-translation-and-approximate-identity-interfaces]]).

[L5] For smooth scalar functions, $\partial_k(x_jf)=\delta_{jk}f+x_j\partial_kf$ by the classical product rule ([[thm-algebra-of-derivatives]]).

[L7] Dominated convergence is supplied by [[thm-dominated-convergence]].

[L6] Fubini applies to the convolution test identity used below: the mollifier and test function have compact support, and the compactly supported $L^2$ input and its $L^2$ weak derivative are locally integrable ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 [Schwartz invariance and domains] Let $f\in\mathcal S$. By [L2], $x_jf$ and $\partial_kf$ are Schwartz and in $L^2$; by [L1], $f\in D(Q_j)\cap D(P_k)$, $Q_jf=x_jf\in\mathcal S$, and $P_kf=-i\hbar\partial_kf\in\mathcal S$. This proves (a) and ensures both products in (b) are defined. [L1, L2, algebra]

1.2 [The position operators have Schwartz cores] Fix $j$ and $f\in D(Q_j)$, and define $f_n=\chi_n f$ using [L3]. Since $\chi_n(x)\to1$ for each fixed $x$ and $|\chi_n|\le1$, dominated convergence applied to $|f_n-f|^2$ and $|x_j(f_n-f)|^2$ gives $\|f_n-f\|_2+\|x_jf_n-x_jf\|_2\to0$. Each $f_n$ is supported in $|x|\le2n$. For fixed $n$, let $g_{n,\epsilon}=\rho_\epsilon*f_n$; by [L4] it is smooth, compactly supported in $|x|\le2n+2\epsilon$, and $\|g_{n,\epsilon}-f_n\|_2\to0$. For $0<\epsilon\le1$, $|x_j|\le2n+2$ on both supports, so $\|x_j(g_{n,\epsilon}-f_n)\|_2\le(2n+2)\|g_{n,\epsilon}-f_n\|_2$. Choose $\epsilon_n\le1$ so the latter $L^2$ error is below $n^{-2}$. Then $g_{n,\epsilon_n}\in C_c^\infty\subseteq\mathcal S$ and converges to $f$ in the graph norm of $Q_j$. Thus $\mathcal S$ is a core for $Q_j$. [given, L3, L4, L7, choose, algebra]

2.1 [Classical product rule and commutator] Since $x_jf\in\mathcal S$, its classical derivative is its weak derivative by [L1]. By [L5], $D_k(x_jf)=\partial_k(x_jf)=\delta_{jk}f+x_j\partial_kf$. Therefore $P_kQ_jf=-i\hbar(\delta_{jk}f+x_j\partial_kf)$, while $Q_jP_kf=-i\hbar x_j\partial_kf$. Subtraction yields $(Q_jP_k-P_kQ_j)f=i\hbar\delta_{jk}f$, proving (b) directly on Schwartz representatives. [step 1.1, L1, L2, L5, algebra]

3.1 [The momentum operators have Schwartz cores] Fix $k$ and $f\in D(P_k)$; put $f_n=\chi_nf$. For every $\varphi\in C_c^\infty$, the weak derivative identity for $f$ applied to $\chi_n\varphi$ gives $\int f_n\partial_k\varphi=-\int(\chi_nD_kf+(\partial_k\chi_n)f)\varphi$, so $D_kf_n=\chi_nD_kf+(\partial_k\chi_n)f\in L^2$. Dominated convergence gives $f_n\to f$ and $\chi_nD_kf\to D_kf$ in $L^2$, while [L3] gives $\| (\partial_k\chi_n)f\|_2\le n^{-1}\|\partial_k\chi\|_\infty\|f\|_2\to0$; hence $f_n\to f$ in the graph norm of $P_k$. For fixed $n$, let $g_{n,\epsilon}=\rho_\epsilon*f_n$. For a test function $\varphi$, change variables and apply the weak-derivative identity inside the convolution integral: $\int g_{n,\epsilon}(x)\partial_k\varphi(x)\,dx=\int\rho_\epsilon(y)\int f_n(z)\partial_k\varphi(z+y)\,dz\,dy=-\int(\rho_\epsilon*D_kf_n)(x)\varphi(x)\,dx$. The interchange is valid by [L6], so $\partial_kg_{n,\epsilon}=\rho_\epsilon*D_kf_n$ as a weak derivative; since $g_{n,\epsilon}$ is smooth, it is also its classical derivative. Both $g_{n,\epsilon}\to f_n$ and $\partial_kg_{n,\epsilon}\to D_kf_n$ in $L^2$ by [L4]. Choose $\epsilon_n>0$ so both errors are below $1/n$. Then $g_{n,\epsilon_n}\in C_c^\infty\subseteq\mathcal S$ and converges to $f$ in the graph norm of $P_k=-i\hbar D_k$. Thus $\mathcal S$ is a core for $P_k$. Since $j,k$ were arbitrary, the proof establishes the common-core assertion in the Statement and completes (a) and (b). [given, step 1.1, L1, L3, L4, L6, L7, choose, algebra] ∎

