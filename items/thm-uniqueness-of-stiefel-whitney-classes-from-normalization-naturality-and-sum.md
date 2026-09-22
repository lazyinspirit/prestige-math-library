---
id: thm-uniqueness-of-stiefel-whitney-classes-from-normalization-naturality-and-sum
kind: theorem
title: Uniqueness of Stiefel–Whitney classes from normalization, naturality, and sum
status: published
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "def-real-flag-bundle-and-stiefel-whitney-roots", "def-tautological-degree-one-class-on-a-real-projective-bundle", "thm-real-splitting-principle-with-mod-two-injective-pullback", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Uniqueness of the classes via the splitting principle, printed pp.80–83"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Theorem 33.6 and Lectures 34–36, printed pp.119–134"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $w'$ be a rule assigning to every isomorphism class of
numerable real vector bundles $E\to B$ over an admissible base a total class
$w'(E)\in H^*(B;\mathbb F_2)$
such that

1. the degree-zero part of $w'(E)$ is $1$ and $w'(E)$ has finite degree
   bounded by the rank of $E$;
2. $w'$ is natural: $w'(f^*E)=f^*w'(E)$ for every map $f$ of admissible bases;
3. $w'$ is multiplicative: $w'(E\oplus F)=w'(E)w'(F)$ for bundles over one
   base;
4. $w'(\gamma_1)=1+a$ for the tautological line $\gamma_1\to\mathbb R
   P^\infty$, where $a$ generates $H^1(\mathbb{RP}^\infty;\mathbb F_2)$.

Then $w'=w$: the rule agrees with the total Stiefel–Whitney class of
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] on every
numerable real bundle over an admissible base, and $w'_i(E)=0$ for $i$ greater
than the rank of $E$.

## Facts & Assumptions

**Given:** AC, a rule $w'$ satisfying the four clauses of the statement, and a numerable real bundle $E\to B$ of rank $n\geq0$ over an admissible base.

[F1] The universal line $\gamma_1\to\mathbb{RP}^\infty$ has $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$, and the Stiefel–Whitney classes of a line bundle $L$ are $w_0(L)=1$, $w_1(L)=x_L$ and $w_i(L)=0$ for $i\geq2$, where $x_L$ is computed from a classifying map of $L$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F2] By naturality, a line bundle $L$ over an admissible base with classifying map $c$ (a map with $c^*\gamma_1\cong L$, available from the numeration) satisfies $w_1(L)=c^*a$ and $w'(L)=c^*w'(\gamma_1)$ ([[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[thm-naturality-of-stiefel-whitney-classes]]).

[F3] The flag bundle $q:\operatorname{Fl}(E)\to B$ is an admissible base with $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ injective on $\mathbb F_2$-cohomology ([[def-real-flag-bundle-and-stiefel-whitney-roots]], [[thm-real-splitting-principle-with-mod-two-injective-pullback]]).

[F4] The Stiefel–Whitney class satisfies naturality, the Whitney product formula and $w(\gamma_1)=1+a$ ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The rule is determined on line bundles. Let $L\to B$ be a numerable real line bundle with classifying map $c$, so $c^*\gamma_1\cong L$. Then naturality of $w'$ and the normalization $w'(\gamma_1)=1+a$ give $$w'(L)=w'(c^*\gamma_1)=c^*w'(\gamma_1)=c^*(1+a)=1+c^*a=1+w_1(L),$$ where the last equality is [F2]. Hence $w'(L)=w(L)$ for every line bundle, including the trivial line, for which $c$ is nullhomotopic and $w_1=0$. [F1, F2]

2.1 The rule is determined on every bundle. Let $E\to B$ have rank $n\geq0$ and let $q:\operatorname{Fl}(E)\to B$ be its flag bundle, with $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ injective. Iterating multiplicativity of $w'$ over the successive summands gives $w'(q^*E)=\prod_{j=1}^{n}w'(L_j)$, where the empty product for $n=0$ is $1$; by step 1.1 and [F1] this is $\prod_{j=1}^{n}(1+w_1(L_j))=w(L_1\oplus\cdots\oplus L_n)=w(q^*E)$, the last equality by the Whitney formula and [F1]. On the other hand naturality of both rules gives $w'(q^*E)=q^*w'(E)$ and $w(q^*E)=q^*w(E)$, so $q^*w'(E)=q^*w(E)$; injectivity of $q^*$ gives $w'(E)=w(E)$. For $n=0$ the bundle is the zero bundle, $\operatorname{Fl}(E)=B$, and both rules give $1$ by their degree-zero normalization, so the identity is literal. [F1, F3, F4, step 1.1]

3.1 The rank bound. Since $w'=w$ by step 2.1 and the classes $w_i(E)$ vanish for $i>n$ by the rank convention of their definition, also $w'_i(E)=0$ for $i>n$. Combined with clause 1 of the statement this shows the rule is exactly the total class computed from the projective-bundle relation, whose coefficients are the classes $w_i$. [F1, F3, step 2.1]

4.1 Boundary cases. For rank $n=1$ the flag bundle is $B$ up to the identification $P(L)\cong B$, the splitting is $q^*L\cong L_1$ with $L_1\cong L$, and step 2.1 reduces to step 1.1. For the empty base all groups vanish and both rules give the zero class with degree-zero part the zero-ring unit. The normalization clause 4 is exactly the universal case of step 1.1 over $\mathbb{RP}^\infty$, and the tautological line is the line bundle with classifying map the identity. AC is used through the splitting principle of [F3], as recorded. [F1, F2, F3, A1, step 1.1, step 2.1] ∎
