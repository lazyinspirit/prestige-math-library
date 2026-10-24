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

Identify $\mathbb P^3_\mathbb C$ with the twistor space of $S^4=\mathbb H\mathbb P^1$ by the quaternionic structure whose invariant lines are the real incidence lines in the positive stereographic coordinates. Let $\pi:\mathbb P^3_\mathbb C\to S^4$ be the resulting fibration, orient each fiber by its complex orientation, orient the base so the incidence chart followed by the fiber orientation gives the complex orientation of $\mathbb P^3$, and let $u\in H^4(S^4;\mathbb Z)$ be the positive point class. Then $\pi^*u=H^2$. Consequently, if the underlying topological bundle of $\mathcal F$ is $\pi^*E$ for a rank-$N$ complex bundle $E\to S^4$ with $c_1(E)=0$, then $c_2(E)=ku$ and $\langle c_2(E),[S^4]\rangle=k$.

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

[F3] The pullback of the positive point class under an oriented submersion is Poincaré dual to its oriented fiber; for the normal bundle of a closed embedded submanifold the sign is $(-1)^{rz}$ in codimension $r$ and submanifold dimension $z$. [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]

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

1.2 In the algebraic Chow ring, [F1] and $H=c_1(\mathcal O(1))$ give
$$
\operatorname{ch}(\mathcal F)=(2k+N)-ke^{-H}-ke^H=N-kH^2,
$$
because $H^4=0$ on the complex threefold and the odd powers cancel. Thus $c_1^{\rm alg}(\mathcal F)=0$ and $c_2^{\rm alg}(\mathcal F)=kH^2$. In the underlying topological category the same exact sequences are exact sequences of complex vector bundles, so [F5] and the line-class identity $c_1(\mathcal O(1))=H$ give
$$
c(\mathcal F)=\frac{1}{(1-H)^k(1+H)^k}=(1-H^2)^{-k}=1+kH^2
$$
through degree six, since $H^4=0$. Hence the topological classes are $c_1(\mathcal F)=0$, $c_2(\mathcal F)=kH^2$, and $c_3(\mathcal F)=0$. The universal formulas $\operatorname{ch}_1=c_1$, $\operatorname{ch}_2=\tfrac12(c_1^2-2c_2)$, and $\operatorname{ch}_3=\tfrac16(c_1^3-3c_1c_2+3c_3)$ then give the topological $\operatorname{ch}(\mathcal F)=N-kH^2$. This compares only the identical finite line-bundle resolution and its line class, not arbitrary analytic and algebraic cohomology. [F1, F2, F5, step 1.1, algebra]

2.1 A fiber $L_x=\pi^{-1}(x)$ is a complex linear $\mathbb P^1\subset\mathbb P^3$. Its real codimension in $\mathbb P^3$ is $4$ and its real dimension is $2$, so the sign in [F3] is $(-1)^{4\cdot2}=+1$. Therefore $\pi^*u$ is Poincaré dual to $[L_x]$. The restriction of $\mathcal O(1)$ to this linear $\mathbb P^1$ has first Chern number $1$; [F2] then identifies its Poincaré dual as $H_{\rm top}^2$. Thus $\pi^*u=H_{\rm top}^2$. [F2, F3, F6, algebra]

2.2 Write $c_2(E)=m u$ for $m\in\mathbb Z$. Naturality of Chern classes and the pullback hypothesis give $mH^2=\pi^*c_2(E)=c_2(\mathcal F)=kH^2$ by steps 1.2 and 2.1. Since $H^2$ is a nonzero generator by [F2], $m=k$, proving both the stated Chern class and its evaluation on $[S^4]$. [F2, step 1.2, step 2.1, algebra] ∎
