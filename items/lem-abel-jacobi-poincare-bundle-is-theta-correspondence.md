---
id: lem-abel-jacobi-poincare-bundle-is-theta-correspondence
kind: lemma
title: The Abel–Jacobi Poincare Bundle Is the Theta Correspondence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-pointed-abel-jacobi-map-of-curve
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - lem-generic-theta-translate-pullback-is-degree-g-divisor
  - lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - thm-abelian-variety-dual-and-polarization
  - def-polarization-of-an-abelian-variety
  - lem-arith-polarization-and-picard-twist-ampleness
  - thm-nonaffine-regular-local-ring-is-ufd
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §6, Lemma 6.8, printed pp. 106–107
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $C/\bar k$ be a smooth, proper, geometrically connected curve of genus $g\ge1$, choose $P\in C(\bar k)$, put $J=\operatorname{Pic}^0_{C/\bar k}$, and let $u_P:C\to J$ be the pointed Abel–Jacobi map. Let $\Theta_P$ be the effective Cartier divisor given by the reduced image of $C^{(g-1)}$ under $E\mapsto[\mathcal O_C(E-(g-1)P)]$, let $[-1]:J\to J$ be inversion, put $\Theta'_P=[-1]^*\Theta_P$, and put $L'=\mathcal O_J(\Theta'_P)$. On $J\times J$, let $m$ be addition, $p_1,p_2$ the projections, $e:\operatorname{Spec}\bar k\to J$ the identity, and $\pi:J\times J\to\operatorname{Spec}\bar k$ the structure morphism. Define the normalized Mumford line bundle
$$\Lambda(L')=m^*L'\otimes p_1^*(L')^{-1}\otimes p_2^*(L')^{-1}\otimes\pi^*e^*L'.$$
Let $\mathcal M_P$ be the universal degree-zero line bundle on $C\times J$ rigidified along $P\times J$. Then $(u_P\times[-1])^*\Lambda(L')\cong\mathcal M_P$ as $P$-rigidified line bundles.

## Statement references

[Milne, theta correspondence identity, Lemma 6.8(b), pp. 106–107](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and the Axiom of Dependent Choice, the curve and basepoint in the Statement, and the Jacobian and its normalized universal line bundle.

[A1] AC and DC are the stated choice principles used by the Picard representation and universal-line-bundle construction. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] When a rational basepoint $P$ is supplied, the identity of the Jacobian represents the normalized universal degree-zero line bundle $\mathcal M_P$ on $C\times J$, whose restriction to $P\times J$ is trivial and whose fiber at $a\in J$ is the degree-zero class $a$. [[thm-picard-zero-represented-by-jacobian]]

[F2] On a dense open $U\subset J$, there are unique effective degree-$g$ divisors $D(a)$ with distinct points and $u_P^{-1}(a-\Theta_P)=D(a)$; the degree-$(g-1)$ Abel map is an isomorphism over a dense open of its image. [[lem-generic-theta-translate-pullback-is-degree-g-divisor]] [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]]

[F2a] The reduced degree-$(g-1)$ image is an effective Cartier divisor on the smooth Jacobian, so $L'$ is invertible. [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]] [[thm-nonaffine-regular-local-ring-is-ufd]]

[F3] For an invertible sheaf $L'$ on an abelian variety, the normalized bundle $\Lambda(L')$ is trivial on both axes; its pullback along $(\operatorname{id},\varphi_{L'})$ is the normalized Poincare bundle. [[lem-arith-polarization-and-picard-twist-ampleness]] [[thm-abelian-variety-dual-and-polarization]]

[F4] The Picard scheme is separated; morphisms from the integral variety $J$ to it that agree on a dense open agree everywhere. Two P-rigidified families with the same relative Picard class are isomorphic, because any difference pulled back from the base is fixed by its restriction to $P\times J$. [[thm-picard-zero-represented-by-jacobian]] [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]

## Proof

**Proof technique:** direct: compare the two induced morphisms to the degree-$g$ Picard component on the dense open of generic divisors, extend by separatedness, and use the rigidification.

1.1 Put $\rho(a)=[u_P^*t_{-a}^*L']$ and $\sigma(a)=[(\mathcal M_P)_a\otimes\mathcal O_C(gP)]$, viewed as morphisms $J\to\operatorname{Pic}^g_{C/\bar k}$. For $a$ in the dense open of [F2], the divisor of $t_{-a}^*L'$ is $a+\Theta'_P=a-\Theta_P$, so its pullback under $u_P$ is $D(a)$. By [F1], $(\mathcal M_P)_a$ represents $[\mathcal O_C(D(a)-gP)]$, hence both $\rho(a)$ and $\sigma(a)$ equal $[\mathcal O_C(D(a))]$. Since the degree-$g$ Picard component is separated by [F4], equality on this dense open gives $\rho=\sigma$ on $J$. Evaluating at the identity yields $u_P^*L'\cong\mathcal O_C(gP)$. [A1, F1, F2, F4, given]

2.1 Let $\mathcal N=(u_P\times[-1])^*\Lambda(L')$. For any $a\in J$, its restriction to $C\times\{a\}$ has relative Picard class $[u_P^*t_{-a}^*L'\otimes(u_P^*L')^{-1}].$ The fourth factor $\pi^*e^*L'$ in $\Lambda(L')$ is a one-dimensional constant line on this fiber and does not change its Picard class. By $\rho=\sigma$ and the identity-fiber equality in step 1.1, this class is $[(\mathcal M_P)_a]$ for every $a$. Hence $\mathcal N$ and $\mathcal M_P$ define the same morphism $J\to\operatorname{Pic}^0_{C/\bar k}$. [F1, F3, step 1.1]

3.1 Both families are rigidified along $P\times J$: this is the normalization of $\mathcal M_P$ in [F1], and $\Lambda(L')$ is trivial on the identity axis by [F3] while $u_P(P)=0$. Their equality as Picard classes means $\mathcal N\otimes\mathcal M_P^{-1}$ is pulled back from a line bundle on $J$; restricting to $P\times J$ makes that base line bundle trivial. The rigidified families are therefore isomorphic, proving the Statement. [F1, F3, F4, step 2.1] ∎

## Axiom use

AC and DC are declared and consumed through the Picard representation and normalized universal-family suppliers [F1]. The dense-open equality and rigidification arguments use no additional choice.
