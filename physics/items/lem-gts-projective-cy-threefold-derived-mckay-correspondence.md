---
id: lem-gts-projective-cy-threefold-derived-mckay-correspondence
kind: lemma
title: Projective derived McKay for the CY threefold orbifolding input
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- def-derived-category-of-an-abelian-category
- thm-hilbert-scheme-represents-projective-flat-families
- thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
- cor-noether-normalisation-module-finiteness
- thm-auslander-buchsbaum-formula
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-proper-pushforward-coherent
- lem-projective-regular-local-base-coherent-duality-by-embedding
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-serre-vanishing
- lem-gts-three-dimensional-perfect-residue-field-complex-forces-regularity
- def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  cor-noether-normalisation-module-finiteness: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  lem-projective-regular-local-base-coherent-duality-by-embedding: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  lem-gts-three-dimensional-perfect-residue-field-complex-forces-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Bridgeland, King and Reid, The McKay correspondence as an equivalence of derived categories
    url: https://arxiv.org/pdf/math/9908027v2
    locator: Theorem1.2 (PDF p.4), §§4–6 (pp.12–18); projective cluster kernel and diagonal argument, with the corrected
      D3 criterion supplied locally.
  - title: Howard Nuer, Stability conditions on some families of Calabi–Yau threefolds via orbifolding
    url: https://arxiv.org/pdf/2501.06207v1
    locator: Theorem1, full proof and Corollary2; complete two-page v1 read, including invariant geometric source
      parameters.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $M$ be a connected smooth projective complex threefold with $\omega_M\cong\mathcal O_M$, and let a finite group $G$ act faithfully on $M$. Put $X=M/G$. Suppose $X$ has a smooth projective crepant resolution $Y'\to X$ with $\omega_{Y'}\cong\mathcal O_{Y'}$. A $G$-cluster means a $G$-invariant length-$|G|$ closed subscheme $Z\subset M$ with $H^0(\mathcal O_Z)$ the regular representation. Let $Y$ be the reduced closure of the free-orbit locus in its projective moduli scheme, and let $\mathcal Z\subset Y\times M$ be the universal cluster. Then $X$ is normal projective Gorenstein with $\omega_X\cong\mathcal O_X$, and $Y$ is a connected smooth projective threefold with trivial canonical line, and its Hilbert–Chow morphism $\tau:Y\to X$ is crepant. Moreover
$$\Phi(A)=R\pi_{M,*}\bigl(\mathcal O_{\mathcal Z}\otimes^L\pi_Y^*A\bigr)$$
is an equivalence $D^b(\operatorname{Coh}Y)\simeq D^b(\operatorname{Coh}_G M)$, where $G$ acts trivially on $Y$. The given resolution $Y'$ is used to supply the canonical-discrepancy and invariant-volume hypotheses; no identification of $Y'$ with $Y$ is assumed.

## Facts & Assumptions

**Given:** The data of the Statement. Work in ZF+AC, hence DC. All schemes and sheaves are over C. A G-equivariant sheaf is a sheaf with isomorphisms g*E→E satisfying the group cocycle; morphisms respect them. Derived equivariant morphisms are obtained by the exact finite-group averaging projector.

[F1] [[def-derived-category-of-an-abelian-category]] fixes bounded derived localization. [[thm-hilbert-scheme-represents-projective-flat-families]] represents the actual length-|G| projective Hilbert functor, with its universal flat cluster, on all test schemes. [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]] supplies finite-group representation splitting over C; explicit averaging below makes the isotypic projectors on families.

[F2] [[cor-noether-normalisation-module-finiteness]], [[thm-auslander-buchsbaum-formula]], and [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] supply the regular polynomial parameters and finite-free criterion used to prove the quotient Cohen–Macaulay, not an assumed McKay theorem.

[F3] [[thm-proper-pushforward-coherent]] supplies coherence. [[lem-projective-regular-local-base-coherent-duality-by-embedding]] over the regular base C supplies projective trace/evaluation and coherent duality. [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] supplies the smooth-projective trace pairing; finite locally free resolutions extend it to coherent complexes. [[thm-serre-vanishing]] supplies the finite projective resolution/relative Cech constructions. The arbitrary-base relative pairing used below is explicitly obtained by tensoring the finite Cech/projective resolution over C, not by applying a regular-base assertion to singular Y.

[F4] [[lem-gts-three-dimensional-perfect-residue-field-complex-forces-regularity]] is the actual locally proved diagonal algebraic input: a perfect complex of amplitude [−3,0], finite-length homology and H0=k over an integral three-dimensional closed-point complex local ring resolves k and forces regularity. It assumes neither CM nor self-duality.

[F5] [[def-axiom-of-choice]] is the ambient premise inherited by these coherent and homological constructions.

## Proof

1.1 Invariant volume from the actual given geometry. Let the original selected target Y' be a smooth projective CY threefold birational to M/G. Its nowhere-vanishing canonical form is a rational top form on the common function field of Y' and $X=M/G$. Its divisor on X is zero, since every codimension-one point of the normal X is unchanged by a resolution. Thus the reflexive canonical divisor of X is zero (Cartier as a divisor). Pull this rational form to smooth M. At a codimension-one point the finite separable quotient formula gives its divisor equal to the effective ramification divisor: the canonical form on X has neither zeros nor poles there. There are no poles in higher codimension on the smooth M, so this is a global nonzero holomorphic top form on M. Since M has trivial canonical line and is connected projective, its coefficient relative to a source volume form is a nonzero constant. It is therefore nowhere zero, the ramification divisor vanishes, and the form is G-invariant by construction. This justifies the exact invariant-volume hypothesis of §6 from the original geometry, rather than averaging an arbitrary stability condition or assuming the action preserves an unspecified source volume. [F2, F3, F5, given, algebra]

2.1 The projective G-cluster component. Construct G-Hilb(M) from the actual projective Hilbert supplier `thm-hilbert-scheme-represents-projective-flat-families`, using length |G|. The common fixed subscheme for the finite G action on that separated projective Hilbert scheme is closed: intersect the equalizers with the identity. Its universal cluster is G-stable, with its canonical equivariant structure. Its finite-flat global-section bundle carries G. The central representation projectors (averaged matrix coefficients over C) split it into isotypic vector subbundles; their ranks are locally constant. Requiring multiplicity dim(ρ) for every irreducible ρ is therefore open and closed. This is a projective scheme of regular-representation G-clusters. Maschke averaging supplies these finite projectors, without an equivariant moduli representability assumption. [F1, F5, step 1.1, algebra]

3.1 Faithfulness gives a nonempty free locus U⊂M. The free-orbit clusters give the open U/G in this Hilbert scheme, also on families: a G-stable finite flat cluster over the free quotient is the full orbit since its invariant rank is one and its total rank is |G|. Take its reduced closure Y. This is an integral projective threefold. A cluster's support is one G-orbit: otherwise the units of its different orbit components give at least two independent invariant sections. The invariant global-section line of a universal cluster is canonically $O_{Y}$, by its unit. Multiplication by an invariant function on M therefore acts on that line by a unique scalar in $O_{Y}$. These scalars define the Hilbert–Chow morphism $τ:Y→X=M/G$ on invariant affine charts and agree on overlaps. Thus τ is projective and is an isomorphism over U/G. [F1, F5, step 2.1, algebra]

4.1 The quotient canonical module. The finite quotient X is normal, and is Cohen–Macaulay with canonical module $O_{X}$. Here is the local algebra, not an imported 'quotient is Gorenstein' slogan. On a quotient affine chart take invariant Noether-normalization parameters A of dimension three and localize at the relevant parameter point. The semilocal smooth cover S is finite over this regular local A. The A-parameters form a system of parameters in its regular localizations, so are S-regular. Auslander–Buchsbaum makes S finite free over A. Reynolds averaging makes $R=S^{G}$ an A-direct summand, hence finite projective over A, and therefore Cohen–Macaulay. Finite-map duality identifies its canonical module with $\operatorname{Hom}_{A}(R,A)⊗ω_{A}$. Since taking invariants is an exact idempotent summand, this equals $(\operatorname{Hom}_{A}(S,A)⊗ω_{A})^{G}=ω_{S}^{G}$. The finite-map identification is the Koszul/trace duality for the regular presentation; it respects all automorphisms fixing A. The given invariant canonical trivialization of S consequently identifies this module with $S^{G}=R$. These identifications glue, giving $ω_{X}=O_{X}$. [F2, F3, F5, step 3.1, algebra]

5.1 Universal-cluster adjunction and convolution. Use the invariant canonical form already proved. Let Y be the reduced irreducible component of G-Hilb(M) containing the free orbits, and let τ:Y→M/G be the Hilbert–Chow map. Y is integral of dimension three, without any asserted smoothness. Write Z⊂Y×M for its universal cluster; its projection to Y is finite flat of rank |G|. Let πY,πM denote the product projections. Define  Φ(A)=RπM*(OZ ⊗L πY*A),  where A has trivial G action, and define  Ψ(B)=[RπY*(OZ∨ ⊗ πM*ωM[3] ⊗L πM*B)]^G.  Here OZ∨ is the derived OY×M-dual. These are bounded coherent functors: OZ is perfect relative to Y and indeed perfect on Y×M, since it is flat over Y and M is smooth of relative dimension three. Locally one obtains a length-three locally free resolution using the relative diagonal Koszul resolution on M×M, tensoring with OZ along its finite-flat Y projection. Properness gives coherent pushforward, and the bounded locally free resolution gives uniform finite Tor amplitude. Taking G invariants is exact by averaging. The usual tensor evaluation and smooth relative dualizing complex provide, term by term in these resolutions, the adjunction Ψ ⊣ Φ; the direction is important.  Convolving these two kernels over the projective smooth M yields a perfect kernel Q on Y×Y for ΨΦ. Perfectness can be checked by any base change to an affine test scheme over Y×Y: the tensor kernel has bounded relative Tor amplitude, and projective smooth pushforward has bounded cohomological amplitude. A finite affine Čech model computes the base changes; proper coherent cohomology plus this uniform Tor bound yields a bounded finite projective model over each affine base. This argument does not assume Y smooth.  The adjunction and derived restriction give, for every pair y1,y2 of closed points,  $\operatorname{Hom}^{i}(Q,k(y1,y2))$ = $\operatorname{Ext}^i_{G,M}(OZ_{y1},OZ_{y2})$.  Indeed derived restriction to {y1}×Y is ΨΦ(k(y1)), and applying Hom to k(y2), followed by Ψ ⊣ Φ, gives the displayed equality. Kernel formation commutes with this restriction by the explicit relative-perfect model. [F1, F3, F5, step 4.1, algebra]

6.1 Elementary off-diagonal length-one lemma. Let S be an integral Noetherian scheme and E a perfect complex. Suppose every closed-point derived Hom RHom(E,k(s)) is concentrated in two consecutive degrees, and the support of E has codimension at least two in S. Then $E=0$. [F2, F5, step 5.1, algebra]

7.1 To prove this, localize at any closed point and represent E by a finite free complex. Successively cancel any differential entry which is a unit; the remaining minimal complex has zero differential after reduction modulo the maximal ideal. Its nonzero terms are therefore exactly in the two degrees detected by RHom(E,k(s)). Thus, on a neighborhood, E is represented, up to a shift, by a single map d:P→Q of finite locally free sheaves. Since the support is proper, this map is an isomorphism at the generic point, and rank P=rank Q. Its determinant is a nonzero section of an invertible sheaf. If d fails to be an isomorphism anywhere, the zero set of that determinant has an irreducible component of codimension one: trivialize the line bundle and use the principal ideal theorem in the domain at a minimal prime of the determinant ideal. At every such point the complex is nonexact. This contradicts the codimension hypothesis. Hence d is everywhere invertible on this neighborhood. These neighborhoods cover S, so $E=0$. [F2, F5, step 6.1, algebra]

8.1 The same argument applies on an integral open subscheme such as the complement of a diagonal. No Cohen–Macaulay or regularity hypothesis has been inserted. It only proves the length-one case; it does not prove the length-three residue-field regularity criterion below. [F2, F5, step 7.1, algebra]

9.1 Actual off-diagonal vanishing. For two clusters Z1,Z2, any equivariant map OZ1→OZ2 takes 1 to a G-invariant global section. The invariant subspace of the regular representation H0(OZ2) has dimension one and is spanned by 1. If this scalar is nonzero, the induced map of cyclic OM-modules is surjective, so equal lengths force an isomorphism of quotient modules and equality of their defining ideals. Thus distinct clusters have equivariant Hom zero. Equivariant Serre duality, using a G-invariant canonical trivialization on a neighborhood of their support orbit, also gives $\operatorname{Ext}^{3}_{G}(OZ1,OZ2)=0$. Negative Ext and Ext above three vanish because M is smooth of dimension three. Therefore off the diagonal the displayed point-Hom groups for Q occur only in degrees one and two. [F3, F5, step 8.1, algebra]

10.1 If τ(y1)≠τ(y2), the clusters are disjoint, so all their Ext groups vanish. Consequently Q off the diagonal is supported on (Y×_{M/G}Y) minus the diagonal. This has dimension at most four. In fact τ is birational, its exceptional locus is a proper closed subset of the three-dimensional integral Y and has dimension at most two, and every pair over a point outside its isomorphism locus belongs to the product of the two exceptional loci. The latter product has dimension at most four. The ambient Y×Y is integral of dimension six. Thus support has codimension at least two. Section 1 proves Q vanishes off the diagonal. This completes the off-diagonal step without using the general intersection theorem. [F3, F5, step 9.1, algebra]

11.1 Diagonal residue-field complex. Fix y∈Y and put E=ΨΦ(k(y)). The previous section proves that E is perfect and supported at y. Its derived Hom to any k(z) vanishes unless $z=y$ and 0≤i≤3. The counit E→k(y) induces the identity scalar on $\operatorname{Hom}^{0}$. Its degree-one map is the universal-family Kodaira–Spencer map $T_y Y→\operatorname{Ext}^{1}_{G}(OZ_{y},OZ_{y})$, which is injective: an infinitesimal embedded equivariant ideal deformation whose quotient module is equivariantly trivial is the trivial ideal deformation, since the invariant cyclic generator is unique up to a unit scalar. For the cone C in C→E→k(y), the long exact Hom sequence therefore gives $\operatorname{Hom}^{i}(C,k(y))=0$ for i≤0. Minimal free models (or the first nonzero cohomology and its Nakayama quotient) imply $H^{j}(C)=0$ for j≥0, hence $H^{0}(E)=k(y)$. (The inequality reverses when passing from Hom degrees to cochain degrees; this note uses cohomological indexing.) [F3, F4, F5, step 10.1, algebra]

12.1 The preceding steps construct $E_{y}=ΨΦ(k_{y})$ of amplitude [−3,0] with $H0=k_{y}$. Apply the actual locally proved D3 result to every local ring of Y at a closed point. All hypotheses hold: Y is an integral finite-type threefold, $E_{y}$ is perfect, supported at that closed point, and its minimal free model has the required amplitude. D3 makes Y smooth and $E_{y}≃k_{y}$. The adjunction counit is nonzero on H0, hence is the isomorphism $E_{y}→k_{y}$. [F3, F4, F5, step 11.1, algebra]

13.1 Full faithfulness and equivalence. The adjunction counit is a morphism of kernels $Q→O_Δ$ (tensor evaluation followed by the relative trace). Once Y is smooth its cone is perfect; its derived restriction to every {y}×Y is zero by the preceding paragraph. Every further point restriction is zero, and the minimal-complex form of derived Nakayama makes the cone zero. Thus ΨΦ=id and Φ is fully faithful. The family-relative trace used in §2 is legitimate even before Y is smooth: resolve the smooth projective M in projective space, compute the trace by the top monomial coefficient Cech complex, and tensor that finite complex with an arbitrary affine C-algebra on Y. Every C-algebra is flat over C, so the resolution and trace identities persist; no regularity of the Y base is inserted. [F1, F3, F4, F5, step 12.1, algebra]

14.1 The equivariant target $Db_{G}(M)$ has Serre functor [3]: finite locally free resolutions and projective Serre duality give the pairing on ordinary Ext, and the exact averaging projector takes its G-invariant perfect pairing; the invariant canonical form removes the canonical twist. Since Y is now smooth projective, the fully faithful Fourier–Mukai image is admissible. Serre duality [3] turns its semiorthogonal decomposition into an orthogonal decomposition. [F1, F3, F4, F5, step 13.1, algebra]

15.1 The target is indecomposable. The free-orbit sheaf $O_{Gx}$ is equivariantly simple. Each $O_{M}⊗ρ$ is indecomposable, because its equivariant endomorphisms are $\operatorname{End}_{G}(ρ)=C$. There is a nonzero equivariant map $O_{M}⊗ρ→O_{Gx}$ for every irreducible ρ. Every nonzero finite-length equivariant sheaf receives a nonzero map from some $O_{M}⊗ρ$, by decomposing its finite-dimensional global sections. Finally any nonzero indecomposable equivariant coherent sheaf has a nonzero quotient on a point orbit and hence a nonzero map to a finite-length sheaf. All these sheaves must belong to the same member of an orthogonal decomposition. The other member is orthogonal to all coherent sheaves and is zero by ordinary cohomology truncation. This proves indecomposability. The image of Φ is nonzero, so Φ is an equivalence. [F1, F3, F4, F5, step 14.1, algebra]

16.1 Actual crepancy. The equivalence conjugates Serre functors, giving $ω_{Y}=O_{Y}$. To check τ is crepant rather than only a birational map between varieties with abstractly trivial canonical lines, let η be the invariant quotient canonical form. Its pullback to Y has effective exceptional divisor: use the given crepant resolution Y' to see X canonical. Indeed on Y' the pullback form has no zero divisor, and every further divisorial valuation has nonnegative discrepancy over the smooth Y'. This uses no quotient-age theorem. This pullback is a nonzero holomorphic section of $ω_{Y}=O_{Y}$ on connected projective Y, so it has no zero divisor. Hence τ is crepant. The McKay equivalence and smooth projectivity were proved without this last discrepancy check; the given target resolution supplies exactly the canonical-discrepancy input for the original application. [F3, F5, step 15.1, algebra] ∎

## Remarks

The proof reconstructs the projective CY3 case needed by the given orbifolding geometry. It does not assume an arbitrary crepant resolution is the G-Hilbert component. The separate equivalence between that given resolution and Y requires the actual directed-flop construction/factorization and is not a conclusion of this lemma. Actual source reading in the constructing continuation covered the BKR introduction, Sections 2.1–2.3 and 4–6, and the Section 7 comparison passage, plus Nuer's complete two pages; no full BKR reading is claimed. D3 is consumed from its independently authored complete local construction, not from an external intersection-theorem citation.
