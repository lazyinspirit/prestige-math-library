---
id: fs-every-ultrafilter-principal
kind: false-statement
title: "FALSE, once the ultrafilter lemma is available: every ultrafilter is principal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ultrafilter, thm-ultrafilter-lemma, def-axiom-of-choice, def-filter, def-filter-base, lem-filter-base-generates, def-natural-numbers, def-nat-order, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
short: "free ultrafilters exist (given choice)"
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Fréchet filter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fr%C3%A9chet_filter"
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement

**FALSE.** For every set $X$, every ultrafilter $\mathcal{U}$ on $X$
([[def-ultrafilter]]) is **principal**: there is an $x \in X$ with
$\mathcal{U} = \{\, A \subseteq X : x \in A \,\}$.

**What refutes the claim, and what that costs.** The refutation below assumes the
ultrafilter lemma, which this library proves from the Axiom of Choice
([[thm-ultrafilter-lemma]]).

## Facts & Assumptions

**Given:** The natural numbers $\mathbb{N}$ with $0$, the successor $\sigma$ and the order $\leq$ ([[def-natural-numbers]], [[def-nat-order]]), and the Axiom of Choice in the form used by the ultrafilter lemma.

[A1] A filter on $X$ contains $X$, omits $\emptyset$, and is closed under pairwise intersection and upward in $X$; a filter base is a nonempty, downward directed family of nonempty subsets ([[def-filter]], [[def-filter-base]]). The **principal filter at $x$** is $\{A \subseteq X : x \in A\}$, and it contains $\{x\}$.

[L1] The upward closure $\langle \mathcal{B} \rangle$ of a filter base $\mathcal{B}$ on $X$ is a filter on $X$, and $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$ ([[lem-filter-base-generates]]).

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

- **What the refutation consumes.** The ultrafilter $\mathcal{U}$ is produced by [[thm-ultrafilter-lemma]], which this library proves from the Axiom of Choice. The tail-filter construction above establishes the non-principal conclusion under exactly that theorem's hypotheses.
- **The filter used is the Fréchet filter in disguise.** The standard witness is the filter of cofinite subsets of $\mathbb{N}$. A subset of $\mathbb{N}$ is cofinite exactly when it contains a tail, so the filter generated by the tails and the filter of cofinite sets coincide; tails are used here because they need only the order on $\mathbb{N}$, whereas "cofinite" needs a theory of finite sets that this library has not yet developed. Nothing else changes.
- **On a finite $X$ the claim is true**, which is why the intuition survives: a finite $X$ is a finite union of its singletons, primeness ([[lem-ultrafilter-prime]]) puts one singleton $\{x\}$ into $\mathcal{U}$, and upward closure then makes $\mathcal{U}$ the principal filter at $x$. Stating that argument in full needs the notion of a finite set, so it is recorded here as motivation rather than as a proved item.
