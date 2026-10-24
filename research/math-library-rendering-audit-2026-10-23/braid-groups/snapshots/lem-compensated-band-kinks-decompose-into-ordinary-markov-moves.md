---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item read and recorded Step 7 mathematical repair review, including the used supplier interfaces; current mathematical content matches the bound evidence. The repair review is local and does not claim an independent audit of the repair."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-17.md
      - research/frontier-38-owner-30-dispatch/reader-reader-17.result.json
      - research/frontier-38-owner-30-step5-hash-17-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-17-5a-decisions.json
      - research/frontier-38-owner-30-step7-v2/step7-v2-gate-r1-u1.json
      - research/frontier-38-owner-30-dispatch/alpha-repair-step7-v2-gate-r1-u1.result.json
id: lem-compensated-band-kinks-decompose-into-ordinary-markov-moves
kind: lemma
title: "Compensated band kinks decompose into ordinary Markov moves"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-block-interchanges-transport-arbitrary-braid-boxes,
       thm-the-artin-representation-is-faithful,
       def-the-artin-representation-on-a-free-group,
       def-artin-automorphisms-of-the-free-group,
       def-braid-group-by-the-artin-presentation,
       def-markov-conjugation-and-stabilization-moves, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Traczyk, A new proof of Markov's braid theorem, Figure 10 and the multiple Markov move exercise, printed pp. 418-419"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (the faithful Artin action)"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Assume AC. Let $n\ge m\ge0$ and $\alpha\in B_n$. Set $W_0=1$; for $m\ge1$ put
$$C_m=Q_{m,m},\qquad T_m=(\sigma_1\cdots\sigma_{m-1})^m,\qquad W_m=C_mT_m^{-1},$$
using the block interchange of [[lem-block-interchanges-transport-arbitrary-braid-boxes]].
Place $W_m$ on the last $m$ original strands and $m$ newly appended strands:
write $\iota_k(\sigma_i)=\sigma_{k+i}$ for a consecutive strand placement and
put $k=n-m$. Then
$$\alpha\,\iota_k(W_m)\in B_{n+m}$$
is related to $\alpha\in B_n$ by conjugations and exactly $m$ positive ordinary
destabilizations of [[def-markov-conjugation-and-stabilization-moves]], decreasing
the strand number from $n+m$ to $n$. Replacing every generator of $W_m$ by its
inverse gives the analogous packet with $m$ negative destabilizations. Reversing
these sequences gives the corresponding $m$ stabilizations.
The surrounding braid $\alpha$ is arbitrary and may mix the selected original
strands with every other original strand.


There is also a packet with the compensation in the reverse word order: set
$V_0=1$ and, for $m\ge1$,
$$V_m=T_m Q_{m,m}^{-1}=Q_{m,m}^{-1}(1_m\otimes T_m).$$
The first $T_m$ is on the selected original strands, and the last is on the new
strands. For arbitrary $\alpha$ as above, $\alpha\iota_k(V_m)$ is related to
$\alpha$ by conjugations and exactly $m$ negative ordinary destabilizations;
its generator mirror has $m$ positive destabilizations. Reversing these
sequences gives the corresponding stabilizations. Thus the original packet
claims and these reverse-order packet claims hold with the same arbitrary-box
hypothesis.

## Facts & Assumptions

**Given:** AC, $n\ge m\ge0$, $\alpha\in B_n$, and the specified word and strand-placement conventions. For $m\ge1$ define
$$A_m=Q_{m,m-1},\qquad B_m=\sigma_{2m-2}\cdots\sigma_m,\qquad h_m=\sigma_{m-1}\cdots\sigma_1,\qquad g_m=B_mT_m^{-1}h_m.$$
Empty rows and products are $1$. All the latter words lie in $B_{2m-1}$, except $T_m,h_m$, which already lie on the first $m$ strands. Products are concatenations; the Artin action satisfies $\rho(uv)=\rho(u)\circ\rho(v)$. In substitution calculations, $u(x)$ abbreviates $\rho(u)(x)$.

[F1] Under AC the Artin representation is faithful ([[thm-the-artin-representation-is-faithful]]).

[F2] The representation of [[def-the-artin-representation-on-a-free-group]] uses $\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1}$, $\rho(\sigma_i)(x_{i+1})=x_i$ and fixes the remaining free generators ([[def-artin-automorphisms-of-the-free-group]]).

[F3] Conjugation in a fixed $B_r$ and the deletion of a final $\sigma_{r-1}^{\pm1}$ from a word on the first $r-1$ strands followed by that generator are ordinary Markov moves ([[def-markov-conjugation-and-stabilization-moves]]).

[F4] $Q_{p,q}$ is the increasing product of its descending rows; strand placements preserve the Artin relations and are homomorphisms, and the whole-block transport identities hold ([[lem-block-interchanges-transport-arbitrary-braid-boxes]], [[def-braid-group-by-the-artin-presentation]]).

## Proof

**Proof technique:** direct.

1.1 **Empty and single-strand packets.** For $m=0$, $W_0=1$ and no move is needed, including when $n=0$. For $m=1$, $C_1=\sigma_1$, $T_1=1$ and $\alpha\iota_{n-1}(W_1)=\alpha\sigma_n$; one positive destabilization gives $\alpha$. Here $n\ge1$, so no nonexistent $\sigma_0$ is used. Henceforth $m\ge2$. [F3, F4, given]

1.2 **The substitutions needed for the packet identity.** Work first in $B_{2m-1}$. Put $r=m-1$, $a=x_1\cdots x_r$, $t=x_m$, $y_j=x_{m+j}$ for $1\le j\le r$, $w=y_1\cdots y_r$, and $P=at$. For $0\le q\le m$, temporarily use the free group on $m+q$ generators for $Q_{m,q}$; its substitution sends $x_i$ to $P x_{m+i}P^{-1}$ for $i\le q$, sends $x_{q+j}$ to $x_j$ for $j\le m$, and fixes higher generators. Prove this by induction on $q$, beginning with the empty word and adjoining one fixed free generator at each rank increase. The next descending row on indices $q+1,\ldots,m+q+1$ sends $x_{q+1}$ to $Lx_{m+q+1}L^{-1}$, $L=x_{q+1}\cdots x_{m+q}$, and sends $x_{q+1+j}$ to $x_{q+j}$ for $j\le m$. The preceding $Q_{m,q}$ sends $L$ to $P$ by induction and fixes $x_{m+q+1}$; it retains the previously established images of the first $q$ generators. This proves the formula at $q+1$. Specializing back to the ambient $F_{2m-1}$ at $q=r$ gives $A_m(x_j)=Py_jP^{-1}$ for $j\le r$ and $A_m(x_{r+j})=x_j$ for $j\le m$. The descending word $h_m$ sends $x_1$ to $ata^{-1}$ and $x_j$ to $x_{j-1}$ for $2\le j\le m$; it fixes the $y_j$. Finally $T_m$ conjugates all $x_1,\ldots,x_m$ by $P$ and fixes the $y_j$. To check the last formula, $\delta=\sigma_1\cdots\sigma_{m-1}$ sends $x_j$ to $x_1x_{j+1}x_1^{-1}$ for $j<m$ and $x_m$ to $x_1$. Put $P_\ell=x_1\cdots x_\ell$. For $0\le\ell\le m$, induction gives $\delta^\ell(x_j)=P_\ell x_{1+((j+\ell-1)\bmod m)}P_\ell^{-1}$. Indeed $\delta(P_\ell)=P_{\ell+1}x_1^{-1}$ when $\ell<m$, and $\delta(x_k)=x_1x_{1+(k\bmod m)}x_1^{-1}$, including $k=m$; the two $x_1$ factors cancel in the conjugation. At $\ell=m$ the image is $Px_jP^{-1}$. All statements concern the frozen homomorphism convention of [F2]. [F2, F4, construct]

2.1 **A general braid identity.** We prove $A_mB_mT_m^{-1}=h_m\iota_1(W_r)h_m^{-1}$. Let $K=\rho(A_mB_m)$. The descending $B_m$ sends $t$ to $t(y_1\cdots y_{r-1})y_r(y_1\cdots y_{r-1})^{-1}t^{-1}$ and $y_j$ to $x_{m+j-1}$. Step 1.2 consequently gives $K(x_j)=Py_jP^{-1}$ for $j\le r$, $K(t)=ata^{-1}$, $K(y_j)=x_j$, and $K(P)=Pwa^{-1}$. Applying $T_m^{-1}$ first therefore gives $\rho(A_mB_mT_m^{-1})(x_j)=aw^{-1}y_jwa^{-1}$, $\rho(A_mB_mT_m^{-1})(t)=aw^{-1}twa^{-1}$ and $\rho(A_mB_mT_m^{-1})(y_j)=x_j$. To calculate the other side, put $v=x_2\cdots x_m$. The shifted $W_r$ fixes $x_1$, sends $x_{j+1}$ to $vw^{-1}y_jwv^{-1}$ and sends $y_j$ to $x_{j+1}$; these are the equal-block version of the row and full-twist substitutions in step 1.2. Also $h_m^{-1}(x_j)=x_{j+1}$ for $j\le r$, $h_m^{-1}(t)=v^{-1}x_1v$, $h_m(v)=a$ and $h_m(x_1)=ata^{-1}$. Substitution now gives exactly the same three displayed images on all $2m-1$ generators. By [F1] the two braid words are equal. [F1, F2, step 1.2, algebra]

3.1 **One destabilization with an arbitrary surrounding braid.** In $B_{n+m}$ shift the local words by $k=n-m$, suppressing this shift in the calculation. Since $C_m=A_m\sigma_{2m-1}B_m$, cyclically conjugating $\alpha A_m\sigma_{n+m-1}B_mT_m^{-1}$ past its initial segment $\alpha A_m\sigma_{n+m-1}$ gives $(B_mT_m^{-1}\alpha A_m)\sigma_{n+m-1}$. The parenthesized word $R$ uses only indices at most $n+m-2$: the surrounding $\alpha$ uses at most $n-1$, and the local $A_m,B_m,T_m$ have at most $n+m-2$. Thus [F3] deletes its final generator and gives $R\in B_{n+m-1}$. Conjugate this whole word by $g_m^{-1}$. Direct cancellation, without commuting any factor through $\alpha$, gives $g_m^{-1}Rg_m=h_m^{-1}\alpha(A_mB_mT_m^{-1})h_m=(h_m^{-1}\alpha h_m)\iota_1(W_{m-1})$ by step 2.1. Restoring shifts, the new surrounding braid $\alpha_1=h_m^{-1}\alpha h_m$ lies in the original $B_n$, because $h_m$ uses only its last $m$ strands. The remaining packet occupies the last $m-1$ original strands and $m-1$ new strands. This is the required one-step reduction of packet width. [F3, F4, step 2.1, construct, algebra]

4.1 **Induction, signs and conjugation bookkeeping.** Repeat step 3.1 with packet widths $m,m-1,\ldots,2$, then use step 1.1 at width one. At every stage the surrounding braid is an arbitrary element of the same original $B_n$, conjugated by a word supported on its selected original strands; the active packet width and the number of new strands both decrease by one. The result has exactly $n$ strands after exactly $m$ positive destabilizations. The resulting original braid is $H^{-1}\alpha H$, where $H$ is the ordered product in $B_n$ of the shifted $h_j$ used in those stages; one final conjugation gives $\alpha$. The generator-inversion map $\sigma_i\mapsto\sigma_i^{-1}$ preserves both Artin relations, hence is an involutive automorphism compatible with all strand placements. Apply it to the entire sequence for the surrounding braid obtained by applying that same automorphism to $\alpha$. This gives the mirrored packet with exactly $m$ negative destabilizations and endpoint $\alpha$. Its compensation is the opposite full twist: the $h_m$ substitution of step 1.2 fixes $P$ and shifts $x_j$ to $x_{j-1}$ until its first wrap, when it becomes $Px_mP^{-1}$. Thus $h_m^m$ also conjugates each $x_j$ by $P$, so faithfulness gives $h_m^m=T_m$. Mirroring this equality gives $\operatorname{mirror}(T_m)=(\sigma_1\cdots\sigma_{m-1})^{-m}=T_m^{-1}$, since the mirror of $h_m$ is the inverse of that ascending product. Consequently the positive packet has a negative full-twist compensation and its mirror a positive one. Reversing either sequence gives the stabilization statement. Conjugations are counted separately from these $m$ strand-changing moves. AC is used only through faithful action [F1]; no closure-isotopy-to-Markov implication is invoked. [F1, F3, F4, step 1.1, step 3.1, algebra]

 5.1 **Reverse-order compensated packets.** Word reversal $\operatorname{rev}$ fixes each signed generator and reverses multiplication. The Artin braid relations are palindromic, and reversing a far commutation gives the same relation, so reversal is an involutive anti-automorphism compatible with strand placements. It carries a conjugation by $g$ to one by $\operatorname{rev}(g)^{-1}$, and carries a right stabilization to a left stabilization, which cyclic conjugation turns into a right stabilization of the same sign; the inverse applies to destabilizations. Its use therefore preserves the number and signs of ordinary strand-changing moves. To verify $\operatorname{rev}(Q_{m,m})=Q_{m,m}$ directly, label a row cell by $(i,j)$, $1\le i,j\le m$, with generator $\sigma_{m+j-i}$. After reversal set $I=m-i+1,J=m-j+1$; its index becomes $m+I-J$. The reversed order lists first $J$ then $I$, whereas the rows of $Q_{m,m}$ list first $I$ then $J$. Every pair that changes order has $I>I'$ and $J<J'$, so the generator indices differ by $(I-I')+(J'-J)\ge2$ and far commutation suffices. Reversal of $T_m$ is $h_m^m=T_m$ by step 4.1; $m=0,1$ are the empty or trivial cases. Consequently the mirrored packet of step 4.1 is $Q_{m,m}^{-1}T_m$, and its word reversal is $V_m=T_m Q_{m,m}^{-1}$. Apply the negative sequence of step 4.1 to $\operatorname{rev}(\alpha)$, reverse every word and move, and cyclically conjugate its starting word $V_m\operatorname{rev}(\operatorname{rev}(\alpha))=V_m\alpha$ to $\alpha V_m$. This gives exactly $m$ negative ordinary destabilizations and conjugations to $\alpha$, with no commutation of a twist through $\alpha$. Whole-block naturality in [F4] gives $T_m Q_{m,m}^{-1}=Q_{m,m}^{-1}(1_m\otimes T_m)$ on the local old/new strands. Mirroring the whole argument gives the positive variant, and reversing gives stabilizations. This proves every additional assertion of the Statement without changing the original packet sequence. [F1, F3, F4, step 1.1, step 4.1, algebra] ∎

## Remarks

The abstract packet theorem permits arbitrary internal boxes in $\alpha$.
Applying it to a pictured geometric band move still requires identifying its
cut, strand placements and full-twist compensation with $W_m$ or its mirrored
packet. The statement alone does not identify Traczyk's Figure 10 or certify the
remaining Figure 8 and Figure 11 comparisons.
