---
id: def-partition-and-refinement
kind: definition
title: "Partition of $[a,b]$ as a finite strictly increasing list $a = t_0 < t_1 < \\dots < t_n = b$, its subintervals and their lengths, its mesh, refinement, and the common refinement of two partitions"
status: draft
origin: session
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, def-max-min, lem-finite-set-has-max, def-natural-numbers, def-nat-order, def-complete-ordered-field, def-ordered-field, def-sequence, def-injection-surjection-bijection, thm-recursion, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: [def-partition-of-an-interval, def-mesh-of-a-partition]
landmark: true
short: "partition, mesh, refinement"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Partition of an interval (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partition_of_an_interval"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

**Standing hypothesis for this page.** Throughout, $\mathbb{R}$ is the complete
ordered field ([[def-complete-ordered-field]], [[def-ordered-field]]),
$\mathbb{N}$ is the set of natural numbers and **contains $0$**
([[def-natural-numbers]], [[def-nat-order]]), $\iota : \mathbb{N} \to \mathbb{R}$
is the canonical natural ([[def-canonical-natural]]), and $a, b$ are reals with

$$a \;<\; b .$$

Intervals and their lengths are those of [[def-interval]]; finite sums are those
of [[def-finite-sum]], indexed as $\sum_{i<n}$ over $i \in \mathbb{N}$.

### Partitions

A **partition of $[a,b]$** is a pair $P = (n, t)$ consisting of a natural number
$n \ge 1$ and a sequence $t : \mathbb{N} \to \mathbb{R}$ ([[def-sequence]]) with

$$t_0 = a, \qquad t_i < t_{i+1} \ \text{ for every } i < n, \qquad t_k = b \ \text{ for every } k \ge n .$$

The tail convention on the third clause is bookkeeping only: it makes $t$ a
genuine sequence, so that the finite-sum laws of [[lem-finite-sum-laws]] apply to
it verbatim, and it costs nothing because no index above $n$ is ever read. The
first two clauses say exactly that

$$a \;=\; t_0 \;<\; t_1 \;<\; \dots \;<\; t_n \;=\; b ,$$

the last equality because $t_n = b$ by the third clause. In particular
$i \mapsto t_i$ is strictly increasing, hence injective, on
$\{\, i \in \mathbb{N} : i \le n \,\}$ ([[def-injection-surjection-bijection]]),
and $a \le t_i \le b$ for every $i \le n$.

The **point set** of $P$ is the finite set

$$\operatorname{pts}(P) \;:=\; \{\, t_i \ : \ i \le n \,\} \;\subseteq\; [a,b], \qquad a, b \in \operatorname{pts}(P) .$$

The **subintervals** of $P$ are

$$I_i \;:=\; [\,t_i,\ t_{i+1}\,] \qquad (i < n),$$

and their **lengths** are $\Delta_i := t_{i+1} - t_i$. Each $\Delta_i > 0$, so
each $I_i$ is a nondegenerate closed bounded interval ([[def-interval]]). There
are $n$ of them and they are indexed from $i = 0$, not from $i = 1$: the first
subinterval is $[t_0, t_1] = [a, t_1]$.

**The lengths sum to $b - a$.** By the telescoping law, clause 5 of
[[lem-finite-sum-laws]],

$$\sum_{i<n} \Delta_i \;=\; \sum_{i<n} (t_{i+1} - t_i) \;=\; t_n - t_0 \;=\; b - a .$$

**The mesh.** The set $\{\, \Delta_i : i < n \,\}$ is a nonempty finite set of
reals, nonempty because $n \ge 1$, so it has a maximum
([[lem-finite-set-has-max]], [[def-max-min]]). The **mesh** of $P$ is

$$\|P\| \;:=\; \max\{\, \Delta_i \ : \ i < n \,\} \;>\; 0 ,$$

and $\Delta_i \le \|P\|$ for every $i < n$.

**The uniform partition.** For a natural $N \ge 1$, the **uniform partition of
$[a,b]$ into $N$ parts** is $U_N := (N, t)$ with

$$t_i \;:=\; a + \iota(i)\,\frac{b-a}{\iota(N)} \quad (i \le N), \qquad t_k := b \quad (k \ge N).$$

This is a partition: $t_0 = a$; $t_N = a + (b-a) = b$; and $t_{i+1} - t_i =
(b-a)/\iota(N) > 0$ for $i < N$, because $\iota(N) > 0$ and $\iota(i+1) =
\iota(i) + 1$ ([[lem-of-naturals-positive]], [[def-canonical-natural]]). Its
subinterval lengths are all equal to $(b-a)/\iota(N)$, so

$$\|U_N\| \;=\; \frac{b-a}{\iota(N)} .$$

### A partition is determined by its point set

**Claim.** If $P = (n,t)$ and $P' = (n', t')$ are partitions of $[a,b]$ with
$\operatorname{pts}(P) = \operatorname{pts}(P')$, then $n = n'$ and $t_i = t'_i$
for every $i \le n$.

*Proof.* First, $t_i = t'_i$ for every $i \le \min\{n,n'\}$, by induction on $i$
([[thm-induction-principle]]). For $i = 0$ both equal $a$. Suppose $t_j = t'_j$
for all $j \le i$ and $i + 1 \le \min\{n,n'\}$. The set
$S := \{\, x \in \operatorname{pts}(P) : x > t_i \,\}$ has $t_{i+1}$ as its least
element: $t_{i+1} \in S$, and any $x \in S$ is $t_j$ for some $j \le n$ with
$t_j > t_i$, which forces $j > i$ because $t$ is increasing on indices $\le n$,
hence $j \ge i+1$ and $x = t_j \ge t_{i+1}$. The same argument in $P'$ makes
$t'_{i+1}$ the least element of
$\{\, x \in \operatorname{pts}(P') : x > t'_i \,\}$, which is the same set $S$,
since the point sets agree and $t'_i = t_i$. A set has at most one least element
([[def-max-min]]), so $t_{i+1} = t'_{i+1}$.

Second, $n = n'$. If $n < n'$ then $t'_n = t_n = b$ by the previous paragraph,
while $t'_n < t'_{n'} = b$ because $t'$ is increasing on indices $\le n'$ and
$n < n'$; that is impossible. Exchanging the roles of $P$ and $P'$ rules out
$n' < n$. $\square$

So the map $P \mapsto \operatorname{pts}(P)$ is injective, and a partition may be
named by its point set whenever one is exhibited.

### Inserting a point

Let $P = (n,t)$ be a partition of $[a,b]$ and let $c \in [a,b]$. Define a
partition $P + c$ of $[a,b]$ as follows.

- If $c \in \operatorname{pts}(P)$, put $P + c := P$.
- Otherwise $c \ne a$ and $c \ne b$, so $a < c < b$. The set
  $T := \{\, t_i : i \le n \text{ and } t_i < c \,\}$ is a nonempty finite set of
  reals, nonempty because $t_0 = a < c$, so it has a maximum
  ([[lem-finite-set-has-max]]); let $i_0 \le n$ be the unique index with
  $t_{i_0} = \max T$, unique because $t$ is injective on indices $\le n$. Then
  $i_0 < n$, since $t_n = b > c$ puts $t_n \notin T$; and
  $$t_{i_0} \;<\; c \;<\; t_{i_0+1},$$
  the right inequality because $t_{i_0+1} \ne c$ (as $c \notin \operatorname{pts}(P)$)
  and $t_{i_0+1} < c$ would put $t_{i_0+1} \in T$ with $t_{i_0+1} > t_{i_0} = \max T$.
  Put $P + c := (n+1, s)$ with
  $$s_i := t_i \ (i \le i_0), \qquad s_{i_0+1} := c, \qquad s_i := t_{i-1} \ (i_0 + 2 \le i \le n+1), \qquad s_k := b \ (k \ge n+1).$$

In both cases $P + c$ is a partition of $[a,b]$ and

$$\operatorname{pts}(P + c) \;=\; \operatorname{pts}(P) \cup \{c\}, \qquad \|P+c\| \;\le\; \|P\| .$$

The displayed identity is immediate from the two cases. For the mesh: in the
first case nothing changes; in the second the list of subinterval lengths of
$P + c$ is that of $P$ with $\Delta_{i_0}$ replaced by the two numbers
$c - t_{i_0}$ and $t_{i_0+1} - c$, each of which is smaller than
$\Delta_{i_0} = (c - t_{i_0}) + (t_{i_0+1} - c)$ because the other is positive.
So every length of $P + c$ is at most a length of $P$, and the maximum cannot
increase. Finally the index count grows by exactly $1$ in the second case and
not at all in the first.

### Refinement and the common refinement

$P'$ **refines** $P$, and is a **refinement** of $P$, when

$$\operatorname{pts}(P) \;\subseteq\; \operatorname{pts}(P') .$$

Let $P = (n,t)$ and $Q = (m,s)$ be partitions of $[a,b]$. Applying the recursion
theorem ([[thm-recursion]]) to the set $\mathbb{N} \times \mathcal{P}_{[a,b]}$,
where $\mathcal{P}_{[a,b]}$ is the set of partitions of $[a,b]$, with starting
element $(0, P)$ and the map $(j, R) \mapsto (j+1,\ R + s_j)$ — legitimate
because $s_j \in [a,b]$ for every $j \in \mathbb{N}$ — gives a unique family
$(R_j)_{j \in \mathbb{N}}$ of partitions with $R_0 = P$ and $R_{j+1} = R_j + s_j$.
The **common refinement** of $P$ and $Q$ is

$$P \vee Q \;:=\; R_{m+1} .$$

**Its point set is the union.** By induction on $j$ ([[thm-induction-principle]]),
$\operatorname{pts}(R_j) = \operatorname{pts}(P) \cup \{\, s_l : l < j \,\}$;
taking $j = m+1$ gives

$$\operatorname{pts}(P \vee Q) \;=\; \operatorname{pts}(P) \cup \operatorname{pts}(Q).$$

Hence $P \vee Q$ refines both $P$ and $Q$; by the uniqueness claim above it is
the **only** partition with that point set, so $P \vee Q = Q \vee P$, and

$$P' \text{ refines } P \quad \Longrightarrow \quad P \vee P' = P' ,$$

since then $\operatorname{pts}(P) \cup \operatorname{pts}(P') =
\operatorname{pts}(P')$.

**Two size bounds, both used later.** Writing $n_R$ for the first component of a
partition $R$:

$$\|P \vee Q\| \;\le\; \|P\|, \qquad n_{P \vee Q} \;\le\; n_P + n_Q - 1 .$$

The first is the mesh bound above applied $m+1$ times. For the second, each
insertion raises the index count by at most $1$, and the two insertions of
$s_0 = a$ and $s_m = b$ raise it by $0$, since $a$ and $b$ already lie in
$\operatorname{pts}(P)$ and hence in $\operatorname{pts}(R_j)$ for every $j$; so
at most $m - 1$ of the $m+1$ insertions increase it.

### The index map of a refinement

Let $P' = (n',t')$ refine $P = (n,t)$. For each $i \le n$ the point $t_i$ lies in
$\operatorname{pts}(P')$, so there is exactly one $\varphi(i) \le n'$ with
$t'_{\varphi(i)} = t_i$, uniqueness because $t'$ is injective on indices $\le n'$.
The resulting map $\varphi$ satisfies

$$\varphi(0) = 0, \qquad \varphi(n) = n', \qquad \varphi(i) < \varphi(i+1) \ \ (i < n),$$

the first two because $t'_0 = a = t_0$ and $t'_{n'} = b = t_n$ together with
injectivity, and the third because $t_i < t_{i+1}$ and $t'$ is increasing on
indices $\le n'$. In particular $n \le n'$. Moreover, for $i < n$ and
$\varphi(i) \le j < \varphi(i+1)$,

$$I'_j \;=\; [\,t'_j,\ t'_{j+1}\,] \;\subseteq\; [\,t_i,\ t_{i+1}\,] \;=\; I_i ,$$

because $t_i = t'_{\varphi(i)} \le t'_j$ and $t'_{j+1} \le t'_{\varphi(i+1)} = t_{i+1}$.

**The blocks are counted by telescoping.** By clause 5 of
[[lem-finite-sum-laws]],
$\sum_{i<n}\big(\varphi(i+1) - \varphi(i)\big) = \varphi(n) - \varphi(0) = n'$,
so, subtracting $\sum_{i<n} 1 = n$,

$$\sum_{i<n} \big(\varphi(i+1) - \varphi(i) - 1\big) \;=\; n' - n ,$$

a sum of $n$ nonnegative integers, one for each block, which vanishes exactly at
the blocks consisting of a single index. This identity is the whole content of
the quantitative bound in [[lem-refinement-inequalities]], and it is also why
$n \le n'$.

Finally, the lengths inside a block sum to the length of the block:

$$\sum_{j = \varphi(i)}^{\varphi(i+1)-1} \Delta'_j \;=\; t'_{\varphi(i+1)} - t'_{\varphi(i)} \;=\; t_{i+1} - t_i \;=\; \Delta_i \qquad (i < n),$$

again by telescoping, applied to the sequence $l \mapsto t'_{\varphi(i)+l}$ and
read through the index-shift convention of [[def-finite-sum]].

## Remarks

- **Why $a < b$ is a standing hypothesis and not a case.** With $a = b$ the
  displayed chain $a = t_0 < \dots < t_n = b$ is unsatisfiable for $n \ge 1$, and
  admitting $n = 0$ would give a partition with no subintervals, an empty mesh
  set and no maximum. Every statement on this page is about a nondegenerate
  closed bounded interval, and the convention $\int_a^a f := 0$ is not adopted
  here because nothing below needs it.

- **The subintervals overlap at their shared endpoints, and that is harmless.**
  $I_i \cap I_{i+1} = \{t_{i+1}\}$, so the union $\bigcup_{i<n} I_i = [a,b]$ is
  not disjoint. Every quantity attached to a partition below is a sum over $i<n$
  of a number times $\Delta_i$, and a single point contributes length $0$, so no
  statement on this page is sensitive to the double counting of the $n-1$
  interior points.

- **Refinement is a relation between point sets, not between lists.** Defining it
  as "$P'$ is obtained from $P$ by inserting points" would be the same relation,
  by the uniqueness claim above, but it would make every proof carry an
  insertion order. The index map $\varphi$ recovers the list-level picture when
  it is wanted, and it is what [[lem-refinement-inequalities]] actually uses.
