---
id: lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism
kind: lemma
title: "Closed-support splitting of a perverse sheaf is detected by its costalk-to-stalk map"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice, lem-analytic-constructible-sheaves-admit-coherent-six-operations, thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§4.1, Assumption 4.1.1 and Lemma 4.1.3 with proof, printed pp. 29–31"
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982) (complete Numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "4.2.3–4.2.6.2, printed pp. 109–112 (ordinary recollement, t-exactness and finite length of the perverse heart)"
    - title: "M. Goresky, «Lecture Notes on Sheaves and Perverse Sheaves» (version of June 26, 2026)"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "§20 and §22.8, printed pp. 72–75 and 87 (intermediate extension as the perverse image of $j_!\\to j_*$)"
---

## Statement

Assume AC as inherited from the ordinary constructible suppliers, and let $i:Z\hookrightarrow Y$ be a closed complex algebraic inclusion with complementary open inclusion $j:U\hookrightarrow Y$. Let $P$ be an ordinary constructible perverse sheaf over a characteristic-zero field. Set $A={}^pH^0i^!P$ and $B={}^pH^0i^*P$. The adjunction maps define a natural morphism $\alpha:A\to B$. It is an isomorphism if and only if
$$P\simeq i_*A\oplus j_{!*}j^*P.$$
More precisely, $i_*A$ is the largest subobject of $P$ supported on $Z$, $i_*B$ is its largest quotient supported there, and their composite equals $i_*\alpha$. If $\alpha$ is invertible, these canonical maps give the displayed splitting. For $Z=\{y\}$, $A=H^0(i_y^!P)$ and $B=H^0(i_y^*P)$ are finite vector spaces, so the criterion is exactly invertibility of the degree-zero costalk-to-stalk map. This criterion does not assert that that map is invertible for projective direct images.

## Facts & Assumptions

**Given:** The closed inclusion $i:Z\hookrightarrow Y$ with open complement $j:U\hookrightarrow Y$, the ordinary constructible perverse sheaf $P$ over a characteristic-zero field, the objects $A={}^pH^0i^!P$, $B={}^pH^0i^*P$ and $Q=j^*P$, and the adjunction morphisms between the six functors for the pair $(i,j)$.

[F1] Ordinary perverse recollement, its adjunctions and intermediate extension are supplied by [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]. In particular $i_*$ and $j^*$ are perverse exact, $i^*$ preserves the upper aisle $\le$ and $i^!$ the lower aisle, $Rj_!$ preserves the upper aisle and $Rj_*$ the lower aisle; the fully faithful functor $i_*$ identifies the perverse sheaves on $Z$ with the perverse sheaves on $Y$ supported on $Z$. Intermediate extension $j_{!*}Q$ is the image of the natural perverse morphism ${}^pH^0Rj_!Q\to{}^pH^0Rj_*Q$, and it has no nonzero subobject and no nonzero quotient supported on $Z$. The perverse heart on a point is the category of finite-dimensional vector spaces, in ordinary degree zero.

[F2] The ordinary localization triangles $i_*i^!P\to P\to Rj_*j^*P\xrightarrow{+1}$, $Rj_!j^*P\to P\to i_*i^*P\xrightarrow{+1}$ and their compatible adjunction maps are supplied by [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]. The Axiom of Choice is inherited solely from those constructed ordinary categories and functors; no additional selection is used.

## Proof

1.1 Put $Q=j^*P$. The localization triangle $i_*i^!P\to P\to Rj_*Q\to$ has both outer terms $i_*i^!P$ and $Rj_*Q$ in the lower perverse aisle: $i^!$ preserves it, $i_*$ is perverse exact and $Rj_*$ preserves it by [F1]. Its perverse cohomology exact sequence therefore begins $0\to{}^pH^0(i_*i^!P)\to{}^pH^0P$, and ${}^pH^0(i_*i^!P)=i_*A$ because $i_*$ is perverse exact; so the degree-zero adjunction map is a monomorphism $a:i_*A\rightarrowtail P$. Dually, the triangle $Rj_!Q\to P\to i_*i^*P\to$ has its outer terms in the upper perverse aisle, so its perverse cohomology sequence ends with ${}^pH^0P\to{}^pH^0(i_*i^*P)\to0$, that is, the adjunction map $b:P\twoheadrightarrow i_*B$ is an epimorphism. Full faithfulness of $i_*$ identifies the composite $ba:i_*A\to i_*B$ with $i_*\alpha$ for the induced map $\alpha:A\to B$. [given, F1, F2]

2.1 A morphism $i_*T\to P$ from a perverse sheaf supported on $Z$ corresponds by adjunction to a morphism $T\to i^!P$, and $i^!P$ lies in the lower aisle by [F1]. In the truncation triangle ${}^p\tau_{\le0}i^!P\to i^!P\to{}^p\tau_{\ge1}i^!P\to$ the outer terms have no morphisms from the heart object $T$: $\operatorname{Hom}(T,{}^p\tau_{\ge1}i^!P)$ vanishes because $T$ lies in ${}^pD^{\le0}$ and ${}^p\tau_{\ge1}i^!P$ in ${}^pD^{\ge1}$, and the same holds after a shift by $[-1]$ for the connecting map. Hence every $T\to i^!P$ factors uniquely through ${}^p\tau_{\le0}i^!P=A$, and every morphism $i_*T\to P$ from a supported perverse sheaf factors uniquely through $a$. Thus $a$ exhibits $i_*A$ as the largest subobject of $P$ supported on $Z$. Dually, applying the same argument to the opposite direction, every morphism $P\to i_*T$ onto a supported perverse sheaf factors uniquely through $b$, so $i_*B$ is the largest supported quotient. [F1, step 1.1]

3.1 Suppose $\alpha$ is invertible, and define $r=(i_*\alpha)^{-1}b:P\to i_*A$. Then $ra=(i_*\alpha)^{-1}ba=1_{i_*A}$. As $a$ is a monomorphism and $r$ a retraction in the abelian heart, $P=i_*A\oplus C$ with $C=\ker r$, and $j^*C=Q$ because $j^*$ is exact, $j^*i_*A=0$ and $j^*P=Q$. A subobject $S\subseteq C$ supported on $Z$ is also a supported subobject of $P$, so by step 2.1 its inclusion into $P$ factors through $a$; applying $r$ makes that factorization zero, while $S\subseteq\ker r$, so $S=0$. A supported quotient $C\twoheadrightarrow i_*T$ composed with the projection $P\twoheadrightarrow C$ is a morphism $P\to i_*T$; by step 2.1 it factors as $h\,b$ with $h:i_*B\to i_*T$, and it kills $i_*A$, so $0=h\,ba=h\,i_*\alpha$ and $h=0$; since $P\twoheadrightarrow C$ is an epimorphism, the quotient map $C\to i_*T$ is zero. Thus $C$ has no nonzero supported subobject and no nonzero supported quotient. [F1, step 1.1, step 2.1, algebra]

4.1 Conversely, let $C$ be any perverse object with $j^*C=Q$ and with no nonzero subobject and no nonzero quotient supported on $Z$. Adjunction supplies morphisms ${}^pH^0Rj_!Q\to C$ and $C\to{}^pH^0Rj_*Q$ that are identities on $U$: the first from the unit of $Rj_!\dashv j^*$ and the second from the counit of $j^*\dashv Rj_*$, using that $C$ lies in the heart and that $Rj_!Q$ lies in the upper while $Rj_*Q$ lies in the lower perverse aisle by [F1], so the truncation maps are equivalences on the relevant Hom groups. As $j^*$ is exact and carries both these maps to identities, the cokernel of the first map $f:{}^pH^0Rj_!Q\twoheadrightarrow C$ is a quotient of $C$ supported on $Z$, hence zero, and the kernel of the second map $g:C\rightarrowtail{}^pH^0Rj_*Q$ is a subobject of $C$ supported on $Z$, hence also zero; in particular $\ker f$ is supported on $Z$ as well. Write $c:{}^pH^0Rj_!Q\to{}^pH^0Rj_*Q$ for the natural comparison, whose image is $j_{!*}Q$ by [F1]. The restriction $c|_{\ker f}$ is a morphism into $j_{!*}Q$ from an object supported on $Z$, so its image is a supported subobject of $j_{!*}Q$; since $j_{!*}Q$ has no nonzero such subobject by [F1], $c|_{\ker f}=0$, so $c=\bar cf$ for a unique $\bar c:C\to j_{!*}Q$ because $f$ is an epimorphism in the abelian heart. On $U$ the maps $f$ and $c$ are identities, so $\bar c$ is an identity on $U$; its kernel is then a subobject of $C$ supported on $Z$, hence zero, and its cokernel is a quotient of $j_{!*}Q$ supported on $Z$, hence zero by [F1]. Thus $\bar c$ is an isomorphism and $C\simeq j_{!*}Q$. This proves that a perverse extension of $Q$ with no supported subobject or quotient is exactly $j_{!*}Q$, and it shows again that $j_{!*}Q$ itself has neither, as its defining property in [F1] states. [F1, F2, step 1.1, step 3.1]

5.1 Suppose $P\simeq i_*T\oplus j_{!*}Q$ for a perverse $T$ on $Z$. By step 4.1, $j_{!*}Q$ has no nonzero subobject or quotient supported on $Z$, so ${}^pH^0i^!j_{!*}Q=0={}^pH^0i^*j_{!*}Q$; and $i^!i_*=1=i^*i_*$ exhibits $A=B=T$ on the $i_*T$ summand, with the adjunction maps the identities. Additivity of the exact functors $i^!$, $i^*$ on the displayed direct sum therefore identifies $A=B=T$ and $\alpha=1_T$, an isomorphism. Combined with steps 3.1 and 4.1 this proves the equivalence: $\alpha$ is invertible if and only if $P\simeq i_*A\oplus j_{!*}j^*P$. For $Z=\{y\}$ the perverse heart on the point consists of finite-dimensional vector spaces in degree zero by [F1], so $A=H^0(i_y^!P)$ and $B=H^0(i_y^*P)$ are finite vector spaces and the criterion reduces to invertibility of the costalk-to-stalk map. Nothing in the argument asserts invertibility of $\alpha$ for projective direct images; that is the separate intersection-form obligation. [F1, step 2.1, step 4.1] ∎
