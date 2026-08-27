---
id: cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property
kind: corollary
title: "Deleting a leaf and a co-leaf preserves the Erdős-Hajnal property of a finite forbidden family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family, thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Corollary 1.8"
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

have the Erdős-Hajnal property, then $\mathcal F$ has the Erdős-Hajnal
property.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of finite graphs, a member $H_1\in\mathcal F$ with leaf $v$, and a member $H_2\in\mathcal F$ with co-leaf $w$.

[L1] If the two modified families are viral, then $\mathcal F$ is viral ([[thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family]]).

[L2] For finite families, the Erdős-Hajnal property is equivalent to virality ([[thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the hypothesis that $\mathcal F_1$ and $\mathcal F_2$ have the Erdős-Hajnal property implies that both families are viral. [L2]

2.1 Applying [L1] gives that $\mathcal F$ is viral. [step 1.1, L1]

3.1 A second application of [L2] turns virality of $\mathcal F$ back into the Erdős-Hajnal property. [step 2.1, L2] ∎
