---
title: External classical coefficient, derived Yoneda and effective-localization
  interface
status: published
research_item: thm-author-59b1a831fe59-classical-derived-input
dependency_level: 0
---

PDF p. 7: Lemma2.9: smooth-point supported purity

## Prerequisites

- [Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology: derived coefficient evaluation · Theorem13.1 and Lemma13.4 with full printed proof pp101–102/PDF112–113; Exercise13.5 p102; Proposition13.10 and Example13.11 p103/PDF114; Definition14.6/equation14.6.1 pp115–116; Propositions14.8/14.9, Theorem14.11 and Remark14.12 pp116–117; Proposition14.16 p118/PDF129.](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)
- [MVW, Tate coefficients and negative-weight convention · Definition3.1 p23/PDF34; Example8.10 p60/PDF71; Definition14.2 p113/PDF124 and Lemma14.4 p114/PDF125; Sm/k convention p5/PDF16.](https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf)

## Statement
Over a perfect field, let $\mathcal A$ be the category of Nisnevich sheaves with transfers on smooth separated finite-type schemes, with integral coefficients. For $j\geq0$, the classical complex $\mathbb Z(j)$ is bounded above and A¹-local. Its actual restriction functor is naturally modeled by
$$R\Gamma_{\mathrm{Zar}}(Y,\mathbb Z(j))\simeq R\Gamma_{\mathrm{Nis}}(Y,\mathbb Z(j))\simeq R\operatorname{Hom}_{D(\mathcal A)}(\mathbb Z_{\mathrm{tr}}(Y),\mathbb Z(j)).$$
The first comparison is the canonical topology-change map, not a chosen isomorphism of groups; the second is derived Yoneda evaluation. Against an A¹-local target, localization identifies Hom in $D^-(\mathcal A)$ with Hom in $DM^{\mathrm{eff},-}_{\mathrm{Nis}}$. These comparisons are natural for actual open maps, and derived Hom takes a cone in the source to the corresponding restriction fiber.

The Tate convention is $\mathbb Z(r)=C_*\mathbb Z_{\mathrm{tr}}(\mathbb G_m^{\wedge r})[-r]$ for $r\geq0$. In the motive category this is the $r$-fold tensor power of $\mathbb Z(1)$, so $\mathbb Z(r)(d)\cong\mathbb Z(r+d)$ for $r,d\geq0$. Classical negative weights are zero by MVW Definition3.1. The current EM construction itself has weights $j\geq0$; extending its notation by zero for $j<0$ is an explicit convention, not another EM construction.

## Source contract
**Given:** Perfect field, integral coefficients, the source's bounded-above effective category, smooth separated finite-type $Y$, AC and fixed small sites/universes.

**Goal:** Import the concrete classical coefficient model needed for the exact restriction/Hom calculation.

[F1] MVW13.1/13.4 give the sheaf-with-transfers category, enough injectives and actual Yoneda evaluation;13.5 describes its complex version. MVW13.10–13.11 give the canonical Zariski/Nisnevich comparison;14.6.1,14.8–14.12 and14.16 give A¹-local models and representability.

[F2] MVW Definition3.1, Example8.10, Definition14.2 and Lemma14.4 give the stated coefficient and Tate tensor conventions: singular-complex replacement is an A¹-equivalence, while pointed representables tensor as the smash product. This identifies $\mathbb Z(r)(d)$ with $\mathbb Z(r+d)$ in the motive category.

## External input
Import [F1]–[F2] as the concrete derived coefficient package. At the chain level, the derived Yoneda assertion is implemented by resolving the coefficient and using $\operatorname{Hom}(\mathbb Z_{\mathrm{tr}}(Y),I)=I(Y)$ termwise. Injective sheaves with transfers are Nisnevich-acyclic by13.4, and the complex derived-evaluation interpretation is the standard hyperext construction recorded in13.5; no isomorphism of unrelated group functors is used to choose a restriction arrow. The local relative-Hom lemma applies the actual cone to these Hom complexes. Foundational derived resolutions, A¹-locality and the comparison foundations are imports; this does not claim a new reconstruction of all motivic categories.
