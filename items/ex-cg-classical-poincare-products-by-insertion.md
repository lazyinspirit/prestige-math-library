---
id: ex-cg-classical-poincare-products-by-insertion
kind: example
title: "Poincare products for Sn, Bn and Dn by explicit insertion"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: [def-cg-length-series-descent-generating-polynomial, def-finite-cardinality, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, lem-cg-classical-type-poincare-products, lem-cg-fundamental-weight-orbit-and-schreier-distance, def-coset, thm-hh-parabolic-minimal-representatives-and-length-additivity]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 8.1-8.2, printed pp. 245-255: signed and even-signed permutation models, generators and length formulas, used as convention comparisons; Chapter 7.1, printed pp. 203-205, Theorem 7.1.5, together with Appendix A1, Table I, printed p. 296: the exponent product and classical exponent lists used for an independent comparison. The insertion and coset arguments are proved locally from the exact library suppliers."
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Table (2.50), printed pp. 155-156, and §6, printed pp. 162-170: the Euclidean signed-permutation coordinate models; Problem 15, printed pp. 205-206, for the independent classical Weyl-group order table. The Poincare recurrences and low-rank coefficients are verified locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

This example re-derives the products of [[lem-cg-classical-type-poincare-products]] (3) by explicit insertion in the same models, with $[k]_t=1+t+\cdots+t^{k-1}$. For the $B_n,D_n$ orbit labels below, write $z_i=\sqrt2\,\varepsilon_i^*$ for the scaled dual coordinate functionals from that item; a vertex labelled $\pm\varepsilon_i$ denotes the corresponding orbit point $\pm z_i$.

**(1) Type $A$: inserting a letter into a permutation.** Let $n\ge2$. Use the order-preserving identification of the library's $S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ with permutations of $\{1,\dots,n\}$; under it the adjacent generator is $s_i\mapsto(i\ i+1)$ and $\ell$ is the inversion number ([[def-finite-symmetric-group-and-permutation-notation]], [[def-inversions-inversion-number-and-sign]], [[lem-cg-classical-type-poincare-products]] (1)(a), Proof 3.1). In this one-based notation, every $\sigma\in S_{n-1}$ and every position $i\in\{1,\dots,n\}$ give a permutation $\sigma^{(i)}$ by inserting the letter $n$ between positions $i-1$ and $i$. The map $(\sigma,i)\mapsto\sigma^{(i)}$ is a bijection $S_{n-1}\times\{1,\dots,n\}\to S_n$, and since the new inversions are exactly the $n-i$ pairs formed by $n$ with the entries to its right,
$$\ell(\sigma^{(i)})=\ell(\sigma)+(n-i).$$
Hence $P_{S_n}(t)=P_{S_{n-1}}(t)\sum_{i=1}^{n}t^{n-i}=[n]_tP_{S_{n-1}}(t)$, so $P_{S_n}(t)=[n]_t!= [2]_t[3]_t\cdots[n]_t$ and $P_{A_n}(t)=[n+1]_t!$.

**(2) Type $B$: inserting a sign.** For $n\ge2$, let $W(B_n)$ be the signed permutation group acting on $\mathbb R^n$ as in [[lem-cg-classical-type-poincare-products]] (1)(b) and (2)(b), with $W(B_{n-1})$ the subgroup fixing $\varepsilon_1$, as identified by [[lem-cg-classical-type-poincare-products]] (1)(b), (2)(b), and the parabolic-length fact in its Fact F16. Each $w\in W(B_n)$ has a unique decomposition $w=d\,u$ with $u\in W(B_{n-1})$ and $d$ the minimal element of its left coset $wW(B_{n-1})$; the possible $d$ correspond bijectively to the orbit points labelled $\{\pm\varepsilon_1,\dots,\pm\varepsilon_n\}$, and the distance (minimal coset length) of the representative sending $\varepsilon_1$ to $\varepsilon_i$ is $i-1$, while for $-\varepsilon_i$ it is $2n-i$; the list $0,1,\dots,2n-1$ is obtained by moving $\varepsilon_1$ along the chain $\varepsilon_1,\dots,\varepsilon_n$, applying the sign change of the last coordinate, and returning along the negative chain. By [[lem-cg-fundamental-weight-orbit-and-schreier-distance]] (2),(4),
$$P_{B_n}(t)=[2n]_t\,P_{B_{n-1}}(t),\qquad\text{so}\qquad P_{B_n}(t)=\prod_{i=1}^{n}[2i]_t .$$

**(3) Type $D$: even signs.** For $n\ge4$, let $W(D_n)$ be the even signed permutation group and let $W(D_{n-1})$ be the parabolic obtained by deleting the terminal node $s_n$ ([[lem-cg-classical-type-poincare-products]] (1)(c),(2)(c)). The orbit of the corresponding dual fundamental functional has the Schreier graph obtained from the chains $\varepsilon_1-\cdots-\varepsilon_n$ and $(-\varepsilon_1)-\cdots-(-\varepsilon_n)$ by the cross edges $\varepsilon_1-(-\varepsilon_2)$ and $(-\varepsilon_1)-\varepsilon_2$; its distances are $0,\dots,n-2$, then $n-1$ twice, then $n,\dots,2n-2$ ([[lem-cg-classical-type-poincare-products]] (2)(c)). Thus the quotient polynomial is $[n]_t(1+t^{n-1})$. The orbit quotient formula gives $P_{D_n}(t)=[n]_t(1+t^{n-1})P_{D_{n-1}}(t)$; since $(1+t^{n-1})[n-1]_t=[2n-2]_t$, this recurrence telescopes from $P_{D_3}=[4]_t!$ in (4) to $P_{D_n}(t)=[n]_t\prod_{i=1}^{n-1}[2i]_t$ for $n\ge4$. The cases $D_2,D_3$ are checked separately in (4).

**(4) Bases and consistency checks.** $P_{S_2}=1+t=[2]_t$, $P_{S_3}=1+2t+2t^2+t^3=[2]_t[3]_t$, $P_{S_4}=[2]_t[3]_t[4]_t=1+3t+5t^2+6t^3+5t^4+3t^5+t^6$ (a symmetric unimodal inversion-count sequence), $P_{B_1}=1+t$, $P_{B_2}=[2]_t[4]_t=1+2t+2t^2+2t^3+t^4$; for $D$ one has $D_2=A_1\times A_1$, $D_3=A_3$ ([[lem-cg-classical-type-poincare-products]] (3), Proof 5.1) with $P_{D_2}=(1+t)^2$ and $P_{D_3}=[3]_t(1+t^2)(1+t)^2=[4]_t!=P_{A_3}$, and $D_4$ gives
$$[4]_t[2]_t[4]_t[6]_t=1+4t+9t^2+16t^3+23t^4+28t^5+30t^6+28t^7+23t^8+16t^9+9t^{10}+4t^{11}+t^{12},$$
a palindromic polynomial of degree $12$ whose coefficients sum to $192=|W(D_4)|$. The evaluations at $t=1$ recover $n!$, $2^nn!$ and $2^{n-1}n!$.

## Facts & Assumptions

**Given:** Integers $n\ge2$, the symmetric group $S_n$ with its type $A_{n-1}$ presentation, the signed permutation groups $W(B_n)$ and $W(D_n)$ acting on $\mathbb R^n$ with orthonormal basis $\varepsilon_1,\dots,\varepsilon_n$, and the series $P_A=\sum_{w\in A}t^{\ell(w)}$.

[L1] Under the order-preserving identification of $S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ with permutations of $\{1,\dots,n\}$, the type-$A_{n-1}$ generators map to adjacent transpositions and $\ell(\sigma)=\operatorname{inv}(\sigma)$ ([[def-finite-symmetric-group-and-permutation-notation]], [[def-inversions-inversion-number-and-sign]], [[lem-cg-classical-type-poincare-products]] (1)(a), Proof 3.1).

[L2] The canonical model of $W(B_n)$ is the full signed permutation group on $\mathbb R^n$, generated by adjacent coordinate exchanges and the sign change of coordinate $n$; the canonical model of $W(D_n)$ is the even signed permutation group, with $s_1$ the exchange of coordinates $1,2$, $s_2:(x_1,x_2)\mapsto(-x_2,-x_1)$ and $s_i$ ($i\ge3$) the exchange of coordinates $i-1,i$ ([[lem-cg-classical-type-poincare-products]] (1)(b),(c)). In the $B_n$ model the subgroup generated by $s_2,\dots,s_n$ fixes $\varepsilon_1$ and consists of all signed permutations of the remaining coordinates; in type $D_n$, deleting $s_n$ gives the displayed $D_{n-1}$ parabolic.

[L3] In the type-$B_n$ and type-$D_n$ models, write $z_i=\sqrt2\,\varepsilon_i^*$ for the dual coordinate functionals; the orbit points $\pm z_i$ are labelled by $\pm\varepsilon_i$. Their minimal-coset distances are $i-1$ on $\varepsilon_i$ and $2n-i$ on $-\varepsilon_i$ in type $B$, and $0,\dots,n-2$, $n-1$ twice, $n,\dots,2n-2$ in type $D$ ([[lem-cg-classical-type-poincare-products]] (2)(b),(c)).

[L4] For the dual-functional orbit of a deleted node, $d(v)$ is the minimal length in the left coset $wW_T$ ([[def-coset]]) and $P_W(t)=P_{W_T}(t)\sum_vt^{d(v)}$ ([[lem-cg-fundamental-weight-orbit-and-schreier-distance]] (2),(4)).

[L5] As Coxeter systems, $A_1=B_1$, $D_2=A_1\times A_1=I_2(2)$ and $D_3=A_3$ ([[lem-cg-classical-type-poincare-products]] (3), Proof 5.1); the earlier product lemma gives $P_{B_1}=[2]_t$, $P_{D_2}=[2]_t^2$ and the type-$D_3$ product ([[lem-cg-classical-type-poincare-products]] (3)).

[L6] The length series is $P_A(t)=\sum_{w\in A}t^{\ell(w)}$ and has finite coefficients; for finite $W$, evaluating $P_W$ at $1$ counts the elements of $W$ ([[def-cg-length-series-descent-generating-polynomial]] (1), [[def-finite-cardinality]]).

[L7] For each standard parabolic $W_T$, the restricted matrix presents the Coxeter system $(W_T,T)$ and its intrinsic length equals the ambient length restricted to $W_T$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

## Verification

**Proof technique:** direct.

1.1 **Type $A$.** Use the order-preserving relabeling of the library's $S_k=\operatorname{Sym}(\{0,\dots,k-1\})$ as permutations of $\{1,\dots,k\}$ from [L1]. Deleting the letter $n$ from a permutation of $\{1,\dots,n\}$ inverts the insertion $(\sigma,i)\mapsto\sigma^{(i)}$, so the map is a bijection $S_{n-1}\times\{1,\dots,n\}\to S_n$. In the one-line form, inserting $n$ at position $i$ creates an inversion exactly with each of the $n-i$ entries to its right and with none of the $i-1$ entries to its left, and the relative order of the other entries is unchanged; hence $\ell(\sigma^{(i)})=\ell(\sigma)+n-i$ by [L1]. Summing over the bijection gives $P_{S_n}(t)=\sum_{\sigma}\sum_{i=1}^{n}t^{\ell(\sigma)+n-i}=P_{S_{n-1}}(t)[n]_t$. Since $S_1$ is the trivial permutation group, $P_{S_1}=1$; telescoping gives $P_{S_n}(t)=[2]_t[3]_t\cdots[n]_t=[n]_t!$, which is $P_{A_n}(t)=[n+1]_t!$ after the index shift. [L1, L6, algebra]

1.2 **Type $B$.** By [L2] the parabolic $W_T$ with $T=\{s_2,\dots,s_n\}$ is the $B_{n-1}$ model, and [L7] identifies its intrinsic length with the ambient length; [L4] gives $P_{W(B_n)}=P_{W(B_{n-1})}\sum_vt^{d(v)}$, the sum running over the orbit of [L3]; that orbit consists of one point at each distance $0,1,\dots,2n-1$, so the sum is $[2n]_t$. Hence $P_{B_n}(t)=[2n]_tP_{B_{n-1}}(t)$, and telescoping from $P_{B_1}=P_{A_1}=1+t=[2]_t$ gives $P_{B_n}(t)=[2]_t[4]_t\cdots[2n]_t=\prod_{i=1}^n[2i]_t$. [L2, L3, L4, L5, L6, L7, algebra]

1.3 **Type $D$.** For $n\ge4$, by [L2] the parabolic obtained by deleting the terminal node $s_n$ is the $D_{n-1}$ model, and [L7] identifies its intrinsic length with ambient length; [L4] gives $P_{W(D_n)}=P_{W(D_{n-1})}\sum_vt^{d(v)}$; by [L3] the distances occurring are $0,\dots,n-2$, the value $n-1$ twice and $n,\dots,2n-2$, so $\sum_vt^{d(v)}=[n]_t(1+t^{n-1})$. Hence $P_{D_n}(t)=[n]_t(1+t^{n-1})P_{D_{n-1}}(t)$; using the identity $(1+t^{m})[m]_t=1+\cdots+t^{2m-1}=[2m]_t$ with $m=n-1$ in the induction step, and the base $P_{D_3}=P_{A_3}=[4]_t!$ supplied by [L5], telescoping gives $P_{D_n}(t)=[n]_t\prod_{i=1}^{n-1}[2i]_t$. [L2, L3, L4, L5, L6, L7, algebra]

2.1 **Small cases and evaluations.** $P_{S_2}=1+t=[2]_t$ and $P_{S_3}=[2]_t[3]_t=1+2t+2t^2+t^3$ follow from step 1.1; $P_{S_4}=[2]_t[3]_t[4]_t=(1+3t+5t^2+6t^3+5t^4+3t^5+t^6)$, a symmetric unimodal inversion-count sequence, and $P_{B_2}=[2]_t[4]_t=1+2t+2t^2+2t^3+t^4$ follow by expanding. By [L5], $P_{D_2}=P_{A_1}P_{A_1}=(1+t)^2$ and $P_{D_3}=P_{A_3}=[2]_t[3]_t[4]_t=[3]_t(1+t^2)P_{D_2}=[4]_t!$, while the recursion of step 1.3 gives $P_{D_4}=[4]_t(1+t^3)P_{D_3}=[4]_t[2]_t[4]_t[6]_t$; expanding, $[4]_t[2]_t[4]_t[6]_t=1+4t+9t^2+16t^3+23t^4+28t^5+30t^6+28t^7+23t^8+16t^9+9t^{10}+4t^{11}+t^{12}$, which is palindromic of degree $12$ and has coefficient sum $4\cdot2\cdot4\cdot6=192=|W(D_4)|$. Finally, evaluating the products of steps 1.1-1.3 at $t=1$, where $[k]_t(1)=k$, gives $P_{S_n}(1)=n!$, $P_{B_n}(1)=\prod_{i=1}^n2i=2^nn!$ and $P_{D_n}(1)=n\prod_{i=1}^{n-1}2i=2^{n-1}n!$. The insertion bijection of step 1.1 also gives $|S_n|=n!$ by induction from $|S_1|=1$. A signed permutation is specified by a permutation and $n$ independent signs, so $|W(B_n)|=2^nn!$; for an even signed permutation the first $n-1$ signs determine the last, so $|W(D_n)|=2^{n-1}n!$. These are the group orders by [L2]. No invariant degrees or Choice are used. [step 1.1, step 1.2, step 1.3, L2, L5, L6, algebra] ∎
