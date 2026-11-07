---
id: lem-cubic-fixed-good-congruence-orbit-asymptotic
kind: lemma
title: "Fixed good-congruence asymptotic for cubic orders"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-integral-binary-cubic-form
  - thm-delone-faddeev-cubic-rings-and-binary-cubic-forms
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-iwasawa-decomposition-for-sl2-r
  - lem-lipschitz-boundary-lattice-point-count
  - lem-lattice-point-count-in-a-box-from-a-lattice-basis
  - lem-cubic-maximal-nontotal-ramification-local-density
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§§5.1–5.5, especially Theorem 26; the main term below is locally derived using compact cusp truncation and a Lipschitz lattice count."
---

## Statement

Assume AC and Countable Choice. Let $S$ be a finite set of rational primes, and let $N_{\epsilon,S}(X)$ count isomorphism classes of orders in cubic number fields whose discriminant has sign $\epsilon\in\{+,-\}$ and absolute value less than $X$, and whose completion at each $p\in S$ is maximal with no ramification-index-three factor. Then
$$\lim_{X\to\infty}\frac{N_{\epsilon,S}(X)}X=\frac{\pi^2}{12n_\epsilon}\prod_{p\in S}(1-p^{-2})^2,\qquad n_+=6,\quad n_-=2.$$
This is a finite-congruence asymptotic; it asserts no interchange with an infinite sieve.

## Facts & Assumptions

**Given:** AC, Countable Choice, finite $S$, a sign $\epsilon$ and $X>0$.

[F1] Delone–Faddeev identifies irreducible integral binary cubic orbits with orders in cubic fields and preserves discriminants. The property at each $p\in S$ is a $\operatorname{GL}_2(\mathbb Z)$-invariant congruence condition modulo $p^2$, with density $(1-p^{-2})^2$. [[def-integral-binary-cubic-form]] [[thm-delone-faddeev-cubic-rings-and-binary-cubic-forms]] [[lem-cubic-maximal-nontotal-ramification-local-density]]

[F2] The standard modular domain is $|u|\le\frac12$, $u^2+y^2\ge1$. In $n(u)\operatorname{diag}(t,t^{-1})k$ coordinates on $\operatorname{SL}_2(\mathbb R)$, with $y=t^2$, Haar measure is proportional to $t^{-2}du\,d^\times t\,dk$, and the group is unimodular. [[thm-standard-fundamental-domain-for-the-modular-group]] [[thm-iwasawa-decomposition-for-sl2-r]]

[F3] For a bounded Jordan domain in $\mathbb R^4$ whose boundary has finitely many Lipschitz charts, lattice points in its homothetic dilates equal volume divided by lattice covolume, with an $O(R^3)$ error. A coordinate box has at most the product of the numbers of integers in its coordinate intervals. [[lem-lipschitz-boundary-lattice-point-count]] [[lem-lattice-point-count-in-a-box-from-a-lattice-basis]]

[A1] AC and Countable Choice are assumed for the suppliers and integrals. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Use the twisted action of $G=\operatorname{GL}_2^+(\mathbb R)$ on real cubics. Each nonzero-discriminant sign region is one orbit: an orientation-preserving real projective transformation sends the ordered real or conjugate roots to those of a chosen representative, after a suitable permutation; scalar matrices and $-I$ adjust the coefficient. Its stabilizer is finite and injects into the root permutations. For $v_+=x^3-3xy^2$ the positive-determinant stabilizer has order $3$, and for $v_-=x^3+y^3$ it has order $1$: orientation-preserving transformations preserve the cyclic order of three real projective roots, while in the negative case swapping the conjugate pair reverses orientation. Write these orders as $m_+=3$, $m_-=1$. [F1, algebra]

2.1 Let $n(u)=\left(\begin{smallmatrix}1&u\\0&1\end{smallmatrix}\right)$, $a(t)=\operatorname{diag}(t,t^{-1})$, and take $dk=d\theta/(2\pi)$ on rotations. With $g=n(u)a(t)\lambda k$, set $dg=t^{-2}du\,d^\times t\,d^\times\lambda\,dk$. At the identity, the derivatives of $g\cdot v_+$ with respect to $u,\log t,\log\lambda,\theta$ have coefficient columns $(0,-6,0,0)$, $(3,0,3,0)$, $(1,0,-3,0)$, $(0,9,0,-3)$, whose determinant has absolute value $216=2|\operatorname{Disc}(v_+)|$. The corresponding columns for $v_-$ are $(0,0,3,0)$, $(3,0,0,-3)$, $(1,0,0,1)$, $(0,3,-3,0)$, with determinant $54=2|\operatorname{Disc}(v_-)|$. Since the action on the coefficient space has determinant $\det(g)^2$ and the discriminant transforms by $\det(g)^2$, invariance extends this calculation throughout each orbit: on any injective orbit chart, $dg=dv/(4\pi|\operatorname{Disc}(v)|)$. [F1, F2, step 1.1, algebra]

3.1 Choose a sufficiently small closed coefficient ball $B$ about $v_\epsilon$, with positive discriminant lower bound $\delta$, and a compact orbit chart $H\subset G$ mapped bijectively onto $B$. Let $F$ be a measurable fundamental region for $\operatorname{SL}_2(\mathbb Z)\backslash G$ with $|u|\le1/2$, $t\ge t_0>0$, and rotation angle in a half-circle; this last restriction accounts for $-I\in\operatorname{SL}_2(\mathbb Z)$. Its $\operatorname{SL}_2$ factor has volume $V=\pi/12$ for our measure: substituting $y=t^2$ gives one-half of the hyperbolic area $\int_{-1/2}^{1/2}(1-u^2)^{-1/2}du=\pi/3$, and the rotation half-circle contributes another factor $1/2$. The scalar factor is $d^\times\lambda$. [A1, F2, step 1.1, step 2.1, construct, algebra]

4.1 For $g=n(u)a(t)\lambda k$, the coefficients of $gB$ obey $|a|\le A\lambda t^3$, $|b|\le A\lambda t$, $|c|\le A\lambda t^{-1}$, $|d|\le A\lambda t^{-3}$, uniformly in $u,k$, for a constant $A$. An irreducible form has $d\ne0$, so its occurrence forces $t^3\le A\lambda$; $|\operatorname{Disc}(gB)|\ge\delta\lambda^4$ forces $\lambda\le(X/\delta)^{1/4}$. On this region all four box radii are bounded below and [F3] gives at most $A'\lambda^4$ integral points. Thus the normalized contribution from $t>T$ is $O(T^{-2})$, and that from $\lambda<\eta X^{1/4}$ is $O(\eta^4)$, uniformly in $X$. [F1, F3, step 3.1, algebra]

5.1 Fix $T$ and $\eta>0$ and put $R=X^{1/4}$ and $\lambda=Rr$. For each remaining fixed $(u,t,r,k)$, the set $n(u)a(t)rkB$ with absolute discriminant below $1$ is bounded and its boundary is contained in the sphere image and the smooth nonzero-discriminant level surface: the gradient of the degree-four discriminant is nonzero on that level by Euler's identity. These compact smooth pieces have finite Lipschitz charts. Partition modulo $M=\prod_{p\in S}p^2$. Applying [F3] to $M\mathbb Z^4$, and using the same boundary-cube argument for each fixed translate, gives lattice density $\alpha=\prod_{p\in S}(1-p^{-2})^2$ by [F1] and the Chinese remainder theorem. The hyperplane $d=0$ has zero four-dimensional volume. The uniform bound in step 4.1 permits dominated convergence on the fixed truncated parameter range. [F1, F3, step 4.1, algebra]

5.2 Reducible forms and forms with nontrivial integral stabilizer are negligible on that fixed truncation. In a coefficient box of radius $CR$, forms with $a=0$ or $d=0$ are $O(R^3)$. Otherwise a reducible cubic has a primitive rational linear factor $rx+sy$ with $r\mid a$ and $s\mid d$; once $a,b,d,r,s$ are fixed, $f(-s,r)=0$ determines $c$. Summing the divisor bounds $\sum_{1\le n\le CR}\tau(n)=O(R\log R)$ gives $O(R^3\log^2R)=o(R^4)$. For integral stabilizers, any such matrix is conjugate to one of the finite real stabilizers of $v_\epsilon$ by an element in $n(u)a(t)kH$; on the fixed truncation this conjugating set is compact, because the scalar factor cancels. Only finitely many integer matrices occur, and the fixed subspace of each nonidentity one is a proper linear subspace, containing $O(R^3)$ points of the box. [F1, step 1.1, step 3.1, step 4.1, algebra]

6.1 Each irreducible integral $\operatorname{SL}_2(\mathbb Z)$ orbit with trivial stabilizer occurs $m_\epsilon$ times in $Fhv_\epsilon$ for almost every $h\in H$. Average over $H$ and exchange the $F,H$ integrations using unimodularity as in $h=g^{-1}g_xs$ for each lattice point $g_xv_\epsilon$ and real stabilizer element $s$. By steps 4.1–5.2, the orbit count has the same main term as $\alpha/(m_\epsilon\operatorname{vol}H)$ times the integral over $F$ of the Euclidean volume of $gB$ with discriminant below $X$. The omitted tails tend to zero after $T\to\infty$ and $\eta\to0$. The action has coefficient determinant $\lambda^4$, so this volume integral equals $\frac{XV}{4}\int_B |\operatorname{Disc}(w)|^{-1}dw$. Step 2.1 gives $\operatorname{vol}H=(4\pi)^{-1}\int_B |\operatorname{Disc}(w)|^{-1}dw$. Thus the $\operatorname{SL}_2(\mathbb Z)$ count has main coefficient $\alpha\pi V/m_\epsilon=\alpha\pi^2/(12m_\epsilon)$. [A1, F2, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, algebra]

7.1 A cubic field order has no determinant-negative integral automorphism: an automorphism extends to the cubic field, whose automorphism group is trivial or cyclic of order three. Hence each $\operatorname{GL}_2(\mathbb Z)$ orbit splits into exactly two $\operatorname{SL}_2(\mathbb Z)$ orbits. Divide the preceding constants by two and use $n_\epsilon=2m_\epsilon$; [F1] identifies the result with $N_{\epsilon,S}(X)$. This proves the stated finite-congruence limits. [F1, step 1.1, step 6.1, algebra] ∎
