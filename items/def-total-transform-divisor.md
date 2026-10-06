---
id: def-total-transform-divisor
kind: definition
title: "Total transform of a Cartier divisor"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-blowup-scheme-along-ideal
  - def-cartier-divisor
  - def-pullback-cartier-divisor
  - lem-pullback-cartier-divisor-line-bundle
  - def-strict-transform-closed-subscheme
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - def-effective-cartier-divisor
justified_by:
  - lem-total-transform-strict-plus-exceptional-multiplicity
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.11 (pullback of effective Cartier divisors) and Definition 31.34.1"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.2 proper transform; 19.4.3 computation of total and proper transforms, pp. 389-390"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-2.md"
      - "research/frontier-38-owner-30-alpha-batch-2-5a.md"
      - "research/frontier-38-owner-30-step5-hash-2-post.json"
    reviewed_raw_sha256: "8575093042026f8022a4a4629fc41a6963389e1aa2c34a0dbcd7dc9838dfadca"
    content_sha256: "4a4a2d4c5888ada0cd5a66236829f3aed300f25c78b223c5caad975b236cd1b9"
  precheck: n/a
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the blowup construction, which is
a relative Proj. Let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of a scheme $X$
along a quasi-coherent ideal sheaf $\mathcal I$ of finite type
([[def-blowup-scheme-along-ideal]]), and let $D$ be a Cartier divisor on $X$
([[def-cartier-divisor]]) whose pullback $\pi^*D$ along $\pi$ is defined
([[def-pullback-cartier-divisor]]). The **total transform** of $D$ under
$\pi$ is the pullback Cartier divisor

$$\pi^*D .$$

Its associated invertible sheaf is the pullback of the invertible sheaf of $D$:
there is a canonical isomorphism
$\mathcal O_{\operatorname{Bl}}(\pi^*D)\cong\pi^*\mathcal O_X(D)$ of
$\mathcal O_{\operatorname{Bl}}$-modules
([[lem-pullback-cartier-divisor-line-bundle]]).

The pullback is defined for every effective Cartier divisor. Indeed, on a
standard chart $A[I/a]\subseteq A_a$, a nonzerodivisor $f\in A$ remains a
nonzerodivisor after localization and on this subalgebra. Thus every effective
local equation pulls back to a regular equation, without a dominance
assumption. For integral $X$ and nonzero $\mathcal I$, the chart embeddings
in the function field similarly pull back nonzero rational local equations,
so every Cartier divisor has a pullback. If $\mathcal I=0$, the blowup is empty
and these assertions hold vacuously.

For a reduced curve $D$ on a regular surface, blowing up a closed point with
two-dimensional regular local ring gives the formula
$$\pi^*D=D'+mE,$$
where $m$ is the order of its local equation at that point. This formula is
proved in [[lem-total-transform-strict-plus-exceptional-multiplicity]]; it is
not part of the definition for arbitrary centers. For example, on
$\mathbb A^2_k$, the blowup of $(x^2)$ is the identity, its exceptional Cartier
divisor is $2V(x)$, and the strict transform of $V(x)$ is empty. No integer
$m$ expresses $V(x)$ as $m\cdot2V(x)$.
