---
id: thm-cohomological-atiyah-hirzebruch-spectral-sequence
kind: theorem
title: Cohomological Atiyah–Hirzebruch spectral sequence
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
landmark: true
deps: [def-exact-couple, thm-an-exact-couple-generates-a-spectral-sequence, lem-the-ahss-first-differential-is-the-cellular-coboundary, def-skeletal-filtration-for-generalized-cohomology, lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients, def-cohomological-spectral-sequence, prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §3, Theorems 3.2 and 3.4, printed pp. 4–8"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§3, Theorems 3.2 and 3.4, printed pp. 4–8"
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §§3.1–3.2, printed pp. 10–12"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§§3.1–3.2, printed pp. 10–12"
---

## Statement

Let $X$ be a finite CW complex, let $\widetilde h$ be a reduced generalized
cohomology theory, and let $h$ be the associated CW-pair theory
([[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]).
There is a cohomological spectral sequence with
$$E_1^{p,q}=h^{p+q}(X^p,X^{p-1}),\qquad E_2^{p,q}\cong H^p\bigl(X;h^q(*)\bigr),\qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1},$$
whose stable page is the associated graded of the skeletal filtration of
[[def-skeletal-filtration-for-generalized-cohomology]]:
$$E_\infty^{p,q}\cong F^p h^{p+q}(X)\big/ F^{p+1}h^{p+q}(X).$$
The spectral sequence is natural in $X$ for cellular maps and in the theory
$\widetilde h$ for morphisms of reduced generalized cohomology theories.

## Facts & Assumptions

[F1] The pair theory realizes $h^n(X,A)$ with a natural long exact sequence and connecting maps, with $h^n(X)=h^n(X,\varnothing)$ and $h^n(X,A)\cong \widetilde h^n(X/A)$ for nonempty $A$ ([[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]).

[F2] A page-$r$ homological exact couple consists of bigraded families with maps $i:D_{p,q}\to D_{p+1,q-1}$, $j:D_{p,q}\to E_{p+1-r,q+r-1}$ and $k:E_{p,q}\to D_{p-1,q}$ exact at all three vertices; an initial exact couple gives a spectral sequence starting at $E^1=E$ with differentials of bidegree $(-r,r-1)$, subquotient description and local-lift formula by [[thm-an-exact-couple-generates-a-spectral-sequence]] ([[def-exact-couple]]).

[F3] The first page is cellular cochains and the first differential is the cellular coboundary, so the second page is $H^p(X;h^q(*))$ ([[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], [[lem-the-ahss-first-differential-is-the-cellular-coboundary]]).

[F4] A cohomological spectral sequence is a homological spectral sequence under $E_r^{p,q}:=E^r_{-p,-q}$, with differentials of bidegree $(r,1-r)$ ([[def-cohomological-spectral-sequence]]).

[F5] The skeletal filtration satisfies $F^{p+1}\subseteq F^p$, $F^p=\ker(h^n(X)\to h^n(X^{p-1}))$, $F^{p+1}=\ker(h^n(X)\to h^n(X^p))$, $F^p=\operatorname{im}(h^n(X,X^{p-1})\to h^n(X))$, and it is exhaustive and bounded for finite $X$ ([[def-skeletal-filtration-for-generalized-cohomology]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ of dimension $N$, a reduced generalized cohomology theory $\widetilde h$, the associated pair theory $h$, and the conventions $X^p=\varnothing$ for $p<0$, $X^p=X$ for $p\geq N$.

1.1 Put $D_{p,q}:=h^{-p-q-1}(X^{-p-1})$ and $E_{p,q}:=h^{-p-q}(X^{-p},X^{-p-1})$, and let $i$ be the restriction, $j$ the connecting map of the pair $(X^{-p},X^{-p-1})$, and $k$ the map to $h^{-p-q}(X^{-p})$ of that pair. The three exactness conditions are the three exactness statements of the long exact sequence of that pair: the image of the restriction from $X^{-p-2}$ is the kernel of the connecting map; the image of the connecting map is the kernel of the pair map; and the image of the pair map is the kernel of the restriction to $X^{-p-1}$. Hence the data form an initial exact couple in the sense of [F2]. [F1, F2, given]

1.2 The identification $(P,Q)=(-p,-q)$ turns the pair $(X^{-p},X^{-p-1})$ into $(X^P,X^{P-1})$ and the group $E_{p,q}=h^{-p-q}(X^{-p},X^{-p-1})$ into $h^{P+Q}(X^P,X^{P-1})$; under this reindexing the exact-couple differentials $d^r:E_{p,q}\to E_{p-r,q+r-1}$ become $d_r:E_r^{P,Q}\to E_r^{P+r,Q-r+1}$. [F4, given]

2.1 Applying [F2] to the couple of step 1.1 produces a homological spectral sequence with $E^1=E$, differentials of bidegree $(-r,r-1)$, subquotients $E^r_{p,q}\cong N^r_{p,q}/B^r_{p,q}$ and the local-lift formula $ke=i^{r-1}x\Rightarrow d^r[e]=[jx]$. [F2, step 1.1]

2.2 The page-$1$ terms are the cellular cochains and the page-$1$ differential is the cellular coboundary, so applying the reindexing of step 1.2 to the second page gives $E_2^{P,Q}\cong H^P(X;h^Q(*))$. [F3, step 1.1, step 1.2]

3.1 By definition of a cohomological spectral sequence, the reindexed data $E_r^{P,Q}:=E^r_{-P,-Q}$ form a cohomological spectral sequence whose differentials have bidegree $(P,Q)\mapsto(P+r,Q-r+1)$ and whose second page is $H^P(X;h^Q(*))$, as required. [F4, step 2.1, step 2.2]

3.2 For the convergence, fix $(p,q)$ and put $P=-p$, $Q=-q$, $n=P+Q=-p-q$. The numerators $N^r_{p,q}=k^{-1}\bigl(\operatorname{im}(i^{r-1}:D_{p-r,q+r-1}\to D_{p-1,q})\bigr)$ equal $k^{-1}\bigl(\operatorname{im}(h^n(X^{P+r-1})\to h^n(X^P))\bigr)$, so they decrease with $r$ and stabilize at $N^\infty_{p,q}=k^{-1}\bigl(\operatorname{im}(h^n(X)\to h^n(X^P))\bigr)$ once $X^{P+r-1}=X$. The denominators $B^r_{p,q}=j\bigl(\ker(i^{r-1}:D_{p,q}\to D_{p+r-1,q-r+1})\bigr)$ equal $j\bigl(\ker(h^{n-1}(X^{P-1})\to h^{n-1}(X^{P-r}))\bigr)$, so they increase and, for $r>P$, equal $j\bigl(h^{n-1}(X^{P-1})\bigr)=\ker(k)$ because $X^{P-r}=\varnothing$ has zero cohomology. [F1, F2, F5, step 2.1]

4.1 The map $k$ sends the stable numerator onto $K:=\operatorname{im}(h^n(X)\to h^n(X^P))\cap\ker(h^n(X^P)\to h^n(X^{P-1}))$ with kernel $B^\infty_{p,q}=\ker(k)$, so $E^\infty_{p,q}=N^\infty_{p,q}/B^\infty_{p,q}\cong K$. Restriction $h^n(X)\to h^n(X^P)$ carries $\ker(h^n(X)\to h^n(X^{P-1}))$ onto $K$ with kernel $\ker(h^n(X)\to h^n(X^P))$; hence $E^\infty_{p,q}\cong F^Ph^n(X)/F^{P+1}h^n(X)$. [F1, F5, step 3.2]

5.1 The reindexed spectral sequence of step 3.1 has the asserted first and second pages and differentials, and step 4.1 identifies its stable terms with the associated graded of the skeletal filtration, which proves the theorem; naturality is inherited from the naturality of the pair long exact sequences and of the exact-couple construction. [step 3.1, step 4.1] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §3, Theorems 3.2 and 3.4 with Lemma 3.6, printed pp. 4–8, for the exact couple, the E-two page $H^p(X;h^q)$ and the identification of $E_\infty$ with the associated graded of $\ker(h^n(X)\to h^n(X^{m}))$; and [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §§3.1–3.2, printed pp. 10–12, for the right-half-plane support and collapse computations. The indexing here is chosen so that $E_2^{p,q}=H^p(X;h^q(*))$ and $d_r$ has bidegree $(r,1-r)$.
