---
id: lem-solovay-almost-disjoint-extension-under-ma
kind: lemma
title: "Martin's axiom extends families almost disjoint from a subfamily"
status: draft
origin: pipeline
deps: [def-martins-axiom, def-axiom-of-choice, def-natural-numbers, def-function, def-cardinal, def-finite-cardinality]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Lemma 4.3, printed p. 8, attributed there to Solovay; proof following Kunen's exposition"
    - title: "Kenneth Kunen, Set Theory: An Introduction to Independence Proofs"
      url: "https://doi.org/10.1016/S0049-237X(08)70001-0"
      locator: "Chapter VIII, almost-disjoint forcing for the Q-set lemma"
---

## Statement

Assume $\mathrm{MA}$ ([[def-martins-axiom]]) and let $\mathcal B \subseteq
\mathcal P(\omega)$ be a family with
$$|a \cap b| < \omega \quad \text{for all distinct } a,b \in \mathcal B,$$
and $|\mathcal B| < \mathfrak c$. Then for every $A \subseteq \mathcal B$ there
is $d \subseteq \omega$ with
$$|a \cap d| = \omega \ \ (a \in A), \qquad |b \cap d| < \omega \ \ (b \in \mathcal B \setminus A).$$

## Facts & Assumptions

**Given:** An almost disjoint family $\mathcal B$ of subsets of $\omega$ with $|\mathcal B| < \mathfrak c$, a subfamily $A \subseteq \mathcal B$, and Martin's axiom.

[F1] $\mathrm{MA}$ is the scheme $\mathrm{MA}(\kappa)$ for every infinite $\kappa < \mathfrak c$, where $\mathrm{MA}(\kappa)$ says that every nonempty ccc partial order and every family of at most $\kappa$ dense subsets has a filter meeting all of them ([[def-martins-axiom]]).

[F2] $|\mathcal B| < \mathfrak c$ and $\omega < \mathfrak c$ give $|\mathcal B| \cdot \omega < \mathfrak c$, and there is a bijection $\omega \times \omega \to \omega$; cardinal arithmetic is in $\mathrm{ZFC}$ ([[def-cardinal]], [[def-natural-numbers]], [[def-axiom-of-choice]]).

[L1] Finite subsets of $\omega$ and finite subsets of $\mathcal B$ form sets, and a condition is a pair $(s,F)$ of such sets; a subset of $\omega$ is a function-like set of natural numbers ([[def-function]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathbb P$ be the set of pairs $(s,F)$ with $s \subseteq \omega$ finite and $F \subseteq \mathcal B$ finite, ordered by $(s,F) \le (s',F')$ if and only if $s \supseteq s'$, $F \supseteq F'$ and $(s \setminus s') \cap \bigcup F' = \varnothing$. This is a partial order with least element $(\varnothing,\varnothing)$. [given, L1]

2.1 $\mathbb P$ is ccc, indeed a countable union of centered sets: conditions with the same first coordinate $s$ are pairwise compatible, since for $(s,F_1)$ and $(s,F_2)$ the pair $(s,F_1 \cup F_2)$ is a common extension; and there are only countably many finite $s \subseteq \omega$. [step 1.1, L1]

2.2 For $a \in A$ and $n \in \omega$ the set $D_{a,n} := \{(s,F) \in \mathbb P : |s \cap a| \ge n\}$ is dense. Given $(s',F')$, the set $a \setminus \bigcup F'$ is infinite, because $a$ meets each member of the finite family $F'$ in a finite set; choose $s := s' \cup s''$ where $s''$ is a set of $n$ elements of $a \setminus (s' \cup \bigcup F')$, and put $F := F'$. Then $(s,F) \le (s',F')$ because $s \setminus s'$ avoids $\bigcup F'$, and $|s \cap a| \ge n$. [step 1.1, L1]

2.3 For $b \in \mathcal B \setminus A$ and $n \in \omega$ the set $E_{b,n} := \{(s,F) \in \mathbb P : b \in F,\ |s \cap b| \le n\}$ is dense. Given $(s',F')$, take $F := F' \cup \{b\}$ and $s := s' \setminus b$; then $s \setminus s' = \varnothing$, so $(s,F) \le (s',F')$, and $|s \cap b| = 0$. [step 1.1, L1]

3.1 The family of dense sets $\{D_{a,n} : a \in A, n \in \omega\} \cup \{E_{b,n} : b \in \mathcal B \setminus A,\ n \in \omega\}$ has cardinality at most $|\mathcal B| \cdot \omega < \mathfrak c$ by [F2], and $\mathbb P$ is ccc by step 2.1, so $\mathrm{MA}$ gives a filter $G \subseteq \mathbb P$ meeting all of them. Put $d := \bigcup \{\, s : (s,F) \in G \,\}$. [step 2.1, step 2.2, step 2.3, F1, F2]

4.1 For $b \in \mathcal B \setminus A$ we have $|d \cap b| < \omega$: by step 2.3 and step 3.1 some $(s,F) \in G$ has $b \in F$; for any $(s',F') \in G$, compatibility gives $(s'',F'') \in G$ extending both, and then $s' \cap b \subseteq s'' \cap b = (s \cap b) \cup ((s'' \setminus s) \cap b) = s \cap b$ because $(s'' \setminus s) \cap b = \varnothing$; hence $d \cap b \subseteq s \cap b$, a finite set. [step 2.3, step 3.1]

4.2 For $a \in A$ we have $|d \cap a| = \omega$: for every $n$ step 2.2 and step 3.1 give $(s,F) \in G$ with $|s \cap a| \ge n$, and $s \subseteq d$. [step 2.2, step 3.1]

5.1 Steps 4.1 and 4.2 exhibit $d \subseteq \omega$ with the two required properties for the given $A \subseteq \mathcal B$. [step 4.1, step 4.2] ∎

## Remarks

- **Where almost disjointness is used.** Only in step 2.2: adding new elements of $a$ is possible because $a$ meets the finitely many members of $F'$ finitely. Without it the poset is still ccc but fails to force the properties, and the statement is false.

- **The filter is supplied by MA, not by choosing conditions.** The extension conditions in steps 2.2 and 2.3 are explicit constructions, so no choice beyond the given filter is used; the filter itself comes from $\mathrm{MA}$.
