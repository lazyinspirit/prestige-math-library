---
id: def-hyperelliptic-curve
kind: definition
title: "Hyperelliptic curves and hyperelliptic maps"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-canonical-degree-two-g-minus-two
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - cor-h0-canonical-differentials-genus
  - cor-birational-smooth-proper-curves-isomorphic
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-canonical-line-bundle-curve
  - def-complete-linear-system
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - def-gonality-curve
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - def-twisting-sheaf-proj
  - def-nonconstant-morphism-curves-degree
  - def-relative-projective-space-standard-charts
  - lem-function-with-poles-defines-map-p1
  - lem-finite-morphism-affine
  - lem-veronese-map-well-defined-closed-immersion
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-full-riemann-roch-divisor
  - thm-h0-structure-sheaf-proper-curve
  - thm-projective-map-line-bundle-data-equivalence
  - thm-serre-duality-curves-line-bundles
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass
---

## Definition

**Choice premise.** The definitions of hyperelliptic and geometrically
hyperelliptic are unconditional. Assume AC for all proved assertions below:
the map-finiteness and function-to-map, global-sections, projective-space,
Čech-comparison, long-exact-sequence, Riemann--Roch, Serre-duality, and
birational-curve suppliers used here explicitly require it
([[def-axiom-of-choice]], [[lem-function-with-poles-defines-map-p1]],
[[thm-nonconstant-morphism-proper-curves-finite-surjective]],
[[thm-h0-structure-sheaf-proper-curve]],
[[thm-projective-map-line-bundle-data-equivalence]],
[[thm-cohomology-projective-space-twisting-sheaves]],
[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]],
[[thm-long-exact-sequence-sheaf-cohomology]],
[[thm-full-riemann-roch-divisor]],
[[thm-serre-duality-curves-line-bundles]],
[[cor-canonical-degree-two-g-minus-two]],
[[cor-h0-canonical-differentials-genus]],
[[cor-birational-smooth-proper-curves-isomorphic]]).

Let $k$ be a field and let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) of genus $g$. A $k$-morphism
$$\phi:C\longrightarrow\mathbf P^1_k$$
is a **hyperelliptic map** on $C$ when it is nonconstant of degree two,
$\deg\phi=2$ in the sense of
[[def-nonconstant-morphism-curves-degree]], with target the projective line
$\mathbf P^1_k$ in its standard charts
([[def-relative-projective-space-standard-charts]]). Such a morphism is
finite. The curve $C$ is **hyperelliptic over $k$** when it admits such a map;
this means that the degree-two target is the split projective line over $k$.
The curve is **geometrically hyperelliptic** when
$C_{\bar k}=C\times_k\bar k$ admits a degree-two map to
$\mathbf P^1_{\bar k}$, where $\bar k$ is an algebraic closure. These
definitions impose no restriction on the genus or characteristic. A
geometrically hyperelliptic curve need not be hyperelliptic over $k$: its
degree-two quotient can descend to a nonsplit genus-zero curve rather than to
$\mathbf P^1_k$.

For every genus, a nonconstant rational function $f\in k(C)^\times$ gives a
finite map $\phi_f:C\to\mathbf P^1_k$ of degree $[k(C):k(f)]$, with pole
divisor the fibre over infinity
([[lem-function-with-poles-defines-map-p1]]). Thus $C$ is hyperelliptic over
$k$ if and only if some nonconstant $f\in k(C)^\times$ has
$[k(C):k(f)]=2$; every hyperelliptic map is obtained this way, up to an
automorphism of $\mathbf P^1_k$.

If $g\ge1$, then hyperellipticity over $k$ is equivalent to
$\operatorname{gon}(C)=2$, where gonality is the minimum degree of a
nonconstant $k$-map to $\mathbf P^1_k$ ([[def-gonality-curve]]). Indeed, a
degree-one map between smooth proper curves is an isomorphism, so would force
$C\cong\mathbf P^1_k$ and $g=0$; conversely, a gonality of two is attained by
a map of degree two. This equivalence is not asserted in genus zero: $\mathbf
P^1_k$ itself has degree-two self-maps and gonality one.

For every field $k$ and every $g\ge1$, the following is also equivalent to
hyperellipticity over $k$: there is an invertible sheaf $L$ on $C$
([[def-invertible-sheaf]]) of degree two with $h^0(C,L)=2$ whose complete
linear system is base-point-free. A hyperelliptic map gives
$L=\phi^*\mathcal O_{\mathbf P^1}(1)$; the section count is proved below.
Conversely, a basis of the two sections of such an $L$ gives a nonconstant
map $C\to\mathbf P^1_k$, and the degree of its fibre over a rational point is
$\deg L=2$, so it is a hyperelliptic map. The genus qualification is necessary:
on $\mathbf P^1$ the pullback of $\mathcal O(1)$ under a degree-two map is
$\mathcal O(2)$, with three sections.

For $g\ge2$, any two hyperelliptic maps over $k$ are related by a
$k$-automorphism of $\mathbf P^1_k$. The proof below is over the given field;
it does not infer a split-target map from geometric hyperellipticity.

## Proof of the criteria and uniqueness

Let $\phi:C\to\mathbf P^1_k$ be a degree-two map and put
$L=\phi^*\mathcal O_{\mathbf P^1}(1)$. The map is finite. On a local ring of
$\mathbf P^1_k$, a discrete valuation ring, the finite algebra
$\phi_*\mathcal O_C$ is a finitely generated torsion-free module of generic
rank two, hence free of rank two by
[[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]].
(Torsion-freeness follows from the injection of the target function field into
$k(C)$.) Write $E=\phi_*\mathcal O_C$. The unit map
$\mathcal O_{\mathbf P^1}\to E$ is a subbundle. Indeed, in a local basis
$e_1,e_2$ of the finite free rank-two algebra, write $1=u_1e_1+u_2e_2$.
Its reduction in the fiber algebra is nonzero, so at least one of $u_1,u_2$
is a unit in the local ring. If $u_1$ is a unit, $\{1,e_2\}$ is a basis;
if $u_2$ is a unit, $\{e_1,1\}$ is a basis. Thus the unit spans a direct
summand locally, and its quotient $Q$ is a line bundle.

On each standard affine chart of $\mathbf P^1$, the module of sections of
$Q$ is a finitely generated rank-one projective module, hence torsion-free;
since $k[t]$ and $k[t^{-1}]$ are PIDs, it is free by
[[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]. The
transition on their intersection is a unit of $k[t,t^{-1}]$, hence is
$c t^a$ for some $c\in k^\times$ and $a\in\mathbb Z$. Rescaling a frame
absorbs $c$; thus $Q\cong\mathcal O(a)$ for an integer $a$. The
projective-line cohomology calculation
[[thm-cohomology-projective-space-twisting-sheaves]] gives
$\chi(\mathcal O(a))=a+1$, $h^0(\mathcal O(-g))=0$ for $g\ge1$,
$h^0(\mathcal O(1))=2$, and $h^1(\mathcal O(1))=0$.
For the cohomology of $E$, cover $\mathbf P^1$ by its two standard
affines and $C$ by their inverse images. These inverse images and their
intersection are affine by [[lem-finite-morphism-affine]]. The Čech complexes
for $E$ on $\mathbf P^1$ and $\mathcal O_C$ on $C$ have identical terms by the
definition $E=\phi_*\mathcal O_C$. Since both schemes are quasi-compact and
separated and the sheaves are quasi-coherent, the published Čech comparison
theorem [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]
identifies their sheaf cohomology. Hence
$\chi(E)=\chi(C,\mathcal O_C)=1-g$. Additivity of Euler characteristic in
the exact sequence below follows from the long exact sequence of sheaf
cohomology [[thm-long-exact-sequence-sheaf-cohomology]]. Therefore the exact sequence
$$0\longrightarrow\mathcal O_{\mathbf P^1}\longrightarrow E \longrightarrow\mathcal O(a)\longrightarrow0$$
has Euler characteristic $1+(a+1)=a+2=1-g$, so $a=-g-1$.

Twist this sequence by $\mathcal O(1)$. For $g\ge1$ it becomes
$$0\longrightarrow\mathcal O(1)\longrightarrow E(1) \longrightarrow\mathcal O(-g)\longrightarrow0.$$
The displayed Cech calculations imply
$H^0(E(1))\cong H^0(\mathcal O(1))$, of dimension two. On the two standard
charts, trivializing $\mathcal O(1)$ identifies the sections of $E(1)$ with
the sections of $\phi^*\mathcal O(1)$; hence $h^0(C,L)=2$. The pullback of
$\mathcal O(1)$ is generated, and its degree is two: the pullback of a
rational point is the fiber of the finite flat rank-two map, an effective
divisor of degree two.

Conversely, if $L$ has degree two, has two independent sections and is
base-point-free, those sections define a nonconstant map to $\mathbf P^1_k$
with pullback of $\mathcal O(1)$ equal to $L$. The map is finite; its finite
flat rank is the degree of a fiber over a rational point, which is
$\deg L=2$. This proves the sheaf criterion over any field in the stated
positive-genus range.

It remains to prove uniqueness when $g\ge2$. The $g$ monomials in
$H^0(\mathbf P^1,\mathcal O(g-1))$ pull back along $\phi$ to independent
sections of $L^{\otimes(g-1)}$: pullback is injective because $\phi$ is
dominant. Since $\deg L=2$, this tensor power has degree $2g-2$. Riemann--Roch
and Serre duality give
$$h^0(L^{\otimes(g-1)})- h^0(\omega_C\otimes L^{-\otimes(g-1)})=g-1.$$
The first term is at least $g$, so the second term is positive. The line
bundle in that second term has degree zero; a nonzero section has an effective
zero divisor of degree zero and is nowhere vanishing. Consequently
$L^{\otimes(g-1)}\cong\omega_C$. The pulled-back monomials are now a basis of
$H^0(C,\omega_C)$, whose dimension is $g$. Thus the canonical map factors
through the degree-$(g-1)$ Veronese closed immersion of $\mathbf P^1_k$,
followed by $\phi$, up to the projective coordinate change from this basis to
any fixed basis of canonical sections.

For a second hyperelliptic map $\psi$, the same argument factors the same
canonical map through another Veronese closed immersion. Each Veronese image
is the canonical map's image, since $\phi$ and $\psi$ are finite and
surjective. The two closed immersions therefore identify their copies of
$\mathbf P^1_k$ with the same canonical image. Composing one identification
with the inverse of the other gives a $k$-automorphism $\alpha$ of
$\mathbf P^1_k$ and the equality $\psi=\alpha\circ\phi$. This proves the
stated uniqueness, including in characteristic two.
