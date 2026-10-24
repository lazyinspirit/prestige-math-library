---
id: thm-jech-sochor-transfer-for-boundable-sentences
kind: theorem
title: Jech–Sochor transfer for certified atom-blind boundable sentences
status: published
origin: pipeline
deps: [def-boundable-sentence-over-an-atom-set, thm-jech-sochor-first-embedding]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Chapter 6 Problem 1, p. 95", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

Let $M$ be a transitive model of $\mathrm{ZFA+AC}$ with atom set $A$ and pure
kernel $K$, and let $V=\mathrm{HS}_{\mathcal F}^{M}$ be the permutation
submodel defined by an $M$-internal normal group/filter system. Fix an
iterate height $\alpha$ and a $K$-generic outer universe for the pure forcing of
[[thm-jech-sochor-first-embedding]] at that height. Let $W$ and
$A^*$ be its symmetric ZF model and atom-image set.

A **transfer certificate** for a sentence $T$ consists of a fixed formula
$\theta$ in the many-sorted incidence structure naming finitely many levels
$\mathcal P^\beta(A)$ for $\beta\le\alpha$ and, if needed, finitely many
pure-kernel parameters shown to be fixed by the embedding. Each quantifier is
restricted to one named carried sort; every atomic membership/equality test,
including one involving a pure parameter, is certified to be preserved by
the corresponding isomorphism. The base sort is treated as opaque; the
formula never tests whether an atom image has members outside the carried
structure. The typed formula itself, with any carried parameters, has the
same truth value on corresponding source and target tuples. If a global
sentence $T$ is sought, a certificate may prove that $T$ in $V$ is equivalent to
$\theta$ on the source sorts and that $T$ in $W$ is equivalent to the same
$\theta$ on the corresponding $A^*$ sorts. Then $V\models T$ implies
$W\models T$ (and the converse holds in these fixed models). A sentence
merely called boundable by [[def-boundable-sentence-over-an-atom-set]] has no
such transfer conclusion without this additional certificate. In particular,
the assertion that two distinct objects have no members is atom-sensitive and
is excluded; no whole-universe elementary embedding is claimed.

## Facts & Assumptions

**Given:** The ambient ZFA+AC presentation, its specified permutation system, the $K$-generic outer universe, and the finite typed transfer certificate in the Statement.

[F1] [[def-boundable-sentence-over-an-atom-set]] defines general relative-rank boundability. That condition alone does not certify preservation under an atom-to-set embedding; the typed certificate in the Statement is an additional hypothesis.

[F2] [[thm-jech-sochor-first-embedding]] gives, in the stated generic outer universe, a membership isomorphism through any prescribed iterate, respecting its lower levels.

## Proof

1.1 Apply F2 at height $\alpha$ to obtain the bijections on every sort named by $\theta$. Pure-kernel parameters are fixed by the recursive translation of pure sets, with their mixed atomic incidences checked as part of the certificate. The carried bijections preserve equality and membership between the named objects. They assert nothing about members of an image $a^*$ lying outside those sorts. General boundability in F1 supplies no missing preservation claim; the certificate explicitly limits the formula to this carried incidence structure. [F1, F2]

2.1 Induct on the finite typed formula $\theta$. Atomic equality and membership are preserved by step 1.1, and Boolean connectives follow immediately. For a quantifier over a named sort, F2 is onto that sort, so every possible target witness has exactly one source preimage and the induction hypothesis applies in both directions. Thus $\theta$ has the same truth value in the source and target incidence structures. No quantifier ranges over the uncarried members of a base-sort image. [F2, step 1.1]

3.1 Step 2.1 already gives the parameterized typed-formula assertion. When the two extra equivalences to a global $T$ are supplied, compose them with step 2.1 to get $V\models T$ if and only if $W\models T$. A one-way target consequence of a transported typed assertion may also be inferred without a global source equivalence. The atom-sensitive two-empty-objects formula fails the certificate: two atoms can be memberless in ZFA, while distinct memberless sets violate Extensionality in ZF, so no target equivalence to the same typed incidence formula can be proved. The only Choice hypothesis is the ambient ZFA+AC premise of F2; $W$ need not satisfy AC. [F1, F2, step 2.1] ∎
