---
id: def-lie-subalgebra-and-ideal
kind: definition
title: Lie subalgebras and ideals
status: draft
origin: pipeline
deps: [def-finite-dimensional-lie-algebra, def-linear-subspace]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Section 8.3, printed page 50
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 3.4, Definitions 3.43 and 3.46
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $\mathfrak g$ be a finite-dimensional real or complex Lie algebra. A
linear subspace $\mathfrak h\subseteq\mathfrak g$ is a **Lie subalgebra** if

$$[\mathfrak h,\mathfrak h]\subseteq\mathfrak h.$$

The restricted bracket then makes $\mathfrak h$ a Lie algebra: bilinearity,
alternation, and Jacobi are inherited from $\mathfrak g$.

A linear subspace $\mathfrak a\subseteq\mathfrak g$ is an **ideal** if

$$[\mathfrak g,\mathfrak a]\subseteq\mathfrak a.$$

Skew-symmetry makes this equivalent to
$[\mathfrak a,\mathfrak g]\subseteq\mathfrak a$. Every ideal is a Lie
subalgebra. The zero subspace and $\mathfrak g$ are ideals, and no properness
or nonzero assumption is included.
