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
$\omega_1$ whose union $B$ is ccc and has size $\omega_1$ such that (i) every
complete isomorphism between countably generated complete subalgebras of $B$
extends to an automorphism of $B$, and (ii) every task scheduled by the
construction is met: every free-amalgamation task whose data appear at a stage
is answered at a later stage, and above every stage there is a later quotient
forcing equivalent to $\mathrm{UM}$. This is Shelah's continuous sweet
construction (Main Lemma 7.14(b),(d)); it is not identified with an ordinary
finite-support iteration.

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

2.3 Every task is met. A genuine task is a countable object: its countably many data have birth stages, whose set is countable and hence bounded in $\omega_1$ by [F2]; the bookkeeping repeats the task cofinally often, so there is a stage $\alpha$ above all its data with bookkeeping value naming it, and at that successor stage the task is applied. For $\mathrm{UM}$ requests this yields arbitrarily large $\alpha$ with the quotient $B_{\alpha+1}/B_\alpha$ equivalent to $\mathrm{UM}$, hence above every stage there is a later $\mathrm{UM}$ quotient, as claimed. In particular the **stage extension principle** holds: for every $\gamma<\omega_1$ and every complete isomorphism $h$ between countably generated complete subalgebras of $B_\gamma$ there are $\beta>\gamma$ and an automorphism $\Phi$ of $B_\beta$ extending $h$. Indeed the code of $h$ is one of the tasks of step 1.1, its data lie in $B_\gamma$, the bookkeeping names it at some stage $\delta\ge\gamma$, and at stage $\delta+1$ the recursion applies [F3] to $h$ and takes $B_{\delta+1}$ to be the resulting sweet algebra, so $\Phi$ is the automorphism of $B_{\delta+1}$ provided by that fact. [F1, F2, F3, step 1.1, step 1.2]

3.1 The union $B=\bigcup_{\alpha<\omega_1}B_\alpha$ has size $\omega_1$ and is ccc: it is sweet by [F5], and [F7] makes it a countable union of directed sets, hence ccc; its cardinality is at most $\omega_1$ by step 2.2 and at least $\omega_1$ because it contains a copy of $\omega_1$. [F5, F6, F7, step 2.2]

4.1 Union-level extension: setting up. Let $f:A\to A'$ be a complete isomorphism between countably generated complete subalgebras of $B$; we must extend $f$ to an automorphism of $B$. The countably many generators of $A\cup A'$ are elements of $B=\bigcup_{\alpha<\omega_1}B_\alpha$, so their stages are bounded by some $\gamma_0<\omega_1$ and $A\cup A'\subseteq B_{\gamma_0}$; both $A$ and $A'$ are then complete subalgebras of $B_{\gamma_0}$. By step 3.1 the set $B$ has size $\omega_1$, so by [F1] fix an enumeration $\langle x_\xi:\xi<\omega_1\rangle$ of $B$, and put $h_0:=f$. [F1, step 1.2, step 3.1]

5.1 Union-level extension: the recursion. By recursion on $\xi<\omega_1$ choose $\gamma_\xi<\omega_1$, countably generated complete subalgebras $A_\xi,A'_\xi\subseteq B_{\gamma_\xi}$ and complete isomorphisms $h_\xi:A_\xi\to A'_\xi$ such that $h_\eta\subseteq h_\xi$ and $A_\eta\subseteq A_\xi$, $A'_\eta\subseteq A'_\xi$ for $\eta<\xi$, and $x_\xi\in A_{\xi+1}\cap A'_{\xi+1}$. *Successor stage:* given $h_\xi$ with $A_\xi,A'_\xi\subseteq B_{\gamma_\xi}$, choose $\gamma\ge\gamma_\xi$ with $x_\xi\in B_\gamma$; this is possible because the enumeration covers $B$. The isomorphism $h_\xi$ is a complete isomorphism between countably generated complete subalgebras of $B_\gamma$, so by the stage extension principle of step 2.3 there are $\beta>\gamma$ and an automorphism $\Phi$ of $B_\beta$ extending $h_\xi$. Put $\gamma_{\xi+1}:=\beta$, let $A_{\xi+1}$ be the complete subalgebra of $B_\beta$ generated by $A_\xi\cup\{x_\xi\}\cup\{\Phi^{-1}(x_\xi)\}$ — a countably generated complete subalgebra of $B_\beta$ — and put $h_{\xi+1}:=\Phi\upharpoonright A_{\xi+1}$, a complete isomorphism onto $A'_{\xi+1}:=h_{\xi+1}[A_{\xi+1}]$, which contains $x_\xi$ because $x_\xi\in A_{\xi+1}$. *Limit stage:* for $\xi<\omega_1$ limit put $\gamma_\xi:=\sup_{\eta<\xi}\gamma_\eta$, $A_\xi:=\bigcup_{\eta<\xi}A_\eta$, $A'_\xi:=\bigcup_{\eta<\xi}A'_\eta$ and $h_\xi:=\bigcup_{\eta<\xi}h_\eta$. A limit ordinal below $\omega_1$ has countable cofinality, so $A_\xi$ is countably generated and $h_\xi$ is a complete isomorphism extending every $h_\eta$, $\eta<\xi$; and $A_\xi\subseteq B_{\gamma_\xi}$ because the chain is increasing and continuous at the limit $\gamma_\xi$. [step 2.3, step 4.1, F5]

6.1 Union-level extension: the union is an automorphism. Put $A_{\omega_1}:=\bigcup_{\xi<\omega_1}A_\xi$ and $h:=\bigcup_{\xi<\omega_1}h_\xi$. Then $A_{\omega_1}=B$, because each $x_\xi$ lies in $A_{\xi+1}$ by step 5.1 and the enumeration covers $B$, and $h[A_{\omega_1}]=B$ for the same reason applied to the $A'_\xi$. The map $h$ is well defined and injective because the $h_\xi$ are coherent, and it preserves the order in both directions: two elements of $B$ lie in a common $A_\xi$, where $h$ agrees with the isomorphism $h_\xi$. Consequently, for any $X\subseteq B$ the element $h(\bigvee X)$ is an upper bound of $h[X]$, while $h^{-1}(\bigvee h[X])$ is an upper bound of $X$, since $h^{-1}$ is also order preserving; hence $h(\bigvee X)=\bigvee h[X]$, and dually $h$ preserves meets and complements. Thus $h$ is a complete Boolean automorphism of $B$ extending $f$. [step 5.1, step 3.1]

7.1 The steps above establish the existence of a continuous chain of sweet complete Boolean algebras of size at most $\omega_1$ with ccc union of size $\omega_1$ such that every complete isomorphism between countably generated complete subalgebras of the union extends to an automorphism of the union (step 6.1), every scheduled free-amalgamation task is answered and every stage has a later $\mathrm{UM}$ quotient (step 2.3); this is the Statement. [step 3.1, step 2.3, step 6.1] ∎
