---
id: lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality
kind: lemma
title: "The elliptic Fredholm range condition is orthogonality to the adjoint kernel"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-axiom-of-choice, def-countable-choice, def-dual-space-of-a-normed-space, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-hilbert-space-adjoint, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-transpose-of-a-bounded-operator, lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem, lem-elementary-kernel-range-annihilator-identities, lem-shifted-elliptic-solution-operator-is-compact-on-ltwo, thm-fredholm-alternative-for-identity-minus-compact, thm-riesz-representation-for-hilbert-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.9, proof of Theorem 4.24, condition (4.31), printed pp. 107-108 (read in full)'
    - title: 'Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)'
      url: 'https://www.math.toronto.edu/almut/Brezis.pdf'
      locator: 'Chapter 6, Theorem 6.6 (Fredholm alternative for compact operators), printed pp. 160-162; consumed through the abstract supplier'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be bounded open, $\mu\ge\beta$, and let $K_\mu,K^*_\mu$ be as in [[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]]. For $f\in L^2(\Omega)$,
$$K_\mu f\in\operatorname{ran}(I-\mu K_\mu)\quad\Longleftrightarrow\quad (f,v)_{L^2}=0\ \text{ for every }v\in H^1_0(\Omega)\text{ with }a^*(v,w)=0\ \forall w\in H^1_0(\Omega),$$
where $a^*$ is the adjoint form of [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]] and $K_\mu$ is the shifted solution operator of [[def-shifted-elliptic-solution-operator]].

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; a bounded open set $\Omega\subseteq\mathbb R^n$; a fixed $\mu\ge\beta$; the operators $K_\mu,K^*_\mu$ on $L^2(\Omega)$; and $f\in L^2(\Omega)$.

[F1] Compactness: $\mu K_\mu$ is a compact operator on the Banach space $L^2(\Omega)$, so $A:=I-\mu K_\mu$ is an identity-minus-compact operator ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-axiom-of-choice]]).

[F2] Fredholm alternative: for a compact operator $K$ on a Banach space and $A=I-K$, an element $y$ lies in $\operatorname{ran}A$ if and only if $\varphi(y)=0$ for every $\varphi$ in $\ker A^*$, where $A^*=I-K^*$ is the transpose on the dual ([[thm-fredholm-alternative-for-identity-minus-compact]], [[def-transpose-of-a-bounded-operator]]).

[F3] Riesz representation: every bounded linear functional $\varphi$ on $L^2(\Omega)$ has the form $\varphi(y)=(y,g_\varphi)_{L^2}$ for a unique $g_\varphi\in L^2(\Omega)$, and for the Hilbert adjoint $K^*_\mu$ one has $(K_\mu y,g)=(y,K^*_\mu g)$ ([[thm-riesz-representation-for-hilbert-space]], [[def-hilbert-space-adjoint]], [[def-dual-space-of-a-normed-space]]).

[F4] Kernel of $I-\mu K^*_\mu$: for $v\in L^2(\Omega)$, $v\in\ker(I-\mu K^*_\mu)$ if and only if $v\in H^1_0(\Omega)$ and $a^*(v,w)=0$ for every $w\in H^1_0(\Omega)$ ([[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]]).

[F5] Adjoint identity: $(K_\mu y,g)_{L^2}=(y,K^*_\mu g)_{L^2}$ for all $y,g\in L^2(\Omega)$, and $\mu>0$ ([[lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem]], [[def-shifted-elliptic-solution-operator]]).

## Proof

**Proof technique:** direct.

1.1 The operator $A=I-\mu K_\mu$ is a bounded linear operator on the Banach space $L^2(\Omega)$, and $\mu K_\mu$ is compact by [F1]. By the Fredholm alternative [F2] applied with $K:=\mu K_\mu$ and $y:=K_\mu f$, the inclusion $K_\mu f\in\operatorname{ran}A$ is equivalent to the vanishing of $\varphi(K_\mu f)$ for every bounded linear functional $\varphi$ with $A^*\varphi=0$. [F1, F2, given]

2.1 Description of $\ker A^*$. For $\varphi\in(L^2(\Omega))^*$ let $g_\varphi\in L^2(\Omega)$ be its Riesz vector, $\varphi(y)=(y,g_\varphi)_{L^2}$ as in [F3]. Then, using the transpose identity and the Hilbert adjoint, $(A^*\varphi)(y)=\varphi(Ay)=(Ay,g_\varphi)_{L^2}=(y,A^*g_\varphi)_{L^2}=(y,(I-\mu K^*_\mu)g_\varphi)_{L^2}$ for all $y$, so $\varphi\in\ker A^*$ if and only if $g_\varphi\in\ker(I-\mu K^*_\mu)$. For such a vector, [F5] gives $$\varphi(K_\mu f)=(K_\mu f,g_\varphi)_{L^2}=(f,K^*_\mu g_\varphi)_{L^2}=\Bigl(f,\tfrac1\mu g_\varphi\Bigr)_{L^2}=\tfrac1\mu(f,g_\varphi)_{L^2},$$ since $g_\varphi=\mu K^*_\mu g_\varphi$; because $\mu>0$ this vanishes if and only if $(f,g_\varphi)_{L^2}=0$. [F3, F5, step 1.1, given, algebra]

3.1 Weak form of the kernel. By [F4] the condition $g_\varphi\in\ker(I-\mu K^*_\mu)$ is equivalent to $g_\varphi\in H^1_0(\Omega)$ and $a^*(g_\varphi,w)=0$ for every $w\in H^1_0(\Omega)$. Substituting into step 2.1, $K_\mu f\in\operatorname{ran}(I-\mu K_\mu)$ holds if and only if $(f,v)_{L^2}=0$ for every $v\in H^1_0(\Omega)$ with $a^*(v,w)=0$ for all $w\in H^1_0(\Omega)$, as claimed. [F4, step 1.1, step 2.1, given] ∎ 