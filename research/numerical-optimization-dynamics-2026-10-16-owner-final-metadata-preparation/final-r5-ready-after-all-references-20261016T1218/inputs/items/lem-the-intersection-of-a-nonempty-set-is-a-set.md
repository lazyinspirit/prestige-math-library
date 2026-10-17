---
id: lem-the-intersection-of-a-nonempty-set-is-a-set
kind: lemma
title: "For a set $x \\neq \\varnothing$ the collection $\\{\\, z : \\forall s\\,(s \\in x \\to z \\in s) \\,\\}$ is a set, and it does not depend on the member of $x$ used to separate it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-schema-of-separation, def-axiom-of-extensionality, thm-the-empty-set-exists-and-is-unique, def-subset-and-proper-subset]
justified_by: []
aliases: []
landmark: false
short: "the intersection is a set"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

Let $x$ be a set with $x \neq \varnothing$. Then there is a set whose elements
are exactly the sets belonging to every member of $x$; that is, the class
$\{\, z : \forall s\,(s \in x \to z \in s) \,\}$ is a set. Moreover, for every
$B \in x$ the separated set $\{\, z \in B : \forall s\,(s \in x \to z \in s) \,\}$
is that same set, so the construction does not depend on which member of $x$ is
used.

## Facts & Assumptions

**Given:** a set $x$ with $x \neq \varnothing$.

[L1] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L2] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L3] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L4] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 If $x$ had no members it would be a set with no elements and hence equal to $\varnothing$, contrary to hypothesis; so $x$ has a member, and we fix one, $B \in x$. [L3, given, choose]

2.1 Apply Separation to $B$ with the formula $\varphi(z,x) := \forall s\,(s \in x \to z \in s)$ and the parameter $x$: the collection $c_B := \{\, z \in B : \forall s\,(s \in x \to z \in s) \,\}$ is a set, and $c_B \subseteq B$. [L1, L4, step 1.1]

3.1 For every $z$, $z \in c_B$ holds exactly when $z \in B$ and $z$ belongs to every member of $x$; since $B$ is itself a member of $x$, the second condition already forces $z \in B$, so $z \in c_B$ holds exactly when $z$ belongs to every member of $x$. [step 2.1, step 1.1]

4.1 The condition characterising the elements of $c_B$ in step 3.1 does not mention $B$, so for any other member $B'$ of $x$ the set $c_{B'}$ has exactly the same elements as $c_B$ and equals it; the class is therefore a set and is independent of the member used to separate it. [L2, step 3.1] ∎
