---
id: lem-qa-33-geometric-soundness-bound
kind: lemma
title: Geometric soundness bound for a history Hamiltonian
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - lem-qa-33-feynman-propagation-path-gap
  - lem-qa-33-feynman-input-output-penalties
  - def-qa-33-qma-promise-class
  - thm-qa-33-qma-amplification-entangled-witness-soundness
justified_by: []
proof_strategy: direct
axiom_use: None; the overlap and two-projection bounds are finite-dimensional inequalities.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, geometric lemma and soundness proof, PDF pp. 13–17
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §4, propagation and penalty bounds, PDF pp. 5–8
---

## Statement

Fix a NO input $x$ and an amplified, input-specific verifier circuit $V_x$ with soundness $s\le1/8$. Its only unrestricted initial register is the witness: every other work qubit belongs to the zero-initialized set $A$ checked by $H_{in}$. In particular, any classical-input scratch registers start at zero and the circuit loads the fixed string $x$ before verification; the output predicate is specialized to $x$. Let $N=T+1$. In the legal-clock history space let $S=\ker(H_{in}+H_{out})$ and $T_0=\ker(H_{prop})$. Then for every unit history vector $v\in T_0$,
$$\|P_Sv\|^2\le1-\frac1{2N}.$$
Consequently the least eigenvalue of $H_{in}+H_{out}+H_{prop}$ on legal clocks is at least $1/(2N^3)$. The proof allows arbitrary initial ancilla states in $T_0$; the QMA soundness premise is applied only to the clean-ancilla component.

## Facts & Assumptions

**Given:** The input-specific NO verifier with soundness $s\le1/8$, all nonwitness initial wires checked by $H_{in}$, its legal-clock history Hamiltonian, and $N=T+1$.

[F1] [[lem-qa-33-feynman-propagation-path-gap]]: $T_0$ is the image of the linear history map, which preserves norms; in particular its unit vectors are exactly histories of unit initial vectors. The propagation gap is at least $2/N^2$.

[F2] [[lem-qa-33-feynman-input-output-penalties]]: the squared norm removed by projecting a history onto $S$ is $(p_{bad}+p_{rej})/N$.

[F3] [[def-qa-33-qma-promise-class]]: for the fixed NO input $x$ and any witness, acceptance is at most $s$. By the input-specific initialization hypothesis, this applies to every normalized vector in the zero-$A$ subspace.

[F4] [[thm-qa-33-qma-amplification-entangled-witness-soundness]]: the verifier can be amplified to the stated inverse-polynomially small soundness while preserving polynomial size.

[F5] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: $H_{in}$ is a sum of ancilla-one projectors restricted to clock time zero, and $H_{out}$ is $N$ times the reject projector restricted to clock time $T$.

## Proof

1.1 The amplification supplied by [F4] lets us fix a verifier with NO soundness $s\le1/8$. Write a normalized initial computation vector as $\phi=\phi_c+\phi_d$, where $\phi_c$ has clean verifier ancillas and $\phi_d$ is orthogonal to that subspace; set $\alpha=\|\phi_c\|$ and $\beta=\|\phi_d\|$, so $\alpha^2+\beta^2=1$ and $p_{bad}=\beta^2$. Let $K$ be the verifier's accept Kraus map, which is a contraction. By [F3], $\|K\phi_c\|\le\sqrt{s}\alpha$; hence the triangle inequality gives $p_{acc}=\|K\phi\|^2\le(\sqrt{s}\alpha+\beta)^2$. Therefore $p_{bad}+p_{rej}=\beta^2+1-p_{acc}\ge1-s\alpha^2-2\sqrt{s}\alpha\beta.$ The symmetric matrix $\begin{pmatrix}s&\sqrt{s}\\\sqrt{s}&0\end{pmatrix}$ has largest eigenvalue $s/2+\sqrt{s+s^2/4}$; its Rayleigh quotient at $(\alpha,\beta)$ bounds the subtracted term. This eigenvalue is increasing for $s\ge0$, and at $s=1/8$ it is $(1+\sqrt{33})/16<1/2$ because $\sqrt{33}<7$. Thus $p_{bad}+p_{rej}\ge1/2$. [F2, F3, F4, algebra]

2.1 By [F2], every unit $v\in T_0$ has $\|P_Sv\|^2=1-(p_{bad}+p_{rej})/N\le1-1/(2N)$. Put $c=\|P_SP_{T_0}\|$; then $c^2\le1-1/(2N)$ and $1-c\ge1-\sqrt{1-1/(2N)}\ge1/(4N).$ For any two orthogonal projections $P,Q$, the map $v\mapsto(Pv,Qv)$ has squared norm operator $P+Q$. On $\operatorname{ran}(P)\oplus\operatorname{ran}(Q)$ its block matrix has diagonal $I$ and off-diagonal norm $\|PQ\|$, so $P+Q\le(1+\|PQ\|)I$. Taking $P=P_S,Q=P_{T_0}$ gives $P_{S^\perp}+P_{T_0^\perp}=2I-P_S-P_{T_0}\ge(1-c)I.$ By [F5], the input penalty has positive integer eigenvalues on the dirty-ancilla sector at time zero, while the output penalty has eigenvalue $N\ge1$ on the reject sector at time $T$; these clock sectors are orthogonal. Thus $H_{in}+H_{out}\ge P_{S^\perp}$. Also $H_{prop}\ge(2/N^2)P_{T_0^\perp}$ by [F1], and $2/N^2\le1$. The sum is at least $(2/N^2)(1-c)I\ge1/(2N^3)I$. This proves the ground-energy bound. [F1, F2, F5, step 1.1, algebra] ∎
