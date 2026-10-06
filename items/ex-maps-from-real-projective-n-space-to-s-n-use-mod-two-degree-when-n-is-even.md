---
id: ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even
kind: example
title: Maps from even projective space to the sphere use mod-two degree
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- thm-hopf-mod-two-degree-classification-for-nonorientable-domains
- def-mod-two-degree-of-a-map-to-a-sphere
- lem-mod-two-degree-is-well-defined-and-homotopy-invariant
- lem-every-integer-degree-is-realized-by-a-map-to-the-sphere
- lem-real-projective-space-cellular-homology-and-pinch-map
- ex-real-projective-space-is-orientable-exactly-in-odd-dimension
- ex-real-projective-space-from-affine-charts
- def-real-projective-bundle-and-tautological-line
- def-euclidean-spheres-and-closed-balls
- cor-euclidean-closed-balls-and-spheres-are-compact
- def-smooth-manifold
- def-homotopy-relative-and-path-homotopy
- def-regular-and-critical-points-and-values
- def-countable-choice
- thm-heine-borel-rn
- thm-compactness-under-continuous-maps
- thm-compact-subset-of-a-hausdorff-space-is-closed
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(ii) and the nonorientable frame-bundle argument, printed pp.23-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the nonorientable Hopf theorem, printed p.51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 2, Section 4, the projective-space examples of mod-two degree, printed pp.82-84
---
## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $n\ge2$ be even. Then $\mathbb{RP}^n$ is a closed connected nonorientable
smooth $n$-manifold, and the collapse map
$q:\mathbb{RP}^n\to\mathbb{RP}^n/\mathbb{RP}^{n-1}\cong S^n$ has mod-two
degree $1$. The smooth representative $\widetilde q$ constructed below has $y_-=(0,\ldots,0,-1)$ as a regular value with the single preimage $\pi(0)$. The quotient map $q$ itself is continuous; it is not asserted to be globally smooth.
Constant maps have mod-two degree $0$. Consequently $[\mathbb{RP}^n,S^n]\cong
\mathbb Z/2$, with the two classes represented by $q$ and by a constant map,
and the mod-two degree is a complete invariant of free homotopy classes; no
integer degree is available because $\mathbb{RP}^n$ is nonorientable.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an even integer $n\ge2$, real projective space $\mathbb{RP}^n=S^n/(x\sim-x)$ with its quotient topology and standard smooth structure, the unit sphere $S^n\subseteq\mathbb R^{n+1}$ with its smooth structure, and the classical pinch $c:D^n\to S^n$, $c(x)=(2x\sqrt{1-\lVert x\rVert^2},\,2\lVert x\rVert^2-1)$ ([[ex-real-projective-space-from-affine-charts]], [[def-euclidean-spheres-and-closed-balls]], [[def-real-projective-bundle-and-tautological-line]]).

[F1] $\mathbb{RP}^n$ has a CW structure with one cell in each dimension $0,\dots,n$; the top cell is $D^n$ attached along $\partial D^n\to\mathbb{RP}^{n-1}$, so $\mathbb{RP}^n$ is compact and connected, and $\mathbb{RP}^n$ is orientable exactly when $n$ is odd ([[lem-real-projective-space-cellular-homology-and-pinch-map]], [[ex-real-projective-space-is-orientable-exactly-in-odd-dimension]], [[ex-real-projective-space-from-affine-charts]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F2] The pinch $c$ is continuous, equals $N=(0,\dots,0,1)$ on $\partial D^n$, and restricts to a bijection $c:\operatorname{int}D^n\to S^n\smallsetminus\{N\}$ with explicit inverse $y=(y',t)\mapsto y'/(2\sqrt{(1-t)/2})$ for $t<1$, including $t=-1$ where it gives $0$; hence $c$ induces a continuous bijection $D^n/\partial D^n\to S^n$ between compact Hausdorff spaces, which is a homeomorphism. Consequently the top-cell quotient gives $\mathbb{RP}^n/\mathbb{RP}^{n-1}\cong D^n/\partial D^n\cong S^n$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]). The closed disk and its product with $I$ are compact by Heine–Borel; a continuous surjection from a compact space to a Hausdorff space is closed and hence quotient, since images of closed subsets are compact and therefore closed ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F3] Use the specific model of Proof steps 1.1–3.1 in [[lem-every-integer-degree-is-realized-by-a-map-to-the-sphere]], whose Statement names that construction. Its smooth profile $\chi:\mathbb R\to[0,1]$ equals $1$ on $[-1/2,1/2]$ and vanishes outside $(-3/4,3/4)$. With $W(s)=1-\chi(s)^2(1-s)$, one has $W(s)=s$ for $0\le s\le1/2$, $W(s)=1$ for $s\ge3/4$, and $0<W(s)\le1$ for $s>0$. For $s=|x|^2$ with $0<s<1$, the model is $F(x)=(2\sqrt{W(s)(1-W(s))/s}\,x,\,2W(s)-1)$; at $0$ it is $y_-=(0,\ldots,0,-1)$, and for $s\ge1$ it is $N$. The construction proves that $F$ is smooth, $F=N$ for $s\ge3/4$, $F^{-1}(y_-)=\{0\}$, and $dF_0(v)=(2v,0)$ is invertible as a map to $T_{y_-}S^n$.

[F4] The mod-two degree is well defined, homotopy invariant, and defined on free homotopy classes of continuous maps; for a smooth map with a regular value of one preimage it equals $1$ ([[def-mod-two-degree-of-a-map-to-a-sphere]], [[lem-mod-two-degree-is-well-defined-and-homotopy-invariant]], [[def-regular-and-critical-points-and-values]]).

[F5] For a closed connected nonorientable smooth $n$-manifold $M$ with $n\ge1$, $\deg_2$ induces a bijection $[M,S^n]\to\mathbb Z/2$, both values realized ([[thm-hopf-mod-two-degree-classification-for-nonorientable-domains]], [[def-homotopy-relative-and-path-homotopy]], [[def-smooth-manifold]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], and because $n$ is even, $\mathbb{RP}^n$ is a compact connected nonorientable smooth $n$-manifold with the affine-chart structure. Parametrize its top-cell attachment by $\pi(x)=[x:\sqrt{1-|x|^2}]$ for $x\in D^n$. On the interior, the last-coordinate affine chart gives $u=x/\sqrt{1-|x|^2}$, with smooth inverse $x=u/\sqrt{1+|u|^2}$, so $\pi$ restricts to a diffeomorphism onto the open top cell. On the boundary $\pi(x)=[x:0]$ is the antipodal attachment onto $\mathbb{RP}^{n-1}$. In particular $\mathbb{RP}^n$ is nonempty and has no boundary. [F1, given]

1.2 The continuous collapse map $q:=\bar c\circ Q$ is well defined and continuous, where $Q:\mathbb{RP}^n\to\mathbb{RP}^n/\mathbb{RP}^{n-1}$ is the quotient map and $\bar c$ is the homeomorphism $\mathbb{RP}^n/\mathbb{RP}^{n-1}\to S^n$ induced by $c$ through [F2]; equivalently $q\circ\pi=c$ on $D^n$, and $\bar c$ is the homeomorphism of [F2], so the identification of the quotient with $S^n$ is exactly the one exhibited by the classical pinch. [F2, given]

2.1 The model $F$ is constant $N$ for $|x|^2\ge3/4$. Thus $\widetilde q(\pi(x))=F(x)$ is well defined: only boundary points of $D^n$ are identified, and $F$ has the same value on them. It is smooth on the open cell because $\pi$ is a local diffeomorphism there; near the lower skeleton it is constant, since the closed smaller disk $|x|^2\le3/4$ has image disjoint from that skeleton. To exhibit a homotopy from $c$ to $F$ relative to $\partial D^n$, write $s=|x|^2$, let $W(s)=1-\chi(s)^2(1-s)$ be the profile of [F3], and set $W_\tau(s)=(1-\tau)s+\tau W(s)$. For $x\ne0$ define $C_\tau(x)=(2\sqrt{W_\tau(s)(1-W_\tau(s))/s}\,x,\,2W_\tau(s)-1)$, and set $C_\tau(0)=y_-$. This is continuous jointly in $x,\tau$: near $s=0$ one has $W_\tau(s)=s$, and elsewhere $s>0$ the displayed square root is continuous and nonnegative. Its norm is one, $C_0=c$, $C_1=F$ because $\chi\ge0$, and for $s=1$ it is always $N$. The map $\pi\times\mathrm{id}_I:D^n\times I\to\mathbb{RP}^n\times I$ is a quotient map by [F2], since its source is compact and its target Hausdorff. Thus this family, constant on its fibres, descends continuously to a homotopy $q\simeq\widetilde q$. No radial diffeomorphism or homeomorphism assertion about $F$ is needed. [F2, F3, step 1.1, step 1.2, construct]

3.1 The point $y_-=F(0)$ is a regular value of $\widetilde q$ with the single preimage $\pi(0)$: $\widetilde q(\pi(x))=F(x)=y_-$ forces $x=0$ by [F3], the differential satisfies $d\widetilde q_{\pi(0)}=dF_0\circ(d\pi_0)^{-1}$ by step 1.1, hence is invertible, and points of $\mathbb{RP}^n$ outside the image of the interior of the disk have value $N\ne y_-$; therefore $\deg_2(\widetilde q)=1$ by [F4]. [F3, F4, step 1.1, step 2.1]

4.1 Since $\widetilde q$ is homotopic to $q$, [F4] gives $\deg_2(q)=\deg_2(\widetilde q)=1$; a constant map has an empty regular fibre over any other value, so its mod-two degree is $0$, and the two values of $\mathbb Z/2$ are realized. By [F5] applied to the nonorientable manifold $\mathbb{RP}^n$, the mod-two degree is a bijection $[\mathbb{RP}^n,S^n]\to\mathbb Z/2$, so the classes of $q$ and of the constant map are the two classes and no integer degree is available for $\mathbb{RP}^n$. [F1, F4, F5, step 1.2, step 3.1] ∎
