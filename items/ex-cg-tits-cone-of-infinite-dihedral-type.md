---
id: ex-cg-tits-cone-of-infinite-dihedral-type
kind: example
title: "The Tits cone of infinite dihedral type: interior, boundary, and stabilizers"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: ["def-cg-tits-cone-and-fundamental-chamber", "thm-cg-tits-cone-finite-negativity-and-convexity", "thm-cg-dual-chamber-intersections-and-point-stabilizers", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "def-cg-dual-chambers-and-reflection-hyperplanes", "lem-cg-dual-action-and-chamber-faces-exist", "thm-cg-root-sign-and-simple-reflection-positivity", "def-hh-coxeter-matrix-word-group-and-length", "def-linear-basis", "thm-reals-ordered-field", "lem-integer-part", "def-metric-interior-closure-boundary"]
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

Let $S=\{s,t\}$ with $m(s,t)=\infty$, so that $B(e_s,e_t)=-1$ ([[def-cg-real-coxeter-form-and-reflection]] (2)), and let $W$ be the infinite dihedral group with generators $s,t$ and length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]); let $V=\mathbb R^S$, and let $C$, $C^\circ$, the chambers $wC$, the Tits cone $U$, its interior $U^\circ$ and $\operatorname{Neg}(f)$ be as in [[def-cg-tits-cone-and-fundamental-chamber]]. Write a functional as the pair $(x_s,x_t):=(f(e_s),f(e_t))$ and put
$$\Delta(f):=f(e_s+e_t)=x_s+x_t .$$
Then:

**(i) Dual action and invariance of $\Delta$.** The generators act by
$$s:(x_s,x_t)\mapsto(-x_s,\ 2x_s+x_t),\qquad t:(x_s,x_t)\mapsto(x_s+2x_t,\ -x_t),$$
and $\Delta(w\cdot f)=\Delta(f)$ for every $w\in W$.

**(ii) The chambers.** $C$ is the closed positive quadrant; with $u:=st$ one has
$$u^k:(x_s,x_t)\mapsto(x_s-2k\,\Delta(f),\ x_t+2k\,\Delta(f)),\qquad (u^ks):(x_s,x_t)\mapsto(-(x_s+2k\,\Delta(f)),\ x_t+2x_s+2k\,\Delta(f)),$$
for every $k\in\mathbb Z$, and the chambers of the system are the translates $u^kC$ and $u^ksC$ of the quadrant; on each affine line $\{\Delta=\text{const}>0\}$ their traces are unit intervals in the normalized coordinate $a=x_s/\Delta$.

**(iii) The Tits cone, its interior and its boundary.**
$$U=\{f:\Delta(f)>0\}\cup\{0\},\qquad U^\circ=\{f:\Delta(f)>0\},\qquad \overline U=\{f:\Delta(f)\ge0\},$$
and the topological boundary of $U$ is the line $\{f:\Delta(f)=0\}$, of which $U$ contains exactly the point $0$. In particular $U$ is neither open nor closed, and the nonzero boundary points do not lie in $U$.

**(iv) Sample membership tests.** $f=(1,-1)$ and $f'=(-1,0)$ satisfy $\operatorname{Neg}(f)\supseteq\{e_t+ku:k\ge0\}$ and $\operatorname{Neg}(f')\supseteq\{e_s+ku:k\ge0\}$ (with $u=e_s+e_t$), so both sets are infinite and $f,f'\notin U$ by the criterion of [[thm-cg-tits-cone-finite-negativity-and-convexity]] (1); on the other hand $s\cdot(-1,3)=(1,1)\in C$, so $(-1,3)\in U$.

**(v) Stabilizers.** $\operatorname{Stab}_W(0)=W$; $\operatorname{Stab}_W(f)=\langle st\rangle$ for every $f$ with $\Delta(f)=0$ and $f\ne0$; $\operatorname{Stab}_W(f)=\{1\}$ for $f\in C^\circ$ and $\operatorname{Stab}_W(f)=\{1,s\}$ or $\{1,t\}$ for the points of the two open walls of $C$; consequently every point of $U\setminus\{0\}$ has stabilizer of order at most $2$. The outside point $f'=(-1,0)$ has $\operatorname{Stab}_W(f')=\{1,t\}$.

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $m(s,t)=\infty$, the presented group $W$ with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$, the closed chamber $C$, its interior $C^\circ$, the chambers $wC$, the Tits cone $U$ with interior $U^\circ$ and the negative-root sets $\operatorname{Neg}(f)$, as in [[def-cg-tits-cone-and-fundamental-chamber]]; a functional is written as the pair $(x_s,x_t)=(f(e_s),f(e_t))$ and $\Delta(f):=f(e_s+e_t)=x_s+x_t$.

[F1] $U=\bigcup_{w\in W}wC$, each chamber is $wC=\{w\cdot f:f\in C\}$, $w'U=U$ for all $w'$, the dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$ and is a left action ($w_1\cdot(w_2\cdot f)=(w_1w_2)\cdot f$, $\mathrm{id}\cdot f=f$), and $U^\circ$ and $d$ are the interior and the coordinate metric $d(f,g)=\max_s|f(e_s)-g(e_s)|$ of the definition; moreover $f\mapsto(f(e_s),f(e_t))$ is a linear bijection $V^*\to\mathbb R^2$, so a functional is uniquely determined by, and may be freely prescribed by, its two coordinates. ([[def-cg-tits-cone-and-fundamental-chamber]] (1)-(3)).

[F2] $f\in U$ if and only if $\operatorname{Neg}(f)$ is finite, and $\operatorname{Neg}(f)=\emptyset$ if and only if $f\in C$. ([[thm-cg-tits-cone-finite-negativity-and-convexity]] (1)-(2)).

[F3] If $f,g\in C$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$; and $\operatorname{Stab}_W(f)=W_{S(f)}$ for $f\in C$. ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (3)-(4)).

[F4] For $m(s,t)=\infty$ one has $c(s,t)=1$, hence $B(e_s,e_t)=-1$, while $B(e_s,e_s)=B(e_t,e_t)=1$; for $B(a,a)=1$ the reflection is $r_av=v-2B(v,a)a$. ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3)).

[F5] Each $r_s$ is a linear involution; $r_se_s=-e_s$ and $r_sv=v$ when $B(v,e_s)=0$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F6] One has $\rho(s)=r_s$ for every generator $s$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$. ([[def-cg-canonical-reflection-homomorphism]] (1)-(2)).

[F7] The closed chamber is $C=\{f:f(e_s)\ge0,\ f(e_t)\ge0\}$, its interior is $C^\circ=\{f:f(e_s)>0,\ f(e_t)>0\}$, and the root hyperplanes are $H_\alpha=\{f:f(\alpha)=0\}$. ([[def-cg-dual-chambers-and-reflection-hyperplanes]] (2)).

[F8] For $m(s,t)=m<\infty$ the $2m$ chambers $wC_P$ ($w\in W_{s,t}$) of the rank-two plane are the $2m$ closed sectors cut out by the $m$ root hyperplanes $H_\beta\cap P^*$, with pairwise disjoint interiors, union all of $P^*$, and $W_{s,t}$ acting on them simply transitively; for $m(s,t)=\infty$ the chambers $wC_P$ ($w\in W_{s,t}$) have pairwise disjoint interiors, their union is $\{\varphi\in P^*:\varphi(e_s+e_t)>0\}\cup\{0\}$, and the root hyperplanes cut the affine line $\{\varphi\in P^*:\varphi(e_s+e_t)=1\}$ exactly in the integers in the coordinate $y_s$. In the infinite case the dual generators act by $\rho(s)^*(y_s,y_t)=(-y_s,\,2y_s+y_t)$ and $\rho(t)^*(y_s,y_t)=(y_s+2y_t,\,-y_t)$. ([[lem-cg-dual-action-and-chamber-faces-exist]] (3)(i)-(ii)).

[F9] $\Phi=\Phi_+\sqcup\Phi_-$, every root lies in $V_+\setminus\{0\}$ or $-V_+\setminus\{0\}$ but not both, one has $e_s\in\Phi_+$ for every $s\in S$, and for every $s$ one has $r_s(\Phi_+\setminus\{e_s\})=\Phi_+\setminus\{e_s\}$. ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)-(3)).

[F10] $W$ is the group presented by the generators $s,t$ with the relations $s^2=t^2=1$ (and no relation for $m(s,t)=\infty$); every element of $W$ is the image of a word in $S$. ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F11] For a subset $A$ of a metric space: $x\in\overline A$ if and only if every ball about $x$ meets $A$, the interior of $A$ consists of the points some ball about which lies in $A$, and the boundary of $A$ is $\overline A\setminus\operatorname{int}A$. ([[def-metric-interior-closure-boundary]]).

[F12] $\mathbb R$ is an ordered field: the sum of positive elements is positive, and $2\lambda>0$ for $\lambda>0$. ([[thm-reals-ordered-field]]).

[F13] Every real $a$ has an integer $n$ with $n\le a<n+1$. ([[lem-integer-part]]).

## Verification

**Proof technique:** explicit computation with the unipotent rank-two product.

1.1 The dual action and $\Delta$. For every $f=(x_s,x_t)$ the reflection formula gives $r_se_s=-e_s$, $r_se_t=e_t+2e_s$, $r_te_t=-e_t$ and $r_te_s=e_s+2e_t$, so evaluating the dual action gives $s\cdot f=(-x_s,\ 2x_s+x_t)$ and $t\cdot f=(x_s+2x_t,\ -x_t)$. Both generators fix the vector $e_s+e_t$: indeed $r_s(e_s+e_t)=-e_s+e_t+2e_s=e_s+e_t$ and symmetrically for $t$; hence $\rho(w)$ and $\rho(w)^{-1}$ fix $e_s+e_t$ for every $w$ and $\Delta(w\cdot f)=(w\cdot f)(e_s+e_t)=f(\rho(w)^{-1}(e_s+e_t))=\Delta(f)$. This is the action and the invariance assertion of (i). [F4, F5, F6, F7, algebra]

1.2 The elements of $W$. In $W$ one has $s^2=t^2=1$, and with $u=st$ also $u^{-1}=ts$, so $t=u^{-1}s$; every product of generators can be rewritten as $u^k$ or $u^ks$ by the rules $(u^k)s=u^ks$, $(u^k)t=u^{k-1}s$, $(u^ks)s=u^k$ and $(u^ks)t=u^{k+1}$, and induction on the number of factors gives $W=\{u^k:k\in\mathbb Z\}\cup\{u^ks:k\in\mathbb Z\}$. [F10, algebra]

1.3 Sample membership tests, (iv). For $k\ge0$ put $\alpha_k:=e_t+k(e_s+e_t)=ke_s+(k+1)e_t$ and $\beta_k:=e_s+k(e_s+e_t)=(k+1)e_s+ke_t$. Then $\alpha_0=e_t$ and $\beta_0=e_s$ lie in $\Phi_+$, and $B(\alpha_k,e_s)=-1$, $B(\beta_k,e_t)=-1$, so the reflection formula gives $r_s\alpha_k=\alpha_k+2e_s=\beta_{k+1}$ and $r_t\beta_k=\beta_k+2e_t=\alpha_{k+1}$. Since $r_s$ permutes $\Phi_+\setminus\{e_s\}$ and $\alpha_k\ne e_s$ for all $k\ge0$, while $r_t$ permutes $\Phi_+\setminus\{e_t\}$ and $\beta_k\ne e_t$ for all $k\ge1$, mutual induction on $k$ gives $\alpha_k,\beta_k\in\Phi_+$ for all $k\ge0$. For $f=(1,-1)$ one has $f(\alpha_k)=k-(k+1)=-1<0$ for every $k$, so $\operatorname{Neg}(f)$ is infinite and $f\notin U$; for $f'=(-1,0)$ one has $f'(\beta_k)=-(k+1)<0$ for every $k$, so $f'\notin U$. Finally $s\cdot(-1,3)=(-(-1),\,2(-1)+3)=(1,1)\in C$, so $(-1,3)=s\cdot(1,1)\in sC\subseteq U$. [F2, F4, F5, F6, F9, algebra]

2.1 The products $u^k$ and $u^ks$. With $u=st$ one has $u\cdot f=s\cdot(t\cdot f)=(-(x_s+2x_t),\,2(x_s+2x_t)-x_t)=(x_s-2\Delta,\,x_t+2\Delta)=f-2\Delta\,(1,-1)$; since $\Delta$ is $W$-invariant, iterating gives $$u^k\cdot f=(x_s-2k\Delta,\ x_t+2k\Delta),\qquad u^ks\cdot f=\bigl(-(x_s+2k\Delta),\ x_t+2x_s+2k\Delta\bigr)$$ for every $k\in\mathbb Z$. [step 1.1, algebra]

2.2 The chambers. By step 1.2 the chambers of the system are the translates $u^kC$ and $u^ksC$ of the closed quadrant $C=\{x_s\ge0,\ x_t\ge0\}$. [F7, step 1.2, algebra]

3.1 The traces on an affine line. Write $a:=x_s/\Delta$ on the region $\Delta>0$, so that $x_t/\Delta=1-a$. The computed matrices of step 2.1 identify the chambers $u^kC$ and $u^ksC$ with the intervals: $f\in u^kC$ if and only if $u^{-k}\cdot f\in C$, that is $x_s+2k\Delta\ge0$ and $x_t-2k\Delta\ge0$, which reads $-2k\le a\le1-2k$; and $f\in u^ksC$ if and only if $-(x_s+2k\Delta)\ge0$ and $x_t+2x_s+2k\Delta\ge0$, which reads $-(2k+1)\le a\le-2k$. Thus on each affine line $\{\Delta=\text{const}>0\}$ the traces of the chambers are the unit intervals with root traces the integers, in agreement with the rank-two picture, and the chambers are exactly the $u^kC$ and $u^ksC$. This is (ii). [F8, step 2.1, step 2.2, algebra]

3.2 Stabilizers, (v). Since $\operatorname{Stab}_W(f)=W_{S(f)}$ for $f\in C$, one has $\operatorname{Stab}_W(0)=W_S=W$ because $S(0)=\{s,t\}$. Let $\Delta(f)=0$ and $f\ne0$: step 2.1 gives $u^k\cdot f=f$ for every $k$ and $(u^ks)\cdot f=-f\ne f$ for every $k$, while $W=\{u^k\}\cup\{u^ks\}$ by step 1.2; since $u$ has infinite order, because $u^k\cdot(1,0)=(1-2k,\,2k)\ne(1,0)$ for $k\ne0$, the stabilizer $\operatorname{Stab}_W(f)=\langle u\rangle$ is infinite cyclic. For $f\in C^\circ$ the zero set is empty, so $\operatorname{Stab}_W(f)=\{1\}$; for the open wall $\{x_s=0,x_t>0\}$ it is $\{s\}$, so the stabilizer is $\{1,s\}$, and symmetrically $\{1,t\}$ for $\{x_t=0,x_s>0\}$. For a general $g=w\cdot f\in U$ with $f\in C$ and $f\ne0$, the stabilizer formula gives $\operatorname{Stab}_W(g)=wW_{S(f)}w^{-1}$, of order at most $2$: $S(f)\subseteq\{s,t\}$, and $S(f)=\{s,t\}$ would give $f=0$, so $|S(f)|\le1$. Hence every point of $U\setminus\{0\}$ has stabilizer of order at most $2$. Finally, for $f'=(-1,0)$ the generator $t$ fixes $f'$, and among the remaining elements $u^k\cdot(-1,0)=(-1+2k,-2k)$ equals $(-1,0)$ only for $k=0$, while $u^ks\cdot(-1,0)=(1+2k,-2-2k)$ equals $(-1,0)$ only for $k=-1$, which is the element $u^{-1}s=t$ already listed; hence $\operatorname{Stab}_W(f')=\{1,t\}$. [F3, step 1.2, step 2.1, algebra]

4.1 The Tits cone, (iii). Since $\Delta$ is $W$-invariant and $C\subseteq\{\Delta\ge0\}$, one has $U\subseteq\{\Delta\ge0\}$. If $\Delta(f)>0$, then $a:=x_s/\Delta$ satisfies $x_t/\Delta=1-a$, and the intervals $[-2k,1-2k]$ and $[-(2k+1),-2k]$, $k\in\mathbb Z$, cover $\mathbb R$: these are the unit intervals $[n,n+1]$, $n\in\mathbb Z$, in the two parity classes, and [F13] places every real $a$ in one of them; by step 3.1 the functional $f$ lies in some chamber, so $f\in U$. If $\Delta(f)=0$ and $f\ne0$, then $u^k\cdot f=f$ for all $k$ while $(u^ks)\cdot f=-f\ne f$ and $W=\{u^k\}\cup\{u^ks\}$; such an $f$ lies in $U$ if and only if $f\in C$ or $-f\in C$, and both conditions force $f=0$ because $C\cap\{\Delta=0\}=\{0\}$. Hence $U=\{\Delta>0\}\cup\{0\}$. [F1, F12, F13, step 2.1, step 3.1, algebra]

5.1 The interior, the closure and the boundary, (iii). The half-plane $\{\Delta>0\}$ lies in $U$ and is open: if $\Delta(f)>0$ and $d(f,g)<\Delta(f)/2$, then $|\Delta(g)-\Delta(f)|=|(g-f)(e_s)+(g-f)(e_t)|\le2d(f,g)<\Delta(f)$, so $\Delta(g)>0$; hence $\{\Delta>0\}\subseteq U^\circ$. The origin is not an interior point: for $\lambda>0$ the point $(-\lambda,0)$ has $\Delta=-\lambda<0$ and so lies outside $U$, while $d((-\lambda,0),0)=\lambda$ can be made arbitrarily small; hence $0\notin U^\circ$, and $U^\circ=\{\Delta>0\}$ by step 4.1. Moreover $\overline U=\{\Delta\ge0\}$: any $f$ with $\Delta(f)<0$ has the ball of radius $|\Delta(f)|/2$ disjoint from $U$, because $\Delta(g)<0$ for every $g$ in it, while every $f$ with $\Delta(f)\ge0$ is a limit of the points $g_\lambda$ with coordinates $(x_s+\lambda,\,x_t+\lambda)$, $\lambda>0$, which exist as functionals by [F1] and satisfy $\Delta(g_\lambda)=\Delta(f)+2\lambda>0$, so $g_\lambda\in U$ by step 4.1, with $d(g_\lambda,f)=\lambda$ decreasing to $0$ (and $f\in U$ itself when $\Delta(f)>0$). Therefore the boundary $\overline U\setminus U^\circ$ is the line $\{\Delta=0\}$, of which $U$ contains exactly the point $0$; and $U$ is neither open nor closed, because $0\in U$ is not interior while the nonzero boundary points lie in $\overline U\setminus U$. [F1, F11, F12, step 4.1, algebra] ∎
