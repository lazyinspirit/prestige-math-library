---
page: deferred-set-theory-beyond-choice
title: "Set Theory Beyond Choice: Recorded, Not Proved Here"
status: published
items: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent,
        rem-independence-of-ch-and-gch, rem-gch-implies-ac,
        rem-cohen-first-model, rem-fraenkel-socks-model,
        rem-feferman-levy-model,
        rem-feferman-no-free-ultrafilter-in-zf,
        rem-blass-model-without-ultrafilters, rem-halpern-levy-bpi-not-ac,
        rem-solovay-model, rem-shelah-inaccessible-and-the-baire-property,
        rem-gitik-all-uncountable-cardinals-singular,
        rem-baire-category-choice-strength, rem-urysohn-lemma-not-a-zf-theorem,
        rem-stone-theorem-choice-strength, rem-schechter-kelley-tychonoff,
        rem-martins-axiom, rem-suslin-hypothesis-independent,
        rem-normal-moore-space-conjecture, rem-l-spaces-and-s-spaces,
        rem-dowker-spaces]
examples: []
---

**Objective.** This page **states results that this library does not prove**.
Every item on it is a remark, every one carries a citation to the primary
literature, and not one of them has a proof here. That is the whole point of the
page: the library refers to these results constantly, and the honest way to do
that is to record them explicitly as external, with sources, rather than to leave
a silent gap or to smuggle in a hand-waved argument.

What they have in common is the machinery their proofs need: **forcing, inner
models, and large cardinals**. That track has not been built here and is not
planned for the near term, so the results are recorded rather than developed. To
be clear about the boundary, ordinals, transfinite induction and recursion,
Hartogs numbers, the well-ordering theorem and cardinals as initial ordinals are
**not** on this page: those are ordinary ZFC and are proved elsewhere in the
library.

The page divides into four groups.

**Independence of choice and of the continuum hypothesis.** Gödel's constructible
universe shows ZF cannot refute the Axiom of Choice, and Cohen's forcing shows ZF
cannot prove it; the same two constructions settle CH and GCH over ZFC. Against
that, Sierpiński's theorem that GCH implies the Axiom of Choice shows GCH is not
the innocent size hypothesis it looks like.

**Models of ZF where choice fails.** Cohen's first model contains an infinite
Dedekind-finite set of reals. Fraenkel's socks, a permutation model transferred
to ZF by the Jech-Sochor embedding theorem, shows that even a countable family of
two element sets need not have a choice function. The Feferman-Levy model makes
the reals a countable union of countable sets and $\omega_1$ singular. Feferman's
model has no free ultrafilter on $\mathbb{N}$, and Blass's has none on any set. Halpern and Lévy's
model satisfies the Boolean prime ideal theorem while the Axiom of Choice fails,
which is what places the ultrafilter lemma strictly between the two. Solovay's
model, and Shelah's sharpening of it, measure how much choice the pathologies of
the real line actually cost, and Gitik's model shows that without choice every
uncountable cardinal can be singular at once.

**The price of theorems that look like pure topology.** The Baire category
theorem is four inequivalent statements over ZF, not one. Urysohn's lemma is not
a theorem of ZF, and not a theorem of ZF plus countable choice either. A. H.
Stone's theorem that metric spaces are paracompact is not provable from ZF plus
dependent choice. And Kelley's classical derivation of the Axiom of Choice from
Tychonoff's theorem contains an error that changes its conclusion: as written it
proves only the Boolean prime ideal theorem.

**Forcing axioms, and independence inside topology.** Martin's Axiom and the
consistency of MA with the failure of CH; the Suslin hypothesis, independent in
both directions; the normal Moore space conjecture, whose consistency provably
requires a large cardinal; L-spaces, which exist in ZFC, against S-spaces, which
consistently do not; and Dowker spaces, which exist in ZFC with the $\aleph_1$
case still open.

Two conventions are enforced throughout. First, **every independence statement is
conditional**: it is always an implication whose antecedent is the consistency of
ZF, of ZFC, or of a large-cardinal hypothesis, and it is never asserted
unconditionally, because by Gödel's second incompleteness theorem no such
antecedent can be discharged from inside. Second, **each item says what would
prove it** and which track that belongs to, so that the gap is a named, bounded
piece of missing machinery rather than a vague appeal to authority.

This page has no prerequisites and depends on nothing. Where it points at
material the library does develop, the pointer is a forward reference, marked as
such, because every other page in the library comes later than this one.
