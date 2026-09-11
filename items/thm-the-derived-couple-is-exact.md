---
id: thm-the-derived-couple-is-exact
kind: theorem
title: The derived couple is exact
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-derived-exact-couple, lem-the-derived-couple-maps-are-well-defined, def-exact-couple, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
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
    - title: "Stacks Project, Lemma 12.21.2 (omitted chase supplied in full here)"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Statement

The derived data of a page-$r$ exact couple form a page-$(r+1)$ exact couple.
In particular $\operatorname{im}i'=\ker j'$, $\operatorname{im}j'=\ker k'$
and $\operatorname{im}k'=\ker i'$, at their respective shifted vertices.

## Facts & Assumptions

[F1] [[def-derived-exact-couple]] and [[lem-the-derived-couple-maps-are-well-defined]] supply the canonical maps of degrees $(1,-1)$, $(-r,r)$ and $(-1,0)$, with rules $i'(a)=ia$, $j'(ix)=[jx]$, $k'([e])=ke$.

[F2] [[def-exact-couple]] supplies the three original exactness conditions and consecutive zero composites.

[F3] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] licenses local epic lifts and descent of subobject containments.

## Proof

**Given:** The original page-$r$ exact couple. All local representatives and subsequent lifts are obtained by finitely many epic pullbacks; after each computation subobject membership descends by [F3].

1.1 At $D'_{p,q}$, let $a$ lie locally in $\ker j'$ and write $a=ix$ with $x$ at $D_{p-1,q+1}$. The condition $[jx]=0$ says locally $jx=dz=jkz$ for $z$ at $E_{p,q+1}$. Thus $x-kz\in\ker j$ and locally $x-kz=iy$ for $y$ at $D_{p-2,q+2}$. It follows that $a=ix=i^2y$, since $ik=0$. This belongs to $\operatorname{im}i'$ because $iy$ is in $D'_{p-1,q+1}$. Conversely a local element of $\operatorname{im}i'$ has the form $i^2y$ and $j'(i^2y)=[jiy]=0$. These two local containments descend to $\ker j'_{p,q}=\operatorname{im}i'_{p-1,q+1}$. [F1, F2, F3]

1.2 At $E'_{p,q}$, represent a local class in $\ker k'$ by a $d$-cycle $e$. Since $D'_{p-1,q}\hookrightarrow D_{p-1,q}$ is monic, $k'[e]=0$ implies $ke=0$ in $D$. Original exactness gives locally $e=jx$ for $x$ at $D_{p+r-1,q-r+1}$. Then $[e]=j'(ix)$, with $ix$ at $D'_{p+r,q-r}$. Conversely $k'j'(ix)=kjx=0$. Thus $\ker k'_{p,q}=\operatorname{im}j'_{p+r,q-r}$ after descent. [F1, F2, F3]

1.3 At $D'_{p,q}$, let $a$ lie in $\ker i'$. Its image in $D_{p,q}$ satisfies $ia=0$, so locally $a=ke$ for $e$ at $E_{p+1,q}$. Since $a$ already lies in $D'=\operatorname{im}i$, we have $ja=0$; therefore $de=jke=ja=0$. The class $[e]$ is defined and $k'[e]=a$. Conversely $i'k'[e]=ike=0$ for every cycle class. Descending gives $\ker i'_{p,q}=\operatorname{im}k'_{p+1,q}$. [F1, F2, F3]

2.1 These are exactly the three equalities required for page $r+1$, with the degrees supplied by [F1]. The arguments include zero kernels, images and homology objects: the reverse containments are zero-composite identities and never require a nonzero witness. At $r=1$ the shifted indices give the first derived couple; every larger page is covered by the same printed formulas. No section, global lift or axiom of choice is used. [F1, F2, step 1.1, step 1.2, step 1.3] ∎
