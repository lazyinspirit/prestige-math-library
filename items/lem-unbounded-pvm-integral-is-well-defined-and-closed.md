---
id: lem-unbounded-pvm-integral-is-well-defined-and-closed
kind: lemma
title: "The unbounded PVM integral is densely defined, closed and normal"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-integral-against-a-pvm, def-adjoint-of-a-densely-defined-unbounded-operator, lem-unbounded-adjoint-is-well-defined-and-closed, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-densely-defined-closed-and-closable-operator, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 3.2 and (3.29)-(3.33), pp.104-105"
---

## Statement

Assume Countable Choice. Let $E$ be a projection valued measure on $(X,\Sigma)$
on the complex Hilbert space $H$ and let $f:X\to\mathbb C$ be $\Sigma$-measurable. Then the
operator $f(E)$ of [[def-unbounded-integral-against-a-pvm]] is densely defined
and closed, and it is normal: $D(f(E))=D(\overline f(E))$ and
$\|f(E)x\|=\|\overline f(E)x\|$ for all such $x$. Moreover
$$\|f(E)x\|^2=\int|f|^2\,dE_x,\qquad \langle x,f(E)x\rangle=\int\overline f\,dE_x\qquad(x\in D(f(E))),$$
and $(f(E))^*=\overline f(E)$; in particular $f(E)$ is self-adjoint whenever
$f$ takes real values. Finally, if $(g_n)$ are bounded $\Sigma$-measurable functions with
$|g_n|\le C|f|$ pointwise and $g_n\to f$ pointwise, then $g_n(E)x\to f(E)x$
for every $x\in D(f(E))$.

## Facts & Assumptions

[A1] $D(f(E))=\{x:\int|f|^2dE_x<\infty\}$ is a linear subspace, $f(E)x=\lim_nf_n(E)x$ with $f_n=f\mathbf 1_{\{|f|\le n\}}$, and the limit is linear in $x$; here and below $\Phi_E(h)=h(E)$ for bounded Borel $h$ ([[def-unbounded-integral-against-a-pvm]]).

[A2] For bounded Borel $h$: $\|h(E)x\|^2=\int|h|^2dE_x$, $\langle h(E)x,y\rangle=\int h\,dE_{x,y}$, $h(E)^*=\overline h(E)$, products of bounded Borel functions multiply as $\Phi_E(h_1h_2)=\Phi_E(h_1)\Phi_E(h_2)$, and $\Phi_E$ is linear ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A3] Scalar dominated convergence applies to the finite measure $E_x$: if $|h_n|\le G$ with $\int G\,dE_x<\infty$ and $h_n\to h$ pointwise, then $\int|h_n-h|^2dE_x\to0$ ([[thm-dominated-convergence]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A4] Scalar monotone convergence: for nonnegative measurable $u_n\uparrow u$ the integrals $\int u_n\,dE_x$ increase to $\int u\,dE_x$ ([[thm-monotone-convergence-for-the-integral]]).

[A5] The adjoint of a densely defined operator is closed, and $D(T^*)$ consists of those $y$ for which $z\mapsto\langle Tz,y\rangle$ is bounded, with $T^*y$ the representing vector ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

## Proof

**Proof technique:** direct.

**Given:** A PVM $E$ and a Borel function $f$ as in the statement.

1.1 For $x\in D(f(E))$ one has $\|f(E)x\|^2=\int|f|^2dE_x$ and $\langle x,f(E)x\rangle=\int\overline f\,dE_x$: the first is the norm limit $\|f(E)x\|^2=\lim_n\|f_n(E)x\|^2=\lim_n\int|f_n|^2dE_x=\int|f|^2dE_x$ using [A2] and [A4], the second follows the same way from $\langle x,f_n(E)x\rangle=\int\overline{f_n}\,dE_x$ (the conjugate in [A2] with $y=x$) and dominated convergence, $|\overline{f_n}|\le|f|\in L^1(E_x)$ because $E_x$ is finite. [A1, A2, A3, A4]

2.1 Approximants: let $g_n$ be bounded Borel with $|g_n|\le C|f|$ and $g_n\to f$ pointwise, and let $x\in D(f(E))$. Then $|g_n-f|^2\le(C+1)^2|f|^2\in L^1(E_x)$, so $\|g_n(E)x-f(E)x\|^2=\int|g_n-f|^2dE_x\to0$ by [A3] together with step 1.1. [A1, A2, A3, step 1.1]

3.1 For a bounded Borel $h$ and every $x\in H$ one has $dE_{h(E)x}=|h|^2dE_x$, and $h(E)$ commutes with every $E(B)$; consequently for $x\in D(f(E))$ and bounded Borel $h$ one has $h(E)f(E)x=(hf)(E)x$. Indeed $E(B)h(E)=h(E)E(B)$ by [A2], so $E_{h(E)x}(B)=\|E(B)h(E)x\|^2=\|h(E)E(B)x\|^2=\int_B|h|^2dE_x$. For the second claim, $h(E)f_m(E)=(hf_m)(E)$ for every $m$ by [A2], where $f_m=f\mathbf 1_{\{|f|\le m\}}$; the bounded functions $hf_m$ satisfy $|hf_m|\le\|h\|_\infty|f|$ and converge pointwise to $hf$, so step 2.1 gives $(hf_m)(E)x\to(hf)(E)x$, while $h(E)f_m(E)x\to h(E)f(E)x$ by continuity of the bounded operator $h(E)$ and step 1.1. [A2, step 1.1, step 2.1]

3.2 $\overline f(E)\subseteq(f(E))^*$: for $x,y\in D(f(E))$ one has $\langle f(E)y,x\rangle=\lim_n\langle f_n(E)y,x\rangle=\lim_n\langle y,\overline{f_n}(E)x\rangle=\langle y,\overline f(E)x\rangle$, using bounded integrals in [A2], step 2.1 for the two limits, and step 1.1 for the domain descriptions. [A2, step 1.1, step 2.1]

4.1 $D(f(E))$ is dense: for $x\in H$ and $x_n:=E(\Omega_n)x$ with $\Omega_n=\{|f|\le n\}$, the sets $\Omega_n$ increase to $X$ and clause 4 of the PVM definition gives $\sum_kE(\Omega_k\setminus\Omega_{k-1})x=E(X)x=x$ in norm, so $x_n\to x$; and $x_n\in D(f(E))$ because $\int|f|^2dE_{x_n}=\int_{\Omega_n}|f|^2dE_x\le n^2\|x\|^2<\infty$ by step 3.1. [A1, A2, step 3.1]

4.2 $D((f(E))^*)\subseteq D(f(E))$: let $y\in D((f(E))^*)$ and $z:=(f(E))^*y$. For every $w\in H$ and every $n$, writing $\Omega_n=\{|f|\le n\}$, step 3.1 gives $\langle\overline{f_n}(E)y,w\rangle=\langle y,f_n(E)w\rangle=\langle y,f(E)E(\Omega_n)w\rangle=\langle z,E(\Omega_n)w\rangle=\langle E(\Omega_n)z,w\rangle$; hence $\overline{f_n}(E)y=E(\Omega_n)z$ and, by [A2] and [A4], $\int|f|^2dE_y=\lim_n\int_{\Omega_n}|f|^2dE_y=\lim_n\|\overline{f_n}(E)y\|^2=\lim_n\|E(\Omega_n)z\|^2\le\|z\|^2<\infty$. [A2, A4, step 3.1]

5.1 By steps 3.2 and 4.2, $(f(E))^*=\overline f(E)$ with $D((f(E))^*)=D(f(E))$; by step 1.1 with $f$ replaced by $\overline f$ this gives $D(\overline f(E))=D(f(E))$ and $\|\overline f(E)x\|=\|f(E)x\|$: the operator is normal. [A1, step 1.1, step 3.2, step 4.2]

6.1 $f(E)$ is closed: its graph norm coincides with the graph norm of its adjoint $\overline f(E)$ by step 5.1, and the adjoint of a densely defined operator is closed with complete domain in its graph norm by [A5]; since the two graph norms are equal and the domains coincide, $D(f(E))$ is complete for the graph norm of $f(E)$, so $f(E)$ is closed. [A5, step 5.1]

7.1 If $f$ is real-valued then $\overline f=f$, so step 5.1 gives $(f(E))^*=f(E)$ with equal domains, that is, $f(E)$ is self-adjoint. With steps 1.1, 2.1, 4.1, 5.1 and 6.1 all stated claims are established. [A1, step 1.1, step 2.1, step 4.1, step 5.1, step 6.1] ∎
