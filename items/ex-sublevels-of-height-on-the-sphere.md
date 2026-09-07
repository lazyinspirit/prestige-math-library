---
id: "ex-sublevels-of-height-on-the-sphere"
kind: "example"
title: "Sublevels of height on the sphere"
deps: ["thm-one-critical-point-handle-attachment", "cor-index-zero-handles-create-components", "cor-index-n-handles-cap-boundary-spheres"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: published
origin: "pipeline"
proof_strategy: "explicit cap coordinates and Hessians"
generation:
  role: "example"
---

## Example

Assume $\mathrm{AC}_\omega$. For height $f(x)=x_{n+1}$ on $S^n\subset\mathbb R^{n+1}$, $n\ge1$, the sublevel is empty for $a<-1$, a point at $a=-1$, a closed $n$-disk for $-1<a<1$, and all of $S^n$ for $a\ge1$. The regular-sublevel changes use one $0$-handle and one $n$-handle.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

[F2] [[cor-index-zero-handles-create-components]]: A $0$-handle on a smooth $n$-manifold with boundary attaches along the empty set and adds one disjoint $n$-disk component. This includes an empty starting manifold and $n=0$.

[F3] [[cor-index-n-handles-cap-boundary-spheres]]: An $n$-handle attaches along its whole $S^{n-1}$ boundary. For $n\ge2$ it fills a boundary component diffeomorphic to $S^{n-1}$. For $n=1$ its attaching $S^0$ is a pair of boundary points, possibly in different components. For $n=0$ it is the same disjoint point attachment as a $0$-handle.

## Verification

**Given:** The objects and hypotheses in the example.

1.1 A critical point has the vertical vector normal to the sphere, so the only critical points are the two poles. In horizontal coordinates $z$ at those poles, height is respectively $-\sqrt{1-|z|^2}$ and $\sqrt{1-|z|^2}$; their Hessians at zero are $+I$ and $-I$. The indices are $0$ and $n$, and their values are $-1$ and $1$. [given, algebra]

2.1 Stereographic coordinates from the north pole identify $S^n\setminus\{\text{north}\}$ with $\mathbb R^n$ and give height $(|w|^2-1)/(|w|^2+1)$. For $-1<a<1$ the sublevel is therefore $|w|^2\le(1+a)/(1-a)$, a closed disk. The values at and beyond the poles give the point, empty set and whole sphere stated above. [step 1.1, algebra]

3.1 The sphere is compact, and each band crossing only one pole satisfies the handle theorem. The lower change adds a disjoint disk; the upper change caps its boundary by the whole-boundary attachment. At $n=1$ the cap attaches along two endpoints, as required by the endpoint qualification. [F1, F2, F3, step 1.1] ∎
