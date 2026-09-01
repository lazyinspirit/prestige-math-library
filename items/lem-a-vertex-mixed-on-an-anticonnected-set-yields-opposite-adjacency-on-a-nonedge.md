---
id: lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge
kind: lemma
title: "A vertex mixed on an anticonnected set yields opposite adjacency on a nonedge"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-anticonnected-graph-and-anticonnected-component, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 2.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph, let $A\subseteq V(G)$ be anticonnected, and let
$v\in V(G)\setminus A$ be mixed on $A$. Then there exist distinct vertices
$b,b'\in A$ such that

$$bb'\notin E(G),\qquad vb\in E(G),\qquad vb'\notin E(G).$$

## Facts & Assumptions

**Given:** A finite graph $G$, an anticonnected set $A\subseteq V(G)$, and a
vertex $v\in V(G)\setminus A$ that is mixed on $A$.

[L1] A set is anticonnected exactly when the induced subgraph on that set is
connected in the complement graph
([[def-anticonnected-graph-and-anticonnected-component]]).

[L2] Because $v$ is mixed on $A$, it has at least one neighbour and at least one
nonneighbour in $A$
([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $p,q\in A$ with $vp\in E(G)$ and $vq\notin E(G)$. Since $A$ is anticonnected, [L1] gives a path $p=x_0,x_1,\dots,x_m=q$ in the complement graph $\overline{G}[A]$. [L1, L2, given, choose]

2.1 Along that path, the truth value of "$vx_i\in E(G)$" changes from true at $i=0$ to false at $i=m$. Hence there exists $k<m$ such that $vx_k\in E(G)$ and $vx_{k+1}\notin E(G)$. [step 1.1, choose]

3.1 Because $x_kx_{k+1}$ is an edge of $\overline{G}[A]$, it is a nonedge of $G$. Therefore $b:=x_k$ and $b':=x_{k+1}$ satisfy $bb'\notin E(G)$, $vb\in E(G)$, and $vb'\notin E(G)$, which is the conclusion. [step 2.1, L1, algebra] ∎
