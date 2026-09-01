---
id: thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree
kind: theorem
title: "For compact Hausdorff spaces, total disconnectedness and total separatedness are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-totally-disconnected-and-totally-separated-spaces, thm-quasicomponents-equal-components-in-a-compact-hausdorff-space, def-compact-space, def-hausdorff-space]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

For compact Hausdorff spaces, total disconnectedness and total separatedness
are equivalent.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$.

[L1] In a compact Hausdorff space, quasicomponents and connected components
coincide ([[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]]).

[F1] The notions of compactness and Hausdorffness are those of
[[def-compact-space]] and [[def-hausdorff-space]].

[L2] Total disconnectedness and total separatedness are the two notions fixed in
[[def-totally-disconnected-and-totally-separated-spaces]].

## Proof

**Proof technique:** direct.

1.1 Assume first that $X$ is totally separated. Let $C\subseteq X$ be connected and choose distinct points $x,y\in C$ if possible. By [L2] there is a clopen set $U$ with $x\in U$ and $y\notin U$. Then $C\cap U$ and $C\setminus U$ are disjoint nonempty clopen subsets of $C$, contradicting connectedness. Hence every connected component is a singleton, so $X$ is totally disconnected. [L2, given]

1.2 Assume now that $X$ is totally disconnected. By [L1], quasicomponents also are singletons. For distinct points $x\ne y$, the definition of quasicomponent therefore supplies a clopen set containing $x$ but not $y$. This is exactly total separatedness by [L2]. [L1, L2, given]

2.1 Steps 1.1 and 1.2 prove the equivalence for compact Hausdorff spaces. [step 1.1, step 1.2, F1] ∎
