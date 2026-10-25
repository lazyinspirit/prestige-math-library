---
id: ex-double-bar-rotation-sign-in-two-complex-degrees
kind: example
title: "A minus sign when rotating two odd cochain factors"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-derived-cyclicity-of-hochschild-hyperhomology
  - thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - def-axiom-of-choice
  - def-hochschild-chain-complex-of-a-bimodule
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - thm-unit-isomorphisms-for-module-tensor-products
  - lem-hochschild-chains-are-bar-tensor-chains
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.4, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "Equation (3.39): the cyclic twist between the two double-bar resolutions; the sign computed here is the Koszul sign of our convention $D=d_{\\mathrm{complex}}+(-1)^ib$ for this twist."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1–9.1.5: Hochschild chains and the alternating boundary for the ground field."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice (AC). Take $A=B=k=\mathbb Q$ and let $M$ and $N$
each be the one-dimensional $k$-bimodule $k$ placed in cochain degree $1$
only, with zero differential and internal degree $0$; as complexes they are
concentrated in a single cochain degree, so both are bounded with finite
projective (indeed free) terms over the opposite algebra. Then:

1. The signed tensor totalizations are concentrated in cochain degree $2$:
   $\operatorname{Tot}(M\otimes_kN)^1=0$ and
   $\operatorname{Tot}(M\otimes_kN)^2=k\otimes_kk\cong k$, and the differential
   is zero because both input differentials vanish.
2. On the bar-degree-zero summand the cyclic rotation of the derived-cyclicity
   theorem sends the class of $m\otimes n$ to
   $(-1)^{(i-p)(l-q)}n\otimes m$ with $i=l=1$ and $p=q=0$ and hence to
   $(-1)^{1\cdot1}(n\otimes m)=-(n\otimes m)$: a nontrivial minus sign over
   $\mathbb Q$, not a sign that can be absorbed by a change of basis.
3. The termwise cyclicity map of the bounded-complex theorem gives the same
   sign: on the unique coefficient summand it is $(-1)^{il}=(-1)^{1\cdot1}=-1$.
4. Applying the rotation twice gives the identity,
   $(-1)^{il}(-1)^{li}=(-1)^{2il}=1$. The coefficient differentials vanish;
   chain compatibility in higher bar degrees is supplied by the general
   derived-cyclicity theorem.
5. The only nonvanishing Hochschild degree is $j=0$, and the only nonvanishing
   hyperhomology of the tensor product is in total cochain degree $2$:
   the two tensor factors contribute degree $1+1=2$, and the Hochschild
   complex of the ground field has no higher homology.

## Facts & Assumptions

**Given:** AC, the field $k=\mathbb Q$, the algebras $A=B=k$, and the complexes $M=N=k$ concentrated in cochain degree $1$ with zero differential and internal degree $0$.

[F1] Assume AC. For a bounded complex $M$ of graded $(A,B)$-bimodules termwise finite projective as right $B$-modules and a bounded complex $N$ of graded $(B,A)$-bimodules termwise finite projective as right $A$-modules, the ordinary signed tensor totalizations compute $M\otimes_B^{\mathbf L}N$ and $N\otimes_A^{\mathbf L}M$, and the cyclic rotation realizes a natural internal-degree-preserving isomorphism $\mathrm{HH}^{\mathrm{hyper},n}(A,M\otimes_B^{\mathbf L}N)\cong\mathrm{HH}^{\mathrm{hyper},n}(B,N\otimes_A^{\mathbf L}M)$; the rotation of a block carries the Koszul sign $(-1)^{(i-p)(l-q)}$, where $p,q$ are the bar degrees and $i,l$ the cochain degrees of the two blocks ([[thm-derived-cyclicity-of-hochschild-hyperhomology]]).

[F2] Assume AC and the same termwise finite right-projectivity hypotheses. For every Hochschild degree $j$ and cochain degree $r$ the termwise cyclicity isomorphism is induced on the $(i,l)$-summand by the double-bar rotation multiplied by $(-1)^{il}$; the twisted map is a cochain isomorphism before cohomology ([[thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes]]).

[F3] The signed tensor totalization of bounded complexes has $\operatorname{Tot}(M\otimes_kN)^r=\bigoplus_{i+l=r}M^i\otimes_kN^l$ with differential $d(m\otimes n)=d_Mm\otimes n+(-1)^im\otimes d_Nn$; the internal grading is additive and no additional sign is introduced by the internal degree ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[F4] The Hochschild chain complex of a $k$-central bimodule $C$ has $C_j(k,C)=C\otimes_kk^{\otimes_kj}$ with boundary the alternating sum of the faces, and $HH_j(k,C)=H_j$ of this complex; for $C=k$ the faces all act as the identity on the one-dimensional coefficient, so the boundary is multiplication by $\sum_{t=0}^j(-1)^t$, which is $0$ for odd $j$ and $1$ for even $j$, and hence $HH_0(k,k)=k$ and $HH_j(k,k)=0$ for $j\geq1$ ([[def-hochschild-chain-complex-of-a-bimodule]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] The hyperhomology complex of a bounded coefficient complex is $T^n(A,F)=\bigoplus_{i-j=n}C_j(A,F^i)$ with $D=d_F+(-1)^ib$; every total degree is a finite direct sum and the hyperhomology is its cohomology ([[def-hochschild-hyperhomology-of-a-bimodule-complex]]).

[F6] The Hochschild chains of the ground field satisfy $C_j(k,C)\cong C$ with all faces the identity, so the identification of the bar and Hochschild complexes at $A=k$ is the identity on the coefficient ([[lem-hochschild-chains-are-bar-tensor-chains]]).

## Proof

**Proof technique:** direct.

1.1 The complexes $M$ and $N$ are each concentrated in cochain degree $1$ with zero differential, so each is bounded with terms that are free of rank one over $k$; the only nonzero summand of $\operatorname{Tot}(M\otimes_kN)^r$ is at $r=1+1=2$, where it is $k\otimes_kk\cong k$ by [F3], and the differential is zero because both input differentials vanish. Similarly $\operatorname{Tot}(N\otimes_kM)^2\cong k$ with zero differential. The terms are finite projective over the opposite algebra $k^{\mathrm{op}}=k$, so the hypotheses of [F1] and [F2] hold. [F1, F2, F3, given, algebra]

2.1 In the notation of [F1] the first block is $\operatorname{Bar}_0(k)\otimes_kM$ in bar degree $p=0$ and cochain degree $i=1$, and the second block is $\operatorname{Bar}_0(k)\otimes_kN$ in bar degree $q=0$ and cochain degree $l=1$. The rotation formula $(-1)^{(i-p)(l-q)}$ of [F1] therefore reads $(-1)^{(1-0)(1-0)}=(-1)^{1}=-1$ on the unique summand; the termwise map of [F2] reads $(-1)^{il}=(-1)^{1\cdot1}=-1$ on the same summand, so the two formulations of the sign agree. Applying the rotation twice multiplies $(-1)^{il}(-1)^{li}=(-1)^{2}=1$, so the square of the rotation is the identity here. [F1, F2, step 1.1, given, algebra]

3.1 The coefficient differentials vanish. The sign is evaluated on the degree-zero Hochschild class, which is a cycle because $b_0=0$. This does not make the chain-level compatibility checks in higher bar degrees vacuous; those are part of [F1], and this example uses only the induced map on $HH_0$. The only surviving Hochschild degree is $j=0$: by [F4] (equivalently [F6]) the Hochschild complex of the ground field has $HH_0(k,k)=k$ and $HH_j(k,k)=0$ for $j\geq1$, because the alternating boundary is $0$ for odd $j$ and an isomorphism for even $j$. Total degrees are computed by $n=i-j$: with $j=0$ and the tensor factor concentrated in cochain degree $2$, the only nonzero hyperhomology is in total cochain degree $2$. [F1, F4, F5, F6, step 2.1, given, algebra]

4.1 Collecting: the derived cyclicity isomorphism and the termwise cyclicity isomorphism both carry the class of the unique summand by the factor $-1$, so the rotation is a nontrivial automorphism of the one-dimensional vector space in total degree $2$, not merely a sign that could be removed by choosing a different basis; and applying it twice is the identity. This verifies the sign instance of the cyclic comparison and exhibits the necessity of the Koszul sign in the convention $D=d_{\mathrm{complex}}+(-1)^ib$; it does not reprove the general comparison theorem. [F1, F2, step 1.1, step 2.1, step 3.1, given, algebra] ∎
