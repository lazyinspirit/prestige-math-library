---
id: ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition
kind: example
title: "A point and projective-line check of source-first convolution and opposite composition"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary,
       def-axiom-of-choice,
       def-complex-projective-space-and-holomorphic-charts,
       def-cw-complex-with-closure-finiteness-and-weak-topology,
       def-equivariant-borel-moore-homology-and-correspondence-convolution,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       def-schubert-cells-in-real-and-complex-grassmannians,
       def-stiefel-space-grassmannian-and-tautological-bundle,
       lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients,
       thm-projective-space-proper-over-base,
       thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product,
       thm-schubert-cells-give-the-stable-grassmannian-cw-structure,
       thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. Hatcher, Algebraic Topology (Cambridge University Press, 2002); author-hosted complete PDF, Example 0.6 (CW structure of CP^n, PDF p. 7), SS2.2 (cellular homology and the no-adjacent-cells computation, printed pp. 138-141) and SS3.2 (cohomology of CP^n, printed pp. 220-222)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "V. Ginzburg, Geometric methods in representation theory, arXiv:math/9802004; lecture notes for the 1997 summer school (complete 30-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
---

## Example

Assume the Axiom of Choice as inherited from the cited constructible and cellular suppliers. In
the point/projective-line geometry with $E=\mathrm{pt}$, $X_1=\mathrm{pt}$, $X_2=\mathbb P^1$,
$d_1=0$, $d_2=1$ and $L_1=k$, $L_2=R\Gamma(\mathbb P^1,k)[1]$ in the setting of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]], let
$\alpha\in\operatorname{Ext}^{-1}(L_1,L_2)$ be the unit $k\to R\Gamma(\mathbb P^1,k)$ and let
$\beta\in\operatorname{Ext}^{1}(L_2,L_1)$ be point evaluation
$R\Gamma(\mathbb P^1,k)[1]\to k[1]$, that is, evaluation $H^0(\mathbb P^1,k)\to k$ shifted by
$1$ and extended by zero on $H^2$. Then
$\alpha*\beta=\beta[-1]\circ\alpha=\operatorname{id}_k$ in the source-first convention of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]], and under the
correspondence isomorphism of
[[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] one has
$[\mathbb P^1]*[\mathrm{pt}]=[\mathrm{pt}]$: the refined diagonal intersection of the fundamental
class of $\mathbb P^1$ with the point class is the point class, and proper pushforward to the
point corner gives its generator.

## Facts & Assumptions

**Given:** the Axiom of Choice; the trivial group $G=1$; the base $E=\mathrm{pt}$; the sources
$X_1=\mathrm{pt}$ and $X_2=\mathbb P^1$ with $d_1=0$, $d_2=1$; the proper maps
$f_1:\mathrm{pt}\to\mathrm{pt}$ and $f_2:\mathbb P^1\to\mathrm{pt}$; the objects $L_1=k$ and
$L_2=R\Gamma(\mathbb P^1,k)[1]$; the unit $\alpha:k\to R\Gamma(\mathbb P^1,k)$ and the
evaluation $\beta:R\Gamma(\mathbb P^1,k)[1]\to k[1]$; and the conventions of
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]].

[F1] [[thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product]] supplies natural isomorphisms $\Phi_{ij}^r:\operatorname{Hom}(L_i,L_j[r])\xrightarrow{\sim}H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij};k)$ for all $r$ and $(i,j)$, and [[def-equivariant-borel-moore-homology-and-correspondence-convolution]] fixes the source-first product $a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ with degree drop $2d_j$, the corner degrees and the normalized diagonal class.

[F2] [[thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution]] supplies $\Phi_{ik}^{r+s}(\beta[r]\circ\alpha)=\Phi_{ij}^r(\alpha)*\Phi_{jk}^s(\beta)$ for composable morphisms, with the identity mapped to $[\Delta_{X_i}]$.

[F3] The projective line $\mathbb P^1$ is smooth of complex dimension $1$ ([[def-complex-projective-space-and-holomorphic-charts]]) and proper over $\operatorname{Spec}\mathbb C$ ([[thm-projective-space-proper-over-base]]); under $\mathbb P^1=\operatorname{Gr}_1(\mathbb C^2)$ the Schubert cells of [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[def-schubert-cells-in-real-and-complex-grassmannians]] and [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]] give a finite CW structure with one cell in real dimension $0$ and one in real dimension $2$.

[F4] With no cells in adjacent dimensions every cellular differential vanishes and $H_n\cong C_n^{\mathrm{cell}}$ ([[cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary]]), and cellular cochains compute cohomology with local coefficients ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F5] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]] fixes the positive complex orientation and the normalization of the diagonal Thom intersection: the positive generator is the one evaluating to $+1$ on positively oriented normal fibers, and the refined operation is independent of transversality.

[A1] The Axiom of Choice is inherited through the cited constructible and cellular suppliers; the explicit finite computations below are choice-free ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 The geometry and the cohomology of the projective line. The fiber products are $Z_{12}=Z_{21}=\mathrm{pt}\times_{\mathrm{pt}}\mathbb P^1=\mathbb P^1$. By [F3] the Schubert cells give $\mathbb P^1$ a finite CW structure with one $0$-cell and one $2$-cell and no cells in adjacent dimensions, so all cellular differentials vanish and the cellular cochain complex with coefficients $k$ is $k\oplus k[-2]$; by [F4] it computes $H^*(\mathbb P^1,k)$, so $H^0=k$, $H^1=0$, $H^2=k$, and since $k$ is a field the complex $R\Gamma(\mathbb P^1,k)$ is quasi-isomorphic to $k\oplus k[-2]$ (truncate and split the surjection of cocycles onto cohomology). Hence $L_2\simeq k[1]\oplus k[-1]$ and $L_1=k$. [F3, F4, algebra]

2.1 The two classes. With $L_2\simeq k[1]\oplus k[-1]$, the unit $\alpha:k\to R\Gamma(\mathbb P^1,k)$ includes the degree-$0$ summand $k$ with no shift, so $\alpha\in\operatorname{Ext}^{-1}(L_1,L_2)=\operatorname{Hom}(k,R\Gamma(\mathbb P^1,k))=H^0(\mathbb P^1,k)$ is the generator $1$ of that one-dimensional group. The evaluation $\beta:R\Gamma(\mathbb P^1,k)[1]\to k[1]$ is the identity on the summand $k[1]$ and zero on the summand $k[-1]$; it generates $\operatorname{Ext}^1(L_2,L_1)=\operatorname{Hom}(R\Gamma(\mathbb P^1,k)[1],k[1])=\operatorname{Hom}(R\Gamma(\mathbb P^1,k),k)=\operatorname{Hom}(k,k)=k$, the other Hom-term $\operatorname{Hom}(k[-2],k)$ being zero. Then $\beta[-1]\circ\alpha:k\to k$ is evaluation of the constant class $1\in H^0(\mathbb P^1,k)$ at the point, hence is $\operatorname{id}_k$, and it is the only nonzero composite of these two generators. [step 1.1, algebra]

3.1 The convolution check. Apply [F2] with $(i,j,k)=(1,2,1)$ and degrees $r=-1$, $s=1$ to the composable pair $\alpha:L_1\to L_2[r]$ and $\beta:L_2\to L_1[s]$: since $\beta[r]\circ\alpha=\beta[-1]\circ\alpha=\operatorname{id}_k$ by step 2.1, the product theorem gives $\Phi_{11}^{0}(\operatorname{id}_k)=\Phi_{12}^{-1}(\alpha)*\Phi_{21}^{1}(\beta)$, so $\alpha*\beta=\operatorname{id}_k$ in the source-first convention, and the right-hand side is the convolution product of [F1]. The corner degrees are $d_1+d_2-r=2$ for $\alpha$ and $d_2+d_1-s=0$ for $\beta$. [F1, F2, step 1.1, step 2.1]

4.1 The geometric product. Under [F1], $\Phi_{12}^{-1}(\alpha)$ is the positive fundamental class $[\mathbb P^1]\in H^{\mathrm{BM}}_2(\mathbb P^1;k)$: the unit corresponds under the adjunction chain to the identity kernel of $k_{\mathbb P^1}$, whose class in $H^{\mathrm{BM}}_2(\mathbb P^1;k)=H^0(\mathbb P^1;k)=k$ is the positive generator, and $[\mathbb P^1]$ is that generator by the orientation normalization of [F5]. Likewise $\Phi_{21}^{1}(\beta)$ is the normalized point class $[\mathrm{pt}]\in H^{\mathrm{BM}}_0(\mathbb P^1;k)=H^2(\mathbb P^1;k)$, the evaluation generator dual to the constant class. By [F2] the identity is sent to $[\Delta_{\mathrm{pt}}]=[\mathrm{pt}]\in H^{\mathrm{BM}}_0(Z_{11};k)$, so $[\mathbb P^1]*[\mathrm{pt}]=\Phi_{12}^{-1}(\alpha)*\Phi_{21}^{1}(\beta)=\Phi_{11}^0(\operatorname{id}_k)=[\mathrm{pt}]$. Concretely the middle factor is $X_2=\mathbb P^1$, its complex normal bundle contributes the drop $2d_2=2$, the refined diagonal intersection of the two classes is the point class, and the proper forgetting pushforward to $Z_{11}=\mathrm{pt}$ integrates it to the generator. This independently checks the middle drop $2$, the source-first order $a*b=h_*\Delta_{X_j}^!(a\boxtimes b)$ and the absence of an extra shift sign: all normal degrees are even and no factor is interchanged, while the swapped corner is $\operatorname{Ext}^1(L_2,L_1)$, whose class is $[\mathrm{pt}]\in H^{\mathrm{BM}}_0(\mathbb P^1;k)$ rather than the identity of the point corner. The Axiom of Choice is inherited through [A1] and is not used in the finite computation. [A1, F1, F2, F5, step 2.1, step 3.1] ∎
