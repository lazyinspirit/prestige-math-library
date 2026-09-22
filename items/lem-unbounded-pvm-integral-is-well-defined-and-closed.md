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
and closed, and it is normal, in the sense $D(f(E))=D(f(E)^*)$ and equal norms for the operator and its adjoint; in particular $D(f(E))=D(\overline f(E))$ and
$\|f(E)x\|=\|\overline f(E)x\|$ for all such $x$. Moreover
$$\|f(E)x\|^2=\int|f|^2\,dE_x,\qquad \langle x,f(E)x\rangle=\int\overline f\,dE_x\qquad(x\in D(f(E))),$$
and $(f(E))^*=\overline f(E)$; in particular $f(E)$ is self-adjoint whenever
$f$ takes real values. Finally, if $(g_n)$ are bounded $\Sigma$-measurable functions with
$|g_n|\le C|f|$ pointwise and $g_n\to f$ pointwise, then $g_n(E)x\to f(E)x$
for every $x\in D(f(E))$.

## Facts & Assumptions

[A1] $D(f(E))=\{x:\int|f|^2dE_x<\infty\}$ is a linear subspace, $f(E)x=\lim_nf_n(E)x$ with $f_n=f\mathbf 1_{\{|f|\le n\}}$, and the limit is linear in $x$; here and below $\Phi_E(h)=h(E)$ for bounded $\Sigma$-measurable $h$ ([[def-unbounded-integral-against-a-pvm]]).

[A2] For $H\ne\{0\}$ and bounded $\Sigma$-measurable $h$: $\|h(E)x\|^2=\int|h|^2dE_x$, $\langle h(E)x,y\rangle=\int h\,dE_{x,y}$, $h(E)^*=\overline h(E)$, products of bounded $\Sigma$-measurable functions multiply as $\Phi_E(h_1h_2)=\Phi_E(h_1)\Phi_E(h_2)$, and $\Phi_E$ is linear ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A3] Dominated convergence on the finite measure $E_x$: if $u_n\to u$ pointwise and $|u_n|\le G$ with $\int G\,dE_x<\infty$, then $\int|u_n-u|\,dE_x\to0$. In particular, if $h_n\to h$ and $|h_n-h|^2\le G$ with integrable $G$, then $\int|h_n-h|^2\,dE_x\to0$ by applying the theorem to the squared differences ([[thm-dominated-convergence]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[A4] Scalar monotone convergence: for nonnegative measurable $u_n\uparrow u$ the integrals $\int u_n\,dE_x$ increase to $\int u\,dE_x$ ([[thm-monotone-convergence-for-the-integral]]).

[A5] The adjoint of a densely defined operator is closed, and $D(T^*)$ consists of those $y$ for which $z\mapsto\langle Tz,y\rangle$ is bounded, with $T^*y$ the representing vector ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[lem-unbounded-adjoint-is-well-defined-and-closed]]).

[A6] Projection values satisfy $E(B)^2=E(B)=E(B)^*$, $E(B\cap C)=E(B)E(C)$, $E(X)=I$ and $\|E(B)x\|\le\|x\|$ ([[def-projection-valued-measure]]). Closedness means the graph is closed, and density means the domain is dense ([[def-densely-defined-closed-and-closable-operator]]).

## Proof

**Proof technique:** direct.

**Given:** A PVM $E$ and a $\Sigma$-measurable function $f$ as in the statement.

1.1 If $H=\{0\}$, [A1] defines all integrals on $H$ as the unique zero-space operator. Its domain is all $H$, its graph is the whole $H\oplus H$, its adjoint is itself by the representing identity, and every scalar integral and norm in the statement is zero. All approximation vectors are zero. This proves every assertion in that case; henceforth assume $H\ne\{0\}$, as required by [A2]. [A1, A5, A6]

1.2 For any measurable $f$ and $x\in D(f(E))$, norm convergence of the defining truncations and monotone convergence give $\|f(E)x\|^2=\lim_m\int|f_m|^2\,dE_x=\int|f|^2\,dE_x$. Also $|f|\le1+|f|^2$ is integrable against the finite measure $E_x$. Thus dominated convergence in the bounded quadratic pairings gives $\langle x,f(E)x\rangle=\lim_m\int\overline{f_m}\,dE_x=\int\overline f\,dE_x$, with the conjugate required by the first-variable-linear inner product. [A1, A2, A3, A4]

1.3 Fix a bounded measurable $g$ and $x\in D(f(E))$. For each $m$, bounded linearity and the quadratic identity give $\|g(E)x-f_m(E)x\|^2=\int|g-f_m|^2\,dE_x$. Let $m\to\infty$; the left side converges by [A1], while the right side converges by [A3], since $|g-f_m|^2\le2\|g\|_\infty^2+2|f|^2$, an integrable majorant. Consequently $\|g(E)x-f(E)x\|^2=\int|g-f|^2\,dE_x$. For the sequence $g_n$ in the statement, choose its bound $C\ge0$; the majorant $(C+1)^2|f|^2$ and [A3] now imply the claimed convergence. This argument applies to any measurable target function in place of $f$. [A1, A2, A3]

2.1 If $h$ is bounded measurable, [A2] and [A6] give $E(B)h(E)=(\mathbf1_Bh)(E)=h(E)E(B)$, and hence $E_{h(E)x}(B)=\|(\mathbf1_Bh)(E)x\|^2=\int_B|h|^2\,dE_x$. Thus $dE_{h(E)x}=|h|^2dE_x$ for all $x\in H$. For $x\in D(f(E))$ this implies $h(E)x\in D(f(E))$, and also $x\in D((hf)(E))$, by the bound $|hf|^2\le\|h\|_\infty^2|f|^2$. Bounded multiplication gives $f_m(E)h(E)x=h(E)f_m(E)x=(hf_m)(E)x$. The first two limits follow from [A1] and bounded continuity; the last tends to $(hf)(E)x$ by step 1.3 applied to the target $hf$, because $|hf_m|\le|hf|$. Therefore $f(E)h(E)x=h(E)f(E)x=(hf)(E)x$ on $D(f(E))$. [A1, A2, A6, step 1.3]

3.1 Put $\Omega_n=\{|f|\le n\}$ for $n\ge1$. For every $x\in H$, step 2.1 gives $dE_{E(\Omega_n)x}=\mathbf1_{\Omega_n}dE_x$, so $E(\Omega_n)x\in D(f(E))$. Moreover $\|x-E(\Omega_n)x\|^2=\int\mathbf1_{X\setminus\Omega_n}\,dE_x\to0$ by [A2], [A6] and dominated convergence, since $f$ is finite-valued. Hence the domain is dense. For every $w\in H$, the defining truncations on $E(\Omega_n)w$ are constant for $m\ge n$: $f_m(E)E(\Omega_n)w=f_n(E)w$. Therefore $f(E)E(\Omega_n)w=f_n(E)w$. [A1, A2, A3, A6, step 2.1]

4.1 The domains of $f(E)$ and $\overline f(E)$ coincide because their defining squared moduli agree. For $x,y$ in this domain, bounded adjoints and the defining limits yield $\langle f(E)y,x\rangle=\lim_m\langle f_m(E)y,x\rangle=\lim_m\langle y,\overline{f_m}(E)x\rangle=\langle y,\overline f(E)x\rangle$. Since density is established in step 3.1, [A5] gives $\overline f(E)\subseteq f(E)^*$. [A1, A2, A5, step 3.1]

5.1 Conversely let $y\in D(f(E)^*)$ and $z=f(E)^*y$. For every $w\in H$, step 3.1 and the adjoint identity give $\langle\overline{f_n}(E)y,w\rangle=\langle y,f_n(E)w\rangle=\langle y,f(E)E(\Omega_n)w\rangle=\langle z,E(\Omega_n)w\rangle=\langle E(\Omega_n)z,w\rangle$. Thus $\overline{f_n}(E)y=E(\Omega_n)z$. By [A2], [A4] and the projection bound, $\int|f|^2\,dE_y=\lim_n\|\overline{f_n}(E)y\|^2\le\|z\|^2<\infty$. Hence $y\in D(f(E))$, and step 4.1 proves $f(E)^*=\overline f(E)$ with equal domains. [A1, A2, A4, A5, A6, step 3.1, step 4.1]

6.1 Apply step 5.1 to the measurable function $\overline f$, whose integral has dense domain by step 3.1. It gives $(\overline f(E))^*=f(E)$, so [A5] proves $f(E)$ closed directly. Step 1.2 and $|f|=|\overline f|$ give equal norms for $f(E)$ and its adjoint on their common domain, establishing normality. If $f$ is real-valued, step 5.1 gives $f(E)^*=f(E)$. Together with steps 1.2, 1.3 and 3.1 this proves every assertion. [A5, step 1.2, step 1.3, step 3.1, step 5.1] ∎
