---
id: lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds
kind: lemma
title: "Nested planar Hilbert schemes from universal ideal matrices"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-eventual-global-generation-coherent-twists
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-auslander-buchsbaum-formula
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - cor-flat-local-cohen-macaulay-fibre-criterion
  - thm-nonaffine-regular-local-ring-is-ufd
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line: mathematical-premise
  thm-hilbert-scheme-represents-projective-flat-families: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-parameters-and-regular-sequences-in-cohen-macaulay-modules: mathematical-premise
  cor-flat-local-cohen-macaulay-fibre-criterion: mathematical-premise
  thm-nonaffine-regular-local-ring-is-ufd: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
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
  - title: Mark Haiman, Hilbert schemes, polygraphs and the Macdonald positivity conjecture, arXiv math/0010246,
      sections3.2--3.8 and4.1--4.11; local constructions supplied below
    url: https://arxiv.org/pdf/math/0010246
    locator: §§3.5–3.6 (pp.12–16), especially Propositions3.5.2,3.5.3 and3.6.4; local universal-ideal matrix construction,
      socle bound and determinant adjunction compared with the source.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-nested-planar-hilbert-smoothness-canonical-and-fiber-bounds.md
dependency_level: 1
---

## Statement

Assume AC and DC. Let $n\ge1$ be an integer, so the adjacent colengths $n,n-1$ are nonnegative. Let $H_j=\operatorname{Hilb}^j(A^{2}_C), B_j$ its tautological rank-j algebra and $D_j=det B_j$. The actual nested-ideal functor of $I_n⊂I_{n−1}$ of colength n,n−1 is represented by a smooth irreducible scheme $N_n$ of dimension2n, projective over $H_n$, equivalently Proj of the universal ideal on $H_{n−1}×A^{2}$ with the quotient-line convention. Its canonical line is $D_{n−1}⊗D_n^{-1}$. The map $α:N_n→F_n$ to the universal length-n family marks the distinguished support point; its fiber is P(soc A) for the corresponding planar local algebra A. If its dimension is d and length is r, then $r≥(d+2)(d+1)/2$. The locus in $N_n$ with support on the x-axis has dimension at most n, and its punctual fiber dimension is at most n−1. These assertions use neither polygraph freeness nor isospectral Cohen–Macaulayness.

## Statement references

[[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]]

[[thm-hilbert-scheme-represents-projective-flat-families]]

[[lem-eventual-global-generation-coherent-twists]]

[[thm-auslander-buchsbaum-serre-regularity-criterion]]

[[thm-auslander-buchsbaum-formula]]

[[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]]

[[cor-flat-local-cohen-macaulay-fibre-criterion]]

[[thm-nonaffine-regular-local-ring-is-ufd]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

[A1] AC and DC are retained where required by the actual coherent and projective suppliers. No external-theorem waiver is used.

[F1] The exact mathematical inputs are [[lem-gts-surface-hilbert-smoothness-semismallness-and-canonical-line]], [[thm-hilbert-scheme-represents-projective-flat-families]], [[lem-eventual-global-generation-coherent-twists]], [[thm-auslander-buchsbaum-serre-regularity-criterion]], [[thm-auslander-buchsbaum-formula]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[cor-flat-local-cohen-macaulay-fibre-criterion]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[def-axiom-of-choice]], [[def-dependent-choice]]. All-n isospectral Cohen–Macaulayness is the conclusion of its attached construction, not an implicit input to the polygraph or nested arguments.

## Proof

**Given:** Exactly the objects and hypotheses in the Statement.

1.1 For $n=1$, the colength-zero ideal is $\mathcal O_{\mathbb A^2}$ and the colength-one ideal is the ideal of its marked point, so $N_1=H_1=F_1=\mathbb A^2$ and $\alpha$ is the identity. Its canonical line and $D_0\otimes D_1^{-1}$ are both trivial: $B_0$ has rank zero with determinant $\mathcal O$, while $B_1$ is the trivial rank-one algebra. Each local quotient is $\mathbb C$, with socle dimension one; hence the fibre is $\mathbb P^0$, $r=1=(0+2)(0+1)/2$. The x-axis locus has dimension one and its punctual fibre has dimension zero. This proves all assertions for $n=1$. In the remaining argument take $n\ge2$. Let $N_n$ be the moduli of pairs $I_n⊂I_{n−1}$ of planar ideals of colength n,n−1. It represents the actual incidence functor, not just its reduced point set. On $B=H_{n−1}×E$, let I be the universal ideal of its universal length-(n−1) family. Then [given, A1, F1, algebra]

2.1 $N_n=Proj_B$ Sym I, [given, A1, F1, step 1.1, algebra]

3.1 with the quotient-line convention: a nested pair has quotient $I_{n−1}/I_n$ a rank-one flat sheaf supported on the graph of its distinguished point, and hence a line quotient of I on that graph; conversely its kernel is precisely the nested ideal. This construction works on arbitrary test schemes and gives the incidence representing scheme. [given, A1, F1, step 2.1, algebra]

4.1 The base B is smooth of dimension 2n. Its universal family is finite flat over the smooth $H_{n−1}$, so is Cohen–Macaulay of codimension two in B: local base parameters remain regular and its fibers have dimension zero. Auslander–Buchsbaum gives a local presentation $0→O^m→O^{m+1}→I→0$. A regular local UFD determinant argument identifies its generators with the signed maximal minors of its matrix D. Namely the vector of these minors lies in the rank-one kernel of $D^t$ and so is a common rational multiple of the given generator vector; at every height-one point I is the unit ideal and the split presentation makes that multiple a unit. Intersection of height-one local rings in the regular local domain makes the multiple and its inverse regular. Thus the maximal-minor presentation is exact, not an assumed generic determinantal model. [given, A1, F1, step 3.1, algebra]

5.1 Locally $N_n$ is therefore cut out in $B×P^m$ by the m equations $D^t λ=0$. At a point cancel all unit entries of D, leaving a minimal matrix with $D=0$ at that point and $λ≠0$. Its Jacobian in the base directions is surjective. To see this rather than assume versality, deform the fiber Hilbert–Burch matrix to D+εM, where M is ANY constant (m+1)×m matrix. Its signed minors still make a complex over the dual numbers. The short exact sequence obtained by multiplying this complex by ε identifies its subcomplex and quotient with the original exact complex. The long exact homology sequence proves exactness in positive degrees and shows that its degree-zero quotient has multiplication-by-ε kernel equal to its ε image. This is flatness over $C[ε]/ε^{2}$. Its finite support and unchanged generic complement give a length-(n−1) infinitesimal subscheme, extended by the unchanged components away from this point. The universal Hilbert functor supplies the corresponding base tangent vector. Comparing the two free presentations changes its matrix only by left/right infinitesimal basis changes; these add terms UD+DV, which vanish at the chosen point. Hence dD there realizes every constant M. The map $M↦M^tλ$ is onto $C^m$ because $λ≠0$. The Jacobian is therefore surjective and $N_n$ is smooth of dimension $(2n+m)−m=2n$. [given, A1, F1, step 4.1, algebra]

6.1 It is irreducible as well. The universal family $F_n$ over $H_n$ is integral: its restriction over the distinct-point locus is the irreducible incidence cover with one marked point; finite flatness makes its algebra torsion-free over each integral Hilbert affine chart, so it embeds in its generic field and is a domain. The map $α:N_n→F_n$ sends a nested pair to ($I_n$, the distinguished point). It is proper, and its fiber is the projective space of one-dimensional ideals in the corresponding local Artinian quotient, namely P(socle). These fibers are nonempty and connected. A smooth scheme has disjoint open-and-closed irreducible components; properness and connected fibers make their images disjoint closed subsets covering the connected $F_n$. Therefore $N_n$ has one component. This also proves projectivity over $H_n$; alternatively realize the incidence as the closed Hilbert flag locus in the projective compactification with fixed supports. [given, A1, F1, step 5.1, algebra]

7.1 If an Artinian planar local quotient has length r and socle dimension s, then r≥s(s+1)/2. Degenerate its local ideal by a positive-weight Gröbner family, preserving length and support at the origin. Socle is the common kernel of the two multiplication matrices; its dimension can only increase at the special monomial fiber. A Ferrers diagram with c corners has at least 1+2+⋯+c boxes, and its corner monomials are exactly its socle basis. Since c≥s, the bound follows. Consequently a fiber of α of dimension d has r≥(d+2)(d+1)/2. [given, A1, F1, step 6.1, algebra]

8.1 The nested locus whose support lies on the x-axis has dimension at most n. Frame the length-n quotient. It consists of (X,Y,i,L), with commuting X,Y, Y nilpotent, i cyclic and L an X,Y-invariant line; because Y is nilpotent, $L⊂\ker Y$. For a fixed Jordan Y, its centralizer algebra A has dimension c. The image of $A^×$ on ker Y is the full parabolic preserving the filtration by socles of blocks of length at least j. This follows directly from the module maps $C[t]/t^d→C[t]/t^e$: on socles they are arbitrary for $e≥d$ and zero otherwise. That parabolic has finitely many line orbits, indexed by the first nonzero associated filtration piece. For a line orbit of dimension o, its stabilizing linear subalgebra in A has dimension c−o, since the group is open in A. Thus pairs (X,L) have dimension at most c. Adding the Y orbit and i, then subtracting the free $GL_n$ framing dimension, gives $(n^{2}−c)+c+n−n^{2}=n$. This proves the bound without a nested-cell theorem. The same calculation with nilpotent X gives at most n−1 for a punctual nested fiber: on each stabilizer algebra the eigenvalue of X on L is a surjective scalar linear functional (identity maps to 1), and nilpotence imposes its vanishing, dropping at least one dimension. [given, A1, F1, step 7.1, algebra]

9.1 Put $D_j=det B_j$ and let L be the kernel line of $B_n→B_{n−1}$; hence $L=D_n⊗D_{n−1}^{−1}=O(−1,1)$. In the projectivization $N_n=Proj_B$ Sym I, this is exactly the tautological quotient line O(1): its fiber is $I_{n−1}/I_n$. We calculate the canonical line directly by adjunction, so no curvilinear codimension argument is required. [given, A1, F1, step 8.1, algebra]

10.1 Use the compact base $\operatorname{Hilb}^{n−1}(P^{2})×P^{2}$, smooth by the geometric Hilbert supplier. Its universal ideal has projective dimension one for the same finite-flat/codimension-two reason as in the argument beginning at step 1.1. An ample twist and actual eventual global generation give a global vector-bundle presentation $0→E_1→E_0→I→0$: start with a sum of sufficiently negative ample powers surjecting onto I; its kernel is locally free by the local projective-dimension-one calculation. Restrict to $B=H_{n−1}(A^{2})×A^{2}$. If rank $E_0=M$, rank $E_1=M−1, N_n$ is the zero locus in $P_B(E_0)$ of the section of $π*E_1*⊗O(1)$ given by this presentation. The smoothness/Jacobian calculation in the argument beginning at step 1.1 proves that this section is regular of its expected codimension M−1, including where a nonminimal presentation is used (cancel unit matrix entries first). [given, A1, F1, step 9.1, algebra]

11.1 For the quotient-line projective-bundle convention, the relative Euler sequence gives $ω_{P(E_0)}=π*(ω_B⊗det E_0)⊗O(−M)$; one obtains this by taking the determinant of its explicit rank-M Euler sequence. The conormal exact sequence of the regular section, again taking determinants, therefore gives [given, A1, F1, step 10.1, algebra]

12.1 $ω_{N_n}=π*(ω_B⊗det E_0⊗det E_1^{-1})⊗O(−1)$. [given, A1, F1, step 11.1, algebra]

13.1 The determinant ratio is det $I=O_B$: the universal ideal agrees with $O_B$ off its codimension-two universal subscheme, and its determinant as this length-one locally free resolution has no codimension-one zero or pole. Normality of smooth B extends that identification. Also $ω_B=O_B$ because $ω_{H_{n−1}(A^{2})}=O$ and $ω_{A^{2}}=O$, supplied by the already proved Hilbert canonical comparison. Consequently [given, A1, F1, step 12.1, algebra]

14.1 $ω_{N_n}=L^{-1}=O(1,−1)$. [given, A1, F1, step 13.1, algebra]

15.1 All identifications are canonical determinant identities of the actual presentation and its tautological quotient; no unproved nested canonical formula is a premise. [given, A1, F1, step 14.1, algebra]

16.1 One other chart fact used below is equally explicit. On the open of $H_n$ where x generates the quotient, its ideals are $(p_n(x),y−φ_a(x))$, with $p_n$ monic degree n and $φ_a$ degree $<n$. In the isospectral scheme, let $x_1,…,x_n$ be the ordered roots and set $y_i=φ_a(x_i)$. These variables $x_i$ and the n coefficients $a_j$ give an affine 2n-space mapping as a closed subscheme to the reduced fiber product, containing its dense ordered-distinct locus; hence it is that open isospectral chart. Any disjoint union of curvilinear local algebras is generated by one generic linear form: avoid its finitely many tangent-zero and equal-support-value conditions. Thus $X_n$ is smooth on the entire curvilinear locus, a fact used only for the $n≤3$ pushforward base cases. [given, A1, F1, step 15.1, algebra] ∎
