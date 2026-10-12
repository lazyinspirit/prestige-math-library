---
id: ex-degenerate-ariki-decomposition-numbers-in-small-rank
kind: example
title: "Degenerate Ariki decomposition numbers in small rank"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one,
       thm-degenerate-ariki-categorification,
       thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix,
       def-higher-level-wedge-tensor-fock-module,
       thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule,
       def-degenerate-cyclotomic-hecke-algebra,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
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
      locator: "Actual relevant Sections 2.3-2.6 projection/transition/Std-Rev and pairing; (2.50) multipartition dictionary; complete Section 3.7 printed pp. 31-32 sign proof; Sections 4.2 and 4.4 printed pp. 35-36 and 41-42 intrinsic Young/signed-Young formulas. The explicit height-at-most-2 algebra and normalization calculations below are owner-derived, not claimed printed source examples."
verification:
  precheck: pass
---

## Example

Assume inherited AC [[def-axiom-of-choice]] for the categorification and based-module identifications; the explicit finite calculations below are choice-free.

Take $I=\{0\}$, so $I^+=\{0,1\}$, level $l=2$ and $\Lambda=2\Lambda_0$ with
charge $(0,0)$. Here the tower means the $I$-SUPPORTED central cut, not the full
degree-$d$ cyclotomic algebra. The Fock space is $V\otimes V$ with monomials
$00,01,10,11$ ([[def-higher-level-wedge-tensor-fock-module]]), and
$\mathrm{Std}=\{00,01,11\}$, $\mathrm{Rev}=\{00,10,11\}$ with source Bruhat order
$01<10$. Write $M_A$ for the monomial, $\pi$ for the normalized highest
projection and $D_A=\pi L_A$ as in
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]. In the source
parameter $s$ (the library parameter is $t=s^{-1}$),

$$L_{00}=M_{00},\quad L_{01}=M_{01},\quad L_{10}=M_{10}-sM_{01},\quad L_{11}=M_{11},$$

and $M_{10}=L_{10}+sL_{01}$, so the FULL ambient $d$-matrix is the inverse of the
$L$-in-$M$ matrix, with diagonal $1$ and $d_{01,10}=s$; it is not its transpose.
Moreover $T_{10}=M_{10}+s^{-1}M_{01}$ and $P_{01}=M_{01}+sM_{10}=sT_{10}$. The
actual projection is $D_{01}=T_{10}/(s+s^{-1})$, $\pi M_{10}=sD_{01}$,
$\pi L_{10}=0$, and $D_{00}=M_{00}$, $D_{11}=M_{11}$; in particular at
parameter one $D_{01}=(M_{01}+M_{10})/2$, not the unprojected $L_{01}=M_{01}$.

The decomposition matrix at parameter one has rows $00,01,11$ and columns
$00,01,10,11$:

$$\begin{pmatrix}1&0&0&0\\0&1&1&0\\0&0&0&1\end{pmatrix}.$$

Thus $S_{00}=D_{00}$, $S_{01}\cong S_{10}\cong D_{01}$ and $S_{11}\cong D_{11}$:
the nonstandard Specht label $10$ has a nonzero decomposition entry, but there is
no simple $D_{10}$. If $S_B$ denotes $\pi M_B$, it is defined for all four
columns, but only $S_{\mathrm{Std}}$ is a basis, and the displayed $3\times4$
matrix is not an invertible unitriangular square matrix. The supported blocks
are $\mathbb C$, $\mathbb C[x]/x^2$ and $M_2(\mathbb C)$ at $0,\alpha_0,2\alpha_0$
respectively, with simple dimensions $1,1,2$; these are all simples of this
finite-$I$ tower and higher supported degrees vanish. The whole degree-$2$
algebra has two additional adjacent-residue blocks, retained in the $I=\mathbb Z$
companion showcase. All displayed Specht decomposition entries are $0$ or $1$
(the relevant Weyl group is $S_2$).

## Facts & Assumptions

**Given:** Assume inherited AC [[def-axiom-of-choice]] for the invoked suppliers. The data $I=\{0\}$, $\Lambda=2\Lambda_0$, charge $(0,0)$, the Fock
monomial and projection dictionary of
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] and
[[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]],
and the decomposition dictionary at parameter one of
[[thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one]].
We verify the displayed transition, projection, decomposition and block
statements.

[F1] At parameter one, for every Specht label $B$ and every simple label $A$ one
has $[S(B):D(A)]=d_{A,B}(1)$, where $d_{A,B}(s)$ is defined by
$M_B=\sum_Ad_{A,B}(s)L_A$, and the matrix $D(s)=(d_{A,B})$ is the inverse of the
$L$-in-$M$ chart, not its transpose
([[thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one]]).

[F2] The simple classes of the supported tower are indexed by
$\mathrm{Std}^\Lambda$ and the Specht classes satisfy $[S(B)]\mapsto S_B$, the
identification being exact and compatible with the residue functors
([[thm-degenerate-ariki-categorification]]).

## Verification

**Proof technique:** direct.

1.1 **The four monomials and the label sets.** The finite alphabet is $I^+=\{0,1\}$ and each charge-zero factor is its one-box natural module. Hence its tensor-square basis is $M_{00},M_{01},M_{10},M_{11}$. Weakly increasing rows select $00,01,11$, and weakly decreasing rows select $00,10,11$, so these are respectively $\mathrm{Std}$ and $\mathrm{Rev}$; the mixed Bruhat order is $01<10$. The actual coordinate weights are $2\delta_0,\delta_0+\delta_1,\delta_0+\delta_1,2\delta_1$; subtracting each from the vacuum weight $2\delta_0$ gives contents $0,\alpha_0,\alpha_0,2\alpha_0$. In particular $I_{\alpha_0}=\{(0)\}$ and $I_{2\alpha_0}=\{(0,0)\}$: residue sequences have length equal to tower degree, independently of the two tensor factors. [given, algebra]

1.2 **The transition vectors and the reciprocal convention.** On this mixed space the ordinary Fock bar is $\psi M_{01}=M_{01}$ and $\psi M_{10}=M_{10}+(s^{-1}-s)M_{01}$, with coefficient bar $s\mapsto s^{-1}$. Direct substitution shows that $L_{10}=M_{10}-sM_{01}$ and $T_{10}=M_{10}+s^{-1}M_{01}$ are bar fixed in their respective positive- and negative-power triangular charts; the endpoints and $L_{01}$ equal their monomials. Thus $M_{10}=L_{10}+sL_{01}$, and the ambient inverse-chart coefficient is $d_{01,10}=s$. Its row gives $P_{01}=M_{01}+sM_{10}=sT_{10}$. Under $t=s^{-1}$ these same formulas become $L_{10}=M_{10}-t^{-1}M_{01}$, $T_{10}=M_{10}+tM_{01}$ and $P_{01}=M_{01}+t^{-1}M_{10}$; reciprocating the parameter does not transpose the inverse transition matrix. [given, algebra]

2.1 **The normalized projection.** The source coproduct gives $F_0M_{00}=M_{10}+s^{-1}M_{01}=T_{10}$ and $F_0T_{10}=(s+s^{-1})M_{11}$. Hence $T_{10}$ lies in the ground-generated constituent and is fixed by its normalized projection. The ground highest vector is $M_{00}$; $E_0M_{01}=M_{00}$, so $M_{01}$ is not highest. The off-standard kernel is the nonzero line $\mathbb Q(s)L_{10}$. Since $T_{10}-L_{10}=(s+s^{-1})M_{01}$, applying the projection gives $D_{01}=\pi M_{01}=T_{10}/(s+s^{-1})$ and $\pi M_{10}=sD_{01}$. The endpoints are fixed, and $\pi L_{10}=0$. At $s=1$ this is the half-sum $(M_{01}+M_{10})/2$. All divisions here take place over $\mathbb Q(s)$; they do not identify the projected costandard lattice with the ambient integral monomial lattice. [given, step 1.2, algebra]

2.2 **The supported blocks.** Set $x=x_1$, $y=x_2$, $u=s_1$. The defining relations of [[def-degenerate-cyclotomic-hecke-algebra]] give $u^2=1$, $[x,y]=0$, $ux=yu-1$, $uy=xu+1$ and $x^2=0$ in the relevant degree; from $ux^2=0$ and the cross relations one obtains $y^2u=x+y$, hence $y^2=(x+y)u$, and reducing the relation $y^2=(x+y)u$ decreases the $y$-exponent while killing $x$-exponents at least $2$, so the eight words $1,x,y,xy,u,xu,yu,xyu$ span the degree-$2$ algebra. Map these generators to $(N,-N,-J)$ on $M_2(\mathbb C)$ with $N=E_{12}$ and $J$ the swap matrix, to $(\epsilon,1+\epsilon,1)$ on $B_+=\mathbb C[\epsilon]/\epsilon^2$, and to $(\epsilon,-1+\epsilon,-1)$ on $B_-=\mathbb C[\epsilon]/\epsilon^2$; direct matrix computation verifies $u^2=1$, $[x,y]=0$, $x^2=0$, $ux=yu-1$ and $uy=xu+1$ in all three factors. The central element $z=x+y$ has images $0$, $1+2\epsilon$ and $-1+2\epsilon$, and the Hermite polynomials $E_0=(1-z^2)^2$, $E_\pm=(1-E_0\pm(3z-z^3)/2)/2$ map to the three separate identities; each factor is generated by its images of $x$ and $u$, so the map from the span of the eight words onto the eight-dimensional product is surjective and hence, by the spanning bound, an isomorphism. The $I=\{0\}$ spectral content cut keeps the factor $M_2(\mathbb C)$ at content $2\alpha_0$ and discards the adjacent-content factors, so the supported degree-$2$ block is $M_2(\mathbb C)$ with simple dimension $2$; degree one is $\mathbb C[x]/x^2$ with simple dimension $1$ at content $\alpha_0$, and degree zero is $\mathbb C$. To verify vanishing independently of categorification, suppose an all-zero-residue supported module exists in degree at least three. Its restriction to the first two strands lies in the displayed $M_2$ factor, hence $x_2=-x_1$ and $x_1^2=0$. Since $s_2$ commutes with $x_1$, it also commutes with $x_2$. The affine recursion gives $x_3=s_2x_2s_2+s_2=x_2+s_2$. But a commuting sum of a square-zero operator and an involution has generalized eigenvalues only $1,-1$: on the two $s_2$ eigenspaces it is $\pm1+x_2$, each invertible with inverse $\pm1-x_2$. This contradicts the nilpotence required by residue zero for $x_3$. Every nonzero finite-dimensional algebra has its nonzero regular module, so no such supported algebra exists in degree three or higher. [step 1.1, given, algebra]

3.1 **The decomposition matrix.** By [F1] the entries are $d_{A,B}(1)$ read off from step 1.2: on the standard columns $00,01,11$ the matrix is the identity, and the single mixed entry is $d_{01,10}(1)=1$, so the $3\times4$ matrix is $\bigl(\begin{smallmatrix}1&0&0&0\\0&1&1&0\\0&0&0&1\end{smallmatrix}\bigr)$. By [F2] the classes are $S_{00}=D_{00}$, $S_{01}\cong S_{10}\cong D_{01}$ and $S_{11}\cong D_{11}$, so the nonstandard Specht label $10$ has a nonzero decomposition entry while $D_{10}$ is not a simple label; the square submatrix on the standard columns is the identity, in particular unitriangular, and the rectangular matrix is not claimed to be an invertible unitriangular square matrix. [step 1.2, step 2.1, F1, F2, given, algebra]

4.1 **Conclusion.** Steps 1.1-3.1 verify the transition, projection and decomposition statements, including the inverse-chart entry $d_{01,10}(1)=1$ in place of any negative transposed-inverse value, the identity on standard columns and the absence of an off-standard simple $D_{10}$; step 2.2 verifies the block dimensions $1,1,2$ at contents $0,\alpha_0,2\alpha_0$ of the supported tower and the vanishing of higher supported degrees. The two further adjacent-residue degree-$2$ blocks of the full algebra are outside this supported window and are treated in the companion showcase; no unprojected monomial is used as a simple class. [step 3.1, step 2.2, given] ∎
