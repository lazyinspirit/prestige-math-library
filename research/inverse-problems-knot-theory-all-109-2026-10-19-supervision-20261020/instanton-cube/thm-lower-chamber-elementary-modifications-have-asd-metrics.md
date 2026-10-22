---
id: thm-lower-chamber-elementary-modifications-have-asd-metrics
kind: theorem
title: Lower-chamber elementary modifications have ASD metrics
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-lower-chamber-one-charge-bundles-are-elementary-modifications
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Adam Jacob, Stable Higgs bundles and Hermitian-Einstein metrics on non-Kahler manifolds, Sections4–5, specialized to a Kahler surface and zero Higgs field
      url: https://arxiv.org/abs/1110.3768
    - title: Dan Popovici, A Simple Proof of a Theorem by Uhlenbeck and Yau
      url: https://arxiv.org/abs/math/0311031
---

## Statement

Assume full AC and the standard rank-one weak-holomorphic-projection regularity theorem stated below. Every locally free elementary modification in the lower-chamber classification, for a fixed product Kahler polarization $0<\rho<2$, has a smooth determinant-fixed Hermitian metric whose trace-free Chern connection is ASD. This metric is unique up to a constant central rescaling, hence unique after fixing its determinant metric. Every strictly semistable auxiliary degree-zero curve bundle $V$ is included when its resulting extension is locally free.

The proof constructs the metric by heat flow on the actual modified bundle; it does not conjugate a local vortex by an arbitrary complex frame and assume its Hermitian end data match. It is a pointwise existence result on the smooth holomorphic moduli. It does not provide a uniform inverse or compactification estimate for degenerating frame data, and does not evaluate the lower-chamber invariant.

## Facts & Assumptions

**Given:** The product compact Kahler surface, an actual locally free bundle $E$ in the classified family, and a smooth fixed determinant metric.

[F1] The slope proof in [[lem-lower-chamber-one-charge-bundles-are-elementary-modifications]] gives strict stability. Its explicit numerical cases give every saturated line a positive slope deficit at least $\min(\rho/2,1-\rho/2)$, in the stated intersection normalization. Full AC is inherited. [[def-axiom-of-choice]]

[F2] The analytic projection regularity theorem used here is: a rank-one $W^{1,2}$ orthogonal projection $\pi$ in a smooth holomorphic rank-two bundle, satisfying $(1-\pi)\bar\partial\pi=0$ weakly, agrees away from an analytic codimension-two set with the projection onto a coherent saturated rank-one subsheaf. The regularity theorem and its local meromorphic-generation proof are Theorem0.1.1 and Section0.3 of Popovici's full text. This is an explicit analytic input, not an assertion supplied by ordinary odd-end irreducibility. The heat-flow construction below proves the metric result from this input; no independent acceptance of this new analytic input is claimed.

## Proof

1.1 **Set up the determinant-fixed heat equation.** Choose a smooth reference Hermitian metric $H_0$ with the fixed determinant. The determinant connection can be normalized by solving its scalar Poisson equation so that its Kahler contraction is constant. Write $H=H_0h$, $h$ positive self-adjoint, $\det h=1$, and $K_H=(i\Lambda F_H)_0$. Solve
$$h^{-1}\partial_t h=-2K_H,\qquad h(0)=1.$$
Its principal part in a holomorphic frame is the positive scalar Laplacian on the Hermitian matrix coefficients, so local parabolic existence holds and positivity is preserved. The trace equation preserves determinant one. The curvature variation gives the heat inequality $(\partial_t-\Delta)|K_H|^2\le0$. Consequently $\|K_H\|_\infty$ is bounded by its initial value. The trace of the metric equation gives $\partial_t\operatorname{tr}h\le C\operatorname{tr}h$, so the metric cannot become unbounded in finite time once the derivative estimates of step 2.1 are applied. [given, construct, algebra]

2.1 **A metric bound supplies derivative control.** Suppose $\operatorname{tr}h\le M$ on a time interval. Since $\det h=1$, both $h$ and its inverse have bounded eigenvalues. Put $G=|h^{-1}\partial_{H_0}h|^2$. Differentiating the flow and the curvature formula
$$K_H-K_0=i\Lambda\bar\partial(h^{-1}\partial_{H_0}h)$$
gives the Bernstein inequalities
$$(\partial_t-\Delta)G\le C_M(G+1)-c_M|\nabla(h^{-1}\partial h)|^2,\qquad(\partial_t-\Delta)\operatorname{tr}h\le-c_MG+C_M.$$
The background curvature and its first derivatives are fixed; the positive and inverse metric factors are bounded by $M$. Thus adding a sufficiently large multiple of the second inequality to the first bounds $G$ by the maximum principle. Equivalently this is the zero-Higgs, torsion-free specialization of the explicit estimates in Sections4.1–4.3 of the first source. The curvature identity then bounds the elliptic Laplacian of $h$; elliptic $W^{2,p}$ estimates and differentiated parabolic equations give all higher derivatives on intervals bounded away from the initial time. Their constants depend only on $M$ and the smooth fixed data. The finite-time exponential trace bound from step 1.1 therefore proves existence for all $t\ge0$. [step 1.1, construct, algebra]

3.1 **Normalize a hypothetical unbounded flow.** Suppose $m(t)=\sup_S\operatorname{tr}h(t)$ is unbounded. For $0<\sigma\le1$, diagonalizing $h$ pointwise gives
$$|h^{-\sigma/2}\partial h^\sigma|^2\le i\Lambda\operatorname{tr}(h^{-1}\partial h\,\bar\partial h^\sigma).$$
Integration by parts and the uniform curvature contraction bound imply
$$\int_S|\partial(h/m)^\sigma|^2\le C,\qquad0\le(h/m)^\sigma\le1,$$
with $C$ independent of $\sigma$. The scalar trace inequality $-\Delta\operatorname{tr}h\le C\operatorname{tr}h$ and Moser iteration give $m\le C\int\operatorname{tr}h$. Interpolating between powers zero and one yields
$$m^\sigma\le C_\sigma\int_S\operatorname{tr}(h^\sigma),$$
where $C_\sigma$ stays bounded as $\sigma\downarrow0$ after taking the displayed power. Thus the normalized powers have a nonzero $L^2$ limit. [step 1.1, step 2.1, construct, algebra]

4.1 **Select times so that the limit has the correct degree inequality.** Choose $\sigma_j\downarrow0$. For each $j$, the unbounded function $f_j(t)=\int\operatorname{tr}h^{\sigma_j}$ admits times tending to infinity at running maxima, so $f_j'(t)\ge0$ and $m(t)\to\infty$ there. Along those times the normalized powers have weak $W^{1,2}$ and strong $L^2$ limits. A diagonal subsequence as $j\to\infty$ gives a nontrivial rank-one orthogonal projection
$$\pi=1-\lim_{j\to\infty}\lim_{k\to\infty}(h(t_{jk})/m(t_{jk}))^{\sigma_j}.$$
The constant-eigenvalue conclusion follows by applying the derivative inequality of step 3.1 to two powers and then letting their ratio tend to zero; the limiting spectral function is zero or one. Rank two and determinant one force one eigenvalue to vanish after normalization, while the Moser lower bound keeps the other nonzero. The elementary inequality
$$\frac{s+\sigma}{s}(1-\lambda^s)\le\lambda^{-\sigma},\qquad0<\lambda\le1,$$
inserted into the same derivative integral, and then the limits in the order $k$, $s\downarrow0$, $j$, gives $(1-\pi)\bar\partial\pi=0$. This is a weak projection, not yet a smooth line. [step 3.1, construct, algebra]

5.1 **Stability excludes that limit.** Apply the explicit analytic input [F2] and saturate its rank-one sheaf. The degree formula is
$$2\pi(\mu(F)-\mu(E))=\int_S\operatorname{tr}(K_0\pi)-\|\bar\partial\pi\|^2.$$
At the running maxima chosen in step 4.1, integration by parts in the power inequality has the nonnegative time term $f_j'(t)/(2\sigma_jm^{\sigma_j})$. Passing to the weak limit and using lower semicontinuity gives
$$\int_S\operatorname{tr}(K_0\pi)\ge\|\bar\partial\pi\|^2.$$
Thus the saturated line has slope at least $\mu(E)$, contradicting the explicit strict deficit [F1]. Hence $\operatorname{tr}h$ is bounded uniformly for all time. This contradiction applies to every classified extension, irrespective of whether its auxiliary $V$ is stable or strictly semistable; the stable object in this argument is $E$. [F1, F2, step 3.1, step 4.1, algebra]

6.1 **Extract an actual ASD metric and prove uniqueness.** Step 2.1 now gives uniform higher derivative bounds. The Kahler identities give
$$\frac{d}{dt}\|K_H\|_2^2=-4\|\bar\partial_EK_H\|_2^2.$$
Its bounded nonnegative left quantity admits times with $\bar\partial_EK_H\to0$. Smooth subsequential metric convergence gives a limiting Hermitian metric with parallel trace-free Hermitian $K$. If $K\ne0$, its parallel eigenlines give a holomorphic splitting of $E$; both lines cannot have slope strictly less than $\mu(E)$, contradicting [F1]. Thus $K=0$. The Chern connection has $F^{0,2}=0$ and trace-free Kahler contraction zero, exactly the ASD equation on a Kahler surface. For two determinant-fixed solutions, the integrated variation of the metric functional along their positive-Hermitian geodesic is the nonnegative norm of the derivative of their relative endomorphism. Vanishing at both endpoints makes it parallel. Stability forces that endomorphism to be scalar, and determinant fixing makes it the identity. The construction proves actual pointwise HYM/ASD existence and uniqueness. Uniform behavior as the holomorphic family degenerates remains a separate compactification problem. [F1, step 1.1, step 2.1, step 5.1, construct, algebra]
