---
id: prop-qftx-hall-spectrum-invariance
kind: proposition
title: "Hall wall crossing preserves the completed spectrum generators"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-qftx-hall-spectrum-generator
  - thm-finite-quiver-hall-wall-crossing
dependency_roles:
  def-qftx-hall-spectrum-generator: mathematical-premise
  thm-finite-quiver-hall-wall-crossing: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants"
      url: "https://arxiv.org/pdf/1611.03696"
      locator: "Sections 4.4–4.5, especially Lemma 4.2: the HN Hall identity and its stability-independent ordered product."
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli"
      url: "https://arxiv.org/pdf/math/0204059"
      locator: "Sections 2 and 4: quiver HN filtrations and their Hall-algebra factorization."
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

Let $Q$ be any finite acyclic quiver over $k=\mathbb F_q$, with no
finite-representation-type restriction, and let $Z_-$ and $Z_+$ assign a charge in
$\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ to every vertex. Use the
subobject-first dimension completion and the Euler and skew integrations
defined on this A page. Then
$$P_{Z_-}^E=P_{Z_+}^E,\qquad P_{Z_-}^{\mathrm{sk}}=P_{Z_+}^{\mathrm{sk}}.$$
Each is a unit with constant term $1$ in its own completed quantum torus.
Consequently conjugation by the two generators defines the same continuous
automorphism on each corresponding completed torus. The products and
automorphisms are formal in the dimension completion. This is a finite-field
Hall identity only; it makes no physical state-counting identification.

## Statement references

[[def-qftx-hall-spectrum-generator]]

[[thm-finite-quiver-hall-wall-crossing]]

## Facts & Assumptions

**Given:** A finite acyclic quiver $Q$, the finite field $k=\mathbb F_q$,
and two assignments $Z_-,Z_+$ whose vertex charges lie in $\mathbb H$.

[F1] [[thm-finite-quiver-hall-wall-crossing]]: for every finite acyclic
$Q$ over $\mathbb F_q$ and every such pair of charge assignments, the
subobject-first dimension-completed Hall product factors into all
semistable phase factors in decreasing order. Applying either continuous
Euler integration $I$ or skew integration $J$ gives equal completed ordered
products for $Z_-$ and $Z_+$. Both integrated products have constant term
$1$ and are units; the result includes wild quivers and strictly semistable
objects and uses no Calabi–Yau, orientation-data, or analytic-convergence
hypothesis.

[F2] [[def-qftx-hall-spectrum-generator]]: $P_Z^E$ and
$P_Z^{\mathrm{sk}}$ are precisely those decreasing-phase ordered products
of $I(S_Z(\phi))$ and $J(S_Z(\phi))$ in the completed Euler and skew tori.

## Proof

**Given:** The quiver, field, charge assignments, and conventions in the
Statement.

1.1 For each of $Z_-$ and $Z_+$ the hypotheses of [F1] hold. The
decreasing-phase Hall factors in [F1] are the $S_Z(\phi)$ of [F2], and its
continuous integrations are the maps used in [F2]. Therefore the two
Euler-integrated products are equal and the two skew-integrated products are
equal in their respective completions. By [F2] these are exactly
$P_{Z_-}^E=P_{Z_+}^E$ and
$P_{Z_-}^{\mathrm{sk}}=P_{Z_+}^{\mathrm{sk}}$. [F1, F2, given, algebra]

2.1 Let $P$ be either generator and write $P=1+G$. Every term of $G$ has
positive total dimension, so for each total-dimension bound $D$ only the
finitely many powers $G^n$ with $n\le D$ contribute to
$\sum_{n\ge0}(-G)^n$ in degrees at most $D$. The finite geometric identity
in each such truncation gives both $P\sum_{n\ge0}(-G)^n=1$ and
$\sum_{n\ge0}(-G)^nP=1$ degree by degree. Hence $P$ is a unit. Multiplication
is continuous in the stated completion, so $a\mapsto PaP^{-1}$ is a
continuous automorphism with inverse $a\mapsto P^{-1}aP$. The equal
generators from step 1.1 therefore induce equal automorphisms. [F1, F2,
step 1.1, algebra, construct] ∎
