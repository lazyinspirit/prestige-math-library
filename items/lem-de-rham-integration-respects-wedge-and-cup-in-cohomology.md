---
id: "lem-de-rham-integration-respects-wedge-and-cup-in-cohomology"
kind: "lemma"
title: "De Rham integration respects wedge and cup in cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","thm-cup-product-leibniz-identity","def-de-rham-integration-cochain-map","thm-de-rham-integration-is-a-cochain-map","lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy","lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals","lem-stokes-theorem-for-the-standard-simplex","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-smooth-singular-simplex"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Joel W. Robbin, The de Rham Theorem
      url: https://people.math.wisc.edu/~jwrobbin/751dir/deRham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a smooth manifold, possibly with boundary. With positive singular coboundary and the front/back cup convention, there is a natural real-bilinear operator
$$K_M:\Omega^p(M)\times\Omega^q(M)\longrightarrow C^{p+q-1}_\infty(M;\mathbb R),\qquad p,q\ge0,$$
zero when $p+q=0$, such that
$$I(\alpha\wedge\beta)-I\alpha\smile I\beta=\delta K(\alpha,\beta)+K(d\alpha,\beta)+(-1)^pK(\alpha,d\beta).$$
In particular, for closed forms the two displayed smooth singular cocycles differ by the explicit coboundary $\delta K(\alpha,\beta)$, naturally in $M$, and integration respects wedge and cup on cohomology. This compatibility is choice-free; it does not assume the bijectivity of the de Rham comparison.

## Facts & Assumptions

[F1] [[def-singular-cup-product-on-cochains]] gives the unsigned front/back evaluation formula. The same formula on smooth simplices defines their cup product, since all affine faces remain smooth.

[F2] [[thm-cup-product-leibniz-identity]] proves the positive-coboundary Leibniz formula and descent to cocycle classes; its face calculation applies to the smooth subcomplex without alteration.

[F3] [[def-de-rham-integration-cochain-map]] defines $I$ by smooth simplex integration and gives real linearity and the degree conventions.

[F4] [[thm-de-rham-integration-is-a-cochain-map]] proves $\delta I=Id$.

[F5] [[lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy]] supplies the finite affine chains $h_n$ in $Q_n=\Delta^n\times\Delta^n$, with $h_0=0$ and $a_n-b_n=\partial h_n+\sum_i(-1)^i(\delta_i\times\delta_i)_\#h_{n-1}$.

[F6] [[lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals]] computes external-form integrals over the signed shuffle, and proves vanishing for mismatched bidegrees.

[F7] [[lem-stokes-theorem-for-the-standard-simplex]] gives Stokes on every affine simplex summand of $h_n$.

[F8] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives the derivative, pullback and wedge identities for all the manifolds and maps here, including boundary targets.

[F9] [[def-smooth-singular-simplex]] requires one smooth extension of a simplex to a neighbourhood of its entire standard simplex with values in $M$, not merely extensions of its face restrictions.

## Proof

**Given:** $M$, forms $\alpha\in\Omega^p(M)$, $\beta\in\Omega^q(M)$ and $N=p+q$. All chains are finite, ordinary and unnormalized.

1.1 For a smooth $n$-simplex $\sigma$, [F9] supplies an extension $\bar\sigma:O\to M$, where $O$ is open in the affine span and contains $\Delta^n$. By [F8], $\bar\sigma^*\alpha$ and $\bar\sigma^*\beta$ are smooth forms on the boundaryless open set $O$, even when $\sigma$ meets $\partial M$. Define the degree-$N$ form on the Euclidean-open product $O\times O$ by $$\Theta_\sigma(\alpha,\beta)=\operatorname{pr}_1^*(\bar\sigma^*\alpha)\wedge\operatorname{pr}_2^*(\bar\sigma^*\beta).$$ Only its germ along $Q_n$ will be integrated. Changing the extension does not change that germ's restriction or any derivatives along $Q_n$: the pulled-back forms agree on the interior of $\Delta^n$ and hence with all derivatives on its closure. Consequently all the affine-chain integrals below are independent of the extension, by [F5] and [F6]. No product manifold $M\times M$ with corners is used. [F5, F6, F8, F9, given]

2.1 For $N\ge1$ and a smooth $(N-1)$-simplex define $$K(\alpha,\beta)(\sigma)=\int_{h_{N-1}}\Theta_\sigma(\alpha,\beta),$$ extending from simplex generators linearly to chains. For $N=0$, put $K=0$ in the zero group $C^{-1}_\infty$. Each integral is over a specified finite chain; step 1.1 gives its unique value without choosing extensions simultaneously for all simplices. The wedge and integral are bilinear, so this defines a real-bilinear cochain operator. For a smooth $f:L\to M$, the equality $(f\bar\sigma)^*=\bar\sigma^*f^*$ in [F8] makes the integrands for $K_L(f^*\alpha,f^*\beta)(\sigma)$ and $K_M(\alpha,\beta)(f\sigma)$ identical. Thus $K_L(f^*\alpha,f^*\beta)=f^*K_M(\alpha,\beta)$. [F3, F5, F8, F9, step 1.1]

2.2 Let $N\ge1$ and evaluate on a smooth $N$-simplex $\sigma$. Pulling $\Theta_\sigma$ back by the diagonal affine simplex $a_N$ gives $\sigma^*(\alpha\wedge\beta)$ by [F8]. In the sum $b_N$ of [F5], the cut with dimensions $(r,N-r)$ integrates to zero by [F6] unless $(r,N-r)=(p,q)$. That remaining cut has integral $(\int_{\sigma[0,\ldots,p]}\alpha)(\int_{\sigma[p,\ldots,N]}\beta)$, again by [F6]. By the actual cup formula [F1], therefore, $$\bigl(I(\alpha\wedge\beta)-I\alpha\smile I\beta\bigr)(\sigma)=\int_{a_N-b_N}\Theta_\sigma.$$ This uses the signed shuffle with its orientation signs already calculated, not an assumed multiplicative comparison theorem. [F1, F3, F5, F6, F8, step 1.1]

3.1 Substitute the affine-chain identity [F5] into step 2.2. On the $i$th face model, pullback by $\delta_i\times\delta_i$ changes $\Theta_\sigma$ into $\Theta_{\sigma\delta_i}$; the restricted extension is admissible on a neighbourhood of the face. Thus the face sum is exactly $K(\alpha,\beta)(\partial\sigma)=\delta K(\alpha,\beta)(\sigma)$. For the other term, apply [F7] to every affine simplex summand of $h_N$ to get $\int_{\partial h_N}\Theta_\sigma=\int_{h_N}d\Theta_\sigma$. All these pullbacks have smooth neighbourhood extensions by step 1.1. Equation [F8] gives $$d\Theta_\sigma(\alpha,\beta)=\Theta_\sigma(d\alpha,\beta)+(-1)^p\Theta_\sigma(\alpha,d\beta).$$ By step 2.1 their integrals over $h_N$ are precisely $K(d\alpha,\beta)(\sigma)$ and $(-1)^pK(\alpha,d\beta)(\sigma)$. This proves the asserted cochain identity in total degrees $N\ge1$. [F3, F5, F7, F8, step 1.1, step 2.1, step 2.2]

4.1 If $N=0$, both forms are functions and $I(\alpha\beta)$ and $I\alpha\smile I\beta$ agree on every vertex as the product of their values. Here $\delta K=0$, and both derivative terms evaluate $h_0=0$, so the right side is zero too. For $N=1$, $K(\alpha,\beta)$ itself uses $h_0=0$, whereas its derivative terms use $h_1$; step 3.1 includes precisely this first endpoint case. At top form degree or above it, a zero form is treated as zero, but smooth chains in those degrees remain present and the same chain identity still applies. [F1, F3, F5, step 2.1, step 3.1]

5.1 Now let $d\alpha=d\beta=0$. By [F8] their wedge is closed, and by [F4] its image under $I$ and both individual images are cocycles. By [F2] the cup of the latter is a cocycle as well. The two derivative terms in step 3.1 vanish by bilinearity, leaving the claimed coboundary. To check the form quotient explicitly, if $\alpha$ changes to $\alpha+d\xi$ and $\beta$ to $\beta+d\eta$, the wedge changes by $$d\bigl(\xi\wedge\beta+(-1)^p\alpha\wedge\eta+\xi\wedge d\eta\bigr),$$ by the signed derivative rule and the two closure equations; omit negative-degree terms when $p=0$ or $q=0$. Its image is exact by [F4], and the cup representatives descend by [F2]. Hence the equality is an equality of well-defined products of cohomology classes. Naturality is the operator identity proved in step 2.1. [F2, F4, F8, step 2.1, step 3.1, step 4.1]

6.1 Empty manifolds have zero cochains and zero form spaces; zero inputs give zero throughout. On a point the total-degree-zero product is the product of values and positive-degree forms vanish. Constant simplices, repeated vertices and all other degenerate simplices remain covered by the finite affine-chain identities. Boundary targets are handled by the actual extension in step 1.1, not by pushing extensions outside $M$. The recursion, finite integrals and unique extension-independent values require no AC. Neither the countable-choice global de Rham isomorphism nor any unsupplied continuous-chain smoothing is used. [F3, F5, F6, F9, step 1.1, step 2.1, step 4.1, step 5.1] ∎
