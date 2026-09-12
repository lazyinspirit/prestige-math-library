---
id: thm-forcing-equivalence-and-boolean-completion
kind: theorem
title: Forcing equivalence and Boolean completion
status: published
origin: pipeline
deps: [lem-separative-quotient-of-a-forcing-preorder, thm-forcing-preorders-have-regular-open-completions, lem-dense-forcing-name-translations-preserve-forcing]
proof_strategy: direct
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
    - title: "Karagila, Forcing (2023), Definitions 2.28–2.33, Propositions 2.30–2.32 and Theorem 2.34, pp.11–13; local name-translation supplier"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZF every nonempty set forcing preorder $P$ is forcing-equivalent to its separative quotient $S$ and to $B\setminus\{0_B\}$, where $B$ is its regular-open complete Boolean algebra. For each of the canonical maps, and for any dense order embedding, generic filters correspond by inverse image and upward closure of the image; recursive translations of names preserve valuations and preserve and reflect forcing for every fixed membership formula. Thus corresponding generic extensions are equal.

The forcing assertions hold internally in every transitive ZF ground containing the data, without a countability or generic-existence assumption. Generic-extension assertions are conditional on the generic being supplied. Boolean zero is excluded, and no BPI or AC is required.

## Facts & Assumptions

**Given:** ZF, with nonempty forcing preorders and stronger conditions lower.

[F1] [[lem-separative-quotient-of-a-forcing-preorder]] constructs the nonempty separative quotient and its order-preserving, compatibility-preserving-and-reflecting quotient map.

[F2] [[thm-forcing-preorders-have-regular-open-completions]] constructs the regular-open complete Boolean algebra and its dense map, which preserves order and preserves and reflects compatibility.

[F3] [[lem-dense-forcing-name-translations-preserve-forcing]] proves both recursive name translations, both forced round trips, substitution, both directions of fixed-formula forcing equivalence, and inverse generic correspondences with valuation agreement for every map having these properties.

## Proof

1.1 Let $\pi:P\to S=P/{\sim}$ be the quotient in F1. It preserves order and both compatibility directions. It is onto, hence has dense image: every class has some representative, and its own class is below itself. This uses the representative of one specified class at a time, not a choice of representatives of all classes. Therefore $\pi$ meets all of F3's hypotheses, even though it may fail to reflect the original order or to be injective. [F1, given]

1.2 In the downward-open topology on $P$, F2 constructs $B=\operatorname{RO}(P)$ and $e(p)=\operatorname{int}\overline{\mathord\downarrow p}$. It proves $e(p)\subseteq e(q)$ iff $p\le^*q$ and nonzero intersection iff original compatibility, and proves image density in $B\setminus\{0_B\}$. Thus $e$ too meets F3's hypotheses. Factoring through the quotient gives the dense order embedding $[p]\mapsto e(p)$ of $S$. The factor is well-defined and injective because mutual inclusion of the regular opens is exactly mutual $\le^*$. A nonzero Boolean meet is a common nonzero lower bound, so Boolean compatibility is exactly nonzero intersection. [F1, F2]

2.1 Apply F3 separately to $\pi$, to $e$, and to the factored dense embedding. In each case its explicit $T$ translates coefficients forward and its $R$ uses all coefficients whose images refine an original coefficient. Both fixed-formula forcing directions follow, including existential names, from its syntactic proof. For supplied generics its inverse-image/upward-image maps are inverse, and its two valuation equalities give both inclusions between the generic extensions. In particular all three presentations produce the same extensions. This conclusion uses the proved forced equality of round-trip names; it does not identify their sets of pairs literally. [F3, step 1.1, step 1.2]

3.1 Finally an arbitrary dense order embedding $j:P\to Q$ has the same properties. Order preservation preserves compatibility. If $j(p),j(r)$ have a common lower bound $q$, image density supplies $j(s)\le q$; order reflection gives $s\le p,r$, proving compatibility reflection. F3 therefore applies to this embedding as well. The singleton preorder yields the two-element regular-open algebra and its singleton nonzero part. Boolean zero is excluded because the nonzero image cannot be dense below zero in the full algebra; retaining zero still gives a preorder in the two-element case, but not the dense target required by F3. All uses of F1–F3 are in ZF, and no filter-extension principle is involved. [F1, F2, F3, step 2.1] QED.
