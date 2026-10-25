---
id: lem-band-exchanges-decompose-into-ordinary-markov-moves
kind: lemma
title: "Band exchanges decompose into ordinary Markov moves"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-block-interchanges-transport-arbitrary-braid-boxes,
       lem-compensated-band-kinks-decompose-into-ordinary-markov-moves,
       lem-ordinary-exchange-moves-are-markov-sequences,
       thm-the-artin-representation-is-faithful,
       def-artin-automorphisms-of-the-free-group,
       def-the-artin-representation-on-a-free-group,
       def-braid-group-by-the-artin-presentation,
       def-markov-conjugation-and-stabilization-moves, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-17.md; immutable carrier: research/frontier-38-owner-30-step5-hash-17-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-17 dispatch"
sources:
  references:
    - title: "Traczyk, A new proof of Markov's braid theorem, Figures 10-11 and band convention, printed pp. 417-419"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Birman and Brendle, Braids: A Survey, Remark 2.2 and Figure 13, printed pp. 26-27"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Assume AC. Let $c,p,q\ge0$, $P\in B_{c+p}$ and $Q\in B_{c+q}$, each placed on the first indicated strands. Put $n=c+p+q$, and place $t=Q_{p,q}$ and $u=Q_{q,p}$ after the first $c$ strands, with the block-interchange conventions of [[lem-block-interchanges-transport-arbitrary-braid-boxes]]. Then the typed band exchange
$$\beta=P t Q t^{-1}\quad\longmapsto\quad\beta'=P u^{-1} Q u$$
is a finite sequence of ordinary Markov moves. If $p,q>0$, put $m=\max(p,q)$ and $\delta=|p-q|$. One explicit sequence uses $\delta$ positive stabilizations and $\delta$ positive destabilizations, together with $m$ negative stabilizations and $m$ negative destabilizations; conjugations are counted separately. If $p=0$ or $q=0$, the endpoints coincide and no move is needed. The boxes $P,Q$ are arbitrary on their supports and may mix the core strands with the relevant band.

## Facts & Assumptions

**Given:** AC, the nonnegative widths $c,p,q$ and arbitrary boxes on the stated strand placements.

[F1] The Artin braid relation and far commutation define these braid groups, with $B_0,B_1$ trivial ([[def-braid-group-by-the-artin-presentation]]).

[F2] A compensated packet $Q_{m,m}T_m^{-1}$, $T_m=(\sigma_1\cdots\sigma_{m-1})^m$, with arbitrary surrounding braid has a sequence of $m$ positive ordinary destabilizations; its mirror has $m$ negative destabilizations, and reversing gives stabilizations ([[lem-compensated-band-kinks-decompose-into-ordinary-markov-moves]]).

[F3] Whole-block interchanges transport arbitrary boxes, including full twists, through the positive and negative uniform crossing, with the prescribed changed strand placements ([[lem-block-interchanges-transport-arbitrary-braid-boxes]]).

[F4] Under AC the frozen Artin representation is faithful; its positive generator sends $x_i$ to $x_i x_{i+1}x_i^{-1}$ and $x_{i+1}$ to $x_i$, and $\rho(vw)=\rho(v)\circ\rho(w)$ ([[thm-the-artin-representation-is-faithful]], [[def-artin-automorphisms-of-the-free-group]], [[def-the-artin-representation-on-a-free-group]]).

[F5] For single-strand exchanged bands, ordinary exchange with arbitrary boxes on the first $n-1$ strands has one negative stabilization and one negative destabilization ([[lem-ordinary-exchange-moves-are-markov-sequences]]).

[F6] Conjugations and $v\leftrightarrow v\sigma_k^{\pm1}$ between $B_k$ and $B_{k+1}$ are ordinary Markov moves ([[def-markov-conjugation-and-stabilization-moves]]).

## Proof

**Proof technique:** direct.

1.1 **Empty bands and conventions.** If $p=0$ or $q=0$, both interchanges are $1$ by [F3], and both displayed endpoints are literally $PQ$ in the same group; no padding of a nonexistent band is attempted. Assume henceforth $p,q>0$. All products below are braid-group products with the action convention in [F4]. Core strands are fixed by the local words, whose indices are shifted by $c$. Descending and ascending products of length zero are $1$. [F1, F3, given]

1.2 **The equal-width braid relation.** First suppose $p=q=m$. In $B_{c+3m}$ put $t=Q_{m,m}$ on blocks 1,2 and $s=Q_{m,m}$ on blocks 2,3. Let their free generators be $x_j,y_j,z_j$, $1\le j\le m$, and write $a=x_1\cdots x_m$, $b=y_1\cdots y_m$. The rectangular row induction from the packet proof gives $\rho(t)(x_j)=a y_j a^{-1}$, $\rho(t)(y_j)=x_j$ and fixes $z_j$; for $s$ it gives $\rho(s)(y_j)=b z_j b^{-1}$, $\rho(s)(z_j)=y_j$ and fixes $x_j$. To recall that induction explicitly, for $Q_{m,k}$ on $m+k$ strands put $a=x_1\cdots x_m$; its images are $a x_{m+i}a^{-1}$ for $1\le i\le k$ and $x_j$ for the input generator $x_{k+j}$, $1\le j\le m$. At $k=0$ this is identity. Adjoin a fixed generator and multiply by the next descending row: that row sends $x_{k+1}$ to $(x_{k+1}\cdots x_{k+m})x_{k+m+1}(x_{k+1}\cdots x_{k+m})^{-1}$ and $x_{k+1+j}$ to $x_{k+j}$ for $1\le j\le m$; the previous substitution sends the parenthesized product to $a$. This proves the induction and the displayed equal-block formulas at $k=m$. Now both $tst$ and $sts$ send $x_j$ to $ab z_j b^{-1}a^{-1}$, $y_j$ to $a y_j a^{-1}$ and $z_j$ to $x_j$; they fix the core generators. For example $t(a)=aba^{-1}$ and $t(b)=a$, giving the first image in $tst$; the other substitutions follow directly. Faithfulness in [F4] proves $tst=sts$ for every $m\ge1$, including $m=1$. [F2, F4, algebra]

1.3 **Padding one strand is an ordinary stabilization.** Suppose $p<q$, and allow either crossing sign: set $v_+=Q_{p,q}$ or $v_-=Q_{q,p}^{-1}$, shifted by $c$. At the cyclic cut after the crossing, $P v_\epsilon Q v_\epsilon^{-1}$ is conjugate to $Q v_\epsilon^{-1}P v_\epsilon$. Add one strand after the $p$-band, set $P^+=P\sigma_{c+p}$ and replace the crossing by $v_+^+=Q_{p+1,q}$ or $v_-^+=Q_{q,p+1}^{-1}$. Then $v_\epsilon^+=R_\epsilon v_\epsilon$, where $R_+=\sigma_{c+p+1}\cdots\sigma_{c+p+q}$ and $R_-=\sigma_{c+p+1}^{-1}\cdots\sigma_{c+p+q}^{-1}$. For the positive word, interleave the $j$th letter of $R_+$ before the $j$th row of $Q_{p,q}$: it commutes past every earlier old-row letter, whose maximum index is $c+p+j-2$, at distance at least two. This makes precisely the rows of $Q_{p+1,q}$. For the negative word, split the last descending row of $Q_{q,p+1}$ and invert; its inverse is exactly $R_-$. The largest index in $P$ is $c+p-1$, so $P$ commutes with either $R_\epsilon$. Whole-block naturality [F3] gives $\sigma_{c+p}v_\epsilon^+=v_\epsilon^+\sigma_n$, because this generator acts within the enlarged first block of width $p+1$. Consequently $Q(v_\epsilon^+)^{-1}P^+v_\epsilon^+=Qv_\epsilon^{-1}Pv_\epsilon\sigma_n$. The left is the padded braid at its cyclic cut, and the right is exactly one positive ordinary stabilization of the original braid at its cyclic cut. The box $Q$ remains on the first $c+q$ old strands. Thus padding changes no component by a tensor identity; it is an actual Markov stabilization with explicit word equality. [F1, F3, F6, algebra]

2.1 **A compensated equal-width exchange.** For $m=1$, [F5] supplies the sequence directly, with the trivial full twist $T_1=1$. The following calculation covers $m\ge2$. Write $z_i$ for the positive full twist $T_m$ on block $i$, $i=1,2,3$. The boxes $P,Q\in B_{c+m}$ commute with $s$, since their largest generator is $c+m-1$ and the smallest generator of $s$ is $c+m+1$. They also commute with $z_2,z_3$. By [F3], $s z_3=z_2s$ and $t^2z_2=z_2t^2$; these transport twists on entire blocks and do not pass a partial twist through a box. Put $A=Pt^2$, $B=t^{-1}Qt^{-1}$ and $X=t^2\beta't^{-2}$. Then $BA=A^{-1}\beta A$. Rearranging $sts=tst$ from step 1.2 gives $t^{-1}st=sts^{-1}$ and $st^{-1}s^{-1}=t^{-1}s^{-1}t$; consequently $ts^{-1}t^{-1}s=t^2s^{-1}t^{-1}$ and $s^2t^{-1}s^{-1}=t^{-1}s^{-1}t^2$. These identities and the box commutations give $E_1=A s^{-1}B=Pt s^{-1}t^{-1}sQt^{-1}$ and $t^2sE_1s^{-1}t^{-2}=X s^{-1}$; explicitly $sE_1s^{-1}=Pt^{-1}Qt^{-1}s^{-1}t^2$ using $ts^{-1}t^{-1}s=t^2s^{-1}t^{-1}$ and $s^2t^{-1}s^{-1}=t^{-1}s^{-1}t^2$. Conjugate $\beta$ to $BA$ and apply the reverse mirrored packet of [F2], producing $BA s^{-1}z_2=BA z_3s^{-1}$ by $m$ negative ordinary stabilizations. Conjugate by $B^{-1}$ to $A z_3s^{-1}B$. Since $A$ is an old-strand braid, it commutes with $z_3$. Conjugation by $t^2s$ therefore yields $z_2 Xs^{-1}$: move $z_3$ left past $A$, use $s z_3=z_2s$ and $t^2z_2=z_2t^2$, and use the untwisted equality above. Conjugate next by $z_2^{-1}$ to $X s^{-1}z_2$, exactly a mirrored compensated packet with arbitrary surrounding braid $X$. Its $m$ negative ordinary destabilizations give $X$, and conjugation by $t^{-2}$ gives $\beta'$. This completes the equal-width exchange with every box retained. Reversing this sequence gives the reverse exchange with the same numbers and signs. [F2, F3, F5, F6, step 1.2, algebra]

3.1 **Unequal widths and move counts.** For $0<p<q$, repeat step 1.3 exactly $\delta=q-p$ times. At stage $j$, the enlarged box lies in $B_{c+p+j}$, the other box stays in $B_{c+q}$, and the ordinary added generator is $\sigma_{c+p+j+q}$; hence every use satisfies the same support inequalities. The two padded endpoints have equal band width $m=q$. Step 2.1 relates them with $m$ negative stabilizations and $m$ negative destabilizations; apply step 1.3 backwards for the negative-crossing endpoint to remove the $\delta$ positive kinks. For $p>q>0$, cyclically start with $Q$ instead: the first endpoint becomes $Q t^{-1}P t$ on block order $(q,p)$, and the second becomes $Q u P u^{-1}$. These are respectively the negative and positive endpoints with the smaller first band $q$; pad that first band by step 1.3 and use the reverse of step 2.1 before removing the padding. For $p=q$ no padding is needed. Thus for every positive pair of widths the stated $\delta$ positive and $m$ negative stabilizations and matching destabilizations suffice, with conjugations accounted separately. Zero widths were settled in step 1.1, so all permitted cases are covered. AC is used only through the faithful-action and packet suppliers; no Markov closure-equivalence theorem is invoked. [F2, F4, F6, step 1.1, step 2.1, step 1.3, construct] ∎

## Remarks

This is an abstract typed band-exchange calculation. The algebraic support convention places the first box on core plus $p$ strands. In actual geometric time, $Q_{p,q}$ and $Q_{q,p}^{-1}$ take input blocks $(q,p)$ to output blocks $(p,q)$, positively and negatively respectively; their chronological records are their word reversals. Thus geometric input/output labels must be distinguished from algebraic word order. Applying it to a reducing-move ambiguity still requires identification of the source ports, boxes and frames with these two endpoints.
