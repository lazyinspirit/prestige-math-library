---
id: thm-the-long-line-is-countably-compact-and-not-compact
kind: theorem
title: "Every closed initial segment of the long ray is compact; the long ray is not compact; and, assuming countable choice, it is countably compact and not Lindel\\\"of"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-long-line, thm-the-long-line-is-a-connected-linear-continuum, def-compact-space, def-compactness-variants, def-order-topology-on-a-linearly-ordered-set, def-topology-basis-subbasis, def-upper-bound, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, lem-compactness-of-a-subspace-is-ambient, def-topological-space]
justified_by: []
aliases: [thm-long-ray-compactness]
landmark: true
short: "compactness of the long ray"
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
    - title: "Long line (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Long_line_(topology)"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
    - title: "MIT OpenCourseWare, 18.901 Introduction to Topology notes"
      url: "https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/e319b3a36ca774261b6b8c45e11804c2_notes_c.pdf"
pipeline_run: null
---

## Statement

Let $R = \omega_1 \times [0,1)$ be the closed long ray with its lexicographic
order and its order topology ([[def-the-long-line]]), with least element $0_R$
and no greatest element. For $y \in R$ write
$[0_R, y] := \{\, z \in R : z \le y \,\}$. Then:

1. **Initial segments are compact.** For every $u \in R$ the set $[0_R, u]$ is a
   compact subset of $R$ ([[def-compact-space]]).
2. **Countable compactness, assuming the Axiom of Countable Choice**
   ([[def-countable-choice]]): $R$ is countably compact
   ([[def-compactness-variants]]).
3. **$R$ is not compact**, and this needs no choice principle.
4. **$R$ is not Lindel&ouml;f, assuming the Axiom of Countable Choice.**

Claims 1 and 3 are theorems of ZF. Claims 2 and 4 spend countable choice, in
both cases only through claim 3 of
[[thm-the-long-line-is-a-connected-linear-continuum]], which carries the
hypothesis in its own statement; claim 2 spends it once more to pick a point in
each of countably many nonempty sets.

## Facts & Assumptions

**Given:** The closed long ray $R$ with its lexicographic order and order topology, its least element $0_R$, the open rays $R_{<b} = \{z : z < b\}$ and $R_{>a} = \{z : a < z\}$, and the open intervals $(a,b)$.

[A1] The Axiom of Countable Choice, for claims 2 and 4 only ([[def-countable-choice]]).

[L1] $R$ is a linearly ordered set with least element $0_R$ and no greatest element, carrying the order topology; $R$ itself, the open rays and the open intervals form a basis for that topology, so every open $U$ and every $x \in U$ admit one of them between them ([[def-the-long-line]], [[def-order-topology-on-a-linearly-ordered-set]], [[def-topology-basis-subbasis]]).

[L2] $R$ is a linear continuum: it is order-dense, so between any two of its elements lies a third, and every nonempty subset bounded above has a least upper bound ([[thm-the-long-line-is-a-connected-linear-continuum]], claim 1; [[def-upper-bound]]).

[L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $R$ has an upper bound in $R$ ([[thm-the-long-line-is-a-connected-linear-continuum]], claim 3; [[def-countable]]).

[L4] A space is compact when every open cover has a finite subcover, countably compact when every at most countable open cover has a finite subcover, and Lindel&ouml;f when every open cover has an at most countable subcover ([[def-compact-space]], [[def-compactness-variants]], [[def-topological-space]]).

[L5] $A$ is a compact subset of $R$ exactly when every family of open subsets of $R$ covering $A$ has finitely many members covering $A$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L6] For a nonempty set, being at most countable and admitting a surjection from $\mathbb{N}$ are the same thing: a nonempty at most countable family may be listed as $(U_n)_{n \in \mathbb{N}}$ with repetitions allowed, and conversely the range of any such list is at most countable; no choice principle is involved ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix $u \in R$ and a family $\mathcal{U}$ of open subsets of $R$ with $[0_R,u] \subseteq \bigcup \mathcal{U}$, and put $D := \{\, y \in [0_R,u] : \text{finitely many members of } \mathcal{U} \text{ cover } [0_R,y] \,\}$. Then $0_R \in D$, since $0_R$ lies in some member of $\mathcal{U}$ and $[0_R, 0_R] = \{0_R\}$, and $u$ is an upper bound of $D$; so [L2] gives $s := \sup D$, and $s \le u$ because $u$ is an upper bound. [L1, L2, L5, construct]

1.2 For claim 3 the family $\mathcal{R} := \{\, R_{<x} : x \in R \,\}$ is an open cover of $R$: its members are open by [L1], and every $y \in R$ lies in $R_{<x}$ for some $x$, since $R$ has no greatest element. [L1]

1.3 For claim 2 assume $\mathrm{AC}_\omega$ and let $\mathcal{U}$ be an at most countable open cover of $R$ with no finite subcover; it is nonempty, so [L6] lists it as $(U_n)_{n \in \mathbb{N}}$, and $E_n := R \setminus (U_0 \cup \dots \cup U_n)$ is nonempty for every $n$, so countable choice supplies a sequence $(x_n)$ with $x_n \in E_n$. The range $\{\, x_n : n \in \mathbb{N} \,\}$ is at most countable by [L6], so [L3] gives an upper bound $u \in R$ for it. [A1, L3, L4, L6]

2.1 $s$ lies in some $U \in \mathcal{U}$, and [L1] gives a basic $B$ with $s \in B \subseteq U$, where $B$ is $R$, an open ray or an open interval. If $B$ is $R$ or a lower ray $R_{<b}$, then every $z \le s$ satisfies $z < b$, so $[0_R,s] \subseteq B \subseteq U$ and $\{U\}$ covers $[0_R,s]$. Otherwise $B$ is $R_{>a}$ or $(a,b)$ with $a < s$, and $a$ is not an upper bound of $D$, so some $y \in D$ has $a < y \le s$; a finite $\mathcal{F} \subseteq \mathcal{U}$ covers $[0_R,y]$, and $[0_R,s] \subseteq [0_R,y] \cup (a,s] \subseteq \bigcup \mathcal{F} \cup B$, so $\mathcal{F} \cup \{U\}$ covers $[0_R,s]$. In every case $s \in D$. [L1, L2, step 1.1]

2.2 No finite subfamily of $\mathcal{R}$ covers $R$: the empty subfamily covers $\varnothing$ and $R$ is nonempty, while a subfamily $R_{<x_0}, \dots, R_{<x_n}$ has union $R_{<x}$ for $x$ the greatest of the $x_j$, which exists because the order is linear and the list finite, and $x \notin R_{<x}$. So $R$ is not compact, which is claim 3. [L1, L4, step 1.2]

3.1 $s = u$. Suppose $s < u$, and keep $B$ and $U$ from step 2.1, together with a finite $\mathcal{G} \subseteq \mathcal{U}$ covering $[0_R,s]$, which step 2.1 provides. If $B$ is $R$ or $R_{>a}$, then $(s,u] \subseteq B \subseteq U$ and $\mathcal{G} \cup \{U\}$ covers $[0_R,u]$, putting $u$ in $D$ and forcing $u \le s$, contrary to $s < u$. If $B$ is $R_{<b}$ or $(a,b)$, then $s < b$ and $s < u$, so the lesser of $b$ and $u$ is strictly above $s$ and [L2] gives $z$ with $s < z$ and $z$ below that lesser element; then $z \le u$ and $(s,z] \subseteq B$, so $\mathcal{G} \cup \{U\}$ covers $[0_R,z]$ and $z \in D$ with $z > s$, contradicting $s = \sup D$. [L1, L2, step 1.1, step 2.1]

4.1 By steps 2.1 and 3.1 the element $u$ lies in $D$, so finitely many members of $\mathcal{U}$ cover $[0_R,u]$; as $\mathcal{U}$ was arbitrary, [L5] makes $[0_R,u]$ a compact subset of $R$, which is claim 1. [L5, step 1.1, step 2.1, step 3.1]

5.1 By claim 1 the set $[0_R,u]$ is covered by finitely many of the $U_n$, say by $U_{n_0}, \dots, U_{n_p}$; let $N$ be the greatest of $n_0, \dots, n_p$. Then $x_N \le u$, so $x_N \in [0_R,u] \subseteq U_{n_0} \cup \dots \cup U_{n_p} \subseteq U_0 \cup \dots \cup U_N$, contradicting $x_N \in E_N$. So no such $\mathcal{U}$ exists and $R$ is countably compact, which is claim 2. [L4, L5, step 1.3, step 4.1]

6.1 For claim 4 assume $\mathrm{AC}_\omega$ and let $\mathcal{V} \subseteq \mathcal{R}$ be an at most countable subfamily of the cover of step 1.2. The map $x \mapsto R_{<x}$ is injective, since $x < x'$ puts $x$ in $R_{<x'}$ and not in $R_{<x}$, so $A := \{\, x \in R : R_{<x} \in \mathcal{V} \,\}$ is at most countable and [L3] gives it an upper bound $w \in R$; then $R_{<x} \subseteq R_{<w}$ for every $x \in A$, so $\bigcup \mathcal{V} \subseteq R_{<w}$ and $w$ is covered by no member of $\mathcal{V}$. So $\mathcal{R}$ has no at most countable subcover and $R$ is not Lindel&ouml;f, which is claim 4; with claims 1, 2 and 3 at steps 4.1, 5.1 and 2.2 the theorem is proved. [A1, L3, L4, step 1.2, step 2.2, step 5.1] ∎

## Remarks

**The long ray is the standard example of a countably compact space that is not compact.** Both halves come from the same feature: an at most countable subset of $R$ is bounded above, so countably many open sets can never exhaust it unless finitely many of them already do, while the uncountable cover by initial rays climbs forever. The ordinal $\omega_1$ behaves the same way ([[thm-ordinal-spaces-and-compactness]]) and for the same reason, which is why both are proved from a boundedness theorem rather than from any covering argument.

**Claim 1 is a Heine-Borel theorem for a linear continuum.** Its proof uses only that $R$ is order-dense with the least upper bound property, together with the description of the order topology by rays and intervals; no metric and no countability appears. The same argument proves that a closed bounded interval of $\mathbb{R}$ is compact, which is why the two look alike.

**What is not claimed.** Nothing above says $R$ is sequentially compact, and nothing says it is metrizable or first countable; a countably compact space need not be sequentially compact without further hypotheses, and the implications that do hold are collected in [[thm-compactness-variants-hierarchy]].
