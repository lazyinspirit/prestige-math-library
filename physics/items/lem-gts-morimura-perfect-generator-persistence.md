---
id: lem-gts-morimura-perfect-generator-persistence
kind: lemma
title: Perfect generators and endomorphisms under nilpotent Artin reduction
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-axiom-of-choice
dependency_roles:
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Bernhard Keller and Wendy Lowen, On Hochschild Cohomology and Morita Deformations
      url: https://webusers.imj-prg.fr/~bernhard.keller/publ/KellerLowenHochDefo.pdf
      locator: Lemmas 3.9–3.10, PDF pp. 8–9; the source treats dual numbers, while the local proof uses the finite maximal-ideal filtration for general Artin bases.
verification:
  precheck: pass
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $R$ be a finite-dimensional commutative local Artin $k$-algebra with residue field $k$, let $\mathcal A$ be a small $R$-linear dg category, and let $\mathcal A_k=\mathcal A\otimes_R^{\mathbf L}k$. For a right dg module $N$, write $N_k=N\otimes_R^{\mathbf L}k$. Let $P$ be a perfect right $\mathcal A$-module such that $P_k$ generates $\mathrm{Perf}(\mathcal A_k)$ under finite sums, shifts, cones, and retracts. Then the dg endomorphism algebra $B=\mathbf R\operatorname{Hom}_{\mathcal A}(P,P)$ satisfies
$$B\otimes_R^{\mathbf L}k\simeq\mathbf R\operatorname{Hom}_{\mathcal A_k}(P_k,P_k).$$
Moreover $P$ detects zero objects of $D(\mathcal A)$, meaning $\mathbf R\operatorname{Hom}_{\mathcal A}(P,N)=0$ implies $N=0$, and derived tensor with the natural $B$-$\mathcal A$ bimodule $P$ gives an equivalence $D(B)\simeq D(\mathcal A)$. For every commutative $R$-algebra $S$, the analogous endomorphism base-change equivalence holds with $S$ in place of $k$ and is compatible with successive base changes. Also, any dg module $Q$ whose derived reduction $Q_k$ is compact is compact over $\mathcal A$. Here compact means that derived Hom out of the module preserves arbitrary coproducts. This result starts with an existing perfect lift $P$; it does not assert that any prescribed special-fiber object admits such a lift.

## Statement references

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[def-axiom-of-choice]]

[Keller–Lowen, Lemmas 3.9–3.10](https://webusers.imj-prg.fr/~bernhard.keller/publ/KellerLowenHochDefo.pdf)

## Facts & Assumptions

**Given:** $R$, $\mathcal A$, $P$, and the special-fiber generation hypothesis.

[F1] [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] defines derived module categories, perfect modules as the stable closure of representables and retracts, and Morita equivalence through derived module categories.

[A1] [[def-axiom-of-choice]] permits choices of module resolutions; no geometric deformation or Hochschild comparison is assumed.

## Proof

**Given:** the Statement, [F1], and [A1].

1.1 Derived Nakayama holds here for arbitrary, possibly unbounded, complexes: if $V\otimes_R^{\mathbf L}k=0$, then $V=0$ in $D(R)$. Indeed choose $n$ with $\mathfrak m_R^n=0$. Each quotient $\mathfrak m_R^j/\mathfrak m_R^{j+1}$ is a finite-dimensional $k$-vector space, so its derived tensor with $V$ vanishes. The triangles obtained from $0\to\mathfrak m_R^{j+1}\to\mathfrak m_R^j\to\mathfrak m_R^j/\mathfrak m_R^{j+1}\to0$ imply successively $V\otimes_R^{\mathbf L}\mathfrak m_R^j=0$, down to $j=0$. The last tensor is $V$. Applying this objectwise proves the same detection assertion for dg modules. [F1, algebra]

1.2 For every perfect $Q$ and every dg module $N$, the natural map $$\mathbf R\operatorname{Hom}_{\mathcal A}(Q,N)\otimes_R^{\mathbf L}k\longrightarrow\mathbf R\operatorname{Hom}_{\mathcal A_k}(Q_k,N_k)$$ is a quasi-isomorphism. For $Q=h_a$ it is precisely evaluation $N(a)\otimes_R^{\mathbf L}k\simeq N_k(a)$, by the enriched Yoneda identity on cofibrant module resolutions. Both sides are exact contravariant functors of $Q$, so the property passes through finite sums, shifts, cones, and retracts. These operations define perfect modules in [F1], proving the assertion. The same argument shows that $\mathbf R\operatorname{Hom}_{\mathcal A}(Q,-)$ preserves arbitrary coproducts: this is evaluation for representables and passes through the same finite operations and retracts. Taking $Q=N=P$ gives the displayed endomorphism base-change equivalence; its composition compatibility follows from the natural evaluation/composition map, so it is an equivalence of dg algebras in the derived sense. The entire finite-closure argument works with any $R$-algebra $S$ replacing $k$. These maps commute with successive base changes: for representables this is tensor associativity, and the equality extends through the same finite operations and retracts. [F1, A1, algebra]

2.1 Compactness also descends from the derived special fiber without assuming the module already perfect. Let $Q_k$ be compact. For a family $N_i$ of $\mathcal A$-modules consider the coproduct comparison map for $\mathbf R\operatorname{Hom}_{\mathcal A}(Q,-)$. It is an equivalence on families of modules restricted from $\mathcal A_k$, by the derived scalar-extension/restriction adjunction and compactness of $Q_k$. For arbitrary $N_i$, tensor the finite ideal filtration of $R$ in step 1.1 with each $N_i$. Its successive terms are finite sums of $N_i\otimes_R^{\mathbf L}k$, hence restricted $\mathcal A_k$-modules. Derived tensor commutes with coproducts, so the comparison is an equivalence on these terms. The exact triangles of the filtration make it an equivalence on $N_i$ itself. This proves compactness of $Q$. [F1, step 1.1, algebra]

2.2 The functor $G=\mathbf R\operatorname{Hom}_{\mathcal A}(P,-)$ detects zero modules. If $G(N)=0$, step 1.2 gives $\mathbf R\operatorname{Hom}_{\mathcal A_k}(P_k,N_k)=0$. The modules $Q$ with $\mathbf R\operatorname{Hom}(Q,N_k)=0$ are closed under finite sums, shifts, cones, and retracts, so the special-fiber generation hypothesis makes this hold for every representable of $\mathcal A_k$. Evaluation then gives $N_k(a)=0$ for each object $a$. Step 1.1 implies $N(a)=0$ for every $a$, hence $N=0$. [F1, step 1.1, step 1.2]

2.3 Put $F=-\otimes_B^{\mathbf L}P$, left adjoint to $G$. This tensor–Hom adjunction is computed on free dg modules and then on semifree resolutions: a semifree resolution is built by attaching shifted free generators mapping to cycles, then attaching generators killing every cycle in the kernel, and repeating. Its filtered union maps quasi-isomorphically to the original module, because every cohomology class is hit and each kernel cycle is killed at a finite later stage. The same construction with representables resolves modules over a small dg category. Thus these resolutions also show that $D(B)$ is generated from $B$ by coproducts, shifts, cones, and sequential homotopy colimits. The adjunction unit is an equivalence on $B$, since $G(F(B))=G(P)=B$. The class where the unit is an equivalence is closed under those operations: $F$ is a left adjoint, $G$ preserves coproducts by step 1.2, and both are exact; a sequential homotopy colimit is the cone of $1-\mathrm{shift}$ on a coproduct. Hence the unit is an equivalence on all $D(B)$. [F1, A1, step 1.2, construct]

3.1 For $N\in D(\mathcal A)$ apply $G$ to the counit $FG(N)\to N$. The triangular identity and the unit equivalence in step 2.3 show that its image under $G$ is an equivalence. The cone of the counit is therefore killed by $G$, and is zero by step 2.2. Both unit and counit are equivalences, proving $D(B)\simeq D(\mathcal A)$. [F1, step 2.2, step 2.3] ∎
