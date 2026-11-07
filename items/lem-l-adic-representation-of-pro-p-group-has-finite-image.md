---
id: lem-l-adic-representation-of-pro-p-group-has-finite-image
kind: lemma
title: "Continuous l-adic representations of pro-p groups have finite image"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-pro-p-group
  - def-p-adic-integers-as-compatible-residue-classes
  - thm-lagrange
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free finite-coordinate and finite-congruence argument; no compactness or infinite family of choices."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, Trace functions over finite fields and applications, §3.1"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: pending
---
## Statement

Let $P$ be a profinite pro-$p$ group, let $\ell\ne p$ be primes, and let $V$ be a finite-dimensional $\mathbb Q_\ell$-vector space. Every continuous representation $\rho:P\to\operatorname{GL}(V)$ has finite image.

## Statement references

[[def-pro-p-group|Pro-p groups as actual inverse limits of finite p-groups]]

[[def-p-adic-integers-as-compatible-residue-classes|The l-adic integers and their finite residue quotients]]

[Fouvry–Kowalski–Michel, §3.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The group $P$, distinct primes $p,\ell$, the finite-dimensional space $V$, and the continuous representation in the Statement.

[F1] A pro-$p$ group is topologically isomorphic to an actual inverse limit of finite $p$-groups, with the subspace topology from their product. [[def-pro-p-group]]

[F2] The ring $\mathbb Z_\ell$ consists of compatible residues modulo $\ell^m$. Its residue quotients are finite, and $\bigcap_m\ell^m\mathbb Z_\ell=0$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F3] A subgroup of a finite group has order dividing the ambient order. The image of a homomorphism of finite groups also has order dividing the source order, by applying the same coset count to its kernel. [[thm-lagrange]]

## Proof

1.1 If $V=0$, the image is the identity group. Otherwise fix one finite basis and identify $\operatorname{GL}(V)$ with $\operatorname{GL}_r(\mathbb Q_\ell)$. Write $P\subseteq\prod_i P_i$ using the inverse-limit presentation [F1], and let $\pi_i$ be its coordinate maps. For any finite coordinate set $J$, put $N_J=\bigcap_{i\in J}\ker\pi_i$. These open normal subgroups form a neighborhood basis at the identity. The quotient $P/N_J$ is isomorphic to the image in $\prod_{i\in J}P_i$, so is a finite $p$-group by [F3]. This uses the actual coordinate image and does not require coordinate projections to be surjective. [F1, F3, given, choose, algebra]

2.1 For $m\ge1$ put $U_m=1+\ell^mM_r(\mathbb Z_\ell)$. These are open subgroups of $\operatorname{GL}_r(\mathbb Q_\ell)$: products preserve the congruence, and the inverse of $1+X$ for $X\in\ell^mM_r(\mathbb Z_\ell)$ is given by $\sum_{j\ge0}(-X)^j$. This sum is defined canonically residue by residue, since only finitely many terms matter modulo each $\ell^a$. The groups $U_m$ are normal in $U_1$, and their intersection is the identity by [F2]. [F2, given, construct, algebra]

2.2 Reduction modulo $\ell^m$ identifies $U_1/U_m$ with a subgroup of a finite matrix group. For $j\ge1$, the map $1+\ell^jA\mapsto A\bmod\ell$ identifies $U_j/U_{j+1}$ with the additive group $M_r(\mathbb F_\ell)$: multiplication is additive modulo $\ell^{j+1}$ because $2j\ge j+1$, and every residue matrix has an integer-matrix lift. Thus each successive quotient has order $\ell^{r^2}$, and $U_1/U_m$ is a finite $\ell$-group, including the trivial quotient for $m=1$. [F2, step 2.1, algebra]

3.1 Continuity makes $\rho^{-1}(U_1)$ an identity neighborhood in $P$. By step 1.1, there is one finite $J$ with $N:=N_J\subseteq\rho^{-1}(U_1)$. Thus $P/N$ is a finite $p$-group and $\rho(N)\subseteq U_1$. No compactness or stable lattice is needed. [given, step 1.1, step 2.1]

3.2 Fix an arbitrary $m\ge1$ and compose $\rho|_N$ with reduction to $U_1/U_m$. Its kernel is open in $N$. The subspace topology and the coordinate basis give a finite $J'$ with $N\cap N_{J'}$ contained in that kernel. The quotient $N/(N\cap N_{J'})$ is a subgroup of the finite $p$-group $P/N_{J'}$. Consequently the image of $N$ in $U_1/U_m$ is both a finite $p$-group and a subgroup of a finite $\ell$-group. Its order divides powers of the distinct primes $p$ and $\ell$, so it is $1$. Hence $\rho(N)\subseteq U_m$. The argument fixes one arbitrary $m$; it chooses no family of coordinate witnesses indexed by all $m$. [F3, step 1.1, step 2.2, step 3.1, algebra]

4.1 Since step 3.2 holds for every $m$, step 2.1 gives $\rho(N)\subseteq\bigcap_mU_m=\{1\}$. Thus $\rho$ factors through the finite group $P/N$ of step 3.1, and its image is finite. [step 2.1, step 3.1, step 3.2, algebra] ∎

## Axiom use

No choice principle is used. One finite basis and finitely many coordinate witnesses are used at a time. The proof uses the supplied inverse-limit presentation and finite congruence quotients; it does not invoke compactness of an arbitrary inverse limit, choose representatives at infinitely many levels, or average a lattice.
