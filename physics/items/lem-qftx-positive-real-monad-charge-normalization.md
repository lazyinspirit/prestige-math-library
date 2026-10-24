---
id: lem-qftx-positive-real-monad-charge-normalization
kind: lemma
title: Chern character and charge normalization of a linear twistor monad
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-chern-character-and-todd-class
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-cohomology-projective-space-twisting-sheaves
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  lem-integral-cohomology-ring-of-complex-projective-space-by-splitting: mathematical-premise
  lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
axiom_base: "ZF + full AC inherited from the named projective-cohomology and characteristic-class suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§4–6, printed pp. 6–11: monad dimensions and the instanton charge interface."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed sheaf Chern classes and the locally-free instanton locus."
verification:
  precheck: pending
---

## Statement

Let $\mathcal F$ be the locally free algebraic middle cohomology of a linear monad
$$
\mathcal O_{\mathbb P^3}(-1)^{\oplus k}\longrightarrow\mathcal O_{\mathbb P^3}^{\oplus(2k+N)}\longrightarrow\mathcal O_{\mathbb P^3}(1)^{\oplus k}
$$
on $\mathbb P^3_\mathbb C$, with exactness at both ends. Let $H_{\rm alg}=c_1^{\rm alg}(\mathcal O_{\mathbb P^3}(1))$ in the Chow ring and let $H_{\rm top}=c_1^{\rm top}(\mathcal O_{\mathbb P^3}(1))$ in singular cohomology. The hyperplane cycle map identifies $H_{\rm alg}$ with $H_{\rm top}$; write $H$ for either class in the corresponding formula. The algebraic Chern character is $N-kH_{\rm alg}^2$, the algebraic first Chern class is zero, the algebraic second Chern class is $kH_{\rm alg}^2$, and the algebraic Euler characteristic is $N-2k$. The underlying topological bundle has total Chern class $1+kH_{\rm top}^2$ through degree six and topological Chern character $N-kH_{\rm top}^2$.

Let $\jmath:\mathbb C^4\to\mathbb C^4$ be the conjugate-linear map
$$\jmath(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1),\qquad \jmath^2=-1.$$
Use $\mathbb H=\mathbb C\oplus\mathbb C\mathbf j$, where $\mathbf j^2=-1$ and $\mathbf j a=\bar a\mathbf j$ for $a\in\mathbb C$, and identify $\mathbb C^4$ with the right quaternionic vector space $\mathbb H^2$ by
$$ (\lambda_1,\lambda_2,\mu_1,\mu_2)\longmapsto(\lambda_1+\bar\lambda_2\mathbf j,\ \mu_1+\bar\mu_2\mathbf j).$$
Under this identification, right multiplication by $\mathbf j$ is $\jmath$. Give $\mathbb H\mathbb P^1=(\mathbb H^2\setminus\{0\})/\mathbb H^\times$ its standard smooth quotient structure; it is the 4-sphere and its points are the one-dimensional right-$\mathbb H$ subspaces of $\mathbb H^2$. The **quaternionic quotient map** is the smooth map
$$\pi:\mathbb P(\mathbb C^4)\longrightarrow\mathbb H\mathbb P^1,\qquad [\lambda_1:\lambda_2:\mu_1:\mu_2]\longmapsto[(\lambda_1+\bar\lambda_2\mathbf j,\ \mu_1+\bar\mu_2\mathbf j)]_{\mathbb H}.$$
Equivalently, $\pi([v])=\operatorname{span}_{\mathbb C}(v,\jmath v)$, a $\jmath$-invariant complex two-plane. This is well-defined because $\jmath(cv)=\bar c\,\jmath v$ for $c\in\mathbb C$ and $v,\jmath v$ are complex-linearly independent when $v\ne0$ and $\jmath^2=-1$. Its fiber over a quaternionic line $L$ is $\mathbb P_{\mathbb C}(L)\cong\mathbb P^1(\mathbb C)$. In the finite chart with $\lambda=\lambda_1+\bar\lambda_2\mathbf j\ne0$ and $z=\mu\lambda^{-1}=z_1+\bar z_2\mathbf j$, the fiber equations are
$$\mu_1=z_1\lambda_1-\bar z_2\lambda_2,\qquad \mu_2=z_2\lambda_1+\bar z_1\lambda_2,$$
and the fiber over the remaining point is $\ell_\infty=\{\lambda_1=\lambda_2=0\}$. Orient each fiber by its complex orientation. Write $z_1=x^0+ix^1$ and $z_2=x^2+ix^3$, so the chart orientation is $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$; orient $S^4$ so this positive stereographic chart followed by the fiber orientation induces the complex orientation of $\mathbb P^3$. Since the base and fiber dimensions are $4$ and $2$, respectively, reversing these orientation factors has sign $(-1)^{4\cdot2}=+1$, so this also agrees with the fiber-first convention. Let $u\in H^4(S^4;\mathbb Z)$ be the positive point class for this orientation. Then $\pi^*u=H_{\rm top}^2$. Consequently, if the underlying topological bundle of $\mathcal F$ is $\pi^*E$ for a rank-$N$ complex bundle $E\to S^4$ with $c_1(E)=0$, then $c_2(E)=ku$ and $\langle c_2(E),[S^4]\rangle=k$.

## Statement references

[[def-chern-character-and-todd-class]]

[[thm-cohomology-projective-space-twisting-sheaves]]

[[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]

[Donaldson, §§4–6](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The locally free exact monad, the positive twistor orientation, and the conditional pullback bundle $E$ in the Statement.

[A1] AC is inherited from the projective cohomology and characteristic-class suppliers. [[def-axiom-of-choice]]

[F1] The Chern character is additive on exact complexes, $\operatorname{ch}(\mathcal L)=e^{c_1(\mathcal L)}$ for a line bundle, and $\operatorname{ch}_2=\tfrac12(c_1^2-2c_2)$. [[def-chern-character-and-todd-class]]

[F2] On $\mathbb P^3$, $H^*(\mathbb P^3;\mathbb Z)=\mathbb Z[x]/(x^4)$ for the tautological line generator $x$; $\mathcal O(1)$ is its dual, so $H=-x$ and $H^2=x^2$ is the positive degree-four generator. [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[F3] For a closed oriented $z$-submanifold of an oriented $n$-manifold, the absolute image of its normalized normal Thom class caps the ambient fundamental class to $(-1)^{(n-z)z}$ times the submanifold class, under the supplier's tangent-first orientation convention. [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]

[F4] The algebraic cohomology of $\mathcal O(d)$ on projective space is given by the twisting-sheaf theorem; in particular on $\mathbb P^3$, $\chi(\mathcal O(-1))=0$, $\chi(\mathcal O)=1$, and $\chi(\mathcal O(1))=4$. [[thm-cohomology-projective-space-twisting-sheaves]]

[F5] Chern–Weil forms represent the real images of topological Chern classes, Chern classes are natural and Whitney-additive, and the first Chern class of a complex line is its oriented real Euler class. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[F6] The algebraic first Chern class of $\mathcal O(1)$ is the hyperplane divisor class; its cycle class is the Poincaré dual of the complex hyperplane, which is the Euler class of its complex normal line. Thus its cycle class is $H_{\rm top}$. [[def-chern-character-and-todd-class]], [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]

## Proof

**Given:** The two exact sequences obtained by factoring the locally free monad through $K=\ker(\mathcal O(1)^{\oplus k}\leftarrow\mathcal O^{\oplus(2k+N)})$.

1.1 Exactness gives $0\to K\to\mathcal O^{2k+N}\to\mathcal O(1)^k\to0$ and $0\to\mathcal O(-1)^k\to K\to\mathcal F\to0$. Their classes in the Grothendieck group therefore give
$$
[\mathcal F]=(2k+N)[\mathcal O]-k[\mathcal O(-1)]-k[\mathcal O(1)].
$$
Additivity of Euler characteristic and [F4] give $\chi(\mathcal F)=(2k+N)-4k-0=N-2k$. [A1, F4, algebra]

1.2 The quaternionic coordinates in the Statement give local product charts for $\pi$: on the finite chart, with $v=\lambda_2/\lambda_1$, the base coordinates $z_1,z_2$ recover the remaining affine coordinates by $\mu_1/\lambda_1=z_1-\bar z_2v$ and $\mu_2/\lambda_1=z_2+\bar z_1v$; the charts with $\lambda_2\ne0$ and the reciprocal quaternionic chart at infinity cover the omitted points. Hence $\pi$ is a smooth submersion, and each fiber $L_x=\pi^{-1}(x)$ is a closed complex linear $\mathbb P^1\subset\mathbb P^3$. Let $\omega_x\in H^4(S^4,S^4\setminus\{x\};\mathbb Z)$ be the positive local orientation class, whose image in absolute cohomology is $u$. In a local product chart over an oriented ball around $x$, the pulled-back relative class $\pi^*\omega_x$ is the positive generator on every normal four-disk to $L_x$; it is therefore the normalized Thom class of that fiber, with normal orientation induced from the oriented base. Its absolute image is $\pi^*u$. The fiber has real dimension $2$ and codimension $4$, so [F3] gives the sign $(-1)^{4\cdot2}=+1$ and identifies $\pi^*u$ with the Poincaré dual of $[L_x]$. To identify this dual class, choose two complex hyperplanes meeting transversely in $L_x$. Their positive normal Thom classes multiply to the positive normal Thom class of $L_x$ (in local holomorphic coordinates this is the product of the two complex-disk generators); by [F6] each hyperplane class is $H_{\rm top}$. Thus the Poincaré dual of $[L_x]$ is $H_{\rm top}^2$, proving $\pi^*u=H_{\rm top}^2$. [F2, F3, F6, algebra]

2.1 In the algebraic Chow ring, [F1] and $H=c_1(\mathcal O(1))$ give
$$
\operatorname{ch}(\mathcal F)=(2k+N)-ke^{-H}-ke^H=N-kH^2,
$$
because $H^4=0$ on the complex threefold and the odd powers cancel. Thus $c_1^{\rm alg}(\mathcal F)=0$ and $c_2^{\rm alg}(\mathcal F)=kH^2$. In the underlying topological category the same exact sequences are exact sequences of complex vector bundles, so [F5] and the line-class identity $c_1(\mathcal O(1))=H$ give
$$
c(\mathcal F)=\frac{1}{(1-H)^k(1+H)^k}=(1-H^2)^{-k}=1+kH^2
$$
through degree six, since $H^4=0$. Hence the topological classes are $c_1(\mathcal F)=0$, $c_2(\mathcal F)=kH^2$, and $c_3(\mathcal F)=0$. The universal formulas $\operatorname{ch}_1=c_1$, $\operatorname{ch}_2=\tfrac12(c_1^2-2c_2)$, and $\operatorname{ch}_3=\tfrac16(c_1^3-3c_1c_2+3c_3)$ then give the topological $\operatorname{ch}(\mathcal F)=N-kH^2$. This compares only the identical finite line-bundle resolution and its line class, not arbitrary analytic and algebraic cohomology. [F1, F2, F5, step 1.1, algebra]

3.1 Write $c_2(E)=m u$ for $m\in\mathbb Z$. Naturality of Chern classes and the pullback hypothesis give $mH^2=\pi^*c_2(E)=c_2(\mathcal F)=kH^2$ by steps 2.1 and 1.2. Since $H^2$ is a nonzero generator by [F2], $m=k$, proving both the stated Chern class and its evaluation on $[S^4]$. [F2, step 2.1, step 1.2, algebra] ∎
