---
id: rem-which-axiom-each-construction-uses
kind: remark
title: "The axiom ledger for this page: which of the ZFC axioms each construction and each result actually consumes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-axiom-of-extensionality, def-axiom-schema-of-separation, def-axiom-of-pairing, def-axiom-of-union, def-axiom-of-power-set, def-axiom-schema-of-replacement, def-axiom-of-infinity, def-axiom-of-foundation, thm-the-empty-set-exists-and-is-unique, def-power-set, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, def-cartesian-product, cor-there-is-no-set-of-all-sets, thm-foundation-excludes-membership-cycles]
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: true
short: "axiom ledger"
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
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "Axiom of pairing (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_pairing"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Remark

Each construction here is licensed by named axioms, and this is the account of
which ones.

- [[def-axiom-of-extensionality]] is consumed by every construction on the page.
  An axiom that produces a set specifies its members with a biconditional;
  Extensionality is what turns "a set with these members" into "the set with
  these members", and so licenses each definite article and each piece of
  notation introduced below.

- [[def-axiom-schema-of-separation]] is consumed by
  [[thm-the-empty-set-exists-and-is-unique]], by the intersection of a nonempty
  set, by the trimming step that yields [[def-power-set]], by the difference of
  two sets, and by [[def-cartesian-product]]. It is also what
  [[cor-there-is-no-set-of-all-sets]] is proved from.

- [[def-axiom-of-pairing]] is consumed by unordered pairs and singletons, hence
  by ordered pairs and by everything built from them.

- [[def-axiom-of-union]] is consumed by
  [[def-union-of-a-set-and-binary-union]], and through the ambient double power
  set also by [[def-cartesian-product]].

- [[def-axiom-of-power-set]] is consumed by [[def-power-set]] and, through the
  same ambient set, by [[def-cartesian-product]]. It is assumed here in its
  implication form, so each of those two constructions consumes Separation as
  well.

- [[def-axiom-of-foundation]] is consumed by
  [[thm-foundation-excludes-membership-cycles]] and, through it, by the
  injectivity of the successor operation. No other result on this page uses it,
  and no definition does.

- [[def-axiom-of-infinity]] is consumed by nothing on this page. It is stated
  here because it belongs to the system, and it is what the construction of the
  natural numbers rests on.

- [[def-axiom-schema-of-replacement]] is consumed by nothing on this page
  either. Every set formed here is separated inside a set already in hand, which
  is exactly what Separation licenses.

- The **Axiom of Choice** is the one axiom of ZFC that is not stated on this
  page. This library states it at [[def-axiom-of-choice]]. No construction and
  no result on this page uses it.

Two redundancies in the list are worth recording, because they explain why the
ledger above is not the shortest possible one. Separation is derivable from
Replacement together with a set that has no elements, by a derivation that
splits on whether the separating condition holds anywhere in the ambient set;
[[def-axiom-schema-of-replacement]] carries it. Pairing is derivable from
Replacement applied to a set with at least two elements, such as the double
power set of the empty set. Both are nevertheless assumed here, because each is
used constantly and deriving it every time would obscure what a construction
actually costs.

The empty set runs the other way. It is often taken as an axiom, and here it is
derived instead, from Separation together with the logical fact that the domain
of discourse is nonempty; [[thm-the-empty-set-exists-and-is-unique]] carries the
derivation.
