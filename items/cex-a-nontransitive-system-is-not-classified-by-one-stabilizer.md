---
id: cex-a-nontransitive-system-is-not-classified-by-one-stabilizer
kind: counterexample
title: A nontransitive system with two orbits is not classified by one stabilizer
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: counterexample
deps:
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-group-action
  - def-projection-valued-measure
  - def-equivariant-map-of-group-actions
  - def-coset
  - def-strongly-continuous-unitary-representation
  - def-standard-borel-space
  - def-polish-space
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement refuted

False claim: every system of imprimitivity for a group $G$ is classified, up to
unitary equivalence, by a single closed subgroup $H\le G$ and a strongly
continuous unitary representation of $H$; that is, Mackey's imprimitivity
classification needs no transitivity or ergodicity hypothesis.

## Facts & Assumptions

**Given:** the discrete finite group $G=\mathbb Z/2$, the three-point set $X=\{a,b,c\}$, the permutation action with $s\cdot a=a$, $s\cdot b=c$, and the unitary $U(s)$ acting as the identity on $\mathbb C\delta_a$ and as the swap $\delta_b\leftrightarrow\delta_c$ on $\mathbb C\delta_b\oplus\mathbb C\delta_c$.

[F1] A system of imprimitivity is a pair $(U,P)$ with $U$ a strongly continuous unitary representation and $P$ a PVM satisfying $U_gP(E)U_g^{-1}=P(gE)$; it is ergodic when every invariant $P(E)$ is $0$ or $I$, and transitive when its base is equivariantly identified with some homogeneous space $G/H$ ([[def-system-of-imprimitivity]], [[def-transitive-system-of-imprimitivity]], [[def-strongly-continuous-unitary-representation]], [[def-projection-valued-measure]]).

[F2] For a finite group, every homogeneous space $G/H$ is the set of left cosets of a subgroup, so $|\mathbb Z/2/H|\in\{1,2\}$; an equivariant isomorphism of $G$-sets preserves orbit cardinalities and the number of orbits ([[def-coset]], [[def-group-action]], [[def-equivariant-map-of-group-actions]]).

[F3] The finite set $X$ with the discrete metric is Polish (every Cauchy sequence is eventually constant and the full set is dense), and its power-set $\sigma$-algebra is standard Borel ([[def-polish-space]], [[def-standard-borel-space]]).

## Counterexample

The counterexample is the following finite model. Let $G=\mathbb Z/2=\{e,s\}$ with the discrete topology act on $X=\{a,b,c\}$ by $s\cdot a=a$, $s\cdot b=c$, $s\cdot c=b$, let $\mathcal H=\mathbb C^3$ be the direct sum of the trivial representation on $\mathbb C\delta_a$ and the regular representation on $\mathbb C\delta_b\oplus\mathbb C\delta_c$, and let $P$ be the projection-valued measure with $P(\{a\}),P(\{b\}),P(\{c\})$ the three coordinate projections. Then $(U,P)$ is a system of imprimitivity on the standard Borel space $X$; the two orbits are $\{a\}$ and $\{b,c\}$, the projections $P(\{a\})$ and $P(\{b,c\})$ are nontrivial and invariant, and the system is not transitive (nor ergodic). No closed subgroup $H\le G$ with a strongly continuous unitary representation $\sigma$ classifies it: every homogeneous space $G/H$ has one or two points, so it cannot be equivariantly identified with the three-point base, and the theorem correctly decomposes the system as the direct sum of the transitive systems on the two orbits.

**Proof technique:** counterexample.

**Given:** the action and the pair $(U,P)$ described above.

1.1 The operator $U(s)$ is a unitary swap with $U(s)^2=I$, so it defines a unitary representation of the discrete group $G$; every orbit map from this discrete group is continuous. Covariance: $U(s)$ fixes $\delta_a$ and swaps $\delta_b,\delta_c$, so $U(s)P(\{a\})U(s)^{-1}=P(\{a\})=P(s\cdot\{a\})$, $U(s)P(\{b\})U(s)^{-1}=P(\{c\})=P(s\cdot\{b\})$, and $U(s)P(\{c\})U(s)^{-1}=P(\{b\})=P(s\cdot\{c\})$; for the identity the identity is trivial, and covariance extends to all subsets since the three singletons generate the power set and both sides are PVM-valued. Hence $(U,P)$ is a system of imprimitivity; it is defined on the standard Borel three-point space of [F3]. [F1, F3, algebra]

2.1 Invariant projections and non-ergodicity: $P(\{a\})$ and $P(\{b,c\})=P(\{b\})+P(\{c\})$ are nonzero and different from $I$, and both are invariant under $U$, since the orbits are $\{a\}$ and $\{b,c\}$; thus the system is not ergodic. [step 1.1]

3.1 Nontransitivity: the orbits of the action are the singleton $\{a\}$ and the two-point set $\{b,c\}$, while a homogeneous space of $\mathbb Z/2$ has one or two points by [F2]; a transitive system on a homogeneous space is concentrated on a single orbit, so the three-point base with two orbits cannot be equivariantly identified with any $G/H$. Hence the system is not transitive. [F1, F2, step 2.1]

3.2 Correct decomposition: $P(\{a\})$ and $P(\{b,c\})$ are complementary invariant projections, and on their ranges the system restricts to the transitive system on the single orbit $\{a\}$ (the one-point homogeneous space $G/G$ with the trivial representation) and to the transitive system on $\{b,c\}$ (the two-point homogeneous space $G/\{e\}$ with the regular representation), respectively. So $(U,P)$ is the direct sum of the two transitive systems, and the failure above is exactly the failure of a direct sum of transitive systems to be classified by one subgroup. [step 2.1, F1]

4.1 Non-classification by one subgroup: the classification data $(H,\sigma)$ determine a system whose base is the homogeneous space $G/H$, of one or two points by [F2], and whose imprimitivity measure is concentrated on the orbits of that base; no such data can reproduce the three-point base with two orbits, since equivariant Borel isomorphisms preserve cardinalities and orbit counts. Therefore the nontransitive system is not classified by a single closed subgroup and a representation of it. [F2, step 3.1]

5.1 The explicit finite computation therefore exhibits a system of imprimitivity that is neither transitive nor ergodic and is not classified by one stabilizer subgroup; transitivity (or ergodicity) is essential to the one-subgroup form of Mackey's imprimitivity theorem. [step 3.1, step 4.1, step 3.2] ∎ 