---
id: cor-the-unitary-dual-of-sl2-r-is-non-discrete-and-non-hausdorff-at-the-stated-limits
kind: corollary
title: The unitary dual of SL2(R) is non-discrete and non-Hausdorff at the stated limits
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-matrix-coefficient-of-a-unitary-representation
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-limits-of-discrete-series-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-unitarity-of-the-sl2-complementary-series
  - cor-complementary-series-converge-to-the-trivial-representation
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is assumed and inherited through the compact-picture, unitary-dual, and Fell-topology constructions. The finite coefficient-neighborhood and Casimir comparisons use no further choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (NSF/CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Example 2.6 and the unitarizable list, printed pp. 10–12 (the two odd zero limits and the principal-series parameter family)"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(3), printed pp. 300–301 (only-if criterion: isomorphic principal series have equal or inverse characters; the inverse-intertwiner direction is Exercise 7.4.12); Theorem 7.4.24, pp. 313–315 (unique unitary parameter list and proof sketch)."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the Fell topology on the unitary dual of $G=\mathrm{SL}_2(\mathbb R)$ ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]]).

**(1)** As $s\downarrow0$ through positive values, the classes $[I_{1,is}]$ converge to both distinct classes $[D_1^-]$ and $[D_1^+]$. Consequently the unitary dual is not Hausdorff.

**(2)** As $s\downarrow0$ through positive values, the pairwise distinct classes $[I_{0,is}]$ converge to $[I_{0,0}]$. Consequently the unitary dual is not discrete.

**(3)** For $0<r<1$, the spherical complementary classes $[I_{0,r}]$ are distinct from the trivial class and converge to it as $r\uparrow1$, as in [[cor-complementary-series-converge-to-the-trivial-representation]].

## Facts & Assumptions

**Given:** AC; the Fell topology and unitary dual; the compact-picture principal-series family; the limit representations; and the spherical complementary-series convergence result.

[F1] A basic Fell neighborhood is specified by finitely many diagonal matrix coefficients, compact test sets, and positive tolerances; a class is a point of $\widehat G$ exactly when its representation is irreducible and strongly continuous unitary ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-locally-compact-group]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F2] For each $\xi\in L^2_\varepsilon(K)$, the diagonal coefficients of $\Pi_{\varepsilon,s}$ converge uniformly on every compact subset of $G$ to those of $\Pi_{\varepsilon,s_0}$ as $s\to s_0$ ([[lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series]]).

[F3] $I_{1,0}=D_1^-\oplus D_1^+$ orthogonally, both limits are irreducible strongly continuous unitary representations, and their K-type supports are the negative and positive odd tails respectively ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F4] $I_{\varepsilon,\nu}$ is generically irreducible off $\mathcal W_\varepsilon$, and the Casimir scalar on its K-finite module is $(\nu^2-1)/8$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]], [[def-k-finite-and-smooth-vectors-for-sl2-r]]).

[F5] The compact-picture action is strongly continuous and unitary for $\nu\in i\mathbb R$ ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F6] For $0<r<1$, the class $[I_{0,r}]$ converges to the trivial class in the Fell topology as $r\uparrow1$ ([[cor-complementary-series-converge-to-the-trivial-representation]]).

[F7] For $0<r<1$, the complementary representation is the positive weighted Hilbert completion of the even Fourier module, with $\|f_2\|_r^2=a_2(r)=(1-r)/(1+r)>0$ ([[thm-unitarity-of-the-sl2-complementary-series]]). Its $K$-action on $f_2$ is $\pi_r(k_\theta)f_2=e^{2i\theta}f_2$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]], [[thm-compact-picture-of-the-sl2-principal-series]]).

[A1] AC is assumed and inherited through the compact-picture, unitary-dual, and Fell-topology suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** apply compact-uniform coefficient continuity to one positive-parameter net, then distinguish its limit classes by K-types and Casimir.

**Given:** The definitions and supplier claims in the Statement and Facts.

1.1 For every $s>0$, [F4] and [F5] make $[I_{1,is}]$ a unitary-dual point. Fix a basic Fell neighborhood of either $[D_1^+]$ or $[D_1^-]$, testing finitely many diagonal coefficients of vectors in that limit representation on compact subsets of $G$. By [F3], these vectors embed in $L^2_1(K)$, and $\Pi_{1,0}$ restricts to the relevant limit on them. Applying [F2] to the finite set of vectors and compact sets gives $\delta>0$ such that every $0<s<\delta$ satisfies all tests. Thus the positive-parameter branch converges to both limits as $s\downarrow0$. In particular the same sequence $s_j=1/(j+1)$ converges to both. [F1, F2, F3, F4, F5, algebra, A1]

1.2 For $s>0$, [F4] and [F5] place $[I_{0,is}]$ in $\widehat G$. If $s,t>0$ and $[I_{0,is}]=[I_{0,it}]$, a unitary intertwiner maps smooth K-finite vectors to smooth K-finite vectors and intertwines their derived actions by differentiating the group-intertwining identity. It therefore preserves the Casimir scalar. By [F4] these scalars are $-(s^2+1)/8$ and $-(t^2+1)/8$, so $s=t$. Also $[I_{0,is}]\ne[I_{0,0}]$ for $s>0$, since their Casimir scalars differ. [F1, F4, F5, algebra]

2.1 The two limit classes are distinct: their K-type supports in [F3] are disjoint, and a unitary intertwiner must preserve the K-action. A sequence in the unitary dual with two distinct limits contradicts uniqueness of limits in every Hausdorff space. This proves (1). [F1, F3, step 1.1, algebra]

2.2 Fix a basic Fell neighborhood of $[I_{0,0}]$. Its finitely many diagonal coefficient tests use vectors in $L^2_0(K)$; [F2] gives compact-uniform convergence of each tested coefficient as $s\to0$, so all tests are satisfied by $[I_{0,is}]$ for sufficiently small positive $s$. Hence $[I_{0,is}]\to[I_{0,0}]$ along the positive branch. By step 1.2 these are distinct classes, so $[I_{0,0}]$ is not isolated. This proves (2). [F1, F2, F5, step 1.2, algebra]

3.1 For $0<r<1$, [F7] makes $f_2$ a nonzero vector in the complementary Hilbert space, with $K$-character $e^{2i\theta}$. A unitary intertwiner with the trivial representation would preserve this character; at $\theta=\pi/2$, it would send $-f_2$ and $f_2$ to the same vector, forcing the image of $f_2$ to vanish, contrary to injectivity. Hence $[I_{0,r}]$ is distinct from the trivial class. The convergence assertion is [F6]: its supplier proves compact-uniform convergence of the normalized spherical coefficient to $1$ and scales that coefficient to meet every finite test for a Fell neighborhood of the trivial class. This proves (3). [F6, F7, A1, algebra] ∎
