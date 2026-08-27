---
id: def-augmentation-map-and-augmentation-ideal-of-a-group-ring
kind: definition
title: "The augmentation map $\\varepsilon:R[G]\\to R$ and the augmentation ideal $I_G=\\ker\\varepsilon$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-ring, def-ring-homomorphism, thm-group-ring-is-a-unital-algebra-with-basis-g, thm-ring-homomorphism-kernel-is-an-ideal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 6 Section 6.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $G$ be a group. For an element of
$R[G]$ written uniquely as a finite sum
$$x=\sum_{g \in F} r_g[g]$$
([[def-group-ring]]), define the **augmentation map**
$$\varepsilon:R[G]\longrightarrow R,\qquad \varepsilon(x):=\sum_{g \in F} r_g.$$

Because the expansion in the basis $\{[g]\}$ is unique, this is a well-defined
$R$-linear map. It is also a ring homomorphism in the sense of
[[def-ring-homomorphism]]: additivity is immediate, it sends $[e]$ to $1_R$, and if
$x=\sum_g r_g[g]$ and $y=\sum_h s_h[h]$, then
$$\varepsilon(xy)=\sum_{g,h} r_gs_h=\left(\sum_g r_g\right)\left(\sum_h s_h\right)=\varepsilon(x)\varepsilon(y)$$
by the multiplication formula supplied by
[[thm-group-ring-is-a-unital-algebra-with-basis-g]].

The **augmentation ideal** of $R[G]$ is the kernel
$$I_G:=\ker\varepsilon,$$
which is a two-sided ideal by
[[thm-ring-homomorphism-kernel-is-an-ideal]].

## Remarks

- The basis element $[g]$ always satisfies $\varepsilon([g])=1_R$.

- When $G$ is finite, the element $\sum_{g \in G}[g]$ is the image under the
  basis sum of the constant function $1$ on $G$.
