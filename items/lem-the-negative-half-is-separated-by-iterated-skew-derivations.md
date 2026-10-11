---
id: lem-the-negative-half-is-separated-by-iterated-skew-derivations
kind: lemma
title: "Separation of the negative half by iterated skew derivations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-drinfeld-jimbo-quantized-enveloping-algebra, def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-positive-negative-and-toral-quantum-subalgebras, def-symmetrizable-cartan-datum-for-a-quantum-group, def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, thm-triangular-decomposition-of-a-quantized-enveloping-algebra]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
axiom_use: "AC is inherited through [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]](ii), whose formal embedding assumes it, and is used only to supply the nondegenerate generic braided pairing; the rescaling, adjunction, word-formula and separation arguments of this item are choice-free field algebra."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 1, §1.2.4 (the radical is a two-sided ideal), §1.2.5 and §1.2.12 (the quotient $\\mathbf f$ and non-degeneracy on each homogeneous component), §1.2.15 (if $r_i(x)=0$ for all $i$ and $x\\in\\mathbf f_\\nu$ with $\\nu\\ne0$, then $x=0$, proved from the adjunction of 1.2.13(a)); Ch. 33, §33.1.1 and Theorem 33.1.3(a),(b) (the Serre quotient equals $\\mathbf f$, with the degreewise dimension comparison)."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§6, printed pp. 22-23: the definitions (6.1)-(6.3) and the projection $P_i$ of (6.7); Proposition 6.1 (the $i$-string decomposition $u=\\sum_lf_i^{(l)}u_l$ with $e_i'u_l=0$), which is the operator form of the same nondegeneracy circle and is used in the crystal development."
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a finite symmetrizable Cartan datum with
$a_{ii}=2$ for all $i$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]),
let $U_q^-=\bigoplus_{\nu\in Q_+}U_q^-[-\nu]$ be the negative half of the
Drinfeld–Jimbo algebra $U_q(\mathfrak g)$ over $\mathbb Q(q)$
([[def-drinfeld-jimbo-quantized-enveloping-algebra]],
[[def-positive-negative-and-toral-quantum-subalgebras]]), and let
$e_i',e_i''$ be the skew derivations of
[[def-kashiwara-skew-derivations-on-the-negative-quantum-half]].

(i) **One step.** If $x\in U_q^-[-\nu]$ with $\nu\ne0$ satisfies
$e_i'(x)=0$ for all $i\in I$, then $x=0$.

(ii) **Iterated separation.** For every $0\ne x\in U_q^-[-\nu]$ there is a
sequence $i_1,\dots,i_k\in I$ with $\nu=\alpha_{i_1}+\cdots+\alpha_{i_k}$ (the
multiset is uniquely determined by $\nu$, because the simple roots freely
generate $Q$, and $k=\operatorname{ht}(\nu)$) such that
$e_{i_k}'\cdots e_{i_2}'e_{i_1}'(x)\ne0$. Here the composite is read with the
rightmost factor applied first, so the first chosen derivation $e_{i_1}'$ acts
first; equivalently, the common kernel, on $U_q^-[-\nu]$, of all composites
$e_{i_1}'\cdots e_{i_k}'$ over all such sequences is zero.

The same statements hold with $e_i''$ in place of $e_i'$. This separation property is used by the crystal development and the categorification pairing.

## Facts & Assumptions

**Given:** The negative half $U_q^-$ with its root grading and its skew derivations $e_i',e_i''$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]), the simple roots and their symmetric Cartan form, and the generic halves of the published generic-half theorem with parameter $z$.

[F1] Every element of $U_q^-$ is a finite $\mathbb Q(q)$-linear combination of words $F_{j_1}\cdots F_{j_m}$; the word $F_{j_1}\cdots F_{j_m}$ lies in $U_q^-[-\nu]$ for $\nu=\alpha_{j_1}+\cdots+\alpha_{j_m}$, every word of that degree has exactly $\operatorname{ht}(\nu)=m$ letters, and the simple roots freely generate $Q$, so the multiset of indices of $\nu$ is unique ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]], [[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F2] The derivations are $\mathbb Q(q)$-linear, vanish on $1$, satisfy $e_i'(F_j)=e_i''(F_j)=\delta_{ij}$, obey $e_i'(F_jy)=q_i^{-a_{ij}}F_je_i'(y)+\delta_{ij}y$ and $e_i''(F_jy)=q_i^{a_{ij}}F_je_i''(y)+\delta_{ij}y$ for all $y\in U_q^-$, and lower the height by one: $e_i'\bigl(U_q^-[-\nu]\bigr)$ and $e_i''\bigl(U_q^-[-\nu]\bigr)$ lie in $U_q^[-(\nu-\alpha_i)]$, the target being $0$ when $\nu-\alpha_i\notin Q_+$. Iterating the commutation relation gives the word deletion formula $e_i'(F_{j_1}\cdots F_{j_m})=\sum_{t:j_t=i}q_i^{-a_{ij_1}-\cdots-a_{ij_{t-1}}}F_{j_1}\cdots\widehat{F_{j_t}}\cdots F_{j_m}$, where the hat omits one letter, and $q_i^{-a_{ij_s}}=q^{-\langle\alpha_{j_s},\alpha_i\rangle}$ because $q_i=q^{d_i}$ and $d_ia_{ij}=d_ja_{ji}$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], [[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F3] $\psi$ is the involutive semilinear algebra automorphism with $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_{-h}$; it preserves $U_q^-$ and its grading, and $e_i''=\psi e_i'\psi$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]] (e)).

[F4] The published generic-half theorem (ii) provides algebras $H^+$, $H^-$ over $\mathbb Q(z)$, presented by the separate symmetric quantum Serre relations with $z_i=z^{d_i}$. They are graded braided Hopf algebras: generators are primitive, the counit kills positive height, and the tensor square carries the braided product $(u\otimes v)(u'\otimes v')=z^{-\langle\deg u',\deg v\rangle}uu'\otimes vv'$ with negative degrees for $H^-$. It provides a nondegenerate pairing $\langle\cdot,\cdot\rangle:H^+\times H^-\to\mathbb Q(z)$, zero on unequal opposite degrees, with $\langle e_i,f_j\rangle=\delta_{ij}/(z_i-z_i^{-1})$, $\langle1,1\rangle=1$ and $\langle1,y\rangle=\varepsilon(y)$; opposite graded components are dual, and both braided Hopf adjunctions $\langle x,yy'\rangle=\sum\langle x_{(1)},y\rangle\langle x_{(2)},y'\rangle$ and $\langle xx',y\rangle=\sum\langle x,y_{(1)}\rangle\langle x',y_{(2)}\rangle$ hold. The theorem assumes AC, used only in its formal embedding argument ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]], [[def-axiom-of-choice]]).

[F5] The defining Serre relations of the Drinfeld–Jimbo negative half $\mathrm{Serre}^-_{ij}$ are the separate symmetric quantum Serre relations of [F4] at $z=q$, and $H^+$ is presented by the same relations with $e_i$ in place of $f_i$; since $q$ is transcendental, $z\mapsto q$ identifies $\mathbb Q(z)$ with $\mathbb Q(q)$. Hence there are algebra isomorphisms $\varphi_+:U_q^-\to H^+$ with $\varphi_+(F_i)=e_i$ and $\varphi_-:U_q^-\to H^-$ with $\varphi_-(F_i)=f_i$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]], [[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]]).

[F6] $q_i-q_i^{-1}\ne0$ in $\mathbb Q(q)$ and $z_i-z_i^{-1}\ne0$ in $\mathbb Q(z)$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]] [F6]).



## Verification

**Proof technique:** transport the published generic braided pairing to the actual Serre quotient by the degree-multiplicative normalization $c_\nu=\prod_i(q_i-q_i^{-1})^{n_i}$, verify the $e_i'$-adjunction by an explicit braided-coproduct computation, derive the matching-permutation word formula and symmetry from it, and then separate iteratively by peeling words.

1.1 The normalized pairing on the half. Apply the substitution $z\mapsto q$ of [F5] to the pairing of [F4], getting a nondegenerate $\mathbb Q(q)$-valued pairing $\langle\cdot,\cdot\rangle:H^+\times H^-\to\mathbb Q(q)$, still zero on unequal opposite degrees, with $\langle e_i,f_j\rangle=\delta_{ij}/(q_i-q_i^{-1})$, $\langle1,1\rangle=1$, $\langle1,y\rangle=\varepsilon(y)$, dual opposite graded components, and the two adjunctions of [F4]. Define the degree character $c:Q_+\to\mathbb Q(q)^\times$ by $c_\nu=\prod_i(q_i-q_i^{-1})^{n_i}$ for $\nu=\sum_in_i\alpha_i$, and the rescaled pairing $\langle x,y\rangle_c:=c_{\nu}\langle x,y\rangle$ for $x\in H^+[\nu]$, $y\in H^-[-\nu]$, extended by zero on unequal opposite degrees, where $H^\pm[\pm\nu]$ are the graded components of [F4]. Then $c$ is multiplicative because $\nu\mapsto n_i$ is additive and the two coproduct factors of a homogeneous element have degrees adding to its own; each nonzero term of the adjunctions therefore acquires the scalar $c_{\nu_{(1)}}c_{\nu_{(2)}}=c_\nu$, so $\langle x,yy'\rangle_c=\sum\langle x_{(1)},y\rangle_c\langle x_{(2)},y'\rangle_c$ and $\langle xx',y\rangle_c=\sum\langle x,y_{(1)}\rangle_c\langle x',y_{(2)}\rangle_c$. Moreover $\langle e_i,f_j\rangle_c=(q_i-q_i^{-1})\delta_{ij}/(q_i-q_i^{-1})=\delta_{ij}$ and $\langle1,1\rangle_c=1$, and $\langle\cdot,\cdot\rangle_c$ is nondegenerate on every pair of opposite graded components because each $c_\nu$ is a nonzero scalar. AC is inherited here from [F4] and used nowhere else in this item; the remaining steps are choice-free. [F4, F5, F6, algebra]

1.2 Generators pair only with height one from the left. If $u=ab\in H^-$ is a product of two elements of positive degree, then $\langle e_i,u\rangle=0$ for every $i$. Indeed $e_i$ is primitive in $H^+$ [F4], so the first adjunction gives $\langle e_i,ab\rangle=\langle e_i,a\rangle\langle1,b\rangle+\langle1,a\rangle\langle e_i,b\rangle$, and $\langle1,a\rangle=\varepsilon(a)$ and $\langle1,b\rangle=\varepsilon(b)$ both vanish because $a$ and $b$ have positive degree [F4]. Every homogeneous element of $H^-[-\mu]$ with $\operatorname{ht}(\mu)\ge2$ is a linear combination of such products: on the free algebra its defining word splits after the first letter, and the product of the two positive-degree classes is the class of that word, so the class lies in the span of products of two positive-degree elements. Hence $\langle e_i,u\rangle=0$ whenever $u\in H^-[-\mu]$ and $\operatorname{ht}(\mu)\ge2$; by the same argument, scaled by $c_{\alpha_i}\ne0$, also $\langle e_i,u\rangle_c=0$. [F4, F6, algebra]

1.3 The $e_i'$-adjunction. Define $B(P,Q):=\langle\varphi_+(P),\varphi_-(Q)\rangle_c$ on $U_q^-\times U_q^-$, where $\varphi_\pm$ are the isomorphisms of [F5] and the pairing is extended by zero when the degrees of $P$ and $Q$ differ. Then $B$ is bilinear and homogeneous, and $B(1,1)=\langle1,1\rangle_c=1$. We prove $B(F_kP,Q)=B(P,e_k'Q)$ for all $k$, $P$ and all $Q$ the class of a word $w=F_{j_1}\cdots F_{j_m}$; since the classes of words span $U_q^-$ [F1] and both sides are $\mathbb Q(q)$-linear in $Q$ (using [F2] for $e_k'$), this gives the adjunction for all $Q$. Let $y:=\varphi_-(w)=f_{j_1}\cdots f_{j_m}$. Because $\varphi_-$ is an algebra homomorphism [F5] and $\Delta$ is an algebra map into the braided tensor square with primitive generators [F4], $\Delta(y)=\sum_{S}\gamma(S)\varphi_-(w_S)\otimes\varphi_-(w_{S^c})$ over all subsets $S\subseteq\{1,\dots,m\}$, where $w_S$ is the subword with letters in $S$ and $\gamma(S)=\prod_{s<t,\ s\notin S,\ t\in S}q^{-\langle\alpha_{j_s},\alpha_{j_t}\rangle}$ records precisely the braided cross-scalars of the product expansion. The second rescaled adjunction and multiplicativity of $\varphi_+$ then give
$$B(F_kP,w)=\sum_S\gamma(S)\,\langle e_k,\varphi_-(w_S)\rangle_c\,\langle\varphi_+(P),\varphi_-(w_{S^c})\rangle_c.$$
By step 1.2 the factor $\langle e_k,\varphi_-(w_S)\rangle_c$ vanishes when $|S|\ge2$; it vanishes when $|S|=0$ because $\varphi_-(w_\emptyset)=1$ and $\langle e_k,1\rangle=0$ [F4]; and when $S=\{t\}$ it equals $\delta_{j_tk}\langle e_k,f_k\rangle_c=\delta_{j_tk}$ by [F4] and step 1.1, while for $j_t\ne k$ it vanishes by the degree support of the pairing. Hence
$$B(F_kP,w)=\sum_{t:j_t=k}q^{-\sum_{s<t}\langle\alpha_{j_s},\alpha_k\rangle}\,B(P,w\setminus t),$$
and the right-hand side is $B(P,e_k'(w))$ by the deletion formula of [F2], because $q_i^{-a_{ij_s}}=q^{-\langle\alpha_{j_s},\alpha_i\rangle}$. This proves the adjunction, which is axiom (R) of [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]]; by the uniqueness proved there, $B$ is the normalized Lusztig–Kashiwara form determined by (R), (H) and (N). [step 1.1, step 1.2, F1, F2, F4, F5, algebra]

1.4 The matching-permutation formula and symmetry. For words $u=F_{i_1}\cdots F_{i_k}$ and $v=F_{j_1}\cdots F_{j_{k'}}$ one has $B(u,v)=0$ unless $k=k'$ and the multisets of letters agree, in which case
$$B(F_{i_1}\cdots F_{i_k},F_{j_1}\cdots F_{j_k})=\sum_{\sigma}q^{-\sum_{s<t,\ \sigma(s)>\sigma(t)}\langle\alpha_{i_s},\alpha_{i_t}\rangle},$$
where $\sigma$ runs over the bijections $\{1,\dots,k\}\to\{1,\dots,k\}$ with $j_{\sigma(t)}=i_t$ for all $t$ and the inner sum is over the pairs $1\le s<t\le k$ with $\sigma(s)>\sigma(t)$. The vanishing statement is the homogeneity (H) of step 1.3, and the formula is proved by induction on $k$: for $k=0$ both sides equal $\varepsilon$ of the argument, giving $1$ on the empty word and $0$ otherwise; for $k\ge1$, step 1.3 and the deletion formula expand $B(F_{i_1}u',v)$ as $\sum_{t:j_t=i_1}q^{-\sum_{s<t}\langle\alpha_{j_s},\alpha_{i_1}\rangle}B(u',v\setminus t)$, and for each $t$ the induction hypothesis and the bijection $\sigma\leftrightarrow(\sigma(1)=t,\ \sigma|_{\{2,\dots,k\}})$ exhibit the terms with $\sigma(1)=t$, the cross-pairs $(1,s)$ with $\sigma(s)<t$ contributing $\prod_{r<t}q^{-\langle\alpha_{j_r},\alpha_{i_1}\rangle}$ because the letters $j_r$ with $r<t$ are exactly the letters $i_s$ with $\sigma(s)<t$. Finally, $\sigma\mapsto\sigma^{-1}$ bijects the matching permutations of $(u,v)$ onto those of $(v,u)$, and inversion pairs correspond with the same two letters in the reversed roles while $\langle\alpha_{i_s},\alpha_{i_t}\rangle=\langle\alpha_{i_t},\alpha_{i_s}\rangle$, so each term matches: $B$ is symmetric on words, hence on $U_q^-$ by bilinearity. [step 1.3, F2, algebra]

2.1 Part (i): one-step separation. Let $x\in U_q^-[-\nu]$ satisfy $e_i'(x)=0$ for all $i$, and let $w=F_{i_1}\cdots F_{i_k}$ be any word of degree $\nu$ (then $k=\operatorname{ht}(\nu)\ge1$). Iterating step 1.3 along the letters of $w$ and using (H) with $B(1,z)=\varepsilon(z)$ gives $B(w,x)=\varepsilon\bigl(e_{i_k}'\cdots e_{i_1}'(x)\bigr)=\varepsilon(0)=0$. Words span the finite-dimensional piece $U_q^-[-\nu]$ [F1], so $B(y,x)=0$ for every $y\in U_q^-[-\nu]$. The restriction of $B$ to $U_q^-[-\nu]$ has zero left kernel by the nondegeneracy of step 1.1, so $x=0$. [step 1.3, F1, algebra]

3.1 Part (ii): iterated separation. Let $0\ne x\in U_q^-[-\nu]$. By the nondegeneracy of step 1.1 there is $y$ with $B(y,x)\ne0$; decomposing $y$ into graded components and using the homogeneity of $B$, some word $w$ of degree $\nu$ satisfies $B(w,x)\ne0$. Write $w=F_{i_1}\cdots F_{i_k}$; iterating step 1.3 as in step 2.1 gives $B(w,x)=\varepsilon\bigl(e_{i_k}'\cdots e_{i_1}'(x)\bigr)$, hence $e_{i_k}'\cdots e_{i_1}'(x)\ne0$, and $\nu=\alpha_{i_1}+\cdots+\alpha_{i_k}$ with the multiset unique by [F1]. This is the displayed claim with the sequence $i_1,\dots,i_k$, the first applied derivation $e_{i_1}'$ being the rightmost factor; and if a vector were killed by every composite $e_{i_1}'\cdots e_{i_k}'$ over all such sequences, then applying this to a single reversed order would force $B(w,x)=0$ for every word $w$ and hence $x=0$ by nondegeneracy, so the common kernel is zero. This proves (ii). [step 1.3, step 2.1, F1, algebra]

4.1 The $e_i''$ version. Let $0\ne x\in U_q^-[-\nu]$. By [F3], $e_i''=\psi e_i'\psi$, $\psi$ is an involutive algebra automorphism of $U_q^-$ preserving the grading, and $\psi(x)\ne0$. Apply step 3.1 to $\psi(x)$: there is a sequence $i_1,\dots,i_k$ with $\nu=\alpha_{i_1}+\cdots+\alpha_{i_k}$ and $e_{i_k}'\cdots e_{i_1}'(\psi(x))\ne0$. Since $\psi(e_i'(y))=e_i''(\psi(y))$ for all $i,y$ and $\psi^2=\mathrm{id}$, induction on the number of factors gives $\psi\bigl(e_{i_k}'\cdots e_{i_1}'(\psi(x))\bigr)=e_{i_k}''\cdots e_{i_1}''(x)$, which is therefore nonzero because $\psi$ is injective; so (ii) holds with $e_i''$ in place of $e_i'$. The same computation with step 2.1 proves the one-step statement for $e_i''$. No canonical basis, integral form, freeness or character statement is used: the argument is the full field-level separation claim on the actual Serre quotient. [step 2.1, step 3.1, F3, algebra] ∎
