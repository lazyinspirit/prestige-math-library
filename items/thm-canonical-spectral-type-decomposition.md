---
id: thm-canonical-spectral-type-decomposition
kind: theorem
title: "Canonical decomposition into pure point, absolutely continuous and singular continuous parts"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem, thm-cyclic-spectral-representation, thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-mutually-singular-measures, def-absolutely-continuous-with-respect-to-a-positive-measure, def-atom-of-a-measure-on-r, def-orthogonality-and-orthogonal-complement, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.3, Lemmas 3.15-3.18 with proof, pp.117-119"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator with spectral
projection valued measure $E$ on $\mathbb R$ and let $H_{\mathrm{pp}}$,
$H_{\mathrm{ac}}$, $H_{\mathrm{sc}}$ be the subspaces of
[[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]].
Then $H_{\mathrm{pp}},H_{\mathrm{ac}},H_{\mathrm{sc}}$ are closed, mutually
orthogonal, $T$-reducing subspaces with
$$H=H_{\mathrm{pp}}\oplus H_{\mathrm{ac}}\oplus H_{\mathrm{sc}},$$
canonically determined by $T$; the restrictions of $T$ to them are
self-adjoint and their spectral measures are respectively purely atomic,
absolutely continuous with respect to Lebesgue measure, and atomless and
singular. If $H$ is separable and $\mu$ is a maximal scalar spectral measure
with disjoint Borel supports $B_{\mathrm{pp}},B_{\mathrm{ac}},B_{\mathrm{sc}}$
of its discrete, absolutely continuous and singular continuous parts, then
$H_{\mathrm{type}}=\operatorname{ran}E(B_{\mathrm{type}})$.

## Facts & Assumptions

[A1] $E=F\circ\psi$ where $F$ is the spectral PVM of the unitary $C=C_T$ on $S^1$ and $\psi(\lambda)=(\lambda-i)(\lambda+i)^{-1}$ maps $\mathbb R$ homeomorphically onto $S^1\setminus\{1\}$, $F(\{1\})=0$; for the scalar measures this reads $E_x(B)=F_x(\psi(B))$, and $\psi$ carries Lebesgue-null subsets of $\mathbb R$ to arclength-null subsets of $S^1$ and back, because $\psi$ is a diffeomorphism with nonzero derivative. Hence $E_x$ is purely atomic, absolutely continuous, or atomless and singular exactly when $F_x$ is ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]], [[def-mutually-singular-measures]]).

[A2] There is a unitary $U:\bigoplus_{j\in J}L^2(\sigma(C),\mu_j)\to H$ with $U(\bigoplus_jM_z)U^{-1}=C$, where $\mu_j=F_{x_j}$ and $H=\bigoplus_jH_{x_j}$; for $x=U((f_j)_j)$ one has $F_x=\sum_j|f_j|^2\mu_j$, and if $H$ is separable then $J$ may be taken at most countable ([[thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem]], [[thm-cyclic-spectral-representation]]).

[A3] Every finite Borel measure on $\mathbb R$ has a unique decomposition into a purely atomic part, an absolutely continuous part and an atomless singular part, and disjoint Borel supports of the three parts can be chosen whose union is a support of the measure ([[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]], [[def-atom-of-a-measure-on-r]]).

[A4] If $\mu=\mu_{\mathrm{pp}}+\mu_{\mathrm{ac}}+\mu_{\mathrm{sc}}$ is the unique Lebesgue decomposition of a finite Borel measure and the three components are carried by disjoint Borel sets $P_{\mathrm{pp}},P_{\mathrm{ac}},P_{\mathrm{sc}}$, then every $\nu\ll\mu$ decomposes as $\nu=\nu|_{P_{\mathrm{pp}}}+\nu|_{P_{\mathrm{ac}}}+\nu|_{P_{\mathrm{sc}}}$. These restrictions are respectively purely atomic, absolutely continuous, and atomless singular; uniqueness of the decomposition therefore says that $\nu$ is of one of the three types exactly when it is carried by the corresponding $P_{\mathrm{type}}$ ([[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]], [[def-absolutely-continuous-with-respect-to-a-positive-measure]], [[def-atom-of-a-measure-on-r]], [[def-mutually-singular-measures]]).

## Proof

**Proof technique:** direct.

**Given:** A self-adjoint $T$ with spectral PVM $E$, its Cayley unitary $C$ with PVM $F$, and the multiplication form of [A2].

1.1 For each $j$ decompose the pushforward of $\mu_j$ under $\psi^{-1}$ on $\mathbb R$ as in [A3], obtaining disjoint Borel sets $P_j^{\mathrm{pp}},P_j^{\mathrm{ac}},P_j^{\mathrm{sc}}$ whose union supports that measure, and transport them back to $S^1$ by $M_j^{\mathrm{type}}:=\psi(P_j^{\mathrm{type}})$; these are disjoint Borel subsets of $S^1\setminus\{1\}$ whose union supports $\mu_j$. [A1, A3, given]

2.1 Define $Q_{\mathrm{type}}:=U\bigl(\bigoplus_jM_{\mathbf 1_{M_j^{\mathrm{type}}}}\bigr)U^{-1}$ on $H$. Each $Q_{\mathrm{type}}$ is an orthogonal projection, $Q_{\mathrm{type}}Q_{\mathrm{other}}=0$ for different types, and $Q_{\mathrm{pp}}+Q_{\mathrm{ac}}+Q_{\mathrm{sc}}=I$, because the corresponding multiplication operators have those properties on each summand and the summands are orthogonal. [A2, step 1.1]

2.2 For $x=U((f_j)_j)$ one has $Q_{\mathrm{type}}x=x$ if and only if $f_j=f_j\mathbf 1_{M_j^{\mathrm{type}}}$ $\mu_j$-almost everywhere for all $j$, if and only if $F_x=\sum_j|f_j|^2\mu_j$ is of the corresponding type: apply [A4] to $|f_j|^2\mu_j\ll\mu_j$ and use uniqueness of the three-component decomposition. The three types are stable under countable sums and under the transport of [A1]. Hence $H_{\mathrm{type}}=\operatorname{ran}Q_{\mathrm{type}}$. [A1, A2, A4, step 1.1]

3.1 By step 2.2 the three subspaces are the ranges of pairwise orthogonal projections summing to $I$; hence they are closed, mutually orthogonal and $H=H_{\mathrm{pp}}\oplus H_{\mathrm{ac}}\oplus H_{\mathrm{sc}}$, and the construction depends only on the measures $F_x$, that is, on $T$. [step 2.1, step 2.2]

3.2 Each $Q_{\mathrm{type}}$ commutes with $C$, hence with every $F(B)$ and with every $E(B)=F(\psi(B))$, so it leaves $D(T)$ invariant and commutes with $T$ there: the subspaces reduce $T$. [A1, A2, step 2.1]

3.3 Separable clause: by [A2] the index set $J$ is at most countable; the finite measure $\mu^C:=\sum_j2^{-j}\mu_j/\mu_j(S^1)$ is maximal for $C$, since $F_x=\sum_j|f_j|^2\mu_j\ll\mu^C$ for every $x$, and $\mu:=\psi_*\mu^C$ is maximal for $T$, since $E_x$ is the pushforward of $F_x$ by $\psi^{-1}$. Choose disjoint carriers $B_{\mathrm{pp}},B_{\mathrm{ac}},B_{\mathrm{sc}}$ of the three Lebesgue components of $\mu$ as in [A3]. For $E_x\ll\mu$, [A4] gives $E_x$ purely atomic exactly when $E_x(B_{\mathrm{pp}}^c)=0$, absolutely continuous exactly when $E_x(B_{\mathrm{ac}}^c)=0$, and atomless singular exactly when $E_x(B_{\mathrm{sc}}^c)=0$. Since $E_x(B_{\mathrm{type}}^c)=\|E(B_{\mathrm{type}}^c)x\|^2$, step 2.2 then identifies $H_{\mathrm{type}}$ with $\operatorname{ran}E(B_{\mathrm{type}})$. [A2, A3, A4, step 2.2]

4.1 Each restriction $T_{\mathrm{type}}:=T|_{H_{\mathrm{type}}}$ is self-adjoint, being the restriction of a self-adjoint operator to a reducing subspace, and its spectral PVM is $B\mapsto E(B)|_{H_{\mathrm{type}}}$; by step 2.2 the scalar measures of that PVM are of the corresponding type, so the restrictions have purely atomic, absolutely continuous and atomless singular spectral measures respectively. [step 2.2, step 3.2]

5.1 Steps 2.1, 2.2, 3.1 and 3.2 establish all claims of the statement. ∎
