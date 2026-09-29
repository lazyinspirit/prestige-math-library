---
id: ex-proj-empty-irrelevant-nilpotent
kind: example
title: "A nilpotent irrelevant ideal gives empty Proj"
status: draft
origin: pipeline
deps:
  - lem-proj-irrelevant-and-nilpotent-boundaries
  - def-proj-graded-ring-points
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Example

Let $k$ be a field and let
$$S=k[\varepsilon]/(\varepsilon^2)$$
be graded by $\deg\varepsilon=1$ and $\deg k=0$, so that
$S_0=k$ and $S_+=(\varepsilon)$ with $\varepsilon^2=0$. Then $S_+$ is a
nilpotent ideal, $\operatorname{Proj}S=\varnothing$, and yet
$\operatorname{Spec}S$ is nonempty: the ring $k[\varepsilon]/(\varepsilon^2)$
has the single prime ideal $(\varepsilon)$. So emptiness of Proj is not
emptiness of the spectrum, and it is detected by the nilpotency of the
irrelevant ideal.

## Facts & Assumptions

**Given:** A field $k$, the graded ring $S=k[\varepsilon]/(\varepsilon^2)$ with $\deg\varepsilon=1$.

[F1] $\operatorname{Proj}S$ is the set of homogeneous prime ideals $\mathfrak p$ with $S_+\not\subseteq\mathfrak p$; a prime contains every nilpotent element; and $S=\bigoplus_{d\ge0}S_d$ with $S_1=k\varepsilon$ and $S_d=0$ for $d\ge2$. ([[def-proj-graded-ring-points]])

[F2] $\operatorname{Proj}S=\varnothing$ if and only if every homogeneous element of $S_+$ is nilpotent; if $S_+$ is finitely generated this is equivalent to $S_+$ being nilpotent. ([[lem-proj-irrelevant-and-nilpotent-boundaries]])

[F3] In the ring $k[\varepsilon]/(\varepsilon^2)$ every prime ideal contains $\varepsilon$, so $(\varepsilon)$ is the unique prime, and it is maximal; the localisation $S_\varepsilon$ is the zero ring. [algebra]

## Verification

**Proof technique:** direct: identify $S_+$, apply the emptiness criterion, and exhibit the point of $\operatorname{Spec}S$.

1.1 The irrelevant ideal is nilpotent. Here $S_+=k\varepsilon$ consists of the multiples of $\varepsilon$, and $S_+^2=k\varepsilon^2=0$; hence every element of $S_+$ is nilpotent and $S_+=(\varepsilon)$ is finitely generated. [algebra]
1.2 The standard chart is empty. For the homogeneous element $\varepsilon$ of degree $1$ we have $S_{(\varepsilon)}=(S[\varepsilon^{-1}])_0$, and $S[\varepsilon^{-1}]=0$ because $\varepsilon$ is nilpotent; hence $D_+(\varepsilon)=\operatorname{Spec}S_{(\varepsilon)}=\operatorname{Spec}0=\varnothing$, and since $\varepsilon$ generates $S_+$ this is the only standard open. [F1, F3, algebra]
2.1 Proj is empty. By step 1.1 every homogeneous element of $S_+$ is nilpotent, so [F2] gives $\operatorname{Proj}S=\varnothing$; equivalently, any homogeneous prime $\mathfrak p\subseteq S$ contains the nilpotent $\varepsilon$, hence contains $S_+=(\varepsilon)$ and is excluded from $\operatorname{Proj}S$. [F1, F2, step 1.1]
3.1 The spectrum is nonempty. In $k[\varepsilon]/(\varepsilon^2)$ the element $\varepsilon$ is nilpotent but nonzero, so the ideal $(\varepsilon)$ is proper; every prime contains the nilpotent $\varepsilon$, so $(\varepsilon)$ is the unique prime ideal and $\operatorname{Spec}S=\{(\varepsilon)\}\neq\varnothing$, in contrast with step 2.1. [F1, F3, algebra]
4.1 Conclusion. Steps 1.1 and 2.1 show that the nilpotent irrelevant ideal produces empty Proj, while step 3.1 shows that the underlying ring still has a point; the two conclusions are consistent because Proj discards exactly the primes containing all of $S_+$. [F1, F2, step 2.1, step 3.1]
\qed
