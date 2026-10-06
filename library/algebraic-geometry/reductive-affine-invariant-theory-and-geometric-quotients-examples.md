---
page: reductive-affine-invariant-theory-and-geometric-quotients-examples
title: "Reductive Affine Invariant Theory and Geometric Quotients — Examples"
status: published
requires: [reductive-affine-invariant-theory-and-geometric-quotients]
items: []
examples: [lem-invariant-polynomials-of-the-hyperbolic-gm-action-on-the-plane,
           cex-closed-orbit-does-not-imply-stability-positive-dimensional-stabilizer,
           rem-finite-group-noether-theorem-does-not-supply-the-reductive-finiteness-theorem,
           ex-gm-quotient-of-affine-plane]
---

The hyperbolic example computes an invariant ring in full. For
$\mathbf G_m=\mathbb C^\times$ acting on the plane by $t\cdot(x,y)=(tx,t^{-1}y)$
the monomial $x^ay^b$ is scaled by $t^{b-a}$, so a single test value already
forces every off-diagonal coefficient of an invariant polynomial to vanish; the
invariant ring is $\mathbb C[xy]$, a polynomial ring in one variable, and the
categorical quotient of the plane is $\pi(x,y)=xy$ with target the affine line.

The worked quotient example then reads off the orbit picture: the non-zero
fibres of $\pi$ are the hyperbolae $xy=c$, each a single closed orbit; the two
punctured coordinate axes are orbits whose closures contain the origin; and the
origin is fixed, hence closed, with stabilizer all of $\mathbf G_m$. The stable
locus is therefore $\{xy\neq0\}$, and there the explicit product decomposition
$(x,y)\mapsto(x,xy)$, with inverse $(t,c)\mapsto(t,c/t)$, exhibits the quotient
as the projection of a trivial $\mathbf G_m$-bundle over $\mathbb C^\times$ with
the structure group acting on the first factor. The origin is unstable although
its orbit is closed.

The counterexample isolates that last phenomenon in its simplest form: the
trivial action of $\mathbf G_m$ on a one-point set has a closed orbit but an
infinite stabilizer, so closedness of the orbit alone does not imply stability.
The final remark compares hypotheses rather than proving a theorem: Noether's
finiteness theorem for finite groups requires finiteness, which fails for
$\mathbf G_m$, so it is not a substitute for the Reynolds-operator proof of
finite generation for positive-dimensional reductive groups; no reduction of a
reductive action to a finite-group action is asserted. The Axiom of Choice is
inherited from the quotient and stable-locus suppliers used by the worked
example.
