---
id: thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel
kind: theorem
title: Mean-zero Hilbert–Schmidt operators on a compact boundary have square-integrable kernels
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-l-two-kernels-give-hilbert-schmidt-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Lemma 3.6 and its proof, identification of Hilbert–Schmidt operators with square-integrable kernels, printed pp. 15–16."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $M=\partial\Omega$ be the compact smooth boundary in the boundary spectral setting, let $P_0$ be projection onto $L^2_0(M)$, and let $T:L^2_0(M)\to L^2_0(M)$ be Hilbert–Schmidt. Extend $T$ to $\widetilde T:L^2(M)\to L^2(M)$ by $\widetilde T=\iota_0TP_0$, where $\iota_0$ is inclusion. Then there is a unique $\kappa_T\in L^2(M\times M)$ such that
$$\widetilde T f(x)=\int_M\kappa_T(x,y)f(y)\,dS_y\quad\text{for almost every }x\text{ and every }f\in L^2(M),$$
and
$$\|\kappa_T\|_{L^2(M\times M)}=\|T\|_{\mathrm{HS}}.$$
The kernel has zero mean in each variable: $\int_M\kappa_T(x,y)\,dS_y=0$ for almost every $x$, and $\int_M\kappa_T(x,y)\,dS_x=0$ for almost every $y$.

## Statement references

[[lem-ip-boundary-spectral-counting-and-sobolev-scale|The compact boundary and its separable L2 spectral basis.]]

[[thm-l-two-kernels-give-hilbert-schmidt-operators|Square-integrable kernels define Hilbert–Schmidt operators with the same norm.]]

[de Hoop et al., Lemma 3.6: the kernel/operator identification](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice, $M$, $P_0$, and the Hilbert–Schmidt operator $T$ in the statement.

[F1] The compact boundary $L^2(M)$ is separable and has a countable orthonormal basis; $L^2_0(M)$ is the orthogonal complement of the normalized constant. ([[lem-ip-boundary-spectral-counting-and-sobolev-scale]])

[F2] For an $L^2$ kernel on finite-measure spaces, the associated integral operator is Hilbert–Schmidt and its Hilbert–Schmidt norm equals the kernel's $L^2$ norm. ([[thm-l-two-kernels-give-hilbert-schmidt-operators]])

[F3] Fubini's theorem holds on the finite product surface measure. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[A1] The Axiom of Choice is used to choose an orthonormal basis in the mean-zero Hilbert space. ([[def-axiom-of-choice]])

[A2] Countable Choice is used for the countable eigenbasis and product-section interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Let $c_0=|M|^{-1/2}\mathbf1$ and choose a countable orthonormal basis $(c_j)_{j\ge1}$ of $L^2_0(M)$, using [A1] and separability [F1]. Extend $T$ by $\widetilde T c_0=0$ and $\widetilde T c_j=Tc_j$. The Hilbert–Schmidt condition means $\sum_{j\ge1}\|Tc_j\|_2^2<\infty$. Choose measurable representatives and define $\kappa_N(x,y)=\sum_{j=1}^{N}(Tc_j)(x)\overline{c_j(y)}$. For $i\ne j$, the summands are orthogonal in $L^2(M\times M)$ because their $y$-factors are orthogonal; Fubini [F3] gives $\|\kappa_N-\kappa_{N'}\|_2^2=\sum_{j=N'+1}^{N}\|Tc_j\|_2^2$ for $N>N'$. Thus $(\kappa_N)$ is Cauchy and converges to $\kappa_T\in L^2(M\times M)$ with $\|\kappa_T\|_2^2=\sum_{j\ge1}\|Tc_j\|_2^2=\|T\|_{\mathrm{HS}}^2$. [A1, F1, F3, given, construct]

2.1 For a finite linear combination $f=\sum_{j=0}^{m}a_jc_j$, orthonormality and the definition of $\kappa_N$ give $\int_M\kappa_N(x,y)f(y)\,dS_y=\sum_{j=1}^{\min(N,m)}a_jTc_j(x)$. Passing to the limit in $N$ gives $\widetilde T f$ in $L^2(M)$. By [F2], the integral operator $K_{\kappa_T}$ is bounded on $L^2(M)$ with norm at most $\|\kappa_T\|_2$; finite linear combinations of the basis are dense, so continuity of $K_{\kappa_T}$ and $\widetilde T$ extends the equality to every $f\in L^2(M)$. [F1, F2, step 1.1, given]

3.1 Since $\widetilde T c_0=0$, step 2.1 with $f=c_0$ yields $\int_M\kappa_T(x,y)\,dS_y=0$ for almost every $x$. Since the range of $\widetilde T$ lies in $L^2_0(M)$, for every $f\in L^2(M)$ Fubini gives $0=\int_M\widetilde T f(x)\,dS_x=\int_M f(y)(\int_M\kappa_T(x,y)\,dS_x)\,dS_y$. The inner section is in $L^2(M)$ by Cauchy–Schwarz and [F3]; its pairing with every $f$ vanishes, so it is zero almost everywhere. This proves the two zero-mean properties. [F3, step 2.1, given, algebra]

3.2 If $\kappa'$ is another $L^2$ kernel for $\widetilde T$, let $q=\kappa_T-\kappa'$. For every pair of basis vectors $c_i,c_j$, the coefficient $\int_{M\times M}q(x,y)c_j(y)\overline{c_i(x)}\,dS_xdS_y$ is zero because both kernels represent the same operator. For each fixed $j$, the section coefficient $g_j(x):=\int_Mq(x,y)c_j(y)\,dS_y$ belongs to $L^2(M)$ by Cauchy–Schwarz and Fubini, and its pairing with every $c_i$ is zero by the preceding product coefficient identity. Completeness of $(c_i)$ gives $g_j=0$ almost everywhere. Countable Choice supplies one conull set on which all these section coefficients vanish. For each $x$ in that set, $q(x,\cdot)$ is orthogonal to every member of the conjugate basis $(\overline{c_j})_{j\ge0}$, since $\langle q(x,\cdot),\overline{c_j}\rangle=\int_M q(x,y)c_j(y)\,dS_y=0$. The conjugates of an orthonormal basis form an orthonormal basis, so $q(x,\cdot)=0$ there. Hence $q=0$ in $L^2(M\times M)$, proving uniqueness. [A2, F1, F3, step 2.1, given]

4.1 The kernel is unique, has the prescribed zero-mean convention, and has the exact norm in step 1.1. This establishes the claimed kernel representation without relying on the reverse implication of [F2]. [F2, step 1.1, step 2.1, step 3.1, step 3.2] ∎
