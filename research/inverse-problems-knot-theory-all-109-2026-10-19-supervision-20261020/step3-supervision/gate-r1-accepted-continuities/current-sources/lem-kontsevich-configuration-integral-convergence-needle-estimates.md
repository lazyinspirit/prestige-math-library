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

1.2 For a long chord with one endpoint on the needle and one outside it, compactness and embeddedness give a uniform positive lower bound for $|z-z'|$ on each compact branch chart. In the Morse parameter $s$, both endpoint evaluations are smooth, so the one-form $d\log(z-z')$ has norm at most $C\,ds$. The range of $s$ along a width-$\varepsilon$ needle is at most $C\varepsilon$, since $|z_+(s)-z_-(s)|\asymp s$. Thus integrating such a chord endpoint over any subinterval of the needle costs at most $C\varepsilon$. This is a direct absolute estimate for each pairing term and does not identify diagrams obtained from opposite branch choices. The constants are uniform in the stated compact smooth family. [given, F1, F2, construct, algebra]

2.1 Order the chord endpoints on the small oriented component arc through a maximum. Consider the short chord closest to $t_c$. If no other endpoint lies on the arc between its two ends through the critical point, it is isolated under the tangle or circle 1T rule and its diagram vanishes by [F1, F3]. Thus every nonzero pairing with short chords has an endpoint of a long chord on this arc above the short chord closest to the critical point. The same argument, with height reversed, applies at a minimum. [F1, F2, F3, step 1.1]

3.1 Suppose a nonzero pairing contains $k\ge1$ short chords at one critical point. Write their Morse parameters as $0<\delta_k<\cdots<\delta_1<S$, where $\delta_k$ is closest to the critical point and $S\le C\varepsilon$. By step 2.1, an endpoint of a long chord lies on the small arc above the chord at $\delta_k$, so its parameter $s$ satisfies $0<s<\delta_k$. Integrating this long endpoint first contributes at most $C\delta_k$ by step 1.2, while each short factor is bounded by $C\,d\delta_j/\delta_j$ by step 1.1. The resulting local absolute integral is bounded by $C\int_0^S\frac{d\delta_1}{\delta_1}\int_0^{\delta_1}\frac{d\delta_2}{\delta_2}\cdots\int_0^{\delta_{k-1}}\frac{d\delta_k}{\delta_k}\,\delta_k=CS$, using $\int_0^a(d\delta/\delta)\delta=a$. If no short chord occurs, every factor is smooth on the compactified branch chart. Away from critical levels all within-chord denominators are bounded away from zero; at a corner involving several distinct critical points, apply this same estimate independently in each critical chart. There are finitely many critical points, branch cells, collision faces, and pairing types at fixed $m$, so a finite cover gives absolute convergence of every degree-$m$ coefficient. [F1, F2, F3, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 For a pairing with no short chord but at least one endpoint on the needle, choose a long chord meeting the needle and integrate its endpoint over the Morse parameter range; step 1.2 gives $O(\varepsilon)$. A pairing with short chords is either zero by 1T or has the nested form estimated in step 3.1, which also contributes $O(\varepsilon)$. Summing the finitely many pairing types at fixed degree $m$ gives a bound $C_m\varepsilon$ for the stated needle contribution. The same finite-chart estimates apply at minima and at each critical point of a compact tangle. [F1, F2, F3, step 1.2, step 2.1, step 3.1, algebra] ∎

