---
id: lem-the-second-four-band-comparison-is-a-compensated-band-destabilization
kind: lemma
title: "The second four-band comparison is a compensated band destabilization"
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
    - title: "Traczyk, A new proof of Markov's braid theorem, second right-column comparison in Figure 8 and Figure 10, printed pp. 416 and 418-419"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Gonzalez-Meneses, Basic results on braid groups, sections 1.5-1.6, printed pp. 7-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Assume AC. Let $a,b\ge1$, $c,d\ge0$, $n=a+b+c+d$, and choose arbitrary
$A\in B_{a+c}$, $B\in B_{b+c}$, $C\in B_{a+d}$, $D\in B_{b+d}$.
Use $\iota_s(\sigma_i)=\sigma_{s+i}$ and the words $Q_{p,q}$ of
[[lem-block-interchanges-transport-arbitrary-braid-boxes]]. Set
$T_0=T_1=1$ and $T_r=(\sigma_1\cdots\sigma_{r-1})^r$ for $r\ge2$.
In $B_n$ put
$$A_1=\iota_{b+d}(A),\quad B_1=\iota_{a+d}(B),\quad C_{\mathrm{in}}=C,\quad D_{\mathrm{in}}=D,$$
$$H=Q_{b,d+a}Q_{d,a},\qquad F=H\iota_a(T_d),\qquad \alpha=D_{\mathrm{in}}A_1F B_1C_{\mathrm{in}}F^{-1}.$$
In $B_{n+d}$ define
$$Y_1=\iota_{a+b+d}(Q_{c,d}),\quad U=Q_{b+d,a+d}^{-1},\qquad \beta=D_{\mathrm{in}}Y_1^{-1}A_1F B_1Y_1C_{\mathrm{in}}U.$$
Finally set
$$K=\iota_b(Q_{d,a})\,\iota_{a+b}(Q_{c,d}^{-1})\in B_n,\qquad V=\iota_{n-d}(T_dQ_{d,d}^{-1}).$$
Then $F Y_1 UY_1^{-1}=KVK^{-1}$ and
$$Y_1\beta Y_1^{-1}=\alpha KVK^{-1}.$$
Consequently $\beta$ is related to $\alpha$ by conjugations and exactly
$d$ negative ordinary destabilizations, from $n+d$ to $n$ strands.
At $d=0$ the words coincide. These are algebraic word assertions;
source chronology is interpreted separately.

## Facts & Assumptions

**Given:** AC, the stated widths, arbitrary boxes and displayed placements.

[F1] Artin relations define the groups and their shifted strand embeddings ([[def-braid-group-by-the-artin-presentation]]).

[F2] Whole-block interchanges transport arbitrary internal braid words and their inverses ([[lem-block-interchanges-transport-arbitrary-braid-boxes]]).

[F3] Under AC the Artin representation is faithful, with $\rho(uv)=\rho(u)\circ\rho(v)$ and $\sigma_i:x_i\mapsto x_i x_{i+1}x_i^{-1},\ x_{i+1}\mapsto x_i$ ([[thm-the-artin-representation-is-faithful]], [[def-the-artin-representation-on-a-free-group]], [[def-artin-automorphisms-of-the-free-group]]).

[F4] An arbitrary surrounding braid followed by the last-band packet $T_dQ_{d,d}^{-1}$ reduces by $d$ negative ordinary destabilizations and conjugations, including $d=0,1$ ([[lem-compensated-band-kinks-decompose-into-ordinary-markov-moves]]).

[F5] Conjugations and signed ordinary stabilization/destabilization are Markov moves ([[def-markov-conjugation-and-stabilization-moves]]).

## Proof

**Proof technique:** direct.

1.1 **Placements and zero widths.** If $d=0$, $Y_1=V=1$, $F=Q_{b,a}$, $U=F^{-1}$, $K=1$, and $\alpha=\beta$. Assume $d\ge1$. The boxes $A_1,B_1$ fit in $B_n$, while $C_{\mathrm{in}},D_{\mathrm{in}}$ use the first $a+d,b+d$ strands. Their largest generator is at most $a+d-1,b+d-1$, respectively, whereas $Y_1$ starts at generator $a+b+d+1$; hence both commute with $Y_1$. The word $F$ uses the first $a+b+d$ strands, and $U$ the first $a+b+2d$ strands of $B_{n+d}$. Both factors of $K$ fit in $B_n$, and $V$ occupies the last $d$ old and $d$ new strands. If $c=0$, $Y_1$ and the second factor of $K$ are identity; all $c$-rows below are absent. [F1, F2, given]

1.2 **Complete substitution rules.** On ordered input blocks $(f_1,\ldots,f_q,g_1,\ldots,g_p)$, the action of $Q_{p,q}$ has output blocks $(x_1,\ldots,x_p,y_1,\ldots,y_q)$ and images $f_i\mapsto X y_iX^{-1}$, $g_j\mapsto x_j$, where $X=x_1\cdots x_p$. Its inverse sends $x_j\mapsto g_j$, $y_i\mapsto G^{-1}f_iG$, $G=g_1\cdots g_p$. To verify these rules, adjoin the descending row for the next input $f_i$: that row conjugates its last generator by the intervening consecutive product and shifts the other generators one place; induction on $q$ sends that product to $X$. This checks each individual input generator, with empty blocks giving identity. The action of $T_r$ conjugates all $r$ generators by their ordered product. For $\delta=\sigma_1\cdots\sigma_{r-1}$ and $P_h=x_1\cdots x_h$, direct substitution gives $\delta(P_h)=P_{h+1}x_1^{-1}$; induction gives $\delta^h(x_j)=P_hx_{1+((j+h-1)\bmod r)}P_h^{-1}$ for $0\le h\le r$. At $h=r$ this proves the assertion. Each local word fixes the product of all its generators. [F3, construct]

2.1 **The routing identity on every generator.** We prove $J:=F Y_1 UY_1^{-1}=KVK^{-1}$. Within this calculation capitals denote products of free generators, not braid boxes. Use the consecutive numeric basis $(b_i,d_j,a_j,c_h,e_j)$ of sizes $(b,d,a,c,d)$, and write its products $B,D,A,C,E$. Thus $b_i=x_i$, $d_j=x_{b+j}$, $a_j=x_{b+d+j}$, $c_h=x_{b+d+a+h}$ and $e_j=x_{n+j}$. Put $N=C E^{-1}C^{-1}D$. Both sides fix $b_i,c_h$ and have the following remaining individual images: $$d_j\longmapsto C e_jC^{-1},\qquad a_j\longmapsto N a_jN^{-1},\qquad e_j\longmapsto E^{-1}C^{-1}D d_jD^{-1}CE.$$ Here is the full left-side substitution. Apply the factors from right to left by step 1.2. After $Y_1^{-1}$ the ordered intermediate blocks are $(B,D,A,G,C)$; the $c$-row is unchanged and each new $e_j$ has image $C^{-1}g_jC$. The next $U$ gives order $(A,G,B,D,C)$: $b_i,d_j$ move without conjugation, while $a_j$ maps to $(BD)^{-1}a_j(BD)$ and the new row to $C^{-1}(BD)^{-1}g_j(BD)C$. The factor $Y_1$ interchanges the last $(D,C)$ blocks, giving order $(A,G,B,C,D)$, sends $d_j$ to $Cd_jC^{-1}$ and fixes $c_h$, so the intervening product $BD$ becomes $BCD C^{-1}$. Finally $F=H\iota_a(T_d)$ maps the first blocks $(A,G,B)$ to $(B,D,A)$: first $T_d$ conjugates each $g_j$ by $G$, and $H$ sends $a_j$ to $BGa_jG^{-1}B^{-1}$, $g_j$ to $Bg_jB^{-1}$ and $b_i$ to $b_i$. The final output names are $(B,D,A,C,E)$, so the intermediate last $D$ is now numeric $E$, and the intermediate $G$ is numeric $D$. Substitute into all five rows. The old $d_j$ becomes $Ce_jC^{-1}$; the $a_j$ conjugator reduces to $CE^{-1}C^{-1}D=N$; the new row reduces to $E^{-1}C^{-1}D d_jD^{-1}CE$; $b_i,c_h$ stay fixed. [F3, step 1.2, algebra]

3.1 **The other side on the same indexed basis.** Temporarily name the old input slots of $K$ by $(B,A,C,G)$, with final $d$-block product $G$, and keep the new block $E$. Step 1.2 gives $K(a_j)=D a_jD^{-1}$, $K(c_h)=c_h$, $K(g_j)=C^{-1}d_jC$, with the first $b$ and new $e$ rows fixed. Its inverse therefore sends numeric $d_j$ to $Cg_jC^{-1}$, numeric $a_j$ to $CG^{-1}C^{-1}a_jCGC^{-1}$, and numeric $c_h$ to $c_h$. The packet $V$ sends $g_j$ to $e_j$, sends $e_j$ to $E^{-1}Gg_jG^{-1}E$, and fixes $a_j,c_h,b_i$. Applying $K$ last gives $d_j\mapsto Ce_jC^{-1}$, $a_j\mapsto(CE^{-1}C^{-1}D)a_j(CE^{-1}C^{-1}D)^{-1}$, and $e_j\mapsto E^{-1}C^{-1}D d_jD^{-1}CE$, with the other two rows fixed. These are all images of the same numeric basis used in step 2.1, not merely block products or permutations. Faithfulness now proves $J=KVK^{-1}$. [F3, step 1.2, step 2.1, algebra]

4.1 **Arbitrary boxes and the ordinary sequence.** By step 1.1, $Y_1$ commutes with $D_{\mathrm{in}},C_{\mathrm{in}}$. Direct cancellation gives $$Y_1\beta Y_1^{-1} =D_{\mathrm{in}}A_1F B_1C_{\mathrm{in}}Y_1 UY_1^{-1} =\alpha(FY_1 UY_1^{-1}) =\alpha KVK^{-1}.$$ This uses no commutation with $A_1,B_1$ and no partial-band assumption about any box. Conjugate $\beta$ by $Y_1$ and then by the old-strand word $K^{-1}$; the result is $(K^{-1}\alpha K)V$. Apply [F4] to this arbitrary surrounding braid, removing exactly $d$ last new strands by negative ordinary destabilizations and conjugations, and conjugate by $K$ to obtain $\alpha$. The strand number decreases from $n+d$ to $n$. For $d=1$ only $T_1=1$ is used, with $K$ retained. For $c=0$ the free-product name $C$ is the empty product, although the arbitrary box $C\in B_{a+d}$ is retained throughout the displayed braid equality. At $d=0$ use step 1.1. AC enters solely through [F3], [F4]; no Markov equivalence theorem is a supplier. [F1, F3, F4, F5, step 1.1, step 3.1, algebra] ∎
