---
page: type-a-soergel-bimodules-and-hecke-categorification-examples
title: "Type-A Soergel Bimodules and Hecke Categorification — Examples"
status: draft
items: []
examples: [ex-the-rank-one-soergel-category,
           ex-the-type-a-two-rank-two-soergel-decomposition,
           ex-hecke-quadratic-relation-from-the-soergel-square,
           cex-bott-samelson-words-related-by-a-braid-need-not-be-isomorphic-bimodules]
---

These four worked examples make the abstract items of the companion page
concrete. The rank-one example takes $n=2$ and computes the invariant ring
$R^s=\mathbb Q[e_1,e_2]$, the homogeneous $R^s$-basis $\{1,\alpha\}$ of $R$,
the right action of $R$ on the basis $\{u,w_0\}$ of $B_s$, the two
sub-bimodules $R(\delta u\pm w_0)$ with their Frobenius maps and exact
sequences, and the square $B_s\otimes_RB_s\cong B_s(1)\oplus B_s(-1)$ split by
the explicit middle-slot idempotents $e_\pm$ into summands whose homogeneous
basis degrees are $\{-2,0\}$ and $\{0,2\}$ (so the summands are $B_s\{-1\}$
and $B_s\{1\}$, with different graded ranks), so that the abstract rank-one
square is realised by displayed matrices.

The rank-two example takes $n=3$ with $s=s_1$ and $t=s_2$, evaluates the four
generating maps on the rank-one bases using $\partial_s(\alpha_t)=\partial_t(\alpha_s)=-1$,
checks the zig-zag identity and the six-valent relation, constructs the
idempotent $e=-\mu_t^a\circ\kappa_s^a\circ\kappa_s\circ\mu_t$, and verifies the
two decompositions $B_1B_2B_1\cong B_{1,2,1}\oplus B_1$ and
$B_2B_1B_2\cong B_{1,2,1}\oplus B_2$ by an explicit rank count over $R^{S_3}$.
The third example runs the categorification isomorphism backwards: it takes the
class identity produced by the rank-one square, transports it along
$K_0^{\mathrm{split}}(\mathrm{SBim}_n)\cong H_{S_n}$ with $\Phi([B_i])=H_i$,
and recovers the Hecke quadratic relation $(T_i-v^{-2})(T_i+1)=0$, including
the converse direction from the relation back to the class identity.

The counterexample separates the two braid-related words of the rank-two
example: $B_sB_tB_s$ and $B_tB_sB_t$ are not isomorphic as graded bimodules
even though $sts=tst$ in $S_3$, because their decompositions share the longest
parabolic summand $B_{1,2,1}$ but carry the distinct rank-one summands $B_s$ and
$B_t$, and the intrinsic multiplicity of the graph $s_1$ in the $\Delta$-flag
distinguishes the two words. All four entries are self-contained computations
on the fixed small skeletons of the companion page, and none of them uses a
choice principle.
