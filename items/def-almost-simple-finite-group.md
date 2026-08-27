---
id: def-almost-simple-finite-group
kind: definition
title: "Almost simple finite groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-isomorphism-and-automorphism, def-simple-group, thm-automorphisms-form-a-group]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Definition

A finite group $G$ is **almost simple** if there is a nonabelian finite simple
group $T$ such that

$$T \le G \le \operatorname{Aut}(T).$$

The subgroup $T$ is then the socle of $G$.
