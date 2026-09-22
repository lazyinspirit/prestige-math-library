---
id: lem-uniform-null-g-delta-capture-functions
kind: lemma
title: Uniform null G-delta sets capture block functions
status: draft
origin: pipeline
deps: [def-countable-borel-hierarchy, thm-separable-complete-metric-baire-in-zf, thm-complete-subspace-iff-closed, lem-cantor-and-baire-sequence-coding]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.11, pp. 47-50"}
    - {title: "Terence Tao, An Introduction to Measure Theory", url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf", locator: "Outer measure and the Caratheodory construction, Chapter 1"}
---

## Statement

There are uniformly assigned null $G_\delta$ sets $N_f$ in Cantor space for
$f\in\omega^\omega$ and, for each open $U$ whose canonical coin content is below one, finite capture
sets $\varphi_U(n)$ of size at most $2^{n+1}$, such that $N_f\subseteq U$ implies
$f(n)\in\varphi_U(n)$ for all sufficiently large $n$. If $f$ belongs to a
transitive model, the code for $N_f$ belongs to that model.

## Facts & Assumptions

**Given:** Cantor space $2^\omega$.

[F1] [[lem-cantor-and-baire-sequence-coding]]: the cylinder topology, compactness of Cantor space, coordinate pairing and explicit natural-number codes for finite binary words. The choice-free coin content needed here is constructed in step 1.1.

[F2] [[def-countable-borel-hierarchy]]: the $G_\delta$ form of a countable intersection of open sets.

[F3] [[thm-complete-subspace-iff-closed]] and [F1]: a closed subspace of Cantor space is complete; choosing the lexicographically least branch through each nonempty cylinder trace supplies a canonical countable dense subset. Hence [[thm-separable-complete-metric-baire-in-zf]] makes every nonempty closed $K\subseteq2^\omega$ a Baire space in ZF.

## Proof

1.1 For an open $O\subseteq2^\omega$, let $P_O$ be the prefix-free set of shortest finite words $s$ with $[s]\subseteq O$, and put $\nu(O)=\sum_{s\in P_O}2^{-|s|}$, the supremum of its finite partial sums in the fixed word order. Define the closed content $m(K)=1-\nu(2^\omega\setminus K)$ and call $E$ null when, for every $k$, it has an open cover of content below $2^{-k}$. Refining finitely many cylinders to one common length proves finite additivity on clopen sets, monotonicity, and countable subadditivity for open unions directly from binary-word counts. If $K\subseteq D$ with $K$ closed and $D$ clopen, then $m(K)\le\nu(D)$. Every definition uses a fixed enumeration or a real supremum and hence exists in ZF. [F1, construct]

2.1 Using the canonical pairing from [F1], put $C_{n,m}=\{\langle\langle n,m\rangle,j\rangle:j\le n\}$ and $B_{n,m}=\{x:\forall c\in C_{n,m}\ x(c)=1\}$. The coordinate groups are disjoint and have size $n+1$. Refining to a prefix above the finitely many coordinates shows $$\nu(B_{n,m})=2^{-(n+1)},\qquad \nu\left(\bigcap_{(n,m)\in J}B_{n,m}^c\right)= \prod_{(n,m)\in J}(1-2^{-(n+1)})$$ for every finite $J$; this is a finite pattern count, not a product-measure theorem. [F1, step 1.1]

2.2 Fix open $U$ with $\nu(U)<1$ and put $K_0=2^\omega\setminus U$, so $m(K_0)>0$. Enumerate the finite words as $(s_i)$. Let $Z$ be the union of those traces $K_0\cap[s_i]$ with closed content zero. Such a compact zero-content trace has, for each requested rational error, a finite clopen cover of smaller content: choose a finite clopen subset of its open complement whose content is sufficiently close to one and take the complement. Choose the least finite cover in the fixed code order. Assigning error $2^{-i-k-2}$ to the pair $(i,k)$ and taking the open union proves directly that $Z$ is null, without Countable Choice. Put $K=K_0\setminus Z$. The set $Z$ is $K_0$ intersected with the open union of the corresponding cylinders, so $K$ is closed. Monotonicity gives $m(K)\le m(K_0)$, while the arbitrarily small canonical open covers of $Z$ and the finite/open content inequalities give $m(K_0)\le m(K)+\varepsilon$ for every positive rational $\varepsilon$; hence $m(K)=m(K_0)>0$. Every nonempty trace $K\cap[s]$ has positive closed content, since otherwise the corresponding $K_0\cap[s]$ was removed. [F1, step 1.1]

3.1 For $f:\omega\to\omega$ put $N_f=\bigcap_{k<\omega}\bigcup_{n\ge k}B_{n,f(n)}$. It is $G_\delta$ by [F2]. For every $k$, its displayed tail union is an open cover of content at most $\sum_{n\ge k}2^{-(n+1)}=2^{-k}$ by step 1.1, so $N_f$ is null by the local definition. The assignment is arithmetic in $f$ and the fixed blocks; therefore its code belongs to every transitive model containing $f$. [F2, step 1.1, step 2.1]

3.2 For $s\in T_K=\{s:[s]\cap K\ne\varnothing\}$ put $A_s(n)=\{m:K\cap[s]\cap B_{n,m}=\varnothing\}$. For every finite $J\subseteq\{(n,m):m\in A_s(n)\}$, steps 1.1--2.2 give $$0<m(K\cap[s])\le\prod_{(n,m)\in J}(1-2^{-(n+1)}) \le\exp\left(-\sum_{(n,m)\in J}2^{-(n+1)}\right).$$ Taking canonical finite initial subsets shows that $\sum_n|A_s(n)|/2^{n+1}$ converges. Hence every $A_s(n)$ is finite and $|A_s(n)|/2^{n+1}\to0$. [step 1.1, step 2.1, step 2.2]

4.1 Assume $N_f\subseteq U$, so $K\cap N_f=\varnothing$. If every $K\cap\bigcup_{n\ge m}B_{n,f(n)}$ met every nonempty basic open subset of $K$, these sets would be dense open. The least-branch construction in [F3] makes $K$ separable and complete in ZF, so the Baire theorem would make their intersection $K\cap N_f$ nonempty. Therefore some $s\in T_K$ and $m$ satisfy $K\cap[s]\cap\bigcup_{n\ge m}B_{n,f(n)}=\varnothing$. [F3, step 2.2, step 3.1]

4.2 Let $i:2^{<\omega}\to\omega$ be the fixed bijection, and let $n(s)$ be the least threshold after which $|A_s(n')|/2^{n'+1}\le2^{-i(s)-1}$. Put $\varphi_U(n)=\bigcup\{A_s(n):s\in T_K,\ n(s)\le n\}$. For any finite $E\subseteq\varphi_U(n)$, assign to each $m\in E$ the least witnessing $s$ in the fixed word order. Then $$\frac{|E|}{2^{n+1}} \le\sum_{s:n(s)\le n}\frac{|A_s(n)|}{2^{n+1}} \le\sum_s2^{-i(s)-1}\le1.$$ If $\varphi_U(n)$ had more than $2^{n+1}$ elements, its first $2^{n+1}+1$ elements would contradict this bound. Thus it is finite and has the required size. [F1, step 3.2]

5.1 With $s,m$ as in step 4.1 and $\ell=\max\{m,n(s)\}$, every $n\ge\ell$ satisfies $K\cap[s]\cap B_{n,f(n)}=\varnothing$, hence $f(n)\in A_s(n)\subseteq\varphi_U(n)$. Together with steps 3.1 and 4.2 this proves capture, the size bound and model-membership of the codes. [step 3.1, step 4.1, step 4.2]

6.1 The steps above provide the uniformly assigned null $G_\delta$ sets and the capture sets with all stated properties, which is the Statement. [step 3.1, step 5.1] ∎
