---
id: thm-an-exact-couple-generates-a-spectral-sequence
kind: theorem
title: An exact couple generates a spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
landmark: true
deps: [thm-the-derived-couple-is-exact, def-homological-spectral-sequence, lem-spectral-sequence-subquotient-and-local-lifting-calculus, def-exact-couple, def-derived-exact-couple]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Definition 12.21.3 and Lemma 12.21.4 (full local proof supplied)"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Statement

An initial homological exact couple $(D,E,i,j,k)$ gives, by repeated
derivation, a homological spectral sequence starting at $E^1=E$ with
$\deg d^r=(-r,r-1)$. Write $i^m$ for $m$ consecutive shifted $i$ maps,
including $i^0=1$. Define subobjects of the original $E_{p,q}$ by
$$N^r_{p,q}=k_{p,q}^{-1}\bigl(\operatorname{im}(i^{r-1}:D_{p-r,q+r-1}\to D_{p-1,q})\bigr),$$
$$B^r_{p,q}=j_{p,q}\bigl(\ker(i^{r-1}:D_{p,q}\to D_{p+r-1,q-r+1})\bigr).$$
Then canonically $E^r_{p,q}\cong N^r_{p,q}/B^r_{p,q}$. Under this
identification, if locally $ke=i^{r-1}x$, then $d^r[e]=[jx]$.
An arbitrary exact couple is not asserted to have an abutment.

## Facts & Assumptions

[F1] [[def-exact-couple]] supplies $\ker i=\operatorname{im}k$, $\ker k=\operatorname{im}j$, $\ker j=\operatorname{im}i$, with the initial $j$ of degree zero.

[F2] [[def-derived-exact-couple]] defines the derived image and homology objects and their maps; [[thm-the-derived-couple-is-exact]] allows their repeated derivation and gives the new degrees.

[F3] [[def-homological-spectral-sequence]] requires square-zero differentials and specified homology-to-next-page isomorphisms.

[F4] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] supplies finite epic lifts, natural quotient identifications and descent of containments.

## Proof

**Given:** The initial exact couple and the indexed subobjects in the statement. Every local lift is after a finite epic pullback, with the descent meaning of [F4].

1.1 Applying the derived-couple theorem to any page-$r$ couple produces a page-$(r+1)$ couple whose $E$ object is exactly the homology of the preceding $jk$ differential. The associated differentials square to zero and their degrees are $(-r,r-1)$. Starting with the given initial couple and repeating this construction for each positive integer therefore supplies the objects, differentials and homology identifications required for a spectral sequence. The initial page is $E^1=E$. [F2, F3, given]

1.2 The kernels of successive $i$ powers increase and their images decrease. Since $kj=0$, $B^r\subseteq N^s$ for every $r,s\ge1$. Thus $B^r\subseteq B^{r+1}\subseteq N^{r+1}\subseteq N^r$ and each stated quotient exists. For $r=1$, $N^1=E$ and $B^1=j(\ker1)=0$. [F1, F4, given]

2.1 For $e$ through $N^r_{p,q}$, take a local $x$ at $D_{p-r,q+r-1}$ with $ke=i^{r-1}x$. The arrow $jx$ lies in every $N^s$ since $kjx=0$. Two such lifts differ by $\ker i^{r-1}$ and hence give the same class modulo $B^r$ in the target. Replacing $e$ by a local $B^r$ representative $jz$ changes $ke$ by zero. Consequently the rule $[e]\mapsto[jx]$ defines a unique map on $N^r/B^r$, by quotient descent. Its degree is $(-r,r-1)$ and its square is zero: for the representative $jx$ its $k$ image is zero, so the next lift may be taken to be zero. At $r=1$ this rule is the original $jk$. [F1, F4, step 1.2]

3.1 The kernel of this map is represented by exactly $N^{r+1}$. Indeed a zero image means locally $jx=jz$ with $i^{r-1}z=0$. Then $x-z\in\ker j=\operatorname{im}i$, so locally $x-z=iy$ and $ke=i^{r-1}x=i^ry$. Conversely if $ke=i^ry$, one may take $x=iy$ and then $jx=0$. Both containments descend. The incoming image is exactly $B^{r+1}/B^r$: every output $jx$ has $i^rx=i(ke)=0$, and conversely if $i^rx=0$, then $i^{r-1}x\in\ker i=\operatorname{im}k$ has a local lift $e$ with $ke=i^{r-1}x$. This $e$ belongs to the appropriate $N^r$ and its image is $jx$. Thus the homology of the quotient at page $r$ is canonically $N^{r+1}/B^{r+1}$. [F1, F4, step 2.1]

4.1 To match these quotient pages with repeated derived couples in step 1.1, note that at the $r$th couple the $D$ object is $\operatorname{im}i^{r-1}$ inside the original $D$. Its $k$ map is induced by the original $k$ on $N^r$, and its $j$ map sends $i^{r-1}x$ to $[jx]$. These assertions hold initially. On deriving once, the image of the restricted $i$ is $\operatorname{im}i^r$; the new $k$ is induced by the same original $k$ on the new cycles in step 3.1; and taking one more $i$-preimage changes $i^ry$ into $i^{r-1}y$, so the new $j$ sends $i^ry$ to $[jy]$. Step 3.1 identifies the new homology quotient and its transition by the inclusion of its numerator. This proves the asserted compatibility at every stage of the iteration. [F2, F4, step 1.1, step 3.1]

5.1 Hence the stated subquotients and differentials describe precisely the spectral sequence of the exact couple, with specified canonical transition isomorphisms. The zero couple gives zero quotients at all pages. The use of finite composites at each fixed $r$, and canonical kernels, images and quotients, requires neither infinite sums nor AC. No target filtration or abutment has been constructed or inferred. [F3, step 1.2, step 4.1] ∎
