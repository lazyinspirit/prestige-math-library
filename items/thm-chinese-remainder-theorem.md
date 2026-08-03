---
id: thm-chinese-remainder-theorem
kind: theorem
title: "Chinese remainder theorem for a finite pairwise-coprime list: simultaneous residues determine one class modulo the product, and the resulting bijection preserves addition and multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-chinese-remainder-two-moduli, lem-pairwise-coprime-divisibility, def-monoid-finite-product, thm-generalised-associativity, thm-induction-principle, def-addition-and-multiplication-modulo-n, def-injection-surjection-bijection, def-congruence-modulo-an-integer, def-integers-modulo-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
pipeline_run: null
---

## Statement

Let $n_0,\ldots,n_{r-1}$ be a finite pairwise-coprime list of positive
integers and let $N:=\prod_{i<r}n_i$. The map

$$\Phi:\mathbb Z/N\longrightarrow\prod_{i<r}\mathbb Z/n_i,\qquad[x]_N\longmapsto([x]_{n_i})_{i<r},$$

is a bijection. It preserves addition, multiplication, $[0]$, and $[1]$
componentwise. For the empty list, $N=1$ and both sides have one element.

## Facts & Assumptions

**Given:** A natural $r$, a finite pairwise-coprime list of positive integers $n_0,\ldots,n_{r-1}$, and $N:=\prod_{i<r}n_i$.

[L1] Every initial product $P_k:=\prod_{i<k}n_i$ is coprime to $n_k$, and the full product divides every common multiple of all list entries ([[lem-pairwise-coprime-divisibility]]).

[L2] For coprime positive $m,n$, each pair of residue classes modulo $m,n$ determines exactly one class modulo $mn$ ([[lem-chinese-remainder-two-moduli]]).

[L3] Finite products have empty value $1$ and satisfy $P_{k+1}=P_kn_k$ ([[def-monoid-finite-product]], [[thm-generalised-associativity]]).

[L4] Congruence modulo a divisor follows from congruence modulo the dividend, and modular addition and multiplication are computed on representatives ([[def-congruence-modulo-an-integer]], [[def-addition-and-multiplication-modulo-n]]).

[L5] A map is bijective exactly when it is both injective and surjective ([[def-injection-surjection-bijection]]).

[L6] Induction proves a statement at every natural number from its base case and successor implication ([[thm-induction-principle]]).

[F1] The quotient $\mathbb Z/c$ is the set of congruence classes modulo $c$ ([[def-integers-modulo-n]]).

## Proof

**Proof technique:** induction.

1.1 For $r=0$, $N=P_0=1$. The quotient $\mathbb Z/1$ has one class because congruence modulo $1$ is universal, and the empty Cartesian product has its single empty tuple; hence $\Phi$ is a bijection and all componentwise preservation assertions are vacuous. [base, L3, L4, F1]

1.2 Assume the simultaneous-residue assertion for the first $k$ moduli. Given classes modulo the first $k+1$ moduli, the induction hypothesis supplies a unique class $[y]_{P_k}$ having the first $k$ residues. Since $\gcd(P_k,n_k)=1$ by [L1], [L2] supplies a unique class $[x]_{P_kn_k}=[x]_{P_{k+1}}$ reducing to $[y]_{P_k}$ and to the prescribed class modulo $n_k$. It therefore has all prescribed residues. [ih, L1, L2, L3]

1.3 If $x\equiv y\pmod N$, every $n_i$ divides $N$ and hence divides $x-y$, so $\Phi$ is well defined. For representatives $x,y$, its $i$th coordinate sends $[x+y]_N$ to $[x+y]_{n_i}=[x]_{n_i}+[y]_{n_i}$ and sends $[xy]_N$ to $[xy]_{n_i}=[x]_{n_i}[y]_{n_i}$; it similarly sends $[0]_N,[1]_N$ to the componentwise identities. [L3, L4]

2.1 If two classes modulo $P_{k+1}$ have the same first $k+1$ residues, their representatives have difference divisible by every $n_i$ for $i<k+1$, hence by $P_{k+1}$ using [L1]; the two classes are equal. Thus the class constructed in step 1.2 is unique. [ih, step 1.2, L1, L4]

3.1 Induction gives existence and uniqueness for every finite length $r$. Therefore $\Phi$ is surjective and injective, hence bijective by [L5]. [step 1.1, step 1.2, step 2.1, L5, L6]

4.1 Steps 3.1 and 1.3 prove all assertions, including the empty-list boundary case from step 1.1. [step 1.1, step 3.1, step 1.3, discharge-induction] ∎
