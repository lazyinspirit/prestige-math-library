---
id: lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis
kind: lemma
title: "The Hecke trace form, its values on the Kazhdan-Lusztig basis, and the standard pairing"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-reversal-anti-involution-commutes-with-hecke-bar, lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties, thm-r-polynomial-recursion-and-degree-bounds, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 3.2, the definition of eps and of (-,-) after Remark 3.2, and the paragraph 'A straightforward induction shows ...'"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Notation 1.4 and Definition 1.12 (standard basis, bar involution and the Kazhdan-Lusztig basis)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 1.1 (algebres de Hecke) and Section 1.4, Proposition 1.9"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The normalized type-A Hecke algebra $H=H_v(n)$ over $A=\mathbb Z[v^{\pm1}]$ with its standard basis $H_w$, the reversal anti-involution $a$ with $a(v)=v$ and $a(H_w)=H_{w^{-1}}$, the linear functional $\varepsilon$ with $\varepsilon(H_w)=\delta_{e,w}$, and the bilinear form $(h,h'):=\varepsilon(a(h)h')$.

[F1] $H$ is presented by generators $H_{s_1},\ldots,H_{s_{n-1}}$ with the quadratic relations $H_{s_i}^2=1+(v^{-1}-v)H_{s_i}$, the adjacent braid relations and the distant commutations; the elements $H_w$ indexed by reduced expressions form an $A$-basis, and right multiplication by a generator satisfies $H_wH_s=H_{ws}$ if $\ell(ws)=\ell(w)+1$, while $H_wH_s=H_{ws}+(v^{-1}-v)H_w$ if $\ell(ws)=\ell(w)-1$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] There is an $A$-linear involutive anti-automorphism $a$ with $a(H_{s_i})=H_{s_i}$ and $a(H_w)=H_{w^{-1}}$ for all $w$; in particular $a(H_s)=H_s$ for every simple reflection $s$ ([[lem-reversal-anti-involution-commutes-with-hecke-bar]]).

[F3] The Kazhdan-Lusztig elements $\underline H_w$ exist and are characterized by bar-invariance and $\underline H_w\in H_w+\sum_{y<w}v\mathbb Z[v]H_y$; they form an $A$-basis, and writing $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ one has $p_{w,w}=1$, $p_{y,w}=0$ unless $y\le w$, $p_{y,w}\in v\mathbb Z[v]$ for $y<w$, and $p_{y,w}\in v^{\ell(w)-\ell(y)}\mathbb Z[v^{-2}]$ ([[lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties]], [[thm-r-polynomial-recursion-and-degree-bounds]]).

[F4] The classical normalization is $P_{y,w}(v^{-2})=v^{-(\ell(w)-\ell(y))}p_{y,w}$ and $\mu(y,w)=[v]p_{y,w}$, and the standard basis is the normalized basis $H_x=v^{\ell(x)}T_x$ of the Hecke page ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

## Statement

Let $H=H_v(n)$ be the normalized type-A Hecke algebra over $A=\mathbb Z[v^{\pm1}]$ and let $a$ be the $A$-linear anti-involution with $a(v)=v$, $a(H_x)=H_{x^{-1}}$ (the reversal anti-involution of the Hecke page). Define the trace $\varepsilon:H\to A$ by $\varepsilon(H_w)=\delta_{e,w}$ on the standard basis, and the bilinear form $(-,-):H\times H\to A$ by $(h,h'):=\varepsilon(a(h)h')$. Then:

1. $\varepsilon$ and $(-,-)$ are well defined (the $H_w$ are an $A$-basis);
2. $(ph,qh')=pq\,(h,h')$ for all $p,q\in A$ and all $h,h'$;
3. $(hH_s,h')=(h,h'H_s)$ and $(H_sh,h')=(h,H_sh')$ for all $h,h'$ and every simple reflection $s$;
4. the standard basis is orthonormal, $(H_x,H_y)=\delta_{xy}$;
5. on the Kazhdan-Lusztig basis, $(\underline H_x,\underline H_y)\in v\mathbb Z[v]$ for $x\ne y$ and $(\underline H_x,\underline H_x)\in 1+v\mathbb Z[v]$;
6. the form of (4) is the standard pairing $\langle H_x,H_y\rangle=\delta_{xy}$ used in the type-A Soergel Hom formula, transported through the identification of the normalized standard bases.

All statements are integral and use no choice.

## Proof

**Proof technique:** induction on the length in the standard basis; the ambient algebra is finite free over $A$.

1.1 **Well-definedness and bilinearity (1), (2).** Since $\{H_w\}$ is an $A$-basis by [F1], prescribing $\varepsilon(H_w)=\delta_{e,w}$ and extending $A$-linearly is well defined and unique; the reversal map $a$ is a well-defined $A$-linear anti-automorphism by [F2], and multiplication is $A$-bilinear, so $(h,h')=\varepsilon(a(h)h')$ is a well-defined $A$-bilinear form, for $(ph,qh')=\varepsilon(p\,a(h)\,q\,h')=pq\,\varepsilon(a(h)h')$ with $p,q\in A$. This proves (1) and (2). [given, F1, F2]

2.1 **The key identity: base case and recursion.** We prove by induction on $\ell(u)$ that $\varepsilon(H_uH_y)=\delta_{u,y^{-1}}$ for all $u,y\in S_n$; for $u=e$ this reads $H_eH_y=H_y$ and $\varepsilon(H_y)=\delta_{e,y}=\delta_{u,y^{-1}}$, and for $u\ne e$ we choose a simple reflection $s$ with $\ell(us)=\ell(u)-1$ and note that [F1] applied to $w=us$ gives $H_{us}H_s=H_u$, since $(us)s=u$ has length $\ell(u)=\ell(us)+1$. [base, step 1.1, F1, F2]

3.1 **The left multiplication rule.** Applying the anti-automorphism $a$ of [F2] to the two cases of [F1] and using $a(H_wH_s)=a(H_s)a(H_w)=H_sH_{w^{-1}}$ and $(ws)^{-1}=sw^{-1}$ gives $H_sH_w=H_{sw}$ if $\ell(sw)=\ell(w)+1$, and $H_sH_w=H_{sw}+(v^{-1}-v)H_w$ if $\ell(sw)<\ell(w)$; this is the rule used in the two cases below. [step 2.1, F1, F2]

4.1 **The ascent case.** Keep $u\ne e$ and its right descent $s$ from step 2.1, and let $y\in S_n$ satisfy $\ell(sy)>\ell(y)$. Then $H_sH_y=H_{sy}$ by step 3.1, so $\varepsilon(H_uH_y)=\varepsilon(H_{us}H_sH_y)=\varepsilon(H_{us}H_{sy})$; the induction hypothesis applies to the pair $(us,sy)$, whose first length is $\ell(u)-1$, giving $\varepsilon(H_{us}H_{sy})=\delta_{us,(sy)^{-1}}=\delta_{us,y^{-1}s}$, and $us=y^{-1}s$ holds if and only if $u=y^{-1}$ (multiply on the right by $s$ and use $s^2=e$), so $\varepsilon(H_uH_y)=\delta_{u,y^{-1}}$. [step 3.1, ih]

5.1 **The descent case.** Keep $u,s$ as above and let $\ell(sy)<\ell(y)$. Then $H_sH_y=H_{sy}+(v^{-1}-v)H_y$ by step 3.1, so $\varepsilon(H_uH_y)=\varepsilon(H_{us}H_{sy})+(v^{-1}-v)\varepsilon(H_{us}H_y)$; the induction hypothesis gives $\varepsilon(H_{us}H_{sy})=\delta_{us,y^{-1}s}$ and $\varepsilon(H_{us}H_y)=\delta_{us,y^{-1}}$. If $us=y^{-1}$, then $y=(us)^{-1}=su^{-1}$ and, since $us$ is a right descent of $u$, taking inverses gives $\ell(y)=\ell(su^{-1})=\ell(us)=\ell(u)-1$, while $\ell(sy)=\ell(u^{-1})=\ell(u)>\ell(y)$, contradicting $\ell(sy)<\ell(y)$; hence $\delta_{us,y^{-1}}=0$ and $\varepsilon(H_uH_y)=\delta_{us,y^{-1}s}=\delta_{u,y^{-1}}$. [step 4.1, ih]

6.1 **The induction concludes.** For every $u\ne e$ the cases $\ell(sy)>\ell(y)$ and $\ell(sy)<\ell(y)$ exhaust all $y$ for the chosen right descent $s$, and each case reduced the first argument's length; with the base case this proves $\varepsilon(H_uH_y)=\delta_{u,y^{-1}}$ for all $u,y\in S_n$. [step 2.1, step 4.1, step 5.1]

7.1 **Standard orthonormality (4).** For all $x,y$, using $a(H_x)=H_{x^{-1}}$ from [F2] and step 6.1 with $u=x^{-1}$, we get $(H_x,H_y)=\varepsilon(a(H_x)H_y)=\varepsilon(H_{x^{-1}}H_y)=\delta_{x^{-1},y^{-1}}=\delta_{x,y}$, the last equality being injectivity of $w\mapsto w^{-1}$; this proves (4). [step 6.1, F2]

7.2 **The generator trace identity.** By step 6.1, for every $w$ and simple reflection $s$ one has $\varepsilon(H_wH_s)=\delta_{w,s^{-1}}=\delta_{w,s}$ and $\varepsilon(H_sH_w)=\delta_{s,w^{-1}}=\delta_{w,s}$. Extending over the standard basis gives $\varepsilon(zH_s)=\varepsilon(H_sz)$ for every $z\in H$. In particular the common value for $w=s$ is $1$. [step 6.1, F1, algebra]

8.1 **$\varepsilon$ is a trace and yields the adjunctions (3).** Every element of $H$ is a finite $A$-linear combination of words in the generators, and moving each letter of a word for the second factor to the front one at a time with step 7.2 and bilinearity shows $\varepsilon(xy)=\varepsilon(yx)$ for all $x,y\in H$; consequently, for simple $s$ and $h,h'\in H$, using $a(H_s)=H_s$ from [F2], $(hH_s,h')=\varepsilon(a(hH_s)h')=\varepsilon(H_sa(h)h')=\varepsilon(a(h)h'H_s)=(h,h'H_s)$ and $(H_sh,h')=\varepsilon(a(h)a(H_s)h')=\varepsilon(a(h)H_sh')=(h,H_sh')$, which proves (3) and shows both left and right multiplication by $H_s$ are self-adjoint for $(-,-)$. [step 7.2, F2, algebra]

8.2 **Values on the Kazhdan-Lusztig basis (5).** Write $\underline H_x=\sum_{u\le x}h_{u,x}H_u$ with $h_{u,x}=p_{u,x}\in\mathbb Z[v]$, $h_{x,x}=1$ and $h_{u,x}\in v\mathbb Z[v]$ for $u<x$, all other coefficients zero, as in [F3]; then bilinearity (2) and orthonormality from step 7.1 give $(\underline H_x,\underline H_y)=\sum_uh_{u,x}h_{u,y}$. A nonzero term requires $u\le x$ and $u\le y$; if $x\ne y$, every surviving term has a factor in $v\mathbb Z[v]$, because $u<x$ or $u<y$ is [F3], and $u=x\ne y$ gives $h_{x,y}\in v\mathbb Z[v]$ when $x<y$ and $h_{x,y}=0$ otherwise, symmetrically for $u=y$; hence $(\underline H_x,\underline H_y)\in v\mathbb Z[v]$ for $x\ne y$. For $x=y$ the term $u=x$ contributes $h_{x,x}^2=1$ and every other term has $u<x$ and contributes to $v^2\mathbb Z[v]$, so $(\underline H_x,\underline H_x)\in 1+v\mathbb Z[v]$. [step 7.1, F3, algebra]

9.1 **The standard pairing (6) and conclusion.** By (4) the form $(-,-)$ is the $A$-bilinear form whose matrix in the normalized standard basis $\{H_x\}$ is the identity; the published type-A Soergel Hom formula uses the standard pairing with $\langle H_x,H_y\rangle=\delta_{xy}$ on that normalized basis, and the dictionary of [F4] fixes the normalization $H_x=v^{\ell(x)}T_x$ and the resulting Kazhdan-Lusztig coefficients, so the transported pairing agrees with $(-,-)$ on the basis and hence on $H$ by bilinearity. All six clauses are proved over $A=\mathbb Z[v^{\pm1}]$, using only existence and triangularity of the Kazhdan-Lusztig basis and no positivity and no choice. [step 8.1, step 8.2, F3, F4, discharge-induction: step 5.1] ∎

## Remarks

- The form is $A$-bilinear in both arguments and not sesquilinear: the value $(\underline H_x,\underline H_y)=\sum_u h_{u,x}h_{u,y}$ carries no coefficient conjugation. This is the form used by the type-A Soergel Hom formula.
- Steps 2.1-6.1 are the local rendering of the "straightforward induction" in Elias-Williamson Section 3.2; the multiplication rules of [F1] and [F2] are the only structural inputs, and no positivity of Kazhdan-Lusztig polynomials is assumed or proved here.
