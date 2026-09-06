---
id: lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs
kind: lemma
title: "Relative to a complete nonedge pair in a co-$E$-free graph, every one-sided vertex is pure to an induced $H_5$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours, def-h-zero-through-h-five, def-e-graph-and-co-e-graph, def-graph-walk-trail-path-and-cycle, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 6.4.2"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $G$ be co-$E$-free. If nonadjacent $x,y$ are complete to an induced copy of $H_5$ and $u\in N(x)\setminus N(y)$, then $u$ is complete or anticomplete to that copy of $H_5$.

## Facts & Assumptions
**Given:** $x,y,u$ and a labeled induced $H_5$ as in the Statement.

[F1] The labeled $H_5$ has rim $v_1v_2v_3v_4v_5v_1$, hub $w$ complete to the rim, and leaves $v_i'$ adjacent only to $v_i$ ([[def-h-zero-through-h-five]]).

[F2] On any induced path to which $u$ is mixed and whose exterior vertices are $x,y$, the preceding path-run lemma forbids two consecutive nonneighbours and three consecutive neighbours ([[lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $u$ is mixed on the $H_5$. If $u$ is complete to the rim and some $uv_j'$ is a nonedge, then $u$ is mixed on the induced path $v_j'-v_j-v_{j+1}-v_{j+2}$ and has three consecutive neighbours there, contrary to [F2]. Thus $u$ is adjacent to every $v_j'$. If $uw$ failed, $\{v_1',u,v_1,v_2,v_3,w\}$ induces co-$E$; hence $uw$ holds and $u$ is complete to $H_5$, a contradiction. [F1, F2, assume-contra]

1.2 If $u$ is anticomplete to the rim and some $uv_j'$ is an edge, then $u$ is mixed on $v_j'-v_j-v_{j+1}$ with two consecutive nonneighbours, contrary to [F2]. Thus every $uv_j'$ is a nonedge. If $uw$ were an edge, then $u$ would be mixed on $v_1'-v_1-w$ with two consecutive nonneighbours, again contrary to [F2]. Hence $uw$ is a nonedge, so $u$ is anticomplete to $H_5$, also a contradiction. [F1, F2, contradiction]

1.3 It remains that $u$ is mixed on the rim. Any cyclic run of two rim nonneighbours or three rim neighbours, together with a vertex of the opposite adjacency supplied by mixedness, lies in an induced rim subpath to which [F2] applies. Thus the two run restrictions force, up to cyclic relabeling, $N(u)\cap V(C)=\{v_1,v_3,v_4\}$. If $uw$ were a nonedge, then $u$ would be mixed on $v_4-w-v_2$ with two consecutive nonneighbours; if $uv_1'$ were a nonedge, then $u$ would be mixed on $v_1'-v_1-w-v_3$ with three consecutive neighbours. Hence [F2] gives $uw,uv_1'\in E(G)$; then $\{u,w,v_1',v_1,v_2,v_3\}$ induces co-$E$, impossible. [F1, F2, contradiction]

2.1 Every possible rim relation contradicts mixedness, so $u$ is pure to the induced $H_5$. [step 1.1, step 1.2, step 1.3, discharge-contradiction] ∎
