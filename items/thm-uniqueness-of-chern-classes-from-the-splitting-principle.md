---
id: thm-uniqueness-of-chern-classes-from-the-splitting-principle
kind: theorem
title: Uniqueness of Chern classes from the splitting principle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-classes-from-the-projective-bundle-relation, thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 section 7"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chern-class axioms and uniqueness, printed pp.197-200"
---

## Statement

Assume AC. Suppose that to every numerable complex bundle $V\to C$ over a
path-connected CW complex one assigns classes
$d_i(V)\in H^{2i}(C;\mathbb Z)$ for $i\geq0$ with the following properties:

1. **Naturality:** $d_i(f^*V)=f^*d_i(V)$ for pullbacks;
2. **Normalization:** $d_0(V)=1$, $d_i(V)=0$ for $i>\operatorname{rank}V$, and
   $d_1(L)=e(L_{\mathbb R})$ for a complex line $L$;
3. **Whitney multiplicativity:** $d(V\oplus W)=d(V)d(W)$ for the total classes
   $d=\sum_i d_i$.

Then $d(V)=c(V)$ for every numerable complex bundle over a path-connected CW complex, where
$c$ is the total Chern class of
[[def-chern-classes-from-the-projective-bundle-relation]]. In particular the
assignments $c_i$ are the unique ones satisfying 1-3.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited by the splitting and Chern-class suppliers ([[def-axiom-of-choice]]).

[F1] The total Chern class is natural, normalized on lines by $c_1(L)=e(L_{\mathbb R})$, satisfies the Whitney product formula, and obeys $c_0=1$, $c_i=0$ above the rank and $c(0)=1$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F2] The flag projection $q:\operatorname{Fl}(E)\to B$ splits $q^*E=L_1\oplus\cdots\oplus L_n$ into complex lines, and $q^*:H^*(B;\mathbb Z)\to H^*(\operatorname{Fl}(E);\mathbb Z)$ is injective ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a numerable complex rank-$n$ bundle $E\to B$ over a path-connected CW complex, and an assignment $d$ with properties 1-3 of the statement.

1.1 On a complex line $L$ the two assignments agree: $d_1(L)=e(L_{\mathbb R})=c_1(L)$ and $d_0=1=c_0$, while $d_i(L)=c_i(L)=0$ for $i\geq2$ by the properties of $d$ and [F1]. Hence $d(L)=c(L)=1+e(L_{\mathbb R})$ for every line. [F1, given]

1.2 If $n=0$, both total classes are $1$, so assume $n\geq1$. Pulling back to
the flag bundle, $q^*E$ splits as the sum of the tautological lines
$L_1,\dots,L_n$ by [F2]. [F1, F2]

2.1 Evaluating both assignments on $q^*E$: multiplicativity for $d$ and for $c$ (property 3 of the statement and [F1]) gives $d(q^*E)=\prod_i d(L_i)$ and $c(q^*E)=\prod_i c(L_i)$; by step 1.1 each factor agrees, so $d(q^*E)=c(q^*E)$. [F1, step 1.1, step 1.2]

3.1 Naturality of both assignments (property 1 and [F1]) writes the common value as $d(q^*E)=q^*d(E)$ and $c(q^*E)=q^*c(E)$, so $q^*(d(E)-c(E))=0$. [F1, step 2.1]

4.1 Injectivity of $q^*$ by [F2] gives $d(E)=c(E)$ for every numerable complex bundle over a path-connected CW complex, which is the assertion. [F2, step 3.1]

5.1 Boundary cases. For a rank-one bundle the flag bundle is the base itself and steps 1.1-3.1 reduce to the normalization; the rank-zero case was discharged in step 1.2. The empty base is excluded by the path-connected hypothesis, and the coefficient ring $\mathbb Z$ is nonzero. The assignment $d$ is assumed on the path-connected CW domain on which [F2] and [F1] operate; AC is used only through [A1]. [A1, F1, F2, step 1.1, step 1.2, step 4.1] ∎

## Source notes

This is the uniqueness half of the Chern-class characterization in May, *A Concise Course in Algebraic Topology*, Chapter 23 section 7, pp. 197-200: the axioms determine the classes because they force the product of the line factors on a flag bundle, and the flag pullback is injective. The existence half is [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]].
