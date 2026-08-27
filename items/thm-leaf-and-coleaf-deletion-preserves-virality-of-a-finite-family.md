---
id: thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family
kind: theorem
title: "Deleting a leaf and a co-leaf preserves virality of a finite forbidden family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-viral-property-for-a-finite-family, def-coleaf-of-a-graph, lem-complement-commutes-with-induced-subgraphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.7"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a finite family of finite graphs. Let $H_1\in\mathcal F$
have a leaf $v$, and let $H_2\in\mathcal F$ have a co-leaf $w$. Write
$H_1':=H_1\setminus\{v\}$ and $H_2':=H_2\setminus\{w\}$. If

$$\mathcal F_1:=\{H_1'\}\cup(\mathcal F\setminus\{H_1\})$$

and

$$\mathcal F_2:=\{H_2'\}\cup(\mathcal F\setminus\{H_2\})$$

are both viral, then $\mathcal F$ is viral.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of finite graphs, a member $H_1\in\mathcal F$ with leaf $v$, and a member $H_2\in\mathcal F$ with co-leaf $w$.

[F1] The Huang-Ju-Zhou leaf/co-leaf theorem says that if $F_1,\overline{F_2}\in\mathcal F$, if $v_1$ is a leaf of $F_1$ and $v_2$ is a leaf of $F_2$, and if replacing $F_1$ by $F_1\setminus\{v_1\}$ and $\overline{F_2}$ by $\overline{F_2\setminus\{v_2\}}$ gives two viral families, then $\mathcal F$ is viral.

[L1] A co-leaf of $H_2$ is a leaf of $\overline{H_2}$ ([[def-coleaf-of-a-graph]]).

[L2] Complement commutes with induced subgraphs, so $$\overline{\overline{H_2}\setminus\{w\}}=H_2\setminus\{w\}=H_2'$$ ([[lem-complement-commutes-with-induced-subgraphs]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] with $F_1:=H_1$ and $F_2:=\overline{H_2}$. The chosen vertex $v$ is a leaf of $F_1$ by hypothesis, and [L1] makes $w$ a leaf of $F_2$. By [L2], the second modified family in [F1] is exactly $$\{H_2'\}\cup(\mathcal F\setminus\{H_2\})=\mathcal F_2,$$ while the first modified family is exactly $\mathcal F_1$. [F1, L1, L2]

2.1 Since the hypothesis says that $\mathcal F_1$ and $\mathcal F_2$ are both viral, [F1] yields that $\mathcal F$ is viral. [step 1.1, F1] ∎
