---
id: def-hnn-extension-and-stable-letter
kind: definition
title: "An HNN extension with its stable letter"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-group-presentation,
       def-free-product-of-a-family-of-groups, def-free-group,
       def-normal-closure, def-quotient-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Ian J. Leary, Subgroups of almost finitely presented groups"
      url: "https://link.springer.com/article/10.1007/s00208-018-1689-5"
---

## Definition

Let $A$ and $C$ be groups, and let

$$\alpha,\beta:C\to A$$

be injective group homomorphisms ([[def-group-homomorphism]]). Let $F(\{t\})$
be the free group on one generator and form the free product
$A\ast F(\{t\})$ ([[def-free-product-of-a-family-of-groups]],
[[def-free-group]]). The **HNN extension** of $A$ with associated edge maps
$\alpha,\beta$ is

$$\frac{A\ast F(\{t\})}{\left\langle\!\left\langle t\alpha(c)t^{-1}\beta(c)^{-1}:c\in C\right\rangle\!\right\rangle}.$$

Equivalently, in **relative-presentation notation**, it is

$$\left\langle A,t\ \middle|\ t\alpha(c)t^{-1}=\beta(c)\text{ for every }c\in C\right\rangle.$$

Thus the conjugacy relations are

$$t\,\alpha(c)\,t^{-1}=\beta(c)\qquad(c\in C).$$

If $A=\langle X\mid R\rangle$ is presented as in
[[def-group-presentation]], choose words $u_c,v_c\in F(X)$ representing
$\alpha(c),\beta(c)$ for each $c\in C$. The corresponding ordinary group
presentation is

$$\left\langle X,t \,\middle|\, R,\ t u_c t^{-1}v_c^{-1}\text{ for every }c\in C\right\rangle.$$

Different choices of $u_c,v_c$ differ by consequences of $R$, so they give
the same quotient. The relative notation avoids making any word-lift choice.

The new generator $t$ is the **stable letter**.
