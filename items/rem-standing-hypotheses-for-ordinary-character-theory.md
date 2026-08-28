---
id: rem-standing-hypotheses-for-ordinary-character-theory
kind: remark
title: "Standing hypotheses for ordinary character theory: $G$ finite, $k=\\mathbb C$, and every representation finite-dimensional"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Remark

Every item on this page works inside the following setting, fixed once here:
$G$ is a finite group, the base field is $k=\mathbb C$, and every
representation is finite-dimensional
([[def-finite-dimensional-representation-of-a-group-over-a-field]]). This is
ordinary character theory in the sense of Webb, Chapter 3 and Etingof et al.,
Section 3.3: no infinite group, unitary-representation, or modular-character
material is load-bearing anywhere on the page.

The choice of $k=\mathbb C$ is what makes the hypotheses of the published
representation-theory spine available. Since
$\operatorname{char}\mathbb C=0$ and $G$ is finite, the characteristic does
not divide $|G|$, so every finite-dimensional representation is completely
reducible
([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]),
and the field is algebraically closed, which feeds the count of irreducibles
against conjugacy classes
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).
These hypotheses are restated where they are consumed; the present remark only
fixes the global scope so that a finite group, the complex field, and finite
dimension are understood throughout without repetition.
