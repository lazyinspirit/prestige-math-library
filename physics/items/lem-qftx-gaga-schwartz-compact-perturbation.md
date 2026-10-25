---
id: lem-qftx-gaga-schwartz-compact-perturbation
kind: lemma
title: Schwartz compact-perturbation theorem for Fréchet spaces
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-qftx-gaga-frechet-space
  - lem-qftx-gaga-baire-category-complete-metric-spaces
  - lem-qftx-gaga-frechet-open-mapping
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  lem-qftx-gaga-baire-category-complete-metric-spaces: mathematical-premise
  lem-qftx-gaga-frechet-open-mapping: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §1.B, Theorem 1.8(b), printed pp. 406–407: compact perturbation of a quasi-epimorphism, including its successive-approximation proof."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 8–10: the compact-operator argument in the finite-dimensional cohomology proof."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume the full Axiom of Choice. Let $E$ and $F$ be Fréchet spaces over $\mathbb C$. A continuous linear map $g:E\to F$ is called a quasi-epimorphism when its image is closed and has finite codimension in $F$. A continuous linear map $h:E\to F$ is called compact when the image of some neighborhood of $0$ has compact closure in $F$. If $g$ is a quasi-epimorphism and $h$ is compact, then $g+h:E\to F$ is a quasi-epimorphism.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §1.B](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; Fréchet spaces $E,F$; a continuous linear quasi-epimorphism $g:E\to F$; and a compact continuous linear map $h:E\to F$.

[F1] Full AC is the set-choice postulate ([[def-axiom-of-choice]]).

[F2] A continuous surjective linear map between Fréchet spaces is open ([[lem-qftx-gaga-frechet-open-mapping]]).

[F3] A Fréchet space is a Hausdorff complete metrizable locally convex vector space ([[def-qftx-gaga-frechet-space]]).

## Proof

1.1 First, if a continuous linear map $T:E_0\to F_0$ between Fréchet spaces has finite-codimensional image, then that image is closed and $T$ is open onto its image. Its kernel is closed, so $E_0/\ker T$ is Hausdorff and locally convex. The quotient seminorms from a countable defining family $(p_j)_{j\ge1}$ metrize it. To verify completeness, choose a decreasing absolutely convex neighborhood basis $U_n$ in $E_0$ with $U_{n+1}\subseteq\tfrac18U_n$ and $p_j(u)\le2^{-n}$ for every $u\in U_n$ and $j\le n$. From any Cauchy sequence of cosets choose a subsequence whose $n$th successive difference lies in the quotient image of $U_n$, and lift each difference to $u_n\in U_n$. For each fixed $j$, $\sum_n p_j(u_n)<\infty$, so the partial sums are Cauchy in the Fréchet topology and converge in $E_0$. Their image, added to the initial coset, is the limit of the subsequence; the original Cauchy sequence converges to the same coset. Hence $E_0/\ker T$ is Fréchet. Choose a finite-dimensional algebraic complement $S$ to $T(E_0)$ in $F_0$. The induced map $(E_0/\ker T)\oplus S\to F_0$, $([x],s)\mapsto T(x)+s$, is a continuous linear bijection between Fréchet spaces. By [F2] it is a homeomorphism. The closed subspace $(E_0/\ker T)\oplus\{0\}$ therefore maps to the closed subspace $T(E_0)$, and the quotient map $E_0\to E_0/\ker T$ shows that $T$ is open onto $T(E_0)$. [F2, F3, given, construct]

2.1 Choose a finite-dimensional complement $S$ to the closed finite-codimensional subspace $g(E)$ and let $q:F\to F/S$ be the quotient. The induced $\bar g=qg:E\to F/S$ is a continuous open surjection: $g:E\to g(E)$ is open by step 1.1, and $q|_{g(E)}:g(E)\to F/S$ is a continuous bijection between Fréchet spaces, hence a homeomorphism by [F2]. The induced $\bar h=qh$ is compact. Choose an absolutely convex neighborhood $U$ of $0$ in $E$ such that $K:=\overline{\bar h(U)}$ is compact, and set $V=\bar g(U)$; then $V$ is an open absolutely convex neighborhood of $0$ in $F/S$. Compactness gives $b_1,\ldots,b_N\in K$ with $K\subseteq\bigcup_j(b_j+\tfrac12V)$. Put $S_0=\operatorname{span}\{b_1,\ldots,b_N\}$ and let $p:F/S\to(F/S)/S_0$ be the quotient. Then $p(K)\subseteq\tfrac12p(V)$. [F2, F3, step 1.1, given, construct]

3.1 Write $G=p\bar g$, $H=p\bar h$, and $W=p(V)$. The map $G$ is surjective and $G(U)=W$. For any $y_0\in W$, choose $x_0\in U$ with $Gx_0=y_0$ and set $y_1=y_0-(G+H)x_0=-Hx_0\in p(K)\subseteq\tfrac12W$. Inductively, if $y_n\in2^{1-n}p(K)\subseteq2^{-n}W$, choose $x_n\in2^{-n}U$ with $Gx_n=y_n$; then $y_{n+1}:=y_n-(G+H)x_n=-Hx_n\in2^{-n}p(K)$. Thus $y_n\in2^{1-n}p(K)$ for all $n\ge1$. [F1, step 2.1, construct, algebra]

4.1 It remains to choose these lifts so their series converges. Let $(U_j)_{j\ge1}$ be a decreasing absolutely convex neighborhood basis in $E$ with $U_{j+1}\subseteq\tfrac18U_j$. For fixed $j$, the increasing open sets $G(2^nU_j\cap\tfrac12U)$, $n\ge1$, cover $G(\tfrac12U)=\tfrac12W$: every point of this image has a lift in $\tfrac12U$, and the sets $2^nU_j$ exhaust $E$. Their images are open because $G$ is open. Since the compact set $p(K)$ lies in $\tfrac12W$, compactness gives an integer $N(j)$ such that $p(K)\subseteq G(2^{N(j)}U_j\cap\tfrac12U)$; enlarge the $N(j)$ if needed so they strictly increase. Keep $x_0$ separate. Retain the finitely many tail lifts $x_n$ for $1\le n\le N(1)$ from step 3.1 and their resulting residual $y_{N(1)+1}$. Thereafter choose each new lift recursively using its current residual, and define the next residual by $y_{n+1}=y_n-(G+H)x_n$; the bounds of step 3.1 continue to hold because each new lift still belongs to $2^{-n}U$. For each block $N(j)<n\le N(j+1)$, since $y_n\in2^{1-n}p(K)$ choose $k_n\in K$ with $p(k_n)=2^{n-1}y_n$. Choose $z_n\in2^{N(j)}U_j\cap\tfrac12U$ with $Gz_n=p(k_n)$, which is possible by the defining inclusion for $N(j)$, and put $x_n=2^{1-n}z_n$. Then $Gx_n=y_n$ and $x_n\in2^{N(j)+1-n}U_j\cap2^{-n}U$. The sum over this block lies in $2U_j$, because the coefficients $2^{N(j)+1-n}$ sum to less than $2$. The sum of all later block bounds is at most $2\sum_{k\ge1}8^{-k}U_j=\tfrac27U_j\subset U_j$, so tails after sufficiently late blocks lie in any prescribed neighborhood in the basis. The same bound applies to partial sums within each block, so arbitrary tails also tend to zero as the block index grows. The tail partial sums are Cauchy in the defining seminorms; by [F3] they converge to $x=\sum_{n\ge1}x_n\in E$, with $x_0$ excluded. [F1, F3, step 3.1, construct]

5.1 The compact set $p(K)$ is bounded in the locally convex space $(F/S)/S_0$: for any balanced neighborhood $Q$ of zero, the dilates $tQ$ ($t>0$) cover the space, so compactness gives a finite subcover of $p(K)$ and, since $Q$ is balanced, one largest dilate contains all of $p(K)$. Therefore $y_n\in2^{1-n}p(K)$ tends to $0$. The recursively maintained residual identity gives $(G+H)\sum_{n=1}^m x_n=y_1-y_{m+1}$. Passing to the limit using continuity yields $(G+H)x=y_1$. Thus $(G+H)(x_0+x)=y_0$, so $G+H$ maps onto $(F/S)/S_0$. It follows that $F=(g+h)(E)+q^{-1}(S_0)$, where $q^{-1}(S_0)$ is finite-dimensional because $S$ and $S_0$ are finite-dimensional. Thus $(g+h)(E)$ has finite codimension; step 1.1 makes it closed, proving that $g+h$ is a quasi-epimorphism. [F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 The conclusion holds for every full-AC Fréchet pair and every pair of maps with the stated hypotheses, including the case $g(E)=F$ (then $S=0$) and the case $h=0$ (then one may take $K=\{0\}$). [F1, step 2.1, step 5.1] ∎
