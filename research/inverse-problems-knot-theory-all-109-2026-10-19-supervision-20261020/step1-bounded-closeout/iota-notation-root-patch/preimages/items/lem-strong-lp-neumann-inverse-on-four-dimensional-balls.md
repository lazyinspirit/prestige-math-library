---
id: lem-strong-lp-neumann-inverse-on-four-dimensional-balls
kind: lemma
title: "A strong Lp Neumann inverse on four-dimensional balls"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-strong-l-two-neumann-inverse-on-four-dimensional-balls
  - thm-global-w-two-p-estimate-for-the-laplacian-on-rn
  - lem-lp-interpolation-absorbs-lower-order-derivatives
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - thm-riesz-fischer-completeness-of-l-p
  - thm-holder-inequality-for-integrals
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Proposition 3.6 and §9"
      url: "https://arxiv.org/pdf/math/0209352"
    - title: "Sheldon Axler and Peter J. Shin, The Neumann problem on ellipsoids, §2"
      url: "https://www.axler.net/NeumannSpringer.pdf"
dependency_level: 1
---

## Statement

Assume full AC. Derivative tensors carry their Euclidean norms, and Sobolev norms are sums of the resulting $L^p$ norms. Fix a finite-dimensional real inner-product space $V$, $2\le p<\infty$, and $r>0$. Every $f\in L^p(B_r(0);V)$ with zero volume mean has a unique mean-zero $u\in W^{2,p}(B_r;V)$ satisfying
$$\int_{B_r}\langle\nabla u,\nabla v\rangle=\int_{B_r}\langle f,v\rangle\qquad(v\in W^{1,2}(B_r;V)).$$
The inverse is linear and obeys
$$r^{-2}\|u\|_p+r^{-1}\|\nabla u\|_p+\|D^2u\|_p\le C_{p,V}\|f\|_p,$$
with $C_{p,V}$ independent of $r$ and $f$. Its solution is the $W^{2,p}$ limit of mean-zero polynomial solutions with classical zero normal derivative. In particular it belongs to the $W^{2,p}$ closure of smooth zero-normal-derivative functions on the closed ball.

On $B_1$, let $X_p$ be the $W^{2,p}$ closure of the $V$-valued polynomials with zero normal derivative on the sphere, and let $X_p^0$ be its mean-zero subspace. Then $-\Delta:X_p^0\to L^p_0(B_1;V)$ is a bounded bijection with the above inverse. Here $L^p_0$ denotes the zero-mean subspace; $X_p^0$ is complete for the equivalent norm $\|u\|_{X_p^0}=\|\Delta u\|_p$. A prescribed finite orthogonal equivariance of $f$ is preserved by the inverse, as in the $L^2$ case. No endpoint $p=\infty$ or nonlinear gauge existence is asserted.

## Statement references

[[lem-strong-l-two-neumann-inverse-on-four-dimensional-balls|Constructed L2 Neumann inverse]]

[[thm-global-w-two-p-estimate-for-the-laplacian-on-rn|Whole-space Laplace estimate]]

[[lem-lp-interpolation-absorbs-lower-order-derivatives|Interpolation absorption]]

[Tao–Tian, Proposition 3.6 and §9](https://arxiv.org/pdf/math/0209352)

## Facts & Assumptions

[F1] The proved [[lem-strong-l-two-neumann-inverse-on-four-dimensional-balls]] constructs the unique mean-zero weak Neumann solution, with its $W^{2,2}$ bound on $B_1$, and gives polynomial solutions for polynomial data.

[F2] The whole-space Laplace estimate bounds $D^2z$ by $C_p\Delta z$ in $L^p$ for $z\in W^{2,p}(\mathbb R^4)$. The interpolation estimate gives $\|\nabla z\|_p\le\eta\|D^2z\|_p+C_{p,\eta}\|z\|_p$, after finite-dimensional norm comparisons ([[thm-global-w-two-p-estimate-for-the-laplacian-on-rn]], [[lem-lp-interpolation-absorbs-lower-order-derivatives]]).

[F3] The unit ball is a $W^{2,2}$ extension domain; the critical higher-order Sobolev embedding there gives $\|z\|_{L^p}\le C_p\|z\|_{W^{2,2}}$ for every finite $p$ ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-higher-order-sobolev-embedding]]).

[F4] Polynomials uniformly approximate real continuous functions on the closed ball. Smooth approximation on $\mathbb R^4$ is available also in order zero, $L^p$ is complete, and Holder compares norms on finite-volume sets ([[thm-real-stone-weierstrass-for-compact-metric-spaces]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-holder-inequality-for-integrals]]).

[F5] A fixed smooth cutoff can equal one near $\overline B_1$ and vanish outside $B_2$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Full AC supplies the countable choices of the analytic suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** Full AC, $V$, $2\le p<\infty$, and the stated datum. Work first on $B_1$.

1.1 **Reflection matching.** Let $u$ be smooth near $\overline B_1$ with $\partial_\nu u=0$. On $1<|x|<2$ put $\iota(x)=x/|x|^2$ and $v(x)=u(\iota(x))$, and put $v=u$ on $B_1$. At $|x|=1$, $D\iota=I-2\nu\otimes\nu$; since $\nabla u$ is tangential, the outside gradient $D\iota^T\nabla u$ equals the inside gradient. The values match as well. Thus $v$ is $C^1$ across the sphere, smooth on each side, and has locally bounded piecewise second derivatives. Integration by parts on the two sides cancels the interface terms for $v$ and its first derivatives, so these piecewise derivatives are its weak derivatives through order two. [given, construct, algebra]

2.1 **The reflected equation.** Writing $s=|x|$, one has $D\iota=s^{-2}(I-2x\otimes x/s^2)$, $D\iota D\iota^T=s^{-4}I$, and $\Delta\iota_j=-4s^{-4}x_j$ in four dimensions. The chain rule therefore gives $\Delta v=s^{-4}(\Delta u)(\iota x)-4s^{-4}x\cdot(\nabla u)(\iota x)$. Since $x\cdot\nabla v=-s^{-2}x\cdot(\nabla u)(\iota x)$, this is $\Delta v=s^{-4}(\Delta u)(\iota x)+4s^{-2}x\cdot\nabla v$. All coefficients are bounded on the annulus. The inversion Jacobian has absolute value $s^{-8}$ and maps that annulus into $B_1\setminus\overline B_{1/2}$, so change of variables bounds its reflected $u$, first-derivative and Laplacian norms by constant multiples of their norms on $B_1$. [step 1.1, algebra]

3.1 **A whole-space estimate for the extension.** Choose the cutoff $\chi$ of [F5] equal to one near $\overline B_1$, and define $Eu=\chi v$ on $B_2$, zero elsewhere. Step 1.1 gives $Eu\in W^{2,p}(\mathbb R^4)$ with compact support. Step 2.1 and $\Delta(\chi v)=\chi\Delta v+2\nabla\chi\cdot\nabla v+(\Delta\chi)v$ give $\|Eu\|_p\le C\|u\|_p$ and $\|\Delta Eu\|_p\le C_p(\|\Delta u\|_p+\|\nabla u\|_p+\|u\|_p)$. Since $Eu=u$ on $B_1$, $\|\nabla u\|_p\le\|\nabla Eu\|_p$. Apply [F2] to obtain $\|D^2Eu\|_p\le C_p(\|\Delta u\|_p+\|\nabla Eu\|_p+\|u\|_p)$. Interpolate the middle term by [F2] with $\eta>0$ chosen so $C_p\eta\le1/2$, and absorb it. Then interpolate once more for the first derivatives and restrict to $B_1$. The result is $\|u\|_{W^{2,p}(B_1)}\le C_p(\|\Delta u\|_p+\|u\|_p)$. No estimate was applied before the reflected function's $W^{2,p}$ membership was proved. [F2, F5, step 1.1, step 2.1, choose, algebra]

4.1 **Removing the zeroth-order term for Neumann solutions.** For mean-zero polynomial $f$, [F1] gives a polynomial mean-zero solution $u$ with classical zero normal derivative and $\|u\|_{W^{2,2}}\le C\|f\|_2$. By [F3], $\|u\|_p\le C_p\|f\|_2\le C_p|B_1|^{1/2-1/p}\|f\|_p$, where the final Holder bound uses $p\ge2$. Substitution in step 3.1, with $-\Delta u=f$, proves $\|u\|_{W^{2,p}(B_1)}\le C_{p,V}\|f\|_p$ for these polynomial solutions, uniformly in their degrees. [F1, F3, F4, step 3.1, algebra]

5.1 **Construction for all mean-zero Lp data.** Extend $f$ by zero to $\mathbb R^4$, approximate in $L^p$ by smooth functions using [F4], and restrict to the closed ball. Each approximant is continuous there and hence uniformly approximable by polynomials by [F4]. A choice of uniform error tending to zero gives polynomial approximants in $L^p$; subtract their means to obtain mean-zero $f_j\to f$ in $L^p$, since $\|(f_j-f)_{B_1}\|\,|B_1|^{1/p}\le\|f_j-f\|_p$ before normalization. Let $u_j$ be the polynomial solutions from [F1]. Applying step 4.1 to their differences makes all derivative components through order two Cauchy in $L^p$. Completeness [F4] and passage in the weak-derivative test identities give a limit $u\in W^{2,p}$ with $u_j\to u$ strongly and the same bound. Finite volume and $p\ge2$ imply $u_j\to u$ in $W^{1,2}$ and $f_j\to f$ in $L^2$; their weak Neumann identities pass to the limit for every $W^{1,2}$ test. Thus the solution is the unique $L^2$ Neumann solution of [F1], now with the stronger regularity and norm estimate. [F1, F4, F5, step 4.1, construct, choose, algebra]

6.1 **The complete normalized domain.** By step 5.1 the inverse maps into $X_p^0$ and is bounded there. Conversely let $u\in X_p^0$ and choose polynomial zero-normal approximants $u_j\to u$ in $W^{2,p}$. Subtracting their means preserves the normal condition and convergence. The sources $f_j=-\Delta u_j$ have zero mean, by the polynomial weak identity of [F1], and converge to $f=-\Delta u\in L^p_0$. Each $u_j$ is the normalized solution for $f_j$, so the bounded inverse from step 5.1 sends $f$ to $u$. This proves bijectivity. Also $\|\Delta u\|_p\le C\|u\|_{W^{2,p}}$ and the inverse bound gives the reverse norm comparison. The zero-mean subspace of $L^p$ is closed, since its mean functional is bounded by Holder, hence complete by [F4]. Its isomorphism with $X_p^0$ gives completeness for $\|\Delta u\|_p$. [F1, F4, step 4.1, step 5.1, algebra]

7.1 **Scaling, uniqueness and symmetry.** For $B_r$ put $f_r(y)=r^2f(ry)$, solve on $B_1$ and set $u(x)=u_r(x/r)$. Direct change of variables gives $\|f_r\|_p=r^{2-4/p}\|f\|_p$, $\|D^2u_r\|_p=r^{2-4/p}\|D^2u\|_p$, $\|\nabla u_r\|_p=r^{1-4/p}\|\nabla u\|_p$, and $\|u_r\|_p=r^{-4/p}\|u\|_p$. Divide the unit-ball bound of step 5.1 by $r^{2-4/p}$ to obtain the displayed estimate; polynomial approximations rescale as well. The weak identity passes by change of variables. Uniqueness, linearity and preservation of prescribed finite orthogonal equivariance follow from [F1], since all these solutions belong to its unique mean-zero $W^{1,2}$ solution class. Full AC is inherited through [F2]–[F5] and the sequential approximation choices. [F1, F2, F3, F4, F5, step 5.1, step 6.1, construct, algebra] ∎

## Source notes

Tao–Tian's complete Proposition 3.6 proof and §9 nonlinear iteration were read in the full paper. The proof above constructs the ball's linear inverse directly: inversion reflection gives its strong estimate, and the previously constructed polynomial Neumann solutions give surjectivity by completion. It invokes no quoted strong Neumann solvability theorem, no boundary Schauder theorem and no merely formal weak-to-strong upgrade. This is the strong linear boundary supplier needed before a nonlinear gauge iteration can be justified.
