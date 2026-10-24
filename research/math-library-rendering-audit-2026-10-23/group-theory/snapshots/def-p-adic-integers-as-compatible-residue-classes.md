---
id: def-p-adic-integers-as-compatible-residue-classes
kind: definition
title: "The p-adic integers are the compatible residue-class tuples in the inverse limit of Z mod p^n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compatible-tuple-inverse-limit-of-groups, def-pro-p-group]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Definition

Fix a prime $p$. The **$p$-adic integers** are

$$ \mathbb Z_p:=\varprojlim_{n\ge 1}\mathbb Z/p^n\mathbb Z, $$

where the transition maps are reduction modulo $p^n$. Concretely,
$\mathbb Z_p$ is the set of tuples $x=(x_n)_{n\ge1}$ with
$x_n\in\mathbb Z/p^n\mathbb Z$ and

$$ x_{n+1}\bmod p^n=x_n\qquad(n\ge1), $$

so its elements are exactly the compatible tuples of
[[def-compatible-tuple-inverse-limit-of-groups]].

With the inverse-limit topology, $\mathbb Z_p$ is a pro-$p$ group in the sense
of [[def-pro-p-group]].
