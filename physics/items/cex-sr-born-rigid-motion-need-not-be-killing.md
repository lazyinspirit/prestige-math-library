---
id: cex-sr-born-rigid-motion-need-not-be-killing
kind: counterexample
domain: mathematics
title: "Counterexample: a Born-rigid congruence need not be a Killing congruence"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-sr-smooth-local-herglotz-noether, def-sr-observer-congruence-and-kinematics, def-sr-chart-tetrad-and-congruence-distinction, thm-sr-fermi-walker-and-rigid-observer-examples, def-flat-covariant-derivative-on-affine-minkowski-space, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-ftc-first-part, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-the-exterior-derivative-squares-to-zero, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  thm-sr-smooth-local-herglotz-noether: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement refuted

**False claim:** every smooth Born-rigid future unit timelike field $n$ ([[def-sr-observer-congruence-and-kinematics]], [[def-sr-chart-tetrad-and-congruence-distinction]]) is locally a positive multiple of a Killing field: there is a positive smooth function $f$ on a neighbourhood of every point with $\mathcal L_{fn}\eta=0$ ([[thm-sr-smooth-local-herglotz-noether]]).

## Facts & Assumptions

**Given:** The affine Minkowski space with an inertial chart $(x^0,x^1,x^2,x^3)$ in which $\eta=\operatorname{diag}(-1,1,1,1)$ and the flat covariant derivative differentiates components ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]], [[def-flat-covariant-derivative-on-affine-minkowski-space]]), the kinematics of a congruence with acceleration $a$, expansion $\theta$ and vorticity $\omega$ ([[def-sr-observer-congruence-and-kinematics]]), a length scale $L_0>0$, and the functions and curves of the Construction below.

[L1] Killing equation ([[thm-sr-smooth-local-herglotz-noether]], [F10] and steps 10.1, 11.1 there): for a smooth future unit timelike field $n$ with expansion $\theta$, acceleration one-form $a^\flat$ and the Lie derivative of the metric, $\mathcal L_n\eta=2\theta-\bigl(n^\flat\otimes a^\flat+a^\flat\otimes n^\flat\bigr)$; and for a positive smooth $f$, $\mathcal L_{fn}\eta=f\mathcal L_n\eta+df\otimes n^\flat+n^\flat\otimes df$, so $\mathcal L_{fn}\eta=0$ if and only if $\nabla_a(fn)_b+\nabla_b(fn)_a=0$.

[L2] Hyperbolic functions: $\cosh^2s-\sinh^2s=1$, $\cosh s>0$, $\cosh'\!=\sinh$, $\sinh'\!=\cosh$, $\sinh 0=0$, $\cosh 0=1$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]).

[L3] Fundamental theorem of calculus: if $F(\lambda)=\int_0^\lambda g(s)\,ds$ for a continuous $g$, then $F$ is differentiable with $F'=g$ ([[thm-ftc-first-part]]).

[L4] Choice-free inverse function theorem: a smooth map on an open subset of $\mathbb R^n$ whose derivative at a point is invertible restricts to a diffeomorphism between open neighbourhoods ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[L5] Exterior derivative: $d^2=0$ on smooth differential forms ([[thm-the-exterior-derivative-squares-to-zero]]).

[L6] Future timelike coordinate criterion: in an inertial chart a vector with components $(u^0,u^1,u^2,u^3)$ is future timelike exactly when $-u^0{}^2+u^1{}^2+u^2{}^2+u^3{}^2<0$ and $u^0>0$ ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

## Counterexample

**Proof technique:** direct.

1.1 Construction of the data: fix $L_0>0$ and put $\psi(\lambda):=\lambda^2/(2L_0^2)$, $k(\lambda):=\psi'(\lambda)=\lambda/L_0^2$, $e_0(\lambda):=(\cosh\psi(\lambda),\sinh\psi(\lambda),0,0)$ and $e_1(\lambda):=(\sinh\psi(\lambda),\cosh\psi(\lambda),0,0)$ in the inertial coordinates, and let $z(\lambda):=\bigl(\int_0^\lambda\cosh\psi(s)\,ds,\int_0^\lambda\sinh\psi(s)\,ds,0,0\bigr)$; these are smooth in $\lambda$, $z(0)=0$, and $z'=e_0$ by [L3]. By [L2], $\eta(e_0,e_0)=-\cosh^2\psi+\sinh^2\psi=-1$, $\eta(e_1,e_1)=-\sinh^2\psi+\cosh^2\psi=1$ and $\eta(e_0,e_1)=-\cosh\psi\sinh\psi+\sinh\psi\cosh\psi=0$, so $(e_0,e_1,e_2,e_3)$ is an orthonormal frame at every $\lambda$; moreover $e_0$ is future by [L6] because its time component $\cosh\psi>0$ and $\eta(e_0,e_0)=-1$. [L2, L3, L6]

1.2 Local chart: define $\Phi(\lambda,\xi,y,\zeta):=z(\lambda)+\xi\,e_1(\lambda)+y\,e_2+\zeta\,e_3$ on $\mathbb R^4$. Differentiating in $\lambda$ gives $\partial_\lambda\Phi=z'+\xi e_1'=e_0+\xi k\,e_0=N\,e_0$ with $N:=1+k(\lambda)\xi$, using $e_1'=k e_0$ from [L2]; further $\partial_\xi\Phi=e_1$, $\partial_y\Phi=e_2$, $\partial_\zeta\Phi=e_3$. At $(\lambda,\xi,y,\zeta)=0$ these four vectors are $e_0(0)=(1,0,0,0)$, $e_1(0)=(0,1,0,0)$, $e_2=(0,0,1,0)$, $e_3=(0,0,0,1)$, so the derivative matrix is the identity and is invertible; by [L4] $\Phi$ restricts to a diffeomorphism from an open neighbourhood of $0$ onto an open neighbourhood $W$ of $\Phi(0)=0$. Shrinking to a coordinate box $B=\{(\lambda,\xi,y,\zeta):|\lambda|<\varepsilon L_0,\ |\xi|<\varepsilon L_0,\ |y|<\varepsilon L_0,\ |\zeta|<\varepsilon L_0\}$ with $0<\varepsilon<1$ (intersected with the neighbourhood supplied by [L4]) keeps a diffeomorphism onto its image and gives $|k\xi|=|\lambda\xi|/L_0^2<\varepsilon^2$, hence $N=1+k\xi\ge1-\varepsilon^2>0$ on $B$. We write again $W:=\Phi(B)$ and use $(\lambda,\xi,y,\zeta)$ as coordinates on $W$. [L2, L4]

2.1 Metric and unit field: by step 1.2, $d\Phi=N e_0\,d\lambda+e_1\,d\xi+e_2\,dy+e_3\,d\zeta$; since $(e_0,e_1,e_2,e_3)$ is $\eta$-orthonormal with $e_0$ timelike, the pullback metric on $W$ is $g=-N^2\,d\lambda^2+d\xi^2+dy^2+d\zeta^2$. Hence the vector field $n:=N^{-1}\partial_\lambda$ satisfies $g(n,n)=-N^2\cdot N^{-2}=-1$, and $n=e_0(\lambda)$ is future by step 1.1; $n$ is smooth on $W$ because $N$ and the coordinates are, so $n$ is a smooth future unit timelike field, that is, a congruence on $W$. The rest space $n^\perp$ at each point is spanned by $\partial_\xi,\partial_y,\partial_\zeta$, since these are $g$-orthogonal to $\partial_\lambda$ and have positive squares. [step 1.1, step 1.2, L2]

3.1 Rigidity and vanishing vorticity: the inertial components of $n$ are $e_0(\lambda)$, so its directional derivative in a vector $v$ is $d\lambda(v)k e_1$ by step 1.1 and the flat component derivative. For a rest vector $r$ spanned by $\partial_\xi,\partial_y,\partial_\zeta$, one has $d\lambda(r)=0$, hence $\nabla_rn=0$. Thus both the symmetric and antisymmetric projected derivatives vanish on pairs of rest vectors. Since $\theta$ and $\omega$ are horizontal in both slots, $\theta=\omega=0$ everywhere. The field is Born rigid and irrotational. [step 1.1, step 2.1, algebra]

4.1 Acceleration one-form: since $d\lambda(n)=1/N$, the derivative from step 3.1 gives $a=\nabla_nn=(k/N)e_1=(k/N)\partial_\xi$. Therefore $a^\flat=(k/N)d\xi$ by the metric of step 2.1. As $N=1+k(\lambda)\xi$ and $\partial_\lambda N=k'\xi$, one has $\partial_\lambda(k/N)=(k'N-kk'\xi)/N^2=k'(N-k\xi)/N^2=1/(L_0^2N^2)$. The remaining derivatives contribute no term to $d(k/N)\wedge d\xi$, so $da^\flat=(1/(L_0^2N^2))d\lambda\wedge d\xi$, nowhere zero on $W$ because $N>0$. [step 2.1, step 3.1, L2]

5.1 No positive multiple is Killing: let $f>0$ be smooth on $W$ and suppose $\mathcal L_{fn}\eta=0$. By [L1] and $\theta=0$, $0=\mathcal L_{fn}\eta=f\mathcal L_n\eta+df\otimes n^\flat+n^\flat\otimes df=n^\flat\otimes\beta+\beta\otimes n^\flat$ with $\beta:=df-fa^\flat$. Evaluating at $(n,r)$ for a rest vector $r$ gives $n^\flat(n)\beta(r)+\beta(n)n^\flat(r)=-\beta(r)=0$, and evaluating at $(n,n)$ gives $-2\beta(n)=0$; since every vector is a sum of a multiple of $n$ and a rest vector by step 2.1, $\beta=0$, that is, $df=f\,a^\flat$ and hence $d\log f=a^\flat$. Applying $d$ and [L5] gives $0=d^2\log f=da^\flat=\bigl(1/(L_0^2N^2)\bigr)d\lambda\wedge d\xi\ne0$ by step 4.1, a contradiction. Therefore no positive smooth $f$ on any nonempty open subset of $W$ makes $fn$ a Killing field: the constructed congruence is Born rigid and future unit, but it is not locally a positive multiple of a Killing field. [step 4.1, L1, L5]

6.1 Conclusion and clarifications: steps 1.1-5.1 construct a smooth future unit timelike field $n$ on the open set $W$ that is Born rigid ($\theta=0$) and irrotational ($\omega=0$), and step 5.1 shows that for every positive smooth $f$ the field $fn$ fails the Killing equation on every nonempty open subset; hence the claim of the Statement refuted section is false. The Rindler congruence is not a counterexample of this kind: its metric $-\rho^2d\theta^2+d\rho^2+dy^2+dz^2$ is independent of $\theta$, so $\partial_\theta$ is a Killing field and the unit field $\rho^{-1}\partial_\theta$ is a positive multiple of it ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (b)). The rotational classification of [[thm-sr-smooth-local-herglotz-noether]] is untouched, because the present congruence is irrotational: the counterexample concerns the irrotational branch of Born-rigid motions. [step 5.1] ∎

## Remarks

- **What fails and what survives.** The false claim would make every Born-rigid motion Killing up to a positive rescaling on a neighbourhood. Here the obstruction is exact: the acceleration one-form is closed precisely for Killing rescalings (by [L1] the Killing condition forces $d\log f=a^\flat$), and $a^\flat$ is not closed on any nonempty open subset of $W$ because $da^\flat=(1/L_0^2N^2)d\lambda\wedge d\xi$ is nowhere zero. The rotational branch of the Herglotz-Noether classification, where $da^\flat=0$ is a theorem, is not affected.

- **The construction is local and choice-free.** The primitive $z$ is defined through the fundamental theorem of calculus rather than by a closed-form integral; no global quotient, tube completeness or material model is introduced, and the only nonlinear-analytic input is the choice-free inverse function theorem of [L4].
