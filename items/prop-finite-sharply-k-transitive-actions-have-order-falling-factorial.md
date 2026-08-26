---
id: prop-finite-sharply-k-transitive-actions-have-order-falling-factorial
kind: proposition
title: "A finite sharply k-transitive action has order n(n-1)...(n-k+1)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sharply-k-transitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act sharply $k$-transitively on a finite set $\Omega$ of size $n$, with
$k \le n$. Then
$$|G| = n(n-1)\cdots(n-k+1).$$

## Facts & Assumptions

**Given:** A sharply $k$-transitive action of $G$ on a finite set $\Omega$ of size $n$, with $k \le n$.

[L1] In a sharply $k$-transitive action, for any two ordered $k$-tuples of distinct points there is a unique group element carrying the first tuple to the second ([[def-sharply-k-transitive-actions]]).

## Proof

**Proof technique:** direct.

1.1 Fix one ordered $k$-tuple of distinct points $(\alpha_1,\dots,\alpha_k)$. Define $\Phi:G \to T_k(\Omega)$ by $\Phi(g) := (g \cdot \alpha_1,\dots,g \cdot \alpha_k)$, where $T_k(\Omega)$ is the set of ordered $k$-tuples of distinct points of $\Omega$. [L1, construct]

2.1 The map $\Phi$ is bijective: existence in [L1] makes it surjective, and uniqueness in [L1] makes it injective. [L1, step 1.1]

3.1 The set $T_k(\Omega)$ has $n$ choices for the first entry, then $n-1$ for the second, and so on down to $n-k+1$ for the last. Hence $|T_k(\Omega)| = n(n-1)\cdots(n-k+1)$, and step 2.1 gives the same value for $|G|$. [step 2.1, algebra] ∎
