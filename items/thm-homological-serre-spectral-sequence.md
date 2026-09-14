---
id: thm-homological-serre-spectral-sequence
kind: theorem
title: Homological Serre spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-serre-filtration-of-the-total-space-over-base-skeleta, lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients, def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-the-next-page-is-the-homology-of-the-current-page, def-homological-spectral-sequence, def-induced-filtration-on-homology, def-strong-convergence-of-a-spectral-sequence, prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, def-relative-singular-homology, lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex, thm-cellular-approximation-for-maps-of-cw-pairs, prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace, thm-singular-chain-homotopy-formula, def-simply-connected, thm-fundamental-group-laws]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 526–532"
    - title: "Miller, MIT 18.906 notes, Lectures 23–24"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lectures 23–24, printed pp. 76–82"
---

## Statement

Let $p:E\to B$ be a Serre fibration over a path-connected CW complex and
let $R$ be a commutative unital ring. The skeletal filtration gives a
choice-free natural first-quadrant homological spectral sequence
$$E^2_{a,b}\cong H_a\bigl(B;\mathcal H_b(p;R)\bigr), \qquad d_r:E^r_{a,b}\longrightarrow E^r_{a-r,b+r-1},$$
strongly converging to $H_{a+b}(E;R)$ with the finite image filtration
$$F_aH_n(E;R)=\operatorname{im}\bigl(H_n(E_a;R)\to H_n(E;R)\bigr), \qquad 0=F_{-1}H_n\subseteq\cdots\subseteq F_nH_n=H_n(E;R).$$
Its stable terms have the specified natural identifications
$$E^\infty_{a,n-a}\cong F_aH_n(E;R)/F_{a-1}H_n(E;R).$$
If $B$ is simply connected, transport between two fiber stalks is independent
of the path class, so after choosing one fiber identification the local
system is constant. The displayed spectral sequence then has
$E^2_{a,b}\cong H_a(B;H_b(F;R))$.

The chain filtration itself is not asserted to be degreewise finite. Strong
convergence follows from the argument below, not from the theorem for
degreewise finite filtered chain complexes.

## Facts & Assumptions

**Given:** The Serre filtration, its relative-cell and first-differential calculations, and the path-connected base.

[F1] [[lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients]] gives the first-quadrant $E^1$ page, identifies $d_1$ with the cellular local boundary, and gives the displayed $E^2$ page.

[F2] [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]] and [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] give the representative numerator, denominator, and quotient formulas. [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] and [[thm-the-next-page-is-the-homology-of-the-current-page]] construct the representative differential and natural next-page isomorphism without a boundedness hypothesis. The bidegrees and first-quadrant convention are those of [[def-homological-spectral-sequence]].

[F3] [[def-induced-filtration-on-homology]] defines $F_aH_n$ as the image filtration. [[def-strong-convergence-of-a-spectral-sequence]] requires weak associated-graded identifications, two-sided regularity, and an exhaustive, separated, complete target filtration; it also proves that a finite filtration is complete.

[F4] [[def-relative-singular-homology]] makes every singular cycle a finite chain. [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs a finite CW complex from finitely many compatible simplex faces.

[F5] [[thm-cellular-approximation-for-maps-of-cw-pairs]] gives a choice-free cellular approximation for a finite CW source. Finite-CW relative homotopies lift through a Serre fibration without AC by [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]], and [[thm-singular-chain-homotopy-formula]] identifies the two induced homology maps.

[F6] [[def-simply-connected]] requires path connectedness and trivial fundamental groups at every basepoint. The path concatenation, constant, and inverse laws are supplied by [[thm-fundamental-group-laws]].

[F7] [[def-serre-filtration-of-the-total-space-over-base-skeleta]] makes a map of fibrations over a cellular base map into a filtered map on singular chains. [[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]] then gives functorial page maps. [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] identifies the map induced on local-coefficient homology by the fiber-homology coefficient morphism.

## Proof

**Proof technique:** first-quadrant stabilization with finite representatives.

1.1 Apply the filtered-complex constructions in [F2] to $C_*(E;R)$ with $F_aC_*=C_*(E_a;R)$. The resulting differentials have the displayed bidegree and the next page is their homology. By [F1], the initial page vanishes unless $a,b\geq0$, its first differential is the cellular local boundary, and its next page is $H_a(B;\mathcal H_b(p;R))$. Since every later term is a subquotient of an earlier one, the first-quadrant vanishing persists. [F1, F2]

1.2 It remains to prove the finite upper endpoint of the target filtration, which does not follow from chain-level degreewise finiteness. Let $[z]\in H_n(E;R)$ with $n\geq0$, and write $z$ as a finite cycle. Attach one geometric simplex for each distinct iterated face in its finite support, identifying equally labelled faces. By [F4] this gives a finite CW complex $K$, a map $v:K\to E$, and a cellular $n$-cycle $\widetilde z$ with $v_\#\widetilde z=z$. Apply the finite-source clause of [F5] to $pv:K\to B$. It gives a homotopy to a cellular map $g$, so $g(K^j)\subseteq B^j$. Lift this homotopy through $p$, starting at $v$; the endpoint $v'$ satisfies $pv'=g$. Every simplex of $\widetilde z$ has dimension at most $n$, hence $v'_\#\widetilde z\in C_n(E_n;R)$. The prism identity in [F5] makes it homologous to $z$. Thus every class lies in $F_nH_n$, proving $F_nH_n=H_n$. Since $F_{-1}C=0$, also $F_{-1}H_n=0$. Negative-degree homology is zero. [F3, F4, F5]

1.3 Suppose now that $B$ is simply connected. For paths $\alpha,\beta:x\to y$, the loop $\alpha*\bar\beta$ at $x$ represents the identity by [F6]. Concatenating its endpoint-fixed nullhomotopy with $\beta$ and applying the associativity, inverse, and identity path homotopies gives $[\alpha]=[\beta]$ in $\Pi_1(B)$. Thus there is a unique path class between any two points. Functorial fiber transport is consequently path-independent. After fixing one stalk and its unique transport isomorphisms to the other stalks, $\mathcal H_b$ is the corresponding constant system, giving the untwisted $E^2$ formula. [F1, F6]

1.4 Here “natural” has the following precise meaning. Given a commutative square of Serre fibrations with total-space map $u:E\to E'$ over a cellular map $f:B\to B'$, [F7] gives $u(E_a)\subseteq E'_a$ and hence a filtered singular-chain map. Its functorial page maps commute with every $d_r$. On $E^1$, the cellwise relative maps commute with the pair connectors, excision maps, and fiber transports used in [F1]; after taking $d_1$-homology this is exactly the $E^2$ map induced by $f$ and the fiber-homology coefficient morphism in [F7]. Thus the displayed spectral sequence is natural for these squares. [F1, F7]

2.1 Fix a position $(a,b)$ in the first quadrant. The outgoing $d_r$ is zero for $r>a$, because its target has negative first coordinate. The incoming $d_r$ is zero for $r>b+1$, because its source has second coordinate $b-r+1<0$. Hence both incident differentials vanish once $r>\max(a,b+1)$, and the next-page isomorphism in [F2] makes this position stationary. The same bounds show two-sided regularity at every position. [F2, Step 1.1]

3.1 We identify that stationary object. Put $n=a+b$ and $Z_a=F_aC_n\cap\ker\partial$. From the numerator formula in [F2], for $r>a$ the $r$-cycles are exactly $Z_a$, since $F_{a-r}C_{n-1}=0$. The first denominator summand is then $F_{a-1}C_n\cap\ker\partial$. Every element of the second summand is an actual boundary lying in $F_aC_n$. Conversely, let $x=\partial y\in F_aC_n$. The filtration is exhaustive for this one finite chain, so $y\in F_sC_{n+1}$ for some integer $s$. For any $r$ with $a+r-1\geq s$, one has $$y\in F_{a+r-1}C_{n+1}\cap \partial^{-1}(F_aC_n),$$ so $x$ belongs to the $r$-boundary denominator. The coherent class of $x$ therefore vanishes on some later page. Once Step 2.1 has reached its stationary range, every transition is an isomorphism, so that class was already zero at the first stationary page. Thus $$E^\infty_{a,b}\cong \frac{F_aC_n\cap\ker\partial} {(F_{a-1}C_n\cap\ker\partial)+(F_aC_n\cap\operatorname{im}\partial)}. $$ This argument chooses a filtration bound only for the displayed $y$; it does not require a uniform bound for all $(n+1)$-chains. [F2, Step 2.1]

4.1 The quotient in Step 3.1 is naturally $F_aH_n(E;R)/F_{a-1}H_n(E;R)$. Send an actual filtered cycle to its homology class modulo the preceding image filtration. This is surjective by [F3]. If $z\in F_aC_n$ maps into $F_{a-1}H_n$, there is an actual cycle $w\in F_{a-1}C_n$ with $z-w=\partial y$; hence $z$ lies in the displayed denominator. The converse is immediate. This proves both injectivity and surjectivity and gives the weak-convergence identifications required in [F3]. [F3, Step 3.1]

5.1 Step 1.2 makes the target filtration finite, hence exhaustive, separated, and complete by [F3]. Step 2.1 gives two-sided regularity, and Step 4.1 gives the specified weak-convergence isomorphisms. These are exactly the conditions for strong convergence in [F3]. No chain-level assertion $F_nC_n=C_n$ was used. [F3, Step 2.1, Step 4.1, Step 1.2]

6.1 If $B=\varnothing$, then $E=\varnothing$ and every page and target is zero; otherwise path connectedness supplies paths used only one at a time. If $E$ or a fiber is empty, the corresponding chains and stalks are zero. The zero ring, $n=0$, $a=0$, $b=0$, the axes, a one-cell finite face complex, and constant or degenerate singular simplices are included in Steps 1.1–4.1. Step 2.1 checks both incoming and outgoing stationary bounds, and Step 4.1 checks both kernel and image directions. Identity and composite naturality follow from [F7]. Every filtration bound, cellular approximation, and lift is attached to one finite representative; no AC or simultaneous choice is used. [F1, F2, F3, F4, F5, F7, Step 1.1, Step 1.4, Step 2.1, Step 3.1, Step 4.1, Step 1.2, Step 5.1] ∎
