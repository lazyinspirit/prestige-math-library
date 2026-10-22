---
id: lem-explicit-whitehead-six-torus-diagram-geometric-admission
kind: lemma
title: "An explicit twenty-five-intersection diagram represents the six-twisted positive Whitehead double"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-explicit-torus-parallels-have-product-framing
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - thm-valid-code-reconstructs-the-declared-link-diagram
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath–Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/abs/math/0512348"
      locator: "Figures 1–3 and the complete twenty-five-column calculation; this proof independently specifies a rational torus diagram and identifies its bridge shadow by an annular Reidemeister movie"
---

## Statement

Let $T=\mathbb R^2/(25\mathbb Z\times16\mathbb Z)$ have coordinates $(x,y)$, and write $u=x-y$, $v=x+y$. Take $\beta=\{y=0\}$ and marks $w=(-5,-15/2)$, $z=(31/2,4)$. Define a polygonal period $P$ of $\alpha$ from $(0,0)$ to $(0,-16)$ as follows. For each row $(c,d,r,\epsilon,a,b)$ of the following table, append consecutively the three points $(u,v)=(a,d),(c,d+\epsilon r),(b,d)$, and join consecutive points by straight segments; append the final endpoint $(0,-16)$ in $(x,y)$ coordinates.

| $c$ | $d$ | $r$ | $\epsilon$ | $a$ | $b$ |
|---|---|---|---|---|---|
| $5/2$ | $-25/2$ | $5/2$ | $-1$ | $0$ | $5$ |
| $9/2$ | $153/2$ | $1/2$ | $1$ | $5$ | $4$ |
| $5/2$ | $-25/2$ | $3/2$ | $-1$ | $4$ | $1$ |
| $9/2$ | $153/2$ | $7/2$ | $1$ | $1$ | $8$ |
| $23/2$ | $57/2$ | $7/2$ | $-1$ | $8$ | $15$ |
| $27/2$ | $235/2$ | $3/2$ | $1$ | $15$ | $12$ |
| $23/2$ | $57/2$ | $1/2$ | $-1$ | $12$ | $11$ |
| $27/2$ | $235/2$ | $5/2$ | $1$ | $11$ | $16$ |

Smooth only the genuine polygonal corners in sufficiently small disjoint disks, keeping the curves unchanged near the marks, their mutual crossings and the bridge arcs specified below. Use the standard Clifford torus in $S^3\subset\mathbb C^2$ with arguments $(2\pi x/25,2\pi y/16)$, $U_\alpha=\{|z_2|\le|z_1|\}$ and $U_\beta=\{|z_1|\le|z_2|\}$. Give $T=\partial U_\alpha$ its induced orientation $-dx\wedge dy$.

These data admit explicit simultaneously boundary-parallel bridge witnesses and form an admissible doubly pointed genus-one Heegaard diagram of $D_+(T(2,3),6)$. They have exactly twenty-five intersections. A single lift of $\alpha$ meets $\beta_0=\{y=0\}$ at the points $(X_i,0)$, where
$$ (X_1,\ldots,X_{25})=(0,1,4,5,16,17,20,21,24,27,28,31,32,33,36,37,40,43,44,47,48,59,60,63,64). $$
Here $T(2,3)$ is the positively parametrized complex torus knot; the framing $6$ is the actual torus-surface linking framing. This statement identifies a specified diagram, not its absolutely normalized knot Floer complex.

## Facts & Assumptions

**Given:** The finite rational data in the Statement and the standard oriented three-sphere. No knot identification is inferred from a homology rank or a picture caption.

[F1] Primitive smooth torus curves admit finite smooth affine normalization, and annulus strips admit smooth coordinates extending prescribed collars. The proof uses finite strips and empty bigons. ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]])

[F2] The positive clasp is the boundary of the supplied annulus and the band $B(s,h)=(s,h\cos2\pi s,C\sin\pi s-h\sin2\pi s)$, $C>2a$, $|h|\le a$. Its two crossings are positive, and an annulus with framing $t$ gives $D_+(K,t)$. ([[lem-positive-whitehead-clasp-band-gives-genus-one-surface]])

[F3] An affine $(p,q)$ torus core has actual surface parallel linking number $pq$. Reidemeister I, II and III moves with specified strand heights are supported ambient isotopies, and matched oriented planar codes with their rotation systems reconstruct the same diagram. ([[lem-explicit-torus-parallels-have-product-framing]], [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]], [[thm-valid-code-reconstructs-the-declared-link-diagram]])

## Proof

1.1 Convert $(u,v)$ to $((u+v)/2,(v-u)/2)$. The period has twenty-six vertices and displacement $(0,-16)$. Segment intersections are tested by $\det(b-a,d-c)$ and the two rational parameters $\det(c-a,d-c)/\det(b-a,d-c)$, $\det(c-a,b-a)/\det(b-a,d-c)$; a zero determinant is handled by interval overlap on a nonconstant coordinate. For $P$ against $P+(25m,16n)$, only $|m|\le3,|n|\le5$ have overlapping bounding boxes. The resulting $47{,}800$ tests have precisely twenty-six consecutive or seam contacts and no other contact or overlap. These formulas applied to the displayed finite table establish that $\alpha$ is embedded, primitive of class $(0,-1)$. The intersections with all horizontal lifts during one period, in order, have labels $$1,4,8,16,15,7,3,2,6,14,17,9,12,20,24,23,19,11,10,18,22,25,21,13,5.$$ Equivalently a fixed proper lift meets $\beta_0$ at exactly the displayed $X_i$. The odd labels have downward tangent and the even labels upward tangent in physical $(x,y)$ coordinates. The seam at $(0,0)$ is straight; no genuine corner is a crossing. Thus sufficiently small corner smoothings preserve all these facts. [given, construct, algebra]

2.1 Here is a short explicit bridge certificate independent of a schematic drawing. Multiply all physical coordinates by $36$, so the lattice becomes $(900,576)$. Put $W=(720,306)$, $Z=(558,144)$; these represent $w,z$. Let $\delta$ be their straight segment, and let $\gamma$ be the polygonal path through $$\begin{gathered}(720,306),(721,308),(883,470),(892,470),(901,479),(901,488),\\(1783,1370),(1792,1370),(1801,1379),(1801,1388),(2314,1901),(2386,1901),\\(2386,1838),(1801,1253),(1801,1244),(793,236),(505,236),(-1115,-1384),\\(-1115,-1456),(-1052,-1456),(-926,-1330),(-908,-1330),(-899,-1321),\\(-899,-1312),(-17,-430),(-8,-430),(1,-421),(1,-412),(559,146),(558,144).\end{gathered}$$ The same segment formulas give no nonconsecutive self-contact modulo the lattice and no contact with any translate of $36P$. For reproducibility, the self-check on $|m|\le5,|n|\le7$ has $138{,}330$ tests; the $\gamma$ versus $36P$ check on $|m|\le8,|n|\le10$ has $258{,}825$ tests. Bounding boxes exclude all further translates. The only intersections with translates of $\delta$ are the two declared endpoints and three transverse interior crossings: $$A=(2386,1900),\quad B=(650,236),\quad C=(-1114,-1456),$$ on translates $(2,3),(0,0),(-2,-3)$ of $\delta$, respectively. Their determinant signs for $(\dot\gamma,\dot\delta)$ are $-,+,-$. The segment $\delta$ avoids $\beta$ because its physical heights lie strictly between $0$ and $16$. All strict incidences persist under sufficiently small smoothing. Thus $\gamma$ is an embedded arc in $T\setminus\alpha$ and $\delta$ one in $T\setminus\beta$. [given, step 1.1, construct, algebra]

3.1 Push $\gamma$ slightly into $U_\alpha$ and $\delta$ into $U_\beta$, orienting the former $W\to Z$ and the latter $Z\to W$. Their collar strips are embedded boundary-parallel witness disks. Compression disks can be chosen with initial collars at the attaching curves and interiors beyond these shallow strips, so each bridge misses its compression disk. Near each endpoint use a shadow parameter of order two and a normal height of order one; the two arcs then have the same normal tangent and can be smoothed together while retaining their separate witness disks. By [F1] the primitive meridians bound the indicated disk systems, each cutting its solid torus into one ball. At positive real $z_1,z_2$, an ambient positive frame is $(\partial_{\theta_1},\partial_{r_2},\partial_{\theta_2})$. Therefore the induced boundary orientation is $-dx\wedge dy$, while normal height into $U_\alpha$ is the positive diagram height for the physical chart $dx\wedge dy$. Hence $\gamma$ is the overstrand at all three crossings. Reversing $\delta$ to its knot orientation makes their signs $+,-,+$. Their cyclic oriented word is $A_oB_oC_oA_uB_uC_u$. This fixes the ambient chirality and the strip-orientation convention simultaneously. [F1, step 1.1, step 2.1, construct, algebra]

4.1 This is an actual annular diagram. Relative to representatives of the three crossing points on $\delta$, the successive edge deck increments of that word are $$-(2,3),-(2,3),(2,3),0,0,(2,3).$$ At a crossing of sign $s$, use cyclic outgoing halfedges $(o+,u s,o-,u(-s))$. Follow an edge and then its next halfedge in this cyclic order. The five boundary cycles of a small ribbon neighborhood are $$\begin{gathered}(A_o+,B_u+,C_o+),\quad(A_u+,B_o-),\quad(B_o+,C_u-),\\(A_o-,C_o-,B_u-),\quad(A_u-,C_u+).\end{gathered}$$ Summing the signed edge increments gives respectively $0,(2,3),(-2,-3),0,0$. The ribbon is connected, has three vertices and six edges, and these five boundary components; hence it has genus zero. Each zero-class boundary is a contractible embedded torus circle. Its disk is disjoint from the ribbon: otherwise connectedness would put the whole ribbon in that disk, contradicting its essential boundary class $(2,3)$. The three disks are consequently pairwise disjoint as well. Filling them gives an embedded annulus whose primitive core is $(2,3)$, containing the whole decorated diagram. [F1, step 2.1, step 3.1, construct, algebra]

5.1 Compare inside this annulus, not just as an abstract Gauss word. Traversing [F2]'s positive band edge $h=a$ in increasing $s$ and the edge $h=-a$ in decreasing $s$ gives $1_u2_o2_u1_o$, both signs positive. Its two essential ribbon boundary cycles are the monogons $1_o+$ and $2_o+$, one around each annular rim; its other cycles bound the two clasp disks. Insert a negative Reidemeister-I curl $3$ on the arc $1_u\to2_o$, on the side of the empty clasp disk with old boundary darts $(2_o-,1_o-)$, obtaining $$1_u3_u3_o2_o2_u1_o.$$ The empty Reidemeister-III triangle has three strands $3_o\to2_o$ above $2_u\to1_o$ above $1_u\to3_u$. Slide them across that disk. Swapping the three adjacent pairs gives $$3_u1_u2_o3_o1_o2_u.$$ Start at $2_o$ and relabel $2\mapsto A,3\mapsto B,1\mapsto C$; the result is exactly the word and signs in step 3.1. This move also matches the rims: the exterior arc $2_o\to2_u$ becomes $3_o\to1_o$, hence the cycle containing $B_o+$; the exterior arc $1_o\to1_u$ becomes $2_u\to3_u$, hence the cycle containing $A_u+$. These are exactly the two essential cycles in step 4.1. The curl's exterior arc becomes the contractible cycle containing $C_u+$. Thus all disk faces, both named annular rims and all strand heights agree. Cap the two rims by named auxiliary disks and apply finite planar reconstruction [F3] face by face, retain those disks, and restrict to their complement. This gives the required annular diagram equivalence; no unmarked annular winding is discarded. Each local move has its actual ambient isotopy by [F3]. [F2, F3, step 3.1, step 4.1, construct, algebra]

6.1 By [F1] normalize the essential annulus to a narrow torus strip with affine core $(2,3)$. The resulting companion is the canonical positively parametrized complex $T(2,3)$; reversing its annular parameter, if necessary to match a chosen rim orientation, is realized by simultaneous conjugation of the two complex coordinates, an orientation-preserving real orthogonal transformation of $S^3$. The ambient torus strip has surface framing $2\cdot3=6$ by [F3]. Step 5.1 identifies its knot with the boundary of this annulus and the positive band, so [F2] identifies it with $D_+(T(2,3),6)$. The actual annulus, ambient orientation and frame are used here; neither the number of Heegaard generators nor any Floer rank establishes the knot type. [F1, F2, F3, step 4.1, step 5.1, construct, algebra]

7.1 Finally a periodic domain has boundary $a\alpha+b\beta$. Their independent primitive homology classes force $a=b=0$. A two-chain with zero boundary on the connected torus is constant on every region. Its $w$ multiplicity zero forces that constant zero. Thus the diagram is admissible. Together with the explicit meridians, bridge witnesses, marks and twenty-five transverse intersections this proves every geometric clause of the Statement. [given, step 1.1, step 3.1, step 6.1, construct, algebra] ∎
