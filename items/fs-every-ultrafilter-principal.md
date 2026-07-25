---
id: fs-every-ultrafilter-principal
kind: false-statement
title: "FALSE: every ultrafilter is principal"
status: draft
origin: session
deps: [def-ultrafilter, thm-ultrafilter-lemma, def-filter, def-filter-base, lem-filter-base-generates, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
short: "free ultrafilters exist (given choice)"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Fréchet filter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fr%C3%A9chet_filter"
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
pipeline_run: null
---

## Statement

**FALSE.** For every set $X$, every ultrafilter $\mathcal{U}$ on $X$
([[def-ultrafilter]]) is **principal**: there is an $x \in X$ with
$\mathcal{U} = \{\, A \subseteq X : x \in A \,\}$.

The claim is plausible because the principal ultrafilters are the only ones
anybody can write down. Each is given by a formula in one parameter, they are
easy to check, and on a finite $X$ there are no others. What the claim misses is
that [[thm-ultrafilter-lemma]] manufactures ultrafilters from filters that no
point generates, and it does so without ever naming the result.

## Facts & Assumptions

**Given:** The natural numbers $\mathbb{N}$ with $0$, the successor $\sigma$ and the order $\leq$ ([[def-natural-numbers]], [[def-nat-order]]), and the Axiom of Choice in the form used by the ultrafilter lemma.

[A1] A filter on $X$ contains $X$, omits $\emptyset$, and is closed under pairwise intersection and upward in $X$; a filter base is a nonempty, downward directed family of nonempty subsets ([[def-filter]], [[def-filter-base]]). The **principal filter at $x$** is $\{A \subseteq X : x \in A\}$, and it contains $\{x\}$.

[L1] The upward closure of a filter base on $X$ is a filter on $X$ ([[lem-filter-base-generates]]).

[L2] Every filter on a set is contained in an ultrafilter on that set, and an ultrafilter is in particular a filter ([[thm-ultrafilter-lemma]], [[def-ultrafilter]]).

[L3] $\leq$ on $\mathbb{N}$ is reflexive, transitive, antisymmetric and total ([[thm-nat-linear-order]]).

[L4] $m < n \iff \sigma(m) \leq n$, and $m < n$ means $m \leq n$ with $m \neq n$ ([[lem-nat-discrete]], [[def-nat-order]]).

## Refutation

**Proof technique:** direct.

1.1 For $N \in \mathbb{N}$ put $T_N = \{\, n \in \mathbb{N} : N \leq n \,\}$, the tail at $N$, and let $\mathcal{B} = \{\, T_N : N \in \mathbb{N} \,\}$. [construct]

2.1 $\mathcal{B} \neq \emptyset$ because $T_0 \in \mathcal{B}$, and $\emptyset \notin \mathcal{B}$ because $N \in T_N$ by reflexivity. [step 1.1, L3]

2.2 $\mathcal{B}$ is downward directed: given $M, N$, totality gives say $M \leq N$, and then transitivity gives $T_N \subseteq T_M$, so the member $T_N$ of $\mathcal{B}$ satisfies $T_N \subseteq T_M \cap T_N$. [step 1.1, L3]

2.3 For every $x \in \mathbb{N}$, $\{x\} \cap T_{\sigma(x)} = \emptyset$: an element of the intersection equals $x$ and satisfies $\sigma(x) \leq x$, which would give $x < x$ and hence $x \neq x$. [step 1.1, L4]

3.1 $\mathcal{B}$ is a filter base on $\mathbb{N}$, so $\mathcal{F} = \langle \mathcal{B} \rangle$ is a filter on $\mathbb{N}$ and every tail $T_N$ belongs to it. [step 2.1, step 2.2, A1, L1]

4.1 By the ultrafilter lemma there is an ultrafilter $\mathcal{U}$ on $\mathbb{N}$ with $\mathcal{F} \subseteq \mathcal{U}$; in particular $T_N \in \mathcal{U}$ for every $N \in \mathbb{N}$. [step 3.1, L2]

5.1 No singleton lies in $\mathcal{U}$: if $\{x\} \in \mathcal{U}$ then $\{x\}$ and $T_{\sigma(x)}$ both lie in $\mathcal{U}$, hence so does their intersection $\emptyset$, which a filter omits. [step 4.1, step 2.3, A1, L2]

6.1 The principal filter at $x$ contains $\{x\}$, so $\mathcal{U}$ is not the principal filter at any $x \in \mathbb{N}$; thus $\mathcal{U}$ is an ultrafilter on $\mathbb{N}$ that is not principal, and the claim is refuted. [step 5.1, A1] ∎

## Remarks

- **What the refutation consumes.** The ultrafilter $\mathcal{U}$ is produced by
  [[thm-ultrafilter-lemma]], which rests on Zorn's lemma and so on the Axiom of
  Choice. That is not an artefact of this argument: **the existence of a
  non-principal ultrafilter is not provable in ZF**. If ZF is consistent, there is
  a model of ZF in which every ultrafilter, on every set, is principal (Blass,
  1977), so the false statement above is *consistent with ZF alone* and is refuted
  only once a choice principle is available ([[rem-choice-strengths]]). This item
  is therefore false in ZFC and not refutable in ZF, an unusual status worth
  stating plainly rather than hiding.
- **The filter used is the Fréchet filter in disguise.** The standard witness is
  the filter of cofinite subsets of $\mathbb{N}$. A subset of $\mathbb{N}$ is
  cofinite exactly when it contains a tail, so the filter generated by the tails
  and the filter of cofinite sets coincide; tails are used here because they need
  only the order on $\mathbb{N}$, whereas "cofinite" needs a theory of finite sets
  that this library has not yet developed. Nothing else changes.
- **On a finite $X$ the claim is true**, which is why the intuition survives: a
  finite $X$ is a finite union of its singletons, primeness
  ([[lem-ultrafilter-prime]]) puts one singleton $\{x\}$ into $\mathcal{U}$, and
  upward closure then makes $\mathcal{U}$ the principal filter at $x$. Stating
  that argument in full needs the notion of a finite set, so it is recorded here
  as motivation rather than as a proved item.
- **The ultrafilter comes with no description.** Zorn's lemma supplies a maximal
  element and no construction, and it is a theorem of ZFC that no free ultrafilter
  on $\mathbb{N}$, read as a subset of $\{0,1\}^{\mathbb{N}}$, is Lebesgue
  measurable or has the Baire property (Sierpiński), so none can be produced by
  the usual explicit constructions. The refutation therefore names an object it
  cannot write down, which is the characteristic mark of the Axiom of Choice
  ([[thm-zorn]]).
