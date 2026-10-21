---
id: lem-knot-floer-mirror-complex-duality
kind: lemma
title: "The normalized filtered complex of a reverse mirror is dual"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - def-knot-connected-sum-and-prime-knot
  - def-admissible-pointed-heegaard-floer-data
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used for the supplied regular diagrams. Selecting diagrams in a knot-level application may use the separately declared AC_omega branch."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056v3"
      locator: "§3.5, Propositions 3.7–3.9; orientation reversal, knot filtration symmetries, and duality"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§2, PDF/printed p.5; defines the reverse mirror and states CFK∞(−K) is the filtered dual of CFK∞(K)"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§3.1, tau changes sign under the concordance inverse"
---

## Statement

Let $K$ be a smooth oriented knot with a supplied regular admissible doubly pointed Heegaard diagram and normalized finite filtered hat complex $C_K$ whose total homology is $\mathbb F_2$. Let $r:S^3\to S^3$ be the fixed orientation-reversing reflection from the connected-sum convention, and let $K^\dagger$ be $r(K)$ with its knot orientation reversed. Use the reflected Seifert surface and the corresponding reflected regular diagram. For a finite filtered complex $C$, define its dual complex $C^\vee=\operatorname{Hom}_{\mathbb F_2}(C,\mathbb F_2)$ with transposed differential and filtration
$$F_sC^\vee=\{\lambda\in C^\vee:\lambda(F_{-s-1}C)=0\}.$$
Then the reflected diagram's normalized filtered hat complex is filtered chain isomorphic to $C_K^\vee$. In particular, its total homology is $\mathbb F_2$ and
$$\tau_{\mathcal H^\dagger,F^\dagger}(K^\dagger)=-\tau_{\mathcal H,F}(K).$$

## Statement references

[[def-knot-floer-filtration-and-tau|The absolute Alexander filtration and tau threshold]]

[[def-knot-connected-sum-and-prime-knot|The fixed reflection convention for the mirror knot]]

[[def-admissible-pointed-heegaard-floer-data|The pointed diagram and holomorphic-strip differential]]

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.5](https://arxiv.org/pdf/math/0209056v3)

[Hom, *The knot Floer complex and the smooth concordance group*, §2](https://arxiv.org/pdf/1111.6635)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** A finite integer-filtered chain complex $C_K$ with $H(C_K)\cong\mathbb F_2$, a regular pointed Heegaard diagram for $K$, and the reflected regular diagram for $K^\dagger$.

[F1] [[def-knot-floer-filtration-and-tau]] defines tau as the least filtration level whose inclusion has nonzero image in the one-dimensional total homology.

[F2] [[def-knot-connected-sum-and-prime-knot]] fixes the orientation-reversing reflection $r:S^3\to S^3$ used to form the mirror convention.

[F3] [[def-admissible-pointed-heegaard-floer-data]] defines the differential by mod-two counts of index-one holomorphic strips and the relative Alexander change by the difference of the marked-point multiplicities.

[F4] The explicit reflected-and-reversed convention in the Statement is Hom's reverse-mirror convention. Hom, *The knot Floer complex and the smooth concordance group*, §2, PDF/printed p. 5, states that the normalized $CFK^\infty$ complex of the reverse mirror is filtered-chain-homotopy equivalent to the dual.

## Proof

1.1 Put $t=\tau(C_K)$ and let $[x]$ be its nonzero total homology class in degree $n$. There is a cycle $x\in F_tC_{K,n}$ representing $[x]$. Since $H(F_{t-1}C_K)\to H(C_K)$ has zero image, every cycle in $F_{t-1}C_{K,n}$ is a boundary. Thus $x\notin B_n+F_{t-1}C_{K,n}$, where $B_n$ is the subspace of boundaries. Extend a linear functional $\lambda$ that vanishes on $B_n+F_{t-1}C_{K,n}$ and satisfies $\lambda(x)=1$. It is a cocycle. For a finite-dimensional chain complex, $\ker(\partial^\vee)=B^\perp$ and $\operatorname{im}(\partial^\vee)=Z^\perp$, so evaluation identifies $H(C_K^\vee)=B^\perp/Z^\perp$ with $H(C_K)^\vee$; hence $\lambda$ represents the nonzero dual class. It belongs to $F_{-t}C_K^\vee$. If $s<-t$, every element of $F_sC_K^\vee$ vanishes on $F_tC_K$, so its induced class pairs trivially with $[x]$ and maps to zero in total dual homology. Therefore $\tau(C_K^\vee)=-t$. [F1, given, construct, algebra]

2.1 Interpret the reflected regular diagram with the reverse knot-orientation convention in [F4], so it represents $K^\dagger$ with the reflected Seifert surface. Write the pointed holomorphic-strip equation on the symmetric product of $\Sigma$ as $\partial_su+J_t(u)\partial_tu=0$. On the reflected surface $-\Sigma$ use the reflected almost-complex structure $-J_t$ and define $u^\dagger(s,t)=u(-s,t)$. Then $\partial_su^\dagger+(-J_t)(u^\dagger)\partial_tu^\dagger=-(\partial_su+J_t(u)\partial_tu)(-s,t)=0$. The map reverses the two asymptotic ends, so an index-one strip from $\mathbf x$ to $\mathbf y$ corresponds bijectively to an index-one strip from $\mathbf y^\vee$ to $\mathbf x^\vee$; conjugation of the linearized operators preserves regularity and the mod-two counts agree. Consequently the reflected differential is the transpose. Under the orientation-reversing identification, the relative $\operatorname{Spin}^c$ structure is conjugated, which reverses the orientation of its orthogonal plane field and negates its first Chern class; the capped Seifert class is carried forward by the reflection. Hence the Alexander pairing changes sign and the dual generator has filtration $-A_F(\mathbf x)$. The reflected complex is therefore $C_K^\vee$, and step 1.1 gives the tau sign formula. [F1, F2, F3, F4, step 1.1, given, construct, algebra] ∎
