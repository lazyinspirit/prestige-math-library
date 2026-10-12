---
id: ex-charge-reversal-and-fock-involution-in-a-small-example
kind: example
title: "Charge reversal and the Fock involution in a small example"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 44
deps: [prop-sign-duality-and-ringel-duality-match-fock-space-involutions,
       thm-degenerate-ariki-categorification,
       def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       def-higher-level-wedge-tensor-fock-module,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       def-degenerate-cyclotomic-hecke-algebra,
       def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks,
       def-axiom-of-choice]
axiom_use: "Inherited AC for the invoked categorification and based-module suppliers; the explicit finite algebra, matrix, sign and lattice calculations use no additional choice."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brundan-Kleshchev, The degenerate analogue of Ariki's categorification theorem (complete 44-page body, matching native fetch stamp)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Actual relevant Sections 2.3-2.6 projection/transition/Std-Rev and pairing; (2.50) multipartition dictionary; complete Section 3.7 printed pp. 31-32 sign proof; Sections 4.2 and 4.4 printed pp. 35-36 and 41-42 intrinsic Young/signed-Young formulas. The explicit height-at-most-2 algebra, sign and duality calculations below are owner-derived, not claimed printed source examples."
verification:
  precheck: pass
---

## Example

Assume inherited AC [[def-axiom-of-choice]] for the categorification and based-module identifications; the explicit finite calculations below are choice-free.

Take $I=\mathbb Z$, level $l=2$ and charge $(0,0)$, so $\Lambda=2\Lambda_0$ with
$\Lambda^t=\Lambda$. Use the semi-infinite columns

$$O=(0,-1,-2,\dots),\quad U=(1,-1,-2,\dots),\quad R=(2,-1,-2,\dots),\quad C=(1,0,-2,-3,\dots),$$

corresponding to the partitions $\varnothing,1,2,11$. The FULL height-$\le2$
ambient window consists of eight monomials

$$00=OO;\quad 01=OU;\quad 10=UO;\quad 11=UU;\quad 0R=OR;\quad R0=RO;\quad 0C=OC;\quad C0=CO .$$

Their root degrees are $0$; $\alpha_0$ for $01,10$; $2\alpha_0$ for $11$;
$\alpha_0+\alpha_1$ for $0R,R0$; and $\alpha_0+\alpha_{-1}$ for $0C,C0$. Here
$\mathrm{Std}=\{00,01,11,0R,0C\}$ and $\mathrm{Rev}=\{00,10,11,R0,C0\}$;
rectification maps $10\mapsto01$, $R0\mapsto0R$, $C0\mapsto0C$, and fixes
$00,11$. Multipartition transpose reverses components and transposes their
shapes:

$$01\leftrightarrow10,\qquad 0R\leftrightarrow C0,\qquad R0\leftrightarrow0C;\qquad 00,11\ \text{fixed}.$$

This is an ambient monomial permutation, not a permutation of nonexistent Hecke
simple or projective labels off $\mathrm{Std}$.

At parameter one the full algebra window is $H_0=\mathbb C$,
$H_1=\mathbb C[x]/x^2$ and $H_2=M_2(\mathbb C)\oplus B_+\oplus B_-$ with
$B_\pm=\mathbb C[\epsilon]/\epsilon^2$, the respective degree-two contents being
$2\alpha_0$, $\alpha_0+\alpha_1$ and $\alpha_0+\alpha_{-1}$. Sign sends
$x_r\mapsto-x_r$, $s_r\mapsto-s_r$; it fixes the unique $\alpha_0$ simple and
cover, fixes the unique $2\alpha_0$ simple and cover, and exchanges the
simple/cover pairs in $B_+$ and $B_-$. On $\mathrm{Std}$ labels it fixes
$00,01,11$ and swaps $0R\leftrightarrow0C$. Equivalently the simple-label map is
$B\mapsto(B^\uparrow)^t$, not $B\mapsto B^t$ without rectification, and
$D_{10}=D_{R0}=D_{C0}=0$.

The projected simple vectors are
$D_{01}=\tfrac12(M_{01}+M_{10})$, $D_{0R}=\tfrac12(M_{0R}+M_{R0})$,
$D_{0C}=\tfrac12(M_{0C}+M_{C0})$, $D_{00}=M_{00}$, $D_{11}=M_{11}$; their
projective cover vectors are $P_{01}=M_{01}+M_{10}$, $P_{0R}=M_{0R}+M_{R0}$,
$P_{0C}=M_{0C}+M_{C0}$, with the endpoints equal to $D$. The ambient transpose
at parameter one descends to the highest constituent to fix $P_{01}/D_{01}$ and
to exchange $P_{0R}/D_{0R}$ with $P_{0C}/D_{0C}$; it does NOT swap $P_{01}$ with
the ambient $P_{10}$, nor $D_{01}$ with $D_{10}$.

For the full Young namespace of
[[prop-sign-duality-and-ringel-duality-match-fock-space-involutions]] the block
models give

$$Y_{00}=\mathbb C,\ Y_{01}=B_0,\ Y_{10}=D_{01},\ Y_{11}=D_{11},\ Y_{0R}=B_+,\ Y_{R0}=D_{0R},\ Y_{0C}=B_-,\ Y_{C0}=D_{0C},$$

$$\widetilde Y_{00}=\mathbb C,\ \widetilde Y_{01}=D_{01},\ \widetilde Y_{10}=B_0,\ \widetilde Y_{11}=D_{11},\ \widetilde Y_{0R}=D_{0R},\ \widetilde Y_{R0}=B_+,\ \widetilde Y_{0C}=D_{0C},\ \widetilde Y_{C0}=B_-,$$

where $B_0=\mathbb C[x]/x^2$. Thus cover labels are $\mathrm{Std}$ for the
Young family and $\mathrm{Rev}$ for the signed family; the off-$\mathrm{Std}$
Young images and off-$\mathrm{Rev}$ signed images remain in the ambient family
and need not be Hecke projectives. For $A\in\mathrm{Rev}$ one has
$\widetilde Y(A)=\sigma^*Y(A^t)\cong Y(A^\downarrow)$, exactly the
charge-reversal/rectification formula. Every displayed Specht is self-dual in
these blocks, and $\sigma^*S(A^t)\cong S(A)^{\circledast}$; the two adjacent
content blocks are essential to this showcase. In the general asymmetric case
the source charge formula remains
$\Lambda^t=\Lambda_{-m_l}+\cdots+\Lambda_{-m_1}$, and the example does not
identify that tower with its original one.

## Facts & Assumptions

**Given:** Assume inherited AC [[def-axiom-of-choice]] for the invoked suppliers. The global sign/transpose proposition
[[prop-sign-duality-and-ringel-duality-match-fock-space-involutions]] and the
categorification dictionary of [[thm-degenerate-ariki-categorification]], with
the Fock columns and monomials of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]. We verify the
label enumeration, the height-two algebra, the projected vectors, the sign
permutation and the full Young/signed tables.

[F1] For $I=\mathbb Z$ the sign map $\sigma(s_r)=-s_r$, $\sigma(x_r)=-x_r$ gives
$H^\Lambda_\alpha\cong H^{\Lambda^t}_{\alpha^t}$, intertwines residue $i$ with
$-i$, and satisfies $\sigma^*S(A^t)\cong S(A)^{\circledast}$ and
$\sigma^*D(A^t)\cong D(A^\downarrow)$ on reverse-standard labels; the
multipartition transpose is the reversed-component shape transpose
([[prop-sign-duality-and-ringel-duality-match-fock-space-involutions]]).

[F2] The simple and projective labels are indexed by the standard tableaux, with
$D_A=\pi L_A$ for $A\in\mathrm{Std}^\Lambda$ and zero for the off-standard
classes; the four Fock families $M_A,L_A,T_A,P_A$ with the quasi-canonical
expansion $P_A=\sum_Bd_{A,B}(s)M_B$ are the source dictionary used throughout
([[thm-degenerate-ariki-categorification]]).

## Verification

**Proof technique:** direct.

1.1 **The eight ambient labels.** There is one empty bipartition, two of size one, and five of size two. In the reversed-component notation displayed in the Example these are $(\varnothing;\varnothing)$, $(\varnothing;1)$, $(1;\varnothing)$, $(1;1)$, $(\varnothing;2)$, $(2;\varnothing)$, $(\varnothing;11)$ and $(11;\varnothing)$, labelled respectively $00,01,10,11,0R,R0,0C,C0$. The column $C=(1,0,-2,-3,\ldots)$ records two moved entries and corresponds to $11$, not to a one-box partition. The box contents give degrees $0$, $\alpha_0$ for $01,10$, $2\alpha_0$ for $11$, $\alpha_0+\alpha_1$ for $0R,R0$, and $\alpha_0+\alpha_{-1}$ for $0C,C0$. Weak row inequalities in the ordinary and reversed readings give the displayed standard and reverse-standard sets. Rectification matches their unique labels in each of these five constituent weights, fixing $00,11$ and sending $10,R0,C0$ to $01,0R,0C$. Reversing components and transposing shapes gives $01\leftrightarrow10$, $0R\leftrightarrow C0$, $R0\leftrightarrow0C$. [given, algebra]

2.1 **The full height-two window.** With $x=x_1$, $y=x_2$, $u=s_1$ the relations give $u^2=1$, $[x,y]=0$, $ux=yu-1$, $uy=xu+1$ and $x^2=0$; from $ux^2=0$ one derives $y^2=(x+y)u$, and reducing by this relation decreases the $y$-exponent while killing $x$-exponents at least two, so the eight words $1,x,y,xy,u,xu,yu,xyu$ span the degree-two algebra. The three models $(N,-N,-J)$ on $M_2(\mathbb C)$ with $N=E_{12}$ and $J$ the swap matrix, $(\epsilon,1+\epsilon,1)$ on $B_+$, and $(\epsilon,-1+\epsilon,-1)$ on $B_-$ satisfy the relations by direct matrix computation; the central element $z=x+y$ has images $0$, $1+2\epsilon$ and $-1+2\epsilon$, and the Hermite polynomials $E_0=(1-z^2)^2$, $E_\pm=(1-E_0\pm(3z-z^3)/2)/2$ map to the three separate identities. Each factor is generated by its images of $x$ and $u$, so the map is surjective onto the eight-dimensional product and the spanning bound makes it an isomorphism; hence there are no other height-two blocks and $H_0,H_1$ are the direct factors listed. The two-dimensional simple of $M_2(\mathbb C)$ carries the generator-fixed contravariant form $J$, since $N^{t}J=JN$ and $(-J)^{t}J=J(-J)$; sign is inner on $M_2(\mathbb C)$ via conjugation by $K=\operatorname{diag}(1,-1)$ (which satisfies $KN=-NK$ and $KJ=-JK$), so the unique simple and its cover are fixed there, while on $B_\pm$ sign identifies $\epsilon$ with $-\epsilon$ and exchanges the two factors, fixing the unique objects of those contents as classes. [step 1.1, given, algebra]

3.1 **The projected vectors and the transpose.** Write $T_{10}=M_{10}+s^{-1}M_{01}$; the source coproduct gives $F_0M_{00}=T_{10}$ and $F_0^{(2)}M_{00}=M_{11}$. Applying $F_1$ and $F_{-1}$ gives $T_{R0}=M_{R0}+s^{-1}M_{0R}$ and $T_{C0}=M_{C0}+s^{-1}M_{0C}$. On each mixed space $L_{A0}=M_{A0}-sM_{0A}$ for $A=1,R,C$ is the nonzero off-standard kernel vector, while $T_{A0}$ lies in the constituent and is fixed by its projection. The identity $T_{A0}-L_{A0}=(s+s^{-1})M_{0A}$ yields the projected half-sums at $s=1$; the kernel lines do not vanish. At parameter one the reverse-factor form is the coefficient dot pairing, and its restriction $C_0$ gives norm two to each mixed sum and norm one to $M_{00},M_{11}$. Thus the mixed projective vectors are the sums and the dual simple vectors their half-sums. Transpose exchanges the two monomials of the first mixed pair and exchanges the $R$ and $C$ pairs, so it preserves the kernel subspaces and the sum subspaces. It therefore fixes $P_{01},D_{01}$ and exchanges $P_{0R},D_{0R}$ with $P_{0C},D_{0C}$. The off-standard projected $L$-vectors are zero, and no simple labelled $10,R0,C0$ is asserted. The formulas use $t=s^{-1}$ before specialization; neither the kernel nor the projection is changed by renaming the parameter. [step 1.1, step 2.1, F2, given, algebra]

3.2 **The intrinsic Young and signed images.** The ordinary reduced permutation ideal has polynomial factor $p_+=\prod_j\prod_{i>t_j}(x_j-m_i)$ and row symmetrizer, where $t_j$ is the component of position $j$. For our two zero charges this gives factors $1$ on a box in component two and $x_j$ on a box in component one. In degree one the ideals are therefore $B_0$ for $01$ and $(x)$ for $10$. On the $B_+$ content factor the labels $0R,R0$ give respectively $B_+(1+u)=B_+$ and $B_+xy(1+u)=(\epsilon)$; on the $B_-$ factor the labels $0C,C0$ give respectively $B_-$ and $B_-xy=(\epsilon)$, since $xy=-\epsilon$ there. The harmless factor two in $1+u$ is invertible. For $11$ the ideal on the $M_2$ factor is $M_2N$, its unique simple projective. The intrinsic dominance extraction in [F1] selects these indecomposable leading summands; this uses that extraction clause, not the assertion that every Schur image is Hecke-projective. Consequently the ordinary table is exactly the one displayed in the Example: regular covers at $01,0R,0C$, simple nonprojectives at $10,R0,C0$, and the simple projective at $11$. Applying the actual sign/transpose map to these polynomial factors changes the row symmetrizer to the row antisymmetrizer and the component factor to its reflected one. This gives the displayed signed table, with covers at $10,R0,C0$ and simple nonprojectives at $01,0R,0C$. The one-dimensional Spechts have $x_r$ acting by their contents and $u=1$ on the $R$ row or $u=-1$ on the $C$ column; the $11$ Specht is the two-dimensional matrix-factor simple. Their contravariant forms are respectively the scalar pairing and $J$ of step 2.1, so all are self-dual. [step 2.1, F1, given, algebra]

4.1 **The sign formula on $\mathrm{Rev}$.** Under reversed-component transpose, $10,R0,C0$ map respectively to the STANDARD target labels $01,0C,0R$. Their ordinary Young images are the projective covers $B_0,B_-,B_+$. Sign fixes the first block as a class and exchanges $B_-$ with $B_+$, giving $B_0,B_+,B_-$. These are exactly the signed images of $10,R0,C0$ in step 3.2 and the ordinary covers at the rectified labels $01,0R,0C$. Thus $\widetilde Y(A)=\sigma^*Y(A^t)=Y(A^\downarrow)$ on the displayed reverse-standard labels. Sign does not turn a one-dimensional simple into a two-dimensional regular module. The Specht comparison is the actual duality statement [F1]. [step 3.2, F1, given, algebra]

5.1 **Conclusion.** Step 1.1 verifies the full eight-label ambient window and the rectification; step 2.1 proves the complete height-two algebra, hence the exact block models and the sign action; step 3.1 verifies the projected simple and cover vectors and the effect of the ambient transpose on the highest constituent, including its failure to swap $P_{01}$ with $P_{10}$; steps 3.2 and 4.1 verify the full Young and signed tables from the intrinsic ideals and the formula $\widetilde Y(A)=\sigma^*Y(A^t)\cong Y(A^\downarrow)$ on $\mathrm{Rev}$. The example covers the complete height-$\le2$ sign window; the general asymmetric case keeps the source formula $\Lambda^t=\Lambda_{-m_l}+\cdots+\Lambda_{-m_1}$ and does not identify the reflected tower with the original one. [step 3.1, step 4.1, given] ∎
