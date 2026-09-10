---
id: thm-pid-kunneth-exactness-from-cycle-boundary-presentations
kind: theorem
title: "The natural PID Kunneth sequence is exact"
status: draft
origin: pipeline
landmark: true
deps: [def-axiom-of-choice, lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel, lem-the-kunneth-cross-product-map-is-well-defined-and-natural, lem-the-kunneth-tor-map, cor-the-long-exact-homology-sequence-is-natural]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "tom Dieck, Algebraic Topology, Theorem 11.10.1, printed pp.298–299"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/diecktop.pdf
    - title: "Friedman, Singular Intersection Homology, §6.4.5, (6.12)–(6.13), printed pp.316–317"
      url: https://faculty.tcu.edu/gfriedman/ihbook.pdf
---

## Statement

Assume AC. Let $R$ be a commutative PID and $C,D$ nonnegative chain complexes of free $R$-modules of arbitrary rank. Use the direct-sum tensor total complex with $d(c\otimes w)=d_Cc\otimes w+(-1)^p c\otimes d_Dw$ for $c\in C_p$. For every $n\geq0$ there is a short exact sequence, natural in chain maps of both complexes,
$$0\longrightarrow\bigoplus_{p+q=n}H_pC\otimes_RH_qD\xrightarrow{\alpha_n}H_n(C\otimes_RD)\xrightarrow{\beta_n}\bigoplus_{p+q=n-1}\operatorname{Tor}_1^R(H_pC,H_qD)\longrightarrow0.$$
Here $\alpha_n([z]\otimes[w])=[z\otimes w]$, and $\beta_n$ is the established cycle-boundary Tor quotient. All indices in the sums are nonnegative; an empty sum is zero. Naturality concerns this exact sequence, without a choice of section.

## Facts & Assumptions

**Given:** $R,C,D,n$ as in the statement, assuming [[def-axiom-of-choice]].

[F1] The cycle-boundary tensor sequence is exact; its connecting map, kernel, cokernel, and the two induced maps have the explicit descriptions in [[lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel]].

[F2] The cycle tensor formula defines a well-defined natural cross product: [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]].

[F3] The established Tor quotient is induced by the canonical cycle-boundary presentations and is natural: [[lem-the-kunneth-tor-map]].

[F4] A morphism of short exact sequences of complexes induces a morphism of their homology LES: [[cor-the-long-exact-homology-sequence-is-natural]].

## Proof

1.1 Write $u:H_nX\to H_nT$ and $v:H_nT\to H_nY$ for the maps of [F1], with $T=C\otimes D$. Its LES gives $\ker u=\operatorname{im}\partial_{n+1}$, $\ker v=\operatorname{im}u$, and $\operatorname{im}v=\ker\partial_n$. Therefore $\bar u:\operatorname{coker}\partial_{n+1}\to H_nT$, $[x]\mapsto u(x)$, is well defined and injective: $u(x)=0$ exactly when $x\in\operatorname{im}\partial_{n+1}$. [F1]

1.2 Let $f:C\to C'$ and $g:D\to D'$ be chain maps between complexes satisfying the hypotheses. The relation $d_{C'}f=fd_C$ sends cycles to cycles and boundaries to boundaries, and gives $\rho' f=A(f)\rho$, where $A(f)_p$ is $f_{p-1}$ restricted to $B_{p-1}C$. Thus $(Z(f)\otimes g,f\otimes g,A(f)\otimes g)$ is a morphism of the canonical short exact tensor sequences. By [F4] it commutes with $u,v,\partial$, hence with their induced kernel/cokernel maps. [F1, F4, given]

2.1 The corestriction $\bar v:H_nT\to\ker\partial_n$ is onto and has kernel $\operatorname{im}\bar u$. Thus $0\to\operatorname{coker}\partial_{n+1}\xrightarrow{\bar u}H_nT\xrightarrow{\bar v}\ker\partial_n\to0$ is exact. Under the explicit identifications in [F1], $\bar u$ is precisely $\alpha_n$ of [F2], and $\bar v$ is precisely $\beta_n$ of [F3]. This proves all three exactness assertions for the maps in the statement. [step 1.1, F1, F2, F3]

2.2 The cokernel identification commutes with these maps since $z\otimes[w]$ goes to $f(z)\otimes[ g(w)]$ and then to $[f(z)]\otimes[g(w)]$. On a kernel summand, the maps $B_rC\to B_rC'$ and $Z_rC\to Z_rC'$ form a map of the actual length-one resolutions lifting $H_rf$. Tensoring with $H_qg$ induces the Tor map used by the natural quotient [F3]. Hence step 1.2 gives both naturality squares for the displayed sequence. Equivalently the first square follows by evaluating [F2] on $[z]\otimes[w]$. No selected sections enter $\rho$, these resolution maps, or the two final arrows. [step 1.2, F1, F2, F3]

3.1 At $n=0$ the Tor sum is empty, so exactness makes $\alpha_0:H_0C\otimes H_0D\to H_0T$ an isomorphism. At $n=1$ the right term is $\operatorname{Tor}_1(H_0C,H_0D)$. If one complex is zero, $X,T,Y$ and both end terms are zero, so the same proof gives the zero exact sequence. There is no upper endpoint: for each $n$ only finitely many pairs $p+q=n$ occur, regardless of the ranks. [step 2.1, F1] ∎
