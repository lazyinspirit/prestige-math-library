---
id: lem-pure-state-excision-and-essential-orbit-density
kind: lemma
title: "Pure-state excision and density of faithful essential vector-state orbits"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - lem-c-star-state-gns-purity-and-polish-state-space
  - lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations
  - lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units
  - lem-c-star-positive-calculus-and-order-estimates
  - thm-minimal-c-star-unitization
  - lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra
  - def-state-on-a-c-star-algebra
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - def-compact-linear-operator
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "AC is explicit; inherited supplier choice and the exact local selections are identified in the Proof. No global selector of irreducible equivalence classes is asserted."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Theorem5.2.1, Lemmas5.2.2 and5.2.5, Proposition5.2.8, printed141–144; complete passages read; excision algebra and the nonunital step are supplied locally."
---

## Statement

Assume AC. For a pure state $\phi$ of a unital C*-algebra $A$ there is a net of positive norm-one contractions $b_t$ with $\phi(b_t)=1$ such that $\|b_t x b_t-\phi(x)b_t^2\|\to0$ for every $x\in A$. The sets $U_{a,\epsilon}=\{\psi\in S(A):\psi(a)>1-\epsilon\}$, where $a\ge0$, $\|a\|=\phi(a)=1$ and $\epsilon>0$, form a weak-star neighborhood basis at $\phi$. If $\pi$ is a faithful irreducible representation with $\pi(A)\cap\mathcal K(H)=\{0\}$, its pure vector states from unit vectors orthogonal to any prescribed finite-dimensional subspace of $H$ are weak-star dense in $P(A)$. For nonunital $A$ the same assertions hold with $a,b_t\in A$, using the unique state extension to the minimal unitization.

## Facts & Assumptions

**Given:** The Statement hypotheses and AC.

[F1] States have cyclic GNS representations, purity is equivalent to irreducibility, and pure states extend uniquely to pure states of the minimal unitization ([[lem-c-star-state-gns-purity-and-polish-state-space]]).

[F2] Bounded density, exact finite self-adjoint vector transitivity with interval clipping, internal-unitary vector transport, and pure-state norm-distance criteria are proved in [[lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations]].

[F3] Every C*-algebra has a positive contractive approximate unit; C*-quotients and the closed image of a star-homomorphism, positivity, continuous calculus, contractivity, and the minimal unitization have their local proofs ([[lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units]], [[lem-quotient-of-a-c-star-algebra-by-a-closed-two-sided-ideal-is-a-c-star-algebra]], [[lem-c-star-positive-calculus-and-order-estimates]], [[thm-minimal-c-star-unitization]]). States obey Cauchy–Schwarz ([[def-state-on-a-c-star-algebra]]).

[F4] Bounded positive operators have spectral projections; a finite-dimensional spectral range makes a supported continuous-calculus operator finite rank, hence compact ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-compact-linear-operator]]).

[A1] AC supplies the supplier assumptions and the chosen finite witnesses and approximate unit ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The Statement hypotheses and Facts.

1.1 Work in $\widetilde A$, with the unique pure extension of $\phi$ if needed, and its irreducible GNS triple $(\pi,H,\xi)$. Put $N=\{z:\pi(z)\xi=0\}$. For $\phi(x)=0$, let $\eta=\pi(x)\xi$, so $\eta\perp\xi$. If $\eta=0$, $x\in N$. Otherwise [F2] realizes a self-adjoint operator $h$ with $\pi(h)\xi=0$, $\pi(h)\eta=\eta$: these prescriptions are compatible with the projection onto $\mathbb C\eta$. Then $x-hx\in N$ and $hx=(x^*h)^*$ with $x^*h\in N$. Conversely Cauchy–Schwarz makes $\phi$ vanish on $N+N^*$. Thus $\ker\phi=N+N^*$, with no closure required. [F1, F2, F3, algebra]

1.2 The norm-closed left ideal $N$ gives a norm-closed $*$-subalgebra $C=N\cap N^*$: if $c,d\in C$, both $cd$ and $(cd)^*$ annihilate $\xi$. Choose a positive contractive approximate unit $e_t$ of $C$ by [F3]. For $z\in N$, the positive element $z^*z$ belongs to $C$, since $\pi(z^*z)\xi=0$; hence $\|z(1-e_t)\|^2=\|(1-e_t)z^*z(1-e_t)\|\to0$. Also $\pi(e_t)\xi=0$. In the unital case take $a_0=1$. In the nonunital case [F2] realizes the eigenvalue1 on $\xi$ by a positive contraction in the image $\pi(A)$; lift a self-adjoint preimage and clip it to $[0,1]$ using [F3] to obtain $a_0\in A$ with $0\le a_0\le1$ and $\pi(a_0)\xi=\xi$. Put $u=a_0^{1/2}$ and $b_t=u(1-e_t)u\in A$. Then $0\le b_t\le1$, $\pi(u)\xi=\xi$, and $\phi(b_t)=1$, so $\|b_t\|=1$. [F2, F3, A1, algebra]

2.1 For $z\in N$, $zu\in N$ since $\pi(u)\xi=\xi$. The estimate of step 1.2 therefore gives $\|zb_t\|\le\|zu(1-e_t)\|\|u\|\to0$. For $x\in\widetilde A$, step 1.1 writes $x-\phi(x)1=c+d^*$ with $c,d\in N$. Consequently $\|b_t(x-\phi(x)1)b_t\|\le\|b_t\|(\|cb_t\|+\|db_t\|)\to0$. This is the required excision for every $x\in A$, including the nonunital construction with $b_t\in A$. [step 1.1, step 1.2, algebra]

3.1 Given finitely many norm-bounded tests $x_j$ and a positive error, choose $b=b_t$ so $\|bx_jb-\phi(x_j)b^2\|$ is small for every test. Put $a=b^2$, so $\|a\|=\phi(a)=1$. For a state $\psi$, extend it to $\widetilde A$ and suppose $\psi(a)>1-\delta$. Since $(1-b)^2\le1-b^2$, Cauchy–Schwarz gives $|\psi(x)-\psi(bxb)|\le2\|x\|\sqrt\delta$. Thus $|\psi(x_j)-\phi(x_j)|\le2\|x_j\|\sqrt\delta+\|bx_jb-\phi(x_j)b^2\|+|\phi(x_j)|\delta$. First making the excision errors small, then $\delta$ small, puts $U_{a,\delta}$ inside the prescribed neighborhood. Every such set is itself a weak-star open neighborhood of $\phi$, proving the basis assertion on all states, not only pure states. [F1, F3, step 2.1, algebra]

4.1 Let $\pi$ be the specified faithful essential irreducible representation. In a nonempty pure-state neighborhood choose a smaller $U_{a,\epsilon}\cap P(A)$ from step 3.1 with $0<\epsilon<1$. Faithfulness gives $\|\pi(a)\|=1$. The spectral range of $\pi(a)$ for $(1-\epsilon,1]$ is infinite dimensional: otherwise the nonzero operator $\pi((a-(1-\epsilon))_+)$ would be finite rank and belong to $\pi(A)$, contradicting essentiality. Choose a unit vector in that range orthogonal to the prescribed finite-dimensional subspace. Its expectation of $a$ is strictly greater than $1-\epsilon$. Its vector state has norm1 by nondegeneracy and an approximate unit, and is pure because every nonzero vector in an irreducible carrier is cyclic. It therefore lies in the chosen neighborhood. [F1, F3, F4, step 3.1, A1, algebra]

5.1 This proves the asserted density and all nonunital cases directly with spectral cutoffs in $A$ itself. Internal-unitary transport in [F2] identifies these vector states with the orbit of any cyclic pure vector state in the same irreducible representation. The stated choices are only the approximate unit and finitely prescribed operators/vectors; no class selector or unproved spectral multiplicity model is used. [F2, step 2.1, step 3.1, step 4.1, A1] ∎
