---
id: lem-sup-of-extremals
kind: lemma
title: "A supremum of extremal elements is extremal"
status: draft
origin: session
deps: [lem-extremal-comparability, def-bw-extremal, lem-admissible-set-exists, def-upper-bound, def-chain-complete-poset, def-admissible-set, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, $M$ the
smallest admissible set, and $C \subseteq M$ a chain every element of which is
extremal ([[def-bw-extremal]]). Then $\sup C$ is extremal.

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, the smallest admissible set $M$, a chain $C \subseteq M$ of extremal elements, and an element $y \in M$ with $y < \sup C$.

[A1] Every $z \in C$ is extremal: for every $w \in M$ with $w < z$, $f(w) \le z$ ([[def-bw-extremal]]).

[L1] For an extremal $z$ and every $w \in M$, either $w \le z$ or $f(z) \le w$ ([[lem-extremal-comparability]]).

[L2] $M$ is an admissible **subset of $P$**, so $M \subseteq P$, every chain contained in $M$ is a chain of $P$, and $M$ is closed under suprema of its chains ([[lem-admissible-set-exists]], [[def-admissible-set]]).

[L3] $\sup C$ is an upper bound of $C$ and is below every upper bound of $C$ ([[def-upper-bound]]).

[L4] $f$ is progressive: $z \le f(z)$ for every $z \in P$ ([[def-chain-complete-poset]]).

[L5] $\le$ is a partial order: it is reflexive ($u \le u$) and transitive ($u \le v$ and $v \le w$ imply $u \le w$), and its strict form $u < v$ means $u \le v$ together with $u \ne v$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Write $s = \sup C$; it lies in $M$ because $C$ is a chain contained in $M$ and $M$ is closed under suprema of its chains. [L2, construct]

1.2 It suffices to show $f(y) \le s$ for the given $y \in M$ with $y < s$. [suffices: f(y) le s]

2.1 If $y$ were an upper bound of $C$ then $s \le y$, since $s$ is below every upper bound, contradicting $y < s$. So $y$ is not an upper bound of $C$. [step 1.2, L3]

3.1 Hence there exists $x \in C$ with $x \not\le y$; fix one. [step 2.1, choose]

4.1 The element $x$ is extremal, so comparability gives $y \le x$ or $f(x) \le y$. [step 3.1, A1, L1]

5.1 The alternative $f(x) \le y$ is impossible: progressivity gives $x \le f(x)$, so it would yield $x \le y$, contradicting $x \not\le y$. Hence $y \le x$. [step 4.1, step 3.1, L4]

6.1 Moreover $y \ne x$, since $y = x$ would give $x \le y$ by reflexivity, again contradicting $x \not\le y$. So $y < x$. [step 5.1, step 3.1, L5]

7.1 Extremality of $x$ applied to $y$ gives $f(y) \le x$. [step 6.1, step 3.1, A1]

8.1 Since $x \in C$ and $s$ is an upper bound of $C$, we have $x \le s$, so $f(y) \le s$ by transitivity, and $s$ is extremal. [step 7.1, step 3.1, L3, L5] ∎

## Remarks

- **Step 2.1 is the subtle one, and it is where chain-completeness does real
  work.** The move from $y < s$ to "$y$ is not an upper bound of $C$" is exactly
  leastness of the supremum. If $\sup C$ were merely some upper bound of $C$, the
  step would fail and the lemma with it, which is why the Bourbaki-Witt
  hypothesis asks for least upper bounds rather than upper bounds.
- The empty chain is covered without comment: $\sup \emptyset = \bot$, and there
  is no $y \in M$ with $y < \bot$, so the condition holds vacuously.
- Nothing here needs $C$ to have a largest element, and in the intended
  application it does not have one.
