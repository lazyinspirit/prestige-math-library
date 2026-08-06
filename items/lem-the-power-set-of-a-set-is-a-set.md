---
id: lem-the-power-set-of-a-set-is-a-set
kind: lemma
title: "For every set $x$ there is exactly one set whose elements are precisely the subsets of $x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-power-set, def-axiom-schema-of-separation, def-axiom-of-extensionality, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "the power set is a set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
pipeline_run: null
---

## Statement

For every set $x$ there is exactly one set $p$ such that, for every $z$,
$z \in p$ holds if and only if $z \subseteq x$.

## Facts & Assumptions

**Given:** a set $x$.

[L1] For every set $x$ there is a set $y$ that contains every $z$ all of whose elements belong to $x$ ([[def-axiom-of-power-set]]).

[L2] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L3] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L4] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Power Set supplies a set $y$ that contains every $z$ all of whose elements belong to $x$; by the meaning of inclusion, $y$ contains every $z$ with $z \subseteq x$. [L1, L3]

2.1 Apply Separation to $y$ with the formula $\varphi(z,x) := \forall t\,(t \in z \to t \in x)$ and the parameter $x$: the set $p := \{\, z \in y : z \subseteq x \,\}$ exists, and for every $z$, $z \in p$ holds if and only if $z \in y$ and $z \subseteq x$. [L2, L3, step 1.1]

3.1 If $z \subseteq x$ then $z \in y$ by step 1.1, so the condition "$z \in y$ and $z \subseteq x$" reduces to $z \subseteq x$; hence $z \in p$ holds if and only if $z \subseteq x$, which proves existence. [step 1.1, step 2.1]

4.1 If $p'$ also satisfies "$z \in p'$ if and only if $z \subseteq x$" for every $z$, then $z \in p$ holds if and only if $z \in p'$ for every $z$, so $p = p'$; existence and uniqueness together give the statement. [L4, step 3.1] ∎
