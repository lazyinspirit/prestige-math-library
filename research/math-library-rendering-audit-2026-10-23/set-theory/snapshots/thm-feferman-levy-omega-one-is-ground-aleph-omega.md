---
id: thm-feferman-levy-omega-one-is-ground-aleph-omega
kind: theorem
title: The new omega one is the old aleph omega
status: published
origin: pipeline
deps: [lem-ground-aleph-n-is-countable-in-the-feferman-levy-model, lem-feferman-levy-bounded-layer-support, lem-feferman-levy-fixed-boolean-values-come-from-initial-layers, thm-forcing-theorem, def-cofinality, def-axiom-of-choice]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Chapter 10, Problem 3 and complete hint, printed p. 148", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the Feferman–Levy model $N$,

$$\omega_1^N=\aleph_omega^V.$$

## Facts & Assumptions

**Given:** Put $\kappa=\aleph_omega^V=\sup_{n<\omega}\aleph_n^V$ and regard all ground ordinals as the same ordinals in the transitive symmetric model.

[F1] [[lem-ground-aleph-n-is-countable-in-the-feferman-levy-model]] proves that every $\aleph_n^V$ is countable in $N$.

[F2] [[lem-feferman-levy-bounded-layer-support]] gives one $H_m$ supporting an HS name.

[F3] [[lem-feferman-levy-fixed-boolean-values-come-from-initial-layers]] reduces every $H_m$-fixed Boolean value to conditions restricted below layer $m$.

[F4] [[thm-forcing-theorem]] supplies the truth lemma relating the interpreted function to conditions in the generic filter.

[F5] [[def-cofinality]] fixes the ordinal and aleph conventions used for the limit $\kappa$ and for the later cofinality consequence.

[F6] [[def-axiom-of-choice]] is used only in the ground-model cardinal count of the set of finite initial-layer conditions.

## Proof

**Proof technique:** contradiction for uncountability of the ground limit, followed by leastness of $\omega_1$.

1.1 If $\alpha<\kappa$, then $\alpha<\aleph_n^V$ for some $n<\omega$. For $\alpha=0$ it is finite. Otherwise restrict the surjection from F1 by replacing values outside $\alpha$ with $0$; this is a surjection $\omega\twoheadrightarrow\alpha$ in $N$. Thus every ordinal below $\kappa$ is countable in $N$, and consequently $\kappa\le\omega_1^N$. [F1, F5]

1.2 Suppose for contradiction that some $f\in N$ is a surjection $\omega\twoheadrightarrow\kappa$. Choose an HS name $\dot f$ and use F2 to fix $m<\omega$ such that $H_m$ fixes it. For $k<\omega$ and $\alpha<\kappa$ let $u_{k,\alpha}=\lVert\dot f(\check k)=\check\alpha\rVert$. These Boolean values are fixed by $H_m$, because $\dot f$ and the check names are fixed. [assume-contra, F2]

1.3 Let $P_{<m}=\{p\mathbin{\upharpoonright}m:p\in P\}$. For each $k<\omega$ put $A_k=\{\alpha<\kappa:\exists q\in P_{<m}\ (q\le_Bu_{k,\alpha})\}$. Distinct $\alpha,\beta\in A_k$ require incompatible witnesses, since a condition cannot force two different values of the function at $k$. Choosing the least witness in a fixed ground well-order injects $A_k$ into $P_{<m}$. Ground AC and the finite-function calculation give $|P_{<m}|^V\le\aleph_m^V$, hence $|\bigcup_{k<\omega}A_k|^V\le\aleph_m^V<\kappa$. [F6, construct]

2.1 If $p\Vdash\dot f(\check k)=\check\alpha$, then $p\le_Bu_{k,\alpha}$, and F3 gives $p\mathbin{\upharpoonright}m\le_Bu_{k,\alpha}$; hence $\alpha\in A_k$. Because the alleged $f$ is surjective, F4 supplies such a $k$ and $p\in G$ for every $\alpha<\kappa$. Thus $\kappa=\bigcup_{k<\omega}A_k$, contradicting the strict bound in step 1.3. Therefore no such $f$ belongs to $N$, so $\kappa$ is uncountable in $N$. [F3, F4, step 1.2, step 1.3, discharge-contradiction]

3.1 Since $\omega_1^N$ is the least uncountable ordinal of $N$, step 2.1 gives $\omega_1^N\le\kappa$, while step 1.1 gives the reverse inequality. Hence $\omega_1^N=\kappa=\aleph_omega^V$. [step 1.1, step 2.1, discharge-contradiction: step 1.2] ∎
