---
id: def-axiom-schema-of-replacement
kind: definition
title: "The Axiom Schema of Replacement: for each formula $\\varphi$, if $\\varphi$ defines a class function on $A$ then its image on $A$ is a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: [def-replacement-schema]
landmark: false
short: "Replacement schema"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 10"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom schema of replacement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_schema_of_replacement"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

Let $\varphi(z, w, \bar p)$ be a formula of the language of set theory
([[def-language-of-set-theory]]) in which $A$ and $B$ do not occur free. The
**Replacement instance** for $\varphi$ is the sentence

$$\forall \bar p\,\forall A\,\Bigl(\forall z\,\bigl(z \in A \to \exists! w\,\varphi(z,w,\bar p)\bigr) \to \exists B\,\forall w\,\bigl(w \in B \leftrightarrow \exists z\,(z \in A \wedge \varphi(z,w,\bar p))\bigr)\Bigr).$$

The **Axiom Schema of Replacement** is the collection of all these sentences, one
for each such $\varphi$. In words: if for every $z \in A$ there is exactly one
$w$ with $\varphi(z,w,\bar p)$, then there is a set $B$ whose elements are
exactly those $w$.

## Remarks

- **The class-function reading.** A formula $\varphi(z,w,\bar p)$ satisfying
  $\forall z \in A\ \exists! w\,\varphi(z,w,\bar p)$ assigns to each $z \in A$ a
  single $w$, so it behaves like a function on $A$ without being a set of ordered
  pairs; it is called a **class function** on $A$. The instance says that the
  image of a set under a class function is a set. The hypothesis is required only
  on $A$: what $\varphi$ does outside $A$ is irrelevant.

- **Replacement yields Separation, given a set with no elements.** Fix a set $x$
  and a formula $\psi(z,\bar p)$. If some $c \in x$ satisfies $\psi(c,\bar p)$,
  then
  $\varphi(z,w,\bar p,c) := (\psi(z,\bar p) \wedge w = z) \vee (\neg\psi(z,\bar p) \wedge w = c)$
  assigns exactly one $w$ to each $z \in x$, so an instance of this schema
  applied to $x$ returns the set of those $w$; that set is exactly the one
  [[def-axiom-schema-of-separation]] asserts, since the value $c$ contributed by
  the second disjunct itself satisfies $\psi$. If instead no $c \in x$ satisfies
  $\psi(c,\bar p)$, the set to be produced has no elements, and a set with no
  elements is asserted outright by [[def-axiom-of-infinity]]. The case split is
  not avoidable: the hypothesis of the schema demands a value at **every**
  $z \in x$, so the collection being separated cannot itself be taken as the
  domain. Separation is nevertheless stated separately, because every
  construction on this page uses Separation and no construction on this page
  needs the full strength of Replacement.

- **Where Replacement is genuinely needed.** Nothing on this page consumes it;
  [[rem-which-axiom-each-construction-uses]] records that. It becomes
  indispensable for transfinite recursion and for the ordinal and cardinal
  hierarchies, where the sets constructed are not subsets of any set already in
  hand.
