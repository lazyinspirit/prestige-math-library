---
page: quasi-coherent-and-coherent-sheaves-and-vector-bundles
title: Quasi Coherent and Coherent Sheaves and Vector Bundles
status: draft
requires:
  - sheaf-operations-exactness-ringed-spaces-and-module-pullback
  - affine-schemes-and-the-structure-sheaf
  - schemes-subschemes-and-morphisms-locally-of-finite-type
  - fibre-products-base-change-and-scheme-theoretic-fibres
  - flat-smooth-and-etale-morphisms
  - noetherian-rings-and-hilbert-basis
  - localisation-of-modules-and-support
  - finite-proper-and-projective-morphisms
items:
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - lem-associated-sheaf-stalk-localization
  - lem-associated-sheaf-sections-basic-open
  - lem-associated-sheaf-restriction-affine-open
  - def-quasi-coherent-module-scheme
  - lem-principal-affine-module-descent
  - thm-affine-quasi-coherent-equivalence
  - cor-affine-qc-sheaf-determined-global-sections
  - thm-quasi-coherence-check-affine-cover
  - thm-kernels-cokernels-qc-modules
  - lem-tensor-qc-modules-quasi-coherent
  - lem-pullback-qc-module-quasi-coherent
  - thm-pushforward-qc-under-qcqs-morphism
  - def-finite-type-finite-presentation-module-sheaf
  - def-coherent-module-scheme
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - def-internal-hom-qc-sheaves
  - lem-internal-hom-fp-qc
  - def-locally-free-sheaf-finite-rank
  - lem-dual-locally-free-and-base-change
  - def-symmetric-algebra-qc-module
  - lem-symmetric-algebra-qc-and-base-change
  - def-vector-bundle-scheme
  - thm-vector-bundles-locally-free-sheaves-equivalence
  - def-invertible-sheaf
  - lem-invertible-sheaf-dual-tensor-inverse
  - def-support-module-sheaf
  - thm-support-finite-type-qc-closed
  - def-fibre-of-module-at-point
  - lem-sheaf-nakayama-fibre-detects-generation
  - thm-locally-free-locus-finite-presentation-open
  - lem-fitting-ideals-presentation-independent
  - def-fitting-ideal-sheaf
  - thm-fitting-ideals-control-rank-loci
  - def-quasi-coherent-ideal-sheaf
  - thm-qc-ideal-closed-subscheme-correspondence-complete
  - thm-quasi-coherent-ideal-closed-subscheme-correspondence
  - thm-scheme-theoretic-image-quasi-compact-morphism
  - rem-coherent-needs-noetherian-or-coherent-ring-care
---

This page develops quasi-coherent and coherent module sheaves on a scheme,
their basic operations, the vector-bundle dictionary, quasi-coherent ideals, closed subschemes, and scheme-theoretic images. On an affine scheme
$X=\operatorname{Spec}A$ it constructs the associated sheaf
$\widetilde M$ of an $A$-module $M$ from its values $M_f$ on the distinguished
opens, proves that its stalks are the localisations $M_{\mathfrak p}$, and
shows that $M\mapsto\widetilde M$ and
$\mathcal F\mapsto\Gamma(X,\mathcal F)$ are quasi-inverse equivalences between
$A$-modules and quasi-coherent sheaves. Quasi-coherence is then defined
chartwise on an arbitrary scheme, and the page records the standard closure
properties: kernels, images and cokernels of quasi-coherent maps, tensor
products, pullbacks along arbitrary morphisms, and pushforwards along
quasi-compact quasi-separated morphisms are again quasi-coherent.
Quasi-coherence may be checked on any one affine open cover, and on an affine
scheme it is exactly the property of being associated to a module.

Finite type and finite presentation are defined by local surjections and local
finite presentations. A quasi-coherent sheaf is coherent when it is finite
type and every kernel of a sheaf map out of a finite free module is again
finite type; the page stresses that coherent is not the same as finitely
presented over a non-Noetherian base, and that coherence coincides with finite
type only over locally Noetherian schemes, where coherent sheaves form an
abelian category closed under extensions. The internal Hom
$\mathcal{H}om(\mathcal F,\mathcal G)$ is quasi-coherent as soon as $\mathcal F$
is finitely presented; no such claim is made for an arbitrary $\mathcal F$.

Local freeness of finite rank, invertible sheaves, dual base change, the
symmetric algebra $\operatorname{Sym}(\mathcal F)$, and their compatibility
with restriction and pullback are developed before the vector-bundle
dictionary. A geometric vector bundle is an affine $X$-scheme whose relative
coordinate algebra is Zariski locally the graded polynomial algebra
$\operatorname{Sym}(\mathcal O_U^r)$, with linear transition data. The total
space of a finite locally free sheaf $\mathcal E$ is
$V(\mathcal E)=\operatorname{Spec}_X\operatorname{Sym}(\mathcal E^\vee)$, and
$V$ is an equivalence onto the rank-finite geometric vector bundles with
linear morphisms, with inverse the sheaf of sections. Rank zero is allowed:
$V(0)=X$. The covariant sheaf-to-space convention is kept separate from the
contravariant coordinate-module construction
$\mathcal F\mapsto\operatorname{Spec}_X\operatorname{Sym}(\mathcal F)$.

Support, fibres and Fitting ideals supply the pointwise tools.
$\operatorname{Supp}(\mathcal F)$ is defined by nonvanishing stalks, the fibre
$\mathcal F(x)=\mathcal F_x/\mathfrak m_x\mathcal F_x$ is a residue-field vector
space distinct from the stalk, and Nakayama-type arguments turn fibre
vanishing and fibre generation into local statements for finite-type
quasi-coherent sheaves. The Fitting ideals
$\operatorname{Fitt}_k(\mathcal F)$ are independent of the chosen finite
presentation and satisfy
$V(\operatorname{Fitt}_r)=\{x:\dim_{\kappa(x)}\mathcal F(x)>r\}$, with
$\operatorname{Fitt}_0$ cutting out the support. Pointwise fibre dimension
alone does not imply local freeness; the Fitting ideals control that
distinction, and the finite-free locus of a finitely presented quasi-coherent
sheaf is open in $X$. The page closes with a complete route from
quasi-coherent ideal sheaves to closed subschemes, independent of the earlier
published correspondence.

Every construction includes the degenerate cases: the zero ring and empty
spectrum, the zero module, empty covers, the empty gluing, the rank-zero
bundle, and $I=A$ in quotient examples. The Axiom of Choice is inherited from
the associated-sheaf, affine-equivalence and relative-spectrum machinery; each
item that uses it states the inheritance and the exact step at which the
choice enters. No Noetherian or finite-generation hypothesis is implicit
anywhere.
