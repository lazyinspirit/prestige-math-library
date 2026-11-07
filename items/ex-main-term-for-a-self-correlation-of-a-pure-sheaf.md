---
id: ex-main-term-for-a-self-correlation-of-a-pure-sheaf
kind: example
title: "Main term in the self-correlation of a pure sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-fkm-conductor-complexity-on-the-affine-line
  - def-frobenius-trace-on-a-constructible-stalk
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - thm-deligne-square-root-trace-bound-for-curves
  - thm-geometric-invariants-control-compact-support-degree-two
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace Functions over Finite Fields and Their Applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
      locator: §2.3 (Dec3,2014 draft) and introductory Theorem1.2.1 and detailed Theorem4.1.1
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: https://jmilne.org/math/CourseNotes/LEC.pdf
      locator: Chapter I §24, Theorem 24.1
verification:
  precheck: pending
---

## Example

Fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$. Let $p$ be any prime, let $\ell\ne p$, and let $\mathcal L$ be the rank-one constant $\mathbb Q_\ell$-sheaf on $\mathbb A^1_{\mathbb F_p}$, defined by the trivial action on its geometric stalk; for the duality statement, extend scalars to $\overline{\mathbb Q}_\ell$. Its geometric invariant subspace is the invariant subspace of that stalk under $\pi_1^{\mathrm{et}}(\mathbb A^1_{\overline{\mathbb F}_p})$, so it has dimension one. The trace function $t(x)=\iota(\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_x\mid\mathcal L_{\bar x}))$ is $1$ for every $x\in\mathbb F_p$. The underived direct-image middle extension to $\mathbb P^1$ is lisse everywhere, so its complexity $c=\operatorname{rank}+|\operatorname{Sing}|+\sum\operatorname{Sw}=1+0+0=1$. Therefore
$$\sum_{x\in\mathbb F_p}t(x)\overline{t(x)}=p.$$
The geometric invariant subspace contributes the main term $p$ in the self-correlation case of the Deligne estimate, and the error is exactly zero.

## Example references

[[thm-geometric-invariants-control-compact-support-degree-two]]

[[thm-deligne-square-root-trace-bound-for-curves]]

[[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]

[[def-fkm-conductor-complexity-on-the-affine-line]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, introductory Theorem1.2.1 and detailed Theorem4.1.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

[Milne, *Lectures on Étale Cohomology*, Chapter I §24](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** A prime $p$, a prime $\ell\ne p$, and the rank-one constant sheaf on $\mathbb A^1_{\mathbb F_p}$.

[A1] The geometric fundamental group acts trivially on the one-dimensional stalk of the constant sheaf.

[F1] [[def-frobenius-trace-on-a-constructible-stalk]]: the local trace is the trace of geometric Frobenius on the geometric stalk.

[F2] [[thm-geometric-invariants-control-compact-support-degree-two]]: for a lisse sheaf on a smooth nonproper curve, the degree-two compact-support cohomology is the dual of the geometric invariants of the dual stalk, with twist $(-1)$.

[F3] [[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]: the sum of geometric Frobenius traces at rational stalks equals the alternating sum of geometric Frobenius traces on compactly supported cohomology.

[F4] [[def-fkm-conductor-complexity-on-the-affine-line]]: the complexity is the rank plus the number of singular points on $\mathbb P^1$ plus the Swan conductors there.

[F5] [[thm-deligne-square-root-trace-bound-for-curves]]: in the self-correlation case with identical Frobenius structure, the main term is $p$ and the error is bounded by $3c^4\sqrt p$.

## Verification

1.1 At each rational point the constant sheaf has one-dimensional stalk with trivial geometric Frobenius action, so [F1] gives $t(x)=1$. There are exactly $p$ points in $\mathbb A^1(\mathbb F_p)$; hence the self-correlation is $\sum_x1=p$. [given, A1, F1, algebra]

2.1 The geometric invariant subspace of the dual stalk is the full one-dimensional space by [A1]. By [F2], its dual tensored with $\overline{\mathbb Q}_\ell(-1)$ is $H_c^2$; geometric Frobenius acts there by $p$ under the Tate-twist convention. The trace formula [F3] identifies the direct point sum in step 1.1 with the alternating cohomological trace, and the degree-two invariant term has sign $(-1)^2=1$. Hence this invariant space contributes the main term $p$. [given, A1, F2, F3, step 1.1, algebra]

3.1 The constant middle extension is lisse on all of $\mathbb P^1$, so its singular set is empty and every Swan conductor is zero. Its rank is one, so [F4] gives $c=1$. It is geometrically irreducible and pure of weight zero; applying [F5] with the sheaf paired with itself gives main term $p$ and error at most $3\sqrt p$. The direct calculation in step 1.1 has error $|p-p|=0$, as claimed. [given, A1, F4, F5, step 1.1, algebra] ∎
