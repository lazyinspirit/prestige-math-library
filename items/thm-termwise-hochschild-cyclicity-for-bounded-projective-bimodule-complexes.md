---
id: thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes
kind: theorem
title: "Termwise Hochschild cyclicity for bounded projective bimodule complexes"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-termwise-hochschild-homology-complex-and-iterated-homology
  - lem-double-bar-comparison-for-cyclic-bimodule-tensor-products
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - def-axiom-of-choice
  - thm-a-chain-map-induces-a-well-defined-map-on-homology
  - thm-chain-homotopic-maps-induce-the-same-map-on-homology
  - def-hochschild-chain-complex-of-a-bimodule
  - def-cohomology-object-of-a-cochain-complex
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.4, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "Equations (3.37)–(3.39): the cyclic twist between the two double-bar resolutions and its naturality in the coefficient bimodules."
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, printed pp.5–7"
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "pp.6–7: termwise Hochschild homology of a complex of graded bimodules and its three gradings."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1–9.1.5: $HH_j$ as an additive functor of the coefficient bimodule."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, let $A$ and $B$ be unital
associative $k$-algebras, let $M$ be a bounded cochain complex of graded
$(A,B)$-bimodules with termwise finite projective right $B$-terms, and let $N$
be a bounded cochain complex of graded $(B,A)$-bimodules with termwise finite
projective right $A$-terms; all differentials have internal degree zero
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).
Then for every Hochschild degree $j\geq0$, every cochain degree $r$ and every
internal degree there is a natural isomorphism
$$H^r\bigl(HH_j(A,\operatorname{Tot}(M\otimes_BN))\bigr)\;\cong\;H^r\bigl(HH_j(B,\operatorname{Tot}(N\otimes_AM))\bigr),$$
where the termwise Hochschild complexes are those of
[[def-termwise-hochschild-homology-complex-and-iterated-homology]].
The isomorphism is induced, termwise over the pairs $(M^i,N^l)$, by the
double-bar rotation of
[[lem-double-bar-comparison-for-cyclic-bimodule-tensor-products]], multiplied on
the $(i,l)$-summand by the Koszul sign $(-1)^{il}$; the twisted map is a cochain
isomorphism before cohomology is taken, and the reverse rotation gives its
inverse. This is an iterated-homology statement in its own right and is not
inferred from an abutment of any hyperhomology spectral sequence.

## Facts & Assumptions

**Given:** AC, a field $k$, unital associative $k$-algebras $A$ and $B$, a bounded cochain complex $M$ of graded $(A,B)$-bimodules with termwise finite projective right $B$-terms, and a bounded cochain complex $N$ of graded $(B,A)$-bimodules with termwise finite projective right $A$-terms, all differentials of internal degree zero.

[F1] For each $j\geq0$ the termwise Hochschild complex $HH_j(A,-)$ is obtained by applying the Hochschild complex functor $C_\bullet(A,-)$ degreewise to the coefficient complex and passing to homology; a bimodule map $u$ induces a chain map $C_\bullet(A,u)$ commuting with every Hochschild face, and the induced maps on homology assemble into the cochain differential of the termwise complex, whose cohomology is $H^i(HH_j(A,F^\bullet))$ ([[def-hochschild-chain-complex-of-a-bimodule]], [[def-termwise-hochschild-homology-complex-and-iterated-homology]]).

[F2] Assume AC. For a fixed $(A,B)$-bimodule $M'$ finite projective as a right $B$-module and a fixed $(B,A)$-bimodule $N'$ finite projective as a right $A$-module, there is a natural zigzag of chain-homotopy equivalences $C_\bullet(A,M'\otimes_BN')\simeq C_\bullet(B,N'\otimes_AM')$; it is realized through the double-bar resolutions and their cyclic rotation, and it is natural and involutive up to homotopy ([[lem-double-bar-comparison-for-cyclic-bimodule-tensor-products]]).

[F3] The signed tensor totalization has $\operatorname{Tot}(M\otimes_BN)^r=\bigoplus_{i+l=r}M^i\otimes_BN^l$ with differential $d(m\otimes n)=d_Mm\otimes n+(-1)^im\otimes d_Nn$ on the summand of cochain degree $i$; each total degree is a finite direct sum because $M$ and $N$ are bounded, and the differentials and the Koszul signs are as in [[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]].

[F4] Tensoring with a bimodule complex is additive and preserves chain maps, composition and chain homotopies: on a summand of cochain degree $i$ the second-factor homotopy enters with sign $(-1)^i$ and the first-factor homotopy enters with no extra sign ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[F5] A chain map induces the unique map on homology represented by its restriction to cycles followed by the homology quotient; the uniqueness clause makes this assignment preserve identities and compositions, and the cycle-quotient description preserves sums of chain maps ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[F6] Since $C_j(A,M)=M\otimes_kA^{\otimes_kj}$ is built from the tensor product, which is linear in its coefficient variable, the Hochschild complex functor $C_\bullet(A,-)$ is additive: a finite direct sum of coefficient bimodules satisfies $C_j(A,F\oplus G)\cong C_j(A,F)\oplus C_j(A,G)$ naturally, and $C_j(A,u+v)=C_j(A,u)+C_j(A,v)$. Thus the induced maps on homology are additive by [F5]. For a finite direct sum of coefficient complexes, the termwise complexes and their cohomology are the direct sums of the summands; kernels and images in the definition of cohomology commute with finite direct sums ([[def-hochschild-chain-complex-of-a-bimodule]], [[def-cohomology-object-of-a-cochain-complex]]).

[F7] Chain-homotopic maps induce the same map on homology; applying this in each Hochschild degree gives invariance of $HH_j$ under the chain-homotopy equivalences in [F2] ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Fix cochain degrees $(i,l)$. By the termwise right-projectivity hypotheses and [F2], the double-bar comparison gives a zigzag of chain-homotopy equivalences between the Hochschild complexes with coefficients $M^i\otimes_BN^l$ and $N^l\otimes_AM^i$. By [F7], this induces an isomorphism $\rho_{i,l}:HH_j(A,M^i\otimes_BN^l)\to HH_j(B,N^l\otimes_AM^i)$ for each $j$, natural with respect to bimodule maps and inverted by the reverse rotation. [F2, F5, F7, given, algebra]

2.1 On the $(i,l)$ summand define $F_{i,l}=(-1)^{il}\rho_{i,l}$. The source tensor differential has components $\delta_M=d_M\otimes1$ and $\delta_N=(-1)^i(1\otimes d_N)$; the target has components $d_N$ and $(-1)^l d_M$. Naturality of $\rho$ gives $\rho_{i+1,l}\delta_M=d_M\rho_{i,l}$ and $\rho_{i,l+1}(1\otimes d_N)=d_N\rho_{i,l}$. Therefore $F_{i+1,l}\delta_M=(-1)^{(i+1)l}d_M\rho_{i,l}=(-1)^l d_MF_{i,l}$, matching the target $M$-component, and $F_{i,l+1}\delta_N=(-1)^{i(l+1)}(-1)^i d_N\rho_{i,l}=(-1)^{il}d_N\rho_{i,l}=d_NF_{i,l}$, matching the target $N$-component. Thus the twist is a cochain map with both signs explicitly checked. [F3, F4, step 1.1, given, algebra]

3.1 For fixed $j$, the finite direct-sum decomposition of each total degree in [F3] lets the maps $F_{i,l}$ assemble into a cochain isomorphism $HH_j(A,\operatorname{Tot}(M\otimes_BN))\to HH_j(B,\operatorname{Tot}(N\otimes_AM))$. The additivity and finite-direct-sum cohomology property [F6] ensure that applying $HH_j$ to each finite diagonal and taking its cohomology gives the asserted assembled map. Each reverse component is $F_{i,l}^{-1}$, because $\rho_{i,l}^{-1}$ is the reverse rotation and $(-1)^{il}$ is its own inverse. The complexes are bounded, so every cochain-degree diagonal is finite. [F2, F3, F4, F6, step 1.1, step 2.1, given, algebra]

4.1 Taking cohomology of the cochain isomorphism in 3.1 gives the natural isomorphism $H^r(HH_j(A,\operatorname{Tot}(M\otimes_BN)))\cong H^r(HH_j(B,\operatorname{Tot}(N\otimes_AM)))$ for every $j,r$ and internal degree. Every map preserves internal degree, and the proof is termwise before cohomology, independent of any hyperhomology spectral-sequence abutment. [F1, F5, step 3.1, given, algebra] ∎
