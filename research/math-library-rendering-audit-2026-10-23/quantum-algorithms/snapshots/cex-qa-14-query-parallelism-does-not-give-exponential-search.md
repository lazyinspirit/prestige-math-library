---
id: cex-qa-14-query-parallelism-does-not-give-exponential-search
kind: counterexample
title: One uniform phase query gives small trace-distance advantage
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - thm-qa-14-bbbv-search-lower-bound
  - def-qa-11-marked-search-problem
  - def-qc-dirac-notation-conversion
  - def-qc-trace-distance
  - lem-qc-pure-state-trace-distance
  - thm-qc-hermitian-trace-norm-positive-negative-parts
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-qc-unit-vector-projector-is-density
  - thm-qc-computational-basis-orthonormal
proof_strategy: direct
axiom_use: None; all states and trace norms are finite-dimensional and the mixtures are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): the aggregate query lower bound contextualizing the one-query example."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§11.1, printed pp.89–90 (PDF pp.101–102): query model and unstructured-search lower-bound context."
---

## Statement refuted

The claim that a uniform address superposition followed by one phase query can find a uniformly unknown marked address with success bounded below by a positive constant for arbitrarily large dyadic $N=2^n$ is false. For any address-valued final measurement, its average success over a uniform marked coordinate is at most $1/N+2\sqrt{N-1}/N$. The calculations below concern exactly that initial state and one phase query; they do not assert a lower bound for algorithms that choose another initial state or query schedule.

## Facts & Assumptions

**Given:** A dyadic address count $N=2^n$, a uniform address state on its $N$ basis vectors, the phase oracle for one marked coordinate, and the finite-dimensional trace-distance conventions.

[F1] [[def-qa-11-marked-search-problem]]: the phase oracle changes the sign of a marked address and fixes each unmarked address.

[F2] [[thm-qc-computational-basis-orthonormal]]: the address vectors $|0\rangle,\ldots,|N-1\rangle$ are an orthonormal basis.

[F3] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|z=\langle z,v\rangle_{\rm root}u$.

[F4] [[thm-qc-unit-vector-projector-is-density]]: a unit vector's rank-one projector is a density operator.

[F5] [[def-qc-trace-distance]]: $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$ for density operators.

[F6] [[lem-qc-pure-state-trace-distance]]: for unit vectors, $D(P_u,P_v)=\sqrt{1-|\langle u|v\rangle_D|^2}$.

[F7] [[thm-qc-hermitian-trace-norm-positive-negative-parts]]: for self-adjoint trace-zero $X$, $\|X\|_1=2\operatorname{tr}(X_+)=2\operatorname{tr}(X_-)$.

[F8] [[thm-qc-measurement-variation-at-most-trace-distance]]: the total variation distance between the outcome laws of any finite measurement is at most the trace distance.

[F9] [[thm-qa-14-bbbv-search-lower-bound]]: distinguishing empty input from an unknown one-marked input requires order-$\sqrt N$ standard bit queries.

## Counterexample

1.1 Let $|s\rangle=N^{-1/2}\sum_{j=0}^{N-1}|j\rangle$, $P_s=|s\rangle\langle s|$, and let the fixed marked coordinate be $i$. Its query address is $i-1$, so the phase query $O_i=I-2|i-1\rangle\langle i-1|$ sends $s$ to the unit vector $\psi_i=s-2|i-1\rangle/\sqrt N$ because it only flips one basis sign; set $P_{\psi_i}=|\psi_i\rangle\langle\psi_i|$. Orthonormality [F2] gives $\langle s,\psi_i\rangle_D=1-2/N$; [F5]–[F6] give $D(P_s,P_{\psi_i})=\sqrt{1-(1-2/N)^2}=2\sqrt{N-1}/N=O(N^{-1/2})$. This tends to zero with $N$. [F1, F2, F4, F5, F6, algebra]

1.2 Suppose instead the mark is unknown and uniform on $\{1,\ldots,N\}$. Each $P_{\psi_i}$ is a density operator by [F4], so their finite average $\rho=N^{-1}\sum_iP_{\psi_i}$ is self-adjoint, nonnegative, and trace one. Writing $e_i=|i-1\rangle$, expansion gives $P_{\psi_i}=P_s-\frac2{\sqrt N}(|s\rangle\langle e_i|+|e_i\rangle\langle s|)+\frac4N|e_i\rangle\langle e_i|$. The two cross sums each equal $\sqrt N P_s$, and $\sum_i|e_i\rangle\langle e_i|=I$ by [F2]–[F3], so $\rho=(1-4/N)P_s+4I/N^2$. Then $X=\rho-P_s$ has eigenvalue $-4(N-1)/N^2$ on $\operatorname{span}\{s\}$ and $4/N^2$ on $s^\perp$ of dimension $N-1$; their sum with multiplicity is zero, so $X$ is trace-zero. Its negative part is $X_-=(4(N-1)/N^2)P_s$, whose trace is $4(N-1)/N^2$ because $P_s$ has trace one. By [F5] and [F7], $D(\rho,P_s)=\tfrac12\|X\|_1=4(N-1)/N^2=O(N^{-1})$. If $N=1$, $s^\perp$ has dimension zero and the formula gives distance zero. [F2, F3, F4, F5, F7, algebra]

2.1 Fix an address-valued final measurement, let $r_i$ be its probability of output $i$ on $P_s$, and let $p_i(i)$ be its probability of outputting $i$ on $P_{\psi_i}$. The event form of [F8] and step 1.1 give $p_i(i)\le r_i+2\sqrt{N-1}/N$. Since $\sum_i r_i\le1$, the average success for a uniformly unknown marked coordinate is at most $N^{-1}+2\sqrt{N-1}/N$, which tends to zero. Separately, [F8] and step 1.2 bound the total-variation change between the empty-input law and the uniform-mark mixture law by $4(N-1)/N^2$, so this specified experiment also has vanishing decision advantage. The lower bound [F9] concerns arbitrary algorithms and is proved independently; it is not inferred from this example. [F8, F9, step 1.1, step 1.2, algebra] ∎
