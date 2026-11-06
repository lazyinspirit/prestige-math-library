---
id: lem-gts-finite-artin-analytic-dolbeault-comparison
kind: lemma
title: Finite Artin analytic charts and the Kodaira–Spencer comparison
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-gts-kodairaspencer-deformation-problem
  - lem-gts-kodaira-spencer-forms-form-dgla
  - thm-holomorphic-implicit-function-theorem
  - thm-flat-quotients-preserve-short-exact-tensor-sequences
  - thm-dolbeault-lemma-polydisc
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - def-sheaf-cohomology-derived-global-sections
  - thm-de-rham-theorem
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - def-axiom-of-choice
dependency_roles:
  def-gts-kodairaspencer-deformation-problem: mathematical-premise
  lem-gts-kodaira-spencer-forms-form-dgla: mathematical-premise
  thm-holomorphic-implicit-function-theorem: mathematical-premise
  thm-flat-quotients-preserve-short-exact-tensor-sequences: mathematical-premise
  thm-dolbeault-lemma-polydisc: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-smooth-function-module-sheaves-are-acyclic: mathematical-premise
  thm-acyclic-resolution-theorem-for-right-derived-functors: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Marco Manetti, Lectures on deformations of complex manifolds
      url: https://arxiv.org/pdf/math/0507286v1
      locator: "Chapter IV introduction, printed p. 47 (PDF p. 53), and §§IV.4–IV.7, printed pp. 54–64 (PDF pp. 60–70); the introduction explicitly omits the flat analytic comparison proof, which is supplied by the local finite-order construction"
    - title: Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties
      url: https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf
      locator: "Section1.1, printedpp7–8, relative analytic local-triviality and de Rham context; not substituted as the local proof"
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact complex manifold and let $A$ be a finite-dimensional commutative local complex Artin algebra with residue field $\mathbb C$ and nilpotent maximal ideal $\mathfrak m$. A marked flat analytic deformation over $\operatorname{Specan}A$ has underlying space $X$, a sheaf locally presented as $A\{z_1,\ldots,z_N\}/I$, flat stalks over $A$, and an identified reduction $\mathcal O_X$; its morphisms preserve this marking. There is an equivalence of this groupoid with the Maurer–Cartan action groupoid of
$$L_X^q=A^{0,q}(X,T_X^{1,0}),\qquad d=\bar\partial,\qquad \bar\partial\xi+\tfrac12[\xi,\xi]=0,\qquad \xi\in L_X^1\otimes\mathfrak m,$$
with the finite gauge action of $\exp(L_X^0\otimes\mathfrak m)$. It is compatible, up to marking-preserving isomorphism, with homomorphisms of local Artin algebras inducing the identity on the residue field. Every deformation is locally a relative analytic coordinate polydisc over $A$.

For the corresponding deformation $X_A$, its relative tangent sheaf cohomology is computed by $(L_X^\bullet\otimes A,d_\xi)$ with $d_\xi=\bar\partial+[\xi,-]$. For every $p$, $\Omega^p_{X_A/A}$ has a fine relative Dolbeault resolution whose smooth terms identify with $A^{p,q}(X)\otimes A$ and whose differential is a square-zero perturbation of central $\bar\partial$ with coefficients in $\mathfrak m$. The relative holomorphic de Rham complex resolves the constant sheaf $A$ on $X$, and its cohomology is naturally $H^k(X;\mathbb C)\otimes_{\mathbb C}A$. These assertions concern finite Artin bases; they assert no convergent family over a reduced parameter germ and no semiuniversality theorem.

## Statement references

[[def-gts-kodairaspencer-deformation-problem]]

[Manetti, ChapterIV](https://arxiv.org/pdf/math/0507286v1)

[Voisin, Section1.1](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** Exactly the marked flat analytic objects, Artin algebra, manifold and AC in the Statement. Smooth $A$-valued functions mean $C^\infty_X\otimes_{\mathbb C}A$; nilpotent coordinate substitutions act by their terminating Taylor series in the complex coordinate derivatives.

[F1] The coordinate Kodaira–Spencer bracket is a DGLA bracket, and its graph involutivity equation and finite exponential gauge action have the displayed conventions. [[def-gts-kodairaspencer-deformation-problem]], [[lem-gts-kodaira-spencer-forms-form-dgla]]

[F2] The finite-dimensional holomorphic implicit theorem straightens an embedded smooth central analytic germ. A short exact sequence of modules with flat right quotient stays exact after tensoring with any module. [[thm-holomorphic-implicit-function-theorem]], [[thm-flat-quotients-preserve-short-exact-tensor-sequences]]

[F3] The local Dolbeault lemma supplies smooth primitives of closed positive-degree forms on smaller polydiscs, under AC. [[thm-dolbeault-lemma-polydisc]]

[F4] Smooth partitions exist. Smooth function-module sheaves are acyclic, so their acyclic resolutions compute the stated sheaf cohomology; AC supplies the required weaker choice principles. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-function-module-sheaves-are-acyclic]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[def-sheaf-cohomology-derived-global-sections]], [[def-axiom-of-choice]]

[F5] The global de Rham theorem identifies smooth real de Rham cohomology with singular real cohomology; finite complexification gives the corresponding complex comparison. The local constant-sheaf resolution needed below is proved directly in step 6.1. The bounded filtered-complex theorem compares a finite double resolution with its row and column resolutions. [[thm-de-rham-theorem]], [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]

## Proof

1.1 At a point present the deformation germ as $B=A\{z,w\}/I$. By [F2], choose central coordinates in which its reduction ideal is generated by the coordinates $w_1,\ldots,w_r$, with the $z$ coordinates free. If there are no normal coordinates, this straightening is the identity. For a zero-dimensional central germ, apply the implicit theorem after adjoining one unused complex parameter and restrict that parameter to zero; its stated positive block dimensions are then respected. Lift the normal generators to $f_j\in I$ reducing to $w_j$. Substitution $w_j\mapsto f_j$, $z_i\mapsto z_i$, is an automorphism of $A\{z,w\}$: it is identity modulo $\mathfrak m$, and successive corrections modulo $\mathfrak m^2,\mathfrak m^3,\ldots$ invert it in finitely many steps. Taylor expansion at every step uses only finitely many derivatives of convergent holomorphic functions, hence stays convergent. After this coordinate change, $B=A\{z\}/J$ with $J\subset\mathfrak m A\{z\}$. Apply the tensor exactness in [F2] to $0\to J\to A\{z\}\to B\to0$, whose right quotient is $A$-flat, and tensor with $A/\mathfrak m$. It makes $J/\mathfrak m J\to\mathbb C\{z\}$ injective. This map has zero image since the central quotient has no equations, so $J=\mathfrak m J$. Iterating through the nilpotence exponent gives $J=0$. Thus the relative coordinate charts are genuinely $A\{z\}$; no general smoothness criterion or convergent formal effectivity theorem has been assumed. [F2, given, algebra, construct]

2.1 Extend their transition maps to smooth functions by the finite Taylor rule in the nilpotent holomorphic coordinate corrections, and use the unperturbed central antiholomorphic transition in the barred coordinates. Composition respects this extension by the finite Taylor chain rule, so it defines a sheaf of smooth $A$-algebras. At each order $r$, coordinate changes identity modulo $\mathfrak m^r$ modulo those identity modulo $\mathfrak m^{r+1}$ form the additive sheaf $A^{0,0}(T_X^{1,0})\otimes(\mathfrak m^r/\mathfrak m^{r+1})$. It is a smooth function-module sheaf. Explicitly an overlap cocycle $a_{ij}$ is killed by $a_i=\sum_j\chi_j a_{ij}$ for a subordinate partition, since $a_i-a_j=a_{ij}$; compactly supported summands extend by zero. Changing trivializations by $\exp(-a_i)$ removes that order. Finite repetition gives a global smooth trivialization. The same partition construction with endomorphism-valued corrections trivializes any smooth relative bundle reducing to a fixed central bundle. [F4, step 1.1, algebra, construct]

2.2 Conversely let $\xi$ satisfy the stated equation. Starting with central coordinates $z^a$, construct $D_\xi$-closed coordinates $w^a=z^a$ modulo $\mathfrak m$. If they are constructed modulo $\mathfrak m^r$, their remaining residual in $\mathfrak m^r/\mathfrak m^{r+1}$ is ordinary $\bar\partial$-closed because $D_\xi^2=0$. Apply [F3] coefficientwise to remove it on a smaller polydisc. There are finitely many nilpotent orders, so finitely many shrinkings suffice. The substitution $(z,\bar z)\mapsto(w,\bar z)$ is invertible by finite Taylor corrections. In these coordinates $D_\xi$ kills $w$ and differentiates the barred coordinates, so its kernel consists exactly of holomorphic convergent power series in $w$ with coefficients in $A$. Indeed the scalar kernel is the ordinary Cauchy–Riemann kernel coefficientwise; nilpotent substitution uses only finitely many derivatives of those convergent coefficients. Two systems of such coordinates have $A$-holomorphic transitions because each coordinate lies in this kernel. They therefore glue an analytic deformation locally modeled on $A\{w\}$, which is flat over $A$. Its underlying compact space is $X$, making its map to the one-point Artin base proper. This constructs an actual analytic Artin deformation from $\xi$, without an infinite coordinate iteration. [F1, F3, step 1.1, algebra, construct]

3.1 In this trivialization the relative holomorphic sheaf is the kernel of $D_\xi=\bar\partial+\xi^i\partial_i$, with $\xi\in L_X^1\otimes\mathfrak m$. The square-zero identity for its local Dolbeault operator, transported from the relative coordinate charts, is exactly $d\xi+[\xi,\xi]/2=0$ by [F1]. Changes of the chosen smooth trivialization fix the central antiholomorphic coordinates and induce the finite gauge action of [F1]. For precision, any such nilpotent algebra automorphism $g$ is an exponential of a derivation: its finite logarithm $a=\log g$ exists, and the identity that $\exp(sa)$ preserves products holds for every integer $s$ since these are powers of $g$. It is polynomial in $s$, hence holds for all complex $s$; differentiating at zero gives the Leibniz rule for $a$. This derivation kills $A$ and the central antiholomorphic functions. To justify its vector-field form without an extra analytic comparison theorem, in a coordinate ball fix a point $x$ and apply the real radial integral formula to a smooth function $f$: locally
$$f(y)-f(x)=\sum_j(z^j(y)-z^j(x))f_j(y)+\sum_j(\bar z^j(y)-\bar z^j(x))g_j(y),$$
where $f_j(x)=\partial_jf(x)$ and $g_j(x)=\partial_{\bar j}f(x)$. Apply the derivation and evaluate its $A$-valued coefficient functions at $x$. The Leibniz rule and its vanishing on the barred coordinates give $a(f)(x)=\sum_j a(z^j)(x)\partial_j f(x)$. Since this holds at every point, $a=\sum_j a(z^j)\partial_j$; each coefficient lies in $\mathfrak m$ because $a$ is zero after reduction. Under holomorphic coordinate changes this is precisely the tangent-vector transformation rule. Thus the logarithm is an element of $L_X^0\otimes\mathfrak m$, and every such element exponentiates back to an allowed smooth coordinate change. Thus the coordinate-change group is the stated gauge group, including stabilizers, not a quotient that discards automorphisms. [F1, step 1.1, step 2.1, algebra]

4.1 Gauge maps send the kernels of the corresponding $D_\xi$ operators isomorphically to each other, hence induce marking-preserving analytic isomorphisms in the charts of step 2.2. Conversely a marking-preserving analytic isomorphism between these charts extends to the smooth sheaves by finite Taylor substitution and the fixed central antiholomorphic coordinate action; after the trivializations of step 2.1 it is an automorphism $g$ as in step 3.1. It therefore belongs to the stated gauge group and intertwines the two operators. The two constructions recover their initial holomorphic sheaves as the same kernels, and recover the Maurer–Cartan elements up to these gauge maps. This proves the equivalence of groupoids, including arrows. Every finite coordinate, partition and exponential formula restricts under Artin base change; different permitted trivializations are related by the same marking-preserving gauges, giving the asserted natural compatibility up to isomorphism. [F1, step 2.1, step 3.1, step 2.2, algebra]

5.1 In each relative chart, the ordinary coordinate Dolbeault complex with $A$-valued coefficients resolves the relative holomorphic functions, forms and tangent sections by [F3] applied coefficientwise. Its smooth terms are modules over the central smooth-function sheaf and hence acyclic by [F4]. They therefore compute the relative sheaf cohomology. The trivializations in step 2.1 identify their smooth terms with the central smooth bundles tensored with $A$, and their differentials reduce to central $\bar\partial$. On tangent-valued forms, the graph quotient action is the commutator with $D_\xi$, which has coefficient $\bar\partial+[\xi,-]$ by [F1]. This gives exactly the stated tangent complex and the square-zero perturbation description for relative $p$-forms. [F1, F3, F4, step 2.1, step 2.2, step 4.1, algebra]

6.1 On a relative holomorphic coordinate polydisc centered at zero, for a holomorphic $k$-form $\omega$ with $k>0$ define $$(K\omega)_x(v_1,\ldots,v_{k-1})=\int_0^1 s^{k-1}\omega_{sx}(x,v_1,\ldots,v_{k-1})\,ds.$$ The first inserted vector is the vector $x$ at the point $sx$, specifying the radial-field convention. Differentiating the pullback under $x\mapsto sx$ and integrating in $s$ gives $dK+Kd=1-\operatorname{ev}_0^*$; evaluation contributes zero in positive degrees. The integral preserves holomorphic coefficients and applies coefficientwise in finite-dimensional $A$. In degree zero, a closed holomorphic function is locally constant. Hence the relative holomorphic de Rham complex resolves the constant sheaf $A$. The same displayed formula on a real star-shaped smooth coordinate ball, first for real forms and then coefficientwise over $\mathbb C$ and $A$, gives the identical homotopy identity for smooth forms; in degree zero its kernel is the locally constant functions. This explicitly proves the smooth constant-sheaf resolution as well. Its smooth terms are acyclic by [F4], so the actual acyclic-resolution theorem computes constant-sheaf cohomology by global smooth de Rham cohomology. Only at this point apply the global comparison in [F5] to identify that cohomology with $H^k(X;\mathbb C)\otimes A$; tensoring with finite-dimensional $A$ is a finite direct sum and is natural under Artin base change. The relative fine Dolbeault double resolution in step 5.1 computes the same constant-sheaf cohomology by [F4] and the bounded comparison in [F5]. Zero-dimensional $X$ is a finite set of points with charts $\operatorname{Specan}A$, and the same conclusions are immediate there. All coordinate corrections remain finite at their Artin order; no reduced-parameter analytic effectivity is inferred. [F4, F5, step 1.1, step 5.1, algebra] ∎

## Scope

These comparisons apply to finite Artin bases. They do not establish convergence over a reduced parameter germ or analytic Kuranishi completeness.
