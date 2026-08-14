# Algebraic geometry track — classical varieties, schemes, sheaves, curves, and blowups

Prose scaffold, subjects-02 commission, 2026-08-14. Prefix: **AV**.
Owned deliverable: this file only. This is not a build: it creates no page,
authors no item, edits no machine-readable plan, and publishes nothing.

> **Authority and placement.** All pair labels below are relative. The AV block
> is to be spliced after the final algebraic-topology pair, denoted `AT-n`
> because that concurrent scaffold was intentionally not inspected. The
> orchestrator must resolve `n` from the finished AT scaffold. `SCHEMA.md`,
> `CLAUDE.md`, the subjects-02 seam contract, and the live plan win over this
> prose wherever they differ.

## Executive handoff

This track deliberately teaches the classical register first (affine and
projective varieties over a fixed algebraically closed field), then constructs
sheaves, and only then widens to schemes over arbitrary bases. That order gives
geometric motivation before generality without cheating: every classical proof
that uses the Nullstellensatz, dimension theory, normalization, a DVR, flatness,
or graded algebra cites the appropriate commutative-algebra supplier instead of
re-proving it. The last six pairs return to geometry through coherent sheaves,
cohomology, divisors, smooth proper curves, Riemann--Roch, Serre duality, and
blowups.

There are **26 A/B pairs** (`AV-1`--`AV-26`). All mathematical-content rows
state component provenance separately for statement and proof. Definitions and
examples without a proof component use `not-applicable`; statements for which
the future author must supply a proof use `literature-derived` or `ai-altered`
as recorded below. Any `ai-generated` content is confined to dependency-leaf B
examples or counterexamples and is never a dependency target.

The verified inventory and decomposition ratio are computed at the end of this
file, after the complete crosswalk. Until then, prose counts in this introduction
are non-normative.

## Scope, base conventions, and inherited interfaces

- In `AV-1`--`AV-8`, $k$ is an algebraically closed field unless a row says
  otherwise. A **variety** is a reduced, irreducible, separated scheme of finite
  type over $k$ once schemes exist; before `AV-11`, the classical affine-chart
  model is used and the later comparison is explicit.
- From `AV-11` onward, rings are commutative with $1$, schemes may be empty and
  nonreduced, and morphisms are morphisms of locally ringed spaces. A bare
  **curve over $k$** in `AV-23`--`AV-25` means a geometrically integral,
  separated, finite-type $k$-scheme of dimension one; smoothness and properness
  are stated rather than smuggled into the word.
- The empty scheme is allowed. Projective space has $\mathbf P^n_S$ only for
  $n\geq0$; $\mathbf P^0_S\cong S$. Effective Cartier divisors may be empty.
  The zero ring is allowed in affine-scheme constructions, so
  $\operatorname{Spec}(0)=\varnothing$.
- Cohomological indexing is cohomological and begins at $H^0$. Čech
  differentials use the alternating deletion sign $(-1)^j$. Divisors use
  $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$; consequently
  $\mathcal O_X(D)$ permits poles bounded by $D$, and the canonical divisor is
  the divisor of a nonzero rational differential.
- `noether-normalisation-and-nullstellensatz` supplies the weak and strong
  Nullstellensatz and Noether normalization;
  `zariski-topology-on-prime-spectra` supplies the topology of
  $\operatorname{Spec}A$ and the basic-open identities;
  `krull-dimension-and-height-theorems` supplies chain dimension, principal
  ideal/height results, and dimension of polynomial rings;
  `valuation-rings-and-discrete-valuation-rings` supplies valuations and DVR
  structure; `dedekind-domains-and-ideal-classes` supplies the one-dimensional
  normal-domain ideal theory; `flatness-and-faithful-flatness` supplies the
  algebraic flatness criteria. Localisation, integral closure, primary
  decomposition, graded/Hilbert theory, completion, depth/regularity, Koszul
  theory, Ext, Tor, derived functors, triangulated categories, and spectral
  sequences are likewise cited from their owning tracks.
- `AT-n` is available as the anchor, but no AV proof depends on an unspecified
  theorem merely because it lies earlier. The only required AT-to-AV interface
  is the already-built singular-cochain/cohomology and Mayer--Vietoris
  vocabulary used when `AV-21` states the comparison interface; its exact AT
  pair label must be substituted during splice. Conversely AT must cite
  `AV-21` for sheaves, Čech cohomology, acyclic-cover comparison, and the sheaf
  side of de Rham/Čech comparison.

## Provenance legend

The table columns `statement provenance` and `proof provenance` use exactly the
controlled vocabulary in `SCHEMA.md` §3. `literature-derived` means the
component is recoverable from a cited treatment; `ai-altered` means its scope,
hypotheses, decomposition, or proof route has been adapted for this library;
`ai-generated` is used only for directly checkable leaf content. A proof entry
of `not-applicable` belongs to a definition, notation declaration, or example
whose row asserts no general result; `not-supplied` is reserved for a named
statement intentionally recorded without a proof on that page.

---

## AV-1. Affine algebraic sets and coordinate rings

**A page role.** Establish the classical affine dictionary over an
algebraically closed field. `requires`:
`noether-normalisation-and-nullstellensatz`, polynomial-ring and ideal/quotient
interfaces from commutative algebra. The page cites those algebraic theorems;
it proves only their geometric consequences.

**Principal treatments.** Milne, *Algebraic Geometry* Ch. 2 §§a--m,
pp. 36--58 and Ch. 3 §§a--d, pp. 59--66; Arapura, *Basic Algebraic Geometry*,
Ch. 1 §§1.1--1.4, pp. 3--10; Artin, MIT 18.721, Ch. 2 §§2.2--2.5,
PDF pp. 36--50.

### Proposed A-page inventory (22 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-affine-algebraic-set` | def | Define $V(S)\subseteq\mathbf A^n_k$ for an arbitrary set of polynomials, including $V(\varnothing)=\mathbf A^n$ and $V(1)=\varnothing$; fixes the geometric objects used throughout the classical block. | literature-derived | not-applicable |
| `lem-zero-locus-ideal-closure` | lem | Prove $V(S)=V((S))=V(\sqrt{(S)})$; separates the ideal and radical steps consumed by the ideal--variety correspondence. | literature-derived | ai-altered |
| `thm-zariski-closed-sets-affine-space` | thm | Verify arbitrary intersections and finite unions of zero loci, with $V(I)\cup V(J)=V(IJ)$; establishes the classical Zariski topology without reminting the spectral topology. | literature-derived | ai-altered |
| `def-vanishing-ideal-affine-set` | def | Define $I(X)$, including $I(\varnothing)=k[x_1,\ldots,x_n]$; prepares the Galois connection. | literature-derived | not-applicable |
| `lem-variety-ideal-galois-connection` | lem | Prove $X\subseteq V(J)$ iff $J\subseteq I(X)$ and derive the two closure operators; this is the order-reversing engine of the dictionary. | literature-derived | ai-altered |
| `thm-affine-nullstellensatz-correspondence` | thm | Using the cited strong Nullstellensatz, identify algebraic sets with radical ideals and irreducible algebraic sets with prime ideals. | literature-derived | ai-altered |
| `def-affine-variety-classical` | def | Define a classical affine variety as a nonempty irreducible affine algebraic set; makes the pre-scheme convention explicit. | literature-derived | not-applicable |
| `lem-irreducible-space-open-intersections` | lem | Characterize irreducibility by nonempty open sets meeting and by the generic-point-free closed-set condition; later powers rational-map equality. | literature-derived | ai-altered |
| `thm-affine-variety-prime-coordinate-ring` | thm | Show $X$ is irreducible iff $k[X]$ is a domain; gives the algebraic test consumed by function fields. | literature-derived | ai-altered |
| `def-coordinate-ring-affine-algebraic-set` | def | Define $k[X]=k[x_1,\ldots,x_n]/I(X)$ and the coordinate functions; fixes evaluation notation. | literature-derived | not-applicable |
| `thm-regular-functions-on-affine-algebraic-set` | thm | Identify global polynomial functions on $X$ with $k[X]$, proving both well-definedness and uniqueness. | literature-derived | ai-altered |
| `def-principal-open-classical-variety` | def | Define $D_X(f)=\{x:f(x)\ne0\}$ and record $D_X(0)=\varnothing$, $D_X(1)=X$; prepares localization geometry. | literature-derived | not-applicable |
| `lem-principal-opens-form-affine-basis` | lem | Show principal opens form a basis and compute $D(f)\cap D(g)=D(fg)$; later matches scheme basic opens. | literature-derived | ai-altered |
| `thm-coordinate-ring-principal-open` | thm | Identify regular functions on $D_X(f)$ with $k[X]_f$, including the empty-open edge case; this is the local algebra bridge used in gluing. | literature-derived | ai-altered |
| `def-quasi-affine-algebraic-set` | def | Define quasi-affine algebraic sets as open subspaces of affine algebraic sets; distinguishes them from affine objects. | literature-derived | not-applicable |
| `lem-algebraic-set-finite-irreducible-components` | lem | Use Noetherianity of the classical Zariski space to obtain a finite irredundant decomposition into irreducible components and prove uniqueness. | literature-derived | ai-altered |
| `def-reduced-affine-algebra` | def | Name reduced finitely generated $k$-algebras and note why nilpotents are invisible to classical point sets; motivates schemes. | literature-derived | not-applicable |
| `thm-affine-algebraic-sets-coordinate-duality` | thm | Establish the contravariant equivalence between affine algebraic sets and reduced finitely generated $k$-algebras, after `AV-2` supplies morphisms; states the target and defers only the morphism half. | literature-derived | not-supplied |
| `lem-maximal-ideals-are-points-over-algebraically-closed-field` | lem | Apply weak Nullstellensatz to identify closed points with maximal ideals $(x_1-a_1,\ldots,x_n-a_n)$; powers the scheme comparison. | literature-derived | ai-altered |
| `cor-zariski-topology-cofinite-on-affine-line` | cor | Show proper closed subsets of $\mathbf A^1_k$ are finite; supplies the first concrete warning that Zariski topology is coarse. | literature-derived | ai-altered |
| `lem-density-nonempty-open-affine-variety` | lem | Prove every nonempty open subset of an affine variety is dense; later guarantees rational maps are determined on overlaps. | literature-derived | ai-altered |
| `rem-classical-affine-register-limit` | rem | Explain precisely that reducedness and algebraic closure discard nilpotents and non-rational points, which `AV-11` restores. | literature-derived | not-applicable |

### Proposed B-page inventory (7 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-affine-line-and-affine-space-coordinate-rings` | ex | Compute $I(\mathbf A^n)$ and $k[\mathbf A^n]$, including $n=0$; checks boundary conventions. | literature-derived | not-applicable |
| `ex-parabola-is-affine-line` | ex | Compute $k[V(y-x^2)]\cong k[t]$ and the explicit inverse parametrization; distinguishes equations from intrinsic geometry. | literature-derived | not-applicable |
| `ex-coordinate-cross-reducible` | ex | Decompose $V(xy)$ into the two axes and exhibit zero divisors in its coordinate ring. | literature-derived | not-applicable |
| `ex-punctured-affine-line-not-affine-closed-subset` | ex | Identify $\mathbf A^1\setminus\{0\}=D(t)$ and its ring $k[t,t^{-1}]$; previews quasi-affine versus closed affine realization. | literature-derived | not-applicable |
| `cex-zariski-topology-not-hausdorff` | cex | For infinite $k$, show two nonempty opens of $\mathbf A^1$ meet; refutes Hausdorff intuition. | ai-generated | not-applicable |
| `cex-nilpotent-polynomial-data-invisible-to-zero-locus` | cex | Compare $(x)$ and $(x^2)$: identical point set, different quotient rings; motivates nonreduced schemes. | literature-derived | not-applicable |
| `ex-empty-affine-algebraic-set-unit-ideal` | ex | Verify the empty algebraic set corresponds to the unit ideal and zero coordinate ring under the extended algebraic-set convention. | ai-generated | not-applicable |

**Proof split and traps.** The Nullstellensatz itself remains on
`noether-normalisation-and-nullstellensatz`; the A page splits only its
geometric consequences. Do not call every algebraic set a variety. Do not use
closed points of $\operatorname{Spec}$ before `AV-11`, and do not silently
exclude $\varnothing$ from the algebraic-set lattice merely because varieties
are nonempty.

---

## AV-2. Morphisms, local rings, and rational maps of affine varieties

`requires`: `AV-1`, localization and fraction-field interfaces from
commutative algebra. Pair sources: Milne Ch. 3 §§e--l, pp. 66--80 and Ch. 5
§§a--e, pp. 100--108; Arapura Ch. 1 §§1.5--1.7, pp. 10--14 and Ch. 3
§§3.1--3.3, pp. 26--29; Artin Ch. 2 §2.7, pp. 51--55 and Ch. 3 §3.4,
pp. 65--71.

### Proposed A-page inventory (23 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-regular-function-classical-variety` | def | Define a regular function locally as a quotient $g/h$ with nonvanishing denominator; makes locality explicit. | literature-derived | not-applicable |
| `lem-regular-functions-form-sheaf-classical` | lem | Prove locality and unique gluing for regular functions on a classical variety; anticipates the abstract sheaf axioms. | literature-derived | ai-altered |
| `def-morphism-classical-varieties` | def | Define a morphism by pullback of regular functions, and state the equivalent coordinate-description on affine targets. | literature-derived | not-applicable |
| `thm-affine-morphisms-coordinate-ring-anti-equivalence` | thm | Give the natural bijection $\operatorname{Mor}(X,Y)\cong\operatorname{Hom}_{k\text{-alg}}(k[Y],k[X])$ with identity and composition checks. | literature-derived | ai-altered |
| `cor-affine-algebraic-set-coordinate-duality-complete` | cor | Complete the contravariant equivalence announced in `AV-1`, including empty objects. | literature-derived | ai-altered |
| `def-regular-map-image-and-fibre-classical` | def | Fix image and set-theoretic fibre notation and warn that images need not be closed; prepares constructibility and fibre dimension. | literature-derived | not-applicable |
| `lem-graph-of-affine-variety-morphism-is-closed` | lem | Write the graph equations and prove closedness in $X\times Y$ once the product is available; supplies one direction of separatedness intuition. | literature-derived | ai-altered |
| `def-germ-and-local-ring-classical-variety` | def | Define germs of regular functions and $\mathcal O_{X,x}$, including equality on a neighbourhood; supplies the local invariant used by tangent and smoothness theory. | literature-derived | not-applicable |
| `thm-local-ring-affine-variety-localization` | thm | Identify $\mathcal O_{X,x}\cong k[X]_{\mathfrak m_x}$ with a two-sided construction; ties geometry to cited localization. | literature-derived | ai-altered |
| `def-residue-field-classical-point` | def | Define $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ and identify it with $k$ in the classical register. | literature-derived | not-applicable |
| `def-function-field-variety` | def | Define $k(X)=\operatorname{Frac}k[U]$ on a nonempty affine open $U$ and require independence of $U$. | literature-derived | not-applicable |
| `thm-function-field-independent-affine-open` | thm | Canonically identify the fraction fields from all nonempty affine opens; closes the well-definedness obligation in the preceding definition. | literature-derived | ai-altered |
| `def-rational-map-varieties` | def | Define a rational map as an equivalence class of morphisms on nonempty opens, with equality on a nonempty common open. | literature-derived | not-applicable |
| `lem-rational-map-equivalence-transitive` | lem | Prove transitivity using irreducibility and density; prevents a hidden gap in the equivalence-class definition. | literature-derived | ai-altered |
| `def-domain-of-definition-rational-map` | def | Define the maximal domain of definition when the target is separated; records the hypothesis needed for gluing representatives. | literature-derived | not-applicable |
| `thm-rational-maps-to-affine-variety-function-field` | thm | Identify dominant rational maps $X\dashrightarrow Y$ with injective $k$-homomorphisms $k(Y)\hookrightarrow k(X)$. | literature-derived | ai-altered |
| `def-dominant-morphism-and-rational-map` | def | Define dominance by dense image and record the equivalent injectivity criterion for affine varieties. | literature-derived | not-applicable |
| `lem-dominant-map-pullback-function-fields` | lem | Prove the function-field pullback is well defined and functorial; is the engine behind birational invariance. | literature-derived | ai-altered |
| `def-birational-equivalence-varieties` | def | Define birational maps and birational equivalence without requiring everywhere-defined inverses. | literature-derived | not-applicable |
| `thm-birational-equivalence-function-fields` | thm | Show integral varieties are birational iff their function fields are isomorphic over $k$. | literature-derived | ai-altered |
| `lem-morphism-equality-on-dense-open` | lem | For reduced source and separated target, prove morphisms agreeing on a dense open agree everywhere; later consumed by extension arguments. | literature-derived | ai-altered |
| `def-rational-function-regular-at-point` | def | Define regularity of $f\in k(X)$ at $x$ and its value through $\mathcal O_{X,x}$; prevents denominator-dependent evaluation. | literature-derived | not-applicable |
| `thm-global-regular-functions-affine-variety-coordinate-ring` | thm | Recover $\Gamma(X,\mathcal O_X)=k[X]$ by local denominators and the Nullstellensatz; completes the local-to-global affine dictionary. | literature-derived | ai-altered |

### Proposed B-page inventory (7 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-polynomial-map-coordinate-pullback` | ex | Compute the pullback for $(s,t)\mapsto(s,s^2,t)$ and verify the image equations. | ai-generated | not-applicable |
| `ex-hyperbola-is-multiplicative-group-variety` | ex | Identify $V(xy-1)$ with $\mathbf A^1\setminus\{0\}$ and compute its coordinate ring. | literature-derived | not-applicable |
| `ex-rational-parametrization-circle-conic` | ex | Parametrize a smooth projective conic from a rational point and exhibit its birational inverse. | literature-derived | not-applicable |
| `cex-rational-map-with-indeterminacy` | cex | Show $[x:y:z]\dashrightarrow[x:y]$ is undefined at $[0:0:1]$; distinguishes rational from regular maps. | literature-derived | not-applicable |
| `cex-birational-does-not-imply-isomorphic` | cex | Compare $\mathbf A^1$ with a nonempty principal open or a nodal cubic after normalization; refutes an overstrong inference. | literature-derived | not-applicable |
| `ex-local-ring-affine-line-at-origin` | ex | Compute $k[t]_{(t)}$, its maximal ideal, units, and residue field. | literature-derived | not-applicable |
| `cex-regular-bijection-not-isomorphism-cusp` | cex | Use $t\mapsto(t^2,t^3)$ to give a bijective morphism whose inverse is not regular at the cusp. | literature-derived | not-applicable |

**Proof split and traps.** The sheaf statement here is proved concretely for
regular functions; abstract sheaf theory begins at `AV-9`. The maximal domain
of a rational map is not asserted for an arbitrary nonseparated target. The
graph row is held until `AV-4` supplies the classical product; its dependency
metadata must point backward only after pair assembly orders the row below
that supplier, or the builder may move the row to `AV-4` without changing its
id.

---

## AV-3. Projective algebraic sets, projective morphisms, and cones

`requires`: `AV-1`, `AV-2`, graded-ring and homogeneous-ideal interfaces from
commutative algebra. Pair sources: Milne Ch. 6 §§a--i, pp. 130--146; Arapura
Ch. 2 §§2.1--2.5, pp. 15--22; Artin Ch. 3 §§3.1--3.2 and §3.4,
pp. 58--72.

### Proposed A-page inventory (24 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-projective-space-points` | def | Define $\mathbf P^n_k$ as one-dimensional quotients/equivalence classes of $k^{n+1}\setminus0$, including $n=0$. | literature-derived | not-applicable |
| `def-homogeneous-polynomial-and-homogeneous-ideal` | def | Fix degree conventions and homogeneous ideals; cite, rather than rebuild, graded algebra. | literature-derived | not-applicable |
| `lem-homogeneous-polynomial-zero-locus-well-defined` | lem | Prove vanishing of a homogeneous polynomial is independent of the representative point; justifies projective equations. | literature-derived | ai-altered |
| `def-projective-algebraic-set` | def | Define $V_+(I)\subseteq\mathbf P^n$ for a homogeneous ideal and include the irrelevant-ideal empty case. | literature-derived | not-applicable |
| `thm-projective-zariski-topology` | thm | Verify the closed-set axioms for homogeneous zero loci and identify the standard opens $D_+(x_i)$. | literature-derived | ai-altered |
| `lem-standard-projective-opens-are-affine-spaces` | lem | Exhibit $D_+(x_i)\cong\mathbf A^n$ with explicit mutually inverse dehomogenization maps. | literature-derived | ai-altered |
| `lem-homogenization-dehomogenization-correspondence` | lem | Relate affine ideals and projective closures using homogenization and saturation by $x_0$; prevents spurious components at infinity. | literature-derived | ai-altered |
| `def-projective-closure-affine-set` | def | Define the projective closure as topological closure in $\mathbf P^n$, not merely raw homogenized equations. | literature-derived | not-applicable |
| `thm-ideal-projective-closure-saturation` | thm | Prove the ideal of the projective closure is the saturation of the homogenized ideal; powers reliable compactification computations. | literature-derived | ai-altered |
| `def-homogeneous-coordinate-ring` | def | Define $S(X)=k[x_0,\ldots,x_n]/I_+(X)$ and distinguish it from the affine coordinate ring. | literature-derived | not-applicable |
| `def-projective-variety-classical` | def | Define a nonempty irreducible projective algebraic set and its affine standard charts. | literature-derived | not-applicable |
| `lem-projective-irreducibility-homogeneous-prime` | lem | Characterize irreducibility by the relevant homogeneous prime ideal, excluding the irrelevant ideal. | literature-derived | ai-altered |
| `def-regular-function-projective-variety` | def | Define degree-zero homogeneous quotient representatives locally, with denominator nonzero at the point. | literature-derived | not-applicable |
| `lem-projective-regular-function-chart-compatibility` | lem | Prove the quotient definition agrees with affine-chart regularity on overlaps. | literature-derived | ai-altered |
| `thm-global-regular-functions-projective-variety` | thm | On a connected projective variety over $k$, prove every global regular function is constant, using properness later or an elementary homogeneous proof here. | literature-derived | ai-altered |
| `def-morphism-to-projective-space-homogeneous-coordinates` | def | Define a morphism locally by same-degree homogeneous tuples with no common zero, modulo invertible scaling. | literature-derived | not-applicable |
| `lem-projective-coordinate-morphisms-well-defined` | lem | Check independence of homogeneous representatives and glue local target charts. | literature-derived | ai-altered |
| `thm-closed-projective-embedding-by-homogeneous-generators` | thm | Characterize closed immersions into projective space through homogeneous coordinate surjections; prepares Proj. | literature-derived | ai-altered |
| `def-affine-cone-projective-set` | def | Define the affine cone $C(X)\subseteq\mathbf A^{n+1}$ and its vertex. | literature-derived | not-applicable |
| `lem-projective-variety-cone-irreducible` | lem | Relate irreducibility of $X$ to irreducibility of its cone and homogeneous coordinate domain. | literature-derived | ai-altered |
| `lem-projective-closure-dense-affine-chart` | lem | If no component lies at infinity, show the original affine set is dense in its projective closure. | literature-derived | ai-altered |
| `def-degree-projective-hypersurface` | def | Define the degree of a projective hypersurface by its homogeneous equation up to scalar. | literature-derived | not-applicable |
| `lem-projective-hypersurface-affine-pieces` | lem | Compute each affine chart by dehomogenization and prove their overlap transition formulas. | literature-derived | ai-altered |
| `rem-projective-coordinate-ring-not-function-ring` | rem | Explain why elements of nonzero degree do not define scalar-valued global functions; prevents a recurring category error. | literature-derived | not-applicable |

### Proposed B-page inventory (7 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-projective-line-two-affine-charts` | ex | Glue two affine lines by $t\leftrightarrow t^{-1}$ and identify $0$ and infinity. | literature-derived | not-applicable |
| `ex-projective-closure-parabola` | ex | Homogenize $y-x^2$ correctly and locate its point at infinity. | literature-derived | not-applicable |
| `cex-naive-homogenization-adds-component` | cex | Exhibit generators whose separate homogenizations need saturation and otherwise add a component at infinity. | literature-derived | not-applicable |
| `ex-projective-conic-standard-charts` | ex | Compute the standard affine pieces of $V(xz-y^2)\subset\mathbf P^2$. | literature-derived | not-applicable |
| `ex-affine-cone-over-conic` | ex | Compute the cone and show the vertex can be singular although the projective conic is smooth. | literature-derived | not-applicable |
| `cex-inhomogeneous-equation-not-projectively-well-defined` | cex | Show $x_0+1=0$ changes under rescaling; tests the homogeneity requirement. | ai-generated | not-applicable |
| `ex-morphism-projective-line-power-map` | ex | Verify $[s:t]\mapsto[s^d:t^d]$ is a morphism for $d\ge1$ and find its fibres in simple characteristics. | literature-derived | not-applicable |

---

## AV-4. Products, Segre and Veronese embeddings, and Grassmannians

`requires`: `AV-2`, `AV-3`, multilinear/exterior algebra, and the cited
homogeneous/graded interfaces. Pair sources: Milne Ch. 6 §§j--m,
pp. 146--153; Artin Ch. 3 §§3.3 and 3.6, pp. 62--79; Vakil Ch. 10
§§10.1--10.3, pp. 207--218 and Ch. 17 §17.5, pp. 352--357; MIT 18.725
Lectures 3--4, consolidated-notes PDF pp. 6--13.

### Proposed A-page inventory (25 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-product-varieties-universal-property` | def | Define a product by its projections and universal property, including products with the empty variety and a point. | literature-derived | not-applicable |
| `thm-affine-variety-product-coordinate-ring` | thm | Construct $X\times_kY$ with coordinate ring $k[X]\otimes_k k[Y]$ and verify the universal property. | literature-derived | ai-altered |
| `lem-affine-product-topology-not-product-topology` | lem | Show the Zariski topology on $X\times Y$ is generally finer than the topological product topology and still has the correct fibres. | literature-derived | ai-altered |
| `def-segre-map` | def | Define $\sigma:\mathbf P^m\times\mathbf P^n\to\mathbf P^{(m+1)(n+1)-1}$ by all products $x_i y_j$. | literature-derived | not-applicable |
| `lem-segre-map-well-defined-injective` | lem | Check double scaling, injectivity, and the $m=0$ or $n=0$ boundary cases. | literature-derived | ai-altered |
| `thm-segre-image-rank-one-minors` | thm | Prove the image is the closed locus cut out by the $2\times2$ minors and recover both factors locally. | literature-derived | ai-altered |
| `cor-projective-variety-product-exists` | cor | Use Segre to construct products of projective varieties and verify the universal property. | literature-derived | ai-altered |
| `def-veronese-map` | def | Define the degree-$d$ Veronese map by all degree-$d$ monomials for $d\ge1$. | literature-derived | not-applicable |
| `lem-veronese-map-well-defined-closed-immersion` | lem | Prove the Veronese map is a closed immersion, separating injectivity, local inverse, and closed-image arguments. | literature-derived | ai-altered |
| `cor-homogeneous-polynomial-becomes-hyperplane-section` | cor | Show a degree-$d$ hypersurface pulls back from a hyperplane under the Veronese embedding; explains what the construction is for. | literature-derived | ai-altered |
| `def-grassmannian-subspaces` | def | Define $\operatorname{Gr}(r,n)$ as $r$-planes in $k^n$, with $r=0,n$ giving a point. | literature-derived | not-applicable |
| `def-plucker-coordinates` | def | Assign to an $r$-plane the line $[v_1\wedge\cdots\wedge v_r]$ in $\mathbf P(\bigwedge^r k^n)$. | literature-derived | not-applicable |
| `lem-plucker-map-well-defined-injective` | lem | Prove basis-independence up to determinant and reconstruct the subspace from its decomposable line. | literature-derived | ai-altered |
| `thm-plucker-image-closed` | thm | Characterize decomposable $r$-vectors by Plücker relations and hence realize the Grassmannian as a projective variety. | literature-derived | ai-altered |
| `lem-grassmannian-standard-affine-charts` | lem | Normalize a nonzero Plücker coordinate and identify the chart with $\mathbf A^{r(n-r)}$. | literature-derived | ai-altered |
| `cor-grassmannian-smooth-irreducible-dimension` | cor | From the chart transitions, show $\operatorname{Gr}(r,n)$ is smooth, irreducible, and of dimension $r(n-r)$. | literature-derived | ai-altered |
| `def-incidence-correspondence-varieties` | def | Define closed incidence loci such as $\{(x,L):x\in L\}$ by equations; prepares elimination and proper-image arguments. | literature-derived | not-applicable |
| `lem-incidence-locus-is-closed` | lem | Express incidence through bilinear/Plücker equations and prove closedness. | literature-derived | ai-altered |
| `thm-graph-closed-for-classical-variety-morphism` | thm | Complete the deferred `AV-2` graph proof using the diagonal in the product; supplies separatedness intuition without a forward dependency. | literature-derived | ai-altered |
| `lem-diagonal-affine-variety-cut-out-by-coordinate-differences` | lem | On affine varieties, identify the diagonal ideal and prove it is closed. | literature-derived | ai-altered |
| `def-base-change-classical-varieties` | def | Name pullback of varieties over a base variety via the product universal property; anticipates scheme fibre products. | literature-derived | not-applicable |
| `lem-fibre-as-base-change-to-point-classical` | lem | Identify the scheme-free set-theoretic fibre with pullback over a closed point in the reduced classical setting. | literature-derived | ai-altered |
| `thm-multihomogeneous-map-to-projective-space` | thm | Give the no-common-zero criterion for maps from products of projective spaces defined by forms of fixed multidegree. | literature-derived | ai-altered |
| `cor-segre-veronese-embedding` | cor | Compose Veronese maps with Segre to embed products using prescribed positive bidegrees. | literature-derived | ai-altered |
| `rem-products-need-scheme-fibre-products` | rem | Mark that tensor products can acquire nilpotents or split after field extension, so `AV-13` rebuilds the construction for schemes. | literature-derived | not-applicable |

### Proposed B-page inventory (8 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-segre-p1-times-p1-quadric` | ex | Compute the image $z_{00}z_{11}-z_{01}z_{10}=0$ and its inverse charts. | literature-derived | not-applicable |
| `ex-quadratic-veronese-conic` | ex | Map $\mathbf P^1$ to the conic $[s^2:st:t^2]$ and find its relation. | literature-derived | not-applicable |
| `ex-grassmannian-lines-in-projective-three-space` | ex | Write the single Plücker quadric for $\operatorname{Gr}(2,4)\subset\mathbf P^5$. | literature-derived | not-applicable |
| `ex-grassmannian-boundary-r-zero-n` | ex | Verify $\operatorname{Gr}(0,n)$ and $\operatorname{Gr}(n,n)$ are points while invalid $r$ gives the empty functor. | ai-generated | not-applicable |
| `cex-zariski-product-topology-too-coarse` | cex | Use the diagonal in $\mathbf A^1\times\mathbf A^1$ to show it is not closed in the ordinary product of two cofinite topologies. | literature-derived | not-applicable |
| `ex-incidence-point-hyperplane` | ex | Cut out $\sum x_i a_i=0$ in $\mathbf P^n\times(\mathbf P^n)^\vee$ and compute both projection fibres. | literature-derived | not-applicable |
| `cex-tensor-product-of-domains-not-domain` | cex | Over a non-algebraically closed field, compute a tensor product that splits or has zero divisors; explains the base convention. | literature-derived | not-applicable |
| `ex-segre-veronese-bidegree-two-three` | ex | List the coordinates for $\mathbf P^1\times\mathbf P^1$ at bidegree $(2,3)$ and check scaling. | ai-generated | not-applicable |

---

## AV-5. Dimension, constructible images, and dimensions of fibres

`requires`: `AV-1`--`AV-4`, `krull-dimension-and-height-theorems`,
`noether-normalisation-and-nullstellensatz`, and the transcendence-degree
interface. Pair sources: Milne Ch. 5 §§j--m, pp. 117--123, Ch. 6 §§n--q,
pp. 153--160, and Ch. 9 §§a--c, pp. 198--210; Arapura Ch. 4 §§4.1--4.3,
pp. 30--33; Artin Ch. 4 §§4.5--4.7, pp. 91--98 and Ch. 5 §§5.4--5.8,
pp. 108--119.

### Proposed A-page inventory (25 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-dimension-noetherian-topological-space` | def | Define dimension as the supremum of lengths of strict chains of irreducible closed subsets, with $\dim\varnothing=-\infty$. | literature-derived | not-applicable |
| `def-dimension-classical-variety` | def | Define $\dim X$ topologically and local dimension $\dim_xX$ through irreducible components containing $x$. | literature-derived | not-applicable |
| `thm-affine-variety-dimension-coordinate-ring` | thm | Identify geometric chain dimension with $\dim k[X]$, citing the spectral/height supplier for the algebraic theorem. | literature-derived | ai-altered |
| `thm-dimension-equals-transcendence-degree` | thm | For an irreducible variety, prove $\dim X=\operatorname{trdeg}_k k(X)$ via cited Noether normalization. | literature-derived | ai-altered |
| `cor-dimension-affine-and-projective-space` | cor | Compute $\dim\mathbf A^n=\dim\mathbf P^n=n$, including $n=0$. | literature-derived | ai-altered |
| `lem-dimension-nonempty-open-subset` | lem | Show a nonempty open subset of an irreducible variety has the same dimension; used by birational invariance. | literature-derived | ai-altered |
| `cor-dimension-birational-invariant` | cor | Deduce birational irreducible varieties have equal dimension. | literature-derived | ai-altered |
| `lem-dimension-finite-union-components` | lem | Show dimension of a finite union of closed subsets is the maximum of their dimensions, with the empty convention. | literature-derived | ai-altered |
| `thm-dimension-product-varieties` | thm | Prove $\dim(X\times Y)=\dim X+\dim Y$ for nonempty varieties, using transcendence degree on irreducible products. | literature-derived | ai-altered |
| `def-codimension-irreducible-subvariety` | def | Define $\operatorname{codim}_X Z=\dim X-\dim Z$ for irreducible $Z\subseteq X$ and distinguish it from local height in nonequidimensional spaces. | literature-derived | not-applicable |
| `thm-principal-subvariety-codimension-one` | thm | If $f$ is nonzero and nonunit on an irreducible affine variety, every irreducible component of $V(f)$ has codimension one; cites the principal ideal theorem. | literature-derived | ai-altered |
| `def-constructible-subset-variety` | def | Define locally closed and constructible subsets, including the empty finite union. | literature-derived | not-applicable |
| `lem-constructible-dense-contains-open` | lem | In a Noetherian irreducible space, prove a dense constructible subset contains a nonempty open subset; powers dominance arguments. | literature-derived | ai-altered |
| `thm-chevalley-constructible-image-varieties` | thm | Prove or cite-decompose that a finite-type morphism of varieties has constructible image; supplies elimination beyond closed images. | literature-derived | ai-altered |
| `cor-dominant-morphism-image-contains-open` | cor | Deduce a dominant morphism contains a nonempty open subset of the target in its image. | literature-derived | ai-altered |
| `def-fibre-dimension-at-point-classical` | def | Define $X_y=f^{-1}(y)$ and its dimension, with empty fibre dimension $-\infty$. | literature-derived | not-applicable |
| `thm-fibre-dimension-lower-bound` | thm | For dominant $f:X\to Y$, show every nonempty fibre component has dimension at least $\dim X-\dim Y$. | literature-derived | ai-altered |
| `thm-generic-fibre-dimension` | thm | Produce a nonempty open $U\subseteq Y$ on which every fibre has pure dimension $\dim X-\dim Y$ under the stated irreducibility hypotheses. | literature-derived | ai-altered |
| `thm-upper-semicontinuity-fibre-dimension-projective` | thm | For a projective morphism, prove $\{y:\dim X_y\ge r\}$ is closed; this is the form later used by families. | literature-derived | ai-altered |
| `cor-dimension-of-image-plus-generic-fibre` | cor | For arbitrary $f:X\to Y$, relate $\dim X$ to the dimension of the closure of the image and the generic fibre. | literature-derived | ai-altered |
| `def-quasi-finite-morphism-classical` | def | Define quasi-finite as finite type with finite fibres and record that empty fibres are finite. | literature-derived | not-applicable |
| `thm-dominant-equal-dimension-generically-finite` | thm | Show a dominant morphism of irreducible varieties of equal dimension is quasi-finite over a nonempty open. | literature-derived | ai-altered |
| `lem-dimension-local-ring-codimension-closure` | lem | Identify $\dim\mathcal O_{X,x}$ with the codimension of $x$ in an irreducible variety under the classical closed-point convention. | literature-derived | ai-altered |
| `thm-dimension-theorem-intersection-projective` | thm | For closed irreducible $X,Y\subseteq\mathbf P^n$, bound each component of $X\cap Y$ below by $\dim X+\dim Y-n$ and prove nonemptiness when the bound is nonnegative. | literature-derived | ai-altered |
| `rem-equidimensionality-hypotheses` | rem | Record which fibre and codimension conclusions require irreducibility, catenarity, or equidimensionality instead of silently universalizing them. | literature-derived | not-applicable |

### Proposed B-page inventory (8 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-dimensions-coordinate-cross-components` | ex | Compute global and component dimensions of $V(xy)\subset\mathbf A^2$. | literature-derived | not-applicable |
| `ex-fibres-hyperbola-projection` | ex | Compute the empty, one-point, and positive-dimensional fibres of elementary projections. | ai-generated | not-applicable |
| `ex-family-hyperbolas-degenerate-fibre` | ex | For $xy=t$, compare general fibres with the reducible special fibre and verify constant dimension. | literature-derived | not-applicable |
| `ex-fibre-dimension-jump` | ex | Give a morphism whose special fibre dimension exceeds the generic one. | literature-derived | not-applicable |
| `cex-image-morphism-not-closed` | cex | Project $V(xy-1)\subset\mathbf A^2$ to the $x$-axis and obtain $\mathbf A^1\setminus\{0\}$. | literature-derived | not-applicable |
| `cex-finite-fibres-not-finite-morphism` | cex | Use an open immersion with finite fibres to show quasi-finite does not mean finite. | literature-derived | not-applicable |
| `ex-intersection-two-projective-curves` | ex | Verify the dimension bound for two plane curves and contrast common-component and proper-intersection cases. | ai-generated | not-applicable |
| `cex-dimension-empty-set-minus-infinity-needed` | cex | Check that the $-\infty$ convention makes maxima and empty-fibre statements literal. | ai-generated | not-applicable |

**Ownership trap.** Chain/height theorems, Noether normalization, and the
algebraic proof of generic freeness are not AV items. The page turns them into
geometric statements and cites the owning algebra pages.

---

## AV-6. Zariski tangent spaces, regular points, smoothness, and Bertini

`requires`: `AV-2`, `AV-5`, local-ring/Nakayama interfaces, and
`krull-dimension-and-height-theorems`. Pair sources: Milne Ch. 4 §§a--j,
pp. 81--99; Arapura Ch. 5 §§5.1--5.4, pp. 34--40; Vakil Ch. 13
§§13.1--13.6, pp. 265--288; Milne AG10 §f, pp. 16--20.

### Proposed A-page inventory (27 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-zariski-cotangent-space-point` | def | Define $\mathfrak m_x/\mathfrak m_x^2$ and its residue-field vector-space structure. | literature-derived | not-applicable |
| `def-zariski-tangent-space-point` | def | Define $T_xX=\operatorname{Hom}_{\kappa(x)}(\mathfrak m_x/\mathfrak m_x^2,\kappa(x))$; works intrinsically and later for schemes. | literature-derived | not-applicable |
| `lem-tangent-vectors-as-dual-number-points` | lem | Identify tangent vectors with maps $\operatorname{Spec}\kappa(x)[\epsilon]/(\epsilon^2)\to X$ based at $x$ once schemes are available; state now, prove at `AV-16`. | literature-derived | not-supplied |
| `def-jacobian-matrix-affine-algebraic-set` | def | Define the Jacobian at a point for chosen equations and fix row/column convention. | literature-derived | not-applicable |
| `thm-zariski-tangent-space-jacobian-kernel` | thm | Prove $T_xX$ is the common kernel of the differentials of all defining equations and is unchanged by generators. | literature-derived | ai-altered |
| `lem-tangent-space-functoriality-classical` | lem | Construct $d_xf:T_xX\to T_{f(x)}Y$ and prove identity/chain rules. | literature-derived | ai-altered |
| `lem-tangent-space-product` | lem | Show $T_{(x,y)}(X\times Y)\cong T_xX\oplus T_yY$; consumed by transversality and group examples. | literature-derived | ai-altered |
| `def-regular-local-ring-geometric-point` | def | Call $x$ regular when $\dim_{\kappa(x)}\mathfrak m_x/\mathfrak m_x^2=\dim\mathcal O_{X,x}$. | literature-derived | not-applicable |
| `thm-embedding-dimension-at-least-local-dimension` | thm | Prove $\dim T_xX\ge\dim_xX$ via generators of the maximal ideal and cited dimension theory. | literature-derived | ai-altered |
| `def-singular-and-regular-loci-variety` | def | Define $X_{\mathrm{reg}}$ and $X_{\mathrm{sing}}$, including componentwise local dimension. | literature-derived | not-applicable |
| `thm-jacobian-criterion-affine-variety` | thm | Under the stated perfect-field hypotheses, characterize regular points by Jacobian rank $n-\dim_xX$. | literature-derived | ai-altered |
| `cor-hypersurface-singular-locus-gradient` | cor | For a reduced hypersurface, identify singular points by simultaneous vanishing of $f$ and all first partials, with characteristic caveat. | literature-derived | ai-altered |
| `thm-regular-locus-is-open-variety` | thm | Prove the regular locus of a finite-type variety over a perfect field is open. | literature-derived | ai-altered |
| `thm-nonempty-regular-locus-reduced-variety-perfect-field` | thm | Show each irreducible component has a dense open regular locus over a perfect field. | literature-derived | ai-altered |
| `def-smooth-morphism-to-field-classical` | def | Define a variety smooth over $k$ by geometric regularity after field extension, separating it from mere regularity. | literature-derived | not-applicable |
| `thm-regular-equals-smooth-over-perfect-field` | thm | Prove regular finite-type $k$-schemes are smooth when $k$ is perfect; records the exact convention used in the classical block. | literature-derived | ai-altered |
| `cex-regular-not-smooth-imperfect-field-theorem` | thm | State the standard purely inseparable field-extension counterexample to regular implying smooth; retained as a theorem row because later definitions depend on the distinction. | literature-derived | not-supplied |
| `def-tangent-cone-point` | def | Define the tangent cone by the associated graded local ring, citing graded algebra for construction. | literature-derived | not-applicable |
| `lem-tangent-cone-linear-span-tangent-space` | lem | Show the linear span of the tangent cone is the Zariski tangent space. | literature-derived | ai-altered |
| `def-multiplicity-hypersurface-point` | def | Define hypersurface multiplicity as the least nonzero degree in the local expansion; prepares plane-curve intersection. | literature-derived | not-applicable |
| `lem-hypersurface-smooth-iff-multiplicity-one` | lem | Prove a hypersurface point is smooth iff its multiplicity is one. | literature-derived | ai-altered |
| `thm-generic-smoothness-characteristic-zero` | thm | For a dominant morphism of varieties in characteristic zero, find a dense open target over which the map is smooth, citing the algebraic separability input. | literature-derived | ai-altered |
| `def-linear-system-base-locus` | def | Define a linear system and its base locus; supplies the hypotheses of Bertini. | literature-derived | not-applicable |
| `thm-bertini-smooth-hyperplane-section` | thm | Over an algebraically closed field of characteristic zero, show a general hyperplane section of a smooth quasi-projective variety is smooth away from the base locus. | literature-derived | ai-altered |
| `cor-smooth-projective-complete-intersections-general` | cor | Iteratively obtain smooth complete intersections of expected dimension from general hypersurfaces. | literature-derived | ai-altered |
| `lem-smoothness-stable-under-product-classical` | lem | Prove products of smooth varieties over $k$ are smooth, using tangent dimensions and later base-change compatibility. | literature-derived | ai-altered |
| `rem-jacobian-presentation-independence` | rem | Require the builder to prove invariance rather than treat a convenient equation list as intrinsic. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-tangent-space-parabola` | ex | Compute the tangent line to $y-x^2=0$ intrinsically and by the Jacobian. | literature-derived | not-applicable |
| `ex-node-two-tangent-directions` | ex | Compute the tangent cone of a nodal cubic and its two lines. | literature-derived | not-applicable |
| `ex-cusp-double-tangent` | ex | Compute tangent space, tangent cone, and multiplicity at $y^2=x^3$. | literature-derived | not-applicable |
| `ex-smooth-quadric-hypersurface` | ex | Verify smoothness of a nondegenerate quadric in the permitted characteristics. | literature-derived | not-applicable |
| `cex-nonreduced-hypersurface-jacobian` | cex | Show $V(f^p)$ in characteristic $p$ defeats a reduced-free Jacobian slogan. | literature-derived | not-applicable |
| `cex-regular-not-smooth-purely-inseparable-point` | cex | Work out $\operatorname{Spec}(k[t]/(t^p-a))$ over an imperfect field and after algebraic closure. | literature-derived | not-applicable |
| `cex-bertini-characteristic-p-failure` | cex | Give a Frobenius-composed linear system whose general member is singular; justifies the characteristic-zero hypothesis. | literature-derived | not-applicable |
| `ex-tangent-space-product-origin` | ex | Compute a product tangent space directly and compare with the direct-sum theorem. | ai-generated | not-applicable |
| `ex-projective-cone-singular-vertex` | ex | Verify the vertex of a cone can be singular although its base is smooth. | literature-derived | not-applicable |

---

## AV-7. Normal varieties, normalization, and Zariski's Main Theorem

`requires`: `AV-2`, `AV-5`, `AV-6`; commutative algebra supplies integral
extensions/closures, finiteness of normalization for finitely generated
algebras, Serre's criterion, DVRs, and dimension/height. Pair sources: Milne
Ch. 8 §§a--g, pp. 176--194; Artin Ch. 4 §§4.2--4.7, pp. 82--98; Vakil
Ch. 10 §§10.5--10.6, pp. 222--230 and Ch. 13 §13.5, pp. 282--285.

### Proposed A-page inventory (24 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-normal-point-and-normal-variety` | def | Define a point as normal when its local ring is an integrally closed domain and a variety as normal when all points are normal. | literature-derived | not-applicable |
| `lem-normality-local-on-affine-opens` | lem | Show normality can be checked on an affine open cover by normal coordinate domains. | literature-derived | ai-altered |
| `thm-regular-local-ring-is-normal` | thm | Deduce regular varieties are normal, citing the commutative-algebra regular-local-ring theorem rather than re-proving it. | literature-derived | ai-altered |
| `thm-normal-variety-regular-in-codimension-one` | thm | Apply Serre's $R_1$ condition to show codimension-one local rings of a normal Noetherian variety are DVRs. | literature-derived | ai-altered |
| `def-normalization-affine-variety` | def | Define $X^\nu=\operatorname{Spec}\overline{k[X]}$ in $k(X)$ at the algebraic level and the induced finite map. | literature-derived | not-applicable |
| `thm-normalization-finite-birational-surjective` | thm | Prove normalization of an affine variety is finite, birational, and surjective, citing integral-extension results for finiteness and lying over. | literature-derived | ai-altered |
| `lem-normalization-isomorphism-over-normal-locus` | lem | Show the normalization restricts to an isomorphism above the normal locus. | literature-derived | ai-altered |
| `thm-normalization-glues-variety` | thm | Glue affine normalizations and prove independence on overlaps; supplies normalization for arbitrary varieties. | literature-derived | ai-altered |
| `thm-normalization-universal-property` | thm | Any dominant birational morphism from a normal variety to $X$ factors uniquely through $X^\nu$; more general finite field extensions require normalization in that extension. | literature-derived | ai-altered |
| `cor-normalization-unique-up-to-unique-isomorphism` | cor | Deduce uniqueness from the universal property. | literature-derived | ai-altered |
| `lem-normalization-commutes-with-restriction-open` | lem | Show $X^\nu\!\restriction_U\cong U^\nu$ for nonempty open $U\subseteq X$; used in curve calculations. | literature-derived | ai-altered |
| `def-unibranch-point-classical` | def | Define unibranch by a unique point of the normalization over $x$ and distinguish it from normality. | literature-derived | not-applicable |
| `thm-normal-curve-is-nonsingular` | thm | For a variety curve over a perfect field, show normal, regular, and nonsingular are equivalent, using the DVR criterion. | literature-derived | ai-altered |
| `cor-normalization-resolves-singularities-of-curves` | cor | Deduce the normalization of a projective curve is a nonsingular projective curve under the stated perfect-field hypothesis. | literature-derived | ai-altered |
| `def-finite-morphism-classical-affine-local` | def | Define finite morphisms by affine inverse images and finite coordinate modules; prepares the finite/quasi-finite distinction. | literature-derived | not-applicable |
| `thm-finite-morphism-closed-and-finite-fibres` | thm | Show finite morphisms are closed and have finite fibres; uses cited integral-extension algebra. | literature-derived | ai-altered |
| `lem-finite-birational-to-normal-is-isomorphism` | lem | Prove a finite birational morphism onto a normal variety is an isomorphism. | literature-derived | ai-altered |
| `thm-zariski-main-open-immersion-factorization-classical` | thm | Factor a separated quasi-finite morphism as an open immersion followed by a finite morphism; exact classical form used later. | literature-derived | ai-altered |
| `cor-bijective-birational-to-normal-isomorphism-under-finiteness` | cor | Isolate the finiteness hypothesis that repairs the cusp counterexample. | literature-derived | ai-altered |
| `thm-normal-functions-codimension-one-intersection` | thm | On a normal variety, recover regular functions as the intersection of codimension-one local rings inside $k(X)$, citing the commutative-algebra normal-domain theorem. | literature-derived | ai-altered |
| `cor-rational-function-no-poles-codimension-one-regular` | cor | A rational function on a normal variety with no codimension-one poles is regular. | literature-derived | ai-altered |
| `def-conductor-normalization` | def | Define the conductor ideal $\operatorname{Ann}(\nu_*\mathcal O_{X^\nu}/\mathcal O_X)$ and its support as the non-isomorphism locus. | literature-derived | not-applicable |
| `lem-conductor-ideal-common-ideal` | lem | Show the conductor is an ideal in both the original ring and its normalization; supports explicit curve singularity calculations. | literature-derived | ai-altered |
| `rem-normalization-not-resolution-higher-dimension` | rem | Record that normalization removes nonnormality but need not make a higher-dimensional variety smooth. | literature-derived | not-applicable |

### Proposed B-page inventory (8 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-normalization-cusp` | ex | Compute $k[t^2,t^3]\subset k[t]$, the normalization map, conductor, and unique point above the cusp. | literature-derived | not-applicable |
| `ex-normalization-node` | ex | Normalize a nodal plane curve and exhibit two points above the node. | literature-derived | not-applicable |
| `ex-normal-affine-space` | ex | Verify polynomial rings give normal affine spaces by citing the UFD interface. | literature-derived | not-applicable |
| `cex-normalization-not-injective-node` | cex | Use the nodal normalization to refute universal injectivity. | literature-derived | not-applicable |
| `cex-normal-not-smooth-quadric-cone` | cex | Exhibit a normal singular surface cone; refutes normal implies smooth in dimension two. | literature-derived | not-applicable |
| `cex-bijective-birational-not-isomorphism-cusp-reprise` | cex | Revisit the cusp map and pinpoint failure of target normality. | literature-derived | not-applicable |
| `ex-conductor-cusp-semigroup` | ex | Compute the least exponent from which all monomials lie in $k[t^2,t^3]$. | ai-generated | not-applicable |
| `cex-finite-fibres-not-finite-open-immersion` | cex | Show the missing boundary point prevents an open immersion from being finite. | literature-derived | not-applicable |

**Ownership trap.** The integral-closure algorithm, going-up/lying-over,
Krull--Akizuki, DVR classification, and Serre $R_1+S_2$ criterion remain
commutative algebra. AV records the geometric maps and consequences only.

---

## AV-8. Plane curves, local intersection multiplicity, and Bézout

`requires`: `AV-3`, `AV-5`, `AV-6`, local lengths/resultants from algebra,
and graded Hilbert theory by citation. Pair sources: Fulton, *Algebraic
Curves*, Ch. 5 §§5.1--5.6, pp. 53--66; Artin, MIT 18.721, Ch. 1
§§1.3--1.10, PDF pp. 9--34; MIT 18.725 Lectures 15--16,
consolidated-notes PDF pp. 35--40.

### Proposed A-page inventory (28 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-plane-projective-curve` | def | Define a plane projective curve by a nonconstant square-free homogeneous polynomial, allowing reducible curves but recording components. | literature-derived | not-applicable |
| `def-multiplicity-plane-curve-point` | def | Define multiplicity from the lowest-degree local term and prove independence under affine coordinate change. | literature-derived | ai-altered |
| `def-tangent-lines-plane-curve-point` | def | Define tangent lines from the linear factors of the tangent cone, with multiplicities. | literature-derived | not-applicable |
| `lem-smooth-plane-curve-unique-tangent` | lem | Show multiplicity one is equivalent to smoothness and gives one tangent line. | literature-derived | ai-altered |
| `def-local-intersection-multiplicity-plane-curves` | def | For curves without a common local component, define $I_p(C,D)$ as the length of $\mathcal O_{\mathbf P^2,p}/(f,g)$. | literature-derived | not-applicable |
| `lem-local-intersection-length-finite` | lem | Prove the quotient has finite length exactly when the curves share no component through $p$; closes well-definedness. | literature-derived | ai-altered |
| `lem-intersection-multiplicity-independent-equations-coordinates` | lem | Prove $I_p(C,D)$ is invariant under units, valid local equation changes, and projective coordinate changes. | literature-derived | ai-altered |
| `thm-intersection-multiplicity-basic-properties` | thm | Establish symmetry, positivity, additivity over products, and invariance under adding multiples. | literature-derived | ai-altered |
| `thm-intersection-multiplicity-at-least-product-multiplicities` | thm | Prove $I_p(C,D)\ge m_p(C)m_p(D)$ with equality exactly when tangent cones share no line. | literature-derived | ai-altered |
| `cor-transverse-smooth-curves-intersection-one` | cor | Two smooth plane curves with distinct tangent lines meet with multiplicity one. | literature-derived | ai-altered |
| `lem-intersection-with-line-order-of-vanishing` | lem | Identify $I_p(C,L)$ with the order of the restricted defining polynomial along a local parameter on $L$. | literature-derived | ai-altered |
| `def-resultant-homogeneous-polynomials` | def | Recall the resultant only through its algebra supplier and fix its vanishing/common-root interface. | literature-derived | not-applicable |
| `lem-resultant-detects-common-projective-point` | lem | Apply the resultant after eliminating one coordinate and account for points at infinity. | literature-derived | ai-altered |
| `lem-bezout-no-common-component-finite-intersection` | lem | Show plane curves with no common component meet in finitely many points. | literature-derived | ai-altered |
| `lem-bezout-global-length-degree-product` | lem | Use the cited Hilbert-polynomial/graded-length calculation to show the global intersection scheme has length $de$. | literature-derived | ai-altered |
| `lem-global-intersection-length-sum-local-lengths` | lem | Decompose the finite scheme length into the sum of its local lengths. | literature-derived | ai-altered |
| `thm-bezout-plane-curves` | thm | If degrees are $d,e$ and there is no common component, prove $\sum_p I_p(C,D)=de$ over the algebraically closed field. | literature-derived | ai-altered |
| `cor-projective-plane-curves-meet` | cor | Positive-degree plane curves have a common point unless they share a component, in which case they already meet. | literature-derived | ai-altered |
| `cor-line-meets-degree-d-curve-counted-with-multiplicity` | cor | A line not contained in $C$ meets it with total multiplicity $d$. | literature-derived | ai-altered |
| `def-flex-and-bitangent-plane-curve` | def | Define flexes and bitangents through intersection multiplicity; prepares later curve examples without building Plücker formulas. | literature-derived | not-applicable |
| `cor-tangent-line-flex-multiplicity` | cor | At a smooth point, characterize flexes by $I_p(C,T_pC)\ge3$. | literature-derived | ai-altered |
| `def-linear-system-plane-curves` | def | Define a projective linear family of degree-$d$ equations and its base locus. | literature-derived | not-applicable |
| `thm-bezout-uniqueness-low-degree-interpolation` | thm | If two degree-$d$ curves share more than $d^2$ distinct points, they share a component; gives a cheap Bézout application. | literature-derived | ai-altered |
| `lem-projective-coordinate-invariance-bezout-sum` | lem | Show the intersection sum is invariant under projective automorphisms; licenses convenient coordinates in computations. | literature-derived | ai-altered |
| `def-local-parameter-smooth-plane-curve` | def | Define a uniformizer at a smooth curve point through its DVR local ring, citing the DVR supplier. | literature-derived | not-applicable |
| `lem-local-intersection-as-vanishing-order-on-smooth-curve` | lem | When $C$ is smooth at $p$ and not a component of $D$, identify $I_p(C,D)=\operatorname{ord}_p(g\!\restriction_C)$. | literature-derived | ai-altered |
| `cor-pascal-bezout-obstruction-template` | cor | Isolate the standard component-counting pattern for incidence applications without minting a new named geometry theorem. | literature-derived | ai-altered |
| `rem-bezout-needs-projective-algebraic-closure-multiplicity` | rem | State why dropping any of projectivity, algebraic closure, or multiplicity breaks the numerical equality. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-line-conic-two-intersections` | ex | Compute a transverse line--conic intersection with total multiplicity two. | literature-derived | not-applicable |
| `ex-tangent-line-conic-double-intersection` | ex | Compute one tangency of multiplicity two. | literature-derived | not-applicable |
| `ex-cusp-line-intersection-multiplicities` | ex | Compare the cusp tangent with a transverse line using local quotient lengths. | literature-derived | not-applicable |
| `ex-node-line-intersection-branches` | ex | Compute how a line through a node meets its two tangent branches. | literature-derived | not-applicable |
| `cex-affine-bezout-misses-points-at-infinity` | cex | Exhibit affine curves whose missing projective intersection accounts for the degree deficit. | literature-derived | not-applicable |
| `cex-real-bezout-needs-algebraic-closure` | cex | Give two real projective curves whose complex intersections are not all real. | literature-derived | not-applicable |
| `cex-distinct-point-count-needs-multiplicity` | cex | A tangent line and conic have one distinct point but total intersection multiplicity two. | literature-derived | not-applicable |
| `cex-common-component-bezout-sum-not-finite` | cex | Two curves sharing a line violate the finite-intersection hypothesis. | ai-generated | not-applicable |
| `ex-two-plane-cubics-nine-points` | ex | Verify the Bézout total for a transverse cubic pair and note multiplicity changes under degeneration. | literature-derived | not-applicable |
| `ex-flex-cubic-contact-order-three` | ex | Compute a flex by substituting a tangent-line parametrization. | literature-derived | not-applicable |

**Boundary of this pair.** Plücker formulas, resolution of arbitrary plane
curve singularities by repeated blowups, and the genus formula are not hidden
inside Bézout. The genus formula returns after cohomology and adjunction in
`AV-25`; blowups are `AV-26`.

---

## AV-9. Presheaves, sheaves, stalks, and sheafification

`requires`: the category/functor and directed-colimit interfaces. This is the
track's owned construction of sheaves on a topological space. Pair sources:
Vakil Ch. 3 §§3.1--3.7, pp. 59--80; Stacks Project, *Sheaves on Spaces*,
§§6.2--6.20 (tags 006D--007X, no fixed pagination); Milne AG10 §a,
pp. 2--7; Gao--Zhang Ch. 2 §§2.1--2.3, pp. 14--17.

### Proposed A-page inventory (29 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-open-set-category-topological-space` | def | Regard opens of $X$ as a category under inclusion; fixes variance once for all sheaf constructions. | literature-derived | not-applicable |
| `def-presheaf-on-topological-space` | def | Define a presheaf of sets as a contravariant functor on opens, spelling out identity and composite restrictions. | literature-derived | not-applicable |
| `def-section-restriction-and-global-section` | def | Fix $\Gamma(U,\mathcal F)$, $s\!\restriction_V$, and $\Gamma(X,\mathcal F)$ notation. | literature-derived | not-applicable |
| `def-morphism-of-presheaves` | def | Define a natural transformation and composition componentwise. | literature-derived | not-applicable |
| `def-separated-presheaf` | def | Define uniqueness of gluing separately from existence; isolates the two sheaf axioms. | literature-derived | not-applicable |
| `def-sheaf-on-topological-space` | def | Define a sheaf by locality and gluing for every open cover, including the empty cover of $\varnothing$. | literature-derived | not-applicable |
| `lem-sheaf-section-over-empty-set-terminal` | lem | Prove a set-valued sheaf has exactly one section over $\varnothing$; handles the empty-cover boundary case. | literature-derived | ai-altered |
| `thm-sheaf-equalizer-condition` | thm | Reformulate the sheaf axiom as $\mathcal F(U)\to\prod_i\mathcal F(U_i)\rightrightarrows\prod_{i,j}\mathcal F(U_i\cap U_j)$ being an equalizer. | literature-derived | ai-altered |
| `lem-sheaf-condition-check-on-basis` | lem | Give precise intersection/refinement hypotheses under which sheafhood can be checked on a basis. | literature-derived | ai-altered |
| `def-presheaf-of-groups-rings-modules` | def | Define algebra-valued presheaves and sheaves objectwise with homomorphic restrictions. | literature-derived | not-applicable |
| `lem-forgetful-sheaf-compatibility` | lem | Show an algebra-valued presheaf is a sheaf iff its underlying set presheaf is; avoids repeating gluing proofs. | literature-derived | ai-altered |
| `def-stalk-of-presheaf` | def | Define $\mathcal F_x=\varinjlim_{x\in U}\mathcal F(U)$ as germs, with the neighbourhood category nonempty. | literature-derived | not-applicable |
| `lem-germ-equivalence-relation` | lem | Prove equality on a smaller neighbourhood is an equivalence relation; closes the concrete stalk construction. | literature-derived | ai-altered |
| `def-germ-of-section` | def | Define $s_x$ and the natural map $\mathcal F(U)\to\mathcal F_x$ for $x\in U$. | literature-derived | not-applicable |
| `lem-section-zero-if-all-germs-zero` | lem | For a sheaf of groups, prove a section is zero iff all its germs are zero. | literature-derived | ai-altered |
| `lem-morphisms-of-sheaves-determined-by-stalks` | lem | Prove two sheaf morphisms coincide iff their maps on every stalk coincide. | literature-derived | ai-altered |
| `thm-sheaf-morphism-isomorphism-stalkwise` | thm | Prove a morphism of sheaves is an isomorphism iff every stalk map is an isomorphism; used throughout local geometry. | literature-derived | ai-altered |
| `def-etale-space-of-sheaf-of-sets` | def | Construct the disjoint union of stalks with its canonical topology and projection to $X$. | literature-derived | not-applicable |
| `thm-sheaves-as-local-homeomorphisms` | thm | Identify sheaves of sets with étalé spaces/local homeomorphisms via continuous local sections. | literature-derived | ai-altered |
| `def-presheaf-plus-construction` | def | Define compatible germs locally modulo refinement, the plus construction used for sheafification. | literature-derived | not-applicable |
| `lem-first-plus-construction-is-separated` | lem | Prove $\mathcal F^+$ is separated and preserves existing stalks. | literature-derived | ai-altered |
| `lem-second-plus-construction-is-sheaf` | lem | Prove $\mathcal F^{++}$ satisfies locality and gluing. | literature-derived | ai-altered |
| `def-sheafification` | def | Define $a\mathcal F=\mathcal F^{++}$ with its unit map. | literature-derived | not-applicable |
| `thm-sheafification-universal-property` | thm | Prove maps $\mathcal F\to\mathcal G$ to a sheaf factor uniquely through $a\mathcal F$. | literature-derived | ai-altered |
| `thm-sheafification-preserves-stalks` | thm | Show $\mathcal F_x\to(a\mathcal F)_x$ is an isomorphism for every $x$. | literature-derived | ai-altered |
| `cor-sheafification-idempotent` | cor | Deduce $a(a\mathcal F)\cong a\mathcal F$ naturally. | literature-derived | ai-altered |
| `def-subsheaf` | def | Define a subsheaf by objectwise inclusions with inherited restrictions and a sheaf condition, not merely a subpresheaf. | literature-derived | not-applicable |
| `lem-image-sheaf-is-sheafification-presheaf-image` | lem | Identify the image sheaf of a morphism as the sheafification of its objectwise image presheaf. | literature-derived | ai-altered |
| `rem-sections-not-determined-by-single-stalk` | rem | Record that stalkwise reasoning always requires all points or a neighbourhood; prevents point/global confusion. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-sheaf-continuous-real-functions` | ex | Verify locality and gluing for continuous real-valued functions. | literature-derived | not-applicable |
| `ex-sheaf-locally-constant-functions` | ex | Compute stalks of the locally constant sheaf and contrast global sections on disconnected spaces. | literature-derived | not-applicable |
| `cex-presheaf-bounded-continuous-functions-not-sheaf` | cex | Locally bounded functions glue to an unbounded global function, so the presheaf fails existence. | literature-derived | not-applicable |
| `cex-constant-presheaf-not-sheaf-disconnected-open` | cex | Show the constant presheaf fails gluing and its sheafification is the locally constant sheaf. | literature-derived | not-applicable |
| `ex-skyscraper-set-sheaf-stalks` | ex | Compute sections and stalks of a set-valued skyscraper sheaf. | literature-derived | not-applicable |
| `ex-extension-by-empty-outside-open` | ex | Construct the sheaf of sections supported in an open subset for set-valued data. | literature-derived | not-applicable |
| `cex-objectwise-image-not-sheaf` | cex | Give a sheaf morphism whose presheaf image fails gluing, motivating image sheafification. | literature-derived | not-applicable |
| `ex-germs-of-continuous-functions` | ex | Exhibit distinct global functions with the same germ at one point and equal germs at every point only when equal. | ai-generated | not-applicable |
| `ex-empty-space-unique-sheaf-sections` | ex | Check the sheaf axioms on the empty topological space. | ai-generated | not-applicable |

---

## AV-10. Sheaf operations, exactness, ringed spaces, and module pullback

`requires`: `AV-9`, tensor/Hom and exact-sequence interfaces from algebra and
homological algebra. Pair sources: Stacks Project, *Sheaves on Spaces*
§§6.21--6.33 (tags 008C--00AK) and *Modules on Sites* §§18.2--18.12;
Vakil Ch. 3 §§3.5--3.7, pp. 72--80 and Ch. 17 §§17.1--17.3,
pp. 343--349; Gao--Zhang Ch. 2 §§2.3--2.5, pp. 17--19; Milne AG10 §a,
pp. 2--7.

### Proposed A-page inventory (30 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-direct-image-sheaf` | def | For continuous $f:X\to Y$, define $(f_*\mathcal F)(V)=\mathcal F(f^{-1}V)$. | literature-derived | not-applicable |
| `lem-direct-image-is-sheaf` | lem | Prove $f_*$ preserves sheaves and algebraic structures. | literature-derived | ai-altered |
| `def-inverse-image-presheaf-and-sheaf` | def | Define $f^{-1}\mathcal G$ as the sheafification of the neighbourhood-colimit presheaf. | literature-derived | not-applicable |
| `thm-inverse-direct-image-adjunction` | thm | Prove $\operatorname{Hom}(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}(\mathcal G,f_*\mathcal F)$ naturally. | literature-derived | ai-altered |
| `lem-stalk-inverse-image-sheaf` | lem | Identify $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$. | literature-derived | ai-altered |
| `def-restriction-sheaf-open-subspace` | def | Define $\mathcal F\!\restriction_U=i^{-1}\mathcal F$ for an open immersion $i:U\hookrightarrow X$. | literature-derived | not-applicable |
| `def-extension-by-zero-abelian-sheaf` | def | Define $i_!\mathcal F$ for an open immersion, with support closed in the test open; separate it from $i_*$. | literature-derived | not-applicable |
| `thm-extension-by-zero-adjunction-exactness` | thm | Prove $i_!\dashv i^{-1}$ and exactness for abelian sheaves. | literature-derived | ai-altered |
| `def-skyscraper-sheaf-abelian-group` | def | Define $i_{x*}A$ at a point and specify sections depending on whether the open contains $x$. | literature-derived | not-applicable |
| `def-kernel-cokernel-image-sheaves` | def | Define kernels objectwise, and cokernels/images by sheafifying the presheaf constructions. | literature-derived | not-applicable |
| `thm-abelian-sheaves-form-abelian-category` | thm | Verify zero object, biproducts, kernels, cokernels, and image/coimage agreement. | literature-derived | ai-altered |
| `def-exact-sequence-sheaves` | def | Define exactness in the abelian category of sheaves. | literature-derived | not-applicable |
| `thm-exactness-of-sheaves-stalkwise` | thm | Prove a sequence of abelian sheaves is exact iff it is exact on every stalk. | literature-derived | ai-altered |
| `lem-global-sections-left-exact` | lem | Prove $\Gamma(X,-)$ preserves kernels but need not preserve epimorphisms. | literature-derived | ai-altered |
| `def-sheaf-tensor-product` | def | Define $\mathcal F\otimes_{\mathcal O}\mathcal G$ by sheafifying the objectwise tensor presheaf. | literature-derived | not-applicable |
| `lem-stalk-tensor-product` | lem | Prove $(\mathcal F\otimes_{\mathcal O}\mathcal G)_x\cong\mathcal F_x\otimes_{\mathcal O_x}\mathcal G_x$. | literature-derived | ai-altered |
| `def-sheaf-hom` | def | Define $\mathcal Hom_{\mathcal O}(\mathcal F,\mathcal G)$ by morphisms on restrictions. | literature-derived | not-applicable |
| `def-ringed-space` | def | Define $(X,\mathcal O_X)$ with a sheaf of rings. | literature-derived | not-applicable |
| `def-morphism-ringed-spaces` | def | Define $(f,f^\#)$ with $f^\#: \mathcal O_Y\to f_*\mathcal O_X$, including composition. | literature-derived | not-applicable |
| `def-locally-ringed-space` | def | Require every stalk $\mathcal O_{X,x}$ to be local. | literature-derived | not-applicable |
| `def-morphism-locally-ringed-spaces` | def | Require the induced stalk maps to be local homomorphisms. | literature-derived | not-applicable |
| `lem-local-homomorphism-residue-field-map` | lem | A local stalk map induces $\kappa(f(x))\to\kappa(x)$; later defines geometric fibres and tangent maps. | literature-derived | ai-altered |
| `def-module-on-ringed-space` | def | Define an $\mathcal O_X$-module and its morphisms. | literature-derived | not-applicable |
| `def-pullback-module-ringed-spaces` | def | Define $f^*\mathcal G=f^{-1}\mathcal G\otimes_{f^{-1}\mathcal O_Y}\mathcal O_X$. | literature-derived | not-applicable |
| `thm-pullback-pushforward-module-adjunction` | thm | Prove $f^*$ is left adjoint to $f_*$ on modules with the correct scalar structures. | literature-derived | ai-altered |
| `lem-pullback-modules-right-exact` | lem | Deduce right exactness of $f^*$ and isolate flatness as the condition for exactness. | literature-derived | ai-altered |
| `def-gluing-datum-sheaves` | def | Define sheaves on an open cover with cocycle-compatible overlap isomorphisms. | literature-derived | not-applicable |
| `thm-gluing-sheaves` | thm | Construct and uniquely characterize the sheaf glued from a gluing datum. | literature-derived | ai-altered |
| `thm-gluing-ringed-and-locally-ringed-spaces` | thm | Glue spaces and structure sheaves from compatible open pieces and prove localness of stalks. | literature-derived | ai-altered |
| `rem-inverse-image-versus-pullback` | rem | Fix the distinction between $f^{-1}$ on sheaves and $f^*$ on modules. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-direct-image-open-immersion` | ex | Compute $i_*\mathcal F(V)=\mathcal F(V\cap U)$ for an open immersion. | literature-derived | not-applicable |
| `cex-extension-by-zero-differs-direct-image` | cex | On a punctured interval, exhibit a section in $i_*\mathcal F$ not in $i_!\mathcal F$. | literature-derived | not-applicable |
| `ex-skyscraper-sheaf-exact-sequence` | ex | Compute stalks of a short exact sequence supported at one point. | ai-generated | not-applicable |
| `cex-global-sections-not-right-exact` | cex | Give a standard sheaf epimorphism whose map on global sections is not surjective; motivates cohomology. | literature-derived | not-applicable |
| `ex-ringed-space-continuous-functions` | ex | Treat a topological space with continuous real functions as a ringed space and compute stalks. | literature-derived | not-applicable |
| `cex-ringed-space-map-not-locally-ringed` | cex | Give a stalk map that is not local, showing why the extra morphism condition matters. | literature-derived | not-applicable |
| `ex-pullback-free-module` | ex | Verify $f^*(\mathcal O_Y^n)\cong\mathcal O_X^n$, including $n=0$. | ai-generated | not-applicable |
| `ex-glue-line-bundle-transition-functions` | ex | Glue rank-one free modules from units $g_{ij}$ satisfying the cocycle law. | literature-derived | not-applicable |
| `cex-presheaf-cokernel-needs-sheafification` | cex | Reuse a local-lift example to show objectwise cokernels can fail sheafhood. | literature-derived | not-applicable |

---

## AV-11. Affine schemes and the structure sheaf

`requires`: `AV-9`, `AV-10`, `zariski-topology-on-prime-spectra`, and
localization. Pair sources: Vakil Ch. 4 §§4.1--4.7, pp. 85--110 and Ch. 5
§§5.1--5.2, pp. 111--119; Gao--Zhang Ch. 3 §§3.1--3.8, pp. 20--38;
Milne AG10 §§a--b, pp. 2--10; Stacks Project, *Schemes* §§26.2--26.6
(tags 01HA--01I1).

### Proposed A-page inventory (28 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-affine-scheme-spectrum` | def | Define the underlying space of $\operatorname{Spec}A$, citing its topology and basic opens from the commutative-algebra page; allow $A=0$. | literature-derived | not-applicable |
| `def-structure-presheaf-on-basic-opens` | def | Put $\mathcal O(D(f))=A_f$ with the canonical restriction maps. | literature-derived | not-applicable |
| `lem-structure-presheaf-basic-open-well-defined` | lem | Show $D(f)=D(g)$ yields canonically compatible localizations and restrictions independent of representatives. | literature-derived | ai-altered |
| `thm-structure-sheaf-affine-scheme` | thm | Extend the basic-open data to a sheaf and prove the sheaf condition by a finite basic refinement and localization argument. | literature-derived | ai-altered |
| `thm-sections-basic-open-affine-scheme` | thm | Prove $\Gamma(D(f),\mathcal O)=A_f$, including nilpotents and $D(f)=\varnothing$. | literature-derived | ai-altered |
| `thm-stalk-structure-sheaf-prime-localization` | thm | Identify $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$ and its maximal ideal. | literature-derived | ai-altered |
| `cor-spectrum-with-structure-sheaf-locally-ringed` | cor | Deduce $\operatorname{Spec}A$ is a locally ringed space. | literature-derived | ai-altered |
| `def-residue-field-scheme-point` | def | Define $\kappa(\mathfrak p)=\operatorname{Frac}(A/\mathfrak p)$ through the local-ring quotient. | literature-derived | not-applicable |
| `thm-global-sections-affine-scheme` | thm | Prove $A\cong\Gamma(\operatorname{Spec}A,\mathcal O)$, including the zero ring. | literature-derived | ai-altered |
| `lem-spectrum-localization-open-immersion` | lem | Show $\operatorname{Spec}A_f\to\operatorname{Spec}A$ identifies with $D(f)$ as a locally ringed space. | literature-derived | ai-altered |
| `def-affine-scheme` | def | Define an affine scheme as a locally ringed space isomorphic to $\operatorname{Spec}A$. | literature-derived | not-applicable |
| `def-morphism-affine-schemes-from-ring-map` | def | Construct $\operatorname{Spec}B\to\operatorname{Spec}A$ from $A\to B$, including the sheaf map on basic opens. | literature-derived | not-applicable |
| `lem-spectrum-map-stalk-homomorphisms-local` | lem | Verify the induced maps $A_{\mathfrak p}\to B_{\mathfrak q}$ are local when $\mathfrak q$ lies over $\mathfrak p$. | literature-derived | ai-altered |
| `thm-affine-scheme-ring-anti-equivalence` | thm | Prove $\operatorname{Hom}_{\mathrm{Sch}}(\operatorname{Spec}B,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{Ring}}(A,B)$. | literature-derived | ai-altered |
| `cor-affine-scheme-isomorphism-ring-isomorphism` | cor | Characterize affine-scheme isomorphisms by coordinate-ring isomorphisms. | literature-derived | ai-altered |
| `def-closed-point-scheme` | def | Define a closed point topologically and identify closed points of $\operatorname{Spec}A$ with maximal ideals. | literature-derived | not-applicable |
| `lem-classical-points-inside-affine-scheme` | lem | For reduced finite-type $k$-algebras over algebraically closed $k$, identify closed scheme points and classical points via Nullstellensatz. | literature-derived | ai-altered |
| `def-generic-point-irreducible-closed-subset` | def | Define a generic point and show $\mathfrak p$ is generic for $V(\mathfrak p)$. | literature-derived | not-applicable |
| `thm-spectrum-sober` | thm | Prove every irreducible closed subset of an affine scheme has a unique generic point. | literature-derived | ai-altered |
| `def-reduced-affine-scheme` | def | Define reducedness by reduced local rings/equivalently a reduced coordinate ring. | literature-derived | not-applicable |
| `def-integral-affine-scheme` | def | Define integral as nonempty, reduced, and irreducible; identify the affine criterion $A$ domain. | literature-derived | not-applicable |
| `def-nonreduced-infinitesimal-thickening-affine` | def | Name nilpotent closed subschemes with the same underlying space; gives the scheme feature absent classically. | literature-derived | not-applicable |
| `def-functor-of-points-affine-scheme` | def | Define $h_X(R)=\operatorname{Hom}(\operatorname{Spec}R,X)$ and identify $h_{\operatorname{Spec}A}(R)$. | literature-derived | not-applicable |
| `thm-affine-schemes-determined-by-functor-of-points` | thm | Apply Yoneda to show the functor of points determines an affine scheme up to unique isomorphism. | literature-derived | ai-altered |
| `def-dual-numbers-scheme` | def | Define $\operatorname{Spec}k[\epsilon]/(\epsilon^2)$ as the first infinitesimal test scheme. | literature-derived | not-applicable |
| `lem-basic-opens-quasi-compact` | lem | Prove every $D(f)$ is quasi-compact, using finite generation of the unit ideal. | literature-derived | ai-altered |
| `cor-affine-scheme-quasi-compact` | cor | Deduce every affine scheme is quasi-compact. | literature-derived | ai-altered |
| `rem-spec-contravariance-and-points` | rem | Warn that a ring map reverses arrows and a scheme point carries a residue field, not merely coordinates. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-spectrum-field-one-point` | ex | Compute the one-point locally ringed space $\operatorname{Spec}k$. | literature-derived | not-applicable |
| `ex-spectrum-zero-ring-empty` | ex | Verify $\operatorname{Spec}0=\varnothing$ and its unique sheaf data. | literature-derived | not-applicable |
| `ex-spectrum-integers-generic-and-closed-points` | ex | Display $(0)$ and the prime closed points of $\operatorname{Spec}\mathbf Z$. | literature-derived | not-applicable |
| `ex-dual-numbers-one-point-nonreduced` | ex | Compute topology, local ring, residue field, and nilpotent of the dual-number scheme. | literature-derived | not-applicable |
| `ex-spectrum-product-ring-disjoint-union` | ex | Prove $\operatorname{Spec}(A\times B)\cong\operatorname{Spec}A\sqcup\operatorname{Spec}B$. | literature-derived | not-applicable |
| `ex-basic-open-affine-line` | ex | Compute $D(t)$ and its Laurent-polynomial coordinate ring. | literature-derived | not-applicable |
| `cex-scheme-not-determined-by-underlying-space` | cex | Compare $\operatorname{Spec}k$ and $\operatorname{Spec}k[\epsilon]/(\epsilon^2)$. | literature-derived | not-applicable |
| `ex-functor-points-affine-line` | ex | Identify $\mathbf A^1(R)$ with the underlying set of $R$, naturally in $R$. | literature-derived | not-applicable |
| `cex-nonclosed-scheme-point-no-k-valued-coordinate` | cex | Use the generic point of $\mathbf A^1_k$ to show not every point is a $k$-point. | literature-derived | not-applicable |

---

## AV-12. Schemes, subschemes, and morphisms locally of finite type

`requires`: `AV-10`, `AV-11`. Pair sources: Vakil Ch. 5 §§5.3--5.5,
pp. 119--130, Ch. 6 §§6.1--6.5, pp. 131--145, and Ch. 7 §§7.1--7.4,
pp. 149--161; Gao--Zhang Ch. 4 §§4.1--4.5, pp. 39--48; Milne AG10
§§c--d and §p, pp. 10--15 and 36--39; Stacks Project, *Schemes*
§§26.7--26.13 and §§26.20--26.24.

### Proposed A-page inventory (29 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-scheme` | def | Define a scheme as a locally ringed space admitting an affine open cover, with the empty scheme allowed. | literature-derived | not-applicable |
| `def-affine-open-subscheme` | def | Define an affine open subscheme and distinguish its restricted structure sheaf from a bare open subspace. | literature-derived | not-applicable |
| `lem-intersection-affine-opens-covered-principal-opens` | lem | Cover the intersection of two affine opens by opens principal in each; drives independence of local definitions. | literature-derived | ai-altered |
| `thm-gluing-affine-schemes` | thm | Glue affine schemes along cocycle-compatible open isomorphisms and prove uniqueness. | literature-derived | ai-altered |
| `def-morphism-of-schemes` | def | Define a morphism as a morphism of locally ringed spaces. | literature-derived | not-applicable |
| `thm-morphisms-into-affine-scheme-global-sections` | thm | Prove $\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}(A,\Gamma(X,\mathcal O_X))$. | literature-derived | ai-altered |
| `lem-morphism-schemes-local-on-source-target` | lem | Show morphisms can be constructed and compared on open covers with compatibility. | literature-derived | ai-altered |
| `def-scheme-over-base` | def | Define an $S$-scheme and an $S$-morphism; set $\mathbf A^n_S$ notation. | literature-derived | not-applicable |
| `def-open-immersion-schemes` | def | Define open immersions as isomorphisms onto open subschemes. | literature-derived | not-applicable |
| `lem-open-immersion-monomorphism` | lem | Prove open immersions are monomorphisms and stable under composition. | literature-derived | ai-altered |
| `def-quasi-compact-and-quasi-separated-scheme` | def | Define quasi-compactness and quasi-separatedness, including the affine-intersection criterion. | literature-derived | not-applicable |
| `thm-affine-schemes-quasi-separated` | thm | Prove intersections of quasi-compact opens in an affine scheme are quasi-compact. | literature-derived | ai-altered |
| `def-ideal-sheaf` | def | Define a sheaf of ideals $\mathcal I\subseteq\mathcal O_X$. | literature-derived | not-applicable |
| `def-closed-immersion-schemes` | def | Define a closed immersion by a closed topological embedding and surjection of structure sheaves. | literature-derived | not-applicable |
| `thm-affine-closed-immersions-quotient-rings` | thm | Characterize closed immersions into $\operatorname{Spec}A$ as $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$. | literature-derived | ai-altered |
| `thm-quasi-coherent-ideal-closed-subscheme-correspondence` | thm | State the correspondence between quasi-coherent ideal sheaves and closed subschemes, with proof completed after `AV-18`. | literature-derived | not-supplied |
| `def-reduction-of-scheme` | def | Define $X_{\mathrm{red}}$ by the nilradical sheaf and the same underlying topological space. | literature-derived | not-applicable |
| `thm-reduction-universal-property` | thm | Any morphism from a reduced scheme to $X$ factors uniquely through $X_{\mathrm{red}}$. | literature-derived | ai-altered |
| `def-irreducible-component-scheme` | def | Define irreducible components topologically and their reduced induced subschemes. | literature-derived | not-applicable |
| `def-integral-scheme` | def | Define integral schemes and show the equivalent affine-domain criterion. | literature-derived | ai-altered |
| `def-locally-noetherian-and-noetherian-scheme` | def | Define locally Noetherian and Noetherian schemes without re-proving Noetherian ring theory. | literature-derived | not-applicable |
| `def-locally-finite-type-and-finite-type-morphism` | def | Define locally of finite type and finite type by affine presentations plus quasi-compactness. | literature-derived | not-applicable |
| `def-locally-finite-presentation-morphism` | def | Define locally of finite presentation, preserving the distinction over non-Noetherian bases. | literature-derived | not-applicable |
| `lem-finite-type-local-on-source-and-target` | lem | Prove finite type is affine-local on the target and local on a finite affine source cover. | literature-derived | ai-altered |
| `def-variety-scheme-theoretic` | def | Define a $k$-variety as integral, separated, finite type over $k$; separatedness is supplied at `AV-14`. | literature-derived | not-applicable |
| `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` | thm | Over algebraically closed $k$, compare classical varieties with integral separated finite-type $k$-schemes through closed points and affine charts. | literature-derived | ai-altered |
| `def-scheme-theoretic-image` | def | Define the smallest closed subscheme through which a quasi-compact morphism factors, when it exists. | literature-derived | not-applicable |
| `thm-scheme-theoretic-image-quasi-compact-morphism` | thm | Construct the image ideal as the kernel of $\mathcal O_Y\to f_*\mathcal O_X$ under quasi-compact/quasi-separated hypotheses. | literature-derived | ai-altered |
| `rem-topological-versus-scheme-theoretic-subspace` | rem | Record that one closed subset supports many closed subscheme structures. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-projective-line-by-gluing-affines` | ex | Glue $\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[u]$ along $u=t^{-1}$. | literature-derived | not-applicable |
| `ex-doubled-origin-nonseparated-scheme` | ex | Glue two affine lines along their punctured opens; stores the standard nonseparated test case for `AV-14`. | literature-derived | not-applicable |
| `ex-closed-subscheme-double-origin-point` | ex | Compare $(t)$ and $(t^2)$ as closed subschemes of $\mathbf A^1$. | literature-derived | not-applicable |
| `ex-reduction-dual-numbers` | ex | Compute the reduction of the dual-number point. | literature-derived | not-applicable |
| `cex-closed-subset-does-not-determine-closed-subscheme` | cex | Exhibit infinitely many thickenings $V(t^n)$ with one support. | literature-derived | not-applicable |
| `ex-affine-n-space-over-arbitrary-base` | ex | Compute $\mathbf A^n_S$ on affine base charts and include $n=0$. | literature-derived | not-applicable |
| `cex-locally-finite-type-not-finite-type` | cex | Use an infinite disjoint union of affine lines over a field. | literature-derived | not-applicable |
| `cex-finite-type-not-finite-presentation-nonnoetherian-base` | cex | Give a quotient by a non-finitely-generated ideal. | literature-derived | not-applicable |
| `ex-scheme-theoretic-image-dense-open-immersion` | ex | Compute that a dense open immersion into an integral scheme has full scheme-theoretic image. | literature-derived | not-applicable |

---

## AV-13. Fibre products, base change, and scheme-theoretic fibres

`requires`: `AV-11`, `AV-12`, tensor products. Pair sources: Vakil Ch. 10
§§10.1--10.4, pp. 207--222; Stacks Project, *Schemes* §§26.17--26.19 and
*Morphisms of Schemes* §§29.15--29.20; Tong Ch. 2 §2.5, pp. 62--66;
Artin Ch. 5 §5.6, pp. 111--114.

### Proposed A-page inventory (25 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-fibre-product-schemes-universal-property` | def | Define $X\times_S Y$ by its universal property and commuting square. | literature-derived | not-applicable |
| `thm-affine-fibre-product-tensor-ring` | thm | Construct $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C)$. | literature-derived | ai-altered |
| `lem-affine-fibre-product-projections-stalk-maps` | lem | Describe projection maps and induced residue-field homomorphisms. | literature-derived | ai-altered |
| `thm-fibre-products-of-schemes-exist` | thm | Glue affine fibre products and verify the universal property globally. | literature-derived | ai-altered |
| `cor-product-schemes-over-base-exists` | cor | Define $X\times_S Y$ and the terminal $S$-scheme $S$, including products with $\varnothing$. | literature-derived | ai-altered |
| `lem-fibre-product-unique-canonical-isomorphism` | lem | Prove uniqueness from the universal property. | literature-derived | ai-altered |
| `lem-fibre-product-associativity-and-symmetry` | lem | Establish the canonical associativity, symmetry, and unit isomorphisms used without equality abuse. | literature-derived | ai-altered |
| `def-base-change-morphism-schemes` | def | Define the pullback $f_{S'}:X\times_SS'\to S'$ of $f:X\to S$. | literature-derived | not-applicable |
| `lem-base-change-composition` | lem | Prove iterated base change agrees canonically with base change along the composite. | literature-derived | ai-altered |
| `def-scheme-theoretic-fibre` | def | Define $X_s=X\times_S\operatorname{Spec}\kappa(s)$, including empty fibres. | literature-derived | not-applicable |
| `thm-affine-fibre-coordinate-ring` | thm | For $A\to B$ and $s\leftrightarrow\mathfrak p$, compute $X_s=\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$. | literature-derived | ai-altered |
| `lem-points-of-fibre-primes-over-point` | lem | Identify points of $X_s$ with primes of $B$ lying over $\mathfrak p$ plus residue-field embeddings. | literature-derived | ai-altered |
| `def-geometric-fibre` | def | Define $X_{\bar s}=X_s\times_{\kappa(s)}\operatorname{Spec}\overline{\kappa(s)}$ and state independence up to noncanonical isomorphism. | literature-derived | not-applicable |
| `def-geometrically-reduced-integral-connected-fibre` | def | Define geometric fibre properties after algebraic closure, distinguishing them from ordinary fibre properties. | literature-derived | not-applicable |
| `lem-base-change-open-closed-immersions` | lem | Prove open and closed immersions are stable under arbitrary base change. | literature-derived | ai-altered |
| `lem-base-change-locally-finite-type-presentation` | lem | Prove locally finite type and locally finite presentation are stable under base change. | literature-derived | ai-altered |
| `lem-base-change-affine-morphisms` | lem | Prove affine morphisms remain affine after base change. | literature-derived | ai-altered |
| `def-diagonal-morphism-scheme` | def | Define $\Delta_{X/S}:X\to X\times_SX$ from the universal property. | literature-derived | not-applicable |
| `lem-diagonal-base-change-identification` | lem | Identify the diagonal after base change with the base change of the diagonal; drives `AV-14`. | literature-derived | ai-altered |
| `def-graph-morphism-over-base` | def | Define $\Gamma_f:X\to X\times_SY$ for an $S$-morphism $f:X\to Y$. | literature-derived | not-applicable |
| `lem-graph-as-pullback-diagonal` | lem | Express the graph as the pullback of $\Delta_{Y/S}$; later proves closed graphs for separated targets. | literature-derived | ai-altered |
| `thm-classical-product-agrees-scheme-product` | thm | For classical varieties over algebraically closed $k$, identify the reduced classical product with the scheme fibre product when geometrically integral. | literature-derived | ai-altered |
| `lem-base-extension-field-coordinate-ring` | lem | Compute $X_K$ for a $k$-scheme and field extension $K/k$ on affine charts. | literature-derived | ai-altered |
| `rem-properties-can-change-after-field-extension` | rem | Record that irreducibility and reducedness may fail after scalar extension, motivating geometric adjectives. | literature-derived | not-applicable |
| `rem-fibre-is-scheme-not-point-set` | rem | Require nilpotents and residue fields to be retained in fibres; prevents replacing tensor products by set inverse images. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-fibre-family-xy-equals-t` | ex | Compute general and special scheme fibres of $xy=t$, including reducibility at $0$. | literature-derived | not-applicable |
| `ex-nonreduced-fibre-x-squared-equals-t` | ex | The special fibre of $x^2=t$ is nonreduced in suitable characteristic-independent form. | literature-derived | not-applicable |
| `ex-base-change-real-conic-to-complex` | ex | Show a real scheme with no real points can have nonempty complex base change. | literature-derived | not-applicable |
| `cex-domain-tensor-algebraic-closure-reducible` | cex | Exhibit an integral $k$-scheme that becomes reducible after extending scalars. | literature-derived | not-applicable |
| `ex-product-affine-lines-plane` | ex | Verify $\mathbf A^1_k\times_k\mathbf A^1_k\cong\mathbf A^2_k$ functorially. | literature-derived | not-applicable |
| `ex-fibre-closed-immersion` | ex | Compute the fibre of $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ at a prime. | ai-generated | not-applicable |
| `ex-graph-polynomial-map-closed-subscheme` | ex | Compute the graph ideal of a polynomial map as a fibre-product pullback. | literature-derived | not-applicable |
| `cex-set-theoretic-fibre-loses-multiplicity` | cex | Compare the one-point set fibre of $x^2=t$ at zero with its dual-number coordinate ring. | literature-derived | not-applicable |
| `ex-empty-fibre-tensor-zero-ring` | ex | Verify an empty fibre by obtaining the zero tensor-product ring. | ai-generated | not-applicable |

---

## AV-14. Diagonals, separated morphisms, and valuative uniqueness

`requires`: `AV-12`, `AV-13`, valuation rings by citation from
`valuation-rings-and-discrete-valuation-rings`. Pair sources: Vakil Ch. 11
§§11.1--11.2, pp. 231--239; Tong Ch. 2 §2.6, pp. 67--71; Stacks Project,
*Schemes* §§26.21--26.23 and *Morphisms of Schemes* §§29.2--29.10,
§29.43 (no fixed pagination); Milne AG10 §l, pp. 29--33.

### Proposed A-page inventory (23 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-separated-morphism-schemes` | def | Define $f:X\to S$ as separated when $\Delta_{X/S}$ is a closed immersion. | literature-derived | not-applicable |
| `def-separated-scheme-over-base` | def | Define an $S$-scheme separated over $S$ and an absolute separated scheme over $\operatorname{Spec}\mathbf Z$. | literature-derived | not-applicable |
| `lem-diagonal-is-immersion` | lem | Prove every scheme diagonal is an immersion and identify its image set-theoretically. | literature-derived | ai-altered |
| `lem-affine-morphism-separated` | lem | Show an affine morphism is separated by expressing its diagonal ring map as multiplication $B\otimes_A B\to B$. | literature-derived | ai-altered |
| `cor-affine-schemes-separated` | cor | Deduce every affine scheme is separated over its base affine scheme and over $\operatorname{Spec}\mathbf Z$. | literature-derived | ai-altered |
| `lem-separated-stable-under-base-change` | lem | Prove separatedness is stable under arbitrary base change via the diagonal pullback. | literature-derived | ai-altered |
| `lem-separated-stable-under-composition` | lem | Prove a composite of separated morphisms is separated. | literature-derived | ai-altered |
| `lem-separated-local-on-base` | lem | Show separatedness can be checked on an open cover of the base. | literature-derived | ai-altered |
| `lem-monomorphism-diagonal-isomorphism` | lem | Characterize monomorphisms of schemes by an isomorphic diagonal. | literature-derived | ai-altered |
| `lem-graph-closed-separated-target` | lem | If $Y\to S$ is separated, prove the graph of every $S$-morphism $X\to Y$ is a closed immersion. | literature-derived | ai-altered |
| `thm-morphisms-agree-closed-equalizer-separated-target` | thm | For $Y/S$ separated, show the equalizer of two $S$-morphisms $X\rightrightarrows Y$ is closed in $X$. | literature-derived | ai-altered |
| `cor-morphisms-equal-on-dense-open-reduced-source` | cor | If $X$ is reduced and two maps to a separated target agree on a schematically dense open, they agree everywhere. | literature-derived | ai-altered |
| `def-valuative-diagram-separatedness` | def | State the lifting diagram for a valuation ring $R$ with fraction field $K$, distinguishing uniqueness from existence. | literature-derived | not-applicable |
| `thm-valuative-criterion-separatedness` | thm | For a quasi-separated finite-type morphism under the standard hypotheses, characterize separatedness by uniqueness of valuation-ring lifts. | literature-derived | ai-altered |
| `lem-diagonal-quasi-compact-iff-quasi-separated` | lem | Characterize quasi-separated morphisms by quasi-compact diagonal. | literature-derived | ai-altered |
| `def-locally-closed-immersion` | def | Define an immersion as closed followed by open and note independence of the factorization. | literature-derived | not-applicable |
| `thm-immersion-monomorphism-locally-finite-type` | thm | Show immersions are monomorphisms locally of finite type; prepares local structure results. | literature-derived | ai-altered |
| `lem-separatedness-of-open-and-closed-immersions` | lem | Prove open and closed immersions are separated. | literature-derived | ai-altered |
| `thm-separatedness-gluing-overlap-criterion` | thm | For a scheme glued from affine opens, translate separatedness into closedness of overlap diagonals and an affine intersection criterion. | literature-derived | ai-altered |
| `cor-doubled-origin-not-separated` | cor | Apply the valuative or diagonal criterion to the doubled-origin scheme. | literature-derived | ai-altered |
| `lem-projective-space-diagonal-closed` | lem | Cut out $\Delta_{\mathbf P^n_S/S}$ by $x_i y_j-x_j y_i$ and deduce projective space is separated. | literature-derived | ai-altered |
| `rem-hausdorff-analogy-limited` | rem | Explain that separatedness is the algebro-geometric diagonal condition, not Hausdorffness of the Zariski topology. | literature-derived | not-applicable |
| `rem-valuative-criterion-quantifies-all-valuation-rings` | rem | Require all relevant valuation rings and field extensions, not only DVRs, unless a Noetherian reduction theorem is explicitly cited. | literature-derived | not-applicable |

### Proposed B-page inventory (8 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-affine-line-diagonal-ideal` | ex | Compute the diagonal of $\mathbf A^1_S$ as $(x-y)$. | literature-derived | not-applicable |
| `ex-projective-line-diagonal-bihomogeneous-equation` | ex | Compute $x_0y_1-x_1y_0=0$. | literature-derived | not-applicable |
| `cex-doubled-origin-diagonal-not-closed` | cex | Exhibit the missing limit points of the diagonal in the doubled-origin product. | literature-derived | not-applicable |
| `cex-doubled-origin-valuative-nonuniqueness` | cex | Produce two extensions of the same generic-point map from a DVR. | literature-derived | not-applicable |
| `ex-graph-closed-polynomial-map-scheme` | ex | Realize a polynomial graph as a closed immersion via equations. | literature-derived | not-applicable |
| `cex-zariski-space-nonhausdorff-yet-separated-scheme` | cex | $\mathbf A^1_k$ is separated although its point space is not Hausdorff for infinite $k$. | literature-derived | not-applicable |
| `ex-open-immersion-valuative-uniqueness-not-existence` | ex | Verify uniqueness of lifts for an open immersion while existence can fail. | literature-derived | not-applicable |
| `cex-dvr-only-test-unsafe-without-hypotheses` | cex | Record a precise non-Noetherian warning example from the literature rather than licensing a DVR-only shortcut. | literature-derived | not-applicable |

---

## AV-15. Finite, proper, and projective morphisms

`requires`: `AV-13`, `AV-14`, finite-module/integral-extension interfaces,
and valuation rings by citation. Pair sources: Vakil Ch. 8 §§8.1--8.4,
pp. 171--189 and Ch. 11 §§11.2--11.3, pp. 236--246; Milne Ch. 7
§§a--h, pp. 161--175 and Ch. 8 §§d--f, pp. 185--193; Tong Ch. 2 §2.6,
pp. 67--71; Stacks Project, *Morphisms of Schemes* §§29.11, 29.42--29.45.

### Proposed A-page inventory (28 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-affine-morphism-schemes` | def | Define an affine morphism by affine inverse images of affine opens. | literature-derived | not-applicable |
| `thm-affine-morphism-relative-spec-characterization` | thm | Characterize affine morphisms as relative spectra of quasi-coherent algebras, with proof completed after `AV-18`. | literature-derived | not-supplied |
| `def-finite-morphism-schemes` | def | Define finite morphisms affine-locally by finite modules. | literature-derived | not-applicable |
| `lem-finite-morphism-affine` | lem | Prove every finite morphism is affine. | literature-derived | ai-altered |
| `lem-finite-stable-base-change-composition` | lem | Prove finiteness is stable under base change and composition. | literature-derived | ai-altered |
| `thm-finite-morphism-integral-closed` | thm | Show a finite morphism is universally closed using the cited integral-extension theorem. | literature-derived | ai-altered |
| `cor-finite-morphism-proper` | cor | Deduce finite morphisms are proper after properness is defined. | literature-derived | ai-altered |
| `def-universally-closed-morphism` | def | Define universally closed by closedness after every base change. | literature-derived | not-applicable |
| `def-proper-morphism` | def | Define proper as separated, finite type, and universally closed. | literature-derived | not-applicable |
| `lem-proper-stable-base-change` | lem | Prove properness is stable under arbitrary base change. | literature-derived | ai-altered |
| `lem-proper-stable-composition` | lem | Prove the composite of proper morphisms is proper. | literature-derived | ai-altered |
| `lem-proper-local-on-base` | lem | Show properness can be checked on an open base cover. | literature-derived | ai-altered |
| `thm-proper-morphism-closed-image` | thm | Prove a proper morphism is closed and its image is a closed subset. | literature-derived | ai-altered |
| `thm-valuative-criterion-properness` | thm | Under the standard finite-type/quasi-separated hypotheses, characterize properness by existence and uniqueness of valuation-ring lifts. | literature-derived | ai-altered |
| `def-complete-variety` | def | Define a variety complete when $X\to\operatorname{Spec}k$ is proper; retire the ambiguous word compact. | literature-derived | not-applicable |
| `thm-global-functions-proper-integral-variety` | thm | For proper geometrically integral $X/k$, show $\Gamma(X,\mathcal O_X)$ is a finite extension of $k$, hence $k$ over algebraically closed $k$. | literature-derived | ai-altered |
| `cor-no-nonconstant-map-proper-variety-to-affine-line` | cor | Deduce every morphism from a proper integral $k$-variety to $\mathbf A^1_k$ is constant. | literature-derived | ai-altered |
| `def-projective-morphism-pre-proj` | def | Define projective as factoring through a closed immersion into $\mathbf P^n_S$ followed by projection. | literature-derived | not-applicable |
| `def-quasi-projective-morphism` | def | Define quasi-projective via a quasi-compact immersion into projective space. | literature-derived | not-applicable |
| `thm-projective-space-proper-over-base` | thm | Prove $\mathbf P^n_S\to S$ is proper using the valuative criterion or homogeneous-coordinate patching. | literature-derived | ai-altered |
| `thm-projective-morphism-proper` | thm | Deduce projective morphisms are proper from closed immersions and projective space. | literature-derived | ai-altered |
| `lem-closed-immersion-proper` | lem | Prove closed immersions are proper, including finite type. | literature-derived | ai-altered |
| `thm-proper-quasi-finite-is-finite` | thm | Show a proper quasi-finite morphism is finite; isolates a major use of Zariski's Main Theorem. | literature-derived | ai-altered |
| `cor-proper-birational-normal-curve-isomorphism-off-finite-set` | cor | For normal curves, control a proper birational morphism away from finitely many points. | literature-derived | ai-altered |
| `thm-properness-descent-fpqc` | thm | State descent of properness under fpqc base change, using flat descent as an application rather than rebuilding it. | literature-derived | not-supplied |
| `lem-proper-fibres-proper` | lem | Every scheme-theoretic fibre of a proper morphism is proper over its residue field. | literature-derived | ai-altered |
| `rem-projective-versus-proper` | rem | State that projective implies proper, while the converse needs extra hypotheses and is false in general. | literature-derived | not-applicable |
| `rem-proper-not-topologically-compact-over-arbitrary-field` | rem | Separate scheme properness from compactness of a chosen set of rational points. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-finite-power-map-affine-line` | ex | Analyze $t\mapsto t^n$ as a finite morphism with characteristic caveat. | literature-derived | not-applicable |
| `ex-closed-immersion-finite-proper` | ex | Verify a quotient-ring closed immersion is finite and proper. | literature-derived | not-applicable |
| `ex-projective-space-valuative-extension` | ex | Extend a $K$-point of $\mathbf P^n$ over a valuation ring by normalizing homogeneous coordinates. | literature-derived | not-applicable |
| `cex-affine-line-not-proper` | cex | Give a $K$-point of $\mathbf A^1$ with a pole that has no valuation-ring extension. | literature-derived | not-applicable |
| `cex-open-immersion-not-proper` | cex | Show a nonclosed open immersion fails universal closedness/existence. | literature-derived | not-applicable |
| `ex-proper-image-projective-variety` | ex | Project a closed incidence variety and use properness to prove its image closed. | literature-derived | not-applicable |
| `cex-proper-not-affine-positive-dimensional` | cex | A positive-dimensional proper integral variety cannot be affine over $k$ because global functions are too small. | literature-derived | not-applicable |
| `cex-proper-not-necessarily-projective` | cex | Record a standard complete nonprojective variety from the literature without making it load-bearing. | literature-derived | not-applicable |
| `ex-empty-morphism-proper-projective` | ex | Verify $\varnothing\to S$ is finite, proper, and projective under the adopted conventions. | ai-generated | not-applicable |

---

## AV-16. Kähler differentials, conormal sequences, and infinitesimal lifting

`requires`: `AV-10`--`AV-13`, module tensor/exactness, and the conormal
algebra interface. Pair sources: Vakil Ch. 23 §§23.1--23.5, pp. 473--499;
MIT 18.725 Lectures 18--20, consolidated-notes PDF pp. 42--48; Milne AG10
§g, pp. 20--21 and AG14, pp. 1--3; Stacks Project, *Morphisms of Schemes*
§§29.32--29.34 and *Modules of Differentials* §§10.131--10.134.

### Proposed A-page inventory (30 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-derivation-algebra` | def | Define an $A$-derivation $B\to M$ with the Leibniz rule and $A$ killed. | literature-derived | not-applicable |
| `def-kahler-differentials-algebra` | def | Define $(\Omega_{B/A},d)$ by its universal property. | literature-derived | not-applicable |
| `thm-kahler-differentials-existence-presentation` | thm | Construct $\Omega_{B/A}$ from the free module on symbols $db$ modulo additive, Leibniz, and base relations. | literature-derived | ai-altered |
| `cor-derivations-represented-by-differentials` | cor | Establish $\operatorname{Der}_A(B,M)\cong\operatorname{Hom}_B(\Omega_{B/A},M)$ naturally. | literature-derived | ai-altered |
| `lem-differentials-polynomial-algebra-free` | lem | Compute $\Omega_{A[x_1,\ldots,x_n]/A}$ as free on $dx_i$, including $n=0$. | literature-derived | ai-altered |
| `thm-conormal-exact-sequence-algebra` | thm | For $B=P/I$, prove $I/I^2\to\Omega_{P/A}\otimes_PB\to\Omega_{B/A}\to0$. | literature-derived | ai-altered |
| `cor-jacobian-presentation-differentials` | cor | Present $\Omega_{B/A}$ by the Jacobian matrix of chosen relations. | literature-derived | ai-altered |
| `thm-transitivity-exact-sequence-differentials` | thm | For $A\to B\to C$, prove $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\to\Omega_{C/B}\to0$. | literature-derived | ai-altered |
| `lem-differentials-localization` | lem | Prove $S^{-1}\Omega_{B/A}\cong\Omega_{S^{-1}B/A}$ with the appropriate base localization. | literature-derived | ai-altered |
| `lem-differentials-base-change` | lem | Under base change, identify $\Omega_{(B\otimes_AA')/A'}\cong\Omega_{B/A}\otimes_AA'$. | literature-derived | ai-altered |
| `def-sheaf-relative-differentials` | def | Glue affine differential modules to $\Omega_{X/S}$. | literature-derived | not-applicable |
| `thm-sheaf-differentials-universal-property` | thm | Represent $S$-derivations $\mathcal O_X\to\mathcal F$ by maps $\Omega_{X/S}\to\mathcal F$. | literature-derived | ai-altered |
| `lem-sheaf-differentials-affine-compatibility` | lem | On $X=\operatorname{Spec}B$, identify $\Omega_{X/S}$ with the sheaf associated to $\Omega_{B/A}$. | literature-derived | ai-altered |
| `thm-conormal-sequence-closed-immersion` | thm | For $X\hookrightarrow Y\to S$, prove $\mathcal I/\mathcal I^2\to i^*\Omega_{Y/S}\to\Omega_{X/S}\to0$. | literature-derived | ai-altered |
| `thm-transitivity-sequence-schemes` | thm | For $X\to Y\to S$, globalize the transitivity exact sequence. | literature-derived | ai-altered |
| `lem-differentials-commute-base-change-schemes` | lem | Prove $\Omega_{X_{S'}/S'}\cong g^*\Omega_{X/S}$. | literature-derived | ai-altered |
| `def-relative-cotangent-space` | def | Define $\Omega_{X/S}\otimes\kappa(x)$ and its dual relative tangent space. | literature-derived | not-applicable |
| `thm-cotangent-space-maximal-ideal-quotient` | thm | For a $k$-rational point, identify $\Omega_{X/k}\otimes k\cong\mathfrak m_x/\mathfrak m_x^2$. | literature-derived | ai-altered |
| `thm-tangent-vectors-dual-numbers` | thm | Complete the `AV-6` promise: based maps from dual numbers are naturally $\kappa(x)$-linear tangent vectors. | literature-derived | ai-altered |
| `lem-differential-of-morphism-via-cotangent-map` | lem | Construct $df:f^*\Omega_{Y/S}\to\Omega_{X/S}$ and recover tangent maps by duality. | literature-derived | ai-altered |
| `def-formally-unramified-morphism` | def | Define uniqueness of lifts across square-zero closed immersions. | literature-derived | not-applicable |
| `def-formally-smooth-morphism` | def | Define existence locally on the source of lifts across square-zero thickenings. | literature-derived | not-applicable |
| `def-formally-etale-morphism` | def | Define simultaneous existence and uniqueness. | literature-derived | not-applicable |
| `thm-formally-unramified-differentials-zero` | thm | Prove $f$ is formally unramified iff $\Omega_{X/S}=0$. | literature-derived | ai-altered |
| `def-unramified-morphism-finite-type` | def | Define unramified as locally of finite type and formally unramified. | literature-derived | not-applicable |
| `thm-unramified-diagonal-open-immersion` | thm | Characterize unramified morphisms by the diagonal being an open immersion under finite-type hypotheses. | literature-derived | ai-altered |
| `lem-etale-residue-extensions-finite-separable` | lem | For an étale morphism at a point, show the residue-field extension is finite separable under finite-presentation hypotheses. | literature-derived | ai-altered |
| `def-smooth-relative-dimension-via-differentials` | def | Record the intended rank-$n$ differential bundle criterion, proved with flatness in `AV-17`. | literature-derived | not-supplied |
| `rem-conormal-map-need-not-injective` | rem | Warn that the conormal sequence is right exact; left injectivity needs regularity hypotheses. | literature-derived | not-applicable |
| `rem-differentials-detect-infinitesimals-not-all-singularities-alone` | rem | Require flatness/presentation conditions before converting differential rank into smoothness. | literature-derived | not-applicable |

### Proposed B-page inventory (9 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-differentials-polynomial-ring` | ex | Compute $d(x^ay^b)$ and the free basis of $\Omega_{k[x,y]/k}$. | literature-derived | not-applicable |
| `ex-differentials-hypersurface` | ex | Present $\Omega_{k[x,y]/(f)/k}$ by $f_xdx+f_ydy$. | literature-derived | not-applicable |
| `ex-differentials-dual-numbers` | ex | Compute $\Omega_{k[\epsilon]/(\epsilon^2)/k}$ in characteristics $2$ and not $2$. | literature-derived | not-applicable |
| `ex-differentials-separable-field-extension-zero` | ex | Verify $\Omega_{L/k}=0$ for a finite separable extension. | literature-derived | not-applicable |
| `cex-differentials-purely-inseparable-field-nonzero` | cex | Compute $d\alpha$ for $L=k(\alpha)$ with $\alpha^p\in k$. | literature-derived | not-applicable |
| `cex-conormal-left-map-not-injective` | cex | Give a quotient where $I/I^2\to\Omega_P\otimes B$ has kernel. | literature-derived | not-applicable |
| `ex-tangent-vectors-affine-space-dual-numbers` | ex | Write every dual-number point reducing to $x$ as $x+\epsilon v$. | literature-derived | not-applicable |
| `ex-unramified-closed-point-immersion` | ex | Test the differential criterion for a closed immersion of a reduced point. | ai-generated | not-applicable |
| `cex-frobenius-differential-zero-not-etale` | cex | In characteristic $p$, absolute Frobenius has zero differential but is not generally étale; shows missing flat/smooth conditions. | literature-derived | not-applicable |

---

## AV-17. Flat, smooth, and étale morphisms

`requires`: `AV-13`, `AV-16`, `flatness-and-faithful-flatness`, finite
presentation, and generic freeness by citation. Pair sources: Vakil Ch. 25
§§25.1--25.10, pp. 519--552 and Ch. 26 §§26.1--26.6, pp. 553--566;
Tong Ch. 2 §2.7, pp. 72--84; Stacks Project, *Morphisms of Schemes*
§§29.25--29.31 and §§29.35--29.37, plus *Étale Morphisms* §§41.11--41.18;
Milne AG10 §l, pp. 29--33.

### Proposed A-page inventory (31 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-flat-morphism-schemes` | def | Define $f:X\to S$ flat at $x$ by flatness of $\mathcal O_{S,f(x)}\to\mathcal O_{X,x}$ and flat when so everywhere. | literature-derived | not-applicable |
| `lem-flatness-affine-local-source-target` | lem | Reduce flatness to the corresponding module condition on affine charts, citing algebraic local criteria. | literature-derived | ai-altered |
| `lem-flat-morphisms-stable-base-change` | lem | Prove flatness is stable under arbitrary base change. | literature-derived | ai-altered |
| `lem-flat-morphisms-stable-composition` | lem | Prove flatness is stable under composition. | literature-derived | ai-altered |
| `def-faithfully-flat-morphism-schemes` | def | Define faithfully flat using flatness and surjectivity on spectra, aligned with the algebra supplier. | literature-derived | not-applicable |
| `thm-faithfully-flat-descent-vanishing` | thm | If a quasi-coherent module pulls back to zero along an fpqc cover, prove it was zero; first geometric descent application. | literature-derived | ai-altered |
| `thm-generic-flatness-morphisms` | thm | For finite-type morphisms over an integral Noetherian base, find a dense open over which the morphism is flat, citing generic freeness. | literature-derived | ai-altered |
| `thm-flat-finite-presentation-is-open` | thm | Prove a flat morphism locally of finite presentation is open. | literature-derived | ai-altered |
| `thm-flat-families-fibre-dimension-locally-constant` | thm | Under finite-presentation and pure-dimensional hypotheses, control fibre dimension in a flat family. | literature-derived | ai-altered |
| `def-smooth-morphism-schemes` | def | Define smooth as locally of finite presentation, flat, with geometrically regular fibres. | literature-derived | not-applicable |
| `def-relative-dimension-smooth-morphism` | def | Define relative dimension $n$ when smooth fibres are pure dimension $n$. | literature-derived | not-applicable |
| `thm-smooth-morphisms-stable-base-change-composition` | thm | Prove smoothness is stable under base change and composition. | literature-derived | ai-altered |
| `thm-smooth-morphism-formally-smooth-finite-presentation` | thm | Identify smooth morphisms with formally smooth morphisms locally of finite presentation. | literature-derived | ai-altered |
| `thm-smooth-local-standard-form` | thm | Étale-locally on source and target, express a smooth morphism as étale over affine space. | literature-derived | ai-altered |
| `thm-jacobian-criterion-smooth-morphism` | thm | For a finite presentation by equations, characterize smoothness through an invertible Jacobian minor plus flat/dimension conditions. | literature-derived | ai-altered |
| `thm-differentials-smooth-locally-free` | thm | If $f$ is smooth of relative dimension $n$, prove $\Omega_{X/S}$ is locally free of rank $n$. | literature-derived | ai-altered |
| `lem-smooth-fibres-smooth` | lem | Every fibre and geometric fibre of a smooth morphism is smooth. | literature-derived | ai-altered |
| `def-etale-morphism-schemes` | def | Define étale as smooth of relative dimension zero. | literature-derived | not-applicable |
| `thm-etale-equivalent-flat-unramified-fp` | thm | Under finite presentation, identify étale with flat and unramified. | literature-derived | ai-altered |
| `thm-etale-formally-etale-finite-presentation` | thm | Identify étale morphisms with formally étale morphisms locally of finite presentation. | literature-derived | ai-altered |
| `lem-etale-stable-base-change-composition` | lem | Prove étale morphisms are stable under base change and composition. | literature-derived | ai-altered |
| `thm-etale-morphisms-open-and-quasi-finite` | thm | Prove étale morphisms are open and locally quasi-finite. | literature-derived | ai-altered |
| `def-standard-etale-algebra` | def | Define $B=(A[x]/(f))_g$ with $f'$ invertible as a standard étale algebra. | literature-derived | not-applicable |
| `thm-etale-locally-standard-etale` | thm | Show every étale morphism is locally standard étale. | literature-derived | ai-altered |
| `thm-etale-over-algebraically-closed-field-discrete-smooth-points` | thm | Describe finite étale $k$-schemes as finite disjoint unions of points when $k$ is algebraically closed. | literature-derived | ai-altered |
| `def-smooth-locus-morphism` | def | Define the smooth locus of a finite-presentation morphism. | literature-derived | not-applicable |
| `thm-smooth-locus-open` | thm | Prove the smooth locus is open. | literature-derived | ai-altered |
| `def-etale-locus-morphism` | def | Define the étale locus. | literature-derived | not-applicable |
| `thm-etale-locus-open` | thm | Prove the étale locus is open. | literature-derived | ai-altered |
| `cor-smooth-variety-classical-scheme-conventions-agree` | cor | Over a perfect field, reconcile `AV-6` smooth varieties with smooth structure morphisms. | literature-derived | ai-altered |
| `rem-flatness-is-not-constant-fibre-isomorphism` | rem | Record that flatness controls variation but does not make fibres isomorphic. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-polynomial-ring-flat-smooth` | ex | Show $\mathbf A^n_S\to S$ is smooth of relative dimension $n$, including $n=0$. | literature-derived | not-applicable |
| `ex-localization-etale-open-immersion` | ex | Verify every open immersion is étale. | literature-derived | not-applicable |
| `ex-standard-etale-square-root` | ex | Analyze $A[x]/(x^2-a)$ where $2x$ is invertible. | literature-derived | not-applicable |
| `cex-flat-not-smooth-nodal-family` | cex | Use a flat family with a singular special fibre. | literature-derived | not-applicable |
| `cex-smooth-not-etale-affine-line` | cex | $\mathbf A^1_k\to\operatorname{Spec}k$ is smooth of dimension one, not étale. | literature-derived | not-applicable |
| `cex-unramified-not-flat-closed-immersion` | cex | A non-open closed immersion can be unramified but not étale. | literature-derived | not-applicable |
| `cex-flat-finite-type-not-open-without-presentation-warning` | cex | Record the exact finiteness hypothesis needed for openness using a literature example. | literature-derived | not-applicable |
| `ex-finite-etale-separable-extension` | ex | Show $\operatorname{Spec}L\to\operatorname{Spec}k$ is finite étale iff $L/k$ is finite separable. | literature-derived | not-applicable |
| `cex-frobenius-not-smooth` | cex | Compute the relative differentials/fibres of Frobenius in characteristic $p$. | literature-derived | not-applicable |
| `ex-family-xy-equals-t-flat-not-smooth-at-node` | ex | Verify flatness and locate the failure of smoothness by the relative Jacobian. | literature-derived | not-applicable |

**Ownership trap.** Local criteria for flatness, faithful-flatness algebra,
Tor characterizations, and descent proofs as algebra remain on the cited
commutative/homological pages. This pair supplies geometric definitions,
stability, loci, fibres, and applications.

---

## AV-18. Quasi-coherent and coherent sheaves and vector bundles

`requires`: `AV-10`--`AV-13`, `AV-17`, module localization and finite
presentation. Pair sources: Vakil Ch. 14 §§14.1--14.8, pp. 291--315;
Milne AG13 §§13.1--13.16, pp. 1--8; MIT 18.725 Lectures 10--14,
consolidated-notes PDF pp. 25--34; Stacks Project, *Schemes* §§26.24--26.26
and *Properties of Schemes* §§28.20--28.26.

### Proposed A-page inventory (31 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-associated-sheaf-module-affine-scheme` | def | For an $A$-module $M$, define $\widetilde M$ on $\operatorname{Spec}A$ by $\widetilde M(D(f))=M_f$. | literature-derived | not-applicable |
| `thm-associated-module-sheaf-exists` | thm | Prove the basic-open prescription sheafifies with the claimed sections. | literature-derived | ai-altered |
| `lem-associated-sheaf-stalk-localization` | lem | Identify $(\widetilde M)_{\mathfrak p}\cong M_{\mathfrak p}$. | literature-derived | ai-altered |
| `lem-associated-sheaf-sections-basic-open` | lem | Prove $\Gamma(D(f),\widetilde M)\cong M_f$. | literature-derived | ai-altered |
| `def-quasi-coherent-module-scheme` | def | Define quasi-coherent sheaves as locally associated to modules on affine opens. | literature-derived | not-applicable |
| `thm-affine-quasi-coherent-equivalence` | thm | Prove $M\mapsto\widetilde M$ and $\mathcal F\mapsto\Gamma(X,\mathcal F)$ are quasi-inverse equivalences on affine schemes. | literature-derived | ai-altered |
| `cor-affine-qc-sheaf-determined-global-sections` | cor | A quasi-coherent sheaf on an affine scheme is determined by its global module. | literature-derived | ai-altered |
| `thm-quasi-coherence-check-affine-cover` | thm | Show quasi-coherence can be checked on any affine open cover, including overlap compatibility. | literature-derived | ai-altered |
| `thm-kernels-cokernels-qc-modules` | thm | Under the stated quasi-separated hypotheses, show kernels and cokernels of maps of quasi-coherent modules remain quasi-coherent. | literature-derived | ai-altered |
| `lem-tensor-qc-modules-quasi-coherent` | lem | Prove tensor products of quasi-coherent modules are quasi-coherent. | literature-derived | ai-altered |
| `lem-pullback-qc-module-quasi-coherent` | lem | Prove arbitrary scheme pullback preserves quasi-coherence. | literature-derived | ai-altered |
| `thm-pushforward-qc-under-qcqs-morphism` | thm | If $f$ is quasi-compact and quasi-separated, prove $f_*\mathcal F$ is quasi-coherent for quasi-coherent $\mathcal F$. | literature-derived | ai-altered |
| `def-finite-type-finite-presentation-module-sheaf` | def | Define finite type and finite presentation for $\mathcal O_X$-modules locally. | literature-derived | not-applicable |
| `def-coherent-module-scheme` | def | Define coherent as finite type with finitely generated relation kernels; on locally Noetherian schemes use the finite-type equivalence. | literature-derived | not-applicable |
| `thm-coherent-sheaves-abelian-noetherian-scheme` | thm | On a locally Noetherian scheme, kernels, cokernels, and extensions of coherent sheaves are coherent. | literature-derived | ai-altered |
| `def-locally-free-sheaf-finite-rank` | def | Define locally free rank $r$, including rank zero. | literature-derived | not-applicable |
| `def-vector-bundle-scheme` | def | Define a vector bundle geometrically as $\underline{\operatorname{Spec}}_X\operatorname{Sym}(\mathcal E^\vee)$ and relate it to locally free sheaves. | literature-derived | not-applicable |
| `thm-vector-bundles-locally-free-sheaves-equivalence` | thm | Establish the contravariant convention and equivalence between finite locally free sheaves and vector bundles. | literature-derived | ai-altered |
| `def-invertible-sheaf` | def | Define an invertible sheaf as locally free of rank one. | literature-derived | not-applicable |
| `lem-invertible-sheaf-dual-tensor-inverse` | lem | Prove $\mathcal L^\vee\otimes\mathcal L\cong\mathcal O_X$. | literature-derived | ai-altered |
| `def-support-module-sheaf` | def | Define $\operatorname{Supp}\mathcal F=\{x:\mathcal F_x\ne0\}$. | literature-derived | not-applicable |
| `thm-support-finite-type-qc-closed` | thm | On a scheme, prove support of a finite-type quasi-coherent sheaf is closed. | literature-derived | ai-altered |
| `def-fibre-of-module-at-point` | def | Define $\mathcal F(x)=\mathcal F_x\otimes\kappa(x)$ and distinguish it from the stalk. | literature-derived | not-applicable |
| `lem-sheaf-nakayama-fibre-detects-generation` | lem | Use Nakayama to detect vanishing and local generation from fibres of finite-type sheaves. | literature-derived | ai-altered |
| `thm-locally-free-locus-finite-presentation-open` | thm | Prove the rank-$r$ locally free locus of a finitely presented sheaf is open. | literature-derived | ai-altered |
| `def-fitting-ideal-sheaf` | def | Define Fitting ideals locally from presentation minors and prove independence by citation to commutative algebra. | literature-derived | not-applicable |
| `thm-fitting-ideals-control-rank-loci` | thm | Express generator/rank loci through Fitting ideals; powers degeneracy loci. | literature-derived | ai-altered |
| `thm-qc-ideal-closed-subscheme-correspondence-complete` | thm | Complete the `AV-12` correspondence between quasi-coherent ideals and closed subschemes. | literature-derived | ai-altered |
| `def-internal-hom-qc-sheaves` | def | Define $\mathcal Hom(\mathcal F,\mathcal G)$ and state the finite-presentation hypotheses for quasi-coherence. | literature-derived | not-applicable |
| `lem-dual-locally-free-and-base-change` | lem | Show the dual of finite locally free $\mathcal E$ is finite locally free and commutes with pullback. | literature-derived | ai-altered |
| `rem-coherent-needs-noetherian-or-coherent-ring-care` | rem | Prevent using “finite type = coherent” over an arbitrary non-Noetherian scheme. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-associated-sheaf-quotient-module` | ex | Compute $\widetilde{A/I}$ and its support $V(I)$. | literature-derived | not-applicable |
| `ex-associated-sheaf-localized-module` | ex | Compare $\widetilde{M_f}$ on $D(f)$ with $\widetilde M\!\restriction_{D(f)}$. | literature-derived | not-applicable |
| `ex-skyscraper-coherent-closed-point` | ex | Realize a closed-point skyscraper as the coherent sheaf $\widetilde{A/\mathfrak m}$. | literature-derived | not-applicable |
| `ex-line-bundle-projective-line-transition` | ex | Glue $\mathcal O_{\mathbf P^1}(n)$ from transition $t^n$. | literature-derived | not-applicable |
| `cex-qc-sheaf-global-sections-not-determine-nonaffine` | cex | Distinguish $\mathcal O_{\mathbf P^1}(-1)$ from zero despite no nonzero global sections. | literature-derived | not-applicable |
| `cex-pushforward-qc-needs-quasi-separated` | cex | Record a standard non-quasi-separated counterexample. | literature-derived | not-applicable |
| `cex-finite-type-module-not-locally-free` | cex | Use $A/(x)$ on $\operatorname{Spec}A$ and compute its varying fibres. | literature-derived | not-applicable |
| `ex-fitting-ideal-two-by-two-presentation` | ex | Compute rank loci from minors of an explicit matrix. | ai-generated | not-applicable |
| `ex-rank-zero-locally-free-sheaf` | ex | Verify the zero sheaf is locally free of rank zero and its vector bundle is the zero section. | ai-generated | not-applicable |
| `cex-stalk-versus-fibre-module` | cex | For $\widetilde A$, compare $A_{\mathfrak p}$ with $\kappa(\mathfrak p)$. | literature-derived | not-applicable |

---

## AV-19. Proj, projective schemes, twisting sheaves, and ampleness

`requires`: `AV-13`, `AV-15`, `AV-18`, and graded algebra/Hilbert theory by
citation. Pair sources: Vakil Ch. 16 §§16.1--16.4, pp. 329--342 and Ch. 18
§§18.1--18.4, pp. 361--377; Gao--Zhang Ch. 5 §§5.1--5.6, pp. 49--63;
Stacks Project, *Constructions of Schemes* §§27.8--27.21 and *Morphisms of
Schemes* §§29.38--29.44; Milne AG10 §i, pp. 23--25.

### Proposed A-page inventory (32 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-proj-graded-ring-points` | def | Define $\operatorname{Proj}S$ as homogeneous primes not containing the irrelevant ideal, for a nonnegatively graded ring. | literature-derived | not-applicable |
| `def-standard-open-proj` | def | Define $D_+(f)$ for homogeneous $f$ of positive degree. | literature-derived | not-applicable |
| `lem-standard-opens-proj-affine` | lem | Prove $D_+(f)\cong\operatorname{Spec}(S_{(f)})$, the degree-zero localization. | literature-derived | ai-altered |
| `thm-proj-structure-sheaf-scheme` | thm | Glue standard affine opens and their degree-zero localizations to construct $\operatorname{Proj}S$. | literature-derived | ai-altered |
| `lem-proj-irrelevant-and-nilpotent-boundaries` | lem | Account for $S_+$ nilpotent, empty Proj, and irrelevant torsion. | literature-derived | ai-altered |
| `def-shifted-graded-module` | def | Define $M(n)$ with the adopted sign convention $M(n)_d=M_{n+d}$. | literature-derived | not-applicable |
| `def-associated-sheaf-graded-module-proj` | def | Define $\widetilde M$ by degree-zero localizations on $D_+(f)$. | literature-derived | not-applicable |
| `lem-proj-associated-sheaf-basic-sections` | lem | Identify sections on $D_+(f)$ with $M_{(f)}$. | literature-derived | ai-altered |
| `def-twisting-sheaf-proj` | def | Define $\mathcal O_X(n)=\widetilde{S(n)}$ and fix the shift/sign convention. | literature-derived | not-applicable |
| `thm-twisting-sheaf-invertible-standard-graded` | thm | When $S$ is generated by $S_1$, prove $\mathcal O_X(n)$ is invertible and tensor twists add. | literature-derived | ai-altered |
| `lem-proj-veronese-invariance` | lem | Prove $\operatorname{Proj}S\cong\operatorname{Proj}S^{(d)}$ and track $\mathcal O(d)$. | literature-derived | ai-altered |
| `thm-projective-space-as-proj` | thm | Identify $\mathbf P^n_A=\operatorname{Proj}A[x_0,\ldots,x_n]$, including $n=0$. | literature-derived | ai-altered |
| `thm-closed-subschemes-projective-space-homogeneous-ideals` | thm | Relate saturated homogeneous ideals to closed subschemes of projective space. | literature-derived | ai-altered |
| `def-relative-proj-quasi-coherent-graded-algebra` | def | Define $\underline{\operatorname{Proj}}_S\mathcal A$ by affine-local gluing. | literature-derived | not-applicable |
| `thm-relative-proj-base-change` | thm | Prove relative Proj commutes with base change under the standard finite-generation hypotheses. | literature-derived | ai-altered |
| `def-projective-bundle-scheme` | def | Define $\mathbf P(\mathcal E)=\underline{\operatorname{Proj}}\operatorname{Sym}\mathcal E$ using the one-dimensional quotient convention. | literature-derived | not-applicable |
| `thm-projective-bundle-represents-line-quotients` | thm | Prove $\mathbf P(\mathcal E)$ represents invertible quotients of pullbacks of $\mathcal E$. | literature-derived | ai-altered |
| `def-very-ample-invertible-sheaf-relative` | def | Define relative very ampleness by pullback of $\mathcal O(1)$ along an immersion into projective space. | literature-derived | not-applicable |
| `def-ample-invertible-sheaf` | def | Define ampleness via affine opens cut out by sections of positive tensor powers. | literature-derived | not-applicable |
| `lem-very-ample-implies-ample` | lem | Prove the standard affine-chart cover gives ampleness. | literature-derived | ai-altered |
| `thm-ample-powers-very-ample-proper-base` | thm | Under proper finite-type hypotheses over a Noetherian base, show sufficiently high powers are relatively very ample. | literature-derived | ai-altered |
| `def-globally-generated-sheaf` | def | Define global generation by surjectivity of the evaluation map. | literature-derived | not-applicable |
| `thm-line-bundle-sections-define-projective-map` | thm | A globally generated invertible sheaf plus generating sections defines a morphism to projective space and pulls back $\mathcal O(1)$. | literature-derived | ai-altered |
| `thm-projective-map-line-bundle-data-equivalence` | thm | Identify morphisms $X\to\mathbf P^n$ with an invertible sheaf, $n+1$ generating sections, modulo isomorphism. | literature-derived | ai-altered |
| `def-section-zero-scheme-invertible-sheaf` | def | Define the zero subscheme of a section and state when it is an effective Cartier divisor. | literature-derived | not-applicable |
| `lem-projective-morphism-relative-proj-presentation` | lem | Express a projective morphism as a closed subscheme of a relative Proj from a finite-type graded algebra. | literature-derived | ai-altered |
| `thm-serre-criterion-ampleness` | thm | Characterize ampleness by eventual global generation of $\mathcal F\otimes\mathcal L^n$ for every finite-type quasi-coherent $\mathcal F$ under Noetherian hypotheses. | literature-derived | ai-altered |
| `lem-ample-stable-positive-power` | lem | Prove $\mathcal L$ is ample iff $\mathcal L^m$ is ample for $m>0$. | literature-derived | ai-altered |
| `lem-ample-pullback-finite-morphism` | lem | Pullback of an ample line bundle along a finite morphism is ample. | literature-derived | ai-altered |
| `thm-segre-line-bundle-external-tensor` | thm | Identify the Segre embedding line bundle as $\mathcal O(1)\boxtimes\mathcal O(1)$. | literature-derived | ai-altered |
| `thm-veronese-pullback-twist` | thm | Compute $\nu_d^*\mathcal O(1)\cong\mathcal O(d)$. | literature-derived | ai-altered |
| `rem-proj-does-not-recover-graded-ring-literally` | rem | Record irrelevant torsion and Veronese changes that leave Proj unchanged. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-proj-polynomial-ring-projective-space` | ex | Compute standard charts and overlaps of $\operatorname{Proj}k[x_0,\ldots,x_n]$. | literature-derived | not-applicable |
| `ex-proj-empty-irrelevant-nilpotent` | ex | Give a graded ring with empty Proj and verify the criterion. | literature-derived | not-applicable |
| `ex-proj-quotient-projective-hypersurface` | ex | Recover a projective hypersurface from a homogeneous quotient. | literature-derived | not-applicable |
| `ex-twisting-sheaf-projective-line-transitions` | ex | Compute transitions for $\mathcal O(n)$ and verify the sign convention. | literature-derived | not-applicable |
| `cex-o-minus-one-no-global-generators` | cex | Show $\mathcal O_{\mathbf P^1}(-1)$ is not globally generated. | literature-derived | not-applicable |
| `ex-projective-bundle-trivial-rank-r` | ex | Identify $\mathbf P(\mathcal O_S^r)$ with $\mathbf P^{r-1}_S$, including $r=1$. | literature-derived | not-applicable |
| `cex-proj-graded-ring-not-faithful` | cex | Compare a graded ring with a Veronese subring or irrelevant-torsion quotient having the same Proj. | literature-derived | not-applicable |
| `ex-line-bundle-map-conic-veronese` | ex | Use the basis of $H^0(\mathbf P^1,\mathcal O(2))$ to produce the conic embedding. | literature-derived | not-applicable |
| `cex-globally-generated-not-very-ample` | cex | Use a line bundle defining a non-embedding morphism. | literature-derived | not-applicable |
| `ex-zero-section-empty-effective-divisor` | ex | A nowhere-vanishing section has empty zero divisor; confirms the degenerate case. | ai-generated | not-applicable |

---

## AV-20. Cartier and Weil divisors, line bundles, and Picard groups

`requires`: `AV-7`, `AV-18`, `AV-19`,
`valuation-rings-and-discrete-valuation-rings`, and
`dedekind-domains-and-ideal-classes`. Pair sources: Vakil Ch. 15
§§15.1--15.3, pp. 317--327; Milne AG12 §§12.1--12.17, pp. 1--9;
MIT 18.725 Lecture 15, consolidated-notes PDF pp. 35--37; Stacks Project,
*Divisors* §§31.14--31.30.

### Proposed A-page inventory (32 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-sheaf-total-quotient-rings` | def | On a locally Noetherian scheme, define the sheaf $\mathcal K_X$ of total quotient rings, with the integral-scheme function-field specialization. | literature-derived | not-applicable |
| `def-cartier-divisor` | def | Define a Cartier divisor as a global section of $\mathcal K_X^\times/\mathcal O_X^\times$, represented by compatible local equations. | literature-derived | not-applicable |
| `lem-cartier-divisor-local-equation-equivalence` | lem | Prove the local quotient data and sheaf-quotient definition agree. | literature-derived | ai-altered |
| `def-principal-cartier-divisor` | def | Define $\operatorname{div}(f)$ for a global rational unit and fix the sign convention. | literature-derived | not-applicable |
| `def-linear-equivalence-cartier-divisors` | def | Define $D\sim D'$ when their difference is principal. | literature-derived | not-applicable |
| `def-effective-cartier-divisor` | def | Define effectiveness by regular nonzerodivisor local equations; allow the empty divisor from a unit. | literature-derived | not-applicable |
| `thm-effective-cartier-divisor-closed-immersion` | thm | Construct its ideal sheaf and closed subscheme, and prove the ideal is invertible. | literature-derived | ai-altered |
| `def-invertible-sheaf-of-cartier-divisor` | def | Define $\mathcal O_X(D)$ as rational functions whose local product with an equation is regular, adopting the permits-poles convention. | literature-derived | not-applicable |
| `lem-cartier-divisor-sheaf-invertible` | lem | Prove $\mathcal O_X(D)$ is invertible and embeds in $\mathcal K_X$ on integral schemes. | literature-derived | ai-altered |
| `lem-cartier-divisor-addition-tensor` | lem | Prove $\mathcal O_X(D+D')\cong\mathcal O_X(D)\otimes\mathcal O_X(D')$ and $\mathcal O_X(-D)\cong\mathcal O_X(D)^\vee$. | literature-derived | ai-altered |
| `thm-cartier-divisors-mod-principal-to-picard` | thm | Map Cartier divisor classes to $\operatorname{Pic}(X)$ and state the hypotheses for surjectivity/isomorphism. | literature-derived | ai-altered |
| `def-picard-group-scheme` | def | Define $\operatorname{Pic}(X)$ as isomorphism classes of invertible sheaves under tensor product. | literature-derived | not-applicable |
| `def-rational-section-line-bundle` | def | Define a nonzero rational section of an invertible sheaf on an integral scheme. | literature-derived | not-applicable |
| `thm-line-bundle-rational-section-cartier-divisor` | thm | A rational section gives a Cartier divisor, and $(\mathcal L,s)\leftrightarrow D$ up to the stated equivalence. | literature-derived | ai-altered |
| `lem-global-section-effective-divisor` | lem | A regular section of a line bundle that is a nonzerodivisor locally cuts out an effective Cartier divisor. | literature-derived | ai-altered |
| `def-weil-divisor-normal-noetherian-scheme` | def | Define a Weil divisor as a locally finite integer combination of codimension-one integral closed subschemes. | literature-derived | not-applicable |
| `def-order-codimension-one-rational-function` | def | Define $\operatorname{ord}_Z(f)$ using the DVR $\mathcal O_{X,\eta_Z}$, citing its existence from normality. | literature-derived | not-applicable |
| `lem-principal-weil-divisor-locally-finite` | lem | Prove only locally finitely many codimension-one orders are nonzero. | literature-derived | ai-altered |
| `def-principal-weil-divisor-and-class-group` | def | Define $\operatorname{div}(f)=\sum_Z\operatorname{ord}_Z(f)Z$ and $\operatorname{Cl}(X)$. | literature-derived | not-applicable |
| `thm-cartier-to-weil-divisor-normal-scheme` | thm | Send local Cartier equations to codimension-one valuations and prove well-definedness. | literature-derived | ai-altered |
| `lem-cartier-to-weil-respects-principal-and-addition` | lem | Show the map descends to $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$. | literature-derived | ai-altered |
| `thm-cartier-weil-isomorphism-locally-factorial` | thm | On a locally factorial integral Noetherian scheme, prove every Weil divisor is Cartier, hence $\operatorname{Pic}\cong\operatorname{Cl}$. | literature-derived | ai-altered |
| `def-locally-factorial-scheme` | def | Define local factoriality and record regular locally Noetherian schemes as the principal case by citation. | literature-derived | not-applicable |
| `def-pullback-cartier-divisor` | def | Define $f^*D$ when pullback local equations remain nonzerodivisors; state flat morphisms as a safe case. | literature-derived | not-applicable |
| `lem-pullback-cartier-divisor-line-bundle` | lem | Prove $\mathcal O_X(f^*D)\cong f^*\mathcal O_Y(D)$. | literature-derived | ai-altered |
| `def-degree-divisor-proper-curve` | def | For a proper curve, define $\deg\sum n_x[x]=\sum n_x[\kappa(x):k]$. | literature-derived | not-applicable |
| `thm-principal-divisor-degree-zero-proper-curve` | thm | Prove a nonzero rational function on a normal proper integral curve has equally weighted zeros and poles. | literature-derived | ai-altered |
| `cor-degree-descends-picard-curve` | cor | Define degree of a line bundle through any divisor representing it. | literature-derived | ai-altered |
| `def-divisor-support-positive-negative-parts` | def | Define support and $D^+,D^-$ for a divisor on a regular curve. | literature-derived | not-applicable |
| `lem-effective-cartier-divisor-exact-sequence` | lem | Prove $0\to\mathcal O_X(-D)\to\mathcal O_X\to\mathcal O_D\to0$. | literature-derived | ai-altered |
| `cor-twist-exact-sequence-effective-divisor` | cor | Tensor to obtain $0\to\mathcal L(-D)\to\mathcal L\to\mathcal L\!\restriction_D\to0$. | literature-derived | ai-altered |
| `rem-weil-pullback-not-automatic` | rem | Warn that arbitrary pullback of Weil divisors is not defined; avoids a false functoriality claim. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-divisor-rational-function-projective-line` | ex | Compute zeros and poles of a rational function on $\mathbf P^1$. | literature-derived | not-applicable |
| `ex-picard-projective-line-preview` | ex | Show $\mathcal O(n)$ has degree $n$; full classification follows from Riemann--Roch. | literature-derived | not-applicable |
| `ex-effective-cartier-empty-divisor` | ex | A unit cuts out the empty divisor and gives $\mathcal O_X$. | ai-generated | not-applicable |
| `cex-zero-divisor-equation-not-cartier` | cex | In a reducible/nonreduced scheme, a vanishing zero divisor fails the effective Cartier condition. | literature-derived | not-applicable |
| `ex-cartier-divisor-hyperplane-projective-space` | ex | Identify a hyperplane with $\mathcal O_{\mathbf P^n}(1)$. | literature-derived | not-applicable |
| `ex-divisor-cusp-normalization-pullback` | ex | Pull a Cartier divisor to the cusp normalization and compute orders. | literature-derived | not-applicable |
| `cex-weil-divisor-not-cartier-singular-cone` | cex | Give a codimension-one divisor on a normal singular cone that is not Cartier. | literature-derived | not-applicable |
| `cex-pullback-weil-divisor-undefined` | cex | Use a morphism landing in a divisor's support to show naive equation pullback can vanish identically. | literature-derived | not-applicable |
| `ex-principal-divisor-degree-zero-p1` | ex | Verify the degree-zero theorem by factorizing numerator and denominator. | literature-derived | not-applicable |
| `ex-effective-divisor-thickened-points-curve` | ex | Interpret $\sum n_ip_i$ as a finite closed subscheme of length $\sum n_i[\kappa(p_i):k]$. | literature-derived | not-applicable |

---

## AV-21. Sheaf cohomology, Čech cohomology, and comparison

`requires`: `AV-9`, `AV-10`; homological algebra supplies complexes,
injective resolutions, right derived functors, and spectral sequences as
algebra. This pair owns the sheaf-theoretic construction and comparisons.
Pair sources: Vakil Ch. 20 §§20.1--20.8, pp. 397--430; Stacks Project,
*Cohomology of Sheaves* §§20.2--20.15 and §§20.30--20.31; Gao--Zhang Ch. 6
§§6.1--6.4, pp. 64--75; MIT 18.726 lecture packets “Sheaf cohomology,”
“Spectral sequences and Čech cohomology,” and “Čech cohomology and derived
functors” (complete packets, 2--5 PDF pages each).

### Proposed A-page inventory (35 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-global-sections-functor-sheaves` | def | Define $\Gamma(X,-)$ on abelian sheaves and recall its left exactness from `AV-10`. | literature-derived | not-applicable |
| `def-sheaf-cohomology-derived-global-sections` | def | Define $H^i(X,\mathcal F)=R^i\Gamma(X,\mathcal F)$ using the homological-algebra supplier. | literature-derived | not-applicable |
| `thm-zero-sheaf-cohomology-global-sections` | thm | Identify $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)$ naturally. | literature-derived | ai-altered |
| `thm-long-exact-sequence-sheaf-cohomology` | thm | Associate a natural long exact cohomology sequence to every short exact sequence of abelian sheaves. | literature-derived | ai-altered |
| `lem-cohomology-functoriality-sheaf-and-space` | lem | Construct maps induced by sheaf morphisms and continuous maps with direct image, recording variance. | literature-derived | ai-altered |
| `def-acyclic-sheaf-global-sections` | def | Define $\Gamma$-acyclic by $H^i=0$ for $i>0$. | literature-derived | not-applicable |
| `def-flasque-sheaf` | def | Define flasque by surjective restriction maps. | literature-derived | not-applicable |
| `thm-flasque-sheaves-acyclic` | thm | Prove flasque sheaves are acyclic, decomposing the extension-of-sections argument. | literature-derived | ai-altered |
| `lem-injective-sheaves-flasque` | lem | Prove injective abelian sheaves are flasque; connects the concrete and derived constructions. | literature-derived | ai-altered |
| `def-godement-resolution` | def | Define the canonical embedding into the product of skyscraper sheaves and iterate cokernels. | literature-derived | not-applicable |
| `thm-godement-resolution-flasque` | thm | Prove the Godement terms are flasque and the resolution computes sheaf cohomology. | literature-derived | ai-altered |
| `def-cech-cochain-complex-open-cover` | def | For an indexed cover $\mathfrak U$, define alternating Čech cochains using ordered intersections, with $C^p=0$ when no $(p+1)$-fold intersections exist. | literature-derived | not-applicable |
| `lem-cech-differential-squares-zero` | lem | Check $\delta^2=0$ by cancellation with the adopted $(-1)^j$ sign. | literature-derived | ai-altered |
| `def-cech-cohomology-open-cover` | def | Define $\check H^p(\mathfrak U,\mathcal F)$ as cohomology of the Čech complex. | literature-derived | not-applicable |
| `lem-cech-h0-global-sections` | lem | Identify $\check H^0(\mathfrak U,\mathcal F)$ with $\Gamma(X,\mathcal F)$ for a cover of $X$. | literature-derived | ai-altered |
| `def-refinement-open-cover` | def | Define a refinement map and its induced Čech cochain map. | literature-derived | not-applicable |
| `thm-refinement-map-independent-on-cohomology` | thm | Prove two choices of refinement map induce chain-homotopic maps and the same cohomology map. | literature-derived | ai-altered |
| `def-global-cech-cohomology-directed-limit` | def | Define $\check H^p(X,\mathcal F)$ as the filtered colimit over covers, when used. | literature-derived | not-applicable |
| `def-acyclic-cover-for-sheaf` | def | Define a cover whose every nonempty finite intersection is $\mathcal F$-acyclic. | literature-derived | not-applicable |
| `thm-cech-to-sheaf-cohomology-comparison` | thm | Construct the natural map $\check H^p(\mathfrak U,\mathcal F)\to H^p(X,\mathcal F)$. | literature-derived | ai-altered |
| `thm-leray-acyclic-cover-theorem` | thm | If $\mathfrak U$ is $\mathcal F$-acyclic, prove Čech cohomology on the cover equals sheaf cohomology in all degrees. | literature-derived | ai-altered |
| `lem-two-open-cover-cech-complex` | lem | Write the two-open Čech complex explicitly; isolates the algebra behind Mayer--Vietoris. | literature-derived | ai-altered |
| `thm-mayer-vietoris-sheaf-cohomology` | thm | For $X=U\cup V$, derive the long exact sequence using extension/restriction and acyclic resolutions. | literature-derived | ai-altered |
| `thm-cohomology-disjoint-union` | thm | Compute sheaf cohomology of a finite disjoint union as the product/direct sum of component cohomologies. | literature-derived | ai-altered |
| `thm-cohomology-one-point-space` | thm | Show higher cohomology vanishes on a one-point space. | literature-derived | ai-altered |
| `def-cohomological-dimension-space` | def | Define cohomological dimension relative to a class of sheaves. | literature-derived | not-applicable |
| `thm-noetherian-topological-space-dimension-vanishing` | thm | For a Noetherian topological space of dimension $d$, prove $H^i(X,\mathcal F)=0$ for $i>d$ for abelian sheaves under the standard theorem's hypotheses. | literature-derived | ai-altered |
| `def-cup-product-sheaf-cohomology` | def | Define the sheaf-cohomology cup product from tensor pairings, citing the homological construction. | literature-derived | not-applicable |
| `thm-cup-product-graded-associative-natural` | thm | Record associativity, naturality, unit, and graded commutativity in the commutative-ring setting. | literature-derived | ai-altered |
| `def-fine-sheaf` | def | Define a fine sheaf on a space supporting partitions of unity. | literature-derived | not-applicable |
| `thm-fine-sheaves-acyclic-paracompact` | thm | On a paracompact Hausdorff space, prove fine sheaves are acyclic. | literature-derived | ai-altered |
| `thm-abstract-de-rham-resolution-principle` | thm | A resolution of a sheaf by acyclic sheaves computes its sheaf cohomology; this is the exact AV interface used by de Rham/Čech consumers. | literature-derived | ai-altered |
| `thm-cech-de-rham-comparison-interface` | thm | On a smooth manifold with a good cover, combine the fine de Rham resolution and Leray Čech comparison to identify Čech, sheaf, and de Rham cohomology; singular comparison is cited from the resolved AT supplier. | literature-derived | ai-altered |
| `rem-cech-cohomology-cover-dependent-without-acyclicity` | rem | Warn that a fixed cover's Čech groups need not equal derived sheaf cohomology. | literature-derived | not-applicable |
| `rem-spectral-sequence-belongs-homological-algebra` | rem | Record that the Čech-to-derived spectral sequence is cited, not reconstructed as spectral-sequence algebra here. | literature-derived | not-applicable |

### Proposed B-page inventory (11 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-cech-cohomology-two-arc-cover-circle` | ex | Compute the first Čech class of the constant sheaf on a circle using a suitable cover/refinement. | literature-derived | not-applicable |
| `cex-bad-cover-circle-cech-misses-h1` | cex | Use a non-acyclic cover to show fixed-cover Čech cohomology can miss the answer. | literature-derived | not-applicable |
| `ex-skyscraper-sheaf-acyclic` | ex | Compute higher cohomology of a skyscraper sheaf directly. | literature-derived | not-applicable |
| `ex-flasque-sheaf-all-functions` | ex | Verify the sheaf of all set-theoretic abelian-group-valued functions is flasque. | literature-derived | not-applicable |
| `cex-constant-sheaf-not-flasque` | cex | Show locally constant sections need not extend across a disconnected inclusion. | literature-derived | not-applicable |
| `ex-mayer-vietoris-projective-line-cover-preview` | ex | Write the two-affine Mayer--Vietoris sequence for $\mathcal O_{\mathbf P^1}(n)$. | literature-derived | not-applicable |
| `ex-cech-sign-degree-two-three-opens` | ex | Verify $\delta^2=0$ on a three-open cover term by term. | ai-generated | not-applicable |
| `ex-empty-cover-empty-space-cohomology` | ex | Compute $H^0$ and higher groups on the empty space under the adopted terminal-section convention. | ai-generated | not-applicable |
| `cex-global-sections-epimorphism-fails-lift` | cex | Re-express the `AV-10` failure as a nonzero connecting class in $H^1$. | literature-derived | not-applicable |
| `ex-good-cover-de-rham-interface` | ex | Trace one closed form through local primitives to a Čech cocycle without rebuilding manifold de Rham theory. | literature-derived | not-applicable |
| `cex-cech-refinement-map-not-canonical-on-cochains` | cex | Two refinement choices differ on cochains although they agree on cohomology. | ai-generated | not-applicable |

**Seam supplied.** AT and differential geometry must cite this pair for
sheaves, sheafification, Čech complexes, refinement independence, the Leray
acyclic-cover theorem, fine-resolution acyclicity, and the abstract de Rham
comparison route. AV cites AT only for the singular-cohomology side; it does
not re-mint singular cochains, cup products, or the singular/de Rham theorem.

---

## AV-22. Cohomology of quasi-coherent sheaves on affine and projective schemes

`requires`: `AV-18`, `AV-19`, `AV-21`, Noetherian graded/Hilbert theory,
and homological derived-functor machinery by citation. Pair sources: Vakil
Ch. 20 §§20.4--20.8, pp. 408--430 and Ch. 24 §§24.4--24.5,
pp. 514--518; Gao--Zhang Ch. 6 §§6.3--6.6, pp. 70--81; Artin Ch. 7
§§7.1--7.7, pp. 140--158; Stacks Project, *Cohomology of Schemes*
§§30.2--30.8 and §§30.14--30.19.

### Proposed A-page inventory (34 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `thm-qc-sheaf-affine-higher-cohomology-vanishes` | thm | For quasi-coherent $\mathcal F$ on an affine scheme, prove $H^i(X,\mathcal F)=0$ for $i>0$. | literature-derived | ai-altered |
| `lem-principal-open-cover-qc-acyclic-intersections` | lem | Show finite intersections of principal affine opens are affine and acyclic for quasi-coherent sheaves. | literature-derived | ai-altered |
| `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` | thm | On a separated scheme, a finite affine cover is acyclic on all finite intersections, so its Čech complex computes quasi-coherent cohomology. | literature-derived | ai-altered |
| `thm-affine-morphism-higher-direct-images-qc-vanish` | thm | For affine $f$ and quasi-coherent $\mathcal F$, prove $R^if_*\mathcal F=0$ for $i>0$. | literature-derived | ai-altered |
| `lem-affine-morphism-cohomology-pushforward` | lem | Identify $H^i(X,\mathcal F)\cong H^i(Y,f_*\mathcal F)$ for affine $f$. | literature-derived | ai-altered |
| `def-twist-quasi-coherent-sheaf-projective` | def | Define $\mathcal F(n)=\mathcal F\otimes\mathcal O_X(n)$. | literature-derived | not-applicable |
| `thm-cohomology-projective-space-twisting-sheaves` | thm | Compute $H^q(\mathbf P^n_A,\mathcal O(d))$ in the standard ranges, including $n=0$, by the affine Čech complex. | literature-derived | ai-altered |
| `lem-projective-space-cech-monomial-complex` | lem | Decompose the Čech complex degreewise by Laurent monomials; this is the combinatorial core of the computation. | literature-derived | ai-altered |
| `cor-h0-projective-space-o-d-homogeneous-polynomials` | cor | For $d\ge0$, identify global sections with degree-$d$ homogeneous polynomials; for $d<0$, obtain zero when $n>0$. | literature-derived | ai-altered |
| `cor-intermediate-cohomology-o-d-projective-space-vanishes` | cor | Show $H^q(\mathbf P^n,\mathcal O(d))=0$ for $0<q<n$. | literature-derived | ai-altered |
| `cor-top-cohomology-projective-space-o-d` | cor | Identify the top-cohomology basis and its nonzero range $d\le -n-1$. | literature-derived | ai-altered |
| `thm-serre-vanishing` | thm | For projective $X$ over Noetherian $A$, coherent $\mathcal F$, and ample $\mathcal L$, prove $H^i(X,\mathcal F\otimes\mathcal L^n)=0$ for $i>0$ and $n\gg0$. | literature-derived | ai-altered |
| `lem-serre-vanishing-induction-hyperplane` | lem | Split the proof through a hyperplane exact sequence and induction on support dimension. | literature-derived | ai-altered |
| `lem-eventual-global-generation-coherent-twists` | lem | Prove $\mathcal F(n)$ is globally generated for $n\gg0$. | literature-derived | ai-altered |
| `thm-serre-finiteness-projective-cohomology` | thm | For proper $X$ over Noetherian $A$ and coherent $\mathcal F$, prove each $H^i(X,\mathcal F)$ is a finite $A$-module and vanishes for $i\gg0$. | literature-derived | ai-altered |
| `cor-projective-cohomology-finite-dimensional-field` | cor | Over a field, coherent cohomology groups on a proper scheme are finite-dimensional. | literature-derived | ai-altered |
| `def-euler-characteristic-coherent-sheaf` | def | Define $\chi(X,\mathcal F)=\sum_i(-1)^i\dim_kH^i(X,\mathcal F)$ when finiteness/vanishing apply. | literature-derived | not-applicable |
| `lem-euler-characteristic-additive-short-exact` | lem | Prove additivity from the long exact cohomology sequence. | literature-derived | ai-altered |
| `def-hilbert-function-sheaf-projective` | def | Define $n\mapsto\chi(X,\mathcal F(n))$ and distinguish it from $h^0$ before vanishing. | literature-derived | not-applicable |
| `thm-hilbert-polynomial-coherent-sheaf` | thm | Cite graded Hilbert theory and prove $\chi(X,\mathcal F(n))$ agrees with a polynomial for all $n$ after appropriate setup. | literature-derived | ai-altered |
| `thm-hilbert-polynomial-degree-support-dimension` | thm | Relate the polynomial degree to $\dim\operatorname{Supp}\mathcal F$. | literature-derived | ai-altered |
| `def-higher-direct-image-sheaf` | def | Define $R^if_*\mathcal F$ as derived direct image, citing homological algebra. | literature-derived | not-applicable |
| `thm-proper-pushforward-coherent` | thm | For proper finite-type morphisms of Noetherian schemes, prove $R^if_*\mathcal F$ is coherent. | literature-derived | ai-altered |
| `def-base-change-map-cohomology` | def | Construct $(R^if_*\mathcal F)\otimes\kappa(s)\to H^i(X_s,\mathcal F_s)$. | literature-derived | not-applicable |
| `thm-cohomology-and-base-change` | thm | Under properness, finite presentation, and flatness hypotheses, give the local criterion for the base-change map to be an isomorphism and for $R^if_*\mathcal F$ to be locally free. | literature-derived | ai-altered |
| `cor-upper-semicontinuity-cohomology-dimension` | cor | Show $s\mapsto\dim_{kappa(s)}H^i(X_s,\mathcal F_s)$ is upper semicontinuous under proper flat finite-presentation hypotheses. | literature-derived | ai-altered |
| `cor-euler-characteristic-locally-constant-flat-proper-family` | cor | Deduce Euler characteristic is locally constant in a proper flat family with coherent flat sheaf. | literature-derived | ai-altered |
| `thm-cohomological-dimension-projective-n-space` | thm | Show quasi-coherent cohomology on $\mathbf P^n_A$ vanishes above degree $n$. | literature-derived | ai-altered |
| `thm-cohomological-dimension-noetherian-scheme` | thm | Bound quasi-coherent cohomology by dimension for separated Noetherian schemes in the stated finite-dimensional setting. | literature-derived | ai-altered |
| `lem-closed-immersion-cohomology-pushforward` | lem | For a closed immersion $i$, identify $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$. | literature-derived | ai-altered |
| `lem-projective-hypersurface-cohomology-sequence` | lem | Use $0\to\mathcal O(-d)\to\mathcal O\to\mathcal O_X\to0$ to compute hypersurface cohomology. | literature-derived | ai-altered |
| `cor-connected-projective-variety-h0-o` | cor | For geometrically connected reduced proper $X/k$, identify $H^0(X,\mathcal O_X)=k$ under the stated hypotheses. | literature-derived | ai-altered |
| `rem-proper-cohomology-finiteness-needs-coherence` | rem | Warn that arbitrary quasi-coherent sheaves need not have finite-dimensional cohomology. | literature-derived | not-applicable |
| `rem-base-change-is-not-automatic` | rem | Require the actual base-change map and flatness/local-freeness hypotheses rather than asserting fibrewise commutation. | literature-derived | not-applicable |

### Proposed B-page inventory (11 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-cohomology-o-d-projective-line-all-d` | ex | Compute $H^0$ and $H^1$ of $\mathcal O_{\mathbf P^1}(d)$ explicitly. | literature-derived | not-applicable |
| `ex-cech-cocycle-projective-line-o-minus-two` | ex | Represent the generator of $H^1(\mathbf P^1,\mathcal O(-2))$. | literature-derived | not-applicable |
| `ex-hypersurface-structure-sheaf-cohomology` | ex | Compute a low-degree example from the hypersurface exact sequence. | literature-derived | not-applicable |
| `ex-hilbert-polynomial-projective-space` | ex | Derive $\binom{n+d}{n}$ for $\mathcal O_{\mathbf P^n}$. | literature-derived | not-applicable |
| `cex-h0-not-euler-characteristic-before-serre-vanishing` | cex | Use negative twists on $\mathbf P^1$ to show higher cohomology contributes. | literature-derived | not-applicable |
| `cex-affine-vanishing-fails-non-qc-sheaf` | cex | Record a non-quasi-coherent sheaf on an affine scheme with higher cohomology. | literature-derived | not-applicable |
| `cex-proper-finiteness-fails-noncoherent` | cex | Use an infinite direct sum of coherent sheaves. | literature-derived | not-applicable |
| `ex-upper-semicontinuity-jumping-h0` | ex | Give a family of line bundles/sections with an upper jump in $h^0$. | literature-derived | not-applicable |
| `ex-flat-family-constant-euler-variable-h0-h1` | ex | Check compensating jumps of $h^0$ and $h^1$. | literature-derived | not-applicable |
| `ex-projective-zero-space-cohomology` | ex | Verify $\mathbf P^0_S=S$ makes the formula reduce to affine-base cohomology. | ai-generated | not-applicable |
| `cex-fixed-affine-cover-nonseparated-intersections` | cex | On a nonseparated scheme, show affine-cover intersections need not be affine, so the simple Čech proof requires separatedness. | literature-derived | not-applicable |

---

## AV-23. Smooth proper curves, divisors, genus, and ramification

`requires`: `AV-7`, `AV-15`--`AV-22`. Pair sources: Fulton, *Algebraic
Curves*, Ch. 6 §§6.1--6.6, pp. 67--80, Ch. 7 §§7.1--7.4,
pp. 81--96, and Ch. 8 §§8.1--8.5, pp. 97--107; Vakil Ch. 21
§§21.1--21.9, pp. 431--460; Gao--Zhang Ch. 7 §§7.1--7.3,
pp. 82--89; Stacks Project, *Algebraic Curves* §§53.2--53.3,
§§53.6--53.13.

### Proposed A-page inventory (36 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-algebraic-curve-over-field` | def | Define a curve as a geometrically integral separated finite-type $k$-scheme of dimension one; smooth and proper remain extra adjectives. | literature-derived | not-applicable |
| `thm-curves-function-fields-equivalence` | thm | Relate smooth proper geometrically integral curves with dominant rational maps to transcendence-degree-one extensions $K/k$ in which $k$ is algebraically closed, including unique smooth projective models over a perfect field. | literature-derived | ai-altered |
| `lem-rational-map-smooth-curve-to-proper-scheme-extends` | lem | Use the DVR local rings and proper valuative criterion to extend a rational map across every missing closed point. | literature-derived | ai-altered |
| `cor-birational-smooth-proper-curves-isomorphic` | cor | Deduce a birational map between smooth proper curves is an isomorphism. | literature-derived | ai-altered |
| `thm-local-ring-smooth-curve-dvr` | thm | At every closed point of a smooth curve, identify the local ring as a DVR with uniformizer and order. | literature-derived | ai-altered |
| `def-divisor-smooth-proper-curve` | def | Define divisors as finite integer sums of closed points and reconcile Cartier and Weil notions. | literature-derived | not-applicable |
| `thm-cartier-weil-divisors-curves-agree` | thm | Prove every divisor on a smooth curve is Cartier and every line bundle has a divisor presentation. | literature-derived | ai-altered |
| `def-riemann-roch-space-of-divisor` | def | Define $L(D)=H^0(C,\mathcal O_C(D))=\{f:\operatorname{div}(f)+D\ge0\}\cup\{0\}$. | literature-derived | not-applicable |
| `def-complete-linear-system` | def | Define $\lvert D\rvert=\mathbf P(L(D))$ as effective divisors linearly equivalent to $D$, with empty system when $L(D)=0$. | literature-derived | not-applicable |
| `lem-effective-divisors-sections-mod-scalars` | lem | Prove nonzero sections of $\mathcal O(D)$ modulo $k^\times$ correspond to effective divisors linearly equivalent to $D$. | literature-derived | ai-altered |
| `def-base-point-linear-system` | def | Define base points and base-point-free divisors/line bundles. | literature-derived | not-applicable |
| `thm-base-point-free-linear-system-morphism` | thm | Construct $C\to\mathbf P^r$ from a base-point-free subspace and identify pullback of $\mathcal O(1)$. | literature-derived | ai-altered |
| `def-arithmetic-genus-proper-curve` | def | Define $g=h^1(C,\mathcal O_C)$ for a smooth proper geometrically connected curve. | literature-derived | not-applicable |
| `thm-h0-structure-sheaf-proper-curve` | thm | Prove $H^0(C,\mathcal O_C)=k$ under geometric connectedness. | literature-derived | ai-altered |
| `def-canonical-line-bundle-curve` | def | Define $\omega_C=\Omega^1_{C/k}$ for a smooth curve and canonical divisors from nonzero rational differentials. | literature-derived | not-applicable |
| `lem-rational-differential-divisor-well-defined-class` | lem | Show two nonzero rational differentials differ by a rational function and give linearly equivalent canonical divisors. | literature-derived | ai-altered |
| `def-nonconstant-morphism-curves-degree` | def | Define $\deg f=[k(C):f^*k(D)]$ for a nonconstant morphism of smooth proper curves. | literature-derived | not-applicable |
| `thm-nonconstant-morphism-proper-curves-finite-surjective` | thm | Prove a nonconstant morphism of proper integral curves is finite and surjective. | literature-derived | ai-altered |
| `def-ramification-index-curve-map` | def | For $p\mapsto q$, define $e_p$ by $\operatorname{ord}_p(f^*t_q)$, independent of uniformizer. | literature-derived | not-applicable |
| `lem-fibre-degree-sum-ramification-residue` | lem | Prove $\sum_{p\mapsto q}e_p[\kappa(p):\kappa(q)]=\deg f$. | literature-derived | ai-altered |
| `def-ramification-and-branch-points` | def | Define ramification points by $e_p>1$ and branch points as their images, with inseparability caveat. | literature-derived | not-applicable |
| `def-different-divisor-curve-map` | def | Define the different/ramification divisor for a finite generically separable morphism through relative differentials. | literature-derived | not-applicable |
| `thm-canonical-bundle-ramification-formula` | thm | Prove $\omega_C\cong f^*\omega_D\otimes\mathcal O_C(R)$ for a finite separable map of smooth proper curves. | literature-derived | ai-altered |
| `thm-riemann-hurwitz` | thm | Taking degrees, prove $2g(C)-2=\deg(f)(2g(D)-2)+\deg R$, after `AV-25` establishes $\deg\omega=2g-2`; record the forward dependency as non-load-bearing until then. | literature-derived | not-supplied |
| `lem-unramified-cover-curves-genus-relation` | lem | For finite étale $f$, specialize Riemann--Hurwitz to $2g(C)-2=\deg(f)(2g(D)-2)$. | literature-derived | not-supplied |
| `thm-degree-positive-line-bundle-sections-zero-bound` | thm | Prove a line bundle of negative degree has no nonzero global sections. | literature-derived | ai-altered |
| `lem-degree-effective-divisor-nonnegative` | lem | Show effective divisors have nonnegative degree, zero only for the empty divisor over a field. | literature-derived | ai-altered |
| `thm-high-degree-line-bundle-basepoint-free-preview` | thm | State the degree $\ge2g$ base-point-free bound, proved after Riemann--Roch/duality in `AV-25`. | literature-derived | not-supplied |
| `thm-high-degree-line-bundle-very-ample-preview` | thm | State the degree $\ge2g+1$ very-ample bound, proved after Riemann--Roch/duality in `AV-25`. | literature-derived | not-supplied |
| `def-gonality-curve` | def | Define gonality as the least degree of a nonconstant map to $\mathbf P^1$; records a concrete consumer of linear systems. | literature-derived | not-applicable |
| `lem-function-with-poles-defines-map-p1` | lem | A nonconstant $f\in k(C)$ defines a finite morphism $C\to\mathbf P^1$ whose pole divisor is the fibre at infinity. | literature-derived | ai-altered |
| `def-geometric-genus-singular-curve` | def | Define geometric genus as the genus of the smooth proper normalization. | literature-derived | not-applicable |
| `lem-normalization-lowers-arithmetic-genus-delta` | lem | For a reduced proper curve, relate arithmetic and geometric genus through the finite-length normalization quotient. | literature-derived | ai-altered |
| `def-delta-invariant-curve-singularity` | def | Define $\delta_p=\dim_k(\widetilde{\mathcal O}_{C,p}/\mathcal O_{C,p})$ over algebraically closed $k$. | literature-derived | not-applicable |
| `thm-plane-curve-arithmetic-genus` | thm | For a degree-$d$ plane curve, compute $p_a=(d-1)(d-2)/2$ from the hypersurface cohomology sequence. | literature-derived | ai-altered |
| `cor-plane-curve-geometric-genus-delta-correction` | cor | For a reduced plane curve with isolated singularities, relate normalization genus to arithmetic genus and $\delta$-invariants under the stated connectivity hypotheses. | literature-derived | ai-altered |

### Proposed B-page inventory (12 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-projective-line-divisors-linear-systems` | ex | Compute $L(d\infty)$ explicitly and the associated Veronese maps. | literature-derived | not-applicable |
| `ex-smooth-conic-is-projective-line-with-point` | ex | Parametrize a smooth conic with a $k$-point and compare degree-two line bundles. | literature-derived | not-applicable |
| `ex-hyperelliptic-curve-double-cover` | ex | Locate ramification of $y^2=f(x)$ in characteristic not two, including infinity. | literature-derived | not-applicable |
| `cex-inseparable-map-riemann-hurwitz-naive-fails` | cex | Use Frobenius to show the separability hypothesis cannot be dropped. | literature-derived | not-applicable |
| `ex-nodal-cubic-normalization-genus` | ex | Compute arithmetic genus one, delta one, and geometric genus zero. | literature-derived | not-applicable |
| `ex-cuspidal-cubic-normalization-genus` | ex | Compute the cusp delta invariant and normalization. | literature-derived | not-applicable |
| `cex-rational-map-singular-curve-not-extend-uniquely` | cex | Show why smooth/normal source is required for extension across a point. | literature-derived | not-applicable |
| `ex-divisor-degree-over-nonalgebraically-closed-field` | ex | Include residue degrees in a closed-point divisor. | literature-derived | not-applicable |
| `ex-basepoint-linear-system` | ex | Give a two-dimensional section space with and without a base point. | ai-generated | not-applicable |
| `cex-degree-zero-line-bundle-no-section` | cex | A nontrivial degree-zero line bundle has no nonzero section; stored for post-RR proof. | literature-derived | not-applicable |
| `ex-ramification-power-map-projective-line` | ex | Compute ramification indices of $[s:t]\mapsto[s^n:t^n]$ in tame characteristic. | literature-derived | not-applicable |
| `ex-plane-quartic-genus-three-smooth` | ex | Apply the plane arithmetic-genus formula and zero delta correction. | literature-derived | not-applicable |

**Ordering note.** The two high-degree bounds and Riemann--Hurwitz degree
formula are statements placed for a curve-theory reader but explicitly have
`not-supplied` proofs here. They are not dependency targets until `AV-25`
supplies the proofs; the builder may rehome the final theorem items to
`AV-25` while leaving only non-load-bearing previews here.

---

## AV-24. Riemann--Roch for curves via Euler characteristics

`requires`: `AV-20`--`AV-23`. This pair proves the Euler-characteristic form
without using Serre duality; `AV-25` then derives the symmetric classical form.
Pair sources: Fulton Ch. 8 §§8.1--8.6, pp. 97--108; Artin Ch. 8 §§8.1--8.4,
PDF pp. 160--171; Vakil Ch. 21 §§21.5--21.9, pp. 444--460; Stacks Project,
*Algebraic Curves* §§53.3, 53.5--53.8.

### Proposed A-page inventory (31 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-little-l-divisor` | def | Write $\ell(D)=\dim_kL(D)=h^0(C,\mathcal O_C(D))$ for a smooth proper geometrically connected curve. | literature-derived | not-applicable |
| `lem-riemann-roch-space-finite-dimensional` | lem | Deduce $L(D)$ is finite-dimensional from proper coherent cohomology. | literature-derived | ai-altered |
| `lem-divisor-order-monotonicity-sections` | lem | If $D\le E$, embed $L(D)\hookrightarrow L(E)$ and identify the quotient support. | literature-derived | ai-altered |
| `lem-add-one-point-exact-sequence-line-bundle` | lem | For closed $p$, derive $0\to\mathcal O(D)\to\mathcal O(D+p)\to\mathcal O(D+p)\!\restriction_p\to0$. | literature-derived | ai-altered |
| `lem-add-one-point-euler-characteristic` | lem | Prove $\chi(\mathcal O(D+p))-\chi(\mathcal O(D))=[\kappa(p):k]$. | literature-derived | ai-altered |
| `lem-divisor-decomposition-positive-negative-points` | lem | Express every divisor as a finite signed sum of closed points and show point-addition induction is order-independent. | literature-derived | ai-altered |
| `thm-euler-characteristic-degree-shift-curve` | thm | Prove $\chi(\mathcal O(D))-\chi(\mathcal O)=\deg D$ for every divisor. | literature-derived | ai-altered |
| `def-genus-euler-characteristic-curve` | def | Reconcile $g=h^1(\mathcal O_C)$ with $\chi(\mathcal O_C)=1-g$ using $H^0=k$. | literature-derived | not-applicable |
| `thm-riemann-roch-euler-characteristic-curve` | thm | Prove $\chi(C,\mathcal O_C(D))=\deg D+1-g$. | literature-derived | ai-altered |
| `cor-riemann-inequality-divisor-sections` | cor | Deduce $\ell(D)\ge\deg D+1-g$. | literature-derived | ai-altered |
| `cor-negative-degree-no-sections-rr` | cor | Recover $\ell(D)=0$ for $\deg D<0$ by the effective-divisor argument, not by the inequality alone. | literature-derived | ai-altered |
| `lem-h1-stabilizes-downward-point-removal` | lem | Analyze how $h^1(\mathcal O(D))$ changes when one point is added; prepares eventual vanishing without duality. | literature-derived | ai-altered |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | thm | Use Serre vanishing for one ample divisor and point-by-point comparison to show $H^1(C,\mathcal O(D))=0$ for sufficiently large degree in a fixed class direction. | literature-derived | ai-altered |
| `cor-riemann-theorem-large-degree` | cor | For sufficiently positive $D$, obtain $\ell(D)=\deg D+1-g$. | literature-derived | ai-altered |
| `cor-existence-rational-function-bounded-pole` | cor | For any closed point $p$, choose $n$ large enough that $L(np)$ has dimension at least two and obtain a nonconstant function with only a pole at $p$. | literature-derived | ai-altered |
| `cor-smooth-proper-curve-finite-map-projective-line` | cor | Convert that rational function into a finite morphism $C\to\mathbf P^1$. | literature-derived | ai-altered |
| `thm-genus-zero-point-implies-projective-line` | thm | If $C$ has genus zero and a degree-one divisor/point, construct a degree-one map and prove $C\cong\mathbf P^1$. | literature-derived | ai-altered |
| `cor-picard-projective-line-integers` | cor | Classify line bundles on $\mathbf P^1$ by degree: $\operatorname{Pic}(\mathbf P^1)\cong\mathbf Z$. | literature-derived | ai-altered |
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | lem | Twist a vector bundle until it first has a section and use its zero divisor to produce a line subbundle of maximal degree. | literature-derived | ai-altered |
| `lem-vector-bundle-p1-maximal-line-quotient-locally-free` | lem | Show the quotient by a maximal-degree line subbundle is locally free and reduce rank by one. | literature-derived | ai-altered |
| `lem-vector-bundle-p1-extension-splits` | lem | Use the cohomology of twists to split the extension after ordering the line-bundle degrees. | literature-derived | ai-altered |
| `thm-birkhoff-grothendieck-vector-bundles-p1` | thm | Prove every vector bundle on $\mathbf P^1_k$ is a direct sum of line bundles $\mathcal O(a_i)$, uniquely up to permutation. | literature-derived | ai-altered |
| `lem-degree-zero-effective-divisor-empty` | lem | On a geometrically integral proper curve, an effective divisor of degree zero is empty. | literature-derived | ai-altered |
| `cor-degree-zero-line-bundle-section-trivial` | cor | A degree-zero line bundle with a nonzero section is trivial. | literature-derived | ai-altered |
| `cor-nontrivial-degree-zero-line-bundle-no-sections` | cor | Supply the promised proof for the `AV-23` B counterexample. | literature-derived | ai-altered |
| `def-index-speciality-divisor` | def | Define the index of speciality $i(D)=h^1(C,\mathcal O(D))$ without yet identifying its dual space. | literature-derived | not-applicable |
| `thm-riemann-roch-as-l-minus-index` | thm | Rewrite the theorem as $\ell(D)-i(D)=\deg D+1-g$. | literature-derived | ai-altered |
| `def-nonspecial-divisor` | def | Define $D$ nonspecial when $i(D)=0$. | literature-derived | not-applicable |
| `lem-large-positive-divisors-nonspecial` | lem | Show sufficiently positive divisors are nonspecial. | literature-derived | ai-altered |
| `cor-dimension-complete-linear-system` | cor | When nonempty, compute $\dim\lvert D\rvert=\ell(D)-1$ and hence the nonspecial value $\deg D-g$. | literature-derived | ai-altered |
| `rem-sharp-degree-thresholds-wait-for-duality` | rem | Record that $2g-2$, $2g$, and $2g+1$ bounds require $\deg\omega_C=2g-2$ and duality, supplied next. | literature-derived | not-applicable |

### Proposed B-page inventory (10 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-riemann-roch-projective-line-divisor` | ex | Compute $\ell(d\infty)=\max(d+1,0)$ and $h^1$ for every integer $d$. | literature-derived | not-applicable |
| `ex-genus-zero-conic-with-rational-point` | ex | Use a degree-one divisor to recover a conic parametrization. | literature-derived | not-applicable |
| `cex-genus-zero-without-rational-point-not-p1` | cex | Over a non-algebraically-closed field, give a genus-zero conic with no degree-one point. | literature-derived | not-applicable |
| `ex-adding-point-section-dimension-jump` | ex | Compute whether $\ell(D+p)-\ell(D)$ is zero or the residue degree in examples. | ai-generated | not-applicable |
| `cex-riemann-inequality-not-equality-special-divisor` | cex | Use the zero divisor on a positive-genus curve to show $h^1$ contributes. | literature-derived | not-applicable |
| `ex-degree-zero-principal-divisor` | ex | Check both Euler characteristic and degree for a rational function divisor. | literature-derived | not-applicable |
| `ex-linear-system-poles-at-one-point` | ex | Exhibit the finite map to $\mathbf P^1$ from two sections of $\mathcal O(np)$. | literature-derived | not-applicable |
| `ex-nonspecial-large-divisor` | ex | Choose a sufficiently positive divisor and verify the numerical dimension formula. | ai-generated | not-applicable |
| `cex-negative-degree-rr-right-side-negative` | cex | Show Riemann--Roch remains consistent because $h^1$ compensates for negative degree. | literature-derived | not-applicable |
| `ex-empty-divisor-euler-characteristic` | ex | Check $D=0$ gives $1-g$ and handles genus zero and one boundaries. | ai-generated | not-applicable |

---

## AV-25. Residues, Serre duality for curves, and the full Riemann--Roch theorem

`requires`: `AV-16`, `AV-21`--`AV-24`; derived-functor/Ext formalism is cited
from homological algebra, while this page proves the curve pairing concretely.
Pair sources: Vakil Ch. 27 §§27.1--27.6, pp. 567--579; MIT 18.725 Lectures
24--25, consolidated-notes PDF pp. 55--62; Fulton Ch. 8 §§8.4--8.6,
pp. 104--112; Gao--Zhang Ch. 7 §§7.4--7.5, pp. 89--93.

### Proposed A-page inventory (34 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-residue-rational-differential-curve-point` | def | For a uniformizer $t$, define $\operatorname{res}_p(\sum a_nt^n dt)=\operatorname{Tr}_{\kappa(p)/k}(a_{-1})$. | literature-derived | not-applicable |
| `lem-residue-independent-uniformizer` | lem | Prove the residue is unchanged by replacing the uniformizer. | literature-derived | ai-altered |
| `lem-residue-exact-differential-zero` | lem | Show $\operatorname{res}_p(df)=0$, with the characteristic caveat handled through formal Laurent series. | literature-derived | ai-altered |
| `thm-global-residue-theorem-algebraic-curve` | thm | Prove $\sum_p\operatorname{res}_p(\omega)=0$ for a rational differential on a smooth proper curve. | literature-derived | ai-altered |
| `def-principal-parts-sheaf-line-bundle-curve` | def | Define rational sections modulo regular sections and their finite-support principal parts. | literature-derived | not-applicable |
| `lem-principal-parts-cech-h1-presentation` | lem | For an affine cover of a curve, represent $H^1(C,\mathcal L)$ by principal parts modulo global rational and local regular sections. | literature-derived | ai-altered |
| `def-residue-pairing-principal-parts` | def | Pair a rational $\mathcal L$-principal part with a rational $\omega_C\otimes\mathcal L^{-1}$ section by summed residues. | literature-derived | not-applicable |
| `lem-residue-pairing-descends-cohomology` | lem | Use the global residue theorem to show the pairing kills rational and regular representatives. | literature-derived | ai-altered |
| `lem-residue-pairing-functorial-line-bundle` | lem | Prove naturality under maps of line bundles and compatibility with connecting homomorphisms. | literature-derived | ai-altered |
| `lem-local-residue-annihilator-regular-sections` | lem | Identify the annihilator of local regular differentials/sections inside Laurent principal parts. | literature-derived | ai-altered |
| `lem-global-residue-pairing-injective-left` | lem | Show a nonzero global section of $\omega_C\otimes\mathcal L^{-1}$ detects some $H^1(\mathcal L)$ class. | literature-derived | ai-altered |
| `lem-global-residue-pairing-dimension-balance` | lem | Use finite-dimensionality and induction on divisors to prove the two sides have equal dimension. | literature-derived | ai-altered |
| `thm-serre-duality-curves-line-bundles` | thm | Establish a perfect pairing $H^1(C,\mathcal L)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\to k$. | literature-derived | ai-altered |
| `thm-serre-duality-curves-vector-bundles` | thm | Extend to finite locally free $\mathcal E$: $H^1(C,\mathcal E)^\vee\cong H^0(C,\mathcal E^\vee\otimes\omega_C)$. | literature-derived | ai-altered |
| `thm-serre-duality-curves-coherent-sheaves` | thm | State the functorial $\operatorname{Ext}$ form for coherent sheaves, citing Ext machinery and proving the locally free reduction. | literature-derived | ai-altered |
| `cor-h1-line-bundle-dual-sections` | cor | Identify $h^1(\mathcal O(D))=\ell(K-D)$. | literature-derived | ai-altered |
| `thm-full-riemann-roch-divisor` | thm | Combine `AV-24` with duality to prove $\ell(D)-\ell(K-D)=\deg D+1-g$. | literature-derived | ai-altered |
| `cor-canonical-degree-two-g-minus-two` | cor | Put $D=K$ and use $h^0(\mathcal O)=1$ to prove $\deg K=2g-2$. | literature-derived | ai-altered |
| `cor-h0-canonical-differentials-genus` | cor | Prove $h^0(C,\omega_C)=g$. | literature-derived | ai-altered |
| `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` | cor | If $\deg\mathcal L>2g-2$, prove $H^1(C,\mathcal L)=0$. | literature-derived | ai-altered |
| `cor-rr-exact-high-degree-formula` | cor | For $\deg D>2g-2$, obtain $\ell(D)=\deg D+1-g$. | literature-derived | ai-altered |
| `thm-degree-two-g-line-bundle-basepoint-free` | thm | If $\deg\mathcal L\ge2g$, prove evaluation at every point is surjective by duality and the point exact sequence. | literature-derived | ai-altered |
| `thm-degree-two-g-plus-one-line-bundle-very-ample` | thm | If $\deg\mathcal L\ge2g+1$, prove sections separate points and tangent vectors, hence define a closed immersion. | literature-derived | ai-altered |
| `cor-projective-embedding-every-smooth-proper-curve` | cor | Deduce every smooth proper curve has a projective embedding. | literature-derived | ai-altered |
| `thm-canonical-map-nonhyperelliptic-curve` | thm | For $g\ge2$, state the canonical-map embedding criterion and isolate the hyperelliptic exception. | literature-derived | ai-altered |
| `def-hyperelliptic-curve` | def | Define hyperelliptic as admitting a degree-two morphism to $\mathbf P^1$. | literature-derived | not-applicable |
| `thm-adjunction-smooth-plane-curve` | thm | For a smooth degree-$d$ plane curve, prove $\omega_C\cong\mathcal O_C(d-3)$ via the conormal sequence and determinant. | literature-derived | ai-altered |
| `cor-genus-degree-smooth-plane-curve` | cor | Deduce $g=(d-1)(d-2)/2$ from adjunction or arithmetic genus. | literature-derived | ai-altered |
| `thm-riemann-hurwitz-complete` | thm | Complete the `AV-23` proof using $\deg\omega=2g-2$ and the canonical ramification formula. | literature-derived | ai-altered |
| `cor-unramified-cover-curves-genus-complete` | cor | Complete the étale-cover genus relation from `AV-23`. | literature-derived | ai-altered |
| `thm-genus-one-canonical-bundle-trivial` | thm | For a genus-one smooth proper curve with a rational point, prove $\omega_C\cong\mathcal O_C$. | literature-derived | ai-altered |
| `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | cor | Embed a genus-one curve with a point as a plane cubic using a degree-three line bundle. | literature-derived | ai-altered |
| `rem-duality-trace-normalization` | rem | Fix the trace $H^1(C,\omega_C)\to k$ so the perfect pairing is canonical, not merely dimension equality. | literature-derived | not-applicable |
| `rem-general-serre-duality-deferred` | rem | Higher-dimensional dualizing complexes and Grothendieck duality are not smuggled into the curve theorem. | literature-derived | not-applicable |

### Proposed B-page inventory (11 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-residue-projective-line` | ex | Compute residues of $f(t)dt$ at finite points and infinity and verify their sum. | literature-derived | not-applicable |
| `ex-serre-duality-projective-line-twists` | ex | Pair the monomial bases of $H^1(\mathcal O(-d-2))$ and $H^0(\mathcal O(d))$. | literature-derived | not-applicable |
| `ex-full-rr-projective-line` | ex | Verify $\ell(D)-\ell(K-D)=\deg D+1$ for all degrees. | literature-derived | not-applicable |
| `ex-genus-one-rr-degree-positive` | ex | Show a positive-degree line bundle on a genus-one curve has $h^0=\deg$. | literature-derived | not-applicable |
| `ex-plane-cubic-canonical-trivial` | ex | Apply adjunction with $d=3$. | literature-derived | not-applicable |
| `ex-plane-quartic-canonical-hyperplane` | ex | Apply adjunction with $d=4$ and recover genus three. | literature-derived | not-applicable |
| `cex-canonical-map-hyperelliptic-not-embedding` | cex | Show the canonical map factors through the degree-two hyperelliptic map. | literature-derived | not-applicable |
| `cex-degree-two-g-minus-one-not-always-basepoint-free` | cex | Record a sharpness example for the safe $2g$ bound. | literature-derived | not-applicable |
| `cex-degree-two-g-not-always-very-ample` | cex | Record a sharpness example for the safe $2g+1$ bound. | literature-derived | not-applicable |
| `ex-riemann-hurwitz-double-cover` | ex | Compute genus from a tame double cover with $2r$ simple branch points. | literature-derived | not-applicable |
| `ex-residue-pairing-one-cocycle` | ex | Carry one explicit principal part through the duality pairing. | ai-generated | not-applicable |

---

## AV-26. Blowups, exceptional divisors, and strict transforms

`requires`: `AV-13`, `AV-15`, `AV-18`--`AV-20`, and Rees/associated-graded
algebra by citation. Pair sources: Vakil Ch. 19 §§19.1--19.4,
pp. 379--395; Milne Ch. 8 §h, pp. 194--197; MIT 18.725 Lecture 9,
consolidated-notes PDF pp. 23--25; Stacks Project, *Divisors* §§31.33--31.36
and *More on Morphisms* §§37.16--37.18.

### Proposed A-page inventory (32 items)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `def-rees-algebra-ideal-sheaf` | def | Define $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ for a quasi-coherent finite-type ideal. | literature-derived | not-applicable |
| `def-blowup-scheme-along-ideal` | def | Define $\operatorname{Bl}_{\mathcal I}X=\underline{\operatorname{Proj}}_X\mathcal R(\mathcal I)$. | literature-derived | not-applicable |
| `lem-blowup-local-on-base-scheme` | lem | Show blowup restricts to blowup on every open subset of $X$. | literature-derived | ai-altered |
| `thm-affine-blowup-standard-charts` | thm | For $I=(f_0,\ldots,f_r)\subset A$, cover the blowup by $\operatorname{Spec}A[I/f_i]$ and identify overlap maps. | literature-derived | ai-altered |
| `lem-blowup-independent-ideal-generators` | lem | Prove the chart construction is independent of a chosen finite generating set. | literature-derived | ai-altered |
| `def-exceptional-divisor-blowup` | def | Define the exceptional closed subscheme as the inverse image of $V(\mathcal I)$. | literature-derived | not-applicable |
| `thm-pullback-center-ideal-invertible` | thm | Prove $\mathcal I\mathcal O_{\operatorname{Bl}}\cong\mathcal O(1)$ or $\mathcal O(-E)$ according to the recorded Proj convention; fix the sign explicitly. | literature-derived | ai-altered |
| `thm-blowup-universal-property` | thm | Any $Y\to X$ for which $\mathcal I\mathcal O_Y$ is invertible factors uniquely through the blowup. | literature-derived | ai-altered |
| `cor-blowup-unique-up-to-unique-isomorphism` | cor | Deduce independence from the Rees presentation. | literature-derived | ai-altered |
| `lem-blowup-isomorphism-off-center` | lem | Prove the blowup is an isomorphism over $X\setminus V(\mathcal I)$. | literature-derived | ai-altered |
| `thm-blowup-projective` | thm | Prove $\operatorname{Bl}_{\mathcal I}X\to X$ is projective for finite-type $\mathcal I$, hence proper. | literature-derived | ai-altered |
| `cor-blowup-birational-integral-scheme` | cor | If $X$ is integral and the centre avoids the generic point, prove the blowup is birational. | literature-derived | ai-altered |
| `thm-blowup-base-change-flat` | thm | Prove blowup commutes with flat base change and state why arbitrary base change can fail. | literature-derived | ai-altered |
| `def-strict-transform-closed-subscheme` | def | Define the strict transform as the closure of the inverse image away from the centre, with scheme structure. | literature-derived | not-applicable |
| `def-total-transform-divisor` | def | Define total transform by pullback when the divisor is Cartier and distinguish it from strict transform. | literature-derived | not-applicable |
| `lem-total-transform-strict-plus-exceptional-multiplicity` | lem | For a hypersurface of multiplicity $m$ along a smooth centre, compute total transform as strict transform plus $mE$ under stated hypotheses. | literature-derived | ai-altered |
| `thm-exceptional-divisor-normal-cone-proj` | thm | Identify $E\cong\operatorname{Proj}_Z\bigoplus I^n/I^{n+1}$, the projectivized normal cone. | literature-derived | ai-altered |
| `cor-exceptional-divisor-smooth-center-normal-bundle` | cor | For a regular immersion, identify $E\cong\mathbf P(N_{Z/X})$ with the quotient convention. | literature-derived | ai-altered |
| `thm-blowup-effective-cartier-divisor-isomorphism` | thm | If the centre ideal is invertible, prove the blowup is isomorphic to $X$. | literature-derived | ai-altered |
| `thm-blowup-smooth-surface-point-charts` | thm | Blow up a smooth surface at a rational point, prove the result is smooth, and identify $E\cong\mathbf P^1$. | literature-derived | ai-altered |
| `lem-exceptional-curve-normal-bundle-minus-one` | lem | Compute $\mathcal O_E(E)\cong\mathcal O_{\mathbf P^1}(-1)$. | literature-derived | ai-altered |
| `lem-blowup-plane-origin-incidence-equations` | lem | Realize $\operatorname{Bl}_0\mathbf A^2$ inside $\mathbf A^2\times\mathbf P^1$ by $xv=yu$. | literature-derived | ai-altered |
| `thm-blowup-separates-plane-curve-tangent-directions` | thm | Show points of the strict transform above a plane-curve singularity correspond to tangent-cone directions with multiplicity data. | literature-derived | ai-altered |
| `lem-plane-curve-multiplicity-transform-chart` | lem | Compute the strict-transform equation by dividing the total transform by the maximal exceptional power. | literature-derived | ai-altered |
| `thm-resolution-plane-curves-by-point-blowups` | thm | State embedded resolution of reduced plane curves by finitely many point blowups; proof is not supplied because its termination invariant exceeds this page's prerequisites. | literature-derived | not-supplied |
| `def-blowup-fractional-ideal` | def | Explain invariance under multiplying an ideal by an invertible ideal/fractional unit in the integral setting. | literature-derived | not-applicable |
| `lem-blowup-power-of-ideal-same` | lem | Prove $\operatorname{Bl}_{I^d}X\cong\operatorname{Bl}_IX$ using Veronese invariance. | literature-derived | ai-altered |
| `lem-blowup-reduced-integral-under-domain-rees` | lem | For integral $X$ and nonzero ideal, prove the Rees algebra charts are domains, hence the blowup is integral. | literature-derived | ai-altered |
| `thm-blowup-closed-immersion-transform-universal` | thm | Characterize strict transform as the dominant component/closure satisfying the universal property after removing components supported over the centre. | literature-derived | ai-altered |
| `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup` | cor | A rational map defined by sections becomes a morphism after blowing up its base ideal. | literature-derived | ai-altered |
| `rem-blowup-does-not-mean-delete-point` | rem | Record that the centre is replaced by projectivized normal directions and the map remains proper. | literature-derived | not-applicable |
| `rem-resolution-higher-dimension-not-claimed` | rem | Deny any inference from these constructions to general resolution of singularities. | literature-derived | not-applicable |

### Proposed B-page inventory (12 dependency leaves)

| id | kind | statement and purpose | statement provenance | proof provenance |
|---|---|---|---|---|
| `ex-blowup-affine-plane-origin-two-charts` | ex | Compute both affine charts, transition, exceptional line, and projection. | literature-derived | not-applicable |
| `ex-blowup-affine-three-space-origin-exceptional-p2` | ex | Identify the exceptional divisor as $\mathbf P^2$. | literature-derived | not-applicable |
| `ex-blowup-principal-ideal-isomorphism` | ex | Verify directly that blowing up $(f)$ for a nonzerodivisor gives no change. | literature-derived | not-applicable |
| `ex-blowup-ideal-power-same-proj` | ex | Compare Rees algebras for $I$ and $I^2$ via a Veronese subalgebra. | literature-derived | not-applicable |
| `ex-strict-transform-cusp-first-blowup` | ex | Compute the strict transform of $y^2=x^3$ and its intersection with the exceptional divisor. | literature-derived | not-applicable |
| `ex-strict-transform-node-separates-branches` | ex | Show the two tangent directions meet the exceptional line at distinct points. | literature-derived | not-applicable |
| `ex-blowup-rational-map-p1` | ex | Resolve $[x:y]$ at the affine-plane origin by the blowup. | literature-derived | not-applicable |
| `cex-blowup-arbitrary-base-change-failure` | cex | Give a nonflat base change for which the Rees powers acquire the wrong torsion. | literature-derived | not-applicable |
| `cex-blowup-singular-center-not-smooth` | cex | Show blowing up a singular/nonregular centre need not yield a smooth exceptional divisor or total space. | literature-derived | not-applicable |
| `cex-normalization-not-blowup-and-blowup-not-normalization` | cex | Contrast finite normalization with projective blowup on the cusp. | literature-derived | not-applicable |
| `ex-total-versus-strict-transform-line-through-origin` | ex | Compute the exceptional component in the total transform and remove it for the strict transform. | literature-derived | not-applicable |
| `ex-empty-center-blowup-identity` | ex | Verify blowing up the unit ideal/empty centre is the identity. | ai-generated | not-applicable |

**Last-page status.** `AV-26` is the final AV pair. The embedded resolution
statement is deliberately `not-supplied` and is not a dependency target; the
track supplies the blowup construction and local calculations, not a hidden
proof of resolution in every characteristic or dimension.

---

## Source corpus and accessibility record

All links below were opened to mathematical content, not inferred from a
catalogue entry. “PDF pages” means the displayed PDF page index unless the
source itself supplies printed pagination. The Stacks Project has stable tags
but no fixed pagination, so section/tag ranges are exact locators.

| code | full treatment obtained and URL | exact range read | register and access finding |
|---|---|---|---|
| V | Ravi Vakil, [*Foundations of Algebraic Geometry* / early author-hosted *Rising Sea* draft](https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf) | Ch. 3 §§3.1--3.7 pp. 59--80; Chs. 4--11 §§4.1--11.3 pp. 85--246; Chs. 12--20 §§12.1--20.8 pp. 249--430; Ch. 21 §§21.1--21.9 pp. 431--460; Ch. 23 §§23.1--23.5 pp. 473--499; Ch. 24 §§24.4--24.5 pp. 514--518; Chs. 25--27 §§25.1--27.6 pp. 519--579 | Full author-hosted scheme treatment. The PDF is a complete early public draft, not a publisher preview. |
| M | J. S. Milne, [*Algebraic Geometry* v6.10](https://www.jmilne.org/math/CourseNotes/AG.pdf), with official [course-note supplements](https://www.jmilne.org/math/CourseNotes/ag.html) | Main Ch. 2 §§a--m pp. 36--58; Ch. 3 §§a--l pp. 59--80; Ch. 4 §§a--j pp. 81--99; Ch. 5 §§a--r pp. 100--129; Ch. 6 §§a--q pp. 130--160; Ch. 7 §§a--h pp. 161--175; Ch. 8 §§a--h pp. 176--197; Ch. 9 §§a--f pp. 198--220. AG10 §§a--p pp. 2--38; AG12 pp. 1--9; AG13 pp. 1--8; AG14 pp. 1--3 | Full author-hosted classical treatment plus scheme/divisor/coherent supplements; explicit author copyright and personal-copy permission. |
| S | [The Stacks Project](https://stacks.math.columbia.edu/browse) | *Sheaves on Spaces* §§6.2--6.33; *Cohomology of Sheaves* §§20.2--20.15, 20.20, 20.30--20.31; *Schemes* §§26.2--26.24; *Constructions* §§27.2--27.21; *Properties* §§28.2--28.26; *Morphisms* §§29.2--29.45; *Cohomology of Schemes* §§30.2--30.19; *Divisors* §§31.13--31.36; *Varieties* §§33.2--33.44; *More on Morphisms* §§37.16--37.18; *Étale Morphisms* §§41.11--41.18; *Algebraic Curves* §§53.2--53.13 | Full open canonical scheme reference, read by stable chapter/section tags. |
| GZ | Jiahui Gao and Shouwu Zhang, [*Lectures on Algebraic Geometry*](https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf) | Ch. 2 §§2.1--2.5 pp. 14--19; Ch. 3 §§3.1--3.8 pp. 20--38; Ch. 4 §§4.1--4.5 pp. 39--48; Ch. 5 §§5.1--5.6 pp. 49--63; Ch. 6 §§6.1--6.6 pp. 64--81; Ch. 7 §§7.1--7.5 pp. 82--93; Ch. 8 §§8.1--8.7 pp. 95--106 (harvested but mostly declined) | Complete author/institution-hosted scheme and curve treatment. |
| A | Michael Artin, [MIT 18.721 *Introduction to Algebraic Geometry*](https://math.mit.edu/classes/18.721/ag-jul20.pdf) | Ch. 1 §§1.1--1.11 PDF pp. 4--35; Ch. 2 §§2.1--2.8 pp. 36--57; Ch. 3 §§3.1--3.6 pp. 58--79; Ch. 4 §§4.1--4.8 pp. 80--101; Ch. 5 §§5.1--5.8 pp. 102--119; Ch. 6 §§6.1--6.8 pp. 120--139; Ch. 7 §§7.1--7.8 pp. 140--159; Ch. 8 §§8.1--8.8 pp. 160--178 | Complete institutional classical-variety/curve course notes. |
| F | William Fulton, [*Algebraic Curves*](https://www.math.lsa.umich.edu/~wfulton/CurveBook.pdf) | Ch. 4 §§4.1--4.4 pp. 43--52; Ch. 5 §§5.1--5.6 pp. 53--66; Ch. 6 §§6.1--6.6 pp. 67--80; Ch. 7 §§7.1--7.4 pp. 81--96; Ch. 8 §§8.1--8.6 pp. 97--112 | Complete curve-specific author-released electronic edition; this is the required concrete curve treatment. |
| B | Roman Bezrukavnikov et al., [MIT 18.725 consolidated lecture notes](https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf) | Lectures 1--25, PDF pp. 2--62; especially L3--4 pp. 6--13, L9 pp. 23--25, L10--16 pp. 25--40, L18--20 pp. 42--48, L23--25 pp. 53--62 | Complete official MIT OCW graduate treatment, independently authored from Artin's course. |
| T | Jilong Tong, [*Introduction to Algebraic Geometry*](https://www.math.u-bordeaux.fr/~jtong/AG/NotesAG.pdf) | Ch. 1 §§1.1--1.3 pp. 11--28; Ch. 2 §§2.1--2.7 pp. 29--84; Ch. 3 §§3.1--3.3 pp. 85--95 | Complete author-hosted course notes. Not counted for Serre duality: its proof at p. 93 is explicitly unfinished. |
| Ar | Donu Arapura, [*Basic Algebraic Geometry*](https://www.math.purdue.edu/~arapura/preprints/algeom.pdf) | Ch. 1 §§1.1--1.7 pp. 3--14; Ch. 2 §§2.1--2.7 pp. 15--25; Ch. 3 §§3.1--3.3 pp. 26--29; Ch. 4 §§4.1--4.3 pp. 30--33; Ch. 5 §§5.1--5.4 pp. 34--40 | Complete author-hosted concise classical treatment; used as an independent check, not as a sole proof source. |
| K | Kiran Kedlaya, [MIT 18.726 lecture-note set](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/resources/lecture-notes/) | Complete packets “Schemes,” “Morphisms,” “Sheaves,” “Sheaves of modules,” “Sheaf cohomology,” “Spectral sequences and Čech cohomology,” “Čech cohomology and derived functors,” “Cohomology of quasicoherent sheaves,” “Cohomology of projective space,” “Divisors,” “Riemann--Roch,” “Dualizing sheaves and Riemann--Roch,” “Serre duality for projective space,” “Flat morphisms and descent,” and “Projective morphisms” (each packet 2--8 PDF pages) | Complete official institutional packet set; used chiefly to check cohomology and scheme sequencing. |

### Sources inspected but not counted as treatments

| source | reason for refusal |
|---|---|
| Hartshorne, *Algebraic Geometry* (Springer page/Google preview) | Commercial catalogue/limited preview, not a complete lawfully accessible text in this run. It influenced no source count. |
| Arapura, *Algebraic Geometry over the Complex Numbers* (Springer page) | The accessible page was publisher metadata/preview rather than the full text. Arapura's separate full basic notes are counted above; the commercial book is not. |
| Fulton--Lang, *Riemann--Roch Algebra* (Springer page) | Catalogue/preview only; no full authorized copy was used. |
| Gathmann, *Algebraic Geometry* and *Plane Algebraic Curves* | The author landing page and 2026 contents were visible, but the PDFs did not complete an accessibility check in this run. They are therefore not promoted into the matrix merely to fill cells. |
| Unattributed mirrors/scans of standard commercial books | Refused categorically because authorization could not be verified. |

The corpus therefore has **ten independently authored/institutional full
treatments across nine source hosts**, counting Milne's supplements with his
main notes and the two distinct MIT courses as independent treatments but one
host. It spans both demanded registers and includes Fulton plus multiple other
curve treatments.

## Per-pair source matrix

Every row has at least two independent full treatments. Abbreviations refer to
the corpus table; the locators repeat the exact portions read so the matrix is
auditable without inference.

| pair | treatment 1, exact range | treatment 2, exact range | additional independent check |
|---|---|---|---|
| AV-1 | M Ch. 2 pp. 36--58; Ch. 3 §§a--d pp. 59--66 | Ar Ch. 1 §§1.1--1.4 pp. 3--10 | A Ch. 2 §§2.2--2.5 pp. 36--50 |
| AV-2 | M Ch. 3 §§e--l pp. 66--80; Ch. 5 §§a--e pp. 100--108 | Ar Ch. 1 §§1.5--1.7 pp. 10--14; Ch. 3 pp. 26--29 | A Ch. 2 §2.7 pp. 51--55; Ch. 3 §3.4 pp. 65--71 |
| AV-3 | M Ch. 6 §§a--i pp. 130--146 | Ar Ch. 2 §§2.1--2.5 pp. 15--22 | A Ch. 3 §§3.1--3.2, 3.4 pp. 58--72 |
| AV-4 | V Ch. 10 §§10.1--10.3 pp. 207--218; Ch. 17 §17.5 pp. 352--357 | A Ch. 3 §§3.3, 3.6 pp. 62--79 | B L3--4 pp. 6--13 |
| AV-5 | M Ch. 5 §§j--m pp. 117--123; Ch. 9 §§a--c pp. 198--210 | Ar Ch. 4 §§4.1--4.3 pp. 30--33 | A Ch. 4 §§4.5--4.7 pp. 91--98; Ch. 5 §§5.4--5.8 pp. 108--119 |
| AV-6 | M Ch. 4 §§a--j pp. 81--99 | Ar Ch. 5 §§5.1--5.4 pp. 34--40 | V Ch. 13 §§13.1--13.6 pp. 265--288 |
| AV-7 | M Ch. 8 §§a--g pp. 176--194 | A Ch. 4 §§4.2--4.7 pp. 82--98 | V Ch. 10 §§10.5--10.6 pp. 222--230 |
| AV-8 | F Ch. 5 §§5.1--5.6 pp. 53--66 | A Ch. 1 §§1.3--1.10 pp. 9--34 | B L15--16 pp. 35--40 |
| AV-9 | V Ch. 3 §§3.1--3.7 pp. 59--80 | S *Sheaves on Spaces* §§6.2--6.20 | M AG10 §a pp. 2--7; GZ Ch. 2 §§2.1--2.3 pp. 14--17 |
| AV-10 | S *Sheaves on Spaces* §§6.21--6.33, *Modules on Sites* §§18.2--18.12 | V Ch. 3 §§3.5--3.7 pp. 72--80; Ch. 17 §§17.1--17.3 pp. 343--349 | GZ Ch. 2 §§2.3--2.5 pp. 17--19 |
| AV-11 | V Ch. 4 §§4.1--4.7 pp. 85--110; Ch. 5 §§5.1--5.2 pp. 111--119 | GZ Ch. 3 §§3.1--3.8 pp. 20--38 | M AG10 §§a--b pp. 2--10; S *Schemes* §§26.2--26.6 |
| AV-12 | V Ch. 5 §§5.3--5.5 pp. 119--130; Ch. 6 pp. 131--145; Ch. 7 §§7.1--7.4 pp. 149--161 | GZ Ch. 4 §§4.1--4.5 pp. 39--48 | M AG10 §§c--d, p pp. 10--15, 36--39; S *Schemes* §§26.7--26.13, 26.20--26.24 |
| AV-13 | V Ch. 10 §§10.1--10.4 pp. 207--222 | S *Schemes* §§26.17--26.19; *Morphisms* §§29.15--29.20 | T Ch. 2 §2.5 pp. 62--66; A Ch. 5 §5.6 pp. 111--114 |
| AV-14 | V Ch. 11 §§11.1--11.2 pp. 231--239 | T Ch. 2 §2.6 pp. 67--71 | S *Schemes* §§26.21--26.23; *Morphisms* §§29.2--29.10, 29.43 |
| AV-15 | V Ch. 8 pp. 171--189; Ch. 11 §§11.2--11.3 pp. 236--246 | M Ch. 7 pp. 161--175; Ch. 8 §§d--f pp. 185--193 | T Ch. 2 §2.6 pp. 67--71; S *Morphisms* §§29.11, 29.42--29.45 |
| AV-16 | V Ch. 23 §§23.1--23.5 pp. 473--499 | B L18--20 pp. 42--48 | M AG10 §g pp. 20--21, AG14 pp. 1--3; S *Morphisms* §§29.32--29.34 |
| AV-17 | V Ch. 25 §§25.1--25.10 pp. 519--552; Ch. 26 §§26.1--26.6 pp. 553--566 | T Ch. 2 §2.7 pp. 72--84 | S *Morphisms* §§29.25--29.31, 29.35--29.37; *Étale* §§41.11--41.18 |
| AV-18 | V Ch. 14 §§14.1--14.8 pp. 291--315 | M AG13 pp. 1--8 | B L10--14 pp. 25--34; S *Properties* §§28.20--28.26 |
| AV-19 | V Ch. 16 pp. 329--342; Ch. 18 pp. 361--377 | GZ Ch. 5 §§5.1--5.6 pp. 49--63 | S *Constructions* §§27.8--27.21; M AG10 §i pp. 23--25 |
| AV-20 | V Ch. 15 §§15.1--15.3 pp. 317--327 | M AG12 pp. 1--9 | B L15 pp. 35--37; S *Divisors* §§31.14--31.30 |
| AV-21 | V Ch. 20 §§20.1--20.8 pp. 397--430 | S *Cohomology of Sheaves* §§20.2--20.15, 20.30--20.31 | GZ Ch. 6 §§6.1--6.4 pp. 64--75; K named complete Čech/sheaf packets |
| AV-22 | GZ Ch. 6 §§6.3--6.6 pp. 70--81 | A Ch. 7 §§7.1--7.7 pp. 140--158 | V Ch. 20 §§20.4--20.8 pp. 408--430, Ch. 24 §§24.4--24.5 pp. 514--518; S *Cohomology of Schemes* §§30.2--30.19 |
| AV-23 | F Chs. 6--8 §§6.1--8.5 pp. 67--107 | V Ch. 21 §§21.1--21.9 pp. 431--460 | GZ Ch. 7 §§7.1--7.3 pp. 82--89; S *Algebraic Curves* §§53.2--53.3, 53.6--53.13 |
| AV-24 | F Ch. 8 §§8.1--8.6 pp. 97--108 | A Ch. 8 §§8.1--8.4 pp. 160--171 | V Ch. 21 §§21.5--21.9 pp. 444--460; S *Algebraic Curves* §§53.3, 53.5--53.8 |
| AV-25 | V Ch. 27 §§27.1--27.6 pp. 567--579 | B L24--25 pp. 55--62 | F Ch. 8 §§8.4--8.6 pp. 104--112; GZ Ch. 7 §§7.4--7.5 pp. 89--93 |
| AV-26 | V Ch. 19 §§19.1--19.4 pp. 379--395 | M Ch. 8 §h pp. 194--197 | B L9 pp. 23--25; S *Divisors* §§31.33--31.36, *More on Morphisms* §§37.16--37.18 |

**Matrix result:** 26/26 rows have at least two independent full treatments;
there are no dash cells and no pair propped up by a preview or passing mention.

## Convention audit

| issue on which sources differ | adopted AV convention | reason and required library match |
|---|---|---|
| “Variety” may mean irreducible, or merely reduced finite type, and may or may not include separatedness. | Integral, separated, finite type over a field; before schemes, nonempty irreducible classical variety. “Algebraic set” may be reducible/empty. | Matches Milne/Vakil's irreducible geometric register and prevents later properness/graph statements from receiving separatedness silently. Existing library pages using “variety” must be checked at build time and cited with their local convention. |
| Classical affine `Spec` sometimes means maximal ideals only. | Classical pages use point sets explicitly; scheme pages use all prime ideals and reserve `MaxSpec` language for closed points. | Must match `zariski-topology-on-prime-spectra`, which owns all-prime spectrum topology. |
| Some texts exclude the zero ring and empty scheme. | Allow both; $\operatorname{Spec}0=\varnothing$. | Matches the library's total constructions and makes fibre products/closed subschemes closed under degenerate cases. |
| Projective space can parametrize lines or one-dimensional quotients. | Points over a field are proportional vectors; relative $\mathbf P(\mathcal E)$ represents invertible quotients. | Matches Grothendieck relative-Proj convention and fixes duals in the projective-bundle universal property. |
| $\mathbf P^n$ indexing at $n=-1$ is sometimes used for the empty scheme. | Only $n\ge0$ is named; $\mathbf P^0_S=S$. Empty schemes are written explicitly. | Avoids importing a convention not present on existing projective-space pages. |
| Twist shifts vary: $M(n)_d=M_{d+n}$ versus $M_{d-n}$. | $M(n)_d=M_{n+d}$, so $\widetilde{S(n)}=\mathcal O(n)$ and Veronese pullback gives $\mathcal O(d)$. | Must match any existing graded-module page at build time; if its shift is opposite, the AV page must translate rather than redefine that supplier. |
| $\mathbf P(\mathcal E)$ can mean lines in $\mathcal E$ or quotients of $\mathcal E$. | Quotient convention. | Aligns relative Proj with the universal quotient and determines whether $\operatorname{Sym}\mathcal E$ or $\operatorname{Sym}\mathcal E^\vee$ appears. |
| “Regular” and “smooth” coincide over perfect fields but not in general. | Regular is local-ring-theoretic; smooth is geometric/relative and includes finite presentation and flatness. | Required to avoid the imperfect-field error documented in `AV-6`/`AV-17`. |
| Smoothness is variously defined by Jacobian rank, formal lifting, or regular fibres plus flatness. | Primary definition: locally finite presentation + flat + geometrically regular fibres; prove equivalence to formal/Jacobian forms under exact hypotheses. | Dependency-closed over the existing `flatness-and-faithful-flatness` supplier. |
| Étale is “smooth of dimension zero” or “flat and unramified.” | Smooth of relative dimension zero, with the finite-presentation flat-unramified equivalence proved. | Keeps relative-dimension and formal-lifting conventions aligned. |
| A scheme fibre is sometimes discussed only as a point inverse image. | Always $X_s=X\times_S\operatorname{Spec}\kappa(s)$; geometric fibre after algebraic closure. | Retains nilpotents and residue fields; required for flatness and smoothness claims. |
| Effective Cartier divisors may be required nonempty in elementary texts. | Empty effective Cartier divisor allowed, cut out by a unit. | Keeps tensor/zero-section formulas total and matches sheaf quotient conventions. |
| $\mathcal O(D)$ sign conventions are opposite across sources. | $\mathcal O(D)=\{f: \operatorname{div}(f)+D\ge0\}$, so positive $D$ permits poles and $\mathcal O(-D)$ is the ideal of effective $D$. | Must match the existing line-bundle/divisor notation wherever cited; AV's exact sequence and RR signs depend on it. |
| Blowup exceptional twist is written $\mathcal O(1)$ or $\mathcal O(-E)$ depending on Rees/Proj convention. | With quotient relative Proj, record the tautological invertible ideal as $I\mathcal O_{\mathrm{Bl}}=\mathcal O(1)=\mathcal O(-E)$. | Prevents the common sign reversal in normal-bundle calculations. |
| Čech cochains may use all tuples or increasing tuples, and signs differ. | Increasing ordered indices with alternating deletion sign $(-1)^j$; repeated-index alternating complex only as an equivalent variant. | Must match the chain-complex sign convention on the homological-algebra supplier and AT's cochain differential when the comparison is built. |
| Čech cohomology can mean a fixed-cover group or the colimit over covers. | Write $\check H^p(\mathfrak U,-)$ for fixed cover and $\check H^p(X,-)$ for the refinement colimit; neither is identified with derived cohomology without stated hypotheses. | Prevents the exact error the AT de Rham/Čech consumer is likely to make. |
| Cohomology indexing and duality shifts vary. | Cohomological degrees $H^i$, $i\ge0$; on a smooth proper curve, $H^1(\mathcal L)^\vee\cong H^0(\omega\otimes\mathcal L^{-1})$. | Matches homological algebra's cohomological indexing and avoids derived-category shift notation on the elementary curve page. |
| Residues over nonclosed fields may or may not include field trace. | $k$-valued residue includes $\operatorname{Tr}_{\kappa(p)/k}$. | Makes the global residue theorem and degree formula valid without silently assuming every closed point is rational. |
| Degree of a closed point may be treated as one. | $\deg[p]=[\kappa(p):k]$; over algebraically closed $k$ this is one. | Required for base-field-independent Riemann--Roch and proper-map fibre degrees. |
| Genus can mean arithmetic, geometric, or topological genus. | Smooth proper geometrically connected curve: $g=h^1(\mathcal O_C)$; singular curve geometric genus is genus of normalization, arithmetic genus is $1-\chi(\mathcal O_C)$. | The complex-analysis/Riemann-surface pages may identify this with topological genus only after their comparison theorem; AV does not assume it. |
| “Complete” and “proper” are used interchangeably for varieties. | Use proper for morphisms/schemes; “complete variety” is an explicitly defined synonym only over the base field. | Avoids confusing Zariski topology with analytic compactness. |

---

## Canonical-coverage harvest and heading-to-item crosswalk

The auditable heading universe is the section-level contents of Artin Chs.
1--8, Gao--Zhang Chs. 2--8, and the named Stacks sections below. Duplicate
headings in the other full treatments were used to verify claims and populate
the pair matrix, but are not counted a second time merely because another book
uses the same heading. Each `[included]` row is one denominator unit and names
the proposed ids it produced. Headings read but not converted are listed, with
heading-specific reasons, in the next section.

### Artin, MIT 18.721

| exact source heading | disposition | proposed items produced |
|---|---|---|
| 1.1 “The Affine Plane” | [included] | `def-affine-algebraic-set`, `ex-affine-line-and-affine-space-coordinate-rings`, `ex-parabola-is-affine-line` |
| 1.2 “The Projective Plane” | [included] | `def-projective-space-points`, `lem-standard-projective-opens-are-affine-spaces`, `ex-projective-line-two-affine-charts` |
| 1.3 “Plane Projective Curves” | [included] | `def-plane-projective-curve`, `def-projective-closure-affine-set`, `ex-projective-closure-parabola` |
| 1.4 “Tangent Lines” | [included] | `def-tangent-lines-plane-curve-point`, `lem-smooth-plane-curve-unique-tangent`, `cor-tangent-line-flex-multiplicity` |
| 1.5 “Transcendence Degree” | [included] | `thm-dimension-equals-transcendence-degree`, `cor-dimension-birational-invariant`, `thm-dimension-product-varieties` |
| 1.7 “Resultants and Discriminants” | [included] | `def-resultant-homogeneous-polynomials`, `lem-resultant-detects-common-projective-point`, `lem-bezout-no-common-component-finite-intersection` |
| 1.8 “Nodes and Cusps” | [included] | `ex-node-two-tangent-directions`, `ex-cusp-double-tangent`, `ex-nodal-cubic-normalization-genus`, `ex-cuspidal-cubic-normalization-genus` |
| 1.10 “Bézout's Theorem” | [included] | `lem-bezout-global-length-degree-product`, `lem-global-intersection-length-sum-local-lengths`, `thm-bezout-plane-curves`, `cor-line-meets-degree-d-curve-counted-with-multiplicity` |
| 2.2 “The Zariski Topology” | [included] | `thm-zariski-closed-sets-affine-space`, `def-vanishing-ideal-affine-set`, `lem-variety-ideal-galois-connection`, `cor-zariski-topology-cofinite-on-affine-line` |
| 2.3 “Some Affine Varieties” | [included] | `def-affine-variety-classical`, `thm-affine-variety-prime-coordinate-ring`, `ex-coordinate-cross-reducible`, `ex-hyperbola-is-multiplicative-group-variety` |
| 2.4 “The Nullstellensatz” | [included] | `thm-affine-nullstellensatz-correspondence`, `lem-maximal-ideals-are-points-over-algebraically-closed-field`, `thm-global-regular-functions-affine-variety-coordinate-ring` |
| 2.5 “The Spectrum” | [included] | `def-reduced-affine-algebra`, `thm-affine-algebraic-sets-coordinate-duality`, `lem-classical-points-inside-affine-scheme` |
| 2.6 “Localization” | [included] | `def-principal-open-classical-variety`, `lem-principal-opens-form-affine-basis`, `thm-coordinate-ring-principal-open`, `thm-local-ring-affine-variety-localization` |
| 2.7 “Morphisms of Affine Varieties” | [included] | `def-morphism-classical-varieties`, `thm-affine-morphisms-coordinate-ring-anti-equivalence`, `def-germ-and-local-ring-classical-variety`, `thm-global-regular-functions-affine-variety-coordinate-ring` |
| 3.1 “Projective Varieties” | [included] | `def-projective-algebraic-set`, `thm-projective-zariski-topology`, `def-projective-variety-classical`, `thm-global-regular-functions-projective-variety` |
| 3.2 “Homogeneous Ideals” | [included] | `def-homogeneous-polynomial-and-homogeneous-ideal`, `def-homogeneous-coordinate-ring`, `lem-projective-irreducibility-homogeneous-prime`, `thm-ideal-projective-closure-saturation` |
| 3.3 “Product Varieties” | [included] | `def-product-varieties-universal-property`, `thm-affine-variety-product-coordinate-ring`, `def-segre-map`, `thm-segre-image-rank-one-minors` |
| 3.4 “Morphisms and Isomorphisms” | [included] | `def-morphism-to-projective-space-homogeneous-coordinates`, `lem-projective-coordinate-morphisms-well-defined`, `thm-closed-projective-embedding-by-homogeneous-generators` |
| 3.5 “Affine Varieties” | [included] | `lem-projective-closure-dense-affine-chart`, `lem-projective-hypersurface-affine-pieces`, `rem-projective-coordinate-ring-not-function-ring` |
| 3.6 “Lines in Projective Three-Space” | [included] | `def-grassmannian-subspaces`, `def-plucker-coordinates`, `thm-plucker-image-closed`, `ex-grassmannian-lines-in-projective-three-space` |
| 4.3 “Normalization” | [included] | `def-normalization-affine-variety`, `thm-normalization-finite-birational-surjective`, `thm-normalization-glues-variety`, `thm-normalization-universal-property` |
| 4.4 “Geometry of Integral Morphisms” | [included] | `def-finite-morphism-classical-affine-local`, `thm-finite-morphism-closed-and-finite-fibres`, `lem-finite-birational-to-normal-is-isomorphism` |
| 4.5 “Dimension” | [included] | `def-dimension-classical-variety`, `thm-affine-variety-dimension-coordinate-ring`, `lem-dimension-nonempty-open-subset`, `def-codimension-irreducible-subvariety` |
| 4.7 “Chevalley's Finiteness Theorem” | [included] | `def-constructible-subset-variety`, `lem-constructible-dense-contains-open`, `thm-chevalley-constructible-image-varieties`, `cor-dominant-morphism-image-contains-open` |
| 5.2 “Valuations” | [included] | `thm-normal-variety-regular-in-codimension-one`, `def-order-codimension-one-rational-function`, `thm-valuative-criterion-separatedness`, `thm-valuative-criterion-properness` |
| 5.3 “Smooth Curves” | [included] | `thm-normal-curve-is-nonsingular`, `thm-local-ring-smooth-curve-dvr`, `lem-rational-map-smooth-curve-to-proper-scheme-extends` |
| 5.4 “Constructible Sets” | [included] | `def-constructible-subset-variety`, `lem-constructible-dense-contains-open`, `thm-chevalley-constructible-image-varieties` |
| 5.5 “Closed Sets” | [included] | `def-scheme-theoretic-image`, `thm-scheme-theoretic-image-quasi-compact-morphism`, `thm-proper-morphism-closed-image` |
| 5.6 “Fibred Products” | [included] | `def-fibre-product-schemes-universal-property`, `thm-affine-fibre-product-tensor-ring`, `thm-fibre-products-of-schemes-exist`, `def-scheme-theoretic-fibre` |
| 5.7 “Projective Varieties are Proper” | [included] | `thm-projective-space-proper-over-base`, `thm-projective-morphism-proper`, `thm-global-functions-proper-integral-variety` |
| 5.8 “Fibre Dimension” | [included] | `thm-fibre-dimension-lower-bound`, `thm-generic-fibre-dimension`, `thm-upper-semicontinuity-fibre-dimension-projective`, `cor-dimension-of-image-plus-generic-fibre` |
| 6.1 “The Structure Sheaf” | [included] | `def-structure-presheaf-on-basic-opens`, `thm-structure-sheaf-affine-scheme`, `thm-stalk-structure-sheaf-prime-localization` |
| 6.2 “O-Modules” | [included] | `def-module-on-ringed-space`, `def-associated-sheaf-module-affine-scheme`, `def-quasi-coherent-module-scheme` |
| 6.3 “The Sheaf Property” | [included] | `def-sheaf-on-topological-space`, `thm-sheaf-equalizer-condition`, `lem-sheaf-condition-check-on-basis` |
| 6.4 “Some O-Modules” | [included] | `def-locally-free-sheaf-finite-rank`, `def-invertible-sheaf`, `def-support-module-sheaf`, `def-fibre-of-module-at-point` |
| 6.5 “Direct Image” | [included] | `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `thm-pushforward-qc-under-qcqs-morphism` |
| 6.6 “Support” | [included] | `def-support-module-sheaf`, `thm-support-finite-type-qc-closed`, `def-fitting-ideal-sheaf`, `thm-fitting-ideals-control-rank-loci` |
| 6.7 “Twisting” | [included] | `def-shifted-graded-module`, `def-twisting-sheaf-proj`, `thm-twisting-sheaf-invertible-standard-graded`, `def-twist-quasi-coherent-sheaf-projective` |
| 6.8 “Proof of Theorem 6.3.2” | [included] | `lem-associated-sheaf-sections-basic-open`, `thm-affine-quasi-coherent-equivalence`, `thm-quasi-coherence-check-affine-cover` |
| 7.1 “Cohomology of O-Modules” | [included] | `def-sheaf-cohomology-derived-global-sections`, `thm-zero-sheaf-cohomology-global-sections`, `thm-long-exact-sequence-sheaf-cohomology` |
| 7.3 “Characteristic Properties” | [included] | `def-acyclic-sheaf-global-sections`, `thm-flasque-sheaves-acyclic`, `thm-mayer-vietoris-sheaf-cohomology`, `thm-cohomology-disjoint-union` |
| 7.4 “Construction of Cohomology” | [included] | `def-godement-resolution`, `thm-godement-resolution-flasque`, `def-cech-cochain-complex-open-cover`, `thm-cech-to-sheaf-cohomology-comparison` |
| 7.5 “Cohomology of the Twisting Modules” | [included] | `thm-cohomology-projective-space-twisting-sheaves`, `lem-projective-space-cech-monomial-complex`, `cor-top-cohomology-projective-space-o-d` |
| 7.6 “Cohomology of Hypersurfaces” | [included] | `lem-projective-hypersurface-cohomology-sequence`, `thm-plane-curve-arithmetic-genus`, `cor-plane-curve-geometric-genus-delta-correction` |
| 7.7 “Three Theorems about Cohomology” | [included] | `thm-serre-vanishing`, `thm-serre-finiteness-projective-cohomology`, `thm-proper-pushforward-coherent`, `thm-cohomology-and-base-change` |
| 7.8 “Bézout's Theorem” | [included] | `lem-bezout-global-length-degree-product`, `thm-bezout-plane-curves`, `ex-two-plane-cubics-nine-points` |
| 8.1 “Branched Coverings” | [included] | `def-nonconstant-morphism-curves-degree`, `def-ramification-index-curve-map`, `lem-fibre-degree-sum-ramification-residue` |
| 8.2 “Divisors” | [included] | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `def-complete-linear-system`, `thm-cartier-weil-divisors-curves-agree` |
| 8.3 “The Riemann--Roch Theorem I” | [included] | `lem-add-one-point-euler-characteristic`, `thm-euler-characteristic-degree-shift-curve`, `thm-riemann-roch-euler-characteristic-curve`, `cor-riemann-inequality-divisor-sections` |
| 8.4 “The Birkhoff--Grothendieck Theorem” | [included] | `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`, `lem-vector-bundle-p1-maximal-line-quotient-locally-free`, `lem-vector-bundle-p1-extension-splits`, `thm-birkhoff-grothendieck-vector-bundles-p1` |
| 8.5 “Differentials” | [included] | `def-canonical-line-bundle-curve`, `lem-rational-differential-divisor-well-defined-class`, `def-residue-rational-differential-curve-point` |
| 8.6 “Trace” | [included] | `thm-global-residue-theorem-algebraic-curve`, `def-residue-pairing-principal-parts`, `rem-duality-trace-normalization` |
| 8.7 “The Riemann--Roch Theorem II” | [included] | `thm-serre-duality-curves-line-bundles`, `cor-h1-line-bundle-dual-sections`, `thm-full-riemann-roch-divisor`, `cor-canonical-degree-two-g-minus-two` |
| 8.8 “Using Riemann--Roch” | [included] | `thm-degree-two-g-line-bundle-basepoint-free`, `thm-degree-two-g-plus-one-line-bundle-very-ample`, `thm-genus-zero-point-implies-projective-line`, `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` |

### Gao--Zhang

| exact source heading | disposition | proposed items produced |
|---|---|---|
| 2.1 “Sheaves” | [included] | `def-presheaf-on-topological-space`, `def-morphism-of-presheaves`, `def-sheaf-on-topological-space`, `thm-sheaf-equalizer-condition` |
| 2.2 “Sheafication” | [included] | `def-presheaf-plus-construction`, `lem-first-plus-construction-is-separated`, `lem-second-plus-construction-is-sheaf`, `thm-sheafification-universal-property` |
| 2.3 “Push forward and pull back” | [included] | `def-direct-image-sheaf`, `def-inverse-image-presheaf-and-sheaf`, `thm-inverse-direct-image-adjunction`, `def-pullback-module-ringed-spaces` |
| 2.4 “Some special sheaves” | [included] | `def-extension-by-zero-abelian-sheaf`, `def-skyscraper-sheaf-abelian-group`, `ex-skyscraper-sheaf-acyclic` |
| 2.5 “Ringed space” | [included] | `def-ringed-space`, `def-morphism-ringed-spaces`, `def-locally-ringed-space`, `def-morphism-locally-ringed-spaces` |
| 3.1 “Spectrum” | [included] | `def-affine-scheme-spectrum`, `def-closed-point-scheme`, `def-generic-point-irreducible-closed-subset`, `thm-spectrum-sober` |
| 3.2 “Topology” | [included] | `lem-spectrum-localization-open-immersion`, `lem-basic-opens-quasi-compact`, `cor-affine-scheme-quasi-compact` |
| 3.3 “Structure sheaves” | [included] | `def-structure-presheaf-on-basic-opens`, `thm-structure-sheaf-affine-scheme`, `thm-sections-basic-open-affine-scheme`, `thm-global-sections-affine-scheme` |
| 3.4 “Affine Schemes” | [included] | `def-affine-scheme`, `def-morphism-affine-schemes-from-ring-map`, `thm-affine-scheme-ring-anti-equivalence`, `def-functor-of-points-affine-scheme` |
| 3.5 “Dimension Theory” | [included] | `def-dimension-noetherian-topological-space`, `thm-affine-variety-dimension-coordinate-ring`, `def-codimension-irreducible-subvariety`, `lem-dimension-local-ring-codimension-closure` |
| 3.6 “Some Classical Algebraic Geometry” | [included] | `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`, `lem-classical-points-inside-affine-scheme`, `cor-smooth-variety-classical-scheme-conventions-agree` |
| 3.7 “Sheaves of Modules” | [included] | `def-associated-sheaf-module-affine-scheme`, `thm-associated-module-sheaf-exists`, `thm-affine-quasi-coherent-equivalence` |
| 4.1 “Schemes and quasi-coherent sheaves” | [included] | `def-scheme`, `thm-gluing-affine-schemes`, `def-quasi-coherent-module-scheme`, `thm-quasi-coherence-check-affine-cover` |
| 4.2 “Open immersion and closed immersion” | [included] | `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings`, `thm-qc-ideal-closed-subscheme-correspondence-complete` |
| 4.3 “Fibre product and Base change” | [included] | `def-fibre-product-schemes-universal-property`, `thm-affine-fibre-product-tensor-ring`, `thm-fibre-products-of-schemes-exist`, `def-base-change-morphism-schemes` |
| 4.4 “Separatedness and Properness” | [included] | `def-separated-morphism-schemes`, `def-proper-morphism`, `thm-valuative-criterion-separatedness`, `thm-valuative-criterion-properness` |
| 4.5 “Affine morphism” | [included] | `def-affine-morphism-schemes`, `thm-affine-morphism-relative-spec-characterization`, `thm-affine-morphism-higher-direct-images-qc-vanish` |
| 5.1 “Graded ring and modules” | [included] | `def-proj-graded-ring-points`, `def-standard-open-proj`, `def-shifted-graded-module`, `def-associated-sheaf-graded-module-proj` |
| 5.2 “Quasi-coherent Sheaf” | [included] | `def-associated-sheaf-graded-module-proj`, `lem-proj-associated-sheaf-basic-sections`, `def-twisting-sheaf-proj` |
| 5.3 “Noetherian Condition” | [included] | `def-locally-noetherian-and-noetherian-scheme`, `def-coherent-module-scheme`, `thm-coherent-sheaves-abelian-noetherian-scheme` |
| 5.4 “Sheaves on Projective Schemes” | [included] | `thm-proj-structure-sheaf-scheme`, `def-twisting-sheaf-proj`, `thm-twisting-sheaf-invertible-standard-graded` |
| 5.5 “Quasi-coherent sheaves on projective schemes” | [included] | `def-twist-quasi-coherent-sheaf-projective`, `thm-serre-criterion-ampleness`, `lem-eventual-global-generation-coherent-twists` |
| 5.6 “Coherent sheaves” | [included] | `def-coherent-module-scheme`, `thm-coherent-sheaves-abelian-noetherian-scheme`, `thm-serre-finiteness-projective-cohomology` |
| 6.1 “Čech cohomology” | [included] | `def-cech-cochain-complex-open-cover`, `def-cech-cohomology-open-cover`, `lem-cech-h0-global-sections` |
| 6.2 “Čech complex of sheaves” | [included] | `lem-cech-differential-squares-zero`, `thm-cech-to-sheaf-cohomology-comparison`, `thm-leray-acyclic-cover-theorem` |
| 6.3 “Long exact sequence” | [included] | `thm-long-exact-sequence-sheaf-cohomology`, `thm-mayer-vietoris-sheaf-cohomology`, `lem-euler-characteristic-additive-short-exact` |
| 6.4 “Independence of U” | [included] | `def-refinement-open-cover`, `thm-refinement-map-independent-on-cohomology`, `def-global-cech-cohomology-directed-limit` |
| 6.5 “Cohomology on projective schemes” | [included] | `thm-qc-sheaf-affine-higher-cohomology-vanishes`, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover`, `thm-cohomology-projective-space-twisting-sheaves`, `thm-serre-vanishing` |
| 6.6 “Relative cohomology” | [included] | `def-higher-direct-image-sheaf`, `thm-proper-pushforward-coherent`, `def-base-change-map-cohomology`, `thm-cohomology-and-base-change` |
| 7.2 “Regular projective curves” | [included] | `def-algebraic-curve-over-field`, `thm-local-ring-smooth-curve-dvr`, `thm-cartier-weil-divisors-curves-agree`, `def-arithmetic-genus-proper-curve` |
| 7.4 “Riemann--Roch theorem” | [included] | `thm-riemann-roch-euler-characteristic-curve`, `thm-full-riemann-roch-divisor`, `cor-canonical-degree-two-g-minus-two` |
| 7.5 “Serre duality” | [included] | `def-residue-pairing-principal-parts`, `thm-serre-duality-curves-line-bundles`, `thm-serre-duality-curves-coherent-sheaves` |

### Stacks Project section headings

| exact source heading | disposition | proposed items produced |
|---|---|---|
| 6.2 “Basic notions” | [included] | `def-open-set-category-topological-space`, `def-section-restriction-and-global-section` |
| 6.3 “Presheaves” | [included] | `def-presheaf-on-topological-space`, `def-morphism-of-presheaves` |
| 6.4 “Abelian presheaves” | [included] | `def-presheaf-of-groups-rings-modules`, `def-kernel-cokernel-image-sheaves` |
| 6.5 “Presheaves of algebraic structures” | [included] | `lem-forgetful-sheaf-compatibility`, `def-presheaf-of-groups-rings-modules` |
| 6.6 “Presheaves of modules” | [included] | `def-module-on-ringed-space`, `def-sheaf-tensor-product`, `def-sheaf-hom` |
| 6.7 “Sheaves” | [included] | `def-separated-presheaf`, `def-sheaf-on-topological-space`, `lem-sheaf-section-over-empty-set-terminal` |
| 6.8 “Abelian sheaves” | [included] | `thm-abelian-sheaves-form-abelian-category`, `def-exact-sequence-sheaves` |
| 6.9 “Sheaves of algebraic structures” | [included] | `lem-forgetful-sheaf-compatibility`, `thm-sheaf-equalizer-condition` |
| 6.10 “Sheaves of modules” | [included] | `def-module-on-ringed-space`, `def-pullback-module-ringed-spaces` |
| 6.11 “Stalks” | [included] | `def-stalk-of-presheaf`, `def-germ-of-section`, `lem-germ-equivalence-relation` |
| 6.12 “Stalks of presheaves of algebraic structures” | [included] | `lem-section-zero-if-all-germs-zero`, `lem-morphisms-of-sheaves-determined-by-stalks` |
| 6.13 “Stalks of sheaves” | [included] | `thm-sheaf-morphism-isomorphism-stalkwise`, `lem-stalk-inverse-image-sheaf` |
| 6.14 “Stalks of modules” | [included] | `lem-stalk-tensor-product`, `lem-local-homomorphism-residue-field-map` |
| 6.15 “Algebraic structures” | [included] | `def-presheaf-of-groups-rings-modules`, `lem-forgetful-sheaf-compatibility` |
| 6.16 “Exactness and points” | [included] | `def-exact-sequence-sheaves`, `thm-exactness-of-sheaves-stalkwise`, `lem-global-sections-left-exact` |
| 6.17 “Sheafification” | [included] | `def-presheaf-plus-construction`, `def-sheafification` |
| 6.18 “Sheafification of presheaves of algebraic structures” | [included] | `lem-second-plus-construction-is-sheaf`, `thm-sheafification-universal-property` |
| 6.19 “Sheafification of presheaves of modules” | [included] | `def-sheaf-tensor-product`, `def-kernel-cokernel-image-sheaves` |
| 6.20 “Sheafification and stalks” | [included] | `lem-first-plus-construction-is-separated`, `thm-sheafification-preserves-stalks`, `cor-sheafification-idempotent` |
| 6.21 “Continuous maps and sheaves” | [included] | `def-direct-image-sheaf`, `def-inverse-image-presheaf-and-sheaf` |
| 6.22 “Continuous maps and abelian sheaves” | [included] | `thm-inverse-direct-image-adjunction`, `lem-direct-image-is-sheaf` |
| 6.23 “Continuous maps and algebraic structures” | [included] | `def-morphism-ringed-spaces`, `def-morphism-locally-ringed-spaces` |
| 6.24 “Continuous maps and sheaves of modules” | [included] | `def-pullback-module-ringed-spaces`, `thm-pullback-pushforward-module-adjunction` |
| 6.25 “Ringed spaces” | [included] | `def-ringed-space`, `def-locally-ringed-space` |
| 6.26 “Morphisms of ringed spaces and modules” | [included] | `def-morphism-ringed-spaces`, `def-pullback-module-ringed-spaces`, `lem-pullback-modules-right-exact` |
| 6.27 “Skyscraper sheaves” | [included] | `def-skyscraper-sheaf-abelian-group`, `ex-skyscraper-sheaf-acyclic` |
| 6.28 “Limits of sheaves” | [included] | `def-kernel-cokernel-image-sheaves`, `thm-abelian-sheaves-form-abelian-category` |
| 6.29 “Colimits of sheaves” | [included] | `def-kernel-cokernel-image-sheaves`, `def-global-cech-cohomology-directed-limit` |
| 6.30 “Bases and sheaves” | [included] | `lem-sheaf-condition-check-on-basis`, `thm-structure-sheaf-affine-scheme` |
| 6.31 “Open immersions and sheaves” | [included] | `def-restriction-sheaf-open-subspace`, `def-extension-by-zero-abelian-sheaf`, `thm-extension-by-zero-adjunction-exactness` |
| 6.32 “Closed immersions and sheaves” | [included] | `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings`, `lem-closed-immersion-cohomology-pushforward` |
| 6.33 “Glueing sheaves” | [included] | `def-gluing-datum-sheaves`, `thm-gluing-sheaves`, `thm-gluing-ringed-and-locally-ringed-spaces` |
| 20.2 “Cohomology of sheaves” | [included] | `def-sheaf-cohomology-derived-global-sections`, `thm-zero-sheaf-cohomology-global-sections`, `thm-long-exact-sequence-sheaf-cohomology` |
| 20.4 “First cohomology and torsors” | [included] | `def-cech-cohomology-open-cover`, `thm-cech-to-sheaf-cohomology-comparison` |
| 20.6 “First cohomology and invertible sheaves” | [included] | `def-picard-group-scheme`, `ex-glue-line-bundle-transition-functions` |
| 20.7 “Locality of cohomology” | [included] | `lem-cohomology-functoriality-sheaf-and-space`, `thm-cohomology-disjoint-union` |
| 20.8 “Mayer--Vietoris” | [included] | `lem-two-open-cover-cech-complex`, `thm-mayer-vietoris-sheaf-cohomology` |
| 20.9 “The Čech complex and Čech cohomology” | [included] | `def-cech-cochain-complex-open-cover`, `lem-cech-differential-squares-zero`, `def-cech-cohomology-open-cover` |
| 20.10 “The Čech functor” | [included] | `def-refinement-open-cover`, `thm-refinement-map-independent-on-cohomology` |
| 20.11 “Čech cohomology and cohomology” | [included] | `thm-cech-to-sheaf-cohomology-comparison`, `thm-leray-acyclic-cover-theorem` |
| 20.12 “Flasque sheaves” | [included] | `def-flasque-sheaf`, `thm-flasque-sheaves-acyclic`, `lem-injective-sheaves-flasque` |
| 20.14 “Functoriality of cohomology” | [included] | `lem-cohomology-functoriality-sheaf-and-space`, `thm-long-exact-sequence-sheaf-cohomology` |
| 20.15 “Refinements and Čech cohomology” | [included] | `def-refinement-open-cover`, `thm-refinement-map-independent-on-cohomology`, `def-global-cech-cohomology-directed-limit` |
| 20.20 “Vanishing on Noetherian topological spaces” | [included] | `def-cohomological-dimension-space`, `thm-noetherian-topological-space-dimension-vanishing` |
| 20.30 “Godement resolution” | [included] | `def-godement-resolution`, `thm-godement-resolution-flasque` |
| 20.31 “Cup product” | [included] | `def-cup-product-sheaf-cohomology`, `thm-cup-product-graded-associative-natural` |
| 26.2 “Locally ringed spaces” | [included] | `def-locally-ringed-space`, `def-morphism-locally-ringed-spaces` |
| 26.3 “Open immersions of locally ringed spaces” | [included] | `def-open-immersion-schemes`, `lem-open-immersion-monomorphism` |
| 26.4 “Closed immersions of locally ringed spaces” | [included] | `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings` |
| 26.5 “Affine schemes” | [included] | `def-affine-scheme`, `thm-affine-scheme-ring-anti-equivalence` |
| 26.6 “The category of affine schemes” | [included] | `def-morphism-affine-schemes-from-ring-map`, `thm-affine-scheme-ring-anti-equivalence`, `thm-affine-schemes-determined-by-functor-of-points` |
| 29.21 “Quasi-finite morphisms” | [included] | `def-quasi-finite-morphism-classical`, `thm-dominant-equal-dimension-generically-finite`, `thm-proper-quasi-finite-is-finite` |
| 29.22 “Morphisms of finite presentation” | [included] | `def-locally-finite-presentation-morphism`, `lem-finite-type-local-on-source-and-target` |
| 29.23 “Morphisms and constructible sets” | [included] | `thm-chevalley-constructible-image-varieties`, `cor-dominant-morphism-image-contains-open` |
| 29.24 “Open morphisms” | [included] | `thm-flat-finite-presentation-is-open`, `thm-etale-morphisms-open-and-quasi-finite` |
| 29.25 “Universally open morphisms” | [included] | `thm-flat-finite-presentation-is-open`, `lem-flat-morphisms-stable-base-change` |
| 29.28 “Generic flatness” | [included] | `thm-generic-flatness-morphisms`, `thm-flat-families-fibre-dimension-locally-constant` |
| 29.29 “Dimension of fibres” | [included] | `thm-fibre-dimension-lower-bound`, `thm-generic-fibre-dimension`, `thm-upper-semicontinuity-fibre-dimension-projective` |
| 29.30 “Relative dimension” | [included] | `def-relative-dimension-smooth-morphism`, `thm-flat-families-fibre-dimension-locally-constant` |
| 29.32 “The conormal sheaf” | [included] | `thm-conormal-sequence-closed-immersion`, `def-relative-cotangent-space` |
| 29.33 “The sheaf of differentials” | [included] | `def-sheaf-relative-differentials`, `thm-sheaf-differentials-universal-property`, `thm-transitivity-sequence-schemes` |
| 29.35 “Smooth morphisms” | [included] | `def-smooth-morphism-schemes`, `thm-smooth-morphisms-stable-base-change-composition`, `thm-smooth-local-standard-form` |
| 29.36 “Unramified morphisms” | [included] | `def-unramified-morphism-finite-type`, `thm-formally-unramified-differentials-zero`, `thm-unramified-diagonal-open-immersion` |
| 29.37 “Étale morphisms” | [included] | `def-etale-morphism-schemes`, `thm-etale-equivalent-flat-unramified-fp`, `thm-etale-formally-etale-finite-presentation` |
| 29.38 “Relatively ample sheaves” | [included] | `def-ample-invertible-sheaf`, `thm-serre-criterion-ampleness` |
| 29.39 “Relatively very ample sheaves” | [included] | `def-very-ample-invertible-sheaf-relative`, `lem-very-ample-implies-ample` |
| 29.41 “Quasi-projective morphisms” | [included] | `def-quasi-projective-morphism`, `lem-projective-morphism-relative-proj-presentation` |
| 29.42 “Proper morphisms” | [included] | `def-proper-morphism`, `lem-proper-stable-base-change`, `lem-proper-stable-composition`, `thm-proper-morphism-closed-image` |
| 29.43 “Valuative criteria” | [included] | `def-valuative-diagram-separatedness`, `thm-valuative-criterion-separatedness`, `thm-valuative-criterion-properness` |
| 29.44 “Projective morphisms” | [included] | `def-projective-morphism-pre-proj`, `thm-projective-space-proper-over-base`, `thm-projective-morphism-proper` |
| 30.2 “Čech cohomology of quasi-coherent sheaves” | [included] | `lem-principal-open-cover-qc-acyclic-intersections`, `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` |
| 30.3 “Vanishing of cohomology” | [included] | `thm-qc-sheaf-affine-higher-cohomology-vanishes`, `thm-affine-morphism-higher-direct-images-qc-vanish` |
| 30.4 “Higher direct images of quasi-coherent sheaves” | [included] | `def-higher-direct-image-sheaf`, `thm-proper-pushforward-coherent` |
| 30.5 “Cohomology and base change” | [included] | `def-base-change-map-cohomology`, `thm-cohomology-and-base-change`, `cor-upper-semicontinuity-cohomology-dimension` |
| 53.2 “Curves and function fields” | [included] | `thm-curves-function-fields-equivalence`, `lem-rational-map-smooth-curve-to-proper-scheme-extends`, `cor-birational-smooth-proper-curves-isomorphic` |
| 53.3 “Linear series” | [included] | `def-complete-linear-system`, `def-base-point-linear-system`, `thm-base-point-free-linear-system-morphism` |
| 53.4 “Duality” | [included] | `thm-serre-duality-curves-line-bundles`, `thm-serre-duality-curves-vector-bundles`, `thm-serre-duality-curves-coherent-sheaves` |
| 53.5 “Riemann--Roch” | [included] | `thm-riemann-roch-euler-characteristic-curve`, `thm-full-riemann-roch-divisor`, `cor-canonical-degree-two-g-minus-two` |
| 53.6 “Some vanishing results” | [included] | `thm-h1-line-bundle-vanishes-sufficiently-high-degree`, `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` |
| 53.7 “Very ample invertible sheaves” | [included] | `thm-degree-two-g-line-bundle-basepoint-free`, `thm-degree-two-g-plus-one-line-bundle-very-ample` |
| 53.8 “The genus of a curve” | [included] | `def-arithmetic-genus-proper-curve`, `def-geometric-genus-singular-curve`, `cor-plane-curve-geometric-genus-delta-correction` |
| 53.9 “Plane curves” | [included] | `thm-plane-curve-arithmetic-genus`, `thm-adjunction-smooth-plane-curve`, `cor-genus-degree-smooth-plane-curve` |
| 53.10 “Curves of genus zero” | [included] | `thm-genus-zero-point-implies-projective-line`, `cor-picard-projective-line-integers` |
| 53.11 “Geometric genus” | [included] | `def-geometric-genus-singular-curve`, `lem-normalization-lowers-arithmetic-genus-delta` |
| 53.12 “Riemann--Hurwitz” | [included] | `def-different-divisor-curve-map`, `thm-canonical-bundle-ramification-formula`, `thm-riemann-hurwitz-complete` |
| 53.13 “Inseparable maps” | [included] | `def-ramification-and-branch-points`, `cex-inseparable-map-riemann-hurwitz-naive-fails`, `cex-frobenius-not-smooth` |

The following additional Stacks headings were also included in the same
section-level harvest; they are separated only to keep the first table
readable.

| exact source heading | disposition | proposed items produced |
|---|---|---|
| 26.7 “Quasi-coherent sheaves on affines” | [included] | `def-associated-sheaf-module-affine-scheme`, `thm-affine-quasi-coherent-equivalence`, `cor-affine-qc-sheaf-determined-global-sections` |
| 26.8 “Closed subspaces of affine schemes” | [included] | `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings` |
| 26.9 “Schemes” | [included] | `def-scheme`, `def-affine-open-subscheme`, `lem-intersection-affine-opens-covered-principal-opens` |
| 26.10 “Immersions of schemes” | [included] | `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `def-locally-closed-immersion` |
| 26.11 “Zariski topology of schemes” | [included] | `def-irreducible-component-scheme`, `def-integral-scheme`, `def-reduction-of-scheme` |
| 26.12 “Reduced schemes” | [included] | `def-reduced-affine-scheme`, `def-reduction-of-scheme`, `thm-reduction-universal-property` |
| 26.13 “Points of schemes” | [included] | `def-residue-field-scheme-point`, `def-closed-point-scheme`, `def-generic-point-irreducible-closed-subset` |
| 26.14 “Glueing schemes” | [included] | `thm-gluing-affine-schemes`, `ex-projective-line-by-gluing-affines`, `ex-doubled-origin-nonseparated-scheme` |
| 26.16 “Existence of fibre products of schemes” | [included] | `thm-affine-fibre-product-tensor-ring`, `thm-fibre-products-of-schemes-exist` |
| 26.17 “Fibre products of schemes” | [included] | `def-fibre-product-schemes-universal-property`, `lem-fibre-product-associativity-and-symmetry`, `cor-product-schemes-over-base-exists` |
| 26.18 “Base change in algebraic geometry” | [included] | `def-base-change-morphism-schemes`, `lem-base-change-composition`, `def-scheme-theoretic-fibre`, `def-geometric-fibre` |
| 26.19 “Quasi-compact morphisms” | [included] | `def-quasi-compact-and-quasi-separated-scheme`, `thm-scheme-theoretic-image-quasi-compact-morphism` |
| 26.20 “Valuative criterion for universal closedness” | [included] | `def-universally-closed-morphism`, `thm-valuative-criterion-properness` |
| 26.21 “Separation axioms” | [included] | `def-separated-morphism-schemes`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `thm-separatedness-gluing-overlap-criterion` |
| 26.22 “Valuative criterion of separatedness” | [included] | `def-valuative-diagram-separatedness`, `thm-valuative-criterion-separatedness` |
| 26.23 “Monomorphisms” | [included] | `lem-open-immersion-monomorphism`, `lem-monomorphism-diagonal-isomorphism`, `thm-immersion-monomorphism-locally-finite-type` |
| 26.24 “Functoriality for quasi-coherent modules” | [included] | `lem-pullback-qc-module-quasi-coherent`, `thm-pushforward-qc-under-qcqs-morphism` |
| 27.2 “Relative glueing” | [included] | `thm-gluing-ringed-and-locally-ringed-spaces`, `thm-gluing-affine-schemes` |
| 27.3 “Relative spectrum via glueing” | [included] | `thm-affine-morphism-relative-spec-characterization`, `def-vector-bundle-scheme` |
| 27.4 “Relative spectrum as a functor” | [included] | `thm-affine-morphism-relative-spec-characterization`, `thm-vector-bundles-locally-free-sheaves-equivalence` |
| 27.5 “Affine n-space” | [included] | `def-scheme-over-base`, `ex-affine-n-space-over-arbitrary-base`, `ex-product-affine-lines-plane` |
| 27.6 “Vector bundles” | [included] | `def-vector-bundle-scheme`, `thm-vector-bundles-locally-free-sheaves-equivalence`, `lem-dual-locally-free-and-base-change` |
| 27.7 “Cones” | [included] | `def-affine-cone-projective-set`, `lem-projective-variety-cone-irreducible`, `ex-affine-cone-over-conic` |
| 27.8 “Proj of a graded ring” | [included] | `def-proj-graded-ring-points`, `def-standard-open-proj`, `lem-standard-opens-proj-affine`, `thm-proj-structure-sheaf-scheme` |
| 27.9 “Quasi-coherent sheaves on Proj” | [included] | `def-associated-sheaf-graded-module-proj`, `lem-proj-associated-sheaf-basic-sections` |
| 27.10 “Invertible sheaves on Proj” | [included] | `def-twisting-sheaf-proj`, `thm-twisting-sheaf-invertible-standard-graded` |
| 27.11 “Functoriality of Proj” | [included] | `lem-proj-veronese-invariance`, `thm-relative-proj-base-change` |
| 27.12 “Morphisms into Proj” | [included] | `thm-line-bundle-sections-define-projective-map`, `thm-projective-map-line-bundle-data-equivalence` |
| 27.13 “Projective space” | [included] | `thm-projective-space-as-proj`, `thm-segre-image-rank-one-minors`, `thm-projective-space-proper-over-base` |
| 27.14 “Invertible sheaves and morphisms into Proj” | [included] | `def-globally-generated-sheaf`, `thm-line-bundle-sections-define-projective-map` |
| 27.15 “Relative Proj via glueing” | [included] | `def-relative-proj-quasi-coherent-graded-algebra`, `thm-relative-proj-base-change` |
| 27.16 “Relative Proj as a functor” | [included] | `thm-relative-proj-base-change`, `lem-projective-morphism-relative-proj-presentation` |
| 27.17 “Quasi-coherent sheaves on relative Proj” | [included] | `def-associated-sheaf-graded-module-proj`, `def-twist-quasi-coherent-sheaf-projective` |
| 27.18 “Functoriality of relative Proj” | [included] | `thm-relative-proj-base-change`, `lem-blowup-power-of-ideal-same` |
| 27.19 “Invertible sheaves and morphisms into relative Proj” | [included] | `def-very-ample-invertible-sheaf-relative`, `thm-projective-map-line-bundle-data-equivalence` |
| 27.20 “Twisting by invertible sheaves and relative Proj” | [included] | `lem-proj-veronese-invariance`, `lem-ample-stable-positive-power` |
| 27.21 “Projective bundles” | [included] | `def-projective-bundle-scheme`, `thm-projective-bundle-represents-line-quotients`, `ex-projective-bundle-trivial-rank-r` |
| 28.2 “Constructible sets” | [included] | `def-constructible-subset-variety`, `thm-chevalley-constructible-image-varieties` |
| 28.3 “Integral, irreducible, and reduced schemes” | [included] | `def-reduced-affine-scheme`, `def-integral-scheme`, `def-irreducible-component-scheme` |
| 28.4 “Types of schemes defined by properties of rings” | [included] | `def-normal-point-and-normal-variety`, `def-locally-factorial-scheme`, `def-locally-noetherian-and-noetherian-scheme` |
| 28.5 “Noetherian schemes” | [included] | `def-locally-noetherian-and-noetherian-scheme`, `lem-algebraic-set-finite-irreducible-components` |
| 28.7 “Normal schemes” | [included] | `def-normal-point-and-normal-variety`, `lem-normality-local-on-affine-opens`, `thm-normalization-glues-variety` |
| 28.9 “Regular schemes” | [included] | `def-regular-local-ring-geometric-point`, `thm-regular-local-ring-is-normal`, `thm-regular-equals-smooth-over-perfect-field` |
| 28.10 “Dimension” | [included] | `def-dimension-noetherian-topological-space`, `thm-affine-variety-dimension-coordinate-ring`, `lem-dimension-local-ring-codimension-closure` |
| 28.15 “The singular locus” | [included] | `def-singular-and-regular-loci-variety`, `thm-regular-locus-is-open-variety`, `def-smooth-locus-morphism` |
| 28.16 “Local irreducibility” | [included] | `def-unibranch-point-classical`, `lem-normalization-isomorphism-over-normal-locus` |
| 28.17 “Characterizing modules of finite type and finite presentation” | [included] | `def-finite-type-finite-presentation-module-sheaf`, `def-coherent-module-scheme` |
| 28.18 “Sections over principal opens” | [included] | `thm-coordinate-ring-principal-open`, `lem-associated-sheaf-sections-basic-open` |
| 28.19 “Quasi-affine schemes” | [included] | `def-quasi-affine-algebraic-set`, `def-quasi-projective-morphism` |
| 28.20 “Flat modules” | [included] | `def-flat-morphism-schemes`, `lem-flatness-affine-local-source-target` |
| 28.21 “Locally free modules” | [included] | `def-locally-free-sheaf-finite-rank`, `thm-locally-free-locus-finite-presentation-open` |
| 28.22 “Locally projective modules” | [included] | `thm-vector-bundles-locally-free-sheaves-equivalence`, `lem-dual-locally-free-and-base-change` |
| 28.23 “Extending quasi-coherent sheaves” | [included] | `thm-quasi-coherence-check-affine-cover`, `thm-pushforward-qc-under-qcqs-morphism` |
| 28.26 “Sections of quasi-coherent sheaves” | [included] | `cor-affine-qc-sheaf-determined-global-sections`, `lem-sheaf-nakayama-fibre-detects-generation` |
| 29.2 “Closed immersions” | [included] | `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings`, `lem-closed-immersion-proper` |
| 29.3 “Immersions” | [included] | `def-locally-closed-immersion`, `thm-immersion-monomorphism-locally-finite-type` |
| 29.4 “Closed immersions and quasi-coherent sheaves” | [included] | `def-ideal-sheaf`, `thm-qc-ideal-closed-subscheme-correspondence-complete` |
| 29.5 “Supports of modules” | [included] | `def-support-module-sheaf`, `thm-support-finite-type-qc-closed` |
| 29.6 “Scheme theoretic image” | [included] | `def-scheme-theoretic-image`, `thm-scheme-theoretic-image-quasi-compact-morphism` |
| 29.7 “Scheme theoretic closure and density” | [included] | `lem-projective-closure-dense-affine-chart`, `cor-morphisms-equal-on-dense-open-reduced-source` |
| 29.8 “Dominant morphisms” | [included] | `def-dominant-morphism-and-rational-map`, `lem-dominant-map-pullback-function-fields` |
| 29.11 “Affine morphisms” | [included] | `def-affine-morphism-schemes`, `thm-affine-morphism-relative-spec-characterization` |
| 29.12 “Families of ample invertible modules” | [included] | `def-ample-invertible-sheaf`, `thm-serre-criterion-ampleness` |
| 29.13 “Quasi-affine morphisms” | [included] | `def-quasi-projective-morphism`, `def-quasi-affine-algebraic-set` |
| 30.6 “Colimits and higher direct images” | [included] | `thm-pushforward-qc-under-qcqs-morphism`, `def-higher-direct-image-sheaf` |
| 30.7 “Cohomology and base change, II” | [included] | `thm-cohomology-and-base-change`, `cor-upper-semicontinuity-cohomology-dimension`, `cor-euler-characteristic-locally-constant-flat-proper-family` |
| 30.8 “Cohomology of projective space” | [included] | `thm-cohomology-projective-space-twisting-sheaves`, `cor-intermediate-cohomology-o-d-projective-space-vanishes`, `cor-top-cohomology-projective-space-o-d` |
| 30.9 “Coherent sheaves on locally Noetherian schemes” | [included] | `def-coherent-module-scheme`, `thm-coherent-sheaves-abelian-noetherian-scheme` |
| 30.14 “Coherent sheaves on Proj, I” | [included] | `def-associated-sheaf-graded-module-proj`, `thm-hilbert-polynomial-coherent-sheaf` |
| 30.15 “Coherent sheaves on Proj, II” | [included] | `lem-eventual-global-generation-coherent-twists`, `thm-serre-vanishing` |
| 30.16 “Higher direct images along projective morphisms” | [included] | `thm-proper-pushforward-coherent`, `def-base-change-map-cohomology` |
| 30.17 “Ample invertible sheaves and cohomology” | [included] | `thm-serre-vanishing`, `thm-serre-criterion-ampleness` |
| 30.19 “Higher direct images of coherent sheaves” | [included] | `thm-proper-pushforward-coherent`, `thm-serre-finiteness-projective-cohomology` |
| 31.14 “Effective Cartier divisors” | [included] | `def-effective-cartier-divisor`, `thm-effective-cartier-divisor-closed-immersion`, `lem-effective-cartier-divisor-exact-sequence` |
| 31.15 “Effective Cartier divisors and invertible sheaves” | [included] | `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`, `lem-global-section-effective-divisor` |
| 31.16 “Effective Cartier divisors on Noetherian schemes” | [included] | `def-weil-divisor-normal-noetherian-scheme`, `thm-cartier-to-weil-divisor-normal-scheme` |
| 31.17 “Complements of affine opens” | [included] | `def-ample-invertible-sheaf`, `thm-serre-criterion-ampleness` |
| 31.19 “Relative effective Cartier divisors” | [included] | `def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle` |
| 31.20 “The normal cone of an immersion” | [included] | `def-tangent-cone-point`, `thm-exceptional-divisor-normal-cone-proj` |
| 31.21 “Regular ideal sheaves” | [included] | `cor-exceptional-divisor-smooth-center-normal-bundle`, `thm-blowup-smooth-surface-point-charts` |
| 31.22 “Regular immersions” | [included] | `thm-conormal-sequence-closed-immersion`, `cor-exceptional-divisor-smooth-center-normal-bundle` |
| 31.23 “Relative regular immersions” | [included] | `thm-conormal-sequence-closed-immersion`, `lem-differentials-commute-base-change-schemes` |
| 31.24 “Meromorphic functions and sections” | [included] | `def-sheaf-total-quotient-rings`, `def-rational-section-line-bundle`, `def-cartier-divisor` |
| 31.25 “Meromorphic functions and sections; Noetherian case” | [included] | `def-sheaf-total-quotient-rings`, `lem-principal-weil-divisor-locally-finite` |
| 31.26 “Meromorphic functions and sections; reduced case” | [included] | `def-sheaf-total-quotient-rings`, `def-reduced-affine-scheme` |
| 31.27 “Weil divisors” | [included] | `def-weil-divisor-normal-noetherian-scheme`, `def-principal-weil-divisor-and-class-group` |
| 31.28 “The Weil divisor class associated to an invertible module” | [included] | `thm-cartier-to-weil-divisor-normal-scheme`, `lem-cartier-to-weil-respects-principal-and-addition` |
| 31.29 “More on invertible modules” | [included] | `def-picard-group-scheme`, `thm-cartier-divisors-mod-principal-to-picard`, `thm-line-bundle-rational-section-cartier-divisor` |
| 31.30 “Weil divisors on normal schemes” | [included] | `thm-normal-functions-codimension-one-intersection`, `thm-cartier-weil-isomorphism-locally-factorial` |
| 31.31 “Relative Proj” | [included] | `def-relative-proj-quasi-coherent-graded-algebra`, `def-blowup-scheme-along-ideal` |
| 31.32 “Closed subschemes of relative proj” | [included] | `thm-closed-subschemes-projective-space-homogeneous-ideals`, `lem-projective-morphism-relative-proj-presentation` |
| 31.33 “Blowing up” | [included] | `def-blowup-scheme-along-ideal`, `thm-affine-blowup-standard-charts`, `thm-blowup-universal-property` |
| 31.34 “Strict transform” | [included] | `def-strict-transform-closed-subscheme`, `lem-total-transform-strict-plus-exceptional-multiplicity`, `thm-blowup-closed-immersion-transform-universal` |
| 31.36 “Blowing up and flatness” | [included] | `thm-blowup-base-change-flat`, `cex-blowup-arbitrary-base-change-failure` |

---

## Deliberately not decomposed

These headings were read and intentionally did not produce additional AV
items. The reason is specific to the heading; this is not a generic “advanced
topics” bucket.

| source heading | why no AV item was minted |
|---|---|
| Artin 1.6 “The Dual Curve” | Genuinely peripheral to the requested ground-up spine. Tangent lines and the Grassmannian are built, but dual varieties and biduality deserve a later projective-duality page rather than one isolated theorem. |
| Artin 1.9 “Hensel's Lemma” | Owned by `henselian-rings-and-equicharacteristic-cohen-structure`; AV cites local lifting consequences and does not re-mint the algebra. |
| Artin 1.11 “The Plücker Formulas” | The formulas require a developed dual-curve/singularity count not used later in this track; including only their final numerics would be peripheral and proof-incomplete. |
| Artin 2.1 “Rings and Modules” | Foundational commutative algebra already exists below AV. |
| Artin 2.8 “Finite Group Actions” | Invariant rings and quotients by group actions belong to invariant/geometric invariant theory; no later AV proof needs them. |
| Artin 4.1 “The Nakayama Lemma” | Commutative algebra owns Nakayama. AV uses it in stalk/fibre arguments by citation. |
| Artin 4.2 “Integral Extensions” | Commutative algebra owns integral extensions and closures. `AV-7` owns only normalization as geometry. |
| Artin 4.6 “Krull's Theorem” | Owned by `krull-dimension-and-height-theorems`. |
| Artin 4.8 “Double Planes” | A long surface-specific worked application that does not feed the requested scheme, cohomology, curve, or blowup chain. |
| Artin 5.1 “Modules -- a review” | Algebraic module structure is supplied below; geometric module sheaves begin at `AV-18`. |
| Artin 7.2 “Complexes” | Chain complexes and their homological algebra belong to the homological-algebra track. |
| Gao--Zhang 3.8 “The Grothendieck group on affine schemes” | Algebraic $K$-theory is a separate subject and is not a prerequisite for the requested curve RR proof route. |
| Gao--Zhang 7.1 “Grothendieck groups over Dedekind domains” | Dedekind ideal classes are owned by `dedekind-domains-and-ideal-classes`; $K_0$ is algebraic $K$-theory. |
| Gao--Zhang 7.3 “Grothendieck groups over curves” | This source's $K$-theoretic RR route is not needed because `AV-24` uses coherent Euler characteristics and point exact sequences. |
| Gao--Zhang 8.1 “Preliminaries” | Its purpose is solely to launch the GRR chapter; the prerequisite intersection/$K$-theory package is absent. |
| Gao--Zhang 8.2 “Chow group” | Full cycle/rational-equivalence/intersection theory is a later algebraic-intersection-theory track, not a one-row add-on. |
| Gao--Zhang 8.3 “Chern class for line bundle” | Characteristic-class construction is assigned to algebraic topology by the seam contract; algebraic Chow-valued Chern classes also need the declined Chow group. |
| Gao--Zhang 8.4 “Chern classes for a vector bundle” | Same seam ruling, with the additional splitting-principle machinery not yet available. |
| Gao--Zhang 8.5 “Chern character” | Belongs with characteristic classes/$K$-theory, both outside this AV commission. |
| Gao--Zhang 8.6 “Todd class” | Belongs with characteristic classes and GRR; no AV theorem here consumes it. |
| Gao--Zhang 8.7 “Grothendieck--Riemann--Roch theorem” | Requires the declined Chow, Chern character, Todd class, and $K$-theory package; curve Riemann--Roch is fully supplied without it. |
| Stacks 20.3 “Derived functors” | Homological algebra owns the construction. `AV-21` applies $R^i\Gamma$ after citing that supplier. |
| Stacks 20.5 “First cohomology and extensions” | Extension/Ext classification belongs to homological algebra and is not required for the Čech/de Rham interface. |
| Stacks 20.13 “The Leray spectral sequence” | Spectral-sequence algebra belongs to homological algebra. AV states the acyclic-cover theorem it actually needs. |
| Stacks 26.15 “A representability criterion” | The criterion is aimed at broader representable functors; the affine Yoneda and projective-bundle functors used here have direct constructions. General representability belongs with moduli. |
| Stacks 28.6 “Jacobson schemes” | Useful refinement but genuinely peripheral to the requested finite-type-over-a-field and scheme-property spine; closed-point comparisons already state their finite-type hypotheses. |
| Stacks 28.8 “Cohen--Macaulay schemes” | Depth and Cohen--Macaulay algebra are explicitly owned by commutative algebra; only cited consequences may appear in later duality tracks. |
| Stacks 28.11 “Catenary schemes” | Catenarity is part of the dimension-chain commutative-algebra supplier; AV states exactly where fibre/codimension results need it. |
| Stacks 28.12 “Serre's conditions” | $R_i/S_i$, depth, and regularity criteria are owned by commutative algebra. `AV-7` cites $R_1+S_2$. |
| Stacks 28.13 “Japanese and Nagata schemes” | These finiteness classes belong to advanced commutative algebra; the finite-type field cases used for normalization are already licensed by the cited finiteness theorem. |
| Stacks 28.14 “G-schemes” | Equivariant/invariant geometry is not consumed by the requested track. |
| Stacks 28.24 “Gabber's result” | A specialized extension theorem, peripheral to the coherent-sheaf operations and cohomology chain scaffolded here. |
| Stacks 28.25 “Sections with support in a closed subset” | Its natural continuation is local cohomology, which needs a dedicated homological/local-cohomology treatment not reached here. |
| Stacks 29.9 “Surjective morphisms” | No new named theorem is needed beyond the explicit surjectivity conditions already built into faithfully flat, finite, and proper morphisms. Minting a generic catalogue page would add no proof consumer. |
| Stacks 29.10 “Radicial and universally injective morphisms” | Genuinely peripheral to the requested separated/proper/flat/smooth/étale list; a future purely inseparable geometry page should own the full equivalence package. |
| Stacks 29.14 “Morphisms and ring maps of finite type” | The ring-map finiteness proofs are commutative algebra; AV's local geometric definitions and stability lemmas already cite them. |
| Stacks 29.25 “Submersive morphisms” (the separate submersive section following openness) | Quotient-topology refinements are not used by any later AV theorem and are peripheral here. |
| Stacks 29.27 “Flat closed immersions” | The algebraic idempotent/open-and-closed criterion is a flatness consequence; no separate AV page consumer warrants duplicating it. |
| Stacks 29.31 “Syntomic morphisms” | This compound class is useful in arithmetic geometry but is not required for the basic flat/smooth/étale progression. |
| Stacks 29.34 “Finite order differential operators” | Leads to principal parts and $D$-modules, a separate subject; `AV-16` needs only first differentials. |
| Stacks 29.46 “Universal homeomorphisms” and 29.48 “Seminormalization” | Both belong with radicial/seminormal geometry, not the normalisation-and-smoothness path requested here. |
| Stacks 30.10 “Coherent sheaves on Noetherian schemes” | The sheaf consequences are already included; its Artin--Rees proof ingredient remains with commutative algebra and was not re-minted. |
| Stacks 30.11 “Depth” | Depth is expressly a commutative-algebra seam. |
| Stacks 30.12 “Dévissage of coherent sheaves” | The systematic dévissage package belongs with $K$-theory/intersection theory; the individual support induction needed for Serre vanishing is already isolated. |
| Stacks 30.13 “Finite morphisms and affines” | Its cohomological conclusion is already the `thm-affine-morphism-higher-direct-images-qc-vanish` item; no duplicate item was minted. |
| Stacks 30.18 “Chow's Lemma” | Important but not needed for the chosen proofs of proper finiteness or curve RR. A full proof requires a separate modification/quasi-projective reduction sequence; one unsupported headline would be padding. |
| Stacks 31.13 “Reflexive modules” | The full reflexive/S2 correspondence needs the commutative-algebra depth package; only the codimension-one normal-function consequence is cited. |
| Stacks 31.18 “Norms” | Norms of finite morphisms deserve a finite-flat/arithmetical divisor treatment and are not consumed by the basic divisor/RR chain. |
| Stacks 31.35 “Admissible blowups” | This refinement is aimed at formal/admissible geometry, whose completion/formal-scheme prerequisites are outside the track. |
| MIT 18.725 Lecture 17 “Abel--Jacobi Map, Elliptic Curves” | Abstract Picard groups and genus-one plane embeddings are included, but representability of the Picard functor, Jacobians, and Abel--Jacobi belong to moduli/abelian varieties. |
| Fulton Ch. 5 §5.5 “Max Noether's Fundamental Theorem” | Its ideal-membership/interpolation package is not used by the selected Bézout proof; including it alone would open a separate plane-linear-systems branch. |
| Fulton Ch. 7 “Resolution of Singularities” beyond explicit curve charts | `AV-26` supplies blowups and examples but records the termination theorem as `not-supplied`; a full embedded-resolution proof needs a separately commissioned singularity invariant sequence. |
| Tong Ch. 3 §3.2 “Differentials, residues, repartitions, duality,” proof paragraph at p. 93 | The heading is in scope, but this source explicitly says its proof is to be added. It supplied no item provenance and was not counted as a duality treatment. |
| Vakil Ch. 24 §§24.1--24.3 “Derived functors” machinery | Derived functors/injectives are homological algebra; only the sheaf-cohomology applications in §§24.4--24.5 were harvested into AV. |
| Vakil/Stacks fpqc descent beyond the single properness and vanishing interfaces | Full descent data/effectivity needs a dedicated descent page and belongs after a broader faithfully-flat geometry treatment. |
| Moduli spaces, algebraic spaces, stacks, Picard schemes, Hilbert schemes | Not in the finite-type scheme foundation requested, and require representability/descent prerequisites not reached. |
| Étale cohomology, fundamental groups, and Weil conjectures | Require sites/topoi and arithmetic input beyond ordinary topological-space sheaves; the track stops at étale morphisms. |
| Higher-dimensional Serre/Grothendieck duality and dualizing complexes | Homological algebra owns derived categories; the commission expressly asks for Serre duality for curves, which is fully built. |
| General resolution of singularities | The user asked for blowups, not a characteristic-dependent research-scale resolution theorem. Only plane-curve resolution is recorded, without proof or dependency use. |

## Well-definedness and proof-closure audit

| construction or theorem | obligation explicitly closed by |
|---|---|
| $I(X)$ / $V(I)$ correspondence | `lem-variety-ideal-galois-connection`, followed by the cited strong Nullstellensatz in `thm-affine-nullstellensatz-correspondence` |
| regular function represented by $g/h$ | equality is local; `lem-regular-functions-form-sheaf-classical` and `thm-coordinate-ring-principal-open` make denominator changes harmless |
| function field from an affine open | `thm-function-field-independent-affine-open` |
| rational-map equivalence relation | `lem-rational-map-equivalence-transitive`, using irreducibility and dense intersections |
| homogeneous projective equation | `lem-homogeneous-polynomial-zero-locus-well-defined` |
| projective closure from equations | saturation in `thm-ideal-projective-closure-saturation`, not generatorwise homogenization |
| Segre/Plücker coordinates | basis/scaling independence is separated into `lem-segre-map-well-defined-injective` and `lem-plucker-map-well-defined-injective` |
| tangent space independent of embedding/equations | intrinsic $\mathfrak m/\mathfrak m^2$ definition plus `thm-zariski-tangent-space-jacobian-kernel` |
| normalization glued from affines | `thm-normalization-glues-variety`, restriction compatibility, then universal uniqueness |
| local intersection multiplicity | finite-length criterion and invariance are separate before Bézout uses the number |
| stalk germs | `lem-germ-equivalence-relation`; stalkwise isomorphism then proved, not assumed |
| sheafification | two plus steps, universal property, and stalk preservation appear as separate items |
| inverse-image sheaf | defined by sheafification, with stalk computation and adjunction closing independence |
| affine structure sheaf | basis restriction compatibility, sheaf condition, basic sections, and stalk localizations are separate proof items |
| scheme gluing | `thm-gluing-affine-schemes` includes cocycle and uniqueness checks |
| fibre product | affine tensor construction, global gluing, universal property, and canonical associativity are separate |
| scheme fibre/geometric fibre | residue field and algebraic closure are stated; no set-theoretic replacement is allowed |
| separatedness/properness valuative tests | uniqueness and existence are kept distinct and all-valuation-ring quantification is stated |
| $\Omega_{B/A}$ | universal construction precedes every presentation; localization/base-change/transitivity are individually proved |
| smooth/étale equivalences | definitions are primary; finite-presentation/flatness hypotheses accompany formal and Jacobian equivalents |
| $\widetilde M$ | basic-open construction, stalks, sections, and affine equivalence are separate |
| Proj | degree-zero localization and irrelevant cases precede gluing; shifts and quotient convention are fixed |
| Cartier divisor / $\mathcal O(D)$ | local-unit equivalence, sign, invertibility, tensor addition, and rational-section correspondence are separate |
| order of a rational function | only at codimension-one DVRs, citing the DVR supplier; local finiteness is proved before summing |
| Čech cohomology | cover indexing, $\delta^2=0$, refinement homotopy, and derived comparison are separate; equality needs acyclicity |
| Euler characteristic | finiteness and high-degree vanishing precede definition and additivity |
| degree and genus over nonclosed fields | residue degrees and geometric connectedness are explicit |
| residue | coordinate independence and field trace precede the global residue theorem |
| Serre pairing | descent to cohomology, nondegeneracy on one side, dimension balance, and trace normalization are separate |
| blowup | Rees/Proj definition, generator-independent charts, invertible pullback, and universal property are separate |
| strict transform | scheme-theoretic closure and exceptional multiplicity are distinguished from total transform |

## Choice-strength ledger

| portion | strength recorded for future items |
|---|---|
| Finite covers, finite generators, finite affine refinements, Jacobian minors, finite divisor supports | ZF; finite choice is provable in ZF and must not be labelled AC. |
| Stalks, sheafification, direct/inverse image, gluing from specified data, Čech products over a set-indexed cover | ZF constructions once the underlying sets/categories are supplied; no choice function is selected. |
| Zorn-based maximal ideals, bases of arbitrary vector spaces, algebraic closures, valuation-ring domination, and enough commutative-algebra primes | Inherit the exact choice charge from their cited algebra/field suppliers. AV must not relabel those proofs as choice-free. |
| Existence of injective resolutions / enough injective sheaves used to define derived sheaf cohomology | Ordinary AC/Zorn in the conventional development, inherited from homological algebra. The Godement resolution gives a concrete flasque computation but does not erase the choice charge of the general derived-category supplier. |
| Noetherian induction | ZF once the Noetherian hypothesis is given; it is well-founded induction, not dependent choice. |
| “General hyperplane” in Bertini over an infinite field | ZF relative to the field: nonempty Zariski open has a rational point over algebraically closed/infinite $k$ by the cited algebraic result; no global sequence of choices is made. |
| Choosing a local parameter at one specified smooth curve point | Existential elimination in a single proof, no countable choice. The global residue sum is finite-support and does not simultaneously choose parameters at all points. |
| Finite-dimensional duality and rank/dimension arguments | ZF; only finite bases are used. |
| Countable choice / dependent choice | No AV-specific theorem newly requires either. If a cited analytic AT/de Rham supplier uses one, its existing ledger remains authoritative. |

## Amendments and cross-track interfaces owed

1. **Placement after topology.** Splice `AV-1` immediately after `AT-n`, where
   `n` is the final relative algebraic-topology pair number. Do not replace
   this placeholder by guessing from a concurrent file.
2. **AT → AV interface.** `AV-21` may cite the AT pair that owns singular
   cochains/cohomology and Mayer--Vietoris when stating the singular side of
   de Rham/Čech comparison. The splice must replace “the resolved AT supplier”
   with that exact relative label. Nothing else in AV treats the mere position
   after AT as a mathematical dependency.
3. **AV → AT interface.** AT must forward-cite `AV-9`, `AV-10`, and `AV-21`
   for sheaves, stalks, sheafification, Čech complexes, refinement
   independence, acyclic-cover comparison, fine resolutions, and the abstract
   de Rham-resolution principle. AT continues to own singular cohomology, cup
   products in its register, and characteristic classes.
4. **Differential geometry.** Its de Rham theorem pages must cite `AV-21` for
   the sheaf/Čech/fine-resolution side and AT for singular cohomology. AV does
   not construct smooth manifolds, forms, partitions of unity, or integration.
5. **Commutative algebra.** The future AV build must use stable page ids
   `noether-normalisation-and-nullstellensatz`,
   `zariski-topology-on-prime-spectra`,
   `krull-dimension-and-height-theorems`,
   `valuation-rings-and-discrete-valuation-rings`,
   `dedekind-domains-and-ideal-classes`, and
   `flatness-and-faithful-flatness`, plus the existing localization,
   integral-extension, primary-decomposition, graded/Hilbert, and
   depth/regularity pages. It must not copy their proofs into AV.
6. **Homological algebra.** `AV-21`, `AV-22`, and `AV-25` cite it for derived
   functors, injective resolutions, Ext, and spectral sequences as algebra.
   Those pairs own the sheaf application, geometric hypotheses, comparison,
   vanishing/finiteness, and concrete curve pairing.
7. **Complex analysis/Riemann surfaces.** AV owns algebraic curves over an
   arbitrary field, algebraic divisors, algebraic RR, and algebraic Serre
   duality. The complex-analysis surface block owns analytic Riemann surfaces,
   meromorphic differential analysis, uniformisation, and analytic comparison.
   Any identification of the two Picard/genus/RR registers needs an explicit
   analytification/GAGA comparison and cannot be asserted by shared notation.
8. **Future number theory/arithmetic geometry.** This track does not mint
   schemes over Dedekind bases beyond examples, arithmetic surfaces, étale
   cohomology, or Weil conjectures. Those consumers may cite the scheme,
   proper/smooth/étale, divisor, and curve interfaces by AV label.
9. **Machine plan.** No `plan-spec.json` edit is made here. The orchestrator
   must check all stable page ids and replace relative labels only in a later
   authorized splice/build.

**Blockers recorded rather than prompted:** the exact final AT label and exact
AT singular-cohomology supplier label are unknown because the concurrent AT
file was prohibited from inspection. They are non-blocking placeholders for
the orchestrator. Gathmann's PDFs failed the accessibility check and were not
counted. Tong's Serre-duality proof is unfinished and was not counted for that
pair. No other blocker remains.

---

## Verified measurements

These figures were re-derived from this finished file; none is copied from the
dispatch.

| measurement | verified result | counting rule |
|---|---:|---|
| file-state before this lane | 0 proposed items | `research/plan-algebraic-geometry-track.md` did not exist on disk or in the tracked tree at preflight. |
| file-state after this lane | 990 distinct proposed item ids | Count item-inventory rows whose first cell is an id beginning `def-`, `lem-`, `thm-`, `cor-`, `rem-`, `ex-`, or `cex-`; sort unique. There are 990 rows and 990 unique ids. |
| A-page items | 748 | Same rule, restricted to A inventories. |
| B-page dependency leaves | 242 | Same rule, restricted to B inventories. |
| A/B pairs | 26 | Headings `AV-1` through `AV-26`, with no gap or duplicate. |
| included heading dispositions | 266 | Table rows matching an exact `[included]` disposition in the canonical crosswalk. Duplicate headings in non-harvest verification sources are not double-counted; every one of these 266 rows names at least one actual proposed id. |
| decomposition ratio | **990 / 266 = 3.72×** | Proposed item ids divided by included canonical heading dispositions. This denominator measures section-level source headings, not chapters and not repeated synonyms from every corroborating book. |
| largest A page | **AV-23, 36 items** | Actual inventory-row count, not its prose declaration. |
| A pages over 60 | 0 | No split was required; splitting would have manufactured extra page boundaries. |
| independent full treatments | 10 | V, M, S, GZ, A, F, B, T, Ar, K. Tong is excluded only from AV-25's duality cell, not from the corpus. |
| independent full-source hosts | 9 | `math.stanford.edu`, `www.jmilne.org`, `stacks.math.columbia.edu`, `web.math.princeton.edu`, `math.mit.edu`, `www.math.lsa.umich.edu`, `ocw.mit.edu`, `www.math.u-bordeaux.fr`, `www.math.purdue.edu`. |
| source-matrix coverage | 26/26 pairs with at least 2 treatments | Count of AV rows in the per-pair matrix; no dash cell. |
| component-provenance coverage | 990/990 rows | 956 `literature-derived` statements with adapted or nonapplicable/not-supplied proofs, plus 34 `ai-generated` statements. All 34 generated statements are B-page leaves with `not-applicable` proof and no dependency use. |
| duplicate proposed ids | 0 | Sorted duplicate scan. |
| collisions with live item filenames or any string in `plan-spec.json` | 0 | Exact-string comparison against both disk inventories. |
| crosswalk references to nonexistent proposed ids | 0 | Exact comparison of every backticked item id on an `[included]` row against the 990 inventory ids. |
| AV label collisions elsewhere in `research/*.md` or `plan-spec.json` | 0 at verification time | Exact `AV-[0-9]+` heading/string scan, excluding this file. |

The ratio is not being used as a quota. Its 3.72× value comes from named proof
splits: for example, Bézout separates local length, invariance, finiteness,
global length, and local summation; sheafification separates the plus
construction, separatedness, sheafhood, universal property, and stalks;
Riemann--Roch separates point exact sequences, Euler-characteristic change,
degree induction, vanishing, duality, and sharp applications. The deliberately
not-decomposed ledger documents the headings for which another item would have
been padding or a seam violation.
