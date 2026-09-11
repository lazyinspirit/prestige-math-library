---
id: lem-filtered-freeness-lifts-from-associated-graded-algebras
kind: lemma
title: Filtered freeness lifts from associated graded algebras
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Etingof, Representations of Lie Groups, Theorem 13.1, filtered lifting argument
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
---

## Statement

Let $A$ be a unital algebra over a field, with increasing exhaustive vector-space filtrations $F_nA$ for integers $n\geq0$, $F_{-1}A=0$, $1\in F_0A$, and $F_mA F_nA\subseteq F_{m+n}A$. Let $R\subseteq Z(A)$ be a unital subalgebra with an increasing exhaustive nonnegative multiplicative filtration, $F_{-1}R=0$, $1\in F_0R$, and $F_nR\subseteq F_nA$. Inclusion induces a graded algebra map $\operatorname{gr}R\to\operatorname{gr}A$ and hence the module structure used below; here $\operatorname{gr}A=\bigoplus_{n\geq0}F_nA/F_{n-1}A$.

Suppose a specified family $(b_j)_{j\in J}$ is a homogeneous free basis of $\operatorname{gr}A$ over $\operatorname{gr}R$, with degrees $d_j\geq0$. Here free basis means that every element has a unique finite expansion in the $b_j$. Suppose specified $a_j\in F_{d_j}A$ have images $b_j$ in degree $d_j$. Then $(a_j)_{j\in J}$ is both a left and a right $R$-basis of $A$.

## Proof

**Given:** The filtrations, graded basis and lifts in the statement. For negative $n$ put $F_nR=0$. Only finite sums occur in a direct sum; no family of additional lifts is chosen simultaneously.

1.1 Define $D=\bigoplus_{j\in J}R u_j$, with $F_nD=\bigoplus_j(F_{n-d_j}R)u_j$, and $\phi:D\to A$ by $\phi(\sum_jr_ju_j)=\sum_jr_ja_j$. Finite support makes the formula meaningful. Multiplicativity of the filtration makes $\phi$ filtered, and its degree-$n$ map sends the class of $r_ju_j$ to the product of the degree-$(n-d_j)$ class of $r_j$ and $b_j$. The given graded-basis property therefore makes $\operatorname{gr}\phi$ an isomorphism in every degree. [given, construct]

2.1 We prove that every $x\in F_nA$ belongs to $\phi(F_nD)$ by induction on $n\geq-1$. For $n=-1$, both spaces are zero. For $n\geq0$, surjectivity of the degree-$n$ map in 1.1 gives a finite homogeneous expansion of $x+F_{n-1}A$. Choose representatives in $F_{n-d_j}R$ for its finitely many nonzero coefficients. They define $y\in F_nD$ with $x-\phi(y)\in F_{n-1}A$. The induction hypothesis gives $z\in F_{n-1}D$ with $\phi(z)=x-\phi(y)$, whence $x=\phi(y+z)$. Exhaustivity now proves surjectivity of $\phi$. [step 1.1, algebra]

2.2 If $0\ne y=\sum_jr_ju_j\in D$, each nonzero coefficient has a least filtration degree $e_j$, since its filtration is exhaustive and indexed by the nonnegative integers. Set $n=\max_{r_j\ne0}(e_j+d_j)$, a maximum of a nonempty finite set. At least one coefficient has nonzero image in its degree $e_j$ quotient, so $y+F_{n-1}D\ne0$. Injectivity of $\operatorname{gr}\phi$ in 1.1 gives $\phi(y)+F_{n-1}A\ne0$. Thus $\phi(y)\ne0$, proving injectivity. [step 1.1, algebra]

3.1 Hence $\phi$ is a left $R$-module isomorphism. As $R\subseteq Z(A)$, $r_ja_j=a_jr_j$ for each coefficient, so the same finite expressions give unique right expansions. If $J$ is empty, the degreewise argument in 2.1 forces $A=0$; the empty basis assertion remains valid whenever the zero algebra is admitted. Degree zero, a singleton basis, and the zero element require no change in the argument. All choices in 2.1 are finite choices for a single induction step; the proof asserts existence separately for each $x$, and uses no axiom of choice. This establishes both bases. [step 2.1, step 2.2, given] QED
