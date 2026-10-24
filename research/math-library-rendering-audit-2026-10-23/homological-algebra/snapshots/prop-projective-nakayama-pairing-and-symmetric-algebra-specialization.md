---
id: prop-projective-nakayama-pairing-and-symmetric-algebra-specialization
kind: proposition
title: "The projective Nakayama pairing and the symmetric-algebra specialization"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-algebraic-dual-and-linear-functional, def-bimodule, def-dimension, def-generated-cyclic-finitely-generated-and-free-modules, def-left-and-right-modules, def-left-and-right-nakayama-functors-by-finite-kernel-calculus, def-linear-map, def-natural-isomorphism, def-projective-module, lem-finite-module-duality-is-exact-with-commuting-bimodule-actions, lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism, lem-nakayama-kernels-give-well-defined-adjoint-functors, lem-tensor-hom-adjunction-for-bimodules, prop-functoriality-of-module-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
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
dependency_level: 10
---

## Statement

Let $\mathcal A\simeq A\text{-}\mathrm{mod}$ be a finite $k$-linear abelian category with module model, and let $N^{r}=A^{*}\otimes_A-$ be its Nakayama functor ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[lem-nakayama-kernels-give-well-defined-adjoint-functors]]). For every finite-dimensional projective left $A$-module $P$ ([[def-projective-module]]) and every finite-dimensional left $A$-module $X$ there is a natural isomorphism
$$D\operatorname{Hom}_A(P,X)\cong\operatorname{Hom}_A(X,A^{*}\otimes_AP)=\operatorname{Hom}_A(X,N^{r}(P)),$$
where $D=\operatorname{Hom}_k(-,k)$ is the $k$-dual ([[def-algebraic-dual-and-linear-functional]], [[def-dimension]], [[def-linear-map]]). If moreover the module model is supplied with an isomorphism $A^{*}\cong A$ of $A$-bimodules (the symmetric-algebra condition), then $N^{r}\cong 1$ and $N^{l}\cong 1$; this is a conditional specialization, and no claim is made that every finite-dimensional $k$-algebra is symmetric or self-injective. No commutativity of $A$ and no choice are used.

## Facts & Assumptions

**Given:** A finite-dimensional unital $k$-algebra $A$, a finite $k$-linear abelian category with module model $\mathcal A\simeq A\text{-}\mathrm{mod}$, a finite-dimensional projective left $A$-module $P$ ([[def-projective-module]]), a finite-dimensional left $A$-module $X$, and the Nakayama functors $N^{r}=A^{*}\otimes_A-$, $N^{l}\cong\operatorname{Hom}_A(A^{*},-)$ of the model ([[def-left-and-right-nakayama-functors-by-finite-kernel-calculus]], [[lem-nakayama-kernels-give-well-defined-adjoint-functors]]).

[F1] The algebra $A$ is an $(A,A)$-bimodule by left and right multiplication, and $A^{*}=\operatorname{Hom}_k(A,k)$ is the $(A,A)$-bimodule with $(a\cdot\lambda)(b)=\lambda(ba)$ and $(\lambda\cdot a)(b)=\lambda(ab)$ ([[def-left-and-right-modules]], [[def-bimodule]], [[def-algebraic-dual-and-linear-functional]]).

[F2] For a left $A$-module $P$, the space $\operatorname{Hom}_A(P,A)$ is a right $A$-module under $(f\cdot a)(p)=f(p)a$, since $(f\cdot a)(bp)=b f(p)a$. Its $k$-dual is a left $A$-module under $(a\mu)(f)=\mu(f\cdot a)$. Left multiplication on the values of $f$ need not preserve $A$-linearity when $A$ is noncommutative ([[def-left-and-right-modules]], [[def-linear-map]]).

[F3] A finite-dimensional left $A$-module has a finite $k$-basis, and that finite set generates it as an $A$-module (through $k$-linear combinations and the unit), so it is finitely generated ([[def-dimension]], [[def-generated-cyclic-finitely-generated-and-free-modules]]).

[F4] For a unital ring $B$ and a left $B$-module $P$ that is finitely generated and projective, the evaluation map $\operatorname{Hom}_B(P,B)\otimes_BY\to\operatorname{Hom}_B(P,Y)$, $\varphi\otimes y\mapsto(p\mapsto\varphi(p)y)$, is an isomorphism for every left $B$-module $Y$, natural in $Y$; with $B=A$ and $Y=X$ it identifies $\operatorname{Hom}_A(P,X)$ with $\operatorname{Hom}_A(P,A)\otimes_AX$ ([[lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism]], [[def-projective-module]]).

[F5] For unital rings $A,B$, a $(B,A)$-bimodule $M$, a left $A$-module $X$ and a left $B$-module $Y$, currying $\operatorname{Hom}_B(M\otimes_AX,Y)\to\operatorname{Hom}_A(X,\operatorname{Hom}_B(M,Y))$, $F\mapsto(x\mapsto(m\mapsto F(m\otimes x)))$, is a bijection natural in $X$ and $Y$; with $B=k$, $Y=k$ it gives $\operatorname{Hom}_k(M\otimes_AX,k)\cong\operatorname{Hom}_A(X,\operatorname{Hom}_k(M,k))$ for every right $A$-module $M$ ([[lem-tensor-hom-adjunction-for-bimodules]]).

[F6] For a finite-dimensional $(A,B)$-bimodule $Z$ the $k$-dual $Z^{*}=\operatorname{Hom}_k(Z,k)$ is a $(B,A)$-bimodule under $(b\cdot\lambda)(z)=\lambda(zb)$ and $(\lambda\cdot a)(z)=\lambda(az)$; $(-)^{*}$ is a contravariant equivalence carrying isomorphisms to isomorphisms, and the evaluation $\operatorname{ev}_Z:Z\to Z^{**}$ is a natural isomorphism ([[lem-finite-module-duality-is-exact-with-commuting-bimodule-actions]], [[def-algebraic-dual-and-linear-functional]], [[def-natural-isomorphism]]).

[F7] The balanced tensor product is unital and functorial in the module argument: $A\otimes_AX\cong X$ naturally in $X$, and a homomorphism of right $A$-modules induces a natural transformation between the functors $-\otimes_A-$ ([[thm-unit-isomorphisms-for-module-tensor-products]], [[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Define $\gamma:A^{*}\otimes_AP\to\operatorname{Hom}_A(P,A)^{*}$ by $\gamma(\lambda\otimes p)(f)=\lambda(f(p))$ for $\lambda\in A^{*}$, $p\in P$ and $f\in\operatorname{Hom}_A(P,A)$. It is well defined: $\gamma(\lambda\cdot a\otimes p)(f)=(\lambda\cdot a)(f(p))=\lambda(af(p))$ equals $\gamma(\lambda\otimes ap)(f)=\lambda(f(ap))$ by [F1] and [F2], so the $A$-balanced relation $\lambda\cdot a\otimes p=\lambda\otimes ap$ is respected. It is left $A$-linear with respect to the left action on $A^{*}\otimes_AP$ and the left action $(a\cdot\mu)(f)=\mu(f\cdot a)$ on $\operatorname{Hom}_A(P,A)^{*}$: $\gamma(a\cdot(\lambda\otimes p))(f)=(a\cdot\lambda)(f(p))=\lambda(f(p)a)$ and $(a\cdot\gamma(\lambda\otimes p))(f)=\gamma(\lambda\otimes p)(f\cdot a)=\lambda((f\cdot a)(p))=\lambda(f(p)a)$, using [F1] and [F2]. [given, F1, F2]

2.1 The map $\gamma$ is an isomorphism: its transpose $\gamma^{*}:\operatorname{Hom}_A(P,A)^{**}\to(A^{*}\otimes_AP)^{*}$ is a bijection, because under the double-duality isomorphism $\operatorname{ev}:\operatorname{Hom}_A(P,A)\to\operatorname{Hom}_A(P,A)^{**}$ of [F6] and the bijection $(A^{*}\otimes_AP)^{*}\to\operatorname{Hom}_A(P,A)$, $\theta\mapsto(p\mapsto\operatorname{ev}_A^{-1}(\lambda\mapsto\theta(\lambda\otimes p)))$, given by currying [F5] with $M=A^{*}$ followed by [F6], the composite corresponds to the identity: $\gamma^{*}(\operatorname{ev}(f))(\lambda\otimes p)=\operatorname{ev}(f)(\gamma(\lambda\otimes p))=\lambda(f(p))$, and $p\mapsto\operatorname{ev}_A^{-1}(\lambda\mapsto\lambda(f(p)))=f(p)$, so the composite sends $f$ to $f$. Since both comparison maps are bijections, $\gamma^{*}$ is bijective; all spaces here are finite-dimensional, so double duality [F6] reflects the isomorphism of $\gamma^*$, and $\gamma$ is bijective and hence an isomorphism of left $A$-modules. [step 1.1, F5, F6, algebra]

3.1 Since a finite-dimensional module is finitely generated by [F3], the evaluation map of [F4] with $B=A$ and $Y=X$ gives a natural isomorphism $\operatorname{Hom}_A(P,X)\cong\operatorname{Hom}_A(P,A)\otimes_AX$; dualizing it by [F6] and currying by [F5] with $M=\operatorname{Hom}_A(P,A)$ and $Y=k$ gives a natural isomorphism $D\operatorname{Hom}_A(P,X)=\operatorname{Hom}_k(\operatorname{Hom}_A(P,X),k)\cong\operatorname{Hom}_A(X,\operatorname{Hom}_A(P,A)^{*})$, and composing with $\operatorname{Hom}_A(X,\gamma^{-1})$ from step 2.1 gives the natural isomorphism $D\operatorname{Hom}_A(P,X)\cong\operatorname{Hom}_A(X,A^{*}\otimes_AP)=\operatorname{Hom}_A(X,N^{r}(P))$. All three isomorphisms are natural in $X$ (and in $P$, since the evaluation formula of [F4] and the formula of $\gamma$ are natural in $P$), so the composite is a natural isomorphism. [step 2.1, F3, F4, F5, F6]

4.1 Assume now that the model carries an isomorphism $\alpha:A^{*}\to A$ of $A$-bimodules. Then $N^{r}=A^{*}\otimes_A-\cong A\otimes_A-\cong1$, the first natural isomorphism induced by $\alpha$ through functoriality in the first variable and the second the unit isomorphism of [F7]; and $N^{l}\cong\operatorname{Hom}_A(A^{*},-)\cong\operatorname{Hom}_A(A,-)\cong1$, where precomposition with $\alpha$ and with $\alpha^{-1}$ are mutually inverse natural bijections $\operatorname{Hom}_A(A,-)\to\operatorname{Hom}_A(A^{*},-)$ and $f\mapsto f(1_A)$ with inverse $x\mapsto(a\mapsto ax)$ is the natural isomorphism $\operatorname{Hom}_A(A,-)\cong1$ supplied by the module axioms of [F1]. This is a conditional specialization: only the supplied bimodule isomorphism is used, and no claim is made that an arbitrary finite-dimensional $k$-algebra is symmetric or self-injective. Only the finite-dimensional data and finitely many operations enter, so no commutativity of $A$ and no choice are used. [step 3.1, F1, F7] ∎
