---
id: thm-heine-borel-r
kind: theorem
title: "Heine-Borel by bisection: every closed bounded interval $[a,b]$ is compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-open-cover-r, def-interval, thm-nested-interval-property, def-complete-ordered-field, thm-recursion, cor-archimedean-reciprocal, thm-of-archimedean, def-neighbourhood-r, def-open-and-closed-in-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$[a,b]$ is compact"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.40)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$. Then the closed bounded interval
$[a,b]$ ([[def-interval]]) is compact ([[def-open-cover-r]]): every family of
open subsets of $\mathbb{R}$ whose union contains $[a,b]$ has a finite subfamily
whose union already contains $[a,b]$.

The proof is by repeated bisection. Supposing some open cover admits no finite
subcover, one halves the interval, keeps a half that still admits none, and
iterates; the halves shrink to a point, which the cover does reach, and a single
member of the cover then swallows a whole late-stage half. **The halving rule is
canonical**, taking the left half whenever the left half works, so the recursion
uses [[thm-recursion]] and no choice principle.

## Facts & Assumptions

**Given:** Reals $a \le b$ and an open cover $\mathcal{U}$ of $[a,b]$; the set $X := \{\, (u,v) \in \mathbb{R} \times \mathbb{R} : u \le v \,\}$; and the following terminology: a pair $(u,v) \in X$ is **bad** when there are no $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $[u,v] \subseteq U_0 \cup \dots \cup U_n$, that is, when the interval $[u,v]$ admits no finite subcover from $\mathcal{U}$.

[L1] Open cover, subcover, finite subfamily and compactness ([[def-open-cover-r]]).

[L2] Closed bounded intervals: $[u,v] = \{\, z : u \le z \le v \,\}$ is nonempty exactly when $u \le v$; and for $u \le m \le v$ one has $[u,v] = [u,m] \cup [m,v]$, since $z \in [u,v]$ satisfies $z \le m$ or $m < z$ by trichotomy ([[def-interval]], [[def-ordered-field]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$, and $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $G : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(k+1) = G(h(k))$ for every $k$ ([[thm-recursion]]).

[L5] Nested interval property: if $[a_k,b_k]$ with $a_k \le b_k$ satisfy $[a_{k+1},b_{k+1}] \subseteq [a_k,b_k]$ for every $k \in \mathbb{N}$, then $\bigcap_{k} [a_k,b_k] \ne \varnothing$ ([[thm-nested-interval-property]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, and $(n+1) \cdot 1_{\mathbb{R}} = n \cdot 1_{\mathbb{R}} + 1$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < c \le d$ gives $0 < 1/d \le 1/c$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L8] Ordered-field arithmetic: $0 < 1$, hence $2 := 1 + 1 > 0$ and $2^{-1} > 0$; adding a constant preserves an inequality and multiplying by a positive preserves it ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-complete-ordered-field]], [[def-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L9] Absolute value: $|y - x| \le v - u$ whenever $x, y \in [u,v]$, because $|y - x|$ equals $y - x$ or $x - y$ and each is at most $v - u$ ([[lem-of-abs-value]], [[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $[a,b]$ is not compact: some open cover $\mathcal{U}$ of $[a,b]$ has no finite subcover, that is, the pair $(a,b) \in X$ is bad. [assume-contra, L1]

1.2 Bisection rule: for $(u,v) \in X$ put $m := (u+v) \cdot 2^{-1}$, so that $u \le m \le v$ by [L8], and define $G(u,v) := (u,m)$ if $(u,m)$ is bad and $G(u,v) := (m,v)$ otherwise. This is a definition by cases on one condition, so $G : X \to X$ is a function and nothing is selected. [L2, L8, construct]

1.3 If $(u,v)$ is bad then $G(u,v)$ is bad: were both $(u,m)$ and $(m,v)$ not bad, concatenating the two finite lists of members of $\mathcal{U}$ would give a finite subfamily whose union contains $[u,m] \cup [m,v] = [u,v]$ by [L2], so $(u,v)$ would not be bad; hence at least one half is bad, and the rule returns the left half when it is bad and otherwise the right half, which must then be bad. [L1, L2]

2.1 Apply [L4] with $Y = X$, seed $(a,b)$ and map $G$: there is $h : \mathbb{N} \to X$ with $h(0) = (a,b)$ and $h(k+1) = G(h(k))$. Write $h(k) = (a_k,b_k)$, so $a_k \le b_k$ for every $k$, $(a_0,b_0) = (a,b)$, and $(a_{k+1},b_{k+1})$ is one of the two halves of $(a_k,b_k)$. [step 1.2, L2, L4, construct]

3.1 Every $(a_k,b_k)$ is bad, by induction on $k$: the case $k = 0$ is step 1.1, and if $(a_k,b_k)$ is bad then $(a_{k+1},b_{k+1}) = G(a_k,b_k)$ is bad by step 1.3. [step 1.1, step 1.3, step 2.1]

3.2 Writing $\ell_k := b_k - a_k \ge 0$, the intervals are nested and the lengths halve: $[a_{k+1},b_{k+1}]$ is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k) \cdot 2^{-1}$, and each of these is contained in $[a_k,b_k]$ by [L2], while $m_k - a_k = b_k - m_k = \ell_k \cdot 2^{-1}$, so $\ell_{k+1} = \ell_k \cdot 2^{-1}$. [step 2.1, L2, L8]

4.1 For every $k \in \mathbb{N}$ one has $\ell_k \cdot (k+1) \le \ell_0$, by induction on $k$: at $k = 0$ this reads $\ell_0 \cdot 1 \le \ell_0$; and if it holds at $k$ then $\ell_{k+1} \cdot (k+2) = \ell_k \cdot 2^{-1} \cdot (k+2) \le \ell_k \cdot (k+1) \le \ell_0$, using $\ell_k \ge 0$ and $(k+2) \cdot 2^{-1} \le k+1$, which is $k + 2 \le 2k+2$, that is $0 \le k$. [step 3.2, L7, L8]

4.2 By [L5] the nested family $[a_k,b_k]$ of nonempty closed bounded intervals has a common point $x$; since $x \in [a_0,b_0] = [a,b]$ and $\mathcal{U}$ covers $[a,b]$, fix $U \in \mathcal{U}$ with $x \in U$ and then, $U$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$. [step 3.2, L1, L2, L3, L5, choose]

5.1 There is $k \in \mathbb{N}$ with $\ell_k < \varepsilon$: the real $\varepsilon/(\ell_0+1)$ is positive because $\ell_0 + 1 > 0$, so [L6] supplies a natural $n \ge 1$ with $1/n < \varepsilon/(\ell_0+1)$; put $k := n-1$, a natural number, so that $k+1 = n$ and step 4.1 with [L7] gives $\ell_k \le \ell_0 \cdot (1/n) \le \ell_0 \cdot \varepsilon/(\ell_0+1) < \varepsilon$, the last step because $\ell_0 < \ell_0 + 1$ forces $\ell_0/(\ell_0+1) < 1$ and $\varepsilon > 0$. [step 4.1, step 4.2, L6, L7, L8, choose]

6.1 For that $k$ one has $x \in [a_k,b_k]$, and every $y \in [a_k,b_k]$ satisfies $|y - x| \le \ell_k < \varepsilon$ by [L9], so $[a_k,b_k] \subseteq N_\varepsilon(x) \subseteq U$; hence the one-member subfamily $\{U\}$ of $\mathcal{U}$ covers $[a_k,b_k]$ and $(a_k,b_k)$ is not bad, contradicting step 3.1. The assumption of step 1.1 is therefore untenable and $[a,b]$ is compact. [step 3.1, step 4.2, step 5.1, L1, L3, L9, discharge-contradiction] ∎

## Remarks

- **What each hypothesis buys.** Closedness enters through [L5]: the nested
  interval property is stated for closed intervals and fails for open ones
  ([[cex-nested-open-intervals-empty]]). Boundedness enters through the same
  fact and through the length computation of step 3.2. Completeness of
  $\mathbb{R}$ enters only inside [[thm-nested-interval-property]] and, through
  [[cor-archimedean-reciprocal]], in step 5.1.

- **Why the lengths are handled without powers.** The obvious route is
  $\ell_k = \ell_0 \cdot 2^{-k}$ together with the nullity of a geometric
  sequence, which is available ([[lem-geometric-sequence-null]]). The route
  taken instead, the one-line induction of step 4.1, gives the weaker bound
  $\ell_k \le \ell_0/(k+1)$, which is all step 5.1 needs, and it avoids
  integer powers and the algebra of limits entirely.

- **The recursion is over pairs, not over sets.** The state carried from stage
  to stage is the pair of endpoints, so [L4] applies with $Y = X$ and a total
  map $G$; had the rule been "choose a bad half", the state would have been
  chosen rather than computed and the argument would have needed dependent
  choice, which this library does not have.

- **The converse direction is a separate result.** That a compact subset of
  $\mathbb{R}$ must be closed and bounded is
  [[lem-compact-implies-closed-and-bounded-r]], and the two together give
  [[thm-heine-borel-characterisation-r]].
