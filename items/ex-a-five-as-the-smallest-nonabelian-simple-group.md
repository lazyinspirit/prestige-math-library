---
id: ex-a-five-as-the-smallest-nonabelian-simple-group
kind: example
title: "A5 as the smallest nonabelian simple group"
status: published
origin: pipeline
deps: [thm-alternating-group-is-simple-for-n-at-least-five, thm-sylow-third-theorem, thm-sylow-second-theorem, cor-sylow-subgroup-normal-iff-unique, thm-nontrivial-center-of-a-finite-p-group, thm-lagrange, def-alternating-group]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
---

## Example

$A_5$ is the smallest nonabelian finite simple group.

## Facts & Assumptions

**Given:** The alternating group $A_5$ and finite groups of order less than $60$.

[L1] $A_n$ is simple for $n\ge5$ ([[thm-alternating-group-is-simple-for-n-at-least-five]]).

[L2] If $|G|=p^am$ with $p\nmid m$, then $n_p\mid m$ and $n_p\equiv1\pmod p$ ([[thm-sylow-third-theorem]]). The Sylow subgroups form a single conjugacy class ([[thm-sylow-second-theorem]]), and a unique Sylow subgroup is normal ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] A nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L4] Subgroup orders divide group orders ([[thm-lagrange]]); $A_n$ is the kernel of sign ([[def-alternating-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $A_5$ is simple. Multiplication by a transposition pairs the even and odd permutations, so $|A_5|=5!/2=60$. The even permutations $(1\,2\,3)$ and $(3\,4\,5)$ do not commute, so $A_5$ is nonabelian. [L1, L4, algebra]

1.2 Suppose $G$ is nonabelian simple and $|G|<60$. Its order cannot be $1$ or a prime power: in the latter case its nontrivial normal center from [L3] would be all of $G$, making $G$ abelian. For every prime divisor $p$ of its order, [L2] therefore gives $n_p>1$. [L2, L3, given, algebra]

1.3 The non-prime-power integers between $2$ and $59$, apart from $12,24,30,36,48,56$, are
$$6,10,14,15,18,20,21,22,26,28,33,34,35,38,39,40,42,44,45,46,50,51,52,54,55,57,58.$$
For each integer in this list, take its largest prime divisor $p$. Inspection of the divisors of $m=|G|/p^a$ shows that $1$ is the only divisor congruent to $1$ modulo $p$. Thus [L2] gives $n_p=1$, excluding every order in the list. [L2, step 1.2, algebra]

2.1 A nontrivial conjugation action of a simple group on its $n_p>1$ Sylow subgroups is faithful: the kernel is normal and cannot be all of $G$, because the action is transitive. Thus $G$ embeds in $S_{n_p}$. The sign of this action is trivial, since a nontrivial homomorphism from nonabelian simple $G$ to the group of order two would be injective. Consequently $G$ embeds in $A_{n_p}$. For orders $12,24,36$, [L2] gives $n_3=4$. Since $|A_4|=12$, [L4] rules out $24,36$; at order $12$ the image would be all of $A_4$, which is not simple: its identity and three double transpositions form a proper nontrivial subgroup preserved by conjugation. For order $48$, [L2] gives $n_2=3$, contradicting an embedding of $G$ into $A_3$, of order $3$. [L2, L4, step 1.2, algebra]

2.2 For order $30$, [L2] and step 1.2 force $n_5=6$ and $n_3=10$. Distinct subgroups of prime order intersect only in the identity by [L4], so these supply $6\cdot4+10\cdot2=44$ distinct nonidentity elements, impossible. For order $56$, the same rules give $n_7=8$ and $n_2=7$. The eight subgroups of order $7$ supply $48$ distinct nonidentity elements. Every Sylow $2$-subgroup has order $8$, and its seven nonidentity elements must be the seven remaining nonidentity elements of $G$. All Sylow $2$-subgroups would therefore coincide, contradicting $n_2=7$. [L2, L4, step 1.2, algebra]

3.1 Steps 1.2–2.2 exclude every order below $60$, while step 1.1 supplies a nonabelian simple group of order $60$. Hence $A_5$ is the smallest nonabelian finite simple group. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
