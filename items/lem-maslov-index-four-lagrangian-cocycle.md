---
id: lem-maslov-index-four-lagrangian-cocycle
kind: lemma
title: "The four-Lagrangian Maslov cocycle identity"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-intersection-form-on-the-homology-of-a-closed-oriented-surface, def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces, thm-rank-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Teruji Thomas, The Maslov index as a quadratic space, §§2, 5, 7"
      url: "https://arxiv.org/pdf/math/0505561"
    - title: "Kevin Walker, On Witten's 3-manifold invariants, §18"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Statement

Let $(V,\omega)$ be a finite-dimensional real symplectic vector space and let $L_1,L_2,L_3$ be Lagrangian subspaces. Put

$$U_{123}=\frac{L_1\cap(L_2+L_3)}{(L_1\cap L_2)+(L_1\cap L_3)}.$$

For $a\in L_1\cap(L_2+L_3)$ write $a+b+c=0$ with $b\in L_2,c\in L_3$. The form

$$\psi_{123}([a],[a'])=\omega(a,b')$$

is well-defined, symmetric, and nondegenerate. Define $\mu(L_1,L_2,L_3)=\operatorname{sign}(\psi_{123})$. For any four Lagrangians,

$$\mu(L_1,L_2,L_3)+\mu(L_1,L_3,L_4)=\mu(L_1,L_2,L_4)+\mu(L_2,L_3,L_4).$$

## Facts & Assumptions

**Given:** A finite-dimensional real symplectic vector space $(V,\omega)$ and the named Lagrangians.

[F1] A Lagrangian $L$ satisfies $L=L^\perp$ and is isotropic ([[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]]).

[F2] Rank-nullity holds for finite-dimensional linear maps and subspaces ([[thm-rank-nullity]]).

## Proof

1.1 The assignment $[a]\mapsto[b]$ is a well-defined isomorphism from $U_{123}$ to $U_{231}=\frac{L_2\cap(L_3+L_1)}{(L_2\cap L_3)+(L_2\cap L_1)}.$ Indeed, changing $b$ in a fixed decomposition changes it by an element of $L_2\cap L_3$; adding an element of $L_1\cap L_2$ to $a$ changes $b$ by an element of $L_1\cap L_2$, and adding an element of $L_1\cap L_3$ can be absorbed into $c$. Conversely, for $b\in L_2\cap(L_3+L_1)$ write $b=a_0+c_0$ with $a_0\in L_1,c_0\in L_3$ and take $a=-a_0,c=-c_0$, which gives $a+b+c=0$. If $a=u_{12}+u_{13}$ with $u_{12}\in L_1\cap L_2,u_{13}\in L_1\cap L_3$, then $b=-a-c$ differs from $-u_{12}$ by an element of $L_2\cap L_3$, so its class is zero. Thus the denominator is exactly the kernel and the map is an isomorphism. [given, F1, algebra]

1.2 For a cyclic list $L_1,\ldots,L_n$ of Lagrangians, set $K=\ker(\sum_i:L_1\oplus\cdots\oplus L_n\to V)$. For $w\in K$, choose $\widehat w_i\in V$ with $w_i=\widehat w_i-\widehat w_{i-1}$ cyclically; such vectors exist since $\sum_iw_i=0$, and any two choices differ by a common constant. Define $q(v,w)=\sum_i\omega(v_i,\widehat w_i)$. Changing the common constant changes the sum by $\omega(\sum_i v_i,t)=0$. Summation by parts gives $q(v,w)=\sum_i\omega(w_i,\widehat v_{i-1})$, which differs from $q(w,v)$ by $\sum_i\omega(w_i,v_i)=0$, since both entries in each pair lie in $L_i$. Thus $q$ is symmetric. Choosing $\widehat w_0=0$ and $\widehat w_i=\sum_{j=1}^iw_j$ gives $q(v,w)=\sum_i\sum_{j\le i}\omega(v_i,w_j)=\sum_{i>j}\omega(v_i,w_j),$ because the diagonal terms vanish. Define $\tau(L_1,\ldots,L_n)$ as the signature of the induced nondegenerate form on $K/\operatorname{rad}(q)$. [F1, given, algebra]

2.1 The pairing $\omega(a,b)$ descends to $U_{123}\times U_{231}$. If $a$ changes by $u_{12}+u_{13}$ with $u_{rs}\in L_r\cap L_s$, then $\omega(u_{12},b)=0$ since both lie in $L_2$, and $\omega(u_{13},b)=0$ since $b=-a-c$ and each of $u_{13},a$ lies in $L_1$ while $u_{13},c$ lie in $L_3$. Changing $b$ by $L_2\cap L_3$ also pairs to zero because $a=-b-c$. For subspaces $P,Q$, $P^\perp+Q^\perp=(P\cap Q)^\perp$: inclusion follows from the definition of orthogonality, and the dimensions agree by rank-nullity and the formula $\dim U^\perp=\dim V-\dim U$. The latter follows because $V\to U^*$, $v\mapsto\omega(v,-)|_U$, is onto (extend a functional on a basis of $U$ and use nondegeneracy of $\omega$), with kernel $U^\perp$. Thus $\bigl(L_2\cap(L_3+L_1)\bigr)^\perp =L_2+(L_3+L_1)^\perp=L_2+(L_1\cap L_3).$ The induced pairing is nondegenerate: if $a\in L_1\cap(L_2+L_3)$ pairs to zero with $L_2\cap(L_3+L_1)$, then $a\in L_2+(L_1\cap L_3).$ Writing $a=b+t$ with $b\in L_2$ and $t\in L_1\cap L_3$, the facts $a,t\in L_1$ imply $b\in L_1\cap L_2$, so $[a]=0$. In the other variable, if $b\in L_2\cap(L_3+L_1)$ pairs to zero with every $a\in L_1\cap(L_2+L_3)$, then $b\in(L_1\cap(L_2+L_3))^\perp=L_1+(L_2\cap L_3)$. Since $b\in L_2$, its class is zero in $U_{231}$. [F1, F2, step 1.1, algebra]

2.2 Fix $2\le k<n$. Let $K_A$ be the sum-zero subspace for the list $(L_1,\ldots,L_k)$ and $K_B$ that for $(L_1,L_k,L_{k+1},\ldots,L_n)$. For $a=(a_1,\ldots,a_k)$ and $b=(b_1,b_k,b_{k+1},\ldots,b_n)$ define $s(a,b)=(a_1+b_1,a_2,\ldots,a_{k-1},a_k+b_k,b_{k+1},\ldots,b_n)\in K.$ Using $q(v,w)=\sum_{i>j}\omega(v_i,w_j)$, the terms involving only $a$ give $q_A$, those involving only $b$ give $q_B$, and the cross terms reduce, by $\sum_i a_i=0=\sum b_i$, to $-\omega(a_1,b'_1)+\omega(a'_k,b_k).$ Both terms vanish because $a_1,b'_1\in L_1$ and $a'_k,b_k\in L_k$. Thus $s$ preserves the orthogonal-sum form. Its kernel is the set of pairs with all interior coordinates zero and shared endpoint coordinates $( -u, u)$ in $K_A$ and $(u,-u)$ in $K_B$, for $u\in E:=L_1\cap L_k$. Its image is $\ker\delta$, where $\delta:K\to V/(L_1+L_k),\qquad \delta(v)=\sum_{i=1}^k v_i\bmod (L_1+L_k).$ Indeed, the prefix sum of $s(a,b)$ is $b_1+b_k\in L_1+L_k$, because $\sum_i a_i=0$. Conversely, if the prefix $p=\sum_{i=1}^kv_i$ equals $u_1+u_k$ with $u_1\in L_1,u_k\in L_k$, set $b_1=u_1,b_k=u_k$, $a_1=v_1-b_1$, $a_k=v_k-b_k$, and use $a_i=v_i$ for $1<i<k$, $b_i=v_i$ for $i>k$; then both shorter lists sum to zero and $s(a,b)=v$. [F1, step 1.2, algebra]

3.1 Symmetry follows from $a+b+c=a'+b'+c'=0$ and isotropy: expanding $0=\omega(a,a')=\omega(-b-c,-b'-c')$ gives $\omega(c,b')=\omega(c',b)$, and then $\omega(a,b')=\omega(a',b)$. Thus $\psi_{123}$ is a nondegenerate symmetric form and its signature is defined. [F1, step 1.1, step 2.1, algebra]

3.2 In finite-dimensional symplectic $V$, the map $V\to U^*$ given by $v\mapsto\omega(v,-)|_U$ is onto for every subspace $U$: extend a functional on $U$ to a basis of $V$ and use the isomorphism $V\to V^*$ defined by $\omega$. Its kernel is $U^\perp$, so $\dim U^\perp=\dim V-\dim U$. The inclusion $A^\perp+B^\perp\subseteq(A\cap B)^\perp$ is equality because both sides then have the same dimension. In particular $(L_1\cap L_k)^\perp=L_1+L_k$. Embed $E$ into $K$ by $r(u)=(-u,0,\ldots,0,u,0,\ldots,0)$, with entries at positions $1$ and $k$, and let $J=r(E)$. The partial-sum formula gives $q(r(u),w)=\omega\!\left(u,\sum_{i=1}^k w_i\right),$ since the omitted $w_k$ term pairs to zero with $u\in L_k$. Thus $J$ is isotropic and $J^\perp=\ker\delta=\operatorname{im}s$, because $(L_1\cap L_k)^\perp=L_1+L_k$ by [F1]–[F2]. Put $\bar K=K/\operatorname{rad}(q)$ and let $\bar J$ be the image of $J$ in $\bar K$. The map induced by $s$ onto $\bar J^\perp/\bar J$ is surjective because $\operatorname{im}s=J^\perp$. Its kernel is radical by preservation of the form. Conversely, a source vector in the radical maps to a vector orthogonal to every element of $\bar J^\perp$; nondegeneracy of $\bar K$ makes that orthogonal complement $\bar J$, so the vector is in the kernel. Hence the nondegenerate quotient of $K_A\oplus K_B$ is isometric to $\bar J^\perp/\bar J$. [F1, F2, step 2.2, algebra]

3.3 For $n=3$, the partial-sum formula of step 1.2 gives $q(v,w)=\omega(v_2,w_1)+\omega(v_3,w_1)+\omega(v_3,w_2)=\omega(v_3,w_2)$, since $v_2+v_3=-v_1$ and $v_1,w_1\in L_1$. Since $v_3=-v_1-v_2$ and $v_2,w_2\in L_2$, this is $-\omega(v_1,w_2)=-\psi_{123}([v_1],[w_1])$. The projection $K\to U_{123}$, $(v_1,v_2,v_3)\mapsto[v_1]$, is onto. Its kernel is the image of the adjacent-intersection difference map $((u_{12},u_{23},u_{31}))\longmapsto(u_{12}-u_{31},u_{23}-u_{12},u_{31}-u_{23}).$ For the reverse inclusion, if $v_1=u_{12}+u_{13}$ represents zero, set $u_{31}=-u_{13}$ and $u_{23}=v_2+u_{12}$; then $u_{23}\in L_2\cap L_3$ by $v_1+v_2+v_3=0$, and the displayed difference is $v$. The nondegeneracy in step 2.1 now shows that this kernel is exactly $\operatorname{rad}(q)$. Consequently $\tau(L_1,L_2,L_3)=-\mu(L_1,L_2,L_3)$; this is the sign translation from the cyclic convention to Walker's Wall-form convention. [F1, step 2.1, step 1.2, algebra]

4.1 If $Q$ is a nondegenerate real symmetric form and $I$ is isotropic, choose a basis $e_1,\ldots,e_r$ of $I$ and, by nondegeneracy, vectors $f_j$ with $Q(e_i,f_j)=\delta_{ij}$. Replace $f_j$ by $f_j-\frac12\sum_\ell Q(f_\ell,f_j)e_\ell$; symmetry makes all pairings among the modified $f_j$ vanish, so their span with $I$ is hyperbolic of signature zero. Its orthogonal complement identifies with $I^\perp/I$. Therefore $\operatorname{sign}(I^\perp/I)=\operatorname{sign}(Q)$. Applying this to step 3.2 proves $\tau(L_1,\ldots,L_n)=\tau(L_1,\ldots,L_k)+\tau(L_1,L_k,\ldots,L_n).$ [F2, step 3.2, algebra]

5.1 Reindexing a cyclic list identifies its sum-zero space with the same space and changes each chosen antiderivative only by a common constant; step 1.2 shows that this does not change $q$. Hence $\tau$ is cyclically invariant. Apply the chain identity of step 4.1 to $(L_1,L_2,L_3,L_4)$ and to its cyclic rotation $(L_2,L_3,L_4,L_1)$. Thus $\tau_{123}+\tau_{134}=\tau_{1234}=\tau_{234}+\tau_{124}.$ Multiplying by $-1$ and using step 3.3 gives the asserted four-Lagrangian identity for $\mu$. [step 1.2, step 4.1, step 3.3, algebra] ∎
