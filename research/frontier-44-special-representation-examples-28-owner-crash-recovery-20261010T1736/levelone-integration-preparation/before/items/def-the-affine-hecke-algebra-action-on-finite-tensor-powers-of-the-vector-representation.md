---
id: def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation
kind: definition
title: "The affine Hecke algebra and its commuting action on tensor powers of the vector representation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-the-level-one-vector-representation-its-affinization-and-energy-function,
       thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]
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
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.2, printed p. 16: coproduct (22) and tensor formulas (23)-(24); sec. 3.3, printed pp. 17-18: presentation of $\\tilde H_r$ (25)-(30), the involution and Prop. 5; sec. 3.4, printed pp. 17-18: action (31)-(32), commutation formula (33) and Prop. 6 with its proof."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.2, printed pp. 3-5: the affine Hecke algebra $\\tilde H_N(q^2)$ with the $S_i^2=(q^2-1)S_i+q^2$ normalisation, its action on tensor powers and its commutation with $U'_q$."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 2.2, printed pp. 9-11: the opposite coproduct $\\Delta_+$ and the rule (2.2.13) compared with the fixed coproduct used here; sec. 3.2, printed pp. 13-14: the $(E1)$-$(E4)$ energy axioms matched by the flipped channel."
---

## Definition

Fix $e\ge2$ and keep all conventions of
[[def-the-level-one-vector-representation-its-affinization-and-energy-function]]:
the Cartan datum, the space $V_{\mathrm{aff}}=\bigoplus_{m\in\mathbb Z}\mathbb Q(q)u_m$
with $u_m=z^av_j$ ($m=j-ae$, $j\in\{1,\dots,e\}$), the operators
$K_h,E_i,F_i$, the classical weights $\lambda_j=\Lambda_j-\Lambda_{j-1}$, and the
fixed coproduct $\Delta(K_h)=K_h\otimes K_h$,
$\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$,
$\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$ of
[[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]].
Put $Q:=q^2$ and $c:=Q-1$, and let $Y_j$ denote the operator "multiply the $j$-th
tensor factor by $z$", so that $Y_j$ is invertible with
$Y_ju_m=u_{m-e}$ in the $j$-th slot and different $Y_j$ commute.

**The affine Hecke algebra $\tilde H_N$.** For $N\ge1$, $\tilde H_N$ is the
unital $\mathbb Q(q)$-algebra with generators $S_1,\dots,S_{N-1}$ and invertible
$Y_1^{\pm1},\dots,Y_N^{\pm1}$ subject to

$$S_i^2=(Q-1)S_i+Q,\qquad S_iS_{i+1}S_i=S_{i+1}S_iS_{i+1},\qquad S_iS_j=S_jS_i\quad(|i-j|\ge2),$$

$$Y_iY_j=Y_jY_i,\qquad S_iY_j=Y_jS_i\quad(j\notin\{i,i+1\}),\qquad S_iY_iS_i=QY_{i+1}.$$

The element $t_i:=-q^{-1}S_i$ then satisfies $(t_i-q)(t_i+q^{-1})=0$; for a
reduced word $w=s_{i_1}\cdots s_{i_k}\in S_N$ put $S_w:=S_{i_1}\cdots S_{i_k}$
and $A_N:=\sum_{w\in S_N}S_w$ (well defined by the braid relations).

**The two-vector operator and its extension.** On residue tensors
$v_j\otimes v_k$ ($j,k\in\{1,\dots,e\}$) set

$$S(v_j\otimes v_k)=\begin{cases}-q\,v_k\otimes v_j,&j<k,\\ -\,v_j\otimes v_j,&j=k,\\ -q\,v_k\otimes v_j+(Q-1)v_j\otimes v_k,&j>k.\end{cases}$$

For a Laurent monomial $f=Y_1^pY_2^q$ define, with $s(f):=Y_2^pY_1^q$ the
swap of the two loop variables,

$$S(f\,w):=s(f)\,S(w)+(1-Q)\,Y_2\,\frac{f-s(f)}{Y_1-Y_2}\,w\qquad(w\in V\otimes V),$$

and extend linearly; the quotient $(f-s(f))/(Y_1-Y_2)$ is a Laurent polynomial,
so $S$ is a well-defined linear endomorphism of $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}$.
On $V_{\mathrm{aff}}^{\otimes N}$ the generator $S_i$ acts by this operator on
the tensor factors $i,i+1$ and $Y_j$ acts on the $j$-th factor as above; this
defines the **affine Hecke action**.

## Facts & Assumptions

**Given:** The integer $e\ge2$ and all data of [[def-the-level-one-vector-representation-its-affinization-and-energy-function]]; the algebra $\tilde H_N$ with generators $S_i,Y_j^{\pm1}$; the two-vector operator $S$ and its loop extension; the fixed coproduct $\Delta$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]].

[F1] $V_{\mathrm{aff}}$ has basis $\{u_m\}_{m\in\mathbb Z}$, $K_hu_m=q^{\langle\mathrm{wt}(u_m),h\rangle}u_m$, $E_iu_m=\delta_{m\equiv i+1}u_{m-1}$, $F_iu_m=\delta_{m\equiv i}u_{m+1}$, and $\mathrm{wt}(u_m)=\lambda_j+a\delta$ for $m=j-ae$; all statements of [[def-the-level-one-vector-representation-its-affinization-and-energy-function]] hold.

[F2] $\Delta(K_h)=K_h\otimes K_h$, $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$, and $\Delta$ is coassociative with counit $\varepsilon$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]); the iterated coproduct $\Delta^{(N)}$ gives the $U_q(\mathfrak g)$-action on $V_{\mathrm{aff}}^{\otimes N}$.

[F3] For every integer $l$, the quotient $(Y_i^l-Y_{i+1}^l)/(Y_i-Y_{i+1})$ equals the finite sum $\sum_{r=0}^{l-1}Y_i^{l-1-r}Y_{i+1}^r$ for $l>0$, the sum $-\sum_{r=1}^{-l}Y_i^{-r}Y_{i+1}^{r+l}$ for $l<0$, and $0$ for $l=0$; hence for every Laurent polynomial $f$ the quotient $(f-s(f))/(Y_1-Y_2)$ is a Laurent polynomial, and the identities $Y_2(f-s(f))/(Y_1-Y_2)=-\sum_{r=1}^{l}Y_1^{l-r}Y_2^r$ hold for $f=\pm Y_1^l$.

[F4] $q$ is transcendental over $\mathbb Q$, so no nonzero rational function in $q$ vanishes; in particular $Q-1$, $q-q^{-1}$ and $Q+1$ are nonzero and the displayed identities are checked coefficientwise in $\mathbb Q(q)$.

[F5] A $U_q(\mathfrak g)$-module homomorphism out of a tensor product is determined on pure tensors: the operators $E_i,F_i,K_h$ act by the displayed formulas, and $\Delta(X)$ is $\mathbb Q(q)$-linear for every $X$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).



## Verification

**Proof technique:** verify the quadratic, braid and Bernstein relations on residue tensors with the loop-shift formulas of [F3], then check the two-factor commutation with the coproduct action in the finitely many residue configurations.

1.1 The two-vector operator $S$ satisfies $S^2=(Q-1)S+Q$ on $V\otimes V$. For $j<k$: $S(v_j\otimes v_k)=-qv_k\otimes v_j$ and $S(v_k\otimes v_j)=-qv_j\otimes v_k+(Q-1)v_k\otimes v_j$, so $S^2(v_j\otimes v_k)=Qv_j\otimes v_k-q(Q-1)v_k\otimes v_j$, which equals $(Q-1)(-qv_k\otimes v_j)+Qv_j\otimes v_k$. For $j=k$: $S=-1$ and $(-1)^2=(Q-1)(-1)+Q$. For $j>k$: $S(v_j\otimes v_k)=-qv_k\otimes v_j+(Q-1)v_j\otimes v_k$ and $S(v_k\otimes v_j)=-qv_j\otimes v_k$, so $S^2(v_j\otimes v_k)=(Q+(Q-1)^2)v_j\otimes v_k-q(Q-1)v_k\otimes v_j$, which equals $(Q-1)(-qv_k\otimes v_j+(Q-1)v_j\otimes v_k)+Qv_j\otimes v_k$ because $(Q-1)^2+Q=Q+(Q-1)^2$. Hence the quadratic relation holds on residue tensors. [F1, F4, given, algebra]

2.1 The loop extension is well defined and satisfies the commutation formula (33). By [F3] the quotient $(f-s(f))/(Y_1-Y_2)$ is a Laurent polynomial for every Laurent polynomial $f$, and $S(fw)=s(f)S(w)+(1-Q)Y_2(f-s(f))/(Y_1-Y_2)w$ is a finite $\mathbb Q(q)$-linear combination of basis tensors, so $S$ extends uniquely from residue tensors and loop monomials to a linear endomorphism of $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}$. For $l>0$ the identity of [F3] gives $SY_1^l=s(Y_1^l)S+(1-Q)Y_2\sum_{r=0}^{l-1}Y_1^{l-1-r}Y_2^r=Y_2^lS+(1-Q)\sum_{r=1}^{l}Y_1^{l-r}Y_2^r$, and for $l<0$ the same computation with the second sum gives $SY_1^l=Y_2^lS+(Q-1)\sum_{r=1}^{-l}Y_1^{-r}Y_2^{r+l}$; these are the two cases of (33). [F3, step 1.1, given, algebra]

2.2 The action commutes with the toral and loop operators on $V_{\mathrm{aff}}^{\otimes N}$. Since $\Delta$ is coassociative by [F2] and $S_i$ acts on two adjacent slots, it is enough to prove $[S,\Delta(X)]=0$ on $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}$ for $X\in\{E_i,F_i,K_h\}$: for $N>2$ the coproduct terms at slots outside $\{i,i+1\}$ commute with $S_i$, and the two terms at slots $i,i+1$ combine as the two-factor coproduct multiplied by toral factors that commute with $S_i$. For $K_h$, $S$ preserves the multiset of slot weights because it permutes residues and $\mathrm{wt}(u_{m-e})=\mathrm{wt}(u_m)-\delta$ by [F1], so the diagonal $\Delta(K_h)=K_h\otimes K_h$ commutes with $S$ coefficientwise by the three cases of step 1.1. For $Y_j$ and any $E_i,F_i$, $Y_j$ shifts the $j$-th index by $-e$, and by [F1] both $Y_jE_i$ and $E_iY_j$ evaluate the residue condition of the shifted index, giving $[Y_j,\Delta(E_i)]=[Y_j,\Delta(F_i)]=0$. [step 1.1, F1, F2, algebra]

2.3 The two-factor commutation $[S,\Delta(X)]=0$ for $X=E_i,F_i$ with $i\ne0$. For $i\ne0$ the operators $E_i,F_i,K_i^{\pm1}$ commute with $Y_1$ and $Y_2$ individually by [F1] (they shift residues, not loop powers), so $\Delta(X)$ commutes with $Y_1,Y_2$; since $S(fw)=s(f)S(w)+(1-Q)Y_2\frac{f-s(f)}{Y_1-Y_2}w$ with a central correction term and $f\,g=g\,f$ for loop monomials $f,g$, the identity $[S,\Delta(X)](fw)=f\,[S,\Delta(X)](w)$ holds, so it suffices to test $w=v_j\otimes v_k$ with $j,k\in\{1,\dots,e\}$. On residue vectors $S$ is the three-case matrix of step 1.1, while $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$ act by the residue rules of [F1]; substituting the possible positions of $j,k$ relative to $\{i,i+1\}$ gives equality in each configuration: if $j\equiv i$ and $k\not\equiv i+1$ then both sides vanish because neither factor can be lowered; if $j\not\equiv i+1$ and $k\equiv i+1$ both sides equal $-q\,v_k\otimes v_{k-1}$ with the common toral factor $q^{\langle\lambda_k,h_i\rangle}$; if $j\equiv i+1$ then both sides equal $-q\,v_{k-1}\otimes v_k$ (resp. its mirror for $F_i$) with the common toral factor $q^{-\langle\lambda_{j},h_i\rangle}$; the remaining configurations with both residues outside $\{i,i+1\}$ give zero on both sides. [step 1.1, F1, F5, algebra]

3.1 The generators of $\tilde H_N$ act on $V_{\mathrm{aff}}^{\otimes N}$ and the defining relations hold. The operators $Y_j$ are invertible and pairwise commuting because they multiply distinct tensor slots by $z$; off-adjacent $S_i,S_j$ commute because they act on disjoint pairs of slots, and $S_iY_j=Y_jS_i$ for $j\notin\{i,i+1\}$ for the same reason. The quadratic relation for $S_i$ is step 1.1 applied to the two slots, transported along the loop extension of step 2.1, and the Bernstein relation $S_iY_iS_i=QY_{i+1}$ follows from the $l=1$ case of step 2.1: $S_iY_i=Y_{i+1}S_i+(1-Q)Y_{i+1}$, so $S_iY_iS_i=Y_{i+1}S_i^2+(1-Q)Y_{i+1}S_i=Y_{i+1}((Q-1)S_i+Q)+(1-Q)Y_{i+1}S_i=QY_{i+1}$. The braid relation: in the three-slot window expand $S_iS_{i+1}S_i$ and $S_{i+1}S_iS_{i+1}$ using step 2.1 on the middle and outer slots; after clearing the Laurent difference $(Y_i-Y_{i+1})(Y_{i+1}-Y_{i+2})(Y_i-Y_{i+1})$ (a nonzero Laurent polynomial) both sides reduce to the same finite sum of Hecke words $S_w$ with coefficients in $\mathbb Q[Y_i^{\pm1},Y_{i+1}^{\pm1},Y_{i+2}^{\pm1}]$, because the finitely many residue cases $(\le,\le),(<,<),(=,=)$ and their mixed forms are checked directly from the three-case definition of $S$ and the geometric sums of [F3]. [step 1.1, step 2.1, F3, F4, given, algebra]

4.1 The two-factor commutation for the affine color. Write a basis vector of $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}$ as $u_a\otimes u_b=Y_1^pY_2^q(v_j\otimes v_k)$ with $p=(j-a)/e$, $q=(k-b)/e$ and $j,k\in\{1,\dots,e\}$, and use the two loop-shift identities $S(Y_1w)=Y_2S(w)+(1-Q)Y_2w$ and $S(Y_2w)=Y_2S(w)$ for residue vectors $w$, which are the $l=1$ and constant cases of step 2.1. For $E_0,F_0$ the affinization of [F1] reads $E_0=Y_1E_0^{\mathrm{fin}}$ on a slot with residue $1$ and $E_0=0$ otherwise, where $E_0^{\mathrm{fin}}:v_1\mapsto v_e$ is a residue operator commuting with the loop variables, and $F_0=Y_1F_0^{\mathrm{fin}}$ with $F_0^{\mathrm{fin}}:v_e\mapsto v_1$; the torals $t_0^{\pm1}$ are residue scalars by [F1]. Expanding $\Delta(E_0)=E_0\otimes t_0^{-1}+1\otimes E_0$ and $\Delta(F_0)=F_0\otimes1+t_0\otimes F_0$ with these decompositions and applying the two loop-shift identities turns each two-factor identity into $Y_2^{\,r}$ times a residue identity, and the factors $Y_2^{\,r}$ and the toral scalars cancel against those of $\Delta(E_0)S(w)$, leaving the finitely many residue identities for $j,k\in\{1,e\}$; these are checked directly from the three-case matrix of step 1.1 together with $q^{\langle\lambda_k,h_0\rangle}=q^{-1}$ for $k\equiv0$ and $q^{\langle\lambda_k,h_0\rangle}=0$ otherwise ($k\equiv1$), and the two nontrivial cases are $j\equiv0,k\not\equiv1$ and $k\equiv0,j\not\equiv1$, all other pairs being obtained by translating both indices by multiples of $e$, which multiplies by $(Y_1Y_2)^r$ and commutes with $S$ (step 3.1), with $\Delta(E_0)$ and with $\Delta(F_0)$ because $\Delta(K_0)$ is toral. Hence $[S,\Delta(E_0)]=[S,\Delta(F_0)]=0$, and with steps 2.2, 2.3 and 4.1 the action of $\tilde H_N$ commutes with $U_q(\mathfrak g)$ on every tensor power; the derived generator $d$ acts by the total loop count, which $S_i$ and $Y_j$ preserve. [step 2.1, step 3.1, step 2.3, F1, F2, F5, algebra]

5.1 Conclusion. The two-vector operator $S$ and its loop extension define a $\tilde H_N$-action on $V_{\mathrm{aff}}^{\otimes N}$: the quadratic, braid, commuting, loop and Bernstein relations hold by steps 1.1, 2.1 and 3.1, and the action commutes with the fixed $U_q(\mathfrak g)$-action including the derived generator $d$ by steps 2.2, 2.3 and 4.1. Consequently $S_w$ is well defined for reduced words and $A_N=\sum_{w\in S_N}S_w$ is a $\mathbb Q(q)$-linear endomorphism of $V_{\mathrm{aff}}^{\otimes N}$ commuting with $U_q(\mathfrak g)$, with $t_i=-q^{-1}S_i$ satisfying $(t_i-q)(t_i+q^{-1})=0$ by step 1.1. [step 3.1, step 2.2, step 2.3, step 4.1] ∎

## Remarks

- The normalization is $S_i^2=(Q-1)S_i+Q$ with $Q=q^2$, so $S_i$ has eigenvalues
  $q^2$ and $-1$; the Leclerc generator $t_i=-q^{-1}S_i$ has eigenvalues
  $q^{-1}$ and $-q$ and satisfies $t_i^2=(q-q^{-1})t_i+1$. The two
  normalizations are used interchangeably in the source and are related by this
  rescaling; all statements below use $S_i$.

- The operator $S_i$ is **not** $R$-symmetric in the naive sense: it is defined
  on the fixed coproduct channel of the library and its loop part is the divided
  difference $Y_{i+1}(f-s_i(f))/(Y_i-Y_{i+1})$ with the left coefficient
  $1-Q$. The passage to the opposite (bar-$\Delta_+$) channel of
  [[def-the-level-one-vector-representation-its-affinization-and-energy-function]]
  is the flip of tensor factors and is carried out in
  [[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]].
