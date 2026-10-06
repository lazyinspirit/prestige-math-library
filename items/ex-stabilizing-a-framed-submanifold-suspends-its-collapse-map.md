---
id: ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map
kind: example
title: "Stabilizing a framed point suspends its collapse map"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
  - def-countable-choice
  - def-framing-of-a-normal-bundle
  - def-stabilized-framed-cobordism-colimit
  - def-stable-stem-of-the-sphere
  - def-suspension-prespectrum-and-sphere-prespectrum
  - lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - thm-regular-value-formula-for-degree
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "(4.42)-(4.43) and Lemma 4.16, printed pp.32-36"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Definition 6.16 and Proposition 6.18, electronic pp.114-116"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, framed 0-manifolds and the Hopf theorem, printed pp.50-51"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $p\in S^1$ be a single positively framed point; its Pontryagin-Thom map
is the degree-$+1$ self-map of $S^1$, the generator of
$\pi_1(S^1)\cong\mathbb Z$ (the framed-point example). Its equatorial
stabilization is the same point in $S^2$ with the prepended normal framing,
whose Pontryagin-Thom map is the suspension $E$ of the degree-$+1$ map, i.e.
the degree-$+1$ self-map of $S^2$, the generator of
$\pi_2(S^2)\cong\mathbb Z$. Iterating, the stabilization of the positively
framed point of $S^k$ is the positively framed point of $S^{k+1}$ and the
classes are related by the suspension isomorphisms
$E:\pi_k(S^k)\to\pi_{k+1}(S^{k+1})$. This verifies the
stabilization-to-suspension compatibility on a nonzero class.

## Facts & Assumptions

**Given:** A point $p\in S^1$ with a positive framing $\varphi$ of its normal bundle $\nu(\{p\}\subseteq S^1)=T_pS^1$, and the equatorial inclusion $i:S^1\hookrightarrow S^2$.

[F1] A framing of a single point of $S^k$ is a basis of $T_pS^k$, and it is positive when that basis is positively oriented for the standard orientation; the Pontryagin-Thom map of a positively framed point is smooth with the centre as a regular value and differential sign $+1$, and framed cobordism classes of framed $0$-manifolds are classified by the signed count ([[def-framing-of-a-normal-bundle]], the local calculation below).

[F2] Degree is an isomorphism $\pi_r(S^r)\to\mathbb Z$ for every $r\ge1$, sending the identity to $+1$; in particular the degree-$+1$ self-map of $S^r$ generates $\pi_r(S^r)$ ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F3] Equatorial stabilization sends the class of $(N,\varphi)$ to the class of the equatorial inclusion $i(N)$ with the equatorial normal prepended to the framing, and its Pontryagin-Thom class is the suspension: $\mathrm{PT}(\sigma(N,\varphi))=E(\mathrm{PT}(N,\varphi))$ ([[def-stabilized-framed-cobordism-colimit]], [[lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map]]).

[F4] With the standard orientations, the outward normal of the closed northern hemisphere at a point of the equator and a positive basis of the equator, in that order, form a positive basis of the tangent space of $S^2$; this is the boundary-orientation convention. The suspension homomorphism is determined by the sphere-prespectrum homeomorphism $S^1\wedge S^k\cong S^{k+1}$, and it sends the class of the identity of $S^k$ to the class of the identity of $S^{k+1}$ ([[def-suspension-prespectrum-and-sphere-prespectrum]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is inherited from the framed-cobordism, transversality and Pontryagin--Thom suppliers ([[def-countable-choice]]). The finite signed count itself requires no choice.

## Verification

1.1 Using [A1] for the Pontryagin–Thom and regular-value degree suppliers, for a finite framed set in $S^n$, the centre of the collapse target has precisely that set as its regular preimage, with differential signs equal to its framing signs. The regular-value degree formula therefore gives degree equal to the signed count. Degree classifies based self-maps of $S^n$, and the fixed-codimension Pontryagin--Thom bijection transfers this classification to framed cobordism. A single positive point has degree $+1$ and its reversal degree $-1$. [A1, given, algebra]

1.2 (The framed point generates $\pi_1(S^1)$.) By [F1] the Pontryagin-Thom map of the positively framed point $(p,\varphi)$ is a smooth self-map of $S^1$ whose differential at $p$ has sign $+1$, so its degree is $+1$; by [F2] degree is an isomorphism $\pi_1(S^1)\to\mathbb Z$, hence the class of the framed point is the generator. A single point realizes $+1$ and its orientation reversal $-1$ in the classification of [F1]. [F1, F2]

1.3 (Its stabilization is a positively framed point.) Under equatorial stabilization the point becomes $i(p)\in S^2$ with the framing $\nu_{\mathrm{eq}}\oplus\varphi$, where $\nu_{\mathrm{eq}}$ is the equatorial normal, by [F3]; the normal bundle of the point $i(p)$ in $S^2$ is all of $T_{i(p)}S^2$, so this framing is a basis of $T_{i(p)}S^2$. By [F4] the pair $(\nu_{\mathrm{eq}},\varphi)$ is positive for the standard orientation of $S^2$ because $\varphi$ is a positive basis of the equator, so the stabilization is again a single positively framed point. By [F1] its Pontryagin-Thom map has degree $+1$ and, by [F2], it generates $\pi_2(S^2)\cong\mathbb Z$. [F1, F2, F3, F4]

2.1 (The suspension identity on the generator.) By [F3] the Pontryagin-Thom class of the stabilization is $E$ of the class of the framed point, which is the generator of $\pi_1(S^1)$ by step 1.2. By [F4] the suspension sends the class of the identity of $S^1$ to the class of the identity of $S^2$, and the class of the identity is the generator of $\pi_1(S^1)$ by [F2]; hence $E(\mathrm{PT}(p,\varphi))$ is the identity class of $\pi_2(S^2)$, i.e. the degree-$+1$ self-map of $S^2$. This agrees with step 1.3, where the Pontryagin-Thom class of the stabilization was computed directly as the generator of $\pi_2(S^2)$: the identity $\mathrm{PT}(\sigma(p,\varphi))=E(\mathrm{PT}(p,\varphi))$ holds on this nonzero class. [F2, F3, F4, step 1.2, step 1.3]

3.1 (Iteration and conclusion.) Repeating the two computations one dimension higher: the stabilization of the positively framed point of $S^k$ is the positively framed point of $S^{k+1}$ (the same boundary-orientation computation as step 1.3, where the equatorial normal is prepended to a positive basis), and its Pontryagin-Thom class is the generator of $\pi_{k+1}(S^{k+1})\cong\mathbb Z$; by [F3] and [F4] these classes are related by the suspension isomorphisms $E:\pi_k(S^k)\to\pi_{k+1}(S^{k+1})$, which send generator to generator. The stabilized class is therefore a nonzero element of the zeroth stable stem $\pi_0^s$ ([[def-stable-stem-of-the-sphere]]), and the example verifies the stabilization-to-suspension compatibility on a nonzero class. [F2, F3, F4, step 1.3, step 2.1] ∎
