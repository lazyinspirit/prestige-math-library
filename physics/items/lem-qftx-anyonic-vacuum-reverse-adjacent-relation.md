---
id: lem-qftx-anyonic-vacuum-reverse-adjacent-relation
kind: lemma
title: "Vacuum projectors obey the reverse adjacent Temperley–Lieb relation"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-anyonic-fusion-path-space
  - thm-anyonic-path-space-is-hilbert-under-unitarity
  - def-anyonic-local-channel-projector
  - def-qc-tqc-f-symbol
  - thm-anyonic-local-channel-projectors-are-orthogonal
  - def-anyonic-frobenius-schur-sign
  - lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization
  - thm-anyonic-channel-projectors-are-reparenthesization-independent
dependency_roles:
  def-anyonic-fusion-path-space: mathematical-premise
  thm-anyonic-path-space-is-hilbert-under-unitarity: mathematical-premise
  def-anyonic-local-channel-projector: mathematical-premise
  def-qc-tqc-f-symbol: mathematical-premise
  thm-anyonic-local-channel-projectors-are-orthogonal: mathematical-premise
  def-anyonic-frobenius-schur-sign: mathematical-premise
  lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization: mathematical-premise
  thm-anyonic-channel-projectors-are-reparenthesization-independent: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof is a finite fusion-channel and rank-one projection calculation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joshua Chen, The Temperley–Lieb Categories and Skein Modules, ANU Honours Thesis (2014)"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.2, Remark 2.2.3 states both adjacent relations for the abstract Temperley–Lieb generators. The local vacuum-projector relation in this item is proved from the supplied normalized anyonic F-coefficient."
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

Let $\mathcal C$ be a unitary spherical fusion category over $\mathbb C$. Let $a,b,c$ be simple objects, with $a$ self-dual, $N_{aa}^{\mathbf1}=1$, and supply the normalized vacuum-channel self-duality datum with sign $\kappa_a\in\{+1,-1\}$ and positive spherical dimension $d_a$. For $n\ge3$, take the fixed-boundary repeated-$a$ path space $H_{a,n;b,c}=\operatorname{Hom}_{\mathcal C}(c,T_n)$ with $T_0=b$ and $T_{j+1}=T_j\otimes a$, as in [[def-anyonic-fusion-path-space]]. Let $P_i=P_{i,\mathbf1}$ be the orthogonal local vacuum-channel projectors and put $U_i=\delta_aP_i$, where $\delta_a=\kappa_ad_a$. Then, for every $1\le i\le n-2$,

$$U_{i+1}U_iU_{i+1}=U_{i+1}.$$

This supplies the reverse adjacent relation for the repeated-charge Temperley–Lieb family.

## Statement references

[[def-anyonic-fusion-path-space]]

[[def-anyonic-local-channel-projector]]

[[thm-anyonic-local-channel-projectors-are-orthogonal]]

[[def-anyonic-frobenius-schur-sign]]

[[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]

[[thm-anyonic-channel-projectors-are-reparenthesization-independent]]

## Facts & Assumptions

**Given:** The unitary spherical fusion category, self-dual charge $a$, normalized vacuum-channel cup/cap datum, fixed-boundary path space, and indices $1\le i\le n-2$.

[F1] [[def-anyonic-fusion-path-space]]: $H_{a,n;b,c}=\operatorname{Hom}(c,b\otimes a^{\otimes n})$ has split-tree bases indexed by intermediate simple charges and every vertex multiplicity coordinate.

[F2] [[def-anyonic-local-channel-projector]]: $P_{i,s}=F_i^{-1}\Pi_sF_i$, where $F_i$ is the typed F-move coordinate matrix and $\Pi_s$ retains all multiplicity coordinates of pair output $s$.

[F3] [[def-qc-tqc-f-symbol]]: for the three-site associator, the coefficient $F_{f,e}$ is the target right-tree coordinate of the left-tree basis map after applying the inverse associator; the tree bases are orthonormal.

[F4] [[thm-anyonic-local-channel-projectors-are-orthogonal]]: in a unitary fusion category with orthonormal split-tree bases, each local channel projector is an orthogonal projection.

[F5] [[def-anyonic-frobenius-schur-sign]]: $d_a>0$, $\kappa_a\in\{+1,-1\}$, and the normalized duality maps are $\operatorname{coev}=\sqrt{d_a}\,v$ and $\operatorname{ev}=\kappa_a\sqrt{d_a}\,v^\dagger$.

[F6] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: in the stated orthonormal vacuum gauge, $(F^{aaa}_a)_{\mathbf1,\mathbf1}=\kappa_a/d_a$ and $\delta_a=\kappa_ad_a$.

[F7] [[thm-anyonic-channel-projectors-are-reparenthesization-independent]]: canonical F-move paths between the same fixed parenthesizations give the same local channel operator.

[F8] [[thm-anyonic-path-space-is-hilbert-under-unitarity]]: the split Hom inner product on the path space is linear in its first variable and satisfies $g^\dagger f=\langle f,g\rangle\operatorname{id}_c$.

## Proof

**Given:** The category and path data in the Statement, with the split-tree inner products and normalized vacuum gauge from [F2]–[F6].

1.1 Choose a parenthesization grouping the three sites $a_i,a_{i+1},a_{i+2}$ and decompose the split-tree basis by their simple total charge $y$ and the spectator labels. If the first pair fuses to $\mathbf1$, then its fusion with the third $a$ has total charge $y=\mathbf1\otimes a\cong a$; the same is true if the last pair fuses to $\mathbf1$. On the $y=a$ block each vacuum-channel subspace has dimension $N_{aa}^{\mathbf1}N_{\mathbf1 a}^{a}=1$, since $N_{aa}^{\mathbf1}=1$ and the tensor unit acts as the identity. On every $y\not\cong a$ block both projectors vanish. Each fixed spectator label and multiplicity coordinate gives a copy of this local block, where $P_i$ and $P_{i+1}$ act as rank-one orthogonal projections onto unit vectors $e$ and $f$, by [F4]. [F1, F2, F4, given, construct]

2.1 By the F-symbol coordinate convention in [F3], the vacuum-to-vacuum entry of the three-site F-move is the coordinate of one unit basis vector in the other tree basis. Therefore $|\langle e,f\rangle|=|(F^{aaa}_a)_{\mathbf1,\mathbf1}|=|\kappa_a/d_a|=1/d_a$ by [F5] and [F6], so $|\langle e,f\rangle|^2=d_a^{-2}$. [F3, F5, F6, step 1.1, algebra]

3.1 For unit vectors $e,f$, the linear-first convention in [F8] gives the rank-one projections $P_e x=\langle x,e\rangle e$ and $P_f x=\langle x,f\rangle f$. Hence $P_fP_eP_f x=\langle x,f\rangle\langle f,e\rangle\langle e,f\rangle f=|\langle e,f\rangle|^2P_f x$. Therefore $P_{i+1}P_iP_{i+1}=d_a^{-2}P_{i+1}$ on each $y=a$ spectator copy; on every other block both sides are zero. Tensoring with the spectator identities and transporting to the fixed path parenthesization preserves the relation by [F7]. [F4, F7, F8, step 1.1, step 2.1, algebra]

4.1 Since $\delta_a=\kappa_ad_a$ and $\kappa_a^2=1$, $\delta_a^2=d_a^2$. Thus $U_{i+1}U_iU_{i+1}=\delta_a^3P_{i+1}P_iP_{i+1}=\delta_a^3d_a^{-2}P_{i+1}=\delta_aP_{i+1}=U_{i+1}$. The sign is retained in the final equality. [F5, F6, step 3.1, algebra] ∎

## Remarks

The published anyonic projector proposition supplies the square relation, the left-oriented adjacent relation, and distant commutation, but its Statement does not list this reverse adjacent relation. The rank-one calculation above proves that missing direction from the same normalized F-coefficient, so the Hecke braid theorem can be applied to the actual anyonic family without assuming the omitted relation.
