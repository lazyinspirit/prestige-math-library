---
id: lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space
kind: lemma
title: The universal oriented sphere bundle has BSO(n-1) as total space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-oriented-grassmannian-and-tautological-oriented-bundle, thm-stable-stiefel-space-is-contractible, thm-principal-bundles-are-classified-by-maps-to-bg, prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish, def-real-and-complex-topological-vector-bundle, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the classifying-space construction."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 35-36"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Universal oriented sphere bundles and the BSO induction, printed pp.130-137"
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 3.16 proof"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The sphere bundle S(E_n) and the projection to BG_{n-1}, printed pp.95-97"
---

## Statement

Assume AC. Let $\gamma_n^+\to B\operatorname{SO}(n)$ be the universal oriented
rank-$n$ real bundle over the Grassmannian model
$B\operatorname{SO}(n)=\operatorname{Gr}_n^+(\mathbb R^\infty)$ for $n\geq2$,
and let $S(\gamma_n^+)\to B\operatorname{SO}(n)$ be its unit sphere bundle.
Then:

1. There is a fibration $S^{n-1}\to B\operatorname{SO}(n-1)\to
   B\operatorname{SO}(n)$ whose total space is identified with
   $S(\gamma_n^+)$;
2. under this identification the pullback of $\gamma_n^+$ splits as the
   ordered sum
$$\gamma_n^+\big|_{B\operatorname{SO}(n-1)}\cong \widetilde\gamma_{n-1}\oplus\varepsilon^1,$$
   where $\widetilde\gamma_{n-1}$ is the tautological oriented rank-$(n-1)$
   bundle and the trivial summand is spanned by the tautological unit vector,
   with the orientation convention that a positive frame of
   $\widetilde\gamma_{n-1}$ preceded by the tautological unit vector is a
   positive frame of $\gamma_n^+$;
3. in particular the pulled-back Euler class vanishes,
   $p^*e(\gamma_n^+)=0$, because the trivial summand provides a nowhere-zero
   section.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classifying-space and principal-bundle suppliers ([[def-axiom-of-choice]]).

[F1] $\operatorname{Gr}_n^+(\mathbb R^\infty)=V_n(\mathbb R^\infty)/\operatorname{SO}(n)$ is the chosen model of $B\operatorname{SO}(n)$, carrying the tautological oriented bundle $\gamma_n^+$ ([[def-oriented-grassmannian-and-tautological-oriented-bundle]]).

[F2] The stable Stiefel space $V_n(\mathbb R^\infty)$ is contractible and $\operatorname{SO}(n)$ acts freely on it ([[thm-stable-stiefel-space-is-contractible]]).

[F3] Numerable principal bundles over CGWH bases of CW type are classified by maps to the Milnor model, so a numerable principal $G$-bundle with contractible total space is a model of $EG\to BG$ ([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F5] A rank-$n$ bundle with a nowhere-zero section has vanishing Euler class ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F6] Vector bundles and their sphere bundles are formed from the associated principal bundle by the standard representation and its unit sphere ([[def-real-and-complex-topological-vector-bundle]]).

## Proof

**Proof technique:** direct.

**Given:** AC and the universal oriented rank-$n$ bundle $\gamma_n^+$ over $B\operatorname{SO}(n)$ for $n\geq2$.

1.1 By [F1] and [F2], $E\operatorname{SO}(n)=V_n(\mathbb R^\infty)$ is a contractible free $\operatorname{SO}(n)$-space with quotient $B\operatorname{SO}(n)$, and $\gamma_n^+=E\operatorname{SO}(n)\times_{\operatorname{SO}(n)}\mathbb R^n$. Its unit sphere bundle is therefore the associated bundle for the unit sphere $S^{n-1}$ of $\mathbb R^n$. [F1, F2, F6]

1.2 The stabilizer of a unit vector is $\operatorname{SO}(n-1)$, so $S^{n-1}=\operatorname{SO}(n)/\operatorname{SO}(n-1)$ and the sphere bundle is $E\operatorname{SO}(n)/\operatorname{SO}(n-1)$, a numerable principal $\operatorname{SO}(n-1)$-bundle with contractible total space; by [F3] it is a model of $E\operatorname{SO}(n-1)\to B\operatorname{SO}(n-1)$, giving $S(\gamma_n^+)\simeq B\operatorname{SO}(n-1)$ and the fibration of assertion 1. [F1, F2, F3, F6]

1.3 The pullback of $\gamma_n^+$ to the total space is $E\operatorname{SO}(n)\times_{\operatorname{SO}(n-1)}\mathbb R^n$ with $\mathbb R^n=\mathbb R^{n-1}\oplus\mathbb R$ as $\operatorname{SO}(n-1)$-modules, the summand $\mathbb R$ being the line through the tautological unit vector. Hence it splits as $E\operatorname{SO}(n)\times_{\operatorname{SO}(n-1)}\mathbb R^{n-1}$ plus the trivial line bundle spanned by the unit vector. [F2, F6]

2.1 Under the model identification of step 1.2, the first summand is the tautological oriented rank-$(n-1)$ bundle over $B\operatorname{SO}(n-1)$: its fiber is the orthogonal complement of the unit vector in the oriented $n$-plane, with the induced orientation. This is assertion 2, the ordered-sum orientation being the one fixed in the statement. [F1, step 1.2, step 1.3]

3.1 The trivial summand of step 2.1 provides a nowhere-zero section of the pulled-back bundle, namely the tautological unit vector field; by [F5] the Euler class of the pulled-back bundle vanishes, so by naturality of the Euler class $p^*e(\gamma_n^+)=0$. This is assertion 3. [F5, step 2.1]

4.1 Boundary cases. For $n=2$ the fibration is $S^1\to B\operatorname{SO}(1)\to B\operatorname{SO}(2)$ with $B\operatorname{SO}(1)=*$ and $B\operatorname{SO}(2)=\mathbb{CP}^\infty$, recovering the circle bundle of the universal complex line. The case $n=1$ is excluded by the hypothesis; rank zero is excluded as well. The coefficient ring of the Euler class is $\mathbb Z$, nonzero, and the empty base does not occur. AC is used only through [A1] in the model comparisons. [A1, F1, F3, step 1.2, step 3.1] ∎

## Source notes

This is the standard induction step of Hatcher's proof of Theorem 3.16, printed pp. 95-97: the sphere bundle $S(\widetilde E_n)$ is identified with $B\operatorname{SO}(n-1)$ and the projection sends the Pontryagin classes of $\widetilde E_n$ to those of $\widetilde E_{n-1}$, while the Euler class pulls back to zero. The orientation convention is the ordered-sum convention used in [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]].
