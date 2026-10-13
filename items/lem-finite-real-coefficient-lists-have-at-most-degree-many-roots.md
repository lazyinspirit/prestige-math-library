---
id: lem-finite-real-coefficient-lists-have-at-most-degree-many-roots
kind: lemma
title: "A real coefficient list of degree d has at most d real roots"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-complete-ordered-field, def-ordered-field, def-field, def-finite-sum,
       lem-finite-sum-laws, def-integer-power, lem-of-no-zero-divisors, lem-of-zero-mult,
       thm-strong-induction, thm-induction-principle, thm-recursion, def-natural-numbers,
       def-nat-order, def-nat-addition, thm-nat-linear-order, lem-nat-discrete,
       lem-nat-order-is-membership, lem-nat-transitive-irreflexive, lem-pigeonhole,
       thm-well-ordering-principle, def-countable, def-equinumerous,
       def-injection-surjection-bijection, def-subset-and-proper-subset,
       def-set-difference-and-symmetric-difference]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, Volume I (complete author-hosted textbook)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§1.4 Exercise 1.4.9, printed p. 43, complete exercise and hint: the at-most-degree real-root fact used for algebraic-number countability; its proof is supplied here, not assumed"
---

## Statement

Let $d \in \mathbb{N}$ and let $a_0, a_1, \dots, a_d$ be real numbers with
$a_d \neq 0$ ([[def-complete-ordered-field]]). Using the finite sums of
[[def-finite-sum]] and the natural powers $x^k$ of [[def-integer-power]], put

$$P(x) = \sum_{k=0}^{d} a_k x^k \qquad (x \in \mathbb{R}),$$

the list always being read as the sequence that is $a_k$ for $k \le d$ and $0$
for $k > d$. Let $Z = Z(P) = \{\, x \in \mathbb{R} : P(x) = 0 \,\}$. Then $Z$ is
finite of cardinality at most $d$: there is $m \in \mathbb{N}$ with $m \le d$ and
$Z \approx m$ ([[def-countable]], [[def-equinumerous]]). For $d = 0$ this says
$Z = \varnothing$.

This is a statement about finite coefficient lists and their evaluations: it
requires neither a polynomial-ring construction nor any choice axiom. Only field
arithmetic, finite sums and induction are used, and if $Z \neq \varnothing$ one
single root is instantiated existentially, never a family of choices. It is the
local prerequisite for the algebraic-number example on this page.

## Facts & Assumptions

**Given:** A natural number $d$, reals $a_0, \dots, a_d$ with $a_d \neq 0$, and the sequence $c$ with $c_k = a_k$ for $k < \sigma(d)$ and $c_k = 0$ otherwise; $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-field]]), with finite sums $\sum_{k<n}$ as in [[def-finite-sum]] and powers as in [[def-integer-power]]. We prove, by strong induction on $d$, the claim

$$C(d): \quad \text{for every list } a_0, \dots, a_d \text{ with } a_d \ne 0,\ \text{there is } m \in \mathbb{N},\ m \le d,\ \text{with } Z \approx m.$$

[F1] Field arithmetic: $ab = 0$ implies $a = 0$ or $b = 0$ ([[lem-of-no-zero-divisors]]); $0 \cdot a = 0$ ([[lem-of-zero-mult]]); addition, subtraction and multiplication obey the usual distributivity and associativity laws, and $a - b = 0$ implies $a = b$.

[F2] Finite sums ([[def-finite-sum]]): $\sum_{k<0} u_k = 0$, $\sum_{k<\sigma(n)} u_k = \sum_{k<n} u_k + u_n$, and a general block is $\sum_{k=m}^{n} u_k = \sum_{j<d'} u_{m+j}$ for $d' = n+1-m$, the empty block being $0$. Powers: $x^0 = 1$ and $x^{n+1} = x^n \cdot x$.

[F3] Finite sum laws ([[lem-finite-sum-laws]]): additivity $\sum_{k<n}(u_k + v_k) = \sum_{k<n} u_k + \sum_{k<n} v_k$, scaling $\sum_{k<n} \lambda u_k = \lambda \sum_{k<n} u_k$, splitting $\sum_{k<n} u_k = \sum_{k<m} u_k + \sum_{k=m}^{n-1} u_k$ for $m \le n$, and products of sums in $x$ distribute over addition in the standard way used below.

[F4] Strong induction ([[thm-strong-induction]]).

[F5] Naturals ([[def-natural-numbers]], [[def-nat-addition]], [[def-nat-order]], [[lem-nat-order-is-membership]], [[lem-nat-discrete]], [[lem-nat-transitive-irreflexive]], [[thm-nat-linear-order]]): $\sigma(j) = j \cup \{j\}$; $m < n \iff m \in n$ and $n = \{\, m \in \mathbb{N} : m < n \,\}$; $m \le n \iff m \subseteq n$; $m < n \iff \sigma(m) \le n$; $j < \sigma(j)$; $m \notin m$; $\le$ is reflexive, antisymmetric and transitive, so $\le$ composes and $m'' \le m' \le e$ gives $m'' \le e$; and $m \le e$ gives $\sigma(m) \le \sigma(e)$, because $m + k = e$ implies $\sigma(m) + k = \sigma(m+k) = \sigma(e)$.

[F6] Finite sets and cardinality ([[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]): $A$ is finite when $A \approx n$ for some $n \in \mathbb{N}$; $\approx$ is symmetric and transitive; the restriction of a bijection to a subset is a bijection onto the image of that subset; and $\varnothing \approx 0$.

[F7] Set notation ([[def-subset-and-proper-subset]], [[def-set-difference-and-symmetric-difference]]): $u \in S \setminus T$ exactly when $u \in S$ and $u \notin T$, and $S \subseteq T$ means every element of $S$ lies in $T$.

## Proof

**Proof technique:** induction.

1.1 **Subsets of a natural number, with a cardinal bound.** For every $m \in \mathbb{N}$ and every $S \subseteq m$ there is $m'' \in \mathbb{N}$ with $m'' \le m$ and $S \approx m''$. By strong induction on $m$: for $m = 0$ we have $S \subseteq \varnothing$, so $S = \varnothing \approx 0$ and $0 \le 0$. For $m = \sigma(j)$, assume the claim for every $j' < m$ and let $S \subseteq \sigma(j) = j \cup \{j\}$. If $j \notin S$ then $S \subseteq j$, so the hypothesis at $j$ gives $m'' \le j$ with $S \approx m''$, and $m'' \le j < \sigma(j) = m$ composes to $m'' \le m$. If $j \in S$, then $T := S \setminus \{j\} \subseteq j$, so the hypothesis at $j$ gives $m'' \le j$ and a bijection $u : T \to m''$. Extend $u$ to $u' : S \to \sigma(m'')$ by $u'(j) = m''$ and $u'(s) = u(s)$ for $s \ne j$: the values of $u$ all lie in $m''$ while $m'' \notin m''$, so $m''$ is a new value and the extension is injective, and it is onto $m'' \cup \{m''\} = \sigma(m'')$, so $S \approx \sigma(m'')$; moreover $m'' \le j$ gives $\sigma(m'') \le \sigma(j) = m$. In both cases $S$ has the required cardinal bound, so the claim holds by strong induction. [F4, F5, F6, F7]

1.2 **Base case $C(0)$.** Let $a_0 \ne 0$. Since $x^0 = 1$, the recursion for finite sums gives $\sum_{k<1} c_k x^k = \sum_{k<0} c_k x^k + c_0 x^0 = 0 + a_0 = a_0$ for every $x$, and $a_0 \ne 0$. Hence $Z = \varnothing \approx 0$ with $0 \le 0$, which is $C(0)$. [F1, F2, F6, base]

1.3 **The divided coefficients.** Assume now $d = \sigma(e)$, so $d \ge 1$, and fix $r \in Z$, so that $P(r) = 0$; write $b_m := \sum_{j=0}^{e-m} a_{m+1+j} r^j$ for $m < d$, a finite sum of reals, and $Q(x) := \sum_{m<d} b_m x^m$. Then (i) $b_{d-1} = b_e = \sum_{j=0}^{0} a_{e+1+j} r^j = a_d r^0 = a_d \ne 0$; and (ii) for $1 \le k \le e$, splitting the sum $b_{k-1} = \sum_{j=0}^{e-k+1} a_{k+j} r^j = a_k + \sum_{j=1}^{e-k+1} a_{k+j} r^j = a_k + r \sum_{i=0}^{e-k} a_{k+1+i} r^i = a_k + r\, b_k$, using scaling and the definition of the block sums. So $Q$ is again of the displayed form, with an explicit coefficient list of degree $e$ whose top coefficient $b_e = a_d$ is nonzero. [F1, F2, F3]

2.1 **The constant term.** Scaling (ii) of step 1.3 by $r$ or, directly from the definition, $r\, b_0 = \sum_{j=0}^{e} r \, a_{1+j} r^{j} = \sum_{j=0}^{e} a_{1+j} r^{j+1} = \sum_{k=1}^{d} a_k r^k$. Adding $a_0$ and using the splitting of $\sum_{k<d+1}$ at $k = 1$ gives $a_0 + r\, b_0 = \sum_{k=0}^{d} a_k r^k = P(r) = 0$, that is $r\, b_0 = -a_0$. [step 1.3, F1, F2, F3]

2.2 **Induction hypothesis for $Q$.** The coefficient list $b_0, \dots, b_e$ has $b_e = a_d \ne 0$ by step 1.3, so the strong induction hypothesis $C(e)$ at $e < d$ applies to it: the zero set $W := \{\, x \in \mathbb{R} : Q(x) = 0 \,\}$ satisfies $W \approx m'$ for some $m' \in \mathbb{N}$ with $m' \le e = d - 1$. [step 1.3, F4, ih]

3.1 **The factorisation $P(x) = (x - r) Q(x)$.** Because $d = \sigma(e) = e + 1$, splitting each sum at its last index gives $\sum_{m<d} b_m x^{m+1} = \sum_{m<e} b_m x^{m+1} + b_e x^{e+1}$ and $\sum_{m<d} r b_m x^m = r b_0 + \sum_{m=1}^{e} r b_m x^m$. Therefore, by scaling, additivity and subtraction, $(x - r)Q(x) = b_e x^{d} + \sum_{m<e} b_m x^{m+1} - r b_0 - \sum_{m=1}^{e} r b_m x^m$. Replacing $m$ by $m - 1$ in the first trailing block, $\sum_{m<e} b_m x^{m+1} = \sum_{m=1}^{e} b_{m-1} x^m$, so the two trailing blocks combine into $\sum_{m=1}^{e} (b_{m-1} - r b_m) x^m = \sum_{m=1}^{e} a_m x^m$ by step 1.3(ii); and $b_e = a_d$ by step 1.3(i) while $r b_0 = -a_0$ by step 2.1. Hence $(x-r)Q(x) = a_d x^d + \sum_{m=1}^{e} a_m x^m + a_0 = \sum_{k=0}^{d} a_k x^k = P(x)$, again by splitting. [step 1.3, step 2.1, F1, F2, F3]

4.1 **Every root of $P$ other than $r$ is a root of $Q$.** If $x \in Z$ and $x \ne r$, then $(x - r) Q(x) = P(x) = 0$ by step 3.1, and $x - r \ne 0$, so $Q(x) = 0$ by [F1]. Hence $x \in W$, i.e. $Z \setminus \{r\} \subseteq W$. [step 3.1, F1, F7]

5.1 **$Z$ sits in $W$ together with possibly $r$.** By step 4.1, every $x \in Z$ either equals $r$ or lies in $W$; that is, $Z \subseteq \{r\} \cup W$. [step 4.1, F7]

6.1 **Case $r \in W$.** Then $\{r\} \cup W = W$, so $Z \subseteq W$ by step 5.1. Transport along a bijection $u : W \to m'$ from step 2.2: the image $u[Z] \subseteq m'$ satisfies $u[Z] \approx Z$ by restriction of $u$, and step 1.1 applied to $u[Z] \subseteq m'$ gives $m'' \le m'$ with $u[Z] \approx m''$; then $Z \approx m''$ by transitivity, and $m'' \le m' \le e = d-1 < d$, so $m'' \le d$. [step 1.1, step 2.2, step 5.1, F5, F6]

6.2 **Case $r \notin W$.** Extend a bijection $u : W \to m'$ from step 2.2 to $u' : W \cup \{r\} \to \sigma(m')$ by $u'(r) = m'$ and $u'(w) = u(w)$ for $w \in W$: the values of $u$ all lie in $m'$ while $m' \notin m'$, so $u'$ is injective, and it is onto $m' \cup \{m'\} = \sigma(m')$. Hence $W \cup \{r\} \approx \sigma(m')$, and $Z \subseteq \{r\} \cup W = W \cup \{r\}$ by step 5.1; restriction of $u'$ to $Z$ gives $Z \approx u'[Z]$ with $u'[Z] \subseteq \sigma(m')$, and step 1.1 applied at $\sigma(m')$ gives $m'' \le \sigma(m')$ with $u'[Z] \approx m''$, so $Z \approx m''$; finally $m' \le e$ gives $\sigma(m') \le \sigma(e) = d$ by [F5], so $m'' \le d$. [step 1.1, step 2.2, step 5.1, F5, F6, F7]

7.1 Since $r \in W$ or $r \notin W$, steps 6.1 and 6.2 give: for the fixed $r \in Z$ there is $m \in \mathbb{N}$ with $m \le d$ and $Z \approx m$. [step 6.1, step 6.2]

8.1 **The induction step $C(e) \Rightarrow C(d)$.** Let $d = \sigma(e)$ and let $a_0, \dots, a_d$ with $a_d \ne 0$ be a list, with zero set $Z$. If $Z = \varnothing$ then $Z \approx 0$ and $0 \le d$, so $C(d)$ holds for this list. Otherwise $Z \ne \varnothing$; instantiating one $r \in Z$ existentially, the construction of steps 1.3 through 7.1 produces $m \le d$ with $Z \approx m$. In both cases $C(d)$ holds. [step 7.1, F6]

9.1 **Conclusion.** $C(0)$ is step 1.2, and $C(e) \Rightarrow C(\sigma(e))$ for every $e$ is step 8.1, so by strong induction $C(d)$ holds for every $d$; applied to the given list, the zero set $Z$ of $P$ is finite of cardinality at most $d$, as claimed. If $d = 0$ the hypothesis $a_d \ne 0$ reads $a_0 \ne 0$ and step 1.2 gives $Z = \varnothing$. No step selects from a family: at most one root is instantiated, and all coefficients $b_m$ are given by explicit finite sums. [step 1.2, step 8.1, F4, discharge-induction: base step 1.2 and induction step 8.1] ∎

## Remarks

- The division is honest synthetic division. Writing the coefficients from the top down, $b_e = a_d$ and $b_{k-1} = a_k + r b_k$, the identity $(x-r)Q(x) = P(x)$ with $Q(x) = \sum_{m<d} b_m x^m$ holds for every $x$, not only at $x = r$, and the case $r = 0$ needs no division: step 2.1 uses only multiplication by $r$.

- The final count is explicit rather than decreed. Step 1.1 shows by induction that a subset of a natural number $m$ is equinumerous with some $m'' \le m$, which is exactly what the two case counts in steps 6.1 and 6.2 consume; no separate appeal to a counting principle is needed.
