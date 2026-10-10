---
id: rem-feferman-no-free-ultrafilter-in-zf
kind: remark
title: "Feferman 1965: ZF does not prove that a free ultrafilter on the naturals exists"
status: published
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [thm-ultrafilter-lemma, def-ultrafilter, fs-every-ultrafilter-principal, rem-choice-strengths]
aliases: []
landmark: true
short: "the ultrafilter lemma is not a theorem of ZF"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "S. Feferman, Some applications of the notions of forcing and generic sets, Fund. Math. 56 (1964/65), 325-345"
      url: "https://eudml.org/doc/213821"
    - title: "Ultrafilter on a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_on_a_set"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "T. Jech, The Axiom of Choice, North-Holland (1973), Chapter 5, Problem 24 (Feferman's model)"
      url: "https://archive.org/details/axiomofchoice0000jech"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF does not prove that there is a free (that is,
non-principal) ultrafilter on $\mathbb{N}$.**

Feferman (1965), using Cohen's forcing, produces a model of ZF in which every
ultrafilter on $\mathbb{N}$ is principal. The forcing adjoins countably many
Cohen reals $x_n \subseteq \mathbb{N}$ by finite partial functions
$\mathbb{N} \times \mathbb{N} \to \{0,1\}$, but the symmetry group is **not** a
group of permutations of the indices: it is the group of automorphisms obtained
by **flipping** the generic bits on an arbitrary set of coordinates, with
supports the finite subsets of $\mathbb{N}$. A hereditarily symmetric name for an
ultrafilter on $\mathbb{N}$ has such a finite support, and for any index $n$
outside that support there is a flip that fixes the name while replacing $x_n$ by
a set differing from it on a cofinite set. The purported ultrafilter would then
have to contain both, which forces it to be principal.

**Consequence, and this is the form the library needs.** The ultrafilter lemma
(UL), that every filter on a set extends to an ultrafilter, produces a free
ultrafilter on $\mathbb{N}$ from the filter of cofinite sets. So, if ZF is
consistent, **UL is not a theorem of ZF**, and neither is its equivalent, the
Boolean prime ideal theorem.

## Remarks

- **This is not the basic Cohen model.** The distinction is load-bearing. The
  basic Cohen model uses the same forcing but the group of *permutations of the
  indices*, and by [[rem-halpern-levy-bpi-not-ac]] the Boolean prime ideal
  theorem, hence the ultrafilter lemma, **holds** there, so the basic Cohen model
  does contain free ultrafilters on $\mathbb{N}$. Only the flip-symmetric model
  above kills them. Reading Feferman's model as "the Cohen model" would put two
  items on this page in direct contradiction.

- **Not proved in this library.** Forcing and symmetric models are not developed
  here.

- **What would prove it.** The forcing track named in
  [[rem-cohen-forcing-ac-independent]], plus the symmetry argument above: no
  hereditarily symmetric name can decide the membership of every subset of
  $\mathbb{N}$ in a purported ultrafilter.

- **Why it matters here.** [[rem-choice-strengths]] cites exactly this result for
  its first bullet, "UL is not a theorem of ZF", which is one of the two poles
  that locate UL strictly between ZF and the Axiom of Choice; the other pole is
  [[rem-halpern-levy-bpi-not-ac]]. It is also what makes
  [[fs-every-ultrafilter-principal]] an unusual item: that statement is false in
  ZFC, since [[thm-ultrafilter-lemma]] refutes it, and yet it is **consistent
  with ZF**, so the refutation genuinely consumes a choice principle and cannot
  be made choice-free. The strengthening from $\mathbb{N}$ to arbitrary sets is
  [[rem-blass-model-without-ultrafilters]].

- **Conditional discipline.** The statement is relative to the consistency of ZF.
  This library never says "free ultrafilters do not exist"; it says that ZF alone
  cannot produce one, and that [[def-ultrafilter]] is satisfied non-principally
  only once a choice principle is available.
