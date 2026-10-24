---
id: lem-linear-clutching-splits-into-eigenbundles
kind: lemma
title: Linear clutching splits into spectral subbundles
status: published
origin: pipeline
deps: [lem-polynomial-clutching-families-stabilize-to-linear-clutching, def-clutching-construction-for-bundles-over-a-suspension, cor-winding-number-classifies-loops-in-the-punctured-plane, def-external-product-in-complex-k-theory, thm-hopf-line-calculation-of-k-zero-of-the-two-sphere, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 2.7 and Lemma 2.8"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Möbius reduction and continuous spectral splitting, printed pp.46–49"
---

## Statement

Assume AC. Suppose $a(x)z+b(x)$ is a linear clutching automorphism of $E$ for
every $x\in X$ and $|z|=1$. A disk-automorphism homotopy and a constant change
of hemisphere frame reduce it to $zI-A_x$. The generalized eigenspaces of
$A_x$ with eigenvalues outside and inside the unit circle form complementary
subbundles $E_>$ and $E_<$. In the fixed convention,

$$[E,zI-A]=[E_>,I]\oplus[E_<,z],$$

so its $K$-class is
$\operatorname{pr}_X^*[E_>]+\operatorname{pr}_X^*[E_<]\,
\operatorname{pr}_{S^2}^*[\gamma]$. The construction preserves direct sums.

## Facts & Assumptions

**Given:** AC, compact Hausdorff $X$, and the displayed linear clutching family obtained after [[lem-polynomial-clutching-families-stabilize-to-linear-clutching]].

[F1] A constant bundle automorphism extends over a hemisphere and hence can be absorbed by changing a clutching trivialization ([[def-clutching-construction-for-bundles-over-a-suspension]]).

[F2] Winding number is invariant under homotopy through nonzero loops and is additive under products ([[cor-winding-number-classifies-loops-in-the-punctured-plane]]).

[F3] External product identifies $[E,I]$ with the pullback from $X$ and $[E,z]$ with the pullback of $E$ tensored by the Hopf line ([[def-external-product-in-complex-k-theory]]).

[F4] The Hopf convention fixes $z$ as $\gamma$ and $\beta=[\gamma]-1$ ([[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]]).

[A1] AC is inherited from [F3] and [F4]; the finite-dimensional spectral construction itself makes no selections.

## Proof

**Proof technique:** direct.

1.1 For $0\leq t<1$, the fractional-linear map $z\mapsto(z+t)/(1+tz)$ carries $S^1$ to itself, and $1+tz\ne0$ there. Therefore $H_t(z)=(1+tz)(a(z+t)/(1+tz)+b)=(a+tb)z+ta+b$ is a homotopy through linear clutching automorphisms from $az+b$. At $t=1$, the coefficient $a+b$ is the original automorphism evaluated at $z=1$. Openness of bundle automorphisms and compactness of $X$ give $t_0<1$ for which $C=a+t_0b$ is invertible on every fiber. [construct, algebra]

2.1 Right multiplication of $H_{t_0}$ by the constant automorphism $C^{-1}$ does not change the glued bundle by [F1]. Since scalar $z$ commutes with $C$, it gives $zI+B$, where $B=(t_0a+b)C^{-1}$. Put $A=-B$. Then $zI-A$ is invertible on $S^1$, so $A_x$ has no eigenvalue of modulus one. [F1, step 1.1, algebra]

3.1 For one fiber $V$, factor the characteristic polynomial of $A$ as $q=q_>q_<$, with the roots of the monic factors respectively outside and inside $S^1$. Bézout polynomials for the relatively prime factors and Cayley–Hamilton give $V_>=\ker q_>(A)=\operatorname{im}q_<(A)$, $V_<=\ker q_<(A)=\operatorname{im}q_>(A)$, and $V=V_>\oplus V_<$. Both spaces are $A$-invariant and have precisely the indicated generalized eigenvalues. This also proves uniqueness: any invariant splitting with the same spectral locations is annihilated by the corresponding factor and therefore equals these kernels. [step 2.1, algebra]

4.1 These fiber splittings vary continuously. Around each root cluster choose a small circle disjoint from all roots. For a sufficiently small change of the polynomial, the straight-line change stays nonzero on each circle, so [F2] preserves the winding number of $q/|q|$. Factoring $q$ into linear factors shows this winding is exactly the number of enclosed roots counted with multiplicity. Thus the inside and outside monic factors vary continuously in their coefficients. In a local frame choose vectors whose images under $q_<(A)$ and $q_>(A)$ form the bases in step 3.1; the same determinant remains nonzero nearby. Their images therefore give local frames for $E_>$ and $E_<$, proving that the fiberwise spaces are complementary subbundles. [F2, step 3.1, algebra]

5.1 On $E_>$, the family $tzI-A|_{E_>}$ is invertible for $0\leq t\leq1$, since every eigenvalue of $A|_{E_>}$ has modulus greater than one; it deforms $zI-A$ to the constant $-A$, which [F1] identifies with $I$. On $E_<$, $zI-tA|_{E_<}$ stays invertible because all eigenvalues have modulus less than one; it deforms $zI-A$ to $zI$. Hence [F1] gives $[E,zI-A]\cong[E_>,I]\oplus[E_<,z]$. [F1, step 4.1, algebra]

6.1 Applying [F3] and the convention [F4] to step 5.1 gives the stated $K$-class, hence a combination of $1$ and $\beta$. For a block direct sum, the characteristic polynomial factors and the unique inside/outside invariant splitting in step 3.1 is the direct sum of the individual splittings, so the construction is additive. Rank zero gives two zero subbundles and the same formula. [F3, F4, A1, step 3.1, step 5.1] ∎
