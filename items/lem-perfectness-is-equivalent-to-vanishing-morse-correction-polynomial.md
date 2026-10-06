---
id: lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial
kind: lemma
title: "Perfectness, vanishing correction, and vanishing handle boundaries"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-polynomial-identity, lem-exact-sequence-dimension-inequality, def-perfect-morse-function-over-a-field, prop-morse-handle-chain-complex-computes-singular-homology, thm-rank-nullity, def-rank-and-nullity, thm-dimension-of-a-linear-subspace, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: rank-comparison
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
dependency_level: 6
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold, let
$f:M\to\mathbb R$ be Morse, let $F$ be a field, let $Q$ be the correction
polynomial of the Morse polynomial identity and let $(C_\bullet,\partial_\bullet)$
be a handle chain complex of $(M,f,F)$. The following are equivalent:

(i) $f$ is $F$-perfect;

(ii) $Q=0$;

(iii) every handle boundary map vanishes, $\partial_k=0$ for all $k$
(equivalently $\dim_F\operatorname{im}\partial_{k+1}=0$ for all $k$).

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f$, a field $F$, the unique correction polynomial $Q(t)=\sum_kq_kt^k$ with $q_k\ge0$ of the identity $M_f=P_{M,F}+(1+t)Q$, and a handle chain complex $(C_\bullet,\partial_\bullet)$.

[F1] $M_f=P_{M,F}+(1+t)Q$ with $Q\in\mathbb Z[t]$ having nonnegative coefficients, and $Q$ is the unique such polynomial ([[thm-morse-polynomial-identity]]).

[F2] $f$ is $F$-perfect exactly when $m_k(f)=b_k(M;F)$ for all $k$, equivalently when $M_f=P_{M,F}$ ([[def-perfect-morse-function-over-a-field]]).

[F3] The handle chain complex has $\dim_FC_k=m_k(f)$, it is a chain complex with $\partial_{k-1}\partial_k=0$, and $H_k(C_\bullet)\cong H_k(M;F)$, so $\dim_FH_k(C_\bullet)=b_k(M;F)$; all these spaces are finite-dimensional ([[prop-morse-handle-chain-complex-computes-singular-homology]]).

[L1] For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_FV=\dim_F\ker T+\dim_F\operatorname{im}T$ ([[thm-rank-nullity]], [[def-rank-and-nullity]]).

[L2] The rank bookkeeping for a short exact sequence $0\to A\to B\to C\to0$ of finite-dimensional $F$-vector spaces gives $\dim_FB=\dim_FA+\dim_FC$: it is the one-term case of the alternating partial-sum identity with all other terms zero and injective first map ([[lem-exact-sequence-dimension-inequality]]).

[L3] A subspace of a finite-dimensional space is finite-dimensional ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** rank-comparison.

1.1 (i)$\Leftrightarrow$(ii): if $f$ is $F$-perfect, then $M_f=P_{M,F}$ by [F2], so $(1+t)Q=0$ and uniqueness in [F1] gives $Q=0$ (the zero polynomial is a solution). Conversely, if $Q=0$, then $M_f=P_{M,F}$ by [F1], and coefficient comparison gives $m_k(f)=b_k(M;F)$ for every $k$, which is perfectness by [F2]. [F1, F2, given]

1.2 (iii)$\Rightarrow$(i): if $\partial_k=0$ for every $k$, then $H_k(C_\bullet)=C_k$ and hence, by [F3], $m_k(f)=\dim_FC_k=\dim_FH_k(C_\bullet)=b_k(M;F)$ for every $k$; by [F2] the function $f$ is $F$-perfect. [F3, F2, given]

1.3 (i)$\Rightarrow$(iii): for every $k$, [L1] applied to $\partial_k:C_k\to C_{k-1}$ gives $$\dim_FC_k=\dim_F\ker\partial_k+\dim_F\operatorname{im}\partial_k,$$ and the same rank-nullity identity applied to the short exact sequence $0\to\operatorname{im}\partial_{k+1}\to\ker\partial_k\to H_k(C_\bullet)\to0$ (whose terms are finite-dimensional by [F3] and [L3]) gives, by [L2], $$\dim_F\ker\partial_k=\dim_F\operatorname{im}\partial_{k+1}+\dim_FH_k(C_\bullet).$$ Substituting and using [F3] yields $$m_k(f)-b_k(M;F)=\dim_F\operatorname{im}\partial_{k+1}+\dim_F\operatorname{im}\partial_k\ \ge0.$$ If $f$ is $F$-perfect, the left side vanishes for every $k$; both terms on the right are nonnegative dimensions, so both vanish for every $k$, that is $\operatorname{im}\partial_{k+1}=0$ and $\operatorname{im}\partial_k=0$ for all $k$, which is (iii). [F3, L1, L2, L3, given]

2.1 Steps 1.1, 1.2 and 1.3 give (i)$\Leftrightarrow$(ii) and (i)$\Leftrightarrow$(iii), so all three statements are equivalent. In particular perfectness over $F$ is exactly the vanishing of all handle boundaries over $F$; over the integers the corresponding boundary maps need not vanish, since a nonzero integral boundary coefficient can vanish after reduction modulo the characteristic of $F$. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Measure of the loss.** The identity of step 1.3 exhibits the defect $m_k-b_k$ as the total dimension of the two boundary maps meeting in degree $k$; this is the handle-side reading of the correction polynomial.
- **No identification with the Morse differential.** The vanishing is asserted for the handle boundary maps of the handle chain complex constructed on this page; the trajectory-count definition of the Morse differential and its comparison with these maps belong to the later Morse-homology page and are not used here.
