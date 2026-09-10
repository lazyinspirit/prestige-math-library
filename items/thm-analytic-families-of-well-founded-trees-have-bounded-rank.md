---
id: thm-analytic-families-of-well-founded-trees-have-bounded-rank
kind: theorem
title: "Analytic boundedness for well-founded trees"
status: draft
origin: pipeline
deps: ["def-descriptive-tree-rank", "lem-countable-tree-ranks-and-rank-monotonicity", "thm-analytic-closed-projection-and-continuous-image-equivalence", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Corollary 5.16, printed p46 (statement); local combined-tree proof replaces the source rank-comparison/non-analyticity proof"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, if $A\subseteq\mathrm{Tr}$ is analytic and $A\subseteq\mathrm{WF}$, there is $\gamma<\omega_1$ with $r(T)<\gamma$ for every $T\in A$.

## Facts & Assumptions

[F1] [[def-descriptive-tree-rank]] gives the Polish characteristic-coordinate space $\mathrm{Tr}$ and its rank convention.

[F2] [[lem-countable-tree-ranks-and-rank-monotonicity]] gives countable ranks, no-branch equivalence and proper-extension rank monotonicity.

[F3] [[thm-analytic-closed-projection-and-continuous-image-equivalence]] parametrizes nonempty analytic sets by Baire space.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** An analytic family of well-founded trees as in the statement.

1.1 If A is empty use $\gamma=1$. Otherwise F1 makes the ambient tree space Polish, so F3 with A1 gives continuous $f:\mathcal N\to\mathrm{Tr}$ with image A. Form the synchronous tree S of pairs $(s,t)$ of equal-length natural words such that some a extending s has $t\in f(a)$. Taking prefixes of a witness proves prefix closure. Pair the two natural letters into one natural number at each coordinate; this codes S as a tree on $\mathbb N$. [F1, F3, A1]

2.1 Suppose $(a,b)$ were a branch of S. Fix m. The map assigning membership of $b\upharpoonright m$ in f(a) is continuous with values in the discrete two-point space, by F1 and continuity of f. Choose n at least m so that this membership is constant on $N_{a\upharpoonright n}$. Because $(a\upharpoonright n,b\upharpoonright n)\in S$, one witness a' in that cylinder has $b\upharpoonright n\in f(a')$, hence also $b\upharpoonright m\in f(a')$. Constancy gives $b\upharpoonright m\in f(a)$. This holds for every m, so b is a branch of f(a), contradicting F2 since f(a) is well-founded. Each m used one existential witness; no family of witness choices is needed. Thus S has no branch and is well-founded by F2. [F1, F2, step 1.1]

3.1 By F2 and A1 let $\delta=r(S)<\omega_1$. For every a with nonempty f(a), the map $t\mapsto(a\upharpoonright|t|,t)$ takes f(a) into S and preserves proper extensions, sending root to root. F2 implies $r(f(a))\leq\delta$. Empty f(a) has rank zero by F1, also at most $\delta$, even if S is empty. Hence $\gamma=\delta+1<\omega_1$ strictly bounds all ranks in A, since every member is f(a). QED. [F1, F2, A1, step 1.1, step 2.1]
