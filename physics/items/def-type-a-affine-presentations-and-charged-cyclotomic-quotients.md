---
id: def-type-a-affine-presentations-and-charged-cyclotomic-quotients
kind: definition
title: "Affine type-A presentations and charged cyclotomic quotients"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-generic-type-a-hecke-algebra,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       def-cyclic-affine-type-a-cartan-datum]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Actual retrieved v4, pp. 1–27 and 31–32 read; local source-interface calculations are reproduced in the strategy. No reading of pp. 28–30 is claimed."
---

## Definition

Let $A$ be a commutative ring and let $z\in A$ be a unit. Fix an integer
$n\ge0$.

**The nondegenerate affine presentation.** The algebra
$H_n^{\mathrm{aff}}(A;z)$ is the $A$-algebra presented by commuting units
$X_1,\dots,X_n$ and generators $T_1,\dots,T_{n-1}$
([[def-generic-type-a-hecke-algebra]],
[[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) subject to
$$T_r^2=(z-1)T_r+z,\qquad T_rT_{r+1}T_r=T_{r+1}T_rT_{r+1},\qquad T_rT_s=T_sT_r\quad(|r-s|>1),$$
$$T_rX_rT_r=zX_{r+1},\qquad T_rX_s=X_sT_r\quad(s\notin\{r,r+1\}),$$
the last two relations being the Bernstein relation and the distant mixed
commutation, and with $T_r$ invertible as a consequence of its quadratic
relation. For $n=0$ the algebra is $A$.

**The degenerate affine presentation.** The algebra
$H_n^{\deg}(A)$ is the $A$-algebra presented by commuting generators
$x_1,\dots,x_n$ and symmetric-group generators $s_1,\dots,s_{n-1}$ subject to
the Coxeter relations $s_r^2=1$, $s_rs_{r+1}s_r=s_{r+1}s_rs_{r+1}$,
$s_rs_t=s_ts_r$ for $|r-t|>1$ together with the mixed relations
$$s_rx_r=x_{r+1}s_r-1,\qquad s_rx_{r+1}=x_rs_r+1,\qquad s_rx_t=x_ts_r\quad(t\notin\{r,r+1\}).$$

**Auxiliary cyclotomic quotients.** For a monic polynomial
$f(u)=u^{\ell}+a_{\ell-1}u^{\ell-1}+\dots+a_0$ in $A[u]$ of degree $\ell$
impose the single relation $f(X_1)=0$ (respectively $f(x_1)=0$) on the FIRST
polynomial generator and call the resulting quotient the **monic cyclotomic
quotient**; when $\ell=0$, so that $f=1$, the quotient at positive rank is the
zero algebra, while rank zero remains $A$. In the nondegenerate case the
constant term $a_0$ is required to be a unit. The first-strand convention
imposed here (cyclotomic relation on $X_1$, and later induction appending on
the right) is the one used on this page.

**The charged cyclic specialization.** Let $A=F$ be a field, let
$z=q_H\in F^{\times}$ have finite quantum characteristic $e\ge2$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), and let
$I=\mathbb Z/e\mathbb Z$ be the cyclic **label set** of residues, with a
dominant cyclic type-A weight $(\lambda_i)_{i\in I}$, $\lambda_i\ge0$, and
$\ell=\sum_i\lambda_i$
([[def-cyclic-affine-type-a-cartan-datum]]). If $q_H\ne1$ use the
nondegenerate presentation and put $c_i:=q_H^{\,i}$; if $q_H=1$ (which forces
$\operatorname{char}F=e$) use the degenerate presentation and put
$c_i:=i\cdot1_F$. Impose
$$f(z_1):=\prod_{i\in I}(z_1-c_i)^{\lambda_i},\qquad f(z_1)=0.$$
on the first generator ($z_1=X_1$ in the nondegenerate branch and $z_1=x_1$ in
the degenerate branch) and write $H_d^\Lambda$ for the resulting **charged
cyclotomic quotient** of rank $d$. This charged finite-$e$ branch is the scope
of the present page; the arbitrary-base affine and monic definitions above
supply its universal PBW and trace proof inputs. The definition itself asserts
no basis, no spectrum, no primitive block decomposition and no
Brundan–Kleshchev isomorphism. The grading variable $v$ of the KLR side is
independent of $q_H$.

**Well-definedness notes.** The nondegenerate parameters $c_i=q_H^i$ are
distinct because $q_H$ has multiplicative order exactly $e$; the degenerate
parameters $c_i=i\cdot1_F$ are distinct because $\operatorname{char}F=e$ makes
$i\cdot1_F\ne j\cdot1_F$ for $0\le i<j<e$. In the nondegenerate branch no
embedding of the label set $\mathbb Z/e\mathbb Z$ into $F$ is claimed or used:
$i$ is only a label for the value $q_H^i$. All these definitions are given by
generators, relations and a two-sided quotient ideal and use no choice
principle.
