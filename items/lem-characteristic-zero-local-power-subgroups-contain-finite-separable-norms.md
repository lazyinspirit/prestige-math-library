---
dependency_level: 14
id: lem-characteristic-zero-local-power-subgroups-contain-finite-separable-norms
kind: lemma
title: Characteristic-zero power subgroups contain finite separable norms
deps:
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-kummer-pairing-is-perfect
- cor-finite-subgroups-of-units-in-a-domain-are-cyclic
- thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
- thm-local-artin-reciprocity-and-norm-index
- thm-field-norm-and-trace-by-embeddings
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- def-axiom-of-choice
- def-dependent-choice
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC AND DC, and AC implies the Countable Choice in actual local extension suppliers.
  Finite radical choices and finite group duality only; no86→93 or LT dependency.
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (5.2) printed145 and (6.2) printed155, full proofs read. Field-Kummer/canonical-index
      replaces the source Hilbert-pairing input; full nonmonic Hensel threshold is reconstructed
      locally.
  - title: Brian Conrad, Ostrowski for number fields
    url: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf
    locator: Section6 Theorem6.5 and complete proof, Corollary6.6, printed12–13; actual full
      nonmonic factor theorem read.
  - title: Keith Conrad, Linear independence of characters
    url: https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf
    locator: Theorem5.12 and complete proof, printed14; finite radical exponent construction,
      not imported Hilbert duality.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC and DC. Let $K/\mathbb Q_p$ be finite, with normalized valuation
$v_K$, and let $m\ge1$. The subgroup $K^{\times m}$ is open and has
finite index in $K^\times$. There is a finite separable extension $T/K$
such that $N_{T/K}T^\times\subseteq K^{\times m}$. In particular this
holds for $p=2$, all ramification indices and all $p$-parts of $m$.
The field $T/K$ is not asserted to be abelian.

## Statement references

[[thm-local-artin-reciprocity-and-norm-index]]

## Facts & Assumptions

**Given:** $K,m$, AC and DC as in the Statement.

[F1] Hensel factor lifting applies to nonmonic polynomials whose reduction
has a monic coprime factor; a unit leading coefficient is not required.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F2] The finite field-Kummer pairing is bilinear and nondegenerate on both
sides for $\mu_m\subset F$, $\operatorname{char}F\nmid m$ and finite
$F^\times/F^{\times m}$. [[thm-kummer-pairing-is-perfect]]

[F3] Finite subgroups of field units are cyclic, and finite abelian groups
have invariant-factor decompositions.
[[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]
[[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[F4] Under AC/DC the canonical finite Artin quotient for a finite abelian
extension has its algebraic norm kernel and index equal to extension degree.
[[thm-local-artin-reciprocity-and-norm-index]]

[F5] Finite local extensions have complete extending valuation, discrete
value group and finite residue field; the accepted degree equality is
$[E:F]=e(E/F)f(E/F)$ under its Countable Choice hypothesis.
[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]
[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F6] Finite separable norms are products over embeddings.
[[thm-field-norm-and-trace-by-embeddings]]

[A1] AC and DC are exactly the canonical-map hypotheses; AC implies the
Countable Choice used by finite local extension suppliers.
[[def-axiom-of-choice]] [[def-dependent-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** prove a deep-unit power bound by full Hensel, construct
a finite radical field over $K(\mu_m)$, and descend an algebraic norm inclusion.

**Given:** The data above; first allow any finite local $F/\mathbb Q_p$.

1.1 Put $d=v_F(m)\ge0$ and $h=\pi_F^{d+1}$. For $u\in U_{2d+1}=1+\pi_F^{2d+1}\mathcal O_F$, form $$g(Y)=((1+hY)^m-u)/(mh).$$ Its constant coefficient is integral, its linear coefficient is one and, for $2\le j\le m$, its $j$th coefficient has valuation at least $(j-1)(d+1)-d\ge1$: $\binom mj$ is an integer and has nonnegative valuation. Thus $g\in\mathcal O_F[Y]$ has reduction $Y+c$. Use [F1] with monic factor $h_0=Y+c$ and other factor $H_0=1$. The lifted monic linear factor gives a root $y\in\mathcal O_F$, so $(1+hy)^m=u$. Consequently $$U_{2v_F(m)+1}\subset (U_{v_F(m)+1})^m\subset F^{\times m}.$$ This is not a claim that $U_R^m=U_R$ when $p\mid m$. The polynomial is genuinely nonmonic in general; no nonunit derivative is treated as a simple-root hypothesis. For $m=1$ it is linear, and for $u=1$ take $y=0$. This covers $p=2$ and arbitrary ramification. [F1, given, construct, algebra]

2.1 Put $R=2v_F(m)+1$. The power subgroup contains the open $U_R$, so is open. Finitely many residue lifts enumerate $\mathcal O_F/\pi_F^R$ by $R$ residue-subtraction steps; hence $\mathcal O_F^\times/U_R$ is finite. Write $a=\pi_F^n u$, reduce $n$ modulo $m$ and the unit modulo $U_R$. These finitely many pairs surject onto $F^\times/F^{\times m}$, which is therefore a finite abelian group killed by $m$. Only finite lifts and the actual complete valuation have been used. [step 1.1, given, construct, algebra]

3.1 Suppose $m>1$ and $\mu_m\subset F$. Choose finitely many representatives $b_1,\ldots,b_s$ for $A=F^\times/F^{\times m}$ and roots $\beta_i^m=b_i$ in the fixed separable closure. Their compositum $T=F(\beta_1,\ldots,\beta_s)$ is the splitting field of finitely many separable polynomials, so is finite Galois. The map $$\operatorname{Gal}(T/F)\longrightarrow\mu_m^s,\qquad \sigma\longmapsto(\sigma\beta_i/\beta_i)_i$$ is an injective homomorphism: the roots generate $T$ and $\mu_m$ is fixed. Thus its finite group is abelian and killed by $m$. Every $a\in F^\times$ is $c^m\prod b_i^{e_i}$ and has a root $c\prod\beta_i^{e_i}$ in $T$; no simultaneous family of roots is chosen. Therefore [F2] applies to this actual finite Kummer field. [F2, step 2.1, construct, algebra]

4.1 We supply the cardinal argument explicitly. The group $\mu_m$ has $m$ elements since $X^m-1$ is separable, and is cyclic by [F3]. If a finite abelian group $H$ is killed by $m$, [F3] decomposes it into factors $C_{d_i}$ with $d_i\mid m$. Each factor has exactly $d_i$ homomorphisms to $\mu_m$, so $|\operatorname{Hom}(H,\mu_m)|=|H|$, including the trivial group. The two nondegeneracy injections in [F2] give $G\hookrightarrow\operatorname{Hom}(A,\mu_m)$ and $A\hookrightarrow\operatorname{Hom}(G,\mu_m)$. Both groups are finite abelian killed by $m$, so $|G|=|A|$. By [F4], the norm kernel for $T/F$ has index $|G|$. It contains $F^{\times m}$ because the canonical quotient is killed by $m$. Equal finite indices yield $$N_{T/F}T^\times=F^{\times m}.$$ This uses field-Kummer pairing and canonical norm index, not a local Hilbert nondegeneracy or norm-duality theorem. [A1, F2, F3, F4, step 3.1, algebra]

5.1 Return to $K$. For $m>1$ put $L=K(\mu_m)$, finite separable in characteristic zero, and use its extending complete valuation from [F5]. Its residue field is finite and its value group discrete under [A1]. Thus steps 1.1–4.1 apply over $L$ with its OWN $v_L(m)$ and uniformizer, producing finite abelian $T/L$ with $N_{T/L}T^\times=L^{\times m}$. The tower $T/L/K$ is finite separable, whether or not $T/K$ is Galois. For that tower [F6] proves norm transitivity: group the $K$-embeddings of $T$ by their restrictions to $L$; each product in a fibre is that embedding of $N_{T/L}(x)$, giving $N_{T/K}(x)=N_{L/K}(N_{T/L}(x))$. Multiplicativity of the algebraic norm then gives $$N_{T/K}T^\times=N_{L/K}(L^{\times m}) =\{N_{L/K}(y)^m:y\in L^\times\}\subset K^{\times m}.$$ This is algebraic norm transitivity, not a cross-base Artin-map identity. For $m=1$ take $T=K$ and the identity norm. Openness and finite index for $K^{\times m}$ are step 2.1. These prove every clause of the Statement without an LT-action or all-open-existence premise. [A1, F5, F6, step 2.1, step 4.1, construct, algebra] ∎

