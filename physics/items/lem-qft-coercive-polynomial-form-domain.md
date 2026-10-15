---
id: lem-qft-coercive-polynomial-form-domain
kind: lemma
domain: mathematics
title: Coercive polynomial form completion and injection
status: published
origin: pipeline
dependency_level: 1
deps: [def-qft-regulated-polynomial-hamiltonian, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, thm-cauchy-schwarz-in-an-inner-product-space, def-countable-choice]
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-c-c-infinity-rn-is-dense-in-l-p-of-rn: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3, pp.76–83"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapters 4 and 8, pp.27–32 and 48–50"
      url: "https://arxiv.org/pdf/1203.2344v1"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice. Use the finite data and notation of
[[def-qft-regulated-polynomial-hamiltonian]]: $N\ge1$,
$H_N=L^2(\mathbb R^N,dq;\mathbb C)$, $D_0=C_c^\infty(\mathbb R^N;\mathbb C)$,
and $W=V+C_0+1\ge1+c|q|^2$. For $u,v\in D_0$ define
$$a(u,v):=\sum_{j=1}^N a_j\int_{\mathbb R^N}(\partial_j u)\overline{\partial_jv}\,dq+\int_{\mathbb R^N}(W+1)u\overline v\,dq,$$
and $\|u\|_Q:=a(u,u)^{1/2}$. Let $Q$ be the completion of this inner-product
space, constructed as equivalence classes of $\|\cdot\|_Q$-Cauchy sequences.
Then $Q$ is a complex Hilbert space and the map sending a Cauchy class to its
$L^2$ limit is a continuous injective linear map $Q\hookrightarrow H_N$ with
dense image. Each $u\in Q$ has weak derivatives $\partial_j u\in L^2$ and a
weighted function $\sqrt{W+1}\,u\in L^2$, and
$$\|u\|_Q^2=\sum_{j=1}^N a_j\|\partial_j u\|_2^2+\|\sqrt{W+1}\,u\|_2^2.$$
Here $g_j=\partial_j u$ means explicitly that
$\int u\,\overline{\partial_j\varphi}=-\int g_j\overline\varphi$ for every
$\varphi\in D_0$.

## Facts & Assumptions

**Given:** Countable Choice, the data of [[def-qft-regulated-polynomial-hamiltonian]], and the $L^2$ and density results below.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; only countably many representatives are selected in the completion argument.

[F1] [[def-qft-regulated-polynomial-hamiltonian]]: $H_N$ is complex $L^2$ with first-variable-linear integral pairing, $D_0=C_c^\infty$, and $W=V+C_0+1\ge1+c|q|^2$.

[F2] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: under Countable Choice, $H_N$ is complete for $\|\cdot\|_2$ and $\langle u,v\rangle=\int u\overline v\,dq$ is its inner product.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ in $H_N$.

[F4] [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]]: under Countable Choice and for $p=2$, $D_0$ is dense in $H_N$.

## Proof

**Proof technique:** direct.

1.1 Since $W+1\ge2$ and every $a_j>0$, $a$ is a Hermitian positive-definite sesquilinear form on $D_0$: in particular $a(u,u)=\sum_j a_j\|\partial_j u\|_2^2+\|\sqrt{W+1}\,u\|_2^2\ge2\|u\|_2^2$, and $a(u,u)=0$ forces $u=0$ in $H_N$. Thus its Cauchy-sequence completion with the stated equivalence relation is a well-defined inner-product space. [F1, F2, algebra]

2.1 To see that the completion is complete, let $(X_n)$ be a Cauchy sequence of its classes. By [A1], choose $u_n\in D_0$ with $\|[u_n]-X_n\|_Q<2^{-n}$ for each $n$. The triangle inequality makes $(u_n)$ $Q$-Cauchy; its class $X$ is defined by the Cauchy-sequence construction, and $\|X_n-X\|_Q\le2^{-n}+\|[u_n]-X\|_Q\to0$. Hence $Q$ is complete and therefore Hilbert. [A1, step 1.1, algebra]

2.2 For a $Q$-Cauchy representative sequence $(u_n)$, the inequalities $\|u_n-u_m\|_2\le\|u_n-u_m\|_Q$, $\sqrt{a_j}\|\partial_j u_n-\partial_j u_m\|_2\le\|u_n-u_m\|_Q$, and $\|\sqrt{W+1}(u_n-u_m)\|_2\le\|u_n-u_m\|_Q$ show that $u_n$, each $\partial_j u_n$, and $\sqrt{W+1}u_n$ converge in $L^2$ by [F2]; write their limits as $u$, $g_j$, and $h$. The first limit defines a continuous map $Q\to H_N$, since $\|u\|_2\le\|[u_n]\|_Q$, and equivalent Cauchy sequences have the same $L^2$ limit. [F1, F2, step 1.1]

3.1 For every $\varphi\in D_0$, integration by parts gives $\int u_n\overline{\partial_j\varphi}=-\int (\partial_j u_n)\overline\varphi$. Passing to the limit in both integrals by $L^2$ convergence and Cauchy–Schwarz yields $\int u\overline{\partial_j\varphi}=-\int g_j\overline\varphi$, so $g_j$ is the stated weak derivative. [step 2.2, F2, F3, algebra]

3.2 On each compact ball $B_R$, the continuous polynomial $W+1$ is bounded. Therefore $\sqrt{W+1}u_n\to\sqrt{W+1}u$ in $L^2(B_R)$, while the same sequence converges there to $h$; uniqueness of limits gives $h=\sqrt{W+1}u$ almost everywhere on every integer-radius ball and hence almost everywhere on $\mathbb R^N$. Taking limits of the component norms in $a(u_n,u_n)$ now gives the displayed formula for $\|u\|_Q^2$. [step 2.2, F1, F2, algebra]

4.1 If $u=0$ in $L^2$, then step 3.1 says $\langle g_j,\varphi\rangle=0$ for every $\varphi\in D_0$; this pairing is continuous by [F3] and $D_0$ is dense by [F4], so it vanishes on all of $H_N$, and taking $\varphi=g_j$ gives $g_j=0$. Step 3.2 then gives $h=0$; the norm formula yields $\|[u_n]\|_Q=0$, so the embedding is injective. Finally its image contains $D_0$, which is dense in $H_N$ by [F4]; thus the continuous injection has dense image and all claims follow. [step 3.1, step 3.2, F3, F4, algebra] ∎

