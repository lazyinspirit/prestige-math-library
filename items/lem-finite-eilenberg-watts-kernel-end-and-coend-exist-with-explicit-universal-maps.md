---
id: lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps
kind: lemma
title: "Finite Eilenberg–Watts kernels: explicit end and coend universal maps"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-algebraic-dual-and-linear-functional, def-bimodule, def-dinatural-transformation, def-end-and-coend, def-linear-map, def-natural-isomorphism, def-natural-transformation, def-vector-space, def-wedge-and-cowedge, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, prop-functoriality-of-module-tensor-products, thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends, thm-bimodule-actions-induced-on-tensor-products, thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories, thm-ends-and-coends-are-unique-up-to-unique-isomorphism, thm-universal-property-of-module-tensor-products]
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
dependency_level: 7
---

## Statement

Let $\mathcal A,\mathcal B$ be finite $k$-linear abelian categories, identified with chosen small models $R\text{-}\mathrm{mod}$ and $S\text{-}\mathrm{mod}$ for finite-dimensional $k$-algebras, and let $M$ be a finite $(\mathcal B,\mathcal A)$-bimodule with $F=\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)\in\operatorname{Lex}(\mathcal A,\mathcal B)$ and $G=\Phi^{r}(M)=M\otimes_{\mathcal A}-\in\operatorname{Rex}(\mathcal A,\mathcal B)$ ([[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]]). Then (i) the coend $\int^{a\in\mathcal A}\bar a\boxtimes F(a)$ ([[def-end-and-coend]], [[def-dinatural-transformation]], [[def-wedge-and-cowedge]]) exists; computed in the bimodule model it is the coend of $a\mapsto F(a)\otimes_ka^{*}$, and the explicit cowedge $\rho_a:F(a)\otimes_ka^{*}\to M$, $\rho_a(f\otimes\lambda)=\lambda\circ f\in M\cong(M^{*})^{*}$ ([[def-algebraic-dual-and-linear-functional]], [[def-linear-map]], [[def-vector-space]]), is universal: every cowedge $t$ into $Z$ factors uniquely as $t' \circ\rho$ with $t' :M\to Z$. (ii) The end $\int_{a\in\mathcal A}\bar a\boxtimes G(a)$ exists; computed in the model it is the end of $a\mapsto G(a)\otimes_ka^{*}\cong\operatorname{Hom}_k(a,G(a))$, with universal wedge $\omega_a:M\to\operatorname{Hom}_k(a,G(a))$, $\omega_a(m)(x)=m\otimes x$, and the symmetric universal property for wedges. (iii) The resulting assignments $\Psi^{l}(F)=\int^{a}\bar a\boxtimes F(a)$ and $\Psi^{r}(G)=\int_{a}\bar a\boxtimes G(a)$ are functorial in $F$ and $G$ (a natural transformation $\eta:F\Rightarrow F'$ induces a morphism of the universal cowedges, [[def-natural-transformation]], [[thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends]]) and satisfy $\Psi^{l}\Phi^{l}\cong 1$ and $\Psi^{r}\Phi^{r}\cong 1$ as natural isomorphisms ([[def-natural-isomorphism]], [[thm-ends-and-coends-are-unique-up-to-unique-isomorphism]]); hence they are quasi-inverse to $\Phi^{l},\Phi^{r}$. The existence is proved from the finite-dimensional data; it is not inferred from unrestricted completeness or cocompleteness.

## Facts & Assumptions

**Given:** Finite $k$-linear abelian categories $\mathcal A,\mathcal B$ identified with $R\text{-}\mathrm{mod}$ and $S\text{-}\mathrm{mod}$, a finite $(\mathcal B,\mathcal A)$-bimodule $M$, and the functors $F=\Phi^{l}(M)=\operatorname{Hom}_{\mathcal A}(M^{*},-)$ and $G=\Phi^{r}(M)=M\otimes_{\mathcal A}-$.

[F1] Under the identification of $\mathcal A^{\mathrm{op}}\boxtimes\mathcal B$ with finite $(\mathcal B,\mathcal A)$-bimodules of [[thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories]] the external object $\bar a\boxtimes b$ corresponds to $b\otimes_ka^{*}$, and $\Phi^{l},\Phi^{r}$ are the transport of the functors $M\mapsto\operatorname{Hom}_A(M^{*},-)$ and $M\mapsto M\otimes_A-$.

[F2] The $k$-dual of a finite-dimensional module is an exact contravariant equivalence and evaluation is a natural isomorphism $M\to M^{**}$, so with $U=M^{*}$ one has $M\cong U^{*}$ and $\operatorname{Hom}_k(a,W)\cong W\otimes_ka^{*}$ naturally; all objects occurring are finite-dimensional ([[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]], [[def-algebraic-dual-and-linear-functional]], [[def-vector-space]]).

[F3] A wedge $\omega_c:d\to T(c,c)$ satisfies $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ and a cowedge $\rho_c:T(c,c)\to d$ satisfies $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$ for every $f:c\to c'$; an end is a terminal wedge and a coend an initial cowedge, so factorizations through the universal (co)wedge are unique ([[def-wedge-and-cowedge]], [[def-dinatural-transformation]], [[def-end-and-coend]]).

[F4] The tensor product is functorial and universal for balanced maps, and the outer actions on a tensor product are the induced ones, $(y\otimes\lambda)\cdot r=y\otimes(\lambda\cdot r)$ and $s\cdot(y\otimes\lambda)=(s\cdot y)\otimes\lambda$ ([[prop-functoriality-of-module-tensor-products]], [[thm-universal-property-of-module-tensor-products]], [[thm-bimodule-actions-induced-on-tensor-products]], [[def-bimodule]]).

[F5] A natural transformation $\eta:F\Rightarrow F'$ induces a morphism of the universal cowedges and of the universal wedges, and ends and coends are unique up to a unique compatible isomorphism ([[thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends]], [[thm-ends-and-coends-are-unique-up-to-unique-isomorphism]], [[def-natural-transformation]], [[def-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Work in the bimodule model $\mathcal A=R\text{-}\mathrm{mod}$, $\mathcal B=S\text{-}\mathrm{mod}$; put $U=M^{*}=\operatorname{Hom}_k(M,k)$, a finite $(R,S)$-bimodule, so that $F(a)=\operatorname{Hom}_R(U,a)$ for $a\in R\text{-}\mathrm{mod}$ and the isomorphism $M\cong U^{*}$ of [F2] is the evaluation. The coend diagram is the functor $T^{l}(a,b)=F(b)\otimes_ka^{*}$ on $R\text{-}\mathrm{mod}^{\mathrm{op}}\times R\text{-}\mathrm{mod}$ with values in finite $(S,R)$-bimodules, where $a^{*}$ carries the right $R$-action $(\lambda\cdot r)(x)=\lambda(rx)$, the functoriality in $a$ is precomposition $u^{*}:a'^{*}\to a^{*}$ for $u:a\to a'$ and that in $b$ is $F$, and the tensor over $k$ carries the left $S$-action from $F(b)$ and the right $R$-action from $a^{*}$ [F1, F2, F4]; the end diagram is the functor $T^{r}(a,b)=G(b)\otimes_ka^{*}$ with $G(b)=M\otimes_Rb$, identified with $\operatorname{Hom}_k(a,G(b))$ through $\operatorname{Hom}_k(b,W)\cong W\otimes_kb^{*}$ [F1, F2]. [given, F1, F2, F4]

2.1 Put $U=M^*$ and define $\rho_a(f\otimes\lambda)=\lambda\circ f\in U^*\cong M$. For $v:a\to a'$, $f:U\to a$ and $\lambda'\in a'^*$, one has $\rho_a(f\otimes v^*\lambda')=(\lambda'\circ v)\circ f=\rho_{a'}((v\circ f)\otimes\lambda')$, the cowedge equation of [F3]. The maps are right $R$-linear since $f(ru)=rf(u)$ and left $S$-linear since $(sf)(u)=f(us)$ and $(s\mu)(u)=\mu(us)$ on $U^*$. For a cowedge $t$ into a finite $(S,R)$-bimodule $Z$, define $t'(\mu)=t_U(1_U\otimes\mu)$. Its right $R$-linearity follows from that of $t_U$. For left $S$-linearity let $R_s:U\to U$ be $u\mapsto us$; dinaturality gives $t_U(1_U\otimes(\mu\circ R_s))=t_U(R_s\otimes\mu)=s\,t_U(1_U\otimes\mu)$, so $t'$ is a bimodule map. Dinaturality at $f:U\to a$ gives $t_a(f\otimes\lambda)=t_U(1_U\otimes\lambda\circ f)=t'(\rho_a(f\otimes\lambda))$. Uniqueness follows because $\rho_U(1_U\otimes\mu)=\mu$. Thus $(M,\rho)$ is the coend. [step 1.1, F2, F3, F4]


3.1 For (ii) define $\omega_a:M\to\operatorname{Hom}_k(a,G(a))$, $\omega_a(m)(x)=m\otimes x$, using the identification of step 1.1; $\omega_a$ is left $S$-linear and right $R$-linear by the balancedness of $M\otimes_R-$ and the outer actions [F4]. It is a wedge: for $f:a\to a'$ one has $T^{r}(1_a,f)\circ\omega_a=T^{r}(f,1_{a'})\circ\omega_{a'}$ because both sides send $m$ to the map $x\mapsto m\otimes f(x)$ [F3]. For universality let $t$ be a wedge from $Z$ and define $h:Z\to M$ by $h(z)=t_R(z)(1_R)$ under $G(R)\cong M$; dinaturality of $t$ at the maps $\ell_x:R\to a$, $\ell_x(r)=r\cdot x$, gives $t_a(z)(x)=h(z)\otimes x$, so $t$ factors through $h$; an element of $\operatorname{Hom}_k(a,G(a))$ is determined by its values, so the factorization is unique, and $h$ is a bimodule map because the components $t_a$ are and $t_R(z\cdot r)(1_R)=t_R(z)(r)$ by right $R$-linearity of $t_R$, while dinaturality at $r_r:R\to R$ identifies $t_R(z)(r)$ with $h(z)\cdot r$ under $G(R)\cong M$ [F3, F4]. Hence $(M,\omega)$ is the end $\int_{a}\bar a\boxtimes G(a)$, and $\Psi^{r}\Phi^{r}(M)\cong M$. [step 2.1, F2, F3, F4]

4.1 A natural transformation $\eta:F\Rightarrow F'$ induces a natural transformation of diagrams with components $\eta_b\otimes1_{a^*}$. For coends its induced map $q\to q'$ is uniquely characterized by $\rho'_a(\eta_a\otimes1)= (q\to q')\rho_a$; for ends it is characterized by the dual projection equation [F5]. Uniqueness proves the identity and composition laws in both cases. For a bimodule map $j:M\to M'$, the formula for $\rho$ intertwines precomposition by $j^*$ with $j$, and that for $\omega$ intertwines $m\mapsto j(m)$ with $j\otimes1_a$. Hence the comparisons $\Psi^l\Phi^l\cong1$ and $\Psi^r\Phi^r\cong1$ are natural in $M$. Every Lex or Rex functor has the corresponding model form by [F1], so these explicit chosen kernel objects also supply the (co)ends for arbitrary such functors; transporting the universal maps along their natural comparison isomorphisms proves this. The equivalences in [F1] then give the other quasi-inverse comparisons. No unrestricted (co)completeness or new choice is required beyond the supplied models and equivalence data. [step 2.1, step 3.1, F1, F5] ∎
