---
id: lem-rational-cherednik-log-connection-meridian-eigenvalues
kind: lemma
title: "A logarithmic connection determines meridian eigenvalues from its residue"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-gronwall-integral-inequality
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§6.2, proof of Theorem 6.4, PDF pp. 45–46: local KZ residue and meridian eigenvalues."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.2, the KZ connection and reflection-hyperplane residues, PDF pp. 18–20."
---

## Statement

Let $E$ be a finite-dimensional complex vector space, let $\zeta=e^{i\theta}$ be a root of unity, and let $A(z)$ be a holomorphic family of endomorphisms on a disk about $0$ with $A(0)=R$. Consider the logarithmic connection
$$\nabla=d-A(z)\frac{dz}{z}$$
on the punctured disk. Suppose the endpoint identification $g:E_{\zeta r}\to E_r$ is a fixed automorphism of the model fiber and satisfies
$$gA(\zeta z)g^{-1}=A(z).$$
At $z=0$ this implies $gR=Rg$. Parallel transport from $r$ to $\zeta r$ along the positive arc, followed by this endpoint identification $g$, has characteristic polynomial equal to that of $g e^{i\theta R}$.

## Facts & Assumptions

**Given:** $E$, $\zeta=e^{i\theta}$, the holomorphic family $A(z)$, its residue $R=A(0)$, and the compatible endpoint identification $g$.

[F1] A horizontal section for $\nabla=d-A(z)\,dz/z$ along $z(t)=re^{it}$ satisfies the finite-dimensional ODE $\dot u(t)=iA(re^{it})u(t)$.

[F2] The coefficient identity $gA(\zeta z)g^{-1}=A(z)$ expresses equivariance under $z\mapsto\zeta z$ with the stated endpoint identification from the endpoint fiber to the initial fiber.

[F3] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]] gives existence and uniqueness of transport along compact paths, interpreting complex matrices as real linear operators. [[thm-gronwall-integral-inequality]] gives the uniform convergence estimate below.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F3].

1.1 For $r>0$, let $P_r$ be parallel transport along the arc $z(t)=re^{it}$, $0\le t\le\theta$, and put $M_r:=gP_r$, an endomorphism of the initial fiber. If $r_1,r_2$ are two small radii, radial parallel transport identifies the initial fibers and the endpoint fibers; the coefficient identity in [F2] makes the resulting square commute with the endpoint identifications. Thus the two $M_r$ are conjugate and have the same characteristic polynomial. [F2, F3, given, algebra]

1.2 Since $A(re^{it})\to R$ uniformly for $0\le t\le\theta$ as $r\to0$, subtract the integral equations for $P_r(t)$ and $e^{itR}$ from [F1]. The difference norm is bounded by $\int_0^t\|A(re^{iu})-R\|\,\|P_r(u)\|\,du+\int_0^t\|R\|\,\|P_r(u)-e^{iuR}\|\,du$; Grönwall's inequality gives $P_r(\theta)\to e^{i\theta R}$. Therefore $M_r\to g e^{i\theta R}$. [F1, F3, choose, algebra]

2.1 The characteristic polynomial is a polynomial in matrix entries, hence continuous. Step 1.1 makes it constant for $r>0$, so its common value equals the characteristic polynomial of the limit in step 1.2, namely that of $g e^{i\theta R}$. [step 1.1, step 1.2, algebra] ∎
