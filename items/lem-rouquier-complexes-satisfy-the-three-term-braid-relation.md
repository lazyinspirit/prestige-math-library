---
id: lem-rouquier-complexes-satisfy-the-three-term-braid-relation
kind: lemma
title: "Rouquier complexes satisfy the three-term braid relation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-positive-and-negative-rouquier-generator-complexes, thm-rank-two-type-a-soergel-bimodule-decompositions, def-the-rank-two-longest-type-a-soergel-bimodule, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-invertible-differential-block-and-schur-complement-reduction, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, lem-the-rank-one-soergel-bimodule-square-splits]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Proposition 3.2 and Lemma 3.1(i), arXiv pp. 7-9"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10, second relation, printed p. 544 and Example 3.5"
    - title: "Nicolas Libedinsky, Gentle introduction to Soergel bimodules I: the basics, São Paulo J. Math. Sci. 13 (2019), arXiv:1702.00039v2, §4"
      url: "https://arxiv.org/pdf/1702.00039"
      locator: "§4.3-4.4: the four bimodule maps, the idempotent (23), and its complementary summand, PDF pp. 23-26"
verification:
  precheck: pass
---

## Statement

For $1\le i\le n-2$, with $s=s_i$ and $t=s_{i+1}$,
$$F_i\otimes_RF_{i+1}\otimes_RF_i\ \simeq\ F_{i+1}\otimes_RF_i\otimes_RF_{i+1}\qquad\text{in }K^b(R^e\text{-grmod}),$$
with no grading shift. More precisely, expanding the two total complexes gives
$8$-term complexes; using $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$ and the
rank-two decompositions $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and
$B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ with no shift on any
summand, each complex is a direct sum of a contractible summand whose extra
bimodule is $B_i$, respectively $B_{i+1}$, and which has an invertible
differential block, and a surviving complex built from $B_{i,i+1,i}$;
cancelling the contractible summands is Gaussian elimination, and the two
survivors have the same terms and shifts, with differentials identified by
the degreewise sign isomorphism $(1,1,-1,1)$ written below. Thus the displayed
homotopy equivalence holds. The chain maps and contractions are written
explicitly.

## Facts & Assumptions

**Given:** Adjacent indices $i,i+1$ with $1\le i\le n-2$, the complexes $F_i,F_{i+1}$ of [[def-positive-and-negative-rouquier-generator-complexes]] and the Bott–Samelson products $B_iB_{i+1}B_i=B_i\otimes_RB_{i+1}\otimes_RB_i$, $B_{i+1}B_iB_{i+1}$.

[F1] *Rank one.* $B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$ and $B_{i+1}\otimes_RB_{i+1}\cong B_{i+1}(1)\oplus B_{i+1}(-1)$, with the summands the middle-slot idempotent images of the decomposition $R=R^{s}\oplus\alpha_sR^{s}$, respectively $R=R^{t}\oplus\alpha_tR^{t}$. ([[lem-the-rank-one-soergel-bimodule-square-splits]]).

[F2] *Rank two.* $B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i$ and $B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}$ with no additional shift, where $B_{i,i+1,i}=R\otimes_{R^{W_{i,i+1}}}R(3)$ is the rank-two longest bimodule ([[thm-rank-two-type-a-soergel-bimodule-decompositions]], [[def-the-rank-two-longest-type-a-soergel-bimodule]]).

[F3] *Gaussian elimination.* An invertible differential block $\varphi:U\to V$ in a fixed biproduct decomposition of two adjacent terms of a cochain complex can be cancelled: the complex is homotopy equivalent to the reduction obtained by deleting $U,V$ and replacing the differential by its Schur complement, and the deleted part is the contractible two-term complex $[U\xrightarrow{\varphi}V]$ ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[def-invertible-differential-block-and-schur-complement-reduction]]).

[F4] *Totalization.* The signed tensor totalization of bounded complexes is associative up to the canonical degree-zero reassociation and has Koszul differential $d(x\otimes y)=d(x)\otimes y+(-1)^px\otimes d(y)$; a shift on a factor is a shift on the tensor product with the same totalization differential ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

## Proof


**Proof technique:** two explicit Gaussian eliminations to a symmetric four-term complex.

1.1 Write $S=B_s$, $T=B_t$, $L=B_{i,i+1,i}$, and let $m_s,m_t$ be multiplication. The total complex $K=F_sF_tF_s$ has terms $STS$, $(TS)(1)\oplus(SS)(1)\oplus(ST)(1)$, $S(2)\oplus T(2)\oplus S(2)$ and $R(3)$ in degrees $0,1,2,3$. Call the degree-one terms $U,V,W$ and degree-two terms $A,B,C$, in this order. The tensor signs give $d^0=(m_s\otimes1\otimes1,1\otimes m_t\otimes1,1\otimes1\otimes m_s)$; $d^1$ has blocks $U\to A=-m_t\otimes1$, $U\to B=-1\otimes m_s$, $V\to A=m_s\otimes1$, $V\to C=-1\otimes m_s$, $W\to B=m_s\otimes1$, $W\to C=1\otimes m_t$, and the other blocks zero; $d^2=(m_s,-m_t,m_s)$. [F4, algebra]

1.2 Put $x=x_i$, $y=x_{i+1}$, $z=x_{i+2}$ and use the coordinate roots $\beta_s=x-y$, $\beta_t=y-z$, distinct from the balanced roots in the generator definition. Set $D_s(f)=(f-s(f))/(2\beta_s)$, the coefficient of $\beta_s$ in $R=R^s\oplus\beta_sR^s$. Define $$J(r\otimes r')=-r\otimes\beta_t\otimes1\otimes r'-r\otimes1\otimes\beta_t\otimes r',\qquad p(r\otimes f\otimes g\otimes r')=rD_s(fg)\otimes r'.$$ The map $p:STS\to S$ is balanced because $D_s$ is $R^s$-linear and the middle multiplication is $R^t$-balanced. For $J:S\to STS$, unit insertion into $SS$ is $R^s$-balanced, and insertion of $\beta_t\otimes1+1\otimes\beta_t$ into the middle $T$ is a bimodule map: this element commutes with $R$, by $R=R^t\oplus\beta_tR^t$ and $\beta_t^2\in R^t$. Both $J$ and $p$ have internal degree zero. Since $s(\beta_t)=\beta_t+\beta_s$, one has $D_s(\beta_t)=-1/2$ and hence $pJ(r\otimes r')=-2rD_s(\beta_t)\otimes r'=r\otimes r'$. [F1, given, algebra]

2.1 Define $j:L\to STS$ by $j(r\otimes r')=r\otimes1\otimes1\otimes r'$; invariants in $R^{\langle s,t\rangle}$ slide across all three dividers, so $j$ is balanced and degree zero, and $pj=0$. The bimodule $STS$ is generated by $g_0=1\otimes1\otimes1\otimes1$ and $g_x=1\otimes x\otimes1\otimes1$: first expand the second middle slot in the $R^t$-basis $\{1,z\}$ and slide its invariant coefficients to the first middle slot, then expand that slot in the $R^s$-basis $\{1,x\}$ and slide its invariant coefficients left; the remaining $z$ in the second middle slot slides right because $z\in R^s$. Let $e=Jp$. With $u=x+y-z$, balancing gives $p(g_0)=0$, $p(g_x)=\tfrac12(1\otimes1)$ and $$(1-e)g_0=g_0,\qquad (1-e)g_x=\tfrac12(ug_0+g_0u),$$ since the two inserted $\beta_t$ tensors sum to $ug_0+g_0u-2g_x$. Thus $\ker p=\operatorname{im}(1-e)=\operatorname{im}j$. By F2 and $pJ=1$, $\ker p$ and $L$ have equal dimensions in each graded degree; these dimensions are finite because $R$ is a polynomial ring with positive-degree variables. The graded surjection $j:L\to\ker p$ is therefore an isomorphism. This establishes the specific decomposition $STS=j(L)\oplus J(S)$ without assuming splitting maps from the abstract decomposition. [F1, F2, step 1.2, algebra]

3.1 In $V=(SS)(1)$ use the coordinate middle decomposition $V_+\oplus V_-=S(2)\oplus S$; replacing the balanced root by its unit multiple $\beta_s$ changes neither summand. Projection to $V_-$ is the coefficient map $r\otimes f\otimes r'\mapsto rD_s(f)\otimes r'$. Its composite with the $V$ component of $d^0$ is exactly $p$, so the block $J(S)\to V_-$ is $pJ=1$ and the block $j(L)\to V_-$ is zero. Cancel this identity pivot by F3. The surviving degree-zero term is $L$, and its components into $U,V_+,W$ are the outer-unit inclusions with signs $+,+,+$, since $d^0j(r\otimes r')$ inserts a middle $1$ in each of those terms. [F1, F3, step 1.1, step 1.2, step 2.1]

4.1 The next pivot is $V_+\to A$: multiplication on $r\otimes1\otimes r'$ sends it to $r\otimes r'$, so it is the identity $S(2)\to S(2)$. Its component into $C$ is minus the identity. Cancel this pivot by F3; the Schur complement replaces the $C$ row by the sum of the old $C$ and $A$ rows. The resulting complex $H$ is $$L\longrightarrow (TS)(1)\oplus(ST)(1)\longrightarrow S(2)\oplus T(2)\longrightarrow R(3),$$ with $d_H^0=(j_{ts},j_{st})$, where $j_{ts}(r\otimes r')=r\otimes1\otimes r'$ and likewise for $j_{st}$, and $$d_H^1=\begin{pmatrix}-m_t\otimes1&1\otimes m_t\\-1\otimes m_s&m_s\otimes1\end{pmatrix},\qquad d_H^2=(m_s,-m_t).$$ The preceding differential retains its $U,W$ components under the elimination, and the following differential retains its $C,B$ components; these are the displayed formulas. Each map has internal degree zero with the written shifts. [F1, F3, F4, step 1.1, step 3.1, algebra]

5.1 For $K'=F_tF_sF_t$, repeat steps 1.2–3.1 with $s,t$ exchanged; $D_t(\beta_s)=-1/2$ gives the same identity pivot. The complement calculation follows by interchanging $x,z$, which negates both coordinate roots and therefore leaves $Jp$ unchanged. Put its survivors into the same order $L$, $(TS)(1)\oplus(ST)(1)$, $S(2)\oplus T(2)$, $R(3)$. The resulting $H'$ has $d_{H'}^0=d_H^0$, $d_{H'}^1=-d_H^1$ and $d_{H'}^2=-d_H^2$, as follows by exchanging $s,t$ in the matrix of step 4.1 and reordering its two rows and columns. Hence the degreewise maps $(1,1,-1,1)$ form an explicit chain isomorphism $q:H\to H'$. [step 1.2, step 2.1, step 3.1, step 4.1, algebra]

6.1 For either identity pivot write the differential block as $\begin{pmatrix}a&b\\c&1\end{pmatrix}$. The Gaussian chain isomorphism $T$ to the reduced complex plus the identity pair has components $T^n=\begin{pmatrix}1&0\\c&1\end{pmatrix}$ and $T^{n+1}=\begin{pmatrix}1&-b\\0&1\end{pmatrix}$, and identity elsewhere. Its retraction is $\pi=\operatorname{pr}T$, inclusion $\iota=T^{-1}\operatorname{in}$ and homotopy $h=T^{-1}kT$, where $k$ is the identity from the pivot target back to its source and zero elsewhere. For the two eliminations set $i=\iota_1\iota_2$, $p=\pi_2\pi_1$, $h=h_1+\iota_1h_2\pi_1$, and similarly $i',p',h'$ for $K'$. F3 gives $pi=1_H$, $1_K-ip=dh+hd$ and the primed identities. Thus $\Phi=i'qp$ and $\Psi=iq^{-1}p'$ are explicit homotopy-inverse chain maps. All entries are the displayed neighboring blocks and identity pivots, with internal degree zero, so no grading shift is introduced. [F3, step 3.1, step 4.1, step 5.1] ∎

## Remarks

The local splitting calculation uses coordinate roots, as in Libedinsky §§4.3–4.4. These roots differ by unit signs from the balanced roots of the generator definition; the positive differentials are multiplication and do not change. The abstract rank-two decomposition is used only for the graded dimension comparison in step 2.1. The specific splitting maps and both identity pivots are verified here.
