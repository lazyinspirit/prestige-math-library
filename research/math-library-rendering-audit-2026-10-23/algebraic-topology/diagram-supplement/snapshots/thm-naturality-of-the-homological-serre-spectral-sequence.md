---
id: thm-naturality-of-the-homological-serre-spectral-sequence
kind: theorem
title: Naturality of the homological Serre spectral sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-homological-serre-spectral-sequence, def-serre-filtration-of-the-total-space-over-base-skeleta, prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex, def-r-page-of-the-spectral-sequence-of-a-filtered-complex, thm-singular-chain-homotopy-formula]
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
    - title: "Hatcher, Algebraic Topology, naturality after Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 532–533"
---

## Statement

Consider a strictly commutative square of Serre fibrations
$$
\begin{CD}E @>{u}>> E'\\ @V{p}VV @VV{p'}V\\ B @>{f}>> B'\end{CD}
$$
over path-connected CW complexes, where $f$ is cellular, and fix a commutative
unital ring $R$. The map $u$ induces maps between the homological Serre spectral
sequences which commute with every differential and every next-page
identification. Under the canonical identifications of the preceding theorem,
the map on the second page is
$$f_*:H_a\bigl(B;\mathcal H_b(p;R)\bigr)\longrightarrow H_a\bigl(B';\mathcal H_b(p';R)\bigr),$$
where the coefficient morphism is induced by the strict-fiber maps
$u_x:p^{-1}(x)\to(p')^{-1}(f(x))$.

The induced map $u_*:H_n(E;R)\to H_n(E';R)$ preserves the image filtrations,
and its associated-graded map agrees with the map on the stable pages. These
assignments preserve identities and composition.

If $u_0,u_1:E\to E'$ lie over the same cellular map $f$ and are joined by a
homotopy over $f$, meaning a homotopy $U:E\times I\to E'$ satisfying
$p'U(e,t)=f(p(e))$ for every $(e,t)$, their maps agree on every page $r\geq1$
(hence in particular from $E^2$ onward) and induce the same filtered map on
homology. All assertions are choice-free.

## Facts & Assumptions

**Given:** The displayed square, its cellular base map, and the two Serre spectral sequences with the conventions of the preceding theorem.

[F1] [[thm-homological-serre-spectral-sequence]] constructs the choice-free sequences, their local-coefficient second pages, their stable associated-graded identifications, and their naturality for cellular squares.

[F2] [[def-serre-filtration-of-the-total-space-over-base-skeleta]] gives the chain and target image filtrations. [[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]] gives functorial page maps from a filtered chain map.

[F3] [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] gives the homology map induced by a base map and a forward coefficient morphism.

[F4] [[thm-singular-chain-homotopy-formula]] gives the prism identity. [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]] and [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] give the representative numerator, denominator, and quotient formulas on every page.

## Proof

**Proof technique:** filtered chain maps and a filtration-preserving prism.

1.1 If $e\in E_a=p^{-1}(B^a)$, then $p'u(e)=fp(e)\in f(B^a)\subseteq(B')^a$ because $f$ is cellular. Hence $u(E_a)\subseteq E'_a$, and the singular chain map $u_\#$ preserves every filtration piece. It also induces $u_*(F_aH_n(E;R))\subseteq F_aH_n(E';R)$ by the commutative square formed by the two inclusions of $E_a$ and $E'_a$. [F2]

2.1 Apply [F2] to the filtered chain map of Step 1.1. It gives compatible maps $u_r:E^r_{a,b}(p)\to E^r_{a,b}(p')$ commuting with $d_r$ and with the specified homology-to-next-page isomorphisms. Filtered identity maps and composites induce the identity and composite page maps, so this construction is functorial. [F2, Step 1.1]

2.2 Now let $U$ be a homotopy over the fixed map $f$. If a singular simplex has image in $E_a$, every prism simplex occurring in $P_U$ has image in $(p')^{-1}(f(B^a))\subseteq E'_a$. Thus the prism operator $P=P_U$ preserves filtration and raises chain degree by one. By [F4], $$u_{1\#}-u_{0\#}=\partial P+P\partial.$$ It follows at once on cycles that $u_{0*}=u_{1*}$ on homology; since both maps preserve the filtration, their filtered homology maps agree. [F4, Step 1.1]

3.1 Restriction of the square to the strict fibers over $x$ gives $u_x:p^{-1}(x)\to(p')^{-1}(f(x))$. Naturality of fiber transport makes the induced homology maps a coefficient morphism $\mathcal H_b(p;R)\to f^*\mathcal H_b(p';R)$. The relative-pair, excision, and transport maps used in the cellwise $E^1$ calculation commute with the maps induced by $(u,f)$; this is the naturality clause in [F1]. Taking homology of $d_1$ therefore gives precisely the local-coefficient map of [F3] on $E^2$. [F1, F3, Step 2.1]

3.2 Represent a stable class at $(a,n-a)$ by an actual cycle $z\in F_aC_n(E;R)$. Its page image is represented by $u_\#z$, while its associated-graded image is the class of $u_*[z]$ modulo $F_{a-1}H_n(E';R)$. These are the same representative under the stable identifications in [F1]. Boundaries and lower-filtration cycles map to boundaries and lower-filtration cycles, so the comparison is well defined and proves that the stable map is the associated graded of the filtered homology map from Step 1.1. [F1, Step 1.1, Step 2.1]

3.3 Fix $r\geq1$ and a representative $x\in Z^r_{a,b}$, so $x\in F_aC_n$ and $\partial x\in F_{a-r}C_{n-1}$. The term $P\partial x$ lies in $F_{a-r}C_n\subseteq F_{a-1}C_n$, and $$\partial(P\partial x)=(u_{1\#}-u_{0\#})\partial x\in F_{a-r}C_{n-1};$$ hence $P\partial x\in A^{r-1}_{a-1,n}$, the first boundary summand in [F4]. Also $Px\in F_aC_{n+1}\subseteq F_{a+r-1}C_{n+1}$ and $$\partial Px=(u_{1\#}-u_{0\#})x-P\partial x\in F_aC_n,$$ so $Px\in A^{r-1}_{a+r-1,n+1}$ and $\partial Px$ is in the second boundary summand. The prism identity therefore makes $(u_{1\#}-u_{0\#})x$ zero in $E^r_{a,b}$. Thus the two page maps agree for every $r\geq1$, which is stronger than the promised agreement from $E^2$. [F4, Step 2.2]

4.1 If a base, total space, or strict fiber is empty, the corresponding chains and coefficient stalks are zero; path-connected nonempty bases supply all stated fibers. The zero ring, degree zero, filtration zero, axes, identity and constant maps, constant homotopies, and degenerate simplices obey the same formulas. Step 1.1 checks both filtration endpoints, Step 3.2 checks both stable/associated-graded directions, and Step 3.3 checks both summands in the $r$-boundary denominator, including $r=1$. Every construction is applied to supplied maps, chains, or one prism, so no AC is used. The theorem has no iff assertion. [F1, F2, F3, F4, Step 1.1, Step 2.1, Step 3.1, Step 3.2, Step 2.2, Step 3.3] ∎