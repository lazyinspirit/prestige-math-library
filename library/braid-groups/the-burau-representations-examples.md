---
page: the-burau-representations-examples
title: "The Burau Representations — Examples"
status: draft
requires: [the-burau-representations]
items: []
examples: [ex-unreduced-and-reduced-burau-matrices-for-b-three,
           ex-the-burau-image-of-the-full-twist,
           ex-specializing-burau-at-t-equals-one-recovers-permutation-data,
           cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring]
---

These four entries make the companion page's constructions concrete in the
smallest cases and delimit one tempting overstatement.

The first example writes out the unreduced Burau matrices for $n=3$ in the
frozen relative lifted-edge basis, verifies the braid relation by direct
$3\times3$ multiplication, and reads the reduced matrices off the
invariant-covector kernel in the basis $(g_1,g_2)=(te_1-e_2,\,te_2-e_3)$,
checking the braid relation again at the $2\times2$ level. The second computes
the image of the center: the full twist $\Delta^2$ maps to the scalar
$t^3I_2$, so the image of $Z(B_3)$ is infinite cyclic and $\bar\rho_3$ is
injective on it, while at $t=-1$ the same scalar becomes $-I_2$ even though
its square is the identity.

The third assumes $n\ge2$ and specializes at $t=1$, where the unreduced matrices become
permutation matrices and the representation factors through the symmetric
group; the rational splitting of the sum-zero lattice is visible, but over
$\mathbb Z$ the sum $\mathbb Zv+\{x:\sum_ix_i=0\}$ is only the proper
sublattice $\{x:\sum_ix_i\equiv0\bmod n\}$, so the rational splitting is not
integral.

The counterexample refutes the statement that every invariant line in a finite
free module over $\Lambda_1$ has an invariant complement: the Burau line
$\Lambda_1v$ is $B_n$-invariant, but an invariant complement would give an
equivariant projection, hence an invariant covector $\lambda=c\,\sigma$ with
$c\,\sigma(v)=1$; that would make $1+t+\cdots+t^{n-1}$ a unit of $\Lambda_1$,
which it is not for $n\ge2$. This is the integral obstruction behind the
field-only splitting used by the same-kernel proposition.
