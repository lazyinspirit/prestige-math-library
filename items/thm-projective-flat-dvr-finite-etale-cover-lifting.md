---
id: thm-projective-flat-dvr-finite-etale-cover-lifting
kind: theorem
title: "Finite étale covers of a projective flat family over a complete DVR lift uniquely"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting
  - thm-finite-etale-algebras-invariant-under-nilpotent-thickening
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-completion-as-extension-of-scalars
  - thm-krull-intersection-theorem
  - cor-nakayama-generators-modulo-an-ideal
  - lem-relative-spec-glues-affine-algebras
  - thm-etale-equivalent-flat-unramified-fp
  - lem-differentials-base-change
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "EGA III, §5.2 (projective existence) and §5.3 (proper extension)"
      url: https://www.numdam.org/item/PMIHES_1961__11__5_0.pdf
    - title: "Stacks Project, Cohomology of Schemes §§8, 14, 18, 24; flat-DVR specialization of the proofs"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume AC. Let $R$ be a complete Noetherian DVR with uniformizer $t$, and let $Z$ be projective and flat over $R$. Write $Z_n=Z\times_R\operatorname{Spec}(R/t^n)$ for $n\ge1$. Restriction is an equivalence between finite étale covers of $Z$ and of $Z_1$. No smoothness or normality of $Z$ is assumed.

## Facts & Assumptions

**Given:** AC, $R$, $t$, $Z$ and a finite étale cover on $Z_1$.

[F1] Projective coherent Čech groups are finite, high twists have vanishing positive cohomology and are globally generated ([[lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting]]).

[F2] Finite étale algebras are finite locally free and lift with their maps uniquely through nilpotent ideals ([[lem-finite-etale-algebra-module-presentation-and-rank]], [[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]]). Applying this on affine charts and using uniqueness glues the lifts on nilpotent scheme thickenings.

[F3] Finite modules over complete $R$ are complete, and finite modules at local rings are separated for an ideal in the maximal ideal. Nakayama lifts finite generating sets ([[thm-completion-as-extension-of-scalars]], [[thm-krull-intersection-theorem]], [[cor-nakayama-generators-modulo-an-ideal]]). Relative spectra of affine-local algebras glue; flatness, finite presentation and vanishing differentials give étaleness, and differentials commute with base change ([[lem-relative-spec-glues-affine-algebras]], [[thm-etale-equivalent-flat-unramified-fp]], [[lem-differentials-base-change]]). AC is inherited through [F1]–[F3] ([[def-axiom-of-choice]]).

## Proof

1.1 For any finite locally free sheaf $E$ on $Z$, multiplication by $t^n$ is injective because $Z$ is flat over $R$. Its exact quotient sequence gives $$0\longrightarrow H^0(Z,E)/t^n\longrightarrow H^0(Z_n,E/t^nE)\longrightarrow H^1(Z,E)[t^n]\longrightarrow0.$$ Here the groups are the Čech groups in [F1], and the sequence follows from its exact-sequence calculation. The transition map on the last group is multiplication by $t$, as follows by comparing the two quotient exact sequences for $t^{n+1}$ and $t^n$. The torsion subgroup of the finite $R$-module $H^1(Z,E)$ is killed by one power of $t$, so a compatible system in these last groups is zero. Thus every compatible system of sections comes uniquely from the limit of $H^0(Z,E)/t^n$; by [F3] this is $H^0(Z,E)$. Applying the result to $\mathcal Hom(E,G)$ proves full faithfulness of completion for finite locally free sheaves. [F1, F3, algebra]

2.1 By [F2] lift the cover on $Z_1$ successively to compatible finite étale algebras $D_n$ on $Z_n$. Each is locally free. Flatness of $Z/R$ gives $\ker(D_{n+1}\to D_n)\cong D_1$ as a sheaf on $Z_1$, by multiplication by $t^n$. Choose $d$ so that $D_1(d)$ is globally generated and $H^1(Z_1,D_1(d))=0$ using [F1]. Its finite generating list of global sections lifts compatibly to every $D_n(d)$ because the obstruction group at every successive stage is that same zero group. Nakayama makes these lifts generate each $D_n(d)$. Thus there is a compatible system of surjections $\mathcal O_{Z_n}(-d)^r\to D_n$, with locally free kernels $K_n$ compatible under reduction: each sequence splits locally because $D_n$ is locally free. The same argument for $K_1$, with another twist $e$, gives a system of presentations $$\mathcal O_{Z_n}(-e)^s\longrightarrow\mathcal O_{Z_n}(-d)^r\longrightarrow D_n\longrightarrow0.$$ By step 1.1 the compatible first maps algebraize to a map on $Z$. Let $D$ be its coherent cokernel; right exactness gives $D/t^nD\cong D_n$ for all $n$. [F1, F2, F3, step 1.1, construct]

3.1 The sheaf $D$ is locally free near the closed fibre. At such a local ring $B$, let $M$ be its finite module. If $tm=0$, the fact that $M/t^nM$ is free over $B/t^nB$ and that $t$ is a nonzerodivisor in $B$ implies $m\in t^{n-1}M$ for every $n$. Krull intersection in [F3] gives $m=0$, so $t$ acts injectively on $M$. Lift a basis of $M/tM$ to a map $B^r\to M$; Nakayama makes it surjective. For its finite kernel $K$, reduction modulo $t$ remains left exact because $M$ has no $t$-torsion (apply the two-term resolution of $B/tB$). Hence $K/tK=0$, and Nakayama gives $K=0$. The chosen basis spreads to an open neighbourhood by finite presentations. The failure-of-local-freeness locus of a coherent module is closed, as seen from minors in finite presentations. If nonempty it would have a nonempty closed image in $\operatorname{Spec}R$, hence meet the closed fibre by properness, contradicting what was just proved. Thus $D$ is locally free everywhere. [F3, step 2.1, algebra]

4.1 The products $D_n\otimes D_n\to D_n$ and units algebraize by step 1.1 because $D$ and its tensor powers are locally free. Associativity, commutativity and unit identities hold by the injectivity in that step, since they hold on every $Z_n$. The resulting algebra is finite locally free. Its differentials vanish on the closed fibre by [F2]–[F3] and then near that fibre by Nakayama; the support of this coherent differential module is closed and proper over $R$, so it is empty by the same argument as step 3.1. Thus $D$ is finite étale by [F3], and its relative spectrum is the required lift. Maps between two lifted covers lift uniquely through all $Z_n$ by [F2] and algebraize by step 1.1; multiplication identities are again detected by that injectivity. This proves the equivalence. [F2, F3, step 1.1, step 3.1, construct] ∎
