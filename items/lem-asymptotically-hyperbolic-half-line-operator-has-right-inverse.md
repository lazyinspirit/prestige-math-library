---
id: lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse
kind: lemma
title: A half-line first-order operator with a hyperbolic limit has a right inverse
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
proof_strategy: direct
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex, Proposition 1.6 and proof, pp. 40-43"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $A:[0,\infty)\to M_d(\mathbb R)$ be continuous and converge to a matrix
$L$ that is self-adjoint for some fixed positive-definite inner product and
has no zero eigenvalue. Put
$$F_A:C^1_0([0,\infty),\mathbb R^d)\to C^0_0([0,\infty),\mathbb R^d), \qquad F_Au=u'-A(t)u,$$
where the subscript $0$ means that the function, and also its first
derivative in $C^1_0$, tend to zero at infinity. Then $F_A$ has a bounded
linear right inverse $R_A$. If
$$S_A=\{u(0):u\in\ker F_A\},$$
then $S_A$ has dimension equal to the number of negative eigenvalues of $L$,
counted with multiplicity, and
$$S_A+\{R_Av(0):v\in C^0_0([0,\infty),\mathbb R^d),\ v(0)=0\} =\mathbb R^d.$$
Every homogeneous solution with initial value in $S_A$ decays
exponentially. The analogous assertions on $(-\infty,0]$ follow by time
reversal, with the positive eigenspace of the limiting matrix replacing the
negative eigenspace.

## Facts & Assumptions

**Given:** The finite-dimensional continuous path and hyperbolic
self-adjoint limit in the statement.

[F1] A self-adjoint finite-dimensional operator has orthogonal spectral
subspaces ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] A continuous linear matrix ODE has a unique solution for each initial
value on every finite interval
([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

## Proof

**Proof technique:** direct.

1.1 Use an equivalent norm from the inner product in the statement. By [F1], $\mathbb R^d=E^s\oplus E^u$ with spectral projections $P_s,P_u$ and some $\lambda>0$ such that $\|e^{tL}P_s\|\le e^{-\lambda t}$ for $t\ge0$ and $\|e^{tL}P_u\|\le e^{\lambda t}$ for $t\le0$. For the constant path $L$ define $$ (R_Lv)(t)=\int_0^t e^{(t-s)L}P_sv(s)\,ds -\int_t^\infty e^{(t-s)L}P_uv(s)\,ds. $$ Both integrals converge. Their norms are bounded by $2\lambda^{-1}\|v\|_\infty$; splitting the integrals into a compact initial interval and a tail where $v$ is small shows $R_Lv(t)\to0$. Differentiation gives $(R_Lv)'=L R_Lv+v$, so the derivative also tends to zero. Thus $R_L:C^0_0\to C^1_0$ is bounded and $F_LR_L=I$. [F1, given, algebra]

2.1 Write $B(t)=A(t)-L$. If $\|B\|_\infty$ is sufficiently small, $F_AR_L=I-BR_L$ on $C^0_0$, and the Neumann series gives the bounded right inverse $R_A:=R_L(I-BR_L)^{-1}$. It tends to $R_L$ in operator norm as $\|B\|_\infty\to0$. [step 1.1, algebra]

3.1 For this small-perturbation case choose $0<\beta<\lambda$ and, for $a\in E^s$, consider the integral equation $$u(t)=e^{tL}a+\int_0^t e^{(t-s)L}P_sB(s)u(s)\,ds -\int_t^\infty e^{(t-s)L}P_uB(s)u(s)\,ds.$$ On the Banach space of continuous paths with $\sup_{t\ge0}e^{\beta t}|u(t)|<\infty$, the integral operator has norm at most $\|B\|_\infty((\lambda-\beta)^{-1}+(\lambda+\beta)^{-1})$. Shrink the permitted $\|B\|_\infty$ so this is below one. Iterating from $e^{tL}a$ converges geometrically to a unique solution $u_a$; differentiating the equation gives $u_a'=Au_a$. Its initial value is $a+h_A(a)$, where $h_A(a)\in E^u$ and $\|h_A\|\to0$ as $\|B\|_\infty\to0$. Conversely, variation of constants for any homogeneous solution tending to zero gives this integral equation with $a=P_su(0)$: the unwanted unstable term is fixed by its terminal value at infinity. Uniqueness also holds in the unweighted bounded-path norm under the same smallness condition. Hence $S_A$ is exactly the graph of $h_A:E^s\to E^u$, has dimension $\dim E^s$, and all its solutions decay at least as $e^{-\beta t}$. [F1, F2, step 2.1, algebra]

4.1 Choose a smooth scalar $\rho$ supported in $(0,\infty)$ with integral one. For each $a\in E^u$ put $v_a(t)=-\rho(t)e^{tL}a$. Then $v_a(0)=0$ and step 1.1 gives $R_Lv_a(0)=a$. For a basis of $E^u$, step 2.1 makes the vectors $R_Av_a(0)$ close to that basis, while step 3.1 makes $S_A$ a graph close to $E^s$. Thus these vectors together with $S_A$ span $\mathbb R^d$ for sufficiently small $\|B\|_\infty$; this follows by invertibility of the finite matrix close to the identity in the fixed splitting $E^s\oplus E^u$. [step 1.1, step 2.1, step 3.1, algebra]

5.1 For general $A(t)\to L$, choose $T$ so large that the shifted path $A_T(s)=A(T+s)$ meets the smallness bounds of steps 2.1–4.1. Apply those steps on $[T,\infty)$. For $v\in C^0_0([0,\infty))$, set the solution's value at $T$ to $R_{A_T}(v(T+\cdot))(0)$ and solve $u'=Au+v$ backwards on $[0,T]$ by [F2]. This constructs a bounded linear right inverse $R_A:C^0_0\to C^1_0$; boundedness on the finite interval follows from the variation-of-constants formula and the finite maximum of $\|A(t)\|$ there. Homogeneous evolution carries $S_A$ isomorphically onto $S_{A_T}$, so $\dim S_A=\dim E^s$ and exponential decay persists. To obtain the spanning assertion at $0$, choose $w$ on the shifted tail with $w(0)=0$ and extend it by zero to $[0,T]$. The right inverse so constructed has $R_Av(0)=\Phi_A(0,T)R_{A_T}w(0)$, while $S_A=\Phi_A(0,T)S_{A_T}$; step 4.1 then spans all initial values. Finally $t\mapsto-t$ changes $u'-A(t)u=v$ on a negative half-line into $z'-(-A(-s))z=-v(-s)$ on a positive half-line; negative eigenvalues of $-A(-\infty)$ are positive eigenvalues of $A(-\infty)$. [F2, step 2.1, step 3.1, step 4.1, algebra] ∎