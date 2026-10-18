---
id: lem-pe11-hcurl-weak-limit
kind: lemma
title: Weak graph limits preserve zero tangential H(curl)
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-pde-l2-control-space-separable
  - lem-separable-hilbert-bounded-sequence-weak-subsequence
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete
        lecture notes"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Section 2, pp. 6–8, and Section 3, pp. 8–10: PEC curl spaces,
        kernel/gauge and distributional de Rham context only. The precise local
        auxiliary claim and complete proof here are supplied independently from
        the listed canonical Facts; this source is not a proof of the weak-graph
        lemma or the infinite-dimensional construction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^3$ be a bounded open
set. Suppose $u_n\in H_0(\operatorname{curl};\Omega)$,
$u_n\to u$ strongly in $L^2(\Omega;\mathbb R^3)$, and
$\sup_n\|\operatorname{curl}u_n\|_2<\infty$. Then a subsequence of the
curls converges weakly in $L^2$ to $\operatorname{curl}u$, the limit $u$
belongs to $H(\operatorname{curl};\Omega)$, and in fact
$u\in H_0(\operatorname{curl};\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice; the bounded open set $\Omega$; the distributional graph-space definition; and the sequence in the statement.

[A1] Countable Choice is the stated hypothesis of the weak-subsequence supplier. ([[def-countable-choice]])

[F1] $L^2(\Omega;\mathbb R^3)$ is a separable real Hilbert space: the scalar $L^2$ space on a bounded measurable set is separable and Hilbert, and a finite product of separable Hilbert spaces is separable and Hilbert. ([[lem-pde-l2-control-space-separable]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F2] Every bounded sequence in a separable real Hilbert space has a weakly convergent subsequence. ([[lem-separable-hilbert-bounded-sequence-weak-subsequence]])

[F3] The distributional curl is characterized by $\int_\Omega\operatorname{curl}v\cdot\varphi\,dx =\int_\Omega v\cdot\operatorname{curl}\varphi\,dx$ for every compactly supported smooth test vector field $\varphi$. ([[def-na-hcurl-space]])

[F4] $H_0(\operatorname{curl})$ is a norm-closed linear subspace of the $H(\operatorname{curl})$ graph Hilbert space, by its closure definition; a closed subspace of a Hilbert space is the orthogonal complement of its orthogonal complement. ([[def-na-zero-tangential-hcurl]], [[thm-orthogonal-decomposition-by-a-closed-subspace]])

## Proof

**Given:** The sequence and assumptions in the statement.

1.1 The graph of distributional curl is closed in $L^2(\Omega;\mathbb R^3)\times L^2(\Omega;\mathbb R^3)$: if $v_j\to v$ and $\operatorname{curl}v_j\to w$ in $L^2$, [F3] gives $\int_\Omega w\cdot\varphi\,dx=\int_\Omega v\cdot\operatorname{curl}\varphi\,dx$ for each test $\varphi$, so $\operatorname{curl}v=w$. By [F1] the product is Hilbert, hence its closed graph is Hilbert with the graph inner product. Thus $H(\operatorname{curl};\Omega)$ is a Hilbert space. [F1, F3, given, algebra]

1.2 The curls are bounded in the separable Hilbert space of [F1]. By [F2]
choose a subsequence, still indexed by $n$, with $\operatorname{curl}u_n\rightharpoonup w$ weakly in $L^2$. For every test $\varphi$, strong convergence of $u_n$ and [F3] give $\int_\Omega w\cdot\varphi\,dx=\lim_n\int_\Omega\operatorname{curl}u_n\cdot\varphi\,dx=\lim_n\int_\Omega u_n\cdot\operatorname{curl}\varphi\,dx=\int_\Omega u\cdot\operatorname{curl}\varphi\,dx$. Therefore $\operatorname{curl}u=w$ distributionally and $u\in H(\operatorname{curl})$. [A1, F1, F2, F3, step 1.1, choose]

2.1 The strong convergence of $u_n$ and weak convergence of their curls show that $u_n\rightharpoonup u$ in the graph Hilbert space: for every $v\in H(\operatorname{curl})$, $\langle u_n,v\rangle_{H(\operatorname{curl})}=(u_n,v)_{L^2}+(\operatorname{curl}u_n,\operatorname{curl}v)_{L^2}\longrightarrow(u,v)_{L^2}+(w,\operatorname{curl}v)_{L^2}=\langle u,v\rangle_{H(\operatorname{curl})}$. For every $y\in H_0(\operatorname{curl})^\perp$, each $\langle u_n,y\rangle_{H(\operatorname{curl})}=0$; weak convergence gives $\langle u,y\rangle_{H(\operatorname{curl})}=0$. By [F4], $u\in(H_0(\operatorname{curl})^\perp)^\perp=H_0(\operatorname{curl})$. [F4, step 1.2, algebra] ∎
