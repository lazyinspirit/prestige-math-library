---
id: def-cft-slodowy-slice
kind: definition
title: Slodowy slice associated to a nilpotent element
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - thm-cft-jacobson-morozov-for-nilpotent-elements
  - def-cft-root-data-for-principal-w-levels
  - def-dual-coxeter-number-for-normalized-form
dependency_roles:
  thm-cft-jacobson-morozov-for-nilpotent-elements: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
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
      locator: §7.2, Definition 7.1, the affine slice and its identification in the dual.
verification:
  precheck: pending
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

Let $f$ be nilpotent in a finite-dimensional complex simple Lie algebra $\mathfrak g$, and let $(e,h,f)$ be a chosen $\mathfrak{sl}_2$-triple. Write $\mathfrak g^e=\{x\in\mathfrak g:[e,x]=0\}$. The **Slodowy slice** for this chosen triple is the affine subspace
$$S_f=f+\mathfrak g^e\subseteq\mathfrak g.$$
For the fixed nondegenerate invariant form $B$ from def-cft-root-data-for-principal-w-levels, it is identified with $B(f,\cdot)+B(\mathfrak g^e,\cdot)\subseteq\mathfrak g^*$. This definition does not assert transversality to adjoint orbits or independence from the chosen triple.



## Definition references

[[def-cft-root-data-for-principal-w-levels]]

## Facts & Assumptions

**Given:** A nilpotent $f$, a chosen triple $(e,h,f)$, and the fixed nondegenerate invariant form.

[F1] [[thm-cft-jacobson-morozov-for-nilpotent-elements]]: every adjoint-nilpotent $f$ in a finite-dimensional complex simple Lie algebra admits a triple $(e,h,f)$ satisfying $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$; the local proof includes the reductive-centralizer induction.

[F2] [[def-cft-root-data-for-principal-w-levels]] and [[def-dual-coxeter-number-for-normalized-form]]: the fixed normalized invariant form is nondegenerate. The general dual-root realization issue is not used in this form interface.

## Proof


1.1 The map $x\mapsto[e,x]$ is linear, so its kernel $\mathfrak g^e$ is a vector subspace. Translating that subspace by $f$ gives a well-defined affine subspace $S_f$. [given, F1, algebra]

2.1 Nondegeneracy of $B$ makes $x\mapsto B(x,\cdot)$ an isomorphism $\mathfrak g\to\mathfrak g^*$. It therefore sends the affine subspace $f+\mathfrak g^e$ bijectively onto the stated affine subspace of $\mathfrak g^*$. No orbit-transversality conclusion follows from this definition alone. [F2, step 1.1, algebra] ∎

## Proof status

The affine-slice definition is complete for supplied $(e,h,f)$, and the local Jacobson-Morozov theorem supplies such a triple for every nilpotent $f$. No transversality or independence from the chosen triple is asserted here.


