---
id: thm-wang-sequence-for-a-fibration-over-the-circle
kind: theorem
title: Wang sequence for a fibration over the circle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-homological-serre-spectral-sequence, lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients, def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence, thm-an-exact-couple-generates-a-spectral-sequence]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Serre spectral sequence over the circle"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "Chapter 5 §1, the local-coefficient E2 calculation of Theorem 5.3"
---

## Statement

Let $p:E\to S^1$ be a Serre fibration, let $F$ be the fiber over the unique
vertex in the standard one-vertex, one-edge CW structure, and let $R$ be a
commutative unital ring. Orient the edge and let
$T_q:H_q(F;R)\to H_q(F;R)$ be transport around its positive loop. There is a
natural long exact Wang sequence
$$
\cdots\longrightarrow H_q(F;R)\xrightarrow{1-T_q}H_q(F;R)\longrightarrow H_q(E;R)\longrightarrow H_{q-1}(F;R)\xrightarrow{1-T_{q-1}}H_{q-1}(F;R)\longrightarrow\cdots. \tag{1}
$$
Reversing the cellular orientation replaces every $1-T_q$ by $T_q-1$ and
gives the isomorphic exact sequence obtained by multiplying the adjacent
maps by $-1$. The construction is natural for maps of fibrations over the
oriented circle that intertwine fiber transport. It uses no choice axiom.

## Facts & Assumptions

**Given:** The fibration, the oriented one-cell CW structure, and the resulting monodromy maps in the statement.

[F1] [[thm-homological-serre-spectral-sequence]] gives the choice-free natural sequence $E^2_{a,b}=H_a(S^1;\mathcal H_b)$ and its two-piece image filtration on total homology.

[F2] [[lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients]] identifies the cellular local-coefficient differential, including incidence sign and covariant transport.

[F3] [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]] identifies the extreme stable terms with the inclusion and quotient edges of the abutment filtration.

[F4] [[thm-an-exact-couple-generates-a-spectral-sequence]] supplies the derived-couple page transitions and their naturality.

## Proof

**Proof technique:** compute the two-term cellular local-coefficient complex and splice the resulting kernel-cokernel extensions.

1.1 Fix $M_q=H_q(F;R)$. The cellular local chain complex of the oriented circle with coefficients in the transport system has one copy of $M_q$ in degrees one and zero. With the convention that the positive edge has initial incidence $+1$ and terminal incidence $-1$, [F2] makes its boundary $1-T_q$. Therefore $$E^2_{0,q}=\operatorname{coker}(1-T_q),\qquad E^2_{1,q}=\ker(1-T_q),$$ and $E^2_{a,q}=0$ for $a\notin\{0,1\}$. Reversing the edge interchanges its endpoint incidences and changes the differential to $T_q-1$. [F1, F2]

2.1 Every Serre differential from page two onward changes the first coordinate by at least two, so the two-column support gives a zero source or target. Hence $E^2=E^\infty$. In total degree $q$, the finite filtration of [F1] and its edges in [F3] give the natural short exact sequence $$0\longrightarrow\operatorname{coker}(1-T_q)\longrightarrow H_q(E;R)\longrightarrow\ker(1-T_{q-1})\longrightarrow0. \qquad\text{(2)}$$ The first map in (2) is the fiber-axis inclusion after quotienting by $1-T_q$; the second is the base-column quotient followed by the inclusion of the kernel. [F1, F3, F4, step 1.1]

3.1 Compose the quotient $M_q\to\operatorname{coker}(1-T_q)$ with the first arrow of (2), and compose the second arrow of (2) with $\ker(1-T_{q-1})\hookrightarrow M_{q-1}$. The kernel and image definitions now give, in order, $$\ker(M_q\to H_q(E))=\operatorname{im}(1-T_q),$$ $$\operatorname{im}(M_q\to H_q(E))=\ker(H_q(E)\to M_{q-1}),$$ and $$\operatorname{im}(H_q(E)\to M_{q-1})=\ker(1-T_{q-1}).$$ Joining these identities for all $q$ proves exactness of (1). [step 2.1]

4.1 A map of fibrations over the oriented circle gives a morphism of local systems, so its fiber map commutes with every $T_q$. Naturality in [F1]–[F4] makes the quotient, kernel, and filtration arrows in (2) commute; therefore it gives a morphism of the long exact sequences. The same proof with the reverse cellular generator gives $T_q-1$, and multiplication by $-1$ identifies the two versions. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1]

5.1 If the fiber or total space is empty, all stalks and groups are zero. The zero ring and the zero module give the zero exact sequence. For $q=0$, the right-hand term $H_{-1}(F;R)$ is zero; negative degrees continue by zeros. If $T_q=1$, the two endomorphisms are zero and (2) is still the asserted kernel-cokernel extension. A one-element or zero homology group causes no exception. Degenerate cellular or singular representatives contribute zero in the normalized page class. Both cell endpoints, both orientation signs, both columns, both ends of (2), and all three exactness positions were checked. Every construction uses finite kernels, cokernels, and induced maps, so no AC is used. There is no iff assertion and no splitting of (2) is claimed. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Source notes

The calculation is the one-dimensional specialization of [Hatcher, Theorem 5.3](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed pp. 526–532: its $E^1$ differential is the cellular boundary with fiber-homology local coefficients. The complete kernel-cokernel splice and orientation sign are carried out above.
