---
id: lem-author-dcdf962edbda-constant-sections
kind: lemma
title: Constant integer coefficients and exact derived evaluation
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - def-derived-sections-on-sites
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. On the preceding site let $\underline{\mathbb Z}_{\mathrm{cdh}}=a_{\mathrm{cdh}}(U\mapsto\mathbb Z)$ be the ordinary abelian sheafification of the constant presheaf, placed in degree zero. Define $R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z)$ to be derived evaluation of this sheaf at $X$ on that specified site. Its cohomology is denoted $H^i_{\mathrm{cdh},F}(X,\mathbb Z)$. It is not the constant complex $\mathbb Z$ evaluated without sheafification. All negative cohomology groups of this derived value are zero.

## Facts & Assumptions

[A1] The Axiom of Choice and fixed compatible site and universe bounds are retained when applying [[def-derived-sections-on-sites]]: step 1.1 uses its K-injective derived-evaluation construction, and step 2.1 uses its nonnegative injective-resolution computation. [[math:def-axiom-of-choice]]

**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] Under [A1], [[def-derived-sections-on-sites]] applies to the explicitly chosen small site; [[lem-author-dcdf962edbda-qcqs-site]] supplies this site.

## Proof
1.1 The preceding small site permits ordinary abelian sheafification, so the displayed sheaf and its degree-zero placement are defined. Apply the general-site construction of [[def-derived-sections-on-sites]] with this site and coefficient sheaf. Its completed supplier gives a K-injective derived evaluation, independent of choices. [A1, F1, construct]

2.1 The same supplier computes the value of an ordinary sheaf by a nonnegative injective resolution. Evaluating that resolution has zero terms in negative degrees, hence zero cohomology there. This proves the negative-degree statement. The use of a resolved sheaf rather than the raw constant presheaf is essential to the definition and does not require a site comparison. [A1, F1, step 1.1] ∎
