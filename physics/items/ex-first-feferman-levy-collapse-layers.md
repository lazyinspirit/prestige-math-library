---
id: ex-first-feferman-levy-collapse-layers
kind: example
title: The first Feferman–Levy collapse layers
status: published
origin: pipeline
deps: [def-feferman-levy-symmetric-collapse-system, def-feferman-levy-real-layers, lem-feferman-levy-real-layer-ground-cardinality-bound, lem-ground-aleph-n-is-countable-in-the-feferman-levy-model, lem-each-feferman-levy-real-layer-is-countable, thm-feferman-levy-reals-are-a-countable-union-of-countable-sets, thm-feferman-levy-reals-remain-uncountable]
proof_strategy: contradiction
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6, printed pp. 142–144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

The first layers $R_0,R_1,R_2$ illustrate how every real name is eventually
captured although no single sequence of enumerations of all the layers exists
in the Feferman--Levy model.

## Facts & Assumptions

**Given:** The Feferman--Levy model $N$. This is a finite, choice-free calculation inside $N$; the ground-model uses of AC and GCH have already been declared by the construction suppliers.

[F1] [[def-feferman-levy-symmetric-collapse-system]] defines $H_m$ to fix pointwise the permutation action on exactly the forcing layers $n<m$.

[F2] [[def-feferman-levy-real-layers]] identifies $R_m$ with the reals having a Boolean name fixed by $H_m$ and puts the whole sequence $\langle R_m:m<\omega\rangle$ in $N$.

[F3] [[lem-feferman-levy-real-layer-ground-cardinality-bound]] supplies for each fixed $m$ a surjection $e_m:\aleph_{m+1}^V\twoheadrightarrow R_m$ in $N$.

[F4] [[lem-ground-aleph-n-is-countable-in-the-feferman-levy-model]] supplies the canonical layer-$n$ surjection $f_n:\omega\twoheadrightarrow\aleph_n^V$ in $N$.

[F5] [[lem-each-feferman-levy-real-layer-is-countable]] verifies that the composition of the preceding maps makes each fixed $R_m$ countable.

[F6] [[thm-feferman-levy-reals-are-a-countable-union-of-countable-sets]] proves $\mathbb R^N=\bigcup_{m<\omega}R_m$ while explicitly not choosing the surjections simultaneously.

[F7] [[thm-feferman-levy-reals-remain-uncountable]] proves that $\mathbb R^N$ is not countable.

## Proof

**Proof technique:** explicit first-layer calculation followed by contradiction for a simultaneous enumeration.

1.1 From F1, $H_0=\mathscr G$, $H_1$ fixes forcing layer $0$, and $H_2$ fixes layers $0$ and $1$. Thus F2 says that $R_0$ uses no generic collapse layer, $R_1$ may use only layer $0$, and $R_2$ may use only layers $0$ and $1$. More explicitly, the fixed-value theorem built into F2 identifies their Boolean coefficients with the complete algebras of $P\mathbin{\upharpoonright}0$, $P\mathbin{\upharpoonright}1$, and $P\mathbin{\upharpoonright}2$, respectively. [F1, F2]

2.1 Instantiating F3 and F4 gives the three concrete composites $$g_0=e_0\circ f_1:\omega\twoheadrightarrow R_0,\qquad g_1=e_1\circ f_2:\omega\twoheadrightarrow R_1,\qquad g_2=e_2\circ f_3:\omega\twoheadrightarrow R_2.$$ Here $e_m$ codes the initial-layer Boolean names, while the next unused canonical collapse $f_{m+1}$ makes its ordinal domain countable in $N$; F5 verifies this composition in general. This is a finite list of specified maps, so forming the triple $(g_0,g_1,g_2)$ requires no Choice. [F3, F4, F5, step 1.1]

3.1 F6 says every real lies in some later $R_m$. Suppose, however, that $N$ contained a sequence $\langle h_m:m<\omega\rangle$ with each $h_m:\omega\twoheadrightarrow R_m$. Then $q(m,k)=h_m(k)$ maps $\omega\times\omega$ onto $\bigcup_mR_m=\mathbb R^N$; repeated or equal layers do not affect surjectivity. Composing with the explicit Cantor pairing bijection between $\omega$ and $\omega\times\omega$ would make the reals countable, contradicting F7. Therefore the individual maps illustrated in step 2.1 cannot be assembled for all layers inside $N$. The obstruction is precisely simultaneous countable choice, not failure of any fixed layer enumeration. [F6, F7, step 2.1, assume-contra, discharge-contradiction] ∎
