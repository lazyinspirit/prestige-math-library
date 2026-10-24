---
id: thm-murphy-tableau-elements-form-a-cellular-basis
kind: theorem
title: "The Murphy tableau elements form a cellular basis"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-dj-bridge-murphy-cellular-basis-and-cell-form, cor-sum-of-squares-of-standard-tableau-numbers, def-cellular-algebra-basis-and-cell-module, def-dominance-order-on-partitions, def-generic-type-a-hecke-algebra, def-murphy-elements-and-murphy-tableau-elements, def-young-tableau-standard-tableau-and-shape, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3 Section 2, printed pp. 20-25: Lemma 3.2, Proposition 3.3, Corollary 3.4, Lemma 3.9, the Garnir tableaux, Lemma 3.12, Lemma 3.13, Lemma 3.14, Corollary 3.15, Proposition 3.16, Corollary 3.17 and Theorem 3.18 (the Murphy Basis Theorem); the straightening argument is followed step by step in the proof below"
---

## Statement

Let $R$ be a commutative ring, $q\in R^{\times}$, and $H=H_{R,q}(S_n)$
([[def-generic-type-a-hecke-algebra]]). Let $\Lambda$ be the set of partitions
of $n$ ordered by dominance $\unrhd$
([[def-dominance-order-on-partitions]]), and for $\lambda\in\Lambda$ let
$T(\lambda)=\mathrm{Std}(\lambda)$ be the set of standard $\lambda$-tableaux
([[def-young-tableau-standard-tableau-and-shape]]). Then the **Murphy basis
theorem** holds: the family
$$\mathcal M=\{m_{st}:\lambda\vdash n,\ s,t\in\mathrm{Std}(\lambda)\}$$
is an $R$-basis of $H$, and $(\mathcal M,\Lambda)$ is a cellular basis of $H$ in
the sense of [[def-cellular-algebra-basis-and-cell-module]]. Explicitly:
(i) $m_{st}^{*}=m_{ts}$ for all $\lambda$ and $s,t$; and (ii) for every
$\lambda$, every $t\in\mathrm{Std}(\lambda)$ and every $h\in H$ there exist
$r_v\in R$ with
$$m_{st}h\equiv\sum_{v\in\mathrm{Std}(\lambda)}r_v\,m_{sv}\pmod{H^{\rhd\lambda}},$$
where $H^{\rhd\lambda}$ is spanned by the $m_{uv}$ with $\mu\rhd\lambda$. The
theorem holds over every commutative coefficient ring with $q\in R^{\times}$
and assumes no semisimplicity; the total number of Murphy elements is
$\sum_{\lambda\vdash n}|\mathrm{Std}(\lambda)|^2=n!$
([[cor-sum-of-squares-of-standard-tableau-numbers]]), matching the rank of $H$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a unit $q$, the type-A Hecke algebra and the Murphy elements $m_{st}=T_{d(s)}^*x_\lambda T_{d(t)}$ in the Statement.

[F1] The independent integral construction proves that these exact elements form a base-change-compatible basis; their dominance spans are two-sided ideals, star interchanges the indices, and their multiplication satisfies the fixed-first-index cell law over every commutative coefficient ring with unit parameter ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F2] The elements $x_\lambda$ and $d(t)$ are the row symmetrizer and distinguished tableau permutations of [[def-murphy-elements-and-murphy-tableau-elements]], using the standard Hecke basis of [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]. The dominance poset, tableau sets and cardinality sum are [[def-dominance-order-on-partitions]], [[def-young-tableau-standard-tableau-and-shape]] and [[cor-sum-of-squares-of-standard-tableau-numbers]].

## Proof

**Proof technique:** direct.

1.1 Identify the objects in [F1]. Its row symmetrizer is $x_\lambda=\sum_{w\in S_\lambda}T_w$, its permutation is the unique distinguished $d(t)$ carrying the row-filled tableau to $t$, and its element is $T_{d(s)}^*x_\lambda T_{d(t)}$. These are precisely [F2]'s Murphy elements. The proved integral basis in [F1] therefore gives the required $R$-basis and $m_{st}^*=m_{ts}$, including the empty tableau when $n=0$. [given, F1, F2, algebra]

2.1 Its dominance ideal $I^{\rhd\lambda}$ and the present $H^{\rhd\lambda}$ are the spans of exactly the same basis elements, so they are equal. The independent cell law says $m_{st}h\equiv\sum_v r_v m_{sv}$ modulo this ideal, with coefficients independent of $s$. Together with step 1.1 and the same finite dominance poset, these are exactly the cellular axioms and all asserted formulas. The basis has $\sum_\lambda|\operatorname{Std}(\lambda)|^2=n!$ elements by [F2]. Every part holds after every base change by [F1], so no specialized semisimplicity or factor inversion is needed. No choice principle is used. [F1, F2, step 1.1, algebra] ∎
