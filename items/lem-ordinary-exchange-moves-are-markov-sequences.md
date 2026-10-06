---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "ad3539d338b21f6655bd7437d21ae1138f8dcfa3620bcce6965fd4e39ce3b963"
id: lem-ordinary-exchange-moves-are-markov-sequences
kind: lemma
title: "Ordinary exchange moves are Markov sequences"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-braid-group-by-the-artin-presentation, def-markov-conjugation-and-stabilization-moves]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Traczyk, A new proof of Markov's braid theorem, Figure 11 and exchange-move discussion, printed pp. 418-419"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Birman and Brendle, Braids: A Survey, Remark 2.2, printed pp. 26-27"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $n\ge2$, $P,Q\in B_{n-1}$, placed on the first $n-1$ strands of $B_n$, and $t=\sigma_{n-1}$. The ordinary exchange
$$\beta=P t Q t^{-1}\quad\longmapsto\quad\beta'=P t^{-1}Q t$$
is realized by conjugations, one ordinary negative stabilization into $B_{n+1}$, and one ordinary negative destabilization back to $B_n$. It can also be realized with one positive stabilization and one positive destabilization. These are the ordinary moves of [[def-markov-conjugation-and-stabilization-moves]]; conjugations are counted separately. The boxes $P,Q$ are arbitrary on their specified strands.

## Facts & Assumptions

**Given:** $n\ge2$, $P,Q\in B_{n-1}$ and their specified strand placements.

[F1] The Artin relations are $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and far commutation for index difference greater than one ([[def-braid-group-by-the-artin-presentation]]).

[F2] Conjugations in a fixed braid group and $u\leftrightarrow u\sigma_k^{\pm1}$ between $B_k$ and $B_{k+1}$ are ordinary Markov moves ([[def-markov-conjugation-and-stabilization-moves]]).

## Proof

**Proof technique:** direct.

1.1 **Supports and mixed relations.** Append strand $n+1$ and write $s=\sigma_n$. Every letter of $P,Q$ has index at most $n-2$, so both boxes commute with $s$ and $s^{-1}$, including when $n=2$ and the boxes are trivial in $B_1$. From $sts=tst$ obtain $t^{-1}st=sts^{-1}$, hence $ts^{-1}t^{-1}s=t^2s^{-1}t^{-1}$. Also $st^{-1}s^{-1}=t^{-1}s^{-1}t$ by inversion and rearrangement of the same relation, and therefore $s^2t^{-1}s^{-1}=t^{-1}s^{-1}t^2$: indeed $s^2t^{-1}s^{-1}=st^{-1}s^{-1}t=t^{-1}s^{-1}t^2$, where the first equality follows from $st^{-1}s^{-1}=t^{-1}s^{-1}t$. These identities hold without moving either box across $t$. [F1, given, algebra]

2.1 **Stabilization and the first weaving.** Put $A=Pt^2$ and $B=t^{-1}Qt^{-1}$ in $B_n$. Then $BA=A^{-1}\beta A$. Conjugate $\beta$ to $BA$, negatively stabilize to $BA s^{-1}$, and conjugate by $B^{-1}$ to $A s^{-1}B$. The latter equals $E_1=Pt s^{-1}t^{-1}sQt^{-1}$ by step 1.1. Thus $E_1$ is reached by exactly one negative ordinary stabilization and conjugations. With Figure 11's ports numbered from outermost to innermost, the old innermost strand is $n$ and the added inner strand is $n+1$; the two boxes occupy the first $n-1$ old ports. The successive crossing letters of the right-hand weaving are $t,s^{-1},t^{-1},s$, followed after $Q$ by $t^{-1}$, giving precisely the chronological record $E_1$. For these ordinary strands the indicated full twist on a single added strand is $1$. [F1, F2, step 1.1, construct, algebra]

3.1 **The exchange calculation and the last weaving.** Define $E_5=Pt^{-1}Qst^{-1}s^{-1}t$. Its successive left-hand weaving letters read chronologically, with the same ports and cut, are $s,t^{-1},s^{-1},t$, after the initial $t^{-1}$ and $Q$. Since $P,Q$ commute with $s$, use step 1.1 to compute $sE_1s^{-1}=Pt^{-1}Q s^2t^{-1}s^{-1}=Pt^{-1}Qt^{-1}s^{-1}t^2=E_5$. This gives an explicit conjugation from the first weaving to the last; it proves the comparison without presuming any unverified intermediate diagram arrow. Conjugating $E_5$ by $t^2$ now gives $(t^2Pt^{-1}Qt^{-1})s^{-1}=(t^2\beta't^{-2})s^{-1}$. Its parenthesis belongs to $B_n$, so an ordinary negative right destabilization deletes $s^{-1}$; conjugating by $t^{-2}$ yields $\beta'$. No later Garside or Markov theorem is used. [F1, F2, step 1.1, step 2.1, algebra]

4.1 **Signs and endpoints.** Steps 2.1-3.1 use exactly one negative stabilization and one negative destabilization. The map $\sigma_i\mapsto\sigma_i^{-1}$ preserves both Artin relations and all strand placements, so it is an involutive automorphism. Apply the negative sequence to the mirrored boxes and then mirror every word and move: it gives a positive sequence from $\beta'$ to $\beta$. Reversing that sequence gives the asserted positive sequence from $\beta$ to $\beta'$. All groups and conjugators are explicit finite words, so the proof is choice-free. At $n=2$ the same formulas hold with $P=Q=1$; no $\sigma_0$ is used. [F1, F2, step 2.1, step 3.1, algebra] ∎

## Remarks

The source weaving labels above are chronological records. The geometric product runs its rightmost factor first, so its actual element is the reversed record. Word reversal preserves the Artin relations, carries conjugations to conjugations by the reversed inverse conjugator, and carries a right stabilization to a left one, which cyclic conjugation makes a right stabilization of the same sign. Thus it preserves ordinary Markov sequences. The abstract word equations and move sequence proved here remain exactly as displayed.

This proves the ordinary exchange on the displayed supports. Identifying a multiple-reduction ambiguity with a finite succession of these ordinary exchanges requires a separate strand-by-strand argument; cabling this calculation alone does not supply that argument.
