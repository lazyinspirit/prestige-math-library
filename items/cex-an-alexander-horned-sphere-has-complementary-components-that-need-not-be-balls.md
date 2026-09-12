---
id: "cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls"
kind: "counterexample"
title: "A horned sphere has complementary components that need not be balls"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-jordan-brouwer-separation","def-axiom-of-choice","lem-horn-replacement-block-has-injective-commutator-meridian","lem-controlled-nested-horn-construction-embeds-a-closed-three-ball","thm-seifert-van-kampen","prop-fundamental-groups-of-punctured-euclidean-spaces","cor-geometric-unit-circle-has-fundamental-group-z","prop-retracts-inject-fundamental-groups","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 2B.2 pp170–172; explicit geometric
        and inverse-control suppliers supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. There is a topological embedding $S^2\hookrightarrow S^3$, an Alexander horned sphere $\Sigma$, for which $S^3\setminus\Sigma$ has exactly two components, as required by Jordan–Brouwer, but one component is not simply connected and hence is not homeomorphic to an open $3$-ball. The other component is an open $3$-ball. Thus separation alone does not imply that both components are balls. AC is used in the stated construction and Jordan–Brouwer suppliers, with the precise uses identified below.

## Facts & Assumptions

[F1] [[thm-jordan-brouwer-separation]] gives exactly two complementary components for an embedded $S^2\subset S^3$, under AC. These are path components and have the sphere as common boundary.

[F2] [[def-axiom-of-choice]] is assumed, for recursive finite-map selections and invariance of domain in [F4], and for the duality route in [F1].

[F3] [[lem-horn-replacement-block-has-injective-commutator-meridian]] supplies the marked once-punctured-torus block. For the actual collared insertion, if the old parent meridian belongs to a specified free exterior basis, its inclusion-induced homomorphism replaces that generator by the child commutator and is injective, fixing the other generators. It also supplies the transported child meridians and their future slices.

[F4] [[lem-controlled-nested-horn-construction-embeds-a-closed-three-ball]] supplies decreasing compact $X_n\subset\mathbb R^3$ starting at a standard unknotted torus, their intersection $B=f(D)$ for a proved embedding of a closed $3$-ball, and $\partial B=f(\partial D)\cong S^2$. Its finite construction checks the actual annular collars, cap-only intersections and meridian transport needed by [F3]; its proof includes inverse control, not just uniform convergence.

[F5] [[thm-seifert-van-kampen]] computes the fundamental group of a path-connected open two-set cover as the pushout of the two factor groups over the path-connected overlap group, using inclusion-induced homomorphisms.

[F6] [[prop-fundamental-groups-of-punctured-euclidean-spaces]] gives path connectedness and trivial fundamental group for punctured $\mathbb R^3$, at every basepoint.

[F7] [[cor-geometric-unit-circle-has-fundamental-group-z]] identifies the positively oriented geometric circle loop with $1\in\mathbb Z$. [[prop-retracts-inject-fundamental-groups]] transfers this identification through a supplied deformation retraction.

[F8] [[thm-heine-borel-rn]] makes closed bounded Euclidean sets compact, including closed parameter disks. [[thm-compact-subset-of-a-hausdorff-space-is-closed]] makes their continuous images closed in Hausdorff spaces. Compactness of a continuous image follows by pulling back covers.

## Refutation

**Given:** We construct the embedded sphere and a specific nontrivial exterior meridian. All exteriors below exclude the closed finite sets, not just their interiors.

1.1 First prove the puncturing fact needed twice below. If $W$ is a connected Hausdorff $3$-manifold without boundary and $p\in W$, its coordinate balls are path connected. Thus its path components are open, and connectedness makes $W$ path connected. For two points distinct from $p$, choose a path between them and a small closed coordinate ball about $p$ contained in a chart and avoiding both endpoints. If the path meets a still smaller concentric closed ball, its closed preimage in $[0,1]$ has first and last points, by compactness in [F8]. Their images lie on the boundary sphere, since the endpoints of the whole path lie outside the ball. Replace the intervening segment by a path on that sphere. Such paths are explicit normalized straight segments between non-antipodal points; for antipodal points insert a unit vector off their line and concatenate. The replacement, as well as the earlier and later path portions, misses $p$. If the smaller ball is never met, the original path already misses $p$. Thus $U=W\setminus\{p\}$ is path connected. [F8, given]

2.1 Take an open coordinate ball $V\subset W$ centered at $p$. The sets $U,V$ are open, cover $W$, and are path connected by step 1.1 and convex coordinates. Their overlap is a punctured open ball, homeomorphic to punctured $\mathbb R^3$ by the radial map $x\mapsto x/(r-|x|)$ for a radius-$r$ ball. Hence it is path connected with trivial fundamental group by [F6]. The ball $V$ contracts linearly to any chosen basepoint, so its fundamental group is trivial. By [F5] the inclusion $U\hookrightarrow W$ induces an isomorphism on fundamental groups, initially based in $U\cap V$: the pushout of $G$ and the trivial group over the trivial group is $G$, as the universal property verifies. For any other prescribed basepoint in $U$, choose a path to the overlap. Conjugating loops by that path changes basepoint and commutes with inclusion; the reversed path gives its inverse since a path followed by its reverse contracts by linear retracing of its parameter. Thus inclusion induces the same isomorphism at every basepoint of $U$. This proves both directions of the puncturing comparison, rather than just surjectivity. [F5, F6, step 1.1]

3.1 In $S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$ take $X_0=\{|z|\le1/\sqrt2\}$. The parametrization $(z,u)\mapsto(z,u\sqrt{1-|z|^2})$ identifies it with a closed disk times $S^1$. Its spherical exterior $W_0=\{|z|>1/\sqrt2\}$ has coordinates $(u,w)\mapsto(u\sqrt{1-|w|^2},w)$ with $u\in S^1$, $|w|<1/\sqrt2$. Contracting the open disk factor to a chosen small positive real $w_0$ is a deformation retraction onto that circle, so [F7] gives $\pi_1(W_0)\cong\mathbb Z$. Choose the point at infinity to be $(1,0)\in W_0$ and the loop $\mu(t)=(\sqrt{1-w_0^2}e^{2\pi it},w_0)$, which avoids it. This loop is exactly a meridian of $X_0$ pushed into the exterior: varying the $z$ phase goes around the boundary of the disk factor at fixed $w$ phase, and decreasing $|w|$ slightly pushes it outside the torus. It represents $1$ under the retraction calculation. The puncturing result in step 2.1 shows it is a generator of $\pi_1(W_0\setminus\{\infty\})$. Stereographic projection, with the explicit inverse used in [F3], identifies this with the Euclidean exterior $E_0=\mathbb R^3\setminus X_0$. Dilate the compact image of $X_0$ to diameter at most one. This changes none of these groups or meridian markings and supplies the initial torus permitted by [F4]. [F3, F4, F7, F8, step 2.1]

4.1 Perform [F4]'s exact recursion with this initial meridian and a root meridional slice at the chosen $w$ phase. Set $E_n=\mathbb R^3\setminus X_n$. Inductively its fundamental group is free on the terminal meridians, initially the singleton basis $\{\mu\}$ by step 3.1, and it is path connected. To pass to the next level, process its finitely many disjoint slices lexicographically. The old annular generator is the corresponding pushed torus meridian in those slice coordinates, with its previously chosen whisker. [F4] checks the actual two-sided collar, the cap-only intersection with the remainder, and the preservation of old exterior paths. Hence all hypotheses of [F3], including the free-basis hypothesis furnished by this induction, apply. Its new group is free on the retained generators together with the two new child meridians, and the actual inclusion fixes the retained generators and sends the parent to their marked commutator. The same collared cover preserves path connectedness. The next prepared child slices have these same meridians and transported paths, so the induction continues. Composing the finitely many injective homomorphisms from [F3] proves that each $\pi_1(E_n)\to\pi_1(E_{n+1})$ is injective. Its reduced-word proof covers empty retained alphabet, powers of one generator, inversions, and recorded whisker conjugations; no abelian linking invariant is substituted for it. In particular the fixed loop $\mu\subset E_0$ represents a nonidentity element in every $\pi_1(E_n)$. [F3, F4, step 3.1]

5.1 Let $B=\bigcap_nX_n=f(D)$ as in [F4], and $E=\mathbb R^3\setminus B$. The $E_n$ are increasing open sets with union $E$: failure to belong to the intersection means failure at some finite index. Each contains $E_0$, so their union is path connected by step 4.1; any two points lie together in some $E_n$. If $\mu$ had a based nullhomotopy in $E$, its continuous image from $[0,1]^2$ would be compact by [F8]. The open cover by all $E_n$ would have a finite subcover, and its largest index would contain the entire nullhomotopy. This contradicts step 4.1. The same reasoning applies to any proposed contracting disk. Thus $\pi_1(E,\mu(0))$ is nontrivial. The first commutator substitution has zero abelianization, which explains why a linking-number obstruction would not establish this conclusion. [F4, F8, step 4.1]

6.1 Put $\Sigma=\partial B=f(\partial D)$, the embedded two-sphere furnished by [F4], now regarded inside $S^3$. There is a disjoint partition $$S^3\setminus\Sigma=f(\operatorname{int}D)\ \sqcup\ W,\qquad W=S^3\setminus B.$$ Both sets are open and nonempty: [F4] identifies $f(\operatorname{int}D)=\operatorname{int}B$, and $W$ contains infinity. The first is path connected and homeomorphic to an open ball. For the latter assertion, the radial ball parametrization in [F4] maps interiors to interiors by its explicit radial formula. Also $W=E\cup\{\infty\}$ is path connected: $E$ is path connected by step 5.1, and a coordinate ball about infinity missing the compact $B$ meets $E$ and joins infinity to it. By [F1] there are exactly two components of $S^3\setminus\Sigma$, so these two nonempty path-connected pieces are precisely them. The open set $W$ is a connected Hausdorff $3$-manifold. Apply step 2.1 with $p=\infty$ to obtain the inclusion-induced isomorphism $\pi_1(E,\mu(0))\cong\pi_1(W,\mu(0))$. By step 5.1 this group is nontrivial. An open $3$-ball contracts linearly to any basepoint, so every based loop contracts there; a homeomorphism transfers such a contraction. Therefore $W$ is not an open $3$-ball, proving the failed conclusion for the promised spherical complement. [F1, F4, step 2.1, step 5.1]

7.1 All finite exteriors and both final components are nonempty; the meridian is nontrivial already at stage zero, and injectivity preserves its nonzero powers. The sphere embedding, including its boundary points, is established by the finite inverse-control proof in [F4], not by a drawing or a limit of injective maps alone. The point at infinity was treated by a proved isomorphism, not by assuming that adding one point preserves fundamental groups. The only AC uses are those of [F2]: compatible recursive map selection and invariance of domain in [F4], and the duality hypothesis in [F1]. The finite group calculations and single compact-nullhomotopy argument require no further choice. This gives the witness and the exact failed ball conclusion while preserving the two-component separation conclusion. [F1, F2, F4, step 3.1, step 4.1, step 5.1, step 6.1] ∎
