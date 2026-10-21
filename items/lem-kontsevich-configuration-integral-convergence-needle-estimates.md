---
id: lem-kontsevich-configuration-integral-convergence-needle-estimates
kind: lemma
title: Convergence and needle estimates for Kontsevich integrals
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - lem-kontsevich-configuration-space-compactification-faces
justified_by: []
dependency_level: 5
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §8.5
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.5.1 and §2.5.3
      url: https://arxiv.org/pdf/q-alg/9702009v1
---

## Statement

Fix either a strict Morse knot presentation $K:S^1\hookrightarrow\mathbb C\times\mathbb R$ or a compact strict Morse tangle $T\subset\mathbb C\times[a,b]$ with distinct regular boundary points, and a degree $m\ge0$. Each degree-$m$ coefficient of the unframed Kontsevich series is an absolutely convergent improper integral after summing its finitely many pairing terms in the 4T+1T quotient. A critical needle of width $\varepsilon$ in a horizontal slab is a local arc $N_\varepsilon$ whose intersection with each horizontal disk in the slab has at most two points and whose horizontal diameter is at most $\varepsilon$, with the knot or tangle fixed outside the slab and with the nondegenerate critical-point charts uniformly bounded in a compact smooth family. For every fixed $m$, the sum of degree-$m$ pairing integrals that have at least one endpoint on $N_\varepsilon$ has norm at most $C_m\varepsilon$, where $C_m$ is independent of $\varepsilon$. Thus these contributions tend to zero as the needle narrows.

The following figure illustrates a local maximum. The two branches meet at the critical point; the short chord is isolated if no higher endpoint interrupts the small oriented component arc, while a long chord joins a needle branch to a point outside the needle.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \draw[->] (-1.2,0) -- (1.2,0) node[right] {$z$};
  \draw[->] (-1.2,0) -- (-1.2,2.5) node[above] {$t$};
  \draw (-0.7,0.25) .. controls (-0.42,1.35) and (-0.18,1.95) .. (0,2.2);
  \draw (0.7,0.25) .. controls (0.42,1.35) and (0.18,1.95) .. (0,2.2);
  \draw[dashed] (-0.4,1.2) -- (0.4,1.2);
  \draw[dashed] (-0.52,0.75) -- (0.52,0.75);
  \draw[dashed] (-0.95,0.75) -- (-0.52,0.75);
  \fill (0,2.2) circle (1.2pt);
  \node at (0.25,2.28) {$t_c$};
  \node at (0,1.42) {short};
  \node at (-0.72,0.9) {long};
  \node at (0.83,1.2) {$\varepsilon$};
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Improper configuration-integral formula and 1T quotient]]

[[lem-kontsevich-configuration-space-compactification-faces|Morse branches and critical-level boundary coordinates]]

[[def-framed-chord-diagram-and-four-term-relations|Isolated-chord 1T relation]]

[Chmutov, Duzhin, and Mostovoy, §8.5, printed pp. 230–232](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.5.1 and §2.5.3, PDF pp. 13–15](https://arxiv.org/pdf/q-alg/9702009v1)

## Facts & Assumptions

**Given:** A strict Morse knot or compact strict Morse tangle with regular boundary points, its degree-$m$ configuration cells, and the unframed 4T+1T chord quotient on its skeleton.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: on each branch chamber the integrand is a finite sum of products of logarithmic forms $d\log(z_j-z'_j)$; tangle diagrams use the ordered tangle skeleton and the unframed quotient kills a chord whose endpoints are consecutive on one component.

[F2] [[lem-kontsevich-configuration-space-compactification-faces]]: each critical level has a local coordinate $s\ge0$ with $t_c-t=s^2$ at a maximum, branch evaluations extend smoothly, and all level/collision faces of knots and tangles have finite-dimensional corner coordinates.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: 1T kills an isolated chord; on a circle its endpoints alternate with another chord exactly when the two chords intersect, and on a tangle arc the same local rule applies to consecutive endpoints.

## Proof

**Given:** As above. Fix $m$; all constants below may depend on $K$, $m$, and the compact family, but not on $\varepsilon$.

1.1 Near a nondegenerate maximum, use the Morse coordinate $s=\sqrt{t_c-t}$ from [F2]. The two local branch functions satisfy $z_+(s)=z_c+a s+O(s^2)$ and $z_-(s)=z_c-a s+O(s^2)$ for some $a\ne0$; this follows because the tangle or knot immersion has nonzero tangent and $dt/ds=0$ at the critical point, so its tangent there is horizontal. Hence $|z_+(s)-z_-(s)|\asymp s$ and the short logarithmic form has absolute size at most $C\,ds/s$. A minimum has the same estimate after reversing $t$. [given, F2, construct, algebra]

1.2 For a long chord with one endpoint on a needle and one outside it, compactness of the family gives a uniform positive lower bound on its denominator. The two choices that put this endpoint on opposite needle branches have opposite factors $(-1)^{\downarrow(P)}$. Their endpoint positions differ by at most $\varepsilon$, so the mean-value estimate for $\log(z-z')$ away from $z=z'$ bounds the difference of their integrands by $C\varepsilon$ times bounded remaining factors. Integration over the fixed simplex preserves the $O(\varepsilon)$ bound. [given, F1, construct, algebra]

2.1 Order the chord endpoints on the small oriented component arc between the two branches near the maximum. The endpoints of the level closest to $t_c$ are adjacent on this arc. If their chord joins the two branches, it is isolated under the tangle or circle 1T rule, so its diagram vanishes by [F1, F3]. Thus every nonzero pairing approaching this critical face either has no short chord or has short chords nested below an interrupting long chord. [F1, F2, F3, step 1.1]

3.1 For a surviving nested chain of $k$ short chords, write their branch separations as $0<\delta_k<\cdots<\delta_1<\varepsilon$. Each short factor is bounded by $C\,d\delta_j/\delta_j$ by step 1.1. The long chord interrupting the short chord nearest the critical point has denominator bounded away from zero; integrating its level variable produces a factor $O(\delta_k)$ because its logarithmic primitive is Lipschitz there and its endpoint limits differ by $O(\delta_k)$. The whole nested contribution is therefore bounded by a constant times $\int_0^\varepsilon \frac{d\delta_1}{\delta_1}\cdots\int_0^{\delta_{k-1}}\frac{d\delta_k}{\delta_k}\,\delta_k=\varepsilon$, by repeated use of $\int_0^a(d\delta/\delta)\delta=a$. This also covers $k=1$. At any noncritical level-collision face, each chord still joins two distinct points of the embedded knot or tangle, so every within-chord denominator remains nonzero and has a positive lower bound locally. If a within-chord denominator tends to zero, the endpoints lie on the two branches meeting at a critical point and are covered by steps 1.1–2.1. There are finitely many faces and pairing types at fixed $m$, so the degree-$m$ chamber integrals converge absolutely. [F1, F2, F3, step 2.1, construct, algebra]

4.1 A short chord joining the two needle branches is killed by 1T when it is the highest such chord; otherwise its nonzero diagram contains an interrupting long chord and the nested estimate of step 3.1 applies. Pairing the long-chord endpoint choices as in step 1.2 supplies an additional $O(\varepsilon)$ factor. There are finitely many pairing types in fixed degree $m$, so their sum is bounded by $C_m\varepsilon$ and tends to zero. [F1, F2, F3, step 3.1, step 1.2, algebra] ∎

