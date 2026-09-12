---
id: prop-inducing-preserves-ergodicity
kind: proposition
title: Inducing an ergodic system gives an ergodic system
deps: ["thm-induced-transformation-preserves-the-restricted-measure", "prop-ergodic-positive-sets-sweep-out-almost-every-point", "thm-ergodicity-and-invariant-functions"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7(2), pp.28–29
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $T$ is an ergodic probability-preserving transformation and $\mu(E)>0$, then $T_E$ on $E_\infty$ is ergodic for $\mu_E$.

## Facts & Assumptions

[F1] The induced transformation preserves its probability measure. [[thm-induced-transformation-preserves-the-restricted-measure]].

[F2] Positive sets in an ergodic probability system have conull forward entrance sets. [[prop-ergodic-positive-sets-sweep-out-almost-every-point]].

[F3] An everywhere invariant finite real measurable function is a.e. constant, and this property characterizes ergodicity. [[thm-ergodicity-and-invariant-functions]].

## Proof

**Given:** If $T$ is an ergodic probability-preserving transformation and $\mu(E)>0$, then $T_E$ on $E_\infty$ is ergodic for $\mu_E$.

1.1 Let $U=\bigcup_{n\ge0}T^{-n}E_\infty$. It is measurable and conull by positive-set sweep-out. It is strictly invariant: if Tx eventually enters the core then x does; if x eventually enters at a positive time then Tx does, while if x is already in the core, its next positive return belongs to the core. Thus $T^{-1}U=U$. On U let $q(x)=\min\{n\ge0:T^nx\in E_\infty\}$. The fibers $\{q=n\}=T^{-n}E_\infty\setminus\bigcup_{j<n}T^{-j}E_\infty$ are measurable. [F1, F2]

2.1 Take any finite real measurable f on the core with $f\circ T_E=f$ everywhere. Define $F(x)=f(T^{q(x)}x)$ for $x\in U$ and $F(x)=0$ otherwise. The measurable q-fibers make F measurable. If $x\in U\setminus E_\infty$, then $q(Tx)=q(x)-1$, hence F(Tx)=F(x). If $x\in E_\infty$, then $q(Tx)=r_E(x)-1$: before the first return there is no E visit, and the first return is in the core. Therefore $F(Tx)=f(T_Ex)=f(x)=F(x)$. On $X\setminus U$, both x and Tx are outside U and F is zero. [step 1.1, F1]

3.1 Ergodicity of T and the everywhere invariant-function criterion give a constant c with F=c almost everywhere. Since F=f on the core, f=c for $\mu_E$-almost every point there. The same criterion applied to the probability-preserving T_E now proves its ergodicity. Working with everywhere invariant functions avoids choosing representatives for almost-everywhere invariance. [step 2.1, F1, F3] ∎

