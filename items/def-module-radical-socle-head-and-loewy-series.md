---
id: def-module-radical-socle-head-and-loewy-series
kind: definition
title: "The radical, socle, head, and Loewy series of a finite-dimensional module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-module-radical-is-jacobson-radical-times-the-module, def-socle-of-a-module, def-quotient-module, def-simple-module]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $A$ be a finite-dimensional algebra and $M$ a finite-dimensional left
$A$-module.

- Its **radical** is
  $$   \operatorname{rad}(M)=J(A)M,   $$
  equivalently the intersection of the maximal submodules, by
  [[thm-module-radical-is-jacobson-radical-times-the-module]].

- Its **socle** $\operatorname{Soc}(M)$ is the sum of all simple submodules, as
  in [[def-socle-of-a-module]].

- Its **head** or **top** is the quotient
  $$   \operatorname{hd}(M):=M/\operatorname{rad}(M),   $$
  formed using [[def-quotient-module]].

- Its **Loewy series** is the descending radical filtration
  $$   M\supseteq \operatorname{rad}(M)\supseteq \operatorname{rad}^2(M)\supseteq\cdots   $$
  together with the corresponding semisimple layers
  $\operatorname{rad}^i(M)/\operatorname{rad}^{i+1}(M)$.

The simple subquotients appearing in the Loewy layers are simple in the sense
of [[def-simple-module]].
