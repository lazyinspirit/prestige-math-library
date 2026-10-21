---
id: lem-countable-choice-closed-three-manifolds-admit-complete-pointed-heegaard-data
kind: lemma
title: "Closed three-manifolds admit complete pointed Heegaard data under Countable Choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, thm-self-indexing-morse-function-existence, thm-morse-lemma, lem-interior-slab-handle-attachment, thm-handle-cancellation, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, thm-parametric-transversality, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval, thm-collar-neighborhood-theorem]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Section4, index ordering; complete-cut-system construction from the resulting zero/one handle presentations is supplied below"
---

## Statement

Assume Countable Choice. Every connected closed oriented smooth three-manifold $Y$ has an embedded connected closed oriented surface $\Sigma$ and compact submanifolds $U_\alpha,U_\beta$ such that
$$Y=U_\alpha\cup_\Sigma U_\beta,\qquad \partial U_\alpha=\Sigma=-\partial U_\beta.$$
For some integer $g\ge0$, each half is a ball with $g$ one-handles, and has $g$ pairwise disjoint neat properly embedded disks whose complement after cutting and compatible rounding is one parametrized smooth ball. The two disk-boundary systems on $\Sigma$ can be chosen transverse to one another. There is a point $z$ outside both systems. Thus these are actual singly pointed complete Heegaard splitting data of genus $g$, including the compression disks and cut-ball parametrizations. When $g=0$ both disk systems are empty.

This is existence of the geometric data only. No admissibility, analytic auxiliary choice, differential, move-generation or Floer-invariance assertion is included.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A connected closed oriented smooth three-manifold $Y$ and Countable Choice.

[F1] [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] applies with both boundary faces empty. [[thm-self-indexing-morse-function-existence]] then supplies a Morse function $f:Y\to[0,1]$ whose index-$j$ critical points all have value $(j+1)/5$, together with an adapted descending field. Both suppliers assume only Countable Choice.

[F2] [[thm-morse-lemma]] gives the signed-square local coordinates and hence the small standard minimum balls. [[lem-interior-slab-handle-attachment]] supplies the actual simultaneous disjoint handle attachments at a common Morse critical value and their smooth rounded comparisons. In a band with no critical point its proof supplies the product collar comparison. It does not require the lower sublevel to be fixed pointwise.

[F3] [[thm-handle-cancellation]] includes cancellation of a zero/one-handle pair: the attaching zero-sphere of the one-handle must meet the boundary belt sphere of the new zero-handle in exactly one point. Its comparison transports all remaining attaching embeddings. [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]] absorbs a disk attached along a boundary disk, with its local smooth collar comparison. These suppliers use Countable Choice.

[F4] [[thm-parametric-transversality]] applies under Countable Choice to finite-dimensional smooth families. [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies compactly supported chart cutoffs. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] supplies the smooth finite-time flows used below. [[thm-collar-neighborhood-theorem]] supplies the boundary collars and smooth disk neighborhoods.

## Proof

1.1 Apply [F1] and set $\Sigma=f^{-1}(1/2)$, $U_\alpha=f^{-1}([0,1/2])$ and $U_\beta=f^{-1}([1/2,1])$. The value $1/2$ is regular. Both halves are compact smooth manifolds with that boundary, and their interiors are disjoint. The orientation convention is the boundary orientation from $U_\alpha$. The minimum and maximum of $f$ exist by compactness and are critical; their indices are zero and three, so their values are $1/5$ and $4/5$. In particular both halves and their common level are nonempty: connectedness of $Y$ makes the image of $f$ an interval. Small neighborhoods of the finitely many index-zero points give finitely many disjoint standard balls. The compact intervening bands contain only the common index-one level $2/5$ and regular bands. Thus [F2] identifies $U_\alpha$ with these balls with finitely many disjoint one-handles, with all feet on their boundary spheres. Applying the same argument to $1-f$ gives such a presentation of $U_\beta$. [F1, F2, given, construct]

2.1 Both resulting finite zero/one-handle incidence graphs are connected. Indeed attaching a two-handle to a three-manifold cannot join different components: its attaching region $S^1\times D^1$ is connected and therefore lies in one component. Attaching a three-handle has the same property, since its attaching sphere $S^2$ is connected. Consequently the later two/three-handles cannot reduce the number of components of $U_\alpha$. Their final union is the connected $Y$, so $U_\alpha$ was connected. Apply this reasoning to $1-f$ for $U_\beta$. This also proves graph connectedness, since the only operations joining the initial balls were the one-handles recorded as its edges. [F2, step 1.1, construct]

3.1 Consider either of these presentations, with $v\ge1$ zero-handles and $e$ one-handles. Choose a rooted spanning tree of its finite connected incidence graph by repeatedly adjoining an edge to an unreached vertex; this is a finite selection. The simultaneous attaching disks are disjoint, so the handles can be attached in tree order first, followed by the remaining edges. Start with the root ball. At a new tree edge insert its new endpoint ball as a zero-handle, then that edge as a one-handle. Exactly one foot of this one-handle is on the new ball, while the other lies on the previously joined part. Hence its attaching zero-sphere meets the belt sphere of that zero-handle in exactly one point. [F3] cancels this pair and transports every later foot and framing. Repeat for the $v-1$ tree edges. This produces one ball and $r=e-v+1\ge0$ one-handles, together with an actual comparison to the original half. There is no assumption that its remaining attaching feet stayed fixed during the cancellations. All of them are transported along the boundary comparisons, as [F3] requires. [F2, F3, step 2.1, construct]

4.1 In this last presentation the $r$ cocores $\{0\}\times D^2$ of the product one-handles are disjoint neat proper disks after the compatible boundary rounding. Cutting them breaks each handle into two short products attached to its two original ball feet. Each such product is a ball attached along one boundary disk. Absorb these finitely many collar bumps by [F3]. The cut result is therefore diffeomorphic to the original single standard ball; the composition supplies its parametrization. Pulling the disks back through step3.1 supplies the required disks in the actual half. Its boundary is connected: a one-handle with both feet on a connected boundary surface removes two open disks and joins their boundary circles by an annulus, retaining connectedness. Starting with $S^2$, this changes Euler characteristic by $-2$ each time. The resulting oriented surface has genus $r$. Thus the two presentations have the same number $r=g$, since their boundary is the same $\Sigma$. This proves connectedness of $\Sigma$ as well as completeness and the claimed disk counts, including $r=0$. [F3, F4, step 3.1, construct, algebra]

5.1 Write $\alpha$ and $\beta$ for the two finite embedded boundary-circle systems. To arrange their mutual transversality choose finitely many chart-supported smooth vector fields $V_1,\ldots,V_N$ spanning $T_x\Sigma$ at every $x$: in each member of a finite smaller chart cover multiply its two coordinate fields by a cutoff equal to one there. Compose their small flows with parameters $a\in\mathbb R^N$ to give diffeomorphisms $\Phi_a$ with $\Phi_0=\mathrm{id}$. At $a=0$ the parameter derivative of $\Phi_a(x)$ spans $T_x\Sigma$. Compactness of the circles preserves this surjectivity for all sufficiently small $a$. Therefore the evaluation $(a,x)\mapsto\Phi_a(x)$ on each beta circle is transverse to every alpha circle. By [F4], outside a null set the individual images are transverse for all the finitely many circle pairs; choose one sufficiently small such parameter. The path $\Phi_{ta}$ is an isotopy of $\Sigma$. Extend its tangential velocity to $U_\beta$ in a boundary collar as $\chi(r)V_t(x)$ with zero normal component, equal to the original velocity near $r=0$ and zero near the inner collar edge. Its finite-time flow extends the boundary isotopy and transports the whole beta disk system. It preserves completeness and neatness, and does not change the embedded splitting or the alpha disks. [F4, step 4.1, construct]

6.1 Finally the finite union of the two circle systems does not cover $\Sigma$. Each circle is closed and locally, in a submanifold chart, has empty interior. The complement of a closed set with empty interior is open dense; finitely many such complements have dense intersection, by repeatedly taking a nonempty smaller open subset. Choose $z$ in their intersection. For empty systems choose any point of the nonempty $\Sigma$. Every construction used finitely many handles, disks, flows and parameters, with Countable Choice only through the stated suppliers. The result is the full geometric data of the Statement, with no unproved admissibility or Floer assertion appended. [step 1.1, step 4.1, step 5.1, construct] ∎
