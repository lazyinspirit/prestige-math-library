---
id: "lem-hyperderived-functors-are-independent-of-the-supplied-cartan-eilenberg-resolution-up-to-natural-isomorphism"
kind: "lemma"
title: "Hyperderived functors are independent of the supplied resolution"
deps: ["def-right-hyperderived-functor-of-a-complex", "def-dependent-choice", "thm-a-bounded-below-complex-of-injectives-is-homotopically-injective", "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 5.7.3"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For an additive left-exact $F$, two supplied Cartan–Eilenberg resolutions of a bounded-below $K$ give canonically isomorphic hyperderived objects, naturally in maps of complexes. Assume DC, or supply the required complex comparison maps and homotopies, including comparisons of composites with the identity. The comparisons of total complexes are unique up to cochain homotopy over $K$. This assertion concerns hyperderived objects; it does not yet assert filtered comparison of spectral sequences.

## Facts & Assumptions

**Given:** Two resolutions with total augmentations $e:K\to T$ and $e':K\to T'$, and the choice/comparison qualification in the statement.

[F1] The hyperderived object is $H^n(F(T))$, where $e$ is a quasi-isomorphism and $T$ is bounded below and termwise injective ([[def-right-hyperderived-functor-of-a-complex]]).

[F2] With DC or the required homotopy extensions these total objects are K-injective ([[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]).

[F3] Maps in the derived category into a K-injective complex are uniquely represented by cochain maps modulo homotopy ([[prop-morphisms-into-a-homotopically-injective-complex-need-no-roof]]).

## Proof

1.1 Under DC apply the K-injective theorem to $T$ and $T'$. In the derived category the isomorphism $Q(e')Q(e)^{-1}:T\to T'$ is represented by a unique homotopy class of maps $a:T\to T'$. Its inverse is represented by $a':T'\to T$. The bijection for maps into $T$ and $T'$ gives $a'a\simeq1_T$, $aa'\simeq1_{T'}$ and $ae\simeq e'$. In the supplied-data branch these are exactly the comparison maps and homotopies required in the statement. [F1, F2, F3]

2.1 Additivity of $F$ sends $a'a-1=dH+Hd$ to $F(a')F(a)-1=F(d)F(H)+F(H)F(d)$, and likewise for the other composite. Homotopic maps induce the same map on cohomology because their difference factors through a differential on cycles. Thus $H^n(F(a))$ and $H^n(F(a'))$ are inverse. Any other comparison over $K$ has the same class by the bijection in step 1.1 and hence gives the same cohomology map. [F1, F3, step 1.1]

3.1 For $f:K\to L$ with total models $T_K,T_L$, represent $Q(e_L)Q(f)Q(e_K)^{-1}$ by a cochain map into $T_L$. The representative for a composite and the composite of representatives have identical images in the derived category; the no-roof bijection makes them homotopic. The same holds for identities and for changes of total models. Apply step 2.1 to obtain functorial maps and the natural comparison isomorphism. Zero maps and zero complexes obey these identities, and no uniform choice of representatives for all maps is needed to define their unique homotopy classes. [F1, F3, step 1.1, step 2.1] ∎
