---
id: ex-ccc-posets-are-proper-by-maximal-antichains
kind: example
title: "Ccc posets are proper by maximal antichains"
status: draft
origin: pipeline
deps: [thm-ccc-and-countably-closed-forcings-are-proper]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 8.7, printed p.39"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $P$ be ccc, let $M$ be a relevant countable elementary submodel containing
$P$, and let $p\in P\cap M$. Then $p$ itself is an $(M,P)$-master condition.

## Facts & Assumptions

**Given:** ZFC, the stronger-is-smaller forcing order, and $P,M,p$ as in the Statement.

[F1] Every ccc forcing preorder is proper; the verification below calculates the stronger master condition used in that proof. [[thm-ccc-and-countably-closed-forcings-are-proper]]

## Verification

1.1 Fix a dense set $D\subseteq P$ with $D\in M$. By elementarity, inside $M$ choose a maximal antichain $A\subseteq D$. It is also maximal in $P$: maximality is the first-order assertion that every $r\in P$ is compatible with some $a\in A$, and all witnesses to compatibility are conditions in the ambient $H_\theta$. Since $P$ is ccc, $A$ is countable in the universe. Elementarity then puts in $M$ a surjection $e:\omega\to A$ (or a finite enumeration), and every $n<\omega$ belongs to $M$; hence $A\subseteq M$. [F1, Given]

2.1 Let $r\leq p$ be arbitrary. Maximality of $A$ gives $a\in A$ compatible with $r$. By step 1.1, $a\in A\subseteq D\cap M$. Thus $D\cap M$ is predense below $p$. Since this holds for every dense $D\in M$, $p$ is $(M,P)$-generic; the reflexive inequality $p\leq p$ makes it a master below the original $p$. [F1, step 1.1]

3.1 The calculation works unchanged when $P$, $A$, or $D$ is finite. A dense subset of the stipulated nonempty $P$ cannot be empty, and for a one-condition order its unique condition is the required antichain member and master. No stronger condition than $p$ was constructed: ccc makes the starting condition itself sufficient. [F1, step 2.1] ∎
