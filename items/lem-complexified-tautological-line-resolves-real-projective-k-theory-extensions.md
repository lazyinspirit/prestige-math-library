---
id: lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions
kind: lemma
title: The complexified tautological line resolves real-projective K-theory extensions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-complex-k-theory-ahss, thm-multiplicative-ahss-for-a-multiplicative-generalized-theory, def-grothendieck-ring-structure-and-rank-map, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory and the finite-projective-space exact sequences."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. F. Atiyah, K-Theory, Chapter II, §2.7, printed pp. 105–106"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
      locator: "Chapter II, §2.7, real projective-space calculation, printed pp. 105–106"
---

## Statement

Assume AC. Let $\lambda$ be the tautological real line on $\mathbb{RP}^r$, let
$\xi=\lambda_{\mathbb C}$ be its complexification, and put
$\alpha=[\xi]-1\in K^0(\mathbb{RP}^r)$. Then
$$\alpha^2=-2\alpha,\qquad \alpha^k=(-2)^{k-1}\alpha\ (k\geq1).$$
If $r=2m$ or $r=2m+1$, then $\alpha$ has exact additive order $2^m$ and
$\widetilde K^0(\mathbb{RP}^r)=\mathbb Z\alpha$; moreover
$$K^1(\mathbb{RP}^{2m})=0,\qquad K^1(\mathbb{RP}^{2m+1})\cong\mathbb Z.$$

## Facts & Assumptions

[A1] Assume AC. The tautological real line $\lambda$ and its complexification $\xi=\lambda_{\mathbb C}$ are the bundles classified by the standard inclusions of the respective Grassmannians (classifying maps of the tautological lines, as computed in the topological-vector-bundles page).

[A2] Tensor product of real line bundles has transition functions multiplying the transition functions of the factors, and complexification converts $\lambda\otimes_{\mathbb R}\lambda$ into $\xi\otimes_{\mathbb C}\xi$; the Grothendieck ring has the corresponding multiplicative structure ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], [[def-grothendieck-ring-structure-and-rank-map]]).

[A3] Assume AC. The $K$-AHSS of $\mathbb{RP}^r$ has $E_2^{p,q}=H^p(\mathbb{RP}^r;\mathbb Z)$ for even $q$ and zero for odd $q$, with differentials of bidegree $(r,1-r)$ ([[cor-complex-k-theory-ahss]]), and the integral cohomology of $\mathbb{RP}^r$ is $\mathbb Z$ in degree $0$, $\mathbb Z/2$ in even positive degrees and in odd degrees below $r$, and $\mathbb Z$ in degree $r$ when $r$ is odd (the standard universal-coefficient computation of the integral cohomology of real projective space).

[A4] The $K$-AHSS is multiplicative, its differentials are derivations and its stable page is the associated graded ring ([[thm-multiplicative-ahss-for-a-multiplicative-generalized-theory]]).

[A5] Atiyah's exact-sequence computation for the projective-space skeleta (Chapter II, §2.7, printed pp. 105–106) shows that for the generator $x=[L]-1\in K(\mathbb P_{2n}(\mathbb R))$ one has $x^2=-2x$ and that the powers $x,x^2,\ldots,x^n$ are nonzero while $x^{n+1}=0$; the same computation gives the odd groups. This is the source input used here, not a computation reproved in this library.

## Proof

**Proof technique:** direct.

**Given:** Assume AC, the tautological real line $\lambda$ over $\mathbb{RP}^r$, the complexification $\xi=\lambda_{\mathbb C}$ and $\alpha=[\xi]-1$.

1.1 The transition functions of a real line bundle take values in $\{\pm1\}$, so the transition functions of $\lambda\otimes_{\mathbb R}\lambda$ are squares of $\pm1$, hence equal to $1$, and $\lambda\otimes_{\mathbb R}\lambda$ is trivial. [A1, A2]

1.2 The $K$-AHSS of $\mathbb{RP}^r$ has nonzero entries only in even coefficient rows, and every differential either lands in an odd coefficient row or in a column exceeding $r$; hence all differentials vanish and $E_2=E_\infty$, so the associated graded of $K^0(\mathbb{RP}^r)$ consists of the integral cohomology of the projective space in even degrees, with the degree-two class in filtration two. [A3, A4]

2.1 Complexifying the triviality of the transition functions gives $\xi\otimes_{\mathbb C}\xi\cong\varepsilon^1_{\mathbb C}$; writing $\alpha=[\xi]-1$ in the ring of [A2] therefore gives $(1+\alpha)^2=1$, that is $\alpha^2=-2\alpha$, and multiplying repeatedly gives $\alpha^k=(-2)^{k-1}\alpha$ for every $k\geq1$. [A2, step 1.1, algebra]

3.1 By [A5] the generator $x=\alpha$ satisfies $x^m\ne0$ and $x^{m+1}=0$ for the relevant projective space, with $x^2=-2x$ as in step 2.1; consequently $2^m\alpha=(-1)^{m-1}\alpha^{m+1}=0$ while $2^{m-1}\alpha=(-1)^{m-2}\alpha^m\ne0$, so $\alpha$ has exact order $2^m$ and generates the torsion summand $\widetilde K^0(\mathbb{RP}^r)$; the odd group statement is the corresponding clause of [A5]. [A5, step 2.1]

4.1 Steps 1.2, 2.1 and 3.1 give the asserted relations, the exact order of $\alpha$, the cyclicity of the reduced group and the two odd-group computations. [step 1.2, step 2.1, step 3.1] ∎

## Source notes

The relations $\alpha^2=-2\alpha$ and the powers follow from $\lambda\otimes\lambda\cong\varepsilon^1$; the nonzero and vanishing clauses for the powers, and the odd groups, are Atiyah's exact-sequence computation in [Chapter II, §2.7](https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf), printed pp. 105–106, used here as a recorded source input.
