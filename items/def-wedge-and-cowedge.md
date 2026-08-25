---
id: def-wedge-and-cowedge
kind: definition
title: "Wedges and cowedges, and the categories they form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dinatural-transformation, def-constant-diagram-cone-cocone-and-cone-morphism, def-category, def-product-category, def-opposite-category]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.1.4 and Remark 1.1.5"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), §4.4"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor
([[def-product-category]], [[def-opposite-category]]) and let $d$ be an object
of $\mathcal D$ ([[def-category]]). Write $\Delta d$ for the constant functor
on $\mathcal C^{\mathrm{op}}\times\mathcal C$ at $d$
([[def-constant-diagram-cone-cocone-and-cone-morphism]]), which sends every
object to $d$ and every morphism to $1_d$.

A **wedge** from $d$ to $T$ is a dinatural transformation from a constant
functor to $T$ ([[def-dinatural-transformation]]), that is, a family

$$\omega_c:d\longrightarrow T(c,c)\qquad(c\in\operatorname{Ob}(\mathcal C))$$

such that every $f:c\to c'$ satisfies the **wedge equation**

$$T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$$

between morphisms $d\to T(c,c')$. Dually, a **cowedge** from $T$ to $d$ is a
dinatural transformation from $T$ to a constant functor, that is, a family

$$\rho_c:T(c,c)\longrightarrow d$$

such that every $f:c\to c'$ satisfies the **cowedge equation**

$$\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$$

between morphisms $T(c',c)\to d$. The object $d$ is the **vertex** of the wedge
or cowedge, and $\omega_c$, $\rho_c$ are its **components**.

A **morphism of wedges** $(d,\omega)\to(d',\omega')$ is a morphism $h:d\to d'$
of $\mathcal D$ satisfying $\omega'_c\circ h=\omega_c$ for every object $c$; a
**morphism of cowedges** $(d,\rho)\to(d',\rho')$ is a morphism $h:d\to d'$
satisfying $h\circ\rho_c=\rho'_c$ for every $c$. Identities of $\mathcal D$ are
morphisms of wedges and of cowedges, and a composite of two such morphisms
again satisfies the displayed equation, so wedges over $T$ and their morphisms
form a category $\operatorname{Wd}(T)$, and cowedges under $T$ and their
morphisms form a category $\operatorname{Cwd}(T)$; associativity and the
identity laws are inherited from $\mathcal D$.

## Remarks

The wedge and cowedge equations are the hexagon of
[[def-dinatural-transformation]] with one side made constant. For a wedge the
source is $\Delta d$, so both $\Delta d(f,1_c)$ and $\Delta d(1_{c'},f)$ are
$1_d$ and drop out; for a cowedge the target is $\Delta d$ and the two outer
morphisms on the target side drop out instead.

A wedge is not a cone over a diagram indexed by $\mathcal C$: its components sit
at the diagonal values $T(c,c)$ and its equation involves the two off-diagonal
values $T(c,c')$, whereas a cone
([[def-constant-diagram-cone-cocone-and-cone-morphism]]) has one component per
object of the index category and one equation per morphism, with no off-diagonal
term. The precise comparison between the two shapes is
[[thm-an-end-is-a-limit-over-the-twisted-arrow-category]], which replaces the
index category by another one.
