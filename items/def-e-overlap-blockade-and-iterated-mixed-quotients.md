---
id: def-e-overlap-blockade-and-iterated-mixed-quotients
title: "The E overlap blockade and mixed quotient sequence"
kind: definition
status: draft
origin: pipeline
deps: ["lem-e-overlap-classes-form-an-anticonnected-partition", "def-quotient-blockade-by-mixed-block-reachability"]
provenance:
  statement: ai-altered
  proof: not-applicable
justified_by: [lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Lemma 6.5, quotient construction"
      url: https://arxiv.org/html/2606.06258v2
---

## Definition

Fix a comb block $B_i$ with nonempty $E$ overlap support $X_i$. By [[lem-e-overlap-classes-form-an-anticonnected-partition]], its overlap classes are nonempty anticonnected sets partitioning $X_i$. Fix an enumeration of the finite set $B_i$, and order the classes by their least enumerated vertex to obtain $\mathcal L^1$. Define recursively $\mathcal L^{s+1}=\mathcal L^s/\mathcal M$ for $s\geq1$, using [[def-quotient-blockade-by-mixed-block-reachability]] and its least-member ordering. Thus one replaces each mixed-reachability class of blocks by its union. This construction is used only when $X_i\ne\varnothing$.
