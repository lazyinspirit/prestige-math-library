---
id: lem-lkb-small-end-neighbourhoods-stabilize-equivariantly
kind: lemma
title: Equivariant stabilization of the LKB end neighbourhoods
status: published
origin: session
deps: []
dependency_level: undefined
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-lkb-small-end-neighbourhoods-stabilize-equivariantly and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-16; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"a493ce1ff0d835ae112bf1ca6cd2e87ff5d9ced5de84ffec29c257bbdebb5056","evidence":["research/frontier-38-owner-30-reader-16.md","research/frontier-38-owner-30-reader-findings-16.json","research/frontier-38-owner-30-dispatch/reader-reader-16.result.json","research/frontier-38-owner-30-step5-hash-16-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-lkb-small-end-neighbourhoods-stabilize-equivariantly.md","historical_raw_sha256":"5caefdb9cdc2f5b0df8b05da6b970c8eec780877ba7c8ede8385d3a6439ffa49","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:46:55.326Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Bigelow, The Lawrence-Krammer representation, section 2.2, collision and puncture end neighbourhoods
      url: https://arxiv.org/pdf/math/0204057
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $D$ be the closed unit disk, $P=\{p_1,\ldots,p_n\}\subset\operatorname{int}D$ a nonempty finite set, and $C$ the unordered configurations of two distinct points of $D\setminus P$. Put
$$f(\{z_1,z_2\})=\min\bigl(\{|z_1-z_2|\}\cup\{|z_k-p_i|:k=1,2,\ 1\le i\le n\}\bigr),\qquad\nu_\varepsilon=\{f<\varepsilon\}.$$
Let $\partial C$ mean the configurations with at least one point on $\partial D$. There is $\varepsilon_0>0$ such that for $0<\delta<\varepsilon<\varepsilon_0$ the identity inclusions of pairs
$$j_{\delta,\varepsilon}:(C,\nu_\delta)\longrightarrow(C,\nu_\varepsilon),\qquad j^\partial_{\delta,\varepsilon}:(C,\partial C\cup\nu_\delta)\longrightarrow(C,\partial C\cup\nu_\varepsilon)$$
are homotopy equivalences of pairs. Their lifts to any fixed regular covering of $C$ are deck-equivariant homotopy equivalences of pairs, after fixing a basepoint lift outside $\nu_{2\varepsilon_0}$.

Consequently their induced relative-homology maps $i_{\delta,\varepsilon}$ and $i^\partial_{\delta,\varepsilon}$ are isomorphisms in every degree. The maps toward zero are canonically
$$k_{\varepsilon,\delta}=i_{\delta,\varepsilon}^{-1},\qquad k^\partial_{\varepsilon,\delta}=(i^\partial_{\delta,\varepsilon})^{-1}.$$
They compose compatibly for decreasing radii, and their direct limits are canonically isomorphic to every sufficiently small relative group. This specifies the reversed transitions needed for a direct-limit convention at the collision and puncture ends; the original natural relative maps themselves run from small to large radii.

## Facts & Assumptions

**Given:** $D$, the finite puncture set $P$, the configuration space $C$, and a fixed regular covering with a specified basepoint lift when the covering conclusion is used.



## Proof

1.1 Work first in the ordered configuration space, a subset of $D\times D$. Denote its finitely many distance functions by $d_0=|z_1-z_2|$ and $d_{ki}=|z_k-p_i|$. Their minimum is positive and locally Lipschitz. Choose $\varepsilon_0$ so small that $12\varepsilon_0$ is less than the minimum distance between distinct punctures, $12\varepsilon_0<\min_i(1-|p_i|)$, and $4\varepsilon_0<1$; omit the first bound if there is only one puncture. A prescribed base configuration can additionally be kept outside $\nu_{2\varepsilon_0}$ by decreasing $\varepsilon_0$. Such a choice uses only minima of finite positive lists. [given, choose]

2.1 At a point with $f\le3\varepsilon_0$, draw the graph whose vertices are the two mobile points and the fixed punctures and whose edges are precisely the distances equal to $f$. No component contains two punctures: a path between them would use at most the two mobile vertices, hence have length at most $3f\le9\varepsilon_0$, contradicting step 1.1. In a component containing a puncture $p$, set the velocity of each mobile vertex to $z_k-p$ and leave the puncture fixed. Every active distance in this component has positive derivative equal to that distance, since the whole component is dilated about $p$. All moved vertices are within $2f\le6\varepsilon_0$ of $p$, so these velocities can be used in a neighbourhood disjoint from the disk boundary. Two disjoint puncture components use their respective dilations simultaneously. Isolated mobile vertices have zero velocity. [step 1.1, construct]

3.1 The remaining possible active component consists of the two mobile vertices without a puncture. Put $d=z_1-z_2$, $V_1=(I-z_1z_1^T)d$, and $V_2=-(I-z_2z_2^T)d$, using real coordinates in $\mathbb R^2$. This vector field is tangent to each disk boundary factor, and the derivative of $|d|^2$ is $2d^T(I-z_1z_1^T)d+2d^T(I-z_2z_2^T)d>0$. Each summand is nonnegative on the disk and is positive if that point is interior. If both points are on the boundary, equality would require $d$ parallel to both boundary normals; distinct such points are antipodal, with distance $2$, excluded by $f\le3\varepsilon_0<1$. Thus this candidate also increases every active distance. The cases in steps 2.1 and 3.1 exhaust the graph possibilities, including ties between a collision and a puncture distance and two separate puncture distances. [step 1.1, step 2.1, algebra]

4.1 Fix $0<\delta<\varepsilon<\varepsilon_0$. The band $B=\{\delta/4\le f\le3\varepsilon\}\subset D^2$ is compact and avoids all punctures and collisions. Each candidate of steps 2.1 and 3.1 is smooth near the point at which it was selected and strictly increases every active distance there. By continuity, the same holds in a neighbourhood: distances inactive at that point have a positive gap from the minimum, so none can become active on a sufficiently small neighbourhood unless its derivative was already positive. Cover $B$ by finitely many such neighbourhoods. For the puncture candidates restrict these neighbourhoods so that every moved coordinate is interior; for the collision candidate tangency holds identically. Take Lipschitz weights subordinate to this finite cover by the distance-to-complement construction, shrinking supports using the maximum-distance threshold as necessary, and normalize their sum. Their weighted sum is locally Lipschitz, tangent to every boundary factor, and strictly increases every active distance. Average it with its coordinate-interchanged translate to make it invariant under mobile interchange; positivity and tangency survive the averaging. Extend it to a neighbourhood of $B$ with a Lipschitz cutoff equal to one on the smaller band used by the trajectories. All these operations concern a finite compact band. [step 2.1, step 3.1, construct]

5.1 Write $V$ for this field. The set of pairs $(x,j)$ with $x\in B$ and $d_j(x)=f(x)$ is compact. The continuous quantities $Dd_j(x)V(x)$ are positive on it, so have a positive common lower bound $c$. Along the flow of $-V$, the derivative of the minimum, at every time at which it is differentiable, is the derivative of one of its active distances and is at most $-c$. This also follows directly from the one-sided derivative of a finite minimum. The minimum is Lipschitz along the flow and hence its integrated decrease is at least $c$ per unit time while the trajectory stays in $B$. The field preserves each disk boundary factor: on a boundary factor it is tangent, and uniqueness of solutions prevents an interior trajectory from crossing that factor. Thus these trajectories are valid configurations and preserve $\partial C$. [step 4.1, algebra]

6.1 The required flow needs no additional existence assumption. On a compact neighbourhood with Lipschitz constant $L$ and bound $M$, the operator $u(t)\mapsto x+\int_0^t(-V)(u(s))\,ds$ is a contraction on the closed sup-norm ball of paths for time $h$ with $Lh<1$ and $Mh$ smaller than its radius. Starting with the constant path, its iterates have geometrically bounded consecutive differences, so converge uniformly to the unique integral solution. The same estimates give continuous dependence on the initial point. Repeat on finitely many compact-band time intervals as needed; a solution cannot cease to exist while staying in the band. This proves the local flow and the extension needed here. For an initial configuration with $\delta/2<f\le2\varepsilon$, step 5.1 shows that the first hitting time $T(x)$ of $f=\delta/2$ is finite, bounded by $(2\varepsilon-\delta/2)/c$, and continuous in $x$; the strict decrease and continuous dependence give the last assertion by bracketing the hitting time on either side. Set $T=0$ at $f\le\delta/2$. [step 4.1, step 5.1, construct]

7.1 Choose a Lipschitz function $\eta$ equal to one for $f\le\varepsilon$ and zero for $f\ge2\varepsilon$. For $f<2\varepsilon$ flow for time $s\eta(f(x))T(x)$, $0\le s\le1$, and fix configurations with $f\ge2\varepsilon$ or $f\le\delta/2$. The bounded hitting times ensure continuity at the cutoff. This gives an interchange-invariant homotopy $R_s:C\to C$ from the identity to $r=R_1$. It never increases $f$ where it moves a point, preserves $\partial C$, and sends $\nu_\varepsilon$ into $\{f\le\delta/2\}\subset\nu_\delta$. It preserves $\nu_\delta$ throughout as well. Therefore $r$ is a map of pairs in the reverse direction of each identity inclusion in the statement, and $R_s$ gives the two inverse homotopies, as homotopies of the respective pairs. For the boundary-union pairs, a boundary point with larger $f$ remains a boundary point; no cutoff across $f=\varepsilon$ is being used on that boundary. [step 5.1, step 6.1, construct]

8.1 The homotopy fixes the chosen base configuration. Lift it starting at the identity of the covering; uniqueness of homotopy lifting in evenly covered neighbourhoods implies that the lift commutes with every deck transformation. Each lifted map preserves the preimages of the end neighbourhoods and the boundary exactly when its base map does. Thus step 7.1 proves deck-equivariant homotopy equivalences of both lifted pairs. It follows directly on singular relative chains, using the prism homotopy, that the induced maps are isomorphisms. [step 7.1, construct]

9.1 For $\gamma<\delta<\varepsilon$ the natural inclusions satisfy $i_{\gamma,\varepsilon}=i_{\delta,\varepsilon}i_{\gamma,\delta}$, so their unique inverses satisfy $k_{\delta,\gamma}k_{\varepsilon,\delta}=k_{\varepsilon,\gamma}$, and likewise for the boundary-union groups. The inverse is independent of every vector-field or cutoff choice because it is the inverse of a specified canonical homomorphism. The direct limit over decreasing sufficiently small radii therefore has compatible canonical isomorphisms from every one of these groups, and its universal property identifies it with any of them. The same conclusion holds after passage to a smaller cofinal interval of radii. This establishes both the stabilization and the directed convention claimed. [step 8.1, algebra] ∎
