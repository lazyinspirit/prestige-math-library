---
id: thm-integral-cohomology-of-bu-n
kind: theorem
title: Integral cohomology of BU(n)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, lem-universal-complex-flag-bundle-is-bt-n, thm-fundamental-theorem-of-symmetric-polynomials, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, def-complex-flag-bundle-and-chern-roots, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting principle and the classifying-space construction."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Symmetric polynomials and H^*(BU(n)), printed pp.130-132"
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Grassmannian cohomology ring, printed pp.82-84"
---

## Statement

Assume AC and $n\geq1$. Let $E\mathbb U(n)\to B\mathbb U(n)$ be the universal rank-$n$
complex bundle over the Grassmannian model $B\mathbb U(n)=
\operatorname{Gr}_n(\mathbb C^\infty)$, and let
$q:BT^n=E\mathbb U(n)/T^n\to B\mathbb U(n)$ be the universal flag bundle of
[[lem-universal-complex-flag-bundle-is-bt-n]]. Then restriction along $q$
identifies
$$H^*(B\mathbb U(n);\mathbb Z)\cong\mathbb Z[c_1,\dots,c_n],$$
the polynomial ring on the Chern classes of the universal bundle, and sends
$c_i$ to the $i$-th elementary symmetric polynomial $e_i(t_1,\dots,t_n)$ in
the coordinate Chern roots of $BT^n$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the splitting and classifying-space suppliers ([[def-axiom-of-choice]]).

[F1] The flag projection $q$ splits $q^*E=L_1\oplus\cdots\oplus L_n$ into the tautological lines and $q^*:H^*(B\mathbb U(n);\mathbb Z)\to H^*(BT^n;\mathbb Z)$ is injective ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F2] Chern classes are natural and multiplicative over Whitney sums, with $c(L)=1+c_1(L)$ for a line ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F3] $H^*(BT^n;\mathbb Z)=\mathbb Z[t_1,\dots,t_n]$ with $t_i=c_1(L_i)$, the image of $q^*$ is contained in the symmetric invariants, and the universal bundle over $B\mathbb U(n)$ is the quotient of the universal principal bundle by $\mathbb U(n)$ ([[lem-universal-complex-flag-bundle-is-bt-n]]).

[F4] Over every commutative ring the symmetric polynomials in $n$ variables are the polynomials in the elementary symmetric functions $e_1,\dots,e_n$, with $R[T_1,\dots,T_n]\to R[x_1,\dots,x_n]^{\Sigma_n}$ an isomorphism ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F5] The Grassmannian $\operatorname{Gr}_n(\mathbb C^\infty)$ is the chosen model of $B\mathbb U(n)$ and classifies numerable rank-$n$ complex bundles ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F6] The tautological lines $L_i$ over the flag bundle are complex line bundles with $q^*E=L_1\oplus\cdots\oplus L_n$ ([[def-complex-flag-bundle-and-chern-roots]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the universal bundle $E\to B\mathbb U(n)$ and its flag bundle $q:BT^n\to B\mathbb U(n)$.

1.1 Applying [F2] to the splitting $q^*E=L_1\oplus\cdots\oplus L_n$ of [F1] gives $q^*c(E)=\prod_{i=1}^n(1+t_i)$ in $H^*(BT^n;\mathbb Z)$, hence $q^*c_i(E)=e_i(t_1,\dots,t_n)$, the $i$-th elementary symmetric polynomial. [F1, F2, F6]

1.2 By [F3] the image of $q^*$ is contained in the symmetric invariants of $\mathbb Z[t_1,\dots,t_n]$, and by [F4] those invariants are exactly $\mathbb Z[e_1,\dots,e_n]$. [F3, F4]

2.1 By step 1.1 the image of $q^*$ contains $\mathbb Z[e_1,\dots,e_n]$, since it contains the images of the classes $c_i$; with step 1.2 this forces the image of $q^*$ to be exactly the invariant subring $\mathbb Z[e_1,\dots,e_n]$. [F4, step 1.1, step 1.2]

3.1 Let $\varphi:\mathbb Z[C_1,\dots,C_n]\to H^*(B\mathbb U(n);\mathbb Z)$ be the ring map $C_i\mapsto c_i$ and let $s:\mathbb Z[C_1,\dots,C_n]\to\mathbb Z[t_1,\dots,t_n]^{\Sigma_n}$ be the substitution $C_i\mapsto e_i$ of [F4]. Then $q^*\circ\varphi=s$, which is an isomorphism by [F4]; injectivity of $q^*$ from [F1] makes $\varphi$ injective, and step 2.1 makes $\varphi$ surjective. Hence $\varphi$ is an isomorphism, which is the assertion. [F1, F4, step 2.1]

4.1 Boundary cases. For $n=1$ the statement reads $H^*(B\mathbb U(1);\mathbb Z)=\mathbb Z[c_1]$ with $c_1=e_1=t_1$, which is the published ring $\mathbb Z[u]$ of $\mathbb{CP}^\infty$; the flag bundle is $q=\mathrm{id}$ and [F1] is trivial. The rank-zero case is excluded by $n\geq1$; the coefficient ring $\mathbb Z$ is a PID and the polynomial rings considered are free, so the fundamental theorem applies verbatim. The universal bundle exists by [F5], and AC is used only through [A1] in the classifying-space and metric suppliers. [A1, F1, F4, F5, step 3.1] ∎

## Source notes

Miller's Lecture 35 and Hatcher's section 3.1 prove $H^*(B\mathbb U(n);\mathbb Z)=\mathbb Z[c_1,\dots,c_n]$ exactly by the symmetric-polynomial argument used here: the flag pullback is injective, the image lies in the invariants because the Weyl group permutes the roots, and the elementary symmetric functions generate the invariant ring. The proof above avoids any finite-index or Gysin shortcut.
