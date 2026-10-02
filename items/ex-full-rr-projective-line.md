---
id: ex-full-rr-projective-line
kind: example
title: "The full Riemann-Roch theorem on the projective line, in every degree"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-canonical-degree-two-g-minus-two
  - cor-picard-projective-line-integers
  - def-canonical-line-bundle-curve
  - def-degree-divisor-proper-curve
  - def-index-speciality-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - def-twisting-sheaf-proj
  - lem-projective-line-divisors-classified-by-degree
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-full-riemann-roch-divisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  audited: 2026-10-02
  precheck: pass

---

## Example

Assume the Axiom of Choice; it supplies Dependent Choice through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C=\mathbb P^1_k$ with point at infinity $\infty=[0:1]$,
and let $D$ be a divisor on $C$ of degree $d=\deg_kD$.

Every divisor on $C$ is linearly equivalent to $d[\infty]$, and
$\mathcal O_C([\infty])\cong\mathcal O_C(1)$ with $[\mathcal O(1)]$ mapping to
$1$ under $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$. Hence
$\mathcal O_C(D)\cong\mathcal O_C(d)$ and
$$\ell(D)=h^0(C,\mathcal O(d))=\begin{cases}d+1,&d\ge0,\\ 0,&d<0,\end{cases}$$
because $H^0(\mathbb P^1_k,\mathcal O(d))$ is the degree-$d$ part of
$k[x_0,x_1]$ for $d\ge0$ and vanishes for $d<0$.

The canonical divisor satisfies $K_C\sim-2[\infty]$ and
$\deg_kK_C=2g-2=-2$ with $g=0$, so $K_C-D\sim(-2-d)[\infty]$ and
$$\ell(K_C-D)=h^0(C,\mathcal O(-d-2))=\begin{cases}-d-1,&d\le-2,\\ 0,&d\ge-1.\end{cases}$$

Subtracting,
$$\ell(D)-\ell(K_C-D)=\begin{cases}(d+1)-0=d+1,&d\ge0,\\ 0-0=0=d+1,&d=-1,\\ 0-(-d-1)=d+1,&d\le-2,\end{cases}$$
so the full Riemann-Roch identity
$\ell(D)-\ell(K_C-D)=\deg_k(D)+1-g$ holds on the projective line for every
integer degree, including the negative range. The special divisors are exactly
those of degree $d\le-2$, with index of speciality $i(D)=\ell(K_C-D)=-d-1$,
while the divisors of degree $d\ge-1$ are nonspecial with $i(D)=0$.

## Facts & Assumptions

**Given:** the Axiom of Choice and its consequence Dependent Choice; a field
$k$, the projective line $C=\mathbb P^1_k$ with point at infinity $\infty$,
and a divisor $D$ of degree $d=\deg_kD$.

[F1] Every divisor on $\mathbb P^1_k$ is linearly equivalent to
$(\deg_kD)[\infty]$, and the associated invertible sheaf of $[\infty]$ is
$\mathcal O(1)$; the divisor and invertible-sheaf dictionaries agree on
$\mathbb P^1_k$. ([[lem-projective-line-divisors-classified-by-degree]],
[[thm-cartier-weil-divisors-curves-agree]],
[[def-invertible-sheaf-of-cartier-divisor]])

[F2] $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$, the class of
$\mathcal O(1)$ corresponding to $1$; hence $\mathcal O(D)\cong\mathcal O(d)$
for $D$ of degree $d$, and $\ell(D)=h^0(C,\mathcal O(D))$ is the dimension of
the Riemann-Roch space of $D$.
([[cor-picard-projective-line-integers]], [[def-little-l-divisor]])

[F3] On $\mathbb P^1_k$, $H^0(\mathbb P^1_k,\mathcal O(m))$ is the degree-$m$
part of $k[x_0,x_1]$, of dimension $m+1$ for $m\ge0$, and is $0$ for $m<0$;
the twisting sheaves $\mathcal O(m)$ are the ones attached to the standard
charts. ([[thm-cohomology-projective-space-twisting-sheaves]],
[[def-twisting-sheaf-proj]])

[F4] For a smooth proper geometrically integral curve of genus $g$, the
canonical divisor has degree $2g-2$; on $\mathbb P^1_k$ the genus is $0$, so
$\deg_kK_C=-2$, and $\mathcal O(K_C)=\omega_C$ with
$K_C\sim-2[\infty]$ because every degree-$(-2)$ divisor is linearly
equivalent to $-2[\infty]$.
([[cor-canonical-degree-two-g-minus-two]], [[def-canonical-line-bundle-curve]],
[[def-degree-divisor-proper-curve]], [F1])

[F5] The full Riemann-Roch theorem states
$\ell(D)-\ell(K_C-D)=\deg_k(D)+1-g$ for a divisor $D$ on a smooth proper
geometrically integral curve of genus $g$ over an arbitrary field, and the
index of speciality is $i(D)=\ell(K_C-D)$, with $D$ nonspecial when
$i(D)=0$. ([[thm-full-riemann-roch-divisor]],
[[def-index-speciality-divisor]], [[def-nonspecial-divisor]])

[F6] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F7] In ZF, the Axiom of Choice implies Dependent Choice; this supplies the
Dependent Choice premise of the Cartier-to-Weil divisor dictionary used in
[F1] and [F4]. ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]])



## Verification

**Proof technique:** reduce an arbitrary divisor to the model $\mathcal O(d)$
and read off both dimensions from the twisting-sheaf cohomology.

1.1 By [F1] and [F2], $D\sim d[\infty]$, so $\mathcal O_C(D)\cong\mathcal O(d)$ and $\ell(D)=h^0(C,\mathcal O(d))$. [F1, F2]

2.1 By [F3] applied to $m=d$ and $m=-d-2$, $\ell(D)=d+1$ for $d\ge0$ and $\ell(D)=0$ for $d<0$, while [F4] gives $K_C-D\sim(-d-2)[\infty]$ and hence $\ell(K_C-D)=h^0(C,\mathcal O(-d-2))$ equals $-d-1$ when $-d-2\ge0$ (that is $d\le-2$) and $0$ when $d\ge-1$; the case $d=-1$ is the boundary $m=-1<0$, where the section space vanishes. [F1, F3, F4, step 1.1]

3.1 Taking the three ranges separately: for $d\ge0$ the difference is $(d+1)-0=d+1$; for $d=-1$ it is $0-0=0=d+1$; for $d\le-2$ it is $0-(-d-1)=d+1$. In every case $\ell(D)-\ell(K_C-D)=d+1=\deg_k(D)+1-g$ because $g=0$ by [F4], which is exactly the Riemann-Roch identity of [F5]. [F4, F5, step 2.1, algebra]

3.2 The index of speciality of [F5] is $i(D)=\ell(K_C-D)$, which is $-d-1>0$ precisely for $d\le-2$ and $0$ for $d\ge-1$; hence the special divisors of $\mathbb P^1_k$ are exactly the divisors of degree at most $-2$, and all divisors of degree at least $-1$ are nonspecial. [F5, step 2.1]

4.1 The Axiom of Choice is used through the divisor dictionary and the full Riemann-Roch supplier; [F7] supplies the Dependent Choice premise required by the Cartier-to-Weil part of that dictionary. [F6, F7, F1, F4, F5, step 3.2] ∎
