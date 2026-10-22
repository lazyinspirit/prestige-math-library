---
id: lem-trefoil-plus-one-surgery-group-presentation
kind: lemma
title: "Group presentation for positive trefoil $+1$ surgery"
status: draft
origin: pipeline
dependency_level: 7
deps:
  - def-oriented-slope-and-knot-dehn-filling
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
  - def-geometric-braid-with-setwise-endpoints
  - def-elementary-geometric-half-twist
  - prop-stacking-of-geometric-braids-is-well-defined
  - def-closure-of-a-geometric-braid
  - def-regular-oriented-link-diagram
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - thm-blackboard-framing-self-linking-is-writhe
  - thm-knot-wirtinger-presentation-correctness
  - lem-wirtinger-local-meridian-conjugacy
  - thm-seifert-van-kampen
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hugh M. Hilden, María Teresa Lozano, and José María Montesinos-Amilibia, On the affine representations of the trefoil knot group, arXiv:1003.3554v1, pp. 6 and 23"
      url: "https://arxiv.org/pdf/1003.3554"
    - title: "Stefan Friedl, Knot Theory, 2024 full lecture notes, §§5.2–5.3 and 7.1"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Stefan Friedl, Knot Theory, 2024 full lecture notes, §§5.2–5.3 and 7.1"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $T$ be the closure of the positive two-strand braid $\sigma_1^3$, with both strands oriented downward and with $\sigma_1$ the positive geometric half twist, so in the downward diagram the left strand passes over the right. Let $E_T$ be its chosen exterior. At a basepoint on the first arc, take the three positive Wirtinger meridians $a,b,c$ from the successive arcs of the standard diagram, with the crossing and meridian conventions specified by the referenced definitions. For a chosen peripheral basis $(\mu,\lambda)$ on $\partial E_T$, the fundamental group of the $+1$ filling $E_T(1/1)$, where $+1$ means slope $[\mu]+[\lambda]$, has presentation
$$\pi_1(E_T(1/1))\cong\langle a,b\mid aba=bab,\;bab^{-1}aba^{-2}=1\rangle.$$

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
  \node at (0,6.25) {top};
  \draw[thick] (-1,0) -- (-1,1);
  \draw[thick] (1,0) -- (1,1);
  \draw[thick] (-1,1) -- (1,1.8);
  \draw[white,line width=4pt] (1,1) -- (-1,1.8);
  \draw[thick] (1,1) -- (-1,1.8);
  \draw[thick] (-1,1.8) -- (-1,2.6);
  \draw[thick] (1,1.8) -- (1,2.6);
  \draw[thick] (-1,2.6) -- (1,3.4);
  \draw[white,line width=4pt] (1,2.6) -- (-1,3.4);
  \draw[thick] (1,2.6) -- (-1,3.4);
  \draw[thick] (-1,3.4) -- (-1,4.2);
  \draw[thick] (1,3.4) -- (1,4.2);
  \draw[thick] (-1,4.2) -- (1,5.0);
  \draw[white,line width=4pt] (1,4.2) -- (-1,5.0);
  \draw[thick] (1,4.2) -- (-1,5.0);
  \draw[thick] (-1,5.0) -- (-1,5.8);
  \draw[thick] (1,5.0) -- (1,5.8);
  \node[left] at (-1,6.0) {left endpoint};
  \node[right] at (1,6.0) {right endpoint};
  \node at (2.0,3.0) {$\sigma_1^3$};
  \node at (0,-0.35) {bottom endpoints};
\end{tikzpicture}
```

The drawing is the two-strand braid tangle from bottom to top; at each crossing the unbroken strand from lower right to upper left is the overpass, matching the positive half-twist convention in the referenced definition. The knot orientation is downward as stated, and the closure is the one specified by the closure definition. The picture does not label Wirtinger meridians, and the proof does not rely on it.

## Statement references

[[def-countable-choice|Countable-choice hypothesis for the chosen exterior and framing data]]

[[def-geometric-braid-with-setwise-endpoints|Geometric braid and transported strand labels]]

[[def-elementary-geometric-half-twist|Positive geometric half twist]]

[[prop-stacking-of-geometric-braids-is-well-defined|Braid stacking convention]]

[[def-closure-of-a-geometric-braid|Closure convention for the braid]]

[[def-regular-oriented-link-diagram|Regular oriented knot diagram]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented knot in the standard oriented three-sphere]]

[[def-oriented-slope-and-knot-dehn-filling|Slope convention and the meridian relation for $+1$ filling]]

[[thm-seifert-van-kampen|Published pushout theorem used in the group calculation]]

[[def-knot-exterior|Planned KT-02 exterior definition; body unavailable at this handoff]]

[[def-knot-meridian-and-preferred-longitude|Planned KT-02 peripheral-system definition; body unavailable at this handoff]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Oriented crossing signs and blackboard framing]]

[[def-framed-knot-self-linking-and-seifert-framing|Self-linking of a framed knot]]

[[thm-blackboard-framing-self-linking-is-writhe|Blackboard self-linking equals the diagram writhe]]

[[thm-knot-wirtinger-presentation-correctness|Planned Wirtinger presentation supplier; its proof remains escalated]]

[[lem-wirtinger-local-meridian-conjugacy|Planned local meridian-conjugacy supplier; its proof remains escalated]]

[Hilden–Lozano–Montesinos-Amilibia, p. 23, trefoil longitude and the $0$-surgery group presentation](https://arxiv.org/pdf/1003.3554)

[Friedl, §§5.2–5.3 and 7.1, Wirtinger proof and trefoil longitude cross-check; the diagram and labels still require convention reconciliation](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

## Facts & Assumptions

**Given:** The oriented braid closure and meridian labeling from the Statement, the preferred-longitude convention, and the $+1$ filling slope $[\mu]+[\lambda]$.

[A1] $\mathrm{AC}_\omega$ is the stated axiom for the chosen tubular and normal-bundle data. [[def-countable-choice]]

[F1] [[thm-seifert-van-kampen]]: for a path-connected open cover with path-connected overlap, the fundamental group of the union is the pushout of the inclusion-induced group maps.

[F2] [[def-oriented-slope-and-knot-dehn-filling]]: $+1$ filling attaches a solid torus whose meridian represents $[\mu]+[\lambda]$.

[F3] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: a crossing sign is the determinant sign of the oriented over- and under-tangents, and the positive geometric half twist has sign $+1$.

[F4] [[thm-blackboard-framing-self-linking-is-writhe]]: the self-linking number of a knot with its blackboard framing equals the diagram writhe.

[L1] [[thm-knot-wirtinger-presentation-correctness]] states that the Wirtinger meridian map for a finite knot diagram is an isomorphism from its crossing-relator presentation to the knot-exterior group. Its carrier is present, but its proof is not ready because it depends on the unresolved crossing-ball cover below; this is a declared interface, not an accepted or verified premise.

[L2] [[lem-wirtinger-local-meridian-conjugacy]] gives the two conjugacy directions for right-handed and opposite local crossing charts. Its proof also remains escalated through the crossing-ball-cover gap, so the positive-crossing direction used for this particular downward trefoil diagram still requires convention reconciliation.

[A2] The current finite trace reads the blackboard parallel as $bac$ and assigns it coefficient $+3$, which would make the $+1$ slope word $bac\,a^{-2}$. This local word and its sign have not been verified against the downward-oriented positive-half-twist convention; the blackboard theorem [F4] supplies only the self-linking/writhe relation after those crossing signs are fixed.

## Proof

1.1 The standard three-crossing diagram has one meridian generator on each under-arc. Using the local crossing relations in [L2], the current draft labels the crossing relators as $c=b^{-1}ab$, $b=a^{-1}ca$, and $a=c^{-1}bc$. The first two imply $ab=b^{-1}aba$, hence $bab=aba$; substituting $c=b^{-1}ab$ into the third and using $aba=bab$ makes it redundant. Subject to the unresolved presentation-isomorphism interface [L1], this gives $\pi_1(E_T)=\langle a,b\mid aba=bab\rangle$. [given, A1, F1, L1, L2, construct, algebra]

1.2 The unverified parallel trace [A2] represents the blackboard push-off by $bac$ and assigns it boundary class $[\lambda]+3[\mu]$. The $+1$ slope is $[\lambda]+[\mu]$, so in the abelian peripheral subgroup it is represented by the proposed word $bac\,a^{-2}$. This step remains conditional on checking the finite trace and sign against [F3]–[F4]. [given, A2, F2, F3, F4, construct]

2.1 Van Kampen for the filling adds the proposed relation $bac\,a^{-2}=1$; the attached solid-torus core generator is identified with a complementary boundary generator and eliminated. Substituting the proposed $c=b^{-1}ab$ from step 1.1 gives $bab^{-1}aba^{-2}=1$. Together with $aba=bab$, this is the displayed presentation, conditional on the unresolved inputs [L1], [L2], and [A2]. [step 1.1, step 1.2, F1, F2, L1, L2, A2, algebra] ∎
