---
id: thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence
aliases: [nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]
kind: theorem
domain: mathematics
title: "Vacuum emission Dyson convergence"
status: draft
origin: pipeline
dependency_level: 8
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqm-composites-euclidean-l2-product-unitary, lem-linearity-of-the-bochner-integral, thm-dominated-convergence, thm-cauchy-schwarz-in-an-inner-product-space, thm-choice-implies-dependent-implies-countable-choice, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-linearity-of-the-bochner-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Time-Dependent Perturbation Theory pp. 175-182 (Dyson series and interaction picture)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (Stone's theorem, unitary dynamics and uniqueness)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Adopt the objects and
hypotheses of [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]]:
$d\ge1$, Hermitian matrices $H_a,D_1,\dots,D_J$ on $\mathbb C^d$, cutoff
$\Lambda>0$, transverse vectors $g_j$ with
$\operatorname{supp}g_j\subseteq\{0<\varepsilon\le\Lambda\}$ and
$g_j/\sqrt\varepsilon\in\mathfrak h$, coupling $\eta_0\in\mathbb R$,
$$H_0:=H_a\otimes I+I\otimes H_f,\qquad B:=\eta_0\sum_{j=1}^JD_j\otimes\phi(g_j),\qquad H:=H_0+B,$$
all with domain $C^d\otimes D(H_f)$ so that $H_0$ and $H$ are self-adjoint on
that domain. Fix $\hbar>0$, a unit vector $v_a\in\mathbb C^d$ and
$\Psi_0:=v_a\otimes\Omega$, and define the interaction-picture family
$$V(t):=e^{itH_0/\hbar}Be^{-itH_0/\hbar}\qquad(t\in\mathbb R).$$
For $n\ge0$ and $t\ge0$ let
$$\Psi_n(t):=\Bigl(\frac1{i\hbar}\Bigr)^{\!n}\int_{0<t_1<\cdots<t_n<t}V(t_n)\cdots V(t_1)\Psi_0\,dt_1\cdots dt_n$$
(iterated Bochner integral in $C^d\otimes D(H_f)$; $\Psi_0(t):=\Psi_0$). Put
$C:=2\sum_{j=1}^J\|D_j\|\,\|g_j\|/\hbar$ and $C':=C\Lambda$. Then:

(a) for all $n\ge0$ and $t\ge0$,
$$\|\Psi_n(t)\|\le\frac{(|\eta_0|Ct)^n}{\sqrt{n!}};$$

(b) the vectors $\Psi_n(t)$ lie in $C^d\otimes D(H_f)$, the series
$\sum_{n\ge0}\Psi_n(t)$ converges in the graph norm of $H_f$ uniformly for $t$
in compact subsets of $[0,\infty)$, and its sum $\Psi(t)$ satisfies
$$i\hbar\,\partial_t\Psi(t)=V(t)\Psi(t),\qquad \Psi(0)=\Psi_0 ;$$

(c) the Dyson sum solves the actual self-adjoint evolution:
$e^{-itH_0/\hbar}\Psi(t)=e^{-itH/\hbar}\Psi_0$ for every $t\ge0$;

(d) explicit tail bound: for $0\le t\le T$ and $N\ge1$,
$$\Bigl\|e^{-itH/\hbar}\Psi_0-e^{-itH_0/\hbar}\sum_{n=0}^{N-1}\Psi_n(t)\Bigr\|\le\sum_{n\ge N}\frac{(|\eta_0|CT)^n}{\sqrt{n!}} .$$

The convergence is proved for the actual self-adjoint $H$ on the stated domain;
this is not a formal manipulation of divergent series, and no all-time
weak-coupling, Markov or exponential-decay statement is made.

## Facts & Assumptions

**Given:** the cutoff data, self-adjoint $H_0,H$ on $\mathcal G:=\mathbb C^d\otimes D(H_f)$, $F:=I\otimes H_f$, $B:=\eta_0\sum_jD_j\otimes\phi(g_j)$, $U_0(t):=e^{itH_0/\hbar}$, $V(t):=U_0(t)BU_0(-t)$, and the vacuum initial vector. Put $\|x\|_{\mathcal G}:=\|x\|+\|Fx\|$; let $\mathcal K_m$ be the closed subspace with photon numbers at most $m$, including the atomic factor, and $\mathcal G_m:=\mathcal G\cap\mathcal K_m$. Define the coupling-independent constant $\gamma:=2\sum_j\|D_j\|\,\|g_j\|$, so $C=\gamma/\hbar$.

[F1] The cutoff relative-bound theorem gives symmetry of $B$, its relative bound zero, and self-adjointness of $H_0,H$ on $\mathcal G$ ([[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] (a)-(c)). In particular $B:\mathcal G\to\mathcal K$ is bounded for the graph norm, where $\mathcal K=\mathbb C^d\otimes F(\mathfrak h)$; since $H_0-F$ is bounded, the two graph norms are equivalent.

[F2] The sector formulas give $\|A_\pm(g)x\|\le\sqrt{m+1}\|g\|\|x\|$ on $\mathcal K_m$, and each changes photon number by one; their sum has bound $2\sqrt{m+1}\|g\|$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] (b),(c), [[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]] (a),(b)). Contraction is conjugate-linear in its vector argument and satisfies $\Psi_g(u\otimes z)=\langle u,g\rangle z$.

[F3] The free field operator is the positive closed sector sum with multiplier $\sum_i\varepsilon(k_i)$, and $H_f\Omega=0$. Its sector projections commute with its unitary group ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] (a)-(c)). The Euclidean product identification, tensor density and permutation formulas are [[lem-nrqm-composites-euclidean-l2-product-unitary]], [[lem-nrqm-composites-hilbert-tensor-construction]] and [[lem-nrqm-composites-permutation-sector-projections]]. AC supplies any DC prerequisite of the free-field supplier ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F4] A finite Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]). A self-adjoint operator's unitary group is strongly continuous, preserves its domain and commutes with it, and is differentiable on domain vectors ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[F5] A continuous Banach-valued curve on a compact interval is Bochner integrable; its primitive has the curve as derivative, including one-sided endpoint derivatives, and the integral obeys the norm bound and linearity ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[lem-linearity-of-the-bochner-integral]]). Bounded linear maps commute with such integrals: this holds for simple approximants by linearity and passes to their $L^1$ limits by the map's norm bound.

## Proof

**Proof technique:** direct; prove finite-photon graph vertex bounds, integrate vertices in chronological order, sum in the graph norm and identify the resulting strong solution with the self-adjoint evolution.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Free flow and vertex bounds] Diagonalizing the finite Hermitian $H_a$ and using [F3], [F4] gives $U_0(t)=e^{itH_a/\hbar}\otimes e^{itH_f/\hbar}$. Thus $U_0(t)$ preserves each $\mathcal K_m$, commutes with $F$ on $\mathcal G$, and is isometric and strongly continuous for the graph norm: both $U_0(t)x$ and $FU_0(t)x=U_0(t)Fx$ are continuous. On $\mathcal K_m$, the finite-sector extension of $B$ from [F2] satisfies $\|Bx\|\le|\eta_0|\gamma\sqrt{m+1}\|x\|$ and takes values in $\mathcal K_{m+1}$. Its free conjugate therefore satisfies $\|V(t)x\|\le|\eta_0|\gamma\sqrt{m+1}\|x\|$. The factor $|\eta_0|$ is included exactly once in this bound; $\gamma$ and $C$ contain no coupling. [F1, F2, F3, F4, algebra]

1.2 [Cutoff commutator and graph-domain extension] For $g$ supported in $\{0<\varepsilon\le\Lambda\}$, $\varepsilon g\in\mathfrak h$ and $\|\varepsilon g\|\le\Lambda\|g\|$. On symmetric elementary tensors with factors in $D(\varepsilon)$, the sector multiplier and creation formula give $[H_f,A_+(g)]=A_+(\varepsilon g)$. For contraction the removed factor contributes $-\langle\varepsilon u,g\rangle=-\langle u,\varepsilon g\rangle$, so $[H_f,A_-(g)]=-A_-(\varepsilon g)$. These identities extend to every finite-photon graph vector, with no claim that all of $F_0$ lies in $D(H_f)$. Indeed, in sector $n$ first cut each mode to $\varepsilon\le R$; dominated convergence in the Euclidean representation [F3] gives convergence of both the vector and its energy multiplier. On that cutoff subspace, energy is bounded by $nR$, so finite sums of elementary cutoff tensors, symmetrized, approximate in graph norm by tensor density. This supplies a graph core in each $\mathcal G_m$. The field and its candidate commutator are bounded on $\mathcal K_m$ by [F2], with respective bounds $2\sqrt{m+1}\|g\|$ and $2\Lambda\sqrt{m+1}\|g\|$. Applying the core identity to a graph-approximating sequence makes the output and its energy image converge; closedness of $H_f$ proves graph-domain preservation and the identity on the limit. Hence for $x\in\mathcal G_m$, $Bx\in\mathcal G_{m+1}$ and
$$FBx=BFx+Q_Bx,\qquad Q_B:=\eta_0\sum_jD_j\otimes\bigl(A_+(\varepsilon g_j)-A_-(\varepsilon g_j)\bigr),\qquad \|Q_Bx\|\le|\eta_0|\gamma\Lambda\sqrt{m+1}\|x\|.$$
[F2, F3, algebra, construct]

1.3 [Conjugated commutator and graph continuity] Since $F$ commutes with $U_0(t)$, step 1.2 gives on $\mathcal G_m$
$$FV(t)x=V(t)Fx+Q(t)x,\qquad Q(t):=U_0(t)Q_BU_0(-t),$$
with $\|Q(t)x\|\le|\eta_0|\gamma\Lambda\sqrt{m+1}\|x\|$. The conjugations in $Q(t)$ are retained. Equivalently, the sector formulas give $D_j(t)=e^{itH_a/\hbar}D_je^{-itH_a/\hbar}$ and $g_j(t)=e^{it\varepsilon/\hbar}g_j$, with
$$V(t)=\eta_0\sum_jD_j(t)\otimes\phi(g_j(t)),\qquad Q(t)=\eta_0\sum_jD_j(t)\otimes\bigl(A_+(\varepsilon g_j(t))-A_-(\varepsilon g_j(t))\bigr).$$
The same positive phase occurs in the annihilation vector argument because that argument is conjugate-linear, as in [F2]. The resulting graph bound is
$$\|V(t)x\|_{\mathcal G}\le|\eta_0|\gamma\sqrt{m+1}\bigl(\|Fx\|+(1+\Lambda)\|x\|\bigr).$$
Thus $V(t):\mathcal G_m\to\mathcal G_{m+1}$ is uniformly bounded in $t$ for these graph norms. Strong graph continuity of $U_0$, the fixed graph-bounded $B$ between these spaces, and the expression $U_0(t)BU_0(-t)x$ show that $t\mapsto V(t)x$ is graph continuous. On the full $\mathcal G$, [F1] and the graph isometry of $U_0$ additionally give $\|V(t)x\|\le K\|x\|_{\mathcal G}$ for one finite $K$ independent of $t$, and strong continuity as a map $\mathcal G\to\mathcal K$. No global map $V(t):\mathcal G\to\mathcal G$ is asserted. [F1, F2, F4, step 1.1, step 1.2, algebra]

2.1 [Chronological products and their graph bounds] Define $P_n(t_1,\ldots,t_n):=V(t_n)\cdots V(t_1)\Psi_0$, with $P_0=\Psi_0$. At the $k$-th vertex, the earlier product is in $\mathcal G_{k-1}$, so steps 1.1 and 1.3 give a factor $|\eta_0|\gamma\sqrt k$ in its Hilbert bound. Consequently $P_n\in\mathcal G_n$ and $\|P_n\|\le(|\eta_0|\gamma)^n\sqrt{n!}$. The graph commutator gives recursively $\|FP_k\|\le|\eta_0|\gamma\sqrt k(\|FP_{k-1}\|+\Lambda\|P_{k-1}\|)$; since $F\Psi_0=0$, induction yields $\|FP_n\|\le n\Lambda(|\eta_0|\gamma)^n\sqrt{n!}$. Each product is jointly continuous in its time variables for the graph norm: at each stage use strong graph continuity of the next $V$ on a fixed vector and its uniform graph bound to control the changing previous vector. For $n=0$ the Hilbert bound is $1$ and the energy bound is $0$, including when $|\eta_0|\gamma=0$. [F3, step 1.1, step 1.3, algebra, induction]

2.2 [Graph Bochner terms and the genuine recurrence] The graph space $\mathcal G$ is Banach: a graph-Cauchy sequence has limits of both the vectors and their $F$ images in the Hilbert space, and closedness of $F$ identifies them as a graph limit. Each $\mathcal G_n$ is closed in it. Step 2.1 and [F5] therefore make every iterated chronological integral a Bochner integral in $\mathcal G_n$. Its graph and Hilbert norm bounds follow by integrating the preceding product bounds over the simplex; the volume is $t^n/n!$, obtained recursively from $\int_0^t s^{n-1}/(n-1)!\,ds=t^n/n!$. Each factor of the integral contributes $1/\hbar$, giving
$$\|\Psi_n(t)\|\le\frac{(|\eta_0|Ct)^n}{\sqrt{n!}},\qquad \|F\Psi_n(t)\|\le\frac{n\Lambda(|\eta_0|Ct)^n}{\sqrt{n!}}.$$
For $n=0$ these bounds mean $1$ and $0$. Integrating the latest vertex last gives the actual left-vertex recurrence
$$\Psi_{n+1}(t)=\frac1{i\hbar}\int_0^tV(s)\Psi_n(s)\,ds.$$
For fixed $s$, move $V(s)$ through the inner integral as a bounded linear map $\mathcal G_n\to\mathcal G_{n+1}$ by [F5]; the earlier vertices have times below $s$, with $V(s)$ on the left. This also proves graph continuity of each term, and proves (a) and graph-domain membership in (b). [F3, F5, step 2.1, algebra]

3.1 [Uniform graph convergence] Fix $T<\infty$ and put $a:=|\eta_0|CT$. The graph majorant is $\sum_{n\ge0}(1+n\Lambda)a^n/\sqrt{n!}$. For $a>0$ the ratio of consecutive scalar terms tends to zero: it is $a(1+(n+1)\Lambda)/((1+n\Lambda)\sqrt{n+1})$. It is eventually at most $1/2$, proving convergence by a geometric tail comparison. If $a=0$, every positive-order term is zero and only the zeroth term remains. Thus the series converges uniformly for $0\le t\le T$ in the Banach graph space, and its sum $\Psi(t)$ is graph continuous and belongs to $D(H)=\mathcal G$. [step 2.2, algebra]

3.2 [Integral equation and Hilbert derivative] The uniform bound $\|V(s)x\|\le K\|x\|_{\mathcal G}$ from step 1.3 makes $V(s)\sum_{n\le M}\Psi_n(s)$ converge uniformly in Hilbert norm on $[0,T]$ to $V(s)\Psi(s)$. This limiting curve is continuous by graph continuity of $\Psi$, strong continuity of $V:\mathcal G\to\mathcal K$, and the same uniform bound. Sum the recurrences of step 2.2 and use the Bochner norm inequality [F5] to pass to the limit in their Hilbert integrals. The result is $\Psi(t)=\Psi_0+(i\hbar)^{-1}\int_0^tV(s)\Psi(s)\,ds$. The Banach-valued fundamental theorem now gives $\Psi\in C^1([0,T];\mathcal K)$, with the right derivative at zero, and $i\hbar\Psi'(t)=V(t)\Psi(t)$, $\Psi(0)=\Psi_0$. Along with step 3.1 this proves (b); graph continuity is used for domain control, while the differential equation is a Hilbert-space derivative. [F5, step 1.3, step 2.2, step 3.1, algebra]

4.1 [Identification with the self-adjoint dynamics] Put $Y(t):=U_0(-t)\Psi(t)$. It is graph continuous and belongs to $D(H)$. The difference quotient splits into the difference of the free group on the fixed domain vector $\Psi(t)$ and the free group times the difference quotient of $\Psi$, so [F4] and step 3.2 justify the product derivative in Hilbert norm. Thus $i\hbar Y'=H_0Y+U_0(-t)V(t)\Psi=H_0Y+BY=HY$ and $Y(0)=\Psi_0$. By [F1], [F4], the Stone curve $e^{-itH/\hbar}\Psi_0$ is another strong domain-valued solution because $\Psi_0\in\mathcal G=D(H)$. For their difference $w$, symmetry of $H$ gives
$$\frac d{dt}\|w(t)\|^2=2\operatorname{Re}\langle w'(t),w(t)\rangle=2\operatorname{Re}\left(-\frac i\hbar\langle Hw(t),w(t)\rangle\right)=0.$$
Both initial values agree, so $w=0$, proving (c) for every finite $t\ge0$. [F1, F4, step 3.1, step 3.2, algebra]

5.1 [Tail, vacuum and zero branches] By step 4.1 and unitarity, the truncation error at time $t$ equals in norm the interaction-picture tail, so it is at most $\sum_{n\ge N}(|\eta_0|Ct)^n/\sqrt{n!}$; for $0\le t\le T$ this is at most the stated $T$ tail, proving (d). The vacuum zeroth term has $F\Psi_0=0$ and norm one. At $t=0$ all positive-order integrals vanish. If $\eta_0=0$, or if $\gamma=0$ (all contributing $D_j$ or $g_j$ zero), then $B=V=0$, all positive-order terms vanish, the interaction-picture sum is exactly $\Psi_0$, and the tail is zero for every $N\ge1$. The argument supplies finite-time convergence and the actual self-adjoint evolution, with the original scope limitations retained. [F3, F4, step 2.2, step 4.1, algebra] ∎
