---
id: ex-parameter-identifications-in-the-sl2-r-unitary-dual
kind: example
title: Parameter identifications in the SL2(R) unitary dual
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - def-limits-of-discrete-series-for-sl2-r
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - thm-unitarity-of-the-sl2-complementary-series
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is assumed and inherited through the Iwasawa, compact-picture, K-type, and unitary-model suppliers. The parameter comparisons use the supplied Casimir and K-type data without additional choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (NSF/CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Examples 2.6–2.7, the unitarizable list, and Exercise 2.8(iii), printed pp. 10–12: odd zero split, exceptional composition factors, unitary ranges, and the Weyl-parameter intertwiner (left as an exercise)."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(3) and Exercise 7.4.12, printed pp. 300–301 (parameter sign equivalence; the equivalence construction is an exercise); Lemmas 7.4.20–7.4.21, pp. 310–312 (spherical complementary range); Theorem 7.4.24, pp. 313–315 (unitary parameter list and uniqueness, with proof sketch)."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the normalized parameter $I_{\varepsilon,\nu}$ and exceptional lattice $\mathcal W_\varepsilon$ of [[def-normalized-principal-series-i-epsilon-nu]]. The following records the parameter identifications and reducible endpoints in this normalization.

For $\nu\notin\mathcal W_\varepsilon$, the irreducible principal-series representations satisfy $I_{\varepsilon,\nu}\cong I_{\varepsilon,-\nu}$. For nonzero $\nu\in\mathcal W_\varepsilon$, the two reducible full induced modules are not isomorphic. At $\varepsilon=1,\nu=0$, one has $I_{1,0}=D_1^-\oplus D_1^+$.

The K-types of $I_{\varepsilon,\nu}$ are exactly the characters of parity $m\equiv\varepsilon\pmod2$, each with multiplicity one. If $n\in\mathcal W_\varepsilon$ and $n\ge1$, then at $\nu=n$ the composition factors are $L_{n-1}$ and the two extremal modules $M^-_{n+1},M^+_{-(n+1)}$, with $L_{n-1}$ the quotient; at $\nu=-n$ the finite-dimensional factor is the submodule and the two tails form the quotient. For $n\ge2$, the algebraic K-finite modules of the discrete series $D_n^-$ and $D_n^+$ are isomorphic to $M^+_{-n}$ and $M^-_n$, respectively, at $\nu=n-1$; the Hilbert representations are the weighted completions in [[def-holomorphic-and-antiholomorphic-discrete-series-models]]. At $\varepsilon=0,\nu=\pm1$, the trivial module $L_0$ is a subquotient.

The unitary principal-series parameters are $I_{0,is}$ for $s\ge0$ and $I_{1,is}$ for $s>0$; the even point $I_{0,0}$ is irreducible, while $I_{1,0}$ is the limit split above. The spherical complementary family has parameters $I_{0,r}$ for $0<r<1$, with the sign labels $r$ and $-r$ identified; $\nu=\pm1$ are degenerate endpoints, not additional irreducible complementary-series points. Within each principal or complementary family, no two different absolute parameter values give isomorphic representations.

## Facts & Assumptions

**Given:** AC; the normalized principal-series conventions; the compact-picture K-type decomposition; the generic irreducibility and exceptional-parameter results; and the discrete and limit-series models.

[F1] $\mathcal W_0$ is the odd integer lattice and $\mathcal W_1$ is the even integer lattice; the normalized parameter is used throughout ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F2] In $I_{\varepsilon,\nu}$ the one-dimensional K-types are precisely $\mathbb C f_m$, $m\equiv\varepsilon\pmod2$, and each occurs once ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] Off $\mathcal W_\varepsilon$, $I^K_{\varepsilon,\nu}$ is irreducible and $I_{\varepsilon,\nu}\cong I_{\varepsilon,-\nu}$. At nonzero exceptional parameters, the finite-dimensional constituent is a quotient at $+n$ and a submodule at $-n$ ([[thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu]], [[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F4] At $\nu=n\in\mathcal W_\varepsilon$, $n\ge1$, the factors are $L_{n-1}$ and $M^-_{n+1},M^+_{-(n+1)}$; at $-n$ the finite-dimensional submodule and two-tail quotient are reversed. The central element acts by $(\nu^2-1)/8$ ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]], [[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]]).

[F5] $I_{1,0}$ splits into $D_1^-$ and $D_1^+$, and for $n\ge2$, their algebraic K-finite spans $V_n^-$ and $V_n^+$ identify with $M^+_{-n}$ and $M^-_n$, respectively at $\nu=n-1$ ([[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]], [[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F6] The compact-picture action is strongly continuous and unitary for $\nu\in i\mathbb R$ ([[thm-compact-picture-of-the-sl2-principal-series]]).

[A1] AC is assumed and inherited from the normalized Iwasawa and compact-picture constructions ([[def-axiom-of-choice]]).

[F7] For $0<|\nu|<1$, the spherical invariant form has positive even Fourier weights $a_n(\nu)$, its weighted Hilbert completion is irreducible and strongly continuous unitary, and no real nonzero odd parameter admits a positive-definite full-module invariant form ([[thm-unitarity-of-the-sl2-complementary-series]]). The weights satisfy $a_n(-\nu)=a_n(\nu)^{-1}$.

## Proof

**Proof technique:** compile the exact parameter equivalences, K-type data, exceptional subquotients, and unitary ranges; distinguish the parameter values by K-types and the central character.

**Given:** The conventions and claims recorded in the Statement.

1.1 By [F1], $\mathcal W_0=2\mathbb Z+1$ and $\mathcal W_1=2\mathbb Z$. The generic parameter set is their complement, so the sign-equivalence claim in the Statement is restricted to irreducible induced modules; nonzero lattice points are reducible. [F1, F3, A1]

1.2 The compact-picture theorem [F6] supplies the principal unitary axis; [F3] supplies irreducibility at its even zero and [F5] supplies the odd zero split. The positive weighted Hilbert completion and odd-parity invariant-form obstruction in [F7] give precisely the spherical complementary interval and absence of an odd complementary family. [F3, F5, F6, F7]

2.1 For $\nu\notin\mathcal W_\varepsilon$, [F3] gives $I_{\varepsilon,\nu}\cong I_{\varepsilon,-\nu}$. For nonzero $\nu\in\mathcal W_\varepsilon$, [F3] gives the opposite positions of $L_{|\nu|-1}$ in the two modules, so they are not isomorphic. For spherical real $0<|\nu|<1$, the normalized smooth intertwiner $R_\nu$ of [F3] has multipliers $a_n(\nu)$. By [F7], $B_{-\nu}(R_\nu f,R_\nu f)=\sum_n a_n(-\nu)|a_n(\nu)\widehat f(n)|^2=B_\nu(f,f)$ on finite Fourier sums. Its inverse is $R_{-\nu}$, so density extends it to an onto unitary intertwiner of the completed complementary representations. At $\varepsilon=1,\nu=0$, [F5] gives the direct sum of the two limits. [F3, F5, F7, step 1.1, algebra]

3.1 The K-type parity and multiplicity statement is [F2]. At a positive exceptional integer $n$, [F4] gives the finite quotient and two extremal submodules; at $-n$ it gives the reversed submodule/quotient orientation. When $n=1$ and $\varepsilon=0$, $L_0$ is the trivial representation, so the two endpoints $\nu=\pm1$ have the stated trivial subquotient. For $n\ge2$, [F5] identifies the extremal modules at $\nu=n-1$ with the algebraic K-finite spans of $D_n^-$ and $D_n^+$, whose weighted Hilbert completions give the group representations. Thus an exceptional full induced module is not a second irreducible class to be counted alongside its irreducible constituents. [F2, F4, F5, step 2.1]

4.1 For two generic parameters of the same parity, [F4] gives the central scalar $c(\nu)=(\nu^2-1)/8$; equivalent representations must have equal central scalars, hence their parameters differ only by sign. Different parities have disjoint K-type supports by [F2]. On the principal unitary axis $\nu=is$, the scalar is $-(s^2+1)/8$, so it determines $|s|$; on the spherical complementary interval $0<r<1$, it is $(r^2-1)/8$, so it determines $r$. These ranges are disjoint, and the sign equivalence [F3] therefore leaves no further identification between distinct absolute parameter values in either family. [F2, F3, F4, step 3.1] ∎
