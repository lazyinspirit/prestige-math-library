---
id: ex-blass-paired-finite-modification-classes
kind: example
title: Blass's paired finite-modification classes
status: published
origin: pipeline
deps: [lem-blass-paired-finite-modification-classes-form-a-russell-set, def-blass-finite-modification-classes-and-parameter-hod-model, lem-feferman-tail-complement-automorphism, lem-forcing-truth-lemma, lem-symmetry-lemma-for-forcing-automorphisms]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Eleftherios Tachtsis, On the Existence of Free Ultrafilters on omega and on Russell-sets in ZF, complete proof of Theorem 4, printed pp. 5–7", url: "https://www.impan.pl/shop/publication/transaction/download/product/91097"}
---

## Statement

For a Cohen index $k$ outside the finitely many parameter coordinates, an
unused-tail flip interchanges $\delta(a_k)$ and
$\delta(\omega\setminus a_k)$ while fixing their pair

$$f(k)=\{\delta(a_k),\delta(\omega\setminus a_k)\}.$$

This calculation blocks a choice function on every infinite subfamily of the
canonical pairs.

## Facts & Assumptions

**Given:** Blass's Cohen extension and parameter-HOD model $N$.

[F1] [[lem-blass-paired-finite-modification-classes-form-a-russell-set]]
proves that the values $f(k)$ are pairwise disjoint two-element sets and that
no infinite subfamily has a choice function.

[F2] [[def-blass-finite-modification-classes-and-parameter-hod-model]] says
each member of $N$ is hereditarily uniquely definable from $f$, ordinals, and
finitely many reals from the displayed reservoir $S$.

[F3] [[lem-feferman-tail-complement-automorphism]] supplies the
finite-condition unused-tail flip at a specified fresh Cohen coordinate.

[F4] [[lem-forcing-truth-lemma]] supplies a condition in the actual generic
forcing a true unique-definition and value assertion.

[F5] [[lem-symmetry-lemma-for-forcing-automorphisms]] transports that forced
assertion through the tail flip.

## Proof

**Proof technique:** contradiction by a fresh-coordinate tail flip.

1.1 Suppose $c\in N$ chooses one member of $f(k)$ for every $k$ in an infinite $K\subseteq\omega$. By F2, a unique definition of $c$ uses only $f$, ordinals, and reals $s_1,\ldots,s_t\in S\setminus\{f\}$ coming from finitely many coordinate indices $m_1,\ldots,m_t$. Let $k$ be the least member of $K\setminus\{m_1,\ldots,m_t\}$; this canonical fresh choice uses no Choice principle. Interchanging the two labels if necessary, suppose $c(f(k))=\delta(a_k)$. [F1, F2, assume-contra]

2.1 By F4 choose a finite $p\in G$ forcing both the unique defining formula for $c$ and $c(f(k))=\delta(a_k)$. Let $b=0$ if $p$ mentions no bit of row $k$, and otherwise let $b$ exceed every mentioned bit. Flip all $(k,j)$ with $j\geq b$. By F3 this fixes $p$, every ordinal, and each $s_i$. It sends $a_k$ to a finite modification of $\omega\setminus a_k$, so it interchanges $\delta(a_k)$ and $\delta(\omega\setminus a_k)$. It fixes $f(k)$ as an unordered pair and fixes all other values of $f$, hence fixes $f$. [F2, F3, F4, step 1.1]

3.1 Apply F5 to the assertion forced in step 2.1. Because its condition and every defining parameter are fixed, the same $p$ forces that the same uniquely defined $c$ satisfies $c(f(k))=\delta(\omega\setminus a_k)$. Since $p\in G$, both value equations hold in the extension, but F1 says their right-hand sides are distinct. This contradicts functionality of $c$. Thus no choice function exists on an infinite subfamily. A choice on the empty subfamily, on one pair, or on any other fixed finite subfamily is not excluded; the obstruction is exactly the infinite partial-choice claim. The example uses no assertion about ultrafilters on arbitrary sets. [F1, F5, step 2.1, discharge-contradiction] ∎
