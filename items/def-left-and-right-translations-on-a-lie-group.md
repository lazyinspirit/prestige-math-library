---
id: def-left-and-right-translations-on-a-lie-group
kind: definition
title: Left and right translations on a Lie group
status: draft
origin: pipeline
deps: ["def-lie-group"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 2.6, printed page 21; its right-action parameter is inverted relative to the translation convention here
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $G$ be a Lie group and fix $g\in G$. The **left translation by $g$**
and **right translation by $g$** are respectively

$$L_g:G\longrightarrow G,\qquad L_g(h)=gh,$$

and

$$R_g:G\longrightarrow G,\qquad R_g(h)=hg.$$

Both maps are smooth: each is obtained from the smooth multiplication
$m:G\times G\to G$ in [[def-lie-group]] by holding one argument fixed. The
notation here is the ordinary right-translation convention. Kirillov writes a
right *action* as $h\mapsto hg^{-1}$; therefore this page's $R_g$ is that
source's right action by $g^{-1}$.

The definition applies in dimensions zero and one and uses no metric or
nondegeneracy condition. A Lie group is nonempty, its manifold is boundaryless
by the page convention, and the one supplied element $g$ involves no choice
from a family.
