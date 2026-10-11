---
id: thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
kind: theorem
title: "Compact Laplace-type operators: smooth kernel, closed range and Green inverse"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-axiom-of-choice, thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity, thm-orthogonal-decomposition-by-a-closed-subspace, def-hilbert-orthogonal-projection, def-orthogonality-and-orthogonal-complement]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch VI §2 Corollary 2.4 and its proof, pp 289–290"
---

## Statement

Assume the Axiom of Choice. Let $M,E,P$ have exactly the compact, boundaryless, scalar-positive-symbol and formal symmetry hypotheses of [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]], with $\operatorname{dom}P=H^2(M,E)$. Write $\mathcal H=\ker P$.

Then $\mathcal H$ is finite dimensional and consists of smooth sections, $\operatorname{ran}P=\mathcal H^\perp$ is closed in $L^2$, and
$$L^2(M,E)=\mathcal H\mathbin{\oplus^\perp}\operatorname{ran}P.$$
Let $\Pi$ be the orthogonal projection onto $\mathcal H$. There is a unique linear operator $G:L^2\to H^2\cap\mathcal H^\perp$ with
$$PG=I-\Pi\quad\hbox{on }L^2,\qquad GP=I-\Pi\quad\hbox{on }H^2,\qquad G\Pi=\Pi G=0.$$
It is bounded from $H^k$ to $H^{k+2}$ for every integer $k\ge0$, compact and selfadjoint on $L^2$, and preserves smooth sections. For all such $k$,
$$H^k=\mathcal H\oplus P(H^{k+2}),\qquad C^\infty(M,E)=\mathcal H\oplus P(C^\infty(M,E)),$$
where the second summands are the corresponding intersections with $\mathcal H^\perp$, and the decompositions are topological. The projection is smoothing: for every integer $r\ge0$, $\|\Pi f\|_{C^r}\le C_r\|f\|_2$. Consequently $G$ is a two-sided parametrix with finite-rank smoothing remainders. If additionally $(Pu,u)_2\ge0$ for smooth $u$, then $P$ and $G$ are nonnegative on their respective domains.

## Facts & Assumptions

**Given:** the full AC assumption, data and operator domain in the Statement.

[F1] The preceding analytic theorem gives selfadjointness with exactly the $H^2$ domain, compact $H^2\hookrightarrow L^2$, smooth density, higher weak regularity, and $\|u\|_{H^{k+2}}\le C_k(\|Pu\|_{H^k}+\|u\|_2)$ ([[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

[F2] Closed subspaces of real or complex Hilbert spaces have orthogonal decompositions under Countable Choice; full AC supplies that assumption ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-axiom-of-choice]]).

## Proof

1.1 Every $h\in\mathcal H$ belongs to $H^2\subset H^1$ and satisfies $Ph=0$; [F1] applied at all integer orders gives a smooth representative and $\|h\|_{H^2}\le C\|h\|_2$. The kernel is closed in $L^2$: if $h_j\to h$ there, the same estimate for $h_j-h_i$ makes it Cauchy in $H^2$; its $H^2$ limit is $h$ and continuity $P:H^2\to L^2$ gives $Ph=0$. If this closed Hilbert subspace were infinite dimensional, AC permits successively choosing unit vectors orthogonal to the span of earlier choices, producing an orthonormal sequence. The sequence is bounded in $H^2$, so [F1] gives an $L^2$ convergent subsequence, contradicting the distance $\sqrt2$ between distinct members. Hence $\mathcal H$ is finite dimensional. [F1, given]

2.1 There is $c>0$ such that $\|u\|_2\le c\|Pu\|_2$ for every $u\in H^2\cap\mathcal H^\perp$. Otherwise select $u_j$ in that subspace with $\|u_j\|_2=1$ and $\|Pu_j\|_2<1/j$. The elliptic estimate bounds it in $H^2$, so compactness gives an $L^2$ convergent subsequence. Applying the elliptic estimate to differences shows this subsequence is Cauchy in $H^2$, since both it and its images under $P$ converge in $L^2$. Its $H^2$ limit $u$ has $Pu=0$, $u\perp\mathcal H$, and $\|u\|_2=1$, a contradiction. Combining the obtained bound with [F1] yields $\|u\|_{H^2}\le C'\|Pu\|_2$ on that complement. [F1, step 1.1]

3.1 Suppose $Pu_j\to f$ in $L^2$. Subtract the orthogonal projection of each $u_j$ onto the finite smooth space $\mathcal H$; its image under $P$ does not change. Step 2.1 makes the resulting sequence Cauchy in $H^2$, so it has a limit $u$ there with $Pu=f$. Thus the range is closed. A vector $y\in L^2$ is orthogonal to the range exactly when $(Pu,y)_2=0$ for every $u\in\operatorname{dom}P$, which by the definition of unbounded adjoint says $y\in\operatorname{dom}P^*$ and $P^*y=0$. Selfadjointness in [F1] identifies this with $y\in\mathcal H$. [F2] applied to the closed range therefore gives $\operatorname{ran}P=\mathcal H^\perp$ and the claimed $L^2$ decomposition. [F1, F2, step 1.1, step 2.1]

4.1 For $f\in\mathcal H^\perp$, step 3.1 gives a preimage in $H^2$; subtracting its harmonic projection gives a preimage in $H^2\cap\mathcal H^\perp$, unique because the difference of two lies in $\mathcal H\cap\mathcal H^\perp$. Define $Gf$ to be this preimage and define $G=0$ on $\mathcal H$. Uniqueness gives linearity. Step 2.1 gives its $L^2\to H^2$ bound. The construction proves both inverse identities and $G\Pi=\Pi G=0$. Compactness on $L^2$ follows from [F1]. For $f,g\in\mathcal H^\perp$, symmetry of $P$ gives $(Gf,g)_2=(Gf,PGg)_2=(PGf,Gg)_2=(f,Gg)_2$; harmonic cross terms vanish, so $G$ is selfadjoint on all $L^2$. [F1, step 2.1, step 3.1]

5.1 Choose a finite $L^2$ orthonormal basis $e_1,\ldots,e_N$ of $\mathcal H$. Each is smooth, and $\Pi f=\sum_j(f,e_j)_2e_j$. Cauchy–Schwarz gives $\|\Pi f\|_{C^r}\le\sum_j\|f\|_2\|e_j\|_2\|e_j\|_{C^r}$, including the empty-basis case. Thus $\Pi$ is smoothing and bounded from $L^2$ to every $H^k$. If $f\in H^k$, the equation $PGf=f-\Pi f$ and [F1] give $Gf\in H^{k+2}$ with $\|Gf\|_{H^{k+2}}\le C_k(\|f-\Pi f\|_{H^k}+\|Gf\|_2)\le C'_k\|f\|_{H^k}$. All integer orders give smooth preservation. The Green identities express every $H^k$ section as $\Pi f+PGf$ and identify the image summand with $H^k\cap\mathcal H^\perp$. This summand is closed, and both projections are bounded; the smooth version follows and is continuous in every smooth seminorm from the same bounds and Sobolev embedding. [F1, step 1.1, step 4.1]

6.1 If $P$ is formally nonnegative on smooth sections, density in $H^2$ and continuity of the pairing extend $(Pu,u)_2\ge0$ to all $u\in H^2$. For $f\in L^2$, put $u=Gf$; then $(Gf,f)_2=(u,Pu)_2\ge0$, since $u\perp\Pi f$. This proves the optional positivity claim. The inverse identities of step 4.1 and the smoothing projection of step 5.1 prove the final parametrix assertion. [F1, step 4.1, step 5.1] ∎
