---
id: ex-kuratowski-fourteen-sets
kind: example
title: "Closure and complement generate at most fourteen sets from any subset, and $(0,1) \\cup (1,2) \\cup \\{3\\} \\cup ([4,5] \\cap \\mathbb{Q})$ attains fourteen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kuratowski-closure-axioms, lem-interior-closure-boundary-identities, thm-closure-characterisation-top,
       def-interior-closure-boundary-top, def-topological-space, def-metrizable-space, def-interval,
       lem-rat-embeds-dense, lem-real-line-is-a-metric-space, cor-interval-uncountable, thm-rationals-countable,
       lem-subset-of-countable, def-countable, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra,
       def-max-min]
justified_by: []
aliases: [ex-kuratowski-closure-complement]
landmark: false
short: "the fourteen-set problem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Kuratowski's closure-complement problem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kuratowski%27s_closure-complement_problem"
    - title: "Kuratowski closure axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kuratowski_closure_axioms"
pipeline_run: null
---

## Example

Let $X$ be a topological space and write, for $A \subseteq X$,

$$k(A) := \overline{A}, \qquad c(A) := X \setminus A,$$

the closure and the complement ([[def-interior-closure-boundary-top]]). Words in
the two symbols act on $\mathcal{P}(X)$ by composition, the empty word acting as
the identity. Then:

1. **The relation.** As operators on $\mathcal{P}(X)$,
   $$c c = 1, \qquad k k = k, \qquad k c k c k c k = k c k .$$
2. **At most fourteen.** For every $A \subseteq X$ the family of sets obtainable
   from $A$ by applying words in $k$ and $c$ has at most **fourteen** members,
   namely the images of $A$ under the fourteen words
   $$1,\ c,\ k,\ kc,\ ck,\ ckc,\ kck,\ kckc,\ ckck,\ ckckc,\ kckck,\ kckckc,\ ckckck,\ ckckckc .$$
3. **Fourteen is attained.** In $\mathbb{R}$ with its usual topology
   ([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]) the set
   $$A := (0,1) \cup (1,2) \cup \{3\} \cup \big([4,5] \cap \mathbb{Q}\big)$$
   produces fourteen pairwise distinct sets. Seven of them are
   $$A,\quad kA = [0,2] \cup \{3\} \cup [4,5],\quad kckA = (-\infty,0] \cup [2,4] \cup [5,\infty),$$
   $$kckckA = [0,2] \cup [4,5],\quad kcA = (-\infty,0] \cup \{1\} \cup [2,\infty),\quad kckcA = [0,2],\quad kckckcA = (-\infty,0] \cup [2,\infty),$$
   and the other seven are their complements.

## Facts & Assumptions

**Given:** A topological space $X$ and a subset $A \subseteq X$; and, for claim 3, $\mathbb{R}$ with its usual topology and the set $A$ displayed above. Write $i := ckc$, so that $i(A) = \operatorname{int}(A)$ by [[def-interior-closure-boundary-top]].

[A1] $\overline{A}$ is the smallest closed superset of $A$; $A \subseteq \overline{A}$; $\overline{A}$ is closed and a set is closed exactly when it equals its closure; $X \setminus \operatorname{int}(A) = \overline{X \setminus A}$, so $i = ckc$ is the interior operator ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

[A2] $k$ and $i$ are monotone, and $\overline{A \cup B} = \overline{A} \cup \overline{B}$ for two sets, hence for finitely many by iteration ([[lem-interior-closure-boundary-identities]], claims 1 and 2).

[A3] Closure satisfies the Kuratowski axioms $k\varnothing = \varnothing$, $A \subseteq kA$, $kk = k$ and $k(A \cup B) = kA \cup kB$ ([[thm-kuratowski-closure-axioms]], claim 1); and $cc = 1$ because complementation is an involution ([[def-topological-space]]).

[L1] In $\mathbb{R}$: $B(x,r) = (x-r,\ x+r)$; a set is open exactly when each of its points has a ball inside it; balls are open ([[lem-real-line-is-a-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metrizable-space]], [[def-interval]]).

[L2] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]); $\mathbb{Q}$ is at most countable ([[thm-rationals-countable]]), every subset of an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]]), and a nondegenerate open interval is uncountable ([[cor-interval-uncountable]]).

[L3] A two-element set of reals has a maximum and a minimum, the order being total ([[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 $cc = 1$ and $kk = k$ hold by [A3]. [A3]

1.2 For an open $B \subseteq X$: $B \subseteq kB$ by [A3], and $B = iB$ because $B$ is open, so monotonicity of $i$ gives $B = iB \subseteq ikB$ and monotonicity of $k$ gives $kB \subseteq kikB$; conversely $ikB \subseteq kB$ gives $kikB \subseteq kkB = kB$. Hence $kikB = kB$ for every open $B$. [A1, A2, A3]

1.3 In $\mathbb{R}$, for $a < b$ the interval $(a,b)$ is open: for $x \in (a,b)$ put $r := \min\{x - a,\ b - x\} > 0$ by [L3]; then $(x-r, x+r) \subseteq (a,b)$. The rays $(-\infty,b)$ and $(a,\infty)$ are open by the same computation with one of the two bounds omitted. [L1, L3]

1.4 In $\mathbb{R}$, for $a < b$ and any $x \in [a,b]$ and any $r > 0$, the interval $J := (\max\{a,\ x-r\},\ \min\{b,\ x+r\})$ is nonempty: its left endpoint is below its right endpoint because $a < b$, $a \le x < x + r$ and $x - r < x \le b$ and $x - r < x + r$. Every point of $J$ lies in $[a,b] \cap (x-r, x+r)$. [L1, L3]

1.5 No nonempty open subset of $\mathbb{R}$ is contained in $\mathbb{Q}$: it would contain a ball $(x-r,x+r)$, which is uncountable by [L2], whereas a subset of $\mathbb{Q}$ is at most countable by [L2]. [L1, L2]

2.1 In $\mathbb{R}$, for $a \le b$ the interval $[a,b]$ is closed, its complement being $(-\infty,a) \cup (b,\infty)$, a union of two open sets; likewise $(-\infty,b]$ and $[a,\infty)$ are closed, and a singleton $\{t\}$ is closed, its complement being $(-\infty,t) \cup (t,\infty)$. [step 1.3, A1, L1]

2.2 By step 1.4 and [L2] the set $J$ contains a rational, and being a nonempty open interval it is uncountable by [L2] while $\mathbb{Q}$ is at most countable, so $J$ also contains a point outside $\mathbb{Q}$. Hence for every $x \in [a,b]$ and every $r > 0$ the ball $(x-r,x+r)$ meets both $[a,b] \cap \mathbb{Q}$ and $[a,b] \setminus \mathbb{Q}$. [step 1.4, L2]

2.3 Claim 1: by step 1.2 applied to the open set $B := iA$ one gets $kikiA = kiA$ for every $A$, that is $kiki = ki$ as operators; substituting $i = ckc$ turns $ki$ into $kckc$ and gives $kckckckc = kckc$; composing on the right with $c$ and using $cc = 1$ gives $kckckck = kck$. [step 1.1, step 1.2, A1]

3.1 Consequently $\overline{[a,b] \cap \mathbb{Q}} = [a,b] = \overline{[a,b] \setminus \mathbb{Q}}$ for $a < b$: each closure is contained in $[a,b]$, which is closed by step 2.1, and contains $[a,b]$ by step 2.2 together with the neighbourhood criterion for the closure. [step 2.1, step 2.2, A1, L1]

3.2 Likewise $\overline{(a,b)} = [a,b]$ for $a < b$: the inclusion $\subseteq$ holds because $[a,b]$ is closed and contains $(a,b)$, and $\supseteq$ because for $x \in [a,b]$ and $r > 0$ the nonempty interval $J$ of step 1.4 meets $(a,b)$, being contained in $(a,b)$ except possibly for its endpoints, which it excludes. The same argument gives $\overline{(a,\infty)} = [a,\infty)$ and $\overline{(-\infty,b)} = (-\infty,b]$. [step 2.1, step 1.4, A1, L1]

3.3 Claim 2: using $cc = 1$ and $kk = k$, every word in $k$ and $c$ equals an **alternating** word, one with no two adjacent equal letters. An alternating word of length at least $8$ contains $kckckck$ as a block of seven consecutive letters — the first seven if it begins with $k$, the second through eighth if it begins with $c$ — and replacing that block by $kck$ shortens it by four. Iterating, every word equals an alternating word of length at most $7$. There are exactly two alternating words of each length from $1$ to $7$ and one of length $0$, and the length-$7$ word beginning with $k$ is $kckckck = kck$ by claim 1; the remaining fourteen are those listed in the statement. [step 1.1, step 2.3]

4.1 In $\mathbb{R}$ with $A = (0,1) \cup (1,2) \cup \{3\} \cup ([4,5] \cap \mathbb{Q})$: by [A2] the closure of the four-term union is the union of the four closures, which by steps 2.1, 3.1 and 3.2 are $[0,1]$, $[1,2]$, $\{3\}$ and $[4,5]$; hence $kA = [0,2] \cup \{3\} \cup [4,5]$. [step 2.1, step 3.1, step 3.2, A2]

4.2 $cA = (-\infty,0] \cup \{1\} \cup [2,3) \cup (3,4) \cup ([4,5] \setminus \mathbb{Q}) \cup (5,\infty)$. Here $\overline{[2,3)} = [2,3]$, because $[2,3]$ is closed and contains $[2,3)$ while monotonicity gives $[2,3] = \overline{(2,3)} \subseteq \overline{[2,3)}$; the other five closures are $(-\infty,0]$, $\{1\}$, $[3,4]$, $[4,5]$ and $[5,\infty)$ by steps 2.1, 3.1 and 3.2. So by [A2] the closure of the six-term union is $(-\infty,0] \cup \{1\} \cup [2,3] \cup [3,4] \cup [4,5] \cup [5,\infty) = (-\infty,0] \cup \{1\} \cup [2,\infty)$, that is $kcA = (-\infty,0] \cup \{1\} \cup [2,\infty)$. [step 2.1, step 3.1, step 3.2, A2]

5.1 $ckA = (-\infty,0) \cup (2,3) \cup (3,4) \cup (5,\infty)$, and its closure is $(-\infty,0] \cup [2,4] \cup [5,\infty)$ by [A2] and steps 3.2 and 2.1; so $kckA = (-\infty,0] \cup [2,4] \cup [5,\infty)$. [step 2.1, step 3.2, step 4.1, A2]

5.2 $ckcA = (0,1) \cup (1,2)$, whose closure is $[0,2]$ by [A2] and step 3.2; so $kckcA = [0,2]$. Then $ckckcA = (-\infty,0) \cup (2,\infty)$, whose closure is $(-\infty,0] \cup [2,\infty)$ by [A2] and step 3.2; so $kckckcA = (-\infty,0] \cup [2,\infty)$. [step 3.2, step 4.2, A2]

6.1 $ckckA = (0,2) \cup (4,5)$, whose closure is $[0,2] \cup [4,5]$ by [A2] and step 3.2; so $kckckA = [0,2] \cup [4,5]$. [step 3.2, step 5.1, A2]

7.1 The seven sets $A$, $kA$, $kckA$, $kckckA$, $kcA$, $kckcA$, $kckckcA$ have the following membership pattern at the five test points $0$, $1$, $3$, $9/2$, $6$, writing $1$ for "belongs" and $0$ for "does not": $A$ gives $(0,0,1,1,0)$, since $9/2$ is a rational in $[4,5]$; $kA$ gives $(1,1,1,1,0)$; $kckA$ gives $(1,0,1,0,1)$; $kckckA$ gives $(1,1,0,1,0)$; $kcA$ gives $(1,1,1,1,1)$; $kckcA$ gives $(1,1,0,0,0)$; $kckckcA$ gives $(1,0,1,1,1)$. [step 4.1, step 5.1, step 6.1, step 4.2, step 5.2, L2]

8.1 The remaining seven words of claim 2 are the complements of these seven — the list of fourteen words consists of the seven above and those seven preceded by $c$ — so their patterns are the bitwise complements $(1,1,0,0,1)$, $(0,0,0,0,1)$, $(0,1,0,1,0)$, $(0,0,1,0,1)$, $(0,0,0,0,0)$, $(0,0,1,1,1)$, $(0,1,0,0,0)$. The fourteen patterns are pairwise distinct, so the fourteen sets are, and claim 3 holds. [step 3.3, step 7.1] ∎

## Remarks

- **Where each axiom is spent.** Claim 1 is the whole content of the bound: the reduction in claim 2 is combinatorics on words once $cc = 1$, $kk = k$ and $kckckck = kck$ are available. The proof of the last of these uses only that the interior of a set is open, that $k$ and $i$ are monotone and that $k$ is idempotent — that is, the Kuratowski axioms of [[thm-kuratowski-closure-axioms]] and nothing about $\mathbb{R}$.

- **Fourteen, not fifteen.** There are fifteen alternating words of length at most seven; exactly one of them, $kckckck$, collapses. That single collapse is the entire difference between the true bound and the naive one, which is why the identity of claim 1 is the theorem here.

- **Why this particular set.** The four pieces of $A$ are chosen to exercise the four ways a set can fail to be closed or open: an interval missing an interior point, an isolated point, a dense-with-empty-interior piece, and the gap between the pieces. Removing any one of them lowers the count.
