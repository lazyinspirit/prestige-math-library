---
id: thm-shelah-ch-omega-one-sweet-construction
kind: theorem
title: Shelah's CH-length homogeneous sweet construction
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-aleph-and-beth-hierarchies, thm-cardinal-power-set-and-cantor, thm-shelah-sweet-partial-isomorphism-extension, thm-shelah-sweet-amalgamation-preserves-sweetness, thm-shelah-universal-meagre-composition-preserves-sweetness, lem-shelah-continuous-unions-of-sweetness-models, lem-shelah-sweet-forcings-are-sigma-directed-ccc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Claim 7.13 and Main Lemma 7.14, pp. 42-43"}
---

## Statement

Assume ZFC and CH, explicitly $|P(\omega)|=\aleph_1$. There is a continuous
increasing chain of sweetness models
$(P_\alpha,D_\alpha,E^\alpha_n)_{\alpha<\omega_1}$. Put
$B_\alpha=BA(P_\alpha)$ and $P=\bigcup_{\alpha<\omega_1}P_\alpha$. Then the
$B_\alpha$ form an increasing chain of complete Boolean algebras of size at
most $\omega_1$, and the final completion
$$B=BA(P)=\bigcup_{\alpha<\omega_1}B_\alpha$$
is ccc and has size $\omega_1$, such that (i) every
complete isomorphism between countably generated complete subalgebras of $B$
extends to an automorphism of $B$, and (ii) every task scheduled by the
construction is met: every free-amalgamation task whose data appear at a stage
is answered at a later stage, and above every stage there is a later quotient
with the canonical $\mathrm{UM}$ presentation (equivalently, its Boolean
completion is identified with the quotient completion). This is Shelah's continuous sweet
construction (Main Lemma 7.14(b),(d)); it is not identified with an ordinary
finite-support iteration.

## Facts & Assumptions

**Given:** ZFC and CH in the form $|P(\omega)|=\aleph_1$.

[F1] [[def-axiom-of-choice]]: well-orderings of the sets of task codes used in the set-length recursion. No global choice principle is assumed.

[F2] [[def-aleph-and-beth-hierarchies]] with [[thm-cardinal-power-set-and-cantor]] and CH: every countable object built from $\omega_1$-many data has an $\omega_1$-bounded code, and the number of countable subsets of $\omega_1$ is at most $\omega_1$.

[F3] [[thm-shelah-sweet-partial-isomorphism-extension]]: every complete isomorphism between countably generated complete subalgebras of a sweet algebra extends to an automorphism after one extension step.

[F4] [[thm-shelah-sweet-amalgamation-preserves-sweetness]] and [[thm-shelah-universal-meagre-composition-preserves-sweetness]]: the named amalgam and canonical UM composition give sweetness models extending the fixed old model.

[F5] [[lem-shelah-continuous-unions-of-sweetness-models]]: sweet models are preserved at limits of countable cofinality, with every earlier stage complete in the union.

[F6] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: every sweet stage is ccc. Under CH, $(\omega_1)^{\aleph_0}=(2^{\aleph_0})^{\aleph_0}=2^{\aleph_0}=\omega_1$; hence a ccc forcing of size at most $\omega_1$ has a Boolean completion of size at most $\omega_1$, because each completion element is the join of a countable maximal antichain from a dense copy of the forcing.

[F7] Shelah's Main Lemma 7.14 supplies the final-union clauses that are not consequences of [F5]: for the constructed chain, if $P=\bigcup_{\alpha<\omega_1}P_\alpha$ and $B=\operatorname{BA}(P)$, then $B$ is ccc and $$B=\bigcup_{\alpha<\omega_1}\operatorname{BA}(P_\alpha).$$ It also states the union-level automorphism-extension and free-amalgamation clauses and identifies arbitrarily late quotients with the canonical $\mathrm{UM}$ forcing in the relevant intermediate extension. [source]

[F8] Shelah's Claim 7.13 permits arbitrary complete subalgebras, not only countably generated ones: any isomorphism between two complete subalgebras of a sweet completion extends to an automorphism after an extension of the fixed sweetness model. This stronger source interface is used when continuing a previously extended map whose domain is an entire stage completion. [source]

## Proof

1.1 Well-order all countable task codes: complete isomorphisms between countably generated complete subalgebras, pairs $C_0\subseteq C_1$ of such subalgebras requiring a free copy over $C_0$, and canonical UM-extension requests. Under CH the set of countable sequences from $\omega_1$ has size $\omega_1$ by [F2], so use $\omega_1$ bookkeeping that repeats every task cofinally often. A homogeneity task retains its last partial extension; later occurrences extend that coherent map over the then-current stage. [F1, F2]

1.2 Begin with the trivial sweetness model. At a successor, perform the named task only after all of its data have appeared. For an isomorphism task use [F8] to extend the current coherent map over the whole current completion. For $C_0\subseteq C_1$, first use the named amalgam [F4] to create a second canonical copy of $C_1$ freely amalgamated with the first over $C_0$, then use [F3] to extend the copy isomorphism to the required automorphism. For a UM task use the fixed-model composition in [F4]. Every successor is therefore an extension of sweetness models. [F3, F4, F8]

1.3 At a nonzero limit $\lambda<\omega_1$, put $$P_\lambda=\bigcup_{\alpha<\lambda}P_\alpha,\qquad D_\lambda=\bigcup_{\alpha<\lambda}D_\alpha,\qquad E^\lambda_n=\bigcup_{\alpha<\lambda}E^\alpha_n.$$ Since every such limit is countable and has countable cofinality, [F5] makes this a sweetness model extending every earlier stage. Only after forming this direct union forcing set $B_\lambda=BA(P_\lambda)$. In general $B_\lambda$ is **not** asserted to equal $\bigcup_{\alpha<\lambda}B_\alpha$; completing the direct union is a separate operation. [F5]

2.1 The recursion is well defined, every $P_\alpha$ is sweet, and each earlier $P_\alpha$ is complete in every later $P_\beta$. Consequently the induced maps make $B_\alpha$ a complete subalgebra of $B_\beta$. The word "continuous" refers to the forcing/sweetness-model chain of step 1.3, not to an unproved direct union of complete algebras. [F3, F4, F5, step 1.2, step 1.3]

2.2 Inductively keep $|P_\alpha|\le\omega_1$: each successor construction is made from at most $\omega_1$ conditions, and each limit below $\omega_1$ is a countable union. Every $P_\alpha$ is ccc by [F6]. A completion element is the join of a maximal antichain from the dense image of $P_\alpha$, that antichain is countable, and [F6] gives at most $(\omega_1)^{\aleph_0}=\omega_1$ such codes. Hence $|B_\alpha|\le\omega_1$ at every stage without treating the construction as a finite-support iteration. [F2, F6, step 1.2, step 1.3]

2.3 Every countable task has a bounded set of birth stages, hence is active at all sufficiently late occurrences of its code. Repeated occurrences of an isomorphism task form a coherent cofinal chain of extensions. A free-amalgamation requirement, once realised, remains realised in all later complete extensions. UM requests occur unboundedly often, so arbitrarily late successor quotients are the canonical UM forcing. [F1, F2, F3, F4, step 1.1, step 1.2]

3.1 Let $P=\bigcup_{\alpha<\omega_1}P_\alpha$ and put $B=BA(P)$. This is an $\omega_1$-length union, so [F5] does not apply. Instead the special final-union conclusion recorded in [F7] proves the identity $$B=\bigcup_{\alpha<\omega_1}BA(P_\alpha)$$ and proves that $B$ is ccc. The identity and step 2.2 give $|B|\le\omega_1$. The unboundedly many nontrivial UM quotients make the chain strictly increase unboundedly often, so $|B|\ge\omega_1$. Hence $|B|=\omega_1$. [F4, F7, step 2.2, step 2.3]

4.1 Let $f:A\to A'$ be a complete isomorphism between countably generated complete subalgebras of $B$. By the final identity in step 3.1, the countable generating data occur at a bounded stage. Its repeated bookkeeping thread extends coherently over unboundedly many later stages, and its union is an automorphism of $B$ extending $f$. This is clause (b) of [F7], not the unsupported extension of a single-stage automorphism. Clause (c) gives the final free-amalgamation property, and clause (d) gives the arbitrarily late UM quotients. [F2, F3, F7, step 1.1, step 2.3, step 3.1]

5.1 Steps 1.1--2.3 construct the continuous chain of sweetness models; step 3.1 performs the distinct final Boolean-completion argument; and step 4.1 gives the union-level homogeneity, free-amalgamation and UM clauses. This proves the Statement. [step 2.3, step 3.1, step 4.1] ∎
