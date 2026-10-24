---
id: ex-the-hartogs-number-of-a-finite-set
kind: example
title: "The Hartogs number of an $n$-element set is $n^{+}$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [thm-hartogs, lem-pigeonhole, thm-schroder-bernstein, def-equinumerous,
       def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy,
       lem-omega-least-limit-ordinal, def-natural-numbers,
       thm-mostowski-collapse, def-injection-surjection-bijection,
       def-well-order, def-order-isomorphism]
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
      locator: "Section 9, Theorem 9.6 (Hartogs' theorem) and Definition 9.4 (cardinals)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 6, Theorem 6.6 (Hartog ordinal); Section 7 (finite cardinals are the elements of $\\omega$)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Let $A\approx n$ for some natural number $n$ ([[def-equinumerous]],
[[def-natural-numbers]]). Then the Hartogs number $\aleph(A)$ of
[[thm-hartogs]] equals $n^{+}=n\cup\{n\}=\{0,1,\dots,n\}$: the set of order types
of well-orders of subsets of $A$ is exactly the set of ordinals $\alpha$ with
$\alpha\le n$, and $n^{+}$ is the least ordinal that does not inject into $A$.
In particular the cardinality of $A$ determines its Hartogs number, and no
choice principle is used.

## Facts & Assumptions

**Given:** A set $A$ with a bijection $A\approx n$ onto a natural number $n$, the ordinals of [[def-ordinal]], and the Hartogs number $\aleph(A)$ of [[thm-hartogs]], namely the least ordinal that admits no injection into $A$, equal to $\{\mathrm{ot}(S,R):S\subseteq A,\ R\ \text{well-orders}\ S\}$.

[F1] $\aleph(A)$ is the least ordinal that does not inject into $A$, and it equals the set of order types of the well-orders of subsets of $A$; this is proved without choice ([[thm-hartogs]]).

[F2] An ordinal is a transitive set on which $\in$ is a strict well-order, $\alpha^{+}=\alpha\cup\{\alpha\}$, every element of an ordinal is an ordinal, $\alpha\notin\alpha$, and for ordinals $\alpha,\beta$ one has $\alpha\subseteq\beta$ if and only if $\alpha\in\beta$ or $\alpha=\beta$ ([[def-ordinal]], [[lem-ordinal-basics]]).

[F3] For ordinals exactly one of $\alpha\in\beta$, $\alpha=\beta$, $\beta\in\alpha$ holds; every nonempty set of ordinals has an $\in$-least element; and $\alpha\le\beta$ means $\alpha\in\beta$ or $\alpha=\beta$ ([[lem-ordinal-trichotomy]], [[def-ordinal]]).

[F4] If $A\preceq B$ and $B\preceq A$ then $A\approx B$; the bijection is explicit and no choice is used ([[thm-schroder-bernstein]]).

[F5] $\approx$ means the existence of a bijection and $\preceq$ the existence of an injection ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F6] Every natural number is an ordinal, $\omega=\mathbb{N}$ is an ordinal, and every element of $\omega$ is a natural number; $\mathbb{N}$ is transitive ([[def-natural-numbers]], [[lem-omega-least-limit-ordinal]]).

[F7] If $n\approx m$ with $n,m\in\mathbb{N}$ then $n=m$; and $\mathbb{N}\not\approx n$ for every $n\in\mathbb{N}$ (claims 3 and 4 of [[lem-pigeonhole]]).

[F8] Every well-order is order isomorphic to exactly one ordinal, its order type; an order isomorphism exists exactly when the two well-orders have the same order type ([[thm-mostowski-collapse]]).

[F9] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]); an order isomorphism between posets is a surjective order embedding, equivalently a bijection $f$ with $x\le y\iff f(x)\le f(y)$ ([[def-order-isomorphism]]).

## Verification

**Proof technique:** direct.

1.1 Transport of well-orders along an injection: let $\alpha$ be an ordinal, let $j:\alpha\to A$ be injective, put $S=j[\alpha]$ and $R=\{(j(\xi),j(\eta)):\xi,\eta\in\alpha,\ \xi\in\eta\}$. Then $R$ is a well-order of $S$, the map $j$ is an order isomorphism of $(\alpha,\in)$ onto $(S,R)$, and $\mathrm{ot}(S,R)=\alpha$. Indeed $j$ is a bijection onto $S$; $R$ is irreflexive because no ordinal satisfies $\xi\in\xi$; $R$ is transitive as a relation and trichotomous because membership on $\alpha$ is; and a nonempty $T\subseteq S$ has $j^{-1}[T]$ nonempty in $\alpha$, whose $\in$-least element $\xi$ gives an $R$-least element $j(\xi)$ of $T$, since any $j(\eta)\in T$ with $j(\eta)\mathrel{R}j(\xi)$ would have $\eta\in\xi$ and contradict minimality. By construction $j(\xi)\mathrel{R}j(\eta)$ if and only if $\xi\in\eta$, using injectivity of $j$, so $j$ is an order isomorphism and [F8] gives $\mathrm{ot}(S,R)=\alpha$. [F2, F5, F8, F9]

1.2 For every ordinal $\alpha$: $\alpha\preceq A$ if and only if $\alpha\le n$. First, $A\approx n$, so an injection $\alpha\to A$ composed with a bijection $A\to n$ gives an injection $\alpha\to n$, and conversely an injection $\alpha\to n$ composed with a bijection $n\to A$ gives an injection $\alpha\to A$; hence $\alpha\preceq A$ if and only if $\alpha\preceq n$. Next $\alpha\preceq n$ if and only if $\alpha\le n$: if $\alpha\in n$ or $\alpha=n$ then $\alpha\subseteq n$ by [F2], so the inclusion is an injection; conversely assume $\alpha\preceq n$ and suppose $\alpha\not\le n$, so that $n\in\alpha$ by the trichotomy of [F3]. Then $n\subseteq\alpha$ because $\alpha$ is transitive, so $n\preceq\alpha$ by inclusion, and [F4] with $\alpha\preceq n$ gives $n\approx\alpha$. If $\omega\le\alpha$ then $\omega\subseteq\alpha$ by [F2], so $\omega\preceq\alpha\preceq n$, while $n\preceq\omega$ because $n\in\omega$ and $\omega$ is transitive; [F4] then gives $\omega\approx n$, contradicting [F7]. If instead $\alpha\in\omega$, then $\alpha$ is a natural number by [F6], and [F7] applied to $n\approx\alpha$ gives $\alpha=n$, so $\alpha\le n$, contrary to $n\in\alpha$ and [F2]; hence the supposition fails and $\alpha\le n$. [F2, F3, F4, F5, F6, F7]

1.3 The set $\{\alpha:\alpha\le n\}$ equals $n^{+}$: $\alpha\le n$ means $\alpha\in n$ or $\alpha=n$ by [F3], that is $\alpha\in n\cup\{n\}=n^{+}$ by [F2], and $n^{+}=n\cup\{n\}=\{0,1,\dots,n\}$ by the von Neumann convention of [F6]. [F2, F3, F6]

2.1 $\aleph(A)=\{\alpha:\alpha\ \text{is an ordinal and}\ \alpha\preceq A\}$. One inclusion: if $\alpha=\mathrm{ot}(S,R)$ for $S\subseteq A$ well ordered by $R$, then the order isomorphism $\alpha\to(S,R)$ of [F8] is injective with image $S\subseteq A$, so $\alpha\preceq A$. The other: if an ordinal $\alpha$ satisfies $\alpha\preceq A$, witnessed by an injection $j$, then step 1.1 produces $S=j[\alpha]\subseteq A$ and a well-order $R$ of $S$ with $\mathrm{ot}(S,R)=\alpha$, so $\alpha$ belongs to the set displayed in [F1]. [step 1.1, F1, F5, F8]

3.1 Therefore $\aleph(A)=n^{+}$: step 2.1 writes $\aleph(A)=\{\alpha:\alpha\ \text{is an ordinal and}\ \alpha\preceq A\}$ and step 1.2 turns this into $\{\alpha:\alpha\le n\}$, which is $n^{+}$ by step 1.3. Since $\aleph(A)$ is the least ordinal not injecting into $A$ by [F1], the ordinal $n^{+}$ is that least ordinal, and $\mathrm{ot}$ of the subsets of $A$ are exactly the ordinals up to $n$. [step 2.1, step 1.2, step 1.3, F1]

4.1 If $B\approx A$ then $\aleph(B)=\aleph(A)$: the hypothesis gives $B\approx n$ as well, so the same computation yields $\aleph(B)=n^{+}$. Thus the cardinality of a finite set determines its Hartogs number, which is the successor ordinal $n^{+}$ of its finite size $n$; nothing was selected at any stage, since the bijections and order types are given or unique by [F8], so no choice principle is used. [step 3.1, F1, F8, F9] ∎
