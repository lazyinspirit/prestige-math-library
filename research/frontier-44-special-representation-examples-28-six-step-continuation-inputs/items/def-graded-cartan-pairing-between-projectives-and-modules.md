---
id: def-graded-cartan-pairing-between-projectives-and-modules
kind: definition
title: "The graded Cartan pairing between projective and module classes"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 34
deps: [def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-projective-simple-hom-pairing-on-grothendieck-groups,
       thm-projective-hom-pairing-is-additive-and-graded-sesquilinear,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-finitely-generated-graded-projective-module,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.4-2.10, printed pp. 6-10: graded module categories, duality and divided powers; Section 4.7-4.8, printed pp. 35-37: Theorems 4.9, 4.11 and 4.12 describing the pairing and duality structure of the blocks. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 2, printed pp. 6-17: cyclotomic Hecke and KLR conventions, weight idempotents and blocks; Section 9.1-9.5, printed pp. 39-46: categorification and the integral highest weight identification. Complete passages read."
verification:
  precheck: pass
---

## Definition

In the situation and notation of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]], for
each root degree $\alpha$, finite-dimensional graded left
$R^\Lambda_\alpha$-modules $M$ and finitely generated graded projective $P$ put
$$h_\alpha(P,M):=\operatorname{gdim}\operatorname{HOM}_{R^\Lambda_\alpha}(P,M)=\sum_{d\in\mathbb Z}q^d\dim_k\operatorname{Hom}_{R^\Lambda_\alpha,d}(P,M)\in A .$$
By [[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]] (whose
finite-dimensional hypotheses hold blockwise) this descends to an
$A$-sesquilinear pairing
$$h:K_0^{\rm gr}(R^\Lambda)\times G_0^{\rm gr}(R^\Lambda)\longrightarrow A,$$
with the twist $q\mapsto q^{-1}$: $h(q^r[P],q^s[M])=q^{s-r}h([P],[M])$. In
particular $h^0(P,S):=\dim_k\operatorname{Hom}^0(P,S)$ is the degree-zero part.
The pairing on the Hecke side is the transported pairing of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]]. Also
fix the two dualities used below: the descended anti-involution $\psi$ of
`def-cyclotomic-klr-diagram-duality-and-graded-module-duals` with its
finite-module duality $D_\psi$ and finite-projective duality $\#$, both
shift-reversing and involutive on their domains; and the convention that a
simple module or projective cover is called *normalized* when it is fixed (not
merely fixed up to shift) by the relevant duality and, for a cover, when
$\operatorname{Hom}^0(P,S)=k$.

No perfectness, nondegeneracy or $A$-self-duality is asserted in this
definition; those are supplied by
`thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`
and its transported form on the Hecke side.

## Facts & Assumptions

**Given:** The KLR and Hecke towers with their blockwise Grothendieck groups of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]], the
graded Hom pairing of
[[def-projective-simple-hom-pairing-on-grothendieck-groups]] and
[[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]], the graded
dualities of `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`, and
the finitely generated graded projectives of
[[def-finitely-generated-graded-projective-module]].

[F1] The graded Hom pairing between finite-dimensional graded modules over a
finite-dimensional graded algebra, its additivity in both arguments and its
sesquilinearity with the twist $q\mapsto q^{-1}$ are the conclusions of
[[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]]; the pairing
descends to the split Grothendieck group in the first argument and to the
Grothendieck group in the second
([[def-projective-simple-hom-pairing-on-grothendieck-groups]]).

[F2] The graded Hom spaces of finite-dimensional graded modules over a
finite-dimensional graded algebra are finite dimensional over $k$ and
concentrated in finitely many internal degrees, so their graded dimension is a
finite Laurent polynomial in $A$; this is the finiteness underlying the
pairing of [F1] ([[def-finitely-generated-graded-projective-module]]).

[F3] The Hecke tower groups and their Cartan map are the transported groups of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]], and
the descended anti-involution $\psi$ with its finite-module duality $D_\psi$
and finite-projective duality $\#$ are the data of
`def-cyclotomic-klr-diagram-duality-and-graded-module-duals`, where each
graded-simple or projective shift orbit has a unique normalized representative
up to isomorphism.

## Proof

**Proof technique:** direct.

1.1 **The pairing is defined and finite.** Fix a root degree $\alpha$. The block $R^\Lambda_\alpha$ is finite dimensional; a finitely generated graded projective over it is a finite direct sum of finite-dimensional indecomposable graded projectives, and $\operatorname{HOM}(P,M)$ is accordingly a finite direct sum of finite-dimensional graded Hom spaces concentrated in finitely many degrees, so $h_\alpha(P,M)$ is a well-defined element of $A$ [F2]. [F2]

1.2 **The pairing descends.** Additivity of the graded Hom pairing in $P$ and $M$, and its behaviour under split exact sequences in $P$ and short exact sequences in $M$, are those of [F1]; therefore $h_\alpha$ descends to $K_0^{\mathrm{gr}}(R^\Lambda_\alpha)\times G_0^{\mathrm{gr}}(R^\Lambda_\alpha)$ and, by the restricted-support definition of the towers, to the displayed pairing on the restricted direct sums [F1]. [F1]

1.3 **The twist formula.** Internal shift satisfies $\operatorname{Hom}_d(P\{r\},M)\cong\operatorname{Hom}_{d+r}(P,M)$, so $h_\alpha(P\{r\},M)=q^{-r}h_\alpha(P,M)$ and $h_\alpha(P,M\{s\})=q^{s}h_\alpha(P,M)$; hence $h(q^r[P],q^s[M])=q^{s-r}h([P],[M])$, the sesquilinear twist of [F1] [F1]. In particular the degree-zero part $h^0(P,S)=\dim_k\operatorname{Hom}^0(P,S)$ is the specialization at $q=1$ of a graded class pairing. [F1]

1.4 **Transport and duality conventions.** The transport isomorphisms of [F3] identify the Hecke-side groups with the KLR-side groups and carry internal shift to internal shift, so the pairing defined above transports to the Hecke side without change; the dualities $\psi$, $D_\psi$ and $\#$ are shift-reversing involutions of [F3], and the normalized representatives exist because each graded-simple shift orbit and each projective shift orbit has a unique representative fixed by the relevant duality up to the stated degree-zero normalization [F3]. No perfectness, nondegeneracy or $A$-self-duality is asserted at this point; those are the content of the integral highest weight identification named in the Definition. [F3]

2.1 **No choice.** Every ingredient is a finite-dimensional block, a finite Laurent polynomial or a transported isomorphism; the normalized representatives are selected canonically inside their orbits by the duality fixing condition, and no family of nonempty sets is selected. Hence no choice principle is used. [F2, F3, given] ∎
