---
id: prop-serre-transgression-agrees-with-the-relative-connecting-construction
kind: proposition
title: Serre transgression agrees with the relative connecting construction
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-serre-edge-homomorphisms-and-transgression, def-serre-filtration-of-the-total-space-over-base-skeleta, def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, lem-the-filtered-differential-induces-d-r-on-the-r-page, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-relative-homology-connecting-homomorphism-on-cycles, lem-spectral-sequence-subquotient-and-local-lifting-calculus]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Proposition 5.14"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 539–542"
---

## Statement

Let $p:E\to B$ and $R$ satisfy the homological Serre theorem, write
$E_a=p^{-1}(B^a)$, and fix $n\geq2$. Let
$$D_n=E^n_{n,0}\hookrightarrow E^2_{n,0}$$
be the domain of the homological transgression. If $\xi\in D_n$, choose an
$E^n$ representative
$$x\in A^n_{n,n}=C_n(E_n;R)\cap\partial^{-1}C_{n-1}(E_0;R).$$
Then $x$ is a relative cycle for $(E_n,E_0)$, and if
$$\delta:H_n(E_n,E_0;R)\longrightarrow H_{n-1}(E_0;R)$$
is the positive connecting map and
$$q_n:H_{n-1}(E_0;R)=E^1_{0,n-1}\longrightarrow E^n_{0,n-1}$$
is the composite of the vertical-axis page quotients, then
$$\tau_n(\xi)=d_n(\xi)=q_n\delta[x]=q_n[\partial x].$$
The result is independent of the representative $x$ and of its relative class.
Thus a transgressive **base-axis** class is lifted through the relevant filtered
relative group and its boundary gives the fiber-axis transgression, with no
sign beyond the fixed homological differential convention. This is the
homological orientation; the dual cohomological transgression starts with a
fiber-axis class.

When the CW structure has one zero-cell $b$, $E_0=F_b$, so this is the familiar
relative connecting construction for $(E_n,F_b)$. All assertions are
choice-free.

## Facts & Assumptions

**Given:** A transgressive class on the homological base axis and one local representative on its n-page.

[F1] [[def-serre-edge-homomorphisms-and-transgression]] defines the homological transgression as $d_n:E^n_{n,0}\to E^n_{0,n-1}$ and fixes its sign and restricted domain.

[F2] [[def-serre-filtration-of-the-total-space-over-base-skeleta]] identifies $F_aC_*(E;R)$ with $C_*(E_a;R)$. [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]] and [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] give the representative formulas for $A^n$, $B^n$, and $E^n$, while [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] states that the page differential sends a local representative $[x]$ to $[\partial x]$.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the pair connector, and [[def-relative-homology-connecting-homomorphism-on-cycles]] fixes its positive formula $\delta[x]=[\partial x]$.

[F4] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] supplies natural quotient descent and the nested-quotient identifications used by the vertical-axis maps.

## Proof

**Proof technique:** compare the two boundary formulas on one filtered representative.

1.1 Since $x\in A^n_{n,n}$, [F2] gives $x\in C_n(E_n;R)$ and $\partial x\in C_{n-1}(E_0;R)$. Thus $x$ determines $[x]\in H_n(E_n,E_0;R)$, and [F3] gives $\delta[x]=[\partial x]$ with positive sign. [F2, F3]

2.1 On the vertical axis no differential leaves $(0,n-1)$. Its transitions from $E^1$ through $E^n$ are therefore quotient maps by successive incoming images, and [F4] gives their canonical composite $q_n$. The page-differential theorem in [F2] sends the representative $[x]$ to the class of the same chain boundary $\partial x$ and then takes precisely this target quotient. Therefore $d_n(\xi)=q_n[\partial x]=q_n\delta[x]$, with the sign fixed simultaneously by [F1] and [F3]. [F1, F2, F3, F4, Step 1.1]

3.1 Suppose $x'$ is another $E^n$ representative of $\xi$. Since these are quotient modules, [F2] gives $$x'-x=a+\partial y$$ with $a\in A^{n-1}_{n-1,n}$ and $y\in A^{n-1}_{2n-1,n+1}$. Hence $\partial x'-\partial x=\partial a$. In the target position $(0,n-1)$, this lies in the second denominator summand $$\partial A^{n-1}_{n-1,n}\subseteq B^n_{0,n-1},$$ so quotient descent in [F4] gives $q_n[\partial x']=q_n[\partial x]$. If the relative cycle representative is changed by a chain in $E_0$ or an ordinary boundary, its pair connector changes by a boundary in $E_0$ or by zero. Thus both the page and relative ambiguities disappear in the displayed target quotient. [F2, F3, F4, Step 2.1]

4.1 For $n=2$, $q_2$ is the single passage from $E^1$ to $E^2$, and there are no earlier transgression-domain conditions. If $E_0$, the source, the target, or $R$ is zero, every displayed class is zero. A zero base-axis class in $D_n$, one relative representative, a constant or degenerate simplex, and a relative boundary obey the same formula. Both source and target endpoints, both representative ambiguities, and the positive sign are checked in Steps 1.1–3.1. Classes killed by an earlier differential are outside $D_n$, so the formula makes no claim about them. The proof uses one supplied representative and canonical quotient maps, so no AC is used. The proposition has no iff assertion. [F1, F2, F3, F4, Step 1.1, Step 2.1, Step 3.1] ∎
