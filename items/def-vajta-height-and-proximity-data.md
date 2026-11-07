---
id: def-vajta-height-and-proximity-data
kind: definition
title: Vojta height and proximity data over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-number-field
  - def-place-of-a-global-field
  - thm-product-formula-for-number-fields
  - def-axiom-of-choice
  - def-height-functions-modulo-bounded-functions
  - thm-weil-height-machine-functoriality-and-additivity
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-cartier-divisor
  - def-ample-invertible-sheaf
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Vojta, Diophantine Approximation and Nevanlinna Theory
      url: https://math.berkeley.edu/~vojta/cime/cime.pdf
      locator: §8, Definition 8.6 (number-field Weil functions); §§9–10, Definitions 9.1, 9.6 and 10.1 (heights and proximity); §14, Definitions 14.4–14.5 and Conjecture 14.6(a),(b), printed pp. 159–160; §22, Conjectures 22.5–22.6, printed pp. 189–191.
---

## Definition

Assume the Axiom of Choice for the projective Weil-height machine. Let $k$ be a number field, let $X/k$ be a smooth projective geometrically integral variety, and let $D$ be a reduced effective Cartier divisor on $X$. The divisor $D$ has **normal crossings** if, étale-locally at every geometric point of $X$, its support has equation $t_1\cdots t_r=0$, where the $t_i$ are distinct members of a regular system of parameters; $r=0$ is allowed. Write $\operatorname{Supp}D$ for its underlying closed subset.

Write $M_k$ for the set of places of $k$. For each place $v$ of $k$, let $C_v$ be the completion of an algebraic closure of the local field $k_v$. A number-field **Weil function** for $D$ is a place-indexed family $\lambda_D=(\lambda_{D,v})_v$, with $\lambda_{D,v}:X(C_v)\setminus\operatorname{Supp}D\to\mathbb R$, satisfying the following local condition: whenever $D$ has local equation $f=0$ on an open chart, there is a continuous correction family $\alpha=(\alpha_v)_v$ such that
$$\lambda_{D,v}(x)=-\log|f(x)|_v+\alpha_v(x),$$
and $\alpha$ is locally $M_k$-bounded in the following sense. An **$M_k$-constant** is a family $(b_v)_v$ of nonnegative real numbers that is zero for all but finitely many places. On an affine open $V\subseteq U$, choose finitely many generators $g_1,\ldots,g_N$ with $N\ge1$ of its $k$-coordinate algebra. For every $M_k$-constant $(b_v)_v$, there must be an $M_k$-constant $(c_v)_v$ such that
$$|\alpha_v(x)|\le c_v\quad\text{whenever }x\in V(C_v)\text{ and }\max_i\log\max\{1,|g_i(x)|_v\}\le b_v.$$
Require this on every affine open $V$ and every such generating tuple. Equivalently one may use any affine closed embedding and test its coordinate-bounded families: a change of finite algebra generators is polynomial, so the finitely many coefficients change the bounds only by an $M_k$-constant. This condition bounds corrections on these bounded families, not on an entire Zariski chart. This is one compatible family across all places, not a separately chosen unrelated function at each place. Restrict $\lambda_{D,v}$ to $X(k_v)\setminus\operatorname{Supp}D$ when evaluating a rational point.

Use the unrooted product-formula normalization: $|a|_v=(N\mathfrak p)^{-v_{\mathfrak p}(a)}$ at a finite place, $|\sigma(a)|$ at a real place, and $|\tau(a)|^2$ at a complex place. These absolute values and the local Weil functions have the relative number-field normalization. Let $S$ be a finite set of places of $k$ containing every archimedean place. For $x\in X(k)\setminus\operatorname{Supp}D$, define the proximity function, up to the bounded change caused by replacing the Weil function, by
$$m_S(D,x)=\frac1{[k:\mathbb Q]}\sum_{v\in S}\lambda_{D,v}(x).$$

The degree factor makes $m_S$ absolute, matching the absolute height-machine normalization below; it could equivalently be placed in every local Weil function by root-normalizing the absolute values. For an invertible sheaf $\mathcal L$ on $X$, a height $h_{\mathcal L}$ is any real-valued representative of the Weil-height class of $\mathcal L$ modulo bounded functions, evaluated on $X(\overline k)$. Put $K_X=\omega_{X/k}=\bigwedge^{\dim X}\Omega^1_{X/k}$ for the canonical line bundle. If $A$ is an ample invertible sheaf, write $h_A$ for a representative of its height class. The notation $\log^+u$ means $\log(\max\{1,u\})$ for real $u$.

## Definition references

[[def-number-field]]

[[def-place-of-a-global-field]]

[[thm-product-formula-for-number-fields]]

[[def-height-functions-modulo-bounded-functions]]

[[thm-weil-height-machine-functoriality-and-additivity]]

[[def-smooth-projective-dualizing-line-bundle-and-trace]]

[[def-cartier-divisor]]

[[def-ample-invertible-sheaf]]

## Facts & Assumptions

**Given:** AC; a number field $k$; a smooth projective geometrically integral $X/k$; a Cartier divisor $D$; a finite $S$ containing the archimedean places; and an invertible sheaf $\mathcal L$ on $X$.

[A1] AC is the axiom used by the projective height-machine supplier to construct height classes. ([[def-axiom-of-choice]], [[thm-weil-height-machine-functoriality-and-additivity]])

[F1] Real-valued functions modulo bounded functions form the quotient $\mathbb R^S/B(S)$, where two functions represent the same class exactly when their difference is bounded. ([[def-height-functions-modulo-bounded-functions]])

[F2] For a projective scheme, the height machine maps invertible sheaves to real-valued functions modulo bounded functions. ([[thm-weil-height-machine-functoriality-and-additivity]])
