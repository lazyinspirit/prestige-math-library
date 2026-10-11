---
id: ex-complement-of-a-countable-set-of-reals-is-uncountable
kind: example
title: "The complement of an at most countable set of reals is uncountable"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-countable, def-equinumerous, def-injection-surjection-bijection,
       lem-countable-iff-surjection-from-n, thm-r-uncountable, thm-n-cross-n-countable,
       def-subset-and-proper-subset, def-set-difference-and-symmetric-difference,
       def-complete-ordered-field, def-ordered-field, lem-of-q-embeds,
       thm-rationals-countable, thm-of-archimedean, lem-of-q-dense, cor-irrationals-uncountable,
       def-axiom-of-extensionality]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§1.4, the paragraph after Theorem 1.4.2, printed p. 42: there are a lot more irrational numbers than rational numbers, R being uncountable and Q countable"
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§2.2, the paragraph after Theorem 2.5, printed p. 25: since R is uncountable there are many 'more' irrational numbers than rationals"
---

## Example

Let $C \subseteq \mathbb{R}$ be at most countable ([[def-countable]]). Then
$\mathbb{R} \setminus C$ is **uncountable** ([[def-countable]]). In particular
deleting finitely many reals, or all rationals, leaves an uncountable set
([[cor-irrationals-uncountable]]), even though the deleted set may be dense
([[lem-of-q-dense]]). The proof is the two-set union argument and spends no
choice principle — in contrast to the countable-union theorem on its parent
page, which assumes the Axiom of Countable Choice for countable families.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]), the canonical embedding $\varepsilon : \mathbb{Q} \to \mathbb{R}$ ([[lem-of-q-embeds]]), and an at most countable set $C \subseteq \mathbb{R}$ ([[def-subset-and-proper-subset]]).

[F1] $A$ is at most countable when $A$ is finite or countably infinite, and uncountable when it is not at most countable ([[def-countable]]); a nonempty at most countable set is a surjective image of $\mathbb{N}$, and a surjective image of $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[def-injection-surjection-bijection]]).

[F2] $\mathbb{R}$ admits no surjection from $\mathbb{N}$; equivalently $\mathbb{R}$ is uncountable ([[thm-r-uncountable]], [[def-countable]]).

[F3] $x \in \mathbb{R} \setminus C$ exactly when $x \in \mathbb{R}$ and $x \notin C$; hence $\mathbb{R} = C \cup (\mathbb{R} \setminus C)$, because every $x$ either lies in $C$ or does not ([[def-set-difference-and-symmetric-difference]], [[def-axiom-of-extensionality]]).

[F4] The pairing of [[thm-n-cross-n-countable]] gives a bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F5] The rationals embedded in $\mathbb{R}$ are at most countable: $\varepsilon$ is injective and $\mathbb{Q} \approx \mathbb{N}$ ([[lem-of-q-embeds]], [[thm-rationals-countable]]). Since $\mathbb{R}$ is complete, it is Archimedean ([[thm-of-archimedean]]), so the embedded rationals are dense in $\mathbb{R}$ ([[lem-of-q-dense]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{R} \setminus C$ is nonempty. If it were empty then $\mathbb{R} \subseteq C$ by [F3], so $C = \mathbb{R}$ and $\mathbb{R}$ would be at most countable, contradicting [F2]. [F1, F2, F3]

2.1 Suppose, for contradiction, that $\mathbb{R} \setminus C$ were at most countable. If $C = \varnothing$ then $\mathbb{R} = \mathbb{R} \setminus C$ is at most countable, contradicting [F2]; so $C \ne \varnothing$. By step 1.1 the complement is nonempty too, so [F1] gives surjections $f : \mathbb{N} \to C$ and $g : \mathbb{N} \to \mathbb{R} \setminus C$. Define $t : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ by $t(0,k) := f(k)$ and $t(\sigma(i),k) := g(k)$. Every real lies in $C$ or in $\mathbb{R} \setminus C$ by [F3], and such a real is $f(k)$ or $g(k)$, hence a value of $t$; so $t$ is onto. Composing with the bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [F4] gives a surjection $\mathbb{N} \to \mathbb{R}$, contradicting [F2]. Hence $\mathbb{R} \setminus C$ is not at most countable, that is, it is uncountable. [step 1.1, F1, F2, F3, F4]

3.1 The special cases follow: if $C$ is finite then it is at most countable and $\mathbb{R} \setminus C$ is uncountable; if $C$ is the set of embedded rationals then $\mathbb{R} \setminus C$ is the set of irrationals, uncountable, and this agrees with [[cor-irrationals-uncountable]]; the deleted set may be dense, since the embedded rationals are dense by [F5], yet its complement is uncountable. [F5, step 2.1]

4.1 Therefore the complement of an at most countable subset of $\mathbb{R}$ is uncountable. The argument instantiates at most two surjections existentially and uses the criterion [[lem-countable-iff-surjection-from-n]], whose own proof is choice-free, so no choice principle is used; this is why the result does not need the Axiom of Countable Choice that the countable-union theorem of this page assumes for general countable families. [step 2.1, step 3.1, F1] ∎

## Remarks

- The two-set interleaving is the same device as in [[ex-rationals-in-an-interval]]: two given enumerations, one for each part, are combined into one surjection onto the union. Nothing about the structure of $C$ is used beyond its cardinality, so the statement applies verbatim to finite sets, to the rationals, and to any at most countable set of reals.

- The contrast with [[thm-countable-union-of-countable]] is genuine and worth stating: that theorem assumes the Axiom of Countable Choice because it selects one surjection for each member of a countable family, whereas here the two surjections are finitely many and given, so the union of the two sets is handled by a single explicit pairing.
