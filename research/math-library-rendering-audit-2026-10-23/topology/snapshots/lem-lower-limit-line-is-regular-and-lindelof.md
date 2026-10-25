---
id: lem-lower-limit-line-is-regular-and-lindelof
kind: lemma
title: "The lower-limit line has a clopen basis, is regular, and is Lindelöf under countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, lem-regularity-via-closed-neighbourhoods, def-compactness-variants, thm-rationals-countable, lem-rat-embeds-dense, def-countable-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

The lower-limit line has a basis of clopen sets and is regular. Assuming the Axiom of Countable Choice, it is Lindelöf.

## Facts & Assumptions

**Given:** The lower-limit line and, for the Lindelöf assertion, the Axiom of Countable Choice.

[F1] Its basic open sets are the intervals $[a,b)$ ([[def-lower-limit-topology]]).

[L1] A clopen neighbourhood basis gives regularity through the closed-neighbourhood characterization ([[lem-regularity-via-closed-neighbourhoods]]).

[L2] $\mathbb Q$ is countably infinite and is dense in $\mathbb R$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[A1] The Axiom of Countable Choice ([[def-countable-choice]]).

[F2] Lindelöf means that every open cover has an at most countable subcover ([[def-compactness-variants]]).

## Proof

**Proof technique:** direct.

1.1 Each $[a,b)$ is clopen: its complement is $(-\infty,a)\cup[b,\infty)$, a union of lower-limit basic intervals. Hence the line is regular by [L1]. [F1, L1]

1.2 Let $\mathcal U$ be an open cover and let $O$ be the union of the usual intervals $(a,b)$ for which $[a,b)$ lies in a member of $\mathcal U$. The rational-endpoint intervals $[p,q)$ contained in members of $\mathcal U$ cover $O$; they form an at most countable family by [L2]. [F1, L2]

1.3 Put $D=\mathbb R\setminus O$. For $x\in D$, some $[x,b_x)$ lies in a member of $\mathcal U$, and $[x,b_x)\cap D=\{x\}$. The first rational $q_x\in(x,b_x)$ in a fixed enumeration exists, and the intervals $(x,q_x)$ are pairwise disjoint; their first rationals $r_x$ are therefore distinct. Thus $x\mapsto r_x$ injects $D$ into $\mathbb Q$, so $D$ is at most countable. [F1, L2]

2.1 By [A1], choose one member of $\mathcal U$ covering each point of the at most countable set $D$. Together with one covering member for each rational-endpoint interval used in step 1.2, these form an at most countable subcover of $\mathcal U$. [A1, L2, step 1.2, step 1.3]

3.1 Therefore the lower-limit line is Lindelöf under countable choice. [F2, step 2.1] ∎
