---
id: ex-gts-spin-structures-on-the-circle
kind: example
title: The two Spin structures on the oriented circle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 2
proof_strategy: direct
deps:
  - thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-singular-cohomology-with-coefficients
  - cor-homology-of-spheres
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - def-axiom-of-choice
justified_by: []
dependency_roles:
  thm-gts-spin-and-spin-c-obstruction-and-torsor-classification: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  cor-homology-of-spheres: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_strength: ZF + full AC inherited from the Spin classification theorem and cohomology suppliers.
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
sources:
  references:
    - title: Dale Husemöller, Michael Joachim, Branislav Jurčo and Martin Schottenloher, Basic Bundle Theory and K-Cohomology Invariants
      url: https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf
      locator: Chapter 12, §3 Definition 3.2 and Proposition 3.3, printed p. 140 (PDF p. 156); the general Spin-lift criterion and H1 torsor, specialized locally to the circle.
    - title: Konstantin Wernli, Lecture Notes on Spin Geometry
      url: https://arxiv.org/pdf/1911.09766v1
      locator: §§2.3.1–2.3.18, especially the two Spin structures on the circle.
---

## Example

Write $S^1=\mathbb R/\mathbb Z$ with its standard orientation and global unit tangent frame. The oriented frame bundle has structure group $SO(1)=1$. The two Spin structures are the disconnected double cover $S^1\sqcup S^1\to S^1$, with the two components exchanged by $\mathbb Z/2$, and the connected double cover $\mathbb R/2\mathbb Z\to\mathbb R/\mathbb Z$, $[t]_{2\mathbb Z}\mapsto[t]_{\mathbb Z}$, with deck action $[t]\mapsto[t+1]$.

## Facts & Assumptions

**Given:** Full AC, the oriented circle, the trivialization of its oriented frame bundle and the covering maps in the Example.

[F1] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]: for rank one, a Spin structure is a principal $\operatorname{Spin}(1)=\mathbb Z/2$ bundle with an equivariant map to the trivial oriented frame bundle.

[F2] [[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]: when $w_2=0$, Spin structures form a torsor for $H^1(S^1;\mathbb Z/2)$.

[F3] [[def-singular-cohomology-with-coefficients]]: singular cohomology is computed from the singular chain complex by the cochain Hom complex.

[F4] [[cor-homology-of-spheres]]: $H_0(S^1;\mathbb Z)=\mathbb Z$ and $H_1(S^1;\mathbb Z)=\mathbb Z$.

[F5] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]: $0\to\operatorname{Ext}(H_0(S^1;\mathbb Z),\mathbb Z/2)\to H^1(S^1;\mathbb Z/2)\to\operatorname{Hom}(H_1(S^1;\mathbb Z),\mathbb Z/2)\to0$ is exact.

## Verification

**Given:** The data above and [F1]–[F5].

1.1 The disconnected cover is a principal $\mathbb Z/2$ bundle because each fiber has two points and the group interchanges the two sheets. The connected map $[t]_{2\mathbb Z}\mapsto[t]_{\mathbb Z}$ is a covering: each sufficiently short interval in $\mathbb R/\mathbb Z$ lifts to two disjoint intervals, and translation by $1$ interchanges them freely and transitively. Both total spaces therefore give principal $\operatorname{Spin}(1)$ bundles; since the oriented frame bundle is trivial, their projections supply the equivariant Spin lifts required by [F1]. [F1, given, construct]

2.1 The disconnected cover has two components, whereas $\mathbb R/2\mathbb Z$ is connected, so the covers are not isomorphic. By the cochain definition [F3], cohomology is the middle term in the UCT sequence [F5]; [F4] gives $H_0(S^1;\mathbb Z)=H_1(S^1;\mathbb Z)=\mathbb Z$, so $\operatorname{Ext}(\mathbb Z,\mathbb Z/2)=0$ and $\operatorname{Hom}(\mathbb Z,\mathbb Z/2)\cong\mathbb Z/2$. Hence $H^1(S^1;\mathbb Z/2)\cong\mathbb Z/2$. The tangent line is trivial, so $w_2=0$; [F2] says the set of Spin structures is a nonempty torsor for this two-element group. The two explicit nonisomorphic covers therefore exhaust it. [F2, F3, F4, F5, step 1.1, algebra] ∎

