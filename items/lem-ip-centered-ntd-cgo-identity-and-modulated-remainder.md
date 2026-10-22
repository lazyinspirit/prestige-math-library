---
id: lem-ip-centered-ntd-cgo-identity-and-modulated-remainder
kind: lemma
title: Centered NtD data control the exact CGO identity with its modulation factor
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-ip-centered-neumann-sequence-map-and-differentiability
  - lem-ip-collared-liouville-potential-and-hone-recovery
  - lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice
  - lem-ip-calderon-boundary-trace-quotient-identification
  - thm-plancherel
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-compact-support-zero-extension-in-wkp
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorem 6.9 and equation (6.19); the Fourier modulation is retained explicitly here
dependency_level: 2
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Let $\Omega=B_1\subset\mathbb R^3$, and let $\sigma_j=1+a_j$ be positive real conductivities with $a_j$ supported in $\overline{B_\rho}$, $\|a_j\|_{H^s}\le A$, $5/2<s<7/2$, $0<\rho<1$, and $m\le\sigma_j\le M$, for fixed positive bounds. Put $g_j=\sqrt{\sigma_j}$, $q_j=g_j^{-1}\Delta g_j$, $Q=q_1-q_2$, and $N=\|Q\|_{H^{-1/2}(\mathbb R^3)}$. Let $\mathscr N_j$ be the boundary-mean-zero Neumann-to-Dirichlet map for $\sigma_j$ on $L^2_0(S^2)$, and define the actual data difference by the centered voltage sequences
$$\delta=\left(\sum_{\ell\ge1}\sum_{k=1}^{2\ell+1}\|(\mathscr N_1-\mathscr N_2)Y_{\ell k}\|_{L^2(S^2)}^2\right)^{1/2}.$$
This quantity is finite. If $U_j=e^{i\zeta_j\cdot x}(1+r_j)$ are the solutions from the positive-Sobolev CGO lemma, then
$$\int_\Omega Q U_1U_2\,dx=\int_{S^2}f_1(\mathscr N_2-\mathscr N_1)f_2\,dS,\qquad f_j=\partial_\nu U_j\big|_{S^2},$$
and the fluxes $f_j$ have mean zero. The boundary pairing is bilinear, without complex conjugation. In particular, there are $C,T>0$ depending only on the fixed class such that for $t\ge T$ and $|\xi|\le t$ one can choose null phases with $\zeta_1+\zeta_2=-\xi$, $|\zeta_j|=\sqrt2t$, and obtain the rigorous estimate
$$|\widehat Q(\xi)|\le C\delta e^{Ct}+C\langle\xi\rangle^{1/2}t^{-1}N.$$
The factor $\langle\xi\rangle^{1/2}$ is part of this conclusion; this lemma does not assert the sharper stability estimate that would follow from dropping it.

## Statement references

[[lem-ip-centered-neumann-sequence-map-and-differentiability]]

[[lem-ip-collared-liouville-potential-and-hone-recovery]]

[[lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice]]

[Weidling, Theorem 6.9](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** The choice assumptions, conductivity class, potentials, data norm and CGO solutions in the Statement.

[F1] The centered voltage sequences are square summable, and the boundary-mean-zero variational Neumann solutions obey uniform $H^1$ energy estimates. [[lem-ip-centered-neumann-sequence-map-and-differentiability]]

[F2] The potentials belong uniformly to $H^{s-2}$ and have compact support in $\overline{B_\rho}$; the conductivities and their square roots and inverses have uniformly bounded $C^1$ norms. [[lem-ip-collared-liouville-potential-and-hone-recovery]]

[F3] The CGO remainders have $H^{1/2}$ norm $O(t^{-1})$, uniformly bounded $L^\infty$ norm, and $H^2$ norm $O(t)$ on $B_2$. [[lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice]]

[F4] The boundary trace is bounded from $H^1(B_1)$ into $L^2(S^2)$. [[lem-ip-calderon-boundary-trace-quotient-identification]]

[F5] The divergence theorem on a bounded $C^1$ domain gives Green's identity for smooth functions; the complex bilinear form follows by real and imaginary parts. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[F6] Ambient smooth restrictions are dense in $H^2(B_1)$, so Green identities for smooth approximants pass to the $H^2$ CGO solutions using the trace bound [F4]. [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]]

[F7] Tonelli's theorem permits interchanging the nonnegative Fourier integrals in the fractional difference identity below. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F8] Compactly supported Sobolev classes extend by zero with their weak derivatives unchanged. [[lem-compact-support-zero-extension-in-wkp]]

[A1] All three choice assumptions are retained from [F1]–[F8]. [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 The energy argument in [F1] applies to every mean-zero $f\in L^2(S^2)$: the functional $v\mapsto\int f\overline{\operatorname{Tr}v}$ is bounded on the boundary-mean-zero $H^1$ subspace by [F4], and its uniformly coercive conductivity form has a unique solution with norm at most $C\|f\|_2$. This defines a bounded map $\mathscr N_j:L^2_0\to L^2_0$. Its centered sequence columns are those in [F1], so their difference has finite squared sum. For a finite current expansion $f=\sum c_{\ell k}Y_{\ell k}$, Cauchy–Schwarz gives $\|(\mathscr N_1-\mathscr N_2)f\|_2\le\delta(\sum|c_{\ell k}|^2)^{1/2}$. Density and boundedness extend this to every $f\in L^2_0$. Finally the bilinear symmetry $\int f\mathscr N_jh=\int h\mathscr N_jf$ follows by testing the two weak equations against one another, using real coefficients and complex bilinear extension. [A1, F1, F4, given, algebra]

2.1 Put $u_j=U_j/g_j$. The weak Liouville identity gives $\operatorname{div}(\sigma_j\nabla u_j)=0$: expand $\sigma_j\nabla(U_j/g_j)=g_j\nabla U_j-U_j\nabla g_j$, whose divergence is $g_j\Delta U_j-U_j\Delta g_j=0$. Products are legitimate by [F2]–[F3]; one may also verify the equality first on smooth approximations and pass in distributions. Since $g_j=1$ on a full collar of $S^2$, the boundary normal flux of $u_j$ is exactly $f_j=\partial_\nu U_j$. It belongs to $L^2$ because $U_j\in H^2(B_2)$ and [F4] applies to each first derivative. The divergence theorem [F5] gives the Green identity for smooth approximants; density [F6] and trace continuity [F4] pass it to the $H^2$ CGO solutions on $B_1$. On the collar $U_j$ is harmonic and the coefficient is identically one. Taking the test function one shows $\int f_j=0$. Thus $\operatorname{Tr}u_j=\mathscr N_j f_j+c_j$ for a constant $c_j$. [A1, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Subtract the two bilinear Schrödinger Green identities [F5]–[F6], testing the $j=1$ equation against $U_2$ and the $j=2$ equation against $U_1$. Their gradient terms cancel, giving $\int Q U_1U_2=\int_{S^2}(f_1\operatorname{Tr}U_2-f_2\operatorname{Tr}U_1)$. Since $U_j=u_j$ on the boundary, step 2.1 identifies these traces with $\mathscr N_jf_j+c_j$. The constant terms disappear because the fluxes have mean zero; the symmetry from step 1.1 gives exactly the displayed centered NtD identity. All volume terms are integrable since $Q\in L^2$ and $U_j\in H^2(B_2)\subset L^\infty(B_1)$; boundedness follows, for example, by weighted Fourier Cauchy–Schwarz after multiplication by an interior cutoff. [A1, F2, F3, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 If $|\zeta_j|=\sqrt2t$, [F3] and differentiation of the exponential give $\|U_j\|_{H^2(B_1)}\le Ce^{Ct}t^3$ for $t\ge T$. The trace bound on first derivatives then gives $\|f_j\|_2\le Ce^{Ct}$, increasing $C$ to absorb the polynomial. The operator-norm bound in step 1.1 and Cauchy–Schwarz in the bilinear boundary pairing yield $|\int Q U_1U_2|\le C\delta e^{Ct}$. [F3, F4, step 1.1, step 3.1, algebra]

5.1 For smooth compactly supported $w$ put $[w]^2_{1/2}:=\iint|w(x)-w(y)|^2|x-y|^{-4}\,dx\,dy$. Translation, Plancherel and Tonelli [F7] give $$[w]^2_{1/2}=\int|\widehat w(\xi)|^2\left(\int\frac{|e^{i\xi\cdot h}-1|^2}{|h|^4}\,dh\right)d\xi=c_3\int|\xi||\widehat w(\xi)|^2d\xi,$$ where rotation and dilation give the inner integral, and $0<c_3<\infty$ follows from $|e^{iu}-1|\le\min\{2,|u|\}$. Thus $\|w\|_{H^{1/2}}^2\asymp\|w\|_2^2+[w]^2_{1/2}$. Restrict each $H^2(B_2)$ remainder to $B_1$ and use [F6] to approximate it there by ambient smooth functions; multiplication by a cutoff supported in $B_1$ and [F8] extend the products to $H^2(\mathbb R^3)$, so the norm comparison extends to these cutoff remainders. For bounded compactly supported factors the identity $f(x)g(x)-f(y)g(y)=f(x)(g(x)-g(y))+g(y)(f(x)-f(y))$ then yields $\|fg\|_{H^{1/2}}\le C(\|f\|_\infty\|g\|_{H^{1/2}}+\|g\|_\infty\|f\|_{H^{1/2}})$. For $\xi\ne0$, choose real orthonormal $d_1,d_2$ perpendicular to $\xi$ and set $\zeta_1=-\xi/2+\sqrt{t^2-|\xi|^2/4}\,d_2+itd_1$, $\zeta_2=-\xi/2-\sqrt{t^2-|\xi|^2/4}\,d_2-itd_1$; for $\xi=0$ choose any orthonormal pair. Direct expansion gives $\zeta_j\cdot\zeta_j=0$, $\zeta_1+\zeta_2=-\xi$ and $|\zeta_j|=\sqrt2t$. Hence $U_1U_2=e^{-i\xi\cdot x}(1+r_1+r_2+r_1r_2)$. Choose cutoffs $\chi,\eta\in C_c^\infty(B_1)$ with $\chi=1$ on $B_\rho$ and $\eta=1$ on $\operatorname{supp}\chi$. Applying the product estimate to $\chi r_j$ and $\eta r_j$, and [F3], gives $\|\chi(r_1+r_2+r_1r_2)\|_{H^{1/2}(\mathbb R^3)}\le C/t$. Fourier translation and $\langle\eta+\xi\rangle\le\sqrt2\langle\eta\rangle\langle\xi\rangle$ then give $\|e^{-i\xi\cdot x}\chi(r_1+r_2+r_1r_2)\|_{H^{1/2}}\le C\langle\xi\rangle^{1/2}/t$. [A1, F2, F3, F6, F7, F8, step 4.1, choose, algebra]

6.1 Extract the Fourier coefficient of $Q$ from the exact product identity in step 5.1. Its remainder is precisely the signed pairing of $Q$ with $e^{-i\xi\cdot x}\chi(r_1+r_2+r_1r_2)$, not with the unmodulated remainder. Weighted Fourier Cauchy–Schwarz bounds its absolute value by $CN\langle\xi\rangle^{1/2}/t$. Combine this with step 4.1 and absorb the fixed unitary Fourier factor $(2\pi)^{-3/2}$ into $C$. This proves the stated estimate with its modulation factor retained. [F2, step 4.1, step 5.1, algebra] ∎
