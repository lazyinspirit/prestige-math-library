---
id: lem-whitehead-six-explicit-affine-involution-centers-the-alexander-grading
kind: lemma
title: "The explicit Whitehead-six model has its absolute Alexander and Maslov gradings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-explicit-whitehead-six-torus-diagram-geometric-admission
  - lem-whitehead-six-torus-diagram-has-the-actual-twenty-five-generator-differential
  - lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension
  - lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath–Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/abs/math/0512348"
      locator: "The twenty-five-generator model; the absolute centering here is a separate explicit geometric calculation, not a rank-symmetry inference."
---

## Statement

Assume Countable Choice. Use the explicit embedded Whitehead-six diagram, its labels and its actual disk differential from the two cited suppliers. Choose its sufficiently small corner smoothings equivariantly under
$$T(x,y)=(121/2-x,89/2-y)\pmod{(25,16)}.$$
For the zero-framed negative-gradient Seifert normalization, the actual absolute Alexander values of $x_1$ and $x_{25}$ are both zero. Consequently the relative Alexander function centered at $x_1=0$ in the actual twenty-five-generator matrix is its absolute Alexander function. The minimum Alexander level whose total-hat subcomplex maps nontrivially to total-hat homology is zero. Normalize its unique total-hat homology class to Maslov degree zero. Then the Alexander-one associated-graded hat group has four generators in Maslov degree $1$ and two in Maslov degree $-1$; in particular its even Maslov rank is zero. This is a normalization and threshold statement about this specified diagram with its actual autonomous disk counts; comparison with arbitrary auxiliary data or other Heegaard diagrams is separate.

## Facts & Assumptions

**Given:** The specified rational torus diagram, its actual Clifford embedding, compression disks and bridge witnesses. The corner smoothing may be chosen in the stated paired disks.

[F1] The geometric supplier specifies all twenty-six period vertices $P_0,\ldots,P_{25}$, the bridge arcs and the physical torus orientation. Its torus diagram represents $D_+(T(2,3),6)$. ([[lem-explicit-whitehead-six-torus-diagram-geometric-admission]])

[F2] The actual disk calculation gives $A(x_1)-A(x_{25})=0$ from its Whitney domains. With the relative center $A(x_1)=0$, its exact total-hat homology projection detects $[x_5]$, all negative-level generators are boundaries, and its minimum nonzero-image level is zero. ([[lem-whitehead-six-torus-diagram-has-the-actual-twenty-five-generator-differential]])

[F3] The zero-framed construction uses the negative modified compatible gradient on the exterior and a zero-relative-Euler cap, and evaluates $A$ by half its determinant Chern pairing with the oriented capped Seifert surface. It is independent of auxiliary trajectory replacements and zero-Euler cap choices, is integral, and commutes with orientation-preserving isomorphisms of the supplied data. ([[lem-doubly-pointed-knot-morse-fields-have-a-zero-framed-seifert-extension]])

[F4] The actual relative Maslov grading satisfies $M(x)-M(y)=\mu-2n_w$. A finite actual count complex with rank-one total-hat homology has its unique three-sphere normalization by placing that class in degree zero; an exact finite rank computation supplies this hypothesis without importing a diagram equivalence. ([[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]], [[lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization]])

## Proof

1.1 The finite vertex table in [F1] gives the literal equalities $T(P_j)=P_{25-j}$ for $1\le j\le24$ in the displayed plane, before quotienting. These are all genuine corners. The remaining period seam lies on one straight segment, and $T$ exchanges its two pieces after period gluing. Pair the small corner disks and their smoothings by $T$; no fixed corner or changed crossing is needed. Thus $T(\alpha)=\alpha$ exactly. It carries $\beta_0$ to the horizontal circle $\beta_{25/2}$. For the lifts $W=(20,17/2)$ and $Z=(31/2,4)$ one has $T(W)=Z$ and $T(Z)=W$ modulo the lattice. On the Clifford three-sphere the actual extension is $(z_1,z_2)\mapsto(e^{2\pi i(121/2)/25}\overline z_1,e^{2\pi i(89/2)/16}\overline z_2)$. Both complex conjugations together have positive real determinant, and the phases are rotations, so this extension preserves the ambient orientation and each solid torus. It carries the bridge and compression witnesses to witnesses for the image diagram. These represent the reversed original knot in the same fixed splitting: $T(\delta)$ is literally the reversed straight $\delta$ after the common lift translation $(25,32)$, and $T(\gamma)$ and reversed $\gamma$ have the same lifted endpoints after that same translation. Both lie in the annulus $T\setminus\alpha$. Their concatenation is nullhomologous in the torus, hence nullhomotopic in this annulus, since its core maps to a primitive nonzero torus class. Embedded homotopic arcs with these fixed endpoints are isotopic there: make their intersections transverse and remove an innermost empty bigon in the covering strip; the number of intersections decreases finitely, and the final two arcs bound a disk. Pushing across those disks gives the isotopy, fixed at the endpoints. Thickening it carries the shallow alpha bridge witnesses while the beta bridge stays in the opposite handlebody. Thus the actual oriented knot and its reversed surface can be identified, rather than inferred from common diagram labels. By [F3] it preserves the absolute evaluation when all its oriented data are carried. [F1, F3, given, construct, algebra]

1.2 Basepoint interchange negates that evaluation by an explicit field calculation. For any fixed supplied diagram exchange $w,z$, reverse its represented knot and orient its Seifert surface by $F'=-F$. In [F3]'s tube coordinates take $t'=\pi-t$, $\theta'=-\theta$, with $r$ unchanged. Then $dt'\wedge dr\wedge d\theta'=dt\wedge dr\wedge d\theta$, and $\sin t'(1-r^2/2)=\sin t(1-r^2/2)$. Hence the same actual compatible Morse function, metric and selected generator cancellations give the same exterior negative-gradient field. The boundary section changes from $-\partial_\theta$ to $-\partial_{\theta'}=\partial_\theta$; multiplying a nonzero boundary section by $-1$ is homotopic through nonzero sections by a constant half-turn in the oriented plane. The zero-surgery coordinate identification $\varphi'=\pi-\varphi$, $\lambda'=-\lambda$ is orientation preserving and identity on the physical attached exterior; it carries a zero-relative-Euler cap to another such cap. Their relative lifts coincide by [F3]. The capped surface class reverses. Therefore $A_{z,w}(x)=-A_{w,z}(x)$, with no chain symmetry or homology-rank premise. [F3, construct, algebra]

2.1 In the original basepoint ordering move the circle $\beta_s=\{y=s\}$ from $s=25/2$ to $s=16$. This annulus contains neither basepoint, and misses the explicit beta bridge, whose physical heights lie in $[4,17/2]$. The selected point $T(x_1)$ has lift $(121/2,89/2)$ on the final straight alpha segment $x-y=16$. Along the moving circle it follows $(x,y)=(16+y,y)$ for $89/2\le y\le48$, reaching $(64,48)\equiv(14,0)=x_{25}$. This track is everywhere transverse. The beta isotopy extends over a thin handlebody boundary collar supported away from the bridge and then carries its compression disk. Choose compatible Morse data continuously on these disk products and the complementary cut ball; the selected intersection track gives a continuous family of its generator trajectory and cancellation neighborhoods disjoint from the knot. Other alpha/beta tangencies during the motion do not affect that selected transverse track or require any chain-map assertion. The associated nonvanishing exterior fields, capped surface and zero-Euler extensions therefore vary continuously. Their integral relative Euler pairing is constant. Thus the absolute value at the start of this tracked motion equals $A_{w,z}(x_{25})$. Step1.1 and step1.2 identify its start value as $-A_{w,z}(x_1)$. Consequently $A(x_{25})=-A(x_1)$. By [F2] their difference is zero, so integrality gives $A(x_1)=A(x_{25})=0$. Every remaining value and the stated nonzero-image threshold now follow from the actual relative matrix calculation [F2]. No arbitrary-move invariance or unproved absolute-grading symmetry has been used. [F1, F2, F3, step 1.1, step 1.2, construct, algebra]

3.1 The homogeneous cycle $x_5$ represents the nonzero total-hat homology class: [F2]'s actual functional has $p\partial=0$ and $p(x_5)=1$, and its actual rank calculation gives dimension one. Set $M(x_5)=0$ by [F4]. The terms of the displayed differential determine every relative Maslov degree. In particular $\partial x_2=x_1+Ux_5$ gives $M(x_2)=-1$ and $M(x_1)=-2$. The middle blocks $\partial x_r=x_{r-1}+x_{r+3}$, $r=6,10,14,18$, give successively $M(x_9)=M(x_{13})=M(x_{17})=M(x_{21})=0$ and $M(x_6)=M(x_{10})=M(x_{14})=M(x_{18})=1$. Finally $\partial x_{22}=x_{25}+Ux_{21}$ gives $M(x_{22})=-1$ and $M(x_{25})=-2$. These are actual index-one differential terms, so the degree calculation uses their proved counts and [F4], not a proposed absolute degree of a cobordism map. The absolutely centered Alexander-one generators are precisely $x_2,x_6,x_{10},x_{14},x_{18},x_{22}$. Every displayed differential term has $n_w+n_z>0$, and after setting $U=0$ its surviving terms have $n_z>0$. Thus the Alexander-associated-graded hat differential is zero. Its Alexander-one homology consists of these six classes, four in degree $1$ and two in degree $-1$, all odd. This proves the remaining absolute grading and even-rank assertions. [F2, F4, step 2.1, construct, algebra] ∎
