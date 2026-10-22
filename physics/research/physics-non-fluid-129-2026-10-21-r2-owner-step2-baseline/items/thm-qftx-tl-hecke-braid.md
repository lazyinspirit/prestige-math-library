---
id: thm-qftx-tl-hecke-braid
kind: theorem
title: "Temperley–Lieb projectors give a Hecke braid representation"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb
  - lem-qftx-anyonic-vacuum-reverse-adjacent-relation
  - def-generic-type-a-hecke-algebra
  - lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units
  - def-braid-group-by-the-artin-presentation
  - thm-von-dyck
dependency_roles:
  prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb: mathematical-premise
  lem-qftx-anyonic-vacuum-reverse-adjacent-relation: mathematical-premise
  def-generic-type-a-hecke-algebra: mathematical-premise
  lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units: mathematical-premise
  def-braid-group-by-the-artin-presentation: mathematical-premise
  thm-von-dyck: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all arguments are finite operator identities and presentation factorisations."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Samson Black, Representations of Hecke Algebras and the Alexander Polynomial, University of Oregon dissertation, 2010"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/1153c45e-f560-4af8-bd6b-ed089b462004/content"
      locator: "§II.2.2 Definition 11.2.3 and §II.3 Definitions 11.3.1, Lemma 11.3.2, and Theorems 11.3.3–11.3.4."
    - title: "Joshua Chen, The Temperley-Lieb categories and skein modules, ANU Honours Thesis, 2014"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.1–2.3: the loop parameter, endomorphism algebra, Jones-Wenzl recursion, and trace."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Mathematical Surveys and Monographs 205"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.1–8.3: the braided-category hexagons, adjacent braid action, and quasitriangular Hopf conventions."
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, let $V$ be a complex vector space, and let $U_1,\ldots,U_{n-1}\in\operatorname{End}_{\mathbb C}(V)$. Suppose $\delta\in\mathbb C$, $q\in\mathbb C^\times$, and $\delta=q+q^{-1}$, and assume

$$U_i^2=\delta U_i,\qquad U_iU_{i+1}U_i=U_i,\qquad U_{i+1}U_iU_{i+1}=U_{i+1}\quad(1\le i\le n-2),\qquad U_iU_j=U_jU_i\quad(|i-j|>1).$$

Define $B_i:=qI_V-U_i$. Then each $B_i$ is invertible with $B_i^{-1}=q^{-1}I_V-U_i$; the $B_i$ satisfy the Artin braid and far-commutation relations; and

$$(B_i-qI_V)(B_i+q^{-1}I_V)=0.$$

Thus $\sigma_i\mapsto B_i$ defines a group homomorphism $B_n\to\operatorname{GL}(V)$. If $H_v(n)$ is the generic type-A Hecke algebra with $(T_i-v)(T_i+1)=0$, its scalar specialization $H_{q^2}(n)$ has a unital algebra representation $T_i\mapsto qB_i$. This is the standard Hecke normalization because $(qB_i-q^2I_V)(qB_i+I_V)=0$. If $V$ is a complex Hilbert space and each $U_i$ is bounded self-adjoint, then $\delta\in\mathbb R$ and $|q|=1$ imply that each $B_i$ is unitary. No faithfulness, diagonalizability, or physical realization is asserted.

## Statement references

[[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]

[[lem-qftx-anyonic-vacuum-reverse-adjacent-relation]]

[[def-generic-type-a-hecke-algebra]]

[[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]]

[[def-braid-group-by-the-artin-presentation]]

[[thm-von-dyck]]

## Facts & Assumptions

**Given:** $n\ge2$, the operator family on $V$, and $q,\delta$ satisfying the hypotheses in the Statement.

[F1] [[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]: on the repeated-$a$ path space $U_i=\delta_aP_i$ with $\delta_a=\kappa_ad_a$; its Statement gives the square relation, $U_iU_{i+1}U_i=U_i$, and distant commutation.

[F2] [[lem-qftx-anyonic-vacuum-reverse-adjacent-relation]]: on the same path space the omitted reverse relation $U_{i+1}U_iU_{i+1}=U_{i+1}$ holds, so [F1] and [F2] supply the complete adjacent Temperley–Lieb relations.

[F3] [[def-generic-type-a-hecke-algebra]]: $H_v(n)$ is presented by generators $T_i$, the type-A braid and distant-commutation relations, and $(T_i-v)(T_i+1)=0$; specialization at a unit $v=q^2$ preserves this presentation.

[F4] [[lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units]]: the generators of the Hecke tower are units and the standard assignment $\sigma_i\mapsto T_i$ defines the braid-group homomorphism into the Hecke unit group.

[F5] [[def-braid-group-by-the-artin-presentation]]: $B_n$ has precisely the adjacent braid and distant-commutation relators displayed in the Statement.

[F6] [[thm-von-dyck]]: a map from the generators of a presented group extends uniquely to a homomorphism when every defining relator maps to the identity.

## Proof

1.1 Since $U_i^2=\delta U_i$ and $\delta=q+q^{-1}$, $(qI_V-U_i)(q^{-1}I_V-U_i)=I_V-(q+q^{-1})U_i+U_i^2=I_V$. The product in the reverse order is the same polynomial in $U_i$, so $B_i^{-1}=q^{-1}I_V-U_i$. [given, algebra]

1.2 For adjacent $i,i+1$, expansion and the square and adjacent Temperley–Lieb relations give $(qI_V-U_i)(qI_V-U_{i+1})(qI_V-U_i)-(qI_V-U_{i+1})(qI_V-U_i)(qI_V-U_{i+1})=-(q^2-q\delta+1)(U_i-U_{i+1})=0$, since $q\delta=q^2+1$. Thus the adjacent braid relation holds. [given, algebra]

2.1 We have $B_i-qI_V=-U_i$ and $B_i+q^{-1}I_V=\delta I_V-U_i$; hence $(B_i-qI_V)(B_i+q^{-1}I_V)=-\delta U_i+U_i^2=0$. [given, step 1.1, algebra]

2.2 If $|i-j|>1$, then $B_iB_j-B_jB_i=U_iU_j-U_jU_i=0$. Together with step 1.1, the $B_i$ are units satisfying all relators of [F5]. [F5, given, step 1.1, algebra]

3.1 By [F6] applied to [F5] and the assignment $\sigma_i\mapsto B_i$, step 2.2 supplies a unique homomorphism $\rho_n:B_n\to\operatorname{GL}(V)$ with $\rho_n(\sigma_i)=B_i$. [F5, F6, step 2.2, construct]

3.2 Let $\widetilde T_i:=qB_i$. They satisfy the braid and distant relations by steps 1.2–2.2, and $(\widetilde T_i-q^2I_V)(\widetilde T_i+I_V)=q^2(B_i-qI_V)(B_i+q^{-1}I_V)=0$. Consequently the generator map from the free unital algebra kills every defining relator of $H_{q^2}(n)$, so its defining ideal lies in the kernel and the map factors through the quotient $H_{q^2}(n)$. This gives the stated unital Hecke-algebra representation. [F3, step 2.1, step 1.2, step 2.2, algebra]

4.1 Apply the coefficient map $\mathbb Z[v^{\pm1},z]\to\mathbb C$, $v\mapsto q^2$, $z\mapsto0$, to the Hecke tower in [F4]. By its defining scalar-extension construction and the specialization in [F3], the resulting algebra is $H_{q^2}(n)$; base change carries [F4]'s braid homomorphism to $\eta_n:B_n\to H_{q^2}(n)^\times$ with $\eta_n(\sigma_i)=T_i$. Composing with $\Phi_n$ from step 3.2 sends $\sigma_i$ to $qB_i$, identifying the chosen normalization against the standard Hecke generator assignment. No Markov trace or link-invariant claim is used. [F3, F4, step 3.2, construct]

5.1 If $V$ is a complex Hilbert space, $U_i$ is bounded self-adjoint, and $|q|=1$, then $B_i^*=\overline q I_V-U_i=q^{-1}I_V-U_i=B_i^{-1}$ by step 1.1, so $B_i$ is unitary. For the repeated-$a$ anyonic path family, [F1] and [F2] supply both adjacent relations, the square relation, and distant commutation with the signed $\delta_a=\kappa_ad_a$; whenever $q+q^{-1}=\delta_a$, it therefore meets the operator hypotheses of this theorem. No sign is replaced by $+1$. [F1, F2, given, step 1.1, algebra] ∎

## Remarks

The finite-dimensional anyonic path-space operators are one algebraic source of the $U_i$. The conclusion is conditional on their displayed relations and signed loop parameter. It does not identify these operators with an experimentally realized adiabatic exchange.
