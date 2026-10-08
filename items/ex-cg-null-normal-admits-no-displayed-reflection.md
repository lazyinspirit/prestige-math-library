---
id: ex-cg-null-normal-admits-no-displayed-reflection
kind: example
title: "A null normal admits no reflection of the displayed form"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-real-coxeter-form-and-reflection, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-algebraic-dual-and-linear-functional, def-kernel-and-image-of-a-linear-map, def-linear-map, def-function-space, lem-standard-basis-of-f-n, thm-reals-ordered-field, lem-vector-space-elementary-consequences, def-bilinear-symmetric-skew-and-alternating-forms]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "\u00a76.12, printed pp. 116\u2013117: the reflection (6.33) is defined only for the basis vectors $e_i$, whose $B_M$-norm is $1$; Appendix D.1, printed p. 440, on $e_i(\\xi_i)=1$ as the normalisation making (D.1) a reflection"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed p. 93: (4.10)\u2013(4.14), where reflection normals are the basis vectors with $(\\alpha_s\\mid\\alpha_s)=1$, so null normals never occur"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $B$ be a symmetric bilinear form on a real vector space $V$ and let $a\in V$ with $a\ne0$ and $B(a,a)=0$. Then $a\in\ker B(-,a)$, and there is **no** linear map $r:V\to V$ with $r^2=\mathrm{id}_V$, $r(a)=-a$ and $r(v)=v$ for every $v\in\ker B(-,a)$: since $a\in\ker B(-,a)$, such an $r$ would satisfy $r(a)=a$, forcing $-a=a$ and hence $2a=0$, contrary to $a\ne0$ in a real vector space ([[thm-reals-ordered-field]]). In particular the displayed formula $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ of [[def-cg-real-coxeter-form-and-reflection]] cannot be extended to normals with $B(a,a)=0$: the hypothesis $B(a,a)\ne0$ is not merely a convenience of the division. For the two instantiations in $\mathbb R^2$ below, label the coordinates by $1,2$: if $x$ is the function on $\{0,1\}$ of [[def-function-space]], write $x_1:=x(0)$, $x_2:=x(1)$, and let $e_1,e_2$ denote the unit vectors at $0,1$, respectively ([[lem-standard-basis-of-f-n]]). The instantiations are:

(i) Lorentzian plane $B(x,y)=x_1y_1-x_2y_2$ and $a=e_1+e_2$: $B(a,a)=0$, while $\ker B(-,a)=\mathbb R(e_1+e_2)\ni a$; here $a\notin\operatorname{rad}(B)$, since $B(e_1,a)=1\ne0$ ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

(ii) Radical plane $B(x,y)=x_1y_1$ and $a=e_2$: $B(a,a)=0$ and $\ker B(-,a)=V$, because $e_2$ lies in the radical; in this case the only map fixing $\ker B(-,a)=V$ pointwise is the identity, which does not send $a$ to $-a$.

## Facts & Assumptions

**Given:** a real vector space $V$, a symmetric bilinear form $B$ on $V$, and $a\in V$ with $a\ne0$ and $B(a,a)=0$.

[F1] A bilinear form on $V$ is a function $V\times V\to\mathbb R$ linear in each variable separately, and it is symmetric when $B(u,v)=B(v,u)$ for all $u,v\in V$; the set $\ker B(-,a)=\{v\in V:B(v,a)=0\}$ is the kernel of the linear functional $v\mapsto B(v,a)$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-kernel-and-image-of-a-linear-map]], [[def-linear-map]]).

[F2] In any vector space over a field, $\lambda v=0_V$ forces $\lambda=0_F$ or $v=0_V$; and in the totally ordered field $\mathbb R$ one has $1>0$, so $2=1+1>0$ and in particular $2\ne0$ ([[lem-vector-space-elementary-consequences]], [[thm-reals-ordered-field]]).

[F3] The displayed reflection formula $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ of the Statement is defined only for $B(a,a)\ne0$; the symbol $r_a$ is not defined when $B(a,a)=0$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F4] The left radical is $\operatorname{rad}_L(B)=\{u:B(u,v)=0\text{ for every }v\in V\}$, and when $B$ is symmetric $u$ lies in it exactly when the functional $B(-,u)$ is the zero functional ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F5] $\mathbb R^2$ is the function space on $\{0,1\}$; relabel its coordinates by $x_1=x(0)$, $x_2=x(1)$ and its standard unit vectors by $e_1,e_2$, respectively. Thus $x=x_1e_1+x_2e_2$ ([[def-function-space]], [[lem-standard-basis-of-f-n]]).

## Verification

1.1 The hypothesis $B(a,a)=0$ says exactly that the value of the functional $v\mapsto B(v,a)$ at $v=a$ is zero, so $a\in\ker B(-,a)$. [given, F1]

1.2 Suppose $r:V\to V$ were linear with $r^2=\mathrm{id}_V$, $r(a)=-a$ and $r(v)=v$ for every $v\in\ker B(-,a)$. Since $B(a,a)=0$ gives $a\in\ker B(-,a)$, the fixed-kernel clause would give $r(a)=a$, while the normal clause gives $r(a)=-a$; hence $-a=a$, that is $2a=0$. Since $a\ne0$, [F2] forces $2=0$ in $\mathbb R$, contradicting $2\ne0$; therefore no such $r$ exists, and with a null normal the three displayed requirements are already inconsistent before any question of a formula arises. [given, F1, F2, algebra]

1.3 Lorentzian instantiation. Take $V=\mathbb R^2$ with basis $e_1,e_2$ and $B(x,y)=x_1y_1-x_2y_2$, so that $B(e_1,e_1)=1$, $B(e_2,e_2)=-1$ and $B(e_1,e_2)=0$; let $a=e_1+e_2$. Bilinearity gives $B(a,a)=B(e_1,e_1)+2B(e_1,e_2)+B(e_2,e_2)=1-1=0$, and $B(x,a)=x_1-x_2$, so $\ker B(-,a)=\{x:x_1=x_2\}=\mathbb R(e_1+e_2)\ni a$. Here $a$ is not in the radical: $B(e_1,a)=1\ne0$, so $B(-,a)$ is not the zero functional. Thus this $a$ satisfies the general hypotheses with a nonzero functional $B(-,a)$. [given, F1, F4, F5, algebra]

1.4 Radical-plane instantiation. Take $V=\mathbb R^2$ with basis $e_1,e_2$ and $B(x,y)=x_1y_1$, and let $a=e_2$. Then $B(a,a)=0$, and $B(x,e_2)=x_1\cdot0=0$ for every $x$, so $B(-,e_2)$ is the zero functional and $\ker B(-,e_2)=V$; in particular $e_2$ lies in the radical. A map $r$ fixing $\ker B(-,e_2)=V$ pointwise is the identity, and the identity does not send $a$ to $-a$, since $a\ne0$ forces $2a\ne0$ by [F2], that is $a\ne-a$. [given, F1, F2, F4, F5, algebra]

2.1 Conclusion. Step 1.2 proves the general negative statement: for every $a\ne0$ with $B(a,a)=0$ there is no linear $r$ with $r^2=\mathrm{id}_V$, $r(a)=-a$ and $r$ the identity on $\ker B(-,a)$. Steps 1.3 and 1.4 realize the hypothesis in the two displayed planes, one with $a\notin\operatorname{rad}_L(B)$ and $a\in\ker B(-,a)$ of dimension $1$, the other with $\ker B(-,a)=V$. Since the formula of [F3] is defined only for $B(a,a)\ne0$, the condition $B(a,a)\ne0$ is not a removable convenience of the division: the properties required of a reflection with normal $a$ are unsatisfiable when $B(a,a)=0$. [given, F3, step 1.2, step 1.3, step 1.4] ∎
