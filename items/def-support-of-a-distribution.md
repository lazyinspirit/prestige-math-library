---
id: "def-support-of-a-distribution"
kind: "definition"
title: "Support of a distribution"
deps: ["thm-distributions-form-a-sheaf"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
---

## Definition

For $u\in\mathcal D'(\Omega)$, say $u$ **vanishes on** an open $V\subseteq\Omega$ if its restriction to $V$ is zero. Let $Z$ be the union of all such open sets. Locality in [[thm-distributions-form-a-sheaf]] shows that $u|_Z=0$, since these sets cover $Z$ and all its restrictions are zero. Thus $Z$ is the largest vanishing open set. The **support** is the relatively closed set $\operatorname{supp}u=\Omega\setminus Z$.

In particular $\operatorname{supp}u=\varnothing$ if and only if $u=0$: emptiness gives $Z=\Omega$ and vanishing there, while the zero distribution vanishes everywhere. If a test $\varphi$ vanishes on a neighborhood of $\operatorname{supp}u$, its compact support is contained in $Z$, so $u(\varphi)=0$ by restriction. Consequently two tests agreeing on a neighborhood of $\operatorname{supp}u$ have equal pairings with $u$, by applying this fact to their difference.

**Compactly supported** means that $\operatorname{supp}u$ is a compact subset of $\Omega$. Relative closedness in an arbitrary open domain is not by itself compactness or closedness in the ambient Euclidean space. On the empty domain support is empty. The union and locality argument require no selection of vanishing neighborhoods and no choice axiom.
