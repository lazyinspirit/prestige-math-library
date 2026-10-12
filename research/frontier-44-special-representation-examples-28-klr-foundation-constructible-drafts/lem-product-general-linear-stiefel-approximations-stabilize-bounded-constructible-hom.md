---
id: "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom"
kind: lemma
title: "General linear Stiefel approximations stabilize bounded constructible Hom"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model", "lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences", "lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent", "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-gram-schmidt-orthonormalisation", "thm-cohomological-serre-spectral-sequence", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Statement

Assume AC and let $G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ act algebraically on a separated finite-type complex variety $X$. Omit zero-rank factors. Let $U_N=\prod_i\operatorname{Inj}(\mathbb C^{n_i},\mathbb C^{N_i})$, $N_i\ge n_i+1$, and $B_N=\prod_i\operatorname{Gr}(n_i,N_i)$. Put $X_N=(U_N\times X)/G$ and $r_N=2\min_i(N_i-n_i)$. For $A\le a$ and $B\ge b$ in the actual equivariant bounded constructible derived category, the finite-resolution functor gives $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$ for $m\le b+r_N-a$. On an ordinary cohomological interval of width at most $r_N$ it is fully faithful; its image consists of the resolution triples whose principal-bundle pullbacks come from $X$. The image is closed under retracts. Products of sufficiently acyclic resolutions give coherent comparison equivalences. For the trivial group the identity model has $r_N=\infty$.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with the hypotheses explicitly stated in its claim.

[F6] The exact local supplier contract of [[def-stiefel-space-grassmannian-and-tautological-bundle]] is used with the hypotheses explicitly stated in its claim.

[F7] The exact local supplier contract of [[thm-gram-schmidt-orthonormalisation]] is used with the hypotheses explicitly stated in its claim.

[F8] The exact local supplier contract of [[thm-cohomological-serre-spectral-sequence]] is used with the hypotheses explicitly stated in its claim.

[F9] The exact local supplier contract of [[def-axiom-of-choice]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 Full-rank frame matrices form a smooth algebraic free right $G$-space; a pivot minor gives a graph chart and an algebraic section of $U_N\to B_N$. Thus $X_N$ is the actual associated variety, locally $V\times X$, and $s_N=\dim_\mathbb C B_N=\sum_i n_i(N_i-n_i)$. These principal-bundle charts establish existence of the quotient used in the claim. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.2 Gram–Schmidt gives a continuous factorization A=QR of a full-rank complex matrix, with Q an orthonormal frame and R upper triangular with positive real diagonal. The space of such R is convex after taking logarithms of its diagonal, and contraction R→I gives a deformation retraction onto V_n(C^N). No GL-equivariance of this retraction is needed. Forget the last orthonormal vector; this gives a locally trivial sphere bundle V_n(C^N)→V_{n−1}(C^N) with fiber S^{2(N−n)+1}. Local orthonormal trivializations follow by Gram–Schmidt on the orthogonal complement of a nearby frame. The sphere has the CW cochain complex with k in degrees0 and2(N−n)+1 and zero differential. Starting from V_0=pt and using the actual cohomological Serre spectral sequence, induction gives H^0(V_n;k)=k and H^j(V_n;k)=0 for 1≤j≤2(N−n). The only possible terms in that total-degree range are the base degree-j terms with fiber degree0; the induction hypothesis kills them. The product version follows from finite CW cochain tensor products. For any coefficient vector space V the same finite cochain calculation gives H^j(U_N;V)=H^j(U_N;k)⊗V, so the fiber is r_N-acyclic over every field k. The smooth finite CW/sheaf comparison is the explicitly declared ordinary topology input. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.3 Define D^b_{G,c}(X;k) as the full subcategory of D^b(Sh_k(G^•×X)) whose cohomology is Cartesian and whose degree-zero restrictions are bounded algebraically constructible. This is the original owned Definition. The preceding injective construction makes its ambient derived category real. Constructibility and Cartesian cohomology are closed under ordinary truncation, cones and retracts, so this full subcategory is triangulated and has a conservative ordinary restriction to X. The forgetful functor does not claim derived full faithfulness. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.4 Pullback along the simplicial map p_N:G^•×P_N→G^•×X is exact. The squares for its simplicial operators are Cartesian. The levelwise maps p_{N,m}:G^m×P_N→G^m×X are locally trivial bundles with fiber U_N. Evaluation preserves injectives by the free-simplicial-sheaf argument, so Rp_N* is computed levelwise by R p_{N,m}*. The constructible local product cochain comparison supplies the actual unit-cone bound in every degree m; ordinary cohomological bounds in the simplicial category are levelwise. Therefore the preceding bounded pullback theorem applies here as well. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.5 The free-action nerve G^•×P_N is the Čech nerve of P_N→X_N. The locally split descent theorem identifies its Cartesian-cohomology derived subcategory with D^b_c(X_N;k). Write Q_N(F)=F_N for the resulting composite from D^b_{G,c}(X;k). For A≤a and B≥b, adjunction and the unit-cone calculation give [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.6 `Hom_G(A,B[m]) ≅ Hom_XN(A_N,B_N[m])` whenever `m≤b+r_N−a`. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.7 A completely finite alternative statement is: if every object in the proposed Hom lies in an ordinary cohomological interval I and r_N≥length(I), Q_N is fully faithful on that interval. It identifies the interval with the full subcategory of H∈D^I_c(X_N;k) for which q_N*H comes from X under pr_X*:D^I_c(X;k)→D^I_c(P_N;k). This is the actual Bernstein–Lunts resolution triple [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.8 `(F_X,H,β:pr_X*F_X ≅ q_N*H)`. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

1.9 To verify the last assertion, start with such H, use free Čech descent to form its simplicial complex on P_N, and set F=τ≤upper(I) Rp_N*H_•. The counit is a quasi-isomorphism in nerve degree0 by the bounded pullback image criterion. In every higher nerve degree, H_• is the pullback of its degree-zero object along the projection to P_N, so it comes from G^m×X under p_{N,m}*. The same criterion gives the counit quasi-isomorphism there. Hence p_N*F≅H_•. Conservativity of each p_{N,m}* and the Cartesian compatibility squares show that F has Cartesian cohomology. Its degree-zero restriction is constructible by the actual ordinary pushforward/finite cochain supplier. This proves essential image without an infinite EG or an unspecified infinite sequence of splitting choices. Independence of N and products of resolutions follows by applying the same fully faithful image criterion on U_N×U_M×X; inverses and comparison isomorphisms are uniquely determined there, so their triple-product cocycles hold. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9]

2.1 The displayed local product Künneth comparison is used only to bound the unit cone and to test descent. It does not assert a global splitting R a_N*a_N*B=B⊗RΓ(U_N;k) on the quotient stack: that would erase genuine characteristic-class transgressions. The categorical Hom comparison follows from the cone vanishing, not from such a false global tensor splitting. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
