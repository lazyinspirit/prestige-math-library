---
id: ex-knot-kt-14-worked-cases
kind: example
title: "Worked cases of three-manifold surgery presentations"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-integral-framed-link-surgery-diagram
  - def-oriented-slope-and-knot-dehn-filling
  - def-lens-space-surgery-orientation-convention
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
      locator: "Lecture 1 §1.5 and Lecture 2 §§2.2–2.3, printed pp. 24–25, 32–37"
---

## Example

Assume the Axiom of Choice. The empty integral surgery diagram gives the standard oriented $S^3$. Surgery on the standard unknot with framing $0$ gives $S^1\times S^2$. For every integer $p>0$, surgery on the standard unknot with framing $p$ gives the oriented lens space $L(p,1)$ in the convention $L(p,q)=E_U(p/q)$.

## Example references

[[def-integral-framed-link-surgery-diagram|Framed-link surgery convention]]

[[def-oriented-slope-and-knot-dehn-filling|Integer filling slope]]

[[def-lens-space-surgery-orientation-convention|Orientation convention for lens spaces]]

[[def-knot-exterior|Chosen unknot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[thm-knot-exterior-homology-and-longitude|Uniqueness of the preferred longitude]]

[Saveliev, Lecture 1 §1.5 and Lecture 2 §§2.2–2.3](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

## Facts & Assumptions

**Given:** Full AC, the empty link, and the standard oriented unknot $U(t)=(e^{2\pi i t},0)$ in $S^3\subset\mathbb C^2$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; full AC also supplies the countable-choice hypotheses in the chosen tubular data.

[A2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says that every sequence of nonempty sets has a choice function.

[F1] [[def-integral-framed-link-surgery-diagram]]: each component with integer $n$ is filled along $n[\mu]+[\lambda]$, and the empty link has surgery result $S^3$.

[F2] [[def-oriented-slope-and-knot-dehn-filling]]: the integer $n$ filling attaches a solid torus whose meridian maps to $n[\mu_U]+[\lambda_U]$.

[F3] [[def-lens-space-surgery-orientation-convention]]: for $p>0$, $L(p,q)$ is the oriented filling of the unknot exterior with meridian slope $p[\mu_U]+q[\lambda_U]$.

[F4] [[def-knot-meridian-and-preferred-longitude]]: a preferred longitude is a degree-one parallel curve whose homology class maps to zero in the chosen exterior.

[F5] [[thm-knot-exterior-homology-and-longitude]]: under full AC the positive meridian and unique preferred longitude form the peripheral basis of the unknot exterior.

## Verification

1.1 Applying [A1] to the range of any sequence $(X_n)$ in [A2] and composing the resulting choice function with $n\mapsto X_n$ gives the countable-choice function required by [A2]. Thus the chosen tubular and slope interfaces used below are available. [given, A1, A2, choose]

1.2 For the empty link there are no tubular neighbourhoods to remove and no solid tori to attach. The definition [F1] therefore leaves the standard oriented $S^3$ unchanged. [given, F1, construct]

1.3 Use $N(U)=\{|z_2|\le 1/\sqrt2\}$; its exterior is the solid torus $E_U=\{|z_2|\ge1/\sqrt2\}\cong D^2\times S^1$, with disk coordinate $z_1$ and core coordinate $\arg z_2$. The loop in the $z_1$ direction has degree one and bounds a disk in $E_U$, so [F4]–[F5] identify it with $\lambda_U$; the positive meridian $\mu_U$ runs once around the exterior core. For $0$-surgery, [F2] sends the attached meridian to $\lambda_U$, the meridian of $E_U$. The gluing-map convention in the slope definition permits the product gluing: the two disk factors glue to $S^2$ and the core circles glue to $S^1$, giving $S^1\times S^2$ with the induced surgery orientation. [given, F2, F4, F5, construct]

2.1 For $p>0$, [F2] identifies the $p$-framed unknot filling with the filling of $E_U$ along $p[\mu_U]+[\lambda_U]$. This is exactly $L(p,1)$ by [F3]. The case $p=1$ is included. [given, F2, F3, algebra] ∎

## Diagram

Each circle denotes the standard unknot and the adjacent integer is its framing. The first panel has no components. The second and third panels show the zero and positive-$p$ surgeries. The panels illustrate the examples only; the coordinate and gluing arguments in the verification establish the identifications.

```tikz
\begin{tikzpicture}[>=stealth]
  \node at (0,1) {empty};
  \node at (3,1) {$0$-framed};
  \node at (6,1) {$p$-framed, $p>0$};
  \node at (0,0) {$\varnothing$};
  \draw[thick] (3,0) circle (0.42);
  \node at (3.8,0) {$0$};
  \draw[thick] (6,0) circle (0.42);
  \node at (6.8,0) {$p$};
  \draw[->] (0.8,0) -- (2.1,0);
  \draw[->] (3.9,0) -- (5.1,0);
\end{tikzpicture}
```
