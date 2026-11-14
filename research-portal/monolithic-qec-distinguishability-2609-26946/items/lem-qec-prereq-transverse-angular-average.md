---
id: lem-qec-prereq-transverse-angular-average
kind: lemma
domain: mathematics
title: Transverse projector and isotropic angular contraction
status: draft
origin: session
deps:
  - math:def-orthogonal-projection
  - math:def-inner-product-space
  - physics:def-polar-surface-measure-on-the-unit-sphere
  - physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  - math:def-countable-choice
  - math:thm-ftc-second-part
  - math:thm-sine-and-cosine-derivatives
  - math:thm-sine-and-cosine-addition-formulas
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - math:cor-differentiable-implies-continuous
  - math:thm-continuous-implies-integrable
  - math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:thm-algebra-of-derivatives
  - math:thm-lebesgue-measure-of-a-box-of-every-kind
  - math:thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - math:thm-continuous-preimages-of-borel-sets-are-borel
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:prop-order-and-scalar-rules-for-the-nonnegative-integral
  - math:prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - math:def-integral-of-a-nonnegative-simple-function
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel
dependency_roles:
  math:def-orthogonal-projection: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  physics:def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-ftc-second-part: mathematical-premise
  math:thm-sine-and-cosine-derivatives: mathematical-premise
  math:thm-sine-and-cosine-addition-formulas: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  math:cor-differentiable-implies-continuous: mathematical-premise
  math:thm-continuous-implies-integrable: mathematical-premise
  math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  math:thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  math:thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  math:prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  math:def-integral-of-a-nonnegative-simple-function: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  math:def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  math:thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Assume Countable Choice. Let $S^2=\{x\in\mathbb R^3:|x|=1\}$ carry polar surface measure $\sigma$. For $n\in S^2$, let $n^\perp=\{v\in\mathbb C^3:\sum_i v_i n_i=0\}$ and let $\varepsilon_1,\varepsilon_2$ be an orthonormal complex basis of $n^\perp$ for the standard inner product $\langle u,v\rangle=\sum_i u_i\overline{v_i}$. Then, for $i,j\in\{1,2,3\}$, $$\sum_{a=1}^2\varepsilon_{a,i}\overline{\varepsilon_{a,j}}=\delta_{ij}-n_i n_j,\qquad \int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma(n)=\frac{8\pi}{3}\delta_{ij}.$$ Here $\delta_{ij}$ is $1$ if $i=j$ and $0$ otherwise. Real orthonormal transverse vectors are a special case.

## Statement references

[[math:def-inner-product-space]]

[[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[[math:def-orthogonal-projection]]

[[physics:def-polar-surface-measure-on-the-unit-sphere]]

[[physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]

[[math:def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, $n$, the transverse basis and indices as in the statement.

**Goal:** Prove the projection identity and its surface integral.

[F1] In a finite-dimensional inner product space the orthogonal projection onto a subspace gives the unique subspace component whose residual is orthogonal to that subspace. The inner product is linear in its first argument and conjugate-linear in its second. [[math:def-orthogonal-projection]] [[math:def-inner-product-space]] An orthonormal basis is a spanning basis with pairwise orthogonal unit vectors; thus $\langle\varepsilon_a,\varepsilon_b\rangle=\delta_{ab}$. [[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[F2] Under Countable Choice, polar surface measure $\sigma$ on $S^2$ has total mass $4\pi$, and for an integrable function its integral is the integral over $(0,\pi)\times(0,2\pi)$ of its value at $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ times $\sin\theta$. [[physics:def-polar-surface-measure-on-the-unit-sphere]] [[physics:lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]] [[math:def-countable-choice]]

[F3] Fubini's theorem computes an $L^1$ integral on a product of sigma-finite measure spaces by iterated integrals. [[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] Sine and cosine have derivatives $\cos$ and $-\sin$, obey their addition formulas and $\sin^2 t+\cos^2 t=1$; the fundamental theorem evaluates the integral of an integrable derivative by its endpoint values. [[math:thm-sine-and-cosine-derivatives]] [[math:thm-sine-and-cosine-addition-formulas]] [[math:cor-trigonometric-parity-and-pythagorean-identity]] [[math:thm-ftc-second-part]]

[F5] A differentiable real function is continuous; a continuous real function on a closed bounded interval is bounded and Riemann integrable. Under Countable Choice, a bounded Riemann integrable function on that interval is Lebesgue integrable with the same integral. [[math:cor-differentiable-implies-continuous]] [[math:thm-continuous-implies-integrable]] [[math:thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F6] The quarter-turn and shift formulas give $\sin\pi=0$ and $\cos\pi=-1$. The sum, scalar-multiple and product rules differentiate polynomials in differentiable functions. [[math:thm-quarter-turn-values-and-shift-formulas]] [[math:thm-algebra-of-derivatives]]

[F7] Under Countable Choice, a closed or open interval has Lebesgue measure its length, and a degenerate closed interval has measure zero. Integrable functions equal almost everywhere have equal integrals over every measurable set. [[math:thm-lebesgue-measure-of-a-box-of-every-kind]] [[math:thm-the-lebesgue-integral-respects-almost-everywhere-equality]]

[F8] Continuous real maps are Borel measurable. A measurable real function is Lebesgue integrable when its absolute integral is finite. The nonnegative integral is monotone, agrees with the simple integral on nonnegative simple functions, and the simple integral of a constant $M\ge0$ on a finite measure space is $M\mu(X)$. The Lebesgue integral is linear on integrable functions. [[math:thm-continuous-preimages-of-borel-sets-are-borel]] [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[math:prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[math:def-integral-of-a-nonnegative-simple-function]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F9] Under Countable Choice, $\lambda_1\times\lambda_1$ and $\lambda_2$ agree on every Borel subset of $\mathbb R^2$, and $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$. [[math:thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]] [[math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

## Proof

**Given:** Countable Choice, $n$, the transverse basis and indices as in the statement.

**Goal:** Prove the projection identity and its surface integral.

1.1 For any $v\in\mathbb C^3$, put $w=\sum_a\langle v,\varepsilon_a\rangle\varepsilon_a$. Orthonormality gives $w\in n^\perp$ and $\langle v-w,\varepsilon_b\rangle=0$ for both $b$; since the two vectors span $n^\perp$, $v-w$ is orthogonal to that space. Thus $w$ is its orthogonal projection by [F1]. Also $v-\langle v,n\rangle n\in n^\perp$ and $\langle v,n\rangle n$ is orthogonal to $n^\perp$, so uniqueness gives $\sum_a\langle v,\varepsilon_a\rangle\varepsilon_a=v-\langle v,n\rangle n$. Taking $v$ to be the $j$th standard basis vector and comparing $i$th coordinates proves the first identity. [given, F1, algebra]

1.2 Every one-variable integrand used below is a polynomial in $\sin t$ and $\cos t$, so is differentiable by [F4] and [F6], continuous by [F5], and bounded and Riemann integrable on the relevant closed interval by [F5]. Under the assumed Countable Choice, [F5] identifies its Riemann integral with its Lebesgue integral. For any such integrand $f$ on $[a,b]$, [F7] makes $\{a,b\}$ null. Both $f$ and $f\mathbf 1_{(a,b)}$ are bounded measurable functions on this finite measure space; if $|f|\le M$, [F8] gives $\int|f\mathbf 1_{(a,b)}|\le M(b-a)<\infty$, and likewise for $f$. They agree almost everywhere, so [F7] identifies the closed-interval integral with the open-interval Lebesgue integral. All one-dimensional integrals below may therefore be evaluated by the Darboux FTC in [F4] and used on the open angular intervals. [given, F4, F5, F6, F7, F8]

2.1 The addition formulas in [F4] at $\pi+\pi$, using [F6], give $\sin(2\pi)=0$ and $\cos(2\pi)=1$; [F4] gives the values at zero. The derivatives of $t$ and of a constant are $1$ and $0$, directly from their difference quotients. The product rules in [F6] and $\cos^2t+\sin^2t=1$ in [F4] show that primitives for $\cos^2t$, $\sin^2t$, $\sin t$, $\cos t$, $\sin t\cos t$, and $1$ are, respectively, $(t+\sin t\cos t)/2$, $(t-\sin t\cos t)/2$, $-\cos t$, $\sin t$, $\sin^2t/2$, and $t$. These primitives are differentiable on all of $\mathbb R$, so their restrictions have the one-sided endpoint derivatives required by [F4]. Applying [F4] and step 1.2 on $[0,2\pi]$ gives $\int_0^{2\pi}\cos^2\varphi\,d\varphi=\int_0^{2\pi}\sin^2\varphi\,d\varphi=\pi$ and $\int_0^{2\pi}1\,d\varphi=2\pi$, whereas the integrals of $\sin\varphi$, $\cos\varphi$ and $\sin\varphi\cos\varphi$ are zero. [F4, F6, step 1.2, algebra]

2.2 The product rules in [F6] give $(-\cos t+\cos^3t/3)'=\sin t-\cos^2t\sin t=\sin^3t$ by [F4], and $(-\cos^3t/3)'=\cos^2t\sin t$. The endpoint values $\cos0=1$ and $\cos\pi=-1$ from [F4] and [F6], together with the FTC and step 1.2, therefore give $\int_0^\pi\sin^3\theta\,d\theta=4/3$ and $\int_0^\pi\cos^2\theta\sin\theta\,d\theta=2/3$. [F4, F6, step 1.2, algebra]

3.1 The sphere functions $n_i n_j$ are bounded by $1$ and continuous: for $n,m\in S^2$, $|n_i n_j-m_i m_j|\le |n_i-m_i|+|n_j-m_j|\le2|n-m|$. They are Borel measurable by [F8] and have absolute integral at most $\sigma(S^2)=4\pi$ by [F2] and [F8]. Their angular integrands $g(\theta,\varphi)=n_i(\Phi(\theta,\varphi))n_j(\Phi(\theta,\varphi))\sin\theta$ are continuous and bounded by $1$ on $R=(0,\pi)\times(0,2\pi)$, whose planar Lebesgue measure is $2\pi^2$ by [F7]. Hence they are Borel and $\lambda_2$-integrable by [F8]. By [F9] with $m=n=1$, the Borel sigma-algebra on this open rectangle is the product of its one-dimensional Borel sigma-algebras, and planar Lebesgue measure there agrees with the product of the one-dimensional Lebesgue measures restricted to Borel sets. Thus the integrals of $g$ and $|g|$ agree for these measures, and $g$ is also integrable for the product measure. Each angular interval has finite measure by [F7], so the two factor spaces are sigma-finite, as required by [F3]. The sphere formula [F2] and Fubini [F3] now give the diagonal moments as $(4/3)\pi$, $(4/3)\pi$, and $(2/3)(2\pi)$ by steps 2.1 and 2.2. For the $12$, $13$ and $23$ off-diagonal moments, the respective $\varphi$ factors are $\cos\varphi\sin\varphi$, $\cos\varphi$ and $\sin\varphi$, whose integrals vanish by step 2.1; the reversed indices have the same products. Thus $\int_{S^2}n_i n_j\,d\sigma=(4\pi/3)\delta_{ij}$. Linearity in [F8] and the total mass in [F2] give $\int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma=(8\pi/3)\delta_{ij}$, completing the second identity. [F2, F3, F7, F8, F9, step 2.1, step 2.2, algebra] ∎
