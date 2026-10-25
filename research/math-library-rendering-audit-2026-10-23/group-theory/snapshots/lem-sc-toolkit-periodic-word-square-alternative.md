---
id: lem-sc-toolkit-periodic-word-square-alternative
kind: lemma
title: "Periodic words: a relator root or Dehn-reduced powers"
status: published
origin: pipeline
deps: [def-sc-toolkit-cyclically-dehn-reduced-word, lem-sc-toolkit-periodic-relator-overlap-is-a-piece, def-sc-toolkit-symmetrised-relators-and-pieces]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), Lemma 4 and complete \u00a76 proof, printed pp.39,41\u201342; common-root exceptions retained locally"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Statement

Let $w$ be a nonempty cyclically Dehn-reduced word in a symmetrised $C'(1/6)$ presentation. At least one of the following holds:

- a cyclic rotation of $w$ and a defining relator are positive powers of a common nonempty word;
- every positive power of $w$ is Dehn-reduced;
- $w^2$ is conjugate in the presented group to a nonempty word $y$ whose every positive power is Dehn-reduced.

The relator set may be infinite.

## Facts & Assumptions

**Given:** The word $w$ in the statement, of positive length $L$. Equalities between strings below are literal unless expressly stated in the quotient group.

[F1] Cyclic Dehn reduction forbids a relator segment longer than half its relator in any rotation of $w$ ([[def-sc-toolkit-cyclically-dehn-reduced-word]]).

[F2] For a relator $x^m a$ with $m\ge2$, either $x^{m-1}$ is a piece, or $x$ and that relator have a common word root; the empty remainder case is included ([[lem-sc-toolkit-periodic-relator-overlap-is-a-piece]]).

[F3] Distinct symmetrised relators sharing a nonempty prefix make that prefix a piece, strictly shorter than one sixth of either relator under $C'(1/6)$ ([[def-sc-toolkit-symmetrised-relators-and-pieces]]).

## Proof

1.1 Assume the first alternative fails. Let $S$ be a segment longer than half a relator $R$ in a positive power of $w$. Rotate $w$ so that the start of $S$ is the start of a period $v$. If $|S|>2L$, write $S=v^k a$, with $k\ge2$ and $a$ a proper prefix of $v$. Write $R=v^k a T^{-1}$. By [F2], either $v,R$ have a common root (excluded), or $(k-1)L<|R|/6$. In the latter case $L\le(k-1)L<|R|/6$ and $|a|<L$, so $|S|=(k-1)L+L+|a|<|R|/2$, a contradiction. Thus every such segment is contained in the square of a rotation. If none exists, every power is freely reduced (since $w$ is cyclically reduced) and Dehn-reduced, the second alternative. [given, F1, F2, F3]

2.1 Otherwise choose such an $S$ of greatest length among all rotations and relators. This maximum exists because $1\le|S|\le2L$; an infinite set of relators creates no problem for this finite set of lengths. By [F1], $|S|>L$. Consequently $S=pqp$, $v=pq$, where $p\ne\varnothing$, $q$ is possibly empty and $|p|\le L$. Rotate $R$ to write $R=pqp t^{-1}$. Since the length-$L$ initial segment $v$ is Dehn-reduced, $L\le|R|/2$, while $|pqp|>|R|/2$ gives $|t|<|R|/2$. [step 1.1, F1]

3.1 If $q$ is empty, $R=v^2t^{-1}$; [F2] either gives the excluded common root or $L<|R|/6$, contradicting $2L=|S|>|R|/2$. Thus $q$ is nonempty. Also $t$ is nonempty: otherwise $2(|p|+|q|)\le|R|=2|p|+|q|$ forces $|q|=0$. The joins $pq$ and $qp$ are reduced because $v$ is cyclically reduced. The joins $qt$ and $tq$ are reduced as well. Indeed cancellation in $qt$ would make the last letter of $q$ the last letter of $t^{-1}$, extending the match $pqp$ one letter to the left around the periodic word; cancellation in $tq$ extends it one letter to the right. Since $t\ne\varnothing$, either extension is still a segment of $R$ and is longer than half $R$. Step 1.1 then bounds its length by $2L$, contradicting maximality of $S$. [step 1.1, step 2.1, F2]

4.1 Compare $R=pqp t^{-1}$ with its rotation $p t^{-1}p q$, based at the second copy of $p$. Equality would, after cancelling its first $p$, give $qpt^{-1}=t^{-1}pq$, whose first letters force cancellation in $tq$ (both $q,t$ are nonempty). Hence these rotations are distinct and their common prefix $p$ is a piece. Therefore $|p|<|R|/6$. Put $P=|p|$, $Q=|q|$, $T=|t|$, $N=|R|=2P+Q+T$. The inequalities $T<N/2$ and $P<N/6$ give $Q=N-2P-T>N/6$. The bound $P+Q\le N/2$ gives $T=N-2P-Q\ge N/2-P>N/3$, in particular $T>N/6$. Also $Q\le L\le N/2$. [step 2.1, step 3.1, F3, algebra]

5.1 Set $y=tq$. It is nonempty and cyclically reduced by step 3.1. In the quotient, $pqp=t$, hence $v^2=pqpq=tq=y$. Since $v$ is a cyclic rotation of $w$, this makes $y$ conjugate to $w^2$. To prove all powers of $y$ Dehn-reduced, suppose a segment $U$ in some $y^n$ is longer than half a relator $R^*$. Regard $y^n$ as part of the bi-infinite alternating string of nonempty blocks $t,q$. Whenever two cyclically read relators share a segment at least one sixth of either relator, they must be identical when based at that segment; otherwise this is a forbidden piece by [F3]. This observation permits comparisons both before and after the matched segment, because equal based relators are equal cyclic strings. [step 3.1, step 4.1, F3]

6.1 If $U$ contains a whole $t$ block, compare $R^*$ based there with $R^{-1}$ based at $t$, which reads $t p^{-1}q^{-1}p^{-1}$. Since $|t|>N/6$, these based relators must agree. If $U$ continues past $t$, its next letter is the first of $q$, whereas the relator prescribes the first of $p^{-1}$; equality contradicts reducedness of $pq$. If $U$ begins before $t$, the preceding letter is the last of $q$, whereas the relator prescribes the last of $p^{-1}$; equality contradicts reducedness of $qp$. If neither occurs, $U=t$ and $|U|=T<N/2=|R^*|/2$, again impossible. [step 3.1, step 4.1, step 5.1]

6.2 If $U$ contains a whole $q$ block, compare $R^*$ there with $R$ based at $q$, namely $q p t^{-1}p$. The bound $|q|>N/6$ forces equality. An extension after $q$ equates the first letters of $t$ and $p$, contradicting the cyclically reduced join $t^{-1}p$ in $R$. An extension before $q$ equates the last letters of $t$ and $p$, contradicting the reduced join $pt^{-1}$ in $R$. With no extension, $U=q$ has length at most $N/2$, impossible. [step 4.1, step 5.1]

6.3 Suppose $U$ lies inside a single $t$ or $q$ block. Its length exceeds $|R^*|/2$, so comparison with that occurrence in $R^{-1}$ or $R$ forces equality of the based relators. Then $|R^*|=N$, whereas both block lengths are at most $N/2$, a contradiction. This includes a segment touching either endpoint of just one block. [step 4.1, step 5.1]

6.4 Otherwise $U$ contains no whole block and crosses one join. For a $tq$ join write $U=t_s q_p$ with nonempty proper suffix $t_s$ of $t$ and nonempty proper prefix $q_p$ of $q$. At least one part has length greater than $|R^*|/4$, hence greater than $|R^*|/6$. If it is $t_s$, comparison with its occurrence in $R^{-1}$ forces equal cyclic relators; their next letters are respectively the first of $q$ and the first of $p^{-1}$, contrary to reducedness of $pq$. If it is $q_p$, comparison with $R$ forces equality; immediately preceding $q$ the letters would be the last of $t$ and the last of $p$, contrary to reducedness of $pt^{-1}$. [step 3.1, step 5.1]

7.1 At a $qt$ join write $U=q_s t_p$. If the suffix $q_s$ exceeds $|R^*|/4$, align it with $R$; the following letters would equate the first of $t$ and the first of $p$, contrary to reducedness of $t^{-1}p$. If the prefix $t_p$ exceeds $|R^*|/4$, align it with $R^{-1}$; the preceding letters would equate the last of $q$ and the last of $p^{-1}$, contrary to reducedness of $qp$. At least one inequality holds because $|U|>|R^*|/2$. These are all possibilities: crossing two joins would include a whole intervening block, already excluded. Thus no $y^n$ contains such $U$, proving the third alternative. Combined with step 1.1 and step 2.1 and step 3.1, this proves the asserted alternative without using any infinite-order hypothesis or finiteness of $R$. [step 3.1, step 5.1, step 6.1, step 6.2, step 6.3, step 6.4] ∎
