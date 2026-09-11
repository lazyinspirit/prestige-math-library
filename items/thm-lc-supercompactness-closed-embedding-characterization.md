---
id: "thm-lc-supercompactness-closed-embedding-characterization"
kind: "theorem"
title: "Supercompactness and closed elementary embeddings"
deps: ["lem-lc-fine-ultrapower-seed-and-normality", "def-lc-fine-ultrafilters-strong-compactness-and-supercompactness", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Lemmas 20.17–20.21 pp.440–442
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let kappa be regular uncountable and lambda>=kappa a cardinal. Then lambda-supercompactness is equivalent to the existence of a definable elementary embedding $j:V\to M$ into a transitive class with critical point kappa, $j(\kappa)>\lambda$, and every ambient function from lambda to M belonging to M. For such an embedding the derived normal fine measure is

$$U=\{X\subseteq P_\kappa(\lambda):j``\lambda\in j(X)\}.$$

All embeddings use the stated definable-class and set-restriction convention.

## Facts & Assumptions

**Given:** ZFC. Proved critical-point fixing for the fine index, selected representatives from Scott sets, represented the sequence graph on j``lambda and reindexed it internally; the converse checks seed size and every measure law.

[F1] [[lem-lc-fine-ultrapower-seed-and-normality]]: A normal fine ultrapower has seed j``lambda of internal order type lambda and j(kappa)>lambda.

[F2] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: A normal fine kappa-complete ultrafilter on $P_\kappa(\lambda)$ witnesses lambda-supercompactness.

[F3] [[def-axiom-of-choice]]: AC selects representative functions from a set family of nonempty Scott representatives.

## Proof

1.1 From a normal fine U take j and s=j``lambda as in F1. Every map from its index set into eta<kappa has a constant U-large fibre, for otherwise kappa-completeness intersects all fibre complements to empty. Induct on alpha<kappa. Each predecessor of the constant-alpha class, for alpha>0, can be modified outside its U-large membership set to take values in alpha; the fibre argument makes it constant. For alpha=0 there are no predecessors. The collapse equation then gives j(alpha)=alpha. F1 gives j(kappa)>lambda>=kappa, so the critical point is exactly kappa. [F1]

2.1 Let $\langle a_\alpha:\alpha<\lambda\rangle$ be an ambient sequence of elements of M. The collapse has a unique Scott preimage for each a_alpha. Replacement therefore collects these nonempty set representatives; F3 chooses f_alpha from each one, so $\pi([f_\alpha]_U)=a_\alpha$. Define the set function $F(x)=\{(\alpha,f_\alpha(x)):\alpha\in x\}$. Its collapsed class G is exactly $\{(j(\alpha),a_\alpha):\alpha<\lambda\}$. For the inclusion from right to left use fineness: on the alpha-cone the pair (alpha,f_alpha(x)) belongs to F(x), and coordinate pairing transfers through the collapse. Conversely, any represented member of [F] selects on a U-large set a unique pair with first component alpha(x) in x. Normality makes alpha(x) a fixed alpha on a U-large subset. The selected pair is then equivalent to (alpha,f_alpha(x)), giving the required collapsed pair. This proves both inclusions. [F1, F3, step 1.1]

3.1 G belongs to M, and M has the increasing enumeration e of s of order type lambda by F1. Externally this enumeration is precisely alpha maps to j(alpha), by uniqueness of ordinal order type. Inside M compose the function with graph G with e. Its value at alpha is a_alpha, so the original ambient sequence belongs to M. The reindexing is essential: G itself has domain j``lambda, not generally lambda. Thus M has the asserted lambda-sequence closure. [F1, step 2.1]

4.1 Conversely suppose j satisfies the embedding and closure conditions. Each j(alpha) for alpha<lambda lies in M, so the set-restriction convention and closure put $j\restriction\lambda$ in M. Its domain lambda and range s=j``lambda consequently belong to M. This increasing map exhibits there the order type lambda, so M regards |s| as at most |lambda| and hence below j(kappa), since lambda<j(kappa) and j(kappa) is a cardinal of M. Also s is a subset of j(lambda). Thus s belongs to j(P_kappa(lambda)). Define U by the displayed formula using Separation. Elementarity for empty, whole index set, complements and finite intersections makes U a proper ultrafilter. For eta<kappa, j fixes eta and maps a sequence of U-members to a sequence with those j-images at each fixed index; s belongs to their intersection, proving kappa-completeness. Each point cone is large because s contains every j(alpha), proving fineness. [F1, step 3.1]

5.1 For normality let f:S to lambda select an element of x for x in S, with S in U. Then s belongs to j(S), so j(f)(s) belongs to s=j``lambda. It equals j(alpha) for some alpha<lambda. Elementarity for that fibre gives $s\in j(\{x\in S:f(x)=\alpha\})$, so the fibre belongs to U. Hence U is normal, fine and kappa-complete, which is precisely lambda-supercompactness. All derived sets use the definable embedding convention; no Global Choice is required. [F1, F2, step 4.1] ∎
