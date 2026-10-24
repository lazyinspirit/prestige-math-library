---
id: "ex-first-nonzero-homotopy-group-of-a-sphere"
kind: "example"
title: "First nonzero homotopy group of a sphere"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-absolute-hurewicz-theorem","cor-homology-of-spheres","thm-based-sphere-maps-are-classified-by-geometric-degree","def-axiom-of-choice","lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis","def-hurewicz-homomorphism"]
sources:
  references:
    - title: Hatcher Corollary 4.25 and Theorem 4.32
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For $n\ge1$ and a basepoint $b\in S^n$,
$$\pi_i(S^n,b)=0\quad(0<i<n),\qquad \pi_n(S^n,b)\cong\mathbb Z.$$
The isomorphism is degree, with $[\mathrm{id}_{S^n}]$ sent to $1$. Under Hurewicz this identity class goes to the positive orientation class $[S^n]$. The Hurewicz proof below assumes AC for $n\ge2$; the separately established sphere-degree classification gives the degree isomorphism without AC.

## Facts & Assumptions

[F1] [[thm-absolute-hurewicz-theorem]] identifies the first positive homotopy group of an $(n-1)$-connected CW complex with integral homology when $n\ge2$, assuming AC.

[F2] [[cor-homology-of-spheres]] gives $H_n(S^n;\mathbb Z)=\mathbb Z$ for $n\ge1$, with a supplied positive generator, and lower reduced homology zero.

[F3] [[thm-based-sphere-maps-are-classified-by-geometric-degree]] proves, for every $n\ge1$ and chosen basepoint, that degree is a group isomorphism to $\mathbb Z$, taking the identity to one, without choice.

[F4] The one-summand case of [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]] gives the based CW sphere, its path connectedness and $\pi_i(S^n)=0$ for $0<i<n$, when $n\ge2$.

[F5] [[def-hurewicz-homomorphism]] defines $h([u])=u_*[S^n]$ and gives based naturality.

[A1] [[def-axiom-of-choice]] is assumed for the $n\ge2$ application of [F1]. Its inherited uses are arbitrary-cell approximation and selection of compression disks in the relative model equivalence; [F3] and [F4] do not use it.

## Verification

**Given:** $n\ge1$, a based oriented sphere $(S^n,b)$, and its positive integral homology generator.

1.1 If $n\ge2$, apply [F4] with a singleton indexing set and its sphere based at $b$. This is the given sphere, not a wedge with an extra summand. It is a CW complex, is path connected, and has zero positive homotopy groups below $n$. Thus it satisfies exactly the $(n-1)$-connectivity hypothesis of [F1]. Assuming [A1], [F1] and [F2] give $$\pi_n(S^n,b)\xrightarrow{h}H_n(S^n;\mathbb Z)=\mathbb Z[S^n]$$ as an isomorphism. This proves the asserted first nonzero group by the Hurewicz route. [F1, F2, F4, A1, given]

2.1 For any based self-map $u$ of the oriented sphere, degree means the integer $d$ for which $u_*[S^n]=d[S^n]$, as used in [F3]. Consequently [F5] gives $h([u])=d[S^n]$. In particular $h([\mathrm{id}])=[S^n]$, and $h$ followed by the coefficient map $d[S^n]\mapsto d$ is exactly degree. This calculation also holds when $n=1$ because the defining formula in [F5] includes degree one. [F2, F3, F5, step 1.1]

3.1 For $n=1$, [F3] directly gives $\pi_1(S^1,b)\cong\mathbb Z$. There is no positive integer $i<1$, so the lower-vanishing assertion has no instance. Step 2.1 identifies the Hurewicz image of each degree class and in particular of the identity. For every $n\ge2$, [F3] also supplies the degree isomorphism independently of [F1], while [F4] already gave lower vanishing choice-free. Thus the AC hypothesis belongs only to the indicated general-Hurewicz derivation, not to the independent sphere calculation. [F3, F4, F5, step 1.1, step 2.1]

4.1 The group in degree $n$ is nonzero because its identity-map class has coefficient $1$; the identity element of that group is instead the constant-map class with coefficient $0$. Negative coefficients are inverse classes by step 2.1. Empty spheres and $n=0$ are outside the hypothesis. Every specified basepoint is permitted by [F3] and the based singleton construction in [F4]; no family of basepoints or orientations is selected. This establishes the calculation and its orientation normalization in all stated degrees. [F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
