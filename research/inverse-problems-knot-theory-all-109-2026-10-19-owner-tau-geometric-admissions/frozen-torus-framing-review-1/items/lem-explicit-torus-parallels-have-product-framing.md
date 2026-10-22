---
id: lem-explicit-torus-parallels-have-product-framing
kind: lemma
title: "Explicit torus parallels have framing equal to the product of the slopes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-coprime-torus-knot
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - lem-framed-knot-push-off-self-linking-well-defined
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - def-countable-choice
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the stated smooth framing and diagram-linking suppliers. The complete mixed-crossing count is explicit; no full-Choice linking/intersection theorem or Seifert-zero-framing theorem is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Section2.2 and Figure2(a) motivate the six-framed trefoil; the general torus-framing count is proved locally by explicit stereographic coordinates"
---

## Statement

Assume Countable Choice. Let $p,q$ be coprime nonzero integers, let $0<r<1$, put $s=\sqrt{1-r^2}$, and let $K(u)=(r e^{ipu},s e^{iqu})$, $u\in\mathbb R/(2\pi\mathbb Z)$, be the canonically oriented $T(p,q)$. Set $m=|p|$ and $\delta=\pi/(m+1)$. The curves $K$ and $K_\delta(u)=(r e^{ipu},s e^{i(qu+\delta)})$, both oriented by increasing $u$, are disjoint parallel curves on the same Heegaard torus. Their linking number is $pq$. The normal framing of $K$ tangent to this torus has self-linking $pq$. In particular the torus-parallel framing of the canonical positive trefoil $T(2,3)$ has self-linking six. This statement computes the explicit torus framing; it does not identify a particular doubly pointed Heegaard diagram or establish a Floer invariant value.

## Statement references

[[def-coprime-torus-knot]]

[[def-framed-knot-self-linking-and-seifert-framing]]

[[lem-linking-number-even-sum-and-reidemeister-invariance]]

## Facts & Assumptions

**Given:** Exactly the explicit curves, parameter ranges, signs and orientations in the Statement.

[A1] [[def-countable-choice]] is assumed for the smooth framing and diagram invariance suppliers.

[F1] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]] uses $\det(v_{\rm over},v_{\rm under})$ in the positive projection plane.

[F2] [[lem-linking-number-even-sum-and-reidemeister-invariance]] proves that the half-signed mixed-crossing sum is the diagram linking number and is invariant under ambient isotopy, under Countable Choice.

[F3] [[def-framed-knot-self-linking-and-seifert-framing]] and [[lem-framed-knot-push-off-self-linking-well-defined]] identify a framing's self-linking with that of any sufficiently small parallel push-off in its nonzero normal-section class; the value is unchanged by changing its representative or sufficiently small radius.

[F4] [[def-coprime-torus-knot]] fixes the explicit complex torus curve and orientations used here.

[F5] [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] turns a smooth embedding isotopy of a compact source, stationary near its time endpoints, into an ambient isotopy supported near its track.

## Proof

1.1 On the Heegaard torus use angular coordinates $(\theta,v)$. The map $(u,e)\mapsto(r e^{ipu},s e^{i(qu+e)})$ for $0\le e\le\delta$ is an embedded annulus. Indeed an equality of first coordinates gives $u'-u=2\pi k/m$ modulo $2\pi$. Since $p,q$ are coprime, the nonzero residues of $2\pi qk/m$ have distance at least $2\pi/m$ from zero modulo $2\pi$, whereas $|e'-e|\le\delta<2\pi/m$. Equality of second coordinates thus forces $k=0$ and $e=e'$. The two parameter derivatives are independent because $p\ne0$. In particular its two boundary curves are the specified disjoint parallels. [F4, given, construct, algebra]

2.1 Use the orientation-preserving stereographic chart $\Psi(z_1,z_2)=(\operatorname{Re}z_1,\operatorname{Im}z_1,\operatorname{Re}z_2)/(1-\operatorname{Im}z_2)$ and project to its first two coordinates, viewed from positive third coordinate. Its orientation is positive at $(0,0,0,-1)$ and hence everywhere: the boundary-positive tangent basis there is $(\partial_{x_1},\partial_{y_1},\partial_{x_2})$ and its derivative is a positive scalar. In this projection each curve has polar angle $pu$. If its second complex phase is $v$, its radius is $R(v)=r/(1-s\sin v)>0$ and height is $Z(v)=s\cos v/(1-s\sin v)$. The angular derivative is $p\ne0$, so the planar projection is an immersion on both components. [F1, F4, step 1.1, given, algebra]

3.1 A mixed crossing pairs parameters $u$ on $K$ and $u'=u+2\pi k/m$ on $K_\delta$, for exactly one $k\in\{0,\ldots,m-1\}$. Put $v=qu$ and $c_k=2\pi qk/m+\delta$. Equality of radii says $\sin v=\sin(v+c_k)$. Since $\delta$ is strictly between zero and $2\pi/m$, no $c_k$ is zero modulo $2\pi$. The equality therefore holds exactly when $2qu+c_k=\pi$ modulo $2\pi$. For each $k$ this equation has exactly $2|q|$ solutions $u$ modulo $2\pi$. Hence there are exactly $2|pq|$ mixed pairs. At any fixed projected polar angle, the $m$ phases on either component are distinct because $q$ is coprime to $m$, and the phase sets of the two components are disjoint by the same strict bound on $\delta$. A given sine value has at most two distinct phase preimages modulo $2\pi$. Consequently a projected point has at most two preimages in the whole link, so there are no triple points or quadruple coincidences, and the mixed pairs counted are distinct crossings. [step 1.1, step 2.1, given, algebra]

4.1 At each crossing the two phases are $v$ and $\pi-v$ modulo $2\pi$, with equal denominators and opposite cosines. Their cosines are nonzero, since otherwise these two phases coincide, which would contradict the distinct-phase argument of step 3.1. Write $v_o$ for the phase of the over-strand. Then $\cos v_o>0$, because its height is positive and the other height negative. In the positive radial/angular frame the two oriented tangent vectors are $(a,pR)$ and $(-a,pR)$, where $R=r/(1-s\sin v_o)$ and $a=qrs\cos v_o/(1-s\sin v_o)^2$. Their determinant is $2apR$, nonzero of sign $pq$. The same reasoning applies to self-crossings, because two distinct phases on one component with the same sine are also of this form. The projection is therefore a regular diagram, and all $2|pq|$ mixed crossings have sign $\operatorname{sgn}(pq)$. By [F2] its half-sum is $pq$. [F1, F2, step 2.1, step 3.1, given, algebra]

5.1 The annulus in step 1.1 is generated by the torus vector $\partial_v$, whose image in the normal quotient of $K$ is nowhere zero: $\partial_v$ cannot be a multiple of the tangent $p\partial_\theta+q\partial_v$ because $p\ne0$. This normal class is a torus-tangent framing. Any other nowhere-zero torus-tangent normal section differs by a nowhere-zero real scalar; within its constant sign it is homotopic by positive scalar interpolation, and reversing its sign is homotopic by a constant half-turn in the oriented two-dimensional normal bundle. For small positive $e$, the curve $K_e$ is a push-off in this framing class. This can also be checked in a normalized tubular chart: its normal coordinates divided by $e$ tend uniformly to the nonzero class of $\partial_v$, so the straight interpolation with that class stays nonzero for all sufficiently small $e$. Decreasing $e$ from $\delta$ to a small positive value preserves the annulus's disjoint parallel curves. Make this two-circle family stationary near its time endpoints and apply [F5]; then [F2] and [F3] identify the computed linking number with the framing self-linking. Substituting $p=2,q=3$ gives six. This argument uses the actual finite signed-crossing calculation, not a linking/intersection theorem with a stronger choice hypothesis. [A1, F2, F3, F5, step 1.1, step 4.1, construct, algebra] ∎
