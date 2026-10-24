---
id: ex-the-categorical-sl-two-commutator-in-a-small-weight
kind: example
title: "The categorical $\\mathfrak{sl}_2$ commutator in a small cyclotomic weight"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-cyclotomic-klr-induction-and-restriction-functors,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-divided-power-klr-idempotents-and-projectives,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       thm-cyclotomic-klr-sl-two-categorical-commutator]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 5.1-5.2 (Theorem 5.2 and its proof) and Section 6 (the two normalized diagrams, Lemma 6.1 and the explicit q_i-powers), specialized to Lambda=2Lambda_1 and beta=0."
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, Advances in Math. 228 (2011) 803-861, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Section 6, Theorems 6.10-6.11 and the rank-one string computations."
---

## Example

Take $I=\{i\}$ with $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, and
$\Lambda=2\Lambda_1$, so that $\langle h_i,\Lambda\rangle=2$ and the standard
cyclotomic quotient has relations $x_1^2e(\nu)=0$. Then:

(a) $R^\Lambda(0)=k$, $R^\Lambda(\alpha_i)=k[x_1]/(x_1^2)$ with graded
dimension $1+q^2$, and $R^\Lambda(n\alpha_i)=0$ for $n\ge3$, so the functors
on the nonzero weights are $F^\Lambda_ik=R^\Lambda(\alpha_i)$ and
$F^\Lambda_iE^\Lambda_ik=0$;

(b) the categorical $\mathfrak{sl}_2$ relation of
[[thm-cyclotomic-klr-sl-two-categorical-commutator]] at $\beta=0$,
$\lambda=\Lambda$ (case $\langle h_i,\lambda\rangle=2\ge0$) reads
$q^{-2}F^\Lambda_iE^\Lambda_i\oplus\mathrm{Id}\oplus q^2\mathrm{Id}\cong
E^\Lambda_iF^\Lambda_i$; on the vacuum it says
$E^\Lambda_iF^\Lambda_ik\cong k\oplus k\{2\}$, which is exactly
$R^\Lambda(\alpha_i)\cong k\oplus k\{2\}$;

(c) consequently, with the normalized operators of
[[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]],
on $[\mathrm{Proj}(R^\Lambda(0))]$: $E_iF_i[1_\Lambda]=(q+q^{-1})[1_\Lambda]$
and $F_iE_i[1_\Lambda]=0$, so
$[E_i,F_i][1_\Lambda]=(q+q^{-1})[1_\Lambda]
=(K_i-K_i^{-1})/(q_i-q_i^{-1})[1_\Lambda]$ with
$K_i[1_\Lambda]=q^2[1_\Lambda]$; on $[\mathrm{Rep}(R^\Lambda(0))]$ the same
commutator identity holds: $F_i[k]=q^{-1}[k\oplus k\{2\}]$, $E_i$ lowers back,
$F_iE_i[k]=0$, and $E_iF_i[k]=(q+q^{-1})[k]$. This is the mixed relation of
[[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]
verified at the first nontrivial weight.

## Verification

**Given:** The rank-one datum $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, $\Lambda=2\Lambda_1$, with the standard quotient $x_1^2e(\nu)=0$ and the functors of [[def-cyclotomic-klr-induction-and-restriction-functors]].

[F1] The rank-one quotients: $R^\Lambda(0)=k$, $R^\Lambda(\alpha_i)=k[x]/(x^2)$ of graded dimension $1+q^2$, $R^\Lambda(n\alpha_i)=0$ for $n\ge3$, and basic restriction of $F_ik$ is the vector space $k\oplus k\{2\}$ ([[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]]).

[F2] The categorical $\mathfrak{sl}_2$ relation at target weight $h=2$ has identity shifts $0,2$, so its vacuum evaluation is exactly $k\oplus k\{2\}$ ([[thm-cyclotomic-klr-sl-two-categorical-commutator]]).

[F3] The normalized operators on $K_0$ carry $q^{-1}$ on projective $E$ at input root $\alpha_i$, while KK module $F$ carries $q^{-1}$ and KK $E$ is raw, and the canonical module action shifts $E$ and leaves $F$ raw ([[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]]).

**Verification.**

1.1 The blocks. The rank-zero block is $k$ and the rank-one quotient is $k[x]/(x^2)$ with basis $1,x$ and degrees $0,2$. Restriction of the vacuum has zero target. Thus the relevant functor values on the vacuum are $F^\Lambda_ik=R^\Lambda(\alpha_i)$ and $F^\Lambda_iE^\Lambda_ik=0$. [F1]

2.1 The commutator. The relation of [F2] evaluated on the vacuum gives $E^\Lambda_iF^\Lambda_ik\cong k\oplus k\{2\}$, which is $R^\Lambda(\alpha_i)$ by [F1], so $q^{-2}F^\Lambda_iE^\Lambda_i\oplus\mathrm{Id}\oplus q^2\mathrm{Id}\cong E^\Lambda_iF^\Lambda_i$ holds at the first nontrivial weight. [step 1.1, F2]

3.1 The Grothendieck commutator. With the normalizations of [F3]: projective $E_iF_i[1_\Lambda]=q^{-1}(1+q^2)[1_\Lambda]=(q+q^{-1})[1_\Lambda]$ and $F_iE_i[1_\Lambda]=0$; KK module $F$ from the vacuum also carries $q^{-1}$ while KK $E$ is raw, and the canonical module action shifts $E$ and leaves $F$ raw, giving the same result in both module conventions. All agree with $(q^2-q^{-2})/(q-q^{-1})$, the mixed relation evaluated at $K_i=q^2$. This verifies the commutator identity at the first nontrivial weight and is a finite rank-one computation using no choice. [step 2.1, F3] ∎


## Remarks

The following is a string of graded module categories, not a commutative
square. Put $\mathcal C_n=\mathrm{Mod}(R^\Lambda(n\alpha_i))$ for $n\ge0$.
The nonzero blocks occur at $n=0,1,2$, with weights $\Lambda-n\alpha_i$
and $h_i$-values $2,0,-2$, respectively; $\mathcal C_n=0$ for $n\ge3$.
The arrows are the raw functors $F_i^\Lambda,E_i^\Lambda$ used in (a)–(b),
before the normalizations in (c).

```tikzcd
\mathcal C_0 \arrow[r, bend left=22, "F_i^\Lambda"] &
\mathcal C_1 \arrow[l, bend left=22, "E_i^\Lambda"] \arrow[r, bend left=22, "F_i^\Lambda"] &
\mathcal C_2 \arrow[l, bend left=22, "E_i^\Lambda"] \arrow[r, bend left=22, "F_i^\Lambda"] &
0=\mathcal C_3 \arrow[l, bend left=22, "E_i^\Lambda"]
```

Thus the rightward arrows increase root degree and lower weight. The arrows
incident to $\mathcal C_3$ are zero functors. Restriction from the vacuum is
also zero: it would have root degree $-\alpha_i$, outside $Q_+$. The path
from $\mathcal C_0$ to $\mathcal C_1$ and back is $E_i^\Lambda F_i^\Lambda$,
with vacuum value $k\oplus k\{2\}$, whereas $F_i^\Lambda E_i^\Lambda k=0$.
After normalization, the difference is $(q+q^{-1})[k]$ as in (c).
The illustration records the functor directions and the vacuum computation;
the verification above is independent of it.
