---
id: thm-schroder-bernstein
kind: theorem
title: "The Schröder-Bernstein theorem"
status: draft
origin: session
deps: [def-injection-surjection-bijection, def-equinumerous, thm-recursion, def-natural-numbers, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [thm-cantor-schroder-bernstein, schroeder-bernstein]
landmark: true
short: "$A\\preceq B$ and $B\\preceq A$ give $A\\approx B$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Schröder-Bernstein theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets with $A \preceq B$ and $B \preceq A$
([[def-equinumerous]]). Then $A \approx B$.

Equivalently: if there is an injection $A \to B$ and an injection $B \to A$, then
there is a bijection $A \to B$ ([[def-injection-surjection-bijection]]).

**The proof uses no choice principle.** The bijection is written down explicitly
from the two given injections, and the only "selections" it makes are of the
unique preimage of a point under an injection, which is determined, not chosen.
The single infinite construction is an application of the recursion theorem
([[thm-recursion]]), whose data are a set, a starting point and one function.

## Facts & Assumptions

**Given:** Sets $A$ and $B$ together with injections $f : A \to B$ and $g : B \to A$. For $S \subseteq A$ write $f[S]$ for its image, and similarly for $g$.

[L1] Injection, surjection, bijection, image and preimage, and the fact that an injective $g$ has, for each $x \in g[B]$, exactly one $b \in B$ with $g(b) = x$ ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means precisely that some bijection $A \to B$ exists ([[def-equinumerous]]).

[L3] Recursion theorem: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a (unique) function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ for all $n \in \mathbb{N}$ ([[thm-recursion]], [[def-natural-numbers]]).

[L4] Every nonzero natural number is a successor: $n \ne 0$ implies $n = \sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] with $X = \mathcal{P}(A)$ (a set by the Power Set axiom), with $x_0 = A \setminus g[B]$, and with $F : \mathcal{P}(A) \to \mathcal{P}(A)$ defined by $F(S) = g[f[S]]$: this yields a function $n \mapsto C_n$ from $\mathbb{N}$ to $\mathcal{P}(A)$ with $C_0 = A \setminus g[B]$ and $C_{\sigma(n)} = g[f[C_n]]$ for every $n$. [L3, given, construct]

2.1 Put $C = \bigcup_{n \in \mathbb{N}} C_n$, a subset of $A$ (a set by Replacement and Union applied to the function of step 1.1); thus $x \in C$ if and only if $x \in C_n$ for some $n \in \mathbb{N}$, and $C_{\sigma(n)} \subseteq C$ for every $n$. [step 1.1, construct]

3.1 Let $x \in A \setminus C$. Then $x \notin C_0 = A \setminus g[B]$, so $x \in g[B]$, and since $g$ is injective there is exactly one $b \in B$ with $g(b) = x$; write $b = g^{-1}(x)$, a value determined by $x$ alone. [step 2.1, L1, given]

4.1 Define $h : A \to B$ by $h(x) = f(x)$ for $x \in C$ and $h(x) = g^{-1}(x)$ for $x \in A \setminus C$; the two clauses have disjoint domains whose union is $A$, and each assigns exactly one value, by step 3.1 for the second, so $h$ is a well-defined function. [step 3.1, construct]

5.1 If $x, y \in C$ and $h(x) = h(y)$ then $f(x) = f(y)$, so $x = y$ because $f$ is injective; if $x, y \in A \setminus C$ and $h(x) = h(y) = b$ then $x = g(b) = y$ by step 3.1. [step 4.1, given, L1]

5.2 The remaining case cannot occur: if $x \in C$ and $y \in A \setminus C$ had $h(x) = h(y)$, then $x \in C_n$ for some $n$, and $h(y) = g^{-1}(y)$ gives $y = g(h(y)) = g(f(x)) \in g[f[C_n]] = C_{\sigma(n)} \subseteq C$, contradicting $y \notin C$; hence $h$ is injective. [step 1.1, step 2.1, step 4.1]

5.3 $h$ is surjective: let $b \in B$ and consider $g(b) \in A$. If $g(b) \notin C$ then $h(g(b)) = g^{-1}(g(b)) = b$. If $g(b) \in C$ then $g(b) \in C_n$ for some $n$; here $n \ne 0$, since $g(b) \in g[B]$ while $C_0 = A \setminus g[B]$, so $n = \sigma(m)$ by [L4] and $g(b) \in C_{\sigma(m)} = g[f[C_m]]$, that is, $g(b) = g(f(x))$ for some $x \in C_m \subseteq C$; injectivity of $g$ gives $b = f(x) = h(x)$. Either way $b$ is a value of $h$. [step 1.1, step 2.1, step 4.1, L1, L4, given]

6.1 Thus $h : A \to B$ is injective and surjective, hence a bijection, and therefore $A \approx B$. [step 5.1, step 5.2, step 5.3, L1, L2] ∎

## Remarks

- The set $C$ is exactly the set of points of $A$ reachable from the "unmatched" part $A \setminus g[B]$ by applying $g \circ f$ finitely often. On $C$ the bijection follows $f$ forwards; off $C$ it runs $g$ backwards. Both halves are forced: a point outside $g[B]$ cannot be an image of $g$, and once one point is handled by $f$ its $g \circ f$ image must be handled by $f$ too.

- **Why the choice-freeness is worth stating.** Many textbook proofs phrase the construction as "follow the chain of preimages backwards until it stops", which sounds like an infinite sequence of selections. It is not: the preimage under an injection is unique when it exists, and the recursion above is a single application of [[thm-recursion]] to one explicitly given function $S \mapsto g[f[S]]$. The theorem is a theorem of ZF.

- With this theorem, $\preceq$ behaves like an order on equinumerosity classes: $A \preceq B$ and $B \preceq A$ give $A \approx B$. Comparability, that $A \preceq B$ or $B \preceq A$ holds for any two sets, is a different matter entirely and is equivalent to the Axiom of Choice ([[def-axiom-of-choice]]); it is not used anywhere on this page.
