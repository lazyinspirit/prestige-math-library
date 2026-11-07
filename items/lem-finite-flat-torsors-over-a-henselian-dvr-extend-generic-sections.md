---
id: lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections
kind: lemma
title: "Generic sections of finite-flat torsors extend over a Henselian DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-discrete-valuation-ring
  - def-henselian-pair-and-henselian-local-ring
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-fppf-topology-on-schemes
  - lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
  - lem-affine-representable-fppf-family-descent
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-finite-dimensional-commutative-algebras-decompose-into-local-factors
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-cayley-hamilton
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-valuation-ring-is-integrally-closed
justified_by: []
proof_strategy: direct
axiom_use: "None. All choices are finite or single witnesses. A Henselian finite-algebra decomposition collapses the supplied fppf refinement to one finite free cover; no arbitrary affine subcover or generic-choice representability theorem is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III Lemma1.1, degree-zero and degree-one restriction assertions. The finite-algebra proof here treats torsor sections directly, without the later local duality or completion comparison."
    - title: "The Stacks Project, Descent and More on Algebra"
      url: "https://stacks.math.columbia.edu/download/descent.pdf"
      locator: "Faithfully flat affine algebra descent and finite locally free torsors; the required family refinement, finite Hensel decomposition and normality argument are explicit below."
verification: {}
---

## Statement

Let $R$ be a Henselian discrete valuation ring, let $K=\operatorname{Frac}(R)$,
and let $G$ be a commutative finite flat $R$-group scheme. A right fppf
$G$-torsor here means a sheaf of sets $P$ on the fppf site over $R$, locally
nonempty for that topology, with an action for which
$P\times G\to P\times P$, $(p,g)\mapsto(p,pg)$, is an isomorphism.
Then every such $P$ is represented by a finite locally free $R$-scheme, and
restriction is a bijection
$$P(R)\xrightarrow{\sim}P(K).$$
Restriction on the groupoids of $G$-torsors is fully faithful; in particular it
is injective on their isomorphism classes. Also $G(R)\to G(K)$ is a bijection
of finite groups. No completeness, residue-field finiteness, characteristic
restriction, or choice axiom is required.

## Statement references

[J. S. Milne, *Arithmetic Duality Theorems*, III Lemma1.1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The Henselian DVR, its fraction field, the finite flat group and its sheaf torsor in the Statement. Over this DVR, finite flat coefficients use the finite locally free convention of the Definition.

[F1] A DVR is a valuation ring for a discrete valuation and is a local principal ideal domain. It is integrally closed in its fraction field. [[def-discrete-valuation-ring]] [[thm-valuation-ring-is-integrally-closed]]

[F2] In a Henselian local ring, coprime monic residue factorizations lift to monic factorizations over the ring. [[def-henselian-pair-and-henselian-local-ring]]

[F3] Finite flat commutative group schemes are finite locally free group objects; the fppf topology uses jointly surjective flat locally finitely presented families. [[def-finite-flat-group-scheme-and-cartier-dual]] [[def-fppf-topology-on-schemes]]

[F4] Every fppf family has a refinement consisting of a Zariski cover, a surjective finite locally free cover on each member, another Zariski cover, and another surjective finite locally free cover at each leaf. The construction requires no point-indexed choice function. [[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]]

[F5] Affine representable functors satisfy unique descent for arbitrary fppf families, including nonaffine tests. Faithfully flat descent of modules and commutative algebras is effective, with the invariant equalizer giving the descended object. [[lem-affine-representable-fppf-family-descent]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F6] A finite-dimensional commutative algebra over a field decomposes into finitely many local factors. A finitely generated torsion-free module over a PID is finite free. [[lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F7] Cayley-Hamilton holds for a finite-dimensional endomorphism over a field. Over a commutative ring the adjugate identity makes a square matrix with unit determinant invertible. [[thm-cayley-hamilton]] [[thm-adjugate-identity-over-a-commutative-ring]]

## Proof

**Proof technique:** finite Hensel idempotents, one finite free trivializing cover, affine descent and integrality.

**Given:** The data above; let $\mathfrak m$ be the maximal ideal and $k=R/\mathfrak m$.

1.1 The DVR is a PID directly from its valuation: a nonzero ideal has a least occurring nonnegative valuation, and an element attaining it generates that ideal, since every quotient by it has nonnegative valuation. Any open neighborhood of the closed point of $\operatorname{Spec}R$ is the whole spectrum: it contains a basic open $D(f)$ with $f\notin\mathfrak m$, and such $f$ is a unit. In particular a finite locally free module over this local base is free of finite rank, by taking a trivializing open containing the closed point. A nonzero finite free $R$-algebra of positive rank is faithfully flat: tensoring any module gives a positive finite direct sum of that module. These observations require only one chosen local chart, not a family of choices. [F1, F3, given, construct, algebra]

2.1 Let $B$ be any finite free commutative $R$-algebra. Every idempotent $\bar e\in B/\mathfrak mB$ lifts uniquely to an idempotent of $B$. For existence choose one lift $b\in B$. Multiplication by $\bar b=\bar e$ is idempotent on the finite-dimensional $k$-space $B/\mathfrak mB$, so its characteristic polynomial is $T^a(T-1)^c$. The cases $\bar e=0,1$ have the obvious lifts; otherwise $a,c>0$. Apply [F2] to the monic characteristic polynomial of multiplication by $b$, giving factors $f_0,f_1$ reducing to $T^a,(T-1)^c$. They are comaximal in $R[T]$: the finite coefficient map $(u,v)\mapsto u f_0+v f_1$, with $\deg u<c$ and $\deg v<a$, is invertible modulo $\mathfrak m$, hence has unit determinant and is invertible by [F7]. Choose $u f_0+v f_1=1$. Cayley-Hamilton over $K$, followed by injectivity $B\hookrightarrow B\otimes_RK$, gives $f_0(b)f_1(b)=0$. Thus $e=u(b)f_0(b)$ satisfies $e(1-e)=0$ and reduces to $\bar e$, since the reduced polynomial is zero at0 and one at1. [F2, F7, step 1.1, choose, construct, algebra]

3.1 For $x\in\mathfrak mB$, multiplication by $1-x$ on $B$ has matrix congruent to the identity, so it is invertible by [F7] and $1-x$ is a unit. An idempotent in $\mathfrak mB$ is therefore zero. Two idempotent lifts $e,e'$ of the same residue satisfy that $e(1-e')$ and $e'(1-e)$ are idempotents in $\mathfrak mB$; hence both vanish and $e=e'$. Decompose $B/\mathfrak mB$ into local factors by [F6], and lift its coordinate idempotents by step 2.1. Their products are zero and their sum is one by uniqueness, giving $B=\prod_iB_i$. Each $B_i$ is a finite generated torsion-free $R$-module, so is finite free by [F6]. It is local: an element invertible modulo $\mathfrak mB_i$ is invertible in $B_i$, by lifting its inverse and using the preceding $1-x$ argument; thus the inverse image of the unique maximal ideal of the residue factor is exactly its nonunit ideal. Each nonzero factor has positive free rank and is faithfully flat over $R$ by step 1.1. [F6, F7, step 1.1, step 2.1, construct, algebra]

4.1 Choose an fppf family on which $P$ has sections. To avoid simultaneous choices of those sections, replace its index set by all pairs consisting of a covering member and one of its sections; this is still a covering family. Apply [F4]. One member of its first Zariski cover contains the closed point and hence is all of $\operatorname{Spec}R$ by step 1.1. Its finite locally free cover is affine with finite free algebra $B$. By step 3.1 choose one nonzero local factor $B_i$; its spectrum is still a surjective finite locally free cover of $R$. Pull the intermediate Zariski cover to $\operatorname{Spec}B_i$ and choose a member containing its closed point. Since $B_i$ is local, this member is the entire spectrum. Pulling back the corresponding last finite locally free cover yields a single surjective finite locally free $V\to\operatorname{Spec}R$ refining the original section cover. Thus $V=\operatorname{Spec}A$ with $A$ finite free of positive rank over $R$, and $P(V)$ has a section. The finitely many selections here are single witnesses; no choice axiom is used. [F3, F4, step 1.1, step 3.1, choose, construct, algebra]

5.1 A section over $V$ identifies $P_V$ with $G_V$. Since $G$ is finite locally free over the affine base, it is affine and has finite free coordinate algebra by step 1.1, of positive rank because the identity of $G$ gives an $R$-section. The trivialized torsor therefore has a finite free $A$-algebra $C$. Its two pullbacks to $V\times_RV$ have the canonical algebra descent isomorphism from $P$, satisfying the cocycle identity; maps of the affine representables are algebra maps by Yoneda. By [F5], this datum descends to a commutative $R$-algebra $D$ with $A\otimes_RD\cong C$. The affine functor $\operatorname{Spec}D$ is an fppf sheaf by [F5]. Its descent identification with $P$ after $V$ therefore glues uniquely to an identification on the original site: both sections and maps are recovered from their compatible sections after the same cover. Thus $P$ is represented by $\operatorname{Spec}D$, without assuming torsor representability as input. [F3, F5, step 1.1, step 4.1, construct, algebra]

6.1 The algebra $D$ is finite as an $R$-module. Indeed write the finitely many $A$-generators of $A\otimes_RD=C$ as finite sums of pure tensors, and let $D_0\subseteq D$ be the $R$-span of their finitely many $D$-coefficients. Then $A\otimes_R(D/D_0)=0$; faithful flatness gives $D=D_0$. Also $D$ is torsion-free: $D\to A\otimes_RD$ is injective by the faithfully flat invariant-equalizer assertion in [F5], and $C$ is finite free over the finite free $R$-algebra $A$, hence torsion-free over $R$. By [F6], $D$ is finite free. Its rank equals the rank of $G$, by comparing the two free ranks after scalar extension to $A$ and then to the nonzero finite-dimensional $k$-algebra $A/\mathfrak mA$. This proves finite locally free representability. [F5, F6, step 1.1, step 5.1, construct, algebra]

7.1 For any $K$-point of $\operatorname{Spec}D$, the corresponding map $D\to K$ takes every element to an element integral over $R$: multiplication on the finite free module $D$ gives a monic characteristic polynomial annihilating that element, using [F7] after extension to $K$. Integrally closedness [F1] puts every image in $R$. The same map consequently defines an $R$-point, unique because $R\hookrightarrow K$ is injective. This proves $P(R)\cong P(K)$ and applies also to $G$. Its point groups are finite: the finite-dimensional coordinate algebra $G_K$ has finitely many local factors by [F6], and each factor has at most one $K$-algebra map to $K$, since its unique residue field can map to $K$ over $K$ only when it equals $K$. [F1, F6, F7, step 6.1, algebra]

8.1 For two $G$-torsors $P,Q$, the sheaf of $G$-equivariant isomorphisms between them is itself a $G$-torsor because $G$ is commutative. It is a sheaf since matching equivariant maps glue uniquely by the sheaf axioms; on a common trivializing cover its isomorphisms are exactly translations by $G$, so it has the required torsor action and local sections. Apply steps 4.1–7.1 to this torsor. Every generic equivariant isomorphism extends uniquely to $R$, proving full faithfulness and injectivity on isomorphism classes. The empty section sets and the trivial rank-one group are included; the torsor need not have a section unless its generic fibre does. No completion, finite residue field, local duality or reciprocity input has been used. [F3, F5, step 4.1, step 5.1, step 6.1, step 7.1, construct, algebra] ∎
