---
id: lem-perfect-set-game-strategy-dichotomy
kind: lemma
title: "Perfect-set game strategy dichotomy on Cantor space"
status: draft
origin: pipeline
deps: ["lem-cantor-and-baire-sequence-coding", "def-gale-stewart-games-on-pruned-trees"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "Theorem 10.10(i), Claims 10.11–10.12 and their complete proofs, printed pp100–101"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
---
## Statement

In ZF let $A\subseteq\mathcal C=2^{\mathbb N}$. In each round I plays a finite binary block (possibly empty), then II plays a bit. I wins iff the concatenated sequence is in $A$. An I winning strategy yields a continuous injection $\mathcal C\to A$ with compact closed image having no isolated points. A II winning strategy yields an injection $A\to\mathbb N$. Fixed block codes turn this into a natural-number game, with an illegal II bit losing immediately.

## Facts & Assumptions

[F1] [[lem-cantor-and-baire-sequence-coding]] supplies countable finite-word codes, the cylinder topology, and compactness and absence of isolated points of $\mathcal C$.

[F2] [[def-gale-stewart-games-on-pruned-trees]] defines full-history strategies and winning plays.

## Proof

**Given:** The block-and-bit game in the statement; no determinacy or choice axiom is assumed.

1.1 Enumerate all finite binary words by length and then lexicographic order, including the empty word first. This gives I's natural-number codes. II's numbers zero and one are legal bits; at the first other number declare I the winner. At each legal round at least one output bit is appended, so the concatenation is infinite. A winning strategy on the coded game never prescribes a first illegal move on its consistent legal histories, since the opponent can always continue legally; restriction thus gives the stated game. [F1, F2]

1.2 Fix an I winning strategy $\sigma$. For $z\in\mathcal C$ let $F(z)$ be the outcome against II's successive bits $z(n)$. It lies in $A$ by F2. If $z,w$ first differ at $n$, their game histories through I's nth block are identical, and their next bits differ at the same output position, so $F(z)\ne F(w)$. If two inputs agree in their first $m$ bits, the first $m$ full rounds agree and append at least $m$ bits, hence their outputs agree in their first $m$ bits. Thus $F$ is continuous. [F1, F2]

1.3 Fix instead a winning II strategy $\tau$ and $x\in A$. A barrier for $x$ is a finite legal full history $h$ consistent with $\tau$, ending before an I move, whose concatenation $s$ is a prefix of $x$, such that for every finite block $t$ with $s^\frown t\subset x$, the response $\tau(h^\frown t)$ differs from the next bit of $x$. If no such barrier existed, start with the empty history and at each round choose the least block code preserving agreement with $x$ after $\tau$ responds. The absence of a barrier makes this set nonempty at each resulting history. Recursion constructs a full $\tau$-play concatenating to $x$ (lengths grow by at least one), contrary to $x\in A$. Hence a barrier exists. [F1, F2]

2.1 By F1 and the open-cover definition, the image of $\mathcal C$ under $F$ is compact: pull a cover back, take a finite subcover, and push its coverage forward. A compact set $K$ in a metric space is closed: for $x\notin K$ the balls $B(y,d(x,y)/3)$ cover $K$; finitely many suffice, and the minimum of the finitely many positive radii gives a ball about $x$ missing all those balls. Closed subsets of a compact space are compact, since adjoining their open complement to a cover gives a cover of the whole space. Consequently images under $F$ of closed subsets of $\mathcal C$ are compact and closed; injectivity now says its inverse on the image takes inverse images of closed sets to closed sets. Thus $F$ is a homeomorphism onto its image. That image has no isolated point because $\mathcal C$ has none by F1. [F1, step 1.2]

3.1 A fixed barrier history $h$ can serve at most one $x$. Its concatenation gives the first $|s|$ bits. Recursively, after reconstructing the additional block $t=x\upharpoonright[|s|,|s|+j)$, recover the next bit as $1-\tau(h^\frown t)$. Each query uses the same fixed history $h$, not an evolving hypothetical history. The barrier property justifies every such recovered bit, including $j=0$ with empty $t$. Full finite histories have natural-number codes by iterated finite-word coding F1. Assign each $x\in A$ the least code of its barriers. Existence follows from step 1.3 and uniqueness per code from this reconstruction, so this assignment is an injection into $\mathbb N$. When $A=\varnothing$ it is the empty injection. QED. [F1, step 1.3]
