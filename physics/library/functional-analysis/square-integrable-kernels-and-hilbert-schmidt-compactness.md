---
page: square-integrable-kernels-and-hilbert-schmidt-compactness
title: Square-Integrable Kernels and Hilbert–Schmidt Compactness
status: published
items: [def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, thm-hilbert-schmidt-operators-are-compact, lem-product-rectangle-kernels-are-dense-in-product-l-two, thm-l-two-kernels-give-hilbert-schmidt-operators]
examples: []
---

The page begins with the Hilbert–Schmidt definition relative to a supplied
Hilbert basis: for a bounded operator $T:H\to K$ the square-sum
$\sum_{e\in E}\|Te\|^2$ is the supremum of its finite subsums, with no
enumeration, ordering or countability of the basis assumed and no existence of
a basis asserted. The first theorem shows under Countable Choice that this
value is basis independent, computing it as the supremum of the matrix
coefficients $|\langle Te,f\rangle|^2$ over finite rectangles and identifying it
with $\sum_{f\in F}\|T^*f\|^2$ for a Hilbert basis $F$ of the target; this is
plain double Parseval, with the nonnegative finite-supremum interchange proved
rather than assumed. Hilbert–Schmidt operators are then shown to be compact:
for a finite coordinate set $F$ the operator $T-TP_F$ has norm at most the
square root of the tail sum, the truncations $TP_F$ are compact because the
closed unit ball of the finite-dimensional span of $F$ is compact, and a
sequence of tail-control sets chosen with Countable Choice puts $T$ in the norm
closure of the compact operators of a Banach target.

The second half prepares the analytic input. Finite complex linear combinations
of finite-measure rectangle kernels are proved dense in the product $L^2$ of
two sigma-finite factors, first for the product measure and then for its
completion: a finite-measure exhaustion reduces a set of finite product measure
to one exhausted rectangle, the generating algebra of finite rectangle unions
approximates it in symmetric difference on the trace of that rectangle, and the
completion case passes through a base-measurable representative of every
completed measurable set.

The kernel theorem then assembles the pair. Under the Axiom of Choice a
completed $L^2$ class $k$ of the product is represented by a product-measurable
kernel of the same norm, the section integral
$(T_kf)(x)=\int_Yk(x,y)f(y)\,d\nu(y)$ is shown to be defined for almost every
$x$, independent of the chosen representatives, measurable, and bounded with
$\|T_k\|\le\|k\|_2$. The exact Hilbert–Schmidt norm is computed with the
orthonormal family of products $f(x)\overline{e(y)}$ of a pair of Hilbert bases:
rectangle kernels lie in its closed span, rectangle density places $k$ there,
Bessel's inequality with a finite-Parseval lower bound identifies the norm of
the expansion with $\|k\|_2^2$, and Parseval rewrites that value as
$\sum_{e\in E}\|T_ke\|^2=\sum_{f\in F}\|T_k^*f\|^2$. Hilbert bases are
constructed here by Zorn's lemma, so the statement is unconditional under the
Axiom of Choice and never uses the later singular-value or trace-class
machinery.
