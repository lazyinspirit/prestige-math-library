---
id: thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes
kind: theorem
title: Rational cohomology of BO and BSO by Pontryagin and Euler classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-top-pontryagin-class-is-the-square-of-the-euler-class, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space, lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants, prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion, def-oriented-grassmannian-and-tautological-oriented-bundle, thm-oriented-real-vector-bundles-are-classified-by-bso, def-axiom-of-choice]
proof_strategy: induction
axiom_strength: "ZF + AC; inherited from the classifying-space and Gysin suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 3.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Rational cohomology of BSO(n) and BO(n) by induction, printed pp.96-98"
---

## Statement

Assume AC, and let $p_i$ denote the Pontryagin classes of the universal bundles
and $e$ the Euler class of the universal oriented bundle. Then, for $m\geq1$,
$$H^*(B\operatorname{SO}(2m+1);\mathbb Q)=\mathbb Q[p_1,\dots,p_m],$$
$$H^*(B\operatorname{SO}(2m);\mathbb Q)=\mathbb Q[p_1,\dots,p_{m-1},e], \qquad p_m=e^2,$$
and the orientation-forgetting cover gives
$$H^*(B\operatorname O(2m);\mathbb Q)=H^*(B\operatorname O(2m+1);\mathbb Q) =\mathbb Q[p_1,\dots,p_m].$$
Moreover $B\operatorname O(0)$, $B\operatorname{SO}(0)$ and
$B\operatorname{SO}(1)$ are points and have rational cohomology $\mathbb Q$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the classifying-space and Gysin suppliers ([[def-axiom-of-choice]]).

[F1] For an oriented numerable rank-$n$ bundle there is a natural Gysin long exact sequence with coefficients in $\mathbb Q$ ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F2] The unit sphere bundle of the universal oriented rank-$n$ bundle over $B\operatorname{SO}(n)$ has total space $B\operatorname{SO}(n-1)$; the pullback of the universal bundle splits as $\widetilde\gamma_{n-1}\oplus\varepsilon^1$ with the tautological unit-vector summand, so $p^*(p_i(\widetilde\gamma_n))=p_i(\widetilde\gamma_{n-1})$ and $p^*e=0$ ([[lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space]], [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).

[F3] For oriented bundles of rank $2m$ one has $p_m=e^2$ ([[thm-top-pontryagin-class-is-the-square-of-the-euler-class]]).

[F4] The Euler class of an oriented numerable bundle of odd rank is two-torsion, hence vanishes rationally ([[prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion]]).

[F5] The orientation-forgetting map $B\operatorname{SO}(n)\to B\operatorname O(n)$ is a finite regular two-sheeted covering with deck group $\mathbb Z/2$ acting by orientation reversal; for a finite regular cover over a CW base with deck group $G$, pullback is injective with image the $G$-invariants ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[thm-oriented-real-vector-bundles-are-classified-by-bso]], [[lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants]]).

[F6] The oriented Grassmannian models give $B\operatorname{SO}(0)= B\operatorname{SO}(1)=*$ and $B\operatorname O(0)=*$, and the rational cohomology of a point is $\mathbb Q$ in degree zero ([[def-oriented-grassmannian-and-tautological-oriented-bundle]]).

## Proof

**Proof technique:** induction on $n$.

**Given:** AC and the class of statements $P(n)$: for $n=2k+1$ odd, $H^*(B\operatorname{SO}(n);\mathbb Q)=\mathbb Q[p_1,\dots,p_k]$; for $n=2k$ even, $H^*(B\operatorname{SO}(n);\mathbb Q)=\mathbb Q[p_1,\dots,p_{k-1},e]$ with $p_k=e^2$.

1.1 Base of the induction: by [F6] the spaces $B\operatorname{SO}(0)$ and $B\operatorname{SO}(1)$ are points with rational cohomology $\mathbb Q$, which is $P(0)$ and $P(1)$ with empty polynomial lists. [F6, base]

1.2 Induction hypothesis: for a fixed $k\geq1$ assume the statements $P(2k-1)$ and $P(2k)$; the two inductive steps below prove $P(2k+1)$ and $P(2k+2)$ from them. [ih, given]

1.3 The remaining low-rank cases are [F6]: $B\operatorname O(0)$, $B\operatorname{SO}(0)$ and $B\operatorname{SO}(1)$ are points, with rational cohomology $\mathbb Q$ in degree zero. [F6]

2.1 Odd step, exactness. Using $P(2k)$ from the hypothesis of step 1.2, consider the universal sphere bundle $S^{2k}\to B\operatorname{SO}(2k)\to B\operatorname{SO}(2k+1)$ of [F2] with the Gysin sequence [F1] over $\mathbb Q$. The relevant Euler class is that of the odd-rank bundle, hence zero in $\mathbb Q$-cohomology by [F4], so the sequence splits into short exact sequences $0\to H^j(B\operatorname{SO}(2k+1))\to H^j(B\operatorname{SO}(2k))\to H^{j-2k}(B\operatorname{SO}(2k+1))\to0$. [F1, F2, F4, step 1.2]

2.2 Even step, exactness and surjectivity. Using $P(2k-1)$ from the hypothesis of step 1.2, consider the sphere bundle $S^{2k-1}\to B\operatorname{SO}(2k-1)\to B\operatorname{SO}(2k)$ of [F2] with Gysin sequence [F1]. By [F2] the map $p^*:H^*(B\operatorname{SO}(2k))\to H^*(B\operatorname{SO}(2k-1))$ sends $p_i$ to $p_i$ for $i<k$, so its image contains $p_1,\dots,p_{k-1}$; by $P(2k-1)$ the target is exactly $\mathbb Q[p_1,\dots,p_{k-1}]$, so $p^*$ is surjective. [F1, F2, step 1.2]

3.1 Odd step, comparison. By [F2] the image of $H^*(B\operatorname{SO}(2k+1))$ in $H^*(B\operatorname{SO}(2k))$ contains the elements $p_1,\dots,p_{k-1},p_k=e^2$, hence the subring $\mathbb Q[p_1,\dots,p_k]$; by $P(2k)$ the ring $H^*(B\operatorname{SO}(2k))$ is free over this subring with basis $\{1,e\}$. [F2, F3, step 2.1]

3.2 Even step, kernel and injectivity of $\smile e$. Surjectivity of $p^*$ forces the connecting map in the Gysin sequence to vanish, hence $\smile e:H^{j-2k}(B\operatorname{SO}(2k))\to H^j(B\operatorname{SO}(2k))$ is injective for every $j$; moreover $\ker p^*=\operatorname{im}(\smile e)=e\cdot H^*(B\operatorname{SO}(2k))$, the ideal generated by $e$. [F1, step 2.2]

4.1 Odd step, rank count. Let $r_j$ be the rank of $\mathbb Q[p_1,\dots,p_k]$ in degree $j$ and $r'_j$ the rank of $H^j(B\operatorname{SO}(2k+1))$. The exact sequences of step 2.1 give $r_j+r_{j-2k}=r'_j+r'_{j-2k}$ and the inclusion of step 3.1 gives $r'_j\geq r_j$ for all $j$; ascending induction on $j$ then gives $r'_j=r_j$ in every degree, since $r'_{j-2k}=r_{j-2k}$ is already known. Hence the subring $\mathbb Q[p_1,\dots,p_k]$ equals the whole image, and $H^*(B\operatorname{SO}(2k+1);\mathbb Q)=\mathbb Q[p_1,\dots,p_k]$, which is $P(2k+1)$. [step 2.1, step 3.1, algebra]

4.2 Even step, polynomial identification. Let $\varphi:\mathbb Q[P_1,\dots,P_{k-1},E]\to H^*(B\operatorname{SO}(2k);\mathbb Q)$ be the ring map $P_i\mapsto p_i$, $E\mapsto e$ (degrees $4i$ and $2k$). Surjectivity of $\varphi$ follows by ascending induction on degree: if $x$ has degree $j$, choose a polynomial $q$ with $p^*(x)=q(p_1,\dots,p_{k-1})$ using step 2.2, then $x-\varphi(q)\in\ker p^*=e\cdot H^{j-2k}(B\operatorname{SO}(2k))$ by step 3.2, and the cofactor has degree $j-2k<j$, hence is in the image. For injectivity, write a polynomial in the finite form $R(P,E)=\sum_{r=0}^N E^rA_r(P)$. If $\varphi(R)=0$, applying $p^*$ gives $A_0(p_1,\dots,p_{k-1})=0$ because $p^*e=0$ by [F2]; algebraic independence in $P(2k-1)$ gives $A_0=0$. Thus $0=\varphi(R)=e\,\varphi(\sum_{r=1}^NE^{r-1}A_r(P))$, and injectivity of $\smile e$ from step 3.2 shows that the polynomial with one lower $E$-degree again maps to zero. Repeating this finite argument proves successively that every $A_r=0$. Thus $H^*(B\operatorname{SO}(2k);\mathbb Q)=\mathbb Q[p_1,\dots,p_{k-1},e]$, and $p_k=e^2$ by [F3]; this is $P(2k)$. [F2, F3, step 2.2, step 3.2, algebra]

5.1 Unoriented case. By [F5] the forgetful map $B\operatorname{SO}(n)\to B\operatorname O(n)$ is a two-sheeted regular cover whose deck transformation reverses orientation; it fixes every $p_i$, because the Pontryagin classes are defined from complexifications and do not use the orientation, and it negates $e$, by the orientation-sign law for Euler classes. Hence for odd $n=2m+1$ the invariant subring of $\mathbb Q[p_1,\dots,p_m]$ is all of it, and for even $n=2m$ the invariants of $\mathbb Q[p_1,\dots,p_{m-1},e]$ under $e\mapsto-e$ are $\mathbb Q[p_1,\dots,p_{m-1},e^2]=\mathbb Q[p_1,\dots,p_m]$ by the even case and [F3]. By the transfer lemma [F5] these invariant subrings are exactly the images of $H^*(B\operatorname O(n);\mathbb Q)$, which is therefore $\mathbb Q[p_1,\dots,p_m]$ in both parities. [F3, F5, step 4.1, step 4.2]

6.1 Boundary cases. For $k=1$ the odd step gives $H^*(B\operatorname{SO}(3);\mathbb Q)=\mathbb Q[p_1]$ and the even step gives $H^*(B\operatorname{SO}(2);\mathbb Q)=\mathbb Q[e]$ with $p_1=e^2$, i.e. the rational cohomology of $\mathbb{CP}^\infty$; the empty polynomial list occurs at $n=0,1$. The degree-zero component is $\mathbb Q$ throughout, and the induction never divides by a non-invertible integer: the rank count uses rational vector spaces and the transfer uses the invertibility of the sheet number, which is $2$ in $\mathbb Q$. The statement is vacuous for negative $m$ and negative degrees. AC is used only through [A1] in the classifying-space, transfer and Gysin suppliers. [A1, F5, step 1.1, step 4.2, discharge-induction: step 1.2] ∎

## Source notes

This is Hatcher's Theorem 3.16 in rational form, printed pp. 96-98: the odd step splits the Gysin sequence because the Euler class is two-torsion and compares ranks; the even step uses surjectivity of the sphere-bundle restriction to identify the polynomial ring generated by the Pontryagin classes and the Euler class; the unoriented case is the invariant subring under orientation reversal, computed by the rational transfer.
