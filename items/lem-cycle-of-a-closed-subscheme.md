---
id: lem-cycle-of-a-closed-subscheme
kind: lemma
title: "Cycles of coherent sheaves and of closed subschemes, with flat pullback"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-axiom-of-choice
  - cor-length-is-additive-in-short-exact-sequences
  - def-algebraic-cycle-and-cycle-group
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-composition-series-and-length-of-a-module
  - def-flat-morphism-schemes
  - thm-flat-going-down
  - thm-affine-domain-dimension-transcendence-degree
  - cor-transcendence-degree-tower-additivity
  - def-generic-point-irreducible-closed-subset
  - def-irreducible-component-scheme
  - def-local-ring
  - def-sheaf-total-quotient-rings
  - lem-sheaf-supported-on-a-closed-subset-is-a-pushforward
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.9-42.10 and 42.14"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42: cycle of a closed subscheme (42.9), cycle of a coherent sheaf (42.10), flat pullback (42.14)"
    - title: "The Stacks Project, Intersection Theory, Sections 43.2-43.7"
      url: "https://stacks.math.columbia.edu/download/intersection.pdf"
      locator: "Chapter 43, Sections 43.3-43.4: cycle of a closed subscheme and of a coherent sheaf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the going-down
prime-lifting supplier used in flat pullback. Let $X$ be a scheme locally of finite type over a field; use finite cycles if $X$
is of finite type, and locally finite cycles otherwise. For each integer $d$, a
coherent sheaf $\mathcal F$ whose support has dimension at most $d$ has the
$d$-cycle
$$[\mathcal F]_d=\sum_{\dim V=d}\ell_{\mathcal O_{X,\eta_V}}(\mathcal F_{\eta_V})[V],$$
where $V$ runs over the integral closed subschemes and $\eta_V$ is their generic
point. The sum is locally finite, and finite for finite type $X$; its terms are
precisely the dimension-$d$ components of the support. In any short exact
sequence of coherent sheaves all supported in dimension at most $d$, these
$d$-cycles are additive. No additivity is claimed for the sum of cycles in all
dimensions when the supports change.

For a closed subscheme $Y$, define its fundamental cycle $[Y]$ by summing the
generic lengths at every irreducible component of $Y$. If $Y$ is pure
dimensional of dimension $d$, $[Y]=[\mathcal O_Y]_d$. For reduced $Y$ every
component coefficient is one.

For $X'$ locally of finite type over the same field and flat
$f:X'\to X$ with every nonempty fibre pure of dimension $r$, $[f^{-1}Y]_{d+r}=f^*[Y]_d$
when $Y$ is pure of dimension $d$. If $Y$ is pure of dimension $d$ and the
local equation of an effective Cartier divisor $D$ of $X$ is a nonzerodivisor on
$\mathcal O_Y$, then $D|_Y$ is an effective Cartier divisor and its cycle is the
fundamental $(d-1)$-cycle of $Y\cap D$. The nonzerodivisor condition cannot be
replaced by $Y\not\subset D$: it must exclude every associated point of $Y$,
including embedded ones.

## Facts & Assumptions

**Given:** the Axiom of Choice; a scheme $X$ locally of finite type over a field; a coherent $\mathcal O_X$-module $\mathcal F$ with support of dimension at most $d$; a closed subscheme $Y\subseteq X$; a scheme $X'$ locally of finite type over the same field and a flat morphism $f:X'\to X$ with every nonempty fibre pure of dimension $r$; an effective Cartier divisor $D\subseteq X$.

[L1] Cycles are formal $\mathbb Z$-linear combinations of integral closed subschemes, with finite support in the finite type case and locally finite support in general ([[def-algebraic-cycle-and-cycle-group]], [[def-generic-point-irreducible-closed-subset]]).

[L2] On a locally Noetherian scheme, coherence is a local condition of finite presentation; the support of a coherent sheaf is closed, and the local ring of a reduced scheme at the generic point of an irreducible component is a field, its function field ([[def-coherent-module-scheme]], [[def-local-ring]], [[def-sheaf-total-quotient-rings]], [[def-irreducible-component-scheme]]).

[L3] A nonzero finitely generated module over a field has a composition series, hence finite length, and length is additive in short exact sequences ([[def-composition-series-and-length-of-a-module]], [[cor-length-is-additive-in-short-exact-sequences]]).

[L4] A sheaf whose stalks vanish off a closed subset is the pushforward of its restriction to that subset ([[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]]). For a coherent module at a generic support point, finite length is established directly by the annihilator filtration in step 1.1, using the composition-series definition ([[def-composition-series-and-length-of-a-module]]).

[L5] An effective Cartier divisor on a locally Noetherian scheme is locally defined by a nonzerodivisor, and its restriction to a closed subscheme on which the local equation remains a nonzerodivisor is again an effective Cartier divisor ([[def-closed-immersion-schemes]], [[def-local-ring]]). Flatness means flatness of the stalk maps ([[def-flat-morphism-schemes]]); pure dimension $r$ of the nonempty fibres is a separate hypothesis. Components of a flat preimage dominate components of its base by going down; the dimension formula then gives the shift by $r$ ([[thm-flat-going-down]], [[thm-affine-domain-dimension-transcendence-degree]], [[cor-transcendence-degree-tower-additivity]]).

## Proof

**Proof technique:** direct; compute each coefficient after localizing at the generic points of the relevant components.

1.1 Finiteness of the coefficient sum. Let $V$ be a $d$-dimensional integral closed subscheme of $X$ whose generic point lies in the support of $\mathcal F$. Put $R=\mathcal O_{X,\eta_V}$ and $M=\mathcal F_{\eta_V}$. The dimension bound makes $V$ a component of the support whenever $M\ne0$: a strictly larger integral subvariety has strictly larger dimension on a finite type affine neighbourhood. Thus $M$ is finitely generated and its support in $\operatorname{Spec}R$ is only the maximal ideal $\mathfrak m$. Consequently $\sqrt{\operatorname{Ann}_R(M)}=\mathfrak m$. Choose finite generators of $\mathfrak m$; a power of each lies in the annihilator, so a sufficiently large power $\mathfrak m^N$ annihilates $M$. The finite filtration $M\supseteq\mathfrak mM\supseteq\cdots\supseteq\mathfrak m^NM=0$ has finite-dimensional residue-field quotients. Refining their finite vector-space filtrations proves finite length over $R$, without asserting that $R$ itself is a field. Hence every coefficient $\ell_{\mathcal O_{X,\eta_V}}(\mathcal F_{\eta_V})$ in the displayed sum is a well-defined nonnegative integer, and only the $d$-dimensional components of $\operatorname{Supp}\mathcal F$ carry nonzero coefficients, by [L4]. The family of $d$-dimensional components of a closed subset of a locally Noetherian scheme is locally finite, and finite when $X$ is quasi-compact, so the sum is locally finite in general and finite for finite type $X$; this defines $[\mathcal F]_d$ in the sense of [L1]. [L1, L2, L3, L4, given]

2.1 Additivity. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence of coherent sheaves, all supported in dimension at most $d$. For every $d$-dimensional integral closed subscheme $V$ with generic point $\eta_V$, localization at $\eta_V$ is exact, giving $0\to\mathcal F'_{\eta_V}\to\mathcal F_{\eta_V}\to\mathcal F''_{\eta_V}\to0$; by [L3] the lengths add. Taking coefficients, $[\mathcal F]_d=[\mathcal F']_d+[\mathcal F'']_d$. The common dimension bound is used here and cannot be dropped: on a smooth integral curve $C$ with a closed point $p$ the sequence $0\to\mathcal O_C(-p)\to\mathcal O_C\to\mathcal O_p\to0$ has full-support cycles $[C],[C],[p]$, and $[C]\ne[C]+[p]$ in $Z_*(C)$. [L3, step 1.1, given]

2.2 Fundamental cycles. For a closed subscheme $Y\subseteq X$, the stalk of $\mathcal O_Y$ at the generic point $\eta_Z$ of an irreducible component $Z$ of $Y$ is a $0$-dimensional Noetherian local ring, the local ring of $Y$ at its generic point, and its length is finite; setting the coefficient of $Z$ in $[Y]$ to that length makes $[Y]$ well defined by [L1]. If $Y$ is pure of dimension $d$, its components of dimension at most $d$ are exactly its irreducible components, so $[Y]=[\mathcal O_Y]_d$ by the definition of the latter and [L2]. If $Y$ is reduced, the local ring at the generic point of each component is a field, of length $1$, so every coefficient of $[Y]$ is one. [L1, L2, step 1.1, given]

3.1 Flat pullback. Let $Y$ be pure of dimension $d$, and let $W$ be a component of $f^{-1}Y$ of dimension $d+r$ with generic point $\eta_W$; write $\zeta=f(\eta_W)$. Because all fibres of $f$ have pure dimension $r$ by [L5], $\zeta$ is a generic point $\eta_Z$ of a component $Z$ of $Y$, the fibre of $f$ over $\zeta$ has pure dimension $r$, and $\eta_W$ is a generic point of that fibre. The local ring of the scheme-theoretic preimage at $\eta_W$ is $\mathcal O_{f^{-1}Y,\eta_W}\cong\mathcal O_{Y,\eta_Z}\otimes_{\mathcal O_{X,\eta_Z}}\mathcal O_{X',\eta_W}$: the preimage is $Y\times_XX'$ and since $Y\hookrightarrow X$ is closed, both sides are the quotient of $\mathcal O_{X',\eta_W}$ by the extended ideal of $Y$. Put $R=\mathcal O_{X,\eta_Z}$ and $M=\mathcal O_{Y,\eta_Z}$. The module $M$ has finite length by step 2.2 and therefore has a composition series whose factors are copies of $\kappa(\eta_Z)$, with length $m_Z=\ell_R(M)$. Tensoring this series with the flat $R$-algebra $S=\mathcal O_{X',\eta_W}$ preserves exactness, and each factor contributes $S/\mathfrak m_ZS$, which is the zero-dimensional Noetherian local ring of the fibre at its generic point. Its finite length $e_W=\ell_S(S/\mathfrak m_ZS)$ is the generic multiplicity of $W$ in $[f^{-1}Z]_{d+r}$, and need not be one. By additivity of length, $\ell_S(\mathcal O_{f^{-1}Y,\eta_W})=m_Ze_W$. Thus this coefficient equals the coefficient of $W$ in $f^*[Y]_d=\sum_Zm_Z[f^{-1}Z]_{d+r}$, where the sum is the linear extension of the assignment $[Z]\mapsto[f^{-1}Z]_{d+r}$ on integral cycles. Therefore $[f^{-1}Y]_{d+r}=f^*[Y]_d$. [L3, L5, step 2.2, algebra]

4.1 Divisors. Let $Y$ be pure of dimension $d$ and let $D$ be an effective Cartier divisor whose local equation $t$ at each point of $Y$ is a nonzerodivisor on $\mathcal O_Y$. Then $D|_Y$ is an effective Cartier divisor with local equation $t$, by [L5]. No irreducible component $Z$ of $Y$ is contained in $D$: otherwise $t$ would lie in the maximal ideal of $\mathcal O_{Y,\eta_Z}$ and be nilpotent there, hence a zerodivisor, contrary to the hypothesis. Consequently $Y\cap D=V(t)$ is pure of dimension $d-1$, and at the generic point $\eta$ of each of its components one has $\mathcal O_{Y\cap D,\eta}=\mathcal O_{Y,\eta}/t\mathcal O_{Y,\eta}$ with $t$ a nonzerodivisor, so this local ring has finite length and its length $\ell(\mathcal O_{Y,\eta}/t\mathcal O_{Y,\eta})$ is the generic coefficient of the effective Cartier divisor $D|_Y$. This uses the quotient length, without applying the domain order function to a possibly nonreduced local ring. Hence the cycle of $D|_Y$ is the fundamental $(d-1)$-cycle of $Y\cap D$ as defined in step 2.2. The hypothesis cannot be weakened to $Y\not\subseteq D$: for $X=\mathbb A^2$, $Y=\operatorname{Spec}k[x,y]/(y^2,xy)$, the $x$-axis with an embedded point at the origin, and $D=V(x)$, one has $Y\not\subseteq D$ but $xy=0$ with $y\ne0$ in $\mathcal O_Y$ shows that $x$ is a zerodivisor, so $D|_Y$ is not an effective Cartier divisor at the embedded point. [L1, L5, step 2.2, given] ∎ 