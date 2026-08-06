---
id: cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets
kind: counterexample
title: "Sets $a$ and $b$ with $\\mathcal{P}(a) \\cup \\mathcal{P}(b) \\subsetneq \\mathcal{P}(a \\cup b)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-power-set, prop-basic-properties-of-the-power-set, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "power set of a union"
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathcal{P}(a) \cup \mathcal{P}(b) = \mathcal{P}(a \cup b)$
for all sets $a$ and $b$. The witness is $a := \{\varnothing\}$ and
$b := \{\{\varnothing\}\}$, for which the inclusion from left to right is proper:
$a \cup b$ is a subset of $a \cup b$, so it lies in the right-hand side, but it
is a subset of neither $a$ nor $b$.

## Facts & Assumptions

**Given:** $a := \{\varnothing\}$ and $b := \{\{\varnothing\}\}$.

[L1] $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$ ([[prop-basic-properties-of-the-power-set]]).

[L2] The inclusion $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$ is an equality if and only if $a \subseteq b$ or $b \subseteq a$ ([[prop-basic-properties-of-the-power-set]]).

[L3] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L4] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L5] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L6] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L7] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Counterexample

**Proof technique:** direct.

1.1 Neither of the two sets is included in the other. The only element of $a$ is $\varnothing$ and the only element of $b$ is $\{\varnothing\}$, and these differ because $\{\varnothing\}$ has an element while $\varnothing$ has none; so $\varnothing \in a$ with $\varnothing \notin b$, and $\{\varnothing\} \in b$ with $\{\varnothing\} \notin a$. [L4, L5, L7]

2.1 The general inclusion holds, and it is an equality exactly when one of the two sets is included in the other; by step 1.1 that fails here, so the inclusion is proper. [L1, L2, step 1.1]

3.1 The witnessing element is $a \cup b$ itself: it is a subset of $a \cup b$, hence an element of $\mathcal{P}(a \cup b)$, whereas $a \cup b \subseteq a$ would force $b \subseteq a$ and $a \cup b \subseteq b$ would force $a \subseteq b$, both excluded by step 1.1; so $a \cup b$ is in neither $\mathcal{P}(a)$ nor $\mathcal{P}(b)$. [L3, L4, L6, L8, step 1.1, step 2.1] ∎
