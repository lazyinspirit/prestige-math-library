---
id: ex-knot-kt-13-worked-cases
kind: example
title: "Worked cases of Dehn surgery on the unknot"
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-oriented-slope-and-knot-dehn-filling
  - lem-knot-surgery-first-homology-mayer-vietoris
  - thm-framed-knot-surgery-trace-boundary
  - def-lens-space-surgery-orientation-convention
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 1 §1.5, Lecture 2 §§2.3–2.4"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, Heegaard Floer homology, version 2025-12-15, §1.2.3 and Exercise 1.2.14"
      url: "https://web.math.princeton.edu/~petero/konyv9.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $U$ be the standard oriented unknot in the oriented $3$-sphere, with chosen exterior $E_U$ and peripheral basis $(\mu_U,\lambda_U)$. In the orientation convention $L(p,q)=E_U(p/q)$, for coprime integers $p>0$ and $q$, the $p/q$ filling is the oriented lens space $L(p,q)$ and has $H_1\cong\mathbb Z/p\mathbb Z$. The $0/1$ filling is $S^1\times S^2$, the $1/1$ filling is $S^3$, and for every integer $n$ the $n/1$ filling is the boundary of the integer-framed trace $X_n(U)$.

## Example references

[[def-countable-choice|Countable-choice hypothesis for the chosen peripheral data]]

[[def-lens-space-surgery-orientation-convention|Library orientation convention for $L(p,q)$]]

[[lem-knot-surgery-first-homology-mayer-vietoris|First-homology formula for knot fillings]]

[[thm-framed-knot-surgery-trace-boundary|Boundary of the integer-framed trace]]

[Saveliev, Lecture 1 §1.5 and Lecture 2 §§2.3–2.4, lens spaces and surgery traces](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Ozsváth–Stipsicz–Szabó, §1.2.3 and Exercise 1.2.14, surgery on the unknot](https://web.math.princeton.edu/~petero/konyv9.pdf)

## Facts & Assumptions

**Given:** The unknot exterior $E_U$, its meridian–preferred-longitude basis $(\mu_U,\lambda_U)$, and the filling convention $p[\mu_U]+q[\lambda_U]$.

[F1] [[lem-knot-surgery-first-homology-mayer-vietoris]]: $H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z/|p|\mathbb Z$ for $p\ne0$, and $H_1(E_K(0/1);\mathbb Z)\cong\mathbb Z$.

[F2] [[thm-framed-knot-surgery-trace-boundary]]: the outgoing boundary of the integer-framed trace $X_n(K)$ is the filling $E_K(n/1)$.

[F3] [[def-lens-space-surgery-orientation-convention]]: $L(p,q)$ is the oriented union of the unknot exterior and a solid torus whose meridian maps to $p[\mu_U]+q[\lambda_U]$, for $p>0$ and $\gcd(p,q)=1$.

[F4] [[def-oriented-slope-and-knot-dehn-filling]]: gluing maps with the same meridian slope give the same oriented filling type.

## Verification

1.1 A standard unknot is the coordinate circle in $S^3\subset\mathbb C^2$ given by $w=0$. Its tubular neighborhood and its exterior are both solid tori; on the exterior, $\lambda_U$ bounds a meridional disk and $\mu_U$ is a longitude. Therefore each $p/q$ filling is a union of two solid tori, and for $p>0$ it is $L(p,q)$ by [F3]. [given, F3, construct]

2.1 When $p=0$, primitivity forces $q=\pm1$, so the attaching meridian matches the meridian of the exterior solid torus. By the gluing-map independence in the slope definition [F4], use the product gluing; then $S^1\times D^2$ and $S^1\times D^2$ glue along $S^1\times S^1$ as $S^1\times(D^2\cup_{S^1}D^2)=S^1\times S^2$. [given, F4, step 1.1, construct]

2.2 For $p=1,q=1$, the attaching slope is one meridian plus one longitude of the exterior solid torus. A Dehn twist along its meridian disk extends over that torus and changes this slope to its longitude. By [F4] the gluing may then be chosen to be the standard decomposition $S^3=(D^2\times S^1)\cup(S^1\times D^2)=\partial(D^2\times D^2)$, so the filled orientation is that of $S^3$. [given, F4, step 1.1, construct]

3.1 For all coprime $p,q$, [F1] gives the stated $H_1$ group; the cases $p=0$ and $p=1$ agree with steps 2.1 and 2.2. [given, F1, step 2.1, step 2.2, algebra]

4.1 For every integer $n$, [F2] identifies the $n/1$ filling with the outgoing boundary of $X_n(U)$. This adds no rational-framing claim. [given, F2, step 1.1] ∎
