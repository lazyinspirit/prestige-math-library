---
id: ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit
kind: example
title: "A six-vertex witness graph makes the Bird criterion explicit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bird-graph-and-co-bird-graph, def-h-plus-and-h-minus-for-two-special-vertices, thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property, thm-substitution-preserves-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 6 and Lemma 2.2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

The six-vertex graph

$$ H:\ E(H)=\{v_1v_2,v_1v_3,v_1v_5,v_1v_6,v_2v_3,v_2v_4,v_2v_5,v_3v_5,v_4v_5,v_4v_6\} $$

has a homogeneous clique $\{v_2,v_5\}$, so $H$ has the Erdős-Hajnal property;
moreover $H^+-v_3$ and $H^--v_6$ are both co-Bird.

## Facts & Assumptions

**Given:** The graph $H$ above, with distinguished vertices $v_1$ and $v_2$.

[L1] Every graph on at most five vertices has the Erdős-Hajnal property
([[thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property]]).

[L2] Substitution preserves the Erdős-Hajnal property
([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[L3] The graph $H^+$ adds a new vertex adjacent to the two distinguished
vertices, while $H^-$ does the same after deleting the distinguished edge if it
is present; co-Bird is the complement of Bird
([[def-h-plus-and-h-minus-for-two-special-vertices]], [[def-bird-graph-and-co-bird-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Outside the pair $\{v_2,v_5\}$, both vertices are adjacent exactly to $v_1,v_3,v_4$ and are nonadjacent to $v_6$. Hence $\{v_2,v_5\}$ is a homogeneous clique. Let $Q$ be the graph on $\{x,v_1,v_3,v_4,v_6\}$ with edges $\{xv_1,xv_3,xv_4,v_1v_3,v_1v_6,v_4v_6\}$. Replacing $x$ by the clique $\{v_2,v_5\}$ recovers all edges of $H$, so $H=Q[x\to K_2]$. [given, construct]

1.2 In $H^-$, delete $v_6$. The remaining six vertices $\{v,v_1,v_2,v_3,v_4,v_5\}$ have edge set $\{vv_1,vv_2,v_1v_3,v_1v_5,v_2v_3,v_2v_4,v_2v_5,v_3v_5,v_4v_5\}$. Relabel them by $x_1=v_4$, $x_2=v$, $x_3=v_3$, $y=v_1$, $z=v_5$, and $w=v_2$. Again the only missing edges are $x_1x_2,x_1x_3,x_2x_3,x_1y,x_2z,yw$, so $H^--v_6$ is also co-Bird. [L3, given, algebra]

2.1 The graphs $Q$ and $K_2$ both have at most five vertices, so [L1] gives the Erdős-Hajnal property for each. By [L2], $H$ also has the Erdős-Hajnal property. [step 1.1, L1, L2]

3.1 In $H^+$, delete $v_3$. The remaining six vertices $\{v,v_1,v_2,v_4,v_5,v_6\}$ have edge set $\{vv_1,vv_2,v_1v_2,v_1v_5,v_1v_6,v_2v_4,v_2v_5,v_4v_5,v_4v_6\}$. Relabel them by $x_1=v$, $x_2=v_6$, $x_3=v_5$, $y=v_4$, $z=v_2$, and $w=v_1$. Then the only missing edges are $x_1x_2,x_1x_3,x_2x_3,x_1y,x_2z,yw$, which are exactly the Bird edges. Therefore $H^+-v_3$ is co-Bird. [step 2.1, L3, algebra]

4.1 Steps 2.1-3.1 together with step 1.2 verify the finite witness data used in the Bird route: $H$ has the Erdős-Hajnal property, and both $H^+$ and $H^-$ contain induced co-Bird subgraphs. [step 2.1, step 3.1, step 1.2] ∎
