---
id: thm-transfinite-recursion
kind: theorem
title: "Transfinite recursion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-transfinite-induction, def-well-order, def-initial-segment]
justified_by: []
aliases: [transfinite-recursion]
landmark: true
short: "unique $F$ with $F(a)=G(F\\restriction W_{<a})$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Transfinite induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Transfinite_induction"
    - title: "Axiom schema of replacement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_schema_of_replacement"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
    - title: "J. T. Moore, MATH 6870: Set Theory"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
pipeline_run: null
---

## Statement

Let $(W, <)$ be a well-order ([[def-well-order]]) and let $G$ be a **class
function**: a rule, given by a formula in the language of set theory, that
assigns a set $G(h)$ to every function $h$ whose domain is a proper initial
segment of $W$ ([[def-initial-segment]]). Then there is **exactly one** function
$F$ with domain $W$ such that

$$F(a) = G(F \restriction W_{<a}) \qquad \text{for every } a \in W.$$

Here $F \restriction W_{<a}$ is the restriction of $F$ to the initial segment
determined by $a$, so the value of $F$ at $a$ is prescribed in terms of all its
earlier values at once.

Because $G$ is a class function rather than a set, this is a **theorem schema**
of ZF: one theorem for each formula defining $G$. **It uses Replacement, and it
uses no form of the Axiom of Choice.**

## Facts & Assumptions

**Given:** A well-order $(W, <)$, a class function $G$ as in the statement, and the axioms of ZF. Call a function $h$ an **attempt** when $\mathrm{dom}(h)$ is an initial segment of $W$ and $h(b) = G(h \restriction W_{<b})$ for every $b \in \mathrm{dom}(h)$. The empty function is an attempt, with domain the initial segment $\emptyset$.

[A1] $G(h)$ is a well-determined set for every function $h$ whose domain is a proper initial segment of $W$.

[A2] The axioms of ZF are available, in particular Separation, Union and Replacement. No choice principle is assumed.

[L1] Transfinite induction on $(W, <)$: if $W_{<a} \subseteq S$ implies $a \in S$ for every $a \in W$, then $S = W$ ([[thm-transfinite-induction]]).

[L2] $W_{<a} = \{x \in W : x < a\}$ and $W_{\le a} = W_{<a} \cup \{a\}$ are initial segments, an intersection of initial segments is an initial segment, and $(W_{<a})_{<b} = W_{<b}$ for $b < a$ ([[def-initial-segment]]).

[L3] The order of $W$ is total and every nonempty subset of $W$ has a least element ([[def-well-order]]).

## Proof

**Proof technique:** direct.

1.1 Let $h$ and $k$ be attempts and put $D = \mathrm{dom}(h) \cap \mathrm{dom}(k)$; then $D$ is an initial segment of $W$, being an intersection of two downward closed sets. [L2, construct]

2.1 Put $S = \{a \in W : a \notin D \text{ or } h(a) = k(a)\}$ and suppose $W_{<a} \subseteq S$ for some $a \in D$; since $D$ is downward closed, $W_{<a} \subseteq D$, so $h$ and $k$ agree at every $x < a$, that is $h \restriction W_{<a} = k \restriction W_{<a}$, and therefore $h(a) = G(h \restriction W_{<a}) = G(k \restriction W_{<a}) = k(a)$, giving $a \in S$. [step 1.1, A1, L2]

3.1 If instead $a \notin D$ then $a \in S$ outright, so for every $a \in W$ the implication "$W_{<a} \subseteq S$ implies $a \in S$" holds, and transfinite induction gives $S = W$: any two attempts agree on the intersection of their domains. [step 2.1, L1]

4.1 In particular, for each $a \in W$ there is at most one attempt with domain $W_{<a}$, and at most one attempt with domain $W$, since two of them would have that same set as the intersection of their domains. [step 3.1]

5.1 Let $T = \{a \in W : \text{there is an attempt with domain } W_{<a}\}$, which is a set by Separation applied to $W$, and note that the attempt in question is unique when it exists. [step 4.1, A2, construct]

6.1 Suppose $W_{<a} \subseteq T$; for each $b < a$ let $h_b$ be the unique attempt with domain $W_{<b}$ and put $h_b^{+} = h_b \cup \{(b, G(h_b))\}$, a function with domain $W_{\le b}$ which is again an attempt, because it agrees with $h_b$ below $b$ and $h_b^{+}(b) = G(h_b) = G(h_b^{+} \restriction W_{<b})$. [step 5.1, step 4.1, A1, L2, construct]

7.1 The assignment $b \mapsto h_b^{+}$ is given by a formula, so Replacement makes $\{h_b^{+} : b < a\}$ a set; let $u$ be the union of that set. [step 6.1, A2, construct]

8.1 $u$ is a function: any two of the $h_b^{+}$ are attempts and therefore agree on the intersection of their domains, so no argument receives two different values. [step 7.1, step 3.1]

8.2 $\mathrm{dom}(u)$ is the union of the sets $W_{\le b}$ for $b < a$, which equals $W_{<a}$: each such $W_{\le b}$ is contained in $W_{<a}$ by transitivity of the order, and each $x < a$ lies in $W_{\le x}$. [step 7.1, step 6.1, L2, L3]

9.1 $u$ is an attempt with domain $W_{<a}$: for $c < a$ we have $u \restriction W_{<c} = h_c^{+} \restriction W_{<c} = h_c$ and $u(c) = h_c^{+}(c) = G(h_c)$, so $u(c) = G(u \restriction W_{<c})$. [step 8.1, step 8.2, step 6.1]

10.1 Hence $a \in T$ whenever $W_{<a} \subseteq T$, so $T = W$ by transfinite induction: for every $a \in W$ there is a unique attempt $h_a$ with domain $W_{<a}$. [step 9.1, step 5.1, step 4.1, L1]

11.1 Replacement applied to the formula $a \mapsto h_a^{+} = h_a \cup \{(a, G(h_a))\}$ makes $\{h_a^{+} : a \in W\}$ a set; let $F$ be its union, which by the arguments of steps 8.1 and 8.2 is a function whose domain is the union of the sets $W_{\le a}$ for $a \in W$, namely $W$ itself. [step 10.1, step 8.1, step 8.2, A2, construct]

12.1 $F$ satisfies the recursion: for $a \in W$ we get $F \restriction W_{<a} = h_a$ and $F(a) = h_a^{+}(a) = G(h_a)$, so $F(a) = G(F \restriction W_{<a})$, and in particular $F$ is an attempt with domain $W$. [step 11.1, step 9.1]

13.1 Uniqueness: any function $F'$ with domain $W$ satisfying $F'(a) = G(F' \restriction W_{<a})$ for all $a$ is by definition an attempt with domain $W$, hence equals $F$. [step 12.1, step 4.1]

14.1 There is therefore exactly one function $F$ with domain $W$ and $F(a) = G(F \restriction W_{<a})$ for every $a \in W$. [step 12.1, step 13.1] ∎

## Remarks

**Which axioms are spent.** Separation produces $T$ in step 5.1; Replacement produces the sets of attempts in steps 7.1 and 11.1; Union assembles them. Replacement is genuinely needed and cannot be traded away: the attempts $h_a$ are not subsets of any single set given in advance, so Separation alone cannot collect them. This is the standard reason transfinite recursion is unavailable in Zermelo set theory without Replacement.

**No choice is used, and the reason is uniqueness.** At every stage the object to be used is the *unique* attempt with a given domain, singled out by step 4.1, never one of many candidates. A construction phrased as "at stage $a$ pick some element not yet used" is a different theorem and does cost a choice principle; the difference is exactly the content of [[fs-transfinite-induction-needs-choice]].

**Class function, not a set function.** $G$ has to be allowed to take values anywhere in the universe, since $F(a)$ may be an arbitrary set, so $G$ cannot be assumed to be a set of ordered pairs. That is why the result is a schema. When $G$ happens to be an honest set function, defined on the set of all functions from proper initial segments of $W$ into a fixed set $A$ and taking values in $A$, the statement is an ordinary theorem of ZF and the same proof applies verbatim.

**Relation to ordinary recursion.** Taking $W = \mathbb{N}$ recovers the familiar recursion on the natural numbers, but not literally the published [[thm-recursion]]: that theorem prescribes $g(\sigma(n))$ in terms of $g(n)$ alone, whereas $G$ here sees the whole earlier history $F \restriction W_{<a}$. Course-of-values recursion on $\mathbb{N}$ is the special case of the present theorem, and it is what later pages use whenever a construction at stage $n$ consults all earlier stages.
