---
id: rem-shafarevich-abelian-variety-finiteness-proof-chain
kind: remark
title: "Proof chain through Faltings isogeny finiteness"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-shafarevich-finiteness-for-abelian-varieties
  - def-k-isogeny-of-abelian-varieties
  - thm-faltings-isogeny-finiteness-theorem
  - thm-faltings-finiteness-within-fixed-isogeny-class
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Faltings, Endlichkeitssätze für abelsche Varietäten über Zahlkörpern, Inventiones Mathematicae 73 (1983), §§5–6"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Satz 5 and Satz 6, printed pp. 362–365."
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "§2 Theorem 2.8 and §3 Theorem 3.1, printed pp. 165–175."
verification:
  precheck: n/a
---

## Proof route

Under the shared AC, DC, and Countable Choice assumptions, the proof has two stages. First, only finitely many $K$-isogeny classes meet the family. Second, each such fixed isogeny class contributes only finitely many $K$-isomorphism classes. The first result supplies the first finiteness conclusion, and the fixed-isogeny-class result supplies the second.

## Proof route references

[[thm-faltings-isogeny-finiteness-theorem]]

[[thm-faltings-finiteness-within-fixed-isogeny-class]]

[[thm-shafarevich-finiteness-for-abelian-varieties]]

[[def-k-isogeny-of-abelian-varieties]]
