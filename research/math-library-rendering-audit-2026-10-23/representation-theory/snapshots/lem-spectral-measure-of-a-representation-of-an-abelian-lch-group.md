---
id: lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
kind: lemma
title: Spectral measure of a unitary representation of an abelian group, covariance, and ergodicity
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
local_addition: true
proof_strategy: direct
deps:
  - def-pontryagin-dual-and-compact-open-topology
  - thm-dual-of-an-lca-group-is-locally-compact-abelian
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity
  - def-convolution-on-cc-and-l1-of-a-group
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - thm-nonunital-commutative-gelfand-naimark
  - def-gelfand-transform
  - lem-continuous-functional-calculus-produces-a-regular-pvm
  - thm-bounded-borel-pvm-integral
  - def-projection-valued-measure
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
  - thm-bochner-dominated-convergence
  - thm-dominated-convergence
  - def-strongly-continuous-unitary-representation
  - def-hilbert-space
  - def-axiom-of-choice
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - def-second-countable-space
  - lem-characters-of-l1-of-an-abelian-lch-group
  - lem-lca-fourier-transforms-form-a-dense-czero-algebra
  - lem-nondegenerate-czero-representations-have-regular-pvms
  - thm-complex-stone-weierstrass-self-adjoint
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-involution-on-l1-of-a-group
  - lem-haar-change-of-variables-under-inversion
  - thm-pvm-integral-is-a-star-homomorphism
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - lem-scalar-and-complex-measures-from-a-pvm
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "D. P. Williams, Lecture Notes on the Spectral Theorem, Example 3.10, printed p. 9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters, arXiv:1912.07262 (AMS Mathematical Surveys and Monographs 250)"
      url: "https://arxiv.org/pdf/1912.07262"
    - title: "Lynn H. Loomis, An Introduction to Abstract Harmonic Analysis, §34A–34C, printed pp. 134–137"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
---

## Statement

Assume AC, and let $N$ be a second-countable locally compact Hausdorff abelian
group, $\pi:N\to U(\mathcal H)$ a strongly continuous unitary representation on
a separable Hilbert space $\mathcal H$, and $K$ a second-countable locally
compact group acting continuously on $N$ by automorphisms $\alpha_k$, with dual
action $k\cdot\chi=\chi\circ\alpha_k^{-1}$ on $\widehat N$. If
$\tau:K\to U(\mathcal H)$ is a strongly continuous unitary representation with
$\tau(k)\pi(n)\tau(k)^{-1}=\pi(\alpha_k(n))$, then there is a unique regular
projection-valued measure $P$ on $\widehat N$ with
$$\pi(n)=\int_{\widehat N}\chi(n)\,dP(\chi)\quad(n\in N),\qquad \tau(k)P(E)\tau(k)^{-1}=P(k\cdot E)$$
for every Borel $E\subseteq\widehat N$. If in addition the representation
$n\mapsto\pi(n)$, $k\mapsto\tau(k)$ of $N\rtimes K$ is irreducible, then the
measure class of $P$ is ergodic for the action of $K$ on $\widehat N$: every
Borel $E$ with $P(E)$ invariant under $\tau$ satisfies $P(E)=0$ or $P(E)=I$.

## Facts & Assumptions

**Given:** AC, the groups $N,K$, the strongly continuous representations $\pi,\tau$ with the covariance relation, and a separable $\mathcal H$.

[F1] $L^1(N)$ is a commutative complex Banach $\ast$-algebra with convolution and involution $f^*(n)=\Delta_N(n)^{-1}\overline{f(n^{-1})}$; $C_c(N)$ is dense; there is a contractively bounded approximate identity; the Haar integral satisfies the inversion formula $\int_Gw(n)\,dn=\int_G\Delta_G(m)^{-1}w(m^{-1})\,dm$; nonnegative compactly supported functions exist near every point and Haar measure is positive on nonempty open sets ([[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]], [[def-involution-on-l1-of-a-group]], [[lem-haar-change-of-variables-under-inversion]], [[thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity]], [[def-convolution-on-cc-and-l1-of-a-group]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F2] Bochner calculus in $\mathcal H$: strong measurability plus finiteness of $\int\|F\|$ gives Bochner integrability; $\|\int F\|\le\int\|F\|$; bounded linear maps commute with the Bochner integral; norm dominated convergence holds; scalar Fubini applies to iterated integrals of integrable kernels ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]], [[thm-bochner-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-bochner-integrable-function]]).

[F3] Every nonzero complex-linear multiplicative functional on $L^1(N)$ is $\lambda_\chi(f)=\int f\chi\,dn$ for a unique $\chi\in\widehat N$, and the Fourier transforms $\widehat f$ form a self-adjoint separating algebra with uniform closure $C_0(\widehat N)$; $\widehat N$ is locally compact abelian ([[lem-characters-of-l1-of-an-abelian-lch-group]], [[lem-lca-fourier-transforms-form-a-dense-czero-algebra]], [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-pontryagin-dual-and-compact-open-topology]]).

[F4] For a commutative C*-algebra $A$, the Gelfand transform is an isometric $\ast$-isomorphism onto $C_0(\Delta(A))$, so $\|a\|=\sup_{\psi\in\Delta(A)}|\psi(a)|$ ([[thm-nonunital-commutative-gelfand-naimark]], [[def-gelfand-transform]]).

[F5] A nondegenerate star representation $T:C_0(X)\to\mathcal B(\mathcal H)$ on a separable Hilbert space is $T(g)=\int_Xg\,dP$ for a unique regular PVM $P$ with $P(X)=I$ ([[lem-nondegenerate-czero-representations-have-regular-pvms]], [[def-projection-valued-measure]]).

[F6] PVM integral calculus: $\Phi_P(g)=\int g\,dP$ is a unital $\ast$-homomorphism of bounded Borel functions, $\|\Phi_P(g)\|\le\|g\|_\infty$, scalar measures $P_{\xi,\eta}$ are finite complex measures with $|P_{\xi,\eta}|(X)\le\|\xi\|\|\eta\|$, and bounded pointwise convergence gives strong convergence ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-dominated-convergence]]).

[F7] $N$ is Polish and a countable union of compacta, so Haar measure is $\sigma$-finite. Its scalar $L^2$ space is separable by the direct-integral Hilbert-space theorem; step 1.1 derives $L^1$ separability and hence second countability of the dual ([[lem-second-countable-lch-spaces-are-standard-borel]], [[def-second-countable-space]], [[def-left-haar-integral-and-left-haar-measure]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F8] AC implies DC and Countable Choice for the Bochner, Fubini and Gelfand interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-complex-stone-weierstrass-self-adjoint]], [[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $N,K,\pi,\tau$ and the covariance relation.

1.1 If $\mathcal H=0$, the zero PVM uniquely satisfies the statement, and the irreducibility premise does not hold. Assume $\mathcal H\ne0$. Let $C_j$ be increasing compact sets covering $N$. The closed subspace of $L^2(N)$ supported in $C_j$ is separable by [F7], and its inclusion into $L^1(N)$ is continuous, with norm at most $\mu(C_j)^{1/2}$. Choosing a countable dense family in each such subspace gives a countable $L^1$-dense family: for any $f\in L^1$, the truncations $f\mathbf 1_{C_j}\mathbf 1_{|f|\le r}$ lie in these $L^2$ subspaces and converge to $f$ in $L^1$ as $j,r\to\infty$. Thus $L^1(N)$ is separable. On its dual unit ball, evaluation on a countable norm-dense family induces the pointwise-evaluation topology, because the norm bounds uniformly control the error of replacing any argument by a dense one. This embeds that ball into a countable product of complex lines. By [F3] the dual $\widehat N$ is homeomorphic to its character subspace and therefore second countable; since it is LCH, it is standard Borel by [F7]. [F3, F7, F8]

2.1 For $f\in L^1(N)$ define $\pi(f)\xi=\int_Nf(n)\pi(n)\xi\,dn$. The integrand is strongly measurable (a.e. limit of $C_c$-approximants times the continuous map $n\mapsto\pi(n)\xi$) and $\int_N\|f(n)\pi(n)\xi\|\,dn=\|f\|_1\|\xi\|<\infty$, so $\pi(f)$ is a bounded operator with $\|\pi(f)\|\le\|f\|_1$; $f\mapsto\pi(f)$ is linear and multiplicative: for $f,g\in C_c(N)$ Fubini, applicable since the Haar measure is $\sigma$-finite by [F7], gives $\pi(f)\pi(g)=\int_N\int_Nf(m)g(n)\pi(mn)\,dm\,dn=\pi(f\ast g)$, and both sides extend by density; and $\pi(f)^*=\pi(f^*)$ by the adjoint computation and the inversion formula of [F1]. Nondegeneracy: for the approximate identity $e_U$ one has $\pi(e_U)\xi\to\xi$ because $\|\pi(e_U)\xi-\xi\|\le\int e_U(n)\|\pi(n)\xi-\xi\|\,dn$ and strong continuity makes the integrand small on $\operatorname{supp}e_U$ eventually. [F1, F2, F7, step 1.1]

3.1 Let $A$ be the norm closure of $\pi(L^1(N))$ in $\mathcal B(\mathcal H)$; it is a commutative C*-algebra (the image of the commutative $L^1(N)$ is a commutative $\ast$-algebra) and it is nonzero when $\mathcal H\ne0$ by [step 2.1]. For $y\in\Delta(A)$ the composite $y\circ\pi$ is a nonzero complex-linear multiplicative functional on $L^1(N)$: if it vanished on the dense subalgebra $\pi(L^1(N))$ then $y=0$ by continuity. Hence by [F3] there is $\chi\in\widehat N$ with $y(\pi(f))=\widehat f(\chi)$; therefore, using the isometry of [F4], $\|\pi(f)\|=\sup_{y\in\Delta(A)}|y(\pi(f))|\le\sup_{\chi\in\widehat N}|\widehat f(\chi)|=\|\widehat f\|_\infty$. [F3, F4, step 2.1]

4.1 The assignment $\widehat f\mapsto\pi(f)$ is well defined and linear because $\widehat f=0$ forces $\pi(f)=0$ by [step 3.1], and it is bounded for the uniform norm; since the Fourier transforms are uniformly dense in $C_0(\widehat N)$ by [F3], it extends uniquely to a bounded linear map $T:C_0(\widehat N)\to\mathcal B(\mathcal H)$ with $T(\widehat f)=\pi(f)$. Multiplicativity and $\ast$-preservation extend from the dense subalgebra of Fourier transforms, using continuity of the products, so $T$ is a nondegenerate star representation: $T(C_0(\widehat N))\mathcal H$ is dense because $T(\widehat e_U)\xi=\pi(e_U)\xi\to\xi$ for the approximate identity. [F3, step 2.1, step 3.1]

5.1 By [F5] there is a unique regular PVM $P$ on $\widehat N$ with $T(g)=\int_{\widehat N}g\,dP$ for all $g\in C_0(\widehat N)$; in particular $\pi(f)=\int_{\widehat N}\widehat f\,dP$ for every $f\in L^1(N)$, and $P(\widehat N)=I$. [F5, step 4.1]

6.1 Put $R(n)=\int_{\widehat N}\chi(n)\,dP(\chi)$, using the PVM just constructed. The PVM calculus gives $R(n)R(m)=R(nm)$ and $R(n)^*R(n)=R(n)R(n)^*=I$. For every sequence $n_j\to n_0$, $\|(R(n_j)-R(n_0))\xi\|^2=\int|\chi(n_j)-\chi(n_0)|^2\,dP_\xi\to0$ by dominated convergence; since $N$ is metrizable, this proves strong continuity. The zero Hilbert space has the zero PVM throughout, so the same conclusions hold there. [F6, F7, step 5.1]

6.2 For $f\in L^1(N)$ one has $\int_Nf(n)R(n)\,dn=\pi(f)$: the evaluation $(n,\chi)\mapsto\chi(n)$ is jointly continuous: restrict $n$ to a compact neighbourhood of $n_0$ and use uniform convergence of characters there together with continuity of the limiting character. Thus the kernel below is jointly Borel. Pairing with $\eta$ and commuting the bounded functional through the Bochner integral, $\langle\int_Nf(n)R(n)\,dn\,\xi,\eta\rangle=\int_Nf(n)\int_{\widehat N}\chi(n)\,dP_{\xi,\eta}(\chi)\,dn$, and Fubini, applied to the product of the $\sigma$-finite Haar measure and the finite measure $P_{\xi,\eta}$ by [F7], identifies this with $\int_{\widehat N}\widehat f\,dP_{\xi,\eta}=\langle\pi(f)\xi,\eta\rangle$ by [step 5.1]. Hence the continuous function $h(n)=\langle\pi(n)\xi,\eta\rangle-\langle R(n)\xi,\eta\rangle$ satisfies $\int_Nf h\,dn=0$ for every $f\in L^1(N)$; if $h(n_0)\ne0$, rotate $h$ by a scalar of modulus one so its value at $n_0$ has positive real part; a nonnegative compactly supported cutoff supported where that real part remains positive has a nonzero integral against $h$, a contradiction, so $h=0$. As $\xi,\eta$ were arbitrary, $\pi(n)=R(n)$ for every $n$, i.e. $\pi(n)=\int_{\widehat N}\chi(n)\,dP(\chi)$. [F1, F2, F6, F7, step 5.1]

7.1 Uniqueness of $P$: if $P'$ is another regular PVM on $\widehat N$ with $\pi(n)=\int\chi(n)\,dP'(\chi)$ for all $n$, then for every $f\in L^1(N)$, $\int\widehat f\,dP'=\int f(n)\pi(n)\,dn$ as above, so $\int g\,dP'=\int g\,dP$ for all $g$ in the uniformly dense algebra of Fourier transforms; both sides are bounded linear in $g\in C_0(\widehat N)$, so the equality holds on all of $C_0(\widehat N)$, and [F5] applied to the common representation gives $P'=P$. [F3, F5, F6, step 6.2]

8.1 Covariance: fix $k\in K$. The map $\chi\mapsto k\cdot\chi$ is a homeomorphism of $\widehat N$, so $Q(E):=P(k\cdot E)$ is a regular PVM, and $P_k(E):=\tau(k)^{-1}Q(E)\tau(k)$ is again a regular PVM. Its integrated representation is $\int\chi(n)\,dP_k(\chi)=\tau(k)^{-1}\int\chi(n)\,dP(k\cdot\chi)\tau(k)=\tau(k)^{-1}\pi(\alpha_k(n))\tau(k)=\pi(n)$ for every $n$, where the change of variables in the dual and the covariance relation were used. By [step 7.1] $P_k=P$, that is $\tau(k)P(E)\tau(k)^{-1}=P(k\cdot E)$. [F3, step 6.2, step 7.1]

9.1 Ergodicity: suppose $E$ is Borel and $P(E)$ is invariant under $\tau$, $\tau(k)P(E)\tau(k)^{-1}=P(E)$ for all $k$. For every $n$, $\pi(n)P(E)=P(E)\pi(n)$, since $P(E)$ is a spectral projection of $P$ and $\pi(n)=\int\chi(n)\,dP$. Hence the range of $P(E)$ is a closed subspace invariant under both $\pi(N)$ and $\tau(K)$; if the semidirect-product representation is irreducible, $P(E)=0$ or $P(E)=I$. This is precisely the ergodicity of the measure class of $P$ for the dual action. [F6, step 6.2, step 8.1]

10.1 Steps 5.1, 7.1 and 8.1 give existence, uniqueness and covariance of the regular PVM $P$, and [step 9.1] gives ergodicity under irreducibility; the zero-dimensional case $\mathcal H=\{0\}$ is the zero PVM and is immediate. [step 5.1, step 7.1, step 8.1, step 9.1, F8] ∎
