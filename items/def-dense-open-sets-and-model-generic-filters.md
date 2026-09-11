---
id: "def-dense-open-sets-and-model-generic-filters"
kind: "definition"
title: "Dense open sets and generic filters over a model"
deps: ["def-forcing-preorder-compatibility-and-filter", "thm-ordinals-and-omega-are-absolute-in-transitive-models"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Forcing Definitions 1.2,1.7,1.9 and Exercise 1.10 pp2–4
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Use [[def-forcing-preorder-compatibility-and-filter]]: $q\le p$ means stronger, and a filter is nonempty, upward closed and internally downward directed. A subset $D\subseteq P$ is **dense** if $\forall p\in P\ \exists q\in D\ (q\le p)$, and **open** if $p\in D$ and $q\le p$ imply $q\in D$.

For a transitive ZF model M containing P and its order, a filter $G\subseteq P$ is **M-generic** if $G\cap D\ne\varnothing$ for every dense $D\subseteq P$ with $D\in M$. The displayed density condition is the same inside and outside M: all its quantifiers range over the identical sets P and D, with identical order relation. No largest condition, countability or existence of a generic filter is assumed by the definition. When M is called countable, this means countable externally; its natural numbers agree with actual omega by [[thm-ordinals-and-omega-are-absolute-in-transitive-models]].
