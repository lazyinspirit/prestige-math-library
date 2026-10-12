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
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]
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

Take $I=\{0\}$, so $I^+=\{0,1\}$, level $l=2$ and $\Lambda=2\Lambda_0$ with
charge $(0,0)$. Here the tower means the $I$-SUPPORTED central cut, not the full
degree-$d$ cyclotomic algebra. The Fock space is $V\otimes V$ with monomials
$00,01,10,11$ ([[def-higher-level-wedge-tensor-fock-module]]), and
$\mathrm{Std}=\{00,01,11\}$, $\mathrm{Rev}=\{00,10,11\}$ with source Bruhat order
$01<10$. Write $M_A$ for the monomial, $\pi$ for the normalized highest
projection and $D_A=\pi L_A$ as in
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]. In the source
parameter $s$,

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

**Given:** The data $I=\{0\}$, $\Lambda=2\Lambda_0$, charge $(0,0)$, the Fock
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

1.1 **The four monomials and the label sets.** For $I=\{0\}$ the admissible letters are $0$ and the shifted letter $1$, level two gives the two fundamental tensor factors, and the tenable monomials of $V\otimes V$ in the two-factor window are $00,01,10,11$; a bipartition $(a;b)$ with $a+b\le2$ has column-strict tableaux with entries $0\le$ entries and row-weak inequalities exactly for $ab=00,01,11$, while $10$ is column-strict but reverse-standard, so $\mathrm{Std}=\{00,01,11\}$ and $\mathrm{Rev}=\{00,10,11\}$; the Bruhat order on the two-entry column has $01<10$. The residue content is the difference from the vacuum weight, giving content $0$ for $00$, $\alpha_0$ for $01,10$ and $2\alpha_0$ for $11$, so the tower degrees are $0,1,2$ and $I_{\alpha_0}=\{(0)\}$. [given, algebra]

1.2 **The transition vectors.** On the mixed two-dimensional weight space the ordinary Fock bar satisfies $\psi M_{10}=M_{10}+(s^{-1}-s)M_{01}$ and fixes the other three monomials, so the triangularity conditions $L_B=M_B+\sum_{C<B}s\mathbb Z[s]M_C$ give $L_{10}=M_{10}-sM_{01}$ and $L_{00}=M_{00}$, $L_{01}=M_{01}$, $L_{11}=M_{11}$; the canonical family is $T_{10}=M_{10}+s^{-1}M_{01}$, and the quasi-canonical vector is $P_{01}=M_{01}+sM_{10}=sT_{10}$. Inverting the triangular matrix gives $M_{10}=L_{10}+sL_{01}$, so the ambient $d$-matrix has $d_{01,10}=s$ and is the inverse of the $L$-in-$M$ chart, not its transpose. [given, algebra]

1.3 **The normalized projection.** The highest vector is $M_{00}$, not $M_{01}$, since $E_0M_{01}=M_{00}$. The normalized projection fixes the highest constituent and kills the off-standard vector $L_{10}$. The identity $T_{10}-L_{10}=(s+s^{-1})M_{01}$ therefore gives $D_{01}=\pi M_{01}=T_{10}/(s+s^{-1})$. Also $M_{10}=L_{10}+sL_{01}$ gives $\pi M_{10}=sD_{01}$, while $\pi L_{10}=0$. The endpoints are $D_{00}=M_{00}$ and $D_{11}=M_{11}$; at parameter one $D_{01}=(M_{01}+M_{10})/2$. This follows from the actual kernel and highest normalization, without an undefined odd-vector rule. [given, step 1.2, algebra]

2.1 **The decomposition matrix.** By [F1] the entries are $d_{A,B}(1)$ read off from step 1.2: on the standard columns $00,01,11$ the matrix is the identity, and the single mixed entry is $d_{01,10}(1)=1$, so the $3\times4$ matrix is $\bigl(\begin{smallmatrix}1&0&0&0\\0&1&1&0\\0&0&0&1\end{smallmatrix}\bigr)$. By [F2] the classes are $S_{00}=D_{00}$, $S_{01}\cong S_{10}\cong D_{01}$ and $S_{11}\cong D_{11}$, so the nonstandard Specht label $10$ has a nonzero decomposition entry while $D_{10}$ is not a simple label; the square submatrix on the standard columns is the identity, in particular unitriangular, and the rectangular matrix is not claimed to be an invertible unitriangular square matrix. [step 1.2, step 1.3, F1, F2, given, algebra]

2.2 **The supported blocks.** Set $x=x_1$, $y=x_2$, $u=s_1$. The defining relations of [[def-degenerate-cyclotomic-hecke-algebra]] give $u^2=1$, $[x,y]=0$, $ux=yu-1$, $uy=xu+1$ and $x^2=0$ in the relevant degree; from $ux^2=0$ and the cross relations one obtains $y^2u=x+y$, hence $y^2=(x+y)u$, and reducing the relation $y^2=(x+y)u$ decreases the $y$-exponent while killing $x$-exponents at least $2$, so the eight words $1,x,y,xy,u,xu,yu,xyu$ span the degree-$2$ algebra. Map these generators to $(N,-N,-J)$ on $M_2(\mathbb C)$ with $N=E_{12}$ and $J$ the swap matrix, to $(\epsilon,1+\epsilon,1)$ on $B_+=\mathbb C[\epsilon]/\epsilon^2$, and to $(\epsilon,-1+\epsilon,-1)$ on $B_-=\mathbb C[\epsilon]/\epsilon^2$; direct matrix computation verifies $u^2=1$, $[x,y]=0$, $x^2=0$, $ux=yu-1$ and $uy=xu+1$ in all three factors. The central element $z=x+y$ has images $0$, $1+2\epsilon$ and $-1+2\epsilon$, and the Hermite polynomials $E_0=(1-z^2)^2$, $E_\pm=(1-E_0\pm(3z-z^3)/2)/2$ map to the three separate identities; each factor is generated by its images of $x$ and $u$, so the map from the span of the eight words onto the eight-dimensional product is surjective and hence, by the spanning bound, an isomorphism. The $I=\{0\}$ spectral content cut keeps the factor $M_2(\mathbb C)$ at content $2\alpha_0$ and discards the adjacent-content factors, so the supported degree-$2$ block is $M_2(\mathbb C)$ with simple dimension $2$; degree one is $\mathbb C[x]/x^2$ with simple dimension $1$ at content $\alpha_0$, and degree zero is $\mathbb C$. Higher supported degrees vanish because they would give nonzero weight spaces of the irreducible highest weight module below the ground, which do not exist. [step 1.1, given, algebra]

3.1 **Conclusion.** Steps 1.1-2.1 verify the transition, projection and decomposition statements, including the inverse-chart entry $d_{01,10}(1)=1$ in place of any negative transposed-inverse value, the identity on standard columns and the absence of an off-standard simple $D_{10}$; step 2.2 verifies the block dimensions $1,1,2$ at contents $0,\alpha_0,2\alpha_0$ of the supported tower and the vanishing of higher supported degrees. The two further adjacent-residue degree-$2$ blocks of the full algebra are outside this supported window and are treated in the companion showcase; no unprojected monomial is used as a simple class. [step 2.1, step 2.2, given] ∎
