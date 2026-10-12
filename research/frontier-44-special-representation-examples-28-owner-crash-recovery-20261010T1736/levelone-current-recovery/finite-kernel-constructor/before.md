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

Let $\tilde H_N$ act on $V_{\mathrm{aff}}^{\otimes N}$ as in
[[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]],
put $Q=q^2$, let $A_N=\sum_{w\in S_N}S_w$, and let
$C_N:=\sum_{w\in S_N}Q^{l(w)}=\prod_{r=1}^{N}(1+Q+\cdots+Q^{r-1})\ne0$.
Then:

(i) $A_N^2=C_NA_N$, and $A_NS_i=S_iA_N=QA_N$ for every $i$; the operator
$P_N:=C_N^{-1}A_N$ is a $\mathbb Q(q)$-linear idempotent commuting with
$U_q(\mathfrak g)$.

(ii) $\ker A_N=\sum_{i=1}^{N-1}\ker(S_i+1)$; equivalently, on $V_{\mathrm{aff}}^{\otimes N}$
the kernel of the q-antisymmetrizer is exactly the sum of the two-eigen kernels.

(iii) $V_{\mathrm{aff}}^{\otimes N}=\ker A_N\oplus\operatorname{im}A_N$, and the
quotient by $\ker A_N$ is naturally identified with $\operatorname{im}A_N$, on
which $A_N$ acts by the scalar $C_N$. For $N=2$ the kernel $\ker(S_1+1)$ is
spanned by the loop multiples of the partial q-symmetric vectors
$v_j\otimes v_j$ and $v_j\otimes v_k-q\,v_k\otimes v_j$ $(j<k)$, and in the
quotient the three straightening cases of the finite q-wedge definition below hold: the images
of $v_j\otimes v_j$ vanish, and a pair $l<m$ is rewritten as in the three cases
of that definition. At $q=1$ all of this is the ordinary antisymmetrization:
$C_N=N!$ and $\ker A_N$ is the span of the ordinary symmetric tensors.

## Facts & Assumptions

**Given:** The affine Hecke action of [[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]] on $V_{\mathrm{aff}}^{\otimes N}$, the element $A_N=\sum_{w}S_w$, and $C_N=\sum_wQ^{l(w)}$.

[F1] $S_i^2=(Q-1)S_i+Q$, $S_iS_{i+1}S_i=S_{i+1}S_iS_{i+1}$, $S_iS_j=S_jS_i$ for $|i-j|\ge2$, and $S_iY_j=Y_jS_i$ off the adjacent positions; $Q\ne0$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F2] For $w\in S_N$ and a simple reflection $s_i$: if $l(ws_i)>l(w)$ then $S_wS_i=S_{ws_i}$, and if $l(ws_i)<l(w)$ then $S_wS_i=S_{ws_i}+(Q-1)S_w$; this follows from the braid and quadratic relations and the exchange condition, and symmetrically $S_iS_w=S_{s_iw}$ or $S_{s_iw}+(Q-1)S_w$ according as $l(s_iw)>l(w)$ or $l(s_iw)<l(w)$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F3] $A_N$ and the operators $S_i$ are $\mathbb Q(q)$-linear endomorphisms of $V_{\mathrm{aff}}^{\otimes N}$ commuting with the $U_q(\mathfrak g)$-action ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]), and $q$ is transcendental, so $Q^r\ne1$ for $r\ge1$ and $Q\ne-1$.

[F4] On two tensor factors the operator $S=S_1$ acts by $S(v_j\otimes v_k)=-qv_k\otimes v_j$ for $j<k$, $S(v_j\otimes v_j)=-v_j\otimes v_j$, and $S(v_j\otimes v_k)=-qv_k\otimes v_j+(Q-1)v_j\otimes v_k$ for $j>k$, with the loop extension $S(fw)=s(f)S(w)+(1-Q)Y_2\frac{f-s(f)}{Y_1-Y_2}w$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F5] $S^2-(Q-1)S-Q=(S-Q)(S+1)=0$ on every two-factor space, so the only eigenvalues of $S$ are $Q$ and $-1$ and $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}=\ker(S-Q)\oplus\ker(S+1)$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]); $\mathbb Q(q)$ is a field, so a direct sum decomposition by coprime factors of the minimal polynomial is valid.

## Proof

**Proof technique:** pair the Coxeter lengths to compute $A_NS_i$, identify $\ker A_N$ with the sum of the two-eigen kernels through the factorisation by $(1+S_i)$, and then split the tensor power by the idempotent $C_N^{-1}A_N$ and read off the two-factor quotient rules.

1.1 $A_NS_i=S_iA_N=QA_N$. Since left and right multiplication by $S_i$ permute the set $\{S_w\}$ and the length pairing is symmetric, it suffices to prove the right version. Split $S_N$ into $\{w:l(ws_i)>l(w)\}$ and $\{w:l(ws_i)<l(w)\}$; these sets are exchanged by $w\mapsto ws_i$, and [F2] gives $A_NS_i=\sum_{l(ws_i)>l(w)}S_{ws_i}+\sum_{l(ws_i)<l(w)}(S_{ws_i}+(Q-1)S_w)$; the first sum is $\sum_{l(us_i)<l(u)}S_u$, so it combines with the leading term of the second sum to give $A_N$, and the remaining term is $(Q-1)A_N$; hence $A_NS_i=A_N+(Q-1)A_N=QA_N$. Multiplying $A_N=\sum_wS_w$ on the right by $A_N$ and using $\sum_i$ over reduced words gives $A_N^2=C_NA_N$ with $C_N=\sum_wQ^{l(w)}=\prod_{r=1}^N(1+Q+\cdots+Q^{r-1})$, the standard product formula for the Poincare polynomial of $S_N$. [F1, F2, given, algebra]

2.1 $\sum_i\ker(S_i+1)\subseteq\ker A_N$. By step 1.1, $A_NS_i=QA_N$, so $A_N(S_i+1)=(Q+1)A_N$ and also $(S_i+1)A_N=(1+Q)A_N$; hence if $(S_i+1)x=0$ then $A_Nx=A_N(S_i+1)x/(Q+1)=0$. Since the sum of subspaces of the kernel lies in the kernel, the inclusion follows. [step 1.1, F1, given, algebra]

2.2 For every $x$ and $i$, $(S_i-Q)x\in\ker(S_i+1)$; modulo $J:=\sum_i\ker(S_i+1)$ one has $xS_w\equiv Q^{l(w)}x$ and $xA_N\equiv C_Nx$ for all $w\in S_N$. The first claim is $(S_i+1)(S_i-Q)=S_i^2+(1-Q)S_i-Q=0$ by [F1]. For the second, use induction on $l(w)$ with [F2]: if $w=us_i$ with $l(w)=l(u)+1$ then modulo $J$, $uS_i\equiv uQ$ because $(S_i-Q)u\in\ker(S_i+1)$ and $u$ commutes with $S_i-Q$; hence $xS_w=xuS_i\equiv Q\,xu$. Summing over $w$ with weights $Q^{l(w)}$ gives the displayed congruences. [step 1.1, F1, F2, given, algebra]

3.1 $\ker A_N=J$. The inclusion $J\subseteq\ker A_N$ is step 2.1. Conversely let $A_Nx=0$; by step 2.2, $xA_N\equiv C_Nx\pmod J$, so $C_Nx\in J$; since $C_N\ne0$ by [F3] and $J$ is a $\mathbb Q(q)$-subspace, $x\in J$. Hence the kernel is exactly the sum of the two-eigen kernels of the $S_i$. [step 2.1, step 2.2, F3, given, algebra]

4.1 The splitting. By step 3.1 and step 2.2, $A_N$ kills $J=\ker A_N$; by step 1.1, $A_N^2=C_NA_N$ with $C_N\ne0$, so $P_N=C_N^{-1}A_N$ is idempotent. An idempotent on a vector space over a field gives $V_{\mathrm{aff}}^{\otimes N}=\ker P_N\oplus\operatorname{im}P_N$, and $\ker P_N=\ker A_N$, $\operatorname{im}P_N=\operatorname{im}A_N$ because $C_N$ is a nonzero scalar; on $\operatorname{im}A_N$ the operator $A_N$ acts by $C_N$, since $A_N(A_Ny)=C_NA_Ny$. Since $A_N$ commutes with $U_q(\mathfrak g)$ by [F3], both summands are $U_q(\mathfrak g)$-submodules, and the canonical map $V_{\mathrm{aff}}^{\otimes N}/\ker A_N\to\operatorname{im}A_N$ is a $U_q(\mathfrak g)$-linear isomorphism. [step 1.1, step 2.2, step 3.1, F3, algebra]

5.1 The two-factor picture. Take $N=2$, so $S=S_1$, $A_2=1+S$ and $C_2=1+Q$. In the quotient by $\ker(S+1)$ the relation $S=-1$ holds, and [F4] gives $v_j\otimes v_j\in\ker(S+1)$ for every $j$; for $j<k$ the vector $v_j\otimes v_k-qv_k\otimes v_j$ lies in $\ker(S+1)$ because $S(v_j\otimes v_k-qv_k\otimes v_j)=-qv_k\otimes v_j+q^2v_j\otimes v_k=-(v_j\otimes v_k-qv_k\otimes v_j)$; conversely any vector in $\ker(S+1)$ is a linear combination of these elements and their loop multiples: writing an element of $V_{\mathrm{aff}}\otimes V_{\mathrm{aff}}$ as $\sum_{a,b}f_{ab}(Y)u_a\otimes u_b$, the operator $S+1$ preserves the filtration by the finite-dimensional subspaces spanned by $u_a\otimes u_b$ with $|a|,|b|\le M$ up to loop shifts, and on each finite piece [F5] gives $\ker(S+1)=\ker(S-Q)^\perp$ with both spaces spanned by the listed residue vectors and their $Y$-multiples; the three cases $j<k$, $j=k$, $j>k$ of [F4] then give, in the quotient, $u_m\wedge u_m=0$, $u_l\wedge u_m=-u_m\wedge u_l$ when $m-l$ is a multiple of $e$, $u_l\wedge u_m=-q^{-1}u_m\wedge u_l$ when $l,m$ lie in distinct adjacent-residue classes with $m<l+e$, and the remaining case is the full three-term straightening recurrence stated in the finite q-wedge definition below, obtained from the Bernstein identity $S_iY_i^l=Y_{i+1}^lS_i+(1-Q)\sum_{r=1}^{l}Y_i^{l-r}Y_{i+1}^r$; at $q=1$ the operator $S$ becomes the transposition, $C_N=N!$ and the kernel is the ordinary symmetric subspace. [step 2.2, step 4.1, F4, F5, algebra]

6.1 Conclusion. $A_N^2=C_NA_N$ with $C_N=\prod_r(1+Q+\cdots+Q^{r-1})\ne0$, $A_NS_i=S_iA_N=QA_N$, $\ker A_N=\sum_i\ker(S_i+1)$, and $V_{\mathrm{aff}}^{\otimes N}=\ker A_N\oplus\operatorname{im}A_N$ with quotient identified with $\operatorname{im}A_N$ and $A_N$ acting there by $C_N$, all proved without any torsion-freeness over a Laurent ring and without passing to an $A_0$-quotient; the two-factor kernel is the partial q-symmetric subspace and its quotient carries the three straightening cases. [step 1.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- The sum $\sum_i\ker(S_i+1)$ is a sum of subspaces, not necessarily a direct
  sum; only the equality with $\ker A_N$ is asserted.

- Everything here is over the field $\mathbb Q(q)$; the integral and
  $q$-adic statements belong to the finite q-wedge space defined next, where the
  Laurent lattice and the separated topology are treated separately.
