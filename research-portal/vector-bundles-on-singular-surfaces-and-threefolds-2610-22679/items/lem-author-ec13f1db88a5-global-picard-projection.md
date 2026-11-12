---
id: lem-author-ec13f1db88a5-global-picard-projection
kind: lemma
title: The globally normalized first-layer Picard map is determinant
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - prop-motivic-weight-one
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - math:thm-morphisms-into-affine-scheme-global-sections
  - math:def-projective-line-two-affine-cover-and-twisting-sheaf
  - math:cor-picard-projective-line-integers
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ec13f1db88a5-rank-zero-stage: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  prop-motivic-weight-one: mathematical-premise
  lem-unit-section-of-k-one-determinant: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
  math:thm-morphisms-into-affine-scheme-global-sections: mathematical-premise
  math:def-projective-line-two-affine-cover-and-twisting-sheaf: mathematical-premise
  math:cor-picard-projective-line-integers: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - prop-motivic-weight-one
  - lem-nisnevich-line-bundle-torsors
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-ec13f1db88a5-rank-zero-stage
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - prop-motivic-weight-one
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - math:thm-morphisms-into-affine-scheme-global-sections
  - math:def-projective-line-two-affine-cover-and-twisting-sheaf
  - math:cor-picard-projective-line-integers
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
---

## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. On the big Nisnevich site of qcqs $k$-schemes for any field $k$, identify $\Omega^\infty\operatorname{gr}^1K$ with the line-bundle stack $B\mathbb G_m$ by the actual EM weight-one comparison. Then the actual map $q_1:S=\Omega^\infty\operatorname{Fil}^1K\to B\mathbb G_m$ is the perfect-complex determinant/Picard map on the rank-zero fiber. In particular it determines global determinant line classes, including on singular nonaffine schemes.

## Facts & Assumptions

[A1] Assume the Axiom of Choice and the compatible site and universe bounds of the declared suppliers. In particular, use the determinant supplier's universes $U\in V\in W$ with $\omega\in U$, $U$-scheme data, a $V$-small site and $W$-valued spaces; universe existence is separately assumed. Choice is retained in the rank-fiber, determinant, torsor, affine qcqs and projective-line suppliers used below. [[math:def-axiom-of-choice]]

[F1] [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the actual pointed lift $\kappa=-a:B\mathbb G_m\to S$ of $[L]-1$, the normalization $q_1\kappa(\mathcal O(-1))=\mathcal O(-1)$ in Picard classes on $\mathbb P^1_k$, and the actual weight-one stack comparison. [[prop-motivic-weight-one]] permits restriction from prime-field schemes to qcqs schemes over any field $k$.

[F2] [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies the actual extended determinant map $d$ on the rank fiber, with object-class map given by the alternating determinant of perfect complexes and fundamental-group map given by matrix determinant. It supplies left exact space-valued Nisnevich sheafification, the connectedness and determinant fundamental-group isomorphism of that sheaf rank fiber, and fully faithful classification of pointed connected 1-types by sheaves of groups, together with the truncation universal property. [[lem-unit-section-of-k-one-determinant]] constructs the section $u\mapsto[\mathcal O\xrightarrow{u}\mathcal O]$ of determinant; hence on local $K_1$, where determinant is an isomorphism, this section is its inverse.

[F3] [[lem-author-ec13f1db88a5-rank-zero-stage]] identifies $S$ as the actual rank-zero fiber and identifies its object classes injectively with the rank-zero subgroup of perfect $K_0$. [[lem-nisnevich-line-bundle-torsors]] fixes the units sheaf $\mathbb G_m(X)=\Gamma(X,\mathcal O_X)^\times$ and the line-frame-torsor convention. Here $B\mathbb G_m$ is the stack of line bundles and their isomorphisms, pointed by the trivial line, as in [F1] and [F2].

[F4] [[math:thm-morphisms-into-affine-scheme-global-sections]] supplies the natural bijection between maps $X\to\operatorname{Spec}A$ and ring maps $A\to\Gamma(X,\mathcal O_X)$, for arbitrary schemes $X$. In particular, set $R=k[t,t^{-1}]$: its elements are finite formal sums $\sum_i a_it^i$, with $a_i\in k$ and $i\in\mathbb Z$, added coefficientwise and multiplied using $t^it^j=t^{i+j}$. The scheme $G=\operatorname{Spec}R$ is a qcqs $k$-scheme by [[math:cor-affine-scheme-quasi-compact]] and [[math:thm-affine-schemes-quasi-separated]]. Sending $t$ to a global unit and $t^{-1}$ to its inverse defines a $k$-algebra map, so the bijection identifies $G$ with the functor $\mathbb G_m$ on this site.

[F5] [[math:def-projective-line-two-affine-cover-and-twisting-sheaf]] supplies the two affine charts of $\mathbb P^1_k$ and the twist-frame convention $e_\infty=t^re_0$ for $\mathcal O(r)$. [[math:cor-picard-projective-line-integers]] supplies, for every field $k$ under [A1], the degree isomorphism $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$ sending $\mathcal O(r)$ to $r$. These conventions agree with [F1].

## Proof

**Given:** The actual maps on the stated big Nisnevich site, Choice and compatible universe bounds.

**Goal:** Identify the actual first-layer stack map with determinant, retaining its global line-bundle descent data.

1.1 By [F2], a pointed map $T:B\mathbb G_m\to B\mathbb G_m$ is determined up to pointed homotopy by its sheaf-group endomorphism $h$ of $\mathbb G_m$. Evaluate $h$ on the universal unit $t\in\mathbb G_m(G)$ of [F4], obtaining a unit $f\in R$. For a nonzero Laurent polynomial $v$, let $p(v)$ and $q(v)$ be its least and greatest exponents with nonzero coefficients. Because $k$ is a field, the two extreme coefficients of a product of nonzero Laurent polynomials are nonzero, and $p(vw)=p(v)+p(w)$, $q(vw)=q(v)+q(w)$. If $fg=1$, these equalities give $(q(f)-p(f))+(q(g)-p(g))=0$. Both summands are nonnegative, so $f=ct^n$ for some $c\in k^\times$ and $n\in\mathbb Z$. For any unit $u$ on any qcqs $X/k$, [F4] gives the $k$-morphism $f_u:X\to G$ induced by $\sum_i a_it^i\mapsto\sum_i a_iu^i$; naturality gives $h_X(u)=f_u^*h_G(t)=cu^n$. Taking $X=\operatorname{Spec}k$ and $u=1$, the group-homomorphism condition $h_X(1)=1$ forces $c=1$. Thus every such $h$ is $u\mapsto u^n$. A pointed stack map with this loop map sends local trivializations of a line bundle to trivializations whose overlap automorphisms are the $n$th powers of the original transition units; full faithfulness in [F2] identifies it with this map on torsors. In particular [F3] and [F5] make its value on $\mathcal O(-1)$ equal to $\mathcal O(-n)$. Apply this to the two actual pointed composites $q_1\kappa$ and $d\kappa$. The first sends $\mathcal O(-1)$ to its own Picard class by [F1]. For the second, [F1] and [F3] identify the augmented class of $\kappa(L)$ with $[L]-[\mathcal O]$, so [F2] gives $d\kappa(L)$ the class of $\det(L)\otimes\det(\mathcal O)^{-1}=L$. Consequently both composites send $\mathcal O(-1)$ to $\mathcal O(-1)$. The degree isomorphism of [F5] forces the exponent of each composite to be $1$. Both composites are therefore pointed homotopic to the identity. [A1, F1, F2, F3, F4, F5]

2.1 To apply Postnikov classification, put $\widehat S=a_{\mathrm{Nis}}S$ and write $\eta:S\to\widehat S$ for the sheafification unit. By [F3], $S$ is the rank-zero fiber of the specified perfect K-space; since the rank target is already a discrete sheaf, left exact sheafification in [F2] identifies $\widehat S$ with the sheaf rank fiber used there. This sheaf is connected and its actual determinant map $\widehat d:\widehat S\to B\mathbb G_m$ induces the determinant isomorphism on fundamental-group sheaves, with inverse the local unit section in [F2]. Since $B\mathbb G_m$ is already a sheaf, the actual maps $q_1$ and $d$ factor through $\eta$ as $\widehat q_1$ and $\widehat d$. Set $\widehat\kappa=\eta\kappa$. Step 1.1 gives $\widehat d\widehat\kappa\simeq\mathrm{id}$ and $\widehat q_1\widehat\kappa\simeq\mathrm{id}$. On fundamental-group sheaves the first equality makes $\widehat\kappa_*$ the inverse of the determinant isomorphism; the second therefore gives $(\widehat q_1)_*=\widehat d_*$. Both maps factor through the pointed connected 1-type $\tau_{\leq1}\widehat S$. Full faithfulness and the truncation universal property in [F2] identify these two pointed maps. Precomposing with $\eta$ proves $q_1\simeq d$ for the actual original maps. Evaluating at any $X/k$ retains the line bundle with its gluing isomorphisms and hence its global Picard class, including on singular nonaffine schemes. This does not require truncation to commute with global sections. [A1, F1, F2, F3, step 1.1] ∎
