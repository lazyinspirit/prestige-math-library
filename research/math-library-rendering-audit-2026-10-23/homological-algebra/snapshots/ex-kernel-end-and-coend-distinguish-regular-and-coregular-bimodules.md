---
id: ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules
kind: example
title: "The kernel end and coend distinguish the regular and co-regular bimodules"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-algebra-over-a-commutative-ring, def-algebraic-dual-and-linear-functional, def-bimodule, def-dimension, def-end-and-coend, def-generated-cyclic-finitely-generated-and-free-modules, def-left-and-right-modules, def-left-and-right-nakayama-functors-by-finite-kernel-calculus, def-linear-map, def-natural-isomorphism, def-vector-space, lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps, lem-nakayama-kernels-give-well-defined-adjoint-functors, prop-functoriality-of-module-tensor-products, prop-left-to-right-exact-equivalence-sends-identity-to-nakayama, thm-universal-property-of-module-tensor-products]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 11
---

## Statement

For the identity functor of a finite $k$-linear abelian category $\mathcal A\simeq A\text{-}\mathrm{mod}$, the two kernel formulas of the categorical Eilenberg–Watts triangle give the regular and co-regular bimodules, which need not be isomorphic: the end $\int_{a\in\mathcal A}\bar a\boxtimes 1(a)$ is the regular bimodule $A$, while the coend $\int^{a\in\mathcal A}\bar a\boxtimes 1(a)$ is the co-regular bimodule $A^{*}$ ([[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]], [[def-end-and-coend]]; [[lem-nakayama-kernels-give-well-defined-adjoint-functors]]). These are generally non-isomorphic as $A$-bimodules, so an end and a coend of the same functor need not agree; both are the identity's images under the Nakayama calculus of [[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]]. Witness: for the upper triangular algebra $A_0$ of the companion counterexample ([[def-algebra-over-a-commutative-ring]]), $A_0^{*}\otimes_{A_0}A_0e_1$ has dimension $2$ while $A_0e_1$ has dimension $1$; hence $A_0^{*}\not\cong A_0$ as bimodules ([[def-bimodule]], [[def-algebraic-dual-and-linear-functional]], [[def-dimension]], [[def-vector-space]]) and the regular and co-regular kernels are distinguished. Under the equivalences of the triangle these two objects correspond to the identity functor as an object of $\operatorname{Rex}$ and of $\operatorname{Lex}$ respectively ([[prop-left-to-right-exact-equivalence-sends-identity-to-nakayama]]).

## Example

For the identity functor of a finite $k$-linear abelian category $\mathcal A\simeq A\text{-}\mathrm{mod}$, the two kernel formulas of the categorical Eilenberg–Watts triangle give the regular and co-regular bimodules, which need not be isomorphic: the end $\int_{a\in\mathcal A}\bar a\boxtimes 1(a)$ is the regular bimodule $A$, while the coend $\int^{a\in\mathcal A}\bar a\boxtimes 1(a)$ is the co-regular bimodule $A^{*}$ ([[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]], [[def-end-and-coend]]; [[lem-nakayama-kernels-give-well-defined-adjoint-functors]]). These are generally non-isomorphic as $A$-bimodules, so an end and a coend of the same functor need not agree; both are the identity's images under the Nakayama calculus of [[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]]. Witness: for the upper triangular algebra $A_0$ of the companion counterexample ([[def-algebra-over-a-commutative-ring]]), $A_0^{*}\otimes_{A_0}A_0e_1$ has dimension $2$ while $A_0e_1$ has dimension $1$; hence $A_0^{*}\not\cong A_0$ as bimodules ([[def-bimodule]], [[def-algebraic-dual-and-linear-functional]], [[def-dimension]], [[def-vector-space]]) and the regular and co-regular kernels are distinguished. Under the equivalences of the triangle these two objects correspond to the identity functor as an object of $\operatorname{Rex}$ and of $\operatorname{Lex}$ respectively ([[prop-left-to-right-exact-equivalence-sends-identity-to-nakayama]]).

## Facts & Assumptions

**Given:** A finite $k$-linear abelian category with module model $\mathcal A\simeq A\text{-}\mathrm{mod}$ for a finite-dimensional unital $k$-algebra $A$, the regular $(A,A)$-bimodule $A$ and the co-regular bimodule $A^{*}=\operatorname{Hom}_k(A,k)$, together with the Eilenberg–Watts functors $\Phi^{l},\Phi^{r},\Psi^{l},\Psi^{r}$ of the triangle ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[def-bimodule]], [[def-algebraic-dual-and-linear-functional]]); and the upper triangular $k$-algebra $A_0$ with $k$-basis $e_1,e_2,u$, unit $1=e_1+e_2$, $e_1^{2}=e_1$, $e_2^{2}=e_2$, $e_1u=u=ue_2$ and all remaining products of basis elements zero ([[def-algebra-over-a-commutative-ring]], [[def-vector-space]], [[def-dimension]]).

[F1] For a finite $(\mathcal B,\mathcal A)$-bimodule $M$ with $F=\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)$ and $G=\Phi^{r}(M)=M\otimes_{\mathcal A}-$, the coend $\int^{a}\bar a\boxtimes F(a)$ is the coend of $a\mapsto F(a)\otimes_ka^{*}$ with universal cowedge $\rho_a:F(a)\otimes_ka^{*}\to M$, $\rho_a(f\otimes\lambda)=\lambda\circ f$, and the end $\int_{a}\bar a\boxtimes G(a)$ is the end of $a\mapsto G(a)\otimes_ka^{*}$ with universal wedge $\omega_a:M\to\operatorname{Hom}_k(a,G(a))$, $\omega_a(m)(x)=m\otimes x$; in particular the (co)end object is $M$ itself in the bimodule model ([[lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps]], [[def-end-and-coend]]).

[F2] The identity functor satisfies $1_{\mathcal A}\cong\Phi^{r}(A)$, since $\Phi^{r}(A)(X)=A\otimes_AX\cong X$ by the unit isomorphism, and $1_{\mathcal A}\cong\Phi^{l}(A^{*})$, since $\Phi^{l}(A^{*})(X)=\operatorname{Hom}_A(A^{**},X)\cong\operatorname{Hom}_A(A,X)\cong X$ by double duality and evaluation at $1_A$ ([[lem-nakayama-kernels-give-well-defined-adjoint-functors]], [[def-natural-isomorphism]], [[def-left-and-right-modules]], [[def-algebraic-dual-and-linear-functional]]).

[F3] The tensor product over $A$ is functorial in the first variable, so an isomorphism of right $A$-modules, in particular an isomorphism of $(A,A)$-bimodules $A^{*}\to A$, induces a natural isomorphism $A^{*}\otimes_A-\cong A\otimes_A-$, and $A\otimes_AX\cong X$ naturally in $X$; for the algebra $A_0$ the element $e_1$ satisfies $e_1^{2}=e_1$, so $A_0e_1$ is a $k$-subspace and $A_0^*e_1$ is the image of right multiplication by $e_1$ ([[prop-functoriality-of-module-tensor-products]], [[thm-universal-property-of-module-tensor-products]], [[def-bimodule]], [[def-linear-map]]).

## Verification

1.1 The end is the regular bimodule: apply [F1] with $\mathcal A=\mathcal B$ and $M=A$, the regular $(A,A)$-bimodule. Then $G=\Phi^{r}(A)\cong1_{\mathcal A}$ by [F2], so the end $\int_{a}\bar a\boxtimes 1(a)$ of the identity diagram is the end of the diagram $a\mapsto G(a)\otimes_ka^{*}$ and equals the (co)end object $M=A$ of [F1], with universal wedge $\omega_a(m)(x)=m\otimes x$. [given, F1, F2]

1.2 For $A_0$ one has $A_0e_1=\operatorname{span}\{e_1\}$ of dimension $1$, because $e_1e_1=e_1$, $e_2e_1=0$ and $ue_1=0$; and $A_0^{*}e_1$ has dimension $2$, because $(\lambda\cdot e_1)(x)=\lambda(e_1x)$ expresses $\lambda\cdot e_1$ as the composite of $\lambda$ with the map $x\mapsto e_1x$, whose image is $e_1A_0=\operatorname{span}\{e_1,u\}$ of dimension $2$, and every functional on that direct summand of $A_0$ extends to $A_0$. [given, F3]

2.1 The coend is the co-regular bimodule: apply [F1] with $\mathcal A=\mathcal B$ and $M=A^{*}$. Then $F=\Phi^{l}(A^{*})\cong1_{\mathcal A}$ by [F2], so the coend $\int^{a}\bar a\boxtimes 1(a)$ is the coend of the diagram $a\mapsto F(a)\otimes_ka^{*}$ and equals the (co)end object $M=A^{*}$ of [F1], with universal cowedge $\rho_a(f\otimes\lambda)=\lambda\circ f$; under the identification $\mathcal A^{\mathrm{op}}\boxtimes\mathcal A\simeq(A,A)\text{-}\mathrm{bimod}$ the object $A$ is the regular and $A^{*}$ the co-regular bimodule. [step 1.1, F1, F2]

2.2 Consequently $A_0^{*}\otimes_{A_0}A_0e_1\cong A_0^{*}e_1$ has dimension $2$, by the multiplication isomorphism $\lambda\otimes x\mapsto\lambda\cdot x$ with inverse $\nu\mapsto\nu\otimes e_1$, while $A_0\otimes_{A_0}A_0e_1\cong A_0e_1$ has dimension $1$ by the unit isomorphism of [F3]. [step 1.2, F3]

3.1 The bimodules $A_0^{*}$ and $A_0$ are not isomorphic: an isomorphism would by [F3] induce an isomorphism $A_0^{*}\otimes_{A_0}A_0e_1\cong A_0\otimes_{A_0}A_0e_1$, hence equality of dimensions, contradicting step 2.2. Hence the regular kernel $A_0$ and the co-regular kernel $A_0^{*}$ of steps 1.1 and 2.1 are distinguished, so an end and a coend of the same functor need not agree. [step 2.1, step 2.2, F3]

4.1 Finally, the end $A=\Psi^{r}(1_{\mathcal A})$ is the image of the identity functor regarded as an object of $\operatorname{Rex}(\mathcal A,\mathcal A)$ under $\Psi^{r}$, and the coend $A^{*}=\Psi^{l}(1_{\mathcal A})$ is the image of the identity regarded as an object of $\operatorname{Lex}(\mathcal A,\mathcal A)$ under $\Psi^{l}$, by steps 1.1 and 2.1; applying $\Phi^{r}$ and $\Phi^{l}$ recovers the Nakayama functors $N^{r}=\Phi^{r}\Psi^{l}(1_{\mathcal A})\cong A^{*}\otimes_A-$ and $N^{l}=\Phi^{l}\Psi^{r}(1_{\mathcal A})\cong\operatorname{Hom}_A(A^{*},-)$ of the Nakayama calculus ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[prop-left-to-right-exact-equivalence-sends-identity-to-nakayama]]). [step 1.1, step 2.1, F1, F2] ∎
