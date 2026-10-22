---
id: lem-strong-l-two-neumann-inverse-on-four-dimensional-balls
kind: lemma
title: "A strong L2 Neumann inverse on four-dimensional balls"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-riesz-fischer-completeness-of-l-p
  - thm-holder-inequality-for-integrals
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler and Peter J. Shin, The Neumann problem on ellipsoids, Proposition 2.1, Theorem 2.2, Lemma 2.3 and Theorem 2.4, pp.263–268"
      url: "https://www.axler.net/NeumannSpringer.pdf"
    - title: "Terence Tao and Gang Tian, A singularity removal theorem for Yang–Mills fields in higher dimensions, Proposition 3.6"
      url: "https://arxiv.org/pdf/math/0209352"
---

## Statement

Assume full AC. Let $V$ be a fixed finite-dimensional real inner-product space, let $r>0$, and write $B_r=B_r(0)\subset\mathbb R^4$. For each $f\in L^2(B_r;V)$ with $\int_{B_r}f=0$ there exists a unique $u\in W^{2,2}(B_r;V)$ with $\int_{B_r}u=0$ satisfying the Neumann problem in the weak form
$$\int_{B_r}\langle\nabla u,\nabla v\rangle=\int_{B_r}\langle f,v\rangle\qquad\bigl(v\in W^{1,2}(B_r;V)\bigr).$$
Thus $-\Delta u=f$ distributionally, and the zero-normal boundary condition is included in the displayed all-test-function identity. The inverse $f\mapsto u$ is linear and obeys
$$\|D^2u\|_2\le\|f\|_2,\qquad r^{-2}\|u\|_2+r^{-1}\|\nabla u\|_2+\|D^2u\|_2\le C\|f\|_2,$$
with $C$ independent of $r$ and $f$. The Hessian norm is the Euclidean norm on all ordered second derivatives. If $f$ is the restriction of a polynomial and has mean zero, then $u$ is the restriction of a polynomial with classical $\partial_\nu u=0$ on $\partial B_r$.

If a fixed finite $\Gamma\le O(4)$ and an orthogonal representation $\sigma:\Gamma\to O(V)$ satisfy $f(\gamma x)=\sigma(\gamma)f(x)$ almost everywhere, the unique solution satisfies $u(\gamma x)=\sigma(\gamma)u(x)$ almost everywhere. This includes $V=\mathfrak{su}(2)$ with its Frobenius norm and a prescribed action by orthogonal Lie-algebra automorphisms.

The compatibility $\int f=0$ is necessary. This is a linear $L^2$ boundary-solvability result; higher-$L^p$ Neumann estimates and nonlinear Coulomb-gauge existence are separate assertions.

## Statement references

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains|Divergence theorem]]

[[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n|Mean-zero Poincare estimate]]

[Axler–Shin, *The Neumann problem on ellipsoids*, §2](https://www.axler.net/NeumannSpringer.pdf)

## Facts & Assumptions

[F1] The divergence theorem holds for smooth vector fields on the closed ball and gives integration by parts with the outward unit normal ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] On $B_1$ there is $P>0$ with $\|v\|_2\le P\|\nabla v\|_2$ for scalar mean-zero $v\in W^{1,2}$. Summing the squared scalar inequalities in an orthonormal basis gives the same inequality for $V$-valued functions ([[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n]]).

[F3] The polynomial algebra on the compact closed unit ball is uniformly dense in its real continuous functions, by the unital point-separating algebra criterion of [[thm-real-stone-weierstrass-for-compact-metric-spaces]]. Smooth compactly supported functions in $B_1$ are dense in $L^2(B_1)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F4] $L^2$ is complete, and Holder controls its pairings and means ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-holder-inequality-for-integrals]]).

[F5] The ball has a bounded Sobolev extension operator. Extend a $W^{1,2}$ class to $\mathbb R^4$ and approximate there by smooth functions to obtain restrictions of functions smooth on a neighbourhood of $\overline B_1$ converging in $W^{1,2}(B_1)$ ([[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-meyers-serrin-density-on-an-arbitrary-open-set]]).

[F6] Full AC supplies the Countable Choice used by the analytic suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** Full AC, the space $V$, the radius and mean-zero datum of the statement. Work first on $B_1$.

1.1 **A finite harmonic decomposition.** If $p$ is homogeneous of degree $d$ on $\mathbb R^4$, put $N=\lfloor d/2\rfloor$, $c_0=1$, and $c_j=-c_{j-1}/(4j(d-j+1))$ for $1\le j\le N$. Define $H=\sum_{j=0}^Nc_j|x|^{2j}\Delta^jp$. For homogeneous $Q$ of degree $d-2j$, product differentiation and Euler's identity give $\Delta(|x|^{2j}Q)=4j(d-j+1)|x|^{2j-2}Q+|x|^{2j}\Delta Q$. Hence successive terms cancel in $\Delta H$, and $\Delta^{N+1}p=0$ gives $\Delta H=0$. All denominators are positive in their stated range. Moreover $p-H$ is divisible by $|x|^2$. Induction on $d$, starting with degrees zero and one, therefore writes $p$ as a finite sum $\sum_k|x|^{2k}H_{d-2k}$ with homogeneous harmonic $H_{d-2k}$. Decomposing each homogeneous piece of an arbitrary polynomial and then restricting to the unit sphere writes its restriction as $\sum_{l=0}^L G_l|_{\partial B_1}$ with each $G_l$ homogeneous harmonic of degree $l$. All constructions apply coefficientwise to $V$. [given, construct, induction, algebra]

1.2 **A polynomial antiderivative of the Laplacian.** On a monomial $x_1^a x_2^{b_2}x_3^{b_3}x_4^{b_4}$ define $I$ to multiply by $x_1^2/((a+1)(a+2))$; extend linearly to polynomials. Then $\partial_1^2I=\mathrm{id}$, and $I$ commutes with $\Delta'=\partial_2^2+\partial_3^2+\partial_4^2$. For a polynomial $f$, choose $M$ so that $(\Delta')^{M+1}f=0$ and set $p=-\sum_{k=0}^M(-1)^kI^{k+1}(\Delta')^kf$. Applying $\partial_1^2+\Delta'$ telescopes the finite sum and gives $\Delta p=-f$. [given, construct, algebra]

1.3 **Mean-zero polynomial density.** Given an $L^2$ function on $B_1$, first approximate it in $L^2$ by a compactly supported smooth function using [F3]. Extend this smooth function by zero near the boundary; it is continuous on the compact closed ball. Apply the polynomial density of [F3] uniformly, which also gives $L^2$ approximation by [F4]. Thus polynomials are dense in $L^2(B_1)$, coefficientwise for $V$. For mean-zero $f$, take polynomial approximants $p_j\to f$ and replace $p_j$ by $f_j=p_j-(p_j)_{B_1}$. Holder gives $\|(p_j)_{B_1}\|\,|B_1|^{1/2}\le\|p_j-f\|_2$, so these mean-zero polynomials still converge to $f$ in $L^2$. Full AC permits this sequential selection. [F3, F4, F6, construct, choose, algebra]

2.1 **The normal correction for polynomial data.** Suppose the polynomial $f$ has zero mean on $B_1$, choose $p$ from step 1.2, and let $g=-x\cdot\nabla p$ restricted to $\partial B_1$. By [F1], $\int_{\partial B_1}g=-\int_{B_1}\Delta p=\int_{B_1}f=0$. Decompose $g=\sum_lG_l|_{\partial B_1}$ by step 1.1. For $l\ge1$, Euler's identity and [F1] give $l\int_{\partial B_1}G_l=\int_{\partial B_1}\partial_\nu G_l=\int_{B_1}\Delta G_l=0$. Thus the constant $G_0$ is zero: its sphere integral vanishes and the sphere has positive area, since [F1] applied to $x$ gives $|\partial B_1|=4|B_1|>0$. The harmonic polynomial $h=\sum_{l\ge1}G_l/l$ satisfies $\partial_\nu h=g$ on the sphere. Hence $u=p+h$ satisfies $-\Delta u=f$ and $\partial_\nu u=0$. Subtracting its volume mean preserves these equations and gives a mean-zero polynomial solution. [F1, step 1.1, step 1.2, construct, algebra]

3.1 **The exact boundary Hessian estimate.** For a scalar smooth $u$ with $\partial_\nu u=0$ on $\partial B_1$, consider $Z=(\Delta u)\nabla u-D^2u\,\nabla u$. Direct differentiation cancels the third derivatives and gives $\operatorname{div}Z=(\Delta u)^2-|D^2u|^2$. On the sphere $\nabla u$ is tangential. Differentiating $\nabla u\cdot\nu=0$ in that tangential direction gives $D^2u(\nabla u,\nu)=-|\nabla u|^2$, because $\nabla_{\nabla u}\nu=\nabla u$ there. Thus $Z\cdot\nu=|\nabla u|^2$. By [F1], $\|\Delta u\|_2^2=\|D^2u\|_2^2+\int_{\partial B_1}|\nabla u|^2$. Sum the identity over an orthonormal basis of $V$. In particular every polynomial solution of step 2.1 satisfies $\|D^2u\|_2\le\|f\|_2$. [F1, step 2.1, algebra]

4.1 **The remaining terms and the weak identity.** Integration by parts [F1] for a mean-zero polynomial solution gives $\|\nabla u\|_2^2=\int\langle f,u\rangle\le\|f\|_2\|u\|_2\le P\|f\|_2\|\nabla u\|_2$ by [F2] and [F4]. Dividing when the gradient norm is nonzero, and treating zero separately, gives $\|\nabla u\|_2\le P\|f\|_2$ and $\|u\|_2\le P^2\|f\|_2$. Together with step 3.1 this yields $\|u\|_2+\|\nabla u\|_2+\|D^2u\|_2\le(1+P+P^2)\|f\|_2$. The all-test-function weak identity first holds for tests smooth near the closed ball by [F1], since the normal term vanishes; it then holds for every $W^{1,2}$ test by [F4]–[F5]. [F1, F2, F4, F5, step 2.1, step 3.1, algebra]

5.1 **Completion constructs the strong inverse.** For each $f_j$ choose the polynomial mean-zero solution $u_j$ of step 2.1. Their differences are polynomial mean-zero solutions for $f_j-f_k$, so steps 3.1–4.1 make $u_j$, all its first derivatives and all its second derivatives Cauchy in $L^2$. Completeness [F4] gives limits for each of these finitely many components. Passing in the weak derivative identities against a compactly supported smooth test identifies the first-derivative limits as the weak derivatives of the limit $u$, and then identifies the second-derivative limits as derivatives of those first derivatives. Hence $u\in W^{2,2}(B_1)$ and $u_j\to u$ strongly in that space. Its mean is zero by Holder. Passing to the limit in the weak identity of step 4.1 gives the displayed equation for every $W^{1,2}$ test. Norm continuity passes both estimates of steps 3.1–4.1 to $u$, including the constant-one Hessian bound. [F4, step 2.1, step 3.1, step 4.1, step 1.3, construct, algebra]

6.1 **Uniqueness, linearity and compatibility.** If two mean-zero $W^{1,2}$ solutions have the same datum, test their difference equation with the difference itself. Its gradient has zero $L^2$ norm; [F2] makes its $L^2$ norm zero, so the solutions agree. This proves uniqueness in the claimed $W^{2,2}$ class as well. Linear combinations satisfy the same linear weak identity and mean-zero normalization; uniqueness proves linearity of the inverse. Testing any weak solution with each constant vector in $V$ gives $\int f=0$, proving necessity. The polynomial solution of step 2.1 equals the completed solution by this uniqueness. [F2, F4, step 2.1, step 5.1, algebra]

7.1 **Every radius.** For data $f$ on $B_r$, put $f_r(y)=r^2f(ry)$ on $B_1$ and solve there for $v$ by step 5.1. Set $u(x)=v(x/r)$. Changing variables in the weak identity proves the required identity and mean-zero normalization on $B_r$. In four dimensions, $\|f_r\|_{L^2(B_1)}=\|f\|_{L^2(B_r)}$, $\|D^2v\|_2=\|D^2u\|_2$, $\|\nabla v\|_2=r^{-1}\|\nabla u\|_2$, and $\|v\|_2=r^{-2}\|u\|_2$. Thus the bounds follow with $C=1+P+P^2$, independent of $r$. The construction preserves polynomiality for polynomial data. [step 4.1, step 5.1, step 6.1, construct, algebra]

8.1 **Given finite equivariance and conclusion.** For $\gamma\in\Gamma$ let $T_\gamma u(x)=\sigma(\gamma)^{-1}u(\gamma x)$. Orthogonal changes of variables preserve the ball, volume, the gradient pairing and the zero mean; orthogonality of $\sigma(\gamma)$ preserves the target pairing. Therefore $T_\gamma u$ solves the same weak equation as $u$ when $T_\gamma f=f$. Uniqueness from step 6.1, rescaled as in step 7.1, gives $T_\gamma u=u$. This proves the equivariance for every element of the given finite group, including the stated Lie-algebra case. All existence, uniqueness and estimate claims are proved; full AC enters only through the analytic suppliers and the sequential approximation choices [F2]–[F6]. [F2, F3, F4, F5, F6, step 5.1, step 6.1, step 7.1, algebra] ∎

## Source notes

Axler–Shin's full Proposition 2.1, Theorem 2.2, Lemma 2.3 and Theorem 2.4 proofs, printed pp.263–268 (PDF pp.3–8), were read in the author-hosted full paper. Their generalized polynomial Neumann construction uses a polynomial anti-Laplacian and a harmonic normal correction. The ball case above supplies its own finite homogeneous-harmonic decomposition, so no unproved Fischer decomposition or polynomial Dirichlet theorem is imported. The boundary Hessian identity and the completion to all mean-zero $L^2$ data are proved explicitly here.

This constructs the strong mean-zero $L^2$ Neumann inverse and preserves a prescribed finite equivariance by uniqueness. It does not supply the higher-$L^p$ or Hodge estimates, nonlinear exponential iteration, or small-critical-curvature gauge construction needed in the full instanton foundations.
