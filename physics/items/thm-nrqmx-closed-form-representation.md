---
id: thm-nrqmx-closed-form-representation
kind: theorem
domain: mathematics
library: mathematics
title: Semibounded closed-form representation and perturbation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-closed-sectorial-form-and-its-associated-operator
  - def-nrqm-coulomb-closed-semibounded-forms
  - thm-riesz-representation-for-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-closed-sectorial-form-and-its-associated-operator: mathematical-premise
  def-nrqm-coulomb-closed-semibounded-forms: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Marcello Porta, Mathematical Quantum Theory, University of Tübingen
        lecture notes (2019)
      url: https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/quantumtheory/dateien/notes.pdf
      locator: "Section 4.4, Theorem 4.65 and its proof, printed pp.41-42: unique
        self-adjoint representation of a densely defined closed semibounded form
        and the represented operator domain."
    - title: Phan Thanh Nam, Functional Analysis II, lecture notes, Winter 2020-2021,
        Ludwig-Maximilians-Universität München
      url: https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf
      locator: "Chapter 2, §2.2, printed pp.14-16: Friedrichs extension and the
        semibounded quadratic-form domain; used as related form-method
        background."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $H$ be a complex Hilbert space, let $Q\subseteq H$ be a dense linear subspace, and let
$q:Q\times Q\to\mathbb C$ be a symmetric sesquilinear form, linear in its
first variable. Write $q[u]=q(u,u)$. Suppose that for some $c\ge0$,
$q[u]\ge-c\|u\|^2$ for every $u\in Q$, and that $Q$ is complete in the form
norm $\|u\|_{q,c}^2=q[u]+(c+1)\|u\|^2$. Then there is a unique self-adjoint
operator $H_q\ge-cI$ such that
$$D((H_q+cI)^{1/2})=Q,\qquad q(u,v)=\langle H_qu,v\rangle\quad(u\in D(H_q),\ v\in Q).$$
Equivalently, $D(H_q)$ consists exactly of those $u\in Q$ for which there is
$f\in H$ satisfying $q(u,v)=\langle f,v\rangle$ for all $v\in Q$, and then
$H_qu=f$. Under the $e^{tA}$ generator convention for associated forms, the
associated operator is $A=-H_q$. If $q_0$ is a densely defined closed symmetric
form with $q_0[u]\ge0$ and $v$ is a symmetric sesquilinear form on $Q(q_0)$
satisfying
$$|v[u,u]|\le a q_0[u]+b\|u\|^2\quad(u\in Q(q_0)),\qquad 0\le a<1,\ b\ge0,$$
then $q_0+v$ is closed and bounded below by $-b$ on the same domain. It has a
unique self-adjoint representing operator there. The form bound is not an
operator-relative bound.

## Statement references

[[def-nrqm-coulomb-closed-semibounded-forms]]

[[def-closed-sectorial-form-and-its-associated-operator]]

## Facts & Assumptions

**Given:** The Choice and Countable Choice axioms, a dense form domain $Q$ in
$H$, the symmetric sesquilinear form $q$, its lower bound $-c$, and completeness
in the shifted form norm.

[A1] The Axiom of Choice is the hypothesis used by the unbounded spectral
theorem and Borel functional calculus; Countable Choice is the hypothesis of
the Hilbert-space Riesz representation theorem and the closed-form interfaces
([[def-axiom-of-choice]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[thm-unbounded-borel-functional-calculus]], [[def-countable-choice]],
[[thm-riesz-representation-for-hilbert-space]]).

[F1] For a symmetric sesquilinear form, the shifted form norm is induced by the
Hermitian form $q(u,v)+(c+1)\langle u,v\rangle$; closedness means completeness in
that norm. The form-associated generator is defined with sign
$\langle Au,v\rangle=-q(u,v)$ ([[def-nrqm-coulomb-closed-semibounded-forms]],
[[def-closed-sectorial-form-and-its-associated-operator]]).

[F2] Every bounded linear functional on a Hilbert space has a unique Riesz
representing vector under Countable Choice ([[thm-riesz-representation-for-hilbert-space]]).

[F3] A self-adjoint operator has a projection-valued spectral measure, and
real Borel functions of it have their exact square-integrability domains and
are self-adjoint ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[thm-unbounded-borel-functional-calculus]]).

[F4] In a real or complex inner-product space,
$|\langle x,y\rangle|\le\|x\|\,\|y\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Given:** [A1] and the form data in the Statement. Use inner products linear
in the first variable throughout.

1.1 If $H=\{0\}$, density forces $Q=\{0\}$ and the zero operator is the unique self-adjoint representation; the perturbation conclusion is the same. Hence assume $H\ne\{0\}$. [given]

1.2 Put $\mathfrak a(u,v)=q(u,v)+(c+1)\langle u,v\rangle$ on $Q$. The lower bound gives $\mathfrak a[u]\ge\|u\|^2$, so $\mathfrak a$ is positive definite; its norm is exactly $\|\cdot\|_{q,c}$, hence $(Q,\mathfrak a)$ is a Hilbert space. The inclusion $J:Q\to H$ is injective, bounded with $\|J\|\le1$, and has dense range. [F1, given]

2.1 For each $f\in H$, Cauchy–Schwarz [F4] and $\|J\|\le1$ make $v\mapsto\langle Jv,f\rangle$ a bounded linear functional on $(Q,\mathfrak a)$. Apply [F2] and let $J^*f\in Q$ be its unique representing vector: $\mathfrak a(v,J^*f)=\langle Jv,f\rangle$ for every $v\in Q$. Uniqueness makes $f\mapsto J^*f$ linear. Define $R:=JJ^*:H\to H$. Taking $v=J^*f$ gives $\|J^*f\|_{q,c}^2=\langle Rf,f\rangle$, and $\|Rf\|\le\|J^*f\|_{q,c}$; therefore $\|J^*f\|_{q,c}\le\|f\|$ and $\|R\|\le1$. [A1, F2, F4, step 1.2, construct]

3.1 For $f,g\in H$, the defining identity and symmetry of $\mathfrak a$ give $\langle Rf,g\rangle=\mathfrak a(J^*f,J^*g)=\langle f,Rg\rangle$, while $\langle Rf,f\rangle=\|J^*f\|_{q,c}^2\ge0$; hence $R$ is bounded, positive, self-adjoint, and $R\le I$. If $Rf=0$, then $J^*f=0$, so $\langle Jv,f\rangle=0$ for dense $J(Q)$ and thus $f=0$; consequently $\ker R=\{0\}$ and $\operatorname{ran}R$ is dense. [step 2.1, given, algebra]

4.1 The bounded positive operator $R$ has a positive square root by [F3]. On $\operatorname{ran}R^{1/2}$ define $U_0(R^{1/2}f)=J^*f$. This is well-defined because $R^{1/2}$ is injective, and $\|J^*f\|_{q,c}^2=\langle Rf,f\rangle=\|R^{1/2}f\|^2$, so $U_0$ is an isometry. Both its domain and range are dense: the first because $\ker R^{1/2}=0$, the second because a vector in $Q$ orthogonal to all $J^*f$ has image under $J$ orthogonal to every $f\in H$ and is therefore zero. Thus $U_0$ extends to a unitary $U:H\to(Q,\mathfrak a)$; taking adjoints in $J^*=UR^{1/2}$ yields $J=R^{1/2}U^*$. Hence $J(Q)=\operatorname{ran}R^{1/2}$ and $\|u\|_{q,c}=\|R^{-1/2}Ju\|$ for every $u\in Q$. [step 2.1, step 3.1, F3, algebra]

5.1 By [F3], define $T=R^{-1}$ by the Borel function $s\mapsto s^{-1}$ on $s>0$ (its value at $0$ is immaterial because $\ker R=0$). Then $T$ is self-adjoint, $T\ge I$, $D(T)=\operatorname{ran}R$, and $D(T^{1/2})=\operatorname{ran}R^{1/2}$. Put $H_q=T-(c+1)I$. It is self-adjoint and $H_q\ge-cI$. Step 4.1 gives $D((H_q+cI)^{1/2})=D((T-I)^{1/2})=D(T^{1/2})=J(Q)$, since the spectral weights $s-1$ and $s$ on $[1,\infty)$ are integrable for exactly the same vectors. [step 3.1, step 4.1, F3, algebra]

6.1 The unitary $U^*:Q\to H$ satisfies $U^*u=R^{-1/2}Ju=T^{1/2}Ju$ by step 4.1. Therefore $\mathfrak a(u,v)=\langle T^{1/2}Ju,T^{1/2}Jv\rangle$ for all $u,v\in Q$. If $u\in D(T)$ and $v\in Q$, the spectral calculus gives $\langle T^{1/2}Ju,T^{1/2}Jv\rangle=\langle TJu,Jv\rangle$; subtracting $(c+1)\langle Ju,Jv\rangle$ proves $q(u,v)=\langle H_qu,Jv\rangle$. Conversely, if $q(u,v)=\langle g,Jv\rangle$ for every $v\in Q$, then $\mathfrak a(u,v)=\langle g+(c+1)Ju,Jv\rangle$, so the uniqueness in the Riesz construction gives $u=J^*(g+(c+1)Ju)$ and $Ju=R(g+(c+1)Ju)\in D(T)$; the representing vector is $g=H_qu$. This proves the stated operator domain. The resolvent $(H_q+(c+1)I)^{-1}=R$ is uniquely determined by the form's Riesz equation, so no other self-adjoint operator can represent $q$. [step 2.1, step 4.1, step 5.1, F2, F3]

7.1 Now let $q_0$ and $v$ satisfy the perturbation hypotheses, and choose $C>b+1$. Then $(1-a)q_0[u]+(C-b)\|u\|^2\le(q_0+v)[u]+C\|u\|^2\le(1+a)q_0[u]+(C+b)\|u\|^2$. Since $1-a>0$ and $C-b>1$, this shifted form norm is bounded above and below by positive multiples of the complete norm $q_0[u]+\|u\|^2$. Also $(q_0+v)[u]\ge-b\|u\|^2$. Set $N_C=(q_0+v)[u]+C\|u\|^2$ and $N_{b+1}=(q_0+v)[u]+(b+1)\|u\|^2$. Then $N_C\ge(C-b)\|u\|^2$ and $N_{b+1}=N_C-(C-b-1)\|u\|^2\ge N_C/(C-b)$, while $N_{b+1}\le N_C$. Thus the defining shift $b+1$ norm is equivalent and complete, so $q_0+v$ is closed with lower bound $-b$. Applying the representation argument in steps 1.2, 2.1, 3.1, 4.1, 5.1, and 6.1 with lower bound $-b$ gives its unique self-adjoint representing operator bounded below by $-b$. [given, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, algebra] ∎

## Remarks

The perturbation condition is a form bound. It does not assert operator-relative
boundedness on $D(H_0)$, and Kato–Rellich is not used to prove the form-closure
claim.
