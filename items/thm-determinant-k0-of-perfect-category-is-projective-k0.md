---
id: thm-determinant-k0-of-perfect-category-is-projective-k0
kind: theorem
title: Determinant K0 of Perfect Complexes Is Projective K0
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-algebraic-k0-and-k1-of-a-ring
- def-universal-determinant-functor-on-a-perfect-derived-category
- thm-universal-determinant-functor-exists-on-small-triangulated-categories
- def-perfect-complex-over-a-ring
- lem-perfect-complexes-form-a-triangulated-subcategory
- thm-perfect-complex-k-zero-agrees-with-projective-k-zero
sources:
  references:
  - title: Breuning, Determinant Functors on Triangulated Categories, Proposition 4.13
    url: https://arxiv.org/pdf/math/0610435
  - title: Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups, Theorem 1.1
    url: https://arxiv.org/pdf/0812.1556
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $R$ be a unital associative ring and let $D_{\mathrm{perf}}(R)$ be the small triangulated category of perfect complexes. For any universal determinant functor $g_R:D_{\mathrm{perf}}(R)\to\mathcal W(R)$, the group $K_0^{\det}(D_{\mathrm{perf}}(R))=\pi_0(\mathcal W(R))$ is canonically isomorphic to the split Grothendieck group of finitely generated projective left $R$-modules. The isomorphism sends a projective module $P$ to the determinant class of the complex with $P$ in degree zero and zero modules in all other degrees.

## Statement references

[Breuning, Proposition 4.13](https://arxiv.org/pdf/math/0610435)

[Breuning, Theorem 1.1](https://arxiv.org/pdf/0812.1556)



## Facts & Assumptions

[F1] [[thm-perfect-complex-k-zero-agrees-with-projective-k-zero]] identifies triangle K0 with split projective K0 by degree-zero inclusion.



**Given:** A unital associative ring $R$, a small perfect derived category $T=D_{\mathrm{perf}}(R)$ and a universal determinant functor $g:T\to W$.

## Proof

**Proof technique:** direct.

1.1 Let $G=K_0^{\mathrm{tri}}(T)$ be the free abelian group on isomorphism classes of objects of $T$, modulo $[Y]=[X]+[Z]$ for distinguished triangles $X\to Y\to Z\to X[1]$. The assignment $[X]\mapsto[g(X)]$ respects these relations because $g$ supplies an isomorphism $g(Y)\cong g(X)\otimes g(Z)$ for each triangle. Hence it induces a homomorphism $u:G\to\pi_0(W)$. [given, construct, algebra]

2.1 Regard $G$ as a discrete Picard category: its objects are elements of $G$, its only arrows are identities, and tensor product is group addition. Sending $X$ to $[X]$ defines a determinant functor $h:T\to G$, since isomorphic objects have the same class and each triangle relation gives equality of the required objects. All determinant coherence diagrams commute because there is at most one arrow between two objects. By universality there is a monoidal functor $M:W\to G$ and an isomorphism $Mg\cong h$. It yields a homomorphism $v:\pi_0(W)\to G$ with $vu([X])=[X]$ for every generator. Thus $vu=\operatorname{id}_G$. [step 1.1, construct, algebra]

3.1 In the word construction in the existence theorem every object of the constructed universal Picard category is isomorphic to the determinant of one object of $T$: recursively combine tensor factors using split triangles. Every other universal choice is compatibly equivalent to that construction. Consequently the elements $[g(X)]$ exhaust $\pi_0(W)$. On each of them, $uv([g(X)])=u([X])=[g(X)]$, so $uv=\operatorname{id}_{\pi_0(W)}$. Hence $u$ is an isomorphism between triangle $K_0$ and determinant $K_0$. [step 1.1, step 2.1, algebra]

4.1 The local perfect-complex $K_0$ comparison identifies $K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(R))$ with the split Grothendieck group of finite projective $R$-modules, by degree-zero inclusion, with inverse the alternating sum of projective terms. Composing this comparison with $u$ gives the asserted isomorphism. It sends $[P]$ to $[g(P[0])]$ by its construction. Each map is determined on these generators, so the identification is canonical and uses no regularity assumption. [F1, step 1.1, step 3.1, algebra] ∎
