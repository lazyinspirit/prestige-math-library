---
id: lem-monomial-inequivalence-criterion
kind: lemma
title: "Mackey-Shoda non-equivalence criterion for monomial representations"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - lem-monomial-induced-representations-transversal-model-properties
  - def-commensurator-unitary-character-and-monomial-induced-representation
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 2
axiom_use: "AC is the stated hypothesis. Its only role here is the selection of the two right transversals T1, T2 used by the monomial model; once those transversals are fixed, the orbit, adjoint and stabiliser computations use no further choice. No field or conull set is selected, and no choice is used in the finite-index bookkeeping."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.F: Theorem 1.F.16 (non-equivalence of monomial representations) and its complete proof, printed pp. 56-57; the adjoint computation is the one appearing in the proof of Theorem 1.F.11 on printed p. 54 and is expanded locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $G$ be a topological group, $H_1,H_2\le G$ open subgroups and $\chi_1,\chi_2$ unitary characters of $H_1,H_2$. Assume that for every $g\in G$ such that $g^{-1}H_2g\cap H_1$ has finite index in both $g^{-1}H_2g$ and $H_1$, the restrictions of $\chi_2^g$ and $\chi_1$ to $g^{-1}H_2g\cap H_1$ do not coincide. Then $\operatorname{Ind}_{H_1}^G\chi_1$ and $\operatorname{Ind}_{H_2}^G\chi_2$ are not equivalent. In particular, if $g^{-1}H_2g\cap H_1$ has infinite index in $H_1$ for every $g\in G$ (for instance if it is trivial and $H_1$ is infinite), then the two monomial representations are inequivalent whenever $H_1\neq H_2$ up to the stated intersection pattern.

## Facts & Assumptions

**Given:** AC; a topological group $G$; open subgroups $H_1,H_2\le G$; unitary characters $\chi_1,\chi_2$; and the monomial representations $\pi_i=\operatorname{Ind}_{H_i}^G\chi_i$ in the transversal model of [[def-commensurator-unitary-character-and-monomial-induced-representation]], with right transversals $T_i\ni e$ and cocycles $\alpha_i$.

[F1] AC supplies a choice function for every family of nonempty sets; applied to the left cosets it produces the transversals $T_1,T_2$ fixed in the model ([[def-axiom-of-choice]]).

[F2] In the transversal model, $t g=\alpha_i(t,g)(t\cdot_i g)$ uniquely with $\alpha_i(t,g)\in H_i$ and $t\cdot_i g\in T_i$, the representation acts by $\pi_i(g)f(t)=\chi_i(\alpha_i(t,g))f(t\cdot_i g)$ on $\ell^2(T_i)$, the vectors $\delta_e$ are cyclic with $\pi_i(t^{-1})\delta_e=\delta_t$, and two representations are equivalent by a unitary intertwiner, which is in particular a nonzero bounded operator intertwining them ([[def-commensurator-unitary-character-and-monomial-induced-representation]], [[def-strongly-continuous-unitary-representation]]).

[F3] For a bounded intertwiner $S:\ell^2(T_1)\to\ell^2(T_2)$ of $\pi_1$ with $\pi_2$ and $f:=S\delta_e$: $f=0$ exactly when $S=0$; $f(t)=0$ for every $t\in T_2$ whose $H_1$-orbit under $\cdot_2$ is infinite; and if $f(t)\neq0$ and $t\cdot_2h=t$ for some $h\in H_1$, then $tht^{-1}\in H_2$ and $\chi_1(h)=\chi_2(tht^{-1})$ ([[lem-monomial-induced-representations-transversal-model-properties]]).

## Proof

**Proof technique:** contraposition in the transversal model, using the adjoint of a putative unitary intertwiner.

**Given:** AC; the topological group $G$; the open subgroups $H_1,H_2$; the characters $\chi_1,\chi_2$; right transversals $T_1,T_2$ with $e\in T_i$; and $\pi_i=\operatorname{Ind}_{H_i}^G\chi_i$ on $\ell^2(T_i)$.

1.1 Assume, toward the contrapositive, that $\pi_1$ and $\pi_2$ are unitarily equivalent, and let $S:\ell^2(T_1)\to\ell^2(T_2)$ be a unitary intertwiner, so that $S\neq0$ and $S^*=S^{-1}$ satisfies $S^*\pi_2(g)=\pi_1(g)S^*$ for all $g\in G$. Put $f:=S\delta_e\in\ell^2(T_2)$; by the first clause of [F3], $f\neq0$. [assume-hyp, contrapositive-reduce, F1, F2, F3]

2.1 The second clause of [F3] shows that $f$ vanishes on every $t\in T_2$ with infinite $H_1$-orbit, so we may choose $t\in T_2$ with $f(t)\neq0$ and finite $H_1$-orbit. [F3, step 1.1]

3.1 For $h\in H_1$ the identity $t\cdot_2h=t$ holds exactly when $tht^{-1}=\alpha_2(t,h)\in H_2$, by the unique factorization $th=\alpha_2(t,h)(t\cdot_2h)$ of [F2]; hence the stabiliser of $t$ in $H_1$ equals $H_1\cap t^{-1}H_2t$, and finiteness of the $H_1$-orbit gives $[H_1:t^{-1}H_2t\cap H_1]<\infty$. [F2, step 2.1]

4.1 Put $t^*:=e\cdot_1t^{-1}\in T_1$ and $f':=S^*\delta_e\in\ell^2(T_1)$. The model formula of [F2] for $\pi_1$ gives $\pi_1(t)\delta_e=\chi_1(\alpha_1(t^*,t))\delta_{t^*}$, and therefore $\delta_{t^*}=\chi_1(\alpha_1(t^*,t))^{-1}\pi_1(t)\delta_e$ and $S\delta_{t^*}=\chi_1(\alpha_1(t^*,t))^{-1}\pi_2(t)f$, since $S\pi_1(t)=\pi_2(t)S$. It follows that $|f'(t^*)|=|\langle S^*\delta_e,\delta_{t^*}\rangle|=|\langle\delta_e,S\delta_{t^*}\rangle|=|\langle\delta_e,\pi_2(t)f\rangle|=|\langle\pi_2(t)^*\delta_e,f\rangle|=|\langle\delta_t,f\rangle|=|f(t)|\neq0$, because $|\chi_1(\alpha_1(t^*,t))|=1$ and $\pi_2(t)^*=\pi_2(t)^{-1}=\pi_2(t^{-1})$ has $\pi_2(t^{-1})\delta_e=\delta_t$. Applying the second clause of [F3] to the intertwiner $S^*$ of $\pi_2$ with $\pi_1$ shows that $t^*$ has finite $H_2$-orbit. [F2, F3, step 3.1]

5.1 The stabiliser of $t^*$ in $H_2$ is $H_2\cap (t^*)^{-1}H_1t^*$ by the same computation as step 3.1, applied to $\pi_1$ and the subgroup $H_2$ acting on $T_1$. Since $t^*=e\cdot_1t^{-1}$ lies in the coset $H_1t^{-1}$, there is $h_1\in H_1$ with $t^*=h_1t^{-1}$, hence $(t^*)^{-1}H_1t^*=tH_1t^{-1}$ and $H_2\cap(t^*)^{-1}H_1t^*=H_2\cap tH_1t^{-1}$. Step 4.1 therefore gives $[H_2:tH_1t^{-1}\cap H_2]<\infty$, and conjugating by $t$ gives $[t^{-1}H_2t:t^{-1}H_2t\cap H_1]<\infty$; with step 3.1, $t^{-1}H_2t\cap H_1$ has finite index in both $t^{-1}H_2t$ and $H_1$. [F2, step 4.1]

6.1 Let $h\in t^{-1}H_2t\cap H_1$; then $tht^{-1}\in H_2$, so $t\cdot_2h=t$ by step 3.1, and $f(t)\neq0$. The third clause of [F3] therefore gives $\chi_1(h)=\chi_2(tht^{-1})=\chi_2^t(h)$: the restrictions of $\chi_2^t$ and $\chi_1$ to $t^{-1}H_2t\cap H_1$ coincide, although this intersection has finite index in both $t^{-1}H_2t$ and $H_1$ by step 5.1. This contradicts the hypothesis of the Statement at $g=t$; the contrapositive is proved, so the two representations are not equivalent. [F3, step 5.1, discharge-contrapositive]

7.1 Finally, if $g^{-1}H_2g\cap H_1$ has infinite index in $H_1$ for every $g\in G$, then no $g$ satisfies the finite-index hypothesis of the Statement, so the criterion applies vacuously and the two representations are inequivalent; this covers in particular the case in which the intersection is trivial and $H_1$ is infinite, since then $[H_1:\{e\}]=|H_1|=\infty$. [step 6.1, algebra] ∎

## Boundary cases

If $S=0$ the equivalence assumption fails at step 1.1, so the contrapositive hypothesis is not met. If $H_1=H_2=H$ and $\chi_1=\chi_2$, the hypothesis fails at every $g\in\operatorname{Comm}_G(H)\setminus H$ for which the restrictions coincide, consistent with the self-equivalence of $\pi_1$ with itself. The empty intersection case $g^{-1}H_2g\cap H_1=\{e\}$ has the restrictions coinciding automatically on the trivial group, and it is excluded by the finite-index requirement unless $H_1$ is finite; this is exactly the vacuous case of step 7.1. Degenerate one-point transversals occur only when $H_i=G$, in which case the monomial representations are one-dimensional characters and the criterion reduces to inequality of characters. No endpoint parameter occurs, and the only Choice used is the transversal selection recorded in [F1].

## Source qualifications

Bekka-de la Harpe, Theorem 1.F.16 and its proof, printed pp. 56-57, states the criterion and carries out the contrapositive: it uses Lemma 1.F.10(1) and (4)-(5) and the adjoint computation from the proof of Theorem 1.F.11 (printed p. 54), which is reproduced in step 4.1 above. The source writes the scalar in the adjoint identity as $\chi_1(\alpha_1(t^*,t))$ without isolating its modulus; only the modulus enters here, so the calculation is unaffected. The final "in particular" clause records the vacuous case of the hypothesis.
