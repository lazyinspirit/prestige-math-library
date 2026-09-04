---
id: ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two
kind: example
title: "The dihedral group of order eight is a split extension of C_4 by C_2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-dihedral-groups-as-semidirect-products, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Example

Let $D_4=\langle r,s\mid r^4=s^2=1,\ srs^{-1}=r^{-1}\rangle$. Then

$$1\to\langle r\rangle\to D_4\to\langle s\rangle\to1$$

is a split extension of $C_4$ by $C_2$.

## Facts & Assumptions

**Given:** The library convention in which $D_n$ is the dihedral group of
order $2n$, and the standard presentation of $D_4$.

[L1] The dihedral group of order eight is the semidirect product $C_4\rtimes C_2$
with inversion action ([[cor-dihedral-groups-as-semidirect-products]]).

[L2] A complement to the kernel is equivalent to a split extension
([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the rotation subgroup $\langle r\rangle$ is a normal copy of $C_4$ and the reflection subgroup $\langle s\rangle$ is a copy of $C_2$. Their intersection is trivial and they generate $D_4$. [given, L1]

2.1 Thus $\langle s\rangle$ is a complement to $\langle r\rangle$ in $D_4$, so [L2] gives the displayed split extension of $C_4$ by $C_2$. [L2, step 1.1] ∎
