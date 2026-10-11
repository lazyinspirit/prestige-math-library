---
id: thm-cyclotomic-klr-sl-two-categorical-commutator
kind: theorem
title: "The categorical $\\mathfrak{sl}_2$ commutator for cyclotomic KLR functors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       thm-cyclotomic-klr-induction-is-projective-on-the-right]
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
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 5, Theorem 5.2 and its complete proof in Section 5.2: the cyclotomic categorical sl_2 relation with the summands q^{2d_ik} and q^{-2d_i(k+1)}."
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.4 and Section 2: the sl_2 relations for the cyclotomic functors and the graded bimodule maps realizing them."
---

## Statement

Let $R^\Lambda$ be the cyclotomic KLR algebra of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]], let
$E^\Lambda_i,F^\Lambda_i$ be the functors of
[[def-cyclotomic-klr-induction-and-restriction-functors]], and read the
composites $E^\Lambda_iF^\Lambda_i$ and $F^\Lambda_iE^\Lambda_i$ as
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$ via the weight bookkeeping
fixed there. Put $\lambda:=\Lambda-\beta$ and $q_i:=q^{d_i}$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

(a) If $\langle h_i,\lambda\rangle\ge0$, there is a natural isomorphism of
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$
$$q_i^{-2}F^\Lambda_iE^\Lambda_i\oplus\bigoplus_{k=0}^{\langle h_i,\lambda\rangle-1}q_i^{2k}\mathrm{Id}\;\cong\;E^\Lambda_iF^\Lambda_i.$$

(b) If $\langle h_i,\lambda\rangle\le0$, there is a natural isomorphism of
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$
$$q_i^{-2}F^\Lambda_iE^\Lambda_i\;\cong\;E^\Lambda_iF^\Lambda_i\oplus\bigoplus_{k=0}^{-\langle h_i,\lambda\rangle-1}q_i^{-2k-2}\mathrm{Id}.$$

Applied to the object $R^\Lambda(\beta)$ the same computation gives an
isomorphism of graded $R^\Lambda(\beta)$-bimodules obtained from
$F^\Lambda_iE^\Lambda_iR^\Lambda(\beta)$ and
$E^\Lambda_iF^\Lambda_iR^\Lambda(\beta)$ by the displayed summands
([[def-graded-ring-module-bimodule-and-internal-shift]] for the shift
conventions).

## Facts & Assumptions

**Given:** The cyclotomic quotient $R^\Lambda$, a fixed $\beta$, the functors $E^\Lambda_i,F^\Lambda_i$ and the generic functors $E_i,F_i,\bar F_i$ of [[lem-generic-klr-induction-and-restriction-mixed-relations]]; put $A=R^\Lambda(\beta)$, $h=\langle h_i,\Lambda-\beta\rangle$, $p:=\beta_i$ and $d_i$ the symmetrizer entry.

[F1] The projective comparison of [[thm-cyclotomic-klr-induction-is-projective-on-the-right]]: $0\to q^{s}K_1\xrightarrow{P}K_0\to Be\to0$ with $s=(\alpha_i\mid 2\Lambda-\beta)$ and finite right $A[t]$-projective $K_0,K_1$, with $t=x_{n+1}$ on $K_0$ and $t=x_1$ on $K_1$, and the generic same-end/opposite-end corner maps of [[lem-generic-klr-induction-and-restriction-mixed-relations]] are injective with the stated polynomial cokernels; the opposite-end sequence is split as right modules.

[F2] The dot annihilators of [[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]: every dot has a monic scalar-coefficient annihilator in each fixed block, so every relevant polynomial in the appended dots is subject to monic division.

[F3] The weights: $h=\langle h_i,\Lambda-\beta\rangle$ and $q_i=q^{d_i}$; shifts are internal shifts of [[def-graded-ring-module-bimodule-and-internal-shift]] with $(M\{r\})_m=M_{m-r}$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Proof

**Proof technique:** compute the snake map of the exact comparison square by monic division, split its cokernel or kernel by the dotted unit columns, and read the two graded isomorphisms off the snake sequence.

If $A=0$, the comparison modules and functor values are zero, so all assertions are vacuous; polynomial degrees below are used only for $A\ne0$.

1.1 The comparison square. Write $n=|\beta|$, $s=(\alpha_i\mid2\Lambda-\beta)$, $\kappa=-\tau$, and use $K_0,K_1,P,Q$ from the proved comparison in [F1]. Put $C_0=e(\beta,i)K_0$ and $C_1=e(\beta,i)K_1$. If $\delta=\beta-\alpha_i\in Q_+$ put $D_0=R(\beta)e(\delta,i)\otimes_{R(\delta)}e(\delta,i)A$ and $D_1=R(\beta)e(i,\delta)\otimes_{R(\delta)}e(\delta,i)A$; otherwise both are zero. Restricting the comparison at $\beta$ and applying the comparison at $\delta$ to $E_iA$ give exact rows $0\to q^sD_1\xrightarrow{P'}q_i^{-2}D_0\to q_i^{-2}F_i^\Lambda E_i^\Lambda A\to0$ and $0\to q^sC_1\xrightarrow{P}C_0\to E_i^\Lambda F_i^\Lambda A\to0$. The vertical maps are $U:D_1\to C_1$, $x\otimes y\mapsto x\xi_n(y)$, and $T:D_0\to C_0$, $x\otimes y\mapsto x\kappa_ny$, with the indicated shifts. Here $P'$ multiplies the first factor by $a(x_1)\kappa_1\cdots\kappa_{n-1}$; right bilinearity of $P$ gives $PU=TP'$ on elementary tensors, both represented by $xa(x_1)\kappa_1\cdots\kappa_ny$. The generic PBW maps of [F1] make $U,T$ injective, with cokernels $q^{-(\alpha_i\mid\beta)}A[t]$ and $A[t]$ respectively, retaining the transferred color $i$. The induced coefficient map $\mathcal A:q_i^{2h}A[t]\to A[t]$ is therefore defined by $\mathcal A B=CP$, where $B$ takes the full-transfer coefficient in $C_1$ and $C$ projects $C_0=T(D_0)\oplus A[t]$ onto its polynomial summand. The square consists of $(R(\beta),A)$-bimodule maps; its coefficient map and snake sequence are $A$-bimodule maps. Only $B,P$ commute with their endpoint-dot actions, and no $A[t]$-linearity of $\mathcal A$ is asserted. The snake lemma gives $0\to\ker\mathcal A\to q_i^{-2}F_i^\Lambda E_i^\Lambda A\to E_i^\Lambda F_i^\Lambda A\to\operatorname{coker}\mathcal A\to0$. [F1, F3, construct, algebra]

2.1 The two comparison products. The projectivity proof gives $QP$ as right multiplication on $K_1$ by $a_i(t)\prod_{\nu_a\ne i}Q_{i\nu_a}(t,x_a)$ on each old word $\nu$. Call this central polynomial $Z(t)$. The same element acts on $K_0$ with $t=x_{n+1}$, and $P$ intertwines the actions. Thus $(PQ-Z)P=0$, so $PQ-Z$ factors through $Be$. That quotient is killed by a scalar monic polynomial by [F2], whereas $K_0$ is projective over $A[t]$ and has no such polynomial torsion. Consequently $PQ=Z$ on $K_0$ as well. For $p=\beta_i$, set $S(t)=\sum_\nu\prod_{\nu_a=i}(t-x_a)^2e(\nu)$ and choose $\gamma\in k^\times$ so $\gamma^{-1}=(-1)^p\prod_{j\ne i}t_{ij}^{\beta_j}$, where $t_{ij}$ is the leading $u^{-a_{ij}}$ coefficient of $Q_{ij}$. Then $W(t)=\gamma(-1)^pa_i(t)\sum_\nu\prod_{\nu_a\ne i}Q_{i\nu_a}(t,x_a)e(\nu)$ is central monic of degree $h+2p$, and $S$ is central monic of degree $2p$. In $Q$ the leading full-transfer coefficient is $(-1)^pS(t)$: each equal-color $g$ contributes $-(t-x_a)^2\kappa_a$ and each unequal-color $g$ contributes $\kappa_a$; every omitted crossing has a shorter permutation and no full-transfer coset. Applying $\mathcal AB=CP$ to $Q(t^k)$ and using $PQ=Z$ proves $\mathcal A(t^kS)=\gamma^{-1}t^kW$ for every $k\ge0$. [F1, F2, step 1.1, algebra]

3.1 The coefficient recurrence and division. Let $u_k=e(\beta,i)\kappa_n\cdots\kappa_1x_1^ke(i,\beta)\in C_1$. It satisfies $B(u_k)=t^k$. In the same-end direct sum write $P(u_k)=T(\psi_k)+\phi_k$, with $\psi_k\in D_0$ and $\phi_k=\mathcal A(t^k)\in A[t]$. Since $P(u_{k+1})=P(u_k)x_{n+1}$ and $T(z)x_{n+1}=T(z(x_n\otimes1))+E(z)$, where $E(x\otimes y)=xy\in A$, comparison of the summands gives $\psi_{k+1}=\psi_k(x_n\otimes1)$ and $\phi_{k+1}=t\phi_k+E(\psi_k)$. These identities use the source $\kappa$ mixed relation and the actual multiplication counit. In particular $\mathcal A(at)-\mathcal A(a)t\in A$ for all $a\in A[t]$. Induction on the degree of $f$, using $\mathcal A(atg)-\mathcal A(a)tg=[\mathcal A(atg)-\mathcal A(at)g]+[\mathcal A(at)-\mathcal A(a)t]g$, gives $\deg_t(\mathcal A(af)-\mathcal A(a)f)<\deg_t f$. With $f=S$ and step 2.1, this says $t^kW=(\gamma\phi_k)S+r_k$, $\deg_t r_k<2p$. Thus $\gamma\phi_k$ is exactly the monic-division quotient, zero when $h+k<0$ and monic of degree $h+k$ otherwise. [step 1.1, step 2.1, F3, algebra]

4.1 The positive branch. If $h\ge0$, the values $\gamma\phi_k$ have distinct unit leading degrees $h+k$. Finite triangular elimination over $A$ makes $\mathcal A$ injective and identifies its cokernel with $\bigoplus_{k=0}^{h-1}At^k$. The inclusion of these polynomial classes in $C_0$, followed by $C_0\to E_i^\Lambda F_i^\Lambda A$, is a bimodule section of the last snake map. It is the ordinary adjunction unit followed by $k$ endpoint dots, of degree $2d_ik$. Hence $E_i^\Lambda F_i^\Lambda A\cong q_i^{-2}F_i^\Lambda E_i^\Lambda A\oplus\bigoplus_{k=0}^{h-1}A\{2d_ik\}$. At $h=0$ the sum is empty. [step 1.1, step 3.1, F3, algebra]

5.1 The negative branch. If $h=-r\le0$, division makes $\mathcal A$ surjective with kernel $q_i^{-2r}\bigoplus_{j=0}^{r-1}At^j$. Its snake inclusion sends $t^j$ to the image of $\psi_j$ in $q_i^{-2}F_i^\Lambda E_i^\Lambda A$. The multiplication counit and its dotted versions descend from $D_0$ to this quotient. On the included kernel, their coefficient matrix is $E(\psi_{j+k})$ for $0\le j,k<r$. Step 3.1 gives $E(\psi_m)=0$ for $m<r-1$ and $E(\psi_{r-1})=\gamma^{-1}$, since $\phi_m=0$ for $m<r$ and $\phi_r=\gamma^{-1}$. Reversing column order therefore makes this matrix triangular with invertible scalar diagonal. Its finite recursive inverse, consisting of bimodule maps, supplies a retraction of the snake inclusion and splits the sequence. The dotted counit at index $k$ has target shift $-2d_i(k+1)$ after the $q_i^{-2}$ shift on $D_0$, so $q_i^{-2}F_i^\Lambda E_i^\Lambda A\cong E_i^\Lambda F_i^\Lambda A\oplus\bigoplus_{k=0}^{r-1}A\{-2d_i(k+1)\}$. At $r=0$ this agrees with step 4.1. At the vacuum the direct calculation is $E_i^\Lambda F_i^\Lambda k=k[t]/t^{\lambda_i}$ and $F_i^\Lambda E_i^\Lambda k=0$; it gives the positive branch without any negative-height algebra. [step 1.1, step 3.1, step 4.1, F3, algebra]

6.1 Unequal-color descent and functoriality. For $i\ne j$ let $S_n=R(n+1)$, $L=R(n)$ on the first $n$ positions, $L[t]=R(n,1)$, $w=\kappa_1\cdots\kappa_n$ and $w'=\kappa_n\cdots\kappa_1$. Expanding the first-strand cyclotomic ideal by the right cosets and then the left cosets of [F1] gives $S_na(x_1)S_n=S_na(x_1)L+La(x_1)S_n+L[t]w'a(x_1)wL[t]$: all partial transfer words lie in the first two summands, and only the full transfer remains. In its $(i,j)$ last-color corner the last summand is zero, because $w'$ transfers its top color to the first position and $w$ transfers its bottom color there, giving $e(i,n)a(x_1)e(j,n)=0$. Thus the corner ideal is exactly the sum of the source and target induced cyclotomic ideals. Quotienting the generic same-end corner isomorphism gives $E_i^\Lambda F_j^\Lambda\cong q^{-b_{ij}}F_j^\Lambda E_i^\Lambda$. For equal colors, tensor the split bimodule isomorphisms of steps 4.1 and 5.1 with any graded $A$-module: split bimodule maps remain inverse under tensoring. They give precisely (a) and (b), naturally, with the stated bimodule form on $A$. No flatness of a quotient or separability assumption is used. [F1, step 4.1, step 5.1, algebra] ∎
