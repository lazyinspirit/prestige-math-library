---
id: thm-gr-tt-plane-wave-solutions
kind: theorem
title: "TT plane waves with arbitrary bounded profiles solve the linearized vacuum equations, are in harmonic gauge, and give Lorentzian small-amplitude metrics with a quadratic Einstein-tensor residual"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-plane-wave-perturbation, lem-gr-null-phase-coordinate, def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-lorentzian-objects, def-lorentz-form-and-inertia, def-definiteness-inertia-and-signature-data-over-the-reals, def-gr-smooth-covariant-two-tensor-field, def-causal-classification-of-lorentz-vectors, def-compact-space, thm-heine-cantor-metric, def-real-order, lem-of-square-positive, lem-gr-lorentzian-perturbations-remain-lorentzian, cor-taylor-lagrange-and-cauchy-remainders, def-gr-inverse-metric-and-musical-isomorphisms, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  lem-gr-null-phase-coordinate: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-compact-space: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  def-real-order: mathematical-premise
  lem-of-square-positive: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
  cor-taylor-lagrange-and-cauchy-remainders: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.30)-(6.33) and (6.53)-(6.54): the plane-wave solutions with null wave vector, the transverse-traceless gauge and the two-component amplitude, printed pp. 148-152 (PDF pp. 155-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1 (5.17)-(5.22): gravitational waves in vacuum as solutions of the linearised equation with two polarisation states, printed pp. 209-212 (PDF pp. 216-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3 (7.37)-(7.49): the source-free wave equation, plane-wave solutions with null wavevector and the two independent polarizations, printed pp. 76-79 (PDF pp. 77-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart and let $A_+,A_\times\in C^\infty(\mathbb R)$ be bounded, with
$M:=\sup_{\mathbb R}\max\{|A_+|,|A_\times|\}$. Let $h$ be the TT planar
perturbation of [[def-gr-plane-wave-perturbation]] clause (b) with these
amplitudes: $h_{11}(x)=A_+(u(x))$, $h_{22}(x)=-A_+(u(x))$,
$h_{12}(x)=h_{21}(x)=A_\times(u(x))$, and all other components zero, where
$u=x^0-x^3$. Let $\bar h_{ab}=h_{ab}-\tfrac12\eta_{ab}\eta^{cd}h_{cd}$ be the
trace reverse and $\Box$ the flat d'Alembertian of
[[def-gr-flat-linearized-perturbation]] clause (c). Then:

**(a) Small-amplitude metrics.** If $M>0$ and $|\lambda|<1/(2M)$, the field
$g(\lambda):=\eta+\lambda h$ with components
$g_{ab}(\lambda)=\eta_{ab}+\lambda h_{ab}$ is a smooth Lorentzian metric of
signature $(-,+,+,+)$ on $\mathbb R^4$, and $\partial_0$ is a smooth
future-directed timelike vector field for it. If $M=0$, then $h=0$ and the
claim is trivial.

**(b) Harmonic gauge and wave equation.** The perturbation is traceless,
$\eta^{cd}h_{cd}=0$, so $\bar h=h$; it is in harmonic gauge,
$\partial^a\bar h_{ab}=0$ componentwise; and $\Box\bar h_{ab}=0$
componentwise. Hence the first-order Einstein coefficient vanishes,
$G^{(1)}_{ab}(h)=0$: $h$ solves the linearized vacuum equations in the sense
of [[def-gr-plane-wave-perturbation]] clause (e), and it is transverse for
the wave covector of clause (a) of that definition.

**(c) Quadratic residual.** Let $K\subseteq\mathbb R^4$ be a nonempty compact set and let
$L>0$. With
$M_K:=\sup_K\max_{a,b}|h_{ab}|+L^{-1}\sup_K\max_{a,b,c}|\partial_ch_{ab}|+L^{-2}\sup_K\max_{a,b,c,d}|\partial_c\partial_dh_{ab}|$,
there are $\lambda_0>0$ and $C_K<\infty$, depending on $K$, $h$, $L$ but not
on $\lambda$, such that for every $|\lambda|\le\lambda_0$ the metric
$\eta+\lambda h$ is Lorentzian on $K$ and

$$\bigl|G_{ab}(\eta+\lambda h)(p)\bigr|\le C_K\,\lambda^2 M_K^2/L^2\qquad(p\in K,\ a,b=0,1,2,3),$$

where $G_{ab}$ is the Einstein tensor of the truncated metric $\eta+\lambda h$.
This is an estimate for the mathematical tensor $G$ in the stated chart norm;
it makes no physical field-law claim.

## Facts & Assumptions

**Given:** The flat model with inertial chart, bounded smooth profiles $A_+,A_\times$ with bound $M$, the TT planar perturbation $h$ and a nonempty compact $K\subseteq\mathbb R^4$ with a length scale $L>0$.

[F1] The phase coordinate $u=x^0-x^3$ has the properties $\Box(f\circ u)=0$ and $(\partial_0+\partial_3)(f\circ u)=0$ for every smooth $f$, and for a planar profile $F$ the planar perturbation has $\partial_ch_{ab}=F'_{ab}(u)n_c$ and $\Box h_{ab}=0$; for a TT profile the trace and the divergence vanish ([[lem-gr-null-phase-coordinate]] clauses (b)-(c)).

[F2] The first-order coefficients of [[def-gr-flat-linearized-perturbation]] are the $\lambda$-derivatives at $0$ of the corresponding families, and in harmonic gauge $\partial^a\bar h_{ab}=0$ the first-order Einstein tensor is $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}$ ([[def-gr-flat-linearized-perturbation]] clauses (b)-(d), [[thm-gr-flat-linearized-curvature-and-gauge]] clauses (c)-(d)).

[F3] A symmetric bilinear form on $\mathbb R^4$ is a Lorentz form exactly when it is nondegenerate with inertia $(3,1,0)$; inertia is read from a diagonalization and is basis-independent ([[def-lorentz-form-and-inertia]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]). A smooth field of Lorentz forms is a Lorentzian metric, and a smooth vector field $T$ with $g(T,T)<0$ everywhere orients it ([[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[F4] Every continuous real function $f$ on a nonempty compact $K$ is bounded: the relatively open sets $\{p\in K:|f(p)|<m\}$, for positive integers $m$, cover $K$; a finite subcover gives a uniform bound ([[def-compact-space]]). Thus the real suprema of the nonnegative continuous component maxima used below are finite. No attainment claim is needed. For real numbers, $2|ab|\le a^2+b^2$ and a sum of squares of real numbers is nonnegative ([[lem-of-square-positive]], [[def-real-order]]).

[F5] The chart Einstein-tensor formula is a smooth function of the finite jet $(A,\partial A,\partial^2A)$ wherever $\eta+A$ is nondegenerate; it vanishes at $A=0$ and its derivative there is $G^{(1)}(A)$. The numerical control $B_K$ is the weighted chart functional of [[thm-gr-flat-linearized-curvature-and-gauge]] clause (f); for fixed $L>0$, it is $B_K(A)=b_0+Lb_1+L^2b_2$, where $b_j$ is the supremum of the maximum absolute value of the order-$j$ derivatives. Clause (f) supplies $\delta_0>0$ and $C<\infty$ such that $B_K(A)\le\delta_0$ implies the residual bound $|G_{ab}(\eta+A)-G^{(1)}_{ab}(A)|\le C B_K(A)^2/L^2$ on $K$. Symmetric matrices within maximum-entry distance $1/8$ of $\eta$ are Lorentzian, and the finite-dimensional Taylor remainder is bounded on compact subsets of the invertible-metric jet domain ([[lem-gr-lorentzian-perturbations-remain-lorentzian]] clause (a), [[cor-taylor-lagrange-and-cauchy-remainders]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[thm-gr-flat-linearized-curvature-and-gauge]] clauses (a), (e), [[def-gr-flat-linearized-perturbation]] clause (b)).

[F6] Component functions of smooth fields and the operations of raising, lowering and contraction preserve smoothness; a smooth symmetric-matrix-valued function of $u$ defines a smooth symmetric field on $\mathbb R^4$ ([[def-gr-smooth-covariant-two-tensor-field]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[lem-gr-null-phase-coordinate]] clause (c)).

## Proof

**Proof technique:** direct computation of the components and the gauge condition, followed by a finite-dimensional Taylor estimate for the residual.

1.1 (Lorentzian signature.) In the inertial chart the components of $g(\lambda)=\eta+\lambda h$ are $g_{00}=-1$, $g_{0i}=0$, $g_{ij}=\delta_{ij}+\lambda h_{ij}$. Since $h$ has nonzero components only at positions $11,22,12,21$ with $|h_{ij}|\le M$, for every $v\in\mathbb R^3\setminus\{0\}$ $$|v^iv^jh_{ij}|\le M\bigl((v^1)^2+(v^2)^2\bigr)+2M|v^1v^2|\le 2M\bigl((v^1)^2+(v^2)^2\bigr)\le2M|v|^2$$ by [F4], so $v^iv^j(\delta_{ij}+\lambda h_{ij})\ge(1-2M|\lambda|)|v|^2>0$ when $|\lambda|<1/(2M)$. The matrix of $g(\lambda)$ is therefore the orthogonal direct sum of the negative entry $-1$ and a positive definite $3\times3$ matrix; diagonalizing the latter gives three positive diagonal entries, so the inertia is $(3,1,0)$ and $g(\lambda)$ is a Lorentz form at every point by [F3]. The components are smooth by [F6] because $h$ has smooth components, so $g(\lambda)$ is a smooth Lorentzian metric; $g(\lambda)(\partial_0,\partial_0)=-1<0$ exhibits a smooth everywhere timelike vector field, which orients the metric by [F3], and $\partial_0$ is future-directed since $g(\partial_0,\partial_0)<0$ with the flat time orientation. This proves (a). [F3, F4, F6, algebra]

2.1 (Gauge, trace and wave equation.) For the TT profile $F$, the trace vanishes: $\eta^{cd}h_{cd}=h_{11}+h_{22}=A_+-A_+=0$, and $h_{00}=h_{01}=h_{02}=h_{03}=h_{33}=0$; hence $\bar h=h$. By [F1], $\partial^ah_{ab}=\eta^{ac}\partial_ch_{ab}=F'_{ab}(u)n^a$; for each $b$ this is $F'_{0b}(u)n^0+F'_{3b}(u)n^3$, with $n^0=-1$ and $n^3=-1$ by step 1.1 of [[lem-gr-null-phase-coordinate]], so it equals $-F'_{0b}(u)-F'_{3b}(u)=0$ because the profile satisfies $F_{a0}=F_{a3}=0$ for every $a$. Hence $\partial^a\bar h_{ab}=0$: harmonic gauge. Also $\Box\bar h_{ab}=\Box h_{ab}=0$ for every $a,b$ by [F1]. By [F2] the first-order Einstein coefficient in harmonic gauge is $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}=0$; this is the linearized vacuum equation of [[def-gr-plane-wave-perturbation]] clause (e). The transversality for the wave covector is the vanishing of $\eta^{ac}k_ch_{ab}$ for every $b$: for the wave covector $k_c=\omega\eta_{cd}T^d$ with $T=\partial_0+\partial_3$ of [[lem-gr-null-phase-coordinate]] clause (a) this equals $\omega(h_{0b}+h_{3b})=0$ because the TT profile has $F_{0b}=F_{3b}=0$. This proves (b). [F1, F2, step 1.1, algebra]

3.1 (Quadratic residual.) Fix the nonempty compact $K$ and $L>0$. Let $b_j$ be the supremum over $K$ of the maximum absolute value of the order-$j$ component derivatives of $h$, for $j=0,1,2$; these numbers are finite by [F4]. The quantity in clause (c) is $M_K=b_0+L^{-1}b_1+L^{-2}b_2$, while the supplier's control is $B_K(h)=b_0+Lb_1+L^2b_2$. Set $q_L:=\max\{1,L^2,L^4\}$. Termwise comparison gives $B_K(h)\le q_LM_K$ for every $L>0$. Take $\delta_0,C$ from [F5] for this nonempty $K$ and $L$, and choose $\lambda_0>0$ with $\lambda_0B_K(h)\le\delta_0$ and, when $M>0$, $\lambda_0<1/(2M)$; if $B_K(h)=0$, its constraint is automatic. For $|\lambda|\le\lambda_0$, put $A=\lambda h$, so $B_K(A)=|\lambda|B_K(h)\le\delta_0$. The metric is Lorentzian on all of $\mathbb R^4$ by step 1.1. Applying the residual estimate of [F5] on $K$ gives $|G_{ab}(\eta+\lambda h)(p)-G^{(1)}_{ab}(\lambda h)(p)|\le C\lambda^2B_K(h)^2/L^2\le Cq_L^2\lambda^2M_K^2/L^2$. By linearity and step 2.1, $G^{(1)}_{ab}(\lambda h)=\lambda G^{(1)}_{ab}(h)=0$. Thus clause (c) holds with $C_K:=Cq_L^2<\infty$, also when $M_K=0$. [F4, F5, step 1.1, step 2.1, algebra]

4.1 (Conclusion.) Steps 1.1, 2.1 and 3.1 prove clauses (a)-(c). Only the explicit components of the TT planar perturbation, the chain rule of [F1], the harmonic-gauge reduction of [F2] and the quadratic-remainder estimate of [F5] are used; no field equation is assumed, no source or matter model occurs, and no choice principle beyond the inherited countable choice of the cited suppliers is used. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Plane waves are a subclass.** The theorem produces a linearized vacuum wave for every pair of bounded smooth profiles of the single variable $u=x^0-x^3$. It does not claim that every solution of the linearized vacuum equations is of this form, nor any superposition or completeness property; the zero-data Duhamel theorem [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]] produces only the zero solution when the source vanishes.

- **Coordinate reparametrization.** Under the mathematical coordinate reparametrization $t_c:=x^0/c$, the profile is constant along curves with $|dx^3/dt_c|=c$ ([[lem-gr-null-phase-coordinate]] clause (d)); here $c$ is only the positive real parameter used in that reparametrization, with no unit or physical-time reading in this mathematical theorem.

- **The residual is not a solution.** In the zero-source, zero-cosmological-constant branch, the exact metric $\eta+\lambda h$ generally fails the vacuum equation $G_{ab}=0$ at order $\lambda^2$; clause (c) makes the failure quantitative on nonempty compact sets and shows in which sense the linearized model approximates the exact one. The bound is stated in the components of the inertial chart; assigning physical units to those components is a separate convention of the framework and is not used by this theorem.
