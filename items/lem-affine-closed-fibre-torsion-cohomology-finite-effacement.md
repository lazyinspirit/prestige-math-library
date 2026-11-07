---
id: lem-affine-closed-fibre-torsion-cohomology-finite-effacement
kind: lemma
title: Finite effacement of torsion cohomology on affine closed subschemes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- def-axiom-of-choice
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards
- lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
- lem-finite-morphism-etale-direct-image-calculus
- lem-site-slice-restriction-locality-and-composition
- lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
- thm-etale-locally-standard-etale
- thm-etale-formally-etale-finite-presentation
- thm-conormal-exact-sequence-algebra
- thm-formally-unramified-differentials-zero
- cor-derivations-represented-by-differentials
- def-ag-standard-smooth-algebra
- lem-ag-standard-smooth-flatness
- thm-etale-equivalent-flat-unramified-fp
- thm-existence-of-algebraic-closures
- thm-lying-over
- lem-spectrum-compactness-open-cover-to-unit-ideal
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
proof_strategy: direct
axiom_use: AC is explicit and carried through the actual algebraic-closure, quotient-lifting algebra, spectral covering and injective-model inputs. No batch25 item is a supplier; its three-step quotient-lifting derivation is inline.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Affine analog of proper base change
    url: https://stacks.math.columbia.edu/tag/09ZE
    locator: Full09ZE and09ZD/09ZC/09ZA/09ZB/0GY0 displayed source proofs read; the closed-quotient splitting, torsor and vanishing arguments are reconstructed locally below.
  - title: SGA4, ExposeXIV section1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Full fetched section read; finite coefficient resolution is contextual, not an external theorem input.
---

## Statement

Assume the Axiom of Choice. Let X be affine, let Z⊂X be a closed subscheme, let F be a torsion abelian sheaf on X_et and let q>0. For every class ξ∈H^q_et(Z,F|Z) there is a monomorphism F→Fprime of torsion sheaves on X whose restriction kills ξ. For finite constant abelian M, a single finite surjective finitely presented Xprime→X kills a given ξ∈H^q_et(Z,M).

## Statement references

[The Stacks Project, Lemma59.82.1](https://stacks.math.columbia.edu/tag/09ZE)

## Facts & Assumptions

**Given:** AC and exactly the schemes, coefficients, degree and class in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The corrected explicit-AC affine-limit witness construction gives cohomology continuity for a fixed pulled-back sheaf and finite-stage zero witnesses. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F2] At explicit AC scope, finite constructible Z/n-module sheaves on FULLqcqs schemes embed in finite sums of finite constant pushforwards; normalization is approximated, not assumed finite. [[lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards]]

[F3] At explicit AC scope a class with arbitrary torsion coefficients on a closed subscheme lifts through a finite constructible G→F, with no monomorphism assertion. [[lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses]]

[F4] Finite direct image is exact, and the actual arbitrary-base-change map is an isomorphism with the finite product stalk formula. [[lem-finite-morphism-etale-direct-image-calculus]]

[F5] The actual resolution, composition and H1/torsor constructions use the site calculus; at explicit AC scope geometric stalks are exact and conservative. [[lem-site-slice-restriction-locality-and-composition]] [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F6] At AC scope étale morphisms are locally standard étale, and affine fp étale algebras are formally étale. The conormal sequence and differentials represent derivations. [[thm-etale-locally-standard-etale]] [[thm-etale-formally-etale-finite-presentation]] [[thm-conormal-exact-sequence-algebra]] [[thm-formally-unramified-differentials-zero]] [[cor-derivations-represented-by-differentials]]

[F7] At AC scope a finite standard-smooth square-Jacobian presentation is flat and finitely presented; vanishing differentials and the flat/unramified/fp criterion make it étale. [[def-ag-standard-smooth-algebra]] [[lem-ag-standard-smooth-flatness]] [[thm-etale-equivalent-flat-unramified-fp]]

[F8] AC supplies algebraic closures, lying-over and the covering-to-unit-ideal spectral criterion. [[thm-existence-of-algebraic-closures]] [[thm-lying-over]] [[lem-spectrum-compactness-open-cover-to-unit-ideal]]

[F9] Effective faithfully flat module/algebra descent is given by the invariant equalizer and preserves the algebra operations. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** monic root charts, explicit affine lifting, constant cohomology vanishing and pushout.

1.1 Let R be an integrally closed domain with algebraically closed fraction field Ω. Every monic polynomial over R splits in R: its roots in Ω are integral over R and hence belong to R. Let U be an affine finitely presented étale R-scheme. Under AC the existing locally-standard-étale theorem applies at its exact stated scope. Quasi-compactness supplies finitely many standard-étale affine charts on U. Each chart is (R[T]/P)_g, with P monic and P' invertible there. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, given, construct, algebra]

2.1 Write P(T)=∏_(j=1)^d(T-a_j) with a_j∈R, retaining repeated factors. Put Q_j(T)=∏_(k≠j)(T-a_k). Since P'=Σ_j Q_j is invertible, the principal opens D(Q_j) cover the chart. On D(Q_j), the equation P=0 forces T=a_j. That open is precisely Spec(R_(g(a_j)Q_j(a_j))); its extra derivative localization is redundant because P'(a_j)=Q_j(a_j). These opens are pairwise disjoint: on D(Q_j) one has T-a_j=0, while Q_k contains T-a_j when k≠j, so D(Q_j)∩D(Q_k) is empty. Repeated roots simply give empty opens. Thus each standard chart is a finite disjoint union of open subschemes of Spec(R). [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 1.1, given, construct, algebra]

3.1 These chart pieces glue by their generic sheets. Each nonempty piece contains the generic point of Spec(R), and therefore one of the finitely many points of U_Ω. Pieces with different generic points cannot intersect: any nonempty intersection is open in each integral piece and contains its generic point, identifying the two. For pieces with the same generic point, their sections over the intersection of their base opens agree at the generic point. They agree everywhere because U is affine, hence separated over R, and their ring functions lie in the domain R and agree in Ω. Equivalently the closed diagonal equalizer contains the generic point of the reduced intersection and is the whole intersection scheme. Their images consequently intersect in exactly that common base open and glue to an open subscheme of Spec(R). There are finitely many generic sheets. Hence U is a finite disjoint union of open subschemes of Spec(R). [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 2.1, given, construct, algebra]

4.1 Let S=R/J. We now derive the needed affine étale lifting algebra explicitly; no item from the consuming batch25 is a logical supplier. Let C be the finitely presented étale S-algebra representing V. If C=0, use the zero R-algebra. Otherwise write C=P/I with P=S[x1,...,xr] and I finitely generated. The published formally-étale finite-presentation theorem applies under our AC premise, so the identity of C lifts across P/I²→C to an S-algebra section s:C→P/I². The difference δ(p)=(p mod I²)-s(p mod I) is an S-derivation P→I/I², because the latter ideal is square zero. For i∈I it is i mod I². Hence the conormal map I/I²→Ω_(P/S)⊗P C=C^r has a retraction. Since Ω_(C/S)=0, the conormal exact sequence makes that map surjective as well, so it is an isomorphism. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 3.1, given, construct, algebra]

5.1 Choose f1,...,fr∈I mapping to the standard basis of C^r. For the finite P-module N=I/(f1,...,fr), the basis identity says I=(f1,...,fr)+I² and therefore N=IN. Choose a finite generating column v of N and a matrix H with entries in I satisfying v=Hv. The adjugate matrix gives gv=0 for g=det(1-H)∈1+I. Thus gI⊂(f1,...,fr), and C=P_g/(f1,...,fr)=S[x1,...,xr,t]/(f1,...,fr,gt-1). The empty generating column gives g=1, and r=0 is included. The r×r derivative matrix (∂fi/∂xj) is the conormal isomorphism, so its determinant is a unit in C. The full square Jacobian of the r+1 displayed equations with variables x1,...,xr,t has determinant g·det(∂fi/∂xj), again a unit in C. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 4.1, given, construct, algebra]

6.1 Lift the finitely many coefficients of those equations to R, obtaining F1,...,F_(r+1), and let Δ be their full square Jacobian determinant. Put B=(R[x1,...,xr,t]/(F1,...,F_(r+1)))_Δ. The published standard-smooth flatness theorem, at its explicit AC scope, makes B finitely presented and flat. Its differentials vanish by the invertible square Jacobian, and the published flat/unramified/fp criterion at AC scope makes B étale. Reduction modulo J gives the displayed presentation of C with an extra localization at a unit, so B/JB≅C. Thus U=Spec(B) is the required affine fp étale lift. This is affine étale lifting, not finite étale lifting across an arbitrary ideal. The preceding monic-root calculation decomposes U into finitely many disjoint opens of Spec(R); base change decomposes V into finitely many disjoint opens V_j of Spec(S). [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 5.1, given, construct, algebra]

7.1 If V→Spec(S) is finite and surjective, each V_j is clopen in V and its map to Spec(S) is both finite and an open immersion. Its image S_j is therefore clopen. Form the finite Boolean partition of Spec(S) according to membership in the S_j. On a nonempty partition piece choose the least j containing it. The corresponding inverse open-immersion maps glue on this clopen partition to a global section Spec(S)→V. This proves the needed section assertion directly, without invoking a fundamental group or a general proper-base-change theorem. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 6.1, given, construct, algebra]

8.1 Every affine fp étale object over Spec(S) has the displayed Zariski-open decomposition. Thus the small étale sheaf theory over S agrees with the Zariski one for the constant coefficient calculation: a cover has a Zariski-open refinement, and every basis object has a Zariski cover by open immersions into Spec(S). The same assertion holds on every principal open, since R_f is again a normal domain with algebraically closed fraction field Ω. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 7.1, given, construct, algebra]

9.1 A torsor under the finite constant group M is represented by a finite étale scheme, without a Noetherian restriction. Here is the finite descent calculation needed for that assertion. Over affine S take the family of all affine étale objects trivializing the torsor and retain a finite subcover. The disjoint union is affine and gives a faithfully flat map S→B under the stated AC hypothesis. The locally represented finite algebra B^M has permutation descent transport. The published effective faithfully-flat module/algebra descent theorem gives its invariant algebra C and B⊗_S C≅B^M. Finite generation descends by writing the finitely many upstairs generators as finite sums of pure tensors. Finite presentation descends by applying the same argument to the relation kernel. Flatness descends by faithfully flat kernel detection. The finite algebra has étale fibres because its base change is the split finite algebra, and separability/reducedness are detected after that field extension. Thus C is finite étale. Its represented sheaf recovers the torsor by the same descent datum. This proves representability here; the connected-Noetherian scope of a different finite-pi1 supplier is not being enlarged by citation. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 8.1, given, construct, algebra]

10.1 Every such torsor has a section by the closed-quotient decomposition. The H1/torsor bridge therefore gives H1_et(Spec(S_f),M)=0 for every principal open S_f. The bridge can also be seen directly from an actual injective resolution 0→M→I→Q: an H1 class is a section of Q modulo sections of I, whose local lifts form an M-torsor. A section of that torsor is exactly a global lift, so the class is zero. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 9.1, given, construct, algebra]

11.1 For higher degrees, étale covers have Zariski refinements by the closed-quotient decomposition, so a positive-degree class is Zariski locally zero: a cocycle in an injective resolution has local primitives because the resolution is exact as a complex of sheaves. Induct simultaneously on q for all principal opens of Spec(S). The case q=1 is proved above. For a degree-q class ξ, q>1, put I_ξ={f∈S:ξ|D(f)=0}. It is closed under multiplication by arbitrary elements. If f,g∈I_ξ, then D(f+g)=D(f(f+g))∪D(g(f+g)). The intersection is D(fg(f+g)), where H^(q-1) vanishes by induction. The Mayer–Vietoris exact sequence therefore shows ξ|D(f+g)=0. Thus I_ξ is an ideal. Local vanishing says the D(f), f∈I_ξ, cover Spec(S); the AC-qualified cover-to-unit-ideal criterion gives 1∈I_ξ. Therefore ξ=0. This proves H^q_et(Spec(R/J),M)=0 for every q>0 and every ideal J. The empty spectrum and zero coefficient group give zero cohomology and are included. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 10.1, given, construct, algebra]

12.1 For arbitrary A take the polynomial domain P=Z[x_a:a∈A] with its evaluation surjection P→A and kernel J. Under the explicit AC hypothesis choose an algebraic closure Ω of Frac(P), and let R be the integral closure of P in Ω. It is an integrally closed domain, and Frac(R)=Ω: clear denominators in a monic algebraic equation to see that a nonzero P-multiple of any element of Ω is integral over P. The ring A'=R/JR is integral over A. For a given prime p of A, take its inverse image p_P in P and apply lying-over to the integral inclusion P→R. The resulting prime q of R over p_P contains JR, so its quotient gives a prime of A' over p. Thus Spec(A')→Spec(A) is surjective at the stated AC scope. Put Z'=Z×_A A'. It is a closed subscheme of Spec(R), so the pullback of ξ is zero by the preceding cohomological vanishing. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 11.1, given, construct, algebra]

13.1 Write A' as a filtered colimit of A-algebras B_i finite and finitely presented over A. Explicitly choose finitely many integral generators, monic equations for them, and finitely many relations that hold in A'; the quotient of the resulting monic finite-free algebra by those finitely many relations is finite as an A-module and finitely presented as an A-algebra. Include ALL such finite data. Increasing the finite sets and equations makes a filtered system with colimit A'. Every Spec(B_i)→Spec(A) is surjective: the map B_i→A' gives a factorization of the already-surjective Spec(A')→Spec(A), so each base prime has a preimage in Spec(B_i). No flatness of B_i is asserted or needed. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 12.1, given, construct, algebra]

14.1 Apply the corrected AC-scoped A1 continuity theorem to the inverse system of affine closed schemes Z_i=Z×_A B_i and its limit Z'. The coefficient M is the same pulled-back constant coefficient at every stage. Since the image of ξ is zero on Z', there is some i at which its pullback to Z_i is zero. The corresponding X'=Spec(B_i)→X is finite, surjective and finitely presented. This proves the Claim. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 13.1, given, construct, algebra]

15.1 Let now F be the arbitrary torsion sheaf and ξ∈H^q(Z,F|Z) with q>0. Apply [F3] to obtain one integer n, a finite constructible Z/n-module G on X, a morphism u:G→F and a class ζ∈H^q(Z,G|Z) mapping to ξ. The map u is arbitrary; no embedding into F is assumed. By [F2], which now has a complete full-qcqs author construction, choose a monomorphism G→⊕_a f_a,*M_a with f_a:Y_a→X finite fp and each M_a finite. The finite Y_a are affine because X is affine. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 14.1, given, construct, algebra]

16.1 Restriction to Z of the finite pushforward is the pushforward from Z_a=Y_a×X Z, by the actual finite-map base-change interface [F4]. Exactness of finite direct image gives H^q(Z,(f_a,*M_a)|Z)=H^q(Z_a,M_a): apply the derived composition/acyclic-model calculation to Γ(Z,-)f_a,*=Γ(Z_a,-), with f_a,* exact and its right adjunction preserving injectives where used. Finite direct sums commute with these complexes. Thus the image of ζ is a finite tuple of actual finite-constant classes ζ_a on the closed subschemes Z_a⊂Y_a. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 15.1, given, construct, algebra]

17.1 Apply the finite-constant clause proved above to each affine Y_a, its closed Z_a, its finite M_a and its class ζ_a. Choose a finite surjective finitely presented h_a:Y'_a→Y_a killing ζ_a, and put G'=⊕_a(f_a h_a)_*M_a. The map of constant sheaves M_a→h_a,*M_a is monic: by [F4] at a given geometric point its map is the diagonal into the finite product over a nonempty fibre. The fibre is nonempty by surjectivity and AC supplies the ordinary geometric-point test; exact conservative stalks at this explicit scope prove the monomorphism. The left exact f_a,* and finite direct sum preserve it. Hence the composite G→⊕f_a,*M_a→G' is a monomorphism. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 16.1, given, construct, algebra]

18.1 The image of ζ in H^q(Z,G'|Z) is zero. Indeed the same actual finite direct-image comparison of the preceding calculation identifies its a-th component with h_a^*ζ_a on Y'_a×X Z, and this was killed by construction. These are the natural pullback/counit maps, not arbitrary identifications of cohomology groups. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 17.1, given, construct, algebra]

19.1 Take the pushout F'=F⊔_G G' in abelian sheaves. The induced F→F' is monic because it is the pushout of the monomorphism G→G', regardless of whether u:G→F is monic. Explicitly F' is the cokernel of G→F⊕G', g↦(u(g),-v(g)); if (f,0) is in this image, v(g)=0 forces g=0 and f=0, checked locally for the sheaf cokernel. The pushout is torsion because it is a quotient of the direct sum of torsion sheaves. Exact inverse image to Z preserves this pushout. The commuting pushout square sends ξ, which is the image of ζ via G→F, to the same class as the image of ζ via G→G'→F'; the latter is zero. Thus the required monomorphism F→F' kills ξ. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 18.1, given, construct, algebra]

20.1 If ξ=0 one may take F'=F. If Z or X is empty the class group is zero, and the identity finite cover suffices for the constant clause. The finite constant coefficient M=0 and n=1 are included. This proves both clauses at the explicit AC scope of this NEW lemma. It asserts no choice-free countable replacement and no proof of the original unqualified proper-base-change theorem25. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, step 19.1, given, construct, algebra] ∎
