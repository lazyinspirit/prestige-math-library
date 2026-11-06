---
id: def-cft-finite-dimensional-simple-lie-algebra
kind: definition
title: Finite-dimensional simple complex Lie algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action
dependency_roles:
  def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Finite semisimple Lie algebra and symmetric adjoint action
      url: https://math.mit.edu/~etingof/liegroups.pdf
      locator: Finite-dimensional Lie algebra and semisimplicity conventions used locally.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A finite-dimensional complex Lie algebra $\mathfrak g$ is **simple** if it is nonabelian and its only ideals are $0$ and $\mathfrak g$. In the local convention of def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action, a finite-dimensional Lie algebra is semisimple when it has no nonzero solvable ideal.

## Definition references

[[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]]

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$ that is simple in the stated sense.

[F1] [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]]: a solvable Lie algebra has a derived series that terminates at zero; semisimple means having no nonzero solvable ideal.

## Proof


1.1 Let $I$ be a solvable ideal of $\mathfrak g$. Simplicity gives $I=0$ or $I=\mathfrak g$. The second option is impossible: nonabelianness makes $[\mathfrak g,\mathfrak g]$ a nonzero ideal, hence equal to $\mathfrak g$; then every term of the derived series equals $\mathfrak g$, contradicting solvability. Thus $I=0$. [given, F1, algebra]

2.1 Since every solvable ideal is zero, $\mathfrak g$ is semisimple under [F1]. This implication uses finite-dimensionality and the stated complex Lie algebra convention. [given, F1, step 1.1] ∎

