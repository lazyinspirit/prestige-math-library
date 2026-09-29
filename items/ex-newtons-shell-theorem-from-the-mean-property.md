---
id: ex-newtons-shell-theorem-from-the-mean-property
kind: example
title: Newton shell theorem from harmonic mean values
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - cor-regular-level-set-local-graph-theorem
  - def-borel-sigma-algebra
  - def-canonical-natural
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
  - def-euclidean-inner-product
  - def-euclidean-spheres-and-closed-balls
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-isometry-and-metric-embedding
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - def-measurable-function-between-measurable-spaces
  - def-measurable-space
  - def-measure-preserving-transformation-and-system
  - def-measure-space
  - def-metric-compactness
  - def-metric-space
  - def-natural-logarithm
  - def-polar-surface-measure-on-the-unit-sphere
  - def-real-power
  - def-spherical-averages-and-local-ball-means-in-rn
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-euclidean-submersions-and-immersions
  - def-jacobian-matrix-and-gradient
  - def-regular-critical-points-values-and-level-sets
  - lem-derivative-of-a-power
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - lem-isometry-is-an-embedding
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - lem-metrics-on-rn
  - lem-nat-nonzero-is-successor
  - lem-of-inverse-positive
  - lem-standard-basis-of-f-n
  - prop-of-multiply-inequalities
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-compactness-agrees-with-metric-compactness
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-differentiation-under-the-integral-sign
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-heine-cantor-metric
  - thm-induction-principle
  - thm-integral-triangle-inequality
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-spherical-mean-value-property-for-harmonic-functions
  - thm-total-derivative-computes-directional-and-partial-derivatives

verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: §5.3 equation (5.24), printed p.117, fixes the kernel normalization; Problem 5.16, printed p.122, is an exercise prompt for the exterior potential of compactly supported rotationally symmetric volume densities, not a proof or a shell-measure result.
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.1 Theorem 2.1, equation (2.3), PDF p.25, gives the spherical mean-value theorem; §2.7 equation (2.24), printed p.36 (PDF p.41), interprets the Newtonian potential as a continuous superposition of point-source potentials. Neither passage proves the shell formula; the shell calculation is derived here.
---

## Example

Assume Countable Choice, let $n\ge3$, $R>0$, and let $M\in\mathbb R$. Write
$S_R=\partial B_R(0)$ for the sphere carrying the uniform surface-mass measure
$M|S_R|^{-1}dS$. For every $x$ with $|x|\ne R$, define
$$U(x)=\frac{M}{|S_R|}\int_{S_R}\Phi(x-y)\,dS_y,$$
where $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$ and
$\omega_{n-1}=|S^{n-1}|$. Then
$U(x)=\begin{cases}M\Phi(x),&|x|>R,\\M\Phi(R),&|x|<R.\end{cases}$
Here $\Phi(R)$ denotes the radial value
$R^{2-n}/((n-2)\omega_{n-1})$. The claim includes $M=0$ and makes no assertion
at the shell $|x|=R$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge3$, $R>0$, $M\in\mathbb R$, and the kernel fixed by [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]].

[A1] The Axiom of Countable Choice is written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] For $n\ge3$ and $z\ne0$, $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]). In particular $\Phi$ is even and invariant under every Euclidean isometry fixing the origin.

[F2] The kernel is smooth and harmonic away from its pole ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]).

[F3] Chart surface measure agrees with polar sphere measure, is invariant under orthogonal maps, and scales under $\theta\mapsto a+R\theta$ by $R^{n-1}$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] The polar sphere measure is $\sigma$, and the spherical average is $M_g(a,r)=\omega_{n-1}^{-1}\int_{S^{n-1}}g(a+r\theta)\,d\sigma(\theta)$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[def-spherical-averages-and-local-ball-means-in-rn]]).

[F5] If $g\in C^2(\Omega)$ is harmonic and $\overline{B_r(a)}\subseteq\Omega$, then $g(a)=M_g(a,r)$ ([[thm-spherical-mean-value-property-for-harmonic-functions]]).

[F6] Surface integration on a compact embedded $C^1$ hypersurface is defined by chart integration; signed integrals are defined when the absolute integral is finite ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F7] Under $\mathrm{AC}_\omega$, each positive-radius Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F8] A positive-radius Euclidean sphere is compact and is a compact embedded $C^1$ hypersurface: $S_r=F^{-1}(r^2)$ for $F(y)=\langle y,y\rangle$, whose continuous coordinate partials give the total derivative $DF(y)h=2\langle y,h\rangle$ with $DF(y)y=2r^2\ne0$ on $S_r$, so $r^2$ is a regular value and the regular-level graph theorem supplies the local $C^1$ charts required by the chart surface integral of [F6] ([[def-euclidean-spheres-and-closed-balls]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[cor-regular-level-set-local-graph-theorem]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]]).

[F9] A parameter integral may be differentiated when each slice is integrable, the integrand is differentiable almost everywhere in the parameter, its derivative is measurable, and one integrable majorant bounds all parameter derivatives ([[thm-differentiation-under-the-integral-sign]]).

[F10] Integrable real-valued functions have finite integrals when their absolute values are integrable, and the integral is linear ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F11] A $C^2$ function has continuous coordinate derivatives through order two, and its Laplacian is the sum of its pure second coordinate derivatives ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-laplacian-of-a-c2-function]]).

[F12] The Euclidean inner product is symmetric, bilinear and positive definite, and its induced norm satisfies $|x|^2=\langle x,x\rangle$ ([[def-euclidean-inner-product]]).

[F13] Continuous maps between topological spaces have Borel preimages, so the continuous derivative integrands and continuous maps of the Borel shell are measurable ([[def-borel-sigma-algebra]], [[def-measurable-space]], [[def-measurable-function-between-measurable-spaces]], [[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F14] Continuous partial derivatives give total differentiability; the chain rule for total derivatives computes partials of compositions, and the product and quotient rules compute the displayed radial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F15] Every norm satisfies the triangle inequality and the reverse-triangle inequality; apply this to the Euclidean norm ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F16] For every real $\alpha$, $(r^\alpha)'=\alpha r^{\alpha-1}$ on $r>0$ ([[thm-real-power-continuity-and-derivatives]]).

[F17] A differentiable real function with zero derivative on an interval is constant, by the mean value theorem ([[cor-mean-value-theorem]]).

[F18] Closed bounded subsets of $\mathbb R^n$ are compact, and continuous real functions on nonempty compact Euclidean sets are bounded ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F19] A continuous function on a compact metric space is uniformly continuous ([[def-metric-compactness]], [[def-metric-space]], [[lem-metrics-on-rn]], [[thm-compactness-agrees-with-metric-compactness]], [[thm-heine-cantor-metric]]).

[F20] The absolute value of an integral is bounded by the integral of the absolute value ([[thm-integral-triangle-inequality]]).

[F21] For $n\ge1$, the standard basis vector $e_1$ exists ([[lem-standard-basis-of-f-n]]), and its Euclidean norm is $1$ by the norm definition in [F12] ([[def-euclidean-inner-product]]).

[F22] A measurable measure-preserving self-map leaves integrals of integrable functions invariant ([[def-measure-space]], [[def-measurable-function-between-measurable-spaces]], [[def-measure-preserving-transformation-and-system]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F23] The Euclidean norm is continuous, so the annulus defined by norm inequalities is closed ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F24] An isometry of metric spaces is continuous on its domain ([[def-isometry-and-metric-embedding]], [[lem-isometry-is-an-embedding]]).

[F25] For $r>0$, real powers are positive, satisfy $r^{s+t}=r^sr^t$, and obey $r^{-s}=1/r^s$ ([[def-real-power]], [[thm-real-power-laws]], [[cor-exponential-reciprocal-and-positivity]]); also $r^1=r$ because $\exp(\log r)=r$ ([[def-natural-logarithm]]).

[F26] The natural numbers satisfy induction, and $j\mapsto j\cdot1_{\mathbb R}$ is their canonical embedding in the real exponents ([[thm-induction-principle]], [[def-canonical-natural]]).

[F27] Multiplying two nonnegative inequalities preserves the order ([[prop-of-multiply-inequalities]]).

[F28] Reciprocation reverses strict order between positive reals ([[lem-of-inverse-positive]]).

[F29] Every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

## Proof

1.1 Let $S_R=\partial B_R(0)$. By [F3] and [F7], its chart surface measure is $$|S_R|=R^{n-1}\omega_{n-1}=R^{n-1}n|B_1|,$$ which is finite and strictly positive. The sphere is a compact embedded $C^1$ hypersurface by [F8], so [F6] defines the integral. The same scaling relation gives, for every continuous $h$ on $S_R$, $$\frac1{|S_R|}\int_{S_R}h(y)\,dS_y =\frac1{\omega_{n-1}}\int_{S^{n-1}}h(R\theta)\,d\sigma(\theta).$$ If $|x|\ne R$, the distance from $x$ to $S_R$ is positive by [F15], so the integrand in the definition of $U(x)$ is continuous and bounded on the compact shell; its integral is finite. [given, A1, F2, F3, F6, F7, F8, F15, F18]

2.1 Suppose $|x|>R$. Choose $s$ with $R<s<|x|$ and put $g_x(y)=\Phi(x-y)$ on $\Omega=B_s(0)$. The pole $x$ lies outside $\overline{B_s(0)}$, so [F1]–[F2] show that $g_x\in C^2(\Omega)$ and $\Delta_y g_x=0$ there. The closed ball $\overline{B_R(0)}$ is compact and lies inside $\Omega$ by [F8]. Applying [F5] at its center and then the scaling identity of step 1.1 gives $$\frac1{|S_R|}\int_{S_R}\Phi(x-y)\,dS_y =\frac1{\omega_{n-1}}\int_{S^{n-1}}\Phi(x-R\theta)\,d\sigma(\theta) =g_x(0)=\Phi(x).$$ Multiplication by $M$ proves the exterior formula, including $M=0$. [given, A1, F1, F2, F5, F8, step 1.1, algebra]

2.2 Put $V(x)=|S_R|^{-1}\int_{S_R}\Phi(x-y)\,dS_y$ for $|x|<R$. Fix $r<R$. For $|x|\le r$ and $y\in S_R$, $$R-r\le |x-y|\le R+r$$ by [F15]. The closed annulus $K=\{z:R-r\le|z|\le R+r\}$ is bounded and closed by [F18], hence compact; it is nonempty since it contains $Re_1$. All derivatives of $\Phi$ through order two are continuous and bounded on $K$ by [F2] and [F18], and are uniformly continuous there by [F19]. As $S_R$ has finite measure by step 1.1, constant bounds on these derivatives are integrable majorants. The derivative integrands are Borel measurable because they are continuous on the shell. For each $x\in B_r(0)$, choose a parameter interval small enough that $x+t e_i$ stays in $B_r(0)$. Apply [F9, F13] to each coordinate parameter, first to $\Phi(x-y)$ and then to each first derivative. This gives $$\partial_iV(x)=\frac1{|S_R|}\int_{S_R}\partial_i\Phi(x-y)\,dS_y, \qquad \partial_j\partial_iV(x)=\frac1{|S_R|}\int_{S_R}\partial_j\partial_i\Phi(x-y)\,dS_y.$$ For $x,x'\in B_r(0)$ and $y\in S_R$, the points $x-y,x'-y$ lie in $K$ and have distance $|x-x'|$. Uniform continuity [F19] therefore bounds each derivative-integrand difference uniformly in $y$ by a modulus tending to zero with $|x-x'|$. Applying [F20] and dividing by $|S_R|$ shows that each derivative integral is continuous in $x$. Since $r<R$ was arbitrary, $V\in C^2(B_R(0))$ by [F11]. Each $y\in S_R$ is different from $x$; [F2] and [F10] now give $$\Delta V(x)=\frac1{|S_R|}\int_{S_R}\Delta\Phi(x-y)\,dS_y=0.$$ Thus $V$ is harmonic inside the shell. [given, A1, F2, F9, F10, F11, F13, F15, F18, F19, F20, F21, F23, step 1.1]

3.1 The function $V$ is radial. Indeed, take $x,x'$ with $|x|=|x'|<R$. If $x=x'$, use the identity map. Otherwise set $v=x-x'$ and $$Qz=z-2\frac{\langle z,v\rangle}{\langle v,v\rangle}v.$$ Bilinearity of the inner product [F12] gives $\langle Qz,Qw\rangle=\langle z,w\rangle$. Since $\langle Qz,v\rangle=-\langle z,v\rangle$, the formula gives $Q^2z=z$; hence $Q$ is an orthogonal involution. Also $2\langle x,v\rangle=\langle v,v\rangle$, hence $Qx=x'$. Thus $Q$ maps $S_R$ onto itself. It is an isometry, hence continuous [F24], and [F13] makes it a Borel-measurable self-map. The unit-sphere invariance and radius-scaling clauses of [F3] imply that $Q$ preserves the surface measure on $S_R$, so it preserves surface integrals by [F22]. Using $y=Qz$ and the radial formula [F1], $$V(x')=\frac1{|S_R|}\int_{S_R}\Phi(Qx-y)\,dS_y =\frac1{|S_R|}\int_{S_R}\Phi(Qx-Qz)\,dS_z =\frac1{|S_R|}\int_{S_R}\Phi(x-z)\,dS_z=V(x).$$ [given, A1, F1, F3, F12, F13, F22, F24, step 1.1, step 2.2, algebra]

4.1 Write $V(x)=v(|x|)$ on $B_R(0)$ and set $v(r)=V(re_1)$ for $0<r<R$. By the chain and product rules [F14, F16], for $|x|=r>0$, $$\partial_iV(x)=v'(r)\frac{x_i}{r},\qquad \partial_{ii}V(x)=v''(r)\frac{x_i^2}{r^2} +v'(r)\left(\frac1r-\frac{x_i^2}{r^3}\right).$$ Summing over $i$ and using [F11] yields $$0=\Delta V(x)=v''(r)+\frac{n-1}{r}v'(r).$$ Consequently $(r^{n-1}v'(r))'=0$, so [F17] makes $r^{n-1}v'(r)=c$ on $(0,R)$ for one constant $c$. By [F16], the derivative of $v(r)-\frac{c}{2-n}r^{2-n}$ is zero; another application of [F17] gives $$v(r)=a+b r^{2-n}\qquad(0<r<R)$$ for constants $a,b$. Since $V$ is continuous at the origin by [F11, step 2.2], there are $\rho>0$ and $C>0$ such that $|v(r)|\le C$ for $0<r<\rho$. Set $m=n-2\ge1$. For any $L>0$ and $0<r<\min\{1,L^{-1}\}$, induction on $k\in\mathbb N$ proves $0<r^{k+1}\le r$: the base $k=0$ is $r^1=r$ by [F25]; if $r^{k+1}\le r$, then multiplying by $r>0$ and using $r<1$ gives $r^{k+2}=r^{k+1}r\le r^2\le r$ by [F27]. Since $m\ge1$, it is a nonzero natural; [F29] gives $k\in\mathbb N$ with $m=\sigma(k)$, whose real exponent is $k+1$ by [F26]. Thus $0<r^m\le r<L^{-1}$. By [F28], $r^{2-n}=r^{-m}=(r^m)^{-1}>L$. This is the quantified limit $r^{2-n}\to+\infty$ as $r\downarrow0$. If $b\ne0$, choose $L>(C+|a|)/|b|$ and take $r$ small enough to satisfy the preceding bound and $r<\min\{R,\rho\}$. Reverse triangle inequality [F15] gives $|v(r)|=|a+b r^{-m}|\ge |b|r^{-m}-|a|>C$, a contradiction. Thus $b=0$, and $V$ is constant throughout $B_R(0)$. [given, F11, F12, F14, F15, F16, F17, F21, F25, F26, F27, F28, F29, step 2.2, step 3.1, algebra]

5.1 At $x=0$, $|y|=R$ on $S_R$, so [F1] gives $$V(0)=\frac1{|S_R|}\int_{S_R}\Phi(-y)\,dS_y=\Phi(R).$$ Step 4.1 makes this the value of $V$ at every interior point. Since $U=MV$, the interior formula follows for every real $M$, including zero. [given, A1, F1, F11, step 1.1, step 4.1, algebra]

6.1 The outside and inside cases are disjoint and cover exactly the points $|x|\ne R$. At $|x|=R$ the pole lies on the shell, and the statement makes no claim there. The $n\ge3$ assumption is used when the radial ODE produces $r^{2-n}$ and continuity at zero removes its singular term; dimensions one and two are outside this statement. Countable Choice is the sole set-theoretic assumption, carried by the cited kernel, surface/polar measure, spherical-mean and ball-measure interfaces [A1, F1, F2, F3, F4, F5, F6, F7]; the explicit differentiation and reflection calculations require no full Axiom of Choice. ∎ [given, A1, F1, F2, F3, F4, F5, F6, F7, cases]

## Source notes

Hunter, §2.1, Theorem 2.1 and equation (2.3) (PDF p.25), proves the spherical mean-value theorem from the divergence theorem. Hunter §2.7, equation (2.24) (printed p.36, PDF p.41), interprets the Newtonian potential as a continuous superposition of point-source potentials; it does not calculate this shell integral. Teschl §5.3, equation (5.24) (printed p.117), gives the equivalent fundamental-solution normalization. Teschl Problem 5.16 (printed p.122) is an exercise asking for exterior equality for a compactly supported rotationally symmetric volume density; it gives no proof and does not assert the surface shell statement. The inside constancy and the shell calculation are established above from local harmonicity, rotation invariance, the radial ODE, and the mean-value theorem.
