---
id: def-base-point-linear-system
kind: definition
title: "Base points and base-point-free linear systems"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-coherent-module-scheme
  - def-complete-linear-system
  - def-divisor-smooth-proper-curve
  - def-finite-type-finite-presentation-module-sheaf
  - def-globally-generated-sheaf
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-riemann-roch-space-of-divisor
  - lem-curve-closed-subsets-finite
  - lem-field-is-noetherian
  - thm-cartier-weil-divisors-curves-agree
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-line-bundle-rational-section-cartier-divisor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Let $k$ be a field, let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) with function field $k(C)$, let
$D$ be a divisor on $C$ ([[def-divisor-smooth-proper-curve]]), and let
$V\subseteq L(D)$ be a $k$-subspace of the Riemann-Roch space
([[def-riemann-roch-space-of-divisor]]).

Write $D=\sum_x n_x[x]$, so that $n_x=\operatorname{ord}_x(D)$ is the
coefficient of $D$ at the closed point $x$. A nonzero $f\in L(D)$ satisfies
$\operatorname{div}(f)+D\ge0$ by definition of $L(D)$, and the effective
divisor $\operatorname{div}(f)+D$ depends only on the $k^{\times}$-orbit of
$f$ ([[def-riemann-roch-space-of-divisor]]).

Assume the Axiom of Choice for the current local-order, Cartier/Weil, and
finite-dimensionality supplier routes ([[def-axiom-of-choice]]). It supplies
Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]], as used by the
current Cartier/Weil route. The pointwise vanishing and base-point conditions
themselves are the displayed divisor inequalities.

By [[thm-cartier-weil-divisors-curves-agree]] the divisor $D$ is a Cartier
divisor on the curve and carries an associated invertible sheaf
$\mathcal O_C(D)$ ([[def-invertible-sheaf-of-cartier-divisor]]), and by the
promised identification of [[def-riemann-roch-space-of-divisor]] the space
$L(D)$ is the space of global sections of that sheaf: a nonzero $f\in L(D)$
corresponds to the global section $s_f$ whose divisor is
$$\operatorname{div}(s_f)=\operatorname{div}(f)+D .$$
With this dictionary in place, for a closed point $x$ of $C$:

1. a nonzero $f\in V$ **vanishes at $x$** when $x$ lies in the divisor
   $\operatorname{div}(f)+D$, that is, when $\operatorname{ord}_x(f)+n_x\ge1$;
   equivalently, the section $s_f$ has zero value in the fibre of
   $\mathcal O_C(D)$ at $x$. This is a condition on the section of
   $\mathcal O_C(D)$, not on the rational function $f$ alone: it differs from
   the naive condition $\operatorname{ord}_x(f)\ge1$ whenever $n_x\ne0$, since
   the section-vanishing threshold is $\operatorname{ord}_x(f)\ge1-n_x$; for
   $n_x>0$ this can hold even if $f$ does not vanish as a rational function,
   while for $n_x<0$ it requires a higher-order zero than the naive test;
2. $x$ is a **base point** of $V$ when every nonzero $f\in V$ vanishes at
   $x$, i.e. when $x$ belongs to the support of $\operatorname{div}(f)+D$ for
   every nonzero $f\in V$;
3. the **linear system** $P(V)$ attached to $V$ is the image of
   $V\setminus\{0\}$ in $|D|=P(L(D))$ under $f\mapsto\operatorname{div}(f)+D$
   ([[def-complete-linear-system]]), namely the set of effective divisors
   $\operatorname{div}(f)+D$ with $f\in V\setminus\{0\}$; by the previous two
   clauses, $x$ is a base point of $V$ if and only if every divisor of $P(V)$
   contains $x$, that is, if and only if the whole subsystem $P(V)$ passes
   through $x$.

The subspace $V$ is **base-point-free** when it has no base point. The
complete linear system $|D|$ is base-point-free when $L(D)$ is base-point-free
as a subspace of itself, and a divisor $D$, or the line bundle
$\mathcal O_C(D)$, is called **base-point-free** when $|D|$ is base-point-free.

For the finite-basis evaluation formulation, $L(D)$ is finite-dimensional by
the following local coherence route. The curve is finite type over the field
$k$, and a field is Noetherian, so every finite-type affine chart of $C$ is
Noetherian and $C$ is locally Noetherian. The Cartier construction makes
$\mathcal O_C(D)$ invertible, hence locally free of rank one; it is therefore
quasi-coherent and of finite type, and thus coherent on the locally
Noetherian scheme $C$. Proper cohomology finiteness
[[cor-projective-cohomology-finite-dimensional-field]] makes
$H^0(C,\mathcal O_C(D))$ finite-dimensional. The section dictionary above
identifies this space with $L(D)$, so every subspace $V\subseteq L(D)$ is
finite-dimensional. Under the Axiom of Choice already assumed, put
$m=\dim_kV$ and choose a basis
$f_1,\dots,f_m$ (the empty basis when $m=0$); let $s_i$ be the section
corresponding to $f_i$, and define
$$\operatorname{ev}_V:\mathcal O_C^{\,m}\longrightarrow\mathcal O_C(D),\qquad (g_1,\dots,g_m)\longmapsto\sum_{i=1}^m g_i s_i.$$
If $m=0$, this is the zero morphism and is not surjective, since $C$ is
nonempty and $\mathcal O_C(D)$ has nonzero rank-one stalks. For $m>0$, at a
closed point $x$ the stalk map is surjective exactly when some $s_i$ has
nonzero image in the fibre: in a local frame its image is generated by the
coefficients of the $s_i$, and these generate the local ring exactly when one
coefficient is a unit, equivalently has nonzero residue. Thus:

- $x$ is a base point of $V$ if and only if $\operatorname{ev}_V$ fails to be
  surjective on stalks at $x$;
- $V$ is base-point-free if and only if $\operatorname{ev}_V$ is surjective;
  equivalently, the subsheaf of $\mathcal O_C(D)$ generated by the images of
  $s_1,\dots,s_m$ is all of $\mathcal O_C(D)$, i.e. $\mathcal O_C(D)$ is
  globally generated by $V$ in the sense of [[def-globally-generated-sheaf]]
  (the notion does not depend on the chosen basis). Indeed, by
  [[lem-curve-closed-subsets-finite]] every point of this integral
  one-dimensional curve is closed or generic. If $m>0$, a basis element is a
  nonzero rational function, so its corresponding section has nonzero generic
  value by the section dictionary. Therefore surjectivity at all closed points
  also gives surjectivity at the generic point; the converse follows by
  restricting a surjective sheaf map to stalks;
- for the complete system $V=L(D)$, put $m=\dim_kL(D)$. Then $|D|$ is
  base-point-free exactly when the evaluation map
  $\mathcal O_C^{\,m}\to\mathcal O_C(D)$ is surjective, with zero source if
  $m=0$; equivalently, exactly when $\mathcal O_C(D)$ is globally generated
  by these sections. When $m>0$, writing $r+1=m$ recovers the usual indexed
  basis notation.

The degenerate subspace $V=0$ has no nonzero element, so every closed point
$x$ is vacuously a base point of $V$. The curve has a closed point: a nonempty
proper irreducible closed subset occurs in the strict chain witnessing its
dimension one, and [[lem-curve-closed-subsets-finite]] says its points are
closed. Thus $V$ is not base-point-free, in agreement with the nonsurjective
rank-zero evaluation map. The associated morphism of the next item is
therefore only asserted for base-point-free systems of dimension $r+1\ge1$.

The supplier interfaces used here are present in the current item bodies:
[[thm-cartier-weil-divisors-curves-agree]] identifies the curve divisor with a
Cartier divisor, [[def-invertible-sheaf-of-cartier-divisor]] defines
$\mathcal O_C(D)$, [[def-riemann-roch-space-of-divisor]] identifies $L(D)$ with
$H^0(C,\mathcal O_C(D))$ in $k(C)$, and
[[thm-line-bundle-rational-section-cartier-divisor]] gives the section-divisor
dictionary. The finite-basis use follows from the local
Noetherian/coherence argument above and the published
[[cor-projective-cohomology-finite-dimensional-field]]; AC supplies its
choice premise and the DC premise of the Cartier-to-Weil interface. The earlier
“not yet authored” supplier notice is stale; the current bodies supply the
remaining interfaces used above.
