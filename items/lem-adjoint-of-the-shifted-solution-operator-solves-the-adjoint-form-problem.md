---
id: lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem
kind: lemma
title: "The adjoint solution operator solves the adjoint form problem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-axiom-of-choice, def-bounded-linear-operator, def-compact-linear-operator, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-hilbert-space-adjoint, def-l-p-space-as-a-quotient-by-null-functions, def-shifted-elliptic-solution-operator, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-compositions-with-a-compact-operator-are-compact, lem-shifted-elliptic-solution-operator-is-compact-on-ltwo, thm-hilbert-adjoint-properties, thm-lax-milgram, thm-rellich-compactness-from-w-one-p-zero-to-lp]
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
      locator: 'Section 4.8, Theorem 4.23 and equation (4.27), printed p. 106 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1, self-adjointness of the solution map $B$, printed pp. 85-86 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $\mu\ge\beta$, and let $a^*$ be the adjoint form of [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]]. Define $K^*_\mu f$, for $f\in L^2(\Omega)$, to be the unique $v\in H^1_0(\Omega)$ with $a^*_\mu(v,w)=(f,w)_{L^2}$ for every $w\in H^1_0(\Omega)$ (existence and uniqueness by [[thm-lax-milgram]]). Then $K^*_\mu$ is well defined and linear on $L^2(\Omega)$, and it is the Hilbert-space adjoint of the shifted solution operator $K_\mu$ of [[def-shifted-elliptic-solution-operator]]:
$$(K_\mu f,g)_{L^2}=(f,K^*_\mu g)_{L^2}\qquad\text{for all }f,g\in L^2(\Omega).$$
If $\Omega$ is bounded and the Axiom of Choice is also assumed, then $K^*_\mu$ is compact on $L^2(\Omega)$ ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]] is proved by the same bounded-map/Rellich composition for $a^*$). Moreover, for $v\in L^2(\Omega)$ one has $v\in\ker(I-\mu K^*_\mu)$ if and only if $v\in H^1_0(\Omega)$ and $a^*(v,w)=0$ for every $w\in H^1_0(\Omega)$.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; the divergence-form operator $L$, its form $a$, the adjoint form $a^*$, a fixed $\mu\ge\beta$, and the operators $K_\mu,K^*_\mu$ on $L^2(\Omega)$.

[F1] The adjoint form $a^*$ and its shift: $a^*(v,w)=\overline{a(w,v)}$, $a^*_\mu=a^*+\mu(\cdot,\cdot)_{L^2}$, and $\operatorname{Re}a^*_\mu(u,u)=\operatorname{Re}a_\mu(u,u)\ge\frac\theta2\|u\|_{H^1_0}^2$, so $a^*_\mu$ is bounded and coercive on $H^1_0(\Omega)$ with the same constants as $a_\mu$; the datum $w\mapsto(f,w)_{L^2}$ is a bounded conjugate-linear functional on $H^1_0(\Omega)$ ([[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]], [[def-shifted-elliptic-solution-operator]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Lax--Milgram: a bounded coercive sesquilinear form on a Hilbert space and a bounded conjugate-linear functional have a unique solution, and the solution map is linear with norm at most $1/\alpha$ ([[thm-lax-milgram]], [[def-bounded-linear-operator]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Hilbert-space adjoints: $S^*$ is the operator with $(Sf,g)=(f,S^*g)$ for all $f,g$, and it is unique ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F4] The $L^2$ realization of $K_\mu$ is compact when $\Omega$ is bounded: a bounded linear map $L^2(\Omega)\to H^1_0(\Omega)$ followed by the compact Rellich inclusion $H^1_0(\Omega)\hookrightarrow L^2(\Omega)$ is compact ([[lem-shifted-elliptic-solution-operator-is-compact-on-ltwo]], [[lem-compositions-with-a-compact-operator-are-compact]], [[thm-rellich-compactness-from-w-one-p-zero-to-lp]], [[def-compact-linear-operator]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Well-definedness and linearity. By [F1] and [F2] applied to $a^*_\mu$, for each $f\in L^2(\Omega)$ there is a unique $v\in H^1_0(\Omega)$ with $a^*_\mu(v,w)=(f,w)_{L^2}$ for all $w\in H^1_0(\Omega)$; uniqueness makes $K^*_\mu$ independent of any choice, and linearity of $f\mapsto K^*_\mu f$ follows from uniqueness exactly as for $K_\mu$, since $a^*_\mu$ and the datum functional are linear in that slot. [F1, F2, given]

2.1 Adjoint identity. For $f,g\in L^2(\Omega)$ put $v:=K^*_\mu g$, so that $a^*_\mu(v,w)=(g,w)_{L^2}$ for every $w\in H^1_0(\Omega)$. Testing at $w=K_\mu f$ and conjugating, and using $a^*_\mu(v,u)=\overline{a_\mu(u,v)}$, $$(K_\mu f,g)_{L^2}=\overline{(g,K_\mu f)_{L^2}}=\overline{a^*_\mu(v,K_\mu f)}=a_\mu(K_\mu f,v)=(f,v)_{L^2}=(f,K^*_\mu g)_{L^2},$$ where the penultimate identity is the defining equation of $K_\mu$. Hence $K^*_\mu$ is the Hilbert-space adjoint of $K_\mu$ by [F3]. [F1, F3, step 1.1, given, algebra]

2.2 Compactness on bounded $\Omega$. If $\Omega$ is bounded, [F1] and [F2] make $K^*_\mu:L^2(\Omega)\to H^1_0(\Omega)$ bounded linear, and composing with the compact Rellich inclusion $H^1_0(\Omega)\hookrightarrow L^2(\Omega)$ expresses $K^*_\mu$ on $L^2(\Omega)$ as a bounded map followed by a compact one, hence compact by [F4]; the Axiom of Choice is inherited through the Rellich supplier. [F4, step 1.1, given]

3.1 Kernel at $\mu$. For $v\in L^2(\Omega)$ one has $v\in\ker(I-\mu K^*_\mu)$ if and only if $v=\mu K^*_\mu v$, and since $\operatorname{ran}K^*_\mu\subseteq H^1_0(\Omega)$ this forces $v\in H^1_0(\Omega)$ and, by the defining equation of $K^*_\mu$ with datum $\mu v$, $$a^*_\mu(v,w)=\mu(v,w)_{L^2}\qquad\text{for every }w\in H^1_0(\Omega),$$ which is exactly $a^*(v,w)=0$ for every $w$. Conversely, if $v\in H^1_0(\Omega)$ satisfies $a^*(v,w)=0$ for all $w$, then $a^*_\mu(v,w)=\mu(v,w)_{L^2}$ for all $w$, so uniqueness in [F2] gives $K^*_\mu(\mu v)=v$, that is $\mu K^*_\mu v=v$. [F1, F2, step 1.1, given, algebra] ∎ 