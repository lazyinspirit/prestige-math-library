---
id: lem-barnatan-formal-inverse-boundary-crossings
kind: lemma
title: "Explicit formal retractions for inverse boundary crossings"
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
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, section 4.3, Figure 6 and Remark 4.2"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Published printed pp.1458–1459; explicit local RII retraction; Figure 6 visually inspected"
---

## Statement

Assume countable choice. In the open Bar-Natan category on four boundary points of a rectangle, let $I$ be the vertical two-strand identity pairing and let $E$ be the pairing consisting of a top cap and bottom cup. Let $t:I\to E$ and $s:E\to I$ be the elementary saddle surfaces. Define the formal crossing complexes $K_+=(I\{1\}\xrightarrow{t}E\{2\})$, in cochain degrees $0,1$, and $K_-=(E\{-2\}\xrightarrow{s}I\{-1\})$, in degrees $-1,0$. Then both planar stackings $K_+K_-$ and $K_-K_+$ have explicit internal degree zero strong deformation retractions onto the one-term complex $I$ in degree zero, with no grading shift. All maps and homotopies can be inserted into an arbitrary planar surrounding complex. Consequently adjoining either of these crossing complexes preserves simplicity in both directions.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]]

[[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]]

[Bar-Natan, Figure 6 and Remark 4.2](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The two pairings, saddles and crossing complexes in the statement. Stack the first diagram above the second. A product of morphisms denotes composition, with the rightmost morphism applied first.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] defines the embedded surface category, its S, T and four-tube relations, its grading and its signed planar totalization.

[F2] The disk-system argument in [[lem-barnatan-open-pairings-have-scalar-degree-zero-endomorphisms]] identifies disjoint proper disks with the corresponding curtain disks relative to their boundary collars. In the local saddle compositions below, each asserted disk is explicitly the disk produced by cancelling a birth and its adjacent saddle or a saddle and its adjacent death.

[F3] [[lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity]] proves preservation of homotopies under planar totalization, with the tensor signs, and proves the conditional simplicity assertion when both local crossing inverses are supplied.

[A1] [[def-countable-choice]] is inherited only through [F2].

## Proof

1.1 Write $Z=E\sqcup O$, where $O$ is a small circle between the two arcs of $E$, and name those arcs $a$ (bottom) and $b$ (top). Let $u:E\to Z$ create $O$ by a disjoint disk and let $e:Z\to E$ kill it by a disjoint disk. Let $\Delta_b:E\to Z$ split $O$ from arc $b$, and let $m_a:Z\to E$ merge $O$ into arc $a$. Each is a single saddle, with product curtains on the untouched pieces. These surfaces have fixed standard unknotted bands inside the rectangle. The relations needed are $eu=0$, $m_a u=1_E$, $e\Delta_b=1_E$ and $ts=m_a\Delta_b$. For the first, birth followed by death is a disjoint sphere and S applies. In each of the next two, the new disk and its adjacent saddle cancel to a curtain disk while the other arc stays a curtain; these are disk systems and [F2] makes the identification relative to the prescribed collars. For the last, take the two disjoint crossing disks of an RII bigon: the two saddle bands attach to the original smoothing in those separate disks. Attaching the first then the second, or the second then the first, gives the same banded surface by interchanging their time coordinates in the disjoint disks. The two routes are respectively $ts$ and $m_a\Delta_b$. Equivalently both give a tube between the two $E$ curtain disks. This identifies actual embedded surfaces, not merely their abstract topological types. [F1, F2, A1, construct]

2.1 The remaining identity in $\operatorname{End}(Z)$ is $\Delta_b e+u m_a=1_Z+u t s e$. To see its exact four-tube instance, start with the two $E$ curtains, a disk capping the incoming $O$, and a disjoint disk creating the outgoing $O$. There are four distinct disk sheets, named $a,b,c,d$ respectively; put one patch on each in the standard local ball between the curtains and the cap/cup disks. Tubes inside this ball are unknotted and join the indicated patches. Joining $a$ to $b$ gives $u t s e$ by step 1.1; joining $c$ to $d$ gives the annular $O$ curtain together with the $E$ curtains, hence $1_Z$. Joining $a$ to $c$ gives $u m_a$ (merge the incoming circle into the bottom arc, then create the outgoing circle). Joining $b$ to $d$ gives $\Delta_b e$ (cap the incoming circle, then split the outgoing one from the top arc). These identifications follow by moving each tube along its incident disk sheet into the indicated saddle position, within the same ball and its product collars. There are no crossings or additional tubes in this model. The relation $C_{ab}+C_{cd}=C_{ac}+C_{bd}$ is therefore exactly the claimed identity. [F1, step 1.1, construct]

2.2 Enumerate the factors of $K_+K_-$ in that order, and enumerate the degree-zero summands as $(I,Z)$. Planar stacking gives $II=I$, $IE=EI=E$ and $EE=Z$. The signed total cube is $C^{-1}=E\{-1\}$, $C^0=I\oplus Z$, $C^1=E\{1\}$, with $d^{-1}=\binom{s}{\Delta_b}$ and $d^0=(t,-m_a)$. Indeed in multidegrees $(0,-1)$ the first-factor differential gives $\Delta_b$ and the second-factor differential gives $s$ with sign $(-1)^0$; in degree zero, the $(0,0)$ summand gives $t$ and the $(1,-1)$ summand gives $-m_a$ with sign $(-1)^1$. The equality $d^0d^{-1}=ts-m_a\Delta_b=0$ is step 1.1. These are the actual two-crossing cube maps, not a separately chosen complex with an unverified differential. [F1, step 1.1, construct, algebra]

3.1 Define $F:I\to C$, $G:C\to I$ and a cochain-degree $-1$ endomorphism $H$ of $C$ by $F^0=\binom{1_I}{ut}$, $G^0=(1_I,-se)$, $H^0=(0,e):C^0\to C^{-1}$ and $H^1=\binom{0}{-u}:C^1\to C^0$, all other components being zero. Every product is typed: $ut:I\to Z$, $se:Z\to I$, $e:Z\to E$ and $u:E\to Z$. Then $dF=t-m_a ut=0$ and $Gd=s-se\Delta_b=0$, so $F,G$ are chain maps. Moreover $GF=1_I-seut=1_I$ because $eu=0$. [step 1.1, step 2.2, construct, algebra]

3.2 For the opposite physical stacking $K_-K_+$, enumerate its factors in that physical order. Replace $\Delta_b,m_a$ by $\Delta_a,m_b$, since the new circle now splits from the bottom arc and merges into the top arc. The underlying three terms and shifts are unchanged. With summands again ordered $(I,Z)$, the actual tensor signs give $\widetilde d^{-1}=\binom{s}{-\Delta_a}$ and $\widetilde d^0=(t,m_b)$: the differential in the second factor at multidegree $(-1,0)$ has sign $(-1)^{-1}=-1$, while the first-factor differential on the $Z$ summand has sign $+1$. Set $J^{-1}=J^1=1_E$ and $J^0=\operatorname{diag}(1_I,-1_Z)$. This changes these matrices to $\binom{s}{\Delta_a}$ and $(t,-m_b)$. It is exactly the tensor permutation sign $(-1)^{pq}$ for interchanging a factor of degree $p=-1$ with one of degree $q=1$ on the $Z$ summand; all other summands have sign $+1$. [F1, step 2.2, construct, algebra]

4.1 On $C^{-1}$, $dH+Hd=H^0d^{-1}=e\Delta_b=1$. On $C^1$ it equals $d^0H^1=m_a u=1$. On $C^0$ its matrix is $\begin{pmatrix}0&se\\-ut&\Delta_b e+u m_a\end{pmatrix}$, whereas $1-FG=\begin{pmatrix}0&se\\-ut&1_Z+utse\end{pmatrix}$. Step 2.1 identifies the bottom-right entries; all other entries are displayed and identical. Thus $1_C-FG=dH+Hd$ in every degree. The side conditions are $HF=eut=0$, $GH=seu=0$ and $H^2=-eu=0$, again by S. Hence this is a strong deformation retraction, including these three side conditions. [step 1.1, step 2.1, step 3.1, algebra]

5.1 The surface identities for this stacking are $eu=0$, $m_bu=1_E$, $e\Delta_a=1_E$, $ts=m_b\Delta_a$ and $\Delta_a e+u m_b=1_Z+utse$. Their proofs are the same explicitly specified surfaces with $a,b$ exchanged: the birth and adjacent merge cancel on arc $b$, the adjacent split and death cancel on arc $a$, the two crossing bands commute in their disjoint disks, and four-tube joins $a,b$ and $c,d$ on one side and $b,c$ and $a,d$ on the other. Thus the maps for the actual, unaltered reverse-order cube are $\widetilde F^0=\binom{1_I}{-ut}$, $\widetilde G^0=(1_I,se)$, $\widetilde H^0=(0,-e)$ and $\widetilde H^1=\binom{0}{u}$. They are obtained by $J^{-1}F$, $GJ$ and $J^{-1}HJ$. Directly, $\widetilde G\widetilde F=1-seut=1$, while the middle matrix of $\widetilde d\widetilde H+\widetilde H\widetilde d$ is $\begin{pmatrix}0&-se\\ut&\Delta_a e+u m_b\end{pmatrix}$, equal to $1-\widetilde F\widetilde G$ by the displayed four-tube identity; the two extreme components are $e\Delta_a=1$ and $m_bu=1$. Each reverse-order side condition again contains the factor $eu$ and vanishes. [F1, F2, A1, step 1.1, step 2.1, step 4.1, step 3.2, construct, algebra]

6.1 Each elementary saddle has internal degree $-1$, and a circle birth or death has degree $+1$: relative to the two identity curtains, a saddle lowers Euler characteristic by one and a birth or death adds a disk. The cube shifts are $-1,0,1$, so every displayed differential has internal degree zero. Both $ut$ and $se$ have degree zero. As a map $Z\{0\}\to E\{-1\}$, $e$ has shifted degree $1-1=0$; as a map $E\{1\}\to Z\{0\}$, $u$ has degree $1-1=0$. Hence both pairs $F,G$ and both homotopies $H$, as well as $J$, have internal degree zero. Insert all these equations into any planar surrounding complex using [F3]; the homotopy insertion includes the cochain tensor sign from that supplier. The two actual inverse crossing equivalences just established discharge both hypotheses of its boundary-crossing simplicity assertion. Thus adjoining $K_+$ or $K_-$ preserves simplicity in both directions, as claimed. [F1, F3, step 4.1, step 5.1, algebra] ∎
