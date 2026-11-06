---
id: lem-gts-stable-pair-fixed-determinant-infinitesimal-deformations
kind: lemma
title: Stable-pair deformations and fixed-determinant complex deformations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds
  - def-perfect-complex-over-a-ring
  - thm-auslander-buchsbaum-formula
  - cor-flat-local-depth-additivity
  - thm-depth-lemma
  - lem-free-fibre-flat-module-free-noetherian-target
  - lem-finite-prime-avoidance
  - lem-positive-powers-of-a-regular-sequence-remain-regular
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - thm-serre-criterion-ampleness
  - lem-fibrewise-exact-flat-complex-lifts-noetherian-target
  - def-axiom-of-choice
dependency_roles:
  def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds: mathematical-premise
  def-perfect-complex-over-a-ring: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  cor-flat-local-depth-additivity: mathematical-premise
  thm-depth-lemma: mathematical-premise
  lem-free-fibre-flat-module-free-noetherian-target: mathematical-premise
  lem-finite-prime-avoidance: mathematical-premise
  lem-positive-powers-of-a-regular-sequence-remain-regular: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  lem-fibrewise-exact-flat-complex-lifts-noetherian-target: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "R. Pandharipande and R. P. Thomas, Curve Counting via Stable Pairs in the Derived Category"
      url: "https://arxiv.org/pdf/0707.2348v5"
      locator: "Section 2.2, Lemma 2.1, Lemma 2.5 and Theorem 2.7. The proof below replaces the rank-one reflexive-extension citation by a two-term dual Hartogs calculation."
dependency_level: 1
---

## Statement

Assume AC. Let $X$ be a nonsingular projective threefold over $\mathbb C$, let $B$ be a Noetherian affine scheme, and let $B_0\hookrightarrow B$ be defined by a nilpotent ideal. Let $\mathcal O_{X\times B_0}\to F_0$ be a stable-pair family with $F_0$ flat over $B_0$, and write $I_0=[\mathcal O\to F_0]$ in degrees $0,1$. Then sending a flat stable-pair deformation to its complex identifies its deformation groupoid with the groupoid of perfect deformations $I$ of $I_0$ equipped with a compatible identification $\det I\cong\mathcal O_{X\times B}$. The equivalence and the recovered pair commute with restriction of the base and with nilpotent base change. No Atiyah-class compatibility or perfect-obstruction-theory assertion is included in this lemma.

## Facts & Assumptions

**Given:** $X,B,B_0,F_0,I_0$ as in the Statement and a perfect deformation $I$ with its compatible determinant identification.

[F1] [[def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds]] fixes the family and degree conventions. A perfect complex is locally represented by a bounded finite-free complex. [[def-perfect-complex-over-a-ring]]

[F2] Auslander–Buchsbaum on the regular threefold fibres, flat-local depth additivity, and the depth lemma apply to the Noetherian local rings in this argument. A finite module flat over its base and free on its local fibre is free on the total local ring. [[thm-auslander-buchsbaum-formula]] [[cor-flat-local-depth-additivity]] [[thm-depth-lemma]] [[lem-free-fibre-flat-module-free-noetherian-target]] [[thm-auslander-buchsbaum-serre-regularity-criterion]] [[lem-fibrewise-exact-flat-complex-lifts-noetherian-target]] [[thm-serre-criterion-ampleness]]

[F3] Finite prime avoidance chooses regular elements outside finite sets of associated primes, and positive powers of a regular sequence remain regular. These are the only regular-sequence tools in the Hartogs calculation. [[lem-finite-prime-avoidance]] [[lem-positive-powers-of-a-regular-sequence-remain-regular]] The inherited choice assumption is [[def-axiom-of-choice]].

## Proof

1.1 We record an explicit Hartogs calculation for coherent modules. Let $A$ be Noetherian, $Z=V(J)$, $U=\operatorname{Spec}A\setminus Z$, and let a finite module $M$ have depth at least two at every prime of $Z$. Finite prime avoidance chooses $a\in J$ regular on $M$, then $b\in J$ regular both on $M$ and on $M/aM$. Indeed an associated prime containing $J$ would lie in $Z$ with depth zero; after quotienting by $a$ it would contradict the depth-at-least-two hypothesis and the depth lemma. Powers remain regular. The denominator calculation $M_a\cap M_b=M$ inside $M_{ab}$ follows because $b^q m\in a^pM$ implies $m\in a^pM$, using regularity of $b^q$ on $M/a^pM$. Thus every section on $D(a)\cup D(b)$ extends uniquely to $M$. A section on $U$ restricts there and extends to $M$; their difference is zero on $D(a)$ and hence zero, since on each affine distinguished open in $U$ it is killed by a power of the regular element $a$. This proves $\widetilde M\cong j_*(\widetilde M|_U)$, with $j:U\hookrightarrow\operatorname{Spec}A$. The calculation is local and therefore applies to coherent sheaves on the total space. [F3, given, algebra]

2.1 The fibre sheaf $F_0$ has local projective dimension at most two relative to the smooth threefold. At a closed support point its depth is at least one by purity; at a generic curve point the local ring has dimension two, so the same bound follows there as well. Auslander–Buchsbaum gives the bound at every fibre point. In a finite local free resolution of $F_0$, its second syzygy is base-flat because $F_0$ and the preceding free terms are; the fibre bound makes that syzygy fibrewise free. The flat/fibre-free criterion makes it locally free on $X\times B_0$. Thus $I_0$ has Tor amplitude $[-1,1]$. A global bounded vector-bundle model of $I$ exists on this projective scheme over the Noetherian affine base: the ample twisting criterion gives finite sums of negative ample powers surjecting onto coherent kernels; iterating gives a bounded-above vector-bundle resolution, and the uniform local Tor bound for the perfect complex makes a sufficiently low syzygy locally free, so it truncates to a bounded model. This model can be trimmed globally to degrees $[-1,1]$ by taking vector-bundle kernels at its upper end and vector-bundle cokernels at its lower end: outside those degrees its residue-field complex is exact, and a unit minor gives a locally split surjection or injection; the corresponding bundle kernel or cokernel gives a global derived-equivalent truncation. Repeat finitely. Write the resulting global model as $[E^{-1}\to E^0\to E^1]$. Its left map is injective. To see this, filter by powers of the nilpotent base ideal; each graded piece is a base module on $B_0$, and $I_0=[\mathcal O\to F_0]$ has no negative cohomology after tensoring with any such module, since its two displayed terms are base-flat. The same finite filtration then gives $H^{-1}(I)=0$. [F1, F2, step 1.1, algebra]

3.1 Put $Q=H^1(I)=\operatorname{coker}(E^0\to E^1)$. Its support has relative dimension zero, because its reduction has support $\operatorname{coker}(\mathcal O\to F_0)$ and the base thickening has the same points. Let $Z$ be the support of $F_0$, regarded as a closed subset of $X\times B$; it has fibrewise codimension at least two and contains the support of $Q$. At primes of $Z$, the smooth relative local fibre has dimension at least two, so flat-local depth additivity gives depth of the total local ring at least two. At primes of $\operatorname{Supp}Q$, it gives depth at least three. In particular $\mathcal Hom(Q,\mathcal O)=0$: a nonzero image would give a submodule of $\mathcal O$ supported where its local depth is positive, contradicting the associated-prime description of zero divisors. Therefore the dual map $(E^1)^\vee\to(E^0)^\vee$ is injective. Its cokernel $C$ has a length-one locally free resolution; outside $\operatorname{Supp}Q$ it is locally free because $E^0\to E^1$ is split surjective. At primes of $Z$ outside that support it consequently has depth at least two; on that support the depth lemma gives depth at least $3-1=2$. Hence both $C$ and $(E^{-1})^\vee$ satisfy step 1.1 along $Z$. [F2, step 2.1, algebra]

4.1 The derived dual of $I$ is thus represented by the nonnegative two-term complex $[C\to(E^{-1})^\vee]$ in degrees $0,1$. Its global degree-zero hypercohomology is the kernel of the map on the two global section modules; no negative complex term can contribute. Applying step 1.1 to both terms identifies this kernel with the same kernel on $U=(X\times B)\setminus Z$. Therefore restriction gives an isomorphism $\operatorname{Hom}(I,\mathcal O)\cong\operatorname{Hom}(I|_U,\mathcal O_U)$. It also shows $\operatorname{Ext}^{-1}(I,\mathcal O)=0$. On $U$, the reduction of $I$ is $\mathcal O$ in degree zero; the finite-free residue-field cancellation criterion makes $I|_U$ an actual line bundle. Its canonical rank-one identification with its determinant and the supplied determinant trivialization give a map $I|_U\cong\mathcal O_U$. The restriction isomorphism extends it uniquely to $u:I\to\mathcal O$. This construction is intrinsic, so the local dual models used to prove the restriction isomorphism cause no choice in $u$. [F1, step 1.1, step 3.1, algebra]

5.1 After derived restriction to $B_0$, the map $u$ agrees on $U_0$ with the canonical map $I_0\to\mathcal O$; step 4.1 applied over $B_0$ proves equality everywhere. Its cone $F=\operatorname{Cone}(u)$ therefore restricts derivedly to $F_0$. We verify that it is a base-flat sheaf, rather than assuming it. For any module $N$ over the affine base ring, filter $N$ by the finitely many powers of the nilpotent ideal. Each quotient $N_j$ is a $B_0$-module, and derived tensor associativity identifies $F\otimes_B^{\mathbf L}N_j$ with $F_0\otimes_{B_0}N_j$, concentrated in degree zero because $F_0$ is flat. Exact triangles for the finite filtration show the same concentration for every $N$. Taking $N=\mathcal O_B$ makes $F$ a sheaf; taking arbitrary $N$ gives the vanishing of all positive Tor and hence its flatness over $B$. It is coherent since it is the cohomology of a perfect complex on a Noetherian scheme. The triangle $I\to\mathcal O\to F$ supplies its section. Its geometric fibres are exactly those of the given pair family, so purity and the zero-dimensional cokernel hold. Thus it is a stable-pair deformation and its complex is $I$. [F1, step 4.1, algebra]

6.1 Conversely a flat stable-pair family produces a perfect $I=[\mathcal O\to F]$ by the resolution argument of step 2.1. On the complement of its fibrewise codimension-two support its determinant is canonically trivial. The total space has depth at least two along that support; step 1.1 applies to this determinant line and its inverse. The trivialization and its inverse therefore extend, and their products are the identity by uniqueness. This supplies the canonical determinant trivialization globally. Applying steps 4.1–5.1 recovers its original map to $\mathcal O$ and its original pair. [F1, F2, step 1.1, step 2.1, step 5.1, algebra]

7.1 An isomorphism of perfect deformations preserving the specified determinant commutes with their canonical maps to $\mathcal O$: it does so on $U$, and step 4.1 gives uniqueness globally. It induces the isomorphism of the recovered pairs. There is no hidden ambiguity in this cone map. For a flat pure one-dimensional family $F'$ and a sheaf $Q$ supported in relative dimension zero, $\mathcal Hom(Q,F')=0$, as follows. At each point of that relative zero-dimensional support, its annihilator ideal is fibrewise primary to the closed-point maximal ideal. Purity makes the fibre of $F'$ have positive depth there; prime avoidance chooses an element of that annihilator regular on the fibre. Lift it to the total ring. Applying the pinned fibrewise-exact-flat-complex lemma to multiplication by this element on the base-flat finite module $F'$ makes that multiplication injective on $F'$. Any homomorphism from $Q$ into $F'$ is annihilated by this element and therefore zero. The truncation triangle $H^0(I)\to I\to Q[-1]$ then gives $\operatorname{Ext}^{-1}(I,F')=\operatorname{Hom}(Q,F')=0$; these groups also vanish globally. This kills the ambiguity in extending the morphism of the two triangles. Conversely an isomorphism of pairs gives the determinant-preserving isomorphism of their fibres $I$; the fibre construction has no ambiguity because $\operatorname{Ext}^{-1}(\mathcal O,F')=0$. These inverse constructions identify the two deformation groupoids. They agree under base restriction or nilpotent base change: the map is characterized on $U$ by the determinant and is unique globally, and step 5.1 gives the derived restriction of its cone. This proves the stated equivalence without an additional rank-one reflexive-extension input. [F1, F2, step 4.1, step 5.1, step 6.1, algebra] ∎
