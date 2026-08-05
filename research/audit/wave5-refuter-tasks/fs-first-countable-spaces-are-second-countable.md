# Adversarial proof reading — `fs-first-countable-spaces-are-second-countable`

## The item under review, in full

`items/fs-first-countable-spaces-are-second-countable.md`

```markdown
---
id: fs-first-countable-spaces-are-second-countable
kind: false-statement
title: "Refuted: every first countable space is second countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-first-countable-top, def-second-countable-space, def-standard-topologies, thm-r-uncountable]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
    - title: "Second-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Second-countable_space"
pipeline_run: null
---
## Statement

Every first countable space is second countable.

## Facts & Assumptions

**Given:** The set $D=\mathbb R$ carrying the discrete topology.

[L1] Every subset of a discrete space is open ([[def-standard-topologies]]).

[L2] A space is first countable when every point has an at most countable local base, and second countable when it has an at most countable global basis ([[def-first-countable-top]], [[def-second-countable-space]]).

[L3] The real line is uncountable ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** direct.

1.1 For each $x\in D$, the one-member family $\{\{x\}\}$ is a local base, because every neighbourhood of $x$ contains the open singleton $\{x\}$ by [L1]. [L1, L2]

1.2 If $\mathcal B$ is any basis of $D$, then for each $x\in D$ some $B_x\in\mathcal B$ satisfies $x\in B_x\subseteq\{x\}$, so $B_x=\{x\}$ and $\mathcal B$ contains every singleton. [L1]

2.1 Step 1.1 makes $D$ first countable, while steps 1.2 and [L3] make every basis uncountable; hence $D$ is not second countable. [step 1.1, step 1.2, L2, L3] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-first-countable-top` — definition — First countable space: a countable neighbourhood base at every point

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **first
countable** if every point of $X$ has an at most countable neighbourhood base:
for each $x \in X$ there is a family
$\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable
([[def-countable]], [[def-equinumerous]]) and such that every neighbourhood of
$x$ contains a member of $\mathcal{B}_x$ ([[def-neighbourhood-top]]).

**"Countable" here means "at most countable"**, as everywhere in this library
([[def-countable]]), so a *finite* neighbourhood base is permitted. That is not a
degenerate case: in a discrete space the one-element family $\{\{x\}\}$ is a
neighbourhood base at $x$, so every discrete space is first countable, and in an
indiscrete space $\{X\}$ is a neighbourhood base at every point.

**The base may be taken to consist of open sets, and it may be taken
decreasing.** If $\mathcal{B}_x$ is an at most countable neighbourhood base at
$x$, then replacing each $N \in \mathcal{B}_x$ by an open $U_N$ with
$x \in U_N \subseteq N$ gives an at most countable neighbourhood base of open
sets. Making the base decreasing, that is arranging
$M_0 \supseteq M_1 \supseteq \dots$, requires enumerating it and forming the
running finite intersections; both operations are carried out inside the proof of
the theorem that uses them, the next item, where the enumeration and the
recursion are cited explicitly rather than assumed here.

**First countability is a topological property**
([[def-homeomorphism-and-open-maps]]): a homeomorphism $h : X \to Y$ carries a
neighbourhood base at $x$ to a neighbourhood base at $h(x)$, since
$N \mapsto h[N]$ is a bijection between the neighbourhood filters preserving
inclusion, and a bijection preserves at most countability
([[def-equinumerous]]).

### `def-second-countable-space` — definition — Second countability: an at most countable basis for the topology

(statement provenance: literature-derived)

### Definition

A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

### `def-standard-topologies` — definition — The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies

(statement provenance: ai-altered)

### Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

### `thm-r-uncountable` — theorem — $\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)

(statement provenance: ai-altered)

### Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## What to return

Read `fs-first-countable-spaces-are-second-countable` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
