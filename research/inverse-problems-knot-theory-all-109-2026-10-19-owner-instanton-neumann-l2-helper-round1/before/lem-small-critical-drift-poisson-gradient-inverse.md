---
id: lem-small-critical-drift-poisson-gradient-inverse
kind: lemma
title: "A Poisson gradient inverse with a small critical drift in four dimensions"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-newtonian-potential-solves-poisson-distributionally
  - thm-global-w-two-p-estimate-for-the-laplacian-on-rn
  - thm-gagliardo-nirenberg-sobolev-inequality
  - thm-young-convolution-inequality
  - thm-holder-inequality-for-integrals
  - thm-riesz-fischer-completeness-of-l-p
  - thm-banach-fixed-point
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-monotone-convergence-for-the-integral
  - cor-locally-integrable-weakly-harmonic-functions-are-smooth
  - thm-liouville-theorem-for-bounded-harmonic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Swarnendu Sil, Topology of weak G-bundles via Coulomb gauges in critical dimensions, Lemmas 11–12, pp.9–11"
      url: "https://arxiv.org/pdf/1909.07308"
    - title: "John K. Hunter, Notes on Partial Differential Equations, §§2.7 and 3.7"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---

## Statement

Assume full AC. Fix $m\ge1$, $2<q<4$, and $q^*=4q/(4-q)$. There are constants $\delta=\delta(m,q)>0$ and finite constants $K_2=K_2(m)$ and $K_q=K_q(m,q)$, having the following property. Let $B:\mathbb R^4\to\operatorname{Hom}(\mathbb R^{4m},\mathbb R^m)$ be measurable, compactly supported and $\|B\|_4\le\delta$, where the pointwise norm is the operator norm. Let $f\in L^2(\mathbb R^4;\mathbb R^m)\cap L^q(\mathbb R^4;\mathbb R^m)$ be compactly supported. Set
$$\Phi(x)=\frac{1}{4\pi^2|x|^2},\qquad Nv=\Phi*v,\qquad Hv=\nabla Nv,$$
with the pole value chosen arbitrarily and all expressions interpreted as almost-everywhere classes. There is a unique $w\in L^4(\mathbb R^4;\mathbb R^{4m})$ satisfying
$$w=H(f+Bw).$$
It also belongs to $L^{q^*}$, satisfies $\|w\|_4\le2K_2\|f\|_2$ and $\|w\|_{q^*}\le2K_q\|f\|_q$, and is the gradient of
$$u=N(f+Bw)\in W^{2,q}_{\mathrm{loc}}(\mathbb R^4;\mathbb R^m),\qquad -\Delta u=f+B\nabla u.$$
The fixed point is the limit of $w_0=0$, $w_{j+1}=H(f+Bw_j)$ in both indicated gradient norms.

Consequently any compactly supported $v\in W^{1,2}(\mathbb R^4;\mathbb R^m)$ with $\nabla v\in L^4$ satisfying $-\Delta v=f+B\nabla v$ distributionally equals this $u$ almost everywhere and belongs to $W^{2,q}_{\mathrm{loc}}$. The smallness threshold is independent of the diameter of the supports: for the dilation $x=ry$, the transformed drift is $B_r(y)=rB(ry)$ and $\|B_r\|_4=\|B\|_4$.

## Statement references

[[thm-global-w-two-p-estimate-for-the-laplacian-on-rn|Whole-space Laplace estimate]]

[[thm-gagliardo-nirenberg-sobolev-inequality|Sobolev inequality]]

[[thm-banach-fixed-point|Contraction fixed point theorem]]

[Sil, *Topology of weak G-bundles via Coulomb gauges in critical dimensions*, Lemmas 11–12](https://arxiv.org/pdf/1909.07308)

## Facts & Assumptions

[F1] For compactly supported $L^1$ data, the Newtonian potential is locally integrable and satisfies $-\Delta Nv=v$ distributionally. The four-dimensional positive-minus-Laplacian kernel is the $\Phi$ written above ([[thm-newtonian-potential-solves-poisson-distributionally]]).

[F2] For $1<s<\infty$, the global Laplace estimate controls every second derivative of $z\in W^{2,s}(\mathbb R^4)$ by $C_s\|\Delta z\|_s$; for $1<s<4$, the Sobolev inequality controls $\|z\|_{4s/(4-s)}$ by $C_s\|\nabla z\|_s$ for $z\in W^{1,s}(\mathbb R^4)$ ([[thm-global-w-two-p-estimate-for-the-laplacian-on-rn]], [[thm-gagliardo-nirenberg-sobolev-inequality]]). Finite coefficient norms can be combined by enlarging these constants.

[F3] Young's convolution inequality, Holder's product inequality, completeness of $L^p$, and the contraction fixed point theorem are available ([[thm-young-convolution-inequality]], [[thm-holder-inequality-for-integrals]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-banach-fixed-point]]).

[F4] Smooth approximation is available in each finite-order Sobolev space, including order zero. Multiplying approximants by a fixed cutoff gives a common compact support. Smooth cutoffs between concentric balls exist ([[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[lem-smooth-bump-between-concentric-euclidean-balls]]). Integrals over increasing balls converge to the integral on the whole space ([[thm-monotone-convergence-for-the-integral]]).

[F5] A locally integrable distributionally harmonic function has a smooth harmonic representative; an entire harmonic function bounded above or below is constant ([[cor-locally-integrable-weakly-harmonic-functions-are-smooth]], [[thm-liouville-theorem-for-bounded-harmonic-functions]]).

[F6] Full AC supplies the Countable Choice inherited by these analytic suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** Full AC, $m,q$, and the compactly supported coefficient and source classes specified in the statement.

1.1 **The potential for smooth data.** Fix $s\in\{2,q\}$ and initially $v\in C_c^\infty(\mathbb R^4;\mathbb R^m)$ supported in $B_R$. The formula $Nv(x)=\int\Phi(y)v(x-y)\,dy$ permits differentiation of $v$ under the integral on every bounded set, since $\Phi$ is locally integrable and all relevant $y$ lie in a bounded set. Thus $Nv$ is smooth, with $-\Delta Nv=v$ by [F1]. Differentiating the kernel off the support gives $|D^kNv(x)|\le C_k\|v\|_1|x|^{-2-k}$ for $|x|>2R$ and $k=0,1$. Choose a fixed smooth cutoff $\chi=1$ on $B_1$ supported in $B_2$ and put $\chi_T(x)=\chi(x/T)$. For $T>2R$, $\Delta(\chi_TNv)=-v+2\nabla\chi_T\cdot\nabla Nv+(\Delta\chi_T)Nv$, and the last two terms have $L^s$ norm at most $C\|v\|_1T^{-4+4/s}$, which tends to zero. [F1, F4, given, construct, algebra]

2.1 **Global Hessians without a low-frequency inverse assumption.** Apply the first estimate of [F2] to the smooth compactly supported $\chi_TNv$. On any fixed ball it equals $Nv$ for large $T$, so step 1.1 gives $\|D^2Nv\|_{L^s(B_M)}\le C_s\|v\|_s$ after taking $T\to\infty$. Increasing $M$ to infinity by [F4] yields $\|D^2Nv\|_s\le C_s\|v\|_s$, with the Euclidean norm on the finitely many Hessian coefficients absorbed into $C_s$. This argument uses a compactly supported function in the global estimate, rather than assuming that $Nv$ itself lies in global $W^{2,s}$. [F2, F4, step 1.1, algebra]

3.1 **General compactly supported data.** For compactly supported $v\in L^s$, [F4] gives smooth $v_j\to v$ in $L^s$ with supports in one fixed ball; hence also $v_j\to v$ in $L^1$ by [F3]. On each bounded target ball, convolution with the restrictions of $\Phi$ and $\nabla\Phi$ to a sufficiently large ball is bounded on $L^s$ by Young's inequality: both kernels are locally integrable in four dimensions. Thus $Nv_j\to Nv$ and $\nabla Nv_j\to\nabla Nv$ in $L^s_{\mathrm{loc}}$, with the latter identification also following from the distributional derivative test identity. Step 2.1 on differences makes $D^2Nv_j$ Cauchy in global $L^s$; completeness and passage in the weak-derivative test identity identify its limit as $D^2Nv$. Therefore $Nv\in W^{2,s}_{\mathrm{loc}}$ and $\|D^2Nv\|_s\le C_s\|v\|_s$. Moreover $\nabla Nv\in L^s(\mathbb R^4)$: the local Young estimate handles a ball containing the support, and the off-support bound $|\nabla Nv(x)|\le C\|v\|_1|x|^{-3}$ handles its complement, since $s>4/3$. Hence each component of $Hv=\nabla Nv$ belongs to global $W^{1,s}$. [F1, F3, F4, step 2.1, algebra]

4.1 **The two consistent gradient bounds.** The second estimate of [F2] applied to each component of $Hv$ in step 3.1 gives $\|Hv\|_{s^*}\le K_s\|v\|_s$, where $s^*=4s/(4-s)$ and $K_s$ depends only on $m,s$, not on the support radius. When $v$ lies in both source spaces, these operators are the same distributional gradient of the same convolution, so their output classes agree. This proves bounded maps from compactly supported $L^2$ to $L^4$ and from compactly supported $L^q$ to $L^{q^*}$ with consistent values. [F2, step 3.1, algebra]

5.1 **Two contractions with the same iterates.** Choose $\delta=(2\max\{K_2,K_q\})^{-1}$. Since $1/2=1/4+1/4$ and $1/q=1/4+1/q^*$, Holder [F3] gives $\|Bz\|_2\le\delta\|z\|_4$ and $\|Bz\|_q\le\delta\|z\|_{q^*}$. The products are supported in the fixed compact support of $B$, so $Tz=H(f+Bz)$ is defined on each of the complete spaces $L^4$ and $L^{q^*}$. Step 4.1 makes its contraction constant at most $1/2$ in each space. Starting with zero, all iterates lie in their intersection, and [F3] gives convergence in both spaces. [F3, step 4.1, choose, construct]

6.1 **Identification, estimates and uniqueness.** On every bounded ball, either gradient-norm convergence from step 5.1 implies $L^1$ convergence by Holder. Hence the two limits define the same distribution and the same almost-everywhere class $w$. The fixed point equation in both spaces and step 4.1 yield $\|w\|_4\le K_2\|f\|_2+\tfrac12\|w\|_4$ and $\|w\|_{q^*}\le K_q\|f\|_q+\tfrac12\|w\|_{q^*}$, giving the stated estimates. Any $L^4$ fixed point is this $w$, by the contraction uniqueness in [F3]. [F3, step 4.1, step 5.1, algebra]

7.1 **An actual potential solution.** The class $s_0=f+Bw$ is compactly supported and lies in $L^2\cap L^q$ by steps 5.1–5.1. Set $u=Ns_0$. Step 3.1 gives $u\in W^{2,q}_{\mathrm{loc}}$, the fixed point equation gives $\nabla u=w$, and [F1] gives $-\Delta u=s_0=f+B\nabla u$ distributionally. This is an existence construction, with the Newtonian normalization specified in the statement. [F1, step 3.1, step 5.1, step 6.1, construct]

8.1 **Identification of compactly supported weak solutions.** Let $v$ be as in the consequent clause and put $s_1=f+B\nabla v\in L^2_c$. By [F1], $v-Ns_1$ is distributionally harmonic on all of $\mathbb R^4$, so [F5] gives a smooth entire harmonic representative. Outside a ball containing the supports, $v=0$ almost everywhere and $Ns_1=O(|x|^{-2})$ directly from the kernel formula and $s_1\in L^1_c$. The harmonic representative therefore tends to zero at infinity; equality almost everywhere there is equality everywhere with the smooth off-support potential. It is bounded on the remaining compact ball, so [F5] makes it identically zero. Thus $v=Ns_1$, whence $\nabla v=H(f+B\nabla v)$ is an $L^4$ fixed point. Step 6.1 gives $\nabla v=w$, so $s_1=s_0$ and $v=u$; step 7.1 proves the asserted regularity. [F1, F3, F5, step 6.1, step 7.1, algebra]

9.1 **Scaling and choice.** For $u_r(y)=u(ry)$, direct differentiation gives $-\Delta_yu_r=r^2f(ry)+rB(ry)\nabla_yu_r$. The four-dimensional change of variables gives $\|rB(r\cdot)\|_4=\|B\|_4$, while both $\|\nabla u_r\|_{q^*}$ and $\|r^2f(r\cdot)\|_q$ scale by $r^{2-4/q}$, and the analogous $L^4/L^2$ factors are one. The constants in step 4.1 are whole-space constants, so $\delta$ is independent of the compact supports. Full AC is inherited only through [F2] and the countable analytic selections in [F3]–[F6]. [F2, F3, F4, F6, step 4.1, step 5.1, step 7.1, step 8.1, algebra] ∎

## Source notes

The small-critical-drift fixed-point and uniqueness mechanism is the Lebesgue-space part of Sil's Lemmas 11–12, pp.9–11, whose full argument was read. The proof above uses a whole-space Newtonian normalization and simultaneous $L^4$ and $L^{q^*}$ gradient contractions, so it needs no unproved strong Dirichlet or Neumann solvability assertion. It supplies an inverse for the specified linear drift equation, not a nonlinear gauge-existence theorem.
