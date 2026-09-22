---
id: lem-complex-orientation-of-underlying-real-bundles
kind: lemma
title: The complex orientation of the underlying real bundle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-topological-vector-bundle, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-oriented-real-vector-bundle-and-oriented-frame-bundle, thm-vector-bundles-glued-from-transition-cocycles, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable, lem-characteristic-polynomial-of-block-triangular-matrix, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; AC is inherited from the bundle and Thom suppliers, not used in the linear algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes, Lemma 14.1 and section 15"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Canonical orientation of a complex bundle, printed pp.167-169"
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Complexification and the (-1)^n orientation comparison, printed pp.94-96"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ vector bundle over a
CW complex and let $E_{\mathbb R}$ be its underlying real bundle.

1. $E_{\mathbb R}$ carries a canonical integral orientation, the **complex
   orientation**: on a local complex frame $(v_1,\dots,v_n)$ the ordered real
   frame $(v_1,iv_1,\dots,v_n,iv_n)$ is positive. The orientation is
   independent of the complex frame used to define it, is natural under
   pullback, and is preserved by complex-linear bundle isomorphisms.
2. For numerable complex bundles $E,F$ over $B$, the complex orientation of $(E\oplus F)_{\mathbb R}$
   is the ordered direct-sum orientation of the complex orientations of
   $E_{\mathbb R}$ and $F_{\mathbb R}$.
3. Let $V$ be a numerable real bundle of rank $2n$ over $B$ with an integral orientation $o$, and
   let $\varphi:V_{\mathbb C}\to V\oplus V$ be the canonical real-linear
   isomorphism $v\otimes(a+ib)\mapsto(av,bv)$. Then $\varphi$ carries the
   complex orientation of $(V_{\mathbb C})_{\mathbb R}$ to $(-1)^n$ times the
   product orientation $o\oplus o$; consequently
   $e((V_{\mathbb C})_{\mathbb R})=(-1)^ne(V)^2$ in $H^{4n}(B;\mathbb Z)$.

The rank-zero case is included: $E_{\mathbb R}$ is the zero bundle with its
canonical orientation and $e(0_B)=1$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited by the numerability, Thom and Euler-class suppliers used below ([[def-axiom-of-choice]]).

[F1] The underlying real bundle $E_{\mathbb R}$ is obtained by regarding the complex transition matrices as real-linear; the construction commutes with pullback and with direct sums ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]). Complexification, passage to the underlying real bundle and finite direct sums use the same trivializing cover, so a partition of unity numerating that cover also numerates each resulting bundle.

[F2] For positive rank, an orientation of a real bundle is a continuous choice of one of the two fiber orientations and is determined by positive local frames; the zero vector space and every rank-zero bundle have one canonical orientation ([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F3] Bundles over a common cover are glued from their transition cocycles, and the cocycle determines the bundle up to canonical isomorphism ([[thm-vector-bundles-glued-from-transition-cocycles]]).

[F4] For $R$-oriented numerable real bundles the Euler class is natural under orientation-preserving pullback, negates under orientation reversal over $\mathbb Z$, and multiplies over ordered direct sums ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F5] Every endomorphism of a finite-dimensional complex vector space is upper triangularisable ([[cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable]]).

[F6] The determinant of a block upper triangular real matrix is the product of the determinants of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[F7] The Euler class of a rank-zero bundle is the unit $e(0_B)=1$ ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** direct.

**Given:** AC, numerable complex bundles over $B$ as in statements 1 and 2, a numerable oriented real rank-$2n$ bundle $V\to B$ as in statement 3, and local complex frames $(v_1,\dots,v_n)$ and $(w_1,\dots,w_n)$ over a common open set.

1.1 The list $(v_1,iv_1,\dots,v_n,iv_n)$ is a real basis of each fiber: since the $v_j$ form a complex basis, $\sum_j(a_jv_j+b_jiv_j)=\sum_j(a_j+ib_j)v_j$ vanishes only when all $a_j+ib_j=0$, that is, all $a_j=b_j=0$. Hence the list orients the fibers of $E_{\mathbb R}$ over the chart, and by [F2] these local data are the candidate local orientations. [F1, F2, given]

2.1 Compatibility on overlaps. Let $A\in\operatorname{GL}_n(\mathbb C)$ be the complex change-of-frame matrix $w_j=\sum_iA_{ij}v_i$. In the real bases of step 1.1 the change-of-frame matrix is the realification $R_A$ obtained by replacing every complex entry by its $2\times2$ real block; realification is multiplicative in the sense $R_{AB}=R_AR_B$, because it is the matrix of the same complex-linear map read in real coordinates. By [F5] choose a complex basis in which $A$ is upper triangular; then $R_A$ is block upper triangular with diagonal blocks $\begin{pmatrix}a_j&-b_j\\ b_j&a_j\end{pmatrix}$ for the diagonal entries $a_j+ib_j$ of $A$. By [F6] its determinant is the product of the block determinants $\prod_j(a_j^2+b_j^2)=|\det_{\mathbb C}A|^2>0$. A positive determinant means the two ordered real frames induce the same orientation, and multiplicativity of realification reduces every frame pair to this comparison. [F5, F6, step 1.1, algebra]

2.2 Complexification. Let $(e_1,\dots,e_{2n})$ be an oriented real basis of a fiber of $V$. The vectors $e_1,\dots,e_{2n}$ are a complex basis of the complexification, so by step 1.1 the complex orientation of $(V_{\mathbb C})_{\mathbb R}$ is represented by the ordered real basis $e_1,ie_1,e_2,ie_2,\dots,e_{2n},ie_{2n}$. Under the isomorphism $\varphi$ of statement 3 this list becomes $(e_1,0),(0,e_1),(e_2,0),(0,e_2),\dots,(e_{2n},0),(0,e_{2n})$, while the product orientation $o\oplus o$ is represented by the blocked list $(e_1,0),\dots,(e_{2n},0),(0,e_1),\dots,(0,e_{2n})$. Passing from the interleaved list to the blocked list is the shuffle of two length-$2n$ blocks; its inversion number is $0+1+\dots+(2n-1)=2n(2n-1)/2=n(2n-1)$, so the orientation sign is $(-1)^{n(2n-1)}=(-1)^n$. [F1, given, algebra]

3.1 Hence the local orientations of steps 1.1 and 2.1 agree on every overlap of a complex linear atlas, and [F3] glues them into a global integral orientation of $E_{\mathbb R}$, the complex orientation. The same determinant computation with $A$ the transition function of a pullback chart gives naturality under pullback, and with $A$ the matrix of a complex-linear isomorphism it gives invariance under complex-linear bundle isomorphisms. [F1, F3, step 2.1]

3.2 For rank $n=0$ the frame list of step 1.1 is empty and the determinant computation of step 2.1 is vacuous, so the zero bundle carries its canonical orientation; [F7] supplies $e(0_B)=1$ for use below. [F7, step 1.1]

3.3 Taking Euler classes. The numeration of $V$ also numerates $V_{\mathbb C}$, $(V_{\mathbb C})_{\mathbb R}$ and $V\oplus V$ by [F1], so every Euler class in this step lies in the scope of [F4]. If two orientations of a real bundle differ by a sign $\varepsilon=\pm1$ on positive frames, their Euler classes differ by the same $\varepsilon$ by the orientation-sign clause of [F4]; for the ordered direct sum $V\oplus V$ the Whitney product clause of [F4] gives $e(V\oplus V)=e(V)e(V)$. Therefore $e((V_{\mathbb C})_{\mathbb R})=(-1)^ne(V\oplus V)=(-1)^ne(V)^2$, which is statement 3. [F1, F4, step 2.2]

4.1 Direct sums. A local complex frame of $E\oplus F$ is the concatenation of a complex frame $(v_1,\dots,v_m)$ of $E$ and a complex frame $(w_1,\dots,w_k)$ of $F$, so the real frame of step 1.1 is $(v_1,iv_1,\dots,v_m,iv_m,w_1,iw_1,\dots,w_k,iw_k)$, exactly the ordered direct-sum frame of the complex-oriented summands $E_{\mathbb R}$ and $F_{\mathbb R}$. By [F2] the two orientations coincide, so statement 2 holds, and the rank-zero case is step 3.2. [F1, F2, step 1.1, step 3.2]

5.1 Boundary cases. Rank zero is step 3.2. In statement 2, step 4.1 says that the complex orientation on $0\oplus F$ is the ordered sum of the canonical orientation on $0$ and the complex orientation on $F$; only after applying the Whitney product formula [F4] and $e(0)=1$ from [F7] does one obtain $e(0\oplus F)=1\cdot e(F)$. In statement 3 with $n=0$, both sides are the unit. For a complex line, $n=1$ in step 2.1 gives $|\det_{\mathbb C}A|^2>0$ directly, and for $V$ of rank $2$ step 2.2 has inversion number $2\cdot1/2=1$ and sign $(-1)^1=-1$. The argument uses no choice beyond the inherited numerability data recorded in [A1]. [A1, F4, F7, step 3.2, step 4.1, step 2.2] ∎

## Source notes

The orientation convention $(v,iv)$ on a complex line and its determinant computation are the standard ones of Milnor-Stasheff, Lemma 14.1, and the $(-1)^n$ comparison of the complex orientation of $V_{\mathbb C}$ with the product orientation of $V\oplus V$ is Hatcher, *Vector Bundles & K-Theory* section 3.2, proof of Proposition 3.15(b), printed pp. 94-96 ("n(2n-1) transpositions, so a sign (-1)^n").
