---
id: thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ has the cardinality of the continuum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-set-r, def-limit-point-r, def-neighbourhood-r, lem-rat-embeds-dense,
       thm-rationals-countable, thm-product-of-countable, thm-nested-interval-property,
       cor-archimedean-reciprocal, thm-of-archimedean, thm-schroder-bernstein,
       def-injection-surjection-bijection, def-equinumerous, def-sequence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect. Then $P$ has the
cardinality of the continuum, equivalently $P \approx \mathbb{R}$.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$.

[F1] A set $P \subseteq \mathbb{R}$ is perfect when it is closed and has no isolated points ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L1] Strictly between any two reals lies a rational, and the canonical embedding of $\mathbb{Q}$ into $\mathbb{R}$ is injective ([[lem-rat-embeds-dense]]).

[L2] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]).

[L3] The rationals and every finite Cartesian power of them are countable, so rational quadruples admit a fixed enumeration ([[thm-rationals-countable]], [[thm-product-of-countable]]).

[L4] Nested nonempty closed bounded intervals whose lengths tend to $0$ have a unique common point ([[thm-nested-interval-property]]).

[L5] For every real $\varepsilon > 0$ there is a natural number $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] If there is an injection $A \to B$ and an injection $B \to A$, then $A \approx B$ ([[thm-schroder-bernstein]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 **Splitting claim.** Let $J=(a,b)$ be a nonempty open interval with $J \cap P \ne \varnothing$, and let $\eta > 0$ be real. Choose $x \in J \cap P$. Since $x$ is not isolated in $P$, there is $y \in P \cap J$ with $y \ne x$; after swapping if necessary, take $x < y$. Put $\delta := \min\{\, \eta/4,\ (y-x)/4,\ (x-a)/2,\ (b-y)/2 \,\}$, a positive real. By [L1] choose rationals $r_0<s_0<r_1<s_1$ with $x \in (r_0,s_0)$, $y \in (r_1,s_1)$, each interval contained in $(x-\delta,x+\delta)$ or $(y-\delta,y+\delta)$ respectively. Then $J_0:=(r_0,s_0)$ and $J_1:=(r_1,s_1)$ are disjoint nonempty open intervals, their closures lie inside $J$, each meets $P$, and each has length $<\eta$. [F1, L1, construct]

2.1 Fix an enumeration of the rational quadruples using [L3]. By recursion on $n\in\mathbb N$, construct for every binary word $s:n\to\{0,1\}$ a nonempty open interval $J_s$ with rational endpoints such that: $J_s\cap P\ne\varnothing$; if $t$ extends $s$ then $\overline{J_t}\subseteq J_s$; sibling closures are disjoint; and every $J_s$ at level $n$ has length $<1/(n+1)$. At level $0$, take the first rational interval in the enumeration that meets $P$ and has length $<1$. At the successor stage, for each of the finitely many parent words in lexicographic order, take the first rational quadruple in the enumeration that gives the two children supplied by step 1.1 with $\eta=1/(n+2)$. The “first” rule makes the successor operation a function, so recursion produces one coherent family through all levels without any choice principle. [step 1.1, L3, construct]

3.1 Let $\alpha:\mathbb{N}\to\{0,1\}$ be a binary sequence, and for each $n$ let $I_n:=\overline{J_{\alpha|n}}$, where $\alpha|n$ is the restriction of $\alpha$ to $n$. By step 2.1 the intervals $I_n$ are nonempty, closed and bounded, nested, and have lengths $<1/(n+1)$; [L5] therefore makes their lengths tend to $0$, so [L4] gives a unique point $x_\alpha \in \bigcap_n I_n$. Each $I_n$ meets $P$ and $P$ is closed, so $x_\alpha \in P$. If $\alpha \ne \beta$, let $n$ be the first index at which they differ; then $I_{n+1}$ for $\alpha$ and $\beta$ are closures of disjoint siblings from step 2.1, so $x_\alpha \ne x_\beta$. Thus $\alpha \mapsto x_\alpha$ is an injection from $\{0,1\}^{\mathbb{N}}$ into $P$. [step 2.1, L4, L5]

4.1 Fix a bijection $e:\mathbb{N}\to\mathbb{Q}$ from [L2]. For each real $x$ define $$S_x:=\{\, n \in \mathbb{N} : \hat{e(n)} < x \,\}.$$ If $x<y$, [L1] gives a rational $q$ with $x<\hat q<y$; writing $q=e(n)$ yields $n \in S_y \setminus S_x$, so $x \mapsto S_x$ is an injection $\mathbb{R} \to \mathcal{P}(\mathbb{N})$. Characteristic functions identify $\mathcal{P}(\mathbb{N})$ with $\{0,1\}^{\mathbb{N}}$, and step 3.1 gives an injection $\{0,1\}^{\mathbb{N}} \to P$; composing these two injections yields an injection $\mathbb{R} \to P$. The inclusion $P \hookrightarrow \mathbb{R}$ is also injective, so [L6] gives $P \approx \mathbb{R}$. [step 3.1, L1, L2, L6, algebra] ∎
