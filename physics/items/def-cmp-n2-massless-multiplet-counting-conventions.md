---
id: def-cmp-n2-massless-multiplet-counting-conventions
kind: definition
title: "Massless four-dimensional $N=2$ multiplet counting conventions"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 7
deps:
  - def-supergravity-conventions-and-normalizations
  - post-four-dimensional-n2-matter-coupled-supergravity
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-four-dimensional-n2-matter-coupled-supergravity: formulation-prerequisite
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "On-shell massless multiplet bookkeeping for the two-derivative four-dimensional N=2 framework adopted in this pair. It counts degrees of freedom and makes no claim about a specific compactification."
empirical_premises: []
sources:
  references:
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§2.3, PDF pp. 10–11 (two vector-multiplet scalars and four hypermultiplet scalars); §3.3.1, PDF p. 35 (the extra U(1) graviphoton belongs to the supergravity multiplet)."
---

## Definition

For the adopted two-derivative four-dimensional $N=2$ on-shell framework, fix a four-dimensional Minkowski vacuum preserving all eight real supercharges and a linearized sector consisting of one massless gravity multiplet, $n_V$ massless vector multiplets, and $n_H$ massless hypermultiplets. Here a Minkowski vacuum means a solution of the adopted field equations on $\mathbb R^4$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$, constant scalars, and zero gauge field strengths and fermion fields; preservation of all eight supercharges means that every constant supersymmetry parameter in the adopted eight-real-dimensional parameter space gives zero fermion variations on this background. The linearized sector consists of the stipulated massless multiplet solutions of the field equations to first order about this vacuum. Here $n_V,n_H$ are nonnegative integers counting these massless representations about this vacuum, after any mass generation; they need not equal the matter-field counts of a gauged action before expansion about the vacuum. Count each vector multiplet as one massless vector and one complex scalar (two real scalar coordinates), each hypermultiplet as four real scalar coordinates, and the gravity multiplet as containing one graviphoton. The graviphoton belongs to the gravity multiplet and is excluded from the number $n_V$ of vector multiplets. These are the component-counting conventions used in the conditional reductions on this A page.

## Facts & Assumptions

**Given:** The adopted two-derivative four-dimensional $N=2$ matter-coupled framework, with the specified unbroken Minkowski vacuum and one massless gravity multiplet, $n_V$ massless vector multiplets, and $n_H$ massless hypermultiplets in its linearized sector. This is a supplied physical framework, not a theorem that any compactification realizes it.

[F1] The current carrier [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] states: “Adopt the two-derivative four-dimensional $N=2$ component framework with one gravity multiplet, $n_V$ vector multiplets whose scalar manifold is special Kähler, and $n_H$ hypermultiplets whose scalar manifold is quaternionic-Kähler; fix a selected electric frame and the local symplectic section $L^\Lambda$ and its covariant derivatives $f_i^\Lambda$.” Its current Step 1 record is escalated; the recorded reason cites an absent conventions carrier although the live conventions carrier is now present and ready. The exact component framework is used conditionally, and the escalation is not overwritten.

[A1] Assume the unbroken Minkowski vacuum and massless-sector decomposition specified in the Definition; the gauging permitted by [F1] alone does not establish them. Use the standard massless $N=2$ component convention: a vector multiplet has one vector and a complex scalar, a hypermultiplet has four real scalar coordinates, and the gravity multiplet has one graviphoton.

## Proof

**Proof technique:** direct dimension bookkeeping.

**Given:** The adopted four-dimensional $N=2$ framework, the specified unbroken Minkowski vacuum and massless-sector decomposition, and the stated on-shell component-counting convention.

1.1 By [A1], each stipulated massless vector multiplet contributes one complex scalar, hence two real scalar components, and each stipulated massless hypermultiplet contributes four real scalar components. Taking the direct sum over these multiplets gives $2n_V$ and $4n_H$ real scalar components, respectively. Here $n_V,n_H$ are the massless-representation counts of the Definition, not the action-field counts denoted by the same symbols in [F1]. This is linearized component bookkeeping; it neither identifies this sector with the full ambient scalar manifold of the action nor asserts that its massless scalar fluctuations integrate to nonlinear flat directions or a moduli space. [A1, given, algebra]

2.1 By [A1], the gravity multiplet contributes one graviphoton. Together with the $n_V$ massless vector representations stipulated in [A1], this gives $n_V+1$ massless vector fields in the selected linearized sector when the gravity multiplet is included, while the reported vector-multiplet number remains $n_V$. [A1, given, step 1.1] ∎
