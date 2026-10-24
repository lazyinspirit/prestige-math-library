---
id: ex-the-three-term-rouquier-braid-equivalence-in-type-a-two
kind: example
title: "The three-term Rouquier braid equivalence in type A2"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [lem-the-rank-one-soergel-bimodule-square-splits, lem-rouquier-complexes-satisfy-the-three-term-braid-relation, def-positive-and-negative-rouquier-generator-complexes, thm-rank-two-type-a-soergel-bimodule-decompositions, def-the-rank-two-longest-type-a-soergel-bimodule, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]
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
      locator: "Proposition 3.2 (the $m_{st}=3$ case), PDF pp. 8-9"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10, second relation, and Example 3.5, printed pp. 543-544"
    - title: "Nicolas Libedinsky, Gentle introduction to Soergel bimodules I: the basics, São Paulo J. Math. Sci. 13 (2019), arXiv:1702.00039v2, §4"
      url: "https://arxiv.org/pdf/1702.00039"
      locator: "§4.3-4.4: the four bimodule maps, idempotent (23), and the longest summand, PDF pp. 23-26"
verification:
  precheck: pass
---

## Example

In type $A_2$ ($n=3$, $s=s_1$, $t=s_2$) the example writes the two $8$-term
complexes $F_sF_tF_s$ and $F_tF_sF_t$ explicitly, applies the decompositions
$B_sB_tB_s\cong B_{sts}\oplus B_s$ and $B_tB_sB_t\cong B_{sts}\oplus B_t$
together with $B_sB_s\cong B_s(1)\oplus B_s(-1)$ and
$B_tB_t\cong B_t(1)\oplus B_t(-1)$, exhibits the contractible summands (with
extra bimodule $B_s$ respectively $B_t$) and their contracting homotopies, and
identifies the surviving common complex built from $B_{sts}$; the explicit
chain maps then realize $F_sF_tF_s\simeq F_tF_sF_t$ with no shift. All terms,
the shifts of $B_{sts}$, and the differentials of the surviving complexes are
displayed.

## Facts & Assumptions

**Given:** The adjacent simple reflections $s=s_1$, $t=s_2$ of $S_3$, the complexes $F_s,F_t$ of [[def-positive-and-negative-rouquier-generator-complexes]], and the rank-two longest bimodule $B_{sts}=R\otimes_{R^{S_3}}R(3)$ of [[def-the-rank-two-longest-type-a-soergel-bimodule]].

[F1] *Rank one.* $B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$ and $B_t\otimes_RB_t\cong B_t(1)\oplus B_t(-1)$, split by the middle-slot idempotents attached to $R=R^s\oplus\alpha_sR^s$ and $R=R^t\oplus\alpha_tR^t$; the summands are $\mathrm{im}(e_+)\cong B_\bullet(1)$ and $\mathrm{im}(e_-)\cong B_\bullet(-1)$. ([[lem-the-rank-one-soergel-bimodule-square-splits]])

[F2] *Rank two.* $B_sB_tB_s\cong B_{sts}\oplus B_s$ and $B_tB_sB_t\cong B_{sts}\oplus B_t$ with no additional shift. ([[thm-rank-two-type-a-soergel-bimodule-decompositions]], [[def-the-rank-two-longest-type-a-soergel-bimodule]])

[F3] *Gaussian elimination.* An invertible differential block $\varphi:U\to V$ in a fixed biproduct decomposition of two adjacent terms can be cancelled, leaving a homotopy equivalent reduction and a contractible two-term complex $[U\xrightarrow{\varphi}V]$. ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]])

[F4] *Totalization.* The signed tensor totalization of three two-term complexes is concentrated in cohomological degrees $0,1,2,3$, with the terms obtained by choosing one term from each factor and the Koszul differential; a unit term contributes its factor $R(\pm1)$ in the corresponding cohomological degree. ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]])

[F5] The three-term relation is $F_sF_tF_s\simeq F_tF_sF_t$ with no grading shift. The specific splitting and maps used in this example will be checked locally below. ([[lem-rouquier-complexes-satisfy-the-three-term-braid-relation]])

## Verification

**Proof technique:** direct.

1.1 Put $S=B_s$, $T=B_t$, $L=B_{sts}$. The terms of $K=F_sF_tF_s$ in degrees $0,1,2,3$ are $STS$, $U\oplus V\oplus W=(TS)(1)\oplus(SS)(1)\oplus(ST)(1)$, $A\oplus B\oplus C=S(2)\oplus T(2)\oplus S(2)$, and $R(3)$. The complex $K'$ has this list with $s,t$ exchanged. With $m_s,m_t$ denoting multiplication, $$d_K^0=(m_s\otimes1\otimes1,1\otimes m_t\otimes1,1\otimes1\otimes m_s),\qquad d_K^2=(m_s,-m_t,m_s),$$ and $$d_K^1=\begin{pmatrix}-m_t\otimes1&m_s\otimes1&0\\-1\otimes m_s&0&m_s\otimes1\\0&-1\otimes m_s&1\otimes m_t\end{pmatrix}.$$ In particular every component of $d^1d^0$ cancels in pairs, and the same holds for $d^2d^1$. [F4, given, algebra]

1.2 Write $x=x_1$, $y=x_2$, $z=x_3$, $\beta_s=x-y$, $\beta_t=y-z$ and $D_s(f)=(f-s(f))/(2\beta_s)$; these are coordinate roots, rather than the balanced roots used for negative generators. Define $$J(r\otimes r')=-r\otimes\beta_t\otimes1\otimes r'-r\otimes1\otimes\beta_t\otimes r',\qquad p(r\otimes f\otimes g\otimes r')=rD_s(fg)\otimes r'.$$ The coefficient operator $D_s$ is $R^s$-linear, so $p$ is balanced across the outer $R^s$ dividers and middle multiplication is $R^t$-balanced. Unit insertion into $SS$ is balanced, and $\beta_t\otimes1+1\otimes\beta_t$ is central in $T$ because $R=R^t\oplus\beta_tR^t$ and $\beta_t^2\in R^t$; hence $J$ is a bimodule map. The shifts make both maps degree zero. The identity $s(\beta_t)=\beta_t+\beta_s$ gives $D_s(\beta_t)=-1/2$ and $pJ=1_S$. [F1, given, algebra]

2.1 The map $j:L\to STS$, $j(r\otimes r')=r\otimes1\otimes1\otimes r'$, is balanced since $R^{S_3}$ slides across all dividers, and $pj=0$. To identify its image, expand the second middle slot in the $R^t$-basis $\{1,z\}$ and slide invariant coefficients into the first middle slot; expand that slot in the $R^s$-basis $\{1,x\}$ and slide coefficients left. Since $z\in R^s$ slides right, $STS$ is generated as a bimodule by $g_0=1\otimes1\otimes1\otimes1$ and $g_x=1\otimes x\otimes1\otimes1$. For $e=Jp$ and $u=x+y-z$, balancing gives $$(1-e)g_0=g_0,\qquad (1-e)g_x=\tfrac12(ug_0+g_0u).$$ Indeed $p(g_x)=\tfrac12(1\otimes1)$ and the two middle $\beta_t$ tensors sum to $ug_0+g_0u-2g_x$. Therefore $\ker p=\operatorname{im}(1-e)=\operatorname{im}j$. By F2 and $pJ=1$, $L$ and $\ker p$ have equal finite dimensions in every graded degree, so $j$ is an isomorphism onto $\ker p$. Thus the specific splitting is $K^0=j(L)\oplus J(S)$. [F1, F2, step 1.2, algebra]

3.1 Split $V=(SS)(1)=V_+\oplus V_-=S(2)\oplus S$ by F1 using the coordinate middle root $\beta_s$, a unit multiple of the balanced root. Projection to $V_-$ is $r\otimes f\otimes r'\mapsto rD_s(f)\otimes r'$, whose composite with the $V$ component of $d_K^0$ is $p$. It is the identity on $J(S)$ and zero on $j(L)$. Cancel the identity pair $S\to V_-$ by F3. The surviving $L$ components into $U,V_+,W$ are the outer-unit inclusions with signs $+,+,+$. [F1, F3, step 1.1, step 1.2, step 2.1]

4.1 The second pivot is $V_+\to A=1_{S(2)}$, while its component into $C$ is $-1_{S(2)}$. Gaussian elimination deletes this pair and replaces the old $C$ row by the sum of the old $C$ and $A$ rows. In degrees $0,1,2,3$ the survivor is $$H:\quad L\xrightarrow{d_H^0}(TS)(1)\oplus(ST)(1)\xrightarrow{d_H^1}S(2)\oplus T(2)\xrightarrow{d_H^2}R(3),$$ with $$d_H^0=(j_{ts},j_{st}),\qquad d_H^1=\begin{pmatrix}-m_t\otimes1&1\otimes m_t\\-1\otimes m_s&m_s\otimes1\end{pmatrix},\qquad d_H^2=(m_s,-m_t),$$ where $j_{ts}(r\otimes r')=r\otimes1\otimes r'$ and likewise for $j_{st}$. These are the remaining $U,W$ components of the preceding differential and $C,B$ components of the following one. [F3, step 1.1, step 3.1, algebra]

5.1 Apply steps 1.2–4.1 to $K'$ with $s,t$ exchanged. Here $D_t(\beta_s)=-1/2$; the complement calculation is transported by $x\leftrightarrow z$, negating both coordinate roots and leaving $Jp$ unchanged. Reorder its survivor $H'$ into the displayed order for $H$. Its differentials are $d_{H'}^0=d_H^0$, $d_{H'}^1=-d_H^1$, $d_{H'}^2=-d_H^2$, by exchanging the rows and columns of the displayed middle matrix. Thus the degreewise map $q=(1,1,-1,1):H\to H'$ is a chain isomorphism. Every term and map has the same written internal shifts. [step 1.2, step 2.1, step 3.1, step 4.1, algebra]

6.1 For a pivot block $\begin{pmatrix}a&b\\c&1\end{pmatrix}$, the Gaussian chain isomorphism $T$ has components $T^n=\begin{pmatrix}1&0\\c&1\end{pmatrix}$, $T^{n+1}=\begin{pmatrix}1&-b\\0&1\end{pmatrix}$ and identity elsewhere. Its inclusion, projection and homotopy are $\iota=T^{-1}\operatorname{in}$, $\pi=\operatorname{pr}T$, $h=T^{-1}kT$, where $k$ sends the pivot target back to its source by the identity and vanishes elsewhere. Compose the two eliminations by $i=\iota_1\iota_2$, $p=\pi_2\pi_1$, $h=h_1+\iota_1h_2\pi_1$, and similarly for $K'$. F3 gives $pi=1_H$ and $1_K-ip=dh+hd$, and the primed identities. All entries are the neighboring blocks displayed above. Thus the explicit chain maps $$\Phi=i'qp:K\to K',\qquad\Psi=iq^{-1}p':K'\to K$$ satisfy $\Psi\Phi=ip$ and $\Phi\Psi=i'p'$, with the written contractions. This verifies the relation of F5 with no grading shift. [F3, F5, step 3.1, step 4.1, step 5.1] ∎
