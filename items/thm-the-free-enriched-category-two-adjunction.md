---
id: thm-the-free-enriched-category-two-adjunction
kind: theorem
title: "The free enriched category is left 2-adjoint to the underlying-category construction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-underlying-ordinary-category-of-an-enriched-category, def-enriched-category, def-enriched-functor, def-the-internal-hom-and-its-evaluation-morphism, thm-the-unit-is-an-internal-hom-unit]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (2.38) to (2.40)"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed, locally small, complete,
and cocomplete. Then every small ordinary category $\mathcal L$ has a free
$\mathcal V$-category $\mathcal L_{\mathcal V}$ with the same objects and
hom-objects

$$\mathcal L_{\mathcal V}(A,B)=\coprod_{\mathcal L(A,B)}\mathbf 1,$$

and this construction is left 2-adjoint to the underlying-category
construction:

$$[\mathcal L_{\mathcal V},\mathcal B]_0\cong[\mathcal L,\mathcal B_0]$$

naturally in the small ordinary category $\mathcal L$ and the set-object
$\mathcal V$-category $\mathcal B$.

## Facts & Assumptions

**Given:** A small ordinary category $\mathcal L$ and a set-object
$\mathcal V$-category $\mathcal B$.

[L1] The underlying ordinary category $\mathcal B_0$ has hom-sets
$\mathcal V(\mathbf 1,\mathcal B(X,Y))$
([[def-the-underlying-ordinary-category-of-an-enriched-category]]).

[L2] A $\mathcal V$-category and a $\mathcal V$-functor are determined by their
hom-objects and structure maps ([[def-enriched-category]], [[def-enriched-functor]]).

## Proof

**Proof technique:** direct.

1.1 Define $\mathcal L_{\mathcal V}$ to have the same objects as $\mathcal L$ and hom-object $\coprod_{\mathcal L(A,B)}\mathbf 1$ from $A$ to $B$. The summand indexed by $f:A\to B$ is the enriched name of the ordinary arrow $f$, the identity map of $\mathcal L$ names the enriched identity, and ordinary composition in $\mathcal L$ induces the enriched composition morphisms by the coproduct universal property. Thus [L2] gives a $\mathcal V$-category. [L2, given]

1.2 Conversely, let $F:\mathcal L\to\mathcal B_0$ be an ordinary functor. On objects keep the same map. On each hom-object $\coprod_{\mathcal L(A,B)}\mathbf 1$, define the corresponding map into $\mathcal B(FA,FB)$ by naming the ordinary morphism $F(f)$ on the summand indexed by $f$. The functoriality of $F$ makes these maps preserve identities and composition, so [L2] gives a $\mathcal V$-functor $\mathcal L_{\mathcal V}\to\mathcal B$. [L1, L2, construct]

2.1 Let $T:\mathcal L_{\mathcal V}\to\mathcal B$ be a $\mathcal V$-functor. For every ordinary arrow $f:A\to B$ in $\mathcal L$, the corresponding coproduct summand $\mathbf 1\to\mathcal L_{\mathcal V}(A,B)$ followed by the hom-map of $T$ gives a global element $\mathbf 1\to\mathcal B(TA,TB)$, hence by [L1] an ordinary morphism $TA\to TB$ in $\mathcal B_0$. Compatibility of $T$ with identities and composition makes these assignments an ordinary functor $\mathcal L\to\mathcal B_0$. [L1, L2, step 1.1]

2.2 The same correspondence acts on $2$-cells. A $\mathcal V$-natural transformation $\alpha:T\Rightarrow S$ has components $\mathbf 1\to\mathcal B(TA,SA)$, hence ordinary components $TA\to SA$ in $\mathcal B_0$ by [L1]. Its enriched naturality equation on the coproduct hom-object of $\mathcal L_{\mathcal V}$ holds exactly when the ordinary naturality square holds on every summand indexed by an arrow of $\mathcal L$. Thus enriched natural transformations correspond bijectively to ordinary natural transformations, compatibly with identities and composition. [L1, L2, step 1.1, algebra]

3.1 Steps 1.2 and 2.1 give mutually inverse correspondences on functors, while step 2.2 gives the corresponding isomorphism on morphisms. They therefore define a natural isomorphism of hom-categories $$[\mathcal L_{\mathcal V},\mathcal B]_0\cong[\mathcal L,\mathcal B_0],$$ which is the claimed $2$-adjunction. [step 1.2, step 2.1, step 2.2] ∎
