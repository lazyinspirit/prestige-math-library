---
id: def-split-extension-of-groups
kind: definition
title: "Group extensions, sections, complements, and split extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-kernel-and-image-of-group-homomorphism, def-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Definition

A **short exact sequence of groups**

$$1\longrightarrow N\mathrel{\mathop{\longrightarrow}^{i}}G\mathrel{\mathop{\longrightarrow}^{\pi}}H\longrightarrow1$$

consists of group homomorphisms ([[def-group-homomorphism]]) with $i$ injective, $\pi$ surjective, and $\operatorname{im}i=\ker\pi$, using the kernel and image of [[def-kernel-and-image-of-group-homomorphism]]. It is also called an **extension of $H$ by $N$**.

A **section** is a homomorphism $s:H\to G$ such that $\pi\circ s=\operatorname{id}_H$. The extension **splits** when it has a section. A **complement to the kernel** is a subgroup ([[def-subgroup]]) $K\le G$ such that $G=(\ker\pi)K$ and $(\ker\pi)\cap K=\{1\}$.
