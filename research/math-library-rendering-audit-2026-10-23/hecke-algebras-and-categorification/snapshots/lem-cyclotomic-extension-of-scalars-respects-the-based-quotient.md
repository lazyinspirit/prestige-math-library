---
id: lem-cyclotomic-extension-of-scalars-respects-the-based-quotient
kind: lemma
title: "Cyclotomic extension of scalars respects the based quotient"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [def-axiom-of-choice,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star,
       lem-klr-projective-duality-and-positive-divided-string-leading-terms,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       thm-klr-categorification-of-the-negative-quantum-half,
       thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis,
       thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6 and the global-basis discussion: the comparison between the generic negative-half projective basis and the cyclotomic one."
    - title: "Owner direction, in-repo: research/frontier-44-special-representation-examples-28-owner-klr-future-cyclotomic-convention-and-quotient-proof.md"
      locator: "Sections 'Graded quotient and projective covers' and 'First versus last strand is a genuine interface': the raw extension map pi_Lambda composed with the multiplication-reversing star, the surviving-cover uniqueness and the word-mirror alternative."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the generic global-basis, quantum-projection and canonical crystal suppliers.

Assume the full symmetric normalized-$d_i=1$, characteristic-zero,
loopless-quiver geometric-parameter scope of the generic global theorem, and
the STANDARD homogeneous first-strand cyclotomic quotient with RIGHT append.
Let $\gamma:U_A^-\to K_0(R)$ be the approved generic categorification and
$\phi:K_0(R^\Lambda)\to V_A(\Lambda)$ the vacuum-normalized integral
isomorphism. Then the raw extension $q_\Lambda(P)=R^\Lambda\otimes_RP$
satisfies
$$\phi[q_\Lambda(P)]=\pi_\Lambda\bigl(*(\gamma^{-1}[P])\bigr).$$
Composing extension with the generic mirror twist gives $\pi_\Lambda$ without
star. For $b\in B(\infty)$ and the generic normalized indecomposable projective
$P_b$ with $\gamma^{-1}[P_b]=G^-(b)$, raw extension is zero or a SINGLE
normalized indecomposable cyclotomic projective; its image is
$\pi_\Lambda G^-(b^*)$, which is zero or $G^-_\Lambda(\pi_\Lambda b^*)$. The
surviving cover orbits do not merge, and every normalized cyclotomic cover is
obtained. In RIGHT-simple labels $c$, the generic FIRST-recursion theorem gives
$\gamma^{-1}[P(S_c)]=G^-(c^*)$, so raw extension sends it to
$G^-_\Lambda(\pi_\Lambda c)$; these are exactly the crystal-compatible
survivor labels of the preceding theorem. The claim is for indecomposable
projectives, not every finite projective quotient.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. The standard first-strand cyclotomic quotient with right append, the
generic categorification $\gamma$ and the vacuum-normalized integral
isomorphism $\phi$, in the geometric parameter scope above.

[F1] The generic negative-half global basis and its projection
([[thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis]],
[[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]],
[[thm-klr-categorification-of-the-negative-quantum-half]]).

[F2] The word-mirror involution and the quantum star
([[lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star]]): it
commutes with projective Hom duality, reverses separated-block induction, and
induces the multiplication-reversing star fixing every $F_i$ and $q$.

[F3] The cover-descent and crystal-compatibility inputs
([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]],
[[lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors]],
[[thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda]],
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]]).

[F4] The positive FIRST-block coefficient-$1$ expansion and integral LEFT-string ideal equality of [[lem-klr-projective-duality-and-positive-divided-string-leading-terms]], and the FIRST/RIGHT one-step simple recursion of [[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]]. These are the existing algebraic inputs to the approved FIRST/RIGHT comparison; the crystal graph on covers is transported from heads, not an independent linear action on a projective basis.

## Proof

**Proof technique:** compare the side conventions on divided words, use the
mirror twist to convert star into the identity, and read survival and
non-merging off the cover-descent lemma.

1.1 The raw extension map on divided words. Right append sends a word $\nu_1\cdots\nu_n$ to $F_{\nu_n}\cdots F_{\nu_1}v_\Lambda$, whereas the generic multiplication convention assigns $F_{\nu_1}\cdots F_{\nu_n}$; on actual divided word classes the map is therefore $\pi_\Lambda\circ*$. Their $A$-span is all generic $K_0$ by [F1], so this determines the map integrally, giving $\phi[q_\Lambda(P)]=\pi_\Lambda(*(\gamma^{-1}[P]))$; composing with the generic mirror twist of [F2], which supplies exactly $*$ and commutes with projective Hom duality, gives $\pi_\Lambda$ without star. [F1, F2]

1.2 Positive star on the global basis. The generic mirror equivalence of [F2] preserves indecomposability and commutes with projective Hom duality, hence permutes the normalized generic covers. Once the generic global theorem in [F1] is instantiated, their classes are exactly the positive lower global vectors. Its induced quantum star therefore permutes these vectors with positive sign: $*G^-(b)=G^-(b^*)$. This is a consequence of the generic global theorem used here, not an input to its geometric or sign proof. [F1, F2]

2.1 Survival and non-merging. For a surviving normalized generic simple $S$, quotient Hom base change in the cover-descent lemma [F3] sends its normalized projective cover to the cyclotomic normalized cover, commutes with $\#$, and preserves its unscaled head pairing; if its simple is killed, the quotient is zero, because any nonzero finite quotient of the cover has a simple head and adjunction would produce a surviving generic head of the original cover. Thus raw extension of a generic normalized indecomposable projective is zero or a single normalized indecomposable cyclotomic projective, and distinct surviving heads do not merge; the image is $\pi_\Lambda G^-(b^*)$ respectively $G^-_\Lambda(\pi_\Lambda b^*)$ under the projections of [F1]. [step 1.1, step 1.2, F1, F3]

3.1 All-color label comparison in exact string quotients. In the scope where the generic global theorem [F1] has been established, define $\eta(S)$ by $\gamma^{-1}[P(S)]=G^-(\eta(S))$; equality of positive basis sets makes $\eta$ a bijection, not yet a crystal comparison. For every color $i$ the LEFT-string ideal equality of [F4], together with the adapted global basis, gives $\varepsilon_i(\eta(S))=\epsilon_i^L(S)$. If this common number is $r>0$, put $T=(e_i^L)^rS$, so $\epsilon_i^L(T)=0$ and $T$ has smaller height. The coefficient-$1$ projective expansion of [F4] gives $F_i^{(r)}G^-(\eta(T))-G^-(\eta(S))\in I_{(i,\ge r+1)}$. The exact adapted quantum transition in [F4] gives $F_i^{(r)}G^-(\eta(T))-G^-(\tilde f_i^r\eta(T))\in I_{(i,\ge r+1)}$. Subtract these congruences. Both global vectors have exact $i$-position $r$, and their classes belong to the free adapted basis of $I_{(i,\ge r)}/I_{(i,\ge r+1)}$; equality of these classes therefore forces $\eta(S)=\tilde f_i^r\eta(T)$, rather than merely equality of tail lengths. Replacing $S$ by $e_i^LS$ in the same calculation with $r-1$ gives $\eta(e_i^LS)=\tilde e_i\eta(S)$, and the partial-inverse identities give the corresponding $f_i^L$ equality. This holds for EVERY color with positive first tail. The unit maps to $1$, and every nonvacuum simple has a positive first tail since some first-word corner is nonzero; finite height induction now proves compatibility along every first-end lowering word. No path choice enters: $\eta$ was already defined by its actual global vector, and the exact quotient equality proves that all paths compute this same label. The mirror equivalence of [F2] exchanges FIRST and RIGHT operators on simple shift orbits, fixes the vacuum and induces star on normalized cover classes. Hence, once the general canonical RIGHT-label identification of [F3] is supplied, $\gamma^{-1}[P(S_c)]=G^-(c^*)$ and step 1.1 cancels the two stars to give $G^-_\Lambda(\pi_\Lambda c)$. Every normalized cyclotomic cover is obtained by inflating its simple and descending its generic cover. The Axiom of Choice is inherited through the generic global-basis, adapted quantum-string and quantum-projection contracts in [F1], [F4] and the canonical-extraction supplier of [F3]; no additional infinite choice is used. This proves the exact all-color adapted comparison conditional on the actual generic global theorem and canonical graph identification, and does not establish either unresolved supplier by an equality of basis sets. [step 1.2, step 2.1, F1, F2, F3, F4, algebra] ∎
