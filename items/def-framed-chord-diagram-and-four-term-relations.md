---
id: def-framed-chord-diagram-and-four-term-relations
kind: definition
title: Framed chord diagrams and four-term relations
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-knot-and-vassiliev-derivative]
justified_by: []
dependency_level: 2
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "The Fundamental Theorem of Vassiliev Invariants"
      url: "https://arxiv.org/pdf/q-alg/9702009v1"
    - title: "Introduction to Vassiliev Knot Invariants"
      url: "https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf"
---

## Definition

For a commutative ring $R$, a **degree-$n$ chord diagram** is an oriented circle with $n$ disjoint unordered pairs of distinct points, called chords, considered up to orientation-preserving homeomorphism of the circle. A chord records a double point by pairing its two preimages. The diagrams used for symbols of both framed and unframed invariants are these ordinary chord diagrams. In a framed singular-knot homotopy, each simple zero of the normal section may be marked by an auxiliary dot and counted as one singularity; these auxiliary dots are not generators of the chord-diagram modules below.

For $n\ge2$, choose any degree-$(n-2)$ background chord diagram and choose three pairwise distinct new points $p,q,r$ on its circle, disjoint from all background endpoints. Choose disjoint endpoint-free neighborhoods of $p$ and $q$ that avoid $r$ and every background endpoint. Let $s_1,s_2,s_3,s_4$ lie, respectively, immediately before $p$, immediately after $p$, immediately before $q$, and immediately after $q$ in the circle orientation, each within the corresponding neighborhood. Let $D_i$ be the degree-$n$ diagram obtained by adding the fixed chord $pq$ and moving chord $rs_i$ to the background. The **4T relation** is
$$
D_1-D_2+D_3-D_4=0.
$$
Two chords **intersect** if their endpoints alternate around the oriented circle. A chord is **isolated** if it intersects no other chord. The **1T relation** sets every unframed diagram with an isolated chord equal to zero. The framed degree-$n$ chord-diagram module is the free $R$-module on degree-$n$ chord diagrams modulo all 4T relations. The unframed degree-$n$ chord-diagram module is the free $R$-module on degree-$n$ chord diagrams modulo 4T and 1T relations. A framed weight system is an $R$-linear functional on the framed module; an unframed weight system is an $R$-linear functional on the unframed module.

The figure shows one generator of 4T. The solid chord is fixed; the dashed chord has fixed endpoint $r$ and moving endpoint $s_i$. The arrow gives the positive orientation of the circle. The same background chords may be inserted identically in every panel.

```tikz
\begin{tikzpicture}[scale=0.84,thick]
\begin{scope}
  \draw (0,0) circle (1);
  \draw[->] (0.05,0.99) .. controls (0.28,0.96) and (0.47,0.87) .. (0.60,0.80);
  \coordinate (p) at ({cos(140)},{sin(140)});
  \coordinate (q) at ({cos(320)},{sin(320)});
  \coordinate (r) at ({cos(40)},{sin(40)});
  \coordinate (s) at ({cos(143)},{sin(143)});
  \draw[very thick] (p)--(q);
  \draw[dashed] (r)--(s);
  \fill (p) circle (1.5pt); \fill (q) circle (1.5pt); \fill (r) circle (1.5pt); \fill (s) circle (1.5pt);
  \node at (0,-1.35) {$D_1$};
\end{scope}
\begin{scope}[xshift=2.7cm]
  \draw (0,0) circle (1);
  \draw[->] (0.05,0.99) .. controls (0.28,0.96) and (0.47,0.87) .. (0.60,0.80);
  \coordinate (p) at ({cos(140)},{sin(140)});
  \coordinate (q) at ({cos(320)},{sin(320)});
  \coordinate (r) at ({cos(40)},{sin(40)});
  \coordinate (s) at ({cos(137)},{sin(137)});
  \draw[very thick] (p)--(q);
  \draw[dashed] (r)--(s);
  \fill (p) circle (1.5pt); \fill (q) circle (1.5pt); \fill (r) circle (1.5pt); \fill (s) circle (1.5pt);
  \node at (0,-1.35) {$D_2$};
\end{scope}
\begin{scope}[xshift=5.4cm]
  \draw (0,0) circle (1);
  \draw[->] (0.05,0.99) .. controls (0.28,0.96) and (0.47,0.87) .. (0.60,0.80);
  \coordinate (p) at ({cos(140)},{sin(140)});
  \coordinate (q) at ({cos(320)},{sin(320)});
  \coordinate (r) at ({cos(40)},{sin(40)});
  \coordinate (s) at ({cos(323)},{sin(323)});
  \draw[very thick] (p)--(q);
  \draw[dashed] (r)--(s);
  \fill (p) circle (1.5pt); \fill (q) circle (1.5pt); \fill (r) circle (1.5pt); \fill (s) circle (1.5pt);
  \node at (0,-1.35) {$D_3$};
\end{scope}
\begin{scope}[xshift=8.1cm]
  \draw (0,0) circle (1);
  \draw[->] (0.05,0.99) .. controls (0.28,0.96) and (0.47,0.87) .. (0.60,0.80);
  \coordinate (p) at ({cos(140)},{sin(140)});
  \coordinate (q) at ({cos(320)},{sin(320)});
  \coordinate (r) at ({cos(40)},{sin(40)});
  \coordinate (s) at ({cos(317)},{sin(317)});
  \draw[very thick] (p)--(q);
  \draw[dashed] (r)--(s);
  \fill (p) circle (1.5pt); \fill (q) circle (1.5pt); \fill (r) circle (1.5pt); \fill (s) circle (1.5pt);
  \node at (0,-1.35) {$D_4$};
\end{scope}
\end{tikzpicture}
```

## Definition references

[[def-singular-knot-and-vassiliev-derivative|Singular-knot, framing-zero, and resolution conventions]]

[Bar-Natan and Stoimenow, §1.1, pp. 3–5](https://arxiv.org/pdf/q-alg/9702009v1)

[Chmutov, Duzhin, and Mostovoy, §§3.4, 3.5.1, and 4.1, pp. 70–75 and 89–91](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)
