---
id: thm-gts-smooth-projective-variety-stability-by-embedding
kind: theorem
title: Stability conditions on smooth projective complex varieties
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
deps:
- def-gts-bridgeland-stability-condition-with-support-property
- def-derived-category-of-an-abelian-category
- lem-gts-projective-space-bayer-restriction-stability
- lem-gts-skyscraper-semistable-phase-amplitude
- lem-gts-compact-adjoint-induced-stability
- lem-gts-ramified-finite-map-induced-stability
- lem-eventual-global-generation-coherent-twists
- lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
- thm-ag-standard-smooth-geometric-regularity
- thm-localisation-and-polynomial-extension-of-regular-rings
- def-axiom-of-choice
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  lem-gts-projective-space-bayer-restriction-stability: mathematical-premise
  lem-gts-skyscraper-semistable-phase-amplitude: mathematical-premise
  lem-gts-compact-adjoint-induced-stability: mathematical-premise
  lem-gts-ramified-finite-map-induced-stability: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space: mathematical-premise
  thm-ag-standard-smooth-geometric-regularity: mathematical-premise
  thm-localisation-and-polynomial-extension-of-regular-rings: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
    url: https://arxiv.org/pdf/2601.22994v1
    locator: Theorem 1.1 and Theorem 6.5; finite partial-resolution proof with corrected phase direction
axiom_use: ZF + AC
dependency_level: 8
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC. Every smooth projective variety $X$ over $\mathbb C$ admits a locally finite Bridgeland stability condition on $D^b(\operatorname{Coh}X)$ satisfying the support property with respect to a homomorphism from its Grothendieck group to a finite-rank free abelian group.

More precisely, for each closed immersion $i:X\hookrightarrow\mathbb P^n_{\mathbb C}$ there is a projective-space condition $\sigma=(Z,\mathcal P)$ for which
$$\mathcal Q(t)=\{A\in D^b(\operatorname{Coh}X):i_*A\in\mathcal P(t)\}$$
is a bounded slicing, $Z_X=Z\circ v\circ i_*$ is its central charge, and its finite-rank charge lattice can be taken to be the subgroup $\operatorname{im}(v i_*)\subseteq\Lambda_\sigma$ with the inherited norm.

## Statement references

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-derived-category-of-an-abelian-category]]

## Facts & Assumptions

**Given:** A smooth projective complex variety $X$ and AC, and a chosen projective embedding $i:X\hookrightarrow S=\mathbb P^n_{\mathbb C}$. The empty variety is permitted.

[F1] [[lem-gts-projective-space-bayer-restriction-stability]] supplies, for any integer $N\ge1$, $\sigma$ on $S$ with all points semistable of phase $1$, $\sigma\preceq\sigma\otimes\mathcal O(1)$, and $\sigma\otimes\mathcal O(N)\prec\sigma[1]$. Its relation compares the upper HN phase of objects of the left slicing in the right slicing.

[F2] [[lem-gts-skyscraper-semistable-phase-amplitude]] gives $\mathcal P((0,1])\subseteq\operatorname{Coh}(S)[0,n]$, $\operatorname{Coh}(S)\subseteq\mathcal P((-n,1])$, and $E\otimes^{\mathbf L}F[n+1]\in\mathcal P((1,\infty))$ for $E\in\mathcal P((0,1])$ and coherent $F$ when nonzero.

[F3] [[lem-gts-compact-adjoint-induced-stability]] is the local induction theorem. For a conservative exact functor $F:\mathcal D_1\to\mathcal D_2$ on bounded coherent categories, extending to a coproduct-preserving functor on the relevant unbounded categories, with left adjoint $L$ preserving bounded coherent objects, bounded-coherent reflection, compact bounded coherent objects and $FL\mathcal P(t)\subseteq\mathcal P([t,\infty))$, it constructs the induced bounded slicing, finite HN filtrations, local finiteness and support on $\operatorname{im}(vF)$. [[lem-gts-ramified-finite-map-induced-stability]], proof 1.1–3.2, additionally constructs the locally small unbounded quasi-coherent module/finite-Čech model, exact telescopes and the geometric compactness and reflection checks, including closed immersions. Both are local proof suppliers, with their geometric hypotheses checked below.

[F4] [[lem-eventual-global-generation-coherent-twists]] gives negative-twist covers of coherent sheaves on projective schemes. [[lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space]] supplies coherent perfectness on $S$. [[thm-ag-standard-smooth-geometric-regularity]] gives regular local rings on $X$, and [[thm-localisation-and-polynomial-extension-of-regular-rings]] gives their global dimension equal to their finite dimension. Their inherited AC is retained.

## Proof

1.1 If $X$ is empty, its zero derived category has the zero slicing and zero charge lattice, satisfying every assertion vacuously. Otherwise put $r=n+1$. Starting with the canonical surjection $\mathcal O_S\to i_*\mathcal O_X$, repeatedly cover its coherent kernel and subsequent kernels by finite direct sums of sufficiently negative twisting lines, using F4. There are finite such covers: from a globally generated coherent twist, take finitely many generating sections, using quasi-compactness of $S$ and finite generation on each of finitely many affine charts. After $r-1$ covers this gives an exact sequence
$$0\to K\to\mathcal O_S(-a_{r-1})^{m_{r-1}}\to\cdots\to\mathcal O_S(-a_1)^{m_1}\to\mathcal O_S\to i_*\mathcal O_X\to0,$$
with $a_j\ge0$ and coherent $K$. This is a finite partial resolution; no unproved assertion that its last kernel is zero or locally free is needed. Its successive kernel triangles give a finite derived filtration with factors $\mathcal O_S$, $\mathcal O_S(-a_j)[j]$ for $1\le j\le r-1$, and $K[r]$. [F4, given, construct]

1.2 Check the geometric hypotheses of F3 for $F=i_*$ and $L=\mathbf L i^*$. A closed immersion is affine; restriction of scalars on affine charts is exact, preserves coproducts, and is conservative. Coherent cohomology and boundedness of a quasi-coherent complex are equivalent before and after $i_*$, because a module over $A/I$ is finite over $A/I$ exactly when it is finite over $A$. Thus bounded-coherent reflection holds. The algebraic adjunction $(A/I)\otimes_A^{\mathbf L}-\dashv\mathrm{Res}$ glues, using finite complexes, to $\mathbf L i^*\dashv i_*$. On $S$, every coherent complex is perfect by F4, so its derived pullback is bounded coherent. The projection formula $i_*\mathbf L i^*E=i_*\mathcal O_X\otimes^{\mathbf L}E$ follows from the same tensor identity on affine charts. [F3, F4, given, algebra]

2.1 Choose an integer $N\ge1$ such that $a_j\le jN$ for every $j$, and choose $\sigma$ using F1. Transitivity and invariance of the order under tensor and shifts give
$$\sigma\otimes\mathcal O(a_j)\preceq\sigma\otimes\mathcal O(jN)\prec\sigma[j].$$
The first inequality follows by repeated Bayer comparison; the second follows by iterating the restriction comparison $j$ times and tensoring at each step. For $E\in\mathcal P(\theta)$, the dual form of this order says $\phi^-_{\sigma\otimes\mathcal O(a_j)}(E)\ge\theta-j$, hence $\phi^-_\sigma(E\otimes\mathcal O(-a_j)[j])\ge\theta$. To verify that dual form directly, if a bottom HN phase $b<\theta-j$ existed in the left slicing, its bottom truncation would receive a nonzero map from $E$ but would have all $\sigma$-phases at most $b+j<\theta$, contradicting phase-Hom vanishing. This also proves the weak endpoint used here; the available strict comparison is stronger. [F1, step 1.1, algebra]

2.2 The remaining compactness requirement holds on both smooth projective schemes. F4 gives local regular rings of finite dimension and hence finite projective dimension for finite modules. Iterated negative-twist surjections, whose kernels are coherent, then give global finite vector-bundle resolutions as in the proof of F2: after $\dim X$ syzygies the kernel is locally free, and finite-presentation basis lifting makes the local freeness hold on an open neighborhood. Bounded coherent complexes lie in the triangulated closure of these bundles by standard cohomology truncations. For a vector bundle $B$, $\operatorname{Hom}(B,-)$ in the unbounded quasi-coherent derived category is computed by the finite affine Čech complex for $B^\vee\otimes-$; a finite affine cover has affine intersections because the scheme is separated. Each affine section functor on quasi-coherent modules commutes with direct sums, as does the finite Čech total complex, and direct sums of modules are exact. Thus vector bundles, and then their finite cones and shifts, are compact. This uses the honest unbounded quasi-coherent model required in F3, not unrestricted Hom classes in an arbitrary unbounded Verdier quotient. [F3, F4, step 1.2, construct]

3.1 Take $E\in\mathcal P(\theta)$ with $0<\theta\le1$ and derived-tensor the finite filtration in step 1.1 with $E$. The factors are $E$, the $E\otimes\mathcal O(-a_j)[j]$, and $E\otimes^{\mathbf L}K[r]$. The first factor has phase $\theta$, each middle factor has lower HN phase at least $\theta$ by step 2.1, and the last has every phase strictly greater than $1\ge\theta$ by F2 and $r=n+1$. Zero factors may be omitted. Closure under extensions gives
$$i_*\mathcal O_X\otimes^{\mathbf L}E\in\mathcal P([\theta,\infty)).$$
Every real phase differs by an integer from one in $(0,1]$, and tensor commutes with shifts, so this inclusion holds for every real $\theta$. Its direction is $\ge\theta$, not $\le\theta$. [F2, step 1.1, step 2.1, algebra]

4.1 Steps 3.1 and 1.2 identify $FL\mathcal P(\theta)\subseteq\mathcal P([\theta,\infty))$, and steps 1.2–2.2 check every other hypothesis of F3. Apply that local supplier. It constructs exactly $\mathcal Q(\theta)=\{A:i_*A\in\mathcal P(\theta)\}$, finite HN filtrations, phase-Hom vanishing, and local finiteness in the induced strict exact structure. The charge factors through $\Lambda_X=\operatorname{im}(v i_*)$, a subgroup of the finite free lattice $\Lambda_\sigma$, hence a finite-rank free group. Restrict the norm from $\Lambda_\sigma\otimes\mathbb R$. If $A$ is nonzero $\mathcal Q$-semistable, $i_*A$ is nonzero $\mathcal P$-semistable, so
$$\|v(i_*A)\|\le C_\sigma|Z(v(i_*A))|.$$
This is precisely finite-rank support for $Z_X$; nonzero phase masses and local finiteness are inherited by F3, rather than assumed from the existence of a stability function. Thus the induced condition meets the current library definition in full. [F1, F2, F3, step 3.1, step 1.2, step 2.2, algebra] ∎

## Remarks

This reconstructs Li's closed-embedding argument from the stated local suppliers. It repairs two source-level presentation issues: the initial printed $\le\theta$ in Theorem 6.5 must be $\ge\theta$ to match the proof and the adjoint induction criterion; and the present proof uses the safe semistable-skyscraper amplitude bound with a partial resolution of length $n+1$. A source citation grants no proof exception or native acceptance. No BMT inequality, deformation transfer between distinct fibers, or compatibility across a family is needed for this existence assertion.
