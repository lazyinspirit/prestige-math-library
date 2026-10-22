---
id: lem-sharp-four-dimensional-sobolev-constant-from-triangular-transport
kind: lemma
title: The sharp four-dimensional Sobolev constant from finite triangular transport
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-riemann-fubini-on-product-rectangles
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-holder-inequality-for-integrals
  - thm-inverse-function-theorem-for-banach-spaces
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - thm-gaussian-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gursky, Kelleher and Streets, A Conformally Invariant Gap Theorem in Yang–Mills Theory
      url: https://arxiv.org/pdf/1708.01157
      locator: §3.2, printed p.9, the sharp round-four-sphere Yamabe constant; the finite triangular transport proof is reconstructed here
---

## Statement

Assume full AC. Every real smooth compactly supported function $f$ on $\mathbb R^4$ satisfies
$$\int_{\mathbb R^4}|\nabla f|^2\,dx\ \ge\ \frac{4\sqrt6\pi}{3}\left(\int_{\mathbb R^4}|f|^4\,dx\right)^{1/2}.$$
The constant is optimal. On the unit round four-sphere, with scalar curvature twelve, every real smooth function $u$ satisfies
$$\int_{S^4}(6|du|^2+12u^2)\,dV\ \ge\ 8\sqrt6\pi\left(\int_{S^4}|u|^4\,dV\right)^{1/2}.$$
Its constant is also optimal, with equality for constant functions. No classification of equality functions is asserted or required.

## Statement references

[Gursky–Kelleher–Streets, §3.2](https://arxiv.org/pdf/1708.01157)

## Facts & Assumptions

[F1] A $C^1$ diffeomorphism between Euclidean open sets obeys integrable change of variables under countable choice. [[cor-c-one-change-of-variables-for-l-one-functions]]

[F2] Iterated integration on rectangles and one-dimensional integration by parts are supplied by [[thm-riemann-fubini-on-product-rectangles]] and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]. Hölder gives the integral Cauchy–Schwarz bound. [[thm-holder-inequality-for-integrals]]

[F3] Strictly increasing smooth cumulative distribution functions with positive derivative have smooth inverse, including continuous derivatives up to finite endpoints when the density is positive there. This follows from the inverse theorem and compactness. [[thm-inverse-function-theorem-for-banach-spaces]]

[F4] Dominated and monotone convergence apply to the explicit integrals and cutoffs below. The one-dimensional Gaussian integral is $\sqrt\pi$. [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]] [[thm-gaussian-integral]]

[A1] Full AC supplies the countable-choice change-of-variables and analytic prerequisites. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC and the Euclidean and round metrics in the Statement; all Euclidean integrals in this proof have dimension four unless specified otherwise.

1.1 **An explicit triangular transport on boxes.** Let $F,G$ be positive smooth probability densities on closed boxes $B,D\subset\mathbb R^4$. Integrate out the later coordinates to obtain marginal densities $F^{(i)}(x_1,\ldots,x_i)$ and define conditional densities $F_i=F^{(i)}/F^{(i-1)}$, with $F^{(0)}=1$; do the same for $G$. They are positive smooth on their compact boxes. Define $T_1(x_1)$ by equating the cumulative integrals of $F_1$ and $G_1$. After defining $T_1,\ldots,T_{i-1}$, define $T_i(x_1,\ldots,x_i)$ by equating the conditional cumulative integral of $F_i$ with that of $G_i(T_1,\ldots,T_{i-1},\cdot)$. [F3] gives a smooth increasing inverse at each stage, and positivity on the compact boxes bounds all derivatives for these fixed densities. Thus $T$ is a smooth diffeomorphism of box interiors, with triangular inverse and positive diagonal derivatives $\partial_iT_i=F_i/G_i(T)$. Multiplication telescopes to $\det DT=F/G(T)$; hence [F1] says $T$ pushes $F\,dx$ to $G\,dy$. Since its diagonal derivatives are positive, their arithmetic-geometric-mean inequality gives $(\det DT)^{1/4}\le(\operatorname{div}T)/4$. This construction uses four scalar inversions, without any optimal-transport existence theorem. [F1, F2, F3, A1, construct, algebra]

2.1 **The estimate with every boundary term retained.** First let $f\ge0$ be smooth and compactly supported, normalized by $\int f^4=1$, and choose a fixed box $B$ with its support in the interior. For $\varepsilon>0$ put $Z_\varepsilon=\int_B(f^4+\varepsilon)$, $h_\varepsilon=((f^4+\varepsilon)/Z_\varepsilon)^{1/4}$ and $F_\varepsilon=h_\varepsilon^4$. Let $G=g_D^4$ be any positive smooth probability density on a fixed target box $D$, and let $T$ be step 1.1's map. Changing variables gives $\int_D g_D^3=\int_Bh_\varepsilon^3(\det DT)^{1/4}$. The diagonal inequality and coordinatewise integration by parts from [F2] give $\int_Dg_D^3\ \le\ \frac14\int_{\partial B}h_\varepsilon^3T\cdot n\,dS-\frac34\int_Bh_\varepsilon^2\nabla h_\varepsilon\cdot T\,dx.$ Here the boundary expression is the sum over the eight faces, justified by four applications of one-dimensional integration by parts, so no smooth-boundary divergence theorem on a cornered box is used. Since $f=0$ near those faces and $T(B)\subset D$, its absolute value is at most $C_{B,D}\varepsilon^{3/4}Z_\varepsilon^{-3/4}$. Cauchy–Schwarz and the pushforward identity give $|\int h_\varepsilon^2\nabla h_\varepsilon\cdot T|\le\|\nabla h_\varepsilon\|_2(\int_D|y|^2g_D^4)^{1/2}$. Moreover $|\nabla h_\varepsilon|=Z_\varepsilon^{-1/4} f^3(f^4+\varepsilon)^{-3/4}|\nabla f|\le Z_\varepsilon^{-1/4}|\nabla f|$. Letting $\varepsilon\downarrow0$ therefore gives $\int_Dg_D^3\ \le\ \frac34\|\nabla f\|_2\left(\int_D|y|^2g_D^4\,dy\right)^{1/2}.$ All derivative bounds used to integrate by parts were only for each fixed positive $\varepsilon$; no uniform bound on $DT$ was assumed. [F1, F2, F4, step 1.1, construct, algebra]

3.1 **The exact target integrals.** Put $g(y)=c/(1+|y|^2)$, $c=(6/\pi^2)^{1/4}$, and on $D_R=[-R,R]^4$ put $g_R=g/(\int_{D_R}g^4)^{1/4}$. These are positive smooth target functions satisfying the preceding hypotheses. Polar change of variables gives $\int_{\mathbb R^4}(1+|y|^2)^{-4}\,dy=\frac{\pi^2}{6},\quad \int_{\mathbb R^4}(1+|y|^2)^{-3}\,dy=\frac{\pi^2}{2},\quad \int_{\mathbb R^4}|y|^2(1+|y|^2)^{-4}\,dy=\frac{\pi^2}{3}.$ For completeness the radial factor is $2\pi^2r^3dr$: ordinary angular change of variables determines a constant multiple of $r^3dr$, and comparison with the product Gaussian integral $\int e^{-|y|^2}dy=\pi^2$ from [F2]–[F4], together with $\int_0^\infty e^{-r^2}r^3dr=1/2$, fixes that constant. Substituting $s=r^2$ in the three rational integrals gives respectively $\pi^2\int_0^\infty s(1+s)^{-4}ds=\pi^2/6$, $\pi^2\int_0^\infty s(1+s)^{-3}ds=\pi^2/2$, and $\pi^2\int_0^\infty s^2(1+s)^{-4}ds=\pi^2/3$, by elementary antiderivatives. Hence $\int g^4=1$, $\int g^3=c^3\pi^2/2$, and $\int |y|^2g^4=2$. Monotone convergence in step 2.1 as $R\to\infty$ gives $c^3\pi^2/2\le(3\sqrt2/4)\|\nabla f\|_2$. Squaring yields $\|\nabla f\|_2^2\ge(4\sqrt6\pi/3)$ under its normalization. Homogeneity removes that normalization. [F1, F2, F4, step 2.1, construct, algebra]

4.1 **Signs and optimality.** For arbitrary real smooth compactly supported $f$, replace its absolute value by $f_\delta=\sqrt{f^2+\delta^2}-\delta$. This is nonnegative, smooth and supported in the same compact set, with $|\nabla f_\delta|\le|\nabla f|$ and $f_\delta\to|f|$ in $L^4$ by [F4]. Step 3.1 therefore gives the claimed inequality without any regularity assertion about the zeros of $f$. It is sharp: for $w(y)=(1+|y|^2)^{-1}$ direct radial integration gives $\int w^4=\pi^2/6$ and $\int|\nabla w|^2=4\pi^2/3$, whose ratio is $4\sqrt6\pi/3$. Smooth cutoffs equal to one on the radius-$R$ ball, zero outside the radius-$2R$ ball and with derivative at most $C/R$ converge to $w$ in $L^4$ and in gradient $L^2$; the extra annular gradient term has square integral $O(R^{-2})$. Thus compactly supported smooth functions approach that ratio. [F2, F4, step 3.1, construct, algebra]

5.1 **Round-sphere transfer.** Stereographic projection identifies the unit round metric away from one point with $g_0=\Omega^2\delta$, $\Omega(y)=2/(1+|y|^2)$; direct differentiation of the inverse projection gives this metric and $dV_{g_0}=\Omega^4dy$. For a smooth spherical $u$, put $v=\Omega u$ in these coordinates. The identity $-\Delta\Omega=2\Omega^3$, the product rule and integration by parts give $6\int_{\mathbb R^4}|\nabla v|^2dy=\int_{\mathbb R^4}(6\Omega^2|\nabla u|^2+12\Omega^4u^2)dy=\int_{S^4}(6|du|^2+12u^2)dV.$ To justify the integration on the full space, $u$ is bounded and $\nabla u=O(|y|^{-2})$ at infinity by the inverse stereographic coordinate formula; hence $v=O(|y|^{-2})$, $\nabla v=O(|y|^{-3})$, and smooth radial cutoffs as in step 4.1 have vanishing boundary errors and converge in gradient $L^2$ and in $L^4$. Also $\int v^4dy=\int_{S^4}u^4dV$. Applying the Euclidean inequality to those cutoffs and passing to the limit proves the spherical inequality with constant $6\cdot4\sqrt6\pi/3=8\sqrt6\pi$. Finally $\operatorname{Vol}(S^4)=\int\Omega^4dy=8\pi^2/3$ by step 3.1, so the quotient for $u=1$ is $12\operatorname{Vol}(S^4)^{1/2}=8\sqrt6\pi$. This proves optimality and all assertions. [F1, F2, F4, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

The entire eleven-page Gursky–Kelleher–Streets paper was read, including its imported use of Aubin's sharp sphere constant on p.9. That imported sharp inequality is proved here by an explicit finite triangular conditional-distribution construction, with source-density regularization, bounded target truncation and the nonzero box boundary terms controlled before taking limits. No Brenier map, rearrangement theorem, sharp isoperimetric inequality, Yamabe existence theorem or equality classification is being used as an unproved premise.
