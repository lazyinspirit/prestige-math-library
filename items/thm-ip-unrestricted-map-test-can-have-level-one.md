---
id: thm-ip-unrestricted-map-test-can-have-level-one
kind: theorem
title: A non-eigenfeature can give an unrestricted Gaussian MAP test level one
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-gaussian-map-feature-test
  - thm-ip-map-test-level-and-power
  - thm-ip-isonormal-gaussian-posterior-law
  - def-countable-choice
  - def-axiom-of-choice
  - def-hilbert-space
  - def-hilbert-space-adjoint
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: The Axiom of Choice is inherited from the Gaussian posterior construction; Countable Choice is used by the shifted-operator and Hilbert-space interfaces. The null-direction scaling argument uses no further choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Remo Kretschmann and Frank Werner, Maximum a posteriori testing in statistical inverse problems, Theorem 2.6 and its proof"
      url: https://arxiv.org/pdf/2402.00686
---

## Statement

Assume the Axiom of Choice. Let $X,H$ be separable real Hilbert spaces, $K:X\to H$ bounded and linear, $\epsilon>0$, and let $U$ be a Borel Gaussian prior with mean $m_0$ and positive self-adjoint, injective, trace-class covariance $C_0$, independent of a jointly Gaussian centered family $Z$ indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$. Put $S=C_0^{1/2}$, $B=SK^*KS$, $R=(B+\epsilon^2I_X)^{-1}$. For a feature vector $h\in X$, define $\Phi_h=KSRSh$, $c_h=\langle Km_0,\Phi_h\rangle_H-\langle m_0,h\rangle_X$, and the raw test $\delta_h=\mathbf1\{Y_x(\Phi_h)>c_h\}$, where $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$. Suppose $C_0K^*K=K^*KC_0$, $h\ne0$, and $Bh$ is not a scalar multiple of $h$. Then the unrestricted null set $H_0=\{x\in X:\langle x,h\rangle_X\le0\}$ satisfies
$$\sup_{x\in H_0}\mathbb P_x\{\delta_h=1\}=1.$$
The supremum need not be attained at any finite parameter value.

## Statement references

[[alg-ip-gaussian-map-feature-test|Gaussian MAP feature test]]

[[thm-ip-map-test-level-and-power|Level, power, and weighted regularization of Gaussian MAP feature tests]]

[Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, Theorem 2.6 and its proof](https://arxiv.org/pdf/2402.00686)

## Facts & Assumptions

**Given:** The Gaussian inverse model, operators, feature, and test in the Statement, together with the commutation and non-eigenfeature hypotheses.

[F1] Under the commutation hypothesis, $K^*\Phi_h=B(B+\epsilon^2I)^{-1}h$, and the raw test has rejection probability $G((\langle x,K^*\Phi_h\rangle-c_h)/(\epsilon\|\Phi_h\|))$ when $\Phi_h\ne0$. [[thm-ip-map-test-level-and-power]]

[F2] The shifted normal operator $B+\epsilon^2I$ is invertible, and its inverse commutes with $B$. [[lem-hilbert-tikhonov-normal-operator-invertible]]

[F3] The adjoint identity is $\langle Kx,\Phi\rangle_H=\langle x,K^*\Phi\rangle_X$, and inner products satisfy Cauchy–Schwarz. [[def-hilbert-space-adjoint]], [[thm-cauchy-schwarz-in-an-inner-product-space]]

[A1] The Axiom of Choice is inherited from the posterior and polar-decomposition branches; Countable Choice is used for Hilbert adjoints and shifted-operator inversion. [[def-axiom-of-choice]], [[def-countable-choice]]



## Proof
1.1 Put $A=B(B+\epsilon^2I)^{-1}$. By [F1] and its inherited Axiom of Choice hypothesis [A1], $K^*\Phi_h=Ah$. If $Ah=\eta h$ for a real scalar $\eta$, multiply the identity by $B+\epsilon^2I$ and use [F2] to obtain $Bh=\eta(B+\epsilon^2I)h$, hence $(1-\eta)Bh=\eta\epsilon^2h$. The case $\eta=1$ forces $h=0$, contrary to the hypothesis; otherwise $Bh=\eta\epsilon^2(1-\eta)^{-1}h$. Thus any scalar dependence of $Ah$ and $h$ would make $Bh$ a scalar multiple of $h$. The assumed non-eigenfeature condition therefore implies $Ah\notin\operatorname{span}\{h\}$. [given, A1, F1, F2, algebra]

2.1 Let $w=Ah-\frac{\langle Ah,h\rangle_X}{\|h\|_X^2}h$. Then $w\ne0$, $\langle w,h\rangle_X=0$, and $\langle Ah,w\rangle_X=\|w\|_X^2>0$ by orthogonal projection. For $t>0$, $x_t=tw$ belongs to $H_0$. Moreover $Ah\ne0$, since otherwise $Bh=0$ by invertibility of $B+\epsilon^2I$ and $h$ would be an eigenvector with eigenvalue zero; so $K^*\Phi_h=Ah$ implies $\Phi_h\ne0$. [given, A1, F1, F2, F3, step 1.1, construct, algebra]

3.1 By [F3] and the inherited Axiom of Choice hypothesis [A1], the test statistic at $x_t$ has mean $\langle x_t,K^*\Phi_h\rangle_X=t\langle w,Ah\rangle_X=t\|w\|_X^2$ and positive standard deviation $\epsilon\|\Phi_h\|_H$. The exact tail formula [F1] gives $\mathbb P_{x_t}\{\delta_h=1\}=G\!\left(\frac{t\|w\|_X^2-c_h}{\epsilon\|\Phi_h\|_H}\right)\longrightarrow1$ as $t\to\infty$. Every $x_t$ is null, so the supremum over $H_0$ is at least this limit and at most one; it is therefore one. Since a nondegenerate normal tail is strictly below one at every finite threshold, the limiting sequence does not assert attainment. [given, A1, F1, F3, step 2.1, algebra] ∎
