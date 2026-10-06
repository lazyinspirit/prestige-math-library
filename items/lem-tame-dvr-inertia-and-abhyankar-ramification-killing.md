---
id: lem-tame-dvr-inertia-and-abhyankar-ramification-killing
kind: lemma
title: "A root of the uniformizer kills the prime-to-residue-characteristic ramification required in specialization"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - lem-finite-etale-algebra-module-presentation-and-rank
  - cor-finite-purely-inseparable-extensions-have-prime-power-degree
  - thm-completion-as-extension-of-scalars
  - thm-completion-preserves-regular-local-rings
  - thm-flatness-of-noetherian-completion
  - lem-flat-local-map-faithfully-flat
  - lem-integral-closure-commutes-etale-base-change
  - lem-complete-local-finite-etale-algebra-lifting
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - cor-complete-separated-adic-pair-henselian
  - cor-henselian-local-simple-root-criterion
  - cor-idempotents-lift-uniquely-in-a-henselian-pair
  - thm-structure-theorem-for-artinian-rings
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical full authored item reading and acceptance restored through exact saved source/git carrier comparison. Closed carrier matches accepted Step7 repaired post_sha256. All steps 1.1,1.2,2.1,3.1,4.1,5.1 and their tags/references biject without text changes. Current adds one leading space to 2.1, removes its extra blank separator, adds final QED trailing space and removes EOF newline. The inseparable norm/lattice proof is already in the accepted closed carrier. Local repair reviews retain their recorded limits; no new independent audit is claimed."
    evidence:
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u30.json"
      - "research/frontier-38-owner-30-alpha-batch-30-5a.md"
    content_sha256: "3e862316b5e8c0c10194d42bbcdcdfd05b54a0444579a23e9e5a4b4be3dc61d6"
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X Lemma 3.6 and the ramification argument preceding Theorem 3.8"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §30; the required DVR Kummer calculation is proved explicitly here"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Brian Conrad, Some basics concerning absolute values, Theorem 5.5 (finite-dimensional norm equivalence)"
      url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
---

## Statement

Assume AC. Let $A$ be a Noetherian DVR with uniformizer $t$, fraction field $F$ and residue characteristic $p$. Let $L/F$ be finite Galois with group $G$, and put $n=|G|$. Assume $p=0$ or $p\nmid n$. Put $A_n=A[\theta]/(\theta^n-t)$ and $F_n=\operatorname{Frac}(A_n)$. The integral closure of $A_n$ in the finite separable algebra $L\otimes_F F_n$ is finite étale over $A_n$. Thus a common root of the uniformizer of degree divisible by the relevant prime-to-$p$ Galois-group orders eliminates every such vertical ramification.

Applied to the codimension-one local rings of a smooth proper trait family, the same root can be taken in the trait base, since the trait uniformizer has valuation one along each special-fibre component. Finite extensions of a complete trait have complete DVR normalization, and their residue fields remain unchanged if the original residue field is algebraically closed.

## Facts & Assumptions

**Given:** AC, $A$, $t$, $F$, $L$, $G$ and the prime-to-residue-characteristic hypothesis.

[F1] Separable normalizations over normal Noetherian domains are finite; normal one-dimensional local rings are DVRs ([[thm-finite-integral-closure-in-a-finite-separable-extension]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]). Integral closure commutes with étale base change ([[lem-integral-closure-commutes-etale-base-change]]).

[F2] Completion is flat, preserves regular local rings and completes finite modules by tensor product; local flat completion is faithfully flat ([[thm-flatness-of-noetherian-completion]], [[thm-completion-preserves-regular-local-rings]], [[thm-completion-as-extension-of-scalars]], [[lem-flat-local-map-faithfully-flat]]). Complete local rings are henselian, simple roots and idempotents lift, and finite étale algebras over them correspond to residue-field algebras ([[cor-complete-separated-adic-pair-henselian]], [[cor-henselian-local-simple-root-criterion]], [[cor-idempotents-lift-uniquely-in-a-henselian-pair]], [[lem-complete-local-finite-etale-algebra-lifting]]).

[F3] Artinian rings decompose into local factors and pairwise comaximal ideals give the Chinese remainder decomposition ([[thm-structure-theorem-for-artinian-rings]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]]). Finite étale algebras descend along faithfully flat maps ([[thm-effective-fpqc-descent-of-finite-etale-covers]]). AC is retained through these suppliers ([[def-axiom-of-choice]]).

[F4] An algebraic extension is purely inseparable over its maximal separable subextension ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]). Over a complete absolutely valued field, every norm on a finite-dimensional vector space is equivalent to the coordinate sup norm ([[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]).

## Proof

1.1 The ring $A_n$ is a DVR. It is finite free over $A$, with unique maximal ideal generated by $\theta$: reduction modulo $t$ has unique prime $(\theta)$, and integrality makes every maximal ideal lie over that of $A$. It has dimension one, and its maximal ideal has one generator, so it is regular local and hence a domain and DVR. By [F1] the normalization $B_n$ in the indicated generic algebra is finite and a product of normal domain factors. We may complete $A_n$ faithfully flatly by [F2]. This also completes each local factor of $B_n$: its maximal-adic topology is cofinal with the $t$-adic topology, and [F3]'s Chinese remainder decomposition expresses the completion as a product of completed local DVRs. By regularity of completion in [F2], that product is normal and is exactly the integral closure in its generic algebra. Thus it is enough to prove the assertion after completing $A$, then to descend étaleness using [F3]. [F1, F2, F3, construct]

1.2 Let $A$ now be complete and let $E/F$ be any finite field extension. Its maximal separable subextension $F_s/F$ is finite, and $E/F_s$ is purely inseparable by [F4]. The normalization $A_s$ of $A$ in $F_s$ is a finite normal domain by [F1], and is $t$-adically complete by [F2]. The quotient $A_s/tA_s$ is Artinian. If it had several local factors, [F3] would give a nontrivial idempotent; this would lift to $A_s$ by the complete-pair and idempotent assertions in [F2], contradicting that $A_s$ is a domain. Thus $A_s$ is local, since all its maximal ideals lie over $(t)$. It is one-dimensional and hence a DVR by [F1], complete for its maximal ideal because that topology is cofinal with the $t$-adic topology. Its fraction field $F_s$ is complete for $|a|=2^{-v_s(a)}$: a Cauchy sequence is eventually contained in a fixed uniformizer multiple of $A_s$, where completeness applies. [F1, F2, F3, F4, algebra]

 2.1 Over complete $A$, construct an unramified local extension $A^{\mathrm{ur}}$ with residue field a separable closure of $\kappa(A)$. For every finite separable residue extension use [F2] to lift its field algebra to a finite étale local $A$-algebra. It is a DVR with the same uniformizer (a one-dimensional regular local ring is a DVR by [[thm-one-dimensional-regular-local-rings-are-dvrs]], and is a domain by [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]): its residue ring is a field, its maximal ideal is generated by $t$, and its dimension is one. Maps and composita lift uniquely by [F2], so choosing compatible residue embeddings gives a directed union $A^{\mathrm{ur}}$. Every nonzero element has integral valuation and is a uniformizer power times a unit in some stage; consequently the union is a DVR, with value group $\mathbb Z$. It is flat and faithfully flat over $A$, as a filtered union of finite free local extensions. It is henselian: a polynomial and a simple residue root occur in some finite residue stage, and the simple root lifts in that complete stage by [F2]. Its residue field is separably closed. Normalization commutes with this extension by [F1], first at each finite étale stage and then in the union, because every integral equation involves finitely many coefficients. Finally complete this DVR, retaining the notation $A^{\mathrm{ur}}$. Its residue field remains separably closed and the completion is faithfully flat by [F2]. Normalization after completion is the product of the completed local DVR factors by the argument of step 1.1. [F1, F2, step 1.1, construct]

3.1 Let $C$ be one local factor of the normalization of $A^{\mathrm{ur}}$ in $L\otimes_F\operatorname{Frac}(A^{\mathrm{ur}})$. Its generic extension is Galois of degree $e_0$ dividing $n$: scalar extension of a finite Galois algebra is a product of Galois field extensions with subgroup Galois groups, as seen by the action on its embeddings. By [F1]–[F2], $C$ is a DVR finite over the complete $A^{\mathrm{ur}}$. It is complete by the finite-module completion theorem in [F2], and its $t$-adic and maximal-adic topologies are cofinal. Hence it is henselian by the complete-pair criterion in [F2]. Write its ramification index as $e$ and its residue degree as $f$. It is torsion-free over the base DVR, hence flat by [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]], and finite over its Noetherian base, hence finitely presented. The local freeness proof in [[lem-finite-etale-algebra-module-presentation-and-rank]] therefore makes it finite free. Consequently reduction modulo $t$ and the filtration by its uniformizer give $e_0=ef$. The residue extension of a separably closed field is purely inseparable, hence $f$ is a power of $p$ if $p>0$ by [[cor-finite-purely-inseparable-extensions-have-prime-power-degree]], and is $1$ in characteristic zero. As $e_0\mid n$ is prime to $p$, we get $f=1$ and $e=e_0$. Write $t=u\pi^e$ for its uniformizer $\pi$ and unit $u$. The equation $T^e-u$ has a residue root and invertible derivative, so henselianity lifts an $e$th root $v$ of $u$ to $C$. Then $(v\pi)^e=t$. The powers $1,v\pi,\ldots,(v\pi)^{e-1}$ are linearly independent over $\operatorname{Frac}(A^{\mathrm{ur}})$: with the valuation of $C$ normalized by $\operatorname{val}(\pi)=1$, nonzero terms in a linear relation have distinct valuations modulo $e$, so a unique term would have smallest valuation and the sum could not vanish. The root therefore has degree $e$, and the generic extension is exactly $\operatorname{Frac}(A^{\mathrm{ur}})(t^{1/e})$. The base contains every $e$th root of unity by the same simple-root lifting, and the extension is cyclic. This proves the necessary tame-inertia description explicitly. [F1, F2, F3, step 2.1, algebra]

4.1 Since $e\mid n$, adjoining $\theta=t^{1/n}$ contains $t^{1/e}=\theta^{n/e}$. Thus every field factor in step 3.1 becomes split after this root extension, and its normalized algebra is a product of copies of the base DVR $A^{\mathrm{ur}}[\theta]$. The normalization of $A_n$ therefore becomes finite étale after the faithfully flat unramified extension and completion used in steps 1.1 and 2.1. Descent in [F3] makes $B_n/A_n$ finite étale. For a smooth trait family the special fibre is reduced, so its base uniformizer $t$ has valuation one at each vertical codimension-one DVR; the common base-root extension therefore has this effect simultaneously at all such DVRs. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $E=F_s$, step 1.2 suffices. Otherwise $\operatorname{char}F_s=p>0$ and finite pure inseparability gives a common $q=p^r$ with $x^q\in F_s$ for all $x\in E$. Define $w(x)=v_s(x^q)/q$ for $x\ne0$ and $w(0)=+\infty$. Frobenius and the valuation axioms make $w$ a valuation extending $v_s$, with value group a subgroup of $q^{-1}\mathbb Z$ containing $\mathbb Z$. Its valuation ring $C=\{x:w(x)\ge0\}$ is exactly the integral closure of $A_s$ in $E$: $x\in C$ satisfies the monic equation $T^q-x^q$ over $A_s$, while integral $x$ has $x^q\in A_s$ because $A_s$ is integrally closed. The discrete value group has a least positive element, and each nonzero ideal of $C$ is generated by an element of its least value, so $C$ is a DVR. The absolute value $2^{-w}$ is an $F_s$-vector-space norm on $E$. For an $F_s$-basis $b_i$, [F4] bounds the coefficients of every $x\in C$ by a fixed constant. Thus $C\subseteq\sum_i s^{-N}A_sb_i$ for some $N$, where $s$ is a uniformizer of $A_s$. Being an $A_s$-submodule of this finite lattice over the Noetherian ring $A_s$, $C$ is finite over $A_s$, hence over $A$. It is complete by [F2] and cofinality of the uniformizer-adic topologies. Transitivity of integrality identifies $C$ with the normalization of $A$ in $E$. Its residue field is finite over that of $A$, hence unchanged if the latter is algebraically closed. All clauses hold with the stated AC and characteristic hypotheses. [F1, F2, F4, step 1.2, step 4.1, algebra] ∎ 