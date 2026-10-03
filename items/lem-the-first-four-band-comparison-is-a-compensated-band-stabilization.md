---
id: lem-the-first-four-band-comparison-is-a-compensated-band-stabilization
kind: lemma
title: "The first four-band comparison is a compensated band stabilization"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-block-interchanges-transport-arbitrary-braid-boxes,
       lem-compensated-band-kinks-decompose-into-ordinary-markov-moves,
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
sources:
  references:
    - title: "Traczyk, A new proof of Markov's braid theorem, first right-column comparison in Figure 8 and Figure 10, printed pp. 416 and 418-419"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Gonzalez-Meneses, Basic results on braid groups, sections 1.5-1.6, printed pp. 7-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Assume AC. Let $a,b\ge1$, $c,d\ge0$, $n=a+b+c+d$, and choose arbitrary
$A\in B_{a+c}$, $B\in B_{b+c}$, $C\in B_{a+d}$, $D\in B_{b+d}$.
Write $\iota_s(\sigma_i)=\sigma_{s+i}$, use the row interchanges
$Q_{p,q}$ of [[lem-block-interchanges-transport-arbitrary-braid-boxes]], and set
$T_0=T_1=1$, $T_r=(\sigma_1\cdots\sigma_{r-1})^r$ for $r\ge2$.
Define the following words in $B_n$:
$$A_0=\iota_b(A),\quad B_0=\iota_a(B),\quad C_0=\iota_b(C),\quad D_0=\iota_a(D),\quad X=Q_{b,a},\quad Y=\iota_{a+b}(Q_{c,d}),$$
$$\alpha=C_0Y^{-1}A_0X B_0Y D_0X^{-1}.$$
In $B_{n+d}$ put
$$A_1=\iota_{b+d}(A),\quad B_1=\iota_{a+d}(B),\quad C_1=\iota_{b+d}(C),\quad D_1=\iota_{a+d}(D),\quad Y_1=\iota_{a+b+d}(Q_{c,d}),$$
$$H=Q_{b,d+a}Q_{d,a},\quad U=Q_{b+d,a+d}^{-1},\quad \beta=C_1Y_1^{-1}A_1H\,\iota_a(T_d)\,B_1Y_1D_1U.$$
Each factor is placed on the first strands unless a shift is displayed.
Finally set $\ell=a+d+c$ and
$$R=\iota_b(Q_{\ell,d}),\quad K=\iota_b(T_\ell^{-1})\,\iota_{a+b}(Q_{d,c})\in B_n,\quad V=\iota_{n-d}(T_dQ_{d,d}^{-1}).$$
Then
$$R\beta R^{-1}=\alpha K V K^{-1}.$$
Consequently $\alpha$ is related to $\beta$ by conjugations and exactly $d$
negative ordinary stabilizations, from $n$ to $n+d$ strands. At $d=0$ the
two words coincide and the count is zero. These are statements about the
displayed algebraic words; identifying a diagram's chronological record with
its actual geometric word is a separate convention.

## Facts & Assumptions

**Given:** AC, the stated widths and arbitrary boxes, with every strand placement as in the Statement.

[F1] Artin braid relations and far commutations define these groups; strand placements are homomorphisms ([[def-braid-group-by-the-artin-presentation]]).

[F2] Uniform whole-block interchanges transport arbitrary internal words, including inverses, in the precise shifted placements ([[lem-block-interchanges-transport-arbitrary-braid-boxes]]).

[F3] Under AC the frozen Artin representation is faithful; $\rho(uv)=\rho(u)\circ\rho(v)$, $\rho(\sigma_i)(x_i)=x_i x_{i+1}x_i^{-1}$ and $\rho(\sigma_i)(x_{i+1})=x_i$ ([[thm-the-artin-representation-is-faithful]], [[def-the-artin-representation-on-a-free-group]], [[def-artin-automorphisms-of-the-free-group]]).

[F4] With arbitrary surrounding braid, the reverse-order packet $T_dQ_{d,d}^{-1}$ on the last $d$ old strands and $d$ new strands has exactly $d$ negative ordinary destabilizations and conjugations to that surrounding braid; its reversed sequence gives stabilizations ([[lem-compensated-band-kinks-decompose-into-ordinary-markov-moves]]).

[F5] Conjugations and the ordinary signed stabilization/destabilization are Markov moves ([[def-markov-conjugation-and-stabilization-moves]]).

## Proof

**Proof technique:** direct.

1.1 **Zero widths and complete embeddings.** If $d=0$, $Y=Y_1=1$, $R=V=1$, $H=X$, $U=X^{-1}$, and all primed boxes are their unprimed counterparts; therefore $\beta=\alpha$ and the asserted equality and count hold. Now assume $d\ge1$. All words are defined: $A_0,C_0$ fit inside the last $\ell$ old strands after the first $b$, $B_0,D_0$ fit after the first $a$, their primed versions are shifted by $d$, $H$ uses the first $a+b+d$ strands, and $U$ uses the first $a+b+2d$ strands. The unshifted part of $K$ uses only the $\ell$ old strands and $Q_{d,c}$ uses the last $c+d$ old strands, so $K\in B_n$. When $c=0$, $Y=Y_1=1$ and $Q_{d,c}=1$, with no padding or generator indexed zero; all subsequent products on the $c$-block are empty and all corresponding individual-generator rows are absent. [F1, F2, given]

1.2 **Substitution rules used below.** For $Q_{p,q}$ on $p+q$ generators write $P=x_1\cdots x_p$. Its images are $P x_{p+i}P^{-1}$ for input $x_i$, $1\le i\le q$, and $x_j$ for input $x_{q+j}$, $1\le j\le p$. Induct on the number of rows $q$, adjoining a fixed generator each time: the next descending row sends $x_{q+1}$ to $(x_{q+1}\cdots x_{q+p})x_{q+p+1}(x_{q+1}\cdots x_{q+p})^{-1}$ and $x_{q+1+j}$ to $x_{q+j}$; the preceding substitution sends that parenthesized product to $P$. This proves every individual-generator formula, including $p=0$ or $q=0$. Equivalently, in the ordered input basis $(f_1,\ldots,f_q,g_1,\ldots,g_p)$ and output names $(x_1,\ldots,x_p,y_1,\ldots,y_q)$, the positive interchange sends $f_i$ to $P y_iP^{-1}$ and $g_j$ to $x_j$; its inverse sends each $x_j$ to $g_j$ and each $y_i$ to $G^{-1}f_iG$, $G=g_1\cdots g_p$. The names on each side designate the corresponding consecutive indices of the same free basis, rather than a change of generator sign. For $r\ge1$, $T_r$ conjugates each of its $r$ free generators by their product. Indeed for $\delta=\sigma_1\cdots\sigma_{r-1}$, $\delta(x_j)=x_1x_{1+(j\bmod r)}x_1^{-1}$; setting $P_h=x_1\cdots x_h$, induction gives $\delta^h(x_j)=P_hx_{1+((j+h-1)\bmod r)}P_h^{-1}$ for $0\le h\le r$, since $\delta(P_h)=P_{h+1}x_1^{-1}$. At $h=r$ this is conjugation by the full product. Every Artin generator fixes the full boundary product, so all local words do too. These rules follow solely from [F3], and apply after any displayed shift. [F3, construct]

2.1 **The upper routing identity on all generators.** Put $R_B=\iota_a(Q_{b+c+d,d})$ and $Z=Q_{a,d}Q_{d,a}\iota_a(T_d)$. We prove $R H\iota_a(T_d)=X R_B Z$. Within this substitution calculation, capitals denote products of free generators, not the braid boxes. For this comparison label the input consecutive blocks by sizes $(a,d,b,c,d)$ and label the output free generators by $(b,a,c,d,d)$ as $b_i,a_j,c_h,d_j,e_j$, with products $B,A,C,D,E$ and $P=ACD$. The domain rows consist respectively of $x_j$, $x_{a+j}$, $x_{a+d+i}$, $x_{a+d+b+h}$ and $x_{n+j}$ in their specified ranges. These are explicit output index assignments: for example output $a_j=x_{b+j}$, $c_h=x_{b+a+h}$, $d_j=x_{b+a+c+j}$, and $e_j=x_{n+j}$. Both sides send an input generator in the first $a$-block to $BPEP^{-1}a_jPE^{-1}P^{-1}B^{-1}$; a generator in the next $d$-block to $BPEe_jE^{-1}P^{-1}B^{-1}$; a generator in the following $b$-block to $b_i$; and the final $c,d$ blocks to $c_h,d_j$ respectively. Here is the full substitution verification. By step 1.2, $H$ sends the first $a$ generators to $BFa_jF^{-1}B^{-1}$, the next $d$ to $Bf_jB^{-1}$, and the next $b$ to $b_i$, in the intermediate order $(b,d,a,c,d)$ with middle product $F$; it leaves the last two blocks in place. The rightmost $T_d$ first conjugates that input $d$-block by its own product, and $R$ then sends $f_j$ to $Pe_jP^{-1}$ and the remaining $\ell$ intermediate generators to the corresponding $a,c,d$ generators, giving the stated five rows. On the other side the monodromy $Q_{a,d}Q_{d,a}$ sends $a_j$ to $AF A^{-1}a_jAF^{-1}A^{-1}$ and $f_j$ to $Af_jA^{-1}$; consequently $Z$ sends $f_j$ to $AFf_jF^{-1}A^{-1}$ while its $a$-row is unchanged. The word $R_B$ sends $f_j$ to $S e_jS^{-1}$, $S=BCD$, and the remaining $(b,c,d)$ generators to those same output blocks. Finally $X$ sends each current $a_j$ to $Ba_jB^{-1}$ and each current $b_i$ to $b_i$ in the output order $(b,a)$, fixing $c,d,e$; in particular $X(AS)=B A C D=BP$. Substituting gives exactly the same five rows above, including the full internal $d$-block conjugation. Faithfulness gives the asserted routing identity. [F3, step 1.2, algebra]

3.1 **The compensated lower routing identity on all generators.** We prove $R H\iota_a(T_d) U R^{-1}=K V K^{-1}$. Capitals again denote free-generator products in this calculation. Use this time the ordered free basis $(b_i,a_j,d_j,c_h,e_j)$ of sizes $(b,a,d,c,d)$, with products $B,A,D,C,E$, and set $P=ADC$, $M=D^{-1}PE$, $N=MP^{-1}$. Both sides fix every $b_i,c_h$, send $a_j$ to $Na_jN^{-1}$, send $d_j$ to $Me_jM^{-1}$ and send $e_j$ to $M^{-1}d_jM$. For the left side, apply the words from right to left using step 1.2. After $R^{-1}$ the intermediate order is $(b,d,a,d,c)$: each old $a,d,c$ generator is the corresponding generator in the shifted last $\ell$ slots, and a new $e_j$ is $L^{-1}f_jL$, $L$ the product of those last $\ell$ slots. The inverse interchange $U$ moves the $(b,d)$ group past $(a,d)$; its rule conjugates the latter by the inverse product of the relocated $(b,d)$ group. The next $T_d$ conjugates the middle $d$-block by its product. After applying $H$, in the intermediate order $(b,d,a,d,c)$ with products $(B,G,A,F,C)$, the old $a_j$ image is $F^{-1}G a_jG^{-1}F$, the old $d_j$ image is $F^{-1}G g_jG^{-1}F$, the old $c_h$ is $c_h$, and the new image is $L_1^{-1}f_jL_1$, $L_1=F^{-1}GAF C$; the $b$-row is fixed. These follow by cancellation of the conjugating $(B,F)$ product against the leading $B$ in the $H$ substitutions of step 2.1. The final $R$ sends $g_j$ to $Pe_jP^{-1}$, each $f_j$ to $d_j$, and the remaining $a,c$ generators to themselves. It sends $L_1$ to $D^{-1}(PEP^{-1})ADC=D^{-1}PE=M$. Substitution gives precisely the five rows asserted, since $R(F^{-1}G)=D^{-1}PEP^{-1}=N$. For the right side, split the old slots temporarily as $(b,a,c,d)$ with last two products $F,G$. By step 1.2, $K=\iota_b(T_\ell^{-1})\iota_{a+b}(Q_{d,c})$ sends $a_j$ to $P^{-1}a_jP$, each generator of the $c$-block to $P^{-1}D c_hD^{-1}P$, and each last-$d$ generator to $P^{-1}d_jP$; it fixes the new $e_j$ and preserves $P$. Thus $K^{-1}(a_j)=Pa_jP^{-1}$, $K^{-1}(d_j)=Pg_jP^{-1}$, and $K^{-1}(c_h)=PG^{-1}f_hGP^{-1}$. The packet $V=T_dQ_{d,d}^{-1}$ fixes $a,f$, sends $g_j$ to $e_j$, and sends $e_j$ to $E^{-1}Gg_jG^{-1}E$. In particular $K(V(P))=K(AFE)=D^{-1}PE=M$. Applying $K$ to these substituted images gives $Na_jN^{-1}$, $Me_jM^{-1}$, $c_h$ and $E^{-1}P^{-1}Dd_jD^{-1}PE=M^{-1}d_jM$, with the $b$-row fixed. All individual generators have now been checked, so faithfulness proves the identity. [F3, step 1.2, step 2.1, algebra]

4.1 **Strip arbitrary boxes by whole-block naturality.** The word $R$ interchanges the whole old $\ell$-block with the new $d$-block. Hence [F2] gives $R C_1Y_1^{-1}A_1=C_0Y^{-1}A_0R$, because the three old words lie wholly in that $\ell$-block and their primed embeddings are shifted by $d$. Insert the upper routing identity of step 2.1 into $R\beta R^{-1}$. The factor $Z$ acts only on the first $a+d$ strands, whereas $B_1,D_1$ start after that block and $Y_1$ is farther out; their smallest possible generator is at least $a+d+1$, while $Z$ has largest at most $a+d-1$. Thus every letter of $Z$ commutes with every letter, including inverse letters, of $B_1Y_1D_1$. Next $R_B$ interchanges the entire old $(b+c+d)$ block after the first $a$ with the new $d$ block, so [F2] gives $R_B B_1Y_1D_1=B_0Y D_0R_B$. The calculation is therefore $R\beta R^{-1}=C_0Y^{-1}A_0X B_0Y D_0[R_B Z U R^{-1}]$. By steps 2.1 and 3.1, the bracket equals $X^{-1}K V K^{-1}$. This yields exactly $\alpha K V K^{-1}$. Every box is arbitrary on its stated whole block; no full twist on only part of a box is commuted through it. [F1, F2, step 2.1, step 3.1, algebra]

5.1 **The ordinary move sequence and all boundaries.** Conjugate $\alpha$ in $B_n$ by $K^{-1}$. By the reverse of [F4], append $V$ to this arbitrary surrounding braid by exactly $d$ negative ordinary stabilizations: $K^{-1}\alpha K\mapsto(K^{-1}\alpha K)V$. Conjugate by $K$ and then by $R^{-1}$ to obtain $\beta$ using step 4.1. The strand number rises from $n$ to $n+d$; $K$ remains in the original $B_n$ and every intermediate use of [F4] has its selected last $d$ old strands and $d$ new strands. At $d=1$ all full twists on the single copied band are $1$, but the necessary old full twist in $K$ on $\ell$ strands is retained. At $c=0$, the $c$ rows and cap words disappear, and every substitution and naturality argument above still holds with $C=1$ as a free-product name; this does not set the arbitrary braid box $C$ to identity. At $d=0$ use step 1.1, with no move and no nonexistent generator. These distinctions cover all stated widths and trivial or nontrivial boxes. AC is inherited only from the faithful-action and packet suppliers; no closure-equivalence or Markov theorem is used. [F3, F4, F5, step 1.1, step 4.1, construct] ∎
