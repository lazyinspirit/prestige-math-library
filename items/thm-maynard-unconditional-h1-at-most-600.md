---
dependency_level: 7
id: thm-maynard-unconditional-h1-at-most-600
kind: theorem
title: "Maynard’s unconditional bound H_1 ≤ 600"
status: draft
origin: pipeline
deps: [thm-maynard-multidimensional-sieve-dhl-criterion, thm-maynard-admissible-105-tuple-diameter-600, thm-maynard-variational-lower-bound-m105, def-liminf-consecutive-prime-gap-hm, def-maynard-variational-quantity-mk, thm-choice-free-bombieri-vinogradov-and-prime-level]
justified_by: []
proof_strategy: direct
axiom_use: "The unqualified endpoint/level route and accepted finite tuple/variational/criterion proofs add no choice assumption; the older qualified route is historical, not an active premise."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Statement

Unconditionally, $H_1\le600$; equivalently, infinitely many consecutive prime pairs have gap at most $600$.


## Statement references

[[def-liminf-consecutive-prime-gap-hm|Definition of H_1]]

[[thm-maynard-multidimensional-sieve-dhl-criterion|Maynard criterion]]

[[thm-maynard-admissible-105-tuple-diameter-600|Diameter-600 admissible tuple]]


## Facts & Assumptions

**Given:** The positive-prime gap constant $H_1$ and the original unconditional Statement.

[F1] [[thm-maynard-variational-lower-bound-m105]] gives $M_{105}>4$ without a choice hypothesis; its proof is the accepted exact rational polynomial certificate.

[F2] [[def-maynard-variational-quantity-mk]] defines $M_k$ as a supremum in $[0,+\infty]$ of the finite Riemann ratios, over a nonempty class.

[F3] [[thm-choice-free-bombieri-vinogradov-and-prime-level]] supplies every fixed prime level $0<\theta<1/2$ without a choice hypothesis, at full von Mangoldt endpoints.

[F4] [[thm-maynard-admissible-105-tuple-diameter-600]] supplies an admissible ordered $105$-tuple of integer shifts with diameter $600$.

[F5] [[thm-maynard-multidimensional-sieve-dhl-criterion]] states and proves the unqualified abstract implication: at a given level $\theta>0$, any admissible $k$-tuple with $M_k>2m/\theta$ has infinitely many translates containing at least $m+1$ primes and gives $H_m$ at most its diameter.

[F6] [[def-liminf-consecutive-prime-gap-hm]] defines $H_1=\sup_N\inf_{r\ge N}(p_{r+1}-p_r)$ for the increasing positive-prime enumeration.

## Proof

1.1 By [F1] choose one finite real $c$ with $4<c<M_{105}$. Such a $c$ exists in the extended supremum convention of [F2]: if the supremum is finite take the midpoint of $4$ and it, and if infinite take $c=5$. Put $\theta=(2/c+1/2)/2$. Since $c>4$, $0<2/c<\theta<1/2$ and $2/\theta<c<M_{105}$. This is one explicit parameter choice, not a sequence choice. [F1, F2, given, construct, algebra]

2.1 Apply [F3] at this fixed $\theta$. With $k=105$, $m=1$ and the tuple in [F4], every hypothesis of [F5] now holds: $105\ge2$, $1\ge1$, the tuple is admissible, the level is given without extra axioms, and step 1.1 gives $M_{105}>2/\theta$. Therefore [F5] gives infinitely many positive translates containing at least two primes and $H_1\le600$. No old choice-qualified distribution theorem is an active premise. [F3, F4, F5, step 1.1, algebra]

3.1 To verify the equivalent consecutive-prime formulation, suppose there were only finitely many indices $r$ with $p_{r+1}-p_r\le600$. Choose $N=1$ if that finite set is empty, and otherwise choose an index larger than its maximum. Every integer gap at an index $r\ge N$ would then be at least $601$, making the tail infimum and hence $H_1$ in [F6] at least $601$, contradicting step 2.1. Conversely infinitely many indices with gap at most $600$ make every tail infimum at most $600$, hence its supremum at most $600$. Thus the unchanged Statement, including its unconditional scope and equivalence, is proved. No simultaneous choice of prime pairs is used. [F6, step 2.1, algebra] ∎

## Source notes

The former local route invoked the separately retained Bombieri–Vinogradov theorem and its endpoint-to-level corollary under the Axiom of Choice, Countable Choice and Dependent Choice. Those accepted Statements, proofs, full endpoint conventions and histories remain unchanged. That historical branch was insufficient by itself to supply the displayed unqualified Statement.

The present proof instead uses the separately reconstructed unqualified Möbius-to-SW-to-BV route. Its principal normalization uses only the unqualified right-half-plane residue-one zeta provider, and its finite BV deduction retains the accepted primitive first-moment weight and logarithm budget. The finite tuple and $M_{105}$ certificates and full abstract sieve criterion are used at their already accepted interfaces. No enlarged-simplex, $M_{50}$, GEH numerical, 60-cell or growing-parameter large-gap theorem is concluded here.
