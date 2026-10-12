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

The element $t_i:=-q^{-1}S_i$ then satisfies $(t_i-q^{-1})(t_i+q)=0$; for a
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
defines the **affine Hecke action**. The whole action commutes with the derived quantum group $U_q'(\mathfrak g)$ (the generators $E_i,F_i$ and $K_h$ with $h$ in the span of the simple coroots). Each $S_i$, and therefore $A_N$, also preserves total loop degree and commutes with the full affine quantum-group action. The individual loops instead satisfy $K_dY_jK_d^{-1}=qY_j$. Products are composed as left operators; right-action notation reverses their order using the anti-involution fixing the generators.

## Facts & Assumptions

**Given:** The Laurent tensor space and its vector action from [[def-the-level-one-vector-representation-its-affinization-and-energy-function]], the displayed operators $S_i,Y_j$, and the fixed coproduct from [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]].

[F1] The vector basis has $u_m=z^av_j$ with $m=j-ae$, $E_i u_m=\delta_{m\equiv i+1}u_{m-1}$, $F_i u_m=\delta_{m\equiv i}u_{m+1}$, and $K_i v_j=q^{\delta_{i,j}-\delta_{i,j-1}}v_j$. In particular $E_0=zE_0^{\mathrm{fin}}$, $F_0=z^{-1}F_0^{\mathrm{fin}}$, $K_du_m=q^a u_m$, and $\mathrm{wt}(u_{m-e})=\mathrm{wt}(u_m)+\delta$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).

[F2] The coproduct is $\Delta(K_h)=K_h\otimes K_h$, $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$, and is coassociative ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).

## Verification

**Proof technique:** establish the finite residue identities and the divided-difference identities, combine them for the full Laurent Hecke action, and verify coproduct commutation in an ordered residue window for each color.

1.1 Write $x=Y_1,y=Y_2$, let $s$ swap them, and set $D(f)=y(f-s(f))/(x-y)$. For an integer $l>0$, $(x^l-y^l)/(x-y)=\sum_{r=0}^{l-1}x^{l-1-r}y^r$; for $l<0$ it is $-\sum_{r=1}^{-l}x^{-r}y^{r+l-1}$, obtained by factoring $x^{-l}y^{-l}$ from the positive formula, and for $l=0$ it is zero. Factoring a common Laurent monomial proves that $D$ preserves the Laurent ring. The identity $D(fg)=D(f)g+s(f)D(g)$ follows by subtracting $s(f)s(g)$ from $fg$. With $d=y/(x-y)$, $s(d)=-x/(x-y)$ and $d+s(d)=-1$, expansion of $D=d(1-s)$ gives $D^2=-D$ and $sD+Ds=1-s$. These rational computations are identities on Laurent polynomials because the finite sums show that all the operators preserve that ring. [given, algebra]

1.2 Let $T$ be the displayed residue matrix. For $a=v_j\otimes v_k$, $b=v_k\otimes v_j$, $j<k$, one has $T^2a=Qa-qc b$ and $T^2b=-qc a+(Q+c^2)b$, while $T^2d_j=d_j$ on $d_j=v_j\otimes v_j$. Hence $T^2=cT+Q$. The finite braid is also an exact finite residue identity: abbreviate a triple by its order pattern $ijk$, where $1<2<3$, and let $L=T_1T_2T_1$, $R=T_2T_1T_2$. Applying the three-case matrix gives the following common values: $L(111)=R(111)=-111$; $L(112)=R(112)=-Q211$; $L(121)=R(121)=-Q121+qc211$; $L(211)=R(211)=-Q112+qc121+c211$; $L(122)=R(122)=-Q221$; $L(212)=R(212)=-Q212+qc221$; $L(221)=R(221)=-Q122+qc212+c221$; $L(123)=R(123)=-q^3 321$; $L(132)=R(132)=-q^3 231+Qc321$; $L(213)=R(213)=-q^3 312+Qc321$; $L(231)=R(231)=-q^3 132+Qc(312+231)-qc^2 321$; $L(312)=R(312)=-q^3 213+Qc(312+231)-qc^2 321$; $L(321)=R(321)=-q^3 123+Qc(213+132)-qc^2(312+231)+(c^3+Qc)321$. These thirteen patterns exhaust all triples of residues, including repeated residues for $e=2$, proving the finite braid for every $e$. [given, algebra]

1.3 For a nonzero color $i$, let $A=v_i$ be its top vector and $B=v_{i+1}$ its bottom; $K_i$ has eigenvalues $q,q^{-1}$ there and $1$ on every other residue $O$. On the four pairs $AA,AB,BA,BB$, the coproduct maps are $\Delta(E_i):(0,AA,q^{-1}AA,qAB+BA)$ and $\Delta(F_i):(BA+qAB,BB,q^{-1}BB,0)$ respectively. Applying $T$ before or after them gives respectively $T\Delta(E_i)=\Delta(E_i)T:(0,-AA,-q^{-1}AA,-qAB-BA)$ and $T\Delta(F_i)=\Delta(F_i)T:(-BA-qAB,-BB,-q^{-1}BB,0)$. For spectator pairs, $BO\mapsto AO$, $OB\mapsto OA$ under $E_i$, and $AO\mapsto BO$, $OA\mapsto OB$ under $F_i$, with other pairs killed. Since $A,B$ are consecutive residues, every spectator is below both or above both, so the order comparison and the coefficients in $T$ are unchanged by these maps. This proves residue commutation in every case. $T$ also preserves each total derived toral weight because it only permutes residues. [F1, F2, given, algebra]

2.1 On the Laurent tensor space the operator is $S=T s-cD$, with $T$ acting only on residues. It commutes with $s,D$ on coefficients. Thus $S^2=T^2-cT(sD+Ds)+c^2D^2=cT+Q-cT(1-s)-c^2D=cS+Q$ by steps 1.1 and 1.2. This proves the quadratic relation on all loop powers, rather than only on residue tensors. Off-adjacent operators commute because their residue matrices and divided differences involve disjoint positions. [step 1.1, step 1.2, algebra]

2.2 For $i\ne0$, $\Delta(E_i),\Delta(F_i)$ and the derived torals act by constant residue matrices and commute with scalar Laurent multiplication and the coefficient operators $s,D$. Together with step 1.3 and $S=T s-cD$ this proves their commutation with $S$ on every Laurent tensor. In particular the correct extension of a commutator is $[S,\Delta(X)](fw)=s(f)[S,\Delta(X)]w$, since the divided-difference terms cancel; it is not a formula with $f$ instead of $s(f)$. More generally step 1.1 gives $S(fh)=s(f)S(h)-cD(f)h$ for every Laurent tensor $h$, by applying the Leibniz identity to its residue coefficients. [step 1.1, step 1.3, F1, F2, algebra]

3.1 For three adjacent loop variables $z_1,z_2,z_3$ put $b_{ij}=-c z_j/(z_i-z_j)$, $a=b_{12}$, $b=b_{23}$, and $h=b_{13}$. Then $b_{ij}+b_{ji}=c$ and $\delta_0:=ab-h(a+b-c)=0$, the latter following on multiplying by $(z_1-z_2)(z_2-z_3)(z_1-z_3)$. Write $S_i=(T_i-b_{i,i+1})s_i+b_{i,i+1}$. Expand $S_1S_2S_1-S_2S_1S_2$ with every coefficient on the left, using $s_i b_{jk}=b_{s_i(j),s_i(k)}s_i$. After using $T_i^2=cT_i+Q$ and $T_1T_2T_1=T_2T_1T_2$, the coefficients at $1,s_1,s_2,s_1s_2,s_2s_1,s_1s_2s_1$ are respectively $(a-b)\delta_0$, $(T_1-a)\delta_0$, $-(T_2-b)\delta_0$, $0$, $0$, and $-(T_1-T_2)\delta_0$. For example the coefficient at $1$ is $a^2b+h(Q+a(c-a))-b^2a-h(Q+b(c-b))=(a-b)\delta_0$; the longest coefficient is $(T_1-a)(T_2-h)(T_1-b)-(T_2-b)(T_1-h)(T_2-a)=-(T_1-T_2)\delta_0$. Hence all coefficients vanish. Clearing the three differences gives the identity in the original Laurent tensor space, whose injection into its rational coefficient space is faithful; the operators already preserve the Laurent space by step 1.1. This proves the full braid, with no finite-loop truncation assumption. [step 1.1, step 1.2, step 2.1, algebra]

4.1 The loop multiplication operators are invertible and commute. From step 1.1 and the extension formula, for $l>0$ one has $Sx^l=y^lS-c\sum_{r=1}^l x^{l-r}y^r$; for $l<0$ one has $Sx^l=y^lS+c\sum_{r=1}^{-l}x^{-r}y^{r+l}$, and for $l=0$ there is no correction. These identities hold on every tensor by the divided-difference Leibniz formula. In particular $Sx=yS-cy$ and $Sy=xS+cy$. Therefore $SxS=yS^2-cyS=Qy$ by step 2.1. These are precisely the Bernstein and off-adjacent loop relations in the Definition. Finally $t=-q^{-1}S$ satisfies $(t-q^{-1})(t+q)=q^{-2}(S+1)(S-Q)=0$, and equivalently $t^2=(q^{-1}-q)t+1$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 For the affine color use the ordered Laurent basis $w_1=zv_e=u_0$, $w_2=v_1=u_1$, through $w_e=v_{e-1}=u_{e-1}$. For $1\le j<e$, the extension formula gives $S(x(v_e\otimes v_j))=-q y(v_j\otimes v_e)$ and $S(y(v_j\otimes v_e))=-q x(v_e\otimes v_j)+cy(v_j\otimes v_e)$; also $S(xy(v_e\otimes v_e))=-xy(v_e\otimes v_e)$. On the other pairs the residue formula is unchanged. Thus $S$ on $w_a\otimes w_b$ is exactly the same three-case matrix in the order $w_1<\cdots<w_e$, and its extension remains the formula in step 2.2. On this basis $E_0 w_2=w_1$, $F_0w_1=w_2$, with all other images zero, because $E_0=zE_0^{\mathrm{fin}}$ and $F_0=z^{-1}F_0^{\mathrm{fin}}$. Their toral eigenvalues are $q,q^{-1}$ on $w_1,w_2$ and $1$ on spectators. Consequently precisely the finite commutation calculation of step 1.3 applies to color $0$, followed by the constant-matrix Laurent argument of step 2.2. This proves all affine-color commutators on arbitrary positive and negative loop powers. [step 1.1, step 4.1, step 1.3, step 2.2, F1, F2, algebra]

6.1 On two factors $S$ preserves total residue weight and total loop degree: $s$ swaps loop powers and $D$ has total degree zero, since its numerator is multiplied by $y$ and divided by $x-y$. Hence it commutes with $K_h\otimes K_h$ for every full toral $K_h$, including $K_d$. Each $Y_j$ commutes with $E_i,F_i$ and derived torals by [F1], but increases total loop degree by one, giving $K_dY_jK_d^{-1}=qY_j$. For $N>2$, the iterated coproduct of $E_i$ is the sum of terms $1^{\otimes(r-1)}\otimes E_i\otimes (K_i^{-1})^{\otimes(N-r)}$, and that of $F_i$ is the sum $K_i^{\otimes(r-1)}\otimes F_i\otimes1^{\otimes(N-r)}$. The two terms in the adjacent slots combine into their two-factor coproduct; a term outside those slots has either $K_i^{\pm1}\otimes K_i^{\pm1}$ or $1\otimes1$ there. Steps 2.2 and 5.1 and the toral commutation therefore prove $[S_j,\Delta^{(N)}(X)]=0$ for every full generator $X$. Individual $Y_j$ commute with the derived action for the same slotwise reason. [step 1.1, step 2.2, step 5.1, F1, F2, algebra]

7.1 The quadratic, braid, distant, loop and Bernstein identities prove the displayed affine Hecke action on the entire Laurent tensor space. The finite Hecke operators $S_i$ commute with the full quantum-group action; their products $S_w$ are well defined by reduced words and their sum $A_N$ has the same commutation and total-degree properties. The entire affine Hecke action, including each individual loop, commutes with the derived action, with the degree covariance of step 6.1. This establishes exactly the scope and normalization claimed in the Definition. [step 2.1, step 3.1, step 4.1, step 2.2, step 5.1, step 6.1] ∎

## Remarks

The loops have degree one, whereas $S_i$ and $A_N$ have degree zero. The action
uses the fixed coproduct throughout; flipping to the opposite channel is a
separate convention change. At $q=1$, $S_i$ is the negative flip, including its
Laurent coefficients.
