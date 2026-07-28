---
id: cor-the-averaging-principle
kind: corollary
title: "If $X$ is nonempty, some row fibre is at least the average size and some row fibre is at most the average size"
status: draft
origin: session
deps: [thm-double-counting, def-a-finite-incidence-relation-and-its-fibres,
       def-sum-over-a-finite-index-set, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       lem-finite-sum-laws, def-finite-sum, def-canonical-natural, def-finite-cardinality,
       def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be finite sets with $X \ne \varnothing$, let
$R \subseteq X \times Y$, and let $R_x$ be its row fibres
([[def-a-finite-incidence-relation-and-its-fibres]]). Since
$\lvert X\rvert \ne 0$, the real number

$$\mu \;:=\; \frac{\iota(\lvert R\rvert)}{\iota(\lvert X\rvert)}$$

is defined, where $\iota : \mathbb{N} \to \mathbb{R}$ is the canonical natural
([[def-canonical-natural]]). Then there are $x_{+}, x_{-} \in X$ with

$$\iota(\lvert R_{x_{+}}\rvert) \ \ge\ \mu \qquad\text{and}\qquad \iota(\lvert R_{x_{-}}\rvert) \ \le\ \mu .$$

The two elements need not be distinct, and neither inequality need be an
equality: $\mu$ is a real number and a fibre size is a natural number, so no
fibre need meet the average exactly.

## Facts & Assumptions

**Given:** Finite sets $X \ne \varnothing$ and $Y$, a relation $R \subseteq X \times Y$ with row fibres $R_x$, and a fixed enumeration $\varphi : \lvert X\rvert \to X$ of $X$, which exists because $X$ is finite ([[def-finite-cardinality]]).

[L1] Double counting: $\sum_{x \in X}\lvert R_x\rvert = \lvert R\rvert$ in $\mathbb{N}$ ([[thm-double-counting]]).

[L2] The bridge over a finite index set: for a finite $S$ and $c : S \to \mathbb{N}$, $\iota\big(\sum_{i \in S} c_i\big) = \sum_{i \in S}\iota(c_i)$. This is **not** a clause of [[def-sum-over-a-finite-index-set]] and is derived here: both sides are computed through one and the same enumeration $\psi : \lvert S\rvert \to S$, and $\iota\big(\sum_{k<n} c_{\psi(k)}\big) = \sum_{k<n}\iota(c_{\psi(k)})$ is clause 6 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]].

[L3] A constant real summand: $\sum_{i \in S}\lambda = \iota(\lvert S\rvert)\,\lambda$ for $\lambda \in \mathbb{R}$ ([[def-sum-over-a-finite-index-set]], clause (c)).

[L4] Additivity and the vanishing test over a finite index set: for $u, v : S \to \mathbb{R}$ one has $\sum_{i \in S}(u_i + v_i) = \sum_{i \in S}u_i + \sum_{i \in S}v_i$; and if $u_i \ge 0$ for every $i \in S$ and $\sum_{i \in S}u_i = 0$, then $u_i = 0$ for every $i \in S$. Both are clauses 1 and 4 of [[lem-finite-sum-laws]] applied to the list $k \mapsto u_{\psi(k)}$ through an enumeration $\psi$ of $S$ ([[def-sum-over-a-finite-index-set]], [[def-finite-sum]]); for the second, $\psi$ is onto $S$, so every value of $u$ is some $u_{\psi(k)}$.

[L5] $\iota$ is strictly increasing with $\iota(0) = 0$, so $n \ge 1$ gives $\iota(n) > 0$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7, [[def-canonical-natural]]).

[L6] $\lvert X\rvert = 0$ if and only if $X = \varnothing$ ([[def-finite-cardinality]], clause (b)).

[L7] $\mathbb{R}$ is an ordered field: its order is total, a nonzero element has a multiplicative inverse, and $a < b$ is equivalent to $b - a > 0$ ([[def-ordered-field]], [[def-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Since $X \ne \varnothing$, [L6] gives $\lvert X\rvert \ne 0$, hence $\lvert X\rvert \ge 1$ and $\iota(\lvert X\rvert) > 0$ by [L5]; in particular $\iota(\lvert X\rvert) \ne 0$, so $\mu = \iota(\lvert R\rvert)/\iota(\lvert X\rvert)$ names a single real number and $\iota(\lvert X\rvert)\,\mu = \iota(\lvert R\rvert)$. [given, L5, L6, L7]

1.2 Applying [L2] to the list $x \mapsto \lvert R_x\rvert$ and then [L1] gives $\sum_{x \in X}\iota(\lvert R_x\rvert) = \iota\big(\sum_{x \in X}\lvert R_x\rvert\big) = \iota(\lvert R\rvert)$. [L1, L2]

1.3 A positive list over a nonempty finite index set has nonzero sum: if $w : X \to \mathbb{R}$ has $w_x > 0$ for every $x \in X$ and $\sum_{x \in X}w_x = 0$, then $w_x \ge 0$ for every $x$, so [L4] forces $w_x = 0$ for every $x \in X$; as $X$ has an element, its value is then both $0$ and positive, which is impossible. [assume-contra, L4, L7]

2.1 By [L3] with the constant $\mu$, $\sum_{x \in X}\mu = \iota(\lvert X\rvert)\,\mu = \iota(\lvert R\rvert)$, the second equality by step 1.1. [step 1.1, L3]

3.1 Suppose there were no $x_{+}$ with $\iota(\lvert R_{x_{+}}\rvert) \ge \mu$. Since the order of $\mathbb{R}$ is total, $\iota(\lvert R_x\rvert) < \mu$ for every $x \in X$, so $w_x := \mu - \iota(\lvert R_x\rvert)$ is positive for every $x$; and by additivity, step 1.2 and step 2.1, $\sum_{x \in X}w_x + \sum_{x \in X}\iota(\lvert R_x\rvert) = \sum_{x \in X}\mu$, that is $\sum_{x \in X}w_x = \iota(\lvert R\rvert) - \iota(\lvert R\rvert) = 0$, contradicting step 1.3. So some $x_{+} \in X$ has $\iota(\lvert R_{x_{+}}\rvert) \ge \mu$. [step 1.2, step 1.3, step 2.1, L4, L7]

3.2 Suppose there were no $x_{-}$ with $\iota(\lvert R_{x_{-}}\rvert) \le \mu$. Then $\iota(\lvert R_x\rvert) > \mu$ for every $x \in X$, so $w_x := \iota(\lvert R_x\rvert) - \mu$ is positive for every $x$; the same computation gives $\sum_{x \in X}w_x = \iota(\lvert R\rvert) - \iota(\lvert R\rvert) = 0$, again contradicting step 1.3. So some $x_{-} \in X$ has $\iota(\lvert R_{x_{-}}\rvert) \le \mu$. [step 1.2, step 1.3, step 2.1, L4, L7]

4.1 Steps 3.1 and 3.2 are the two assertions of the statement. [step 3.1, step 3.2, discharge-contradiction] ∎

## Remarks

- **Why $X \ne \varnothing$ is a hypothesis and not decoration.** It is used twice: to make $\iota(\lvert X\rvert)$ invertible, so that $\mu$ exists at all, and to produce the element at which the vanishing test is contradicted. With $X = \varnothing$ there is no fibre to exhibit and no quotient to compare it to.

- **The average lives in $\mathbb{R}$ and the fibre sizes live in $\mathbb{N}$.** A quotient of two natural numbers is not in general a natural number, so the comparison has to be made after both sides are carried into $\mathbb{R}$ by $\iota$. This is the reason the statement is written with $\iota$ throughout rather than as $\lvert R_x\rvert \ge \lvert R\rvert/\lvert X\rvert$, which is not an inequality between elements of one ordered set.

- **Nothing is claimed about attainment.** The proof produces an $x_{+}$ and an $x_{-}$ and no more; a relation whose fibre sizes all differ from $\mu$ exists, and it is exhibited on the companion page.
