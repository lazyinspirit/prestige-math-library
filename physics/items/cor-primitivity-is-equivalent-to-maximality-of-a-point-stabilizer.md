---
id: cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer
kind: corollary
title: "A transitive action on more than one point is primitive exactly when a point stabilizer is maximal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-and-imprimitive-actions, thm-subgroup-block-correspondence]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
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

Let $G$ act transitively on $\Omega$ with $|\Omega| > 1$, and fix
$\alpha \in \Omega$. Then the action is primitive if and only if the point stabilizer
$$G_\alpha := \{\, g \in G : g \cdot \alpha = \alpha \,\}$$
is a maximal proper subgroup of $G$.

## Facts & Assumptions

**Given:** A transitive action of $G$ on $\Omega$ with $|\Omega| > 1$ and a point $\alpha \in \Omega$.

[L1] A transitive action is primitive exactly when every block is either a singleton or the whole set ([[def-primitive-and-imprimitive-actions]]).

[L2] Blocks containing $\alpha$ correspond bijectively to subgroups $H$ with $G_\alpha \le H \le G$, by $H \mapsto H \cdot \alpha$ and $B \mapsto G_B$ ([[thm-subgroup-block-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 Because $|\Omega| > 1$, choose $\beta \in \Omega$ with $\beta \ne \alpha$. Transitivity gives $g \in G$ with $g \cdot \alpha = \beta$, so $g \notin G_\alpha$. Hence $G_\alpha$ is a proper subgroup of $G$. [given, choose]

1.2 For the converse direction, suppose $G_\alpha$ is maximal proper. Let $B$ be a block containing $\alpha$. By [L2], the corresponding subgroup $G_B$ satisfies $G_\alpha \le G_B \le G$, so maximality gives $G_B = G_\alpha$ or $G_B = G$. The first case gives $B = \{\alpha\}$ and the second gives $B = \Omega$ by [L2]. Hence every block containing $\alpha$ is trivial. [L2]

2.1 Let $C$ be any block and choose $c\in C$. By transitivity, choose $g\in G$ with $g\cdot c=\alpha$. Then $g\cdot C$ is a block containing $\alpha$, so step 1.2 makes it either $\{\alpha\}$ or $\Omega$. Applying $g^{-1}$ shows that $C$ is respectively a singleton or $\Omega$. Hence the action is primitive by [L1]. [L1, step 1.2, choose]

2.2 For the forward direction, suppose the action is primitive. By [L2], any subgroup $H$ with $G_\alpha \le H \le G$ corresponds to a block containing $\alpha$. By [L1], that block is either $\{\alpha\}$ or $\Omega$, so [L2] forces $H = G_\alpha$ or $H = G$. Together with step 1.1, this makes $G_\alpha$ maximal proper. [L1, L2, step 1.1]

3.1 Step 2.2 proves that primitivity implies maximality, while steps 1.2 and 2.1 prove the converse. [step 2.2, step 1.2, step 2.1] ∎
