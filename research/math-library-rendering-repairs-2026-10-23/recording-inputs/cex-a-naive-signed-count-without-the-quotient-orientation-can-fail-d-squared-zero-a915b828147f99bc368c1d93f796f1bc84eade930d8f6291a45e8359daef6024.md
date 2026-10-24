---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero.json
  precheck: pass
id: cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero
kind: counterexample
title: "A naive signed count without the quotient orientation can fail to square to zero"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - ex-broken-trajectories-in-an-index-two-torus-moduli-space
  - def-integers
  - def-mod-two-morse-differential
  - def-signed-morse-differential-over-the-integers
  - def-unparametrized-morse-trajectory-moduli-space
  - lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli
  - thm-integral-morse-differential-squares-to-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 8, printed pp. 70-72 (a free choice of signs fails; the characteristic signs must be coherent with gluing)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 69-73 (the comparison sign $\\epsilon$ is determined by the orientations, not chosen per trajectory)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 17 Sec. 5.1 (the eight broken trajectories and the four intervals)"
dependency_level: 8
---

## Statement refuted

Assume AC. An arbitrary assignment of signs to the index-one trajectories of a Morse--Smale pair yields a differential squaring to zero. Unstable orientations give a gluing-compatible convention that does square to zero. Other assignments can accidentally square to zero; this counterexample refutes the universal assertion, rather than characterizing all assignments that work.

## Facts & Assumptions

**Given:** AC and the explicit normalized torus model of [[ex-broken-trajectories-in-an-index-two-torus-moduli-space]]: critical points $a$ of index $2$, $b,c$ of index $1$ and $d$ of index $0$, with each of $\mathcal M(a,b)$, $\mathcal M(a,c)$, $\mathcal M(b,d)$, $\mathcal M(c,d)$ of cardinality two, and the naive signs $\tilde\epsilon(\gamma):=+1$ for every index-one trajectory $\gamma$.

[F1] The eight once-broken trajectories from $a$ to $d$ are the boundary points of the compact one-manifold $\overline{\mathcal M}(a,d)$, which is the disjoint union of four closed intervals; each interval has two boundary points, and each is a product of one trajectory of index drop one from $a$ to a saddle with one from that saddle to $d$ ([[ex-broken-trajectories-in-an-index-two-torus-moduli-space]], [[def-unparametrized-morse-trajectory-moduli-space]]).

[F2] The coherent signed differential sums the comparison signs $\epsilon(\gamma)$ determined by the unstable orientations: $\partial a=\sum_\gamma\epsilon(\gamma)q_\gamma$ over the four trajectories out of $a$, and $\partial b=\partial c=0$, since the two halves of each oriented unstable interval have opposite flow directions and the same minimum co-orientation, hence opposite coherent signs, over the integers ([[def-signed-morse-differential-over-the-integers]], [[def-integers]]).

[F3] At each boundary point of the compactified one-manifold the outward-normal-first boundary sign is the negative product $-\epsilon(\gamma_1)\epsilon(\gamma_2)$ of the two comparison signs, so the two ends of each of the four intervals carry opposite products and the total signed boundary vanishes ([[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]], [[thm-integral-morse-differential-squares-to-zero]]).

[F4] The mod-two differential counts the same finite sets without signs, so it is unaffected by any sign assignment ([[def-mod-two-morse-differential]]).

## Counterexample

**Proof technique:** direct, by an explicit computation with the naive signs.

1.1 The explicit product Morse function and normalized field of [F1] have the four critical points and four adjacent-index moduli spaces stated in the Given data; each such moduli space has two points, and the index-two compactification has four intervals and eight endpoints. Thus this is realized Morse--Smale data, rather than an assumed counting diagram. [F1, given]

1.2 With $\tilde\epsilon\equiv+1$ the naive signed count of the four index-one moduli spaces gives $\tilde\partial a=2b+2c$, $\tilde\partial b=2d$, $\tilde\partial c=2d$ and $\tilde\partial d=0$, because each of the four moduli spaces has exactly two elements. [F1, given]

2.1 By [F1] the four relative-delay intervals have the eight once-broken endpoints. The coherent sign identity in [F3] makes the products at their two ends opposite. [F1, F3, step 1.1]

2.2 Hence $\tilde\partial^2a=2\,\tilde\partial b+2\,\tilde\partial c=4d+4d=8d\ne0$ in $\mathbb Z$. The naive assignment of signs therefore fails to square to zero: it is not a differential. [step 1.2, algebra]

3.1 The coherent convention behaves differently. By [F3] the two ends of each of the four compactified intervals carry opposite products $\epsilon(\gamma_1)\epsilon(\gamma_2)$; summing over the four intervals, the coefficient of $d$ in $\partial^2a$ is the negative total signed boundary count of $\overline{\mathcal M}(a,d)$, which is zero. Thus $\partial^2=0$ with the orientation-induced signs, and the failure of step 2.2 is a failure of the sign assignment, not of the Morse complex. [F3, step 2.2]

4.1 The comparison signs of [F2] are determined by the chosen orientations of the unstable manifolds through the boundary-orientation identity, not chosen per trajectory; the all-plus assignment $\tilde\epsilon$ is not of that form, since it makes both ends of an interval contribute with the same product. The mod-two differential avoids the issue because signs are invisible in $\mathbb Z/2$ by [F4]. Hence a sign convention compatible with the compactified moduli spaces — not an arbitrary assignment of signs to trajectories — is what makes the integral Morse complex a complex. [F2, F3, F4, step 2.2, step 3.1] ∎


## Remarks

The following schematic displays the four compactified relative-delay intervals, not trajectories drawn on the torus. Index the two choices of the moving $u$-arc by $i\in\{1,2\}$ and the two choices of the moving $v$-arc by $j\in\{1,2\}$. Write $\alpha_i:a\to b$, $\beta_j:b\to d$, $\gamma_j:a\to c$ and $\eta_i:c\to d$ for the corresponding trajectory classes. The interval $I_{ij}$ has endpoints $(\alpha_i,\beta_j)$ and $(\gamma_j,\eta_i)$, as in the supplier's relative-delay construction. Labels below the endpoints give the coherent sign products: $s_{ij}=\epsilon(\alpha_i)\epsilon(\beta_j)\in\{+1,-1\}$ and $\epsilon(\gamma_j)\epsilon(\eta_i)=-s_{ij}$ by [F3]. They are products, not boundary signs; the latter are their negatives.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (0,1) {through $b$};
\node at (3,1) {$\overline{\mathcal M}(a,d)$};
\node at (6,1) {through $c$};
\draw (0,0)--(6,0);
\fill (0,0) circle (2pt); \fill (6,0) circle (2pt);
\node[above] at (0,0) {$(\alpha_1,\beta_1)$};
\node[above] at (3,0) {$I_{11}$};
\node[above] at (6,0) {$(\gamma_1,\eta_1)$};
\node[below] at (0,0) {$s_{11}$}; \node[below] at (6,0) {$-s_{11}$};
\draw (0,-1.5)--(6,-1.5);
\fill (0,-1.5) circle (2pt); \fill (6,-1.5) circle (2pt);
\node[above] at (0,-1.5) {$(\alpha_1,\beta_2)$};
\node[above] at (3,-1.5) {$I_{12}$};
\node[above] at (6,-1.5) {$(\gamma_2,\eta_1)$};
\node[below] at (0,-1.5) {$s_{12}$}; \node[below] at (6,-1.5) {$-s_{12}$};
\draw (0,-3)--(6,-3);
\fill (0,-3) circle (2pt); \fill (6,-3) circle (2pt);
\node[above] at (0,-3) {$(\alpha_2,\beta_1)$};
\node[above] at (3,-3) {$I_{21}$};
\node[above] at (6,-3) {$(\gamma_1,\eta_2)$};
\node[below] at (0,-3) {$s_{21}$}; \node[below] at (6,-3) {$-s_{21}$};
\draw (0,-4.5)--(6,-4.5);
\fill (0,-4.5) circle (2pt); \fill (6,-4.5) circle (2pt);
\node[above] at (0,-4.5) {$(\alpha_2,\beta_2)$};
\node[above] at (3,-4.5) {$I_{22}$};
\node[above] at (6,-4.5) {$(\gamma_2,\eta_2)$};
\node[below] at (0,-4.5) {$s_{22}$}; \node[below] at (6,-4.5) {$-s_{22}$};
\end{tikzpicture}
```

For the naive assignment, all eight endpoint products are instead $+1$, yielding $\tilde\partial^2a=8d$ as computed in step 2.2. The rigorous counterexample and its coherent-sign comparison above do not depend on the schematic.
