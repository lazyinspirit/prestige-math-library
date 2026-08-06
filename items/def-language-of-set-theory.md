---
id: def-language-of-set-theory
kind: definition
title: "The first-order language of set theory: $\\in$, $=$, formulas with parameters, and class abbreviations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: true
short: "the language of set theory"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016)"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

The **language of set theory** is first-order logic with equality whose only
non-logical symbol is a binary relation symbol $\in$. Its terms are the variables
$x, y, z, \dots$; its atomic formulas are $x \in y$ and $x = y$; and its formulas
are built from atomic formulas by the connectives $\neg$, $\wedge$, $\vee$,
$\to$, $\leftrightarrow$ and the quantifiers $\forall x$ and $\exists x$. Each
axiom stated on this page is a sentence of this language, and no other vocabulary
occurs in any of them.

Two conventions of ordinary first-order logic are in force throughout.

- The domain of discourse is **nonempty**: $\exists x\,(x = x)$ is logically
  valid, so some object exists before any axiom is assumed.
- Every object of the domain is a **set**. There are no urelements, so "$z$" and
  "the set $z$" say the same thing.

We write $x \neq y$ for $\neg(x = y)$ and $x \notin y$ for $\neg(x \in y)$; we
abbreviate $\forall z\,(z \in x \to \varphi)$ by $\forall z \in x\,\varphi$ and
$\exists z\,(z \in x \wedge \varphi)$ by $\exists z \in x\,\varphi$; and we
abbreviate $\exists w\,\bigl(\psi(w) \wedge \forall v\,(\psi(v) \to v = w)\bigr)$
by $\exists! w\,\psi(w)$, read "there is exactly one $w$ with $\psi(w)$".

A formula is written $\varphi(z, \bar p)$ when its free variables are among $z$
and the variables of the list $\bar p = p_1, \dots, p_n$; the $p_i$ are its
**parameters**. Parameters matter because an axiom schema ranges over formulas,
and a formula may mention sets already in hand.

A **class abbreviation** $\{\, z : \varphi(z, \bar p) \,\}$ is *not* a term of
the language. It is notation for the formula $\varphi$ itself, and a sentence
written with it abbreviates a sentence that does not use it:

- $w \in \{\, z : \varphi(z, \bar p) \,\}$ abbreviates $\varphi(w, \bar p)$;
- "$\{\, z : \varphi(z, \bar p) \,\}$ is a set" abbreviates
  $\exists y\,\forall z\,\bigl(z \in y \leftrightarrow \varphi(z, \bar p)\bigr)$.

Every formula has a class abbreviation, and whether that abbreviation is a set is
a separate question; answering it affirmatively always requires an axiom.

## Remarks

- **ZFC.** ZFC is the theory whose axioms are the ZF axioms stated on this page
  together with the **Axiom of Choice**, which this library states at
  [[def-axiom-of-choice]]. Choice is stated there
  and not restated here, and no construction and no result on this page uses it.
  [[rem-which-axiom-each-construction-uses]] records, axiom by axiom, what the
  material on this page does use.

- **Why the class notation needs its own convention.** Reading
  $\{\, z : \varphi(z) \,\}$ as a term would make "$\{\, z : \varphi(z) \,\}$
  exists" a triviality, and that is exactly the reading [[thm-russells-paradox]]
  refutes. Keeping it an abbreviation is what forces every set-forming step below
  to name the axiom that licenses it.
