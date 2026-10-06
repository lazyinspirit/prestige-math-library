---
id: lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range
kind: lemma
title: Frame fields with prescribed boundary conditions along a clean Whitney disk
deps:
- def-countable-choice
- lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected
- thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
- thm-relative-whitney-approximation-for-manifold-valued-maps
- lem-opposite-local-signs-give-the-compatible-whitney-circle-framing
- def-whitney-disk-and-clean-framed-whitney-disk
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
- thm-gram-schmidt-orthonormalisation
- thm-heine-cantor-metric
- thm-weak-whitney-proper-embedding-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Lemma 6.13 and the completion of the proof of Lemma 6.7, printed pp. 80-84 (construction of the orthonormal
      fields $E_1,\dots,E_{r-1}$ and $\eta_1,\dots,\eta_{s-1}$ with the stated tangency/normality boundary conditions,
      using that the relevant Stiefel manifold is simply connected when $s\ge3$)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed p. 140 (the residual obstruction to extending the splitting lies in
      $\pi_1(O(2(n-1)))=\mathbb Z_2$ and is killed because $\pi_1(O(n-1))\to\pi_1(O(2(n-1)))$ is onto for $n\ge3$)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
---

## Statement

(i) For $1\le k<N$, $V_k(\mathbb R^N)$ is path connected and $(N-k-1)$-connected: every based map $S^j\to V_k(\mathbb R^N)$ is based nullhomotopic for $1\le j\le N-k-1$. (ii) Assume $\mathrm{AC}_\omega$. Let $W$ be a clean Whitney bigon for complementary locally oriented sheets of dimensions $a,b\ge3$, with opposite corner signs in an oriented tube. There is an admissible extendible normal frame consisting of mutually orthogonal fields $E_1,\ldots,E_{a-1}$ and $H_1,\ldots,H_{b-1}$. Along the $A$ arc $E$ is tangent to $A$; along the $B$ arc $E$ is normal to $B$ and $H$ is tangent to $B$. The complementary $H$ frame is chosen after extending $E$, so orthogonality is preserved throughout. Corner values may be fixed compatibly, but no arbitrary full boundary-frame class is prescribed.

## Facts & Assumptions

[F1] Gram–Schmidt orthonormalizes a finite independent list and preserves its successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F2] A continuous map from a compact metric space is uniformly continuous. [[thm-heine-cantor-metric]]

[F3] For $0\le j<d$, every based map $S^j\to S^d$ is based nullhomotopic, without choice. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F4] Opposite signs in locally oriented sheet collars give compatible adjustable admissible partial boundary frames. [[lem-opposite-local-signs-give-the-compatible-whitney-circle-framing]]

[F5] Real orthonormal frame spaces with complement rank at least two are simply connected. [[lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected]]

[F6] Under Countable Choice, continuous manifold-valued maps smooth near a closed set can be smoothed through a homotopy fixed near that set. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F7] A linear matrix initial-value problem with continuous coefficients has a unique solution on the prescribed compact interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F8] Jointly smooth finite-dimensional ODE coefficients give smooth local solution dependence on parameters; uniqueness permits composition along a compact solution interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F9] Under Countable Choice every smooth manifold has a proper finite-dimensional Euclidean embedding. [[thm-weak-whitney-proper-embedding-theorem]]

## Proof


**Given:** Ordered real orthonormal frames, and, for (ii), Countable Choice and the clean disk with its local orientations and fixed corner collars.

1.1 Path connectivity follows by finite plane rotations, as in the earlier local Stiefel lemma; the argument works whenever at least one complementary vector remains. We give a choice-free continuous complement construction over any compact ball. For a continuous orthogonal projection $P(z)$ of rank $q$, uniform continuity of $(t,z)\mapsto P(tz)$ gives a finite subdivision $0=t_0<\cdots<t_s=1$ such that $\lVert P(t_jz)-P(t_{j-1}z)\rVert<1/2$ for every $z$ and $j$. Start with an orthonormal basis of $\operatorname{im}P(0)$. At stage $j$, project the previous frame by $P(t_jz)$ and apply Gram–Schmidt. Projection is injective on $\operatorname{im}P(t_{j-1}z)$: a vector killed by the new projection would have norm at most half its norm. Thus the projected list is independent, its Gram–Schmidt denominators are nonzero, and the new frame varies continuously with $z$. Finitely many stages produce a continuous global frame of $\operatorname{im}P(z)$, without smoothing or a family of choices. [given, construct, algebra, F1, F2]

2.1 Fix $1\le j<N-k$ and induct on $k$, simultaneously in all allowed ambient dimensions. For $k=1$, the sphere-map supplier fills a map $S^j\to S^{N-1}$ over $D^{j+1}$ because $j<N-1$. For a map $S^j\to V_k(\mathbb R^N)$ with $k>1$, fill its first column by the same sphere result and take the continuous projection onto its orthogonal complement. Step 1.1 gives a continuous complementary frame over the ball. Express the remaining boundary columns in that frame, obtaining a map $S^j\to V_{k-1}(\mathbb R^{N-1})$; the complement rank remains $N-k$. Induction fills it, and recombination fills the original map. Contract the ball to its marked boundary point to get a based nullhomotopy. This proves (i) without choice. [step 1.1, construct, F3]

3.1 For (ii), the compatible-framing lemma supplies a boundary $(a-1)$-frame $E$ tangent to $A$ along its arc and normal to $B$ along the other. Here is the needed smooth trivialization, proved directly. Embed $X$ in Euclidean space by [F9] and represent its disk-normal subbundle there; let $P(z)$ be the Euclidean orthogonal projection onto that subbundle in convex bigon coordinates centered at an interior point. For $Q(t,z)=P(tz)$ solve $\partial_tU=[\partial_tQ,Q]U$, $U(0,z)=I$, by [F7]. The coefficient $K=[\partial_tQ,Q]$ is skew symmetric and $[K,Q]=\partial_tQ$, obtained by differentiating $Q^2=Q$. Thus $U^TU=I$ and uniqueness gives $U(t,z)P(0)U(t,z)^T=Q(t,z)$. Transport a basis at the centre and apply [F1] in the chosen disk-normal metric. This is a smooth full normal frame: [F8] gives smooth dependence on $z$ along the compact interval, including smooth local extensions at corners. In that trivialization $E$ is a loop in $V_{a-1}(\mathbb R^{m-2})$. The complement rank is $(m-2)-(a-1)=b-1\ge2$, so the earlier local Stiefel lemma extends it over the disk. Attach the prescribed smooth collar to a filling of its inner loop, then smooth the extension by [F6] relative to a smaller collar, using its extension to a plane neighbourhood at the corners. [step 2.1, construct, algebra, F1, F4, F5, F6, F7, F8, F9]

4.1 Now take the projection onto the orthogonal complement of the extended $E$ within the disk normal bundle. It is a smooth rank-$(b-1)$ projection. Apply the projection transport just proved in step 3.1 to this complementary subbundle and orthonormalize in the chosen metric; it supplies a smooth global frame $H$. On the $B$ arc the subspace is exactly the tangent-to-$B$ part orthogonal to the disk, because $E$ is normal to $B$. Thus $H$ satisfies the required sheet tangency automatically. For any two compatible corner values, compare them with this frame in $SO(b-1)$, join the two comparison matrices by a smooth path, and compose it with a smooth scalar function on the disk constant at the respective corner collars. Multiplying $H$ by this disk-wide block map realizes both values while preserving its subspace and orthogonality. Along the other arc there is no additional prescribed $H$ class. Therefore $E,H$ is an admissible extendible full frame, proving (ii). Extending two independently prescribed partial frames would not ensure mutual orthogonality; the construction instead fixes $E$ first and takes its complement. [step 3.1, construct, F1, F7, F8] ∎
