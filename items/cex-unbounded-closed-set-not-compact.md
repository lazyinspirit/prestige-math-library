---
id: cex-unbounded-closed-set-not-compact
kind: counterexample
title: "$\\mathbb{Z}$ is closed and not compact, and $(0,1)$ is bounded and not compact: neither hypothesis of Heine-Borel can be dropped"
status: published
origin: session
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, def-integers, thm-of-archimedean, def-interval, lem-of-q-embeds, lem-of-naturals-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Integer (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claims:** (i) every closed subset of $\mathbb{R}$ is compact; (ii)
every bounded subset of $\mathbb{R}$ is compact
([[def-open-cover-r]]).

Both are refuted, so neither hypothesis of
[[thm-heine-borel-characterisation-r]] can be dropped. The witness for (i) is
the set $\mathbb{Z}$ of integers of $\mathbb{R}$, which is closed and unbounded;
the witness for (ii) is the interval $(0,1)$, which is bounded and not closed.

**What $\mathbb{Z}$ means here.** Write
$$\mathbb{Z} \;:=\; \{\, n \cdot 1_{\mathbb{R}} : n \in \mathbb{N} \,\} \cup \{\, -(n \cdot 1_{\mathbb{R}}) : n \in \mathbb{N} \,\}, \qquad 0 \cdot 1_{\mathbb{R}} := 0,$$
the set of **canonical integers** of $\mathbb{R}$. By [[lem-of-q-embeds]] this is
exactly the image of the integers ([[def-integers]]) under the unique field
homomorphism $\mathbb{Q} \to \mathbb{R}$, which sends $n$ to $n \cdot
1_{\mathbb{R}}$ and $-n$ to $-(n \cdot 1_{\mathbb{R}})$; as is standard we write
$\mathbb{Z}$ for it. Nothing below uses that identification: every step is
carried out with the displayed description.

## Facts & Assumptions

**Given:** The set $\mathbb{Z}$ of canonical integers of $\mathbb{R}$ as displayed above, and the interval $(0,1)$.

[A1] The refuted claims: (i) every closed subset of $\mathbb{R}$ is compact; (ii) every bounded subset of $\mathbb{R}$ is compact.

[L1] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1,2,\dots\}$ with $1 \cdot 1_{\mathbb{R}} = 1$, and $(m+n) \cdot 1_{\mathbb{R}} = m \cdot 1_{\mathbb{R}} + n \cdot 1_{\mathbb{R}}$ for $m, n \ge 1$ ([[lem-of-naturals-positive]]).

[L3] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L4] $U$ is open when each of its points has a neighbourhood inside it; $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$; each interval $(a,b)$ is an open set ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L5] A set is bounded when it has a lower and an upper bound ([[def-bounded-set]]).

[L6] Triangle inequality: $|p + q| \le |p| + |q|$ ([[lem-of-triangle-inequality]]); $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$, and $|-z| = |z|$ ([[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant preserves an inequality and the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Distinct elements of $\mathbb{Z}$ differ by at least $1$ in absolute value. For $m, n \in \mathbb{N}$ with $m < n$: if $m = 0$ then $n \cdot 1_{\mathbb{R}} - 0 = n \cdot 1_{\mathbb{R}} \ge 1$ by [L2], since $n \ge 1$ and the map is increasing with value $1$ at $1$; and if $m \ge 1$ then $m + (n-m) = n$ with $n - m \ge 1$ gives $n \cdot 1_{\mathbb{R}} - m \cdot 1_{\mathbb{R}} = (n-m) \cdot 1_{\mathbb{R}} \ge 1$ by [L2]. The same computation after negation covers two distinct elements of the form $-(n \cdot 1_{\mathbb{R}})$, using $|-z| = |z|$ from [L6]. Finally, for distinct $n \cdot 1_{\mathbb{R}}$ and $-(m \cdot 1_{\mathbb{R}})$ at least one of $n, m$ is $\ge 1$, so their difference $n \cdot 1_{\mathbb{R}} + m \cdot 1_{\mathbb{R}}$ is a sum of two nonnegative terms one of which is $\ge 1$, hence is $\ge 1$. [given, L2, L6, L8]

1.2 $\mathbb{Z}$ is not bounded: given any $x \in \mathbb{R}$, [L3] supplies a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$, and $n \cdot 1_{\mathbb{R}} \in \mathbb{Z}$, so no $x$ is an upper bound of $\mathbb{Z}$ and $\mathbb{Z}$ has no upper bound at all. [given, L3, L5]

1.3 $(0,1)$ is bounded, since $0 \le y \le 1$ for every $y \in (0,1)$, and it is not closed: $0 \notin (0,1)$, while for every real $\varepsilon > 0$ the point $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$ satisfies $0 < t < 1$ and $|t - 0| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$ by [L7] and [L8], so $t \in N_\varepsilon(0) \cap (0,1)$ and no neighbourhood of $0$ lies in the complement of $(0,1)$. [L4, L5, L6, L7, L8]

2.1 $\mathbb{Z}$ is closed: let $x \in \mathbb{R} \setminus \mathbb{Z}$. The neighbourhood $N_{1 \cdot 2^{-1}}(x)$ contains at most one element of $\mathbb{Z}$, since two distinct elements $z, z'$ of it would satisfy $|z - z'| = |(z - x) + (x - z')| \le |z - x| + |x - z'| < 1 \cdot 2^{-1} + 1 \cdot 2^{-1} = 1$ by [L6], contradicting step 1.1. If it contains none, then $N_{1 \cdot 2^{-1}}(x) \cap \mathbb{Z} = \varnothing$. If it contains exactly one element $z$, then $z \ne x$ because $x \notin \mathbb{Z}$, so $|x - z| > 0$, and $\varepsilon := \min\{\, 1 \cdot 2^{-1},\ |x - z| \,\}$ is positive by [L7]; then $N_\varepsilon(x) \subseteq N_{1 \cdot 2^{-1}}(x)$, so any element of $\mathbb{Z}$ in $N_\varepsilon(x)$ must be $z$, whereas $|z - x| \ge \varepsilon$ excludes $z$. In both cases some neighbourhood of $x$ misses $\mathbb{Z}$, so $\mathbb{R} \setminus \mathbb{Z}$ is open. [step 1.1, L4, L6, L7, L8]

3.1 By step 2.1 the set $\mathbb{Z}$ is closed and by step 1.2 it is not bounded, so [L1] denies that it is compact, refuting claim (i) of [A1]; and by step 1.3 the set $(0,1)$ is bounded and not closed, so [L1] denies that it is compact, refuting claim (ii). Neither hypothesis of [L1] is therefore removable. [step 1.2, step 1.3, step 2.1, A1, L1] ∎

## Remarks

- **The two failures are of opposite kinds.** $\mathbb{Z}$ has all its limit
  points, of which it has none, and escapes to infinity; $(0,1)$ stays inside a
  bounded region and loses its two endpoints. Compactness rules out both, and
  [[thm-heine-borel-characterisation-r]] says these are the only two ways to
  fail for a subset of $\mathbb{R}$.

- **An explicit cover for each.** For $\mathbb{Z}$ the intervals $(-n,n)$ with
  $n \ge 1$ cover $\mathbb{R}$ and any finite subfamily has union $(-N,N)$, which
  omits the element $N \cdot 1_{\mathbb{R}}$ of $\mathbb{Z}$. For $(0,1)$ the
  cover $\{(1/k,1)\}$ of
  [[cex-open-cover-of-unit-interval-no-finite-subcover]] does the same job.
  Neither cover is needed above, since [[thm-heine-borel-characterisation-r]]
  already converts the failure of a hypothesis into the failure of compactness.

- **$\mathbb{Z}$ is closed and has no limit points at all**, which is what the
  separation computation really shows: its points are uniformly apart. A set of
  that kind is closed for free, and it is the standard example of a closed set
  that is as far from perfect as possible, every one of its points being
  isolated ([[def-perfect-set-r]]).
