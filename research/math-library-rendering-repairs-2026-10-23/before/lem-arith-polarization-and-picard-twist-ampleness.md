---
id: lem-arith-polarization-and-picard-twist-ampleness
kind: lemma
title: "Polarizations and ampleness under Picard twists"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
  - lem-arith-dual-isogeny-kernel-and-abelian-biduality
  - lem-arith-symmetric-homomorphism-is-a-mumford-map
  - def-polarization-of-an-abelian-variety
  - lem-nonaffine-ample-line-bundle-field-descent
  - thm-abelian-variety-is-projective
  - thm-ample-powers-very-ample-proper-base
  - lem-ample-stable-positive-power
  - lem-ample-pullback-finite-morphism
  - thm-global-functions-proper-integral-variety
  - thm-segre-line-bundle-external-tensor
  - def-ample-invertible-sheaf
  - "lem-arith-coherent-kunneth-and-proper-image-dual"
  - "lem-arith-dual-and-poincare-bundle-finite-field-descent"
  - "thm-proper-quasi-finite-is-finite"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 11.4-11.6 (ampleness and polarizations)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 8.1 (rigidified Picard functor and Poincare bundle)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$ and let $\mathcal L$ be an ample invertible sheaf on $A$ ([[def-ample-invertible-sheaf]]). Then:

(a) the Mumford map $\varphi_{\mathcal L}:A\to A^\vee$ is a symmetric isogeny, and the bundle $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ is ample;

(b) every abelian variety admits a polarization ([[def-polarization-of-an-abelian-variety]]);

(c) if $\mathcal M$ is algebraically trivial (a class in $\operatorname{Pic}^0$) then $\mathcal L\otimes\mathcal M$ is ample, so ampleness is invariant under twists by algebraically trivial bundles;

(d) for a symmetric homomorphism $\lambda=\varphi_{\mathcal L}$ the bundle $(\operatorname{id},\lambda)^*\mathcal P$ is ample if and only if $\mathcal L$ is ample.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ over a field $k$, an ample invertible sheaf $\mathcal L$ on $A$, and the normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$.

[F1] The Mumford map is a homomorphism, $\ker\varphi=\operatorname{Pic}^0$ as a sheaf on all tests, and over an algebraic closure every algebraically trivial bundle is of the form $t_x^*\mathcal H\otimes\mathcal H^{-1}$ for a fixed ample $\mathcal H$ ([[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]). Over an algebraic closure an ample bundle gives a Mumford isogeny with finite scheme-theoretic kernel ([[lem-arith-coherent-kunneth-and-proper-image-dual]], Statement (c)); the dual identifies with the base change of $A^\vee$ ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]]). A proper quasi-finite morphism is finite ([[thm-proper-quasi-finite-is-finite]]).

[F2] Under biduality, $\kappa_A$ classifies the switched normalized Poincare bundle, and dualizing a homomorphism pulls back line bundles ([[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]). The normalized square $\Lambda(\mathcal L)$ is invariant under exchanging its two $A$-factors ([[def-polarization-of-an-abelian-variety]]). These descriptions permit the symmetry comparison in step 1.1; the lemma on symmetric homomorphisms does not supply symmetry as a premise.

[F3] $(\operatorname{id}\times\varphi_{\mathcal L})^*\mathcal P\cong\Lambda(\mathcal L)=m^*\mathcal L\otimes p_1^*\mathcal L^{-1}\otimes p_2^*\mathcal L^{-1}\otimes\pi^*e^*\mathcal L$, whence $\varphi_{(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P}=2\varphi_{\mathcal L}=\varphi_{\mathcal L^2}$, so the two bundles differ by an algebraically trivial class ([[def-polarization-of-an-abelian-variety]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F4] Every abelian variety is projective, positive powers of ample bundles are ample and sufficiently high powers are very ample, ample pulls back along finite morphisms, the external Segre tensor of ample bundles is ample, and ampleness descends under field extension ([[lem-nonaffine-ample-line-bundle-field-descent]]; [[thm-abelian-variety-is-projective]], [[thm-ample-powers-very-ample-proper-base]], [[lem-ample-stable-positive-power]], [[lem-ample-pullback-finite-morphism]], [[thm-segre-line-bundle-external-tensor]], [[thm-global-functions-proper-integral-variety]]).

## Proof

**Proof technique:** direct: compare the bundle $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ with $\mathcal L^2$, use that both have Mumford map $2\varphi_{\mathcal L}$, and invoke invariance of ampleness under algebraically trivial twists.

1.1 By [F1], $\varphi_{\mathcal L,\bar k}$ is an isogeny with finite scheme-theoretic kernel. Every geometric fibre of $\varphi_{\mathcal L}$ is, after choosing a point in it, a translate of that geometric kernel. In particular $K(\mathcal L)\to\operatorname{Spec}k$ is proper and quasi-finite, since it is closed in $A$ and has a finite geometric fibre; [F1] makes it finite over $k$. Surjectivity follows from geometric surjectivity after the field extension, so $\varphi_{\mathcal L}$ is an isogeny. By [F3], $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ has Mumford map $2\varphi_{\mathcal L}$, the same as $\mathcal L^2$; since $\ker\varphi=\operatorname{Pic}^0$ as a sheaf [F1], the two bundles differ by an algebraically trivial class: $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P\cong\mathcal L^2\otimes\mathcal M$ with $\mathcal M\in\operatorname{Pic}^0$. For symmetry, the family classifying $\varphi_{\mathcal L}^\vee\circ\kappa_A$ on the second copy of $A$ is obtained by switching the Poincare factors and pulling back along $\varphi_{\mathcal L}$ on the other factor. It is therefore the switched bundle $\sigma^*\Lambda(\mathcal L)$, where $\sigma(x,y)=(y,x)$. The family classifying $\varphi_{\mathcal L}$ is $\Lambda(\mathcal L)$. Since multiplication is commutative, the two normalized bundles are isomorphic, including their rigidifications on both axes. The all-test universal property gives $\varphi_{\mathcal L}^\vee\circ\kappa_A=\varphi_{\mathcal L}$, which proves symmetry rather than assuming it. For the bundle comparison in [F3], diagonal pullback of $\Lambda(\mathcal L)$ gives $[2]^*\mathcal L\otimes\mathcal L^{-2}$ up to a constant line. For any homomorphism $f$, translation commutation and pullback of Picard classes give $\varphi_{f^*\mathcal L}=f^\vee\varphi_{\mathcal L}f$; with $f=[2]$ and additivity of duality this gives $\varphi_{[2]^*\mathcal L}=4\varphi_{\mathcal L}$ and hence the asserted $2\varphi_{\mathcal L}$. [F1, F2, F3, given, construct]

1.2 We first prove (c). Let $\mathcal M\in\operatorname{Pic}^0(A)$ and let $\mathcal H$ be ample. Over an algebraic closure, [F1] gives $\mathcal M\cong t_x^*\mathcal H\otimes\mathcal H^{-1}$ for some point $x$, so $\mathcal H\otimes\mathcal M\cong t_x^*\mathcal H$ is the pullback of an ample bundle under an isomorphism, hence ample. Ampleness is a geometric condition checked after faithfully flat field extension, so $\mathcal L\otimes\mathcal M$ is ample over $k$; this is (c). [F1, F4, given, algebra]

2.1 Statement (a) now follows: since $\mathcal L^2$ is ample and $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ differs from it by the algebraically trivial class $\mathcal M$ of step 1.1, (c) gives that $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ is ample. [F4, step 1.1, step 1.2, algebra]

3.1 For (b), $A$ is projective by [F4], so there exists an ample invertible sheaf $\mathcal L$ on $A$; then $\varphi_{\mathcal L}$ is a symmetric isogeny by (a) and $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ is ample. Since $\varphi_{\mathcal L}$ is the Mumford map of an ample bundle already over $k$, it satisfies the geometric ample-realization definition of a polarization. [F3, F4, step 1.1, step 2.1, construct]

4.1 For (d), let $\lambda=\varphi_{\mathcal L}$ be symmetric, now allowing $\mathcal L$ to be any invertible sheaf, and put $\mathcal N=(\operatorname{id},\lambda)^*\mathcal P$. The identity [F3], which holds without ampleness, gives $\varphi_{\mathcal N}=2\varphi_{\mathcal L}=\varphi_{\mathcal L^2}$; by [F1] this means $\mathcal N\cong\mathcal L^2\otimes\mathcal M$ for an algebraically trivial $\mathcal M$. If $\mathcal L$ is ample, then $\mathcal L^2$ is ample by [F4] and $\mathcal N$ is ample by step 1.2. Conversely, if $\mathcal N$ is ample, applying step 1.2 to $\mathcal N$ and $\mathcal M^{-1}$ makes $\mathcal L^2$ ample, and [F4] then makes $\mathcal L$ ample. [F1, F3, F4, step 1.2, algebra] ∎
