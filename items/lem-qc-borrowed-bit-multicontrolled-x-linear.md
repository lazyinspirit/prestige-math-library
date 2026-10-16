---
id: lem-qc-borrowed-bit-multicontrolled-x-linear
kind: lemma
title: Linear Multicontrolled X with One Borrowed Wire
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - thm-qc-one-control-unitary-two-cnot
  - def-qc-cnot-and-control-target-order
  - def-qc-clean-and-dirty-ancillas
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, Lemmas 6.1, 7.2–7.3 and Corollary 7.4"
      url: https://arxiv.org/pdf/quant-ph/9503016
---

## Statement

For every integer $r\ge1$, an $r$-controlled $X$ on $r$ control wires and one target has an exact circuit of $O(r)$ arbitrary one-qubit gates and CNOTs when one additional borrowed wire is available. The circuit equals $C^r(X)\otimes I$ on the entire register: the borrowed wire is returned unchanged for every state, including states entangled with the controls, target, or an external register. No wire is initialized or measured.

## Facts & Assumptions

**Given:** Distinct wires, arbitrary one-qubit gates, exact CNOTs, and an additional wire with arbitrary initial state. Boolean addition is XOR, written $\oplus$, and multiplication is AND.

[F1] [[thm-qc-one-control-unitary-two-cnot]] supplies an exact controlled one-qubit unitary with two CNOTs and four arbitrary one-qubit gates: its proof uses target gates $A,B,C$ and one control phase gate.

[F2] [[def-qc-cnot-and-control-target-order]] specifies $(a,t)\mapsto(a,t\oplus a)$.

[F3] [[def-qc-clean-and-dirty-ancillas]] requires exact return of a borrowed wire.

[F4] [[def-qc-circuit-denotational-semantics]] composes chronological gates in reverse matrix order.

[F5] [[def-qc-elementary-circuit-resources]] counts gate occurrences.

[F6] [[thm-qc-computational-basis-orthonormal]] gives a basis of all bit words; equality on it implies equality of linear maps.

## Proof


1.1 An exact Toffoli has constant cost. Let $V=\frac12((1+i)I+(1-i)X)$. The orthogonal projectors $(I+X)/2,(I-X)/2$ show $V$ is unitary and $V^2=X$. With controls $a,b$, apply chronologically $C_b(V)$ to the target, $\mathrm{CNOT}_{a\to b}$, $C_b(V^*)$, $\mathrm{CNOT}_{a\to b}$, and $C_a(V)$. The bit $b$ returns, and the target exponent is $b-(b\oplus a)+a=2ab$, so its action is $X^{ab}$. By [F1] the three controlled gates and two CNOTs cost at most eight CNOTs and twelve one-qubit gates. No relative phase is discarded. [given, F1, F2, F4, algebra]

2.1 First construct an $s$-controlled $X$ with $s-2$ borrowed wires, for $s\ge3$. Call the controls $c_1,\ldots,c_s$, the borrowed bits $a_1,\ldots,a_{s-2}$, and the target $t$. Let $T_1$ toggle $a_1$ under $c_1,c_2$; for $2\le j\le s-2$, let $T_j$ toggle $a_j$ under $c_{j+1},a_{j-1}$. Let $Q$ toggle $t$ under $c_s,a_{s-2}$. Apply the list $T_1,\ldots,T_{s-2},Q,T_{s-2},\ldots,T_1$, followed by $T_2,\ldots,T_{s-2},Q,T_{s-2},\ldots,T_2$; for $s=3$ the second list is just $Q$. Each list restores every borrowed bit, since $Q$ changes only $t$ and the compute list is reversed afterward. [given, step 1.1, F2, F4, construct]

3.1 Let $u_j,v_j$ be the values of $a_j$ immediately before $Q$ in the first and second lists. Both lists begin with the same borrowed values. We have $u_1=a_1\oplus c_1c_2$, $v_1=a_1$ and, for $j\ge2$, $u_j=a_j\oplus c_{j+1}u_{j-1}$, $v_j=a_j\oplus c_{j+1}v_{j-1}$. Thus $u_j\oplus v_j=\prod_{h=1}^{j+1}c_h$ by induction. The two target toggles add to $c_s(u_{s-2}\oplus v_{s-2})=\prod_{h=1}^s c_h$. Controls and borrowed bits are unchanged. The two lists contain $(2s-3)+(2s-5)=4s-8$ exact Toffolis. For $s=2$ use one Toffoli; for $s=1$ use one CNOT. This auxiliary construction therefore costs $O(s)$ and uses at most $\max\{s-2,0\}$ borrowed wires. [step 2.1, step 1.1, F5, algebra, induction]

4.1 For $r\ge3$, partition the controls into $A,B$ of sizes $p=\lceil r/2\rceil$, $q=\lfloor r/2\rfloor$, and call the extra wire $z$. Put $a=\prod_{j\in A}c_j$, $b=\prod_{j\in B}c_j$. Apply an $A$-controlled $X$ into $z$, a $(B\cup\{z\})$-controlled $X$ into $t$, and repeat these two calls in that order. The first kind can borrow from $B\cup\{t\}$ because $q+1\ge p-2$; the second can borrow from $A$ because $p\ge q-1$. Step 3.1 restores these temporary borrowed wires after each call, for their actual arbitrary values at that call. No wire beyond the original $r+2$ is used. [given, step 3.1, construct, algebra]

5.1 The four ideal calls send $z$ to $z\oplus a$ and back, while toggling $t$ by $b(z\oplus a)\oplus bz=ab$. Thus their action is precisely $C^r(X)$ with $z$ and every control returned. The two calls of each kind cost $O(p)+O(q+1)=O(r)$. For $r=1,2$, use [F2] or step 1.1 and leave $z$ untouched. Equality on every basis word extends by [F6] to $C^r(X)\otimes I_z$; tensoring with an external identity also proves the entangled-input claim and the return condition [F3]. [step 4.1, step 3.1, step 1.1, F2, F3, F5, F6, algebra] ∎

