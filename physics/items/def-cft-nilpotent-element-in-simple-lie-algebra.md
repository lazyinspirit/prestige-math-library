---
id: def-cft-nilpotent-element-in-simple-lie-algebra
kind: definition
title: Nilpotent element in a finite-dimensional Lie algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Appendix D.3, the adjoint nilpotence convention for nilpotent elements and triples.
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

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra and $f\in\mathfrak g$. The element $f$ is **nilpotent** if its adjoint endomorphism $\operatorname{ad}f:\mathfrak g\to\mathfrak g$, $x\mapsto[f,x]$, is nilpotent; explicitly, $(\operatorname{ad}f)^N=0$ for some integer $N\ge1$. This definition concerns the adjoint representation and does not assert nilpotence in every representation.

## Facts & Assumptions

**Given:** $\mathfrak g$ and its Lie bracket as in [[def-cft-finite-dimensional-simple-lie-algebra]], and an element $f\in\mathfrak g$.

[F1] [[def-cft-finite-dimensional-simple-lie-algebra]]: $\mathfrak g$ is a finite-dimensional complex Lie algebra, so $x\mapsto[f,x]$ is a linear endomorphism of $\mathfrak g$.

## Proof


1.1 Bilinearity of the Lie bracket makes $x\mapsto[f,x]$ linear, and closure of the bracket in $\mathfrak g$ makes its codomain $\mathfrak g$. Thus the iterates $(\operatorname{ad}f)^N$ are defined endomorphisms. [given, F1, algebra]

2.1 By definition, the displayed vanishing condition is exactly nilpotence of this endomorphism; it imposes no condition on a representation other than the adjoint representation. [given, F1, step 1.1, algebra] ∎

