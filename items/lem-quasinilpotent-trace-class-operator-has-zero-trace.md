---
id: lem-quasinilpotent-trace-class-operator-has-zero-trace
kind: lemma
title: "A quasinilpotent trace-class operator has zero trace"
status: draft
origin: pipeline
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-axiom-of-choice
  - def-hilbert-space
  - def-natural-logarithm
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-trace-class-operator
  - lem-complex-conjugation-and-modulus-laws
  - lem-fredholm-determinant-trace-norm-continuity-and-growth
  - lem-fredholm-determinant-zeros-and-algebraic-multiplicities
  - lem-separable-trace-class-determinant-construction
  - cor-cauchy-theorem-convex-domain
  - cor-complex-power-series-sums-are-analytic
  - cor-complex-power-series-sums-have-derivatives-of-all-orders
  - thm-path-independence-and-complex-primitive-criterion
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-boundary-maximum-modulus-principle
  - thm-holomorphic-if-and-only-if-analytic
  - thm-liouville-bounded-entire-function
  - thm-zero-complex-derivative-on-a-domain-implies-constant
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-natural-logarithm-laws
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4.4, Theorem 3.4.5 and proof of Theorem 3.4.7, printed pp. 40–42 (PDF pp. 49–51); comparison only"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice. Let $H$ be a separable complex Hilbert space and
let $Q:H\to H$ be trace class with $\sigma(Q)\subseteq\{0\}$. Then
$$\operatorname{tr}(Q)=0\qquad\text{and}\qquad D_Q(z)=1\quad(z\in\mathbb C),$$
where $D_Q$ is the locally constructed determinant.

## Facts & Assumptions

**Given:** AC; a separable complex Hilbert space $H$; and a trace-class
operator $Q:H\to H$ whose spectrum is contained in $\{0\}$.

[A1] AC selects from every family of nonempty sets
([[def-axiom-of-choice]]).

[A2] A complex Hilbert space is a Banach space in its induced norm
([[def-hilbert-space]]).

[A3] A trace-class operator is a compact bounded operator
([[def-trace-class-operator]]).

[A4] The spectrum is the complement of the resolvent set
([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[L1] A scalar is in the resolvent set exactly when $\lambda I-Q$ is bijective
with a bounded inverse ([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A5] For trace-class $T$ on a separable complex Hilbert space,
$$D_T(z)=0\quad\Longleftrightarrow\quad I+zT\text{ is not boundedly invertible}$$
([[lem-fredholm-determinant-zeros-and-algebraic-multiplicities]]).

[A6] The local exterior-trace series defines an entire determinant
([[lem-separable-trace-class-determinant-construction]]).

[L2] It satisfies $D_T(0)=1$ and $D_T'(0)=\operatorname{tr}(T)$
([[lem-separable-trace-class-determinant-construction]]).

[A7] For bounded finite-rank $F$ and finite-dimensional invariant $E$ with
$\operatorname{ran}F\subseteq E$,
$$D_F(z)=\det_E\bigl(I_E+z(F|_E)\bigr),$$
including the zero-dimensional case ([[lem-separable-trace-class-determinant-construction]]).

[A8] For every $\varepsilon>0$ there is $C_\varepsilon\ge0$ such that
$$|D_T(z)|\le C_\varepsilon e^{\varepsilon|z|}\qquad(z\in\mathbb C)$$
([[lem-fredholm-determinant-trace-norm-continuity-and-growth]]).

[A10] For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$
([[def-natural-logarithm]]).

[A11] The real logarithm is strictly increasing
([[thm-natural-logarithm-laws]]).

[L5] For positive $x,y$, $\log(xy)=\log x+\log y$
([[thm-natural-logarithm-laws]]).

[A12] For real $x,y$,
$$|\exp(x+iy)|=e^x$$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[A13] Complex conjugation is involutive
([[lem-complex-conjugation-and-modulus-laws]]).

[L4] $a\overline a=|a|^2$ and the modulus is nonnegative
([[lem-complex-conjugation-and-modulus-laws]]); applying this also to
$\overline a$ gives $|\overline a|=|a|$.

[A14] AC implies DC and hence Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]); this supplies
the choice assumptions used by the trace-class and determinant inputs.

**Source audit:** Kostenko, *Trace Ideals with Applications*, §3.4.4,
Theorem 3.4.5 and the proof of Theorem 3.4.7 (printed pp. 40–42; PDF
pp. 49–51) were read in full. The displayed proof of the spectral product and
trace identity invokes the preceding Hadamard factorization theorem. This item
does not use that factorization or the later library lemma on zero-free entire
functions: steps 3.1–6.1 give the needed logarithm, disk estimate and Liouville
argument locally. The cited source was a comparison, not a premise of this
proof.

## Proof

**Proof technique:** direct.

1.1 Let $z\ne0$ and set $\lambda=-1/z$. The spectral hypothesis gives $\lambda\notin\sigma(Q)$; [A2] and [A3] put $Q$ in the bounded-operator spectrum setting. By [A4, L1], $\lambda I-Q$ has a bounded inverse, and $I+zQ=-z(\lambda I-Q)$ is boundedly invertible. The local zero criterion [A5] gives $D_Q(z)\ne0$. [A2, A3, A4, L1, A5, algebra]

2.1 At $z=0$, [L2] gives $D_Q(0)=1$. Thus [A5] and step 1.1 make $D_Q$ zero-free on $\mathbb C$, while [A6] makes it entire. [A5, A6, L2, step 1.1]

3.1 Put $f=D_Q$. The quotient $f'/f$ is entire because $f$ is entire and zero-free, using the local power-series and quotient rules ([[cor-complex-power-series-sums-are-analytic]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]], [[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]], [[thm-holomorphic-if-and-only-if-analytic]]). Cauchy's theorem on the convex plane gives a primitive $h$ of $f'/f$; subtract a constant so that $h(0)=0$ ([[cor-cauchy-theorem-convex-domain]], [[thm-path-independence-and-complex-primitive-criterion]]). The product and chain rules, together with $(e^{-h})'=-h'e^{-h}$, show $(fe^{-h})'=0$ ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]], [[thm-complex-exponential-is-entire-with-derivative-itself]]). Hence $fe^{-h}=f(0)=1$ and $f=e^h$ ([[thm-zero-complex-derivative-on-a-domain-implies-constant]], [[thm-complex-exponential-addition-and-real-extension]]). [A6, L2, step 2.1]

4.1 For every $z$, [A8] with $\varepsilon=1$ gives $|f(z)|\le C_1e^{|z|}$ for some $C_1\ge1$, since $f(0)=1$. The exponential modulus formula [A12] gives $e^{\operatorname{Re}h(z)}\le C_1e^{|z|}$; [A10, A11] then imply $\operatorname{Re}h(z)\le A+|z|$, where $A=\log C_1\ge0$. [A8, A10, A11, A12, step 3.1]

5.1 We prove the required disk estimate. Fix $w\ne0$ and $0<t<1$, let $R=|w|/t$ and $K=A+R+1$. For $|\zeta|<1$, set $u=h(R\zeta)$ and $G(\zeta)=u/(2K-u)$. The bound from step 4.1 gives $\operatorname{Re}u\le A+R$, so $K-\operatorname{Re}u\ge1$ and
$$|2K-u|^2-|u|^2=4K(K-\operatorname{Re}u)>0.$$
Thus $G$ is holomorphic, $G(0)=0$, and $|G|<1$. The local power series of $G$ shows that $G(\zeta)/\zeta$ extends holomorphically through zero. On every circle $|\zeta|=r<1$, the maximum-modulus principle bounds this quotient by $1/r$; letting $r\uparrow1$ gives $|G(\zeta)|\le|\zeta|$ ([[cor-complex-power-series-sums-are-analytic]], [[thm-boundary-maximum-modulus-principle]]). Since $|G|=|u|/|2K-u|$, this implies $|u|\le|\zeta|(2K+|u|)$ and hence $|u|\le2K|\zeta|/(1-|\zeta|)$. Take $\zeta=tw/|w|$, so $R\zeta=w$ and $|\zeta|=t$. Therefore
$$|h(w)|\le\frac{2K t}{1-t}=\frac{2t(A+1)+2|w|}{1-t}.$$ 
Letting $t\downarrow0$ gives $|h(w)|\le2|w|$; it also holds at $w=0$ because $h(0)=0$. [step 4.1, construct]

6.1 The quotient $q(z)=h(z)/z$ extends to an entire function by the local power series of $h$, with $q(0)=h'(0)$. Step 5.1 gives $|q(z)|\le2$ for $z\ne0$, so continuity bounds it at zero as well. Liouville's theorem ([[thm-liouville-bounded-entire-function]]) makes $q$ constant, hence $h(z)=az$ with $a=h'(0)=f'(0)/f(0)=D_Q'(0)/D_Q(0)$. Thus $D_Q(z)=e^{az}$. [L2, A6, step 3.1, step 5.1]

7.1 By [L2] and $D_Q(0)=1$, the coefficient in step 6.1 is $a=D_Q'(0)=\operatorname{tr}(Q)$. [L2, step 6.1]

7.2 Suppose for contradiction that $a\ne0$, and choose $\varepsilon=|a|/2>0$. The bound [A8] has $C_\varepsilon\ge1$ by evaluation at zero and [L2]. Set $t=2(\log C_\varepsilon+1)/|a|>0$ and $z_t=t\overline a/|a|$. By [A13, L4], $|z_t|=t$ and $az_t=t|a|$. Using step 6.1, [A12] and the [A8] bound gives $e^{t|a|}=|D_Q(z_t)|\le C_\varepsilon e^{\varepsilon t}$. Apply [A10, A11, L5] to take logarithms: $t|a|\le\log C_\varepsilon+\varepsilon t$, hence $t|a|/2\le\log C_\varepsilon$. But the definition of $t$ makes the left side $\log C_\varepsilon+1$, a contradiction. Thus $a=0$. [L2, A8, A10, A11, L5, A12, A13, L4, step 6.1, algebra]

7.3 If $Q=0$, [A7] with $E=\{0\}$ gives $D_Q\equiv1$, and [L2] then gives $\operatorname{tr}(Q)=D_Q'(0)=0$; this includes $H=\{0\}$. On $H=\mathbb C$ with $Q=qI$, the spectral condition forces $q=0$. Indeed, if $q\ne0$, then $Q1=q1$ and $qI-Q=0$ is not invertible, so [A4, L1] give $q\in\sigma(Q)$. For $q=0$, [A7] with $E=H$ calculates $D_Q(z)=1+zq=1$, and [L2] gives trace zero. If $\sigma(Q)=\varnothing$, step 1.1 still applies for every nonzero $z$ and no spectral enumeration is used. There is no endpoint parameter. The exact assumption is AC [A1]; it supplies AC$_\omega$ through [A14] for the trace-class and determinant inputs. The scalar argument uses no further choice. The claim is an implication, not an equivalence, so both iff directions are inapplicable. [A1, A4, L1, L2, A7, A14, step 1.1, step 6.1]

8.1 Step 6.1 with $a=0$ gives $D_Q(z)=1$ for every $z$; step 7.1 gives $\operatorname{tr}(Q)=0$. This proves both conclusions. [step 6.1, step 7.1, step 7.2]
\qed
