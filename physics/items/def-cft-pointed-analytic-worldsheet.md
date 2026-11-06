---
id: def-cft-pointed-analytic-worldsheet
kind: definition
title: Pointed analytic worldsheet and family
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-axiom-of-choice
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-riemann-surface-and-holomorphic-atlas: mathematical-premise
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_use: "Assume AC only to use the supplied topological genus definition, whose compact-surface classification proof explicitly requires it; no other choice is used here."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "Definitions 1.16 and 1.19, §1.5–1.7, PDF pp. 22–25."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the supplied definition of a Riemann surface: a nonempty connected Hausdorff second-countable topological space with a holomorphic atlas of charts into open subsets of $\mathbb C$. A **pointed compact analytic worldsheet** is a tuple $(C;p_1,\ldots,p_N;z_1,\ldots,z_N)$ where $C$ is a compact Riemann surface, $N\geq 0$ is finite, the marked points $p_i\in C$ are pairwise distinct, and, for every $i\in\{1,\ldots,N\}$, the data specify an open neighborhood $U_i\subset C$, a radius $r_i>0$, and a biholomorphism $z_i:U_i\to D_{r_i}$ onto a disk $D_{r_i}=\{z\in\mathbb C:|z|<r_i\}$ with $z_i(p_i)=0$. The neighborhoods carrying local coordinates are pairwise disjoint. For a connected compact surface use the supplied topological genus $g$ and Euler characteristic $\chi=2-2g$. For a possibly disconnected compact fiber $C_b=\coprod_{a=1}^{c_b}C_{b,a}$, use these invariants on each connected component; there are finitely many components because they are open and the fiber is compact. Define its total genus and Euler characteristic by $g_{\mathrm{tot}}(C_b)=\sum_a g(C_{b,a})$ and $\chi(C_b)=\sum_a\chi(C_{b,a})=2c_b-2g_{\mathrm{tot}}(C_b)$. An unqualified genus of a disconnected fiber means this total genus. Empty fibers, if present, have $c_b=g_{\mathrm{tot}}(C_b)=\chi(C_b)=0$.

An **analytic family of pointed compact worldsheets** over a complex manifold $B$ is a tuple $(\pi:\mathcal C\to B;\sigma_1,\ldots,\sigma_N;z_1,\ldots,z_N)$ such that $\mathcal C$ and $B$ are complex manifolds, $\pi$ is a proper holomorphic submersion, every fiber $C_b=\pi^{-1}(b)$ is a compact one-dimensional complex manifold without boundary (possibly disconnected, with each connected component carrying the supplied Riemann-surface structure), the $\sigma_i:B\to\mathcal C$ are holomorphic sections of $\pi$ with pairwise disjoint images, and, for every $i\in\{1,\ldots,N\}$, a local-coordinate germ $z_i$ is specified along $\sigma_i(B)$. Here proper means that inverse images of compact sets are compact, and submersion means that the complex differential $d\pi$ is surjective at every point. A vertical coordinate germ along $\sigma_i(B)$ means that locally over each base neighborhood $B_0\subseteq B$ there is a neighborhood $U_i\subseteq\pi^{-1}(B_0)$ for which $(z_i,\pi):U_i\to D_{r_i}\times B_0$ is biholomorphic onto a neighborhood of $\{0\}\times B_0$ and $z_i\circ\sigma_i=0$. The family has no boundary; every connected component of each fiber used for conformal blocks meets a marked section.

## Definition references

[[def-riemann-surface-and-holomorphic-atlas]]

[[def-genus-and-euler-characteristic-compact-riemann-surface]]

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

## Remarks

The Riemann-surface supplier fixes that each fiber is a one-dimensional complex manifold without boundary. The complex-manifold supplier supplies the charts and holomorphic maps used for $B$, $\mathcal C$, and the total-space coordinates. The genus supplier is included because this page names the genus and Euler characteristic of compact fibers; it defines genus topologically and does not assert any analytic moduli-space result. This definition alone asserts neither the existence of a moduli space nor a Deligne–Mumford compactification.

Restriction to an open subset of $B$ and holomorphic base change preserve the analytic-family clauses, as verified in [[lem-cft-pointed-worldsheet-family-stable-under-restriction-and-base-change]]. That verification uses the analytic-family part of this definition; the imported genus convention's Axiom-of-Choice dependency is not used in that lemma.
