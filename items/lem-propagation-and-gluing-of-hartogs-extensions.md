---
id: lem-propagation-and-gluing-of-hartogs-extensions
kind: lemma
title: "Local Hartogs extensions propagate along chains and glue uniquely"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       lem-local-hartogs-extension-across-polydisc-shells,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be open, let $G\subseteq\Omega$ be a connected
open set, and let $U_1,\dots,U_N\subseteq\Omega$ be domains with
$U_j\cap G\ne\varnothing$ for every $j$. Assume that for each $j$ and every
$g\in\mathcal O(U_j\cap G)$ there is $E_g\in\mathcal O(U_j)$ satisfying
$E_g=g$ on all of $U_j\cap G$, and that after reordering every
connected component of

$$U_j\cap\bigl(G\cup U_1\cup\cdots\cup U_{j-1}\bigr)\qquad (2\le j\le N).$$

meets $G$.

Then every holomorphic function on $G$ extends uniquely to a holomorphic
function on $G\cup U_1\cup\cdots\cup U_N$.

## Facts & Assumptions

**Given:** A connected open set $G$, open sets $U_1,\dots,U_N$, and the local extension property stated above.

[L1] The local-extension hypothesis here explicitly requires agreement on the
whole set $U_j\cap G$, which is stronger than agreement on one open overlap in
the general extension convention
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L2] Coordinate shell neighborhoods are one class of open sets with the stated local extension property ([[lem-local-hartogs-extension-across-polydisc-shells]]).

[L3] Holomorphic functions on a connected open set agree everywhere once they agree on one nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in\mathcal O(G)$. By the explicit hypothesis for $j=1$, there is $F_1\in\mathcal O(U_1)$ with $F_1=f$ on all of $U_1\cap G$. Hence $f$ and $F_1$ glue to a holomorphic function on $G\cup U_1$. [L1, given]

2.1 Assume inductively that we have already obtained a holomorphic extension $F_{j-1}$ on $G\cup U_1\cup\cdots\cup U_{j-1}$. By hypothesis, the restriction of $F_{j-1}$ to $U_j\cap G$ extends holomorphically to some $E_j$ on $U_j$. Let $C$ be a connected component of $U_j\cap(G\cup U_1\cup\cdots\cup U_{j-1})$. The hypothesis makes $C\cap G$ nonempty, and since both $C$ and $G$ are open, $C\cap G$ is a nonempty open subset of $C$. On that open set, $E_j$ and $F_{j-1}$ both agree with $f$. Therefore [L3] makes them equal on the whole connected set $C$. This holds for every overlap component, so $E_j$ and $F_{j-1}$ glue to a holomorphic function $F_j$ on $G\cup U_1\cup\cdots\cup U_j$. [L3, step 1.1]

3.1 Repeating step 2.1 for $j=2,\dots,N$ yields a holomorphic extension on the whole union $G\cup U_1\cup\cdots\cup U_N$. Uniqueness at each stage follows from [L3], so the final extension is unique. The shell lemma [L2] identifies the geometric neighborhoods used later. [step 2.1, L2, L3, discharge-construct] ∎
