---
id: thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
kind: theorem
title: "Local reciprocity identifies K× with the Weil abelianization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-local-class-field-existence-characteristic-zero
  - thm-local-class-field-existence-equal-characteristic-finite-residue
  - thm-p-adic-completion-is-a-field
  - def-weil-group-of-a-local-field
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is explicit and implies DC. The proof uses actual complete norm-cofinality theorems in BOTH characteristics, not merely onto finite reciprocity maps; no extra model hypothesis."
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields"
      url: "https://arxiv.org/pdf/math/0011210"
      locator: "§§1.1.5–1.1.11, printed pp.10–12; Hausdorff Weil abelianization and reciprocity; both sign conventions distinguished below."
    - title: "J. S. Milne, Class Field Theory"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter I local reciprocity and existence; proof below uses the actual canonical-map and characteristic-specific existence suppliers."
---

## Statement

Assume the Axiom of Choice. Let $K$ be a complete discretely valued field with finite residue field, fix a separable closure $K_s$, put $G_K=\operatorname{Gal}(K_s/K)$, and let $I_K$ be inertia. Identify $G_K/I_K$ with $\widehat{\mathbb Z}$ by arithmetic residue Frobenius. Let $W_K$ be the inverse image of $\mathbb Z\subset\widehat{\mathbb Z}$, with the Weil topology: $I_K$ is open with its profinite topology and $W_K/I_K=\mathbb Z$ is discrete. Write $G_K^{\mathrm{ab}}$ and $W_K^{\mathrm{ab}}$ for the quotients by the closures of their commutator subgroups in these respective topologies. Then $W_K\to G_K$ induces an injective continuous homomorphism
$$j:W_K^{\mathrm{ab}}\longrightarrow G_K^{\mathrm{ab}}$$
whose image is the inverse image of $\mathbb Z$ under the residue map $G_K^{\mathrm{ab}}\to\widehat{\mathbb Z}$. The canonical arithmetic local Artin map restricts to a topological group isomorphism
$$\operatorname{Art}_{K,\mathrm{arith}}:K^\times\xrightarrow{\sim}W_K^{\mathrm{ab}},\qquad j\circ\operatorname{Art}_{K,\mathrm{arith}}=\rho_K|_{K^\times}.$$
Its unit image is the image of inertia in $W_K^{\mathrm{ab}}$, and every uniformizer has arithmetic Frobenius coset. The map $\operatorname{Art}_{K,\mathrm{LL}}(a)=\operatorname{Art}_{K,\mathrm{arith}}(a^{-1})$ is the geometric convention. For an unramified continuous character $\chi:K^\times\to\mathbb C^\times$, the Weil character $\chi\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$ is the unique unramified character taking value $\chi(\pi)$ on the geometric Frobenius lift specified by a chosen uniformizer $\pi$.

## Statement references

[Wedhorn, §§1.1.5–1.1.11](https://arxiv.org/pdf/math/0011210). The source's LLC convention is geometric; the canonical local-map supplier here is arithmetic and is inverted explicitly. The unit image means $I_K/\overline{[W_K,W_K]}$, not the abstract abelianization of $I_K$ alone.

## Facts & Assumptions

**Given:** Exactly the field, closure, inertia, Weil topology and AC in the Statement. Completion of $K^\times$ below always means the inverse limit over its open finite-index subgroups.

[A1] AC implies DC and Countable Choice. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The canonical map $\rho_K:\widehat{K^\times}_{\mathrm{open}}\to G_K^{\mathrm{ab}}$ has compatible onto finite abelian quotients with norm kernels, and its residue projection on $a\in K^\times$ is arithmetic Frobenius to $v_K(a)$. [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F2] Every open finite-index subgroup is a unique finite abelian norm group, with reverse inclusions: for finite $K/\mathbb Q_p$ this is the characteristic-zero theorem; for a complete discretely valued field of characteristic $p>0$ with finite residue it is the equal-characteristic theorem. Both have their actual complete proofs under AC and DC. [[thm-local-class-field-existence-characteristic-zero]] [[thm-local-class-field-existence-equal-characteristic-finite-residue]]

[F3] The residue sequence is onto $\widehat{\mathbb Z}$ with kernel $I_K$, and $G_K$ is the inverse limit of its finite Galois quotients. The Weil group is its inverse image of the ordinary integer subgroup with the topology in the Statement. [[thm-local-absolute-galois-group-residue-exact-sequence]] [[def-weil-group-of-a-local-field]]

[F4] The rational Cauchy completion $\mathbb Q_p$ is a complete valued field; its field operations are the termwise limits of rational Cauchy sequences. [[thm-p-adic-completion-is-a-field]]

## Proof

**Proof technique:** actual norm-cofinality in both characteristics and closed commutators.

1.1 Write $O=\mathcal O_K$, let $k$ be its residue field, and fix a uniformizer $\pi$. The applicable norm-cofinality branch of [F2] covers every $K$ in the Statement. In positive characteristic this is its explicit equal-characteristic scope. In characteristic zero, let the residue characteristic be $p$, put $e=v_K(p)>0$ and $f=[k:\mathbb F_p]$. On $\mathbb Q^\times$ one has $v_K=e\operatorname{ord}_p$, because rational integers prime to $p$ are units. A rational $p$-adic Cauchy sequence therefore has a unique limit in complete $K$; the limit construction and [F4] give an injective field homomorphism $\mathbb Q_p\hookrightarrow K$. It is injective since nonzero $p$-adic valuations stabilize along a sufficiently accurate rational sequence, and respects products and inverses by continuity. We verify finiteness, rather than invoking an unstated classification theorem. Choose lifts $b_1,\ldots,b_f\in O$ of an $\mathbb F_p$-basis of the residue field, and put $\gamma_{ij}=\pi^ib_j$ for $0\le i<e$. As $pO=\pi^eO$, the residue classes of these $ef$ elements span $O/pO$: remove successive residue coefficients in the filtration $\pi^iO/\pi^{i+1}O\simeq k$. Every $x\in O$ therefore has a residue representative $\sum c_{ij}\gamma_{ij}$ with $0\le c_{ij}<p$; choose the lexicographically least such finite coefficient tuple. Subtract it, divide by $p$, and iterate. The remainder after $N$ stages lies in $p^NO$, so tends to zero. For each of the finitely many $\gamma_{ij}$ its coefficient digits converge in $\mathbb Z_p$ by [F4]. Thus $O$ is spanned over $\mathbb Z_p$ by the $ef$ elements $\gamma_{ij}$, and $K=O[1/p]$ is spanned by them over $\mathbb Q_p$. This proves $K/\mathbb Q_p$ finite with the given valuation topology, so the characteristic-zero branch applies. No Cohen structure or local-field classification theorem is assumed. [A1, F2, F4, given, construct, algebra]

1.2 By [F3], choose $\phi\in G_K$ mapping to $1\in\widehat{\mathbb Z}$. For $a\in\widehat{\mathbb Z}$ define $\phi^a$ in each finite Galois quotient by reducing the exponent modulo the finite order of $\phi$ in that quotient. These values are compatible and hence define a continuous homomorphism $\widehat{\mathbb Z}\to G_K$. Its residue projection is the identity because this holds on the dense integers. Thus $G_K=I_K\rtimes\widehat{\mathbb Z}$ and $W_K=I_K\rtimes\mathbb Z$. The product maps are topological isomorphisms: for $g$ with residue $a$ the inverse is $(g\phi^{-a},a)$, continuous in the profinite case and on each open inertia component in the Weil case. [A1, F3, construct]

2.1 By [A1], both local reciprocity suppliers apply. For every finite abelian $E/K$, [F1] gives the canonical isomorphism $K^\times/N_{E/K}E^\times\to\operatorname{Gal}(E/K)$. Conversely every open finite-index subgroup is such a norm by [F2]. The quotients on the two sides therefore form the same cofinal inverse system: inclusion of norm groups corresponds to restriction in finite abelian composita, and compatibility follows from their construction as quotients of the single map $\rho_K$. Passing to the inverse limits gives a topological isomorphism $\widehat{K^\times}_{\mathrm{open}}\simeq G_K^{\mathrm{ab}}$. Concretely, the inverse on each coordinate $K^\times/N$ is the inverse finite Artin map for the unique field attached to $N$; their compatibility defines the inverse map of inverse limits. Thus neither injectivity nor surjectivity is inferred just from density or from an unrelated abstract finite isomorphism. [A1, F1, F2, step 1.1, construct]

2.2 Let $C$ be the closed normal subgroup of $I_K$ generated by $[I_K,I_K]$ and $[\phi,I_K]$. Conjugating these generators by $\phi$ and by $\phi^{-1}$ preserves this subgroup: for the second family the conjugates are again $[\phi,\phi^{\pm1}i\phi^{\mp1}]$. Hence $C$ is $\phi$-invariant, and continuity makes it invariant under all $\phi^a$, $a\in\widehat{\mathbb Z}$. The quotient $I_K/C$ is abelian and $\phi$ acts trivially on it; density of the integer powers and continuity show that every $\phi^a$ acts trivially. Therefore $G_K/C=(I_K/C)\times\widehat{\mathbb Z}$ and $W_K/C=(I_K/C)\times\mathbb Z$ are abelian. Conversely every generator of $C$ is an actual commutator in both $W_K$ and $G_K$. Their closures inside $I_K$ coincide for the two group topologies because the induced topology on $I_K$ is the same; both closed commutator subgroups lie in $I_K$. Thus $C$ equals each closed commutator subgroup. The inclusion induces $j:(I_K/C)\times\mathbb Z\to(I_K/C)\times\widehat{\mathbb Z}$, an injective continuous map whose image is precisely the preimage of the ordinary integers. The quotient topologies are these product topologies: the product quotient maps are open since $I_K\to I_K/C$ is open, so the displayed algebraic identifications are topological. [step 1.2, algebra]

3.1 Fix a uniformizer $\pi$, put $O=\mathcal O_K$, and $U_m=1+\pi^mO$ for $m\ge1$. Valuation gives $K^\times=O^\times\times\pi^{\mathbb Z}$ topologically. Every open finite-index $N$ contains some $U_m$ and contains $\pi^M$ for $M=|K^\times/N|$, so it contains $U_m\times\pi^{M\mathbb Z}$. Conversely these rectangular subgroups are open finite-index, since $O/\pi^mO$ is finite. Hence $\widehat{K^\times}_{\mathrm{open}}\simeq O^\times\times\widehat{\mathbb Z}$. The identification of $O^\times$ with its congruence inverse limit follows directly from completeness: fix one finite list of residue representatives, reconstruct a compatible tuple by its successive $\pi$-adic digit polynomials, and take their unique Cauchy limit. The residues characterize the limit and its unit condition. This proves injectivity of $K^\times\to\widehat{K^\times}_{\mathrm{open}}$. The residue map of $\rho_K$ is the second factor: this equality holds on the dense image of $K^\times$ by [F1], hence on its completion by continuity and Hausdorffness. Thus $\rho_K(O^\times)$ is exactly the kernel of $G_K^{\mathrm{ab}}\to\widehat{\mathbb Z}$. [F1, step 2.1, given, construct]

4.1 The image $\rho_K(K^\times)$ has integral residue. Conversely if $b\in G_K^{\mathrm{ab}}$ has residue $n\in\mathbb Z$, then $b\rho_K(\pi)^{-n}$ has residue zero and equals $\rho_K(u)$ for some $u\in O^\times$ by step 3.1. Hence $b=\rho_K(u\pi^n)$, proving $\rho_K(K^\times)=j(W_K^{\mathrm{ab}})$. Define $\operatorname{Art}_{K,\mathrm{arith}}=j^{-1}\rho_K|_{K^\times}$. It is bijective by steps 3.1 and 2.2. On the open unit/inertia components it is a homeomorphism by the profinite isomorphism of step 2.1 restricted to the kernels of residue; the other components are their translates, and both component quotients are discrete $\mathbb Z$. Therefore this is a topological isomorphism. It is canonical because its composite with the injective map $j$ is the fixed $\rho_K$, independent of the temporary $\phi$. Its residue is $v_K$, so any uniformizer has arithmetic Frobenius coset. This does not assert that different uniformizers give the same lift in the ramified abelianization. [F1, step 2.1, step 3.1, step 2.2, construct]

5.1 Inverting the argument gives the topological isomorphism $\operatorname{Art}_{K,\mathrm{LL}}(a)=\operatorname{Art}_{K,\mathrm{arith}}(a^{-1})$ with negative valuation residue. An unramified $\chi$ is trivial on $O^\times$, so $\chi\circ\operatorname{Art}_{K,\mathrm{LL}}^{-1}$ is trivial on the image of inertia. On the geometric Frobenius lift $\operatorname{Art}_{K,\mathrm{LL}}(\pi)$ its value is $\chi(\pi)$. The quotient $W_K/I_K=\mathbb Z$ shows uniqueness, since a homomorphism from $\mathbb Z$ is determined by the image of1. This proves the rank-one convention in every nonarchimedean local field of the Statement. The actual norm-cofinality theorem in the applicable characteristic is used; no Deligne epsilon-factor existence or higher-rank local Langlands theorem is asserted. [F3, step 4.1, algebra] ∎

## Reading limits and immutable predecessor

The original finite-Qp proof and its accepted packet are preserved byte-for-byte in the predecessor evidence. The new first step proves only the finite-Qp classification needed to apply the actual characteristic-zero existence interface, and the existing complete equal-characteristic existence theorem supplies the other branch. Those existing local existence/AS proofs are provided context and were not reviewed or replaced. The single authorized AS interface check found the literal every-index-p norm assertion; no new Artin–Schreier–Witt or cohomological lifting theory was needed. The common unit-completion, closed-commutator and topology arguments are the predecessor's proof, with mechanical numbering and scope wording updated. No full LLC or higher-dimensional epsilon theorem follows from this strengthening.
