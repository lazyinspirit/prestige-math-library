---
id: lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel
kind: lemma
title: "The q-antisymmetrizer splits the tensor power and its kernel is the sum of the Hecke kernels"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation,
       def-the-level-one-vector-representation-its-affinization-and-energy-function]
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
      locator: "sec. 3.5, printed pp. 19-20: the subspace $I_r=\\sum_k\\mathrm{Im}(T_k+q)$, the q-antisymmetrizer $\\alpha_r$ and the proofs of Props. 8-9, including the paired-length factorization; sec. 3.7, printed pp. 21-22: the bar involution and the unitriangularity of ordered wedges."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3, printed pp. 5-8: the q-antisymmetrizer (33), Props. 1.1-1.3 and the relations (43),(45) defining the finite wedge kernel."
    - title: "Eugene Stern, Semi-infinite wedges and vertex operators, arXiv:q-alg/9504013"
      url: "https://arxiv.org/pdf/q-alg/9504013"
      locator: "sec. 4.3, printed pp. 11-15: Hecke q-antisymmetrization (55)-(59) and Prop. 4.1."
---

## Statement

Let $k=\mathbb Q(q)$, $Q=q^2$, and let $M_N=V_{\mathrm{aff}}^{\otimes N}$ carry the action of
[[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]].
Put $A_N=\sum_{w\in S_N}S_w$ and
$C_N=\sum_{w\in S_N}Q^{l(w)}=\prod_{r=1}^N(1+Q+\cdots+Q^{r-1})\ne0$.
Then:

(i) $A_NS_i=S_iA_N=QA_N$ and $A_N^2=C_NA_N$. The operator
$P_N=C_N^{-1}A_N$ is a $k$-linear idempotent commuting with the quantum-group action.

(ii) $\ker A_N=\sum_{i=1}^{N-1}\ker(S_i+1)$, a sum of $k$-subspaces, and
$M_N=\ker A_N\oplus\operatorname{im}A_N$. The map $[x]\mapsto A_Nx$ identifies
$M_N/\ker A_N$ with $\operatorname{im}A_N$ as quantum-group modules;
$A_N$ acts there by $C_N$, and every $S_i$ acts there by $Q$.

(iii) On two factors put $x=Y_1$, $y=Y_2$, $R=k[x^{\pm1},y^{\pm1}]$ and
$B=k[x+y,(xy)^{\pm1}]$, the symmetric Laurent subring. The complete partial
q-symmetric kernel on the original Laurent-loop vector space is
$$\ker(S+1)=\bigoplus_j B(v_j\otimes v_j)\ \oplus\!\bigoplus_{j<k}\left(Bh_{jk}+Bh'_{jk}\right),$$
where, writing $a_{jk}=v_j\otimes v_k$ and $b_{jk}=v_k\otimes v_j$,
$$h_{jk}=a_{jk}+q^{-1}b_{jk},\qquad h'_{jk}=x b_{jk}+q^{-1}y a_{jk}.$$
Equivalently, it is the $k$-span of $(S-Q)(u_l\otimes u_m)$ for all integers
$l,m$. This kernel is stable under the quantum-group action and symmetric
Laurent multiplication; arbitrary Laurent multiplication need not preserve it.
Its quotient satisfies the full local straightening relations: repeated entries
vanish, and for $l<m$, writing $m-l=ae+b$ with $a\ge0$ and $0\le b<e$,
$$u_l\wedge u_m=\begin{cases}-u_m\wedge u_l,&b=0,\\-q^{-1}u_m\wedge u_l,&a=0,\ b>0,\\-q^{-1}u_m\wedge u_l-u_{l+ae}\wedge u_{m-ae}-q^{-1}u_{m-ae}\wedge u_{l+ae},&a>0,\ b>0.\end{cases}$$
The remaining unordered pair in the third case has strictly smaller gap, so
repetition terminates. At $q=1$, $S_i$ specializes to the negative flip,
$A_N$ to $\sum_w(-1)^{l(w)}w$, and $C_N$ to $N!$; the kernel and quotient
are the ordinary local symmetric relations and exterior power.

## Facts & Assumptions

**Given:** The generic field $k=\mathbb Q(q)$, $Q=q^2$, the affine tensor action, and the reduced-word operators $S_w$ and $A_N$ above.

[F1] The operators satisfy $S_i^2=(Q-1)S_i+Q$, the braid relations and distant commutativity; they commute with the quantum-group action ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F2] On residues, $S(a_{jk})=-q b_{jk}$ and $S(b_{jk})=-q a_{jk}+(Q-1)b_{jk}$ for $j<k$, and $S(v_j\otimes v_j)=-v_j\otimes v_j$. For every Laurent polynomial $f$, $S(fw)=s(f)S(w)+(1-Q)y(f-s(f))/(x-y)\,w$, where $s$ exchanges $x,y$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F3] The index convention is $u_m=z^pv_j$ for $m=j-pe$, with $1\le j\le e$ and $p\in\mathbb Z$; $Y_i$ multiplies the indicated slot by $z$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).

## Proof

**Proof technique:** pair Coxeter lengths, telescope products modulo the local kernels, and compute the complete two-factor kernel over the symmetric Laurent subring before deriving the three straightening cases.

1.1 If $l(ws_i)=l(w)+1$, the reduced-word definition gives $S_wS_i=S_{ws_i}$. If $l(ws_i)=l(w)-1$, put $u=ws_i$, so $S_w=S_uS_i$ and the quadratic relation gives $S_wS_i=Q S_u+(Q-1)S_w$. Thus each paired term satisfies $(S_u+S_{us_i})S_i=Q(S_u+S_{us_i})$ for $l(us_i)=l(u)+1$. Summing the disjoint pairs gives $A_NS_i=QA_N$; left pairing gives $S_iA_N=QA_N$. Hence $A_NS_w=Q^{l(w)}A_N$ and $A_N^2=C_NA_N$. Inserting the largest letter into a permutation in each of its $N$ positions gives $\sum_{w\in S_N}Q^{l(w)}=(1+Q+\cdots+Q^{N-1})\sum_{u\in S_{N-1}}Q^{l(u)}$, proving the product formula by induction. It is nonzero in $k$. [F1, given, algebra]

1.2 For $N=2$, the quadratic identity gives $\operatorname{im}(S-Q)\subseteq\ker(S+1)$, and on that kernel $S-Q=-(1+Q)I$, so equality holds. The original two-factor space is the direct sum of the $R$-blocks $R(v_j\otimes v_j)$ and $Ra_{jk}\oplus Rb_{jk}$ for $j<k$. They are preserved by $S$. Every symmetric $f$ commutes with $S$ by [F2]. The ring $R$ equals $B+Bx$: indeed $y=(x+y)-x$, $x^2=(x+y)x-xy$, $x^{-1}=y/(xy)$ and $y^{-1}=x/(xy)$ reduce every Laurent monomial to this form. The sum is direct, since applying $s$ to $f+gx=0$ with $f,g\in B$ and subtracting gives $g(x-y)=0$, hence $g=f=0$. This also identifies $B$ as the symmetric Laurent subring. Consequently it suffices to compute $S-Q$ on $w,xw$ in each residue block; no localization of the tensor space is taken. [F1, F2, F3, algebra]

2.1 Put $J=\sum_i\ker(S_i+1)$. If $(S_i+1)v=0$, then $(Q+1)A_Nv=A_N(S_i+1)v=0$, so $J\subseteq\ker A_N$. Also $(S_i+1)(S_i-Q)=0$, so $(S_i-Q)v\in J$ for every $v$. For any operator word $T_1\cdots T_d$ with each $T_r$ a simple $S_i$, the exact telescoping identity $T_1\cdots T_d-Q^d I=\sum_{r=1}^d Q^{r-1}(T_r-Q I)T_{r+1}\cdots T_d$ shows that $(S_w-Q^{l(w)}I)v\in J$: each summand has its leftmost factor $S_i-Q$ and hence its image in a local kernel. Thus $(A_N-C_N I)v\in J$. If $A_Nv=0$, this gives $C_Nv\in J$, and $C_N\ne0$ gives $v\in J$. Therefore $\ker A_N=J$. [step 1.1, F1, algebra]

2.2 Write $d_j=v_j\otimes v_j$, $h=h_{jk}$ and $h'=h'_{jk}$. Formula [F2] gives $(S-Q)d_j=-(Q+1)d_j$ and $(S-Q)xd_j=-Q(x+y)d_j$. For $j<k$, it gives $(S-Q)a_{jk}=-Qh$, $(S-Q)b_{jk}=-q h$, $(S-Q)xb_{jk}=-Qh'$, and $(S-Q)xa_{jk}=-Q((x+y)h-q^{-1}h')$. By step 1.2 these images generate the entire kernel over $B$, proving the displayed formula. The alternative $(S-Q)$ basis description follows from the same image equality and [F3]. Quantum-group stability follows from [F1], and symmetric-loop stability from [F2]. In particular the correct base vector is $a_{jk}+q^{-1}b_{jk}$; the vector $a_{jk}-q b_{jk}$ instead has eigenvalue $Q$. [step 1.2, F1, F2, F3, algebra]

3.1 Since $A_N^2=C_NA_N$, $P_N=C_N^{-1}A_N$ is idempotent. Every $v$ decomposes as $(v-P_Nv)+P_Nv$, and an element in both its kernel and image is zero. Its kernel and image are those of $A_N$, giving the direct sum. The map $[v]\mapsto A_Nv$ is well defined, injective and onto its image; it commutes with the quantum-group action by [F1]. On that image $A_N$ acts by $C_N$ and every $S_i$ acts by $Q$ by step 1.1. Equivalently, $(S_i-Q)v\in J=\ker A_N$ implies that each $S_i$ induces scalar $Q$ on the quotient. [step 1.1, step 2.1, F1, algebra]

3.2 Equal indices have $u_l\otimes u_l=(xy)^p d_j\in\ker(S+1)$, for $l=j-pe$. If $l<m$ have equal residue, write $l=j-pe$, $m=j-re$. Their symmetric pair is $(x^py^r+x^ry^p)d_j\in Bd_j$, giving ordinary antisymmetry for $b=0$. For distinct residues write $l=j-pe$, $m=k-re$ and $t=xy$. If $j<k$, then $a=p-r\ge0$ and $b=k-j$; the relation for $a=0$ is $t^r h_{jk}$, and for $a>0$ its four tensor terms are exactly $t^r(x^a+y^a)h_{jk}$. If $j>k$, use $a_{kj}=v_k\otimes v_j$, $b_{kj}=v_j\otimes v_k$; now $a=p-r-1\ge0$ and $b=e+k-j$. The relation for $a=0$ is $t^r h'_{kj}$, and for $a>0$ its four terms are exactly $t^r(x^a+y^a)h'_{kj}$. All these vectors lie in the complete kernel of step 2.2, proving precisely the three displayed cases. Moreover $B$ is spanned over $k$ by $t^r$ and $t^r(x^a+y^a)$ with $r\in\mathbb Z$, $a\ge1$: pair each Laurent monomial with its swap and factor their common smaller power. Thus these relations span the entire kernel described in step 2.2, including its diagonal blocks, and give the full quotient presentation. For $a>0,b>0$, $(l+ae,m-ae)=(m-b,l+b)$ is decreasing and both entries lie strictly between $l,m$; the reverse pair has positive gap $ae-b=(a-1)e+(e-b)<ae+b=m-l$, so repeated application terminates. [step 2.2, F2, F3, algebra]

4.1 At $q=1$, formula [F2] loses its divided-difference correction and sends $f(v_j\otimes v_k)$ to $-s(f)(v_k\otimes v_j)$, so $S_i$ is the negative flip on the entire Laurent-loop tensor space. Accordingly $S_w=(-1)^{l(w)}w$, $A_N$ is the signed antisymmetrizer, $C_N=N!$, and the preceding paired-length and kernel arguments remain valid over $\mathbb Q$ since $N!$ and $2$ are nonzero. The local kernel is now the ordinary symmetric two-factor space, giving the usual exterior quotient. This proves every asserted kernel, splitting and straightening claim on the original tensor space. [step 1.1, step 2.1, step 3.1, step 2.2, step 3.2, F2, algebra] ∎

## Remarks

All generic arguments are over $\mathbb Q(q)$. The integral lattice and crystal
charts require their separate coefficient rings; no torsion-freeness over a
Laurent ring or residue of its quotient by $q$ is asserted here.
