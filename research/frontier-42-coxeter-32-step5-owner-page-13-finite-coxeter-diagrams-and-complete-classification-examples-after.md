---
page: finite-coxeter-diagrams-and-complete-classification-examples
title: "Finite Coxeter Diagrams and Complete Classification — Examples"
status: draft
items: []
examples: [ex-cg-cycle-and-overlong-arm-nonpositive-witnesses, ex-cg-dihedral-gram-determinants-and-low-rank-coincidences, ex-cg-h3-and-h4-gram-determinants-and-principal-minors, ex-cg-bn-and-cn-are-the-same-coxeter-diagram, ex-cg-path-determinant-recursion-and-arm-inequality]
---

This companion is a dependency leaf: its examples use the theory of [[finite-coxeter-diagrams-and-complete-classification]], that page's prerequisite closure and earlier examples in this companion; no item outside this companion depends on them.

[[ex-cg-dihedral-gram-determinants-and-low-rank-coincidences]] computes the matrix of the rank-two diagram $I_2(m)$ with $m\in\{3,4,\dots\}\cup\{\infty\}$, obtains $\det B=\sin^2(\pi/m)>0$ in the finite case together with the exact order $2r$ of the group, and in the infinite case exhibits the kernel vector $e_s+e_t$; it also records the low-rank coincidences $I_2(3)=A_2$, $I_2(4)=B_2=C_2$, $I_2(6)=G_2$, $I_2(5)=H_2$ and $I_2(2)=A_1\times A_1$. [[ex-cg-h3-and-h4-gram-determinants-and-principal-minors]] evaluates the leading principal minors of $2C$ for $H_3$ and $H_4$, including the second $2\times2$ principal minor $(5-\sqrt5)/2$ of $H_3$, and shows that the neighbouring overlong paths and the star with labels $3,3,5$ have negative determinant or an explicit non-positive vector. [[ex-cg-bn-and-cn-are-the-same-coxeter-diagram]] proves that the two names denote the same labelled path with one final label-$4$ edge, computes $\det(2C)(B_n)=2$ with leading minors $2,3,\dots,n$, and identifies the standard parabolic $A_{n-1}$. [[ex-cg-cycle-and-overlong-arm-nonpositive-witnesses]] exhibits the cycle vector $e_{s_1}+\cdots+e_{s_r}$ with $B(u,u)=0$, the weighted vector of the overlong star $(1,2,5)$, and the $\sqrt2$-weighted witnesses for two large labels. [[ex-cg-path-determinant-recursion-and-arm-inequality]] proves the path recursion $d_k=d_{k-1}-\cos^2(\pi/m_{k-1})d_{k-2}$ and the two-subpath determinant, and proves the three-arm criterion: for a star with arms of $p,q,r$ vertices positive definiteness is equivalent to $\frac1{p+1}+\frac1{q+1}+\frac1{r+1}>1$, whose surviving triples $(1,1,r)$, $(1,2,2)$, $(1,2,3)$, $(1,2,4)$ and boundary triples $(2,2,2)$, $(1,3,3)$, $(1,2,5)$ are then computed.

The computations test the determinant table and the exclusions of the theory page; they are evidence within their stated scope and do not replace the proofs there.
