---
id: thm-discontinuity-set-is-f-sigma
kind: theorem
title: "For $f : A \\to \\mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\\sigma$ subset of $\\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\\delta$ subset; for $A = \\mathbb{R}$ the two sets are $F_\\sigma$ and $G_\\delta$ outright"
status: draft
origin: session
deps: [def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-f-sigma-g-delta, def-open-and-closed-in-r, cor-archimedean-reciprocal, def-continuity-real, def-extended-reals, def-canonical-natural, lem-of-naturals-positive, def-classification-of-discontinuities]
justified_by: []
aliases: [thm-continuity-set-is-g-delta]
landmark: true
short: "discontinuity set is $F_\\sigma$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Write

$$D \;:=\; \{\, x \in A : f \text{ is discontinuous at } x \,\}, \qquad C \;:=\; A \setminus D$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then:

1. **Pointwise exhaustion.** $D = \{\, x \in A : \omega_f(x) > 0 \,\}$
   ([[def-oscillation]]), and $D$ is the union of the increasing sequence of
   superlevel sets
   $$D \;=\; \bigcup_{n \in \mathbb{N}} \{\, x \in A : \omega_f(x) \ge 1/\iota(n+1) \,\}$$
   ([[def-canonical-natural]]), whose thresholds are $1, 1/2, 1/3, \dots$.
2. **Descriptive form.** There is an $F_\sigma$ set $F \subseteq \mathbb{R}$ and
   a $G_\delta$ set $V \subseteq \mathbb{R}$ ([[def-f-sigma-g-delta]]) with
   $$D \;=\; A \cap F, \qquad C \;=\; A \cap V, \qquad V = \mathbb{R} \setminus F ,$$
   and $F$ may be taken to be $\bigcup_{n \in \mathbb{N}} G_n$ with each $G_n$ a
   closed subset of $\mathbb{R}$ cutting down on $A$ to the $n$-th set of
   claim 1 ([[lem-oscillation-superlevel-sets-are-closed]]).

In particular, when $A = \mathbb{R}$ the discontinuity set $D$ is an $F_\sigma$
subset of $\mathbb{R}$ and the continuity set $C$ is a $G_\delta$ subset, and
claim 1 reads $D = \bigcup_{n} \{\, x \in \mathbb{R} : \omega_f(x) \ge 1/\iota(n+1) \,\}$.

**Claim 1 is stated separately because it is what is cited downstream.** The
exhaustion of $D$ by the superlevel sets $\{\omega_f \ge 1/\iota(n+1)\}$ is used
directly wherever a property has to be established one threshold at a time —
[[thm-baire-one-continuity-points]] shows each superlevel set nowhere dense and
concludes that $D$ is meager — and that use needs the identity itself, not only
the descriptive conclusion of claim 2.

**The statement is relative on purpose.** For a general domain $A$ the sets $D$
and $C$ are subsets of $A$, and neither is $F_\sigma$ or $G_\delta$ in
$\mathbb{R}$ in general; what the proof produces are two subsets of $\mathbb{R}$
that cut down to them. The absolute form is stated only for $A = \mathbb{R}$,
which is the case [[thm-continuity-set-realisation]] and
[[cor-no-function-is-continuous-exactly-on-q]] use.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$; and $\omega_f(c) \ge 0$ for every $c \in A$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]], [[def-extended-reals]]).

[L2] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in A : \omega_f(x) \ge \varepsilon\} = A \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, where $\iota(m)$ is the canonical natural of $m$ in $\mathbb{R}$; and $\iota$ is strictly increasing and positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A subset of $\mathbb{R}$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $S$ is $F_\sigma$ if and only if $\mathbb{R} \setminus S$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ put $\varepsilon_n := 1/\iota(n+1)$, a positive real since $n + 1 \ge 1$, and let $G_n \subseteq \mathbb{R}$ be closed with $\{x \in A : \omega_f(x) \ge \varepsilon_n\} = A \cap G_n$. [L2, L3, construct]

1.2 $D = \{\, x \in A : \omega_f(x) > 0 \,\}$: a point $x \in A$ is a discontinuity exactly when $\omega_f(x) \ne 0$, and $\omega_f(x) \ge 0$ always, so exactly when $\omega_f(x) > 0$. [L1]

2.1 $D \subseteq \bigcup_{n \in \mathbb{N}} (A \cap G_n)$. Let $x \in D$, so $\omega_f(x) > 0$. If $\omega_f(x) \ge \varepsilon_0 = 1$ then $x \in A \cap G_0$. Otherwise $0 < \omega_f(x) < 1$, so $\omega_f(x)$ is a positive real, and there is a natural $m \ge 1$ with $1/\iota(m) < \omega_f(x)$; writing $m = n + 1$ with $n \in \mathbb{N}$ gives $\omega_f(x) > \varepsilon_n$, hence $x \in A \cap G_n$. [step 1.1, step 1.2, L3]

2.2 Conversely $\bigcup_{n \in \mathbb{N}} (A \cap G_n) \subseteq D$: if $x \in A \cap G_n$ then $\omega_f(x) \ge \varepsilon_n > 0$, so $x \in D$. [step 1.1, step 1.2, L3]

3.1 Put $F := \bigcup_{n \in \mathbb{N}} G_n$, an $F_\sigma$ subset of $\mathbb{R}$ since each $G_n$ is closed and the family is indexed by $\mathbb{N}$. Then $A \cap F = \bigcup_{n} (A \cap G_n) = D$. [step 1.1, step 2.1, step 2.2, L4]

3.2 Claim 1 is proved: $D = \{x \in A : \omega_f(x) > 0\}$ by step 1.2, and $D = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge \varepsilon_n\}$ by steps 2.1 and 2.2, since $A \cap G_n$ is by step 1.1 exactly the set $\{x \in A : \omega_f(x) \ge \varepsilon_n\}$ with $\varepsilon_n = 1/\iota(n+1)$. The union is increasing, since $n \le m$ gives $\iota(n+1) \le \iota(m+1)$ and hence $\varepsilon_m \le \varepsilon_n$. [step 1.1, step 1.2, step 2.1, step 2.2, L3]

4.1 Put $V := \mathbb{R} \setminus F$, a $G_\delta$ subset of $\mathbb{R}$. Then $A \cap V = A \setminus (A \cap F) = A \setminus D = C$. [step 3.1, L4]

5.1 Claim 2 is proved by steps 3.1 and 4.1; and for $A = \mathbb{R}$ the two identities read $D = F$ and $C = V$, so $D$ is $F_\sigma$ and $C$ is $G_\delta$ outright. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The exhaustion is indexed from $0$ and the thresholds are $1/\iota(n+1)$.** $\mathbb{N}$ contains $0$, so the sequence of thresholds is $1, 1/2, 1/3, \dots$ and never $1/\iota(0)$, which is not defined. Writing the union as $\bigcup_{n \ge 1} \{\omega_f \ge 1/\iota(n)\}$ names the same family; the form above is used because a sequence in this library is a function on $\mathbb{N}$.

- **The converse holds and is proved separately.** Every $G_\delta$ subset of $\mathbb{R}$ is the continuity set of some function $\mathbb{R} \to \mathbb{R}$ ([[thm-continuity-set-realisation]]), so the two classes coincide exactly. What the present theorem contributes is the direction that constrains: no function can have a continuity set that fails to be $G_\delta$, and [[cor-no-function-is-continuous-exactly-on-q]] spends that on $\mathbb{Q}$.
