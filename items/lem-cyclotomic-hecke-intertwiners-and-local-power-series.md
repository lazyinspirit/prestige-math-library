---
id: lem-cyclotomic-hecke-intertwiners-and-local-power-series
kind: lemma
title: "Cyclotomic Hecke intertwiners and local power series"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-cyclotomic-hecke-central-content-sector-notation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
---

## Statement

Let $H^\Lambda_\alpha$ be a central content sector (possibly zero) as in
[[def-cyclotomic-hecke-central-content-sector-notation]], with the residue
tuples $i=(i_1,\dots,i_d)$ contained in a fixed index set $I_\alpha$.

1. Set $y_r:=\sum_{i\in I_\alpha}(x_r-i_r)e(i)$ in the degenerate case and
   $y_r:=\sum_{i\in I_\alpha}(1-q^{-i_r}X_r)e(i)$ in the nondegenerate case
   ($1\le r\le d$). Then $y_1,\dots,y_d$ are commuting nilpotent elements of
   $H^\Lambda_\alpha$; consequently every rational expression displayed below,
   expanded as a power series in the nilpotent $y$'s, is a finite and
   well-defined element of $H^\Lambda_\alpha$.
2. The power series
   $$p_r(i):=\begin{cases}1,&i_r=i_{r+1},\\ (i_r-i_{r+1}+y_r-y_{r+1})^{-1},&i_r\ne i_{r+1}\end{cases}$$
   (degenerate case), respectively
   $$P_r(i):=\begin{cases}1,&i_r=i_{r+1},\\ (1-q)\bigl(1-y_r(i)y_{r+1}(i)^{-1}\bigr)^{-1},&i_r\ne i_{r+1},\end{cases} \qquad y_r(i):=q^{i_r}(1-y_r)$$
   (nondegenerate case), satisfy (3.23)–(3.25) respectively (4.24)–(4.26),
   (4.28)–(4.30) and (4.32); and the intertwining elements
   $$\varphi_r:=\sum_i\bigl(s_r+p_r(i)\bigr)e(i),\qquad \Phi_r:=\sum_i\bigl(T_r+P_r(i)\bigr)e(i)$$
   satisfy all identities (3.14)–(3.20) of the source's Lemma 3.1,
   respectively (4.14)–(4.20) of its Lemma 4.1.
3. There exist invertible power series $q_r(i)\in F[\![y_r,y_{r+1}]\!]$
   (respectively $Q_r(i)$) satisfying (3.27)–(3.29), respectively
   (4.33)–(4.35); the explicit candidates (3.30) respectively (4.36) do, and
   for them the identity (3.43) respectively (4.44) holds.

## Facts & Assumptions

**Given:** The cyclotomic Hecke algebra $H^\Lambda=H^\Lambda_d$ of [[def-affine-and-cyclotomic-type-a-hecke-algebras]] with its central content sectors $H^\Lambda_\alpha$ and projectors $e(i)$ ([[def-cyclotomic-hecke-central-content-sector-notation]]), and the notation of the Statement.

[F1] On the summand $e(i)$ the polynomial generator has the single generalized residue $i_r$: in the degenerate branch $x_r-i_r$ is nilpotent on $e(i)$, and in the nondegenerate branch $q^{-i_r}X_r-1$ is nilpotent on $e(i)$; the $y_r$ are commuting sums of these, hence commuting nilpotents ([[def-cyclotomic-hecke-central-content-sector-notation]]).

[F2] The divided-difference convention is $\partial_r(f)=(s_rf-f)/(y_r-y_{r+1})$, and on equal colours $i_r=i_{r+1}$ the intertwiners reduce to $\varphi_r=s_r+1$ respectively $\Phi_r=T_r+1$ ([[def-affine-and-cyclotomic-type-a-hecke-algebras]]).

## Proof

**Proof technique:** direct.

**Given:** The data of the Statement and the facts above.

1.1 Finite evaluation. On each projector $e(i)$ the dots are commuting nilpotents by [F1]. If $y_r^{n_r}=0$, every monomial of total degree greater than $\sum_r(n_r-1)$ vanishes. Thus formal series have finite evaluation, and $c+f$ with $c\ne0$ and $f$ of positive degree has inverse $c^{-1}\sum_{k\ge0}(-f/c)^k$. Unequal-colour spectral differences have nonzero scalar constant; equal-colour dot differences will only be used as formal divided differences, never inverted in the cyclotomic algebra. [F1, algebra]

1.2 A faithful formal calculation convention. Temporarily take independent dots $u_1,\ldots,u_d$ and a separate copy of their fraction field for each colour word. Let $S_r$ swap both positions and their dots; write multiplication on the right of $S_r$. For spectral variables $A,B$, put $\widehat p=(A-B)^{-1}$ in DG and $\widehat P=(1-q)B/(B-A)$ in NG, even on equal colours. The affine Hecke operator is $H_r=S_r(1-\widehat p)-\widehat p$ in DG and $H_r=S_r(1-\widehat P)-\widehat P$ in NG. For precision the formal calculation algebra has coefficients $\bigoplus_i F[\![u_1,\ldots,u_d]\!]e(i)$ and the affine generators, with spectral word-sliding: an unequal-colour intertwiner moves $e(i)$ to $e(s_ri)$ and permutes coefficients, while on equal colours the affine mixed relation gives its divided-difference correction. These relations follow in a sector by the CRT projectors and the mixed presentation: multiply the unequal spectral difference by the intertwiner and use its unit inverse; on equal colours use $H+1$. This calculation is faithful before any cyclotomic quotient: move coefficients right by these mixed and word-sliding relations and reduce crossing words by the Coxeter relations to span the finitely many $H_we(i)$; in their crossed-product expansions the coefficient at a reduced permutation $w$ is a product of nonzero rational functions and every proper subword has smaller length. A maximal-length coefficient therefore proves independence, also for formal series coefficients after clearing their finitely many difference denominators. Consequently an identity between regular formal expressions can be checked in this rational model and then evaluated at nilpotent dots. This is a calculation in the affine presentation, not an assumption that its cyclotomic quotient acts faithfully. [F2, algebra]

2.1 Explicit normalization. Write $u=y_r,v=y_{r+1}$, $p=(i_r-i_{r+1}+u-v)^{-1}$ on unequal DG colours, and $A=q^{i_r}(1-u),B=q^{i_{r+1}}(1-v)$ on NG colours. In the order equal, unrelated, forward arrow, backward arrow, double edge, choose $q_r(i)$ to be $1+v-u$, $1-p$, $(1-p^2)/(v-u)$, $1$, $(1-p)/(v-u)$, respectively, and choose $Q_r(i)$ to be $1-q+qv-u$, $(A-qB)/(A-B)$, $(A-qB)/(A-B)^2$, $q^{i_r}$, $q^{i_r}/(A-B)$, respectively. These are the actual five branches, including $e=2$. For DG forward colours $i_r-i_{r+1}=-1$, so $1-p^2=(v-u)(2-u+v)/(1-u+v)^2$; on the double edge the field has characteristic two and $1-p=(v-u)/(1+u-v)$. Thus the forward quotient has constant $2\ne0$ unless the pair is a double edge, which uses the separate constant $1$ branch. Unrelated pairs have $i_r-i_{r+1}\ne0,\pm1$, so $1-p$ has nonzero constant. In NG the unequal $A-B$ is a unit; $A-qB$ has nonzero constant except for a backward arrow, whose coefficient is prescribed separately. Hence all five coefficients are units; the equal coefficient has constant $1$ in DG and $1-q\ne0$ in NG. [step 1.1, algebra]

2.2 The full affine coefficient check. In left-coefficient notation $H_{AB}=a_{AB}S+b_{AB}$, use $(h,t)=(1,0)$ in DG and $(q,q-1)$ in NG, where $b_{AB}=-(A-B)^{-1}$ or $(1-q)B/(A-B)$, respectively, and $a_{AB}=h-b_{AB}$. Direct common-denominator multiplication gives $b_{AB}+b_{BA}=t$, $a_{AB}a_{BA}=h+tb_{AB}-b_{AB}^2$, and $b_{AB}b_{BC}=b_{AC}(b_{AB}+b_{BC}-t)$. The mixed relations follow by multiplying $A,B$ on either side; the first two identities give $H^2=tH+h$. For three positions, expansion of either braid word has coefficients, in the order $1,S_1,S_2,S_1S_2,S_2S_1,S_1S_2S_1$, equal to $b_{AC}(h+b_{AB}b_{BC})$, $a_{AB}b_{BC}b_{AC}$, $a_{BC}b_{AB}b_{AC}$, $a_{AB}a_{AC}b_{BC}$, $a_{BC}a_{AC}b_{AB}$, $a_{AB}a_{AC}a_{BC}$. For example the first expansion's constant is $b_{AB}^2b_{BC}+a_{AB}a_{BA}b_{AC}$, which reduces to the displayed constant using the three scalar identities. The $S_1$ coefficient reduces from $a_{AB}(b_{AC}b_{BA}+b_{AB}b_{BC})$ in the same way. Thus this six-coefficient check establishes braid for all spectral triples, including any coincidence of colour labels; spectral variables remain independent at this stage. Disjoint positions commute. [step 1.2, algebra]

3.1 Pair products and interchange. Denote the chosen normalizer by $N_{ij}(u,v)$, the piecewise scalar by $p$ in DG or $P=(1-q)B/(B-A)$ in NG, and put $K_{ij}(u,v)=1,v-u,u-v,(v-u)(u-v)$ in the four unequal-colour cases. Substitution gives $p_{ij}+p_{ji}(v,u)=0$ in DG and $P_{ij}+P_{ji}(v,u)=1-q$ in NG. Also $N_{ij}(u,v)N_{ji}(v,u)K_{ij}(u,v)=1-p_{ij}^2$ in DG and $(1-P_{ij})(q+P_{ij})$ in NG. For the latter equality, its right side is $(B-qA)(A-qB)/((B-A)(A-B))$; forward and backward pairs use $B-qA=q^{i_{r+1}}(u-v)$ and $A-qB=q^{i_r}(v-u)$, respectively, and a double edge uses both. These substitutions prove each branch of the pair-product identities without division by a nonunit. Each coefficient depends only on its ordered two colours and their two dots. Therefore swapping a third position gives the same coefficient of the same ordered pair, proving the three-position interchange identities for $p,P,N$. In particular no square root is chosen. [step 2.1, algebra]

4.1 The intertwiners. On unequal colours $\varphi=S(1-p)$ and $\Phi=S(1-P)$, since the scalar term cancels. Hence they permute the word and the two spectral variables, their squares are the pair products in step 3.1, and they commute at distant positions. On equal colours they are $H+1$; their squares are $2\varphi$ and $(1+q)\Phi$. The equal-colour mixed correction is $1+B-A$ in DG and $qB-A$ in NG, obtained by multiplying the operator $H+1$ by $B$ and subtracting $A(H+1)$. The braid defect is zero unless the outer colours coincide. For all equal colours, expanding $(H_1+1)(H_2+1)(H_1+1)$ minus its reversed word gives $h(\varphi_1-\varphi_2)$ in DG and $q(\Phi_1-\Phi_2)$ in NG (here $h=1$ in DG). For outer equal, middle unequal, write $C_{AB}=1-\widehat p_{AB}$ or $1-\widehat P_{AB}$, and $F_{AB}=C_{AB}C_{BA}$. The middle equal-colour intertwiner contributes either its permutation term or its scalar term $C_{AC}$. The former gives equal longest-permutation coefficients in the two words; the latter gives identity coefficients $F_{AB}C_{AC}$ and $F_{BC}C_{AC}$. Their difference is therefore $C_{AC}(F_{AB}-F_{BC})$. In DG put $p_1=1/(A-B),p_2=1/(B-C)$ and use $p_1+p_2=(A-C)p_1p_2$; then this difference is $(p_1-p_2)(p_1p_2-p_1-p_2)$. In NG, substituting $C_{AC}=(A-qC)/(A-C)$ and $F_{AB}=(A-qB)(B-qA)/(-(A-B)^2)$ cancels the factor $A-C$ and gives $(1-q)^2(AC-B^2)(AB-qBC)/((A-B)^2(B-C)^2)$. Adjacent-equal and distinct-colour patterns have no remaining identity term; their permutation coefficients cancel by the scalar identities of step 2.2. These are precisely the intertwiner identities named in the Statement. [step 3.1, step 2.2, algebra]

5.1 A local crossing calculation that will also serve both relation maps. Put $D_r f=(S_rf-f)/(u_r-u_{r+1})$; every inverse dot difference in an operator formula acts by multiplication on the left unless explicitly included in a right coefficient. On equal colours, $H+1=(S+1)(-N/(u-v))$, since $1-\widehat p=-N/(u-v)$ in DG and $1-\widehat P=-N/(u-v)$ in NG; thus $(H+1)N^{-1}=D$. On unequal colours set $c_{ij}(u,v)=(1-p)/N_{ij}$ or $(1-P)/N_{ij}$, so the normalized crossing is $S_rc_{ij}$ and $c_{ij}(u,v)c_{ji}(v,u)=K_{ij}(u,v)$ by step 3.1. For a formal coefficient $f$, direct subtraction gives $Df=(Sf)D+(Sf-f)/(u-v)$ and $D^2=0$; unequal crossings simply permute coefficients. These formulas prove the dot-sliding and quadratic relations and the compatibility $\psi_r^2N_r(i)S_rN_r(s_ri)=1-p_r(i)^2$ or $(1-P_r(i))(q+P_r(i))$ on unequal colours; on equal colours both sides of the original compatibility identity are zero. [step 3.1, step 4.1, algebra]

6.1 Every braid colour pattern. Write $u,v,w$ for the three dots, $W=S_1S_2S_1$, and $c=c_{ik}$. If all colours are distinct, both crossing braid words have right coefficient $c_{ij}(u,v)c_{ik}(u,w)c_{jk}(v,w)$ at $W$. For $(i,i,k)$ both are $(W-S_1S_2)c(u,w)c(v,w)/(v-w)$; the coefficient product is symmetric in $u,v$, so moving it through $D_1$ adds no divided-difference correction. For $(i,k,k)$ both are $(W-S_2S_1)c(u,v)c(u,w)/(u-v)$, by the same calculation with the product symmetric in $v,w$. In these two formulas the denominator multiplies on the left and the coefficient product multiplies on the right. For $(i,j,i)$ the longest-permutation terms cancel by the ordered-pair interchange of step 3.1; the remaining identity coefficients in $\psi_1\psi_2\psi_1$ and $\psi_2\psi_1\psi_2$ are $-K_{ij}(u,v)/(u-w)$ and $-K_{ij}(w,v)/(u-w)$. Thus their difference is $(K_{ij}(w,v)-K_{ij}(u,v))/(u-w)$, equal to $0,1,-1,u+w-2v$ for unrelated, forward, backward, double-edge pairs. Finally all equal colours give $D_1D_2D_1=D_2D_1D_2=-(1-S_1-S_2+S_1S_2+S_2S_1-W)/((u-v)(u-w)(v-w))$. Each displayed quotient is a formal divided difference; the resulting braid correction is polynomial, including characteristic two. This proves all five cases locally. [step 5.1, algebra]

7.1 Regular identities and conclusion. The rational calculations above express every intertwiner, normalization, dot-sliding, quadratic and braid identity as an identity of regular formal expressions in the affine generators. Faithfulness in step 1.2 licenses clearing the temporary differences, and step 1.1 licenses finite evaluation in the sector. The candidate normalizers and their products give all stated identities, retaining $y_r=1-q^{-i_r}y_r(i)$ in NG. Therefore all three assertions of the Statement hold over the original field, with no algebraic closure or choice principle. [step 1.1, step 3.1, step 4.1, step 6.1] ∎

## Remarks

The temporary difference inverses occur only in the faithful formal calculation. They are not evaluated in a cyclotomic quotient; only the regular identities and the unit normalizers are evaluated there.
