---
id: lem-marked-knot-isotopies-admit-protected-reidemeister-movies
kind: lemma
title: Marked knot isotopies admit protected Reidemeister movies
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-isotopy-extension
  - lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Queffelec, Reidemeister's theorem using transversality
      url: https://arxiv.org/pdf/2406.18203v1
      locator: Sections3.1–3.6 supply the finite-jet projection method; relative marked-strip normalization is supplied below.
dependency_level: 3
---

## Statement

Assume countable choice. Let $F:S^1\times[0,1]\to S^3$ be a smooth isotopy of oriented knots, stationary in end collars, with a specified marked source point. Suppose its two endpoint diagrams are regular compatible long presentations with the same standard oriented exterior marked arc, parametrized identically on a neighborhood of that point. Use the corresponding spatial endpoint coordinates, in which this common marked arc is a standard small round arc through the stereographic point at infinity; its puncture is closed in the planar diagrams by the same standard exterior arc. Then these prescribed endpoint diagrams are related by a finite sequence of planar isotopies and oriented R1, R2 and R3 moves, whose closed support disks miss the mark. The marked neighborhood remains fixed. There are no births, saddles or deaths. The movie represents the given marked isotopy up to a spatial coordinate family equal to the identity in both end collars and a small isotopy relative those collars.

Here compatible long endpoints include the displayed common oriented arc and its spatial coordinate identifications. This statement does not silently identify arbitrary physical endpoint coordinates. Spherical endpoint recharting may first be used to choose such common compatible presentations; no algebraic invariance of that recharting or of these movies is asserted here.

## Statement references

[[lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark|Relative long-tangle construction]]

## Facts & Assumptions

**Given:** The marked knot isotopy and the specified common parametrized marked arc and endpoint coordinates in the Statement.

[A1] [[def-countable-choice]] is assumed for the smooth extension and generic projection suppliers.

[F1] [[thm-isotopy-extension]] proves extension for compact sources with boundary. Its proof extends the prescribed velocity in finitely many track charts, multiplies by cutoffs, and integrates a smooth compactly supported field. The same construction with an extra compact parameter is smooth in that parameter, since the chart extensions and cutoffs can be chosen on the compact total track; it is zero at parameter values where the prescribed velocity is identically zero.

[F2] [[lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark]] constructs product strip coordinates and compact long-tangle projections in its steps 3.1–4.1, and its step 6.1 repeats the independent-jet genericity proof relative the protected exterior arc. Its earlier four-dimensional arc straightening and its Morse perturbation are unnecessary for an already levelwise knot isotopy.

[F3] [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]] proves actual independent-jet evaluation, exclusion of higher events, and finiteness including deleted diagonals. [[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]] identifies the isolated generic events as oriented R1, R2 and R3.

## Proof

1.1 **Small marked arcs and their relative center–tangent data.** Parametrize a uniformly small marked interval by oriented arclength $v$ near zero, smoothly in the isotopy parameter $t$; the resulting reparametrization changes neither knot nor mark and is stationary in the end collars. Let $b(t)=F(0,t)$ and let $u(t)$ be its unit tangent. Identify $S^3$ with unit quaternions. The imaginary unit quaternion $c(t)=b(t)^{-1}u(t)$ lies in $S^2$, and $(b(t),c(t))$ is a smooth loop in $S^3\times S^2$, constant in the end collars. The two endpoint marked arcs are the same by hypothesis. In exponential coordinates at $b(t)$ the small actual arc has the form $vu(t)+O(v^2)$, with derivative $u(t)+O(v)$ uniformly in $t$. Interpolating its error to zero gives a smooth family of embedded intervals for a sufficiently small uniform width: projection onto $u(t)$ has strictly positive derivative. This interpolation is stationary in the end collars if their common model is taken to be the geodesic round arc, as stipulated. Its inverse will later restore the actual marked germ. [given, construct]

2.1 **An explicit contraction fixes both parameter ends.** A smooth loop in either $S^d$, $d=2,3$, misses a point. Indeed a derivative bound makes its $n$ equal parameter intervals map into $n$ balls of radius $C/n$; their total spherical $d$-volume is at most $C'n^{1-d}$, which tends to zero. They cannot cover the positive-volume sphere. Choose one omitted point for each of the two loops from step 1.1. Stereographic coordinates from those points send each loop into Euclidean space. The straight interpolation from its constant endpoint value to its value at $t$ contracts it through loops constant on the same end collars; inverse stereographic projection gives smooth loops $b_s(t),c_s(t)$, with $s=0$ constant and $s=1$ the given data. Thus $$A_{s,t}(v)=b_s(t)\bigl(\cos v+c_s(t)\sin v\bigr)$$ is a smooth family of geodesic marked interval embeddings, with $A_{0,t}$ the common standard arc and $A_{s,t}$ equal to it in both end collars. Concatenate with the inverse error interpolation in step 1.1, using stationary smooth parameter joins. This constructs a two-parameter family of embedded intervals from the constant common arc to the actual moving marked arcs; at $t$ in either end collar the entire family is the constant arc. [step 1.1, construct, algebra]

3.1 **Relative ambient coordinates really are identity at both ends.** Extend the velocity in the contraction parameter $s$ of step 2.1 by the actual construction in [F1], with $t$ an additional parameter. To spell out the relative point: the track in $S^3\times[0,1]_s\times[0,1]_t$ is embedded because its last two coordinates retain $s,t$ and each interval slice is embedded. In finite track charts extend the three spatial velocity components constantly in normal coordinates, patch by a smooth partition, and apply a compact cutoff equal to one on the smaller interval track. The prescribed velocity is zero on both $t$ end collars; choose all extended components zero there, using charts of the constant product arc on those collars and a cutoff in $t$ on their complement. Integrate in $s$. Uniqueness of the ODE gives a smooth family $H_t$ of orientation-preserving diffeomorphisms with $H_t(A_{0,t})$ the actual marked interval and $H_t=\mathrm{id}$ on both time end collars. Consequently $H_t^{-1}F_t$ is a knot isotopy retaining exactly the given endpoints and fixing one common marked interval for every $t$. This contraction argument is necessary: simply extending the moving interval in the parameter $t$ would not by itself force the terminal ambient map to be the identity. [A1, F1, step 2.1, construct]

4.1 **Puncture without changing height or endpoints.** Apply the product-strip and puncture construction of [F2] to this fixed common interval, with spatial coordinates independent of $t$. In a smaller neighborhood the knots agree with that interval for all $t$; compactness gives uniform separation from the rest after shortening it once. Puncturing at its central point gives an isotopy of compact long tangles, fixed on their two spatial end collars, closed by one fixed exterior arc carrying the mark. The spatial coordinate changes in step 3.1 were level-preserving, so its trace is still exactly a cylinder of knot embeddings with time coordinate $t$. In particular the restriction of time to this cylinder has nonzero derivative everywhere. There is no need for a Morse perturbation, and none is made. There is an explicit planar endpoint comparison if the displayed closed diagrams initially use a pole in the adjacent face rather than the spatial puncture at the mark. Write their common round compact projection disk as $D=\{|z|\le R\}$ and their common marked point as $p$, where $|p|>R$. Choose a small marked germ and $\delta>0$ so that its closed neighborhood misses $W=\{|z|<R+\delta\}$. Set $$b_u=\frac{uR^2}{\overline p},\qquad f_u(z)=\frac{z-b_u}{1-\overline b_u z/R^2},\qquad 0\le u\le1.$$ These are disk automorphisms, starting at the identity: on $|z|=R$ one has $|z-b_u|^2=R^2|1-\overline b_u z/R^2|^2$, and their inverse fractional linear maps have the same disk property. Their complex derivative has nonzero numerator $1-|b_u|^2/R^2>0$. Their pole is $p/u$, with infinity at $u=0$, so it stays outside $D$ and ends at the marked point. Thus $f_u|_D$ is an actual smooth isotopy of compact disk embeddings onto $D$, including $u=1$. It is an orientation-preserving coordinate chart on the punctured projection sphere. Its endpoint pole is the spatial puncture point; postcomposition by a positive planar similarity identifies it with a rotation-induced stereographic chart with that pole if such a chart is used for the spatial coordinates. One may instead retain this very chart in the puncture construction. Apply [F1] to $f_u|_D$ in the plane, with extension support in $W$. Its disk velocity is tangent to the boundary; the extension theorem for a compact source with boundary applies and gives an ambient plane isotopy $\Phi_u$ equal to $f_u$ on $D$ and identity outside $W$. Consequently it fixes the specified marked germ pointwise throughout. Choose the long closing arc to be $\Phi_1$ of the original common exterior arc. It is outside $D$, since $\Phi_1$ preserves $D$, and retains exactly the same marked germ. This supplies protected planar isotopies from the displayed endpoints to the punctured-and-reclosed endpoints; prepend and append those isotopies. For two normalized endpoints use the same $D,p,b_u,\Phi_u$ and closing arc. No arbitrary ambient extension or equality of different planar charts is being assumed: both the prescribed endpoint diagrams and their fixed marked germ are retained by the recorded relative extension. [F1, F2, step 3.1, construct]

5.1 **Relative finite projection genericity.** Repeat the family of [F3] on this compact tangle isotopy with bumps zero on smaller parameter end collars and spatial tangle-end collars. At every movable source point these bumps are positive, so the same finite monomial Hermite interpolation prescribes the required independent jets; its evaluations at protected source points are not needed. The exterior closing arc and the two joining collars have fixed regular projection, separated from the compact moving portion. Thus no bad projection stratum involving the protected mark is present. On the moving portion the cusp, tangent-double and triple equations, exclusions of their coincidences and higher degeneracies, and deleted-diagonal estimates are precisely those proved in [F3]. Arbitrarily small parameter choices give finitely many separated generic events relative the stationary endpoint diagrams. The perturbations change spatial coordinates of the slice embeddings only, so their trace remains a height-submersive cylinder. Straight interpolation between the original and sufficiently close perturbed slice maps is an embedding isotopy by the uniform local immersion and distant-pair separation bounds used in [F3]. It is fixed on every protected collar. [A1, F2, F3, step 4.1, construct]

6.1 The event identification in [F3] gives only oriented R1, R2 and R3 moves; between them the projected decorated diagrams vary by planar isotopy. Each exceptional event has compact support inside the projection disk and therefore misses the fixed marked exterior arc. The finite time list yields the required sequence. No surface critical point has been introduced, so births, saddles and deaths do not occur. Undoing $H_t^{-1}$ identifies its trace with the given marked isotopy, up to the small relative perturbation in step 5.1. Since $H_t$ is identity on both end collars, the spatial endpoint identifications are retained exactly; the explicitly recorded planar endpoint isotopies in step 4.1 return the displayed prescribed diagrams. This proves the stated relative comparison and no algebraic map assertion. [F1, F2, F3, step 3.1, step 4.1, step 5.1, construct] ∎
