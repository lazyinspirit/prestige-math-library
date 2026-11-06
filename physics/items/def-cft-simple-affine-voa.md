---
id: def-cft-simple-affine-voa
kind: definition
title: Simple positive-integral-level affine vertex operator algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-untwisted-affine-central-extension
  - def-universal-affine-vacuum-module
  - thm-universal-affine-vertex-algebra
  - def-conformal-vertex-algebra
  - def-sugawara-modes
  - def-cft-affine-fundamental-weight-lambda-zero
dependency_roles:
  def-loop-algebra-of-a-simple-lie-algebra: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-universal-affine-vacuum-module: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-sugawara-modes: mathematical-premise
  def-cft-affine-fundamental-weight-lambda-zero: mathematical-premise
justified_by:
  - lem-cft-simple-affine-quotient-exists
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§3.1, Proposition 3.1, printed pp. 65–68; §11.1, Theorem 11.1, printed pp. 217–218."
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§2, Example (2), and §3, Theorem 3.7, printed pp. 5 and 7–8."
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with invariant form normalized so that every long root has squared length $2$. For a positive integer $\ell$, the **simple affine vertex operator algebra** $L_\ell(\mathfrak g)$ is the quotient of the universal affine vertex algebra $V^\ell(\mathfrak g)$ by its unique maximal proper vertex-algebra ideal. It carries the noncritical Sugawara conformal vector; its underlying untwisted affine Kac–Moody module is the irreducible highest-weight module of highest weight $\ell\Lambda_0$. Existence, uniqueness, the conformal grading, and the affine-module identification are established by the local quotient lemma. This is an algebraic vertex operator algebra of CFT type; no Hilbert-space inner product, unitarity, or full two-dimensional conformal field theory is implicit.

## Definition references

[[def-loop-algebra-of-a-simple-lie-algebra]]

[[def-untwisted-affine-central-extension]]

[[def-universal-affine-vacuum-module]]

[[thm-universal-affine-vertex-algebra]]

[[def-conformal-vertex-algebra]]

[[def-sugawara-modes]]

[[def-cft-affine-fundamental-weight-lambda-zero]]

[[lem-cft-simple-affine-quotient-exists]]
