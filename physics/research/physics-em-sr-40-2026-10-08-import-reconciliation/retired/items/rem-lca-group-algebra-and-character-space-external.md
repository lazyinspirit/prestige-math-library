---
id: rem-lca-group-algebra-and-character-space-external
kind: remark
title: LCA group algebra and character-space results recorded externally
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: [def-axiom-of-choice, def-character-and-maximal-ideal-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  sources_checked:
    date: 2026-09-22
    scope: citations
    by: owner-audit
  precheck: n/a
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Example 3.10, printed p. 9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
external_dependency:
  source_url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
  exact_statement: "Under AC, for a locally compact Hausdorff abelian group G with a fixed nonzero Haar measure m, convolution and conjugate-reflection make A=L1(G,m;C) a commutative Banach star algebra with ||f*g||1<=||f||1||g||1, and A is unital exactly when G is discrete. If G is nondiscrete and B=C direct-sum A is the scalar unitization, every character of B is uniquely either h_w(z,f)=z+integral_G f(t)w(t)dm(t), for a continuous unitary character w of G, or q(z,f)=z; the resulting bijection from the one-point compactification of the compact-open dual group to Delta(B), with infinity mapped to q, is a homeomorphism for the pointwise-evaluation topology."
  local_proof_attempt: "Williams Example 3.10 was read and compared with current library interfaces. The existing general convolution theorems concern Euclidean groups, and the current unitization compactification theorem assumes a C-star algebra. No complete local proof of the general LCA convolution algebra, all-character classification, or compact-open topology identification is available here; Williams states these results and notes that the classification requires work."
  necessity: "Supplies the explicitly external analytical and spectral inputs used by ex-gelfand-transform-of-l-one-of-an-lca-group; that example proves only the elementary unitization calculations and the Gelfand evaluation formula relative to this record."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally
compact Hausdorff abelian group, written additively, and fix a nonzero Haar
measure $m$: a translation-invariant regular Borel measure finite on compact
sets. Put $A=L^1(G,m;\mathbb C)$, with functions identified when equal almost
everywhere. The following results are recorded from Williams, Example 3.10;
they are not proved in this library here.

1. The formulas
   $$ (f*g)(s)=\int_G f(t)g(s-t)\,dm(t),\qquad f^*(s)=\overline{f(-s)} $$
   define, in the first formula almost everywhere and independently of
   representatives, a commutative Banach star algebra on $A$, with
   $\|f*g\|_1\leq\|f\|_1\|g\|_1$ and $\|f^*\|_1=\|f\|_1$. The involution is
   conjugate-linear, involutive, and reverses products. The algebra $A$ has an
   identity if and only if $G$ is discrete.

2. Suppose $G$ is nondiscrete. Define the scalar unitization
   $B=\mathbb C\oplus A$ by
   $$
   (z,f)(v,g)=(zv,zg+vf+f*g).
   $$
   Let $\widehat G$ be the continuous homomorphisms from $G$ to
   $\mathbb T=\{z\in\mathbb C:|z|=1\}$, with uniform convergence on compact
   subsets of $G$. Every character of $B$, in the sense of
   [[def-character-and-maximal-ideal-space]], is uniquely one of
   $$ h_w(z,f)=z+\int_G f(t)w(t)\,dm(t)\quad(w\in\widehat G), \qquad q(z,f)=z. $$
   With the pointwise-evaluation topology, the map
   $\widehat G\cup\{\infty\}\to\Delta(B)$ sending $w$ to $h_w$ and $\infty$
   to $q$ is a homeomorphism from the one-point compactification of the
   compact-open dual. This includes the local compactness of $\widehat G$ and
   the asserted agreement of topologies.

## Remarks

This is a recorded external prerequisite, not a local proof. In particular,
no global sigma-finiteness of Haar measure and no general product-Borel
identification is silently assumed. Williams's text extraction loses the
conjugation bar in the displayed involution; the conjugate-reflection above is
the mathematically correct star operation.
