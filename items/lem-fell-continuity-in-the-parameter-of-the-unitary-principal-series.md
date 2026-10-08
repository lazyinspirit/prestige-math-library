---
id: lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series
kind: lemma
title: Fell continuity of the unitary principal series in the parameter
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-fell-topology-on-the-unitary-dual
  - def-hilbert-direct-sum-of-unitary-representations
  - def-limits-of-discrete-series-for-sl2-r
  - def-matrix-coefficient-of-a-unitary-representation
  - def-unitary-dual-of-a-locally-compact-group
  - def-weak-containment-of-unitary-representations
  - lem-fell-closure-is-characterized-by-weak-containment
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-compact-picture-of-the-sl2-principal-series
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through normalized induction, the unitary dual and Hilbert direct sums. The compact-uniform cocycle estimate and coefficient approximation use no further choice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(1), Lemmas 7.4.4 and 7.4.7, printed pp. 293–299 (parameterized induced model, compact-picture cocycle, and unitary axis)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Definition 2.1 and Exercise 2.3(i)–(ii), printed pp. 7–9 (principal-series parameter and unitary axis)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G=\mathrm{SL}_2(\mathbb R)$, $\varepsilon\in\{0,1\}$, and $s_0\in\mathbb R$. Write $H_\varepsilon=L^2_\varepsilon(K)$ and let $\Pi_{\varepsilon,s}$ be the compact-picture representation of $I_{\varepsilon,is}$ on $H_\varepsilon$ ([[thm-compact-picture-of-the-sl2-principal-series]]). For every $\xi\in H_\varepsilon$ and compact $Q\subseteq G$,
$$\sup_{g\in Q}\left|\langle\Pi_{\varepsilon,s}(g)\xi,\xi\rangle-\langle\Pi_{\varepsilon,s_0}(g)\xi,\xi\rangle\right|\longrightarrow0\qquad(s\to s_0).$$
For $\delta>0$, set $J_{\varepsilon,s_0,\delta}=\{s\in\mathbb R:0<|s-s_0|<\delta,\ (\varepsilon,s)\ne(1,0)\}$ and $S_{\varepsilon,s_0,\delta}=\{[I_{\varepsilon,is}]:s\in J_{\varepsilon,s_0,\delta}\}\subseteq\widehat G$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]). Then $\Pi_{\varepsilon,s_0}$ is weakly contained both in the parameter-indexed direct sum $\widehat{\bigoplus}_{s\in J_{\varepsilon,s_0,\delta}}\Pi_{\varepsilon,s}$ and in the direct sum of one representative of each class in $S_{\varepsilon,s_0,\delta}$ ([[def-weak-containment-of-unitary-representations]], [[def-hilbert-direct-sum-of-unitary-representations]]). If $(\varepsilon,s_0)\ne(1,0)$, the irreducible class $[I_{\varepsilon,is_0}]$ lies in the Fell closure of $S_{\varepsilon,s_0,\delta}$; at $(\varepsilon,s_0)=(1,0)$, the reducible $I_{1,0}=D_1^+\oplus D_1^-$ is not a point of $\widehat G$, but both irreducible summands $D_1^+$ and $D_1^-$ lie in the Fell closure of $S_{1,0,\delta}$ ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]], [[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

## Facts & Assumptions

**Given:** AC; $\varepsilon\in\{0,1\}$; $s\in\mathbb R$; and the compact-picture family of [[thm-compact-picture-of-the-sl2-principal-series]].

[F1] Every $\Pi_{\varepsilon,s}$ acts unitarily and strongly continuously on the same $H_\varepsilon$. In the compact picture, for $a(k,g)=|\alpha(p(k,g))|>0$ and $kg=p(k,g)\kappa(k,g)$ in canonical $AN\times K$ coordinates, $$(\Pi_{\varepsilon,s}(g)f)(k)=a(k,g)^{1+is}f(\kappa(k,g)),$$ and $a,\kappa$ depend continuously on $(k,g)$ ([[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The finite linear combinations of $f_n(k_\theta)=e^{in\theta}$ with $n\equiv\varepsilon\pmod2$ are K-finite and dense in $H_\varepsilon$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] $c_{\xi,\eta}(g)=\langle\Pi(g)\xi,\eta\rangle$ is the matrix coefficient convention; weak containment means compact-uniform approximation of each diagonal coefficient by finite sums of diagonal coefficients ([[def-matrix-coefficient-of-a-unitary-representation]], [[def-weak-containment-of-unitary-representations]]).

[F4] The Hilbert direct sum of any set-indexed family of strongly continuous unitary representations is a strongly continuous unitary representation, and each summand embeds as a closed invariant subspace ([[def-hilbert-direct-sum-of-unitary-representations]]).

[F5] If $s\in J_{\varepsilon,s_0,\delta}$, then $I_{\varepsilon,is}$ is irreducible; if $(\varepsilon,s_0)\ne(1,0)$, so is $I_{\varepsilon,is_0}$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F6] At $(\varepsilon,s_0)=(1,0)$, $\Pi_{1,0}=D_1^+\oplus D_1^-$ orthogonally, and each $D_1^\pm$ is an irreducible strongly continuous unitary representation ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

[F7] For $S\subseteq\widehat G$, an irreducible $\pi\in\widehat G$ lies in $\overline S$ exactly when $\pi\prec\widehat{\bigoplus}_{\sigma\in S}\sigma$ ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]], [[lem-fell-closure-is-characterized-by-weak-containment]]).

[A1] AC is inherited from the compact-picture, dual, and Hilbert-direct-sum suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation in the Statement.

1.1 If $Q=\varnothing$ the coefficient assertion is immediate. Otherwise, by [F1] the positive function $a(k,g)$ is continuous on the compact set $K\times Q$, so $A_Q=\sup_{K\times Q}a<\infty$ and $M_Q=\sup_{K\times Q}|\log a|<\infty$. For a K-finite $f$, the compact-picture formula gives $(\Pi_{\varepsilon,s}(g)f)(k)=a(k,g)e^{is\log a(k,g)}f(\kappa(k,g))$. Using $|e^{it}-1|\le|t|$ for real $t$, we obtain $$\sup_{g\in Q}\|\Pi_{\varepsilon,s}(g)f-\Pi_{\varepsilon,s_0}(g)f\|_2\le A_QM_Q|s-s_0|\|f\|_\infty.$$ Cauchy–Schwarz then gives uniform convergence of the diagonal coefficients for this $f$. [F1, F3, algebra]

2.1 Let $\xi\in H_\varepsilon$ and choose K-finite $f$ with $\|\xi-f\|_2$ arbitrarily small using [F2]. For every $s$ and $g$, unitarity [F1] gives $$|\langle\Pi_{\varepsilon,s}(g)\xi,\xi\rangle-\langle\Pi_{\varepsilon,s}(g)f,f\rangle|\le(\|\xi\|_2+\|f\|_2)\|\xi-f\|_2.$$ The same bound holds at $s_0$, uniformly in $g$. Combining these two bounds with step 1.1 and first choosing $f$ close to $\xi$, then $s$ close to $s_0$, proves the claimed compact-uniform convergence for every $\xi$. [F1, F2, step 1.1, algebra]

3.1 Fix $\delta>0$. For any diagonal coefficient of $\Pi_{\varepsilon,s_0}$, compact $Q$, and tolerance $\eta>0$, step 2.1 gives a parameter $s\in J_{\varepsilon,s_0,\delta}$ whose coefficient differs by less than $\eta$ on $Q$; such parameters exist arbitrarily close to $s_0$ while avoiding the finitely many excluded points. Embedding the vector into the $s$-summand realizes that coefficient in the parameter-indexed direct sum of [F4]. The class $[I_{\varepsilon,is}]$ is also in $S_{\varepsilon,s_0,\delta}$; transporting the vector through a unitary equivalence to the chosen representative realizes the same coefficient in the class-indexed direct sum. Thus both weak-containment assertions follow. [F1, F3, F4, step 2.1, algebra, A1]

4.1 If $(\varepsilon,s_0)\ne(1,0)$, [F5] puts $[I_{\varepsilon,is_0}]$ in $\widehat G$, and every class indexed by $J_{\varepsilon,s_0,\delta}$ is in $\widehat G$ as well. Apply [F7] to step 3.1 to see that $[I_{\varepsilon,is_0}]$ lies in the Fell closure of those classes. [F5, F7, step 3.1]

5.1 At $(\varepsilon,s_0)=(1,0)$, every vector in either $D_1^+$ or $D_1^-$ is a vector of $H_1$, so each of its diagonal coefficients for the restricted representation is also a coefficient of $\Pi_{1,0}$. Step 3.1 therefore gives $D_1^\pm\prec\widehat{\bigoplus}_{s\in J_{1,0,\delta}}\Pi_{1,s}$; [F6] makes these irreducible dual points, and [F7] puts each class in the Fell closure. Since $D_1^+$ and $D_1^-$ are nonzero orthogonal summands, $\Pi_{1,0}$ is reducible and is not itself a point of $\widehat G$. [F6, F7, step 3.1] ∎
