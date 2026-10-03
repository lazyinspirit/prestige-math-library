---
id: ex-no-nonzero-odd-weight-level-one-modular-forms
kind: example
title: "There are no nonzero odd-weight level-one modular forms"
status: draft
origin: pipeline
deps:
  - def-level-one-modular-form-and-cusp-form
  - def-modular-group-action-on-the-upper-half-plane
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Section 1.2, printed p. 5: -I forces every odd-weight form to vanish."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Definition 4.5, printed p. 49: the weight-2k convention; the odd-weight assertion is in Zagier p. 5."
---

## Example

If $k$ is odd then $M_k=\{0\}$ and $S_k=\{0\}$.

## Facts & Assumptions

**Given:** An odd integer $k$ and an $f\in M_k$ ([[def-level-one-modular-form-and-cusp-form]]).

[F1] $-I\in SL_2(\mathbb Z)$ acts on $\mathfrak H$ as the identity and has $c=0$, $d=-1$, hence factor $(c\tau+d)^k=(-1)^k$ in the weight-$k$ transformation law ([[def-modular-group-action-on-the-upper-half-plane]], [[def-level-one-modular-form-and-cusp-form]]).

## Verification

1.1 Applying the modular transformation law to $\gamma=-I$ gives $f(\tau)=(-1)^kf(\tau)=-f(\tau)$ for every $\tau\in\mathfrak H$, since $k$ is odd. [F1, given, algebra]

2.1 Hence $2f(\tau)=0$ for every $\tau$, so $f=0$; thus $M_k=\{0\}$ for odd $k$. Since a cusp form of weight $k$ is in particular a modular form of weight $k$, also $S_k=\{0\}$. [step 1.1, given, algebra] ∎
