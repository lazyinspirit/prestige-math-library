---
id: thm-tarski-square
kind: theorem
title: "Tarski: the Axiom of Choice is equivalent to the statement that $A \\times A \\approx A$ for every infinite set $A$, so extending Hessenberg's theorem from the alephs to arbitrary sets is exactly as strong as choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hessenberg, thm-hartogs, lem-successor-cardinal-exists, cor-ac-iff-well-ordering, thm-well-ordering-theorem, def-axiom-of-choice, def-equinumerous, def-injection-surjection-bijection, def-cardinal, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, lem-cardinal-arithmetic-basic-laws, def-cardinal-arithmetic, thm-cardinal-arithmetic-agrees-with-finite-counting, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-well-order, def-countable, def-finite-cardinality, lem-pigeonhole, thm-induction-principle]
justified_by: []
aliases: [thm-tarski-a-times-a]
landmark: true
short: "$A \\times A \\approx A$ for all infinite $A$ $\\iff$ AC"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "A. Tarski, Sur quelques théorèmes qui équivalent à l'axiome du choix (1924)"
      url: "https://pldml.icm.edu.pl/pldml/element/bwmeta1.element.bwnjournal-article-fmv5i1p18bwm"
    - title: "Tarski's theorem about choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tarski%27s_theorem_about_choice"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
pipeline_run: null
---

## Statement

Over ZF the following two statements are equivalent.

**(1)** The Axiom of Choice ([[def-axiom-of-choice]]).

**(2) Tarski's square law.** $A \times A \approx A$ ([[def-equinumerous]]) for
every infinite set $A$, that is, for every $A$ that is not equinumerous with a
natural number ([[def-countable]]).

[[thm-hessenberg]] proves the same equation for every infinite **cardinal**,
without any choice principle. This theorem says that the gap between "every
infinite cardinal" and "every infinite set" is precisely the Axiom of Choice:
the square law for arbitrary sets is not a mild strengthening of Hessenberg's
theorem, it is choice itself.

## Facts & Assumptions

**Given:** ZF. Neither statement is assumed; the theorem asserts their equivalence. For a set $A$ and an ordinal $\kappa$ write $A \sqcup \kappa = (\{0\} \times A) \cup (\{1\} \times \kappa)$, and inside it write $a' = (0,a)$ for $a \in A$ and $\xi' = (1,\xi)$ for $\xi \in \kappa$; these tagged copies are disjoint and $a \mapsto a'$, $\xi \mapsto \xi'$ are injective.

[L1] $\kappa \otimes \kappa = \kappa$, that is $\kappa \times \kappa \approx \kappa$, for every infinite cardinal $\kappa$, in ZF ([[thm-hessenberg]], [[def-cardinal-arithmetic]]).

[L2] For every set $A$ the Hartogs number $\aleph(A)$ is an ordinal admitting no injection into $A$ ([[thm-hartogs]]), and it is a cardinal ([[lem-successor-cardinal-exists]], [[def-cardinal]]).

[L3] Over ZF the Axiom of Choice is equivalent to the well-ordering theorem ([[cor-ac-iff-well-ordering]], [[def-well-order]]); and assuming the Axiom of Choice every set carries a well-order ([[thm-well-ordering-theorem]]).

[L4] For a well-orderable $X$: $X \approx \lvert X \rvert$, the value is a cardinal, equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]); a cardinal $\kappa$ is finite when $\kappa \in \omega$ and infinite when $\omega \subseteq \kappa$, that is $\omega \le \kappa$ ([[def-cardinal-arithmetic]]).

[L5] $\times$ respects $\approx$ ([[lem-cardinal-operations-are-well-defined]]); and for cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$ ([[lem-cardinal-arithmetic-basic-laws]]).

[L6] Ordinals: elements of ordinals are ordinals, trichotomy holds, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]]).

[L7] There is no injection $n \cup \{n\} \to n$ for $n \in \omega$ (claim 1 of [[lem-pigeonhole]]); a set is finite when it is equinumerous with a natural number ([[def-countable]], [[def-finite-cardinality]]).

[L8] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); a composition of injections is an injection and the inverse of a bijection is a bijection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ is infinite then every $n \in \omega$ injects into $A$: by induction along [L8] on the statement "there exists an injection $n \to A$", the empty function serving at $n = 0$, and an injection $f : n \to A$ never being surjective, since $A \approx n$ would make $A$ finite, so that some $a \in A \setminus f[n]$ exists and $f \cup \{(n,a)\}$ injects $n \cup \{n\}$ into $A$; the statement carried through the induction is an existence statement, so no family of injections is selected. [L7, L8]

1.2 Assume (1) and let $A$ be infinite; then $A$ is well-orderable by [L3], $\kappa = \lvert A \rvert$ is a cardinal with $A \approx \kappa$ by [L4], and $\kappa$ is infinite, since $\kappa \in \omega$ would make $A$ finite; so $A \times A \approx \kappa \times \kappa \approx \kappa \approx A$ by [L5], [L1] and [L4], which is (2). [L1, L3, L4, L5, L7]

2.1 Assume (2) from here on, let $A$ be infinite and put $\kappa = \aleph(A)$; then $\kappa$ is a cardinal by [L2], and $\omega \le \kappa$, because $\kappa \in \omega$ would make $\kappa$ a natural number, which injects into $A$ by step 1.1 and contradicts [L2]; so $\kappa$ is an infinite cardinal. [step 1.1, L2, L4, L6]

3.1 The set $B = A \sqcup \kappa$ is infinite: $\xi \mapsto \xi'$ injects $\kappa$, hence also $\omega \subseteq \kappa$, into $B$ by step 2.1, so $B \approx n$ for some $n \in \omega$ would inject $n \cup \{n\} \subseteq \omega$ into $n$, which [L7] forbids; therefore (2) applies to $B$ and we may fix a bijection $f : B \times B \to B$. [step 2.1, L6, L7, L8]

4.1 Then $A$ is well-orderable. Exactly one of two situations holds. If some $a \in A$ has $f(a', \xi') \in \{b' : b \in A\}$ for every $\xi \in \kappa$, then sending $\xi$ to the unique $b \in A$ with $f(a',\xi') = b'$ is an injection $\kappa \to A$, which [L2] forbids. Otherwise every $a \in A$ admits some $\xi \in \kappa$ with $f(a',\xi') \in \{\eta' : \eta \in \kappa\}$; let $\xi_a$ be the $\in$-least such $\xi$, which is determined and not chosen by [L6], and let $\eta_a \in \kappa$ be given by $f(a', \xi_a') = \eta_a'$. The map $a \mapsto (\xi_a, \eta_a)$ is then an injection $A \to \kappa \times \kappa$, since $(\xi_a,\eta_a) = (\xi_b,\eta_b)$ gives $f(a',\xi_a') = f(b',\xi_b')$ and hence $a' = b'$ by injectivity of $f$; composing with a bijection $\kappa \times \kappa \to \kappa$ from step 2.1 and [L1] injects $A$ into $\kappa$, and transporting the ordinal well-order of $\kappa$ back along that injection well-orders $A$, a nonempty subset of $A$ receiving the preimage of the $\in$-least element of its image. [step 2.1, step 3.1, L1, L2, L6, L8]

5.1 A finite $A$ is well-orderable outright, being equinumerous with a natural number by [L7], so under (2) **every** set can be well ordered by step 4.1, and (1) follows by [L3]; with step 1.2 the two statements are equivalent over ZF. [step 1.2, step 4.1, L3, L7] ∎

## Remarks

**Where a choice would have crept in, and why it does not.** The tempting move in step 4.1 is "for each $a \in A$ choose some $\xi$ with $f(a',\xi') \in \kappa$", which is a genuine use of choice over the index set $A$. It is avoided because $\kappa$ is an **ordinal**: the set of admissible $\xi$ is a nonempty set of ordinals and has a least element, so $\xi_a$ is a definable function of $a$. That is the same device that keeps [[thm-hartogs]] choice free, and it is the reason the Hartogs number rather than some arbitrary large set is the right object to adjoin to $A$.

**Why $A$ is enlarged to $A \sqcup \aleph(A)$.** The hypothesis (2) is applied to $B$, not to $A$, because the argument needs the bijection $f$ to be able to send a pair with one coordinate in $A$ into the ordinal part. If $\kappa$ were not present inside $B$, the second situation of step 4.1 could not arise and nothing would be gained.

**What the equivalence does and does not settle.** It gives, over ZF, an exact measure of the square law: it is neither weaker nor stronger than the Axiom of Choice. It does not say whether ZF alone refutes the square law, and this page asserts nothing of that kind. The choice ledger at the end of the page records which results here are theorems of ZF and which carry a choice hypothesis.
