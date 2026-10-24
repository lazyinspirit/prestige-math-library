---
id: lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint
kind: lemma
title: "The symmetric shifted solution operator is positive and self-adjoint"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [cor-a-sufficiently-large-shift-is-coercive, def-bounded-coercive-and-symmetric-sesquilinear-forms, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-hilbert-space-adjoint, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-self-adjoint-positive-unitary-and-normal-operator, def-shifted-elliptic-solution-operator, lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 4, Section 4.1, proof of Theorem 4.2 ($B$ compact self-adjoint and positive), printed pp. 85-86 (read in full)'
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.10, the compact self-adjoint resolvent and its spectrum, printed pp. 108-109 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 4, Theorem 4.1 and its proof, printed pp. 27-32 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. In the symmetric case of [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], with $\Omega$ open and $\mu\ge\beta$, the shifted solution operator $K_\mu$ of [[def-shifted-elliptic-solution-operator]], regarded on $L^2(\Omega)$, is self-adjoint and positive:
$$(K_\mu f,g)_{L^2}=(f,K_\mu g)_{L^2},\qquad (K_\mu f,f)_{L^2}=a_\mu(K_\mu f,K_\mu f)\ \ge\ \alpha\|K_\mu f\|_{H^1_0}^2\ \ge\ 0$$
for all $f,g\in L^2(\Omega)$, with $(K_\mu f,f)_{L^2}=0$ if and only if $f=0$; in particular $K_\mu$ is injective. Moreover $a(K_\mu f,v)=(f-\mu K_\mu f,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, so $K_\mu f\in D(L)$ and $L(K_\mu f)=f-\mu K_\mu f$. Symmetry of $K_\mu$ is verified from the form; no self-adjointness of the differential expression is assumed.

## Facts & Assumptions

**Given:** Countable Choice; the symmetric divergence-form case with form $a$ and $\mu\ge\beta$; the shifted solution operator $K_\mu$ and the shifted form $a_\mu=a+\mu(\cdot,\cdot)_{L^2}$; $f,g\in L^2(\Omega)$.

[F1] Defining identity and coercivity: $a_\mu(K_\mu h,v)=(h,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ and all $h\in L^2(\Omega)$, and $a_\mu(u,u)\ge\alpha\|u\|_{H^1_0}^2$ with $\alpha=\theta/2$ for $u\in H^1_0(\Omega)$ ([[def-shifted-elliptic-solution-operator]], [[cor-a-sufficiently-large-shift-is-coercive]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Symmetry: $a(u,v)=\overline{a(v,u)}$ and $(v,u)_{L^2}=\overline{(u,v)_{L^2}}$, so $a_\mu$ is symmetric as well; in particular $a_\mu(u,u)$ is real ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]]).

[F3] Density: $H^1_0(\Omega)$ is dense in $L^2(\Omega)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F4] Hilbert adjoints and positivity: an operator $T$ on a Hilbert space is self-adjoint when $(Tf,g)=(f,Tg)$ for all $f,g$, and positive when $(Tf,f)\ge0$ ([[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F5] The operator $L$ and its domain: $u\in D(L)$ with $Lu=h$ means $u\in H^1_0(\Omega)$ and $a(u,v)=(h,v)_{L^2}$ for all $v\in H^1_0(\Omega)$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded]]).

## Proof

**Proof technique:** direct.

1.1 Self-adjointness. By [F1] applied to $g$ and [F2], and then to $f$, $$(K_\mu f,g)_{L^2}=\overline{(g,K_\mu f)_{L^2}}=\overline{a_\mu(K_\mu g,K_\mu f)}=a_\mu(K_\mu f,K_\mu g)=(f,K_\mu g)_{L^2},$$ for all $f,g\in L^2(\Omega)$; hence $K_\mu$ is self-adjoint by [F4]. [F1, F2, F4, given, algebra]

2.1 Positivity and injectivity. Taking $g=f$ in the computation of step 1.1 and using [F1], $(K_\mu f,f)_{L^2}=a_\mu(K_\mu f,K_\mu f)\ge\alpha\|K_\mu f\|_{H^1_0}^2\ge0$. If $(K_\mu f,f)_{L^2}=0$, then $\alpha\|K_\mu f\|_{H^1_0}^2\le0$, so $K_\mu f=0$; then for every $v\in H^1_0(\Omega)$ the defining identity gives $(f,v)_{L^2}=a_\mu(K_\mu f,v)=0$, and density of $H^1_0(\Omega)$ in $L^2(\Omega)$ ([F3]) gives $f=0$. Conversely $f=0$ gives $K_\mu f=0$ and hence $(K_\mu f,f)_{L^2}=0$; thus $K_\mu$ is positive and injective. [F1, F3, F4, step 1.1, given, algebra]

3.1 Range description. For $f\in L^2(\Omega)$ and every $v\in H^1_0(\Omega)$, $$a(K_\mu f,v)=a_\mu(K_\mu f,v)-\mu(K_\mu f,v)_{L^2}=(f-\mu K_\mu f,v)_{L^2},$$ because the datum $f-\mu K_\mu f$ lies in $L^2(\Omega)$. By [F5] this says $K_\mu f\in D(L)$ and $L(K_\mu f)=f-\mu K_\mu f$. [F1, F5, given, algebra] ∎ 