---
id: ex-rationals-in-an-interval
kind: example
title: "The rationals in an interval are countably infinite while the interval is uncountable"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-complete-ordered-field, def-ordered-field, thm-of-archimedean,
       def-archimedean-field, lem-of-q-dense, lem-of-q-embeds,
       thm-rationals-countable, lem-subset-of-countable,
       lem-countable-iff-surjection-from-n, thm-well-ordering-principle,
       thm-recursion, thm-induction-principle, lem-nat-order-is-membership,
       thm-schroder-bernstein, cor-interval-uncountable,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       def-countable, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, def-nat-order, def-function,
       thm-n-cross-n-countable, def-image-and-preimage-under-a-relation,
       def-subset-and-proper-subset, def-set-difference-and-symmetric-difference]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§2.8 'Density of the Rationals', Theorem 2.31 and the paragraph after it, printed p. 36: between any two distinct reals there is a rational, and repeated application gives infinitely many rationals between any pair"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§1.2, Theorem 1.2.4(ii) (Q is dense in R) and the paragraph before it, printed p. 31: there are infinitely many rational numbers in any interval; §1.4, Theorem 1.4.2, printed p. 42: R is uncountable"
---

## Example

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]),
let $\varepsilon : \mathbb{Q} \to \mathbb{R}$ be the canonical embedding and
write $\mathbb{Q}_{\mathbb{R}} = \varepsilon[\mathbb{Q}]$ ([[lem-of-q-embeds]]).
For $a < b$ in $\mathbb{R}$ put
$S_{a,b} = \{\, x \in \mathbb{Q}_{\mathbb{R}} : a < x < b \,\}$ and
$I_{a,b} = \{\, x \in \mathbb{R} : a < x < b \,\}$. Then

- **(i)** $S_{a,b} \approx \mathbb{N}$: the rationals of any nondegenerate
  interval are countably infinite ([[def-countable]], [[def-equinumerous]]);
- **(ii)** $I_{a,b} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable, although
  $S_{a,b}$ is an at most countable subset of $I_{a,b}$ that is dense in it
  ([[lem-of-q-dense]]) and $I_{a,b}$ itself is uncountable
  ([[cor-interval-uncountable]]).

Cardinality and order-density are independent properties of a subset of
$\mathbb{R}$. Both parts are theorems of ZF: the enumeration in (i) is built by a
canonical least-index recursion, and (ii) interleaves two given enumerations.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]), reals $a < b$, the canonical embedding $\varepsilon : \mathbb{Q} \to \mathbb{R}$ with $\mathbb{Q}_{\mathbb{R}} = \varepsilon[\mathbb{Q}]$ ([[lem-of-q-embeds]]), and the sets $S_{a,b} \subseteq I_{a,b}$ ([[def-image-and-preimage-under-a-relation]], [[def-subset-and-proper-subset]]).

[F1] $\mathbb{R}$ is Archimedean ([[thm-of-archimedean]], [[def-archimedean-field]]), and $\varepsilon$ is injective, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q}$ and $\mathbb{Q} \approx \mathbb{N}$ ([[lem-of-q-embeds]], [[thm-rationals-countable]], [[def-equinumerous]]).

[F2] Density: for any $x < y$ in $\mathbb{R}$ there is $q \in \mathbb{Q}$ with $x < \varepsilon(q) < y$ ([[lem-of-q-dense]]). Applied with $x := a$, $y := b$ this gives $S_{a,b} \ne \varnothing$, and applied to $x < y$ with $a \le x < y \le b$ it gives an element of $S_{a,b}$ between them, so $S_{a,b}$ is dense in $I_{a,b}$.

[F3] A subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); a nonempty at most countable set is a surjective image of $\mathbb{N}$, and conversely a surjective image of $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]]).

[F4] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]). Recursion: for a set $X$, $x_0 \in X$ and $F : X \to X$ there is $r : \mathbb{N} \to X$ with $r(0) = x_0$ and $r(\sigma(n)) = F(r(n))$ ([[thm-recursion]]). Induction holds on $\mathbb{N}$ ([[thm-induction-principle]]), and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]). The inverse of a bijection is a bijection ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[F5] Schröder-Bernstein: injections both ways give a bijection ([[thm-schroder-bernstein]]); $A \preceq B$ means an injection $A \to B$ exists ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F6] The open interval is uncountable: $I_{a,b}$ is not at most countable ([[cor-interval-uncountable]], [[def-countable]]).

[F7] Set algebra: $x \in I_{a,b} \setminus \mathbb{Q}_{\mathbb{R}}$ exactly when $x \in I_{a,b}$ and $x \notin \mathbb{Q}_{\mathbb{R}}$ ([[def-set-difference-and-symmetric-difference]]); $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ through the pairing of [[thm-n-cross-n-countable]], whose inverse is a bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$.

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is countably infinite. Since $\varepsilon$ is injective, it is a bijection of $\mathbb{Q}$ onto its image $\mathbb{Q}_{\mathbb{R}}$; by [F1] there is a bijection $\mathbb{Q} \to \mathbb{N}$, and composing its inverse with $\varepsilon$ exhibits a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$. In particular $\mathbb{Q}_{\mathbb{R}}$ is at most countable. [F1, F4]

2.1 $S_{a,b}$ is at most countable, nonempty, and dense in $I_{a,b}$. It is a subset of $\mathbb{Q}_{\mathbb{R}}$, so [F3] applies; it is nonempty and dense by [F2]. [step 1.1, F2, F3]

2.2 The step function $F$ is well defined on $I_{a,b}$. Fix the bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ of step 1.1. For $x \in I_{a,b}$ the set $\{\, k \in \mathbb{N} : x < e(k) < b \,\}$ is nonempty by [F2] applied to $x < b$, and it is a subset of $\mathbb{N}$, so it has a least element $k(x)$ by [F4]; put $F(x) := e(k(x))$, a rational with $x < F(x) < b$. Likewise $\{\, k : a < e(k) < b \,\}$ is nonempty by [F2] applied to $a < b$, and its least element $k_0$ gives the seed $r_0 := e(k_0) \in S_{a,b}$. [step 1.1, F2, F4]

3.1 The recursion $r(0) := r_0$, $r(\sigma(n)) := F(r(n))$ produces a strictly increasing injection $r : \mathbb{N} \to S_{a,b}$. Since $F$ maps $I_{a,b}$ into itself — $x < F(x) < b$ and $a < x$ give $a < F(x)$ — the recursion theorem applies with $X = I_{a,b}$ by [F4], and $r(n) \in I_{a,b}$ for all $n$. Moreover $r(n) < r(\sigma(n))$ for every $n$ by the defining property of $F$, Inductively, $m<n$ implies $r(m)<r(n)$: the case $n=0$ is vacuous, and $m<\sigma(n)$ gives $m\le n$, so either $m=n$ and the adjacent inequality applies, or $m<n$ and transitivity combines the induction hypothesis with $r(n)<r(\sigma(n))$. Distinct indices are comparable, hence $r$ is injective. Finally every value $r(n)$ lies in $\mathbb{Q}_{\mathbb{R}} \cap I_{a,b} = S_{a,b}$. [step 2.2, F4]

3.2 Part (ii): $C := I_{a,b} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable. Suppose $C$ were at most countable. If $C = \varnothing$ then $I_{a,b} = S_{a,b}$ is at most countable by step 2.1, contradicting [F6]. Otherwise $C \ne \varnothing$, and then [F3] applies to $S_{a,b}$ and to $C$, which are both nonempty at most countable — $S_{a,b}$ by step 2.1 — giving surjections $f, g : \mathbb{N} \to S_{a,b}, C$. Define $t : \mathbb{N} \times \mathbb{N} \to I_{a,b}$ by $t(0,k) := f(k)$ and $t(\sigma(i),k) := g(k)$; every element of $I_{a,b}$ lies in $S_{a,b}$ or in $C$ by [F7], so $t$ is onto. Composing $t$ with the bijection $\mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [F7] gives a surjection $\mathbb{N} \to I_{a,b}$, so $I_{a,b}$ is at most countable by [F3], contradicting [F6]. Hence $C$ is uncountable. [step 2.1, F3, F6, F7]

4.1 Therefore $\mathbb{N} \preceq S_{a,b}$ via the injection $r$, and [F3] supplies a surjection $h:\mathbb{N}\to S_{a,b}$ since $S_{a,b}$ is nonempty and at most countable by step 2.1. The rule $x\mapsto\min\{k:h(k)=x\}$ is an injection $S_{a,b}\to\mathbb{N}$ by [F4]: equal least indices have the same $h$-value. Schröder-Bernstein therefore gives $S_{a,b} \approx \mathbb{N}$; this is (i). [step 2.1, step 3.1, F3, F4, F5]

5.1 Collecting: $S_{a,b} \approx \mathbb{N}$ by step 4.1, so the rationals of the interval are countably infinite; $S_{a,b}$ is dense in $I_{a,b}$ by step 2.1; and $I_{a,b} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable by step 3.2 while $I_{a,b}$ is uncountable by [F6]. The increasing injection $r$ is defined by least elements of nonempty sets of naturals and a single recursion, and the two surjections in the interleaving are given by the criterion, so no choice principle is used. [step 2.1, step 4.1, step 3.2, F6] ∎

## Remarks

- The two halves separate the two notions the interval carries: order-density (every subinterval meets the set) and cardinality (the set may be far smaller than the interval). The rationals of $(a,b)$ provide the first with the smallest possible infinite cardinality the second admits, while their complement is uncountable.

- The recursion chooses the *least* index of a rational strictly between the current point and $b$, so the increasing sequence $r$ is canonical once $e$ is fixed; the seed is the least-indexed rational of the interval. This sequence witnesses infinitude; it does not enumerate $S_{a,b}$, since every term is at least $r_0$ while density supplies rationals in $(a,r_0)$. Replacing "least" by "some" would silently use dependent choice, since the next rational depends on the current one.
