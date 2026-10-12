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
       def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]
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

**Given:** The global sign/transpose proposition
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

1.1 **The eight ambient labels.** By the multipartition dictionary each bipartition of total size at most two corresponds to a column-strict tableau of the two-column window: the empty bipartition gives $00=OO$; the two size-one bipartitions give $01=OU$ and $10=UO$; the three size-two bipartitions give $11=UU$, the vertical $C0$ whose first component is empty and whose second is $(1,1)$, and the remaining ones; translating by the ground-difference rule at charge $(0,0)$ gives precisely the eight columns $OO,OU,UO,UU,OR,RO,OC,CO$ listed, including the vertical column $C=(1,0,-2,-3,\dots)$ whose top entry alone would not record its size two. The root degrees are computed from the entry differences: $00$ has degree $0$; $01$ and $10$ have degree $\alpha_0$; $11$ has degree $2\alpha_0$; $0R,R0$ have degree $\alpha_0+\alpha_1$; and $0C,C0$ have degree $\alpha_0+\alpha_{-1}$. Strict columns plus weak row inequalities define $\mathrm{Std}=\{00,01,11,0R,0C\}$, the reversed inequalities define $\mathrm{Rev}=\{00,10,11,R0,C0\}$, and the unique weight-preserving matching in the ground component is the rectification $10\mapsto01$, $R0\mapsto0R$, $C0\mapsto0C$ with $00,11$ fixed. [given, algebra]

2.1 **The full height-two window.** With $x=x_1$, $y=x_2$, $u=s_1$ the relations give $u^2=1$, $[x,y]=0$, $ux=yu-1$, $uy=xu+1$ and $x^2=0$; from $ux^2=0$ one derives $y^2=(x+y)u$, and reducing by this relation decreases the $y$-exponent while killing $x$-exponents at least two, so the eight words $1,x,y,xy,u,xu,yu,xyu$ span the degree-two algebra. The three models $(N,-N,-J)$ on $M_2(\mathbb C)$ with $N=E_{12}$ and $J$ the swap matrix, $(\epsilon,1+\epsilon,1)$ on $B_+$, and $(\epsilon,-1+\epsilon,-1)$ on $B_-$ satisfy the relations by direct matrix computation; the central element $z=x+y$ has images $0$, $1+2\epsilon$ and $-1+2\epsilon$, and the Hermite polynomials $E_0=(1-z^2)^2$, $E_\pm=(1-E_0\pm(3z-z^3)/2)/2$ map to the three separate identities. Each factor is generated by its images of $x$ and $u$, so the map is surjective onto the eight-dimensional product and the spanning bound makes it an isomorphism; hence there are no other height-two blocks and $H_0,H_1$ are the direct factors listed. The two-dimensional simple of $M_2(\mathbb C)$ carries the generator-fixed contravariant form $J$, since $N^{t}J=JN$ and $(-J)^{t}J=J(-J)$; sign is inner on $M_2(\mathbb C)$ via conjugation by $K=\operatorname{diag}(1,-1)$ (which satisfies $KN=-NK$ and $KJ=-JK$), so the unique simple and its cover are fixed there, while on $B_\pm$ sign identifies $\epsilon$ with $-\epsilon$ and exchanges the two factors, fixing the unique objects of those contents as classes. [step 1.1, given, algebra]

3.1 **The projected vectors and the transpose.** Normalizing the highest pairing $C_0$ makes the two-term highest sums have norm two, so the dual projected vectors are the half-sums $D_{01}=\tfrac12(M_{01}+M_{10})$, $D_{0R}=\tfrac12(M_{0R}+M_{R0})$, $D_{0C}=\tfrac12(M_{0C}+M_{C0})$, and the projective cover vectors are the unhalved sums with endpoints $P_{00}=D_{00}$, $P_{11}=D_{11}$. Applying the mixed residue operators $f_1$ and $f_{-1}$ to the mixed highest vector gives $T_{R0}=M_{R0}+s^{-1}M_{0R}$ and $T_{C0}=M_{C0}+s^{-1}M_{0C}$, with kernels $L_{R0}=M_{R0}-sM_{0R}$ and $L_{C0}=M_{C0}-sM_{0C}$, so at parameter one the projection kernels vanish on these weight spaces and the projected vectors are the displayed half-sums. The ambient monomial transpose at parameter one fixes the ground, commutes with the reflected Chevalley operators (transposing each column negates its contents and the coproduct is cocommutative), and therefore descends to the highest constituent, where it fixes $P_{01}/D_{01}$ and exchanges $P_{0R}/D_{0R}$ with $P_{0C}/D_{0C}$; it does not swap $P_{01}$ with the ambient $P_{10}$, and the off-standard vectors $D_{10},D_{R0},D_{C0}$ are zero by [F2]. This is the projected-lattice clause of [F1] on the eight-label window. [step 1.1, step 2.1, F1, F2, given, algebra]

3.2 **The intrinsic Young and signed images.** Verify the tables from the intrinsic ideals rather than assuming a projective-preservation theorem. In $B_0=\mathbb C[x]/x^2$ the reduced permutation ideal of the label $01$ is $B_0$, and of the reverse label $10$ it is $(x)$; in $B_\pm$ the reduced permutation ideals are $B_\pm$ or $(xy)=(\pm\epsilon)$, where the row factor $1\pm u$ equals $2$ when it occurs; in $M_2(\mathbb C)$ both labels $11$ give the left ideal $M_2N$, the unique simple cover. Every such ideal is indecomposable in its explicit block, so the intrinsic Young definition identifies them exactly: $Y_{00}=\mathbb C$, $Y_{01}=B_0$, $Y_{10}=D_{01}$, $Y_{11}=D_{11}$, $Y_{0R}=B_+$, $Y_{R0}=D_{0R}$, $Y_{0C}=B_-$, $Y_{C0}=D_{0C}$, with cover labels exactly $\mathrm{Std}$. The signed reduced permutation ideals of the same labels give $\widetilde Y_{00}=\mathbb C$, $\widetilde Y_{01}=D_{01}$, $\widetilde Y_{10}=B_0$, $\widetilde Y_{11}=D_{11}$, $\widetilde Y_{0R}=D_{0R}$, $\widetilde Y_{R0}=B_+$, $\widetilde Y_{0C}=D_{0C}$, $\widetilde Y_{C0}=B_-$, with cover labels exactly $\mathrm{Rev}$; no higher summand or nonexistent off-standard simple is needed. [step 2.1, F1, given, algebra]

4.1 **The sign formula on $\mathrm{Rev}$.** For $A\in\mathrm{Rev}$ the tables of step 3.2 give $\widetilde Y(A)=\sigma^*Y(A^t)$, and the right side is $Y(A^\downarrow)$: indeed $A^t$ for $A=10,R0,C0$ is the off-standard label $01,0R,0C$ in the opposite tower, whose Young image is $D_{01},D_{0R},D_{0C}$ by the first table, and the sign twist returns $B_0,B_+,B_-$, which are exactly $Y(10),Y(R0),Y(C0)$ by the second table, matching $Y(A^\downarrow)$ since $10^\downarrow=01$, $R0^\downarrow=0R$, $C0^\downarrow=0C$ for the cover coincidence. This is the charge-reversal/rectification formula of [F1] verified componentwise; all displayed Specht modules are self-dual in these blocks, and $\sigma^*S(A^t)\cong S(A)^{\circledast}$ is the Specht clause of [F1]. [step 3.2, F1, given, algebra]

5.1 **Conclusion.** Step 1.1 verifies the full eight-label ambient window and the rectification; step 2.1 proves the complete height-two algebra, hence the exact block models and the sign action; step 3.1 verifies the projected simple and cover vectors and the effect of the ambient transpose on the highest constituent, including its failure to swap $P_{01}$ with $P_{10}$; steps 3.2-3.1 verify the full Young and signed tables from the intrinsic ideals and the formula $\widetilde Y(A)=\sigma^*Y(A^t)\cong Y(A^\downarrow)$ on $\mathrm{Rev}$. The example covers the complete height-$\le2$ sign window; the general asymmetric case keeps the source formula $\Lambda^t=\Lambda_{-m_l}+\cdots+\Lambda_{-m_1}$ and does not identify the reflected tower with the original one. [step 3.1, step 4.1, given] ∎
