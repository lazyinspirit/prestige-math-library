---
id: cex-knot-kt-14-boundary-case
kind: counterexample
title: "Equal surgery manifolds need not have isotopic diagrams"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-framed-link-surgery-diagram
  - def-kirby-moves-on-integral-framed-links
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Lecture 2 §2.2, meridian and longitude; Lecture 3 §3.2, stabilization, printed pp. 33–34, 45–46"
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "§1 operation (O1), printed p. 35"
---

## Statement refuted

Assume the Axiom of Choice.

The false claim is that if two integral framed-link surgery diagrams in $S^3$ have orientation-preservingly diffeomorphic surgery results, then the framed links are ambient isotopic.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral surgery diagrams]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Ambient isotopy of oriented links]]

## Facts & Assumptions

**Given:** Full AC, the empty surgery diagram $D_0$, and the diagram $D_1$ consisting of a single $+1$-framed standard unknot.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says that every sequence of nonempty sets has a choice function. Full AC [A1] implies this by applying its choice function to the range of the sequence and composing with the index map.

[F1] [[def-integral-framed-link-surgery-diagram]]: the empty diagram has surgery result $S^3$, and the integer $n$ filling uses meridian slope $n[\mu]+[\lambda]$.

[F2] [[def-knot-meridian-and-preferred-longitude]]: $\mu$ is the positive meridian and $\lambda$ is the degree-one preferred longitude that maps to zero in the knot exterior.

[F3] [[thm-knot-exterior-homology-and-longitude]]: under full AC the preferred longitude is the unique degree-one class in the kernel of the exterior inclusion.

[F4] [[def-kirby-moves-on-integral-framed-links]]: adding a split $+1$-framed unknot is a Kirby stabilization.

[F5] [[def-oriented-link-in-s-three-and-ambient-isotopy]]: ambient isotopy identifies links by a diffeomorphism of their component domains, so it preserves the number of components.

## Counterexample

1.1 By [F1], surgery on $D_0$ leaves the standard oriented $S^3$ unchanged. [given, F1, construct]

1.2 Give $S^3$ its unit-sphere model in $\mathbb C^2$ and let $U(t)=(e^{2\pi i t},0)$. With $N(U)=\{|z_2|\le1/\sqrt2\}$, the exterior is $D^2\times S^1$ with disk coordinate $z_1$ and core coordinate $w=z_2/|z_2|$. The preferred longitude $\lambda_U$ is the disk-meridian class and $\mu_U$ is the core-longitude class by [F2]–[F3]. The diffeomorphism $g(z,w)=(w^{-1}z,w)$ preserves orientation and sends $[\mu_U]+[\lambda_U]$ to $[\mu_U]$. Let $f_0$ be the original $S^3$ gluing, which sends the meridian of the removed unknot neighbourhood to $[\mu_U]$, and choose the $+1$-filling map $f_1=g^{-1}\circ f_0$. It sends the attached meridian to $[\mu_U]+[\lambda_U]$, the required slope by [F1]. The map equal to $g$ on the exterior and the identity on the attached solid torus is well-defined because $g\circ f_1=f_0$; it is a smooth orientation-preserving diffeomorphism to the original $S^3$. Thus $D_1$ also presents $S^3$. [given, A1, A2, F1, F2, F3, construct]

2.1 The diagrams are not ambient isotopic: $D_0$ has zero components and $D_1$ has one, while [F5] implies ambient isotopy preserves component count. Yet they have the same oriented surgery result by steps 1.1–1.2. Moreover [F4] identifies their difference as a permitted stabilization. Hence the false claim fails. [step 1.1, step 1.2, F4, F5, algebra] ∎

## Diagram

The left panel is the empty diagram and the right panel is a split unknot labelled $+1$. The labels are integer framings; the circles are schematic projections of the standard unknot and contain no crossing information.

```tikz
\begin{tikzpicture}[>=stealth]
  \node at (0,0) {$\varnothing$};
  \draw[->,thick] (0.7,0) -- (2.0,0);
  \node at (1.35,0.35) {stabilize};
  \draw[thick] (2.7,0) circle (0.48);
  \node at (3.55,0) {$+1$};
\end{tikzpicture}
```
