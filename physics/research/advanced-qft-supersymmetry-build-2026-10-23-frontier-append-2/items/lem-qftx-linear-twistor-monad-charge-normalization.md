---
id: lem-qftx-linear-twistor-monad-charge-normalization
kind: lemma
title: Chern character and charge of the normalized twistor monad
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 5
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-chern-character-and-todd-class
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§4–6, printed pp. 6–11: normalized three-term monad dimensions and the instanton charge convention."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed sheaf Chern classes and the locally-free ASD locus; its SU(N) convention is not used as the U(N) proof."
verification:
  precheck: pass
---

## Statement

Let $\pi:Z=\mathbb CP^3\to S^4$ be the oriented twistor fibration with the conventions stated in the following references section, let $H=c_1(\mathcal O_Z(1))$, and let $E\to S^4$ be a framed unitary ASD rank-$N$ bundle whose Ward bundle is $\mathcal E=\pi^*E$ as a smooth bundle. Suppose $\mathcal E$ is the cohomology of a linear monad

$$\mathcal O_Z(-1)^{\oplus k}\longrightarrow\mathcal O_Z^{\oplus(2k+N)}\longrightarrow\mathcal O_Z(1)^{\oplus k}.$$

Then $\operatorname{ch}(\mathcal E)=N-kH^2$, $c_1(\mathcal E)=0$, and $c_2(\mathcal E)=kH^2$. For the twistor orientation specified in the Definition, if $u\in H^4(S^4;\mathbb Z)$ satisfies $\langle u,[S^4]\rangle=1$, then $\pi^*u=H^2$. Consequently

$$k=\langle c_2(E),[S^4]\rangle=-q_N(E,A).$$

## Statement references

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[lem-qftx-u-n-determinant-flat-charge-normalization]]

[Donaldson, §§4–6, printed pp. 6–11](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The normalized monad, the smooth Ward pullback identification, the specified orientation, and a framed unitary ASD connection on $S^4$.

[F1] The total Chern character is additive on exact complexes of vector bundles, $\operatorname{ch}(\mathcal O(1))=e^H$, $\operatorname{ch}(\mathcal O(-1))=e^{-H}$, and on $\mathbb CP^3$ all classes of degree greater than six vanish. [[def-chern-character-and-todd-class]]

[F2] For the oriented submersion $\pi$, the pullback of the positive point class is Poincaré dual to the twistor fibre. Each fibre is a complex projective line, and $H$ integrates to $1$ on it. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]], [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]], [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[F3] For a framed unitary ASD $U(N)$ bundle on the round $S^4$, the determinant connection is flat and the specified trace normalization gives $-q_N=\langle c_2(E),[S^4]\rangle\ge0$. [[lem-qftx-u-n-determinant-flat-charge-normalization]]

[F4] Chern classes are natural under pullback, the second Chern class of a bundle with $c_1=0$ is represented by $-\operatorname{ch}_2$, and Chern–Weil forms represent the corresponding real characteristic classes. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]], [[def-chern-character-and-todd-class]]

## Proof

**Given:** The normalized monad and the Ward pullback identification in the Statement.

1.1 In the Grothendieck group, exactness of the monad gives $[\mathcal E]=(2k+N)[\mathcal O]-k[\mathcal O(-1)]-k[\mathcal O(1)]$. By [F1], its Chern character is $(2k+N)-ke^{-H}-ke^H=N-kH^2$, because the constant terms cancel to $N$, the linear terms cancel, the quadratic contribution is $-kH^2$, and terms of degree at least four vanish on $Z$. Therefore $c_1(\mathcal E)=0$ and $c_2(\mathcal E)=-\operatorname{ch}_2(\mathcal E)=kH^2$. [F1, F4, algebra]

1.2 Let $x\in S^4$. In the explicit incidence chart of the Definition, $\mu_1=z_1$, $\mu_2=z_2$ at $\lambda_2=0$, so the vertical complex orientation followed by the positive stereographic orientation is the complex orientation on $Z$. The submersion pulls the oriented normal disk at $x$ back to the normal disk of its fibre; fibrewise normalization and uniqueness of the Thom class, followed by its relative-to-absolute map, therefore pull the positive point dual to the positive fibre dual. The class $u$ is Poincaré dual to the positively oriented point $x$, so $\pi^*u$ is Poincaré dual to the fibre $L_x$. By [F2] that fibre has its complex line orientation; as a linear $\mathbb CP^1\subset\mathbb CP^3$ its Poincaré dual is $H^2$, since $\int_{L_x}H=1$ and $H^2$ generates degree-four cohomology. The twistor orientation clause in the Definition makes this the positive pullback class, hence $\pi^*u=H^2$. [F2, algebra]

2.1 Write $c_2(E)=m u$ for the integer $m=\langle c_2(E),[S^4]\rangle$. Naturality and the Ward pullback in the Statement give $mH^2=\pi^*c_2(E)=c_2(\mathcal E)=kH^2$ by step 1.1 and step 1.2. Since $H^2$ is nonzero, $m=k$. Finally [F3] gives $-q_N=m=k$, with the nonnegative sign fixed by the ASD equation. [F3, step 1.1, step 1.2, algebra] ∎
