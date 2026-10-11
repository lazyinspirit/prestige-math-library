---
id: ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal
kind: example
title: "The Hartogs number of $\\omega$ is a limit ordinal above $\\omega$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [thm-hartogs, def-limit-ordinal, def-countable, lem-subset-of-countable,
       def-equinumerous, def-ordinal, lem-ordinal-basics,
       lem-omega-least-limit-ordinal, thm-omega-is-peano-system,
       def-natural-numbers, def-injection-surjection-bijection,
       def-order-isomorphism, def-well-order, thm-mostowski-collapse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 9, Theorem 9.6 and the sentence identifying $\\omega_1$ as the least uncountable ordinal; Section 10 (cofinality)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 6, Theorem 6.6 (Hartog ordinal); Section 7 (countability of a set means cardinality at most $\\omega$)"
verification:
  precheck: pass
---

## Example

Let $H=\aleph(\omega)$ be the least ordinal that admits no injection into
$\omega$ ([[thm-hartogs]]). Then $H$ is a limit ordinal
([[def-limit-ordinal]]) with $\omega\in H$, so $\omega<H$, and $H$ is
uncountable ([[def-countable]]); explicitly $H=\{\alpha:\alpha\ \text{is at
most countable}\}$ is the set of countable ordinals, and $H$ is not the
successor of any ordinal. No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}=\omega$, the Hartogs number $H=\aleph(\omega)$, namely the least ordinal that admits no injection into $\omega$, and $\{\mathrm{ot}(S,R):S\subseteq\omega,\ R\ \text{well-orders}\ S\}$ for it ([[thm-hartogs]]).

[F1] $\aleph(A)$ is the least ordinal that does not inject into $A$, and it equals the set of order types of well-orders of subsets of $A$; no choice is used ([[thm-hartogs]]).

[F2] A set is finite when it is equinumerous with some natural number, countably infinite when equinumerous with $\mathbb{N}=\omega$, at most countable when finite or countably infinite, and uncountable when not at most countable; $\approx$ is equinumerosity and $\preceq$ domination by an injection ([[def-countable]], [[def-equinumerous]]).

[F3] Subsets of at most countable sets are at most countable ([[lem-subset-of-countable]]).

[F4] An ordinal is a nonzero set that is either a successor ordinal $\beta^{+}=\beta\cup\{\beta\}$ or, when nonzero and not a successor, a limit ordinal; $0$ is an ordinal ([[def-limit-ordinal]], [[def-ordinal]]).

[F5] Every element of an ordinal is an ordinal, $\alpha\notin\alpha$, and $\alpha\subseteq\beta$ if and only if $\alpha\in\beta$ or $\alpha=\beta$, for ordinals ([[lem-ordinal-basics]]).

[F7] $\omega=\mathbb{N}$ is an ordinal, every element of $\omega$ is a natural number, and every natural number is an ordinal ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[F8] In $(\mathbb{N},0,\sigma)$: $\sigma(n)\ne0$ for every $n$, and $\sigma$ is injective ([[thm-omega-is-peano-system]]).

[F9] A function is injective when it never takes equal values at distinct arguments, and bijective when it is injective and onto; an injection is a bijection onto its image ([[def-injection-surjection-bijection]]).

[F10] Every well-order is order isomorphic to exactly one ordinal, its order type ([[thm-mostowski-collapse]]); an order isomorphism is a bijection preserving and reflecting the order ([[def-order-isomorphism]]), and a well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

## Verification

**Proof technique:** direct.

1.1 Transport of well-orders along an injection: if $\alpha$ is an ordinal and $j:\alpha\to\omega$ is injective, then $S=j[\alpha]\subseteq\omega$ and $R=\{(j(\xi),j(\eta)):\xi\in\eta\}$ well-order $S$, the map $j$ is an order isomorphism of $(\alpha,\in)$ onto $(S,R)$, and $\mathrm{ot}(S,R)=\alpha$. Indeed $j$ is a bijection onto $S$; $R$ is irreflexive since $\xi\notin\xi$; $R$ is transitive and trichotomous because membership on the ordinal $\alpha$ is; and a nonempty $T\subseteq S$ has $j^{-1}[T]$ nonempty with an $\in$-least element $\xi$, whose image $j(\xi)$ is $R$-least in $T$. Since $j(\xi)\mathrel{R}j(\eta)$ holds exactly when $\xi\in\eta$ by injectivity, $j$ preserves and reflects the order and [F10] identifies $\mathrm{ot}(S,R)$ with $\alpha$. [F5, F9, F10]

1.2 For every ordinal $\alpha$: $\alpha\preceq\omega$ if and only if $\alpha$ is at most countable. If $j:\alpha\to\omega$ is injective, then $j$ is a bijection of $\alpha$ onto the subset $j[\alpha]\subseteq\omega$, which is at most countable by [F3], so $\alpha$ is at most countable because the three size classes of [F2] are defined by equinumerosity; conversely, if $\alpha$ is finite then $\alpha\approx m$ for some natural number $m$, and $m\subseteq\omega$ gives an injection $\alpha\to\omega$ by composition, while if $\alpha$ is countably infinite then $\alpha\approx\mathbb{N}=\omega$ gives one directly. [F2, F3, F7, F9]

2.1 $H=\{\alpha:\alpha\ \text{is an ordinal and}\ \alpha\preceq\omega\}$: if $\alpha=\mathrm{ot}(S,R)$ for a subset $S\subseteq\omega$ well ordered by $R$, the order isomorphism $\alpha\to S$ is injective into $\omega$; conversely an injection $j:\alpha\to\omega$ produces $S=j[\alpha]$ and $R$ with $\mathrm{ot}(S,R)=\alpha$ by step 1.1, so $\alpha$ is one of the order types displayed in [F1]. [step 1.1, F1, F9, F10]

3.1 $H$ is the set of at most countable ordinals and admits no injection into $\omega$: by step 2.1 and step 1.2 an ordinal $\alpha$ lies in $H$ exactly when it is at most countable, and by [F1] the ordinal $H$ itself does not inject into $\omega$. [step 2.1, step 1.2, F1]

3.2 $\omega\in H$ and $H\ne0$: the identity is an injection $\omega\to\omega$, so $\omega\preceq\omega$ and hence $\omega\in H$ by step 2.1; therefore $H$ has a member and is not the ordinal $0$, which has none. [step 2.1, F4]

4.1 $H$ is not a successor ordinal: suppose $H=\alpha^{+}=\alpha\cup\{\alpha\}$ for an ordinal $\alpha$. Then $\alpha\in H$, so $\alpha\preceq\omega$ by step 2.1, say through an injection $j:\alpha\to\omega$. Define $g$ on the domain $\alpha^{+}$ by $g(\beta)=\sigma(j(\beta))$ for $\beta\in\alpha$ and $g(\alpha)=0$; this is well defined because $\alpha\notin\alpha$, its values lie in $\omega$ because $\omega$ is inductive, and it is injective: the value $0$ is taken only at $\alpha$ since $\sigma(n)\ne0$ for every $n$, and on $\alpha$ the map is $\sigma$ composed with the injective $j$, hence injective. So $H=\alpha^{+}$ would inject into $\omega$, contradicting that $H$ admits no injection into $\omega$ by step 3.1. [step 3.1, F4, F5, F7, F8, F9]

5.1 $H$ is a limit ordinal with $\omega\in H$, and it is the set of countable ordinals: $H$ is an ordinal by [F1], it is nonzero by step 3.2 and not a successor by step 4.1, so it is a limit ordinal by [F4]; $\omega\in H$ by step 3.2, so $\omega<H$ in the ordinal order of [F5]; the identification $H=\{\alpha:\alpha\ \text{at most countable}\}$ is step 3.1, and $H$ itself is uncountable because it is the least ordinal that does not inject into $\omega$ and an at most countable ordinal would inject into $\omega$ by step 1.2. [step 1.2, step 3.1, step 3.2, step 4.1, F1, F2, F4, F5]

6.1 Everything claimed is established: $H=\aleph(\omega)$ is a limit ordinal with $\omega\in H$, explicitly the set of at most countable ordinals, hence uncountable and not a successor; the argument used only the transport of well-orders along injections, Schröder-free counting, and the Peano properties of $\sigma$, all choice free, so no choice principle is used. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, F1] ∎
