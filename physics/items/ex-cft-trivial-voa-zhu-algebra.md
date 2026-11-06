---
id: ex-cft-trivial-voa-zhu-algebra
kind: example
title: The one-dimensional trivial VOA and its Zhu algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-zhu-algebra
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
dependency_roles:
  def-cft-zhu-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "§§5.1–5.2, Zhu circle and star conventions."
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "§2, vacuum and Zhu algebra conventions."
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

## Statement

Let $V=\mathbb C\mathbf1$, $T=0$, $\omega=0$, $c=0$, and $Y(\mathbf1,z)=\operatorname{id}_V$. Then $V$ is a simple VOA of CFT type. Its Zhu circle subspace is $O(V)=0$, and its Zhu algebra is $A(V)=\mathbb C[\mathbf1]\cong\mathbb C$ with $[\mathbf1]*[\mathbf1]=[\mathbf1]$. This algebraic example is not asserted to model a nontrivial physical conformal field theory.

## Facts & Assumptions

**Given:** The one-dimensional complex vector space and the displayed vacuum, translation, conformal, and state–field data.

[F1] [[def-vertex-algebra-state-field]]: the field axioms are truncation, vacuum/creation, translation covariance and locality, with $Y(a,z)=\sum_m a_{(m)}z^{-m-1}$.

[F2] [[def-conformal-vertex-algebra]]: CFT type requires a nonnegative integral $L(0)$-grading, finite-dimensional graded pieces, $V_0=\mathbb C\mathbf1$, $L(-1)=T$, and the Virasoro relations.

[F3] [[def-cft-zhu-algebra]]: for homogeneous $a,b$, the circle and candidate star operations are the finite residues specified in that definition.

## Proof

1.1 The only nonzero mode of $Y(\mathbf1,z)=\operatorname{id}_V$ is $\mathbf1_{(-1)}=\operatorname{id}_V$. Truncation holds; creation gives $Y(\mathbf1,z)\mathbf1=\mathbf1=e^{zT}\mathbf1$; translation covariance has both sides zero; and locality holds because the only fields commute. All $L(m)=0$, so the Virasoro relations hold with $c=0$, $L(-1)=T=0$, and $V_0=V=\mathbb C\mathbf1$, with all other weight spaces zero. Thus the CFT-type axioms hold. The only subspaces of a one-dimensional vector space are zero and itself, so $V$ is simple. [given, F1, F2, algebra]

2.1 Every $a=\lambda\mathbf1$ has weight zero. By [F3],
$$ a\circ b=\lambda\mu\operatorname{Res}_z z^{-2}\mathbf1=0, \qquad a*b=\lambda\mu\operatorname{Res}_z z^{-1}\mathbf1=\lambda\mu\mathbf1. $$
Hence $O(V)=0$, the quotient is $V\cong\mathbb C$, and its product is scalar multiplication with unit $[\mathbf1]$. These computations verify the quotient and product directly in this example. [given, F3, step 1.1, algebra] ∎
