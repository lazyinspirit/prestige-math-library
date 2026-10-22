---
id: thm-lickorish-wallace-framed-link-presentation
kind: theorem
title: "Lickorish–Wallace framed-link presentation theorem"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-integral-framed-link-surgery-diagram
  - lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: "https://arxiv.org/pdf/math/9812086"
      locator: "pp. 1–4; the complete smooth oriented relative existence and marked calculus arguments are supplied by the proved local dependencies."
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Theorem 2.1 and proof, Lecture 2 §2.2, printed pp. 34–35; §3.4, printed p. 55 (orientation reversal by reflection)"
    - title: "Qiang E, Fengchun Lei, and Fengling Li, A Proof of Lickorish and Wallace’s Theorem"
      url: "https://arxiv.org/pdf/1306.1376"
      locator: "Theorem 1.1 and proof, pp. 1–4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. For every nonempty closed connected oriented smooth $3$-manifold $M$, there is a finite oriented link $L=\bigcup_{i\in I}K_i\subset S^3$ and an integer $n_i$ for each component such that the oriented manifold obtained by simultaneous surgery with meridian slopes $n_i[\mu_i]+[\lambda_i]$ is orientation-preservingly diffeomorphic to $M$. The empty link is allowed and presents $S^3$.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral framed-link surgery convention]]

[[lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations|Parametrized framed-link surgery existence]]

[Saveliev, Lecture 2 §2.2, Theorem 2.1 and proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[E, Lei, and Li, A Proof of Lickorish and Wallace’s Theorem](https://arxiv.org/pdf/1306.1376)


## Facts & Assumptions

**Given:** Full AC and a nonempty closed connected oriented smooth $3$-manifold $M$.

[A1] [[def-axiom-of-choice]] is the hypothesis of both local suppliers.

[F1] [[lem-relative-three-manifolds-admit-parametrized-link-surgery-presentations]]: for connected nonempty compact oriented smooth $N,M$ with their prescribed common parametrized boundary, a finite framed link in $N$ has surgery diffeomorphic to $M$ with the prescribed external boundary parametrization. The proof supplies actual normal disk framings and the prescribed smooth output identification, including the closed case $N=S^3$.

[F2] [[def-integral-framed-link-surgery-diagram]]: a component's preferred longitude is the unique degree-one parallel with zero homology class in its individual knot exterior. Its positive meridian and preferred longitude form the peripheral basis, and integer surgery fills along $n\mu+\lambda$. The empty diagram gives $S^3$.

## Proof

1.1 Apply [F1] with the standard oriented $N=S^3$, target $M$, and empty external boundary. The hypotheses hold: both manifolds are connected, nonempty, compact and oriented, and their boundaries have the unique empty identification. The supplier gives a finite framed link $L\subset S^3$ with disjoint actual attaching tubes and a diffeomorphism $f:Q\to M$ from its simultaneous framed surgery. Give $Q$ the orientation extending the standard orientation on the link exterior; the orientation sign of $f$ remains to be checked. Its normal disk framings are the actual attaching framings of its four-dimensional two-handle trace; no arbitrary rational filling has been introduced. [given, A1, F1, construct]

2.1 Orient each of the finitely many components. In a component's oriented framed tube $S^1\times D^2$, the framed parallel is $t\mapsto(t,v)$ for a fixed nonzero normal vector $v$. Its projection to the core has degree $+1$. In the positive-meridian/preferred-longitude basis from [F2], the meridian has degree zero and the preferred longitude has degree one, so this parallel has class $n_i[\mu_i]+[\lambda_i]$ for an integer $n_i$. This also follows by writing the normal vector in the preferred trivialization: its winding is the integer $n_i$. The surgery meridian of a framed two-handle is precisely this parallel, by the explicit exchanged disk-factor construction in [F1]. Thus every component has exactly the required integer slope, with the full original normal framing retained. [F1, F2, step 1.1, construct]

3.1 The disjoint attaching tubes in step 1.1 permit these fillings simultaneously; step 2.1 identifies each with the integral convention in [F2]. If $f:Q\to M$ preserves orientation, this is the required presentation. Otherwise reflect the standard $S^3$ by an orientation-reversing diffeomorphism $r$, transport each component orientation, and replace each integer $n_i$ by $-n_i$. The positive meridian and preferred longitude of the reflected component satisfy $[\mu_i']=-r_*[\mu_i]$ and $[\lambda_i']=r_*[\lambda_i]$: reflection reverses the oriented normal disk, while preserving the degree-one and null-homology properties that characterize the longitude. Thus $r_*(n_i[\mu_i]+[\lambda_i])=-n_i[\mu_i']+[\lambda_i']$. To see the oriented effect on the filled manifold, write an original attaching map as $g_i:\partial(D^2\times S^1)\to\partial E$. On the filling solid torus use the orientation-reversing diffeomorphism $c(z,w)=(z,\bar w)$, which fixes its oriented meridian. Choose reflected attaching maps $g_i'=r\circ g_i\circ c^{-1}$; these have the required slopes and glue oriented solid tori to the reflected exterior. The maps $r$ on the exterior and $c$ on each filling agree across these seams and their product collars, giving an orientation-reversing diffeomorphism $R:Q\to Q'$ to the reflected surgery manifold. Consequently $f\circ R^{-1}:Q'\to M$ preserves orientation. This covers both orientation signs without strengthening [F1]. [F1, F2, step 1.1, step 2.1, construct]

4.1 If the link is empty, the same reflection argument applies directly to $S^3$. By [F2] its surgery result is $S^3$, and the empty diagram is an allowed presentation of the standard oriented $S^3$. Together with step 3.1 this proves the claim. [F2, step 3.1] ∎
