---
id: lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons
kind: lemma
title: "The Lefschetz operator factors through deleted Bott-Samelson subwords, with positive rescalings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-bott-samelson-bimodule-of-a-word, def-type-a-soergel-bimodule-for-a-simple-reflection, def-positive-and-negative-rouquier-generator-complexes, def-rouquier-complex-of-a-braid-word]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Lemma 3.4, Lemma 6.14, Lemma 6.15 and Section 6.7 with display (6.7) and its discussion (positivity of the scaling factors, Remark 6.17)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 (the factorization B_y -> D(1) -> B_y(2) of the Lefschetz operator by the Rouquier differential)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Section 4 and Lemma 4.5 for the rank-one splitting entering the factorizations"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** An expression $\underline x=s_1\cdots s_m$ in simple reflections, the Bott-Samelson bimodule $\mathrm{BS}(\underline x)$ with its subexpression right basis $\{c_\varepsilon\}$, top element $c_{\mathrm{top}}$, trace $\operatorname{Tr}$ and intersection form $\langle-,-\rangle$ of [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], a strictly dominant $\rho$ with associated operator $L_0=\rho\cdot(-)$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]]), and the auxiliary maps $\mathrm{Br}_i(b_1\cdots b_m):=b_1\cdots (b_ic_{s_i})\cdots b_m$, $\varphi_i(b_1\cdots b_m):=b_1\cdots \mu(b_i)\cdots b_m$ and $\chi_i(b_1\cdots \widehat{b_i}\cdots b_m):=b_1\cdots c_{s_i}\cdots b_m$, where $\mu:B_{s_i}\to S(1)$ is the multiplication map $f\otimes g\mapsto fg$ and $\widehat{\underline x}_i$ is the word with letter $s_i$ deleted. These are degree-zero bimodule maps $\mathrm{Br}_i:\mathrm{BS}(\underline x)\to\mathrm{BS}(\underline x)$ and $\varphi_i:\mathrm{BS}(\underline x)\to\mathrm{BS}(\widehat{\underline x}_i)(1)$, $\chi_i:\mathrm{BS}(\widehat{\underline x}_i)\to\mathrm{BS}(\underline x)(1)$ with $\mathrm{Br}_i=\chi_i\circ\varphi_i$, and $\operatorname{Tr}(\chi_i(\gamma))=\operatorname{Tr}_i(\gamma)$ for all $\gamma\in\mathrm{BS}(\widehat{\underline x}_i)$, where $\operatorname{Tr}_i$ is the trace of $\mathrm{BS}(\widehat{\underline x}_i)$.

[F1] In each rank-one factor the elements $c_{\mathrm{id}},c_{s}$ form a right $S$-basis with $c_{\mathrm{id}}c_{\mathrm{id}}=c_{\mathrm{id}}$, $c_{\mathrm{id}}c_s=c_s$, $c_sc_s=c_s\alpha_s$ and the left-action rule $r\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot sr+\partial_s(r)c_s$, $r\cdot c_s=c_s\cdot r$, for $r\in S$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-type-a-soergel-bimodule-for-a-simple-reflection]]).

[F2] The trace is right $S$-linear, the intersection form is symmetric and invariant, and on a reduced word the bottom Lefschetz value is positive: for $x$ reduced, $\langle\rho^{\ell(x)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle>0$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]).

[F3] **Descent detection.** For every $w$ and simple $s$, $(w\rho)(\alpha_s^\vee)>0$ if and only if $sw>w$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F4] The positive Rouquier generator complex is $F_i=[B_{s_i}\xrightarrow{\ \ }S(1)]$ with $B_{s_i}$ in cohomological degree $0$; the Rouquier complex of a word is the iterated signed tensor totalization of the $F_i$ ([[def-positive-and-negative-rouquier-generator-complexes]], [[def-rouquier-complex-of-a-braid-word]]).

## Statement

Let $\underline x=s_1\cdots s_m$ be an expression, $\mathrm{BS}(\underline x)$ its real Bott-Samelson bimodule, $\mathrm{Br}_i=\chi_i\circ\varphi_i$ the Demazure operation at the $i$-th letter, and $\operatorname{Tr},\langle-,-\rangle$ the trace and intersection form of [[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]. Then:

(a) as endomorphisms of $\mathrm{BS}(\underline x)$ one has $\rho\cdot(-)=\sum_{i=1}^m(s_{i-1}\cdots s_1\rho)(\alpha_{s_i}^\vee)\,\chi_i\circ\varphi_i+(-)\cdot x^{-1}\rho$ (EW Lemma 3.4), where $(-)\cdot x^{-1}\rho$ denotes right multiplication by the polynomial $x^{-1}\rho$;

(b) with the rescaled forms $\langle-,-\rangle_i':=(s_{i-1}\cdots s_1\rho)(\alpha_{s_i}^\vee)\langle-,-\rangle_i$ on $\mathrm{BS}(\widehat{\underline x}_i)$ and $\langle-,-\rangle'$ their direct sum, one has $\langle b,\rho b'\rangle_{\overline{\mathrm{BS}(\underline x)}}=\langle\varphi(b),\varphi(b')\rangle'$ for all $b,b'$ in the reduced module, where $\varphi=\sum_i\varphi_i:\mathrm{BS}(\underline x)\to\bigoplus_i\mathrm{BS}(\widehat{\underline x}_i)(1)$ (EW Lemmas 6.14 and 6.15);

(c) if $\underline x$ is reduced then every scaling factor $\gamma_i:=(s_{i-1}\cdots s_1\rho)(\alpha_{s_i}^\vee)$ is strictly positive, so the rescalings change no signs in the HR statements, and the unscattered term $(-)\cdot x^{-1}\rho$ vanishes after reduction to the Soergel module;

(d) consequently left multiplication by $\rho$ on $\overline{\mathrm{BS}(\underline x)}$ factors, up to positive rescalings, as the composite $\mathrm{BS}(\underline x)\to\bigoplus_i\mathrm{BS}(\widehat{\underline x}_i)(1)\to\mathrm{BS}(\underline x)(2)$, and this composite is the first differential of the Rouquier complex $F_{s_1}\cdots F_{s_m}$ followed by its dual map, up to the same positive rescalings.

## Proof

**Proof technique:** direct; a rank-one computation followed by iteration over the letters.

1.1 **The single-factor identity.** Let $s$ be a simple reflection with root $\alpha=\alpha_s$, let $\mathrm{Br}(b):=bc_s$ on $B_s$, and let $\sigma\in S$. For every $b\in B_s$ one has $\sigma\cdot b=b\cdot(s\sigma)+\partial_s(\sigma)\,\mathrm{Br}(b)$. Indeed both sides are right $S$-linear in $b$, so it suffices to check the two basis elements: for $b=c_{\mathrm{id}}$ the identity is the rule $r\cdot c_{\mathrm{id}}=c_{\mathrm{id}}\cdot sr+\partial_s(r)c_s$ of [F1] with $r=\sigma$, and for $b=c_s$ it reads $\sigma\cdot c_s=c_s\cdot s\sigma+\partial_s(\sigma)c_s\alpha_s$, which is $c_s\sigma=c_s(s\sigma+\alpha_s\partial_s(\sigma))$ and holds because $\sigma-s\sigma=\alpha_s\partial_s(\sigma)$ and $c_s$ commutes with $S$. [given, F1]

2.1 **Iteration over the letters proves (1).** For the empty expression $m=0$ the bimodule is $\mathrm{BS}(\varnothing)=S$, the sum over the letters is empty, and left multiplication by $\rho$ equals right multiplication by $x^{-1}\rho=\rho$ because $S$ is commutative, so (a) holds; assume therefore $m\ge1$. Let $b=b_1\cdots b_m$ be a tensor monomial with $b_i\in B_{s_i}$, and apply step 1.1 at the first factor with $\sigma=\rho$: since left multiplication by $\rho$ of the tensor acts on the first factor, $\rho\cdot b=\bigl(\rho\cdot b_1\bigr)b_2\cdots b_m=b_1\cdots b_m\cdot(s_1\rho)+\partial_{s_1}(\rho)\,\mathrm{Br}_1(b)$, where the first summand is the tensor with the element $b_1\cdot(s_1\rho)\in B_{s_1}$ in the first slot; applying step 1.1 to $b_1\cdot(s_1\rho)$ with $\sigma=s_1\rho$ would return the same expression, while reading the first summand as an element of the tensor product carrying the leftover $\sigma_1:=s_1\rho$ allows the same expansion at the second factor, producing the coefficient $(s_1\rho)(\alpha_{s_2}^\vee)$ and the leftover $\sigma_2:=s_2s_1\rho$. Iterating $m$ times produces exactly the sum $\sum_{i=1}^m(s_{i-1}\cdots s_1\rho)(\alpha_{s_i}^\vee)\,\mathrm{Br}_i(b)$ together with the final leftover $s_m\cdots s_1\rho=x^{-1}\rho$ acting by right multiplication on the last slot; using $\mathrm{Br}_i=\chi_i\circ\varphi_i$ this is the displayed identity. Since both sides are degree-zero endomorphisms and the tensor monomials span $\mathrm{BS}(\underline x)$, the identity holds on all of $\mathrm{BS}(\underline x)$. [step 1.1, F1]

2.2 **The covariance identity.** For all $b,b'\in\mathrm{BS}(\underline x)$ and all $i$ one has $\langle b,\mathrm{Br}_i b'\rangle=\langle\varphi_ib,\varphi_ib'\rangle_i$. It suffices to check on tensor monomials $b=b_1\cdots b_m$, $b'=b'_1\cdots b'_m$: the left side is $\operatorname{Tr}\bigl((b_1b'_1)\cdots(b_ib'_ic_{s_i})\cdots(b_mb'_m)\bigr)=\operatorname{Tr}\bigl((b_1b'_1)\cdots\mu(b_i)\mu(b'_i)c_{s_i}\cdots(b_mb'_m)\bigr)$, and since the $c$-basis is multiplicative, $\mu(b_i)c_{s_i}=\mu(b_i)\mu(c_{s_i})$, so this equals $\operatorname{Tr}\bigl(\chi_i((b_1b'_1)\cdots\mu(b_i)\mu(b'_i)\cdots(b_mb'_m))\bigr)=\operatorname{Tr}_i((b_1b'_1)\cdots\mu(b_i)\mu(b'_i)\cdots(b_mb'_m))=\langle\varphi_ib,\varphi_ib'\rangle_i$, using $\operatorname{Tr}\circ\chi_i=\operatorname{Tr}_i$ and the multiplicativity of the ring structure. [step 1.1, given, F1]

3.1 **The rescaled form identity (b).** With $\varphi=\sum_i\varphi_i$ and $\langle-,-\rangle'=\bigoplus_i\langle-,-\rangle_i'$, the direct sum decomposition is orthogonal, so for all $b,b'$ one has $\langle\varphi(b),\varphi(b')\rangle'=\sum_i\gamma_i\langle b,\mathrm{Br}_ib'\rangle$; substituting step 2.2 gives $\sum_i\gamma_i\langle b,\mathrm{Br}_ib'\rangle=\langle b,\sum_i\gamma_i\mathrm{Br}_ib'\rangle$, and substituting the factorization of step 2.1 gives $\langle b,\rho b'\rangle-\langle b,b'\cdot x^{-1}\rho\rangle$. The second summand is $-\langle b,b'\rangle\,x^{-1}\rho$ by right $S$-linearity of the form, and it vanishes after reduction because $x^{-1}\rho$ has positive degree; hence $\langle b,\rho b'\rangle_{\overline{\mathrm{BS}(\underline x)}}=\langle\varphi(b),\varphi(b')\rangle'$ for $b,b'$ in the reduced module, as claimed in (b). [step 2.1, step 2.2, F1, algebra]

4.1 **Positivity for reduced words and the vanished remainder (c).** Let $\underline x$ be reduced. For each $i$, the prefix $w_i:=s_{i-1}\cdots s_1$ has length $i-1$ and $s_iw_i$ has length $i$; the descent criterion [F3] therefore gives $\gamma_i=(w_i\rho)(\alpha_{s_i}^\vee)>0$. All rescalings are by strictly positive real numbers, so no sign in a definite form changes; and $x^{-1}\rho$ is a nonzero polynomial of degree $2$ whose right multiplication lands in $\mathrm{BS}(\underline x)S_+$, which becomes zero after reduction, so the remainder vanishes on the reduced module. This proves (c). [step 3.1, F1, F2, F3]

5.1 **Identification with the Rouquier differential (d).** By [F4] the first differential of the Rouquier complex is the signed sum, over the letters, of the maps $\varphi_i$ from the cohomological degree $0$ term $\mathrm{BS}(\underline x)$ to the degree $1$ term $\bigoplus_i\mathrm{BS}(\widehat{\underline x}_i)(1)$, and its dual maps decompose the generator $c_{s_i}$ back, i.e. are the maps $\chi_i$ up to the fixed shift and Koszul signs. Composing the differential with the rescaled dual maps $\gamma_i\chi_i$ and summing over $i$ gives $\sum_i\gamma_i\mathrm{Br}_i$, which by step 2.1 equals left multiplication by $\rho$ modulo the right-multiplication remainder that vanishes on the reduced module by step 4.1. Hence left multiplication by $\rho$ on the reduced Bott-Samelson module factors, up to the positive rescalings $\gamma_i$, as the composite $\mathrm{BS}(\underline x)\xrightarrow{\varphi}\bigoplus_i\mathrm{BS}(\widehat{\underline x}_i)(1)\xrightarrow{\ \gamma\chi\ }\mathrm{BS}(\underline x)(2)$ built from the first Rouquier differential and its dual; the sign conventions of [F4] fix the composite to be exactly $\rho\cdot(-)$ up to the fixed Koszul signs of the two-term totalization in this normalization and the positive rescalings $\gamma_i$ of step 4.1. This proves (d) and completes the lemma; no positivity of characters and no character conjecture is used. [step 2.1, step 3.1, step 4.1, F2, F4] ∎

## Remarks

- The remainder term is genuinely present before reduction: right multiplication by $x^{-1}\rho$ does not vanish on the raw Bott-Samelson bimodule, and the formula (2) is stated on the reduced module, where it does.
- The rescalings $\gamma_i$ are positive precisely for reduced $\underline x$; for nonreduced words the factorization (1) still holds as an identity of endomorphisms, but no positivity claim about the scalings is made.
