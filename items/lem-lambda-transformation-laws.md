---
id: lem-lambda-transformation-laws
kind: lemma
title: "Transformation laws and S_3-action of the modular lambda function"
status: published
origin: pipeline
deps:
  - def-modular-lambda-function
  - def-principal-congruence-subgroup-gamma-2
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-weierstrass-p-differential-equation
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - thm-weierstrass-lattice-discriminant-is-nonzero
  - thm-group-actions-correspond-to-homomorphisms
  - def-group-isomorphism-and-automorphism
  - def-complex-lattice-and-complex-torus
  - lem-complex-conjugation-and-modulus-laws
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-identity-theorem-holomorphic-functions
  - thm-intermediate-value
  - thm-weierstrass-convergence-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, the lambda function, its transformations and the level-two quotient, printed pp. 94-98."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 3, printed pp. 43–47: Weierstrass and cubic background. The lambda-specific substitutions are proved locally and discussed in McMullen pp. 94–96."
proof_strategy: direct
---

## Statement

$\lambda$ is invariant under $\Gamma(2)$, and under the generators of $PSL_2(\mathbb Z)$ it satisfies
$$\lambda(\tau+1)=\frac{\lambda(\tau)}{\lambda(\tau)-1},\qquad \lambda(-1/\tau)=1-\lambda(\tau).$$
Consequently $\lambda(\gamma\tau)$ takes, as $\gamma$ ranges over $PSL_2(\mathbb Z)$, the values of the six expressions
$$\lambda,\ \frac1\lambda,\ 1-\lambda,\ \frac1{1-\lambda},\ \frac{\lambda}{\lambda-1},\ \frac{\lambda-1}{\lambda},$$
these expressions may coincide at special parameters, and the substitution action on rational functions defines an isomorphism $PSL_2(\mathbb Z)/\bar\Gamma(2)\cong S_3$. Moreover $\lambda(i)=1/2$, and for $\tau=iy$ with $y>0$ one has $\lambda(\tau)\in(0,1)$.

## Facts & Assumptions

**Given:** $\lambda(\tau)=\frac{e_3-e_2}{e_1-e_2}$ with $e_1=\wp_{\Lambda_\tau}(1/2)$, $e_2=\wp_{\Lambda_\tau}(\tau/2)$, $e_3=\wp_{\Lambda_\tau}((1+\tau)/2)$, $\Lambda_\tau=\mathbb Z+\mathbb Z\tau$, and the $e_j$ pairwise distinct ([[def-modular-lambda-function]], [[lem-weierstrass-p-degree-two-and-half-periods]], [[thm-weierstrass-lattice-discriminant-is-nonzero]], [[def-complex-lattice-and-complex-torus]]).

[F1] $\wp_\Lambda$ is even and $\Lambda$-periodic, and its convergence is normal in the point for a fixed lattice; its parameter continuity used below is established by a local compact bound ([[def-weierstrass-elliptic-p-function]], [[thm-weierstrass-p-normal-convergence-and-periodicity]], [[lem-weierstrass-p-degree-two-and-half-periods]]).

[F2] For $c\in\mathbb C^\times$, $\wp_{c\Lambda}(cz)=c^{-2}\wp_\Lambda(z)$: substituting $\omega=c\omega'$ in the defining series scales every corrected summand by $c^{-2}$, and the family is absolutely summable ([[def-weierstrass-elliptic-p-function]]).

[F3] $\wp'$ vanishes exactly at the nonzero half-periods, and $4x^3-g_2x-g_3=4(x-e_1)(x-e_2)(x-e_3)$ has the three distinct roots $e_1,e_2,e_3$, so $e_1+e_2+e_3=0$ and $g_3=4e_1e_2e_3$ ([[thm-weierstrass-p-differential-equation]], [[thm-weierstrass-lattice-discriminant-is-nonzero]]).

[F4] $\Gamma(2)=\{\gamma\equiv I\pmod2\}$ has index $6$ in $SL_2(\mathbb Z)$ and image $\bar\Gamma(2)$ of index $6$ in $PSL_2(\mathbb Z)=\langle S,T\rangle$; $S^2=(ST)^3=1$ ([[def-principal-congruence-subgroup-gamma-2]], [[thm-standard-fundamental-domain-for-the-modular-group]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F5] An action of a group by permutations defines a homomorphism with kernel the intersection of all point stabilisers; isomorphic groups satisfy the usual group-isomorphism conditions ([[thm-group-actions-correspond-to-homomorphisms]], [[def-group-isomorphism-and-automorphism]]).

[F6] $|\wp(z)|$ and $\wp(z)$ itself are continuous in the pair (lattice, $z$) on compacta away from the lattice, by the following compact estimate: for $\tau$ in a compact subset of $\mathfrak H$, the corrected lattice summands at each half-period are bounded by $C\max(|m|,|n|)^{-3}$ outside finitely many pairs. This follows from $|m\tau+n|\ge c\max(|m|,|n|)$ and expanding $(z-\omega)^{-2}-\omega^{-2}$ for bounded $z$. Summing over shells gives a uniform $\sum_j O(j^{-2})$ bound; each finite term is holomorphic in $\tau$ and no half-period meets the lattice, proving parameter holomorphy and hence continuity by the Weierstrass convergence theorem ([[thm-weierstrass-convergence-holomorphic-functions]]); conjugation of the lattice $\Lambda_{iy}$ to itself gives $\wp(\bar z)=\overline{\wp(z)}$ for that lattice ([[thm-weierstrass-p-normal-convergence-and-periodicity]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Let $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in\Gamma(2)$, so $a\equiv d\equiv1$ and $b\equiv c\equiv0\pmod2$. Put $\omega_1:=a\tau+b$, $\omega_2:=c\tau+d$, so $\gamma\tau=\omega_1/\omega_2$ and $\Lambda_{\gamma\tau}=(1/\omega_2)\Lambda_\tau$ because $\mathbb Z+\mathbb Z(\omega_1/\omega_2)=(1/\omega_2)(\mathbb Z\omega_1+\mathbb Z\omega_2)=(1/\omega_2)\Lambda_\tau$. By [F2], $\wp_{\Lambda_{\gamma\tau}}(z)=\omega_2^2\wp_{\Lambda_\tau}(\omega_2z)$. Now $\omega_1-\tau=(a-1)\tau+b\in2\Lambda_\tau$ and $\omega_2-1=c\tau+(d-1)\in2\Lambda_\tau$; hence the half-periods $1/2$, $\gamma\tau/2=\omega_1/(2\omega_2)$ and $(1+\gamma\tau)/2=(\omega_1+\omega_2)/(2\omega_2)$ of $\Lambda_{\gamma\tau}$ correspond under the scaling to $\omega_2/2$, $\omega_1/2$ and $(\omega_1+\omega_2)/2$, which are congruent modulo $\Lambda_\tau$ to $\frac12$, $\frac{\tau}{2}$ and $\frac{1+\tau}{2}$ by [F1] and the evenness of $\wp$. Therefore $\lambda(\gamma\tau)=\frac{\omega_2^2(e_3-e_2)}{\omega_2^2(e_1-e_2)}=\lambda(\tau)$. [F1, F2, given, algebra]

1.2 For $T$ one has $\Lambda_{\tau+1}=\Lambda_\tau$ and the half-period values of the basis $(1,\tau+1)$ are $e_1$, $\wp((\tau+1)/2)=e_3$, $\wp((\tau+2)/2)=e_2$, so $\lambda(\tau+1)=\frac{e_2-e_3}{e_1-e_3}=\frac{e_3-e_2}{(e_3-e_2)-(e_1-e_2)}=\frac{\lambda(\tau)}{\lambda(\tau)-1}$. For $S$ one has $S\tau=-1/\tau$ and $\Lambda_{S\tau}=(1/\tau)\Lambda_\tau$, so by [F2] with $c=1/\tau$ the scaled $\wp$ is $\wp_{\Lambda_{S\tau}}(z)=\tau^2\wp_{\Lambda_\tau}(\tau z)$; the half-periods $1/2=c\cdot(\tau/2)$, $S\tau/2=c\cdot(-1/2)$, $(1+S\tau)/2=c\cdot((\tau-1)/2)$ of $\Lambda_{S\tau}$ therefore give the values $e_1'=\tau^2\wp(\tau/2)=\tau^2e_2$, $e_2'=\tau^2\wp(-1/2)=\tau^2e_1$ and $e_3'=\tau^2\wp((\tau-1)/2)=\tau^2\wp((1+\tau)/2)=\tau^2e_3$; hence $\lambda(-1/\tau)=\frac{e_3-e_1}{e_2-e_1}=1-\lambda(\tau)$. [F1, F2, given, algebra]

1.3 The square lattice $\Lambda_i=\mathbb Z+\mathbb Z i$ is invariant under multiplication by $i$, and the substitution $(m,n)\mapsto(-n,m)$ is a bijection of $\mathbb Z^2$ sending $mi+n$ to $i(mi+n)$, so the absolutely summable family $((mi+n)^{-6})$ [F3] equals its negative and $g_3=140G_6=0$ for $\tau=i$; also $\wp_{\Lambda_i}(i z)=-\wp_{\Lambda_i}(z)$ by [F2] with $c=i$, so $e_2=\wp(i/2)=-\wp(1/2)=-e_1$, and then [F3] gives $e_3=0$. Hence $\lambda(i)=\frac{e_3-e_2}{e_1-e_2}=\frac{e_1}{2e_1}=\frac12$. For $\tau=iy$, $y>0$, the lattice $\Lambda_{iy}$ is invariant under conjugation: the conjugate of $miy+n$ is $-miy+n\in\Lambda_{iy}$, so $\wp(\bar z)=\overline{\wp(z)}$ [F6]; the half-periods $1/2$, $iy/2$, $(1+iy)/2$ are each congruent to their conjugates modulo $\Lambda_{iy}$, so $e_1,e_2,e_3$ are real and $\lambda(iy)$ is real, while $\lambda(iy)\ne0,1$ because the $e_j$ stay distinct [F3]. By [F6] each $e_j(iy)$ is continuous in $y$; $\lambda(iy)$ is therefore a continuous real function of $y\in(0,\infty)$ avoiding $0$ and $1$, so it lies in a single connected component of $\mathbb R\setminus\{0,1\}$; since $\lambda(i)=1/2\in(0,1)$, it follows that $\lambda(iy)\in(0,1)$ for every $y>0$. [F1, F2, F3, F6, given, algebra]

2.1 Let $X$ be the set of the six rational functions $x$, $1/x$, $1-x$, $1/(1-x)$, $x/(x-1)$, $(x-1)/x$ of an indeterminate $x$; these are pairwise distinct functions on $\mathbb C\setminus\{0,1\}$, and $\sigma(x):=x/(x-1)$ and $\tau(x):=1-x$ satisfy $\sigma^2=\tau^2=1$ and generate a group of order $6$ acting transitively on $X$ (the orbit of $x$ is exactly $X$), hence isomorphic to $S_3$. By 1.2, $\lambda(S\tau)=1-\lambda(\tau)=\tau(\lambda(\tau))$ and $\lambda(T\tau)=\sigma(\lambda(\tau))$, and for a word $\gamma$ in $S,T$ induction gives $\lambda(\gamma\tau)=f_\gamma(\lambda(\tau))$ with $f_\gamma$ the corresponding composition in this group; since $\lambda(i)=1/2$ and $\lambda(i+1)=-1$ by 1.2 and 1.3, it is not constant; its real restriction $\lambda(iy)$ cannot be constant by the identity theorem, so its continuous image is an interval with more than one point by the intermediate value theorem ([[thm-intermediate-value]]). Thus distinct $f_\gamma$ give distinct functions $f_\gamma\circ\lambda$, so the assignment $\gamma\mapsto f_\gamma$ is a homomorphism $PSL_2(\mathbb Z)\to S_3$ [F5]. Its kernel is $\{\gamma:\lambda(\gamma\tau)=\lambda(\tau)\}$, which contains $\bar\Gamma(2)$ by 1.1 and therefore has index at most $6$; the image is generated by $\sigma,\tau$ and has order $6$, so the index is exactly $6$ and the kernel is $\bar\Gamma(2)$, giving $PSL_2(\mathbb Z)/\bar\Gamma(2)\cong S_3$ [F4]. Hence $\lambda(\gamma\tau)$ runs over the displayed expressions, with coincidences allowed (for example $\lambda(i)=1/2$ gives the three values $1/2,2,-1$) as $\gamma$ runs over $PSL_2(\mathbb Z)$. [F4, F5, F6, step 1.1, step 1.2, step 1.3, given, algebra] ∎
