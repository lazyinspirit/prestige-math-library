---
title: External straightening and symmetric monoidal criteria
status: draft
research_item: thm-author-c5bc2838d897-monoidal-transport-straightening-input
dependency_level: 0
---

PDF p. 3: Strong monoidal transports from the common product-base family

## Prerequisites

None.

## Statement
For any infinity-category $D$, straightening gives an equivalence $\mathrm{Coc}(D)\simeq\mathrm{Fun}(D,\mathrm{Cat}_\infty)$, where $\mathrm{Coc}(D)$ has cocartesian fibrations as objects and functors over $D$ preserving cocartesian arrows as morphisms. Functor categories satisfy exponential currying $\mathrm{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\mathrm{Fun}(B,\mathrm{Fun}(S,\mathrm{Cat}_\infty))$.

For $S=N(\mathrm{Fin}_*)$, a cocartesian fibration $C^\otimes\to S$ is a symmetric monoidal infinity-category exactly when its inert maps $\rho_i:\langle n\rangle\to\langle1\rangle$ give $C_n\simeq C_1^n$ for every $n\geq0$, with $C_0$ terminal. Maps over $S$ preserving all cocartesian arrows are strong symmetric monoidal functors, including equivalence of their tensor and unit comparisons.

Let $f:(C,V)\to(D,W)$ satisfy all four conditions of Hinich Definition 2.1.1, with saturated markings, and let $F^+:D\to\mathrm{Cat}_\infty^+$ classify its marked fibers. The composite $L\circ F^+:D\to\mathrm{Cat}_\infty$ sends $W$ to equivalences and extends to $\overline F:L(D,W)\to\mathrm{Cat}_\infty$. The localized family $L(C,V)\to L(D,W)$ is the unstraightening of $\overline F$. Its pullback to $D$ is classified by $L\circ F^+$ and has the localized fibers. These are constructions of whole cocartesian families and their localization map. If $W$ consists of equivalences, $L(D,W)\simeq D$, giving the original-base special case. The explicit marked-cocartesian hypotheses and, in the monoidal application, preservation of componentwise markings by active tensor transports remain required.

## Source contract
**Given:** Categories in fixed suitable universes, genuinely cocartesian families, and the stated Segal and marking conditions where used.

**Goal:** Import the standard family/functor dictionary and exact strong monoidal criterion.

[F1] Hinich §2.1.5, equation (31), supplies Coc(D)≃Fun(D,Cat∞) with cocartesian-preserving maps. Its §2.2.2–2.2.6 proves the actual family-localization assertion.

[F2] HTT Notation 1.2.7.2 and Proposition 1.2.7.3 supply functor infinity-categories; currying is their defining simplicial exponential identity.

[F3] HA Definition 2.0.0.7 and Definition 2.1.3.7 supply precisely the Segal and strong symmetric monoidal conditions, including the nullary unit.

## External input
Import [F1]–[F3] with the frontmatter reading limits. This standard formal input does not supply a product-base family in an application: that must actually have been constructed, with its hypotheses verified. No identification of separately existing functors is part of this import.
