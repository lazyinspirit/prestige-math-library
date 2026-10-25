---
id: def-boone-machine-semigroup-and-augmented-configurations
kind: definition
title: "Boone machine semigroup and augmented configurations"
status: published
origin: pipeline
deps: ["lem-normalized-fixed-halting-machine-for-boone-simulation", "def-computation-alphabet-and-word-convention", "def-equivalence-relation", "def-semigroup-and-monoid"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.426\u2013427, associated semigroup presentation"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Definition

Let $T$ be the fixed machine of [[lem-normalized-fixed-halting-machine-for-boone-simulation]], with tape alphabet $S$, blank $s_0$, states $Q$, start $q_{\rm start}$ and stop $q_0$. Take new, mutually distinct symbols $h,q$. Set $A=S\sqcup Q\sqcup\{h,q\}$. Words and concatenation have the convention of [[def-computation-alphabet-and-word-convention]]. On the nonempty words $A^+$ use the following equations, oriented as displayed:

| Instruction of $T$ | Relations (for every $s_\beta\in S$) |
|---|---|
| write $s_k$, enter $q_b$, from $(q_a,s_j)$ | $q_a s_j=q_b s_k$ |
| move right, enter $q_b$, from $(q_a,s_j)$ | $q_a s_j s_\beta=s_jq_b s_\beta$; $q_a s_jh=s_jq_b s_0h$ |
| move left, enter $q_b$, from $(q_a,s_j)$ | $s_\beta q_a s_j=q_b s_\beta s_j$; $h q_a s_j=hq_b s_0s_j$ |

Add $q_0s=q_0$ and $s q_0h=q_0h$ for every $s\in S$, and $h q_0h=q$. Erasure never ranges over $h$.

An elementary replacement substitutes either side of an equation for the other inside arbitrary contexts $u,v\in A^*$. Write $a\sim b$ when a finite sequence of such symmetric replacements joins them; the sequence of length zero is allowed. Define $\Gamma=A^+/{\sim}$ with multiplication $[a][b]=[ab]$, using the quotient-set convention of [[def-equivalence-relation]]. Its well-definedness is verified below.

The **augmented configurations** are $q$ and words $hUq_aVh$, where $U,V\in S^*$, $q_a\in Q$, and $V\ne\varepsilon$ unless $q_a=q_0$. The initial word is $C(w)=h q_{\rm start}v(w)h$. The symbol $q$ has no outgoing oriented rule.

For subsequent algebra put $\bar S=S\sqcup\{h\}$ and $\bar Q=Q\sqcup\{q\}$. Index the finite relation list by $I$ and write each relation as
$$F_i q_{a(i)}G_i=H_i q_{b(i)}K_i,$$
where $F_i,G_i,H_i,K_i\in\bar S^*$, possibly empty, and both sides have exactly one state letter. This change of notation adds no erasure rule.

## Facts & Assumptions

**Given:** The displayed relation list and contextual replacement on nonempty words.

[F1] The machine has finite tape and state sets and a finite table. ([[lem-normalized-fixed-halting-machine-for-boone-simulation]])

[F2] Concatenation joins finite words, including the empty word. ([[def-computation-alphabet-and-word-convention]])

[F3] A reflexive, symmetric, transitive relation defines the quotient set of equivalence classes. ([[def-equivalence-relation]])

[F4] A set with an associative binary operation is a semigroup. ([[def-semigroup-and-monoid]])

## Verification

1.1 Every table entry contributes at most $|S|+1$ transition equations, and cleanup contributes $2|S|+1$. Every side is nonempty and contains exactly one state letter, including $q$ on the final right side. Thus replacements stay in $A^+$ and the list is finite. [F1, given]

2.1 The length-zero path proves $a\sim a$. Reversing a path proves symmetry because each replacement permits both directions. Joining two finite paths with common endpoint proves transitivity. Hence $\sim$ is an equivalence relation and its classes form a set. [F3, step 1.1]

3.1 Prefixing and suffixing every word of a path by fixed words prefixes and suffixes every replacement context. Therefore $a\sim a'$ implies $uav\sim ua'v$. If also $b\sim b'$, first use the path from $a$ to $a'$ with suffix $b$, then the path from $b$ to $b'$ with prefix $a'$, obtaining $ab\sim a'b'$. Thus $[a][b]=[ab]$ is independent of both representatives. [F2, step 2.1]

4.1 Word concatenation is associative: both $(ab)c$ and $a(bc)$ list the letters of $a$, then $b$, then $c$ at the same indices. Consequently $([a][b])[c]=[(ab)c]=[a(bc)]=[a]([b][c])$. Products stay nonempty, so this is the claimed semigroup. Empty contexts and one-letter words cause no exception; an empty word is not adjoined as an identity element. [F2, F4, step 3.1] ∎

## Source conventions

Rotman, printed pp.426–427, gives the eight relation families. The augmented domain permits empty right tape during stopping cleanup, repairing the nonempty-right-tape assertion in his Lemma 12.3.
