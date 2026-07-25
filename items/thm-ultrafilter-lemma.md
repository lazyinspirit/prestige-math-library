---
id: thm-ultrafilter-lemma
kind: theorem
title: "The ultrafilter lemma: every filter extends to an ultrafilter"
status: draft
origin: session
deps: [def-ultrafilter, thm-zorn, lem-union-of-chain-of-filters, def-filter, def-maximal-element, def-partial-order, def-chain]
justified_by: []
aliases: [thm-ultrafilter-extension]
landmark: true
short: "every filter extends to an ultrafilter"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Ultrafilter lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_lemma"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal{F}_0$ be a filter on $X$ ([[def-filter]]).
Then there is an ultrafilter $\mathcal{U}$ on $X$ ([[def-ultrafilter]]) with
$\mathcal{F}_0 \subseteq \mathcal{U}$.

In particular, every set that carries a filter carries an ultrafilter. The proof
uses Zorn's lemma ([[thm-zorn]]) and therefore the Axiom of Choice. That some
choice principle is unavoidable here is an external independence result, not
proved in this library; see the remarks below.

## Facts & Assumptions

**Given:** A set $X$, a filter $\mathcal{F}_0$ on $X$, and Zorn's lemma.

[A1] $\mathcal{F}_0$ is a filter on $X$: $X \in \mathcal{F}_0$, $\emptyset \notin \mathcal{F}_0$, and $\mathcal{F}_0$ is closed under pairwise intersection and upward in $X$ ([[def-filter]]).

[L1] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element; the hypothesis is about all chains, the empty chain included ([[thm-zorn]]).

[L2] The union of a nonempty inclusion-chain of filters on $X$ is a filter on $X$ and an upper bound of the chain ([[lem-union-of-chain-of-filters]]).

[L3] An ultrafilter on $X$ is a filter that is a maximal element of $(\mathrm{Filt}(X), \subseteq)$, and $m$ is maximal exactly when $m \leq x$ forces $x = m$ ([[def-ultrafilter]], [[def-maximal-element]]).

[L4] Inclusion partially orders any set of sets, and a chain is a subset any two of whose members are comparable, the empty set included ([[def-partial-order]], [[def-chain]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathrm{Filt}(X)$ be the set of filters on $X$, a subset of $\mathcal{P}(\mathcal{P}(X))$, partially ordered by inclusion. [L3, L4, construct]

1.2 $\mathcal{F}_0 \in \mathrm{Filt}(X)$. [A1]

2.1 Let $P = \{\, \mathcal{F} \in \mathrm{Filt}(X) : \mathcal{F}_0 \subseteq \mathcal{F} \,\}$, partially ordered by inclusion as a subset of $\mathrm{Filt}(X)$. [step 1.1, construct]

2.2 $P \neq \emptyset$, since $\mathcal{F}_0 \subseteq \mathcal{F}_0$ puts $\mathcal{F}_0$ in $P$. [step 1.2, L4]

3.1 The empty chain of $P$ has an upper bound in $P$: every element of $P$ is vacuously above all of its members, and $P$ is nonempty, so $\mathcal{F}_0$ is such an upper bound. [step 2.1, step 2.2, L4]

3.2 A nonempty chain $\mathcal{D} \subseteq P$ has an upper bound in $P$: $\bigcup \mathcal{D}$ is a filter on $X$ and an upper bound of $\mathcal{D}$; it contains $\mathcal{F}_0$ because some member of $\mathcal{D}$ does and every member is contained in the union; hence $\bigcup \mathcal{D} \in P$. [step 2.1, L2, L4]

4.1 Every chain of $P$ has an upper bound in $P$, and $P$ is a nonempty poset, so Zorn's lemma yields a maximal element $\mathcal{U}$ of $P$. [step 2.2, step 3.1, step 3.2, L1]

5.1 $\mathcal{U}$ is a filter on $X$ with $\mathcal{F}_0 \subseteq \mathcal{U}$, since $\mathcal{U} \in P$. [step 4.1, step 2.1]

6.1 Let $\mathcal{G}$ be any filter on $X$ with $\mathcal{U} \subseteq \mathcal{G}$; then $\mathcal{F}_0 \subseteq \mathcal{U} \subseteq \mathcal{G}$, so $\mathcal{G} \in P$, and maximality of $\mathcal{U}$ in $P$ forces $\mathcal{G} = \mathcal{U}$. [step 4.1, step 5.1, step 2.1, L3]

7.1 So no filter on $X$ strictly contains $\mathcal{U}$: $\mathcal{U}$ is a maximal element of $\mathrm{Filt}(X)$, that is an ultrafilter on $X$, and it contains $\mathcal{F}_0$. [step 5.1, step 6.1, L3] ∎

## Remarks

- **The empty chain is the load-bearing case.** Zorn's lemma requires an upper
  bound for *every* chain of $P$, and the empty chain has one exactly when $P$ is
  nonempty. Step 3.1 discharges it with $\mathcal{F}_0$ itself, and step 2.2 is
  what makes that possible. This is not a formality:
  [[lem-union-of-chain-of-filters]] is false for the empty chain, since
  $\bigcup \emptyset = \emptyset$ is not a filter, so a proof that says "the union
  of a chain is a filter" without the case split has a genuine gap at the one
  chain the hypothesis of [[thm-zorn]] is easiest to forget.
- **Why the poset is $P$ and not $\mathrm{Filt}(X)$.** Applying Zorn to
  $\mathrm{Filt}(X)$ would produce a maximal filter unrelated to $\mathcal{F}_0$.
  Restricting to the filters above $\mathcal{F}_0$ costs nothing, because
  step 6.1 transfers maximality back: a filter above $\mathcal{U}$ is
  automatically above $\mathcal{F}_0$, so maximality in $P$ already means
  maximality among all filters. That transfer is the only step where the shape of
  $P$ is used.
- The conclusion is **an** ultrafilter, not **the** ultrafilter. Zorn's lemma
  delivers a maximal element with no canonicity whatsoever, and the extension is
  massively non-unique in general: on $\mathbb{N}$ there are many ultrafilters
  extending the filter of tails, and the proof singles out none of them
  ([[fs-every-ultrafilter-principal]] produces one and can describe it no
  further).
- Combined with [[lem-fip-generates-filter]], the lemma takes its most usable
  form: **every family of subsets of $X$ with the finite intersection property is
  contained in an ultrafilter on $X$.** That is the version applied in topology
  and in model theory.
- **What this costs.** The proof buys the conclusion with the full Axiom of
  Choice, through [[thm-zorn]] and [[cor-ac-iff-zorn]], but the statement is
  strictly weaker than the Axiom of Choice: it is neither provable in ZF nor
  strong enough to recover choice. Both of those are external metamathematical
  results and are recorded, with references and without a claim to prove them, in
  [[rem-choice-strengths]].
