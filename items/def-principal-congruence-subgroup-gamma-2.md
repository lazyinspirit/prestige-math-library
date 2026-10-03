---
id: def-principal-congruence-subgroup-gamma-2
kind: definition
title: "The principal congruence subgroup Gamma(2)"
status: draft
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - def-group-homomorphism
  - def-kernel-and-image-of-group-homomorphism
  - thm-first-isomorphism-theorem-groups
  - thm-quotient-group-laws
  - def-congruence-modulo-an-integer
  - def-integers-modulo-n
  - cor-order-of-a-quotient-group
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Congruence subgroups and reduction surjectivity, printed p. 28; Example 4.2, p. 48: index six and level-two cusps."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, the exact sequence 0 -> Gamma(2) -> SL2(Z) -> SL2(Z/2) -> 0, printed p. 95."
---

## Definition

The **principal congruence subgroup of level $2$** is

$$\Gamma(2):=\{\gamma\in SL_2(\mathbb Z):\gamma\equiv I\pmod 2\},$$

the congruence $\gamma\equiv I\pmod2$ being entrywise
([[def-congruence-modulo-an-integer]], [[def-integers-modulo-n]],
[[def-modular-group-action-on-the-upper-half-plane]]).

It is the kernel of the entrywise reduction homomorphism
$\rho:SL_2(\mathbb Z)\to SL_2(\mathbb F_2)$: reduction of entries is a group
homomorphism because addition and multiplication of residues are compatible with
the operations on $\mathbb Z$, and it lands in $SL_2(\mathbb F_2)$ because
$\det\gamma=1$ reduces to $1$ ([[def-group-homomorphism]],
[[def-kernel-and-image-of-group-homomorphism]]). Hence $\Gamma(2)$ is a normal
subgroup of $SL_2(\mathbb Z)$ ([[thm-first-isomorphism-theorem-groups]]) and it
contains $\pm I$, since $-1\equiv1\pmod2$.

The reduction is surjective. Indeed $SL_2(\mathbb F_2)=GL_2(\mathbb F_2)$ (the
only nonzero scalar in $\mathbb F_2$ is $1$), and it has order $6$: its first
column is any of the three nonzero vectors of $\mathbb F_2^2$, and then the
second column is any of the two vectors outside the span of the first, the
resulting matrix being automatically invertible. The images
$\bar S,\bar T$ of $S,T\in SL_2(\mathbb Z)$ lie in the image of $\rho$ and
generate $SL_2(\mathbb F_2)$: $\bar T^2=1$, $(\bar S\bar T)^3=1$ by reduction of
$S^2=(ST)^3=-I\equiv I$, and $\bar S\notin\langle\bar T\rangle$, so
$\langle\bar S,\bar T\rangle$ has order divisible by $2$ and $3$ and at most $6$,
hence equals $SL_2(\mathbb F_2)$
([[def-modular-group-action-on-the-upper-half-plane]]). So $\rho$ is onto, and
the first isomorphism theorem identifies $SL_2(\mathbb Z)/\Gamma(2)$ with
$SL_2(\mathbb F_2)$; therefore

$$[SL_2(\mathbb Z):\Gamma(2)]=|SL_2(\mathbb F_2)|=6$$

([[thm-first-isomorphism-theorem-groups]],
[[cor-order-of-a-quotient-group]], [[thm-quotient-group-laws]]).

Finally let $\bar\Gamma(2)\le PSL_2(\mathbb Z)$ be the image of $\Gamma(2)$
under the quotient map $SL_2(\mathbb Z)\to PSL_2(\mathbb Z)$. Since $\rho$ kills
$-I$, it factors through that quotient and defines a surjective homomorphism
$PSL_2(\mathbb Z)\to SL_2(\mathbb F_2)$ whose kernel is exactly
$\bar\Gamma(2)$. As $\Gamma(2)$ contains $\ker(SL_2(\mathbb Z)\to PSL_2(\mathbb Z))=\{\pm I\}$,
the correspondence of subgroups in the quotient gives
$[PSL_2(\mathbb Z):\bar\Gamma(2)]=[SL_2(\mathbb Z):\Gamma(2)]=6$, and
$\bar\Gamma(2)$ is the kernel of that reduction
([[thm-first-isomorphism-theorem-groups]]).
