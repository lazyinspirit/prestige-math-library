---
id: def-semilinear-galois-action-on-a-scalar-extended-algebra
kind: definition
title: Semilinear Galois actions, twists, and split central idempotents
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: §3.8 opening, pp.132–133; §3.2, pp.117–118
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Definition 2.2.7 and Remark 2.2.8, pp.28–29
status: draft
origin: pipeline
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["def-finite-galois-extension-and-galois-group", "thm-tensor-product-of-algebras-over-a-commutative-ring", "def-restriction-and-extension-of-scalars", "def-semisimple-ring", "thm-bimodule-actions-induced-on-tensor-products"]
---

## Definition

Let $E/F$ be a finite Galois extension with group $\Gamma$ as in
[[def-finite-galois-extension-and-galois-group]], and let $A$ be a finite-dimensional
unital $F$-algebra. Put $B=E\otimes_F A$. Its multiplication and unit are
$(e\otimes a)(f\otimes a')=ef\otimes aa'$ and $1\otimes1$, by
[[thm-tensor-product-of-algebras-over-a-commutative-ring]]. Define
$\sigma_B(e\otimes a)=\sigma(e)\otimes a$. This is well-defined because
$\sigma$ fixes $F$; the displayed multiplication shows it is a semilinear algebra
automorphism, with inverse $(\sigma^{-1})_B$.

A **semilinear Galois action** on an $E$-space $W$ consists of additive maps
$T_\sigma:W\to W$ such that, for every $e\in E$, $w\in W$, and
$\sigma,\tau\in\Gamma$,
$$T_\sigma(ew)=\sigma(e)T_\sigma(w),\qquad T_1=\operatorname{id},\qquad T_\sigma T_\tau=T_{\sigma\tau}.$$
For a $B$-module it is **compatible** if
$T_\sigma(bw)=\sigma_B(b)T_\sigma(w)$ for all $b,w$.
Write $W^\Gamma=\{w:T_\sigma(w)=w\text{ for all }\sigma\}$.

For a left $B$-module $W$, its **twist** ${}^\sigma W$ has the same underlying
additive group, with action
$$b\star w=\sigma_B^{-1}(b)w.$$
In particular its $E$-scalar structure changes: $e\star w=\sigma^{-1}(e)w$.
Applying this formula twice gives
$\tau_B^{-1}\sigma_B^{-1}(b)=(\sigma\tau)_B^{-1}(b)$, hence
${}^\sigma({}^\tau W)={} ^{\sigma\tau}W$.
If $(w_j)$ is an original $E$-basis, it is also a basis in the twisted scalar
structure. An original equation $aw_j=\sum_i r_{ij}w_i$ for $a\in A$
becomes $aw_j=\sum_i\sigma(r_{ij})\star w_i$. Thus the transported matrices
are $\sigma(\rho(a))$. Twisting and its inverse preserve submodules and
isomorphisms, so they preserve simplicity. The **decomposition group** of a
simple class is $\Gamma_W=\{\sigma:{}^\sigma W\cong W\}$, its stabilizer.

A **central idempotent** is $c\in Z(B)$ with $c^2=c$. It is **primitive** if
$c\ne0$ and $c$ is not a sum of two nonzero orthogonal central idempotents.
An algebra is **split semisimple** over $E$ if it is a finite product of
$M_n(E)$ with $n\ge1$; the empty product means the zero algebra. This is
compatible with the zero-ring convention in [[def-semisimple-ring]]. A central
idempotent **supports** a simple module when it acts as the identity on it.

For a left $A$-module $S$, extend scalars along the field map $F\to E$ as in
[[def-restriction-and-extension-of-scalars]], and give $E\otimes_F S$ the action
$$(e\otimes a)(f\otimes s)=ef\otimes as.$$
The relations $(efr)\otimes as=ef\otimes a(rs)=ef\otimes(ra)s$ for $r\in F$
verify balancing in both tensor factors; additivity extends this rule to sums.
Associativity follows from $a(a's)=(aa')s$, and $1\otimes1$ acts identically.
The outer $E$-action is the one in [[thm-bimodule-actions-induced-on-tensor-products]].
This construction uses tensors over the central field $F$, even when $A$ is
noncommutative. Its canonical compatible action is
$T_\sigma(e\otimes s)=\sigma(e)\otimes s$.

## Remarks

Source conventions: Zheng, §3.8, pp.132–133, defines semilinear descent.
Wiese, Definition 2.2.7 and Remark 2.2.8, pp.28–29, use inverse pullback.
The scalar structure and transported-basis calculation above make that
convention explicit; the matrix formula here is derived, rather than adopting
the conflicting inverse-matrix wording in Remark 2.2.8(iv).
