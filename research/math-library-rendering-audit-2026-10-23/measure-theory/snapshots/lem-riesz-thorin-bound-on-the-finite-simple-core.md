---
id: lem-riesz-thorin-bound-on-the-finite-simple-core
kind: lemma
title: Riesz–Thorin estimate on the finite simple core
deps: [lem-endpoint-interpolation-simple-analytic-families, thm-hadamard-three-lines, lem-complex-lq-norm-from-finite-simple-dual-tests,
  thm-complex-holder-minkowski-and-the-quotient-norm, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-finite-and-countable-subadditivity-of-measures, thm-algebra-of-complex-derivatives]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Teschl Theorem 15.2 pp.414–415; Laugesen Theorem C.6 pp.168–173, including p.172 norm-recovery caveat
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces. Let T be a complex-linear map from the a.e. classes of complex finite simple functions of finite-measure nonzero set on X into measurable complex a.e. classes on Y. Suppose
$$\|Tf\|_{q_\ell}\le M_\ell\|f\|_{p_\ell}\quad(\ell=0,1),\qquad 1\le p_0,p_1<\infty,\quad 1\le q_0,q_1\le\infty,\quad 0\le M_0,M_1<\infty.$$
Then for $0<\theta<1$ and the reciprocal-affine exponents $p_\theta,q_\theta$,
$$Tf\in L^{q_\theta}(\nu),\qquad \|Tf\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}.$$
The same conclusion holds on arbitrary source and target measure spaces when $q_0,q_1<\infty$. At theta equal to zero or one use the given endpoint estimates, with no convention for $0^0$.

## Facts & Assumptions

[F1] Normalized finite-simple input and dual test functions have coefficientwise entire bounded-strip families with boundary norms one [[lem-endpoint-interpolation-simple-analytic-families]].

[F2] Complex Holder bounds bilinear integrals and the quotient norms are homogeneous [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F3] Finite sums of integrable complex functions can be integrated termwise [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] Finite sums and products of entire functions are entire [[thm-algebra-of-complex-derivatives]].

[F5] A bounded continuous closed-strip function holomorphic inside satisfies the geometric bound at every interior line, including zero boundary bounds [[thm-hadamard-three-lines]].

[F6] On a sigma-finite measure space bounded finite-simple dual tests prove Lq membership and recover the norm, including q=infinity [[lem-complex-lq-norm-from-finite-simple-dual-tests]].

[F7] Integrating a lower bound by a constant times an indicator gives the corresponding bound on its measure [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F8] Finite unions of finite-measure level sets have finite measure [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix an interior theta and write p,q for its exponents and r for the conjugate of q. If f is zero as a class, linearity gives Tf=0. Otherwise replace f by $f/\|f\|_p$. For a nonzero finite simple dual test replace g by $g/\|g\|_r$; zero tests already have zero integral. These normalizations are legal for nonzero finite simple classes of finite-measure support. The families in F1 then have input boundary norms one and dual boundary norms one, including the constant family when r=infinity. [F1, F2, given]

2.1 Write $f_z=\sum_j a_j(z)\mathbf1_{E_j}$ and $g_z=\sum_k b_k(z)\mathbf1_{F_k}$. Put $h_j=T\mathbf1_{E_j}$. The endpoint hypothesis puts each $h_j$ in both target endpoint spaces. Endpoint Holder with $\mathbf1_{F_k}$, which belongs to every conjugate space because its support has finite measure, proves $I_{jk}=\int h_j\mathbf1_{F_k}\,d\nu$ finite. Linearity gives $H(z)=\int(Tf_z)g_z\,d\nu=\sum_{j,k}a_j(z)b_k(z)I_{jk}$. This is a finite sum of products of entire coefficients, so it is entire and continuous on the closed strip. Their strip bounds and the finite constants $I_{jk}$ give a uniform bound for H on that whole strip. [F1, F2, F3, F4, step 1.1]

3.1 On each boundary line $\ell\in\{0,1\}$, Holder and the endpoint operator bound yield $|H(\ell+it)|\le\|Tf_{\ell+it}\|_{q_\ell}\|g_{\ell+it}\|_{r_\ell}\le M_\ell$. The precise closed-strip three-lines theorem therefore gives $|\int(Tf)g|=|H(\theta)|\le M_0^{1-\theta}M_1^\theta$. It also applies when an $M_\ell$ vanishes, because theta is interior and both powers are positive. [F2, F5, step 1.1, step 2.1]

3.2 For arbitrary measure spaces with finite $q_0,q_1$, choose representatives of the finitely many $h_j$ and let $Y_0=\bigcup_{j,m\ge1}\{|h_j|>1/m\}$. For each j,m, $m^{-q_0}\nu\{|h_j|>1/m\}\le\int|h_j|^{q_0}<\infty$. Thus each level set has finite measure, and their countable union is sigma-finite (finite unions give an increasing exhaustion). All the chosen $h_j$, hence the finite-sum representative of every $Tf_z$, vanish off $Y_0$. The restricted measure and its measurable sets satisfy the same endpoint bounds. [F7, F8, step 2.1]

4.1 For any unnormalized test s with $\|s\|_r\le1$, either it is the zero class or scaling the estimate for its norm-one version gives $|\int(Tf)s|\le M_0^{1-\theta}M_1^\theta$. Every such product is integrable by the endpoint Holder calculation. On sigma-finite Y the membership form of the dual-test lemma now proves $Tf\in L^q$ and bounds its norm. Scaling f back proves the desired estimate. No step assumed intermediate target membership before this test. [F2, F6, step 1.1, step 3.1]

5.1 Apply steps 1.1, 2.1, 3.1 and 4.1 with dual tests on $Y_0$, extended by zero to Y. Their integrals and norms are unchanged, and membership on $Y_0$ gives membership on Y because Tf vanishes off $Y_0$. The argument used only the finitely many source fibers, not source sigma-finiteness. If $Y_0$ is empty, Tf is zero and the estimate holds directly. The endpoint parameters are exactly the original hypotheses. [F6, step 4.1, step 3.2] ∎
