---
id: def-morphism-of-group-extensions
kind: definition
title: "Morphisms of group extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient, def-group-homomorphism]
verification:
  precheck: n/a
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

## Definition

Let

$$1\to N_1\xrightarrow{i_1}E_1\xrightarrow{\pi_1}Q_1\to1,\qquad 1\to N_2\xrightarrow{i_2}E_2\xrightarrow{\pi_2}Q_2\to1$$

be group extensions. A **morphism of extensions** is a commuting diagram of
group homomorphisms ([[def-group-homomorphism]])

$$ \begin{array}{ccccccccc} 1&\to&N_1&\xrightarrow{i_1}&E_1&\xrightarrow{\pi_1}&Q_1&\to&1\\ &&\downarrow\alpha&&\downarrow\beta&&\downarrow\gamma\\ 1&\to&N_2&\xrightarrow{i_2}&E_2&\xrightarrow{\pi_2}&Q_2&\to&1. \end{array} $$

When $N_1=N_2=N$, $Q_1=Q_2=Q$, $\alpha=\operatorname{id}_{N}$, and
$\gamma=\operatorname{id}_{Q}$, and when the middle map $\beta$ is an
isomorphism, this is exactly the equivalence relation of
[[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]].
