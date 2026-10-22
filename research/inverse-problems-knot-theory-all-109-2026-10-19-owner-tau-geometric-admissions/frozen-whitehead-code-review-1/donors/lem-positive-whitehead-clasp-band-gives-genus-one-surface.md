---
id: lem-positive-whitehead-clasp-band-gives-genus-one-surface
kind: lemma
title: "An explicit positive Whitehead clasp band gives a genus-one surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-seifert-surface
  - def-smooth-and-topological-slice-genus
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the smooth Seifert and slice-genus definitions. The actual surface, clasp signs, topology and radial push are explicit finite constructions; no full Choice or linking/intersection comparison theorem is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Figure1 and Section2.1; the annulus and positive-clasp surface is constructed and checked locally below"
---

## Statement

Assume Countable Choice. Let $A$ be a smooth embedded oriented annulus about an oriented companion knot $K$ in the standard oriented three-sphere, with any specified integer normal framing $t$. The two boundary curves of $A$ are oppositely oriented parallel copies of $K$. Join small intervals on its two different boundary components by the positive Whitehead clasp band, namely a band whose two free boundary arcs have the endpoint pairing and two positive crossings explicitly described below. The resulting boundary is the positive-clasped Whitehead double in this annulus-framing convention. It bounds a connected embedded oriented surface of genus one in the three-sphere, and a smooth properly embedded oriented surface of genus one in the four-ball. In particular $g_4^{\mathrm{sm}}(D_+(K,t))\le1$ whenever $t$ is measured relative to the chosen companion zero framing. This construction works for every integer $t$, including the two- and six-twisted doubles; it supplies neither a genus lower bound nor the admission of a particular marked Heegaard diagram.

## Statement references

[[def-oriented-seifert-surface]]

[[def-smooth-and-topological-slice-genus]]

[Hedden and Ording, Figure1 and Section2.1](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** A supplied framed embedded annulus $A$ about $K$, with its two induced boundary orientations and a fixed integer framing label $t$.

[A1] [[def-countable-choice]] is assumed for the smooth-surface definitions used below.

[F1] [[def-oriented-seifert-surface]] defines a connected compact smooth embedded oriented surface with the specified oriented boundary as a Seifert surface; for one boundary component its Euler characteristic is $1-2g$.

[F2] [[def-smooth-and-topological-slice-genus]] defines smooth four-ball genus as the least genus of a smooth properly embedded oriented spanning surface.

## Proof

1.1 Choose a short transverse arc in $A$ joining its two boundary components, and a small coordinate ball about that arc in which the annulus is the rectangle $0\le x\le1$, $|y|\le2a$, $z=0$, with its two boundary portions at $x=0,1$ and orientation $dx\wedge dy$. This is a single local product neighborhood of the supplied annulus; rescaling its coordinate ranges gives these constants. Remove the intervals $|y|\le a$ from these two boundary portions as attaching intervals. With $C>2a$ attach the rectangle $0\le s\le1$, $|u|\le a$ by the explicit embedding $B(s,u)=(s,u\cos(2\pi s),C\sin(\pi s)-u\sin(2\pi s))$. Distinct $s$ have distinct first coordinates, and for fixed $s$ the transverse vector $(0,\cos(2\pi s),-\sin(2\pi s))$ is nonzero, so this is an embedded band. Its ends are the two prescribed attaching intervals. In its interior the height is positive because $C\sin(\pi s)-u\sin(2\pi s)\ge(C-2a)\sin(\pi s)>0$. Thus its interior is disjoint from $A$. A smaller initial coordinate neighborhood and uniform rescaling keep the whole band inside that ball and away from the rest of the annulus. [given, construct, algebra]

2.1 Orient the band by $-ds\wedge du$. Its boundary orientations at $s=0,1$ are opposite to those of the corresponding annulus intervals, so the union is orientable. Its two free boundary arcs are $u=+a$ traversed with increasing $s$, and $u=-a$ traversed with decreasing $s$. In the positive $(x,y)$ projection they cross exactly at $s=1/4,3/4$. At $1/4$, the $u=-a$ branch is over; its oriented tangent is $(-1,-2\pi a)$, while the under $u=+a$ tangent is $(1,-2\pi a)$. Their determinant is $4\pi a>0$. At $3/4$, the $u=+a$ branch is over with tangent $(1,2\pi a)$, and the under $u=-a$ tangent is $(-1,2\pi a)$, again of determinant $4\pi a>0$. There are no other interior projected coincidences, since their first coordinates must agree and then $2a\cos(2\pi s)=0$. Each free arc joins one annulus boundary to the other with the displayed endpoint pairing. Hence the boundary consists outside this ball of the two oppositely directed companion parallels and inside it of exactly the positive two-crossing Whitehead clasp. The band is localized, so it changes no companion framing away from the clasp. This checks the pattern and sign directly rather than naming an unverified picture. [step 1.1, given, construct, algebra]

3.1 Round the four attaching corners in disjoint smaller neighborhoods. In each normal two-plane the two incident half-surfaces form an embedded angle; replacing that angle by a smooth monotone rounded arc, times the attaching coordinate, changes neither its embeddedness nor its orientation. The resulting compact surface $F$ is connected because it contains the connected annulus. Tracing its boundary follows one annulus boundary once, one band side, the other annulus boundary once and the other band side, so it has one boundary component. Attaching one rectangular one-handle decreases Euler characteristic by one: a cell decomposition containing the two attaching intervals gives $\chi(F)=\chi(A)+\chi(B)-2=0+1-2=-1$. Thus [F1] gives $1-2g=-1$ and $g=1$. The opposite companion traversals also show winding number zero in the companion solid torus; the local clasp contributes no additional companion traversal. [F1, step 1.1, step 2.1, given, construct, algebra]

4.1 View $S^3$ as the unit sphere in $\mathbb R^4$. Choose a smooth function $f:F\to[0,1]$ which is zero exactly on $\partial F$, positive on its interior, and has positive inward derivative on the boundary. Such an $f$ is explicit on a boundary collar: use its inward coordinate near zero, interpolate to a positive constant inside the collar by a smooth scalar cutoff, and extend that constant over the remaining compact surface. For $0<\varepsilon<1/2$, send $p\in F$ to $(1-\varepsilon f(p))p$. Radial projection recovers $p$, so the map is injective and its differential is injective: composing its differential with radial projection gives the original inclusion differential. Compactness makes it an embedding. Its boundary is the original knot on the unit sphere, its interior lies in the open four-ball, and its positive inward radial derivative makes the surface transverse to the sphere at its boundary. It is therefore a smooth proper spanning surface with the same topology and orientation as $F$. By [F2] it proves the stated genus upper bound. Nothing in the construction fixes the integer $t$ or uses an invariant value, so the same argument applies to every supplied annulus framing. [A1, F1, F2, step 3.1, construct, algebra] ∎
