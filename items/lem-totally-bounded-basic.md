---
id: lem-totally-bounded-basic
kind: lemma
title: "A totally bounded metric space is bounded, every subspace of a totally bounded space is totally bounded, and the closure of a totally bounded subset is totally bounded"
status: published
origin: session
deps: [def-totally-bounded, def-metric-bounded-diameter, def-metric-ball, lem-finite-set-has-max, def-max-min, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-isometry-and-metric-embedding, lem-finite-choice, def-metric-space]
justified_by: []
forward_refs: [cex-bounded-not-totally-bounded]
aliases: []
landmark: false
short: "totally bounded: basic properties"
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
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with total boundedness as
in [[def-totally-bounded]] and boundedness as in
[[def-metric-bounded-diameter]]. Then:

1. If $(X,d)$ is totally bounded, it is bounded.
2. If $(X,d)$ is totally bounded and $A \subseteq X$, then the metric subspace
   $(A,d_A)$ is totally bounded ([[def-isometry-and-metric-embedding]]).
3. If $A \subseteq X$ is totally bounded, so is its closure $\overline{A}$
   ([[def-metric-interior-closure-boundary]]).

No choice principle is used. The one selection made is over a finite index set,
which [[lem-finite-choice]] supplies in ZF.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and a subset $A \subseteq X$, with $(A,d_A)$ the metric subspace and $\overline{A}$ the closure of $A$ in $X$.

[L1] $(X,d)$ is totally bounded exactly when for every real $\varepsilon > 0$ there is a finite $F \subseteq X$, empty or listable as $\{y_0, \dots, y_m\}$, with $X = \bigcup_{y \in F} B(y,\varepsilon)$ ([[def-totally-bounded]], [[def-metric-ball]]).

[L2] A subset is bounded when it is empty or contained in a ball $B(x_0,r)$ with $x_0$ in the space and $r > 0$ real ([[def-metric-bounded-diameter]]).

[L3] A metric satisfies $d(x,z) \le d(x,y) + d(y,z)$ and $d(x,y) = d(y,x)$, and $d(y,y) = 0$ ([[def-metric-space]]).

[L4] A nonempty finite set of reals has a maximum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Balls of a subspace are traces: $B_A(a,r) = B_X(a,r) \cap A$ for $a \in A$, $r > 0$ ([[def-isometry-and-metric-embedding]]).

[L6] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L7] $x \in \overline{A}$ exactly when $B(x,r) \cap A \ne \emptyset$ for every real $r > 0$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 If $X = \emptyset$ then $X$ is bounded, emptiness being one of the two cases of the definition. [L2]

1.2 Suppose instead $X \ne \emptyset$, and let $F$ be a finite $1$-net for $(X,d)$; then $F \ne \emptyset$, since a union over an empty family of balls is empty while $X$ is not, so $F = \{y_0, \dots, y_m\}$ for some $m \in \mathbb{N}$. [L1]

2.1 The set $\{\, d(y_0, y_j) : j \le m \,\}$ is a nonempty finite set of reals, so it has a maximum $R$, and $R \ge d(y_0,y_0) = 0$. [L3, L4, step 1.2]

3.1 Every $x \in X$ lies in $B(y_j, 1)$ for some $j \le m$, whence $d(y_0,x) \le d(y_0,y_j) + d(y_j,x) < R + 1$; so $X \subseteq B(y_0, R+1)$ with $R + 1 > 0$, and $X$ is bounded. [L1, L2, L3, step 2.1]

4.1 Claim 1 is proved, by step 1.1 in the empty case and by step 3.1 otherwise. [step 1.1, step 3.1]

5.1 Claim 1 being settled, take up claim 2: assume $(X,d)$ totally bounded, let $A \subseteq X$, let $\varepsilon > 0$ be real, fix a finite $(\varepsilon/2)$-net $F = \{y_0, \dots, y_m\}$ for $(X,d)$, and put $J := \{\, j \le m : B(y_j, \varepsilon/2) \cap A \ne \emptyset \,\}$. [step 4.1, L1]

6.1 If $A = \emptyset$ then the empty set is a finite $\varepsilon$-net for $(A,d_A)$; otherwise fix $a^\ast \in A$, put $S_j := B(y_j,\varepsilon/2) \cap A$ for $j \in J$ and $S_j := A$ for $j \le m$ with $j \notin J$, all nonempty, and apply finite choice to the function $j \mapsto S_j$ on $\sigma(m)$ to obtain $a_0, \dots, a_m \in A$ with $a_j \in B(y_j, \varepsilon/2)$ for every $j \in J$. [L6, step 5.1]

7.1 Put $G := \{a_0, \dots, a_m\} \subseteq A$, a finite set; given $a \in A$ there is $j \le m$ with $a \in B(y_j, \varepsilon/2)$, so $j \in J$ and $d(a, a_j) \le d(a,y_j) + d(y_j,a_j) < \varepsilon/2 + \varepsilon/2 = \varepsilon$, that is $a \in B_A(a_j, \varepsilon)$. [L3, L5, step 6.1]

8.1 So $G$ is a finite $\varepsilon$-net for $(A,d_A)$, and since $\varepsilon > 0$ was arbitrary the subspace $(A,d_A)$ is totally bounded: claim 2 is proved. [L1, step 7.1]

9.1 Claim 2 being settled, take up claim 3: assume $A \subseteq X$ totally bounded, let $\varepsilon > 0$ be real and fix a finite $(\varepsilon/2)$-net $F = \{b_0, \dots, b_p\} \subseteq A$ for $(A, d_A)$, or $F = \emptyset$ when $A = \emptyset$. [step 8.1, L1]

10.1 Let $x \in \overline{A}$; then $B(x,\varepsilon/2)$ meets $A$, so there is $a \in A$ with $d(x,a) < \varepsilon/2$, and $a \in B_A(b_i, \varepsilon/2)$ for some $i \le p$, whence $d(x,b_i) \le d(x,a) + d(a,b_i) < \varepsilon$. [L3, L5, L7, step 9.1]

11.1 Hence $\overline{A} = \bigcup_{i \le p} B_{\overline{A}}(b_i, \varepsilon)$ with $\{b_0,\dots,b_p\} \subseteq A \subseteq \overline{A}$ finite, so that set is a finite $\varepsilon$-net for the subspace $\overline{A}$; as $\varepsilon > 0$ was arbitrary, $\overline{A}$ is totally bounded and claim 3 is proved. [L1, L5, step 10.1]

12.1 Claims 1, 2 and 3 hold, by steps 4.1, 8.1 and 11.1 respectively. [step 4.1, step 8.1, step 11.1] ∎

## Remarks

**Where the halving is needed.** In claim 2 the net of the subspace has to consist of points of $A$, and a point $y_j$ of a net for $X$ need not lie in $A$; moving from $y_j$ to a point of $A$ within $\varepsilon/2$ of it costs the other half of $\varepsilon$. The same halving appears in claim 3, where the point being approximated lies in the closure rather than in $A$.

**Claim 1 does not reverse.** A bounded metric space need not be totally bounded; [[fs-bounded-implies-totally-bounded]] states the false converse and [[cex-bounded-not-totally-bounded]] exhibits the witness.
