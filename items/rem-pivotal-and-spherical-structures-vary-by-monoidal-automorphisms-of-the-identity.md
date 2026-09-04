---
id: rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity
kind: remark
title: "Pivotal and spherical structures vary by monoidal automorphisms of the identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pivotal-structure, def-spherical-structure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 4.7.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Remark

If a tensor category has one pivotal structure, then every monoidal natural
automorphism $\eta$ of the identity functor produces another one by
$X\xrightarrow{\eta_X}X\xrightarrow{a_X}X^{\vee\vee}$. Equivalently, if
$a$ and $b$ are pivotal structures, then $a^{-1}b$ is a unique monoidal
automorphism of the identity. Thus the set of pivotal structures, when
nonempty, is a torsor over
$\operatorname{Aut}_\otimes(\operatorname{id}_{\mathcal C})$. Spherical
structures are precisely the members of this set that also satisfy the
spherical trace condition; changing by a monoidal automorphism need not
preserve that extra condition.

This is why $\dim_a(X)$ keeps the subscript $a$: the comparison map is part of
the data.
