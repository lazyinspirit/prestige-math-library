---
id: def-kernel-of-a-complex-character
kind: definition
title: "The kernel of a complex character"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-of-a-complex-representation]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.1.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Shani Meynet and Robert Moscrop, McKay quivers and decomposition, Appendix A.3"
      url: "https://link.springer.com/article/10.1007/s11005-023-01685-9"
---

## Definition

Let $\rho:G\to\operatorname{GL}(V)$ be a finite-dimensional complex
representation of a finite group $G$, with character
$\chi=\chi_V$
([[def-character-of-a-complex-representation]]). The **kernel of the
character** is

$$\ker\chi:=\bigl\{\,g\in G\;:\;\chi(g)=\chi(1)\,\bigr\}.$$

The value $\chi(1)$ is the reference point of the definition, not a random
number: [[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]
proves that this set equals the kernel $\ker\rho$ of the representation, so the
two readings of "kernel" never conflict on this page.
