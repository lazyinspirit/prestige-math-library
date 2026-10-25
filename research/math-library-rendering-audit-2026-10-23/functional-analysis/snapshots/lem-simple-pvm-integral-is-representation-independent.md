---
id: lem-simple-pvm-integral-is-representation-independent
kind: lemma
title: Simple pvm integral is representation independent
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-integral-of-a-simple-function-against-a-pvm, lem-scalar-and-complex-measures-from-a-pvm, def-simple-integral-against-a-signed-or-complex-measure, def-complex-simple-function, def-projection-valued-measure, def-hilbert-space-adjoint, def-real-and-complex-inner-product-space, def-countable-choice, def-operator-norm, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.6.2 and Lemma 5.77, printed pp.277–281"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Proposition 5.3, pp.17–18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
complex Hilbert space, let $E$ be a projection valued measure on $(X,\Sigma)$,
and let $s:X\to\mathbb C$ be a complex simple function. Then:

1. the operator $\int s\,dE$ of
   [[def-integral-of-a-simple-function-against-a-pvm]] is independent of the
   disjoint normal form of $s$;
2. for all $x,y\in H$, $\langle(\int s\,dE)x,y\rangle=\int s\,dE_{x,y}$, the
   scalar integral against the complex measure $E_{x,y}$;
3. for every $x\in H$, $\|(\int s\,dE)x\|^2=\int|s|^2\,dE_x$, and
   $\|\int s\,dE\|\le M_s$.

Here $M_s:=\max(\{0\}\cup\{|s(t)|:t\in X\})$; thus $M_s=\max_{t\in X}|s(t)|$ when $X\ne\varnothing$, and $M_s=0$ when $X=\varnothing$.

## Facts & Assumptions

[A1] For a disjoint normal form $s=\sum_{j=1}^ma_j\mathbf 1_{B_j}$ with $B_1,\dots,B_m$ pairwise disjoint and covering $X$, the integral is $\int s\,dE=\sum_ja_jE(B_j)$ ([[def-integral-of-a-simple-function-against-a-pvm]]).

[A2] $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$, each $E(B)$ satisfies $E(B)^2=E(B)=E(B)^*$ and is contractive, and for pairwise disjoint $(D_n)$ with union $D$ one has $E(D)x=\sum_nE(D_n)x$ in norm ([[def-projection-valued-measure]]).

[A3] $E_{x,y}(B)=\langle E(B)x,y\rangle$ is a finite complex measure, $E_x(B)=\langle E(B)x,x\rangle=\|E(B)x\|^2$ is a positive measure of mass $\|x\|^2$, $|E_{x,y}|(X)\le\|x\|\,\|y\|$, and $E_{y,x}=\overline{E_{x,y}}$ ([[lem-scalar-and-complex-measures-from-a-pvm]]).

[A4] For a complex measure $\nu$ and a complex simple function whose nonzero level sets have finite total variation, presented over the nonzero level sets, the scalar simple integral is $\int s\,d\nu=\sum_jc_j\nu(E_j)$, and the value is unchanged by deleting empty level sets ([[def-simple-integral-against-a-signed-or-complex-measure]], [[def-complex-simple-function]]).

[A5] The pairing is linear in the first argument and conjugate-linear in the second, so $\langle\sum_jz_j,y\rangle=\sum_j\langle z_j,y\rangle$ and $\langle z,w\rangle=\overline{\langle w,z\rangle}$ ([[def-real-and-complex-inner-product-space]]). The adjoint identity is $\langle Pu,v\rangle=\langle u,P^*v\rangle$ ([[def-hilbert-space-adjoint]]).

[A6] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

[A7] The operator norm is the unit-ball supremum ([[def-operator-norm]]).

[A8] Total variation is the supremum of the nonnegative sums over countable measurable partitions ([[def-total-variation-of-a-signed-or-complex-measure]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a complex Hilbert space $H$, a projection valued measure $E$, a complex simple function $s$ with two disjoint normal forms $s=\sum_{j=1}^ma_j\mathbf 1_{B_j}=\sum_{k=1}^nb_k\mathbf 1_{C_k}$ covering $X$, and vectors $x,y\in H$.

1.1 Finite additivity follows by padding a finite disjoint family with empty sets in strong countable additivity. The scalar measures also have finite additivity. Every measurable subset has finite $|E_{x,y}|$-variation: a countable partition of that subset extends to one of $X$ by adding its complement, so its sum is at most $|E_{x,y}|(X)\le\|x\|\,\|y\|$. In particular the scalar simple integrals below are defined; for $E_x=E_{x,x}$ the same argument applies. [A2, A3, A4, A8]

2.1 The intersections $B_j\cap C_k$ form a disjoint cover of $X$. If an intersection is nonempty then $a_j=b_k$, and if empty its projection value is zero. Finite additivity therefore gives $\sum_ja_jE(B_j)=\sum_{j,k}a_jE(B_j\cap C_k)=\sum_{j,k}b_kE(B_j\cap C_k)=\sum_kb_kE(C_k)$. This proves representation independence. [step 1.1, A1, A2, algebra]

3.1 Expanding the pairing gives $\langle(\int s\,dE)x,y\rangle=\sum_ja_jE_{x,y}(B_j)$. Discard empty cells and regroup the remaining indices by $c\in s(X)$. Finite additivity gives $\sum_ja_jE_{x,y}(B_j)=\sum_{c\in s(X)}cE_{x,y}(s^{-1}(\{c\}))=\int s\,dE_{x,y}$, where the zero-value term is zero. If $X$ is empty all cells and sums contribute zero. [step 1.1, step 2.1, A1, A3, A4, A5, algebra]

3.2 The adjoint identity and the projection rules give $\langle E(B_j)x,E(B_k)x\rangle=\langle E(B_k)^*E(B_j)x,x\rangle=\langle E(B_k\cap B_j)x,x\rangle$. Thus expansion of the squared norm leaves only diagonal terms: $\|(\int s\,dE)x\|^2=\sum_j|a_j|^2E_x(B_j)$. Regrouping the nonempty cells by the value $d=|a_j|^2$, finite additivity identifies this sum with $\sum_{d\in |s|^2(X)}dE_x((|s|^2)^{-1}(\{d\}))=\int|s|^2\,dE_x$; the zero term vanishes. [step 1.1, step 2.1, A1, A2, A3, A4, A5, algebra]

4.1 Empty cells contribute zero to the sum in step 3.2. On every nonempty $B_j$, $|a_j|\le M_s$ because $a_j$ is a value of $s$. Positivity and finite additivity give $\|(\int s\,dE)x\|^2\le M_s^2\sum_jE_x(B_j)=M_s^2\|x\|^2$. Taking nonnegative square roots and then the unit-ball supremum gives $\|\int s\,dE\|\le M_s$. When $X=\varnothing$, all projection values are zero and the integral is zero, so the same bound with $M_s=0$ holds. [step 1.1, step 3.2, A2, A3, A7, algebra]

5.1 The integral is independent of the presentation, has the asserted scalar pairings and squared-norm identity, and satisfies the stated bound, including the empty-space case. [step 2.1, step 3.1, step 3.2, step 4.1, A6] ∎
