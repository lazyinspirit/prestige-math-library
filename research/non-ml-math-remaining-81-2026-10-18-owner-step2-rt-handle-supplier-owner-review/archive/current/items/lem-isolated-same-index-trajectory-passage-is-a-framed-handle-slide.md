---
id: lem-isolated-same-index-trajectory-passage-is-a-framed-handle-slide
kind: lemma
title: "An isolated transverse same-index trajectory passage gives the framed band sum"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: ["def-axiom-of-choice", "thm-parametrized-implicit-function-theorem-with-higher-regularity", "thm-fundamental-theorem-on-flows", "thm-isotopy-extension", "def-handle-slide-of-one-k-handle-over-another", "lem-handle-slides-preserve-the-relative-diffeomorphism-type", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism"]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kerler, Bridged Links and Tangle Presentations of Cobordism Categories, §2.2.2"
      url: "https://arxiv.org/pdf/math/9806114"
---

## Statement

Assume full AC. Let $q$ be an index-$k$ Morse critical point in dimension $n$, $1\le k\le n-1$, with fixed local coordinates and descending field $f=c-|u|^2+|v|^2$, $X=(2u,-2v)$, for $(u,v)\in\mathbb R^k\times\mathbb R^{n-k}$. Let $p$ be a higher critical point of the same index. Suppose a one-parameter family of the descending attaching-sphere sections of $p$ passes through the stable section of $q$ once, at one point, and transversely in the following sense: its $k-1$ sphere-patch directions and its parameter direction map isomorphically onto the $k$ unstable directions at the event. Assume all remaining attaching data are disjoint from the chosen local passage region; retain the joining band, lower regular level, and normal framing, and assume no intervening critical point between that region and the chosen lower level.

The two framed attaching embeddings obtained by transporting below $q$, before and after this isolated passage, differ by the signed framed band sum with a parallel of the attaching sphere of $q$. For $k=1$ this replaces one foot by a parallel of the other foot of $q$ along the band. For $1\le k\le n-2$ this is the handle slide of the existing definition and preserves the relative diffeomorphism type with all later attaching maps carried along. In particular $n=4,k=2$ gives the framed-link slide. For $n=3,k=2$, only the stated local surface band sum with its supplied embedded band is asserted; no higher-codimension band-existence contract is imported. No generic-family existence or global trajectory-completeness assertion is made.

## Facts & Assumptions

**Given:** Full AC ([[def-axiom-of-choice]]), the exact Morse/field chart, the single transverse passage, the supplied band/framing, and the isolated support and regular lower transport hypotheses.

[F1] Smooth local inverses with parameters and smooth finite-time flow give the local section coordinates and transport of framed thickenings ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]], [[thm-fundamental-theorem-on-flows]]).

[F2] Compact embedding isotopies extend ambiently, and compatible seam roundings differ by supported isotopy ([[thm-isotopy-extension]], [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]).

[F3] For $1\le k\le n-2$, a slide is the signed framed band sum, and the preservation proof pushes a patch through the other handle's parallel core after attaching that handle; its supported diffeomorphism carries every later attaching embedding ([[def-handle-slide-of-one-k-handle-over-another]], [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]). This supplier does not cover $k=n-1$.

## Proof

**Given:** The data in the Statement, with sphere-patch variable $x$ and family parameter $s$.

1.1 Choose incoming and outgoing sections in the chart given respectively by $|v|=\epsilon$ with $|u|$ small and by $|u|=\epsilon$ with $|v|$ small. They are transverse to $X$. A trajectory entering with $(u_0,v_0)$, $u_0\ne0$, $|v_0|=\epsilon$, is  $u(t)=e^{2t}u_0,\qquad v(t)=e^{-2t}v_0.$  It exits when $e^{2t}=\epsilon/|u_0|$, so its exact exit point is  $P(u_0,v_0)=\left(\epsilon\frac{u_0}{|u_0|},\frac{|u_0|}{\epsilon}v_0\right).$ [given, F1, F2]

2.1 The singularity of this map is precisely the stable set $u_0=0$. By the transverse-event hypothesis, the map $U:(x,s)\mapsto u_0$, from the sphere patch coordinates $x\in\mathbb R^{k-1}$ and the family parameter $s$, has invertible derivative at zero. This does not itself permit replacing the parameter by a coordinate depending on $x$. Instead straighten the family by the following fiber-preserving local deformation. First choose a linear orthogonal change of the $u$ coordinates sending the image of $D_xU$ to the first $k-1$ coordinate directions. Reparametrize $x$ linearly, shift $x$ by a constant vector times $s$, and rescale or reverse $s$ by a nonzero constant, to put the derivative $DU(0,0)$ into the identity form. Now $U(x,s)=(x,s)+O((|x|+|s|)^2)$. In a sufficiently small fixed ball the straight interpolation to $(x,s)$ has derivative uniformly close to the identity, fixes zero, and has no other zero; one can insert a cutoff in a slightly larger ball without losing those properties. It is therefore a deformation through exactly one transverse event, with the original parameter slices still designated by $s$. At either nonzero endpoint parameter it induces an isotopy of the outgoing patch, since $u_0\ne0$ there. Its remaining entry coordinate is a smooth map into the stable sphere. After shrinking the passage region it lies in a single coordinate disk of that sphere, so it can be deformed to its value at the event through such disks. The deformation also avoids $u_0=0$ on either side, and its normal thickening is transported throughout. We may consequently take $u_0=(x,s)$ and $v_0=\epsilon e$ for one fixed stable unit vector $e$ when identifying the change in the outgoing core. [given, F1, F2, step 1.1]

3.1 The two outgoing patches are thus explicitly  $x\longmapsto\left(\epsilon\frac{(x,s)}{\sqrt{|x|^2+s^2}},\sqrt{|x|^2+s^2}\,e\right),\qquad s<0\ \text{or}\ s>0.$  As $s\to0$ they agree along the equatorial boundary away from $x=0$; the negative and positive families approach the two hemispheres of the $u$-sphere $|u|=\epsilon$, with opposite seam orientations. Gluing those two limiting disks along that equator gives the entire $S^{k-1}$ in the direction $u/|u|$. The second component is a small push in the stable $e$ direction, hence this is a **parallel** of the unstable sphere of $q$ rather than its intersecting core sphere. Truncate the two patches at a small common sphere in the $x$ variables. Their outer boundary annuli are related by an ordinary isotopy, since $u_0\ne0$ there. The retained path from the original $p$ patch to this small passage sphere is exactly the joining band. Therefore replacing the negative patch by the positive patch removes one disk from the $p$ sphere and attaches the complementary punctured parallel sphere of $q$ along the band. This is the band-sum construction, with its sign determined by the orientation of the transverse parameter. Reversing that orientation reverses the signed parallel. For $k=1$, $x$ has no coordinates and the displayed formula changes the outgoing point from one end of the $u$ interval to the other, giving the asserted foot replacement. [given, F1, F2, step 2.1]

4.1 The computation also controls the **full framing**. On every truncated patch the exit map $P$ is a smooth diffeomorphism between transverse flow sections, so its differential transports the given normal coordinates. On the parallel sphere its retained stable direction $e$, followed by the remaining stable normal coordinates, is the local normal disk frame of the $q$ handle. Across the hemispherical seam the tangent radial direction and the first normal direction undergo the same planar seam rotation as in the band-sum definition. If the parameter reverses the induced end-disk orientation, reflect that first normal coordinate on the copied sphere; the retained $q$ handle is unchanged. All other normal coordinates are the continuously transported stable coordinates. Hence the full ordered frames glue to precisely the signed band framing, not an independently chosen integer twist. Compactness of the truncated sphere patch and band permits one uniform sufficiently small normal radius, so the framed thickening is an embedding throughout and misses the retained $q$ attaching region. This proves the attaching-embedding statement. [given, F1, F2, step 3.1]

5.1 Transport the outgoing section further to the chosen lower regular level by the actual flow, with no intervening critical point. This is a diffeomorphism on a neighborhood of the compact patched sphere, so it preserves the band-sum identification and framing. The rest of the attaching data are unchanged outside the swept passage neighborhood by hypothesis. This finishes the local translation. [given, F1, F2, step 4.1]

6.1 In the range $1\le k\le n-2$, [F3] identifies the signed full framed band sum just constructed with the supported handle slide, hence supplies its relative diffeomorphism carrying all later attaching maps. The case $n=4,k=2$ is in this range and its attaching circles are framed links in a 3-dimensional level manifold. The remaining endpoint range $k=n-1$ retains only the explicitly supplied local band construction proved above; no existence of arbitrary global bands is inferred. This establishes exactly the stated translation and its relative scope. [F3, step 5.1] ∎

## Remarks

The lemma begins with an isolated transverse trajectory event as a hypothesis. A generic function path controls finite spatial jets of functions; it does not by itself supply these nonlocal flow-incidence hypotheses. No global Morse–Smale path or relative Kirby completeness is asserted.
