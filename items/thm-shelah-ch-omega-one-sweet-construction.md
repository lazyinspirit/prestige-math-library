---
id: thm-shelah-ch-omega-one-sweet-construction
kind: theorem
title: Shelah's CH-length homogeneous sweet construction
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-aleph-and-beth-hierarchies, thm-cardinal-power-set-and-cantor, thm-shelah-sweet-partial-isomorphism-extension, thm-shelah-universal-meagre-composition-preserves-sweetness, lem-shelah-continuous-unions-of-sweetness-models, lem-finite-support-iteration-size-bound, lem-shelah-sweet-forcings-are-sigma-directed-ccc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Main Lemma 7.14, pp. 42-43"}
---

## Statement

Assume ZFC and CH, explicitly $|P(\omega)|=\aleph_1$. There is a continuous chain
$(B_\alpha)_{\alpha<\omega_1}$ of sweet complete Boolean algebras of size at most
$\omega_1$ whose union $B$ is ccc and has size $\omega_1$, such that every
isomorphism between countably generated complete subalgebras that appears at a
stage extends to an automorphism at a later stage, every required
free-amalgamation task is met, and above every stage there is a later quotient
forcing equivalent to $\mathrm{UM}$. This is Shelah's continuous sweet
construction; it is not identified with an ordinary finite-support iteration.

## Facts & Assumptions

**Given:** ZFC and CH in the form $|P(\omega)|=\aleph_1$.

[F1] [[def-axiom-of-choice]]: a global well-ordering of the ambient set-theoretic universe, used to well-order the tasks and to run the transfinite recursion.

[F2] [[def-aleph-and-beth-hierarchies]] with [[thm-cardinal-power-set-and-cantor]] and CH: every countable object built from $\omega_1$-many data has an $\omega_1$-bounded code, and the number of countable subsets of $\omega_1$ is at most $\omega_1$.

[F3] [[thm-shelah-sweet-partial-isomorphism-extension]]: every complete isomorphism between countably generated complete subalgebras of a sweet algebra extends to an automorphism after one extension step.

[F4] [[thm-shelah-universal-meagre-composition-preserves-sweetness]]: composing a sweet algebra with $\mathrm{UM}$ yields a sweet extension whose quotient is $\mathrm{UM}$.

[F5] [[lem-shelah-continuous-unions-of-sweetness-models]]: sweet models are preserved at limits of countable cofinality, with every earlier stage complete in the union.

[F6] [[lem-finite-support-iteration-size-bound]]: size bounds of the form $\mu^{\aleph_0}=\mu$; with $\mu=\omega_1$ this bounds every completed $\omega_1$-stage object and its completion by $\omega_1$.

[F7] [[lem-shelah-sweet-forcings-are-sigma-directed-ccc]]: a sweet algebra is a countable union of directed sets and hence ccc.

## Proof

1.1 Well-order all tasks of hereditary size at most $\omega_1$: codes for countably generated complete subalgebras of the algebra built so far, codes for complete isomorphisms between two such subalgebras, codes for free-amalgamation requests, and codes for requests that the next quotient be $\mathrm{UM}$. By CH and [F2] there are at most $\omega_1$ such countable codes, so fix a bookkeeping map $s:\omega_1\to\omega_1$ that is regressive in the sense that it names a task coded below the current stage and that repeats every task cofinally often. [F1, F2]

1.2 Recursion: put $B_0$ equal to the completion of the trivial forcing, sweet. Given $B_\alpha$, look at the task named by the bookkeeping value at $\alpha$; if it is an isomorphism task whose data already lie in $B_\alpha$, apply [F3] and set $B_{\alpha+1}$ equal to the resulting algebra; if it is a free-amalgamation task, apply the amalgamation part of [F3] precisely as in the amalgamation theorem; if it is a $\mathrm{UM}$ request, apply [F4] and set $B_{\alpha+1}=B_\alpha*\mathrm{UM}$. If the task's data are not yet present or the code names nothing, set $B_{\alpha+1}=B_\alpha$. At limit ordinals put $B_\lambda=\bigcup_{\alpha<\lambda}B_\alpha$. [F1, F3, F4, F5]

2.1 The recursion is well defined and every $B_\alpha$ is a sweet complete Boolean algebra: successors are sweet by [F3] and [F4], limits of countable cofinality are sweet by [F5] and every $B_\alpha$ embeds completely into every later stage; since $\omega_1$ is regular, every limit ordinal below it has countable cofinality, so the continuous-union lemma applies at every limit. [F5, step 1.2]

2.2 Size induction: $|B_\alpha|\le\omega_1$ for all $\alpha<\omega_1$. A successor step adds one amalgamation or one composition, and the completion of an algebra of size at most $\omega_1$ together with one more generator has size at most $\omega_1^{\aleph_0}=\omega_1$ under CH, which is the bound of [F6]; a limit of fewer than $\omega_1$ stages each of size at most $\omega_1$ has size at most $\omega_1$. [F2, F6, step 1.2]

2.3 Every task is met. A genuine task is a countable object: its countably many data have birth stages, whose set is countable and hence bounded in $\omega_1$ by [F2]; the bookkeeping repeats the task cofinally often, so there is a stage $\alpha$ above all its data with bookkeeping value naming it, and at that successor stage the task is applied. For $\mathrm{UM}$ requests this yields arbitrarily large $\alpha$ with the quotient $B_{\alpha+1}/B_\alpha$ equivalent to $\mathrm{UM}$, hence above every stage there is a later $\mathrm{UM}$ quotient, as claimed. [F1, F2, step 1.2]

3.1 The union $B=\bigcup_{\alpha<\omega_1}B_\alpha$ has size $\omega_1$ and is ccc: it is sweet by [F5], and [F7] makes it a countable union of directed sets, hence ccc; its cardinality is at most $\omega_1$ by step 2.2 and at least $\omega_1$ because it contains a copy of $\omega_1$. [F5, F6, F7, step 2.2]

3.2 Every isomorphism between countably generated complete subalgebras that appears at a stage extends to an automorphism later: such an isomorphism is one of the tasks of step 1.1, and the stage that handles it applies [F3] to extend it to an automorphism of the next stage, which remains an automorphism of the union. The construction is continuous, so all limit clauses are satisfied by [F5]. [F2, F3, step 2.3]

4.1 The steps above establish the existence of a continuous chain of sweet complete Boolean algebras of size at most $\omega_1$ with ccc union of size $\omega_1$, meeting the isomorphism, free-amalgamation and $\mathrm{UM}$ requirements; this is the Statement. [step 3.1, step 2.3, step 3.2] ∎
