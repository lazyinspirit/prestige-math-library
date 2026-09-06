---
id: lem-purity-on-every-h-five-propagates-along-an-overlap-class
kind: lemma
title: "Purity on every induced $H_5$ propagates along an $H_5$-overlap class"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-five-overlap-chain-relation-in-a-comb-block, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Claim 6.4.3"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $C$ be an $H_5$-overlap class and let $u\notin C$. If $u$ is pure to every
induced $H_5$ contained in $C$, then $u$ is pure to $C$.

## Facts & Assumptions

**Given:** $C,u$ as in the Statement.

[F1] A chain of induced $H_5$ copies links the copies meeting any two vertices of $C$ ([[def-h-five-overlap-chain-relation-in-a-comb-block]]).

[F2] A vertex pure to a nonempty set is either complete or anticomplete to it ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Two consecutive copies in an overlap chain share a vertex. By [F2], $u$ cannot be complete to one and anticomplete to the other, since their shared vertex would then be both adjacent and nonadjacent to $u$. [F1, F2]

2.1 Thus the complete/anticomplete label is constant along every overlap chain. By [F1], every vertex of $C$ lies in a copy reached from any fixed copy, so all vertices of $C$ receive one label. [step 1.1, F1]

3.1 Hence $u$ is complete or anticomplete to $C$, as claimed. [step 2.1, F2] ∎
