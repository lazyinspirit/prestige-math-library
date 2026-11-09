---
id: rem-second-chern-nonadditive
kind: remark
title: Second Chern class need not be additive on the first piece
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - lem-smooth-leading-cycle-normalization
  - prop-chern-whitney-identities
  - lem-virtual-chern-extension-interface
  - prop-motivic-projective-bundle-formula
  - prop-smooth-motivic-comparison
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-9b6cb358ddc9-actual-cartan
dependency_roles:
  def-motivic-filtration: mathematical-premise
  lem-smooth-leading-cycle-normalization: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  lem-virtual-chern-extension-interface: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  prop-smooth-motivic-comparison: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  lem-author-9b6cb358ddc9-actual-cartan: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 11, Remark 5.4
      reading_limits: The article text at Remark 5.4 was read. It states nonadditivity
        but gives no example there; the example below is derived from the named
        current draft suppliers. The present repair also reads the named
        perfect-K-space suppliers and applies their actual operations in degrees
        one and two.
    - title: Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory
        without Homotopy Invariance, 2019 journal version
      url: https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf
      locator: Definition 5.1 and Section 5 Steps 1–3, Proposition 5.3 and formula
        (5.3.1), printed pp. 269–271
      reading_limits: Read these passages in the live primary PDF extraction. They
        define the local Q-space model and formal completion of stable positive
        universal classes. The actual EM inputs and entire affine
        perfect-K-space comparison are supplied by the existing local theorem,
        not claimed from the source alone. No reconstruction of completion
        foundations or import of the source's full admissibility theorem is
        claimed.
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3 with its displayed proof, printed pp.
        30–31
      reading_limits: Read these passages in the live primary PDF extraction, whose
        date is April 14, 2025. Checked the oriented motivic ring spectrum and
        projective bundle hypotheses, and the smooth-over-base scope of bundle
        Whitney. The existing local theorem applies this on the smooth
        classifying levels over a qcqs base using its separately supplied EM
        model. No reconstruction of those model foundations is claimed.
proof_strategy: direct
dependency_level: 22
---

## Remark
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied constructions. The second motivic Chern class need not be a group homomorphism on the first image-filtration group $F^1_{\mathrm{mot}}K_0(X)$. In fact, for virtual vector-bundle classes $x,y$ the Whitney identity gives
$$c_2(x+y)=c_2(x)+c_2(y)+c_1(x)c_1(y).$$
Here $K_0(X)=\pi_0K(X)$ is the degree-zero group of the supplied nonconnective perfect-complex $K$-theory spectrum, and $F^1_{\mathrm{mot}}K_0(X)$ is the image of the first filtration stage in it. The classes $c_i$ lie in integral motivic cohomology $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$, and the product is its cup product. A virtual vector-bundle class is a difference of classes of finite locally free sheaves; its Chern series is the quotient of their total Chern series.

For a concrete example, take an algebraically closed field $k$, $X=\mathbb P^2_k$, $L=\mathcal O_X(1)$ and $x=[L]-[\mathcal O_X]$. The class $x$ belongs to $F^1_{\mathrm{mot}}K_0(X)$, while $c_2(x)=0$ and $c_2(2x)=c_1(L)^2\ne0$.

## Facts & Assumptions

[A1] The stated Choice, universe and site-size assumptions are inherited from the smooth first-stage comparison in [F1], used in step 1.2; the actual and virtual bundle constructions in [F2] and perfect-K-space constructions in [F5], used in steps 1.1 and 2.1; and the projective-bundle and derived coefficient constructions in [F3]–[F4], used in step 3.1. [[math:def-axiom-of-choice]]

**Given:** The Axiom of Choice, the supplied compatible universe and site-size bounds, an algebraically closed field $k$, and $X=\mathbb P^2_k$ with its quotient-tautological line bundle $L=\mathcal O_X(1)$.

**Goal:** Establish the cross-term identity and the example, using the actual first image filtration and the supplied motivic product.

[F1] The first image filtration is the image of the first stage in perfect-complex $K_0$. For a smooth finite-type scheme over a field, that image is the kernel of the locally constant rank map, via the actual first-stage augmentation. [[def-motivic-filtration]], [[lem-smooth-leading-cycle-normalization]]

[F2] Actual Chern series satisfy Whitney's identity and extend multiplicatively to the vector-bundle Grothendieck group. Their degree-two coefficient obeys the displayed cross-term formula. A line bundle has no Chern classes above degree one, and the trivial line has total series $1$. These assertions concern the vector-bundle group; they do not require a general identification of that group with perfect $K_0$. [[prop-chern-whitney-identities]], [[lem-virtual-chern-extension-interface]], [[def-motivic-chern-classes]]

[F3] For a rank-three trivial bundle over $\operatorname{Spec}k$, the projective-bundle formula identifies the direct sum of the three coefficient groups with the motivic cohomology of $\mathbb P^2_k$ by $(a_0,a_1,a_2)\mapsto\pi^*a_0+\pi^*a_1h+\pi^*a_2h^2$, where $h=c_1(\mathcal O(1))$. Pullback preserves the unit and products. [[prop-motivic-projective-bundle-formula]]

[F4] For a smooth finite-type scheme, $H^{0,0}_{\mathrm{mot}}$ is isomorphic as an abelian group to its codimension-zero Chow group. For $\operatorname{Spec}k$ that group is $\mathbb Z$, generated by its unique point. [[prop-smooth-motivic-comparison]]

[F5] The actual universal perfect-K-space construction supplies natural pointed operations $c_i:K_0(X)\to H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ for $i\geq1$ on every qcqs field-scheme, retaining the given Chern classes on actual bundle object classes. Its full affine-to-local perfect-K-space comparison includes components and the actual bundle object map. The actual perfect Cartan lemma supplies coefficientwise multiplicativity and inversion through degree two, with $c_0=1$ and $c_i(0)=0$ for $i>0$. Thus $c_{\leq2}(u)=1+c_1(u)t+c_2(u)t^2$ is multiplicative modulo $t^3$ on actual perfect $K_0$, and agrees there with the virtual bundle series through this degree. Neither premise requires global bundle-difference representatives for arbitrary perfect classes. [[thm-author-d026a7b99ace-universal-chern-space]], [[lem-author-9b6cb358ddc9-actual-cartan]]

## Proof
1.1 For virtual vector-bundle classes the multiplicative series in [F2] satisfies $c_t(u+v)=c_t(u)c_t(v)$. Comparing coefficients of $t^2$ gives $c_2(u+v)=c_2(u)+c_1(u)c_1(v)+c_2(v)$. Independently, the actual operations in [F5] satisfy the same coefficient identity for every $u,v\in K_0(X)$, by their Cartan formula in degree two. These are the operations on perfect $K_0$ whose restriction to the first image filtration is at issue. [F2, F5, given, A1]

1.2 Projective space is smooth and finite type over $k$. The vector bundles $L$ and $\mathcal O_X$ each have rank one, so the perfect-complex class $x=[L]-[\mathcal O_X]$ has rank zero. Applying [F1] places this actual class in $F^1_{\mathrm{mot}}K_0(X)$. This uses the canonical map sending a vector bundle to its degree-zero perfect complex, not a general vector-bundle-to-perfect $K_0$ isomorphism. [F1, given, A1]

2.1 Put $h=c_1(L)$. By [F2], the actual bundle series are $c_t(L)=1+ht$ and $c_t(\mathcal O_X)=1$. Their virtual quotient is $1+ht$. By [F5], the actual perfect operations have precisely these values on the bundle object classes and are multiplicative with inverses modulo $t^3$. Consequently, on the perfect class $x=[L]-[\mathcal O_X]$ of step 1.2, they give $c_{\leq2}(x)=(1+ht)\cdot1^{-1}=1+ht\pmod{t^3}$. Thus the actual values are $c_1(x)=h$ and $c_2(x)=0$. Apply the perfect-class identity from step 1.1 with both arguments equal to $x$ to obtain $c_2(2x)=h^2$. This proves compatibility for the displayed virtual representatives using the supplied operation itself. [F2, F5, step 1.1, step 1.2, A1]

3.1 By [F4], the underlying abelian group $H^{0,0}_{\mathrm{mot}}(\operatorname{Spec}k,\mathbb Z)$ is nonzero. Its ring unit is therefore nonzero: a unital ring whose unit is zero is the zero ring. In [F3], the element with this unit in the third summand and zero in the others maps to $h^2$. Since the displayed projective-bundle map is injective, $h^2\ne0$. Thus $c_2(2x)\ne2c_2(x)$, proving the example and the claimed failure of additivity. [F3, F4, step 2.1, A1] ∎
