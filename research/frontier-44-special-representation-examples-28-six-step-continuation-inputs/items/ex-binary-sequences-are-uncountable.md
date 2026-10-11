---
id: ex-binary-sequences-are-uncountable
kind: example
title: "The set of binary sequences is equinumerous with $\\mathcal{P}(\\mathbb{N})$, hence uncountable"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-the-set-of-functions-from-one-set-to-another,
       lem-the-set-of-functions-between-two-sets-is-a-set, def-function,
       def-power-set, def-axiom-schema-of-separation, def-subset-and-proper-subset,
       def-image-and-preimage-under-a-relation, def-unordered-pair-and-singleton,
       lem-unordered-pair-equality, def-axiom-of-extensionality,
       def-injection-surjection-bijection, def-equinumerous, def-countable,
       ex-power-set-of-the-naturals-is-uncountable, def-natural-numbers,
       thm-omega-is-peano-system, def-cartesian-product]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§1.6, Corollary 1.48 and the diagonal discussion after it, printed pp. 18-19: the set Σ of binary sequences is in one-to-one correspondence with P(N) and is uncountable"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§1.5, Exercise 1.5.5, printed p. 48: the binary digit of x is 1 exactly when n ∈ A, so binary sequences code subsets of N"
---

## Example

Let $\{0,1\}^{\mathbb{N}}$ be the set of all functions $\mathbb{N} \to \{0,1\}$,
where $0 = \varnothing$ and $1 = \sigma(0)$ ([[def-the-set-of-functions-from-one-set-to-another]],
[[def-unordered-pair-and-singleton]]). The map $S \mapsto \chi_S$ sending
$S \subseteq \mathbb{N}$ to its characteristic function, $\chi_S(n) = 1$ for
$n \in S$ and $\chi_S(n) = 0$ for $n \notin S$, is a bijection
$\mathcal{P}(\mathbb{N}) \to \{0,1\}^{\mathbb{N}}$ ([[def-power-set]],
[[def-injection-surjection-bijection]]). Hence
$\{0,1\}^{\mathbb{N}} \approx \mathcal{P}(\mathbb{N})$
([[def-equinumerous]]) and the set of binary sequences is uncountable
([[def-countable]], [[ex-power-set-of-the-naturals-is-uncountable]]). This is
the function-space form of Cantor's diagonal argument, and it is the form in
which the library records that infinite products of at-most-countable sets need
not be at most countable. No choice principle is used.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N}$ with $0 = \varnothing$ and $1 = \sigma(0)$ ([[def-natural-numbers]]), the unordered pair $\{0,1\}$ ([[def-unordered-pair-and-singleton]]), and the set $\{0,1\}^{\mathbb{N}}$ of functions $\mathbb{N} \to \{0,1\}$ ([[def-the-set-of-functions-from-one-set-to-another]], [[lem-the-set-of-functions-between-two-sets-is-a-set]]). Membership in $\{0,1\}$ is membership in $\mathbb{N}$: $t \in \{0,1\}$ exactly when $t = 0$ or $t = 1$.

[F1] $1 \ne 0$, since $1 = \sigma(0)$ and $\sigma(n) \ne 0$ for every $n \in \mathbb{N}$ ([[thm-omega-is-peano-system]]).

[F2] Separation and set notation: for a set $X$ and a property, $\{\, z \in X : \varphi(z) \,\}$ is the set of elements of $X$ with that property ([[def-axiom-schema-of-separation]]); $S \subseteq \mathbb{N}$ means every element of $S$ is an element of $\mathbb{N}$, and $\mathcal{P}(\mathbb{N}) = \{\, z : z \subseteq \mathbb{N} \,\}$ ([[def-subset-and-proper-subset]], [[def-power-set]]).

[F3] A function is a relation with a unique value at each point of its domain; $f : A \to B$ means $\operatorname{dom} f = A$ and $\operatorname{ran} f \subseteq B$; and two functions with the same domain and the same values are equal ([[def-function]], [[def-axiom-of-extensionality]]). Ordered pairs are those of the Cartesian product $A \times B$ ([[def-cartesian-product]]).

[F4] Injection, surjection, bijection; images and preimages ([[def-injection-surjection-bijection]], [[def-image-and-preimage-under-a-relation]]).

[F5] $A \approx B$ means a bijection $A \to B$ exists; $\approx$ is symmetric and transitive ([[def-equinumerous]]); $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$, countably infinite when $A \approx \mathbb{N}$, at most countable when it is one of the two, and uncountable when it is not at most countable ([[def-countable]]).

[F6] $\mathcal{P}(\mathbb{N})$ is uncountable ([[ex-power-set-of-the-naturals-is-uncountable]]).

## Verification

**Proof technique:** direct.

1.1 For $S \subseteq \mathbb{N}$ the set $\chi_S := \{\, (n,v) \in \mathbb{N} \times \{0,1\} : (n \in S \wedge v = 1) \vee (n \notin S \wedge v = 0) \,\}$ exists by Separation, and it is a function $\mathbb{N} \to \{0,1\}$ with $\chi_S(n) = 1$ for $n \in S$ and $\chi_S(n) = 0$ for $n \notin S$. Indeed, for each $n \in \mathbb{N}$ exactly one of $n \in S$, $n \notin S$ holds, so exactly one value $v \in \{0,1\}$ is related to $n$, namely $1$ in the first case and $0$ in the second; and $0,1 \in \{0,1\}$ by the definition of the unordered pair. [F2, F3, given, construct]

2.1 The assignment $S \mapsto \chi_S$ is injective. If $\chi_S = \chi_T$ as sets of ordered pairs, then for every $n \in \mathbb{N}$ one has $n \in S$ iff $\chi_S(n) = 1$ iff $\chi_T(n) = 1$ iff $n \in T$: the outer equivalences are step 1.1, and in the middle, a function value that is not $1$ is $0$, which differs from $1$ by [F1], so $\chi_T(n) = 1$ holds exactly when $\chi_T(n) \ne 0$, that is exactly when $n \in T$. Hence $S = T$ by Extensionality of sets. [step 1.1, F1, F3]

2.2 The assignment $S \mapsto \chi_S$ is surjective. Let $f : \mathbb{N} \to \{0,1\}$ and put $S_f := \{\, n \in \mathbb{N} : f(n) = 1 \,\}$, a subset of $\mathbb{N}$ by Separation. For each $n$, either $f(n) = 1$ or $f(n) = 0$ because $f(n) \in \{0,1\}$; in the first case $n \in S_f$ and step 1.1 gives $\chi_{S_f}(n) = 1 = f(n)$, and in the second case $n \notin S_f$ and $\chi_{S_f}(n) = 0 = f(n)$. Thus $\chi_{S_f}$ and $f$ have the same domain $\mathbb{N}$ and the same values, so they are equal by [F3], and $f$ is in the image of the assignment. [step 1.1, F2, F3]

3.1 By steps 2.1 and 2.2 the characteristic-function map is a bijection $\mathcal{P}(\mathbb{N}) \to \{0,1\}^{\mathbb{N}}$, so $\{0,1\}^{\mathbb{N}} \approx \mathcal{P}(\mathbb{N})$ by [F5]. [step 2.1, step 2.2, F4, F5]

4.1 The set $\{0,1\}^{\mathbb{N}}$ is uncountable. If it were at most countable, then $\{0,1\}^{\mathbb{N}} \approx m$ for some $m \in \mathbb{N}$ or $\{0,1\}^{\mathbb{N}} \approx \mathbb{N}$ by [F5]; symmetry and transitivity of $\approx$ with step 3.1 would give $\mathcal{P}(\mathbb{N}) \approx m$ or $\mathcal{P}(\mathbb{N}) \approx \mathbb{N}$, so $\mathcal{P}(\mathbb{N})$ would be at most countable, contradicting [F6]. [step 3.1, F5, F6]

5.1 Therefore the binary sequences form a set equinumerous with $\mathcal{P}(\mathbb{N})$ and are uncountable, as claimed. The only objects constructed are the characteristic functions, defined by an explicit formula from $S$, and the set $S_f$, separated from $\mathbb{N}$ by the condition $f(n) = 1$; at no point is an element selected from a nonempty family of sets, so no choice principle is used. [step 3.1, step 4.1] ∎

## Remarks

- The construction is the function-space form of Cantor's diagonal argument: reading $S$ as a subset of $\mathbb{N}$ and $s(n) = \chi_S(n)$ as a binary sequence, the passage $S \mapsto \chi_S$ identifies $\mathcal{P}(\mathbb{N})$ with $\{0,1\}^{\mathbb{N}}$, and the diagonal set of [[thm-cantor-powerset]] reappears here as the sequence that flips every diagonal bit.

- This example is the case $A = \mathbb{N}$ of the fact that infinite products of at-most-countable sets need not be at most countable, in agreement with [[ex-power-set-of-the-naturals-is-uncountable]]: the product is the power set in characteristic-function guise.
