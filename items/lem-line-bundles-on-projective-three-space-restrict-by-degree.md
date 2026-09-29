---
id: lem-line-bundles-on-projective-three-space-restrict-by-degree
kind: lemma
title: "Line bundles on projective three-space and their restrictions"
status: draft
origin: pipeline
deps:
  - def-relative-projective-space-standard-charts
  - def-multivariate-polynomial-ring-by-iteration
  - lem-gauss-lemma-over-a-ufd
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - def-closed-immersion-schemes
  - def-pullback-module-ringed-spaces
  - def-module-on-ringed-space
  - thm-gluing-sheaves
  - cor-affine-scheme-quasi-compact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Divisors, Lemma 31.29.5"
      url: https://stacks.math.columbia.edu/tag/0BXJ
    - title: "Stacks Project, Divisors, Lemma 31.29.4"
      url: https://stacks.math.columbia.edu/tag/0BDA
    - title: "Stacks Project, More on Algebra, Lemma 15.119.3"
      url: https://stacks.math.columbia.edu/tag/0BCH
    - title: "Vakil, The Rising Sea §§17.4.8–12"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

For this item, an invertible sheaf means an $\mathcal O$-module locally
isomorphic to $\mathcal O$. On the standard charts $U_i$ of
$\mathbb P^3_k$, write $x_j/x_i$ for the standard overlap coordinate.
Define $\mathcal O_{\mathbb P^3_k}(n)$ by gluing free rank-one sheaves with
frames $e_i$ and transitions
$$
e_j=(x_j/x_i)^n e_i\quad\text{on }U_i\cap U_j.
$$
Use the same construction on every $\mathbb P^N_k$; its standard homogeneous
coordinates are the global sections of $\mathcal O_{\mathbb P^N_k}(1)$.
For every field $k$, every invertible sheaf on $\mathbb P^3_k$ is
isomorphic to $\mathcal O(n)$ for a unique $n\in\mathbb Z$. Its restriction
to any line $L\cong\mathbb P^1_k$ is $\mathcal O_{\mathbb P^1}(n)$. If
$C\subset\mathbb P^2_k\subset\mathbb P^3_k$ is a nonsingular plane conic
equipped with a $k$-isomorphism $\phi:\mathbb P^1_k\xrightarrow{\sim}C$,
then its pullback to $\mathbb P^1_k$ is $\mathcal O_{\mathbb P^1}(2n)$.
If the sheaf is the pullback of $\mathcal O_{\mathbb P^N}(1)$ along a closed
immersion $h:\mathbb P^3_k\hookrightarrow\mathbb P^N_k$, then $n>0$.

## Facts & Assumptions

**Given:** A field $k$, an invertible sheaf on $\mathbb P^3_k$, its standard affine charts, and, for the last clause, a closed immersion as stated.

[F1] Over an affine base, the standard charts of relative projective space are affine polynomial spectra, and their overlaps identify the coordinates by ratios ([[def-relative-projective-space-standard-charts]]).

[F2] An invertible sheaf is an $\mathcal O$-module, meaning a sheaf of modules compatible with restriction ([[def-module-on-ringed-space]]).

[F3] Compatible local sheaves glue uniquely, including as modules ([[thm-gluing-sheaves]]).

[F4] Polynomial rings in finitely many variables are formed by iteration ([[def-multivariate-polynomial-ring-by-iteration]]).

[F5] For a UFD, primitive polynomial products are primitive and irreducibility of a primitive polynomial is preserved between the ring and its fraction field ([[lem-gauss-lemma-over-a-ufd]]).

[F6] A polynomial ring in one variable over a field is a UFD ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F7] Every affine scheme is quasi-compact ([[cor-affine-scheme-quasi-compact]]).

[F8] A closed immersion is injective on points because it is a homeomorphism onto a closed subset ([[def-closed-immersion-schemes]]).

[F9] The pullback of a module along a ringed-space morphism is $\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$ ([[def-pullback-module-ringed-spaces]]).

## Proof

**Proof technique:** direct.

1.1 On each standard chart $U_i\cong\operatorname{Spec}k[z_1,z_2,z_3]$, the coordinate ring is a UFD: start with the field $k$ and apply [F6] to $k[z_1]$. At each later variable, write a polynomial as its content times a primitive polynomial, factor the content in the old UFD, factor the primitive part in the fraction-field polynomial ring using [F6], and clear denominators to primitive factors. [F5] preserves primitivity under products and reflects irreducibility between the old UFD and its fraction field, so these factorizations exist uniquely up to units. Iterating [F4] gives the claim for three variables. Let $R=k[z_1,z_2,z_3]$, $K=\operatorname{Frac}(R)$, and let $\mathcal L$ be an invertible sheaf on $\operatorname{Spec}R$. Its local frames give a nonzero rational section $s$ in the one-dimensional generic fibre. Refine a trivializing cover to principal opens $D(f_a)$; [F7] gives a finite subcover. Write $s=g_a e_a$ on each member, where $e_a$ is a frame and $g_a\in K^\times$. For an irreducible $p\in R$, define $v_p(s)=v_p(g_a)$ using any member containing the generic point of $V(p)$. This is independent of the member: on an overlap containing that generic point, two frames differ by a unit, whose $p$-valuation is zero. Only finitely many $v_p(s)$ are nonzero, since each of the finitely many $g_a$ has finite factor support. Choose representatives for this finite support and set $g=\prod_p p^{v_p(s)}\in K^\times$. On $D(f_a)$, the quotient $g_a/g$ has valuation zero at every irreducible not dividing $f_a$. Unique factorization then writes it as a unit of $R_{f_a}$, because every remaining prime factor is inverted there. Thus $s/g$ is a nowhere-zero regular frame on every member of the cover. The local sections agree on overlaps as the same rational section, so [F3] glues them to a global frame. Hence $\mathcal L$ is trivial on each $U_i$. [F1, F2, F3, F4, F5, F6, F7, construct]

2.1 Choose a frame $e_i$ on each of the four charts. The units on $U_i\cap U_j=D(x_j/x_i)$ are exactly $c_{ij}(x_j/x_i)^{n_{ij}}$, with $c_{ij}\in k^\times$ and $n_{ij}\in\mathbb Z$: the chart ring is a polynomial UFD and its only units are constants, while the overlap inverts just the displayed coordinate. On a triple overlap, the two independent invertible ratios force $n_{ij}=n_{jk}=n_{ik}$ from the cocycle equation. Since every pair of the four indices occurs in such triples, there is one common integer $n$. The constants satisfy $c_{ik}=c_{ij}c_{jk}$. Set $a_0=1$ and $a_j=c_{0j}^{-1}$, and replace $e_i$ by $a_i e_i$; then every new transition constant is $c_{ij}a_j/a_i=1$. The resulting transition functions are $(x_j/x_i)^n$, exactly those defining $\mathcal O(n)$. [F1, F2, F3, step 1.1, algebra]

3.1 If $\mathcal O(n)\cong\mathcal O(m)$, restrict the transition cocycle to a coordinate line. The two standard affine charts have transition $t^{n-m}$, and units on either chart are constants. This transition is a coboundary only when $n-m=0$, so $n=m$. [F1, F3, step 2.1, algebra]

3.2 For a $k$-line $L\subset\mathbb P^3_k$, extend a basis of its two-dimensional vector subspace to a basis of $k^4$. The resulting projective coordinate change carries $L$ to a coordinate line and preserves the hyperplane sheaf, since it changes the homogeneous coordinate sections by an invertible linear transformation. Restricting its two standard chart frames to that line gives transition $t$ for $\mathcal O(1)$ and $t^n$ for $\mathcal O(n)$, so $\mathcal O(n)|_L\cong\mathcal O_{\mathbb P^1}(n)$. [F1, step 2.1, algebra]

3.3 For the conic clause, choose a line $H$ in its plane $\mathbb P^2_k$. The conic is geometrically integral (a reducible plane conic is singular at the intersection of its line components), so its quadratic equation restricts to a nonzero binary quadratic on $H\cong\mathbb P^1_k$. Its zero divisor $D=C\cap H$ has degree two: factoring that binary quadratic into homogeneous irreducible factors counts each closed point with its residue degree and multiplicity, and the total factor degree is two. The equation of $H$ is a section of $\mathcal O_C(1)$ with zero divisor $D$. Pull it back along the given $k$-isomorphism $\phi$; its zero divisor $D'$ on $\mathbb P^1_k$ still has degree two, and the pulled-back line bundle is $\mathcal O(D')$. For each closed point $Q\ne\infty$ of $\mathbb A^1_k\subset\mathbb P^1_k$, let $p_Q(t)$ be its monic irreducible polynomial. Then $\operatorname{div}(p_Q)=Q-\deg(Q)\,\infty$. Thus every divisor of degree two on $\mathbb P^1_k$ is linearly equivalent to $2\infty$, including when the two intersection points coincide or are not $k$-rational. Therefore $\phi^*(\mathcal O_C(1))\cong\mathcal O_{\mathbb P^1}(2)$. The transition definition gives $\mathcal O(n)=\mathcal O(1)^{\otimes n}$, also for negative $n$ using duals, so its pullback to $C$ is $\mathcal O_{\mathbb P^1}(2n)$. [F1, F2, step 2.1, algebra]

4.1 Let $h:\mathbb P^3_k\hookrightarrow\mathbb P^N_k$ be a closed immersion. Restrict to a line. Its pullback hyperplane sheaf is $\mathcal O_{\mathbb P^1}(n)$ by step 3.2. The ambient homogeneous coordinates give sections of the pullback module [F9] with no common zero. Since [F8] makes $h$ injective on points, these coordinate sections separate two distinct $k$-points of the line. On the two standard affine charts, a global section of $\mathcal O_{\mathbb P^1}(n)$ is represented by $f_0(t)\in k[t]$ and $f_1(t^{-1})\in k[t^{-1}]$ with $f_0(t)=t^n f_1(t^{-1})$. Hence there are no nonzero sections if $n<0$, only constants if $n=0$, and the two-dimensional span of $1,t$ if $n=1$. For $n<0$ the coordinate sections cannot define a morphism; for $n=0$ they define a constant map, contradicting injectivity on the line. Thus $n>0$. The bound is sharp: the identity immersion of $\mathbb P^3_k$ has $n=1$. All choices made above are finite choices of frames or bases, not a choice function, so no AC is used. [F1, F8, F9, step 3.2, algebra] ∎
