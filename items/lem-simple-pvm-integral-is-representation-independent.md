---
id: lem-simple-pvm-integral-is-representation-independent
kind: lemma
title: Simple pvm integral is representation independent
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-integral-of-a-simple-function-against-a-pvm, lem-scalar-and-complex-measures-from-a-pvm, def-simple-integral-against-a-signed-or-complex-measure, def-complex-simple-function, def-projection-valued-measure, thm-hilbert-adjoint-properties, def-real-and-complex-inner-product-space, def-countable-choice]
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
   $\|\int s\,dE\|\le\max|s|$.

## Facts & Assumptions

[A1] For a disjoint normal form $s=\sum_{j=1}^ma_j\mathbf 1_{B_j}$ with $B_1,\dots,B_m$ pairwise disjoint and covering $X$, the integral is $\int s\,dE=\sum_ja_jE(B_j)$ ([[def-integral-of-a-simple-function-against-a-pvm]]).

[A2] $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$, each $E(B)$ satisfies $E(B)^2=E(B)=E(B)^*$ and is contractive, and for pairwise disjoint $(D_n)$ with union $D$ one has $E(D)x=\sum_nE(D_n)x$ in norm ([[def-projection-valued-measure]]).

[A3] $E_{x,y}(B)=\langle E(B)x,y\rangle$ is a finite complex measure, $E_x(B)=\langle E(B)x,x\rangle=\|E(B)x\|^2$ is a positive measure of mass $\|x\|^2$, and $E_{y,x}=\overline{E_{x,y}}$ ([[lem-scalar-and-complex-measures-from-a-pvm]]).

[A4] For a complex simple function presented over the nonzero level sets, the scalar simple integral is $\int s\,d\nu=\sum_jc_j\nu(E_j)$, and the value is unchanged by deleting empty level sets ([[def-simple-integral-against-a-signed-or-complex-measure]], [[def-complex-simple-function]]).

[A5] The pairing is linear in the first argument and conjugate-linear in the second, so $\langle\sum_jz_j,y\rangle=\sum_j\langle z_j,y\rangle$ and $\langle z,w\rangle=\overline{\langle w,z\rangle}$ ([[def-real-and-complex-inner-product-space]], [[thm-hilbert-adjoint-properties]]).

[A6] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a complex Hilbert space $H$, a projection valued measure $E$, a complex simple function $s$ with two disjoint normal forms $s=\sum_{j=1}^ma_j\mathbf 1_{B_j}=\sum_{k=1}^nb_k\mathbf 1_{C_k}$ covering $X$, and vectors $x,y\in H$.

1.1 Finite additivity: if $D_1,\dots,D_r\in\Sigma$ are pairwise disjoint with union $D$, then applying strong additivity to the sequence $D_1,\dots,D_r,\varnothing,\varnothing,\dots$ and using $E(\varnothing)=0$ gives $E(D)x=\sum_{j\le r}E(D_j)x$ for every $x$, hence $E(D)=\sum_{j\le r}E(D_j)$. [A2]

1.2 Pairing identity: $\langle(\int s\,dE)x,y\rangle=\sum_ja_j\langle E(B_j)x,y\rangle=\sum_ja_jE_{x,y}(B_j)=\int s\,dE_{x,y}$, where the last equality is the scalar simple integral over the disjoint normal form, where vanishing coefficients contribute $0$ to both sides. [A1, A3, A4, A5]

1.3 Norm identity: $\|(\int s\,dE)x\|^2=\sum_{j,k}a_j\overline{a_k}\langle E(B_k)^*E(B_j)x,x\rangle=\sum_{j,k}a_j\overline{a_k}\langle E(B_k\cap B_j)x,x\rangle=\sum_j|a_j|^2E_x(B_j)=\int|s|^2\,dE_x$, because the off-diagonal intersections are empty and $E(B_k\cap B_j)=0$ there, while the diagonal terms use $E(B_j)^2=E(B_j)=E(B_j)^*$; in particular $\|(\int s\,dE)x\|^2\le(\max_j|a_j|)^2\|x\|^2$, so $\|\int s\,dE\|\le\max|s|$. [A1, A2, A3, A4, A5, algebra]

2.1 The refinement family $B_j\cap C_k$ ($1\le j\le m$, $1\le k\le n$) is pairwise disjoint with union $X$, and $a_j=b_k$ whenever $B_j\cap C_k\ne\varnothing$ because both are the value of $s$ there; when $B_j\cap C_k=\varnothing$ the corresponding term contributes $0$ to either sum because $E(\varnothing)=0$. [A1, step 1.1, algebra]

3.1 Splitting each $B_j$ and each $C_k$ along the refinement and applying finite additivity gives $\sum_ja_jE(B_j)=\sum_{j,k}a_jE(B_j\cap C_k)=\sum_{j,k}b_kE(B_j\cap C_k)=\sum_kb_kE(C_k)$, so the integral is independent of the disjoint normal form. [A1, step 1.1, step 2.1]

4.1 The value $\int s\,dE$ is therefore well defined, its pairings are the scalar integrals, and it satisfies the norm identity and the bound $\|\int s\,dE\|\le\max|s|$. [step 3.1, step 1.2, step 1.3, A6] ∎
