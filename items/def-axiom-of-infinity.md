---
id: def-axiom-of-infinity
kind: definition
title: "The Axiom of Infinity: there is a set containing a set with no elements and closed under $y \\mapsto y \\cup \\{y\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
forward_refs: [def-inductive-set, def-natural-numbers]
aliases: []
landmark: false
short: "Infinity"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 9"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Infinity** is the sentence

$$\exists I\,\Bigl(\exists e\,\bigl(e \in I \wedge \neg\exists t\,(t \in e)\bigr) \wedge \forall y\,\bigl(y \in I \to \exists s\,(s \in I \wedge \forall t\,(t \in s \leftrightarrow (t \in y \vee t = y)))\bigr)\Bigr)$$

of the language of set theory ([[def-language-of-set-theory]]).

It is written here in $\in$ and $=$ alone, with no abbreviations, because the
notation it is usually stated in is introduced later on this page. Once that
notation is available, the sentence reads: there is a set $I$ with
$\varnothing \in I$ such that $y \in I$ implies $y \cup \{y\} \in I$. The first
conjunct is $\varnothing \in I$ written out, and the inner clause
$\forall t\,(t \in s \leftrightarrow (t \in y \vee t = y))$ says exactly that $s$
is $y \cup \{y\}$.

## Remarks

- **The only unconditional existence assertion on this page.** Extensionality
  and Foundation produce no sets at all, and every other axiom produces new sets
  from sets already given; this one asserts outright that a set $I$ with the two
  stated properties exists. Two results below say what its closure clause does:
  $y \cup \{y\}$ is never $y$, since $y$ is one of its elements while
  $y \notin y$ ([[thm-foundation-excludes-membership-cycles]]), and
  $y \mapsto y \cup \{y\}$ is injective
  ([[cor-the-successor-operation-is-injective]]).

- **Inductive sets and $\mathbb{N}$.** A set satisfying the two conjuncts above
  is what [[def-inductive-set]] calls **inductive**, and the natural numbers are
  built at [[def-natural-numbers]] as the smallest inductive set. Those items
  state the axiom in the abbreviated form; the sentence displayed above is the
  same assertion with the abbreviations expanded.
