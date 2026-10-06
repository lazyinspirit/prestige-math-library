---
id: ex-dual-numbers-tensor-functor-is-right-exact-but-not-left-exact
kind: example
title: "The dual-numbers tensor functor is right exact but not left exact"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
justified_by: []
aliases: []
deps: [cor-exact-finite-tensor-functors-have-right-projective-kernels, cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint, def-dimension, def-exact-and-short-exact-sequences-of-modules, def-left-and-right-flat-modules-over-an-arbitrary-ring, def-module-homomorphism-kernel-image-and-cokernel, def-polynomial-ring-over-a-commutative-ring, def-projective-module, def-quotient-ring, def-simple-module, lem-tensor-hom-adjunction-for-bimodules, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-finite-eilenberg-watts-for-right-exact-linear-functors, thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels, thm-splitting-lemma-for-modules, thm-unit-isomorphisms-for-module-tensor-products]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1)"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Example

Let $k$ be a field, let $A=k[\varepsilon]/(\varepsilon^{2})$ be the algebra of
dual numbers ([[def-polynomial-ring-over-a-commutative-ring]],
[[def-quotient-ring]]) and let $S=A/(\varepsilon)$ be its simple module
([[def-simple-module]]). Then the tensor functor
$T_S=S\otimes_A-:A\text{-}\mathrm{mod}\to A\text{-}\mathrm{mod}$ is right exact
but not left exact. Explicitly, applied to the non-split short exact sequence
$0\to(\varepsilon)\to A\to S\to0$ of finite-dimensional $A$-modules it yields,
under the identifications $S\otimes_A(\varepsilon)\cong S$, $S\otimes_AA\cong S$
and $S\otimes_AS\cong S$, the sequence
$S\xrightarrow{0}S\xrightarrow{\cong}S\to0$; the comparison map
$S\otimes_A(\varepsilon)\to S\otimes_AA$ is zero and therefore is not
injective, so $T_S$ is not left exact. Consistently, $T_S$ has a right adjoint
$\operatorname{Hom}_A(S,-)$ but no left adjoint, and its kernel $S$ is not a
projective right $A$-module. No choice is used.

## Facts & Assumptions

**Given:** A field $k$, the algebra $A=k[\varepsilon]/(\varepsilon^{2})$ of dual numbers, and its simple module $S=A/(\varepsilon)$.

[L1] The algebra $A=k[\varepsilon]/(\varepsilon^{2})$ is a commutative unital $k$-algebra in which the class $\varepsilon$ of the indeterminate satisfies $\varepsilon^{2}=0$ and every element has the form $a+b\varepsilon$ with $a,b\in k$; hence $(\varepsilon)=k\varepsilon$ and $S=A/(\varepsilon)$ is a one-dimensional $k$-vector space with $\varepsilon S=0$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-ring]], [[def-dimension]]).

[L2] For a finite-dimensional $(B,A)$-bimodule $M$ with agreeing $k$-scalar actions, the functor $T_M=M\otimes_A-$ is a $k$-linear right exact functor $A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$, and it is left adjoint to $\operatorname{Hom}_B(M,-)$; in particular $S$, a module over the commutative algebra $A$, is an $(A,A)$-bimodule and $T_S$ is right exact with right adjoint $\operatorname{Hom}_A(S,-)$ ([[thm-finite-eilenberg-watts-for-right-exact-linear-functors]], [[lem-tensor-hom-adjunction-for-bimodules]]).

[L3] The unit isomorphism $S\otimes_AA\cong S$ sends $s\otimes a$ to $sa$ ([[thm-unit-isomorphisms-for-module-tensor-products]]), and a right exact functor carries an exact sequence $X\to Y\to Z\to0$ to an exact sequence; the kernel $T_S(A)$ equals $S\otimes_AA$ ([[def-exact-and-short-exact-sequences-of-modules]], [[def-module-homomorphism-kernel-image-and-cokernel]], [[thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels]]).

[L4] If a short exact sequence $0\to X'\to X\to X''\to0$ splits, then $X\cong X'\oplus X''$ with the given maps ([[thm-splitting-lemma-for-modules]]). If $T_S$ were left exact it would have a left adjoint; if $S$ were a projective right $A$-module then $T_S$ would be exact ([[cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint]], [[cor-exact-finite-tensor-functors-have-right-projective-kernels]], [[def-projective-module]], [[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).





## Verification

**Proof technique:** direct.

1.1 By [L1] every element of $A$ is $a+b\varepsilon$ with $\varepsilon^{2}=0$, so $(\varepsilon)=k\varepsilon$, the quotient $S=A/(\varepsilon)$ is one-dimensional over $k$ with $\varepsilon S=0$, and $A$ acts on $S$ through $k$; the $A$-submodules of $S$ are therefore exactly its $k$-subspaces, so $S\ne0$ is simple. The quotient map $\pi:A\to S$ has kernel $(\varepsilon)$, and the map $\varphi:A\to(\varepsilon)$, $\varphi(a)=a\varepsilon$, has image $(\varepsilon)$ and kernel $(\varepsilon)$, since $(a+b\varepsilon)\varepsilon=a\varepsilon$ vanishes only for $a=0$; hence $\varphi$ induces an $A$-module isomorphism $S=A/(\varepsilon)\cong(\varepsilon)$ and $0\to(\varepsilon)\to A\xrightarrow{\pi}S\to0$ is a short exact sequence. [L1, L2, algebra]

2.1 The sequence $0\to(\varepsilon)\to A\to S\to0$ does not split. If it split, then by [L4] there would be an $A$-module isomorphism $A\cong(\varepsilon)\oplus S$, and $(\varepsilon)\cong S$ by step 1.1, so $A\cong S\oplus S$; by step 1.1 the element $\varepsilon$ acts as zero on each copy of $S$, hence as zero on $S\oplus S$ and therefore, through the isomorphism, as zero on $A$. But $\varepsilon\cdot1_A=\varepsilon\ne0$ in $A$. Contradiction, so the sequence does not split. [L1, L4, step 1.1, algebra]

2.2 The functor $T_S=S\otimes_A-$ is right exact by [L2], so applying it to $0\to(\varepsilon)\to A\to S\to0$ gives the exact sequence $S\otimes_A(\varepsilon)\to S\otimes_AA\to S\otimes_AS\to0$ by [L3]. [L2, L3, step 1.1]

2.3 The three outer identifications of the statement hold: $S\otimes_AA\cong S$ by the unit isomorphism of [L3]; $S\otimes_A(\varepsilon)\cong S\otimes_AS$ because $(\varepsilon)\cong S$ by step 1.1; and $S\otimes_AS\cong S$, because applying the right exact functor $-\otimes_AS$ to $A\to S\to0$ identifies $S\otimes_AS$ with the cokernel of $(\varepsilon)\otimes_AS\to A\otimes_AS\cong S$, whose image is $\varepsilon S=0$. [L2, L3, step 1.1]

3.1 Under these identifications the first map $S\otimes_A(\varepsilon)\to S\otimes_AA$ is zero: it is induced by the inclusion $(\varepsilon)\rightarrowtail A$, and the generator $1_S\otimes\varepsilon$ maps to $1_S\otimes\varepsilon$, which corresponds under $S\otimes_AA\cong S$ to $1_S\varepsilon=0$ because $\varepsilon$ annihilates $S$; since $S\otimes_A(\varepsilon)\cong S$ is generated as an $A$-module by $1_S\otimes\varepsilon$, the map is zero. The second map $S\otimes_AA\to S\otimes_AS$ is induced by the quotient $A\twoheadrightarrow S$ and corresponds under the identifications to the identity of $S$, hence is an isomorphism. So the image sequence is $S\xrightarrow{0}S\xrightarrow{\cong}S\to0$. [L2, L3, step 2.3, algebra]

4.1 The sequence $S\xrightarrow{0}S\xrightarrow{\cong}S\to0$ is exact, as the second map is an isomorphism and its kernel is zero, so right exactness of $T_S$ is exhibited directly. But $T_S$ is not left exact: the extended sequence $0\to S\otimes_A(\varepsilon)\to S\otimes_AA\to S\otimes_AS\to0$ fails to be exact at $S\otimes_A(\varepsilon)$, because the map $S\otimes_A(\varepsilon)\to S\otimes_AA$ is zero while $S\otimes_A(\varepsilon)\cong S\ne0$ by steps 1.1 and 2.3. [L1, step 1.1, step 2.3, step 3.1]

5.1 Consistently, $T_S$ has the right adjoint $\operatorname{Hom}_A(S,-)$ by [L2] but no left adjoint, since a functor with a left adjoint is left exact by [L4] and $T_S$ is not left exact by step 4.1; and its kernel $T_S(A)=S\otimes_AA\cong S$ is not a projective right $A$-module, since by [L4] a projective kernel would make $T_S$ exact, while $T_S$ is not left exact by step 4.1. [L3, L4, step 4.1]

6.1 All modules and sequences above are finite-dimensional and the computations use only the finitely many structure maps of $A$ and $S$, so no choice is used. [step 1.1, step 2.2, step 2.3, step 3.1, step 4.1, step 5.1] ∎
