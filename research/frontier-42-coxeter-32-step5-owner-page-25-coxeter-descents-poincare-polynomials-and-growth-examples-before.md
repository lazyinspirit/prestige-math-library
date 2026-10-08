---
page: coxeter-descents-poincare-polynomials-and-growth-examples
title: "Coxeter Descents, Poincaré Polynomials, and Growth — Examples"
status: draft
items: []
examples: [ex-cg-classical-poincare-products-by-insertion,
           ex-cg-a2-descent-inclusion-exclusion-and-reciprocity,
           ex-cg-infinite-dihedral-growth]
---

This companion is a dependency leaf. Its examples use only the theory of [[coxeter-descents-poincare-polynomials-and-growth]] and that page's established prerequisite closure; no other theory page may depend on a supplier homed here.

[[ex-cg-classical-poincare-products-by-insertion]] re-derives the type-A products by inserting $n$ at each one-based position: this adds exactly $n-i$ inversions and yields $P_{S_n}=[n]_tP_{S_{n-1}}=[n]_t!$. In the signed-permutation model, the type-B cosets over the subgroup fixing $\varepsilon_1$ correspond to the $2n$ choices $\pm\varepsilon_i$, giving the factor $[2n]_t$ and $P_{B_n}=\prod_{i=1}^n[2i]_t$. For type D with $n\ge4$, deleting the terminal node gives the $D_{n-1}$ parabolic; the even-signed Schreier cycle has distances $0,\ldots,n-2$, $n-1$ twice, and $n,\ldots,2n-2$, giving the factor $[n]_t(1+t^{n-1})$ and, by telescoping from $D_3$, $P_{D_n}=[n]_t\prod_{i=1}^{n-1}[2i]_t$. The low-rank bases and checks are $P_{S_2}=[2]_t$, $P_{S_3}=[2]_t[3]_t$, $P_{S_4}=[2]_t[3]_t[4]_t$, $P_{B_1}=[2]_t$, $P_{B_2}=[2]_t[4]_t$, $P_{D_2}=[2]_t^2$, and $P_{D_3}=[4]_t!$. The $D_4$ product is $[4]_t[2]_t[4]_t[6]_t=1+4t+9t^2+16t^3+23t^4+28t^5+30t^6+28t^7+23t^8+16t^9+9t^{10}+4t^{11}+t^{12}$, whose coefficient sum is $192=|W(D_4)|$. Evaluations at $t=1$ give $n!$, $2^nn!$ and $2^{n-1}n!$ for the symmetric, signed and even-signed permutation groups.

[[ex-cg-a2-descent-inclusion-exclusion-and-reciprocity]] uses the smallest-rank finite Coxeter system whose diagram is not a product of copies of $A_1$. It relabels the library's $S_3$ on $\{0,1,2\}$ order-preservingly as permutations of $\{1,2,3\}$, lists all six elements and lengths, and computes every right-descent interval directly and through inclusion-exclusion. The finite Steinberg identity $1-2/(1+t)+1/P_W=t^3/P_W$ is verified after clearing denominators; the degree product $[2]_t[3]_t=P_W$, group order $P_W(1)=6$, exponent sum $\sum_i(d_i-1)=3=N$, and reciprocity $t^3P_W(t^{-1})=P_W(t)$ are checked explicitly. The finite enumeration uses no choice.

[[ex-cg-infinite-dihedral-growth]] uses the alternating normal forms to count one identity and two elements of every positive length, giving $P_W=(1+t)/(1-t)$. Its spherical subsets are $\emptyset,\{s\},\{t\}$, and the infinite Steinberg identity becomes $1-2/(1+t)+(1-t)/(1+t)=0$. In $\mathbb Q(t)$, $P_W(t^{-1})=-P_W(t)$, so a finite-$N$ reciprocity identity would force $t^N=-1$; this fails for every $N\ge0$. The alternating lengths are unbounded, so the group has no longest element. Its rank-one parabolic still has $P_{W_{\{s\}}}=1+t=[2]_t$.

Each example states its hypotheses in full and verifies the displayed calculation; the two infinite-case examples exhibit the exact point where the finite reciprocity argument stops. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
