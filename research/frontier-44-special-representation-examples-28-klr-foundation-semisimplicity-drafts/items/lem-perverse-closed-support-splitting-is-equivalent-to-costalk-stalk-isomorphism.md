---
id: lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism
kind: lemma
title: "Closed-support splitting of a perverse sheaf is detected by its costalk-to-stalk map"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
  - lem-analytic-constructible-sheaves-admit-coherent-six-operations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, section 4.1"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume AC as inherited from the ordinary constructible suppliers, and let $i:Z\hookrightarrow Y$ be a closed complex algebraic inclusion with complementary open inclusion $j:U\hookrightarrow Y$. Let $P$ be an ordinary constructible perverse sheaf over a characteristic-zero field. Set $A={}^pH^0i^!P$ and $B={}^pH^0i^*P$. The adjunction maps define a natural morphism $\alpha:A\to B$. It is an isomorphism if and only if
$$P\simeq i_*A\oplus j_{!*}j^*P.$$
More precisely, $i_*A$ is the largest subobject of $P$ supported on $Z$, $i_*B$ is its largest quotient supported there, and their composite equals $i_*\alpha$. If $\alpha$ is invertible, these canonical maps give the displayed splitting. For $Z=\{y\}$, $A=H^0(i_y^!P)$ and $B=H^0(i_y^*P)$ are finite vector spaces, so the criterion is exactly invertibility of the degree-zero costalk-to-stalk map. This criterion does not assert that that map is invertible for projective direct images.

## Facts & Assumptions

**Given:** the spaces, inclusions, coefficients and perverse sheaf in the Statement.

[F1] Ordinary perverse recollement, its adjunctions and intermediate extension are supplied by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]. In particular, $i_*$ and $j^*$ are perverse exact, $i^*$ preserves the upper aisle, $i^!$ the lower aisle, $Rj_!$ the upper aisle and $Rj_*$ the lower aisle. The fully faithful functor $i_*$ identifies the perverse sheaves on $Z$ with perverse sheaves supported on $Z$. Intermediate extension is the image of the natural perverse morphism ${}^pH^0Rj_!Q\to{}^pH^0Rj_*Q$.

[F2] The ordinary localization triangles and their compatible adjunction maps are supplied by [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]. The use of AC is inherited solely from those constructed ordinary categories and functors.

## Proof

1.1 Put $Q=j^*P$. The localization triangle $i_*i^!P\to P\to Rj_*Q\to$ has $i^!P$ and $Rj_*Q$ in the lower perverse aisle. Its perverse cohomology exact sequence therefore begins $0\to i_*A\xrightarrow{a}P$. Likewise the triangle $Rj_!Q\to P\to i_*i^*P\to$ and the upper-aisle bounds give an epimorphism $b:P\twoheadrightarrow i_*B$. These are the degree-zero adjunction maps, and their composite defines $i_*\alpha=ba$ by full faithfulness of $i_*$. [given, F1, F2]

2.1 A morphism $i_*T\to P$ from a perverse sheaf supported on $Z$ corresponds by adjunction to $T\to i^!P$. Since $T$ is in the heart and $i^!P$ is in the lower aisle, the truncation triangle shows that this morphism factors uniquely through $A$: both Hom from $T$ to ${}^p\tau_{\ge1}i^!P$ and to its shift by $[-1]$ vanish. Dually every map $P\to i_*T$ factors uniquely through $B$. Hence $a$ and $b$ identify respectively the largest supported subobject and quotient. [F1, step 1.1]

3.1 Suppose $\alpha$ is invertible. Define $r=(i_*\alpha)^{-1}b:P\to i_*A$. Then $ra=1$. In the abelian perverse heart this gives $P=i_*A\oplus C$ with $C=\ker r$, and $j^*C=Q$. A subobject of $C$ supported on $Z$ would also be a supported subobject of $P$ and hence factor through $a$; applying $r$ makes that factor zero, so the subobject is zero. A supported quotient of $C$, composed with the projection $P\to C$, must factor through $b=(i_*\alpha)r$, but that projection kills $a$ while $ba$ is invertible. Its factor and therefore its quotient are zero. Thus $C$ has no nonzero supported subobject or quotient. [F1, step 1.1, step 2.1, algebra]

4.1 For any perverse extension $C$ of $Q$ with neither such subobject nor quotient, adjunction gives ${}^pH^0Rj_!Q\to C\to{}^pH^0Rj_*Q$, restricting to the identity on $U$. The first cokernel and second kernel are supported on $Z$ and therefore vanish. Consequently $C$ is the image of their composite, namely $j_{!*}Q$. Conversely that image has no supported subobject because it embeds in ${}^pH^0Rj_*Q$, nor supported quotient because it is a quotient of ${}^pH^0Rj_!Q$: the adjunction factorization and the localization triangles in step 1.1 show the corresponding supported Hom groups vanish. This proves both the characterization and $C=j_{!*}Q$. [F1, F2, step 1.1, step 3.1]

5.1 Suppose instead $P\simeq i_*T\oplus j_{!*}Q$. The characterization in step 4.1 and the maximal supported subobject/quotient statement in step 2.1 give ${}^pH^0i^!j_{!*}Q=0={}^pH^0i^*j_{!*}Q$. For $i_*T$ the two adjunction maps are identities under $i^!i_*=i^*i_*=1$. Additivity therefore identifies $A=B=T$ and $\alpha=1_T$, proving the converse. On a point the middle perverse heart is finite vector spaces in ordinary degree zero, so the final specialization follows without an intersection-form nondegeneracy assumption. [F1, step 2.1, step 4.1] ∎

## Proof boundary

This is a formal local deduction from the exact ordinary recollement and six-operation suppliers. Its purpose in the projective induction is to expose the precise remaining intersection-form obligation: one must separately prove that $\alpha$ is invertible. No Hodge polarization, decomposition theorem, or affine Morse theorem is used by this lemma. The upstream suppliers retain their own current proof and audit status.
