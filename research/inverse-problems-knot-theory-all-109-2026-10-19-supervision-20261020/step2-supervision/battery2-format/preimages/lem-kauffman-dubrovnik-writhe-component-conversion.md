---
id: lem-kauffman-dubrovnik-writhe-component-conversion
kind: lemma
title: Kauffman and Dubrovnik writhe-component conversion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-regular-oriented-link-diagram
  - def-oriented-reidemeister-moves
  - lem-framed-kauffman-link-evaluation
proof_strategy: direct
axiom_use: "Choice-free: the crossing-parity argument and all polynomial calculations use only finite diagram data."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§II, VI, VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "Definition 2.4, PDF p. 7/printed p. 422; §VI, PDF pp. 38–50/printed pp. 453–465; §VII, PDF pp. 51–54/printed pp. 466–469"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.1–2.3"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 4–8: framed regular isotopy, Reidemeister II/III, and local Kauffman tangle relations"
    - title: "Loïc Poulain d'Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, Winter Braids Lecture Notes 7 (2020), §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15: BMW crossing convention and its Kauffman-polynomial role"
---

## Statement

For each nonempty oriented regular link diagram $K$, let $w(K)$ be its
determinant writhe and $c(K)$ its number of
components, and define $D,L,F$ by the conventions stated for this page. Then
$$D_K(a,z)=-i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz),\qquad i^2=-1.$$
The value assigned to $L$ is independent of reversing the orientation of any
whole component. The Dubrovnik value has the stated difference-skein, curl and
circle rules; the Kauffman value has the sum-skein, curl and circle rules; and
$F_K(A,Z)=A^{-w(K)}L_K(A,Z)$ is unchanged by planar isotopy and every oriented
Reidemeister move of types I, II, and III. The claim concerns these finite
diagram moves and uses the universal coefficient relations without dividing
by a skein variable.

## Statement references

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|The local polynomial conventions]]

[[lem-framed-kauffman-link-evaluation|The scalar Dubrovnik evaluation]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Determinant crossing sign and writhe]]

[[lem-linking-number-even-sum-and-reidemeister-invariance|Earlier AC$_\omega$ parity proof, not used here]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §VII](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** A nonempty regular oriented link diagram, its determinant crossing
signs, and the Dubrovnik scalar evaluation.

[F1] The Dubrovnik scalar $P$ is regular-isotopy invariant, has $P(\varnothing)=1$,
positive/negative curl factors $a,a^{-1}$, loop factor $d$, and skein
$P_+-P_-=z(P_0-P_\infty)$ over $z(d-1)=a-a^{-1}$
([[lem-framed-kauffman-link-evaluation]]).

[F2] The determinant writhe is the signed sum of crossing signs; reversing one
strand negates that crossing sign, while reversing both strands preserves it
([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] A regular oriented diagram is a finite generic planar projection with only
transverse double crossings and no triple points; distinct component shadows
therefore have finitely many transverse intersections
([[def-regular-oriented-link-diagram]]).

[F4] A type-I move changes one self-crossing, type II adds or removes two
opposite-sign crossings, and type III preserves its three crossing signs
([[def-oriented-reidemeister-moves]]).

[F5] In the stated polynomial convention, $D=P/d$ on nonempty diagrams,
$L_K(A,Z)=-i^{w(K)}(-1)^{c(K)}D_K(-iA,iZ)$, and $F=A^{-w}L$
([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

## Proof


1.1 Fix distinct components $K_r,K_s$ and let their projected shadows be $\gamma_r,\gamma_s$. Smooth each of the finitely many self-crossings of $\gamma_r$ inside a small disk disjoint from $\gamma_s$; the disk exists because there are no triple points, and the smoothing leaves every mixed intersection with $\gamma_s$ unchanged. After finitely many such smoothings, $\gamma_r$ is a finite disjoint union of embedded circles. As $\gamma_s$ traverses any embedded circle, every transverse intersection changes whether it is inside or outside that circle, and the closed traversal returns to its initial region. Hence the original number of mixed intersections of $K_r,K_s$ is even. Each determinant crossing sign is $+1$ or $-1$, both congruent to $1$ modulo $2$, so the signed mixed-crossing sum $S_{rs}$ is even. Summing over $s\ne r$ shows that the total mixed-crossing sum $S_r$ involving $K_r$ is even. Reversing $K_r$ leaves its self-crossing signs fixed by [F2] and negates its mixed crossing signs, so $w$ changes by $-2S_r\in4\mathbb Z$. Thus $i^w$ is unchanged; $c$ and the unoriented value $D$ are unchanged as well. Therefore the formula defining $L$ is independent of reversing $K_r$, and repeating for every component proves orientation independence. [F2, F3, F5, construct, algebra]

1.2 For a positive curl, $D$ gains a factor $a$ and $w$ increases by $1$; substituting $a_D=-iA$ and $z_D=iZ$ in [F5] shows that $L$ gains the factor $i a_D=A$. For a negative curl, $D$ gains $a^{-1}$ and $w$ decreases by $1$, so $L$ gains $i^{-1}a_D^{-1}=A^{-1}$. Adding a disjoint trivial circle increases $c$ by $1$ and multiplies $D$ by $d$, so the factor $(-1)^c$ makes $L$ acquire the factor $-d$. Set $\delta_L=-d$. Under $a_D=-iA$ and $z_D=iZ$, the coefficient relation $z_D(d-1)=a_D-a_D^{-1}$ becomes $Z(1-d)=A+A^{-1}$, hence $Z(\delta_L+1)=A+A^{-1}$. This gives the Kauffman circle rule using the universal relation without inverting $Z$. [F1, F4, F5, algebra]

1.3 Consider a positive crossing and write $w=w(K_+)$ and $c=c(K_+)$. Switching it gives $w(K_-)=w-2$ and leaves $c$ fixed. Each smoothing deletes that crossing, so before any orientation adjustment its writhe is $w-1$. The orientation-preserving smoothing $K_0$ has $c+1$ components at a self-crossing and $c-1$ at a mixed crossing. The other smoothing $K_\infty$ has $c$ components at a self-crossing and $c-1$ at a mixed crossing. To orient $K_\infty$ at a self-crossing, first use the orientation-preserving smoothing to split the original component into two closed components, then join their arcs by the other smoothing and reverse one of the two orientations. This changes signs at exactly the crossings between that component and the other split component or any remaining component; the pairwise sums are even by step 1.1, so $w(K_\infty)\equiv w-1\pmod4$. At a mixed crossing, reverse one whole incident component in the original diagram. Its writhe changes by minus twice a mixed-crossing sum, which is divisible by $4$ by step 1.1; this reversal changes the displayed crossing from positive to negative and makes $K_\infty$ the orientation-preserving smoothing. Removing that negative crossing raises writhe by $1$, so $w(K_\infty)\equiv w+1\pmod4$. By [F5], the phase $-i^w(-1)^c$ multiplying the Dubrovnik value changes by the factor $i$ on $K_0$ and by $-i$ on $K_\infty$. It also changes sign when the crossing is switched, since $w(K_-)=w-2$. Therefore the Dubrovnik difference skein in [F1] becomes the Kauffman sum skein $L_++L_-=Z(L_0+L_\infty)$ after substituting $a=-iA$ and $z=iZ$, equivalently $A=ia$ and $Z=-iz$. The calculation uses the positive member $K_+$ of the crossing pair; since the resulting sum-skein is symmetric in $K_+$ and $K_-$, it applies whether the input diagram displays the positive or negative member. [F1, F5, step 1.1, algebra]

2.1 By [F1], $D$ is unchanged under planar isotopy and Reidemeister II and III. The determinant writhe is unchanged under II and III by [F2, F4], so the formula in [F5] gives the corresponding regular-isotopy rules for $L$. The positive and negative curl factors are those computed in step 1.2. [F1, F2, F4, F5, step 1.2]

3.1 For a positive type-I move, $$A^{-(w+1)}A L=A^{-w}L;$$ for a negative type-I move, $$A^{-(w-1)}A^{-1}L=A^{-w}L.$$ Moves II and III leave $w$ unchanged, hence also preserve $F$. Therefore $F$ is unchanged by every listed move, while the conversion identity is the defining relation in [F5]. [F2, F4, F5, step 1.2, step 1.3, algebra] ∎
