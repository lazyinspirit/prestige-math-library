---
id: thm-equivalence-i-epsilon-nu-is-i-epsilon-minus-nu
kind: theorem
title: Parameter-sign equivalence and its exceptional failures for SL2(R)
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 8
deps:
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - def-standard-intertwining-operator-for-sl2-r
  - thm-meromorphic-continuation-and-intertwining-identity-for-a-nu
  - lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner
  - thm-unitarity-of-the-sl2-unitary-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.3(3) (statement p. 294, discussion pp. 301–302) and Exercise 7.4.12 (p. 302): unitary-character equivalence; the construction is left as an exercise"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1, printed pp. 48–50: P±(s) ≅ P±(−s) off the reducibility lattice and the opposite submodule/quotient orientations at reducible parameters"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Exercise 2.8(iii), printed p. 12: the integral intertwiner is nonzero and an isomorphism away from the reducibility lattice"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varepsilon\in\{0,1\}$, $\nu\notin\mathcal W_\varepsilon$ ([[def-normalized-principal-series-i-epsilon-nu]]), and $n_0=0$ for $\varepsilon=0$ and $n_0=1$ for $\varepsilon=1$. The base-normalized meromorphic intertwiner $\widehat A(\nu):=A(\nu)/c_{n_0}(\nu)$ extends through every common scalar pole of numerator and denominator to a continuous $K$-diagonal isomorphism $I^K_{\varepsilon,\nu}\to I^K_{\varepsilon,-\nu}$ with inverse $\widehat A(-\nu)$; hence the smooth compact-picture representations $I_{\varepsilon,\nu}$ and $I_{\varepsilon,-\nu}$ are continuously equivalent. At every nonexceptional parameter where the unnormalized $A(\nu)$ is regular, $c_{n_0}(\nu)$ is finite and nonzero, so $A(\nu)$ is a nonzero scalar multiple of $\widehat A(\nu)$ and is itself an isomorphism.

If $\nu\in i\mathbb R\setminus\mathcal W_\varepsilon$, then $\widehat A(\nu)$ is a unitary intertwiner and $|\widehat c_r(\nu)|=1$ for every allowed parity-$\varepsilon$ $K$-type; hence the unitary principal series at $\nu$ and $-\nu$ are unitarily equivalent. Complex conjugation of the compact picture is also an anti-unitary intertwiner between them. For $\varepsilon=0$ and nonzero imaginary $\nu$, this is the usual normalization $A(\nu)/c_0(\nu)$.

At an exceptional parameter $\nu\in\mathcal W_\varepsilon$, $\nu\ne0$, write $n=|\nu|$. The unnormalized $A(\nu)$ is regular but not injective: by [[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]], at $\nu=n$ it kills the two tail submodules with $|r|\ge n+1$, while at $\nu=-n$ it kills the finite-dimensional submodule with $|r|\le n-1$. Moreover, $I_{\varepsilon,n}$ and $I_{\varepsilon,-n}$ are not isomorphic as $(\mathfrak g,K)$-modules, and therefore are not continuously equivalent as smooth $G$-representations: the former has irreducible tail submodules, whereas the latter has the finite-dimensional submodule as its unique irreducible submodule, and their $K$-type supports are disjoint. At $\varepsilon=1,\nu=0$, the two representations coincide and the odd K-finite module splits into the two limit chains by [[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]](b). Thus $I_{\varepsilon,\nu}\cong I_{\varepsilon,-\nu}$ exactly when $\nu\notin\mathcal W_\varepsilon\setminus\{0\}$.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, the smooth principal-series models $I_{\varepsilon,\nu}$, and the normalized parameter lattice $\mathcal W_\varepsilon$.

[F1] The integral $A(\nu)$ and its compact-picture K-type eigenvalues $c_r(\nu)$ are defined on an initial half-plane ([[def-standard-intertwining-operator-for-sl2-r]]). The meromorphic family is continuous K-diagonal on smooth vectors, its proof step 1.1 locates the common simple scalar poles in $P_\varepsilon$, and it intertwines $\Pi_\nu$ with $\Pi_{-\nu}$ at every regular parameter ([[thm-meromorphic-continuation-and-intertwining-identity-for-a-nu]]).

[F2] The recurrence $(r+1+\nu)c_{r+2}(\nu)=(r+1-\nu)c_r(\nu)$, the symmetry $c_{-r}(\nu)=(-1)^r c_r(\nu)$, and the exact zeros at $\nu=\pm n\in\mathcal W_\varepsilon$ hold for each allowed $r$. The Gamma formula has simple poles with nonzero residues, no zeros, and reciprocal-Gamma zeros that cancel the common numerator poles outside $P_\varepsilon$ ([[lem-k-type-eigenvalue-recurrence-for-the-sl2-intertwiner]]).

[F3] For $n\in\mathcal W_\varepsilon$, $n\ge1$, the finite-dimensional $L_{n-1}$ is the unique irreducible quotient at $\nu=n$ and the unique irreducible submodule at $\nu=-n$; its K-types are $-(n-1),-(n-3),\ldots,n-1$. At $(\varepsilon,\nu)=(1,0)$ the odd module splits into the two limit chains ([[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F4] The compact-picture action is $(\Pi_\nu(g)f)(k)=|\alpha(p(k,g))|^{1+\nu}f(\kappa(k,g))$ in the canonical $AN\times K$ factorization ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]]). For $\nu\in i\mathbb R$ this is a strongly continuous unitary representation ([[thm-unitarity-of-the-sl2-unitary-principal-series]]).

[F5] On $L^2_\varepsilon(K)$ the vectors $f_r(k_\theta)=e^{ir\theta}$, $r\equiv\varepsilon\pmod2$, form a complete orthonormal basis; the finite Fourier sums are precisely the K-finite core ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F6] On the K-type $f_r$, the derived operators are $L_Wf_r=rf_r$, $L_{E_+}f_r=(1+\nu+r)f_{r+2}/2$, and $L_{E_-}f_r=(1+\nu-r)f_{r-2}/2$. Differentiating a continuous smooth group intertwining identity along real one-parameter subgroups, then complexifying, gives a $(\mathfrak g,K)$-module map ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F7] A unitary representation is strongly continuous, and an equivalence of unitary representations is a unitary intertwiner ([[def-strongly-continuous-unitary-representation]]).

[A1] AC supplies the normalized Haar probability $dk=d\theta/(2\pi)$ and the Hilbert compact-picture realization through [F4]–[F5], and is stated explicitly at the beginning. The proof makes no additional choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** normalize away the common scalar poles, use the exact K-type recurrence for the inverse, and compare the exceptional composition-series orientations separately.

1.1 Let $P_\varepsilon=\{-m:m\in\mathbb Z_{\ge0},\ m\equiv\varepsilon\pmod2\}$ be the common scalar pole set from [F1]. It is disjoint from $\mathcal W_\varepsilon$. For $\nu\notin\mathcal W_\varepsilon\cup P_\varepsilon$, [F2] shows that $c_{n_0}(\nu)$ is finite and nonzero, so $\widehat A(\nu)=A(\nu)/c_{n_0}(\nu)$ is a continuous K-diagonal map. At $\nu_0=-m\in P_\varepsilon$, the Gamma formula in [F2] has one numerator Gamma factor with a simple pole of nonzero residue, while both denominator arguments are half-integers and hence finite and nonzero for every allowed $r$. Thus every $c_r$, including $c_{n_0}$, has the same simple pole and $h(\nu)c_{n_0}(\nu)$ is holomorphic and nonzero at $\nu_0$, where $h(\nu)=\nu-\nu_0$. By [F1], $hA(\nu)$ is holomorphic in the smooth operator topology there. Therefore $\widehat A=(hA)/(hc_{n_0})$ extends continuously through that pole as a K-diagonal map. [F1, F2, algebra]

1.2 Let $\nu\in\mathcal W_\varepsilon\setminus\{0\}$ and write $n=|\nu|\ge1$. The pole set $P_\varepsilon$ has parity $\varepsilon$ and is disjoint from $\mathcal W_\varepsilon$, so $A(\nu)$ is regular. If $\nu=n$, [F2] gives $c_r(n)=0$ on every allowed type with $|r|\ge n+1$; if $\nu=-n$, it gives $c_r(-n)=0$ for $|r|\le n-1$. In either case a nonzero K-type is killed, so $A(\nu)$ is not injective. [F1, F2, algebra]

2.1 For every allowed $r$, normalize the recurrence in [F2] to obtain $\widehat c_{r+2}(\nu)=\widehat c_r(\nu)(r+1-\nu)/(r+1+\nu)$ and $\widehat c_{-r}(\nu)=(-1)^r\widehat c_r(\nu)$, with $\widehat c_{n_0}=1$. If $\nu\notin\mathcal W_\varepsilon$, neither $r+1+\nu$ nor $r+1-\nu$ vanishes for any allowed $r$, since $r+1$ has the opposite parity. Thus every multiplier is finite and nonzero, including at $P_\varepsilon$ by step 1.1. [F2, step 1.1, algebra]

3.1 Applying the recurrence at $\nu$ and $-\nu$ gives $\widehat c_{r+2}(\nu)\widehat c_{r+2}(-\nu)=\widehat c_r(\nu)\widehat c_r(-\nu)$; the base value is $1$ and the symmetry handles negative indices. Therefore $\widehat A(-\nu)\widehat A(\nu)$ is the identity on every K-type. Both operators are continuous and K-diagonal by step 1.1; for smooth $f$, every Fourier coefficient of $(\widehat A(-\nu)\widehat A(\nu)-I)f$ is zero, so [F5] makes that vector zero in $L^2$. A smooth function that is zero almost everywhere is zero everywhere, since a nonzero value would by continuity give a nonempty open arc on which its modulus is bounded below, and every open arc has positive normalized Haar measure. The same argument applies in the reverse order, proving that the maps are continuous inverses on $C^\infty_\varepsilon(K)$. [A1, F1, F2, F5, step 2.1]

4.1 For $\nu\notin\mathcal W_\varepsilon\cup P_\varepsilon$, [F1] gives the G-intertwining identity for the regular operator $A(\nu)$, and [F2] gives $0\ne c_{n_0}(\nu)$; division yields the identity for $\widehat A(\nu)$. At a pole $\nu_0\in P_\varepsilon$, take regular $\nu_j\to\nu_0$ outside $\mathcal W_\varepsilon\cup P_\varepsilon\cup(-P_\varepsilon)$; step 1.1 gives convergence of $\widehat A(\nu_j)$ in the smooth-operator topology. For fixed $g$, the compact formula in [F4] depends continuously on $\nu$ in every smooth seminorm, because $\log|\alpha(p(k,g))|$ is smooth and bounded on compact $K$. Passing to the limit in the intertwining identity gives it at $\nu_0$ as well. Consequently the inverse maps of step 3.1 give $I_{\varepsilon,\nu}\cong I_{\varepsilon,-\nu}$ for every $\nu\notin\mathcal W_\varepsilon$. When in addition the unnormalized $A(\nu)$ is regular, [F2] gives finite nonzero $c_{n_0}(\nu)$, so $A(\nu)=c_{n_0}(\nu)\widehat A(\nu)$ is an isomorphism. [F1, F2, F4, step 1.1, step 3.1]

5.1 Suppose $\nu\in i\mathbb R\setminus\mathcal W_\varepsilon$. Every recurrence factor $(r+1-\nu)/(r+1+\nu)$ has modulus one, and the base multiplier is $\widehat c_{n_0}=1$; the symmetry gives $|\widehat c_r(\nu)|=1$ on every allowed K-type. Thus the Fourier multiplier preserves the $L^2$ norm on finite Fourier sums and its inverse multiplier does too; by density [F5] it extends to a unitary operator on $L^2_\varepsilon(K)$. Step 4.1 makes it a smooth G-intertwiner, so continuity of the two unitary actions and density extend the intertwining identity to all of $L^2_\varepsilon(K)$. Separately, for $C f=\overline f$, the compact-picture formula [F4] gives $C\Pi_\nu(g)=\Pi_{-\nu}(g)C$ because $|\alpha(p(k,g))|$ is positive real and $\overline\nu=-\nu$; thus $C$ is an anti-unitary intertwiner. [A1, F2, F4, F5, F7, step 2.1, step 4.1]

6.1 Let $n\ge1$ lie in $\mathcal W_\varepsilon$. In $I^K_{\varepsilon,n}$ put $T^+=\bigoplus_{j\ge0}\mathbb C f_{n+1+2j}$. By [F6], $L_{E_-}f_{n+1}=0$, while $E_+$ preserves these weights and both arrows are nonzero between every adjacent pair above the boundary; $K$ also preserves $T^+$. Hence $T^+$ is a nonzero $(\mathfrak g,K)$-submodule. It is simple: for any nonzero submodule choose a nonzero finite Fourier sum; a $k_\theta\in K$ can be chosen with distinct eigenvalues on its finite set of K-types, since only finitely many angles cause a collision, and a polynomial in its action isolates one nonzero K-type. The nonzero ladder arrows then generate all of $T^+$. If a $(\mathfrak g,K)$-module isomorphism $T$ existed from $I^K_{\varepsilon,n}$ to $I^K_{\varepsilon,-n}$, it would send $T^+$ to an irreducible submodule at $-n$, which [F3] says must be $L_{n-1}$. But $L_{n-1}$ has only K-types $-(n-1),-(n-3),\ldots,n-1$, disjoint from the support of $T^+$, contradicting K-equivariance. Thus the K-finite modules are not isomorphic. Any continuous G-equivalence of the smooth compact-picture representations restricts to a K-finite module isomorphism: continuity lets one differentiate $T\Pi_n(g)=\Pi_{-n}(g)T$ along real one-parameter subgroups, while K-commutation preserves K-finiteness. Therefore no continuous G-equivalence exists; exchanging $n$ and $-n$ gives the same conclusion in the reverse direction. The odd case $\nu=0$ is excluded: there $\nu\in\mathcal W_1$ and [F3] gives a direct sum of the two limit chains. [F3, F5, F6, step 1.2] ∎
