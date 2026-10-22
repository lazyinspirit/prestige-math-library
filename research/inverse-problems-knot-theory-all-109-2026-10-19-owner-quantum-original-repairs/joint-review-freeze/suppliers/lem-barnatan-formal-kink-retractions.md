---
id: lem-barnatan-formal-kink-retractions
kind: lemma
title: "Explicit formal retractions for the two kink complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-barnatan-open-tangle-cobordism-complexes, lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms, lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity, def-countable-choice]
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, section 4.3 and Figure 5"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Published printed pp.1457–1458; Figure 5 and the four-tube disk assignment visually inspected"
---

## Statement

Assume countable choice. Let $P$ be a single arc in a disk and let $Z=P\sqcup O$ add a small disjoint circle next to it. Let $m:Z\to P$ merge the circle into the arc by an elementary saddle and let $\Delta:P\to Z$ be the reversed saddle. In the open Bar-Natan category the two normalized kink complexes $C_+=(Z\{1\}\xrightarrow{m}P\{2\})$ in cochain degrees $0,1$, and $C_-=(P\{-2\}\xrightarrow{\Delta}Z\{-1\})$ in degrees $-1,0$, both have explicit internal degree zero strong deformation retractions onto the one-term complex $P$ in degree zero. These retractions are preserved by insertion into an arbitrary planar surrounding complex.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]]

[[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]]

[Bar-Natan, Figure 5 and its proof](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The arc, circle, saddles and normalized kink complexes in the statement. Write composition with the rightmost map applied first.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] supplies the embedded surface category, S, T, four-tube, its grading and its signed planar complexes.

[F2] [[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]] includes the boundary-relative uniqueness of proper disk systems used for elementary saddle/birth or saddle/death cancellation.

[F3] [[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]] proves that planar insertion preserves degree zero chain maps, homotopies and equivalences with the stated tensor signs.

[A1] [[def-countable-choice]] is used through [F2], with no further selection principle.

## Proof

1.1 Let $u:P\to Z$ be a circle birth and $e:Z\to P$ a circle death, both with the identity curtain on $P$. Let $v:P\to Z$ be the curtain disjoint from a once-punctured torus creating $O$, and let $w:Z\to P$ be its time reverse. Choose the handle on this punctured torus to be the standard unknotted handle in the local cylinder. Then $eu=0$, $ev=2\,1_P$ and $wu=2\,1_P$ by S and T: the first closes the birth disk to a sphere, and the other two close the punctured torus to a torus. Also $mu=1_P$ and $e\Delta=1_P$: the birth disk with its adjacent merge, or the split with its adjacent death, is a proper disk, and [F2] identifies it with the arc curtain relative to the collars. Finally $mv=m\Delta$ and $w\Delta=m\Delta$. For $mv$, move the two feet of the handle on the punctured-torus birth along its disk sheet and through the merging band onto the arc curtain. This gives the arc curtain with the same one unknotted handle as split followed by merge, $m\Delta$. The path lies in the product neighbourhood of the birth disk, merging band and the arc, so it misses the boundary collars and creates no crossings. Time reversal gives $w\Delta=m\Delta$. Thus all these are identities of the specified embedded surfaces or direct S/T reductions. [F1, F2, A1, construct]

2.1 In $\operatorname{End}(Z)$ the required four-tube identity is $ve+um=\Delta e+1_Z$. Start from the arc curtain $A$, a disk $C$ capping the incoming circle, and a disk $D$ creating the outgoing circle. Put patches $1,2$ on $D$, patch $3$ on $A$ and patch $4$ on $C$, in one standard local ball. Attaching a tube between $1,2$ makes the punctured-torus birth, giving $ve$. The tube $3,4$ joins the incoming cap to the arc curtain and gives $um$. The tube $1,3$ joins the outgoing cup to the arc curtain and gives $\Delta e$. The tube $2,4$ joins the incoming cap and outgoing cup to the circle annulus, giving $1_Z$. These descriptions use the same unknotted tube arcs; moving each tube along its incident disk sheets gives the stated saddle surfaces. Therefore $C_{12}+C_{34}=C_{13}+C_{24}$ is precisely the claimed identity. Reversing time, including the order of compositions, gives the second identity $uw+\Delta e=um+1_Z$. [F1, step 1.1, construct]

3.1 For $C_+$ define $F_+:P\to C_+$ by $F_+^0=v-\Delta$, define $G_+:C_+\to P$ by $G_+^0=e$, and define $H_+^1=u:C_+^1\to C_+^0$, all other components zero. Then $dF_+=mv-m\Delta=0$; $G_+$ is a chain map because its only nonzero component has target the one-term complex at degree zero and $C_+$ has no term in degree $-1$. The composite is $G_+F_+=ev-e\Delta=2\,1_P-1_P=1_P$. On degree one, $dH_++H_+d=mu=1$, which equals $1-F_+G_+$ there. On degree zero, $1-F_+G_+=1_Z-ve+\Delta e=um=H_+d$ by step 2.1. Thus $1-F_+G_+=dH_++H_+d$ in both degrees. Moreover $H_+F_+=0$ by cochain degrees, $G_+H_+=eu=0$ by S, and $H_+^2=0$ by cochain degrees. [step 1.1, step 2.1, construct, algebra]

3.2 For $C_-$ define $F_-^0=u:P\to Z$, $G_-^0=w-m:Z\to P$ and $H_-^0=e:C_-^0\to C_-^{-1}$, all other components zero. The chain-map equation for $G_-$ is $G_-d=w\Delta-m\Delta=0$, while $F_-$ is automatically a chain map since $C_-$ has no term in degree one. Their composite is $G_-F_-=wu-mu=2\,1_P-1_P=1_P$. On degree $-1$, $dH_-+H_-d=e\Delta=1$; on degree zero, $1-F_-G_-=1_Z-uw+um=\Delta e=dH_-$ by the time-reversed identity in step 2.1. Also $H_-F_-=eu=0$ by S, $G_-H_-=0$ by cochain degrees, and $H_-^2=0$ by cochain degrees. Thus this is the second strong deformation retraction, with all side conditions. [step 1.1, step 2.1, construct, algebra]

4.1 The saddles $m,\Delta$ have internal degree $-1$; $u,e$ have degree $+1$; and $v,w$ have degree $-1$, since their circle component is a once-punctured torus of Euler characteristic $-1$, while the unchanged arc contributes its identity curtain. Thus $F_+^0$ has shifted degree $-1+1=0$, $G_+^0$ has $1-1=0$, and $H_+^1$ has $1+1-2=0$. On the negative kink, $F_-^0$ has $1-1=0$, $G_-^0$ has $-1+1=0$, and $H_-^0$ has $1-2+1=0$. Both differentials have degree zero after their displayed shifts. No division by two or other change of coefficient ring was made: the exact coefficient $2-1$ in both composites is essential. Insert the maps, homotopies and inverse equations by [F3], including its homotopy tensor sign. This proves the claimed degree zero retractions in every planar surrounding complex. [F1, F3, step 3.1, step 3.2, algebra] ∎
