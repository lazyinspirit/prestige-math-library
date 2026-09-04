---
id: def-canonical-map-from-the-integers-to-zp
kind: definition
title: "The canonical map from Z to Zp sends an integer to its coherent residue classes modulo p^n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-adic-integers-as-compatible-residue-classes]
verification:
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

The **canonical map from $\mathbb Z$ to $\mathbb Z_p$** sends an integer $m$
to the compatible tuple

$$ (m\bmod p^n)_{n\ge1}. $$

Compatibility is immediate because reducing $m\bmod p^{n+1}$ modulo $p^n$
recovers $m\bmod p^n$, so the image really lies in
[[def-p-adic-integers-as-compatible-residue-classes]].
