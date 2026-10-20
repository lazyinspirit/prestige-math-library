---
id: thm-normalized-parabolic-bellman-bounded-weak-solution
kind: theorem
title: "A normalized parabolic Bellman equation has a bounded weak solution"
status: draft
origin: session
axiom_base: "Full Axiom of Choice, through the existing Alexandrov supplier."
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-na-semiconvex-alexandrov-second-order-differentiability
  - thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-mollifier-approximation-in-distributions
  - cor-bolzano-weierstrass-in-rn
  - thm-heine-borel-rn
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, AMS233"
      url: "https://www.scribd.com/document/771799124/N-v-Krylov-Sobolev-and-Viscosity-Solutions-for-Fully-Nonlinear-Elliptic-and-Parabolic-Equations-Mathematical-Surveys-and-Monographs-Mathemati"
      locator: "Complete Section1.2 printed pp5-14, preceding finite-difference construction in Section1.1, and Theorem2.2.4 construction printed pp26-29; actual public full OCR read"
---

## Statement

Assume the Axiom of Choice, as required by the existing local semiconvex Alexandrov supplier. Fix d≥1 and λ>0. Let f:R×R^d→[0,∞) be bounded, globally Lipschitz, and semiconvex, with constants L_f,N_f≥0 such that

|f(z)−f(w)|≤L_f|z−w|, and f(z)+N_f|z|² is convex.

For the intended application f∈Cc∞; one may take L_f=sup|Df| and N_f=(sup||D²f||op)/2. Put n=d+1, V=||f||∞/(nλ), L=L_f/(nλ), N=N_f/(nλ). Define the compact control set C={a∈Sym_d:a≥0,tr a≤1}, and r(a)=1−tr a, k(a)=(r(a)det a)^(1/n).

There exists a bounded nonnegative globally L-Lipschitz v:R^(d+1)→R such that v≤V, v+N|z|² is convex, all weak first derivatives exist and are bounded by L in Euclidean norm, and all weak spatial second derivatives exist and are bounded. More precisely

−2NI≤D²_xv≤λv I almost everywhere.

For every control a the following inequality holds as distributions, and its bounded-function representative is nonpositive almost everywhere:

r(a)v_t+a:D²_xv−λv+k(a)f≤0.

Outside one common null set, the normalized Bellman equation holds:

max_{a∈C}{r(a)v_t+a:D²_xv−λv+k(a)f}=0.  (B)

In particular v_t≤λv and λvI−D²_xv≥0. No bound on mixed time-space or second time derivatives is asserted or needed. The constants controlling derivatives may depend on derivatives of f; the separate L^(d+1) height estimate is not claimed by this supplier.

## Facts & Assumptions

**Given:** Full AC, d, λ and f with the exact bounds/semiconvexity conditions in the Statement. The controls are all a≥0 with trace at most1.

[F1] The existing proved semiconvex Alexandrov theorem supplies a.e joint Peano quadratic expansions, not existence or measure-Hessian regularity.

[F2] The real spectral theorem diagonalizes each spatial PSD control.

[F3] Real L² duality and compact smooth test density hold on finite balls.

[F4] The local Lebesgue differentiation theorem recovers ball averages of locally integrable functions.

[F5] Unit-mass compact smooth mollifiers smooth locally integrable functions, permit differentiation on the kernel, and approximate distributions.

## Proof

**Proof technique:** positive finite-difference contraction, preserved semiconvexity, distributional bounds, and discrete quadratic contacts.

### A.  monotone discounted finite-difference construction

For each a choose an orthonormal eigenbasis e_i(a) with eigenvalues s_i(a)≥0. Full AC already assumed permits these choices; only the resulting operator is used. For h∈(0,1), on z=(t,x) define

L_h^a u(z)=Σ_i s_i(a)[u(t,x+he_i)−2u(t,x)+u(t,x−he_i)]/h²

+r(a)[u(t+h,x)−u(t,x)]/h.

Write q_h(a)=2tr a/h²+r(a)/h and P_hu=sup_a{[Σ_i s_i(a)(u(z+(0,he_i))+u(z−(0,he_i)))/h²+r(a)u(z+(h,0))/h+k(a)f(z)]/[λ+q_h(a)]}.

All off-center weights are nonnegative, their sum is q_h(a), and k(a)≤1/n by AM–GM applied to r and the d eigenvalues, whose sum is1. With Q_h=2/h²+1/h,

||P_hu−P_hw||∞≤[Q_h/(λ+Q_h)]||u−w||∞.

Thus iteration u_0=0,u_{j+1}=P_hu_j converges uniformly to a unique bounded fixed point v_h. This is also a direct proof of the needed fixed-point instance: consecutive errors are bounded by a geometric series, bounded functions are complete for uniform convergence, and the contraction estimate passes the limit through P_h. Its fixed-point equation is exactly

sup_a{L_h^av_h−λv_h+k(a)f}=0.  (FD)

Indeed multiplying each individual residual by its positive denominator preserves whether its supremum is zero, because all denominators lie between λ and λ+Q_h.

The interval0≤u≤V is invariant: the numerator is nonnegative, and at u=V it is at most q_h(a)V+||f||∞/n=(q_h(a)+λ)V. Hence 0≤v_h≤V.

The class of functions with Lipschitz constant≤L is invariant. Each individual affine control expression has Lipschitz constant at most [q_h(a)L+L_f/n]/[λ+q_h(a)]≤L; a supremum preserves this bound. Thus every iterate, and v_h, has that Lipschitz constant.

Likewise the class {u:u+N|z|² convex} is invariant. Translates of u have the same semiconvexity constant N; for each control the weighted sum of their semiconvexity constants and that of k(a)f is at most

[q_h(a)N+N_f/n]/[λ+q_h(a)]≤N.

Adding N|z|² makes each individual control expression convex (the remaining translated quadratic terms are affine plus constants). A supremum of convex functions is convex; hence P_h preserves the class. Uniform limits preserve its defining convexity inequalities. Therefore v_h+N|z|² is convex. This argument replaces a separate finite-difference second-difference comparison theorem.

Take h_j↓0. Boundedness and equicontinuity give a subsequence converging uniformly on each compact set to v: one can select convergent values at the countable rational points diagonally, then extend convergence uniformly on each compact through finite rational nets and the common Lipschitz bound. The bounds, nonnegativity and semiconvexity pass to v. No uniqueness of the continuum limit is asserted.

## Lemma A2: comparison with bounded smooth supersolutions (proved)

Let ψ be a bounded smooth function on all R^(d+1) with bounded uniformly continuous ψ_t and D²_xψ, and suppose

sup_a{r(a)ψ_t+a:D²_xψ−λψ+k(a)f}≤0 everywhere.

No sign assumption on ψ is needed. The centered second difference is an average of the corresponding directional second derivative, while the forward time difference is an average of ψ_t. Since tr a+r=1, uniform continuity gives a number E_h→0 such that

sup_a{L_h^aψ−λψ+k(a)f}≤E_h everywhere.

For example E_h=ω_{D²_xψ}(h)+ω_{ψ_t}(h) works with operator-norm spatial modulus and scalar time modulus. Hence Ψ_h=ψ+E_h/λ satisfies F_h[Ψ_h]≤0, or P_hΨ_h≤Ψ_h. Positivity of the off-center weights gives the one-sided contraction estimate

sup(v_h−Ψ_h)^+≤[Q_h/(λ+Q_h)]sup(v_h−Ψ_h)^+.

The supremum is finite and the factor is strictly less than1, so v_h≤Ψ_h everywhere. Let h=h_j↓0 to obtain v≤ψ. This proves the smooth comparison interface required to dominate the constructed solution by spatial sech and future-time supersolutions. It is not an imported viscosity uniqueness or stability assertion. For this purpose those explicit supersolutions must themselves satisfy the displayed normalized Bellman inequality and the bounded-uniformly-continuous derivative conditions; checking them belongs to barrier assembly.

## Lemma B: distributional control inequalities

Fix a and a nonnegative compactly supported smooth test function η. From (FD), L_h^av_h−λv_h+k(a)f≤0 pointwise. Integrate against η, transfer translations to η, and let h=h_j↓0. The adjoint centered differences converge uniformly on a common compact support to e_i^TD²_xη e_i; the adjoint forward time difference converges to −η_t. Local uniform convergence of v_h and boundedness therefore give

∫v[a:D²_xη−r(a)η_t−λη]+∫k(a)fη≤0.

This is exactly r(a)∂_tv+a:D²_xv−λv+k(a)f≤0 as distributions. It uses no evaluation of weak derivatives on an exceptional set.

A bounded distribution observation used below has an elementary proof. If |Tη|≤C||η||_1 for all compact smooth tests on a bounded ball, then T is integration against a function g with |g|≤C. To see this, ||η||_1≤|ball|^(1/2)||η||_2 gives a bounded functional on the dense test subspace of L². Extend by continuity and apply real L² duality. Since L² convergence on the ball also implies L¹ convergence, the original estimate extends to all L² tests. Testing with sgn(g)1_{|g|>C+ε} shows that this set has measure zero. Uniqueness on overlapping balls glues the representatives. This only uses finite-ball L² duality/test density, not a new compactness or measure-Hessian theorem.

## Lemma C: bounded weak derivatives without Monge–Ampère machinery

First mollify v in all variables with a nonnegative compactly supported unit-mass kernel. Denote the result vε. The common Lipschitz estimate passes to vε, so |Dvε|≤L. Since vε→v locally uniformly, integration by parts and the bounded-distribution observation give weak first derivatives of v bounded by L. Equivalently apply the observation to each directional derivative, then use a countable dense set of unit directions to recover the Euclidean norm bound.

Semiconvexity gives D²_zvε≥−2NI. For a=ee^T, |e|=1, tr a=1 and k=0, so Lemma B gives D_eev−λv≤0 as distributions. Convolution yields D_eevε≤λvε at every point. This is true for every e, first on a countable dense set of unit vectors and then by continuity. Hence

−2NI≤D²_xvε≤λvεI≤λVI.

Consequently the operator norm of every spatial Hessian is at most C=max(2N,λV), uniformly in ε; each entry is bounded by C. Apply the bounded-distribution observation to

T_ij(η)=∫v∂_{x_i x_j}η=lim_{ε↓0}∫(D_{x_i x_j}vε)η.

It gives actual weak spatial second derivatives in L∞, bounded by C. Passing directional inequalities to distributions and then their represented densities gives −2NI≤D²_xv≤λvI a.e. This proves bounded weak second derivatives, rather than merely Peano jets or absolutely continuous parts of unspecified measures. The control a=0 similarly gives v_t≤λv.

All inequalities in Lemma B now have bounded-function representatives. For a countable dense subset of C discard their null exceptional sets. Continuity of r(a),k(a), and a:D²v extends the inequalities to all controls on the resulting one common full-measure set. This is legitimate also at singular controls, since determinant is continuous on C.

## Lemma D: almost-everywhere equality, with the weak/Peano interface proved

Apply the actual local theorem thm-na-semiconvex-alexandrov-second-order-differentiability in dimension d+1 to v. At almost every z_0 there is a quadratic polynomial q with q(z_0)=v(z_0) and

v(z)=q(z)+o(|z−z_0|²).

Choose such a point where ball averages recover each bounded weak first and spatial second derivative g and also g². The actual local Lebesgue differentiation supplier gives these properties outside a null set. They imply average |g−g(z_0)|²→0 by expanding the square, hence average |g−g(z_0)|→0 by Cauchy–Schwarz. Thus z_0 is a strong Lebesgue point of every needed derivative. These finitely many requirements remove a null set. Their Taylor coefficients agree with the corresponding weak derivatives as follows. The first-order blowups [v(z_0+ry)−v(z_0)]/r converge locally uniformly to Dq(z_0)·y. Their distributional first derivatives are Dv(z_0+ry), which converge in local L¹ to the weak derivative values at z_0 by Lebesgue differentiation. Thus those values equal Dq(z_0). Similarly the second-order blowups [v(z_0+ry)−v(z_0)−rDq(z_0)·y]/r² converge locally uniformly to ½y^TD²q y. Their spatial second derivatives are the bounded weak spatial derivatives D²_xv(z_0+ry), converging in local L¹ to D²_xv(z_0). Taking distributional limits identifies the spatial block of D²q with those weak values. No Hessian-measure identification theorem or time second derivative is imported.

Fix ε>0. In a sufficiently small closed ball about z_0, q_+=q+ε|z−z_0|² is a strict upper contact and q_−=q−ε|z−z_0|² a strict lower contact, since the remainder is o(|z−z_0|²). Let z_j maximize v_{h_j}−q_+ on that ball. Uniform convergence ensures z_j→z_0, m_j=(v_{h_j}−q_+)(z_j)→0, and all its stencil neighbors remain inside the ball for large j. Nonnegative off-center coefficients then give

0=sup_a{L_{h_j}^av_{h_j}−λv_{h_j}+k(a)f}(z_j)

≤sup_a{L_{h_j}^aq_+−λq_++k(a)f}(z_j)−λm_j.

The spatial centered difference is exact on a quadratic polynomial. The time forward difference differs from its time derivative by (h_j/2)∂_{tt}q_+, uniformly in a since0≤r≤1. All other coefficients are bounded and f is uniformly Lipschitz, so the last supremum converges to

max_a{r(a)(q_+)_t+a:D²_xq_+−λq_++k(a)f}(z_0).

It is therefore nonnegative. Applying the same argument at a minimum of v_{h_j}−q_− reverses the inequality and gives a nonpositive limit for q_−. Let ε↓0, using continuity of the finite-dimensional maximum and bounded controls. The two limits coincide, so the value for q is zero. The coefficient identification just proved makes this precisely (B) for the actual weak derivatives. Thus equality is proved a.e.; merely knowing the one-sided distribution inequalities was not substituted for equality.

## Optional consequence: exact product equation

Let S=λv−v_t and H=λvI−D²_xv. They are nonnegative almost everywhere. At a point where (B) holds, it reads max_{r≥0,a≥0,r+tr a=1}{−rS−a:H+(r det a)^(1/n)f}=0.

AM–GM on rS and the d eigenvalues of a^(1/2)Ha^(1/2) shows that the inequalities for all normalized controls imply f≤n(S det H)^(1/n) when S,H are positive; insert a proportional to H^(−1) and r proportional to S^(−1) for the minimizing ratio. The same conclusion in the degenerate case follows by replacing S,H with S+δ,H+δI and letting δ↓0, exactly as in section2 of completed-reductions-and-exact-gap.md. Conversely if S,H are positive and f<n(S det H)^(1/n), every normalized control gives a strictly negative value: for interior controls use strict AM–GM comparison, and on the control boundary r det a=0 while rS+a:H>0. Compactness then makes their maximum strictly negative, contradicting (B). If either S or H is singular their product is zero, and the already proved inequality forces f=0. Therefore

(λv−v_t)det(λvI−D²_xv)=(f/(d+1))^(d+1) almost everywhere.

This supplies the exact product identity needed for the lead owner's height proof. It is a consequence of a genuinely constructed solution, not a Monge–Ampère existence assumption.



## Source notes

Mathematical source: N. V. Krylov, Sobolev and Viscosity Solutions for Fully Nonlinear Elliptic and Parabolic Equations, AMS233, DOI10.1090/surv/233, Section1.1 finite-difference method, complete Section1.2 printed pp5–14, and Theorem2.2.4 construction printed pp26–29. The actual public full OCR was read through normal web open at https://www.scribd.com/document/771799124/N-v-Krylov-Sobolev-and-Viscosity-Solutions-for-Fully-Nonlinear-Elliptic-and-Parabolic-Equations-Mathematical-Surveys-and-Monographs-Mathemati . This is a fresh source reading, not a claim that the earlier blocked AMS route succeeded. Source OCR contains sign/index/normalization errors; the displayed operators here were independently derived from the positive-weight fixed point and its adjoint. In particular the discount is −λv and the quadratic forward-difference error has factor1/2. The proof above is a specialized independent derivation, avoiding the source's general involvement-matrix/measure-Hessian argument.
