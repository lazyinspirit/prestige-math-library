---
id: prop-qftx-coxeter-specialization
kind: proposition
title: "Coxeter quotient at the Hecke specialization q=1"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - thm-qftx-tl-hecke-braid
  - def-generic-type-a-hecke-algebra
  - thm-the-symmetric-group-has-the-coxeter-presentation
  - thm-the-braid-group-surjects-onto-the-symmetric-group
  - thm-von-dyck
dependency_roles:
  thm-qftx-tl-hecke-braid: mathematical-premise
  def-generic-type-a-hecke-algebra: mathematical-premise
  thm-the-symmetric-group-has-the-coxeter-presentation: mathematical-premise
  thm-the-braid-group-surjects-onto-the-symmetric-group: mathematical-premise
  thm-von-dyck: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the factorization is a presentation argument."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Samson Black, Representations of Hecke Algebras and the Alexander Polynomial, University of Oregon dissertation, 2010"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/1153c45e-f560-4af8-bd6b-ed089b462004/content"
      locator: "§II.2.2 Definition 11.2.3 and §II.3 Definitions 11.3.1 and Theorem 11.3.3: Hecke and Temperley-Lieb generator normalizations."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Mathematical Surveys and Monographs 205"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.2, the braid-group action from a braiding, and §8.3, quasitriangular Hopf conventions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $n\ge2$, $V$ be a complex vector space, $U_i\in\operatorname{End}_{\mathbb C}(V)$, $\delta\in\mathbb C$, and $q\in\mathbb C^\times$ satisfy $\delta=q+q^{-1}$ and

$$U_i^2=\delta U_i,\qquad U_iU_{i+1}U_i=U_i,\qquad U_{i+1}U_iU_{i+1}=U_{i+1},\qquad U_iU_j=U_jU_i\quad(|i-j|>1).$$

Put $B_i=qI_V-U_i$, and let $\rho_n:B_n\to\operatorname{GL}(V)$ be the homomorphism $\rho_n(\sigma_i)=B_i$ from the preceding Temperley–Lieb–Hecke construction. At $q=1$ one has $\delta=2$ and $B_i=I_V-U_i$. These operators satisfy $B_i^2=I_V$, so $\rho_n$ factors through the canonical quotient $\pi_n:B_n\to S_n$ as a representation $S_n\to\operatorname{GL}(V)$. The $q=1$ Hecke generator relations are then the type-A Coxeter relations. For general $q$, the roots of the quadratic relation are $q$ and $-q^{-1}$; they coincide when $q^2=-1$, and no diagonalizability is asserted. Involutivity is not imposed by the Hecke relation and need not hold.

## Statement references

[[thm-qftx-tl-hecke-braid]]

[[def-generic-type-a-hecke-algebra]]

[[thm-the-symmetric-group-has-the-coxeter-presentation]]

[[thm-the-braid-group-surjects-onto-the-symmetric-group]]

[[thm-von-dyck]]

## Facts & Assumptions

**Given:** The operator family, parameter relation, and braid-group representation from [[thm-qftx-tl-hecke-braid]].

[F1] [[thm-qftx-tl-hecke-braid]]: the $B_i$ satisfy the adjacent braid and distant-commutation relations and $(B_i-qI_V)(B_i+q^{-1}I_V)=0$.

[F2] [[def-generic-type-a-hecke-algebra]]: the specialized generators have quadratic relation $(T_i-v)(T_i+1)=0$, together with type-A braid and distant-commutation relations.

[F3] [[thm-the-symmetric-group-has-the-coxeter-presentation]]: the adjacent transpositions $s_i$ present $S_n$ with relators $s_i^2=1$, the adjacent braid relations, and distant commutation.

[F4] [[thm-the-braid-group-surjects-onto-the-symmetric-group]]: the canonical quotient sends $\sigma_i\mapsto s_i$ (in the library's transported indexing convention).

[F5] [[thm-von-dyck]]: a generator assignment satisfying all presentation relators extends uniquely to a homomorphism.

## Proof

1.1 At $q=1$, the parameter relation gives $\delta=2$. For every $i$, $B_i^2=(I_V-U_i)^2=I_V-2U_i+U_i^2=I_V$, using $U_i^2=2U_i$ from [F1]. [F1, given, algebra]

1.2 The general quadratic in [F1] factors as $(B_i-qI_V)(B_i+q^{-1}I_V)=0$, whose scalar roots are $q$ and $-q^{-1}$; equality of those roots is equivalent to $q^2=-1$. This polynomial relation alone asserts no diagonalization. [F1, algebra]

2.1 By [F1], the $B_i$ also satisfy the adjacent braid and distant-commutation relators. Along with step 1.1, these are exactly the Coxeter relators in [F3], so [F5] gives a homomorphism $\widetilde\rho_n:S_n\to\operatorname{GL}(V)$ with $\widetilde\rho_n(s_i)=B_i$. [F1, F3, F5, step 1.1, construct]

3.1 The composite $\widetilde\rho_n\circ\pi_n$, with $\pi_n$ from [F4], and the braid representation $\rho_n$ from [F1] agree on every generator $\sigma_i$, since both send it to $B_i$. The generators determine a homomorphism from $B_n$, so $\rho_n=\widetilde\rho_n\circ\pi_n$. [F1, F4, step 2.1, algebra]

3.2 The Hecke representation of the preceding theorem sends $T_i$ to $qB_i$, which equals $B_i$ at $q=1$. The generic relation $(T_i-v)(T_i+1)=0$ in [F2] then becomes $T_i^2=I_V$; together with the braid and distant relations these are exactly the Coxeter generator relations in [F3]. Thus the specialized Hecke generators act by the same generator assignment as $\widetilde\rho_n$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 To see that involutivity is not forced for general $q$, take $V=\mathbb C$, $U_i=0$ for every $i$, $q=2$, and $\delta=5/2$. All Temperley–Lieb relations hold, while $B_i=2I_V$ and $B_i^2=4I_V\ne I_V$. [F1, algebra] ∎

## Remarks

At $q=1$ the Coxeter quotient is obtained by adding involutions to the braid presentation. At general $q$, the representation remains a braid/Hecke representation; no symmetric-group action follows unless the involution relations are separately verified.
