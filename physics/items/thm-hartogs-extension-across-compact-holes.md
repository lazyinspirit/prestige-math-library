---
id: thm-hartogs-extension-across-compact-holes
kind: theorem
title: "Hartogs extension across a connected compact hole with a finite shell cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       lem-local-hartogs-extension-across-polydisc-shells,
       lem-propagation-and-gluing-of-hartogs-extensions,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Theorem 4.3.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge2$, let $\Omega\subseteq\mathbb C^m$ be a domain, and let
$K\Subset\Omega$ be compact with $\Omega\setminus K$ connected. Assume that
$K$ admits a **finite shell cover**: there are open polydiscs
$P_1,\dots,P_N\subseteq\Omega$ covering $K$ such that

1. for each $j$, the punctured set $P_j\cap(\Omega\setminus K)$ is connected
   and contains a coordinate shell of the type treated in
   [[lem-local-hartogs-extension-across-polydisc-shells]] whose hull is $P_j$;
2. after reordering, every connected component of
   $P_j\cap\bigl((\Omega\setminus K)\cup P_1\cup\cdots\cup P_{j-1}\bigr)$
   has nonempty intersection with $\Omega\setminus K$ for every $j\ge2$.

Then every holomorphic function on $\Omega\setminus K$ extends uniquely to a
holomorphic function on $\Omega$.

## Facts & Assumptions

**Given:** A domain $\Omega$, a compact set $K\Subset\Omega$, connected complement $\Omega\setminus K$, and a finite shell cover $P_1,\dots,P_N$ as in the Statement.

[L1] Each coordinate shell extends holomorphically to its hull polydisc ([[lem-local-hartogs-extension-across-polydisc-shells]]).

[L2] Local extension neighborhoods propagate along finite chains and glue uniquely ([[lem-propagation-and-gluing-of-hartogs-extensions]]).

[L3] Holomorphic functions on connected open sets are determined by agreement on one nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[L4] Holomorphic extension is the overlap-agreement notion fixed on this page ([[def-holomorphic-extension-and-domain-of-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 Put $G:=\Omega\setminus K$ and let $f\in\mathcal O(G)$. For each $j$, choose the shell $S_j\subseteq P_j\cap G$ from assumption 1. Given any $g\in\mathcal O(P_j\cap G)$, [L1] extends $g|_{S_j}$ to a holomorphic $E_g$ on the hull $P_j$. The functions $E_g$ and $g$ agree on the nonempty open set $S_j$ inside the connected open set $P_j\cap G$; by [L3] they agree on all of $P_j\cap G$. This is the full-overlap local extension property required by [L2], for every $g$, not only for $f$. Each $P_j\cap G$ is nonempty because it contains $S_j$, and assumption 2 is exactly the componentwise overlap condition of [L2]. Thus $(P_j)$ satisfies every hypothesis of [L2]. [L1, L2, L3, given]

2.1 Applying [L2] gives a holomorphic extension of $f$ from $G$ to $G\cup P_1\cup\cdots\cup P_N$. Because the polydiscs cover $K$, this union is all of $\Omega$. [step 1.1, L2]

3.1 Uniqueness follows from [L3]: two extensions to $\Omega$ agree on the nonempty open subset $\Omega\setminus K$, so they agree on all of the connected domain $\Omega$. The overlap language in [L4] is exactly the one used in step 1.1. [L3, L4, step 2.1] ∎
