---
id: lem-gts-canonical-codimension-two-surface-has-nonzero-first-jet
kind: lemma
title: Canonical codimension-two surface sections have a nonzero first jet
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- lem-regular-quotient-dualizing-complex-and-biduality
- lem-finite-closed-immersion-derived-coinduction-adjunction
- thm-integral-closure-finite-finite-type-domain-over-field
- cor-noether-normalisation-module-finiteness
- thm-krull-principal-ideal-theorem
- def-axiom-of-choice
dependency_roles:
  lem-regular-quotient-dualizing-complex-and-biduality: mathematical-premise
  lem-finite-closed-immersion-derived-coinduction-adjunction: mathematical-premise
  thm-integral-closure-finite-finite-type-domain-over-field: mathematical-premise
  cor-noether-normalisation-module-finiteness: mathematical-premise
  thm-krull-principal-ideal-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Assume AC. Let $X$ be a smooth complex algebraic fourfold, $p\in X$, and let $T\subset X$ be a normal integral surface locally cut out by a regular sequence $(f,g)$. Suppose $T$ has canonical singularities in the following precise Gorenstein sense: its invertible dualizing sheaf has a local generator $\omega$ near $p$, and the pullback of $\omega$ to a resolution has nonnegative divisor order along every exceptional curve. Then at least one of $df(p)$ and $dg(p)$ is nonzero. In particular such a canonical codimension-two complete-intersection surface has embedding dimension at most three.

## Facts & Assumptions

**Given:** Exactly the smooth ambient fourfold, normal local complete-intersection surface and canonical pullback condition of the Statement. Extra components created in the ambient point blowup are retained in the proof.

[F1] [[lem-regular-quotient-dualizing-complex-and-biduality]] supplies the actual regular-quotient dualizing modules, computed here by the explicit two-equation dual Koszul resolution. [[lem-finite-closed-immersion-derived-coinduction-adjunction]] supplies finite-ring canonical coinduction and its evaluation-at-one adjunction.

[F2] [[thm-integral-closure-finite-finite-type-domain-over-field]] supplies finite normalization of the main component. [[cor-noether-normalisation-module-finiteness]] supplies the finite polynomial normalization used for the local canonical-module calculation. The proof retains all semilocal factors before completion, then takes a finite product factor; it does not assume a single nonhenselian branch localization is finite.

[F3] [[thm-krull-principal-ideal-theorem]] and the dimension of the Rees/associated graded ring give the one-dimensional exceptional fibre of the surface point blowup. Smooth ambient blowup charts, divisor valuations and the determinant identity are written explicitly below.

[F4] [[def-axiom-of-choice]] is inherited from these suppliers. No rational-double-point, Du Val, fundamental-cycle or inversion-of-adjunction theorem is a premise.

## Proof

1.1 Suppose instead $f,g∈m_p²$. Put $m=\operatorname{ord}_p f\ge 2$ and $n=\operatorname{ord}_p g\ge 2$. Blow up the ambient smooth point. In a standard chart $x1=t$, $\xi=t$ ui for $i=2,3,4$, the ambient volume form becomes dx1 wedge dx2 wedge dx3 wedge dx4 $=$ t³ dt wedge du2 wedge du3 wedge du4. [F1, F2, F3, F4, given, construct]

2.1 Write $π*f=t^m$ F and $π*g=t^n$ G, where neither F nor G is divisible by t. The two strict equations have no common divisorial factor: one not supported on $t=0$ would yield a common divisor of f,g off p, and a factor supported on $t=0$ would be t, already removed. Thus (F,G) is still a regular sequence in the regular ambient chart. Its complete intersection C may contain additional surface components inside $t=0$. Keep them; do not assume C equals the strict transform T'. The latter is its unique component dominating T and is generically reduced with multiplicity one. [F1, F2, F3, F4, step 1.1, construct]

3.1 The dual Koszul resolution identifies a generator η of the lci dualizing module of C with the residue of dt wedge du2 wedge du3 wedge du4 along (F,G). On the smooth dense part of the main component, the usual two-equation residue calculation gives π*ω $= t^{(3−m−n)}$ η. [F1, F2, F3, F4, step 2.1, construct]

4.1 One can verify the factor without analytic residue machinery: in the conormal determinant df wedge dg, all terms containing f or g vanish on the complete intersection; the remaining determinant is $t^{(m+n)}dF$ wedge dG. Dividing the transformed ambient determinant by this conormal determinant gives the displayed exponent. [F1, F2, F3, F4, step 3.1, construct]

5.1 The strict transform T' has an exceptional curve over p. Indeed its morphism is the blowup of the maximal ideal of the two-dimensional local domain $O_T,p$, and its exceptional fibre is Proj of the associated graded ring. That graded ring has dimension two, so its Proj has dimension one. Equivalently, a principal exceptional ideal with no curve fibre would make the maximal ideal invertible at a normal surface point, contrary to its height two. Choose a generic point ζ of one such curve and a chart as above containing its direction. [F1, F2, F3, F4, step 4.1, construct]

6.1 Let $A0=O_C,ζ$, a one-dimensional Cohen–Macaulay Gorenstein local ring. Complete at its maximal ideal and put $A=completion(A0)$. Normalize the main-component quotient before completion; finiteness holds for finite-type complex algebraic rings, and the finite normalization base-changes to the completion. It is a product of complete DVRs. Choose one factor B lying over the chosen exceptional curve. Because the factors are direct summands, B is a finite A-module. Completion is faithfully flat and preserves dual Koszul modules and divisor orders on each branch, so it suffices to compute the order there. This completion step avoids falsely asserting that localization at just one prime of a nonhenselian semilocal normalization is finite. [F1, F2, F3, F4, step 5.1, construct]

7.1 Write $q:A\to B$ for the chosen normalization-branch map and put $H=\operatorname{Hom}_A(B,A)$. Finite canonical-module coinduction identifies $\omega_B=H\eta$. Its actual $B$-action is $(b\cdot h)(x)=h(bx)$, not multiplication of $h(1)$ inside $A$. Define $\lambda:H\to B$ by $\lambda(h)=q(h(1))$ and let $J=\lambda(H)$. We prove below that $\lambda$ is an injective $B$-linear map and identifies this canonical module with the fractional differential module $J\eta$; evaluation at one alone is not asserted to be $B$-linear. [F1, F2, F3, F4, step 6.1, construct]

8.1 This follows from the ordinary evaluation-at-one Hom adjunction: choose a finite Noether normalization before localization, retain all finitely many primes over the base point, then complete the regular one-dimensional base and take the corresponding local factors. Canonical modules are $\operatorname{Hom}_R(A,ω_R)$ and $\operatorname{Hom}_R(B,ω_R)$, and $\operatorname{Hom}_A(B,\operatorname{Hom}_R(A,ω_R))=\operatorname{Hom}_R(B,ω_R)$. All rings in this computation are finite over R; the product-factor restriction commutes with the displayed Hom identity. A dual Koszul resolution yields the same identification with the ambient residue generator. It remains valid when the other components of A are nonreduced; B is a finite module supported on the generically reduced main component. [F1, F2, F3, F4, step 7.1, construct]

9.1 Put $K=\operatorname{Frac}(B)$. Since $B$ is the selected factor of the finite birational normalization in step 6.1, $q(A)\subset B$ has fraction field $K$. Thus for each $b\in B$ there are $a,s\in A$ with $q(s)\ne0$ and $b=q(a)/q(s)$. For $h\in H$, $A$-linearity gives
$$q(s)q(h(b))=q(h(q(s)b))=q(h(q(a)))=q(a)q(h(1)).$$
Dividing in $K$ proves $q(h(b))=b\lambda(h)$, hence $\lambda(b\cdot h)=b\lambda(h)$. This is the required projected-evaluation linearity, derived from birationality rather than from the adjunction alone. The generic localization of $A$ at the selected multiplicity-one main-branch minimal prime $P=\ker q$ is $K$, and $B$ localizes there to $K$; at every other minimal prime $B$ localizes to zero. These are exactly the main-component and branch properties retained in step 6.1. If $\lambda(h)=0$, the displayed formula makes $h$ zero at $P$; it is zero at every other minimal prime because its domain is zero there. Its finite image therefore has support only at the maximal ideal of the one-dimensional local ring $A$, so has finite length. A one-dimensional Cohen--Macaulay local ring has no nonzero finite-length submodule of itself: a nonzerodivisor parameter acts injectively on $A$, while a sufficiently large power kills any finite-length module. Hence $h=0$ and $\lambda$ is injective. Moreover $H_P=\operatorname{Hom}_K(K,K)=K$; localization of this finite Hom is computed from a finite presentation of $B$. A nonzero localized homomorphism is represented after clearing a denominator by an element of $H$, so $J\ne0$. We have proved that $J\subset B$ is a nonzero $B$-ideal. Since $B$ is a DVR, $J=z^cB$ for a uniformizer $z$ and $c\ge0$. On the generic field, $h$ is multiplication by $\lambda(h)$, so the canonical-module identification of steps 7.1--8.1 is precisely $\omega_B=J\eta$ inside the rational dualizing line, with the same residue generator $\eta$. If $\vartheta$ generates $\omega_B$, this gives $\eta=z^{-c}u\vartheta$ for a unit $u$, and therefore $\operatorname{ord}_B\eta=-c\le0$. [F1, F2, F3, F4, step 8.1, construct, algebra]

10.1 This is why removing additional exceptional components cannot cure the negative discrepancy by introducing a zero. It introduces an effective conductor and therefore only a possible additional pole. [F1, F2, F3, F4, step 9.1, construct]

11.1 Since t vanishes along the chosen exceptional curve, $\operatorname{ord}_B t=e$ is a positive integer. The displayed transformation formula gives $\operatorname{ord}_B$ π*ω $=$ (3−m−n)e−c $\le −e<0$. [F1, F2, F3, F4, step 10.1, construct]

12.1 Resolve the normalized main component further. It is already regular at the generic point of this exceptional curve, so that negative order persists on its strict transform. This contradicts canonicity. Therefore at least one defining equation has a nonzero differential at p. In particular a canonical normal codimension-two complete-intersection surface in a smooth fourfold has embedding dimension at most three. [F1, F2, F3, F4, step 11.1, construct] ∎

## Remarks

Research-only source candidate. The author read the complete retained Mella9705012v1 and the actual finite-coinduction, regular-quotient dualizing and Noether-normalization carriers used here. No additional external source reading or mathematical acceptance is claimed. This bounded local statement supplies exactly the zero-first-jet exclusion in the separate canonical-doublecut/first-jet smoothness construction.
