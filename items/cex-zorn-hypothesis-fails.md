---
id: cex-zorn-hypothesis-fails
kind: counterexample
title: "$(\\mathbb{N}, \\le)$ has no maximal element: Zorn's chain hypothesis fails"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-zorn, def-axiom-of-choice, def-upper-bound, def-maximal-element, def-chain, def-nat-order, def-nat-addition, lem-nat-add-identity, thm-nat-linear-order, lem-nat-successor-neq-self, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the chain hypothesis of Zorn's lemma is redundant, that is
every nonempty poset has a maximal element ([[thm-zorn]],
[[def-maximal-element]]).

The witness is $(\mathbb{N}, \le)$ with its usual order ([[def-nat-order]]). It
is nonempty and has no maximal element whatsoever, and the hypothesis of Zorn's
lemma that it violates is exactly one: $\mathbb{N}$ is itself a chain
([[def-chain]]) and it has no upper bound in $\mathbb{N}$ ([[def-upper-bound]]).

## Facts & Assumptions

**Given:** $\mathbb{N}$ with the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ ([[def-nat-order]]) and addition satisfying $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]); $m < n$ abbreviates $m \le n$ together with $m \ne n$.

[L1] $\le$ is a linear order on $\mathbb{N}$: reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]).

[L2] $n \ne \sigma(n)$ for every $n \in \mathbb{N}$ ([[lem-nat-successor-neq-self]]).

[L3] $m$ is maximal in a poset when no $x$ satisfies $m < x$ ([[def-maximal-element]]).

[L4] $u$ is an upper bound of $S$ when $s \le u$ for every $s \in S$ ([[def-upper-bound]]).

[L5] A subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L6] Zorn's lemma, stated under the Axiom of Choice ([[def-axiom-of-choice]]), which it assumes outright: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]). The Axiom of Choice is a standing assumption of the theorem, not a hypothesis on the poset.

## Counterexample

**Proof technique:** direct.

1.1 $(\mathbb{N}, \le)$ is a poset and it is nonempty, since $0 \in \mathbb{N}$. [given, L1]

1.2 For every $n \in \mathbb{N}$ one has $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$, so $n \le \sigma(n)$; and $n \ne \sigma(n)$, so $n < \sigma(n)$. [given, L2]

2.1 $\mathbb{N}$ has no maximal element: for any $n$ the element $\sigma(n)$ lies strictly above it. [step 1.2, L3]

2.2 $\mathbb{N}$ is a chain of the poset $(\mathbb{N}, \le)$, because $\le$ is total, so any two natural numbers are comparable. [step 1.1, L1, L5]

3.1 That chain has no upper bound in $\mathbb{N}$: an upper bound $u$ would satisfy $n \le u$ for every $n$, in particular $\sigma(u) \le u$; combined with $u \le \sigma(u)$, antisymmetry would give $u = \sigma(u)$, which [L2] forbids. So no $u \in \mathbb{N}$ is an upper bound of $\mathbb{N}$. [step 2.2, step 1.2, L1, L2, L4]

4.1 So $(\mathbb{N}, \le)$ is a nonempty poset with no maximal element, and of the hypotheses [L6] places on the poset the single one that fails is that every chain has an upper bound, the offending chain being $\mathbb{N}$ itself; the Axiom of Choice, assumed throughout [L6], is not a property of $(\mathbb{N}, \le)$ and is neither used nor contradicted here. The claim is refuted and Zorn's lemma is untouched. [step 1.1, step 2.1, step 3.1, L6] ∎

## Remarks

- **Nothing exotic is at work.** The poset is totally ordered, it is the most familiar order there is, and it is even well ordered ([[thm-well-ordering-principle]]). What it lacks is a ceiling. So the hypothesis Zorn's lemma really needs is boundedness of chains, and no amount of good behaviour elsewhere substitutes for it.

- **It fails only at the top.** Every chain of $\mathbb{N}$ that has an upper bound at all has a *least* one: the set of its upper bounds is a nonempty subset of $\mathbb{N}$, so [[thm-well-ordering-principle]] hands back its least element. The empty chain has least upper bound $0$: it is vacuously an upper bound, and $0\le u$ for every natural $u$ because $0+u=u$ ([[lem-nat-add-identity]], [[def-nat-order]]). So the only chains without suprema are the ones with no upper bound whatever, and $\mathbb{N}$ is one of them. The same observation, read as a statement about suprema rather than upper bounds, is [[cex-progressive-map-without-fixed-point]].

- **Nonemptiness is not what fails here**, and how much work it does depends on the convention. Under the convention of [[def-chain]], where $\emptyset$ counts as a chain, "every chain has an upper bound" already forces $P \ne \emptyset$, since an upper bound of $\emptyset$ is just some element of $P$; the separate nonemptiness hypothesis of [[thm-zorn]] is then emphasis rather than extra strength. Under the competing convention, where "chain" means nonempty chain, the empty poset satisfies the chain hypothesis vacuously and has no maximal element, so nonemptiness must be assumed outright. Either way, what $(\mathbb{N}, \le)$ isolates is the failure of the chain hypothesis alone.

- Adding a single element $\infty$ above every natural number repairs everything: the chain $\mathbb{N}$ then has upper bound $\infty$, every chain has one, and $\infty$ is the maximal element Zorn's lemma promises.
