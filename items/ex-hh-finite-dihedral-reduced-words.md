---
id: ex-hh-finite-dihedral-reduced-words
kind: example
title: "Reduced words and lengths in a finite dihedral group"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 4
deps: [def-hh-coxeter-matrix-word-group-and-length, lem-hh-dihedral-root-recurrence-and-root-sign, thm-hh-coxeter-exchange-deletion-and-faithfulness, def-group-power, def-order-in-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "Corollary 1.4, printed pp. 11-12: the dihedral subgroup consists of the elements 1_k and 2_k (k=0,...,m), distinct except 1_0=2_0 and 1_m=2_m, with l(1_k)=l(2_k)=k"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 3.1, printed pp. 26-29: the explicit structure and normal form of a finite dihedral group"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $m\ge2$, $S=\{s,t\}$ and $m(s,t)=m$, and put $W=\langle s,t\mid s^2=t^2=(st)^m=1\rangle$. The exact order of $st$ is $m$ by [[lem-hh-dihedral-root-recurrence-and-root-sign]] (4); the normal-form computation below verifies that $W$ is dihedral of order $2m$.

1. The $2m$ elements $(st)^k$ and $(st)^ks$ with $0\le k<m$ are pairwise distinct and exhaust $W$.
2. For $1\le q\le m$ the two alternating words of length $q$ are reduced. Their values are distinct when $q<m$ and equal when $q=m$; explicitly, each has length $q$, so values belonging to different lengths are distinct.
3. For $0\le k\le m$ one has
$$\ell\bigl((st)^k\bigr)=\min(2k,\,2(m-k)),$$
and for $0\le k\le m-1$ one has $(st)^ks=(ts)^{m-k}s=(ts)^{m-k-1}t$ and
$$\ell\bigl((st)^ks\bigr)=\min(2k+1,\,2(m-k)-1);$$
in particular $\ell(s)=1$ and $\ell\bigl((st)^{m-1}s\bigr)=1$.
4. The element $(st)^k$ with $2k=m$ (only for even $m$) is the unique longest element $w_0$ of $W$, of length $m$; its two reduced expressions are the two alternating words of length $m$, and they are related by the braid move $stst\cdots\mapsto tsts\cdots$.

## Facts & Assumptions

**Given:** A group $W$ presented by the Coxeter matrix on $S=\{s,t\}$ with $m(s,t)=m\ge2$, with the length function $\ell$ of [[def-hh-coxeter-matrix-word-group-and-length]]; the exact order of $st$ and the ambient reducedness of alternating words from [[lem-hh-dihedral-root-recurrence-and-root-sign]]; the deletion statement of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]]; and the vocabulary of powers and orders.

[F1] [[def-hh-coxeter-matrix-word-group-and-length]]: $W=F(S)/N$ is presented by the relators $s^2$, $t^2$ and $(st)^m$ (the set $R=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s\ne t,\ m(s,t)<\infty\}$); the length $\ell(w)$ is the least $k$ such that $w=s_1\cdots s_k$ for some $s_1,\dots,s_k\in S$, and $\ell(1)=0$.

[F2] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (1),(4): "$\sigma_s^2=\mathrm{id}_E$ for every $s\in S$; each $\sigma_s$ is invertible, and $\ell(s)=1$"; and "Consequently, for any distinct $s,t\in S$, one has $s\ne t$ in $W$ and $st$ has order exactly $m(s,t)$ in $W$ (infinite when $m(s,t)=\infty$).".

[F3] [[lem-hh-dihedral-root-recurrence-and-root-sign]] (7): "Let $s\ne t$, $m:=m(s,t)$, and for $q\ge1$ let $w_q$ be the value of the alternating word of length $q$ beginning with $s$. If $m<\infty$ and $q\le m$, or if $m=\infty$ and $q\ge1$, then $\ell(w_q)=q$, every word in $S$ representing $w_q$ has length at least $q$, and $w_1,\dots,w_q$ are pairwise distinct."

[F4] [[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3): "If the word $(s_1,\dots,s_k)$ in $S$ is not reduced, then there are $i<j$ with $s_1\cdots\widehat{s_i}\cdots\widehat{s_j}\cdots s_k=s_1\cdots s_k$. Hence repeated deletion of two letters transforms every word into a reduced expression for the same element".

[F5] [[def-group-power]], [[def-order-in-a-group]]: $g^k$ for $k\ge0$ is the $k$-fold product of $g$ with $g^0=1$, $g^{-k}=(g^{-1})^k$, and the order of $g$ is the least $k\ge1$ with $g^k=1$ when such $k$ exist, with $g^{\operatorname{ord}(g)}=1$.

## Verification

**Proof technique:** direct computation with the normal forms of the dihedral group, using the exact order of $st$ and the ambient reducedness of alternating words.

1.1 **Exhaustion.** Every element of $W$ is the value of a word in $s,t$ whose inverse letters are again letters ($s^{-1}=s$, $t^{-1}=t$ in $W$ because $s^2,t^2\in R$ [F1]), so it suffices to treat words in $s,t$. Cancelling all consecutive equal letters using $s^2=t^2=1$ turns any such word into an alternating word $(u_1,\dots,u_q)$ with $u_{i+1}\ne u_i$. If $q$ is even, the value of the alternating word beginning with $s$ is $(st)^{q/2}$ and that of the one beginning with $t$ is $(ts)^{q/2}=(st)^{-q/2}$ [F5]; if $q$ is odd, the corresponding values are $(st)^{(q-1)/2}s$ and $(ts)^{(q-1)/2}t=(st)^{-(q-1)/2}t=(st)^{-(q+1)/2}s$, because $t=(st)^{-1}s$. Since $(st)^m=1$ [F1], an integer power $(st)^j$ equals $(st)^{k}$ for the unique $k\in\{0,\dots,m-1\}$ with $j\equiv k\pmod m$, and $(st)^js=(st)^ks$; hence every element of $W$ is one of the $2m$ listed elements $(st)^k,(st)^ks$ with $0\le k<m$. [F1, F5]

1.2 **Reducedness of alternating words.** Let $1\le q\le m$ and let $w_q$ be the value of the alternating word of length $q$ beginning with $s$; by [F3], $\ell(w_q)=q$ and every word in $S$ representing $w_q$ has length at least $q$, so that alternating word is reduced, and $w_1,\dots,w_q$ are pairwise distinct. The same length and reducedness statements hold for alternating words beginning with $t$: interchanging the roles of $s$ and $t$ preserves every hypothesis, since $m(t,s)=m(s,t)=m$ and the presentation is symmetric in $s,t$ [F1]. To compare the two words of the same length, put $r=st$, so $t=r^{-1}s$. For $q=2h$ their values are $r^h$ and $r^{-h}$; for $q=2h+1$ they are $r^hs$ and $r^{-h-1}s$. In either case equality is equivalent to $r^q=1$, which for $1\le q\le m$ holds exactly at $q=m$ by [F2]. [F1, F2, F3]

2.1 **Distinctness.** If $(st)^k=(st)^l$ with $0\le k<l<m$, then $(st)^{l-k}=1$ with $0<l-k<m$, contradicting the exact order $m$ of $st$ [F2, F5]. If $(st)^ks=(st)^ls$ with $0\le k<l<m$, then multiplying on the right by $s$ gives $(st)^k=(st)^l$, the previous case. If finally $(st)^k=(st)^ls$, then $(st)^{k-l}=s$, so $s\in\langle st\rangle$ and also $t=s\cdot st\in\langle st\rangle$, whence $W=\langle st\rangle$ is cyclic and therefore abelian; then $st=ts$, so $(st)^2=stst=s(ts)t=s(st)t=(ss)(tt)=1$, and the order of $st$ divides $2$. Since that order is $m\ge2$ by [F2], this forces $m=2$, in which case $\langle st\rangle=\{1,st\}$ while $s\in\{1,st\}$ gives $s=1$ or $t=1$; both are impossible because $\ell(s)=\ell(t)=1$ [F2]. Hence no rotation equals a reflection and the $2m$ elements of step 1.1 are pairwise distinct, so they exhaust $W$ and $|W|=2m$. The identity $s(st)s=(st)^{-1}$, together with these distinct normal forms, identifies $W$ as the dihedral group. [F2, F5, step 1.1]

2.2 **The rotation lengths.** For $0\le k\le m$ the element $(st)^k$ also equals $(ts)^{m-k}$: indeed $(ts)=(st)^{-1}$ [F5], so $(ts)^{m-k}=(st)^{-(m-k)}=(st)^{k-m}=(st)^k$, using $(st)^m=1$ [F1]. The two expressions $(st)^k$ and $(ts)^{m-k}$ are alternating words of lengths $2k$ and $2(m-k)$, whose minimum $q_0:=\min(2k,2(m-k))$ satisfies $q_0\le m$ because the two lengths sum to $2m$. The shorter of the two words has length $q_0$; if $q_0=0$ it is the empty word with value $1$, so $\ell((st)^k)=0=q_0$, and if $q_0\ge1$ it is an alternating word of length $q_0\le m$ whose value is $(st)^k$, so step 1.2 gives $\ell((st)^k)=q_0$ and shows that no word represents $(st)^k$ with fewer than $q_0$ letters. Hence $\ell((st)^k)=\min(2k,2(m-k))$. [F1, F5, step 1.2]

3.1 **The reflection lengths.** For $0\le k\le m-1$ one has $(st)^ks=(ts)^{m-k}s=(ts)^{m-k-1}(ts)s=(ts)^{m-k-1}t$, because $(ts)^{m-k}=(st)^{k-m}=(st)^k$ as in step 2.2; these are alternating words of lengths $2k+1$ and $2(m-k)-1$, whose minimum $q_1:=\min(2k+1,2(m-k)-1)$ is at most $m$: indeed $q_1\le 2k+1$ and $q_1\le 2(m-k)-1$, so $2q_1\le 2m$, that is $q_1\le m$. The shorter word is nonempty because $q_1\ge1$ for $0\le k\le m-1$, and step 1.2 applied to it (with the roles of $s$ and $t$ interchanged if it begins with $t$) gives that it is reduced, that its value $(st)^ks$ has length exactly $q_1$, and that no word for $(st)^ks$ is shorter. Hence $\ell\bigl((st)^ks\bigr)=\min(2k+1,2(m-k)-1)$; the endpoint $k=0$ gives $\ell(s)=\min(1,2m-1)=1$ and the endpoint $k=m-1$ gives $\ell\bigl((st)^{m-1}s\bigr)=\min(2m-1,1)=1$. [F5, step 1.2, step 2.2]

4.1 **The longest element.** Suppose $m$ is even and put $w_0:=(st)^{m/2}$. By step 2.2, $\ell(w_0)=\min(m,m)=m$. Every rotation $(st)^k$ with $k\ne m/2$ has $\ell=\min(2k,2m-2k)<m$: their minimum is at most $m$, and equality would require both terms to equal $m$ because their sum is $2m$, forcing $k=m/2$. Every reflection $(st)^ks$ with $0\le k\le m-1$ has $\ell=\min(2k+1,2m-2k-1)\le m$ by step 3.1, and both entries of that minimum are odd while $m$ is even, so $\ell\le m-1<m$. Together with steps 1.1 and 2.1 this shows that $w_0$ is the unique element of length $m$, hence the unique longest element. A reduced word for $w_0$ of length $m$ cannot contain two consecutive equal letters, since deleting that pair would exhibit a shorter word for $w_0$ [F4] in contradiction to $\ell(w_0)=m$; hence it is alternating. The two alternating words of length $m$ are $(st)^{m/2}$ and $(ts)^{m/2}$, both of which have value $w_0$ because $(ts)^{m/2}=(st)^{-m/2}=(st)^{m/2}$ [F5], and they are reduced by step 1.2; so they are exactly the two reduced expressions of $w_0$. They differ by the single replacement of the alternating block of length $m$ by the other alternating word of the same length, the braid move. [F4, F5, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1] ∎
