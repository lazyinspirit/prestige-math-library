---
id: rem-fraenkel-socks-model
kind: remark
title: "Fraenkel's socks: ZF does not prove choice for countably many pairs"
status: published
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [def-axiom-of-choice, def-choice-function, ex-russells-socks, rem-choice-ledger]
aliases: [rem-socks-model, rem-countable-pairs-choice-not-in-zf]
landmark: false
short: "Con(ZF) implies Con(ZF + a countable family of pairs with no choice function)"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "T. Jech, The Axiom of Choice, North-Holland (1973), Section 4.4 and Theorem 4.3 (the second Fraenkel model), Section 4.7 (historical remarks), Section 5.4 (the second Cohen model), Theorem 6.1 (the Jech-Sochor First Embedding Theorem)"
      url: "https://archive.org/details/axiomofchoice0000jech"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Urelement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urelement"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF does not prove that every countable family of two
element sets has a choice function.** Equivalently: if ZF is consistent, then so
is ZF together with the existence of a countable family of two element sets
admitting no choice function.

This is the statement behind Russell's socks. Fraenkel gave the first model, the
one Jech presents as the **second Fraenkel model**: work in **ZFA**,
Zermelo-Fraenkel set theory with atoms (*urelements*), take a countable set of
atoms divided into pairs $P_n = \{a_n, b_n\}$, and pass to the permutation model
determined by the group of permutations of the atoms that fix each $P_n$ setwise,
with finite supports. Every axiom of ZFA holds there, the sequence
$\langle P_n : n \in \mathbb{N} \rangle$ is in the model, so
$\{P_n : n \in \mathbb{N}\}$ is countable there, and no choice function for it
exists: a choice function would have a finite support, and a permutation swapping
$a_n$ with $b_n$ for some $n$ outside that support would fix the function while
moving one of its values, which is impossible.

On the date: the permutation-model method is Fraenkel's, introduced in his papers
from 1922 onwards and put into its precise support form by Mostowski at the end
of the 1930s; Jech records both this model and the basic one as Fraenkel's, and
dates the method to the range 1922-1937 rather than to a single paper. This
library therefore attributes the model to Fraenkel and does not pin it to one
year.

A permutation model is **not** a model of ZF, because ZF has no atoms. The
conclusion is carried over to ZF proper by the **Jech-Sochor embedding theorem**
(the First Embedding Theorem), which produces from a permutation model a
symmetric extension of a model of ZF in which a prescribed initial segment
$\mathcal{P}^\alpha$ of the permutation model reappears, so any statement bounded
in that segment is preserved. The same conclusion is also reached directly,
without atoms, by Cohen's symmetric submodels of a forcing extension: Jech's
**second Cohen model** is exactly the atom-free analogue of the model above, with
the pairs realised as pairs of sets of generic reals rather than pairs of atoms.
That is the machinery of [[rem-cohen-forcing-ac-independent]].

## Remarks

- **Not proved in this library.** Neither permutation models, nor the
  Jech-Sochor embedding theorem, nor forcing is developed here. The description
  above fixes what the statement says and names the constructions; it is not a
  proof, and it is not a sketch that could be completed with the material in this
  library.

- **What would prove it.** Either of two tracks. First: ZFA, the cumulative
  hierarchy over a set of atoms, normal filters of subgroups of the symmetry
  group, the permutation model and its support lemma, then the Jech-Sochor
  embedding theorem to remove the atoms. Second: the forcing track named in
  [[rem-cohen-forcing-ac-independent]], with the pairs realised as pairs of sets
  of mutually generic reals rather than atoms.

- **What fails here is far less than the full axiom.** The Axiom of Choice
  ([[def-axiom-of-choice]]) implies that every countable family of pairs has a
  choice function ([[def-choice-function]]), so any ZF proof of the Axiom of
  Choice would in particular yield a ZF proof of that much weaker principle. The
  statement above says ZF has no proof of the weaker principle, so it already
  gives the conclusion of [[rem-cohen-forcing-ac-independent]], that ZF does not
  prove the Axiom of Choice. The reverse reading is what a reader is most likely
  to supply and is not what is recorded: the family here is countable and its
  members have two elements each, and even that much choice is unavailable.

- **Why it matters here.** [[ex-russells-socks]] proves the shoe half of
  Russell's illustration in ZF outright and quotes this item for the sock half.
  Without it the sock half would be only the observation that no rule has been
  found, and no search establishes an impossibility. It also fixes the lower end
  of the scale in [[rem-choice-ledger]]: even choice for countably many pairs is
  not free.

- **Conditional discipline.** As everywhere in this library, the statement is an
  implication between consistency statements. Nothing here asserts that a
  countable family of pairs without a choice function exists, only that ZF cannot
  rule one out unless ZF is inconsistent.
