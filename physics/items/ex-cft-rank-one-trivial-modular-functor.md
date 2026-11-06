---
id: ex-cft-rank-one-trivial-modular-functor
kind: example
title: Rank-one trivial modular functor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: mathematics
deps:
  - def-cft-modular-functor-and-sewing
dependency_roles:
  def-cft-modular-functor-and-sewing: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks of Rational Vertex Operator Algebras"
      url: https://arxiv.org/pdf/2507.05845v2
      locator: "§§3.2–3.4 for the surface operad, pairing, coevaluation, and modular-algebra definition; the example's algebraic checks are direct."
    - title: "Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories and Modular Functor, Chapter 5"
      url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
      locator: "§5.1, printed pp. 93–98, for mapping-class representations and modular-functor axioms; §5.2, pp. 99–106, for sewing moves and torus generators. Used for conventions only."
---

## Example

Let $\mathcal C=\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$, the category of finite-dimensional complex vector spaces and linear maps, take the distinguished vacuum object to be $E=\mathbb C$, and use the trivial extension $Q=\mathsf{Surf}$ (anomaly parameter $0$). Use boundary reversal $D(X)=X^\vee=\operatorname{Hom}_{\mathbb C}(X,\mathbb C)$ with the canonical biduality map $\eta_X:X\to X^{\vee\vee}$. Give every connected surface $\Sigma$ with ordered, parametrized boundary labels $X_1,\ldots,X_n\in\mathcal C$ the right-exact functor
$$F_\Sigma(X_1,\ldots,X_n)=X_1\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}X_n,$$
where the empty tensor product is $\mathbb C$. Every mapping class acts by the identity natural transformation. Disjoint union uses the canonical tensor-product isomorphism. The evaluation pairing is the right-exact functor $\kappa:\mathcal C\boxtimes\mathcal C\to\mathcal C$ induced by $(X,Y)\mapsto X\otimes_{\mathbb C}Y$. Under the canonical equivalence $\mathcal C\boxtimes\mathcal C\simeq\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}$, define $\mathrm{coev}:\mathrm{Vect}_{\mathbb C}^{\mathrm{fd}}\to\mathcal C\boxtimes\mathcal C$ by $W\mapsto W\boxtimes\mathbb C$; its coevaluation object is $\Delta=\mathrm{coev}(\mathbb C)=\mathbb C\boxtimes\mathbb C$. The pairing-duality compatibility is the canonical natural isomorphism $X\otimes Y\cong\operatorname{Hom}_{\mathbb C}(X,Y^*)^*$ sending $x\otimes y$ to the functional $f\mapsto f(x)(y)$. The symmetry is given by the tensor flip.

For the unique simple label $\mathbf1=\mathbb C$, every connected genus-$g$ state space is $F_{g,n}(\mathbf1,\ldots,\mathbf1)=\mathbb C$. Both separating and nonseparating sewings are the canonical tensor-unit isomorphisms, with the unique intermediate label $\mathbf1=\mathbf1^\vee$. The torus mapping-class generators $S$ and $T$ act by the $1\times1$ identity matrices. This is a mathematical modular-functor example; it is not asserted to arise from a VOA or a physical conformal field theory.

## Example references

[[def-cft-modular-functor-and-sewing]]

## Facts & Assumptions

**Given:** Finite-dimensional complex vector spaces, the standard tensor product, algebraic dual and biduality, the evaluation and coevaluation functors specified in the Example, and the surface modular-functor definition of [[def-cft-modular-functor-and-sewing]]. All surfaces are the connected objects of $\mathsf{Surf}$; their boundary circles have the ordered parametrizations fixed in that definition.

[F1] [[def-cft-modular-functor-and-sewing]]: a modular functor requires an extension with connected homotopy fibers, a genus-zero section and the disk-insertion equivalence on extension fibers; a modular algebra then supplies the category duality data, labeled-surface functors, mapping-class actions, vacuum capping, and coherent disjoint-union and sewing isomorphisms.

[F2] [[def-cft-modular-functor-and-sewing]]: in the semisimple case the coevaluation object is the direct sum over simple labels $X_i^\vee\boxtimes X_i$; the vacuum insertion, boundary-reversal convention, and iterated-sewing coherence are part of the axioms.

## Verification

1.1 The category $\mathcal C$ is $\mathbb C$-linear and abelian. Each morphism space is finite dimensional; every object is a finite direct sum of the single simple object $\mathbb C$; every object is projective because every surjection of vector spaces splits; and a vector space of dimension $d$ has a composition series of length $d$. Thus $\mathcal C$ is finite in the sense of [F1]. The contravariant equivalence $D(X)=X^\vee$ has the canonical biduality $\eta_X:X\to X^{\vee\vee}$, and $D(\eta_X)\circ\eta_{D X}=\mathrm{id}_{D X}$. Under the Deligne equivalence $\mathcal C\boxtimes\mathcal C\simeq\mathcal C$, the functor $\kappa$ sends $X\boxtimes Y$ to $X\otimes Y$, and $\mathrm{coev}$ sends a vector space $W$ to the two-factor object $W\boxtimes\mathbb C$. The displayed map $x\otimes y\mapsto(f\mapsto f(x)(y))$ identifies this pairing with $\operatorname{Hom}(X,DY)^*$; tensor flip corresponds to the duality transpose and canonical biduality. Thus it supplies the required pairing-duality compatibility. Its object $\Delta=\mathbb C\boxtimes\mathbb C$ is fixed by the factor-swap symmetry. The first triangle composite sends $X$ canonically through $\mathbb C\otimes(\mathbb C\otimes X)$ to $X$; the second sends it through $(X\otimes\mathbb C)\otimes\mathbb C$ to $X$. These are the standard natural associativity and unit isomorphisms, so both triangle isomorphisms hold. The pairing is therefore symmetric and nondegenerate in the sense of [F1]. [given, F1, algebra]

2.1 Tensor product is a right-exact functor in each finite-dimensional vector-space variable. For the identity extension $Q=\mathsf{Surf}$, each homotopy fiber is contractible and the genus-zero section is the identity, so every disk-insertion functor $\lambda_\phi$ is an equivalence between contractible groupoids. For a parametrization-preserving mapping class, assigning the identity on each tensor product is natural and preserves composition because $\mathrm{id}\circ\mathrm{id}=\mathrm{id}$. For a disjoint union, the assigned map is the canonical associator and symmetry of tensor products; the empty surface receives $\mathbb C$, the tensor unit. Capping an added boundary labeled by the distinguished vacuum object $\mathbb C$ uses $X\otimes\mathbb C\cong X$, so vacuum insertion holds. [given, F1, F2, step 1.1, algebra]

3.1 Since $\mathcal C$ has exactly one simple isomorphism class, its coevaluation sum in [F2] has one term $\mathbb C^\vee\boxtimes\mathbb C\cong\mathbb C\boxtimes\mathbb C$. Inserting it at either pair of oppositely oriented boundaries leaves the external tensor product unchanged up to its canonical associator and unit maps. Thus the separating and nonseparating sewing maps are isomorphisms, and all intermediate-label sums have one term. [given, F2, step 1.1, step 2.1, algebra]

4.1 Every composite graph operation reduces to inserting or removing tensor units, rebracketing, and permuting tensor factors. On a pure tensor, each canonical associator or unitor preserves the ordered list of vector entries after rebracketing or deleting a unit, and each symmetry permutes that list by the prescribed boundary permutation. Pure tensors span every finite tensor product, so any two composites with the same graph operation agree as linear maps. The identity mapping-class action preserves this equality. The torus generators are particular mapping classes and therefore each acts on the one-dimensional state space as $[1]$. This verifies the modular-algebra axioms and the claimed $S,T$ matrices. [given, F1, F2, step 2.1, step 3.1, algebra] ∎
