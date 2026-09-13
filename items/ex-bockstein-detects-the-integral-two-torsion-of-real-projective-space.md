---
id: ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space
kind: example
title: Bockstein detects integral two-torsion in real projective space
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-bockstein-connecting-operation, lem-the-bockstein-is-independent-of-lift-and-cocycle-representative, prop-first-steenrod-square-is-the-mod-two-bockstein, prop-steenrod-square-normalization-instability-and-top-square, lem-real-projective-space-cellular-homology-and-pinch-map, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 3.E, definition and Examples 3E.1--3E.2, printed pages 303--305
verification:
  precheck: pass
---

## Example

Assume AC. Let $n\geq2$ be an integer and let
$a\in H^1(\mathbb {RP}^n;\mathbb F_2)$ be the unique nonzero class. For the
integral and mod-two coefficient sequences, respectively, write

$$\beta_{\mathbb Z}:H^1(\mathbb {RP}^n;\mathbb F_2)\longrightarrow H^2(\mathbb {RP}^n;\mathbb Z),\qquad \beta_2:H^1(\mathbb {RP}^n;\mathbb F_2)\longrightarrow H^2(\mathbb {RP}^n;\mathbb F_2).$$

Then $\beta_{\mathbb Z}(a)$ generates
$H^2(\mathbb {RP}^n;\mathbb Z)\cong\mathbb Z/2$, and

$$\beta_2(a)=Sq^1(a)=a^2.$$

In particular, $a^2$ is the nonzero element of
$H^2(\mathbb {RP}^n;\mathbb F_2)$.

## Facts & Assumptions

**Given:** An integer $n\geq2$, the space $X=\mathbb {RP}^n$, and its unique
nonzero class $a\in H^1(X;\mathbb F_2)$.

[F1] For $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$,
[[def-bockstein-connecting-operation]] represents the integral Bockstein by
lifting a cocycle $c$ to an integral cochain $\widehat c$, writing
$\delta\widehat c=2h$, and taking $[h]$.

[F2] This Bockstein class is independent of the lift and representative by
[[lem-the-bockstein-is-independent-of-lift-and-cocycle-representative]].

[F3] The choice-free integral clause of
[[lem-real-projective-space-cellular-homology-and-pinch-map]] gives, for
$n\geq2$,

$$H_0(X;\mathbb Z)=\mathbb Z,\qquad H_1(X;\mathbb Z)=\mathbb Z/2,\qquad H_2(X;\mathbb Z)=0.$$

[F4] Under AC,
[[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]
gives the integral cohomology sequence with its Ext term computed in the first
variable.

[F5] Under AC,
[[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]] gives

$$H^*(\mathbb {RP}^{\infty};\mathbb F_2)\cong\mathbb F_2[a_\infty],\qquad |a_\infty|=1,$$

and restriction to $X=\mathbb {RP}^n$ is an isomorphism through degree $n$.
For $n\geq2$ it sends $a_\infty$ to $a$ and
$a_\infty^2$ to $a^2$, so $a$ and $a^2$ are the unique nonzero classes in
degrees one and two.

[F6] The mod-two Bockstein is $Sq^1$ by
[[prop-first-steenrod-square-is-the-mod-two-bockstein]].

[F7] The top-square identity in
[[prop-steenrod-square-normalization-instability-and-top-square]] says
$Sq^r(x)=x\smile x$ for a class $x$ of degree $r$.

[A1] [[def-axiom-of-choice]] is assumed for the present combined argument.
[F1], [F2], [F4], and [F5] are cited under their published AC hypotheses;
the integral cellular calculation in [F3], the canonical residue lift, and
the finite Ext calculations below introduce no further choice.

## Verification

**Proof technique:** direct lift-and-divide calculation.

1.1 Choose a mod-two singular cocycle $c$ representing $a$. [given, F1, F2]
Let
$\widehat c$ be its valuewise lift with values zero or one. Since $c$ is a
cocycle, every value of $\delta\widehat c$ is even. Hence there is a unique
integral cochain $h$ with $\delta\widehat c=2h$, and [F1]--[F2] give
$\beta_{\mathbb Z}(a)=[h]$.

1.2 For the mod-two coefficient sequence, the Bockstein is the square of $a$. [F5, F6, F7]
Indeed, [F6] and the degree-one instance of [F7] give

$$\beta_2(a)=Sq^1(a)=a\smile a=a^2.$$

Since $n\geq2$, [F5]'s restriction isomorphism in degree two carries the
nonzero polynomial class $a_\infty^2$ to $a^2$, so $a^2$ is the unique
nonzero degree-two mod-two class.

1.3 The two required integral cohomology groups follow from the A-level cellular calculation. [F3, F4]
In UCT degree one, the outside terms are

$$\operatorname {Ext}^1_{\mathbb Z}(\mathbb Z,\mathbb Z)=0,\qquad \operatorname {Hom}_{\mathbb Z}(\mathbb Z/2,\mathbb Z)=0.$$

The first equality holds because $\mathbb Z$ is free, and the second because
$\mathbb Z$ is torsion-free.  Hence $H^1(X;\mathbb Z)=0$.  In degree two,
the Hom term is zero because $H_2(X;\mathbb Z)=0$, while the free resolution

$$0\longrightarrow\mathbb Z\xrightarrow{2}\mathbb Z\longrightarrow\mathbb Z/2\longrightarrow0$$

computes
$\operatorname {Ext}^1_{\mathbb Z}(\mathbb Z/2,\mathbb Z)$ as the cokernel
of multiplication by two on $\mathbb Z$, namely $\mathbb Z/2$.  Exactness
therefore gives $H^2(X;\mathbb Z)\cong\mathbb Z/2$.

2.1 The integral class $[h]$ is nonzero. [F5, step 1.1, step 1.3]
Suppose instead that $h=\delta k$ for an
integral degree-one cochain $k$. Then

$$\delta(\widehat c-2k)=2h-2\delta k=0.$$

By $H^1(X;\mathbb Z)=0$ in step 1.3, there is an integral degree-zero cochain
$\ell$ with $\widehat c-2k=\delta\ell$. Reduction modulo two would give
$c=\delta(\ell\bmod2)$, contrary to the nonzero class $a=[c]$ in [F5].

3.1 The integral Bockstein class is a generator. [step 1.3, step 2.1]
Indeed, step 1.3 identifies $H^2(X;\mathbb Z)$ with a group having exactly
one nonzero element, step 2.1 makes $\beta_{\mathbb Z}(a)$ that element and
therefore a generator of its integral two-torsion.

4.1 The endpoint and excluded cases introduce no missing assertion. [F3, F4, F5, A1, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1]
The endpoint $n=2$ is included: the two degree-two groups in step 1.3 and
[F5] are still nonzero, whereas $n=0,1$ are excluded because the promised
integral degree-two target is absent. The zero degree-one class is explicitly
excluded because its Bockstein is zero and cannot generate. Real projective
spaces are nonempty, and their point and degree-zero cases do not enter the
claim. The calculation uses ordinary singular cochains, including degenerate
simplices, and makes no cellular-to-singular cochain identification. AC occurs
through [F1], [F2], [F4], and [F5]; the zero/one lift itself is canonical. No biconditional or
converse is asserted. ∎
