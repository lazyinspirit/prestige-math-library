---
id: thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes
kind: theorem
title: Rational cohomology of BO and BSO by Pontryagin and Euler classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-top-pontryagin-class-is-the-square-of-the-euler-class", "thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space", "lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants", "prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion", "def-oriented-grassmannian-and-tautological-oriented-bundle", "thm-oriented-real-vector-bundles-are-classified-by-bso", "def-axiom-of-choice", "thm-stable-stiefel-space-is-contractible", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-singular-cochain-complex-with-coefficients", "def-singular-cohomology-with-coefficients", "def-singular-cup-product-on-cochains", "def-thom-class-by-fiberwise-normalization", "thm-naturality-and-uniqueness-of-thom-classes", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-singular-cohomology-is-graded-commutative"]
proof_strategy: induction
axiom_strength: "ZF + AC; inherited from the classifying-space and Gysin suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Theorem 3.16"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Rational cohomology of BSO(n) and BO(n) by induction, printed pp.94-96"
---

## Statement

Assume AC, and let $p_i$ denote the Pontryagin classes of the universal bundles
and $e$ the Euler class of the universal oriented bundle. Then, for $m\geq1$,
$$H^*(B\operatorname{SO}(2m+1);\mathbb Q)=\mathbb Q[p_1,\dots,p_m],$$
$$H^*(B\operatorname{SO}(2m);\mathbb Q)=\mathbb Q[p_1,\dots,p_{m-1},e], \qquad p_m=e^2,$$
and the orientation-forgetting cover gives
$$H^*(B\operatorname O(2m);\mathbb Q)=H^*(B\operatorname O(2m+1);\mathbb Q) =\mathbb Q[p_1,\dots,p_m].$$
The generator degrees are $|p_i|=4i$ and $|e|=2m$. Moreover $B\operatorname O(0)$ and $B\operatorname{SO}(0)$ are points. The chosen Grassmannian model $B\operatorname{SO}(1)=V_1(\mathbb R^\infty)$ is contractible, rather than literally a point. All three have rational cohomology $\mathbb Q$.

## Facts & Assumptions

[A1] AC is assumed for the universal-bundle, Gysin and characteristic-class suppliers. ([[def-axiom-of-choice]]).

[F1] For a numerable oriented rank-$n$ bundle in the general Thom scope the rational Gysin sequence is $\cdots\to H^{j-n}(B)\xrightarrow{\smile e}H^j(B)\xrightarrow{p^*}H^j(S)\to H^{j-n+1}(B)\xrightarrow{\smile e}\cdots$. ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F2] Write $B_n=\operatorname{Gr}_n^+(\mathbb R^\infty)$. For $n\ge2$ the actual universal sphere bundle $p:S_n\to B_n$ has a homotopy equivalence $r:S_n\to B_{n-1}$ and the oriented splitting $p^*\gamma_n^+\cong\varepsilon^1\oplus r^*\gamma_{n-1}^+$. Also $p^*e=0$. Pontryagin classes are natural and stable on the stated CW bases. ([[lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space]], [[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]).

[F3] For a numerable oriented real rank-$2k$ bundle over a nonempty path-connected paracompact Hausdorff CW base, $p_k=e^2$ integrally, and hence after changing coefficients to $\mathbb Q$. Euler classes are natural and orientation reversal negates them in positive rank. ([[thm-top-pontryagin-class-is-the-square-of-the-euler-class]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F4] The integral Euler class of an oriented odd positive-rank bundle in the general Thom scope is killed by 2. ([[prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion]]).

[F5] For $n\ge1$, $B_n\to G_n=\operatorname{Gr}_n(\mathbb R^\infty)$ is the orientation-forgetting double cover and its tautological unoriented bundle is pulled back from $G_n$. For $n=0$ both Grassmannians are points. Oriented tautological bundles classify numerable oriented bundles on paracompact Hausdorff CGWH bases. A finite regular cover of CW complexes with path-connected total space has injective rational pullback with image its deck invariants. ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[thm-oriented-real-vector-bundles-are-classified-by-bso]], [[lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants]]).

[F6] Stable Stiefel spaces are contractible, including rank zero. The ordinary stable Grassmannians carry their Schubert CW structures. Homotopic maps induce the same cohomology pullback for every abelian coefficient group. ([[thm-stable-stiefel-space-is-contractible]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F7] The singular coboundary is precomposition with the alternating face boundary; cohomology is its kernel modulo image, zero in negative degrees, and is a vector space for rational coefficients. Even-degree cohomology classes commute by graded commutativity ([[thm-singular-cohomology-is-graded-commutative]]). The cup cochain evaluates on the front and back faces and multiplies coefficients. ([[def-singular-cochain-complex-with-coefficients]], [[def-singular-cohomology-with-coefficients]], [[def-singular-cup-product-on-cochains]]).

[F8] The chosen ordinary and oriented stable Grassmannians have CW structures with finitely many cells in each dimension. Hatcher explicitly records this before Theorem 3.16, printed p.94. They also have compact finite-dimensional Grassmannian stages and are admissible bases for their universal bundles: local triviality and this compact exhaustion give numerability by Hatcher Proposition 1.19, printed p.36. Source: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf .

[F9] A normalized Thom class restricts to the chosen orientation generator on every fiber and is unique under the Thom hypotheses; the Euler class is its relative-to-absolute image pulled back by the zero section. ([[def-thom-class-by-fiberwise-normalization]], [[thm-naturality-and-uniqueness-of-thom-classes]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** induction on the rank $n$, with separate parity cases.

**Given:** $P(n)$ is the displayed oriented rational polynomial presentation in rank $n\ge1$. All classes below have rational coefficients, obtained from the integral classes.

1.1 Models and base case. The orientation double cover lifts the Schubert cells of $G_n$ to cells of $B_n$: pull back each characteristic disk, use its two trivial sheets and attach their boundary lifts. The covering topology locally agrees with the lifted weak CW topology; this is the CW structure recorded in [F8]. The universal bundles are in the scope of [F1]–[F3]. For $n>0$, $B_n$ is path-connected because it is the continuous image of the contractible nonempty $V_n(\mathbb R^\infty)$ under the frame quotient; the same is true of $G_n$. At rank one, $\operatorname{SO}(1)$ is trivial, so $B_1=V_1(\mathbb R^\infty)$ is contractible by [F6]. On a point the rational cochain complex is $\mathbb Q\xrightarrow0\mathbb Q\xrightarrow1\mathbb Q\xrightarrow0\cdots$, by the alternating sum of identical faces in [F7]. Thus its cohomology is $\mathbb Q$ in degree zero and zero otherwise. Homotopy invariance proves $P(1)$; $G_0$ and $B_0$ are points as stated separately. [A1, F1, F3, F5, F6, F7, F8, base]

1.2 Induction hypothesis. Fix $n\ge2$ and assume $P(n-1)$. The even-rank case below proves $P(n)$ when $n=2k$; the odd-rank case proves it when $n=2k+1$. Only the immediately preceding rank is assumed in either branch. [ih, given]

2.1 Coefficient and sphere-bundle conventions. Postcomposition of integral cochains with $\mathbb Z\to\mathbb Q$ commutes with the face differential and cup products by [F7]. It carries a normalized integral Thom class to a normalized rational one, hence carries the Euler class to the Euler class used in [F1]. Consequently [F4] makes odd-rank Euler classes zero rationally. For $n\ge2$, let $s:B_{n-1}\to S_n$ be a homotopy inverse to $r$ from [F2]. The map $j_n=p s$ is a map between the CW bases. Pulling back the actual splitting in [F2] gives $j_n^*\gamma_n^+\cong\varepsilon^1\oplus(rs)^*\gamma_{n-1}^+$. Naturality and stability on these CW bases and $rs\simeq\mathrm{id}$ give $j_n^*p_i=p_i$. Also $j_n^*e=s^*p^*e=0$. Under the cohomology isomorphism $s^*$, the Gysin map $p^*$ is exactly $j_n^*$. Thus the Gysin sequence can use $H^*(B_{n-1})$ without asserting that $S_n$ is literally $B_{n-1}$ or applying a CW-only characteristic-class interface to $S_n$. [F1, F2, F4, F6, F7, F9, step 1.1, algebra]

3.1 Even rank, exactness. Suppose $n=2k$ with $k\ge1$. By $P(2k-1)$, the target of $j_{2k}^*$ is $\mathbb Q[p_1,\ldots,p_{k-1}]$. Step 2.1 shows each generator lifts, so this map is surjective in every degree. Exactness of [F1], also in the preceding degree, makes multiplication by $e$ injective and gives $\ker j_{2k}^*=e H^*(B_{2k})$. Explicitly, $0\to H^{j-2k}(B_{2k})\xrightarrow{\smile e}H^j(B_{2k})\xrightarrow{j_{2k}^*}H^j(B_{2k-1})\to0$. [F1, step 2.1, step 1.2]

3.2 Odd rank, exactness and subring. Suppose $n=2k+1$ with $k\ge1$. By step 2.1, the rational Euler class is zero, so [F1] gives $0\to H^j(B_{2k+1})\xrightarrow{j_{2k+1}^*}H^j(B_{2k})\to H^{j-2k}(B_{2k+1})\to0$. The induction hypothesis gives $H^*(B_{2k})=\mathbb Q[p_1,\ldots,p_{k-1},e]$. The image of the injection contains $p_1,\ldots,p_{k-1},p_k=e^2$ by step 2.1 and [F3]. These are algebraically independent: distinct monomials in the formal last variable give distinct even powers of the independent variable $e$. Call their polynomial subring $R$. The target is the graded free $R$-module $R\oplus eR$. [F1, F3, step 2.1, step 1.2, algebra]

4.1 Even rank, polynomial generation and independence. Define $\Phi:\mathbb Q[P_1,\ldots,P_{k-1},E]\to H^*(B_{2k})$ by $P_i\mapsto p_i$, $E\mapsto e$, with degrees $4i,2k$. For a homogeneous class $x$ of degree $j$, choose a homogeneous polynomial $q(P)$ with $j_{2k}^*x=q(p)$ by step 3.1; then $x-\Phi(q)=e y$ with $y$ in degree $j-2k$. Ascending induction on nonnegative degree, with negative groups zero, proves surjectivity. For injectivity write an arbitrary finite polynomial as $R=\sum_{r=0}^N E^r A_r(P)$. If $\Phi(R)=0$, apply $j_{2k}^*$: algebraic independence in $P(2k-1)$ forces $A_0=0$, because $j_{2k}^*e=0$. Divide the remaining polynomial formally by $E$; injectivity of multiplication by $e$ from step 3.1 makes its image zero. Finite repetition yields all $A_r=0$. This proves $P(2k)$, with $p_k=e^2$ by [F3]. At $k=1$, the target is $H^*(B_1)=\mathbb Q$ and the same argument starts the induction at $B_2$. [F3, F7, step 2.1, step 1.2, step 3.1, algebra]

4.2 Odd rank, finite-dimensional comparison. Let $r_j=\dim_{\mathbb Q}R^j$ and $h_j=\dim_{\mathbb Q}H^j(B_{2k+1})$, setting both to zero for $j<0$. Each target degree in step 3.2 is finite-dimensional, since it is a polynomial ring on finitely many positive-degree generators. The injection therefore makes $h_j$ finite too. Exactness gives $h_j+h_{j-2k}=r_j+r_{j-2k}$. Ascending induction on $j\ge0$ yields $h_j=r_j$. Since $R^j$ is contained in the image and has its full dimension, it equals that image in every degree. The injective ring map thus identifies $H^*(B_{2k+1})$ with $R=\mathbb Q[p_1,\ldots,p_k]$, proving $P(2k+1)$. [F7, step 3.2, algebra]

5.1 Induction conclusion. Starting from $P(1)$, for each $n\ge2$ exactly its parity branch proves $P(n)$ from $P(n-1)$. In particular the even branch first proves $P(2)$, then the odd branch proves $P(3)$, then the even branch proves $P(4)$; no even-rank result is assumed before it is proved. The canonical rank-zero result was handled separately in step 1.1 rather than by an invalid polynomial formula involving an Euler generator of degree zero. [step 1.1, step 1.2, step 4.1, step 4.2]

6.1 Forget orientation. For $n\ge1$ the double cover in [F5] has path-connected total space by step 1.1, and orientation reversal acts transitively on its two-point fibers, so it is regular in the transfer supplier's convention. The reversal is nonidentity and fixes the underlying tautological bundle; hence it fixes every $p_i$ by naturality and negates $e$ when $n$ is even and positive by [F3]. Transfer identifies $H^*(G_n;\mathbb Q)$ with the invariant subring. For odd $n=2m+1\ge3$, all the polynomial generators are fixed. For even $n=2m$, write each polynomial uniquely as $\sum e^r A_r(p_1,\ldots,p_{m-1})$. Invariance under $e\mapsto-e$ forces $2A_r=0$ for odd $r$, hence those coefficients vanish over $\mathbb Q$. The invariants are exactly $\mathbb Q[p_1,\ldots,p_{m-1},e^2]=\mathbb Q[p_1,\ldots,p_m]$. Naturality along the cover identifies these with the stated universal Pontryagin classes on $G_n$. This proves both displayed unoriented rings. [F2, F3, F5, step 1.1, step 5.1, algebra]

7.1 Boundaries. The smallest displayed even case is $H^*(B_2;\mathbb Q)=\mathbb Q[e]$ with $|e|=2$ and $p_1=e^2$; the smallest odd case is $H^*(B_3;\mathbb Q)=\mathbb Q[p_1]$. Degree zero is $\mathbb Q$, negative degrees vanish, and no positive-degree polynomial generator occurs in $G_0,B_0$ or the contractible $B_1$. No double-cover assertion was used in rank zero, and no orientation reversal was applied to its canonical unit orientation. AC is inherited from the stated suppliers; the only division by sheet number is by 2 in rational cohomology. [A1, F5, F7, step 1.1, step 1.2, step 5.1, step 6.1, discharge-induction: step 1.2] ∎

## Source notes

Hatcher, Vector Bundles & K-Theory, https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf , printed pp.94–96: the paragraph before Theorem 3.16 records the CW models, and the proof gives the even/odd Gysin induction, the base $\widetilde G_1\simeq S^\infty$, and the transfer/deck-action calculation after inverting 2. The present argument works directly over $\mathbb Q$ and supplies the full even polynomial-injectivity and degree-by-degree dimension arguments. Proposition 1.19, printed p.36, supplies numerability for the compact exhaustion of these models.
