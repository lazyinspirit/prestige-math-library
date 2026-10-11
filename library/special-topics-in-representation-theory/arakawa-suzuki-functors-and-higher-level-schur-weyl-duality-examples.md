---
page: arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples
title: "Arakawa–Suzuki Functors and Higher-Level Schur–Weyl Duality — Examples"
status: draft
requires: [arakawa-suzuki-functors-and-higher-level-schur-weyl-duality]
items: []
examples: [ex-degenerate-affine-hecke-relations-on-two-tensor-factors,
           ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration,
           cex-a-hecke-action-alone-does-not-imply-double-centralizer,
           ex-vust-double-centralizer-in-a-small-stable-range,
           ex-a-block-idempotent-corner-outside-the-stable-range]
---

**Objective.** This companion page works the smallest nontrivial instances of
the Arakawa–Suzuki/finite-W dictionary of
[[arakawa-suzuki-functors-and-higher-level-schur-weyl-duality]] and records
two boundary phenomena: a genuine commuting Hecke action on an arbitrary
tensor module that does not satisfy a double centralizer, and an
outside-stable-range block idempotent corner. All computations are finite and
explicit, over $\mathbb C$, with the Axiom of Choice where the parent items
assume it.

**The Hecke relations on two tensor factors.**
[[ex-degenerate-affine-hecke-relations-on-two-tensor-factors]] takes
$\mathfrak{gl}_2$, $M=V=\mathbb C^2$ and $d=2$, so $x_1=P_{01}$,
$s_1=P_{12}$ and $x_2=P_{02}+P_{12}$ on $V^{\otimes3}$; it checks
$s_1^2=1$, $[x_1,x_2]=0$ and both affine cross relations on the eight tensor
words, computes the explicit action on $v_1\otimes v_2\otimes v_1$, and
records that $[s_1,x_2]\neq1$.

**A level-two cyclotomic polynomial.**
[[ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration]] takes
the source-ordered pyramid $p=(1,2)$, $q=(2,1)$, $N=3$, $n=2$, $c=(0,0)$, so
$e=E_{23}$ and $x_1=E_{23}+\operatorname{diag}(0,0,-1)$ on $V$: the minimal
polynomial is $x(x+1)$, with the two eigenspaces explicitly displayed, and the
cyclotomic quotient has dimension $2^dd!$ in every degree.

**Vust's theorem in a small stable range.**
[[ex-vust-double-centralizer-in-a-small-stable-range]] verifies the Vust
double centralizer for the one-column pyramid $\lambda=(1,1)$ in the stable
range $d=1,2$: restriction and the $e=0$ specialization reduce the statement
to classical Schur–Weyl duality for $V^{\otimes2}=S^2V\oplus\Lambda^2V$, with
the two centralizer dimensions matched explicitly.

**Two boundaries: a noninjective Hecke action and a non-stable corner.**
[[cex-a-hecke-action-alone-does-not-imply-double-centralizer]] shows that a
natural, genuine commuting $H_1$-action on $M\otimes V$ with $M=\mathbb C^2$ the two-dimensional trivial
$\mathfrak{gl}_2$-module satisfies neither double centralizer equality,
because the truncated/deformed setup is a needed hypothesis; both failures are
computed in dimension.
[[ex-a-block-idempotent-corner-outside-the-stable-range]] takes
$\lambda=(1,1)$ and $d=3$, where the stable range fails: the image of
$\mathbb C[S_3]$ on $V^{\otimes3}$ has dimension $5$ and is identified with
the block idempotent corner $f\mathbb C[S_3]f$ of the trivial and standard
blocks, the killed sign block being spanned by the antisymmetrizer.
