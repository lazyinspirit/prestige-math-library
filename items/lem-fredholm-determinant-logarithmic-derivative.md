---
id: lem-fredholm-determinant-logarithmic-derivative
kind: lemma
title: "Logarithmic derivative of the local Fredholm determinant"
status: published
origin: pipeline
deps:
  - def-bounded-linear-operator
  - def-countable-choice
  - def-hilbert-exterior-power-and-induced-operator
  - def-trace-class-operator
  - lem-fredholm-determinant-trace-norm-continuity-and-growth
  - lem-separable-trace-class-determinant-construction
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
justified_by: []
landmark: false
proof_strategy: direct
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
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4.3, Corollary 3.4.2, printed p. 40 (PDF p. 49)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a, Definition 14.34 and Lemma 14.39, printed pp. 585 and 587 (PDF pp. 597 and 599)"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, Appendix B §B.5.2, Lemma B.26, PDF p. 509"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a separable complex Hilbert
space and let $T:H\to H$ be trace class. Write $D_T$ for the locally
constructed determinant of [[lem-separable-trace-class-determinant-construction]].
For each $z\in\mathbb C$ for which $I+zT$ has a bounded inverse
$R_z\in\mathcal B(H)$,
$$D_T'(z)=D_T(z)\operatorname{tr}(T R_z).$$
Equivalently, $R_z=(I+zT)^{-1}$ in the displayed formula.

## Facts & Assumptions

**Given:** Countable Choice, a separable complex Hilbert space $H$, a
trace-class operator $T:H\to H$, and, at the point $z$ under consideration,
a bounded two-sided inverse $R_z$ of $I+zT$.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, is the declared choice
assumption ([[def-countable-choice]]).

[A2] For a trace-class operator $U$ on a separable complex Hilbert space, the
local determinant is
$$D_U(w)=\sum_{n\ge0}w^n\operatorname{tr}(\Lambda^nU),$$
is entire, and satisfies $D_U(0)=1$ and $D_U'(0)=\operatorname{tr}(U)$
([[lem-separable-trace-class-determinant-construction]]).

[A3] Trace-class operators form a linear space; if $U$ is trace class and $V$
is a bounded operator, then $UV$ and $VU$ are trace class
([[def-trace-class-operator]],
[[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A4] For $n\ge1$, the tensor definition of exterior powers gives
$\Lambda^n(cU)=c^n\Lambda^nU$ for $c\in\mathbb C$, while
$\Lambda^0(cU)=I_{\mathbb C}$
([[def-hilbert-exterior-power-and-induced-operator]]).

[A5] For trace-class $A,B$ on the same separable complex Hilbert space,
$$D_{A+B+AB}(1)=D_A(1)D_B(1)$$
([[lem-fredholm-determinant-trace-norm-continuity-and-growth]]).

[A6] Membership $R_z\in\mathcal B(H)$ means that $R_z$ is a bounded linear
operator, as required in the trace-class ideal estimate
([[def-bounded-linear-operator]]).

**Source audit:** Dyatlov–Zworski, *Mathematical Theory of Scattering Resonances*,
Appendix B §B.5.2, Lemma B.26 (PDF p. 509) proves the finite-rank formula for
a $C^1$ path $A_t$ whose ranges lie in one fixed finite-dimensional subspace,
assuming $I-A_t$ remains invertible along the path. Its proof reduces to
Jacobi's finite-dimensional determinant formula. The local proof below does
not extend that finite-rank statement by assertion: it derives the trace-class
identity from the already proved determinant multiplicativity and the
derivative at zero. Van Neerven, *Functional Analysis*, §14.5.a, Definition 14.34
(printed p. 585; PDF p. 597) gives the entire exterior-trace series and its
first-order expansion, and Lemma 14.39 (printed p. 587; PDF p. 599) gives
multiplicativity. Kostenko, *Trace Ideals with Applications*, §3.4.3,
Corollary 3.4.2 (printed p. 40; PDF p. 49) also gives the product identity.
Those passages were read in full; none states the general infinite-dimensional
logarithmic-derivative formula as used here. They inform the audit, while the
argument below proves the claim locally. No source uncertainty remains.

## Proof

**Proof technique:** direct.

1.1 Fix such a $z$, write $R=R_z$, put $M:=I+zT$, and set $S:=TR$. Since $MT=TM$ and $RM=MR=I$, the equality $R(MT)R=R(TM)R$ gives $TR=RT$, hence $MS=MTR=TMR=T$. The operator $S$ is trace class by [A3], because $T$ is trace class and $R$ is bounded; therefore the scalar multiples $zT$ and $hS$ are trace class for every $h\in\mathbb C$. [A3, A6, algebra]

1.2 For every trace-class $U$ and $c\in\mathbb C$, [A2] and [A4] give $$D_{cU}(1)=\sum_{n\ge0}\operatorname{tr}(\Lambda^n(cU))=D_U(c)$$: the degree-zero term is $1$ on both sides and for $n\ge1$ the degree-$n$ term is $c^n\operatorname{tr}(\Lambda^nU)$, including when $c=0$. [A2, A4]

2.1 For each $h\in\mathbb C$, step 1.1 gives $(I+zT)S=T$, so $$I+(z+h)T=(I+zT)(I+hS),$$ because the coefficient of $h$ on the right is $S+zTS=(I+zT)S=T$. [step 1.1, algebra]

3.1 Apply [A5] to trace-class $zT$ and $hS$; by step 2.1, $(z+h)T=zT+hS+zhTS$, so $$D_{(z+h)T}(1)=D_{zT}(1)D_{hS}(1)$$ and step 1.2 turns this into $$D_T(z+h)=D_T(z)D_S(h).$$ [A5, step 1.2, step 2.1]

4.1 Subtract $D_T(z)$ from step 3.1 and divide by $h\ne0$; as $h\to0$, [A2] gives $D_T'(z)=D_T(z)D_S'(0)=D_T(z)\operatorname{tr}(S)$, and $S=TR=T(I+zT)^{-1}$ gives the claimed formula. Taking $h=-z$ in step 3.1 and using $D_T(0)=1$ from [A2] gives $1=D_T(z)D_S(-z)$, so $D_T(z)\ne0$ and the identity is its ordinary logarithmic-derivative formula as well. [A2, step 1.1, step 3.1]

5.1 If $T=0$, then $S=0$, $D_T\equiv1$, and both sides are zero; this also covers $H=\{0\}$. On $H=\mathbb C$ with $T=tI$ and $1+zt\ne0$, $D_T(z)=1+zt$ and $R=(1+zt)^{-1}I$, so both sides equal $t$. At $z=0$, $R=I$ and step 4.1 gives $D_T'(0)=\operatorname{tr}(T)$. The complex derivative exists on the whole plane by [A2], and the difference quotient uses complex $h$, so there is no one-sided endpoint case. Countable Choice is exactly [A1], inherited through the trace-class, determinant, ideal, and multiplicativity suppliers; this proof makes no additional choices. The claim is not an equivalence, so both iff directions are inapplicable. [A1, A2, A3, A5, A6, step 1.1, step 3.1, step 4.1]
\qed
