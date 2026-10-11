---
id: lem-ultra-tight-multisets-admit-column-potentials
kind: lemma
title: "Ultra-tight multisets admit integer column potentials"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-integers, def-free-abelian-group, def-multiset-and-powerset-constructions]
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
    - title: "Matthew Fayers, Core blocks of Ariki–Koike algebras, author manuscript, J. Algebraic Combin. 26 (2007), 47–81"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/core.pdf"
      locator: "Actually read author PDF pp. 2–24; tight lemma Prop. 2.2/2.3 pp. 12–15, binary switches Prop. 2.4 pp. 15–16, core proof Theorem 3.1/Prop. 3.7 pp. 19–24. The local normalized-height energy argument below replaces the additional weight-theory suppliers."
---

## Statement

Let $r\ge1$ and $L_r:=\mathbb Z^r/\mathbb Z(1,\dots,1)$
([[def-free-abelian-group]], [[def-integers]]). For a finite multiset $X$ of
elements of $L_r$ ([[def-multiset-and-powerset-constructions]]), call $X$
**tight** if
$$(x_k-x_l)-(y_k-y_l)\le2$$
for all occurrences $x,y\in X$ and all indices $k,l\in\{1,\dots,r\}$. A
**zero exchange** replaces two occurrences $x,y$ by $x-e_k+e_l$ and
$y+e_k-e_l$ whenever $(x_k-x_l)-(y_k-y_l)=2$; this relation is symmetric.
Call $X$ **ultra-tight** if every finite zero-exchange sequence starting at
$X$ ends in a tight multiset. Then $X$ is ultra-tight if and only if there is
some $s\in\mathbb Z^r$ with
$$x_k-x_l\le s_k-s_l+1\qquad\text{for every }x\in X\ \text{and every }k,l .$$
This includes the empty multiset and $r=1$.

## Facts & Assumptions

**Given:** An integer $r\ge1$, the group $L_r=\mathbb Z^r/\mathbb Z(1,\dots,1)$,
and a finite multiset $X$ of elements of $L_r$.

[F1] Every element of $L_r$ has a representative $(x_1,\dots,x_r)\in\mathbb Z^r$;
for $\lambda\in\mathbb Z$ the representative $(x_k+\lambda)_k$ defines the same
element, so the difference $x_k-x_l$ is well defined on $L_r$, and negation
$x\mapsto-x$ and the elements $x-e_k+e_l$ are well defined
([[def-free-abelian-group]], [[def-integers]]).

[F2] A finite multiset consists of finitely many occurrences with repetition;
replacing a finite submultiset by another one of the same cardinality produces
a multiset of the same cardinality, and any finite directed graph has a
shortest directed path from a vertex $u$ to a vertex $v$ whenever a directed
path from $u$ to $v$ exists ([[def-multiset-and-powerset-constructions]]).

## Proof







**Proof technique:** direct.







**Given:** The data of [F1]–[F2]: the group $L_r$, a finite multiset $X$ in



$L_r$, and the definitions of tight, zero exchange and ultra-tight of the



Statement.







1.1 Elementary cases and well-definedness. The empty multiset is ultra-tight (its images under zero-exchange sequences are empty, hence tight) and satisfies the displayed condition with $s=0$; for $r=1$ one has $L_1=\mathbb Z/\mathbb Z\cdot1=0$ by [F1], so $x_1-x_1=0$ for every occurrence, every finite multiset is tight, and no zero exchange exists because its defining equation reads $0-0=2$; thus every finite multiset in $L_1$ is ultra-tight and satisfies the condition with $s=0$. By [F1] the differences $x_k-x_l$ do not change when representatives are shifted by a multiple of $(1,\dots,1)$, so tightness and the zero-exchange steps are well defined on classes; a zero-exchange sequence may therefore be computed with any representatives. [F1, F2]

1.2 The reverse implication. Assume $s\in\mathbb Z^r$ satisfies the displayed condition. Replacing each occurrence $x\in X$ by $x-s$ (a bijection of $L_r$ by [F1]) we may assume $x_k-x_l\le1$ for all $x,k,l$; applying this to the pair $(l,k)$ gives $x_l-x_k\le1$, so $|x_k-x_l|\le1$ for all $x,k,l$. We prove by induction on the length of a zero-exchange sequence that every such multiset is tight, and suppress the shift by $s$ from the notation. Suppose the next exchange acts on $x,y\in X$ in coordinates $k,l$, so $(x_k-x_l)-(y_k-y_l)=2$. Since $x_k-x_l,y_k-y_l\in[-1,1]$, this forces $x_k-x_l=1$ and $y_k-y_l=-1$; writing $x'=x-e_k+e_l$ and $y'=y+e_k-e_l$, the coordinate differences of $x'$ are $x'_k-x'_l=-1$, and for $p\notin\{k,l\}$ we have $x'_k-x'_p=x_k-1-x_p\in[-1,1]$, $x'_p-x'_k=x_p-x_k+1\in[-1,1]$, $x'_l-x'_p=x_k-x_p\in[-1,1]$ and $x'_p-x'_l=x_p-x_l-1\in[-1,1]$, using $x_k=x_l+1$ and $|x_p-x_q|\le1$; the same computation with $y$ in place of $x$ and $y_l=y_k+1$ shows the same for $y'$. All other occurrences are unchanged and already have all coordinate differences in $[-1,1]$. Hence in every reachable multiset all coordinate differences lie in $[-1,1]$, and for any two occurrences $z,w$ of that multiset $(z_k-z_l)-(w_k-w_l)\le1-(-1)=2$: every reachable multiset is tight, so $X$ is ultra-tight. [F1, algebra]

2.1 Setup for the forward implication. Conversely assume $X$ ultra-tight; we prove by induction on $r$ that potentials $s\in\mathbb Z^r$ exist satisfying the displayed condition. The case $r=1$ is in step 1.1. Let $r\ge2$ and assume the result for $r-1$. Let $\pi\colon L_r\to L_{r-1}$ forget the last coordinate; every zero exchange in $\pi(X)$ in coordinates $k,l\le r-1$ lifts to the zero exchange in $X$ with the same coordinates and the same labelled occurrences, because the defining difference of the pair is unchanged; hence every zero-exchange sequence in $\pi(X)$ is the projection of one in $X$ and ends tight. So $\pi(X)$ is ultra-tight, and by induction there are integers $s_1,\dots,s_{r-1}$ with $x_k-x_l\le s_k-s_l+1$ for all $x\in X$ and $k,l\le r-1$; applying this to $(l,k)$ gives, with $a_{kl}:=s_k-s_l$, $\bigl|(x_k-x_l)-a_{kl}\bigr|\le1\qquad(k,l\le r-1).$ It remains to extend the potentials to the last coordinate: we must choose $s_r$ so that $|(x_k-x_r)-a_{kr}|\le1$ for all $x\in X$ and all $k\le r-1$, where now $a_{kr}=s_k-s_r$. It is enough to do this in the descending sequence of stages described below: at stage $t=r-1,\dots,1$ one adds the bounds for the single pair $(t,r)$ while keeping all bounds already proved for pairs with both entries $\le r-1$ or both entries $\ge t+1$. [F1, F2]

3.1 The stage $t=r-1$. Since $X$ is ultra-tight, the empty sequence shows that $X$ itself is tight; hence for all $x,y\in X$, $(x_{r-1}-x_r)-(y_{r-1}-y_r)\le2$ and, exchanging $x$ and $y$, $\ge-2$. The integers $x_{r-1}-x_r$ therefore have range at most $2$, so (choosing the integer midpoint) some integer $m$ satisfies $|(x_{r-1}-x_r)-m|\le1$ for all $x\in X$; choosing $s_r:=s_{r-1}-m$ gives $a_{r-1,r}=m$ and hence the pair-$(r-1,r)$ bound, while all bounds of step 2.1 with $k,l\le r-1$ are unchanged. [F2, step 2.1, algebra]

4.1 Reduction to the exceptional case. Fix $t\le r-1$ and suppose the bounds $|(x_k-x_l)-a_{kl}|\le1$ are known for all $x\in X$ whenever $k,l\le r-1$ or $k,l\ge t+1$ (for $t=r-1$ this is step 3.1 together with step 2.1). We show that the bounds also hold for all pairs with $k,l\ge t$; as observed in step 2.1, the only new pair to control is $(t,r)$. If already $|(x_t-x_r)-a_{tr}|\le1$ for all $x$, there is nothing to prove. Otherwise some $x\in X$ has $x_t-x_r\ge a_{tr}+2$ or $x_t-x_r\le a_{tr}-2$; replacing every occurrence $x$ by $-x$ and every $s_k$ by $-s_k$ (which preserves ultra-tightness and all current bounds by [F1]) we may assume the first case, so that for this $x$, $x_t-x_r\ge a_{tr}+2 .$ [step 3.1, given]

5.1 Consequences of the choice of $x$, and the sandwich. For every $u\in\{t+1,\dots,r-1\}$ the known bounds give $x_t-x_u\le a_{tu}+1$ and $x_u-x_r\le a_{ur}+1$, so $x_t-x_r=(x_t-x_u)+(x_u-x_r)\le a_{tu}+a_{ur}+2=a_{tr}+2$; together with the choice of $x$ this forces equality throughout: $x_t-x_u=a_{tu}+1,\qquad x_u-x_r=a_{ur}+1\qquad(t<u<r).$ Tightness of $X$ applied to the pair $x,y$, in both orders, gives $(x_t-x_r)-(y_t-y_r)\le2$ and $\ge-2$, i.e. with $x_t-x_r=a_{tr}+2$, $a_{tr}\le y_t-y_r\le a_{tr}+2\qquad\text{for every }y\in X .$ [step 4.1, algebra]

6.1 The graph, the basic lower bound, and the case of no path. Draw a directed graph $G$ on $\{1,\dots,r\}$ with an arrow $k\to l$ if and only if some $y\in X$ satisfies $y_k-y_l=a_{kl}-1$. First we note that $x_k-x_r\ge a_{kr}+1\qquad\text{for every }k<r:$ for $k=u\ge t+1$ this is the equality $x_u-x_r=a_{ur}+1$ of step 5.1, for $k=t$ it follows from $x_t-x_r\ge a_{tr}+2$, and for $k<t$ it follows from $x_k-x_r=(x_k-x_t)+(x_t-x_r)\ge (a_{kt}-1)+(a_{tr}+2)=a_{kr}+1$ using the known bound for the pair $(k,t)$ with $k,t\le r-1$. Suppose first that $G$ contains no directed path from $t$ to $r$. Let $T$ be the set of vertices reachable from $t$ (so $t\in T$, $r\notin T$) and let $R$ be its complement; there is no arrow from $T$ to $R$, since such an arrow would put its target in $T$. Define new potentials $\hat s_k:=s_k+1$ for $k\in T$ and $\hat s_k:=s_k$ for $k\in R$, and set $\hat a_{kl}:=\hat s_k-\hat s_l$. Then $\hat a_{tr}=a_{tr}+1,\qquad \hat a_{kl}\in\{a_{kl}-1,a_{kl},a_{kl}+1\},$ and $\hat a_{kl}=a_{kl}-1$ occurs exactly for $k\in R$, $l\in T$. The new $(t,r)$ bound follows from the sandwich of step 5.1: $\hat a_{tr}-1=a_{tr}\le y_t-y_r\le a_{tr}+2=\hat a_{tr}+1$ for all $y\in X$. For any other pair the bound is immediate if $\hat a_{kl}\ge a_{kl}$, since the old upper bound $y_k-y_l\le a_{kl}+1\le\hat a_{kl}+1$ survives. If $\hat a_{kl}=a_{kl}-1$, then $k\in R$, $l\in T$; the absence of an arrow from $T$ to $R$ says no $y$ has $y_l-y_k=a_{lk}-1$, so the old lower bound $y_l-y_k\ge a_{lk}-1$ improves to $y_l-y_k\ge a_{lk}$ for all $y$, i.e. $y_k-y_l\le -a_{lk}=a_{kl}=\hat a_{kl}+1$. Thus the bounds hold for all pairs with both entries in $\{t,\dots,r\}$, as required, and stage $t$ is complete in the no-path case. [step 5.1, algebra]

7.1 The case of a path: the witnesses. Now suppose $G$ contains a directed path from $t$ to $r$, and let $t=k_1\to k_2\to\cdots\to k_h=r$ be one of minimal length (so $k_1,\dots,k_h$ are pairwise distinct by [F2]). For each $m=1,\dots,h-1$ choose an occurrence $y_m\in X$ witnessing the arrow $k_m\to k_{m+1}$, i.e. $y_{m,k_m}-y_{m,k_{m+1}}=a_{k_mk_{m+1}}-1$, and put $x^{(m)}:=x-e_{k_{m+1}}+e_r\qquad(1\le m<h),$ so that $x^{(h-1)}=x$ because $k_h=r$. We shall prove by downward induction on $m$ that there is a multiset $Y_m\equiv X$ (in the equivalence relation generated by zero exchanges) containing $y_1,\dots,y_m$ and $x^{(m)}$, and that the following two statements hold: $B_m:\quad (x^{(m)}_{k_m}-x^{(m)}_{k_{m+1}})-(y_{m,k_m}-y_{m,k_{m+1}})=2, \qquad C_m:\quad x_{k_m}-x_r=a_{k_m r}+1 .$ Reading $C_1$ together with step 4.1 (which gives $x_{k_1}-x_r=x_t-x_r\ge a_{tr}+2$) will then contradict the choice of $x$; the contradiction is completed below. We record $B_{h-1}$ and $C_{h-1}$: by the basic lower bound of step 6.1, $(x_{k_{h-1}}-x_r)-(y_{h-1,k_{h-1}}-y_{h-1,r})\ge(a_{k_{h-1}r}+1)-(a_{k_{h-1}r}-1)=2$, while tightness of $Y_{h-1}:=X$ gives $\le2$; hence equality holds, which is $B_{h-1}$, and then $C_{h-1}$ follows because $y_{h-1,k_{h-1}}-y_{h-1,r}=a_{k_{h-1}r}-1$ and $(x_{k_{h-1}}-x_r)-(y_{h-1,k_{h-1}}-y_{h-1,r})=2$. [step 6.1, given]

8.1 The induction step constructing $Y_m$. Let $m\le h-2$ and assume $A_{m+1}$ and $B_{m+1}$, where $A_{m+1}$ says that $Y_{m+1}\equiv X$ contains $y_1,\dots,y_{m+1}$ and $x^{(m+1)}$. Form $Y_m$ from $Y_{m+1}$ by removing the occurrences $x^{(m+1)}$ and $y_{m+1}$ and adding the occurrences $x^{(m)}$ and $y_{m+1}+e_{k_{m+1}}-e_{k_{m+2}}$. By $B_{m+1}$ the pair $\bigl(x^{(m+1)},y_{m+1}\bigr)$ has difference exactly $2$ in coordinates $(k_{m+1},k_{m+2})$, so this is a zero exchange; hence $Y_m\equiv Y_{m+1}\equiv X$ by $A_{m+1}$, and $Y_m$ contains $y_1,\dots,y_m$ and $x^{(m)}$. Thus $A_m$ holds. [step 7.1, algebra]

9.1 The induction step forcing $B_m$ and $C_m$, and the contradiction. Let $m\le h-2$ and assume $A_m$ and $C_{m+1}$. Since $k_1,\dots,k_h$ are pairwise distinct and only $k_h$ equals $r$, the $r$-th coordinate of $e_r$ vanishes in positions $k_m$ and $k_{m+1}$, so $x^{(m)}_{k_m}-x^{(m)}_{k_{m+1}} =(x_{k_m}-x_r)-(x_{k_{m+1}}-x_r)+1 \ge (a_{k_m r}+1)-(a_{k_{m+1}r}+1)+1 =a_{k_mk_{m+1}}+1 =y_{m,k_m}-y_{m,k_{m+1}}+2,$ where the inequality uses the basic lower bound of step 6.1 for $k_m$ and statement $C_{m+1}$ for $k_{m+1}$. Since $Y_m$ is tight (it lies in the class of the ultra-tight $X$), the reverse inequality holds and we have equality, which is $B_m$; reading the equality back through the displayed chain gives $x_{k_m}-x_r=a_{k_m r}+1$, which is $C_m$. Downward induction on $m$ now gives $C_1$, i.e. $x_{k_1}-x_r=x_t-x_r=a_{tr}+1$, contradicting $x_t-x_r\ge a_{tr}+2$ from the choice of $x$ in step 4.1. Hence the exceptional case cannot occur: with the current potentials the pair $(t,r)$ is already bounded, so stage $t$ is complete in the path case as well. [step 7.1, step 8.1, algebra]

10.1 Completion of the induction. Stages $t=r-1,r-2,\dots,1$ have now been treated: each stage either leaves the potentials unchanged, or (in the no-path case of step 6.1) replaces them by potentials for which the new bound holds, while all bounds proved earlier are preserved (the modification changes $s_k-s_l$ by at most $1$ in the necessary direction, and the argument of step 6.1 checks both the improved and the unchanged pairs). After stage $1$ the bounds hold for all pairs $k,l$ with $k,l\le r-1$ or $k,l\ge1$, i.e. for all $k,l\in\{1,\dots,r\}$. This proves the forward implication for $r$, and with the base case $r=1$ of step 1.1 and the induction scheme of step 2.1, the forward implication for all $r\ge1$. Combined with the reverse implication of step 1.2, an ultra-tight multiset is exactly one admitting column potentials $s$, including the empty multiset and the case $r=1$. [step 1.1, step 6.1, step 9.1] ∎

## Remarks

The proof is a finite induction: it uses only finite multisets, integer arithmetic, finiteness of the directed graph and the existence of a shortest path among finitely many paths, so it uses no choice principle. The parametrization by $s\in\mathbb Z^r$ is the one used by the arithmetic application on this page; Fayers' original parametrization by $a_1,\dots,a_{r-1}$ is recovered by $a_{kl}=s_k-s_l$ with $s_k=\sum_{i\ge k}a_i$.
