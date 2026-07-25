---
id: lem-all-extremal
kind: lemma
title: "Every element of $M$ is extremal"
status: draft
origin: session
deps: [lem-successor-of-extremal, lem-sup-of-extremals, lem-admissible-set-exists, def-admissible-set, def-bw-extremal]
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
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Statement

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, and $M$ the
smallest admissible set. Then every element of $M$ is extremal
([[def-bw-extremal]]).

## Facts & Assumptions

**Given:** A chain-complete poset $(P, \le)$, a progressive $f : P \to P$, and the smallest admissible set $M$.

[L1] If $x \in M$ is extremal then $f(x)$ is extremal ([[lem-successor-of-extremal]]).

[L2] If $C \subseteq M$ is a chain of extremal elements then $\sup C$ is extremal ([[lem-sup-of-extremals]]).

[L3] $M$ is itself admissible, so it is closed under $f$ and under suprema of its chains, and $M$ is contained in every admissible subset of $P$ ([[lem-admissible-set-exists]]).

[L4] A subset is admissible when it is closed under $f$ and under suprema of its chains ([[def-admissible-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $E = \{x \in M : x \text{ is extremal}\}$, so that $E \subseteq M$ by construction. [construct]

2.1 $E$ is closed under $f$: if $x \in E$ then $f(x) \in M$ because $M$ is closed under $f$, and $f(x)$ is extremal because $x$ is; so $f(x) \in E$. [step 1.1, L3, L1]

2.2 $E$ is closed under suprema of its chains: if $C \subseteq E$ is a chain then $C \subseteq M$, so $\sup C \in M$ because $M$ is closed under suprema of its chains, and $\sup C$ is extremal because every element of $C$ is; so $\sup C \in E$. [step 1.1, L3, L2]

3.1 So $E$ is an admissible subset of $P$. [step 2.1, step 2.2, L4]

4.1 By minimality of $M$, $M \subseteq E$. [step 3.1, L3]

5.1 With $E \subseteq M$ this gives $E = M$, so every element of $M$ is extremal. [step 4.1, step 1.1] ∎

## Remarks

- No base case is needed. One might expect a separate argument that $\bot$ is extremal, but closure under suprema of chains applied to the empty chain already puts $\bot$ into $E$, and $\bot$ is extremal vacuously because nothing lies strictly below it. This is the last of the four places on this page where the empty-chain convention of [[def-chain-complete-poset]] removes a case rather than creating one; the others are [[def-admissible-set]], [[lem-extremal-cut-closed-under-sups]] and [[lem-sup-of-extremals]].
- This is the second and last use of minimality, after [[lem-extremal-comparability]]. Everything downstream is bookkeeping.
- Combined with comparability, the lemma says that for **any** two elements of $M$ the comparability conclusion applies, which is precisely total ordering ([[lem-admissible-is-chain]]).
