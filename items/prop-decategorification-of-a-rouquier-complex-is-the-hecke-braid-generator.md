---
id: prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator
kind: proposition
title: "Decategorification of a Rouquier complex is the Hecke braid generator"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, def-positive-and-negative-rouquier-generator-complexes, lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative, def-rouquier-complex-of-a-braid-word, thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence, def-split-grothendieck-rings-of-type-a-soergel-categories, def-type-a-hecke-algebra-in-soergel-normalization, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Catharina Stroppel, Categorification: tangle invariants and TQFTs, Proc. Int. Cong. Math. 2022, Vol. 2, EMS Press, pp. 1312-1353 (CC BY 4.0)"
      url: "https://ems.press/content/book-chapter-files/33157"
      locator: "Remark 3.14 and equation (3.7), printed pp. 1325-1326"
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Theorem 3.5 and §3.3.2, arXiv pp. 10-11"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10 and the decategorification discussion, printed pp. 544-545"
verification:
  precheck: pass
---

## Statement

Let $\Phi\colon K_0^{\mathrm{split}}(\mathrm{SBim}_n)\to H_{S_n}$ be the unique
algebra isomorphism of
[[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]
with $\Phi([B_i])=H_i=v(T_i+1)$ and $\Phi(vX)=v\,\Phi(X)$, where $H_{S_n}$ is
the Hecke algebra over $A=\mathbb Z[v,v^{-1}]$ with $q=v^{-2}$ and standard
generators $T_i$, and let $\chi$ be the alternating class of
[[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]].

(a) $\Phi(\chi(F_i))=H_i-v=v\,T_i$ and
$\Phi(\chi(F_i^{-1}))=H_i-v^{-1}=v^{-1}T_i^{-1}$; equivalently
$\chi(F_i(-1))$ maps to $T_i$ and $\chi(F_i^{-1}(1))$ maps to $T_i^{-1}$. In
particular $\chi(F_i)\chi(F_i^{-1})=1$, and the powers of $v$ are the exact
normalization of the library's shift convention, not an ambiguity.

(b) For every braid $\beta\in B_n$ and every signed word $\sigma$ for $\beta$,
$\Phi(\chi(F(\sigma)))=v^{e(\sigma)}T_\beta$, where
$T_\beta:=T_{i_1}^{\epsilon_1}\cdots T_{i_r}^{\epsilon_r}$ is the image of
$\beta$ under the standard group homomorphism $B_n\to H_{S_n}^{\times}$,
$\sigma_i\mapsto T_i$, and
$e(\sigma)=\#\{\epsilon_k=1\}-\#\{\epsilon_k=-1\}$ depends only on $\beta$.
Hence $\beta\mapsto v^{-e(\beta)}\chi(F(\beta))$, composed with $\Phi$, is that
standard homomorphism: up to the grading normalization, the Rouquier complex of
a braid decategorifies to the image of the braid in the Hecke algebra.

## Facts & Assumptions

**Given:** The isomorphism $\Phi$ with $\Phi([B_i])=H_i=v(T_i+1)$ and $\Phi(vX)=v\Phi(X)$, the Euler class $\chi$ of [[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]], and the generator complexes of [[def-positive-and-negative-rouquier-generator-complexes]].

[F1] *Classes of the generators.* $\chi(F_i)=[B_i]-[R(1)]$ and $\chi(F_i^{-1})=[B_i]-[R(-1)]$ in $K_0^{\mathrm{split}}(\mathrm{SBim}_n)$; the unit class is $[R]=1$, and $[R(r)]=v^{r}$ under the rule $v[X]=[X(1)]$. ([[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]], [[def-split-grothendieck-rings-of-type-a-soergel-categories]])

[F2] *The Hecke normalization.* $\Phi$ is an algebra isomorphism with $\Phi([B_i])=H_i=v(T_i+1)$, $\Phi(vX)=v\Phi(X)$, $q=v^{-2}$; the quadratic relation of [[def-type-a-hecke-algebra-in-soergel-normalization]] gives $T_i(v^2T_i-1+v^2)=1=(v^2T_i-1+v^2)T_i$, hence $T_i^{-1}=v^2T_i-1+v^2$ ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]])

[F3] *Multiplicativity and invariance.* $\chi(C\otimes_RD)=\chi(C)\chi(D)$ for signed totalizations, $\chi$ is a homotopy invariant and is multiplicative over finite tensor products; the word complex of a signed word is the corresponding iterated tensor product. ([[lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative]], [[def-rouquier-complex-of-a-braid-word]])

[F4] *Word independence.* Homotopy equivalent word complexes for the same braid have equal Euler classes, and the sign $e(\sigma)$ depends only on the braid; the assignment $\sigma_i\mapsto T_i$ extends to the group homomorphism $B_n\to H_{S_n}^\times$ because the Hecke algebra is presented by the braid relations and by the invertibility of $T_i$. ([[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]], [[def-braid-group-by-the-artin-presentation]], [[def-type-a-hecke-algebra-in-soergel-normalization]])

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2] we compute $\Phi(\chi(F_i))=\Phi([B_i])-\Phi([R(1)])=H_i-v=v(T_i+1)-v=vT_i$, and likewise $\Phi(\chi(F_i^{-1}))=H_i-v^{-1}$; using $T_i^{-1}=v^2T_i-1+v^2$ gives $v^{-1}T_i^{-1}=vT_i- v^{-1}+v=H_i-v^{-1}$, so $\Phi(\chi(F_i^{-1}))=v^{-1}T_i^{-1}$. [F1, F2]

2.1 Multiplying: $\Phi(\chi(F_i))\Phi(\chi(F_i^{-1}))=vT_i\cdot v^{-1}T_i^{-1}=1$; equivalently $\chi(F_i(-1))\mapsto T_i$ and $\chi(F_i^{-1}(1))\mapsto T_i^{-1}$ since the shift acts by $v^{\pm1}$. This proves (a). [F1, F2, step 1.1]

2.2 For a signed word $\sigma$, [F3] gives $\chi(F(\sigma))=\prod_k\chi(F_{i_k}^{\epsilon_k})$; by step 1.1 each positive letter contributes $vT_i$ and each negative letter $v^{-1}T_i^{-1}$, so $\Phi(\chi(F(\sigma)))=v^{\#\{+1\}}v^{-\#\{-1\}}\prod_kT_{i_k}^{\epsilon_k}=v^{e(\sigma)}T_\beta$ where $T_\beta$ is the image of $\beta$ under the standard homomorphism. [F3, step 1.1]

3.1 Word independence: if $\sigma'$ is another signed word for $\beta$ then $F(\sigma)\simeq F(\sigma')$ by [F4], so $\chi(F(\sigma))=\chi(F(\sigma'))$; and $e(\sigma)=e(\sigma')$ because inverse pairs have exponent zero and the two Artin relations have the same exponent on both sides. Hence the assignment $\beta\mapsto v^{-e(\beta)}\chi(F(\beta))$ is well defined, and composing with $\Phi$ gives the standard homomorphism $\sigma_i\mapsto T_i$. [F4, step 2.2] ∎

## Remarks

The unit factors $v^{\pm1}$ are exact and cannot be dropped: the design's shorthand "match $T_i^{\pm1}$" suppresses them, and the equalities displayed in (a) are the exact normalization of the library's shift convention. The proposition is a decategorification statement at the level of classes; it does not assert that the class map determines the homotopy type, and indeed the counterexample of this pair shows that it does not.
