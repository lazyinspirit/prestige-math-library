---
id: thm-geometric-wild-inertia-equals-positive-upper-ramification
kind: theorem
title: "Geometric wild inertia is the positive upper ramification subgroup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-geometric-wild-inertia-subgroup-of-absolute-galois-group
  - def-absolute-upper-ramification-filtration-at-a-curve-point
  - lem-positive-geometric-lower-ramification-quotients-are-p-groups
  - thm-herbrand-quotient-compatibility-for-geometric-local-fields
  - def-lower-ramification-groups-of-a-geometric-local-extension
  - def-finite-geometric-upper-ramification-numbering
  - lem-geometric-local-integers-are-power-series-in-a-uniformizer
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the geometric-local-field definition and the profinite inverse-limit compactness used in the proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Crew, Local Class Field Theory, Chapters 1–2"
      url: https://people.clas.ufl.edu/rcrew/files/LCFT.pdf
verification:
  precheck: pending
---
## Statement

For a geometric local field $K_x$ with residue characteristic $p$, the largest closed normal pro-$p$ subgroup of $G_{K_x}$ equals the positive upper ramification subgroup: $O_p(G_{K_x})=G_{K_x}^{0+}:=\overline{\bigcup_{v>0}G_{K_x}^v}$.

## Statement references

[[def-geometric-wild-inertia-subgroup-of-absolute-galois-group|Geometric wild inertia]]

[[def-absolute-upper-ramification-filtration-at-a-curve-point|Absolute upper ramification filtration at a curve point]]

[[lem-positive-geometric-lower-ramification-quotients-are-p-groups|Positive lower ramification quotients are p-groups]]

[[thm-herbrand-quotient-compatibility-for-geometric-local-fields|Herbrand compatibility for quotients of geometric local Galois groups]]

[Richard Crew, *Local Class Field Theory*, Chapter 2 §§2.2.4–2.3.2](https://people.clas.ufl.edu/rcrew/files/LCFT.pdf)

## Facts & Assumptions

**Given:** A geometric local field $K_x=k((t))$ with algebraically closed residue field $k$ of characteristic $p>0$, and its absolute upper filtration.

[F1] In every finite geometric Galois quotient $H$, the first lower ramification group $H_1$ is a finite $p$-group. [[lem-positive-geometric-lower-ramification-quotients-are-p-groups]] [[def-lower-ramification-groups-of-a-geometric-local-extension]]

[F2] For every finite geometric Galois quotient, the upper filtration is quotient-compatible. The finite upper group at $v$ is $H_{\psi(v)}$, where $H_s=H_{\lceil s\rceil}$ for $s>0$ and $\psi$ is the strictly increasing inverse Herbrand function. [[thm-herbrand-quotient-compatibility-for-geometric-local-fields]] [[def-finite-geometric-upper-ramification-numbering]]

[F3] For a uniformizer $\pi$ of a finite extension, every integral element has a unique expansion in powers of $\pi$ with coefficients in $k$, which the Galois group fixes. Its automorphisms preserve the unique extended nonarchimedean absolute value. [[lem-geometric-local-integers-are-power-series-in-a-uniformizer]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F4] The absolute upper groups and $O_p(G_{K_x})$ are the inverse limits specified in the two Definitions. [[def-absolute-upper-ramification-filtration-at-a-curve-point]] [[def-geometric-wild-inertia-subgroup-of-absolute-galois-group]]

## Proof

1.1 Fix a finite Galois extension $L/K_x$ with group $H$ and uniformizer $\pi$ of $L$. Every $\sigma\in H$ fixes $k$ and preserves the valuation. The residue $\theta(\sigma)=\overline{\sigma(\pi)/\pi}$ is a nonzero element of $k$, and $\theta(\sigma\tau)=\theta(\sigma)\theta(\tau)$ since $\sigma$ fixes residues. If $\theta(\sigma)=1$, then $\sigma(\pi)\equiv\pi\pmod{\pi^2}$. By [F3] every integral element is a convergent power series in $\pi$ with fixed coefficients, so this congruence implies $\sigma(a)\equiv a\pmod{\pi^2}$ for every $a\in\mathcal O_L$, hence $\sigma\in H_1$. The reverse inclusion follows by testing $a=\pi$ in [F1]. Thus $H/H_1$ embeds in $k^\times$. Since $z^{p}-1=(z-1)^p$ in characteristic $p$, $k^\times$ has no nontrivial element of order $p$; the finite group $H/H_1$ has order prime to $p$. [F1, F3, given, algebra]

2.1 By [F1], $H_1$ is a $p$-subgroup; it is normal because conjugation transports the defining inequalities on all integral elements and preserves their valuation by [F3]. The prime-to-$p$ quotient in step 1.1 has no nontrivial $p$-subgroup, so every normal $p$-subgroup of $H$ lies in $H_1$. Therefore $O_p(H)=H_1$. For any $0<v\le\varphi_{L/K_x}(1)$, [F2] gives $0<\psi(v)\le1$, and hence $H^v=H_1$; for every $v>0$, $H^v\subseteq H_1$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 For each $v>0$, the projections of the absolute group $G_{K_x}^v$ lie in $H^v\subseteq H_1$ for every finite Galois quotient $H$. By [F4] and step 2.1, the union over $v>0$ and its closure are contained in $O_p(G_{K_x})=\varprojlim H_1$. Conversely, fix a finite quotient $H$ and choose any $v$ with $0<v\le\varphi_{L/K_x}(1)$. The projection $G_{K_x}^v\to H^v$ is onto: [F2] makes the transition maps of the finite upper groups surjective, and compactness of the inverse limit of finite nonempty fibers gives a compatible lift. Thus the image of $\bigcup_{v>0}G_{K_x}^v$ in $H$ contains $H^v=H_1$. The closed group generated by this union has image exactly $H_1$ in every finite quotient. A closed subgroup of a profinite group is determined by its finite quotient images, so it equals $\varprojlim H_1=O_p(G_{K_x})$. The upper groups are nested, so their union is itself a subgroup, and its closure is precisely $G_{K_x}^{0+}$. [F2, F4, step 2.1, given, algebra] ∎
