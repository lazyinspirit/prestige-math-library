---
id: def-serre-class-ring-ideal-and-mod-c-morphism
kind: definition
title: Serre classes, Serre rings, ideals, and modulo-C morphisms
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-snake-lemma-for-modules, def-tensor-product-of-modules-by-generators-and-relations]
proof_strategy: definition
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Serre classes"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 30, Definition 30.1, Examples 30.2–30.5, Lemma 30.6, and Serre rings and ideals, printed pp. 104–107"
---

## Definition

A **Serre class** $\mathcal C$ of abelian groups contains the zero group and is
closed under subgroups, quotient groups, and extensions. Equivalently, for
every short exact sequence
$$0\longrightarrow A\longrightarrow B\longrightarrow C\longrightarrow0,$$
the middle group $B$ lies in $\mathcal C$ if and only if both end groups do.
Membership is understood up to isomorphism.

A Serre class is a **Serre ring** if, whenever $A,B\in\mathcal C$, both
$$A\otimes_{\mathbb Z}B\in\mathcal C\qquad\text{and}\qquad\operatorname{Tor}^{\mathbb Z}_1(A,B)\in\mathcal C.$$
It is a **Serre ideal** if the same two conclusions hold whenever just one of
$A,B$ belongs to $\mathcal C$ and the other is an arbitrary abelian group.
Here $\operatorname{Tor}^{\mathbb Z}_1(A,B)$ denotes any supplied standard
Tor group; the property is invariant under its canonical isomorphisms. This
definition itself neither selects projective resolutions nor invokes a choice
principle.

For a homomorphism $f:A\to B$:

- $f$ is a **$\mathcal C$-monomorphism** if $\ker f\in\mathcal C$;
- $f$ is a **$\mathcal C$-epimorphism** if $\operatorname{coker}f\in\mathcal C$;
- $f$ is a **$\mathcal C$-isomorphism** if it has both properties; and
- $A=0\pmod{\mathcal C}$ means $A\in\mathcal C$.

These definitions include the zero class, the class of all abelian groups,
zero homomorphisms, and maps with zero source or target.

## Immediate consequences and examples

For composable $A\xrightarrow{f}B\xrightarrow{g}C$, the standard kernel-cokernel
sequence
$$
0\to\ker f\to\ker(gf)\to\ker g\to\operatorname{coker}f\to\operatorname{coker}(gf)\to\operatorname{coker}g\to0 \tag{1}
$$
is exact by the element construction in
[[thm-snake-lemma-for-modules]]. Subgroups, quotients, and extensions in (1)
show that $\mathcal C$-isomorphisms are closed under composition and satisfy
two-out-of-three. The same sequence proves composition closure separately for
$\mathcal C$-monomorphisms and $\mathcal C$-epimorphisms.

The following qualifications are part of the convention:

- finite abelian groups and finitely generated abelian groups form Serre
  rings, but not Serre ideals;
- torsion abelian groups and $p$-primary torsion abelian groups form Serre
  ideals, hence Serre rings; and
- finite $p$-primary abelian groups form a Serre ring but not a Serre ideal.

For the finiteness assertions, finite presentations reduce tensor and Tor to
kernels and cokernels of maps between finite or finitely generated groups.
For torsion and $p$-primary torsion, every tensor is a finite sum of elementary
tensors, so one common integer, respectively one power of $p$, kills it; the
same statement holds in the homology of a supplied tensor-resolution complex.
The ideal failures are witnessed explicitly: if
$D=\bigoplus_{j\geq0}\mathbb Z/n$, then
$(\mathbb Z/n)\otimes D\cong D$ is infinite, so finite groups are not an
ideal, while $\mathbb Z\otimes D\cong D$ is not finitely generated, so
finitely generated groups are not an ideal. The zero, one-summand, empty
direct-sum, and $n=1$ cases reduce to the zero group. These are closure
statements, not biconditionals characterizing finite, torsion, or finitely
generated groups.

## Source notes

[Miller, Lecture 30](https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), printed pp. 104–107, gives the short-exact-sequence definition, the modulo-$\mathcal C$ morphisms, Lemma 30.6, and the tensor-and-Tor definitions of Serre ring and ideal. Miller explicitly says that all listed examples are rings and those without finiteness conditions are ideals.
