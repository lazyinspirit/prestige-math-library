---
id: thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p
kind: theorem
title: "For prime $p$, a transitive subgroup of $S_p$ containing a transposition is all of $S_p$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-action, thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, thm-cauchys-theorem-for-finite-groups, cor-order-of-a-permutation-from-its-cycle-lengths, thm-adjacent-transpositions-generate-the-symmetric-group, lem-conjugating-a-cycle-relabels-its-entries]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Transitive subgroup of prime degree containing a transposition"
      url: "https://proofwiki.org/wiki/Transitive_Subgroup_of_Prime_Degree_Containing_Transposition_is_Symmetric_Group"
    - title: "P. J. Cameron, Permutation Groups, prime-degree actions"
      url: "https://www.maths.qmul.ac.uk/~pjc/pg.html"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $G\le S_p$ act transitively on
$\{0,1,\dots,p-1\}$. If
$G$ contains a transposition, then $G=S_p$.

## Facts & Assumptions
**Given:** A prime $p$, a transitive subgroup $G\le S_p$, and a transposition $\tau\in G$.

[F1] A transitive action is one with a single orbit ([[def-group-action]]).

[L1] Orbit-stabilizer identifies the orbit of one point with the left cosets of its stabilizer, and in the finite case gives $|G|=|G_x|\,|G\cdot x|$ ([[thm-orbit-stabilizer]], [[cor-orbit-stabilizer-cardinality]]).

[L2] If a prime divides the order of a finite group, the group contains an element of that prime order ([[thm-cauchys-theorem-for-finite-groups]]).

[L3] The order of a permutation is the least common multiple of its nontrivial cycle lengths ([[cor-order-of-a-permutation-from-its-cycle-lengths]]).

[L4] The adjacent transpositions generate the full symmetric group on $p$ letters ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[L5] Conjugation relabels cycle entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Proof

**Proof technique:** direct.

1.1 Because the action of $G$ on $\{0,1,\dots,p-1\}$ is transitive, the orbit of any point has size $p$. Hence [L1] gives $p\mid |G|$. By [L2], the group $G$ contains an element $c$ of order $p$. [F1, L1, L2]

1.2 By [L3], a permutation of order $p$ in $S_p$ must be a $p$-cycle: every nontrivial cycle length divides $p$, so each is $1$ or $p$, and there must be one nontrivial cycle. Conjugating inside $S_p$, we may relabel so that $$c=(0\,1\,\dots\,p-1).$$ [L3, L5, algebra]

2.1 Write the given transposition as $\tau=(i\,j)$ with $i\ne j$, and put $d\equiv j-i\pmod p$, choosing $d\in\{1,\dots,p-1\}$. For each $k$, $$c^k\tau c^{-k}=(i+k\,\,j+k),$$ so $G$ contains every transposition of the form $(x\,\,x+d)$, with indices read modulo $p$. Because $p$ is prime, $d$ is invertible modulo $p$, so the sequence $$0,\ d,\ 2d,\ \dots,\ (p-1)d$$ lists all $p$ symbols exactly once modulo $p$. Therefore the $p-1$ transpositions joining consecutive terms in that order all lie in $G$. [step 1.2, L5, algebra]

3.1 Let $\pi$ be the relabelling permutation carrying $k$ to $kd$ modulo $p$. By step 2.1 and [L5], the conjugates $\pi(k\,\,k+1)\pi^{-1}$ for $0\le k\le p-2$ are exactly the $p-1$ transpositions joining consecutive terms in the ordering of step 2.1, so they lie in $G$. Since [L4] says the standard adjacent transpositions generate $S_p$, their conjugates also generate $S_p$. Hence $G$ contains a generating set of $S_p$, so $G=S_p$. [L4, L5, step 2.1] ∎
