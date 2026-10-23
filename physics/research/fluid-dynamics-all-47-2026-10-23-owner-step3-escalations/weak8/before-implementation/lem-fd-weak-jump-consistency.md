---
id: lem-fd-weak-jump-consistency
kind: lemma
title: Smooth weak equivalence and moving jump residual
status: draft
origin: pipeline
proof_strategy: direct
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-conservative-weak-form
dependency_roles:
  def-fd-conservative-weak-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Partial Differential Equations: Lecture Notes"
      url: "https://www.math.uchicago.edu/~luis/pdenotes.pdf"
      locator: "Chapter 6, §§6.2.1–6.2.2 through Example 6.2.2, printed pp. 100–104."
    - title: "Introduction to Partial Differential Equations for Engineering Applications"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "Part VII, §24.4.2, Theorem 24.4, printed pp. 181–182."
verification:
  precheck: pass
physical_scope: null
empirical_premises: []
---

## Statement

Let $T>0$, let $\Omega\subseteq\mathbb R^3$ be open, and let $m\ge1$ be an integer. Let $J\subset(0,T)$ and $D\subset\mathbb R^2$ be open, and let $h\in C^1(J\times D)$ have graph $\Gamma=\{(t,x',x_3):(t,x')\in J\times D,\ x_3=h(t,x')\}$ contained in an open patch $\mathcal O\subset (J\times D\times\mathbb R)\cap((0,T)\times\Omega)$. Here $x=(x',x_3)$ and all space-time points in this lemma use time-first coordinates $(t,x)$; the coordinate permutation $(t,x)\mapsto(x,t)$ identifies these fields and tests with the spatial-first domains in the conservative weak-form definition. The minus and plus sides are $\mathcal O^-=\mathcal O\cap\{x_3<h(t,x')\}$ and $\mathcal O^+=\mathcal O\cap\{x_3>h(t,x')\}$. Let $U^\pm,S^\pm$ be $\mathbb R^m$-valued and $F^\pm$ be $\mathbb R^{m\times3}$-valued fields that are $C^1$ on their respective sides and admit $C^1$ one-sided extensions to every relatively compact part of $\Gamma$. For a matrix flux $F$, $F_j\in\mathbb R^m$ denotes its $j$th spatial column and $(\operatorname{div}_xF)_a=\sum_{j=1}^3\partial_{x_j}F_{aj}$. For any one-sided trace $G$, write $[G]=G^+-G^-$. Put $\lambda=\sqrt{1+|\nabla_{x'}h|^2}$, and define the unit normal from minus to plus and its signed normal speed by
$$n=\frac{(-\nabla_{x'}h,1)}{\lambda},\qquad V_n=\frac{\partial_t h}{\lambda}.$$
Interpret $U,F,S$ as the ordinary locally integrable piecewise functions defined by their side values and traces; no singular measure supported on $\Gamma$ is added to $S$. The interior weak identity for $\partial_tU+\operatorname{div}_xF=S$ is the test identity of the conservative weak-form definition for every $\phi\in C_c^1(\mathcal O;\mathbb R^m)$. It holds if and only if $\partial_tU^\pm+\operatorname{div}_xF^\pm=S^\pm$ on both sides and
$$[F]n-V_n[U]=0$$
on $\Gamma$. The initial-data term in the weak initial form is independent; this interior jump condition neither asserts nor requires a strong trace at $t=0$.

For scalar fields $H^\pm,R^\pm$ and vector fluxes $G^\pm$ with the same piecewise $C^1$ regularity, the interior weak inequality $\partial_tH+\operatorname{div}_xG\ge R$ means
$$\int_{\mathcal O}\bigl(H\,\partial_t\psi+G\cdot\nabla_x\psi+R\psi\bigr)\,dx\,dt\le0$$
for every nonnegative $\psi\in C_c^1(\mathcal O)$. It holds if and only if $\partial_tH^\pm+\operatorname{div}_xG^\pm\ge R^\pm$ on both sides and
$$[G]\cdot n-V_n[H]\ge0$$
on $\Gamma$. These are local equivalences for prescribed piecewise-smooth fields, not existence or uniqueness theorems for nonlinear systems. The fields are abstract mathematical variables with no assigned physical units or constitutive model.

## Statement references

[[def-fd-conservative-weak-form]]

[Silvestre, *Partial Differential Equations: Lecture Notes*, Chapter 6 §§6.2.1–6.2.2](https://www.math.uchicago.edu/~luis/pdenotes.pdf).

[Guermond, *Introduction to Partial Differential Equations for Engineering Applications*, Part VII §24.4.2](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf).

## Facts & Assumptions

**Given:** Use the conservative weak identity and weak inequality as defined on the A page. The interface is strictly interior in time and space, its graph is $C^1$, and the one-sided fields and traces have the stated regularity.

[F1] [[def-fd-conservative-weak-form]]: for an interior test, the system identity is $\int(U\cdot\partial_t\phi+F:\nabla_x\phi+S\cdot\phi)=0$; for a scalar inequality $\partial_tH+\operatorname{div}Q\ge R$, its weak integral is $\le0$.

[A1] The piecewise $C^1$ fields have no additional measure-valued source supported on $\Gamma$; all interface terms come from the jump in the ordinary one-sided traces.

## Proof

1.1 For a test $\phi$ supported in $\mathcal O$, apply the product rule to the space-time current $(U^\pm,F_1^\pm,F_2^\pm,F_3^\pm)$ separately on $\mathcal O^-$ and $\mathcal O^+$. Coordinatewise integration by parts in $t,x_1,x_2,x_3$ gives $\int_{\mathcal O}(U\cdot\partial_t\phi+F:\nabla_x\phi+S\cdot\phi)=-\int_{\mathcal O^-}W^-\cdot\phi-\int_{\mathcal O^+}W^+\cdot\phi-\int_{J\times D}K_{\rm graph}\cdot\phi(t,x',h(t,x'))\,dx'\,dt$, where $W^\pm=\partial_tU^\pm+\operatorname{div}_xF^\pm-S^\pm$ and $K_{\rm graph}=[F_3]-\partial_th[U]-\nabla_{x'}h\cdot[F_{1,2}]$. Compact support removes all outer-boundary terms; the remaining graph term is the difference of the two side conormal fluxes. [given, F1, A1, construct, algebra]

1.2 The unnormalised space-time conormal from minus to plus is $(-\partial_th,-\nabla_{x'}h,1)$. Its contraction with the jump current equals $K_{\rm graph}=[F_3]-\partial_th[U]-\nabla_{x'}h\cdot[F_{1,2}]=\lambda([F]\cdot n-V_n[U])$. Since $\lambda>0$, the graph coefficient vanishes exactly when $[F]\cdot n-V_n[U]=0$, and has the same sign as the scalar entropy jump coefficient. [given, algebra]

2.1 If the weak identity holds, choose tests supported wholly inside either side in step 1.1. Each continuous component of $W^\pm$ must vanish: a nonzero value would have a fixed strict sign on a small ball and contradict the identity for a nonnegative $C^1$ bump there. With these bulk terms zero, step 1.1 gives zero integral of $K_{\rm graph}$ against every trace of a test. Any compactly supported $C^1$ graph test $\zeta(t,x')$ extends to the patch as $\phi(t,x',x_3)=\zeta(t,x')\eta(x_3-h(t,x'))$, where $\eta$ is a $C^1$ cutoff with $\eta(0)=1$ and sufficiently small support. Such a uniform tube lies in $\mathcal O$ because the graph over $\operatorname{supp}\zeta$ is compact in this open patch. A nonzero component of continuous $K_{\rm graph}$ would have a fixed sign on a small graph patch and contradict the identity. Hence $W^\pm=0$ and $K_{\rm graph}=0$. Conversely, these equalities make the weak integral zero by step 1.1, and step 1.2 gives the stated jump condition. [step 1.1, step 1.2, given, F1, A1]

3.1 For the scalar inequality, step 1.1 gives the weak integral as the negative of the bulk integrals of $g^\pm=\partial_tH^\pm+\operatorname{div}_xG^\pm-R^\pm$ and the negative graph integral with coefficient $K_H=[G_3]-\partial_th[H]-\nabla_{x'}h\cdot[G_{1,2}]$. If both bulk residuals and $K_H$ are nonnegative, the weak integral is nonpositive for every nonnegative test. Conversely, a negative bulk residual at a point admits a nonnegative bump supported on that side and violates the weak inequality. If $K_H<0$ at a graph point, continuity gives a smaller graph patch where $K_H$ is bounded above by a negative constant. Choose a nonnegative test with fixed positive trace on that patch and support in a tube of width $\varepsilon$ about the graph. The negative interface contribution to the weak integral is positive and independent of $\varepsilon$, while the bounded bulk terms have magnitude $O(\varepsilon)$; for small enough $\varepsilon$ the weak integral is positive, a contradiction. Hence both the side inequalities and $K_H\ge0$ are necessary. Step 1.2 shows $K_H=\lambda([G]\cdot n-V_n[H])$, so the stated jump sign is equivalent. [step 1.1, step 1.2, step 2.1, given, F1, A1] ∎
