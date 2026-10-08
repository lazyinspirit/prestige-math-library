---
id: thm-essential-uniqueness-of-central-decomposition
kind: theorem
title: "Essential uniqueness of the central decomposition"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-central-spectral-models-transport-and-intertwiners-disintegrate
  - thm-central-decomposition-into-factor-representations
  - def-factor-representation-and-primary-representation
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 6
axiom_use: "AC is the stated hypothesis and is inherited from the central-decomposition and transport suppliers; this theorem adds no selection of its own beyond the transport data c and u_x supplied by those results."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 6, §6.C: Theorem 6.C.8, its uniqueness assertion, and Definition 6.C.9, printed pp. 197-198."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III, §III.1.6.4 (uniqueness of the central decomposition up to measure-class isomorphism), printed p. 254."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact group and $(\pi,H)$ a separable strongly continuous unitary representation with central decompositions over standard Borel spaces $(X,\mu)$ and $(Y,\nu)$ as in [[thm-central-decomposition-into-factor-representations]]. Then the decompositions agree up to a bimeasurable base isomorphism and a null-set modification: there are conull Borel sets $X_0,Y_0$ and a bimeasurable bijection $c:X_0\to Y_0$ with $c_*(\mu|_{X_0})$ equivalent to $\nu|_{Y_0}$ such that the fibre factor representations are unitarily equivalent almost everywhere via a measurable field $x\mapsto u_x$: $$u_x\pi_x(g)u_x^{-1}=\sigma_{c(x)}(g)\qquad(g\in G,\ \mu\text{-a.e. }x).$$ In particular the measure class of the base and the measurable field of unitary equivalence classes of the fibre factor representations are invariants of $\pi$. The literal parametrisation of these data by the quasi-dual $QD(G)$ of $G$ (Bekka-de la Harpe Theorem 6.C.8) is not asserted here: it requires the Borel structure on the space of factor representations and the Borel quasi-dual map, which belong to the owner-held Glimm/smooth-dual branch of this pair.

## Facts & Assumptions

**Given:** AC; the second-countable LCH group $G$; the separable strongly continuous unitary representation $(\pi,H)$; and two central decompositions of $\pi$ with data $(X,\mu,\pi_x,U)$ and $(Y,\nu,\sigma_y,V)$.

[F1] Transport of central decompositions: for two central decompositions of the same $\pi$ there are conull Borel sets $X_0\subseteq X$, $Y_0\subseteq Y$, a bimeasurable bijection $c:X_0\to Y_0$ with $c_*(\mu|_{X_0})$ equivalent to $\nu|_{Y_0}$, and a measurable field $x\mapsto u_x:H_x\to K_{c(x)}$ of unitaries with $u_x\pi_x(g)u_x^{-1}=\sigma_{c(x)}(g)$ for every $g\in G$ and $\mu$-almost every $x$ ([[lem-central-spectral-models-transport-and-intertwiners-disintegrate]]).

[F2] A central decomposition of $\pi$ consists of a sigma-finite standard-Borel base $(X,\mathcal B,\mu)$, a measurable Hilbert field with nonzero fibres almost everywhere, a measurable field $(\pi_x)$ of strongly continuous unitary representations with $\pi_x$ factorial almost everywhere, and a unitary $U:H\to\int_X^\oplus H_x\,d\mu(x)$ satisfying $U\pi(g)U^{-1}=\int_X^\oplus\pi_x(g)\,d\mu(x)$, $UZ(\pi(G)'')U^{-1}=\mathcal D$ and the corresponding commutant identities ([[thm-central-decomposition-into-factor-representations]]).

[F3] A factor representation is one for which the centre of the generated von Neumann algebra is scalar; factoriality is preserved by unitary equivalence ([[def-factor-representation-and-primary-representation]]).

[F4] AC is the stated hypothesis, inherited by [F1] and [F2] ([[def-axiom-of-choice]]).

## Proof

**Given:** AC; the second-countable LCH group $G$; the separable strongly continuous unitary representation $(\pi,H)$; and two central decompositions of $\pi$ with data $(X,\mu,\pi_x,U)$ and $(Y,\nu,\sigma_y,V)$.

[F1] Transport of central decompositions: for two central decompositions of the same $\pi$ there are conull Borel sets $X_0\subseteq X$, $Y_0\subseteq Y$, a bimeasurable bijection $c:X_0\to Y_0$ with $c_*(\mu|_{X_0})$ equivalent to $\nu|_{Y_0}$, and a measurable field $x\mapsto u_x:H_x\to K_{c(x)}$ of unitaries with $u_x\pi_x(g)u_x^{-1}=\sigma_{c(x)}(g)$ for every $g\in G$ and $\mu$-almost every $x$ ([[lem-central-spectral-models-transport-and-intertwiners-disintegrate]]).

[F2] A central decomposition of $\pi$ consists of a sigma-finite standard-Borel base $(X,\mathcal B,\mu)$, a measurable Hilbert field with nonzero fibres almost everywhere, a measurable field $(\pi_x)$ of strongly continuous unitary representations with $\pi_x$ factorial almost everywhere, and a unitary $U:H\to\int_X^\oplus H_x\,d\mu(x)$ satisfying $U\pi(g)U^{-1}=\int_X^\oplus\pi_x(g)\,d\mu(x)$, $UZ(\pi(G)'')U^{-1}=\mathcal D$ and the corresponding commutant identities ([[thm-central-decomposition-into-factor-representations]]).

[F3] A factor representation is one for which the centre of the generated von Neumann algebra is scalar; factoriality is preserved by unitary equivalence ([[def-factor-representation-and-primary-representation]]).

[F4] AC is the stated hypothesis, inherited by [F1] and [F2] ([[def-axiom-of-choice]]).



**Proof technique:** apply the transport lemma to two central decompositions of the same representation and read off the invariance statement.

**Given:** AC; the representation $(\pi,H)$; the two central decompositions $(X,\mu,\pi_x,U)$ and $(Y,\nu,\sigma_y,V)$ in the sense of [F2].

1.1 Both $(X,\mu,\pi_x,U)$ and $(Y,\nu,\sigma_y,V)$ are central decompositions of the same $\pi$, so the hypotheses of the transport lemma [F1] are satisfied; we may apply it directly to obtain conull Borel sets $X_0\subseteq X$ and $Y_0\subseteq Y$, a bimeasurable bijection $c:X_0\to Y_0$ and a measurable field of unitaries $x\mapsto u_x:H_x\to K_{c(x)}$ with $u_x\pi_x(g)u_x^{-1}=\sigma_{c(x)}(g)$ for every $g\in G$ and almost every $x$. [F1, F2]

2.1 The measure-class statement $c_*(\mu|_{X_0})\sim\nu|_{Y_0}$ is part of [F1], so the two decompositions agree up to the bimeasurable base isomorphism $c$ and the null-set modification encoded in $X_0,Y_0$; the fibre unitary equivalence almost everywhere is step 1.1, and it preserves factoriality of the fibres by [F3]. [F1, F3, step 1.1]

2.2 Invariance: if $(X',\mu',\pi'_x,U')$ is a third central decomposition of $\pi$, applying step 1.1 to the pairs $(X,Y)$ and $(Y,X')$ gives bimeasurable base isomorphisms whose composition is again bimeasurable and preserves measure classes, and the corresponding measurable fields of unitaries compose fibrewise; hence the relation "is related to by a bimeasurable base isomorphism and a measurable field of fibre unitaries" is an equivalence relation on central decompositions of $\pi$, and the measure class of the base together with the measurable field of unitary equivalence classes of the fibre factor representations is an invariant of $\pi$. [F1, step 1.1, algebra]

3.1 The additional parametrisation of the invariants by the quasi-dual $QD(G)$, and the Borel structure on the space of factor representations required for it, are not asserted here: the transport statement proved above uses only the two standard-Borel bases and produces the base isomorphism and the measurable field of unitaries; the quasi-dual refinement remains, as recorded in the Statement, an obligation of the owner-held Glimm/smooth-dual branch. [F1, F2, step 2.2] ∎



If $\pi$ is a factor representation, both central decompositions are trivial over one-point bases and the transport map is the identity of those points. If one base has measure zero, then $H=\{0\}$, contrary to $H\neq\{0\}$ in the central-decomposition theorem, so this case does not arise; conull subsets $X_0,Y_0$ are chosen nonempty when the base is nonempty. If the two bases have different cardinalities of atoms, the bimeasurable bijection $c$ matches the atoms and preserves the measure class, which forces the corresponding atomic weights to be equivalent; no equality of measures is claimed, only equivalence of measure classes. The statement is an almost-everywhere statement with respect to $\mu$; the exceptional null set may depend on the pair of decompositions but is chosen once. Choice content is that of [F4].



Bekka-de la Harpe, Chapter 6 §6.C, Theorem 6.C.8 with its uniqueness assertion and Definition 6.C.9, printed pp. 197-198, states the uniqueness of the central decomposition over the quasi-dual $QD(G)$, including the measure-class and multiplicity invariants. The present theorem proves the base-identification form locally from the transport lemma, which itself is proved from the two-central-decompositions diagonalisation of the same centre and the base-isomorphism supplier; the quasi-dual parametrisation is deliberately not claimed, because the Borel structure on the space of factor representations and the Borel quasi-dual map require the owner-held Glimm/smooth-dual branch. Blackadar, Part III §III.1.6.4, printed p. 254, records the same uniqueness statement at the level of measure-class isomorphism.

## Boundary cases

If $\pi$ is a factor representation, both central decompositions are trivial over one-point bases and the transport map is the identity of those points. If one base has measure zero, then $H=\{0\}$, contrary to $H\neq\{0\}$ in the central-decomposition theorem, so this case does not arise; conull subsets $X_0,Y_0$ are chosen nonempty when the base is nonempty. If the two bases have different cardinalities of atoms, the bimeasurable bijection $c$ matches the atoms and preserves the measure class, which forces the corresponding atomic weights to be equivalent; no equality of measures is claimed, only equivalence of measure classes. The statement is an almost-everywhere statement with respect to $\mu$; the exceptional null set may depend on the pair of decompositions but is chosen once. Choice content is that of [F4].

## Source qualifications

Bekka-de la Harpe, Chapter 6 §6.C, Theorem 6.C.8 with its uniqueness assertion and Definition 6.C.9, printed pp. 197-198, states the uniqueness of the central decomposition over the quasi-dual $QD(G)$, including the measure-class and multiplicity invariants. The present theorem proves the base-identification form locally from the transport lemma, which itself is proved from the two-central-decompositions diagonalisation of the same centre and the base-isomorphism supplier; the quasi-dual parametrisation is deliberately not claimed, because the Borel structure on the space of factor representations and the Borel quasi-dual map require the owner-held Glimm/smooth-dual branch. Blackadar, Part III §III.1.6.4, printed p. 254, records the same uniqueness statement at the level of measure-class isomorphism.
