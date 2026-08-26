---
id: thm-subgroup-block-correspondence
kind: theorem
title: "Blocks containing a point correspond to intermediate subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-group-action]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act transitively on a set $\Omega$, fix $\alpha \in \Omega$, and write
$$G_\alpha := \{\, g \in G : g \cdot \alpha = \alpha \,\}.$$

Then the assignments
$$H \longmapsto H \cdot \alpha := \{\, h \cdot \alpha : h \in H \,\}, \qquad B \longmapsto G_B := \{\, g \in G : g \cdot B = B \,\}$$
give mutually inverse bijections between

1. subgroups $H$ with $G_\alpha \le H \le G$, and
2. blocks $B \subseteq \Omega$ with $\alpha \in B$.

## Facts & Assumptions

**Given:** A transitive left action of $G$ on $\Omega$ and a point $\alpha \in \Omega$.

[L1] A block is a nonempty subset $B$ such that for every $g \in G$ one has either $g \cdot B = B$ or $(g \cdot B) \cap B = \varnothing$ ([[def-block-and-block-system-for-a-group-action]]).

[L2] Transitivity means that for every $\beta \in \Omega$ there is $g \in G$ with $g \cdot \alpha = \beta$ ([[def-group-action]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, let $H$ satisfy $G_\alpha \le H \le G$ and put $B_H := H \cdot \alpha$. If $(g \cdot B_H) \cap B_H \ne \varnothing$, choose $g h_1 \cdot \alpha = h_2 \cdot \alpha$ with $h_1,h_2 \in H$. Then $h_2^{-1} g h_1 \in G_\alpha \le H$, so $g \in H$ and therefore $g \cdot B_H = B_H$. Thus $B_H$ is a block, and clearly $\alpha \in B_H$. [L1, choose]

1.2 For the converse direction, let $B$ be a block containing $\alpha$, and let $G_B := \{\, g \in G : g \cdot B = B \,\}$. If $s \in G_\alpha$, then $s \cdot \alpha = \alpha \in B$, so $(s \cdot B) \cap B \ne \varnothing$; [L1] gives $s \cdot B = B$, hence $G_\alpha \le G_B \le G$. [L1]

1.3 For the converse direction, every $g \in G_B$ sends $\alpha \in B$ back into $B$, so $G_B \cdot \alpha \subseteq B$. Conversely, if $\beta \in B$, choose $g \in G$ with $g \cdot \alpha = \beta$ by [L2]. Then $\beta \in (g \cdot B) \cap B$, so [L1] gives $g \cdot B = B$ and therefore $g \in G_B$. Hence $\beta = g \cdot \alpha \in G_B \cdot \alpha$, so $B = G_B \cdot \alpha$. [L1, L2, choose]

2.1 Step 1.3 shows that $B \mapsto G_B \mapsto G_B \cdot \alpha$ returns $B$. Step 1.1 gives $H \cdot \alpha$ as a block containing $\alpha$, and if $g \in G_{H \cdot \alpha}$ then $g \cdot \alpha \in H \cdot \alpha$, so $g \cdot \alpha = h \cdot \alpha$ for some $h \in H$; thus $h^{-1} g \in G_\alpha \le H$, and hence $g \in H$. Therefore $G_{H \cdot \alpha} = H$. The two assignments are mutually inverse. [step 1.1, step 1.3] ∎
