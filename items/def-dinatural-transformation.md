---
id: def-dinatural-transformation
kind: definition
title: 'Dinatural transformation between functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-opposite-category, def-product-category, def-functor-and-contravariant-functor, def-natural-transformation]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.1.1"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Definition 4.4.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ and $\mathcal D$ be categories ([[def-category]]) and let

$$P,Q:\mathcal C^{\mathrm{op}}\times\mathcal C\longrightarrow\mathcal D$$

be functors on the product of $\mathcal C^{\mathrm{op}}$ with $\mathcal C$
([[def-opposite-category]], [[def-product-category]],
[[def-functor-and-contravariant-functor]]). A morphism
$(a,b)\to(a',b')$ of $\mathcal C^{\mathrm{op}}\times\mathcal C$ is a pair
$(g,h)$ in which $h:b\to b'$ is a morphism of $\mathcal C$ and $g$ is a
morphism of $\mathcal C^{\mathrm{op}}$ from $a$ to $a'$, that is, a morphism
$a'\to a$ of $\mathcal C$. Thus a morphism $f:c\to c'$ of $\mathcal C$ supplies
the four morphisms

$$(f,1_c):(c',c)\to(c,c),\quad (1_{c'},f):(c',c)\to(c',c'),\quad (1_c,f):(c,c)\to(c,c'),\quad (f,1_{c'}):(c',c')\to(c,c').$$

A **dinatural transformation** $\alpha:P\to Q$ is a family of morphisms

$$\alpha_c:P(c,c)\longrightarrow Q(c,c)\qquad(c\in\operatorname{Ob}(\mathcal C))$$

of $\mathcal D$ such that every morphism $f:c\to c'$ of $\mathcal C$ satisfies
the **dinaturality equation**

$$Q(1_c,f)\circ\alpha_c\circ P(f,1_c)\;=\;Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$$

between morphisms $P(c',c)\to Q(c,c')$. The morphism $\alpha_c$ is the
**component** of $\alpha$ at $c$.

The two sides pass through the six objects $P(c',c)$, $P(c,c)$, $Q(c,c)$,
$P(c',c')$, $Q(c',c')$ and $Q(c,c')$, so the diagram expressing the
dinaturality equation is a six-sided cycle and is called **the hexagon**:

```tikzcd
& P(c,c) \arrow[r, "\alpha_c"] & Q(c,c) \arrow[dr, "Q(1_c{,}f)"] & \\
P(c',c) \arrow[ur, "P(f{,}1_c)"] \arrow[dr, "P(1_{c'}{,}f)"'] & & & Q(c,c') \\
& P(c',c') \arrow[r, "\alpha_{c'}"'] & Q(c',c') \arrow[ur, "Q(f{,}1_{c'})"'] &
```

## Remarks

A dinatural transformation is a family indexed by the objects of $\mathcal C$
and constrained by the morphisms of $\mathcal C$, exactly as a natural
transformation is ([[def-natural-transformation]]); what differs is which
constraint. A natural transformation between two functors on
$\mathcal C^{\mathrm{op}}\times\mathcal C$ is a family indexed by the *pairs*
$(a,b)$, and its naturality equation is imposed for every morphism of the
product category. A dinatural transformation has components only on the
diagonal, and the dinaturality equation is imposed only for the morphisms of
$\mathcal C$ that connect two diagonal entries through the two off-diagonal
entries displayed above.

At $f=1_c$ all four displayed morphisms of the product category are identities,
so the hexagon reads $\alpha_c=\alpha_c$. The identity morphisms of
$\mathcal C$ therefore impose no condition, and a dinatural transformation
carries no analogue of the identity clause of a functor.
