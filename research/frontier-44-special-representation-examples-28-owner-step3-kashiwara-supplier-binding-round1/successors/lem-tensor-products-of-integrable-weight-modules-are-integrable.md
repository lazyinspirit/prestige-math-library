---
id: lem-tensor-products-of-integrable-weight-modules-are-integrable
kind: lemma
title: "Tensor products of integrable weight modules and of their crystal lattices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-lattice-and-crystal-basis, def-quantum-weight-module-and-integrability, def-tensor-product-of-modules-by-generators-and-relations, lem-q-binomial-expansion-for-q-commuting-elements, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4-§5, printed pp. 14-20: the category $O_{int}$, the tensor product module structure and the coproduct conventions used in Theorem 5.2."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 333-335, proof of Theorem 13.3.0.18: the coproduct computation reducing tensor integrability and the tensor rule to $U_{q_\\alpha}(\\mathfrak{sl}_2)$."
---

## Statement

Let $M_1,M_2$ be chosen $P$-graded type-one quantum weight modules ([[def-quantum-weight-module-and-integrability]]), and let $M_1\otimes M_2$ carry the $U_q(\mathfrak g)$-module structure of [[def-tensor-product-of-modules-by-generators-and-relations]] given by the coproduct $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta F_i=F_i\otimes1+K_i\otimes F_i$, $\Delta K_h=K_h\otimes K_h$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]. Then:

(a) **Grading.** $M_1\otimes M_2$ is a chosen $P$-graded type-one quantum weight module for $(M_1\otimes M_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(M_1)_{\mu_1}\otimes(M_2)_{\mu_2}$, a direct sum by [[thm-tensor-products-commute-with-arbitrary-direct-sums]].

(b) **Integrability.** If $M_1,M_2$ are integrable then so is $M_1\otimes M_2$: $E_i$ and $F_i$ are locally nilpotent on every pure tensor, hence on the whole module.

(c) **Finite weights and bounded support.** If in addition every label-weight space of $M_1,M_2$ is finite dimensional and each weight set is contained in a finite union of cones $\lambda-Q_+$, then the same holds for $M_1\otimes M_2$.

(d) **Tensored lattices.** If $(L_1,B_1),(L_2,B_2)$ are crystal bases of $M_1,M_2$ ([[def-crystal-lattice-and-crystal-basis]]), then $L_1\otimes_{A_0}L_2$ is a free $A_0$-submodule of $M_1\otimes M_2$ generating it over $\mathbb Q(q)$, satisfies $(L_1\otimes L_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(L_1)_{\mu_1}\otimes(L_2)_{\mu_2}$, and $B_1\otimes B_2$ is a $\mathbb Q$-basis of $(L_1\otimes L_2)/q(L_1\otimes L_2)$ compatible with these weight decompositions.

No choice principle is used.

## Facts & Assumptions

**Given:** Chosen $P$-graded type-one quantum weight modules $M_1,M_2$ with their direct sum decompositions $M_j=\bigoplus_{\mu\in P}(M_j)_\mu$, and the coproduct $\Delta$ of the Drinfeld-Jimbo algebra with $\Delta K_h=K_h\otimes K_h$, $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta F_i=F_i\otimes1+K_i\otimes F_i$; write $q_i=q^{d_i}$, so that $K_i$ acts on $(M_j)_\mu$ by $q_i^{\langle\mu,h_i\rangle}$. On the $\mathbb Q(q)$-vector space $M_1\otimes M_2=M_1\otimes_{\mathbb Q(q)}M_2$ of [[def-tensor-product-of-modules-by-generators-and-relations]] define, for $u\in U_q(\mathfrak g)$ with $\Delta(u)=\sum u'\otimes u''$, the operator $u\cdot(m_1\otimes m_2):=\sum u'm_1\otimes u''m_2$ on elementary tensors, and in part (d) let $(L_1,B_1)$, $(L_2,B_2)$ be crystal bases of $M_1,M_2$.

[F1] Weight modules and integrability: a chosen $P$-graded type-one quantum weight module is a module with a direct sum $M=\bigoplus_{\mu\in P}M_\mu$ such that $K_h$ acts on $M_\mu$ by $q^{\langle\mu,h\rangle}$, $E_iM_\mu\subseteq M_{\mu+\alpha_i}$ and $F_iM_\mu\subseteq M_{\mu-\alpha_i}$; it is integrable when all $E_i$ and $F_i$ act locally nilpotently ([[def-quantum-weight-module-and-integrability]]).

[F2] The coproduct $\Delta$ of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] is an algebra homomorphism $U_q(\mathfrak g)\to U_q(\mathfrak g)\otimes U_q(\mathfrak g)$ with $\Delta(1)=1\otimes1$, $\Delta K_h=K_h\otimes K_h$, $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta F_i=F_i\otimes1+K_i\otimes F_i$; $\Delta$ is coassociative and $\varepsilon$ is a counit.

[F3] In the tensor product $M_1\otimes M_2$ of [[def-tensor-product-of-modules-by-generators-and-relations]] every element is a finite sum of elementary tensors $m_1\otimes m_2$, and the defining relations give $m_1\otimes m_2$ linear in each variable ([[thm-universal-property-of-module-tensor-products]]).

[F4] $q$-binomial expansion ([[lem-q-binomial-expansion-for-q-commuting-elements]]): if $yx=q_i^2xy$ in a $\mathbb Q(q)$-algebra, then $(x+y)^N=\sum_{r=0}^N q_i^{r(N-r)}\binom{N}{r}_i x^ry^{N-r}$; if $yx=t^{-1}xy$, the expansion has coefficients $B_{N,r}(t^{-1})=t^{-r(N-r)}B_{N,r}(t)$ with $B_{N,r}(t)=[N]_t!/([r]_t![N-r]_t!)$. In particular $(x+y)^N$ is a finite $\mathbb Q(q)$-linear combination of the monomials $x^ry^{N-r}$, $0\le r\le N$.

[F5] Tensor products commute with arbitrary direct sums ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]): the natural map $\bigoplus_i(M_i\otimes N)\to(\bigoplus_iM_i)\otimes N$ is an isomorphism, and likewise in the second variable.

[F6] Crystal lattices and bases ([[def-crystal-lattice-and-crystal-basis]]): a crystal lattice $L$ of an integrable weight module $M$ is a free $A_0$-submodule generating $M$ over $\mathbb Q(q)$, weight-graded with $L=\bigoplus_\mu L_\mu$, $L_\mu=L\cap M_\mu$, and stable under $\tilde e_i,\tilde f_i$; a crystal basis is such an $L$ together with a $\mathbb Q$-basis $B=\bigsqcup_\mu B_\mu$ of $L/qL$, $B_\mu\subseteq L_\mu/qL_\mu$, mapped into itself (or $0$) by both operators with $\tilde f_ib=b'\iff b=\tilde e_ib'$.

[F7] Universal property of the tensor product ([[thm-universal-property-of-module-tensor-products]]): for a $\mathbb Q(q)$-bilinear map $b:M_1\times M_2\to V$ into a $\mathbb Q(q)$-vector space there is a unique $\mathbb Q(q)$-linear map $\overline b:M_1\otimes M_2\to V$ with $\overline b(m_1\otimes m_2)=b(m_1,m_2)$.

## Proof

**Proof technique:** direct.

1.1 The operators of the Given are well defined and make $M_1\otimes M_2$ a $U_q(\mathfrak g)$-module. For fixed $u$, the map $(m_1,m_2)\mapsto\sum u'm_1\otimes u''m_2$ is $\mathbb Q(q)$-bilinear because each factor action is linear, so by [F7] it factors through a unique linear operator on $M_1\otimes M_2$; for $\Delta(u)=\sum u'\otimes u''$ this is the displayed action on elementary tensors. Multiplicativity, $u\cdot(v\cdot x)=(uv)\cdot x$, follows from $u'\cdot(v'(\cdot))$ reassociation and $\Delta(uv)=\Delta(u)\Delta(v)$; unitality from $\Delta(1)=1\otimes1$; both are applications of [F2] to the defining formula on a pure tensor, extended to all vectors by linearity. [F2, F3, F7]

1.2 Direct sum decomposition. Tensoring the weight decompositions $M_j=\bigoplus_{\mu\in P}(M_j)_\mu$ and grouping by $\mu_1+\mu_2$ gives an isomorphism $M_1\otimes M_2\cong\bigoplus_{\mu\in P}(M_1\otimes M_2)_\mu$ with $(M_1\otimes M_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(M_1)_{\mu_1}\otimes(M_2)_{\mu_2}$, by two applications of [F5] and the bilinearity of the tensor product [F3]. [F1, F3, F5]

1.3 Local nilpotence of $F_i$ on a pure tensor. Put $x:=F_i\otimes1$ and $y:=K_i\otimes F_i$ as operators on $M_1\otimes M_2$. The toral relation $K_iF_i=q_i^{-2}F_iK_i$ gives $yx=(K_i\otimes F_i)(F_i\otimes1)=q_i^{-2}(F_i\otimes1)(K_i\otimes F_i)=q_i^{-2}xy$, so with $t=q_i^2$ the second clause of [F4] applies and $\Delta(F_i)^n=(x+y)^n=\sum_{r=0}^n\gamma_{n,r}F_i^{\,r}K_i^{\,n-r}\otimes F_i^{\,n-r}$ with the finitely many coefficients $\gamma_{n,r}=q_i^{-r(n-r)}B_{n,r}(q_i^2)\in\mathbb Q(q)$; the powers of $K_i$ preserve each weight space and may be left inside the factor. Given $u\in M_1$, $v\in M_2$, choose $A$ with $F_i^Au=0=F_i^Av$; if $n>2A$ then every $0\le r\le n$ satisfies $r>A$ or $n-r>A$, so every term of the expansion kills $u\otimes v$, and $\Delta(F_i)^n(u\otimes v)=0$: $F_i$ is locally nilpotent on every pure tensor. [F1, F2, F4, algebra]

2.1 The decomposition of step 1.2 is that of a chosen $P$-graded type-one weight module. On $(M_1)_{\mu_1}\otimes(M_2)_{\mu_2}$, $K_h$ acts by $\Delta K_h=K_h\otimes K_h$ as $q^{\langle\mu_1,h\rangle}q^{\langle\mu_2,h\rangle}=q^{\langle\mu_1+\mu_2,h\rangle}$; $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$ maps it into $(M_1)_{\mu_1+\alpha_i}\otimes(M_2)_{\mu_2}+(M_1)_{\mu_1}\otimes(M_2)_{\mu_2+\alpha_i}\subseteq(M_1\otimes M_2)_{\mu+\alpha_i}$ for $\mu=\mu_1+\mu_2$, because $K_i^{-1}$ preserves each $(M_2)_{\mu_2}$; and $\Delta F_i=F_i\otimes1+K_i\otimes F_i$ likewise maps it into $(M_1\otimes M_2)_{\mu-\alpha_i}$. This is exactly the type-one weight module structure of [F1] on the decomposition of step 1.2, proving (a). [step 1.2, F1, F2, algebra]

2.2 Local nilpotence of $E_i$, and of both operators on every vector. Put $x:=E_i\otimes K_i^{-1}$ and $y:=1\otimes E_i$; then $yx=(1\otimes E_i)(E_i\otimes K_i^{-1})=E_i\otimes E_iK_i^{-1}=q_i^{2}(E_i\otimes K_i^{-1})(1\otimes E_i)=q_i^2xy$ by $E_iK_i^{-1}=q_i^{2}K_i^{-1}E_i$, so the first clause of [F4] gives $\Delta(E_i)^n=\sum_{r=0}^nq_i^{r(n-r)}\binom{n}{r}_iE_i^{\,r}K_i^{-r}\otimes E_i^{\,n-r}$, and the same argument with $A$ chosen for $E_i$ shows that $\Delta(E_i)^n$ kills $u\otimes v$ for $n>2A$. Since every vector of $M_1\otimes M_2$ is a finite sum of pure tensors [F3], a bound that works for those finitely many tensors kills the sum; hence $E_i$ and $F_i$ are locally nilpotent on $M_1\otimes M_2$, proving (b). [step 1.3, F1, F2, F3, F4, algebra]

2.3 Finite weight spaces and bounded support. Assume now that each $(M_j)_\mu$ is finite dimensional and $\mathrm{wt}(M_j)\subseteq\bigcup_{a=1}^{s_j}(\lambda_{j,a}-Q_+)$. Fix $\mu\in P$ and consider the pairs $(\mu_1,\mu_2)$ with $\mu_1+\mu_2=\mu$ and both $(M_j)_{\mu_j}$ nonzero. Each such pair lies in the finite union over $a,b$ of the solution sets of $\mu_1=\lambda_{1,a}-\nu_1$, $\mu_2=\lambda_{2,b}-\nu_2$ with $\nu_1,\nu_2\in Q_+$ and $\nu_1+\nu_2=\lambda_{1,a}+\lambda_{2,b}-\mu$; for fixed $a,b$ the right hand side is a fixed element of $Q_+$, and a pair $(\nu_1,\nu_2)\in Q_+\times Q_+$ summing to it is determined by the coefficients of $\nu_1$, which are bounded above by those of that element, so there are only finitely many solutions. Hence only finitely many pairs contribute to $(M_1\otimes M_2)_\mu$ in step 1.2, and it is a finite sum of finite-dimensional spaces, hence finite dimensional; the weight set $\mathrm{wt}(M_1)+\mathrm{wt}(M_2)$ is contained in the finite union of the cones $\lambda_{1,a}+\lambda_{2,b}-Q_+$. This proves (c). [step 1.2, F1, F5, algebra]

2.4 The tensored lattice. Let $(L_j,B_j)$ be crystal bases and put $L:=L_1\otimes_{A_0}L_2$; since $L_1$ is a free $A_0$-module, $L$ is a direct sum of copies of the free module $L_2$, hence free. Choose $A_0$-bases $(e_\alpha)$ of $L_1$ and $(f_\beta)$ of $L_2$: the elements $e_\alpha\otimes f_\beta$ form an $A_0$-basis of $L$, and their images in $M_1\otimes M_2$ are the pure tensors of two $\mathbb Q(q)$-bases of $M_1,M_2$, hence are $\mathbb Q(q)$-linearly independent: the natural map $L\to M_1\otimes M_2$ is injective and its $\mathbb Q(q)$-span is all of $M_1\otimes M_2$, because $L_j$ generates $M_j$ over $\mathbb Q(q)$ [F6] and the $\mathbb Q(q)$-span of a tensor product of spanning sets is the whole tensor product. The weight decomposition is the tensor product of the two graded decompositions: $(L_1\otimes L_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(L_1)_{\mu_1}\otimes(L_2)_{\mu_2}$, where $(L_1\otimes L_2)_\mu:=L\cap(M_1\otimes M_2)_\mu$ and $L\cap(M_1\otimes M_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(L_1)_{\mu_1}\otimes(L_2)_{\mu_2}$ because the summands of the two graded free modules lie in distinct weight spaces and the weight spaces of $M_1\otimes M_2$ are the direct sum of the corresponding tensor pieces by step 1.2. [step 1.2, F5, F6, algebra]

3.1 The residue basis. The multiplication-by-$q$ map on $L$ has image $qL=qL_1\otimes L_2+L_1\otimes qL_2$, since $q(l_1\otimes l_2)=(ql_1)\otimes l_2=l_1\otimes(ql_2)$; the natural surjection $L\to(L_1/qL_1)\otimes_{\mathbb Q}(L_2/qL_2)$, $l_1\otimes l_2\mapsto(l_1+qL_1)\otimes(l_2+qL_2)$, kills $qL$, and the $\mathbb Q$-bilinear pairing extends to a map on $(L_1/qL_1)\otimes_{\mathbb Q}(L_2/qL_2)$ sending a pure tensor to the class of $l_1\otimes l_2$: replacing a representative by $l_1+ql_1'$ changes the class by $(ql_1')\otimes l_2\in qL$, and similarly in the second variable. The two maps are inverse because the composite is the identity on pure tensors, which generate both $\mathbb Q$-vector spaces, so $L/qL\cong(L_1/qL_1)\otimes_{\mathbb Q}(L_2/qL_2)$. As $B_j$ is a $\mathbb Q$-basis of $L_j/qL_j$, the classes $b_1\otimes b_2$ of the elementary tensors of basis elements form a $\mathbb Q$-basis of $L/qL$, and by the weight decomposition of step 2.4 the element $b_1\otimes b_2\in B_1\otimes B_2$ lies in the piece of weight $\mu_1+\mu_2$ exactly when $b_j\in(B_j)_{\mu_j}$; thus $B_1\otimes B_2$ is a weight-graded $\mathbb Q$-basis of $L/qL$. This proves (d). [step 2.4, F3, F6, algebra]

4.1 No choice principle was used: the action and its properties are built from the finitely supported coproduct formulas of [F2], the finite expansions of [F4], and the explicit bases of the free modules $L_1,L_2$ in step 2.4; no family of nonempty sets is selected from. [step 3.1, given, algebra] ∎
