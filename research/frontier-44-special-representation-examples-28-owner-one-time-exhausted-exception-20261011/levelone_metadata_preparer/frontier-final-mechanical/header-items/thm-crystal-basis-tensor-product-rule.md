---
id: thm-crystal-basis-tensor-product-rule
kind: theorem
title: "The crystal basis of a tensor product and the two-case operator rule"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-crystals, lem-i-string-components-of-a-crystal-lattice, lem-tensor-products-of-integrable-weight-modules-are-integrable, def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, thm-unique-kashiwara-i-string-decomposition, lem-rank-one-tensor-strings-have-the-crystal-limit-rule, def-quantum-weight-module-and-integrability]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 19-22, Example 5.1 and Theorem 5.2 with its proof: reduction to irreducible highest weight $U_i$-modules and the two-case lattice congruences $\\tilde e_iL\\subseteq L$, $\\tilde f_iL\\subseteq L$."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.3, printed pp. 474-475, Proposition 2.3.2(ii): the string decomposition of lattice vectors and the single-component residue form used for the lifts."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 333-335, Theorem 13.3.0.18: 'It is sufficient to prove it in $\\mathfrak{sl}(2)$', and formulas (13.3.0.19)-(13.3.0.20)."
---

## Statement

Let $M_1,M_2$ be integrable chosen $P$-graded type-one quantum weight modules with crystal bases $(L_1,B_1)$, $(L_2,B_2)$ ([[def-crystal-lattice-and-crystal-basis]]), and let $M_1\otimes M_2$ be the integrable module of [[lem-tensor-products-of-integrable-weight-modules-are-integrable]].

Then $(L_1\otimes_{A_0}L_2,\,B_1\otimes B_2)$ is a crystal basis of $M_1\otimes M_2$, and its crystal is the tensor product crystal $B_1\otimes B_2$ of [[def-tensor-product-of-crystals]]: for all $b_1\in B_1$, $b_2\in B_2$ and $i\in I$,

$$\tilde f_i(b_1\otimes b_2)=\begin{cases}\tilde f_ib_1\otimes b_2,&\varphi_i(b_1)>\varepsilon_i(b_2),\\ b_1\otimes\tilde f_ib_2,&\varphi_i(b_1)\le\varepsilon_i(b_2),\end{cases}\qquad \tilde e_i(b_1\otimes b_2)=\begin{cases}\tilde e_ib_1\otimes b_2,&\varphi_i(b_1)\ge\varepsilon_i(b_2),\\ b_1\otimes\tilde e_ib_2,&\varphi_i(b_1)<\varepsilon_i(b_2),\end{cases}$$

with value $0$ as soon as the selected factor maps to $0$. In particular $\tilde e_i$ and $\tilde f_i$ map $B_1\otimes B_2$ into $(B_1\otimes B_2)\cup\{0\}$, and for all $b,b'\in B_1\otimes B_2$ one has $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$, so the partial-inverse axiom holds. The equality case $\varphi_i(b_1)=\varepsilon_i(b_2)$ is resolved as in the definition: $\tilde f_i$ acts on the second factor and $\tilde e_i$ on the first.

No finite dimensionality, bounded support or uniform nilpotence is assumed, and no choice principle is used.

## Facts & Assumptions

**Given:** Integrable chosen $P$-graded type-one quantum weight modules $M_1,M_2$ with crystal bases $(L_1,B_1)$, $(L_2,B_2)$ ([[def-crystal-lattice-and-crystal-basis]]), the tensor product module $M_1\otimes M_2$ of [[lem-tensor-products-of-integrable-weight-modules-are-integrable]] with its Kashiwara operators $\tilde e_i,\tilde f_i$, and its $A_0$-tensor lattice $L_1\otimes L_2=L_1\otimes_{A_0}L_2$ with residue basis $B_1\otimes B_2$.

[F1] Crystal lattice and crystal basis axioms ([[def-crystal-lattice-and-crystal-basis]]): $L_j$ is free over $A_0$, weight-graded, generates $M_j$ over $\mathbb Q(q)$ and is stable under $\tilde e_i,\tilde f_i$; $B_j=\bigsqcup_\mu(B_j)_\mu$ is a $\mathbb Q$-basis of $L_j/qL_j$ with $\tilde e_iB_j\subseteq B_j\cup\{0\}$, $\tilde f_iB_j\subseteq B_j\cup\{0\}$ and $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$.

[F2] String components of a lattice vector ([[lem-i-string-components-of-a-crystal-lattice]]): for $u\in L_{\lambda}$ with admissible decomposition $u=\sum_nF_i^{(n)}u_n$, every $u_n$ lies in $L$; the lattice decomposes as $L=\bigoplus_{n\ge0}\tilde f_i^{\,n}(L\cap\ker E_i)$; if $u+qL\in B_\lambda$ then exactly one component $u_{n_0}$ is outside $qL$, with $u_{n_0}+qL=\tilde e_i^{\,n_0}(u+qL)\in B$ and $u\equiv F_i^{(n_0)}u_{n_0}\pmod{qL}$; and the residues of $\tilde e_iu,\tilde f_iu$ are those of $F_i^{(n_0-1)}u_{n_0}$, $F_i^{(n_0+1)}u_{n_0}$.

[F3] The rank-one tensor strings ([[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]]): for rank-one simples of nonnegative integral highest weights $a_1,a_2$ with divided bases $v_j=F_i^{(j)}v_0$, $w_k=F_i^{(k)}w_0$ and their $A_0$-tensor lattice, that lattice is stable under $\tilde e_i,\tilde f_i$ and modulo $q$ one has $\tilde f_i(v_j\otimes w_k)=v_{j+1}\otimes w_k$ if $a_1-j>k$ and $v_j\otimes w_{k+1}$ otherwise, while $\tilde e_i$ acts on the first factor if $a_1-j\ge k$ and on the second otherwise, with zero outside the divided-basis ranges; this is a finite, choice-free calculation independent of the grand loop.

[F4] Kashiwara operators ([[def-kashiwara-crystal-operators]]): on the unique admissible string decomposition, $\tilde e_i$ and $\tilde f_i$ shift the divided string positions down and up by one; they are linear, preserve $L$ and commute with module homomorphisms.

[F5] Uniqueness of admissible decompositions ([[thm-unique-kashiwara-i-string-decomposition]]): every vector of an integrable weight module has exactly one finite admissible $i$-string decomposition; on $\ker E_i\cap M_\mu$ the maps $F_i^{(n)}$ are injective for $n\le\langle h_i,\mu\rangle$ and zero for $n>\langle h_i,\mu\rangle$, and $\ker E_i\cap M_\mu=0$ for $\langle h_i,\mu\rangle<0$.

[F6] Crystal graph invariants ([[def-crystal-graph-epsilon-phi-and-weight]]): $\varepsilon_i(b)=\max\{n:\tilde e_i^{\,n}b\ne0\}$ and $\varphi_i(b)=\max\{n:\tilde f_i^{\,n}b\ne0\}$ are finite and nonnegative, $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$, and on an existing $\tilde f_i$-edge $\varphi_i$ decreases by one and $\varepsilon_i$ increases by one.

[F7] Tensor integrability lemma ([[lem-tensor-products-of-integrable-weight-modules-are-integrable]]): $M_1\otimes M_2$ is an integrable chosen $P$-graded type-one weight module for the direct sum grading $(M_1\otimes M_2)_\mu=\bigoplus_{\mu_1+\mu_2=\mu}(M_1)_{\mu_1}\otimes(M_2)_{\mu_2}$; $L_1\otimes L_2$ is free and generates $M_1\otimes M_2$ over $\mathbb Q(q)$, is weight-graded accordingly, and $B_1\otimes B_2$ is a weight-graded $\mathbb Q$-basis of $(L_1\otimes L_2)/q(L_1\otimes L_2)$ (stability under the crystal operators is not assumed; it is proved here).

[F8] The tensor product crystal and the target rules ([[def-tensor-product-of-crystals]]).

[F9] Weight modules and integrability ([[def-quantum-weight-module-and-integrability]]): the tensor module is a chosen $P$-graded type-one weight module in the sense stated there, and integrability is local nilpotence of all $E_i,F_i$.

## Proof

**Proof technique:** direct.

1.1 Reduction to single string components. Fix $b_1\otimes b_2\in B_1\otimes B_2$ and lifts $u_j\in L_j$ with $u_j+qL_j=b_j$, and put $n_j:=\varepsilon_i(b_j)$. By [F2] applied to $u_j$ there are top components $w_j\in L_j\cap\ker E_i$ with $w_j+qL_j=\tilde e_i^{\,n_j}b_j\in B_j$ and $u_j\equiv F_i^{(n_j)}w_j\pmod{qL_j}$; hence $u_1\otimes u_2\equiv h:=F_i^{(n_1)}w_1\otimes F_i^{(n_2)}w_2\pmod{q(L_1\otimes L_2)}$ (expand the difference as in the bilinearity of the tensor product), and $h+q(L_1\otimes L_2)=b_1\otimes b_2$ because the residue of $F_i^{(n_j)}w_j$ is $b_j$ by [F2]. [F2, given, algebra]

1.2 The rank-one block. The top $w_j$ lies in $\ker E_i\cap (L_j)_{\mu_j}$ with $a_j:=\langle h_i,\mu_j\rangle\ge0$ by [F5]; the divided powers $F_i^{(k)}w_j$, $0\le k\le a_j$, form the string basis of the finite-dimensional $U_i$-submodule $N_j:=U_iw_j$, all of them lie in $L_j$ by [F2], and on this string $\tilde f_i$ acts as the divided-power shift and $\tilde e_i$ as its partial inverse by [F4]. The tensor product of the inclusions $N_1\otimes N_2\to M_1\otimes M_2$ is injective and $U_i$-linear, and for a vector of $N_1\otimes N_2$ its admissible decomposition computed inside $N_1\otimes N_2$ is also admissible in $M_1\otimes M_2$, so by uniqueness [F5] it is the admissible decomposition there; hence the operators $\tilde e_i,\tilde f_i$ of $M_1\otimes M_2$ restrict on the image to the string operators computed from $N_1,N_2$. [F2, F4, F5, F6]

2.1 The rank-one computation. Apply [F3] to the pair $(w_1,w_2)$ with divided bases $v_j=F_i^{(j)}w_1$, $w_k=F_i^{(k)}w_2$ and their $A_0$-tensor lattice $\Lambda:=\sum_{j,k}A_0\,v_j\otimes w_k\subseteq L_1\otimes L_2$, which is preserved by both string operators by [F3] and by step 1.2; modulo $q\Lambda$ one has $\tilde f_i(v_{n_1}\otimes w_{n_2})=v_{n_1+1}\otimes w_{n_2}$ if $a_1-n_1>n_2$ and $v_{n_1}\otimes w_{n_2+1}$ otherwise, while $\tilde e_i$ acts on the first factor if $a_1-n_1\ge n_2$ and on the second otherwise, with $0$ outside the divided-basis ranges. [step 1.2, F3]

3.1 Transport to the residues. Since $h\in\Lambda$, step 2.1 computes $\tilde f_ih$ and $\tilde e_ih$ modulo $q\Lambda\subseteq q(L_1\otimes L_2)$, and the residues of $v_{n_1+1}=F_i^{(n_1+1)}w_1$ and $v_{n_1}=F_i^{(n_1)}w_1$ are $\tilde f_ib_1$ and $b_1$; likewise on the second factor by [F2]. Because $a_1-n_1=\varphi_i(b_1)$ by [F6] and $n_2=\varepsilon_i(b_2)$, the two cases of step 2.1 are exactly $\varphi_i(b_1)>\varepsilon_i(b_2)$ and $\varphi_i(b_1)\le\varepsilon_i(b_2)$ for $\tilde f_i$, and $\varphi_i(b_1)\ge\varepsilon_i(b_2)$ or $\varphi_i(b_1)<\varepsilon_i(b_2)$ for $\tilde e_i$, giving the displayed two-case rules for the residue $b_1\otimes b_2$ of $h$; a selected factor with $\tilde f_i$ or $\tilde e_i$ equal to $0$ produces the value $0$, consistently on both sides of the congruence. [step 1.1, step 2.1, F2, F6, algebra]

4.1 Stability of the tensor lattice. For arbitrary $u_j\in L_j$ use the full string decomposition of [F2]: $u_j=\sum_nF_i^{(n)}w_{j,n}$ with finitely many nonzero $w_{j,n}\in L_j\cap\ker E_i$, and each pair $(w_{1,n},w_{2,n'})$ spans a finite rank-one block as in step 1.2 whose $A_0$-tensor lattice is preserved by both string operators by [F3]; since the inclusions commute with the operators (step 1.2), every term of the finite expansion of $u_1\otimes u_2$ has its images under $\tilde e_i,\tilde f_i$ inside $L_1\otimes L_2$, and linearity gives $\tilde e_i(L_1\otimes L_2)\subseteq L_1\otimes L_2$ and $\tilde f_i(L_1\otimes L_2)\subseteq L_1\otimes L_2$. In particular $\tilde f_i(q(L_1\otimes L_2))\subseteq q(L_1\otimes L_2)$ and likewise for $\tilde e_i$, so the congruence $u_1\otimes u_2\equiv h$ of step 1.1 may be transported by the operators and the two-case rules of step 3.1 hold for the residues of arbitrary lifts, not only for $h$. [step 1.2, step 2.1, step 3.1, F2, F3, F7]

5.1 Operator rules and residues. Combining steps 3.1 and 4.1: for all $b_1\in B_1,b_2\in B_2$ the classes $\tilde f_i(b_1\otimes b_2)$ and $\tilde e_i(b_1\otimes b_2)$ are computed by the displayed two-case rules, and they lie in $(B_1\otimes B_2)\cup\{0\}$ because each case is the residue of an element of the form $v\otimes w$ with $v\in B_1\cup\{0\}$, $w\in B_2\cup\{0\}$; the equality case $\varphi_i(b_1)=\varepsilon_i(b_2)$ sends $\tilde f_i$ to the second factor, since the first case requires the strict inequality, and $\tilde e_i$ to the first factor, since its first case is non-strict. [step 3.1, step 4.1, F2, F6]

6.1 Partial inverses. Suppose first $\varphi_i(b_1)>\varepsilon_i(b_2)$ and let $b':=\tilde f_i(b_1\otimes b_2)=\tilde f_ib_1\otimes b_2\ne0$; then $\varphi_i(\tilde f_ib_1)=\varphi_i(b_1)-1\ge\varepsilon_i(b_2)$ by [F6], so the $\tilde e_i$-rule of step 5.1 selects the first factor at $b'$ and $\tilde e_ib'=\tilde e_i\tilde f_ib_1\otimes b_2=b_1\otimes b_2$ by the factor partial inverse [F1]. Suppose next $\varphi_i(b_1)\le\varepsilon_i(b_2)$ and $b':=b_1\otimes\tilde f_ib_2\ne0$; then $\tilde f_ib_2\ne0$ and $\varepsilon_i(\tilde f_ib_2)=\varepsilon_i(b_2)+1>\varphi_i(b_1)$ by [F6], so the $\tilde e_i$-rule selects the second factor and $\tilde e_ib'=b_1\otimes\tilde e_i\tilde f_ib_2=b_1\otimes b_2$. The converse implication is the same computation read backwards, and at the tie $\varphi_i(b_1)=\varepsilon_i(b_2)$ both consistency conditions hold simultaneously: this is exactly why $\tilde e_i$ is assigned the non-strict and $\tilde f_i$ the strict comparison. [step 5.1, F1, F6]

7.1 Conclusion. By [F7] the pair $(L_1\otimes L_2,B_1\otimes B_2)$ has the lattice axioms of generation over $\mathbb Q(q)$, weight grading and residue-basis properties; step 4.1 supplies operator stability and step 5.1 the operator axioms on $B_1\otimes B_2$; step 6.1 supplies the partial-inverse axiom. Hence it is a crystal basis of $M_1\otimes M_2$ whose crystal is the tensor product crystal $B_1\otimes B_2$ of [F8] with the displayed rules. Every step used finite string data of two vectors and the one-factor crystal bases; no finite dimensionality, bounded support, uniform nilpotence or choice principle is assumed. [step 5.1, step 6.1, F7, F8, F9, given] ∎
