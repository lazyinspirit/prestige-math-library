---
id: ex-cg-quadratic-hecke-normalizations-s-equals-q-t
kind: example
title: "Quadratic Hecke normalizations: S=qT with Q=q^2, the opposite-sign form, and the Soergel-calculus and Kazhdan-Lusztig conversions"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps: [lem-cg-hecke-and-lie-seam-contract-compatibility, def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-reduced-word-independence-and-length-multiplication, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, def-hh-coxeter-matrix-word-group-and-length, def-algebra-over-a-commutative-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2)"
      url: "https://arxiv.org/pdf/1212.0791"
    - title: "Ben Elias and Geordie Williamson, Soergel calculus (arXiv:1309.0865v1)"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s\}$ and let $H$ be the generic Hecke algebra over
$R=\mathbb Z[v^{\pm1}]$ with generator $T=T_s$ and the single relation
$(T-v)(T+v^{-1})=0$, equivalently $T^{2}=(v-v^{-1})T+1$
([[def-hh-universal-coxeter-hecke-parameters-and-presentation]],
[[thm-hh-generic-coxeter-hecke-standard-basis]]).

1. **The four generators and relations.** Put $q:=v$, $Q:=q^{2}=v^{2}$, and

$$S:=qT,\qquad H^{-}:=-T,\qquad T^{\mathrm{EW}}:=-q^{-1}T.$$

Then, in $H$,

$$S^{2}=(Q-1)S+Q,\qquad (H^{-})^{2}=(v^{-1}-v)H^{-}+1,\qquad (T^{\mathrm{EW}}+1)(T^{\mathrm{EW}}-q^{-2})=0,$$

i.e. $(T^{\mathrm{EW}})^{2}=(q^{-2}-1)T^{\mathrm{EW}}+q^{-2}$. Moreover
$\{1,T\}$, $\{1,S\}$, $\{1,H^{-}\}$ and $\{1,T^{\mathrm{EW}}\}$ are each
$R$-bases of $H$, and the four normalizations are interconverted by

$$T=q^{-1}S=-H^{-}=-qT^{\mathrm{EW}},\qquad S=qT,\qquad T^{\mathrm{EW}}=-q^{-1}T,$$

which are mutually inverse changes of generators. The first displayed relation
is the multiplicative convention "$S=qT$, $Q=q^2$"
([[lem-hh-hecke-anti-involution-bar-and-normalization]] (4)); the second is the
opposite-sign normalization and the third is the quadratic relation of
[[lem-cg-hecke-and-lie-seam-contract-compatibility]] (2).

2. **The rank-two consistency check.** For $S=\{s,t\}$ with $m=m(s,t)<\infty$
and the single parameter $v_s=v_t=v$ (a legitimate specialization; equality of the two parameters is forced when
$m$ is odd by
[[def-hh-universal-coxeter-hecke-parameters-and-presentation]]), the same substitutions preserve the braid relation
$T_sT_tT_s\cdots=T_tT_sT_t\cdots$ (both sides have $m$ factors, so they acquire
the same factor $q^{m}$, $(-1)^{m}$ or $(-q^{-1})^{m}$), and on the standard bases the
substitutions are diagonal:

$$S_w=q^{\ell(w)}T_w,\qquad H^{-}_w=(-1)^{\ell(w)}T_w,\qquad T^{\mathrm{EW}}_w=(-q^{-1})^{\ell(w)}T_w .$$

In particular both alternating products have the same sign and the same
multiplicative factor, including for odd-length braid words.

3. **Kazhdan–Lusztig conversion (rank one).** Let $T^{\mathrm{KL}}$ be the
generator of the presentation with the single relation
$(T^{\mathrm{KL}})^{2}=(q^{-2}-1)T^{\mathrm{KL}}+q^{-2}$, so that
$T=-qT^{\mathrm{KL}}$. Then the substitution sends $T^{\mathrm{KL}}$ to
$T^{\mathrm{EW}}=-q^{-1}T$, and with $H^{\mathrm{KL}}:=qT^{\mathrm{KL}}$ the
corresponding element $qT^{\mathrm{EW}}=-T=H^{-}$ satisfies
$(H^{\mathrm{KL}})^{2}=(q^{-1}-q)H^{\mathrm{KL}}+1$; this is the rank-one
instance of the conversion $H_x=v^{\ell(x)}T^{\mathrm{KL}}_x$ and
$h_{y,x}=v^{\ell(x)-\ell(y)}P_{y,x}(v^{-2})$ recorded in the Hodge-theory
source. The conversion is stated here so that coefficients are compared only
after it; no canonical basis, Kazhdan–Lusztig polynomial or positivity statement
is constructed in this example.

## Facts & Assumptions

**Given:** The rank-one Hecke datum $S=\{s\}$, the ring $R=\mathbb Z[v^{\pm1}]$, the algebra $H$ with generator $T=T_s$ and relation $(T-v)(T+v^{-1})=0$, the parameters $q=v$, $Q=q^{2}$, and the substituted generators $S=qT$, $H^{-}=-T$, $T^{\mathrm{EW}}=-q^{-1}T$; in the rank-two part, the system $S=\{s,t\}$ with $m=m(s,t)<\infty$ and $v_s=v_t=v$.

[F1] In the generic Hecke algebra the normalized relation is $T_s^{2}=(v_s-v_s^{-1})T_s+1$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F2] The multiplicative generators $S_s:=v_sT_s$ satisfy $(S_s-Q_s)(S_s+1)=0$ with $Q_s=v_s^{2}$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F3] The opposite-sign generators $H_s:=-T_s$ satisfy $H_s^{2}=(v_s^{-1}-v_s)H_s+1$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F4] The Soergel-calculus generators $T^{\mathrm{EW}}_s:=-v_s^{-1}T_s$ satisfy $(T^{\mathrm{EW}}_s+1)(T^{\mathrm{EW}}_s-v_s^{-2})=0$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F5] The four normalizations are interconverted by $T_s=v_s^{-1}S_s=-H_s=-v_sT^{\mathrm{EW}}_s$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F6] In the single-parameter normalization, $H_x=v^{\ell(x)}T^{\mathrm{KL}}_x$; for a supplied finite expansion $C_x=v^{\ell(x)}\sum_y P_{y,x}(v^{-2})T^{\mathrm{KL}}_y$, its $H_y$-coefficients are $h_{y,x}=v^{\ell(x)-\ell(y)}P_{y,x}(v^{-2})$. ([[lem-cg-hecke-and-lie-seam-contract-compatibility]])

[F7] The induced scalar action of an $R$-algebra makes it an $R$-module and its multiplication $R$-bilinear, so multiplication by a unit of $R$ is an $R$-linear bijection. ([[def-algebra-over-a-commutative-ring]])

## Verification

1.1 The four relations of part 1 are the relations [F1]–[F4] specialized to $v_s=v$: the normalized relation is the defining relation $T^{2}=(v-v^{-1})T+1$, and the other three read $S^{2}=(Q-1)S+Q$, $(H^{-})^{2}=(v^{-1}-v)H^{-}+1$ and $(T^{\mathrm{EW}}+1)(T^{\mathrm{EW}}-q^{-2})=0$ with $Q=q^{2}$. The interconversions are [F5] at $v_s=v$. In rank one the standard basis of [[thm-hh-generic-coxeter-hecke-standard-basis]] is $\{1,T\}$, and $\{1,S\}$, $\{1,H^{-}\}$, $\{1,T^{\mathrm{EW}}\}$ are obtained by fixing $1$ and scaling the other basis vector $T$ by the units $q$, $-1$, $-q^{-1}$, respectively. For each such unit $a$, the $R$-linear map $1\mapsto1$, $T\mapsto aT$ has inverse $1\mapsto1$, $T\mapsto a^{-1}T$, hence carries a basis to a basis by [F7]. [F1, F2, F3, F4, F5, F7]

2.1 For the rank-two check, each of the three substitutions multiplies every generator by one constant: $S_s\mapsto v$, $H_s\mapsto -1$, $T^{\mathrm{EW}}_s\mapsto -v^{-1}$. Hence an alternating product of $m$ factors acquires the same constant factor, $v^{m}$, $(-1)^{m}$ or $(-v^{-1})^{m}$, on both sides of the braid relation, so the braid relation is preserved by each substitution; this is exactly the content of the corresponding change of generators in [F2]–[F5]. For the diagonal formulas, the substituted standard-basis element is the product of the images of the generators along a reduced expression, $S_w=S_{s_1}\cdots S_{s_k}=v^{k}T_{s_1}\cdots T_{s_k}=v^{\ell(w)}T_w$, and similarly $H^{-}_w=(-1)^{\ell(w)}T_w$ and $T^{\mathrm{EW}}_w=(-v^{-1})^{\ell(w)}T_w$, using the product rule and independence of the standard basis in [[lem-hh-reduced-word-independence-and-length-multiplication]] (1). [F2, F3, F4, F5, step 1.1]

2.2 For the rank-one Kazhdan–Lusztig conversion, set $T^{\mathrm{KL}}:=-q^{-1}T$, which is part 1's $T^{\mathrm{EW}}$; since $T=-qT^{\mathrm{KL}}$ and the relation for $T$ holds, the substitution is consistent, and $T^{\mathrm{KL}}$ satisfies $(T^{\mathrm{KL}})^{2}=q^{-2}T^{2}=q^{-2}\bigl((v-v^{-1})T+1\bigr)=(q^{-2}-1)T^{\mathrm{KL}}+q^{-2}$ by the computation of step 1.1. With $H^{\mathrm{KL}}:=qT^{\mathrm{KL}}=-T=H^{-}$ one gets $(H^{\mathrm{KL}})^{2}=(H^{-})^{2}=(v^{-1}-v)H^{-}+1=(q^{-1}-q)H^{\mathrm{KL}}+1$, the rank-one case of the recorded conversion [F6] with $\ell(s)=1$. [F1, F5, F6, step 1.1]

3.1 Scope and choice: this example compares four quadratic normalizations and verifies the exponent conversions of the standard bases in one rank-two family; it constructs no canonical basis, no Kazhdan–Lusztig polynomial and no positivity or bar-invariance statement, all of which remain in their designated proof homes, and the general coefficient conversion [F6] is supplied by the seam lemma. Every computation is a substitution in $R=\mathbb Z[v^{\pm1}]$, and no choice is used. [given] ∎
