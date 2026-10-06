---
id: lem-orientation-reversal-is-inverse-in-theta-n
kind: lemma
title: "Orientation reversal is the connected-sum inverse"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-homotopy-sphere, def-h-cobordism, def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-seifert-van-kampen-simply-connected-overlap, thm-whitehead-theorem, def-relative-fundamental-class-and-boundary-orientation, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, lem-relative-hurewicz-comparison-through-a-choice-free-weak-model, def-countable-choice, lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 505-507, Lemma 2.4 and the inverse operation in the group of homotopy spheres"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the puncture and two-disk construction for homotopy spheres"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge5$ and every oriented smooth homotopy
$n$-sphere $\Sigma$, the connected sum $\Sigma\#(-\Sigma)$ is oriented
h-cobordant to $S^n$.

## Facts & Assumptions

**Given:** An oriented smooth homotopy $n$-sphere $\Sigma$, $n\ge5$, a smoothly embedded disk $D^n\subseteq\Sigma$ and the opposite orientation $-\Sigma$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] The punctured manifold $P=\Sigma\setminus\operatorname{int}D^n$ is compact with boundary $\partial P=S^{n-1}$; the pair sequence of $(\Sigma,P)$ with excision to $(D^n,S^{n-1})$ and van Kampen along the collar show $P$ is simply connected and has the integral homology of a point, and a compact smooth manifold with a finite CW model and such homology is contractible by the simply connected homology Whitehead criterion ([[def-smooth-homotopy-sphere]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-excision-for-singular-homology]], [[cor-seifert-van-kampen-simply-connected-overlap]], [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]], [[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]], [[thm-whitehead-theorem]]); the finite-model homology criterion is derived in [L2] of [[lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere]].

[L2] An h-cobordism is a compact smooth cobordism triad whose two face inclusions are homotopy equivalences; orientation is additional data, not part of that definition ([[def-h-cobordism]]). Under $\mathrm{AC}_\omega$, smooth boundary collars exist ([[thm-collar-neighborhood-theorem]], [[def-smooth-collar-of-a-manifold-boundary]]).

[L3] The relative fundamental class of a compact oriented manifold with boundary restricts to the local orientation and satisfies $\partial[V,\partial V]=[\partial V]$ for the induced boundary orientation ([[def-relative-fundamental-class-and-boundary-orientation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the punctured homotopy sphere $P=\Sigma\setminus\operatorname{int}D^n$ is a compact contractible smooth $n$-manifold with boundary $\partial P=S^{n-1}$. [L1, A1]

2.1 Round $P\times[0,1]$ explicitly in the collars of [L2]. Near either corner, let $s,t\ge0$ be the two inward coordinates and put $w=s-t$, $z=s+t$, so the quadrant is $z\ge|w|$. Choose a smooth convex function $g(w)\ge|w|$ equal to $|w|$ outside a small interval (convolve $|w|$ with a nonnegative even smooth kernel of integral one and small compact support). Replace $z\ge|w|$ by $z\ge g(w)$, using the same profile over $\partial P$ and disjoint neighborhoods at the two ends. The graph is smooth and agrees with the faces away from the corner, so the retained region $V$ is a compact smooth manifold with boundary. The homotopy $z\mapsto z+u\max\{0,g(w)-z\}$, $0\le u\le1$, extended by the identity, retracts the original product onto $V$; its support stays inside the chosen collar. Thus $V$ is contractible. Its boundary joins two shortened copies of $P$ by the boundary collar cylinder, hence is the double of $P$, namely $\Sigma\#(-\Sigma)$; collar reparametrizations identify the shortened copies with $P$. Choose the orientation of $V$ so the first copy has the orientation of $\Sigma$; the other copy then has the opposite orientation. [step 1.1, L2, construct]

3.1 Remove from $V$ the interior of a small smoothly embedded $(n+1)$-disk meeting only the interior, obtaining the compact oriented manifold $C$ whose boundary has the face $\Sigma\#(-\Sigma)$ and a standard sphere face $S^n$. [step 2.1, L2]

4.1 Using collar thickenings, excision identifies $H_*(C,S^n)$ with $H_*(V,D^{n+1})=0$ because $V$ and the disk are contractible, so the inclusion $S^n\to C$ is an integral homology isomorphism; the boundary relation of [L3] gives $[\Sigma\#(-\Sigma)]+[S^n]=0$ in $H_n(C)\cong\mathbb Z$, so the other face inclusion also induces an isomorphism on $H_n$ and hence on all reduced homology, since $C$ has the homology of a point in intermediate degrees. [step 3.1, L3]

5.1 Van Kampen applied after reattaching the removed disk shows $\pi_1(C)=\pi_1(V)=0$, and both faces are simply connected: $\Sigma\#(-\Sigma)$ by the connected-sum lemma and $S^n$ for $n\ge5$. [step 4.1, L1, L2]

6.1 The compact smooth manifold $C$ has a finite CW model by [L1]'s finite-CW clause, so the simply connected homology Whitehead criterion upgrades both face inclusions to homotopy equivalences; hence $C$ is an h-cobordism from $S^n$ to $\Sigma\#(-\Sigma)$, proving that orientation reversal is the inverse. [step 5.1, L1, L2] ∎
