---
id: lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
kind: lemma
title: "Bimodule tensor totalization respects differentials and homotopies"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - def-chain-homotopy
  - lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero
  - thm-bimodule-actions-induced-on-tensor-products
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Stacks Project, Differential Graded Algebra, §22.33, tag 09LP"
      url: "https://stacks.math.columbia.edu/tag/09LP"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $F,F'$ be bounded cochain complexes of graded $(B,A)$-bimodules and let
$G,G'$ be bounded cochain complexes of graded $(A,C)$-bimodules, with
degree-zero internal differentials as in
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]].
The signed tensor differential on $F\otimes_A G$ descends to the balanced
tensor, preserves internal degree, commutes with the outer $B$- and $C$-actions,
and squares to zero. If $\phi:F\to F'$ and $\psi:G\to G'$ are internal-degree
zero chain maps that are bimodule-linear, then $\phi\otimes_A\psi$ is a chain
map. These assignments preserve identities and composition, so tensoring is a
bifunctor on the categories of bounded complexes and chain maps.

Use cochain homotopies of internal degree zero. Thus a homotopy
$h:G\to G'$ of cochain degree $-1$ from $\psi_0$ to $\psi_1$ satisfies
$\psi_0-\psi_1=d_{G'}h+hd_G$, and a homotopy $k:F\to F'$ from $\phi_0$ to
$\phi_1$ satisfies $\phi_0-\phi_1=d_{F'}k+kd_F$.
Then the induced maps are homotopic in either variable. On a summand
$F^p\otimes_A G^q$, the total homotopies are
$$
H(f\otimes g)=(-1)^p f\otimes h(g),\qquad K(f\otimes g)=k(f)\otimes g.
$$
Consequently the tensor bifunctor descends to homotopy classes in both
variables.

## Facts & Assumptions

**Given:** Bounded complexes $F,F'$ of graded $(B,A)$-bimodules and $G,G'$ of
graded $(A,C)$-bimodules; their differentials, maps, and homotopies preserve
internal degree and are linear for the applicable bimodule actions.

[F1] The totalization has summands $F^p\otimes_A G^q$ in degree $p+q$ and
differential $d_F\otimes 1+(-1)^p1\otimes d_G$
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[F2] In the ordinary right-left module case the signed tensor differential is
balanced and squares to zero
([[lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]]).

[F3] A chain homotopy $s$ satisfies
$f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n$
([[def-chain-homotopy]]). Reindexing chain degree $n=-p$ gives the cochain
formula $f^p-g^p=d_D^{p-1}s^p+s^{p+1}d_C^p$, with $s^p:C^p\to D^{p-1}$.

[F4] The outer actions on a balanced tensor product descend by
$s(m\otimes n)=(sm)\otimes n$ and $(m\otimes n)t=m\otimes(nt)$; when both
are present they commute
([[thm-bimodule-actions-induced-on-tensor-products]]).

## Proof

**Proof technique:** direct sign calculation on elementary tensors, extended
linearly to the bounded total modules.

1.1 For $a\in A$, right $A$-linearity of $d_F$ and left $A$-linearity of $d_G$ give $d((fa)\otimes g)=d_F(f)a\otimes g+(-1)^pfa\otimes d_G(g)=d_F(f)\otimes ag+(-1)^pf\otimes a d_G(g)=d(f\otimes ag)$; hence the differential descends to the balanced tensor, and additivity covers zero summands. [given, F1, algebra]

1.2 For $b\in B$ and $c\in C$, bimodule-linearity gives $d((bf)\otimes g)=b\,d(f\otimes g)$ and $d(f\otimes(gc))=d(f\otimes g)c$, so the outer actions commute with $d$; each differential preserves internal degree and the sign $(-1)^p$ depends only on cochain degree, while [F4] supplies the descended commuting outer actions. [given, F1, F4, algebra]

1.3 Applying $d$ twice gives $d^2(f\otimes g)=d_F^2(f)\otimes g+\bigl((-1)^{p+1}+(-1)^p\bigr)d_F(f)\otimes d_G(g)+f\otimes d_G^2(g)=0$: the pure terms vanish by the complex identities and the mixed terms cancel, as in the ordinary calculation [F2]; the same formula covers zero differentials and zero summands. [given, F1, F2, algebra]

1.4 If $F$ is supported in $[a,b]$ and $G$ in $[c,d]$, the total complex is supported in $[a+c,b+d]$ with finite diagonals; at the upper endpoint the differential has zero target and below the lower endpoint there is no preceding nonzero degree, so the totalization is bounded at both ends. [F1, algebra]

1.5 For internal-degree-zero bimodule chain maps $\phi:F\to F'$ and $\psi:G\to G'$, their tensor is balanced and outer-linear, and $d(\phi(f)\otimes\psi(g))=\phi(d_Ff)\otimes\psi(g)+(-1)^p\phi(f)\otimes\psi(d_Gg)=(\phi\otimes\psi)d(f\otimes g)$ by the chain-map identities; identities and composition agree on elementary tensors and hence on the totalization. [given, F1, algebra]

1.6 Let $h:G\to G'$ be an internal-degree-zero bimodule homotopy of cochain degree $-1$ with $\psi_0-\psi_1=d_{G'}h+hd_G$; for $H(f\otimes g)=(-1)^p f\otimes h(g)$, the mixed terms in $dH+Hd$ have coefficients $(-1)^p$ and $(-1)^{p+1}$ and cancel, leaving $dH(f\otimes g)+Hd(f\otimes g)=f\otimes(d_{G'}h+hd_G)(g)=f\otimes(\psi_0-\psi_1)(g)$, so $H$ is a homotopy from $1_F\otimes\psi_0$ to $1_F\otimes\psi_1$ with the sign forced by [F1]. [given, F1, F3, algebra]

1.7 Let $k:F\to F'$ be an internal-degree-zero bimodule homotopy of cochain degree $-1$ with $\phi_0-\phi_1=d_{F'}k+kd_F$; for $K(f\otimes g)=k(f)\otimes g$, the mixed terms in $dK+Kd$ have coefficients $(-1)^{p-1}$ and $(-1)^p$ and cancel, leaving $dK(f\otimes g)+Kd(f\otimes g)=(d_{F'}k+kd_F)(f)\otimes g=(\phi_0-\phi_1)(f)\otimes g$, so $K$ is a homotopy from $\phi_0\otimes1_G$ to $\phi_1\otimes1_G$. [F1, F3, algebra]

2.1 Decompose $\phi_0\otimes\psi_0-\phi_1\otimes\psi_1=(\phi_0-\phi_1)\otimes\psi_0+\phi_1\otimes(\psi_0-\psi_1)$; postcomposing the homotopy in step 1.7 by $1_{F'}\otimes\psi_0$ handles the first summand and precomposing the homotopy in step 1.6 by $\phi_1\otimes1_G$ handles the second, so their sum proves well-definedness on homotopy classes in both variables. If an input is concentrated in one cochain degree the formulas reduce to one summand with no sign from its internal degree. [step 1.6, step 1.7, algebra] ∎
