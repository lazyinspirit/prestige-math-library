---
id: thm-burnsides-p-a-q-b-theorem
kind: theorem
title: "Burnside's $p^aq^b$ theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup, thm-conjugacy-class-cardinality, thm-extensions-and-direct-products-of-solvable-groups-are-solvable, thm-normal-subgroups-of-finite-p-groups-meet-the-center, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-sylow-first-theorem]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.7.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, proof after Theorem 4.23"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $p$ and $q$ be distinct primes, and let $a,b\ge0$. Every finite group of
order $p^a q^b$ is solvable.

## Facts & Assumptions

**Given:** Distinct primes $p,q$, integers $a,b\ge0$, and a finite group $G$ of order $p^a q^b$.

[F1] A conjugacy class of prime-power size forces a proper nontrivial normal subgroup ([[thm-a-prime-power-conjugacy-class-forces-a-proper-nontrivial-normal-subgroup]]).

[F2] Every nontrivial normal subgroup of a finite $p$-group meets the center nontrivially ([[thm-normal-subgroups-of-finite-p-groups-meet-the-center]]).

[F3] If $N$ and $G/N$ are solvable, then $G$ is solvable ([[thm-extensions-and-direct-products-of-solvable-groups-are-solvable]]).

[F4] Every subgroup and quotient of a solvable group is solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[F5] Sylow's first theorem gives a Sylow $p$-subgroup ([[thm-sylow-first-theorem]]).

[F6] The conjugacy class of $x$ has size $[G:C_G(x)]$ ([[thm-conjugacy-class-cardinality]]).

[F7] Solvability means that some derived subgroup is trivial ([[def-derived-series-solvable-group-and-derived-length]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the statement false, and choose a counterexample $G$ of minimal order. If one of $a$ or $b$ is zero, then $G$ is a finite $r$-group for $r=p$ or $r=q$. If $G$ is trivial or abelian, then its derived subgroup is trivial, so $G$ is solvable by [F7]. Otherwise [F2], with $r$ in place of its generic prime, applied to $G\trianglelefteq G$ gives a nontrivial central subgroup $N\subsetneq G$. Then both $N$ and $G/N$ are smaller finite $r$-groups, so minimality makes them solvable, and [F3] makes $G$ solvable, contradiction. So any minimal counterexample has $a,b\ge1$. [F2, F3, F7, given, assume-contra, choose]

2.1 If $N\trianglelefteq G$ is proper and nontrivial, then both $N$ and $G/N$ have smaller order of the form $p^r q^s$, so minimality makes them solvable; then [F3] makes $G$ solvable, contradiction. Hence a minimal counterexample must be simple. [F3, F4, step 1.1, assume-contra, discharge-contradiction]

3.1 By [F5], choose a Sylow $p$-subgroup $P\le G$. Since $P$ is a nontrivial finite $p$-group, [F2] applied to $P\trianglelefteq P$ gives a nonidentity element $z\in Z(P)$. Because $G$ is simple and $a,b\ge1$, it is not abelian, so $z\notin Z(G)$. [F2, F5, step 2.1, choose]

4.1 Every element of $P$ commutes with $z$, so $P\le C_G(z)$. Therefore the full $p$-part of $|G|$ lies in $|C_G(z)|$, and [F6] gives $|\operatorname{Cl}_G(z)|=[G:C_G(z)]=q^m$ for some $m\ge1$. Applying [F1] to this prime-power class yields a proper nontrivial normal subgroup of $G$, contradicting simplicity from step 2.1. [F1, F6, step 3.1, algebra]

5.1 The contradiction shows that no counterexample exists. Therefore every finite group of order $p^a q^b$ is solvable. [step 1.1, step 4.1, discharge-contradiction] ∎
