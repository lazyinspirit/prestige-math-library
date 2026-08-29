---
id: rem-standing-hypotheses-for-ordinary-character-theory
kind: remark
title: "Standing hypotheses for ordinary character theory: $G$ finite, $k=\\mathbb C$, and every representation finite-dimensional"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
aliases: []
verification:
  audited: 2026-08-29
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Remark

The ordinary-character-theory items on this page work inside the following
setting, fixed once here:
$G$ is a finite group, the base field is $k=\mathbb C$, and every
representation is finite-dimensional
([[def-finite-dimensional-representation-of-a-group-over-a-field]]). This is
ordinary character theory in the sense of Webb, Chapter 3 and Etingof et al.,
Section 3.3: no infinite group, unitary-representation, or modular-character
material is load-bearing in the character-theoretic arguments on the page.
The quotient-factorisation result
[[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]
is deliberately stated in the greater generality of an arbitrary group, field,
and representation because its proof needs none of these standing restrictions.

The choice of $k=\mathbb C$ is what makes the hypotheses of the published
representation-theory spine available. Since
$\operatorname{char}\mathbb C=0$ and $G$ is finite, the characteristic does
not divide $|G|$, so every finite-dimensional representation is completely
reducible
([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]),
and the field is algebraically closed, which feeds the count of irreducibles
against conjugacy classes
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).
These hypotheses are restated where they are consumed; the present remark fixes
the default scope without narrowing an item that explicitly states broader
hypotheses.
