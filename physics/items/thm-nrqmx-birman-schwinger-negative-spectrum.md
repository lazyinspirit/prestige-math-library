---
id: thm-nrqmx-birman-schwinger-negative-spectrum
kind: theorem
domain: mathematics
library: mathematics
title: Birman–Schwinger principle for bounded compactly supported potentials
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - thm-nrqmx-free-laplacian-form-domain
  - thm-nrqmx-closed-form-representation
  - thm-nrqmx-form-min-max
  - lem-nrqmx-yukawa-resolvent-kernel
  - thm-kato-rellich
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-nrqm-coulomb-ltwo-kernel-operators
  - lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact
  - def-discrete-and-essential-spectrum-of-a-self-adjoint-operator
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-free-laplacian-form-domain: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
  thm-nrqmx-form-min-max: mathematical-premise
  lem-nrqmx-yukawa-resolvent-kernel: mathematical-premise
  thm-kato-rellich: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  def-nrqm-coulomb-ltwo-kernel-operators: mathematical-premise
  lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 3, §3.3, printed pp.42-45: Birman-Schwinger correspondence,
        compactness, and eigenvalue counting. The notes use an inclusive
        endpoint convention; this item proves the strict-below cutoff stated
        here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let
$W:\mathbb R^3\to[0,\infty)$ be measurable, essentially bounded, and zero
almost everywhere outside a compact set $S$. Put $s(x)=\sqrt{W(x)}$ almost
everywhere. On $L^2=L^2(\mathbb R^3;\mathbb C)$, let
$M_s,M_W:L^2\to L^2$ be the multiplication operators $(M_sf)(x)=s(x)f(x)$
and $(M_Wf)(x)=W(x)f(x)$, interpreted as almost-everywhere classes. These are
bounded nonnegative self-adjoint operators with $M_s^2=M_W$ and
$\|M_s\|^2,\|M_W\|\le\|W\|_{L^\infty}$. Let $H_0=-\Delta$ be the free
Laplacian with domain
$D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$, and set
$H=H_0-M_W$ on $D(H_0)$. For $\kappa>0$ define
$$K_\kappa=M_s(H_0+\kappa^2 I)^{-1}M_s.$$
Then $H$ is self-adjoint and bounded below, and $K_\kappa$ is positive,
self-adjoint, and compact, with integral kernel
$$s(x)\frac{e^{-\kappa|x-y|}}{4\pi|x-y|}s(y).$$
The eigenspaces at $-\kappa^2$ for $H$ and at $1$ for $K_\kappa$ are linearly
isomorphic. Moreover, the finite number of eigenvalues of $H$ strictly below
$-\kappa^2$, counted with multiplicity, equals the finite number of
eigenvalues of $K_\kappa$ strictly greater than $1$, counted with
multiplicity.

## Statement references

[[thm-nrqmx-form-min-max]]

[[thm-kato-rellich]]

[[lem-nrqmx-yukawa-resolvent-kernel]]

## Facts & Assumptions

**Given:** Choice and Countable Choice, $W$ and $\kappa$ as in the Statement,
and the dimensionless convention $H_0=-\Delta$.

[A1] The free operator has form domain $W^{1,2}$, form
$q_0[u]=\|\nabla u\|_2^2$, and operator domain $W^{2,2}$
([[thm-nrqmx-free-laplacian-form-domain]]).

[F1] A bounded symmetric perturbation preserves self-adjointness on $D(H_0)$.
The form perturbation clause of the closed-form representation theorem makes
$q_H(u,v)=q_0(u,v)-\langle M_su,M_sv\rangle$ closed and semibounded on
$W^{1,2}$;
its proof identifies its representing operator and its full square-root
spectral form ([[thm-kato-rellich]],
[[thm-nrqmx-closed-form-representation]]).

[F2] For $\kappa>0$, $R_\kappa=(H_0+\kappa^2)^{-1}$ has kernel
$G_\kappa(x-y)=e^{-\kappa|x-y|}/(4\pi|x-y|)$ and is positive
([[lem-nrqmx-yukawa-resolvent-kernel]]).

[F3] A self-adjoint semibounded operator's form is the spectral integral of
$\lambda$ against its spectral measure; its spectral projections on disjoint
Borel sets are orthogonal, and bounded spectral intervals lie in the form
domain ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[thm-unbounded-borel-functional-calculus]]).

[F4] Positive compact self-adjoint operators have an orthonormal eigenbasis
off their kernel; their spectral subspace for eigenvalues greater than $1$ is
finite dimensional, and its dimension counts those eigenvalues with
multiplicity ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F5] Every square-integrable kernel on $\mathbb R^3\times\mathbb R^3$ defines
a bounded compact integral operator on $L^2(\mathbb R^3)$
([[def-nrqm-coulomb-ltwo-kernel-operators]],
[[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]]).

[F6] A point belongs to the essential spectrum exactly when every open
interval around it has an infinite-rank spectral projection
([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]]).

[F7] The form min-max values of a semibounded self-adjoint operator are its
ordered eigenvalues below the bottom of its essential spectrum, counted with
multiplicity ([[thm-nrqmx-form-min-max]]).

[A2] Choice and Countable Choice are the hypotheses required by the cited
representation and spectral results ([[def-axiom-of-choice]],
[[def-countable-choice]]).

## Proof

**Given:** [A1], [A2], and the potential, operators, and parameter in the
Statement.

1.1 Write $M=\|W\|_{L^\infty}$. The multiplication operators $M_W$ and $M_s$ are bounded, nonnegative, and self-adjoint, with $\|M_W\|\le M$ and $\|M_s\|^2\le M$. Since $H_0\ge0$, Kato–Rellich makes $H=H_0-M_W$ self-adjoint on $D(H_0)=W^{2,2}$, and $H\ge-MI$. On $W^{1,2}$ define $q_H(u,v)=q_0(u,v)-\langle M_su,M_sv\rangle$. The perturbation has form bound $a=0$, $b=M$, because $\langle M_su,M_su\rangle=\langle M_Wu,u\rangle\le M\|u\|_2^2$; hence [F1] makes $q_H$ closed and bounded below by $-M$. [A1, A2, F1, algebra]

2.1 Let $\widetilde H$ be the self-adjoint operator representing $q_H$ from [F1]. For $u\in W^{2,2}$ and $v\in W^{1,2}$, the free-form identity [A1] and $\langle M_su,M_sv\rangle=\langle M_Wu,v\rangle$ give $q_H(u,v)=\langle(H_0-M_W)u,v\rangle$. Thus $H\subseteq\widetilde H$; self-adjointness gives $\widetilde H\subseteq H^*=H$, so $\widetilde H=H$. The representation theorem's square-root identity on the full form domain, with shift $M+1$, and [F3] then identify $q_H$ with the spectral form of $H$. [A1, F1, F3, step 1.1, algebra]

2.2 The resolvent convolution formula in [F2] gives, for a.e. $x$,
$(K_\kappa f)(x)=s(x)\int G_\kappa(x-y)s(y)f(y)\,dy$; thus the displayed
function is the integral kernel of $K_\kappa$. If $S$ is a compact set outside
which $W=0$ almost everywhere and $M=\|W\|_\infty$, then
$$\iint |s(x)G_\kappa(x-y)s(y)|^2\,dx\,dy\le M^2|S|\int_{S-S}|G_\kappa(z)|^2\,dz<\infty,$$
because $S-S$ is bounded and the $|z|^{-1}$ singularity of $G_\kappa$ is
square-integrable locally in three dimensions. This is an $L^2$ kernel, so
[F5] makes its integral operator $K_\kappa$ Hilbert–Schmidt and compact.
[F2, F5, step 1.1, algebra]

3.1 In the Fourier representation of [A1],
$$R_\kappa=(H_0+\kappa^2 I)^{-1}=\mathcal F_2^*M_{(4\pi^2|\xi|^2+\kappa^2)^{-1}}\mathcal F_2.$$
The multiplier is real, strictly positive, and bounded by $\kappa^{-2}$; its positive square root is the bounded self-adjoint multiplier
$$R_\kappa^{1/2}=\mathcal F_2^*M_{(4\pi^2|\xi|^2+\kappa^2)^{-1/2}}\mathcal F_2.$$
Consequently $K_\kappa=(M_sR_\kappa^{1/2})(M_sR_\kappa^{1/2})^*$, so it is positive and self-adjoint. [A1, F2, step 2.2, algebra]

4.1 If $Hu=-\kappa^2u$, then $(H_0+\kappa^2 I)u=M_Wu$. Put $f=M_su$. If $f=0$, invertibility of $H_0+\kappa^2 I$ forces $u=0$; hence a nonzero eigenvector gives $f\ne0$ and $$K_\kappa f=M_sR_\kappa M_s(M_su)=M_sR_\kappa M_Wu=M_su=f.$$ Conversely, if $K_\kappa f=f$ with $f\ne0$, set $u=R_\kappa M_s f$. Then $M_su=K_\kappa f=f$, so $(H_0+\kappa^2 I)u=M_s f=M_s^2u=M_Wu$ and $Hu=-\kappa^2u$. These maps are inverse because $R_\kappa M_Wu=u$ for an eigenvector and $M_sR_\kappa M_s f=f$ for a $1$-eigenvector; therefore the eigenspaces are isomorphic. [F2, step 3.1, algebra]

4.2 Let $A=(H_0+\kappa^2 I)^{1/2}$, which maps $W^{1,2}$ bijectively onto $L^2$ by [A1] and Fourier calculus, and put $T=M_sA^{-1}$. Then $TT^*=K_\kappa$. The compactness of $K_\kappa$ implies $T$ is compact: for finite-rank spectral projections $P_n$ of $K_\kappa$ increasing to its support, $$\|(I-P_n)T\|^2=\|(I-P_n)K_\kappa(I-P_n)\|\longrightarrow0,$$ so $T$ is an operator-norm limit of the finite-rank maps $P_nT$. Hence $C=T^*T$ is positive compact. For $v=Au$, $u\in W^{1,2}$, the exact form identity is $$q_H[u]+\kappa^2\|u\|^2=\|v\|^2-\|Tv\|^2 =\langle(I-C)v,v\rangle.$$ The maps $u\mapsto v$ and $v\mapsto A^{-1}v$ are inverse bijections. [A1, F3, step 2.1, step 3.1, algebra]

5.1 The maximal dimension of a linear subspace on which the right side of the form identity in step 4.2 is strictly negative equals $\operatorname{rank}E_C((1,\infty))$: that spectral subspace is negative for $I-C$, and any subspace of larger dimension contains a nonzero vector orthogonal to it, where the spectral integral of $1-C$ is nonnegative. By [F4], this rank is the number of eigenvalues of $C$ above $1$, with multiplicity. [F3, F4, step 4.2, algebra]

6.1 The same maximal negative dimension equals $\operatorname{rank}E_H(( -\infty,-\kappa^2))$ by [F3]: the spectral range below the threshold is supported in $[-M,-\kappa^2)$ by step 1.1, so it lies in the form domain and is strictly negative for the shifted form. Any larger subspace has a nonzero vector in its orthogonal complement, where the shifted form is nonnegative. Step 5.1 makes this rank finite; its finite-dimensional spectral range therefore consists of eigenvectors, so its dimension is the number of eigenvalues of $H$ below $-\kappa^2$, counted with multiplicity. No essential spectral point lies strictly below $-\kappa^2$: a sufficiently small interval around any such point has finite-rank projection as a subprojection of $E_H(( -\infty,-\kappa^2))$, contrary to [F6]. Hence the essential threshold is at least $-\kappa^2$ (or $+\infty$), and [F7] identifies the same count with the form min-max levels strictly below the cutoff. Finally, $T$ maps each positive eigenspace of $C=T^*T$ bijectively onto the same-eigenvalue eigenspace of $K_\kappa=TT^*$, with inverse $\mu^{-1}T^*$ at eigenvalue $\mu>0$. Thus the number above $1$ for $C$ equals that for $K_\kappa$, proving the asserted count. [F3, F4, F6, F7, step 5.1, algebra] ∎
