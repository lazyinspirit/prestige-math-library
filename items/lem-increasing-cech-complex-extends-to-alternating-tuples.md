---
id: "lem-increasing-cech-complex-extends-to-alternating-tuples"
kind: "lemma"
title: "Ordered and alternating Čech complexes agree"
status: published
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, lem-cech-differential-squares-zero, def-section-restriction-and-global-section, def-inversions-inversion-number-and-sign, thm-sign-is-a-homomorphism, cor-sign-from-disjoint-cycle-structure]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Let $X$ be a topological space, let $\mathcal F$ be a sheaf of abelian
groups on $X$ and let $\mathcal U=(U_i)_{i\in I}$ be an open cover of $X$ indexed
by a linearly ordered set $I$, with ordered Čech cochains and differential
$\bigl(C^\bullet(\mathcal U,\mathcal F),\delta^\bullet\bigr)$
([[def-cech-cochain-complex-open-cover]], [[lem-cech-differential-squares-zero]]).

Let $I^{p+1}$ be the set of all $(p+1)$-tuples $(i_0,\dots,i_p)$ of elements of
$I$, let $S_{p+1}$ be the permutation group of the position set $\{0,\dots,p\}$
with sign $\operatorname{sgn}:S_{p+1}\to\{+1,-1\}$
([[def-inversions-inversion-number-and-sign]]), and let a permutation act on
tuples by $\sigma\cdot(i_0,\dots,i_p):=(i_{\sigma(0)},\dots,i_{\sigma(p)})$. An
**alternating Čech $p$-cochain of $\mathcal U$ with values in $\mathcal F$** is a
family $s=(s_{i_0\cdots i_p})_{(i_0,\dots,i_p)\in I^{p+1}}$ with
$s_{i_0\cdots i_p}\in\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$ for every tuple,
such that
$$s_{i_0\cdots i_p}=0\quad\text{whenever }i_a=i_b\text{ for some }a\ne b,$$
and
$$s_{\sigma\cdot(i_0,\dots,i_p)}=\operatorname{sgn}(\sigma)\,s_{i_0\cdots i_p}\qquad\text{for every }\sigma\in S_{p+1}.$$
The second condition compares elements of one and the same group, because the
intersection $U_{i_0}\cap\cdots\cap U_{i_p}$ depends only on the set
$\{i_0,\dots,i_p\}$ of indices. These families form a subgroup
$\widetilde C^p(\mathcal U,\mathcal F)$ of
$\prod_{(i_0,\dots,i_p)\in I^{p+1}}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$,
and we set $\widetilde C^p(\mathcal U,\mathcal F):=0$ for $p<0$.

Restriction to increasing tuples is the homomorphism
$$\rho^p:\widetilde C^p(\mathcal U,\mathcal F)\longrightarrow C^p(\mathcal U,\mathcal F),\qquad \rho^p(s):=(s_{i_0\cdots i_p})_{i_0<\cdots<i_p},$$
and the differential of the alternating model is the formula
$$(\delta^p s)_{i_0\cdots i_{p+1}}:=\sum_{j=0}^{p+1}(-1)^j\,s_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}\Big|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}.$$
Then the following hold.

1. $\rho^p$ is an isomorphism of abelian groups for every $p$. Its inverse $e^p$
extends an ordered cochain: for $t\in C^p(\mathcal U,\mathcal F)$ and a tuple
$K=(i_0,\dots,i_p)$ of pairwise distinct indices one sets
$$(e^pt)_K:=\operatorname{sgn}(\tau_K)\,t_{i_{\tau_K(0)}\cdots i_{\tau_K(p)}},$$
where $\tau_K\in S_{p+1}$ is the sorting permutation with
$i_{\tau_K(0)}<\cdots<i_{\tau_K(p)}$, while $(e^pt)_K:=0$ for tuples with a
repeated index.
2. The displayed formula defines a homomorphism
$\delta^p:\widetilde C^p(\mathcal U,\mathcal F)\to\widetilde C^{p+1}(\mathcal U,\mathcal F)$
for every $p$, and
$$\rho^{p+1}\circ\delta^p=\delta^p\circ\rho^p.$$
Consequently $\rho^\bullet$ is an isomorphism of cochain complexes and
$\delta^{p+1}\circ\delta^p=0$ on $\widetilde C^\bullet(\mathcal U,\mathcal F)$.

In particular a cochain of $\mathcal U$ may be evaluated at an arbitrary tuple
of $U$-indices, not only at an increasing one, and its values are determined by
its values on increasing tuples through the signs $\operatorname{sgn}(\tau_K)$.

## Facts & Assumptions

[F1] The ordered Čech cochains are $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$ with $(\delta^ps)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^js_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$, a sum inside the single group $\mathcal F(U_{i_0}\cap\cdots\cap U_{i_{p+1}})$ ([[def-cech-cochain-complex-open-cover]]).

[F2] $\delta^{p+1}\circ\delta^p=0$ for every $p$, so the ordered Čech cochains form a cochain complex ([[lem-cech-differential-squares-zero]]).

[F3] Restrictions of a section are compatible: $(s|_V)|_W=s|_W$ for $W\subseteq V\subseteq U$, and each restriction map is a group homomorphism ([[def-section-restriction-and-global-section]]).

[F4] The sign of a permutation is $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}\in\{+1,-1\}$, so every sign is its own inverse ([[def-inversions-inversion-number-and-sign]]).

[F5] $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a group homomorphism, so $\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)$ and $\operatorname{sgn}(\sigma\tau)=\operatorname{sgn}(\sigma)\operatorname{sgn}(\tau)$ ([[thm-sign-is-a-homomorphism]]).

[F6] A cycle of length $k$ has sign $(-1)^{k-1}$ ([[cor-sign-from-disjoint-cycle-structure]]).



## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ and an open cover $\mathcal U=(U_i)_{i\in I}$ indexed by a linearly ordered set, together with a degree $p\ge0$ and the ordered Čech complex $C^\bullet(\mathcal U,\mathcal F)$.

1.1 Fix $p\ge0$ and a tuple $K=(i_0,\dots,i_p)$ of pairwise distinct indices. There is exactly one permutation $\tau_K\in S_{p+1}$ with $i_{\tau_K(0)}<\cdots<i_{\tau_K(p)}$, because the indices are pairwise distinct; call it the sorting permutation of $K$ and write $\operatorname{sort}(K):=\tau_K\cdot K$ for the increasing rearrangement. For $\sigma\in S_{p+1}$ one has $\tau_{\sigma K}=\sigma^{-1}\tau_K$: the entry of $\sigma\cdot K$ at position $\tau_{\sigma K}(j)$ is $i_{\sigma(\tau_{\sigma K}(j))}$, and this is increasing in $j$ exactly when $\sigma\tau_{\sigma K}=\tau_K$; taking signs gives $\operatorname{sgn}(\tau_{\sigma K})=\operatorname{sgn}(\sigma^{-1})\operatorname{sgn}(\tau_K)=\operatorname{sgn}(\sigma)\operatorname{sgn}(\tau_K)$ by multiplicativity of the sign [F5] and [F4]. Also $\operatorname{sort}(\sigma K)=\operatorname{sort}(K)$, since $K$ and $\sigma\cdot K$ have the same underlying set of indices. Now define $e^p:C^p(\mathcal U,\mathcal F)\to\prod_{K\in I^{p+1}}\mathcal F(\bigcap K)$ by $(e^pt)_K:=\operatorname{sgn}(\tau_K)t_{\operatorname{sort}(K)}$ for pairwise distinct $K$ and $(e^pt)_K:=0$ otherwise; this is well defined because $\bigcap\operatorname{sort}(K)=\bigcap K$ as open sets. The map $e^p$ is a homomorphism of abelian groups, it vanishes on tuples with a repeated index by construction, and for $\sigma\in S_{p+1}$ one has $(e^pt)_{\sigma K}=\operatorname{sgn}(\tau_{\sigma K})t_{\operatorname{sort}(\sigma K)}=\operatorname{sgn}(\sigma)\operatorname{sgn}(\tau_K)t_{\operatorname{sort}(K)}=\operatorname{sgn}(\sigma)(e^pt)_K$, so $e^p$ takes values in $\widetilde C^p(\mathcal U,\mathcal F)$; moreover $\rho^pe^p=\operatorname{id}$, because $\tau_K$ is the identity for increasing $K$. [F4, F5]

1.2 Fix $\sigma\in S_{p+2}$, a tuple $K=(i_0,\dots,i_{p+1})$ of pairwise distinct indices and a position $a\in\{0,\dots,p+1\}$. Let $\iota_a$ be the order-preserving bijection from the positions of the tuple $K\setminus a:=(i_0,\dots,\widehat{i_a},\dots,i_{p+1})$ onto the set $\{0,\dots,p+1\}\setminus\{a\}$, and define the permutation $\sigma_a\in S_{p+1}$ of the positions of $K\setminus a$ by $\sigma_a:=\iota_{\sigma(a)}^{-1}\circ\sigma\circ\iota_a$. Claim: $\operatorname{sgn}(\sigma_a)=\operatorname{sgn}(\sigma)(-1)^{a+\sigma(a)}$. Since $\iota_a$ and $\iota_{\sigma(a)}$ preserve order, $\operatorname{inv}(\sigma_a)$ counts the pairs of positions $c<c'$ of $K$ with $c,c'\ne a$ and $\sigma(c)>\sigma(c')$, that is $\operatorname{inv}(\sigma_a)=\operatorname{inv}(\sigma)-A-B$ with $A:=\#\{c<a:\sigma(c)>\sigma(a)\}$ and $B:=\#\{c'>a:\sigma(a)>\sigma(c')\}$. Among the $a$ positions $c<a$ exactly $A$ satisfy $\sigma(c)>\sigma(a)$ and the remaining $a-A$ satisfy $\sigma(c)<\sigma(a)$; of the $\sigma(a)$ values below $\sigma(a)$ exactly those $a-A$ are images of positions $<a$, so the remaining $\sigma(a)-(a-A)$ of them are images of positions $>a$, that is $B=\sigma(a)-a+A$. Hence $\operatorname{inv}(\sigma_a)=\operatorname{inv}(\sigma)+a-\sigma(a)-2A$, and reducing modulo $2$ and using $\operatorname{sgn}=(-1)^{\operatorname{inv}}$ [F4] gives the claim. [F4]

1.3 For an increasing tuple $i_0<\cdots<i_{p+1}$ every tuple $i_0\cdots\widehat{i_j}\cdots i_{p+1}$ obtained by deleting one entry is increasing again, so restricting to increasing tuples changes none of the values: expanding both sides with the differential formula [F1] gives $(\rho^{p+1}\delta^ps)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^js_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}=(\delta^p\rho^ps)_{i_0\cdots i_{p+1}}$ term by term, with the same restriction maps on both sides [F3]. [F1, F3]

2.1 Conversely $e^p\rho^p=\operatorname{id}$ on $\widetilde C^p(\mathcal U,\mathcal F)$. Let $s$ be alternating and let $K$ be a tuple of pairwise distinct indices; applying the second alternating condition to the sorting permutation $\tau_K$ gives $s_{\operatorname{sort}(K)}=s_{\tau_K\cdot K}=\operatorname{sgn}(\tau_K)s_K$, hence $s_K=\operatorname{sgn}(\tau_K)s_{\operatorname{sort}(K)}=(e^p(\rho^ps))_K$, because $\operatorname{sgn}(\tau_K)$ is its own inverse [F4] and $\rho^ps$ records the values of $s$ on increasing tuples; on a tuple with a repeated index both $s_K$ and $(e^p(\rho^ps))_K$ are $0$. Together with $\rho^pe^p=\operatorname{id}$ from [step 1.1] this shows that $\rho^p$ is a bijection with inverse $e^p$, hence an isomorphism of abelian groups, and proves assertion 1 of the statement. [F4, step 1.1] [F4]

2.2 Let $s\in\widetilde C^p(\mathcal U,\mathcal F)$, let $K$ have pairwise distinct entries and length $p+2$, and let $\sigma\in S_{p+2}$. Deleting position $a$ in $\sigma K$ deletes the entry $i_{\sigma(a)}$, so the definition in step 1.2 gives $(\sigma K)\setminus a=\sigma_a\cdot(K\setminus\sigma(a))$. Thus $s_{(\sigma K)\setminus a}=\operatorname{sgn}(\sigma_a)s_{K\setminus\sigma(a)}$. Including all restrictions to the common full intersection, the sign identity in step 1.2 gives $$ (\delta^ps)_{\sigma K} =\sum_a(-1)^a\operatorname{sgn}(\sigma_a)s_{K\setminus\sigma(a)} =\operatorname{sgn}(\sigma)\sum_a(-1)^{\sigma(a)}s_{K\setminus\sigma(a)} =\operatorname{sgn}(\sigma)(\delta^ps)_K. $$ The last sum is reindexed by $b=\sigma(a)$. Restrictions commute with these signs by [F3], so this proves alternation on distinct tuples. [F3, step 1.2]

3.1 Next, $\delta^ps$ vanishes on a tuple $K$ with a repeated entry. Choose positions $u<v$ with $i_u=i_v$. In the sum of the statement every term with $j\notin\{u,v\}$ contributes $s_{K\setminus j}=0$, because the equal pair survives in $K\setminus j$; and if $K\setminus u$ has a repeated entry then $K\setminus v$ has the same multiset of entries and also has one, so the two remaining terms vanish as well. Otherwise $K\setminus u$ and $K\setminus v$ have pairwise distinct entries and equal multisets, and $K\setminus u$ arises from $K\setminus v$ by moving the entry $i_v=i_u$ from position $u$ to position $v-1$ past the entries $i_{u+1},\dots,i_{v-1}$, that is by the $(v-u)$-cycle of positions $(u\,u+1\,\cdots\,v-1)$, whose sign is $(-1)^{v-u-1}$ [F6]; hence $s_{K\setminus u}=\operatorname{sgn}(\pi)s_{K\setminus v}$ for that cycle $\pi$ and $(-1)^us_{K\setminus u}+(-1)^vs_{K\setminus v}=\bigl[(-1)^u(-1)^{v-u-1}+(-1)^v\bigr]s_{K\setminus v}=\bigl[(-1)^{v-1}+(-1)^v\bigr]s_{K\setminus v}=0$. In every case $(\delta^ps)_K=0$, all values being taken in the group $\mathcal F(U_{i_0}\cap\cdots\cap U_{i_{p+1}})$ [F3]. [F3, F6, step 2.1]

4.1 Combining: the formula of the statement is additive in $s$ and, by [step 2.2] and [step 3.1], it maps $\widetilde C^p(\mathcal U,\mathcal F)$ into $\widetilde C^{p+1}(\mathcal U,\mathcal F)$; by [step 1.3] it satisfies $\rho^{p+1}\delta^p=\delta^p\rho^p$; and by [step 1.1] and [step 2.1] the map $\rho^p$ is bijective with inverse $e^p$ in every degree. Hence $\rho^\bullet$ is an isomorphism of cochain complexes and assertion 2 holds. Finally, for $s\in\widetilde C^p(\mathcal U,\mathcal F)$ one has $\rho^{p+2}(\delta^{p+1}\delta^ps)=(\delta^{p+1}\delta^p)(\rho^ps)=0$ by [F2], and $\rho^{p+2}$ is injective by [step 2.1], so $\delta^{p+1}\delta^p=0$; in the negative degrees both complexes are $0$ by their conventions, and the extension formula exhibits the values of any cochain at arbitrary tuples of $U$-indices. ∎ [F2, step 1.3]
