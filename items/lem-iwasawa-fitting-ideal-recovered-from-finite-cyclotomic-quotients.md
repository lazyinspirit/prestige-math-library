---
id: lem-iwasawa-fitting-ideal-recovered-from-finite-cyclotomic-quotients
kind: lemma
title: Recovering an Iwasawa Fitting ideal from all finite cyclotomic quotients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-p-adic-integers-as-compatible-residue-classes
  - def-iwasawa-characteristic-ideal-over-zp-power-series
  - lem-fitting-ideals-presentation-independent
  - lem-iwasawa-fitting-divisorial-hull-characteristic-ideal
sources:
  references:
    - title: The Stacks Project, Fitting ideals
      url: https://stacks.math.columbia.edu/tag/07ZA
      locator: Lemma 15.8.4(3), including its proof; the finite-cyclotomic specialization and closed-ideal argument are supplied locally here.
axiom_use: AC is retained for the characteristic-ideal suppliers and choosing a sequence of ideal approximants; the diagonal subsequence construction is explicit.
---

## Statement

Assume AC. Let $p$ be a prime, $R=\mathbb Z_p[\![T]\!]$, and $M$ a finitely generated torsion $R$-module. Write $F=\operatorname{Fitt}_{0,R}(M)$ for the ideal of maximal minors of a finite presentation, including the empty-minor convention. For $n\ge1$ set $\omega_n=(1+T)^{p^n}-1$, $J_n=(p^n,\omega_n)$, $A_n=R/J_n$, and let $\pi_n:R\to A_n$ be the quotient map. Then $A_n$ is finite, the ideals $J_n$ form a decreasing neighborhood basis for the $(p,T)$-adic topology, and
$$F=\bigcap_{n\ge1}\pi_n^{-1}\bigl(\operatorname{Fitt}_{0,A_n}(M/J_nM)\bigr).$$
For any nonzero $g\in R$, if $\pi_n(g)\in\operatorname{Fitt}_{0,A_n}(M/J_nM)$ for every $n$, then $(g)\subseteq\operatorname{char}_R(M)$. If $\operatorname{Fitt}_{0,A_n}(M/J_nM)\subseteq\pi_n(g)A_n$ for every $n$, then $\operatorname{char}_R(M)\subseteq(g)$. In particular equality of these finite-quotient ideals for every $n$ implies $F=(g)$ and $\operatorname{char}_R(M)=(g)$. These are conditional algebraic implications, with no assertion about arithmetic finite-level modules.

## Statement references

[The Stacks Project, Lemma 15.8.4(3)](https://stacks.math.columbia.edu/tag/07ZA)

[[lem-iwasawa-fitting-divisorial-hull-characteristic-ideal]]

## Facts & Assumptions

**Given:** AC, $p,R,M,F,J_n,A_n,\pi_n$ and the nonzero element $g$ in the Statement.

[F1] The ring $R$ is Noetherian, and the characteristic ideal of a finitely generated torsion module is defined by height-one local lengths. [[def-iwasawa-characteristic-ideal-over-zp-power-series]]

[F2] Fitting ideals are independent of presentation and commute with base change. [[lem-fitting-ideals-presentation-independent]]

[F3] The divisorial hull of $F$ is $\operatorname{char}_R(M)$. Thus $g\in F$ implies $(g)\subseteq\operatorname{char}_R(M)$, while $F\subseteq(g)$ implies $\operatorname{char}_R(M)\subseteq(g)$. [[lem-iwasawa-fitting-divisorial-hull-characteristic-ideal]]

[F4] A $p$-adic integer is a compatible sequence of residues modulo powers of $p$. [[def-p-adic-integers-as-compatible-residue-classes]]

[A1] AC permits the sequence choices used below and is carried by [F1] and [F3]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Compare the cyclotomic and maximal-ideal topologies, prove closedness of finitely generated ideals by coefficientwise diagonal extraction, and apply base change for maximal minors.

1.1 Put $\mathfrak m=(p,T)$. The ideals $J_n$ decrease, since $p^{n+1}\in(p^n)$ and $\omega_n$ divides $\omega_{n+1}$ by the geometric-sum identity. Modulo $p$ the polynomial $\omega_n$ is $T^{p^n}$, so $T^{p^n}\in pR+(\omega_n)$. Taking its $n$th power gives $T^{np^n}\in J_n$. Thus $\mathfrak m^{n+np^n-1}\subseteq J_n$: every monomial of that total degree is divisible either by $p^n$ or by $T^{np^n}$. Consequently $A_n$ is a quotient of the finite ring $(\mathbb Z/p^n\mathbb Z)[T]/(T^{np^n})$. [given, algebra]

1.2 We prove that every finitely generated ideal $H=(h_1,\ldots,h_r)$ satisfies $H=\bigcap_d(H+\mathfrak m^d)$. The zero-generator case follows from $\bigcap_d\mathfrak m^d=0$, since membership in $\mathfrak m^d$ forces the coefficient of $T^j$, for $j<d$, to be divisible by $p^{d-j}$. For $r>0$ and $x\in\bigcap_d(H+\mathfrak m^d)$ choose $a_{i,d}\in R$ with $x-\sum_i h_i a_{i,d}\in\mathfrak m^d$. For each $k$, the ring $R/\mathfrak m^k$ is finite: its coefficient of $T^j$ for $0\le j<k$ is taken modulo $p^{k-j}$. Starting with all positive indices $d$, successively retain an infinite subset on which the tuple $(a_{1,d},\ldots,a_{r,d})$ is constant modulo $\mathfrak m^k$. Such a subset exists by the finite pigeonhole principle. Choose increasing indices $d_k$ in these nested subsets. For every fixed $k$, the residues modulo $\mathfrak m^k$ along this subsequence eventually agree. They are compatible as $k$ increases and hence specify series $a_i\in R$: each coefficient is a compatible $p$-adic integer by [F4]. Thus $a_{i,d_k}\to a_i$ in the $\mathfrak m$-adic topology. Multiplication and finite sums preserve this convergence because $\mathfrak m^k$ is an ideal. Taking limits of the approximating identities gives $x=\sum_i h_i a_i$, using $d_k\to\infty$ and $\bigcap_k\mathfrak m^k=0$. This proves the assertion. [F4, A1, given, construct, algebra]

2.1 Conversely fix $d\ge1$. For $1\le k<p^n$, the identity $k\binom{p^n}{k}=p^n\binom{p^n-1}{k-1}$ implies $v_p\binom{p^n}{k}\ge n-v_p(k)$. Choose $n$ so large that $p^n\ge d$, $n\ge d$, and $n-v_p(k)+k\ge d$ for every integer $1\le k<d$. The finitely many terms of $\omega_n$ of degree below $d$ then belong to $\mathfrak m^d$, and all other terms do as well by degree. Also $p^n\in\mathfrak m^d$, so $J_n\subseteq\mathfrak m^d$. Together with step 1.1 this proves the claimed neighborhood-basis assertion. [step 1.1, algebra]

3.1 The module $M$ has a finite presentation by [F1], so $F$ has finitely many maximal-minor generators. For any finitely generated ideal $H$, steps 2.1 and 1.2 give $\bigcap_n(H+J_n)=H$: an element of the intersection lies in $H+\mathfrak m^d$ for every $d$. In particular this applies to $F$ and $(g)$. By [F2], or directly by reducing a finite presentation matrix and its minors, $\operatorname{Fitt}_{0,A_n}(M/J_nM)=\pi_n(F)$. Its inverse image is $F+J_n$. Intersecting proves the recovery formula. [F1, F2, step 2.1, step 1.2, algebra]

4.1 If $\pi_n(g)\in\pi_n(F)$ for every $n$, then $g\in\bigcap_n(F+J_n)=F$. If $\pi_n(F)\subseteq\pi_n(g)A_n$ for every $n$, then $F\subseteq\bigcap_n((g)+J_n)=(g)$. Apply [F3] to these two conclusions. If both hypotheses hold, they give $F=(g)$ and the stated characteristic-ideal equality. No finite-level arithmetic identification, congruence theorem, or main-conjecture equality was used. [F3, step 3.1, algebra] ∎

## Source and application limits

The Stacks reference supplies the general base-change property, whose complete short proof was read. The specialized topology and closed-ideal arguments above are a local adaptation, not an attributed arithmetic theorem. The live Fitting-divisorial-hull supplier is reused with its AC hypothesis. This draft has no independent proof acceptance.

To use this criterion for Wiles's theorem one must still prove the arithmetic comparisons for the actual quotients $e_\eta Y_\infty/J_n(e_\eta Y_\infty)$ for every $n$. Replacing these by finite-layer class-field or Selmer modules requires a proved control map with the correct kernel and cokernel. Full Fitting equality is a sufficient, potentially stronger condition than the desired characteristic equality; this draft does not claim Wiles's method establishes that stronger condition.
