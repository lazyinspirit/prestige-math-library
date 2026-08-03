---
id: lem-ultrafilter-prime
kind: lemma
title: "Ultrafilters are prime: a union in $\\mathcal{U}$ has a member in $\\mathcal{U}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ultrafilter-characterisation, def-ultrafilter, def-filter, def-natural-numbers, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
short: "$A\\cup B\\in\\mathcal{U}\\Rightarrow A\\in\\mathcal{U}$ or $B\\in\\mathcal{U}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement

Let $\mathcal{U}$ be an ultrafilter on a set $X$ ([[def-ultrafilter]]) and let
$A, B \subseteq X$. If $A \cup B \in \mathcal{U}$ then $A \in \mathcal{U}$ or
$B \in \mathcal{U}$.

More generally, for every $n \in \mathbb{N}$ and every finite list
$s : n \to \mathcal{P}(X)$ ([[def-natural-numbers]]), writing
$\bigcup_{i \in n} s(i) = \{\, x \in X : x \in s(i) \text{ for some } i \in n \,\}$,
which is $\emptyset$ when $n = 0$: if $\bigcup_{i \in n} s(i) \in \mathcal{U}$ then
$s(i) \in \mathcal{U}$ for some $i \in n$.

## Facts & Assumptions

**Given:** A set $X$, an ultrafilter $\mathcal{U}$ on $X$, and subsets $A, B \subseteq X$ with $A \cup B \in \mathcal{U}$.

[A1] $\mathcal{U}$ is a filter on $X$: $X \in \mathcal{U}$, $\emptyset \notin \mathcal{U}$, $\mathcal{U}$ is closed under pairwise intersection, and closed upward in $X$ ([[def-filter]], [[def-ultrafilter]]).

[L1] For every $C \subseteq X$, exactly one of $C \in \mathcal{U}$ and $X \setminus C \in \mathcal{U}$ holds ([[thm-ultrafilter-characterisation]]).

[L2] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $\sigma(n)$ holds for every natural number; and $\sigma(n) = n \cup \{n\}$ ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \notin \mathcal{U}$; then $X \setminus A \in \mathcal{U}$. [L1, assume-hyp]

1.2 As sets, $(A \cup B) \cap (X \setminus A) = B \cap (X \setminus A) \subseteq B \subseteq X$. [given]

2.1 Both $A \cup B$ and $X \setminus A$ lie in $\mathcal{U}$, hence so does their intersection. [step 1.1, given, A1]

3.1 Upward closure applied to $(A \cup B) \cap (X \setminus A) \subseteq B$ gives $B \in \mathcal{U}$; so $A \in \mathcal{U}$ or $B \in \mathcal{U}$. [step 2.1, step 1.2, A1]

4.1 The finite case follows by induction on $n$: for $n = 0$ the union is empty and $\emptyset \notin \mathcal{U}$, so the hypothesis never holds and the claim is vacuous; and if the claim holds for lists of length $n$, then for $s : \sigma(n) \to \mathcal{P}(X)$ one has $\bigcup_{i \in \sigma(n)} s(i) = \left(\bigcup_{i \in n} s(i)\right) \cup s(n)$, so the binary case puts either $s(n)$ or $\bigcup_{i \in n} s(i)$ in $\mathcal{U}$, and in the second alternative the claim for $n$ supplies an $i \in n$ with $s(i) \in \mathcal{U}$. [step 3.1, A1, L2]

5.1 So an ultrafilter is prime: it contains a member of every finite union it contains. [step 3.1, step 4.1] ∎

## Remarks

- **The converse holds too**, and is worth stating even though it is not needed below: a filter $\mathcal{U}$ with the property that $A \cup B \in \mathcal{U}$ implies $A \in \mathcal{U}$ or $B \in \mathcal{U}$ is an ultrafilter, because $A \cup (X \setminus A) = X \in \mathcal{U}$ forces one of $A$ and $X \setminus A$ into $\mathcal{U}$, which is [[thm-ultrafilter-characterisation]]. Primeness and maximality are therefore the same condition, which is why the ultrafilter lemma is a form of the Boolean prime ideal theorem ([[rem-choice-strengths]]).
- The finite case does not extend to infinite unions. On $\mathbb{N}$ an ultrafilter containing every tail contains $\mathbb{N} = \bigcup_{x \in \mathbb{N}} \{x\}$ but no singleton ([[fs-every-ultrafilter-principal]]), so a union of infinitely many sets can lie in $\mathcal{U}$ with no single member of the union doing so.
- Read through the two-valued measure of [[thm-ultrafilter-characterisation]], primeness says that a union of finitely many null sets is null, the complementary form of closure under finite intersection.
