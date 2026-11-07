---
id: thm-determinant-line-of-perfect-complex-independent-of-representative
kind: theorem
title: Determinant Lines Are Independent of Perfect Representatives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-determinant-line-of-a-perfect-complex
- def-perfect-complex-over-a-ring
- lem-perfect-complexes-form-a-triangulated-subcategory
- lem-bounded-acyclic-projective-complex-is-split-contractible
- thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible
verification:
  precheck: pass
sources:
  references:
  - title: The Stacks Project, Derived Categories of Schemes 101, §39
    url: https://stacks.math.columbia.edu/download/perfect.pdf
  - title: Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups, §3
    url: https://arxiv.org/pdf/0812.1556
proof_strategy: direct
---

## Statement

Let $R$ be a commutative integral domain with fraction field $K$. If bounded cochain complexes of finite projective $R$-modules represent isomorphic objects of $D_{\mathrm{perf}}(R)$, then the determinant lines defined above are isomorphic. If their common perfect object becomes zero over $K$, the acyclicity trivializations also agree under this isomorphism. Thus both the determinant line and its relative determinant ideal depend only on the represented perfect object, not on the chosen bounded projective complex.

## Statement references

[The Stacks Project, *Derived Categories of Schemes 101*, §39](https://stacks.math.columbia.edu/download/perfect.pdf)

[Breuning, §3](https://arxiv.org/pdf/0812.1556)


## Facts & Assumptions

**Given:** A commutative integral domain $R$, its fraction field $K$, and bounded finite-projective representatives $P^\bullet,Q^\bullet$ of isomorphic perfect objects.

[F1] [[def-determinant-line-of-a-perfect-complex]]: the line of a bounded representative is the alternating tensor product of the top exterior powers of its terms; split short exact sequences induce determinant isomorphisms, and an acyclic representative over $K$ is trivialized by cancellation of its cycle lines.

[F2] [[lem-perfect-complexes-form-a-triangulated-subcategory]]: every derived morphism between bounded finite-projective representatives is represented by a chain map, uniquely up to chain homotopy, and its cone is again a bounded finite-projective representative.

[F3] [[lem-bounded-acyclic-projective-complex-is-split-contractible]]: every bounded acyclic complex of projectives is split exact and contractible.

[F4] [[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]]: a chain map is a chain homotopy equivalence exactly when its mapping cone is contractible.




**Given:** Bounded complexes $P,Q$ of finite projective modules over the integral domain $R$, representing isomorphic perfect objects, and $K=\operatorname{Frac}(R)$.

## Proof

**Proof technique:** direct.

1.1 The local perfect-complex model theorem represents a chosen derived isomorphism by a chain map $f:P\to Q$ and its inverse by a chain map in the opposite direction, with the two composites homotopic to the identities. Thus $f$ is a homotopy equivalence. Its cone $E$ is a bounded acyclic complex of finite projectives, so every cycle module of $E$ is finite projective and every cycle sequence splits. The exterior-power isomorphisms of these split sequences give an $R$-linear trivialization $t_E:\det_R(E)\xrightarrow{\sim}R$ by cancellation of the adjacent cycle determinants. It is independent of the splittings: changing a lift adds a cycle vector, and its wedge with a top wedge of the cycle module is zero. This argument may be checked after localization, where all finite projectives involved are free. The localized maps agree with the globally defined exterior-power maps, so the independence holds over $R$. [given, construct, algebra]

1.2 We give the compatibility with acyclicity trivializations, including the necessary sign issue. For a degreewise split exact sequence $0\to U\to V\to W\to0$ of bounded complexes of finite-dimensional $K$-vector spaces, all acyclic, the cycle sequences $0\to Z^i(U)\to Z^i(V)\to Z^i(W)\to0$ are exact: for surjectivity lift a cycle of $W$ to $V$, correct its differential using acyclicity of $U$, and then take the corrected lift. Choose a basis of $Z^i(U)$, lift a basis of $Z^i(W)$ to $Z^i(V)$, and take the concatenation as a basis of $Z^i(V)$. For each complex, lift a basis of $Z^{i+1}$ through its differential to complete a basis in degree $i$. The product of these degree bases computes the determinant trivialization. Comparing it with the product of the $U,W$ bases in each degree only permutes basis blocks. All correction terms are triangular with diagonal $1$ and hence have determinant $1$. The difference between the resulting trivializations is therefore a product of signs $(-1)^{ab}$, one for each interchange of blocks of dimensions $a,b$. In particular it is $+1$ or $-1$, with no other scalar factor. This establishes multiplicativity of acyclic determinant trivializations up to a sign for ungraded determinant lines, directly from exterior products. [construct, algebra]

2.1 The terms of the cone are $E^i=Q^i\oplus P^{i+1}$. Applying the direct-sum exterior-power isomorphism in every degree and pairing dual lines gives an $R$-linear isomorphism $b:\det_R(E)\cong\det_R(Q)\otimes\det_R(P)^{-1}$. The finitely many factors are rearranged in a fixed degree order. Consequently $t_E$ determines an isomorphism $\theta:\det_R(P)\xrightarrow{\sim}\det_R(Q)$. This already proves the first claim. [step 1.1, construct, algebra]

3.1 Suppose now that $K\otimes_RP$ and $K\otimes_RQ$ are acyclic. Apply step 1.2 to the degreewise split cone sequence $0\to Q_K\to E_K\to P_K[1]\to0$. Shifting a complex replaces each determinant factor by its dual and reverses the relevant degree order; the cancellation formula for the shifted cycle sequences therefore identifies its trivialization with the dual of that for the original complex, again up to a product of block permutation signs. Formation of the cycle determinant trivialization $t_E$ commutes with scalar extension to $K$, since the split cycle sequences remain split exact after tensoring. It follows that the two $K$-linear maps $\tau_Q\circ(1\otimes\theta)$ and $\tau_P$ differ by a sign $s\in\{1,-1\}$. Replacing $\theta$ by $s\theta$ makes them equal. This replacement is an $R$-linear isomorphism because both signs are units of $R$. [step 1.1, step 2.1, step 1.2, construct, algebra]

4.1 Such an isomorphism identifies the two determinant lattices inside $K$: $\tau_P(1\otimes\det_R(P))=\tau_Q(1\otimes\det_R(Q))$. Their inverse fractional ideals are therefore equal. Moreover, in this acyclic-generic case the compatible isomorphism is unique: after tensoring with $K$ it must be $\tau_Q^{-1}\tau_P$, and an $R$-linear map between invertible $R$-modules is determined by its scalar extension because those modules are torsion-free. This proves that its construction is independent of the representing chain map, its homotopy, the cone splittings and the chosen derived isomorphism. The determinant line up to isomorphism and the relative determinant ideal consequently depend only on the perfect object. [step 2.1, step 3.1, algebra] ∎
