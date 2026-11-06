---
id: def-cft-affine-fundamental-weight-lambda-zero
kind: definition
title: Affine node-zero fundamental weight
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-null-root-central-coroot-and-affine-level
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
dependency_roles:
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  def-null-root-central-coroot-and-affine-level: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
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
      locator: "§11.1, printed p. 217, where the simple affine module is written as L(kΛ₀)."
---

## Definition

Let $\hat{\mathfrak h}=\mathfrak h\oplus\mathbb Cc\oplus\mathbb Cd$ be the extended Cartan subalgebra, and let $h_0=c-\theta^\vee$ be the affine simple coroot. The **level-one affine node-zero fundamental weight** is the unique linear functional $\Lambda_0\in\widehat{\mathfrak h}^{*}$ satisfying

$$\Lambda_0|_{\mathfrak h}=0,\qquad \Lambda_0(c)=1,\qquad \Lambda_0(d)=0.$$

Thus $\Lambda_0(h_i)=0$ for every finite simple coroot $h_i$, and $\Lambda_0(h_0)=1$. For each positive integer $\ell$, the affine weight $\ell\Lambda_0$ has level $\ell$, affine simple-coroot labels $\ell$ at node $0$ and $0$ at every finite node, and degree-derivation eigenvalue $0$.

## Definition references

[[def-degree-derivation-and-full-untwisted-affine-algebra]]

[[def-null-root-central-coroot-and-affine-level]]

[[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]]
