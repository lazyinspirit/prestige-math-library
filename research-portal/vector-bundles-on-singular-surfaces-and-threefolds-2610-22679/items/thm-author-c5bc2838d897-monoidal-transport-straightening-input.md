---
id: thm-author-c5bc2838d897-monoidal-transport-straightening-input
kind: theorem
title: External straightening and symmetric monoidal criteria
status: published
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Vladimir Hinich, Dwyer–Kan localization revisited
      url: https://arxiv.org/pdf/1311.4128v4
      locator: §2.1.5, equivalence (31); Lemma 2.1.6; Proposition 2.1.4 and proof
        §2.2.2–2.2.6; Definition 3.2.1 and Proposition 3.2.2
      statement: Coc(D), whose maps preserve cocartesian arrows, is equivalent to
        Fun(D,Cat∞). A marked cocartesian family localizes over L(D,W),
        classified by the extension of L∘F⁺ to that base. Its pullback to D is
        classified by L∘F⁺, with localized fibers. Under active-tensor
        preservation of markings, localization over Fin_* is symmetric monoidal.
      hypotheses: For family localization the four conditions of Definition 2.1.1 are
        required, with saturated markings. For the monoidal assertion every
        active Fin_* transport must preserve the componentwise marking.
        Cocartesian fibrations may be presented up to equivalence in Cat∞ as
        explicitly explained in Definition 2.1.3.
      reading_limits: Current adjudication read Definition 2.1.1, Proposition 2.1.4,
        §2.1.5–2.1.6 and §2.2.2–2.2.5, and Definition 3.2.1/Proposition 3.2.2.
        Equation (33) and the immediately following pullback description fix the
        changed assertion. Earlier authoring reported broader reading; no new
        reconstruction of the straightening model structures or all of §2.2.6 is
        claimed.
    - title: Jacob Lurie, Higher Algebra
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 2.0.0.7; Remark 2.1.2.19–20; Definition 2.1.3.7 and its
        preceding discussion
      statement: A cocartesian fibration over N(Fin_*) is symmetric monoidal when its
        inert Segal maps identify the nth fiber with the nth power of the first,
        including the terminal zeroth fiber. A functor over N(Fin_*) preserving
        all cocartesian edges is symmetric monoidal; its tensor and unit
        comparison maps are equivalences.
      hypotheses: Cocartesian fibrations of infinity-categories over N(Fin_*), Segal
        condition for every n≥0, and functors preserving all cocartesian edges,
        not merely the inert ones.
      reading_limits: Read the complete stated definitions, surrounding discussion of
        tensor/unit comparisons and Remarks 2.1.2.19–20. No reconstruction of
        the general infinity-operad foundations is claimed.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Notation 1.2.7.2 and Proposition 1.2.7.3; see Hinich §2.1.5 for
        straightening
      statement: The simplicial exponential Fun(S,C) is the functor infinity-category
        when C is an infinity-category. Exponential currying gives
        Fun(B×S,C)≅Fun(B,Fun(S,C)).
      hypotheses: S,B simplicial sets and C an infinity-category, in compatible
        universes. The currying identity is the ordinary exponential identity of
        simplicial sets.
      reading_limits: Read the notation and displayed functor-category statement. The
        currying identity follows directly from the definition
        (Fun(S,C))_n=Hom(S×Δⁿ,C), not from a separate comparison theorem.
dependency_level: 0
---

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
