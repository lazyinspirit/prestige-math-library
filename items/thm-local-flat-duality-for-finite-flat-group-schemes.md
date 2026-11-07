---
id: thm-local-flat-duality-for-finite-flat-group-schemes
kind: theorem
title: "Local flat duality for finite flat group schemes over a Henselian DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - def-discrete-valuation-ring
  - def-finite-field-and-its-order
  - def-henselian-pair-and-henselian-local-ring
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-local-brauer-invariant-for-finite-residue-local-field
justified_by: []
proof_strategy: direct
axiom_use: "The target Statement remains unqualified. The current local Brauer/class-formation source route assumes AC and DC; the local invariant proof is incomplete and the downstream class-formation theorem cannot serve as a noncircular supplier."
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §1, Lemma 1.1, Theorem 1.3, and Corollary 1.4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Takashi Suzuki, Duality for Local Fields and Sheaves on the Category of Fields, Theorem A and §2.7"
      url: "https://arxiv.org/pdf/1310.4941"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §5"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Statement

Let $R$ be a Henselian discrete valuation ring with finite residue field, let
$K=\operatorname{Frac}(R)$ have characteristic zero, and let $G$ be a
commutative finite flat group scheme over $R$ with Cartier dual $G^D$. For
every integer $r$, the pairing induced by evaluation
$$H^r(R,G^D)\times H_x^{3-r}(R,G)\longrightarrow H_x^3(R,\mathbb G_m)
\xrightarrow{\operatorname{inv}_K}\mathbb Q/\mathbb Z$$
is a perfect pairing of finite groups, meaning each factor maps isomorphically
to the group of homomorphisms from the other factor to $\mathbb Q/\mathbb Z$,
where $x$ is the closed point of
$\operatorname{Spec}R$ and the local support groups use the cone convention
specified in the Definition.

## Statement references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[[def-discrete-valuation-ring]]

[[def-finite-field-and-its-order]]

[[def-henselian-pair-and-henselian-local-ring]]

[[thm-local-brauer-invariant-for-finite-residue-local-field]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §1](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Suzuki, Theorem A and §2.7](https://arxiv.org/pdf/1310.4941)

[Demarche–Harari, §5](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** The Henselian DVR $R$, its finite residue field, the characteristic-zero
fraction field $K$, and $G$ as in the Statement.

[F1] [[def-finite-flat-group-scheme-and-cartier-dual]]: $G^D$ is finite flat
and evaluation gives $G^D\times G\to\mathbb G_m$.

[F2] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]:
$H_x^i(R,-)$ is the cohomology of the cone of restriction from $R$ to $K$.

[F3] [[def-discrete-valuation-ring]], [[def-finite-field-and-its-order]], and
[[def-henselian-pair-and-henselian-local-ring]] define the valuation-ring,
residue-field, and
Henselian hypotheses in the Statement.

[F4] [[thm-local-brauer-invariant-for-finite-residue-local-field]] states that
for a complete discretely valued nonarchimedean field with finite residue field,
the normalized invariant identifies its Brauer group with $\mathbb Q/\mathbb Z$.
Its present proof is escalated; the supplier statement does not cover every
noncomplete Henselian fraction field occurring here.

[L1] Milne, Chapter III, Lemma 1.1: for finite flat $G$ over $R$,
$H^0(R,G)\to H^0(K,G)$ is bijective, $H^1(R,G)\to H^1(K,G)$ is injective,
$H^i(R,G)=0$ for $i\ge2$, and
$H_x^2(R,G)=H^1(K,G)/H^1(R,G)$,
$H_x^3(R,G)=H^2(K,G)$, with $H_x^i(R,G)=0$ for $i\notin\{2,3\}$.
[Milne, Chapter III, Lemma 1.1](https://www.jmilne.org/math/Books/ADTnot.pdf)

[L2] Milne, Chapter I, Example 1.10 and Corollary 2.3: for a finite Galois
module $M$ over a characteristic-zero local field, cup product with its
character dual gives perfect local Tate pairings in degrees $(0,2)$ and
$(1,1)$, with values in $\mathbb Q/\mathbb Z$.
[Milne, Chapter I, Example 1.10 and Corollary 2.3](https://www.jmilne.org/math/Books/ADTnot.pdf)

[A1] The source proof also needs the trace and generic-fibre pairings over the
fraction field of an arbitrary Henselian, possibly noncomplete, $R$, together
with their comparison to the completed local field. The current local Brauer
supplier proves neither that comparison nor the missing local-unit and relative
Brauer-order arguments.

[A2] [[def-axiom-of-choice]] and [[def-dependent-choice]] are assumed only by
the current local class-formation proof route. Its carrier
[[thm-local-class-formation-for-finite-residue-local-field]] is downstream of
the local Brauer invariant and cannot close the local invariant proof without a
cycle; the unqualified Statement here is not proved in a choice-free branch.

## Proof

**Proof technique:** reduce the support pairing to local Galois duality and
the integral annihilator sequence.

**Given:** [F1]–[F4], [L1]–[L2], and unresolved proof-route inputs [A1]–[A2].

1.1 Evaluation in [F1] and cup product define the pairing with target
$H_x^3(R,\mathbb G_m)$. The trace identifies that target with
$\mathbb Q/\mathbb Z$ for complete $K$ by [F3]; for the stated Henselian
generality this step uses [A1]. [F1, F2, F4, A1, A2]

1.2 By [L1], only support degrees $2$ and $3$ can be nonzero, and they are
respectively $H^1(K,G)/H^1(R,G)$ and $H^2(K,G)$. The closed-point groups in
degrees $\ge2$ vanish. Thus the degree-$0$ pairing reduces to
$H^0(K,G^D)\times H^2(K,G)$ and degree $1$ reduces to the pairing of
$H^1(R,G^D)$ with $H^1(K,G)/H^1(R,G)$. [F2, L1, step 1.1]

2.1 The local Tate pairing [L2] proves perfectness in degree $0$. In degree
$1$, integral classes annihilate one another because their cup product extends
over $R$ and the unramified Brauer group of a Henselian DVR with finite residue
field is zero; local Tate duality then identifies $H^1(R,G^D)$ with the full
annihilator of $H^1(R,G)$ in $H^1(K,G^D)$. Quotienting gives the asserted
perfect pairing. This use over a noncomplete Henselian fraction field remains
conditional on [A1]. [L1, L2, A1, A2, step 1.2, algebra]

2.2 In degrees $r=2$ and $r=3$, one side is zero by [L1] and the opposite
support degree is zero; all other degrees vanish by the same two vanishing
statements. Subject to [A1], the pairings in every degree are therefore
perfect. [L1, A1, step 2.1, step 1.2, algebra] ∎
