---
dependency_level: 0
id: lem-affine-jet-functions-have-uniform-pole-bounds
kind: lemma
title: Affine jet functions have uniform pole bounds
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-derivation-algebra
  - thm-differentials-smooth-locally-free
  - lem-ag-differentials-transitivity
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - thm-valuative-criterion-properness
  - thm-projective-space-proper-over-base
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-line-bundle-rational-section-cartier-divisor
  - cor-projective-cohomology-finite-dimensional-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §3(1–2), printed pp. 140–141; normal-compactification pole-bound formulation"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(C), printed pp. 67–69"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed and let $R$ be a smooth affine
integral $k$-variety of positive dimension, with function field $K$.
Suppose a normal integral projective compactification
$R\hookrightarrow\overline R$ is given. Let $X\to R$ be a smooth proper
family of geometrically integral curves, with $X$ integral, and suppose a
closed $R$-embedding $X\hookrightarrow\mathbf P^N_R$ is given.
Let $F\to X$ be the affine bundle of splittings of
$$0\to T_{X/R}\to T_{X/k}\to\pi^*T_{R/k}\to0.$$
Write $j(s)$ for the derivative jet of a rational section $s:R\dashrightarrow X$.

For any finite list $f_1,\ldots,f_m\in\Gamma(F,\mathcal O_F)$ there is
a finite-dimensional $k$-subspace $W\subseteq\Gamma(R,\mathcal O_R)$ such
that $f_l\circ j(s)\in W$ for every $l$ and every rational section $s$.
More precisely, there is an effective Cartier divisor $H$ on $\overline R$
and an integer $M\ge0$ such that all these rational functions belong to
$H^0(\overline R,\mathcal O_{\overline R}(MH))\subseteq K$.
Existence of the given compactification and projective embedding is not
asserted here. The characteristic of $k$ is unrestricted.

## Facts & Assumptions

**Given:** AC and the models, embedding, splitting bundle, and finite list
of regular functions in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Smooth differentials are locally free. In a standard smooth
presentation the invertible Jacobian block solves the dependent
differentials; hence over a smooth base the absolute-to-relative tangent
sequence is locally split exact. Derivations obey the chain rule.
[[thm-differentials-smooth-locally-free]]
[[lem-ag-differentials-transitivity]] [[def-derivation-algebra]]

[F2] The regular locus of a finite-type reduced scheme over a perfect
field is open. A regular finite-type scheme over a perfect field is smooth.
A normal Noetherian domain has DVR local rings at its height-one primes.
[[thm-nonempty-regular-locus-reduced-variety-perfect-field]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]

[F3] A rational function on a normal Noetherian scheme that is regular
at every height-one point is regular. Applying this in local frames gives
the same assertion for a rational section of an invertible sheaf.
[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]

[F4] Projective space is proper, and properness gives unique extensions
of maps from the fraction field of a valuation ring to that ring.
[[thm-projective-space-proper-over-base]]
[[thm-valuative-criterion-properness]]

[F5] Closed projective subschemes are cut out by homogeneous ideals.
A nonzero homogeneous form on an integral projective scheme defines an
effective Cartier divisor when its zero locus is nonempty; its associated
invertible sheaf identifies rational sections with rational functions
having at most the prescribed divisor of poles.
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[thm-line-bundle-rational-section-cartier-divisor]]

[F6] Coherent cohomology on a proper scheme over a field is
finite-dimensional, in particular the global sections of an invertible
sheaf on a projective scheme are finite-dimensional.
[[cor-projective-cohomology-finite-dimensional-field]]

## Axiom use

AC is inherited from the stated suppliers. Only finitely many boundary
components, charts, functions and exponents are selected in the argument.

## Proof

**Proof technique:** direct; clear denominators on an ambient jet model at
each boundary divisor and then use normality and proper cohomology.

1.1 Put $S=\overline R_{\mathrm{reg}}$. By [F2] this is a smooth open containing $R$ and all height-one points of $\overline R$. On $A=\mathbf P^N_S$, the splittings of $T_{A/k}\to T_{S/k}|_A$ form a finite-type affine bundle $J\to A$: locally [F1] constructs a splitting, and differences are homomorphisms from the pulled-back base tangent bundle to $T_{A/S}$. The closed embedding $X\subseteq A_R$ realizes $F$ as a closed subscheme of $J_R$. Indeed in affine coordinates its equations are the equations $g=0$ of $X$, together with $dg(v)=0$ for each lifted base tangent vector $v$. These finitely many conditions say exactly that the ambient splitting factors through $T_{X/k}$; the Jacobian description in [F1] identifies the resulting splitting bundle with $F$. Let $\overline F$ be its reduced closed closure in $J$. It is integral, since $F$ is an affine-space bundle over integral $X$, and $\overline F|_R=F$. Each $f_l$ is therefore a rational function on $\overline F$, regular over $R$. [F1, F2, given, construct]

2.1 There are finitely many codimension-one components $D_1,\ldots,D_r$ of $\overline R\setminus R$. At their generic points $\eta_i$, [F2] supplies DVRs. For each $i$ choose an affine neighbourhood $U_i\subseteq S$ of $\eta_i$ and $h_i\in\Gamma(U_i,\mathcal O)$ such that $U_i\cap R=D(h_i)$ and $\operatorname{ord}_{D_i}(h_i)=1$. Here is the local justification: a uniformizer in the local DVR is a fraction regular on a neighbourhood; the ideal of $D_i$ is generated by it after shrinking, since equality of finitely generated ideals at a point persists on a neighbourhood. Remove the other finitely many boundary components and shrink again. The remaining boundary has support exactly $V(h_i)$. Cover the finite-type scheme $\overline F_{U_i}$ by finitely many affine opens $V_a$. On each $V_a$, regularity of $f_l$ over $D(h_i)$ means $f_l\in\Gamma(V_a,\mathcal O)[h_i^{-1}]$. Thus some exponent clears its denominator. Taking the maximum over these finitely many opens and functions gives $N_i\ge0$ such that $h_i^{N_i}f_l$ is regular on all of $\overline F_{U_i}$, for every $l$. These exponents do not depend on a section. [F2, given, algebra, step 1.1]

3.1 Let $s$ be any rational section. Regard it as a rational section of $\mathbf P^N_S$. At each $\eta_i$, properness and [F4] extend it over $\mathcal O_{S,\eta_i}$. This extension spreads to a neighbourhood of $\eta_i$: in an affine target chart its finitely many coordinates belong to the local ring, and clearing denominators makes them regular on such a neighbourhood; their equations hold there since they hold in its fraction field. Differentiate this regular ambient section to get a regular map to $J$ by [F1]. Its generic point lies in $F$, so it factors through $\overline F$: every defining equation of that closed subscheme vanishes generically and hence on the integral source neighbourhood. Evaluating step 2.1 consequently gives $\operatorname{ord}_{D_i}(f_l(j(s)))\ge-N_i$. At each height-one point inside $R$, apply the same valuative extension directly to the proper morphism $X\to R$. Its derivative jet is regular there, so $f_l(j(s))$ has nonnegative order there. By [F3] it follows that $f_l(j(s))$ belongs to $\Gamma(R,\mathcal O_R)$. [F1, F3, F4, given, algebra, step 1.1, step 2.1]

4.1 Choose a projective embedding of $\overline R$. For each nonempty $D_i$, [F5] gives a homogeneous form vanishing on $D_i$ but not identically on $\overline R$: otherwise its homogeneous ideal would define all of $\overline R$. The product of these finitely many forms is nonzero on the integral scheme $\overline R$ and defines an effective Cartier divisor $H$ containing every $D_i$. If there are no such components, take $H=0$. Choose $M\ge0$ with $M\operatorname{ord}_{D_i}(H)\ge N_i$ for all $i$. Step 3.1 shows that each $f_l(j(s))$, regarded as a rational section of $\mathcal O(MH)$, is regular at every height-one point of $\overline R$. At a height-one point outside the boundary it is regular already, and the extra effective divisor cannot introduce a pole. In local frames [F3] therefore extends it over all of $\overline R$. Thus it lies in $H^0(\overline R,\mathcal O(MH))$. This space is finite-dimensional by [F6]. Its intersection inside $K$ with $\Gamma(R,\mathcal O_R)$ is the required finite-dimensional space $W$. If the list of functions or the set of rational sections is empty, the same construction, with unused exponents zero, still applies. [F3, F5, F6, given, construct, step 3.1] ∎
