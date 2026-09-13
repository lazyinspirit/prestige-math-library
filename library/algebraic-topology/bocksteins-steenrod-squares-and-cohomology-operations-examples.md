---
page: bocksteins-steenrod-squares-and-cohomology-operations-examples
title: Bocksteins Steenrod Squares and Cohomology Operations — Examples
status: draft
items: []
examples: [ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space, ex-steenrod-squares-on-real-projective-space, ex-steenrod-squares-on-complex-projective-space-mod-two, ex-adem-relation-sq-one-sq-one-equals-zero, ex-wu-classes-of-a-closed-surface, cex-the-top-square-formula-does-not-define-all-lower-squares, cex-steenrod-squares-are-not-integral-cohomology-operations]
---

The first calculation follows the degree-one class of real projective space
through both coefficient sequences: its integral Bockstein generates the
degree-two integral two-torsion, while its mod-two Bockstein is
$Sq^1(a)=a^2$. Cartan's formula then turns the total square of the projective
generator into the binomial formula
$Sq^i(a^j)=\binom ji a^{j+i}$, with truncation on finite projective space.
The analogous complex-projective calculation has only even squares:
$Sq^{2i}(c^j)=\binom ji c^{j+i}$, and every odd square vanishes.

The relation $Sq^1Sq^1=0$ is checked directly through the integral and
mod-four Bocksteins, independently of the general Adem theorem. The surface
example then constructs the orientation-sign cocycle from local orientation
transport. Its chain proof draws on the later local-coefficients treatment:
the signed orientation zero-cochain is capped with the canonical twisted
fundamental cycle, and the cap-boundary identity converts its even coboundary
into the mod-four $Sq^1$ pairing. This proves
$v_1=w_1$, along with the orientability criterion, without assuming Wu's
formula as an input.

The final counterexamples separate three assertions that can otherwise look
deceptively similar. Two degree-two classes can have the same zero top square
but different lower $Sq^1$, so top squares do not determine the lower
operations. Also $Sq^2$ cannot be the mod-two reduction of an
integral-valued operation: on a degree-three class of
$\mathbb {RP}^{\infty}$ it has a nonzero degree-five value although the
integral degree-five cohomology group vanishes. This obstruction does not
apply to $Sq^1$, whose integral-valued lift is the integral Bockstein.
