---
id: def-geometric-p-adic-galois-representation
kind: definition
title: Geometric p-adic Galois representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-continuous-finite-coefficient-l-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-de-rham-p-adic-galois-representation
  - def-p-adic-period-rings
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  The current global and local place conventions require AC and Countable Choice.
  The transitive dependency closure of the unramified-place supplier also lists
  Dependent Choice, but its current body does not identify a use; no choice-free
  branch is asserted.
sources:
  references:
    - title: "James Newton, Modularity of Galois Representations and Langlands Functoriality, §2.4"
      url: "https://people.maths.ox.ac.uk/newton/iisc.pdf"
    - title: "Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 6, §6.1"
      url: "https://math.stanford.edu/~conrad/papers/notes.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice and Countable Choice for the global and local
Galois-group conventions. Let $K$ be a number field, let $p$ be a rational
prime, let $E/\mathbb Q_p$ be a finite extension, let $V$ be a finite-dimensional
$E$-vector space, and let $\rho:G_K\to\operatorname{GL}_E(V)$ be continuous.
Choose a separable closure $K^{\mathrm{sep}}/K$ and, for each finite place $v$
of $K$, a prolongation $\bar v$ to $K^{\mathrm{sep}}$. Its decomposition group
$D_{\bar v}$ is the subgroup of $G_K$ preserving $\bar v$, and its inertia
group $I_{\bar v}$ is the kernel of the action of $D_{\bar v}$ on the separable
closure of the residue field. For $v\mid p$, identify $D_{\bar v}$ with
$G_{K_v}$ by completion and regard $V$ as a $\mathbb Q_p$-vector space. Write
$$D_{\mathrm{dR},K_v}(V):=(B_{\mathrm{dR},K_v}\otimes_{\mathbb Q_p}V)^{G_{K_v}},$$
where $B_{\mathrm{dR},K_v}$ is the de Rham period field of $K_v$. The local
representation is **de Rham** when
$$\dim_{K_v}D_{\mathrm{dR},K_v}(V)=\dim_{\mathbb Q_p}V=[E:\mathbb Q_p]\dim_E V.$$ 
The global representation $\rho$ is **geometric** if there is a finite set
$S$ of finite places of $K$ such that $\rho(I_{\bar v})=\{1\}$ for every
$v\notin S$ and the restriction of $V$ to $G_{K_v}$ is de Rham for every
$v\mid p$. The condition is independent of the chosen prolongations because
their inertia groups are conjugate in $G_K$.

## Definition references

[[def-continuous-finite-coefficient-l-adic-galois-representation]]

[[def-unramified-galois-representation-at-a-place]]

[[def-de-rham-p-adic-galois-representation]]

[James Newton, *Modularity of Galois Representations and Langlands Functoriality*, §2.4](https://people.maths.ox.ac.uk/newton/iisc.pdf)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 6, §6.1](https://math.stanford.edu/~conrad/papers/notes.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice, a number field $K$, a prime $p$, a finite
extension $E/\mathbb Q_p$, a finite-dimensional $E$-space $V$, a continuous
representation $\rho$, and the chosen separable closure and place prolongations.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the
current global absolute-Galois-group and stable-lattice conventions.

[A2] [[def-countable-choice]]: Countable Choice is required by the current
local-place completion convention.

[F1] [[def-continuous-finite-coefficient-l-adic-galois-representation]]: a
continuous representation over a finite extension of $\mathbb Q_p$ is a
continuous homomorphism into the corresponding finite-dimensional linear
automorphism group.

[F2] [[def-unramified-galois-representation-at-a-place]]: inertia at a finite
place is the kernel of the residue-field action; unramifiedness means that
inertia acts trivially. Its current body cites the supplied decomposition-group
to completion identification and conjugacy of prolongations, together with
the local residue exact sequence. This supplies the place interface only;
the period-ring construction and comparison obligations remain held.

[F3] [[def-de-rham-p-adic-galois-representation]]: for a finite extension
$K_v/\mathbb Q_p$, the de Rham period space is
$(B_{\mathrm{dR},K_v}\otimes_{\mathbb Q_p}V)^{G_{K_v}}$, and equality of its
$K_v$-dimension with $\dim_{\mathbb Q_p}V$ defines the de Rham condition. Its
current supplier records unresolved construction and comparison obligations
for the period rings.

[L1] [[def-p-adic-period-rings]]: the current period-ring carrier defines
$B_{\mathrm{dR}}$ but records unresolved construction, well-definedness, and
comparison obligations. No proof of those constructions is supplied here.

[L2] [[def-dependent-choice]]: the unramified-place supplier declares this
axiom in its dependency list, but its Statement and Facts & Assumptions identify
AC and Countable Choice only. The exact DC use remains unresolved; this item
does not assert that DC is mathematically necessary.
