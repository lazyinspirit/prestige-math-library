---
id: lem-unordered-pair-equality
kind: lemma
title: "$\\{a,b\\} = \\{c,d\\}$ if and only if ($a = c$ and $b = d$) or ($a = d$ and $b = c$); in particular $\\{a\\} = \\{c,d\\}$ if and only if $a = c = d$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-unordered-pair-and-singleton, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "equality of unordered pairs"
proof_strategy: cases
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2 and Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of pairing (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_pairing"
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
pipeline_run: null
---

## Statement

For all sets $a$, $b$, $c$, $d$:

$$\{a,b\} = \{c,d\} \ \leftrightarrow\ \bigl((a = c \wedge b = d) \vee (a = d \wedge b = c)\bigr).$$

In particular, taking $b := a$, $\{a\} = \{c,d\}$ if and only if $a = c$ and
$a = d$.

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$, $d$.

[L1] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** cases.

1.1 Right to left: if $a = c$ and $b = d$, or $a = d$ and $b = c$, then for every $t$ the conditions "$t = a$ or $t = b$" and "$t = c$ or $t = d$" are the same, so the two pairs have the same elements and are equal. [L1, L2]

1.2 Left to right, setting up: assume $\{a,b\} = \{c,d\}$. Since $a$ and $b$ are elements of the left-hand set they are elements of the right-hand one, so $a$ is $c$ or $d$ and $b$ is $c$ or $d$; likewise $c$ is $a$ or $b$ and $d$ is $a$ or $b$. [L1]

2.1 Suppose $a = b$. Then $c$ is $a$ or $b$, so $c = a$; and $d$ is $a$ or $b$, so $d = a$. Hence $a = c$ and $b = a = d$, the first disjunct. [assume-case same, step 1.2]

2.2 Suppose instead $a \neq b$. If $a = c$, then $b$ is $c$ or $d$, and $b = c = a$ is excluded, so $b = d$ and the first disjunct holds. Otherwise $a = d$; then $c$ is $a$ or $b$, and $c = a$ would give $c = a = d$, whence $b$, being $c$ or $d$, equals $a$, contradicting $a \neq b$; so $c = b$ and the second disjunct holds. [assume-case diff, step 1.2]

3.1 The alternatives $a = b$ and $a \neq b$ exhaust the possibilities, so the left-to-right implication holds. [step 2.1, step 2.2, cases-exhaustive]

4.1 Both implications hold, which is the biconditional; putting $b := a$ makes the two disjuncts read "$a = c$ and $a = d$" and "$a = d$ and $a = c$", so $\{a\} = \{c,d\}$ if and only if $a = c$ and $a = d$. [step 1.1, step 3.1, L1] ∎
