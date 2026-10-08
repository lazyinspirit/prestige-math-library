---
id: ex-cg-outside-tits-cone-point-with-infinite-stabilizer
kind: example
title: "A point outside the Tits cone with infinite stabilizer"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: ["ex-cg-tits-cone-of-infinite-dihedral-type", "def-cg-tits-cone-and-fundamental-chamber", "thm-cg-tits-cone-finite-negativity-and-convexity", "thm-cg-dual-chamber-intersections-and-point-stabilizers", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "def-cg-dual-chambers-and-reflection-hyperplanes", "def-hh-coxeter-matrix-word-group-and-length", "thm-hh-parabolic-minimal-representatives-and-length-additivity", "thm-quarter-turn-values-and-shift-formulas"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 440-441 (Lemma D.1.5 and its Case 1, the infinite dihedral picture); Appendix D.2, printed pp. 442-445 (Examples D.2.1, Lemmas D.2.2-D.2.5, Theorems D.2.6-D.2.7); Chapter 6, printed pp. 90-91 (Lemma 6.6.8, whose proof is reused by Lemma D.2.5)"
verification:
  precheck: pass
---

## Example

Let $S=\{s_1,s_2,s_3,s_4\}$ with $m(s_1,s_2)=m(s_3,s_4)=\infty$, $m(s_i,s_j)=2$ whenever one of $s_i,s_j$ lies in $\{s_1,s_2\}$ and the other in $\{s_3,s_4\}$, and $m(s_i,s_i)=1$; thus $W=W_1\times W_2$ with $W_1=\langle s_1,s_2\rangle$ and $W_2=\langle s_3,s_4\rangle$ two infinite dihedral groups ([[def-hh-coxeter-matrix-word-group-and-length]]). Write $f=(x_1,x_2,x_3,x_4)$ for a functional, put $\Delta_1:=x_1+x_2$ and $\Delta_2:=x_3+x_4$, and let $U$ be the Tits cone of $(W,S)$ ([[def-cg-tits-cone-and-fundamental-chamber]]). Then:

**(i) Block decomposition.** $B$ is block diagonal with blocks $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ on $\{e_{s_1},e_{s_2}\}$ and on $\{e_{s_3},e_{s_4}\}$ and zero cross terms, each generator acts nontrivially only on its own block, the dual action is componentwise, and
$$C=C_1\times C_2,\qquad U=U_1\times U_2,$$
where $C_i$, $U_i$ are the chamber and the Tits cone of the $i$-th infinite dihedral factor.

**(ii) The vector.** By [[ex-cg-tits-cone-of-infinite-dihedral-type]] (iii), $U_1=\{f_1:\Delta_1(f_1)>0\}\cup\{0\}$. The functional
$$f=(-1,\ 0,\ 1,\ -1)$$
has $\Delta_1(f)=-1<0$, hence $f_1\notin U_1$ and $f\notin U$.

**(iii) Infinite stabilizer.** $\operatorname{Stab}_W(f)=\{1,s_2\}\times\langle s_3s_4\rangle$: the first factor is the order-two subgroup fixing the line $x_2=0$ pointwise, the second is infinite cyclic. Hence $f$ is a vector outside the Tits cone whose stabilizer is infinite, so it is not a finite parabolic subgroup of $W$; this shows that an arbitrary vector outside the Tits cone need not have a finite parabolic stabilizer. For contrast, in the rank-two example [[ex-cg-tits-cone-of-infinite-dihedral-type]] the infinite stabilizer $\langle st\rangle$ occurs exactly on the boundary line $\Delta=0$ with the origin removed, which lies outside $U$ but in its closure, and every point with $\Delta\neq0$ has stabilizer of order at most $2$: no $u^k$ with $k\neq0$ fixes it, and $u^ks\cdot f=f$ reduces to the single equation $x_s=-k\Delta$, which determines at most one $k$. Here moreover $\Delta_1(f_1)=-1<0$, so $f$ also lies outside the closure $\overline U=\overline{U_1}\times\overline{U_2}=\{f:\Delta_1(f)\ge0,\ \Delta_2(f)\ge0\}$ of the Tits cone, and the infinite stabilizer is carried by a point strictly outside the closed cone.

## Facts & Assumptions

**Given:** $S=\{s_1,s_2,s_3,s_4\}$ with $m(s_1,s_2)=m(s_3,s_4)=\infty$, $m(s_i,s_j)=2$ across the two blocks and $m(s_i,s_i)=1$; the presented group $W$ with $W_1=\langle s_1,s_2\rangle$ and $W_2=\langle s_3,s_4\rangle$; a functional $f=(x_1,x_2,x_3,x_4)$ with $\Delta_1:=x_1+x_2$ and $\Delta_2:=x_3+x_4$; the Tits cone $U$ of $(W,S)$ as in [[def-cg-tits-cone-and-fundamental-chamber]].

[F1] For any pair $(s,t)$ with $m(s,t)=\infty$ in a Coxeter system, the subgroup $W_{\{s,t\}}$ is the Coxeter group presented by the restricted rank-two matrix, so the following rank-two facts apply to it: the generators act by $s:(x_s,x_t)\mapsto(-x_s,\,2x_s+x_t)$ and $t:(x_s,x_t)\mapsto(x_s+2x_t,\,-x_t)$, and $\Delta$ is invariant; with $u=st$ one has $u^k\cdot x=x+2k\Delta(x)(-1,1)$ and $u^ks\cdot x=\bigl(-(x_s+2k\Delta(x)),\ x_t+2x_s+2k\Delta(x)\bigr)$ for all $k\in\mathbb Z$, and $W=\{u^k\}\cup\{u^ks\}$; the Tits cone is $U=\{f:\Delta(f)>0\}\cup\{0\}$ with closure $\overline U=\{\Delta\ge0\}$; and $\operatorname{Stab}_W(f)=\langle st\rangle$ for every $f$ with $\Delta(f)=0$ and $f\ne0$, while every point of $U\setminus\{0\}$ has stabilizer of order at most $2$. ([[ex-cg-tits-cone-of-infinite-dihedral-type]] (i)-(iii), (v), [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F2] $U=\bigcup_{w\in W}wC$ for the closed chamber $C=\{f:f(e_s)\ge0\ \text{for all}\ s\}$, and $wU=U$ for every $w\in W$. ([[def-cg-tits-cone-and-fundamental-chamber]] (1)-(2)).

[F3] For $f\in C$ one has $\operatorname{Stab}_W(f)=W_{S(f)}$, and $f\in U$ if and only if $\operatorname{Neg}(f)$ is finite. ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (4), [[thm-cg-tits-cone-finite-negativity-and-convexity]] (1)).

[F4] For a cross pair one has $B(e_i,e_j)=-\cos(\pi/2)=0$, while $B(e_{s_1},e_{s_2})=B(e_{s_3},e_{s_4})=-1$ and all diagonal entries are $1$; for $B(a,a)=1$ the reflection is $r_av=v-2B(v,a)a$. ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3), [[thm-quarter-turn-values-and-shift-formulas]]).

[F5] Each $r_s$ is a linear involution, and for $m(s,t)=\infty$ the product $r_sr_t$ has infinite order on $V$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2), (3)(iv)).

[F6] $\rho(s)=r_s$ for every generator $s$; the dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$; and $C=\{f:f(e_s)\ge0\ \text{for all}\ s\}$. ([[def-cg-canonical-reflection-homomorphism]] (1), [[def-cg-dual-chambers-and-reflection-hyperplanes]] (1)-(2)).

[F7] $W$ is the presented group of the Coxeter matrix: generators are involutions, a relator entry $m(s,t)=2$ means $(st)^2=1$, and every assignment of the generators to elements of a group satisfying these relations extends uniquely to a homomorphism of $W$. ([[def-hh-coxeter-matrix-word-group-and-length]]).

## Verification

**Proof technique:** componentwise computation in a product of two infinite dihedral groups.

1.1 Block decomposition, (i). For a cross pair the Coxeter entry is $2$, so the corresponding off-diagonal form entry is $-\cos(\pi/2)=0$, and the form is block diagonal with blocks $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ on $\{e_{s_1},e_{s_2}\}$ and on $\{e_{s_3},e_{s_4}\}$. For a generator $s$ of one block and a basis vector $e_j$ of the other block, the reflection formula gives $r_se_j=e_j-2B(e_j,e_s)e_s=e_j$, so each generator acts trivially on the other block. Put $V_i:=\operatorname{span}\{e_j:j\in S_i\}$; the same computation shows that every $\rho(s)$ preserves each $V_i$ and that $\rho$ decomposes as $\rho(w_1,w_2)=\rho_1(w_1)\oplus\rho_2(w_2)$, once $W$ is identified with $W_1\times W_2$: cross generators $s\in S_1$, $t\in S_2$ satisfy $(st)^2=1$, hence $st=t^{-1}s^{-1}=ts$ because both are involutions, so the blocks commute. The assignment $s_1\mapsto(s_1,1),\ s_2\mapsto(s_2,1),\ s_3\mapsto(1,s_3),\ s_4\mapsto(1,s_4)$ respects the relators (within-block relators hold factorwise and cross pairs satisfy $((s_i,1)(1,s_j))^2=(s_i^2,s_j^2)=1$), so by the universal property of [F7] it induces a homomorphism $\Phi:W\to W_1\times W_2$, which is inverse to the multiplication map $W_1\times W_2\to W$ because both composites are homomorphisms agreeing with the identity on generators. By the intrinsic parabolic presentation each $W_i$ is moreover the Coxeter group presented by the restricted rank-two matrix $m|_{S_i}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)), so the rank-two facts of [F1] apply to $W_1$ and $W_2$. The dual action is therefore componentwise, and $C=\{f:f(e_j)\ge0\ \text{for all}\ j\}=\{f_1:f_1(e_{s_1}),f_1(e_{s_2})\ge0\}\times\{f_2:f_2(e_{s_3}),f_2(e_{s_4})\ge0\}=C_1\times C_2$, whence $U=\bigcup_{(w_1,w_2)}w_1C_1\times w_2C_2=U_1\times U_2$. This is (i). [F1, F2, F4, F5, F6, F7, algebra]

2.1 The vector, (ii). By clause (iii) of the rank-two example, $U_1=\{f_1:\Delta_1(f_1)>0\}\cup\{0\}$. For $f=(-1,0,1,-1)$ one has $\Delta_1(f_1)=-1<0$, so $f_1\notin U_1$; by step 1.1 $U=U_1\times U_2$, hence $f\notin U$. [F1, step 1.1, algebra]

3.1 The stabilizer and the contrast, (iii). For the first factor, use the rank-two formulas with $(s,t)=(s_1,s_2)$ read off from the infinite dihedral example: $s_1:(x_1,x_2)\mapsto(-x_1,\,2x_1+x_2)$ and $s_2:(x_1,x_2)\mapsto(x_1+2x_2,\,-x_2)$, so $s_2$ fixes the line $x_2=0$ pointwise, and in particular fixes $f_1=(-1,0)$; writing $u_1:=s_1s_2$ one has $u_1^k\cdot x=x+2k\Delta_1(x)(-1,1)$, so $u_1^k\cdot f_1=(-1+2k,-2k)$ equals $f_1$ only for $k=0$, while $u_1^ks_1\cdot f_1=(1+2k,-2-2k)$ equals $(-1,0)$ only for $k=-1$, which is the element $u_1^{-1}s_1=s_2$; since $W_1=\{u_1^k\}\cup\{u_1^ks_1\}$, this gives $\operatorname{Stab}_{W_1}(f_1)=\{1,s_2\}$. For the second factor $f_2=(1,-1)$ has $\Delta_2(f_2)=0$ and $f_2\ne0$, so the rank-two stabilizer computation gives $\operatorname{Stab}_{W_2}(f_2)=\langle s_3s_4\rangle$, which is infinite cyclic because $\rho(s_3s_4)=r_{s_3}r_{s_4}$ has infinite order. Since the action is componentwise by step 1.1, an element $(w_1,w_2)$ fixes $f$ exactly when $w_1$ fixes $f_1$ and $w_2$ fixes $f_2$, so $\operatorname{Stab}_W(f)=\{1,s_2\}\times\langle s_3s_4\rangle$; this subgroup is infinite (it contains $(1,(s_3s_4)^k)$ for $k\ne0$), hence it cannot be a finite parabolic subgroup of $W$. Moreover $f$ lies outside the closure: $U\subseteq\{\Delta_1\ge0,\ \Delta_2\ge0\}$ and this set is closed, so $\overline U\subseteq\{\Delta_1\ge0,\ \Delta_2\ge0\}$, and conversely every point $(x_1,x_2,x_3,x_4)$ of it is approached by $(x_1+\varepsilon,x_2+\varepsilon,x_3+\varepsilon,x_4+\varepsilon)$ as $\varepsilon>0$ tends to zero; these approximants have both $\Delta_i>0$ and lie in $U$; since $\Delta_1(f_1)=-1<0$, the functional $f$ is strictly outside $\overline U$. For contrast, in the rank-two example the infinite stabilizer $\langle st\rangle$ occurs exactly on the boundary line $\Delta=0$ with the origin removed, which lies outside $U$ but in its closure, and every point with $\Delta\ne0$ has stabilizer of order at most $2$: no $u^k$ with $k\ne0$ fixes it, and $u^ks\cdot f=f$ reduces to the single equation $x_s=-k\Delta$, which determines at most one $k$, the corresponding element $u^ks$ being an involution. This is (iii). [F1, F3, F5, step 1.1, algebra] ∎
