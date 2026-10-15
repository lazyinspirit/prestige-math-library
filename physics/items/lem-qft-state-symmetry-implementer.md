---
id: lem-qft-state-symmetry-implementer
kind: lemma
title: State-preserving symmetries implemented unitarily
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 3
deps: [thm-qft-algebraic-gns-domain]
dependency_roles:
  thm-qft-algebraic-gns-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
sources:
  references:
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020), §4.4"
      url: "https://doi.org/10.1007/978-3-030-46366-3"
      locator: "§4.4, printed pp. 78–81: GNS common-domain representation and cyclic implementation context."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, lecture notes, arXiv:1904.04051v2 (2019), Theorem 23"
      url: "https://arxiv.org/html/1904.04051"
      locator: "Theorem 23, printed pp. 22–23: an invariant state yields a unitary implementation of any automorphism group preserving it."
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$, the hypothesis of [[thm-qft-algebraic-gns-domain]]. Let $G$ be a topological group with identity $e$. Let $A$ be a unital complex star algebra with positive normalized state $\omega$, and let $\alpha:G\to\operatorname{Aut}^*(A)$ be a group action: each $\alpha_g$ is a bijective complex-linear map preserving product, unit and involution, with $\alpha_e=\mathrm{id}$ and $\alpha_g\alpha_h=\alpha_{gh}$. Suppose $\omega(\alpha_g(a))=\omega(a)$ for all $g\in G$ and $a\in A$. Also suppose that, for every $a,b\in A$, the coefficient function $g\mapsto\omega(b^*\alpha_g(a))$ is continuous at $e$.

Use the GNS representation from [[thm-qft-algebraic-gns-domain]], with common dense domain $\mathcal D_\omega$ and cyclic vector $\Omega_\omega$. Then $U_g[a]:=[\alpha_g(a)]$ extends to a strongly continuous unitary representation $U:G\to\mathcal U(H_\omega)$, fixes $\Omega_\omega$, and satisfies

$$U_g\pi_\omega(a)U_g^{-1}|_{\mathcal D_\omega}=\pi_\omega(\alpha_g(a))\qquad(a\in A,g\in G).$$

Here strongly continuous means that $g\mapsto U_g\xi$ is norm-continuous for every $\xi\in H_\omega$. No differentiability, generator domain or spectral theorem follows from these hypotheses alone.

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, a topological group $G$, a unital complex star algebra $A$, a positive normalized state $\omega$, a state-preserving action $\alpha$ by unital star automorphisms, and continuity at $e$ of every $g\mapsto\omega(b^*\alpha_g(a))$.

[F1] [[thm-qft-algebraic-gns-domain]]: the state has a Hilbert-space GNS representation on a common invariant dense domain $\mathcal D_\omega=A/N_\omega$, with $\pi_\omega(a)[b]=[ab]$, $\Omega_\omega=[1_A]$, and inner product $([a],[b])_\omega=\omega(b^*a)$.

[A1] By the action assumptions, each $\alpha_g$ is a unital star automorphism, $\alpha_{gh}=\alpha_g\circ\alpha_h$, and $\omega\circ\alpha_g=\omega$; multiplication and inversion in the topological group are continuous.

[A2] For every $a,b\in A$, the scalar function $g\mapsto\omega(b^*\alpha_g(a))$ is continuous at $e$.

## Proof

**Proof technique:** direct.

1.1 If $n\in N_\omega$, then $\omega((\alpha_g n)^*\alpha_g n)=\omega(\alpha_g(n^*n))=\omega(n^*n)=0$, so $\alpha_g(N_\omega)\subseteq N_\omega$. Applying the same argument to $g^{-1}$ gives equality. For $a,b\in A$, $([\alpha_g(a)],[\alpha_g(b)])_\omega=\omega(\alpha_g(b^*a))=\omega(b^*a)$, so $[a]\mapsto[\alpha_g(a)]$ is an isometry on $\mathcal D_\omega$ with inverse induced by $\alpha_{g^{-1}}$; it extends uniquely to a unitary $U_g$ on $H_\omega$. The action law gives $U_gU_h=U_{gh}$, and $U_g\Omega_\omega=\Omega_\omega$. [F1, A1, given]

2.1 For $[b]\in\mathcal D_\omega$, $U_g\pi_\omega(a)U_g^{-1}[b]=U_g[a\alpha_{g^{-1}}(b)]=[\alpha_g(a)b]=\pi_\omega(\alpha_g(a))[b]$, using the representation rule and multiplicativity of $\alpha_g$. This is the claimed covariance identity on the common domain. [F1, A1, step 1.1]

2.2 For $a\in A$, state invariance and the quotient inner product give $\|U_g[a]-[a]\|^2=2\omega(a^*a)-\omega(a^*\alpha_g(a))-\omega((\alpha_g(a))^*a)$. The first cross term tends to $\omega(a^*a)$ as $g\to e$ by [A2]. For the second, invariance gives $\omega((\alpha_g(a))^*a)=\omega(\alpha_{g^{-1}}((\alpha_g(a))^*a))=\omega(a^*\alpha_{g^{-1}}(a))$, which also tends to $\omega(a^*a)$ by [A2] and continuity of inversion. Thus $U_g[a]\to[a]$ for every $[a]\in\mathcal D_\omega$. [F1, A1, A2, step 1.1, algebra]

3.1 Let $\xi\in H_\omega$ and $\varepsilon>0$. Choose $y\in\mathcal D_\omega$ with $\|\xi-y\|<\varepsilon/3$. Since each $U_g$ is unitary, $\|U_g\xi-\xi\|\le2\|\xi-y\|+\|U_gy-y\|$; step 2.2 makes the last term less than $\varepsilon/3$ for $g$ sufficiently near $e$. Hence every orbit is continuous at $e$. For any $g_0\in G$, $\|U_g\xi-U_{g_0}\xi\|=\|U_{g_0^{-1}g}\xi-\xi\|$, so continuity of multiplication transfers continuity to $g_0$. The unitary representation is strongly continuous on all of $G$. [step 1.1, step 2.2, given, algebra] ∎
