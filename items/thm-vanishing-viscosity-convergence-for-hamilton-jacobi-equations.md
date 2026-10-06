---
id: thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations
kind: theorem
title: Vanishing viscosity selects the viscosity solution
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- thm-half-relaxed-limit-stability-for-viscosity-solutions
- def-half-relaxed-limits
- thm-comparison-for-first-order-hamilton-jacobi-equations
- cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions
- def-viscosity-subsolution-and-supersolution
- def-metric-compactness
- lem-compactness-is-intrinsic
- thm-euclidean-semicontinuous-extreme-value-theorem
- lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
- def-mollifier-family-generated-by-a-unit-mass-smooth-bump
- thm-heine-cantor-metric
- lem-sup-epsilon
- lem-smooth-bump-between-concentric-euclidean-balls
- thm-continuous-functions-on-compact-jordan-sets-are-integrable
- thm-multidimensional-integral-properties
- cor-mean-value-theorem
- thm-change-of-variables-for-compact-jordan-sets
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 3, Theorem 1.9 and its proof, printed pp. 19--21; Remark 1.10, printed p. 21
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: 'Section 6: equation (6.1), Lemma 6.1, Remarks 6.2--6.4 and Theorem 6.5, printed pp. 34--35; these are stability background, not the explicit sin estimate.'
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 4, stability and the vanishing-viscosity limit, printed pp. 12--14
verification:
  precheck: pass
---

## Statement
Let $n\ge1$, $T>0$, $Z=\mathbb R^n\times(0,T)$, and
$Z_0=\mathbb R^n\times[0,T)$. Let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ satisfy the
Lipschitz conditions of part (a) of
[[thm-comparison-for-first-order-hamilton-jacobi-equations]], let
$u_0:\mathbb R^n\to\mathbb R$ be bounded and uniformly continuous, and let
$u_0^{(\varepsilon)}\to u_0$ locally uniformly on $\mathbb R^n$. For each
$\varepsilon\in(0,1)$ let $u^\varepsilon:Z\to\mathbb R$ be a viscosity
solution of
$$u^\varepsilon_t+H(x,t,Du^\varepsilon)=\varepsilon\Delta u^\varepsilon\qquad\text{in }Z,$$
meaning that for every test function $\phi\in C^{1,2}(Z)$ the residual
$\phi_t+H(z,D\phi)-\varepsilon\Delta\phi$ is nonpositive at each local
maximum of $u^\varepsilon-\phi$ and nonnegative at each local minimum. Assume
that $u^\varepsilon$ has initial datum $u_0^{(\varepsilon)}$ in the relaxed
Cauchy sense. Suppose the family is uniformly bounded on $Z$ and locally
equicontinuous up to the initial face: there is $M<\infty$ with
$|u^\varepsilon(z)|\le M$ for every $\varepsilon\in(0,1)$ and $z\in Z$, and
for every compact $K\subseteq Z_0$ and every $\eta>0$ there is $\delta>0$ such
that
$$|u^\varepsilon(z)-u^\varepsilon(z')|<\eta$$
for all $\varepsilon\in(0,1)$ and $z,z'\in K\cap Z$ with $|z-z'|<\delta$.
These estimates give each $u^\varepsilon$ a continuous trace on the initial
face. Then $u^\varepsilon\to u$ locally uniformly on $Z$, where $u$ is the
unique bounded viscosity solution of $u_t+H(x,t,Du)=0$ with datum $u_0$. Neither
existence of the approximants nor a compactness theorem is asserted: the
boundedness and equicontinuity estimates are hypotheses. No choice principle is
used.
## Facts & Assumptions

**Given:** The Hamiltonian $H$ with the Lipschitz conditions of comparison case (a), bounded uniformly continuous $u_0$, data $u_0^{(\varepsilon)}\to u_0$ locally uniformly, a uniformly bounded family $(u^\varepsilon)$ of viscous solutions, locally equicontinuous up to the initial face, with data $u_0^{(\varepsilon)}$ in the relaxed sense, and the half-relaxed limits $\overline u,\underline u$ of the family ([[def-half-relaxed-limits]]).

[F1] For every fixed $\phi\in C^{1,2}(Z)$, at each local maximum of $u^\varepsilon-\phi$ one has $\phi_t+H(z,D\phi)\le\varepsilon\Delta\phi(z)$, and at each local minimum $\phi_t+H(z,D\phi)\ge\varepsilon\Delta\phi(z)$. Thus the errors are bounded in absolute value by $c_\varepsilon(z):=\varepsilon|\Delta\phi(z)|$, which is locally bounded and tends to $0$ locally uniformly by the explicitly assumed second-order test inequalities in the statement; the limit equation is tested in the first-order sense of [[def-viscosity-subsolution-and-supersolution]].

[F2] The case-(a) finite-cover argument of [[thm-half-relaxed-limit-stability-for-viscosity-solutions]] proves the subsolution inequality at a strict contact from the inequality for that fixed smooth test and a locally uniformly vanishing error; the dual argument proves the supersolution inequality. The same item proves passage of the relaxed initial datum under local equicontinuity up to that face.

[F3] Comparison, case (a), applies to the bounded upper semicontinuous subsolution $\overline u$ and the bounded lower semicontinuous supersolution $\underline u$ when their relaxed initial data agree ([[thm-comparison-for-first-order-hamilton-jacobi-equations]]); uniqueness in the bounded class is [[cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions]].

[F4] A compact subset of $Z$ has a finite subcover from every intrinsic open cover ([[def-metric-compactness]]); every ambient indexed open-ball cover of it also has a finite subcover retaining the indices ([[lem-compactness-is-intrinsic]], clauses 2--3). Upper semicontinuous real-valued functions attain maxima on nonempty compact Euclidean sets ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F5] A nonnegative smooth compactly supported bump equal to $1$ on a smaller ball is supplied by [[lem-smooth-bump-between-concentric-euclidean-balls]]. Its integral is finite and positive, so normalization gives a unit-mass bump and the scaled family of [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]. Here only compact Riemann integrals are needed: continuous integrands on compact boxes are integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), and monotonicity and linearity give $|\int_Qg|\le\operatorname{vol}(Q)\sup_Q|g|$ ([[thm-multidimensional-integral-properties]]). For a $C^1$ function $f$ near a compact ball, first multiply by such a smooth cutoff equal to $1$ on a slightly larger ball and extend by zero, obtaining a globally $C^1$ compactly supported function. Its convolution with the fixed bump is smooth: on a fixed integration box every kernel-derivative difference quotient converges uniformly, by the mean value theorem and uniform continuity of the next derivative, so the integral bound passes each derivative through the integral. For the affine changes $y=x-\rho z$ on a compact integration box, [[thm-change-of-variables-for-compact-jordan-sets]] applies: the derivative is the invertible matrix $-\rho I$ and the absolute determinant is $\rho^{n+1}$. Thus, using the fixed-kernel formula $\int f(x-\rho y)\eta(y)\,dy$ gives first derivatives by the same uniform difference-quotient argument. Unit mass then bounds the errors in $f$ and $D_if$ by their moduli of continuity at distance $\rho R_\eta$, which tend to zero by [[thm-heine-cantor-metric]]. These compact-integral arguments use no choice ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** half-relaxed limits, stability with a vanishing perturbation, comparison, and a compactness-free conversion to local uniform convergence.

1.1 The relaxed limits are sub- and supersolutions with common initial data. First take a smooth strict upper test $\psi$ for $\overline u$ at an interior point. The case-(a) compact finite-cover proof in [F2] applies using the fixed smooth test $\psi+|z-z_0|^2$ at the approximating contacts: its viscosity error is bounded by $\varepsilon|\Delta_x(\psi+|z-z_0|^2)|$, which tends uniformly to zero on the compact contact region, so the half-relaxed limit satisfies $\psi_t+H(z,D\psi)\le0$. The dual argument gives the lower-limit supersolution inequality for smooth strict lower tests. To extend these inequalities to an arbitrary $C^1$ test $\phi$, strictify its contact by adding or subtracting a quartic ([[lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation]]). On a closed ball around the contact, convolve $\phi$ locally with a fixed compactly supported smooth unit-mass bump at scales tending to zero; uniform continuity of $\phi$ and $D\phi$ on that ball gives smooth approximants converging in $C^1$. Maximise $\overline u-\phi_j$ on the ball for each approximant. The strict contact and uniform convergence imply that the sets of such maximisers are interior for large $j$ and their distance to the original contact tends uniformly to zero. Strictify each smooth test at its maximiser by a quartic and apply the fixed-test argument above. Passing to the limit using $C^1$ convergence and continuity of $H$ proves the required inequality for $\phi$; the lower-test argument is dual. Thus $\overline u$ is a subsolution and $\underline u$ a supersolution for the full $C^1$ test definition. Finally, local equicontinuity gives each approximant a continuous initial trace. Its relaxed initial condition makes that trace equal to $u_0^{(\varepsilon)}$; local uniform convergence of these data and the shared boundary modulus then pass the initial trace to both half-relaxed limits. [F1, F2, F4, F5]

2.1 Comparison forces the two limits to agree. The subsolution $\overline u$ is bounded and upper semicontinuous and the supersolution $\underline u$ is bounded and lower semicontinuous, with the same relaxed initial data $u_0$; comparison [F3] gives $\overline u\le\underline u$ on $Z$. Since $\underline u\le\overline u$ pointwise by the definition of the half-relaxed limits, the two coincide: $\overline u=\underline u=:u$, which is therefore continuous; by [F3] it is the unique bounded viscosity solution with datum $u_0$. [step 1.1, F3]

3.1 Locally uniform convergence. Let $K\subseteq Z$ be compact and $\delta>0$. For each $z\in K$, the equalities $\overline u(z)=\underline u(z)=u(z)$ and the definition of the joint half-relaxed limits in Given give a radius $r_z>0$ such that $|u^\varepsilon(y)-u(z)|<\delta/3$ whenever $0<\varepsilon<r_z$ and $y\in Z$ satisfies $|y-z|<r_z$. Shrink the radius, if necessary, so that also $|u(y)-u(z)|<\delta/3$ there. The family of all such admissible balls covers $K$; by [F4] take a finite subcover $B(z_i,r_i)$ and put $\varepsilon_0:=\min_i r_i>0$. For every $0<\varepsilon<\varepsilon_0$ and $y\in K$, one of these balls contains $y$, so $|u^\varepsilon(y)-u(y)|<2\delta/3<\delta$. This proves uniform convergence on $K$ without selecting a sequence of parameters or points. [step 2.1, given, F4, algebra] ∎

## Remarks

- **What is not asserted.** No existence of the viscous family is proved and no subsequence is extracted from the family itself; the boundedness and local equicontinuity are hypotheses. The pointwise equality of the two relaxed limits is equivalent to local uniform convergence of the family, which is the content of step 3.1.
- **Choice.** The half-relaxed limits are computed as infima and suprema over sets; the comparison and uniqueness steps are choice-free, and the final conversion uses a finite cover of each compact set.
