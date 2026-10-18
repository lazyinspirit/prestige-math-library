---
id: lem-na-full-dirichlet-hcurl-regular-decomposition
kind: lemma
title: A bounded regular decomposition with both summands satisfying full Dirichlet conditions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [lem-na-lipschitz-scalar-h1-h2-extension, lem-na-lipschitz-support-and-zero-boundary-closure, lem-na-compact-support-hcurl-fourier-splitting, def-na-zero-tangential-hcurl, def-axiom-of-choice, lem-test-function-cutoffs-and-euclidean-localization, lem-weak-leibniz-rule-with-a-smooth-factor]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Theorem 2 and Remark 3, full Dirichlet specialization.
---

## Statement

Assume AC. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded Lipschitz open set. There are bounded real linear maps $R:H_0(\operatorname{curl};\Omega)\to H_0^1(\Omega;\mathbb R^3)$ and $Q:H_0(\operatorname{curl};\Omega)\to H_0^1(\Omega)$ such that
$$u=Ru+\nabla Qu,\qquad \|Ru\|_{H^1}+\|Qu\|_{H^1}\le C_\Omega\|u\|_{H(\operatorname{curl})}.$$
No contractibility, connected boundary, or mesh hypothesis is required. The scalar estimate uses the full H(curl) norm; no estimate by curl alone is asserted.

## Facts & Assumptions


**Given:** AC, the nonempty bounded Lipschitz open set $\Omega$, and $u$ in the closure-defined zero-tangential space.

[F1] [[lem-na-lipschitz-support-and-zero-boundary-closure]] gives the whole-space H(curl) zero extension and characterizes supported whole-space $H^1$ restrictions as $H_0^1$.

[F2] [[lem-na-compact-support-hcurl-fourier-splitting]] supplies the bounded linear whole-space split $U=w+\nabla p$, with $w\in H^1(\mathbb R^3)$ and $p\in H^1(\mathbb R^3)$.

[F3] [[lem-na-lipschitz-scalar-h1-h2-extension]] supplies a bounded scalar $H^2$ extension on every bounded Lipschitz open set, including one with several components.

[F4] [[lem-test-function-cutoffs-and-euclidean-localization]] with $K=\overline\Omega\Subset B$ supplies the fixed smooth cutoff $\chi$ in step 2.1, equal to one on a neighborhood of $K$. [[lem-weak-leibniz-rule-with-a-smooth-factor]] at $k=1,p=2$ gives the whole-space $H^1$ product identities and estimates for $Z,P$. Its explicit CC assumption follows from the stated AC.

## Proof


1.1 Fix a ball $B$ with $\overline\Omega\Subset B$, let $U$ be the zero extension of $u$ by [F1], and use [F2] with support $\overline\Omega$. Then $U=w+\nabla p$, $\|w\|_{H^1}\le C\|u\|_{H(\operatorname{curl})}$, and $\|p\|_{H^1}\le C_\Omega\|u\|_2$. The exterior open set $D=B\setminus\overline\Omega$ has Lipschitz boundary: near $\partial\Omega$ use the same graph with the opposite side, and near $\partial B$ use the smooth sphere; these boundary sets are a positive distance apart. It may have several components, which [F3] permits. On $D$, $U=0$, so $\nabla p=-w$. Hence $p|_D\in H^2(D)$, with $\|p\|_{H^2(D)}\le C_\Omega\|u\|_{H(\operatorname{curl})}$. This follows directly from the definition of second weak derivatives: $D_iD_jp=-D_iw_j\in L^2(D)$. [F1, F2, construct, algebra, F3]

2.1 Extend $p|_D$ by [F3] to $a=E_D(p|_D)\in H^2(\mathbb R^3)$. Choose one fixed $\chi\in C_c^\infty(B)$ equal to one near $\overline\Omega$, and define whole-space fields $Z=\chi(w+\nabla a)$ and $P=\chi(p-a)$. Both are in $H^1(\mathbb R^3)$ with norms bounded by $C_\Omega\|u\|_{H(\operatorname{curl})}$. On $D$, $a=p$ and $\nabla a=\nabla p=-w$ almost everywhere, so $Z=P=0$ there; outside $B$ their cutoff makes them zero. Thus they vanish almost everywhere outside $\overline\Omega$. By [F1], $z=Z|_\Omega\in H_0^1(\Omega;\mathbb R^3)$ and $q=P|_\Omega\in H_0^1(\Omega)$. On $\Omega$, $\chi=1$ and its gradient is zero, giving $z+\nabla q=w+\nabla a+\nabla p-\nabla a=u$. Fixed zero extension, Fourier multipliers, $E_D$, and cutoff make the maps $R:u\mapsto z$, $Q:u\mapsto q$ linear; their estimates have just been proved. Only the geometry of $\Omega,B$, not a mesh or a topological assumption, enters the constants. [F1, F3, step 1.1, construct, algebra, F4] ∎
