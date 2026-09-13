---
id: def-difference-cochain-between-two-cellular-extensions
kind: definition
title: Difference cochain between two cellular extensions
status: published
origin: pipeline
deps: ["def-primary-cellular-obstruction-cochain", "def-cofibration-and-homotopy-extension-property"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Lemma 7.8 and Equation 7.2, printed pages 172--173
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Theorem 15.3 proof, printed pages 49--50
---

## Definition

Retain the abelian coefficient hypotheses of the primary obstruction. Let
$f_0,f_1:X^n\cup A\to Y$ and supply a homotopy

$$ H:(X^{n-1}\cup A)\times I\longrightarrow Y $$

from their restrictions. Give every prism $e^n\times I$ the product
orientation with the interval last, so

$$ \partial(e^n\times I)=(\partial e^n)\times I+(-1)^n(e^n\times\{1\}-e^n\times\{0\}). $$

The maps $f_0$ on the bottom, $H$ on the side, and $f_1$ on the top define
a map from the boundary sphere of each prism to $Y$. Transport its homotopy
class to the $f_0^*\Pi_nY$ coordinate using the basepoint track of $H$.
With the sign convention of Davis--Kirk, define

$$ d(f_0,H,f_1)(e^n)=(-1)^{n+1}\,[f_0\cup H\cup f_1]_{\partial(e^n\times I)}. $$

These values form the **difference cochain**

$$ d(f_0,H,f_1)\in C^n_{\mathrm{cell}}(X,A;f_0^*\Pi_nY). $$

The homotopy $H$ supplies the canonical natural identification between the
coefficient systems of $f_0$ and $f_1$. The orientation sign is chosen so
that the next theorem has the exact formula
$\delta d=\theta(f_0)-\theta(f_1)$.

