---
dependency_level: 0
id: lem-affine-generic-cyclic-normalizer-splits-compact-induction
kind: lemma
title: "Finite cyclic decomposition of affine-generic compact induction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: []
justified_by: []
sources:
  references:
    - title: "Yang, Relative Trace Formula, section 9.2.3, motivating local type; elementary normalizer calculation"
      url: https://arxiv.org/pdf/2303.02225v1
---

## Statement

Let $K$ be a nonarchimedean local field with integers $\mathcal O$, maximal ideal $\mathfrak p=(\varpi)$, residue field $k$, and $m\geq2$. In $G=\mathrm{GL}_m(K)$ let $I^+$ consist of integral invertible matrices with diagonal in $1+\mathfrak p$, entries below the diagonal in $\mathfrak p$, and arbitrary integral entries above it. Put $Z=K^\times I_m$ and $H=ZI^+$. Fix a nontrivial additive character $\bar\psi$ of $k$, a unit $t\in\mathcal O^\times$, and a unitary character $\chi:K^\times\to\mathbb C^\times$ trivial on $1+\mathfrak p$. Define

$$\eta(g)=\bar\psi\left(\sum_{i=1}^{m-1}\overline{g_{i,i+1}}+\bar t\,\overline{\varpi^{-1}g_{m,1}}\right),\qquad \widetilde\eta(zg)=\chi(z)\eta(g).$$

Let $c$ have ones in entries $(i,i+1)$, $1\leq i<m$, entry $\varpi/t$ in $(m,1)$, and zeros elsewhere. Then $c$ normalizes $H$ and $\widetilde\eta$, $c^m=(\varpi/t)I_m$, and $H^+=\langle c\rangle H$ has cyclic quotient $H^+/H$ of order $m$. For each complex root $\zeta^m=\chi(\varpi/t)$ there is a character $\eta_\zeta$ of $H^+$ extending $\widetilde\eta$ and satisfying $\eta_\zeta(c)=\zeta$. With right-translation actions, compact induction satisfies

$$\operatorname{c-Ind}_H^G\widetilde\eta=\bigoplus_{\zeta^m=\chi(\varpi/t)}\operatorname{c-Ind}_{H^+}^G\eta_\zeta.$$

Every summand is nonzero. In particular the compact induction from $ZI^+$ itself is reducible. For arbitrary affine-generic coefficients $a_1,\ldots,a_m\in k^\times$, diagonal conjugation by integral units reduces to this situation with $\bar t=\prod_i a_i$. No irreducibility, supercuspidality or genericity of the summands, or equivalence with a particular published construction, is asserted.

## Statement references

[Yang, section 9.2.3](https://arxiv.org/pdf/2303.02225v1)

## Facts & Assumptions

**Given:** The field, matrices and characters in the Statement. For a character $\rho$ of an open subgroup $J$, $\operatorname{c-Ind}_J^G\rho$ means the locally constant functions $f$ with $f(jg)=\rho(j)f(g)$ and support compact modulo $J$, acted on by right translation. All character roots and sums below are finite.

## Proof

1.1 In a product of two elements of $I^+$, each upper adjacent entry modulo $\mathfrak p$ is the sum of those entries: the two diagonal factors are one modulo $\mathfrak p$, and every other product term contains an entry below the diagonal. For the $(m,1)$ entry modulo $\mathfrak p^2$, each intermediate product contains two below-diagonal entries. Division by $\varpi$ therefore also gives addition modulo $\mathfrak p$. Thus $\eta$ is a character. On $Z\cap I^+=(1+\mathfrak p)I_m$ it and $\chi$ are both trivial, proving that $\widetilde\eta$ is well-defined. [given, algebra]

2.1 Conjugation by $c$ cyclically permutes the matrix coordinates, introducing a factor $\varpi/t$ exactly on crossing the lower-left boundary. Hence it preserves the defining valuations and diagonal congruences of $I^+$. On the affine-root coordinates it sends the $(1,2)$ coordinate to $(\varpi/t)$ times the lower-left coordinate position, while the lower-left input $\varpi x$ is sent to the upper adjacent entry $tx$; the intervening coordinates are permuted. Their weighted sum in $\eta$ is unchanged. It fixes the center, so it normalizes $\widetilde\eta$. Matrix multiplication gives $c^m=(\varpi/t)I_m$. For $h\in H$, the valuation of $\det h$ is divisible by $m$, whereas that of $\det c$ is one. Thus the cosets $H,cH,\ldots,c^{m-1}H$ are distinct, and their union is $H^+$. [step 1.1, algebra]

3.1 On the compact-induction space $V=\operatorname{c-Ind}_H^G\widetilde\eta$, set $(Tf)(g)=f(cg)$. Normalization from step 2.1 makes $Tf$ left-$H$-equivariant and preserves smoothness and compact support modulo $H$. The operator commutes with every right translation, and $T^m=\chi(\varpi/t)\operatorname{Id}$. The polynomial $X^m-\chi(\varpi/t)$ has $m$ distinct complex roots. Explicitly, $P_\zeta=m^{-1}\sum_{j=0}^{m-1}\zeta^{-j}T^j$ are mutually orthogonal idempotents with sum the identity and image the $\zeta$-eigenspace. These facts follow by summing finite geometric series of the root ratios. [step 2.1, construct, algebra]

4.1 Define $\eta_\zeta(c^jh)=\zeta^j\widetilde\eta(h)$. The normalizing relation and $c^m\in H$ make this multiplicative and independent of the chosen integer $j$, precisely because $\zeta^m=\widetilde\eta(c^m)$. The $\zeta$-eigenspace of $T$ is exactly the space of functions left-equivariant for this character of $H^+$. Support compact modulo $H$ is equivalent to support compact modulo $H^+$ because their quotient has $m$ elements. The function $f_0$ supported on $H$ with $f_0(h)=\widetilde\eta(h)$ belongs to $V$, and $(P_\zeta f_0)(1)=1/m$ since $c^j\notin H$ for $1\leq j<m$. Every summand is therefore nonzero. This proves the decomposition and reducibility. [step 2.1, step 3.1, construct, algebra]

5.1 Lift the nonzero coefficients $a_i$ to units. Set $d_1=1$ and $d_{i+1}=a_i d_i$ for $i<m$, and $D=\operatorname{diag}(d_1,\ldots,d_m)$. In the character $g\mapsto\eta_a(DgD^{-1})$, the first $m-1$ coefficients become $a_i d_i/d_{i+1}=1$, while the affine coefficient becomes $a_md_m/d_1=\prod_i a_i$. Conjugation by $D$ preserves $I^+$, the center, and compact-induction spaces. It transports the preceding finite decomposition to all affine-generic characters. [step 4.1, construct, algebra] ∎

## Source limits

This elementary calculation repairs the distinction between induction from $ZI^+$ and induction from its cyclic extension. Yang cites Knightly–Li for the actual simple-supercuspidal representations. That exact full-text source and the irreducibility of these candidates remain separate held obligations; this proof imports neither.
