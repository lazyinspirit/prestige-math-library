---
id: lem-knot-floer-mirror-complex-duality
kind: lemma
title: "The normalized filtered complex of a reverse mirror is dual"
status: published
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
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

1.2 Specify the corresponding reverse-mirror diagram as follows. Before applying $r$, exchange the handlebodies and attaching systems, keeping the oriented surface and the ordered marks: $\mathcal H^\vee=(\Sigma,\boldsymbol\beta,\boldsymbol\alpha,w,z)$. This diagram lies in $-S^3$. Its alpha bridge is the old beta bridge traversed from $w$ to $z$, and its beta bridge is the old alpha bridge traversed from $z$ to $w$, so its knot is $-K$. Applying $r:-S^3\to S^3$ therefore gives $K^\dagger$; the compatible reflected Seifert surface has orientation $F^\dagger=-r(F)$. This is the corresponding reflected diagram in the Statement, with the two handlebody labels exchanged, rather than surface reversal alone. Periodic domains and their $w$ coefficients are unchanged by attaching-system exchange, so admissibility is preserved. Work on $\mathcal H^\vee$ and push all data forward by $r$ at the end. [F2, F3, given, construct]

2.1 For an original strip $u(s,t)$ from $\mathbf x$ to $\mathbf y$, put $u^\vee(s,t)=u(-s,1-t)$ and $J_t^\vee=J_{1-t}$. The new boundary conditions are beta at $t=0$ and alpha at $t=1$, its ends are $\mathbf y,\mathbf x$, and $\partial_su^\vee+J_t^\vee(u^\vee)\partial_tu^\vee=-(\partial_su+J_t(u)\partial_tu)(-s,1-t)=0$. Precomposition is invertible and conjugates the linearized real operators, preserving their kernels, cokernels and indices. It reverses translation and hence gives a bijection on translation orbits, preserving regularity and mod-two counts. The domain map reverses both real coordinates, so it preserves orientation and every marked divisor degree: $n_w(\phi^\vee)=n_w(\phi)$ and $n_z(\phi^\vee)=n_z(\phi)$. In particular, it bijects the actual $n_w=0$ strips defining the total hat differentials, including those with $n_z>0$. Thus $\partial^\vee\mathbf y^\vee$ contains $\mathbf x^\vee$ exactly when $\partial\mathbf x$ contains $\mathbf y$, with the same coefficient. This proves the literal transpose identity for the transported regular data. [F3, step 1.2, construct, algebra]

3.1 In the pointed Morse construction for $\mathcal H^\vee$, replace the compatible Morse function $f$ by $-f$ and negate the generator vector field, carrying its local trajectory modifications along with it. The ambient orientation and vector-field direction both reverse, so the oriented perpendicular plane, and hence its first Chern class, retain their physical orientations. Carry the prescribed zero-framed cap as well: its zero relative Euler number remains zero, and multiplying its boundary frame by a constant $-1$ changes no winding. The capped Seifert surface has the opposite orientation, so the absolute formula in [F1] gives $A_{F^\dagger}(\mathbf x^\vee)=-A_F(\mathbf x)$, with no additive shift. Pushforward by $r$ carries this pairing and the strip counts unchanged. Sending $\mathbf x^\vee$ to the dual basis functional is therefore a chain isomorphism by step 2.1. Its level is $-A_F(\mathbf x)$, so its sublevel $s$ consists exactly of functionals annihilating the generators at levels at most $-s-1$, which is the displayed dual filtration. This proves the filtered chain isomorphism; step 1.1 gives its one-dimensional total homology and the tau sign formula. The literal isomorphism uses the corresponding transported diagram, whereas [F4] only states the homotopy-type comparison for general normalized models. [F1, F4, step 1.1, step 1.2, step 2.1, construct, algebra] ∎
